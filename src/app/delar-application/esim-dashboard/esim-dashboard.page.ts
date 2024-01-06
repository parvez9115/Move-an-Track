import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-esim-dashboard",
  templateUrl: "./esim-dashboard.page.html",
  styleUrls: ["./esim-dashboard.page.scss"],
})
export class EsimDashboardPage implements OnInit {
  myPlatform: string;
  constructor(private router: Router, private platform: Platform) {}

  menuObject: any;
  appUrl = {
    Home: "tabs-login/new-dashboard",
    Company: "tabs-login/dashboard",
    "Vehicle creation": "tabs-login/vehicle-creation",
    "Vehicle Registration": "tabs-login/vehicle-registration",
    "Dealer creation": "tabs-login/add-delar",
    "Device activation": "tabs-login/device-activation",
    "Company creation": "tabs-login/dashboard/add-company",
    Stocks: "tabs-login/stocks",
    "Stock uploader": "tabs-login/stock-uploader",
    Detach: "tabs-login/check-imei",
    Subscription: "tabs-login/subscription",

    "Inventory Details": "tabs-login/inventory-details",
    "Add Third Party Vins": "tabs-login/third-party-vin",
    "IMEI Details": "tabs-login/imei-full-details",
    "RSU ICCID Detail": "tabs-login/rsu-iccid-details",
    "Dealer Stock List": "tabs-login/dealer-stock-list",
    "Log-out": "tabs-login/members/login",
    "Esim Dashbord": "tabs-login/esim-dashboards",
    "Monitoring Dashbord": "tabs-login/esim-home",
    "Esim Purchase Invoice Details": "tabs-login/esim-purchase-details",
    "Esim Detail": "tabs-login/esim-details",
    "Device Production": "tabs-login/esim-production-detail",
    "Device Sales Invoice Details": "tabs-login/esim-sales-invoice-details",
    "Product Delivery Details": "tabs-login/esim-sales-detail",
    "Device Transport Details": "tabs-login/esim-transport-details",
    "Commercial Activation Request": "tabs-login/esim-dealer-detail",
    "Renewal Request": "tabs-login/esim-renewal",
    "Device CA Request": "tabs-login/esim-ca-request",
    "Device Renewal Request": "tabs-login/esim-device-renewal-request",
    "Device CA Status Update": "tabs-login/esim-ca-report",
    "Device Renewal Status Update": "tabs-login/esim-renewal-status-update",
    "Customer CA Status": "tabs-login/esim-customer-ca-details",
    "Devices Detail Update": "tabs-login/esim-device-detail-update",
    "Device Return Details": "tabs-login/device-return-details",
    "Device Replace Details": "tabs-login/device-replace-details",
    "Device Status Update": "tabs-login/device-status-update",
    "Delear IMEI Check": "tabs-login/dealer-imeicheck-details",
    "Device Topup Invoice Details": "tabs-login/device-topup-invoice-details",
    "Topup Request": "tabs-login/device-topup-request-details",
    "Device Topup Request": "tabs-login/device-topup-request",
    "Device Topup Status Update": "tabs-login/device-topup-status-update",
    "Device Extend One Year Request":
      "tabs-login/device-extend-one-year-request",
    "Device Extend One Year Invoice Details":
      "tabs-login/device-extend-oneyear-invoice-details",
    "Extend One Year Request":
      "tabs-login/device-extend-oneyear-request-details",
    "Device Extend One Year Status Update":
      "tabs-login/device-extend-status-update",
    "Device Certificate Invoice Details":
      "tabs-login/device-certificate-invoice-details",
    "BSNL Certificate Request": "tabs-login/esim-bsnl-certificate",
    "Certificate Request": "tabs-login/device-certificate-request",
    "Dealer Hierarchy": "tabs-login/dealer-hierarchy",
    "Device Renewal Invoice Details":
      "tabs-login/device-renewal-invoice-details",
    "Device Activation History": "tabs-login/device-activation-history",
    "Certificate creation": "tabs-login/certificate",
    "Dealer Vehicle Assign": "tabs-login/dealer-vehicle-assign",
    "Esim Zoho Books Products": "tabs-login/zoho-books-products",
    "Esim Zoho Books Customers": "tabs-login/zoho-books-customers",
    "Esim Change Password": "tabs-login/esim-change-password",
    "Sim Provider Change": "tabs-login/sim-change-provider",
  };

  appIcon = {
    Home: "home",
    Company: "business",
    "Vehicle creation": "car",
    "Vehicle Registration": "clipboard",
    "Dealer creation": "people",
    "Device activation": "today",
    "Company creation": "logo-buffer",
    Stocks: "stats",
    "Stock uploader": "cloud-upload",
    "Dealer Stock List": "bookmarks",
    "Log-out": "log-out",
    Detach: "send",
    Subscription: "create",
    "Certificate creation": "ribbon",
    "Dealer Vehicle Assign": "shuffle",
    "Dealer List": "warning",

    "Sim Validity Detail": "cellular",
    "Inventory Details": "cube",
    "Add Third Party Vins": "exit",
    "IMEI Details": "mail-open",
    "RSU ICCID Detail": "stats",

    "Monitoring Dashbord": "home",
    "Esim Dashbord": "trending-up",
    "Esim Purchase Invoice Details": "appstore",
    "Esim Detail": "document",
    "Device Production": "cog",
    "Device Sales Invoice Details": "trending-up",
    "Product Delivery Details": "construct",
    "Device Transport Details": "airplane",
    "Commercial Activation Request": "people",
    "Device Renewal Invoice Details": "shuffle",
    "Renewal Request": "refresh",
    "Device CA Request": "mail-unread",
    "Device Renewal Request": "shuffle",
    "Device CA Status Update": "ios-clipboard",
    "Device Renewal Status Update": "create",
    "Customer CA Status": "contacts",
    "Device Return Details": "construct",
    "Device Replace Details": "repeat",
    "Device Status Update": "trending-up",
    "Devices Detail Update": "sync",
    "Delear IMEI Check": "cog",
    "Device Topup Invoice Details": "mail-open",
    "Topup Request": "refresh",
    "Device Topup Request": "people",
    "Device Topup Status Update": "people",
    "Device Extend One Year Invoice Details": "appstore",
    "Extend One Year Request": "shuffle",
    "Device Extend One Year Request": "ios-clipboard",
    "Device Extend One Year Status Update": "sync",

    "Device Certificate Invoice Details": "ribbon",
    "BSNL Certificate Request": "sync",
    "Certificate Request": "shuffle",
    "Device Activation History": "paper",
    "Dealer Hierarchy": "stats",
    "Esim Zoho Books Products": "book",
    "Esim Zoho Books Customers": "people",
    "Esim Change Password": "key",
    "Sim Provider Change": "albums",
  };
  ngOnInit() {
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
    this.menuObject = JSON.parse(localStorage.getItem("esimdashboardmenu"));
  }

  async logOutFunction(router) {
    this.router.navigateByUrl(this.appUrl[router]);
  }
}
