(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parent-app-parent-tab-parent-tab-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/parent-app/parent-tab/parent-tab.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/parent-app/parent-tab/parent-tab.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"routmap\">\r\n      <ion-icon name=\"analytics\"></ion-icon>\r\n      <ion-label>Rout map</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"studentlivetrack\">\r\n      <ion-icon name=\"person\"></ion-icon>\r\n      <ion-label>Live track</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"Alerts\">\r\n      <ion-icon name=\"settings\"></ion-icon>\r\n      <ion-label>Alerts</ion-label>\r\n    </ion-tab-button>\r\n\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n"

/***/ }),

/***/ "./src/app/parent-app/parent-tab/parent-tab.module.ts":
/*!************************************************************!*\
  !*** ./src/app/parent-app/parent-tab/parent-tab.module.ts ***!
  \************************************************************/
/*! exports provided: ParentTabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentTabPageModule", function() { return ParentTabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parent_tab_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parent-tab.router.module */ "./src/app/parent-app/parent-tab/parent-tab.router.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _parent_tab_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parent-tab.page */ "./src/app/parent-app/parent-tab/parent-tab.page.ts");








var routes = [
    {
        path: '',
        component: _parent_tab_page__WEBPACK_IMPORTED_MODULE_7__["ParentTabPage"]
    }
];
var ParentTabPageModule = /** @class */ (function () {
    function ParentTabPageModule() {
    }
    ParentTabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _parent_tab_router_module__WEBPACK_IMPORTED_MODULE_5__["ParentTabPageRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_parent_tab_page__WEBPACK_IMPORTED_MODULE_7__["ParentTabPage"]]
        })
    ], ParentTabPageModule);
    return ParentTabPageModule;
}());



/***/ }),

/***/ "./src/app/parent-app/parent-tab/parent-tab.page.scss":
/*!************************************************************!*\
  !*** ./src/app/parent-app/parent-tab/parent-tab.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-selected {\n  color: #ff9025;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFyZW50LWFwcC9wYXJlbnQtdGFiL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxccGFyZW50LWFwcFxccGFyZW50LXRhYlxccGFyZW50LXRhYi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhcmVudC1hcHAvcGFyZW50LXRhYi9wYXJlbnQtdGFiLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhcmVudC1hcHAvcGFyZW50LXRhYi9wYXJlbnQtdGFiLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGFiLXNlbGVjdGVke1xyXG4gICAgY29sb3I6ICNmZjkwMjU7XHJcbn0iLCIudGFiLXNlbGVjdGVkIHtcbiAgY29sb3I6ICNmZjkwMjU7XG59Il19 */"

/***/ }),

/***/ "./src/app/parent-app/parent-tab/parent-tab.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/parent-app/parent-tab/parent-tab.page.ts ***!
  \**********************************************************/
/*! exports provided: ParentTabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentTabPage", function() { return ParentTabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var ParentTabPage = /** @class */ (function () {
    function ParentTabPage(activatedRoute, platform) {
        this.activatedRoute = activatedRoute;
        this.platform = platform;
    }
    ParentTabPage.prototype.tabChanged = function () {
        this.selectedTab = this.myTabs.getSelected();
    };
    ParentTabPage.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["app"].appName;
    };
    ParentTabPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myTabs', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ParentTabPage.prototype, "myTabs", void 0);
    ParentTabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parent-tab',
            template: __webpack_require__(/*! raw-loader!./parent-tab.page.html */ "./node_modules/raw-loader/index.js!./src/app/parent-app/parent-tab/parent-tab.page.html"),
            styles: [__webpack_require__(/*! ./parent-tab.page.scss */ "./src/app/parent-app/parent-tab/parent-tab.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], ParentTabPage);
    return ParentTabPage;
}());



/***/ }),

/***/ "./src/app/parent-app/parent-tab/parent-tab.router.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/parent-app/parent-tab/parent-tab.router.module.ts ***!
  \*******************************************************************/
/*! exports provided: ParentTabPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentTabPageRoutingModule", function() { return ParentTabPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parent_tab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parent-tab.page */ "./src/app/parent-app/parent-tab/parent-tab.page.ts");




var routes = [
    {
        path: '',
        component: _parent_tab_page__WEBPACK_IMPORTED_MODULE_3__["ParentTabPage"],
        children: [
            {
                path: 'routmap',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | rout-map-rout-map-module */ "rout-map-rout-map-module").then(__webpack_require__.bind(null, /*! ../rout-map/rout-map.module */ "./src/app/parent-app/rout-map/rout-map.module.ts")).then(function (m) { return m.RoutMapPageModule; }); }
                    }
                ]
            },
            {
                path: 'studentlivetrack',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return Promise.all(/*! import() | student-livetrack-student-livetrack-module */[__webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~e43080d9"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~63d3927b"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~df599c5c"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~32e20eb3"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~5433863e"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~5551ec55"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~d0083fca"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~ais-dashboard-ais-dashboard~94cf38fc"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~f38f4418"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~d743b6f9"), __webpack_require__.e("student-livetrack-student-livetrack-module")]).then(__webpack_require__.bind(null, /*! ../student-livetrack/student-livetrack.module */ "./src/app/parent-app/student-livetrack/student-livetrack.module.ts")).then(function (m) { return m.StudentLivetrackPageModule; }); }
                    }
                ]
            }, {
                path: 'Alerts',
                loadChildren: function () { return Promise.all(/*! import() | alerts-tab-alerts-tab-module */[__webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~e43080d9"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~63d3927b"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~df599c5c"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~32e20eb3"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~5433863e"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~5551ec55"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~d0083fca"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~ais-dashboard-ais-dashboard~94cf38fc"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~f38f4418"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~d743b6f9"), __webpack_require__.e("alerts-tab-alerts-tab-module")]).then(__webpack_require__.bind(null, /*! ../../alerts-tab/alerts-tab.module */ "./src/app/alerts-tab/alerts-tab.module.ts")).then(function (m) { return m.AlertsTabPageModule; }); }
            },
            {
                path: 'studentoverview',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return Promise.all(/*! import() | student-overview-student-overview-module */[__webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~5551ec55"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~ais-dashboard-ais-dashboard~94cf38fc"), __webpack_require__.e("default~ais-dashboard-ais-dashboard-module~dashboard-dashboard-module~student-overview-student-overv~91b9e191"), __webpack_require__.e("student-overview-student-overview-module")]).then(__webpack_require__.bind(null, /*! ../student-overview/student-overview.module */ "./src/app/parent-app/student-overview/student-overview.module.ts")).then(function (m) { return m.StudentOverviewPageModule; }); }
                    }
                ]
            },
            {
                path: 'about',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | about-about-module */ "about-about-module").then(__webpack_require__.bind(null, /*! ../about/about.module */ "./src/app/parent-app/about/about.module.ts")).then(function (m) {
                            m.AboutPageModule;
                        }); }
                    }
                ]
            },
            {
                path: 'parent-tab',
                redirectTo: '/parent-tab/routmap',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'parent-tab',
        redirectTo: '/parent-tab/routmap',
        pathMatch: 'full'
    }
];
var ParentTabPageRoutingModule = /** @class */ (function () {
    function ParentTabPageRoutingModule() {
    }
    ParentTabPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ParentTabPageRoutingModule);
    return ParentTabPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=parent-app-parent-tab-parent-tab-module-es5.js.map