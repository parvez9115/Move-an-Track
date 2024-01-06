import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalController, Platform, AlertController } from "@ionic/angular";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";
@Component({
  selector: "app-add-dealer-details",
  templateUrl: "./add-dealer-details.component.html",
  styleUrls: ["./add-dealer-details.component.scss"],
})
export class AddDealerDetailsComponent implements OnInit {
  addForm: FormGroup;
  @Input() param: any;
  @Input() value: any;
  @Input() value2: Object;
  hideSerialNo: boolean = false;
  dealerlist: any;
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

  createForm() {
    this.addForm = this.formBuilder.group({
      dealername: ["", Validators.required],
      grpid: ["", Validators.required],
      urls1: [""],
      urls2: [""],
      urls3: [""],
      urls4: [""],
      airtel1: [""],
      airtel2: [""],
      airtel3: [""],
      bsnl1: [""],
      bsnl2: [""],
      bsnl3: [""],
    });
  }

  dealer() {
    const url = serverUrl.web + "/global/getesimdealerlist";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.dealerlist = res;
    });
  }

  async add() {
    var data;
    data = {
      dealer: this.addForm.value.dealername,
      "Group ID": this.addForm.value.grpid.toString(),
      "IP’s/Domain/URL’s1": this.addForm.value.urls1.toString(),
      "IP’s/Domain/URL’s2": this.addForm.value.urls2.toString(),
      "IP’s/Domain/URL’s3": this.addForm.value.urls3.toString(),
      "IP’s/Domain/URL’s4": this.addForm.value.urls4.toString(),
      "Admin MSSIDN 1: AIRTEL": this.addForm.value.airtel1.toString(),
      "Admin MSSIDN 2: AIRTEL": this.addForm.value.airtel2.toString(),
      "Admin MSSIDN 3: AIRTEL": this.addForm.value.airtel3.toString(),
      "Admin MSSIDN 1: BSNL": this.addForm.value.bsnl1.toString(),
      "Admin MSSIDN 2: BSNL": this.addForm.value.bsnl2.toString(),
      "Admin MSSIDN 3: BSNL": this.addForm.value.bsnl3.toString(),
      serviceprovider: this.param.toString(),
      id: "",
    };
    const url =
      serverUrl.web +
      "/global/saveWhiteListingDetails?createdby=" +
      localStorage.getItem("userName");
    this.ajaxService.ajaxPostWithString(url, data).subscribe((res) => {
      res = JSON.parse(res);
      if (res.message == "White Listing Detail Added Successfully") {
        this.commonService.showConfirm(res.message);
        this.modalController.dismiss({
          data: "White Listing Detail Added Successfully",
        });
      } else {
        this.commonService.showConfirm(res.message);
      }
    });
  }

  async edit() {
    var data;
    data = {
      dealer: this.addForm.value.dealername,
      "Group ID": this.addForm.value.grpid.toString(),
      "IP’s/Domain/URL’s1": this.addForm.value.urls1.toString(),
      "IP’s/Domain/URL’s2": this.addForm.value.urls2.toString(),
      "IP’s/Domain/URL’s3": this.addForm.value.urls3.toString(),
      "IP’s/Domain/URL’s4": this.addForm.value.urls4.toString(),
      "Admin MSSIDN 1: AIRTEL": this.addForm.value.airtel1.toString(),
      "Admin MSSIDN 2: AIRTEL": this.addForm.value.airtel2.toString(),
      "Admin MSSIDN 3: AIRTEL": this.addForm.value.airtel3.toString(),
      "Admin MSSIDN 1: BSNL": this.addForm.value.bsnl1.toString(),
      "Admin MSSIDN 2: BSNL": this.addForm.value.bsnl2.toString(),
      "Admin MSSIDN 3: BSNL": this.addForm.value.bsnl3.toString(),
      serviceprovider: this.param,
      id: this.value2["id"],
    };
    const url =
      serverUrl.web +
      "/global/saveWhiteListingDetails?createdby=" +
      localStorage.getItem("userName");
    this.ajaxService.ajaxPostWithString(url, data).subscribe((res) => {
      res = JSON.parse(res);
      if (res.message == "White Listing Detail Added Successfully") {
        this.commonService.showConfirm(res.message);
        this.modalController.dismiss({
          data: "White Listing Detail Added Successfully",
        });
      } else {
        this.commonService.showConfirm(res.message);
      }
    });
  }
  setValue() {
    this.hideSerialNo = true;
    this.addForm.patchValue({
      dealername: this.value2["dealer"],
      grpid: this.value2["Group ID"],
      urls1: this.value2["IP’s/Domain/URL’s1"],
      urls2: this.value2["IP’s/Domain/URL’s2"],
      urls3: this.value2["IP’s/Domain/URL’s3"],
      urls4: this.value2["IP’s/Domain/URL’s4"],
      airtel1: this.value2["Admin MSSIDN 1: AIRTEL"],
      airtel2: this.value2["Admin MSSIDN 2: AIRTEL"],
      airtel3: this.value2["Admin MSSIDN 3: AIRTEL"],
      bsnl1: this.value2["Admin MSSIDN 1: BSNL"],
      bsnl2: this.value2["Admin MSSIDN 2: BSNL"],
      bsnl3: this.value2["Admin MSSIDN 3: BSNL"],
      serviceprovider: this.param,
      id: "",
    });
    console.log(this.value2["Group ID"]);
  }

  ngOnInit() {
    this.createForm();
    this.dealer();
    if (Object.keys(this.value2).length != 0) {
      console.log(this.value2);
      this.setValue();
    }
  }
}
