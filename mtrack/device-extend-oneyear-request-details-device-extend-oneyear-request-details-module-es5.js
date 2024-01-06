(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-extend-oneyear-request-details-device-extend-oneyear-request-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-extend-oneyear-request-details/device-extend-oneyear-request-details.page.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-extend-oneyear-request-details/device-extend-oneyear-request-details.page.html ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons\n      *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\"\n      slot=\"start\"\n    >\n      <ion-icon\n        routerLink=\"/tabs-login/esim-dashboard\"\n        name=\"arrow-back\"\n        style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-row>\n      <ion-title *ngIf=\"myPlatform != 'desktop'\">Extend 1 Yr Request</ion-title>\n      <ion-title *ngIf=\"myPlatform == 'desktop'\">Request Details</ion-title>\n      <ion-col\n        *ngIf=\"myPlatform == 'desktop'\"\n        size=\"4\"\n        style=\"text-align: right\"\n      >\n        <ion-button class=\"submitBtn\" size=\"small\" (click)=\"newfunc()\"\n          >Export</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <ion-row *ngIf=\"myPlatform == 'desktop'\" class=\"upperRow\">\n    <ion-col\n      [ngClass]=\"{selectedUpperCol:'true'}\"\n      routerLink=\"/tabs-login/esim-dealer-detail\"\n      routerLinkActive=\"selected\"\n      size=\"1.9\"\n    >\n      <ion-label>Ca Request</ion-label>\n    </ion-col>\n    <ion-col\n      [ngClass]=\"{selectedUpperCol:'true'}\"\n      routerLink=\"/tabs-login/esim-renewal\"\n      routerLinkActive=\"selected\"\n      size=\"1.9\"\n    >\n      <ion-label>Renewal Request</ion-label>\n    </ion-col>\n    <ion-col\n      [ngClass]=\"{selectedUpperCol:'true'}\"\n      routerLink=\"/tabs-login/device-topup-request-details\"\n      routerLinkActive=\"selected\"\n      size=\"1.9\"\n    >\n      <ion-label>Topup Request</ion-label>\n    </ion-col>\n    <ion-col\n      [ngClass]=\"{selectedUpperCol:'true'}\"\n      routerLink=\"/tabs-login/device-extend-oneyear-request-details\"\n      routerLinkActive=\"selected\"\n      size=\"1.9\"\n    >\n      <ion-label>Extend 1 Yr Request</ion-label>\n    </ion-col>\n    <ion-col\n      [ngClass]=\"{selectedUpperCol:'true'}\"\n      routerLink=\"/tabs-login/device-certificate-request\"\n      routerLinkActive=\"selected\"\n      size=\"1.9\"\n    >\n      <ion-label>Certificate Request</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"padding: 10px\">\n    <ion-col>\n      <jqxGrid\n        #myGrid\n        (onRowclick)=\"myGridOnRowclick($event)\"\n        [theme]=\"'material'\"\n        [width]=\"'99%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [columns]=\"columns\"\n        [enablebrowserselection]=\"true\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n\n  <ion-fab\n    *ngIf=\"arrow\"\n    style=\"margin-right: 1%; margin-bottom: 9%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToTop()\">\n      <ion-icon class=\"icon\" name=\"arrow-up\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab\n    *ngIf=\"arrow\"\n    style=\"margin-right: 1%; margin-bottom: 5%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToBottom()\">\n      <ion-icon class=\"icon\" name=\"arrow-down\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/device-extend-oneyear-request-details/device-extend-oneyear-request-details.module.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/delar-application/device-extend-oneyear-request-details/device-extend-oneyear-request-details.module.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: DeviceExtendOneyearRequestDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceExtendOneyearRequestDetailsPageModule", function() { return DeviceExtendOneyearRequestDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _device_extend_oneyear_request_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-extend-oneyear-request-details.page */ "./src/app/delar-application/device-extend-oneyear-request-details/device-extend-oneyear-request-details.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");








var routes = [
    {
        path: "",
        component: _device_extend_oneyear_request_details_page__WEBPACK_IMPORTED_MODULE_6__["DeviceExtendOneyearRequestDetailsPage"],
    },
];
var DeviceExtendOneyearRequestDetailsPageModule = /** @class */ (function () {
    function DeviceExtendOneyearRequestDetailsPageModule() {
    }
    DeviceExtendOneyearRequestDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_device_extend_oneyear_request_details_page__WEBPACK_IMPORTED_MODULE_6__["DeviceExtendOneyearRequestDetailsPage"]],
        })
    ], DeviceExtendOneyearRequestDetailsPageModule);
    return DeviceExtendOneyearRequestDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/device-extend-oneyear-request-details/device-extend-oneyear-request-details.page.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/delar-application/device-extend-oneyear-request-details/device-extend-oneyear-request-details.page.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fabbutton {\n  --background: whitesmoke;\n  --background-hover: grey;\n}\n\n.icon {\n  color: black;\n}\n\n.icon:hover {\n  color: white;\n}\n\n.fabbutton {\n  --background: whitesmoke;\n  --background-hover: grey;\n}\n\n.icon {\n  color: black;\n}\n\n.icon:hover {\n  color: white;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -11px;\n  right: -2px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -15px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.upperCol {\n  text-align: center;\n  border-radius: 8px;\n  margin: 2px;\n  color: black;\n  font-family: sans-serif;\n  font-size: 13px;\n  text-transform: uppercase;\n}\n\n.upperRow {\n  background: #eeeeee;\n  padding: 1px;\n  border-bottom: 2px solid #7d67f8;\n  height: 56px;\n}\n\n.selectedUpperCol {\n  background: #ebebeb;\n  text-align: center;\n  margin-right: 2px;\n  color: black;\n  font-family: sans-serif;\n  cursor: pointer;\n  font-size: 10px;\n  font-weight: bold;\n  text-transform: uppercase;\n  border-right: 1px solid #b5b5b5;\n  align-self: center;\n  padding-top: 8px;\n  margin-top: 15px;\n}\n\n.selected {\n  margin-top: 20px;\n  color: black;\n  background-color: #ffffff;\n  border-bottom: none;\n  border-top: 2px solid #7d67f8;\n  border-left: 2px solid #7d67f8;\n  border-right: 2px solid #7d67f8;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 11px;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLWV4dGVuZC1vbmV5ZWFyLXJlcXVlc3QtZGV0YWlscy9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxkZXZpY2UtZXh0ZW5kLW9uZXllYXItcmVxdWVzdC1kZXRhaWxzXFxkZXZpY2UtZXh0ZW5kLW9uZXllYXItcmVxdWVzdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLWV4dGVuZC1vbmV5ZWFyLXJlcXVlc3QtZGV0YWlscy9kZXZpY2UtZXh0ZW5kLW9uZXllYXItcmVxdWVzdC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7QUNHRjs7QUREQTtFQUNFLHdCQUFBO0VBQ0Esd0JBQUE7QUNJRjs7QURGQTtFQUNFLFlBQUE7QUNLRjs7QURIQTtFQUNFLFlBQUE7QUNNRjs7QURKQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNPRjs7QURKQTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ09GOztBREpBO0VBQ0UscUJBQUE7QUNPRjs7QURKQTtFQUNFO0lBQ0UsZ0JBQUE7RUNPRjs7RURKQTtJQUNFLFVBQUE7RUNPRjtBQUNGOztBREpBO0VBQ0U7SUFDRSxTQUFBO0VDTUY7O0VESEE7SUFDRSxVQUFBO0VDTUY7QUFDRjs7QURIQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0tGOztBREZBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUNLRjtBQUNGOztBREZBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUNJRjtBQUNGOztBRERBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNHRjs7QUREQTs7RUFFRSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSUY7O0FEREE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSUY7O0FEREE7RUFDRSwyQkFBQTtBQ0lGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ0lGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNJRjs7QUREQTtFQUNFLG1CQUFBO0FDSUY7O0FEREE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0lGOztBRERBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDSUY7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLWV4dGVuZC1vbmV5ZWFyLXJlcXVlc3QtZGV0YWlscy9kZXZpY2UtZXh0ZW5kLW9uZXllYXItcmVxdWVzdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWJidXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogZ3JleTtcbn1cbi5pY29uIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmljb246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG4uZmFiYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGdyZXk7XG59XG4uaWNvbiB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5pY29uOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBtYXJnaW46IDdweDtcbn1cblxuLnN1Ym1pdEJ0biB7XG4gIG1hcmdpbjogMHB4IDE0cHggMHB4IDBweDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogIzdjNjhmODtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjN2M2OGY4O1xuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcbn1cblxuLnN1Ym1pdGJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cblxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MzIwcHgpIGFuZChtYXgtd2lkdGg6MTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG5cbi5sYWJlbC1oZWFkIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcbn1cbi5wZGYtd3JhcHBlcixcbi5leGNlbC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2V4Y2VsTmV3LnN2Z1wiKSBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5mYWItYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiBsYXZlbmRlcjtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTExcHg7XG4gIHJpZ2h0OiAtMnB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uZmFiLWJ0bjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2I2YjZiNjtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi51cHBlckNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udXBwZXJSb3cge1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICBwYWRkaW5nOiAxcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBoZWlnaHQ6IDU2cHg7XG59XG5cbi8vIC5zZWxlY3RlZFVwcGVyQ29sIHsvLyAgIGJhY2tncm91bmQ6ICNmZmZmZmY7Ly8gICB0ZXh0LWFsaWduOiBjZW50ZXI7Ly8gICBib3JkZXItcmFkaXVzOiA4cHg7Ly8gICBtYXJnaW46IDEwcHg7Ly8gICBjb2xvcjogYmxhY2s7Ly8gICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsvLyAgIGN1cnNvcjogcG9pbnRlcjsvLyAgIGZvbnQtc2l6ZTogMTNweDsvLyAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7Ly8gICBhbGlnbi1zZWxmOiBjZW50ZXI7Ly8gfVxuLy8gLnNlbGVjdGVkVXBwZXJDb2w6aG92ZXIgey8vICAgY29sb3I6IHJnYigwLCAwLCAwKTsvLyAgIGJhY2tncm91bmQtY29sb3I6ICNhMDk1ZTc7Ly8gfVxuLy8gLnNlbGVjdGVkIHsvLyAgIGNvbG9yOiB3aGl0ZTsvLyAgIGJhY2tncm91bmQtY29sb3I6ICMzYjFkZmY7Ly8gfVxuLnNlbGVjdGVkVXBwZXJDb2wge1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiNWI1YjU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLy8gLnNlbGVjdGVkVXBwZXJDb2w6aG92ZXIgey8vICAgY29sb3I6IHJnYigwLCAwLCAwKTsvLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7Ly8gICBmb250LXNpemU6IDEycHg7Ly8gICBmb250LXdlaWdodDogYm9sZDsvLyAgIHRyYW5zaXRpb246IDAuM3M7Ly8gICBwYWRkaW5nLXRvcDogOHB4Oy8vICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHg7Ly8gICBtYXJnaW4tdG9wOiAyMHB4Oy8vIH1cbi5zZWxlY3RlZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzdkNjdmODtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzdkNjdmODtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTFweDtcbiAgYm94LXNoYWRvdzogMHB4IC00cHggN3B4ICNjMGI1ZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuIiwiLmZhYmJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBncmV5O1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmljb246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYWJidXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogZ3JleTtcbn1cblxuLmljb24ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5pY29uOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIG1hcmdpbjogN3B4O1xufVxuXG4uc3VibWl0QnRuIHtcbiAgbWFyZ2luOiAwcHggMTRweCAwcHggMHB4O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM3YzY4Zjg7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xufVxuXG4uc3VibWl0YnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNjI1MmVlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtNXB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiA4cHggMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbi5sYWJlbC1oZWFkIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcbn1cblxuLnBkZi13cmFwcGVyLFxuLmV4Y2VsLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZXhjZWxOZXcuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmZhYi1idG4ge1xuICAtLWJhY2tncm91bmQ6IGxhdmVuZGVyO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTFweDtcbiAgcmlnaHQ6IC0ycHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5mYWItYnRuOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjYjZiNmI2O1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC04MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnVwcGVyQ29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi51cHBlclJvdyB7XG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gIHBhZGRpbmc6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGhlaWdodDogNTZweDtcbn1cblxuLnNlbGVjdGVkVXBwZXJDb2wge1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiNWI1YjU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnNlbGVjdGVkIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzdkNjdmODtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMXB4O1xuICBib3gtc2hhZG93OiAwcHggLTRweCA3cHggI2MwYjVmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/device-extend-oneyear-request-details/device-extend-oneyear-request-details.page.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/delar-application/device-extend-oneyear-request-details/device-extend-oneyear-request-details.page.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: DeviceExtendOneyearRequestDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceExtendOneyearRequestDetailsPage", function() { return DeviceExtendOneyearRequestDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









var DeviceExtendOneyearRequestDetailsPage = /** @class */ (function () {
    function DeviceExtendOneyearRequestDetailsPage(ajaxService, router, formBuilder, commonService, modalController, platform, ete, alertController) {
        this.ajaxService = ajaxService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.modalController = modalController;
        this.platform = platform;
        this.ete = ete;
        this.alertController = alertController;
        this.companyId = localStorage.getItem("userName");
        this.show = false;
        this.arrow = false;
    }
    DeviceExtendOneyearRequestDetailsPage.prototype.scrollToTop = function () {
        this.content.scrollToTop(500);
    };
    DeviceExtendOneyearRequestDetailsPage.prototype.scrollToBottom = function () {
        this.content.scrollToBottom(500);
    };
    DeviceExtendOneyearRequestDetailsPage.prototype.logScrolling = function (ev) {
        if (ev.detail.scrollTop > 2) {
            this.arrow = true;
        }
        if (ev.detail.scrollTop < 2) {
            this.arrow = false;
        }
    };
    DeviceExtendOneyearRequestDetailsPage.prototype.getdatas = function () {
        var _this = this;
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/esim/getDealerExtendOneYearAll?companyid=apm" +
            "&dealer=" +
            localStorage.getItem("userName");
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.tableData = res;
            _this.commonService.dismissLoader();
            _this.renderer = function (row, column, value) {
                if (value == "" || null || undefined) {
                    return "--";
                }
                else {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                        value +
                        "</span>");
                }
            };
            _this.source = { localdata: _this.tableData };
            _this.dataAdapter = new jqx.dataAdapter(_this.source);
            _this.columns = [
                {
                    text: "Request No",
                    datafield: "renewalrequestid",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "VLTD No",
                    datafield: "vltdsno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "Invoice No",
                    datafield: "invoiceno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "ICCID No",
                    datafield: "iccidno1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
                },
                {
                    text: "IMEI No",
                    datafield: "imei",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "SIM 1",
                    datafield: "sim1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "SIM 2",
                    datafield: "sim2",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "Plate No",
                    datafield: "plateno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "Contact No",
                    datafield: "contactno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "Extend 1 Yr Requested",
                    datafield: "validityperiod",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "Extend 1 Yr Requested Date",
                    datafield: "renewalrequestdate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 180,
                },
                {
                    text: "Requested By",
                    datafield: "renewalrequestby",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "Current Dealer",
                    datafield: "companyid",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 155,
                },
                {
                    text: "",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 90,
                    cellsrenderer: function () {
                        return _this.myPlatform == "desktop"
                            ? "Remove"
                            : "<button>Remove</button>";
                    },
                    buttonclick: function (row) {
                        _this.remove();
                    },
                },
            ];
        });
    };
    DeviceExtendOneyearRequestDetailsPage.prototype.myGridOnRowclick = function (event) {
        this.selectedRow = event.args.row.bounddata;
    };
    DeviceExtendOneyearRequestDetailsPage.prototype.remove = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Confirm",
                            backdropDismiss: false,
                            message: "Are you sure want to Remove?",
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                    handler: function (data) {
                                        _this.myGrid.clearselection();
                                        _this.selectedRow = "";
                                    },
                                },
                                {
                                    text: "Ok",
                                    handler: function (data) {
                                        _this.delete();
                                    },
                                },
                            ],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // delete1() {
    //   var url =
    //     serverUrl.web +
    //     "/esim/deleteSingleExtendOneYearRequest?requestid=" +
    //     this.selectedRow.renewalrequestid +
    //     "&imei=" +
    //     this.selectedRow.imei;
    //   this.ajaxService.ajaxGet(url).subscribe((res) => {
    //     this.commonService.showConfirm(res.message);
    //     this.myGrid.clearselection();
    //     this.selectedRow = "";
    //   });
    // }
    DeviceExtendOneyearRequestDetailsPage.prototype.delete = function () {
        var _this = this;
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/esim/deleteSingleExtendOneYearRequest?requestid=" +
            this.selectedRow.renewalrequestid +
            "&imei=" +
            this.selectedRow.imei;
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            _this.commonService.dismissLoader();
            if (res.message == "Extend One Year Request Deleted Successfully") {
                _this.commonService.showConfirm("Extend One Year Request Removed Successfully");
                _this.myGrid.clearselection();
                _this.selectedRow = "";
                _this.getdatas();
            }
            else {
                _this.commonService.showConfirm(res.message);
            }
        });
    };
    DeviceExtendOneyearRequestDetailsPage.prototype.newfunc = function () {
        var data = this.tableData;
        console.log(this.myGrid);
        var coloumnArray = [];
        this.myGrid.attrColumns.map(function (p) {
            coloumnArray.push(p.datafield);
        });
        for (var i = 0; i < data.length; i++) {
            var k = Object.keys(data[i]);
            for (var j = 0; j < k.length; j++) {
                if (coloumnArray.includes(k[j]) == false) {
                    delete data[i][k[j].toString()];
                }
            }
        }
        var forExcel = [];
        data.map(function (val) {
            var newArray = Object.values(val);
            forExcel.push(newArray);
        });
        var Header = Object.keys(data[0]);
        var reportData = {
            title: "Extend One Year Request",
            data: forExcel,
            headers: Header,
        };
        this.ete.exportExcel(reportData);
    };
    DeviceExtendOneyearRequestDetailsPage.prototype.ngAfterViewInit = function () {
        this.myGrid.horizontalscrollbarstep(["70"]);
        this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
    };
    DeviceExtendOneyearRequestDetailsPage.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
    };
    DeviceExtendOneyearRequestDetailsPage.prototype.ionViewWillEnter = function () {
        this.getdatas();
    };
    DeviceExtendOneyearRequestDetailsPage.ctorParameters = function () { return [
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeviceExtendOneyearRequestDetailsPage.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeviceExtendOneyearRequestDetailsPage.prototype, "content", void 0);
    DeviceExtendOneyearRequestDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-device-extend-oneyear-request-details",
            template: __webpack_require__(/*! raw-loader!./device-extend-oneyear-request-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-extend-oneyear-request-details/device-extend-oneyear-request-details.page.html"),
            styles: [__webpack_require__(/*! ./device-extend-oneyear-request-details.page.scss */ "./src/app/delar-application/device-extend-oneyear-request-details/device-extend-oneyear-request-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], DeviceExtendOneyearRequestDetailsPage);
    return DeviceExtendOneyearRequestDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=device-extend-oneyear-request-details-device-extend-oneyear-request-details-module-es5.js.map