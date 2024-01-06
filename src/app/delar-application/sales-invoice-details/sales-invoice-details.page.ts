import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  AlertController,
  IonContent,
  ModalController,
  Platform,
} from "@ionic/angular";
import { IonicSelectableComponent } from "ionic-selectable";
import { FileUploader } from "ng2-file-upload";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { ExportExcelService } from "src/app/services/export-excel.service";
import { PdfLogoService } from "src/app/services/pdf-logo.service";
import { serverUrl } from "src/environments/environment";
import { ReceivedDetailsComponent } from "./received-details/received-details.component";
import { ViewDetailsComponent } from "./view-details/view-details.component";
import { GenerateInvoiceComponent } from "./generate-invoice/generate-invoice.component";
import { EditGenerateInvoiceComponent } from "./edit-generate-invoice/edit-generate-invoice.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-sales-invoice-details",
  templateUrl: "./sales-invoice-details.page.html",
  styleUrls: ["./sales-invoice-details.page.scss"],
})
export class SalesInvoiceDetailsPage implements OnInit {
  SalesinvoiceForm: FormGroup;
  @ViewChild("myGrid", { static: false }) myGrid: any;
  columns: any;
  source: { localdata: any };
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  myPlatform: any;
  selectedRow: any;
  button: boolean = false;
  tableData: any;
  show: boolean = false;
  service: any;
  public uploader: FileUploader = new FileUploader({});
  editdetail: any;
  hideSerialNo: boolean = false;
  Dealer: any;
  invoiceno: any;
  maxDate;
  companyId = localStorage.getItem("userName");
  today = new Date();
  productlist: any;
  arrow = false;
  invoicedata: any[];
  headerdata: any;
  selectedProduct: "AIS1402A";
  provider: any;
  editdata: any;
  editinvoicedata: any[];
  invoices = [];
  color = "";

  constructor(
    public platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private alertController: AlertController,
    private commonService: CommonService,
    private ajaxService: AjaxService,
    private pdfLogoService: PdfLogoService,
    private ete: ExportExcelService,
    public router: Router
  ) {}

  @ViewChild(IonContent, { static: false }) content: any;

  scrollToTop() {
    this.content.scrollToTop(500);
  }

  scrollToBottom() {
    this.content.scrollToBottom(500);
  }

  logScrolling(ev) {
    if (ev.detail.scrollTop > 2) {
      this.arrow = true;
    }
    if (ev.detail.scrollTop < 2) {
      this.arrow = false;
    }
  }

  clear() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    var todaytime = now.getHours() + ":" + now.getMinutes();
    this.hideSerialNo = false;
    this.SalesinvoiceForm.patchValue({
      dealerid: "",
      serviceprovider: "",
      invoiceno: "",
      invoiceamount: "",
      invoicedate: today,
      noofunits: "",
    });
  }

  createForm() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    var todaytime = now.getHours() + ":" + now.getMinutes();
    this.SalesinvoiceForm = this.formBuilder.group({
      dealerid: ["", Validators.required],
      serviceprovider: ["", Validators.required],
      invoiceno: [""],
      invoicedate: [today],
      invoiceamount: [""],
      noofunits: ["", Validators.required],
    });
  }

  getDealer() {
    var url = serverUrl.web + "/esim/getDealer";
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.Dealer = res;
    });
  }

  getserviceprovider() {
    const url = serverUrl.web + "/esim/getServiceProvider";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.provider = res;
    });
  }

  getModellist() {
    var url = serverUrl.web + "/esim/getModel";
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.productlist = res;
    });
  }

  pendinginvoice() {
    var url =
      serverUrl.web + "/esim/getesimInvoiceCount?pagename=Sales&status=Pending";
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.invoices = res;
      if (res.pending != 0) {
        this.color = "green";
      } else {
        this.color = "red";
      }
    });
  }

  async invoicepopup() {
    this.router.navigate(["/pending-invoice"], {
      queryParams: { pageName: "Sales" },
    });
  }

  async add() {
    this.button = true;
    var data;
    data = {
      headerid: "",
      dealerid: this.SalesinvoiceForm.value.dealerid.toString(),
      serviceprovider: this.SalesinvoiceForm.value.serviceprovider.toString(),
      invoiceno: this.SalesinvoiceForm.value.invoiceno.toString(),
      invoicedate: this.SalesinvoiceForm.value.invoicedate.toString(),
      invoiceamount: this.SalesinvoiceForm.value.invoiceamount.toString(),
      noofunits: this.SalesinvoiceForm.value.noofunits.toString(),
      createdby: localStorage.getItem("userName"),
    };

    this.headerdata = data;
    this.commonService.presentLoader();
    const url = serverUrl.web + "/esim/getsaleszohobookproductdetails";
    this.ajaxService.ajaxPostWithFile(url, data).subscribe((res) => {
      this.commonService.dismissLoader();
      if (Array.isArray(res)) {
        this.invoicedata = res;
        this.clear();
        this.button = false;
        this.invoice();
      } else if (res.message) {
        this.commonService.showConfirm(res.message);
        this.button = false;
      }
    });
  }

  async invoice() {
    const modal = await this.modalController.create({
      component: GenerateInvoiceComponent,
      cssClass: "invoiceform",
      componentProps: {
        value: this.invoicedata,
        header: this.headerdata,
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data.data == "Invoice Details Saved Successfully") {
        this.show = false;
        this.getdatas();
        this.commonService.showConfirm("Invoice Details Saved Successfully");
      }
    });
    return await modal.present();
  }

  edit() {
    this.button = true;
    var data;
    data = {
      headerid: this.selectedRow.headerid.toString(),
      dealerid: this.SalesinvoiceForm.value.dealerid.toString(),
      serviceprovider: this.SalesinvoiceForm.value.serviceprovider.toString(),
      invoiceno: this.SalesinvoiceForm.value.invoiceno.toString(),
      invoicedate: this.SalesinvoiceForm.value.invoicedate.toString(),
      invoiceamount: this.SalesinvoiceForm.value.invoiceamount.toString(),
      noofunits: this.SalesinvoiceForm.value.noofunits.toString(),
      createdby: localStorage.getItem("userName"),
    };
    this.editdata = data;
    this.commonService.presentLoader();
    const url = serverUrl.web + "/esim/geteditsaleszohobookproductdetails";
    this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
      this.commonService.dismissLoader();
      if (Array.isArray(res)) {
        this.editinvoicedata = res;
        this.clear();
        this.button = false;
        this.editinvoice();
      } else if (res.message) {
        this.commonService.showConfirm(res.message);
        this.button = false;
      }
    });
  }

  async editinvoice() {
    const modal = await this.modalController.create({
      component: EditGenerateInvoiceComponent,
      cssClass: "invoiceform",
      componentProps: {
        value: this.editinvoicedata,
        header: this.editdata,
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data.data == "Invoice Details Saved Successfully") {
        this.show = false;
        this.getdatas();
        this.commonService.showConfirm("Invoice Details Saved Successfully");
      }
    });
    return await modal.present();
  }

  setValue() {
    this.hideSerialNo = true;
    this.SalesinvoiceForm.patchValue({
      dealerid: this.selectedRow.dealerid,
      serviceprovider: this.selectedRow.serviceprovider,
      invoiceno: this.selectedRow.invoiceno,
      invoicedate: this.selectedRow.invoicedate,
      invoiceamount: this.selectedRow.invoiceamount,
      noofunits: this.selectedRow.noofunits,
      createdby: localStorage.getItem("userName"),
    });
  }

  getdatas() {
    this.commonService.presentLoader();
    var url = serverUrl.web + "/esim/getAllSalesEsimInvoice";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.tableData = res;
      this.pendinginvoice();
      this.commonService.dismissLoader();
      this.renderer = (row: number, column: any, value: string) => {
        if (value == "" || null || undefined) {
          return (
            '<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
            0 +
            "</span>"
          );
        } else {
          return (
            '<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
            value +
            "</span>"
          );
        }
      };
      this.source = { localdata: this.tableData };
      this.dataAdapter = new jqx.dataAdapter(this.source);
      this.columns = [
        {
          text: "Dealer",
          datafield: "dealerid",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 85,
        },
        {
          text: "Invoice No",
          datafield: "invoiceno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 105,
        },
        {
          text: "Invoice Date",
          datafield: "invoicedate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 105,
        },
        {
          text: "Invoice Amt",
          datafield: "invoiceamount",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 90,
        },
        {
          text: "Total Received Amt",
          datafield: "totalamountreceived",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 140,
        },
        {
          text: "Balance Amt",
          datafield: "balanceamount",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 90,
        },
        {
          text: "No of Units",
          datafield: "noofunits",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 85,
        },
        {
          text: "Total Supplied Units",
          datafield: "totalsuppliedunits",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 140,
        },
        {
          text: "Balance Units",
          datafield: "balanceunits",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 95,
        },
        {
          text: "Created by",
          datafield: "createdby",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 85,
        },
        {
          text: "",
          datafield: "receivedetails",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 100,
          cellsrenderer: (): string => {
            return this.myPlatform == "desktop"
              ? "Received Amt"
              : "<button>Received Amt</button>";
          },
          buttonclick: (row): void => {
            this.receivedpopup(row);
          },
        },
        {
          text: "",
          datafield: "edit",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 60,
          cellsrenderer: (): string => {
            return this.myPlatform == "desktop"
              ? "Edit"
              : "<button>Edit</button>";
          },
          buttonclick: (row): void => {
            this.setValue();
          },
        },
        {
          text: "",
          datafield: "detail",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 80,
          cellsrenderer: (): string => {
            return this.myPlatform == "desktop"
              ? "Details"
              : "<button>Details</button>";
          },
          buttonclick: (row): void => {
            this.detailspop(row);
          },
        },
        {
          text: "",
          datafield: "download",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 80,
          cellsrenderer: (): string => {
            return "Invoice";
          },
          buttonclick: (row): void => {
            this.Download(row);
          },
        },
      ];
    });
  }

  async receivedpopup(row) {
    const modal = await this.modalController.create({
      component: ReceivedDetailsComponent,
      cssClass: "payform",
      componentProps: {
        value: this.selectedRow.headerid,
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data.data == "Sales Invoice Detail Saved Successfully") {
        this.getdatas();
      }
    });
    return await modal.present();
  }

  async detailspop(row) {
    const modal = await this.modalController.create({
      component: ViewDetailsComponent,
      cssClass: "viewserialfrom",
      componentProps: {
        value: this.selectedRow.invoiceno,
      },
    });
    modal.onDidDismiss().then(() => {});
    return await modal.present();
  }

  async Download(row) {
    if (this.selectedRow.uploadinvoice != null) {
      const link = document.createElement("a");
      link.href = this.selectedRow.uploadinvoice;
      link.target = "_blank";
      link.click();
    } else {
      this.commonService.showConfirm("Invoice Document Not Uploaded");
    }
  }

  myGridOnRowSelect(event: any): void {
    this.selectedRow = event.args.row.bounddata;
    this.show = true;
  }
  newfunc() {
    let data = this.tableData;
    console.log(this.myGrid);

    let coloumnArray = [];

    this.myGrid.attrColumns.map((p) => {
      coloumnArray.push(p.datafield);
    });

    for (let i = 0; i < data.length; i++) {
      let k = Object.keys(data[i]);
      for (let j = 0; j < k.length; j++) {
        if (coloumnArray.includes(k[j]) == false) {
          delete data[i][k[j].toString()];
        }
      }
    }

    let forExcel = [];
    data.map((val) => {
      let newArray = Object.values(val);
      forExcel.push(newArray);
    });

    var Header = Object.keys(data[0]);

    let reportData = {
      title: "Esim Sales Invoice Details",
      data: forExcel,
      headers: Header,
    };
    this.ete.exportExcel(reportData);
  }

  ngOnInit() {
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
    this.maxDate = this.today.getFullYear() + "-";
    this.maxDate +=
      (this.today.getMonth() + 1 < 10
        ? "0" + (this.today.getMonth() + 1).toString()
        : (this.today.getMonth() + 1).toString()) + "-";
    this.maxDate +=
      this.today.getDate() < 10
        ? "0" + this.today.getDate().toString()
        : this.today.getDate().toString();
    this.createForm();
  }

  ngAfterViewInit() {
    this.myGrid.horizontalscrollbarstep(["70"]);
    this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
  }

  ionViewWillEnter() {
    this.clear();
    this.getDealer();
    this.getdatas();
    this.getModellist();
    this.getserviceprovider();
    this.pendinginvoice();
  }
}
