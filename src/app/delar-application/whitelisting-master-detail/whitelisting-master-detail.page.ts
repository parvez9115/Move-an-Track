import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AlertController, ModalController, Platform } from "@ionic/angular";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";
import { ExportExcelService } from "src/app/services/export-excel.service";
import { AddDealerDetailsComponent } from "./add-dealer-details/add-dealer-details.component";

@Component({
  selector: "app-whitelisting-master-detail",
  templateUrl: "./whitelisting-master-detail.page.html",
  styleUrls: ["./whitelisting-master-detail.page.scss"],
})
export class WhitelistingMasterDetailPage implements OnInit {
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
  tab: any = "Sensorise";
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

  getdatas(d?) {
    if (d == undefined) {
      this.tab = "Sensorise";
    } else {
      this.tab = d;
    }
    this.commonService.presentLoader();
    var url =
      serverUrl.web +
      "/global/getWhiteListingDetails?serviceprovider=" +
      this.tab;
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.tableData = res;
      this.commonService.dismissLoader();
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
      this.columns = [
        {
          text: "Dealer",
          datafield: "dealer",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 85,
        },
        {
          text: "Group ID",
          datafield: "Group ID",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 85,
        },
        {
          text: "IP’s/Domain/URL’s1",
          datafield: "IP\u2019s/Domain/URL\u2019s1",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 155,
        },
        {
          text: "IP’s/Domain/URL’s2",
          datafield: "IP\u2019s/Domain/URL\u2019s2",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 155,
        },
        {
          text: "IP’s/Domain/URL’s3",
          datafield: "IP\u2019s/Domain/URL\u2019s3",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 155,
        },

        {
          text: "IP’s/Domain/URL’s4",
          datafield: "IP\u2019s/Domain/URL\u2019s4",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 155,
        },
        {
          text: "Admin MSSIDN 1: AIRTEL",
          datafield: "Admin MSSIDN 1: AIRTEL",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 175,
        },
        {
          text: "Admin MSSIDN 2: AIRTEL",
          datafield: "Admin MSSIDN 2: AIRTEL",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 175,
        },
        {
          text: "Admin MSSIDN 3: AIRTEL",
          datafield: "Admin MSSIDN 3: AIRTEL",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 175,
        },
        {
          text: "Admin MSSIDN 1: BSNL",
          datafield: "Admin MSSIDN 1: BSNL",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 175,
        },
        {
          text: "Admin MSSIDN 2: BSNL",
          datafield: "Admin MSSIDN 2: BSNL",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 175,
        },
        {
          text: "Admin MSSIDN 3: BSNL",
          datafield: "Admin MSSIDN 3: BSNL",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 175,
        },
      ];
    });
  }

  async addModel(row) {
    const isModalOpened = await this.modalController.getTop();
    const modal = await this.modalController.create({
      component: AddDealerDetailsComponent,
      cssClass: "tripform",
      componentProps: {
        value: this.selectedRow,
        param: this.tab,
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data.data == "White Listing Detail Added Successfully") {
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
        component: AddDealerDetailsComponent,
        cssClass: "tripform",
        componentProps: {
          value2: this.selectedRow,
          param: this.tab,
        },
      });
      modal.onDidDismiss().then((data) => {
        this.myGrid.clearselection();
        this.selectedRow = "";
        if (data.data.data == "White Listing Detail Added Successfully") {
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

  myGridOnRowSelect(event: any): void {
    this.selectedRow = event.args.row.bounddata;
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
