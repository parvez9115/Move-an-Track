import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {
  AlertController,
  IonContent,
  LoadingController,
  Platform,
} from "@ionic/angular";
import { jqxGridComponent } from "jqwidgets-ng/jqxgrid";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";
import { IonicSelectableComponent } from "ionic-selectable";
import * as XLSX from "xlsx";
import { ExportExcelService } from "src/app/services/export-excel.service";

@Component({
  selector: "app-esim-details",
  templateUrl: "./esim-details.page.html",
  styleUrls: ["./esim-details.page.scss"],
})
export class EsimDetailsPage implements OnInit {
  EsimdetailsForm: FormGroup;
  @ViewChild("myGrid", { static: false }) myGrid: any;
  columns: any;
  source: { localdata: any };
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  myPlatform: any;
  tableData: any;
  button: boolean;
  companyId = localStorage.getItem("userName");
  purchasedetails: any;
  name: boolean = false;
  willDownload = false;
  dataString: any;
  output = "";
  file;
  show: boolean = false;
  imeiIssues = [];
  excellKeyValid: boolean = false;
  today = new Date();
  maxDate: string;
  isLoading: boolean;
  invoice: any = [];
  arrow = false;
  checkboxChecked: boolean = false;

  constructor(
    public loadingController: LoadingController,
    private ajaxService: AjaxService,
    private router: Router,
    private alertController: AlertController,
    private commonService: CommonService,
    private formBuilder: FormBuilder,
    private platform: Platform,
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

  getinvoicelist() {
    var url = serverUrl.web + "/esim/getPurchaseNo";
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.invoice = res;
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
          newData["iccidno1"] = jsonData["Sheet1"][i]["iccidno1"].toString();
          newData["sim1"] = jsonData["Sheet1"][i]["sim1"].toString();
          newData["provider1"] = jsonData["Sheet1"][i]["provider1"].toString();
          newData["imsi1"] = jsonData["Sheet1"][i]["imsi1"].toString();
          newData["iccidno2"] = jsonData["Sheet1"][i]["iccidno2"].toString();
          newData["sim2"] = jsonData["Sheet1"][i]["sim2"].toString();
          newData["provider2"] = jsonData["Sheet1"][i]["provider2"].toString();
          newData["imsi2"] = jsonData["Sheet1"][i]["imsi2"].toString();
          if (jsonData["Sheet1"][i]["iccidno3"] == undefined) {
            newData["iccidno3"] = "";
          } else {
            newData["iccidno3"] = jsonData["Sheet1"][i]["iccidno3"].toString();
          }
          if (jsonData["Sheet1"][i]["sim3"] == undefined) {
            newData["sim3"] = "";
          } else {
            newData["sim3"] = jsonData["Sheet1"][i]["sim3"].toString();
          }
          if (jsonData["Sheet1"][i]["provider3"] == undefined) {
            newData["provider3"] = "";
          } else {
            newData["provider3"] =
              jsonData["Sheet1"][i]["provider3"].toString();
          }
          if (jsonData["Sheet1"][i]["imsi3"] == undefined) {
            newData["imsi3"] = "";
          } else {
            newData["imsi3"] = jsonData["Sheet1"][i]["imsi3"].toString();
          }

          newData["createdby"] =
            localStorage.getItem("userName").toString() + "";
          newData["createddate"] = null;
          newData["updatedby"] = null;
          newData["updateddate"] = null;
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
        "check your excell file,don't enter blank spaces"
      );
    } else {
      var excellKeys = Object.keys(this.dataString[0]);
      for (var i = 0; i < excellKeys.length; i++) {
        if (
          excellKeys[i] == "iccidno1" ||
          excellKeys[i] == "sim1" ||
          excellKeys[i] == "provider1" ||
          excellKeys[i] == "imsi1" ||
          excellKeys[i] == "iccidno2" ||
          excellKeys[i] == "sim2" ||
          excellKeys[i] == "provider2" ||
          excellKeys[i] == "imsi2" ||
          excellKeys[i] == "iccidno3" ||
          excellKeys[i] == "sim3" ||
          excellKeys[i] == "provider3" ||
          excellKeys[i] == "imsi3"
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
          "/esim/saveEsimPurchase?companyid=" +
          localStorage.getItem("corpId") +
          "&branchid=" +
          localStorage.getItem("corpId") +
          "&orderno=" +
          this.EsimdetailsForm.value.orderNo +
          "&orderquantity=" +
          this.EsimdetailsForm.value.orderqty;
        this.ajaxService
          .ajaxPostWithBody(url, this.dataString)
          .subscribe((res) => {
            if (res.message == "Purchase Saved Successfully") {
              this.commonService.showConfirm("Sim Detail Saved Successfully");
              this.commonService.dismissLoader();
              this.clear();
              this.getdatas();
              this.button = false;
            } else {
              this.commonService.showConfirm(res.message);
              this.commonService.dismissLoader();
              this.button = false;
            }
          });
      }
    }
  }
  clear() {
    this.EsimdetailsForm.patchValue({
      orderNo: "",
      orderqty: "",
      fileupload: "",
    });
    this.getinvoicelist();
  }

  downloadExcel() {
    var doc = document.createElement("a");
    doc.href = "/assets/sensorise/Esimpurchase.xlsx";
    doc.download = "sample.xlsx";
  }

  createForm() {
    this.EsimdetailsForm = this.formBuilder.group({
      orderNo: ["", Validators.required],
      orderqty: ["", Validators.required],
      fileupload: [this.file, Validators.required],
    });
  }

  onclick(ev) {
    this.checkboxChecked = ev.target.checked;
    this.updateDataSource();
  }

  updateDataSource() {
    if (this.checkboxChecked) {
      this.source.localdata = this.tableData.filter((item) => item.imei !== "");
    } else {
      this.source.localdata = this.tableData;
    }
    this.dataAdapter = new jqx.dataAdapter(this.source);
  }

  getdatas() {
    this.commonService.presentLoader();
    var url =
      serverUrl.web +
      "/esim/getEsimPurchaseAll?companyid=" +
      localStorage.getItem("corpId");
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      if (res.length > 0) {
        this.tableData = res;

        this.commonService.dismissLoader();
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
      this.updateDataSource();
      this.columns = [
        {
          text: "S.Provider",
          datafield: "serviceprovider",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 80,
          editable: true,
        },
        {
          text: "Invoice No",
          datafield: "orderno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 135,
        },
        {
          text: "IMEI",
          datafield: "imei",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 120,
        },
        {
          text: "ICCID No 1",
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
          text: "Provider 1",
          datafield: "provider1",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 80,
        },
        {
          text: "IMSI 1",
          datafield: "imsi1",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 120,
        },
        {
          text: "ICCID No 2",
          datafield: "iccidno2",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 144,
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
          text: "Provider 2",
          datafield: "provider2",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 80,
        },
        {
          text: "IMSI 2",
          datafield: "imsi2",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 120,
        },
        {
          text: "Created by",
          datafield: "createdby",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 85,
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
      title: "Esim Details",
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
    this.clear();
    this.getdatas();
  }
}
