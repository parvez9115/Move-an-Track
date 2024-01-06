(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["skt-enable-school-enable-school-enable-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/enable/school-enable/school-enable.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/enable/school-enable/school-enable.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--------*********************WebView*************************------------------->\r\n<ion-header *ngIf=\"myPlatform == 'desktop'\">\r\n  <ion-toolbar>\r\n    <div class=\"class-wrapper\">\r\n      <ion-row class=\"header-section\">\r\n        <ion-col size=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"0\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-col>\r\n        <ion-col size=\"10\" size-sm=\"10\" size-md=\"10\" size-lg=\"12\" id=\"btn-wrapper\">\r\n          School Enable/Disable Date\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button color='primary' class=\"class-btn\" (click)='add()'>Add</ion-button>\r\n          <ion-button color='primary' class=\"class-btn\" (click)='editMode()'>Edit</ion-button>\r\n          <ion-button color='primary' class=\"class-btn\" (click)='deleteMode() '>Delete</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div id=\"export-wrapper\">\r\n      <!-- <ion-img src=\"assets/student_Details/print.svg\" class=\"toolbar-row\" (click)=\"btnOnClick()\"></ion-img> -->\r\n      <ion-img src=\"assets/student_Details/pdf.svg\" class=\"toolbar-row\" (click)=\"createPdf()\"></ion-img>\r\n      <ion-img src=\"assets/student_Details/excel.svg\" class=\"toolbar-row\" (click)=\"exportToExcel()\"> </ion-img>\r\n      <!-- <ion-img src=\"assets/student_Details/refresher.svg\" class=\"toolbar-row\"></ion-img> -->\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"grid_Container\" *ngIf=\"myPlatform == 'desktop'\">\r\n    <jqxGrid (onRowselect)=\"myGridOnRowSelect($event)\" [pageable]=\"true\" [selectionmode]=\"'singlerow'\"\r\n      [showfilterrow]=\"true\" [filterable]=\"true\" [sortable]=\"true\" [width]=\"'100%'\" [source]=\"dataAdapter\"\r\n      [columns]=\"columns\" [autoheight]=\"true\" [theme]=\"'material'\" #myGrid\r\n      style=\"font-size:16px;text-align: center !important;\">\r\n    </jqxGrid>\r\n  </div>\r\n  <!--------*********************WebViewEnd*************************------------------->\r\n\r\n\r\n  <!--------*********************MobileView*************************------------------->\r\n  <ion-header *ngIf=\"myPlatform != 'desktop'\">\r\n    <ion-toolbar color=\"primary\" style=\"color: white;\">\r\n      <div>\r\n        <ion-row>\r\n          <ion-col size=\"2\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-col>\r\n          <ion-col size=\"8\" class=\"header\">\r\n            <ion-title>school Enable</ion-title>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n\r\n  <div *ngIf=\"myPlatform != 'desktop'\">\r\n    <ion-row>\r\n      <ion-col size=12 style=\"padding: 0px;\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\" *ngFor=\"let data of details\">\r\n            <ion-card id=\"enable-disable-card\" (click)='editMode(data)'>\r\n              <ion-row>\r\n                <ion-col size=2 style=\"text-align: center;\">\r\n                  <ion-icon name=\"business\" id=\"icon-style\"></ion-icon>\r\n                </ion-col>\r\n                <ion-col size=10>\r\n                  <ion-row>\r\n                    <ion-col id=\"reason-type\">\r\n                      {{data.reason}}\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col class=\"status-detail\">\r\n                      Status : {{data.type}}\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col size=6 class=\"date-col\">\r\n                      <ion-row>\r\n                        <ion-col size=12 class=\"date-header\">\r\n                          From : {{data.fromDate}}\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                    <ion-col size=6 class=\"date-col\">\r\n                      <ion-row>\r\n                        <ion-col size=12 class=\"date-header\">\r\n                          To : {{data.toDate}}\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-fab (click)=\"add()\">\r\n          <ion-fab-button style=\"position: fixed;bottom: 43px;right: 15px;\">\r\n            <ion-icon name=\"add\" class=\"add-icon\"></ion-icon>\r\n          </ion-fab-button>\r\n        </ion-fab>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <!--------*********************MobileViewEnd*************************------------------->\r\n</ion-content>"

/***/ }),

/***/ "./src/app/skt/enable/school-enable/school-enable.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/skt/enable/school-enable/school-enable.module.ts ***!
  \******************************************************************/
/*! exports provided: SchoolEnablePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolEnablePageModule", function() { return SchoolEnablePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _school_enable_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./school-enable.page */ "./src/app/skt/enable/school-enable/school-enable.page.ts");
/* harmony import */ var _sktcomponents_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sktcomponents.module */ "./src/app/skt/sktcomponents.module.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");









var routes = [
    {
        path: '',
        component: _school_enable_page__WEBPACK_IMPORTED_MODULE_6__["SchoolEnablePage"]
    }
];
var SchoolEnablePageModule = /** @class */ (function () {
    function SchoolEnablePageModule() {
    }
    SchoolEnablePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _sktcomponents_module__WEBPACK_IMPORTED_MODULE_7__["SktComponentsModule"],
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__["SharedModModule"]
            ],
            declarations: [_school_enable_page__WEBPACK_IMPORTED_MODULE_6__["SchoolEnablePage"]]
        })
    ], SchoolEnablePageModule);
    return SchoolEnablePageModule;
}());



/***/ }),

/***/ "./src/app/skt/enable/school-enable/school-enable.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/skt/enable/school-enable/school-enable.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".class-wrapper, .grid_Container {\n  border: 1px solid #c7c3c3;\n  margin: 5px 10px 0;\n}\n\n.grid_Container {\n  margin: 0px 10px 0px;\n}\n\n.header-section {\n  background-color: #e8e8e8;\n  border: 1px solid #cac2c2;\n}\n\n#export-wrapper {\n  text-align: right;\n  background-color: #e8e8e8;\n  height: 42px;\n  border-top: 1px solid gainsboro;\n  margin: 0px 10px 0px;\n  border-left: 2px solid #c7c7c7;\n}\n\n#btn-wrapper {\n  text-align: center;\n  height: 40px;\n  padding: 0;\n  font-size: 20px;\n  border-bottom: 1px solid #cac2c2;\n  font-weight: 700;\n}\n\n.toolbar-row {\n  height: 40px;\n  width: 40px;\n  display: inline-block;\n  margin: 0px;\n  border: 1px solid #b9b7b7;\n  padding: 5px;\n}\n\n.toolbar-row:hover {\n  background-color: whitesmoke;\n}\n\n.class-btn {\n  width: 80px;\n  height: 30px;\n  margin: 5px 10px;\n  font-size: 12px;\n}\n\n.mytable:hover {\n  background-color: blue;\n}\n\n#enable-disable-card {\n  width: 95%;\n  height: 90%;\n  border-left: 3px solid #3880ff;\n}\n\n#icon-style {\n  font-size: xx-large;\n  margin-top: 15px;\n}\n\n#reason-type {\n  padding: 0px;\n  margin: 0px;\n  font-size: 20px;\n  font-weight: bold;\n  font-variant-caps: all-petite-caps;\n  color: #3880ff;\n}\n\n.status-detail {\n  padding: 0px;\n  line-height: 20px;\n  font-size: 15px;\n  font-variant: all-petite-caps;\n}\n\n.date-header {\n  padding: 0px;\n  font-size: 11px;\n}\n\n.date {\n  font-size: 10px;\n  margin: 0;\n  padding: 0;\n  line-height: 15px;\n}\n\n.date-col {\n  font-family: sans-serif;\n  padding: 0px;\n}\n\n.header {\n  text-transform: capitalize;\n  text-align: center;\n  padding: 7px 0px 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t0L2VuYWJsZS9zY2hvb2wtZW5hYmxlL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcc2t0XFxlbmFibGVcXHNjaG9vbC1lbmFibGVcXHNjaG9vbC1lbmFibGUucGFnZS5zY3NzIiwic3JjL2FwcC9za3QvZW5hYmxlL3NjaG9vbC1lbmFibGUvc2Nob29sLWVuYWJsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0M7RUFDRyxvQkFBQTtBQ0VKOztBREFDO0VBQ0MseUJBQUE7RUFDQSx5QkFBQTtBQ0dGOztBRERDO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7QUNJSDs7QURGQztFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQ0tIOztBREhDO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNNSDs7QURKQTtFQUNJLDRCQUFBO0FDT0o7O0FETEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1FKOztBRE5DO0VBQ0Usc0JBQUE7QUNTSDs7QURQQztFQUVFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUNTSDs7QURQQztFQUVFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNTSDs7QURQQztFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0FDU0g7O0FEUEM7RUFFRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNTSDs7QURQQztFQUVFLFlBQUE7RUFDQSxlQUFBO0FDU0g7O0FEUEM7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ1VIOztBRFJDO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FDV0g7O0FEVEM7RUFDQywwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUNZRiIsImZpbGUiOiJzcmMvYXBwL3NrdC9lbmFibGUvc2Nob29sLWVuYWJsZS9zY2hvb2wtZW5hYmxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGFzcy13cmFwcGVyLC5ncmlkX0NvbnRhaW5lcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTksIDE5NSwgMTk1KTtcclxuICAgIG1hcmdpbjogNXB4IDEwcHggMDtcclxuIH1cclxuIC5ncmlkX0NvbnRhaW5lcntcclxuICAgIG1hcmdpbjogMHB4IDEwcHggMHB4OyAgXHJcbiB9XHJcbiAuaGVhZGVyLXNlY3Rpb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjMmMyO1xyXG59XHJcbiAjZXhwb3J0LXdyYXBwZXJ7XHJcbiAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xyXG4gICBoZWlnaHQ6IDQycHg7XHJcbiAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBnYWluc2Jvcm87XHJcbiAgIG1hcmdpbjogMHB4IDEwcHggMHB4O1xyXG4gICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNjN2M3Yzc7XHJcbiB9XHJcbiAjYnRuLXdyYXBwZXJ7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgaGVpZ2h0OiA0MHB4O1xyXG4gICBwYWRkaW5nOiAwO1xyXG4gICBmb250LXNpemU6IDIwcHg7XHJcbiAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNjYWMyYzI7XHJcbiAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiB9XHJcbiAudG9vbGJhci1yb3d7XHJcbiAgIGhlaWdodDogNDBweDtcclxuICAgd2lkdGg6IDQwcHg7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgbWFyZ2luOjBweDtcclxuICAgYm9yZGVyOiAxcHggc29saWQgI2I5YjdiNztcclxuICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi50b29sYmFyLXJvdzpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuLmNsYXNzLWJ0bntcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiA1cHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuIH1cclxuIC5teXRhYmxlOmhvdmVyIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuIH1cclxuICNlbmFibGUtZGlzYWJsZS1jYXJkXHJcbiB7XHJcbiAgIHdpZHRoICAgICAgICA6IDk1JTtcclxuICAgaGVpZ2h0ICAgICAgIDogOTAlO1xyXG4gICBib3JkZXItbGVmdCAgOiAzcHggc29saWQgIzM4ODBmZjtcclxuIH1cclxuICNpY29uLXN0eWxlXHJcbiB7XHJcbiAgIGZvbnQtc2l6ZSAgICA6IHh4LWxhcmdlO1xyXG4gICBtYXJnaW4tdG9wICAgOiAxNXB4O1xyXG4gfVxyXG4gI3JlYXNvbi10eXBlXHJcbiB7XHJcbiAgIHBhZGRpbmcgICAgICA6IDBweDtcclxuICAgbWFyZ2luICAgICAgIDogMHB4O1xyXG4gICBmb250LXNpemUgICAgOiAyMHB4O1xyXG4gICBmb250LXdlaWdodCAgOiBib2xkO1xyXG4gICBmb250LXZhcmlhbnQtY2FwczogYWxsLXBldGl0ZS1jYXBzO1xyXG4gICBjb2xvciAgICAgICAgOiAjMzg4MGZmO1xyXG4gfVxyXG4gLnN0YXR1cy1kZXRhaWxcclxuIHtcclxuICAgcGFkZGluZyAgICAgIDogMHB4O1xyXG4gICBsaW5lLWhlaWdodCAgOiAyMHB4O1xyXG4gICBmb250LXNpemUgICAgOiAxNXB4O1xyXG4gICBmb250LXZhcmlhbnQgOiBhbGwtcGV0aXRlLWNhcHM7XHJcbiB9XHJcbiAuZGF0ZS1oZWFkZXJcclxuIHtcclxuICAgcGFkZGluZyAgICAgIDogMHB4O1xyXG4gICBmb250LXNpemUgICAgOiAxMXB4O1xyXG4gfVxyXG4gLmRhdGUge1xyXG4gICBmb250LXNpemUgICAgOiAxMHB4O1xyXG4gICBtYXJnaW4gICAgICAgOiAwO1xyXG4gICBwYWRkaW5nICAgICAgOiAwO1xyXG4gICBsaW5lLWhlaWdodCAgOiAxNXB4O1xyXG4gfVxyXG4gLmRhdGUtY29sIHtcclxuICAgZm9udC1mYW1pbHkgIDogc2Fucy1zZXJpZjtcclxuICAgcGFkZGluZyAgICAgIDogMHB4O1xyXG4gfVxyXG4gLmhlYWRlcntcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogN3B4IDBweCAwcHggMHB4O1xyXG4gfSIsIi5jbGFzcy13cmFwcGVyLCAuZ3JpZF9Db250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzdjM2MzO1xuICBtYXJnaW46IDVweCAxMHB4IDA7XG59XG5cbi5ncmlkX0NvbnRhaW5lciB7XG4gIG1hcmdpbjogMHB4IDEwcHggMHB4O1xufVxuXG4uaGVhZGVyLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjMmMyO1xufVxuXG4jZXhwb3J0LXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgaGVpZ2h0OiA0MnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgZ2FpbnNib3JvO1xuICBtYXJnaW46IDBweCAxMHB4IDBweDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjYzdjN2M3O1xufVxuXG4jYnRuLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NhYzJjMjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnRvb2xiYXItcm93IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I5YjdiNztcbiAgcGFkZGluZzogNXB4O1xufVxuXG4udG9vbGJhci1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uY2xhc3MtYnRuIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiA1cHggMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubXl0YWJsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbiNlbmFibGUtZGlzYWJsZS1jYXJkIHtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA5MCU7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzM4ODBmZjtcbn1cblxuI2ljb24tc3R5bGUge1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4jcmVhc29uLXR5cGUge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXZhcmlhbnQtY2FwczogYWxsLXBldGl0ZS1jYXBzO1xuICBjb2xvcjogIzM4ODBmZjtcbn1cblxuLnN0YXR1cy1kZXRhaWwge1xuICBwYWRkaW5nOiAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtdmFyaWFudDogYWxsLXBldGl0ZS1jYXBzO1xufVxuXG4uZGF0ZS1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmRhdGUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG59XG5cbi5kYXRlLWNvbCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5oZWFkZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA3cHggMHB4IDBweCAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/skt/enable/school-enable/school-enable.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/skt/enable/school-enable/school-enable.page.ts ***!
  \****************************************************************/
/*! exports provided: SchoolEnablePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolEnablePage", function() { return SchoolEnablePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var _enable_additional_enable_additional_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enable-additional/enable-additional.component */ "./src/app/skt/enable/enable-additional/enable-additional.component.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");










var SchoolEnablePage = /** @class */ (function () {
    function SchoolEnablePage(modalController, ete, platform, commonService, ajaxService, alertController) {
        this.modalController = modalController;
        this.ete = ete;
        this.platform = platform;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.alertController = alertController;
        this.head = ["From Date", "To Date", "Type", "Reason"];
        this.pdfdatas = [];
        this.exportTitle = "School E&D report";
    }
    SchoolEnablePage.prototype.btnOnClick = function () {
        var gridContent = this.myGrid.exportdata("html");
        var newWindow = window.open("", "", "width=800, height=500"), document = newWindow.document.open(), pageContent = "<!DOCTYPE html>\n" +
            "<html>\n" +
            "<head>\n" +
            '<meta charset="utf-8" />\n' +
            "<title>Parent Details</title>\n" +
            "</head>\n" +
            "<body>\n" +
            gridContent +
            "\n</body>\n</html>";
        document.write(pageContent);
        document.close();
        newWindow.print();
    };
    SchoolEnablePage.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = event.args.row;
    };
    SchoolEnablePage.prototype.add = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _enable_additional_enable_additional_component__WEBPACK_IMPORTED_MODULE_4__["EnableAdditionalComponent"],
                            cssClass: "school-enable",
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            _this.getData();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SchoolEnablePage.prototype.editMode = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.myPlatform != "desktop")) return [3 /*break*/, 4];
                        data["submit"] = "available";
                        if (!data) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.modalController.create({
                                component: _enable_additional_enable_additional_component__WEBPACK_IMPORTED_MODULE_4__["EnableAdditionalComponent"],
                                cssClass: "school-enable",
                                componentProps: {
                                    value: data,
                                },
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            data = "";
                            _this.getData();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [3 /*break*/, 8];
                    case 4:
                        if (!this.selectedRow) return [3 /*break*/, 7];
                        this.selectedRow["submit"] = "available";
                        return [4 /*yield*/, this.modalController.create({
                                component: _enable_additional_enable_additional_component__WEBPACK_IMPORTED_MODULE_4__["EnableAdditionalComponent"],
                                cssClass: "school-enable",
                                componentProps: {
                                    value: this.selectedRow,
                                },
                            })];
                    case 5:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            _this.getData();
                            _this.myGrid.clearselection();
                            _this.selectedRow = "";
                        });
                        return [4 /*yield*/, modal.present()];
                    case 6: return [2 /*return*/, _a.sent()];
                    case 7:
                        this.commonService.presentToast("Please select a row to edit");
                        return [2 /*return*/, ""];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    SchoolEnablePage.prototype.deleteMode = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.selectedRow) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: "Delete ",
                                backdropDismiss: false,
                                message: "Are you sure you want to delete?",
                                buttons: [
                                    {
                                        text: "Cancel",
                                        role: "cancel",
                                        handler: function (data) { },
                                    },
                                    {
                                        text: "Ok",
                                        handler: function (data) {
                                            var details = {
                                                companyId: localStorage.getItem("corpId"),
                                                branchId: localStorage.getItem("corpId"),
                                            };
                                            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
                                                "/schoolEnableDisable/deleteschooldisabledate?id=" +
                                                _this.selectedRow.id;
                                            _this.ajaxService
                                                .ajaxDeleteWithBody(url, details)
                                                .subscribe(function (res) {
                                                if (res.statusText == "OK") {
                                                    _this.commonService.presentToast("Deleted successfully");
                                                    _this.myGrid.clearselection();
                                                    _this.getData();
                                                    _this.selectedRow = "";
                                                }
                                                else {
                                                    _this.commonService.presentToast("Try again");
                                                }
                                            });
                                        },
                                    },
                                ],
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.commonService.presentToast("Please select a row to delete");
                        return [2 /*return*/, ""];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SchoolEnablePage.prototype.createPdf = function () {
        this.commonService.createPdf(this.head, this.pdfdatas, this.exportTitle, this.myPlatform, "School E&D report");
    };
    SchoolEnablePage.prototype.exportToExcel = function () {
        var reportData = {
            title: "School E&D report",
            data: this.pdfdatas,
            headers: this.head,
        };
        this.ete.exportExcel(reportData);
    };
    SchoolEnablePage.prototype.getData = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/schoolEnableDisable/getschooldisabledate";
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.details = res;
            var detail = res;
            _this.pdfdatas = [];
            for (var i = 0; i < detail.length; i++) {
                _this.pdfdatas.push([
                    detail[i].fromDate,
                    detail[i].toDate,
                    detail[i].type,
                    detail[i].reason,
                ]);
            }
            _this.source = { localdata: _this.details, datatype: "array" };
            _this.renderer = function (row, column, value) {
                if (value == "" || null || undefined) {
                    return "----";
                }
                else {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto"  >' +
                        value +
                        "</span>");
                }
            };
            _this.dataAdapter = new jqx.dataAdapter(_this.source);
            _this.columns = [
                // { text: 'Id', datafield: 'id', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center' },
                {
                    text: "From Date",
                    datafield: "fromDate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 240,
                },
                {
                    text: "To Date",
                    datafield: "toDate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 240,
                },
                {
                    text: "Type",
                    datafield: "type",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 280,
                },
                {
                    text: "Reason",
                    datafield: "reason",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 360,
                },
            ];
        });
    };
    SchoolEnablePage.prototype.ngAfterViewInit = function () {
        this.getData();
        if (this.myPlatform == "desktop") {
            this.myPlatform = "desktop";
            this.myGrid.updatebounddata();
        }
    };
    SchoolEnablePage.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.companyDetail = {
            branchID: localStorage.getItem("corpId"),
            companyID: localStorage.getItem("corpId"),
            userId: localStorage.getItem("userName"),
        };
        this.getData();
    };
    SchoolEnablePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExportExcelService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_7__["AjaxService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
    ], SchoolEnablePage.prototype, "myGrid", void 0);
    SchoolEnablePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-school-enable",
            template: __webpack_require__(/*! raw-loader!./school-enable.page.html */ "./node_modules/raw-loader/index.js!./src/app/skt/enable/school-enable/school-enable.page.html"),
            styles: [__webpack_require__(/*! ./school-enable.page.scss */ "./src/app/skt/enable/school-enable/school-enable.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExportExcelService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_7__["AjaxService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], SchoolEnablePage);
    return SchoolEnablePage;
}());



/***/ })

}]);
//# sourceMappingURL=skt-enable-school-enable-school-enable-module-es5.js.map