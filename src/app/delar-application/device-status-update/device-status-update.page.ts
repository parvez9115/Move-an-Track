import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertController, ModalController, Platform } from "@ionic/angular";
import { jqxGridComponent } from "jqwidgets-ng/jqxgrid";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";
import { CommentComponent } from "./comment/comment.component";
import { StatusUpdateComponent } from "./status-update/status-update.component";
import * as XLSX from "xlsx";
import { SimUpdateComponent } from "./sim-update/sim-update.component";
import { RequestdateUpdateComponent } from "./requestdate-update/requestdate-update.component";

@Component({
  selector: "app-device-status-update",
  templateUrl: "./device-status-update.page.html",
  styleUrls: ["./device-status-update.page.scss"],
})
export class DeviceStatusUpdatePage implements OnInit {
  @ViewChild("myGrid", { static: false }) myGrid: any;
  columns: any;
  source: { localdata: any };
  page = [];
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  myPlatform: any;
  selectedRow: any;
  showButton: boolean = true;
  tableData: any;
  PurchaseForm: any;
  data: any = "";
  name: boolean = false;
  willDownload = false;
  output = "";
  imeiIssues = [];
  statusform: FormGroup;
  castatusform: FormGroup;
  cacommentform: FormGroup;

  renewalcommentupdateone: FormGroup;
  renewalcommentupdatetwo: FormGroup;
  renewalcommentupdatethree: FormGroup;
  renewalcommentupdatefour: FormGroup;
  renewalcommentupdatefive: FormGroup;

  renewalstatusupdateone: FormGroup;
  renewalstatusupdatetwo: FormGroup;
  renewalstatusupdatethree: FormGroup;
  renewalstatusupdatefour: FormGroup;
  renewalstatusupdatefive: FormGroup;
  show: boolean = false;
  status: any = "ca";
  tab: Number = 6;
  dataString: any;
  dataStringstatusupdate: any;
  dataStringca: any;
  excellKeyValidstatusupdate: boolean = false;
  excellKeyValidca: boolean = false;

  constructor(
    public platform: Platform,
    private formBuilder: FormBuilder,
    private ajaxService: AjaxService,
    private commonService: CommonService,
    private modalController: ModalController,
    private alertController: AlertController
  ) {}

  clear() {
    this.statusform.patchValue({
      imeino: "",
    });
    this.show = false;
  }

  cardclear() {
    this.castatusform.patchValue({
      castatusupdate: "",
    });
    this.renewalstatusupdateone.patchValue({
      renewalstatusone: "",
    });
    this.renewalstatusupdatetwo.patchValue({
      renewalstatustwo: "",
    });
    this.renewalstatusupdatethree.patchValue({
      renewalstatusthree: "",
    });
    this.renewalstatusupdatefour.patchValue({
      renewalstatusfour: "",
    });
    this.renewalstatusupdatefive.patchValue({
      renewalstatusfive: "",
    });
  }
  cardclear1() {
    this.cacommentform.patchValue({
      cacommentupdate: "",
    });
    this.renewalcommentupdateone.patchValue({
      renewalcommentone: "",
    });
    this.renewalcommentupdatetwo.patchValue({
      renewalcommenttwo: "",
    });
    this.renewalcommentupdatethree.patchValue({
      renewalcommentthree: "",
    });
    this.renewalcommentupdatefour.patchValue({
      renewalcommentfour: "",
    });
    this.renewalcommentupdatefive.patchValue({
      renewalcommentfive: "",
    });
  }

  async checkstatus() {
    if (this.tableData[0].sim1 == "") {
      this.commonService.showConfirm(
        "Update Sim No before updating Card Status"
      );
    } else if (this.tableData[0].sim2 == "") {
      this.commonService.showConfirm(
        "Update Sim No before updating Card Status"
      );
    } else if (this.tableData[0].cardstatus != "") {
      this.deleteMode();
    } else {
      this.Statusupdate();
    }
  }

  async deleteMode() {
    if (this.tableData[0].cardstatus != "") {
      const alert = await this.alertController.create({
        header: "Update ",
        backdropDismiss: false,
        message: "Do you want to update IMEI Status?",
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
            text: "yes",
            handler: (data) => {
              this.Statusupdate();
            },
          },
        ],
      });
      await alert.present();
    }
  }

  async Statusupdate() {
    if (this.tableData[0].cardactivationdate == "") {
      const isModalOpened = await this.modalController.getTop();
      const modal = await this.modalController.create({
        component: StatusUpdateComponent,
        cssClass: "statusform",
        componentProps: {
          statusupdate: this.tableData,
          nexttab: this.tab,
        },
      });
      modal.onDidDismiss().then((data) => {
        this.myGrid.clearselection();
        this.selectedRow = "";
        if (data.data.data == "saved success") {
          this.data = data.data.data;
          this.Submit();
        }
      });
      return await modal.present();
    } else if (this.tableData[0].cardstatus != "") {
      const isModalOpened = await this.modalController.getTop();
      const modal = await this.modalController.create({
        component: StatusUpdateComponent,
        cssClass: "statusform",
        componentProps: {
          statusupdate: this.tableData,
          nexttab: this.tab,
        },
      });
      modal.onDidDismiss().then((data) => {
        this.myGrid.clearselection();
        this.selectedRow = "";
        if (data.data.data == "saved success") {
          this.data = data.data.data;
          this.Submit();
        }
      });
      return await modal.present();
    } else {
      this.commonService.showConfirm("Already Activated This IMEI No");
    }
  }

  async requestdateupdate() {
    const isModalOpened = await this.modalController.getTop();
    const modal = await this.modalController.create({
      component: RequestdateUpdateComponent,
      cssClass: "validityform",
      componentProps: {
        value: this.tableData,
        selected: this.tab,
      },
    });
    modal.onDidDismiss().then((data) => {
      this.myGrid.clearselection();
      this.selectedRow = "";
      if (data.data.data == "Successfully") {
        this.data = data.data.data;
        this.Submit();
      }
    });
    return await modal.present();
  }

  async Simupdate() {
    const isModalOpened = await this.modalController.getTop();
    const modal = await this.modalController.create({
      component: SimUpdateComponent,
      cssClass: "statusform",
      componentProps: {
        renewal: this.tableData,
      },
    });
    modal.onDidDismiss().then((data) => {
      this.myGrid.clearselection();
      this.selectedRow = "";
      if (data.data.data == "Changed Successfully") {
        this.data = data.data.data;
        this.Submit();
      }
    });
    return await modal.present();
  }

  async Comment(row) {
    const isModalOpened = await this.modalController.getTop();
    const modal = await this.modalController.create({
      component: CommentComponent,
      cssClass: "commentform",
      componentProps: {
        comment: this.tableData,
        nexttab: this.tab,
      },
    });
    modal.onDidDismiss().then((data) => {
      this.myGrid.clearselection();
      this.selectedRow = "";
      if (data.data.data == "Esim CA Comment Saved Successfully") {
        this.data = data.data.data;
        this.Submit();
      } else {
        if (data.data.data == "Esim Renewal Comment Saved Successfully") {
          this.data = data.data.data;
          this.Submit();
        }
      }
    });
    return await modal.present();
  }

  onFileChange(ev, update) {
    if (update == "status update") {
      var fileName = ev.srcElement.files[0];
      this.name = fileName.name.includes(".xlsx");
      if (this.name == true) {
        this.dataString = [];
        let workBook = null;
        let jsonData = null;
        const reader = new FileReader();
        const file = ev.srcElement.files[0];
        reader.onload = (event) => {
          const data = reader.result;
          workBook = XLSX.read(data, { type: "binary" });
          jsonData = workBook.SheetNames.reduce((initial, name) => {
            const sheet = workBook.Sheets[name];
            initial[name] = XLSX.utils.sheet_to_json(sheet);
            return initial;
          }, {});
          let json = [];
          for (let i = 0; i < jsonData["Sheet1"].length; i++) {
            let xlsxData = {};
            xlsxData["imeino"] = jsonData["Sheet1"][i]["imeino"].toString();

            xlsxData["cardactivationdate"] =
              jsonData["Sheet1"][i]["cardactivationdate"].toString();

            if (jsonData["Sheet1"][i]["cardenddate"] != undefined) {
              xlsxData["cardenddate"] =
                jsonData["Sheet1"][i]["cardenddate"].toString();
            }

            xlsxData["cardstatus"] =
              jsonData["Sheet1"][i]["cardstatus"].toString();

            xlsxData["comment"] = jsonData["Sheet1"][i]["comment"].toString();

            json.push(xlsxData);
          }
          this.dataStringstatusupdate = json;
          this.output = this.dataString.slice(0, 300).concat("...");
        };
        reader.readAsBinaryString(file);
      } else {
        this.commonService.showConfirm("Please insert only excel file (.xlsx)");
      }
    } else if (update == "comment update") {
      var fileName = ev.srcElement.files[0];
      this.name = fileName.name.includes(".xlsx");
      if (this.name == true) {
        this.dataString = [];
        let workBook = null;
        let jsonData = null;
        const reader = new FileReader();
        const file = ev.srcElement.files[0];
        reader.onload = (event) => {
          const data = reader.result;
          workBook = XLSX.read(data, { type: "binary" });
          jsonData = workBook.SheetNames.reduce((initial, name) => {
            const sheet = workBook.Sheets[name];
            initial[name] = XLSX.utils.sheet_to_json(sheet);
            return initial;
          }, {});
          let json = [];
          for (let i = 0; i < jsonData["Sheet1"].length; i++) {
            let xlsxData = {};
            xlsxData["imeino"] = jsonData["Sheet1"][i]["imeino"].toString();
            xlsxData["comment"] = jsonData["Sheet1"][i]["comment"].toString();
            json.push(xlsxData);
          }
          this.dataStringstatusupdate = json;
          this.output = this.dataString.slice(0, 300).concat("...");
        };
        reader.readAsBinaryString(file);
      }
    } else if (update == "ca") {
      var fileName = ev.srcElement.files[0];
      this.name = fileName.name.includes(".xlsx");
      if (this.name == true) {
        this.dataString = [];
        let workBook = null;
        let jsonData = null;
        const reader = new FileReader();
        const file = ev.srcElement.files[0];
        reader.onload = (event) => {
          const data = reader.result;
          workBook = XLSX.read(data, { type: "binary" });
          jsonData = workBook.SheetNames.reduce((initial, name) => {
            const sheet = workBook.Sheets[name];
            initial[name] = XLSX.utils.sheet_to_json(sheet);
            return initial;
          }, {});
          let json = [];
          for (let i = 0; i < jsonData["Sheet1"].length; i++) {
            let xlsxData = {};
            xlsxData["imeino"] = jsonData["Sheet1"][i]["imeino"].toString();
            xlsxData["comment"] = jsonData["Sheet1"][i]["comment"].toString();
            json.push(xlsxData);
          }
          this.dataStringstatusupdate = json;
          this.output = this.dataString.slice(0, 300).concat("...");
        };
        reader.readAsBinaryString(file);
      }
    } else {
      var fileName = ev.srcElement.files[0];
      this.name = fileName.name.includes(".xlsx");
      if (this.name == true) {
        this.dataString = [];
        let workBook = null;
        let jsonData = null;
        const reader = new FileReader();
        const file = ev.srcElement.files[0];
        reader.onload = (event) => {
          const data = reader.result;
          workBook = XLSX.read(data, { type: "binary" });
          jsonData = workBook.SheetNames.reduce((initial, name) => {
            const sheet = workBook.Sheets[name];
            initial[name] = XLSX.utils.sheet_to_json(sheet);
            return initial;
          }, {});
          let json = [];
          for (let i = 0; i < jsonData["Sheet1"].length; i++) {
            let xlsxData = {};
            xlsxData["imeino"] = jsonData["Sheet1"][i]["imeino"].toString();

            xlsxData["cardactivationdate"] =
              jsonData["Sheet1"][i]["cardactivationdate"].toString();

            if (jsonData["Sheet1"][i]["cardenddate"] != undefined) {
              xlsxData["cardenddate"] =
                jsonData["Sheet1"][i]["cardenddate"].toString();
            }

            xlsxData["cardstatus"] =
              jsonData["Sheet1"][i]["cardstatus"].toString();

            xlsxData["comment"] = jsonData["Sheet1"][i]["comment"].toString();

            json.push(xlsxData);
          }
          this.dataStringca = json;
          this.output = this.dataString.slice(0, 300).concat("...");
          // this.sendToServer(dataString);
        };
        reader.readAsBinaryString(file);
      } else {
        this.commonService.showConfirm("Please insert only excel file (.xlsx)");
      }
    }
  }

  sendToServer(data, renewals) {
    if (data == "status update") {
      if (this.dataStringstatusupdate.length == 0) {
        this.commonService.showConfirm(
          "Check your excell file,don't enter blank spaces"
        );
      } else {
        var excellKeys = Object.keys(this.dataStringstatusupdate[0]);
        for (var i = 0; i < excellKeys.length; i++) {
          if (
            excellKeys[i] == "imeino" ||
            excellKeys[i] == "cardactivationdate" ||
            excellKeys[i] == "cardenddate" ||
            excellKeys[i] == "cardstatus" ||
            excellKeys[i] == "comment"
          ) {
            console.log("present");
            this.excellKeyValidstatusupdate = true;
          }
        }
        if (this.name == true && this.excellKeyValidstatusupdate == true) {
          this.imeiIssues = [];
          this.willDownload = true;

          this.commonService.presentLoader();
          const url =
            serverUrl.web +
            "/esim/saveEsimRenewalStatusUpdate?renewalno=" +
            renewals +
            "&createdby=" +
            localStorage.getItem("userName");
          this.ajaxService
            .ajaxPostWithBody(url, this.dataStringstatusupdate)
            .subscribe((res) => {
              this.commonService.dismissLoader();
              if (res.message == "Esim Renewal Status Saved Successfully") {
                this.commonService.showConfirm(res.message);
                this.cardclear();
              } else {
                this.commonService.showConfirm(res.message);
              }
            });
        } else {
          this.commonService.showConfirm(
            "Please insert valid excel file (.xlsx)"
          );
        }
      }
    } else if (data == "comment update") {
      if (this.dataStringstatusupdate.length == 0) {
        this.commonService.showConfirm(
          "Check your excell file,don't enter blank spaces"
        );
      } else {
        var excellKeys = Object.keys(this.dataStringstatusupdate[0]);
        for (var i = 0; i < excellKeys.length; i++) {
          if (excellKeys[i] == "imeino" || excellKeys[i] == "comment") {
            console.log("present");
            this.excellKeyValidstatusupdate = true;
          }
        }
        if (this.name == true && this.excellKeyValidstatusupdate == true) {
          this.imeiIssues = [];
          this.willDownload = true;

          this.commonService.presentLoader();
          const url =
            serverUrl.web +
            "/esim/saveEsimBulkRenewalComment?createdby=" +
            localStorage.getItem("userName") +
            "&renewalno=" +
            renewals;
          this.ajaxService
            .ajaxPostWithBody(url, this.dataStringstatusupdate)
            .subscribe((res) => {
              this.commonService.dismissLoader();
              if (res.message == "Esim Renewal Comment Saved Successfully") {
                this.commonService.showConfirm(res.message);
                this.cardclear1();
              } else {
                this.commonService.showConfirm(res.message);
              }
            });
        } else {
          this.commonService.showConfirm(
            "Please insert valid excel file (.xlsx)"
          );
        }
      }
    } else if (data == "ca") {
      if (this.dataStringstatusupdate.length == 0) {
        this.commonService.showConfirm(
          "Check your excell file,don't enter blank spaces"
        );
      } else {
        var excellKeys = Object.keys(this.dataStringstatusupdate[0]);
        for (var i = 0; i < excellKeys.length; i++) {
          if (excellKeys[i] == "imeino" || excellKeys[i] == "comment") {
            console.log("present");
            this.excellKeyValidstatusupdate = true;
          }
        }
        if (this.name == true && this.excellKeyValidstatusupdate == true) {
          this.imeiIssues = [];
          this.willDownload = true;

          this.commonService.presentLoader();
          const url =
            serverUrl.web +
            "/esim/saveEsimBulkCAComment?createdby=" +
            localStorage.getItem("userName");
          this.ajaxService
            .ajaxPostWithBody(url, this.dataStringstatusupdate)
            .subscribe((res) => {
              this.commonService.dismissLoader();
              if (res.message == "Esim CA Comment Saved Successfully") {
                this.commonService.showConfirm(res.message);
                this.cardclear1();
              } else {
                this.commonService.showConfirm(res.message);
              }
            });
        } else {
          this.commonService.showConfirm(
            "Please insert valid excel file (.xlsx)"
          );
        }
      }
    } else {
      if (this.dataStringca.length == 0) {
        this.commonService.showConfirm(
          "Check your excell file,don't enter blank spaces"
        );
      } else {
        var excellKeys = Object.keys(this.dataStringca[0]);
        for (var i = 0; i < excellKeys.length; i++) {
          if (
            excellKeys[i] == "imeino" ||
            excellKeys[i] == "cardactivationdate" ||
            excellKeys[i] == "cardenddate" ||
            excellKeys[i] == "cardstatus" ||
            excellKeys[i] == "comment"
          ) {
            console.log("present");
            this.excellKeyValidca = true;
          }
        }
        if (this.name == true && this.excellKeyValidca == true) {
          this.imeiIssues = [];
          this.willDownload = true;

          this.commonService.presentLoader();
          const url =
            serverUrl.web +
            "/esim/saveEsimCAStatusUpdate?createdby=" +
            localStorage.getItem("userName");
          this.ajaxService
            .ajaxPostWithBody(url, this.dataStringca)
            .subscribe((res) => {
              this.commonService.dismissLoader();
              if (res.message == "Esim CA Status Saved Successfully") {
                this.commonService.showConfirm(res.message);
                this.cardclear();
              } else {
                this.commonService.showConfirm(res.message);
              }
            });
        } else {
          this.commonService.presentToast(
            "Please insert valid excel file (.xlsx)"
          );
        }
      }
    }
  }

  Submit() {
    if (this.tab == 6) {
      this.show = false;
      this.commonService.presentLoader();
      var url =
        serverUrl.web +
        "/esim/getDealerCARequest?imeino=" +
        this.statusform.value.imeino;
      this.ajaxService.ajaxGet(url).subscribe((res) => {
        if (res[0].message == "") {
          this.tableData = res;
          this.commonService.dismissLoader();
          this.show = true;
          this.getdatas(this.tab);
          localStorage.setItem("tab", "1");
          console.log(this.myGrid);
        } else {
          this.show = false;
          this.commonService.dismissLoader();
          this.commonService.showConfirm(res[0].message);
        }
      });
    } else {
      this.show = false;
      this.commonService.presentLoader();
      var url =
        serverUrl.web +
        "/esim/getDealerRenewalRequest?imeino=" +
        this.statusform.value.imeino +
        "&renewalno=" +
        this.tab;
      this.ajaxService.ajaxGet(url).subscribe((res) => {
        if (res[0].message == "") {
          this.tableData = res;
          this.commonService.dismissLoader();
          this.show = true;
          this.getdatas(this.tab);
          localStorage.setItem("tab", "2");
          console.log(this.myGrid);
        } else {
          this.show = false;
          this.commonService.dismissLoader();
          this.commonService.showConfirm(res[0].message);
        }
      });
    }
  }

  getdatas(d?) {
    this.page = [];
    if (d == undefined) {
      this.tab = 1;
      localStorage.setItem("tab", "1");
    } else {
      this.tab = d;
      localStorage.setItem("tab", "2");
    }
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
    this.page = ["100", "200", "500", "1000"];
    this.columns = [
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
        text: "ICCID No 1",
        datafield: "iccidno1",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 140,
        editable: true,
      },
      {
        text: "ICCID No 2",
        datafield: "iccidno2",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 140,
        editable: true,
      },
      {
        text: "IMEI No",
        datafield: "imei",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 110,
        editable: true,
      },
      {
        text: "SIM 1",
        datafield: "sim1",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 100,
        editable: true,
      },
      {
        text: "SIM 2",
        datafield: "sim2",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 100,
        editable: true,
      },
      {
        text: "Slot No",
        datafield: "slotno",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 100,
      },
      {
        text: "Validity Requested",
        datafield: "validityperiod",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 155,
      },
      {
        text: "Card Activated Date",
        datafield: "cardactivationdate",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 150,
        editable: true,
      },
      {
        text: "Card End Date",
        datafield: "cardenddate",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 100,
        editable: true,
      },
      {
        text: "Card Status",
        datafield: "cardstatus",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 100,
        editable: true,
      },

      {
        text: "Comment",
        datafield: "purcomment",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 130,
        editable: true,
      },
    ];
  }

  myGridOnRowSelect(event: any): void {
    this.selectedRow = event.args.row.bounddata;
  }

  ngOnInit() {
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
    this.statusform = this.formBuilder.group({
      imeino: ["", Validators.required],
    });
    this.castatusform = this.formBuilder.group({
      castatusupdate: ["", Validators.required],
    });
    this.cacommentform = this.formBuilder.group({
      cacommentupdate: ["", Validators.required],
    });

    this.renewalcommentupdateone = this.formBuilder.group({
      renewalcommentone: ["", Validators.required],
    });
    this.renewalcommentupdatetwo = this.formBuilder.group({
      renewalcommenttwo: ["", Validators.required],
    });
    this.renewalcommentupdatethree = this.formBuilder.group({
      renewalcommentthree: ["", Validators.required],
    });
    this.renewalcommentupdatefour = this.formBuilder.group({
      renewalcommentfour: ["", Validators.required],
    });
    this.renewalcommentupdatefive = this.formBuilder.group({
      renewalcommentfive: ["", Validators.required],
    });

    this.renewalstatusupdateone = this.formBuilder.group({
      renewalstatusone: ["", Validators.required],
    });
    this.renewalstatusupdatetwo = this.formBuilder.group({
      renewalstatustwo: ["", Validators.required],
    });
    this.renewalstatusupdatethree = this.formBuilder.group({
      renewalstatusthree: ["", Validators.required],
    });
    this.renewalstatusupdatefour = this.formBuilder.group({
      renewalstatusfour: ["", Validators.required],
    });
    this.renewalstatusupdatefive = this.formBuilder.group({
      renewalstatusfive: ["", Validators.required],
    });
  }

  ionViewWillEnter() {}
}
