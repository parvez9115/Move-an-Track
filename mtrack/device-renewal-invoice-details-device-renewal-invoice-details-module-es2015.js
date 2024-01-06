(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-renewal-invoice-details-device-renewal-invoice-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-renewal-invoice-details/device-renewal-invoice-details.page.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-renewal-invoice-details/device-renewal-invoice-details.page.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons\n      *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\"\n      slot=\"start\"\n    >\n      <ion-icon\n        routerLink=\"/tabs-login/esim-dashboard\"\n        name=\"arrow-back\"\n        style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-row>\n      <ion-title *ngIf=\"myPlatform != 'desktop'\"\n        >Renewal Invoice Details</ion-title\n      >\n      <ion-title *ngIf=\"myPlatform == 'desktop'\"\n        >Device Invoice Details</ion-title\n      >\n      <ion-col\n        *ngIf=\"myPlatform == 'desktop'\"\n        size=\"8\"\n        style=\"text-align: right\"\n      >\n        <ion-button class=\"submitBtn\" size=\"small\" (click)=\"newfunc()\"\n          >Export</ion-button\n        >\n        <ion-row style=\"margin: 0px; padding: 0; float: right\">\n          <ion-col style=\"margin-top: 0\" class=\"tooltip\">\n            <ion-fab-button\n              size=\"small\"\n              class=\"fab-btn\"\n              href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/DeviceRenewalInvoice.xlsx\"\n              download=\"sample.xlsx\"\n            >\n              <div class=\"excel-wrapper\"></div>\n            </ion-fab-button>\n            <span class=\"tooltiptext\">Excel-Format</span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngIf=\"myPlatform != 'desktop'\" style=\"text-align: right\">\n        <ion-row style=\"margin: 0px; padding: 0; float: right\">\n          <ion-col style=\"margin-top: 0\" class=\"tooltip\">\n            <ion-fab-button\n              size=\"small\"\n              class=\"fab-btn\"\n              href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/DeviceRenewalInvoice.xlsx\"\n              download=\"sample.xlsx\"\n            >\n              <div class=\"excel-wrapper\"></div>\n            </ion-fab-button>\n            <span class=\"tooltiptext\">Excel-Format</span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"myPlatform == 'desktop'\" class=\"upperRow\">\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/esim-purchase-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Esim Purchase Invoice</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/esim-sales-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Sales Invoice</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/device-renewal-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Renewal Invoice</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/device-topup-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Topup Invoice</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/device-extend-oneyear-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Extend 1 Yr Invoice</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true'}\"\n        routerLink=\"/tabs-login/device-certificate-invoice-details\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Device Certificate Invoice</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"head\">\n      <ion-col\n        [ngClass]=\"{'selectedUpperColll': 'true'}\"\n        routerLink=\"/tabs-login/device-renewal-invoice-details\"\n        routerLinkActive=\"click\"\n        size=\"3\"\n      >\n        <ion-label>Old </ion-label>\n      </ion-col>\n\n      <ion-col\n        style=\"margin-left: 10px\"\n        [ngClass]=\"{'selectedUpperColll': 'true'}\"\n        routerLink=\"/tabs-login/renewal-invoice-details\"\n        routerLinkActive=\"click\"\n        size=\"3\"\n      >\n        <ion-label>New</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"wrapper-container\">\n      <ion-col size=\"12\">\n        <form [formGroup]=\"SalesinvoiceForm\">\n          <ion-row class=\"form-field\">\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Dealer:</ion-label>\n              <ionic-selectable\n                class=\"input selectable-input\"\n                formControlName=\"dealerid\"\n                placeholder=\"Select the Dealer\"\n                [items]=\"Dealer\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n              >\n              </ionic-selectable>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Invoice Number:</ion-label>\n              <ion-input\n                type=\"text\"\n                placeholder=\"Enter the Invoice No\"\n                formControlName=\"invoiceno\"\n                class=\"input\"\n              >\n              </ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Invoice Date:</ion-label>\n              <ion-input\n                type=\"date\"\n                formControlName=\"invoicedate\"\n                [max]=\"maxDate\"\n                class=\"input\"\n              ></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Invoice Amount:</ion-label>\n              <ion-input\n                type=\"number\"\n                placeholder=\"Enter the Invoice Amount\"\n                formControlName=\"invoiceamount\"\n                class=\"input\"\n              ></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">No of Units:</ion-label>\n              <ion-input\n                type=\"number\"\n                placeholder=\"Enter the Units\"\n                formControlName=\"noofunits\"\n                class=\"input\"\n              >\n              </ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">File Upload:</ion-label>\n              <input\n                type=\"file\"\n                (change)=\"onFileChange($event)\"\n                formControlName=\"fileupload\"\n                class=\"documents\"\n              />\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Invoice Document:</ion-label>\n              <input\n                type=\"file\"\n                class=\"documents\"\n                formControlName=\"invoicedocument\"\n                ng2FileSelect\n                [uploader]=\"uploader\"\n              />\n            </ion-col>\n\n            <ion-col style=\"margin: 27px 0px 0px; text-align: end\">\n              <ion-button\n                *ngIf=\"!hideSerialNo\"\n                class=\"submitbtn\"\n                (click)=\"add()\"\n                [disabled]=\"!SalesinvoiceForm.valid || button\"\n                >Add</ion-button\n              >\n              <ion-button\n                *ngIf=\"hideSerialNo\"\n                class=\"submitbtn\"\n                (click)=\"edit()\"\n                [disabled]=\"!SalesinvoiceForm.valid || button\"\n                >Edit</ion-button\n              >\n              <ion-button class=\"submitbtn\" (click)=\"clear()\">Clear</ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n\n    <jqxGrid\n      #myGrid\n      [theme]=\"'material'\"\n      (onRowclick)=\"myGridOnRowSelect($event)\"\n      [width]=\"'99%'\"\n      [autoheight]=\"true\"\n      [source]=\"dataAdapter\"\n      [enablebrowserselection]=\"true\"\n      [sortable]=\"true\"\n      [filterable]=\"true\"\n      [columns]=\"columns\"\n      [columnsresize]=\"true\"\n      [enabletooltips]=\"true\"\n      [pageable]=\"true\"\n      [showfilterrow]=\"true\"\n      style=\"\n        font-size: 16px;\n        text-align: center !important;\n        margin: auto;\n        cursor: pointer;\n      \"\n    >\n    </jqxGrid>\n  </ion-grid>\n\n  <ion-fab\n    *ngIf=\"arrow\"\n    style=\"margin-right: 1%; margin-bottom: 9%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToTop()\">\n      <ion-icon class=\"icon\" name=\"arrow-up\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab\n    *ngIf=\"arrow\"\n    style=\"margin-right: 1%; margin-bottom: 5%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToBottom()\">\n      <ion-icon class=\"icon\" name=\"arrow-down\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-renewal-invoice-details/received-details/received-details.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-renewal-invoice-details/received-details/received-details.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon (click)=\"cancelBtn()\" name=\"arrow-back\" style=\"padding: 10px\" slot=\"start\"></ion-icon>\n    </ion-buttons>\n    <ion-title>Received Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"myPlatform != 'desktop'\" class=\"content-style label-style\">\n  <ion-grid>\n    <ion-row class=\"form-field\">\n      <ion-col size=\"12\" size-sm=\"12\" size-md=\"10\" offset-md=\"1\" size-lg=\"12\" offset-lg=\"0\">\n        <form [formGroup]=\"receiveForm\">\n          <div class=\"wrapper-form\">\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Dealer:</ion-label>\n                <ion-input class=\"label-style\" type=\"text\" formControlName=\"dealerid\" value=\"Disabled\" disabled>\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Invoice No:</ion-label>\n                <ion-input class=\"label-style\" type=\"text\" formControlName=\"invoiceno\" value=\"Disabled\" disabled>\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Invoice Amount:</ion-label>\n                <ion-input class=\"label-style\" type=\"number\" formControlName=\"invoiceamount\" value=\"Disabled\" disabled>\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Total Received Amt:</ion-label>\n                <ion-input class=\"label-style\" type=\"number\" formControlName=\"totalamountreceived\" value=\"Disabled\"\n                  disabled></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Balance Amount:</ion-label>\n                <ion-input class=\"label-style\" type=\"number\" formControlName=\"balanceamount\" value=\"Disabled\" disabled>\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Total Supplied Units:</ion-label>\n                <ion-input class=\"label-style\" type=\"number\" formControlName=\"totalsuppliedunits\" value=\"Disabled\"\n                  disabled></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Balance Units:</ion-label>\n                <ion-input class=\"label-style\" type=\"number\" formControlName=\"balanceunits\" value=\"Disabled\" disabled>\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Received Date:</ion-label>\n                <ion-input class=\"label-style\" type=\"date\" [max]=\"maxDate\" formControlName=\"receiveddate\"\n                  placeholder=\"Enter the Select Date\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Received Amount:</ion-label>\n                <ion-input class=\"label-style\" type=\"number\" formControlName=\"receivedamount\"\n                  placeholder=\"Enter the Received Amount\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <!-- <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Supplied Units:</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"suppliedunits\"\n                  placeholder=\"Enter the Supplied Units\"\n                ></ion-input>\n              </ion-col>\n            </ion-row> -->\n          </div>\n        </form>\n\n        <ion-row class=\"content-style\">\n          <ion-col style=\"text-align: center !important; padding: 20px\">\n            <ion-button class=\"button\" type=\"submit\" [disabled]=\"!receiveForm.valid\" (click)=\"submitBtn()\">Submit\n            </ion-button>\n            <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\">Cancel</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf=\"myPlatform == 'desktop'\" class=\"content-style label-style\">\n  <ion-row class=\"form-field\">\n    <ion-col>\n      <form [formGroup]=\"receiveForm\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Dealer:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" type=\"text\" formControlName=\"dealerid\" value=\"Disabled\" disabled>\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Invoice No:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" type=\"text\" formControlName=\"invoiceno\" value=\"Disabled\" disabled>\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Invoice Amount:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" type=\"number\" formControlName=\"invoiceamount\" value=\"Disabled\" disabled>\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Total Received Amt:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" type=\"number\" formControlName=\"totalamountreceived\" value=\"Disabled\"\n                  disabled></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Balance Amount:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" type=\"number\" formControlName=\"balanceamount\" value=\"Disabled\" disabled>\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">No of Units:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" type=\"number\" formControlName=\"noofunits\" value=\"Disabled\" disabled>\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Received Date:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" type=\"date\" [max]=\"maxDate\" formControlName=\"receiveddate\"\n                  placeholder=\"Enter the Select Date\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Received Amount:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" type=\"number\" formControlName=\"receivedamount\"\n                  placeholder=\"Enter the Received Amount\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <!-- <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Supplied Units:</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"suppliedunits\"\n                  placeholder=\"Enter the Supplied Units\"\n                ></ion-input>\n              </ion-col>\n            </ion-row> -->\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 10px\">\n          <ion-button class=\"button\" type=\"submit\" [disabled]=\"!receiveForm.valid\" (click)=\"submitBtn()\">Submit\n          </ion-button>\n          <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\">Cancel</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-renewal-invoice-details/view-details/view-details.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-renewal-invoice-details/view-details/view-details.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon (click)=\"cancelBtn()\" name=\"arrow-back\" style=\"padding: 10px\" slot=\"start\"></ion-icon>\n    </ion-buttons>\n    <ion-title>View Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"wrapper-container\">\n    <ion-col size=\"12\">\n\n      <jqxGrid #myGrid [theme]=\"'material'\" [width]=\"'99%'\" [autoheight]=\"true\" [source]=\"dataAdapter\"\n        [columns]=\"columns\" [pagesizeoptions]=\"page\" [enablebrowserselection]=\"true\" [sortable]=\"true\"\n        [filterable]=\"true\" [columns]=\"columns\" [columnsresize]=\"true\" [enabletooltips]=\"true\" [pageable]=\"true\"\n        [showfilterrow]=\"true\" style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \">\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-renewal-invoice-details/view-imei/view-imei.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-renewal-invoice-details/view-imei/view-imei.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>View IMEI</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row style=\"padding: 10px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        (onRowclick)=\"myGridOnRowSelect($event)\"\n        [enablebrowserselection]=\"true\"\n        [theme]=\"'material'\"\n        [width]=\"'99.5%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [pagesizeoptions]=\"page\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: left;\n          margin: auto;\n          cursor: pointer;\n          padding-left: 5px;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/device-renewal-invoice-details/device-renewal-invoice-details.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/delar-application/device-renewal-invoice-details/device-renewal-invoice-details.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DeviceRenewalInvoiceDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceRenewalInvoiceDetailsPageModule", function() { return DeviceRenewalInvoiceDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _device_renewal_invoice_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-renewal-invoice-details.page */ "./src/app/delar-application/device-renewal-invoice-details/device-renewal-invoice-details.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _received_details_received_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./received-details/received-details.component */ "./src/app/delar-application/device-renewal-invoice-details/received-details/received-details.component.ts");
/* harmony import */ var _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-details/view-details.component */ "./src/app/delar-application/device-renewal-invoice-details/view-details/view-details.component.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _view_imei_view_imei_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-imei/view-imei.component */ "./src/app/delar-application/device-renewal-invoice-details/view-imei/view-imei.component.ts");













const routes = [
    {
        path: "",
        component: _device_renewal_invoice_details_page__WEBPACK_IMPORTED_MODULE_6__["DeviceRenewalInvoiceDetailsPage"],
    },
    {
        path: "view-details",
        component: _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_9__["ViewDetailsComponent"],
    },
    {
        path: "recived-details",
        component: _received_details_received_details_component__WEBPACK_IMPORTED_MODULE_8__["ReceivedDetailsComponent"],
    },
    {
        path: "view-imei",
        component: _view_imei_view_imei_component__WEBPACK_IMPORTED_MODULE_12__["ViewImeiComponent"],
    },
];
let DeviceRenewalInvoiceDetailsPageModule = class DeviceRenewalInvoiceDetailsPageModule {
};
DeviceRenewalInvoiceDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_10__["IonicSelectableModule"],
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileUploadModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [
            _device_renewal_invoice_details_page__WEBPACK_IMPORTED_MODULE_6__["DeviceRenewalInvoiceDetailsPage"],
            _received_details_received_details_component__WEBPACK_IMPORTED_MODULE_8__["ReceivedDetailsComponent"],
            _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_9__["ViewDetailsComponent"],
            _view_imei_view_imei_component__WEBPACK_IMPORTED_MODULE_12__["ViewImeiComponent"],
        ],
    })
], DeviceRenewalInvoiceDetailsPageModule);



/***/ }),

/***/ "./src/app/delar-application/device-renewal-invoice-details/device-renewal-invoice-details.page.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/delar-application/device-renewal-invoice-details/device-renewal-invoice-details.page.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fabbutton {\n  --background: whitesmoke;\n  --background-hover: grey;\n}\n\n.icon {\n  color: black;\n}\n\n.icon:hover {\n  color: white;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.head {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.selectedUpperColll {\n  background: #ebebeb;\n  text-align: center;\n  margin-right: 2px;\n  color: black;\n  font-family: sans-serif;\n  cursor: pointer;\n  font-size: 10px;\n  font-weight: bold;\n  text-transform: uppercase;\n  align-self: center;\n  padding-top: 8px;\n  margin-top: 15px;\n}\n\n.click {\n  margin-top: 20px;\n  color: black;\n  background-color: #ffffff;\n  border-bottom: none;\n  border-top: 2px solid #7d67f8;\n  border-left: 2px solid #7d67f8;\n  border-right: 2px solid #7d67f8;\n  border-bottom: 2px solid #7d67f8;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 11px;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.fileinput {\n  margin-top: 21px;\n  margin-left: 10%;\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.label-heads {\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.submitBtn {\n  margin: 0px 40px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -8px;\n  right: -2px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -15px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.file-input-container input[type=file] {\n  display: none;\n}\n\n.file {\n  margin-left: 8%;\n  border: 1px solid #3d6cec;\n}\n\n.documents {\n  margin: 19px 10px 0px;\n  text-align: center;\n}\n\n.upperCol {\n  text-align: center;\n  border-radius: 8px;\n  margin: 2px;\n  color: black;\n  font-family: sans-serif;\n  font-size: 13px;\n  text-transform: uppercase;\n}\n\n.upperRow {\n  background: #eeeeee;\n  padding: 1px;\n  border-bottom: 2px solid #7d67f8;\n  height: 56px;\n}\n\n.selectedUpperCol {\n  background: #ebebeb;\n  text-align: center;\n  margin-right: 2px;\n  color: black;\n  font-family: sans-serif;\n  cursor: pointer;\n  font-size: 10px;\n  font-weight: bold;\n  text-transform: uppercase;\n  border-right: 1px solid #b5b5b5;\n  align-self: center;\n  padding-top: 8px;\n  margin-top: 15px;\n}\n\n.selected {\n  margin-top: 20px;\n  color: black;\n  background-color: #ffffff;\n  border-bottom: none;\n  border-top: 2px solid #7d67f8;\n  border-left: 2px solid #7d67f8;\n  border-right: 2px solid #7d67f8;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 11px;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLXJlbmV3YWwtaW52b2ljZS1kZXRhaWxzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGRldmljZS1yZW5ld2FsLWludm9pY2UtZGV0YWlsc1xcZGV2aWNlLXJlbmV3YWwtaW52b2ljZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLXJlbmV3YWwtaW52b2ljZS1kZXRhaWxzL2RldmljZS1yZW5ld2FsLWludm9pY2UtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtFQUNBLHdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0FDR0Y7O0FEQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDR0Y7O0FEREE7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FDSUY7O0FERkE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNLRjs7QURGQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDS0Y7O0FESEE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNNRjs7QURIQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNNRjs7QURIQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDTUY7O0FESEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNNRjs7QURIQTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ01GOztBREhBO0VBQ0UscUJBQUE7QUNNRjs7QURIQTtFQUNFO0lBQ0UsZ0JBQUE7RUNNRjs7RURIQTtJQUNFLFVBQUE7RUNNRjtBQUNGOztBREhBO0VBQ0U7SUFDRSxTQUFBO0VDS0Y7O0VERkE7SUFDRSxVQUFBO0VDS0Y7QUFDRjs7QURGQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QUREQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VDSUY7QUFDRjs7QUREQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDR0Y7QUFDRjs7QURBQTs7RUFFRSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQ0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRUY7O0FEQ0E7RUFDRSwyQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNFRjs7QURDQTtFQUNFLG1CQUFBO0FDRUY7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FER0E7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDQUY7O0FERUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUNDRjs7QURJQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9kZXZpY2UtcmVuZXdhbC1pbnZvaWNlLWRldGFpbHMvZGV2aWNlLXJlbmV3YWwtaW52b2ljZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWJidXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogZ3JleTtcbn1cbi5pY29uIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmljb246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgbWFyZ2luOiA3cHg7XG59XG4uaGVhZCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNlbGVjdGVkVXBwZXJDb2xsbCB7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uY2xpY2sge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMXB4O1xuICBib3gtc2hhZG93OiAwcHggLTRweCA3cHggI2MwYjVmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5maWxlaW5wdXQge1xuICBtYXJnaW4tdG9wOiAyMXB4O1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4ubGFiZWwtaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XG59XG5cbi5sYWJlbC1oZWFkcyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN1Ym1pdEJ0biB7XG4gIG1hcmdpbjogMHB4IDQwcHggMHB4IDBweDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogIzdjNjhmODtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjN2M2OGY4O1xuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcbn1cblxuLnN1Ym1pdGJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cblxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweCkgYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MTAyNHB4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiA4cHggMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cblxuLnBkZi13cmFwcGVyLFxuLmV4Y2VsLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZXhjZWxOZXcuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmZhYi1idG4ge1xuICAtLWJhY2tncm91bmQ6IGxhdmVuZGVyO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOHB4O1xuICByaWdodDogLTJweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLmZhYi1idG46aG92ZXIge1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uZmlsZS1pbnB1dC1jb250YWluZXIge1xuICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uZmlsZSB7XG4gIG1hcmdpbi1sZWZ0OiA4JTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYxLCAxMDgsIDIzNik7XG59XG5cbi5kb2N1bWVudHMge1xuICBtYXJnaW46IDE5cHggMTBweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVwcGVyQ29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4udXBwZXJSb3cge1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICBwYWRkaW5nOiAxcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBoZWlnaHQ6IDU2cHg7XG59XG4vLyAuc2VsZWN0ZWRVcHBlckNvbCB7Ly8gICBiYWNrZ3JvdW5kOiAjZmZmZmZmOy8vICAgdGV4dC1hbGlnbjogY2VudGVyOy8vICAgYm9yZGVyLXJhZGl1czogOHB4Oy8vICAgbWFyZ2luOiAxMHB4Oy8vICAgY29sb3I6IGJsYWNrOy8vICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7Ly8gICBjdXJzb3I6IHBvaW50ZXI7Ly8gICBmb250LXNpemU6IDEzcHg7Ly8gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOy8vICAgYWxpZ24tc2VsZjogY2VudGVyOy8vIH1cbi8vIC5zZWxlY3RlZFVwcGVyQ29sOmhvdmVyIHsvLyAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7Ly8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTA5NWU3Oy8vIH1cbi8vIC5zZWxlY3RlZCB7Ly8gICBjb2xvcjogd2hpdGU7Ly8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IxZGZmOy8vIH1cbi5zZWxlY3RlZFVwcGVyQ29sIHtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYjViNWI1O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4vLyAuc2VsZWN0ZWRVcHBlckNvbDpob3ZlciB7Ly8gICBjb2xvcjogcmdiKDAsIDAsIDApOy8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsvLyAgIGZvbnQtc2l6ZTogMTJweDsvLyAgIGZvbnQtd2VpZ2h0OiBib2xkOy8vICAgdHJhbnNpdGlvbjogMC4zczsvLyAgIHBhZGRpbmctdG9wOiA4cHg7Ly8gICBib3gtc2hhZG93OiAwcHggMnB4IDVweDsvLyAgIG1hcmdpbi10b3A6IDIwcHg7Ly8gfVxuLnNlbGVjdGVkIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzdkNjdmODtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMXB4O1xuICBib3gtc2hhZG93OiAwcHggLTRweCA3cHggI2MwYjVmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4iLCIuZmFiYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGdyZXk7XG59XG5cbi5pY29uIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaWNvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBtYXJnaW46IDdweDtcbn1cblxuLmhlYWQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNlbGVjdGVkVXBwZXJDb2xsbCB7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uY2xpY2sge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMXB4O1xuICBib3gtc2hhZG93OiAwcHggLTRweCA3cHggI2MwYjVmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmZpbGVpbnB1dCB7XG4gIG1hcmdpbi10b3A6IDIxcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5sYWJlbC1oZWFkIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcbn1cblxuLmxhYmVsLWhlYWRzIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3VibWl0QnRuIHtcbiAgbWFyZ2luOiAwcHggNDBweCAwcHggMHB4O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM3YzY4Zjg7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xufVxuXG4uc3VibWl0YnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNjI1MmVlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDhweCAxcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxufVxuLnBkZi13cmFwcGVyLFxuLmV4Y2VsLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZXhjZWxOZXcuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmZhYi1idG4ge1xuICAtLWJhY2tncm91bmQ6IGxhdmVuZGVyO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOHB4O1xuICByaWdodDogLTJweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLmZhYi1idG46aG92ZXIge1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uZmlsZS1pbnB1dC1jb250YWluZXIgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5maWxlIHtcbiAgbWFyZ2luLWxlZnQ6IDglO1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2Q2Y2VjO1xufVxuXG4uZG9jdW1lbnRzIHtcbiAgbWFyZ2luOiAxOXB4IDEwcHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51cHBlckNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udXBwZXJSb3cge1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICBwYWRkaW5nOiAxcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBoZWlnaHQ6IDU2cHg7XG59XG5cbi5zZWxlY3RlZFVwcGVyQ29sIHtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYjViNWI1O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5zZWxlY3RlZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzdkNjdmODtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzdkNjdmODtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTFweDtcbiAgYm94LXNoYWRvdzogMHB4IC00cHggN3B4ICNjMGI1ZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/device-renewal-invoice-details/device-renewal-invoice-details.page.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/delar-application/device-renewal-invoice-details/device-renewal-invoice-details.page.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DeviceRenewalInvoiceDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceRenewalInvoiceDetailsPage", function() { return DeviceRenewalInvoiceDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/pdf-logo.service */ "./src/app/services/pdf-logo.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _received_details_received_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./received-details/received-details.component */ "./src/app/delar-application/device-renewal-invoice-details/received-details/received-details.component.ts");
/* harmony import */ var _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-details/view-details.component */ "./src/app/delar-application/device-renewal-invoice-details/view-details/view-details.component.ts");
/* harmony import */ var _view_imei_view_imei_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view-imei/view-imei.component */ "./src/app/delar-application/device-renewal-invoice-details/view-imei/view-imei.component.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");














let DeviceRenewalInvoiceDetailsPage = class DeviceRenewalInvoiceDetailsPage {
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
        this.type = "old";
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
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getDealer";
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.Dealer = res;
        });
    }
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
                workBook = xlsx__WEBPACK_IMPORTED_MODULE_12__["read"](data, { type: "binary" });
                jsonData = workBook.SheetNames.reduce((initial, name) => {
                    const sheet = workBook.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_12__["utils"].sheet_to_json(sheet);
                    return initial;
                }, {});
                let json = [];
                for (let i = 0; i < jsonData["Sheet1"].length; i++) {
                    let newData = {};
                    newData["imei"] = jsonData["Sheet1"][i]["imei"].toString();
                    newData["renewalno"] = jsonData["Sheet1"][i]["renewalno"].toString();
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
                        if (excellKeys[i] == "imei" || excellKeys[i] == "renewalno") {
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
                        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/saveEsimRenewalInvoiceHeader";
                        this.ajaxService.ajaxPostWithFile(url, testData).subscribe((res) => {
                            if (res.message == "Renewal Invoice Saved Successfully") {
                                this.commonService.showConfirm("Renewal Invoice Saved Successfully");
                                this.clear();
                                this.tableData = res;
                                this.myGrid.clearselection();
                                this.button = false;
                                this.getdatas();
                            }
                            else if (res.message == "Renewal Invoice Not Saved Successfully") {
                                this.commonService.showConfirm("Renewal Invoice Not Saved Successfully");
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
                const file = this.uploader;
                var data;
                data = {
                    headerid: this.selectedRow.headerid.toString(),
                    dealerid: this.SalesinvoiceForm.value.dealerid.toString(),
                    invoiceno: this.SalesinvoiceForm.value.invoiceno.toString(),
                    invoicedate: this.SalesinvoiceForm.value.invoicedate.toString(),
                    invoiceamount: this.SalesinvoiceForm.value.invoiceamount.toString(),
                    noofunits: this.SalesinvoiceForm.value.noofunits.toString(),
                    imeinos: [],
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
                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/saveEsimRenewalInvoiceHeader";
                this.ajaxService.ajaxPostWithFile(url, testData).subscribe((res) => {
                    if (res.message == "Renewal Invoice Saved Successfully") {
                        this.commonService.showConfirm("Renewal Invoice Saved Successfully");
                        this.clear();
                        this.tableData = res;
                        this.myGrid.clearselection();
                        this.button = false;
                        this.getdatas();
                    }
                    else if (res.message == "Renewal Invoice Not Saved Successfully") {
                        this.commonService.showConfirm("Renewal Invoice Not Saved Successfully");
                        this.button = false;
                        this.clear();
                    }
                    else {
                        this.commonService.showConfirm(res.message);
                        this.button = false;
                    }
                });
            }
            else {
                if (this.dataString.length == 0) {
                    this.commonService.showConfirm("Check your excell file,don't enter blank spaces");
                    this.fileclear();
                }
                else {
                    var excellKeys = Object.keys(this.dataString[0]);
                    for (var i = 0; i < excellKeys.length; i++) {
                        if (excellKeys[i] == "imei" || excellKeys[i] == "renewalno") {
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
                        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/saveEsimRenewalInvoiceHeader";
                        this.ajaxService.ajaxPostWithFile(url, testData).subscribe((res) => {
                            if (res.message == "Renewal Invoice Saved Successfully") {
                                this.commonService.showConfirm("Renewal Invoice Saved Successfully");
                                this.clear();
                                this.tableData = res;
                                this.getdatas();
                                this.button = false;
                                this.myGrid.clearselection();
                            }
                            else if (res.message == "Renewal Invoice Not Saved Successfully") {
                                this.commonService.showConfirm("Renewal Invoice Not Saved Successfully");
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
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getAllRenewalEsimInvoice";
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
                component: _received_details_received_details_component__WEBPACK_IMPORTED_MODULE_9__["ReceivedDetailsComponent"],
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
                component: _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_10__["ViewDetailsComponent"],
                cssClass: "viewserialfrom",
                componentProps: {
                    value: this.selectedRow.invoiceno,
                },
            });
            modal.onDidDismiss().then(() => { });
            return yield modal.present();
        });
    }
    imeipop(row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _view_imei_view_imei_component__WEBPACK_IMPORTED_MODULE_11__["ViewImeiComponent"],
                cssClass: "simupdateform",
                componentProps: {
                    valueone: this.selectedRow.invoiceno,
                    value: this.selectedRow.imeinos,
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
            title: "Device Renewal Invoice Details",
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
DeviceRenewalInvoiceDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_7__["PdfLogoService"] },
    { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_13__["ExportExcelService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DeviceRenewalInvoiceDetailsPage.prototype, "myGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DeviceRenewalInvoiceDetailsPage.prototype, "content", void 0);
DeviceRenewalInvoiceDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-device-renewal-invoice-details",
        template: __webpack_require__(/*! raw-loader!./device-renewal-invoice-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-renewal-invoice-details/device-renewal-invoice-details.page.html"),
        styles: [__webpack_require__(/*! ./device-renewal-invoice-details.page.scss */ "./src/app/delar-application/device-renewal-invoice-details/device-renewal-invoice-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_7__["PdfLogoService"],
        src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_13__["ExportExcelService"]])
], DeviceRenewalInvoiceDetailsPage);



/***/ }),

/***/ "./src/app/delar-application/device-renewal-invoice-details/received-details/received-details.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/delar-application/device-renewal-invoice-details/received-details/received-details.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  background-color: #7c68f8;\n}\n\n.label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 18px;\n}\n\n.diable-style {\n  background: white;\n  line-height: 18px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #FFEBCD;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLXJlbmV3YWwtaW52b2ljZS1kZXRhaWxzL3JlY2VpdmVkLWRldGFpbHMvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcZGV2aWNlLXJlbmV3YWwtaW52b2ljZS1kZXRhaWxzXFxyZWNlaXZlZC1kZXRhaWxzXFxyZWNlaXZlZC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9kZXZpY2UtcmVuZXdhbC1pbnZvaWNlLWRldGFpbHMvcmVjZWl2ZWQtZGV0YWlscy9yZWNlaXZlZC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FER0E7RUFDSTtJQUNJLFNBQUE7RUNBTjs7RURHRTtJQUNJLFVBQUE7RUNBTjtBQUNGOztBREdBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9kZXZpY2UtcmVuZXdhbC1pbnZvaWNlLWRldGFpbHMvcmVjZWl2ZWQtZGV0YWlscy9yZWNlaXZlZC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M2OGY4XG59XG5cbi5sYWJlbC1zdHlsZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uZGlhYmxlLXN0eWxlIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmNvbnRlbnQtc3R5bGUge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG59XG5cbi5jb2wtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jYWRkLWljb24ge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGRUJDRDtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIC0tYmFja2dyb3VuZDogIzdjNjhmODtcbn1cblxuLmlucHV0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcbiAgICAuZm9ybS1maWVsZCB7XG4gICAgICAgIHpvb206IDgwJTtcbiAgICB9XG5cbiAgICAjc3VibWl0YnRuIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG59XG5cbi5mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5zZWxlY3RhYmxlLWlucHV0IHtcbiAgICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn0iLCIuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M2OGY4O1xufVxuXG4ubGFiZWwtc3R5bGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmRpYWJsZS1zdHlsZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmNvbnRlbnQtc3R5bGUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbiNhZGQtaWNvbiB7XG4gIC0tYmFja2dyb3VuZDogI0ZGRUJDRDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgLS1iYWNrZ3JvdW5kOiAjN2M2OGY4O1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/device-renewal-invoice-details/received-details/received-details.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/delar-application/device-renewal-invoice-details/received-details/received-details.component.ts ***!
  \*****************************************************************************************************************/
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
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/esim/saveEsimRenewalInvoiceDetails";
        this.ajaxService
            .ajaxPostWithString(url, JSON.stringify(data))
            .subscribe((res) => {
            if (JSON.parse(res).message == "Renewal Invoice Detail Saved Successfully") {
                this.commonService.showConfirm("Renewal Invoice Detail Saved Successfully");
                this.modalController.dismiss({
                    data: "Renewal Invoice Detail Saved Successfully",
                });
            }
            else if (res.message == "Renewal Invoice Detail Not Saved Successfully") {
                this.commonService.showConfirm("Renewal Invoice Detail Not Saved Successfully");
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
            noofunits: [""],
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
            noofunits: "",
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
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/esim/getSingleRenewalEsimInvoice?headerid=" +
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
                    noofunits: this.receivedetail.noofunits,
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
        template: __webpack_require__(/*! raw-loader!./received-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-renewal-invoice-details/received-details/received-details.component.html"),
        styles: [__webpack_require__(/*! ./received-details.component.scss */ "./src/app/delar-application/device-renewal-invoice-details/received-details/received-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], ReceivedDetailsComponent);



/***/ }),

/***/ "./src/app/delar-application/device-renewal-invoice-details/view-details/view-details.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/delar-application/device-renewal-invoice-details/view-details/view-details.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2RldmljZS1yZW5ld2FsLWludm9pY2UtZGV0YWlscy92aWV3LWRldGFpbHMvdmlldy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/delar-application/device-renewal-invoice-details/view-details/view-details.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/delar-application/device-renewal-invoice-details/view-details/view-details.component.ts ***!
  \*********************************************************************************************************/
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
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getRenewalInvoiceDetails?invoiceno=" + this.value;
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
        template: __webpack_require__(/*! raw-loader!./view-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-renewal-invoice-details/view-details/view-details.component.html"),
        styles: [__webpack_require__(/*! ./view-details.component.scss */ "./src/app/delar-application/device-renewal-invoice-details/view-details/view-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], ViewDetailsComponent);



/***/ }),

/***/ "./src/app/delar-application/device-renewal-invoice-details/view-imei/view-imei.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/delar-application/device-renewal-invoice-details/view-imei/view-imei.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2RldmljZS1yZW5ld2FsLWludm9pY2UtZGV0YWlscy92aWV3LWltZWkvdmlldy1pbWVpLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/delar-application/device-renewal-invoice-details/view-imei/view-imei.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/delar-application/device-renewal-invoice-details/view-imei/view-imei.component.ts ***!
  \***************************************************************************************************/
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
        this.page = [];
        this.tableData = JSON.parse(this.value);
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
                "/esim/removeRenewalInvoiceIMEI?invoiceno=" +
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
        template: __webpack_require__(/*! raw-loader!./view-imei.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-renewal-invoice-details/view-imei/view-imei.component.html"),
        styles: [__webpack_require__(/*! ./view-imei.component.scss */ "./src/app/delar-application/device-renewal-invoice-details/view-imei/view-imei.component.scss")]
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
//# sourceMappingURL=device-renewal-invoice-details-device-renewal-invoice-details-module-es2015.js.map