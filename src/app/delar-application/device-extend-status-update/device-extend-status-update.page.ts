import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { IonContent, ModalController, Platform } from "@ionic/angular";
import { jqxGridComponent } from "jqwidgets-ng/jqxgrid";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { ExportExcelService } from "src/app/services/export-excel.service";
import { serverUrl } from "src/environments/environment";
import { BulkExtendComponent } from "./bulk-extend/bulk-extend.component";
import { ExtendCommentComponent } from "./extend-comment/extend-comment.component";

@Component({
  selector: "app-device-extend-status-update",
  templateUrl: "./device-extend-status-update.page.html",
  styleUrls: ["./device-extend-status-update.page.scss"],
})
export class DeviceExtendStatusUpdatePage implements OnInit {
  source: { localdata: any };
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  @ViewChild("myGrid", { static: false })
  myGrid: any;
  columns: any;
  dataString: any;
  tableData: any;
  detail: any;
  data = "";
  show: boolean = false;
  companyId = localStorage.getItem("userName");
  selectedRow: any;
  myPlatform: any;
  checkbutton: boolean = true;
  arrow = false;
  a = false;
  b = false;

  constructor(
    private ajaxService: AjaxService,
    private router: Router,
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private modalController: ModalController,
    public platform: Platform,
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

  getdatas() {
    this.commonService.presentLoader();
    var url =
      serverUrl.web +
      "/esim/getDealerExtendOneYearRequestAll?companyid=apm" +
      "&extendoneyearrequestno=";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.tableData = res;
      this.commonService.dismissLoader();
      this.myGrid.clearselection();
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
          text: "Extend 1 Yr Requested",
          datafield: "validityperiod",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 140,
        },
        {
          text: "Extend 1 Yr Requested Date",
          datafield: "renewalrequestdate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 150,
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
          text: "Extend Date",
          datafield: "cardactivationdate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 130,
        },

        {
          text: "Extend Status",
          datafield: "cardstatus",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 130,
        },

        {
          text: "",
          datafield: "topup",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 127,
          cellsrenderer: (): string => {
            return "Status Update";
          },
          buttonclick: (row): void => {
            this.openModel(row);
          },
        },
      ];
    });
  }

  async openModel(row) {
    if (this.selectedRow.renewalmessage != "") {
      this.commonService.showConfirm(this.selectedRow.renewalmessage);
    } else if (this.selectedRow.cardactivationdate == "") {
      const isModalOpened = await this.modalController.getTop();
      if (!isModalOpened) {
        const modal = await this.modalController.create({
          component: ExtendCommentComponent,
          cssClass: "commentform",
          componentProps: {
            value: this.selectedRow,
          },
        });
        modal.onDidDismiss().then((data) => {
          if (data.data.data == "Extend One Year Status Updated Successfully") {
            this.getdatas();
          }
        });
        return await modal.present();
      }
    } else {
      this.commonService.showConfirm("Already Activated This IMEI No");
    }
  }

  async bulkstatusModel(row) {
    let selectdata = this.myGrid.getselectedrowindexes();
    var arr = [];
    for (let i = 0; i < selectdata.length; i++) {
      arr.push({
        extendoneyearrequestid:
          this.myGrid["attrSource"]["originaldata"][selectdata[i]]
            .renewalrequestid,
        iccidno:
          this.myGrid["attrSource"]["originaldata"][selectdata[i]].iccidno1,
        imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
        validityperiod:
          this.myGrid["attrSource"]["originaldata"][selectdata[i]]
            .validityperiod,
        createdby:
          this.myGrid["attrSource"]["originaldata"][selectdata[i]].createdby,
      });
    }
    const isModalOpened = await this.modalController.getTop();
    if (!isModalOpened) {
      const modal = await this.modalController.create({
        component: BulkExtendComponent,
        cssClass: "statusform",
        componentProps: {
          value: arr,
        },
      });
      modal.onDidDismiss().then((d) => {
        if (d.data.data == "Extend One Year Status Updated Successfully") {
          this.myGrid.clearselection();
          this.getdatas();
        }
      });
      return await modal.present();
    }
  }

  myGridOnRowclick(event: any): void {
    this.selectedRow = event.args.row.bounddata;
  }

  myGridOnRowSelect(event: any): void {
    this.selectedRow = this.myGrid.getselectedrowindexes();

    let h = document.getElementsByClassName(
      "jqx-checkbox-default"
    ) as HTMLCollectionOf<HTMLElement>;
    h[0].style.display = "none";

    let current = this.myGrid.getselectedrowindex();
    if (current != -1) {
      let currentrow = this.myGrid.getrowdata(current);
      // console.log(currentrow, event);
      if (currentrow.renewalmessage != "") {
        if (this.b == true) {
          this.commonService.showConfirm(currentrow.renewalmessage);
          this.b = false;
        } else {
          this.b = true;
        }
        this.myGrid.unselectrow(current);
        return null;
      } else if (currentrow.cardactivationdate != "") {
        if (this.a == true) {
          this.commonService.showConfirm("Already Activated This IMEI No");
          this.a = false;
        } else {
          this.a = true;
        }
        this.myGrid.unselectrow(current);
        return null;
      }
    }

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
      title: "Device Extend One Year Status Update",
      data: forExcel,
      headers: Header,
    };
    this.ete.exportExcel(reportData);
  }

  ngAfterViewInit() {
    this.myGrid.horizontalscrollbarstep(["70"]);
    this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
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
