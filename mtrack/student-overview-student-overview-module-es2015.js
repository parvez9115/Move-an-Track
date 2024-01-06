(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-overview-student-overview-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/parent-app/student-overview/student-overview.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/parent-app/student-overview/student-overview.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class='header'>\r\n  <ion-toolbar class=\"parentAppcolor\">\r\n    <ion-row style=\"align-items: center;\">\r\n      <ion-icon (click)=\"locationBack()\" class=\"icon-size\" name=\"arrow-back\"></ion-icon>\r\n      <ion-label> Overview </ion-label>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- <calendar [calendarMode]=\"calendar.mode\" [currentDate]=\"calendar.currentDate\">\r\n  </calendar> -->\r\n  <!-- <ion-calendar disable=\"false\" [options]=\"options\" [format]=\"'YYYY-MM-DD'\">\r\n  </ion-calendar> -->\r\n  <ion-card>\r\n    <ion-card-content class=\"padding8px\">\r\n      <div id=\"container\" [routerLink]=\"['/attendence-report']\"\r\n        style=\"text-align: -webkit-center;position: relative; overflow: hidden; border-bottom: 2px solid #e5e5e5;\">\r\n      </div>\r\n      <ion-row>\r\n        <ion-col class=\"colRightBorder\">\r\n          <ion-row class=\"attendence\">\r\n            {{atteData.week}}\r\n          </ion-row>\r\n          <ion-row class=\"attendenceSub\">\r\n            Week\r\n          </ion-row>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-row class=\"attendence\">\r\n            {{atteData.month}}\r\n          </ion-row>\r\n          <ion-row class=\"attendenceSub\">\r\n            Month\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <div class=\"map parentAppBorder\" #mapElement></div>\r\n      <ion-row class=\"routMap\">\r\n      {{  trackdata[0].routeName}}\r\n      </ion-row>\r\n      <ion-row class=\"scrollRow\">\r\n        <ion-col size=12 *ngFor=\"let trackdata of trackdata[0].routesDatas\">\r\n          <ion-row class=\"trackSideBorder\">\r\n            <ion-col size=2 class=\"mapCardModel\">\r\n              {{trackdata.count}}\r\n            </ion-col>\r\n            <ion-col size=9>\r\n              <ion-row *ngIf=\"trackdata.started\" class=\" startedEndLabel parentAppBackcolor locationTrack\">\r\n                {{trackdata.started}}\r\n              </ion-row>\r\n              <ion-row class=\"locationName\">\r\n                {{trackdata.place}}\r\n              </ion-row>\r\n              <ion-row class=\"locationTrack\">\r\n                {{trackdata.location}}\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-row style=\"height: 50vh;\r\n      overflow: auto;\">\r\n        <ion-card size=12 *ngFor=\"let alert of alert\">\r\n          <ion-row [ngStyle]=\"{'border-left':'6px solid '+ alert.color}\">\r\n            <ion-col size=2 class=\"colCenter\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" width=\"8mm\" height=\"8mm\"\r\n                version=\"1.1\"\r\n                style=\"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd\"\r\n                viewBox=\"0 0 304.78 304.78\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                <path [attr.fill]=\"alert.color\" [attr.d]=\"alert.icon\" />\r\n              </svg>\r\n            </ion-col>\r\n            <ion-col size=10>\r\n              <ion-row class=\"alertCardTitle\">\r\n                {{alert.title}}\r\n              </ion-row>\r\n              <ion-row style=\"font-size: 11px;\">\r\n                {{alert.text}}\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/parent-app/student-overview/student-overview.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/parent-app/student-overview/student-overview.module.ts ***!
  \************************************************************************/
/*! exports provided: StudentOverviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentOverviewPageModule", function() { return StudentOverviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _student_overview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-overview.page */ "./src/app/parent-app/student-overview/student-overview.page.ts");







const routes = [
    {
        path: '',
        component: _student_overview_page__WEBPACK_IMPORTED_MODULE_6__["StudentOverviewPage"]
    }, {
        path: 'attendence-report',
        loadChildren: './parent-app/attendence-report/attendence-report.module#AttendenceReportPageModule'
    }
];
let StudentOverviewPageModule = class StudentOverviewPageModule {
};
StudentOverviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_student_overview_page__WEBPACK_IMPORTED_MODULE_6__["StudentOverviewPage"]]
    })
], StudentOverviewPageModule);



/***/ }),

/***/ "./src/app/parent-app/student-overview/student-overview.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/parent-app/student-overview/student-overview.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-size {\n  font-size: 18px;\n  padding: 9px;\n}\n\n.attendence {\n  font-size: 28px;\n  font-weight: bold;\n  color: black;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.padding8px {\n  padding: 8px;\n}\n\n.attendenceSub {\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 12px;\n  font-family: sans-serif;\n}\n\n.colRightBorder {\n  border-right: 2px solid #d2d2d294;\n}\n\nion-card-title {\n  text-align: center;\n  color: #828282;\n  font-size: 15px;\n  padding: 5px;\n  text-transform: uppercase;\n}\n\n.map {\n  height: 193px;\n}\n\n.mapCardModel {\n  font-size: 25px;\n  font-weight: bold;\n  color: black;\n  text-align: center;\n  align-self: center;\n}\n\n.locationName {\n  font-family: cursive;\n  font-size: 20px;\n  color: #000000;\n  font-weight: bold;\n}\n\n.locationTrack {\n  font-size: 10px;\n  padding-top: 3px;\n}\n\n.startedEndLabel {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.routMap {\n  padding-top: 15px;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 17px;\n  color: black;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.scrollRow {\n  height: 147px;\n  overflow: auto;\n  margin-top: 15px;\n}\n\n.iconFontSize {\n  font-size: 36px;\n}\n\n.colCenter {\n  align-self: center;\n}\n\n.alertCardTitle {\n  font-weight: bold;\n  color: #000000;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFyZW50LWFwcC9zdHVkZW50LW92ZXJ2aWV3L0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxccGFyZW50LWFwcFxcc3R1ZGVudC1vdmVydmlld1xcc3R1ZGVudC1vdmVydmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhcmVudC1hcHAvc3R1ZGVudC1vdmVydmlldy9zdHVkZW50LW92ZXJ2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksaUNBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQ0lKOztBREZBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDS0o7O0FERkE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDS0o7O0FERkE7RUFDSSxlQUFBO0FDS0o7O0FERkE7RUFDSSxrQkFBQTtBQ0tKOztBREZBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3BhcmVudC1hcHAvc3R1ZGVudC1vdmVydmlldy9zdHVkZW50LW92ZXJ2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLXNpemUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogOXB4O1xyXG59XHJcblxyXG4uYXR0ZW5kZW5jZSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucGFkZGluZzhweCB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi5hdHRlbmRlbmNlU3ViIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jb2xSaWdodEJvcmRlciB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZDJkMmQyOTQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLm1hcCB7XHJcbiAgICBoZWlnaHQ6IDE5M3B4O1xyXG59XHJcbi5tYXBDYXJkTW9kZWwge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2NhdGlvbk5hbWUge1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5sb2NhdGlvblRyYWNrIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbn1cclxuLnN0YXJ0ZWRFbmRMYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLnJvdXRNYXAge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNjcm9sbFJvdyB7XHJcbiAgICBoZWlnaHQ6IDE0N3B4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uaWNvbkZvbnRTaXplIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxufVxyXG5cclxuLmNvbENlbnRlciB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbGVydENhcmRUaXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4iLCIuaWNvbi1zaXplIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiA5cHg7XG59XG5cbi5hdHRlbmRlbmNlIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBhZGRpbmc4cHgge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5hdHRlbmRlbmNlU3ViIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbi5jb2xSaWdodEJvcmRlciB7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNkMmQyZDI5NDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm1hcCB7XG4gIGhlaWdodDogMTkzcHg7XG59XG5cbi5tYXBDYXJkTW9kZWwge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ubG9jYXRpb25OYW1lIHtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9jYXRpb25UcmFjayB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbn1cblxuLnN0YXJ0ZWRFbmRMYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ucm91dE1hcCB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogYmxhY2s7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2Nyb2xsUm93IHtcbiAgaGVpZ2h0OiAxNDdweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5pY29uRm9udFNpemUge1xuICBmb250LXNpemU6IDM2cHg7XG59XG5cbi5jb2xDZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5hbGVydENhcmRUaXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/parent-app/student-overview/student-overview.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/parent-app/student-overview/student-overview.page.ts ***!
  \**********************************************************************/
/*! exports provided: StudentOverviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentOverviewPage", function() { return StudentOverviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var highcharts_highcharts_3d_src__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts/highcharts-3d.src */ "./node_modules/highcharts/highcharts-3d.src.js");
/* harmony import */ var highcharts_highcharts_3d_src__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_3d_src__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth-map.service */ "./src/app/services/auth-map.service.ts");
/* harmony import */ var src_app_services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/openlayer-map.service */ "./src/app/services/openlayer-map.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");










let StudentOverviewPage = class StudentOverviewPage {
    // alertTextColor = {
    //   "Route NH11 bus has started": "#ffca4d",
    //   "Route NH11 bus has arrived soon to pick up": "#3287eb",
    //   "In route NH11 your child has borded the bus": "#48d765",
    //   "Your child has reached school": "#ff0000"
    // };
    // alert = [{
    //   color: '#ffca4d',
    //   text: "Route NH11 bus has started at 2021-04-15 08:00:00 AM",
    //   title: "Bus Started",
    //   icon: "M282.55 56.5l-20.41 0 0 70.19 8.16 0 0 32.23 -15.5 0 0 -106.49c0,-21.64 -17.54,-39.17 -39.17,-39.17l-128.94 0c-21.62,0 -39.16,17.53 -39.16,39.17l0 104.45 -13.47 0 0 -34.28 8.57 0 0 -70.17 -20.4 0 0 70.17 8.57 0 0 37.55 16.73 0 0 76.71c0,14.82 8.24,27.73 20.4,34.38l0 20.27 34.27 0 0 -15.49 97.1 0 0 15.5 34.29 0 0 -19.89c12.59,-6.49 21.21,-19.63 21.21,-34.78l0 -74.68 18.77 0 0 -35.49 8.98 0 0 -70.18 0 0zm-176.26 -35.09l91.38 0 0 21.23 -91.38 0 0 -21.23zm9.78 213.81l-50.59 0 0 -22.84 50.59 0 0 22.84zm122.41 0l-50.59 0 0 -22.84 50.59 0 0 22.84zm0 -73.44c0,0 -9.8,31.01 -88.13,31.01 -78.35,0 -86.51,-31.01 -86.51,-31.01l0 -107.73 174.64 0 0 107.73z"
    // },
    // {
    //   color: '#3287eb',
    //   text: "Route NH11 bus has arrived soon to pick up at 2021-04-15 08:40:00 AM",
    //   title: "Bus Arriving",
    //   icon:"M10.86 96.51c0,14.5 9.62,27.31 24.03,27.31l0 128.9c-9.59,0 -16.39,2.67 -16.39,14.19l42.61 0c-0.87,-10.54 -7.23,-14.19 -16.38,-14.19l0 -128.9c11.96,0 22.93,-10.34 22.93,-21.84 0,-11.49 1.48,-20.6 -8.53,-28.62 -14.17,-11.35 -48.27,-9.91 -48.27,23.15zm283.06 -23.05l-16.79 0 0 57.78 6.71 0 0 26.52 -12.76 0 0 -87.65c0.01,-17.81 -14.43,-32.24 -32.24,-32.24l-106.13 0c-17.8,0 -32.23,14.43 -32.23,32.24l0 85.98 -11.09 -0.01 0 -28.21 7.05 0 0 -57.76 -16.78 0 0 57.76 7.05 0 0 30.91 13.77 0 0 63.14c0,12.19 6.78,22.83 16.79,28.3l0 16.69 28.21 -0.01 0 -12.75 79.92 0 0 12.76 28.22 0 0 -16.37c10.37,-5.35 17.46,-16.16 17.46,-28.63l0 -61.47 15.45 0 0 -29.21 7.39 0 0 -57.77 0 0zm-145.08 -28.88l75.22 0 0 17.47 -75.22 0 0 -17.47zm8.06 175.99l-41.64 0 0 -18.8 41.64 0 0 18.8zm100.75 0l-41.64 0 0 -18.8 41.64 0 0 18.8zm0 -60.45c0,0 -8.06,25.52 -72.54,25.52 -64.49,0 -71.21,-25.52 -71.21,-25.52l0 -88.67 143.75 0 0 88.67z"
    // },
    // {
    //   color: '#48d765',
    //   text: "In route NH11 your child has borded the bus at 2021-04-15 09:00:00 AM",
    //   title: "Child Onboard",
    //   icon:"M54.42 204.43c0.25,13.96 0.08,30.74 3.56,42.77 14.04,1.94 9.94,-7.61 9.09,-20.62 -0.54,-7.97 -2.39,-10.34 -8.2,-17.52 -0.3,-0.39 -1.82,-2.08 -2.01,-2.29 -1.44,-1.51 -1.01,-1.11 -2.44,-2.34zm237.67 -129.35l-16.45 0 0 56.59 6.58 0 0 25.98 -12.5 0 0 -85.85c0.01,-17.44 -14.14,-31.58 -31.58,-31.58l-103.95 0c-17.43,0 -31.58,14.14 -31.58,31.58l0 84.21 -10.85 0 0 -27.64 6.91 0 0 -56.57 -16.45 0 0 56.57 6.91 0 0 30.28 13.48 0 0 61.84c0,11.95 6.65,22.36 16.45,27.72l0 16.35 27.63 0 0 -12.5 78.29 0 0 12.5 27.64 0 0 -16.03c10.15,-5.24 17.1,-15.83 17.1,-28.04l0 -60.21 15.13 0 0 -28.61 7.24 0 0 -56.59 0 0zm-72.82 106.86l-67.36 0c8.88,1.84 19.91,3.02 33.6,3.02 13.69,0 24.78,-1.18 33.76,-3.02zm-82.98 -4.65c20.65,0.64 49.63,-0.65 62.17,-0.29 3.09,-36.09 42.9,-21.62 47.59,-18.19 3.16,2.3 4.01,5.65 4.69,9.05 4.71,-4.39 5.82,-7.9 5.82,-7.9l0 -86.85 -140.79 0 0 86.85c0,0 2.64,9.98 20.52,17.33zm1.9 -50.51c-14.52,4.11 -9.33,26.74 6.66,22.06 13.57,-3.97 8.21,-26.28 -6.66,-22.06zm33.38 -0.2c-13.62,4.48 -9.12,26.37 6.97,22.23 13.79,-3.52 8.05,-27.16 -6.97,-22.23zm50.58 -6.93c-20.66,5.01 -12.91,34.94 7.31,30.26 18.08,-4.19 13.32,-35.25 -7.31,-30.26zm-63.54 42.05c-4.81,-6.87 -7.06,-10.76 -20.32,-9.59 -10.42,0.93 -13.19,5.57 -13.57,15.69l66.7 0.13c-0.46,-10.12 -3.39,-14.92 -13.57,-15.81 -10.82,-0.94 -16.79,1.51 -19.24,9.58zm48.79 15.27c2.33,-18.46 29.26,-21.48 35.33,-3.31 -1.36,0.78 -2.86,1.55 -4.49,2.3 -5.76,-2.59 -2.74,-8.79 -13.54,-8.13 -12.28,0.76 -4.53,8.86 -17.3,9.14zm-57.41 -130.18l73.68 0 0 17.12 -73.68 0 0 -17.12zm7.89 172.38l-40.79 0 0 -18.41 40.79 0 0 18.41zm98.68 0l-40.78 0 0 -18.41 40.78 0 0 18.41zm-209.58 -73.14c4.26,16.46 32.52,12.95 27.7,-7.76 -4.13,-17.81 -32.61,-11.2 -27.7,7.76zm8.21 37.13c3.35,10.68 6.81,8.87 19.08,11.77 14.56,3.42 17.08,-5.7 6.8,-9.63 -12.82,-4.89 -10.73,-0.76 -16.76,-12.72 -3.84,-7.6 -5.74,-14.56 -13.97,-15.43 -3.89,-0.4 -21.87,1.95 -25.99,2.97 -5.55,1.4 -5,2.09 -6.8,7.93 -1.26,4.08 -2.11,7.09 -3.57,11.17 -3.91,10.98 1.43,25.23 12.73,0.45 3.05,-6.7 1.34,-6.37 7.95,-6.69 -5.82,23.86 -6.05,13.58 -2.39,39.92 1.78,12.89 -16.87,18.31 -11.74,31.61 7.66,2.26 7.34,0.7 15.3,-7.13 1.19,-1.17 10.21,-11.73 10.99,-13.23 3.27,-6.16 -0.86,-30.34 8.37,-40.99z"
    // },
    // {
    //   color: '#ff0000',
    //   text: "Your child has reached school at 2021-04-15 09:30:00 AM",
    //   title: "Reached school",
    //   icon:"M45.58 209.32c-0.23,12.67 -0.08,27.92 -3.23,38.84 -12.75,1.76 -9.03,-6.91 -8.25,-18.72 0.48,-7.25 2.16,-9.4 7.44,-15.92 0.27,-0.35 1.65,-1.88 1.82,-2.07 1.31,-1.38 0.92,-1.02 2.22,-2.13zm243.5 -134.24l-16.45 0 0 56.59 6.58 0 0 25.98 -12.5 0 0 -85.85c0.01,-17.44 -14.14,-31.58 -31.58,-31.58l-103.95 0c-17.43,0 -31.58,14.14 -31.58,31.58l0 84.21 -10.85 0 0 -27.64 6.91 0 0 -56.57 -16.45 0 0 56.57 6.91 0 0 30.28 13.48 0 0 61.84c0,11.95 6.65,22.36 16.45,27.72l0 16.35 27.63 0 0 -12.5 78.29 0 0 12.5 27.64 0 0 -16.03c10.15,-5.24 17.1,-15.83 17.1,-28.04l0 -60.21 15.13 0 0 -28.61 7.24 0 0 -56.59 0 0zm-72.82 106.86l-67.36 0c8.88,1.84 19.91,3.02 33.6,3.02 13.69,0 24.78,-1.18 33.76,-3.02zm-82.98 -4.65c20.65,0.64 49.63,-0.65 62.17,-0.29 3.09,-36.09 42.9,-21.62 47.59,-18.19 3.16,2.3 4.01,5.65 4.69,9.05 4.71,-4.39 5.82,-7.9 5.82,-7.9l0 -86.85 -140.79 0 0 86.85c0,0 2.64,9.98 20.52,17.33zm1.9 -50.51c-14.52,4.11 -9.33,26.74 6.66,22.06 13.57,-3.97 8.21,-26.28 -6.66,-22.06zm33.38 -0.2c-13.62,4.48 -9.12,26.37 6.97,22.23 13.79,-3.52 8.05,-27.16 -6.97,-22.23zm50.58 -6.93c-20.66,5.01 -12.91,34.94 7.31,30.26 18.08,-4.19 13.32,-35.25 -7.31,-30.26zm-63.54 42.05c-4.81,-6.87 -7.06,-10.76 -20.32,-9.59 -10.42,0.93 -13.19,5.57 -13.57,15.69l66.7 0.13c-0.46,-10.12 -3.39,-14.92 -13.57,-15.81 -10.82,-0.94 -16.79,1.51 -19.24,9.58zm48.79 15.27c2.33,-18.46 29.26,-21.48 35.33,-3.31 -1.36,0.78 -2.86,1.55 -4.49,2.3 -5.76,-2.59 -2.74,-8.79 -13.54,-8.13 -12.28,0.76 -4.53,8.86 -17.3,9.14zm-57.41 -130.18l73.68 0 0 17.12 -73.68 0 0 -17.12zm7.89 172.38l-40.79 0 0 -18.41 40.79 0 0 18.41zm98.68 0l-40.78 0 0 -18.41 40.78 0 0 18.41zm-201.21 -62.89c-3.87,14.95 -29.54,11.76 -25.16,-7.05 3.75,-16.18 29.62,-10.17 25.16,7.05zm-7.46 33.72c-3.04,9.7 -6.18,8.06 -17.33,10.69 -13.22,3.11 -15.51,-5.18 -6.17,-8.75 11.64,-4.44 9.74,-0.69 15.22,-11.55 3.49,-6.9 5.21,-13.22 12.68,-14.01 3.54,-0.37 19.87,1.77 23.61,2.7 5.04,1.27 4.54,1.89 6.18,7.19 1.14,3.72 1.91,6.44 3.24,10.15 3.55,9.97 -1.3,22.92 -11.56,0.41 -2.77,-6.09 -1.22,-5.78 -7.22,-6.08 5.28,21.67 5.49,12.34 2.17,36.26 -1.62,11.71 15.32,16.63 10.66,28.71 -6.96,2.05 -6.67,0.63 -13.9,-6.48 -1.08,-1.06 -9.27,-10.65 -9.98,-12.01 -2.97,-5.6 0.79,-27.56 -7.6,-37.23z"
    // }]
    constructor(location, mapService, ajaxService, router) {
        this.location = location;
        this.mapService = mapService;
        this.ajaxService = ajaxService;
        this.router = router;
        this.date = new Date();
        this.atteData = { present: 0, absent: 0, week: "", month: "" };
        // trackdata = [{
        //   count: "",
        //   started: " ",
        //   place: " ",
        //   location: ""
        // }]
        // trackdata;
        this.trackdata = [{
                count: "01",
                started: "Started at ",
                place: "Gurukural matriculation higher sec school ",
                location: "No 13: gst road, west tambarm chennai 45"
            },
            {
                count: "02",
                place: "Nandthanam signal",
                location: "NH11 highway, greenmens road, chennai 43"
            },
            {
                count: "03",
                place: "Nandthanam signal",
                location: "NH11 highway, greenmens road, chennai 43"
            },
            {
                count: "04",
                started: "End at",
                place: "Nandthanam signal",
                location: "NH11 highway, greenmens road, chennai 43"
            }];
        this.mapService = new src_app_services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_8__["OpenlayerMapService"]();
    }
    locationBack() {
        this.router.navigateByUrl('student-dashboard');
    }
    highChart() {
        highcharts_highcharts_3d_src__WEBPACK_IMPORTED_MODULE_5___default()(highcharts__WEBPACK_IMPORTED_MODULE_4__);
        highcharts__WEBPACK_IMPORTED_MODULE_4__["chart"]('container', {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                },
                width: 320,
                height: 250
            },
            colors: ["#ff9025", "#7d7d7d"],
            title: {
                text: null
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        distance: 0,
                        format: '<span style="font-size: 1.2em; font-weight: bold">{point.name}</span><br>' + '<span style="font-size: 1.2em; font-weight: normal"> {point.percentage:.2f}%</span>'
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                    type: 'pie',
                    name: 'Percentege',
                    data: [
                        {
                            name: 'Present',
                            y: this.atteData.present,
                            sliced: true,
                            selected: true
                        },
                        ['Absent', this.atteData.absent],
                    ]
                }]
        });
    }
    createMap() {
        setTimeout(() => {
            this.map = this.mapService.loadMap(this.mapElement.nativeElement, { lat: 17.8998, lng: 12.85655 }, false, false);
            this.mapService.setCenter(this.map, { lat: 17.786351, lng: 78.090820 });
            // this.getHistory();
        }, 500);
    }
    getHistory() {
        let getHour = this.date.getHours();
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["serverUrl"].web + '/device/trackhistory';
        let body = {
            "vin": "art118",
            "fromDate": this.date.toJSON().split('T')[0] + " " + "12:00:00 AM",
            "toDate": this.date.toJSON().split('T')[0] + " " + "11:59:59 AM"
        };
        if (getHour >= 12) {
            body = {
                "vin": "art118",
                "fromDate": this.date.toJSON().split('T')[0] + " " + "12:00:00 PM",
                "toDate": this.date.toJSON().split('T')[0] + " " + "11:59:59 PM"
            };
        }
        this.ajaxService.ajaxPostWithBody(url, body)
            .subscribe(res => {
            let trackHistoryCurrentRes = res.routeGeometry;
            let trackHistoryArray;
            trackHistoryCurrentRes.forEach(function (value) {
                if (value.latitude !== 0 && value.longitude !== 0) {
                    trackHistoryArray.push({
                        lat: value.latitude,
                        lng: value.longitude
                    });
                }
            });
            this.mapService.createLine(this.map, trackHistoryArray);
        });
    }
    getAlerts() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["serverUrl"].web + '/parentapp/getPreferences?key=ParentappAlerts&companyId=' + localStorage.getItem('userName');
        this.ajaxService.ajaxGetPerference(url).subscribe(res => {
            console.log(res);
            this.alert = res;
        });
    }
    getRoutes() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["serverUrl"].web + '/parentapp/routes?vin=' + JSON.parse(localStorage.getItem('selectedVin')).dashboardVin;
        this.ajaxService.ajaxGetPerference(url).subscribe(res => {
            console.log(res);
            this.trackdata = res;
        });
    }
    getAttendanceDatas() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["serverUrl"].web + '/parentapp/attendanceReport';
        this.ajaxService.ajaxGet(url).subscribe(res => {
            console.log(res);
            this.atteData = res;
            this.highChart();
        });
    }
    ngOnInit() {
        this.getAttendanceDatas();
        this.getAlerts();
        this.getRoutes();
        this.createMap();
        this.highChart();
    }
};
StudentOverviewPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_7__["AuthMapService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('mapElement', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StudentOverviewPage.prototype, "mapElement", void 0);
StudentOverviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-student-overview',
        template: __webpack_require__(/*! raw-loader!./student-overview.page.html */ "./node_modules/raw-loader/index.js!./src/app/parent-app/student-overview/student-overview.page.html"),
        styles: [__webpack_require__(/*! ./student-overview.page.scss */ "./src/app/parent-app/student-overview/student-overview.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
        src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_7__["AuthMapService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], StudentOverviewPage);



/***/ })

}]);
//# sourceMappingURL=student-overview-student-overview-module-es2015.js.map