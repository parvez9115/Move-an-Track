import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import {
  AlertController,
  IonContent,
  ModalController,
  Platform,
} from "@ionic/angular";
import { jqxGridComponent } from "jqwidgets-ng/jqxgrid";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { ExportExcelService } from "src/app/services/export-excel.service";
import { serverUrl } from "src/environments/environment";

@Component({
  selector: "app-device-topup-request-details",
  templateUrl: "./device-topup-request-details.page.html",
  styleUrls: ["./device-topup-request-details.page.scss"],
})
export class DeviceTopupRequestDetailsPage implements OnInit {
  source: { localdata: any };
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  @ViewChild("myGrid", { static: false })
  myGrid: any;
  columns: any;
  dataString: any;
  tableData: any;
  detail: any;
  show: boolean = false;
  selectedRow: any;
  myPlatform: any;
  companyId = localStorage.getItem("userName");
  arrow = false;
  response: any;

  constructor(
    private ajaxService: AjaxService,
    private router: Router,
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private modalController: ModalController,
    public platform: Platform,
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

  logScrolling(ev) {
    if (ev.detail.scrollTop > 2) {
      this.arrow = true;
    }
    if (ev.detail.scrollTop < 2) {
      this.arrow = false;
    }
  }

  getdatas() {
    this.commonService.presentLoader();
    var url =
      serverUrl.web +
      "/esim/getDealerTopupAll?companyid=apm" +
      "&dealer=" +
      localStorage.getItem("userName");
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.tableData = res;
      this.commonService.dismissLoader();
      this.renderer = (row: number, column: any, value: string) => {
        if (value == "" || null || undefined) {
          return "--";
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
          text: "Request No",
          datafield: "renewalrequestid",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 120,
        },
        {
          text: "VLTD No",
          datafield: "vltdsno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 130,
        },
        {
          text: "Invoice No",
          datafield: "invoiceno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 120,
        },
        {
          text: "ICCID No",
          datafield: "iccidno1",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 140,
        },
        {
          text: "IMEI No",
          datafield: "imei",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 130,
        },
        {
          text: "SIM 1",
          datafield: "sim1",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 130,
        },
        {
          text: "SIM 2",
          datafield: "sim2",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 130,
        },
        {
          text: "Plate No",
          datafield: "plateno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 130,
        },
        {
          text: "Contact No",
          datafield: "contactno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 130,
        },

        {
          text: "Topup Requested",
          datafield: "validityperiod",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 130,
        },
        {
          text: "Topup Requested Date",
          datafield: "renewalrequestdate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 130,
        },
        {
          text: "Requested By",
          datafield: "renewalrequestby",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 130,
        },
        {
          text: "Current Dealer",
          datafield: "companyid",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 155,
        },
        {
          text: "",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 90,
          cellsrenderer: (): string => {
            return this.myPlatform == "desktop"
              ? "Remove"
              : "<button>Remove</button>";
          },
          buttonclick: (row): void => {
            this.remove();
          },
        },
      ];
    });
  }

  myGridOnRowclick(event: any): void {
    this.selectedRow = event.args.row.bounddata;
  }

  async remove() {
    const alert = await this.alertController.create({
      header: "Confirm",
      backdropDismiss: false,
      message: "Are you sure want to Remove?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: (data) => {
            this.myGrid.clearselection();
            this.selectedRow = "";
          },
        },
        {
          text: "Ok",
          handler: (data) => {
            this.delete();
          },
        },
      ],
    });
    await alert.present();
  }

  // delete() {
  //   var url =
  //     serverUrl.web +
  //     "/esim/deleteSingleEsimTopupRequest?requestid=" +
  //     this.selectedRow.renewalrequestid +
  //     "&imei=" +
  //     this.selectedRow.imei;
  //   this.ajaxService.ajaxGet(url).subscribe((res) => {
  //     this.commonService.showConfirm(res.message);
  //     this.myGrid.clearselection();
  //     this.selectedRow = "";
  //   });
  // }
  delete() {
    this.commonService.presentLoader();
    const url =
      serverUrl.web +
      "/esim/deleteSingleEsimTopupRequest?requestid=" +
      this.selectedRow.renewalrequestid +
      "&imei=" +
      this.selectedRow.imei;
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.commonService.dismissLoader();
      if (res.message == "Topup Request Deleted Successfully") {
        this.commonService.showConfirm("Topup Request Removed Successfully");
        this.getdatas();
      } else {
        this.commonService.showConfirm(res.message);
      }
    });
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
      title: "Topup Request",
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
  }

  ionViewWillEnter() {
    this.getdatas();
  }

  ngAfterViewInit() {
    this.myGrid.horizontalscrollbarstep(["70"]);
    this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
  }
}
