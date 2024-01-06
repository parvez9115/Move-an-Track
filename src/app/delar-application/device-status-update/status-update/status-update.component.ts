import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AlertController, ModalController, Platform } from "@ionic/angular";
import { AjaxService } from "src/app/services/ajax.service";
import { serverUrl } from "src/environments/environment";
import { CommonService } from "src/app/services/common.service";

@Component({
  selector: "app-status-update",
  templateUrl: "./status-update.component.html",
  styleUrls: ["./status-update.component.scss"],
})
export class StatusUpdateComponent implements OnInit {
  @Input() statusupdate: any;
  @Input() nexttab: any;
  myPlatform: string;
  minDate: string;
  tabData: string;
  show: boolean = true;

  constructor(
    public platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private ajaxService: AjaxService,
    private alertController: AlertController,
    private commonService: CommonService
  ) {}
  maxDate;
  today = new Date();
  AddCaStatus: FormGroup;

  cancelBtn() {
    this.modalController.dismiss();
  }
  createForm() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    var endDate = now.getFullYear() + 1 + "-" + month + "-" + day;
    this.AddCaStatus = this.formBuilder.group({
      cardactivationdate: [today, Validators.required],
      cardenddate: [endDate],
      cardstatus: ["Active", Validators.required],
      comment: ["", Validators.required],
    });
  }

  Submit() {
    if (this.nexttab == 6) {
      var data = {
        iccidno: this.statusupdate[0].iccidno1,
        cardactivationdate: this.AddCaStatus.value.cardactivationdate,
        cardenddate: "",
        cardstatus: this.AddCaStatus.value.cardstatus,
        comment: this.AddCaStatus.value.comment,
        createdby: this.statusupdate[0].createdby,
      };
      const url = serverUrl.web + "/esim/saveEsimCAStatus";
      this.ajaxService
        .ajaxPostWithBody(url, JSON.stringify(data))
        .subscribe((res) => {
          if (res.message == "Esim CA Status Saved Successfully") {
            this.commonService.showConfirm(res.message);

            this.modalController.dismiss({ data: "saved success" });
          } else {
            this.commonService.showConfirm(res.message);
          }
        });
    } else {
      let data = {
        renewalno: this.statusupdate[0].renewalno.toString(),
        iccidno: this.statusupdate[0].iccidno1,
        cardactivationdate: this.AddCaStatus.value.cardactivationdate,
        cardenddate: "",
        cardstatus: this.AddCaStatus.value.cardstatus,
        comment: this.AddCaStatus.value.comment,
        createdby: this.statusupdate[0].createdby,
      };
      const url = serverUrl.web + "/esim/saveEsimRenewalStatus";
      this.ajaxService
        .ajaxPostWithBody(url, JSON.stringify(data))
        .subscribe((res) => {
          if (res.message == "Esim Renewal Status Saved Successfully") {
            this.commonService.showConfirm(res.message);

            this.modalController.dismiss({ data: "saved success" });
          } else {
            this.commonService.showConfirm(res.message);
          }
        });
    }
  }
  setValue() {
    if (this.statusupdate[0].cardactivationdate != "") {
      this.show = true;
      this.AddCaStatus.patchValue({
        cardactivationdate: this.statusupdate[0].cardactivationdate,
      });
    } else {
      this.show = false;
      cardactivationdate: this.today;
    }
  }

  ngOnInit() {
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
    this.createForm();
    this.maxDate = this.today.getFullYear() + "-";
    this.maxDate +=
      (this.today.getMonth() + 1 < 10
        ? "0" + (this.today.getMonth() + 1).toString()
        : (this.today.getMonth() + 1).toString()) + "-";
    this.maxDate +=
      this.today.getDate() < 10
        ? "0" + this.today.getDate().toString()
        : this.today.getDate().toString();

    const today = new Date();
    const sevenDaysAgo = new Date(today);
    this.tabData = localStorage.getItem("tab");
    if (this.tabData == "1") {
      console.log(this.tabData);
      sevenDaysAgo.setDate(today.getDate() - 7);
    } else {
      console.log(this.tabData);
      sevenDaysAgo.setDate(today.getDate() - 30);
    }

    this.minDate = sevenDaysAgo.getFullYear() + "-";
    this.minDate +=
      (sevenDaysAgo.getMonth() + 1 < 10
        ? "0" + (sevenDaysAgo.getMonth() + 1).toString()
        : (sevenDaysAgo.getMonth() + 1).toString()) + "-";
    this.minDate +=
      sevenDaysAgo.getDate() < 10
        ? "0" + sevenDaysAgo.getDate().toString()
        : sevenDaysAgo.getDate().toString();

    if (Object.keys(this.statusupdate[0]).length != 0) {
      console.log(
        this.statusupdate[0].cardactivationdate,
        this.statusupdate[0].cardenddate,
        this.statusupdate[0].cardstatus
      );
      this.AddCaStatus.patchValue({
        cardenddate: this.statusupdate[0].cardenddate,
        comment: this.statusupdate[0].purcomment,
      });
      this.setValue();
    }
  }
}
