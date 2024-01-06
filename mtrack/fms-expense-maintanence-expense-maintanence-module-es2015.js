(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fms-expense-maintanence-expense-maintanence-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/fms/expense-maintanence/expense-maintanence.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fms/expense-maintanence/expense-maintanence.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" [ngClass]=\"{'companyHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\">\r\n    <ion-grid >\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row *ngIf=\"myPlatform != 'desktop'\">\r\n            <ion-col size=\"2\">\r\n                <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n           <ion-col size=\"8\">\r\n            <ion-label>Expense Details </ion-label>\r\n           </ion-col>  \r\n        </ion-row>\r\n          <ion-row *ngIf=\"myPlatform == 'desktop'\">\r\n            <ion-col size='2'>\r\n              <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <ion-label class=\"headercolour\">Expense Details </ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-img [src]=\"app.logo\"></ion-img>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>  \r\n</ion-header>\r\n<ion-content>\r\n  <app-expense-table></app-expense-table>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/fms/expense-maintanence/expense-maintanence.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/fms/expense-maintanence/expense-maintanence.module.ts ***!
  \***********************************************************************/
/*! exports provided: ExpenseMaintenancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseMaintenancePageModule", function() { return ExpenseMaintenancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _expense_maintanence_expense_maintanence_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../expense-maintanence/expense-maintanence.page */ "./src/app/fms/expense-maintanence/expense-maintanence.page.ts");





// import { ComponentsModule } from '../components/components.module';



// import { ExpenseMaintenancePage } from './expense-maintenance.page';
const routes = [
    {
        path: '',
        component: _expense_maintanence_expense_maintanence_page__WEBPACK_IMPORTED_MODULE_7__["ExpenseMaintanencePage"]
    }
];
let ExpenseMaintenancePageModule = class ExpenseMaintenancePageModule {
};
ExpenseMaintenancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_expense_maintanence_expense_maintanence_page__WEBPACK_IMPORTED_MODULE_7__["ExpenseMaintanencePage"]]
    })
], ExpenseMaintenancePageModule);



/***/ }),

/***/ "./src/app/fms/expense-maintanence/expense-maintanence.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/fms/expense-maintanence/expense-maintanence.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ztcy9leHBlbnNlLW1haW50YW5lbmNlL2V4cGVuc2UtbWFpbnRhbmVuY2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/fms/expense-maintanence/expense-maintanence.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/fms/expense-maintanence/expense-maintanence.page.ts ***!
  \*********************************************************************/
/*! exports provided: ExpenseMaintanencePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseMaintanencePage", function() { return ExpenseMaintanencePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ExpenseMaintanencePage = class ExpenseMaintanencePage {
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
ExpenseMaintanencePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
ExpenseMaintanencePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expense-maintanence',
        template: __webpack_require__(/*! raw-loader!./expense-maintanence.page.html */ "./node_modules/raw-loader/index.js!./src/app/fms/expense-maintanence/expense-maintanence.page.html"),
        styles: [__webpack_require__(/*! ./expense-maintanence.page.scss */ "./src/app/fms/expense-maintanence/expense-maintanence.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], ExpenseMaintanencePage);



/***/ })

}]);
//# sourceMappingURL=fms-expense-maintanence-expense-maintanence-module-es2015.js.map