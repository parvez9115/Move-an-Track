(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["skt-route-route-trip-route-trip-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/route/route-trip/route-trip.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/route/route-trip/route-trip.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content style=\"height: 100vh\">\r\n  <app-route-common></app-route-common>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/skt/route/route-trip/route-trip.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/skt/route/route-trip/route-trip.module.ts ***!
  \***********************************************************/
/*! exports provided: RouteTripPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteTripPageModule", function() { return RouteTripPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _route_trip_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./route-trip.page */ "./src/app/skt/route/route-trip/route-trip.page.ts");
/* harmony import */ var _sktcomponents_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sktcomponents.module */ "./src/app/skt/sktcomponents.module.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");









var routes = [
    {
        path: '',
        component: _route_trip_page__WEBPACK_IMPORTED_MODULE_6__["RouteTripPage"]
    }
];
var RouteTripPageModule = /** @class */ (function () {
    function RouteTripPageModule() {
    }
    RouteTripPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _sktcomponents_module__WEBPACK_IMPORTED_MODULE_7__["SktComponentsModule"],
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__["SharedModModule"]
            ],
            declarations: [_route_trip_page__WEBPACK_IMPORTED_MODULE_6__["RouteTripPage"]]
        })
    ], RouteTripPageModule);
    return RouteTripPageModule;
}());



/***/ }),

/***/ "./src/app/skt/route/route-trip/route-trip.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/skt/route/route-trip/route-trip.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NrdC9yb3V0ZS9yb3V0ZS10cmlwL3JvdXRlLXRyaXAucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/skt/route/route-trip/route-trip.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/skt/route/route-trip/route-trip.page.ts ***!
  \*********************************************************/
/*! exports provided: RouteTripPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteTripPage", function() { return RouteTripPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RouteTripPage = /** @class */ (function () {
    function RouteTripPage() {
    }
    RouteTripPage.prototype.ngOnInit = function () { };
    RouteTripPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-route-trip',
            template: __webpack_require__(/*! raw-loader!./route-trip.page.html */ "./node_modules/raw-loader/index.js!./src/app/skt/route/route-trip/route-trip.page.html"),
            styles: [__webpack_require__(/*! ./route-trip.page.scss */ "./src/app/skt/route/route-trip/route-trip.page.scss")]
        })
    ], RouteTripPage);
    return RouteTripPage;
}());



/***/ })

}]);
//# sourceMappingURL=skt-route-route-trip-route-trip-module-es5.js.map