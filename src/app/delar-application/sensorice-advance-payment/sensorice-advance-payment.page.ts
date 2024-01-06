import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AlertController, ModalController, Platform } from "@ionic/angular";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";
import { AddPopupComponent } from "./add-popup/add-popup.component";
import { isObject } from "util";
import { ExportExcelService } from "src/app/services/export-excel.service";

@Component({
  selector: "app-sensorice-advance-payment",
  templateUrl: "./sensorice-advance-payment.page.html",
  styleUrls: ["./sensorice-advance-payment.page.scss"],
})
export class SensoriceAdvancePaymentPage implements OnInit {
  @ViewChild("myGrid", { static: false }) myGrid: any;
  columns: any;
  source: { localdata: any };
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  myPlatform: any;
  selectedRow: any = [];
  showButton: boolean = true;
  tableData: any;
  PurchaseForm: any;
  data: any = "";
  tab: any = "newcardpurchase";
  balance: any = [];

  constructor(
    public platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private alertController: AlertController,
    private commonService: CommonService,
    private ajaxService: AjaxService,
    private ete: ExportExcelService
  ) {}

  createForm() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    var todaytime = now.getHours() + ":" + now.getMinutes();
    this.PurchaseForm = this.formBuilder.group({
      serviceprovider: ["", Validators.required],
      invoicenumber: ["", Validators.required],
      invoicedate: [today, Validators.required],
      invoiceamount: ["", Validators.required],
      totalquantity: ["", Validators.required],
      invoicedocument: [""],
    });
  }

  async addModel(row) {
    const isModalOpened = await this.modalController.getTop();
    const modal = await this.modalController.create({
      component: AddPopupComponent,
      cssClass: "saleform",
      componentProps: {
        value: this.selectedRow,
        param: this.tab,
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data.data == "Saved Successfully") {
        this.data = data.data.data;
        this.selectedRow = "";
        this.getdatas(this.tab);
      }
    });
    return await modal.present();
  }

  async editModel(row) {
    if (this.selectedRow != "") {
      const isModalOpened = await this.modalController.getTop();
      const modal = await this.modalController.create({
        component: AddPopupComponent,
        cssClass: "saleform",
        componentProps: {
          value2: this.selectedRow,
        },
      });
      modal.onDidDismiss().then((data) => {
        this.myGrid.clearselection();
        this.selectedRow = "";
        if (data.data.data == "Updated Successfully") {
          this.data = data.data.data;
          this.getdatas();
        }
      });
      return await modal.present();
    } else {
      this.commonService.presentToast("Please select a row to Edit");
      return "";
    }
  }

  balanceamt() {
    var url =
      serverUrl.web +
      "/sensorise/getSensoriseAdvanceBalanceAmount?purpose=" +
      this.tab;
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.balance = res;
      console.log(res);
    });
  }

  getdatas(d?) {
    if (d == undefined) {
      this.tab = "newcardpurchase";
      this.balanceamt();
    } else {
      this.tab = d;
      this.balanceamt();
    }
    this.commonService.presentLoader();
    var url =
      serverUrl.web +
      "/sensorise/getSensoriseAdvancePaymentDetailsByPurpose?purpose=" +
      this.tab;
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
          text: "Date",
          datafield: "utrdate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 185,
        },
        {
          text: "UTR Number",
          datafield: "utrno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 185,
        },
        {
          text: "Amt Recharged",
          datafield: "totalamount",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 185,
        },
        {
          text: "Used Amount",
          datafield: "amountused",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 185,
        },
        {
          text: "Balance Amount",
          datafield: "balanceamount",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 185,
        },

        {
          text: "UTR Remarks",
          datafield: "utrremarks",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 185,
        },
      ];
    });
  }

  myGridOnRowSelect(event: any): void {
    this.selectedRow = event.args.row.bounddata;
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
      title: "Sensorise Advance Payment",
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
    this.createForm();
  }

  ionViewWillEnter() {
    this.getdatas();
  }
}
