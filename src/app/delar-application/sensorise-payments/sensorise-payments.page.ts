import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertController, Platform } from "@ionic/angular";
import { jqxGridComponent } from "jqwidgets-ng/jqxgrid";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { ExportExcelService } from "src/app/services/export-excel.service";
import { serverUrl } from "src/environments/environment";
import * as XLSX from "xlsx";

@Component({
  selector: "app-sensorise-payments",
  templateUrl: "./sensorise-payments.page.html",
  styleUrls: ["./sensorise-payments.page.scss"],
})
export class SensorisePaymentsPage implements OnInit {
  PaymentsForm: FormGroup;
  file;
  @ViewChild("myGrid", { static: false }) myGrid: any;
  renderer: (row: number, column: any, value: string) => string;
  tableData: any;
  source: { localdata: any };
  dataAdapter: any;
  columns: any;
  name: boolean = false;
  willDownload = false;
  dataString: any;
  output = "";
  button: boolean;
  show: boolean = false;
  imeiIssues = [];
  excellKeyValid: boolean = false;
  myPlatform: any;
  response: any;

  constructor(
    private commonService: CommonService,
    private formBuilder: FormBuilder,
    private ajaxService: AjaxService,
    private ete: ExportExcelService,
    public platform: Platform,
    private alertController: AlertController
  ) {}

  createForm() {
    this.PaymentsForm = this.formBuilder.group({
      srno: ["", Validators.required],
      fileupload: [this.file, Validators.required],
    });
  }

  clear() {
    this.PaymentsForm.patchValue({
      fileupload: "",
      srno: "",
    });
  }

  emptyfile() {
    this.PaymentsForm.patchValue({
      fileupload: "",
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
          initial[name] = XLSX.utils.sheet_to_json(sheet, {
            range: "A2:Z10000",
          });
          return initial;
        }, {});

        let json = [];
        for (let i = 0; i < jsonData["SRXXXXXX"].length; i++) {
          let newData = {};
          newData["Customer_ID"] = jsonData["SRXXXXXX"][i]["Customer ID"];
          newData["UTR_No"] = jsonData["SRXXXXXX"][i]["UTR No"];
          newData["PI"] = jsonData["SRXXXXXX"][i]["PI"];
          newData["IccID"] = jsonData["SRXXXXXX"][i]["IccID"];
          newData["Project_Name"] = jsonData["SRXXXXXX"][i]["Project_Name"];
          newData["PRODUCT_NAME"] = jsonData["SRXXXXXX"][i]["PRODUCT_NAME"];
          newData["CS_Primary_TSP"] = jsonData["SRXXXXXX"][i]["CS_Primary_TSP"];
          newData["CS_Fallback_TSP"] =
            jsonData["SRXXXXXX"][i]["CS_Fallback_TSP"];
          newData["BS_Primary_TSP"] = jsonData["SRXXXXXX"][i]["BS_Primary_TSP"];
          newData["BS_Fallback_TSP"] =
            jsonData["SRXXXXXX"][i]["BS_Fallback_TSP"];
          newData["Action"] = jsonData["SRXXXXXX"][i]["Action"];
          newData["Request_DATE"] =
            jsonData["SRXXXXXX"][i]["Request_DATE\r\n(DDMMYY)"];
          newData["Price"] = jsonData["SRXXXXXX"][i]["Price"].toString();
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

  SearchData() {
    if (this.dataString.length == 0) {
      this.commonService.showConfirm(
        "Check your excell file,don't enter blank spaces"
      );
    } else {
      var excellKeys = Object.keys(this.dataString[0]);
      for (var i = 0; i < excellKeys.length; i++) {
        if (
          // excellKeys[i] == "Customer_ID" ||
          // excellKeys[i] == "IccID" ||
          // excellKeys[i] == "Project_Name" ||
          // excellKeys[i] == "CS_Primary_TSP" ||
          // excellKeys[i] == "CS_Fallback_TSP" ||
          //  excellKeys[i] == "BS_Primary_TSP" ||
          // excellKeys[i] == "BS_Fallback_TSP" ||

          excellKeys[i] == "UTR_No" ||
          excellKeys[i] == "Price" ||
          excellKeys[i] == "PI" ||
          excellKeys[i] == "Request_DATE\r\n(DDMMYY)" ||
          excellKeys[i] == "Action" ||
          excellKeys[i] == "PRODUCT_NAME"
        ) {
          console.log("present");
          this.excellKeyValid = true;
        }
      }

      if (this.name == true && this.excellKeyValid == true) {
        this.commonService.presentLoader();
        this.button = true;
        this.imeiIssues = [];
        this.willDownload = true;
        const url =
          serverUrl.web +
          "/sensorise/saveSensoriseRSUPayment?srno=" +
          this.PaymentsForm.value.srno +
          "&createdby=" +
          localStorage.getItem("corpId");

        this.ajaxService
          .ajaxPostWithBody(url, this.dataString)
          .subscribe((res) => {
            if (res) {
              this.commonService.dismissLoader();
            }
            if (res.message == "Record Saved Successfully") {
              this.commonService.showConfirm(res.message);
              this.clear();
              this.getdatas();
            } else {
              this.commonService.showConfirm(res.message);
              this.emptyfile();
            }
          });
      }
    }
  }

  async deleteMethod() {
    const alert = await this.alertController.create({
      header: "Confirm",
      backdropDismiss: false,
      message: "Are you sure you want to Delete?",
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

  delete() {
    const url =
      serverUrl.web +
      "/sensorise/deleteSensoriseRSUPayment?srno=" +
      this.PaymentsForm.value.srno;
    this.ajaxService.ajaxDeleteWithString(url).subscribe((res) => {
      this.response = res;
      this.commonService.showConfirm(res.message);
      this.clear();
      this.getdatas();
    });
  }

  getdatas() {
    this.commonService.presentLoader();
    var url = serverUrl.web + "/sensorise/getSensoriseRSUPayment";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.tableData = res;
      this.commonService.dismissLoader();

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
          text: "VLTD No",
          datafield: "vltdsno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 135,
        },
        {
          text: "ICCID No",
          datafield: "iccidno1",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 144,
        },
        {
          text: "SIM 1",
          datafield: "sim1",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 105,
        },
        {
          text: "SIM 2",
          datafield: "sim2",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 105,
        },
        {
          text: "IMEI",
          datafield: "imei",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 105,
        },
        {
          text: "Dealer Name",
          datafield: "dealerid",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 110,
        },
        {
          text: "SR No",
          datafield: "srno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 110,
        },

        {
          text: "UTR No",
          datafield: "utrno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 140,
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
          text: "Request Date",
          datafield: "requestdate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 100,
        },
        {
          text: "Amount",
          datafield: "amount",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 60,
        },
        {
          text: "Action",
          datafield: "action",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 130,
        },
        {
          text: "Product",
          datafield: "product",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 350,
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
      title: "Sensorise Payments",
      data: forExcel,
      headers: Header,
    };
    this.ete.exportExcel(reportData);
  }

  ngAfterViewInit() {
    this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
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
    this.getdatas();
  }
}
