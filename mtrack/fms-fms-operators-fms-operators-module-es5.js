(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fms-fms-operators-fms-operators-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/fms/fms-operators/fms-operators.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fms/fms-operators/fms-operators.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" [ngClass]=\"{'companyHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\">\r\n    <ion-grid >\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row *ngIf=\"myPlatform != 'desktop'\">\r\n            <ion-col size=\"2\">\r\n                <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n           <ion-col size=\"8\">\r\n            <ion-label>Operator </ion-label>\r\n           </ion-col>  \r\n        </ion-row>\r\n          <ion-row *ngIf=\"myPlatform == 'desktop'\">\r\n            <ion-col size='2'>\r\n              <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <ion-label class=\"headercolour\"> Operator  </ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-img [src]=\"app.logo\"></ion-img>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>  \r\n</ion-header>\r\n\r\n<ion-content>\r\n<app-operator-table></app-operator-table>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/fms/fms-operators/fms-operators.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/fms/fms-operators/fms-operators.module.ts ***!
  \***********************************************************/
/*! exports provided: FmsOperatorsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FmsOperatorsPageModule", function() { return FmsOperatorsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fms_operators_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fms-operators.page */ "./src/app/fms/fms-operators/fms-operators.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");









var routes = [
    {
        path: '',
        component: _fms_operators_page__WEBPACK_IMPORTED_MODULE_7__["FmsOperatorsPage"]
    }
];
var FmsOperatorsPageModule = /** @class */ (function () {
    function FmsOperatorsPageModule() {
    }
    FmsOperatorsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__["SharedModModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fms_operators_page__WEBPACK_IMPORTED_MODULE_7__["FmsOperatorsPage"]]
        })
    ], FmsOperatorsPageModule);
    return FmsOperatorsPageModule;
}());



/***/ }),

/***/ "./src/app/fms/fms-operators/fms-operators.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/fms/fms-operators/fms-operators.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ztcy9mbXMtb3BlcmF0b3JzL2Ztcy1vcGVyYXRvcnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/fms/fms-operators/fms-operators.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/fms/fms-operators/fms-operators.page.ts ***!
  \*********************************************************/
/*! exports provided: FmsOperatorsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FmsOperatorsPage", function() { return FmsOperatorsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var FmsOperatorsPage = /** @class */ (function () {
    function FmsOperatorsPage(platform) {
        this.platform = platform;
        this.app = { logo: 'logo.png' };
    }
    FmsOperatorsPage.prototype.ngOnInit = function () {
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["app"].appName;
        // this.app["logo"] = localStorage.companyLogo;
        if (localStorage.getItem('fmslogin') == 'FMS') {
            this.app["logo"] = localStorage.getItem('fmslogo');
        }
        else {
            this.app["logo"] = localStorage.companyLogo;
        }
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
    };
    FmsOperatorsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ]; };
    FmsOperatorsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fms-operators',
            template: __webpack_require__(/*! raw-loader!./fms-operators.page.html */ "./node_modules/raw-loader/index.js!./src/app/fms/fms-operators/fms-operators.page.html"),
            styles: [__webpack_require__(/*! ./fms-operators.page.scss */ "./src/app/fms/fms-operators/fms-operators.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], FmsOperatorsPage);
    return FmsOperatorsPage;
}());



/***/ })

}]);
//# sourceMappingURL=fms-fms-operators-fms-operators-module-es5.js.map