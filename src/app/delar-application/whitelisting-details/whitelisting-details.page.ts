import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";
import { AlertController, ModalController, Platform } from "@ionic/angular";
import * as XLSX from "xlsx";
import { ExportExcelService } from "src/app/services/export-excel.service";
import { jqxGridComponent } from "jqwidgets-ng/jqxgrid";

@Component({
  selector: "app-whitelisting-details",
  templateUrl: "./whitelisting-details.page.html",
  styleUrls: ["./whitelisting-details.page.scss"],
})
export class WhitelistingDetailsPage implements OnInit {
  @ViewChild("myGrid", { static: false }) myGrid: jqxGridComponent;
  columns: any;
  source: { localdata: any };
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  myPlatform: any;
  selectedRow: any;
  tableData: any;
  whitelistform: FormGroup;
  file: any;
  name: boolean = false;
  willDownload = false;
  imeiIssues = [];
  excellKeyValid: boolean = false;
  dataString: any;
  output = "";
  button: boolean;
  show: boolean = true;
  dealerlist: any;

  constructor(
    private platform: Platform,
    private formBuilder: FormBuilder,
    public ajaxService: AjaxService,
    private commonService: CommonService,
    private ete: ExportExcelService
  ) {}

  createForm() {
    this.whitelistform = this.formBuilder.group({
      fileupload: [this.file, Validators.required],
      dealername: ["", Validators.required],
    });
  }

  clear() {
    this.whitelistform.patchValue({
      fileupload: "",
      dealername: "",
    });
  }
  dealer() {
    const url = serverUrl.web + "/global/getesimdealerlist";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.dealerlist = res;
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
    }
  }

  submit() {
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
        this.commonService.presentLoader();
        this.button = true;
        this.imeiIssues = [];
        this.willDownload = true;
        const url =
          serverUrl.web +
          "/global/getWhitelistingExcel?dealer=" +
          this.whitelistform.value.dealername;
        this.ajaxService
          .ajaxPostWithBody(url, this.dataString)
          .subscribe((res) => {
            this.commonService.dismissLoader();
            if (Object.keys(res).length == 0) {
              this.commonService.showConfirm("Invalid ICCID No");
              this.clear();
              this.button = false;
            } else {
              let reportData = {
                title: "WhitelistingDetails",
                data: res.data,
                headers: res.header,
              };
              this.ete.exportExcel(reportData);
              this.button = false;
              this.clear();
            }
          });
      }
    }
  }

  getdatas() {
    this.show = false;
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

    this.source = { localdata: this.tableData.data };
    this.dataAdapter = new jqx.dataAdapter(this.source);
    this.columns = [
      {
        text: "VLTD No",
        datafield: "S.NO",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 160,
      },
      {
        text: "ICCID NO",
        datafield: "ICCID_NO",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 160,
      },
    ];
  }

  myGridOnRowclick(event: any): void {
    this.selectedRow = event.args.row.bounddata;
  }

  ngOnInit() {
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
    this.createForm();
    this.dealer();
  }
}
