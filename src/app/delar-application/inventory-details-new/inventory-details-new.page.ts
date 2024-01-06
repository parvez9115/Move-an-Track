import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AlertController, Platform } from "@ionic/angular";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";

@Component({
  selector: "app-inventory-details-new",
  templateUrl: "./inventory-details-new.page.html",
  styleUrls: ["./inventory-details-new.page.scss"],
})
export class InventoryDetailsNewPage implements OnInit {
  renderer: (row: number, column: any, value: string) => string;
  @ViewChild("myGrid", { static: false }) myGrid: any;
  columns: any;
  tableData: any;
  selectedRow: any;
  source: { localdata: any };
  dataAdapter: any;
  myPlatform: string;

  constructor(
    private ajaxService: AjaxService,
    private commonService: CommonService,
    private formBuilder: FormBuilder,
    public platform: Platform,
    private alertController: AlertController
  ) {}

  getdatas() {
    this.commonService.presentLoader();
    var url =
      serverUrl.web +
      "/sensorise/getIccidDetails?companyid=" +
      localStorage.getItem("corpId");
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.tableData = res;
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
          text: "Imei Number",
          datafield: "imeino",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 180,
        },
        {
          text: "Sim 1 Number",
          datafield: "simcardno1",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 180,
        },
        {
          text: "Sim 2 Number",
          datafield: "simcardno2",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 180,
        },
        {
          text: "Plate No",
          datafield: "vehiclenumber",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 180,
        },
        {
          text: "Created Date",
          datafield: "createddate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 180,
        },
        {
          text: "Dealer Name",
          datafield: "providername",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 180,
        },
        {
          text: "Download",
          datafield: "Download",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 120,
          cellsrenderer: (): string => {
            return "Download";
          },
          buttonclick: (row): void => {
            // this.download();
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
            // this.deleteModel(row);
          },
        },
      ];
    });
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
    this.getdatas();
  }
}
