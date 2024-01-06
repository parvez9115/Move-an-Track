(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["missing-summary-report-missing-summary-report-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/missing-summary-report/missing-summary-report.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/missing-summary-report/missing-summary-report.page.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Missing Summary Report</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"wrapper-container\">\n    <ion-col size=\"12\">\n      <form [formGroup]=\"missingform\">\n        <ion-row class=\"form-field\">\n          <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\">\n            <ion-label class=\"label-head\">Company ID:</ion-label>\n            <ion-input\n              type=\"text\"\n              placeholder=\"Enter the Comapny Id\"\n              class=\"input\"\n              formControlName=\"companyid\"\n            ></ion-input>\n          </ion-col>\n\n          <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\">\n            <ion-label class=\"label-head\">Plate No:</ion-label>\n            <ion-input\n              type=\"text\"\n              placeholder=\"Enter the Plate No\"\n              class=\"input\"\n              formControlName=\"plateno\"\n            ></ion-input>\n          </ion-col>\n\n          <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\">\n            <ion-label class=\"label-head\">Date:</ion-label>\n            <ion-input\n              type=\"date\"\n              formControlName=\"startdate\"\n              class=\"input\"\n            ></ion-input>\n          </ion-col>\n\n          <ion-col\n            size=\"12\"\n            size-lg=\"2.5\"\n            size-md=\"2.5\"\n            style=\"margin-top: 27px; text-align: center\"\n          >\n            <ion-button\n              class=\"submitbtn\"\n              (click)=\"Submit()\"\n              [disabled]=\"!missingform.valid || button\"\n              >Submit</ion-button\n            >\n            <ion-button class=\"submitbtn\" (click)=\"clear()\">Clear</ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/missing-summary-report/missing-summary-report.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/delar-application/missing-summary-report/missing-summary-report.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: MissingSummaryReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingSummaryReportPageModule", function() { return MissingSummaryReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _missing_summary_report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./missing-summary-report.page */ "./src/app/delar-application/missing-summary-report/missing-summary-report.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");








var routes = [
    {
        path: "",
        component: _missing_summary_report_page__WEBPACK_IMPORTED_MODULE_6__["MissingSummaryReportPage"],
    },
];
var MissingSummaryReportPageModule = /** @class */ (function () {
    function MissingSummaryReportPageModule() {
    }
    MissingSummaryReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_missing_summary_report_page__WEBPACK_IMPORTED_MODULE_6__["MissingSummaryReportPage"]],
        })
    ], MissingSummaryReportPageModule);
    return MissingSummaryReportPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/missing-summary-report/missing-summary-report.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/delar-application/missing-summary-report/missing-summary-report.page.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.documents {\n  margin: 12px 10px 0px;\n  text-align: center;\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.myGrid {\n  max-height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vbWlzc2luZy1zdW1tYXJ5LXJlcG9ydC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxtaXNzaW5nLXN1bW1hcnktcmVwb3J0XFxtaXNzaW5nLXN1bW1hcnktcmVwb3J0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vbWlzc2luZy1zdW1tYXJ5LXJlcG9ydC9taXNzaW5nLXN1bW1hcnktcmVwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDRUY7O0FEQ0E7RUFDRSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUNFRjs7QURDQTtFQUNFO0lBQ0UsZ0JBQUE7RUNFRjs7RURBQTtJQUNFLFVBQUE7RUNHRjtBQUNGOztBREFBO0VBQ0U7SUFDRSxTQUFBO0VDRUY7O0VEQUE7SUFDRSxVQUFBO0VDR0Y7QUFDRjs7QURBQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VDRUY7QUFDRjs7QURDQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFLGdCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9taXNzaW5nLXN1bW1hcnktcmVwb3J0L21pc3Npbmctc3VtbWFyeS1yZXBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBtYXJnaW46IDdweDtcclxufVxyXG5cclxuLmRvY3VtZW50cyB7XHJcbiAgbWFyZ2luOiAxMnB4IDEwcHggMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubGFiZWwtaGVhZCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XHJcbn1cclxuXHJcbi5zdWJtaXRCdG4ge1xyXG4gIG1hcmdpbjogMHB4IDE0cHggMHB4IDBweDtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjN2M2OGY4O1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgLS1jb2xvcjogIzdjNjhmODtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICM3YzY4Zjg7XHJcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIHpvb206IDgwJTtcclxuICB9XHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MzIwcHgpIGFuZChtYXgtd2lkdGg6MTAyM3B4KSB7XHJcbiAgLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbjogOHB4IDAgMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDoxMDI0cHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiA4cHggMXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5teUdyaWQge1xyXG4gIG1heC1oZWlnaHQ6IGF1dG87XHJcbn1cclxuIiwiLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBtYXJnaW46IDdweDtcbn1cblxuLmRvY3VtZW50cyB7XG4gIG1hcmdpbjogMTJweCAxMHB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGFiZWwtaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XG59XG5cbi5zdWJtaXRCdG4ge1xuICBtYXJnaW46IDBweCAxNHB4IDBweCAwcHg7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4ubXlHcmlkIHtcbiAgbWF4LWhlaWdodDogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/missing-summary-report/missing-summary-report.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/missing-summary-report/missing-summary-report.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: MissingSummaryReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingSummaryReportPage", function() { return MissingSummaryReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var MissingSummaryReportPage = /** @class */ (function () {
    function MissingSummaryReportPage(commonService, formBuilder, ajaxService, ete, platform) {
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.ajaxService = ajaxService;
        this.ete = ete;
        this.platform = platform;
        this.button = false;
    }
    MissingSummaryReportPage.prototype.createForm = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        var todaytime = now.getHours() + ":" + now.getMinutes();
        this.missingform = this.formBuilder.group({
            companyid: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            plateno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            startdate: [today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    MissingSummaryReportPage.prototype.clear = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        var todaytime = now.getHours() + ":" + now.getMinutes();
        this.missingform.patchValue({
            companyid: "",
            plateno: "",
            startdate: today,
        });
    };
    MissingSummaryReportPage.prototype.Submit = function () {
        var _this = this;
        this.button = true;
        var data;
        data = {
            companyid: this.missingform.value.companyid.toString(),
            plateNo: this.missingform.value.plateno.toString(),
            startdate: this.missingform.value.startdate.toString(),
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/global/MissingSummaryReport";
        this.ajaxService.ajaxPostWithFile(url, data).subscribe(function (res) {
            if (res.message == "Record Updated Successfully") {
                _this.commonService.showConfirm(res.message);
                _this.clear();
                _this.button = false;
            }
            else {
                _this.commonService.showConfirm(res.message);
                _this.button = false;
            }
        });
    };
    MissingSummaryReportPage.prototype.ngOnInit = function () {
        this.createForm();
        this.clear();
    };
    MissingSummaryReportPage.ctorParameters = function () { return [
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExportExcelService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
    ]; };
    MissingSummaryReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-missing-summary-report",
            template: __webpack_require__(/*! raw-loader!./missing-summary-report.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/missing-summary-report/missing-summary-report.page.html"),
            styles: [__webpack_require__(/*! ./missing-summary-report.page.scss */ "./src/app/delar-application/missing-summary-report/missing-summary-report.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExportExcelService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], MissingSummaryReportPage);
    return MissingSummaryReportPage;
}());



/***/ })

}]);
//# sourceMappingURL=missing-summary-report-missing-summary-report-module-es5.js.map