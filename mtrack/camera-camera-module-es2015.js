(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["camera-camera-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/camera/camera.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/camera/camera.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class='header'>\r\n  <ion-toolbar>\r\n      <ion-grid>\r\n          <ion-row></ion-row>\r\n          <ion-row>\r\n              <ion-col size='2'>\r\n                <ion-menu-button></ion-menu-button>\r\n              </ion-col>\r\n              <ion-col size='8.5' style='align-self: center;'>\r\n                  <ion-row>\r\n                      <ion-label> DEVICE </ion-label>\r\n                  </ion-row>\r\n              </ion-col>\r\n              <!-- <ion-col size='1.5'>\r\n                      <ion-row><ion-icon style='font-size: 25px;' ios=\"md-search\" (click) ='searchStatus()' md=\"md-search\"></ion-icon></ion-row>\r\n                  </ion-col> -->\r\n              <ion-col size='1.5' style=\"padding: 0px; align-self: center;\">\r\n                <ion-icon (click) = \"doRefresh()\" name=\"refresh\"></ion-icon>\r\n              </ion-col>\r\n          </ion-row>\r\n      </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-fab (click) = \"addDevice()\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button color=\"light\"> \r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n    <!-- <ion-fab-list side=\"top\">\r\n      <ion-fab-button (click) = \"addDevice()\">  <ion-icon name=\"list\"></ion-icon></ion-fab-button>\r\n      <ion-fab-button (click) = \"addDevThroughWifi()\"><ion-icon name=\"wifi\"></ion-icon></ion-fab-button>\r\n    </ion-fab-list> -->\r\n  </ion-fab>\r\n  <div style=\"padding-bottom: 20%\">\r\n  <ion-item *ngFor=\"let list of deviceList\">\r\n        <ion-avatar slot=\"start\">\r\n          <ion-icon style=\"font-size: xx-large;\" name=\"camera\"></ion-icon>\r\n        </ion-avatar>\r\n        <ion-label (click)=\"videoSteam(list)\">\r\n          <h2>{{list.devId}}</h2>\r\n          <p>Status: <span *ngIf=\"list.devStatus==0\"> Offline </span> \r\n            <span *ngIf=\"list.devStatus==1\"> Online</span></p>\r\n        </ion-label>\r\n            <ion-icon name=\"create\"></ion-icon>\r\n            <ion-icon name=\"information-circle\"></ion-icon>\r\n\r\n  </ion-item>\r\n</div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/camera/camera.module.ts":
/*!*****************************************!*\
  !*** ./src/app/camera/camera.module.ts ***!
  \*****************************************/
/*! exports provided: CameraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPageModule", function() { return CameraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _camera_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./camera.page */ "./src/app/camera/camera.page.ts");







const routes = [
    {
        path: '',
        component: _camera_page__WEBPACK_IMPORTED_MODULE_6__["CameraPage"]
    }
];
let CameraPageModule = class CameraPageModule {
};
CameraPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_camera_page__WEBPACK_IMPORTED_MODULE_6__["CameraPage"]]
    })
], CameraPageModule);



/***/ }),

/***/ "./src/app/camera/camera.page.scss":
/*!*****************************************!*\
  !*** ./src/app/camera/camera.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbWVyYS9jYW1lcmEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/camera/camera.page.ts":
/*!***************************************!*\
  !*** ./src/app/camera/camera.page.ts ***!
  \***************************************/
/*! exports provided: CameraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPage", function() { return CameraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");





let CameraPage = class CameraPage {
    constructor(commonServices, modalCtrl, router) {
        this.commonServices = commonServices;
        this.modalCtrl = modalCtrl;
        this.router = router;
    }
    addDevice() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.router.navigateByUrl('add-camera');
            // Android.addDeviceInAdmin("dvds","sdv","svs");
        });
    }
    videoSteam(data) {
        if (data.devStatus == 0) {
            this.commonServices.presentToast('Device is in offline');
        }
        else {
            Android.onClickVideo(data.devId, "imran@eitworks.com", "inside123");
        }
    }
    doRefresh() {
        var dat = Android.getDeviceList();
        this.deviceList = JSON.parse(dat);
        // this.deviceList=[{"devId":"123436789012","devStatus":0},{"devId":"9be435a75df691e1","devStatus":0}]
    }
    addDevThroughWifi() {
        Android.wifiAccess();
    }
    ngOnInit() {
        // var dat = Android.getDeviceList();
        // this.deviceList = JSON.parse(dat);
        this.deviceList = [{ "devId": "123436789012", "devStatus": 0 }, { "devId": "12345678", "devStatus": 0 }, { "devId": "1234567890", "devStatus": 0 }, { "devId": "123456789012", "devStatus": 0 }, { "devId": "123556688", "devStatus": 0 }, { "devId": "14012020665", "devStatus": 0 }, { "devId": "2357785147786", "devStatus": 0 }, { "devId": "23577851477868", "devStatus": 0 }, { "devId": "36853885", "devStatus": 0 }, { "devId": "4334546335686", "devStatus": 0 }, { "devId": "4796835838553", "devStatus": 0 }, { "devId": "79464863", "devStatus": 0 }, { "devId": "863583853", "devStatus": 0 }, { "devId": "863886363854", "devStatus": 0 }, { "devId": "9be435a75df691e1", "devStatus": 0 }];
        console.log(this.deviceList);
    }
};
CameraPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CameraPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-camera',
        template: __webpack_require__(/*! raw-loader!./camera.page.html */ "./node_modules/raw-loader/index.js!./src/app/camera/camera.page.html"),
        styles: [__webpack_require__(/*! ./camera.page.scss */ "./src/app/camera/camera.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], CameraPage);



/***/ })

}]);
//# sourceMappingURL=camera-camera-module-es2015.js.map