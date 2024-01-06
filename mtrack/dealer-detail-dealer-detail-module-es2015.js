(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dealer-detail-dealer-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/dealer-detail/dealer-detail.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/dealer-detail/dealer-detail.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\"  class=\"dealerHeader\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n       <ion-title >Dealer Details</ion-title>\r\n        </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content>\r\n  <ion-row class=\"wrapper-container\">\r\n    <ion-col size=\"12\" > \r\n      <form [formGroup]=\"DealerForm\">\r\n      <ion-row  class=\"form-field\">\r\n        <ion-col size='12' size-lg=\"3\"  size-md=\"3\">  \r\n          <ion-label class=\"label-head\">Invoice Number:</ion-label>\r\n          <ionic-selectable class=\"input selectable-input\" formControlName=\"InvoiceNo\" placeholder=\"Select Invoice Number\"\r\n          [items]=\"Invoice\"  [canSearch]=\"true\" (onChange)=\"getinvoicelist($event)\"\r\n         [hasVirtualScroll]=\"true\" [disabledItems]=\"data\">\r\n        </ionic-selectable>\r\n        </ion-col>\r\n        <ion-col size='12' size-lg=\"3\"  size-md=\"3\">  \r\n          <ion-label class=\"label-head\">Serial Number:</ion-label>\r\n          <ion-input type=\"text\" *ngIf=\"!showSerialNo\" placeholder=\"Serial Number\" formControlName=\"SerialNo\" class=\"input\" disabled></ion-input>\r\n          <ionic-selectable *ngIf=\"showSerialNo\" class=\"input selectable-input\" formControlName=\"SerialNo\" placeholder=\"Select Serial Number\"  [disabled]=\"hideSerialNo\"\r\n          [items]=\"SerialNo\"  [canSearch]=\"true\" (onChange)=\"getseriallist($event)\"\r\n         [hasVirtualScroll]=\"true\" [disabledItems]=\"data\">\r\n        </ionic-selectable>\r\n        </ion-col>\r\n        <ion-col size='12' size-lg=\"3\"  size-md=\"3\" >  \r\n          <ion-label class=\"label-head\">Iccid Number:</ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Iccid Number\" formControlName=\"iccidNumber\" class=\"input\">\r\n          </ion-input>\r\n        </ion-col>\r\n        <ion-col size='12' size-lg=\"3\"  size-md=\"3\" >  \r\n          <ion-label class=\"label-head\">Imei Number:</ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Imei Number\" formControlName=\"ImeiNumber\" class=\"input\">\r\n          </ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      </form>\r\n      <ion-row>\r\n        <ion-col size='12' size-lg=\"12\"  size-md=\"12\" style=\"margin: 10px 0px 0px;text-align: center;\">  \r\n<ion-button class=\"submitbtn\" (click)=\"SearchData()\"[disabled]=\"!DealerForm.valid\">Search</ion-button>\r\n<ion-button class=\"submitbtn\"  (click)=\"clear()\">Clear</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"padding: 10px;\" *ngIf='show'>\r\n        <ion-col size=12>\r\n          <ion-label><span class=\"dealer-label\">Invoice No:</span><span class=\"dealer-data\">{{details.invoiceno}}</span><span class=\"dealer-label\">Total Qty:</span><span class=\"dealer-data\">{{details.totalquantity}}</span><span class=\"dealer-label\">Sales Date:</span><span class=\"dealer-data\">{{details.saledate}}</span><span class=\"dealer-label\">Serial No:</span><span class=\"dealer-data\">{{details.serialno}}</span><span class=\"dealer-label\">Distributor:</span><span class=\"dealer-data\">{{details.saledistributor}}</span></ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"padding: 10px;\"> \r\n        <ion-col size=12>\r\n        <jqxGrid  *ngIf='show'\r\n        #myGrid\r\n        [selectionmode]=\"'checkbox'\" \r\n        (onRowselect)=\"myGridOnRowSelect($event)\"\r\n        [theme]=\"'material'\"\r\n        [width]=\"'99.5%'\"\r\n        [autoheight]=\"true\"\r\n        [source]=\"dataAdapter\"\r\n        [columns]=\"columns\"\r\n        [sortable]=\"true\"\r\n        [filterable]=\"true\"\r\n        [columns]=\"columns\"\r\n        [columnsresize]=\"true\"\r\n        [enabletooltips]=\"true\"\r\n        [pageable]=\"true\"\r\n        [showfilterrow]=\"true\" \r\n       style=\"font-size:16px;text-align: center !important;margin:auto;cursor:pointer\"\r\n      >\r\n      </jqxGrid>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row   *ngIf='show'>\r\n        <ion-col size='12' size-lg=\"12\"  size-md=\"12\" style=\"margin: 10px 0px 0px;text-align: end;\">  \r\n<ion-button class=\"submitbtn\" (click)=\"submitBtn()\">Submit</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n</ion-col>\r\n        </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/delar-application/dealer-detail/dealer-detail.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/delar-application/dealer-detail/dealer-detail.module.ts ***!
  \*************************************************************************/
/*! exports provided: DealerDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerDetailPageModule", function() { return DealerDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var _dealer_detail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dealer-detail.page */ "./src/app/delar-application/dealer-detail/dealer-detail.page.ts");










const routes = [
    {
        path: '',
        component: _dealer_detail_page__WEBPACK_IMPORTED_MODULE_8__["DealerDetailPage"]
    }
];
let DealerDetailPageModule = class DealerDetailPageModule {
};
DealerDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"],
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_6__["SharedModModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_dealer_detail_page__WEBPACK_IMPORTED_MODULE_8__["DealerDetailPage"]]
    })
], DealerDetailPageModule);



/***/ }),

/***/ "./src/app/delar-application/dealer-detail/dealer-detail.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/delar-application/dealer-detail/dealer-detail.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.submitbtn {\n  --background:#6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -16px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 30px 11px;\n    padding-right: 20px;\n  }\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.dealer-data {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGVhbGVyLWRldGFpbC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxkZWFsZXItZGV0YWlsXFxkZWFsZXItZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGVhbGVyLWRldGFpbC9kZWFsZXItZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxvQkFBQTtBQ0VKOztBREFFO0VBQ0k7SUFDQSxnQkFBQTtFQ0dKOztFRERJO0lBQ0ksVUFBQTtFQ0lSO0FBQ0Y7O0FERkU7RUFDSTtJQUNBLFNBQUE7RUNJSjs7RURGSTtJQUNJLFVBQUE7RUNLUjtBQUNGOztBREhFO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQ0tOOztBREhBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUNNTjtBQUNGOztBREpBO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLG1CQUFBO0VDTU47QUFDRjs7QURIQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDS0o7O0FESEE7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDS0o7O0FESEE7RUFFSSxlQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9kZWFsZXItZGV0YWlsL2RlYWxlci1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICAgIFxyXG59XHJcbi5zZWxlY3RhYmxlLWlucHV0e1xyXG4gICAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uc3VibWl0YnRue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiM2MjUyZWU7XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCl7XHJcbiAgICAgIC5pbnB1dHtcclxuICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgfVxyXG4gICAgICAjc3VibWl0YnRue1xyXG4gICAgICAgICAgd2lkdGg6MjAlO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAgIC5mb3JtLWZpZWxke1xyXG4gICAgICB6b29tOjgwJTtcclxuICAgICAgfVxyXG4gICAgICAjc3VibWl0YnRue1xyXG4gICAgICAgICAgd2lkdGg6ODAlO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIC5mb3JtLWZpZWxke1xyXG4gICAgICBtYXJnaW46IC0xNnB4IDVweCAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICB9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjMyMHB4KWFuZChtYXgtd2lkdGg6MTAyM3B4KXtcclxuICAgIC53cmFwcGVyLWNvbnRhaW5lcntcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MTAyNHB4KXtcclxuICAgIC53cmFwcGVyLWNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW46IDMwcHggMTFweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLmxhYmVsLWhlYWR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XHJcbn1cclxuLmRlYWxlci1sYWJlbFxyXG57XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uZGVhbGVyLWRhdGFcclxue1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59IiwiLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnN1Ym1pdGJ0biB7XG4gIC0tYmFja2dyb3VuZDojNjI1MmVlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtMTZweCA1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAzMHB4IDExcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxufVxuLmxhYmVsLWhlYWQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xufVxuXG4uZGVhbGVyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZGVhbGVyLWRhdGEge1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/dealer-detail/dealer-detail.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/delar-application/dealer-detail/dealer-detail.page.ts ***!
  \***********************************************************************/
/*! exports provided: DealerDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerDetailPage", function() { return DealerDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









let DealerDetailPage = class DealerDetailPage {
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
        this.getinvoicelist = (event) => {
            if (event.value)
                this.DealerForm.value.InvoiceNo = event.value;
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
                "/sensorise/getInvoiceSerial?companyid=apm&invoiceno=" +
                this.DealerForm.value.InvoiceNo;
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
                this.DealerForm.value.SerialNo = event.value;
        };
    }
    clear() {
        this.DealerForm.patchValue({
            InvoiceNo: "",
            SerialNo: "",
            iccidNumber: "",
            ImeiNumber: "",
        });
        this.hideSerialNo = true;
        this.show = false;
        this.showInvoice = false;
        this.showSerialNo = false;
    }
    reset() {
        this.DealerForm.patchValue({
            SerialNo: "",
        });
    }
    getdealerlist() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/sensorise/getDealerInvoice?companyid=apm&dealer=" +
            localStorage.getItem("userName");
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.Invoice = res;
        });
    }
    createForm() {
        this.DealerForm = this.formBuilder.group({
            InvoiceNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            SerialNo: [""],
            iccidNumber: [""],
            ImeiNumber: [""],
        });
    }
    submitBtn() {
        let selectdata = this.myGrid.getselectedrowindexes();
        var arr = [];
        for (let i = 0; i < selectdata.length; i++) {
            arr.push({
                carequestid: "",
                iccidno: this.myGrid["attrSource"]["originaldata"][i].iccidno,
                vltdsno: this.myGrid["attrSource"]["originaldata"][i].vltdsno,
                imei: this.myGrid["attrSource"]["originaldata"][i].imei,
                carequestdate: this.myGrid["attrSource"]["originaldata"][i].carequestdate,
                createdby: this.myGrid["attrSource"]["originaldata"][i].createdby,
                createddate: null,
                updatedby: this.myGrid["attrSource"]["originaldata"][i].createdby,
                updateddate: null,
            });
        }
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/sensorise/saveSensoriseCARequest?companyid=apm&branchid=apm";
        this.ajaxService.ajaxPostWithBody(url, arr).subscribe((res) => {
            if (res.message == "CA Request Saved Successfully") {
                this.commonService.showConfirm("CA Request Saved Successfully");
                this.modalController.dismiss();
                this.show = false;
                this.clear();
            }
            else {
                this.commonService.showConfirm("Please Contact Support Team");
            }
        });
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row;
        this.show = true;
    }
    SearchData() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/sensorise/getDealerSensoriseSalesAll?companyid=apm&invoiceno=" +
            this.DealerForm.value.InvoiceNo.trim() +
            "&serialno=" +
            this.DealerForm.value.SerialNo.trim() +
            "&iccidno=" +
            this.DealerForm.value.iccidNumber +
            "&imeino=" +
            this.DealerForm.value.ImeiNumber;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.tableData = res;
            if (res.length == 0) {
                this.commonService.showConfirm("Dealer Details not available");
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
                            text: "Iccid Number",
                            datafield: "iccidno",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 210,
                        },
                        {
                            text: "Imei Number",
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
                            text: "Iccid Number",
                            datafield: "iccidno",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 210,
                        },
                        {
                            text: "Imei Number",
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
        this.getdealerlist();
        this.createForm();
    }
};
DealerDetailPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("selectComponent", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic_selectable__WEBPACK_IMPORTED_MODULE_4__["IonicSelectableComponent"])
], DealerDetailPage.prototype, "selectComponent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridComponent"])
], DealerDetailPage.prototype, "myGrid", void 0);
DealerDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dealer-detail",
        template: __webpack_require__(/*! raw-loader!./dealer-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/dealer-detail/dealer-detail.page.html"),
        styles: [__webpack_require__(/*! ./dealer-detail.page.scss */ "./src/app/delar-application/dealer-detail/dealer-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]])
], DealerDetailPage);



/***/ })

}]);
//# sourceMappingURL=dealer-detail-dealer-detail-module-es2015.js.map