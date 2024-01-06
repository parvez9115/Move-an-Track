import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AlertController, ModalController, Platform } from "@ionic/angular";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { ExportExcelService } from "src/app/services/export-excel.service";
import { serverUrl } from "src/environments/environment";
import * as XLSX from "xlsx";

@Component({
  selector: "app-sim-change-provider",
  templateUrl: "./sim-change-provider.page.html",
  styleUrls: ["./sim-change-provider.page.scss"],
})
export class SimChangeProviderPage implements OnInit {
  simchangeForm: FormGroup;
  myPlatform: any;
  name: boolean = false;
  willDownload = false;
  dataString: any;
  output = "";
  file;
  excellKeyValid: boolean = false;
  imeiIssues: any[];
  companyId = localStorage.getItem("userName");

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
    this.simchangeForm = this.formBuilder.group({
      fileupload: [""],
    });
  }

  clear() {
    this.simchangeForm.patchValue({
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
          initial[name] = XLSX.utils.sheet_to_json(sheet);
          return initial;
        }, {});

        let json = [];
        for (let i = 0; i < jsonData["Sheet1"].length; i++) {
          let newData = {};
          newData["iccidno1"] = jsonData["Sheet1"][i]["iccidno1"].toString();
          newData["iccidno2"] = jsonData["Sheet1"][i]["iccidno2"].toString();
          newData["sim2"] = jsonData["Sheet1"][i]["sim2"].toString();
          newData["provider2"] = jsonData["Sheet1"][i]["provider2"].toString();
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

  Submit() {
    if (this.dataString.length == 0) {
      this.commonService.showConfirm(
        "Check your excell file,don't enter blank spaces"
      );
    } else {
      var excellKeys = Object.keys(this.dataString[0]);
      for (var i = 0; i < excellKeys.length; i++) {
        if (
          excellKeys[i] == "iccidno1" ||
          excellKeys[i] == "iccidno2" ||
          excellKeys[i] == "sim2" ||
          excellKeys[i] == "provider2"
        ) {
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
          "/esim/SimProviderChange?createdby=" +
          localStorage.getItem("userName");
        this.ajaxService
          .ajaxPostWithBody(url, this.dataString)
          .subscribe((res) => {
            this.commonService.dismissLoader();
            if (res.message == "Sim Changed Successfully") {
              this.commonService.showConfirm(res.message);
              this.clear();
            } else {
              this.commonService.showConfirm(res.message);
            }
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
}
