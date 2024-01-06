(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-delar-add-delar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/add-delar/add-delar.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/add-delar/add-delar.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"dealerHeader\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"margin-left: 1%\">Dealer Creation</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"form-field\">\r\n      <ion-col>\r\n        <form class=\"formPadding\" [formGroup]=\"details\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <div class=\"header-label\">Login details</div>\r\n              <ion-row>\r\n                <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"4\">\r\n                  <ion-input\r\n                    formControlName=\"dealerName\"\r\n                    placeholder=\"Dealer name\"\r\n                    class=\"form-control\"\r\n                  ></ion-input>\r\n                </ion-col>\r\n                <!------->\r\n                <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"4\">\r\n                  <ion-input\r\n                    formControlName=\"delaarID\"\r\n                    placeholder=\"Login id\"\r\n                  ></ion-input>\r\n                </ion-col>\r\n                <!------->\r\n                <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"4\">\r\n                  <ion-input\r\n                    formControlName=\"password\"\r\n                    placeholder=\"Password\"\r\n                  ></ion-input>\r\n                </ion-col>\r\n              </ion-row>\r\n              <!------->\r\n              <div class=\"header-label\">Address</div>\r\n              <ion-row>\r\n                <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"4\">\r\n                  <ion-input\r\n                    formControlName=\"address\"\r\n                    placeholder=\"Address\"\r\n                  ></ion-input>\r\n                </ion-col>\r\n                <!--******************Mobile view***************----->\r\n                <ion-col\r\n                  size=\"12\"\r\n                  size-sm=\"12\"\r\n                  size-md=\"6\"\r\n                  size-lg=\"4\"\r\n                  *ngIf='myPlatform !== \"desktop\"'\r\n                >\r\n                  <ion-select\r\n                    class=\"input select-btn\"\r\n                    placeholder=\" Country\"\r\n                    formControlName=\"country\"\r\n                    (ionChange)=\"getState('state')\"\r\n                    [disabled]=\"imeiTrue\"\r\n                    (click)=\"clearstate()\"\r\n                  >\r\n                    <ion-select-option\r\n                      *ngFor=\"let countries of country\"\r\n                      [value]=\"countries\"\r\n                      >{{countries}}</ion-select-option\r\n                    >\r\n                  </ion-select>\r\n                </ion-col>\r\n                <!------->\r\n                <ion-col\r\n                  size=\"12\"\r\n                  size-sm=\"12\"\r\n                  size-md=\"6\"\r\n                  size-lg=\"4\"\r\n                  *ngIf='myPlatform !== \"desktop\"'\r\n                >\r\n                  <ion-select\r\n                    class=\"input select-btn\"\r\n                    placeholder=\"State\"\r\n                    formControlName=\"state\"\r\n                    (ionChange)=\"getState('city')\"\r\n                    (click)=\"cleardistrict()\"\r\n                  >\r\n                    <ion-select-option\r\n                      *ngFor=\"let states of state\"\r\n                      [value]=\"states\"\r\n                      >{{states}}</ion-select-option\r\n                    >\r\n                  </ion-select>\r\n                </ion-col>\r\n                <!------->\r\n                <ion-col\r\n                  size=\"12\"\r\n                  size-sm=\"12\"\r\n                  size-md=\"6\"\r\n                  size-lg=\"4\"\r\n                  *ngIf='myPlatform !== \"desktop\"'\r\n                >\r\n                  <ion-select\r\n                    class=\"input select-btn\"\r\n                    placeholder=\"District\"\r\n                    formControlName=\"city\"\r\n                    (ionChange)=\"getState('rto')\"\r\n                  >\r\n                    <ion-select-option *ngFor=\"let city of cities\"\r\n                      >{{city}}</ion-select-option\r\n                    >\r\n                  </ion-select>\r\n                </ion-col>\r\n                <!------->\r\n                <ion-col\r\n                  size=\"12\"\r\n                  size-sm=\"12\"\r\n                  size-md=\"6\"\r\n                  size-lg=\"4\"\r\n                  *ngIf='myPlatform !== \"desktop\"'\r\n                >\r\n                  <ion-select\r\n                    class=\"input select-btn\"\r\n                    placeholder=\"Rto area\"\r\n                    formControlName=\"rtoArea\"\r\n                    multiple=\"true\"\r\n                  >\r\n                    <ion-select-option *ngFor=\"let rto of rtos\"\r\n                      >{{rto}}</ion-select-option\r\n                    >\r\n                  </ion-select>\r\n                </ion-col>\r\n                <!--******************Mobile view***************----->\r\n                <!--*******************Webview***************----->\r\n                <ion-col\r\n                  size=\"12\"\r\n                  size-sm=\"12\"\r\n                  size-md=\"6\"\r\n                  size-lg=\"4\"\r\n                  *ngIf='myPlatform === \"desktop\"'\r\n                >\r\n                  <ion-select\r\n                    class=\"input select-btn\"\r\n                    placeholder=\" Country\"\r\n                    formControlName=\"country\"\r\n                    (ionChange)=\"getState('state')\"\r\n                    [disabled]=\"imeiTrue\"\r\n                    (click)=\"clearstate()\"\r\n                  >\r\n                    <ion-select-option\r\n                      *ngFor=\"let countries of country\"\r\n                      [value]=\"countries\"\r\n                      >{{countries}}</ion-select-option\r\n                    >\r\n                  </ion-select>\r\n                </ion-col>\r\n                <!------->\r\n                <ion-col\r\n                  size=\"12\"\r\n                  size-sm=\"12\"\r\n                  size-md=\"6\"\r\n                  size-lg=\"4\"\r\n                  *ngIf='myPlatform === \"desktop\"'\r\n                >\r\n                  <ion-select\r\n                    class=\"input select-btn\"\r\n                    placeholder=\"State\"\r\n                    formControlName=\"state\"\r\n                    (ionChange)=\"getState('city')\"\r\n                    (click)=\"cleardistrict()\"\r\n                  >\r\n                    <ion-select-option\r\n                      *ngFor=\"let states of state\"\r\n                      [value]=\"states\"\r\n                      >{{states}}</ion-select-option\r\n                    >\r\n                  </ion-select>\r\n                </ion-col>\r\n                <!------->\r\n                <ion-col\r\n                  size=\"12\"\r\n                  size-sm=\"12\"\r\n                  size-md=\"6\"\r\n                  size-lg=\"4\"\r\n                  *ngIf='myPlatform === \"desktop\"'\r\n                >\r\n                  <ion-select\r\n                    class=\"input select-btn\"\r\n                    placeholder=\"District\"\r\n                    formControlName=\"city\"\r\n                    (ionChange)=\"getState('rto')\"\r\n                  >\r\n                    <ion-select-option *ngFor=\"let city of cities\"\r\n                      >{{city}}</ion-select-option\r\n                    >\r\n                  </ion-select>\r\n                </ion-col>\r\n                <!------->\r\n                <ion-col\r\n                  size=\"12\"\r\n                  size-sm=\"12\"\r\n                  size-md=\"6\"\r\n                  size-lg=\"4\"\r\n                  *ngIf='myPlatform === \"desktop\"'\r\n                >\r\n                  <ion-select\r\n                    class=\"input select-btn\"\r\n                    placeholder=\"Rto area\"\r\n                    formControlName=\"rtoArea\"\r\n                    multiple=\"true\"\r\n                  >\r\n                    <ion-select-option *ngFor=\"let rto of rtos\"\r\n                      >{{rto}}</ion-select-option\r\n                    >\r\n                  </ion-select>\r\n                </ion-col>\r\n                <!--*******************Webview***************----->\r\n                <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"4\">\r\n                  <ion-input formControlName=\"dtcZone\" placeholder=\"Dtc zone\">\r\n                  </ion-input>\r\n                </ion-col>\r\n                <!------->\r\n                <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"4\">\r\n                  <ion-input\r\n                    formControlName=\"taluk\"\r\n                    placeholder=\"Taluk\"\r\n                  ></ion-input>\r\n                </ion-col>\r\n                <!------->\r\n                <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"4\">\r\n                  <ion-input\r\n                    formControlName=\"pin\"\r\n                    placeholder=\" Pin number\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                </ion-col>\r\n                <!------->\r\n                <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"4\">\r\n                  <ion-input\r\n                    formControlName=\"gstIn\"\r\n                    placeholder=\" Gstin\"\r\n                  ></ion-input>\r\n                </ion-col>\r\n              </ion-row>\r\n              <!------->\r\n              <div class=\"header-label\">Contact details</div>\r\n              <ion-row>\r\n                <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"4\">\r\n                  <ion-input\r\n                    formControlName=\"mobile\"\r\n                    placeholder=\"Mobile number\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                </ion-col>\r\n                <!------->\r\n                <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"4\">\r\n                  <ion-input\r\n                    formControlName=\"panNo\"\r\n                    placeholder=\"Pan number\"\r\n                  ></ion-input>\r\n                </ion-col>\r\n                <!------->\r\n                <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"4\">\r\n                  <ion-input\r\n                    formControlName=\"e_Mail\"\r\n                    placeholder=\"Email id\"\r\n                  ></ion-input>\r\n                </ion-col>\r\n                <!------->\r\n                <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"4\">\r\n                  <ion-input\r\n                    formControlName=\"adhaarNo\"\r\n                    placeholder=\"Aadhaar number\"\r\n                    maxlength=\"12\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                </ion-col>\r\n                <!------->\r\n                <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"4\">\r\n                  <ion-input\r\n                    formControlName=\"whatApp\"\r\n                    placeholder=\"Whatsapp\"\r\n                    type=\"number\"\r\n                    pattern=\"[1-9]{1}[0-9]{9}\"\r\n                    class=\"form-control\"\r\n                  >\r\n                  </ion-input>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!---submitbutton-->\r\n    <ion-row>\r\n      <ion-col style=\"text-align: center\">\r\n        <ion-button\r\n          (click)=\"onSubmit()\"\r\n          id=\"submitbtn\"\r\n          [disabled]=\"!details.valid\"\r\n          >Submit</ion-button\r\n        >\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/delar-application/add-delar/add-delar-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/delar-application/add-delar/add-delar-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AddDelarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDelarPageRoutingModule", function() { return AddDelarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_delar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-delar.page */ "./src/app/delar-application/add-delar/add-delar.page.ts");




var routes = [
    {
        path: '',
        component: _add_delar_page__WEBPACK_IMPORTED_MODULE_3__["AddDelarPage"]
    }
];
var AddDelarPageRoutingModule = /** @class */ (function () {
    function AddDelarPageRoutingModule() {
    }
    AddDelarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddDelarPageRoutingModule);
    return AddDelarPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/delar-application/add-delar/add-delar.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/delar-application/add-delar/add-delar.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddDelarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDelarPageModule", function() { return AddDelarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_delar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-delar-routing.module */ "./src/app/delar-application/add-delar/add-delar-routing.module.ts");
/* harmony import */ var _add_delar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-delar.page */ "./src/app/delar-application/add-delar/add-delar.page.ts");







var AddDelarPageModule = /** @class */ (function () {
    function AddDelarPageModule() {
    }
    AddDelarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _add_delar_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddDelarPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_add_delar_page__WEBPACK_IMPORTED_MODULE_6__["AddDelarPage"]]
        })
    ], AddDelarPageModule);
    return AddDelarPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/add-delar/add-delar.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/delar-application/add-delar/add-delar.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-label {\n  color: #6252ee;\n  font-weight: 500;\n  font-size: 17px;\n  padding: 8px 0px;\n}\n\nion-input, ion-select {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n@media only screen and (min-width: 768px) {\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 40%;\n  }\n}\n\n#submitbtn {\n  --background: #6252ee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vYWRkLWRlbGFyL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGFkZC1kZWxhclxcYWRkLWRlbGFyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vYWRkLWRlbGFyL2FkZC1kZWxhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREFBO0VBQ007SUFDRSxVQUFBO0VDR047QUFDRjs7QUREQTtFQUNJO0lBQ0EsU0FBQTtFQ0dGOztFRERFO0lBQ0MsVUFBQTtFQ0lIO0FBQ0Y7O0FERkE7RUFDSSxxQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vYWRkLWRlbGFyL2FkZC1kZWxhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWxhYmVse1xyXG4gICAgY29sb3I6ICM2MjUyZWU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgcGFkZGluZzogOHB4IDBweDtcclxufVxyXG5pb24taW5wdXQsaW9uLXNlbGVjdHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KXtcclxuICAgICAgI3N1Ym1pdGJ0bntcclxuICAgICAgICB3aWR0aDoyMCU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgIC5mb3JtLWZpZWxke1xyXG4gICAgem9vbTo4MCU7XHJcbiAgICB9XHJcbiAgICAjc3VibWl0YnRue1xyXG4gICAgIHdpZHRoOjQwJTtcclxuICAgIH1cclxufVxyXG4jc3VibWl0YnRue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNjI1MmVlO1xyXG59XHJcbiIsIi5oZWFkZXItbGFiZWwge1xuICBjb2xvcjogIzYyNTJlZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBwYWRkaW5nOiA4cHggMHB4O1xufVxuXG5pb24taW5wdXQsIGlvbi1zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxufVxuI3N1Ym1pdGJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/add-delar/add-delar.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/delar-application/add-delar/add-delar.page.ts ***!
  \***************************************************************/
/*! exports provided: AddDelarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDelarPage", function() { return AddDelarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_countries_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/countries.service */ "./src/app/services/countries.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









var AddDelarPage = /** @class */ (function () {
    function AddDelarPage(formBuilder, ajaxService, countries, router, commonService, platform) {
        this.formBuilder = formBuilder;
        this.ajaxService = ajaxService;
        this.countries = countries;
        this.router = router;
        this.commonService = commonService;
        this.platform = platform;
        this.delarDetails = {};
        this.submitted = false;
        this.mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
        this.mobnumPattern2 = "^((\\+91-?)|0)?[0-9]{12}$";
        this.mobnumPattern3 = "^((\\+91-?)|0)?[0-9]{15}$";
        this.Pattern4 = "^((\\+91-?)|0)?[0-9]{6}$";
        this.expression = "^[A-Za-z][A-Za-z0-9]*$";
        this.region = { India: "Asia/Kolkata", "Saudi Arabia": "Asia/Riyadh" };
        this.state = [];
        this.cities = [];
        this.rtos = [];
    }
    AddDelarPage.prototype.getCountries = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/login/getPreferences?key=countries&companyId=" +
            this.companyDetail.companyID;
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            _this.country = res;
            console.log(res);
        });
    };
    // clearstate() {
    //   this.details.patchValue({
    //     state: "",
    //     city: "",
    //     rtoArea: "",
    //   });
    // }
    AddDelarPage.prototype.cleardistrict = function () {
        this.details.patchValue({
            city: "",
            rtoArea: "",
        });
    };
    AddDelarPage.prototype.getCountryCode = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/login/getPreferences?key=countrycode&companyId=" +
            this.companyDetail.companyID;
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            _this.countryCode = res;
            console.log(res);
        });
    };
    AddDelarPage.prototype.getState = function (data) {
        var _this = this;
        if (data == "state") {
            this.state = this.countries.region[this.details.value.country];
            this.temp = this.state;
            if (this.temp == this.details.value.country) {
                this.state = this.countries.region[this.details.value.country];
            }
            else {
                this.cleardistrict();
            }
        }
        else if (data == "city") {
            this.cities = this.countries.states[this.details.value.state];
            var url1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/global/getrtozones";
            this.ajaxService.ajaxGet(url1).subscribe(function (res) {
                console.log(res);
                //  rto=res;
                _this.rtos = res[_this.details.value.state];
            });
        }
    };
    AddDelarPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.details.value.whatApp != null &&
            JSON.stringify(this.details.value.whatApp).length >= 10) {
            this.valid = true;
        }
        else {
            this.commonService.presentToast("Check the WhatApp No");
            this.valid = false;
        }
        if (this.details.value.e_Mail != null &&
            this.details.value.e_Mail.length > 2 &&
            this.details.value.adhaarNo != null &&
            JSON.stringify(this.details.value.adhaarNo).length > 2) {
            this.valid = true;
        }
        else {
            this.commonService.presentToast("Check the E-mail Or AdhaarNo");
            this.valid = false;
        }
        if (this.details.value.mobile != null &&
            JSON.stringify(this.details.value.mobile).length >= 10) {
            this.valid = true;
        }
        else {
            this.commonService.presentToast("Check the Mobile");
            this.valid = false;
        }
        if (this.details.value.pin != null &&
            JSON.stringify(this.details.value.pin).length === 6) {
            this.valid = true;
        }
        else {
            this.commonService.presentToast("Check the Pincode , Is should be 6 Digits");
            this.valid = false;
        }
        // if((this.details.value.district != null   && this.details.value.district.length > 2) && (this.details.value.taluk != null  &&  this.details.value.taluk.length > 2)){
        //   this.valid=true;
        // }else{
        // this.commonService.presentToast("Check the  Taluk");
        // this.valid=false;
        // }
        if (this.details.value.taluk != null &&
            this.details.value.taluk.length > 2) {
            this.valid = true;
        }
        else {
            this.commonService.presentToast("Check the  Taluk");
            this.valid = false;
        }
        if (this.details.value.city != null &&
            this.details.value.city.length > 2 &&
            this.details.value.country != null &&
            this.details.value.country.length > 2) {
            this.valid = true;
        }
        else {
            this.commonService.presentToast("Check the District Or Country");
            this.valid = false;
        }
        if (this.details.value.rtoArea != null &&
            this.details.value.rtoArea.length > 0 &&
            this.details.value.dtcZone != null &&
            this.details.value.dtcZone.length > 2) {
            this.valid = true;
        }
        else {
            this.commonService.presentToast("Check the RTO Area Or Address");
            this.valid = false;
        }
        if (this.details.value.password != null &&
            this.details.value.password.length >= 6 &&
            this.details.value.address != null &&
            this.details.value.address.length > 2) {
            this.valid = true;
        }
        else {
            this.commonService.presentToast("Check the Password Or Address, Password should be Minimum 6 Digits");
            this.valid = false;
        }
        if (this.details.value.delaarID != null) {
            var my_string = this.details.value.delaarID;
            var spaceCount = my_string.split(" ").length - 1;
            console.log(spaceCount);
            if (this.details.value.delaarID != null &&
                this.details.value.delaarID.length < 16 &&
                spaceCount == 0) {
                this.valid = true;
            }
            else {
                this.commonService.presentToast("Check the Dealer ID, Avoid spaces , 15 Characters only allowed");
                this.valid = false;
            }
        }
        else {
            this.commonService.presentToast("Check the Dealer ID");
        }
        if (this.details.value.dealerName != null &&
            this.details.value.dealerName.length > 2) {
            this.valid = true;
        }
        else {
            this.commonService.presentToast("Check the DealerName Or Dealer ID");
            this.valid = false;
        }
        if (this.details.value.state != null &&
            this.details.value.state.length > 2) {
            this.valid = true;
        }
        else {
            this.commonService.presentToast("Check the state ");
            this.valid = false;
        }
        if (this.details.status != "INVALID" && this.details.status != "PENDING") {
            this.submitted = true;
            var region = this.region[this.details.value.country];
            var countryCode = this.countryCode[this.details.value.country];
            this.delarDetails = {
                companyId: this.details.value.delaarID,
                // DealerName: this.details.value.dealerName,
                password: this.details.value.password,
                delaarId: this.details.value.dealerName,
                Address: this.details.value.address,
                rtoArea: this.details.value.rtoArea.toString(),
                dtcZone: this.details.value.dtcZone,
                taluk: this.details.value.taluk,
                district: this.details.value.city,
                pincode: this.details.value.pin + "",
                city: this.details.value.city,
                gstin: this.details.value.gstIn,
                mobileNo: this.details.value.mobile + "",
                pancardNo: this.details.value.panNo,
                email: this.details.value.e_Mail,
                adharNo: this.details.value.adhaarNo + "",
                whatsApp: this.details.value.whatApp,
                countryCode: countryCode,
                region: region,
                createBy: localStorage.getItem("companySuffix"),
            };
            console.log(this.delarDetails);
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/global/dealer";
            this.ajaxService
                .ajaxPostWithBody(url, JSON.stringify(this.delarDetails))
                .subscribe(function (res) {
                var respData = res;
                if (respData.Message == "Dealer already exist.") {
                    _this.commonService.presentToast("Dealer already exist.");
                }
                else if (respData.Message == "Dealer Added Successfully.") {
                    _this.commonService.presentToast("Dealer Added Successfully.");
                    _this.router.navigateByUrl("/dashboard");
                }
                else {
                    _this.commonService.presentToast(respData.Message);
                }
                console.log(res);
            });
        }
    };
    //  data = this.details.value.dealerName
    // "asdad"
    // 4add-delar.page.ts:201 VALID
    // /[^a-zA-Z0-9\-\/]/.test( data)
    // false
    // data = this.details.value.dealerName
    // "asdad @@ "
    // /[^a-zA-Z0-9\-\/]/.test( data)
    // true
    AddDelarPage.prototype.ionViewWillEnter = function () {
        this.companyDetail = {
            companyID: localStorage.getItem("companyId"),
            userId: localStorage.getItem("userId"),
        };
        this.details.reset();
        this.getCountryCode();
        this.getCountries();
        this.valid = false;
    };
    AddDelarPage.prototype.ngOnInit = function () {
        // const yourhandle= require('countrycitystatejson');
        // console.log(yourhandle);
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.details = this.formBuilder.group({
            dealerName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            city: [""],
            country: [""],
            address: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            delaarID: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            rtoArea: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dtcZone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // district:['',Validators.required],
            taluk: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.Pattern4)]],
            gstIn: [""],
            // gstIn:['',[Validators.required,Validators.minLength(15),Validators.maxLength(15)]],
            mobile: [""],
            panNo: [""],
            e_Mail: [""],
            adhaarNo: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.mobnumPattern2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12),
                ],
            ],
            whatApp: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10),
                ],
            ],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    AddDelarPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: _services_countries_service__WEBPACK_IMPORTED_MODULE_6__["CountriesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] }
    ]; };
    AddDelarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-add-delar",
            template: __webpack_require__(/*! raw-loader!./add-delar.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/add-delar/add-delar.page.html"),
            styles: [__webpack_require__(/*! ./add-delar.page.scss */ "./src/app/delar-application/add-delar/add-delar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            _services_countries_service__WEBPACK_IMPORTED_MODULE_6__["CountriesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]])
    ], AddDelarPage);
    return AddDelarPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-delar-add-delar-module-es5.js.map