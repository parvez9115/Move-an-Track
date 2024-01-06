import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertController, ModalController, Platform } from "@ionic/angular";
import { jqxGridComponent } from "jqwidgets-ng/jqxgrid";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { ExportExcelService } from "src/app/services/export-excel.service";
import { serverUrl } from "src/environments/environment";
import * as XLSX from "xlsx";

@Component({
  selector: "app-device-return-details",
  templateUrl: "./device-return-details.page.html",
  styleUrls: ["./device-return-details.page.scss"],
})
export class DeviceReturnDetailsPage implements OnInit {
  returnForm: FormGroup;
  bulkreturn: FormGroup;
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
  name: boolean = false;
  willDownload = false;
  dataString: any;
  output = "";
  file;
  excellKeyValid: boolean = false;
  imeiIssues: any[];

  constructor(
    public platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private alertController: AlertController,
    private commonService: CommonService,
    private ajaxService: AjaxService,
    private ete: ExportExcelService
  ) {}

  createForm() {
    this.returnForm = this.formBuilder.group({
      boxno: [""],
      imeino: [""],
    });
    this.bulkreturn = this.formBuilder.group({
      fileupload: [""],
    });
  }

  clear() {
    this.returnForm.patchValue({
      boxno: "",
      imeino: "",
    });
    this.show = false;
  }

  fileclear() {
    this.bulkreturn.patchValue({
      fileupload: "",
    });
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

  async deleteModel() {
    const alert = await this.alertController.create({
      header: "Remove",
      backdropDismiss: false,
      message: "Are you sure you want to remove?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: (data) => {},
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

  SearchData() {
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
              this.tableData = res;
              this.commonService.dismissLoader();
              this.show = true;
              this.page = ["100", "200", "500", "1000"];
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
                  datafield: "delete",
                  columntype: "button",
                  cellsalign: "center",
                  align: "center",
                  width: 80,
                  cellsrenderer: (): string => {
                    return this.myPlatform == "desktop"
                      ? "Remove"
                      : "<button>Remove</button>";
                  },
                  buttonclick: (row): void => {
                    this.deleteModel();
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

  myGridOnRowSelect(event: any): void {
    this.selectedRow = event.args.row.bounddata;
  }

  onFileChange(ev) {
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
          let newData = {};
          newData["imeino"] = jsonData["Sheet1"][i]["imeino"].toString();

          json.push(newData);
        }
        this.dataString = json;
        this.output = this.dataString.slice(0, 300).concat("...");
      };
      reader.readAsBinaryString(file);
    } else {
      this.commonService.showConfirm("please insert only excel file (.xlsx)");
    }
  }

  submitwithfile() {
    if (this.dataString.length == 0) {
      this.commonService.showConfirm(
        "Check your excell file,don't enter blank spaces"
      );
    } else {
      var excellKeys = Object.keys(this.dataString[0]);
      for (var i = 0; i < excellKeys.length; i++) {
        if (excellKeys[i] == "imeino") {
          console.log("present");
          this.excellKeyValid = true;
        }
      }

      if (this.name == true && this.excellKeyValid == true) {
        this.commonService.presentLoader();
        this.imeiIssues = [];
        this.willDownload = true;
        const url =
          serverUrl.web +
          "/esim/deletebulkimeino?dealername=" +
          localStorage.getItem("userName");
        this.ajaxService
          .ajaxPostWithBody(url, this.dataString)
          .subscribe((res) => {
            this.commonService.dismissLoader();
            this.commonService.showConfirm(res.message);
            this.fileclear();
          });
      }
    }
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
