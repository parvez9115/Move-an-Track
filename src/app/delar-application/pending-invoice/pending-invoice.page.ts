import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import {
  AlertController,
  LoadingController,
  ModalController,
  Platform,
} from "@ionic/angular";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";
import { ViewDetailsComponent } from "./view-details/view-details.component";
import { ViewInvoiceComponent } from "./view-invoice/view-invoice.component";
import { ConfirmPopupComponent } from "./confirm-popup/confirm-popup.component";

@Component({
  selector: "app-pending-invoice",
  templateUrl: "./pending-invoice.page.html",
  styleUrls: ["./pending-invoice.page.scss"],
})
export class PendingInvoicePage implements OnInit {
  tableData: any;
  @ViewChild("myGrid", { static: false }) myGrid: any;
  source: { localdata: any };
  renderer: (row: number, column: any, value: string) => string;
  dataAdapter: any;
  columns: any;
  myPlatform: string;
  selectedRow: any;
  pageName: any;
  confirmvalue: any;
  invoices = [];
  color = "";
  closecolor = "";
  deletecolor = "";
  closeinvoices = [];
  deleteinvoices = [];
  status = "Pending";

  constructor(
    public loadingController: LoadingController,
    private ajaxService: AjaxService,
    private router: Router,
    private modalController: ModalController,
    private alertController: AlertController,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private formBuilder: FormBuilder,
    private platform: Platform
  ) {
    this.route.queryParams.subscribe((params) => {
      this.pageName = params["pageName"];
    });
  }

  goback() {
    if (this.pageName == "Sales") {
      this.router.navigateByUrl("/tabs-login/sales-invoice-details");
    } else if (this.pageName == "Renewal") {
      this.router.navigateByUrl("/tabs-login/renewal-invoice-details");
    } else if (this.pageName == "Topup") {
      this.router.navigateByUrl("/tabs-login/topup-invoice-details");
    } else if (this.pageName == "Extend") {
      this.router.navigateByUrl("/tabs-login/extend-oneyear-invoice-details");
    } else if (this.pageName == "BSNL Certificate") {
      this.router.navigateByUrl("/tabs-login/certificate-invoice-details");
    } else if (this.pageName == "Sensorise") {
      this.router.navigateByUrl("/tabs-login/sensorise-invoice-detail-new");
    }
  }

  pendinginvoicecount() {
    if (this.pageName == "Sensorise") {
      var url =
        serverUrl.web + "//sensorise/getSensoriseBillsCount?status=Pending";
      this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
        this.invoices = res;
        if (res.pending != 0) {
          this.color = "green";
        } else {
          this.color = "red";
        }
      });
    } else {
      var url =
        serverUrl.web +
        "/esim/getesimInvoiceCount?pagename=" +
        this.pageName +
        "&status=Pending";
      this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
        this.invoices = res;
        if (res.pending != 0) {
          this.color = "green";
        } else {
          this.color = "red";
        }
      });
    }
  }

  closeinvoicecount() {
    if (this.pageName == "Sensorise") {
      var url =
        serverUrl.web + "/sensorise/getSensoriseBillsCount?status=Close";
      this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
        this.closeinvoices = res;
        if (res.pending != 0) {
          this.closecolor = "green";
        } else {
          this.closecolor = "red";
        }
      });
    } else {
      var url =
        serverUrl.web +
        "/esim/getesimInvoiceCount?pagename=" +
        this.pageName +
        "&status=Close";
      this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
        this.closeinvoices = res;
        if (res.pending != 0) {
          this.closecolor = "green";
        } else {
          this.closecolor = "red";
        }
      });
    }
  }

  deleteinvoicecount() {
    if (this.pageName == "Sensorise") {
      var url =
        serverUrl.web + "/sensorise/getSensoriseBillsCount?status=Deleted";
      this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
        this.deleteinvoices = res;
        if (res.pending != 0) {
          this.deletecolor = "green";
        } else {
          this.deletecolor = "red";
        }
      });
    } else {
      var url =
        serverUrl.web +
        "/esim/getesimInvoiceCount?pagename=" +
        this.pageName +
        "&status=Deleted";
      this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
        this.deleteinvoices = res;
        if (res.pending != 0) {
          this.deletecolor = "green";
        } else {
          this.deletecolor = "red";
        }
      });
    }
  }

  getdatas(d?) {
    if (this.pageName == "Sensorise") {
      if (d == undefined) {
        this.status = "Pending";
      } else {
        this.status = d;
      }
      this.commonService.presentLoader();
      var url =
        serverUrl.web +
        `/sensorise/getSensorisePendingBills?status=${this.status}`;
      this.ajaxService.ajaxGet(url).subscribe((res) => {
        this.commonService.dismissLoader();
        this.tableData = res;
        this.renderer = (row: number, column: any, value: string) => {
          if (value == "") {
            return "--";
          } else if (value == "0.0") {
            return (
              '<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
              0.0 +
              "</span>"
            );
          } else {
            return (
              '<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
              value +
              "</span>"
            );
          }
        };
        this.pendinginvoicecount();
        this.closeinvoicecount();
        this.deleteinvoicecount();
        this.source = { localdata: this.tableData };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        if (this.status == "Deleted") {
          this.columns = [
            {
              text: "Approved ID",
              datafield: "approvedid",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
              editable: true,
            },
            {
              text: "Bill No",
              datafield: "billno",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
              editable: true,
            },
            {
              text: "Bill Date",
              datafield: "billdate",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
            },
            {
              text: "Action Name",
              datafield: "actionname",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
            },
            {
              text: "Product Name",
              datafield: "productname",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 350,
            },
            {
              text: "No of Units",
              datafield: "noofunits",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 100,
            },
            {
              text: "Username",
              datafield: "username",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 100,
            },
            {
              text: "Approved by",
              datafield: "approvedby",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
            },
            {
              text: "Approved Date",
              datafield: "approveddate",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
            },
            {
              text: "",
              datafield: "restore",
              columntype: "button",
              cellsalign: "center",
              align: "center",
              width: 60,
              cellsrenderer: (): string => {
                return this.myPlatform == "desktop"
                  ? "Restore"
                  : "<button>Restore</button>";
              },
              buttonclick: (row): void => {
                this.restoreModel();
              },
            },
          ];
        } else if (this.status == "Close") {
          this.columns = [
            {
              text: "Approved ID",
              datafield: "approvedid",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
              editable: true,
            },
            {
              text: "Bill No",
              datafield: "billno",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
              editable: true,
            },
            {
              text: "Bill Date",
              datafield: "billdate",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
            },
            {
              text: "Action Name",
              datafield: "actionname",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
            },
            {
              text: "Product Name",
              datafield: "productname",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 350,
            },
            {
              text: "No of Units",
              datafield: "noofunits",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 100,
            },
            {
              text: "Username",
              datafield: "username",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 100,
            },
            {
              text: "Approved by",
              datafield: "approvedby",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
            },
            {
              text: "Approved Date",
              datafield: "approveddate",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
            },
          ];
        } else {
          this.columns = [
            {
              text: "Approved ID",
              datafield: "approvedid",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
              editable: true,
            },
            {
              text: "Bill No",
              datafield: "billno",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
              editable: true,
            },
            {
              text: "Bill Date",
              datafield: "billdate",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
            },
            {
              text: "Action Name",
              datafield: "actionname",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
            },
            {
              text: "Product Name",
              datafield: "productname",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 350,
            },
            {
              text: "No of Units",
              datafield: "noofunits",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 100,
            },
            {
              text: "Username",
              datafield: "username",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 100,
            },
            {
              text: "Approved by",
              datafield: "approvedby",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
            },
            {
              text: "Approved Date",
              datafield: "approveddate",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
            },
            {
              text: "",
              datafield: "invoice",
              columntype: "button",
              cellsalign: "center",
              align: "center",
              width: 130,
              cellsrenderer: (): string => {
                return this.myPlatform == "desktop"
                  ? "Generate Invoice"
                  : "<button>Generate Invoice</button>";
              },
              buttonclick: (row): void => {
                this.Generateinvoice();
              },
            },

            {
              text: "",
              datafield: "delete",
              columntype: "button",
              cellsalign: "center",
              align: "center",
              width: 60,
              cellsrenderer: (): string => {
                return this.myPlatform == "desktop"
                  ? "Delete"
                  : "<button>Delete</button>";
              },
              buttonclick: (row): void => {
                this.deleteModel();
              },
            },
          ];
        }
      });
    } else {
      if (d == undefined) {
        this.status = "Pending";
      } else {
        this.status = d;
      }
      this.commonService.presentLoader();
      var url =
        serverUrl.web +
        `/esim/getesimInvoiceDetail?pagename=${this.pageName}&status=${this.status}`;
      this.ajaxService.ajaxGet(url).subscribe((res) => {
        this.commonService.dismissLoader();
        this.tableData = res;
        this.renderer = (row: number, column: any, value: string) => {
          if (value == "") {
            return "--";
          } else if (value == "0.0") {
            return (
              '<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
              0.0 +
              "</span>"
            );
          } else {
            return (
              '<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
              value +
              "</span>"
            );
          }
        };
        this.pendinginvoicecount();
        this.closeinvoicecount();
        this.deleteinvoicecount();
        this.source = { localdata: this.tableData };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        if (this.status == "Deleted") {
          this.columns = [
            {
              text: "Approved ID",
              datafield: "approvedid",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
              editable: true,
            },
            {
              text: "Dealer",
              datafield: "dealername",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
              editable: true,
            },
            {
              text: "Invoice No",
              datafield: "invoiceno",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
            },
            {
              text: "Invoice Date",
              datafield: "invoicedate",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
            },
            {
              text: "Total Item",
              datafield: "totalitem",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 100,
            },
            {
              text: "User Name",
              datafield: "username",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 150,
            },
            {
              text: "Approved by",
              datafield: "approvedby",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 100,
            },
            {
              text: "Approved Date",
              datafield: "approveddate",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
            },

            {
              text: "",
              datafield: "View Detail",
              columntype: "button",
              cellsalign: "center",
              align: "center",
              width: 60,
              cellsrenderer: (): string => {
                return this.myPlatform == "desktop"
                  ? "View"
                  : "<button>View</button>";
              },
              buttonclick: (row): void => {
                this.view();
              },
            },
            {
              text: "",
              datafield: "restore",
              columntype: "button",
              cellsalign: "center",
              align: "center",
              width: 60,
              cellsrenderer: (): string => {
                return this.myPlatform == "desktop"
                  ? "Restore"
                  : "<button>Restore</button>";
              },
              buttonclick: (row): void => {
                this.restoreModel();
              },
            },
          ];
        } else if (this.status == "Close") {
          this.columns = [
            {
              text: "Approved ID",
              datafield: "approvedid",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
              editable: true,
            },
            {
              text: "Dealer",
              datafield: "dealername",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
              editable: true,
            },
            {
              text: "Invoice No",
              datafield: "invoiceno",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
            },
            {
              text: "Invoice Date",
              datafield: "invoicedate",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
            },
            {
              text: "Total Item",
              datafield: "totalitem",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 100,
            },
            {
              text: "User Name",
              datafield: "username",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 150,
            },
            {
              text: "Approved by",
              datafield: "approvedby",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 100,
            },
            {
              text: "Approved Date",
              datafield: "approveddate",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
            },

            {
              text: "",
              datafield: "View Detail",
              columntype: "button",
              cellsalign: "center",
              align: "center",
              width: 60,
              cellsrenderer: (): string => {
                return this.myPlatform == "desktop"
                  ? "View"
                  : "<button>View</button>";
              },
              buttonclick: (row): void => {
                this.view();
              },
            },
          ];
        } else {
          this.columns = [
            {
              text: "Approved ID",
              datafield: "approvedid",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 90,
              editable: true,
            },
            {
              text: "Dealer",
              datafield: "dealername",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 100,
              editable: true,
            },
            {
              text: "Invoice No",
              datafield: "invoiceno",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 110,
            },
            {
              text: "Invoice Date",
              datafield: "invoicedate",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 100,
            },
            {
              text: "Total Item",
              datafield: "totalitem",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 80,
            },
            {
              text: "User Name",
              datafield: "username",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 120,
            },
            {
              text: "Approved by",
              datafield: "approvedby",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 100,
            },
            {
              text: "Approved Date",
              datafield: "approveddate",
              cellsrenderer: this.renderer,
              cellsalign: "center",
              align: "center",
              width: 100,
            },
            {
              text: "",
              datafield: "View Detail",
              columntype: "button",
              cellsalign: "center",
              align: "center",
              width: 55,
              cellsrenderer: (): string => {
                return this.myPlatform == "desktop"
                  ? "View"
                  : "<button>View</button>";
              },
              buttonclick: (row): void => {
                this.view();
              },
            },
            {
              text: "",
              datafield: "invoice",
              columntype: "button",
              cellsalign: "center",
              align: "center",
              width: 130,
              cellsrenderer: (): string => {
                return this.myPlatform == "desktop"
                  ? "Generate Invoice"
                  : "<button>Generate Invoice</button>";
              },
              buttonclick: (row): void => {
                this.pendinginvoice();
              },
            },

            {
              text: "",
              datafield: "delete",
              columntype: "button",
              cellsalign: "center",
              align: "center",
              width: 60,
              cellsrenderer: (): string => {
                return this.myPlatform == "desktop"
                  ? "Delete"
                  : "<button>Delete</button>";
              },
              buttonclick: (row): void => {
                this.deleteModel();
              },
            },
          ];
        }
      });
    }
  }

  async view() {
    const modal = await this.modalController.create({
      component: ViewDetailsComponent,
      cssClass: "invoiceform",
      componentProps: {
        value: this.selectedRow,
        pagetitle: this.pageName,
      },
    });
    modal.onDidDismiss().then(() => {
      this.selectedRow = undefined;
    });
    return await modal.present();
  }

  async pendinginvoice() {
    const modal = await this.modalController.create({
      component: ViewInvoiceComponent,
      cssClass: "invoiceform",
      componentProps: {
        value: this.selectedRow,
        pagetitle: this.pageName,
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data.data == "Invoice Details Saved Successfully") {
        this.getdatas();
        this.commonService.showConfirm("Invoice Details Saved Successfully");
      }
    });
    return await modal.present();
  }

  // Only For Sensorise

  async Generateinvoice() {
    const modal = await this.modalController.create({
      component: ConfirmPopupComponent,
      cssClass: "confirmdelete",
      componentProps: {
        value: this.selectedRow,
      },
    });
    modal.onDidDismiss().then((data) => {
      data.data.value;
      this.confirmvalue = data.data.value;
      this.api();
    });
    return await modal.present();
  }

  api() {
    var data;
    data = {
      actionname: this.selectedRow.actionname,
      productname: this.selectedRow.productname,
      quantity: this.selectedRow.noofunits.toString(),
    };
    this.commonService.presentLoader();
    var url =
      serverUrl.web +
      "/sensorise/saveZohoSensoriseInvoiceDetails?billno=" +
      this.selectedRow.billno +
      "&billdate=" +
      this.selectedRow.billdate +
      "&approveid=" +
      this.selectedRow.approvedid +
      "&username=" +
      this.confirmvalue.username +
      "&password=" +
      this.confirmvalue.password;
    this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
      this.commonService.dismissLoader();
      if (res.message == "Sensorise Invoice Saved Successfully") {
        this.commonService.showConfirm(res.message);
        this.getdatas();
      } else {
        this.commonService.showConfirm(res.message);
      }
    });
  }

  async deleteModel() {
    const alert = await this.alertController.create({
      header: " Delete",
      backdropDismiss: false,
      message: "Are you sure you want to Delete?",
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
            this.confirmdelete();
          },
        },
      ],
    });
    await alert.present();
  }

  async confirmdelete() {
    const modal = await this.modalController.create({
      component: ConfirmPopupComponent,
      cssClass: "confirmdelete",
      componentProps: {
        value: this.selectedRow,
      },
    });
    modal.onDidDismiss().then((data) => {
      data.data.value;
      this.confirmvalue = data.data.value;
      this.deleteinvoice();
    });
    return await modal.present();
  }

  deleteinvoice() {
    if (this.pageName == "Sensorise") {
      this.commonService.presentLoader();
      const url =
        serverUrl.web +
        "/sensorise/deletePendingSensoriseBills?approveid=" +
        this.selectedRow.approvedid +
        "&username=" +
        this.confirmvalue.username +
        "&password=" +
        this.confirmvalue.password;
      this.ajaxService.ajaxDeleteWithString(url).subscribe((res) => {
        this.commonService.dismissLoader();
        if (res.message == "Pending Bills Deleted Successfully") {
          this.getdatas();
          this.commonService.showConfirm(res.message);
        } else {
          this.commonService.showConfirm(res.message);
        }
      });
    } else {
      this.commonService.presentLoader();
      const url =
        serverUrl.web +
        "/esim/deletePendingZohoInvoice?approveid=" +
        this.selectedRow.approvedid +
        "&username=" +
        this.confirmvalue.username +
        "&password=" +
        this.confirmvalue.password;
      this.ajaxService.ajaxDeleteWithString(url).subscribe((res) => {
        this.commonService.dismissLoader();
        if (res.message == "Pending Invoice Deleted Successfully") {
          this.getdatas();
          this.commonService.showConfirm(res.message);
        } else {
          this.commonService.showConfirm(res.message);
        }
      });
    }
  }

  async restoreModel() {
    const alert = await this.alertController.create({
      header: " Delete",
      backdropDismiss: false,
      message: "Are you sure you want to Restore?",
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
            this.restore();
          },
        },
      ],
    });
    await alert.present();
  }

  restore() {
    if (this.pageName == "Sensorise") {
      const url =
        serverUrl.web +
        "/sensorise/restoredeleteSensoriseBills?approveid=" +
        this.selectedRow.approvedid;
      this.ajaxService.ajaxDeleteWithString(url).subscribe((res) => {
        if (res.message == "Deleted Bills Restored Successfully") {
          this.commonService.showConfirm(res.message);
          this.getdatas();
        } else {
          this.commonService.showConfirm(res.message);
        }
      });
    } else {
      const url =
        serverUrl.web +
        "/esim/restoredeleteZohoInvoice?approveid=" +
        this.selectedRow.approvedid;
      this.ajaxService.ajaxDeleteWithString(url).subscribe((res) => {
        if (res.message == "Deleted Invoice Restored Successfully") {
          this.commonService.showConfirm(res.message);
          this.getdatas();
        } else {
          this.commonService.showConfirm(res.message);
        }
      });
    }
  }

  myGridOnRowSelect(event: any): void {
    this.selectedRow = event.args.row.bounddata;
  }

  ngAfterViewInit() {
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
