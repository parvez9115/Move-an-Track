(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esim-sales-invoice-details-esim-sales-invoice-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-sales-invoice-details/esim-sales-invoice-details.page.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-sales-invoice-details/esim-sales-invoice-details.page.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons\n      *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\"\n      slot=\"start\"\n    >\n      <ion-icon\n        routerLink=\"/tabs-login/esim-dashboard\"\n        name=\"arrow-back\"\n        style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-row>\n      <ion-title *ngIf=\"myPlatform != 'desktop'\"\n        >Sales Invoice Details</ion-title\n      >\n      <ion-title *ngIf=\"myPlatform == 'desktop'\"\n        >Device Invoice Details</ion-title\n      >\n\n      <ion-col\n        *ngIf=\"myPlatform == 'desktop'\"\n        size=\"4\"\n        style=\"text-align: right\"\n      >\n        <ion-button class=\"submitBtn\" size=\"small\" (click)=\"newfunc()\"\n          >Export</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <ion-grid>\n    <ion-row *ngIf=\"myPlatform == 'desktop'\" class=\"upperRow\">\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/esim-purchase-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Esim Purchase Invoice</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/esim-sales-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Sales Invoice</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/device-renewal-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Renewal Invoice</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/device-topup-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Topup Invoice</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/device-extend-oneyear-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Extend 1 Yr Invoice</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/device-certificate-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Certificate Invoice</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"head\">\n      <ion-col\n        [ngClass]=\"{'selectedUpperColll': 'true'}\"\n        routerLink=\"/tabs-login/esim-sales-invoice-details\"\n        routerLinkActive=\"click\"\n        size=\"3\"\n      >\n        <ion-label>Old </ion-label>\n      </ion-col>\n\n      <ion-col\n        style=\"margin-left: 10px\"\n        [ngClass]=\"{'selectedUpperColll': 'true'}\"\n        routerLink=\"/tabs-login/sales-invoice-details\"\n        routerLinkActive=\"click\"\n        size=\"3\"\n      >\n        <ion-label>New</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"wrapper-container\">\n      <ion-col size=\"12\">\n        <form [formGroup]=\"SalesinvoiceForm\">\n          <ion-row class=\"form-field\">\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Dealer:</ion-label>\n              <ionic-selectable\n                class=\"input selectable-input\"\n                formControlName=\"dealerid\"\n                placeholder=\"Select the Dealer\"\n                [items]=\"Dealer\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n              >\n              </ionic-selectable>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Invoice Number:</ion-label>\n              <ion-input\n                type=\"text\"\n                placeholder=\"Enter the Invoice No\"\n                formControlName=\"invoiceno\"\n                class=\"input\"\n              ></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Invoice Date:</ion-label>\n              <ion-input\n                type=\"date\"\n                formControlName=\"invoicedate\"\n                [max]=\"maxDate\"\n                class=\"input\"\n              ></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Invoice Amount:</ion-label>\n              <ion-input\n                type=\"number\"\n                placeholder=\"Enter the Invoice Amount\"\n                formControlName=\"invoiceamount\"\n                class=\"input\"\n              ></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">No of Units:</ion-label>\n              <ion-input\n                type=\"number\"\n                placeholder=\"Enter the Units\"\n                formControlName=\"noofunits\"\n                class=\"input\"\n              ></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Product Name:</ion-label>\n              <ionic-selectable\n                class=\"input selectable-input\"\n                formControlName=\"productname\"\n                placeholder=\"Select the Product Name\"\n                [items]=\"productlist\"\n                [canSearch]=\"true\"\n                (onChange)=\"getdevicemodellist($event)\"\n                [hasVirtualScroll]=\"true\"\n                [disabledItems]=\"data\"\n              >\n              </ionic-selectable>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Invoice Document:</ion-label>\n              <input\n                type=\"file\"\n                class=\"documents\"\n                formControlName=\"invoicedocument\"\n                ng2FileSelect\n                [uploader]=\"uploader\"\n              />\n            </ion-col>\n\n            <ion-col style=\"margin: 27px 0px 0px; text-align: end\">\n              <ion-button\n                *ngIf=\"!hideSerialNo\"\n                class=\"submitbtn\"\n                (click)=\"add()\"\n                [disabled]=\"!SalesinvoiceForm.valid || button\"\n                >Add</ion-button\n              >\n              <ion-button\n                *ngIf=\"hideSerialNo\"\n                class=\"submitbtn\"\n                (click)=\"edit()\"\n                [disabled]=\"!SalesinvoiceForm.valid || button\"\n                >Edit</ion-button\n              >\n              <ion-button class=\"submitbtn\" (click)=\"clear()\">Clear</ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n\n    <jqxGrid\n      #myGrid\n      [theme]=\"'material'\"\n      (onRowclick)=\"myGridOnRowSelect($event)\"\n      [width]=\"'99%'\"\n      [autoheight]=\"true\"\n      [source]=\"dataAdapter\"\n      [enablebrowserselection]=\"true\"\n      [sortable]=\"true\"\n      [filterable]=\"true\"\n      [columns]=\"columns\"\n      [columnsresize]=\"true\"\n      [enabletooltips]=\"true\"\n      [pageable]=\"true\"\n      [showfilterrow]=\"true\"\n      style=\"\n        font-size: 16px;\n        text-align: center !important;\n        margin: auto;\n        cursor: pointer;\n      \"\n    >\n    </jqxGrid>\n  </ion-grid>\n\n  <ion-fab\n    *ngIf=\"arrow\"\n    style=\"margin-right: 1%; margin-bottom: 9%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToTop()\">\n      <ion-icon class=\"icon\" name=\"arrow-up\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab\n    *ngIf=\"arrow\"\n    style=\"margin-right: 1%; margin-bottom: 5%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToBottom()\">\n      <ion-icon class=\"icon\" name=\"arrow-down\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-sales-invoice-details/received-details/received-details.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-sales-invoice-details/received-details/received-details.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Received Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"myPlatform != 'desktop'\" class=\"content-style label-style\">\n  <ion-grid>\n    <ion-row class=\"form-field\">\n      <ion-col\n        size=\"12\"\n        size-sm=\"12\"\n        size-md=\"10\"\n        offset-md=\"1\"\n        size-lg=\"12\"\n        offset-lg=\"0\"\n      >\n        <form [formGroup]=\"receiveForm\">\n          <div class=\"wrapper-form\">\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Dealer:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"dealerid\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Invoice No:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"invoiceno\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Invoice Amount:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"invoiceamount\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Total Received Amt:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"totalamountreceived\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Balance Amount:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"balanceamount\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Total Supplied Units:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"totalsuppliedunits\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Balance Units:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"balanceunits\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Received Date:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"date\"\n                  [max]=\"maxDate\"\n                  formControlName=\"receiveddate\"\n                  placeholder=\"Enter the Select Date\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Received Amount:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"receivedamount\"\n                  placeholder=\"Enter the Received Amount\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <!-- <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Supplied Units:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"suppliedunits\"\n                  placeholder=\"Enter the Supplied Units\"\n                ></ion-input>\n              </ion-col>\n            </ion-row> -->\n          </div>\n        </form>\n\n        <ion-row class=\"content-style\">\n          <ion-col style=\"text-align: center !important; padding: 20px\">\n            <ion-button\n              class=\"button\"\n              type=\"submit\"\n              [disabled]=\"!receiveForm.valid\"\n              (click)=\"submitBtn()\"\n              >Submit</ion-button\n            >\n            <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\"\n              >Cancel</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf=\"myPlatform == 'desktop'\" class=\"content-style label-style\">\n  <ion-row class=\"form-field\">\n    <ion-col>\n      <form [formGroup]=\"receiveForm\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Dealer:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"dealerid\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Invoice No:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"invoiceno\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Invoice Amount:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"invoiceamount\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\"\n                >Total Received Amt:</ion-col\n              >\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"totalamountreceived\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Balance Amount:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"balanceamount\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\"\n                >Total Supplied Units:</ion-col\n              >\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"totalsuppliedunits\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Balance Units:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"balanceunits\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Received Date:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"date\"\n                  [max]=\"maxDate\"\n                  formControlName=\"receiveddate\"\n                  placeholder=\"Enter the Select Date\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Received Amount:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"receivedamount\"\n                  placeholder=\"Enter the Received Amount\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <!-- <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Supplied Units:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"suppliedunits\"\n                  placeholder=\"Enter the Supplied Units\"\n                ></ion-input>\n              </ion-col>\n            </ion-row> -->\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 10px\">\n          <ion-button\n            class=\"button\"\n            type=\"submit\"\n            [disabled]=\"!receiveForm.valid\"\n            (click)=\"submitBtn()\"\n            >Submit</ion-button\n          >\n          <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\"\n            >Cancel</ion-button\n          >\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-sales-invoice-details/view-details/view-details.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-sales-invoice-details/view-details/view-details.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>View Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"wrapper-container\">\n    <ion-col size=\"12\">\n      <!-- <form [formGroup]=\"detailForm\">\n        <ion-row class=\"form-field\">\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n            <ion-label class=\"label-head\">Dealer:</ion-label>\n            <ion-input\n              type=\"text\"\n              formControlName=\"dealerid\"\n              class=\"input\"\n            ></ion-input>\n          </ion-col>\n\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n            <ion-label class=\"label-head\">Invoice Number:</ion-label>\n            <ion-input\n              type=\"text\"\n              formControlName=\"invoiceno\"\n              class=\"input\"\n            ></ion-input>\n          </ion-col>\n\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n            <ion-label class=\"label-head\">Invoice Amount:</ion-label>\n            <ion-input\n              type=\"number\"\n              formControlName=\"invoiceamount\"\n              class=\"input\"\n            ></ion-input>\n          </ion-col>\n\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n            <ion-label class=\"label-head\">Total Received Amount:</ion-label>\n            <ion-input\n              type=\"number\"\n              formControlName=\"totalamountreceived\"\n              class=\"input\"\n            ></ion-input>\n          </ion-col>\n\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n            <ion-label class=\"label-head\">Balance Amount:</ion-label>\n            <ion-input\n              type=\"text\"\n              formControlName=\"balanceamount\"\n              class=\"input\"\n            ></ion-input>\n          </ion-col>\n\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n            <ion-label class=\"label-head\">No of Units:</ion-label>\n            <ion-input\n              type=\"text\"\n              formControlName=\"noofunits\"\n              class=\"input\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n            <ion-label class=\"label-head\">Total Supplied Units:</ion-label>\n            <ion-input\n              type=\"number\"\n              formControlName=\"totalsuppliedunits\"\n              class=\"input\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n            <ion-label class=\"label-head\">Balance Units:</ion-label>\n            <ion-input\n              type=\"number\"\n              formControlName=\"balanceunits\"\n              class=\"input\"\n            ></ion-input>\n          </ion-col>\n        </ion-row>\n      </form> -->\n\n      <jqxGrid\n        #myGrid\n        [theme]=\"'material'\"\n        [width]=\"'99%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [columns]=\"columns\"\n        [pagesizeoptions]=\"page\"\n        [enablebrowserselection]=\"true\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/esim-sales-invoice-details/esim-sales-invoice-details.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-sales-invoice-details/esim-sales-invoice-details.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: EsimSalesInvoiceDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimSalesInvoiceDetailsPageModule", function() { return EsimSalesInvoiceDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _esim_sales_invoice_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esim-sales-invoice-details.page */ "./src/app/delar-application/esim-sales-invoice-details/esim-sales-invoice-details.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _received_details_received_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./received-details/received-details.component */ "./src/app/delar-application/esim-sales-invoice-details/received-details/received-details.component.ts");
/* harmony import */ var _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view-details/view-details.component */ "./src/app/delar-application/esim-sales-invoice-details/view-details/view-details.component.ts");












const routes = [
    {
        path: "",
        component: _esim_sales_invoice_details_page__WEBPACK_IMPORTED_MODULE_6__["EsimSalesInvoiceDetailsPage"],
    },
    {
        path: "received-details",
        component: _received_details_received_details_component__WEBPACK_IMPORTED_MODULE_10__["ReceivedDetailsComponent"],
    },
    {
        path: "details",
        component: _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_11__["ViewDetailsComponent"],
    },
];
let EsimSalesInvoiceDetailsPageModule = class EsimSalesInvoiceDetailsPageModule {
};
EsimSalesInvoiceDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__["FileUploadModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [
            _esim_sales_invoice_details_page__WEBPACK_IMPORTED_MODULE_6__["EsimSalesInvoiceDetailsPage"],
            _received_details_received_details_component__WEBPACK_IMPORTED_MODULE_10__["ReceivedDetailsComponent"],
            _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_11__["ViewDetailsComponent"],
        ],
    })
], EsimSalesInvoiceDetailsPageModule);



/***/ }),

/***/ "./src/app/delar-application/esim-sales-invoice-details/esim-sales-invoice-details.page.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-sales-invoice-details/esim-sales-invoice-details.page.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fabbutton {\n  --background: whitesmoke;\n  --background-hover: grey;\n}\n\n.icon {\n  color: black;\n}\n\n.icon:hover {\n  color: white;\n}\n\n.head {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.selectedUpperColll {\n  background: #ebebeb;\n  text-align: center;\n  margin-right: 2px;\n  color: black;\n  font-family: sans-serif;\n  cursor: pointer;\n  font-size: 10px;\n  font-weight: bold;\n  text-transform: uppercase;\n  align-self: center;\n  padding-top: 8px;\n  margin-top: 15px;\n}\n\n.click {\n  margin-top: 20px;\n  color: black;\n  background-color: #ffffff;\n  border-bottom: none;\n  border-top: 2px solid #7d67f8;\n  border-left: 2px solid #7d67f8;\n  border-right: 2px solid #7d67f8;\n  border-bottom: 2px solid #7d67f8;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 11px;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.fileinput {\n  margin-top: 21px;\n  margin-left: 10%;\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.label-heads {\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -11px;\n  right: -2px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -15px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.file-input-container input[type=file] {\n  display: none;\n}\n\n.file {\n  margin-left: 8%;\n  border: 1px solid #3d6cec;\n}\n\n.documents {\n  margin: 19px 10px 0px;\n  text-align: center;\n}\n\n.upperCol {\n  text-align: center;\n  border-radius: 8px;\n  margin: 2px;\n  color: black;\n  font-family: sans-serif;\n  font-size: 13px;\n  text-transform: uppercase;\n}\n\n.upperCol {\n  text-align: center;\n  border-radius: 8px;\n  margin: 2px;\n  color: black;\n  font-family: sans-serif;\n  font-size: 13px;\n  text-transform: uppercase;\n}\n\n.upperRow {\n  background: #eeeeee;\n  padding: 1px;\n  border-bottom: 2px solid #7d67f8;\n  height: 56px;\n}\n\n.selectedUpperCol {\n  background: #ebebeb;\n  text-align: center;\n  margin-right: 2px;\n  color: black;\n  font-family: sans-serif;\n  cursor: pointer;\n  font-size: 10px;\n  font-weight: bold;\n  text-transform: uppercase;\n  border-right: 1px solid #b5b5b5;\n  align-self: center;\n  padding-top: 8px;\n  margin-top: 15px;\n}\n\n.selected {\n  margin-top: 20px;\n  color: black;\n  background-color: #ffffff;\n  border-bottom: none;\n  border-top: 2px solid #7d67f8;\n  border-left: 2px solid #7d67f8;\n  border-right: 2px solid #7d67f8;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 11px;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1zYWxlcy1pbnZvaWNlLWRldGFpbHMvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcZXNpbS1zYWxlcy1pbnZvaWNlLWRldGFpbHNcXGVzaW0tc2FsZXMtaW52b2ljZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1zYWxlcy1pbnZvaWNlLWRldGFpbHMvZXNpbS1zYWxlcy1pbnZvaWNlLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSx3QkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtBQ0dGOztBRERBO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQ0lGOztBREZBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDS0Y7O0FERkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQ0tGOztBREZBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0tGOztBREZBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDS0Y7O0FERkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDS0Y7O0FERkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0tGOztBREZBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDS0Y7O0FESEE7RUFDRSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUNNRjs7QURKQTtFQUNFLHFCQUFBO0FDT0Y7O0FESkE7RUFDRTtJQUNFLGdCQUFBO0VDT0Y7O0VESkE7SUFDRSxVQUFBO0VDT0Y7QUFDRjs7QURKQTtFQUNFO0lBQ0UsU0FBQTtFQ01GOztFREhBO0lBQ0UsVUFBQTtFQ01GO0FBQ0Y7O0FESEE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDS0Y7O0FERkE7RUFDRTtJQUNFLFlBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQ0tGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQ0lGO0FBQ0Y7O0FEREE7O0VBRUUseUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0dGOztBREFBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0dGOztBREFBO0VBQ0UsMkJBQUE7QUNHRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNHRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEQUE7RUFDRSxtQkFBQTtBQ0dGOztBREFFO0VBQ0UsYUFBQTtBQ0dKOztBRENBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNFRjs7QURBQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQ0dGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tc2FsZXMtaW52b2ljZS1kZXRhaWxzL2VzaW0tc2FsZXMtaW52b2ljZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWJidXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6IGdyZXk7XHJcbn1cclxuLmljb24ge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uaWNvbjpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5oZWFkIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uc2VsZWN0ZWRVcHBlckNvbGxsIHtcclxuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5jbGljayB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjN2Q2N2Y4O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzdkNjdmODtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjN2Q2N2Y4O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN2Q2N2Y4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAxMXB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAtNHB4IDdweCAjYzBiNWZmO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBtYXJnaW46IDdweDtcclxufVxyXG5cclxuLnNlbGVjdGFibGUtaW5wdXQge1xyXG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uZmlsZWlucHV0IHtcclxuICBtYXJnaW4tdG9wOiAyMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5sYWJlbC1oZWFkIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcclxufVxyXG5cclxuLmxhYmVsLWhlYWRzIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uc3VibWl0QnRuIHtcclxuICBtYXJnaW46IDBweCAxNHB4IDBweCAwcHg7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIC0tY29sb3I6ICM3YzY4Zjg7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjN2M2OGY4O1xyXG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xyXG59XHJcbi5zdWJtaXRidG4ge1xyXG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIHpvb206IDgwJTtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IC01cHggNXB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjMyMHB4KSBhbmQobWF4LXdpZHRoOjEwMjNweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDhweCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MTAyNHB4KSB7XHJcbiAgLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogOHB4IDFweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucGRmLXdyYXBwZXIsXHJcbi5leGNlbC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZXhjZWxOZXcuc3ZnXCIpIG5vLXJlcGVhdDtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5mYWItYnRuIHtcclxuICAtLWJhY2tncm91bmQ6IGxhdmVuZGVyO1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTFweDtcclxuICByaWdodDogLTJweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5mYWItYnRuOmhvdmVyIHtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICBtYXJnaW4tbGVmdDogLTgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuLmZpbGUtaW5wdXQtY29udGFpbmVyIHtcclxuICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmZpbGUge1xyXG4gIG1hcmdpbi1sZWZ0OiA4JTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjEsIDEwOCwgMjM2KTtcclxufVxyXG5cclxuLmRvY3VtZW50cyB7XHJcbiAgbWFyZ2luOiAxOXB4IDEwcHggMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnVwcGVyQ29sIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnVwcGVyQ29sIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4udXBwZXJSb3cge1xyXG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XHJcbiAgcGFkZGluZzogMXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN2Q2N2Y4O1xyXG4gIGhlaWdodDogNTZweDtcclxufVxyXG4vLyAuc2VsZWN0ZWRVcHBlckNvbCB7Ly8gICBiYWNrZ3JvdW5kOiAjZmZmZmZmOy8vICAgdGV4dC1hbGlnbjogY2VudGVyOy8vICAgYm9yZGVyLXJhZGl1czogOHB4Oy8vICAgbWFyZ2luOiAxMHB4Oy8vICAgY29sb3I6IGJsYWNrOy8vICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7Ly8gICBjdXJzb3I6IHBvaW50ZXI7Ly8gICBmb250LXNpemU6IDEzcHg7Ly8gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOy8vICAgYWxpZ24tc2VsZjogY2VudGVyOy8vIH1cclxuLy8gLnNlbGVjdGVkVXBwZXJDb2w6aG92ZXIgey8vICAgY29sb3I6IHJnYigwLCAwLCAwKTsvLyAgIGJhY2tncm91bmQtY29sb3I6ICNhMDk1ZTc7Ly8gfVxyXG4vLyAuc2VsZWN0ZWQgey8vICAgY29sb3I6IHdoaXRlOy8vICAgYmFja2dyb3VuZC1jb2xvcjogIzNiMWRmZjsvLyB9XHJcbi5zZWxlY3RlZFVwcGVyQ29sIHtcclxuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiNWI1YjU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4vLyAuc2VsZWN0ZWRVcHBlckNvbDpob3ZlciB7Ly8gICBjb2xvcjogcmdiKDAsIDAsIDApOy8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsvLyAgIGZvbnQtc2l6ZTogMTJweDsvLyAgIGZvbnQtd2VpZ2h0OiBib2xkOy8vICAgdHJhbnNpdGlvbjogMC4zczsvLyAgIHBhZGRpbmctdG9wOiA4cHg7Ly8gICBib3gtc2hhZG93OiAwcHggMnB4IDVweDsvLyAgIG1hcmdpbi10b3A6IDIwcHg7Ly8gfVxyXG4uc2VsZWN0ZWQge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgIzdkNjdmODtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM3ZDY3Zjg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzdkNjdmODtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMTFweDtcclxuICBib3gtc2hhZG93OiAwcHggLTRweCA3cHggI2MwYjVmZjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuIiwiLmZhYmJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBncmV5O1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmljb246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zZWxlY3RlZFVwcGVyQ29sbGwge1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmNsaWNrIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzdkNjdmODtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzdkNjdmODtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTFweDtcbiAgYm94LXNoYWRvdzogMHB4IC00cHggN3B4ICNjMGI1ZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBtYXJnaW46IDdweDtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5maWxlaW5wdXQge1xuICBtYXJnaW4tdG9wOiAyMXB4O1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4ubGFiZWwtaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XG59XG5cbi5sYWJlbC1oZWFkcyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN1Ym1pdEJ0biB7XG4gIG1hcmdpbjogMHB4IDE0cHggMHB4IDBweDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogIzdjNjhmODtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjN2M2OGY4O1xuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcbn1cblxuLnN1Ym1pdGJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiA4cHggMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbi5wZGYtd3JhcHBlcixcbi5leGNlbC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2V4Y2VsTmV3LnN2Z1wiKSBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5mYWItYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiBsYXZlbmRlcjtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTExcHg7XG4gIHJpZ2h0OiAtMnB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uZmFiLWJ0bjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2I2YjZiNjtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5maWxlLWlucHV0LWNvbnRhaW5lciBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZpbGUge1xuICBtYXJnaW4tbGVmdDogOCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZDZjZWM7XG59XG5cbi5kb2N1bWVudHMge1xuICBtYXJnaW46IDE5cHggMTBweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVwcGVyQ29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi51cHBlckNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udXBwZXJSb3cge1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICBwYWRkaW5nOiAxcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBoZWlnaHQ6IDU2cHg7XG59XG5cbi5zZWxlY3RlZFVwcGVyQ29sIHtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYjViNWI1O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5zZWxlY3RlZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzdkNjdmODtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzdkNjdmODtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTFweDtcbiAgYm94LXNoYWRvdzogMHB4IC00cHggN3B4ICNjMGI1ZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-sales-invoice-details/esim-sales-invoice-details.page.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-sales-invoice-details/esim-sales-invoice-details.page.ts ***!
  \*************************************************************************************************/
/*! exports provided: EsimSalesInvoiceDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimSalesInvoiceDetailsPage", function() { return EsimSalesInvoiceDetailsPage; });
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
/* harmony import */ var _received_details_received_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./received-details/received-details.component */ "./src/app/delar-application/esim-sales-invoice-details/received-details/received-details.component.ts");
/* harmony import */ var _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view-details/view-details.component */ "./src/app/delar-application/esim-sales-invoice-details/view-details/view-details.component.ts");












let EsimSalesInvoiceDetailsPage = class EsimSalesInvoiceDetailsPage {
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
        this.companyId = localStorage.getItem("userName");
        this.today = new Date();
        this.arrow = false;
        this.getdevicemodellist = (event) => {
            if (event.value)
                this.SalesinvoiceForm.value.devicemodel = event.value;
        };
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
            productname: "",
            invoicedocument: "",
        });
        this.uploader.queue.length = 0;
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
            productname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            invoicedocument: [""],
        });
    }
    getDealer() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["serverUrl"].web + "/esim/getDealer";
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.Dealer = res;
        });
    }
    getModellist() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["serverUrl"].web + "/esim/getModel";
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.productlist = res;
        });
    }
    add() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
                productname: this.SalesinvoiceForm.value.productname.toString(),
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
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["serverUrl"].web + "/esim/saveEsimSalesInvoiceHeader";
            this.ajaxService.ajaxPostWithFile(url, testData).subscribe((res) => {
                if (res.message == "Sales Invoice Saved Successfully") {
                    this.commonService.showConfirm("Sales Invoice Saved Successfully");
                    this.clear();
                    this.tableData = res;
                    this.button = false;
                    this.getdatas();
                }
                else if (res.message == "Sales Invoice Not Saved Successfully") {
                    this.commonService.showConfirm("Sales Invoice Not Saved Successfully");
                    this.button = false;
                    this.clear();
                }
                else {
                    this.commonService.showConfirm(res.message);
                    this.button = false;
                    this.clear();
                }
            });
        });
    }
    edit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.button = true;
            const file = this.uploader;
            var data;
            data = {
                headerid: this.selectedRow.headerid.toString(),
                dealerid: this.SalesinvoiceForm.value.dealerid.toString(),
                invoiceno: this.SalesinvoiceForm.value.invoiceno.toString(),
                invoicedate: this.SalesinvoiceForm.value.invoicedate.toString(),
                invoiceamount: this.SalesinvoiceForm.value.invoiceamount.toString(),
                noofunits: this.SalesinvoiceForm.value.noofunits.toString(),
                productname: this.SalesinvoiceForm.value.productname.toString(),
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
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["serverUrl"].web + "/esim/saveEsimSalesInvoiceHeader";
            this.ajaxService.ajaxPostWithFile(url, testData).subscribe((res) => {
                if (res.message == "Sales Invoice Saved Successfully") {
                    this.commonService.showConfirm("Sales Invoice Saved Successfully");
                    this.clear();
                    this.tableData = res;
                    this.getdatas();
                    this.button = false;
                }
                else if (res.message == "Sales Invoice Not Saved Successfully") {
                    this.commonService.showConfirm("Sales Invoice Not Saved Successfully");
                    this.clear();
                    this.button = false;
                }
                else {
                    this.commonService.showConfirm(res.message);
                    this.button = false;
                    this.clear();
                }
            });
            this.hideSerialNo = false;
        });
    }
    setValue() {
        this.hideSerialNo = true;
        this.SalesinvoiceForm.patchValue({
            dealerid: this.selectedRow.dealerid,
            invoiceno: this.selectedRow.invoiceno,
            invoicedate: this.selectedRow.invoicedate,
            invoiceamount: this.selectedRow.invoiceamount,
            noofunits: this.selectedRow.noofunits,
            productname: this.selectedRow.productname,
        });
    }
    getdatas() {
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["serverUrl"].web + "/esim/getAllSalesEsimInvoice";
        this.ajaxService.ajaxGet(url).subscribe((res) => {
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
                    text: "Total Supplied Units",
                    datafield: "totalsuppliedunits",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
                },
                {
                    text: "Balance Units",
                    datafield: "balanceunits",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 95,
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
            ];
        });
    }
    receivedpopup(row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _received_details_received_details_component__WEBPACK_IMPORTED_MODULE_10__["ReceivedDetailsComponent"],
                cssClass: "payform",
                componentProps: {
                    value: this.selectedRow.headerid,
                },
            });
            modal.onDidDismiss().then((data) => {
                if (data.data.data == "Sales Invoice Detail Saved Successfully") {
                    this.getdatas();
                }
            });
            return yield modal.present();
        });
    }
    detailspop(row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_11__["ViewDetailsComponent"],
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
            title: "Esim Sales Invoice Details",
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
        this.getModellist();
    }
};
EsimSalesInvoiceDetailsPage.ctorParameters = () => [
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
], EsimSalesInvoiceDetailsPage.prototype, "myGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EsimSalesInvoiceDetailsPage.prototype, "content", void 0);
EsimSalesInvoiceDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-esim-sales-invoice-details",
        template: __webpack_require__(/*! raw-loader!./esim-sales-invoice-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-sales-invoice-details/esim-sales-invoice-details.page.html"),
        styles: [__webpack_require__(/*! ./esim-sales-invoice-details.page.scss */ "./src/app/delar-application/esim-sales-invoice-details/esim-sales-invoice-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_8__["PdfLogoService"],
        src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"]])
], EsimSalesInvoiceDetailsPage);



/***/ }),

/***/ "./src/app/delar-application/esim-sales-invoice-details/received-details/received-details.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-sales-invoice-details/received-details/received-details.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  background-color: #7c68f8;\n}\n\n.label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 18px;\n}\n\n.diable-style {\n  background: white;\n  line-height: 18px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #FFEBCD;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1zYWxlcy1pbnZvaWNlLWRldGFpbHMvcmVjZWl2ZWQtZGV0YWlscy9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxlc2ltLXNhbGVzLWludm9pY2UtZGV0YWlsc1xccmVjZWl2ZWQtZGV0YWlsc1xccmVjZWl2ZWQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1zYWxlcy1pbnZvaWNlLWRldGFpbHMvcmVjZWl2ZWQtZGV0YWlscy9yZWNlaXZlZC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLFNBQUE7RUNDTjs7RURFRTtJQUNJLFVBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLXNhbGVzLWludm9pY2UtZGV0YWlscy9yZWNlaXZlZC1kZXRhaWxzL3JlY2VpdmVkLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdjNjhmOFxyXG59XHJcblxyXG4ubGFiZWwtc3R5bGUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG5cclxuLmRpYWJsZS1zdHlsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4uY29udGVudC1zdHlsZSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG59XHJcblxyXG4uY29sLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuI2FkZC1pY29uIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZGRUJDRDtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM3YzY4Zjg7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAgIC5mb3JtLWZpZWxkIHtcclxuICAgICAgICB6b29tOiA4MCU7XHJcbiAgICB9XHJcblxyXG4gICAgI3N1Ym1pdGJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuLnNlbGVjdGFibGUtaW5wdXQge1xyXG4gICAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufSIsIi5oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YzY4Zjg7XG59XG5cbi5sYWJlbC1zdHlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uZGlhYmxlLXN0eWxlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uY29udGVudC1zdHlsZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29sLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI2FkZC1pY29uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZFQkNEO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICAtLWJhY2tncm91bmQ6ICM3YzY4Zjg7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/esim-sales-invoice-details/received-details/received-details.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-sales-invoice-details/received-details/received-details.component.ts ***!
  \*************************************************************************************************************/
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
            suppliedunits: this.receiveForm.value.suppliedunits.toString(),
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/esim/saveEsimSalesInvoiceDetails";
        this.ajaxService
            .ajaxPostWithString(url, JSON.stringify(data))
            .subscribe((res) => {
            if (JSON.parse(res).message == "Sales Invoice Detail Saved Successfully") {
                this.commonService.showConfirm("Sales Invoice Detail Saved Successfully");
                this.modalController.dismiss({
                    data: "Sales Invoice Detail Saved Successfully",
                });
            }
            else if (res.message == "Sales Invoice Detail Not Saved Successfully") {
                this.commonService.showConfirm("Sales Invoice Detail Not Saved Successfully");
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
            totalsuppliedunits: [""],
            balanceunits: [""],
            receiveddate: [today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            receivedamount: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            suppliedunits: [""],
        });
    }
    reset() {
        this.receiveForm.patchValue({
            dealerid: "",
            invoiceno: "",
            invoiceamount: "",
            totalamountreceived: "",
            balanceamount: "",
            totalsuppliedunits: "",
            balanceunits: "",
            receiveddate: "",
            receivedamount: "",
            suppliedunits: "",
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
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/esim/getSingleSalesEsimInvoice?headerid=" + this.value;
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
                    totalsuppliedunits: this.receivedetail.totalsuppliedunits,
                    balanceunits: this.receivedetail.balanceunits,
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
        template: __webpack_require__(/*! raw-loader!./received-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-sales-invoice-details/received-details/received-details.component.html"),
        styles: [__webpack_require__(/*! ./received-details.component.scss */ "./src/app/delar-application/esim-sales-invoice-details/received-details/received-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], ReceivedDetailsComponent);



/***/ }),

/***/ "./src/app/delar-application/esim-sales-invoice-details/view-details/view-details.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-sales-invoice-details/view-details/view-details.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.fileinput {\n  margin-top: 21px;\n  margin-left: 10%;\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.label-heads {\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -3px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 10px 11px;\n    padding-right: 20px;\n  }\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -4px;\n  right: -3px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -15px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1zYWxlcy1pbnZvaWNlLWRldGFpbHMvdmlldy1kZXRhaWxzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGVzaW0tc2FsZXMtaW52b2ljZS1kZXRhaWxzXFx2aWV3LWRldGFpbHNcXHZpZXctZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1zYWxlcy1pbnZvaWNlLWRldGFpbHMvdmlldy1kZXRhaWxzL3ZpZXctZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxxQkFBQTtBQ0RKOztBRElBO0VBQ0k7SUFDSSxnQkFBQTtFQ0ROOztFRElFO0lBQ0ksVUFBQTtFQ0ROO0FBQ0Y7O0FESUE7RUFDSTtJQUNJLFNBQUE7RUNGTjs7RURLRTtJQUNJLFVBQUE7RUNGTjtBQUNGOztBREtBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtBQ0hKOztBRE1BO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUNITjtBQUNGOztBRE1BO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLG1CQUFBO0VDSk47QUFDRjs7QURRQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNOSjs7QURTQTtFQUNJLDJCQUFBO0FDTko7O0FEVUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FDUEo7O0FEVUE7RUFDSSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ1BKOztBRFVBO0VBQ0ksbUJBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tc2FsZXMtaW52b2ljZS1kZXRhaWxzL3ZpZXctZGV0YWlscy92aWV3LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuXHJcbn1cclxuXHJcbi5zZWxlY3RhYmxlLWlucHV0IHtcclxuICAgIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5maWxlaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMjFweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcblxyXG59XHJcblxyXG4ubGFiZWwtaGVhZCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XHJcbn1cclxuXHJcbi5sYWJlbC1oZWFkcyB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc3VibWl0YnRuIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzYyNTJlZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgICAuaW5wdXQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3N1Ym1pdGJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAuZm9ybS1maWVsZCB7XHJcbiAgICAgICAgem9vbTogODAlO1xyXG4gICAgfVxyXG5cclxuICAgICNzdWJtaXRidG4ge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbjogLTNweCA1cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweClhbmQobWF4LXdpZHRoOjEwMjNweCkge1xyXG4gICAgLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCkge1xyXG4gICAgLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMTFweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmZhYi1idG4ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsYXZlbmRlcjtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTRweDtcclxuICAgIHJpZ2h0OiAtM3B4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5mYWItYnRuOmhvdmVyIHtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2I2YjZiNjtcclxufVxyXG5cclxuXHJcbi50b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTgwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufSIsIi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5maWxlaW5wdXQge1xuICBtYXJnaW4tdG9wOiAyMXB4O1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4ubGFiZWwtaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XG59XG5cbi5sYWJlbC1oZWFkcyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN1Ym1pdGJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTNweCA1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxMHB4IDExcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxufVxuLmZhYi1idG4ge1xuICAtLWJhY2tncm91bmQ6IGxhdmVuZGVyO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNHB4O1xuICByaWdodDogLTNweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLmZhYi1idG46aG92ZXIge1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-sales-invoice-details/view-details/view-details.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-sales-invoice-details/view-details/view-details.component.ts ***!
  \*****************************************************************************************************/
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
            "/esim/getSalesInvoiceDetails?invoiceno=" +
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
                // {
                //   text: "Supplied Units",
                //   datafield: "suppliedunits",
                //   cellsrenderer: this.renderer,
                //   cellsalign: "center",
                //   align: "center",
                //   width: 200,
                // },
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
        template: __webpack_require__(/*! raw-loader!./view-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-sales-invoice-details/view-details/view-details.component.html"),
        styles: [__webpack_require__(/*! ./view-details.component.scss */ "./src/app/delar-application/esim-sales-invoice-details/view-details/view-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], ViewDetailsComponent);



/***/ })

}]);
//# sourceMappingURL=esim-sales-invoice-details-esim-sales-invoice-details-module-es2015.js.map