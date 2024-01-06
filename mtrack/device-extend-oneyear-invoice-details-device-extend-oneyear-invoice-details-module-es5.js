(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-extend-oneyear-invoice-details-device-extend-oneyear-invoice-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-extend-oneyear-invoice-details/device-extend-oneyear-invoice-details.page.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-extend-oneyear-invoice-details/device-extend-oneyear-invoice-details.page.html ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons\n      *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\"\n      slot=\"start\"\n    >\n      <ion-icon\n        routerLink=\"/tabs-login/esim-dashboard\"\n        name=\"arrow-back\"\n        style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-row>\n      <ion-title *ngIf=\"myPlatform != 'desktop'\"\n        >Extend 1 Yr Invoice Details</ion-title\n      >\n      <ion-title *ngIf=\"myPlatform == 'desktop'\"\n        >Device Invoice Details</ion-title\n      >\n      <ion-col\n        *ngIf=\"myPlatform == 'desktop'\"\n        size=\"8\"\n        style=\"text-align: right\"\n      >\n        <ion-button class=\"submitBtn\" size=\"small\" (click)=\"newfunc()\"\n          >Export</ion-button\n        >\n        <ion-row style=\"margin: 0px; padding: 0; float: right\">\n          <ion-col style=\"margin-top: 0\" class=\"tooltip\">\n            <ion-fab-button\n              size=\"small\"\n              class=\"fab-btn\"\n              href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/DeviceExtendOneYearInvoice.xlsx\"\n              download=\"sample.xlsx\"\n            >\n              <div class=\"excel-wrapper\"></div>\n            </ion-fab-button>\n            <span class=\"tooltiptext\">Excel-Format</span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngIf=\"myPlatform != 'desktop'\" style=\"text-align: right\">\n        <ion-row style=\"margin: 0px; padding: 0; float: right\">\n          <ion-col style=\"margin-top: 0\" class=\"tooltip\">\n            <ion-fab-button\n              size=\"small\"\n              class=\"fab-btn\"\n              href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/DeviceExtendOneYearInvoice.xlsx\"\n              download=\"sample.xlsx\"\n            >\n              <div class=\"excel-wrapper\"></div>\n            </ion-fab-button>\n            <span class=\"tooltiptext\">Excel-Format</span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"myPlatform == 'desktop'\" class=\"upperRow\">\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/esim-purchase-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Esim Purchase Invoice</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/esim-sales-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Sales Invoice</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/device-renewal-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Renewal Invoice</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/device-topup-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Topup Invoice</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/device-extend-oneyear-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Extend 1 Yr Invoice</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/device-certificate-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Certificate Invoice</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"head\">\n      <ion-col\n        [ngClass]=\"{'selectedUpperColll': 'true'}\"\n        routerLink=\"/tabs-login/device-extend-oneyear-invoice-details\"\n        routerLinkActive=\"click\"\n        size=\"3\"\n      >\n        <ion-label>Old </ion-label>\n      </ion-col>\n\n      <ion-col\n        style=\"margin-left: 10px\"\n        [ngClass]=\"{'selectedUpperColll': 'true'}\"\n        routerLink=\"/tabs-login/extend-oneyear-invoice-details\"\n        routerLinkActive=\"click\"\n        size=\"3\"\n      >\n        <ion-label>New</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"wrapper-container\">\n      <ion-col size=\"12\">\n        <form [formGroup]=\"extendform\">\n          <ion-row class=\"form-field\">\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Dealer:</ion-label>\n              <ionic-selectable\n                class=\"input selectable-input\"\n                formControlName=\"dealerid\"\n                placeholder=\"Select the Dealer\"\n                [items]=\"Dealer\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n              >\n              </ionic-selectable>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Invoice Number:</ion-label>\n              <ion-input\n                type=\"text\"\n                placeholder=\"Enter the Invoice No\"\n                formControlName=\"invoiceno\"\n                class=\"input\"\n              >\n              </ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Invoice Date:</ion-label>\n              <ion-input\n                type=\"date\"\n                formControlName=\"invoicedate\"\n                [max]=\"maxDate\"\n                class=\"input\"\n              ></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Invoice Amount:</ion-label>\n              <ion-input\n                type=\"number\"\n                placeholder=\"Enter the Invoice Amount\"\n                formControlName=\"invoiceamount\"\n                class=\"input\"\n              ></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">No of Units:</ion-label>\n              <ion-input\n                type=\"number\"\n                placeholder=\"Enter the Units\"\n                formControlName=\"noofunits\"\n                class=\"input\"\n              >\n              </ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">File Upload:</ion-label>\n              <input\n                type=\"file\"\n                (change)=\"onFileChange($event)\"\n                formControlName=\"fileupload\"\n                class=\"documents\"\n              />\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Invoice Document:</ion-label>\n              <input\n                type=\"file\"\n                class=\"documents\"\n                formControlName=\"invoicedocument\"\n                ng2FileSelect\n                [uploader]=\"uploader\"\n              />\n            </ion-col>\n\n            <ion-col style=\"margin: 27px 0px 0px; text-align: end\">\n              <ion-button\n                *ngIf=\"!hideSerialNo\"\n                class=\"submitbtn\"\n                (click)=\"add()\"\n                [disabled]=\"!extendform.valid || button\"\n                >Add</ion-button\n              >\n              <ion-button\n                *ngIf=\"hideSerialNo\"\n                class=\"submitbtn\"\n                (click)=\"edit()\"\n                [disabled]=\"!extendform.valid || button\"\n                >Edit</ion-button\n              >\n              <ion-button class=\"submitbtn\" (click)=\"clear()\">Clear</ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n\n    <jqxGrid\n      #myGrid\n      [theme]=\"'material'\"\n      (onRowclick)=\"myGridOnRowSelect($event)\"\n      [width]=\"'99%'\"\n      [autoheight]=\"true\"\n      [source]=\"dataAdapter\"\n      [enablebrowserselection]=\"true\"\n      [sortable]=\"true\"\n      [filterable]=\"true\"\n      [columns]=\"columns\"\n      [columnsresize]=\"true\"\n      [enabletooltips]=\"true\"\n      [pageable]=\"true\"\n      [showfilterrow]=\"true\"\n      style=\"\n        font-size: 16px;\n        text-align: center !important;\n        margin: auto;\n        cursor: pointer;\n      \"\n    >\n    </jqxGrid>\n  </ion-grid>\n\n  <ion-fab\n    *ngIf=\"arrow\"\n    style=\"margin-right: 1%; margin-bottom: 9%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToTop()\">\n      <ion-icon class=\"icon\" name=\"arrow-up\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab\n    *ngIf=\"arrow\"\n    style=\"margin-right: 1%; margin-bottom: 5%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToBottom()\">\n      <ion-icon class=\"icon\" name=\"arrow-down\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-extend-oneyear-invoice-details/received-extend-details/received-extend-details.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-extend-oneyear-invoice-details/received-extend-details/received-extend-details.component.html ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Received Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"myPlatform != 'desktop'\" class=\"content-style label-style\">\n  <ion-grid>\n    <ion-row class=\"form-field\">\n      <ion-col\n        size=\"12\"\n        size-sm=\"12\"\n        size-md=\"10\"\n        offset-md=\"1\"\n        size-lg=\"12\"\n        offset-lg=\"0\"\n      >\n        <form [formGroup]=\"receiveForm\">\n          <div class=\"wrapper-form\">\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Dealer:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"dealerid\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Invoice No:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"invoiceno\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Invoice Amount:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"invoiceamount\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Total Received Amt:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"totalamountreceived\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Balance Amount:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"balanceamount\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">No of Units:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"noofunits\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <!-- <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Total Supplied Units:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"totalsuppliedunits\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row> -->\n\n            <!-- <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Balance Units:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"balanceunits\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row> -->\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Received Date:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"date\"\n                  [max]=\"maxDate\"\n                  formControlName=\"receiveddate\"\n                  placeholder=\"Enter the Select Date\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Received Amount:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"receivedamount\"\n                  placeholder=\"Enter the Received Amount\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <!-- <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Supplied Units:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"suppliedunits\"\n                  placeholder=\"Enter the Supplied Units\"\n                ></ion-input>\n              </ion-col>\n            </ion-row> -->\n          </div>\n        </form>\n\n        <ion-row class=\"content-style\">\n          <ion-col style=\"text-align: center !important; padding: 20px\">\n            <ion-button\n              class=\"button\"\n              type=\"submit\"\n              [disabled]=\"!receiveForm.valid\"\n              (click)=\"submitBtn()\"\n              >Submit</ion-button\n            >\n            <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\"\n              >Cancel</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf=\"myPlatform == 'desktop'\" class=\"content-style label-style\">\n  <ion-row class=\"form-field\">\n    <ion-col>\n      <form [formGroup]=\"receiveForm\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Dealer:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"dealerid\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Invoice No:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"invoiceno\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Invoice Amount:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"invoiceamount\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\"\n                >Total Received Amt:</ion-col\n              >\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"totalamountreceived\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Balance Amount:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"balanceamount\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">No of Units:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"noofunits\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <!-- <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\"\n                >Total Supplied Units:</ion-col\n              >\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"totalsuppliedunits\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row> -->\n\n            <!-- <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Balance Units:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"balanceunits\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row> -->\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Received Date:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"date\"\n                  [max]=\"maxDate\"\n                  formControlName=\"receiveddate\"\n                  placeholder=\"Enter the Select Date\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Received Amount:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"receivedamount\"\n                  placeholder=\"Enter the Received Amount\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <!-- <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Supplied Units:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"suppliedunits\"\n                  placeholder=\"Enter the Supplied Units\"\n                ></ion-input>\n              </ion-col>\n            </ion-row> -->\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 10px\">\n          <ion-button\n            class=\"button\"\n            type=\"submit\"\n            [disabled]=\"!receiveForm.valid\"\n            (click)=\"submitBtn()\"\n            >Submit</ion-button\n          >\n          <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\"\n            >Cancel</ion-button\n          >\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-extend-oneyear-invoice-details/view-extend-details/view-extend-details.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-extend-oneyear-invoice-details/view-extend-details/view-extend-details.component.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>View Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"wrapper-container\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        [theme]=\"'material'\"\n        [width]=\"'99%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [columns]=\"columns\"\n        [pagesizeoptions]=\"page\"\n        [enablebrowserselection]=\"true\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-extend-oneyear-invoice-details/view-imei/view-imei.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-extend-oneyear-invoice-details/view-imei/view-imei.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>View IMEI</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row style=\"padding: 10px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        (onRowclick)=\"myGridOnRowSelect($event)\"\n        [enablebrowserselection]=\"true\"\n        [theme]=\"'material'\"\n        [width]=\"'99.5%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [pagesizeoptions]=\"page\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: left;\n          margin: auto;\n          cursor: pointer;\n          padding-left: 5px;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/device-extend-oneyear-invoice-details/device-extend-oneyear-invoice-details.module.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/delar-application/device-extend-oneyear-invoice-details/device-extend-oneyear-invoice-details.module.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: DeviceExtendOneyearInvoiceDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceExtendOneyearInvoiceDetailsPageModule", function() { return DeviceExtendOneyearInvoiceDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _device_extend_oneyear_invoice_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-extend-oneyear-invoice-details.page */ "./src/app/delar-application/device-extend-oneyear-invoice-details/device-extend-oneyear-invoice-details.page.ts");
/* harmony import */ var _received_extend_details_received_extend_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./received-extend-details/received-extend-details.component */ "./src/app/delar-application/device-extend-oneyear-invoice-details/received-extend-details/received-extend-details.component.ts");
/* harmony import */ var _view_extend_details_view_extend_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-extend-details/view-extend-details.component */ "./src/app/delar-application/device-extend-oneyear-invoice-details/view-extend-details/view-extend-details.component.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _view_imei_view_imei_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-imei/view-imei.component */ "./src/app/delar-application/device-extend-oneyear-invoice-details/view-imei/view-imei.component.ts");













var routes = [
    {
        path: "",
        component: _device_extend_oneyear_invoice_details_page__WEBPACK_IMPORTED_MODULE_6__["DeviceExtendOneyearInvoiceDetailsPage"],
    },
    {
        path: "received-extend-details",
        component: _received_extend_details_received_extend_details_component__WEBPACK_IMPORTED_MODULE_7__["ReceivedExtendDetailsComponent"],
    },
    {
        path: "view-extend-details",
        component: _view_extend_details_view_extend_details_component__WEBPACK_IMPORTED_MODULE_8__["ViewExtendDetailsComponent"],
    },
    {
        path: "view-imei",
        component: _view_imei_view_imei_component__WEBPACK_IMPORTED_MODULE_12__["ViewImeiComponent"],
    },
];
var DeviceExtendOneyearInvoiceDetailsPageModule = /** @class */ (function () {
    function DeviceExtendOneyearInvoiceDetailsPageModule() {
    }
    DeviceExtendOneyearInvoiceDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_9__["SharedModModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_10__["IonicSelectableModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileUploadModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [
                _device_extend_oneyear_invoice_details_page__WEBPACK_IMPORTED_MODULE_6__["DeviceExtendOneyearInvoiceDetailsPage"],
                _received_extend_details_received_extend_details_component__WEBPACK_IMPORTED_MODULE_7__["ReceivedExtendDetailsComponent"],
                _view_extend_details_view_extend_details_component__WEBPACK_IMPORTED_MODULE_8__["ViewExtendDetailsComponent"],
                _view_imei_view_imei_component__WEBPACK_IMPORTED_MODULE_12__["ViewImeiComponent"],
            ],
        })
    ], DeviceExtendOneyearInvoiceDetailsPageModule);
    return DeviceExtendOneyearInvoiceDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/device-extend-oneyear-invoice-details/device-extend-oneyear-invoice-details.page.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/delar-application/device-extend-oneyear-invoice-details/device-extend-oneyear-invoice-details.page.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fabbutton {\n  --background: whitesmoke;\n  --background-hover: grey;\n}\n\n.icon {\n  color: black;\n}\n\n.icon:hover {\n  color: white;\n}\n\n.head {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.selectedUpperColll {\n  background: #ebebeb;\n  text-align: center;\n  margin-right: 2px;\n  color: black;\n  font-family: sans-serif;\n  cursor: pointer;\n  font-size: 10px;\n  font-weight: bold;\n  text-transform: uppercase;\n  align-self: center;\n  padding-top: 8px;\n  margin-top: 15px;\n}\n\n.click {\n  margin-top: 20px;\n  color: black;\n  background-color: #ffffff;\n  border-bottom: none;\n  border-top: 2px solid #7d67f8;\n  border-left: 2px solid #7d67f8;\n  border-right: 2px solid #7d67f8;\n  border-bottom: 2px solid #7d67f8;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 11px;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.fileinput {\n  margin-top: 21px;\n  margin-left: 10%;\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.label-heads {\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.submitBtn {\n  margin: 0px 40px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -8px;\n  right: -2px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -15px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.file-input-container input[type=file] {\n  display: none;\n}\n\n.file {\n  margin-left: 8%;\n  border: 1px solid #3d6cec;\n}\n\n.documents {\n  margin: 19px 10px 0px;\n  text-align: center;\n}\n\n.upperCol {\n  text-align: center;\n  border-radius: 8px;\n  margin: 2px;\n  color: black;\n  font-family: sans-serif;\n  font-size: 13px;\n  text-transform: uppercase;\n}\n\n.upperRow {\n  background: #eeeeee;\n  padding: 1px;\n  border-bottom: 2px solid #7d67f8;\n  height: 56px;\n}\n\n.selectedUpperCol {\n  background: #ebebeb;\n  text-align: center;\n  margin-right: 2px;\n  color: black;\n  font-family: sans-serif;\n  cursor: pointer;\n  font-size: 10px;\n  font-weight: bold;\n  text-transform: uppercase;\n  border-right: 1px solid #b5b5b5;\n  align-self: center;\n  padding-top: 8px;\n  margin-top: 15px;\n}\n\n.selected {\n  margin-top: 20px;\n  color: black;\n  background-color: #ffffff;\n  border-bottom: none;\n  border-top: 2px solid #7d67f8;\n  border-left: 2px solid #7d67f8;\n  border-right: 2px solid #7d67f8;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 11px;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLWV4dGVuZC1vbmV5ZWFyLWludm9pY2UtZGV0YWlscy9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxkZXZpY2UtZXh0ZW5kLW9uZXllYXItaW52b2ljZS1kZXRhaWxzXFxkZXZpY2UtZXh0ZW5kLW9uZXllYXItaW52b2ljZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLWV4dGVuZC1vbmV5ZWFyLWludm9pY2UtZGV0YWlscy9kZXZpY2UtZXh0ZW5kLW9uZXllYXItaW52b2ljZS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7QUNHRjs7QURBQTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNHRjs7QUREQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0lGOztBRERBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNJRjs7QURGQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNLRjs7QURGQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ0tGOztBREZBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0tGOztBREZBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNLRjs7QURGQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0tGOztBREhBO0VBQ0Usd0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FDTUY7O0FESkE7RUFDRSxxQkFBQTtBQ09GOztBREpBO0VBQ0U7SUFDRSxnQkFBQTtFQ09GOztFREpBO0lBQ0UsVUFBQTtFQ09GO0FBQ0Y7O0FESkE7RUFDRTtJQUNFLFNBQUE7RUNNRjs7RURIQTtJQUNFLFVBQUE7RUNNRjtBQUNGOztBREhBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQ0tGOztBREZBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUNLRjtBQUNGOztBREZBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUNJRjtBQUNGOztBRERBOztFQUVFLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNHRjs7QURBQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNHRjs7QURBQTtFQUNFLDJCQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0dGOztBREFBO0VBQ0UsbUJBQUE7QUNHRjs7QURBRTtFQUNFLGFBQUE7QUNHSjs7QURDQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNFRjs7QURBQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQ0dGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2RldmljZS1leHRlbmQtb25leWVhci1pbnZvaWNlLWRldGFpbHMvZGV2aWNlLWV4dGVuZC1vbmV5ZWFyLWludm9pY2UtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFiYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBncmV5O1xyXG59XHJcbi5pY29uIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmljb246aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhlYWQge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5zZWxlY3RlZFVwcGVyQ29sbGwge1xyXG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmNsaWNrIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM3ZDY3Zjg7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjN2Q2N2Y4O1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM3ZDY3Zjg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3ZDY3Zjg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDExcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IC00cHggN3B4ICNjMGI1ZmY7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgbWFyZ2luOiA3cHg7XHJcbn1cclxuXHJcbi5zZWxlY3RhYmxlLWlucHV0IHtcclxuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmZpbGVpbnB1dCB7XHJcbiAgbWFyZ2luLXRvcDogMjFweDtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcblxyXG4ubGFiZWwtaGVhZCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XHJcbn1cclxuXHJcbi5sYWJlbC1oZWFkcyB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnN1Ym1pdEJ0biB7XHJcbiAgbWFyZ2luOiAwcHggNDBweCAwcHggMHB4O1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAtLWNvbG9yOiAjN2M2OGY4O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcclxuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcclxufVxyXG4uc3VibWl0YnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICM2MjUyZWU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZm9ybS1maWVsZCB7XHJcbiAgICB6b29tOiA4MCU7XHJcbiAgfVxyXG5cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweCkgYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDhweCAxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBkZi13cmFwcGVyLFxyXG4uZXhjZWwtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2V4Y2VsTmV3LnN2Z1wiKSBuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZmFiLWJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsYXZlbmRlcjtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLThweDtcclxuICByaWdodDogLTJweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5mYWItYnRuOmhvdmVyIHtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICBtYXJnaW4tbGVmdDogLTgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuLmZpbGUtaW5wdXQtY29udGFpbmVyIHtcclxuICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmZpbGUge1xyXG4gIG1hcmdpbi1sZWZ0OiA4JTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjEsIDEwOCwgMjM2KTtcclxufVxyXG5cclxuLmRvY3VtZW50cyB7XHJcbiAgbWFyZ2luOiAxOXB4IDEwcHggMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnVwcGVyQ29sIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4udXBwZXJSb3cge1xyXG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XHJcbiAgcGFkZGluZzogMXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN2Q2N2Y4O1xyXG4gIGhlaWdodDogNTZweDtcclxufVxyXG4vLyAuc2VsZWN0ZWRVcHBlckNvbCB7Ly8gICBiYWNrZ3JvdW5kOiAjZmZmZmZmOy8vICAgdGV4dC1hbGlnbjogY2VudGVyOy8vICAgYm9yZGVyLXJhZGl1czogOHB4Oy8vICAgbWFyZ2luOiAxMHB4Oy8vICAgY29sb3I6IGJsYWNrOy8vICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7Ly8gICBjdXJzb3I6IHBvaW50ZXI7Ly8gICBmb250LXNpemU6IDEzcHg7Ly8gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOy8vICAgYWxpZ24tc2VsZjogY2VudGVyOy8vIH1cclxuLy8gLnNlbGVjdGVkVXBwZXJDb2w6aG92ZXIgey8vICAgY29sb3I6IHJnYigwLCAwLCAwKTsvLyAgIGJhY2tncm91bmQtY29sb3I6ICNhMDk1ZTc7Ly8gfVxyXG4vLyAuc2VsZWN0ZWQgey8vICAgY29sb3I6IHdoaXRlOy8vICAgYmFja2dyb3VuZC1jb2xvcjogIzNiMWRmZjsvLyB9XHJcbi5zZWxlY3RlZFVwcGVyQ29sIHtcclxuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiNWI1YjU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4vLyAuc2VsZWN0ZWRVcHBlckNvbDpob3ZlciB7Ly8gICBjb2xvcjogcmdiKDAsIDAsIDApOy8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsvLyAgIGZvbnQtc2l6ZTogMTJweDsvLyAgIGZvbnQtd2VpZ2h0OiBib2xkOy8vICAgdHJhbnNpdGlvbjogMC4zczsvLyAgIHBhZGRpbmctdG9wOiA4cHg7Ly8gICBib3gtc2hhZG93OiAwcHggMnB4IDVweDsvLyAgIG1hcmdpbi10b3A6IDIwcHg7Ly8gfVxyXG4uc2VsZWN0ZWQge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgIzdkNjdmODtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM3ZDY3Zjg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzdkNjdmODtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMTFweDtcclxuICBib3gtc2hhZG93OiAwcHggLTRweCA3cHggI2MwYjVmZjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuIiwiLmZhYmJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBncmV5O1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmljb246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zZWxlY3RlZFVwcGVyQ29sbGwge1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmNsaWNrIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzdkNjdmODtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzdkNjdmODtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTFweDtcbiAgYm94LXNoYWRvdzogMHB4IC00cHggN3B4ICNjMGI1ZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBtYXJnaW46IDdweDtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5maWxlaW5wdXQge1xuICBtYXJnaW4tdG9wOiAyMXB4O1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4ubGFiZWwtaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XG59XG5cbi5sYWJlbC1oZWFkcyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN1Ym1pdEJ0biB7XG4gIG1hcmdpbjogMHB4IDQwcHggMHB4IDBweDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogIzdjNjhmODtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjN2M2OGY4O1xuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcbn1cblxuLnN1Ym1pdGJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiA4cHggMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbi5wZGYtd3JhcHBlcixcbi5leGNlbC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2V4Y2VsTmV3LnN2Z1wiKSBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5mYWItYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiBsYXZlbmRlcjtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLThweDtcbiAgcmlnaHQ6IC0ycHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5mYWItYnRuOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjYjZiNmI2O1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC04MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmZpbGUtaW5wdXQtY29udGFpbmVyIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZmlsZSB7XG4gIG1hcmdpbi1sZWZ0OiA4JTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNkNmNlYztcbn1cblxuLmRvY3VtZW50cyB7XG4gIG1hcmdpbjogMTlweCAxMHB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udXBwZXJDb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnVwcGVyUm93IHtcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcbiAgcGFkZGluZzogMXB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzdkNjdmODtcbiAgaGVpZ2h0OiA1NnB4O1xufVxuXG4uc2VsZWN0ZWRVcHBlckNvbCB7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2I1YjViNTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uc2VsZWN0ZWQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDExcHg7XG4gIGJveC1zaGFkb3c6IDBweCAtNHB4IDdweCAjYzBiNWZmO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/device-extend-oneyear-invoice-details/device-extend-oneyear-invoice-details.page.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/delar-application/device-extend-oneyear-invoice-details/device-extend-oneyear-invoice-details.page.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: DeviceExtendOneyearInvoiceDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceExtendOneyearInvoiceDetailsPage", function() { return DeviceExtendOneyearInvoiceDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/pdf-logo.service */ "./src/app/services/pdf-logo.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _received_extend_details_received_extend_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./received-extend-details/received-extend-details.component */ "./src/app/delar-application/device-extend-oneyear-invoice-details/received-extend-details/received-extend-details.component.ts");
/* harmony import */ var _view_extend_details_view_extend_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-extend-details/view-extend-details.component */ "./src/app/delar-application/device-extend-oneyear-invoice-details/view-extend-details/view-extend-details.component.ts");
/* harmony import */ var _view_imei_view_imei_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view-imei/view-imei.component */ "./src/app/delar-application/device-extend-oneyear-invoice-details/view-imei/view-imei.component.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");














var DeviceExtendOneyearInvoiceDetailsPage = /** @class */ (function () {
    function DeviceExtendOneyearInvoiceDetailsPage(platform, formBuilder, modalController, alertController, commonService, ajaxService, pdfLogoService, ete) {
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
        this.companyId = localStorage.getItem("userName");
        this.showplaname = false;
        this.name = false;
        this.willDownload = false;
        this.output = "";
        this.imeiIssues = [];
        this.excellKeyValid = false;
        this.arrow = false;
    }
    DeviceExtendOneyearInvoiceDetailsPage.prototype.scrollToTop = function () {
        this.content.scrollToTop(500);
    };
    DeviceExtendOneyearInvoiceDetailsPage.prototype.scrollToBottom = function () {
        this.content.scrollToBottom(500);
    };
    DeviceExtendOneyearInvoiceDetailsPage.prototype.logScrolling = function (ev) {
        if (ev.detail.scrollTop > 2) {
            this.arrow = true;
        }
        if (ev.detail.scrollTop < 2) {
            this.arrow = false;
        }
    };
    DeviceExtendOneyearInvoiceDetailsPage.prototype.clear = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        var todaytime = now.getHours() + ":" + now.getMinutes();
        this.hideSerialNo = false;
        this.extendform.patchValue({
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
    };
    DeviceExtendOneyearInvoiceDetailsPage.prototype.fileclear = function () {
        this.extendform.patchValue({
            fileupload: "",
        });
    };
    DeviceExtendOneyearInvoiceDetailsPage.prototype.createForm = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        var todaytime = now.getHours() + ":" + now.getMinutes();
        this.extendform = this.formBuilder.group({
            dealerid: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            invoiceno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            invoicedate: [today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            invoiceamount: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            noofunits: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fileupload: [""],
            invoicedocument: [""],
        });
    };
    DeviceExtendOneyearInvoiceDetailsPage.prototype.getDealer = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getDealer";
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            _this.Dealer = res;
        });
    };
    DeviceExtendOneyearInvoiceDetailsPage.prototype.onFileChange = function (ev) {
        var _this = this;
        var fileName = ev.srcElement.files[0];
        this.name = fileName.name.includes(".xlsx");
        if (this.name == true) {
            this.dataString = [];
            var workBook_1 = null;
            var jsonData_1 = null;
            var reader_1 = new FileReader();
            var file = ev.srcElement.files[0];
            reader_1.onload = function (event) {
                var data = reader_1.result;
                workBook_1 = xlsx__WEBPACK_IMPORTED_MODULE_12__["read"](data, { type: "binary" });
                jsonData_1 = workBook_1.SheetNames.reduce(function (initial, name) {
                    var sheet = workBook_1.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_12__["utils"].sheet_to_json(sheet);
                    return initial;
                }, {});
                var json = [];
                for (var i = 0; i < jsonData_1["Sheet1"].length; i++) {
                    var newData = {};
                    newData["imei"] = jsonData_1["Sheet1"][i]["imei"].toString();
                    json.push(newData);
                }
                _this.dataString = json;
                _this.output = _this.dataString.slice(0, 300).concat("...");
            };
            reader_1.readAsBinaryString(file);
        }
        else {
            this.commonService.showConfirm("Please insert only excel file (.xlsx)");
        }
    };
    DeviceExtendOneyearInvoiceDetailsPage.prototype.add = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var excellKeys, i, file, data, testData, api, blob, default_file, url;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.extendform.value.fileupload == "")) return [3 /*break*/, 1];
                        this.commonService.showConfirm("IMEI Excel not Upload");
                        return [3 /*break*/, 7];
                    case 1:
                        if (!(this.dataString.length == 0)) return [3 /*break*/, 2];
                        this.commonService.showConfirm("Check your excell file,don't enter blank spaces");
                        this.fileclear();
                        return [3 /*break*/, 7];
                    case 2:
                        excellKeys = Object.keys(this.dataString[0]);
                        for (i = 0; i < excellKeys.length; i++) {
                            if (excellKeys[i] == "imei") {
                                console.log("present");
                                this.excellKeyValid = true;
                            }
                        }
                        if (!(this.name == true && this.excellKeyValid == true)) return [3 /*break*/, 7];
                        this.button = true;
                        file = this.uploader;
                        data = {
                            headerid: "",
                            dealerid: this.extendform.value.dealerid.toString(),
                            invoiceno: this.extendform.value.invoiceno.toString(),
                            invoicedate: this.extendform.value.invoicedate.toString(),
                            invoiceamount: this.extendform.value.invoiceamount.toString(),
                            noofunits: this.extendform.value.noofunits.toString(),
                            imeinos: this.dataString,
                            createdby: localStorage.getItem("userName"),
                        };
                        testData = new FormData();
                        if (!(file.queue.length != 0)) return [3 /*break*/, 3];
                        testData.append("InvoiceDocument", file.queue[0]._file);
                        testData.append("data", JSON.stringify(data));
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, fetch(this.pdfLogoService.imgdata.no_img)];
                    case 4:
                        api = _a.sent();
                        return [4 /*yield*/, api.blob()];
                    case 5:
                        blob = _a.sent();
                        default_file = new File([blob], "File name", {
                            type: "image/png",
                        });
                        testData.append("InvoiceDocument", default_file);
                        testData.append("data", JSON.stringify(data));
                        _a.label = 6;
                    case 6:
                        url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/saveEsimExtendOneYearInvoiceHeader";
                        this.ajaxService.ajaxPostWithFile(url, testData).subscribe(function (res) {
                            if (res.message == "Extend One Year Invoice Saved Successfully") {
                                _this.commonService.showConfirm(res.message);
                                _this.clear();
                                _this.tableData = res;
                                _this.myGrid.clearselection();
                                _this.button = false;
                                _this.getdatas();
                            }
                            else if (res.message == "Extend One Year Invoice Not Saved Successfully") {
                                _this.commonService.showConfirm(res.message);
                                _this.button = false;
                                _this.clear();
                            }
                            else {
                                _this.commonService.showConfirm(res.message);
                                _this.button = false;
                                _this.clear();
                            }
                        });
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    DeviceExtendOneyearInvoiceDetailsPage.prototype.setValue = function () {
        this.hideSerialNo = true;
        this.extendform.patchValue({
            dealerid: this.selectedRow.dealerid,
            invoiceno: this.selectedRow.invoiceno,
            invoicedate: this.selectedRow.invoicedate,
            invoiceamount: this.selectedRow.invoiceamount,
            noofunits: this.selectedRow.noofunits,
        });
    };
    DeviceExtendOneyearInvoiceDetailsPage.prototype.edit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var file, data, testData, api, blob, default_file, url, excellKeys, i, file, data, testData, api, blob, default_file, url;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.extendform.value.fileupload == "")) return [3 /*break*/, 5];
                        this.button = true;
                        file = this.uploader;
                        data = {
                            headerid: this.selectedRow.headerid.toString(),
                            dealerid: this.extendform.value.dealerid.toString(),
                            invoiceno: this.extendform.value.invoiceno.toString(),
                            invoicedate: this.extendform.value.invoicedate.toString(),
                            invoiceamount: this.extendform.value.invoiceamount.toString(),
                            noofunits: this.extendform.value.noofunits.toString(),
                            imeinos: [],
                            createdby: localStorage.getItem("userName"),
                        };
                        testData = new FormData();
                        if (!(file.queue.length != 0)) return [3 /*break*/, 1];
                        testData.append("InvoiceDocument", file.queue[0]._file);
                        testData.append("data", JSON.stringify(data));
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, fetch(this.pdfLogoService.imgdata.no_img)];
                    case 2:
                        api = _a.sent();
                        return [4 /*yield*/, api.blob()];
                    case 3:
                        blob = _a.sent();
                        default_file = new File([blob], "File name", {
                            type: "image/png",
                        });
                        testData.append("InvoiceDocument", default_file);
                        testData.append("data", JSON.stringify(data));
                        _a.label = 4;
                    case 4:
                        url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/saveEsimExtendOneYearInvoiceHeader";
                        this.ajaxService.ajaxPostWithFile(url, testData).subscribe(function (res) {
                            if (res.message == "Extend One Year Invoice Saved Successfully") {
                                _this.commonService.showConfirm(res.message);
                                _this.clear();
                                _this.tableData = res;
                                _this.getdatas();
                                _this.button = false;
                                _this.myGrid.clearselection();
                            }
                            else if (res.message == "Extend One Year Invoice Not Saved Successfully") {
                                _this.commonService.showConfirm(res.message);
                                _this.clear();
                                _this.button = false;
                            }
                            else {
                                _this.commonService.showConfirm(res.message);
                                _this.button = false;
                                _this.clear();
                            }
                        });
                        this.hideSerialNo = false;
                        return [3 /*break*/, 11];
                    case 5:
                        if (!(this.dataString.length == 0)) return [3 /*break*/, 6];
                        this.commonService.showConfirm("Check your excell file,don't enter blank spaces");
                        this.fileclear();
                        return [3 /*break*/, 11];
                    case 6:
                        excellKeys = Object.keys(this.dataString[0]);
                        for (i = 0; i < excellKeys.length; i++) {
                            if (excellKeys[i] == "imei") {
                                console.log("present");
                                this.excellKeyValid = true;
                            }
                        }
                        if (!(this.name == true && this.excellKeyValid == true)) return [3 /*break*/, 11];
                        this.button = true;
                        file = this.uploader;
                        data = {
                            headerid: this.selectedRow.headerid.toString(),
                            dealerid: this.extendform.value.dealerid.toString(),
                            invoiceno: this.extendform.value.invoiceno.toString(),
                            invoicedate: this.extendform.value.invoicedate.toString(),
                            invoiceamount: this.extendform.value.invoiceamount.toString(),
                            noofunits: this.extendform.value.noofunits.toString(),
                            imeinos: this.dataString,
                            createdby: localStorage.getItem("userName"),
                        };
                        testData = new FormData();
                        if (!(file.queue.length != 0)) return [3 /*break*/, 7];
                        testData.append("InvoiceDocument", file.queue[0]._file);
                        testData.append("data", JSON.stringify(data));
                        return [3 /*break*/, 10];
                    case 7: return [4 /*yield*/, fetch(this.pdfLogoService.imgdata.no_img)];
                    case 8:
                        api = _a.sent();
                        return [4 /*yield*/, api.blob()];
                    case 9:
                        blob = _a.sent();
                        default_file = new File([blob], "File name", {
                            type: "image/png",
                        });
                        testData.append("InvoiceDocument", default_file);
                        testData.append("data", JSON.stringify(data));
                        _a.label = 10;
                    case 10:
                        url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/saveEsimExtendOneYearInvoiceHeader";
                        this.ajaxService.ajaxPostWithFile(url, testData).subscribe(function (res) {
                            if (res.message == "Extend One Year Invoice Saved Successfully") {
                                _this.commonService.showConfirm(res.message);
                                _this.clear();
                                _this.tableData = res;
                                _this.getdatas();
                                _this.button = false;
                                _this.myGrid.clearselection();
                            }
                            else if (res.message == "Extend One Year Invoice Not Saved Successfully") {
                                _this.commonService.showConfirm(res.message);
                                _this.clear();
                                _this.button = false;
                            }
                            else {
                                _this.commonService.showConfirm(res.message);
                                _this.button = false;
                                _this.clear();
                            }
                        });
                        this.hideSerialNo = false;
                        _a.label = 11;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    DeviceExtendOneyearInvoiceDetailsPage.prototype.getdatas = function () {
        var _this = this;
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getAllExtendOneYearEsimInvoice";
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            if (res.length == 0) {
                _this.commonService.dismissLoader();
            }
            _this.tableData = res;
            _this.commonService.dismissLoader();
            _this.renderer = function (row, column, value) {
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
            _this.source = { localdata: _this.tableData };
            _this.dataAdapter = new jqx.dataAdapter(_this.source);
            _this.columns = [
                {
                    text: "Dealer",
                    datafield: "dealerid",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 85,
                },
                {
                    text: "Invoice No",
                    datafield: "invoiceno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 105,
                },
                {
                    text: "Invoice Date",
                    datafield: "invoicedate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 105,
                },
                {
                    text: "Invoice Amt",
                    datafield: "invoiceamount",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 90,
                },
                {
                    text: "Total Received Amt",
                    datafield: "totalamountreceived",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
                },
                {
                    text: "Balance Amt",
                    datafield: "balanceamount",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 90,
                },
                {
                    text: "No of Units",
                    datafield: "noofunits",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 85,
                },
                {
                    text: "Created by",
                    datafield: "createdby",
                    cellsrenderer: _this.renderer,
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
                    cellsrenderer: function () {
                        return _this.myPlatform == "desktop"
                            ? "Received Amt"
                            : "<button>Received Amt</button>";
                    },
                    buttonclick: function (row) {
                        _this.receivedpopup(row);
                    },
                },
                {
                    text: "",
                    datafield: "Edit Detail",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 60,
                    cellsrenderer: function () {
                        return _this.myPlatform == "desktop"
                            ? "Edit"
                            : "<button>Edit</button>";
                    },
                    buttonclick: function (row) {
                        _this.setValue();
                    },
                },
                {
                    text: "",
                    datafield: "detail",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 80,
                    cellsrenderer: function () {
                        return _this.myPlatform == "desktop"
                            ? "Details"
                            : "<button>Details</button>";
                    },
                    buttonclick: function (row) {
                        _this.detailspop(row);
                    },
                },
                {
                    text: "",
                    datafield: "download",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 80,
                    cellsrenderer: function () {
                        return "Invoice";
                    },
                    buttonclick: function (row) {
                        _this.Download(row);
                    },
                },
                {
                    text: "",
                    datafield: "viewimei",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 80,
                    cellsrenderer: function () {
                        return "View IMEI";
                    },
                    buttonclick: function (row) {
                        _this.imeipop(row);
                    },
                },
            ];
        });
    };
    DeviceExtendOneyearInvoiceDetailsPage.prototype.receivedpopup = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _received_extend_details_received_extend_details_component__WEBPACK_IMPORTED_MODULE_9__["ReceivedExtendDetailsComponent"],
                            cssClass: "payform",
                            componentProps: {
                                value: this.selectedRow.headerid,
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "Topup Invoice Detail Saved Successfully") {
                                _this.getdatas();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DeviceExtendOneyearInvoiceDetailsPage.prototype.detailspop = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _view_extend_details_view_extend_details_component__WEBPACK_IMPORTED_MODULE_10__["ViewExtendDetailsComponent"],
                            cssClass: "viewserialfrom",
                            componentProps: {
                                value: this.selectedRow.invoiceno,
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () { });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DeviceExtendOneyearInvoiceDetailsPage.prototype.Download = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var link;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.selectedRow.uploadinvoice != null) {
                    link = document.createElement("a");
                    link.href = this.selectedRow.uploadinvoice;
                    link.target = "_blank";
                    link.click();
                }
                else {
                    this.commonService.showConfirm("Invoice Document Not Uploaded");
                }
                return [2 /*return*/];
            });
        });
    };
    DeviceExtendOneyearInvoiceDetailsPage.prototype.imeipop = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _view_imei_view_imei_component__WEBPACK_IMPORTED_MODULE_11__["ViewImeiComponent"],
                            cssClass: "simupdateform",
                            componentProps: {
                                valueone: this.selectedRow.invoiceno,
                                value: this.selectedRow.imeinos,
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "IMEI Removed Successfully") {
                                _this.getdatas();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DeviceExtendOneyearInvoiceDetailsPage.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = event.args.row.bounddata;
        this.show = true;
    };
    DeviceExtendOneyearInvoiceDetailsPage.prototype.newfunc = function () {
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
            title: "Device Extend One Year Invoice Details",
            data: forExcel,
            headers: Header,
        };
        this.ete.exportExcel(reportData);
    };
    DeviceExtendOneyearInvoiceDetailsPage.prototype.ngOnInit = function () {
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
    };
    DeviceExtendOneyearInvoiceDetailsPage.prototype.ngAfterViewInit = function () {
        this.myGrid.horizontalscrollbarstep(["70"]);
        this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
    };
    DeviceExtendOneyearInvoiceDetailsPage.prototype.ionViewWillEnter = function () {
        this.clear();
        this.getDealer();
        this.getdatas();
    };
    DeviceExtendOneyearInvoiceDetailsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_7__["PdfLogoService"] },
        { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_13__["ExportExcelService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeviceExtendOneyearInvoiceDetailsPage.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeviceExtendOneyearInvoiceDetailsPage.prototype, "content", void 0);
    DeviceExtendOneyearInvoiceDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-device-extend-oneyear-invoice-details",
            template: __webpack_require__(/*! raw-loader!./device-extend-oneyear-invoice-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-extend-oneyear-invoice-details/device-extend-oneyear-invoice-details.page.html"),
            styles: [__webpack_require__(/*! ./device-extend-oneyear-invoice-details.page.scss */ "./src/app/delar-application/device-extend-oneyear-invoice-details/device-extend-oneyear-invoice-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_7__["PdfLogoService"],
            src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_13__["ExportExcelService"]])
    ], DeviceExtendOneyearInvoiceDetailsPage);
    return DeviceExtendOneyearInvoiceDetailsPage;
}());



/***/ }),

/***/ "./src/app/delar-application/device-extend-oneyear-invoice-details/received-extend-details/received-extend-details.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/delar-application/device-extend-oneyear-invoice-details/received-extend-details/received-extend-details.component.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  background-color: #7c68f8;\n}\n\n.label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 18px;\n}\n\n.diable-style {\n  background: white;\n  line-height: 18px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #ffebcd;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLWV4dGVuZC1vbmV5ZWFyLWludm9pY2UtZGV0YWlscy9yZWNlaXZlZC1leHRlbmQtZGV0YWlscy9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxkZXZpY2UtZXh0ZW5kLW9uZXllYXItaW52b2ljZS1kZXRhaWxzXFxyZWNlaXZlZC1leHRlbmQtZGV0YWlsc1xccmVjZWl2ZWQtZXh0ZW5kLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2RldmljZS1leHRlbmQtb25leWVhci1pbnZvaWNlLWRldGFpbHMvcmVjZWl2ZWQtZXh0ZW5kLWRldGFpbHMvcmVjZWl2ZWQtZXh0ZW5kLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFO0lBQ0UsU0FBQTtFQ0VGOztFRENBO0lBQ0UsVUFBQTtFQ0VGO0FBQ0Y7O0FEQ0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2RldmljZS1leHRlbmQtb25leWVhci1pbnZvaWNlLWRldGFpbHMvcmVjZWl2ZWQtZXh0ZW5kLWRldGFpbHMvcmVjZWl2ZWQtZXh0ZW5kLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3YzY4Zjg7XHJcbn1cclxuXHJcbi5sYWJlbC1zdHlsZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4uZGlhYmxlLXN0eWxlIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG5cclxuLmNvbnRlbnQtc3R5bGUge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29sLWNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuI2FkZC1pY29uIHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmViY2Q7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICAtLWJhY2tncm91bmQ6ICM3YzY4Zjg7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIHpvb206IDgwJTtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IC01cHggNXB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuLnNlbGVjdGFibGUtaW5wdXQge1xyXG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbiIsIi5oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YzY4Zjg7XG59XG5cbi5sYWJlbC1zdHlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uZGlhYmxlLXN0eWxlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uY29udGVudC1zdHlsZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29sLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI2FkZC1pY29uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZlYmNkO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICAtLWJhY2tncm91bmQ6ICM3YzY4Zjg7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/device-extend-oneyear-invoice-details/received-extend-details/received-extend-details.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/delar-application/device-extend-oneyear-invoice-details/received-extend-details/received-extend-details.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: ReceivedExtendDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceivedExtendDetailsComponent", function() { return ReceivedExtendDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var ReceivedExtendDetailsComponent = /** @class */ (function () {
    function ReceivedExtendDetailsComponent(platform, formBuilder, modalController, ajaxService, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.today = new Date();
    }
    ReceivedExtendDetailsComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    ReceivedExtendDetailsComponent.prototype.submitBtn = function () {
        var _this = this;
        var data;
        data = {
            createdby: localStorage.getItem("userName"),
            headerid: this.value.toString(),
            receiveddate: this.receiveForm.value.receiveddate + " " + "00:00:00",
            receivedamount: this.receiveForm.value.receivedamount.toString(),
            suppliedunits: this.receiveForm.value.suppliedunits.toString(),
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/esim/saveEsimExtendOneYearInvoiceDetails";
        this.ajaxService
            .ajaxPostWithString(url, JSON.stringify(data))
            .subscribe(function (res) {
            if (JSON.parse(res).message ==
                "Extend One Year Invoice Detail Saved Successfully") {
                _this.commonService.showConfirm("Extend One Year Invoice Detail Saved Successfully");
                _this.modalController.dismiss({
                    data: "Extend One Year Invoice Detail Saved Successfully",
                });
            }
            else if (res.message == "Extend One Year Invoice Detail Not Saved Successfully") {
                _this.commonService.showConfirm("Extend One Year Invoice Detail Saved Not Successfully");
            }
            else {
                _this.commonService.showConfirm("Your Amount is greater than invoice amount");
            }
        });
    };
    ReceivedExtendDetailsComponent.prototype.createForm = function () {
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
            noofunits: [""],
            receiveddate: [today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            receivedamount: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            suppliedunits: [""],
        });
    };
    ReceivedExtendDetailsComponent.prototype.reset = function () {
        this.receiveForm.patchValue({
            dealerid: "",
            invoiceno: "",
            invoiceamount: "",
            totalamountreceived: "",
            balanceamount: "",
            noofunits: "",
            receiveddate: "",
            receivedamount: "",
            suppliedunits: "",
        });
    };
    ReceivedExtendDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/esim/getSingleExtendOneYearEsimInvoice?headerid=" +
            this.value;
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            console.log(res);
            {
                _this.receivedetail = res;
                _this.receiveForm.patchValue({
                    dealerid: _this.receivedetail.dealerid,
                    invoiceno: _this.receivedetail.invoiceno,
                    invoiceamount: _this.receivedetail.invoiceamount,
                    totalamountreceived: _this.receivedetail.totalamountreceived,
                    balanceamount: _this.receivedetail.balanceamount,
                    noofunits: _this.receivedetail.noofunits,
                });
            }
        });
    };
    ReceivedExtendDetailsComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReceivedExtendDetailsComponent.prototype, "value", void 0);
    ReceivedExtendDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-received-extend-details",
            template: __webpack_require__(/*! raw-loader!./received-extend-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-extend-oneyear-invoice-details/received-extend-details/received-extend-details.component.html"),
            styles: [__webpack_require__(/*! ./received-extend-details.component.scss */ "./src/app/delar-application/device-extend-oneyear-invoice-details/received-extend-details/received-extend-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], ReceivedExtendDetailsComponent);
    return ReceivedExtendDetailsComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/device-extend-oneyear-invoice-details/view-extend-details/view-extend-details.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/delar-application/device-extend-oneyear-invoice-details/view-extend-details/view-extend-details.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2RldmljZS1leHRlbmQtb25leWVhci1pbnZvaWNlLWRldGFpbHMvdmlldy1leHRlbmQtZGV0YWlscy92aWV3LWV4dGVuZC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/delar-application/device-extend-oneyear-invoice-details/view-extend-details/view-extend-details.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/delar-application/device-extend-oneyear-invoice-details/view-extend-details/view-extend-details.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: ViewExtendDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewExtendDetailsComponent", function() { return ViewExtendDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









var ViewExtendDetailsComponent = /** @class */ (function () {
    function ViewExtendDetailsComponent(ajaxService, router, formBuilder, commonService, modalController) {
        this.ajaxService = ajaxService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.modalController = modalController;
        this.show = false;
        this.page = [];
    }
    ViewExtendDetailsComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    ViewExtendDetailsComponent.prototype.getdatas = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/esim/getExtendOneYearInvoiceDetails?invoiceno=" +
            this.value;
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.tableData = res;
            _this.page = ["100", "200", "500", "1000"];
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
                    text: "Invoice No",
                    datafield: "invoiceno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 187,
                },
                {
                    text: "Received Date",
                    datafield: "receiveddate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 189,
                },
                {
                    text: "Paid Amount",
                    datafield: "receivedamount",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 187,
                },
                {
                    text: "Created by",
                    datafield: "createdby",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 189,
                },
            ];
        });
    };
    ViewExtendDetailsComponent.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = event.args.row;
        this.show = true;
    };
    ViewExtendDetailsComponent.prototype.ngOnInit = function () {
        this.getdatas();
    };
    ViewExtendDetailsComponent.ctorParameters = function () { return [
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ViewExtendDetailsComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("selectComponent", { static: false }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridComponent"])
    ], ViewExtendDetailsComponent.prototype, "myGrid", void 0);
    ViewExtendDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-view-extend-details",
            template: __webpack_require__(/*! raw-loader!./view-extend-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-extend-oneyear-invoice-details/view-extend-details/view-extend-details.component.html"),
            styles: [__webpack_require__(/*! ./view-extend-details.component.scss */ "./src/app/delar-application/device-extend-oneyear-invoice-details/view-extend-details/view-extend-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], ViewExtendDetailsComponent);
    return ViewExtendDetailsComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/device-extend-oneyear-invoice-details/view-imei/view-imei.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/delar-application/device-extend-oneyear-invoice-details/view-imei/view-imei.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2RldmljZS1leHRlbmQtb25leWVhci1pbnZvaWNlLWRldGFpbHMvdmlldy1pbWVpL3ZpZXctaW1laS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/delar-application/device-extend-oneyear-invoice-details/view-imei/view-imei.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/delar-application/device-extend-oneyear-invoice-details/view-imei/view-imei.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ViewImeiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewImeiComponent", function() { return ViewImeiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var ViewImeiComponent = /** @class */ (function () {
    function ViewImeiComponent(platform, formBuilder, modalController, ajaxService, commonService, alertController) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.alertController = alertController;
        this.page = [];
    }
    ViewImeiComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    ViewImeiComponent.prototype.getDatas = function () {
        var _this = this;
        console.log(this.value);
        this.page = [];
        if (this.value != "") {
            this.tableData = JSON.parse(this.value);
        }
        this.page = ["100", "200", "500", "1000"];
        this.renderer = function (row, column, value) {
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
                cellsrenderer: function () {
                    return "Remove";
                },
                buttonclick: function (row) {
                    _this.removeModel(row);
                },
            },
        ];
    };
    ViewImeiComponent.prototype.removeModel = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.selectedRow) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: "Remove",
                                backdropDismiss: false,
                                message: "Are you sure you want to remove?",
                                buttons: [
                                    {
                                        text: "Cancel",
                                        role: "cancel",
                                        handler: function (data) { },
                                    },
                                    {
                                        text: "Ok",
                                        handler: function (data) {
                                            _this.remove();
                                        },
                                    },
                                ],
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ViewImeiComponent.prototype.remove = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                    "/esim/removeExtendOneYearInvoiceimei?invoiceno=" +
                    this.valueone +
                    "&imeino=" +
                    this.selectedRow.imei;
                this.ajaxService.ajaxGet(url).subscribe(function (res) {
                    if (res.message == "IMEI Removed Successfully") {
                        _this.commonService.showConfirm("IMEI Removed Successfully");
                        _this.modalController.dismiss({
                            data: "IMEI Removed Successfully",
                        });
                    }
                    else {
                        _this.commonService.showConfirm(res.message);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ViewImeiComponent.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = event.args.row.bounddata;
    };
    ViewImeiComponent.prototype.ngOnInit = function () {
        this.getDatas();
    };
    ViewImeiComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
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
            template: __webpack_require__(/*! raw-loader!./view-imei.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-extend-oneyear-invoice-details/view-imei/view-imei.component.html"),
            styles: [__webpack_require__(/*! ./view-imei.component.scss */ "./src/app/delar-application/device-extend-oneyear-invoice-details/view-imei/view-imei.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], ViewImeiComponent);
    return ViewImeiComponent;
}());



/***/ })

}]);
//# sourceMappingURL=device-extend-oneyear-invoice-details-device-extend-oneyear-invoice-details-module-es5.js.map