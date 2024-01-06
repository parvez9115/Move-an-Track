(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-return-details-device-return-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-return-details/device-return-details.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-return-details/device-return-details.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons\n      *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\"\n      slot=\"start\"\n    >\n      <ion-icon\n        routerLink=\"/tabs-login/esim-dashboard\"\n        name=\"arrow-back\"\n        style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-row>\n      <ion-title>Device Return Details</ion-title>\n      <ion-col *ngIf=\"myPlatform == 'desktop'\">\n        <ion-row style=\"margin: 0px; padding: 0; float: right\">\n          <ion-col style=\"margin-top: 0\" class=\"tooltip\">\n            <ion-fab-button\n              size=\"small\"\n              class=\"fab-btn\"\n              href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/EsimReturnIMEI.xlsx\"\n              download=\"sample.xlsx\"\n            >\n              <div class=\"excel-wrapper\"></div>\n            </ion-fab-button>\n            <span class=\"tooltiptext\">Excel-Format</span>\n          </ion-col>\n          <ion-col style=\"margin-top: 0; text-align: right\">\n            <ion-button class=\"submitBtn\" size=\"small\" (click)=\"newfunc()\"\n              >Export</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"wrapper-container\">\n    <ion-col>\n      <form [formGroup]=\"returnForm\">\n        <ion-row class=\"form-field\">\n          <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\">\n            <ion-label class=\"label-head\">Box No:</ion-label>\n            <ion-input\n              type=\"text\"\n              placeholder=\"Enter the Box No\"\n              formControlName=\"boxno\"\n              class=\"input\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\">\n            <ion-label class=\"label-head\">IMEI No:</ion-label>\n            <ion-input\n              type=\"text\"\n              placeholder=\"Enter the Imei No\"\n              formControlName=\"imeino\"\n              class=\"input\"\n            ></ion-input>\n          </ion-col>\n          <ion-col\n            size=\"12\"\n            size-lg=\"2.4\"\n            size-md=\"2.4\"\n            style=\"margin: 25px 0px 0px; text-align: center; align-self: center\"\n          >\n            <ion-button\n              class=\"submitbtn\"\n              (click)=\"SearchData()\"\n              [disabled]=\"returnForm.value.boxno  == '' && returnForm.value.imeino  == ''\"\n              >Submit</ion-button\n            >\n            <ion-button class=\"submitbtn\" (click)=\"clear()\">Clear</ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <form [formGroup]=\"bulkreturn\">\n        <ion-row class=\"form-field\">\n          <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\">\n            <ion-label class=\"label-head\">File Upload:</ion-label>\n            <input\n              type=\"file\"\n              (change)=\"onFileChange($event)\"\n              formControlName=\"fileupload\"\n              class=\"documents\"\n            />\n          </ion-col>\n\n          <ion-col\n            size=\"12\"\n            size-lg=\"2.4\"\n            size-md=\"2.4\"\n            style=\"margin: 25px 0px 0px; text-align: center; align-self: center\"\n          >\n            <ion-button\n              class=\"submitbtn\"\n              (click)=\"submitwithfile()\"\n              [disabled]=\"bulkreturn.value.fileupload  == ''\"\n              >Submit</ion-button\n            >\n            <ion-button class=\"submitbtn\" (click)=\"fileclear()\"\n              >Clear</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"show\">\n    <ion-col>\n      <jqxGrid\n        #myGrid\n        (onRowclick)=\"myGridOnRowSelect($event)\"\n        [theme]=\"'material'\"\n        [width]=\"'99%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [columns]=\"columns\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columnsresize]=\"true\"\n        [enablebrowserselection]=\"true\"\n        [enabletooltips]=\"true\"\n        [pagesizeoptions]=\"page\"\n        [pageable]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/device-return-details/device-return-details.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/device-return-details/device-return-details.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: DeviceReturnDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceReturnDetailsPageModule", function() { return DeviceReturnDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _device_return_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-return-details.page */ "./src/app/delar-application/device-return-details/device-return-details.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");








var routes = [
    {
        path: "",
        component: _device_return_details_page__WEBPACK_IMPORTED_MODULE_6__["DeviceReturnDetailsPage"],
    },
];
var DeviceReturnDetailsPageModule = /** @class */ (function () {
    function DeviceReturnDetailsPageModule() {
    }
    DeviceReturnDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_device_return_details_page__WEBPACK_IMPORTED_MODULE_6__["DeviceReturnDetailsPage"]],
        })
    ], DeviceReturnDetailsPageModule);
    return DeviceReturnDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/device-return-details/device-return-details.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/device-return-details/device-return-details.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -1px;\n  right: -3px;\n  height: 30px;\n  width: 30px;\n}\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -10px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n.documents {\n  margin: 19px 10px 0px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLXJldHVybi1kZXRhaWxzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGRldmljZS1yZXR1cm4tZGV0YWlsc1xcZGV2aWNlLXJldHVybi1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLXJldHVybi1kZXRhaWxzL2RldmljZS1yZXR1cm4tZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQ0NGO0FBQ0Y7QURFQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDQUY7QUFDRjtBREVBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0NGO0FEQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDRUY7QURDQTtFQUNFO0lBQ0UsZ0JBQUE7RUNFRjs7RURBQTtJQUNFLFVBQUE7RUNHRjtBQUNGO0FEQUE7RUFDRTtJQUNFLFNBQUE7RUNFRjs7RURBQTtJQUNFLFVBQUE7RUNHRjtBQUNGO0FEREE7RUFDRSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUNHRjtBRERBOztFQUVFLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNJRjtBRERBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0lGO0FEREE7RUFDRSwyQkFBQTtBQ0lGO0FEREE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDSUY7QUREQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDSUY7QUREQTtFQUNFLG1CQUFBO0FDSUY7QURGQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2RldmljZS1yZXR1cm4tZGV0YWlscy9kZXZpY2UtcmV0dXJuLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MzIwcHgpIGFuZChtYXgtd2lkdGg6MTAyM3B4KSB7XHJcbiAgLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbjogOHB4IDAgMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDoxMDI0cHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiA4cHggMXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuLmZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG4ubGFiZWwtaGVhZCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XHJcbn1cclxuLmlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBtYXJnaW46IDdweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgem9vbTogODAlO1xyXG4gIH1cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcbi5zdWJtaXRCdG4ge1xyXG4gIG1hcmdpbjogMHB4IDE0cHggMHB4IDBweDtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjN2M2OGY4O1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgLS1jb2xvcjogIzdjNjhmODtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICM3YzY4Zjg7XHJcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XHJcbn1cclxuLnBkZi13cmFwcGVyLFxyXG4uZXhjZWwtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2V4Y2VsTmV3LnN2Z1wiKSBuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZmFiLWJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsYXZlbmRlcjtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTFweDtcclxuICByaWdodDogLTNweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5mYWItYnRuOmhvdmVyIHtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICBtYXJnaW4tbGVmdDogLTgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuLmRvY3VtZW50cyB7XHJcbiAgbWFyZ2luOiAxOXB4IDEwcHggMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5sYWJlbC1oZWFkIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBtYXJnaW46IDdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uc3VibWl0QnRuIHtcbiAgbWFyZ2luOiAwcHggMTRweCAwcHggMHB4O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM3YzY4Zjg7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xufVxuXG4ucGRmLXdyYXBwZXIsXG4uZXhjZWwtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9leGNlbE5ldy5zdmdcIikgbm8tcmVwZWF0O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uZmFiLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogbGF2ZW5kZXI7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xcHg7XG4gIHJpZ2h0OiAtM3B4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uZmFiLWJ0bjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2I2YjZiNjtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5kb2N1bWVudHMge1xuICBtYXJnaW46IDE5cHggMTBweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/device-return-details/device-return-details.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/device-return-details/device-return-details.page.ts ***!
  \***************************************************************************************/
/*! exports provided: DeviceReturnDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceReturnDetailsPage", function() { return DeviceReturnDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_9__);










var DeviceReturnDetailsPage = /** @class */ (function () {
    function DeviceReturnDetailsPage(platform, formBuilder, modalController, alertController, commonService, ajaxService, ete) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.ete = ete;
        this.page = [];
        this.companyId = localStorage.getItem("userName");
        this.show = false;
        this.name = false;
        this.willDownload = false;
        this.output = "";
        this.excellKeyValid = false;
    }
    DeviceReturnDetailsPage.prototype.createForm = function () {
        this.returnForm = this.formBuilder.group({
            boxno: [""],
            imeino: [""],
        });
        this.bulkreturn = this.formBuilder.group({
            fileupload: [""],
        });
    };
    DeviceReturnDetailsPage.prototype.clear = function () {
        this.returnForm.patchValue({
            boxno: "",
            imeino: "",
        });
        this.show = false;
    };
    DeviceReturnDetailsPage.prototype.fileclear = function () {
        this.bulkreturn.patchValue({
            fileupload: "",
        });
    };
    DeviceReturnDetailsPage.prototype.delete = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/esim/deleteimeino?imeino=" +
            this.selectedRow.imeino +
            "&dealername=" +
            localStorage.getItem("userName");
        this.ajaxService.ajaxGetWithBody(url).subscribe(function (response) {
            var res = JSON.parse(response);
            if (res.message == "Device Successfully Removed") {
                _this.commonService.showConfirm("Device Successfully Removed");
                _this.myGrid.clearselection();
                _this.modalController.dismiss();
                _this.selectedRow = "";
                _this.show = false;
            }
            else {
                _this.commonService.showConfirm(res.message);
            }
        });
    };
    DeviceReturnDetailsPage.prototype.deleteModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Remove",
                            backdropDismiss: false,
                            message: "Are you sure you want to remove?",
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                    handler: function (data) { },
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
    DeviceReturnDetailsPage.prototype.SearchData = function () {
        var _this = this;
        if (this.returnForm.value.imeino != "" ||
            this.returnForm.value.boxno != "") {
            this.page = [];
            this.commonService.presentLoader();
            var imei = this.returnForm.value.imeino != null
                ? this.returnForm.value.imeino
                : "";
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
                "/esim/getImeiNoDetails?boxno=" +
                this.returnForm.value.boxno +
                "&imeino=" +
                imei;
            this.ajaxService.ajaxGet(url).subscribe(function (res) {
                if (_this.returnForm.value.imeino != "" ||
                    _this.returnForm.value.boxno != "") {
                    if (res.message) {
                        _this.commonService.dismissLoader();
                        _this.commonService.showConfirm(res.message);
                        _this.show = false;
                        _this.page = ["100", "200", "500", "1000"];
                    }
                    else {
                        if (res.length == 0) {
                            _this.commonService.showConfirm("No Record Found");
                            _this.commonService.dismissLoader();
                            _this.show = false;
                        }
                        else {
                            _this.tableData = res;
                            _this.commonService.dismissLoader();
                            _this.show = true;
                            _this.page = ["100", "200", "500", "1000"];
                            _this.renderer = function (row, column, value) {
                                if (value == "" || null || undefined || value == ",") {
                                    return "---";
                                }
                                else {
                                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                                        value +
                                        "</span>");
                                }
                            };
                            _this.source = { localdata: _this.tableData };
                            _this.dataAdapter = new jqx.dataAdapter(_this.source);
                            _this.columns = [
                                {
                                    text: "Box No",
                                    datafield: "boxno",
                                    cellsrenderer: _this.renderer,
                                    cellsalign: "center",
                                    align: "center",
                                    width: 130,
                                    editable: true,
                                },
                                {
                                    text: "VLTD No",
                                    datafield: "vltdsno",
                                    cellsrenderer: _this.renderer,
                                    cellsalign: "center",
                                    align: "center",
                                    width: 130,
                                    editable: true,
                                },
                                {
                                    text: "IMEI No",
                                    datafield: "imeino",
                                    cellsrenderer: _this.renderer,
                                    cellsalign: "center",
                                    align: "center",
                                    width: 100,
                                },
                                {
                                    text: "Invoie No",
                                    datafield: "invoiceno",
                                    cellsrenderer: _this.renderer,
                                    cellsalign: "center",
                                    align: "center",
                                    width: 110,
                                },
                                {
                                    text: "Sales Date",
                                    datafield: "salesdate",
                                    cellsrenderer: _this.renderer,
                                    cellsalign: "center",
                                    align: "center",
                                    width: 100,
                                },
                                {
                                    text: "ICCID No 1",
                                    datafield: "iccidno1",
                                    cellsrenderer: _this.renderer,
                                    cellsalign: "center",
                                    align: "center",
                                    width: 130,
                                },
                                {
                                    text: "Sim No 1",
                                    datafield: "simno1",
                                    cellsrenderer: _this.renderer,
                                    cellsalign: "center",
                                    align: "center",
                                    width: 100,
                                },
                                {
                                    text: "ICCID No 2",
                                    datafield: "iccidno2",
                                    cellsrenderer: _this.renderer,
                                    cellsalign: "center",
                                    align: "center",
                                    width: 130,
                                },
                                {
                                    text: "Sim No 2",
                                    datafield: "simno2",
                                    cellsrenderer: _this.renderer,
                                    cellsalign: "center",
                                    align: "center",
                                    width: 100,
                                },
                                {
                                    text: "Slot No",
                                    datafield: "slotno",
                                    cellsrenderer: _this.renderer,
                                    cellsalign: "center",
                                    align: "center",
                                    width: 90,
                                },
                                {
                                    text: "Requested by",
                                    datafield: "Requesteddealer",
                                    cellsrenderer: _this.renderer,
                                    cellsalign: "center",
                                    align: "center",
                                    width: 100,
                                },
                                {
                                    text: "Current Dealer",
                                    datafield: "currentdealer",
                                    cellsrenderer: _this.renderer,
                                    cellsalign: "center",
                                    align: "center",
                                    width: 105,
                                },
                                {
                                    text: "Created by",
                                    datafield: "createdby",
                                    cellsrenderer: _this.renderer,
                                    cellsalign: "center",
                                    align: "center",
                                    width: 100,
                                },
                                {
                                    text: "",
                                    datafield: "delete",
                                    columntype: "button",
                                    cellsalign: "center",
                                    align: "center",
                                    width: 80,
                                    cellsrenderer: function () {
                                        return _this.myPlatform == "desktop"
                                            ? "Remove"
                                            : "<button>Remove</button>";
                                    },
                                    buttonclick: function (row) {
                                        _this.deleteModel();
                                    },
                                },
                            ];
                        }
                    }
                }
                else {
                    _this.commonService.dismissLoader();
                    _this.commonService.showConfirm("Enter the Boxno and Imeino");
                }
            });
        }
        else {
            this.commonService.showConfirm("Enter the Box No or Imei No");
        }
    };
    DeviceReturnDetailsPage.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = event.args.row.bounddata;
    };
    DeviceReturnDetailsPage.prototype.onFileChange = function (ev) {
        var _this = this;
        var fileName = ev.srcElement.files[0];
        this.name = fileName.name.includes(".xlsx");
        if (this.name == true) {
            this.dataString = [];
            var workBook_1 = null;
            var jsonData_1 = null;
            var reader_1 = new FileReader();
            var file = ev.srcElement.files[0];
            reader_1.onload = function (event) {
                var data = reader_1.result;
                workBook_1 = xlsx__WEBPACK_IMPORTED_MODULE_9__["read"](data, { type: "binary" });
                jsonData_1 = workBook_1.SheetNames.reduce(function (initial, name) {
                    var sheet = workBook_1.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].sheet_to_json(sheet);
                    return initial;
                }, {});
                var json = [];
                for (var i = 0; i < jsonData_1["Sheet1"].length; i++) {
                    var newData = {};
                    newData["imeino"] = jsonData_1["Sheet1"][i]["imeino"].toString();
                    json.push(newData);
                }
                _this.dataString = json;
                _this.output = _this.dataString.slice(0, 300).concat("...");
            };
            reader_1.readAsBinaryString(file);
        }
        else {
            this.commonService.showConfirm("please insert only excel file (.xlsx)");
        }
    };
    DeviceReturnDetailsPage.prototype.submitwithfile = function () {
        var _this = this;
        if (this.dataString.length == 0) {
            this.commonService.showConfirm("Check your excell file,don't enter blank spaces");
        }
        else {
            var excellKeys = Object.keys(this.dataString[0]);
            for (var i = 0; i < excellKeys.length; i++) {
                if (excellKeys[i] == "imeino") {
                    console.log("present");
                    this.excellKeyValid = true;
                }
            }
            if (this.name == true && this.excellKeyValid == true) {
                this.commonService.presentLoader();
                this.imeiIssues = [];
                this.willDownload = true;
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
                    "/esim/deletebulkimeino?dealername=" +
                    localStorage.getItem("userName");
                this.ajaxService
                    .ajaxPostWithBody(url, this.dataString)
                    .subscribe(function (res) {
                    _this.commonService.dismissLoader();
                    _this.commonService.showConfirm(res.message);
                    _this.fileclear();
                });
            }
        }
    };
    DeviceReturnDetailsPage.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.createForm();
    };
    DeviceReturnDetailsPage.prototype.ionViewWillEnter = function () {
        this.clear();
    };
    DeviceReturnDetailsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
    ], DeviceReturnDetailsPage.prototype, "myGrid", void 0);
    DeviceReturnDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-device-return-details",
            template: __webpack_require__(/*! raw-loader!./device-return-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-return-details/device-return-details.page.html"),
            styles: [__webpack_require__(/*! ./device-return-details.page.scss */ "./src/app/delar-application/device-return-details/device-return-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"]])
    ], DeviceReturnDetailsPage);
    return DeviceReturnDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=device-return-details-device-return-details-module-es5.js.map