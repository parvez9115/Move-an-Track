import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  AlertController,
  LoadingController,
  ModalController,
  Platform,
} from "@ionic/angular";
import { jqxGridComponent } from "jqwidgets-ng/jqxgrid";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";

@Component({
  selector: "app-dashboardgrid",
  templateUrl: "./dashboardgrid.component.html",
  styleUrls: ["./dashboardgrid.component.scss"],
})
export class DashboardgridComponent implements OnInit, OnChanges {
  @Input() grid;
  @Input() tab;
  @Input() dealer: String;
  @Input() value;
  @Input() popHeader;
  @ViewChild("myGrid", { static: false }) myGrid: jqxGridComponent;
  columns: any;
  source: { localdata: any };
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  myPlatform: any;
  tableData: any;
  page = [];
  selectedRow: any;
  endis: Boolean = true;
  constructor(
    private loadingCtrl: LoadingController,

    public platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private alertController: AlertController,
    private commonService: CommonService,
    private ajaxService: AjaxService
  ) {}

  cancel() {
    this.modalController.dismiss();
  }

  async openModel(row?) {
    const modal = await this.modalController.create({
      component: DashboardgridComponent,
      cssClass: "dashboardgrid",
      componentProps: {
        value: this.selectedRow.comment,
        popHeader: "enable",
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data.data == "Extend One Year Status Updated Successfully") {
        // this.getdatas();
      }
    });
    return await modal.present();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: "Please wait...",
      duration: 20000,
    });

    loading.present();
  }

  ngAfterViewChecked(): void {
    if (this.endis == false) {
    }
    // afterViewInit code.
    this.init();
  }

  enablebanner(d) {
    console.log(d);
    if (d == 0) {
      this.endis = true;
    } else {
      this.endis = false;
    }
  }

  init(): void {}

  pendingCADashboard() {
    this.endis = false;
    this.page = [];
    this.showLoading();

    let url =
      serverUrl.web +
      "/esim/getDealerCAStatusPending?companyid=apm&invoiceno=&serialno=&dealer=" +
      this.dealer;
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.page = ["100", "200", "500", "1000"];
      this.enablebanner(res.length);
      this.loadingCtrl.dismiss();
      this.source = { localdata: res };
      this.dataAdapter = new jqx.dataAdapter(this.source);
      this.columns = [
        {
          text: "IMEI No",
          datafield: "imei",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 150,
          editable: true,
        },
        {
          text: "ICCID No",
          datafield: "iccidno1",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 160,
        },
        {
          text: "CA Requested Date",
          datafield: "carequestdate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 160,
        },
        {
          text: "Slot No",
          datafield: "slotno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 140,
        },
        {
          text: "Box Number",
          datafield: "serialno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 160,
        },
        {
          text: "Comments",
          datafield: "purcomment",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 160,
        },

        {
          text: "",
          datafield: "comment",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 120,
          cellsrenderer: (): string => {
            return this.myPlatform == "desktop"
              ? "Comments"
              : "<button>Comments</button>";
          },
          buttonclick: (row): void => {
            this.openModel();
          },
        },
      ];
    });
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

    // let url = 'https://mvt.apmkingstrack.com/fleettracking/esim/getDealerRenewalPending?companyid=apm&dealer=apm-sa'
    // this.ajaxService.ajaxGet(url).subscribe(res => {
    //   this.data.push(res)
    // })
  }

  pendingRenewalDashboard() {
    this.page = [];
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
    this.showLoading();

    let url =
      serverUrl.web +
      "/esim/getDealerRenewalPending?companyid=apm&dealer=" +
      this.dealer;
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.page = ["100", "200", "500", "1000"];
      this.loadingCtrl.dismiss();
      this.enablebanner(res.length);
      this.source = { localdata: res };
      this.dataAdapter = new jqx.dataAdapter(this.source);
      this.columns = [
        {
          text: "IMEI No",
          datafield: "imei",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 130,
          editable: true,
        },
        {
          text: "ICCID No",
          datafield: "iccidno1",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 145,
        },
        {
          text: "Renewal Requested Date",
          datafield: "renewalrequestdate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 170,
        },
        {
          text: "Previous Card Status",
          datafield: "priviouscardstatus",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 150,
        },
        {
          text: "Contact Number",
          datafield: "contactno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 130,
        },
        {
          text: "Stage",
          datafield: "renewalno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 90,
        },
        {
          text: "Comments",
          datafield: "purcomment",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 120,
        },

        {
          text: "",
          datafield: "comment",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 120,
          cellsrenderer: (): string => {
            return this.myPlatform == "desktop"
              ? "Comments"
              : "<button>Comments</button>";
          },
          buttonclick: (row): void => {
            this.openModel();
          },
        },
      ];
    });
  }

  pendingExtra1YearDashboard() {
    this.page = [];
    this.showLoading();
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

    let url =
      serverUrl.web +
      "/esim/getDealerExtendOneYearPending?companyid=apm&dealer=" +
      this.dealer;
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.page = ["100", "200", "500", "1000"];
      this.loadingCtrl.dismiss();
      this.enablebanner(res.length);
      this.source = { localdata: res };
      this.dataAdapter = new jqx.dataAdapter(this.source);
      this.columns = [
        {
          text: "Imei No",
          datafield: "imei",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 350,
          editable: true,
        },
        {
          text: "ICCID No",
          datafield: "iccidno1",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 350,
        },
        {
          text: "Requested Date",
          datafield: "renewalrequestdate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 350,
        },
      ];
    });

    // let url = 'https://mvt.apmkingstrack.com/fleettracking/esim/getDealerExtendOneYearPending?companyid=apm&dealer=apm-sa'
    // this.ajaxService.ajaxGet(url).subscribe(res => {
    //   this.data.push(res)
    // })
  }
  pendingTopupDashboard() {
    this.page = [];
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
    this.showLoading();

    let url =
      serverUrl.web +
      "/esim/getDealerTopupPending?companyid=apm&dealer=" +
      this.dealer;
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.page = ["100", "200", "500", "1000"];
      this.loadingCtrl.dismiss();
      this.enablebanner(res.length);
      this.source = { localdata: res };
      this.dataAdapter = new jqx.dataAdapter(this.source);
      this.columns = [
        {
          text: "Imei No",
          datafield: "imei",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 350,
          editable: true,
        },
        {
          text: "ICCID No",
          datafield: "iccidno1",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 350,
        },
        {
          text: "Topup Requested Date",
          datafield: "renewalrequestdate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 350,
        },
      ];
    });

    // let url = 'https://mvt.apmkingstrack.com/fleettracking/esim/getDealerTopupPending?companyid=apm&dealer=apm-sa'
    // this.ajaxService.ajaxGet(url).subscribe(res => {
    //   this.data.push(res)
    // })
  }
  pendinginvoicesummary() {
    this.page = [];
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
    this.showLoading();

    let url = serverUrl.web + "/esim/getDealerInvoiceSummary";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.page = ["100", "200", "500", "1000"];
      this.loadingCtrl.dismiss();
      this.enablebanner(res.length);
      this.source = { localdata: res };
      this.dataAdapter = new jqx.dataAdapter(this.source);
      this.columns = [
        {
          text: "Dealer Name",
          datafield: "dealername",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 110,
          editable: true,
        },
        {
          text: "Renewal 1",
          datafield: "renewal1",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 100,
        },
        {
          text: "Renewal 2",
          datafield: "renewal2",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 100,
        },
        {
          text: "Renewal 3",
          datafield: "renewal3",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 100,
        },
        {
          text: "Renewal 4",
          datafield: "renewal4",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 100,
        },
        {
          text: "Renewal 5",
          datafield: "renewal5",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 100,
        },
        {
          text: "Topup",
          datafield: "topup",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 100,
        },
        {
          text: "Extend One Year",
          datafield: "extendoneyear",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 150,
        },
        {
          text: "BSNL Certificate",
          datafield: "bsnlcertificate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 140,
        },
      ];
    });
  }

  pendingmonltyrenewalsummary() {
    this.page = [];
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
    this.showLoading();
    this.columns = [
      {
        text: "Dealer Name",
        datafield: "dealername",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 110,
        editable: true,
      },
    ];

    let url = serverUrl.web + "/esim/getDealerInvoiceRenewalMonthSummary";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      var columngroups = [];
      if (Object.keys(res).length > 0) {
        res.month.map((m) => {
          columngroups.push({
            text: m,
            align: "center",
            name: m,
          });
        });

        this.myGrid.columngroups(columngroups);

        var arr = Object.keys(res.data[0]);

        arr = arr.filter((n) => {
          return n != "dealername";
        });
        console.log(arr);
        arr.map((filterData, i) => {
          if (filterData.includes("request")) {
            this.columns.push({
              text: "Request",
              datafield: filterData,
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              columngroup: filterData.split("request")[0],
              width: 110,
              editable: true,
            });
          } else {
            this.columns.push({
              text: "Invoice",
              datafield: filterData,
              cellsrenderer: this.renderer,
              cellsalign: "center",
              columngroup: filterData.split("invoice")[0],
              align: "center",
              width: 110,
              editable: true,
            });
          }
        });
        this.page = ["100", "200", "500", "1000"];
        this.loadingCtrl.dismiss();
        this.enablebanner(res.length);
        this.source = { localdata: res.data };
        this.dataAdapter = new jqx.dataAdapter(this.source);
      }
    });
  }

  pendingmonltytopupsummary() {
    this.page = [];
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
    this.showLoading();
    this.columns = [
      {
        text: "Dealer Name",
        datafield: "dealername",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 110,
        editable: true,
      },
    ];

    let url = serverUrl.web + "/esim/getDealerInvoiceTopupMonthSummary";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      var columngroups = [];
      if (Object.keys(res).length > 0) {
        res.month.map((m) => {
          columngroups.push({
            text: m,
            align: "center",
            name: m,
          });
        });

        this.myGrid.columngroups(columngroups);

        var arr = Object.keys(res.data[0]);

        arr = arr.filter((n) => {
          return n != "dealername";
        });
        console.log(arr);
        arr.map((filterData, i) => {
          if (filterData.includes("request")) {
            this.columns.push({
              text: "Request",
              datafield: filterData,
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              columngroup: filterData.split("request")[0],
              width: 110,
              editable: true,
            });
          } else {
            this.columns.push({
              text: "Invoice",
              datafield: filterData,
              cellsrenderer: this.renderer,
              cellsalign: "center",
              columngroup: filterData.split("invoice")[0],
              align: "center",
              width: 110,
              editable: true,
            });
          }
        });
        this.page = ["100", "200", "500", "1000"];
        this.loadingCtrl.dismiss();
        this.enablebanner(res.length);
        this.source = { localdata: res.data };
        this.dataAdapter = new jqx.dataAdapter(this.source);
      }
    });
  }

  pendingmonltyextendsummary() {
    this.page = [];
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
    this.showLoading();
    this.columns = [
      {
        text: "Dealer Name",
        datafield: "dealername",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 110,
        editable: true,
      },
    ];

    let url = serverUrl.web + "/esim/getDealerInvoiceExtendMonthSummary";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      var columngroups = [];
      if (Object.keys(res).length > 0) {
        res.month.map((m) => {
          columngroups.push({
            text: m,
            align: "center",
            name: m,
          });
        });

        this.myGrid.columngroups(columngroups);

        var arr = Object.keys(res.data[0]);

        arr = arr.filter((n) => {
          return n != "dealername";
        });
        console.log(arr);
        arr.map((filterData, i) => {
          if (filterData.includes("request")) {
            this.columns.push({
              text: "Request",
              datafield: filterData,
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              columngroup: filterData.split("request")[0],
              width: 110,
              editable: true,
            });
          } else {
            this.columns.push({
              text: "Invoice",
              datafield: filterData,
              cellsrenderer: this.renderer,
              cellsalign: "center",
              columngroup: filterData.split("invoice")[0],
              align: "center",
              width: 110,
              editable: true,
            });
          }
        });
        this.page = ["100", "200", "500", "1000"];
        this.loadingCtrl.dismiss();
        this.enablebanner(res.length);
        this.source = { localdata: res.data };
        this.dataAdapter = new jqx.dataAdapter(this.source);
      }
    });
  }

  pendingmonltybsnlsummary() {
    this.page = [];
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
    this.showLoading();
    this.columns = [
      {
        text: "Dealer Name",
        datafield: "dealername",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 110,
        editable: true,
      },
    ];

    let url = serverUrl.web + "/esim/getDealerInvoiceBSNLMonthSummary";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      var columngroups = [];
      if (Object.keys(res).length > 0) {
        res.month.map((m) => {
          columngroups.push({
            text: m,
            align: "center",
            name: m,
          });
        });

        this.myGrid.columngroups(columngroups);

        var arr = Object.keys(res.data[0]);

        arr = arr.filter((n) => {
          return n != "dealername";
        });
        console.log(arr);
        arr.map((filterData, i) => {
          if (filterData.includes("request")) {
            this.columns.push({
              text: "Request",
              datafield: filterData,
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              columngroup: filterData.split("request")[0],
              width: 110,
              editable: true,
            });
          } else {
            this.columns.push({
              text: "Invoice",
              datafield: filterData,
              cellsrenderer: this.renderer,
              cellsalign: "center",
              columngroup: filterData.split("invoice")[0],
              align: "center",
              width: 110,
              editable: true,
            });
          }
        });
        this.page = ["100", "200", "500", "1000"];
        this.loadingCtrl.dismiss();
        this.enablebanner(res.length);
        this.source = { localdata: res.data };
        this.dataAdapter = new jqx.dataAdapter(this.source);
      }
    });
  }
  // pendingBSNLCertificateDashboard() {
  //   this.showLoading();
  //   this.columns = [
  //     {
  //       label: "IMEI No",
  //       dataField: "imei",
  //       dataType: "string",
  //       width: 30,
  //     },
  //     {
  //       label: "ICCID No",
  //       dataField: "iccidno1",
  //       dataType: "string",
  //       width: 30,
  //     },
  //     {
  //       label: "Requested Date",
  //       dataField: "renewalrequestdate",
  //       dataType: "string",
  //       width: 30,
  //     },
  //   ];

  //   let url =
  //     serverUrl.web +
  //     "/esim/getDealerCertificatePending?companyid=apm&dealer=" +
  //     this.dealer;
  //   this.ajaxService.ajaxGet(url).subscribe((res) => {
  //     this.loadingCtrl.dismiss();
  //     this.enablebanner(res.length);

  //     this.dataSource = new window.Smart.DataAdapter({
  //       dataSource: res,
  //       dataFields: [
  //         "imei: string",
  //         "iccidno1: string",
  //         "renewalrequestdate: string",
  //       ],
  //     });
  //   });

  //   // let url = 'https://mvt.apmkingstrack.com/fleettracking/esim/getDealerCertificatePending?companyid=apm&dealer=apm-sa'
  //   // this.ajaxService.ajaxGet(url).subscribe(res => {
  //   //   this.data.push(res)
  //   // })
  // }

  commentsData() {
    this.endis = false;

    this.source = { localdata: JSON.parse(this.value) };
    this.dataAdapter = new jqx.dataAdapter(this.source);
    this.columns = [
      {
        text: "Comments",
        datafield: "comment",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 460,
      },
    ];
    this.page = ["100", "200", "500", "1000"];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dealer != "") {
      if (this.grid == 1) {
        this.pendingCADashboard();
      } else if (this.grid == 2) {
        this.pendingRenewalDashboard();
      } else if (this.grid == 3) {
        this.pendingExtra1YearDashboard();
      } else if (this.grid == 4) {
        this.pendingTopupDashboard();
      } else if (this.grid == 5) {
        this.pendinginvoicesummary();
      } else if (this.tab == "renewal") {
        this.pendingmonltyrenewalsummary();
      } else if (this.tab == "topup") {
        this.pendingmonltytopupsummary();
      } else if (this.tab == "extend") {
        this.pendingmonltyextendsummary();
      } else if (this.tab == "bsnl") {
        this.pendingmonltybsnlsummary();
      }

      // } else if (this.grid == 5) {
      //   this.pendingBSNLCertificateDashboard();
      // }
    }
  }
  myGridOnRowclick(event: any): void {
    this.selectedRow = event.args.row.bounddata;
  }
  ngOnInit() {
    console.log(this.value);
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
    if (this.value != undefined) {
      this.commentsData();
    }
  }
  ionViewWillEnter() {}
}
