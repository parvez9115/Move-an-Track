import {
  AfterContentChecked,
  Component,
  OnInit,
  ViewChild,
} from "@angular/core";
import { AlertController, ModalController, Platform } from "@ionic/angular";
import { jqxGridComponent } from "jqwidgets-ng/jqxgrid";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { ExportExcelService } from "src/app/services/export-excel.service";
import { serverUrl } from "src/environments/environment";
import { RsuHistoryComponent } from "./rsu-history/rsu-history.component";

@Component({
  selector: "app-sensorise-rsu-status",
  templateUrl: "./sensorise-rsu-status.page.html",
  styleUrls: ["./sensorise-rsu-status.page.scss"],
})
export class SensoriseRsuStatusPage implements OnInit {
  @ViewChild("myGrid", { static: false }) myGrid: jqxGridComponent;
  columns: any;
  source: { localdata: any };
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  myPlatform: any;
  selectedRow: any;
  tableData: any;
  count;
  rowColor;
  page = [];
  showButton: boolean = true;
  pdfdatas: any[];
  head = ["iccid"];
  Download: any;

  constructor(
    public platform: Platform,
    private modalController: ModalController,
    private alertController: AlertController,
    private commonService: CommonService,
    private ajaxService: AjaxService,
    private ete: ExportExcelService
  ) {}

  export() {
    let selectdata = this.myGrid.getselectedrowindexes();
    var arr = [];
    for (let i = 0; i < selectdata.length; i++) {
      arr.push({
        iccid:
          this.myGrid["attrSource"]["originaldata"][selectdata[i]].iccidno1,
      });
    }
    this.commonService.presentLoader();
    const url =
      serverUrl.web +
      "/sensorise/saveSensoriseRSU?createdby=" +
      localStorage.getItem("corpId");
    this.ajaxService.ajaxPostWithString(url, arr).subscribe((response) => {
      this.commonService.dismissLoader();
      let res = JSON.parse(response);
      if (res.Message == "Renewal Saved Successfully") {
        this.commonService.showConfirm(res.Message);

        this.clear();
        this.getDatas();
      } else {
        this.commonService.showConfirm(res.Message);
      }
    });

    // this.Download = arr;
    // this.pdfdatas = [];
    // for (var i = 0; i < this.Download.length; i++) {
    //   this.pdfdatas.push([this.Download[i].iccidno1]);
    // }
    // let reportData = {
    //   data: this.pdfdatas,
    //   headers: this.head,
    // };
    // this.myGrid.clearselection();
    // this.ete.generateExcel(reportData);
  }
  clear() {
    this.myGrid.clearselection();
  }

  getDatas() {
    this.page = [];
    this.commonService.presentLoader();
    var url = serverUrl.web + "/sensorise/getSensoriseRSUStatus";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      if (this.count != undefined) {
        var fData = res.filter((d) => {
          return d.rowcolor == this.count;
        });
        this.tableData = fData;
        this.count = undefined;
      } else {
        this.tableData = res;
      }
      this.page = ["100", "200", "500", "1000"];
      this.tableData = res;
      this.commonService.dismissLoader();

      this.renderer = (row: number, column: any, value: string) => {
        if (value == "" || null || undefined || value == ",") {
          return "---";
        } else {
          return (
            '<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
            value +
            "</span>"
          );
        }
      };

      this.source = { localdata: this.tableData };
      this.dataAdapter = new jqx.dataAdapter(this.source);
      setTimeout(() => {
        this.myGrid.clearselection();
      }, 2500);
      this.columns = [
        {
          text: "VLTD No",
          datafield: "vltd",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 160,
        },
        {
          text: "ICCID NO",
          datafield: "iccidno1",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 160,
        },
        {
          text: "SIM 1",
          datafield: "sim1",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 160,
        },
        {
          text: "SIM 2",
          datafield: "sim2",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 160,
        },
        {
          text: "IMEI No",
          datafield: "imei",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 160,
        },
        {
          text: "Dealer",
          datafield: "dealerid",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 160,
        },
        {
          text: "",
          datafield: "detail",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 110,
          cellsrenderer: (): string => {
            return this.myPlatform == "desktop"
              ? "RSU History"
              : "<button>RSU Historys</button>";
          },
          buttonclick: (row): void => {
            this.rsuhistory();
          },
        },
      ];
    });
  }
  myGridOnRowclick(event: any): void {
    this.selectedRow = event.args.row.bounddata;
  }

  async rsuhistory() {
    const modal = await this.modalController.create({
      component: RsuHistoryComponent,
      cssClass: "viewform1",
      componentProps: {
        value: this.selectedRow,
      },
    });
    modal.onDidDismiss().then(() => {});
    return await modal.present();
  }

  myGridOnRowSelect(event: any): void {
    this.selectedRow = this.myGrid.getselectedrowindexes();
    if (this.selectedRow.length > 0) {
      this.showButton = false;
    } else {
      this.showButton = true;
    }
  }

  ngOnInit() {
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
  }

  ionViewWillEnter() {
    this.getDatas();
    this.clear();
  }
}
