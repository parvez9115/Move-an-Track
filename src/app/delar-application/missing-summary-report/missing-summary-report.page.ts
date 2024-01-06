import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Platform } from "@ionic/angular";
import { jqxGridComponent } from "jqwidgets-ng/jqxgrid";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { ExportExcelService } from "src/app/services/export-excel.service";
import { serverUrl } from "src/environments/environment";

@Component({
  selector: "app-missing-summary-report",
  templateUrl: "./missing-summary-report.page.html",
  styleUrls: ["./missing-summary-report.page.scss"],
})
export class MissingSummaryReportPage implements OnInit {
  missingform: FormGroup;
  button: boolean = false;

  constructor(
    private commonService: CommonService,
    private formBuilder: FormBuilder,
    private ajaxService: AjaxService,
    private ete: ExportExcelService,
    public platform: Platform
  ) {}

  createForm() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    var todaytime = now.getHours() + ":" + now.getMinutes();
    this.missingform = this.formBuilder.group({
      companyid: ["", Validators.required],
      plateno: ["", Validators.required],
      startdate: [today, Validators.required],
    });
  }

  clear() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    var todaytime = now.getHours() + ":" + now.getMinutes();
    this.missingform.patchValue({
      companyid: "",
      plateno: "",
      startdate: today,
    });
  }

  Submit() {
    this.button = true;
    var data;
    data = {
      companyid: this.missingform.value.companyid.toString(),
      plateNo: this.missingform.value.plateno.toString(),
      startdate: this.missingform.value.startdate.toString(),
    };

    const url = serverUrl.web + "/global/MissingSummaryReport";
    this.ajaxService.ajaxPostWithFile(url, data).subscribe((res) => {
      if (res.message == "Record Updated Successfully") {
        this.commonService.showConfirm(res.message);
        this.clear();
        this.button = false;
      } else {
        this.commonService.showConfirm(res.message);
        this.button = false;
      }
    });
  }

  ngOnInit() {
    this.createForm();
    this.clear();
  }
}
