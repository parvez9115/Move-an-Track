(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["diagnosis-user-diagnosis-user-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/diagnosis-user/diagnosis-user.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/diagnosis-user/diagnosis-user.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class='header'>\r\n  <ion-toolbar [ngClass]=\"{'appHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\">\r\n      <ion-grid>\r\n          <ion-row *ngIf=\"!showSearch && myPlatform !='desktop'\"  style=\"align-items: center;\">\r\n              <ion-col size='2'>\r\n                  <ion-menu-button> </ion-menu-button>\r\n              </ion-col>\r\n              <ion-col size='7.5' style='align-self: center;'>\r\n                  <ion-row>\r\n                      <ion-label style=\"font-size: 20px;font-weight: bold;\">User diagnosis</ion-label>\r\n                  </ion-row>\r\n              </ion-col>\r\n              <ion-col  style=\"text-align: center;\" size='1'>\r\n               \r\n              </ion-col>\r\n              <ion-col size='1.5' style=\"padding: 0px;\">\r\n                  <ion-row >\r\n                      <ion-col size='3' style=\"align-self: center;\"> \r\n                        \r\n                      </ion-col>\r\n                  </ion-row>\r\n              </ion-col>\r\n          </ion-row>\r\n          <ion-row *ngIf=\"!showSearch && myPlatform =='desktop'\"  style=\"align-items: center;\">\r\n            <ion-col size='2'>\r\n                <ion-menu-button> </ion-menu-button>\r\n            </ion-col>\r\n            <ion-col size='7.5' style='align-self: center;'>\r\n                <ion-row>\r\n                    <ion-label class=\"headercolour\">User diagnosis</ion-label>\r\n                </ion-row>\r\n            </ion-col>\r\n            <ion-col  style=\"text-align: center;\" size='1'>\r\n             \r\n            </ion-col>\r\n            <ion-col size='1.5' style=\"padding: 0px;\">\r\n                <ion-row >\r\n                    <ion-col size='3' style=\"align-self: center;\"> \r\n                      \r\n                    </ion-col>\r\n                    \r\n                   <ion-col *ngIf='myPlatform ==\"desktop\"' size='9'>\r\n                    <ion-img [src]=\"app.logo\"></ion-img>\r\n                   </ion-col>\r\n                </ion-row>\r\n            </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<app-vts-user-diagnosis></app-vts-user-diagnosis>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/diagnosis-user/diagnosis-user.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/diagnosis-user/diagnosis-user.module.ts ***!
  \*********************************************************/
/*! exports provided: DiagnosisUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosisUserPageModule", function() { return DiagnosisUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _diagnosis_user_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./diagnosis-user.page */ "./src/app/diagnosis-user/diagnosis-user.page.ts");








var routes = [
    {
        path: '',
        component: _diagnosis_user_page__WEBPACK_IMPORTED_MODULE_7__["DiagnosisUserPage"]
    }
];
var DiagnosisUserPageModule = /** @class */ (function () {
    function DiagnosisUserPageModule() {
    }
    DiagnosisUserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_diagnosis_user_page__WEBPACK_IMPORTED_MODULE_7__["DiagnosisUserPage"]]
        })
    ], DiagnosisUserPageModule);
    return DiagnosisUserPageModule;
}());



/***/ }),

/***/ "./src/app/diagnosis-user/diagnosis-user.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/diagnosis-user/diagnosis-user.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWdub3Npcy11c2VyL2RpYWdub3Npcy11c2VyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/diagnosis-user/diagnosis-user.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/diagnosis-user/diagnosis-user.page.ts ***!
  \*******************************************************/
/*! exports provided: DiagnosisUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosisUserPage", function() { return DiagnosisUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var DiagnosisUserPage = /** @class */ (function () {
    function DiagnosisUserPage(platform) {
        this.platform = platform;
        this.app = { logo: 'logo.png' };
    }
    DiagnosisUserPage.prototype.ngOnInit = function () {
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["app"].appName;
        this.app["logo"] = localStorage.companyLogo;
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
    };
    DiagnosisUserPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ]; };
    DiagnosisUserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-diagnosis-user',
            template: __webpack_require__(/*! raw-loader!./diagnosis-user.page.html */ "./node_modules/raw-loader/index.js!./src/app/diagnosis-user/diagnosis-user.page.html"),
            styles: [__webpack_require__(/*! ./diagnosis-user.page.scss */ "./src/app/diagnosis-user/diagnosis-user.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], DiagnosisUserPage);
    return DiagnosisUserPage;
}());



/***/ })

}]);
//# sourceMappingURL=diagnosis-user-diagnosis-user-module-es5.js.map