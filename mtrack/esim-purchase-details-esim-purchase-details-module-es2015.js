(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esim-purchase-details-esim-purchase-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-purchase-details/details/details.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-purchase-details/details/details.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>View Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"wrapper-container\">\n    <ion-col size=\"12\">\n      <!-- <form [formGroup]=\"detailForm\">\n        <ion-row class=\"form-field\">\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n            <ion-label class=\"label-head\">Service Provider:</ion-label>\n            <ion-input\n              type=\"text\"\n              placeholder=\"Service Provider\"\n              formControlName=\"serviceprovider\"\n              class=\"input\"\n            ></ion-input>\n          </ion-col>\n\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n            <ion-label class=\"label-head\">Invoice Number:</ion-label>\n            <ion-input\n              type=\"text\"\n              placeholder=\"Invoice No\"\n              formControlName=\"invoiceno\"\n              class=\"input\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n            <ion-label class=\"label-head\">Invoice Amount:</ion-label>\n            <ion-input\n              type=\"number\"\n              placeholder=\"Invoice Amount\"\n              formControlName=\"invoiceamount\"\n              class=\"input\"\n            ></ion-input>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-col>\n  </ion-row> -->\n\n      <jqxGrid\n        #myGrid\n        [theme]=\"'material'\"\n        [width]=\"'99%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [pagesizeoptions]=\"page\"\n        [enablebrowserselection]=\"true\"\n        [columns]=\"columns\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-purchase-details/esim-purchase-details.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-purchase-details/esim-purchase-details.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons\r\n      *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\"\r\n      slot=\"start\"\r\n    >\r\n      <ion-icon\r\n        routerLink=\"/tabs-login/esim-dashboard\"\r\n        name=\"arrow-back\"\r\n        style=\"padding: 10px; cursor: pointer\"\r\n        slot=\"start\"\r\n      ></ion-icon>\r\n    </ion-buttons>\r\n    <ion-row class=\"toolbar\">\r\n      <ion-title *ngIf=\"myPlatform != 'desktop'\"\r\n        >Purchase Invoice Details</ion-title\r\n      >\r\n      <ion-title *ngIf=\"myPlatform == 'desktop'\"\r\n        >Device Invoice Details</ion-title\r\n      >\r\n\r\n      <ion-col\r\n        *ngIf=\"myPlatform == 'desktop'\"\r\n        size=\"4\"\r\n        style=\"text-align: right\"\r\n      >\r\n        <ion-button class=\"submitBtn\" size=\"small\" (click)=\"newfunc()\"\r\n          >Export</ion-button\r\n        >\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\r\n  <ion-grid>\r\n    <ion-row *ngIf=\"myPlatform == 'desktop'\" class=\"upperRow\">\r\n      <ion-col\r\n        [ngClass]=\"{selectedUpperCol:'true'}\"\r\n        routerLink=\"/tabs-login/esim-purchase-details\"\r\n        routerLinkActive=\"selected\"\r\n        size=\"1.9\"\r\n      >\r\n        <ion-label>Esim Purchase Invoice</ion-label>\r\n      </ion-col>\r\n      <ion-col\r\n        [ngClass]=\"{selectedUpperCol:'true'}\"\r\n        routerLink=\"/tabs-login/esim-sales-invoice-details\"\r\n        routerLinkActive=\"selected\"\r\n        size=\"1.9\"\r\n      >\r\n        <ion-label>Device Sales Invoice</ion-label>\r\n      </ion-col>\r\n      <ion-col\r\n        [ngClass]=\"{selectedUpperCol:'true'}\"\r\n        routerLink=\"/tabs-login/device-renewal-invoice-details\"\r\n        routerLinkActive=\"selected\"\r\n        size=\"1.9\"\r\n      >\r\n        <ion-label>Device Renewal Invoice</ion-label>\r\n      </ion-col>\r\n      <ion-col\r\n        [ngClass]=\"{selectedUpperCol:'true'}\"\r\n        routerLink=\"/tabs-login/device-topup-invoice-details\"\r\n        routerLinkActive=\"selected\"\r\n        size=\"1.9\"\r\n      >\r\n        <ion-label>Device Topup Invoice</ion-label>\r\n      </ion-col>\r\n      <ion-col\r\n        [ngClass]=\"{selectedUpperCol:'true'}\"\r\n        routerLink=\"/tabs-login/device-extend-oneyear-invoice-details\"\r\n        routerLinkActive=\"selected\"\r\n        size=\"1.9\"\r\n      >\r\n        <ion-label>Device Extend 1 Yr Invoice</ion-label>\r\n      </ion-col>\r\n      <ion-col\r\n        [ngClass]=\"{selectedUpperCol:'true'}\"\r\n        routerLink=\"/tabs-login/device-certificate-invoice-details\"\r\n        routerLinkActive=\"selected\"\r\n        size=\"1.9\"\r\n      >\r\n        <ion-label>Device Certificate Invoice</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"wrapper-container\">\r\n      <ion-col size=\"12\">\r\n        <form [formGroup]=\"PurchaseForm\">\r\n          <ion-row class=\"form-field\">\r\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\r\n              <ion-label class=\"label-head\">Service Provider:</ion-label>\r\n              <ionic-selectable\r\n                class=\"input selectable-input\"\r\n                formControlName=\"serviceprovider\"\r\n                placeholder=\"Select the Provider\"\r\n                [items]=\"service\"\r\n                [canSearch]=\"true\"\r\n                [hasVirtualScroll]=\"true\"\r\n                [disabledItems]=\"data\"\r\n              >\r\n              </ionic-selectable>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\r\n              <ion-label class=\"label-head\">Invoice Number:</ion-label>\r\n              <ion-input\r\n                type=\"text\"\r\n                placeholder=\"Enter the Invoice No\"\r\n                formControlName=\"invoicenumber\"\r\n                class=\"input\"\r\n              ></ion-input>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\r\n              <ion-label class=\"label-head\">Invoice Date:</ion-label>\r\n              <ion-input\r\n                type=\"date\"\r\n                formControlName=\"invoicedate\"\r\n                [max]=\"maxDate\"\r\n                class=\"input\"\r\n              ></ion-input>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\r\n              <ion-label class=\"label-head\">Invoice Amount:</ion-label>\r\n              <ion-input\r\n                type=\"number\"\r\n                placeholder=\"Enter the Invoice Amount\"\r\n                formControlName=\"invoiceamount\"\r\n                class=\"input\"\r\n              ></ion-input>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\r\n              <ion-label class=\"label-head\">Quantity:</ion-label>\r\n              <ion-input\r\n                type=\"number\"\r\n                placeholder=\"Enter the Qty\"\r\n                formControlName=\"totalquantity\"\r\n                class=\"input\"\r\n              ></ion-input>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\r\n              <ion-label class=\"label-head\">Invoice Document:</ion-label>\r\n              <input\r\n                type=\"file\"\r\n                class=\"documents\"\r\n                formControlName=\"invoicedocument\"\r\n                ng2FileSelect\r\n                [uploader]=\"uploader\"\r\n              />\r\n            </ion-col>\r\n\r\n            <ion-col style=\"margin: 27px 0px 0px; text-align: end\">\r\n              <ion-button\r\n                *ngIf=\"!hideSerialNo\"\r\n                class=\"submitbtn\"\r\n                (click)=\"add()\"\r\n                [disabled]=\"!PurchaseForm.valid || button\"\r\n                >Add</ion-button\r\n              >\r\n              <ion-button\r\n                *ngIf=\"hideSerialNo\"\r\n                class=\"submitbtn\"\r\n                (click)=\"edit()\"\r\n                [disabled]=\"!PurchaseForm.valid || button\"\r\n                >Edit</ion-button\r\n              >\r\n              <ion-button class=\"submitbtn\" (click)=\"clear()\">Clear</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <jqxGrid\r\n      #myGrid\r\n      [theme]=\"'material'\"\r\n      (onRowclick)=\"myGridOnRowSelect($event)\"\r\n      [width]=\"'99%'\"\r\n      [autoheight]=\"true\"\r\n      [enablebrowserselection]=\"true\"\r\n      [source]=\"dataAdapter\"\r\n      [sortable]=\"true\"\r\n      [filterable]=\"true\"\r\n      [columns]=\"columns\"\r\n      [columnsresize]=\"true\"\r\n      [enabletooltips]=\"true\"\r\n      [pageable]=\"true\"\r\n      [showfilterrow]=\"true\"\r\n      style=\"\r\n        font-size: 16px;\r\n        text-align: center !important;\r\n        margin: auto;\r\n        cursor: pointer;\r\n      \"\r\n    >\r\n    </jqxGrid>\r\n  </ion-grid>\r\n\r\n  <ion-fab\r\n    *ngIf=\"arrow\"\r\n    style=\"margin-right: 1%; margin-bottom: 9%\"\r\n    slot=\"fixed\"\r\n    vertical=\"bottom\"\r\n    horizontal=\"end\"\r\n  >\r\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToTop()\">\r\n      <ion-icon class=\"icon\" name=\"arrow-up\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-fab\r\n    *ngIf=\"arrow\"\r\n    style=\"margin-right: 1%; margin-bottom: 5%\"\r\n    slot=\"fixed\"\r\n    vertical=\"bottom\"\r\n    horizontal=\"end\"\r\n  >\r\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToBottom()\">\r\n      <ion-icon class=\"icon\" name=\"arrow-down\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-purchase-details/pay-details/pay-details.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-purchase-details/pay-details/pay-details.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Payment Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"myPlatform != 'desktop'\" class=\"content-style label-style\">\n  <ion-grid>\n    <ion-row class=\"form-field\">\n      <ion-col\n        size=\"12\"\n        size-sm=\"12\"\n        size-md=\"10\"\n        offset-md=\"1\"\n        size-lg=\"12\"\n        offset-lg=\"0\"\n      >\n        <form [formGroup]=\"productionForm\">\n          <div class=\"wrapper-form\">\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Service Provider :</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"serviceprovider\"\n                  value=\"Disabled\"\n                  disabled\n                  placeholder=\"Enter the Service Provider\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Invoice No :</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"invoiceno\"\n                  value=\"Disabled\"\n                  disabled\n                  placeholder=\"Enter the Invoice No\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Invoice Amount :</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"invoiceamount\"\n                  value=\"Disabled\"\n                  disabled\n                  placeholder=\"Invoice Amount\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Imei Number :</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"imeiNo\"\n                  placeholder=\"Enter the Imei Number\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\"> Balance Amount :</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"balanceamount\"\n                  value=\"Disabled\"\n                  disabled\n                  placeholder=\"Balance Amount\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Total Paid Amount :</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"totalamountpaid\"\n                  value=\"Disabled\"\n                  disabled\n                  placeholder=\"Total Amount\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Paid Date :</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"date\"\n                  [max]=\"maxDate\"\n                  formControlName=\"paiddate\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Paid Amount :</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"paidamount\"\n                  placeholder=\"Enter the Paid Amount\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">UTR No :</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"utrno\"\n                  placeholder=\"Enter the Utr no\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n          </div>\n        </form>\n\n        <ion-row class=\"content-style\">\n          <ion-col style=\"text-align: center !important; padding: 20px\">\n            <ion-button\n              class=\"button\"\n              type=\"submit\"\n              [disabled]=\"!productionForm.valid\"\n              (click)=\"submitBtn()\"\n              >Submit</ion-button\n            >\n            <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\"\n              >Cancel</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf=\"myPlatform == 'desktop'\" class=\"content-style label-style\">\n  <ion-grid>\n    <ion-row class=\"form-field\">\n      <ion-col>\n        <form [formGroup]=\"productionForm\">\n          <ion-row class=\"total-data\">\n            <ion-col>\n              <ion-row class=\"content-style\">\n                <ion-col size=\"4\" class=\"col-content\">\n                  Service Provider :\n                </ion-col>\n                <ion-col size=\"7\">\n                  <ion-input\n                    class=\"label-style\"\n                    type=\"text\"\n                    formControlName=\"serviceprovider\"\n                    value=\"Disabled\"\n                    disabled\n                    placeholder=\"Enter the Service Provider\"\n                  ></ion-input>\n                </ion-col>\n              </ion-row>\n\n              <ion-row class=\"content-style\">\n                <ion-col size=\"4\" class=\"col-content\">Invoice No :</ion-col>\n                <ion-col size=\"7\">\n                  <ion-input\n                    class=\"label-style\"\n                    type=\"text\"\n                    formControlName=\"invoiceno\"\n                    value=\"Disabled\"\n                    disabled\n                    placeholder=\"Enter the Invoice No\"\n                  ></ion-input>\n                </ion-col>\n              </ion-row>\n\n              <ion-row class=\"content-style\">\n                <ion-col size=\"4\" class=\"col-content\">\n                  Invoice Amount :\n                </ion-col>\n                <ion-col size=\"7\">\n                  <ion-input\n                    class=\"label-style\"\n                    type=\"number\"\n                    formControlName=\"invoiceamount\"\n                    value=\"Disabled\"\n                    disabled\n                    placeholder=\"Invoice Amount\"\n                  ></ion-input>\n                </ion-col>\n              </ion-row>\n\n              <ion-row class=\"content-style\">\n                <ion-col size=\"4\" class=\"col-content\">\n                  Balance Amount :\n                </ion-col>\n                <ion-col size=\"7\">\n                  <ion-input\n                    class=\"label-style\"\n                    type=\"number\"\n                    formControlName=\"balanceamount\"\n                    value=\"Disabled\"\n                    disabled\n                    placeholder=\"Balance Amount\"\n                  ></ion-input>\n                </ion-col>\n              </ion-row>\n\n              <ion-row class=\"content-style\">\n                <ion-col size=\"4\" class=\"col-content\">\n                  Total Paid Amount :\n                </ion-col>\n                <ion-col size=\"7\">\n                  <ion-input\n                    class=\"label-style\"\n                    type=\"number\"\n                    formControlName=\"totalamountpaid\"\n                    value=\"Disabled\"\n                    disabled\n                    placeholder=\"Total Amount\"\n                  ></ion-input>\n                </ion-col>\n              </ion-row>\n\n              <ion-row class=\"content-style\">\n                <ion-col size=\"4\" class=\"col-content\">Paid Date :</ion-col>\n                <ion-col size=\"7\">\n                  <ion-input\n                    class=\"label-style\"\n                    type=\"date\"\n                    [max]=\"maxDate\"\n                    formControlName=\"paiddate\"\n                  ></ion-input>\n                </ion-col>\n              </ion-row>\n\n              <ion-row class=\"content-style\">\n                <ion-col size=\"4\" class=\"col-content\">Paid Amount :</ion-col>\n                <ion-col size=\"7\">\n                  <ion-input\n                    class=\"label-style\"\n                    type=\"number\"\n                    formControlName=\"paidamount\"\n                    placeholder=\"Enter the Paid Amount\"\n                  ></ion-input>\n                </ion-col>\n              </ion-row>\n\n              <ion-row class=\"content-style\">\n                <ion-col size=\"4\" class=\"col-content\">UTR No :</ion-col>\n                <ion-col size=\"7\">\n                  <ion-input\n                    class=\"label-style\"\n                    type=\"text\"\n                    formControlName=\"utrno\"\n                    placeholder=\"Enter the Utr no\"\n                  ></ion-input>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </form>\n\n        <ion-row class=\"content-style\">\n          <ion-col style=\"text-align: center !important; padding: 20px\">\n            <ion-button\n              class=\"button\"\n              type=\"submit\"\n              [disabled]=\"!productionForm.valid || button\"\n              (click)=\"submitBtn()\"\n              >Submit</ion-button\n            >\n            <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\"\n              >Cancel</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/esim-purchase-details/details/details.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/delar-application/esim-purchase-details/details/details.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.fileinput {\n  margin-top: 21px;\n  margin-left: 10%;\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.label-heads {\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -3px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 10px 11px;\n    padding-right: 20px;\n  }\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -4px;\n  right: -3px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -15px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1wdXJjaGFzZS1kZXRhaWxzL2RldGFpbHMvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcZXNpbS1wdXJjaGFzZS1kZXRhaWxzXFxkZXRhaWxzXFxkZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLXB1cmNoYXNlLWRldGFpbHMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FER0E7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURJQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLHFCQUFBO0FDREo7O0FESUE7RUFDSTtJQUNJLGdCQUFBO0VDRE47O0VESUU7SUFDSSxVQUFBO0VDRE47QUFDRjs7QURJQTtFQUNJO0lBQ0ksU0FBQTtFQ0ZOOztFREtFO0lBQ0ksVUFBQTtFQ0ZOO0FBQ0Y7O0FES0E7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FDSEo7O0FETUE7RUFDSTtJQUNJLFlBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQ0hOO0FBQ0Y7O0FETUE7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsbUJBQUE7RUNKTjtBQUNGOztBRFFBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ05KOztBRFNBO0VBQ0ksMkJBQUE7QUNOSjs7QURVQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUNQSjs7QURVQTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDUEo7O0FEVUE7RUFDSSxtQkFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1wdXJjaGFzZS1kZXRhaWxzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG5cclxufVxyXG5cclxuLnNlbGVjdGFibGUtaW5wdXQge1xyXG4gICAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmZpbGVpbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuXHJcbn1cclxuXHJcbi5sYWJlbC1oZWFkIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcclxufVxyXG5cclxuLmxhYmVsLWhlYWRzIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5zdWJtaXRidG4ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNjI1MmVlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpIHtcclxuICAgIC5pbnB1dCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAjc3VibWl0YnRuIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAgIC5mb3JtLWZpZWxkIHtcclxuICAgICAgICB6b29tOiA4MCU7XHJcbiAgICB9XHJcblxyXG4gICAgI3N1Ym1pdGJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luOiAtM3B4IDVweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjMyMHB4KWFuZChtYXgtd2lkdGg6MTAyM3B4KSB7XHJcbiAgICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDhweCAwIDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MTAyNHB4KSB7XHJcbiAgICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAxMXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uZmFiLWJ0biB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxhdmVuZGVyO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNHB4O1xyXG4gICAgcmlnaHQ6IC0zcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxufVxyXG5cclxuLmZhYi1idG46aG92ZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjYjZiNmI2O1xyXG59XHJcblxyXG5cclxuLnRvb2x0aXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtODBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59IiwiLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmZpbGVpbnB1dCB7XG4gIG1hcmdpbi10b3A6IDIxcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5sYWJlbC1oZWFkIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcbn1cblxuLmxhYmVsLWhlYWRzIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3VibWl0YnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNjI1MmVlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtM3B4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDEwcHggMTFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4uZmFiLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogbGF2ZW5kZXI7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIHJpZ2h0OiAtM3B4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uZmFiLWJ0bjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2I2YjZiNjtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/esim-purchase-details/details/details.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/delar-application/esim-purchase-details/details/details.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









let DetailsComponent = class DetailsComponent {
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
    createForm() {
        this.detailForm = this.formBuilder.group({
            serviceprovider: [""],
            invoiceno: [""],
            invoiceamount: [""],
        });
    }
    getdatas() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/esim/getInvoiceDetails?invoiceno=" +
            this.detailForm.value.invoiceno;
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
                    text: "Paid Date",
                    datafield: "paiddate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 187,
                },
                {
                    text: "Paid Amount",
                    datafield: "paidamount",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 189,
                },
                {
                    text: "UTR No",
                    datafield: "utrno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 187,
                },
                {
                    text: "Created By",
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
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getSingleEsimInvoice?headerid=" + this.value;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            console.log(res);
            {
                this.detail = res;
                this.detailForm.patchValue({
                    serviceprovider: this.detail.serviceprovider,
                    invoiceno: this.detail.invoiceno,
                    invoiceamount: this.detail.invoiceamount,
                });
                this.getdatas();
            }
        });
        this.createForm();
    }
};
DetailsComponent.ctorParameters = () => [
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DetailsComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("selectComponent", { static: false }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridComponent"])
], DetailsComponent.prototype, "myGrid", void 0);
DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-details",
        template: __webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-purchase-details/details/details.component.html"),
        styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/delar-application/esim-purchase-details/details/details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], DetailsComponent);



/***/ }),

/***/ "./src/app/delar-application/esim-purchase-details/esim-purchase-details.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/esim-purchase-details/esim-purchase-details.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: EsimPurchaseDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimPurchaseDetailsPageModule", function() { return EsimPurchaseDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _esim_purchase_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esim-purchase-details.page */ "./src/app/delar-application/esim-purchase-details/esim-purchase-details.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var _pay_details_pay_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pay-details/pay-details.component */ "./src/app/delar-application/esim-purchase-details/pay-details/pay-details.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./details/details.component */ "./src/app/delar-application/esim-purchase-details/details/details.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");












const routes = [
    {
        path: "",
        component: _esim_purchase_details_page__WEBPACK_IMPORTED_MODULE_6__["EsimPurchaseDetailsPage"],
    },
    {
        path: "pay-details",
        component: _pay_details_pay_details_component__WEBPACK_IMPORTED_MODULE_9__["PayDetailsComponent"],
    },
    {
        path: "details",
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"],
    },
];
let EsimPurchaseDetailsPageModule = class EsimPurchaseDetailsPageModule {
};
EsimPurchaseDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileUploadModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [
            _esim_purchase_details_page__WEBPACK_IMPORTED_MODULE_6__["EsimPurchaseDetailsPage"],
            _details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"],
            _pay_details_pay_details_component__WEBPACK_IMPORTED_MODULE_9__["PayDetailsComponent"],
        ],
    })
], EsimPurchaseDetailsPageModule);



/***/ }),

/***/ "./src/app/delar-application/esim-purchase-details/esim-purchase-details.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/esim-purchase-details/esim-purchase-details.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fabbutton {\n  --background: whitesmoke;\n  --background-hover: grey;\n}\n\n.icon {\n  color: black;\n}\n\n.icon:hover {\n  color: white;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.dealer-data {\n  font-size: 14px;\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -11px;\n  right: -2px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -15px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.owl {\n  background-color: yellow;\n  --color: #14241d;\n  padding: 10px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.oml {\n  background-color: blue;\n  --color: white;\n  padding: 10px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.exp {\n  background-color: red;\n  --color: white;\n  padding: 10px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.days {\n  background-color: orange;\n  --color: #14241d;\n  padding: 10px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.documents {\n  padding-top: 10px;\n}\n\n.upperCol {\n  text-align: center;\n  border-radius: 8px;\n  margin: 2px;\n  color: black;\n  font-family: sans-serif;\n  font-size: 13px;\n  text-transform: uppercase;\n}\n\n.upperRow {\n  background: #eeeeee;\n  padding: 1px;\n  border-bottom: 2px solid #7d67f8;\n  height: 56px;\n}\n\n.selectedUpperCol {\n  background: #ebebeb;\n  text-align: center;\n  margin-right: 2px;\n  color: black;\n  font-family: sans-serif;\n  cursor: pointer;\n  font-size: 10px;\n  font-weight: bold;\n  text-transform: uppercase;\n  border-right: 1px solid #b5b5b5;\n  align-self: center;\n  padding-top: 8px;\n  margin-top: 15px;\n}\n\n.selected {\n  margin-top: 20px;\n  color: black;\n  background-color: #ffffff;\n  border-bottom: none;\n  border-top: 2px solid #7d67f8;\n  border-left: 2px solid #7d67f8;\n  border-right: 2px solid #7d67f8;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 11px;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1wdXJjaGFzZS1kZXRhaWxzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGVzaW0tcHVyY2hhc2UtZGV0YWlsc1xcZXNpbS1wdXJjaGFzZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1wdXJjaGFzZS1kZXRhaWxzL2VzaW0tcHVyY2hhc2UtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtFQUNBLHdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0FDR0Y7O0FEQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDR0Y7O0FEREE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNJRjs7QURGQTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ0tGOztBREhBO0VBQ0UscUJBQUE7QUNNRjs7QURKQTtFQUNFO0lBQ0UsZ0JBQUE7RUNPRjs7RURMQTtJQUNFLFVBQUE7RUNRRjtBQUNGOztBRE5BO0VBQ0U7SUFDRSxTQUFBO0VDUUY7O0VETkE7SUFDRSxVQUFBO0VDU0Y7QUFDRjs7QURQQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUNTRjs7QURQQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VDVUY7QUFDRjs7QURSQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDVUY7QUFDRjs7QURSQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDVUY7O0FEUkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDV0Y7O0FEVEE7RUFDRSxlQUFBO0FDWUY7O0FEVkE7O0VBRUUseUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2FGOztBRFhBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2NGOztBRFpBO0VBQ0UsMkJBQUE7QUNlRjs7QURiQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNnQkY7O0FEZEE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ2lCRjs7QURmQTtFQUNFLG1CQUFBO0FDa0JGOztBRGhCQTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ21CRjs7QURqQkE7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ29CRjs7QURsQkE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ3FCRjs7QURuQkE7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNzQkY7O0FEbkJBO0VBQ0UsaUJBQUE7QUNzQkY7O0FEbkJBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNzQkY7O0FEcEJBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDdUJGOztBRGxCQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDcUJGOztBRGxCQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNxQkYiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLXB1cmNoYXNlLWRldGFpbHMvZXNpbS1wdXJjaGFzZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWJidXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6IGdyZXk7XHJcbn1cclxuLmljb24ge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uaWNvbjpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIG1hcmdpbjogN3B4O1xyXG59XHJcbi5zZWxlY3RhYmxlLWlucHV0IHtcclxuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uc3VibWl0QnRuIHtcclxuICBtYXJnaW46IDBweCAxNHB4IDBweCAwcHg7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIC0tY29sb3I6ICM3YzY4Zjg7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjN2M2OGY4O1xyXG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xyXG59XHJcbi5zdWJtaXRidG4ge1xyXG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmlucHV0IHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgfVxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIHpvb206IDgwJTtcclxuICB9XHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxufVxyXG4uZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjMyMHB4KSBhbmQobWF4LXdpZHRoOjEwMjNweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDhweCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDoxMDI0cHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiA4cHggMXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuLmxhYmVsLWhlYWQge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xyXG59XHJcbi5kZWFsZXItbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmRlYWxlci1kYXRhIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnBkZi13cmFwcGVyLFxyXG4uZXhjZWwtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2V4Y2VsTmV3LnN2Z1wiKSBuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi5mYWItYnRuIHtcclxuICAtLWJhY2tncm91bmQ6IGxhdmVuZGVyO1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTFweDtcclxuICByaWdodDogLTJweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuLmZhYi1idG46aG92ZXIge1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2I2YjZiNjtcclxufVxyXG4udG9vbHRpcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICBtYXJnaW4tbGVmdDogLTgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG4ub3dsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgLS1jb2xvcjogIzE0MjQxZDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm9tbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmV4cCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZGF5cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gIC0tY29sb3I6ICMxNDI0MWQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZG9jdW1lbnRzIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLnVwcGVyQ29sIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4udXBwZXJSb3cge1xyXG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XHJcbiAgcGFkZGluZzogMXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN2Q2N2Y4O1xyXG4gIGhlaWdodDogNTZweDtcclxufVxyXG4vLyAuc2VsZWN0ZWRVcHBlckNvbCB7Ly8gICBiYWNrZ3JvdW5kOiAjZmZmZmZmOy8vICAgdGV4dC1hbGlnbjogY2VudGVyOy8vICAgYm9yZGVyLXJhZGl1czogOHB4Oy8vICAgbWFyZ2luOiAxMHB4Oy8vICAgY29sb3I6IGJsYWNrOy8vICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7Ly8gICBjdXJzb3I6IHBvaW50ZXI7Ly8gICBmb250LXNpemU6IDEzcHg7Ly8gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOy8vICAgYWxpZ24tc2VsZjogY2VudGVyOy8vIH1cclxuLy8gLnNlbGVjdGVkVXBwZXJDb2w6aG92ZXIgey8vICAgY29sb3I6IHJnYigwLCAwLCAwKTsvLyAgIGJhY2tncm91bmQtY29sb3I6ICNhMDk1ZTc7Ly8gfVxyXG4vLyAuc2VsZWN0ZWQgey8vICAgY29sb3I6IHdoaXRlOy8vICAgYmFja2dyb3VuZC1jb2xvcjogIzNiMWRmZjsvLyB9XHJcbi5zZWxlY3RlZFVwcGVyQ29sIHtcclxuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiNWI1YjU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4vLyAuc2VsZWN0ZWRVcHBlckNvbDpob3ZlciB7Ly8gICBjb2xvcjogcmdiKDAsIDAsIDApOy8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsvLyAgIGZvbnQtc2l6ZTogMTJweDsvLyAgIGZvbnQtd2VpZ2h0OiBib2xkOy8vICAgdHJhbnNpdGlvbjogMC4zczsvLyAgIHBhZGRpbmctdG9wOiA4cHg7Ly8gICBib3gtc2hhZG93OiAwcHggMnB4IDVweDsvLyAgIG1hcmdpbi10b3A6IDIwcHg7Ly8gfVxyXG4uc2VsZWN0ZWQge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgIzdkNjdmODtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM3ZDY3Zjg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzdkNjdmODtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMTFweDtcclxuICBib3gtc2hhZG93OiAwcHggLTRweCA3cHggI2MwYjVmZjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuIiwiLmZhYmJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBncmV5O1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmljb246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgbWFyZ2luOiA3cHg7XG59XG5cbi5zZWxlY3RhYmxlLWlucHV0IHtcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uc3VibWl0QnRuIHtcbiAgbWFyZ2luOiAwcHggMTRweCAwcHggMHB4O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM3YzY4Zjg7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xufVxuXG4uc3VibWl0YnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNjI1MmVlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDhweCAxcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxufVxuLmxhYmVsLWhlYWQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xufVxuXG4uZGVhbGVyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZGVhbGVyLWRhdGEge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wZGYtd3JhcHBlcixcbi5leGNlbC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2V4Y2VsTmV3LnN2Z1wiKSBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5mYWItYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiBsYXZlbmRlcjtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTExcHg7XG4gIHJpZ2h0OiAtMnB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uZmFiLWJ0bjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2I2YjZiNjtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5vd2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gIC0tY29sb3I6ICMxNDI0MWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5vbWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmV4cCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kYXlzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAtLWNvbG9yOiAjMTQyNDFkO1xuICBwYWRkaW5nOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZG9jdW1lbnRzIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi51cHBlckNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udXBwZXJSb3cge1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICBwYWRkaW5nOiAxcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBoZWlnaHQ6IDU2cHg7XG59XG5cbi5zZWxlY3RlZFVwcGVyQ29sIHtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYjViNWI1O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5zZWxlY3RlZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzdkNjdmODtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzdkNjdmODtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTFweDtcbiAgYm94LXNoYWRvdzogMHB4IC00cHggN3B4ICNjMGI1ZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-purchase-details/esim-purchase-details.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/esim-purchase-details/esim-purchase-details.page.ts ***!
  \***************************************************************************************/
/*! exports provided: EsimPurchaseDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimPurchaseDetailsPage", function() { return EsimPurchaseDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./details/details.component */ "./src/app/delar-application/esim-purchase-details/details/details.component.ts");
/* harmony import */ var _pay_details_pay_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pay-details/pay-details.component */ "./src/app/delar-application/esim-purchase-details/pay-details/pay-details.component.ts");
/* harmony import */ var src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/pdf-logo.service */ "./src/app/services/pdf-logo.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");












let EsimPurchaseDetailsPage = class EsimPurchaseDetailsPage {
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
        this.hideSerialNo = false;
        this.PurchaseForm.patchValue({
            serviceprovider: "",
            invoicenumber: "",
            invoiceamount: "",
            totalquantity: "",
            invoicedate: today,
            invoicedocument: "",
        });
        this.uploader.queue.length = 0;
        console.log(this.PurchaseForm);
    }
    createForm() {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        var todaytime = now.getHours() + ":" + now.getMinutes();
        this.PurchaseForm = this.formBuilder.group({
            serviceprovider: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            invoicenumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            invoicedate: [today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            invoiceamount: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            totalquantity: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            invoicedocument: [""],
        });
    }
    add() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.button = true;
            this.commonService.presentLoader();
            const file = this.uploader;
            var data;
            data = {
                headerid: "",
                serviceprovider: this.PurchaseForm.value.serviceprovider,
                invoiceno: this.PurchaseForm.value.invoicenumber.toString(),
                invoicedate: this.PurchaseForm.value.invoicedate.toString(),
                totalquantity: this.PurchaseForm.value.totalquantity.toString(),
                invoiceamount: this.PurchaseForm.value.invoiceamount.toString(),
                createdby: localStorage.getItem("userName"),
            };
            const testData = new FormData();
            if (file.queue.length != 0) {
                testData.append("invoicedocument", file.queue[0]._file);
                testData.append("data", JSON.stringify(data));
            }
            else {
                const api = yield fetch(this.pdfLogoService.imgdata.no_img);
                const blob = yield api.blob();
                const default_file = new File([blob], "File name", {
                    type: "image/png",
                });
                testData.append("invoicedocument", default_file);
                testData.append("data", JSON.stringify(data));
            }
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/saveEsimPurchaseInvoiceHeader";
            this.ajaxService.ajaxPostWithFile(url, testData).subscribe((res) => {
                if (res) {
                    this.commonService.dismissLoader();
                }
                if (res.message == "Purchase Invoice Saved Successfully") {
                    this.commonService.showConfirm("Purchase Invoice Saved Successfully");
                    this.clear();
                    this.tableData = res;
                    this.button = false;
                    this.myGrid.clearselection();
                    this.getdatas();
                }
                else if (res.message == "Purchase Invoice Detail Not Saved Successfully") {
                    this.commonService.showConfirm("Purchase Invoice Detail Not Saved Successfully");
                    this.button = false;
                }
                else {
                    this.button = false;
                    this.commonService.showConfirm("Invoice No is already persiste");
                }
            });
        });
    }
    edit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.button = true;
            this.commonService.presentLoader();
            const file = this.uploader;
            var data;
            data = {
                headerid: this.selectedRow.headerid.toString(),
                serviceprovider: this.PurchaseForm.value.serviceprovider,
                invoiceno: this.PurchaseForm.value.invoicenumber.toString(),
                invoicedate: this.PurchaseForm.value.invoicedate.toString(),
                totalquantity: this.PurchaseForm.value.totalquantity.toString(),
                invoiceamount: this.PurchaseForm.value.invoiceamount.toString(),
                createdby: localStorage.getItem("userName"),
            };
            const testData = new FormData();
            if (file.queue.length != 0) {
                testData.append("invoicedocument", file.queue[0]._file);
                testData.append("data", JSON.stringify(data));
            }
            else {
                const api = yield fetch(this.pdfLogoService.imgdata.no_img);
                const blob = yield api.blob();
                const default_file = new File([blob], "File name", {
                    type: "image/png",
                });
                testData.append("invoicedocument", default_file);
                testData.append("data", JSON.stringify(data));
            }
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/saveEsimPurchaseInvoiceHeader";
            this.ajaxService.ajaxPostWithFile(url, testData).subscribe((res) => {
                if (res) {
                    this.commonService.dismissLoader();
                }
                if (res.message == "Purchase Invoice Saved Successfully") {
                    this.commonService.showConfirm("Purchase Invoice Saved Successfully");
                    this.clear();
                    this.tableData = res;
                    this.getdatas();
                    this.myGrid.clearselection();
                }
                else if (res.message == "Purchase Invoice Detail Not Saved Successfully") {
                    this.button = false;
                    this.commonService.showConfirm("Purchase Invoice Detail Not Saved Successfully");
                    this.button = false;
                }
                else {
                    this.button = false;
                    this.commonService.showConfirm("Invoice No is already persiste");
                }
            });
            this.hideSerialNo = false;
        });
    }
    setValue() {
        this.button = false;
        this.hideSerialNo = true;
        this.PurchaseForm.patchValue({
            serviceprovider: this.selectedRow.serviceprovider,
            invoicenumber: this.selectedRow.invoiceno,
            invoicedate: this.selectedRow.invoicedate,
            totalquantity: this.selectedRow.totalquantity,
            invoiceamount: this.selectedRow.invoiceamount,
        });
    }
    getdatas() {
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/getAllEsimInvoice";
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
                    text: "Service Provider",
                    datafield: "serviceprovider",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "Invoice No",
                    datafield: "invoiceno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "Invoice Date",
                    datafield: "invoicedate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 98,
                },
                {
                    text: "Invoice Amount",
                    datafield: "invoiceamount",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 112,
                },
                {
                    text: "Total Paid Amount",
                    datafield: "totalamountpaid",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 135,
                },
                {
                    text: "Balance Amount",
                    datafield: "balanceamount",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 125,
                },
                {
                    text: "Total Quantity",
                    datafield: "totalquantity",
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
                    width: 88,
                },
                {
                    text: "",
                    datafield: "paydetails",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                    cellsrenderer: () => {
                        return this.myPlatform == "desktop"
                            ? "Payment Amt"
                            : "<button>Payment Amt</button>";
                    },
                    buttonclick: (row) => {
                        this.paypopup(row);
                    },
                },
                {
                    text: "",
                    datafield: "Edit Detail",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 52,
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
                    width: 64,
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
                    width: 62,
                    cellsrenderer: () => {
                        return "Invoice";
                    },
                    buttonclick: (row) => {
                        this.Download();
                    },
                },
            ];
        });
    }
    paypopup(row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pay_details_pay_details_component__WEBPACK_IMPORTED_MODULE_9__["PayDetailsComponent"],
                cssClass: "payform",
                componentProps: {
                    value: this.selectedRow.headerid,
                },
            });
            modal.onDidDismiss().then((data) => {
                if (data.data.data == "Purchase Invoice Detail Saved Successfully") {
                    this.getdatas();
                }
            });
            return yield modal.present();
        });
    }
    detailspop(row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _details_details_component__WEBPACK_IMPORTED_MODULE_8__["DetailsComponent"],
                cssClass: "viewserialfrom",
                componentProps: {
                    value: this.selectedRow.headerid,
                },
            });
            modal.onDidDismiss().then(() => { });
            return yield modal.present();
        });
    }
    Download() {
        if (this.selectedRow.uploaddocument != null) {
            const link = document.createElement("a");
            link.href = this.selectedRow.uploaddocument;
            link.target = "_blank";
            link.click();
        }
        else {
            this.commonService.showConfirm("Invoice Document Not Uploaded");
        }
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row.bounddata;
        this.show = true;
    }
    getserviceprovider() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/getServiceProvider";
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.service = res;
        });
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
            title: "Esim Purchase Details",
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
        this.getdatas();
        this.getserviceprovider();
    }
};
EsimPurchaseDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_10__["PdfLogoService"] },
    { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_11__["ExportExcelService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EsimPurchaseDetailsPage.prototype, "myGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EsimPurchaseDetailsPage.prototype, "content", void 0);
EsimPurchaseDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-esim-purchase-details",
        template: __webpack_require__(/*! raw-loader!./esim-purchase-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-purchase-details/esim-purchase-details.page.html"),
        styles: [__webpack_require__(/*! ./esim-purchase-details.page.scss */ "./src/app/delar-application/esim-purchase-details/esim-purchase-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_10__["PdfLogoService"],
        src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_11__["ExportExcelService"]])
], EsimPurchaseDetailsPage);



/***/ }),

/***/ "./src/app/delar-application/esim-purchase-details/pay-details/pay-details.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-purchase-details/pay-details/pay-details.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  background-color: #7c68f8;\n}\n\n.label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 18px;\n}\n\n.diable-style {\n  background: white;\n  line-height: 18px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.total-data {\n  margin-top: 3%;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #FFEBCD;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1wdXJjaGFzZS1kZXRhaWxzL3BheS1kZXRhaWxzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGVzaW0tcHVyY2hhc2UtZGV0YWlsc1xccGF5LWRldGFpbHNcXHBheS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLXB1cmNoYXNlLWRldGFpbHMvcGF5LWRldGFpbHMvcGF5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRENBO0VBQ0ksd0JBQUE7VUFBQSx1QkFBQTtBQ0VKOztBRENBO0VBQ0ksY0FBQTtBQ0VKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURDQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0VKOztBRENBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FDRUo7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURDQTtFQUNJO0lBQ0ksU0FBQTtFQ0VOOztFRENFO0lBQ0ksVUFBQTtFQ0VOO0FBQ0Y7O0FEQ0E7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tcHVyY2hhc2UtZGV0YWlscy9wYXktZGV0YWlscy9wYXktZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M2OGY4XHJcbn1cclxuLmxhYmVsLXN0eWxlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5kaWFibGUtc3R5bGUge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG5cclxuLmNvbnRlbnQtc3R5bGUge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxufVxyXG5cclxuLnRvdGFsLWRhdGEge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbn1cclxuXHJcbi5jb2wtY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4jYWRkLWljb24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkZFQkNEO1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIC0tYmFja2dyb3VuZDogIzdjNjhmODtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xyXG4gICAgLmZvcm0tZmllbGQge1xyXG4gICAgICAgIHpvb206IDgwJTtcclxuICAgIH1cclxuXHJcbiAgICAjc3VibWl0YnRuIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW46IC01cHggNXB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG4uc2VsZWN0YWJsZS1pbnB1dCB7XHJcbiAgICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59IiwiLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjNjhmODtcbn1cblxuLmxhYmVsLXN0eWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5kaWFibGUtc3R5bGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5jb250ZW50LXN0eWxlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50b3RhbC1kYXRhIHtcbiAgbWFyZ2luLXRvcDogMyU7XG59XG5cbi5jb2wtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jYWRkLWljb24ge1xuICAtLWJhY2tncm91bmQ6ICNGRkVCQ0Q7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIC0tYmFja2dyb3VuZDogIzdjNjhmODtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5zZWxlY3RhYmxlLWlucHV0IHtcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-purchase-details/pay-details/pay-details.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/delar-application/esim-purchase-details/pay-details/pay-details.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PayDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayDetailsComponent", function() { return PayDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let PayDetailsComponent = class PayDetailsComponent {
    constructor(platform, formBuilder, modalController, ajaxService, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.today = new Date();
        this.button = false;
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    submitBtn() {
        this.button = true;
        var data;
        data = {
            createdby: localStorage.getItem("userName"),
            headerid: this.value.toString(),
            invoiceno: this.paydetail.invoiceno.toString(),
            paiddate: this.productionForm.value.paiddate + " " + "00:00:00",
            paidamount: this.productionForm.value.paidamount.toString(),
            utrno: this.productionForm.value.utrno.toString(),
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/esim/saveEsimPurchaseInvoiceDetails";
        this.ajaxService
            .ajaxPostWithString(url, JSON.stringify(data))
            .subscribe((res) => {
            if (JSON.parse(res).message ==
                "Purchase Invoice Detail Saved Successfully") {
                this.commonService.showConfirm("Purchase Invoice Detail Saved Successfully");
                this.modalController.dismiss({
                    data: "Purchase Invoice Detail Saved Successfully",
                });
                this.button = false;
            }
            else if (res.message == "Purchase Invoice Detail Not Saved Successfully") {
                this.commonService.showConfirm(res.message);
                this.button = false;
            }
            else {
                this.commonService.showConfirm("Your Paid Amount is greater than invoice amount");
                this.button = false;
            }
        });
    }
    createForm() {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        var todaytime = now.getHours() + ":" + now.getMinutes();
        this.productionForm = this.formBuilder.group({
            serviceprovider: [""],
            invoiceno: [""],
            invoiceamount: [""],
            balanceamount: [""],
            totalamountpaid: [""],
            paiddate: [today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            paidamount: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            utrno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    reset() {
        this.productionForm.patchValue({
            serviceprovider: "",
            invoiceno: "",
            invoiceamount: "",
            balanceamount: "",
            totalamountpaid: "",
            paiddate: "",
            paidamount: "",
            utrno: "",
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
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/esim/getSingleEsimInvoice?headerid=" + this.value;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            console.log(res);
            {
                this.paydetail = res;
                this.productionForm.patchValue({
                    serviceprovider: this.paydetail.serviceprovider,
                    invoiceno: this.paydetail.invoiceno,
                    invoiceamount: this.paydetail.invoiceamount,
                    balanceamount: this.paydetail.balanceamount,
                    totalamountpaid: this.paydetail.totalamountpaid,
                });
            }
        });
    }
};
PayDetailsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PayDetailsComponent.prototype, "value", void 0);
PayDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-pay-details",
        template: __webpack_require__(/*! raw-loader!./pay-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-purchase-details/pay-details/pay-details.component.html"),
        styles: [__webpack_require__(/*! ./pay-details.component.scss */ "./src/app/delar-application/esim-purchase-details/pay-details/pay-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], PayDetailsComponent);



/***/ })

}]);
//# sourceMappingURL=esim-purchase-details-esim-purchase-details-module-es2015.js.map