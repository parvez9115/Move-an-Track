(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trip-summary-trip-summary-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/trip-summary/trip-summary.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/trip-summary/trip-summary.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-header>\r\n  <ion-toolbar  mode=\"md\" *ngIf=\"myPlatform !='desktop' || filterValue == 'All'\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size='2'>\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-col>\r\n        <ion-col size=\"7\" style=\"padding-top: 14px;\">\r\n          <ion-label> Trip Summary </ion-label>\r\n        </ion-col>\r\n        <!-- <ion-col  style=\"text-align: right;\" size=\"2\">\r\n          <ion-button color=\"dark\" size=\"small\"  (click)='startTrip()'>START TRIP</ion-button>\r\n        </ion-col> -->\r\n        <ion-col *ngIf=\"myPlatform =='desktop'\">\r\n          <ion-img [src]=\"app.logo\"></ion-img>\r\n        </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n  </ion-header>\r\n<ion-content>\r\n<app-vts-trip-summary></app-vts-trip-summary>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/trip-summary/trip-summary.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/trip-summary/trip-summary.module.ts ***!
  \*****************************************************/
/*! exports provided: TripSummaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripSummaryPageModule", function() { return TripSummaryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trip_summary_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trip-summary.page */ "./src/app/trip-summary/trip-summary.page.ts");








const routes = [
    {
        path: '',
        component: _trip_summary_page__WEBPACK_IMPORTED_MODULE_7__["TripSummaryPage"]
    }
];
let TripSummaryPageModule = class TripSummaryPageModule {
};
TripSummaryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_trip_summary_page__WEBPACK_IMPORTED_MODULE_7__["TripSummaryPage"]]
    })
], TripSummaryPageModule);



/***/ }),

/***/ "./src/app/trip-summary/trip-summary.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/trip-summary/trip-summary.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyaXAtc3VtbWFyeS90cmlwLXN1bW1hcnkucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/trip-summary/trip-summary.page.ts":
/*!***************************************************!*\
  !*** ./src/app/trip-summary/trip-summary.page.ts ***!
  \***************************************************/
/*! exports provided: TripSummaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripSummaryPage", function() { return TripSummaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");




let TripSummaryPage = class TripSummaryPage {
    constructor(platform) {
        this.platform = platform;
        this.app = { logo: 'logo.png' };
    }
    ngOnInit() {
        this.app["logo"] = localStorage.companyLogo;
        this.myPlatform = this.platform.platforms()[0];
        this.appName = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["app"].appName;
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
    }
};
TripSummaryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TripSummaryPage.prototype, "vinGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TripSummaryPage.prototype, "gridLiveChange", void 0);
TripSummaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trip-summary',
        template: __webpack_require__(/*! raw-loader!./trip-summary.page.html */ "./node_modules/raw-loader/index.js!./src/app/trip-summary/trip-summary.page.html"),
        styles: [__webpack_require__(/*! ./trip-summary.page.scss */ "./src/app/trip-summary/trip-summary.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], TripSummaryPage);



/***/ })

}]);
//# sourceMappingURL=trip-summary-trip-summary-module-es2015.js.map