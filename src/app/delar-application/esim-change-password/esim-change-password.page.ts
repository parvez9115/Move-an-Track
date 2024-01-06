import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertController, ModalController, Platform } from "@ionic/angular";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";

@Component({
  selector: "app-esim-change-password",
  templateUrl: "./esim-change-password.page.html",
  styleUrls: ["./esim-change-password.page.scss"],
})
export class EsimChangePasswordPage implements OnInit {
  changePassword: FormGroup;
  myPlatform: any;
  companyId = localStorage.getItem("userName");

  constructor(
    public platform: Platform,
    private formBuilder: FormBuilder,
    public ajaxService: AjaxService,
    private modalController: ModalController,
    private commonService: CommonService,
    private alertController: AlertController,
    private route: Router
  ) {}

  async showConfirm(msg) {
    const confirm = await this.alertController.create({
      header: "Message",
      message: msg,
      buttons: [
        {
          text: "Ok",
          handler: (data) => {
            this.route.navigateByUrl("login");
          },
        },
      ],
    });
    await confirm.present();
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmedValidator
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  get confirmpassword() {
    return this.changePassword.get("confirmpassword");
  }

  createForm() {
    this.changePassword = this.formBuilder.group(
      {
        username: ["", Validators.required],
        oldpassword: ["", Validators.required],
        newpassword: ["", Validators.required],
        confirmpassword: ["", Validators.required],
      },
      {
        validator: this.ConfirmedValidator("newpassword", "confirmpassword"),
      }
    );
  }

  SubmitData() {
    const url =
      serverUrl.web +
      "/esim/changepassword?UserName=" +
      this.changePassword.value.username +
      "&OldPassword=" +
      this.changePassword.value.oldpassword +
      "&NewPassword=" +
      this.changePassword.value.newpassword;
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      if (res.message == "Password Change Successfully") {
        this.commonService.showConfirm(res.message);
        this.clear();
      } else {
        this.commonService.showConfirm(res.message);
      }
    });
  }

  clear() {
    this.changePassword.patchValue({
      username: "",
      oldpassword: "",
      newpassword: "",
      confirmpassword: "",
    });
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
  }
}
