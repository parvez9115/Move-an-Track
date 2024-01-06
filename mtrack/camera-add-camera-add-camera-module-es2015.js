(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["camera-add-camera-add-camera-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/camera/add-camera/add-camera.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/camera/add-camera/add-camera.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class='header'>\r\n  <ion-toolbar>\r\n      <ion-grid>\r\n          <ion-row></ion-row>\r\n          <ion-row>\r\n            <ion-col size=2>\r\n              <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n              <ion-col size='8.5' style='align-self: center;'>\r\n                  <ion-row>\r\n                      <ion-label> ADD DEVICE </ion-label>\r\n                  </ion-row>\r\n              </ion-col>\r\n              <!-- <ion-col size='1.5'>\r\n                      <ion-row><ion-icon style='font-size: 25px;' ios=\"md-search\" (click) ='searchStatus()' md=\"md-search\"></ion-icon></ion-row>\r\n                  </ion-col> -->\r\n              <ion-col size='1.5' style=\"padding: 0px; align-self: center;\">\r\n                <!-- <ion-icon (click) = \"doRefresh()\" name=\"refresh\"></ion-icon> -->\r\n              </ion-col>\r\n          </ion-row>\r\n      </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content force-overscroll=\"false\">\r\n  <!-- <video autoplay loop src=\"assets/Login Video/loginCCTV.mp4\"></video> -->\r\n  <div class=\"page-centered-element\">\r\n    <div class=\"content\">\r\n      <ion-row>\r\n    <form [formGroup]=\"addDevice\" >\r\n      <ion-item  class=\" labelSpacing\">\r\n          <ion-icon slot=\"start\" name=\"person\"></ion-icon>\r\n          <ion-input formControlName=\"deviceId\" placeholder=\"Serial Number\"></ion-input>\r\n      </ion-item>\r\n      <!-- <ion-item  class=\" labelSpacing\">\r\n        <ion-icon slot=\"start\" name=\"person\"></ion-icon>\r\n        <ion-input formControlName=\"UserName\" placeholder=\"User Name\"></ion-input>\r\n    </ion-item>\r\n      <ion-item class=\" labelSpacing\">\r\n          <ion-icon slot=\"start\" name=\"key\"></ion-icon>\r\n          <ion-input formControlName=\"password\" placeholder=\"Password\" (keyup.enter)=\"submitLogin()\" [type]=\"password_type\">\r\n          </ion-input>\r\n          <ion-icon slot=\"end\" [name]=\"eye_icon\" (click)=\"showHidePass()\"></ion-icon>\r\n      </ion-item> -->\r\n  </form>\r\n</ion-row>\r\n\r\n<div class=\"buttons-container\">\r\n  <ion-row class=\"center-button\">\r\n        <ion-button (click) = \"addNewDevice()\"\r\n        shape=\"round\" expand=\"block\">\r\n        <ion-icon name=\"log-in\" class=\"iconSize\"></ion-icon>\r\n    </ion-button>\r\n  </ion-row>\r\n  </div>\r\n  </div>\r\n  </div>\r\n\r\n \r\n  \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/camera/add-camera/add-camera.module.ts":
/*!********************************************************!*\
  !*** ./src/app/camera/add-camera/add-camera.module.ts ***!
  \********************************************************/
/*! exports provided: AddCameraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCameraPageModule", function() { return AddCameraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_camera_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-camera.page */ "./src/app/camera/add-camera/add-camera.page.ts");








const routes = [
    {
        path: '',
        component: _add_camera_page__WEBPACK_IMPORTED_MODULE_6__["AddCameraPage"]
    }
];
let AddCameraPageModule = class AddCameraPageModule {
};
AddCameraPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_add_camera_page__WEBPACK_IMPORTED_MODULE_6__["AddCameraPage"]]
    })
], AddCameraPageModule);



/***/ }),

/***/ "./src/app/camera/add-camera/add-camera.page.scss":
/*!********************************************************!*\
  !*** ./src/app/camera/add-camera/add-camera.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-centered-element {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nvideo {\n  height: 100%;\n}\n\nion-button {\n  --background: linear-gradient(197deg, rgb(255 0 0 / 82%) 0%, rgb(197 26 26 / 86%) 13.5%, rgb(177 24 24 / 64%) 33.33%, rgb(193 14 14 / 80%) 100%) !important;\n}\n\n.content {\n  text-align: center;\n}\n\n.content .buttons-container {\n  margin-top: 30px;\n}\n\n.labelSpacing {\n  width: 100%;\n}\n\n.iconSize {\n  width: 50px;\n  height: 35px;\n}\n\n.center-button {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.bottomLink {\n  position: absolute;\n  bottom: 0;\n  left: 25%;\n  font-size: 10px;\n}\n\n.register {\n  font-size: 13px;\n  color: #2196F3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtZXJhL2FkZC1jYW1lcmEvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxjYW1lcmFcXGFkZC1jYW1lcmFcXGFkZC1jYW1lcmEucGFnZS5zY3NzIiwic3JjL2FwcC9jYW1lcmEvYWRkLWNhbWVyYS9hZGQtY2FtZXJhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0FDRUo7O0FEQUE7RUFDSSwySkFBQTtBQ0dKOztBRERFO0VBQ0Usa0JBQUE7QUNJSjs7QURGSTtFQUNFLGdCQUFBO0FDSU47O0FEQ0U7RUFDRSxXQUFBO0FDRUo7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0VKOztBRENBO0VBQ0ksd0JBQUE7VUFBQSx1QkFBQTtBQ0VKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNFSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jYW1lcmEvYWRkLWNhbWVyYS9hZGQtY2FtZXJhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNlbnRlcmVkLWVsZW1lbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbnZpZGVve1xyXG4gICAgaGVpZ2h0OiAxMDAlXHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE5N2RlZywgcmdiKDI1NSAwIDAgLyA4MiUpIDAlLCByZ2IoMTk3IDI2IDI2IC8gODYlKSAxMy41JSwgcmdiKDE3NyAyNCAyNCAvIDY0JSkgMzMuMzMlLCByZ2IoMTkzIDE0IDE0IC8gODAlKSAxMDAlKSAhaW1wb3J0YW50O1xyXG59XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICAgLmJ1dHRvbnMtY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGFiZWxTcGFjaW5ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pY29uU2l6ZXtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG4uY2VudGVyLWJ1dHRvbntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYm90dG9tTGlua3tcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5yZWdpc3RlcntcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjMjE5NkYzO1xyXG59IiwiLnBhZ2UtY2VudGVyZWQtZWxlbWVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxudmlkZW8ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxOTdkZWcsIHJnYigyNTUgMCAwIC8gODIlKSAwJSwgcmdiKDE5NyAyNiAyNiAvIDg2JSkgMTMuNSUsIHJnYigxNzcgMjQgMjQgLyA2NCUpIDMzLjMzJSwgcmdiKDE5MyAxNCAxNCAvIDgwJSkgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVudCAuYnV0dG9ucy1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubGFiZWxTcGFjaW5nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pY29uU2l6ZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5jZW50ZXItYnV0dG9uIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ib3R0b21MaW5rIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDI1JTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ucmVnaXN0ZXIge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMjE5NkYzO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/camera/add-camera/add-camera.page.ts":
/*!******************************************************!*\
  !*** ./src/app/camera/add-camera/add-camera.page.ts ***!
  \******************************************************/
/*! exports provided: AddCameraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCameraPage", function() { return AddCameraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AddCameraPage = class AddCameraPage {
    constructor(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
    }
    addNewDevice() {
        Android.addDeviceInAdmin(this.addDevice.value.deviceId, "admin", "inside123");
        setTimeout(() => {
            this.router.navigateByUrl('camera-list');
        }, 2000);
    }
    ngOnInit() {
        this.addDevice = this.formBuilder.group({
            deviceId: ['vvhg', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
};
AddCameraPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddCameraPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-camera',
        template: __webpack_require__(/*! raw-loader!./add-camera.page.html */ "./node_modules/raw-loader/index.js!./src/app/camera/add-camera/add-camera.page.html"),
        styles: [__webpack_require__(/*! ./add-camera.page.scss */ "./src/app/camera/add-camera/add-camera.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AddCameraPage);



/***/ })

}]);
//# sourceMappingURL=camera-add-camera-add-camera-module-es2015.js.map