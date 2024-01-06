import {
  Component,
  ViewChild,
  OnInit,
  AfterViewInit,
  ViewEncapsulation,
} from "@angular/core";
import { Router } from "@angular/router";
import { Platform } from "@ionic/angular";

import { DropDownListComponent } from "smart-webcomponents-angular/dropdownlist";
import { AjaxService } from "src/app/services/ajax.service";
import { serverUrl } from "src/environments/environment";

@Component({
  selector: "app-esim-dashboards",
  templateUrl: "./esim-dashboards.page.html",
  styleUrls: ["./esim-dashboards.page.scss"],
})
export class EsimDashboardsPage implements OnInit {
  myPlatform: any;
  sendoriseFromD;
  sendoriseToD;
  salesFrom;
  salesTo;
  RenewalFrom;
  RenewalTo;
  purchaseFrom;
  purchaseTo;
  data = [];
  days = "currentmonth";
  salsedays = "currentmonth";
  purchasedays = "currentmonth";
  renewaldays = "currentmonth";
  tempDealer = "";
  endisDate = false;
  endisDateSales = false;
  endisDateRenewal = false;
  endisDatePurchase = false;
  deviceTotalActivatedCounts = {};
  dealer = "";
  dealersData = [];
  fromDate = "";
  toDate = "";
  fromDateSales = "";
  toDateSales = "";
  fromDateRenewal = "";
  toDateRenewal = "";
  fromDatePurchase = "";
  toDatePurchase = "";
  companyData = "apm";
  companyId = localStorage.getItem("userName");
  filter = "currentmonth";
  filter1 = "currentmonth";
  dealerName = "";
  dealerNameSales = "";
  dealerNameRenewal = "";
  dealerNamePurchase = "";
  endis = {};
  barRender = [];
  endisMapedDevice(d) {
    console.log(d);
    this.endis = d;
  }
  constructor(
    private ajaxService: AjaxService,
    private router: Router,
    public platform: Platform
  ) {}

  // @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
  // @ViewChild('dropdownlist1', { read: DropDownListComponent, static: false }) dropdownlist1!: DropDownListComponent;

  deviceTotalPurchaseCounts = {};

  @ViewChild("dropdownlistDealer1", {
    read: DropDownListComponent,
    static: false,
  })
  dropdownlistDealer1!: DropDownListComponent;
  @ViewChild("dropdownlistDealer2", {
    read: DropDownListComponent,
    static: false,
  })
  dropdownlistDealer2!: DropDownListComponent;

  @ViewChild("daysDropDown1", { read: DropDownListComponent, static: false })
  daysDropDown1!: DropDownListComponent;
  @ViewChild("daysDropDown2", { read: DropDownListComponent, static: false })
  daysDropDown2!: DropDownListComponent;
  @ViewChild("daysDropDown3", { read: DropDownListComponent, static: false })
  daysDropDown3!: DropDownListComponent;
  @ViewChild("daysDropDown4", { read: DropDownListComponent, static: false })
  daysDropDown4!: DropDownListComponent;

  ngAfterViewInit(): void {}

  getSensoriseData() {
    let url =
      "https://mvt.apmkingstrack.com/fleettracking/esim/getServiceProvider";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.barRender = res;
    });
  }
  ngOnInit(): void {
    console.log(this.purchaseFrom);
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
    if (this.companyId == "apm-sa") {
      this.dealer = this.companyData;
    } else {
      this.dealer = this.companyId;
    }

    // const url = serverUrl.web +"/global/getesimdealerlist"
    // this.ajaxService.ajaxGet(url).subscribe(res=>{
    //   this.dropdownlist.dataSource = res
    //   this.dropdownlist1.dataSource=res
    // })
    this.getSensoriseData();
    this.getDealers();
  }

  getDealers() {
    let url =
      "https://mvt.apmkingstrack.com/fleettracking/global/getesimdealerlist";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      res.splice(0, 0, "All");
      this.data = res;
    });
  }

  deviceTotalActivatedCount(d) {
    this.deviceTotalActivatedCounts = d;
  }

  Submit(data) {
    if (data == "sales") {
      this.fromDateSales = this.salesFrom;
      this.toDateSales = this.salesTo;
      this.salsedays = this.daysDropDown3.value[0].value;
      this.dealerNameSales = this.dropdownlistDealer1.value[0].value;
    } else if (data == "renewal") {
      this.fromDateRenewal = this.RenewalFrom;
      this.toDateRenewal = this.RenewalTo;
      this.renewaldays = this.daysDropDown4.value[0].value;
      if (this.companyId == "apm-sa") {
        this.dealerNameRenewal = this.dropdownlistDealer2.value[0].value;
      }
    } else if (data == "purchase") {
      this.fromDatePurchase = this.purchaseFrom;
      this.toDatePurchase = this.purchaseTo;

      this.purchasedays = this.daysDropDown2.value[0].value;
    } else if (data == "sensorise") {
      this.fromDate = this.sendoriseFromD;
      this.toDate = this.sendoriseToD;
      this.days = this.daysDropDown1.value[0].value;
    }
  }

  deviceTotalPurchaseCount(d) {
    this.deviceTotalPurchaseCounts = d;
  }

  selectDealer(e, header) {
    if (header == "sensorise") {
      if (this.endisDate == false) {
        this.dealerName = e.detail.value;
      }
    } else if (header == "sales") {
      if (this.endisDateSales == false) {
        this.dealerNameSales = this.dropdownlistDealer1.value[0].value;
      }
    } else if (header == "renewal") {
      if (this.endisDateRenewal == false) {
        this.dealerNameRenewal = this.dropdownlistDealer2.value[0].value;
      }
    }
  }

  daysDropDownClick(d, header) {
    if (header == "sensorise") {
      if (d.detail.value != "customrange") {
        this.fromDate = "";
        this.toDate = "";
        this.sendoriseFromD = undefined;
        this.sendoriseToD = undefined;

        this.days = this.daysDropDown1.value[0].value;
        this.endisDate = false;
      } else {
        this.endisDate = true;
      }
    } else if (header == "sales") {
      if (d.detail.value != "customrange") {
        this.fromDateSales = "";
        this.toDateSales = "";
        this.salesFrom = undefined;
        this.salesTo = undefined;

        this.salsedays = this.daysDropDown3.value[0].value;
        this.endisDateSales = false;
      } else {
        this.endisDateSales = true;
      }
    } else if (header == "renewal") {
      if (d.detail.value != "customrange") {
        this.RenewalFrom = undefined;
        this.RenewalTo = undefined;

        this.fromDateRenewal = "";
        this.toDateRenewal = "";
        this.renewaldays = this.daysDropDown4.value[0].value;
        this.endisDateRenewal = false;
      } else {
        this.endisDateRenewal = true;
      }
    } else if (header == "purchase") {
      if (d.detail.value != "customrange") {
        this.purchaseFrom = undefined;
        this.purchaseTo = undefined;
        this.fromDatePurchase = "";
        this.toDatePurchase = "";
        this.purchasedays = this.daysDropDown2.value[0].value;
        this.endisDatePurchase = false;
      } else {
        this.endisDatePurchase = true;
      }
    }
  }
}
