import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Platform, ModalController } from "@ionic/angular";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";

@Component({
  selector: "app-requestdate-update",
  templateUrl: "./requestdate-update.component.html",
  styleUrls: ["./requestdate-update.component.scss"],
})
export class RequestdateUpdateComponent implements OnInit {
  requestForm: FormGroup;
  @Input() value: any;
  @Input() selected: any;
  myPlatform: any;
  maxDate: string;
  today = new Date();

  constructor(
    private platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private ajaxService: AjaxService,
    private commonService: CommonService
  ) {}

  cancelBtn() {
    this.modalController.dismiss();
  }

  createForm() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    this.requestForm = this.formBuilder.group({
      requestdate: [today, Validators.required],
    });
  }

  submitBtn() {
    if (this.selected == 6) {
      var data;
      data = {
        imei: this.value[0].imei,
        requestdate: this.requestForm.value.requestdate,
        createdby: localStorage.getItem("userName"),
      };
      this.commonService.presentLoader();
      const url = serverUrl.web + "/esim/saveEsimCARequestDate";
      this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
        this.commonService.dismissLoader();
        if (res.message == "Esim CA Requested Date Saved Successfully") {
          this.commonService.showConfirm(res.message);
          this.modalController.dismiss({
            data: "Successfully",
          });
        } else {
          this.commonService.showConfirm(res.message);
        }
      });
    } else {
      var data;
      data = {
        imei: this.value[0].imei,
        renewalno: this.selected,
        requestdate: this.requestForm.value.requestdate,
        createdby: localStorage.getItem("userName"),
      };
      this.commonService.presentLoader();
      const url = serverUrl.web + "/esim/saveEsimRenewalRequestDate";
      this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
        this.commonService.dismissLoader();
        if (res.message == "Esim Renewal Requested Date Saved Successfully") {
          this.commonService.showConfirm(res.message);
          this.modalController.dismiss({
            data: "Successfully",
          });
        } else {
          this.commonService.showConfirm(res.message);
        }
      });
    }
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
}
