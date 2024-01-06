import { Component, OnInit, ViewChild } from "@angular/core";
import { AlertController, ModalController, Platform } from "@ionic/angular";
import { jqxGridComponent } from "jqwidgets-ng/jqxgrid";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";
import { AddSensoriseComponent } from "./add-sensorise/add-sensorise.component";
import * as XLSX from "xlsx";
import { ExportExcelService } from "src/app/services/export-excel.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DetailsComponent } from "./details/details.component";

@Component({
  selector: "app-senorise-rsu",
  templateUrl: "./senorise-rsu.page.html",
  styleUrls: ["./senorise-rsu.page.scss"],
})
export class SenoriseRSUPage implements OnInit {
  rsuform: FormGroup;
  @ViewChild("myGrid", { static: false }) myGrid: jqxGridComponent;
  columns: any;
  source: { localdata: any };
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  myPlatform: any;
  isDeleteShow: any = true;
  selectedRow: any;
  tableData: any;
  name: boolean = false;
  willDownload = false;
  dataString: any;
  output = "";
  file;
  excellKeyValid: boolean = false;
  button: boolean;
  show: boolean = false;
  imeiIssues = [];
  Download: any;
  pdfdatas: any[];
  page = [];
  head = [
    "VLTD No",
    "Iccid No",
    "SIM 1",
    "SIM 2",
    "IMEI",
    "Dealer",
    "SR No",
    "SR Date",
    "SR Status",
  ];

  constructor(
    public platform: Platform,
    private modalController: ModalController,
    private alertController: AlertController,
    private commonService: CommonService,
    private ajaxService: AjaxService,
    private ete: ExportExcelService,
    private formBuilder: FormBuilder
  ) {}

  createForm() {
    this.rsuform = this.formBuilder.group({
      fileupload: [this.file, Validators.required],
    });
  }

  clear() {
    this.rsuform.patchValue({
      fileupload: "",
    });
  }

  refresh() {
    this.commonService.presentLoader();
    var url = serverUrl.web + "/sensorise/getSensoriseRSURefresh";
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.commonService.dismissLoader();
      if (res.Message == "SR Status Updated Successfully") {
        this.commonService.showConfirm(res.Message);
      }
    });
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
          newData["iccid"] = jsonData["Sheet1"][i]["iccid"].toString();

          json.push(newData);
        }
        this.dataString = json;
        this.output = this.dataString.slice(0, 300).concat("...");
      };
      reader.readAsBinaryString(file);
    } else {
      this.commonService.showConfirm("Please insert only excel file (.xlsx)");
      this.clear();
    }
  }

  Submit() {
    if (this.dataString.length == 0) {
      this.commonService.showConfirm(
        "Check your excell file,don't enter blank spaces"
      );
    } else {
      var excellKeys = Object.keys(this.dataString[0]);
      for (var i = 0; i < excellKeys.length; i++) {
        if (excellKeys[i] == "iccid") {
          console.log("present");
          this.excellKeyValid = true;
        }
      }

      if (this.name == true && this.excellKeyValid == true) {
        this.button = true;
        this.imeiIssues = [];
        this.willDownload = true;
        this.commonService.presentLoader();
        const url =
          serverUrl.web +
          "/sensorise/saveSensoriseRSU?createdby=" +
          localStorage.getItem("corpId");
        this.ajaxService
          .ajaxPostWithBody(url, this.dataString)
          .subscribe((res) => {
            this.commonService.dismissLoader();
            if (res.Message == "Renewal Saved Successfully") {
              this.commonService.showConfirm(res.Message);
              this.clear();
              this.getDatas();
            } else {
              this.commonService.showConfirm(res.Message);
            }
          });
      }
    }
  }

  getDatas() {
    this.commonService.presentLoader();
    var url = serverUrl.web + "/sensorise/getSensoriseRSUSummary";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.tableData = res;
      this.commonService.dismissLoader();
      this.page = ["100", "200", "500", "1000"];
      this.renderer = (row: number, column: any, value: string) => {
        if (value == "" || null || undefined || value == ",") {
          return "---";
        } else {
          return (
            '<span style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
            value +
            "</span>"
          );
        }
      };

      this.source = { localdata: this.tableData };
      this.dataAdapter = new jqx.dataAdapter(this.source);
      this.columns = [
        {
          text: "RSU Number",
          datafield: "rsuid",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 200,
        },

        {
          text: "RSU Date",
          datafield: "rsudate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 200,
        },
        {
          text: "No of Units",
          datafield: "noofunits",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 200,
        },
        {
          text: "Created by",
          datafield: "createdby",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 200,
        },
        {
          text: "",
          datafield: "detail",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 110,
          cellsrenderer: (): string => {
            return this.myPlatform == "desktop"
              ? "View Details"
              : "<button>Details</button>";
          },
          buttonclick: (row): void => {
            this.detailspop(row);
          },
        },
        {
          text: "",
          datafield: "Download",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 110,
          cellsrenderer: (): string => {
            return "Download";
          },
          buttonclick: (row): void => {
            this.download();
          },
        },
      ];
    });
  }

  async detailspop(row) {
    const modal = await this.modalController.create({
      component: DetailsComponent,
      cssClass: "rsufrom",
      componentProps: {
        value: this.selectedRow.rsuid,
      },
    });
    modal.onDidDismiss().then(() => {});
    return await modal.present();
  }

  download() {
    var url =
      serverUrl.web +
      "/sensorise/getSensoriseRSU?rsuid=" +
      this.selectedRow.rsuid;
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.Download = res;
      this.pdfdatas = [];
      for (var i = 0; i < this.Download.length; i++) {
        this.pdfdatas.push([
          this.Download[i].vltd,
          this.Download[i].iccidno1,
          this.Download[i].sim1,
          this.Download[i].sim2,
          this.Download[i].imei,
          this.Download[i].dealerid,
          this.Download[i].srno,
          this.Download[i].srdate,
          this.Download[i].srstatus,
        ]);
      }
      let reportData = {
        data: this.pdfdatas,
        headers: this.head,
      };
      this.ete.generateExcel(reportData);
    });
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
      title: "Sensorise RSU",
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

  ionViewWillEnter() {
    this.clear();
    this.getDatas();
  }
}
