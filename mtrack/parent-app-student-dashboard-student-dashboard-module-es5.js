(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parent-app-student-dashboard-student-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/parent-app/student-dashboard/student-dashboard.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/parent-app/student-dashboard/student-dashboard.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"header\">\r\n  <ion-toolbar class=\"parentAppcolor\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title> Dashboard </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card (click)=\"studentDetail(data)\" *ngFor=\"let data of studentsData\">\r\n    <ion-card-content style=\"padding: 0px\">\r\n      <ion-row>\r\n        <ion-col size=\"2\">\r\n          <ion-icon\r\n            class=\"student-icon parentAppBackcolor\"\r\n            name=\"contact\"\r\n          ></ion-icon>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-row class=\"name-style\"> {{data.studentName}} </ion-row>\r\n          <ion-row class=\"class-sec\">\r\n            {{ \"Std:\"+data.std+\" || Sec:\"+data.sec+\"\"}}\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-card style=\"width: 100%; margin: 0px\">\r\n          <ion-card-content>\r\n            <!-- <ion-row>\r\n              <div class=\"border-line\"></div>\r\n              <div size=2 class=\"circle\" [ngClass]=\"{'current': data.routesDatas[0].name }\"></div>\r\n              <div style=\"width: 48%;\" class=\"border-line \"></div>\r\n              <div style=\"left:47%\" size=2 class=\"circle\"></div>\r\n              <div style=\"left:91%\" size=2 class=\"circle\"></div>\r\n            </ion-row> -->\r\n            <!-- <ion-row class=\"padding-top-10 padding-bottom-10\">\r\n              <ion-col class=\"padding0px\">\r\n                {{data.routesDatas[0].name}}\r\n              </ion-col>\r\n              <ion-col class=\"padding0px text-center\">\r\n                {{data.routesDatas[0].name}}\r\n              </ion-col>\r\n              <ion-col class=\"padding0px text-right\">\r\n              {{data.routesDatas[0].name}}\r\n              </ion-col>\r\n            </ion-row> -->\r\n            <ion-row>\r\n              <!-- <ion-col class=\"padding0px\" size=12 class=\"ion-text-center\">\r\n                <ion-icon class=\"iconCall\" name=\"call\"></ion-icon>\r\n              </ion-col> -->\r\n              <ion-col class=\"padding0px\" size=\"3.5\" class=\"ion-text-right\">\r\n                <ion-icon\r\n                  name=\"md-locate\"\r\n                  class=\"location-icon parentAppBackcolor\"\r\n                ></ion-icon>\r\n              </ion-col>\r\n              <ion-col\r\n                class=\"padding0px\"\r\n                size=\"8.5\"\r\n                class=\"ion-text-left\"\r\n                style=\"font-size: 17px\"\r\n              >\r\n                {{data.routesDatas[0].name}}\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row class=\"border\">\r\n              <ion-col size=\"3\">\r\n                <ion-row class=\"rowCenter\">\r\n                  <ion-icon\r\n                    class=\"iconCall parentAppBackcolor\"\r\n                    name=\"call\"\r\n                  ></ion-icon>\r\n                </ion-row>\r\n                <ion-row class=\"rowCenter fontFamily\">\r\n                  {{data.driverNo}}\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-row class=\"rowCenter\">\r\n                  <svg\r\n                    version=\"1.0\"\r\n                    xmlns=\"http://www.w3.org/2000/svg\"\r\n                    width=\"50px\"\r\n                    height=\"31px\"\r\n                    viewBox=\"0 0 820.000000 742.000000\"\r\n                    preserveAspectRatio=\"xMidYMid meet\"\r\n                  >\r\n                    <g\r\n                      transform=\"translate(0.000000,742.000000) scale(0.100000,-0.100000)\"\r\n                      fill=\"#ff9025\"\r\n                      stroke=\"none\"\r\n                    >\r\n                      <path\r\n                        d=\"M3055 7003 c-134 -16 -336 -78 -460 -140 -243 -122 -414 -287 -526\r\n                 -508 -118 -231 -133 -311 -149 -762 -5 -155 -14 -292 -19 -306 -5 -14 -21 -37\r\n                 -36 -51 -63 -63 -91 -192 -82 -386 12 -267 83 -448 272 -699 104 -137 116\r\n                 -157 160 -271 84 -212 171 -353 309 -498 352 -369 798 -469 1213 -272 291 138\r\n                 523 402 663 755 47 118 78 174 135 245 117 146 222 338 273 500 25 79 26 97\r\n                 27 275 0 221 -11 273 -72 345 -36 41 -38 49 -45 129 -3 48 -7 134 -7 192 -2\r\n                 220 -38 431 -96 557 -14 31 -50 89 -79 127 -66 86 -79 112 -100 194 -78 304\r\n                 -430 522 -925 571 -97 9 -389 12 -456 3z\"\r\n                      />\r\n                      <path\r\n                        d=\"M6165 3654 c-260 -28 -548 -133 -774 -282 -394 -259 -655 -656 -753\r\n                 -1143 -33 -165 -33 -463 0 -627 144 -715 662 -1237 1382 -1393 92 -20 133 -23\r\n                 340 -23 206 0 248 3 339 22 450 98 821 339 1086 707 123 170 245 452 290 670\r\n                 35 170 29 561 -11 720 -67 267 -181 500 -344 704 -254 318 -606 534 -1015 623\r\n                 -69 15 -139 20 -295 23 -113 1 -223 1 -245 -1z m-126 -414 c56 -16 108 -58\r\n                 127 -103 16 -37 18 -87 22 -453 l4 -412 -45 -30 c-105 -73 -177 -207 -177\r\n                 -332 0 -26 -16 -38 -281 -190 -388 -224 -428 -242 -504 -238 -99 6 -161 64\r\n                 -192 179 -24 90 -24 386 0 516 33 177 103 348 213 516 80 123 242 288 359 365\r\n                 139 93 352 188 425 191 8 1 30 -3 49 -9z m781 -12 c67 -20 215 -96 305 -156\r\n                 274 -181 453 -421 566 -757 l34 -100 0 -290 0 -290 -28 -48 c-57 -96 -158\r\n                 -129 -267 -88 -46 17 -263 138 -622 346 l-68 39 0 56 c-1 103 -66 224 -158\r\n                 292 l-53 40 3 421 c3 401 4 424 23 456 51 87 146 115 265 79z m-413 -1149 c34\r\n                 -13 80 -55 99 -91 18 -35 18 -101 0 -137 -21 -39 -79 -88 -114 -96 -76 -16\r\n                 -169 43 -193 123 -36 121 92 245 208 201z m-150 -524 l112 -29 78 23 c164 50\r\n                 148 49 206 16 162 -90 476 -277 561 -334 83 -55 103 -73 119 -110 49 -111 -21\r\n                 -237 -198 -352 -376 -247 -841 -302 -1254 -149 -226 83 -445 232 -492 335 -25\r\n                 54 -24 135 1 185 23 44 66 76 270 197 223 132 457 254 475 249 6 -1 60 -16\r\n                 122 -31z\"\r\n                      />\r\n                      <path\r\n                        d=\"M2175 3430 c-11 -5 -136 -57 -278 -115 -678 -277 -929 -404 -1120\r\n               -563 -260 -216 -484 -604 -592 -1026 -51 -201 -78 -374 -79 -513 -1 -111 1\r\n                 -124 20 -143 47 -48 410 -173 679 -234 387 -87 928 -162 1447 -198 244 -17\r\n                 1857 -17 2108 0 193 13 462 40 469 47 2 3 -23 44 -57 93 -171 252 -295 549\r\n                 -343 822 -25 144 -28 445 -5 623 41 319 166 601 404 910 46 59 72 101 66 107\r\n                 -11 11 -473 200 -489 200 -6 0 -27 -19 -45 -42 -203 -256 -430 -422 -713 -521\r\n                 l-92 -32 -245 0 -245 0 -92 32 c-237 83 -488 253 -631 426 -122 150 -120 148\r\n                 -167 127z\"\r\n                      />\r\n                    </g>\r\n                  </svg>\r\n                </ion-row>\r\n                <ion-row class=\"rowCenter fontFamily\">\r\n                  {{data.driverName}}\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"3\">\r\n                <ion-row class=\"rowCenter\">\r\n                  <svg\r\n                    width=\"32px\"\r\n                    heigth=\"31px\"\r\n                    version=\"1.1\"\r\n                    xmlns=\"http://www.w3.org/2000/svg\"\r\n                    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                    x=\"0px\"\r\n                    y=\"0px\"\r\n                    style=\"fill: #ff9025\"\r\n                    viewBox=\"0 0 1000 1000\"\r\n                    enable-background=\"new 0 0 1000 1000\"\r\n                    xml:space=\"preserve\"\r\n                  >\r\n                    <g>\r\n                      <path\r\n                        d=\"M642.1,588.3c-4.6-57.7,189.9-56.2,189.9-56.2s-151-33-221.8,25.8c-89.6,74.4,45.6,121.6,76,151.9c30.4,30.4,33.4,83.6-100.3,86.6c-133.7,3-227.9-6.1-227.9-6.1s-26.5,110.5-50.1,168.7c0,0,256.8,7.6,360.1-16.7C771.2,918,880.6,836,833.5,741.8C786.4,647.6,646.6,646.1,642.1,588.3z\"\r\n                      />\r\n                      <path\r\n                        d=\"M265.3,158.3C124.3,158.3,10,272.6,10,413.6c0,141,203.6,252.2,255.3,533.4c72.9-276.6,255.3-392.4,255.3-533.4S406.2,158.3,265.3,158.3z M265.3,548.8c-74.7,0-135.2-60.5-135.2-135.2s60.5-135.2,135.2-135.2c74.7,0,135.2,60.5,135.2,135.2S339.9,548.8,265.3,548.8z\"\r\n                      />\r\n                      <path\r\n                        d=\"M990,191c0-83.5-67.7-151.2-151.2-151.2c-83.5,0-151.2,67.7-151.2,151.2s120.6,149.4,151.2,315.9C882,343.1,990,274.5,990,191z M758.7,191c0-44.2,35.9-80.1,80.1-80.1c44.2,0,80.1,35.9,80.1,80.1s-35.9,80.1-80.1,80.1C794.6,271.1,758.7,235.2,758.7,191z\"\r\n                      />\r\n                    </g>\r\n                  </svg>\r\n                </ion-row>\r\n                <ion-row class=\"rowCenter fontFamily\">\r\n                  {{data.routeName}}\r\n                </ion-row>\r\n              </ion-col>\r\n              <!-- <ion-col size=12 class=\"text-center trip-detail\">\r\n                <ion-label> TRIP DETAIL</ion-label>\r\n              </ion-col>\r\n              <ion-col size=12>\r\n                <ion-row>\r\n                  <ion-col>Route name</ion-col>\r\n                  <ion-col> AH1</ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>Driver name</ion-col>\r\n                  <ion-col> Mohamed Imran</ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>Driver contact</ion-col>\r\n                  <ion-col> 9087657583</ion-col>\r\n                </ion-row>\r\n              </ion-col> -->\r\n            </ion-row>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/parent-app/student-dashboard/student-dashboard.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/parent-app/student-dashboard/student-dashboard.module.ts ***!
  \**************************************************************************/
/*! exports provided: StudentDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDashboardPageModule", function() { return StudentDashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _student_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-dashboard.page */ "./src/app/parent-app/student-dashboard/student-dashboard.page.ts");







var routes = [
    {
        path: '',
        component: _student_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["StudentDashboardPage"]
    }
];
var StudentDashboardPageModule = /** @class */ (function () {
    function StudentDashboardPageModule() {
    }
    StudentDashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_student_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["StudentDashboardPage"]]
        })
    ], StudentDashboardPageModule);
    return StudentDashboardPageModule;
}());



/***/ }),

/***/ "./src/app/parent-app/student-dashboard/student-dashboard.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/parent-app/student-dashboard/student-dashboard.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding0px {\n  padding: 0px;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.padding-top-10 {\n  padding-top: 10px;\n}\n\n.padding-bottom-10 {\n  padding-bottom: 10px;\n}\n\n.trip-detail {\n  font-weight: bold;\n  color: black;\n}\n\n.border {\n  border-top: 2px solid #ececec;\n  padding-top: 9px;\n}\n\n.name-style {\n  font-size: 17px;\n  font-weight: bold;\n  color: black;\n  text-transform: uppercase;\n}\n\n.student-icon {\n  font-size: 46px;\n}\n\n.location-icon {\n  font-size: 24px;\n}\n\n.class-sec {\n  font-size: 11px;\n  text-transform: uppercase;\n}\n\n.circle {\n  padding: 6px;\n  position: absolute;\n  display: inline-block;\n  content: \"\";\n  top: 13px;\n  left: 10px;\n  border-radius: 50%;\n  background-color: #ffffff;\n  border: 3px solid #ececec;\n}\n\n.border-line {\n  border-bottom: 3px solid;\n  width: 50%;\n  padding: 4px;\n}\n\n.fixline {\n  height: 70px;\n  font-size: smaller;\n  color: white;\n  padding: 12px;\n  text-align: center;\n}\n\n.rowCenter {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.countSize {\n  font-size: large;\n  font-weight: bolder;\n  font-family: sans-serif;\n}\n\n.fontFamily {\n  font-family: sans-serif;\n}\n\n.iconCall {\n  font-size: 31px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFyZW50LWFwcC9zdHVkZW50LWRhc2hib2FyZC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXHBhcmVudC1hcHBcXHN0dWRlbnQtZGFzaGJvYXJkXFxzdHVkZW50LWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhcmVudC1hcHAvc3R1ZGVudC1kYXNoYm9hcmQvc3R1ZGVudC1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUNHSjs7QURBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDR0o7O0FEREE7RUFDSSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDSUo7O0FEREE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDSUo7O0FEREE7RUFDSSx3QkFBQTtVQUFBLHVCQUFBO0FDSUo7O0FEREE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNJSjs7QURBQTtFQUNJLHVCQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9wYXJlbnQtYXBwL3N0dWRlbnQtZGFzaGJvYXJkL3N0dWRlbnQtZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkaW5nMHB4IHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWRkaW5nLXRvcC0xMCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBhZGRpbmctYm90dG9tLTEwIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udHJpcC1kZXRhaWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlY2VjZWM7XHJcbiAgICBwYWRkaW5nLXRvcDogOXB4O1xyXG59XHJcblxyXG4ubmFtZS1zdHlsZSB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5zdHVkZW50LWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0NnB4O1xyXG59XHJcbi5sb2NhdGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4uY2xhc3Mtc2VjIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jaXJjbGUge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHRvcDogMTNweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2VjZWNlYztcclxufVxyXG4uYm9yZGVyLWxpbmUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuLmZpeGxpbmUge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJvd0NlbnRlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvdW50U2l6ZSB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuLmZvbnRGYW1pbHl7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG4uaWNvbkNhbGx7XHJcbiAgICBmb250LXNpemU6IDMxcHg7XHJcbn0iLCIucGFkZGluZzBweCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGFkZGluZy10b3AtMTAge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnBhZGRpbmctYm90dG9tLTEwIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi50cmlwLWRldGFpbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5ib3JkZXIge1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2VjZWNlYztcbiAgcGFkZGluZy10b3A6IDlweDtcbn1cblxuLm5hbWUtc3R5bGUge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zdHVkZW50LWljb24ge1xuICBmb250LXNpemU6IDQ2cHg7XG59XG5cbi5sb2NhdGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uY2xhc3Mtc2VjIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2lyY2xlIHtcbiAgcGFkZGluZzogNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiAxM3B4O1xuICBsZWZ0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNlY2VjZWM7XG59XG5cbi5ib3JkZXItbGluZSB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZDtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4uZml4bGluZSB7XG4gIGhlaWdodDogNzBweDtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJvd0NlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY291bnRTaXplIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbi5mb250RmFtaWx5IHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbi5pY29uQ2FsbCB7XG4gIGZvbnQtc2l6ZTogMzFweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/parent-app/student-dashboard/student-dashboard.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/parent-app/student-dashboard/student-dashboard.page.ts ***!
  \************************************************************************/
/*! exports provided: StudentDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDashboardPage", function() { return StudentDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");







var StudentDashboardPage = /** @class */ (function () {
    function StudentDashboardPage(menuController, router, ajaxService, commonService) {
        this.menuController = menuController;
        this.router = router;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        //   studentsData={
        //     studName:' ',
        //     driverNo:'',
        //     driverName:'',
        //     routeName:'',
        //     std:"",
        //     sec:"",
        //     routes:[{name:"",value:""},{name:"",value:""},
        //     { name:" ",value:""}],
        // }
        this.studentsData = [];
    }
    StudentDashboardPage.prototype.studentDetail = function (data) {
        localStorage.setItem("selectedVin", JSON.stringify(data.SelectedVin));
        localStorage.setItem("stin", data.stin);
        this.router.navigateByUrl("/parent-tab/routmap");
    };
    StudentDashboardPage.prototype.getStudentDetails = function () {
        var _this = this;
        this.commonService.presentLoader();
        this.studentsData = [];
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web +
            "/parentapp/dashboard?parentId=" +
            localStorage.getItem("userName");
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.commonService.dismissLoader();
            console.log(res);
            _this.studentsData = res;
            localStorage.setItem("appSettings", JSON.stringify("asas"));
            localStorage.setItem("appSettings", JSON.stringify("SelectedVin"));
            localStorage.setItem("staticIOData", JSON.stringify({
                art291: [],
                art294: [
                    {
                        result: null,
                        unit: null,
                        min: "0",
                        max: "1",
                        io: 1,
                        totalKM: 0,
                        fuelStatus: 0,
                        fuelTotal: 0,
                        ioname: "fuel sensor",
                        status: null,
                    },
                ],
                art372: [],
                art133: [],
                art131: [],
                art175: [],
                art132: [],
                art176: [],
                art330: [],
                art693: [],
                art896: [],
                art413: [],
                art611: [],
                art897: [],
                art774: [],
                art219: [],
                art813: [],
                art414: [],
                art898: [],
                art938: [],
                art935: [],
                art581: [],
                art584: [],
                art464: [],
                art340: [],
                art461: [],
                art582: [],
                art269: [],
                art423: [],
                art786: [],
                art424: [],
                art146: [],
                art306: [],
                art504: [],
                art900: [],
                art626: [],
                art824: [],
                art945: [],
                art304: [],
                art228: [],
                art547: [],
                art745: [],
                art508: [],
                art706: [],
                art429: [],
                art902: [],
                art908: [],
                art591: [],
                art199: [],
                art551: [],
                art475: [],
                art550: [],
                art599: [],
                art314: [],
                art435: [],
                art996: [],
                art355: [],
                art399: [],
                art630: [],
                art751: [],
                art119: [],
                art834: [],
                art999: [],
                art634: [],
                art678: [],
                art118: [],
                art514: [],
                art954: [],
                art718: [],
                art280: [],
                art281: [],
                art122: [],
                art760: [],
                art484: [],
                art126: [],
                art489: [],
                art566: [],
                art841: [],
                art369: [],
                art600: [],
                art840: [],
                art845: [],
                art725: [],
                art967: [],
                art645: [],
                art404: [],
                art723: [],
                art407: [],
                art924: [],
                art529: [],
                art606: [],
                art929: [],
            }));
            // let dashboardInput = {
            //   "companyID": this.login.value.compId,
            //   "branchID": this.login.value.compId,
            //   "emailId": this.login.value.compName,
            //   "Check": false,
            //   "entryPoint": app.entryPoint,
            //   "pollingDuration": JSON.parse(res[1]["applicationSettings"]).pollingDuration,
            //   "mode": "dashboardData",
            //   "dashboardVin": "",
            //   "defaultInterval": res[1]["applicationSettings"].liveTrackingDelay,
            //   "make": "",
            //   "model": "",
            //   "delay": res[1]["applicationSettings"].liveTrackingDelay,
            //   "ImeiNo": "",
            // }
        });
    };
    // async pushNotificationConfig() {
    //   let pushDetails: object;
    //   this.platform.ready().then(res => {
    //     if (this.platform.is('ios')) {
    //       this.firebaseX.grantPermission()
    //         .then((success) => {
    //           if (success) {
    //           }
    //         });
    //     }
    //     if (this.network.type !== "none") {
    //       if (/(android)/i.test(navigator.userAgent)) {
    //         this.firebaseX.getToken()
    //           .then(token => {
    //             //alert("token is "+ token);
    //             //   alert("uuid is "+ this.device.uuid);
    //             localStorage.setItem('imeiNo', this.device.uuid)
    //             localStorage.setItem('deviceToken', token)
    //             localStorage.setItem('notificationStatus', 'true')
    //             pushDetails = {
    //               "imeiNo": this.device.uuid,
    //               "appName": app.appName,
    //               "deviceToken": token,
    //               "companyID": localStorage.getItem("corpId"),
    //               "userId": localStorage.getItem("userName"),
    //               "os": "ionic4",
    //               "pushStatus": "true"
    //             };
    //             const url = serverUrl.web + "/alert/pushnotification";
    //             this.ajaxService.ajaxPostWithBody(url, pushDetails)
    //               .subscribe(res => {
    //                 localStorage.setItem('pushStatus', 'persisted');
    //                 //console.log('push presisted');
    //                 // this.restartApp();
    //               })
    //           })
    //           .catch(error => {
    //             //  alert("Token uuid as "+error);
    //             this.commonService.presentToast("Something went wrong!!Push notification won't recieve");
    //           })
    //       } else if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
    //         this.firebaseX.getToken()
    //           .then(token => {
    //             //alert("token is "+ token);
    //             this.udid.get()
    //               .then((uuid: any) => {
    //                 // alert("uuid is "+ uuid);
    //                 localStorage.setItem('imeiNo', this.device.uuid)
    //                 localStorage.setItem('deviceToken', token)
    //                 localStorage.setItem('notificationStatus', 'true')
    //                 pushDetails = {
    //                   "imeiNo": this.device.uuid,
    //                   "appName": app.appName,
    //                   "deviceToken": token,
    //                   "companyID": localStorage.getItem("corpId"),
    //                   "userId": localStorage.getItem("userName"),
    //                   "os": "ionic4ios",
    //                   "pushStatus": "true"
    //                 };
    //                 localStorage.setItem('device','ionic4ios')
    //                 //console.log(uuid);
    //                 //console.log(token);
    //                 const url = serverUrl.web + "/alert/pushnotification";
    //                 this.ajaxService.ajaxPostWithBody(url, pushDetails)
    //                   .subscribe(res => {
    //                     localStorage.setItem('pushStatus', 'persisted');
    //                     //console.log('push presisted');
    //                     // this.restartApp();
    //                   })
    //               })
    //               .catch((error: any) => {
    //                 //alert("Error uuid as "+error);
    //                 this.commonService.presentToast("Something went wrong!!Push notification won't recieve");
    //               });
    //           })
    //           .catch(error => {
    //             //  alert("Token uuid as "+error);
    //             this.commonService.presentToast("Something went wrong!!Push notification won't recieve");
    //           })
    //       }
    //       this.network.onDisconnect().subscribe(() => {
    //         //console.log('network was disconnected :-(');
    //         this.commonService.presentToast('Poor Network Connection');
    //       });
    //     }
    //   })
    // }
    StudentDashboardPage.prototype.ngOnDestroy = function () { };
    StudentDashboardPage.prototype.ngOnInit = function () {
        this.getStudentDetails();
        this.menuController.enable(true);
    };
    StudentDashboardPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
    StudentDashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-student-dashboard",
            template: __webpack_require__(/*! raw-loader!./student-dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/parent-app/student-dashboard/student-dashboard.page.html"),
            styles: [__webpack_require__(/*! ./student-dashboard.page.scss */ "./src/app/parent-app/student-dashboard/student-dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], StudentDashboardPage);
    return StudentDashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=parent-app-student-dashboard-student-dashboard-module-es5.js.map