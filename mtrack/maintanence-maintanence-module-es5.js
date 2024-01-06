(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maintanence-maintanence-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/maintanence/maintanence.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maintanence/maintanence.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" [ngClass]=\"{'appHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row *ngIf=\"myPlatform != 'desktop'\">\r\n              <ion-col size=\"2\">\r\n                  <ion-menu-button></ion-menu-button>\r\n              </ion-col>\r\n             <ion-col size=\"8\">\r\n              <ion-label style=\"font-size: 20px;font-weight: bold;\">Maintenance </ion-label>\r\n             </ion-col>  \r\n          </ion-row>\r\n         \r\n          <ion-row *ngIf=\"myPlatform == 'desktop'\">\r\n            <ion-col size='2'>\r\n              <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <ion-label class=\"headercolour\">Maintenance</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>  \r\n</ion-header>\r\n<ion-content>\r\n<app-maintanence-table  class=\"maintanence_table\"></app-maintanence-table>\r\n<!-- <app-maintanence-card class=\"maintanence_card\" *ngIf=\"myPlatform != 'desktop'\"></app-maintanence-card>/ -->\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/maintanence/maintanence.module.ts":
/*!***************************************************!*\
  !*** ./src/app/maintanence/maintanence.module.ts ***!
  \***************************************************/
/*! exports provided: MaintanencePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintanencePageModule", function() { return MaintanencePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _maintanence_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./maintanence.page */ "./src/app/maintanence/maintanence.page.ts");








var routes = [
    {
        path: '',
        component: _maintanence_page__WEBPACK_IMPORTED_MODULE_7__["MaintanencePage"]
    }
];
var MaintanencePageModule = /** @class */ (function () {
    function MaintanencePageModule() {
    }
    MaintanencePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_maintanence_page__WEBPACK_IMPORTED_MODULE_7__["MaintanencePage"]]
        })
    ], MaintanencePageModule);
    return MaintanencePageModule;
}());



/***/ }),

/***/ "./src/app/maintanence/maintanence.page.scss":
/*!***************************************************!*\
  !*** ./src/app/maintanence/maintanence.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW50YW5lbmNlL21haW50YW5lbmNlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/maintanence/maintanence.page.ts":
/*!*************************************************!*\
  !*** ./src/app/maintanence/maintanence.page.ts ***!
  \*************************************************/
/*! exports provided: MaintanencePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintanencePage", function() { return MaintanencePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var MaintanencePage = /** @class */ (function () {
    function MaintanencePage(platform) {
        this.platform = platform;
        this.isDeleteShow = false;
    }
    MaintanencePage.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["app"].appName;
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
        var localMainMenu = JSON.parse(localStorage.mainMenu);
        this.isDeleteShow = localMainMenu.includes("Delete");
    };
    MaintanencePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ]; };
    MaintanencePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maintanence',
            template: __webpack_require__(/*! raw-loader!./maintanence.page.html */ "./node_modules/raw-loader/index.js!./src/app/maintanence/maintanence.page.html"),
            styles: [__webpack_require__(/*! ./maintanence.page.scss */ "./src/app/maintanence/maintanence.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], MaintanencePage);
    return MaintanencePage;
}());



/***/ })

}]);
//# sourceMappingURL=maintanence-maintanence-module-es5.js.map