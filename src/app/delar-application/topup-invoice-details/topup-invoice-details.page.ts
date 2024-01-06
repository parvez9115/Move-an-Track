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
import { PdfLogoService } from "src/app/services/pdf-logo.service";
import { serverUrl } from "src/environments/environment";
import { ReceivedTopupDetailsComponent } from "./received-topup-details/received-topup-details.component";
import { ViewImeiComponent } from "./view-imei/view-imei.component";
import { ViewTopupDetailsComponent } from "./view-topup-details/view-topup-details.component";
import * as XLSX from "xlsx";
import { ExportExcelService } from "src/app/services/export-excel.service";
import { GenerateInvoiceComponent } from "./generate-invoice/generate-invoice.component";
import { EditGenerateInvoiceComponent } from "./edit-generate-invoice/edit-generate-invoice.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-topup-invoice-details",
  templateUrl: "./topup-invoice-details.page.html",
  styleUrls: ["./topup-invoice-details.page.scss"],
})
export class TopupInvoiceDetailsPage implements OnInit {
  topupinvoiceForm: FormGroup;
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
  today = new Date();
  page = [];
  Topuplist: any;
  showplaname: boolean = false;
  name: boolean = false;
  willDownload = false;
  dataString: any;
  output = "";
  file;
  imeiIssues = [];
  excellKeyValid: boolean = false;
  companyId = localStorage.getItem("userName");
  arrow = false;
  invoicedata: any;
  headerdata: any;
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
    this.topupinvoiceForm.patchValue({
      dealerid: "",
      invoiceno: "",
      invoiceamount: "",
      invoicedate: today,
      noofunits: "",
      fileupload: "",
      invoicedocument: "",
    });
    this.showplaname = false;
    this.uploader.queue.length = 0;
  }

  fileclear() {
    this.topupinvoiceForm.patchValue({
      fileupload: "",
    });
  }

  createForm() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    var todaytime = now.getHours() + ":" + now.getMinutes();
    this.topupinvoiceForm = this.formBuilder.group({
      dealerid: ["", Validators.required],
      invoiceno: [0],
      invoicedate: [today],
      invoiceamount: [0],
      noofunits: ["", Validators.required],
      fileupload: [""],
    });
  }

  getDealer() {
    var url = serverUrl.web + "/esim/getDealer";
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.Dealer = res;
    });
  }

  pendinginvoice() {
    var url =
      serverUrl.web + "/esim/getesimInvoiceCount?pagename=Topup&status=Pending";
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
      queryParams: { pageName: "Topup" },
    });
  }

  onFileChange(ev) {
    var fileName = ev.srcElement.files[0];
    this.name = fileName.name.includes(".xlsx");
    if (this.name == true) {
      this.dataString = [];
      let workBook = null;
      let jsonData = null;
      const reader = new FileReader();
      const file = ev.srcElement.files[0];
      reader.onload = (event) => {
        const data = reader.result;
        workBook = XLSX.read(data, { type: "binary" });
        jsonData = workBook.SheetNames.reduce((initial, name) => {
          const sheet = workBook.Sheets[name];
          initial[name] = XLSX.utils.sheet_to_json(sheet);
          return initial;
        }, {});

        let json = [];
        for (let i = 0; i < jsonData["Sheet1"].length; i++) {
          let newData = {};
          newData["imei"] = jsonData["Sheet1"][i]["imei"].toString();
          json.push(newData);
        }
        this.dataString = json;
        this.output = this.dataString.slice(0, 300).concat("...");
      };
      reader.readAsBinaryString(file);
    } else {
      this.commonService.showConfirm("Please insert only excel file (.xlsx)");
    }
  }

  async add() {
    if (this.topupinvoiceForm.value.fileupload == "") {
      this.commonService.showConfirm("IMEI Excel not Upload");
    } else {
      if (this.dataString.length == 0) {
        this.commonService.showConfirm(
          "Check your excell file,don't enter blank spaces"
        );
        this.fileclear();
      } else {
        var excellKeys = Object.keys(this.dataString[0]);
        for (var i = 0; i < excellKeys.length; i++) {
          if (excellKeys[i] == "imei") {
            console.log("present");
            this.excellKeyValid = true;
          }
        }

        if (this.name == true && this.excellKeyValid == true) {
          this.button = true;
          var data;
          data = {
            headerid: "",
            dealerid: this.topupinvoiceForm.value.dealerid.toString(),
            invoiceno: this.topupinvoiceForm.value.invoiceno.toString(),
            invoicedate: this.topupinvoiceForm.value.invoicedate.toString(),
            invoiceamount: this.topupinvoiceForm.value.invoiceamount.toString(),
            noofunits: this.topupinvoiceForm.value.noofunits.toString(),
            imeinos: this.dataString,
            createdby: localStorage.getItem("userName"),
          };
          this.headerdata = data;
          this.commonService.presentLoader();
          const url = serverUrl.web + "/esim/gettopupzohobookproductdetails";
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
      }
    }
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

  getdatas() {
    this.commonService.presentLoader();
    var url = serverUrl.web + "/esim/getAllTopupEsimInvoice";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      if (res.length == 0) {
        this.commonService.dismissLoader();
      }
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
            this.editinvoice();
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
        {
          text: "",
          datafield: "viewimei",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 80,
          cellsrenderer: (): string => {
            return "View IMEI";
          },
          buttonclick: (row): void => {
            this.imeipop(row);
          },
        },
      ];
    });
  }

  async receivedpopup(row) {
    const modal = await this.modalController.create({
      component: ReceivedTopupDetailsComponent,
      cssClass: "payform",
      componentProps: {
        value: this.selectedRow.headerid,
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data.data == "Topup Invoice Detail Saved Successfully") {
        this.getdatas();
      }
    });
    return await modal.present();
  }

  async editinvoice() {
    const modal = await this.modalController.create({
      component: EditGenerateInvoiceComponent,
      cssClass: "invoiceform",
      componentProps: {
        value: this.selectedRow,
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

  async detailspop(row) {
    const modal = await this.modalController.create({
      component: ViewTopupDetailsComponent,
      cssClass: "viewserialfrom",
      componentProps: {
        value: this.selectedRow.invoiceno,
      },
    });
    modal.onDidDismiss().then(() => {});
    return await modal.present();
  }

  async imeipop(row) {
    const modal = await this.modalController.create({
      component: ViewImeiComponent,
      cssClass: "simupdateform",
      componentProps: {
        valueone: this.selectedRow.invoiceno,
        value: this.selectedRow.imeinos,
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data.data == "IMEI Removed Successfully") {
        this.getdatas();
      }
    });
    return await modal.present();
  }
  myGridOnRowSelect(event: any): void {
    this.selectedRow = event.args.row.bounddata;
    this.show = true;
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
      title: "Device Topup Invoice Details",
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
    this.pendinginvoice();
  }
}
