(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esim-ca-report-esim-ca-report-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-ca-report/add-esim-ca-status-update/add-esim-ca-status-update.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-ca-report/add-esim-ca-status-update/add-esim-ca-status-update.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon (click)=\"cancelBtn()\" name=\"arrow-back\" style=\"padding: 10px\" slot=\"start\"></ion-icon>\n    </ion-buttons>\n    <ion-title>CA Status Update</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"myPlatform != 'desktop'\" class=\"content-style label-style\">\n  <ion-grid>\n    <ion-row class=\"form-field\">\n      <ion-col size=\"12\" size-sm=\"12\" size-md=\"10\" offset-md=\"1\" size-lg=\"12\" offset-lg=\"0\">\n        <form [formGroup]=\"AddCaStatus\">\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">CA Start Date :</ion-label>\n              <ion-input class=\"label-style\" type=\"date\" [min]=\"minDate\" [max]=\"maxDate\"\n                formControlName=\"cardactivationdate\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row style=\"display: none\">\n            <ion-col>\n              <ion-label class=\"col-content\">CA End Date :</ion-label>\n              <ion-input class=\"label-style\" type=\"date\" formControlName=\"cardenddate\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">Card Status :</ion-label>\n              <ion-input class=\"label-style\" type=\"text\" disabled placeholder=\"Enter the Card Status\"\n                formControlName=\"cardstatus\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">Comments :</ion-label>\n              <textarea class=\"comment\" type=\"text\" placeholder=\"Enter the Comments\"\n                formControlName=\"comment\"></textarea>\n            </ion-col>\n          </ion-row>\n        </form>\n\n        <ion-row class=\"content-style\">\n          <ion-col style=\"text-align: center !important\">\n            <ion-button class=\"button\" type=\"submit\" [disabled]=\"!AddCaStatus.valid\" (click)=\"edit()\">Submit\n            </ion-button>\n            <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\">Cancel</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf=\"myPlatform == 'desktop'\" class=\"content-style label-style\">\n  <ion-row>\n    <ion-col>\n      <form [formGroup]=\"AddCaStatus\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">CA Start Date :</ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" [min]=\"minDate\" [max]=\"maxDate\" type=\"date\"\n                  formControlName=\"cardactivationdate\"></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"display: none\" class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\"> CA End Date : </ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" type=\"date\" formControlName=\"cardenddate\"></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\"> Card Status : </ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" type=\"text\" placeholder=\"Enter the Card Status\" disabled\n                  formControlName=\"cardstatus\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\"> Comments : </ion-col>\n              <ion-col size=\"7\">\n                <textarea class=\"comment\" type=\"text\" placeholder=\"Enter the Comments\"\n                  formControlName=\"comment\"></textarea>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 20px\">\n          <ion-button class=\"button\" type=\"submit\" [disabled]=\"!AddCaStatus.valid\" (click)=\"edit()\">Submit\n          </ion-button>\n          <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\">Cancel</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-ca-report/bsnl-bulk/bsnl-bulk.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-ca-report/bsnl-bulk/bsnl-bulk.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>BSNL Certificate</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"myPlatform != 'desktop'\" class=\"content-style label-style\">\n  <ion-grid>\n    <ion-row class=\"form-field\">\n      <ion-col\n        size=\"12\"\n        size-sm=\"12\"\n        size-md=\"10\"\n        offset-md=\"1\"\n        size-lg=\"12\"\n        offset-lg=\"0\"\n      >\n        <form [formGroup]=\"requestForm\">\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">Select the Plan :</ion-label>\n              <ionic-selectable\n                class=\"label-style selectable-input\"\n                formControlName=\"validity\"\n                placeholder=\"Select the Plan Validity\"\n                [items]=\"valid\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n                [disabledItems]=\"data\"\n              >\n              </ionic-selectable>\n            </ion-col>\n          </ion-row>\n        </form>\n\n        <ion-row class=\"content-style\">\n          <ion-col style=\"text-align: center !important; padding: 20px\">\n            <ion-button\n              class=\"button\"\n              type=\"submit\"\n              [disabled]=\"!requestForm.valid\"\n              (click)=\"submitBtn()\"\n              >Submit\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf=\"myPlatform == 'desktop'\" class=\"content-style label-style\">\n  <ion-row>\n    <ion-col>\n      <form [formGroup]=\"requestForm\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Select the Plan : </ion-col>\n              <ion-col size=\"7\">\n                <ionic-selectable\n                  class=\"label-style selectable-input\"\n                  formControlName=\"validity\"\n                  placeholder=\"Select the Plan Validity\"\n                  [items]=\"valid\"\n                  [canSearch]=\"true\"\n                  [hasVirtualScroll]=\"true\"\n                  [disabledItems]=\"data\"\n                >\n                </ionic-selectable>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 20px\">\n          <ion-button\n            class=\"button\"\n            type=\"submit\"\n            [disabled]=\"!requestForm.valid || button\"\n            (click)=\"submitBtn()\"\n          >\n            Submit\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-ca-report/bulkstatus/bulkstatus.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-ca-report/bulkstatus/bulkstatus.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon (click)=\"cancelBtn()\" name=\"arrow-back\" style=\"padding: 10px\" slot=\"start\"></ion-icon>\n    </ion-buttons>\n    <ion-title>CA Status Update</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"myPlatform != 'desktop'\" class=\"content-style label-style\">\n  <ion-grid>\n    <ion-row class=\"form-field\">\n      <ion-col size=\"12\" size-sm=\"12\" size-md=\"10\" offset-md=\"1\" size-lg=\"12\" offset-lg=\"0\">\n        <form [formGroup]=\"bulkStatusform\">\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">CA Start Date :</ion-label>\n              <ion-input class=\"label-style\" type=\"date\" [min]=\"minDate\" [max]=\"maxDate\"\n                formControlName=\"cardactivationdate\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row style=\"display: none\">\n            <ion-col>\n              <ion-label class=\"col-content\">CA End Date :</ion-label>\n              <ion-input class=\"label-style\" type=\"date\" formControlName=\"cardenddate\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">Card Status :</ion-label>\n              <ion-input class=\"label-style\" type=\"text\" disabled placeholder=\"Enter the Card Status\"\n                formControlName=\"cardstatus\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">Comments :</ion-label>\n              <textarea class=\"comment\" type=\"text\" placeholder=\"Enter the Comments\"\n                formControlName=\"comment\"></textarea>\n            </ion-col>\n          </ion-row>\n        </form>\n\n        <ion-row class=\"content-style\">\n          <ion-col style=\"text-align: center !important; padding: 20px\">\n            <ion-button class=\"button\" type=\"submit\" [disabled]=\"!bulkStatusform.valid\" (click)=\"submit()\">Submit\n            </ion-button>\n            <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\">Cancel</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf=\"myPlatform == 'desktop'\" class=\"content-style label-style\">\n  <ion-row>\n    <ion-col>\n      <form [formGroup]=\"bulkStatusform\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\"> CA Start Date : </ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" [min]=\"minDate\" [max]=\"maxDate\" type=\"date\"\n                  formControlName=\"cardactivationdate\"></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"display: none\" class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\"> CA End Date : </ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" type=\"date\" formControlName=\"cardenddate\"></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\"> Card Status : </ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" type=\"text\" disabled placeholder=\"Enter the Card Status\"\n                  formControlName=\"cardstatus\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\"> Comments : </ion-col>\n              <ion-col size=\"7\">\n                <textarea class=\"comment\" type=\"text\" placeholder=\"Enter the Comments\"\n                  formControlName=\"comment\"></textarea>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 20px\">\n          <ion-button class=\"button\" type=\"submit\" [disabled]=\"!bulkStatusform.valid || button\"\n            (click)=\"submit()\">Submit\n          </ion-button>\n          <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\">Cancel</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-ca-report/certificate/certificate.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-ca-report/certificate/certificate.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon (click)=\"cancelBtn()\" name=\"arrow-back\" style=\"padding: 10px\" slot=\"start\"></ion-icon>\n    </ion-buttons>\n    <ion-title>BSNL Certificate</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"myPlatform != 'desktop'\" class=\"content-style label-style\">\n  <ion-grid>\n    <ion-row class=\"form-field\">\n      <ion-col size=\"12\" size-sm=\"12\" size-md=\"10\" offset-md=\"1\" size-lg=\"12\" offset-lg=\"0\">\n        <form [formGroup]=\"requestForm\">\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">Select the Plan :</ion-label>\n              <ionic-selectable class=\"label-style selectable-input\" formControlName=\"validity\"\n                placeholder=\"Select the Plan Validity\" [items]=\"valid\" [canSearch]=\"true\" [hasVirtualScroll]=\"true\"\n                [disabledItems]=\"data\">\n              </ionic-selectable>\n            </ion-col>\n          </ion-row>\n        </form>\n\n        <ion-row class=\"content-style\">\n          <ion-col style=\"text-align: center !important; padding: 20px\">\n            <ion-button class=\"button\" type=\"submit\" [disabled]=\"!requestForm.valid\" (click)=\"submitBtn()\">Submit\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf=\"myPlatform == 'desktop'\" class=\"content-style label-style\">\n  <ion-row>\n    <ion-col>\n      <form [formGroup]=\"requestForm\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Select the Plan : </ion-col>\n              <ion-col size=\"7\">\n                <ionic-selectable class=\"label-style selectable-input\" formControlName=\"validity\"\n                  placeholder=\"Select the Plan Validity\" [items]=\"valid\" [canSearch]=\"true\" [hasVirtualScroll]=\"true\"\n                  [disabledItems]=\"data\">\n                </ionic-selectable>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 20px\">\n          <ion-button class=\"button\" type=\"submit\" [disabled]=\"!requestForm.valid || button\" (click)=\"submitBtn()\">\n            Submit\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-ca-report/comment/comment.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-ca-report/comment/comment.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"wrapper-container\">\n    <ion-col>\n      <form [formGroup]=\"commentForm\">\n        <ion-row class=\"form-field\">\n          <ion-col>\n            <ion-row>\n              <ion-col size=\"4\" style=\"align-self: center; text-align: center\">\n                <ion-label class=\"col-content\">Comment :</ion-label></ion-col\n              >\n              <ion-col size=\"8\">\n                <textarea\n                  class=\"comment\"\n                  type=\"text\"\n                  placeholder=\"Enter the Comments\"\n                  formControlName=\"comment\"\n                ></textarea>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col style=\"text-align: center; padding: 15px\">\n                <ion-button\n                  (click)=\"submitBtn()\"\n                  [disabled]=\"!commentForm.valid\"\n                  >Submit</ion-button\n                >\n                <ion-button type=\"submit\" (click)=\"cancelBtn()\"\n                  >Cancel</ion-button\n                >\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"padding: 10px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        [enablebrowserselection]=\"true\"\n        [theme]=\"'material'\"\n        [width]=\"'99.5%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [pagesizeoptions]=\"page\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: left !important;\n          margin: auto;\n          cursor: pointer;\n          padding-left: 5px;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-ca-report/esim-ca-report.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-ca-report/esim-ca-report.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons\n      *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\"\n      slot=\"start\"\n    >\n      <ion-icon\n        routerLink=\"/tabs-login/esim-dashboard\"\n        name=\"arrow-back\"\n        style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-row class=\"toolbar\">\n      <ion-title *ngIf=\"myPlatform != 'desktop'\">CA Status Update</ion-title>\n      <ion-title *ngIf=\"myPlatform == 'desktop'\"\n        >Device Status Update Details</ion-title\n      >\n      <ion-col\n        size=\"4\"\n        *ngIf=\"myPlatform == 'desktop'\"\n        style=\"text-align: right\"\n      >\n        <ion-button class=\"submitBtn\" size=\"small\" (click)=\"newfunc()\"\n          >Export</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <ion-grid>\n    <ion-row *ngIf=\"myPlatform == 'desktop'\" class=\"upperRow\">\n      <ion-col\n        [ngClass]=\"{ selectedUpperCol: 'true' }\"\n        routerLink=\"/tabs-login/esim-ca-report\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Ca Status Update</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{ selectedUpperCol: 'true' }\"\n        routerLink=\"/tabs-login/esim-renewal-status-update\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Renewal Status Update</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{ selectedUpperCol: 'true' }\"\n        routerLink=\"/tabs-login/device-topup-status-update\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Topup Status Update</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{ selectedUpperCol: 'true' }\"\n        routerLink=\"/tabs-login/device-extend-status-update\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Extend 1 Yr Status Update</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{ selectedUpperCol: 'true' }\"\n        routerLink=\"/tabs-login/esim-bsnl-certificate\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>BSNL Certificate Request</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"wrapper-container\">\n      <ion-col size=\"12\">\n        <form [formGroup]=\"CAReportForm\">\n          <ion-row class=\"form-field\">\n            <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\">\n              <ion-label class=\"label-head\">CA Request Number:</ion-label>\n              <ionic-selectable\n                class=\"input selectable-input\"\n                formControlName=\"CaRequestNo\"\n                placeholder=\"Select CA Request Number\"\n                [items]=\"carequestNo\"\n                [canSearch]=\"true\"\n                (onChange)=\"getCalist($event)\"\n                [hasVirtualScroll]=\"true\"\n                [disabledItems]=\"data\"\n              >\n              </ionic-selectable>\n            </ion-col>\n            <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\">\n              <ion-label class=\"label-head\">Invoice Number:</ion-label>\n              <ion-input\n                type=\"text\"\n                *ngIf=\"!showInvoiceNumber\"\n                placeholder=\"Select Invoice Number\"\n                formControlName=\"InvoiceNo\"\n                class=\"input\"\n                disabled\n              ></ion-input>\n              <ionic-selectable\n                *ngIf=\"showInvoiceNumber\"\n                class=\"input selectable-input\"\n                formControlName=\"InvoiceNo\"\n                placeholder=\"Select Invoice Number\"\n                [disabled]=\"hideSerialNo\"\n                [items]=\"Invoice\"\n                [canSearch]=\"true\"\n                (onChange)=\"getinvoicelist($event)\"\n                [hasVirtualScroll]=\"true\"\n                [disabledItems]=\"data\"\n              >\n              </ionic-selectable>\n            </ion-col>\n            <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\">\n              <ion-label class=\"label-head\">Box Number:</ion-label>\n              <ion-input\n                type=\"text\"\n                *ngIf=\"!showSerialNo\"\n                placeholder=\"Select Box Number\"\n                formControlName=\"SerialNo\"\n                class=\"input\"\n                disabled\n              ></ion-input>\n              <ionic-selectable\n                *ngIf=\"showSerialNo\"\n                class=\"input selectable-input\"\n                formControlName=\"SerialNo\"\n                placeholder=\"Select Box Number\"\n                [disabled]=\"hideSerialNo\"\n                [items]=\"SerialNo\"\n                [canSearch]=\"true\"\n                (onChange)=\"getseriallist($event)\"\n                [hasVirtualScroll]=\"true\"\n                [disabledItems]=\"data\"\n              >\n              </ionic-selectable>\n            </ion-col>\n            <ion-col\n              size=\"12\"\n              size-lg=\"3\"\n              size-md=\"3\"\n              style=\"margin: 25px 0px 0px; text-align: center\"\n            >\n              <ion-button\n                class=\"submitbtn\"\n                (click)=\"SearchData()\"\n                [disabled]=\"!CAReportForm.valid\"\n                >Search</ion-button\n              >\n              <ion-button class=\"submitbtn\" (click)=\"clear(1)\"\n                >Clear</ion-button\n              >\n            </ion-col>\n          </ion-row>\n        </form>\n\n        <ion-row *ngIf=\"myPlatform != 'desktop'\">\n          <ion-col class=\"form-field\">\n            <ion-row>\n              <ion-col style=\"margin: 10px 0px 0px\">\n                <ion-label>\n                  <span class=\"dealer-label\">Total Selected Row :</span>\n                  <span class=\"dealer-data\">{{selectedRow?.length}}</span>\n                </ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col style=\"margin: 10px 0px 0px; text-align: end\">\n                <ion-button\n                  size=\"small\"\n                  class=\"submitbtn\"\n                  (click)=\"bulkstatusModel()\"\n                  [disabled]=\"checkbutton\"\n                  >Status Update</ion-button\n                >\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"myPlatform == 'desktop'\">\n          <ion-col style=\"margin: 10px 0px 0px\">\n            <ion-label>\n              <span class=\"dealer-label\">Total Selected Row :</span>\n              <span class=\"dealer-data\">{{selectedRow?.length}}</span>\n            </ion-label>\n          </ion-col>\n          <ion-col style=\"margin: 10px 0px 0px; text-align: end\">\n            <ion-button\n              class=\"submitbtn\"\n              (click)=\"bulkstatusModel()\"\n              [disabled]=\"checkbutton\"\n              >Status Update</ion-button\n            >\n          </ion-col>\n        </ion-row>\n\n        <jqxGrid\n          #myGrid\n          [selectionmode]=\"'checkbox'\"\n          (onRowclick)=\"myGridOnRowclick($event)\"\n          (onRowselect)=\"myGridOnRowSelect($event)\"\n          (onRowunselect)=\"myGridOnRowSelect($event)\"\n          [theme]=\"'material'\"\n          [pagesizeoptions]=\"page\"\n          [enablebrowserselection]=\"true\"\n          [width]=\"'99.5%'\"\n          [autoheight]=\"true\"\n          [source]=\"dataAdapter\"\n          [columns]=\"columns\"\n          [filterable]=\"true\"\n          [sortable]=\"true\"\n          [columnsresize]=\"true\"\n          [enabletooltips]=\"true\"\n          [pageable]=\"true\"\n          [showfilterrow]=\"true\"\n          style=\"\n            font-size: 16px;\n            text-align: center !important;\n            margin: auto;\n            cursor: pointer;\n          \"\n          [columns]=\"columns\"\n        >\n        </jqxGrid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-fab\n    *ngIf=\"myPlatform == 'desktop' && arrow\"\n    style=\"margin-right: 1%; margin-bottom: 9%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToTop()\">\n      <ion-icon class=\"icon\" name=\"arrow-up\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab\n    *ngIf=\"myPlatform == 'desktop' && arrow\"\n    style=\"margin-right: 1%; margin-bottom: 5%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToBottom()\">\n      <ion-icon class=\"icon\" name=\"arrow-down\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-ca-report/history-details/history-details.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-ca-report/history-details/history-details.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>History Status</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row style=\"padding: 10px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        [theme]=\"'material'\"\n        [width]=\"'99.5%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [columns]=\"columns\"\n        [filterable]=\"true\"\n        [sortable]=\"true\"\n        [columnsresize]=\"true\"\n        [enablebrowserselection]=\"true\"\n        [pagesizeoptions]=\"page\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-ca-report/sim-update/sim-update.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-ca-report/sim-update/sim-update.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Sim Status Update</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"wrapper-container\">\n    <ion-col>\n      <form [formGroup]=\"simupdate\">\n        <ion-row class=\"form-field\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Vltd No : </ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  formControlName=\"vltdsno\"\n                  class=\"input\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Sim 1 :</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  type=\"number\"\n                  formControlName=\"sim1\"\n                  placeholder=\"Enter the Sim No\"\n                  class=\"input\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Sim 2 :</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  type=\"number\"\n                  formControlName=\"sim2\"\n                  placeholder=\"Enter the Sim No\"\n                  class=\"input\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 20px\">\n          <ion-button\n            class=\"button\"\n            type=\"submit\"\n            [disabled]=\"!simupdate.valid || button\"\n            (click)=\"submitBtn()\"\n          >\n            Submit\n          </ion-button>\n          <ion-button class=\"button\" type=\"submit\" (click)=\"cancelBtn()\">\n            Cancel\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/esim-ca-report/add-esim-ca-status-update/add-esim-ca-status-update.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-ca-report/add-esim-ca-status-update/add-esim-ca-status-update.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  background-color: #7c68f8;\n}\n\n.label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 25px;\n}\n\n.comment {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  height: 169px;\n  width: 100%;\n  padding: 15px;\n}\n\n.diable-style {\n  background: white;\n  line-height: 18px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.total-data {\n  margin-top: 2%;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #FFEBCD;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.file-input-container input[type=file] {\n  display: none;\n}\n\n.file {\n  margin-left: 8%;\n  border: 1px solid #3d6cec;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.documents {\n  margin: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jYS1yZXBvcnQvYWRkLWVzaW0tY2Etc3RhdHVzLXVwZGF0ZS9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxlc2ltLWNhLXJlcG9ydFxcYWRkLWVzaW0tY2Etc3RhdHVzLXVwZGF0ZVxcYWRkLWVzaW0tY2Etc3RhdHVzLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jYS1yZXBvcnQvYWRkLWVzaW0tY2Etc3RhdHVzLXVwZGF0ZS9hZGQtZXNpbS1jYS1zdGF0dXMtdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDRCxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNFSDs7QURDQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURDQTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQ0E7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQ0VKOztBRENBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURHSTtFQUVJLGFBQUE7QUNEUjs7QURLQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQ0ZKOztBRElBO0VBQ0k7SUFDSSxTQUFBO0VDRE47O0VESUU7SUFDSSxVQUFBO0VDRE47QUFDRjs7QURJQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURJQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jYS1yZXBvcnQvYWRkLWVzaW0tY2Etc3RhdHVzLXVwZGF0ZS9hZGQtZXNpbS1jYS1zdGF0dXMtdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M2OGY4XG59XG5cbi5sYWJlbC1zdHlsZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuLmNvbW1lbnR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICAgaGVpZ2h0OiAxNjlweDtcbiAgIHdpZHRoOiAxMDAlO1xuICAgcGFkZGluZzoxNXB4XG59XG5cbi5kaWFibGUtc3R5bGUge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uY29udGVudC1zdHlsZSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbn1cblxuLnRvdGFsLWRhdGEge1xuICAgIG1hcmdpbi10b3A6IDIlO1xufVxuXG4uY29sLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI2FkZC1pY29uIHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRkVCQ0Q7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICAtLWJhY2tncm91bmQ6ICM3YzY4Zjg7XG59XG5cbi5pbnB1dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG5cbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICAgIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uZmlsZS1pbnB1dC1jb250YWluZXIge1xuICAgIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcblxuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLmZpbGUge1xuICAgIG1hcmdpbi1sZWZ0OiA4JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjEsIDEwOCwgMjM2KTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuICAgIC5mb3JtLWZpZWxkIHtcbiAgICAgICAgem9vbTogODAlO1xuICAgIH1cblxuICAgICNzdWJtaXRidG4ge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cbn1cblxuLmZvcm0tZmllbGQge1xuICAgIG1hcmdpbjogLTVweCA1cHggMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cbi5kb2N1bWVudHMge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjNjhmODtcbn1cblxuLmxhYmVsLXN0eWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG5cbi5jb21tZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgaGVpZ2h0OiAxNjlweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5kaWFibGUtc3R5bGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5jb250ZW50LXN0eWxlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50b3RhbC1kYXRhIHtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5jb2wtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jYWRkLWljb24ge1xuICAtLWJhY2tncm91bmQ6ICNGRkVCQ0Q7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIC0tYmFja2dyb3VuZDogIzdjNjhmODtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmZpbGUtaW5wdXQtY29udGFpbmVyIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZmlsZSB7XG4gIG1hcmdpbi1sZWZ0OiA4JTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNkNmNlYztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4uZG9jdW1lbnRzIHtcbiAgbWFyZ2luOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/esim-ca-report/add-esim-ca-status-update/add-esim-ca-status-update.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-ca-report/add-esim-ca-status-update/add-esim-ca-status-update.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: dateWithinLast7DaysValidator, AddEsimCaStatusUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateWithinLast7DaysValidator", function() { return dateWithinLast7DaysValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEsimCaStatusUpdateComponent", function() { return AddEsimCaStatusUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");








// Import the correct types

// Create a custom validator function for date comparisons
function dateWithinLast7DaysValidator() {
    return function (control) {
        var currentDate = new Date();
        var sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(currentDate.getDate() - 7);
        var selectedDate = new Date(control.value);
        if (selectedDate > currentDate || selectedDate < sevenDaysAgo) {
            return { dateWithinLast7Days: true };
        }
        return null;
    };
}
var AddEsimCaStatusUpdateComponent = /** @class */ (function () {
    function AddEsimCaStatusUpdateComponent(platform, formBuilder, modalController, ajaxService, alertController, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.alertController = alertController;
        this.commonService = commonService;
        this.today = new Date();
    }
    AddEsimCaStatusUpdateComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    AddEsimCaStatusUpdateComponent.prototype.createForm = function () {
        var now = new Date();
        // Convert the current date to a string in 'yyyy-MM-dd' format
        var today = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(now, "yyyy-MM-dd", "en-US");
        this.AddCaStatus = this.formBuilder.group({
            cardactivationdate: [
                today,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, dateWithinLast7DaysValidator()],
            ],
            cardenddate: [today, [dateWithinLast7DaysValidator()]],
            cardstatus: ["Active", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            comment: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    AddEsimCaStatusUpdateComponent.prototype.edit = function () {
        var _this = this;
        var data = {
            iccidno: this.value.iccidno1,
            cardactivationdate: this.AddCaStatus.value.cardactivationdate,
            cardenddate: "",
            cardstatus: this.AddCaStatus.value.cardstatus,
            comment: this.AddCaStatus.value.comment,
            createdby: this.value.createdby,
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/esim/saveEsimCAStatus";
        this.ajaxService
            .ajaxPostWithBody(url, JSON.stringify(data))
            .subscribe(function (res) {
            if (res.message == "Esim CA Status Saved Successfully") {
                _this.commonService.showConfirm(res.message);
                _this.modalController.dismiss({ data: "saved success" });
            }
            else {
                _this.commonService.showConfirm(res.message);
            }
        });
    };
    AddEsimCaStatusUpdateComponent.prototype.ngOnInit = function () {
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
        var today = new Date();
        var sevenDaysAgo = new Date(today);
        sevenDaysAgo.setDate(today.getDate() - 7);
        this.minDate = sevenDaysAgo.getFullYear() + "-";
        this.minDate +=
            (sevenDaysAgo.getMonth() + 1 < 10
                ? "0" + (sevenDaysAgo.getMonth() + 1).toString()
                : (sevenDaysAgo.getMonth() + 1).toString()) + "-";
        this.minDate +=
            sevenDaysAgo.getDate() < 10
                ? "0" + sevenDaysAgo.getDate().toString()
                : sevenDaysAgo.getDate().toString();
        if (Object.keys(this.value).length != 0) {
            console.log(this.value.cardactivationdate, this.value.cardenddate, this.value.cardstatus);
            this.AddCaStatus.patchValue({
                cardenddate: this.value.cardenddate,
                comment: this.value.purcomment,
            });
        }
    };
    AddEsimCaStatusUpdateComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddEsimCaStatusUpdateComponent.prototype, "value", void 0);
    AddEsimCaStatusUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-add-esim-ca-status-update",
            template: __webpack_require__(/*! raw-loader!./add-esim-ca-status-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-ca-report/add-esim-ca-status-update/add-esim-ca-status-update.component.html"),
            styles: [__webpack_require__(/*! ./add-esim-ca-status-update.component.scss */ "./src/app/delar-application/esim-ca-report/add-esim-ca-status-update/add-esim-ca-status-update.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]])
    ], AddEsimCaStatusUpdateComponent);
    return AddEsimCaStatusUpdateComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-ca-report/bsnl-bulk/bsnl-bulk.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/delar-application/esim-ca-report/bsnl-bulk/bsnl-bulk.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 14px;\n  margin: 7px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #ffebcd;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 0px 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jYS1yZXBvcnQvYnNubC1idWxrL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGVzaW0tY2EtcmVwb3J0XFxic25sLWJ1bGtcXGJzbmwtYnVsay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jYS1yZXBvcnQvYnNubC1idWxrL2JzbmwtYnVsay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxTQUFBO0VDQ0Y7O0VERUE7SUFDRSxVQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWNhLXJlcG9ydC9ic25sLWJ1bGsvYnNubC1idWxrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsLXN0eWxlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgbWFyZ2luOiA3cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXN0eWxlIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbC1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbiNhZGQtaWNvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZlYmNkO1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjN2M2OGY4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgem9vbTogODAlO1xyXG4gIH1cclxuXHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuLnNlbGVjdGFibGUtaW5wdXQge1xyXG4gIHBhZGRpbmc6IDhweCAxMXB4IDBweCA2cHg7XHJcbn1cclxuIiwiLmxhYmVsLXN0eWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1hcmdpbjogN3B4O1xufVxuXG4uY29udGVudC1zdHlsZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29sLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI2FkZC1pY29uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZlYmNkO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICAtLWJhY2tncm91bmQ6ICM3YzY4Zjg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCAwcHggNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-ca-report/bsnl-bulk/bsnl-bulk.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/delar-application/esim-ca-report/bsnl-bulk/bsnl-bulk.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BsnlBulkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsnlBulkComponent", function() { return BsnlBulkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var BsnlBulkComponent = /** @class */ (function () {
    function BsnlBulkComponent(platform, formBuilder, modalController, ajaxService, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.valid = ["1 Year", "2 Year", "3 Year"];
        this.button = false;
    }
    BsnlBulkComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    BsnlBulkComponent.prototype.createForm = function () {
        this.requestForm = this.formBuilder.group({
            validity: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    BsnlBulkComponent.prototype.submitBtn = function () {
        var _this = this;
        this.button = true;
        var data = [];
        this.value.map(function (d) {
            data.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, d, { validityperiod: _this.requestForm.value.validity }));
        });
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/esim/saveBulkBSNLCertificatedetails";
        this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
            if (res.message == "Certificate Created Successfully") {
                _this.modalController.dismiss({
                    data: "Certificate Created Successfully",
                });
                _this.button = false;
            }
            else {
                _this.commonService.showConfirm(res.message);
                _this.modalController.dismiss({
                    data: res.message,
                });
                _this.button = false;
            }
        });
    };
    BsnlBulkComponent.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.createForm();
    };
    BsnlBulkComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BsnlBulkComponent.prototype, "value", void 0);
    BsnlBulkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-bsnl-bulk",
            template: __webpack_require__(/*! raw-loader!./bsnl-bulk.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-ca-report/bsnl-bulk/bsnl-bulk.component.html"),
            styles: [__webpack_require__(/*! ./bsnl-bulk.component.scss */ "./src/app/delar-application/esim-ca-report/bsnl-bulk/bsnl-bulk.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], BsnlBulkComponent);
    return BsnlBulkComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-ca-report/bulkstatus/bulkstatus.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/esim-ca-report/bulkstatus/bulkstatus.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  background-color: #7c68f8;\n}\n\n.label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 25px;\n}\n\n.comment {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  height: 169px;\n  width: 100%;\n  padding: 15px;\n}\n\n.diable-style {\n  background: white;\n  line-height: 18px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.total-data {\n  margin-top: 2%;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #FFEBCD;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.file-input-container input[type=file] {\n  display: none;\n}\n\n.file {\n  margin-left: 8%;\n  border: 1px solid #3d6cec;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.documents {\n  margin: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jYS1yZXBvcnQvYnVsa3N0YXR1cy9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxlc2ltLWNhLXJlcG9ydFxcYnVsa3N0YXR1c1xcYnVsa3N0YXR1cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jYS1yZXBvcnQvYnVsa3N0YXR1cy9idWxrc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FER0E7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNBSjs7QURJSTtFQUVJLGFBQUE7QUNGUjs7QURNQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQ0hKOztBREtBO0VBQ0k7SUFDSSxTQUFBO0VDRk47O0VES0U7SUFDSSxVQUFBO0VDRk47QUFDRjs7QURLQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURLQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jYS1yZXBvcnQvYnVsa3N0YXR1cy9idWxrc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3YzY4ZjhcclxufVxyXG5cclxuLmxhYmVsLXN0eWxlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5jb21tZW50IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gICAgaGVpZ2h0OiAxNjlweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTVweFxyXG59XHJcblxyXG4uZGlhYmxlLXN0eWxlIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXN0eWxlIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbn1cclxuXHJcbi50b3RhbC1kYXRhIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG4uY29sLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuI2FkZC1pY29uIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZGRUJDRDtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM3YzY4Zjg7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG5cclxufVxyXG5cclxuLnNlbGVjdGFibGUtaW5wdXQge1xyXG4gICAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmZpbGUtaW5wdXQtY29udGFpbmVyIHtcclxuICAgIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuXHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLmZpbGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDglO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYxLCAxMDgsIDIzNik7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAuZm9ybS1maWVsZCB7XHJcbiAgICAgICAgem9vbTogODAlO1xyXG4gICAgfVxyXG5cclxuICAgICNzdWJtaXRidG4ge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbjogLTVweCA1cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcbi5kb2N1bWVudHMge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IiwiLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjNjhmODtcbn1cblxuLmxhYmVsLXN0eWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG5cbi5jb21tZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgaGVpZ2h0OiAxNjlweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5kaWFibGUtc3R5bGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5jb250ZW50LXN0eWxlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50b3RhbC1kYXRhIHtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5jb2wtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jYWRkLWljb24ge1xuICAtLWJhY2tncm91bmQ6ICNGRkVCQ0Q7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIC0tYmFja2dyb3VuZDogIzdjNjhmODtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmZpbGUtaW5wdXQtY29udGFpbmVyIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZmlsZSB7XG4gIG1hcmdpbi1sZWZ0OiA4JTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNkNmNlYztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4uZG9jdW1lbnRzIHtcbiAgbWFyZ2luOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/esim-ca-report/bulkstatus/bulkstatus.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/delar-application/esim-ca-report/bulkstatus/bulkstatus.component.ts ***!
  \*************************************************************************************/
/*! exports provided: BulkstatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkstatusComponent", function() { return BulkstatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var BulkstatusComponent = /** @class */ (function () {
    function BulkstatusComponent(platform, formBuilder, modalController, ajaxService, alertController, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.alertController = alertController;
        this.commonService = commonService;
        this.button = false;
        this.today = new Date();
    }
    BulkstatusComponent.prototype.createForm = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        var endDate = now.getFullYear() + 1 + "-" + month + "-" + day;
        this.bulkStatusform = this.formBuilder.group({
            cardactivationdate: [today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cardenddate: [today],
            cardstatus: ["Active", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            comment: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    BulkstatusComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    // submit() {
    //   const url = serverUrl.web + "/esim/saveEsimBulkCAStatus";
    //   this.ajaxService.ajaxPostWithBody(url, this.value).subscribe((res) => {
    //     if (res.message == "Esim CA Status Saved Successfully") {
    //       this.commonService.showConfirm("CA Status Saved Successfully");
    //     }
    //   });
    // }
    BulkstatusComponent.prototype.submit = function () {
        var _this = this;
        this.button = true;
        var data = [];
        this.value.map(function (d) {
            data.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, d, { cardactivationdate: _this.bulkStatusform.value.cardactivationdate, cardenddate: "", cardstatus: _this.bulkStatusform.value.cardstatus, comment: _this.bulkStatusform.value.comment }));
        });
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/saveEsimBulkCAStatus";
        this.ajaxService
            .ajaxPostWithBody(url, JSON.stringify(data))
            .subscribe(function (res) {
            if (res.message == "Esim CA Status Saved Successfully") {
                _this.modalController.dismiss({
                    data: "Esim CA Status Saved Successfully",
                });
                _this.button = false;
            }
            else {
                _this.commonService.showConfirm(res.message);
                _this.button = false;
            }
        });
    };
    BulkstatusComponent.prototype.ngOnInit = function () {
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
        var today = new Date();
        var sevenDaysAgo = new Date(today);
        sevenDaysAgo.setDate(today.getDate() - 7);
        this.minDate = sevenDaysAgo.getFullYear() + "-";
        this.minDate +=
            (sevenDaysAgo.getMonth() + 1 < 10
                ? "0" + (sevenDaysAgo.getMonth() + 1).toString()
                : (sevenDaysAgo.getMonth() + 1).toString()) + "-";
        this.minDate +=
            sevenDaysAgo.getDate() < 10
                ? "0" + sevenDaysAgo.getDate().toString()
                : sevenDaysAgo.getDate().toString();
        this.createForm();
    };
    BulkstatusComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
    ], BulkstatusComponent.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BulkstatusComponent.prototype, "value", void 0);
    BulkstatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-bulkstatus",
            template: __webpack_require__(/*! raw-loader!./bulkstatus.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-ca-report/bulkstatus/bulkstatus.component.html"),
            styles: [__webpack_require__(/*! ./bulkstatus.component.scss */ "./src/app/delar-application/esim-ca-report/bulkstatus/bulkstatus.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], BulkstatusComponent);
    return BulkstatusComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-ca-report/certificate/certificate.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/esim-ca-report/certificate/certificate.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 14px;\n  margin: 7px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #FFEBCD;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 0px 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jYS1yZXBvcnQvY2VydGlmaWNhdGUvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcZXNpbS1jYS1yZXBvcnRcXGNlcnRpZmljYXRlXFxjZXJ0aWZpY2F0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jYS1yZXBvcnQvY2VydGlmaWNhdGUvY2VydGlmaWNhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksU0FBQTtFQ0NOOztFREVFO0lBQ0ksVUFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jYS1yZXBvcnQvY2VydGlmaWNhdGUvY2VydGlmaWNhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwtc3R5bGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBtYXJnaW46IDdweDtcbn1cblxuLmNvbnRlbnQtc3R5bGUge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG59XG5cbi5jb2wtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jYWRkLWljb24ge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGRUJDRDtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIC0tYmFja2dyb3VuZDogIzdjNjhmODtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XG4gICAgLmZvcm0tZmllbGQge1xuICAgICAgICB6b29tOiA4MCU7XG4gICAgfVxuXG4gICAgI3N1Ym1pdGJ0biB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxufVxuXG4uZm9ybS1maWVsZCB7XG4gICAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gICAgcGFkZGluZzogOHB4IDExcHggMHB4IDZweDtcbn0iLCIubGFiZWwtc3R5bGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgbWFyZ2luOiA3cHg7XG59XG5cbi5jb250ZW50LXN0eWxlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb2wtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jYWRkLWljb24ge1xuICAtLWJhY2tncm91bmQ6ICNGRkVCQ0Q7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIC0tYmFja2dyb3VuZDogIzdjNjhmODtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDBweCA2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/esim-ca-report/certificate/certificate.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/esim-ca-report/certificate/certificate.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CertificateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateComponent", function() { return CertificateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var CertificateComponent = /** @class */ (function () {
    function CertificateComponent(platform, formBuilder, modalController, ajaxService, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.valid = ["1 Year", "2 Year", "3 Year"];
        this.button = false;
    }
    CertificateComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    CertificateComponent.prototype.createForm = function () {
        this.requestForm = this.formBuilder.group({
            validity: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    CertificateComponent.prototype.submitBtn = function () {
        var _this = this;
        this.button = true;
        var data = {
            "dealerid": this.value.carequestby, "imei": this.value.imei, "vltdsno": this.value.vltdsno, "validityperiod": this.requestForm.value.validity, "createdby": localStorage.getItem('userName')
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/esim/saveBSNLCertificatedetails";
        this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
            if (res.message == "Certificate Created Successfully") {
                _this.commonService.showConfirm(res.message);
                _this.modalController.dismiss({
                    data: "Certificate Created Successfully",
                });
                _this.button = false;
            }
            else {
                _this.commonService.showConfirm(res.message);
                _this.modalController.dismiss({
                    data: res.message,
                });
                _this.button = false;
            }
        });
    };
    CertificateComponent.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.createForm();
    };
    CertificateComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CertificateComponent.prototype, "value", void 0);
    CertificateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-certificate',
            template: __webpack_require__(/*! raw-loader!./certificate.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-ca-report/certificate/certificate.component.html"),
            styles: [__webpack_require__(/*! ./certificate.component.scss */ "./src/app/delar-application/esim-ca-report/certificate/certificate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], CertificateComponent);
    return CertificateComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-ca-report/comment/comment.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/delar-application/esim-ca-report/comment/comment.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n.form-field {\n  margin: -5px;\n  border-radius: 7px;\n}\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n.comment {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  height: 100px;\n  width: 100%;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jYS1yZXBvcnQvY29tbWVudC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxlc2ltLWNhLXJlcG9ydFxcY29tbWVudFxcY29tbWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jYS1yZXBvcnQvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUNDRjtBQUNGO0FERUE7RUFDRTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0RGO0FESUE7RUFDRTtJQUNFLFNBQUE7RUNERjs7RURJQTtJQUNFLFVBQUE7RUNERjtBQUNGO0FER0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0RGO0FESUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWNhLXJlcG9ydC9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweCkgYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDhweCAxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogLTVweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZm9ybS1maWVsZCB7XHJcbiAgICB6b29tOiA4MCU7XHJcbiAgfVxyXG5cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcbi5jb2wtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uY29tbWVudCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTVweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uY29sLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNvbW1lbnQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/esim-ca-report/comment/comment.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/delar-application/esim-ca-report/comment/comment.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var CommentComponent = /** @class */ (function () {
    function CommentComponent(platform, formBuilder, modalController, ajaxService, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.page = [];
    }
    CommentComponent.prototype.createForm = function () {
        this.commentForm = this.formBuilder.group({
            comment: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    CommentComponent.prototype.clear = function () {
        this.commentForm.patchValue({
            comment: "",
        });
    };
    CommentComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    CommentComponent.prototype.submitBtn = function () {
        var _this = this;
        var data = {
            iccidno: this.value.iccidno1.toString(),
            comment: this.commentForm.value.comment.toString(),
            createdby: this.value.createdby.toString(),
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/saveEsimCAComment";
        this.ajaxService
            .ajaxPostWithString(url, JSON.stringify(data))
            .subscribe(function (res) {
            if (JSON.parse(res).message == "Esim CA Comment Saved Successfully") {
                _this.commonService.showConfirm("Esim CA Comment Saved Successfully");
                _this.clear();
                _this.modalController.dismiss({
                    data: "Esim CA Comment Saved Successfully",
                });
            }
            else {
                _this.commonService.showConfirm(JSON.parse(res).message);
            }
        });
    };
    CommentComponent.prototype.getDatas = function () {
        this.page = [];
        if (this.value.comment != "") {
            this.tableData = JSON.parse(this.value.comment);
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
                text: "Comment",
                datafield: "comment",
                cellsrenderer: this.renderer,
                cellsalign: "left",
                align: "left",
                width: 500,
            },
        ];
    };
    CommentComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.getDatas();
    };
    CommentComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
    ], CommentComponent.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommentComponent.prototype, "value", void 0);
    CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-comment",
            template: __webpack_require__(/*! raw-loader!./comment.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-ca-report/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.scss */ "./src/app/delar-application/esim-ca-report/comment/comment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-ca-report/esim-ca-report.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/delar-application/esim-ca-report/esim-ca-report.module.ts ***!
  \***************************************************************************/
/*! exports provided: EsimCaReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimCaReportPageModule", function() { return EsimCaReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _esim_ca_report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esim-ca-report.page */ "./src/app/delar-application/esim-ca-report/esim-ca-report.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _add_esim_ca_status_update_add_esim_ca_status_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-esim-ca-status-update/add-esim-ca-status-update.component */ "./src/app/delar-application/esim-ca-report/add-esim-ca-status-update/add-esim-ca-status-update.component.ts");
/* harmony import */ var _history_details_history_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./history-details/history-details.component */ "./src/app/delar-application/esim-ca-report/history-details/history-details.component.ts");
/* harmony import */ var _bulkstatus_bulkstatus_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bulkstatus/bulkstatus.component */ "./src/app/delar-application/esim-ca-report/bulkstatus/bulkstatus.component.ts");
/* harmony import */ var _sim_update_sim_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sim-update/sim-update.component */ "./src/app/delar-application/esim-ca-report/sim-update/sim-update.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/delar-application/esim-ca-report/comment/comment.component.ts");
/* harmony import */ var _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./certificate/certificate.component */ "./src/app/delar-application/esim-ca-report/certificate/certificate.component.ts");
/* harmony import */ var _bsnl_bulk_bsnl_bulk_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bsnl-bulk/bsnl-bulk.component */ "./src/app/delar-application/esim-ca-report/bsnl-bulk/bsnl-bulk.component.ts");
















var routes = [
    {
        path: "",
        component: _esim_ca_report_page__WEBPACK_IMPORTED_MODULE_6__["EsimCaReportPage"],
    },
    {
        path: "add-esim-status-update",
        component: _add_esim_ca_status_update_add_esim_ca_status_update_component__WEBPACK_IMPORTED_MODULE_9__["AddEsimCaStatusUpdateComponent"],
    },
    {
        path: "history-details",
        component: _history_details_history_details_component__WEBPACK_IMPORTED_MODULE_10__["HistoryDetailsComponent"],
    },
    {
        path: "bulkstatus",
        component: _bulkstatus_bulkstatus_component__WEBPACK_IMPORTED_MODULE_11__["BulkstatusComponent"],
    },
    {
        path: "sim-update",
        component: _sim_update_sim_update_component__WEBPACK_IMPORTED_MODULE_12__["SimUpdateComponent"],
    },
    {
        path: "comment",
        component: _comment_comment_component__WEBPACK_IMPORTED_MODULE_13__["CommentComponent"],
    },
    {
        path: "certificate",
        component: _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_14__["CertificateComponent"],
    },
    {
        path: "bsnl-bulk",
        component: _bsnl_bulk_bsnl_bulk_component__WEBPACK_IMPORTED_MODULE_15__["BsnlBulkComponent"],
    },
];
var EsimCaReportPageModule = /** @class */ (function () {
    function EsimCaReportPageModule() {
    }
    EsimCaReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [
                _esim_ca_report_page__WEBPACK_IMPORTED_MODULE_6__["EsimCaReportPage"],
                _add_esim_ca_status_update_add_esim_ca_status_update_component__WEBPACK_IMPORTED_MODULE_9__["AddEsimCaStatusUpdateComponent"],
                _history_details_history_details_component__WEBPACK_IMPORTED_MODULE_10__["HistoryDetailsComponent"],
                _bulkstatus_bulkstatus_component__WEBPACK_IMPORTED_MODULE_11__["BulkstatusComponent"],
                _sim_update_sim_update_component__WEBPACK_IMPORTED_MODULE_12__["SimUpdateComponent"],
                _comment_comment_component__WEBPACK_IMPORTED_MODULE_13__["CommentComponent"],
                _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_14__["CertificateComponent"],
                _bsnl_bulk_bsnl_bulk_component__WEBPACK_IMPORTED_MODULE_15__["BsnlBulkComponent"],
            ],
        })
    ], EsimCaReportPageModule);
    return EsimCaReportPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-ca-report/esim-ca-report.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/delar-application/esim-ca-report/esim-ca-report.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fabbutton {\n  --background: whitesmoke;\n  --background-hover: grey;\n}\n\n.icon {\n  color: black;\n}\n\n.icon:hover {\n  color: white;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.dealer-data {\n  font-size: 14px;\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -11px;\n  right: -2px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -15px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.upperCol {\n  text-align: center;\n  border-radius: 8px;\n  margin: 2px;\n  color: black;\n  font-family: sans-serif;\n  font-size: 13px;\n  text-transform: uppercase;\n}\n\n.upperRow {\n  background: #eeeeee;\n  padding: 1px;\n  border-bottom: 2px solid #7d67f8;\n}\n\n.selectedUpperCol {\n  background: #ebebeb;\n  text-align: center;\n  margin-right: 2px;\n  color: black;\n  font-family: sans-serif;\n  cursor: pointer;\n  font-size: 10px;\n  font-weight: bold;\n  text-transform: uppercase;\n  border-right: 1px solid #b5b5b5;\n  align-self: center;\n  padding-top: 8px;\n  margin-top: 15px;\n}\n\n.selected {\n  margin-top: 20px;\n  color: black;\n  background-color: #ffffff;\n  border-bottom: none;\n  border-top: 2px solid #7d67f8;\n  border-left: 2px solid #7d67f8;\n  border-right: 2px solid #7d67f8;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 11px;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom: none;\n  position: relative;\n  top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jYS1yZXBvcnQvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcZXNpbS1jYS1yZXBvcnRcXGVzaW0tY2EtcmVwb3J0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jYS1yZXBvcnQvZXNpbS1jYS1yZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSx3QkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtBQ0dGOztBREFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0dGOztBRERBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDS0Y7O0FESEE7RUFDRSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUNNRjs7QURKQTtFQUNFLHFCQUFBO0FDT0Y7O0FETEE7RUFDRTtJQUNFLGdCQUFBO0VDUUY7O0VETkE7SUFDRSxVQUFBO0VDU0Y7QUFDRjs7QURQQTtFQUNFO0lBQ0UsU0FBQTtFQ1NGOztFRFBBO0lBQ0UsVUFBQTtFQ1VGO0FBQ0Y7O0FEUkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNVRjs7QURSQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VDV0Y7QUFDRjs7QURUQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDV0Y7QUFDRjs7QURUQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDV0Y7O0FEVEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDWUY7O0FEVkE7RUFDRSxlQUFBO0FDYUY7O0FEWEE7O0VBRUUseUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2NGOztBRFhBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2NGOztBRFhBO0VBQ0UsMkJBQUE7QUNjRjs7QURYQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNjRjs7QURYQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDY0Y7O0FEWEE7RUFDRSxtQkFBQTtBQ2NGOztBRFhBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNjRjs7QURYQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDY0Y7O0FEWkE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2VGOztBRFpBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ2VGIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jYS1yZXBvcnQvZXNpbS1jYS1yZXBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhYmJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogZ3JleTtcclxufVxyXG4uaWNvbiB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5pY29uOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgbWFyZ2luOiA3cHg7XHJcbn1cclxuLnNlbGVjdGFibGUtaW5wdXQge1xyXG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5kZWFsZXItbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLnN1Ym1pdEJ0biB7XHJcbiAgbWFyZ2luOiAwcHggMTRweCAwcHggMHB4O1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAtLWNvbG9yOiAjN2M2OGY4O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcclxuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcclxufVxyXG4uc3VibWl0YnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICM2MjUyZWU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZm9ybS1maWVsZCB7XHJcbiAgICB6b29tOiA4MCU7XHJcbiAgfVxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuLmZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogLTVweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MzIwcHgpIGFuZChtYXgtd2lkdGg6MTAyM3B4KSB7XHJcbiAgLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbjogOHB4IDAgMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDhweCAxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG4ubGFiZWwtaGVhZCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XHJcbn1cclxuLmRlYWxlci1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uZGVhbGVyLWRhdGEge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ucGRmLXdyYXBwZXIsXHJcbi5leGNlbC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZXhjZWxOZXcuc3ZnXCIpIG5vLXJlcGVhdDtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5mYWItYnRuIHtcclxuICAtLWJhY2tncm91bmQ6IGxhdmVuZGVyO1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTFweDtcclxuICByaWdodDogLTJweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5mYWItYnRuOmhvdmVyIHtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICBtYXJnaW4tbGVmdDogLTgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi51cHBlckNvbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW46IDJweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi51cHBlclJvdyB7XHJcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3ZDY3Zjg7XHJcbn1cclxuLnNlbGVjdGVkVXBwZXJDb2wge1xyXG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2I1YjViNTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgIzdkNjdmODtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM3ZDY3Zjg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzdkNjdmODtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMTFweDtcclxuICBib3gtc2hhZG93OiAwcHggLTRweCA3cHggI2MwYjVmZjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogM3B4O1xyXG59XHJcbiIsIi5mYWJidXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogZ3JleTtcbn1cblxuLmljb24ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5pY29uOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIG1hcmdpbjogN3B4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmRlYWxlci1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnN1Ym1pdEJ0biB7XG4gIG1hcmdpbjogMHB4IDE0cHggMHB4IDBweDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogIzdjNjhmODtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjN2M2OGY4O1xuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcbn1cblxuLnN1Ym1pdGJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTVweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4ubGFiZWwtaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XG59XG5cbi5kZWFsZXItbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5kZWFsZXItZGF0YSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnBkZi13cmFwcGVyLFxuLmV4Y2VsLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZXhjZWxOZXcuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmZhYi1idG4ge1xuICAtLWJhY2tncm91bmQ6IGxhdmVuZGVyO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTFweDtcbiAgcmlnaHQ6IC0ycHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5mYWItYnRuOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjYjZiNmI2O1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC04MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnVwcGVyQ29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi51cHBlclJvdyB7XG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gIHBhZGRpbmc6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3ZDY3Zjg7XG59XG5cbi5zZWxlY3RlZFVwcGVyQ29sIHtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYjViNWI1O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5zZWxlY3RlZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzdkNjdmODtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzdkNjdmODtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTFweDtcbiAgYm94LXNoYWRvdzogMHB4IC00cHggN3B4ICNjMGI1ZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-ca-report/esim-ca-report.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/delar-application/esim-ca-report/esim-ca-report.page.ts ***!
  \*************************************************************************/
/*! exports provided: EsimCaReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimCaReportPage", function() { return EsimCaReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _add_esim_ca_status_update_add_esim_ca_status_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-esim-ca-status-update/add-esim-ca-status-update.component */ "./src/app/delar-application/esim-ca-report/add-esim-ca-status-update/add-esim-ca-status-update.component.ts");
/* harmony import */ var _bulkstatus_bulkstatus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bulkstatus/bulkstatus.component */ "./src/app/delar-application/esim-ca-report/bulkstatus/bulkstatus.component.ts");
/* harmony import */ var _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./certificate/certificate.component */ "./src/app/delar-application/esim-ca-report/certificate/certificate.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/delar-application/esim-ca-report/comment/comment.component.ts");
/* harmony import */ var _history_details_history_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./history-details/history-details.component */ "./src/app/delar-application/esim-ca-report/history-details/history-details.component.ts");
/* harmony import */ var _sim_update_sim_update_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sim-update/sim-update.component */ "./src/app/delar-application/esim-ca-report/sim-update/sim-update.component.ts");
/* harmony import */ var _bsnl_bulk_bsnl_bulk_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bsnl-bulk/bsnl-bulk.component */ "./src/app/delar-application/esim-ca-report/bsnl-bulk/bsnl-bulk.component.ts");
















var EsimCaReportPage = /** @class */ (function () {
    function EsimCaReportPage(platform, formBuilder, modalController, ajaxService, commonService, ete) {
        var _this = this;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.ete = ete;
        this.show = false;
        this.showbutton = false;
        this.hideSerialNo = false;
        this.showDealer = false;
        this.showInvoice = false;
        this.data = "";
        this.showSerialNo = false;
        this.showInvoiceNumber = false;
        this.selectedRow = [];
        this.checkbutton = true;
        this.companyId = localStorage.getItem("userName");
        this.arrow = false;
        this.getCalist = function (event) {
            if (event.value)
                _this.CAReportForm.value.CaRequestNo = event.value;
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
                "/esim/getDealerCAInvoice?companyid=" +
                localStorage.getItem("corpId") +
                "&dealer=" +
                localStorage.getItem("userName") +
                "&carequestid=" +
                _this.CAReportForm.value.CaRequestNo;
            _this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
                _this.Invoice = res;
                if (_this.Invoice.length == 0) {
                    _this.showInvoiceNumber = false;
                }
                else {
                    _this.resets();
                    _this.showInvoiceNumber = true;
                }
            });
        };
        this.getinvoicelist = function (event) {
            if (event.value)
                _this.CAReportForm.value.InvoiceNo = event.value;
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
                "/esim/getInvoiceSerial?companyid=" +
                localStorage.getItem("corpId") +
                "&invoiceno=" +
                _this.CAReportForm.value.InvoiceNo;
            _this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
                _this.SerialNo = res;
                if (_this.SerialNo.length == 0) {
                    _this.showSerialNo = false;
                }
                else {
                    _this.reset();
                    _this.showSerialNo = true;
                }
            });
        };
        this.getseriallist = function (event) {
            if (event.value)
                _this.CAReportForm.value.SerialNo = event.value;
        };
        this.a = false;
    }
    EsimCaReportPage.prototype.scrollToTop = function () {
        this.content.scrollToTop(500);
    };
    EsimCaReportPage.prototype.scrollToBottom = function () {
        this.content.scrollToBottom(500);
    };
    EsimCaReportPage.prototype.horiscroll = function () {
        this.myGrid;
        console.log(this.myGrid);
    };
    EsimCaReportPage.prototype.logScrolling = function (ev) {
        if (ev.detail.scrollTop > 2) {
            this.arrow = true;
        }
        if (ev.detail.scrollTop < 2) {
            this.arrow = false;
        }
    };
    EsimCaReportPage.prototype.ngOnInit = function () {
        this.createForm();
    };
    EsimCaReportPage.prototype.clear = function (d) {
        this.CAReportForm.patchValue({
            CaRequestNo: "",
            InvoiceNo: "",
            SerialNo: "",
        });
        this.hideSerialNo = true;
        this.show = false;
        this.showInvoice = false;
        this.showSerialNo = false;
        this.showInvoiceNumber = false;
        if (d == 1) {
            this.SearchData();
        }
    };
    EsimCaReportPage.prototype.reset = function () {
        this.CAReportForm.patchValue({
            SerialNo: "",
        });
    };
    EsimCaReportPage.prototype.resets = function () {
        this.CAReportForm.patchValue({
            InvoiceNo: "",
        });
    };
    EsimCaReportPage.prototype.getcalist = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/esim/getCaRequest?companyid=" +
            localStorage.getItem("corpId") +
            "&dealer=" +
            localStorage.getItem("userName");
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            _this.carequestNo = res;
        });
    };
    EsimCaReportPage.prototype.createForm = function () {
        this.CAReportForm = this.formBuilder.group({
            CaRequestNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            InvoiceNo: [""],
            SerialNo: [""],
        });
    };
    EsimCaReportPage.prototype.SearchData = function (d) {
        var _this = this;
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/esim/getDealerCARequestAll?companyid=" +
            localStorage.getItem("corpId") +
            "&carequestno=" +
            this.CAReportForm.value.CaRequestNo +
            "&invoiceno=" +
            this.CAReportForm.value.InvoiceNo.trim() +
            "&serialno=" +
            this.CAReportForm.value.SerialNo.trim();
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.tableData = res;
            _this.commonService.dismissLoader();
            if (res.length == 0) {
                _this.commonService.showConfirm("CA Report not available");
                _this.show = false;
            }
            else {
                if (d == 1) {
                    _this.commonService.showConfirm(_this.data);
                    _this.data = undefined;
                }
                _this.details = res[0];
                _this.show = true;
                _this.renderer = function (row, column, value) {
                    if (value == "" || null || undefined) {
                        return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                            "--" +
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
                _this.myGrid.clearselection();
                if (localStorage.getItem("corpId") == "apm") {
                    _this.columns = [
                        {
                            text: "Request No",
                            datafield: "carequestid",
                            cellsrenderer: _this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 145,
                        },
                        {
                            text: "VLTD No",
                            datafield: "vltdsno",
                            cellsrenderer: _this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 145,
                        },
                        {
                            text: "Box No",
                            datafield: "serialno",
                            cellsrenderer: _this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 145,
                        },
                        {
                            text: "ICCID No 1",
                            datafield: "iccidno1",
                            cellsrenderer: _this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 150,
                        },
                        {
                            text: "ICCID No 2",
                            datafield: "iccidno2",
                            cellsrenderer: _this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 150,
                        },
                        {
                            text: "IMEI No",
                            datafield: "imei",
                            cellsrenderer: _this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 145,
                        },
                        {
                            text: "SIM 1",
                            datafield: "sim1",
                            cellsrenderer: _this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 120,
                        },
                        {
                            text: "SIM 2",
                            datafield: "sim2",
                            cellsrenderer: _this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 120,
                        },
                        {
                            text: "Slot No",
                            datafield: "slotno",
                            cellsrenderer: _this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 100,
                        },
                        {
                            text: "Validity Requested",
                            datafield: "validityperiod",
                            cellsrenderer: _this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 155,
                        },
                        {
                            text: "CA Requested Date",
                            datafield: "carequestdate",
                            cellsrenderer: _this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 185,
                        },
                        {
                            text: "CA Requested By",
                            datafield: "carequestby",
                            cellsrenderer: _this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 155,
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
                            text: "Card Activated Date",
                            datafield: "cardactivationdate",
                            cellsrenderer: _this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 160,
                        },
                        {
                            text: "Card End Date",
                            datafield: "cardenddate",
                            cellsrenderer: _this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 140,
                        },
                        {
                            text: "Card Status",
                            datafield: "cardstatus",
                            cellsrenderer: _this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 130,
                        },
                        {
                            text: "Comment",
                            datafield: "purcomment",
                            cellsrenderer: _this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 90,
                        },
                        {
                            text: "",
                            datafield: "Status",
                            columntype: "button",
                            cellsalign: "center",
                            align: "center",
                            width: 120,
                            cellsrenderer: function () {
                                return _this.myPlatform == "desktop"
                                    ? "Status Update"
                                    : "<button>Status Update</button>";
                            },
                            buttonclick: function (row) {
                                _this.viewModel();
                            },
                        },
                        // {
                        //   text: "",
                        //   datafield: "certificate",
                        //   columntype: "button",
                        //   cellsalign: "center",
                        //   align: "center",
                        //   width: 120,
                        //   cellsrenderer: (): string => {
                        //     return this.myPlatform == "desktop"
                        //       ? "BSNL Certificate"
                        //       : "<button>Certificate</button>";
                        //   },
                        //   buttonclick: (row): void => {
                        //     this.CertificateModel(row);
                        //   },
                        // },
                        {
                            text: "",
                            columntype: "button",
                            cellsalign: "center",
                            align: "center",
                            width: 120,
                            cellsrenderer: function () {
                                return _this.myPlatform == "desktop"
                                    ? "Comments"
                                    : "<button>Comments</button>";
                            },
                            buttonclick: function (row) {
                                _this.CommentModel(row);
                            },
                        },
                        // {
                        //   text: "",
                        //   datafield: "Simupdate",
                        //   columntype: "button",
                        //   cellsalign: "center",
                        //   align: "center",
                        //   width: 120,
                        //   cellsrenderer: (): string => {
                        //     return this.myPlatform == "desktop"
                        //       ? "Sim Update"
                        //       : "<button>Sim Update</button>";
                        //   },
                        //   buttonclick: (row): void => {
                        //     this.simModel(row);
                        //   },
                        // },
                        {
                            text: "",
                            datafield: "history",
                            columntype: "button",
                            cellsalign: "center",
                            align: "center",
                            width: 120,
                            cellsrenderer: function () {
                                return _this.myPlatform == "desktop"
                                    ? "Status History"
                                    : "<button>Status History</button>";
                            },
                            buttonclick: function (row) {
                                _this.openModel(row);
                            },
                        },
                    ];
                }
            }
        });
    };
    EsimCaReportPage.prototype.viewModel = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isModalOpened, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.selectedRow.cardactivationdate == "")) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.modalController.getTop()];
                    case 1:
                        isModalOpened = _a.sent();
                        if (!!isModalOpened) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.modalController.create({
                                component: _add_esim_ca_status_update_add_esim_ca_status_update_component__WEBPACK_IMPORTED_MODULE_9__["AddEsimCaStatusUpdateComponent"],
                                cssClass: "statusform",
                                componentProps: {
                                    value: this.selectedRow,
                                },
                            })];
                    case 2:
                        modal = _a.sent();
                        console.log(this.selectedRow);
                        modal.onDidDismiss().then(function (data) {
                            _this.selectedRow = undefined;
                            _this.myGrid.clearselection();
                            if (data.data.data == "saved success") {
                                _this.SearchData();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.commonService.showConfirm("Already Activated This IMEI No");
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    EsimCaReportPage.prototype.CertificateModel = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isModalOpened, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.getTop()];
                    case 1:
                        isModalOpened = _a.sent();
                        return [4 /*yield*/, this.modalController.create({
                                component: _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_11__["CertificateComponent"],
                                cssClass: "validityform",
                                componentProps: {
                                    value: this.selectedRow,
                                },
                            })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "Certificate Created Successfully") {
                                _this.SearchData();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EsimCaReportPage.prototype.CommentModel = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isModalOpened, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.getTop()];
                    case 1:
                        isModalOpened = _a.sent();
                        return [4 /*yield*/, this.modalController.create({
                                component: _comment_comment_component__WEBPACK_IMPORTED_MODULE_12__["CommentComponent"],
                                cssClass: "commentform",
                                componentProps: {
                                    value: this.selectedRow,
                                },
                            })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "Esim CA Comment Saved Successfully") {
                                _this.SearchData();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EsimCaReportPage.prototype.simModel = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isModalOpened, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.getTop()];
                    case 1:
                        isModalOpened = _a.sent();
                        if (!!isModalOpened) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.modalController.create({
                                component: _sim_update_sim_update_component__WEBPACK_IMPORTED_MODULE_14__["SimUpdateComponent"],
                                cssClass: "simupdateform",
                                componentProps: {
                                    value: this.selectedRow,
                                },
                            })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "Changed Successfully") {
                                _this.SearchData();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EsimCaReportPage.prototype.openModel = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isModalOpened, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.getTop()];
                    case 1:
                        isModalOpened = _a.sent();
                        if (!!isModalOpened) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.modalController.create({
                                component: _history_details_history_details_component__WEBPACK_IMPORTED_MODULE_13__["HistoryDetailsComponent"],
                                cssClass: "viewserialfrom",
                                componentProps: {
                                    value: this.selectedRow,
                                },
                            })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () { });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EsimCaReportPage.prototype.bulkcertificateModel = function (row) {
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
                                dealerid: this.myGrid["attrSource"]["originaldata"][selectdata[i]].carequestby,
                                imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
                                vltdsno: this.myGrid["attrSource"]["originaldata"][selectdata[i]].vltdsno,
                                createdby: this.myGrid["attrSource"]["originaldata"][selectdata[i]].createdby,
                            });
                        }
                        return [4 /*yield*/, this.modalController.getTop()];
                    case 1:
                        isModalOpened = _a.sent();
                        if (!!isModalOpened) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.modalController.create({
                                component: _bsnl_bulk_bsnl_bulk_component__WEBPACK_IMPORTED_MODULE_15__["BsnlBulkComponent"],
                                cssClass: "validityform",
                                componentProps: {
                                    value: arr,
                                },
                            })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (d) {
                            if (d.data.data == "Certificate Created Successfully") {
                                _this.SearchData(1);
                                _this.data = d.data.data;
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EsimCaReportPage.prototype.bulkstatusModel = function (row) {
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
                                iccidno: this.myGrid["attrSource"]["originaldata"][selectdata[i]].iccidno1,
                                createdby: this.myGrid["attrSource"]["originaldata"][selectdata[i]].createdby,
                            });
                        }
                        return [4 /*yield*/, this.modalController.getTop()];
                    case 1:
                        isModalOpened = _a.sent();
                        if (!!isModalOpened) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.modalController.create({
                                component: _bulkstatus_bulkstatus_component__WEBPACK_IMPORTED_MODULE_10__["BulkstatusComponent"],
                                cssClass: "statusform",
                                componentProps: {
                                    value: arr,
                                },
                            })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (d) {
                            if (d.data.data == "Esim CA Status Saved Successfully") {
                                _this.SearchData(1);
                                _this.data = d.data.data;
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EsimCaReportPage.prototype.myGridOnRowclick = function (event) {
        this.selectedRow = event.args.row.bounddata;
    };
    EsimCaReportPage.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = this.myGrid.getselectedrowindexes();
        var current = this.myGrid.getselectedrowindex();
        if (current != -1) {
            var currentrow = this.myGrid.getrowdata(current);
            // console.log(currentrow, event);
            if (currentrow.cardactivationdate != "") {
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
    EsimCaReportPage.prototype.newfunc = function () {
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
            title: "Device CA Status Update Details",
            data: forExcel,
            headers: Header,
        };
        this.ete.exportExcel(reportData);
    };
    EsimCaReportPage.prototype.ngAfterViewInit = function () {
        this.myGrid.horizontalscrollbarstep(["70"]);
        this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
    };
    EsimCaReportPage.prototype.ionViewWillEnter = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.clear();
        this.getcalist();
        this.SearchData();
    };
    EsimCaReportPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
        { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("selectComponent", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic_selectable__WEBPACK_IMPORTED_MODULE_4__["IonicSelectableComponent"])
    ], EsimCaReportPage.prototype, "selectComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EsimCaReportPage.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EsimCaReportPage.prototype, "content", void 0);
    EsimCaReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-esim-ca-report",
            template: __webpack_require__(/*! raw-loader!./esim-ca-report.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-ca-report/esim-ca-report.page.html"),
            styles: [__webpack_require__(/*! ./esim-ca-report.page.scss */ "./src/app/delar-application/esim-ca-report/esim-ca-report.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"]])
    ], EsimCaReportPage);
    return EsimCaReportPage;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-ca-report/history-details/history-details.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-ca-report/history-details/history-details.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -16px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 30px 11px;\n    padding-right: 20px;\n  }\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.dealer-data {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jYS1yZXBvcnQvaGlzdG9yeS1kZXRhaWxzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGVzaW0tY2EtcmVwb3J0XFxoaXN0b3J5LWRldGFpbHNcXGhpc3RvcnktZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jYS1yZXBvcnQvaGlzdG9yeS1kZXRhaWxzL2hpc3RvcnktZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxxQkFBQTtBQ0FKOztBREdBO0VBQ0k7SUFDSSxnQkFBQTtFQ0FOOztFREdFO0lBQ0ksVUFBQTtFQ0FOO0FBQ0Y7O0FER0E7RUFDSTtJQUNJLFNBQUE7RUNETjs7RURJRTtJQUNJLFVBQUE7RUNETjtBQUNGOztBRElBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUNGTjtBQUNGOztBREtBO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLG1CQUFBO0VDSE47QUFDRjs7QURPQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDTEo7O0FEUUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDTEo7O0FEUUE7RUFDSSxlQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWNhLXJlcG9ydC9oaXN0b3J5LWRldGFpbHMvaGlzdG9yeS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcblxyXG59XHJcblxyXG4uc2VsZWN0YWJsZS1pbnB1dCB7XHJcbiAgICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uc3VibWl0YnRuIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzYyNTJlZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgICAuaW5wdXQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3N1Ym1pdGJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAuZm9ybS1maWVsZCB7XHJcbiAgICAgICAgem9vbTogODAlO1xyXG4gICAgfVxyXG5cclxuICAgICNzdWJtaXRidG4ge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbjogLTE2cHggNXB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MzIwcHgpYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAgIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDAgMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDoxMDI0cHgpIHtcclxuICAgIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4IDExcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5sYWJlbC1oZWFkIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcclxufVxyXG5cclxuLmRlYWxlci1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmRlYWxlci1kYXRhIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufSIsIi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5zdWJtaXRidG4ge1xuICAtLWJhY2tncm91bmQ6ICM2MjUyZWU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC0xNnB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDMwcHggMTFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4ubGFiZWwtaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XG59XG5cbi5kZWFsZXItbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5kZWFsZXItZGF0YSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/esim-ca-report/history-details/history-details.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/delar-application/esim-ca-report/history-details/history-details.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: HistoryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDetailsComponent", function() { return HistoryDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var HistoryDetailsComponent = /** @class */ (function () {
    function HistoryDetailsComponent(formBuilder, modalController, ajaxService, commonService) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.page = [];
    }
    HistoryDetailsComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    HistoryDetailsComponent.prototype.getdatas = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/esim/getEsimCAStatusAll?companyid=" +
            localStorage.getItem("corpId") +
            "&iccidno=" +
            this.value.iccidno1;
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
                    text: "ICCID No 1",
                    datafield: "iccidno1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 145,
                },
                {
                    text: "SIM 1",
                    datafield: "sim1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "Provider 1",
                    datafield: "provider1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "IMSI 1",
                    datafield: "imsi1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "ICCID No 2",
                    datafield: "iccidno2",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 145,
                },
                {
                    text: "SIM 2",
                    datafield: "sim2",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "Provider 2",
                    datafield: "provider2",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "IMSI 2",
                    datafield: "imsi2",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "Validity Requested",
                    datafield: "validityperiod",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "Card Activated Date",
                    datafield: "cardactivationdate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 145,
                },
                {
                    text: "Card End Date",
                    datafield: "cardenddate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 145,
                },
                {
                    text: "Card Status",
                    datafield: "cardstatus",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 135,
                },
                {
                    text: "Comment",
                    datafield: "comment",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
                },
                {
                    text: "Status",
                    datafield: "status",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
                },
                {
                    text: "Created by",
                    datafield: "createdby",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
            ];
        });
    };
    HistoryDetailsComponent.prototype.ngOnInit = function () {
        this.getdatas();
    };
    HistoryDetailsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
    ], HistoryDetailsComponent.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HistoryDetailsComponent.prototype, "value", void 0);
    HistoryDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-history-details",
            template: __webpack_require__(/*! raw-loader!./history-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-ca-report/history-details/history-details.component.html"),
            styles: [__webpack_require__(/*! ./history-details.component.scss */ "./src/app/delar-application/esim-ca-report/history-details/history-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], HistoryDetailsComponent);
    return HistoryDetailsComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-ca-report/sim-update/sim-update.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/esim-ca-report/sim-update/sim-update.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n.form-field {\n  margin: -5px;\n  border-radius: 7px;\n}\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.col-content {\n  text-align: center;\n  align-self: center;\n  font-size: 18px;\n}\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jYS1yZXBvcnQvc2ltLXVwZGF0ZS9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxlc2ltLWNhLXJlcG9ydFxcc2ltLXVwZGF0ZVxcc2ltLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jYS1yZXBvcnQvc2ltLXVwZGF0ZS9zaW0tdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUNDRjtBQUNGO0FERUE7RUFDRTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0RGO0FESUE7RUFDRTtJQUNFLFNBQUE7RUNERjs7RURJQTtJQUNFLFVBQUE7RUNERjtBQUNGO0FESUE7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FDRkY7QURLQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRkY7QURLQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNGRjtBREtBO0VBQ0U7SUFDRSxnQkFBQTtFQ0ZGOztFREtBO0lBQ0UsVUFBQTtFQ0ZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWNhLXJlcG9ydC9zaW0tdXBkYXRlL3NpbS11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweCkgYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDhweCAxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogLTVweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZm9ybS1maWVsZCB7XHJcbiAgICB6b29tOiA4MCU7XHJcbiAgfVxyXG5cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVudC1zdHlsZSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2wtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgbWFyZ2luOiA3cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbn1cclxuIiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDhweCAxcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmNvbnRlbnQtc3R5bGUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBtYXJnaW46IDdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/esim-ca-report/sim-update/sim-update.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/delar-application/esim-ca-report/sim-update/sim-update.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SimUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimUpdateComponent", function() { return SimUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var SimUpdateComponent = /** @class */ (function () {
    function SimUpdateComponent(platform, formBuilder, modalController, ajaxService, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
    }
    SimUpdateComponent.prototype.createForm = function () {
        this.simupdate = this.formBuilder.group({
            vltdsno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sim1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sim2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    SimUpdateComponent.prototype.submitBtn = function () {
        var _this = this;
        var data = {
            vltdsno: this.value.vltdsno,
            sim1: this.simupdate.value.sim1,
            sim2: this.simupdate.value.sim2,
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/esim/updatesimno?vltdsno=" +
            this.simupdate.value.vltdsno +
            "&simno1=" +
            this.simupdate.value.sim1 +
            "&simno2=" +
            this.simupdate.value.sim2 +
            "&changedby=" +
            localStorage.getItem("userName");
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            if (res.message == "Changed Successfully") {
                _this.commonService.showConfirm(res.message);
                _this.modalController.dismiss({
                    data: "Changed Successfully",
                });
            }
            else {
                _this.commonService.showConfirm(res.message);
            }
        });
    };
    SimUpdateComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    SimUpdateComponent.prototype.ngOnInit = function () {
        this.createForm();
        if (Object.keys(this.value).length != 0) {
            console.log(this.value.vltdsno, this.value.sim1, this.value.sim2);
            this.simupdate.patchValue({
                vltdsno: this.value.vltdsno,
                sim1: this.value.sim1,
                sim2: this.value.sim2,
            });
        }
    };
    SimUpdateComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SimUpdateComponent.prototype, "value", void 0);
    SimUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sim-update",
            template: __webpack_require__(/*! raw-loader!./sim-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-ca-report/sim-update/sim-update.component.html"),
            styles: [__webpack_require__(/*! ./sim-update.component.scss */ "./src/app/delar-application/esim-ca-report/sim-update/sim-update.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], SimUpdateComponent);
    return SimUpdateComponent;
}());



/***/ })

}]);
//# sourceMappingURL=esim-ca-report-esim-ca-report-module-es5.js.map