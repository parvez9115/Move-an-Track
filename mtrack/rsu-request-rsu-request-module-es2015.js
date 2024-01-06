(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rsu-request-rsu-request-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/rsu-request/rsu-request.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/rsu-request/rsu-request.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>RSU Request</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row class=\"wrapper-container\">\r\n    <ion-col size=\"12\">\r\n      <form [formGroup]=\"RsurequestForm\">\r\n        <ion-row class=\"form-field\">\r\n          <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\" *ngIf=\"Showdata\">\r\n            <ion-label class=\"label-head\">Sales Distributor:</ion-label>\r\n            <ionic-selectable\r\n              class=\"input selectable-input\"\r\n              formControlName=\"SalesDistributor\"\r\n              placeholder=\"Select Sales Distributors\"\r\n              [items]=\"SalesDistributors\"\r\n              [canSearch]=\"true\"\r\n              [hasVirtualScroll]=\"true\"\r\n              [disabledItems]=\"data\"\r\n            >\r\n            </ionic-selectable>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\" *ngIf=\"showdata\">\r\n            <ion-label class=\"label-head\">Sales Distributor:</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              disabled\r\n              placeholder=\"Imei Number\"\r\n              formControlName=\"SalesDistributor\"\r\n              placeholder=\"Select Sales Distributors\"\r\n              class=\"input\"\r\n            >\r\n            </ion-input>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\">\r\n            <ion-label class=\"label-head\">Request ID:</ion-label>\r\n            <ionic-selectable\r\n              class=\"input selectable-input\"\r\n              formControlName=\"RequestId\"\r\n              placeholder=\"Select Request ID\"\r\n              [items]=\"RequestList\"\r\n              [canSearch]=\"true\"\r\n              [hasVirtualScroll]=\"true\"\r\n              [disabledItems]=\"data\"\r\n            >\r\n            </ionic-selectable>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\">\r\n            <ion-label class=\"label-head\">Iccid Number:</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              placeholder=\"Iccid Number\"\r\n              formControlName=\"iccidNumber\"\r\n              class=\"input\"\r\n            >\r\n            </ion-input>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\">\r\n            <ion-label class=\"label-head\">Imei Number:</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              placeholder=\"Imei Number\"\r\n              formControlName=\"ImeiNumber\"\r\n              class=\"input\"\r\n            >\r\n            </ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n      <ion-row>\r\n        <ion-col\r\n          size=\"12\"\r\n          size-lg=\"12\"\r\n          size-md=\"12\"\r\n          style=\"margin: 10px 0px 0px; text-align: center\"\r\n        >\r\n          <ion-button\r\n            class=\"submitbtn\"\r\n            (click)=\"SearchData()\"\r\n            [disabled]=\"!RsurequestForm.valid\"\r\n            >Search</ion-button\r\n          >\r\n          <ion-button class=\"submitbtn\" (click)=\"clear()\">Clear</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"padding: 10px\">\r\n        <ion-col size=\"12\">\r\n          <jqxGrid\r\n            *ngIf=\"show\"\r\n            #myGrid\r\n            [selectionmode]=\"'checkbox'\"\r\n            (onRowselect)=\"myGridOnRowSelect($event)\"\r\n            (onRowunselect)=\"myGridOnRowSelect($event)\"\r\n            [theme]=\"'material'\"\r\n            [width]=\"'99.5%'\"\r\n            [autoheight]=\"true\"\r\n            [source]=\"dataAdapter\"\r\n            [columns]=\"columns\"\r\n            [sortable]=\"true\"\r\n            [filterable]=\"true\"\r\n            [columns]=\"columns\"\r\n            [columnsresize]=\"true\"\r\n            [enabletooltips]=\"true\"\r\n            [pageable]=\"true\"\r\n            [showfilterrow]=\"true\"\r\n            style=\"\r\n              font-size: 16px;\r\n              text-align: center !important;\r\n              margin: auto;\r\n              cursor: pointer;\r\n            \"\r\n          >\r\n          </jqxGrid>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"showButton\">\r\n        <ion-col\r\n          size=\"12\"\r\n          size-lg=\"12\"\r\n          size-md=\"12\"\r\n          style=\"margin: 10px 0px 0px; text-align: end\"\r\n        >\r\n          <ion-button class=\"submitbtn\" (click)=\"Approvevalue($event)\"\r\n            >Rejected</ion-button\r\n          >\r\n          <ion-button class=\"submitbtn\" (click)=\"Approvevalue($event)\"\r\n            >Approved</ion-button\r\n          >\r\n          <ion-button class=\"submitbtn\" (click)=\"Approvevalue($event)\"\r\n            >Renewal</ion-button\r\n          >\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/delar-application/rsu-request/rsu-request.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/delar-application/rsu-request/rsu-request.module.ts ***!
  \*********************************************************************/
/*! exports provided: RSURequestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RSURequestPageModule", function() { return RSURequestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rsu_request_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rsu-request.page */ "./src/app/delar-application/rsu-request/rsu-request.page.ts");










const routes = [
    {
        path: '',
        component: _rsu_request_page__WEBPACK_IMPORTED_MODULE_8__["RSURequestPage"]
    }
];
let RSURequestPageModule = class RSURequestPageModule {
};
RSURequestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableModule"],
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_6__["SharedModModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_rsu_request_page__WEBPACK_IMPORTED_MODULE_8__["RSURequestPage"]]
    })
], RSURequestPageModule);



/***/ }),

/***/ "./src/app/delar-application/rsu-request/rsu-request.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/delar-application/rsu-request/rsu-request.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.submitbtn {\n  --background:#6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -16px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 30px 11px;\n    padding-right: 20px;\n  }\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.dealer-data {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcnN1LXJlcXVlc3QvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxccnN1LXJlcXVlc3RcXHJzdS1yZXF1ZXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcnN1LXJlcXVlc3QvcnN1LXJlcXVlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0FDRUo7O0FEQUU7RUFDSTtJQUNBLGdCQUFBO0VDR0o7O0VEREk7SUFDSSxVQUFBO0VDSVI7QUFDRjs7QURGRTtFQUNJO0lBQ0EsU0FBQTtFQ0lKOztFREZJO0lBQ0ksVUFBQTtFQ0tSO0FBQ0Y7O0FESEU7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FDS047O0FESEE7RUFDSTtJQUNJLFlBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQ01OO0FBQ0Y7O0FESkE7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsbUJBQUE7RUNNTjtBQUNGOztBREhBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNLSjs7QURIQTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNLSjs7QURIQTtFQUVJLGVBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL3JzdS1yZXF1ZXN0L3JzdS1yZXF1ZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgICBcclxufVxyXG4uc2VsZWN0YWJsZS1pbnB1dHtcclxuICAgIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnN1Ym1pdGJ0bntcclxuICAgIC0tYmFja2dyb3VuZDojNjI1MmVlO1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgICAuaW5wdXR7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgI3N1Ym1pdGJ0bntcclxuICAgICAgICAgIHdpZHRoOjIwJTtcclxuICAgICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgICAuZm9ybS1maWVsZHtcclxuICAgICAgem9vbTo4MCU7XHJcbiAgICAgIH1cclxuICAgICAgI3N1Ym1pdGJ0bntcclxuICAgICAgICAgIHdpZHRoOjgwJTtcclxuICAgICAgfVxyXG4gIH1cclxuICAuZm9ybS1maWVsZHtcclxuICAgICAgbWFyZ2luOiAtMTZweCA1cHggMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgfVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweClhbmQobWF4LXdpZHRoOjEwMjNweCl7XHJcbiAgICAud3JhcHBlci1jb250YWluZXJ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDAgMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCl7XHJcbiAgICAud3JhcHBlci1jb250YWluZXJ7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4IDExcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbi5sYWJlbC1oZWFke1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xyXG59XHJcbi5kZWFsZXItbGFiZWxcclxue1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmRlYWxlci1kYXRhXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufSIsIi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5zdWJtaXRidG4ge1xuICAtLWJhY2tncm91bmQ6IzYyNTJlZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTE2cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogMzBweCAxMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbi5sYWJlbC1oZWFkIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcbn1cblxuLmRlYWxlci1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmRlYWxlci1kYXRhIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/rsu-request/rsu-request.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/delar-application/rsu-request/rsu-request.page.ts ***!
  \*******************************************************************/
/*! exports provided: RSURequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RSURequestPage", function() { return RSURequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









let RSURequestPage = class RSURequestPage {
    constructor(formBuilder, modalController, ajaxService, commonService) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.show = false;
        this.Showdata = true;
        this.showdata = false;
        this.showButton = false;
    }
    clear() {
        this.RsurequestForm.patchValue({
            SalesDistributor: "",
            RequestId: "",
            iccidNumber: "",
            ImeiNumber: ""
        });
        this.show = false;
        this.showButton = false;
    }
    getsalesDistributors() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + '/sensorise/getDealer';
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(res => {
            this.SalesDistributors = res;
        });
    }
    getrequestList() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + '/sensorise/getRsuRequest?companyid=apm&dealer=' + localStorage.getItem('userName');
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(res => {
            this.RequestList = res;
        });
    }
    createForm() {
        this.RsurequestForm = this.formBuilder.group({
            SalesDistributor: [''],
            RequestId: [''],
            iccidNumber: ['',],
            ImeiNumber: ['',]
        });
    }
    submitBtn() {
        let selectdata = this.myGrid.getselectedrowindexes();
        var arr = [];
        for (let i = 0; i < selectdata.length; i++) {
            arr.push({
                "carequestid": "",
                "iccidno": this.myGrid['attrSource']['originaldata'][i].iccidno,
                "vltdsno": this.myGrid['attrSource']['originaldata'][i].vltdsno,
                "imei": this.myGrid['attrSource']['originaldata'][i].imei,
                "carequestdate": this.myGrid['attrSource']['originaldata'][i].carequestdate,
                "createdby": this.myGrid['attrSource']['originaldata'][i].createdby,
                "createddate": null,
                "updatedby": this.myGrid['attrSource']['originaldata'][i].createdby,
                "updateddate": null,
            });
        }
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + '/sensorise/saveSensoriseCARequest?companyid=apm&branchid=apm';
        this.ajaxService.ajaxPostWithBody(url, arr).subscribe(res => {
            if (res.message == "CA Request Saved Successfully") {
                this.commonService.showConfirm('CA Request Saved Successfully');
                this.modalController.dismiss();
                this.clear();
            }
            else {
                this.commonService.showConfirm('Please Contact Support Team');
            }
        });
    }
    Approvevalue(event) {
        let selectdata = this.myGrid.getselectedrowindexes();
        var arr = [];
        for (let i = 0; i < selectdata.length; i++) {
            if (event.target.innerText == 'RENEWAL') {
                arr.push({
                    "iccid": this.myGrid['attrSource']['originaldata'][i].iccidno,
                });
            }
            else {
                arr.push({
                    "rsurequestid": this.myGrid['attrSource']['originaldata'][i].rsurequestid,
                    "iccidno": this.myGrid['attrSource']['originaldata'][i].iccidno,
                    "imei": this.myGrid['attrSource']['originaldata'][i].imei,
                    "rsurequestdate": "",
                    "createdby": localStorage.userName,
                    "createddate": null,
                    "updatedby": null,
                    "updateddate": null
                });
            }
        }
        if (event.target.innerText == 'REJECTED') {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + '/sensorise/saveSensoriseRSURequest?companyid=apm&branchid=apm&dealer=' + localStorage.getItem('userName') + '&rsustatus=' + event.target.innerText;
        }
        else if (event.target.innerText == 'APPROVED') {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + '/sensorise/saveSensoriseRSURequest?companyid=apm&branchid=apm&dealer=' + localStorage.getItem('userName') + '&rsustatus=' + event.target.innerText;
        }
        else {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + '/sensorise/getSensoriseRSU?companyid=apm&branchid=apm&updatedby=' + localStorage.getItem('userName');
        }
        this.ajaxService.ajaxPostWithString(url, arr).subscribe(response => {
            let res = JSON.parse(response);
            if (res.message == "RSU Request Saved Successfully") {
                this.commonService.showConfirm('RSU Request Saved Successfully');
                this.modalController.dismiss();
                this.clear();
            }
            else if (res.Message == "Renewal Saved Successfully") {
                this.commonService.showConfirm('Renewal Saved Successfully');
                this.modalController.dismiss();
                this.clear();
            }
            else {
                this.commonService.showConfirm('Please Contact Support Team');
            }
        });
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row;
        if (this.myGrid.getselectedrowindexes().length > 0) {
            this.showButton = true;
        }
        else {
            this.showButton = false;
        }
    }
    SearchData() {
        if (this.RsurequestForm.value.SalesDistributor == '' && this.RsurequestForm.value.RequestId == '' && this.RsurequestForm.value.iccidNumber == '' && this.RsurequestForm.value.ImeiNumber == '') {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + '/sensorise/getSensoriseRSURequest?companyid=apm';
        }
        else {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + '/sensorise/getSensoriseSearchRSURequest?companyid=apm' + '&dealer=' + this.RsurequestForm.value.SalesDistributor + '&iccid=' + this.RsurequestForm.value.iccidNumber + '&imei=' + this.RsurequestForm.value.ImeiNumber + '&rsurequestid=' + this.RsurequestForm.value.RequestId;
        }
        this.ajaxService.ajaxGet(url).subscribe(res => {
            this.tableData = res;
            if (res.length == 0) {
                this.commonService.showConfirm("Rsu Request Detail not available");
                this.show = false;
            }
            else {
                this.show = true;
                this.renderer = (row, column, value) => {
                    if (value == "" || null || undefined) {
                        return "---";
                    }
                    else {
                        return '<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' + value + '</span>';
                    }
                };
                this.source = { localdata: this.tableData };
                this.dataAdapter = new jqx.dataAdapter(this.source);
                this.columns = [
                    { text: 'RSU Request ID', datafield: 'rsurequestid', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center', width: 210 },
                    { text: 'RSU Request Date', datafield: 'rsurequestdate', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center', width: 210 },
                    { text: 'RSU Request Status', datafield: 'rsustatus', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center', width: 210 },
                    { text: 'Iccid Number', datafield: 'iccidno', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center', width: 210 },
                    { text: 'Imei Number', datafield: 'imei', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center', width: 210 },
                    { text: 'Distributor', datafield: 'distributor', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center', width: 210 },
                    { text: 'SR Number', datafield: 'srno', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center', width: 210 },
                    { text: 'SR Date', datafield: 'srdate', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center', width: 210 },
                    { text: 'SR Status', datafield: 'srstatus', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center', width: 210 },
                ];
            }
        });
    }
    ngOnInit() {
        if (localStorage.getItem('corpId') == 'apm') {
            this.Showdata = true;
            this.showdata = false;
        }
        else {
            this.Showdata = false;
            this.showdata = true;
        }
        this.getsalesDistributors();
        this.getrequestList();
        this.createForm();
        this.SearchData();
        this.clear();
    }
};
RSURequestPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selectComponent', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic_selectable__WEBPACK_IMPORTED_MODULE_4__["IonicSelectableComponent"])
], RSURequestPage.prototype, "selectComponent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myGrid', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridComponent"])
], RSURequestPage.prototype, "myGrid", void 0);
RSURequestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rsu-request',
        template: __webpack_require__(/*! raw-loader!./rsu-request.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/rsu-request/rsu-request.page.html"),
        styles: [__webpack_require__(/*! ./rsu-request.page.scss */ "./src/app/delar-application/rsu-request/rsu-request.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]])
], RSURequestPage);



/***/ })

}]);
//# sourceMappingURL=rsu-request-rsu-request-module-es2015.js.map