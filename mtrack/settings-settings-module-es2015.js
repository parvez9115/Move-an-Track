(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"myPlatform != 'desktop'\">\r\n  <ion-toolbar mode=\"md\" [ngClass]=\"{'appHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\">\r\n    <ion-grid  style=\"padding-bottom:8px;\">\r\n      <ion-row>\r\n        <ion-col size=\"2\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-col>\r\n        <ion-col size=\"8.5\">\r\n          <ion-label style=\"font-size: 20px;font-weight: bold;\"> Settings </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-header *ngIf=\"myPlatform == 'desktop'\">\r\n  <ion-toolbar mode=\"md\" [ngClass]=\"{'appHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\">\r\n    <ion-grid  style=\"padding-bottom:8px;\">\r\n      <ion-row>\r\n        <ion-col size=\"2\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-col>\r\n        <ion-col size=\"8.5\">\r\n          <ion-label class=\"headercolour\"> Settings </ion-label>\r\n        </ion-col>\r\n        <ion-col size='1.5' style=\"padding: 0px;\">\r\n          <ion-row >\r\n              <ion-col size='3' style=\"align-self: center;\"> \r\n                 \r\n              </ion-col>\r\n             <ion-col *ngIf='myPlatform ==\"desktop\"' size='9'>\r\n              <ion-img [src]=\"app.logo\"></ion-img>\r\n             </ion-col>\r\n          </ion-row>\r\n      </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <app-overall-settings [pageType] = \"pageType\"></app-overall-settings>\r\n  <!-- <ion-row *ngIf='pageType == \"Vin\"'>\r\n    <ion-col size=12 class=\"cardHeader \">\r\n      Vehicle Settings\r\n    </ion-col>\r\n    <ion-col size=12 class=\"paddingZero\">\r\n      <ion-row style=\" align-items: center;\">\r\n        <ion-col style='text-align: center;' size=2 class=\"paddingZero\">\r\n          <svg width=\"30\" height=\"30\" viewBox=\"0 0 800 800\"\r\n            style=\"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd\">\r\n            <path attr.fill=\"{{watchStatus==true ? '#002544' : '#FF0000'}}\"\r\n              d=\"M430 586.53c-38.76,0 -72.57,-8.35 -101.64,-30.26 -23.48,-17.69 -42.12,-38.46 -54.23,-65.66 -25.5,-57.32 -16.5,-119.47 21.29,-169.22 5.71,-7.52 14.31,-14.96 20.32,-20.98 3.66,-3.66 6.82,-5.64 11.1,-8.87 45.82,-34.58 114.25,-42.08 166.23,-15.87 26.01,13.11 22.96,12.83 41.25,28.02 2.68,2.23 3.36,2.15 5.71,4.95 21.61,25.86 34.09,41.43 42.37,77.52 6.04,26.29 6.13,44.87 0.72,71.06 -5.44,26.3 -15.66,47.2 -32.06,67.85 -3.66,4.61 -6.09,6.85 -9.91,11.41 -4.97,5.94 -14.96,13.85 -21.32,18.65 -8.52,6.42 -15.1,9.99 -24.99,14.97 -16.11,8.1 -41.32,16.43 -64.84,16.43zm-99.92 -203.83c6.3,3.33 13.53,5.52 20.45,8.87 6.9,3.34 13.46,5.7 19.95,9.35l38.2 21.74c-7.98,10.9 -69.47,36.48 -78.6,41.3 4.87,20.89 32.99,45.12 56.14,54.44 25.57,10.31 56.37,9.23 80.65,-2.91 50.26,-25.13 71.85,-78.41 50.51,-132.25 -9.01,-22.73 -28.38,-40.94 -49.62,-51.62 -42.27,-21.25 -92.62,-9.51 -123.98,27.48 -3.87,4.57 -12.27,17.49 -13.7,23.6zm-247.79 41.3l14.63 18.67c4.77,6.26 10.17,11.51 15.24,18.07 22.98,29.66 86.65,83.79 113.99,101.83l53.31 30.62c34.19,17.15 88.84,34.64 131.89,34.64 55.33,0 83.37,-4.63 132.85,-24.35 23.09,-9.21 55.22,-26.56 75.53,-40.37l47.71 -36.22c28.49,-25.39 34.46,-31.2 58.63,-57.28l30.51 -36.1c2.23,-2.99 5.13,-7.56 7.8,-9.51 -2.05,-3.07 -4.1,-6.53 -6.46,-9.53 -15.48,-19.68 -54.17,-64.69 -72.14,-78.4l-36.15 -30.46c-6.52,-5.21 -11.83,-9.35 -19,-14.3 -22.47,-15.51 -37.38,-24.8 -62.53,-37.39 -34.95,-17.51 -88.82,-35.08 -132.77,-35.08 -55.33,0 -83.37,4.62 -132.86,24.34 -8.3,3.32 -15.62,6.58 -23.01,10.29 -32.56,16.33 -73.09,42.11 -100.23,66.3 -43.92,39.15 -55.7,51.86 -89.88,93.97 -2.86,3.52 -4.72,6.76 -7.06,10.26z\" />\r\n          </svg>\r\n        </ion-col>\r\n        <ion-col size=8 class=\"paddingZero\">\r\n          Watch Mode\r\n        </ion-col>\r\n        <ion-col size=2 class=\"paddingZero\">\r\n          <ion-toggle class=\"toogleBtn\" [(ngModel)]='watchStatus' (click)=\"toggleWatchmode($event)\"\r\n            checked=\"{{watchStatus}}\"></ion-toggle>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n\r\n    <ion-col *ngIf='this.watchStatus == true' size=12 class=\"cardHeader \">\r\n      Watchmode Settings\r\n    </ion-col>\r\n    <ion-col *ngIf='this.watchStatus == true' size=12 class=\"paddingZero\">\r\n      <ion-row style=\" align-items: center;\">\r\n        <ion-col style='text-align: center;' size=2 class=\"paddingZero\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" width=\"6.2012mm\" height=\"6.2012mm\" version=\"1.1\"\r\n            style=\"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd\"\r\n            viewBox=\"0 0 220.12 220.12\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n            <path attr.fill=\"{{watchMode.powerCut==true ? '#002544' : '#FF0000'}}\"\r\n              d=\"M201.77 178.4c-17.9,-17.79 -26.98,-38.84 -26.98,-62.58l0 -34.54c0.17,-26.34 -17.54,-43.81 -32.76,-50.76 -4.29,-1.96 -8.81,-3.41 -13.42,-4.53l0 -2.35c0,-10.58 -8.61,-19.2 -19.2,-19.2 -10.59,0 -19.2,8.62 -19.2,19.2l0 2.71c-4.15,1.09 -8.22,2.42 -12.09,4.2 -16.82,7.75 -33.85,26.44 -34.01,50.71l0 34.56c0,24.54 -8.66,45.59 -25.75,62.57 -1.02,1.02 -1.39,2.51 -0.96,3.88 0.43,1.37 1.6,2.39 3.01,2.64l36.46 6.29c6.87,1.19 13.12,2.14 18.99,2.91 6.7,13.14 19.86,21.58 34.25,21.58 14.39,0 27.56,-8.45 34.26,-21.59 5.84,-0.78 12.05,-1.72 18.89,-2.9l36.45 -6.3c1.42,-0.24 2.57,-1.26 3.01,-2.63 0.43,-1.37 0.06,-2.86 -0.95,-3.87zm-47.14 -32.56l-82.4 -82.41c-1.86,-1.86 -4.87,-1.86 -6.74,0 -1.86,1.87 -1.86,4.88 0,6.74l82.41 82.4c0.93,0.93 2.15,1.44 3.36,1.44 1.22,0 2.44,-0.51 3.37,-1.44 1.86,-1.86 1.86,-4.87 0,-6.73zm-23.14 -29.02c0.43,0.5 1.07,0.86 1.72,0.71 0.64,0 1.29,-0.28 1.72,-0.71l11.53 -11.9c0.65,-0.72 0.86,-1.65 0.5,-2.58 -0.35,-0.86 -1.21,-1.43 -2.22,-1.43l-17.27 0 20 -34.68c0.43,-0.72 0.43,-1.51 0,-2.22 -0.43,-0.72 -1.22,-1.08 -2.08,-1.08l-45 0c-1.07,0 -2.01,0.5 -2.29,1.51l-3.66 12.18c-0.21,0.86 0,1.72 0.58,2.29l36.47 37.91zm-41.85 -16.13c-0.57,-0.57 -1.43,-0.78 -2.22,-0.64 -0.79,0.14 -1.43,0.72 -1.72,1.5l-7.31 20c-0.28,0.71 -0.07,1.57 0.36,2.22 0.43,0.64 1.36,1.14 2.08,1.14l0 0 0 0.43 21.06 0 -9.74 29.88c-0.36,1.08 0.07,2.08 1.07,2.65 0.36,0.22 0.79,0.22 1.22,0.22 0.65,0 1.29,-0.29 1.79,-0.79l22.43 -24.58c0.86,-0.93 0.86,-2.43 -0.07,-3.29l-28.95 -28.74zm8.24 -77.05c0,-6.35 5.17,-11.52 11.53,-11.52 6.35,0 11.52,5.17 11.52,11.52l0 0.75c-7.66,-1.09 -15.46,-1.03 -23.05,0.19l0 -0.94zm36.9 171.6c-5.84,7.92 -14.93,12.76 -24.67,12.76 -9.73,0 -18.83,-4.83 -24.66,-12.75l0 0c1.52,0.16 3,0.28 4.47,0.41 0.71,0.06 1.43,0.13 2.12,0.19 0.54,0.04 1.06,0.07 1.59,0.11 11.16,0.81 21.44,0.81 32.6,0.02 0.64,-0.05 1.26,-0.08 1.91,-0.13 0.84,-0.07 1.71,-0.16 2.56,-0.23 1.3,-0.11 2.59,-0.22 3.93,-0.36 0.05,-0.01 0.1,-0.01 0.15,-0.02z\" />\r\n          </svg>\r\n        </ion-col>\r\n        <ion-col size=8 class=\"paddingZero\">\r\n          Powercut\r\n        </ion-col>\r\n        <ion-col size=2 class=\"paddingZero\">\r\n          <ion-toggle class=\"toogleBtn\" [(ngModel)]='watchMode.powerCut' (click)=\"watchModeNeed('powerCut' ,watchMode.powerCut, $event, {'powerCut':!watchMode.powerCut, 'enginStatus': watchMode.enginStatus, 'sos': watchMode.sos})\"\r\n            checked=\"{{watchMode.powerCut}}\"></ion-toggle>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\" align-items: center;\">\r\n        <ion-col style='text-align: center;' size=2 class=\"paddingZero\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" width=\"6.6932mm\" height=\"5.6932mm\" version=\"1.1\"\r\n            style=\"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd\"\r\n            viewBox=\"0 0 169.32 169.32\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n            <path attr.fill=\"{{watchMode.enginStatus==true ? '#002544' : '#FF0000'}}\"\r\n              d=\"M128.81 65.34l11.03 0 0 24.83 11.04 0 0 -16.55 11.04 0 2.76 8.28 0 33.12 -2.76 8.27 -11.04 0 0 -16.56 -11.04 0 0 24.84 -11.03 0 -22.08 0 0 11.05 -38.62 0 0 -11.05 -8.29 0 -16.55 -11.04 -16.57 0 0 -11.03 -11.02 0 0 22.07 -11.04 0 0 -68.98 11.04 0 0 24.83 11.02 0 0 -11.05 13.81 0c0,-1.51 1.24,-2.75 2.76,-2.75 0.96,0 1.8,0.48 2.3,1.23l14.25 -9.51 0 -16.55 22.08 0 0 -11.04 -38.63 0 0 -11.05 88.3 0 0 11.05 -38.62 0 0 11.04 22.06 0 0 13.8c1.53,0 2.77,1.23 2.77,2.75l11.03 0zm-21.73 16.87c-2.31,-3.96 -5.45,-7.11 -9.42,-9.42 -3.97,-2.32 -8.3,-3.48 -13,-3.48 -4.7,0 -9.03,1.16 -13,3.48 -3.97,2.31 -7.11,5.46 -9.42,9.42 -2.32,3.98 -3.49,8.3 -3.49,13 0,4.71 1.17,9.03 3.49,13.01 2.31,3.96 5.45,7.11 9.42,9.42 3.97,2.32 8.3,3.47 13,3.47 4.7,0 9.03,-1.15 13,-3.47 3.97,-2.31 7.1,-5.46 9.42,-9.42 2.32,-3.98 3.47,-8.3 3.47,-13.01 0,-4.7 -1.15,-9.02 -3.47,-13zm-6.43 3.79l-2.9 -2.9c-0.41,-0.41 -0.88,-0.61 -1.47,-0.61 -0.56,0 -1.05,0.2 -1.45,0.61l-14.04 14.06 -6.3 -6.31c-0.41,-0.41 -0.89,-0.61 -1.47,-0.61 -0.57,0 -1.04,0.2 -1.45,0.61l-2.92 2.91c-0.39,0.4 -0.59,0.89 -0.59,1.45 0,0.57 0.2,1.06 0.59,1.46l7.77 7.76 2.9 2.9c0.41,0.41 0.88,0.61 1.47,0.61 0.56,0 1.05,-0.2 1.45,-0.61l2.91 -2.9 15.5 -15.51c0.41,-0.41 0.61,-0.89 0.61,-1.46 0,-0.58 -0.2,-1.05 -0.61,-1.46z\" />\r\n          </svg>\r\n        </ion-col>\r\n        <ion-col size=8 class=\"paddingZero\">\r\n          Engine Turned On\r\n        </ion-col>\r\n        <ion-col size=2 class=\"paddingZero\">\r\n          <ion-toggle class=\"toogleBtn\" [(ngModel)]='watchMode.enginStatus' (click)=\"watchModeNeed('engineStatus', watchMode.enginStatus, $event,  {'powerCut':watchMode.powerCut, 'enginStatus': !watchMode.enginStatus, 'sos': watchMode.sos})\"\r\n            checked=\"{{watchMode.enginStatus}}\"></ion-toggle>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\" align-items: center;\">\r\n        <ion-col style='text-align: center;' size=2 class=\"paddingZero\">\r\n          \r\n          <ion-icon [ngClass]='{\"red\": watchMode.sos === false, \"green\":watchMode.sos === true}' style=\"font-size: 6.6932mm;\" name=\"ios-alert\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=8 class=\"paddingZero\">\r\n          Sos\r\n        </ion-col>\r\n        <ion-col size=2 class=\"paddingZero\">\r\n          <ion-toggle class=\"toogleBtn\" [(ngModel)]='watchMode.sos' (click)=\"watchModeNeed('sos' ,watchMode.sos, $event,  {'powerCut':watchMode.powerCut, 'enginStatus': watchMode.enginStatus, 'sos': !watchMode.sos})\"\r\n            checked=\"{{watchMode.sos}}\"></ion-toggle>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row *ngIf='pageType != \"Vin\"'>\r\n    <ion-col size=12 class=\"cardHeader \">\r\n      Application Settings\r\n    </ion-col>\r\n    <ion-col size=12 class=\"paddingZero\">\r\n      <ion-row style=\" align-items: center; \">\r\n        <ion-col style='text-align: center;' size=2 class=\"paddingZero\">\r\n          <ion-icon class=\"iconSize\" name=\"notifications\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=8 class=\"paddingZero\">\r\n          Notification\r\n        </ion-col>\r\n        <ion-col size=2 class=\"paddingZero\">\r\n          <ion-toggle class=\"toogleBtn\" [(ngModel)]='notification' (click)='notificationSetting(notification)'\r\n            checked=\"{{notification}}\"></ion-toggle>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n    <ion-col size=12 class=\"paddingZero\">\r\n      <ion-row style=\" align-items: center; \">\r\n        <ion-col style='text-align: center;' size=2 class=\"paddingZero\">\r\n          <ion-icon class=\"iconSize\" name=\"map\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=8 class=\"paddingZero\">\r\n          Google Map\r\n        </ion-col>\r\n        <ion-col size=2 class=\"paddingZero\">\r\n          <ion-toggle class=\"toogleBtn\" [(ngModel)]='googleMap' (click)='changeMap()' checked=\"{{googleMap}}\">\r\n          </ion-toggle>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf='pageType != \"Vin\"'>\r\n    <ion-col size=12 class=\"cardHeader \">\r\n      Loading Page Settings\r\n    </ion-col>\r\n    <ion-col size=12 class=\"paddingZero\">\r\n      <ion-row style=\" align-items: center; \">\r\n        <ion-col style='text-align: center;' size=2 class=\"paddingZero\">\r\n          <ion-icon class=\"iconSize\" name=\"home\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=8 class=\"paddingZero\">\r\n          Dashboard\r\n        </ion-col>\r\n        <ion-col size=2 class=\"paddingZero\">\r\n          <ion-toggle class=\"toogleBtn\" [(ngModel)]='inItLoading.dashboard' (click)='inItLoader(\"dashboard\")'\r\n            checked=\"{{inItLoading.dashboard}}\"></ion-toggle>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\" align-items: center; \">\r\n        <ion-col style='text-align: center;' size=2 class=\"paddingZero\">\r\n          <ion-icon class=\"iconSize\" name=\"md-browsers\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=8 class=\"paddingZero\">\r\n          Grid View\r\n        </ion-col>\r\n        <ion-col size=2 class=\"paddingZero\">\r\n          <ion-toggle class=\"toogleBtn\" [(ngModel)]='inItLoading.gridView' (click)='inItLoader(\"gridView\")'\r\n            checked=\"{{inItLoading.gridView}}\"></ion-toggle>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=12 class=\"cardHeader\">\r\n      Alert Configuration\r\n    </ion-col>\r\n    <ion-col size=12>\r\n      <app-alert-settings></app-alert-settings>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n  <ion-row>\r\n    <ion-col size=12 class=\"cardHeader \">\r\n        One Wire Configuration\r\n    </ion-col>\r\n   <app-temperature-settings></app-temperature-settings>\r\n  </ion-row> -->\r\n</ion-content>"

/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");








const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_7__["SettingsPage"]
    }
];
let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_7__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-padding,\n[padding] {\n  padding-left: unset;\n  padding-right: unset;\n  -webkit-padding-start: var(--ion-padding, 16px);\n  padding-inline-start: var(--ion-padding, 0px);\n  -webkit-padding-end: var(--ion-padding, -16px);\n  padding-inline-end: var(--ion-padding, 13px);\n  padding-bottom: 8px;\n}\n\n.cardHeader {\n  text-align: center;\n  font-size: smaller;\n  background-color: #d0cdcd;\n  color: black;\n  font-weight: bold;\n  padding: 5px;\n}\n\n.colorCode {\n  --background-checked: #00ff00;\n  --background: #ff0000;\n  --handle-background-checked: #ffffff;\n}\n\n.toggle-label {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  width: 100px;\n  height: 35px;\n  border: 1px solid #808080;\n  margin: 40px auto;\n}\n\n.toggle-label input[type=checkbox] {\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.toggle-label input[type=checkbox] + .back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #ed1c24;\n  -webkit-transition: 150ms linear;\n  transition: 150ms linear;\n}\n\n.toggle-label input[type=checkbox]:checked + .back {\n  background: #00a651;\n  /*green*/\n}\n\n.toggle-label input[type=checkbox] + .back .toggle {\n  display: block;\n  position: absolute;\n  content: \" \";\n  background: #fff;\n  width: 50%;\n  height: 100%;\n  -webkit-transition: margin 150ms linear;\n  transition: margin 150ms linear;\n  border: 1px solid #808080;\n  border-radius: 0;\n}\n\n.toggle-label input[type=checkbox]:checked + .back .toggle {\n  margin-left: 50px;\n}\n\n.toggle-label .label {\n  display: block;\n  position: absolute;\n  width: 50%;\n  color: #ddd;\n  text-align: center;\n  font-size: 20px;\n  margin: 6px 0px;\n}\n\n.toggle-label .label.on {\n  left: 0px;\n}\n\n.toggle-label .label.off {\n  right: 0px;\n}\n\n.toggle-label input[type=checkbox]:checked + .back .label.on {\n  color: #fff;\n}\n\n.toggle-label input[type=checkbox] + .back .label.off {\n  color: #fff;\n}\n\n.toggle-label input[type=checkbox]:checked + .back .label.off {\n  color: #ddd;\n}\n\n.paddingZero {\n  padding: 0px;\n}\n\n.iconSize {\n  font-size: 25px;\n}\n\n.red {\n  color: #FF0000;\n}\n\n.green {\n  color: #002544;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxzZXR0aW5nc1xcc2V0dGluZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLCtDQUFBO0VBQ0EsNkNBQUE7RUFDQSw4Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNFRjs7QURDQTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QUREQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSUY7O0FERkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUFBLHdCQUFBO0FDS0Y7O0FESEE7RUFDRSxtQkFBQTtFQUFxQixRQUFBO0FDT3ZCOztBREpBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUFBLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ09GOztBRExBO0VBQ0UsaUJBQUE7QUNRRjs7QUROQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ1NGOztBRFBBO0VBQ0UsU0FBQTtBQ1VGOztBRFJBO0VBQ0UsVUFBQTtBQ1dGOztBRFJBO0VBQ0UsV0FBQTtBQ1dGOztBRFRBO0VBQ0UsV0FBQTtBQ1lGOztBRFZBO0VBQ0UsV0FBQTtBQ2FGOztBRFhBO0VBQ0UsWUFBQTtBQ2NGOztBRFhBO0VBQ0UsZUFBQTtBQ2NGOztBRFhBO0VBQ0UsY0FBQTtBQ2NGOztBRFpBO0VBQ0UsY0FBQTtBQ2VGIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1wYWRkaW5nLFxyXG5bcGFkZGluZ10ge1xyXG4gIHBhZGRpbmctbGVmdDogdW5zZXQ7XHJcbiAgcGFkZGluZy1yaWdodDogdW5zZXQ7XHJcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAwcHgpO1xyXG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAtMTZweCk7XHJcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTNweCk7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweDtcclxufVxyXG4uY2FyZEhlYWRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMGNkY2Q7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmNvbG9yQ29kZSB7XHJcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMwMGZmMDA7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmYwMDAwO1xyXG4gIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZmZmZjtcclxufVxyXG4udG9nZ2xlLWxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XHJcbiAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbn1cclxuLnRvZ2dsZS1sYWJlbCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4udG9nZ2xlLWxhYmVsIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIC5iYWNrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNlZDFjMjQ7XHJcbiAgdHJhbnNpdGlvbjogMTUwbXMgbGluZWFyO1xyXG59XHJcbi50b2dnbGUtbGFiZWwgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyAuYmFjayB7XHJcbiAgYmFja2dyb3VuZDogIzAwYTY1MTsgLypncmVlbiovXHJcbn1cclxuXHJcbi50b2dnbGUtbGFiZWwgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgLmJhY2sgLnRvZ2dsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDE1MG1zIGxpbmVhcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLnRvZ2dsZS1sYWJlbCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIC5iYWNrIC50b2dnbGUge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcbi50b2dnbGUtbGFiZWwgLmxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBjb2xvcjogI2RkZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbjogNnB4IDBweDtcclxufVxyXG4udG9nZ2xlLWxhYmVsIC5sYWJlbC5vbiB7XHJcbiAgbGVmdDogMHB4O1xyXG59XHJcbi50b2dnbGUtbGFiZWwgLmxhYmVsLm9mZiB7XHJcbiAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLnRvZ2dsZS1sYWJlbCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIC5iYWNrIC5sYWJlbC5vbiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnRvZ2dsZS1sYWJlbCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyAuYmFjayAubGFiZWwub2ZmIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4udG9nZ2xlLWxhYmVsIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgLmJhY2sgLmxhYmVsLm9mZiB7XHJcbiAgY29sb3I6ICNkZGQ7XHJcbn1cclxuLnBhZGRpbmdaZXJve1xyXG4gIHBhZGRpbmc6IDBweDtcclxuIFxyXG59XHJcbi5pY29uU2l6ZXtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5yZWR7XHJcbiAgY29sb3I6ICNGRjAwMDA7XHJcbn1cclxuLmdyZWVue1xyXG4gIGNvbG9yOiAjMDAyNTQ0O1xyXG59XHJcbiIsIi5pb24tcGFkZGluZyxcbltwYWRkaW5nXSB7XG4gIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAwcHgpO1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgLTE2cHgpO1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxM3B4KTtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cblxuLmNhcmRIZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwY2RjZDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uY29sb3JDb2RlIHtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMwMGZmMDA7XG4gIC0tYmFja2dyb3VuZDogI2ZmMDAwMDtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmZmZmO1xufVxuXG4udG9nZ2xlLWxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG59XG5cbi50b2dnbGUtbGFiZWwgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50b2dnbGUtbGFiZWwgaW5wdXRbdHlwZT1jaGVja2JveF0gKyAuYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2VkMWMyNDtcbiAgdHJhbnNpdGlvbjogMTUwbXMgbGluZWFyO1xufVxuXG4udG9nZ2xlLWxhYmVsIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAuYmFjayB7XG4gIGJhY2tncm91bmQ6ICMwMGE2NTE7XG4gIC8qZ3JlZW4qL1xufVxuXG4udG9nZ2xlLWxhYmVsIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgLmJhY2sgLnRvZ2dsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IG1hcmdpbiAxNTBtcyBsaW5lYXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi50b2dnbGUtbGFiZWwgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5iYWNrIC50b2dnbGUge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLnRvZ2dsZS1sYWJlbCAubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTAlO1xuICBjb2xvcjogI2RkZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogNnB4IDBweDtcbn1cblxuLnRvZ2dsZS1sYWJlbCAubGFiZWwub24ge1xuICBsZWZ0OiAwcHg7XG59XG5cbi50b2dnbGUtbGFiZWwgLmxhYmVsLm9mZiB7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi50b2dnbGUtbGFiZWwgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5iYWNrIC5sYWJlbC5vbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udG9nZ2xlLWxhYmVsIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgLmJhY2sgLmxhYmVsLm9mZiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udG9nZ2xlLWxhYmVsIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAuYmFjayAubGFiZWwub2ZmIHtcbiAgY29sb3I6ICNkZGQ7XG59XG5cbi5wYWRkaW5nWmVybyB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmljb25TaXplIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ucmVkIHtcbiAgY29sb3I6ICNGRjAwMDA7XG59XG5cbi5ncmVlbiB7XG4gIGNvbG9yOiAjMDAyNTQ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let SettingsPage = class SettingsPage {
    constructor(commonService, ajaxService, route, platform, alertController) {
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.route = route;
        this.platform = platform;
        this.alertController = alertController;
        this.app = { logo: 'logo.png' };
        this.inItLoading = {
            gridView: false,
            dashboard: false,
            mapView: false
        };
        this.watchMode = {
            powerCut: false,
            enginStatus: false,
            sos: false
        };
    }
    inItLoader(changer) {
        localStorage.setItem('inItPage', changer);
        if (changer == "gridView") {
            this.inItLoading.dashboard = false;
        }
        else {
            this.inItLoading.gridView = false;
        }
    }
    changeMap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (localStorage.mapAllowed != "undefined") {
                let map = JSON.parse(localStorage.mapAllowed);
                if (map[0].toLowerCase() == "googlemap") {
                    const alert = yield this.alertController.create({
                        header: 'Are you sure?',
                        backdropDismiss: false,
                        message: "The application get restart",
                        buttons: [{
                                text: 'Cancel',
                                role: 'cancel',
                                handler: data => {
                                    if (localStorage.map == "GoogleMap") {
                                        this.googleMap = true;
                                    }
                                    else {
                                        this.googleMap = false;
                                    }
                                }
                            },
                            {
                                text: 'Confirm',
                                handler: data => {
                                    if (localStorage.map == "GoogleMap") {
                                        this.googleMap = false;
                                        localStorage.map = "OpenLayer";
                                    }
                                    else {
                                        localStorage.map = "GoogleMap";
                                    }
                                    document.location.href = 'index.html';
                                }
                            }]
                    });
                    yield alert.present();
                }
                else {
                    this.googleMap = true;
                    this.commonService.presentAlert('Warning', "Sorry your not able to use this function.");
                }
            }
            else {
                this.commonService.presentAlert('Warning', "Sorry your not able to use this function.");
                this.googleMap = true;
            }
        });
    }
    watchModeNeed(selected, status, event, json) {
        let powercut = '';
        let enginStatus = '';
        let sos = '';
        let statusUpdate = '';
        if (json.powerCut) {
            powercut = '1';
        }
        if (json.enginStatus) {
            enginStatus = '2';
        }
        if (json.sos) {
            sos = '3';
        }
        if (!json.powerCut && !json.enginStatus && !json.sos) {
            statusUpdate = '0';
            this.watchStatus = false;
        }
        else {
            statusUpdate = powercut + enginStatus + sos;
        }
        console.log(parseInt(statusUpdate));
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + "/api/vts/company/assets/update/watchmode";
        let body = {
            "vin": this.data.vin,
            "value": parseInt(statusUpdate)
        };
        this.ajaxService.ajaxPutMethod(url, body)
            .subscribe(res => {
            this.data["watchmode"] = statusUpdate;
            localStorage.setItem("selectedVin", JSON.stringify(this.data));
            let data = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["storageVariable"].upDatedJsonData;
            data.liveDatas[this.data.vin]["watchmode"] = statusUpdate;
        });
    }
    toggleWatchmode(event) {
        let statusBitWatchmode = 0;
        if (event.currentTarget.checked != true) {
            statusBitWatchmode = 1;
            this.watchStatus = false;
        }
        else {
            this.watchStatus = true;
        }
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + "/api/vts/company/assets/update/watchmode";
        let body = {
            "vin": this.data.vin,
            "value": statusBitWatchmode.toString()
        };
        this.commonService.presentLoader();
        this.ajaxService.ajaxPutMethod(url, body)
            .subscribe(res => {
            console.log(res);
            if (res.length > 1) {
                this.commonService.dismissLoader();
                statusBitWatchmode = 0;
                if (this.watchStatus == true) {
                    statusBitWatchmode = 1;
                }
                this.data["watchmode"] = statusBitWatchmode;
                localStorage.setItem("selectedVin", JSON.stringify(this.data));
                let data = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["storageVariable"].upDatedJsonData;
                data.liveDatas[this.data.vin]["watchmode"] = statusBitWatchmode;
            }
            else {
                this.watchStatus = !this.watchStatus;
                this.commonService.dismissLoader();
                this.commonService.presentToast('Invalid credential');
            }
            this.watchModeUpdate();
        });
    }
    notificationSetting(enDis) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.notification = enDis;
            if (!this.notification) {
                let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + "/api/vts/update/company/settings/" + localStorage.corpId + "/pushNotificationStatus/Enable";
                this.ajaxService.ajaxGetWithString(url)
                    .subscribe(res => {
                    this.commonService.presentToast("Your notification enabled " + res);
                });
            }
            else {
                const alert = yield this.alertController.create({
                    header: 'Warning',
                    backdropDismiss: false,
                    message: "Are you sure you want to diable the app notification",
                    buttons: [{
                            text: 'Cancel',
                            role: 'cancel',
                            handler: data => {
                            }
                        },
                        {
                            text: 'Confirm',
                            handler: data => {
                                let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + "/api/vts/update/company/settings/" + localStorage.corpId + "/pushNotificationStatus/Disable";
                                this.ajaxService.ajaxGetWithString(url)
                                    .subscribe(res => {
                                    this.commonService.presentToast("Your notification disable " + res);
                                });
                            }
                        }]
                });
                yield alert.present();
            }
        });
    }
    watchModeUpdate() {
        this.data = JSON.parse(localStorage.selectedVin);
        if (this.data.hasOwnProperty("watchmode") && this.data.watchmode == 0) {
            this.watchStatus = false;
        }
        else {
            this.watchStatus = true;
            for (let i = 0; i < this.data.watchmode.toString().length; i++) {
                console.log(this.data.watchmode.toString()[i]);
                if (this.data.watchmode.toString()[i] == 1) {
                    this.watchMode.powerCut = true;
                }
                else if (this.data.watchmode.toString()[i] == 2) {
                    this.watchMode.enginStatus = true;
                }
                else if (this.data.watchmode.toString()[i] == 3) {
                    this.watchMode.sos = true;
                }
            }
        }
    }
    ngOnInit() {
        this.app["logo"] = localStorage.companyLogo;
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["app"].appName;
        if (localStorage.inItPage == 'dashboard' || localStorage.inItPage == undefined) {
            this.inItLoading.dashboard = true;
        }
        else if (localStorage.inItPage == 'gridView') {
            this.inItLoading.gridView = true;
        }
        if (localStorage.map == "GoogleMap") {
            this.googleMap = true;
        }
        else {
            this.googleMap = false;
        }
        this.pageType = this.route.snapshot.paramMap.get("type");
        if (this.pageType != "All") {
            // this.watchModeUpdate();
        }
        // let url = serverUrl.web + "/api/vts/company/preference/{'companyID':" + localStorage.corpId + ",'key':'pushNotificationStatus'}";
        // this.ajaxService.ajaxGetWithString(url)
        //   .subscribe(res => {
        //     if (res == "Enable") {
        //       this.notification = true;
        //     } else {
        //       this.notification = false;
        //     }
        //   })
    }
};
SettingsPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html"),
        styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
        _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map