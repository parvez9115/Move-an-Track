import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertController, ModalController, Platform } from "@ionic/angular";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";

@Component({
  selector: "app-bsnl-bulk",
  templateUrl: "./bsnl-bulk.component.html",
  styleUrls: ["./bsnl-bulk.component.scss"],
})
export class BsnlBulkComponent implements OnInit {
  @Input() value: any;
  requestForm: FormGroup;
  valid = ["1 Year", "2 Year", "3 Year"];
  show: boolean;
  myPlatform: string;
  button: boolean = false;
  constructor(
    public platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private ajaxService: AjaxService,
    private commonService: CommonService
  ) {}

  cancelBtn() {
    this.modalController.dismiss();
  }

  createForm() {
    this.requestForm = this.formBuilder.group({
      validity: ["", Validators.required],
    });
  }

  submitBtn() {
    this.button = true;
    var data = [];
    this.value.map((d) => {
      data.push({
        ...d,
        validityperiod: this.requestForm.value.validity,
      });
    });
    const url = serverUrl.web + "/esim/saveBulkBSNLCertificatedetails";
    this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
      if (res.message == "Certificate Created Successfully") {
        this.modalController.dismiss({
          data: "Certificate Created Successfully",
        });
        this.button = false;
      } else {
        this.commonService.showConfirm(res.message);
        this.modalController.dismiss({
          data: res.message,
        });
        this.button = false;
      }
    });
  }

  ngOnInit() {
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
    this.createForm();
  }
}
