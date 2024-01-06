import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalController, Platform, AlertController } from "@ionic/angular";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";

@Component({
  selector: "app-add-popup",
  templateUrl: "./add-popup.component.html",
  styleUrls: ["./add-popup.component.scss"],
})
export class AddPopupComponent implements OnInit {
  @Input() value: any;
  @Input() param: any;
  @Input() value2: any;
  addForm: FormGroup;
  myPlatform;
  hideSerialNo: boolean = false;

  constructor(
    public platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private ajaxService: AjaxService,
    private commonService: CommonService,
    private alertController: AlertController
  ) { }

  cancelBtn() {
    this.modalController.dismiss();
  }

  async edit() {
    var data;
    data = {
      utrdate: this.addForm.value.utrdate,
      utrno: this.addForm.value.utrno,
      id: this.value2.id.toString(),
      totalamount: this.addForm.value.recharged.toString(),
      utrpurpose: this.value2.utrpurpose,
      utrremarks: this.addForm.value.remarks,
      createdby: localStorage.getItem("userName"),
    };
    const url = serverUrl.web + "/sensorise/saveSensoriseAdvancePaymentDetails";
    this.ajaxService.ajaxPostWithString(url, data).subscribe((res) => {
      res = JSON.parse(res)
      if (res.message == "Updated Successfully") {
        this.commonService.showConfirm(res.message);
        this.modalController.dismiss({
          data: "Updated Successfully",
        });
      } else {
        this.commonService.showConfirm(res.message);
      }
    });
  }

  async add() {
    var data;
    data = {
      utrdate: this.addForm.value.utrdate,
      utrno: this.addForm.value.utrno,
      id: "",
      totalamount: this.addForm.value.recharged.toString(),
      utrpurpose: this.param,
      utrremarks: this.addForm.value.remarks,
      createdby: localStorage.getItem("userName"),
    };
    const url = serverUrl.web + "/sensorise/saveSensoriseAdvancePaymentDetails";
    this.ajaxService.ajaxPostWithString(url, data).subscribe((res) => {
      res = JSON.parse(res)
      if (res.message == "Saved Successfully") {
        this.commonService.showConfirm(res.message);
        this.modalController.dismiss({
          data: "Saved Successfully",
        });
      } else {
        this.commonService.showConfirm(res.message);
      }
    });
  }

  setValue() {
    this.hideSerialNo = true;
    var slicedDate = this.value2.utrdate.slice(0, 10);
    this.addForm.patchValue({
      utrdate: slicedDate,
      utrno: this.value2.utrno,
      recharged: this.value2.totalamount,
      remarks: this.value2.utrremarks,
    });
  }

  ngOnInit() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    var todaytime = now.getHours() + ":" + now.getMinutes();
    this.addForm = this.formBuilder.group({
      utrdate: [today, Validators.required],
      utrno: ["", Validators.required],
      recharged: ["", Validators.required],
      remarks: ["", Validators.required],
    });
    if (Object.keys(this.value2).length != 0) {
      console.log(this.value2);
      this.setValue();
    } else {
      // this.clear();
      this.value = {};
    }
  }
}
