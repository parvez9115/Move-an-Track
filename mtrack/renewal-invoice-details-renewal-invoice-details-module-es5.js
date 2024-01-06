(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["renewal-invoice-details-renewal-invoice-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/renewal-invoice-details/edit-generate-invoice/edit-generate-invoice.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/renewal-invoice-details/edit-generate-invoice/edit-generate-invoice.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Invoice Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"generateForm\">\n    <ion-row style=\"margin-top: 5px\">\n      <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n        <ion-label class=\"dealer-label\">User ID :</ion-label>\n        <ion-input\n          placeholder=\"Enter the User Id\"\n          formControlName=\"userid\"\n          class=\"input\"\n        ></ion-input>\n      </ion-col>\n\n      <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n        <ion-label class=\"dealer-label\">Password :</ion-label>\n        <ion-input\n          type=\"password\"\n          placeholder=\"Enter the Password\"\n          formControlName=\"password\"\n          class=\"input\"\n        ></ion-input>\n      </ion-col>\n\n      <!-- <ion-col style=\"text-align: end; margin-right: 10px\"\n        ><span\n          ><ion-icon\n            class=\"dismiss\"\n            name=\"trash\"\n            (click)=\"deleteModel()\"\n          ></ion-icon\n        ></span>\n      </ion-col> -->\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"3.5\" size-md=\"3.5\" style=\"margin-left: 10px\">\n        <ion-label>\n          <span class=\"dealer-label\">Dealer :</span>\n          <span class=\"dealer-data\">{{ value.dealerid }}</span>\n        </ion-label>\n      </ion-col>\n\n      <ion-col>\n        <ion-label>\n          <span class=\"dealer-label\">Invoice Date :</span>\n          <span class=\"dealer-data\">{{ value.invoicedate }}</span>\n        </ion-label>\n      </ion-col>\n      <ion-col style=\"text-align: end !important\">\n        <ion-button\n          class=\"button\"\n          size=\"small\"\n          type=\"submit\"\n          (click)=\"confirmModel()\"\n          [disabled]=\"!generateForm.valid\"\n          >Submit\n        </ion-button>\n        <ion-button\n          class=\"button\"\n          size=\"small\"\n          type=\"cancel\"\n          (click)=\"cancelBtn()\"\n          >Cancel</ion-button\n        >\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"visible\">\n      <ion-col size=\"12\" size-lg=\"2.2\" size-md=\"2.2\" style=\"margin-left: 10px\">\n        <ion-label>\n          <span class=\"dealer-label\">IMEI No :</span>\n        </ion-label>\n        <ion-input formControlName=\"imei\" class=\"input\" disabled></ion-input>\n      </ion-col>\n\n      <ion-col size=\"12\" size-lg=\"4.5\" size-md=\"4.5\">\n        <ion-label>\n          <span class=\"dealer-label\">Product Name :</span>\n        </ion-label>\n        <ionic-selectable\n          class=\"input selectable-input\"\n          formControlName=\"productnamelist\"\n          [(ngModel)]=\"product\"\n          [items]=\"productnamelist\"\n          [canSearch]=\"true\"\n          [hasVirtualScroll]=\"true\"\n          itemValueField=\"itemname\"\n          itemTextField=\"itemname\"\n        >\n        </ionic-selectable>\n      </ion-col>\n      <ion-col\n        size=\"12\"\n        size-lg=\"2\"\n        size-md=\"2\"\n        style=\"text-align: end; margin-top: 27px\"\n      >\n        <ion-button size=\"small\" (click)=\"save()\">Save</ion-button>\n        <ion-button size=\"small\" (click)=\"dismiss()\">Clear</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n  <ion-row style=\"margin-top: 10px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        (onRowclick)=\"myGridOnRowSelect($event)\"\n        [theme]=\"'material'\"\n        [width]=\"'99%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [columns]=\"columns\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [enablebrowserselection]=\"true\"\n        [pagesizeoptions]=\"page\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [showfilterrow]=\"true\"\n        [pageable]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/renewal-invoice-details/generate-invoice/generate-invoice.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/renewal-invoice-details/generate-invoice/generate-invoice.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Invoice Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"generateForm\">\n    <ion-row style=\"margin-top: 5px\">\n      <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n        <ion-label class=\"dealer-label\">User ID :</ion-label>\n        <ion-input\n          placeholder=\"Enter the User Id\"\n          formControlName=\"userid\"\n          class=\"input\"\n        ></ion-input>\n      </ion-col>\n      <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n        <ion-label class=\"dealer-label\">Password :</ion-label>\n        <ion-input\n          type=\"password\"\n          placeholder=\"Enter the Password\"\n          formControlName=\"password\"\n          class=\"input\"\n        ></ion-input>\n      </ion-col>\n      <!-- <ion-col style=\"text-align: end; margin-right: 10px\"\n        ><span\n          ><ion-icon\n            class=\"dismiss\"\n            name=\"trash\"\n            (click)=\"deleteModel()\"\n          ></ion-icon\n        ></span>\n      </ion-col> -->\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"3.5\" size-md=\"3.5\" style=\"margin-left: 10px\">\n        <ion-label>\n          <span class=\"dealer-label\">Dealer :</span>\n          <span class=\"dealer-data\">{{ header.dealerid }}</span>\n        </ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label>\n          <span class=\"dealer-label\">Invoice Date :</span>\n          <span class=\"dealer-data\">{{ header.invoicedate }}</span>\n        </ion-label>\n      </ion-col>\n      <ion-col style=\"text-align: end !important\">\n        <ion-button\n          class=\"button\"\n          size=\"small\"\n          type=\"submit\"\n          (click)=\"confirmModel()\"\n          [disabled]=\"!generateForm.valid\"\n          >Submit\n        </ion-button>\n        <ion-button\n          class=\"button\"\n          size=\"small\"\n          type=\"cancel\"\n          (click)=\"cancelBtn()\"\n          >Cancel</ion-button\n        >\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"visible\">\n      <ion-col size=\"12\" size-lg=\"2.2\" size-md=\"2.2\" style=\"margin-left: 10px\">\n        <ion-label>\n          <span class=\"dealer-label\">IMEI No :</span>\n        </ion-label>\n        <ion-input formControlName=\"imei\" class=\"input\" disabled></ion-input>\n      </ion-col>\n      <ion-col size=\"12\" size-lg=\"4.5\" size-md=\"4.5\">\n        <ion-label>\n          <span class=\"dealer-label\">Product Name :</span>\n        </ion-label>\n        <ionic-selectable\n          class=\"input selectable-input\"\n          formControlName=\"productnamelist\"\n          [(ngModel)]=\"product\"\n          [items]=\"productnamelist\"\n          [canSearch]=\"true\"\n          [hasVirtualScroll]=\"true\"\n          itemValueField=\"itemname\"\n          itemTextField=\"itemname\"\n        >\n        </ionic-selectable>\n      </ion-col>\n      <ion-col\n        size=\"12\"\n        size-lg=\"2\"\n        size-md=\"2\"\n        style=\"text-align: end; margin-top: 27px\"\n      >\n        <ion-button size=\"small\" (click)=\"save()\">Save</ion-button>\n        <ion-button size=\"small\" (click)=\"dismiss()\">Clear</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n  <ion-row style=\"margin-top: 10px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        (onRowclick)=\"myGridOnRowSelect($event)\"\n        [theme]=\"'material'\"\n        [width]=\"'99%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [columns]=\"columns\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [enablebrowserselection]=\"true\"\n        [pagesizeoptions]=\"page\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [showfilterrow]=\"true\"\n        [pageable]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/renewal-invoice-details/received-details/received-details.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/renewal-invoice-details/received-details/received-details.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Received Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"myPlatform != 'desktop'\" class=\"content-style label-style\">\n  <ion-grid>\n    <ion-row class=\"form-field\">\n      <ion-col\n        size=\"12\"\n        size-sm=\"12\"\n        size-md=\"10\"\n        offset-md=\"1\"\n        size-lg=\"12\"\n        offset-lg=\"0\"\n      >\n        <form [formGroup]=\"receiveForm\">\n          <div class=\"wrapper-form\">\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Dealer:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"dealerid\"\n                  value=\"Disabled\"\n                  disabled\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Invoice No:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"invoiceno\"\n                  value=\"Disabled\"\n                  disabled\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Invoice Amount:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"invoiceamount\"\n                  value=\"Disabled\"\n                  disabled\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Total Received Amt:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"totalamountreceived\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Balance Amount:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"balanceamount\"\n                  value=\"Disabled\"\n                  disabled\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Total Supplied Units:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"totalsuppliedunits\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Balance Units:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"balanceunits\"\n                  value=\"Disabled\"\n                  disabled\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Received Date:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"date\"\n                  [max]=\"maxDate\"\n                  formControlName=\"receiveddate\"\n                  placeholder=\"Enter the Select Date\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Received Amount:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"receivedamount\"\n                  placeholder=\"Enter the Received Amount\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <!-- <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Supplied Units:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"suppliedunits\"\n                  placeholder=\"Enter the Supplied Units\"\n                ></ion-input>\n              </ion-col>\n            </ion-row> -->\n          </div>\n        </form>\n\n        <ion-row class=\"content-style\">\n          <ion-col style=\"text-align: center !important; padding: 20px\">\n            <ion-button\n              class=\"button\"\n              type=\"submit\"\n              [disabled]=\"!receiveForm.valid\"\n              (click)=\"submitBtn()\"\n              >Submit\n            </ion-button>\n            <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\"\n              >Cancel</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf=\"myPlatform == 'desktop'\" class=\"content-style label-style\">\n  <ion-row class=\"form-field\">\n    <ion-col>\n      <form [formGroup]=\"receiveForm\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Dealer:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"dealerid\"\n                  value=\"Disabled\"\n                  disabled\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Invoice No:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"invoiceno\"\n                  value=\"Disabled\"\n                  disabled\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Invoice Amount:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"invoiceamount\"\n                  value=\"Disabled\"\n                  disabled\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\"\n                >Total Received Amt:</ion-col\n              >\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"totalamountreceived\"\n                  value=\"Disabled\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Balance Amount:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"balanceamount\"\n                  value=\"Disabled\"\n                  disabled\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">No of Units:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"noofunits\"\n                  value=\"Disabled\"\n                  disabled\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Received Date:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"date\"\n                  [max]=\"maxDate\"\n                  formControlName=\"receiveddate\"\n                  placeholder=\"Enter the Select Date\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Received Amount:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"receivedamount\"\n                  placeholder=\"Enter the Received Amount\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <!-- <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Supplied Units:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"suppliedunits\"\n                  placeholder=\"Enter the Supplied Units\"\n                ></ion-input>\n              </ion-col>\n            </ion-row> -->\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 10px\">\n          <ion-button\n            class=\"button\"\n            type=\"submit\"\n            [disabled]=\"!receiveForm.valid\"\n            (click)=\"submitBtn()\"\n            >Submit\n          </ion-button>\n          <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\"\n            >Cancel</ion-button\n          >\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/renewal-invoice-details/renewal-invoice-details.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/renewal-invoice-details/renewal-invoice-details.page.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons\n      *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\"\n      slot=\"start\"\n    >\n      <ion-icon\n        routerLink=\"/tabs-login/esim-dashboard\"\n        name=\"arrow-back\"\n        style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-row>\n      <ion-title *ngIf=\"myPlatform != 'desktop'\"\n        >Renewal Invoice Details</ion-title\n      >\n      <ion-title *ngIf=\"myPlatform == 'desktop'\"\n        >Device Invoice Details</ion-title\n      >\n      <ion-col\n        *ngIf=\"myPlatform == 'desktop'\"\n        size=\"8\"\n        style=\"text-align: right\"\n      >\n        <ion-button class=\"submitBtn\" size=\"small\" (click)=\"newfunc()\"\n          >Export</ion-button\n        >\n        <ion-row style=\"margin: 0px; padding: 0; float: right\">\n          <ion-col style=\"margin-top: 0\" class=\"tooltip\">\n            <ion-fab-button\n              size=\"small\"\n              class=\"fab-btn\"\n              href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/DeviceRenewalInvoice.xlsx\"\n              download=\"sample.xlsx\"\n            >\n              <div class=\"excel-wrapper\"></div>\n            </ion-fab-button>\n            <span class=\"tooltiptext\">Excel-Format</span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngIf=\"myPlatform != 'desktop'\" style=\"text-align: right\">\n        <ion-row style=\"margin: 0px; padding: 0; float: right\">\n          <ion-col style=\"margin-top: 0\" class=\"tooltip\">\n            <ion-fab-button\n              size=\"small\"\n              class=\"fab-btn\"\n              href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/DeviceRenewalInvoice.xlsx\"\n              download=\"sample.xlsx\"\n            >\n              <div class=\"excel-wrapper\"></div>\n            </ion-fab-button>\n            <span class=\"tooltiptext\">Excel-Format</span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"myPlatform == 'desktop'\" class=\"upperRow\">\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/esim-purchase-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Esim Purchase Invoice</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/esim-sales-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Sales Invoice</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/renewal-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Renewal Invoice</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/device-topup-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Topup Invoice</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/device-extend-oneyear-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Extend 1 Yr Invoice</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/device-certificate-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Certificate Invoice</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"head\">\n      <ion-col\n        [ngClass]=\"{'selectedUpperColll': 'true'}\"\n        routerLink=\"/tabs-login/device-renewal-invoice-details\"\n        routerLinkActive=\"click\"\n        size=\"3\"\n      >\n        <ion-label>Old </ion-label>\n      </ion-col>\n\n      <ion-col\n        style=\"margin-left: 10px\"\n        [ngClass]=\"{'selectedUpperColll': 'true'}\"\n        routerLink=\"/tabs-login/renewal-invoice-details\"\n        routerLinkActive=\"click\"\n        size=\"3\"\n      >\n        <ion-label>New</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"wrapper-container\">\n      <ion-col size=\"12\">\n        <form [formGroup]=\"SalesinvoiceForm\">\n          <ion-row class=\"form-field\">\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Dealer:</ion-label>\n              <ionic-selectable\n                class=\"input selectable-input\"\n                formControlName=\"dealerid\"\n                placeholder=\"Select the Dealer\"\n                [items]=\"Dealer\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n              >\n              </ionic-selectable>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Invoice Date:</ion-label>\n              <ion-input\n                type=\"date\"\n                formControlName=\"invoicedate\"\n                [max]=\"maxDate\"\n                class=\"input\"\n                disabled\n              ></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">No of Units:</ion-label>\n              <ion-input\n                type=\"number\"\n                placeholder=\"Enter the Units\"\n                formControlName=\"noofunits\"\n                class=\"input\"\n              >\n              </ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">File Upload:</ion-label>\n              <input\n                type=\"file\"\n                (change)=\"onFileChange($event)\"\n                formControlName=\"fileupload\"\n                class=\"documents\"\n              />\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col\n              size=\"1.8\"\n              (mouseover)=\"pendinginvoice()\"\n              (click)=\"invoicepopup()\"\n              style=\"\n                margin: 12px;\n                padding-top: 10px;\n                height: 39px;\n                cursor: pointer;\n              \"\n            >\n              <ion-label\n                style=\"\n                  padding: 8px;\n                  border: 1px solid black;\n                  background-color: #f59e0b;\n                  border-radius: 5px;\n                  color: #fff;\n                  font-weight: 400;\n                \"\n              >\n                Pending Invoice\n                <span\n                  *ngIf=\"color != 'red'\"\n                  style=\"\n                    background-color: #28e070;\n                    padding: 1px;\n                    padding-left: 5px;\n                    padding-right: 5px;\n                    border-radius: 20px;\n                    color: #000;\n                    font-weight: bold;\n                    font-size: 16px;\n                  \"\n                  >{{invoices.pending}}</span\n                >\n                <span\n                  *ngIf=\"color == 'red'\"\n                  style=\"\n                    background-color: red;\n                    padding: 1px;\n                    padding-left: 5px;\n                    padding-right: 5px;\n                    border-radius: 20px;\n                    color: #fff;\n                    font-weight: bold;\n                    font-size: 16px;\n                  \"\n                  >{{invoices.pending}}</span\n                ></ion-label\n              >\n            </ion-col>\n            <ion-col style=\"text-align: end\">\n              <ion-button\n                class=\"submitbtn\"\n                (click)=\"add()\"\n                [disabled]=\"!SalesinvoiceForm.valid || button\"\n                >Request for Invoice</ion-button\n              >\n              <ion-button class=\"submitbtn\" (click)=\"clear()\">Clear</ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n\n    <jqxGrid\n      #myGrid\n      [theme]=\"'material'\"\n      (onRowclick)=\"myGridOnRowSelect($event)\"\n      [width]=\"'99%'\"\n      [autoheight]=\"true\"\n      [source]=\"dataAdapter\"\n      [enablebrowserselection]=\"true\"\n      [sortable]=\"true\"\n      [filterable]=\"true\"\n      [columns]=\"columns\"\n      [columnsresize]=\"true\"\n      [enabletooltips]=\"true\"\n      [pageable]=\"true\"\n      [showfilterrow]=\"true\"\n      style=\"\n        font-size: 16px;\n        text-align: center !important;\n        margin: auto;\n        cursor: pointer;\n      \"\n    >\n    </jqxGrid>\n  </ion-grid>\n\n  <ion-fab\n    *ngIf=\"arrow\"\n    style=\"margin-right: 1%; margin-bottom: 9%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToTop()\">\n      <ion-icon class=\"icon\" name=\"arrow-up\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab\n    *ngIf=\"arrow\"\n    style=\"margin-right: 1%; margin-bottom: 5%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToBottom()\">\n      <ion-icon class=\"icon\" name=\"arrow-down\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/renewal-invoice-details/view-details/view-details.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/renewal-invoice-details/view-details/view-details.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>View Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"wrapper-container\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        [theme]=\"'material'\"\n        [width]=\"'99%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [columns]=\"columns\"\n        [pagesizeoptions]=\"page\"\n        [enablebrowserselection]=\"true\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/renewal-invoice-details/view-imei/view-imei.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/renewal-invoice-details/view-imei/view-imei.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>View IMEI</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row style=\"padding: 10px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        (onRowclick)=\"myGridOnRowSelect($event)\"\n        [enablebrowserselection]=\"true\"\n        [theme]=\"'material'\"\n        [width]=\"'99.5%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [pagesizeoptions]=\"page\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: left;\n          margin: auto;\n          cursor: pointer;\n          padding-left: 5px;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/renewal-invoice-details/edit-generate-invoice/edit-generate-invoice.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/delar-application/renewal-invoice-details/edit-generate-invoice/edit-generate-invoice.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  color: white;\n}\n\n.arrow-back {\n  color: white;\n}\n\n.dismiss {\n  font-size: 25px;\n  cursor: pointer;\n}\n\n.dismiss:hover {\n  color: red;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.imei-content {\n  text-align: right;\n  align-self: center;\n  font-size: 18px;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcmVuZXdhbC1pbnZvaWNlLWRldGFpbHMvZWRpdC1nZW5lcmF0ZS1pbnZvaWNlL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXHJlbmV3YWwtaW52b2ljZS1kZXRhaWxzXFxlZGl0LWdlbmVyYXRlLWludm9pY2VcXGVkaXQtZ2VuZXJhdGUtaW52b2ljZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcmVuZXdhbC1pbnZvaWNlLWRldGFpbHMvZWRpdC1nZW5lcmF0ZS1pbnZvaWNlL2VkaXQtZ2VuZXJhdGUtaW52b2ljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ0dGOztBRERBO0VBQ0UsVUFBQTtBQ0lGOztBREZBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0tGOztBREhBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNNRjs7QURKQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNPRjs7QURMQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ1FGIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcmVuZXdhbC1pbnZvaWNlLWRldGFpbHMvZWRpdC1nZW5lcmF0ZS1pbnZvaWNlL2VkaXQtZ2VuZXJhdGUtaW52b2ljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmFycm93LWJhY2sge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZGlzbWlzcyB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZGlzbWlzczpob3ZlciB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4uZGVhbGVyLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5pbWVpLWNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBtYXJnaW46IDdweDtcclxufVxyXG4uc2VsZWN0YWJsZS1pbnB1dCB7XHJcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuIiwiLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYXJyb3ctYmFjayB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRpc21pc3Mge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRpc21pc3M6aG92ZXIge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZGVhbGVyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaW1laS1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIG1hcmdpbjogN3B4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/renewal-invoice-details/edit-generate-invoice/edit-generate-invoice.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/delar-application/renewal-invoice-details/edit-generate-invoice/edit-generate-invoice.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: EditGenerateInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGenerateInvoiceComponent", function() { return EditGenerateInvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var EditGenerateInvoiceComponent = /** @class */ (function () {
    function EditGenerateInvoiceComponent(ajaxService, modalController, platform, alertController, commonService, formBuilder) {
        this.ajaxService = ajaxService;
        this.modalController = modalController;
        this.platform = platform;
        this.alertController = alertController;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.page = [];
        this.visible = false;
        this.noofunits = [];
    }
    EditGenerateInvoiceComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    EditGenerateInvoiceComponent.prototype.createForm = function () {
        this.generateForm = this.formBuilder.group({
            userid: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            imei: [""],
            productnamelist: [""],
        });
    };
    EditGenerateInvoiceComponent.prototype.clear = function () {
        this.generateForm.patchValue({
            userid: "",
            password: "",
        });
    };
    EditGenerateInvoiceComponent.prototype.dismiss = function () {
        this.visible = false;
        this.generateForm.patchValue({
            imei: "",
            productnamelist: "",
        });
    };
    EditGenerateInvoiceComponent.prototype.getdatas = function () {
        var _this = this;
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/esim/geteditrenewalzohobookproductdetails?dealername=" +
            this.value.dealerid +
            "&headerid=" +
            this.value.headerid +
            "&invoiceno=" +
            this.value.invoiceno +
            "&invoicedate=" +
            this.value.invoicedate;
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.tableData = res;
            _this.commonService.dismissLoader();
            _this.renderer = function (row, column, value) {
                if (value == "") {
                    return "--";
                }
                else if (value == "0") {
                    return ('<span style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                        0 +
                        "</span>");
                }
                else {
                    return ('<span style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                        value +
                        "</span>");
                }
            };
            _this.source = { localdata: _this.tableData };
            console.log(_this.tableData.length);
            _this.dataAdapter = new jqx.dataAdapter(_this.source);
            _this.columns = [
                {
                    text: "IMEI",
                    datafield: "imei",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "Service Provider",
                    datafield: "serviceprovider",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "Validity Period",
                    datafield: "validityperiod",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "Card Status",
                    datafield: "cardstatus",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 90,
                },
                {
                    text: "Product Name",
                    datafield: "productname",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 300,
                },
                {
                    text: "Purchase Rate",
                    datafield: "purchaserate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 105,
                },
                {
                    text: "Rate",
                    datafield: "rate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 50,
                },
                {
                    text: "",
                    datafield: "Edit",
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
                    datafield: "delete",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 60,
                    cellsrenderer: function () {
                        return _this.myPlatform == "desktop"
                            ? "Delete"
                            : "<button>Delete</button>";
                    },
                    buttonclick: function (row) {
                        _this.deleteModel(row);
                    },
                },
            ];
        });
    };
    EditGenerateInvoiceComponent.prototype.setValue = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/esim/getDealerProduct?dealername=" +
            this.value.dealerid +
            "&serviceprovider=" +
            this.selectedRow.serviceprovider;
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.productnamelist = res;
            _this.visible = true;
            _this.generateForm.patchValue({
                imei: _this.selectedRow.imei,
            });
            var data = _this.productnamelist.filter(function (f) { return f.itemname == _this.selectedRow.productname; });
            _this.product = data[0];
        });
    };
    EditGenerateInvoiceComponent.prototype.deleteModel = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.selectedRow) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: " Delete",
                                backdropDismiss: false,
                                message: "Are you sure you want to remove?",
                                buttons: [
                                    {
                                        text: "Cancel",
                                        role: "cancel",
                                        handler: function (data) {
                                            _this.myGrid.clearselection();
                                            _this.selectedRow = "";
                                        },
                                    },
                                    {
                                        text: "Ok",
                                        handler: function (data) {
                                            _this.deleteAnalogRow(row);
                                        },
                                    },
                                ],
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.commonService.showConfirm("Please select a row to remove");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EditGenerateInvoiceComponent.prototype.deleteAnalogRow = function (row) {
        this.tableData.splice(row, 1);
        this.noofunits = this.tableData.length;
        this.myGrid.updatebounddata();
        this.myGrid.clearselection();
        this.selectedRow = "";
    };
    EditGenerateInvoiceComponent.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = event.args.row.bounddata;
    };
    EditGenerateInvoiceComponent.prototype.save = function () {
        var _this = this;
        var productValue = this.generateForm.get("productnamelist").value;
        var selectedIndex = this.tableData.findIndex(function (row) { return row.imei === _this.selectedRow.imei; });
        this.tableData[selectedIndex].validityperiod = productValue.validityperiod;
        this.tableData[selectedIndex].productid = productValue.itemid;
        this.tableData[selectedIndex].productname = productValue.itemname;
        this.tableData[selectedIndex].rate = productValue.rate;
        this.tableData[selectedIndex].purchaserate = productValue.purchaserate;
        this.tableData[selectedIndex].description = productValue.description;
        this.dismiss();
        this.myGrid.updatebounddata();
    };
    EditGenerateInvoiceComponent.prototype.submitBtn = function () {
        var _this = this;
        if (this.tableData) {
            this.noofunits = this.tableData.length;
        }
        else {
            this.noofunits;
        }
        var data = this.tableData;
        var arr = [];
        for (var i = 0; i < data.length; i++) {
            arr.push({
                serviceprovider: this.myGrid["attrSource"]["originaldata"][i].serviceprovider,
                imei: this.myGrid["attrSource"]["originaldata"][i].imei,
                renewalno: this.myGrid["attrSource"]["originaldata"][i].renewalno,
                cardstatus: this.myGrid["attrSource"]["originaldata"][i].cardstatus,
                productid: this.myGrid["attrSource"]["originaldata"][i].productid,
                productname: this.myGrid["attrSource"]["originaldata"][i].productname,
                purchaserate: parseInt(this.myGrid["attrSource"]["originaldata"][i].purchaserate),
                rate: parseInt(this.myGrid["attrSource"]["originaldata"][i].rate),
                description: this.myGrid["attrSource"]["originaldata"][i].description,
                validityperiod: this.myGrid["attrSource"]["originaldata"][i].validityperiod,
                pagename: "Renewal",
            });
        }
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/esim/saveZohoRenewalInvoiceHeader?dealerid=" +
            this.value.dealerid +
            "&headerid=" +
            this.value.headerid +
            "&invoicedate=" +
            this.value.invoicedate +
            "&noofunits=" +
            this.noofunits +
            "&createdby=" +
            localStorage.getItem("userName") +
            "&userid=" +
            this.generateForm.value.userid +
            "&password=" +
            this.generateForm.value.password;
        this.ajaxService.ajaxPostWithBody(url, arr).subscribe(function (res) {
            _this.commonService.dismissLoader();
            if (res.message == "Invoice Details Saved Successfully") {
                _this.clear();
                _this.modalController.dismiss({
                    data: "Invoice Details Saved Successfully",
                });
            }
            else {
                _this.commonService.showConfirm(res.message);
            }
        });
    };
    EditGenerateInvoiceComponent.prototype.confirmModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Confirm",
                            backdropDismiss: false,
                            message: "Are you sure want to Submit?",
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                    handler: function (data) { },
                                },
                                {
                                    text: "Ok",
                                    handler: function (data) {
                                        _this.submitBtn();
                                    },
                                },
                            ],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditGenerateInvoiceComponent.prototype.ngAfterViewInit = function () {
        this.myGrid.horizontalscrollbarstep(["70"]);
        this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
    };
    EditGenerateInvoiceComponent.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.createForm();
        this.getdatas();
    };
    EditGenerateInvoiceComponent.ctorParameters = function () { return [
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditGenerateInvoiceComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditGenerateInvoiceComponent.prototype, "myGrid", void 0);
    EditGenerateInvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-edit-generate-invoice",
            template: __webpack_require__(/*! raw-loader!./edit-generate-invoice.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/renewal-invoice-details/edit-generate-invoice/edit-generate-invoice.component.html"),
            styles: [__webpack_require__(/*! ./edit-generate-invoice.component.scss */ "./src/app/delar-application/renewal-invoice-details/edit-generate-invoice/edit-generate-invoice.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditGenerateInvoiceComponent);
    return EditGenerateInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/renewal-invoice-details/generate-invoice/generate-invoice.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/delar-application/renewal-invoice-details/generate-invoice/generate-invoice.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  color: white;\n}\n\n.arrow-back {\n  color: white;\n}\n\n.dismiss {\n  font-size: 25px;\n  cursor: pointer;\n}\n\n.dismiss:hover {\n  color: red;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.imei-content {\n  text-align: right;\n  align-self: center;\n  font-size: 18px;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcmVuZXdhbC1pbnZvaWNlLWRldGFpbHMvZ2VuZXJhdGUtaW52b2ljZS9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxyZW5ld2FsLWludm9pY2UtZGV0YWlsc1xcZ2VuZXJhdGUtaW52b2ljZVxcZ2VuZXJhdGUtaW52b2ljZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcmVuZXdhbC1pbnZvaWNlLWRldGFpbHMvZ2VuZXJhdGUtaW52b2ljZS9nZW5lcmF0ZS1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxVQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDS0Y7O0FESEE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ01GOztBREpBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ09GOztBRExBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDUUYiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9yZW5ld2FsLWludm9pY2UtZGV0YWlscy9nZW5lcmF0ZS1pbnZvaWNlL2dlbmVyYXRlLWludm9pY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5hcnJvdy1iYWNrIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmRpc21pc3Mge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRpc21pc3M6aG92ZXIge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLmRlYWxlci1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uaW1laS1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgbWFyZ2luOiA3cHg7XHJcbn1cclxuLnNlbGVjdGFibGUtaW5wdXQge1xyXG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbiIsIi5oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFycm93LWJhY2sge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kaXNtaXNzIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kaXNtaXNzOmhvdmVyIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmRlYWxlci1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmltZWktY29udGVudCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBtYXJnaW46IDdweDtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/renewal-invoice-details/generate-invoice/generate-invoice.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/delar-application/renewal-invoice-details/generate-invoice/generate-invoice.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: GenerateInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateInvoiceComponent", function() { return GenerateInvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var GenerateInvoiceComponent = /** @class */ (function () {
    function GenerateInvoiceComponent(ajaxService, modalController, platform, alertController, commonService, formBuilder) {
        this.ajaxService = ajaxService;
        this.modalController = modalController;
        this.platform = platform;
        this.alertController = alertController;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.page = [];
        this.visible = false;
    }
    GenerateInvoiceComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    GenerateInvoiceComponent.prototype.createForm = function () {
        this.generateForm = this.formBuilder.group({
            userid: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            imei: [""],
            productnamelist: [""],
        });
    };
    GenerateInvoiceComponent.prototype.clear = function () {
        this.generateForm.patchValue({
            userid: "",
            password: "",
        });
    };
    GenerateInvoiceComponent.prototype.dismiss = function () {
        this.visible = false;
        this.generateForm.patchValue({
            imei: "",
            productnamelist: "",
        });
    };
    GenerateInvoiceComponent.prototype.getdatas = function () {
        var _this = this;
        this.tableData = this.value;
        this.renderer = function (row, column, value) {
            if (value == "") {
                return "--";
            }
            else if (value == "0") {
                return ('<span style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                    0 +
                    "</span>");
            }
            else {
                return ('<span style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                    value +
                    "</span>");
            }
        };
        this.source = { localdata: this.tableData };
        console.log(this.tableData);
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.columns = [
            {
                text: "IMEI",
                datafield: "imei",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 110,
            },
            {
                text: "Service Provider",
                datafield: "serviceprovider",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 120,
            },
            {
                text: "Validity Period",
                datafield: "validityperiod",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 110,
            },
            {
                text: "Card Status",
                datafield: "cardstatus",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 90,
            },
            {
                text: "Product Name",
                datafield: "productname",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 300,
            },
            {
                text: "Purchase Rate",
                datafield: "purchaserate",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 105,
            },
            {
                text: "Rate",
                datafield: "rate",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 50,
            },
            {
                text: "",
                datafield: "Edit",
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
                datafield: "delete",
                columntype: "button",
                cellsalign: "center",
                align: "center",
                width: 60,
                cellsrenderer: function () {
                    return _this.myPlatform == "desktop"
                        ? "Delete"
                        : "<button>Delete</button>";
                },
                buttonclick: function (row) {
                    _this.deleteModel(row);
                },
            },
        ];
    };
    GenerateInvoiceComponent.prototype.setValue = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/esim/getDealerProduct?dealername=" +
            this.header.dealerid +
            "&serviceprovider=" +
            this.selectedRow.serviceprovider;
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.productnamelist = res;
            _this.visible = true;
            _this.generateForm.patchValue({
                imei: _this.selectedRow.imei,
            });
            var data = _this.productnamelist.filter(function (f) { return f.itemname == _this.selectedRow.productname; });
            _this.product = data[0];
        });
    };
    GenerateInvoiceComponent.prototype.deleteModel = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.selectedRow) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: " Delete",
                                backdropDismiss: false,
                                message: "Are you sure you want to remove?",
                                buttons: [
                                    {
                                        text: "Cancel",
                                        role: "cancel",
                                        handler: function (data) {
                                            _this.myGrid.clearselection();
                                            _this.selectedRow = "";
                                        },
                                    },
                                    {
                                        text: "Ok",
                                        handler: function (data) {
                                            _this.deleteAnalogRow(row);
                                        },
                                    },
                                ],
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.commonService.showConfirm("Please select a row to remove");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GenerateInvoiceComponent.prototype.deleteAnalogRow = function (row) {
        this.tableData.splice(row, 1);
        this.myGrid.updatebounddata();
        this.myGrid.clearselection();
        this.selectedRow = "";
    };
    GenerateInvoiceComponent.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = event.args.row.bounddata;
    };
    GenerateInvoiceComponent.prototype.save = function () {
        var _this = this;
        var productValue = this.generateForm.get("productnamelist").value;
        var selectedIndex = this.tableData.findIndex(function (row) { return row.imei === _this.selectedRow.imei; });
        this.tableData[selectedIndex].validityperiod = productValue.validityperiod;
        this.tableData[selectedIndex].productid = productValue.itemid;
        this.tableData[selectedIndex].productname = productValue.itemname;
        this.tableData[selectedIndex].rate = productValue.rate;
        this.tableData[selectedIndex].purchaserate = productValue.purchaserate;
        this.tableData[selectedIndex].description = productValue.description;
        this.dismiss();
        this.myGrid.updatebounddata();
        console.log(this.tableData);
    };
    GenerateInvoiceComponent.prototype.submitBtn = function () {
        var _this = this;
        var data = this.tableData;
        var arr = [];
        for (var i = 0; i < data.length; i++) {
            arr.push({
                requestid: this.myGrid["attrSource"]["originaldata"][i].requestid,
                serviceprovider: this.myGrid["attrSource"]["originaldata"][i].serviceprovider,
                imei: this.myGrid["attrSource"]["originaldata"][i].imei,
                renewalno: this.myGrid["attrSource"]["originaldata"][i].renewalno,
                cardstatus: this.myGrid["attrSource"]["originaldata"][i].cardstatus,
                productid: this.myGrid["attrSource"]["originaldata"][i].productid,
                productname: this.myGrid["attrSource"]["originaldata"][i].productname,
                purchaserate: parseInt(this.myGrid["attrSource"]["originaldata"][i].purchaserate),
                rate: parseInt(this.myGrid["attrSource"]["originaldata"][i].rate),
                description: this.myGrid["attrSource"]["originaldata"][i].description,
                validityperiod: this.myGrid["attrSource"]["originaldata"][i].validityperiod,
                pagename: "Renewal",
            });
        }
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/esim/saveEsimInvoiceApproved?dealername=" +
            this.header.dealerid +
            "&username=" +
            this.generateForm.value.userid +
            "&password=" +
            this.generateForm.value.password;
        this.ajaxService.ajaxPostWithBody(url, arr).subscribe(function (res) {
            _this.commonService.dismissLoader();
            if (res.message == "Invoice Details Saved Successfully") {
                _this.clear();
                _this.modalController.dismiss({
                    data: "Invoice Details Saved Successfully",
                });
            }
            else {
                _this.commonService.showConfirm(res.message);
            }
        });
    };
    GenerateInvoiceComponent.prototype.confirmModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Confirm",
                            backdropDismiss: false,
                            message: "Are you sure want to Submit?",
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                    handler: function (data) { },
                                },
                                {
                                    text: "Ok",
                                    handler: function (data) {
                                        _this.submitBtn();
                                    },
                                },
                            ],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GenerateInvoiceComponent.prototype.ngAfterViewInit = function () {
        this.myGrid.horizontalscrollbarstep(["70"]);
        this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
    };
    GenerateInvoiceComponent.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.createForm();
        this.getdatas();
    };
    GenerateInvoiceComponent.ctorParameters = function () { return [
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GenerateInvoiceComponent.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GenerateInvoiceComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GenerateInvoiceComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GenerateInvoiceComponent.prototype, "editvalue", void 0);
    GenerateInvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-generate-invoice",
            template: __webpack_require__(/*! raw-loader!./generate-invoice.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/renewal-invoice-details/generate-invoice/generate-invoice.component.html"),
            styles: [__webpack_require__(/*! ./generate-invoice.component.scss */ "./src/app/delar-application/renewal-invoice-details/generate-invoice/generate-invoice.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], GenerateInvoiceComponent);
    return GenerateInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/renewal-invoice-details/received-details/received-details.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/delar-application/renewal-invoice-details/received-details/received-details.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  background-color: #7c68f8;\n}\n\n.label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 18px;\n}\n\n.diable-style {\n  background: white;\n  line-height: 18px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #ffebcd;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcmVuZXdhbC1pbnZvaWNlLWRldGFpbHMvcmVjZWl2ZWQtZGV0YWlscy9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxyZW5ld2FsLWludm9pY2UtZGV0YWlsc1xccmVjZWl2ZWQtZGV0YWlsc1xccmVjZWl2ZWQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcmVuZXdhbC1pbnZvaWNlLWRldGFpbHMvcmVjZWl2ZWQtZGV0YWlscy9yZWNlaXZlZC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLFNBQUE7RUNDRjs7RURFQTtJQUNFLFVBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9yZW5ld2FsLWludm9pY2UtZGV0YWlscy9yZWNlaXZlZC1kZXRhaWxzL3JlY2VpdmVkLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3YzY4Zjg7XHJcbn1cclxuXHJcbi5sYWJlbC1zdHlsZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4uZGlhYmxlLXN0eWxlIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG5cclxuLmNvbnRlbnQtc3R5bGUge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29sLWNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuI2FkZC1pY29uIHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmViY2Q7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICAtLWJhY2tncm91bmQ6ICM3YzY4Zjg7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZm9ybS1maWVsZCB7XHJcbiAgICB6b29tOiA4MCU7XHJcbiAgfVxyXG5cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4uc2VsZWN0YWJsZS1pbnB1dCB7XHJcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuIiwiLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjNjhmODtcbn1cblxuLmxhYmVsLXN0eWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5kaWFibGUtc3R5bGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5jb250ZW50LXN0eWxlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb2wtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jYWRkLWljb24ge1xuICAtLWJhY2tncm91bmQ6ICNmZmViY2Q7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIC0tYmFja2dyb3VuZDogIzdjNjhmODtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5zZWxlY3RhYmxlLWlucHV0IHtcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/renewal-invoice-details/received-details/received-details.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/delar-application/renewal-invoice-details/received-details/received-details.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ReceivedDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceivedDetailsComponent", function() { return ReceivedDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var ReceivedDetailsComponent = /** @class */ (function () {
    function ReceivedDetailsComponent(platform, formBuilder, modalController, ajaxService, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.today = new Date();
    }
    ReceivedDetailsComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    ReceivedDetailsComponent.prototype.submitBtn = function () {
        var _this = this;
        var data;
        data = {
            createdby: localStorage.getItem("userName"),
            headerid: this.value.toString(),
            receiveddate: this.receiveForm.value.receiveddate + " " + "00:00:00",
            receivedamount: this.receiveForm.value.receivedamount.toString(),
            suppliedunits: this.receiveForm.value.suppliedunits.toString(),
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/esim/saveEsimRenewalInvoiceDetails";
        this.ajaxService
            .ajaxPostWithString(url, JSON.stringify(data))
            .subscribe(function (res) {
            if (JSON.parse(res).message == "Renewal Invoice Detail Saved Successfully") {
                _this.commonService.showConfirm("Renewal Invoice Detail Saved Successfully");
                _this.modalController.dismiss({
                    data: "Renewal Invoice Detail Saved Successfully",
                });
            }
            else if (res.message == "Renewal Invoice Detail Not Saved Successfully") {
                _this.commonService.showConfirm("Renewal Invoice Detail Not Saved Successfully");
            }
            else {
                _this.commonService.showConfirm("Your Amount is greater than invoice amount");
            }
        });
    };
    ReceivedDetailsComponent.prototype.createForm = function () {
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
    ReceivedDetailsComponent.prototype.reset = function () {
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
    ReceivedDetailsComponent.prototype.ngOnInit = function () {
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
            "/esim/getSingleRenewalEsimInvoice?headerid=" +
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
    ReceivedDetailsComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReceivedDetailsComponent.prototype, "value", void 0);
    ReceivedDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-received-details",
            template: __webpack_require__(/*! raw-loader!./received-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/renewal-invoice-details/received-details/received-details.component.html"),
            styles: [__webpack_require__(/*! ./received-details.component.scss */ "./src/app/delar-application/renewal-invoice-details/received-details/received-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], ReceivedDetailsComponent);
    return ReceivedDetailsComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/renewal-invoice-details/renewal-invoice-details.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/delar-application/renewal-invoice-details/renewal-invoice-details.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: RenewalInvoiceDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewalInvoiceDetailsPageModule", function() { return RenewalInvoiceDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _renewal_invoice_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renewal-invoice-details.page */ "./src/app/delar-application/renewal-invoice-details/renewal-invoice-details.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _view_imei_view_imei_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-imei/view-imei.component */ "./src/app/delar-application/renewal-invoice-details/view-imei/view-imei.component.ts");
/* harmony import */ var _received_details_received_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./received-details/received-details.component */ "./src/app/delar-application/renewal-invoice-details/received-details/received-details.component.ts");
/* harmony import */ var _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-details/view-details.component */ "./src/app/delar-application/renewal-invoice-details/view-details/view-details.component.ts");
/* harmony import */ var _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./generate-invoice/generate-invoice.component */ "./src/app/delar-application/renewal-invoice-details/generate-invoice/generate-invoice.component.ts");
/* harmony import */ var _edit_generate_invoice_edit_generate_invoice_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-generate-invoice/edit-generate-invoice.component */ "./src/app/delar-application/renewal-invoice-details/edit-generate-invoice/edit-generate-invoice.component.ts");















var routes = [
    {
        path: "",
        component: _renewal_invoice_details_page__WEBPACK_IMPORTED_MODULE_6__["RenewalInvoiceDetailsPage"],
    },
    {
        path: "view-details",
        component: _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_12__["ViewDetailsComponent"],
    },
    {
        path: "recived-details",
        component: _received_details_received_details_component__WEBPACK_IMPORTED_MODULE_11__["ReceivedDetailsComponent"],
    },
    {
        path: "view-imei",
        component: _view_imei_view_imei_component__WEBPACK_IMPORTED_MODULE_10__["ViewImeiComponent"],
    },
    {
        path: "generate-invoice",
        component: _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_13__["GenerateInvoiceComponent"],
    },
    {
        path: "edit-generate-invoice",
        component: _edit_generate_invoice_edit_generate_invoice_component__WEBPACK_IMPORTED_MODULE_14__["EditGenerateInvoiceComponent"],
    },
];
var RenewalInvoiceDetailsPageModule = /** @class */ (function () {
    function RenewalInvoiceDetailsPageModule() {
    }
    RenewalInvoiceDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"],
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__["SharedModModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__["FileUploadModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [
                _renewal_invoice_details_page__WEBPACK_IMPORTED_MODULE_6__["RenewalInvoiceDetailsPage"],
                _view_imei_view_imei_component__WEBPACK_IMPORTED_MODULE_10__["ViewImeiComponent"],
                _received_details_received_details_component__WEBPACK_IMPORTED_MODULE_11__["ReceivedDetailsComponent"],
                _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_12__["ViewDetailsComponent"],
                _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_13__["GenerateInvoiceComponent"],
                _edit_generate_invoice_edit_generate_invoice_component__WEBPACK_IMPORTED_MODULE_14__["EditGenerateInvoiceComponent"],
            ],
        })
    ], RenewalInvoiceDetailsPageModule);
    return RenewalInvoiceDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/renewal-invoice-details/renewal-invoice-details.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/delar-application/renewal-invoice-details/renewal-invoice-details.page.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fabbutton {\n  --background: whitesmoke;\n  --background-hover: grey;\n}\n\n.icon {\n  color: black;\n}\n\n.icon:hover {\n  color: white;\n}\n\n.head {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.selectedUpperColll {\n  background: #ebebeb;\n  text-align: center;\n  margin-right: 2px;\n  color: black;\n  font-family: sans-serif;\n  cursor: pointer;\n  font-size: 10px;\n  font-weight: bold;\n  text-transform: uppercase;\n  align-self: center;\n  padding-top: 8px;\n  margin-top: 15px;\n}\n\n.click {\n  margin-top: 20px;\n  color: black;\n  background-color: #ffffff;\n  border-bottom: none;\n  border-top: 2px solid #7d67f8;\n  border-left: 2px solid #7d67f8;\n  border-right: 2px solid #7d67f8;\n  border-bottom: 2px solid #7d67f8;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 11px;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.fileinput {\n  margin-top: 21px;\n  margin-left: 10%;\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.label-heads {\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.submitBtn {\n  margin: 0px 40px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n.submitbtn:hover {\n  --background: #6252ee;\n  --border: 1px solid white;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -8px;\n  right: -2px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -15px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.file-input-container input[type=file] {\n  display: none;\n}\n\n.file {\n  margin-left: 8%;\n  border: 1px solid #3d6cec;\n}\n\n.documents {\n  margin: 19px 10px 0px;\n  text-align: center;\n}\n\n.upperCol {\n  text-align: center;\n  border-radius: 8px;\n  margin: 2px;\n  color: black;\n  font-family: sans-serif;\n  font-size: 13px;\n  text-transform: uppercase;\n}\n\n.upperRow {\n  background: #eeeeee;\n  padding: 1px;\n  border-bottom: 2px solid #7d67f8;\n  height: 56px;\n}\n\n.selectedUpperCol {\n  background: #ebebeb;\n  text-align: center;\n  margin-right: 2px;\n  color: black;\n  font-family: sans-serif;\n  cursor: pointer;\n  font-size: 10px;\n  font-weight: bold;\n  text-transform: uppercase;\n  border-right: 1px solid #b5b5b5;\n  align-self: center;\n  padding-top: 8px;\n  margin-top: 15px;\n}\n\n.selected {\n  margin-top: 20px;\n  color: black;\n  background-color: #ffffff;\n  border-bottom: none;\n  border-top: 2px solid #7d67f8;\n  border-left: 2px solid #7d67f8;\n  border-right: 2px solid #7d67f8;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 11px;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom: none;\n}\n\n.white-bg-column {\n  background-color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcmVuZXdhbC1pbnZvaWNlLWRldGFpbHMvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxccmVuZXdhbC1pbnZvaWNlLWRldGFpbHNcXHJlbmV3YWwtaW52b2ljZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcmVuZXdhbC1pbnZvaWNlLWRldGFpbHMvcmVuZXdhbC1pbnZvaWNlLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSx3QkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtBQ0dGOztBREFBO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQ0dGOztBRERBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSUY7O0FEREE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQ0lGOztBRERBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0lGOztBRERBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDSUY7O0FEREE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDSUY7O0FEREE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0lGOztBRERBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDSUY7O0FEREE7RUFDRSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUNJRjs7QUREQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUNJRjs7QUREQTtFQUNFO0lBQ0UsZ0JBQUE7RUNJRjs7RUREQTtJQUNFLFVBQUE7RUNJRjtBQUNGOztBRERBO0VBQ0U7SUFDRSxTQUFBO0VDR0Y7O0VEQUE7SUFDRSxVQUFBO0VDR0Y7QUFDRjs7QURBQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VDRUY7QUFDRjs7QURDQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDQ0Y7QUFDRjs7QURFQTs7RUFFRSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSwyQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FESUU7RUFDRSxhQUFBO0FDREo7O0FES0E7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUNGRjs7QURLQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDRkY7O0FESUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUNERjs7QURNQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FES0E7RUFDRSxrQ0FBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcmVuZXdhbC1pbnZvaWNlLWRldGFpbHMvcmVuZXdhbC1pbnZvaWNlLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhYmJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogZ3JleTtcclxufVxyXG4uaWNvbiB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5pY29uOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uc2VsZWN0ZWRVcHBlckNvbGxsIHtcclxuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5jbGljayB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjN2Q2N2Y4O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzdkNjdmODtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjN2Q2N2Y4O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN2Q2N2Y4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAxMXB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAtNHB4IDdweCAjYzBiNWZmO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBtYXJnaW46IDdweDtcclxufVxyXG5cclxuLnNlbGVjdGFibGUtaW5wdXQge1xyXG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uZmlsZWlucHV0IHtcclxuICBtYXJnaW4tdG9wOiAyMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5sYWJlbC1oZWFkIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcclxufVxyXG5cclxuLmxhYmVsLWhlYWRzIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnN1Ym1pdEJ0biB7XHJcbiAgbWFyZ2luOiAwcHggNDBweCAwcHggMHB4O1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAtLWNvbG9yOiAjN2M2OGY4O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcclxuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcclxufVxyXG5cclxuLnN1Ym1pdGJ0bjpob3ZlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNjI1MmVlO1xyXG4gIC0tYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZm9ybS1maWVsZCB7XHJcbiAgICB6b29tOiA4MCU7XHJcbiAgfVxyXG5cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweCkgYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDhweCAxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBkZi13cmFwcGVyLFxyXG4uZXhjZWwtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2V4Y2VsTmV3LnN2Z1wiKSBuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZmFiLWJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsYXZlbmRlcjtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLThweDtcclxuICByaWdodDogLTJweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5mYWItYnRuOmhvdmVyIHtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICBtYXJnaW4tbGVmdDogLTgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5maWxlLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5maWxlIHtcclxuICBtYXJnaW4tbGVmdDogOCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYxLCAxMDgsIDIzNik7XHJcbn1cclxuXHJcbi5kb2N1bWVudHMge1xyXG4gIG1hcmdpbjogMTlweCAxMHB4IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi51cHBlckNvbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW46IDJweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLnVwcGVyUm93IHtcclxuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xyXG4gIHBhZGRpbmc6IDFweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzdkNjdmODtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbn1cclxuLy8gLnNlbGVjdGVkVXBwZXJDb2wgey8vICAgYmFja2dyb3VuZDogI2ZmZmZmZjsvLyAgIHRleHQtYWxpZ246IGNlbnRlcjsvLyAgIGJvcmRlci1yYWRpdXM6IDhweDsvLyAgIG1hcmdpbjogMTBweDsvLyAgIGNvbG9yOiBibGFjazsvLyAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOy8vICAgY3Vyc29yOiBwb2ludGVyOy8vICAgZm9udC1zaXplOiAxM3B4Oy8vICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsvLyAgIGFsaWduLXNlbGY6IGNlbnRlcjsvLyB9XHJcbi8vIC5zZWxlY3RlZFVwcGVyQ29sOmhvdmVyIHsvLyAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7Ly8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTA5NWU3Oy8vIH1cclxuLy8gLnNlbGVjdGVkIHsvLyAgIGNvbG9yOiB3aGl0ZTsvLyAgIGJhY2tncm91bmQtY29sb3I6ICMzYjFkZmY7Ly8gfVxyXG4uc2VsZWN0ZWRVcHBlckNvbCB7XHJcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYjViNWI1O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLy8gLnNlbGVjdGVkVXBwZXJDb2w6aG92ZXIgey8vICAgY29sb3I6IHJnYigwLCAwLCAwKTsvLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7Ly8gICBmb250LXNpemU6IDEycHg7Ly8gICBmb250LXdlaWdodDogYm9sZDsvLyAgIHRyYW5zaXRpb246IDAuM3M7Ly8gICBwYWRkaW5nLXRvcDogOHB4Oy8vICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHg7Ly8gICBtYXJnaW4tdG9wOiAyMHB4Oy8vIH1cclxuLnNlbGVjdGVkIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM3ZDY3Zjg7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjN2Q2N2Y4O1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM3ZDY3Zjg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDExcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IC00cHggN3B4ICNjMGI1ZmY7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbi53aGl0ZS1iZy1jb2x1bW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmZhYmJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBncmV5O1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmljb246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zZWxlY3RlZFVwcGVyQ29sbGwge1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmNsaWNrIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzdkNjdmODtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzdkNjdmODtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTFweDtcbiAgYm94LXNoYWRvdzogMHB4IC00cHggN3B4ICNjMGI1ZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBtYXJnaW46IDdweDtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5maWxlaW5wdXQge1xuICBtYXJnaW4tdG9wOiAyMXB4O1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4ubGFiZWwtaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XG59XG5cbi5sYWJlbC1oZWFkcyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN1Ym1pdEJ0biB7XG4gIG1hcmdpbjogMHB4IDQwcHggMHB4IDBweDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogIzdjNjhmODtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjN2M2OGY4O1xuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcbn1cblxuLnN1Ym1pdGJ0bjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZTtcbiAgLS1ib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiA4cHggMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbi5wZGYtd3JhcHBlcixcbi5leGNlbC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2V4Y2VsTmV3LnN2Z1wiKSBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5mYWItYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiBsYXZlbmRlcjtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLThweDtcbiAgcmlnaHQ6IC0ycHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5mYWItYnRuOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjYjZiNmI2O1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC04MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmZpbGUtaW5wdXQtY29udGFpbmVyIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZmlsZSB7XG4gIG1hcmdpbi1sZWZ0OiA4JTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNkNmNlYztcbn1cblxuLmRvY3VtZW50cyB7XG4gIG1hcmdpbjogMTlweCAxMHB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udXBwZXJDb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnVwcGVyUm93IHtcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcbiAgcGFkZGluZzogMXB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzdkNjdmODtcbiAgaGVpZ2h0OiA1NnB4O1xufVxuXG4uc2VsZWN0ZWRVcHBlckNvbCB7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2I1YjViNTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uc2VsZWN0ZWQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDExcHg7XG4gIGJveC1zaGFkb3c6IDBweCAtNHB4IDdweCAjYzBiNWZmO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLndoaXRlLWJnLWNvbHVtbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/renewal-invoice-details/renewal-invoice-details.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/delar-application/renewal-invoice-details/renewal-invoice-details.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: RenewalInvoiceDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewalInvoiceDetailsPage", function() { return RenewalInvoiceDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/pdf-logo.service */ "./src/app/services/pdf-logo.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _received_details_received_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./received-details/received-details.component */ "./src/app/delar-application/renewal-invoice-details/received-details/received-details.component.ts");
/* harmony import */ var _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-details/view-details.component */ "./src/app/delar-application/renewal-invoice-details/view-details/view-details.component.ts");
/* harmony import */ var _view_imei_view_imei_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view-imei/view-imei.component */ "./src/app/delar-application/renewal-invoice-details/view-imei/view-imei.component.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./generate-invoice/generate-invoice.component */ "./src/app/delar-application/renewal-invoice-details/generate-invoice/generate-invoice.component.ts");
/* harmony import */ var _edit_generate_invoice_edit_generate_invoice_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-generate-invoice/edit-generate-invoice.component */ "./src/app/delar-application/renewal-invoice-details/edit-generate-invoice/edit-generate-invoice.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

















var RenewalInvoiceDetailsPage = /** @class */ (function () {
    function RenewalInvoiceDetailsPage(platform, formBuilder, modalController, alertController, commonService, ajaxService, pdfLogoService, ete, router) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.pdfLogoService = pdfLogoService;
        this.ete = ete;
        this.router = router;
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
        this.data = "";
        this.type = "old";
        this.invoices = [];
        this.color = "";
    }
    RenewalInvoiceDetailsPage.prototype.scrollToTop = function () {
        this.content.scrollToTop(500);
    };
    RenewalInvoiceDetailsPage.prototype.scrollToBottom = function () {
        this.content.scrollToBottom(500);
    };
    RenewalInvoiceDetailsPage.prototype.logScrolling = function (ev) {
        if (ev.detail.scrollTop > 2) {
            this.arrow = true;
        }
        if (ev.detail.scrollTop < 2) {
            this.arrow = false;
        }
    };
    RenewalInvoiceDetailsPage.prototype.clear = function () {
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
    };
    RenewalInvoiceDetailsPage.prototype.fileclear = function () {
        this.SalesinvoiceForm.patchValue({
            fileupload: "",
        });
    };
    RenewalInvoiceDetailsPage.prototype.createForm = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        var todaytime = now.getHours() + ":" + now.getMinutes();
        this.SalesinvoiceForm = this.formBuilder.group({
            dealerid: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            invoiceno: [0],
            invoicedate: [today],
            invoiceamount: [0],
            noofunits: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fileupload: [""],
            invoicedocument: [""],
        });
    };
    RenewalInvoiceDetailsPage.prototype.getDealer = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getDealer";
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            _this.Dealer = res;
        });
    };
    RenewalInvoiceDetailsPage.prototype.pendinginvoice = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/esim/getesimInvoiceCount?pagename=Renewal&status=Pending";
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            _this.invoices = res;
            if (res.pending != 0) {
                _this.color = "green";
            }
            else {
                _this.color = "red";
            }
        });
    };
    RenewalInvoiceDetailsPage.prototype.invoicepopup = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.router.navigate(["/pending-invoice"], {
                    queryParams: { pageName: "Renewal" },
                });
                return [2 /*return*/];
            });
        });
    };
    RenewalInvoiceDetailsPage.prototype.onFileChange = function (ev) {
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
                    newData["renewalno"] = jsonData_1["Sheet1"][i]["renewalno"].toString();
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
    RenewalInvoiceDetailsPage.prototype.add = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var excellKeys, i, data, url;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.SalesinvoiceForm.value.fileupload == "") {
                    this.commonService.showConfirm("IMEI Excel not Upload");
                }
                else {
                    if (this.dataString.length == 0) {
                        this.commonService.showConfirm("Check your excell file,don't enter blank spaces");
                        this.fileclear();
                    }
                    else {
                        excellKeys = Object.keys(this.dataString[0]);
                        for (i = 0; i < excellKeys.length; i++) {
                            if (excellKeys[i] == "imei" || excellKeys[i] == "renewalno") {
                                console.log("present");
                                this.excellKeyValid = true;
                            }
                        }
                        if (this.name == true && this.excellKeyValid == true) {
                            this.button = true;
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
                            this.headerdata = data;
                            this.commonService.presentLoader();
                            url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getrenewalzohobookproductdetails";
                            this.ajaxService.ajaxPostWithFile(url, data).subscribe(function (res) {
                                _this.commonService.dismissLoader();
                                if (Array.isArray(res)) {
                                    _this.invoicedata = res;
                                    _this.clear();
                                    _this.button = false;
                                    _this.invoice();
                                }
                                else if (res.message) {
                                    _this.commonService.showConfirm(res.message);
                                    _this.button = false;
                                }
                            });
                        }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    RenewalInvoiceDetailsPage.prototype.invoice = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_14__["GenerateInvoiceComponent"],
                            cssClass: "invoiceform",
                            componentProps: {
                                value: this.invoicedata,
                                header: this.headerdata,
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "Invoice Details Saved Successfully") {
                                _this.show = false;
                                _this.getdatas();
                                _this.commonService.showConfirm("Invoice Details Saved Successfully");
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RenewalInvoiceDetailsPage.prototype.getdatas = function () {
        var _this = this;
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getAllRenewalEsimInvoice";
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            if (res.length == 0) {
                _this.commonService.dismissLoader();
            }
            _this.tableData = res;
            _this.pendinginvoice();
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
                    datafield: "edit",
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
                        _this.editinvoice();
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
    RenewalInvoiceDetailsPage.prototype.receivedpopup = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _received_details_received_details_component__WEBPACK_IMPORTED_MODULE_9__["ReceivedDetailsComponent"],
                            cssClass: "payform",
                            componentProps: {
                                editvalue: this.selectedRow.headerid,
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "Renewal Invoice Detail Saved Successfully") {
                                _this.getdatas();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RenewalInvoiceDetailsPage.prototype.editinvoice = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _edit_generate_invoice_edit_generate_invoice_component__WEBPACK_IMPORTED_MODULE_15__["EditGenerateInvoiceComponent"],
                            cssClass: "invoiceform",
                            componentProps: {
                                value: this.selectedRow,
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "Invoice Details Saved Successfully") {
                                _this.show = false;
                                _this.getdatas();
                                _this.commonService.showConfirm("Invoice Details Saved Successfully");
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RenewalInvoiceDetailsPage.prototype.detailspop = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_10__["ViewDetailsComponent"],
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
    RenewalInvoiceDetailsPage.prototype.imeipop = function (row) {
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
    RenewalInvoiceDetailsPage.prototype.Download = function (row) {
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
    RenewalInvoiceDetailsPage.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = event.args.row.bounddata;
        this.show = true;
    };
    RenewalInvoiceDetailsPage.prototype.newfunc = function () {
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
            title: "Device Renewal Invoice Details",
            data: forExcel,
            headers: Header,
        };
        this.ete.exportExcel(reportData);
    };
    RenewalInvoiceDetailsPage.prototype.ngOnInit = function () {
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
    RenewalInvoiceDetailsPage.prototype.ngAfterViewInit = function () {
        this.myGrid.horizontalscrollbarstep(["70"]);
        this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
    };
    RenewalInvoiceDetailsPage.prototype.ionViewWillEnter = function () {
        this.clear();
        this.getDealer();
        this.getdatas();
        this.pendinginvoice();
    };
    RenewalInvoiceDetailsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_7__["PdfLogoService"] },
        { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_13__["ExportExcelService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RenewalInvoiceDetailsPage.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RenewalInvoiceDetailsPage.prototype, "content", void 0);
    RenewalInvoiceDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-renewal-invoice-details",
            template: __webpack_require__(/*! raw-loader!./renewal-invoice-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/renewal-invoice-details/renewal-invoice-details.page.html"),
            styles: [__webpack_require__(/*! ./renewal-invoice-details.page.scss */ "./src/app/delar-application/renewal-invoice-details/renewal-invoice-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_7__["PdfLogoService"],
            src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_13__["ExportExcelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]])
    ], RenewalInvoiceDetailsPage);
    return RenewalInvoiceDetailsPage;
}());



/***/ }),

/***/ "./src/app/delar-application/renewal-invoice-details/view-details/view-details.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/delar-application/renewal-invoice-details/view-details/view-details.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL3JlbmV3YWwtaW52b2ljZS1kZXRhaWxzL3ZpZXctZGV0YWlscy92aWV3LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/delar-application/renewal-invoice-details/view-details/view-details.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/delar-application/renewal-invoice-details/view-details/view-details.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ViewDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDetailsComponent", function() { return ViewDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









var ViewDetailsComponent = /** @class */ (function () {
    function ViewDetailsComponent(ajaxService, router, formBuilder, commonService, modalController) {
        this.ajaxService = ajaxService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.modalController = modalController;
        this.show = false;
        this.page = [];
    }
    ViewDetailsComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    ViewDetailsComponent.prototype.getdatas = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getRenewalInvoiceDetails?invoiceno=" + this.value;
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
    ViewDetailsComponent.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = event.args.row;
        this.show = true;
    };
    ViewDetailsComponent.prototype.ngOnInit = function () {
        this.getdatas();
    };
    ViewDetailsComponent.ctorParameters = function () { return [
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
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
            template: __webpack_require__(/*! raw-loader!./view-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/renewal-invoice-details/view-details/view-details.component.html"),
            styles: [__webpack_require__(/*! ./view-details.component.scss */ "./src/app/delar-application/renewal-invoice-details/view-details/view-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], ViewDetailsComponent);
    return ViewDetailsComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/renewal-invoice-details/view-imei/view-imei.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/delar-application/renewal-invoice-details/view-imei/view-imei.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL3JlbmV3YWwtaW52b2ljZS1kZXRhaWxzL3ZpZXctaW1laS92aWV3LWltZWkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/delar-application/renewal-invoice-details/view-imei/view-imei.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/delar-application/renewal-invoice-details/view-imei/view-imei.component.ts ***!
  \********************************************************************************************/
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
        this.page = [];
        this.tableData = JSON.parse(this.value);
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
                width: 175,
            },
            {
                text: "Renewal No",
                datafield: "renewalno",
                cellsrenderer: this.renderer,
                cellsalign: "left",
                align: "left",
                width: 175,
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
                    "/esim/removeRenewalInvoiceIMEI?invoiceno=" +
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
            template: __webpack_require__(/*! raw-loader!./view-imei.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/renewal-invoice-details/view-imei/view-imei.component.html"),
            styles: [__webpack_require__(/*! ./view-imei.component.scss */ "./src/app/delar-application/renewal-invoice-details/view-imei/view-imei.component.scss")]
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
//# sourceMappingURL=renewal-invoice-details-renewal-invoice-details-module-es5.js.map