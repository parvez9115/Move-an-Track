import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalController, Platform, AlertController } from "@ionic/angular";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";

@Component({
  selector: "app-add-device",
  templateUrl: "./add-device.component.html",
  styleUrls: ["./add-device.component.scss"],
})
export class AddDeviceComponent implements OnInit {
  addDeviceForm: FormGroup;
  myPlatform;
  constructor(
    public platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private ajaxService: AjaxService,
    private commonService: CommonService,
    private alertController: AlertController
  ) {}

  cancelBtn() {
    this.modalController.dismiss();
  }

  async addDevice() {
    const alert = await this.alertController.create({
      header: "Add Device",
      backdropDismiss: false,
      message: "Are you sure you want to add device?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: (data) => {},
        },
        {
          text: "Ok",
          handler: (data) => {
            this.submitBtn();
          },
        },
      ],
    });
    await alert.present();
  }
  submitBtn() {
    this.commonService.presentLoader();
    let url = serverUrl.web + "/esim/addnewdevice";
    let body = {
      boxno: this.addDeviceForm.value.boxno,
      iccidno: this.addDeviceForm.value.iccidno,
      imeino: this.addDeviceForm.value.imeino,
      vltdsno: this.addDeviceForm.value.vltdsno,
    };
    this.ajaxService.ajaxPostWithBody(url, body).subscribe((res) => {
      if (res.message == "Device Added Successfully") {
        this.modalController.dismiss(res.message);
        this.commonService.dismissLoader();
      } else {
        this.commonService.showConfirm(res.message);
        this.commonService.dismissLoader();
      }
    });
  }

  ngOnInit() {
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }

    this.addDeviceForm = this.formBuilder.group({
      boxno: ["", Validators.required],
      iccidno: ["", Validators.required],
      imeino: ["", Validators.required],
      vltdsno: ["", Validators.required],
    });
  }
}
