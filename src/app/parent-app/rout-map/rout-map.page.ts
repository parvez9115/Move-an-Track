import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AjaxService } from "src/app/services/ajax.service";
import { serverUrl } from "../../../environments/environment";
import { CommonService } from "src/app/services/common.service";

@Component({
  selector: "app-rout-map",
  templateUrl: "./rout-map.page.html",
  styleUrls: ["./rout-map.page.scss"],
})
export class RoutMapPage implements OnInit {
  routeDatas = [
    {
      routesDatas: [
        {
          stop: "MCC",
          distanceTravelled: "00",
          approximateReachTime: "1min",
          crossedStatus: "cred",
          adderss: "Panpark",
        },
      ],
      routeName: "Rouap-bu1",
    },
  ];

  // curret_location = "pattalam"
  // routeDatas=[];

  // routeDatas = [{"routesDatas":[{"stop":"MCC","distanceTravelled":"1700","approximateReachTime":"18min",
  // "crossedStatus":"crossed","adderss":"Panagal park"}],"routeName":"RouteMap-bu1"}]
  // routeDatas = [{"routeName":"RouteMap-bust11","routesDatas":[{"stop": "Panagal park", "adderss":"Nkm road chennai",  "distanceTravelled":"1700 M", "approximateReachTime":"18min", "crossedStatus":"crossed"},
  // {"stop": "Panagal park", "adderss":"Nkm road chennai",
  //  "distanceTravelled":"1700 M", "approximateReachTime":"18min", "crossedStatus":"crossed"}]}]
  constructor(
    private location: Location,
    private ajaxService: AjaxService,
    public router: Router,
    public commonService: CommonService
  ) {}

  locationBack() {
    this.router.navigateByUrl("student-dashboard");
  }

  getRoutesDatas() {
    this.commonService.presentLoader();
    const url =
      serverUrl.web +
      "/parentapp/routeMap?parentId=" +
      localStorage.getItem("userName") +
      "&stin=" +
      localStorage.getItem("stin");
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.routeDatas = res;
      this.commonService.dismissLoader();
    });
  }

  ngOnInit() {
    this.getRoutesDatas();
  }
}
