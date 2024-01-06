(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicle-creation-vehicle-creation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/vehicle-creation/vehicle-creation.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/vehicle-creation/vehicle-creation.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Vehicle Creation</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"wrapper-container\">\r\n        <form [formGroup]=\"vehicleCreation\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"label-text\">Company info</ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"form-field\">\r\n            <ion-col size=\"7\" size-lg=\"5\" size-md=\"5\">\r\n              <input class=\"input col\" type=\"search\" list=\"cars\" (keypress)=\"omit_special_char($event)\"\r\n                (focusout)=\"checkCompany(event)\" formControlName=\"companyName\" placeholder=\"Company name\" />\r\n              <datalist id=\"cars\">\r\n                <option *ngFor=\"let names of companyId\">{{names}}</option>\r\n              </datalist>\r\n            </ion-col>\r\n            <ion-col size=\"3\" size-lg=\"3\" size-md=\"3\" style=\"text-align: end\">\r\n              <ion-button class=\"submitbtn\" (click)=\"addcompany()\">+ Add Company</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"label-text\">Location</ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"form-field\">\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-input type=\"text\" formControlName=\"ContactNumber\" disabled placeholder=\"Contact Number\"\r\n                class=\"input\"></ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-input type=\"email\" formControlName=\"email\" disabled=\"true\" placeholder=\"E-mail\"\r\n                class=\"input\"></ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-input type=\"text\" formControlName=\"address1\" disabled=\"true\" placeholder=\"Address line 1\"\r\n                class=\"input\"></ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-input type=\"text\" formControlName=\"address2\" disabled=\"true\" placeholder=\"Address line 2\"\r\n                class=\"input\"></ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-input type=\"text\" formControlName=\"city\" disabled=\"true\" placeholder=\"City\"\r\n                class=\"input\"></ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-select class=\"input\" formControlName=\"country\" placeholder=\"Country\" value=\"India\" disabled=\"true\">\r\n                <ion-select-option *ngFor=\"let countries of country\"\r\n                  [value]=\"countries\">{{countries}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"label-text\">Assets</ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"form-field\">\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <input class=\"input col\" type=\"search\" list=\"num\" (change)=\"checkImei()\" formControlName=\"imeiNo\"\r\n                placeholder=\"Imei number\" />\r\n              <datalist id=\"num\">\r\n                <option *ngFor=\"let numbers of imeiNo\">{{numbers}}</option>\r\n              </datalist>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\" *ngIf=\"show\">\r\n              <ion-input type=\"text\" formControlName=\"simNo\" placeholder=\"Sim number/serial number\"\r\n                class=\"input\"></ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\" *ngIf=\"show\">\r\n              <ion-input type=\"text\" formControlName=\"simNo2\" placeholder=\"Sim number 2\" class=\"input\"></ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-input type=\"text\" formControlName=\"plateNo\" placeholder=\"Plate number\" class=\"input\"></ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-select class=\"input\" formControlName=\"assetCategory\" placeholder=\"Asset category\">\r\n                <ion-select-option *ngFor=\"let Category of assertCategories\"\r\n                  [value]=\"Category\">{{Category}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-input type=\"number\" formControlName=\"odometer\" placeholder=\"Odometer\" class=\"input\"></ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\" *ngIf=\"show\">\r\n              <ion-select class=\"input\" formControlName=\"manufacture\" (ionChange)=\"getModelData($event,manufacture)\"\r\n                placeHolder=\"Manufacture\">\r\n                <ion-select-option *ngFor=\"let manufacture of manufacture\" [value]=\"manufacture.type\">\r\n                  {{manufacture.name}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\" *ngIf=\"show\">\r\n              <ion-select [disabled]=\"formDisplay\" class=\"input\" [disabled]=\"!manufacture\" formControlName=\"model\"\r\n                placeHolder=\"Model\">\r\n                <ion-select-option *ngFor=\"let model of model\" [value]=\"model.type\">\r\n                  {{model.name}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\" *ngIf=\"show\">\r\n              <ion-select class=\"input\" formControlName=\"provider\" placeHolder=\"Provider\">\r\n                <ion-select-option *ngFor=\"let provider of provider\" [value]=\"provider.sim\">\r\n                  {{provider.sim}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\" *ngIf=\"show\">\r\n              <ion-select class=\"input\" formControlName=\"provider2\" placeHolder=\"Provider 2\">\r\n                <ion-select-option *ngFor=\"let provider of provider\" [value]=\"provider.sim\">\r\n                  {{provider.sim}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n\r\n        <ion-row>\r\n          <ion-col class=\"ion-text-center\"><ion-button [disabled]=\"!vehicleCreation.valid || button\"\r\n              (click)=\"newSubmit()\" id=\"submitbtn\">submit</ion-button></ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/delar-application/vehicle-creation/vehicle-creation-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/vehicle-creation/vehicle-creation-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: VehicleCreationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleCreationPageRoutingModule", function() { return VehicleCreationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _vehicle_creation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicle-creation.page */ "./src/app/delar-application/vehicle-creation/vehicle-creation.page.ts");




const routes = [
    {
        path: '',
        component: _vehicle_creation_page__WEBPACK_IMPORTED_MODULE_3__["VehicleCreationPage"]
    }
];
let VehicleCreationPageRoutingModule = class VehicleCreationPageRoutingModule {
};
VehicleCreationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VehicleCreationPageRoutingModule);



/***/ }),

/***/ "./src/app/delar-application/vehicle-creation/vehicle-creation.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/delar-application/vehicle-creation/vehicle-creation.module.ts ***!
  \*******************************************************************************/
/*! exports provided: VehicleCreationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleCreationPageModule", function() { return VehicleCreationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var _vehicle_creation_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vehicle-creation-routing.module */ "./src/app/delar-application/vehicle-creation/vehicle-creation-routing.module.ts");
/* harmony import */ var _vehicle_creation_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vehicle-creation.page */ "./src/app/delar-application/vehicle-creation/vehicle-creation.page.ts");




// import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';




let VehicleCreationPageModule = class VehicleCreationPageModule {
};
VehicleCreationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            ionic_selectable__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _vehicle_creation_routing_module__WEBPACK_IMPORTED_MODULE_6__["VehicleCreationPageRoutingModule"]
        ],
        declarations: [_vehicle_creation_page__WEBPACK_IMPORTED_MODULE_7__["VehicleCreationPage"]]
    })
], VehicleCreationPageModule);



/***/ }),

/***/ "./src/app/delar-application/vehicle-creation/vehicle-creation.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/delar-application/vehicle-creation/vehicle-creation.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n#submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 40%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.col {\n  padding-left: 15px;\n  width: 100%;\n}\n\nion-button:hover {\n  --background-color: #6c2a84;\n}\n\n.label-text {\n  color: #6252ee;\n  font-size: 17px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n\n  .label-text {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vdmVoaWNsZS1jcmVhdGlvbi9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFx2ZWhpY2xlLWNyZWF0aW9uXFx2ZWhpY2xlLWNyZWF0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vdmVoaWNsZS1jcmVhdGlvbi92ZWhpY2xlLWNyZWF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UscUJBQUE7QUNFRjs7QURBQTtFQUNFO0lBQ0UsZ0JBQUE7RUNHRjs7RUREQTtJQUNFLFVBQUE7RUNJRjtBQUNGOztBREZBO0VBQ0U7SUFDRSxTQUFBO0VDSUY7O0VERkE7SUFDRSxVQUFBO0VDS0Y7QUFDRjs7QURIQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUNLRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ0lGOztBREZBO0VBQ0UsMkJBQUE7QUNLRjs7QURGQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0tGOztBREZBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUNLRjs7RURIQTtJQUNFLGVBQUE7RUNNRjtBQUNGOztBREpBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUNNRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vdmVoaWNsZS1jcmVhdGlvbi92ZWhpY2xlLWNyZWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbn1cclxuI3N1Ym1pdGJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNjI1MmVlO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgem9vbTogODAlO1xyXG4gIH1cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG59XHJcbi5mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IC01cHggNXB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgLy8gZGlzcGxheTogZmxleDtcclxuICAvLyBwbGFjZS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuLmNvbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbmlvbi1idXR0b246aG92ZXIge1xyXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzZjMmE4NDtcclxufVxyXG5cclxuLmxhYmVsLXRleHQge1xyXG4gIGNvbG9yOiAjNjI1MmVlO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweCkgYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLmxhYmVsLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDoxMDI0cHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiA4cHggMXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuIiwiLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xufVxuXG4jc3VibWl0YnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNjI1MmVlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmNvbCB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1idXR0b246aG92ZXIge1xuICAtLWJhY2tncm91bmQtY29sb3I6ICM2YzJhODQ7XG59XG5cbi5sYWJlbC10ZXh0IHtcbiAgY29sb3I6ICM2MjUyZWU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAubGFiZWwtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/vehicle-creation/vehicle-creation.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/delar-application/vehicle-creation/vehicle-creation.page.ts ***!
  \*****************************************************************************/
/*! exports provided: VehicleCreationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleCreationPage", function() { return VehicleCreationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









let VehicleCreationPage = class VehicleCreationPage {
    constructor(ajaxService, router, commonService, formBuilder, modalController, alertController) {
        this.ajaxService = ajaxService;
        this.router = router;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.alertController = alertController;
        this.editfleet = "Fleet Manager";
        this.addCompany = false;
        this.region = { India: "Asia/Kolkata", "Saudi Arabia": "Asia/Riyadh" };
        // manufacture = [{name: 'APMKT', type: 'Concox'}, {name: 'APMKT-AIS140', type:'APMKT'}];
        // modelTypes = {"APMKT01 Basic":"KT-Mini","APMKT01 Advance":"KT-Mini","APMKT02 Basic":"TK003","APMKT02 Advance":"TK003","APMKT03 Basic":"KT-Mini","APMKT03 Advance":"KT-Mini","APMKT04":"wetrack","APMKT05":"GT06N","APMKT06":"GT300","APMKT07":"JV200","APMKT08":"KT-Mini","APMKT09":"KT-Mini","APMKT10":"GT800","APMKT11":"GT06D",
        //  "AIS1401A":"AIS1401A","AIS1402A":"AIS1402A","Basic":"Basic"}
        // country={}
        this.manufacture = [];
        this.modelTypes = [];
        this.model = [];
        this.companyCheck = false;
        this.provider = [
            { sim: "Idea" },
            { sim: "Airtel" },
            { sim: "Vodafone" },
            { sim: "Bsnl" },
        ];
        this.show = false;
        this.showFleet = false;
        this.imeiTrue = false;
        this.assertCategories = [
            "Car",
            "Bike",
            "Bus",
            "Truck",
            "Auto",
            "Fork Lifts",
            "Light Towers",
            "Welding Machines",
            "Deepsea Generator",
            "Compressors",
            "32kw CEM7 Generators",
            "Battery",
            "Bobcat",
            "Tanker",
            "Loader",
            "Dabbab",
            "Dumper",
            "Street Sweeper",
            "Towed Street Sweeper",
            "Compactor",
            "Double Cabin",
            "Hook Lift",
            "Crane",
            "Small Truck",
        ];
        this.showImei = false;
        this.detailShow = false;
        this.CompanyValid = false;
        this.button = false;
    }
    omit_special_char(event) {
        var k;
        k = event.charCode; //         k = event.keyCode;  (Both can be used)
        return ((k > 64 && k < 91) ||
            (k > 96 && k < 123) ||
            k == 8 ||
            k == 32 ||
            (k >= 48 && k <= 57));
    }
    clear() {
        this.vehicleCreation.patchValue({
            ContactNumber: "",
            email: "",
            address1: "",
            address2: "",
            city: "",
            country: "",
        });
    }
    reset() {
        this.vehicleCreation.patchValue({
            companyName: "",
        });
    }
    checkCompany() {
        if (this.vehicleCreation.value.companyName.length != 0) {
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
                "/global/getDealerAddressInfo?companyid=" +
                this.vehicleCreation.value.companyName +
                "&suffix=" +
                this.suffix;
            this.ajaxService.ajaxGet(url).subscribe((res) => {
                if (Object.keys(res).length == 0) {
                    // this.commonService.showConfirm("Company Does Not Exits");
                    this.button = false;
                    this.addModel();
                }
                else {
                    this.vehicleCreation.patchValue({
                        ContactNumber: res.contactno,
                        email: res.addressemail,
                        address1: res.addressline1,
                        address2: res.addressline2,
                        city: res.addresscity,
                        country: res.countrycode,
                    });
                }
            });
            for (var i = 0; i < this.companyId.length; i++) {
                if (this.companyId[i] == this.vehicleCreation.value.companyName) {
                    console.log("true");
                    this.addCompany = true;
                    this.showFleet = true;
                    // this.createForm2();
                }
            }
            if (this.addCompany == true) {
                this.imeiTrue = true;
            }
            else if (this.addCompany == false) {
                this.imeiTrue = false;
                this.showFleet = false;
            }
            this.addCompany = false;
            this.getFleetManager();
        }
        else {
            this.clear();
        }
    }
    addModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Messsage",
                backdropDismiss: false,
                message: "Company Does Not Exits",
                buttons: [
                    {
                        text: "Ok",
                        handler: (data) => {
                            this.reset();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    checkImei() {
        for (var i = 0; i < this.imeiNo.length; i++) {
            if (this.imeiNo[i] == this.vehicleCreation.value.imeiNo) {
                console.log("imeitrue");
                // this.addCompany=true;
                //  this.showImei=true;
                this.detailShow = true;
                this.show = true;
                this.companyCheck = true;
                //  this.getImeiDetails();
            }
        }
        if (this.detailShow == true) {
            this.show = false;
        }
        else if (this.detailShow == false) {
            this.show = true;
        }
        this.detailShow = false;
    }
    getModelData() {
        this.model = this.modelTypes[this.vehicleCreation.value.manufacture];
    }
    getManufactures() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
            "/login/getPreferences?key=manufactures&companyId=" +
            this.companyDetail.companyID;
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.manufacture = res;
            console.log(res);
        });
    }
    getModels() {
        // const url = serverUrl.web + '/api/vts/company/preference/'+JSON.stringify({"key":"newmodel","companyID":this.companyDetail.companyID});
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
            "/login/getPreferences?key=dealerModel&companyId=" +
            this.companyDetail.companyID;
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.modelTypes = res;
            console.log(res);
        });
    }
    getModelType() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
            "/device/assettype?companyId=" +
            localStorage.getItem("corpId") +
            "&userId=" +
            localStorage.getItem("userName");
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.vehicleTypes = res;
            console.log(res);
        });
    }
    addcompany() {
        this.router.navigateByUrl("/tabs-login/dashboard/add-company");
    }
    // createForm2(){
    //   this.vehicleCreation=this.formBuilder.group({
    //     // loginId: ['', ],
    //     password: ['',Validators.required],
    //     contact:['',Validators.required],
    //     email:['',],
    //     address1:['',],
    //     address2:['',],
    //     city:['',],
    //     country:['',],
    //     imeiNo:['',[Validators.required,Validators.minLength(15),Validators.maxLength(15)]],
    //     simNo:[''],
    //     plateNo:['',Validators.required],
    //     assetCategory:['',Validators.required],
    //     odometer:['',Validators.required],
    //     companyName:['',Validators.required],
    //     manufacture:['',],
    //     model:['',],
    //     provider:['',],
    //     // fleetManager:['',],
    //     simNo2:[''],
    //     provider2:[''],
    //   });
    //   this.vehicleCreation.reset();
    // }
    createForm() {
        this.vehicleCreation = this.formBuilder.group({
            // loginId: ['', ],
            password: [""],
            contact: [""],
            email: [""],
            address1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            address2: [""],
            city: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            country: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            imeiNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            simNo: [""],
            plateNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            assetCategory: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            odometer: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            companyName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            manufacture: [""],
            ContactNumber: [""],
            model: [""],
            provider: [""],
            simNo2: [""],
            provider2: [""],
        });
        this.vehicleCreation.reset();
    }
    getFleetManager() {
        const companyName = this.vehicleCreation.value.companyName;
        const companyDetail = {
            branchID: companyName,
            companyID: companyName,
            userId: companyName,
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
            "/user/fleetmanager?companyId=" +
            localStorage.getItem("corpId") +
            "&branchId=" +
            localStorage.getItem("corpId");
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.fleet = ["NoFleet"];
            console.log(res);
            if (res.length > 0) {
                for (let i = 0; i < res.length; i++) {
                    this.fleet.push(res[i].fleetManager);
                }
            }
            else {
                this.fleet.push("NoFleet");
            }
        });
    }
    getCompanyID() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/global/getdealercompanylist?suffix=" + this.suffix;
        console.log(url);
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            console.log(res);
            this.companyId = res;
        });
    }
    validContact() {
        let contactCheck = false;
        for (var i = 0; i < this.contactList.length; i++) {
            if (this.contactList[i].contact == this.vehicleCreation.value.contact) {
                this.vehicleCreation.patchValue({
                    companyName: this.contactList[i].companyId,
                    password: "",
                });
                contactCheck = true;
                this.imeiTrue = true;
            }
        }
        if (!contactCheck && this.vehicleCreation.value.password == "") {
            this.vehicleCreation.patchValue({
                companyName: "",
            });
            this.imeiTrue = false;
        }
    }
    getContactList() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/global/getdealercontactlist?suffix=" + this.suffix;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            console.log(res);
            this.contactList = res;
        });
    }
    getImeiNO() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/global/getdealerimeilist?suffix=" + this.suffix;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.imeiNo = res;
        });
    }
    getCountries() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
            "/login/getPreferences?key=countries&companyId=" +
            this.companyDetail.companyID;
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.country = res;
        });
    }
    getCountryCode() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
            "/login/getPreferences?key=countrycode&companyId=" +
            this.companyDetail.companyID;
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.countryCode = res;
            console.log(res);
        });
    }
    getImeiDetails() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
            "/global/getInventorydevice?imeiNo=" +
            this.vehicleCreation.value.imeiNo;
        this.ajaxService.ajaxGetJson(url).subscribe((res) => {
            console.log(res);
            this.imeiDatas = res;
            this.vehicleCreation.patchValue({
                manufacture: this.imeiDatas["manufacturerName"],
                model: this.imeiDatas["modelName"],
                provider: this.imeiDatas["provider"],
                simNo: this.imeiDatas["simCardNo"],
                simNo2: this.imeiDatas["additionalSimcard1"],
                provider2: this.imeiDatas["additionalProvider1"],
            });
            //   this.assign();
        });
    }
    newSubmit() {
        this.button = true;
        this.commonService.presentLoader();
        if (this.imeiNo.includes(this.vehicleCreation.value.imeiNo + "")) {
            this.getImeiDetails();
        }
        var userName = this.vehicleCreation.value.companyName == null
            ? this.vehicleCreation.value.companyName
            : this.vehicleCreation.value.companyName;
        if (this.vehicleCreation.value.fleetManager == "NoFleet") {
            var fleetManager = localStorage.getItem("userName");
        }
        var fleetManagers;
        if (this.vehicleCreation.value.fleetmanager == "") {
            (fleetManagers = userName + "-ca"),
                this.vehicleCreation.value.companyName;
        }
        else {
            // fleetManagers=this.vehicleCreation.value.fleetmanager
            fleetManagers =
                userName + "-ca" + "," + this.vehicleCreation.value.companyName;
            var checkedValues = [];
            var unCheckedValues = [];
            unCheckedValues = this.fleet.filter((val) => !fleetManagers.includes(val));
            for (var i = 0; i < unCheckedValues.length; i++) {
                if (unCheckedValues[i] === "NoFleet") {
                    unCheckedValues.splice(i, 1);
                    i--;
                }
            }
            if (checkedValues.length == 0) {
                checkedValues.toString();
            }
        }
        if (this.addCompany != true) {
            unCheckedValues = [];
        }
        const countryCode = this.countryCode[this.vehicleCreation.value.country] == undefined
            ? ""
            : this.countryCode[this.vehicleCreation.value.country];
        const region = this.region[this.vehicleCreation.value.country] == undefined
            ? ""
            : this.region[this.vehicleCreation.value.country];
        setTimeout(() => {
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/site/vehicleCreation";
            let dataJson = {
                companyId: this.vehicleCreation.value.companyName,
                branchId: this.vehicleCreation.value.companyName,
                vin: "",
                suffix: localStorage.getItem("companySuffix"),
                imeiNo: this.vehicleCreation.value.imeiNo.toString(),
                simcardNo: this.vehicleCreation.value.simNo == null
                    ? ""
                    : this.vehicleCreation.value.simNo.toString(),
                emailId: this.vehicleCreation.value.email == null
                    ? ""
                    : this.vehicleCreation.value.email.toString(),
                providerName: localStorage.getItem("companyId"),
                password: this.vehicleCreation.value.password == null
                    ? ""
                    : this.vehicleCreation.value.password.toString(),
                provider: this.vehicleCreation.value.provider == null
                    ? ""
                    : this.vehicleCreation.value.provider.toString(),
                firstName: this.vehicleCreation.value.companyName,
                contactNo: this.vehicleCreation.value.ContactNumber == null
                    ? ""
                    : this.vehicleCreation.value.ContactNumber.toString(),
                countryCode: countryCode,
                additionalSimcard1: this.vehicleCreation.value.simNo2 == null
                    ? ""
                    : this.vehicleCreation.value.simNo2.toString(),
                additionalProvider1: this.vehicleCreation.value.provider2 == null
                    ? ""
                    : this.vehicleCreation.value.provider2.toString(),
                userCountry: countryCode,
                manufactureName: this.vehicleCreation.value.manufacture == null
                    ? ""
                    : this.vehicleCreation.value.manufacture,
                modelName: this.vehicleCreation.value.model == null
                    ? ""
                    : this.vehicleCreation.value.model,
                dealerId: "3",
                companyName: this.vehicleCreation.value.companyName,
                address: this.vehicleCreation.value.address1 == null
                    ? ""
                    : this.vehicleCreation.value.address1,
                city: this.vehicleCreation.value.city == null
                    ? ""
                    : this.vehicleCreation.value.city,
                companyAdminID: "",
                region: "Asia/Kolkata",
                categoryrole: "fleetmanager",
                userCity: this.vehicleCreation.value.city == null
                    ? ""
                    : this.vehicleCreation.value.city,
                useraddress1: this.vehicleCreation.value.address1 == null
                    ? ""
                    : this.vehicleCreation.value.address1,
                useraddress2: this.vehicleCreation.value.address2 == null
                    ? ""
                    : this.vehicleCreation.value.address2,
                userId: this.vehicleCreation.value.companyName + "-ca",
                userName: this.vehicleCreation.value.companyName,
                userEntry: "",
                fleetUser: fleetManagers,
                plateNo: this.vehicleCreation.value.plateNo,
                assetCode: "",
                devModel: "",
                applicationType: "false",
                convertedDate: "2022-02-13",
                DefaultWarnty: "2023-02-12",
                type: "Type",
                icon: this.vehicleCreation.value.assetCategory,
                odometer: JSON.stringify(this.vehicleCreation.value.odometer),
            };
            // let dataJson = {
            //   "companyId": this.vehicleCreation.value.companyName,
            //   "branchId":this.vehicleCreation.value.companyName,
            //   "vin": "",
            //   "suffix":localStorage.getItem('companySuffix'),
            //   "imeiNo": this.vehicleCreation.value.imeiNo.toString(),
            //   "simcardNo":   this.vehicleCreation.value.simNo == null ? "" : (this.vehicleCreation.value.simNo).toString(),
            //   "emailId": this.vehicleCreation.value.email == null ? "": (this.vehicleCreation.value.email).toString(),
            //   "providerName": this.vehicleCreation.value.provider == null ? "" : (this.vehicleCreation.value.provider).toString(),
            //   "password":this.vehicleCreation.value.password,
            //   "firstName": this.vehicleCreation.value.companyName,
            //  "contactNo":    this.vehicleCreation.value.contact == null ? "" : (this.vehicleCreation.value.contact).toString(),
            //   "branchID":  this.vehicleCreation.value.companyName,
            //   "companyID": this.vehicleCreation.value.companyName,
            //   "simno":  this.vehicleCreation.value.simNo == null ? "" : (this.vehicleCreation.value.simNo).toString(),
            //   "additionalSimcard1": this.vehicleCreation.value.simNo2 == null ? "" : (this.vehicleCreation.value.simNo2).toString(),
            //   "additionalProvider1":  this.vehicleCreation.value.provider2 == null ? "" : (this.vehicleCreation.value.provider2).toString(),
            //   "imei": this.vehicleCreation.value.imeiNo.toString(),
            //   "manufactureName":  this.vehicleCreation.value.manufacture == null ? "" : this.vehicleCreation.value.manufacture,
            //   "modelName": this.vehicleCreation.value.model == null ? "" : this.vehicleCreation.value.model,
            //   "dealerId": "3",
            //   "companyName": this.vehicleCreation.value.companyName,
            //   "address": this.vehicleCreation.value.address1 == null ? "" : this.vehicleCreation.value.address1,
            //   "city":this.vehicleCreation.value.city == null ? "" : this.vehicleCreation.value.city,
            //   "region": region,
            //   "countryCode": countryCode,
            //   "companyAdminID": "",
            //   "emailID":  this.vehicleCreation.value.email == null ? "": (this.vehicleCreation.value.email).toString(),
            //   "userName":this.vehicleCreation.value.companyName,
            //   "categoryrole": "fleetmanager",
            //   "userCity": "city",
            //   "useraddress1":  this.vehicleCreation.value.address1 == null ? "" : this.vehicleCreation.value.address1,
            //   "useraddress2":  this.vehicleCreation.value.address2 == null ? "" : this.vehicleCreation.value.address2,
            //   "userCountry": countryCode,
            //   "manufacture": this.vehicleCreation.value.manufacture == null ? "" : this.vehicleCreation.value.manufacture,
            //   "modal":   this.vehicleCreation.value.model == null ? "" : this.vehicleCreation.value.model,
            //   "userId":this.vehicleCreation.value.companyName + '-ca',
            //   "username": this.vehicleCreation.value.companyName,
            //   "userEntry": "",
            //   "fleetUser": fleetManagers,
            //   "plateNo": this.vehicleCreation.value.plateNo,
            //   "assetCode": "",
            //   "devModel": "",
            //   "applicationType": "false",
            //   "convertedDate": "2022-02-13",
            //   "DefaultWarnty": "2023-02-12",
            //   "oldCheckRoad": 0,
            //   "oldcheckFreeForm": 0,
            //   "oldcheckGeoZone": 0,
            //   "oldchecklandMark": 0,
            //   "oldcheckshift": 0,
            //   "type": "Type",
            //   "icon":this.vehicleCreation.value.assetCategory,
            //   "model": "Model",
            //   "group": "true",
            //   "dateofpurchase": "true",
            //   "insuranceExpiry": "true",
            //   "landMark": "true",
            //   "prefRest": "true",
            //   "expectedvehiclemilage": "0",
            //   "fuelTanklit": "true",
            //   "roadGeo": "true",
            //   "freeForm": "true",
            //   "additionalWarranty": "true",
            //   "dateofreg": "true",
            //   "regexpiry": "true",
            //   "mileageInit": "true",
            //   "odometer":JSON.stringify(this.vehicleCreation.value.odometer),
            //   "preventiveselect": 3000,
            //   "preventivelimitselect": 30,
            //   "scheduleselect": 3000,
            //   "schedulelimitselect": 30,
            //   "PreventiveMaintenanceType": "hours",
            //   "reverseSetting": "0|0|0",
            //   "digitalInput1": "|",
            //   "digitalInput2": "|",
            //   "digitalInput3": "|",
            //   "digitalInput4": "|",
            //   "DigitalOutput": "|||",
            //   "analoginput1": "|||",
            //   "analoginput2": "|||",
            //   "analoginput3": "|||",
            //   "analoginput4": "|||",
            //   "onewiredinput": "",
            //   "actual1": "",
            //   "mv1": "",
            //   "actual2": "",
            //   "mv2": "",
            //   "actual3": "",
            //   "mv3": "",
            //   "actual4": "",
            //   "mv4": "",
            //   "checkDevice": 0,
            //   "checkOperator": 0,
            //   "checkshift": -1,
            //   "checkRoadGeo": -1,
            //   "checkFreeForm": -1,
            //   "checkGeoZone": -1,
            //   "checklandMark": -1,
            //   "showHierarchy": false
            // }
            this.ajaxService.ajaxPostWithBody(url, dataJson).subscribe((res) => {
                if (res.message == "Added Successfully") {
                    this.commonService.dismissLoader();
                    this.commonService.presentToast(res.message);
                    this.button = false;
                    this.router.navigateByUrl("/dashboard");
                    this.vehicleCreation.reset();
                }
                else {
                    this.commonService.dismissLoader();
                    this.commonService.presentToast(res.message);
                    this.button = false;
                }
            });
        }, 2000);
    }
    submit() {
        this.getCompanyID();
        this.commonService.presentToast("please wait until the process is finished");
        for (var i = 0; i < this.companyId.length; i++) {
            if (this.companyId[i] == this.vehicleCreation.value.companyName) {
                console.log("true");
                this.addCompany = true;
                this.showFleet = true;
            }
        }
        for (var i = 0; i < this.imeiNo.length; i++) {
            if (this.imeiNo[i] == this.vehicleCreation.value.imeiNo + "") {
                console.log("imeitrue");
                // this.addCompany=true;
                this.showImei = true;
                //  this.getImeiDetails();
                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
                    "/global/getInventorydevice?imeiNo=" +
                    this.vehicleCreation.value.imeiNo;
                this.ajaxService.ajaxGet(url).subscribe((res) => {
                    console.log(res);
                    this.imeiDatas = res;
                    this.vehicleCreation.patchValue({
                        manufacture: this.imeiDatas["manufacturerName"],
                        model: this.imeiDatas["modelName"],
                        provider: this.imeiDatas["provider"],
                        simNo: this.imeiDatas["simCardNo"],
                        simNo2: this.imeiDatas["additionalSimcard1"],
                        provider2: this.imeiDatas["additionalProvider1"],
                    });
                    var deviceDetails = {
                        companyId: this.vehicleCreation.value.companyName,
                        imeiNo: this.vehicleCreation.value.imeiNo + "",
                        simcardNo: this.vehicleCreation.value.simNo.toString(),
                    };
                    // this.imeiTrue=true;
                    const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
                        "/device/validate/info?companyId=" +
                        this.vehicleCreation.value.companyName +
                        "&imeiNo=" +
                        this.vehicleCreation.value.imeiNo +
                        "&simcardNo=" +
                        this.vehicleCreation.value.simNo.toString();
                    this.ajaxService.ajaxGet(url).subscribe((res) => {
                        console.log(res);
                        if (res.message == "Ok") {
                            if (this.addCompany != true) {
                                this.addTheCompany();
                            }
                            else if (this.addCompany == true) {
                                this.addTheImei();
                            }
                            else {
                                this.commonService.presentToast("please try again");
                            }
                        }
                        else if (res.message[0] == "Company Name Already Available" &&
                            res.message[1] == "Ok") {
                            for (i = 0; i < this.companyId.length; i++) {
                                if (this.companyId[i] == this.vehicleCreation.value.companyName) {
                                    this.CompanyValid = true;
                                    if (this.addCompany != true) {
                                        this.addTheCompany();
                                    }
                                    else if (this.addCompany == true) {
                                        this.addTheImei();
                                    }
                                    else {
                                        this.commonService.presentToast("please try again");
                                    }
                                }
                                else if (this.companyId.length == i + 1 &&
                                    this.CompanyValid != true) {
                                    this.commonService.presentToast("Company Name is used by Another Person");
                                }
                            }
                        }
                        else if (res.message[0] == "ImeiNo Already Exist") {
                            this.commonService.presentToast("ImeiNo Already Exist");
                        }
                        else if (res.message[0] == "SimNo Already Exist") {
                            this.commonService.presentToast("SimNo Already Exist");
                        }
                        else if (res.message[1] == "ImeiNo Already Exist" &&
                            res.message[2] == "SimNo Already Exist") {
                            this.commonService.presentToast("SimNo Already Exist and ImeiNo Already Exist");
                        }
                        else if (res.message[1] == "SimNo Already Exist") {
                            this.commonService.presentToast("SimNo Already Exist and ImeiNo Already Exist");
                        }
                        else if (res.message[0] == "ImeiNo Already Exist" &&
                            res.message[1] == "Ok") {
                            this.commonService.presentToast("ImeiNo Already Exist");
                        }
                        else if (res.message[0] == "Company Name Already Available" &&
                            res.message[1] == "ImeiNo Already Exist" &&
                            res.message[2] == "Ok") {
                            this.commonService.presentToast("Company Name Already Available and ImeiNo Already Exist");
                        }
                        else if (res.message[0] == "SimNo Not Available" &&
                            res.message[1] == "Ok") {
                            this.commonService.presentToast("SimNo Not Available/SerialNo Not Available");
                        }
                        else if (res.message[0] == "Company Name Already Available" &&
                            res.message[1] == "Ok") {
                            this.commonService.presentToast("Company Name Already Available");
                        }
                        else if (res.message[0] == "Company Name Already Available" &&
                            res.message[1] == "SimNo Not Available") {
                            this.commonService.presentToast("SimNo Not Available");
                        }
                        // else if(this.CompanyValid != true){
                        //   this.commonService.presentToast('Company Name is used by Another Person');
                        // }
                        else {
                            this.commonService.presentToast("check the given details");
                        }
                        // else if(res.message  == "Company added successfully."){
                        //   this.commonService.presentToast("Company added successfully.")
                        // }
                    });
                });
            }
        }
        if (this.addCompany == true) {
            //  this.addTheImei();
            this.show = true;
            // this.showFleet=true;
            this.imeiTrue = true;
        }
        // JSON.stringify(this.vehicleCreation.value.fleetManager).length > 4 &&
        if (this.showImei == !true) {
            const deviceDetail = {
                companyId: this.vehicleCreation.value.companyName,
                imeiNo: this.vehicleCreation.value.imeiNo + "",
                simcardNo: this.vehicleCreation.value.simNo.toString(),
            };
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
                "/device/validate/info?companyId=" +
                this.vehicleCreation.value.companyName +
                "&imeiNo=" +
                this.vehicleCreation.value.imeiNo +
                "&simcardNo=" +
                this.vehicleCreation.value.simNo.toString();
            this.ajaxService.ajaxGet(url).subscribe((res) => {
                if (res.message == "Ok") {
                    if (this.addCompany != true) {
                        this.addTheCompany();
                    }
                    else if (this.addCompany == true) {
                        this.addTheImei();
                    }
                    else {
                        this.commonService.presentToast("please try again");
                    }
                }
                else if (res.message[0] == "Company Name Already Available" &&
                    res.message[1] == "Ok") {
                    for (i = 0; i < this.companyId.length; i++) {
                        if (this.companyId[i] == this.vehicleCreation.value.companyName) {
                            this.CompanyValid = true;
                            if (this.addCompany != true) {
                                this.addTheCompany();
                            }
                            else if (this.addCompany == true) {
                                this.addTheImei();
                            }
                            else {
                                this.commonService.presentToast("please try again");
                            }
                        }
                        else if (this.companyId.length == i + 1 &&
                            this.CompanyValid != true) {
                            this.commonService.presentToast("Company Name is used by Another Person");
                        }
                    }
                }
                else if (res.message[0] == "ImeiNo Already Exist") {
                    this.commonService.presentToast("ImeiNo Already Exist");
                }
                else if (res.message[0] == "SimNo Already Exist") {
                    this.commonService.presentToast("SimNo Already Exist");
                }
                else if (res.message[1] == "ImeiNo Already Exist" &&
                    res.message[2] == "SimNo Already Exist") {
                    this.commonService.presentToast("SimNo Already Exist and ImeiNo Already Exist");
                }
                else if (res.message[1] == "SimNo Already Exist") {
                    this.commonService.presentToast("SimNo Already Exist and ImeiNo Already Exist");
                }
                else if (res.message[0] == "ImeiNo Already Exist" &&
                    res.message[1] == "Ok") {
                    this.commonService.presentToast("ImeiNo Already Exist");
                }
                else if (res.message[0] == "Company Name Already Available" &&
                    res.message[1] == "ImeiNo Already Exist" &&
                    res.message[2] == "Ok") {
                    this.commonService.presentToast("Company Name Already Available and ImeiNo Already Exist");
                }
                else if (res.message[0] == "SimNo Not Available" &&
                    res.message[1] == "Ok") {
                    this.commonService.presentToast("Sim No / Serial No Invalid or SimNo Not Available");
                }
                else if (res.message[0] == "Company Name Already Available" &&
                    res.message[1] == "Ok") {
                    this.commonService.presentToast("Company Name Already Available");
                }
                else if (res.message[0] == "Company Name Already Available" &&
                    res.message[1] == "SimNo Not Available") {
                    this.commonService.presentToast("SimNo Not Available");
                }
                else if (this.CompanyValid != true) {
                    this.commonService.presentToast("Company Name is used by Another Person");
                }
                else {
                    this.commonService.presentToast("check the given details");
                }
                console.log(res);
            });
        }
        else {
        }
        // if(this.addCompany == false){
        //   this.addTheImei();
        // }
        // if(this.addCompany == true && ){
        //   this.addTheCompany();
        // }
    }
    addTheCompany() {
        if (this.vehicleCreation.value.password != null &&
            this.vehicleCreation.value.address1 != null &&
            this.vehicleCreation.value.city != null &&
            this.vehicleCreation.value.email &&
            this.vehicleCreation.value.country &&
            this.vehicleCreation.value.contact != null) {
            var my_string = this.vehicleCreation.value.password;
            var spaceCount = my_string.split(" ").length - 1;
            //  var atpos = this.vehicleCreation.value.email.indexOf("@");
            //  var dotpos = this.vehicleCreation.value.email.lastIndexOf(".");
            // if (atpos < 1 || ( dotpos - atpos < 2 )) {
            //  document.write("Please enter correct email ID")
            //  document.myForm.EMail.focus() ;
            //  return false;
            // }
            if (this.vehicleCreation.value.contact.toString().length == 10 &&
                this.vehicleCreation.value.address1.length > 1 &&
                this.vehicleCreation.value.city.length > 1 &&
                spaceCount == 0 &&
                /@./.test(this.vehicleCreation.value.email)) {
                const adminData = {
                    loginId: this.vehicleCreation.value.companyName,
                    loginCompany: localStorage.getItem("companyId"),
                };
                const countryCode = this.countryCode[this.vehicleCreation.value.country];
                const region = this.region[this.vehicleCreation.value.country];
                console.log(countryCode);
                const addCompany = {
                    password: "12345",
                    companyName: this.vehicleCreation.value.companyName,
                    address: this.vehicleCreation.value.address1,
                    city: this.vehicleCreation.value.city,
                    region: region,
                    countryCode: countryCode,
                    companyAdminID: "",
                    firstName: this.vehicleCreation.value.companyName,
                    contactNo: this.vehicleCreation.value.contact.toString(),
                    branchID: this.vehicleCreation.value.companyName,
                    emailID: this.vehicleCreation.value.email,
                    emailId: this.vehicleCreation.value.email,
                    companyID: this.vehicleCreation.value.companyName,
                };
                const dataJson = JSON.stringify(addCompany);
                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
                    "/user/provider/company?providerName=" +
                    adminData.loginCompany +
                    "&companyid=" +
                    adminData.loginId;
                this.ajaxService.ajaxPostWithBody(url, dataJson).subscribe((res) => {
                    this.newFleetCreation(res);
                });
            }
            else {
                this.commonService.presentToast("Contact Number should be 10 digits, Check Address or City or Mail, Dont enter blank spaces in Password");
            }
        }
        else {
            this.commonService.presentToast("Password should not contain spaces,Avoid empty Fields");
        }
    }
    newFleetCreation(res) {
        if (res.Message === "Company added successfully.") {
            const datetoday = new Date();
            const expDate = datetoday.getFullYear() +
                1 +
                "-" +
                (datetoday.getMonth() + 1) +
                "-" +
                (datetoday.getDate() - 1);
            const countryCode = this.countryCode[this.vehicleCreation.value.country];
            const fleetData = {
                userName: this.vehicleCreation.value.companyName,
                password: this.vehicleCreation.value.password,
                firstName: this.vehicleCreation.value.companyName,
                categoryrole: "fleetmanager",
                userCity: "city",
                contactNo: this.vehicleCreation.value.contact.toString(),
                useraddress1: this.vehicleCreation.value.address1 == null
                    ? ""
                    : this.vehicleCreation.value.address1,
                useraddress2: this.vehicleCreation.value.address2 == null
                    ? ""
                    : this.vehicleCreation.value.address2,
                userCountry: countryCode,
                emailId: this.vehicleCreation.value.email,
                // "emailID": this.vehicleCreation.value.email,
                // "userExpiryDate": expDate,
                companyId: this.vehicleCreation.value.companyName,
                branchId: this.vehicleCreation.value.companyName,
                applicationType: "false",
            };
            localStorage.setItem("fleetData", JSON.stringify(fleetData));
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/global/newFleetCreation";
            this.ajaxService.ajaxPostWithBody(url, fleetData).subscribe((res) => {
                this.newCompanyCreation(res);
            });
            console.log("this is call back end");
        }
        if (res["Error Message"] === "Company already exist.") {
            this.commonService.presentToast("Company Id Already Exist");
        }
    }
    newCompanyCreation(data) {
        const fleetData = JSON.parse(localStorage.getItem("fleetData"));
        const userDetail = {
            // "companyname": fleetData['firstName'],
            companyId: fleetData["userName"],
            userId: fleetData["userName"] + "-ca",
            fmid: fleetData["userName"],
            emailId: fleetData["emailId"],
            contactNo: fleetData["contactNo"],
            password: fleetData["password"],
            Suffix: localStorage.getItem("companySuffix"),
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/global/companyCreation";
        this.ajaxService
            .ajaxPostWithBody(url, JSON.stringify(userDetail))
            .subscribe((res) => {
            // this.alterNewCompanySuccess(res);
            this.addTheImei();
        });
    }
    alterNewCompanySuccess(res) {
        // res = JSON.parse(res);
        // if (res.result == "updated successfully") {
        //   const loginData = {
        //     userId: localStorage.getItem('userId'),
        //     password: localStorage.getItem('password')
        //   };
        //   const url = serverUrl.web + '/api/vts/superadmin/auth/' + JSON.stringify(loginData);
        //   this.ajaxService.ajaxGet(url)
        //     .subscribe(res => {
        //       // localStorage.removeItem("dashboardData");
        //       // localStorage.setItem('dashboardData', JSON.stringify(res.CompanyDetials));
        //       // this.router.navigateByUrl('dashboard');
        //       // this.commonService.presentToast('Successfully Presisted');
        //       this.addTheImei();
        //     });
        // } else {
        //   this.commonService.presentToast('Presisted Failed...!');
        // }
    }
    // not listed in company name service
    addTheImei() {
        if (JSON.stringify(this.vehicleCreation.value.imeiNo).length === 15 &&
            this.showImei != true) {
            const addImei = {
                imei: JSON.stringify(this.vehicleCreation.value.imeiNo),
                imeiNo: JSON.stringify(this.vehicleCreation.value.imeiNo),
                manufactureName: this.vehicleCreation.value.manufacture,
                modelName: this.vehicleCreation.value.model,
                providerName: this.vehicleCreation.value.provider,
                simNo: this.vehicleCreation.value.simNo.toString(),
                additionalSimcard1: this.vehicleCreation.value.simNo2 == null
                    ? ""
                    : this.vehicleCreation.value.simNo2.toString(),
                Provider2: this.vehicleCreation.value.provider2 + "",
                dealerId: "3",
            };
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/simcard/company/branch/inventory";
            this.ajaxService
                .ajaxPostWithBody(url, JSON.stringify(addImei))
                .subscribe((res) => {
                var data = res;
                if (data.result == "persisted successfully") {
                    this.getImeiDetails();
                }
                else if (data.simCardNo == "NotAvailable") {
                    this.commonService.presentToast("sim card not available");
                }
                else if (data.imeiNo == "exists") {
                    this.commonService.presentToast("imeiNo already available");
                }
                else if (data.simCardNo == "exists") {
                    this.commonService.presentToast("simCardNo already exists");
                }
            });
        }
        else {
            this.getImeiDetails();
        }
    }
    assign() {
        //  const loginId =(this.vehicleCreation.value.companyName == null) ? this.vehicleCreation.value.companyName : this.vehicleCreation.value.companyName ;
        const arrayData = [];
        const date = new Date();
        let currentDate = date.getFullYear() + "-";
        currentDate +=
            (date.getMonth() < 10
                ? "0" + (date.getMonth() + 1)
                : date.getMonth() + 1) + "-";
        currentDate += date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        let expDate = date.getFullYear() + 1 + "-";
        expDate +=
            (date.getMonth() < 10
                ? "0" + (date.getMonth() + 1)
                : date.getMonth() + 1) + "-";
        expDate +=
            date.getDate() < 10 ? "0" + (date.getDate() - 1) : date.getDate() - 1;
        const assignImeiTocom = {
            manufacture: this.vehicleCreation.value.manufacture,
            provider: this.vehicleCreation.value.provider,
            imei: this.vehicleCreation.value.imeiNo.toString(),
            checked: "false",
            simno: this.vehicleCreation.value.simNo,
            modal: this.vehicleCreation.value.model,
            //"$$hashKey": "object:8022",
            companyId: this.vehicleCreation.value.companyName,
            userId: this.vehicleCreation.value.companyName,
            DefaultWarnty: expDate,
            convertedDate: currentDate,
            additionalSimcard1: this.vehicleCreation.value.simNo2,
            Provider2: this.vehicleCreation.value.provider2 + "",
        };
        arrayData.push(assignImeiTocom);
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/simcard/assignimei";
        this.ajaxService.ajaxPostWithBody(url, arrayData).subscribe((res) => {
            console.log(res);
            res = res;
            if (res.devicestatus === "persisted") {
                this.commonService.presentToast("Your Imei assign successfully");
                this.generateVin();
            }
            else {
                this.commonService.presentToast("There was a problem to assign this Imei, Please check the IMEI and SIM NO");
            }
        });
    }
    vehicleDetails() {
        var userName = this.vehicleCreation.value.companyName == null
            ? this.vehicleCreation.value.companyName
            : this.vehicleCreation.value.companyName;
        if (this.vehicleCreation.value.fleetManager == "NoFleet") {
            var fleetManager = localStorage.getItem("userName");
        }
        var fleetManagers;
        if (this.vehicleCreation.value.fleetmanager == "") {
            (fleetManagers = userName + "-ca"),
                this.vehicleCreation.value.companyName;
        }
        else {
            // fleetManagers=this.vehicleCreation.value.fleetmanager
            fleetManagers =
                userName + "-ca" + "," + this.vehicleCreation.value.companyName;
            var checkedValues = [];
            var unCheckedValues = [];
            unCheckedValues = this.fleet.filter((val) => !fleetManagers.includes(val));
            for (var i = 0; i < unCheckedValues.length; i++) {
                if (unCheckedValues[i] === "NoFleet") {
                    unCheckedValues.splice(i, 1);
                    i--;
                }
            }
            if (checkedValues.length == 0) {
                checkedValues.toString();
            }
        }
        if (this.addCompany != true) {
            unCheckedValues = [];
        }
        var addDetails = {
            companyID: userName,
            branchID: userName,
            username: userName,
            emailId: unCheckedValues.toString(),
            emailID: unCheckedValues.toString(),
            imeiNo: JSON.stringify(this.vehicleCreation.value.imeiNo),
            userEntry: "kingstrackalerts@gmail.com",
            groupColor: "",
            fleetUser: fleetManagers,
            plateNo: this.vehicleCreation.value.plateNo,
            oldCheckRoad: 0,
            oldcheckFreeForm: 0,
            oldcheckGeoZone: 0,
            oldchecklandMark: 0,
            oldcheckshift: 0,
            type: "Type",
            icon: this.vehicleCreation.value.assetCategory,
            model: "Model",
            group: "true",
            dateofpurchase: "true",
            insuranceExpiry: "true",
            landMark: "true",
            prefRest: "true",
            expectedvehiclemilage: "0",
            contactNo: "true",
            fuelTanklit: "true",
            roadGeo: "true",
            freeForm: "true",
            additionalWarranty: "true",
            dateofreg: "true",
            regexpiry: "true",
            mileageInit: "true",
            odometer: JSON.stringify(this.vehicleCreation.value.odometer),
            preventiveselect: 3000,
            preventivelimitselect: 30,
            scheduleselect: 3000,
            schedulelimitselect: 30,
            PreventiveMaintenanceType: "hours",
            reverseSetting: "0|0|0",
            digitalInput1: "|",
            digitalInput2: "|",
            digitalInput3: "|",
            digitalInput4: "|",
            DigitalOutput: "|||",
            analoginput1: "|||",
            analoginput2: "|||",
            analoginput3: "|||",
            analoginput4: "|||",
            onewiredinput: "",
            actual1: "",
            mv1: "",
            actual2: "",
            mv2: "",
            actual3: "",
            mv3: "",
            actual4: "",
            mv4: "",
            checkDevice: 0,
            checkOperator: 0,
            checkshift: -1,
            checkRoadGeo: -1,
            checkFreeForm: -1,
            checkGeoZone: -1,
            checklandMark: -1,
            showHierarchy: false,
            vin: this.vin,
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/site/add/vehicle";
        this.ajaxService.ajaxPostWithString(url, addDetails).subscribe((res) => {
            console.log(res);
            if (res === "persisted") {
                this.commonService.presentToast("Vehicle added Successfully!");
                const smsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
                    "/device/initial/smsCommands?imeiNo=" +
                    this.vehicleCreation.value.imeiNo;
                this.ajaxService.ajaxGet(smsUrl).subscribe((res) => { });
                this.router.navigateByUrl("/dashboard");
                this.vehicleCreation.reset();
                this.show = false;
                this.showImei = false;
                this.imeiTrue = false;
                this.showFleet = false;
            }
        });
    }
    generateVin() {
        if (this.vehicleCreation.value.imeiNo != "" ||
            this.vehicleCreation.value.imeiNo != " ") {
            const vehicleVin = this.vehicleCreation.value.companyName +
                (Math.floor(Math.random() * 900) + 100);
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/device/validate/vin?vin=" + vehicleVin;
            this.ajaxService.ajaxGetWithString(url).subscribe((res) => {
                if (res == "notavailable") {
                    this.vin = vehicleVin;
                    this.vehicleDetails();
                }
                else if (res == "available") {
                    this.generateVin();
                }
                else {
                    this.commonService.presentToast("please contact support team");
                }
            });
        }
        else {
            this.commonService.presentToast("Assign Imei Properlly");
        }
    }
    ionViewWillEnter() {
        this.commonService.presentToast("Enter all the fields to create");
        this.show = false;
        this.imeiTrue = true;
        this.showFleet = false;
        this.vehicleCreation.reset();
        this.detailShow = false;
        this.CompanyValid = false;
        this.createForm();
        this.getFleetManager();
        this.getCompanyID();
        this.getCountries();
        this.getImeiNO();
        this.getCountryCode();
        this.getModelType();
        this.getManufactures();
        this.getModels();
    }
    ngOnInit() {
        this.selectedCompany = localStorage.getItem("companyId");
        this.companyDetail = {
            companyID: localStorage.getItem("companyId"),
            userId: localStorage.getItem("userId"),
        };
        this.suffix = localStorage.getItem("companySuffix");
        this.createForm();
        this.getCompanyID();
        this.getCountries();
        this.getImeiNO();
        this.getCountryCode();
        this.getModelType();
        this.getContactList();
        this.show = false;
        this.imeiTrue = true;
        this.showFleet = false;
    }
};
VehicleCreationPage.ctorParameters = () => [
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("selectComponent", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableComponent"])
], VehicleCreationPage.prototype, "selectComponent", void 0);
VehicleCreationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-vehicle-creation",
        template: __webpack_require__(/*! raw-loader!./vehicle-creation.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/vehicle-creation/vehicle-creation.page.html"),
        styles: [__webpack_require__(/*! ./vehicle-creation.page.scss */ "./src/app/delar-application/vehicle-creation/vehicle-creation.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]])
], VehicleCreationPage);



/***/ })

}]);
//# sourceMappingURL=vehicle-creation-vehicle-creation-module-es2015.js.map