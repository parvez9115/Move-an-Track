(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esim-dashboards-esim-dashboards-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-dashboards/esim-dashboards.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-dashboards/esim-dashboards.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons\n      *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\"\n      slot=\"start\"\n    >\n      <ion-icon\n        routerLink=\"/tabs-login/esim-dashboard\"\n        name=\"arrow-back\"\n        style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Esim Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row\n    style=\"display: flex; justify-content: center\"\n    *ngIf=\"companyId == 'apm-sa'\"\n    ><h4 style=\"color: #92a0b3\">eSim Manufacture</h4>\n  </ion-row>\n  <ion-row\n    *ngIf=\"companyId == 'apm-sa'\"\n    style=\"margin-top: 15px; justify-content: center; align-items: center\"\n  >\n    <div>\n      <smart-drop-down-list\n        (change)=\"daysDropDownClick($event,'sensorise')\"\n        [dropDownPosition]=\"'bottom'\"\n        #daysDropDown1\n        [selectedIndexes]=\"[0]\"\n      >\n        <smart-list-item [value]=\"'currentmonth'\"\n          >Current Month</smart-list-item\n        >\n        <smart-list-item [value]=\"'lastmonth'\">Last Month</smart-list-item>\n        <smart-list-item [value]=\"'currentyear'\">Current Year</smart-list-item>\n        <smart-list-item [value]=\"'customrange'\">Custom Range</smart-list-item>\n      </smart-drop-down-list>\n    </div>\n\n    <div *ngIf=\"endisDate\">\n      <ion-input [(ngModel)]=\"sendoriseFromD\" type=\"date\" class=\"input\">\n        <span style=\"color: Blue; margin-left: 5px\">From Date:</span>\n      </ion-input>\n    </div>\n    <div *ngIf=\"endisDate\">\n      <ion-input [(ngModel)]=\"sendoriseToD\" type=\"date\" class=\"input\">\n        <span style=\"color: Blue; margin-left: 5px\">To Date:</span>\n      </ion-input>\n    </div>\n    <div>\n      <ion-button\n        (click)=\"Submit('sensorise')\"\n        size=\"small\"\n        [disabled]=\"sendoriseFromD == undefined||sendoriseToD == undefined\"\n        *ngIf=\"endisDate\"\n        class=\"Akash\"\n        >Submit</ion-button\n      >\n    </div>\n  </ion-row>\n\n  <ion-row style=\"display: flex; justify-content: center; align-items: center\">\n    <div [ngStyle]=\"{'width':myPlatform == 'desktop' && '47%'}\">\n      <ion-card *ngFor=\"let name of barRender\">\n        <app-dealer-stacked-chart\n          *ngIf=\"companyId == 'apm-sa'\"\n          [barName]=\"name\"\n          [toDate]=\"toDate\"\n          [fromDate]=\"fromDate\"\n          [days]=\"days\"\n          [dealerName]=\"dealerName\"\n          [header]=\"name\"\n        ></app-dealer-stacked-chart>\n      </ion-card>\n    </div>\n    <div [ngStyle]=\"{'width':myPlatform == 'desktop' && '47%'}\">\n      <ion-card *ngFor=\"let name of barRender\">\n        <app-dealer-stacked-chart\n          *ngIf=\"endis&&companyId == 'apm-sa'\"\n          [barName]=\"'Device Mapped Details'\"\n          [toDate]=\"toDate\"\n          [fromDate]=\"fromDate\"\n          [dealerName]=\"dealerName\"\n          [days]=\"days\"\n          [header]=\"name\"\n        ></app-dealer-stacked-chart>\n      </ion-card>\n    </div>\n  </ion-row>\n\n  <ion-card *ngIf=\"companyId != 'apm-sa'\">\n    <ion-card-title\n      style=\"\n        display: flex;\n        margin-top: 20px;\n        justify-content: center;\n        align-items: center;\n        color: #92a0b3;\n      \"\n      >Purchase Dashboard</ion-card-title\n    >\n    <ion-row\n      style=\"\n        margin-top: 3%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      \"\n    >\n      <div>\n        <smart-drop-down-list\n          (change)=\"daysDropDownClick($event,'purchase')\"\n          [dropDownPosition]=\"'bottom'\"\n          #daysDropDown2\n          [selectedIndexes]=\"[0]\"\n        >\n          <smart-list-item value=\"currentmonth\">Current Month</smart-list-item>\n          <smart-list-item value=\"lastmonth\">Last Month</smart-list-item>\n          <smart-list-item value=\"currentyear\">Current Year</smart-list-item>\n          <smart-list-item value=\"customrange\">Custom Range</smart-list-item>\n        </smart-drop-down-list>\n      </div>\n\n      <div *ngIf=\"endisDatePurchase\">\n        <ion-input [(ngModel)]=\"purchaseFrom\" type=\"date\" class=\"input\">\n          <span style=\"color: Blue; margin-left: 5px\">From Date:</span>\n        </ion-input>\n      </div>\n      <div *ngIf=\"endisDatePurchase\">\n        <ion-input [(ngModel)]=\"purchaseTo\" type=\"date\" class=\"input\">\n          <span style=\"color: Blue; margin-left: 5px\">To Date:</span>\n        </ion-input>\n      </div>\n      <div>\n        <ion-button\n          (click)=\"Submit('purchase')\"\n          [disabled]=\"purchaseFrom == undefined||purchaseTo == undefined\"\n          *ngIf=\"endisDatePurchase\"\n          size=\"1\"\n          size=\"small\"\n          class=\"Akash\"\n          >Submit</ion-button\n        >\n      </div>\n    </ion-row>\n\n    <ion-row>\n      <ion-col style=\"margin-left: 14%; margin-top: 1%\"\n        >Total Count: {{deviceTotalPurchaseCounts?.totalpurchased}}</ion-col\n      >\n      <ion-col style=\"margin-left: 14%; margin-top: 1%\"\n        >Activated Count: {{deviceTotalPurchaseCounts?.totalactivated}}</ion-col\n      >\n    </ion-row>\n\n    <app-dealer-stacked-chart\n      [barName]=\"'Device Purchased'\"\n      [dealerName]=\"dealerNamePurchase\"\n      [header]=\"'Device Purchased'\"\n      [toDate]=\"toDatePurchase\"\n      [fromDate]=\"fromDatePurchase\"\n      (deviceTotalPurchaseCount)=\"deviceTotalPurchaseCount($event)\"\n      [days]=\"purchasedays\"\n    >\n    </app-dealer-stacked-chart>\n  </ion-card>\n\n  <ion-card *ngIf=\"companyId == 'apm-sa'\">\n    <ion-card-title\n      style=\"\n        display: flex;\n        margin-top: 20px;\n        justify-content: center;\n        align-items: center;\n        color: #92a0b3;\n      \"\n      >Sales Dashboard</ion-card-title\n    >\n    <ion-row\n      style=\"\n        margin-top: 3%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      \"\n    >\n      <div>\n        <smart-drop-down-list\n          (change)=\"daysDropDownClick($event,'sales')\"\n          [dropDownPosition]=\"'bottom'\"\n          #daysDropDown3\n          [selectedIndexes]=\"[0]\"\n        >\n          <smart-list-item value=\"currentmonth\">Current Month</smart-list-item>\n          <smart-list-item value=\"lastmonth\">Last Month</smart-list-item>\n          <smart-list-item value=\"currentyear\">Current Year</smart-list-item>\n          <smart-list-item value=\"customrange\">Custom Range</smart-list-item>\n        </smart-drop-down-list>\n      </div>\n      <div>\n        <smart-drop-down-list\n          (change)=\"selectDealer($event,'sales')\"\n          class=\"drop-down-list-modes-demo\"\n          [dataSource]=\"data\"\n          [placeholder]=\"'Select Dealer'\"\n          [filterable]=\"true\"\n          [dropDownPosition]=\"'bottom'\"\n          #dropdownlistDealer1\n        >\n        </smart-drop-down-list>\n      </div>\n      <div *ngIf=\"endisDateSales\">\n        <ion-input [(ngModel)]=\"salesFrom\" type=\"date\" class=\"input\">\n          <span style=\"color: Blue; margin-left: 5px\">From Date:</span>\n        </ion-input>\n      </div>\n      <div *ngIf=\"endisDateSales\">\n        <ion-input [(ngModel)]=\"salesTo\" type=\"date\" class=\"input\">\n          <span style=\"color: Blue; margin-left: 5px\">To Date:</span>\n        </ion-input>\n      </div>\n      <div *ngIf=\"endisDateSales\">\n        <ion-button\n          (click)=\"Submit('sales')\"\n          [disabled]=\"salesFrom == undefined ||salesTo == undefined\"\n          size=\"small\"\n          class=\"Akash\"\n          >Submit</ion-button\n        >\n      </div>\n    </ion-row>\n    <ion-row>\n      <ion-col style=\"margin-left: 14%; margin-top: 1%\"\n        >Total Count: {{deviceTotalActivatedCounts?.totalsales}}</ion-col\n      >\n      <ion-col style=\"margin-left: 14%; margin-top: 1%\"\n        >Activated Count:\n        {{deviceTotalActivatedCounts?.totalactivated}}</ion-col\n      >\n    </ion-row>\n\n    <app-dealer-stacked-chart\n      [dealerName]=\"dealerNameSales\"\n      (deviceTotalActivatedCount)=\"deviceTotalActivatedCount($event)\"\n      [barName]=\"'Device Sales'\"\n      [toDate]=\"toDateSales\"\n      [days]=\"salsedays\"\n      [fromDate]=\"fromDateSales\"\n      [header]=\"'Device Sales'\"\n    ></app-dealer-stacked-chart>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-title\n      style=\"\n        display: flex;\n        margin-top: 20px;\n        justify-content: center;\n        align-items: center;\n        color: #92a0b3;\n      \"\n      >Renewal Dashboard</ion-card-title\n    >\n    <ion-row\n      style=\"\n        margin-top: 3%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      \"\n    >\n      <div>\n        <smart-drop-down-list\n          (change)=\"daysDropDownClick($event,'renewal')\"\n          [dropDownPosition]=\"'bottom'\"\n          #daysDropDown4\n          [selectedIndexes]=\"[0]\"\n        >\n          <smart-list-item value=\"currentmonth\">Current Month</smart-list-item>\n          <smart-list-item value=\"lastmonth\">Last Month</smart-list-item>\n          <smart-list-item value=\"currentyear\">Current Year</smart-list-item>\n          <smart-list-item value=\"customrange\">Custom Range</smart-list-item>\n        </smart-drop-down-list>\n      </div>\n\n      <div *ngIf=\"companyId == 'apm-sa'\">\n        <smart-drop-down-list\n          [dataSource]=\"data\"\n          (change)=\"selectDealer($event,'renewal')\"\n          class=\"drop-down-list-modes-demo\"\n          [placeholder]=\"'Select Dealer'\"\n          [filterable]=\"true\"\n          [dropDownPosition]=\"'bottom'\"\n          #dropdownlistDealer2\n        >\n        </smart-drop-down-list>\n      </div>\n\n      <div *ngIf=\"endisDateRenewal\">\n        <ion-input [(ngModel)]=\"RenewalFrom\" type=\"date\" class=\"input\">\n          <span style=\"color: Blue; margin-left: 5px\">From Date:</span>\n        </ion-input>\n      </div>\n      <div *ngIf=\"endisDateRenewal\">\n        <ion-input [(ngModel)]=\"RenewalTo\" type=\"date\" class=\"input\">\n          <span style=\"color: Blue; margin-left: 5px\">To Date:</span>\n        </ion-input>\n      </div>\n      <div *ngIf=\"endisDateRenewal\">\n        <ion-button\n          (click)=\"Submit('renewal')\"\n          [disabled]=\"RenewalFrom == undefined || RenewalTo == undefined\"\n          size=\"small\"\n          class=\"Akash\"\n          >Submit</ion-button\n        >\n      </div>\n    </ion-row>\n\n    <ion-row>\n      <ion-col style=\"margin-left: 14%; margin-top: 1%\"\n        >Total Count: {{this.endis.totalrenewalcount}}</ion-col\n      >\n      <ion-col style=\"margin-left: 14%; margin-top: 1%\"\n        >Activated Count: {{this.endis.totalrenewalactivecount}}</ion-col\n      >\n    </ion-row>\n    <app-dealer-stacked-chart\n      (endisMappedDevice)=\"endisMapedDevice($event)\"\n      [barName]=\"'Device Renewal'\"\n      [dealerName]=\"dealerNameRenewal\"\n      [toDate]=\"toDateRenewal\"\n      [fromDate]=\"fromDateRenewal\"\n      [header]=\"'Device Renewal'\"\n      [days]=\"renewaldays\"\n    ></app-dealer-stacked-chart>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/esim-dashboards/esim-dashboards.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/delar-application/esim-dashboards/esim-dashboards.module.ts ***!
  \*****************************************************************************/
/*! exports provided: EsimDashboardsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimDashboardsPageModule", function() { return EsimDashboardsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _esim_dashboards_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esim-dashboards.page */ "./src/app/delar-application/esim-dashboards/esim-dashboards.page.ts");
/* harmony import */ var _dealer_component_dealer_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dealer-component/dealer-component.module */ "./src/app/delar-application/dealer-component/dealer-component.module.ts");








const routes = [
    {
        path: '',
        component: _esim_dashboards_page__WEBPACK_IMPORTED_MODULE_6__["EsimDashboardsPage"]
    }
];
let EsimDashboardsPageModule = class EsimDashboardsPageModule {
};
EsimDashboardsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _dealer_component_dealer_component_module__WEBPACK_IMPORTED_MODULE_7__["DealerComponentsModule"]
        ],
        declarations: [_esim_dashboards_page__WEBPACK_IMPORTED_MODULE_6__["EsimDashboardsPage"]]
    })
], EsimDashboardsPageModule);



/***/ }),

/***/ "./src/app/delar-application/esim-dashboards/esim-dashboards.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/delar-application/esim-dashboards/esim-dashboards.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "smart-drop-down-list {\n  min-height: 35px;\n  width: 250px;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  --padding-top: 1px;\n  height: 35px;\n  --padding-bottom: 0px;\n  --padding-start: 6px;\n}\n\ndiv {\n  margin-right: 8px;\n  margin-left: 19px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1kYXNoYm9hcmRzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGVzaW0tZGFzaGJvYXJkc1xcZXNpbS1kYXNoYm9hcmRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1kYXNoYm9hcmRzL2VzaW0tZGFzaGJvYXJkcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FDRUY7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1kYXNoYm9hcmRzL2VzaW0tZGFzaGJvYXJkcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzbWFydC1kcm9wLWRvd24tbGlzdCB7XHJcbiAgbWluLWhlaWdodDogMzVweDtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuLmlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgLS1wYWRkaW5nLXRvcDogMXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA2cHg7XHJcbn1cclxuZGl2IHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBtYXJnaW4tbGVmdDogMTlweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuIiwic21hcnQtZHJvcC1kb3duLWxpc3Qge1xuICBtaW4taGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIC0tcGFkZGluZy10b3A6IDFweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNnB4O1xufVxuXG5kaXYge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDE5cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/esim-dashboards/esim-dashboards.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/delar-application/esim-dashboards/esim-dashboards.page.ts ***!
  \***************************************************************************/
/*! exports provided: EsimDashboardsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimDashboardsPage", function() { return EsimDashboardsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var smart_webcomponents_angular_dropdownlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! smart-webcomponents-angular/dropdownlist */ "./node_modules/smart-webcomponents-angular/fesm2015/smart-webcomponents-angular-dropdownlist.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");






let EsimDashboardsPage = class EsimDashboardsPage {
    constructor(ajaxService, router, platform) {
        this.ajaxService = ajaxService;
        this.router = router;
        this.platform = platform;
        this.data = [];
        this.days = "currentmonth";
        this.salsedays = "currentmonth";
        this.purchasedays = "currentmonth";
        this.renewaldays = "currentmonth";
        this.tempDealer = "";
        this.endisDate = false;
        this.endisDateSales = false;
        this.endisDateRenewal = false;
        this.endisDatePurchase = false;
        this.deviceTotalActivatedCounts = {};
        this.dealer = "";
        this.dealersData = [];
        this.fromDate = "";
        this.toDate = "";
        this.fromDateSales = "";
        this.toDateSales = "";
        this.fromDateRenewal = "";
        this.toDateRenewal = "";
        this.fromDatePurchase = "";
        this.toDatePurchase = "";
        this.companyData = "apm";
        this.companyId = localStorage.getItem("userName");
        this.filter = "currentmonth";
        this.filter1 = "currentmonth";
        this.dealerName = "";
        this.dealerNameSales = "";
        this.dealerNameRenewal = "";
        this.dealerNamePurchase = "";
        this.endis = {};
        this.barRender = [];
        // @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
        // @ViewChild('dropdownlist1', { read: DropDownListComponent, static: false }) dropdownlist1!: DropDownListComponent;
        this.deviceTotalPurchaseCounts = {};
    }
    endisMapedDevice(d) {
        console.log(d);
        this.endis = d;
    }
    ngAfterViewInit() { }
    getSensoriseData() {
        let url = "https://mvt.apmkingstrack.com/fleettracking/esim/getServiceProvider";
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.barRender = res;
        });
    }
    ngOnInit() {
        console.log(this.purchaseFrom);
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        if (this.companyId == "apm-sa") {
            this.dealer = this.companyData;
        }
        else {
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
        let url = "https://mvt.apmkingstrack.com/fleettracking/global/getesimdealerlist";
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
        }
        else if (data == "renewal") {
            this.fromDateRenewal = this.RenewalFrom;
            this.toDateRenewal = this.RenewalTo;
            this.renewaldays = this.daysDropDown4.value[0].value;
            if (this.companyId == "apm-sa") {
                this.dealerNameRenewal = this.dropdownlistDealer2.value[0].value;
            }
        }
        else if (data == "purchase") {
            this.fromDatePurchase = this.purchaseFrom;
            this.toDatePurchase = this.purchaseTo;
            this.purchasedays = this.daysDropDown2.value[0].value;
        }
        else if (data == "sensorise") {
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
        }
        else if (header == "sales") {
            if (this.endisDateSales == false) {
                this.dealerNameSales = this.dropdownlistDealer1.value[0].value;
            }
        }
        else if (header == "renewal") {
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
            }
            else {
                this.endisDate = true;
            }
        }
        else if (header == "sales") {
            if (d.detail.value != "customrange") {
                this.fromDateSales = "";
                this.toDateSales = "";
                this.salesFrom = undefined;
                this.salesTo = undefined;
                this.salsedays = this.daysDropDown3.value[0].value;
                this.endisDateSales = false;
            }
            else {
                this.endisDateSales = true;
            }
        }
        else if (header == "renewal") {
            if (d.detail.value != "customrange") {
                this.RenewalFrom = undefined;
                this.RenewalTo = undefined;
                this.fromDateRenewal = "";
                this.toDateRenewal = "";
                this.renewaldays = this.daysDropDown4.value[0].value;
                this.endisDateRenewal = false;
            }
            else {
                this.endisDateRenewal = true;
            }
        }
        else if (header == "purchase") {
            if (d.detail.value != "customrange") {
                this.purchaseFrom = undefined;
                this.purchaseTo = undefined;
                this.fromDatePurchase = "";
                this.toDatePurchase = "";
                this.purchasedays = this.daysDropDown2.value[0].value;
                this.endisDatePurchase = false;
            }
            else {
                this.endisDatePurchase = true;
            }
        }
    }
};
EsimDashboardsPage.ctorParameters = () => [
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("dropdownlistDealer1", {
        read: smart_webcomponents_angular_dropdownlist__WEBPACK_IMPORTED_MODULE_4__["DropDownListComponent"],
        static: false,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", smart_webcomponents_angular_dropdownlist__WEBPACK_IMPORTED_MODULE_4__["DropDownListComponent"])
], EsimDashboardsPage.prototype, "dropdownlistDealer1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("dropdownlistDealer2", {
        read: smart_webcomponents_angular_dropdownlist__WEBPACK_IMPORTED_MODULE_4__["DropDownListComponent"],
        static: false,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", smart_webcomponents_angular_dropdownlist__WEBPACK_IMPORTED_MODULE_4__["DropDownListComponent"])
], EsimDashboardsPage.prototype, "dropdownlistDealer2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("daysDropDown1", { read: smart_webcomponents_angular_dropdownlist__WEBPACK_IMPORTED_MODULE_4__["DropDownListComponent"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", smart_webcomponents_angular_dropdownlist__WEBPACK_IMPORTED_MODULE_4__["DropDownListComponent"])
], EsimDashboardsPage.prototype, "daysDropDown1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("daysDropDown2", { read: smart_webcomponents_angular_dropdownlist__WEBPACK_IMPORTED_MODULE_4__["DropDownListComponent"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", smart_webcomponents_angular_dropdownlist__WEBPACK_IMPORTED_MODULE_4__["DropDownListComponent"])
], EsimDashboardsPage.prototype, "daysDropDown2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("daysDropDown3", { read: smart_webcomponents_angular_dropdownlist__WEBPACK_IMPORTED_MODULE_4__["DropDownListComponent"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", smart_webcomponents_angular_dropdownlist__WEBPACK_IMPORTED_MODULE_4__["DropDownListComponent"])
], EsimDashboardsPage.prototype, "daysDropDown3", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("daysDropDown4", { read: smart_webcomponents_angular_dropdownlist__WEBPACK_IMPORTED_MODULE_4__["DropDownListComponent"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", smart_webcomponents_angular_dropdownlist__WEBPACK_IMPORTED_MODULE_4__["DropDownListComponent"])
], EsimDashboardsPage.prototype, "daysDropDown4", void 0);
EsimDashboardsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-esim-dashboards",
        template: __webpack_require__(/*! raw-loader!./esim-dashboards.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-dashboards/esim-dashboards.page.html"),
        styles: [__webpack_require__(/*! ./esim-dashboards.page.scss */ "./src/app/delar-application/esim-dashboards/esim-dashboards.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], EsimDashboardsPage);



/***/ })

}]);
//# sourceMappingURL=esim-dashboards-esim-dashboards-module-es2015.js.map