import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertController, ModalController, Platform } from "@ionic/angular";
import { jqxGridComponent } from "jqwidgets-ng/jqxgrid";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { ExportExcelService } from "src/app/services/export-excel.service";
import { serverUrl } from "src/environments/environment";

@Component({
  selector: "app-sensorise-rsu-report",
  templateUrl: "./sensorise-rsu-report.page.html",
  styleUrls: ["./sensorise-rsu-report.page.scss"],
})
export class SensoriseRsuReportPage implements OnInit {
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
  show: boolean = false;
  maxDate;
  today = new Date();
  page = [];

  constructor(
    public platform: Platform,
    private modalController: ModalController,
    private alertController: AlertController,
    private commonService: CommonService,
    private ajaxService: AjaxService,
    private formBuilder: FormBuilder,
    private ete: ExportExcelService
  ) {}

  createForm() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    var todaytime = now.getHours() + ":" + now.getMinutes();
    this.rsuform = this.formBuilder.group({
      rsudate: [today, Validators.required],
    });
  }

  clear() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    var todaytime = now.getHours() + ":" + now.getMinutes();
    this.rsuform.patchValue({
      rsudate: today,
    });
    this.show = false;
  }

  Submit() {
    this.show = false;
    var url =
      serverUrl.web +
      "/sensorise/getSensoriseRSUReport?rsudate=" +
      this.rsuform.value.rsudate;
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.tableData = res;
      this.show = true;
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
          text: "VLTD No",
          datafield: "vltd",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 130,
        },
        {
          text: "ICCID NO",
          datafield: "iccidno1",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 150,
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
          text: "IMEI No",
          datafield: "imei",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 150,
        },
        {
          text: "Dealer",
          datafield: "dealerid",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 75,
        },
        {
          text: "SR NO",
          datafield: "srno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 120,
        },
        {
          text: "SR Date",
          datafield: "srdate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 130,
        },
        {
          text: "SR Status",
          datafield: "srstatus",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 90,
        },
      ];
    });
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
      title: "Sensorise RSU Report",
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
    this.maxDate = this.today.getFullYear() + "-";
    this.maxDate +=
      (this.today.getMonth() + 1 < 10
        ? "0" + (this.today.getMonth() + 1).toString()
        : (this.today.getMonth() + 1).toString()) + "-";
    this.maxDate +=
      this.today.getDate() < 10
        ? "0" + this.today.getDate().toString()
        : this.today.getDate().toString();
    this.createForm();
  }

  ionViewWillEnter() {
    this.rsuform.reset();
    this.clear();
  }
}
