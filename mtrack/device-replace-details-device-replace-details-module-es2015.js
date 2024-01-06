(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-replace-details-device-replace-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-replace-details/add-device/add-device.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-replace-details/add-device/add-device.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Add device</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-style label-style\">\n  <ion-row class=\"form-field\">\n    <ion-col style=\"margin-top: 15px\">\n      <form [formGroup]=\"addDeviceForm\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">ICCID No:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  placeholder=\"Enter the ICCID No\"\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"iccidno\"\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">IMEI No:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  placeholder=\"Enter the IMEI No\"\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"imeino\"\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">VLTD No:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  placeholder=\"Enter the VLTD No\"\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"vltdsno\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Box No:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  placeholder=\"Enter the boxno\"\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"boxno\"\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <!-- <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Supplied Units:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"suppliedunits\"\n                  placeholder=\"Enter the Supplied Units\"\n                ></ion-input>\n              </ion-col>\n            </ion-row> -->\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 10px\">\n          <ion-button\n            class=\"button\"\n            type=\"submit\"\n            (click)=\"addDevice()\"\n            [disabled]=\"!addDeviceForm.valid\"\n            >Submit\n          </ion-button>\n          <ion-button class=\"button\" (click)=\"cancelBtn()\" type=\"cancel\"\n            >Cancel</ion-button\n          >\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-replace-details/device-replace-details.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-replace-details/device-replace-details.page.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons\n      *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\"\n      slot=\"start\"\n    >\n      <ion-icon\n        routerLink=\"/tabs-login/esim-dashboard\"\n        name=\"arrow-back\"\n        style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-row>\n      <ion-title>Device Replace Details</ion-title>\n      <ion-col\n        *ngIf=\"myPlatform == 'desktop'\"\n        size=\"4\"\n        style=\"text-align: right\"\n      >\n        <ion-button class=\"submitBtn\" size=\"small\" (click)=\"newfunc()\"\n          >Export</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"form-field\">\n    <ion-col\n      *ngIf=\"myPlatform != 'desktop'\"\n      style=\"margin-top: 10px; text-align: right\"\n      class=\"form-field\"\n    >\n      <ion-button class=\"submitbtn\" (click)=\"addDevice()\"\n        >Add device</ion-button\n      >\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"wrapper-container\">\n    <ion-col>\n      <form [formGroup]=\"returnForm\">\n        <ion-row class=\"form-field\">\n          <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n            <ion-label class=\"label-head\">Box No:</ion-label>\n            <ion-input\n              type=\"text\"\n              placeholder=\"Enter the Box No\"\n              formControlName=\"boxno\"\n              class=\"input\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n            <ion-label class=\"label-head\">IMEI No:</ion-label>\n            <ion-input\n              type=\"text\"\n              placeholder=\"Enter the Imei No\"\n              formControlName=\"imeino\"\n              class=\"input\"\n            ></ion-input>\n          </ion-col>\n          <ion-col\n            size=\"12\"\n            size-lg=\"2.4\"\n            size-md=\"2.4\"\n            style=\"margin: 25px 0px 0px; text-align: end; align-self: center\"\n          >\n            <ion-button\n              class=\"submitbtn\"\n              [disabled]=\"returnForm.value.boxno  == '' && returnForm.value.imeino  == ''\"\n              (click)=\"SearchData('submit')\"\n              >Submit</ion-button\n            >\n            <ion-button class=\"submitbtn\" (click)=\"clear()\">Clear</ion-button>\n          </ion-col>\n          <ion-col\n            *ngIf=\"myPlatform == 'desktop'\"\n            size=\"12\"\n            size-lg=\"4\"\n            size-md=\"4\"\n            style=\"margin: 25px 0px 0px; align-self: center\"\n          >\n            <ion-button\n              class=\"submitbtn\"\n              [disabled]=\"returnForm.value.imeino  == ''\"\n              (click)=\"history('history')\"\n              >Show History</ion-button\n            >\n            <ion-button class=\"submitbtn\" (click)=\"addDevice()\"\n              >Add device</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-col>\n  </ion-row>\n\n  <jqxGrid\n    *ngIf=\"show\"\n    #myGrid\n    (onRowclick)=\"myGridOnRowSelect($event)\"\n    [theme]=\"'material'\"\n    [enablebrowserselection]=\"true\"\n    [pagesizeoptions]=\"page\"\n    [width]=\"'99.5%'\"\n    [autoheight]=\"true\"\n    [source]=\"dataAdapter\"\n    [columns]=\"columns\"\n    [filterable]=\"true\"\n    [sortable]=\"true\"\n    [columnsresize]=\"true\"\n    [enabletooltips]=\"true\"\n    [pageable]=\"true\"\n    [showfilterrow]=\"true\"\n    style=\"\n      font-size: 16px;\n      text-align: center !important;\n      margin: auto;\n      cursor: pointer;\n    \"\n  >\n  </jqxGrid>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-replace-details/replace/replace.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-replace-details/replace/replace.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Replace device</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"myPlatform == 'desktop'\" class=\"content-style label-style\">\n  <ion-row class=\"form-field\">\n    <ion-col style=\"margin-top: 15px\">\n      <form [formGroup]=\"addDeviceForm\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Iccid No:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  placeholder=\"Enter the iccidno\"\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"iccidno\"\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Imei No:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  placeholder=\"Enter the imeino\"\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"imeino\"\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 10px\">\n          <ion-button\n            class=\"button\"\n            type=\"submit\"\n            [disabled]=\"\n              addDeviceForm.value.iccidno == '' &&\n              addDeviceForm.value.imeino == ''\n            \"\n            (click)=\"addDevice()\"\n            >Submit\n          </ion-button>\n          <ion-button class=\"button\" (click)=\"cancelBtn()\" type=\"cancel\"\n            >Cancel</ion-button\n          >\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/device-replace-details/add-device/add-device.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/delar-application/device-replace-details/add-device/add-device.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  background-color: #7c68f8;\n}\n\n.label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 18px;\n}\n\n.diable-style {\n  background: white;\n  line-height: 18px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #ffebcd;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLXJlcGxhY2UtZGV0YWlscy9hZGQtZGV2aWNlL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGRldmljZS1yZXBsYWNlLWRldGFpbHNcXGFkZC1kZXZpY2VcXGFkZC1kZXZpY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2RldmljZS1yZXBsYWNlLWRldGFpbHMvYWRkLWRldmljZS9hZGQtZGV2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLFNBQUE7RUNDRjs7RURFQTtJQUNFLFVBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9kZXZpY2UtcmVwbGFjZS1kZXRhaWxzL2FkZC1kZXZpY2UvYWRkLWRldmljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjNjhmODtcclxufVxyXG5cclxuLmxhYmVsLXN0eWxlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5kaWFibGUtc3R5bGUge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4uY29udGVudC1zdHlsZSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2wtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4jYWRkLWljb24ge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZWJjZDtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIC0tYmFja2dyb3VuZDogIzdjNjhmODtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIHpvb206IDgwJTtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IC01cHggNXB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbi5zZWxlY3RhYmxlLWlucHV0IHtcclxuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4iLCIuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M2OGY4O1xufVxuXG4ubGFiZWwtc3R5bGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmRpYWJsZS1zdHlsZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmNvbnRlbnQtc3R5bGUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbiNhZGQtaWNvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZWJjZDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgLS1iYWNrZ3JvdW5kOiAjN2M2OGY4O1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/device-replace-details/add-device/add-device.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/delar-application/device-replace-details/add-device/add-device.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddDeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDeviceComponent", function() { return AddDeviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let AddDeviceComponent = class AddDeviceComponent {
    constructor(platform, formBuilder, modalController, ajaxService, commonService, alertController) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.alertController = alertController;
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    addDevice() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Add Device",
                backdropDismiss: false,
                message: "Are you sure you want to add device?",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: (data) => { },
                    },
                    {
                        text: "Ok",
                        handler: (data) => {
                            this.submitBtn();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    submitBtn() {
        this.commonService.presentLoader();
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/esim/addnewdevice";
        let body = {
            boxno: this.addDeviceForm.value.boxno,
            iccidno: this.addDeviceForm.value.iccidno,
            imeino: this.addDeviceForm.value.imeino,
            vltdsno: this.addDeviceForm.value.vltdsno,
        };
        this.ajaxService.ajaxPostWithBody(url, body).subscribe((res) => {
            if (res.message == "Device Added Successfully") {
                this.modalController.dismiss(res.message);
                this.commonService.dismissLoader();
            }
            else {
                this.commonService.showConfirm(res.message);
                this.commonService.dismissLoader();
            }
        });
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.addDeviceForm = this.formBuilder.group({
            boxno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            iccidno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            imeino: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vltdsno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
};
AddDeviceComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
AddDeviceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-device",
        template: __webpack_require__(/*! raw-loader!./add-device.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-replace-details/add-device/add-device.component.html"),
        styles: [__webpack_require__(/*! ./add-device.component.scss */ "./src/app/delar-application/device-replace-details/add-device/add-device.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], AddDeviceComponent);



/***/ }),

/***/ "./src/app/delar-application/device-replace-details/device-replace-details.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/delar-application/device-replace-details/device-replace-details.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: DeviceReplaceDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceReplaceDetailsPageModule", function() { return DeviceReplaceDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _device_replace_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-replace-details.page */ "./src/app/delar-application/device-replace-details/device-replace-details.page.ts");
/* harmony import */ var _add_device_add_device_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-device/add-device.component */ "./src/app/delar-application/device-replace-details/add-device/add-device.component.ts");
/* harmony import */ var _replace_replace_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./replace/replace.component */ "./src/app/delar-application/device-replace-details/replace/replace.component.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");










const routes = [
    {
        path: "",
        component: _device_replace_details_page__WEBPACK_IMPORTED_MODULE_6__["DeviceReplaceDetailsPage"],
    },
    {
        path: "add-device",
        component: _add_device_add_device_component__WEBPACK_IMPORTED_MODULE_7__["AddDeviceComponent"],
    },
    {
        path: "replace",
        component: _replace_replace_component__WEBPACK_IMPORTED_MODULE_8__["ReplaceComponent"],
    },
];
let DeviceReplaceDetailsPageModule = class DeviceReplaceDetailsPageModule {
};
DeviceReplaceDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_9__["SharedModModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [
            _device_replace_details_page__WEBPACK_IMPORTED_MODULE_6__["DeviceReplaceDetailsPage"],
            _add_device_add_device_component__WEBPACK_IMPORTED_MODULE_7__["AddDeviceComponent"],
            _replace_replace_component__WEBPACK_IMPORTED_MODULE_8__["ReplaceComponent"],
        ],
    })
], DeviceReplaceDetailsPageModule);



/***/ }),

/***/ "./src/app/delar-application/device-replace-details/device-replace-details.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/delar-application/device-replace-details/device-replace-details.page.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLXJlcGxhY2UtZGV0YWlscy9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxkZXZpY2UtcmVwbGFjZS1kZXRhaWxzXFxkZXZpY2UtcmVwbGFjZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLXJlcGxhY2UtZGV0YWlscy9kZXZpY2UtcmVwbGFjZS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VDQ0Y7QUFDRjtBREVBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUNBRjtBQUNGO0FERUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNFRjtBRENBO0VBQ0U7SUFDRSxnQkFBQTtFQ0VGOztFREFBO0lBQ0UsVUFBQTtFQ0dGO0FBQ0Y7QURBQTtFQUNFO0lBQ0UsU0FBQTtFQ0VGOztFREFBO0lBQ0UsVUFBQTtFQ0dGO0FBQ0Y7QUREQTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLXJlcGxhY2UtZGV0YWlscy9kZXZpY2UtcmVwbGFjZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjMyMHB4KSBhbmQobWF4LXdpZHRoOjEwMjNweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDhweCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MTAyNHB4KSB7XHJcbiAgLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogOHB4IDFweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcbi5mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IC01cHggNXB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuLmxhYmVsLWhlYWQge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xyXG59XHJcbi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgbWFyZ2luOiA3cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIHpvb206IDgwJTtcclxuICB9XHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxufVxyXG4uc3VibWl0QnRuIHtcclxuICBtYXJnaW46IDBweCAxNHB4IDBweCAwcHg7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIC0tY29sb3I6ICM3YzY4Zjg7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjN2M2OGY4O1xyXG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xyXG59XHJcbiIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiA4cHggMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmxhYmVsLWhlYWQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIG1hcmdpbjogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5zdWJtaXRCdG4ge1xuICBtYXJnaW46IDBweCAxNHB4IDBweCAwcHg7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/device-replace-details/device-replace-details.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/device-replace-details/device-replace-details.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: DeviceReplaceDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceReplaceDetailsPage", function() { return DeviceReplaceDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _add_device_add_device_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-device/add-device.component */ "./src/app/delar-application/device-replace-details/add-device/add-device.component.ts");
/* harmony import */ var _replace_replace_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./replace/replace.component */ "./src/app/delar-application/device-replace-details/replace/replace.component.ts");










let DeviceReplaceDetailsPage = class DeviceReplaceDetailsPage {
    constructor(platform, formBuilder, modalController, alertController, commonService, ajaxService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.page = [];
        this.companyId = localStorage.getItem("userName");
        this.show = false;
    }
    createForm() {
        this.returnForm = this.formBuilder.group({
            boxno: [""],
            imeino: [""],
        });
    }
    clear() {
        this.returnForm.patchValue({
            boxno: "",
            imeino: "",
        });
        this.show = false;
    }
    history(d) {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/esim/getdevicereplaced?imei=" +
            this.returnForm.value.imeino;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.historyvalue = res;
            this.SearchData(d);
        });
    }
    addDevice(row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_device_add_device_component__WEBPACK_IMPORTED_MODULE_8__["AddDeviceComponent"],
                cssClass: "saleform",
                componentProps: {
                    value: "",
                },
            });
            modal.onDidDismiss().then((data) => {
                if (data.data == "Device Added Successfully") {
                    this.commonService.showConfirm(data.data);
                }
            });
            return yield modal.present();
        });
    }
    replaceModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _replace_replace_component__WEBPACK_IMPORTED_MODULE_9__["ReplaceComponent"],
                cssClass: "replaceform",
                componentProps: {
                    value: this.selectedRow,
                },
            });
            modal.onDidDismiss().then((data) => {
                if (data.data == "Device Replaced Successfully") {
                    this.commonService.showConfirm(data.data);
                    this.show = false;
                }
            });
            return yield modal.present();
        });
    }
    delete() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/esim/deleteimeino?imeino=" +
            this.selectedRow.imeino +
            "&dealername=" +
            localStorage.getItem("userName");
        this.ajaxService.ajaxGetWithBody(url).subscribe((response) => {
            let res = JSON.parse(response);
            if (res.message == "Device Successfully Removed") {
                this.commonService.showConfirm("Device Successfully Removed");
                this.myGrid.clearselection();
                this.modalController.dismiss();
                this.selectedRow = "";
                this.show = false;
            }
            else {
                this.commonService.showConfirm(res.message);
            }
        });
    }
    SearchData(d) {
        if (d == "history") {
            this.tableData = this.historyvalue;
            this.show = true;
            this.renderer = (row, column, value) => {
                if (value == "" || null || undefined || value == ",") {
                    return "---";
                }
                else {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                        value +
                        "</span>");
                }
            };
            this.source = { localdata: this.tableData };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            this.columns = [
                {
                    text: "Old ICCID 1",
                    datafield: "oldiccidno1",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                    editable: true,
                },
                {
                    text: "Old ICCID 2",
                    datafield: "oldiccidno2",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                    editable: true,
                },
                {
                    text: "New ICCID 1",
                    datafield: "iccidno1",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "New ICCID 2",
                    datafield: "iccidno2",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "Old IMEI",
                    datafield: "oldimeino",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "New IMEI",
                    datafield: "imeino",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "VLTD No",
                    datafield: "vltdsno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "Replace Date",
                    datafield: "replaceddate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "Replaced by",
                    datafield: "replacedby",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
            ];
        }
        else if (d == "submit") {
            if (this.returnForm.value.imeino != "" ||
                this.returnForm.value.boxno != "") {
                this.page = [];
                this.commonService.presentLoader();
                let imei = this.returnForm.value.imeino != null
                    ? this.returnForm.value.imeino
                    : "";
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                    "/esim/getImeiNoDetails?boxno=" +
                    this.returnForm.value.boxno +
                    "&imeino=" +
                    imei;
                this.ajaxService.ajaxGet(url).subscribe((res) => {
                    if (this.returnForm.value.imeino != "" ||
                        this.returnForm.value.boxno != "") {
                        if (res.message) {
                            this.commonService.dismissLoader();
                            this.commonService.showConfirm(res.message);
                            this.show = false;
                            this.page = ["100", "200", "500", "1000"];
                        }
                        else {
                            if (res.length == 0) {
                                this.commonService.showConfirm("No Record Found");
                                this.commonService.dismissLoader();
                                this.show = false;
                            }
                            else {
                                this.page = ["100", "200", "500", "1000"];
                                this.tableData = res;
                                this.commonService.dismissLoader();
                                this.show = true;
                                this.renderer = (row, column, value) => {
                                    if (value == "" || null || undefined || value == ",") {
                                        return "---";
                                    }
                                    else {
                                        return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                                            value +
                                            "</span>");
                                    }
                                };
                                this.source = { localdata: this.tableData };
                                this.dataAdapter = new jqx.dataAdapter(this.source);
                                this.columns = [
                                    {
                                        text: "Box No",
                                        datafield: "boxno",
                                        cellsrenderer: this.renderer,
                                        cellsalign: "center",
                                        align: "center",
                                        width: 130,
                                        editable: true,
                                    },
                                    {
                                        text: "VLTD No",
                                        datafield: "vltdsno",
                                        cellsrenderer: this.renderer,
                                        cellsalign: "center",
                                        align: "center",
                                        width: 130,
                                        editable: true,
                                    },
                                    {
                                        text: "IMEI No",
                                        datafield: "imeino",
                                        cellsrenderer: this.renderer,
                                        cellsalign: "center",
                                        align: "center",
                                        width: 100,
                                    },
                                    {
                                        text: "Invoie No",
                                        datafield: "invoiceno",
                                        cellsrenderer: this.renderer,
                                        cellsalign: "center",
                                        align: "center",
                                        width: 110,
                                    },
                                    {
                                        text: "Sales Date",
                                        datafield: "salesdate",
                                        cellsrenderer: this.renderer,
                                        cellsalign: "center",
                                        align: "center",
                                        width: 100,
                                    },
                                    {
                                        text: "ICCID No 1",
                                        datafield: "iccidno1",
                                        cellsrenderer: this.renderer,
                                        cellsalign: "center",
                                        align: "center",
                                        width: 130,
                                    },
                                    {
                                        text: "Sim No 1",
                                        datafield: "simno1",
                                        cellsrenderer: this.renderer,
                                        cellsalign: "center",
                                        align: "center",
                                        width: 100,
                                    },
                                    {
                                        text: "ICCID No 2",
                                        datafield: "iccidno2",
                                        cellsrenderer: this.renderer,
                                        cellsalign: "center",
                                        align: "center",
                                        width: 130,
                                    },
                                    {
                                        text: "Sim No 2",
                                        datafield: "simno2",
                                        cellsrenderer: this.renderer,
                                        cellsalign: "center",
                                        align: "center",
                                        width: 100,
                                    },
                                    {
                                        text: "Slot No",
                                        datafield: "slotno",
                                        cellsrenderer: this.renderer,
                                        cellsalign: "center",
                                        align: "center",
                                        width: 90,
                                    },
                                    {
                                        text: "Requested by",
                                        datafield: "Requesteddealer",
                                        cellsrenderer: this.renderer,
                                        cellsalign: "center",
                                        align: "center",
                                        width: 100,
                                    },
                                    {
                                        text: "Current Dealer",
                                        datafield: "currentdealer",
                                        cellsrenderer: this.renderer,
                                        cellsalign: "center",
                                        align: "center",
                                        width: 105,
                                    },
                                    {
                                        text: "Created by",
                                        datafield: "createdby",
                                        cellsrenderer: this.renderer,
                                        cellsalign: "center",
                                        align: "center",
                                        width: 100,
                                    },
                                    {
                                        text: "",
                                        datafield: "replace",
                                        columntype: "button",
                                        cellsalign: "center",
                                        align: "center",
                                        width: 80,
                                        cellsrenderer: () => {
                                            return this.myPlatform == "desktop"
                                                ? "Replace"
                                                : "<button>Replace</button>";
                                        },
                                        buttonclick: () => {
                                            this.replaceModel();
                                        },
                                    },
                                ];
                            }
                        }
                    }
                    else {
                        this.commonService.dismissLoader();
                        this.commonService.showConfirm("Enter the Boxno and Imeino");
                    }
                });
            }
            else {
                this.commonService.showConfirm("Enter the Box No or Imei No");
            }
        }
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row.bounddata;
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.createForm();
    }
    ionViewWillEnter() {
        this.clear();
    }
};
DeviceReplaceDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
], DeviceReplaceDetailsPage.prototype, "myGrid", void 0);
DeviceReplaceDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-device-replace-details",
        template: __webpack_require__(/*! raw-loader!./device-replace-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-replace-details/device-replace-details.page.html"),
        styles: [__webpack_require__(/*! ./device-replace-details.page.scss */ "./src/app/delar-application/device-replace-details/device-replace-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"]])
], DeviceReplaceDetailsPage);



/***/ }),

/***/ "./src/app/delar-application/device-replace-details/replace/replace.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/device-replace-details/replace/replace.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  background-color: #7c68f8;\n}\n\n.label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 18px;\n}\n\n.diable-style {\n  background: white;\n  line-height: 18px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #ffebcd;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLXJlcGxhY2UtZGV0YWlscy9yZXBsYWNlL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGRldmljZS1yZXBsYWNlLWRldGFpbHNcXHJlcGxhY2VcXHJlcGxhY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2RldmljZS1yZXBsYWNlLWRldGFpbHMvcmVwbGFjZS9yZXBsYWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLFNBQUE7RUNDRjs7RURFQTtJQUNFLFVBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9kZXZpY2UtcmVwbGFjZS1kZXRhaWxzL3JlcGxhY2UvcmVwbGFjZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjNjhmODtcclxufVxyXG5cclxuLmxhYmVsLXN0eWxlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5kaWFibGUtc3R5bGUge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4uY29udGVudC1zdHlsZSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2wtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4jYWRkLWljb24ge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZWJjZDtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIC0tYmFja2dyb3VuZDogIzdjNjhmODtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIHpvb206IDgwJTtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IC01cHggNXB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbi5zZWxlY3RhYmxlLWlucHV0IHtcclxuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4iLCIuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M2OGY4O1xufVxuXG4ubGFiZWwtc3R5bGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmRpYWJsZS1zdHlsZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmNvbnRlbnQtc3R5bGUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbiNhZGQtaWNvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZWJjZDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgLS1iYWNrZ3JvdW5kOiAjN2M2OGY4O1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/device-replace-details/replace/replace.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/device-replace-details/replace/replace.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ReplaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceComponent", function() { return ReplaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let ReplaceComponent = class ReplaceComponent {
    constructor(platform, formBuilder, modalController, ajaxService, commonService, alertController) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.alertController = alertController;
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    addDevice() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Replace Device",
                backdropDismiss: false,
                message: "Are you sure you want to replace device?",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: (data) => { },
                    },
                    {
                        text: "Ok",
                        handler: (data) => {
                            this.submitBtn();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    submitBtn() {
        this.commonService.presentLoader();
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/esim/replacenewdevice";
        let body = {
            newiccidno: this.addDeviceForm.value.iccidno,
            oldiccidno: this.value.iccidno1,
            newimeino: this.addDeviceForm.value.imeino,
            oldimeino: this.value.imeino,
        };
        this.ajaxService.ajaxPostWithBody(url, body).subscribe((res) => {
            if (res.message == "Device Replaced Successfully") {
                this.modalController.dismiss(res.message);
                this.commonService.dismissLoader();
            }
            else {
                this.commonService.showConfirm(res.message);
                this.commonService.dismissLoader();
            }
        });
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.addDeviceForm = this.formBuilder.group({
            iccidno: [""],
            imeino: [""],
        });
    }
};
ReplaceComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ReplaceComponent.prototype, "value", void 0);
ReplaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-replace",
        template: __webpack_require__(/*! raw-loader!./replace.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-replace-details/replace/replace.component.html"),
        styles: [__webpack_require__(/*! ./replace.component.scss */ "./src/app/delar-application/device-replace-details/replace/replace.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], ReplaceComponent);



/***/ })

}]);
//# sourceMappingURL=device-replace-details-device-replace-details-module-es2015.js.map