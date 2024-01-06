(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alerts-tab-alerts-tab-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/alerts-tab/alerts-tab.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/alerts-tab/alerts-tab.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-grid class=\"appHeaderTitle ion-padding\"  style=\"padding-bottom:8px\">\r\n    <ion-row [@inOutAnimation] *ngIf=\"!showSearch\">\r\n      <ion-col size=\"2\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <ion-searchbar [(ngModel)]=\"searchInput\" debounce=\"500\" placeholder=\"Search\" animated class=\"noPad\">\r\n        </ion-searchbar>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"align-self: center;\" class=\"ion-align-self-end\"  class=\"ion-text-center\">\r\n        <ion-badge color=\"danger\">{{totalAlert}}</ion-badge>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-header> -->\r\n<ion-header class=\"header\">\r\n  <ion-toolbar>\r\n    <ion-grid>\r\n      <!-- -----Parent App----- -->\r\n      <ion-row\r\n        *ngIf=\"!showSearch && myPlatform !='desktop'&& name\"\r\n        style=\"align-items: center\"\r\n      >\r\n        <ion-col size=\"2\">\r\n          <ion-icon\r\n            (click)=\"locationBack()\"\r\n            class=\"icon-size\"\r\n            name=\"arrow-back\"\r\n          ></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"7.5\" style=\"align-self: center\">\r\n          <ion-row>\r\n            <ion-label style=\"font-size: 20px; font-weight: bold\">\r\n              Alerts\r\n            </ion-label>\r\n          </ion-row>\r\n        </ion-col>\r\n        <ion-col\r\n          (click)=\"clickShowSearch()\"\r\n          style=\"text-align: right; padding: 4px; padding-top: 9px\"\r\n          size=\"1\"\r\n        >\r\n          <ion-icon style=\"font-size: 27px\" name=\"search\"></ion-icon>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"2.5\">\r\n                <select style=\"padding: 0px 0px 0px 8px;border-radius: 10px;\"  class=\"input-item input-new\">\r\n                  <option value=\"\">Select Alert type </option>\r\n                  <option *ngFor=\"let alert of alertTypes\" [value]=\"alert\">{{alert}}</option>\r\n                </select>\r\n              </ion-col> -->\r\n        <ion-col size=\"1\" style=\"padding: 0px\">\r\n          <ion-row (click)=\"bellRouter()\">\r\n            <ion-col size=\"3\" style=\"align-self: center\">\r\n              <ion-img\r\n                src=\"assets/dashboard_background/bell.png\"\r\n                style=\"width: 22px; height: 22px\"\r\n              ></ion-img>\r\n              <ion-badge\r\n                color=\"danger\"\r\n                style=\"\r\n                  position: absolute;\r\n                  font-size: 7px;\r\n                  font-size: 9px;\r\n                  top: 6px;\r\n                  left: 17px;\r\n                  padding: 2px;\r\n                  color: white;\r\n                  font-weight: bold;\r\n                \"\r\n              >\r\n                {{totalAlert}}\r\n              </ion-badge>\r\n            </ion-col>\r\n\r\n            <ion-col *ngIf='myPlatform ==\"desktop\"' size=\"9\">\r\n              <ion-img [src]=\"app.logo\"></ion-img>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row\r\n        *ngIf=\"!showSearch && myPlatform !='desktop' && !name\"\r\n        style=\"align-items: center\"\r\n      >\r\n        <ion-col size=\"2\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-col>\r\n        <ion-col size=\"7.5\" style=\"align-self: center\">\r\n          <ion-row>\r\n            <ion-label style=\"font-size: 20px; font-weight: bold\">\r\n              Alerts\r\n            </ion-label>\r\n          </ion-row>\r\n        </ion-col>\r\n        <ion-col\r\n          (click)=\"clickShowSearch()\"\r\n          style=\"text-align: right; padding: 4px; padding-top: 9px\"\r\n          size=\"1\"\r\n        >\r\n          <ion-icon style=\"font-size: 27px\" name=\"search\"></ion-icon>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"2.5\">\r\n                <select style=\"padding: 0px 0px 0px 8px;border-radius: 10px;\"  class=\"input-item input-new\">\r\n                  <option value=\"\">Select Alert type </option>\r\n                  <option *ngFor=\"let alert of alertTypes\" [value]=\"alert\">{{alert}}</option>\r\n                </select>\r\n              </ion-col> -->\r\n        <ion-col size=\"1\" style=\"padding: 0px\">\r\n          <ion-row (click)=\"bellRouter()\">\r\n            <ion-col size=\"3\" style=\"align-self: center\">\r\n              <ion-img\r\n                src=\"assets/dashboard_background/bell.png\"\r\n                style=\"width: 22px; height: 22px\"\r\n              ></ion-img>\r\n              <ion-badge\r\n                color=\"danger\"\r\n                style=\"\r\n                  position: absolute;\r\n                  font-size: 7px;\r\n                  font-size: 9px;\r\n                  top: 6px;\r\n                  left: 17px;\r\n                  padding: 2px;\r\n                  color: white;\r\n                  font-weight: bold;\r\n                \"\r\n              >\r\n                {{totalAlert}}\r\n              </ion-badge>\r\n            </ion-col>\r\n\r\n            <ion-col *ngIf='myPlatform ==\"desktop\"' size=\"9\">\r\n              <ion-img [src]=\"app.logo\"></ion-img>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row\r\n        *ngIf=\"!showSearch && myPlatform =='desktop'\"\r\n        style=\"align-items: center\"\r\n      >\r\n        <ion-col size=\"2\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-col>\r\n        <ion-col size=\"7.5\" style=\"align-self: center\">\r\n          <ion-row>\r\n            <ion-label class=\"headercolour\"> Alerts </ion-label>\r\n          </ion-row>\r\n        </ion-col>\r\n        <ion-col\r\n          (click)=\"clickShowSearch()\"\r\n          style=\"text-align: right; padding: 4px; padding-top: 9px\"\r\n          size=\"1\"\r\n        >\r\n          <ion-icon style=\"font-size: 27px\" name=\"search\"></ion-icon>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"2.5\">\r\n              <select style=\"padding: 0px 0px 0px 8px;border-radius: 10px;\"  class=\"input-item input-new\">\r\n                <option value=\"\">Select Alert type </option>\r\n                <option *ngFor=\"let alert of alertTypes\" [value]=\"alert\">{{alert}}</option>\r\n              </select>\r\n            </ion-col> -->\r\n        <ion-col size=\"1\" style=\"padding: 0px\">\r\n          <ion-row (click)=\"bellRouter()\">\r\n            <ion-col size=\"3\" style=\"align-self: center\">\r\n              <ion-img\r\n                src=\"assets/dashboard_background/bell.png\"\r\n                style=\"width: 22px; height: 22px\"\r\n              ></ion-img>\r\n              <ion-badge\r\n                color=\"danger\"\r\n                style=\"\r\n                  position: absolute;\r\n                  font-size: 7px;\r\n                  font-size: 9px;\r\n                  top: 6px;\r\n                  left: 17px;\r\n                  padding: 2px;\r\n                  color: white;\r\n                  font-weight: bold;\r\n                \"\r\n              >\r\n                {{totalAlert}}\r\n              </ion-badge>\r\n            </ion-col>\r\n\r\n            <ion-col *ngIf='myPlatform ==\"desktop\"' size=\"9\">\r\n              <ion-img style=\"padding-left: 9px\" [src]=\"app.logo\"></ion-img>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row *ngIf=\"showSearch\" [@inOutAnimation]>\r\n        <ion-col size=\"11\">\r\n          <ion-searchbar\r\n            [(ngModel)]=\"searchInput\"\r\n            debounce=\"500\"\r\n            placeholder=\"Search\"\r\n            animated\r\n            class=\"noPad\"\r\n          >\r\n          </ion-searchbar>\r\n        </ion-col>\r\n        <ion-col (click)=\"clickShowSearch()\" size=\"1\">\r\n          <ion-icon\r\n            *ngIf=\"showSearch\"\r\n            style=\"font-size: 28px\"\r\n            name=\"close\"\r\n          ></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content (ionScroll)=\"scroll($event)\" [scrollEvents]=\"true\">\r\n  <app-alerts\r\n    [searchInput]=\"searchInput\"\r\n    mode=\"all\"\r\n    (total)=\"totalAlerts($event)\"\r\n  ></app-alerts>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/alerts-tab/alerts-tab.module.ts":
/*!*************************************************!*\
  !*** ./src/app/alerts-tab/alerts-tab.module.ts ***!
  \*************************************************/
/*! exports provided: AlertsTabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsTabPageModule", function() { return AlertsTabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _alerts_tab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alerts-tab.page */ "./src/app/alerts-tab/alerts-tab.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _alerts_tab_page__WEBPACK_IMPORTED_MODULE_6__["AlertsTabPage"]
    }
];
let AlertsTabPageModule = class AlertsTabPageModule {
};
AlertsTabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_alerts_tab_page__WEBPACK_IMPORTED_MODULE_6__["AlertsTabPage"]]
    })
], AlertsTabPageModule);



/***/ }),

/***/ "./src/app/alerts-tab/alerts-tab.page.scss":
/*!*************************************************!*\
  !*** ./src/app/alerts-tab/alerts-tab.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-badge {\n  --padding-top: 5px;\n  --padding-bottom: 5px;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  border-radius: 20px;\n}\n\n.ion-padding,\n[padding] {\n  padding-left: unset;\n  padding-right: unset;\n  -webkit-padding-start: var(--ion-padding, 16px);\n  padding-inline-start: var(--ion-padding, 0px);\n  -webkit-padding-end: var(--ion-padding, -16px);\n  padding-inline-end: var(--ion-padding, 13px);\n}\n\n.botPad {\n  padding-bottom: 4px;\n}\n\n.noPad {\n  padding: 0;\n}\n\n.botNoPad {\n  padding-bottom: 0;\n}\n\n.iconSize {\n  width: 22px;\n  height: 22px;\n}\n\n.fontLabel {\n  font-size: 12px;\n}\n\n.search {\n  position: fixed;\n  z-index: 13;\n  width: 40%;\n  left: 30%;\n  padding: 4px;\n  background: white;\n  /* top: 0px; */\n  /* height: 7px; */\n  margin: 0px;\n}\n\n.input-item {\n  height: 36px;\n  background-color: lightgray;\n  --padding-start:10px;\n}\n\n.input-new {\n  width: 100%;\n  border: none;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxlcnRzLXRhYi9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGFsZXJ0cy10YWJcXGFsZXJ0cy10YWIucGFnZS5zY3NzIiwic3JjL2FwcC9hbGVydHMtdGFiL2FsZXJ0cy10YWIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBOztFQUVFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsOENBQUE7RUFDQSw0Q0FBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7QUNFRjs7QURBQTtFQUNFLFVBQUE7QUNHRjs7QURBQTtFQUNFLGlCQUFBO0FDR0Y7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0dGOztBREFBO0VBQ0UsZUFBQTtBQ0dGOztBREFBO0VBQ0UsZUFBQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNHSjs7QUREQTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FDSUY7O0FERkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0cy10YWIvYWxlcnRzLXRhYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFkZ2Uge1xyXG4gIC0tcGFkZGluZy10b3A6IDVweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5pb24tcGFkZGluZyxcclxuW3BhZGRpbmddIHtcclxuICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xyXG4gIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMHB4KTtcclxuICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgLTE2cHgpO1xyXG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDEzcHgpO1xyXG59XHJcbi5ib3RQYWR7XHJcbiAgcGFkZGluZy1ib3R0b206IDRweDtcclxufVxyXG4ubm9QYWQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5ib3ROb1BhZCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5pY29uU2l6ZSB7XHJcbiAgd2lkdGg6IDIycHg7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4uZm9udExhYmVsIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5zZWFyY2h7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTM7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbGVmdDogMzAlO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAvKiB0b3A6IDBweDsgKi9cclxuICAgIC8qIGhlaWdodDogN3B4OyAqL1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmlucHV0LWl0ZW17XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAtLXBhZGRpbmctc3RhcnQ6MTBweDtcclxufVxyXG4uaW5wdXQtbmV3e1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3V0bGluZTpub25lO1xyXG59IiwiaW9uLWJhZGdlIHtcbiAgLS1wYWRkaW5nLXRvcDogNXB4O1xuICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNXB4O1xuICAtLXBhZGRpbmctZW5kOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5pb24tcGFkZGluZyxcbltwYWRkaW5nXSB7XG4gIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAwcHgpO1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgLTE2cHgpO1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxM3B4KTtcbn1cblxuLmJvdFBhZCB7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG59XG5cbi5ub1BhZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5ib3ROb1BhZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uaWNvblNpemUge1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xufVxuXG4uZm9udExhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uc2VhcmNoIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMztcbiAgd2lkdGg6IDQwJTtcbiAgbGVmdDogMzAlO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICAvKiB0b3A6IDBweDsgKi9cbiAgLyogaGVpZ2h0OiA3cHg7ICovXG4gIG1hcmdpbjogMHB4O1xufVxuXG4uaW5wdXQtaXRlbSB7XG4gIGhlaWdodDogMzZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAtLXBhZGRpbmctc3RhcnQ6MTBweDtcbn1cblxuLmlucHV0LW5ldyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/alerts-tab/alerts-tab.page.ts":
/*!***********************************************!*\
  !*** ./src/app/alerts-tab/alerts-tab.page.ts ***!
  \***********************************************/
/*! exports provided: AlertsTabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsTabPage", function() { return AlertsTabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AlertsTabPage = class AlertsTabPage {
    constructor(platform, menuController, router) {
        this.platform = platform;
        this.menuController = menuController;
        this.router = router;
        this.app = { logo: "logo.png" };
        this.alertTypes = ["ENGINE ON"];
        this.totalAlert = 0;
        this.showSearch = false;
        this.initialHeader = true;
    }
    searchActivity(task) {
        if (task == "open") {
            this.showSearch = true;
        }
        else {
            this.showSearch = false;
            this.searchInput = "";
        }
    }
    clickShowSearch() {
        this.showSearch = !this.showSearch;
    }
    locationBack() {
        this.router.navigateByUrl("student-dashboard");
    }
    scroll(event) {
        if (event.detail.scrollTop > 0) {
            this.initialHeader = false;
        }
        else {
            this.initialHeader = true;
        }
    }
    totalAlerts(event) {
        this.totalAlert = event;
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.app["logo"] = localStorage.companyLogo;
            this.name = localStorage.getItem("AppName");
            this.myPlatform = this.platform.platforms()[0];
            if (this.myPlatform == "tablet") {
                this.myPlatform = "desktop";
            }
            this.subscription = this.platform.backButton.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (this.menuController.isOpen()) {
                    this.menuController.close();
                }
            }));
        });
    }
};
AlertsTabPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AlertsTabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-alerts-tab",
        template: __webpack_require__(/*! raw-loader!./alerts-tab.page.html */ "./node_modules/raw-loader/index.js!./src/app/alerts-tab/alerts-tab.page.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("inOutAnimation", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.7 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("0.7s ease-out")]),
            ]),
        ],
        styles: [__webpack_require__(/*! ./alerts-tab.page.scss */ "./src/app/alerts-tab/alerts-tab.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AlertsTabPage);



/***/ })

}]);
//# sourceMappingURL=alerts-tab-alerts-tab-module-es2015.js.map