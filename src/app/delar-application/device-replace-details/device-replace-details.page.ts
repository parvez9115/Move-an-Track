import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertController, ModalController, Platform } from "@ionic/angular";
import { jqxGridComponent } from "jqwidgets-ng/jqxgrid";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";
import { AddDeviceComponent } from "./add-device/add-device.component";
import { ReplaceComponent } from "./replace/replace.component";

@Component({
  selector: "app-device-replace-details",
  templateUrl: "./device-replace-details.page.html",
  styleUrls: ["./device-replace-details.page.scss"],
})
export class DeviceReplaceDetailsPage implements OnInit {
  returnForm: FormGroup;
  @ViewChild("myGrid", { static: false }) myGrid: jqxGridComponent;
  columns: any;
  source: { localdata: any };
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  myPlatform: any;
  tableData: any;
  page = [];
  selectedRow: any;
  companyId = localStorage.getItem("userName");
  show: boolean = false;
  historyvalue: any;
  alternategrid: any;

  constructor(
    public platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private alertController: AlertController,
    private commonService: CommonService,
    private ajaxService: AjaxService
  ) {}

  createForm() {
    this.returnForm = this.formBuilder.group({
      boxno: [""],
      imeino: [""],
    });
  }

  clear() {
    this.returnForm.patchValue({
      boxno: "",
      imeino: "",
    });
    this.show = false;
  }

  history(d) {
    const url =
      serverUrl.web +
      "/esim/getdevicereplaced?imei=" +
      this.returnForm.value.imeino;
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.historyvalue = res;
      this.SearchData(d);
    });
  }

  async addDevice(row) {
    const modal = await this.modalController.create({
      component: AddDeviceComponent,
      cssClass: "saleform",
      componentProps: {
        value: "",
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data == "Device Added Successfully") {
        this.commonService.showConfirm(data.data);
      }
    });
    return await modal.present();
  }

  async replaceModel() {
    const modal = await this.modalController.create({
      component: ReplaceComponent,
      cssClass: "replaceform",
      componentProps: {
        value: this.selectedRow,
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data == "Device Replaced Successfully") {
        this.commonService.showConfirm(data.data);
        this.show = false;
      }
    });
    return await modal.present();
  }

  delete() {
    const url =
      serverUrl.web +
      "/esim/deleteimeino?imeino=" +
      this.selectedRow.imeino +
      "&dealername=" +
      localStorage.getItem("userName");
    this.ajaxService.ajaxGetWithBody(url).subscribe((response) => {
      let res = JSON.parse(response);
      if (res.message == "Device Successfully Removed") {
        this.commonService.showConfirm("Device Successfully Removed");
        this.myGrid.clearselection();
        this.modalController.dismiss();
        this.selectedRow = "";
        this.show = false;
      } else {
        this.commonService.showConfirm(res.message);
      }
    });
  }

  SearchData(d?) {
    if (d == "history") {
      this.tableData = this.historyvalue;
      this.show = true;
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
      this.columns = [
        {
          text: "Old ICCID 1",
          datafield: "oldiccidno1",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 150,
          editable: true,
        },
        {
          text: "Old ICCID 2",
          datafield: "oldiccidno2",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 150,
          editable: true,
        },
        {
          text: "New ICCID 1",
          datafield: "iccidno1",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 150,
        },
        {
          text: "New ICCID 2",
          datafield: "iccidno2",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 150,
        },
        {
          text: "Old IMEI",
          datafield: "oldimeino",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 130,
        },
        {
          text: "New IMEI",
          datafield: "imeino",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 130,
        },
        {
          text: "VLTD No",
          datafield: "vltdsno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 150,
        },
        {
          text: "Replace Date",
          datafield: "replaceddate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 110,
        },
        {
          text: "Replaced by",
          datafield: "replacedby",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 110,
        },
      ];
    } else if (d == "submit") {
      if (
        this.returnForm.value.imeino != "" ||
        this.returnForm.value.boxno != ""
      ) {
        this.page = [];
        this.commonService.presentLoader();
        let imei =
          this.returnForm.value.imeino != null
            ? this.returnForm.value.imeino
            : "";
        var url =
          serverUrl.web +
          "/esim/getImeiNoDetails?boxno=" +
          this.returnForm.value.boxno +
          "&imeino=" +
          imei;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
          if (
            this.returnForm.value.imeino != "" ||
            this.returnForm.value.boxno != ""
          ) {
            if (res.message) {
              this.commonService.dismissLoader();
              this.commonService.showConfirm(res.message);
              this.show = false;
              this.page = ["100", "200", "500", "1000"];
            } else {
              if (res.length == 0) {
                this.commonService.showConfirm("No Record Found");
                this.commonService.dismissLoader();
                this.show = false;
              } else {
                this.page = ["100", "200", "500", "1000"];
                this.tableData = res;
                this.commonService.dismissLoader();
                this.show = true;
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
                this.columns = [
                  {
                    text: "Box No",
                    datafield: "boxno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                    editable: true,
                  },
                  {
                    text: "VLTD No",
                    datafield: "vltdsno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                    editable: true,
                  },
                  {
                    text: "IMEI No",
                    datafield: "imeino",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                  },
                  {
                    text: "Invoie No",
                    datafield: "invoiceno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                  },
                  {
                    text: "Sales Date",
                    datafield: "salesdate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                  },
                  {
                    text: "ICCID No 1",
                    datafield: "iccidno1",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                  },
                  {
                    text: "Sim No 1",
                    datafield: "simno1",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                  },
                  {
                    text: "ICCID No 2",
                    datafield: "iccidno2",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                  },
                  {
                    text: "Sim No 2",
                    datafield: "simno2",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                  },
                  {
                    text: "Slot No",
                    datafield: "slotno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 90,
                  },
                  {
                    text: "Requested by",
                    datafield: "Requesteddealer",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                  },
                  {
                    text: "Current Dealer",
                    datafield: "currentdealer",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 105,
                  },

                  {
                    text: "Created by",
                    datafield: "createdby",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                  },
                  {
                    text: "",
                    datafield: "replace",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 80,
                    cellsrenderer: (): string => {
                      return this.myPlatform == "desktop"
                        ? "Replace"
                        : "<button>Replace</button>";
                    },
                    buttonclick: (): void => {
                      this.replaceModel();
                    },
                  },
                ];
              }
            }
          } else {
            this.commonService.dismissLoader();
            this.commonService.showConfirm("Enter the Boxno and Imeino");
          }
        });
      } else {
        this.commonService.showConfirm("Enter the Box No or Imei No");
      }
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
    this.createForm();
  }

  ionViewWillEnter() {
    this.clear();
  }
}
