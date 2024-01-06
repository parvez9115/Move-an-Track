import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import {
  AlertController,
  LoadingController,
  ModalController,
  Platform,
} from "@ionic/angular";
import { FileUploader, FileLikeObject } from "ng2-file-upload";

import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";
import * as XLSX from "xlsx";

import { PdfLogoService } from "src/app/services/pdf-logo.service";
import { ExportExcelService } from "src/app/services/export-excel.service";
import { IonicSelectableComponent } from "ionic-selectable";

@Component({
  selector: "app-sensorise-invoice-detail",
  templateUrl: "./sensorise-invoice-detail.page.html",
  styleUrls: ["./sensorise-invoice-detail.page.scss"],
})
export class SensoriseInvoiceDetailPage implements OnInit {
  PurchaseForm: FormGroup;
  @ViewChild("selectComponent", { static: false })
  selectComponent: IonicSelectableComponent;
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
  paydetail: any;
  editdetail: any;
  hideSerialNo: boolean = false;
  maxDate;
  companyId = localStorage.getItem("userName");
  today = new Date();
  Productlist: any;
  actionvalue: any;
  showSerialNo = false;
  hideSerial = false;
  type = "old";

  constructor(
    public platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private alertController: AlertController,
    private commonService: CommonService,
    private ajaxService: AjaxService,
    private pdfLogoService: PdfLogoService,
    private ete: ExportExcelService
  ) {}

  clear() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    this.hideSerialNo = false;
    this.PurchaseForm.patchValue({
      invoicenumber: "",
      invoiceamount: "",
      actionname: "",
      productname: "",
      noofunits: "",
      invoicedate: today,
      invoicedocument: "",
    });
    this.showSerialNo = false;
    this.uploader.queue.length = 0;
    console.log(this.PurchaseForm);
  }

  reset() {
    this.PurchaseForm.patchValue({
      productname: "",
    });
  }

  createForm() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    var todaytime = now.getHours() + ":" + now.getMinutes();
    this.PurchaseForm = this.formBuilder.group({
      invoicenumber: ["", Validators.required],
      invoicedate: [today, Validators.required],
      invoiceamount: ["", Validators.required],
      actionname: ["", Validators.required],
      productname: ["", Validators.required],
      noofunits: ["", Validators.required],
      invoicedocument: [""],
    });
  }

  action() {
    const url = serverUrl.web + "/sensorise/getSensoriseActionDetails";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.actionvalue = res;
    });
  }

  getproductlist = (event: {
    component: IonicSelectableComponent;
    value: any;
  }) => {
    if (event.value) this.PurchaseForm.value.actionname = event.value;
    var url =
      serverUrl.web +
      "/sensorise/getSensoriseProductDetails?actionname=" +
      this.PurchaseForm.value.actionname;
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.Productlist = res;
      if (this.Productlist.length == 0) {
        this.showSerialNo = false;
      } else {
        this.showSerialNo = true;
        this.PurchaseForm.patchValue({
          productname: "",
        });
      }
    });
  };

  async add() {
    this.button = true;
    this.commonService.presentLoader();
    const file = this.uploader;
    var data;
    data = {
      headerid: "",
      invoiceno: this.PurchaseForm.value.invoicenumber.toString(),
      invoicedate: this.PurchaseForm.value.invoicedate.toString(),
      noofunits: this.PurchaseForm.value.noofunits.toString(),
      invoiceamount: this.PurchaseForm.value.invoiceamount.toString(),
      actionname: this.PurchaseForm.value.actionname.toString(),
      productname: this.PurchaseForm.value.productname.toString(),
      createdby: localStorage.getItem("userName"),
    };

    const testData: FormData = new FormData();

    if (file.queue.length != 0) {
      testData.append("invoicedocument", file.queue[0]._file);
      testData.append("data", JSON.stringify(data));
    } else {
      const api = await fetch(this.pdfLogoService.imgdata.no_img);
      const blob = await api.blob();
      const default_file = new File([blob], "File name", {
        type: "image/png",
      });
      testData.append("invoicedocument", default_file);
      testData.append("data", JSON.stringify(data));
    }

    const url = serverUrl.web + "/sensorise/saveSensoriseInvoiceDetails";
    this.ajaxService.ajaxPostWithFile(url, testData).subscribe((res) => {
      if (res) {
        this.commonService.dismissLoader();
      }
      if (res.message == "Sensorise Invoice Saved Successfully") {
        this.commonService.showConfirm(res.message);
        this.clear();
        this.tableData = res;
        this.button = false;
        this.myGrid.clearselection();
        this.getdatas();
      } else if (res.message == "Sensorise Invoice Not Saved Successfully") {
        this.commonService.showConfirm(res.message);
        this.button = false;
      } else {
        this.button = false;
        this.commonService.showConfirm(res.message);
      }
    });
  }

  async edit() {
    this.button = true;
    this.commonService.presentLoader();
    const file = this.uploader;
    var data;
    data = {
      headerid: this.selectedRow.headerid.toString(),
      invoiceno: this.PurchaseForm.value.invoicenumber.toString(),
      invoicedate: this.PurchaseForm.value.invoicedate.toString(),
      noofunits: this.PurchaseForm.value.noofunits.toString(),
      invoiceamount: this.PurchaseForm.value.invoiceamount.toString(),
      actionname: this.PurchaseForm.value.actionname.toString(),
      productname: this.PurchaseForm.value.productname.toString(),
      createdby: localStorage.getItem("userName"),
    };

    const testData: FormData = new FormData();

    if (file.queue.length != 0) {
      testData.append("invoicedocument", file.queue[0]._file);
      testData.append("data", JSON.stringify(data));
    } else {
      const api = await fetch(this.pdfLogoService.imgdata.no_img);
      const blob = await api.blob();
      const default_file = new File([blob], "File name", {
        type: "image/png",
      });
      testData.append("invoicedocument", default_file);
      testData.append("data", JSON.stringify(data));
    }

    const url = serverUrl.web + "/sensorise/saveSensoriseInvoiceDetails";
    this.ajaxService.ajaxPostWithFile(url, testData).subscribe((res) => {
      if (res) {
        this.commonService.dismissLoader();
      }
      if (res.message == "Sensorise Invoice Saved Successfully") {
        this.commonService.showConfirm(res.message);
        this.clear();
        this.tableData = res;
        this.getdatas();
        this.myGrid.clearselection();
      } else if (res.message == "Sensorise Invoice Not Saved Successfully") {
        this.button = false;
        this.commonService.showConfirm(res.message);
        this.button = false;
      } else {
        this.button = false;
        this.commonService.showConfirm(res.message);
      }
    });
  }

  setValue() {
    var urls =
      serverUrl.web +
      "/sensorise/getSensoriseProductDetails?actionname=" +
      this.selectedRow.actionname;
    this.ajaxService.ajaxGetPerference(urls).subscribe((res) => {
      this.Productlist = res;
      if (this.Productlist.length == 0) {
        this.showSerialNo = false;
      } else {
        this.showSerialNo = true;
        this.button = false;
        this.hideSerialNo = true;
        this.showSerialNo = true;
        this.PurchaseForm.patchValue({
          invoicenumber: this.selectedRow.invoiceno,
          invoicedate: this.selectedRow.invoicedate,
          noofunits: this.selectedRow.noofunits,
          invoiceamount: this.selectedRow.invoiceamount,
          actionname: this.selectedRow.actionname,
          productname: this.selectedRow.productname,
        });
      }
    });
  }
  getdatas() {
    this.commonService.presentLoader();
    var url = serverUrl.web + "/sensorise/getSensoriseInvoiceDetail";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.tableData = res;
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
          text: "Invoice No",
          datafield: "invoiceno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 130,
        },
        {
          text: "Invoice Date",
          datafield: "invoicedate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 110,
        },
        {
          text: "Invoice Amount",
          datafield: "invoiceamount",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 120,
        },
        {
          text: "Action Name",
          datafield: "actionname",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 120,
        },
        {
          text: "Product Name",
          datafield: "productname",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 120,
        },
        {
          text: "No Of Units",
          datafield: "noofunits",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 115,
        },
        {
          text: "Total Supplied Units",
          datafield: "usedunits",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 150,
        },
        {
          text: "Balance Units",
          datafield: "balanceunits",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 110,
        },

        {
          text: "",
          datafield: "Edit Detail",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 55,
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
          datafield: "uploaddocument",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 65,
          cellsrenderer: (): string => {
            return "Invoice";
          },
          buttonclick: (row): void => {
            this.Download();
          },
        },
      ];
    });
  }

  Download() {
    if (this.selectedRow.uploaddocument != null) {
      const link = document.createElement("a");
      link.href = this.selectedRow.uploaddocument;
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
      title: "Sensorise Invoice Detail",
      data: forExcel,
      headers: Header,
    };
    this.ete.exportExcel(reportData);
  }
  ngAfterViewInit() {
    this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
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

  ionViewWillEnter() {
    this.clear();
    this.getdatas();
    this.action();
  }
}
