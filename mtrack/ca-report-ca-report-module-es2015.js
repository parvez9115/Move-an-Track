(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ca-report-ca-report-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/ca-report/ca-report.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/ca-report/ca-report.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\"  class=\"dealerHeader\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n       <ion-title >CA Report</ion-title>\r\n        </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content>\r\n  <ion-row class=\"wrapper-container\">\r\n    <ion-col size=\"12\" > \r\n      <form [formGroup]=\"CAReportForm\">\r\n      <ion-row  class=\"form-field\">\r\n        <ion-col size='12' size-lg=\"2.4\"  size-md=\"2.4\">  \r\n          <ion-label class=\"label-head\">CA Request Number:</ion-label>\r\n          <ionic-selectable class=\"input selectable-input\" formControlName=\"CaRequestNo\" placeholder=\"Select CA Request Number\"\r\n          [items]=\"carequestNo\"  [canSearch]=\"true\" (onChange)=\"getCalist($event)\"\r\n         [hasVirtualScroll]=\"true\" [disabledItems]=\"data\">\r\n        </ionic-selectable>\r\n        </ion-col>\r\n        <ion-col size='12' size-lg=\"2.4\"  size-md=\"2.4\">  \r\n          <ion-label class=\"label-head\">Invoice Number:</ion-label>\r\n          <ion-input type=\"text\" *ngIf=\"!showInvoiceNumber\" placeholder=\"Invoice Number\" formControlName=\"InvoiceNo\" class=\"input\" disabled></ion-input>\r\n          <ionic-selectable *ngIf=\"showInvoiceNumber\" class=\"input selectable-input\" formControlName=\"InvoiceNo\" placeholder=\"Select Invoice Number\" [disabled]=\"hideSerialNo\"\r\n          [items]=\"Invoice\"  [canSearch]=\"true\" (onChange)=\"getinvoicelist($event)\"\r\n         [hasVirtualScroll]=\"true\" [disabledItems]=\"data\">\r\n        </ionic-selectable>\r\n        </ion-col>\r\n        <ion-col size='12' size-lg=\"2.4\"  size-md=\"2.4\">  \r\n          <ion-label class=\"label-head\">Serial Number:</ion-label>\r\n          <ion-input type=\"text\" *ngIf=\"!showSerialNo\" placeholder=\"Select Serial Number\" formControlName=\"SerialNo\" class=\"input\" disabled></ion-input>\r\n          <ionic-selectable *ngIf=\"showSerialNo\" class=\"input selectable-input\" formControlName=\"SerialNo\" placeholder=\"Select Serial Number\"  [disabled]=\"hideSerialNo\"\r\n          [items]=\"SerialNo\"  [canSearch]=\"true\" (onChange)=\"getseriallist($event)\"\r\n         [hasVirtualScroll]=\"true\" [disabledItems]=\"data\">\r\n        </ionic-selectable>\r\n        </ion-col>\r\n        <ion-col size='12' size-lg=\"2.4\"  size-md=\"2.4\" >  \r\n          <ion-label class=\"label-head\">Iccid Number:</ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Iccid Number\" formControlName=\"iccidNumber\" class=\"input\">\r\n          </ion-input>\r\n        </ion-col>\r\n        <ion-col size='12' size-lg=\"2.4\"  size-md=\"2.4\" >  \r\n          <ion-label class=\"label-head\">Imei Number:</ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Imei Number\" formControlName=\"ImeiNumber\" class=\"input\">\r\n          </ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      </form>\r\n      <ion-row>\r\n        <ion-col size='12' size-lg=\"12\"  size-md=\"12\" style=\"margin: 10px 0px 0px;text-align: center;\">  \r\n<ion-button class=\"submitbtn\" (click)=\"SearchData()\"[disabled]=\"!CAReportForm.valid\">Search</ion-button>\r\n<ion-button class=\"submitbtn\"  (click)=\"clear()\">Clear</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"padding: 10px;\" *ngIf='show'>\r\n        <ion-col size=12>\r\n          <ion-label><span class=\"dealer-label\">Invoice No:</span><span class=\"dealer-data\">{{details.invoiceno}}</span><span class=\"dealer-label\">Total Qty:</span><span class=\"dealer-data\">{{details.totalquantity}}</span><span class=\"dealer-label\">Sales Date:</span><span class=\"dealer-data\">{{details.saledate}}</span><span class=\"dealer-label\">Serial No:</span><span class=\"dealer-data\">{{details.serialno}}</span><span class=\"dealer-label\">Distributor:</span><span class=\"dealer-data\">{{details.saledistributor}}</span></ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"padding: 10px;\"> \r\n        <ion-col size=12>\r\n        <jqxGrid  *ngIf='show'\r\n        #myGrid\r\n        [theme]=\"'material'\"\r\n        [width]=\"'99.5%'\"\r\n        [autoheight]=\"true\"\r\n        [source]=\"dataAdapter\"\r\n        [columns]=\"columns\"\r\n        [sortable]=\"true\"\r\n        [filterable]=\"true\"\r\n        [columns]=\"columns\"\r\n        [columnsresize]=\"true\"\r\n        [enabletooltips]=\"true\"\r\n        [pageable]=\"true\"\r\n        [showfilterrow]=\"true\" \r\n       style=\"font-size:16px;text-align: center !important;margin:auto;cursor:pointer\"\r\n      >\r\n      </jqxGrid>\r\n        </ion-col>\r\n      </ion-row>\r\n</ion-col>\r\n        </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/delar-application/ca-report/ca-report.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/delar-application/ca-report/ca-report.module.ts ***!
  \*****************************************************************/
/*! exports provided: CaReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaReportPageModule", function() { return CaReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ca_report_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ca-report.page */ "./src/app/delar-application/ca-report/ca-report.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");










const routes = [
    {
        path: '',
        component: _ca_report_page__WEBPACK_IMPORTED_MODULE_7__["CaReportPage"]
    }
];
let CaReportPageModule = class CaReportPageModule {
};
CaReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__["SharedModModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_ca_report_page__WEBPACK_IMPORTED_MODULE_7__["CaReportPage"]]
    })
], CaReportPageModule);



/***/ }),

/***/ "./src/app/delar-application/ca-report/ca-report.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/delar-application/ca-report/ca-report.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.submitbtn {\n  --background:#6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -16px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 30px 11px;\n    padding-right: 20px;\n  }\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.dealer-data {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vY2EtcmVwb3J0L0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGNhLXJlcG9ydFxcY2EtcmVwb3J0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vY2EtcmVwb3J0L2NhLXJlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksb0JBQUE7QUNFSjs7QURBRTtFQUNJO0lBQ0EsZ0JBQUE7RUNHSjs7RURESTtJQUNJLFVBQUE7RUNJUjtBQUNGOztBREZFO0VBQ0k7SUFDQSxTQUFBO0VDSUo7O0VERkk7SUFDSSxVQUFBO0VDS1I7QUFDRjs7QURIRTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUNLTjs7QURIQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VDTU47QUFDRjs7QURKQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSxtQkFBQTtFQ01OO0FBQ0Y7O0FESEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0tKOztBREhBO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0tKOztBREhBO0VBRUksZUFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vY2EtcmVwb3J0L2NhLXJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gICAgXHJcbn1cclxuLnNlbGVjdGFibGUtaW5wdXR7XHJcbiAgICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5zdWJtaXRidG57XHJcbiAgICAtLWJhY2tncm91bmQ6IzYyNTJlZTtcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KXtcclxuICAgICAgLmlucHV0e1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICAgICNzdWJtaXRidG57XHJcbiAgICAgICAgICB3aWR0aDoyMCU7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgICAgLmZvcm0tZmllbGR7XHJcbiAgICAgIHpvb206ODAlO1xyXG4gICAgICB9XHJcbiAgICAgICNzdWJtaXRidG57XHJcbiAgICAgICAgICB3aWR0aDo4MCU7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgLmZvcm0tZmllbGR7XHJcbiAgICAgIG1hcmdpbjogLTE2cHggNXB4IDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIH1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MzIwcHgpYW5kKG1heC13aWR0aDoxMDIzcHgpe1xyXG4gICAgLndyYXBwZXItY29udGFpbmVye1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDhweCAwIDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDoxMDI0cHgpe1xyXG4gICAgLndyYXBwZXItY29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbjogMzBweCAxMXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4ubGFiZWwtaGVhZHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcclxufVxyXG4uZGVhbGVyLWxhYmVsXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5kZWFsZXItZGF0YVxyXG57XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn0iLCIuaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG59XG5cbi5zZWxlY3RhYmxlLWlucHV0IHtcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uc3VibWl0YnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiM2MjUyZWU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC0xNnB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDMwcHggMTFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4ubGFiZWwtaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XG59XG5cbi5kZWFsZXItbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5kZWFsZXItZGF0YSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/ca-report/ca-report.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/delar-application/ca-report/ca-report.page.ts ***!
  \***************************************************************/
/*! exports provided: CaReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaReportPage", function() { return CaReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









let CaReportPage = class CaReportPage {
    constructor(formBuilder, modalController, ajaxService, commonService) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.show = false;
        this.showbutton = false;
        this.hideSerialNo = false;
        this.showDealer = false;
        this.showInvoice = false;
        this.showSerialNo = false;
        this.showInvoiceNumber = false;
        this.getCalist = (event) => {
            if (event.value)
                this.CAReportForm.value.CaRequestNo = event.value;
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
                "/sensorise/getDealerCAInvoice?companyid=" +
                localStorage.getItem("corpId") +
                "&dealer=" +
                localStorage.getItem("userName") +
                "&carequestid=" +
                this.CAReportForm.value.CaRequestNo;
            this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
                this.Invoice = res;
                if (this.Invoice.length == 0) {
                    this.showInvoiceNumber = false;
                }
                else {
                    this.resets();
                    this.showInvoiceNumber = true;
                }
            });
        };
        this.getinvoicelist = (event) => {
            if (event.value)
                this.CAReportForm.value.InvoiceNo = event.value;
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
                "/sensorise/getInvoiceSerial?companyid=" +
                localStorage.getItem("corpId") +
                "&invoiceno=" +
                this.CAReportForm.value.InvoiceNo;
            this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
                this.SerialNo = res;
                if (this.SerialNo.length == 0) {
                    this.showSerialNo = false;
                }
                else {
                    this.reset();
                    this.showSerialNo = true;
                }
            });
        };
        this.getseriallist = (event) => {
            if (event.value)
                this.CAReportForm.value.SerialNo = event.value;
        };
    }
    clear() {
        this.CAReportForm.patchValue({
            CaRequestNo: "",
            InvoiceNo: "",
            SerialNo: "",
            iccidNumber: "",
            ImeiNumber: "",
        });
        this.hideSerialNo = true;
        this.show = false;
        this.showInvoice = false;
        this.showSerialNo = false;
        this.showInvoiceNumber = false;
    }
    reset() {
        this.CAReportForm.patchValue({
            SerialNo: "",
        });
    }
    resets() {
        this.CAReportForm.patchValue({
            InvoiceNo: "",
        });
    }
    getcalist() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/sensorise/getCaRequest?companyid=" +
            localStorage.getItem("corpId") +
            "&dealer=" +
            localStorage.getItem("userName");
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.carequestNo = res;
        });
    }
    createForm() {
        this.CAReportForm = this.formBuilder.group({
            CaRequestNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            InvoiceNo: [""],
            SerialNo: [""],
            iccidNumber: [""],
            ImeiNumber: [""],
        });
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row;
        this.show = true;
    }
    SearchData() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/sensorise/getDealerCARequestAll?companyid=" +
            localStorage.getItem("corpId") +
            "&carequestno=" +
            this.CAReportForm.value.CaRequestNo +
            "&invoiceno=" +
            this.CAReportForm.value.InvoiceNo.trim() +
            "&serialno=" +
            this.CAReportForm.value.SerialNo.trim() +
            "&iccidno=" +
            this.CAReportForm.value.iccidNumber +
            "&imeino=" +
            this.CAReportForm.value.ImeiNumber;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.tableData = res;
            if (res.length == 0) {
                this.commonService.showConfirm("CA Report not available");
                this.show = false;
            }
            else {
                this.details = res[0];
                this.show = true;
                this.renderer = (row, column, value) => {
                    if (value == "" || null || undefined) {
                        return "----No Data----";
                    }
                    else {
                        return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                            value +
                            "</span>");
                    }
                };
                this.source = { localdata: this.tableData };
                this.dataAdapter = new jqx.dataAdapter(this.source);
                if (localStorage.getItem("corpId") == "apm") {
                    this.columns = [
                        {
                            text: "ICCID Number",
                            datafield: "iccidno",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 210,
                        },
                        {
                            text: "IMEI Number",
                            datafield: "imei",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 210,
                        },
                        {
                            text: "VLTD No",
                            datafield: "vltdsno",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 210,
                        },
                        {
                            text: "Sim 1",
                            datafield: "sim1",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 210,
                        },
                        {
                            text: "Sim 2",
                            datafield: "sim2",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 210,
                        },
                        {
                            text: "Commercial Activation Date",
                            datafield: "commercialactivationdate",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 230,
                        },
                        {
                            text: "Card End Date",
                            datafield: "cardenddate",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 150,
                        },
                        {
                            text: "Card State",
                            datafield: "cardstate",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 150,
                        },
                        {
                            text: "Card Status",
                            datafield: "cardstatus",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 150,
                        },
                        {
                            text: "CA Request Date",
                            datafield: "carequestdate",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 210,
                        },
                        {
                            text: "SR Number",
                            datafield: "srno",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 210,
                        },
                        {
                            text: "SR Date",
                            datafield: "srdate",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 210,
                        },
                        {
                            text: "White Listing Date",
                            datafield: "whitelistingdate",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 210,
                        },
                        {
                            text: "Ticket Number",
                            datafield: "ticketno",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 210,
                        },
                    ];
                }
                else {
                    this.columns = [
                        {
                            text: "ICCID Number",
                            datafield: "iccidno",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 210,
                        },
                        {
                            text: "IMEI Number",
                            datafield: "imei",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 210,
                        },
                        {
                            text: "VLTD No",
                            datafield: "vltdsno",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 210,
                        },
                        {
                            text: "Sim 1",
                            datafield: "sim1",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 210,
                        },
                        {
                            text: "Sim 2",
                            datafield: "sim2",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 210,
                        },
                        {
                            text: "Commercial Activation Date",
                            datafield: "commercialactivationdate",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 230,
                        },
                        {
                            text: "Card End Date",
                            datafield: "cardenddate",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 150,
                        },
                        {
                            text: "Card State",
                            datafield: "cardstate",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 150,
                        },
                        {
                            text: "Card Status",
                            datafield: "cardstatus",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 150,
                        },
                        {
                            text: "CA Request Date",
                            datafield: "carequestdate",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 210,
                        },
                    ];
                }
            }
        });
    }
    ngOnInit() {
        this.getcalist();
        this.createForm();
    }
};
CaReportPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("selectComponent", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic_selectable__WEBPACK_IMPORTED_MODULE_4__["IonicSelectableComponent"])
], CaReportPage.prototype, "selectComponent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridComponent"])
], CaReportPage.prototype, "myGrid", void 0);
CaReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-ca-report",
        template: __webpack_require__(/*! raw-loader!./ca-report.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/ca-report/ca-report.page.html"),
        styles: [__webpack_require__(/*! ./ca-report.page.scss */ "./src/app/delar-application/ca-report/ca-report.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]])
], CaReportPage);



/***/ })

}]);
//# sourceMappingURL=ca-report-ca-report-module-es2015.js.map