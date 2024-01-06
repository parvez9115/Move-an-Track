(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sensorise-product-detail-sensorise-product-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/sensorise-product-detail/sensorise-product-detail.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/sensorise-product-detail/sensorise-product-detail.page.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Sensorise Product Detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"wrapper-container\">\n    <ion-col size=\"12\">\n      <form [formGroup]=\"productdetails\">\n        <ion-row class=\"form-field\">\n          <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n            <ion-label class=\"label-head\">Action :</ion-label>\n            <ion-input type=\"text\" placeholder=\"Enter the Action\" class=\"input\"\n              formControlName=\"actionname\"></ion-input>\n          </ion-col>\n\n          <ion-col size=\"12\" size-lg=\"3.4\" size-md=\"2.4\">\n            <ion-label class=\"label-head\">Product Name :</ion-label>\n            <ion-input type=\"text\" placeholder=\"Enter the Product Name\" class=\"input\"\n              formControlName=\"productname\"></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"3.9\" size-md=\"3.9\">\n            <ion-label class=\"label-head\">Zoho Product Name :</ion-label>\n            <ionic-selectable (onChange)=\"selectvalue($event)\" class=\"input selectable-input\" [(ngModel)]=\"product\"\n              formControlName=\"zohoproductname\" placeholder=\"Select the Product Name\" [items]=\"books\" [canSearch]=\"true\"\n              [hasVirtualScroll]=\"true\" itemValueField=\"itemname\" itemTextField=\"itemname\">\n            </ionic-selectable>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n\n          <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n            <ion-label class=\"label-head\">Product Price :</ion-label>\n            <ion-input type=\"number\" placeholder=\"Enter the Price\" class=\"input\" formControlName=\"price\"></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n            <ion-label class=\"label-head\">Late Fees :</ion-label>\n            <ion-input type=\"number\" placeholder=\"Enter the Fees\" class=\"input\" formControlName=\"latefees\"></ion-input>\n          </ion-col>\n\n          <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\" style=\"margin-top: 27px; text-align: center\">\n            <ion-button *ngIf=\"!hideSerialNo\" class=\"submitbtn\" (click)=\"add()\"\n              [disabled]=\"!productdetails.valid || button\">Add</ion-button>\n            <ion-button *ngIf=\"hideSerialNo\" class=\"submitbtn\" (click)=\"edit()\"\n              [disabled]=\"!productdetails.valid || button\">Edit</ion-button>\n            <ion-button class=\"submitbtn\" (click)=\"clear()\">Clear</ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin-top: 5px\">\n    <ion-col size=\"12\">\n      <jqxGrid #myGrid (onRowclick)=\"myGridOnRowSelect($event)\" [theme]=\"'material'\" [width]=\"'99%'\" [autoheight]=\"true\"\n        [source]=\"dataAdapter\" [enablebrowserselection]=\"true\" [columns]=\"columns\" [sortable]=\"true\" [filterable]=\"true\"\n        [columns]=\"columns\" [columnsresize]=\"true\" [enabletooltips]=\"true\" [pageable]=\"true\" [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \">\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/delar-application/sensorise-product-detail/sensorise-product-detail.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/delar-application/sensorise-product-detail/sensorise-product-detail.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: SensoriseProductDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensoriseProductDetailPageModule", function() { return SensoriseProductDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sensorise_product_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sensorise-product-detail.page */ "./src/app/delar-application/sensorise-product-detail/sensorise-product-detail.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");









const routes = [
    {
        path: "",
        component: _sensorise_product_detail_page__WEBPACK_IMPORTED_MODULE_6__["SensoriseProductDetailPage"],
    },
];
let SensoriseProductDetailPageModule = class SensoriseProductDetailPageModule {
};
SensoriseProductDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_sensorise_product_detail_page__WEBPACK_IMPORTED_MODULE_6__["SensoriseProductDetailPage"]],
    })
], SensoriseProductDetailPageModule);



/***/ }),

/***/ "./src/app/delar-application/sensorise-product-detail/sensorise-product-detail.page.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/delar-application/sensorise-product-detail/sensorise-product-detail.page.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.documents {\n  margin: 12px 10px 0px;\n  text-align: center;\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.myGrid {\n  max-height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2Vuc29yaXNlLXByb2R1Y3QtZGV0YWlsL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXHNlbnNvcmlzZS1wcm9kdWN0LWRldGFpbFxcc2Vuc29yaXNlLXByb2R1Y3QtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2Vuc29yaXNlLXByb2R1Y3QtZGV0YWlsL3NlbnNvcmlzZS1wcm9kdWN0LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0VGOztBREFBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEQUE7RUFDRSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsZ0JBQUE7RUNHRjs7RUREQTtJQUNFLFVBQUE7RUNJRjtBQUNGOztBRERBO0VBQ0U7SUFDRSxTQUFBO0VDR0Y7O0VEREE7SUFDRSxVQUFBO0VDSUY7QUFDRjs7QUREQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VDR0Y7QUFDRjs7QURBQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDRUY7QUFDRjs7QURDQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9zZW5zb3Jpc2UtcHJvZHVjdC1kZXRhaWwvc2Vuc29yaXNlLXByb2R1Y3QtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgbWFyZ2luOiA3cHg7XHJcbn1cclxuXHJcbi5kb2N1bWVudHMge1xyXG4gIG1hcmdpbjogMTJweCAxMHB4IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxhYmVsLWhlYWQge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xyXG59XHJcbi5zZWxlY3RhYmxlLWlucHV0IHtcclxuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLnN1Ym1pdEJ0biB7XHJcbiAgbWFyZ2luOiAwcHggMTRweCAwcHggMHB4O1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAtLWNvbG9yOiAjN2M2OGY4O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcclxuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgem9vbTogODAlO1xyXG4gIH1cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweCkgYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDhweCAxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm15R3JpZCB7XHJcbiAgbWF4LWhlaWdodDogYXV0bztcclxufVxyXG4iLCIuaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIG1hcmdpbjogN3B4O1xufVxuXG4uZG9jdW1lbnRzIHtcbiAgbWFyZ2luOiAxMnB4IDEwcHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sYWJlbC1oZWFkIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5zdWJtaXRCdG4ge1xuICBtYXJnaW46IDBweCAxNHB4IDBweCAwcHg7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4ubXlHcmlkIHtcbiAgbWF4LWhlaWdodDogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/sensorise-product-detail/sensorise-product-detail.page.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/delar-application/sensorise-product-detail/sensorise-product-detail.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: SensoriseProductDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensoriseProductDetailPage", function() { return SensoriseProductDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









let SensoriseProductDetailPage = class SensoriseProductDetailPage {
    constructor(commonService, formBuilder, ajaxService, ete, platform) {
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.ajaxService = ajaxService;
        this.ete = ete;
        this.platform = platform;
        this.button = false;
        this.hideSerialNo = false;
        this.books = [];
    }
    createForm() {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        var todaytime = now.getHours() + ":" + now.getMinutes();
        this.productdetails = this.formBuilder.group({
            actionname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            productname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            zohoproductname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            latefees: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    clear() {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        var todaytime = now.getHours() + ":" + now.getMinutes();
        this.hideSerialNo = false;
        this.productdetails.patchValue({
            actionname: "",
            productname: "",
            zohoproductname: "",
            price: "",
            latefees: "",
        });
    }
    add() {
        this.button = true;
        var data;
        data = {
            id: "",
            actionname: this.productdetails.value.actionname.toString(),
            productname: this.productdetails.value.productname.toString(),
            zohoproductid: this.selectedItem.itemid.toString(),
            zohoproductname: this.selectedItem.itemname.toString(),
            price: this.productdetails.value.price.toString(),
            latefees: this.productdetails.value.latefees.toString(),
            createdby: localStorage.getItem("userName"),
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/sensorise/saveSensoriseProductDetails";
        this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
            if (res.message == "Sensorise Product Saved Successfully") {
                this.commonService.showConfirm(res.message);
                this.clear();
                this.button = false;
                this.getdatas();
            }
            else {
                this.commonService.showConfirm(res.message);
                this.button = false;
            }
        });
    }
    setValue() {
        this.button = false;
        this.hideSerialNo = true;
        this.commonService.presentLoader();
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/sensorise/getSensoriseProducts";
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.editvalue = res;
            this.commonService.dismissLoader();
            this.productdetails.patchValue({
                actionname: this.selectedRow.actionname,
                productname: this.selectedRow.productname,
                price: this.selectedRow.price,
                latefees: this.selectedRow.latefees,
            });
            let data = this.editvalue.filter((f) => f.itemname == this.selectedRow.zohoproductname);
            this.product = data[0];
        });
    }
    edit() {
        this.button = true;
        var data;
        data = {
            id: this.selectedRow.id.toString(),
            actionname: this.productdetails.value.actionname.toString(),
            productname: this.productdetails.value.productname.toString(),
            zohoproductid: this.product.itemid.toString(),
            zohoproductname: this.product.itemname.toString(),
            price: this.productdetails.value.price.toString(),
            latefees: this.productdetails.value.latefees.toString(),
            createdby: localStorage.getItem("userName"),
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/sensorise/saveSensoriseProductDetails";
        this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
            if (res.message == "Sensorise Product Saved Successfully") {
                this.commonService.showConfirm(res.message);
                this.clear();
                this.button = false;
                this.getdatas();
            }
            else {
                this.commonService.showConfirm(res.message);
                this.button = false;
            }
        });
    }
    getdatas() {
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/sensorise/getSensoriseProductDetail";
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.tableData = res;
            this.myGrid.clearselection();
            this.selectedRow = "";
            this.commonService.dismissLoader();
            this.renderer = (row, column, value) => {
                if (value === "" ||
                    value === null ||
                    value === undefined ||
                    value === ",") {
                    return "---";
                }
                else {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                        value +
                        "</span>");
                }
            };
            this.source = { localdata: this.tableData };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            this.columns = [
                {
                    text: "Action",
                    datafield: "actionname",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 200,
                },
                {
                    text: "Product Name",
                    datafield: "productname",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 400,
                },
                {
                    text: "Zoho Product Name",
                    datafield: "zohoproductname",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 400,
                },
                {
                    text: "Product Price",
                    datafield: "price",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 105,
                },
                {
                    text: "Late Fees",
                    datafield: "latefees",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 105,
                },
                {
                    text: "Create Date",
                    datafield: "createddate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "Created by",
                    datafield: "createdby",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "",
                    datafield: "Edit Detail",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 60,
                    cellsrenderer: () => {
                        return this.myPlatform == "desktop"
                            ? "Edit"
                            : "<button>Edit</button>";
                    },
                    buttonclick: (row) => {
                        this.setValue();
                    },
                },
            ];
        });
    }
    getproductname() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/sensorise/getSensoriseProducts";
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.books = res;
        });
    }
    selectvalue(ev) {
        this.selectedItem = ev.value;
        console.log(this.selectedItem);
        this.productdetails.patchValue({
            price: this.selectedItem.purchaserate,
        });
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row.bounddata;
    }
    ngAfterViewInit() {
        this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.createForm();
    }
    ionViewWillEnter() {
        this.getdatas();
        this.clear();
        this.getproductname();
    }
};
SensoriseProductDetailPage.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
], SensoriseProductDetailPage.prototype, "myGrid", void 0);
SensoriseProductDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sensorise-product-detail",
        template: __webpack_require__(/*! raw-loader!./sensorise-product-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/sensorise-product-detail/sensorise-product-detail.page.html"),
        styles: [__webpack_require__(/*! ./sensorise-product-detail.page.scss */ "./src/app/delar-application/sensorise-product-detail/sensorise-product-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], SensoriseProductDetailPage);



/***/ })

}]);
//# sourceMappingURL=sensorise-product-detail-sensorise-product-detail-module-es2015.js.map