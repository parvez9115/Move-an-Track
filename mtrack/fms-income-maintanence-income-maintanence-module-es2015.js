(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fms-income-maintanence-income-maintanence-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/fms/income-maintanence/income-maintanence.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fms/income-maintanence/income-maintanence.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" [ngClass]=\"{'companyHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\">\r\n    <ion-grid >\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row *ngIf=\"myPlatform != 'desktop'\">\r\n            <ion-col size=\"2\">\r\n                <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n           <ion-col size=\"8\">\r\n            <ion-label>Income Details </ion-label>\r\n           </ion-col>  \r\n        </ion-row>\r\n          <ion-row *ngIf=\"myPlatform == 'desktop'\">\r\n            <ion-col size='2'>\r\n              <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <ion-label class=\"headercolour\">Income Details </ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-img [src]=\"app.logo\"></ion-img>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>  \r\n</ion-header>\r\n<ion-content>\r\n  <app-income-table></app-income-table>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/fms/income-maintanence/income-maintanence.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/fms/income-maintanence/income-maintanence.module.ts ***!
  \*********************************************************************/
/*! exports provided: IncomeMaintanencePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeMaintanencePageModule", function() { return IncomeMaintanencePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _income_maintanence_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./income-maintanence.page */ "./src/app/fms/income-maintanence/income-maintanence.page.ts");








const routes = [
    {
        path: '',
        component: _income_maintanence_page__WEBPACK_IMPORTED_MODULE_7__["IncomeMaintanencePage"]
    }
];
let IncomeMaintanencePageModule = class IncomeMaintanencePageModule {
};
IncomeMaintanencePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_income_maintanence_page__WEBPACK_IMPORTED_MODULE_7__["IncomeMaintanencePage"]]
    })
], IncomeMaintanencePageModule);



/***/ }),

/***/ "./src/app/fms/income-maintanence/income-maintanence.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/fms/income-maintanence/income-maintanence.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ztcy9pbmNvbWUtbWFpbnRhbmVuY2UvaW5jb21lLW1haW50YW5lbmNlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/fms/income-maintanence/income-maintanence.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/fms/income-maintanence/income-maintanence.page.ts ***!
  \*******************************************************************/
/*! exports provided: IncomeMaintanencePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeMaintanencePage", function() { return IncomeMaintanencePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let IncomeMaintanencePage = class IncomeMaintanencePage {
    constructor(platform) {
        this.platform = platform;
        this.app = { logo: 'logo.png' };
    }
    ngOnInit() {
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
    }
};
IncomeMaintanencePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
IncomeMaintanencePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-maintanence',
        template: __webpack_require__(/*! raw-loader!./income-maintanence.page.html */ "./node_modules/raw-loader/index.js!./src/app/fms/income-maintanence/income-maintanence.page.html"),
        styles: [__webpack_require__(/*! ./income-maintanence.page.scss */ "./src/app/fms/income-maintanence/income-maintanence.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], IncomeMaintanencePage);



/***/ })

}]);
//# sourceMappingURL=fms-income-maintanence-income-maintanence-module-es2015.js.map