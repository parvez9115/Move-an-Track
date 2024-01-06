(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-certificate-invoice-details-device-certificate-invoice-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-certificate-invoice-details/device-certificate-invoice-details.page.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-certificate-invoice-details/device-certificate-invoice-details.page.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons\n      *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\"\n      slot=\"start\"\n    >\n      <ion-icon\n        routerLink=\"/tabs-login/esim-dashboard\"\n        name=\"arrow-back\"\n        style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-row>\n      <ion-title *ngIf=\"myPlatform != 'desktop'\"\n        >Certificate Invoice Details</ion-title\n      >\n      <ion-title *ngIf=\"myPlatform == 'desktop'\"\n        >Device Invoice Details</ion-title\n      >\n      <ion-col\n        *ngIf=\"myPlatform == 'desktop'\"\n        size=\"8\"\n        style=\"text-align: right\"\n      >\n        <ion-button class=\"submitBtn\" size=\"small\" (click)=\"newfunc()\"\n          >Export</ion-button\n        >\n        <ion-row style=\"margin: 0px; padding: 0; float: right\">\n          <ion-col style=\"margin-top: 0\" class=\"tooltip\">\n            <ion-fab-button\n              size=\"small\"\n              class=\"fab-btn\"\n              href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/DeviceCertificateInvoice.xlsx\"\n              download=\"sample.xlsx\"\n            >\n              <div class=\"excel-wrapper\"></div>\n            </ion-fab-button>\n            <span class=\"tooltiptext\">Excel-Format</span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngIf=\"myPlatform != 'desktop'\" style=\"text-align: right\">\n        <ion-row style=\"margin: 0px; padding: 0; float: right\">\n          <ion-col style=\"margin-top: 0\" class=\"tooltip\">\n            <ion-fab-button\n              size=\"small\"\n              class=\"fab-btn\"\n              href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/DeviceRenewalInvoice.xlsx\"\n              download=\"sample.xlsx\"\n            >\n              <div class=\"excel-wrapper\"></div>\n            </ion-fab-button>\n            <span class=\"tooltiptext\">Excel-Format</span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"myPlatform == 'desktop'\" class=\"upperRow\">\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/esim-purchase-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Esim Purchase Invoice</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/esim-sales-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Sales Invoice </ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/device-renewal-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Renewal Invoice </ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/device-topup-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Topup Invoice</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/device-extend-oneyear-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Extend 1 Yr Invoice </ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/device-certificate-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Certificate Invoice </ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"head\">\n      <ion-col\n        [ngClass]=\"{'selectedUpperColll': 'true'}\"\n        routerLink=\"/tabs-login/device-certificate-invoice-details\"\n        routerLinkActive=\"click\"\n        size=\"3\"\n      >\n        <ion-label>Old </ion-label>\n      </ion-col>\n\n      <ion-col\n        style=\"margin-left: 10px\"\n        [ngClass]=\"{'selectedUpperColll': 'true'}\"\n        routerLink=\"/tabs-login/certificate-invoice-details\"\n        routerLinkActive=\"click\"\n        size=\"3\"\n      >\n        <ion-label>New</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"wrapper-container\">\n      <ion-col size=\"12\">\n        <form [formGroup]=\"SalesinvoiceForm\">\n          <ion-row class=\"form-field\">\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Dealer:</ion-label>\n              <ionic-selectable\n                class=\"input selectable-input\"\n                formControlName=\"dealerid\"\n                placeholder=\"Select the Dealer\"\n                [items]=\"Dealer\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n              >\n              </ionic-selectable>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Invoice Number:</ion-label>\n              <ion-input\n                type=\"text\"\n                placeholder=\"Enter the Invoice No\"\n                formControlName=\"invoiceno\"\n                class=\"input\"\n              >\n              </ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Invoice Date:</ion-label>\n              <ion-input\n                type=\"date\"\n                formControlName=\"invoicedate\"\n                [max]=\"maxDate\"\n                class=\"input\"\n              ></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Invoice Amount:</ion-label>\n              <ion-input\n                type=\"number\"\n                placeholder=\"Enter the Invoice Amount\"\n                formControlName=\"invoiceamount\"\n                class=\"input\"\n              ></ion-input>\n            </ion-col>\n\n            <!-- <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">IMEI No:</ion-label>\n              <ion-input\n                type=\"text\"\n                *ngIf=\"!showplaname\"\n                placeholder=\"Select the Imei Number\"\n                formControlName=\"imei\"\n                class=\"input\"\n                disabled\n              ></ion-input>\n              <ionic-selectable\n                *ngIf=\"showplaname\"\n                class=\"input selectable-input\"\n                formControlName=\"imei\"\n                placeholder=\"Select the Imei Number\"\n                [items]=\"Imeilist\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n                [disabledItems]=\"data\"\n              >\n              </ionic-selectable>\n            </ion-col> -->\n\n            <!-- <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">File Upload:</ion-label>\n              <input\n                type=\"file\"\n                (change)=\"onFileChange($event)\"\n                formControlName=\"fileupload\"\n                class=\"documents\"\n              />\n            </ion-col> -->\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">No of Units:</ion-label>\n              <ion-input\n                type=\"number\"\n                placeholder=\"Enter the Units\"\n                formControlName=\"noofunits\"\n                class=\"input\"\n              >\n              </ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">File Upload:</ion-label>\n              <input\n                type=\"file\"\n                (change)=\"onFileChange($event)\"\n                formControlName=\"fileupload\"\n                class=\"documents\"\n              />\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Invoice Document:</ion-label>\n              <input\n                type=\"file\"\n                class=\"documents\"\n                formControlName=\"invoicedocument\"\n                ng2FileSelect\n                [uploader]=\"uploader\"\n              />\n            </ion-col>\n\n            <ion-col style=\"margin: 27px 0px 0px; text-align: end\">\n              <ion-button\n                *ngIf=\"!hideSerialNo\"\n                class=\"submitbtn\"\n                (click)=\"add()\"\n                [disabled]=\"!SalesinvoiceForm.valid || button\"\n                >Add</ion-button\n              >\n              <ion-button\n                *ngIf=\"hideSerialNo\"\n                class=\"submitbtn\"\n                (click)=\"edit()\"\n                [disabled]=\"!SalesinvoiceForm.valid || button\"\n                >Edit</ion-button\n              >\n              <ion-button class=\"submitbtn\" (click)=\"clear()\">Clear</ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n\n    <jqxGrid\n      #myGrid\n      [theme]=\"'material'\"\n      (onRowclick)=\"myGridOnRowSelect($event)\"\n      [width]=\"'99%'\"\n      [autoheight]=\"true\"\n      [source]=\"dataAdapter\"\n      [enablebrowserselection]=\"true\"\n      [sortable]=\"true\"\n      [filterable]=\"true\"\n      [columns]=\"columns\"\n      [columnsresize]=\"true\"\n      [enabletooltips]=\"true\"\n      [pageable]=\"true\"\n      [showfilterrow]=\"true\"\n      style=\"\n        font-size: 16px;\n        text-align: center !important;\n        margin: auto;\n        cursor: pointer;\n      \"\n    >\n    </jqxGrid>\n  </ion-grid>\n\n  <ion-fab\n    *ngIf=\"arrow\"\n    style=\"margin-right: 1%; margin-bottom: 9%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToTop()\">\n      <ion-icon class=\"icon\" name=\"arrow-up\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab\n    *ngIf=\"arrow\"\n    style=\"margin-right: 1%; margin-bottom: 5%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToBottom()\">\n      <ion-icon class=\"icon\" name=\"arrow-down\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-certificate-invoice-details/received-details/received-details.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-certificate-invoice-details/received-details/received-details.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Received Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"myPlatform != 'desktop'\" class=\"content-style label-style\">\n  <ion-grid>\n    <ion-row class=\"form-field\">\n      <ion-col\n        size=\"12\"\n        size-sm=\"12\"\n        size-md=\"10\"\n        offset-md=\"1\"\n        size-lg=\"12\"\n        offset-lg=\"0\"\n      >\n        <form [formGroup]=\"receiveForm\">\n          <div class=\"wrapper-form\">\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Dealer:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"dealerid\"\n                  value=\"Disabled\"\n                  disabled\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Invoice No:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"invoiceno\"\n                  value=\"Disabled\"\n                  disabled\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Invoice Amount:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"invoiceamount\"\n                  value=\"Disabled\"\n                  disabled\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Total Received Amt:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"totalamountreceived\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Balance Amount:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"balanceamount\"\n                  value=\"Disabled\"\n                  disabled\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Total Supplied Units:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"totalsuppliedunits\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Balance Units:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"balanceunits\"\n                  value=\"Disabled\"\n                  disabled\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Received Date:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"date\"\n                  [max]=\"maxDate\"\n                  formControlName=\"receiveddate\"\n                  placeholder=\"Enter the Select Date\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Received Amount:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"receivedamount\"\n                  placeholder=\"Enter the Received Amount\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n          </div>\n        </form>\n\n        <ion-row class=\"content-style\">\n          <ion-col style=\"text-align: center !important; padding: 20px\">\n            <ion-button\n              class=\"button\"\n              type=\"submit\"\n              [disabled]=\"!receiveForm.valid\"\n              (click)=\"submitBtn()\"\n              >Submit\n            </ion-button>\n            <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\"\n              >Cancel</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf=\"myPlatform == 'desktop'\" class=\"content-style label-style\">\n  <ion-row class=\"form-field\">\n    <ion-col>\n      <form [formGroup]=\"receiveForm\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Dealer:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"dealerid\"\n                  value=\"Disabled\"\n                  disabled\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">IMEI No:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"imei\"\n                  value=\"Disabled\"\n                  disabled\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Invoice No:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"invoiceno\"\n                  value=\"Disabled\"\n                  disabled\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Invoice Amount:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"invoiceamount\"\n                  value=\"Disabled\"\n                  disabled\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\"\n                >Total Received Amt:</ion-col\n              >\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"totalamountreceived\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Balance Amount:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"balanceamount\"\n                  value=\"Disabled\"\n                  disabled\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Received Date:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"date\"\n                  [max]=\"maxDate\"\n                  formControlName=\"receiveddate\"\n                  placeholder=\"Enter the Select Date\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Received Amount:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"receivedamount\"\n                  placeholder=\"Enter the Received Amount\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 10px\">\n          <ion-button\n            class=\"button\"\n            type=\"submit\"\n            [disabled]=\"!receiveForm.valid\"\n            (click)=\"submitBtn()\"\n            >Submit\n          </ion-button>\n          <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\"\n            >Cancel</ion-button\n          >\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-certificate-invoice-details/view-details/view-details.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-certificate-invoice-details/view-details/view-details.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>View Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"wrapper-container\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        [theme]=\"'material'\"\n        [width]=\"'99%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [columns]=\"columns\"\n        [pagesizeoptions]=\"page\"\n        [enablebrowserselection]=\"true\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-certificate-invoice-details/view-imei/view-imei.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-certificate-invoice-details/view-imei/view-imei.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-icon\r\n        (click)=\"cancelBtn()\"\r\n        name=\"arrow-back\"\r\n        style=\"padding: 10px\"\r\n        slot=\"start\"\r\n      ></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>View IMEI</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row style=\"padding: 10px\">\r\n    <ion-col size=\"12\">\r\n      <jqxGrid\r\n        #myGrid\r\n        (onRowclick)=\"myGridOnRowSelect($event)\"\r\n        [enablebrowserselection]=\"true\"\r\n        [theme]=\"'material'\"\r\n        [width]=\"'99.5%'\"\r\n        [autoheight]=\"true\"\r\n        [source]=\"dataAdapter\"\r\n        [pagesizeoptions]=\"page\"\r\n        [sortable]=\"true\"\r\n        [filterable]=\"true\"\r\n        [columns]=\"columns\"\r\n        [columnsresize]=\"true\"\r\n        [enabletooltips]=\"true\"\r\n        [pageable]=\"true\"\r\n        style=\"\r\n          font-size: 16px;\r\n          text-align: left;\r\n          margin: auto;\r\n          cursor: pointer;\r\n          padding-left: 5px;\r\n        \"\r\n      >\r\n      </jqxGrid>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/delar-application/device-certificate-invoice-details/device-certificate-invoice-details.module.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/delar-application/device-certificate-invoice-details/device-certificate-invoice-details.module.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: DeviceCertificateInvoiceDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceCertificateInvoiceDetailsPageModule", function() { return DeviceCertificateInvoiceDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _device_certificate_invoice_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-certificate-invoice-details.page */ "./src/app/delar-application/device-certificate-invoice-details/device-certificate-invoice-details.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var _received_details_received_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./received-details/received-details.component */ "./src/app/delar-application/device-certificate-invoice-details/received-details/received-details.component.ts");
/* harmony import */ var _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-details/view-details.component */ "./src/app/delar-application/device-certificate-invoice-details/view-details/view-details.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _view_imei_view_imei_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-imei/view-imei.component */ "./src/app/delar-application/device-certificate-invoice-details/view-imei/view-imei.component.ts");













const routes = [
    {
        path: "",
        component: _device_certificate_invoice_details_page__WEBPACK_IMPORTED_MODULE_6__["DeviceCertificateInvoiceDetailsPage"],
    },
    {
        path: "received-details",
        component: _received_details_received_details_component__WEBPACK_IMPORTED_MODULE_9__["ReceivedDetailsComponent"],
    },
    {
        path: "view-details",
        component: _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_10__["ViewDetailsComponent"],
    },
    {
        path: "view-imei",
        component: _view_imei_view_imei_component__WEBPACK_IMPORTED_MODULE_12__["ViewImeiComponent"],
    },
];
let DeviceCertificateInvoiceDetailsPageModule = class DeviceCertificateInvoiceDetailsPageModule {
};
DeviceCertificateInvoiceDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileUploadModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [
            _device_certificate_invoice_details_page__WEBPACK_IMPORTED_MODULE_6__["DeviceCertificateInvoiceDetailsPage"],
            _received_details_received_details_component__WEBPACK_IMPORTED_MODULE_9__["ReceivedDetailsComponent"],
            _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_10__["ViewDetailsComponent"],
            _view_imei_view_imei_component__WEBPACK_IMPORTED_MODULE_12__["ViewImeiComponent"],
        ],
    })
], DeviceCertificateInvoiceDetailsPageModule);



/***/ }),

/***/ "./src/app/delar-application/device-certificate-invoice-details/device-certificate-invoice-details.page.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/delar-application/device-certificate-invoice-details/device-certificate-invoice-details.page.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fabbutton {\n  --background: whitesmoke;\n  --background-hover: grey;\n}\n\n.icon {\n  color: black;\n}\n\n.icon:hover {\n  color: white;\n}\n\n.head {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.selectedUpperColll {\n  background: #ebebeb;\n  text-align: center;\n  margin-right: 2px;\n  color: black;\n  font-family: sans-serif;\n  cursor: pointer;\n  font-size: 10px;\n  font-weight: bold;\n  text-transform: uppercase;\n  align-self: center;\n  padding-top: 8px;\n  margin-top: 15px;\n}\n\n.click {\n  margin-top: 20px;\n  color: black;\n  background-color: #ffffff;\n  border-bottom: none;\n  border-top: 2px solid #7d67f8;\n  border-left: 2px solid #7d67f8;\n  border-right: 2px solid #7d67f8;\n  border-bottom: 2px solid #7d67f8;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 11px;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.fileinput {\n  margin-top: 21px;\n  margin-left: 10%;\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.label-heads {\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.submitBtn {\n  margin: 0px 40px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -8px;\n  right: -2px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -15px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.file-input-container input[type=file] {\n  display: none;\n}\n\n.file {\n  margin-left: 8%;\n  border: 1px solid #3d6cec;\n}\n\n.documents {\n  margin: 19px 10px 0px;\n  text-align: center;\n}\n\n.upperCol {\n  text-align: center;\n  border-radius: 8px;\n  margin: 2px;\n  color: black;\n  font-family: sans-serif;\n  font-size: 13px;\n  text-transform: uppercase;\n}\n\n.upperRow {\n  background: #eeeeee;\n  padding: 1px;\n  border-bottom: 2px solid #7d67f8;\n  height: 56px;\n}\n\n.selectedUpperCol {\n  background: #ebebeb;\n  text-align: center;\n  margin-right: 2px;\n  color: black;\n  font-family: sans-serif;\n  cursor: pointer;\n  font-size: 10px;\n  font-weight: bold;\n  text-transform: uppercase;\n  border-right: 1px solid #b5b5b5;\n  align-self: center;\n  padding-top: 8px;\n  margin-top: 15px;\n}\n\n.selected {\n  margin-top: 20px;\n  color: black;\n  background-color: #ffffff;\n  border-bottom: none;\n  border-top: 2px solid #7d67f8;\n  border-left: 2px solid #7d67f8;\n  border-right: 2px solid #7d67f8;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 11px;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLWNlcnRpZmljYXRlLWludm9pY2UtZGV0YWlscy9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxkZXZpY2UtY2VydGlmaWNhdGUtaW52b2ljZS1kZXRhaWxzXFxkZXZpY2UtY2VydGlmaWNhdGUtaW52b2ljZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLWNlcnRpZmljYXRlLWludm9pY2UtZGV0YWlscy9kZXZpY2UtY2VydGlmaWNhdGUtaW52b2ljZS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7QUNHRjs7QURBQTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNHRjs7QUREQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0lGOztBRERBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNJRjs7QUREQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNJRjs7QUREQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ0lGOztBRERBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0lGOztBRERBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNJRjs7QUREQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0lGOztBRERBO0VBQ0Usd0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FDSUY7O0FEREE7RUFDRSxxQkFBQTtBQ0lGOztBRERBO0VBQ0U7SUFDRSxnQkFBQTtFQ0lGOztFRERBO0lBQ0UsVUFBQTtFQ0lGO0FBQ0Y7O0FEREE7RUFDRTtJQUNFLFNBQUE7RUNHRjs7RURBQTtJQUNFLFVBQUE7RUNHRjtBQUNGOztBREFBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUNFRjtBQUNGOztBRENBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUNDRjtBQUNGOztBREVBOztFQUVFLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7QUNBRjs7QURJRTtFQUNFLGFBQUE7QUNESjs7QURLQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNGRjs7QURJQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRE1BO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2RldmljZS1jZXJ0aWZpY2F0ZS1pbnZvaWNlLWRldGFpbHMvZGV2aWNlLWNlcnRpZmljYXRlLWludm9pY2UtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFiYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBncmV5O1xyXG59XHJcbi5pY29uIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmljb246aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhlYWQge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5zZWxlY3RlZFVwcGVyQ29sbGwge1xyXG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmNsaWNrIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM3ZDY3Zjg7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjN2Q2N2Y4O1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM3ZDY3Zjg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3ZDY3Zjg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDExcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IC00cHggN3B4ICNjMGI1ZmY7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIG1hcmdpbjogN3B4O1xyXG59XHJcblxyXG4uc2VsZWN0YWJsZS1pbnB1dCB7XHJcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5maWxlaW5wdXQge1xyXG4gIG1hcmdpbi10b3A6IDIxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuLmxhYmVsLWhlYWQge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xyXG59XHJcblxyXG4ubGFiZWwtaGVhZHMge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc3VibWl0QnRuIHtcclxuICBtYXJnaW46IDBweCA0MHB4IDBweCAwcHg7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIC0tY29sb3I6ICM3YzY4Zjg7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjN2M2OGY4O1xyXG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xyXG59XHJcblxyXG4uc3VibWl0YnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICM2MjUyZWU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZm9ybS1maWVsZCB7XHJcbiAgICB6b29tOiA4MCU7XHJcbiAgfVxyXG5cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweCkgYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDhweCAxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBkZi13cmFwcGVyLFxyXG4uZXhjZWwtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2V4Y2VsTmV3LnN2Z1wiKSBuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZmFiLWJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsYXZlbmRlcjtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLThweDtcclxuICByaWdodDogLTJweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5mYWItYnRuOmhvdmVyIHtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICBtYXJnaW4tbGVmdDogLTgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5maWxlLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5maWxlIHtcclxuICBtYXJnaW4tbGVmdDogOCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYxLCAxMDgsIDIzNik7XHJcbn1cclxuXHJcbi5kb2N1bWVudHMge1xyXG4gIG1hcmdpbjogMTlweCAxMHB4IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi51cHBlckNvbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW46IDJweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLnVwcGVyUm93IHtcclxuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xyXG4gIHBhZGRpbmc6IDFweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzdkNjdmODtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbn1cclxuLy8gLnNlbGVjdGVkVXBwZXJDb2wgey8vICAgYmFja2dyb3VuZDogI2ZmZmZmZjsvLyAgIHRleHQtYWxpZ246IGNlbnRlcjsvLyAgIGJvcmRlci1yYWRpdXM6IDhweDsvLyAgIG1hcmdpbjogMTBweDsvLyAgIGNvbG9yOiBibGFjazsvLyAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOy8vICAgY3Vyc29yOiBwb2ludGVyOy8vICAgZm9udC1zaXplOiAxM3B4Oy8vICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsvLyAgIGFsaWduLXNlbGY6IGNlbnRlcjsvLyB9XHJcbi8vIC5zZWxlY3RlZFVwcGVyQ29sOmhvdmVyIHsvLyAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7Ly8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTA5NWU3Oy8vIH1cclxuLy8gLnNlbGVjdGVkIHsvLyAgIGNvbG9yOiB3aGl0ZTsvLyAgIGJhY2tncm91bmQtY29sb3I6ICMzYjFkZmY7Ly8gfVxyXG4uc2VsZWN0ZWRVcHBlckNvbCB7XHJcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYjViNWI1O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLy8gLnNlbGVjdGVkVXBwZXJDb2w6aG92ZXIgey8vICAgY29sb3I6IHJnYigwLCAwLCAwKTsvLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7Ly8gICBmb250LXNpemU6IDEycHg7Ly8gICBmb250LXdlaWdodDogYm9sZDsvLyAgIHRyYW5zaXRpb246IDAuM3M7Ly8gICBwYWRkaW5nLXRvcDogOHB4Oy8vICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHg7Ly8gICBtYXJnaW4tdG9wOiAyMHB4Oy8vIH1cclxuLnNlbGVjdGVkIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM3ZDY3Zjg7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjN2Q2N2Y4O1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM3ZDY3Zjg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDExcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IC00cHggN3B4ICNjMGI1ZmY7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbiIsIi5mYWJidXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogZ3JleTtcbn1cblxuLmljb24ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5pY29uOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVhZCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2VsZWN0ZWRVcHBlckNvbGxsIHtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5jbGljayB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzdkNjdmODtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzdkNjdmODtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDExcHg7XG4gIGJveC1zaGFkb3c6IDBweCAtNHB4IDdweCAjYzBiNWZmO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgbWFyZ2luOiA3cHg7XG59XG5cbi5zZWxlY3RhYmxlLWlucHV0IHtcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uZmlsZWlucHV0IHtcbiAgbWFyZ2luLXRvcDogMjFweDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmxhYmVsLWhlYWQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xufVxuXG4ubGFiZWwtaGVhZHMge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zdWJtaXRCdG4ge1xuICBtYXJnaW46IDBweCA0MHB4IDBweCAwcHg7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XG59XG5cbi5zdWJtaXRidG4ge1xuICAtLWJhY2tncm91bmQ6ICM2MjUyZWU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4ucGRmLXdyYXBwZXIsXG4uZXhjZWwtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9leGNlbE5ldy5zdmdcIikgbm8tcmVwZWF0O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uZmFiLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogbGF2ZW5kZXI7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC04cHg7XG4gIHJpZ2h0OiAtMnB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uZmFiLWJ0bjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2I2YjZiNjtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5maWxlLWlucHV0LWNvbnRhaW5lciBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZpbGUge1xuICBtYXJnaW4tbGVmdDogOCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZDZjZWM7XG59XG5cbi5kb2N1bWVudHMge1xuICBtYXJnaW46IDE5cHggMTBweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVwcGVyQ29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi51cHBlclJvdyB7XG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gIHBhZGRpbmc6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGhlaWdodDogNTZweDtcbn1cblxuLnNlbGVjdGVkVXBwZXJDb2wge1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiNWI1YjU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnNlbGVjdGVkIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzdkNjdmODtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMXB4O1xuICBib3gtc2hhZG93OiAwcHggLTRweCA3cHggI2MwYjVmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/device-certificate-invoice-details/device-certificate-invoice-details.page.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/delar-application/device-certificate-invoice-details/device-certificate-invoice-details.page.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DeviceCertificateInvoiceDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceCertificateInvoiceDetailsPage", function() { return DeviceCertificateInvoiceDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/pdf-logo.service */ "./src/app/services/pdf-logo.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _received_details_received_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./received-details/received-details.component */ "./src/app/delar-application/device-certificate-invoice-details/received-details/received-details.component.ts");
/* harmony import */ var _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-details/view-details.component */ "./src/app/delar-application/device-certificate-invoice-details/view-details/view-details.component.ts");
/* harmony import */ var _view_imei_view_imei_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view-imei/view-imei.component */ "./src/app/delar-application/device-certificate-invoice-details/view-imei/view-imei.component.ts");














let DeviceCertificateInvoiceDetailsPage = class DeviceCertificateInvoiceDetailsPage {
    constructor(platform, formBuilder, modalController, alertController, commonService, ajaxService, pdfLogoService, ete) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.pdfLogoService = pdfLogoService;
        this.ete = ete;
        this.button = false;
        this.show = false;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({});
        this.hideSerialNo = false;
        this.today = new Date();
        this.showplaname = false;
        this.name = false;
        this.willDownload = false;
        this.output = "";
        this.companyId = localStorage.getItem("userName");
        this.imeiIssues = [];
        this.excellKeyValid = false;
        this.arrow = false;
    }
    scrollToTop() {
        this.content.scrollToTop(500);
    }
    scrollToBottom() {
        this.content.scrollToBottom(500);
    }
    logScrolling(ev) {
        if (ev.detail.scrollTop > 2) {
            this.arrow = true;
        }
        if (ev.detail.scrollTop < 2) {
            this.arrow = false;
        }
    }
    clear() {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        var todaytime = now.getHours() + ":" + now.getMinutes();
        this.hideSerialNo = false;
        this.SalesinvoiceForm.patchValue({
            dealerid: "",
            invoiceno: "",
            invoiceamount: "",
            invoicedate: today,
            noofunits: "",
            fileupload: "",
            invoicedocument: "",
        });
        this.showplaname = false;
        this.uploader.queue.length = 0;
    }
    fileclear() {
        this.SalesinvoiceForm.patchValue({
            fileupload: "",
        });
    }
    createForm() {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        var todaytime = now.getHours() + ":" + now.getMinutes();
        this.SalesinvoiceForm = this.formBuilder.group({
            dealerid: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            invoiceno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            invoicedate: [today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            invoiceamount: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            noofunits: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fileupload: [""],
            invoicedocument: [""],
        });
    }
    getDealer() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["serverUrl"].web + "/esim/getDealer";
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.Dealer = res;
        });
    }
    // getimeidetails = (event?: {
    //   component: IonicSelectableComponent;
    //   value: any;
    // }) => {
    //   if (event.value != undefined)
    //     this.SalesinvoiceForm.value.dealerid = event.value;
    //   var url =
    //     serverUrl.web +
    //     "/esim/getInvoiceCertificate?companyid" +
    //     localStorage.getItem("corpId") +
    //     "&dealer=" +
    //     this.SalesinvoiceForm.value.dealerid;
    //   this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
    //     this.Imeilist = res;
    //     if (this.Imeilist.length == 0) {
    //       this.showplaname = false;
    //       this.SalesinvoiceForm.patchValue({
    //         imei: "",
    //       });
    //     } else {
    //       this.showplaname = true;
    //     }
    //   });
    // };
    onFileChange(ev) {
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
                workBook = xlsx__WEBPACK_IMPORTED_MODULE_10__["read"](data, { type: "binary" });
                jsonData = workBook.SheetNames.reduce((initial, name) => {
                    const sheet = workBook.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].sheet_to_json(sheet);
                    return initial;
                }, {});
                let json = [];
                for (let i = 0; i < jsonData["Sheet1"].length; i++) {
                    let newData = {};
                    newData["imei"] = jsonData["Sheet1"][i]["imei"].toString();
                    json.push(newData);
                }
                this.dataString = json;
                this.output = this.dataString.slice(0, 300).concat("...");
            };
            reader.readAsBinaryString(file);
        }
        else {
            this.commonService.showConfirm("Please insert only excel file (.xlsx)");
        }
    }
    add() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.SalesinvoiceForm.value.fileupload == "") {
                this.commonService.showConfirm("IMEI Excel not Upload");
            }
            else {
                if (this.dataString.length == 0) {
                    this.commonService.showConfirm("Check your excell file,don't enter blank spaces");
                    this.fileclear();
                }
                else {
                    var excellKeys = Object.keys(this.dataString[0]);
                    for (var i = 0; i < excellKeys.length; i++) {
                        if (excellKeys[i] == "imei") {
                            console.log("present");
                            this.excellKeyValid = true;
                        }
                    }
                    if (this.name == true && this.excellKeyValid == true) {
                        this.button = true;
                        const file = this.uploader;
                        var data;
                        data = {
                            headerid: "",
                            dealerid: this.SalesinvoiceForm.value.dealerid.toString(),
                            invoiceno: this.SalesinvoiceForm.value.invoiceno.toString(),
                            invoicedate: this.SalesinvoiceForm.value.invoicedate.toString(),
                            invoiceamount: this.SalesinvoiceForm.value.invoiceamount.toString(),
                            noofunits: this.SalesinvoiceForm.value.noofunits.toString(),
                            imeinos: this.dataString,
                            createdby: localStorage.getItem("userName"),
                        };
                        const testData = new FormData();
                        if (file.queue.length != 0) {
                            testData.append("InvoiceDocument", file.queue[0]._file);
                            testData.append("data", JSON.stringify(data));
                        }
                        else {
                            const api = yield fetch(this.pdfLogoService.imgdata.no_img);
                            const blob = yield api.blob();
                            const default_file = new File([blob], "File name", {
                                type: "image/png",
                            });
                            testData.append("InvoiceDocument", default_file);
                            testData.append("data", JSON.stringify(data));
                        }
                        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["serverUrl"].web + "/esim/saveEsimCertificateInvoiceHeader";
                        this.ajaxService.ajaxPostWithFile(url, testData).subscribe((res) => {
                            if (res.message == "Certificate Invoice Saved Successfully") {
                                this.commonService.showConfirm(res.message);
                                this.clear();
                                this.tableData = res;
                                this.myGrid.clearselection();
                                this.button = false;
                                this.getdatas();
                            }
                            else if (res.message == "Certificate Invoice Not Saved Successfully") {
                                this.commonService.showConfirm(res.message);
                                this.button = false;
                                this.clear();
                            }
                            else {
                                this.commonService.showConfirm(res.message);
                                this.button = false;
                            }
                        });
                    }
                }
            }
        });
    }
    edit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.SalesinvoiceForm.value.fileupload == "") {
                this.button = true;
                this.showplaname = true;
                const file = this.uploader;
                var data;
                data = {
                    headerid: this.selectedRow.headerid.toString(),
                    dealerid: this.SalesinvoiceForm.value.dealerid.toString(),
                    invoiceno: this.SalesinvoiceForm.value.invoiceno.toString(),
                    invoicedate: this.SalesinvoiceForm.value.invoicedate.toString(),
                    invoiceamount: this.SalesinvoiceForm.value.invoiceamount.toString(),
                    noofunits: this.SalesinvoiceForm.value.noofunits.toString(),
                    imeinos: this.dataString,
                    createdby: localStorage.getItem("userName"),
                };
                const testData = new FormData();
                if (file.queue.length != 0) {
                    testData.append("InvoiceDocument", file.queue[0]._file);
                    testData.append("data", JSON.stringify(data));
                }
                else {
                    const api = yield fetch(this.pdfLogoService.imgdata.no_img);
                    const blob = yield api.blob();
                    const default_file = new File([blob], "File name", {
                        type: "image/png",
                    });
                    testData.append("InvoiceDocument", default_file);
                    testData.append("data", JSON.stringify(data));
                }
                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["serverUrl"].web + "/esim/saveEsimCertificateInvoiceHeader";
                this.ajaxService.ajaxPostWithFile(url, testData).subscribe((res) => {
                    if (res.message == "Certificate Invoice Saved Successfully") {
                        this.commonService.showConfirm(res.message);
                        this.clear();
                        this.tableData = res;
                        this.getdatas();
                        this.button = false;
                        this.myGrid.clearselection();
                    }
                    else if (res.message == "Certificate Invoice Not Saved Successfully") {
                        this.commonService.showConfirm(res.message);
                        this.clear();
                        this.button = false;
                    }
                    else {
                        this.commonService.showConfirm(res.message);
                        this.button = false;
                    }
                });
                this.clear();
                this.hideSerialNo = false;
                this.showplaname = false;
            }
            else {
                if (this.dataString.length == 0) {
                    this.commonService.showConfirm("Check your excell file,don't enter blank spaces");
                    this.fileclear();
                }
                else {
                    var excellKeys = Object.keys(this.dataString[0]);
                    for (var i = 0; i < excellKeys.length; i++) {
                        if (excellKeys[i] == "imei") {
                            console.log("present");
                            this.excellKeyValid = true;
                        }
                    }
                    if (this.name == true && this.excellKeyValid == true) {
                        this.button = true;
                        this.showplaname = true;
                        const file = this.uploader;
                        var data;
                        data = {
                            headerid: this.selectedRow.headerid.toString(),
                            dealerid: this.SalesinvoiceForm.value.dealerid.toString(),
                            invoiceno: this.SalesinvoiceForm.value.invoiceno.toString(),
                            invoicedate: this.SalesinvoiceForm.value.invoicedate.toString(),
                            invoiceamount: this.SalesinvoiceForm.value.invoiceamount.toString(),
                            noofunits: this.SalesinvoiceForm.value.noofunits.toString(),
                            imeinos: this.dataString,
                            createdby: localStorage.getItem("userName"),
                        };
                        const testData = new FormData();
                        if (file.queue.length != 0) {
                            testData.append("InvoiceDocument", file.queue[0]._file);
                            testData.append("data", JSON.stringify(data));
                        }
                        else {
                            const api = yield fetch(this.pdfLogoService.imgdata.no_img);
                            const blob = yield api.blob();
                            const default_file = new File([blob], "File name", {
                                type: "image/png",
                            });
                            testData.append("InvoiceDocument", default_file);
                            testData.append("data", JSON.stringify(data));
                        }
                        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["serverUrl"].web + "/esim/saveEsimCertificateInvoiceHeader";
                        this.ajaxService.ajaxPostWithFile(url, testData).subscribe((res) => {
                            if (res.message == "Certificate Invoice Saved Successfully") {
                                this.commonService.showConfirm(res.message);
                                this.clear();
                                this.tableData = res;
                                this.getdatas();
                                this.button = false;
                                this.myGrid.clearselection();
                            }
                            else if (res.message == "Certificate Invoice Not Saved Successfully") {
                                this.commonService.showConfirm(res.message);
                                this.clear();
                                this.button = false;
                            }
                            else {
                                this.commonService.showConfirm(res.message);
                                this.button = false;
                            }
                        });
                        this.clear();
                        this.hideSerialNo = false;
                        this.showplaname = false;
                    }
                }
            }
        });
    }
    setValue() {
        this.showplaname = true;
        this.hideSerialNo = true;
        this.SalesinvoiceForm.patchValue({
            dealerid: this.selectedRow.dealerid,
            invoiceno: this.selectedRow.invoiceno,
            invoicedate: this.selectedRow.invoicedate,
            invoiceamount: this.selectedRow.invoiceamount,
            noofunits: this.selectedRow.noofunits,
        });
    }
    getdatas() {
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["serverUrl"].web + "/esim/getAllCertificateEsimInvoice";
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            if (res.length == 0) {
                this.commonService.dismissLoader();
            }
            this.tableData = res;
            this.commonService.dismissLoader();
            this.renderer = (row, column, value) => {
                if (value == "" || null || undefined) {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                        0 +
                        "</span>");
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
                    text: "Dealer",
                    datafield: "dealerid",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 85,
                },
                {
                    text: "Invoice No",
                    datafield: "invoiceno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 105,
                },
                {
                    text: "Invoice Date",
                    datafield: "invoicedate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 105,
                },
                {
                    text: "Invoice Amt",
                    datafield: "invoiceamount",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 90,
                },
                {
                    text: "Total Received Amt",
                    datafield: "totalamountreceived",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
                },
                {
                    text: "Balance Amt",
                    datafield: "balanceamount",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 90,
                },
                {
                    text: "No of Units",
                    datafield: "noofunits",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 85,
                },
                {
                    text: "Created by",
                    datafield: "createdby",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 85,
                },
                {
                    text: "",
                    datafield: "receivedetails",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                    cellsrenderer: () => {
                        return this.myPlatform == "desktop"
                            ? "Received Amt"
                            : "<button>Received Amt</button>";
                    },
                    buttonclick: (row) => {
                        this.receivedpopup(row);
                    },
                },
                {
                    text: "",
                    datafield: "Edit Detail",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 60,
                    cellsrenderer: () => {
                        return this.myPlatform == "desktop"
                            ? "Edit"
                            : "<button>Edit</button>";
                    },
                    buttonclick: (row) => {
                        this.setValue();
                    },
                },
                {
                    text: "",
                    datafield: "detail",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 80,
                    cellsrenderer: () => {
                        return this.myPlatform == "desktop"
                            ? "Details"
                            : "<button>Details</button>";
                    },
                    buttonclick: (row) => {
                        this.detailspop(row);
                    },
                },
                {
                    text: "",
                    datafield: "download",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 80,
                    cellsrenderer: () => {
                        return "Invoice";
                    },
                    buttonclick: (row) => {
                        this.Download(row);
                    },
                },
                {
                    text: "",
                    datafield: "viewimei",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 80,
                    cellsrenderer: () => {
                        return "View IMEI";
                    },
                    buttonclick: (row) => {
                        this.imeipop(row);
                    },
                },
            ];
        });
    }
    receivedpopup(row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _received_details_received_details_component__WEBPACK_IMPORTED_MODULE_11__["ReceivedDetailsComponent"],
                cssClass: "payform",
                componentProps: {
                    value: this.selectedRow.headerid,
                },
            });
            modal.onDidDismiss().then((data) => {
                if (data.data.data == "Renewal Invoice Detail Saved Successfully") {
                    this.getdatas();
                }
            });
            return yield modal.present();
        });
    }
    detailspop(row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_12__["ViewDetailsComponent"],
                cssClass: "viewserialfrom",
                componentProps: {
                    value: this.selectedRow.invoiceno,
                },
            });
            modal.onDidDismiss().then(() => { });
            return yield modal.present();
        });
    }
    Download(row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.selectedRow.uploadinvoice != null) {
                const link = document.createElement("a");
                link.href = this.selectedRow.uploadinvoice;
                link.target = "_blank";
                link.click();
            }
            else {
                this.commonService.showConfirm("Invoice Document Not Uploaded");
            }
        });
    }
    imeipop(row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _view_imei_view_imei_component__WEBPACK_IMPORTED_MODULE_13__["ViewImeiComponent"],
                cssClass: "simupdateform",
                componentProps: {
                    valueone: this.selectedRow.invoiceno,
                    value: this.selectedRow.imei,
                },
            });
            modal.onDidDismiss().then((data) => {
                if (data.data.data == "IMEI Removed Successfully") {
                    this.getdatas();
                }
            });
            return yield modal.present();
        });
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row.bounddata;
        this.show = true;
    }
    newfunc() {
        let data = this.tableData;
        console.log(this.myGrid);
        let coloumnArray = [];
        this.myGrid.attrColumns.map((p) => {
            coloumnArray.push(p.datafield);
        });
        for (let i = 0; i < data.length; i++) {
            let k = Object.keys(data[i]);
            for (let j = 0; j < k.length; j++) {
                if (coloumnArray.includes(k[j]) == false) {
                    delete data[i][k[j].toString()];
                }
            }
        }
        let forExcel = [];
        data.map((val) => {
            let newArray = Object.values(val);
            forExcel.push(newArray);
        });
        var Header = Object.keys(data[0]);
        let reportData = {
            title: "Device Certificate Invoice Details",
            data: forExcel,
            headers: Header,
        };
        this.ete.exportExcel(reportData);
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.maxDate = this.today.getFullYear() + "-";
        this.maxDate +=
            (this.today.getMonth() + 1 < 10
                ? "0" + (this.today.getMonth() + 1).toString()
                : (this.today.getMonth() + 1).toString()) + "-";
        this.maxDate +=
            this.today.getDate() < 10
                ? "0" + this.today.getDate().toString()
                : this.today.getDate().toString();
        this.createForm();
    }
    ngAfterViewInit() {
        this.myGrid.horizontalscrollbarstep(["70"]);
        this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
    }
    ionViewWillEnter() {
        this.clear();
        this.getDealer();
        this.getdatas();
    }
};
DeviceCertificateInvoiceDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_8__["PdfLogoService"] },
    { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DeviceCertificateInvoiceDetailsPage.prototype, "myGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DeviceCertificateInvoiceDetailsPage.prototype, "content", void 0);
DeviceCertificateInvoiceDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-device-certificate-invoice-details",
        template: __webpack_require__(/*! raw-loader!./device-certificate-invoice-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-certificate-invoice-details/device-certificate-invoice-details.page.html"),
        styles: [__webpack_require__(/*! ./device-certificate-invoice-details.page.scss */ "./src/app/delar-application/device-certificate-invoice-details/device-certificate-invoice-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_8__["PdfLogoService"],
        src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"]])
], DeviceCertificateInvoiceDetailsPage);



/***/ }),

/***/ "./src/app/delar-application/device-certificate-invoice-details/received-details/received-details.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/delar-application/device-certificate-invoice-details/received-details/received-details.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  background-color: #7c68f8;\n}\n\n.label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 18px;\n}\n\n.diable-style {\n  background: white;\n  line-height: 18px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #ffebcd;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLWNlcnRpZmljYXRlLWludm9pY2UtZGV0YWlscy9yZWNlaXZlZC1kZXRhaWxzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGRldmljZS1jZXJ0aWZpY2F0ZS1pbnZvaWNlLWRldGFpbHNcXHJlY2VpdmVkLWRldGFpbHNcXHJlY2VpdmVkLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2RldmljZS1jZXJ0aWZpY2F0ZS1pbnZvaWNlLWRldGFpbHMvcmVjZWl2ZWQtZGV0YWlscy9yZWNlaXZlZC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLFNBQUE7RUNDRjs7RURFQTtJQUNFLFVBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9kZXZpY2UtY2VydGlmaWNhdGUtaW52b2ljZS1kZXRhaWxzL3JlY2VpdmVkLWRldGFpbHMvcmVjZWl2ZWQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjNjhmODtcclxufVxyXG5cclxuLmxhYmVsLXN0eWxlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5kaWFibGUtc3R5bGUge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4uY29udGVudC1zdHlsZSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2wtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4jYWRkLWljb24ge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZWJjZDtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIC0tYmFja2dyb3VuZDogIzdjNjhmODtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIHpvb206IDgwJTtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IC01cHggNXB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbi5zZWxlY3RhYmxlLWlucHV0IHtcclxuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4iLCIuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M2OGY4O1xufVxuXG4ubGFiZWwtc3R5bGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmRpYWJsZS1zdHlsZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmNvbnRlbnQtc3R5bGUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbiNhZGQtaWNvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZWJjZDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgLS1iYWNrZ3JvdW5kOiAjN2M2OGY4O1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/device-certificate-invoice-details/received-details/received-details.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/delar-application/device-certificate-invoice-details/received-details/received-details.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ReceivedDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceivedDetailsComponent", function() { return ReceivedDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let ReceivedDetailsComponent = class ReceivedDetailsComponent {
    constructor(platform, formBuilder, modalController, ajaxService, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.today = new Date();
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    submitBtn() {
        var data;
        data = {
            createdby: localStorage.getItem("userName"),
            headerid: this.value.toString(),
            receiveddate: this.receiveForm.value.receiveddate + " " + "00:00:00",
            receivedamount: this.receiveForm.value.receivedamount.toString(),
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/esim/saveEsimCertificateInvoiceDetails";
        this.ajaxService
            .ajaxPostWithString(url, JSON.stringify(data))
            .subscribe((res) => {
            if (JSON.parse(res).message ==
                "Certificate Invoice Detail Saved Successfully") {
                this.commonService.showConfirm("Certificate Invoice Detail Saved Successfully");
                this.modalController.dismiss({
                    data: "Certificate Invoice Detail Saved Successfully",
                });
            }
            else if (res.message == "Certificate Invoice Detail Not Saved Successfully") {
                this.commonService.showConfirm("Certificate Invoice Detail Not Saved Successfully");
            }
            else {
                this.commonService.showConfirm("Your Amount is greater than invoice amount");
            }
        });
    }
    createForm() {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        var todaytime = now.getHours() + ":" + now.getMinutes();
        this.receiveForm = this.formBuilder.group({
            dealerid: [""],
            invoiceno: [""],
            invoiceamount: [""],
            totalamountreceived: [""],
            balanceamount: [""],
            imei: [""],
            receiveddate: [today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            receivedamount: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    reset() {
        this.receiveForm.patchValue({
            dealerid: "",
            invoiceno: "",
            invoiceamount: "",
            totalamountreceived: "",
            balanceamount: "",
            imei: "",
            receiveddate: "",
            receivedamount: "",
        });
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.createForm();
        this.maxDate = this.today.getFullYear() + "-";
        this.maxDate +=
            (this.today.getMonth() + 1 < 10
                ? "0" + (this.today.getMonth() + 1).toString()
                : (this.today.getMonth() + 1).toString()) + "-";
        this.maxDate +=
            this.today.getDate() < 10
                ? "0" + this.today.getDate().toString()
                : this.today.getDate().toString();
        console.log(this.value);
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/esim/getSingleCertificateEsimInvoice?headerid=" +
            this.value;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            console.log(res);
            {
                this.receivedetail = res;
                this.receiveForm.patchValue({
                    dealerid: this.receivedetail.dealerid,
                    invoiceno: this.receivedetail.invoiceno,
                    invoiceamount: this.receivedetail.invoiceamount,
                    totalamountreceived: this.receivedetail.totalamountreceived,
                    balanceamount: this.receivedetail.balanceamount,
                    imei: this.receivedetail.imei,
                });
            }
        });
    }
};
ReceivedDetailsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ReceivedDetailsComponent.prototype, "value", void 0);
ReceivedDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-received-details",
        template: __webpack_require__(/*! raw-loader!./received-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-certificate-invoice-details/received-details/received-details.component.html"),
        styles: [__webpack_require__(/*! ./received-details.component.scss */ "./src/app/delar-application/device-certificate-invoice-details/received-details/received-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], ReceivedDetailsComponent);



/***/ }),

/***/ "./src/app/delar-application/device-certificate-invoice-details/view-details/view-details.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/delar-application/device-certificate-invoice-details/view-details/view-details.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2RldmljZS1jZXJ0aWZpY2F0ZS1pbnZvaWNlLWRldGFpbHMvdmlldy1kZXRhaWxzL3ZpZXctZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/delar-application/device-certificate-invoice-details/view-details/view-details.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/delar-application/device-certificate-invoice-details/view-details/view-details.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ViewDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDetailsComponent", function() { return ViewDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









let ViewDetailsComponent = class ViewDetailsComponent {
    constructor(ajaxService, router, formBuilder, commonService, modalController) {
        this.ajaxService = ajaxService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.modalController = modalController;
        this.show = false;
        this.page = [];
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    getdatas() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/esim/getCertificateInvoiceDetails?invoiceno=" +
            this.value;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.tableData = res;
            this.page = ["100", "200", "500", "1000"];
            this.renderer = (row, column, value) => {
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
                    text: "Invoice No",
                    datafield: "invoiceno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 187,
                },
                {
                    text: "Received Date",
                    datafield: "receiveddate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 189,
                },
                {
                    text: "Paid Amount",
                    datafield: "receivedamount",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 187,
                },
                {
                    text: "Created by",
                    datafield: "createdby",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 189,
                },
            ];
        });
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row;
        this.show = true;
    }
    ngOnInit() {
        this.getdatas();
    }
};
ViewDetailsComponent.ctorParameters = () => [
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ViewDetailsComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("selectComponent", { static: false }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridComponent"])
], ViewDetailsComponent.prototype, "myGrid", void 0);
ViewDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-view-details",
        template: __webpack_require__(/*! raw-loader!./view-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-certificate-invoice-details/view-details/view-details.component.html"),
        styles: [__webpack_require__(/*! ./view-details.component.scss */ "./src/app/delar-application/device-certificate-invoice-details/view-details/view-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], ViewDetailsComponent);



/***/ }),

/***/ "./src/app/delar-application/device-certificate-invoice-details/view-imei/view-imei.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/delar-application/device-certificate-invoice-details/view-imei/view-imei.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2RldmljZS1jZXJ0aWZpY2F0ZS1pbnZvaWNlLWRldGFpbHMvdmlldy1pbWVpL3ZpZXctaW1laS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/delar-application/device-certificate-invoice-details/view-imei/view-imei.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/delar-application/device-certificate-invoice-details/view-imei/view-imei.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ViewImeiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewImeiComponent", function() { return ViewImeiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








let ViewImeiComponent = class ViewImeiComponent {
    constructor(platform, formBuilder, modalController, ajaxService, commonService, alertController) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.alertController = alertController;
        this.page = [];
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    getDatas() {
        console.log(this.value);
        this.page = [];
        if (this.value != "") {
            this.tableData = JSON.parse(this.value);
        }
        this.page = ["100", "200", "500", "1000"];
        this.renderer = (row, column, value) => {
            if (value == "" || null || undefined || value == ",") {
                return "--";
            }
            else {
                return ('<span style="line-height:32px;font-size:17px;color:darkblue;margin:auto;padding-left: 5px;">' +
                    value +
                    "</span>");
            }
        };
        this.source = { localdata: this.tableData };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.columns = [
            {
                text: "IMEI",
                datafield: "imei",
                cellsrenderer: this.renderer,
                cellsalign: "left",
                align: "left",
                width: 350,
            },
            {
                text: "",
                datafield: "remove",
                columntype: "button",
                cellsalign: "center",
                align: "center",
                width: 150,
                cellsrenderer: () => {
                    return "Remove";
                },
                buttonclick: (row) => {
                    this.removeModel(row);
                },
            },
        ];
    }
    removeModel(row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.selectedRow) {
                const alert = yield this.alertController.create({
                    header: "Remove",
                    backdropDismiss: false,
                    message: "Are you sure you want to remove?",
                    buttons: [
                        {
                            text: "Cancel",
                            role: "cancel",
                            handler: (data) => { },
                        },
                        {
                            text: "Ok",
                            handler: (data) => {
                                this.remove();
                            },
                        },
                    ],
                });
                yield alert.present();
            }
        });
    }
    remove() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                "/esim/removeCertificateInvoiceimei?invoiceno=" +
                this.valueone +
                "&imeino=" +
                this.selectedRow.imei;
            this.ajaxService.ajaxGet(url).subscribe((res) => {
                if (res.message == "IMEI Removed Successfully") {
                    this.commonService.showConfirm("IMEI Removed Successfully");
                    this.modalController.dismiss({
                        data: "IMEI Removed Successfully",
                    });
                }
                else {
                    this.commonService.showConfirm(res.message);
                }
            });
        });
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row.bounddata;
    }
    ngOnInit() {
        this.getDatas();
    }
};
ViewImeiComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
], ViewImeiComponent.prototype, "myGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ViewImeiComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ViewImeiComponent.prototype, "valueone", void 0);
ViewImeiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-view-imei",
        template: __webpack_require__(/*! raw-loader!./view-imei.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-certificate-invoice-details/view-imei/view-imei.component.html"),
        styles: [__webpack_require__(/*! ./view-imei.component.scss */ "./src/app/delar-application/device-certificate-invoice-details/view-imei/view-imei.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], ViewImeiComponent);



/***/ })

}]);
//# sourceMappingURL=device-certificate-invoice-details-device-certificate-invoice-details-module-es2015.js.map