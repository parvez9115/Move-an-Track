(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sensorise-payments-sensorise-payments-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/sensorise-payments/sensorise-payments.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/sensorise-payments/sensorise-payments.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Sensorice Payments</ion-title>\n    <ion-button\n      *ngIf=\"myPlatform == 'desktop'\"\n      slot=\"end\"\n      class=\"submitBtn\"\n      size=\"small\"\n      (click)=\"newfunc()\"\n      >Export</ion-button\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"wrapper-container\">\n    <ion-col size=\"12\">\n      <form [formGroup]=\"PaymentsForm\">\n        <ion-row class=\"form-field\">\n          <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\">\n            <ion-label class=\"label-head\">SR NO:</ion-label>\n            <ion-input\n              type=\"text\"\n              placeholder=\"Enter the SR NO\"\n              class=\"input\"\n              formControlName=\"srno\"\n            ></ion-input>\n          </ion-col>\n\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n            <ion-label class=\"label-head\">File Upload:</ion-label>\n            <ion-input\n              type=\"file\"\n              (change)=\"onFileChange($event)\"\n              class=\"documents\"\n              formControlName=\"fileupload\"\n            ></ion-input>\n          </ion-col>\n\n          <ion-col\n            size=\"12\"\n            size-lg=\"4\"\n            size-md=\"4\"\n            style=\"margin-top: 25px; text-align: center\"\n          >\n            <ion-button\n              class=\"submitbtn\"\n              (click)=\"SearchData()\"\n              [disabled]=\"!PaymentsForm.valid\"\n              >Submit</ion-button\n            >\n            <ion-button\n              class=\"submitbtn\"\n              [disabled]=\"!PaymentsForm.value.srno\"\n              (click)=\"deleteMethod()\"\n              >Delete</ion-button\n            >\n            <ion-button class=\"submitbtn\" (click)=\"clear()\">Clear</ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin-top: 10px\"\n    ><ion-col>\n      <jqxGrid\n        #myGrid\n        [theme]=\"'material'\"\n        [width]=\"'99%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [columns]=\"columns\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columnsresize]=\"true\"\n        [enablebrowserselection]=\"true\"\n        [enabletooltips]=\"true\"\n        [pagesizeoptions]=\"page\"\n        [pageable]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/sensorise-payments/sensorise-payments.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/delar-application/sensorise-payments/sensorise-payments.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SensorisePaymentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorisePaymentsPageModule", function() { return SensorisePaymentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sensorise_payments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sensorise-payments.page */ "./src/app/delar-application/sensorise-payments/sensorise-payments.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");








var routes = [
    {
        path: "",
        component: _sensorise_payments_page__WEBPACK_IMPORTED_MODULE_6__["SensorisePaymentsPage"],
    },
];
var SensorisePaymentsPageModule = /** @class */ (function () {
    function SensorisePaymentsPageModule() {
    }
    SensorisePaymentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_sensorise_payments_page__WEBPACK_IMPORTED_MODULE_6__["SensorisePaymentsPage"]],
        })
    ], SensorisePaymentsPageModule);
    return SensorisePaymentsPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/sensorise-payments/sensorise-payments.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/delar-application/sensorise-payments/sensorise-payments.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.documents {\n  margin: 12px 10px 0px;\n  text-align: center;\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.myGrid {\n  max-height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2Vuc29yaXNlLXBheW1lbnRzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXHNlbnNvcmlzZS1wYXltZW50c1xcc2Vuc29yaXNlLXBheW1lbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2Vuc29yaXNlLXBheW1lbnRzL3NlbnNvcmlzZS1wYXltZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0VGOztBRENBO0VBQ0Usd0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FDRUY7O0FEQ0E7RUFDRTtJQUNFLGdCQUFBO0VDRUY7O0VEQUE7SUFDRSxVQUFBO0VDR0Y7QUFDRjs7QURBQTtFQUNFO0lBQ0UsU0FBQTtFQ0VGOztFREFBO0lBQ0UsVUFBQTtFQ0dGO0FBQ0Y7O0FEQUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQ0VGO0FBQ0Y7O0FEQ0E7RUFDRTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2Vuc29yaXNlLXBheW1lbnRzL3NlbnNvcmlzZS1wYXltZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIG1hcmdpbjogN3B4O1xyXG59XHJcblxyXG4uZG9jdW1lbnRzIHtcclxuICBtYXJnaW46IDEycHggMTBweCAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sYWJlbC1oZWFkIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcclxufVxyXG5cclxuLnN1Ym1pdEJ0biB7XHJcbiAgbWFyZ2luOiAwcHggMTRweCAwcHggMHB4O1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAtLWNvbG9yOiAjN2M2OGY4O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcclxuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgem9vbTogODAlO1xyXG4gIH1cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweCkgYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDhweCAxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm15R3JpZCB7XHJcbiAgbWF4LWhlaWdodDogYXV0bztcclxufVxyXG4iLCIuaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIG1hcmdpbjogN3B4O1xufVxuXG4uZG9jdW1lbnRzIHtcbiAgbWFyZ2luOiAxMnB4IDEwcHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sYWJlbC1oZWFkIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcbn1cblxuLnN1Ym1pdEJ0biB7XG4gIG1hcmdpbjogMHB4IDE0cHggMHB4IDBweDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogIzdjNjhmODtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjN2M2OGY4O1xuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiA4cHggMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbi5teUdyaWQge1xuICBtYXgtaGVpZ2h0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/sensorise-payments/sensorise-payments.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/delar-application/sensorise-payments/sensorise-payments.page.ts ***!
  \*********************************************************************************/
/*! exports provided: SensorisePaymentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorisePaymentsPage", function() { return SensorisePaymentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_8__);









var SensorisePaymentsPage = /** @class */ (function () {
    function SensorisePaymentsPage(commonService, formBuilder, ajaxService, ete, platform, alertController) {
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.ajaxService = ajaxService;
        this.ete = ete;
        this.platform = platform;
        this.alertController = alertController;
        this.name = false;
        this.willDownload = false;
        this.output = "";
        this.show = false;
        this.imeiIssues = [];
        this.excellKeyValid = false;
    }
    SensorisePaymentsPage.prototype.createForm = function () {
        this.PaymentsForm = this.formBuilder.group({
            srno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fileupload: [this.file, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    SensorisePaymentsPage.prototype.clear = function () {
        this.PaymentsForm.patchValue({
            fileupload: "",
            srno: "",
        });
    };
    SensorisePaymentsPage.prototype.emptyfile = function () {
        this.PaymentsForm.patchValue({
            fileupload: "",
        });
    };
    SensorisePaymentsPage.prototype.onFileChange = function (ev) {
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
                workBook_1 = xlsx__WEBPACK_IMPORTED_MODULE_8__["read"](data, { type: "binary" });
                jsonData_1 = workBook_1.SheetNames.reduce(function (initial, name) {
                    var sheet = workBook_1.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].sheet_to_json(sheet, {
                        range: "A2:Z10000",
                    });
                    return initial;
                }, {});
                var json = [];
                for (var i = 0; i < jsonData_1["SRXXXXXX"].length; i++) {
                    var newData = {};
                    newData["Customer_ID"] = jsonData_1["SRXXXXXX"][i]["Customer ID"];
                    newData["UTR_No"] = jsonData_1["SRXXXXXX"][i]["UTR No"];
                    newData["PI"] = jsonData_1["SRXXXXXX"][i]["PI"];
                    newData["IccID"] = jsonData_1["SRXXXXXX"][i]["IccID"];
                    newData["Project_Name"] = jsonData_1["SRXXXXXX"][i]["Project_Name"];
                    newData["PRODUCT_NAME"] = jsonData_1["SRXXXXXX"][i]["PRODUCT_NAME"];
                    newData["CS_Primary_TSP"] = jsonData_1["SRXXXXXX"][i]["CS_Primary_TSP"];
                    newData["CS_Fallback_TSP"] =
                        jsonData_1["SRXXXXXX"][i]["CS_Fallback_TSP"];
                    newData["BS_Primary_TSP"] = jsonData_1["SRXXXXXX"][i]["BS_Primary_TSP"];
                    newData["BS_Fallback_TSP"] =
                        jsonData_1["SRXXXXXX"][i]["BS_Fallback_TSP"];
                    newData["Action"] = jsonData_1["SRXXXXXX"][i]["Action"];
                    newData["Request_DATE"] =
                        jsonData_1["SRXXXXXX"][i]["Request_DATE\r\n(DDMMYY)"];
                    newData["Price"] = jsonData_1["SRXXXXXX"][i]["Price"].toString();
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
    SensorisePaymentsPage.prototype.SearchData = function () {
        var _this = this;
        if (this.dataString.length == 0) {
            this.commonService.showConfirm("Check your excell file,don't enter blank spaces");
        }
        else {
            var excellKeys = Object.keys(this.dataString[0]);
            for (var i = 0; i < excellKeys.length; i++) {
                if (
                // excellKeys[i] == "Customer_ID" ||
                // excellKeys[i] == "IccID" ||
                // excellKeys[i] == "Project_Name" ||
                // excellKeys[i] == "CS_Primary_TSP" ||
                // excellKeys[i] == "CS_Fallback_TSP" ||
                //  excellKeys[i] == "BS_Primary_TSP" ||
                // excellKeys[i] == "BS_Fallback_TSP" ||
                excellKeys[i] == "UTR_No" ||
                    excellKeys[i] == "Price" ||
                    excellKeys[i] == "PI" ||
                    excellKeys[i] == "Request_DATE\r\n(DDMMYY)" ||
                    excellKeys[i] == "Action" ||
                    excellKeys[i] == "PRODUCT_NAME") {
                    console.log("present");
                    this.excellKeyValid = true;
                }
            }
            if (this.name == true && this.excellKeyValid == true) {
                this.commonService.presentLoader();
                this.button = true;
                this.imeiIssues = [];
                this.willDownload = true;
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                    "/sensorise/saveSensoriseRSUPayment?srno=" +
                    this.PaymentsForm.value.srno +
                    "&createdby=" +
                    localStorage.getItem("corpId");
                this.ajaxService
                    .ajaxPostWithBody(url, this.dataString)
                    .subscribe(function (res) {
                    if (res) {
                        _this.commonService.dismissLoader();
                    }
                    if (res.message == "Record Saved Successfully") {
                        _this.commonService.showConfirm(res.message);
                        _this.clear();
                        _this.getdatas();
                    }
                    else {
                        _this.commonService.showConfirm(res.message);
                        _this.emptyfile();
                    }
                });
            }
        }
    };
    SensorisePaymentsPage.prototype.deleteMethod = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Confirm",
                            backdropDismiss: false,
                            message: "Are you sure you want to Delete?",
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
    SensorisePaymentsPage.prototype.delete = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/sensorise/deleteSensoriseRSUPayment?srno=" +
            this.PaymentsForm.value.srno;
        this.ajaxService.ajaxDeleteWithString(url).subscribe(function (res) {
            _this.response = res;
            _this.commonService.showConfirm(res.message);
            _this.clear();
            _this.getdatas();
        });
    };
    SensorisePaymentsPage.prototype.getdatas = function () {
        var _this = this;
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/sensorise/getSensoriseRSUPayment";
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.tableData = res;
            _this.commonService.dismissLoader();
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
                    text: "VLTD No",
                    datafield: "vltdsno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 135,
                },
                {
                    text: "ICCID No",
                    datafield: "iccidno1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 144,
                },
                {
                    text: "SIM 1",
                    datafield: "sim1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 105,
                },
                {
                    text: "SIM 2",
                    datafield: "sim2",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 105,
                },
                {
                    text: "IMEI",
                    datafield: "imei",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 105,
                },
                {
                    text: "Dealer Name",
                    datafield: "dealerid",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "SR No",
                    datafield: "srno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "UTR No",
                    datafield: "utrno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
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
                    text: "Request Date",
                    datafield: "requestdate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                },
                {
                    text: "Amount",
                    datafield: "amount",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 60,
                },
                {
                    text: "Action",
                    datafield: "action",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "Product",
                    datafield: "product",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 350,
                },
            ];
        });
    };
    SensorisePaymentsPage.prototype.newfunc = function () {
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
            title: "Sensorise Payments",
            data: forExcel,
            headers: Header,
        };
        this.ete.exportExcel(reportData);
    };
    SensorisePaymentsPage.prototype.ngAfterViewInit = function () {
        this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
    };
    SensorisePaymentsPage.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.createForm();
    };
    SensorisePaymentsPage.prototype.ionViewWillEnter = function () {
        this.clear();
        this.getdatas();
    };
    SensorisePaymentsPage.ctorParameters = function () { return [
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExportExcelService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SensorisePaymentsPage.prototype, "myGrid", void 0);
    SensorisePaymentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sensorise-payments",
            template: __webpack_require__(/*! raw-loader!./sensorise-payments.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/sensorise-payments/sensorise-payments.page.html"),
            styles: [__webpack_require__(/*! ./sensorise-payments.page.scss */ "./src/app/delar-application/sensorise-payments/sensorise-payments.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExportExcelService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], SensorisePaymentsPage);
    return SensorisePaymentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=sensorise-payments-sensorise-payments-module-es5.js.map