import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AjaxService } from "../services/ajax.service";
import { CommonService } from "../services/common.service";
@Component({
  selector: "app-live-track",
  templateUrl: "./live-track.page.html",
  styleUrls: ["./live-track.page.scss"],
})
export class liveTrackPage implements OnInit {
  LiveForm: FormGroup;

  Data: any;

  constructor(
    private formBuilder: FormBuilder,
    private ajaxService: AjaxService,
    private router: Router,
    public commonService: CommonService
  ) {}

  ngOnInit() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    this.LiveForm = this.formBuilder.group({
      tripId: ["", Validators.required],
      plateno: ["", Validators.required],
      tripstartdate: [today, Validators.required],
    });
  }

  onSubmit() {
    let url = "https://mvt.apmkingstrack.com/fleettracking/tracknow/verify";
    let data = JSON.stringify({
      tripid: this.LiveForm.value.tripId,
      plateno: this.LiveForm.value.plateno,
      tripstartdate: this.LiveForm.value.tripstartdate,
    });

    this.ajaxService.ajaxPostWithString(url, data).subscribe((response) => {
      this.Data = JSON.parse(response);
      if (this.Data.message == "Link Not Available") {
        this.commonService.presentToast("No vehicle found");
      } else {
        localStorage.setItem("appSettings", JSON.stringify("SelectedVin"));
        localStorage.setItem("inItPage", "livetrackVerify");
        localStorage.setItem("selectedVin", JSON.stringify(this.Data));
        localStorage.setItem("userName", this.Data.userName);
        localStorage.setItem("corpId", this.Data.userName);
        localStorage.setItem(
          "staticIOData",
          JSON.stringify(this.Data.staticIODatas)
        );

        setTimeout(() => {
          this.router.navigateByUrl(
            "/livetrack/" + JSON.parse(localStorage.selectedVin).plateNo
          );
        }, 1000);
      }
    });
  }
}
