(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-extend-status-update-device-extend-status-update-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-extend-status-update/bulk-extend/bulk-extend.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-extend-status-update/bulk-extend/bulk-extend.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-icon\r\n        (click)=\"cancelBtn()\"\r\n        name=\"arrow-back\"\r\n        style=\"padding: 10px\"\r\n        slot=\"start\"\r\n      ></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Extend 1 Yr Status Update</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row class=\"wrapper-container\">\r\n    <ion-col>\r\n      <form [formGroup]=\"topupForm\">\r\n        <ion-row class=\"form-field\">\r\n          <ion-col>\r\n            <ion-row style=\"padding: 10px\">\r\n              <ion-col size=\"12\">\r\n                <jqxGrid\r\n                  #myGrid\r\n                  [theme]=\"'material'\"\r\n                  [width]=\"'99.5%'\"\r\n                  [autoheight]=\"true\"\r\n                  [source]=\"dataAdapter\"\r\n                  [columns]=\"columns\"\r\n                  [filterable]=\"true\"\r\n                  [sortable]=\"true\"\r\n                  [columnsresize]=\"true\"\r\n                  [enablebrowserselection]=\"true\"\r\n                  [enabletooltips]=\"true\"\r\n                  [pageable]=\"true\"\r\n                  [showfilterrow]=\"true\"\r\n                  style=\"\r\n                    font-size: 16px;\r\n                    text-align: center !important;\r\n                    margin: auto;\r\n                    cursor: pointer;\r\n                  \"\r\n                >\r\n                </jqxGrid>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n              <ion-col size=\"5\" style=\"align-self: center; text-align: center\">\r\n                <ion-label class=\"col-content\">Comment :</ion-label></ion-col\r\n              >\r\n              <ion-col size=\"7\">\r\n                <textarea\r\n                  class=\"comment\"\r\n                  type=\"text\"\r\n                  placeholder=\"Enter the Comments\"\r\n                  formControlName=\"comment\"\r\n                ></textarea>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n              <ion-col style=\"text-align: center; padding: 15px\">\r\n                <ion-button (click)=\"submitBtn()\" [disabled]=\"!topupForm.valid\"\r\n                  >Submit</ion-button\r\n                >\r\n                <ion-button type=\"submit\" (click)=\"cancelBtn()\"\r\n                  >Cancel</ion-button\r\n                >\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-extend-status-update/device-extend-status-update.page.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-extend-status-update/device-extend-status-update.page.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons\n      *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\"\n      slot=\"start\"\n    >\n      <ion-icon\n        routerLink=\"/tabs-login/esim-dashboard\"\n        name=\"arrow-back\"\n        style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-row>\n      <ion-title *ngIf=\"myPlatform != 'desktop'\"\n        >Extend 1 Yr Status Update</ion-title\n      >\n      <ion-title *ngIf=\"myPlatform == 'desktop'\"\n        >Device Status Update Details</ion-title\n      >\n      <ion-col\n        *ngIf=\"myPlatform == 'desktop'\"\n        size=\"4\"\n        style=\"text-align: right\"\n      >\n        <ion-button class=\"submitBtn\" size=\"small\" (click)=\"newfunc()\"\n          >Export</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <ion-row *ngIf=\"myPlatform == 'desktop'\" class=\"upperRow\">\n    <ion-col\n      [ngClass]=\"{ selectedUpperCol: 'true' }\"\n      routerLink=\"/tabs-login/esim-ca-report\"\n      routerLinkActive=\"selected\"\n      size=\"1.9\"\n    >\n      <ion-label>Ca Status Update</ion-label>\n    </ion-col>\n    <ion-col\n      [ngClass]=\"{ selectedUpperCol: 'true' }\"\n      routerLink=\"/tabs-login/esim-renewal-status-update\"\n      routerLinkActive=\"selected\"\n      size=\"1.9\"\n    >\n      <ion-label>Renewal Status Update</ion-label>\n    </ion-col>\n    <ion-col\n      [ngClass]=\"{ selectedUpperCol: 'true' }\"\n      routerLink=\"/tabs-login/device-topup-status-update\"\n      routerLinkActive=\"selected\"\n      size=\"1.9\"\n    >\n      <ion-label>Topup Status Update</ion-label>\n    </ion-col>\n    <ion-col\n      [ngClass]=\"{ selectedUpperCol: 'true' }\"\n      routerLink=\"/tabs-login/device-extend-status-update\"\n      routerLinkActive=\"selected\"\n      size=\"1.9\"\n    >\n      <ion-label>Extend 1 Yr Status Update</ion-label>\n    </ion-col>\n    <ion-col\n    [ngClass]=\"{ selectedUpperCol: 'true' }\"\n    routerLink=\"/tabs-login/esim-bsnl-certificate\"\n    routerLinkActive=\"selected\"\n    size=\"1.9\"\n  >\n    <ion-label>BSNL Certificate Request</ion-label>\n  </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"myPlatform != 'desktop'\">\n    <ion-col class=\"form-field\">\n      <ion-row>\n        <ion-col style=\"margin: 10px 0px 0px\">\n          <ion-label>\n            <span class=\"dealer-label\">Total Selected Row :</span>\n            <span class=\"dealer-data\">{{selectedRow?.length}}</span>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col style=\"text-align: end\">\n          <ion-button\n            size=\"small\"\n            class=\"submitbtn\"\n            (click)=\"bulkstatusModel()\"\n            [disabled]=\"checkbutton\"\n            >Status Update</ion-button\n          >\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"myPlatform == 'desktop'\">\n    <ion-col style=\"margin: 10px 0px 0px\">\n      <ion-label>\n        <span class=\"dealer-label\">Total Selected Row :</span>\n        <span class=\"dealer-data\">{{selectedRow?.length}}</span>\n      </ion-label>\n    </ion-col>\n    <ion-col style=\"margin: 10px 0px 0px; text-align: end\">\n      <ion-button\n        class=\"submitbtn\"\n        (click)=\"bulkstatusModel()\"\n        [disabled]=\"checkbutton\"\n        >Status Update</ion-button\n      >\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"padding: 10px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        [selectionmode]=\"'checkbox'\"\n        (onRowclick)=\"myGridOnRowclick($event)\"\n        (onRowselect)=\"myGridOnRowSelect($event)\"\n        (onRowunselect)=\"myGridOnRowSelect($event)\"\n        [theme]=\"'material'\"\n        [width]=\"'99%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [columns]=\"columns\"\n        [enablebrowserselection]=\"true\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n\n  <ion-fab\n    *ngIf=\"arrow\"\n    style=\"margin-right: 1%; margin-bottom: 9%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToTop()\">\n      <ion-icon class=\"icon\" name=\"arrow-up\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab\n    *ngIf=\"arrow\"\n    style=\"margin-right: 1%; margin-bottom: 5%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToBottom()\">\n      <ion-icon class=\"icon\" name=\"arrow-down\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-extend-status-update/extend-comment/extend-comment.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-extend-status-update/extend-comment/extend-comment.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Extend 1 Yr Status Update</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"wrapper-container\">\n    <ion-col>\n      <form [formGroup]=\"topupForm\">\n        <ion-row class=\"form-field\">\n          <ion-col>\n            <ion-row>\n              <ion-col size=\"5\" style=\"align-self: center; text-align: center\"\n                >Validity Requested :</ion-col\n              >\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"input\"\n                  formControlName=\"extendoneyearvaliditymonth\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"5\" style=\"align-self: center; text-align: center\">\n                <ion-label class=\"col-content\">Comment :</ion-label></ion-col\n              >\n              <ion-col size=\"7\">\n                <textarea\n                  class=\"comment\"\n                  type=\"text\"\n                  placeholder=\"Enter the Comments\"\n                  formControlName=\"comment\"\n                ></textarea>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col style=\"text-align: center; padding: 15px\">\n                <ion-button (click)=\"submitBtn()\" [disabled]=\"!topupForm.valid\"\n                  >Submit</ion-button\n                >\n                <ion-button type=\"submit\" (click)=\"cancelBtn()\"\n                  >Cancel</ion-button\n                >\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/device-extend-status-update/bulk-extend/bulk-extend.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/delar-application/device-extend-status-update/bulk-extend/bulk-extend.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n.form-field {\n  margin: -5px;\n  border-radius: 7px;\n}\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n.comment {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  height: 140px;\n  width: 100%;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLWV4dGVuZC1zdGF0dXMtdXBkYXRlL2J1bGstZXh0ZW5kL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGRldmljZS1leHRlbmQtc3RhdHVzLXVwZGF0ZVxcYnVsay1leHRlbmRcXGJ1bGstZXh0ZW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9kZXZpY2UtZXh0ZW5kLXN0YXR1cy11cGRhdGUvYnVsay1leHRlbmQvYnVsay1leHRlbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQ0NGO0FBQ0Y7QURFQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDQUY7QUFDRjtBREdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDREY7QURJQTtFQUNFO0lBQ0UsU0FBQTtFQ0RGOztFRElBO0lBQ0UsVUFBQTtFQ0RGO0FBQ0Y7QURJQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNGRjtBREtBO0VBQ0U7SUFDRSxnQkFBQTtFQ0ZGOztFREtBO0lBQ0UsVUFBQTtFQ0ZGO0FBQ0Y7QURJQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRkY7QURLQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2RldmljZS1leHRlbmQtc3RhdHVzLXVwZGF0ZS9idWxrLWV4dGVuZC9idWxrLWV4dGVuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjMyMHB4KSBhbmQobWF4LXdpZHRoOjEwMjNweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDhweCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MTAyNHB4KSB7XHJcbiAgLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogOHB4IDFweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOiAtNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIHpvb206IDgwJTtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgbWFyZ2luOiA3cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbn1cclxuLmNvbC1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5jb21tZW50IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbiIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiA4cHggMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtNXB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgbWFyZ2luOiA3cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuLmNvbC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jb21tZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/device-extend-status-update/bulk-extend/bulk-extend.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/delar-application/device-extend-status-update/bulk-extend/bulk-extend.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: BulkExtendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkExtendComponent", function() { return BulkExtendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var BulkExtendComponent = /** @class */ (function () {
    function BulkExtendComponent(platform, formBuilder, modalController, ajaxService, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
    }
    BulkExtendComponent.prototype.createForm = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        this.topupForm = this.formBuilder.group({
            comment: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    BulkExtendComponent.prototype.clear = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        this.topupForm.patchValue({
            comment: "",
        });
    };
    BulkExtendComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    BulkExtendComponent.prototype.submitBtn = function () {
        var _this = this;
        var arr = [];
        this.value.map(function (data) {
            arr.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data, { comment: _this.topupForm.value.comment }));
        });
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/saveEsimBulkExtendOneYearStatus";
        this.ajaxService.ajaxPostWithBody(url, arr).subscribe(function (res) {
            if (res.message == "Extend One Year Status Updated Successfully") {
                _this.commonService.showConfirm(res.message);
                _this.modalController.dismiss({
                    data: "Extend One Year Status Updated Successfully",
                });
            }
            else {
                _this.commonService.showConfirm(res.message);
            }
        });
    };
    BulkExtendComponent.prototype.getdatas = function () {
        this.tableData = this.value;
        this.renderer = function (row, column, value) {
            if (value == "" || null || undefined) {
                return "--";
            }
            else {
                return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                    value +
                    "</span>");
            }
        };
        this.source = { localdata: this.tableData };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.columns = [
            {
                text: "IMEI No",
                datafield: "imei",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 210,
            },
            {
                text: "Topup Requested",
                datafield: "validityperiod",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 210,
            },
        ];
    };
    BulkExtendComponent.prototype.ngOnInit = function () {
        this.createForm();
        if (Object.keys(this.value).length != 0) {
            console.log(this.value.validityperiod);
            this.topupForm.patchValue({
                extendoneyearvaliditymonth: this.value.validityperiod,
            });
            this.getdatas();
        }
    };
    BulkExtendComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BulkExtendComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
    ], BulkExtendComponent.prototype, "myGrid", void 0);
    BulkExtendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-bulk-extend",
            template: __webpack_require__(/*! raw-loader!./bulk-extend.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-extend-status-update/bulk-extend/bulk-extend.component.html"),
            styles: [__webpack_require__(/*! ./bulk-extend.component.scss */ "./src/app/delar-application/device-extend-status-update/bulk-extend/bulk-extend.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], BulkExtendComponent);
    return BulkExtendComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/device-extend-status-update/device-extend-status-update.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/delar-application/device-extend-status-update/device-extend-status-update.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DeviceExtendStatusUpdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceExtendStatusUpdatePageModule", function() { return DeviceExtendStatusUpdatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _device_extend_status_update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-extend-status-update.page */ "./src/app/delar-application/device-extend-status-update/device-extend-status-update.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _extend_comment_extend_comment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extend-comment/extend-comment.component */ "./src/app/delar-application/device-extend-status-update/extend-comment/extend-comment.component.ts");
/* harmony import */ var _bulk_extend_bulk_extend_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bulk-extend/bulk-extend.component */ "./src/app/delar-application/device-extend-status-update/bulk-extend/bulk-extend.component.ts");










var routes = [
    {
        path: "",
        component: _device_extend_status_update_page__WEBPACK_IMPORTED_MODULE_6__["DeviceExtendStatusUpdatePage"],
    },
    {
        path: "extend-comment",
        component: _extend_comment_extend_comment_component__WEBPACK_IMPORTED_MODULE_8__["ExtendCommentComponent"],
    },
    {
        path: "bulk-extend",
        component: _bulk_extend_bulk_extend_component__WEBPACK_IMPORTED_MODULE_9__["BulkExtendComponent"],
    },
];
var DeviceExtendStatusUpdatePageModule = /** @class */ (function () {
    function DeviceExtendStatusUpdatePageModule() {
    }
    DeviceExtendStatusUpdatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [
                _device_extend_status_update_page__WEBPACK_IMPORTED_MODULE_6__["DeviceExtendStatusUpdatePage"],
                _extend_comment_extend_comment_component__WEBPACK_IMPORTED_MODULE_8__["ExtendCommentComponent"],
                _bulk_extend_bulk_extend_component__WEBPACK_IMPORTED_MODULE_9__["BulkExtendComponent"],
            ],
        })
    ], DeviceExtendStatusUpdatePageModule);
    return DeviceExtendStatusUpdatePageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/device-extend-status-update/device-extend-status-update.page.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/delar-application/device-extend-status-update/device-extend-status-update.page.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fabbutton {\n  --background: whitesmoke;\n  --background-hover: grey;\n}\n\n.icon {\n  color: black;\n}\n\n.icon:hover {\n  color: white;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -11px;\n  right: -2px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -15px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.upperCol {\n  text-align: center;\n  border-radius: 8px;\n  margin: 2px;\n  color: black;\n  font-family: sans-serif;\n  font-size: 13px;\n  text-transform: uppercase;\n}\n\n.upperRow {\n  background: #eeeeee;\n  padding: 1px;\n  border-bottom: 2px solid #7d67f8;\n  height: 56px;\n}\n\n.selectedUpperCol {\n  background: #ebebeb;\n  text-align: center;\n  margin-right: 2px;\n  color: black;\n  font-family: sans-serif;\n  cursor: pointer;\n  font-size: 10px;\n  font-weight: bold;\n  text-transform: uppercase;\n  border-right: 1px solid #b5b5b5;\n  align-self: center;\n  padding-top: 8px;\n  margin-top: 15px;\n}\n\n.selected {\n  margin-top: 20px;\n  color: black;\n  background-color: #ffffff;\n  border-bottom: none;\n  border-top: 2px solid #7d67f8;\n  border-left: 2px solid #7d67f8;\n  border-right: 2px solid #7d67f8;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 11px;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLWV4dGVuZC1zdGF0dXMtdXBkYXRlL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGRldmljZS1leHRlbmQtc3RhdHVzLXVwZGF0ZVxcZGV2aWNlLWV4dGVuZC1zdGF0dXMtdXBkYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLWV4dGVuZC1zdGF0dXMtdXBkYXRlL2RldmljZS1leHRlbmQtc3RhdHVzLXVwZGF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtFQUNBLHdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0FDR0Y7O0FEQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDR0Y7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDR0Y7O0FEQUE7RUFDRSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUNHRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLGdCQUFBO0VDR0Y7O0VEQUE7SUFDRSxVQUFBO0VDR0Y7QUFDRjs7QURBQTtFQUNFO0lBQ0UsU0FBQTtFQ0VGOztFRENBO0lBQ0UsVUFBQTtFQ0VGO0FBQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDREY7O0FER0E7O0VBRUUseUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsMkJBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQ0FGOztBRE1BO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNIRjs7QURPQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2RldmljZS1leHRlbmQtc3RhdHVzLXVwZGF0ZS9kZXZpY2UtZXh0ZW5kLXN0YXR1cy11cGRhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhYmJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogZ3JleTtcclxufVxyXG4uaWNvbiB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5pY29uOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgbWFyZ2luOiA3cHg7XHJcbn1cclxuXHJcbi5kZWFsZXItbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5zdWJtaXRCdG4ge1xyXG4gIG1hcmdpbjogMHB4IDE0cHggMHB4IDBweDtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjN2M2OGY4O1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgLS1jb2xvcjogIzdjNjhmODtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICM3YzY4Zjg7XHJcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zdWJtaXRidG4ge1xyXG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIHpvb206IDgwJTtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IC01cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweCkgYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDhweCAxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmxhYmVsLWhlYWQge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xyXG59XHJcbi5wZGYtd3JhcHBlcixcclxuLmV4Y2VsLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9leGNlbE5ldy5zdmdcIikgbm8tcmVwZWF0O1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmZhYi1idG4ge1xyXG4gIC0tYmFja2dyb3VuZDogbGF2ZW5kZXI7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xMXB4O1xyXG4gIHJpZ2h0OiAtMnB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxufVxyXG5cclxuLmZhYi1idG46aG92ZXIge1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2I2YjZiNjtcclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLnVwcGVyQ29sIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnVwcGVyUm93IHtcclxuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xyXG4gIHBhZGRpbmc6IDFweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzdkNjdmODtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbn1cclxuXHJcbi8vIC5zZWxlY3RlZFVwcGVyQ29sIHsvLyAgIGJhY2tncm91bmQ6ICNmZmZmZmY7Ly8gICB0ZXh0LWFsaWduOiBjZW50ZXI7Ly8gICBib3JkZXItcmFkaXVzOiA4cHg7Ly8gICBtYXJnaW46IDEwcHg7Ly8gICBjb2xvcjogYmxhY2s7Ly8gICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsvLyAgIGN1cnNvcjogcG9pbnRlcjsvLyAgIGZvbnQtc2l6ZTogMTNweDsvLyAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7Ly8gICBhbGlnbi1zZWxmOiBjZW50ZXI7Ly8gfVxyXG4vLyAuc2VsZWN0ZWRVcHBlckNvbDpob3ZlciB7Ly8gICBjb2xvcjogcmdiKDAsIDAsIDApOy8vICAgYmFja2dyb3VuZC1jb2xvcjogI2EwOTVlNzsvLyB9XHJcbi8vIC5zZWxlY3RlZCB7Ly8gICBjb2xvcjogd2hpdGU7Ly8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IxZGZmOy8vIH1cclxuLnNlbGVjdGVkVXBwZXJDb2wge1xyXG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2I1YjViNTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4vLyAuc2VsZWN0ZWRVcHBlckNvbDpob3ZlciB7Ly8gICBjb2xvcjogcmdiKDAsIDAsIDApOy8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsvLyAgIGZvbnQtc2l6ZTogMTJweDsvLyAgIGZvbnQtd2VpZ2h0OiBib2xkOy8vICAgdHJhbnNpdGlvbjogMC4zczsvLyAgIHBhZGRpbmctdG9wOiA4cHg7Ly8gICBib3gtc2hhZG93OiAwcHggMnB4IDVweDsvLyAgIG1hcmdpbi10b3A6IDIwcHg7Ly8gfVxyXG4uc2VsZWN0ZWQge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgIzdkNjdmODtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM3ZDY3Zjg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzdkNjdmODtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMTFweDtcclxuICBib3gtc2hhZG93OiAwcHggLTRweCA3cHggI2MwYjVmZjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuIiwiLmZhYmJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBncmV5O1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmljb246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgbWFyZ2luOiA3cHg7XG59XG5cbi5kZWFsZXItbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zdWJtaXRCdG4ge1xuICBtYXJnaW46IDBweCAxNHB4IDBweCAwcHg7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XG59XG5cbi5zdWJtaXRidG4ge1xuICAtLWJhY2tncm91bmQ6ICM2MjUyZWU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDhweCAxcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxufVxuLmxhYmVsLWhlYWQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xufVxuXG4ucGRmLXdyYXBwZXIsXG4uZXhjZWwtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9leGNlbE5ldy5zdmdcIikgbm8tcmVwZWF0O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uZmFiLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogbGF2ZW5kZXI7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMXB4O1xuICByaWdodDogLTJweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLmZhYi1idG46aG92ZXIge1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4udXBwZXJDb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnVwcGVyUm93IHtcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcbiAgcGFkZGluZzogMXB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzdkNjdmODtcbiAgaGVpZ2h0OiA1NnB4O1xufVxuXG4uc2VsZWN0ZWRVcHBlckNvbCB7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2I1YjViNTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uc2VsZWN0ZWQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDExcHg7XG4gIGJveC1zaGFkb3c6IDBweCAtNHB4IDdweCAjYzBiNWZmO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/device-extend-status-update/device-extend-status-update.page.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/delar-application/device-extend-status-update/device-extend-status-update.page.ts ***!
  \***************************************************************************************************/
/*! exports provided: DeviceExtendStatusUpdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceExtendStatusUpdatePage", function() { return DeviceExtendStatusUpdatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _bulk_extend_bulk_extend_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bulk-extend/bulk-extend.component */ "./src/app/delar-application/device-extend-status-update/bulk-extend/bulk-extend.component.ts");
/* harmony import */ var _extend_comment_extend_comment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./extend-comment/extend-comment.component */ "./src/app/delar-application/device-extend-status-update/extend-comment/extend-comment.component.ts");











var DeviceExtendStatusUpdatePage = /** @class */ (function () {
    function DeviceExtendStatusUpdatePage(ajaxService, router, formBuilder, commonService, modalController, platform, ete) {
        this.ajaxService = ajaxService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.modalController = modalController;
        this.platform = platform;
        this.ete = ete;
        this.data = "";
        this.show = false;
        this.companyId = localStorage.getItem("userName");
        this.checkbutton = true;
        this.arrow = false;
        this.a = false;
        this.b = false;
    }
    DeviceExtendStatusUpdatePage.prototype.scrollToTop = function () {
        this.content.scrollToTop(500);
    };
    DeviceExtendStatusUpdatePage.prototype.scrollToBottom = function () {
        this.content.scrollToBottom(500);
    };
    DeviceExtendStatusUpdatePage.prototype.logScrolling = function (ev) {
        if (ev.detail.scrollTop > 2) {
            this.arrow = true;
        }
        if (ev.detail.scrollTop < 2) {
            this.arrow = false;
        }
    };
    DeviceExtendStatusUpdatePage.prototype.getdatas = function () {
        var _this = this;
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/esim/getDealerExtendOneYearRequestAll?companyid=apm" +
            "&extendoneyearrequestno=";
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.tableData = res;
            _this.commonService.dismissLoader();
            _this.myGrid.clearselection();
            _this.renderer = function (row, column, value) {
                if (value == "" || null || undefined) {
                    return "--";
                }
                else {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                        value +
                        "</span>");
                }
            };
            _this.source = { localdata: _this.tableData };
            _this.dataAdapter = new jqx.dataAdapter(_this.source);
            _this.columns = [
                {
                    text: "Request No",
                    datafield: "renewalrequestid",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "VLTD No",
                    datafield: "vltdsno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "Invoice No",
                    datafield: "invoiceno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "ICCID No",
                    datafield: "iccidno1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
                },
                {
                    text: "IMEI No",
                    datafield: "imei",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "SIM 1",
                    datafield: "sim1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "SIM 2",
                    datafield: "sim2",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "Plate No",
                    datafield: "plateno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "Contact No",
                    datafield: "contactno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "Extend 1 Yr Requested",
                    datafield: "validityperiod",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
                },
                {
                    text: "Extend 1 Yr Requested Date",
                    datafield: "renewalrequestdate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "Requested By",
                    datafield: "renewalrequestby",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "Current Dealer",
                    datafield: "companyid",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 155,
                },
                {
                    text: "Extend Date",
                    datafield: "cardactivationdate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "Extend Status",
                    datafield: "cardstatus",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "",
                    datafield: "topup",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 127,
                    cellsrenderer: function () {
                        return "Status Update";
                    },
                    buttonclick: function (row) {
                        _this.openModel(row);
                    },
                },
            ];
        });
    };
    DeviceExtendStatusUpdatePage.prototype.openModel = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isModalOpened, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.selectedRow.renewalmessage != "")) return [3 /*break*/, 1];
                        this.commonService.showConfirm(this.selectedRow.renewalmessage);
                        return [3 /*break*/, 7];
                    case 1:
                        if (!(this.selectedRow.cardactivationdate == "")) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.modalController.getTop()];
                    case 2:
                        isModalOpened = _a.sent();
                        if (!!isModalOpened) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.modalController.create({
                                component: _extend_comment_extend_comment_component__WEBPACK_IMPORTED_MODULE_10__["ExtendCommentComponent"],
                                cssClass: "commentform",
                                componentProps: {
                                    value: this.selectedRow,
                                },
                            })];
                    case 3:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "Extend One Year Status Updated Successfully") {
                                _this.getdatas();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        this.commonService.showConfirm("Already Activated This IMEI No");
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    DeviceExtendStatusUpdatePage.prototype.bulkstatusModel = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var selectdata, arr, i, isModalOpened, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectdata = this.myGrid.getselectedrowindexes();
                        arr = [];
                        for (i = 0; i < selectdata.length; i++) {
                            arr.push({
                                extendoneyearrequestid: this.myGrid["attrSource"]["originaldata"][selectdata[i]]
                                    .renewalrequestid,
                                iccidno: this.myGrid["attrSource"]["originaldata"][selectdata[i]].iccidno1,
                                imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
                                validityperiod: this.myGrid["attrSource"]["originaldata"][selectdata[i]]
                                    .validityperiod,
                                createdby: this.myGrid["attrSource"]["originaldata"][selectdata[i]].createdby,
                            });
                        }
                        return [4 /*yield*/, this.modalController.getTop()];
                    case 1:
                        isModalOpened = _a.sent();
                        if (!!isModalOpened) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.modalController.create({
                                component: _bulk_extend_bulk_extend_component__WEBPACK_IMPORTED_MODULE_9__["BulkExtendComponent"],
                                cssClass: "statusform",
                                componentProps: {
                                    value: arr,
                                },
                            })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (d) {
                            if (d.data.data == "Extend One Year Status Updated Successfully") {
                                _this.myGrid.clearselection();
                                _this.getdatas();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DeviceExtendStatusUpdatePage.prototype.myGridOnRowclick = function (event) {
        this.selectedRow = event.args.row.bounddata;
    };
    DeviceExtendStatusUpdatePage.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = this.myGrid.getselectedrowindexes();
        var h = document.getElementsByClassName("jqx-checkbox-default");
        h[0].style.display = "none";
        var current = this.myGrid.getselectedrowindex();
        if (current != -1) {
            var currentrow = this.myGrid.getrowdata(current);
            // console.log(currentrow, event);
            if (currentrow.renewalmessage != "") {
                if (this.b == true) {
                    this.commonService.showConfirm(currentrow.renewalmessage);
                    this.b = false;
                }
                else {
                    this.b = true;
                }
                this.myGrid.unselectrow(current);
                return null;
            }
            else if (currentrow.cardactivationdate != "") {
                if (this.a == true) {
                    this.commonService.showConfirm("Already Activated This IMEI No");
                    this.a = false;
                }
                else {
                    this.a = true;
                }
                this.myGrid.unselectrow(current);
                return null;
            }
        }
        if (this.selectedRow.length > 0) {
            this.checkbutton = false;
        }
        else {
            this.checkbutton = true;
        }
    };
    DeviceExtendStatusUpdatePage.prototype.newfunc = function () {
        var data = this.tableData;
        console.log(this.myGrid);
        var coloumnArray = [];
        this.myGrid.attrColumns.map(function (p) {
            coloumnArray.push(p.datafield);
        });
        for (var i = 0; i < data.length; i++) {
            var k = Object.keys(data[i]);
            for (var j = 0; j < k.length; j++) {
                if (coloumnArray.includes(k[j]) == false) {
                    delete data[i][k[j].toString()];
                }
            }
        }
        var forExcel = [];
        data.map(function (val) {
            var newArray = Object.values(val);
            forExcel.push(newArray);
        });
        var Header = Object.keys(data[0]);
        var reportData = {
            title: "Device Extend One Year Status Update",
            data: forExcel,
            headers: Header,
        };
        this.ete.exportExcel(reportData);
    };
    DeviceExtendStatusUpdatePage.prototype.ngAfterViewInit = function () {
        this.myGrid.horizontalscrollbarstep(["70"]);
        this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
    };
    DeviceExtendStatusUpdatePage.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
    };
    DeviceExtendStatusUpdatePage.prototype.ionViewWillEnter = function () {
        this.getdatas();
    };
    DeviceExtendStatusUpdatePage.ctorParameters = function () { return [
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeviceExtendStatusUpdatePage.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeviceExtendStatusUpdatePage.prototype, "content", void 0);
    DeviceExtendStatusUpdatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-device-extend-status-update",
            template: __webpack_require__(/*! raw-loader!./device-extend-status-update.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-extend-status-update/device-extend-status-update.page.html"),
            styles: [__webpack_require__(/*! ./device-extend-status-update.page.scss */ "./src/app/delar-application/device-extend-status-update/device-extend-status-update.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"]])
    ], DeviceExtendStatusUpdatePage);
    return DeviceExtendStatusUpdatePage;
}());



/***/ }),

/***/ "./src/app/delar-application/device-extend-status-update/extend-comment/extend-comment.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/delar-application/device-extend-status-update/extend-comment/extend-comment.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n.form-field {\n  margin: -5px;\n  border-radius: 7px;\n}\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n.comment {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  height: 140px;\n  width: 100%;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLWV4dGVuZC1zdGF0dXMtdXBkYXRlL2V4dGVuZC1jb21tZW50L0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGRldmljZS1leHRlbmQtc3RhdHVzLXVwZGF0ZVxcZXh0ZW5kLWNvbW1lbnRcXGV4dGVuZC1jb21tZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9kZXZpY2UtZXh0ZW5kLXN0YXR1cy11cGRhdGUvZXh0ZW5kLWNvbW1lbnQvZXh0ZW5kLWNvbW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQ0NGO0FBQ0Y7QURFQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDQUY7QUFDRjtBREdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDREY7QURJQTtFQUNFO0lBQ0UsU0FBQTtFQ0RGOztFRElBO0lBQ0UsVUFBQTtFQ0RGO0FBQ0Y7QURJQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNGRjtBREtBO0VBQ0U7SUFDRSxnQkFBQTtFQ0ZGOztFREtBO0lBQ0UsVUFBQTtFQ0ZGO0FBQ0Y7QURJQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRkY7QURLQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2RldmljZS1leHRlbmQtc3RhdHVzLXVwZGF0ZS9leHRlbmQtY29tbWVudC9leHRlbmQtY29tbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjMyMHB4KSBhbmQobWF4LXdpZHRoOjEwMjNweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDhweCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MTAyNHB4KSB7XHJcbiAgLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogOHB4IDFweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOiAtNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIHpvb206IDgwJTtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgbWFyZ2luOiA3cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbn1cclxuLmNvbC1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5jb21tZW50IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbiIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiA4cHggMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtNXB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgbWFyZ2luOiA3cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuLmNvbC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jb21tZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/device-extend-status-update/extend-comment/extend-comment.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/delar-application/device-extend-status-update/extend-comment/extend-comment.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ExtendCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendCommentComponent", function() { return ExtendCommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var ExtendCommentComponent = /** @class */ (function () {
    function ExtendCommentComponent(platform, formBuilder, modalController, ajaxService, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
    }
    ExtendCommentComponent.prototype.createForm = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        this.topupForm = this.formBuilder.group({
            extendoneyearvaliditymonth: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            comment: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    ExtendCommentComponent.prototype.clear = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        this.topupForm.patchValue({
            comment: "",
        });
    };
    ExtendCommentComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    ExtendCommentComponent.prototype.submitBtn = function () {
        var _this = this;
        var data = {
            extendoneyearrequestid: this.value.renewalrequestid,
            iccidno: this.value.iccidno1,
            extendoneyearvaliditymonth: this.value.validityperiod,
            comment: this.topupForm.value.comment,
            createdby: localStorage.getItem("userName"),
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/esim/saveEsimExtendOneYearStatus";
        this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
            if (res.message == "Extend One Year Status Updated Successfully") {
                _this.commonService.showConfirm(res.message);
                _this.modalController.dismiss({
                    data: "Extend One Year Status Updated Successfully",
                });
            }
            else {
                _this.commonService.showConfirm(res.message);
            }
        });
    };
    ExtendCommentComponent.prototype.ngOnInit = function () {
        this.createForm();
        if (Object.keys(this.value).length != 0) {
            console.log(this.value.validityperiod);
            this.topupForm.patchValue({
                extendoneyearvaliditymonth: this.value.validityperiod,
            });
        }
    };
    ExtendCommentComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExtendCommentComponent.prototype, "value", void 0);
    ExtendCommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-extend-comment",
            template: __webpack_require__(/*! raw-loader!./extend-comment.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-extend-status-update/extend-comment/extend-comment.component.html"),
            styles: [__webpack_require__(/*! ./extend-comment.component.scss */ "./src/app/delar-application/device-extend-status-update/extend-comment/extend-comment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], ExtendCommentComponent);
    return ExtendCommentComponent;
}());



/***/ })

}]);
//# sourceMappingURL=device-extend-status-update-device-extend-status-update-module-es5.js.map