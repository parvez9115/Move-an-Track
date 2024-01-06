(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-livetrack-student-livetrack-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/parent-app/student-livetrack/student-livetrack.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/parent-app/student-livetrack/student-livetrack.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class='header'>\r\n  <ion-toolbar class=\"parentAppcolor\">\r\n    <ion-row style=\"align-items: center;\">\r\n      <ion-icon (click)=\"locationBack()\" class=\"icon-size\" name=\"arrow-back\"></ion-icon>\r\n      <ion-label> Live Track </ion-label>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<app-vtslivetrack></app-vtslivetrack>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/parent-app/student-livetrack/student-livetrack.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/parent-app/student-livetrack/student-livetrack.module.ts ***!
  \**************************************************************************/
/*! exports provided: StudentLivetrackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentLivetrackPageModule", function() { return StudentLivetrackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _student_livetrack_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./student-livetrack.page */ "./src/app/parent-app/student-livetrack/student-livetrack.page.ts");








var routes = [
    {
        path: '',
        component: _student_livetrack_page__WEBPACK_IMPORTED_MODULE_7__["StudentLivetrackPage"]
    }
];
var StudentLivetrackPageModule = /** @class */ (function () {
    function StudentLivetrackPageModule() {
    }
    StudentLivetrackPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_student_livetrack_page__WEBPACK_IMPORTED_MODULE_7__["StudentLivetrackPage"]]
        })
    ], StudentLivetrackPageModule);
    return StudentLivetrackPageModule;
}());



/***/ }),

/***/ "./src/app/parent-app/student-livetrack/student-livetrack.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/parent-app/student-livetrack/student-livetrack.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-size {\n  font-size: 18px;\n  padding: 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFyZW50LWFwcC9zdHVkZW50LWxpdmV0cmFjay9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXHBhcmVudC1hcHBcXHN0dWRlbnQtbGl2ZXRyYWNrXFxzdHVkZW50LWxpdmV0cmFjay5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhcmVudC1hcHAvc3R1ZGVudC1saXZldHJhY2svc3R1ZGVudC1saXZldHJhY2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhcmVudC1hcHAvc3R1ZGVudC1saXZldHJhY2svc3R1ZGVudC1saXZldHJhY2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tc2l6ZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiA5cHg7XHJcbn1cclxuIiwiLmljb24tc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogOXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/parent-app/student-livetrack/student-livetrack.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/parent-app/student-livetrack/student-livetrack.page.ts ***!
  \************************************************************************/
/*! exports provided: StudentLivetrackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentLivetrackPage", function() { return StudentLivetrackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/websocket.service */ "./src/app/services/websocket.service.ts");





var StudentLivetrackPage = /** @class */ (function () {
    function StudentLivetrackPage(location, router, websocketService) {
        this.location = location;
        this.router = router;
        this.websocketService = websocketService;
    }
    StudentLivetrackPage.prototype.wsResponse = function (string) {
        throw new Error("Method not implemented.");
    };
    StudentLivetrackPage.prototype.locationBack = function () {
        this.router.navigateByUrl("student-dashboard");
    };
    StudentLivetrackPage.prototype.connectWebsocket = function () {
        // this.websocketService.setProductService(this);
        // if (!this.websocketService.isAlive("livetrack")) {
        //   this.websocketService.connectSocket(
        //     JSON.parse(localStorage.selectedVin),
        //     "livetrack"
        //   );
        // }
    };
    StudentLivetrackPage.prototype.wsOnError = function () {
        var _this = this;
        setTimeout(function () {
            _this.websocketService.connectSocket(JSON.parse(localStorage.selectedVin), "livetrack");
        }, 60000);
    };
    StudentLivetrackPage.prototype.ngOnInit = function () {
        this.connectWebsocket();
    };
    StudentLivetrackPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"] }
    ]; };
    StudentLivetrackPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-student-livetrack",
            template: __webpack_require__(/*! raw-loader!./student-livetrack.page.html */ "./node_modules/raw-loader/index.js!./src/app/parent-app/student-livetrack/student-livetrack.page.html"),
            styles: [__webpack_require__(/*! ./student-livetrack.page.scss */ "./src/app/parent-app/student-livetrack/student-livetrack.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"]])
    ], StudentLivetrackPage);
    return StudentLivetrackPage;
}());



/***/ })

}]);
//# sourceMappingURL=student-livetrack-student-livetrack-module-es5.js.map