import { Component, OnInit, ViewChild } from "@angular/core";
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
import { EsimAddProductionComponent } from "./esim-add-production/esim-add-production.component";
import { EsimViewProductionComponent } from "./esim-view-production/esim-view-production.component";

@Component({
  selector: "app-esim-production-detail",
  templateUrl: "./esim-production-detail.page.html",
  styleUrls: ["./esim-production-detail.page.scss"],
})
export class EsimProductionDetailPage implements OnInit {
  @ViewChild("myGrid", { static: false }) myGrid: any;
  source: { localdata: any };
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  columns: any;
  myPlatform: any;
  selectedRow: any;
  tableData: any;
  page = [];
  companyId = localStorage.getItem("userName");
  arrow = false;

  constructor(
    public platform: Platform,
    private modalController: ModalController,
    private alertController: AlertController,
    private commonService: CommonService,
    private ajaxService: AjaxService,
    private ete: ExportExcelService
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

  getDatas() {
    this.page = [];
    this.commonService.presentLoader();
    const url =
      serverUrl.web +
      "/esim/getEsimProductionAll?companyid=" +
      localStorage.getItem("corpId");
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      var detail = res;
      this.tableData = res;
      this.commonService.dismissLoader();
      this.page = ["100", "200", "500", "1000"];
      this.renderer = (row: number, column: any, value: string) => {
        if (value == "" || null || undefined || value == ",") {
          return "---";
        } else {
          return (
            '<span style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
            value +
            "</span>"
          );
        }
      };

      this.source = { localdata: this.tableData };
      this.dataAdapter = new jqx.dataAdapter(this.source);
      this.columns = [
        {
          text: "Box Number",
          datafield: "serialno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 230,
        },
        {
          text: "Quantity",
          datafield: "qty",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 180,
        },
        {
          text: "Date",
          datafield: "date",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 230,
        },
        {
          text: "Created by",
          datafield: "createdby",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 230,
        },
        {
          text: "View Detail",
          datafield: "View Detail",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 140,
          cellsrenderer: (): string => {
            return this.myPlatform == "desktop"
              ? "View Details"
              : "<button>View Details</button>";
          },
          buttonclick: (row): void => {
            this.viewModel(row);
          },
        },
        {
          text: "Remove",
          datafield: "remove",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 100,
          cellsrenderer: (): string => {
            return this.myPlatform == "desktop"
              ? "Remove"
              : "<button>Remove</button>";
          },
          buttonclick: (row): void => {
            this.deleteModel(row);
          },
        },
      ];
    });
  }
  async deleteModel(row) {
    if (this.selectedRow) {
      const alert = await this.alertController.create({
        header: " Delete",
        backdropDismiss: false,
        message: "Are you sure you want to remove?",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            handler: (data) => {},
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
  }
  delete() {
    const url =
      serverUrl.web +
      "/esim/getEsimProductionRemove?boxno=" +
      this.selectedRow.serialno;
    this.ajaxService.ajaxDeleteWithString(url).subscribe((res) => {
      if (res.message == "Box Removed Successfully") {
        this.commonService.showConfirm(res.message);
        this.getDatas();
      } else {
        this.commonService.showConfirm(res.message);
      }
    });
  }

  myGridOnRowSelect(event: any): void {
    this.selectedRow = event.args.row.bounddata;
  }
  async viewModel(row) {
    const modal = await this.modalController.create({
      component: EsimViewProductionComponent,
      cssClass: "viewform",
      componentProps: {
        value: this.selectedRow.serialno,
      },
    });
    modal.onDidDismiss().then(() => {
      this.selectedRow = undefined;
    });
    return await modal.present();
  }

  async openModel() {
    const modal = await this.modalController.create({
      component: EsimAddProductionComponent,
      cssClass: "tranportform",
    });
    modal.onDidDismiss().then((data) => {
      console.log(data.data.data);
      if (data.data.data == "Box Detail Added Succesfully") {
        this.getDatas();
      }
    });
    return await modal.present();
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
      title: "Esim Production Details",
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

  ngAfterViewInit() {
    this.myGrid.horizontalscrollbarstep(["70"]);
    this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
  }

  ionViewWillEnter() {
    this.getDatas();
  }
}
