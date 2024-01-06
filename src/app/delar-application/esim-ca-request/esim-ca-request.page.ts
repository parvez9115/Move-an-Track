import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
import { ViewComponent } from "./view/view.component";

@Component({
  selector: "app-esim-ca-request",
  templateUrl: "./esim-ca-request.page.html",
  styleUrls: ["./esim-ca-request.page.scss"],
})
export class EsimCaRequestPage implements OnInit {
  CaRequestForm: FormGroup;
  slotno = ["10000"];
  show: boolean = false;
  showsubmit: boolean = true;
  source: { localdata: any };
  dataAdapter: any;
  maxDate: string;
  today = new Date();
  renderer: (row: number, column: any, value: string) => string;
  @ViewChild("myGrid", { static: false }) myGrid: any;
  columns: any;
  tableData: any;
  selectedRow: any;
  Download: any;
  pdfdatas: any[];
  myPlatform: any;
  companyId = localStorage.getItem("userName");
  head = [
    "Iccid No 1",
    "SIM 1",
    "Provider 1",
    "IMSI 1",
    "Iccid No 2",
    "SIM 2",
    "Provider 2",
    "IMSI 2",
    "IMEI",
  ];
  arrow = false;

  constructor(
    private ajaxService: AjaxService,
    private commonService: CommonService,
    private formBuilder: FormBuilder,
    private ete: ExportExcelService,
    public platform: Platform,
    private alertController: AlertController,
    private modalController: ModalController
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

  clear() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    this.CaRequestForm.patchValue({
      carequestNo: "",
    });
    this.show = false;
    this.showsubmit = true;
    this.getdatas();
  }

  reset() {
    this.CaRequestForm.patchValue({
      carequestNo: "",
    });
  }

  submit() {
    this.commonService.presentLoader();
    const url =
      serverUrl.web +
      "/esim/getEsimCARequest?companyid=" +
      localStorage.getItem("corpId") +
      "&carequestno=" +
      this.CaRequestForm.value.carequestNo;
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.tableData = res;
      this.commonService.dismissLoader();
      if (res.length == 0) {
        this.commonService.showConfirm("CA request not available");
        this.show = false;
        this.showsubmit = false;
      } else {
        this.show = true;
        this.showsubmit = false;
        this.renderer = (row: number, column: any, value: string) => {
          if (value == "" || null || undefined) {
            return "----";
          } else {
            return (
              '<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px;">' +
              value +
              "</span>"
            );
          }
        };
        this.source = { localdata: this.tableData };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.columns = [
          {
            text: "CA Request Number",
            datafield: "carequestid",
            cellsrenderer: this.renderer,
            cellsalign: "center",
            align: "center",
            width: 150,
          },
          {
            text: "CA Requested by",
            datafield: "distributor",
            cellsrenderer: this.renderer,
            cellsalign: "center",
            align: "center",
            width: 150,
          },
          {
            text: "Request Date",
            datafield: "carequestdate",
            cellsrenderer: this.renderer,
            cellsalign: "center",
            align: "center",
            width: 150,
          },
          {
            text: "Request Quantity",
            datafield: "carequestqty",
            cellsrenderer: this.renderer,
            cellsalign: "center",
            align: "center",
            width: 180,
          },
          {
            text: "Validity Requested",
            datafield: "validityperiod",
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
              this.download();
            },
          },
          {
            text: "View",
            datafield: "view",
            columntype: "button",
            cellsalign: "center",
            align: "center",
            width: 90,
            cellsrenderer: (): string => {
              return "View";
            },
            buttonclick: (row): void => {
              this.openmodel();
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
      }
    });
  }
  async deleteModel(row) {
    if (this.selectedRow) {
      const alert = await this.alertController.create({
        header: " Delete",
        backdropDismiss: false,
        message: "Are you sure you want to delete?",
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
  }
  delete() {
    this.commonService.presentLoader();
    const url =
      serverUrl.web +
      "/esim/deleteEsimCARequest?carequestno=" +
      this.selectedRow.carequestid;
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.commonService.dismissLoader();
      if (res.message == "CA Request Deleted Successfully") {
        this.commonService.showConfirm(res.message);
        this.myGrid.clearselection();
        this.selectedRow = "";
        this.getdatas();
      } else {
        this.commonService.showConfirm(res.message);
      }
    });
  }

  createForm() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    this.CaRequestForm = this.formBuilder.group({
      carequestNo: ["", Validators.required],
    });
  }

  getdatas() {
    this.commonService.presentLoader();
    var url =
      serverUrl.web +
      "/esim/getEsimCARequest?companyid=" +
      localStorage.getItem("corpId") +
      "&carequestno=&srno=&srdate=&srstatus";
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
          text: "CA Request Number",
          datafield: "carequestid",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 150,
        },
        {
          text: "CA Requested by",
          datafield: "distributor",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 150,
        },
        {
          text: "Request Date",
          datafield: "carequestdate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 120,
        },
        {
          text: "Request Quantity",
          datafield: "carequestqty",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 160,
        },
        {
          text: "Validity Requested",
          datafield: "validityperiod",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 160,
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
            this.download();
          },
        },
        {
          text: "View",
          datafield: "view",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 90,
          cellsrenderer: (): string => {
            return "View";
          },
          buttonclick: (row): void => {
            this.openmodel();
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

  download() {
    var url =
      serverUrl.web +
      "/esim/getEsimDownloadICCIDno?companyid=" +
      localStorage.getItem("corpId") +
      "&carequestid=" +
      this.selectedRow.carequestid;
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.Download = res;
      this.pdfdatas = [];
      for (var i = 0; i < this.Download.length; i++) {
        this.pdfdatas.push([
          this.Download[i].iccidno1,
          this.Download[i].sim1,
          this.Download[i].provider1,
          this.Download[i].imsi1,
          this.Download[i].iccidno2,
          this.Download[i].sim2,
          this.Download[i].provider2,
          this.Download[i].imsi2,
          this.Download[i].imei,
        ]);
      }
      let reportData = {
        data: this.pdfdatas,
        headers: this.head,
      };
      this.ete.generateExcel(reportData);
    });
  }

  async openmodel() {
    const isModalOpened = await this.modalController.getTop();
    const modal = await this.modalController.create({
      component: ViewComponent,
      cssClass: "viewform",
      componentProps: {
        value: this.selectedRow,
      },
    });
    modal.onDidDismiss().then((data) => {});
    return await modal.present();
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
      title: "Device CA Request",
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
    this.createForm();
  }

  ngAfterViewInit() {
    this.myGrid.horizontalscrollbarstep(["70"]);
    this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
  }

  ionViewWillEnter() {
    this.maxDate = this.today.getFullYear() + "-";
    this.maxDate +=
      (this.today.getMonth() + 1 < 10
        ? "0" + (this.today.getMonth() + 1).toString()
        : (this.today.getMonth() + 1).toString()) + "-";
    this.maxDate +=
      this.today.getDate() < 10
        ? "0" + this.today.getDate().toString()
        : this.today.getDate().toString();
    this.reset();
    this.getdatas();
  }
}
