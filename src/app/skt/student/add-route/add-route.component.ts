import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  NavParams,
  ModalController,
  Platform,
  MenuController,
  AlertController,
} from "@ionic/angular";
import { serverUrl } from "src/environments/environment";
import { toLonLat } from "ol/proj";
import { Router } from "@angular/router";
import { AuthMapService } from "src/app/services/auth-map.service";
import { GoogleMapService } from "src/app/services/google-map.service";
import { OpenlayerMapService } from "src/app/services/openlayer-map.service";
import { AddAlertsComponent } from "../add-alerts/add-alerts.component";
import { CommonService } from "src/app/services/common.service";
import { AjaxService } from "src/app/services/ajax.service";
declare var google;
@Component({
  selector: "app-add-route",
  templateUrl: "./add-route.component.html",
  styleUrls: ["./add-route.component.scss"],
})
export class AddRouteComponent implements OnInit {
  @Input() mode: string;
  range = 500;
  type: string;
  @ViewChild("mapElement", { static: false }) mapElement;
  @Input() value;
  studentDetails: FormGroup;
  pickuproute: any;
  pickuptrip;
  pickupstop: any;
  update = "";
  droproute: any;
  droptrip: any;
  dropstop: any;
  pstop: any;
  dstop: any;
  tripdetails: any;
  map: any;
  editableData;
  subscription: any;
  selectValue = "";
  click = 1;
  myPlatform: any;
  routeinfo: any;
  editselectbox: boolean = false;
  trip: any;
  sel_trip;
  a: any;
  sel_pickuptrip: any;
  sel_droptrip: any;
  result: any;
  done: any;
  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private mapService: AuthMapService,
    public nav: NavParams,
    public gMapService: GoogleMapService,
    public olMapService: OpenlayerMapService,
    private menuController: MenuController,
    private platform: Platform,
    private alertController: AlertController,
    public commonService: CommonService,
    public ajaxService: AjaxService
  ) {
    this.mapService = new OpenlayerMapService();
  }
  ionViewWillEnter() {
    this.subscription = this.platform.backButton.subscribe(async () => {
      if (this.menuController.isOpen()) {
        this.menuController.close();
      }
    });
  }
  closeModel() {
    this.modalController.dismiss();
  }
  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
  createMap(mode) {
    this.map = this.mapService.loadMap(
      this.mapElement.nativeElement,
      { lat: 13.065274398613948, lng: 80.26600974342504 },
      false,
      false
    );
    this.mapService.setCenter(this.map, {
      lat: 13.065274398613948,
      lng: 80.26600974342504,
    });
    let latLng;
    if (mode === "edit") {
      let Stop = this.studentDetails.value.dropstop;
      if (Stop == "") {
        Stop = this.studentDetails.value.pickupstop;
      }
      if (Stop != "") {
        const url =
          serverUrl.web + "/student/getstudent/geofence?routeid=" + Stop;
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
          this.result = res.latlng;

          const detailsString = this.result;
          const getLatLng = detailsString.split("|");
          const southwest = getLatLng[0].split(",");
          const northeast = getLatLng[1].split(",");
          const south = parseFloat(southwest[0].split(",")[0]);
          const west = parseFloat(southwest[1].split(",")[0]);
          const north = parseFloat(northeast[0].split(",")[0]);
          const east = parseFloat(northeast[1].split(",")[0]);
          latLng = { lat: south, lng: west };
          this.range = this.calculateRadius(north, east, south, west);
          this.mapService.addMarker(
            this.map,
            latLng,
            "studentroute",
            "assets/vtstrackhisIcon/Idle.png"
          );
          this.mapService.createCircle(this.map, latLng, this.range, "");
          this.mapService.fitBounds(this.map, 2);
        });
      }
    }
  }
  setRange(range) {
    this.range = range;
    this.mapService.setCircleRadius(this.range);
  }
  getpickuptrip() {
    const url =
      serverUrl.web +
      "/student/route/details?schoolId=" +
      localStorage.getItem("corpId") +
      "&branchId=" +
      localStorage.getItem("corpId");
    this.ajaxService.ajaxGetObject(url).subscribe((res) => {
      this.tripdetails = JSON.parse(res);
      console.log(this.tripdetails);
      this.pickuptrip = Object.keys(this.tripdetails["PickUp"]);
    });
  }
  getpickuproute(ev) {
    this.studentDetails.patchValue({
      pickuproute: "",
    });
    this.pickuproute = Object.keys(this.tripdetails["PickUp"][ev.target.value]);
    this.sel_pickuptrip = ev.target.value;
  }
  getpickupstop(ev) {
    this.studentDetails.patchValue({
      pickupstop: "",
    });
    this.pickupstop =
      this.tripdetails["PickUp"][this.sel_pickuptrip][ev.target.value];
  }
  selectpickupstop() {
    this.mapService.clearLayers(this.map, [1, 2]);
    const url =
      serverUrl.web +
      "/student/getstudent/geofence?routeid=" +
      this.studentDetails.value.pickupstop;
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.result = res.latlng;
      this.mapService.setCenter(this.map, { lat: 13.029373, lng: 80.271928 });
      let latLng;

      const detailsStrings = this.result;
      const getLatLng = detailsStrings.split("|");
      const southwest = getLatLng[0].split(",");
      const northeast = getLatLng[1].split(",");
      const south = parseFloat(southwest[0].split(",")[0]);
      const west = parseFloat(southwest[1].split(",")[0]);
      const north = parseFloat(northeast[0].split(",")[0]);
      const east = parseFloat(northeast[1].split(",")[0]);
      latLng = { lat: south, lng: west };
      this.range = this.calculateRadius(north, east, south, west);

      this.mapService.addMarker(
        this.map,
        latLng,
        "studentroute",
        "assets/vtstrackhisIcon/Idle.png"
      );
      this.mapService.createCircle(this.map, latLng, this.range, "");
    });
  }
  selectDropstop() {
    this.mapService.clearLayers(this.map, [1, 2]);
    const url =
      serverUrl.web +
      "/student/getstudent/geofence?routeid=" +
      this.studentDetails.value.dropstop;
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.result = res.latlng;

      this.mapService.setCenter(this.map, { lat: 13.029373, lng: 80.271928 });
      let latLng;

      const detailsString1 = this.result;
      const getLatLng = detailsString1.split("|");
      const southwest = getLatLng[0].split(",");
      const northeast = getLatLng[1].split(",");
      const south = parseFloat(southwest[0].split(",")[0]);
      const west = parseFloat(southwest[1].split(",")[0]);
      const north = parseFloat(northeast[0].split(",")[0]);
      const east = parseFloat(northeast[1].split(",")[0]);
      latLng = { lat: south, lng: west };
      this.range = this.calculateRadius(north, east, south, west);

      this.mapService.addMarker(
        this.map,
        latLng,
        "studentroute",
        "assets/vtstrackhisIcon/Idle.png"
      );
      this.mapService.createCircle(this.map, latLng, this.range, "");
      this.mapService.fitBounds(this.map, 2);
    });
  }
  getdroptrip() {
    const url =
      serverUrl.web +
      "/student/route/details?schoolId=" +
      localStorage.getItem("corpId") +
      "&branchId=" +
      localStorage.getItem("corpId");
    this.ajaxService.ajaxGetObject(url).subscribe((res) => {
      this.tripdetails = JSON.parse(res);
      this.droptrip = Object.keys(this.tripdetails["Drop"]);
    });
  }
  getdroproute(ev) {
    this.studentDetails.patchValue({
      droproute: "",
    });
    this.droproute = Object.keys(this.tripdetails["Drop"][ev.target.value]);
    this.sel_droptrip = ev.target.value;
  }
  getdropstop(ev) {
    this.studentDetails.patchValue({
      dropstop: "",
    });
    this.dropstop =
      this.tripdetails["Drop"][this.sel_droptrip][ev.target.value];
  }
  getAddressLatlng(address) {
    if (address != "") {
      let data: any = parseFloat(address.split(",")[0]);
      if (data.toString() != "NaN") {
        if (address.split(",")[1]) {
          this.mapService.setCenter(this.map, {
            lat: parseFloat(address.split(",")[0]),
            lng: parseFloat(address.split(",")[1]),
          });
        }
      } else if (data.toString() == "NaN") {
        this.ajaxService
          .ajaxGet(
            "https://nominatim.openstreetmap.org/?format=json&addressdetails=1&q=" +
              address +
              "&format=json&limit=1"
          )
          .subscribe((res) => {
            if (res.length > 0) {
              let latLng = { lat: res[0].lat, lng: res[0].lon };
              this.mapService.setCenter(this.map, {
                lat: parseFloat(res[0].lat),
                lng: parseFloat(res[0].lon),
              });
            } else {
              this.commonService.presentToast(
                "Can't able to get your location"
              );
            }
          });
      }
    }
  }
  calculateRadius = function (south, west, north, east) {
    const R = 6378.137;
    const dLat = ((north - south) * Math.PI) / 180;
    const dLon = ((east - west) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((south * Math.PI) / 180) *
        Math.cos((north * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return Math.round(d * 1000);
  };
  async closeModal() {
    this.modalController.dismiss();
  }
  async deletePickup() {
    const alert = await this.alertController.create({
      header: "Confirm",
      backdropDismiss: false,
      message: "Are you sure you want to Delete PickUp?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: (data) => {},
        },
        {
          text: "Ok",
          handler: (data) => {
            this.deletepickup();
          },
        },
      ],
    });
    await alert.present();
  }
  deletepickup() {
    const url =
      serverUrl.web +
      "/student/delete/studenttrip?stin=" +
      this.value.toString() +
      "&tripid=" +
      this.routeinfo.routeinfo.dropStop.toString() +
      "&trip=PickUp";
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.done = res;
      if (res.message == "Successfully Deleted") {
        this.studentDetails.patchValue({
          pickuptrip: "",
          pickuproute: "",
          pickupstop: "",
        });
        this.commonService.showConfirm("PickUp " + res.message.toString());
      }
    });
  }
  async deleteDrop() {
    const alert = await this.alertController.create({
      header: "Confirm",
      backdropDismiss: false,
      message: "Are you sure you want to Delete Drop?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: (data) => {},
        },
        {
          text: "Ok",
          handler: (data) => {
            this.deletedrop();
          },
        },
      ],
    });
    await alert.present();
  }
  deletedrop() {
    const url =
      serverUrl.web +
      "/student/delete/studenttrip?stin=" +
      this.value.toString() +
      "&tripid=" +
      this.routeinfo.routeinfo.dropStop.toString() +
      "&trip=Drop";
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.done = res;
      if (res.message == "Successfully Deleted") {
        this.studentDetails.patchValue({
          droptrip: "",
          droproute: "",
          dropstop: "",
        });
        this.commonService.showConfirm("Drop " + res.message.toString());
      }
    });
  }
  submit() {
    if (
      this.studentDetails.value.pickuptrip == "" &&
      this.studentDetails.value.droptrip == ""
    ) {
      this.commonService.showConfirm("Please Select Pickup or Drop Vehicle");
    } else if (
      this.studentDetails.value.pickuptrip != "" &&
      this.studentDetails.value.pickuproute == ""
    ) {
      this.commonService.showConfirm("Please Select Pickup Route");
    } else if (
      this.studentDetails.value.pickuptrip != "" &&
      this.studentDetails.value.pickupstop == ""
    ) {
      this.commonService.showConfirm("Please Select Pickup Stop");
    } else {
      let validation = true;
      if (this.studentDetails.value.droptrip != "") {
        if (this.studentDetails.value.droproute == "") {
          this.commonService.showConfirm("Please Select Drop Route");
          validation = false;
        } else if (this.studentDetails.value.dropstop == "") {
          this.commonService.showConfirm("Please Select Drop Stop");
          validation = false;
        }
      }
      if (validation == true) {
        var data = {
          stin: this.value.toString(),
          pickupId: this.studentDetails.value.pickupstop.toString(),
          dropIp: this.studentDetails.value.dropstop.toString(),
          geoloc: "",
        };
        if (this.update == "available") {
          var url = serverUrl.web + "/student/config/studentroute";
        }
        this.ajaxService.ajaxPostMethod(url, data).subscribe(async (res) => {
          if (res.message == "success") {
            this.commonService.presentToast(
              "Student Details Route Info Updated sucessfully"
            );
            this.studentDetails.reset();
            this.modalController.dismiss();
          } else {
            this.commonService.presentToast("Please contact support team");
          }
        });
      }
    }
  }
  editmethod() {
    const url =
      serverUrl.web + "/student/get/studentdetails?stin=" + this.value;
    this.ajaxService.ajaxGetObject(url).subscribe((res) => {
      this.routeinfo = JSON.parse(res);
      this.update = "available";
      if (
        this.tripdetails["PickUp"].hasOwnProperty(
          this.routeinfo.routeinfo.pickupTrip
        )
      ) {
        this.pickuproute = Object.keys(
          this.tripdetails["PickUp"][this.routeinfo.routeinfo.pickupTrip]
        );
        this.pickupstop =
          this.tripdetails["PickUp"][this.routeinfo.routeinfo.pickupTrip][
            this.routeinfo.routeinfo.pickupRoute
          ];
      }
      if (
        this.tripdetails["Drop"].hasOwnProperty(
          this.routeinfo.routeinfo.dropTrip
        )
      ) {
        this.droproute = Object.keys(
          this.tripdetails["Drop"][this.routeinfo.routeinfo.dropTrip]
        );
        this.dropstop =
          this.tripdetails["Drop"][this.routeinfo.routeinfo.dropTrip][
            this.routeinfo.routeinfo.dropRoute
          ];
      }
      this.studentDetails.patchValue({
        pickuptrip: this.routeinfo.routeinfo.pickupTrip,
        pickuproute: this.routeinfo.routeinfo.pickupRoute,
        pickupstop: this.routeinfo.routeinfo.pickupStop,
        droptrip: this.routeinfo.routeinfo.dropTrip,
        droproute: this.routeinfo.routeinfo.dropRoute,
        dropstop: this.routeinfo.routeinfo.dropStop,
      });
      this.sel_pickuptrip = this.routeinfo.routeinfo.pickupTrip;
      this.sel_droptrip = this.routeinfo.routeinfo.dropTrip;
    });
  }
  createForm() {
    this.studentDetails = this.formBuilder.group({
      pickuproute: [""],
      pickuptrip: [""],
      pickupstop: [""],
      droproute: [""],
      droptrip: [""],
      dropstop: [""],
    });
  }
  ngOnInit() {
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
    this.createForm();
    this.getpickuptrip();
    this.getdroptrip();
    this.editmethod();
    this.type = this.mode;
    setTimeout(() => {
      this.createMap(this.type);
    }, 2000);
  }
  onClickLocationGetter() {
    this.map.on("click", async (evt) => {
      this.mapService.clearLayers(this.map, [1, 2]);
      const coordinates = evt.coordinate;
      let latLng = toLonLat([coordinates[0], coordinates[1]]);
      latLng = { lat: latLng[1], lng: latLng[0] };
      if (this.click > 1) {
        this.mapService.clearLayers(this.map, [1, 2]);
      }
      this.mapService.addMarker(
        this.map,
        latLng,
        "",
        "assets/vtstrackhisIcon/Idle.png"
      );
      this.mapService.createCircle(this.map, latLng, this.range, "");
      this.click++;
    });
  }
}
