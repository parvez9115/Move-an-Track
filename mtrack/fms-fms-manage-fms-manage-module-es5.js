(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fms-fms-manage-fms-manage-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/fms/fms-manage/fms-manage.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fms/fms-manage/fms-manage.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" [ngClass]=\"{'companyHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\">\r\n    <ion-grid >\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row *ngIf=\"myPlatform != 'desktop'\">\r\n            <ion-col size=\"2\">\r\n                <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n           <ion-col size=\"8\">\r\n            <ion-label>Manage </ion-label>\r\n           </ion-col>  \r\n        </ion-row>\r\n          <ion-row *ngIf=\"myPlatform == 'desktop'\">\r\n            <ion-col size='2'>\r\n              <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <ion-label class=\"headercolour\"> Manage  </ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-img [src]=\"app.logo\"></ion-img>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>  \r\n</ion-header>\r\n<ion-content>\r\n<app-manage-table></app-manage-table>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/fms/fms-manage/fms-manage.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/fms/fms-manage/fms-manage.module.ts ***!
  \*****************************************************/
/*! exports provided: FmsManagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FmsManagePageModule", function() { return FmsManagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _fms_manage_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fms-manage.page */ "./src/app/fms/fms-manage/fms-manage.page.ts");








var routes = [
    {
        path: '',
        component: _fms_manage_page__WEBPACK_IMPORTED_MODULE_7__["FmsManagePage"]
    }
];
var FmsManagePageModule = /** @class */ (function () {
    function FmsManagePageModule() {
    }
    FmsManagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fms_manage_page__WEBPACK_IMPORTED_MODULE_7__["FmsManagePage"]]
        })
    ], FmsManagePageModule);
    return FmsManagePageModule;
}());



/***/ }),

/***/ "./src/app/fms/fms-manage/fms-manage.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/fms/fms-manage/fms-manage.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ztcy9mbXMtbWFuYWdlL2Ztcy1tYW5hZ2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/fms/fms-manage/fms-manage.page.ts":
/*!***************************************************!*\
  !*** ./src/app/fms/fms-manage/fms-manage.page.ts ***!
  \***************************************************/
/*! exports provided: FmsManagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FmsManagePage", function() { return FmsManagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var FmsManagePage = /** @class */ (function () {
    function FmsManagePage(platform) {
        this.platform = platform;
        this.app = { logo: 'logo.png' };
    }
    FmsManagePage.prototype.ngOnInit = function () {
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
    FmsManagePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ]; };
    FmsManagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fms-manage',
            template: __webpack_require__(/*! raw-loader!./fms-manage.page.html */ "./node_modules/raw-loader/index.js!./src/app/fms/fms-manage/fms-manage.page.html"),
            styles: [__webpack_require__(/*! ./fms-manage.page.scss */ "./src/app/fms/fms-manage/fms-manage.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], FmsManagePage);
    return FmsManagePage;
}());



/***/ })

}]);
//# sourceMappingURL=fms-fms-manage-fms-manage-module-es5.js.map