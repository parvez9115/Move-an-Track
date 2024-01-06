(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["livetrack-livetrack-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/livetrack/livetrack.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/livetrack/livetrack.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar [ngClass]=\"{'appHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button icon=\"arrow-back\" style=\"color:rgb(0, 0, 0)\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"appHeader\">\r\n      {{headerText}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyAwNE2J8f2FWG2grjrxUzCa6GAUPoNbgso\"></script>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-vtslivetrack></app-vtslivetrack>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/livetrack/livetrack.module.ts":
/*!***********************************************!*\
  !*** ./src/app/livetrack/livetrack.module.ts ***!
  \***********************************************/
/*! exports provided: LivetrackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivetrackPageModule", function() { return LivetrackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _livetrack_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./livetrack.page */ "./src/app/livetrack/livetrack.page.ts");








const routes = [
    {
        path: '',
        component: _livetrack_page__WEBPACK_IMPORTED_MODULE_7__["LivetrackPage"]
    }
];
let LivetrackPageModule = class LivetrackPageModule {
};
LivetrackPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
        ],
        declarations: [_livetrack_page__WEBPACK_IMPORTED_MODULE_7__["LivetrackPage"]]
    })
], LivetrackPageModule);



/***/ }),

/***/ "./src/app/livetrack/livetrack.page.scss":
/*!***********************************************!*\
  !*** ./src/app/livetrack/livetrack.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpdmV0cmFjay9saXZldHJhY2sucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/livetrack/livetrack.page.ts":
/*!*********************************************!*\
  !*** ./src/app/livetrack/livetrack.page.ts ***!
  \*********************************************/
/*! exports provided: LivetrackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivetrackPage", function() { return LivetrackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



let LivetrackPage = class LivetrackPage {
    constructor() { }
    ionViewWillEnter() {
        console.log('liveTracck hit');
    }
    ngOnInit() {
        this.headerText = JSON.parse(localStorage.selectedVin).plateNo;
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["app"].appName;
    }
};
LivetrackPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-livetrack',
        template: __webpack_require__(/*! raw-loader!./livetrack.page.html */ "./node_modules/raw-loader/index.js!./src/app/livetrack/livetrack.page.html"),
        styles: [__webpack_require__(/*! ./livetrack.page.scss */ "./src/app/livetrack/livetrack.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LivetrackPage);



/***/ })

}]);
//# sourceMappingURL=livetrack-livetrack-module-es2015.js.map