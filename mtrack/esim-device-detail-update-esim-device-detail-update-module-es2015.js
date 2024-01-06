(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esim-device-detail-update-esim-device-detail-update-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-device-detail-update/esim-device-detail-update.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-device-detail-update/esim-device-detail-update.page.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons\n      *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\"\n      slot=\"start\"\n    >\n      <ion-icon\n        routerLink=\"/tabs-login/esim-dashboard\"\n        name=\"arrow-back\"\n        style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-grid>\n      <ion-row class=\"toolbar\">\n        <ion-title>Device Details Update</ion-title>\n        <ion-col *ngIf=\"myPlatform == 'desktop'\">\n          <ion-row style=\"margin: 0px; padding: 0; float: right\">\n            <ion-col style=\"margin-top: 0; margin-right: 25px\" class=\"tooltip\">\n              <ion-fab-button\n                size=\"small\"\n                class=\"fab-btn\"\n                href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/DevicesDetailUpdate.xlsx\"\n                download=\"sample.xlsx\"\n              >\n                <div class=\"excel-wrapper\"></div>\n              </ion-fab-button>\n              <span class=\"tooltiptext\">Device CA Update</span>\n            </ion-col>\n            <ion-col\n              style=\"margin-top: 0; margin-right: 25px\"\n              class=\"tooltipca\"\n            >\n              <ion-fab-button\n                size=\"small\"\n                class=\"fab-btn\"\n                href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/CACardStatusUpdate.xlsx\"\n                download=\"sample.xlsx\"\n              >\n                <div class=\"excel-wrapper\"></div>\n              </ion-fab-button>\n              <span class=\"tooltipcatext\">CA Status Update</span>\n            </ion-col>\n            <ion-col\n              style=\"margin-top: 0; margin-right: 25px\"\n              class=\"tooltipRenewal\"\n            >\n              <ion-fab-button\n                size=\"small\"\n                class=\"fab-btn\"\n                href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalDetailUpdate.xlsx\"\n                download=\"sample.xlsx\"\n              >\n                <div class=\"excel-wrapper\"></div>\n              </ion-fab-button>\n              <span class=\"tooltiprenewaltext\">Device Renewal Update</span>\n            </ion-col>\n\n            <ion-col style=\"margin-top: 0\" class=\"tooltipRenewal\">\n              <ion-fab-button\n                size=\"small\"\n                class=\"fab-btn\"\n                href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalCardStatusUpdate.xlsx\"\n                download=\"sample.xlsx\"\n              >\n                <div class=\"excel-wrapper\"></div>\n              </ion-fab-button>\n              <span class=\"tooltiprenewaltext\">Renewal Status Update</span>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"uploaderContent\">\n  <ion-row>\n    <ion-col *ngIf=\"myPlatform != 'desktop'\">\n      <ion-row style=\"margin: 0px; padding: 0; float: right\">\n        <ion-col style=\"margin-top: 0; margin-right: 25px\" class=\"tooltip\">\n          <ion-fab-button\n            size=\"small\"\n            class=\"fab-btn\"\n            href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/DevicesDetailUpdate.xlsx\"\n            download=\"sample.xlsx\"\n          >\n            <div class=\"excel-wrapper\"></div>\n          </ion-fab-button>\n          <span class=\"tooltiptext\">Device ca update</span>\n        </ion-col>\n        <ion-col\n          style=\"margin-top: 0; margin-right: 25px\"\n          class=\"tooltipRenewal\"\n        >\n          <ion-fab-button\n            size=\"small\"\n            class=\"fab-btn\"\n            href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalDetailUpdate.xlsx\"\n            download=\"sample.xlsx\"\n          >\n            <div class=\"excel-wrapper\"></div>\n          </ion-fab-button>\n          <span class=\"tooltiprenewaltext\">Device renewal 1 update</span>\n        </ion-col>\n\n        <ion-col style=\"margin-top: 0\" class=\"tooltipRenewal\">\n          <ion-fab-button\n            size=\"small\"\n            class=\"fab-btn\"\n            href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalCardStatusUpdate.xlsx\"\n            download=\"sample.xlsx\"\n          >\n            <div class=\"excel-wrapper\"></div>\n          </ion-fab-button>\n          <span class=\"tooltiprenewaltext\">Status update</span>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-card style=\"background-color: whitesmoke\">\n    <ion-row class=\"uploaderRow\">\n      <ion-col size=\"5.5\">\n        <form [formGroup]=\"deviceupdateform\">\n          <ion-card-title>Device CA Update:</ion-card-title>\n          <ion-card class=\"cardCenter\">\n            <ion-card-subtitle>Device CA Update:</ion-card-subtitle>\n            <ion-card-content>\n              <ion-row style=\"margin-top: -10px\">\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <input\n                    type=\"file\"\n                    (change)=\"onFileChange($event,'device ca update')\"\n                    formControlName=\"fileupload\"\n                  />\n                </ion-col>\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <ion-button\n                    size=\"small\"\n                    (click)=\"sendToServer('ca update')\"\n                    id=\"submitbtn\"\n                    [disabled]=\"!deviceupdateform.valid\"\n                    >Submit\n                  </ion-button>\n                  <ion-button\n                    (click)=\"clear('ca update')\"\n                    size=\"small\"\n                    id=\"submitbtn\"\n                    >Clear\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </form></ion-col\n      >\n\n      <ion-col size=\"5.5\">\n        <form [formGroup]=\"caupdateform\">\n          <ion-card-title>CA Status Update:</ion-card-title>\n\n          <ion-card class=\"cardCenter\">\n            <ion-card-subtitle>CA Status Update:</ion-card-subtitle>\n            <ion-card-content>\n              <ion-row style=\"margin-top: -10px\">\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <input\n                    type=\"file\"\n                    (change)=\"onFileChange($event)\"\n                    formControlName=\"caupdate\"\n                  />\n                </ion-col>\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <ion-button\n                    size=\"small\"\n                    (click)=\"submit()\"\n                    id=\"submitbtn\"\n                    [disabled]=\"!caupdateform.valid\"\n                    >Submit\n                  </ion-button>\n                  <ion-button (click)=\"clears()\" size=\"small\" id=\"submitbtn\"\n                    >Clear\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </form></ion-col\n      >\n    </ion-row>\n  </ion-card>\n\n  <ion-card style=\"background-color: whitesmoke\">\n    <ion-card-title>Device Renewal Update:</ion-card-title>\n    <ion-row class=\"uploaderRow\">\n      <ion-col size=\"5.5\">\n        <form [formGroup]=\"devicerenewalupdateform1\">\n          <ion-card class=\"cardCenter\">\n            <ion-card-subtitle>Device Renewal 1 Update:</ion-card-subtitle>\n            <ion-card-content>\n              <ion-row style=\"margin-top: -10px\">\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <input\n                    type=\"file\"\n                    (change)=\"onFileChange($event,'renewal update')\"\n                    formControlName=\"fileuploadrenewal\"\n                  />\n                </ion-col>\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <ion-button\n                    size=\"small\"\n                    (click)=\"sendToServer('renewal update',1)\"\n                    id=\"submitbtn\"\n                    [disabled]=\"!devicerenewalupdateform1.valid\"\n                    >Submit\n                  </ion-button>\n                  <ion-button\n                    (click)=\"clear('renewal update',1)\"\n                    size=\"small\"\n                    id=\"submitbtn\"\n                    >Clear\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </form>\n      </ion-col>\n      <ion-col size=\"5.5\">\n        <form [formGroup]=\"devicerenewalupdateform2\">\n          <ion-card class=\"cardCenter\">\n            <ion-card-subtitle>Device Renewal 2 Update:</ion-card-subtitle>\n            <ion-card-content>\n              <ion-row style=\"margin-top: -10px\">\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <input\n                    type=\"file\"\n                    (change)=\"onFileChange($event,'renewal update')\"\n                    formControlName=\"fileuploadrenewal\"\n                  />\n                </ion-col>\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <ion-button\n                    size=\"small\"\n                    (click)=\"sendToServer('renewal update',2)\"\n                    id=\"submitbtn\"\n                    [disabled]=\"!devicerenewalupdateform2.valid\"\n                    >Submit\n                  </ion-button>\n                  <ion-button\n                    (click)=\"clear('renewal update',2)\"\n                    size=\"small\"\n                    id=\"submitbtn\"\n                    >Clear\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </form>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"apple\">\n      <ion-col size=\"5.5\">\n        <form [formGroup]=\"devicerenewalupdateform3\">\n          <ion-card class=\"cardCenter\">\n            <ion-card-subtitle>Device Renewal 3 Update:</ion-card-subtitle>\n            <ion-card-content>\n              <ion-row style=\"margin-top: -10px\">\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <input\n                    type=\"file\"\n                    (change)=\"onFileChange($event,'renewal update')\"\n                    formControlName=\"fileuploadrenewal\"\n                  />\n                </ion-col>\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <ion-button\n                    size=\"small\"\n                    (click)=\"sendToServer('renewal update',3)\"\n                    id=\"submitbtn\"\n                    [disabled]=\"!devicerenewalupdateform3.valid\"\n                    >Submit\n                  </ion-button>\n                  <ion-button\n                    (click)=\"clear('renewal update',3)\"\n                    size=\"small\"\n                    id=\"submitbtn\"\n                    >Clear\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </form>\n      </ion-col>\n      <ion-col size=\"5.5\">\n        <form [formGroup]=\"devicerenewalupdateform4\">\n          <ion-card class=\"cardCenter\">\n            <ion-card-content>\n              <ion-card-subtitle>Device Renewal 4 Update:</ion-card-subtitle>\n              <ion-row style=\"margin-top: -10px\">\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <input\n                    type=\"file\"\n                    (change)=\"onFileChange($event,'renewal update')\"\n                    formControlName=\"fileuploadrenewal\"\n                  />\n                </ion-col>\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <ion-button\n                    size=\"small\"\n                    (click)=\"sendToServer('renewal update',4)\"\n                    id=\"submitbtn\"\n                    [disabled]=\"!devicerenewalupdateform4.valid\"\n                    >Submit\n                  </ion-button>\n                  <ion-button\n                    (click)=\"clear('renewal update',4)\"\n                    size=\"small\"\n                    id=\"submitbtn\"\n                    >Clear\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </form>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"uploader\">\n      <ion-col size=\"5.88\">\n        <form [formGroup]=\"devicerenewalupdateform5\">\n          <ion-card class=\"cardCenter\" style=\"margin-left: 75px\">\n            <ion-card-subtitle>Device Renewal 5 Update:</ion-card-subtitle>\n            <ion-card-content>\n              <ion-row style=\"margin-top: -10px\">\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <input\n                    type=\"file\"\n                    (change)=\"onFileChange($event,'renewal update')\"\n                    formControlName=\"fileuploadrenewal\"\n                  />\n                </ion-col>\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <ion-button\n                    size=\"small\"\n                    (click)=\"sendToServer('renewal update',5)\"\n                    id=\"submitbtn\"\n                    [disabled]=\"!devicerenewalupdateform5.valid\"\n                    >Submit\n                  </ion-button>\n                  <ion-button\n                    (click)=\"clear('renewal update',5)\"\n                    size=\"small\"\n                    id=\"submitbtn\"\n                    >Clear\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card style=\"background-color: whitesmoke\">\n    <ion-card-title>Renewal Status Update:</ion-card-title>\n    <ion-row class=\"uploaderRow\">\n      <ion-col size=\"5.5\">\n        <form [formGroup]=\"statusupdateone\">\n          <ion-card class=\"cardCenter\">\n            <ion-card-subtitle>Renewal Status 1 Update:</ion-card-subtitle>\n\n            <ion-card-content>\n              <ion-row>\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <input\n                    type=\"file\"\n                    (change)=\"onFileChange($event,'status update')\"\n                    formControlName=\"renewalstatusupdate\"\n                  />\n                </ion-col>\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <ion-button\n                    size=\"small\"\n                    (click)=\"sendToServer('status update',1)\"\n                    id=\"submitbtn\"\n                    [disabled]=\"!statusupdateone.valid\"\n                    >Submit\n                  </ion-button>\n                  <ion-button (click)=\"clear()\" size=\"small\" id=\"submitbtn\"\n                    >Clear\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </form>\n      </ion-col>\n\n      <ion-col size=\"5.5\">\n        <form [formGroup]=\"statusupdatetwo\">\n          <ion-card class=\"cardCenter\">\n            <ion-card-subtitle>Renewal Status 2 Update:</ion-card-subtitle>\n            <ion-card-content>\n              <ion-row style=\"margin-top: -10px\">\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <input\n                    type=\"file\"\n                    (change)=\"onFileChange($event,'status update')\"\n                    formControlName=\"renewalstatusupdate\"\n                  />\n                </ion-col>\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <ion-button\n                    size=\"small\"\n                    (click)=\"sendToServer('status update',2)\"\n                    id=\"submitbtn\"\n                    [disabled]=\"!statusupdatetwo.valid\"\n                    >Submit\n                  </ion-button>\n                  <ion-button (click)=\"clear()\" size=\"small\" id=\"submitbtn\"\n                    >Clear\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </form>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"apple\">\n      <ion-col size=\"5.5\">\n        <form [formGroup]=\"statusupdatethree\">\n          <ion-card class=\"cardCenter\">\n            <ion-card-subtitle>Renewal Status 3 Update:</ion-card-subtitle>\n            <ion-card-content>\n              <ion-row style=\"margin-top: -10px\">\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <input\n                    type=\"file\"\n                    (change)=\"onFileChange($event,'status update')\"\n                    formControlName=\"renewalstatusupdate\"\n                  />\n                </ion-col>\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <ion-button\n                    size=\"small\"\n                    (click)=\"sendToServer('status update',3)\"\n                    id=\"submitbtn\"\n                    [disabled]=\"!statusupdatethree.valid\"\n                    >Submit\n                  </ion-button>\n                  <ion-button (click)=\"clear()\" size=\"small\" id=\"submitbtn\"\n                    >Clear\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </form>\n      </ion-col>\n      <ion-col size=\"5.5\">\n        <form [formGroup]=\"statusupdatefour\">\n          <ion-card class=\"cardCenter\">\n            <ion-card-subtitle>Renewal Status 4 Update:</ion-card-subtitle>\n            <ion-card-content>\n              <ion-row style=\"margin-top: -10px\">\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <input\n                    type=\"file\"\n                    (change)=\"onFileChange($event,'status update')\"\n                    formControlName=\"renewalstatusupdate\"\n                  />\n                </ion-col>\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <ion-button\n                    size=\"small\"\n                    (click)=\"sendToServer('status update',4)\"\n                    id=\"submitbtn\"\n                    [disabled]=\"!statusupdatefour.valid\"\n                    >Submit\n                  </ion-button>\n                  <ion-button (click)=\"clear()\" size=\"small\" id=\"submitbtn\"\n                    >Clear\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </form>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"uploader\">\n      <ion-col size=\"5.88\">\n        <form [formGroup]=\"statusupdatefive\">\n          <ion-card class=\"cardCenter\" style=\"margin-left: 75px\">\n            <ion-card-subtitle>Renewal Status 5 Update:</ion-card-subtitle>\n            <ion-card-content>\n              <ion-row style=\"margin-top: -10px\">\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <input\n                    type=\"file\"\n                    (change)=\"onFileChange($event,'status update')\"\n                    formControlName=\"renewalstatusupdate\"\n                  />\n                </ion-col>\n                <ion-col\n                  size=\"12\"\n                  size-sm=\"12\"\n                  size-lg=\"6\"\n                  size-md=\"12\"\n                  class=\"ion-text-center\"\n                >\n                  <ion-button\n                    size=\"small\"\n                    (click)=\"sendToServer('status update',5)\"\n                    id=\"submitbtn\"\n                    [disabled]=\"!statusupdatefive.valid\"\n                    >Submit\n                  </ion-button>\n                  <ion-button (click)=\"clear()\" size=\"small\" id=\"submitbtn\"\n                    >Clear\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/esim-device-detail-update/esim-device-detail-update.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-device-detail-update/esim-device-detail-update.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: EsimDeviceDetailUpdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimDeviceDetailUpdatePageModule", function() { return EsimDeviceDetailUpdatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _esim_device_detail_update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esim-device-detail-update.page */ "./src/app/delar-application/esim-device-detail-update/esim-device-detail-update.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");








const routes = [
    {
        path: "",
        component: _esim_device_detail_update_page__WEBPACK_IMPORTED_MODULE_6__["EsimDeviceDetailUpdatePage"],
    },
];
let EsimDeviceDetailUpdatePageModule = class EsimDeviceDetailUpdatePageModule {
};
EsimDeviceDetailUpdatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_esim_device_detail_update_page__WEBPACK_IMPORTED_MODULE_6__["EsimDeviceDetailUpdatePage"]],
    })
], EsimDeviceDetailUpdatePageModule);



/***/ }),

/***/ "./src/app/delar-application/esim-device-detail-update/esim-device-detail-update.page.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-device-detail-update/esim-device-detail-update.page.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  margin-top: 7px;\n  margin-left: 10%;\n}\n\n#myGrid {\n  border: 1px solid;\n}\n\n.akash {\n  padding-left: 8px;\n}\n\n#submitbtn {\n  --background: #6252ee !important;\n}\n\n.cardCenter {\n  display: grid;\n  border-left: 2px solid #6252ee;\n  background-color: white;\n}\n\n.uploaderRow {\n  -webkit-box-align: center;\n          align-items: center;\n  margin-left: 100px;\n}\n\n.uploader {\n  -webkit-box-align: center;\n          align-items: center;\n  margin-left: 35px;\n}\n\n.apple {\n  -webkit-box-align: center;\n          align-items: center;\n  margin-left: 100px;\n}\n\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\nion-card-title {\n  padding: 10px;\n}\n\nion-card-subtitle {\n  padding: 10px;\n}\n\nion-card-content {\n  padding: 0;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -15px;\n  right: -4px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  margin-top: -28px;\n  margin-left: -70px;\n  white-space: nowrap;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.tooltipRenewal {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltipRenewal .tooltiprenewaltext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  margin-top: -28px;\n  margin-left: -110px;\n  white-space: nowrap;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltipRenewal:hover .tooltiprenewaltext {\n  visibility: visible;\n}\n\n.tooltipca {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltipca .tooltipcatext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  margin-top: -28px;\n  white-space: nowrap;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltipca:hover .tooltipcatext {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1kZXZpY2UtZGV0YWlsLXVwZGF0ZS9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxlc2ltLWRldmljZS1kZXRhaWwtdXBkYXRlXFxlc2ltLWRldmljZS1kZXRhaWwtdXBkYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1kZXZpY2UtZGV0YWlsLXVwZGF0ZS9lc2ltLWRldmljZS1kZXRhaWwtdXBkYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQ0FBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSx5QkFBQTtVQUFBLG1CQUFBO0VBRUEsa0JBQUE7QUNFRjs7QURDQTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ0VGOztBRENBOztFQUVFLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFRjs7QURBQTtFQUNFLGFBQUE7QUNHRjs7QUREQTtFQUNFLGFBQUE7QUNJRjs7QURGQTtFQUNFLFVBQUE7QUNLRjs7QURIQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNNRjs7QURIQTtFQUNFLDJCQUFBO0FDTUY7O0FESEE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDTUY7O0FESEE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNLRjs7QURGQTtFQUNFLG1CQUFBO0FDS0Y7O0FERkE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDS0Y7O0FERkE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNJRjs7QUREQTtFQUNFLG1CQUFBO0FDSUY7O0FEREE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDSUY7O0FEREE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNHRjs7QURBQTtFQUNFLG1CQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWRldmljZS1kZXRhaWwtdXBkYXRlL2VzaW0tZGV2aWNlLWRldGFpbC11cGRhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gIG1hcmdpbi10b3A6IDdweDtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcblxyXG4jbXlHcmlkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxufVxyXG4uYWthc2gge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcblxyXG4jc3VibWl0YnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICM2MjUyZWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmRDZW50ZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNjI1MmVlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udXBsb2FkZXJSb3cge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcbi51cGxvYWRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMzVweDtcclxufVxyXG4uYXBwbGUge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcblxyXG4uc3VibWl0QnRuIHtcclxuICBtYXJnaW46IDBweCAxNHB4IDBweCAwcHg7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIC0tY29sb3I6ICM3YzY4Zjg7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjN2M2OGY4O1xyXG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xyXG59XHJcblxyXG4ucGRmLXdyYXBwZXIsXHJcbi5leGNlbC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZXhjZWxOZXcuc3ZnXCIpIG5vLXJlcGVhdDtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4uZmFiLWJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsYXZlbmRlcjtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTE1cHg7XHJcbiAgcmlnaHQ6IC00cHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4uZmFiLWJ0bjpob3ZlciB7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjYjZiNmI2O1xyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICBtYXJnaW4tdG9wOiAtMjhweDtcclxuICBtYXJnaW4tbGVmdDogLTcwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLnRvb2x0aXBSZW5ld2FsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udG9vbHRpcFJlbmV3YWwgLnRvb2x0aXByZW5ld2FsdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgbWFyZ2luLXRvcDogLTI4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMTBweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnRvb2x0aXBSZW5ld2FsOmhvdmVyIC50b29sdGlwcmVuZXdhbHRleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi50b29sdGlwY2Ege1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50b29sdGlwY2EgLnRvb2x0aXBjYXRleHQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIG1hcmdpbi10b3A6IC0yOHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgbWFyZ2luLWxlZnQ6IC04MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnRvb2x0aXBjYTpob3ZlciAudG9vbHRpcGNhdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG4iLCJpbnB1dCB7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuI215R3JpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG4uYWthc2gge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuI3N1Ym1pdGJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZENlbnRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzYyNTJlZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi51cGxvYWRlclJvdyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn1cblxuLnVwbG9hZGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59XG5cbi5hcHBsZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn1cblxuLnN1Ym1pdEJ0biB7XG4gIG1hcmdpbjogMHB4IDE0cHggMHB4IDBweDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogIzdjNjhmODtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjN2M2OGY4O1xuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcbn1cblxuLnBkZi13cmFwcGVyLFxuLmV4Y2VsLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZXhjZWxOZXcuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZmFiLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogbGF2ZW5kZXI7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xNXB4O1xuICByaWdodDogLTRweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLmZhYi1idG46aG92ZXIge1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogLTI4cHg7XG4gIG1hcmdpbi1sZWZ0OiAtNzBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi50b29sdGlwUmVuZXdhbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udG9vbHRpcFJlbmV3YWwgLnRvb2x0aXByZW5ld2FsdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogLTI4cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTEwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udG9vbHRpcFJlbmV3YWw6aG92ZXIgLnRvb2x0aXByZW5ld2FsdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi50b29sdGlwY2Ege1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvb2x0aXBjYSAudG9vbHRpcGNhdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogLTI4cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50b29sdGlwY2E6aG92ZXIgLnRvb2x0aXBjYXRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-device-detail-update/esim-device-detail-update.page.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/delar-application/esim-device-detail-update/esim-device-detail-update.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: EsimDeviceDetailUpdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimDeviceDetailUpdatePage", function() { return EsimDeviceDetailUpdatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_9__);










let EsimDeviceDetailUpdatePage = class EsimDeviceDetailUpdatePage {
    constructor(ajaxService, router, commonService, modalController, formBuilder, platform) {
        this.ajaxService = ajaxService;
        this.router = router;
        this.commonService = commonService;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.name = false;
        this.willDownload = false;
        this.output = "";
        this.companyId = localStorage.getItem("userName");
        this.imeiIssues = [];
        this.excellKeyValidRenewal = false;
        this.excellKeyValidca = false;
        this.excellKeyValid = false;
    }
    clear(data, renewals) {
        if (data == "ca update") {
            this.deviceupdateform.patchValue({
                fileupload: "",
            });
        }
        else if (renewals == 1) {
            this.devicerenewalupdateform1.patchValue({
                fileuploadrenewal: "",
            });
        }
        else if (renewals == 2) {
            this.devicerenewalupdateform2.patchValue({
                fileuploadrenewal: "",
            });
        }
        else if (renewals == 3) {
            this.devicerenewalupdateform3.patchValue({
                fileuploadrenewal: "",
            });
        }
        else if (renewals == 4) {
            this.devicerenewalupdateform4.patchValue({
                fileuploadrenewal: "",
            });
        }
        else if (renewals == 5) {
            this.devicerenewalupdateform5.patchValue({
                fileuploadrenewal: "",
            });
        }
        else if (data == "renewal update") {
            this.devicerenewalupdateform1.patchValue({
                fileuploadrenewal: "",
            });
            this.devicerenewalupdateform2.patchValue({
                fileuploadrenewal: "",
            });
            this.devicerenewalupdateform3.patchValue({
                fileuploadrenewal: "",
            });
            this.devicerenewalupdateform4.patchValue({
                fileuploadrenewal: "",
            });
            this.devicerenewalupdateform5.patchValue({
                fileuploadrenewal: "",
            });
        }
        else {
            this.statusupdateone.patchValue({
                renewalstatusupdate: "",
            });
            this.statusupdatetwo.patchValue({
                renewalstatusupdate: "",
            });
            this.statusupdatethree.patchValue({
                renewalstatusupdate: "",
            });
            this.statusupdatefour.patchValue({
                renewalstatusupdate: "",
            });
            this.statusupdatefive.patchValue({
                renewalstatusupdate: "",
            });
        }
    }
    clears() {
        this.caupdateform.patchValue({
            caupdate: "",
        });
    }
    onFileChange(ev, update) {
        if (update == "device ca update") {
            var fileName = ev.srcElement.files[0];
            this.name = fileName.name.includes(".xlsx");
            if (this.name == true) {
                this.dataString = [];
                let workBook = null;
                let jsonData = null;
                const reader = new FileReader();
                const file = ev.srcElement.files[0];
                reader.onload = (event) => {
                    const data = reader.result;
                    workBook = xlsx__WEBPACK_IMPORTED_MODULE_9__["read"](data, { type: "binary" });
                    jsonData = workBook.SheetNames.reduce((initial, name) => {
                        const sheet = workBook.Sheets[name];
                        initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].sheet_to_json(sheet);
                        return initial;
                    }, {});
                    let json = [];
                    for (let i = 0; i < jsonData["Sheet1"].length; i++) {
                        jsonData["Sheet1"][i]["imeino"] =
                            jsonData["Sheet1"][i]["imeino"].toString();
                        json.push(jsonData["Sheet1"][i]);
                    }
                    this.dataString = json;
                    this.output = this.dataString.slice(0, 300).concat("...");
                    // this.sendToServer(dataString);
                };
                reader.readAsBinaryString(file);
            }
            else {
                this.commonService.presentToast("Please insert only excel file (.xlsx)");
            }
        }
        else if (update == "renewal update") {
            var fileName = ev.srcElement.files[0];
            this.name = fileName.name.includes(".xlsx");
            if (this.name == true) {
                this.dataString = [];
                let workBook = null;
                let jsonData = null;
                const reader = new FileReader();
                const file = ev.srcElement.files[0];
                reader.onload = (event) => {
                    const data = reader.result;
                    workBook = xlsx__WEBPACK_IMPORTED_MODULE_9__["read"](data, { type: "binary" });
                    jsonData = workBook.SheetNames.reduce((initial, name) => {
                        const sheet = workBook.Sheets[name];
                        initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].sheet_to_json(sheet);
                        return initial;
                    }, {});
                    let json = [];
                    for (let i = 0; i < jsonData["Sheet1"].length; i++) {
                        jsonData["Sheet1"][i]["imeino"] =
                            jsonData["Sheet1"][i]["imeino"].toString();
                        jsonData["Sheet1"][i]["renewalrequestdate"] =
                            jsonData["Sheet1"][i]["renewalrequestdate"].toString();
                        json.push(jsonData["Sheet1"][i]);
                    }
                    this.dataStringRenewal = json;
                    this.output = this.dataString.slice(0, 300).concat("...");
                    // this.sendToServer(dataString);
                };
                reader.readAsBinaryString(file);
            }
            else {
                this.commonService.presentToast("Please insert only excel file (.xlsx)");
            }
        }
        else if (update == "status update") {
            var fileName = ev.srcElement.files[0];
            this.name = fileName.name.includes(".xlsx");
            if (this.name == true) {
                this.dataString = [];
                let workBook = null;
                let jsonData = null;
                const reader = new FileReader();
                const file = ev.srcElement.files[0];
                reader.onload = (event) => {
                    const data = reader.result;
                    workBook = xlsx__WEBPACK_IMPORTED_MODULE_9__["read"](data, { type: "binary" });
                    jsonData = workBook.SheetNames.reduce((initial, name) => {
                        const sheet = workBook.Sheets[name];
                        initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].sheet_to_json(sheet);
                        return initial;
                    }, {});
                    let json = [];
                    for (let i = 0; i < jsonData["Sheet1"].length; i++) {
                        jsonData["Sheet1"][i]["imeino"] =
                            jsonData["Sheet1"][i]["imeino"].toString();
                        jsonData["Sheet1"][i]["cardactivationdate"] =
                            jsonData["Sheet1"][i]["cardactivationdate"].toString();
                        jsonData["Sheet1"][i]["cardenddate"] =
                            jsonData["Sheet1"][i]["cardenddate"].toString();
                        jsonData["Sheet1"][i]["comment"] =
                            jsonData["Sheet1"][i]["comment"].toString();
                        json.push(jsonData["Sheet1"][i]);
                    }
                    this.dataStringstatusupdate = json;
                    this.output = this.dataString.slice(0, 300).concat("...");
                    // this.sendToServer(dataString);
                };
                reader.readAsBinaryString(file);
            }
            else {
                this.commonService.presentToast("Please insert only excel file (.xlsx)");
            }
        }
        else {
            var fileName = ev.srcElement.files[0];
            this.name = fileName.name.includes(".xlsx");
            if (this.name == true) {
                this.dataString = [];
                let workBook = null;
                let jsonData = null;
                const reader = new FileReader();
                const file = ev.srcElement.files[0];
                reader.onload = (event) => {
                    const data = reader.result;
                    workBook = xlsx__WEBPACK_IMPORTED_MODULE_9__["read"](data, { type: "binary" });
                    jsonData = workBook.SheetNames.reduce((initial, name) => {
                        const sheet = workBook.Sheets[name];
                        initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].sheet_to_json(sheet);
                        return initial;
                    }, {});
                    let json = [];
                    for (let i = 0; i < jsonData["Sheet1"].length; i++) {
                        jsonData["Sheet1"][i]["imeino"] =
                            jsonData["Sheet1"][i]["imeino"].toString();
                        jsonData["Sheet1"][i]["cardactivationdate"] =
                            jsonData["Sheet1"][i]["cardactivationdate"].toString();
                        jsonData["Sheet1"][i]["cardenddate"] =
                            jsonData["Sheet1"][i]["cardenddate"].toString();
                        jsonData["Sheet1"][i]["cardstatus"] =
                            jsonData["Sheet1"][i]["cardstatus"].toString();
                        jsonData["Sheet1"][i]["comment"] =
                            jsonData["Sheet1"][i]["comment"].toString();
                        json.push(jsonData["Sheet1"][i]);
                    }
                    this.dataStringca = json;
                    this.output = this.dataString.slice(0, 300).concat("...");
                    // this.sendToServer(dataString);
                };
                reader.readAsBinaryString(file);
            }
            else {
                this.commonService.presentToast("Please insert only excel file (.xlsx)");
            }
        }
    }
    sendToServer(data, renewals) {
        if (data == "ca update") {
            if (this.dataString.length == 0) {
                this.commonService.presentToast("Check your excell file,don't enter blank spaces");
            }
            else {
                var excellKeys = Object.keys(this.dataString[0]);
                for (var i = 0; i < excellKeys.length; i++) {
                    if (excellKeys[i] == "vltdno" ||
                        excellKeys[i] == "boxno" ||
                        excellKeys[i] == "slotno" ||
                        excellKeys[i] == "carequestdate") {
                        console.log("present");
                        this.excellKeyValid = true;
                    }
                }
                if (this.name == true && this.excellKeyValid == true) {
                    this.imeiIssues = [];
                    this.willDownload = true;
                    const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/saveEsimDetailUpdate?renewalno=";
                    this.ajaxService
                        .ajaxPostWithBody(url, this.dataString)
                        .subscribe((res) => {
                        // console.log(res);
                        // res == "[]"
                        //   ? this.commonService.showConfirm(
                        //       "Please insert a value excell file only"
                        //     )
                        //   : this.commonService.showConfirm("");
                        if (res.message == "IMEI No Updated Successfully") {
                            this.commonService.showConfirm(res.message);
                            this.clear("ca update");
                        }
                        else {
                            this.commonService.showConfirm(res.message);
                        }
                    });
                }
                else {
                    this.commonService.presentToast("Please insert valid excel file (.xlsx)");
                }
            }
        }
        else if (data == "renewal update") {
            if (this.dataStringRenewal.length == 0) {
                this.commonService.presentToast("Check your excell file,don't enter blank spaces");
            }
            else {
                var excellKeys = Object.keys(this.dataStringRenewal[0]);
                for (var i = 0; i < excellKeys.length; i++) {
                    if (excellKeys[i] == "renewalrequestdate") {
                        console.log("present");
                        this.excellKeyValidRenewal = true;
                    }
                }
                if (this.name == true && this.excellKeyValidRenewal == true) {
                    this.imeiIssues = [];
                    this.willDownload = true;
                    const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
                        "/esim/saveEsimRenewalDetailUpdate?renewalno=" +
                        renewals;
                    this.ajaxService
                        .ajaxPostWithBody(url, this.dataStringRenewal)
                        .subscribe((res) => {
                        // console.log(res);
                        // res == "[]"
                        //   ? this.commonService.showConfirm(
                        //       "Please insert a value excell file only"
                        //     )
                        //   : this.commonService.showConfirm("");
                        if (res.message == "IMEI No Updated Successfully") {
                            this.commonService.showConfirm(res.message);
                            this.clear("renewal update");
                        }
                        else {
                            this.commonService.showConfirm(res.message);
                        }
                    });
                }
                else {
                    this.commonService.presentToast("Please insert valid excel file (.xlsx)");
                }
            }
        }
        // checking excell keys is valid or not
        else if (data == "status update") {
            if (this.dataStringstatusupdate.length == 0) {
                this.commonService.presentToast("Check your excell file,don't enter blank spaces");
            }
            else {
                var excellKeys = Object.keys(this.dataStringstatusupdate[0]);
                for (var i = 0; i < excellKeys.length; i++) {
                    if (excellKeys[i] == "imeino" ||
                        excellKeys[i] == "cardactivationdate" ||
                        excellKeys[i] == "cardenddate" ||
                        excellKeys[i] == "comment") {
                        console.log("present");
                        this.excellKeyValidRenewal = true;
                    }
                }
                if (this.name == true && this.excellKeyValidRenewal == true) {
                    this.imeiIssues = [];
                    this.willDownload = true;
                    const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
                        "/esim/saveEsimRenewalStatusUpdate?renewalno=" +
                        renewals +
                        "&createdby=" +
                        localStorage.getItem("userName");
                    this.ajaxService
                        .ajaxPostWithBody(url, this.dataStringstatusupdate)
                        .subscribe((res) => {
                        // console.log(res);
                        // res == "[]"
                        //   ? this.commonService.showConfirm(
                        //       "Please insert a value excell file only"
                        //     )
                        //   : this.commonService.showConfirm("");
                        if (res.message == "Esim Renewal Status Saved Successfully") {
                            this.commonService.showConfirm(res.message);
                            this.clear();
                        }
                        else {
                            this.commonService.showConfirm(res.message);
                        }
                    });
                }
                else {
                    this.commonService.presentToast("Please insert valid excel file (.xlsx)");
                }
            }
        }
    }
    submit() {
        if (this.dataStringca.length == 0) {
            this.commonService.presentToast("Check your excell file,don't enter blank spaces");
        }
        else {
            var excellKeys = Object.keys(this.dataStringca[0]);
            for (var i = 0; i < excellKeys.length; i++) {
                if (excellKeys[i] == "imeino" ||
                    excellKeys[i] == "cardactivationdate" ||
                    excellKeys[i] == "cardenddate" ||
                    excellKeys[i] == "cardstatus" ||
                    excellKeys[i] == "comment") {
                    console.log("present");
                    this.excellKeyValidca = true;
                }
            }
            if (this.name == true && this.excellKeyValidca == true) {
                this.imeiIssues = [];
                this.willDownload = true;
                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
                    "/esim/saveEsimCAStatusUpdate?createdby=" +
                    localStorage.getItem("userName");
                this.ajaxService
                    .ajaxPostWithBody(url, this.dataStringca)
                    .subscribe((res) => {
                    // console.log(res);
                    // res == "[]"
                    //   ? this.commonService.showConfirm(
                    //       "Please insert a value excell file only"
                    //     )
                    //   : this.commonService.showConfirm("");
                    if (res.message == "Esim CA Status Saved Successfully") {
                        this.commonService.showConfirm(res.message);
                        this.clears();
                    }
                    else {
                        this.commonService.showConfirm(res.message);
                    }
                });
            }
            else {
                this.commonService.presentToast("Please insert valid excel file (.xlsx)");
            }
        }
    }
    ionViewWillEnter() {
        this.clear("ca update");
        this.clear("renewal update");
        this.clear();
        this.clears();
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.deviceupdateform = this.formBuilder.group({
            fileupload: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.devicerenewalupdateform1 = this.formBuilder.group({
            fileuploadrenewal: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.devicerenewalupdateform2 = this.formBuilder.group({
            fileuploadrenewal: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.devicerenewalupdateform3 = this.formBuilder.group({
            fileuploadrenewal: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.devicerenewalupdateform4 = this.formBuilder.group({
            fileuploadrenewal: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.devicerenewalupdateform5 = this.formBuilder.group({
            fileuploadrenewal: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.statusupdateone = this.formBuilder.group({
            renewalstatusupdate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.statusupdatetwo = this.formBuilder.group({
            renewalstatusupdate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.statusupdatethree = this.formBuilder.group({
            renewalstatusupdate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.statusupdatefour = this.formBuilder.group({
            renewalstatusupdate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.statusupdatefive = this.formBuilder.group({
            renewalstatusupdate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.caupdateform = this.formBuilder.group({
            caupdate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
};
EsimDeviceDetailUpdatePage.ctorParameters = () => [
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridComponent"])
], EsimDeviceDetailUpdatePage.prototype, "myGrid", void 0);
EsimDeviceDetailUpdatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-esim-device-detail-update",
        template: __webpack_require__(/*! raw-loader!./esim-device-detail-update.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-device-detail-update/esim-device-detail-update.page.html"),
        styles: [__webpack_require__(/*! ./esim-device-detail-update.page.scss */ "./src/app/delar-application/esim-device-detail-update/esim-device-detail-update.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], EsimDeviceDetailUpdatePage);



/***/ })

}]);
//# sourceMappingURL=esim-device-detail-update-esim-device-detail-update-module-es2015.js.map