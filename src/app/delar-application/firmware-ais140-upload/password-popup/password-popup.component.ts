import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { AjaxService } from 'src/app/services/ajax.service';
import { CommonService } from 'src/app/services/common.service';
import { serverUrl } from 'src/environments/environment';

@Component({
  selector: 'app-password-popup',
  templateUrl: './password-popup.component.html',
  styleUrls: ['./password-popup.component.scss'],
})
export class PasswordPopupComponent implements OnInit {

  passwordform: FormGroup;

 constructor(
    public platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private alertController: AlertController,
    private commonService: CommonService,
    private ajaxService: AjaxService,
 ) { }
  
    cancelBtn() {
    this.modalController.dismiss();
  }

    createForm() {
    this.passwordform = this.formBuilder.group({
      password: ["", Validators.required],
    });
  }
  
   clear() {
     this.passwordform.patchValue({
      password: "",
    })
   }
  
  submit() {
     const url =
      serverUrl.web +
      "/global/getFirmwareUploadpassword?password="+this.passwordform.value.password
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      if (res.message == "Password Correct..") {
         this.modalController.dismiss({
          data: "Password Correct..",
        });
      } else {
        this.commonService.showConfirm(res.message);
        this.clear();
      }
    });
  }
  
  ngOnInit() {
    this.createForm()
  }

}
