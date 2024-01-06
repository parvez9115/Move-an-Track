(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicle-registration-vehicle-registration-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/vehicle-registration/vehicle-registration.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/vehicle-registration/vehicle-registration.page.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Vehicle Registration</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"wrapper-container\">\r\n        <form [formGroup]=\"vehicleCreation\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"label-text\"><span class=\"heading\">Company Details</span></ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"form-field\">\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <input class=\"input col\" type=\"text\" list=\"cars\" (keypress)=\"omit_special_char($event)\"\r\n                (change)=\"checkCompany(event )\" formControlName=\"companyName\" placeholder=\"Company name\" />\r\n              <datalist id=\"cars\">\r\n                <option *ngFor=\"let names of companyId\">{{names}}</option>\r\n              </datalist>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-input type=\"text\" formControlName=\"password\" [disabled]=\"imeiTrue\" placeholder=\"Password\"\r\n                class=\"input\"></ion-input></ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-input type=\"text\" formControlName=\"pancard\" placeholder=\"PAN Card\"\r\n                class=\"input\"></ion-input></ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"label-text\"><span class=\"heading\">Driver Details</span></ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"form-field\">\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-input type=\"text\" formControlName=\"DriverName\" placeholder=\"Driver Name\" class=\"input\">\r\n              </ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <!-- <ion-input type=\"number\" formControlName=\"contact\" [disabled]=\"imeiTrue\" type=\"tel\" maxlength=\"10\"  placeholder=\"Contact number\" class=\"input col\">\r\n         </ion-input> -->\r\n              <input class=\"input col\" type=\"text\" list=\"phno\" (keypress)=\"omit_special_char($event)\"\r\n                (change)=\"validContact()\" formControlName=\"contact\" placeholder=\"Contact number\" />\r\n              <datalist id=\"phno\">\r\n                <option *ngFor=\"let phNo of contactList\">\r\n                  {{phNo.contact}}\r\n                </option>\r\n              </datalist>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-input type=\"text\" formControlName=\"email\" [disabled]=\"imeiTrue\" placeholder=\"E-mail\" class=\"input\">\r\n              </ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-input type=\"text\" formControlName=\"address1\" [disabled]=\"imeiTrue\" placeholder=\"Address line 1\"\r\n                class=\"input\">\r\n              </ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-input type=\"text\" formControlName=\"address2\" [disabled]=\"imeiTrue\" placeholder=\"Address line 2\"\r\n                class=\"input\">\r\n              </ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-input type=\"text\" formControlName=\"city\" [disabled]=\"imeiTrue\" placeholder=\"City\" class=\"input\">\r\n              </ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-select class=\"input\" formControlName=\"country\" placeholder=\"Country\">\r\n                <ion-select-option *ngFor=\"let countries of country\"\r\n                  [value]=\"countries\">{{countries}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row><ion-col size=\"12\" class=\"label-text\"><span class=\"heading\">Vehicle\r\n                Details</span></ion-col></ion-row>\r\n          <ion-row class=\"form-field\">\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <input class=\"input col\" type=\"number\" list=\"num\" (change)=\"checkImei()\" formControlName=\"imeiNo\"\r\n                placeholder=\"Imei number\" />\r\n              <datalist id=\"num\">\r\n                <option *ngFor=\"let numbers of imeiNo\">{{numbers}}</option>\r\n              </datalist>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\" *ngIf=\"show\">\r\n              <ion-input type=\"text\" formControlName=\"simNo\" placeholder=\"Sim number/serial number\" class=\"input\">\r\n              </ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\" *ngIf=\"show\">\r\n              <ion-input type=\"text\" formControlName=\"simNo2\" placeholder=\"Sim number 2\" class=\"input\">\r\n              </ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-input type=\"text\" formControlName=\"plateNo\" placeholder=\"Plate number\" class=\"input\">\r\n              </ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-select formControlName=\"assetCategory\" placeholder=\"Mode of Transport\" class=\"input\"\r\n                style=\"padding: 13px 0px 7px 15px\">\r\n                <ion-select-option *ngFor=\"let Vehicle of assertCategories\"\r\n                  [value]=\"Vehicle\">{{Vehicle}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\" *ngIf=\"show\">\r\n              <ion-select class=\"input\" formControlName=\"manufacture\" (ionChange)=\"getModelData($event,manufacture)\"\r\n                placeHolder=\"Manufacture\">\r\n                <ion-select-option *ngFor=\"let manufacture of manufacture\" [value]=\"manufacture.type\">\r\n                  {{manufacture.name}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\" *ngIf=\"show\">\r\n              <ion-select [disabled]=\"formDisplay\" class=\"input\" [disabled]=\"!manufacture\" formControlName=\"model\"\r\n                placeHolder=\"Model\">\r\n                <ion-select-option *ngFor=\"let model of model\" [value]=\"model.type\">\r\n                  {{model.name}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\" *ngIf=\"show\">\r\n              <ion-select class=\"input\" formControlName=\"provider\" placeHolder=\"Provider\">\r\n                <ion-select-option *ngFor=\"let provider of provider\" [value]=\"provider.sim\">\r\n                  {{provider.sim}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\" *ngIf=\"show\">\r\n              <ion-select class=\"input\" formControlName=\"provider2\" placeHolder=\"Provider 2\">\r\n                <ion-select-option *ngFor=\"let provider of provider\" [value]=\"provider.sim\">\r\n                  {{provider.sim}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-input type=\"text\" formControlName=\"EngineNumber\" placeholder=\"Engine Number\" class=\"input\">\r\n              </ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-input type=\"text\" formControlName=\"ChassisNumber\" placeholder=\"Chassis Number\" class=\"input\">\r\n              </ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-input type=\"text\" formControlName=\"VehicleCapacity\" placeholder=\"Vehicle Capacity\" class=\"input\">\r\n              </ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"12\" size-md=\"4\" size-lg=\"4\">\r\n              <ion-row>\r\n                <ion-col size-sm=\"8\" size-md=\"8\" size-lg=\"6\" class=\"head\">\r\n                  <label class=\"heading\">Vehicle Image</label>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row style=\"margin: 6px\">\r\n                <input type=\"file\" class=\"documents\" formControlName=\"VehicleImage\" ng2FileSelect\r\n                  [uploader]=\"uploader\" />\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"12\" size-md=\"4\" size-lg=\"4\">\r\n              <ion-row>\r\n                <ion-col size-sm=\"8\" size-md=\"8\" size-lg=\"6\" class=\"head\">\r\n                  <label class=\"heading\">Vehicle RC Image</label>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row style=\"margin: 6px\">\r\n                <input type=\"file\" class=\"documents\" formControlName=\"VehicleRCImage\" ng2FileSelect\r\n                  [uploader]=\"uploader\" />\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n        <ion-row>\r\n          <ion-col class=\"ion-text-center\"><ion-button [disabled]=\"!vehicleCreation.valid\" (click)=\"newSubmit()\"\r\n              id=\"submitbtn\">submit</ion-button></ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/delar-application/vehicle-registration/vehicle-registration-routing/vehicle-registration-routing.module.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/delar-application/vehicle-registration/vehicle-registration-routing/vehicle-registration-routing.module.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: VehicleRegistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleRegistrationRoutingModule", function() { return VehicleRegistrationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vehicle_registration_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vehicle-registration.page */ "./src/app/delar-application/vehicle-registration/vehicle-registration.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: '',
        component: _vehicle_registration_page__WEBPACK_IMPORTED_MODULE_2__["VehicleRegistrationPage"]
    }
];
var VehicleRegistrationRoutingModule = /** @class */ (function () {
    function VehicleRegistrationRoutingModule() {
    }
    VehicleRegistrationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        })
    ], VehicleRegistrationRoutingModule);
    return VehicleRegistrationRoutingModule;
}());



/***/ }),

/***/ "./src/app/delar-application/vehicle-registration/vehicle-registration.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/vehicle-registration/vehicle-registration.module.ts ***!
  \***************************************************************************************/
/*! exports provided: VehicleRegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleRegistrationPageModule", function() { return VehicleRegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _vehicle_registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vehicle-registration.page */ "./src/app/delar-application/vehicle-registration/vehicle-registration.page.ts");
/* harmony import */ var _vehicle_registration_routing_vehicle_registration_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vehicle-registration-routing/vehicle-registration-routing.module */ "./src/app/delar-application/vehicle-registration/vehicle-registration-routing/vehicle-registration-routing.module.ts");








var VehicleRegistrationPageModule = /** @class */ (function () {
    function VehicleRegistrationPageModule() {
    }
    VehicleRegistrationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"],
                _vehicle_registration_routing_vehicle_registration_routing_module__WEBPACK_IMPORTED_MODULE_7__["VehicleRegistrationRoutingModule"]
            ],
            declarations: [_vehicle_registration_page__WEBPACK_IMPORTED_MODULE_6__["VehicleRegistrationPage"]]
        })
    ], VehicleRegistrationPageModule);
    return VehicleRegistrationPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/vehicle-registration/vehicle-registration.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/vehicle-registration/vehicle-registration.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n#submitbtn {\n  --background:#6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 40%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.heading {\n  color: #6252ee;\n}\n\n.col {\n  padding-left: 15px;\n  width: 100%;\n}\n\nion-button:hover {\n  --background-color:#6c2a84;\n}\n\n.label-text {\n  font-weight: 500;\n  font-size: 17px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n\n  .label-text {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.heading-label {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.head {\n  padding: 10px 0px 0px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vdmVoaWNsZS1yZWdpc3RyYXRpb24vRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcdmVoaWNsZS1yZWdpc3RyYXRpb25cXHZlaGljbGUtcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vdmVoaWNsZS1yZWdpc3RyYXRpb24vdmVoaWNsZS1yZWdpc3RyYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDRSxvQkFBQTtBQ0NGOztBRENBO0VBQ0k7SUFDQSxnQkFBQTtFQ0VGOztFREFFO0lBQ0ksVUFBQTtFQ0dOO0FBQ0Y7O0FEREE7RUFDSTtJQUNBLFNBQUE7RUNHRjs7RURERTtJQUNJLFVBQUE7RUNJTjtBQUNGOztBREZBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtBQ0lKOztBREFBO0VBQ0ksY0FBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDSUo7O0FERkE7RUFDRywwQkFBQTtBQ0tIOztBREZDO0VBQ0csZ0JBQUE7RUFDQSxlQUFBO0FDS0o7O0FERkE7RUFDSTtJQUNJLFlBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQ0tOOztFREhFO0lBQ0ksZUFBQTtFQ01OO0FBQ0Y7O0FESkE7RUFDSTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtFQ01OO0FBQ0Y7O0FESEE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNLSjs7QURIQTtFQUNJLHlCQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi92ZWhpY2xlLXJlZ2lzdHJhdGlvbi92ZWhpY2xlLXJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gICAgXHJcbn1cclxuI3N1Ym1pdGJ0bntcclxuICAtLWJhY2tncm91bmQ6IzYyNTJlZTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgLmlucHV0e1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIH1cclxuICAgICNzdWJtaXRidG57XHJcbiAgICAgICAgd2lkdGg6MjAlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAuZm9ybS1maWVsZHtcclxuICAgIHpvb206ODAlO1xyXG4gICAgfVxyXG4gICAgI3N1Ym1pdGJ0bntcclxuICAgICAgICB3aWR0aDo0MCU7XHJcbiAgICB9XHJcbn1cclxuLmZvcm0tZmllbGR7XHJcbiAgICBtYXJnaW46IC01cHggNXB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBwbGFjZS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuLmhlYWRpbmd7XHJcbiAgICBjb2xvcjogIzYyNTJlZTtcclxufVxyXG4uY29se1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaW9uLWJ1dHRvbjpob3ZlcntcclxuICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiM2YzJhODQ7XHJcbn1cclxuXHJcbiAubGFiZWwtdGV4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjMyMHB4KWFuZChtYXgtd2lkdGg6MTAyM3B4KXtcclxuICAgIC53cmFwcGVyLWNvbnRhaW5lcntcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAubGFiZWwtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCl7XHJcbiAgICAud3JhcHBlci1jb250YWluZXJ7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4uaGVhZGluZy1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5oZWFke1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMHB4IDVweDtcclxufSIsIi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbn1cblxuI3N1Ym1pdGJ0biB7XG4gIC0tYmFja2dyb3VuZDojNjI1MmVlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmhlYWRpbmcge1xuICBjb2xvcjogIzYyNTJlZTtcbn1cblxuLmNvbCB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1idXR0b246aG92ZXIge1xuICAtLWJhY2tncm91bmQtY29sb3I6IzZjMmE4NDtcbn1cblxuLmxhYmVsLXRleHQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAubGFiZWwtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4uaGVhZGluZy1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5oZWFkIHtcbiAgcGFkZGluZzogMTBweCAwcHggMHB4IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/vehicle-registration/vehicle-registration.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/delar-application/vehicle-registration/vehicle-registration.page.ts ***!
  \*************************************************************************************/
/*! exports provided: VehicleRegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleRegistrationPage", function() { return VehicleRegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/pdf-logo.service */ "./src/app/services/pdf-logo.service.ts");









var VehicleRegistrationPage = /** @class */ (function () {
    function VehicleRegistrationPage(ajaxService, router, commonService, formBuilder, pdfLogoService) {
        this.ajaxService = ajaxService;
        this.router = router;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.pdfLogoService = pdfLogoService;
        this.editfleet = "Fleet Manager";
        this.addCompany = false;
        this.region = { "India": "Asia/Kolkata", "Saudi Arabia": "Asia/Riyadh" };
        // manufacture = [{name: 'APMKT', type: 'Concox'}, {name: 'APMKT-AIS140', type:'APMKT'}];
        // modelTypes = {"APMKT01 Basic":"KT-Mini","APMKT01 Advance":"KT-Mini","APMKT02 Basic":"TK003","APMKT02 Advance":"TK003","APMKT03 Basic":"KT-Mini","APMKT03 Advance":"KT-Mini","APMKT04":"wetrack","APMKT05":"GT06N","APMKT06":"GT300","APMKT07":"JV200","APMKT08":"KT-Mini","APMKT09":"KT-Mini","APMKT10":"GT800","APMKT11":"GT06D",
        //  "AIS1401A":"AIS1401A","AIS1402A":"AIS1402A","Basic":"Basic"}
        // country={}
        this.manufacture = [];
        this.modelTypes = [];
        this.model = [];
        this.companyCheck = false;
        this.provider = [
            { sim: 'Idea' },
            { sim: 'Airtel' },
            { sim: 'Vodafone' },
            { sim: 'Bsnl' }
        ];
        this.show = false;
        this.showFleet = false;
        this.imeiTrue = false;
        this.assertCategories = ['FORKLIFTS', 'LIGHT TOWERS', 'WELDING MACHINES', 'DEEPSEA GENERATOR', 'COMPRESSORS',
            '32kw CEM7 GENERATORS', 'BUS', 'CAR', 'TRUCK', 'BIKE', 'AUTO', 'BATTERY', 'BOBCAT', 'TANKER', 'LOADER', 'DABBAB',
            'DUMPER', 'STREET SWEEPER', 'TOWED STREET SWEEPER', 'COMPACTOR', 'DOUBLE CABIN', 'HOOK LIFT', 'CRANE',
            'SMALL TRUCK'];
        this.showImei = false;
        this.detailShow = false;
        this.CompanyValid = false;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploader"]({});
    }
    VehicleRegistrationPage.prototype.omit_special_char = function (event) {
        var k;
        k = event.charCode; //         k = event.keyCode;  (Both can be used)
        return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
    };
    VehicleRegistrationPage.prototype.checkCompany = function () {
        for (var i = 0; i < this.companyId.length; i++) {
            if (this.companyId[i] == this.vehicleCreation.value.companyName) {
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
    };
    VehicleRegistrationPage.prototype.checkImei = function () {
        for (var i = 0; i < this.imeiNo.length; i++) {
            if (this.imeiNo[i] == this.vehicleCreation.value.imeiNo) {
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
    };
    VehicleRegistrationPage.prototype.getModelData = function () {
        this.model = this.modelTypes[this.vehicleCreation.value.manufacture];
    };
    VehicleRegistrationPage.prototype.getManufactures = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/login/getPreferences?key=manufactures&companyId=' + this.companyDetail.companyID;
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(function (res) {
            _this.manufacture = res;
        });
    };
    VehicleRegistrationPage.prototype.getModels = function () {
        var _this = this;
        // const url = serverUrl.web + '/api/vts/company/preference/'+JSON.stringify({"key":"newmodel","companyID":this.companyDetail.companyID});
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/login/getPreferences?key=dealerModel&companyId=' + this.companyDetail.companyID;
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(function (res) {
            _this.modelTypes = res;
        });
    };
    VehicleRegistrationPage.prototype.getModelType = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/device/assettype?companyId=' + localStorage.getItem('corpId') + '&userId=' + localStorage.getItem('userName');
        this.ajaxService.ajaxGet(url)
            .subscribe(function (res) {
            _this.vehicleTypes = res;
        });
    };
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
    VehicleRegistrationPage.prototype.createForm = function () {
        this.vehicleCreation = this.formBuilder.group({
            // loginId: ['', ],
            password: ['',],
            pancard: [''],
            contact: ['',],
            email: ['',],
            address1: ['',],
            address2: ['',],
            city: ['',],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            imeiNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{15}$"),]],
            simNo: [''],
            plateNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            assetCategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            // ^[\w\s]+$
            // [Validators.required, Validators.pattern(/[!^\w\s]$/)]
            companyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[a-zA-Z0-9!@#$%^&*()]+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15)]],
            manufacture: ['',],
            model: ['',],
            provider: ['',],
            // fleetManager:['',],
            simNo2: [''],
            provider2: [''],
            EngineNumber: [''],
            ChassisNumber: [''],
            VehicleCapacity: [''],
            DriverName: [''],
            VehicleImage: [this.file, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            VehicleRCImage: [this.file, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.vehicleCreation.reset();
    };
    VehicleRegistrationPage.prototype.getFleetManager = function () {
        var _this = this;
        var companyName = this.vehicleCreation.value.companyName;
        var companyDetail = {
            branchID: companyName,
            companyID: companyName,
            userId: companyName
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/user/fleetmanager?companyId=' + localStorage.getItem('corpId') + '&branchId=' + localStorage.getItem('corpId');
        this.ajaxService.ajaxGet(url)
            .subscribe(function (res) {
            _this.fleet = ["NoFleet"];
            if (res.length > 0) {
                for (var i = 0; i < res.length; i++) {
                    _this.fleet.push(res[i].fleetManager);
                }
            }
            else {
                _this.fleet.push("NoFleet");
            }
        });
    };
    VehicleRegistrationPage.prototype.getCompanyID = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/global/getdealercompanylist?suffix=' + this.suffix;
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.companyId = res;
        });
    };
    VehicleRegistrationPage.prototype.validContact = function () {
        var contactCheck = false;
        for (var i = 0; i < this.contactList.length; i++) {
            if (this.contactList[i].contact == this.vehicleCreation.value.contact) {
                this.vehicleCreation.patchValue({
                    companyName: this.contactList[i].companyId,
                    password: ''
                });
                contactCheck = true;
                this.imeiTrue = true;
            }
        }
        if (!contactCheck && this.vehicleCreation.value.password == '') {
            this.vehicleCreation.patchValue({
                companyName: '',
            });
            this.imeiTrue = false;
        }
    };
    VehicleRegistrationPage.prototype.getContactList = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/global/getdealercontactlist?suffix=' + this.suffix;
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.contactList = res;
        });
    };
    VehicleRegistrationPage.prototype.getImeiNO = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/global/getdealerimeilist?suffix=' + this.suffix;
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.imeiNo = res;
        });
    };
    VehicleRegistrationPage.prototype.getCountries = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/login/getPreferences?key=countries&companyId=' + this.companyDetail.companyID;
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(function (res) {
            _this.country = res;
        });
    };
    VehicleRegistrationPage.prototype.getCountryCode = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/login/getPreferences?key=countrycode&companyId=' + this.companyDetail.companyID;
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(function (res) {
            _this.countryCode = res;
        });
    };
    VehicleRegistrationPage.prototype.getImeiDetails = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/global/getInventorydevice?imeiNo=' + this.vehicleCreation.value.imeiNo;
        this.ajaxService.ajaxGetJson(url).subscribe(function (res) {
            _this.imeiDatas = res;
            _this.vehicleCreation.patchValue({
                manufacture: _this.imeiDatas["manufacturerName"],
                model: _this.imeiDatas["modelName"],
                provider: _this.imeiDatas["provider"],
                simNo: _this.imeiDatas["simCardNo"],
                simNo2: _this.imeiDatas["additionalSimcard1"],
                provider2: _this.imeiDatas["additionalProvider1"],
            });
            //   this.assign();
        });
    };
    VehicleRegistrationPage.prototype.newSubmit = function () {
        var _this = this;
        this.commonService.presentLoader();
        if (this.imeiNo.includes(this.vehicleCreation.value.imeiNo + '')) {
            this.getImeiDetails();
        }
        var userName = (this.vehicleCreation.value.companyName == null) ? this.vehicleCreation.value.companyName : this.vehicleCreation.value.companyName;
        if (this.vehicleCreation.value.fleetManager == "NoFleet") {
            var fleetManager = localStorage.getItem('userName');
        }
        var fleetManagers;
        if (this.vehicleCreation.value.fleetmanager == '') {
            fleetManagers = userName + '-ca', this.vehicleCreation.value.companyName;
        }
        else {
            // fleetManagers=this.vehicleCreation.value.fleetmanager
            fleetManagers = userName + '-ca' + ',' + this.vehicleCreation.value.companyName;
            var checkedValues = [];
            var unCheckedValues = [];
            unCheckedValues = this.fleet.filter(function (val) { return !fleetManagers.includes(val); });
            for (var i = 0; i < unCheckedValues.length; i++) {
                if (unCheckedValues[i] === "NoFleet") {
                    unCheckedValues.splice(i, 1);
                    i--;
                }
            }
            if (checkedValues.length == 0) {
                (checkedValues).toString();
            }
        }
        if (this.addCompany != true) {
            unCheckedValues = [];
        }
        var countryCode = this.countryCode[this.vehicleCreation.value.country] == undefined ? "" : this.countryCode[this.vehicleCreation.value.country];
        var region = this.region[this.vehicleCreation.value.country] == undefined ? "" : this.region[this.vehicleCreation.value.country];
        setTimeout(function () {
            var dataJson = { "companyId": _this.vehicleCreation.value.companyName,
                "branchId": _this.vehicleCreation.value.companyName,
                "vin": "",
                "suffix": localStorage.getItem('companySuffix'),
                "imeiNo": _this.vehicleCreation.value.imeiNo.toString(),
                "simcardNo": _this.vehicleCreation.value.simNo == null ? "" : (_this.vehicleCreation.value.simNo).toString(),
                "emailId": _this.vehicleCreation.value.email == null ? "" : (_this.vehicleCreation.value.email).toString(),
                "providerName": localStorage.getItem('companyId'),
                "password": _this.vehicleCreation.value.password == null ? "" : (_this.vehicleCreation.value.password).toString(),
                "provider": _this.vehicleCreation.value.provider == null ? "" : (_this.vehicleCreation.value.provider).toString(),
                "firstName": _this.vehicleCreation.value.companyName,
                "contactNo": _this.vehicleCreation.value.contact == null ? "" : (_this.vehicleCreation.value.contact).toString(),
                "countryCode": countryCode,
                "additionalSimcard1": _this.vehicleCreation.value.simNo2 == null ? "" : (_this.vehicleCreation.value.simNo2).toString(),
                "additionalProvider1": _this.vehicleCreation.value.provider2 == null ? "" : (_this.vehicleCreation.value.provider2).toString(),
                "userCountry": countryCode,
                "manufactureName": _this.vehicleCreation.value.manufacture == null ? "" : _this.vehicleCreation.value.manufacture,
                "modelName": _this.vehicleCreation.value.model == null ? "" : _this.vehicleCreation.value.model,
                "dealerId": "3",
                "companyName": _this.vehicleCreation.value.companyName,
                "address": _this.vehicleCreation.value.address1 == null ? "" : _this.vehicleCreation.value.address1,
                "city": _this.vehicleCreation.value.city == null ? "" : _this.vehicleCreation.value.city,
                "companyAdminID": "",
                "region": "Asia/Kolkata",
                "categoryrole": "fleetmanager",
                "userCity": _this.vehicleCreation.value.city == null ? "" : _this.vehicleCreation.value.city,
                "useraddress1": _this.vehicleCreation.value.address1 == null ? "" : _this.vehicleCreation.value.address1,
                "useraddress2": _this.vehicleCreation.value.address2 == null ? "" : _this.vehicleCreation.value.address2,
                "userId": _this.vehicleCreation.value.companyName + '-ca',
                "userName": _this.vehicleCreation.value.companyName,
                "userEntry": "",
                "fleetUser": fleetManagers,
                "plateNo": _this.vehicleCreation.value.plateNo,
                "assetCode": "",
                "devModel": "",
                "applicationType": "false",
                "convertedDate": "2022-02-13",
                "DefaultWarnty": "2023-02-12",
                "type": "Type",
                "icon": _this.vehicleCreation.value.assetCategory,
                "odometer": "0",
            };
            var datas = {
                "id": "",
                "modeoftransport": _this.vehicleCreation.value.assetCategory,
                "vehiclenumber": _this.vehicleCreation.value.plateNo,
                "enginenumber": _this.vehicleCreation.value.EngineNumber,
                "chassisnumber": _this.vehicleCreation.value.ChassisNumber,
                "drivername": _this.vehicleCreation.value.DriverName,
                "drivermobilenumber": _this.vehicleCreation.value.contact,
                "gpsdevicecode": _this.vehicleCreation.value.imeiNo.toString(),
                "vehiclecapacity": _this.vehicleCreation.value.VehicleCapacity,
                "companycode": _this.vehicleCreation.value.pancard,
                "companypath": "http://mvt.apmkingstrack.com",
                "createdby": localStorage.getItem('corpId')
            };
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/AK/saveVehicle';
            var file = _this.uploader;
            var testData = new FormData();
            testData.append('uploadrccopy', file.queue[0]._file);
            testData.append('uploadvehiclephoto', file.queue[1]._file);
            testData.append('vehicle', JSON.stringify(dataJson));
            testData.append('data', JSON.stringify(datas));
            _this.ajaxService.ajaxPostWithString(url, testData)
                .subscribe(function (res) {
                res = JSON.parse(res);
                if (res.message == "Vehicle Saved Successfully") {
                    _this.commonService.dismissLoader();
                    _this.commonService.presentToast(res.message);
                    _this.router.navigateByUrl('/dashboard');
                    _this.vehicleCreation.reset();
                }
                else {
                    _this.commonService.dismissLoader();
                    _this.commonService.presentToast(res.message);
                }
            });
        }, 2000);
    };
    VehicleRegistrationPage.prototype.submit = function () {
        var _this = this;
        this.getCompanyID();
        this.commonService.presentToast("please wait until the process is finished");
        for (var i = 0; i < this.companyId.length; i++) {
            if (this.companyId[i] == this.vehicleCreation.value.companyName) {
                this.addCompany = true;
                this.showFleet = true;
            }
        }
        for (var i = 0; i < this.imeiNo.length; i++) {
            if (this.imeiNo[i] == this.vehicleCreation.value.imeiNo + '') {
                // this.addCompany=true;
                this.showImei = true;
                //  this.getImeiDetails();
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/global/getInventorydevice?imeiNo=' + this.vehicleCreation.value.imeiNo;
                this.ajaxService.ajaxGet(url).subscribe(function (res) {
                    _this.imeiDatas = res;
                    _this.vehicleCreation.patchValue({
                        manufacture: _this.imeiDatas["manufacturerName"],
                        model: _this.imeiDatas["modelName"],
                        provider: _this.imeiDatas["provider"],
                        simNo: _this.imeiDatas["simCardNo"],
                        simNo2: _this.imeiDatas["additionalSimcard1"],
                        provider2: _this.imeiDatas["additionalProvider1"],
                    });
                    var deviceDetails = {
                        companyId: _this.vehicleCreation.value.companyName,
                        imeiNo: _this.vehicleCreation.value.imeiNo + '',
                        simcardNo: (_this.vehicleCreation.value.simNo).toString()
                    };
                    // this.imeiTrue=true;
                    var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/device/validate/info?companyId=' + _this.vehicleCreation.value.companyName + '&imeiNo=' + _this.vehicleCreation.value.imeiNo + '&simcardNo=' + (_this.vehicleCreation.value.simNo).toString();
                    _this.ajaxService.ajaxGet(url)
                        .subscribe(function (res) {
                        if (res.message == "Ok") {
                            if (_this.addCompany != true) {
                                _this.addTheCompany();
                            }
                            else if (_this.addCompany == true) {
                                _this.addTheImei();
                            }
                            else {
                                _this.commonService.presentToast('please try again');
                            }
                        }
                        else if (((res.message[0] == "Company Name Already Available" && res.message[1] == "Ok"))) {
                            for (i = 0; i < _this.companyId.length; i++) {
                                if (_this.companyId[i] == _this.vehicleCreation.value.companyName) {
                                    _this.CompanyValid = true;
                                    if (_this.addCompany != true) {
                                        _this.addTheCompany();
                                    }
                                    else if (_this.addCompany == true) {
                                        _this.addTheImei();
                                    }
                                    else {
                                        _this.commonService.presentToast('please try again');
                                    }
                                }
                                else if ((_this.companyId.length == i + 1) && _this.CompanyValid != true) {
                                    _this.commonService.presentToast('Company Name is used by Another Person');
                                }
                            }
                        }
                        else if (res.message[0] == "ImeiNo Already Exist") {
                            _this.commonService.presentToast("ImeiNo Already Exist");
                        }
                        else if (res.message[0] == "SimNo Already Exist") {
                            _this.commonService.presentToast("SimNo Already Exist");
                        }
                        else if (res.message[1] == "ImeiNo Already Exist" && res.message[2] == "SimNo Already Exist") {
                            _this.commonService.presentToast("SimNo Already Exist and ImeiNo Already Exist");
                        }
                        else if (res.message[1] == "SimNo Already Exist") {
                            _this.commonService.presentToast("SimNo Already Exist and ImeiNo Already Exist");
                        }
                        else if ((res.message[0] == "ImeiNo Already Exist" && res.message[1] == "Ok")) {
                            _this.commonService.presentToast("ImeiNo Already Exist");
                        }
                        else if ((res.message[0] == "Company Name Already Available" && res.message[1] == "ImeiNo Already Exist" && res.message[2] == "Ok")) {
                            _this.commonService.presentToast("Company Name Already Available and ImeiNo Already Exist");
                        }
                        else if (res.message[0] == "SimNo Not Available" && res.message[1] == "Ok") {
                            _this.commonService.presentToast("SimNo Not Available/SerialNo Not Available");
                        }
                        else if (res.message[0] == "Company Name Already Available" && res.message[1] == "Ok") {
                            _this.commonService.presentToast("Company Name Already Available");
                        }
                        else if (res.message[0] == "Company Name Already Available" && res.message[1] == "SimNo Not Available") {
                            _this.commonService.presentToast("SimNo Not Available");
                        }
                        // else if(this.CompanyValid != true){
                        //   this.commonService.presentToast('Company Name is used by Another Person');
                        // }
                        else {
                            _this.commonService.presentToast("check the given details");
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
            var deviceDetail = {
                companyId: this.vehicleCreation.value.companyName,
                imeiNo: this.vehicleCreation.value.imeiNo + '',
                simcardNo: (this.vehicleCreation.value.simNo).toString()
            };
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/device/validate/info?companyId=' + this.vehicleCreation.value.companyName + '&imeiNo=' + this.vehicleCreation.value.imeiNo + '&simcardNo=' + (this.vehicleCreation.value.simNo).toString();
            this.ajaxService.ajaxGet(url)
                .subscribe(function (res) {
                if (res.message == "Ok") {
                    if (_this.addCompany != true) {
                        _this.addTheCompany();
                    }
                    else if (_this.addCompany == true) {
                        _this.addTheImei();
                    }
                    else {
                        _this.commonService.presentToast('please try again');
                    }
                }
                else if (((res.message[0] == "Company Name Already Available" && res.message[1] == "Ok"))) {
                    for (i = 0; i < _this.companyId.length; i++) {
                        if (_this.companyId[i] == _this.vehicleCreation.value.companyName) {
                            _this.CompanyValid = true;
                            if (_this.addCompany != true) {
                                _this.addTheCompany();
                            }
                            else if (_this.addCompany == true) {
                                _this.addTheImei();
                            }
                            else {
                                _this.commonService.presentToast('please try again');
                            }
                        }
                        else if ((_this.companyId.length == i + 1) && _this.CompanyValid != true) {
                            _this.commonService.presentToast('Company Name is used by Another Person');
                        }
                    }
                }
                else if (res.message[0] == "ImeiNo Already Exist") {
                    _this.commonService.presentToast("ImeiNo Already Exist");
                }
                else if (res.message[0] == "SimNo Already Exist") {
                    _this.commonService.presentToast("SimNo Already Exist");
                }
                else if (res.message[1] == "ImeiNo Already Exist" && res.message[2] == "SimNo Already Exist") {
                    _this.commonService.presentToast("SimNo Already Exist and ImeiNo Already Exist");
                }
                else if (res.message[1] == "SimNo Already Exist") {
                    _this.commonService.presentToast("SimNo Already Exist and ImeiNo Already Exist");
                }
                else if ((res.message[0] == "ImeiNo Already Exist" && res.message[1] == "Ok")) {
                    _this.commonService.presentToast("ImeiNo Already Exist");
                }
                else if ((res.message[0] == "Company Name Already Available" && res.message[1] == "ImeiNo Already Exist" && res.message[2] == "Ok")) {
                    _this.commonService.presentToast("Company Name Already Available and ImeiNo Already Exist");
                }
                else if (res.message[0] == "SimNo Not Available" && res.message[1] == "Ok") {
                    _this.commonService.presentToast("Sim No / Serial No Invalid or SimNo Not Available");
                }
                else if (res.message[0] == "Company Name Already Available" && res.message[1] == "Ok") {
                    _this.commonService.presentToast("Company Name Already Available");
                }
                else if (res.message[0] == "Company Name Already Available" && res.message[1] == "SimNo Not Available") {
                    _this.commonService.presentToast("SimNo Not Available");
                }
                else if (_this.CompanyValid != true) {
                    _this.commonService.presentToast('Company Name is used by Another Person');
                }
                else {
                    _this.commonService.presentToast("check the given details");
                }
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
    };
    VehicleRegistrationPage.prototype.addTheCompany = function () {
        var _this = this;
        if (this.vehicleCreation.value.password != null && this.vehicleCreation.value.address1 != null && this.vehicleCreation.value.city != null && this.vehicleCreation.value.email && this.vehicleCreation.value.country && this.vehicleCreation.value.contact != null) {
            var my_string = this.vehicleCreation.value.password;
            var spaceCount = (my_string.split(" ").length - 1);
            //  var atpos = this.vehicleCreation.value.email.indexOf("@");
            //  var dotpos = this.vehicleCreation.value.email.lastIndexOf(".");
            // if (atpos < 1 || ( dotpos - atpos < 2 )) {
            //  document.write("Please enter correct email ID")
            //  document.myForm.EMail.focus() ;
            //  return false;
            // }
            if (this.vehicleCreation.value.contact.toString().length == 10 && this.vehicleCreation.value.address1.length > 1 && this.vehicleCreation.value.city.length > 1 && spaceCount == 0 && (/@./.test(this.vehicleCreation.value.email))) {
                var adminData = {
                    loginId: this.vehicleCreation.value.companyName,
                    loginCompany: localStorage.getItem('companyId')
                };
                var countryCode = this.countryCode[this.vehicleCreation.value.country];
                var region = this.region[this.vehicleCreation.value.country];
                var addCompany = {
                    "password": "12345",
                    "companyName": this.vehicleCreation.value.companyName,
                    "address": this.vehicleCreation.value.address1,
                    "city": this.vehicleCreation.value.city,
                    "region": region,
                    "countryCode": countryCode,
                    "companyAdminID": '',
                    "firstName": this.vehicleCreation.value.companyName,
                    "contactNo": this.vehicleCreation.value.contact.toString(),
                    "branchID": this.vehicleCreation.value.companyName,
                    "emailID": this.vehicleCreation.value.email,
                    "emailId": this.vehicleCreation.value.email,
                    "companyID": this.vehicleCreation.value.companyName,
                };
                var dataJson = JSON.stringify(addCompany);
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/user/provider/company?providerName=' + adminData.loginCompany + '&companyid=' + adminData.loginId;
                this.ajaxService.ajaxPostWithBody(url, dataJson)
                    .subscribe(function (res) {
                    _this.newFleetCreation(res);
                });
            }
            else {
                this.commonService.presentToast('Contact Number should be 10 digits, Check Address or City or Mail, Dont enter blank spaces in Password');
            }
        }
        else {
            this.commonService.presentToast('Password should not contain spaces,Avoid empty Fields');
        }
    };
    VehicleRegistrationPage.prototype.newFleetCreation = function (res) {
        var _this = this;
        if (res.Message === 'Company added successfully.') {
            var datetoday = new Date();
            var expDate = datetoday.getFullYear() + 1 + '-' + (datetoday.getMonth() + 1) + '-' + (datetoday.getDate() - 1);
            var countryCode = this.countryCode[this.vehicleCreation.value.country];
            var fleetData = {
                "userName": this.vehicleCreation.value.companyName,
                "password": this.vehicleCreation.value.password,
                "firstName": this.vehicleCreation.value.companyName,
                "categoryrole": "fleetmanager",
                "userCity": "city",
                "contactNo": (this.vehicleCreation.value.contact).toString(),
                "useraddress1": this.vehicleCreation.value.address1 == null ? "" : this.vehicleCreation.value.address1,
                "useraddress2": this.vehicleCreation.value.address2 == null ? "" : this.vehicleCreation.value.address2,
                "userCountry": countryCode,
                "emailId": this.vehicleCreation.value.email,
                // "emailID": this.vehicleCreation.value.email,
                // "userExpiryDate": expDate,
                "companyId": this.vehicleCreation.value.companyName,
                "branchId": this.vehicleCreation.value.companyName,
                "applicationType": "false"
            };
            localStorage.setItem('fleetData', JSON.stringify(fleetData));
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/global/newFleetCreation';
            this.ajaxService.ajaxPostWithBody(url, fleetData)
                .subscribe(function (res) {
                _this.newCompanyCreation(res);
            });
        }
        if (res["Error Message"] === 'Company already exist.') {
            this.commonService.presentToast("Company Id Already Exist");
        }
    };
    VehicleRegistrationPage.prototype.newCompanyCreation = function (data) {
        var _this = this;
        var fleetData = JSON.parse(localStorage.getItem('fleetData'));
        var userDetail = {
            // "companyname": fleetData['firstName'],
            "companyId": fleetData['userName'],
            "userId": fleetData['userName'] + '-ca',
            "fmid": fleetData['userName'],
            "emailId": fleetData['emailId'],
            "contactNo": fleetData['contactNo'],
            "password": fleetData['password'],
            "Suffix": localStorage.getItem('companySuffix')
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/global/companyCreation';
        this.ajaxService.ajaxPostWithBody(url, JSON.stringify(userDetail))
            .subscribe(function (res) {
            // this.alterNewCompanySuccess(res);
            _this.addTheImei();
        });
    };
    VehicleRegistrationPage.prototype.alterNewCompanySuccess = function (res) {
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
    };
    // not listed in company name service 
    VehicleRegistrationPage.prototype.addTheImei = function () {
        var _this = this;
        if (JSON.stringify(this.vehicleCreation.value.imeiNo).length === 15 && this.showImei != true) {
            var addImei = {
                imei: JSON.stringify(this.vehicleCreation.value.imeiNo),
                imeiNo: JSON.stringify(this.vehicleCreation.value.imeiNo),
                manufactureName: this.vehicleCreation.value.manufacture,
                modelName: this.vehicleCreation.value.model,
                providerName: this.vehicleCreation.value.provider,
                simNo: (this.vehicleCreation.value.simNo).toString(),
                additionalSimcard1: this.vehicleCreation.value.simNo2 == null ? "" : (this.vehicleCreation.value.simNo2).toString(),
                Provider2: this.vehicleCreation.value.provider2 + '',
                dealerId: '3'
            };
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/simcard/company/branch/inventory';
            this.ajaxService.ajaxPostWithBody(url, JSON.stringify(addImei))
                .subscribe(function (res) {
                var data = res;
                if (data.result == 'persisted successfully') {
                    _this.getImeiDetails();
                }
                else if (data.simCardNo == "NotAvailable") {
                    _this.commonService.presentToast('sim card not available');
                }
                else if (data.imeiNo == "exists") {
                    _this.commonService.presentToast('imeiNo already available');
                }
                else if (data.simCardNo == "exists") {
                    _this.commonService.presentToast('simCardNo already exists');
                }
            });
        }
        else {
            this.getImeiDetails();
        }
    };
    VehicleRegistrationPage.prototype.assign = function () {
        //  const loginId =(this.vehicleCreation.value.companyName == null) ? this.vehicleCreation.value.companyName : this.vehicleCreation.value.companyName ;
        var _this = this;
        var arrayData = [];
        var date = new Date();
        var currentDate = date.getFullYear() + '-';
        currentDate += (date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        currentDate += date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var expDate = date.getFullYear() + 1 + '-';
        expDate += (date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        expDate += date.getDate() < 10 ? '0' + (date.getDate() - 1) : date.getDate() - 1;
        var assignImeiTocom = {
            "manufacture": this.vehicleCreation.value.manufacture,
            "provider": this.vehicleCreation.value.provider,
            "imei": this.vehicleCreation.value.imeiNo.toString(),
            "checked": "false",
            "simno": this.vehicleCreation.value.simNo,
            "modal": this.vehicleCreation.value.model,
            //"$$hashKey": "object:8022",
            "companyId": this.vehicleCreation.value.companyName,
            "userId": this.vehicleCreation.value.companyName,
            "DefaultWarnty": expDate,
            "convertedDate": currentDate,
            "additionalSimcard1": this.vehicleCreation.value.simNo2,
            "Provider2": this.vehicleCreation.value.provider2 + '',
        };
        arrayData.push(assignImeiTocom);
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/simcard/assignimei';
        this.ajaxService.ajaxPostWithBody(url, arrayData)
            .subscribe(function (res) {
            res = res;
            if (res.devicestatus === "persisted") {
                _this.commonService.presentToast('Your Imei assign successfully');
                _this.generateVin();
            }
            else {
                _this.commonService.presentToast('There was a problem to assign this Imei, Please check the IMEI and SIM NO');
            }
        });
    };
    VehicleRegistrationPage.prototype.vehicleDetails = function () {
        var _this = this;
        var userName = (this.vehicleCreation.value.companyName == null) ? this.vehicleCreation.value.companyName : this.vehicleCreation.value.companyName;
        if (this.vehicleCreation.value.fleetManager == "NoFleet") {
            var fleetManager = localStorage.getItem('userName');
        }
        var fleetManagers;
        if (this.vehicleCreation.value.fleetmanager == '') {
            fleetManagers = userName + '-ca', this.vehicleCreation.value.companyName;
        }
        else {
            // fleetManagers=this.vehicleCreation.value.fleetmanager
            fleetManagers = userName + '-ca' + ',' + this.vehicleCreation.value.companyName;
            var checkedValues = [];
            var unCheckedValues = [];
            unCheckedValues = this.fleet.filter(function (val) { return !fleetManagers.includes(val); });
            for (var i = 0; i < unCheckedValues.length; i++) {
                if (unCheckedValues[i] === "NoFleet") {
                    unCheckedValues.splice(i, 1);
                    i--;
                }
            }
            if (checkedValues.length == 0) {
                (checkedValues).toString();
            }
        }
        if (this.addCompany != true) {
            unCheckedValues = [];
        }
        var addDetails = {
            "companyID": userName,
            "branchID": userName, "username": userName,
            "emailId": unCheckedValues.toString(),
            "emailID": unCheckedValues.toString(),
            "imeiNo": JSON.stringify(this.vehicleCreation.value.imeiNo),
            "userEntry": "kingstrackalerts@gmail.com", "groupColor": "",
            "fleetUser": fleetManagers,
            "plateNo": this.vehicleCreation.value.plateNo, "oldCheckRoad": 0,
            "oldcheckFreeForm": 0, "oldcheckGeoZone": 0, "oldchecklandMark": 0,
            "oldcheckshift": 0, "type": "Type",
            "icon": this.vehicleCreation.value.assetCategory, "model": "Model",
            "group": "true", "dateofpurchase": "true", "insuranceExpiry": "true",
            "landMark": "true", "prefRest": "true",
            "expectedvehiclemilage": "0", "contactNo": "true", "fuelTanklit": "true",
            "roadGeo": "true", "freeForm": "true",
            "additionalWarranty": "true", "dateofreg": "true", "regexpiry": "true",
            "mileageInit": "true",
            "odometer": JSON.stringify(this.vehicleCreation.value.odometer), "preventiveselect": 3000,
            "preventivelimitselect": 30, "scheduleselect": 3000,
            "schedulelimitselect": 30,
            "PreventiveMaintenanceType": "hours",
            "reverseSetting": "0|0|0", "digitalInput1": "|",
            "digitalInput2": "|", "digitalInput3": "|", "digitalInput4": "|", "DigitalOutput": "|||",
            "analoginput1": "|||", "analoginput2": "|||", "analoginput3": "|||", "analoginput4": "|||",
            "onewiredinput": "", "actual1": "", "mv1": "", "actual2": "", "mv2": "", "actual3": "", "mv3": "",
            "actual4": "", "mv4": "", "checkDevice": 0, "checkOperator": 0, "checkshift": -1,
            "checkRoadGeo": -1, "checkFreeForm": -1, "checkGeoZone": -1, "checklandMark": -1,
            "showHierarchy": false, "vin": this.vin
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/site/add/vehicle';
        this.ajaxService.ajaxPostWithString(url, addDetails)
            .subscribe(function (res) {
            if (res === "persisted") {
                _this.commonService.presentToast('Vehicle added Successfully!');
                var smsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/device/initial/smsCommands?imeiNo=' + _this.vehicleCreation.value.imeiNo;
                _this.ajaxService.ajaxGet(smsUrl)
                    .subscribe(function (res) {
                });
                _this.router.navigateByUrl('/dashboard');
                _this.vehicleCreation.reset();
                _this.show = false;
                _this.showImei = false;
                _this.imeiTrue = false;
                _this.showFleet = false;
            }
        });
    };
    VehicleRegistrationPage.prototype.generateVin = function () {
        var _this = this;
        if (this.vehicleCreation.value.imeiNo != "" || this.vehicleCreation.value.imeiNo != " ") {
            var vehicleVin_1 = this.vehicleCreation.value.companyName + (Math.floor(Math.random() * 900) + 100);
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/device/validate/vin?vin=' + vehicleVin_1;
            this.ajaxService.ajaxGetWithString(url)
                .subscribe(function (res) {
                if (res == "notavailable") {
                    _this.vin = vehicleVin_1;
                    _this.vehicleDetails();
                }
                else if (res == "available") {
                    _this.generateVin();
                }
                else {
                    _this.commonService.presentToast('please contact support team');
                }
            });
        }
        else {
            this.commonService.presentToast('Assign Imei Properlly');
        }
    };
    VehicleRegistrationPage.prototype.ionViewWillEnter = function () {
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
    };
    VehicleRegistrationPage.prototype.ngOnInit = function () {
        this.selectedCompany = localStorage.getItem('companyId');
        this.companyDetail = {
            companyID: localStorage.getItem('companyId'),
            userId: localStorage.getItem('userId')
        };
        this.suffix = localStorage.getItem('companySuffix');
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
    };
    VehicleRegistrationPage.ctorParameters = function () { return [
        { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_8__["PdfLogoService"] }
    ]; };
    VehicleRegistrationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle-registration',
            template: __webpack_require__(/*! raw-loader!./vehicle-registration.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/vehicle-registration/vehicle-registration.page.html"),
            styles: [__webpack_require__(/*! ./vehicle-registration.page.scss */ "./src/app/delar-application/vehicle-registration/vehicle-registration.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_8__["PdfLogoService"]])
    ], VehicleRegistrationPage);
    return VehicleRegistrationPage;
}());



/***/ })

}]);
//# sourceMappingURL=vehicle-registration-vehicle-registration-module-es5.js.map