import { Component, OnInit, ViewChild } from "@angular/core";
import { Location } from "@angular/common";
import { jqxGridComponent } from "jqwidgets-ng/jqxgrid";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";
import { InventoryPopupComponent } from "./inventory-popup/inventory-popup.component";
import { AlertController, ModalController, Platform } from "@ionic/angular";
import { ViewCommentsComponent } from "./view-comments/view-comments.component";
@Component({
  selector: "app-inventory-details",
  templateUrl: "./inventory-details.page.html",
  styleUrls: ["./inventory-details.page.scss"],
})
export class InventoryDetailsPage implements OnInit {
  myPlatform: string;
  showButton: boolean = true;
  dataString: any;

  constructor(
    private location: Location,
    private ajaxService: AjaxService,
    public platform: Platform,
    private modalController: ModalController,
    private commonService: CommonService,
    private alertController: AlertController
  ) {}
  source: { localdata: any };
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  @ViewChild("myGrid", { static: false }) myGrid: jqxGridComponent;
  columns: any;
  selectedRow: any;
  tableData: any;
  checkbutton: boolean = true;

  closePage() {
    this.location.back();
  }

  async openModel(event) {
    const modal = await this.modalController.create({
      component: InventoryPopupComponent,
      cssClass: "addexpenseform",
      componentProps: {
        value: this.selectedRow,
        mode: event.target.textContent,
      },
    });
    modal.onDidDismiss().then(() => {
      this.getdatas();
    });
    return await modal.present();
  }
  async viewModel() {
    const modal = await this.modalController.create({
      component: ViewCommentsComponent,
      cssClass: "saleform",
      componentProps: {
        value: this.selectedRow,
      },
    });
    modal.onDidDismiss().then(() => {});
    return await modal.present();
  }
  async addComments() {
    const modal = await this.modalController.create({
      component: InventoryPopupComponent,
      cssClass: "addexpenseform",
      componentProps: {
        value: this.selectedRow,
        mode: "comments",
      },
    });
    modal.onDidDismiss().then(() => {
      this.getdatas();
    });
    return await modal.present();
  }
  getdatas() {
    this.commonService.presentLoader();
    var url =
      serverUrl.web +
      "/sensorise/getIccidDetails?companyid=" +
      localStorage.getItem("corpId");
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.tableData = res;
      this.myGrid.clearselection();
      this.commonService.dismissLoader();
      this.renderer = (row: number, column: any, value: string) => {
        if (value == "" || null || undefined) {
          return "---";
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
          text: "Company Id",
          datafield: "companyid",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 110,
        },
        {
          text: "Imei Number",
          datafield: "imeino",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 110,
        },
        {
          text: "Sim 1 Number",
          datafield: "simcardno1",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 110,
        },
        {
          text: "Sim 2 Number",
          datafield: "simcardno2",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 110,
        },
        {
          text: "Plate No",
          datafield: "vehiclenumber",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 110,
        },
        {
          text: "Created Date",
          datafield: "createddate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 95,
        },
        {
          text: "Track Now Link",
          datafield: "linkApi",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 375,
        },
        // {
        //   text: "",
        //   datafield: "addtracknow",
        //   columntype: "button",
        //   cellsalign: "center",
        //   align: "center",
        //   width: 112,
        //   cellsrenderer: (): string => {
        //     return this.myPlatform == "desktop"
        //       ? "Add Track Now"
        //       : "<button><span style='font-size: 11px;'>Add Track Now</span></button>";
        //   },
        //   buttonclick: (row): void => {
        //     this.AddTrack();
        //   },
        // },
        {
          text: "",
          datafield: "tracknow",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 86,
          cellsrenderer: (): string => {
            return this.myPlatform == "desktop"
              ? "Track Now"
              : "<button><span style='font-size: 11px;'>Track Now</span></button>";
          },
          buttonclick: (row): void => {
            this.track();
          },
        },
      ];
    });
  }

  async AddTrack() {
    if (this.selectedRow) {
      const alert = await this.alertController.create({
        header: "Add Track Now",
        backdropDismiss: false,
        message: "Are you sure you want to Add Track Now?",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            handler: (data) => {},
          },
          {
            text: "Ok",
            handler: (data) => {
              this.Addtracknow();
            },
          },
        ],
      });
      await alert.present();
    }
  }

  Addtracknow() {
    let selectdata = this.myGrid.getselectedrowindexes();
    var arr = [];
    for (let i = 0; i < selectdata.length; i++) {
      arr.push({
        imeiNo: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imeino,
        companyId:
          this.myGrid["attrSource"]["originaldata"][selectdata[i]].companyid,
        userId: this.myGrid["attrSource"]["originaldata"][selectdata[i]].userid,
      });
    }

    const url = serverUrl.web + "/tracknow/generateBulkTrackNow";
    this.ajaxService.ajaxPostWithBody(url, arr).subscribe((res) => {
      if (res.message == "error") {
        this.commonService.showConfirm("error");
      } else if (res.message == "Invalid IMEI") {
        this.commonService.showConfirm("Invalid IMEI");
      } else if (res.message == "Already Assined this IMEI") {
        this.commonService.showConfirm("Already Assined this IMEI");
      } else {
        this.commonService.showConfirm("Successfully Add Track Now.");
        this.getdatas();
      }
    });
  }

  track() {
    window.open(this.selectedRow.linkApi, "_blank");
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

  ngOnInit() {
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
  }

  ngAfterViewInit() {
    this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
  }

  ionViewWillEnter() {
    this.getdatas();
  }
}
