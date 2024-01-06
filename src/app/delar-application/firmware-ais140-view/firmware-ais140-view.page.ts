import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { AjaxService } from 'src/app/services/ajax.service';
import { CommonService } from 'src/app/services/common.service';
import { serverUrl } from 'src/environments/environment';
import { HistoryComponent } from './history/history.component';


@Component({
  selector: 'app-firmware-ais140-view',
  templateUrl: './firmware-ais140-view.page.html',
  styleUrls: ['./firmware-ais140-view.page.scss'],
})
export class FirmwareAis140ViewPage implements OnInit {

   @ViewChild("myGrid", { static: false }) myGrid: any;
  columns: any;
  source: { localdata: any };
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  myPlatform: any;
  selectedRow: any;
  tableData: any;
  show: boolean;
  
  constructor(
     private commonService: CommonService,
    private ajaxService: AjaxService,
    public platform: Platform,
       private modalController: ModalController,
  ) { }

     getdatas() {
    this.commonService.presentLoader();
    var url = serverUrl.web + "/global/getMaxFirmwareUploadDetails";
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
          text: "Service Provider",
          datafield: "serviceprovider",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: "15%",
        },
        {
          text: "State",
          datafield: "state",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: "15%",
        },
        {
          text: "Backend Server",
          datafield: "backendserver",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: "15%",
        },
        {
          text: "Reason",
          datafield: "reason",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: "15%",
        },
        {
          text: "Created Date",
          datafield: "createddate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: "15%",
        },
        {
          text: "",
          datafield: "download",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: "10%",
          cellsrenderer: (): string => {
            return this.myPlatform == "desktop"
              ? "Download"
              : "<button>Download</button>";
          },
          buttonclick: (row): void => {
            this.Download();
          },
        },
        {
          text: "",
          datafield: "history",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: "10%",
          cellsrenderer: (): string => {
            return this.myPlatform == "desktop"
              ? "History"
              : "<button>History</button>";
          },
          buttonclick: (row): void => {
            this.history();
          },
        },
      ];
    });
     }
  
    Download() {
    if (this.selectedRow.uploadfile != null) {
      const link = document.createElement("a");
      link.href = this.selectedRow.uploadfile;
      link.target = "_blank";
      link.click();
    } 
    }
  
      myGridOnRowSelect(event: any): void {
    this.selectedRow = event.args.row.bounddata;
    this.show = true;
      }
  
    async history() {
    const modal = await this.modalController.create({
      component: HistoryComponent,
      cssClass: "viewform",
      componentProps: {
        value: this.selectedRow,
      },
    });
    modal.onDidDismiss().then((data) => {
    });
    return await modal.present();
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
}
