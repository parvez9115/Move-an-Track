(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entry-entry-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/entry/entry.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/entry/entry.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>entry</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<app-vts></app-vts>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/entry/entry.module.ts":
/*!***************************************!*\
  !*** ./src/app/entry/entry.module.ts ***!
  \***************************************/
/*! exports provided: EntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryPageModule", function() { return EntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entry.page */ "./src/app/entry/entry.page.ts");







var routes = [
    {
        path: '',
        component: _entry_page__WEBPACK_IMPORTED_MODULE_6__["EntryPage"]
    }
];
var EntryPageModule = /** @class */ (function () {
    function EntryPageModule() {
    }
    EntryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_entry_page__WEBPACK_IMPORTED_MODULE_6__["EntryPage"]]
        })
    ], EntryPageModule);
    return EntryPageModule;
}());



/***/ }),

/***/ "./src/app/entry/entry.page.scss":
/*!***************************************!*\
  !*** ./src/app/entry/entry.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudHJ5L2VudHJ5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/entry/entry.page.ts":
/*!*************************************!*\
  !*** ./src/app/entry/entry.page.ts ***!
  \*************************************/
/*! exports provided: EntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryPage", function() { return EntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EntryPage = /** @class */ (function () {
    function EntryPage() {
    }
    EntryPage.prototype.ngOnInit = function () {
    };
    EntryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entry',
            template: __webpack_require__(/*! raw-loader!./entry.page.html */ "./node_modules/raw-loader/index.js!./src/app/entry/entry.page.html"),
            styles: [__webpack_require__(/*! ./entry.page.scss */ "./src/app/entry/entry.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EntryPage);
    return EntryPage;
}());



/***/ })

}]);
//# sourceMappingURL=entry-entry-module-es5.js.map