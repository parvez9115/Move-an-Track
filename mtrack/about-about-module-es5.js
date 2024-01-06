(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/parent-app/about/about.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/parent-app/about/about.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"header\">\r\n  <ion-toolbar class=\"parentAppcolor\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <!-- <ion-row class=\"iconPlace\">\r\n    <ion-icon class=\"iconStyle\" style=\"font-size: 120px;\" name= \"contact\"> </ion-icon>\r\n    <ion-img style=\"width:70%;\" src=\"assets/vtstrackhisIcon/seatBelt.svg\"></ion-img>\r\n  </ion-row> -->\r\n  <ion-row>\r\n    <ion-col\r\n      size=\"8\"\r\n      offset=\"2\"\r\n      class=\"ion-align-items-center ion-justify-content-center\"\r\n    >\r\n      <ion-row class=\"ion-align-items-center ion-justify-content-center\">\r\n        <ion-img\r\n          style=\"width: 70%; border: 2px solid lightgrey; border-radius: 78px\"\r\n          src=\"assets/vtstrackhisIcon/seatBelt.svg\"\r\n        ></ion-img>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row\r\n    ><ion-col size=\"12\" class=\"ion-text-center\"\r\n      >{{data.schoolName}}\r\n    </ion-col></ion-row\r\n  >\r\n  <!-- <ion-row><ion-col size=8 offset=\"2\" class=\"ion-text-center\" off-set=4><ion-card>\r\n<ion-row><ion-col size=12 class=\"ion-text-center\">Description</ion-col></ion-row>\r\n<ion-row>NO 1 school in chennai</ion-row>\r\n</ion-card></ion-col></ion-row> -->\r\n  <!-- description\r\n  Mail Id\r\n  Address\r\n  Phone Number -->\r\n  <ion-row class=\"rowPadding\">\r\n    <ion-col size=\"2\" style=\"text-align: right\">\r\n      <ion-icon class=\"detailIcon\" name=\"phone-portrait\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"10\">\r\n      <label>{{data.contactNo}}</label>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"rowPadding\">\r\n    <ion-col size=\"2\" style=\"text-align: right\">\r\n      <ion-icon class=\"detailIcon\" name=\"mail\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"10\">\r\n      <label>{{data.mailId}}</label>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"rowPadding\">\r\n    <ion-col size=\"2\" style=\"text-align: right; align-self: center\">\r\n      <ion-icon name=\"compass\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"10\">\r\n      <label>{{data.address}}</label>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"rowPadding\">\r\n    <ion-col size=\"2\" style=\"text-align: right; align-self: center\">\r\n      <ion-icon name=\"business\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"10\">\r\n      <label>{{data.describe}}</label>\r\n    </ion-col>\r\n  </ion-row>\r\n  <!-- <ion-row><ion-col size=12 class=\"ion-text-center\" ><ion-card>\r\n    <ion-row><ion-col size=12 class=\"ion-text-center\">Description</ion-col></ion-row>\r\n    <ion-row><ion-col size=12 class=\"ion-text-left\">No:3 Ramanujam garden street, perambur, chennai-600012</ion-col></ion-row>\r\n    </ion-card></ion-col></ion-row> -->\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/parent-app/about/about.module.ts":
/*!**************************************************!*\
  !*** ./src/app/parent-app/about/about.module.ts ***!
  \**************************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/app/parent-app/about/about.page.ts");







var routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]
    }
];
var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/parent-app/about/about.page.scss":
/*!**************************************************!*\
  !*** ./src/app/parent-app/about/about.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rowPadding {\n  padding: 8px;\n  border-bottom: 1px solid lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFyZW50LWFwcC9hYm91dC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXHBhcmVudC1hcHBcXGFib3V0XFxhYm91dC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhcmVudC1hcHAvYWJvdXQvYWJvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYXJlbnQtYXBwL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3dQYWRkaW5ne1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICB9XHJcbiIsIi5yb3dQYWRkaW5nIHtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/parent-app/about/about.page.ts":
/*!************************************************!*\
  !*** ./src/app/parent-app/about/about.page.ts ***!
  \************************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var AboutPage = /** @class */ (function () {
    function AboutPage(ajaxservice, location) {
        this.ajaxservice = ajaxservice;
        this.location = location;
        this.data = {
            schoolName: "",
            mailId: "",
            contactNo: "",
            address: "",
            describe: ""
        };
    }
    AboutPage.prototype.getAboutDatas = function () {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web + '/parentapp/about?companyId=' + localStorage.getItem('corpId');
        this.ajaxservice.ajaxGetObject(url).subscribe(function (res) {
            _this.data = JSON.parse(res);
        });
    };
    AboutPage.prototype.locationBack = function () {
        this.location.back();
    };
    AboutPage.prototype.ngOnInit = function () {
        this.getAboutDatas();
    };
    AboutPage.ctorParameters = function () { return [
        { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
    ]; };
    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.page.html */ "./node_modules/raw-loader/index.js!./src/app/parent-app/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/parent-app/about/about.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module-es5.js.map