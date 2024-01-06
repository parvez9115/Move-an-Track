(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-activation-device-activation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-activation/device-activation.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-activation/device-activation.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"dealerHeader\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Device Activation</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"wrapper-container\">\r\n        <form [formGroup]=\"device\">\r\n          <ion-progress-bar [value]=\"count\"></ion-progress-bar>\r\n          <ion-row>\r\n            <ion-col size-sm=\"8\" size-md=\"8\" size-lg=\"6\" class=\"head\">\r\n              <label class=\"heading\">General details</label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <div>\r\n            <ion-row>\r\n              <ion-col\r\n                size=\"12\"\r\n                size-sm=\"12\"\r\n                size-md=\"6\"\r\n                size-lg=\"6\"\r\n                class=\"form_col\"\r\n              >\r\n                <ion-input\r\n                  type=\"text\"\r\n                  (ionChange)=\"progressbar()\"\r\n                  placeholder=\"Name-in-rc-book\"\r\n                  formControlName=\"customerName\"\r\n                ></ion-input>\r\n              </ion-col>\r\n              <ion-col\r\n                size=\"12\"\r\n                size-sm=\"12\"\r\n                size-md=\"6\"\r\n                size-lg=\"6\"\r\n                class=\"form_col\"\r\n              >\r\n                <ion-input\r\n                  type=\"text\"\r\n                  placeholder=\"Address-in-rc_book\"\r\n                  (ionChange)=\"progressbar()\"\r\n                  formControlName=\"address\"\r\n                ></ion-input>\r\n              </ion-col>\r\n              <ion-col\r\n                size=\"12\"\r\n                size-sm=\"12\"\r\n                size-md=\"6\"\r\n                size-lg=\"6\"\r\n                class=\"form_col\"\r\n              >\r\n                <ion-input\r\n                  type=\"text\"\r\n                  (ionChange)=\"progressbar()\"\r\n                  placeholder=\"Mobile number\"\r\n                  formControlName=\"mobile\"\r\n                ></ion-input>\r\n              </ion-col>\r\n              <ion-col\r\n                size=\"12\"\r\n                size-sm=\"12\"\r\n                size-md=\"6\"\r\n                size-lg=\"6\"\r\n                class=\"form_col\"\r\n              >\r\n                <ion-input\r\n                  type=\"text\"\r\n                  (ionChange)=\"progressbar()\"\r\n                  placeholder=\"Email id\"\r\n                  formControlName=\"mail\"\r\n                >\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n          <ion-row>\r\n            <ion-col size-sm=\"8\" size-md=\"8\" size-lg=\"6\" class=\"head\">\r\n              <label class=\"heading\" (click)=\"assestDetails()\"\r\n                >Assets details</label\r\n              >\r\n            </ion-col>\r\n          </ion-row>\r\n          <div>\r\n            <ion-row>\r\n              <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\">\r\n                <ion-input\r\n                  type=\"text\"\r\n                  placeholder=\"Imei number\"\r\n                  (ionChange)=\"progressbar()\"\r\n                  formControlName=\"imeiNO\"\r\n                ></ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\">\r\n                <ion-input\r\n                  type=\"text\"\r\n                  placeholder=\"Engine number\"\r\n                  (ionChange)=\"progressbar()\"\r\n                  formControlName=\"EngineNo\"\r\n                ></ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\">\r\n                <ion-input\r\n                  type=\"text\"\r\n                  placeholder=\"Chassis number\"\r\n                  (ionChange)=\"progressbar()\"\r\n                  formControlName=\"ChassisNo\"\r\n                ></ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\">\r\n                <ion-input\r\n                  type=\"text\"\r\n                  placeholder=\"Vehicle number\"\r\n                  (ionChange)=\"progressbar()\"\r\n                  formControlName=\"vehNo\"\r\n                ></ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n          <ion-row>\r\n            <ion-col size-sm=\"8\" size-md=\"8\" size-lg=\"6\" class=\"head\">\r\n              <label class=\"heading\">Documentation</label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <div>\r\n            <ion-row>\r\n              <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\">\r\n                <ion-item>\r\n                  <ion-label class=\"lab\">Select</ion-label>\r\n                  <ion-select\r\n                    ok-text=\"okay\"\r\n                    cancel-text=\"cancel\"\r\n                    formControlName=\"proof\"\r\n                  >\r\n                    <ion-select-option *ngFor=\"let list of data\"\r\n                      >{{list}}</ion-select-option\r\n                    >\r\n                  </ion-select>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\">\r\n                <ion-input\r\n                  type=\"text\"\r\n                  (ionChange)=\"progressbar()\"\r\n                  placeholder=\"Enter your proof number\"\r\n                  formControlName=\"proofNumber\"\r\n                ></ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n          <ion-row>\r\n            <ion-col size-sm=\"8\" size-md=\"8\" size-lg=\"6\" class=\"head\">\r\n              <label class=\"heading\">Add document</label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row style=\"margin: 6px\">\r\n            <input\r\n              type=\"file\"\r\n              class=\"documents\"\r\n              ng2FileSelect\r\n              [uploader]=\"uploader\"\r\n              multiple\r\n            />\r\n            <div class=\"down\">\r\n              <div\r\n                *ngFor=\"let item of uploader.queue; let id = index\"\r\n                style=\"margin: 10px\"\r\n              >\r\n                <ion-icon\r\n                  name=\"trash\"\r\n                  class=\"deleteIcon\"\r\n                  (click)=\"delete(id)\"\r\n                  (click)=\"deletes()\"\r\n                ></ion-icon>\r\n                {{ item?.file?.name }}\r\n              </div>\r\n              <ion-row\r\n                col-3\r\n                *ngFor=\"let photo of photos; let id = index\"\r\n                class=\"first\"\r\n              >\r\n                <ion-icon\r\n                  name=\"trash\"\r\n                  class=\"deleteIcon\"\r\n                  (click)=\"deletePhoto(id)\"\r\n                  (click)=\"deletes()\"\r\n                ></ion-icon>\r\n                <img [src]=\"photo\" *ngIf=\"photo\" />\r\n              </ion-row>\r\n            </div>\r\n          </ion-row>\r\n        </form>\r\n        <ion-row style=\"padding: 0px\">\r\n          <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button\r\n              id=\"btn\"\r\n              (click)=\"submit()\"\r\n              [disabled]=\"!device.valid\"\r\n              autocapitalize=\"characters\"\r\n              >Submit</ion-button\r\n            ></ion-col\r\n          ></ion-row\r\n        >\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/delar-application/device-activation/device-activation-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/device-activation/device-activation-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: DeviceActivationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceActivationPageRoutingModule", function() { return DeviceActivationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _device_activation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device-activation.page */ "./src/app/delar-application/device-activation/device-activation.page.ts");




const routes = [
    {
        path: '',
        component: _device_activation_page__WEBPACK_IMPORTED_MODULE_3__["DeviceActivationPage"]
    }
];
let DeviceActivationPageRoutingModule = class DeviceActivationPageRoutingModule {
};
DeviceActivationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeviceActivationPageRoutingModule);



/***/ }),

/***/ "./src/app/delar-application/device-activation/device-activation.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/delar-application/device-activation/device-activation.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DeviceActivationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceActivationPageModule", function() { return DeviceActivationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _device_activation_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-activation-routing.module */ "./src/app/delar-application/device-activation/device-activation-routing.module.ts");
/* harmony import */ var _device_activation_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./device-activation.page */ "./src/app/delar-application/device-activation/device-activation.page.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// import { IonicModule } from '@ionic/angular';
// import { DeviceActivationPageRoutingModule } from './device-activation-routing.module';
// import { DeviceActivationPage } from './device-activation.page';
// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     IonicModule,
//     DeviceActivationPageRoutingModule
//   ],
//   declarations: [DeviceActivationPage]
// })
// export class DeviceActivationPageModule {}







// import {ProgressBarModule} from "angular-progress-bar";


let DeviceActivationPageModule = class DeviceActivationPageModule {
};
DeviceActivationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
            _device_activation_routing_module__WEBPACK_IMPORTED_MODULE_6__["DeviceActivationPageRoutingModule"],
            // ProgressBarModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        ],
        declarations: [_device_activation_page__WEBPACK_IMPORTED_MODULE_7__["DeviceActivationPage"]]
    })
], DeviceActivationPageModule);



/***/ }),

/***/ "./src/app/delar-application/device-activation/device-activation.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/delar-application/device-activation/device-activation.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  background: #e8e8e8;\n  text-align: initial;\n}\n\nion-icon {\n  color: #fafcff;\n  -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);\n          clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);\n  padding: 1px 3px;\n  background-color: #6252ec;\n  vertical-align: bottom;\n}\n\n.sub {\n  margin-left: 27%;\n}\n\n.pro {\n  text-align: center;\n  margin-left: 50px;\n  font-size: 15px;\n  background-color: #3d6cec;\n  border-radius: 4px;\n}\n\n.lab {\n  font-family: sans-serif;\n}\n\n.cam {\n  border: 1px solid #3d6cec;\n  margin-left: 38%;\n}\n\n.text {\n  text-align: center;\n}\n\n.icon {\n  margin-left: 38%;\n}\n\n.drop-zone {\n  background-color: #f6f6f6;\n  border: dotted 3px #dedddd;\n  height: 30vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 20px 0;\n}\n\n.file-input-container input[type=file] {\n  display: none;\n}\n\n.first {\n  margin-left: 38%;\n  padding: 5px;\n}\n\n.nv-file-over {\n  border: dotted 3px red;\n}\n\n.heading {\n  text-align: center;\n  border-radius: 4px;\n  color: #6252ee;\n  font-weight: 500;\n  font-size: 20px;\n}\n\nion-progress-bar {\n  border-radius: 50px;\n  height: 7px;\n}\n\n.file {\n  margin-left: 8%;\n  border: 1px solid #3d6cec;\n}\n\n.down {\n  text-align: center;\n}\n\n.arrow {\n  position: absolute;\n  right: 0;\n}\n\n.wrapper-container {\n  text-align: center;\n}\n\nion-item {\n  --padding-end:0;\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  background: #e8e8e8;\n  --background: #e8e8e8;\n  color: #7a7b7b;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n}\n\n.form_col {\n  line-height: 18px;\n  font-size: 16px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .wrapper-container {\n    zoom: 80%;\n  }\n\n  #btn {\n    width: 40%;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .wrapper-container {\n    zoom: 90%;\n    padding: 20px;\n  }\n\n  #btn {\n    width: 20%;\n  }\n}\n\n#btn {\n  --background:#6252ee;\n}\n\n.head {\n  text-align: initial;\n}\n\nion-input {\n  --padding-start:17px;\n  height: 42px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLWFjdGl2YXRpb24vRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcZGV2aWNlLWFjdGl2YXRpb25cXGRldmljZS1hY3RpdmF0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLWFjdGl2YXRpb24vZGV2aWNlLWFjdGl2YXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREVFO0VBQ0UsY0FBQTtFQUNBLDREQUFBO1VBQUEsb0RBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURDRTtFQUNFLGdCQUFBO0FDRUo7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURERTtFQUVBLHVCQUFBO0FDR0Y7O0FEREU7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FDSUo7O0FERkU7RUFDQSxrQkFBQTtBQ0tGOztBREhFO0VBQ0EsZ0JBQUE7QUNNRjs7QURIRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxjQUFBO0FDTUo7O0FESEk7RUFFSSxhQUFBO0FDS1I7O0FET0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNKSjs7QURNRTtFQUNFLHNCQUFBO0FDSEo7O0FETUU7RUFDQyxrQkFBQTtFQUNDLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRE9FO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDSko7O0FET0U7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUNKSjs7QURNRTtFQUNFLGtCQUFBO0FDSEo7O0FES0U7RUFFRSxrQkFBQTtFQUNBLFFBQUE7QUNISjs7QURLRTtFQUNHLGtCQUFBO0FDRkw7O0FETUU7RUFDRSxlQUFBO0VBQ0MseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO1VBQUEscUJBQUE7QUNKTDs7QURNRTtFQUNHLGlCQUFBO0VBQ0EsZUFBQTtBQ0hMOztBRFFFO0VBQ0U7SUFDSSxTQUFBO0VDTE47O0VET0M7SUFDQyxVQUFBO0VDSkY7QUFDRjs7QURNRTtFQUNFO0lBQ0ksU0FBQTtJQUNBLGFBQUE7RUNKTjs7RURNRTtJQUNJLFVBQUE7RUNITjtBQUNGOztBREtFO0VBQ0Usb0JBQUE7QUNISjs7QURNRTtFQUNDLG1CQUFBO0FDSEg7O0FES0U7RUFDQyxvQkFBQTtFQUNBLFlBQUE7QUNGSCIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2RldmljZS1hY3RpdmF0aW9uL2RldmljZS1hY3RpdmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24taW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMyLCAyMzIsIDIzMik7XHJcbiAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xyXG4gIH1cclxuICBpb24taWNvbntcclxuICAgIGNvbG9yOiAjZmFmY2ZmO1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwJSAxMDAlKTtcclxuICAgIHBhZGRpbmc6IDFweCAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjI1MmVjOyBcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgfVxyXG4gIC5zdWJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjclO1xyXG4gIH1cclxuICAucHJve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig2MSwgMTA4LCAyMzYpOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgLmxhYntcclxuICAvLyAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmNhbXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MSwgMTA4LCAyMzYpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM4JTtcclxuICB9XHJcbiAgLnRleHR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuaWNvbntcclxuICBtYXJnaW4tbGVmdDogMzglO1xyXG4gIH1cclxuICAvLyBtdWx0aXBhcnQgZmlsZVxyXG4gIC5kcm9wLXpvbmUgeyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXI6IGRvdHRlZCAzcHggI2RlZGRkZDsgXHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgfVxyXG4gIC5maWxlLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICAgXHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIC8vICBsYWJlbCB7XHJcbiAgICAvLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAvLyAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDYxLCAxMDgsIDIzNik7IFxyXG4gICAgLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8vICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAvLyAgfVxyXG4gIH1cclxuICAuZmlyc3R7XHJcbiAgICBtYXJnaW4tbGVmdDogMzglO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICAubnYtZmlsZS1vdmVyIHsgXHJcbiAgICBib3JkZXI6IGRvdHRlZCAzcHggcmVkOyBcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRpbmd7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6NHB4O1xyXG4gICAgY29sb3I6IzYyNTJlZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICBpb24tcHJvZ3Jlc3MtYmFye1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGhlaWdodDogN3B4O1xyXG4gIH1cclxuICBcclxuICAuZmlsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MSwgMTA4LCAyMzYpO1xyXG4gIH1cclxuICAuZG93bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmFycm93e1xyXG4gICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICAud3JhcHBlci1jb250YWluZXJ7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBcclxuICAgIC8vbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgfVxyXG4gIGlvbi1pdGVte1xyXG4gICAgLS1wYWRkaW5nLWVuZDowO1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgIFxyXG4gICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgICAgLS1iYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gICAgIGNvbG9yOiAjN2E3YjdiO1xyXG4gICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICB9XHJcbiAgLmZvcm1fY29se1xyXG4gICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgIGZvbnQtc2l6ZTogMTZweDsgIFxyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweClhbmQobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgIC53cmFwcGVyLWNvbnRhaW5lcntcclxuICAgICAgICB6b29tOjgwJTtcclxuICAgIH1cclxuICAgI2J0bntcclxuICAgIHdpZHRoOjQwJTtcclxuICAgfVxyXG4gICAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjc2OHB4KXtcclxuICAgIC53cmFwcGVyLWNvbnRhaW5lcntcclxuICAgICAgICB6b29tOjkwJTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgI2J0bntcclxuICAgICAgICB3aWR0aDoyMCU7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbiAgI2J0bntcclxuICAgIC0tYmFja2dyb3VuZDojNjI1MmVlO1xyXG4gIFxyXG4gIH1cclxuICAuaGVhZHtcclxuICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcclxuICB9XHJcbiAgaW9uLWlucHV0e1xyXG4gICAtLXBhZGRpbmctc3RhcnQ6MTdweDtcclxuICAgaGVpZ2h0OiA0MnB4O1xyXG4gIH1cclxuXHJcbiIsImlvbi1pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIHRleHQtYWxpZ246IGluaXRpYWw7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6ICNmYWZjZmY7XG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCUsIDEwMCUgMTAwJSwgMCUgMTAwJSk7XG4gIHBhZGRpbmc6IDFweCAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MjUyZWM7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG5cbi5zdWIge1xuICBtYXJnaW4tbGVmdDogMjclO1xufVxuXG4ucHJvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q2Y2VjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5sYWIge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLmNhbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZDZjZWM7XG4gIG1hcmdpbi1sZWZ0OiAzOCU7XG59XG5cbi50ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAzOCU7XG59XG5cbi5kcm9wLXpvbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBib3JkZXI6IGRvdHRlZCAzcHggI2RlZGRkZDtcbiAgaGVpZ2h0OiAzMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi5maWxlLWlucHV0LWNvbnRhaW5lciBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZpcnN0IHtcbiAgbWFyZ2luLWxlZnQ6IDM4JTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ubnYtZmlsZS1vdmVyIHtcbiAgYm9yZGVyOiBkb3R0ZWQgM3B4IHJlZDtcbn1cblxuLmhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICM2MjUyZWU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLXByb2dyZXNzLWJhciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogN3B4O1xufVxuXG4uZmlsZSB7XG4gIG1hcmdpbi1sZWZ0OiA4JTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNkNmNlYztcbn1cblxuLmRvd24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbi53cmFwcGVyLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctZW5kOjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIC0tYmFja2dyb3VuZDogI2U4ZThlODtcbiAgY29sb3I6ICM3YTdiN2I7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cblxuLmZvcm1fY29sIHtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI2J0biB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIHpvb206IDkwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgI2J0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuI2J0biB7XG4gIC0tYmFja2dyb3VuZDojNjI1MmVlO1xufVxuXG4uaGVhZCB7XG4gIHRleHQtYWxpZ246IGluaXRpYWw7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy1zdGFydDoxN3B4O1xuICBoZWlnaHQ6IDQycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/device-activation/device-activation.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/delar-application/device-activation/device-activation.page.ts ***!
  \*******************************************************************************/
/*! exports provided: DeviceActivationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceActivationPage", function() { return DeviceActivationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");




//import { Camera,CameraOptions } from '@ionic-native/camera/ngx';







// import { Plugins, CameraResultType, Capacitor, FilesystemDirectory,
//   CameraPhoto, CameraSource } from '@capacitor/core';
let DeviceActivationPage = class DeviceActivationPage {
    constructor(filePath, formBuilder, http, alertController, router, ajaxService, commonService) {
        this.filePath = filePath;
        this.formBuilder = formBuilder;
        this.http = http;
        this.alertController = alertController;
        this.router = router;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.data = ["AADHAAR NO", "DRIVINGLICENCE NO", "VOTERID NO", "PASSPORT NO"];
        this.mob = "^((\\+91-?)|0)?[0-9]{10}$";
        this.e_Mail = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
        this.proof = "";
        this.selectedFile = null;
        this.show = true;
        this.document = false;
        this.assest = false;
        this.showFiles = false;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({});
        this.count = 0;
    }
    // hiding data and progress bar
    personDetails() {
        this.show = !this.show;
    }
    documents() {
        this.document = !this.document;
    }
    assestDetails() {
        this.assest = !this.assest;
    }
    showFile() {
        this.showFiles = !this.showFiles;
    }
    progressbar() {
        this.count = 0;
        if (this.device.value.ChassisNo != null &&
            this.device.value.ChassisNo.length >= 5) {
            this.count = this.count + 0.1;
        }
        if (this.device.value.customerName != null &&
            this.device.value.customerName.length >= 3) {
            this.count = this.count + 0.1;
        }
        if (this.device.value.address != null &&
            this.device.value.address.length >= 5) {
            this.count = this.count + 0.1;
        }
        if (this.device.value.imeiNO != null &&
            this.device.value.imeiNO.length === 15) {
            this.count = this.count + 0.1;
        }
        if (this.device.value.EngineNo != null &&
            this.device.value.EngineNo.length >= 4) {
            this.count = this.count + 0.1;
        }
        if (this.device.value.vehNo != null &&
            this.device.value.vehNo.length >= 4) {
            this.count = this.count + 0.1;
        }
        if (this.device.value.proof != null &&
            this.device.value.proof.length >= 4) {
            this.count = this.count + 0.1;
        }
        if (this.device.controls.mail.status === "VALID") {
            this.count = this.count + 0.1;
        }
        if (this.device.value.mobile != null &&
            this.device.value.mobile.length === 10) {
            this.count = this.count + 0.1;
        }
        if ((this.uploader.queue.length != null && this.uploader.queue.length >= 0) ||
            this.photos.length >= 0) {
            this.count = this.count + 0.04;
        }
    }
    //getting document file
    onFileChange(ev) {
        this.show = false;
        this.file = ev.srcElement.files[0];
    }
    submit() {
        this.commonService.presentToast("please wait until the process is finished");
        this.proof = this.device.value.proof;
        this.deviceActivation = {
            imeiNO: this.device.value.imeiNO,
            customerName: this.device.value.customerName,
            address: this.device.value.address,
            mobile: this.device.value.mobile,
            EngineNo: this.device.value.EngineNo,
            ChassisNo: this.device.value.ChassisNo,
            vehicleNo: this.device.value.vehNo,
        };
        this.deviceActivation[this.proof] = this.device.value.proofNumber;
        // this.commonService.presentToast("Device Activated");
        // starting ngselcet
        if (this.uploader.queue.length == 0 && this.photos.length == 0) {
            this.commonService.presentToast("please insert one document ");
        }
        else {
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/site/insert/s3";
            const file = this.uploader;
            // this.uploadFileToUrl = function(file, url){
            const testData = new FormData();
            for (var i = 0; i < file.queue.length; i++) {
                testData.append("file", file.queue[i]._file);
            }
            // if(this.photos > 0){
            // testData.append('file', );
            // for(var i=0;i<this.photos.length;i++){
            // testData.append('file', this.photos[i]);
            //   }
            //  }
            testData.append("data", JSON.stringify(this.deviceActivation));
            // testData.append('data',JSON.stringify(this.deviceActivation));
            this.ajaxService.ajaxPutMethod(url, testData).subscribe((res) => {
                console.log(res);
                res = JSON.parse(res);
                if (res.message == "Success") {
                    this.commonService.presentToast("device activated");
                    this.router.navigateByUrl("/dashboard");
                }
                else {
                    this.commonService.presentToast("please give an valid details to activate");
                }
                // this.commonService.presentToast("please insert one document ");
            });
            // }
            //   console.log(this.deviceActivation);
            //
            // this.ajaxService.ajaxPutMethod(url,this.deviceActivation)
            // .subscribe(res=>{
            //   console.log(res);
            //   // this.commonService.presentToast("please insert one document ");
            //   })
        }
        // const data= new FormData();
        // data.append('image',this.selectedFile)
        //  this.datas.push(data);
        // this.http.post('',this.deviceActivation)
        // .subscribe(res=>{
        //   console.log(res);
        // });
    }
    deletes() {
        this.progressbar();
        if (this.uploader.queue.length >= 0 || this.photos.length >= 0) {
            this.count = this.count - 0.1;
        }
    }
    // getting camera file
    //  image(){
    //  const options: CameraOptions = {
    //   quality: 100,
    //   destinationType: this.camera.DestinationType.NATIVE_URI,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE ,
    // }
    // const capturedPhoto =  CameraOptions.getPhoto({
    //   resultType: CameraResultType.Uri, // file-based data; provides best performance
    //   source: CameraSource.Camera, // automatically take a new photo with the camera
    //   quality: 100 // highest quality (0 to 100)
    // });
    // this.camera.getPicture(options).then((imageData) => {
    //  // imageData is either a base64 encoded string or a file URI
    //  // If it's base64 (DATA_URL):
    //  this.imageData = imageData;
    //     this.image1=(<any>window).Ionic.WebView.convertFileSrc(imageData);
    //  this.myPic = 'data:image/jpeg;base64,' + imageData;
    //  this.photos.push(this.image1);
    //  this.photos.reverse();
    //  this.filePath.resolveNativePath( this.imageData)
    //  .then(filePath =>
    // this.url=filePath)
    //  .catch(err => console.log(err));
    //  const tempImage =  this.url;
    //  const tempFilename = tempImage.substr(tempImage.lastIndexOf('/') + 1);
    //  const tempBaseFilesystemPath = tempImage.substr(0, tempImage.lastIndexOf('/') + 1);
    //  const newBaseFilesystemPath = this.file.dataDirectory;
    //   this.file.copyFile(tempBaseFilesystemPath, tempFilename,
    //                           newBaseFilesystemPath, tempFilename);
    //  const storedPhoto = newBaseFilesystemPath + tempFilename;
    // //  const displayImage = window.Ionic.WebView.convertFileSrc(storedPhoto);
    // }, (err) => {
    //  // Handle error
    // this.commonService.presentToast("camera not available");
    // });
    // }
    deletePhoto(index) {
        this.photos.splice(index, 1);
    }
    delete(index) {
        this.uploader.queue.splice(index, 1);
    }
    ionViewWillEnter() {
        this.device.reset();
    }
    ngOnInit() {
        this.device = this.formBuilder.group({
            imeiNO: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(15),
                ],
            ],
            customerName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobile: [""],
            mail: [""],
            proof: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            proofNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            vehNo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
            ChassisNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            EngineNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.photos = [];
    }
};
DeviceActivationPage.ctorParameters = () => [
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] }
];
DeviceActivationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-device-activation",
        template: __webpack_require__(/*! raw-loader!./device-activation.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-activation/device-activation.page.html"),
        styles: [__webpack_require__(/*! ./device-activation.page.scss */ "./src/app/delar-application/device-activation/device-activation.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        _services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]])
], DeviceActivationPage);



/***/ })

}]);
//# sourceMappingURL=device-activation-device-activation-module-es2015.js.map