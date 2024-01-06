(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-member-routing-module"],{

/***/ "./src/app/members/member-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/members/member-routing.module.ts ***!
  \**************************************************/
/*! exports provided: MemberRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberRoutingModule", function() { return MemberRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~e43080d9"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~63d3927b"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~32e20eb3"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~ais-dashboard-ais-dashboard~94cf38fc"), __webpack_require__.e("default~ais-dashboard-ais-dashboard-module~dashboard-dashboard-module~student-overview-student-overv~91b9e191"), __webpack_require__.e("default~dashboard-dashboard-module~new-dashboard-new-dashboard-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(m => m.DashboardPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ../login/login.module */ "./src/app/login/login.module.ts")).then(m => m.LoginPageModule)
    }
];
let MemberRoutingModule = class MemberRoutingModule {
};
MemberRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MemberRoutingModule);



/***/ })

}]);
//# sourceMappingURL=members-member-routing-module-es2015.js.map