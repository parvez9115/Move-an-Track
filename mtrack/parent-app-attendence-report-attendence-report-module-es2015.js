(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parent-app-attendence-report-attendence-report-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/parent-app/attendence-report/attendence-report.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/parent-app/attendence-report/attendence-report.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class='header'>\r\n  <ion-toolbar class=\"parentAppcolor\">\r\n    <ion-row style=\"align-items: center;\">\r\n      <ion-icon (click)=\"locationBack()\" class=\"icon-size\" name=\"arrow-back\"></ion-icon>\r\n      <ion-label> Attendence Report </ion-label>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-row style=\"margin-top: 8px;\">\r\n    <ion-col size=\"7.8\" style=\"margin: auto;\">\r\n      <ion-input type=\"month\" class=\"date-input\" [(ngModel)]=\"currentDate\"></ion-input>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <form [formGroup]='dateForm'>\r\n    <ion-row>\r\n      <ion-col style=\"text-align: center;margin: 0;\r\n      padding: 0;\">\r\n        <ion-button (click)=\"submit()\" style=\"padding: 0px 10px;\"class=\"parentAppcolor\" shape=\"round\" size=\"small\">SUBMIT</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row style=\"margin-top: 10px;display:none\">\r\n      <ion-col size=\"6\">\r\n        <label class=\"top-label parentAppBackcolor\">Present From</label>\r\n        <ion-input class=\"date-input\" name='presentFrom' formControlName='presentFrom'></ion-input>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <label class=\"top-label parentAppBackcolor\">Absent From</label>\r\n        <ion-input class=\"date-input\" name='dateFrom' formControlName='dateFrom'></ion-input>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <label class=\"top-label parentAppBackcolor\">Holiday From</label>\r\n        <ion-input class=\"date-input\" name='holidayFrom' formControlName='holidayFrom'></ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n </form>\r\n\r\n  <div class='flex-container flex-center'>\r\n    <div id='calendar-container' class='flex-container flex-column'>\r\n      <div style=\"height: 10px;\"></div>\r\n      <div class=' flex-container flex-center-horz '>\r\n        <div class='fa fa-chevron-left ' (click)='previousMonth()'></div>\r\n         <div class='width-5'></div>\r\n          <div *ngIf=\"!next\"> {{currentDate | date:'longDate'}}</div>\r\n           <div *ngIf=\"next\">{{date.format('YYYY ')}}{{date.format('MMMM ')}} </div>\r\n          <div class='width-5'></div>\r\n        <div class='fa fa-chevron-right ' (click)='nextMonth()'></div>\r\n      </div>\r\n      <div class='height-20px '></div>\r\n      <div class='flex-container '>\r\n        <div class='calendar-day flex-container flex-center ' *ngFor=\"let items of days\">{{items}}</div>\r\n      </div>\r\n      <div class='flex-container flex-wrap '>\r\n        <div *ngFor=\"let day of daysArr\">\r\n          <div class='calendar-days flex-container flex-center '\r\n            [ngClass]=\"{'inactive ': !day,  'present':isPresent(day),'absent': isAbsent(day) ,'holiday':isHoliday(day)}\">\r\n            {{day?.date()}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/parent-app/attendence-report/attendence-report.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/parent-app/attendence-report/attendence-report.module.ts ***!
  \**************************************************************************/
/*! exports provided: AttendenceReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendenceReportPageModule", function() { return AttendenceReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _attendence_report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attendence-report.page */ "./src/app/parent-app/attendence-report/attendence-report.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");








const routes = [
    {
        path: '',
        component: _attendence_report_page__WEBPACK_IMPORTED_MODULE_6__["AttendenceReportPage"]
    }
];
let AttendenceReportPageModule = class AttendenceReportPageModule {
};
AttendenceReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"]
        ],
        declarations: [_attendence_report_page__WEBPACK_IMPORTED_MODULE_6__["AttendenceReportPage"]]
    })
], AttendenceReportPageModule);



/***/ }),

/***/ "./src/app/parent-app/attendence-report/attendence-report.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/parent-app/attendence-report/attendence-report.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-size {\n  font-size: 18px;\n  padding: 9px;\n}\n\n.date-input {\n  border: 1px solid #f6f6f6;\n  background: #f6f6f6;\n  --padding-top: 2px;\n  --padding-bottom: 2px;\n}\n\na.active {\n  background-color: gray;\n}\n\n#calendar-container {\n  width: 271px;\n}\n\n.calendar-days, .calendar-day {\n  width: 38px;\n  height: 38px;\n  background: #e1fbe1;\n  border: 1px solid #b3b3b3;\n}\n\n.calendar-day {\n  background: gray;\n  color: white;\n  font-size: 14px;\n}\n\n.inactive {\n  opacity: 0.5;\n  background: #cacaca;\n}\n\n.present {\n  background: #1aba7e;\n}\n\n.absent {\n  background: red;\n}\n\n.holiday {\n  background: white;\n}\n\n.top-label {\n  font-size: 12px;\n  padding-left: 10px;\n}\n\n.fill-height-or-more {\n  min-height: 100%;\n}\n\n.flex-footer-pos {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n}\n\n.flex-container {\n  display: -webkit-box;\n  display: flex;\n  font-size: 14px;\n}\n\n.flex-1 {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.flex-left {\n  -webkit-align-self: flex-start;\n  align-self: flex-start;\n}\n\n.flex-column {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.flex-center {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.flex-center-horz {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.flex-center-vert {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.flex-left-row {\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n\n.flex-right-row {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.flex-right-column {\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n\n.flex-left-column {\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.flex-space-between-row {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-justify-content: space-between;\n}\n\n.flex-space-between-column {\n  -webkit-box-align: space-between;\n          align-items: space-between;\n  -webkit-align-itemst: space-between;\n}\n\n.height-20px {\n  height: 20px;\n}\n\n.width-5 {\n  width: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFyZW50LWFwcC9hdHRlbmRlbmNlLXJlcG9ydC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXHBhcmVudC1hcHBcXGF0dGVuZGVuY2UtcmVwb3J0XFxhdHRlbmRlbmNlLXJlcG9ydC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhcmVudC1hcHAvYXR0ZW5kZW5jZS1yZXBvcnQvYXR0ZW5kZW5jZS1yZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNBSjs7QURJQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDREY7O0FETUE7RUFDSSxzQkFBQTtBQ0hKOztBRE1BO0VBQ0ksWUFBQTtBQ0hKOztBRE1BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDSEo7O0FES0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRkY7O0FES0E7RUFDQyxZQUFBO0VBQ0EsbUJBQUE7QUNGRDs7QURJQTtFQUNFLG1CQUFBO0FDREY7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxnQkFBQTtBQ0dGOztBREFBO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0FDR0Y7O0FEQUE7RUFFRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEQUE7RUFDRSxtQkFBQTtVQUFBLE9BQUE7QUNHRjs7QURBQTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7QUNHRjs7QURBQTtFQUVFLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0dGOztBREFBO0VBRUUseUJBQUE7VUFBQSxtQkFBQTtFQUVBLHdCQUFBO1VBQUEsdUJBQUE7QUNHRjs7QURBQTtFQUVFLHdCQUFBO1VBQUEsdUJBQUE7QUNHRjs7QURBQTtFQUVFLHlCQUFBO1VBQUEsbUJBQUE7QUNHRjs7QURBQTtFQUVFLHVCQUFBO1VBQUEsMkJBQUE7QUNHRjs7QURBQTtFQUVFLHFCQUFBO1VBQUEseUJBQUE7QUNHRjs7QURBQTtFQUVFLHNCQUFBO1VBQUEscUJBQUE7QUNHRjs7QURBQTtFQUVFLHdCQUFBO1VBQUEsdUJBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7QUNHRjs7QURBQTtFQUNFLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxzQ0FBQTtBQ0dGOztBREFBO0VBQ0UsZ0NBQUE7VUFBQSwwQkFBQTtFQUNBLG1DQUFBO0FDR0Y7O0FEREE7RUFDRSxZQUFBO0FDSUY7O0FERkE7RUFDRSxTQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9wYXJlbnQtYXBwL2F0dGVuZGVuY2UtcmVwb3J0L2F0dGVuZGVuY2UtcmVwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaWNvbi1zaXplIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmc6IDlweDtcclxufVxyXG5cclxuXHJcbi5kYXRlLWlucHV0e1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICAtLXBhZGRpbmctdG9wOiAycHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG5cclxuXHJcbmEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbiNjYWxlbmRhci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDI3MXB4O1xyXG59XHJcblxyXG4uY2FsZW5kYXItZGF5cywuY2FsZW5kYXItZGF5IHtcclxuICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2UxZmJlMTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2IzYjM7XHJcbn1cclxuLmNhbGVuZGFyLWRheXtcclxuICBiYWNrZ3JvdW5kOmdyYXk7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uaW5hY3RpdmUge1xyXG4gb3BhY2l0eTogMC41O1xyXG4gYmFja2dyb3VuZDogI2NhY2FjYTtcclxufVxyXG4ucHJlc2VudHtcclxuICBiYWNrZ3JvdW5kOiAjMWFiYTdlO1xyXG59XHJcbi5hYnNlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOnJlZDtcclxufVxyXG4uaG9saWRheXtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4udG9wLWxhYmVse1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmZpbGwtaGVpZ2h0LW9yLW1vcmUge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5mbGV4LWZvb3Rlci1wb3Mge1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmZsZXgtMSB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmZsZXgtbGVmdCB7XHJcbiAgLXdlYmtpdC1hbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5mbGV4LWNvbHVtbiB7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5mbGV4LWNlbnRlciB7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtY2VudGVyLWhvcnoge1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4LWNlbnRlci12ZXJ0IHtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtbGVmdC1yb3cge1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmZsZXgtcmlnaHQtcm93IHtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmZsZXgtcmlnaHQtY29sdW1uIHtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5mbGV4LWxlZnQtY29sdW1uIHtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uZmxleC13cmFwIHtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5mbGV4LXNwYWNlLWJldHdlZW4tcm93IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5mbGV4LXNwYWNlLWJldHdlZW4tY29sdW1uIHtcclxuICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zdDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uaGVpZ2h0LTIwcHgge1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG4ud2lkdGgtNXtcclxuICB3aWR0aDogNSU7XHJcbn1cclxuXHJcbiIsIi5pY29uLXNpemUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDlweDtcbn1cblxuLmRhdGUtaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjZmNmY2O1xuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICAtLXBhZGRpbmctdG9wOiAycHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDJweDtcbn1cblxuYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuXG4jY2FsZW5kYXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDI3MXB4O1xufVxuXG4uY2FsZW5kYXItZGF5cywgLmNhbGVuZGFyLWRheSB7XG4gIHdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGJhY2tncm91bmQ6ICNlMWZiZTE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2IzYjM7XG59XG5cbi5jYWxlbmRhci1kYXkge1xuICBiYWNrZ3JvdW5kOiBncmF5O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmluYWN0aXZlIHtcbiAgb3BhY2l0eTogMC41O1xuICBiYWNrZ3JvdW5kOiAjY2FjYWNhO1xufVxuXG4ucHJlc2VudCB7XG4gIGJhY2tncm91bmQ6ICMxYWJhN2U7XG59XG5cbi5hYnNlbnQge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5ob2xpZGF5IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi50b3AtbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmZpbGwtaGVpZ2h0LW9yLW1vcmUge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uZmxleC1mb290ZXItcG9zIHtcbiAgZmxleDogMSAwIGF1dG87XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZmxleC0xIHtcbiAgZmxleDogMTtcbn1cblxuLmZsZXgtbGVmdCB7XG4gIC13ZWJraXQtYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cblxuLmZsZXgtY29sdW1uIHtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZmxleC1jZW50ZXIge1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZmxleC1jZW50ZXItaG9yeiB7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZmxleC1jZW50ZXItdmVydCB7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZsZXgtbGVmdC1yb3cge1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uZmxleC1yaWdodC1yb3cge1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5mbGV4LXJpZ2h0LWNvbHVtbiB7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5mbGV4LWxlZnQtY29sdW1uIHtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5mbGV4LXdyYXAge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5mbGV4LXNwYWNlLWJldHdlZW4tcm93IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmZsZXgtc3BhY2UtYmV0d2Vlbi1jb2x1bW4ge1xuICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtc3Q6IHNwYWNlLWJldHdlZW47XG59XG5cbi5oZWlnaHQtMjBweCB7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLndpZHRoLTUge1xuICB3aWR0aDogNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/parent-app/attendence-report/attendence-report.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/parent-app/attendence-report/attendence-report.page.ts ***!
  \************************************************************************/
/*! exports provided: AttendenceReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendenceReportPage", function() { return AttendenceReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let AttendenceReportPage = class AttendenceReportPage {
    constructor(location, formBuilder, ajaxService, commonService, router) {
        this.location = location;
        this.formBuilder = formBuilder;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.router = router;
        this.date = moment__WEBPACK_IMPORTED_MODULE_4__();
        this.currentDate = `${this.date.format('MMMM ')}${this.date.format('YYYY ')}`;
        this.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.next = false;
        this.present = [];
    }
    initDateRange() {
        var today = new Date();
        var month = String(today.getMonth() + 1).padStart(2, '0');
        var year = today.getFullYear();
        today = year + '-' + month;
        this.currentDate = today;
        this.dateForm = this.formBuilder.group({
            dateFrom: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            presentFrom: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            holidayFrom: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    ngOnInit() {
        this.initDateRange();
        this.daysArr = this.createCalendar(this.date);
        this.submit();
    }
    submit() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + `/parentapp/attendance?stin=12345&period=${this.currentDate}`;
        this.ajaxService.ajaxGet(url).subscribe(res => {
            var data = res;
            this.next = false;
            this.date = moment__WEBPACK_IMPORTED_MODULE_4__(this.currentDate, 'YYYY MM');
            if (this.currentDate !== "") {
                if (this.currentDate == data.month) {
                    //form data
                    this.dateForm.patchValue({
                        dateFrom: data.absent,
                        presentFrom: data.present,
                        holidayFrom: data.holiday,
                    });
                    this.daysArr = this.createCalendar(moment__WEBPACK_IMPORTED_MODULE_4__(this.currentDate, 'YYYY MM'));
                }
            }
            else {
                this.commonService.presentToast("Please try again later.");
            }
        });
    }
    locationBack() {
        this.router.navigateByUrl('student-overview');
    }
    createCalendar(month) {
        let firstDay = moment__WEBPACK_IMPORTED_MODULE_4__(month).startOf('M');
        let days = Array.apply(null, { length: month.daysInMonth() })
            .map(Number.call, Number)
            .map(n => {
            return moment__WEBPACK_IMPORTED_MODULE_4__(firstDay).add(n, 'd');
        });
        for (let n = 0; n < firstDay.weekday(); n++) {
            days.unshift(null);
        }
        return days;
    }
    nextMonth() {
        this.date.add(1, 'M');
        this.daysArr = this.createCalendar(this.date);
        this.next = true;
    }
    previousMonth() {
        this.date.subtract(1, 'M');
        this.daysArr = this.createCalendar(this.date);
        this.next = true;
    }
    isAbsent(day) {
        if (!day) {
            return false;
        }
        const absentArr = this.dateForm.value.dateFrom;
        const dayString = day ? day.format('YYYY-MM-DD') : '';
        if (this.dateForm.valid) {
            return absentArr.includes(dayString);
        }
        return false;
    }
    isPresent(day) {
        if (!day) {
            return false;
        }
        const presentArr = this.dateForm.value.presentFrom;
        const dayString = day ? day.format('YYYY-MM-DD') : '';
        if (this.dateForm.valid) {
            return presentArr.includes(dayString);
        }
        return false;
    }
    isHoliday(day) {
        if (!day) {
            return false;
        }
        const holidayArr = this.dateForm.value.holidayFrom;
        const dayString = day ? day.format('YYYY-MM-DD') : '';
        if (this.dateForm.valid) {
            return holidayArr.includes(dayString);
        }
        return false;
    }
};
AttendenceReportPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
AttendenceReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-attendence-report',
        template: __webpack_require__(/*! raw-loader!./attendence-report.page.html */ "./node_modules/raw-loader/index.js!./src/app/parent-app/attendence-report/attendence-report.page.html"),
        styles: [__webpack_require__(/*! ./attendence-report.page.scss */ "./src/app/parent-app/attendence-report/attendence-report.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], AttendenceReportPage);



/***/ })

}]);
//# sourceMappingURL=parent-app-attendence-report-attendence-report-module-es2015.js.map