import { HttpClientModule } from "@angular/common/http";
import { Component, OnInit, Input } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControlName,
  Validators,
} from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { SktService } from "src/app/services/skt.service";
import { AjaxService } from "src/app/services/ajax.service";
import { serverUrl } from "src/environments/environment";
import { CommonService } from "src/app/services/common.service";
@Component({
  selector: "app-route-form",
  templateUrl: "./route-form.component.html",
  styleUrls: ["./route-form.component.scss"],
})
export class RouteFormComponent implements OnInit {
  radioSelection = "PickUp";
  @Input() value;
  data: any;
  routeTripLogin: FormGroup;
  companyDetail: { branchID: string; companyID: string; userId: string };
  url: string;
  show: boolean = false;
  routeData: any;
  serviceName: any;
  selectedValue = "PickUp";
  addshow: boolean = true;
  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private http: HttpClientModule,
    private sktService: SktService,
    private ajaxService: AjaxService,
    private commonService: CommonService
  ) {}
  routetype: any;
  vehicletype: any;
  type: any;

  async closeModal() {
    this.modalController.dismiss();
  }

  clearModel() {
    this.radioSelection = "PickUp";
    this.selectedValue = "PickUp";
  }

  close() {
    this.modalController.dismiss();
  }

  clear() {
    this.routeTripLogin.patchValue({
      routeName: "",
      plateNo: "",
      trip: "",
      tripName: "",
      tripStarttime: "",
      tripEndtime: "",
    });
    this.clearModel();
  }

  createForm() {
    this.routeTripLogin = this.formBuilder.group({
      routeName: [""],
      plateNo: ["", Validators.required],
      trip: [""],
      tripName: ["", Validators.required],
      tripStarttime: ["", Validators.required],
      tripEndtime: ["", Validators.required],
    });
  }

  editForm() {
    if (this.value) {
      this.addshow = false;
      if (this.value.submit == "available") {
        this.serviceName = "available";
        this.show = true;
        localStorage.setItem("PlateNo", this.value.plateNo.toString());
        localStorage.setItem("Action", "Edit");
        localStorage.setItem("trip", this.value.trip);
        this.getVehiclename(this.value.trip);
        this.routeTripLogin.patchValue({
          routeName: this.value.routeName,
          plateNo: this.value.plateNo,
          trip: this.value.trip,
          tripName: this.value.tripName,
          tripStarttime: this.value.tripStarttime,
          tripEndtime: this.value.tripEndtime,
        });
      }
      this.radioSelection = this.value.trip;
      this.selectedValue = this.value.trip;
    } else {
      localStorage.setItem("PlateNo", "");
      localStorage.setItem("Action", "Add");
      localStorage.setItem("trip", "PickUp");
      this.getVehiclename("PickUp");
    }
  }

  getVehiclename(tripId) {
    let PlateNo = "";
    let Action = localStorage.getItem("Action").toString();
    if (Action == "Edit") {
      PlateNo = localStorage.getItem("PlateNo").toString();
      if (PlateNo.trim() == "-") {
        PlateNo = "";
      }
      let trips = localStorage.getItem("trip").toString();
      if (tripId != trips) {
        PlateNo = "";
      }
    }
    var url =
      serverUrl.web +
      `/routetrip/getVehiclename?trip=${tripId}&plateno=${PlateNo}&compId=${this.companyDetail.companyID}&branchId=${this.companyDetail.branchID}`;
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.vehicletype = res;
    });
  }

  onSubmit() {
    if (this.serviceName != "available") {
      var data: any = {
        schoolId: this.companyDetail.companyID,
        branchId: this.companyDetail.branchID,
        emailId: this.companyDetail.userId,
        plateNo: this.routeTripLogin.value.plateNo,
        name: this.selectedValue,
        tripName: this.routeTripLogin.value.tripName.trim(),
        tripStarttime: this.routeTripLogin.value.tripStarttime,
        tripEndtime: this.routeTripLogin.value.tripEndtime,
        lastUpdBy: this.companyDetail.companyID,
      };
      Object.keys(data).forEach(
        (key) => (data[key] == null || data[key] == "") && delete data[key]
      );
      const url = serverUrl.web + "/routetrip/addroute";
      this.ajaxService.ajaxPostWithString(url, data).subscribe((res) => {
        if (JSON.parse(res).message == "Added Successfully") {
          this.commonService.presentToast("Added successfully");
          this.routeTripLogin.reset();
          this.modalController.dismiss();
        } else {
          this.commonService.presentToastwithmoretime(JSON.parse(res).message);
        }
      });
    } else if (this.serviceName == "available") {
      if (this.routeTripLogin.value.routeName.trim().length == 0) {
        this.commonService.showConfirm("Please Enter Route Name");
      } else {
        var details = {
          tripId: this.value.tripId,
          schoolId: this.companyDetail.companyID,
          branchId: this.companyDetail.branchID,
          routeName: this.routeTripLogin.value.routeName.trim(),
          routetype: this.value.routeName.trim(),
          plateNo: this.routeTripLogin.value.plateNo,
          name: this.selectedValue,
          tripName: this.routeTripLogin.value.tripName.trim(),
          tripStarttime: this.routeTripLogin.value.tripStarttime,
          tripEndtime: this.routeTripLogin.value.tripEndtime,
          lastUpdBy: this.companyDetail.userId,
        };
        Object.keys(details).forEach(
          (key) =>
            (details[key] == null || details[key] == "") && delete details[key]
        );
        const url = serverUrl.web + "/routetrip/updateroute";
        this.ajaxService.ajaxPostWithString(url, details).subscribe((res) => {
          if (JSON.parse(res).message == "Updated Successfully") {
            this.commonService.presentToast("Updated succesfully");
            this.routeTripLogin.reset();
            this.modalController.dismiss();
          } else {
            this.commonService.presentToastwithmoretime(
              JSON.parse(res).message
            );
          }
        });
      }
    }
  }

  selectPickDrop(event) {
    this.selectedValue = event.detail.value;
    this.radioSelection = event.detail.value;
    let Action = localStorage.getItem("Action").toString();
    if (Action == "Add") {
      localStorage.setItem("PlateNo", "");
      this.routeTripLogin.patchValue({
        plateNo: "",
      });
    }
    this.getVehiclename(event.detail.value);
  }

  ngOnInit() {
    this.companyDetail = {
      branchID: localStorage.getItem("corpId"),
      companyID: localStorage.getItem("corpId"),
      userId: localStorage.getItem("userName"),
    };
    this.createForm();
    this.editForm();
  }
}
