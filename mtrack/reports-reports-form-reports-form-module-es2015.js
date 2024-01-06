(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-form-reports-form-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/reports/reports-form/reports-form.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reports/reports-form/reports-form.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <app-vts-report-form [shownContent]=\"shownContent\" [reportName]=\"reportName\" [plateNo]=\"plateNo\" ></app-vts-report-form>\r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/reports/reports-form/reports-form.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/reports/reports-form/reports-form.module.ts ***!
  \*************************************************************/
/*! exports provided: ReportsFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsFormPageModule", function() { return ReportsFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reports_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports-form.page */ "./src/app/reports/reports-form/reports-form.page.ts");







const routes = [
    {
        path: '',
        component: _reports_form_page__WEBPACK_IMPORTED_MODULE_6__["ReportsFormPage"]
    }
];
let ReportsFormPageModule = class ReportsFormPageModule {
};
ReportsFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        declarations: []
    })
], ReportsFormPageModule);



/***/ }),

/***/ "./src/app/reports/reports-form/reports-form.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/reports/reports-form/reports-form.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reportInfo {\n  color: #c1c1d2;\n  font-size: 14px;\n}\n\n.reportContent {\n  color: #3d3333;\n  font-weight: bold;\n  border-bottom: 1px solid #c1c1d2;\n}\n\n.maxWidth {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy9yZXBvcnRzLWZvcm0vRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxyZXBvcnRzXFxyZXBvcnRzLWZvcm1cXHJlcG9ydHMtZm9ybS5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy1mb3JtL3JlcG9ydHMtZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy1mb3JtL3JlcG9ydHMtZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwb3J0SW5mbyB7XHJcbiAgY29sb3I6ICNjMWMxZDI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5yZXBvcnRDb250ZW50IHtcclxuICBjb2xvcjogIzNkMzMzMztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MxYzFkMjtcclxufVxyXG4ubWF4V2lkdGh7XHJcbiAgd2lkdGg6MTAwJVxyXG59XHJcbiIsIi5yZXBvcnRJbmZvIHtcbiAgY29sb3I6ICNjMWMxZDI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJlcG9ydENvbnRlbnQge1xuICBjb2xvcjogIzNkMzMzMztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzFjMWQyO1xufVxuXG4ubWF4V2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/reports/reports-form/reports-form.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/reports/reports-form/reports-form.page.ts ***!
  \***********************************************************/
/*! exports provided: ReportsFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsFormPage", function() { return ReportsFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


//import { serverUrl } from 'src/environments/environment';
let ReportsFormPage = 
// const customPopoverOptions = {
//   header: 'Select Device',
//   message: 'Only select Device'
// };
class ReportsFormPage {
    constructor() {
    }
    ngOnInit() {
    }
};
ReportsFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reports-form',
        template: __webpack_require__(/*! raw-loader!./reports-form.page.html */ "./node_modules/raw-loader/index.js!./src/app/reports/reports-form/reports-form.page.html"),
        styles: [__webpack_require__(/*! ./reports-form.page.scss */ "./src/app/reports/reports-form/reports-form.page.scss")]
    })
    // const customPopoverOptions = {
    //   header: 'Select Device',
    //   message: 'Only select Device'
    // };
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ReportsFormPage);



/***/ })

}]);
//# sourceMappingURL=reports-reports-form-reports-form-module-es2015.js.map