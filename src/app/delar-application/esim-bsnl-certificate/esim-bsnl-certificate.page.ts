import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  AlertController,
  IonContent,
  ModalController,
  Platform,
} from "@ionic/angular";
import { IonicSelectableComponent } from "ionic-selectable";
import { jqxGridComponent } from "jqwidgets-ng/jqxgrid";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { ExportExcelService } from "src/app/services/export-excel.service";
import { serverUrl } from "src/environments/environment";
import { CertificateComponent } from "./certificate/certificate.component";
import { BsnlBulkComponent } from "./bsnl-bulk/bsnl-bulk.component";
import { GenerateInvoiceComponent } from "./generate-invoice/generate-invoice.component";

@Component({
  selector: "app-esim-bsnl-certificate",
  templateUrl: "./esim-bsnl-certificate.page.html",
  styleUrls: ["./esim-bsnl-certificate.page.scss"],
})
export class EsimBsnlCertificatePage implements OnInit {
  CAReportForm: FormGroup;
  show: boolean = false;
  showbutton: boolean = false;
  hideSerialNo = false;
  showDealer = false;
  showInvoice = false;
  data = "";
  showSerialNo = false;
  showInvoiceNumber = false;
  @ViewChild("selectComponent", { static: false })
  selectComponent: IonicSelectableComponent;
  source: { localdata: any };
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  @ViewChild("myGrid", { static: false }) myGrid: any;
  columns: any;
  tableData: any;
  selectedRow: any = [];
  Invoice: any;
  SerialNo: any;
  Dealer: any;
  dealername: any;
  details: any;
  carequestNo: any;
  checkbutton: boolean = true;
  companyId = localStorage.getItem("userName");
  myPlatform: any;
  arrow = false;
  zohocount: any;
  currentdate: any;
  invoicedata: any[];
  dealerid: any;
  headerdata: any;

  constructor(
    private platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private ajaxService: AjaxService,
    private commonService: CommonService,
    private ete: ExportExcelService,
    private alertController: AlertController
  ) {}

  @ViewChild(IonContent, { static: false }) content: any;

  scrollToTop() {
    this.content.scrollToTop(500);
  }

  scrollToBottom() {
    this.content.scrollToBottom(500);
  }

  horiscroll() {
    this.myGrid;
    console.log(this.myGrid);
  }

  logScrolling(ev) {
    if (ev.detail.scrollTop > 2) {
      this.arrow = true;
    }
    if (ev.detail.scrollTop < 2) {
      this.arrow = false;
    }
  }

  ngOnInit(): void {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    this.currentdate = today;
    this.createForm();
  }

  clear(d?) {
    this.CAReportForm.patchValue({
      CaRequestNo: "",
      InvoiceNo: "",
      SerialNo: "",
    });
    this.hideSerialNo = true;
    this.show = false;
    this.showInvoice = false;
    this.showSerialNo = false;
    this.showInvoiceNumber = false;
    if (d == 1) {
      this.SearchData();
    }
  }

  reset() {
    this.CAReportForm.patchValue({
      SerialNo: "",
    });
  }

  resets() {
    this.CAReportForm.patchValue({
      InvoiceNo: "",
    });
  }

  getcalist() {
    var url =
      serverUrl.web +
      "/esim/getCaRequest?companyid=" +
      localStorage.getItem("corpId") +
      "&dealer=" +
      localStorage.getItem("userName");
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.carequestNo = res;
    });
  }

  getCalist = (event: { component: IonicSelectableComponent; value: any }) => {
    if (event.value) this.CAReportForm.value.CaRequestNo = event.value;
    var url =
      serverUrl.web +
      "/esim/getDealerCAInvoice?companyid=" +
      localStorage.getItem("corpId") +
      "&dealer=" +
      localStorage.getItem("userName") +
      "&carequestid=" +
      this.CAReportForm.value.CaRequestNo;
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.Invoice = res;
      if (this.Invoice.length == 0) {
        this.showInvoiceNumber = false;
      } else {
        this.resets();
        this.showInvoiceNumber = true;
      }
    });
  };

  getinvoicelist = (event: {
    component: IonicSelectableComponent;
    value: any;
  }) => {
    if (event.value) this.CAReportForm.value.InvoiceNo = event.value;
    var url =
      serverUrl.web +
      "/esim/getInvoiceSerial?companyid=" +
      localStorage.getItem("corpId") +
      "&invoiceno=" +
      this.CAReportForm.value.InvoiceNo;
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.SerialNo = res;
      if (this.SerialNo.length == 0) {
        this.showSerialNo = false;
      } else {
        this.reset();
        this.showSerialNo = true;
      }
    });
  };
  getseriallist = (event: {
    component: IonicSelectableComponent;
    value: any;
  }) => {
    if (event.value) this.CAReportForm.value.SerialNo = event.value;
  };

  createForm() {
    this.CAReportForm = this.formBuilder.group({
      CaRequestNo: ["", Validators.required],
      InvoiceNo: [""],
      SerialNo: [""],
    });
  }

  SearchData(d?) {
    this.commonService.presentLoader();
    var url =
      serverUrl.web +
      "/esim/getDealerCARequestAll?companyid=" +
      localStorage.getItem("corpId") +
      "&carequestno=" +
      this.CAReportForm.value.CaRequestNo +
      "&invoiceno=" +
      this.CAReportForm.value.InvoiceNo.trim() +
      "&serialno=" +
      this.CAReportForm.value.SerialNo.trim();
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.tableData = res;
      this.commonService.dismissLoader();
      if (res.length == 0) {
        this.commonService.showConfirm("CA Report not available");
        this.show = false;
      } else {
        if (d == 1) {
          this.commonService.showConfirm(this.data);
          this.data = undefined;
        }
        this.details = res[0];

        this.show = true;
        this.renderer = (row: number, column: any, value: string) => {
          if (value == "" || null || undefined) {
            return (
              '<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
              "--" +
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
        this.myGrid.clearselection();
        if (localStorage.getItem("corpId") == "apm") {
          this.columns = [
            {
              text: "Request No",
              datafield: "carequestid",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 145,
            },
            {
              text: "Request Date",
              datafield: "carequestdate",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 145,
            },
            {
              text: "Request by",
              datafield: "carequestby",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 145,
            },
            {
              text: "VLTD No",
              datafield: "vltdsno",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 145,
            },
            {
              text: "Box No",
              datafield: "serialno",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 145,
            },
            {
              text: "ICCID No 1",
              datafield: "iccidno1",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 150,
            },
            {
              text: "ICCID No 2",
              datafield: "iccidno2",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 150,
            },

            {
              text: "IMEI No",
              datafield: "imei",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 145,
            },
            {
              text: "SIM 1",
              datafield: "sim1",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 120,
            },
            {
              text: "SIM 2",
              datafield: "sim2",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 120,
            },
            {
              text: "Slot No",
              datafield: "slotno",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 100,
            },
            {
              text: "Validity Requested",
              datafield: "validityperiod",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 155,
            },
            {
              text: "Card Activated Date",
              datafield: "cardactivationdate",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 160,
            },
            {
              text: "Card End Date",
              datafield: "cardenddate",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 140,
            },
            {
              text: "Card Status",
              datafield: "cardstatus",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 130,
            },

            {
              text: "Comment",
              datafield: "purcomment",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 90,
            },

            {
              text: "",
              datafield: "certificate",
              columntype: "button",
              cellsalign: "center",
              align: "center",
              width: 120,
              cellsrenderer: (): string => {
                return this.myPlatform == "desktop"
                  ? "BSNL Certificate"
                  : "<button>Certificate</button>";
              },
              buttonclick: (row): void => {
                this.CertificateModel(row);
              },
            },
          ];
        }
      }
    });
  }

  async CertificateModel(row) {
    const isModalOpened = await this.modalController.getTop();
    const modal = await this.modalController.create({
      component: CertificateComponent,
      cssClass: "validityform",
      componentProps: {
        value: this.selectedRow,
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data.data == "Certificate Created Successfully") {
        this.confirmModel();
      }
    });
    return await modal.present();
  }

  async confirmModel() {
    if (this.companyId == "apm-sa") {
      const alert = await this.alertController.create({
        header: "Message",
        backdropDismiss: false,
        message: "Certificate Created Successfully",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            handler: (data) => {
              this.SearchData();
              this.myGrid.clearselection();
              this.selectedRow = "";
            },
          },
          {
            text: "Ok",
            handler: (data) => {
              this.invoicepop();
            },
          },
        ],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: "Message",
        backdropDismiss: false,
        message: "Certificate Created Successfully",
        buttons: [
          {
            text: "Ok",
            handler: (data) => {
              this.SearchData();
              this.myGrid.clearselection();
              this.selectedRow = "";
            },
          },
        ],
      });
      await alert.present();
    }
  }

  invoicepop() {
    if (this.zohocount != 0) {
      let arr = [];
      arr.push({
        imei: this.selectedRow.imei,
      });
      var data;
      data = {
        headerid: "",
        dealerid: this.selectedRow.carequestby,
        invoiceno: "",
        invoicedate: this.currentdate,
        invoiceamount: "",
        noofunits: "1",
        imeinos: arr,
        createdby: localStorage.getItem("userName"),
      };
      this.commonService.presentLoader();
      const url = serverUrl.web + "/esim/getcertificatezohobookproductdetails";
      this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
        this.commonService.dismissLoader();
        if (Array.isArray(res)) {
          this.invoicedata = res;
          this.invoice();
        } else if (res.message) {
          this.commonService.showConfirm(res.message);
        }
      });
    } else {
      this.SearchData();
      this.myGrid.clearselection();
      this.selectedRow = "";
    }
  }

  async invoice() {
    const modal = await this.modalController.create({
      component: GenerateInvoiceComponent,
      cssClass: "invoiceform",
      componentProps: {
        value: this.invoicedata,
        header: this.selectedRow.carequestby,
      },
      backdropDismiss: false,
    });
    modal.onDidDismiss().then((data) => {
      if (data.data.data == "refresh") {
        this.SearchData();
      } else if (data.data.data == "Invoice Details Saved Successfully") {
        this.SearchData();
        this.commonService.showConfirm("Invoice Details Saved Successfully");
      }
    });
    return await modal.present();
  }

  async bulkcertificateModel(row) {
    let selectdata = this.myGrid.getselectedrowindexes();
    let arr = [];

    let isSameDealerId = true;
    if (selectdata.length > 1) {
      for (let i = 1; i < selectdata.length; i++) {
        if (
          this.myGrid["attrSource"]["originaldata"][selectdata[i]]
            .carequestby !=
          this.myGrid["attrSource"]["originaldata"][selectdata[0]].carequestby
        ) {
          isSameDealerId = false;
          break;
        }
      }
    }

    if (isSameDealerId && selectdata.length > 0) {
      for (let i = 0; i < selectdata.length; i++) {
        arr.push({
          dealerid:
            this.myGrid["attrSource"]["originaldata"][selectdata[i]]
              .carequestby,
          imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
          vltdsno:
            this.myGrid["attrSource"]["originaldata"][selectdata[i]].vltdsno,
          createdby:
            this.myGrid["attrSource"]["originaldata"][selectdata[i]].createdby,
        });
      }
      const isModalOpened = await this.modalController.getTop();
      if (!isModalOpened) {
        const modal = await this.modalController.create({
          component: BsnlBulkComponent,
          cssClass: "validityform",
          componentProps: {
            value: arr,
          },
        });
        modal.onDidDismiss().then((d) => {
          if (d.data.data == "Certificate Created Successfully") {
            // this.SearchData(1);
            // this.data = d.data.data;
            this.dealerid = d.data.value;
            this.bulkconfirmModel();
          }
        });
        return await modal.present();
      }
    } else {
      this.commonService.dismissLoader();
      this.commonService.showConfirm(
        "The Selected Imei has been different Dealer ID, Kindly Select the Same Dealer ID"
      );
    }
  }

  async bulkconfirmModel() {
    if (this.companyId == "apm-sa") {
      const alert = await this.alertController.create({
        header: "Message",
        backdropDismiss: false,
        message: "Certificate Created Successfully",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            handler: (data) => {
              this.SearchData();
              this.myGrid.clearselection();
              this.selectedRow = "";
            },
          },
          {
            text: "Ok",
            handler: (data) => {
              this.bulkinvoicepop();
            },
          },
        ],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: "Message",
        backdropDismiss: false,
        message: "Certificate Created Successfully",
        buttons: [
          {
            text: "Ok",
            handler: (data) => {
              this.SearchData();
              this.myGrid.clearselection();
              this.selectedRow = "";
            },
          },
        ],
      });
      await alert.present();
    }
  }

  bulkinvoicepop() {
    if (this.zohocount != 0) {
      let selectdata = this.myGrid.getselectedrowindexes();
      let arr = [];
      for (let i = 0; i < selectdata.length; i++) {
        arr.push({
          imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
        });
      }
      var data;
      data = {
        headerid: "",
        dealerid:
          this.myGrid["attrSource"]["originaldata"][selectdata[0]].carequestby,
        invoiceno: "",
        invoicedate: this.currentdate,
        invoiceamount: "",
        noofunits: selectdata.length,
        imeinos: arr,
        createdby: localStorage.getItem("userName"),
      };
      this.headerdata = data;
      this.commonService.presentLoader();
      const url = serverUrl.web + "/esim/getcertificatezohobookproductdetails";
      this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
        this.commonService.dismissLoader();
        if (Array.isArray(res)) {
          this.invoicedata = res;
          this.bulkinvoice();
        } else if (res.message) {
          this.commonService.showConfirm(res.message);
        }
      });
    } else {
      this.SearchData();
      this.myGrid.clearselection();
      this.selectedRow = "";
    }
  }

  async bulkinvoice() {
    const modal = await this.modalController.create({
      component: GenerateInvoiceComponent,
      cssClass: "invoiceform",
      componentProps: {
        value: this.invoicedata,
        header: this.headerdata.dealerid,
      },
      backdropDismiss: false,
    });
    modal.onDidDismiss().then((data) => {
      if (data.data.data == "refresh") {
        this.SearchData();
      } else if (data.data.data == "Invoice Details Saved Successfully") {
        this.SearchData();
        this.commonService.showConfirm("Invoice Details Saved Successfully");
      }
    });
    return await modal.present();
  }

  myGridOnRowclick(event: any): void {
    this.selectedRow = event.args.row.bounddata;
  }

  myGridOnRowSelect(event: any): void {
    this.selectedRow = this.myGrid.getselectedrowindexes();
    if (this.selectedRow.length > 0) {
      this.checkbutton = false;
    } else {
      this.checkbutton = true;
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
      title: "Device CA Status Update Details",
      data: forExcel,
      headers: Header,
    };
    this.ete.exportExcel(reportData);
  }

  ngAfterViewInit() {
    this.myGrid.horizontalscrollbarstep(["70"]);
    this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
  }

  ionViewWillEnter() {
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
    this.zohocount = localStorage.getItem("zohoInvoice");
    this.clear();
    this.getcalist();
    this.SearchData();
  }
}
