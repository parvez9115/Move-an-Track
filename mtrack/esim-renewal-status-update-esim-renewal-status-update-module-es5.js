(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esim-renewal-status-update-esim-renewal-status-update-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-renewal-status-update/add-esim-renewal-status-update/add-esim-renewal-status-update.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-renewal-status-update/add-esim-renewal-status-update/add-esim-renewal-status-update.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon (click)=\"cancelBtn()\" name=\"arrow-back\" style=\"padding: 10px\" slot=\"start\"></ion-icon>\n    </ion-buttons>\n    <ion-title>Renewal Status Update</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"myPlatform != 'desktop'\" class=\"content-style label-style\">\n  <ion-grid>\n    <ion-row class=\"form-field\">\n      <ion-col size=\"12\" size-sm=\"12\" size-md=\"10\" offset-md=\"1\" size-lg=\"12\" offset-lg=\"0\">\n        <form [formGroup]=\"AddCaStatus\">\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">Rnewal Start Date :</ion-label>\n              <ion-input class=\"label-style\" type=\"date\" [min]=\"minDate\" [max]=\"maxDate\"\n                formControlName=\"cardactivationdate\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row style=\"display: none\">\n            <ion-col>\n              <ion-label class=\"col-content\">Renewal End Date :</ion-label>\n              <ion-input class=\"label-style\" type=\"date\" formControlName=\"cardenddate\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">Card Status :</ion-label>\n              <ion-input class=\"label-style\" type=\"text\" placeholder=\"Enter the Card Status\" disabled\n                formControlName=\"cardstatus\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">Comments :</ion-label>\n              <textarea class=\"comment\" type=\"text\" placeholder=\"Enter the Comments\"\n                formControlName=\"comment\"></textarea>\n            </ion-col>\n          </ion-row>\n        </form>\n\n        <ion-row class=\"content-style\">\n          <ion-col style=\"text-align: center !important; padding: 20px\">\n            <ion-button class=\"button\" type=\"submit\" [disabled]=\"!AddCaStatus.valid\" (click)=\"edit()\">Submit\n            </ion-button>\n            <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\">Cancel</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf=\"myPlatform == 'desktop'\" class=\"content-style label-style\">\n  <ion-row>\n    <ion-col>\n      <form [formGroup]=\"AddCaStatus\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Renewal Start Date :</ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" type=\"date\" [min]=\"minDate\" [max]=\"maxDate\"\n                  formControlName=\"cardactivationdate\"></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"display: none\" class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Renewal End Date :\n              </ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" type=\"date\" formControlName=\"cardenddate\"></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\"> Card Status : </ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" type=\"text\" disabled placeholder=\"Enter the Card Status\"\n                  formControlName=\"cardstatus\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\"> Comments : </ion-col>\n              <ion-col size=\"7\">\n                <textarea class=\"comment\" type=\"text\" placeholder=\"Enter the Comments\"\n                  formControlName=\"comment\"></textarea>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 20px\">\n          <ion-button class=\"button\" type=\"submit\" [disabled]=\"!AddCaStatus.valid\" (click)=\"edit()\">Submit\n          </ion-button>\n          <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\">Cancel</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-renewal-status-update/comment/comment.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-renewal-status-update/comment/comment.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"wrapper-container\">\n    <ion-col>\n      <form [formGroup]=\"commentForm\">\n        <ion-row class=\"form-field\">\n          <ion-col>\n            <ion-row>\n              <ion-col size=\"4\" style=\"align-self: center; text-align: center\">\n                <ion-label class=\"col-content\">Comment :</ion-label></ion-col\n              >\n              <ion-col size=\"8\">\n                <textarea\n                  class=\"comment\"\n                  type=\"text\"\n                  placeholder=\"Enter the Comments\"\n                  formControlName=\"comment\"\n                ></textarea>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col style=\"text-align: center; padding: 15px\">\n                <ion-button\n                  (click)=\"submitBtn()\"\n                  [disabled]=\"!commentForm.valid\"\n                  >Submit</ion-button\n                >\n                <ion-button type=\"submit\" (click)=\"cancelBtn()\"\n                  >Cancel</ion-button\n                >\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"padding: 5px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        [enablebrowserselection]=\"true\"\n        [theme]=\"'material'\"\n        [width]=\"'99.5%'\"\n        [autoheight]=\"true\"\n        [height]=\"593.8\"\n        [source]=\"dataAdapter\"\n        [pagesizeoptions]=\"page\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: left !important;\n          margin: auto;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-renewal-status-update/esim-renewal-status-update.page.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-renewal-status-update/esim-renewal-status-update.page.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons\n      *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\"\n      slot=\"start\"\n    >\n      <ion-icon\n        routerLink=\"/tabs-login/esim-dashboard\"\n        name=\"arrow-back\"\n        style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-row class=\"toolbar\">\n      <ion-title *ngIf=\"myPlatform != 'desktop'\"\n        >Renewal Status Update</ion-title\n      >\n      <ion-title *ngIf=\"myPlatform == 'desktop'\"\n        >Device Status Update Details</ion-title\n      >\n      <ion-col\n        size=\"4\"\n        *ngIf=\"myPlatform == 'desktop'\"\n        style=\"text-align: right\"\n      >\n        <ion-button class=\"submitBtn\" size=\"small\" (click)=\"newfunc()\"\n          >Export</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <ion-grid>\n    <ion-row *ngIf=\"myPlatform == 'desktop'\" class=\"upperRow\">\n      <ion-col\n        [ngClass]=\"{ selectedUpperCol: 'true' }\"\n        routerLink=\"/tabs-login/esim-ca-report\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Ca Status Update</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{ selectedUpperCol: 'true' }\"\n        routerLink=\"/tabs-login/esim-renewal-status-update\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Renewal Status Update</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{ selectedUpperCol: 'true' }\"\n        routerLink=\"/tabs-login/device-topup-status-update\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Topup Status Update</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{ selectedUpperCol: 'true' }\"\n        routerLink=\"/tabs-login/device-extend-status-update\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Extend 1 Yr Status Update</ion-label>\n      </ion-col>\n      <ion-col\n      [ngClass]=\"{ selectedUpperCol: 'true' }\"\n      routerLink=\"/tabs-login/esim-bsnl-certificate\"\n      routerLinkActive=\"selected\"\n      size=\"1.9\"\n    >\n      <ion-label>BSNL Certificate Request</ion-label>\n    </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"myPlatform != 'desktop'\">\n      <ion-col class=\"form-field\">\n        <ion-row class=\"form-field\">\n          <ion-col>\n            <ion-row class=\"upperRows\">\n              <ion-col\n                [ngClass]=\"{selectedUpperCols:'true',select:renewal == 1  }\"\n                (click)=\"SearchData(2)\"\n                size=\"2.4\"\n              >\n                <ion-label>Renewal 1</ion-label>\n              </ion-col>\n              <ion-col\n                [ngClass]=\"{selectedUpperCols:'true',select:renewal == 2}\"\n                (click)=\"SearchData(2)\"\n                size=\"2.4\"\n              >\n                <ion-label>Renewal 2</ion-label>\n              </ion-col>\n              <ion-col\n                [ngClass]=\"{selectedUpperCols:'true',select:renewal == 3}\"\n                (click)=\"SearchData(2)\"\n                size=\"2.4\"\n              >\n                <ion-label>Renewal 3</ion-label>\n              </ion-col>\n              <ion-col\n                [ngClass]=\"{selectedUpperCols:'true',select:renewal == 4}\"\n                (click)=\"SearchData(2)\"\n                size=\"2.4\"\n              >\n                <ion-label>Renewal 4</ion-label>\n              </ion-col>\n              <ion-col\n                [ngClass]=\"{selectedUpperCols:'true',select:renewal == 5}\"\n                (click)=\"SearchData(2)\"\n                size=\"2.4\"\n              >\n                <ion-label>Renewal 5</ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"myPlatform == 'desktop'\" class=\"upperRow\">\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true',selected:renewal == 1  }\"\n        (click)=\"SearchData(1)\"\n        size=\"1.2\"\n      >\n        <ion-label>Renewal 1</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true',selected:renewal == 2}\"\n        (click)=\"SearchData(2)\"\n        size=\"1.2\"\n      >\n        <ion-label>Renewal 2</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true',selected:renewal == 3}\"\n        (click)=\"SearchData(3)\"\n        size=\"1.2\"\n      >\n        <ion-label>Renewal 3</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true',selected:renewal == 4}\"\n        (click)=\"SearchData(4)\"\n        size=\"1.2\"\n      >\n        <ion-label>Renewal 4</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{selectedUpperCol:'true',selected:renewal == 5}\"\n        (click)=\"SearchData(5)\"\n        size=\"1.2\"\n      >\n        <ion-label>Renewal 5</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"wrapper-container\">\n      <ion-col size=\"12\">\n        <ion-row *ngIf=\"myPlatform != 'desktop'\">\n          <ion-col class=\"form-field\">\n            <ion-row>\n              <ion-col>\n                <ion-label>\n                  <span class=\"dealer-label\">Total Selected Row :</span>\n                  <span class=\"dealer-data\">{{selectedRow?.length}}</span>\n                </ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col style=\"text-align: end\">\n                <ion-button\n                  class=\"submitbtn\"\n                  (click)=\"bulkstatusModel()\"\n                  [disabled]=\"checkbutton\"\n                  >Status Update</ion-button\n                >\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"myPlatform == 'desktop'\">\n          <ion-col style=\"margin: 10px 0px 0px\">\n            <ion-label>\n              <span class=\"dealer-label\">Total Selected Row :</span>\n              <span class=\"dealer-data\">{{selectedRow?.length}}</span>\n            </ion-label>\n          </ion-col>\n          <ion-col style=\"margin: 10px 0px 0px; text-align: end\">\n            <ion-button\n              class=\"submitbtn\"\n              (click)=\"bulkstatusModel()\"\n              [disabled]=\"checkbutton\"\n              >Status Update</ion-button\n            >\n          </ion-col>\n        </ion-row>\n\n        <jqxGrid\n          #myGrid\n          [selectionmode]=\"'checkbox'\"\n          (onRowclick)=\"myGridOnRowclick($event)\"\n          (onRowselect)=\"myGridOnRowSelect($event)\"\n          (onRowunselect)=\"myGridOnRowSelect($event)\"\n          [theme]=\"'material'\"\n          [enablebrowserselection]=\"true\"\n          [width]=\"'99.5%'\"\n          [autoheight]=\"true\"\n          [source]=\"dataAdapter\"\n          [columns]=\"columns\"\n          [filterable]=\"true\"\n          [sortable]=\"true\"\n          [columnsresize]=\"true\"\n          [enabletooltips]=\"true\"\n          [pageable]=\"true\"\n          [showfilterrow]=\"true\"\n          style=\"\n            font-size: 16px;\n            text-align: center !important;\n            margin: auto;\n            cursor: pointer;\n          \"\n          [columns]=\"columns\"\n        >\n        </jqxGrid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-fab\n    *ngIf=\"arrow\"\n    style=\"margin-right: 1%; margin-bottom: 9%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToTop()\">\n      <ion-icon class=\"icon\" name=\"arrow-up\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab\n    *ngIf=\"arrow\"\n    style=\"margin-right: 1%; margin-bottom: 5%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToBottom()\">\n      <ion-icon class=\"icon\" name=\"arrow-down\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-renewal-status-update/renewal-bulkstatus/renewal-bulkstatus.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-renewal-status-update/renewal-bulkstatus/renewal-bulkstatus.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon (click)=\"cancelBtn()\" name=\"arrow-back\" style=\"padding: 10px\" slot=\"start\"></ion-icon>\n    </ion-buttons>\n    <ion-title>Renewal Status Update</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"myPlatform != 'desktop'\" class=\"content-style label-style\">\n  <ion-grid>\n    <ion-row class=\"form-field\">\n      <ion-col size=\"12\" size-sm=\"12\" size-md=\"10\" offset-md=\"1\" size-lg=\"12\" offset-lg=\"0\">\n        <form [formGroup]=\"bulkStatusform\">\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">Renewal Start Date :</ion-label>\n              <ion-input class=\"label-style\" type=\"date\" [min]=\"minDate\" [max]=\"maxDate\"\n                formControlName=\"cardactivationdate\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row style=\"display: none\">\n            <ion-col>\n              <ion-label class=\"col-content\">Renewal End Date :</ion-label>\n              <ion-input class=\"label-style\" type=\"date\" formControlName=\"cardenddate\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">Card Status :</ion-label>\n              <ion-input class=\"label-style\" type=\"text\" disabled placeholder=\"Enter the Card Status\"\n                formControlName=\"cardstatus\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">Comments :</ion-label>\n              <textarea class=\"comment\" type=\"text\" placeholder=\"Enter the Comments\"\n                formControlName=\"comment\"></textarea>\n            </ion-col>\n          </ion-row>\n        </form>\n\n        <ion-row class=\"content-style\">\n          <ion-col style=\"text-align: center !important; padding: 20px\">\n            <ion-button class=\"button\" type=\"submit\" [disabled]=\"!bulkStatusform.valid || button\"\n              (click)=\"submit()\">Submit\n            </ion-button>\n            <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\">Cancel</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf=\"myPlatform == 'desktop'\" class=\"content-style label-style\">\n  <ion-row>\n    <ion-col>\n      <form [formGroup]=\"bulkStatusform\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Renewal Start Date :\n              </ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" type=\"date\" [min]=\"minDate\" [max]=\"maxDate\"\n                  formControlName=\"cardactivationdate\"></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"display: none\" class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Renewal End Date :\n              </ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" type=\"date\" formControlName=\"cardenddate\"></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\"> Card Status : </ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" type=\"text\" disabled placeholder=\"Enter the Card Status\"\n                  formControlName=\"cardstatus\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\"> Comments : </ion-col>\n              <ion-col size=\"7\">\n                <textarea class=\"comment\" type=\"text\" placeholder=\"Enter the Comments\"\n                  formControlName=\"comment\"></textarea>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 20px\">\n          <ion-button class=\"button\" type=\"submit\" [disabled]=\"!bulkStatusform.valid\" (click)=\"submit()\">Submit\n          </ion-button>\n          <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\">Cancel</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-renewal-status-update/renewal-history-details/renewal-history-details.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-renewal-status-update/renewal-history-details/renewal-history-details.component.html ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>History Status</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row style=\"padding: 10px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        [theme]=\"'material'\"\n        [width]=\"'99.5%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [columns]=\"columns\"\n        [filterable]=\"true\"\n        [sortable]=\"true\"\n        [columnsresize]=\"true\"\n        [enablebrowserselection]=\"true\"\n        [pagesizeoptions]=\"page\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-renewal-status-update/sim-update/sim-update.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-renewal-status-update/sim-update/sim-update.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Sim Status Update</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"wrapper-container\">\n    <ion-col>\n      <form [formGroup]=\"simupdate\">\n        <ion-row class=\"form-field\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Vltd No : </ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  formControlName=\"vltdsno\"\n                  class=\"input\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Imei No : </ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  formControlName=\"imeino\"\n                  class=\"input\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Sim 1 :</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  type=\"text\"\n                  formControlName=\"sim1\"\n                  placeholder=\"Enter the Sim No\"\n                  class=\"input\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Sim 2 :</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  type=\"text\"\n                  formControlName=\"sim2\"\n                  placeholder=\"Enter the Sim No\"\n                  class=\"input\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 20px\">\n          <ion-button\n            class=\"button\"\n            type=\"submit\"\n            [disabled]=\"!simupdate.valid || button\"\n            (click)=\"submitBtn()\"\n          >\n            Submit\n          </ion-button>\n          <ion-button class=\"button\" type=\"submit\" (click)=\"cancelBtn()\">\n            Cancel\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/esim-renewal-status-update/add-esim-renewal-status-update/add-esim-renewal-status-update.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-renewal-status-update/add-esim-renewal-status-update/add-esim-renewal-status-update.component.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  background-color: #7c68f8;\n}\n\n.label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 25px;\n}\n\n.comment {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  height: 169px;\n  width: 100%;\n  padding: 15px;\n}\n\n.diable-style {\n  background: white;\n  line-height: 18px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.total-data {\n  margin-top: 2%;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #FFEBCD;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.file-input-container input[type=file] {\n  display: none;\n}\n\n.file {\n  margin-left: 8%;\n  border: 1px solid #3d6cec;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.documents {\n  margin: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1yZW5ld2FsLXN0YXR1cy11cGRhdGUvYWRkLWVzaW0tcmVuZXdhbC1zdGF0dXMtdXBkYXRlL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGVzaW0tcmVuZXdhbC1zdGF0dXMtdXBkYXRlXFxhZGQtZXNpbS1yZW5ld2FsLXN0YXR1cy11cGRhdGVcXGFkZC1lc2ltLXJlbmV3YWwtc3RhdHVzLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1yZW5ld2FsLXN0YXR1cy11cGRhdGUvYWRkLWVzaW0tcmVuZXdhbC1zdGF0dXMtdXBkYXRlL2FkZC1lc2ltLXJlbmV3YWwtc3RhdHVzLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FESUk7RUFFSSxhQUFBO0FDRlI7O0FETUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUNISjs7QURNQTtFQUNJO0lBQ0ksU0FBQTtFQ0hOOztFRE1FO0lBQ0ksVUFBQTtFQ0hOO0FBQ0Y7O0FETUE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FDSko7O0FET0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tcmVuZXdhbC1zdGF0dXMtdXBkYXRlL2FkZC1lc2ltLXJlbmV3YWwtc3RhdHVzLXVwZGF0ZS9hZGQtZXNpbS1yZW5ld2FsLXN0YXR1cy11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdjNjhmOFxyXG59XHJcblxyXG4ubGFiZWwtc3R5bGUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxufVxyXG5cclxuLmNvbW1lbnQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgICBoZWlnaHQ6IDE2OXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4XHJcbn1cclxuXHJcbi5kaWFibGUtc3R5bGUge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG5cclxuLmNvbnRlbnQtc3R5bGUge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxufVxyXG5cclxuLnRvdGFsLWRhdGEge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbi5jb2wtY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4jYWRkLWljb24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkZFQkNEO1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIC0tYmFja2dyb3VuZDogIzdjNjhmODtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcblxyXG59XHJcblxyXG4uc2VsZWN0YWJsZS1pbnB1dCB7XHJcbiAgICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uZmlsZS1pbnB1dC1jb250YWluZXIge1xyXG4gICAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmlsZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjEsIDEwOCwgMjM2KTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAuZm9ybS1maWVsZCB7XHJcbiAgICAgICAgem9vbTogODAlO1xyXG4gICAgfVxyXG5cclxuICAgICNzdWJtaXRidG4ge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbjogLTVweCA1cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4uZG9jdW1lbnRzIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsIi5oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YzY4Zjg7XG59XG5cbi5sYWJlbC1zdHlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG4uY29tbWVudCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGhlaWdodDogMTY5cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uZGlhYmxlLXN0eWxlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uY29udGVudC1zdHlsZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udG90YWwtZGF0YSB7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG4uY29sLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI2FkZC1pY29uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZFQkNEO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICAtLWJhY2tncm91bmQ6ICM3YzY4Zjg7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5maWxlLWlucHV0LWNvbnRhaW5lciBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZpbGUge1xuICBtYXJnaW4tbGVmdDogOCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZDZjZWM7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmRvY3VtZW50cyB7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-renewal-status-update/add-esim-renewal-status-update/add-esim-renewal-status-update.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-renewal-status-update/add-esim-renewal-status-update/add-esim-renewal-status-update.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: AddEsimRenewalStatusUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEsimRenewalStatusUpdateComponent", function() { return AddEsimRenewalStatusUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var AddEsimRenewalStatusUpdateComponent = /** @class */ (function () {
    function AddEsimRenewalStatusUpdateComponent(platform, formBuilder, modalController, ajaxService, alertController, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.alertController = alertController;
        this.commonService = commonService;
        this.today = new Date();
    }
    AddEsimRenewalStatusUpdateComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    AddEsimRenewalStatusUpdateComponent.prototype.createForm = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        var endDate = now.getFullYear() + 1 + "-" + month + "-" + day;
        this.AddCaStatus = this.formBuilder.group({
            cardactivationdate: [today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cardenddate: [endDate],
            cardstatus: ["Active", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            comment: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    AddEsimRenewalStatusUpdateComponent.prototype.edit = function () {
        var _this = this;
        var data = {
            renewalno: this.renewal.toString(),
            iccidno: this.value.iccidno1,
            cardactivationdate: this.AddCaStatus.value.cardactivationdate,
            cardenddate: "",
            cardstatus: this.AddCaStatus.value.cardstatus,
            comment: this.AddCaStatus.value.comment,
            createdby: this.value.createdby,
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/esim/saveEsimRenewalStatus";
        this.ajaxService
            .ajaxPostWithBody(url, JSON.stringify(data))
            .subscribe(function (res) {
            if (res.message == "Esim Renewal Status Saved Successfully") {
                _this.commonService.showConfirm(res.message);
                _this.modalController.dismiss({ data: "saved success" });
            }
            else {
                _this.commonService.showConfirm(res.message);
            }
        });
    };
    AddEsimRenewalStatusUpdateComponent.prototype.ngOnInit = function () {
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
        sevenDaysAgo.setDate(today.getDate() - 30);
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
    AddEsimRenewalStatusUpdateComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddEsimRenewalStatusUpdateComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddEsimRenewalStatusUpdateComponent.prototype, "renewal", void 0);
    AddEsimRenewalStatusUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-add-esim-renewal-status-update",
            template: __webpack_require__(/*! raw-loader!./add-esim-renewal-status-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-renewal-status-update/add-esim-renewal-status-update/add-esim-renewal-status-update.component.html"),
            styles: [__webpack_require__(/*! ./add-esim-renewal-status-update.component.scss */ "./src/app/delar-application/esim-renewal-status-update/add-esim-renewal-status-update/add-esim-renewal-status-update.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], AddEsimRenewalStatusUpdateComponent);
    return AddEsimRenewalStatusUpdateComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-renewal-status-update/comment/comment.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/delar-application/esim-renewal-status-update/comment/comment.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n.form-field {\n  margin: -5px;\n  border-radius: 7px;\n}\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n.comment {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  height: 100px;\n  width: 100%;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1yZW5ld2FsLXN0YXR1cy11cGRhdGUvY29tbWVudC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxlc2ltLXJlbmV3YWwtc3RhdHVzLXVwZGF0ZVxcY29tbWVudFxcY29tbWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1yZW5ld2FsLXN0YXR1cy11cGRhdGUvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUNDRjtBQUNGO0FERUE7RUFDRTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0RGO0FESUE7RUFDRTtJQUNFLFNBQUE7RUNERjs7RURJQTtJQUNFLFVBQUE7RUNERjtBQUNGO0FESUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0ZGO0FES0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLXJlbmV3YWwtc3RhdHVzLXVwZGF0ZS9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweCkgYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDhweCAxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogLTVweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZm9ybS1maWVsZCB7XHJcbiAgICB6b29tOiA4MCU7XHJcbiAgfVxyXG5cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uY29sLWNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmNvbW1lbnQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuIiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDhweCAxcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmNvbC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jb21tZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/esim-renewal-status-update/comment/comment.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/delar-application/esim-renewal-status-update/comment/comment.component.ts ***!
  \*******************************************************************************************/
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
            renewalno: this.renewal.toString(),
            iccidno: this.value.iccidno1.toString(),
            comment: this.commentForm.value.comment.toString(),
            createdby: this.value.createdby.toString(),
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/saveEsimRenewalComment";
        this.ajaxService
            .ajaxPostWithString(url, JSON.stringify(data))
            .subscribe(function (res) {
            if (JSON.parse(res).message == "Esim Renewal Comment Saved Successfully") {
                _this.commonService.showConfirm("Esim Renewal Comment Saved Successfully");
                _this.clear();
                _this.modalController.dismiss({
                    data: "Esim Renewal Comment Saved Successfully",
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
                return ('<span style="white-space: normal;overflow: hidden; text-overflow: ellipsis;line-height:32px;font-size:17px;color:darkblue;margin:auto;padding-left: 5px;">' +
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
                height: "auto",
                overflow: scroll,
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommentComponent.prototype, "renewal", void 0);
    CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-comment",
            template: __webpack_require__(/*! raw-loader!./comment.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-renewal-status-update/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.scss */ "./src/app/delar-application/esim-renewal-status-update/comment/comment.component.scss")]
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

/***/ "./src/app/delar-application/esim-renewal-status-update/esim-renewal-status-update.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-renewal-status-update/esim-renewal-status-update.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: EsimRenewalStatusUpdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimRenewalStatusUpdatePageModule", function() { return EsimRenewalStatusUpdatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _esim_renewal_status_update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esim-renewal-status-update.page */ "./src/app/delar-application/esim-renewal-status-update/esim-renewal-status-update.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _add_esim_renewal_status_update_add_esim_renewal_status_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-esim-renewal-status-update/add-esim-renewal-status-update.component */ "./src/app/delar-application/esim-renewal-status-update/add-esim-renewal-status-update/add-esim-renewal-status-update.component.ts");
/* harmony import */ var _renewal_bulkstatus_renewal_bulkstatus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./renewal-bulkstatus/renewal-bulkstatus.component */ "./src/app/delar-application/esim-renewal-status-update/renewal-bulkstatus/renewal-bulkstatus.component.ts");
/* harmony import */ var _renewal_history_details_renewal_history_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./renewal-history-details/renewal-history-details.component */ "./src/app/delar-application/esim-renewal-status-update/renewal-history-details/renewal-history-details.component.ts");
/* harmony import */ var _sim_update_sim_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sim-update/sim-update.component */ "./src/app/delar-application/esim-renewal-status-update/sim-update/sim-update.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/delar-application/esim-renewal-status-update/comment/comment.component.ts");
/* harmony import */ var angular2_qrcode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-qrcode */ "./node_modules/angular2-qrcode/lib/angular2-qrcode.js");















var routes = [
    {
        path: "",
        component: _esim_renewal_status_update_page__WEBPACK_IMPORTED_MODULE_6__["EsimRenewalStatusUpdatePage"],
    },
    {
        path: "add-esim-renewal-status-update",
        component: _add_esim_renewal_status_update_add_esim_renewal_status_update_component__WEBPACK_IMPORTED_MODULE_9__["AddEsimRenewalStatusUpdateComponent"],
    },
    {
        path: "renewal-bulkstatus",
        component: _renewal_bulkstatus_renewal_bulkstatus_component__WEBPACK_IMPORTED_MODULE_10__["RenewalBulkstatusComponent"],
    },
    {
        path: "renewal-history-details",
        component: _renewal_history_details_renewal_history_details_component__WEBPACK_IMPORTED_MODULE_11__["RenewalHistoryDetailsComponent"],
    },
    {
        path: "sim-update",
        component: _sim_update_sim_update_component__WEBPACK_IMPORTED_MODULE_12__["SimUpdateComponent"],
    },
    {
        path: "comment",
        component: _comment_comment_component__WEBPACK_IMPORTED_MODULE_13__["CommentComponent"],
    },
];
var EsimRenewalStatusUpdatePageModule = /** @class */ (function () {
    function EsimRenewalStatusUpdatePageModule() {
    }
    EsimRenewalStatusUpdatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                angular2_qrcode__WEBPACK_IMPORTED_MODULE_14__["QRCodeModule"],
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [
                _esim_renewal_status_update_page__WEBPACK_IMPORTED_MODULE_6__["EsimRenewalStatusUpdatePage"],
                _add_esim_renewal_status_update_add_esim_renewal_status_update_component__WEBPACK_IMPORTED_MODULE_9__["AddEsimRenewalStatusUpdateComponent"],
                _renewal_bulkstatus_renewal_bulkstatus_component__WEBPACK_IMPORTED_MODULE_10__["RenewalBulkstatusComponent"],
                _renewal_history_details_renewal_history_details_component__WEBPACK_IMPORTED_MODULE_11__["RenewalHistoryDetailsComponent"],
                _sim_update_sim_update_component__WEBPACK_IMPORTED_MODULE_12__["SimUpdateComponent"],
                _comment_comment_component__WEBPACK_IMPORTED_MODULE_13__["CommentComponent"],
            ],
        })
    ], EsimRenewalStatusUpdatePageModule);
    return EsimRenewalStatusUpdatePageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-renewal-status-update/esim-renewal-status-update.page.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-renewal-status-update/esim-renewal-status-update.page.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fabbutton {\n  --background: whitesmoke;\n  --background-hover: grey;\n}\n\n.icon {\n  color: black;\n}\n\n.icon:hover {\n  color: white;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.dealer-data {\n  font-size: 14px;\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -11px;\n  right: -2px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -15px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.upperRows {\n  background: #ebebeb;\n  padding: 1px;\n  border-bottom: 2px solid #7d67f8;\n}\n\n.selectedUpperCols {\n  background: #ebebeb;\n  color: black;\n  font-family: sans-serif;\n  cursor: pointer;\n  text-align: center;\n  font-size: 12px;\n  text-transform: uppercase;\n  border-right: 1px solid #b5b5b5;\n}\n\n.select {\n  color: black;\n  background-color: #ffffff;\n  border-top: 2px solid #7d67f8;\n  border-left: 2px solid #7d67f8;\n  border-right: 2px solid #7d67f8;\n  font-size: 12px;\n  font-weight: bold;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  position: relative;\n  top: 3px;\n}\n\n.upperCol {\n  text-align: center;\n  border-radius: 8px;\n  margin: 2px;\n  color: black;\n  font-family: sans-serif;\n  font-size: 13px;\n  text-transform: uppercase;\n}\n\n.upperRow {\n  background: #eeeeee;\n  padding: 1px;\n  border-bottom: 2px solid #7d67f8;\n}\n\n.selectedUpperCol {\n  background: #ebebeb;\n  text-align: center;\n  margin-right: 2px;\n  color: black;\n  font-family: sans-serif;\n  cursor: pointer;\n  font-size: 10px;\n  text-transform: uppercase;\n  border-right: 1px solid #b5b5b5;\n  align-self: center;\n  padding-top: 8px;\n  margin-top: 15px;\n}\n\n.selected {\n  color: black;\n  background-color: #ffffff;\n  border-bottom: 2px solid #ffffff;\n  border-top: 2px solid #7d67f8;\n  border-left: 2px solid #7d67f8;\n  border-right: 2px solid #7d67f8;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 10px;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  position: relative;\n  top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1yZW5ld2FsLXN0YXR1cy11cGRhdGUvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcZXNpbS1yZW5ld2FsLXN0YXR1cy11cGRhdGVcXGVzaW0tcmVuZXdhbC1zdGF0dXMtdXBkYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1yZW5ld2FsLXN0YXR1cy11cGRhdGUvZXNpbS1yZW5ld2FsLXN0YXR1cy11cGRhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSx3QkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtBQ0dGOztBREFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0dGOztBREFBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDSUY7O0FERkE7RUFDRSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUNLRjs7QURIQTtFQUNFLHFCQUFBO0FDTUY7O0FESEE7RUFDRTtJQUNFLGdCQUFBO0VDTUY7O0VESEE7SUFDRSxVQUFBO0VDTUY7QUFDRjs7QURIQTtFQUNFO0lBQ0UsU0FBQTtFQ0tGOztFREZBO0lBQ0UsVUFBQTtFQ0tGO0FBQ0Y7O0FERkE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDSUY7O0FEREE7RUFDRTtJQUNFLFlBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQ0lGO0FBQ0Y7O0FEREE7RUFDRTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQ0dGO0FBQ0Y7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBREFBOztFQUVFLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNHRjs7QURBQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNHRjs7QURBQTtFQUNFLDJCQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0dGOztBREFBO0VBQ0UsbUJBQUE7QUNHRjs7QURDQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDRUY7O0FEQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FDR0Y7O0FEREE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNJRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDSUY7O0FEREE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQ0lGOztBRERBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSUY7O0FERkE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tcmVuZXdhbC1zdGF0dXMtdXBkYXRlL2VzaW0tcmVuZXdhbC1zdGF0dXMtdXBkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWJidXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6IGdyZXk7XHJcbn1cclxuLmljb24ge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uaWNvbjpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIG1hcmdpbjogN3B4O1xyXG59XHJcblxyXG4uc2VsZWN0YWJsZS1pbnB1dCB7XHJcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmRlYWxlci1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uc3VibWl0QnRuIHtcclxuICBtYXJnaW46IDBweCAxNHB4IDBweCAwcHg7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIC0tY29sb3I6ICM3YzY4Zjg7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjN2M2OGY4O1xyXG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xyXG59XHJcbi5zdWJtaXRidG4ge1xyXG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIHpvb206IDgwJTtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IC01cHggNXB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjMyMHB4KSBhbmQobWF4LXdpZHRoOjEwMjNweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDhweCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MTAyNHB4KSB7XHJcbiAgLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogOHB4IDFweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubGFiZWwtaGVhZCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XHJcbn1cclxuXHJcbi5kZWFsZXItbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5kZWFsZXItZGF0YSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5wZGYtd3JhcHBlcixcclxuLmV4Y2VsLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9leGNlbE5ldy5zdmdcIikgbm8tcmVwZWF0O1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmZhYi1idG4ge1xyXG4gIC0tYmFja2dyb3VuZDogbGF2ZW5kZXI7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xMXB4O1xyXG4gIHJpZ2h0OiAtMnB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxufVxyXG5cclxuLmZhYi1idG46aG92ZXIge1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2I2YjZiNjtcclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLy8gTW9iaWxlXHJcbi51cHBlclJvd3Mge1xyXG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbiAgcGFkZGluZzogMXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN2Q2N2Y4O1xyXG59XHJcbi5zZWxlY3RlZFVwcGVyQ29scyB7XHJcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYjViNWI1O1xyXG59XHJcbi5zZWxlY3Qge1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgIzdkNjdmODtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM3ZDY3Zjg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzdkNjdmODtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IC00cHggN3B4ICNjMGI1ZmY7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAzcHg7XHJcbn1cclxuXHJcbi51cHBlckNvbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW46IDJweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi51cHBlclJvdyB7XHJcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3ZDY3Zjg7XHJcbn1cclxuXHJcbi5zZWxlY3RlZFVwcGVyQ29sIHtcclxuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiNWI1YjU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uc2VsZWN0ZWQge1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZmZmZjtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgIzdkNjdmODtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM3ZDY3Zjg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzdkNjdmODtcclxuICAvLyBib3JkZXItYm90dG9tOiAycHggc29saWQgIzdkNjdmODtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3gtc2hhZG93OiAwcHggLTRweCA3cHggI2MwYjVmZjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDNweDtcclxufVxyXG4iLCIuZmFiYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGdyZXk7XG59XG5cbi5pY29uIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaWNvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBtYXJnaW46IDdweDtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5kZWFsZXItbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zdWJtaXRCdG4ge1xuICBtYXJnaW46IDBweCAxNHB4IDBweCAwcHg7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XG59XG5cbi5zdWJtaXRidG4ge1xuICAtLWJhY2tncm91bmQ6ICM2MjUyZWU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4ubGFiZWwtaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XG59XG5cbi5kZWFsZXItbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5kZWFsZXItZGF0YSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnBkZi13cmFwcGVyLFxuLmV4Y2VsLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZXhjZWxOZXcuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmZhYi1idG4ge1xuICAtLWJhY2tncm91bmQ6IGxhdmVuZGVyO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTFweDtcbiAgcmlnaHQ6IC0ycHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5mYWItYnRuOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjYjZiNmI2O1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC04MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnVwcGVyUm93cyB7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG4gIHBhZGRpbmc6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3ZDY3Zjg7XG59XG5cbi5zZWxlY3RlZFVwcGVyQ29scyB7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiNWI1YjU7XG59XG5cbi5zZWxlY3Qge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJveC1zaGFkb3c6IDBweCAtNHB4IDdweCAjYzBiNWZmO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbn1cblxuLnVwcGVyQ29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi51cHBlclJvdyB7XG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gIHBhZGRpbmc6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3ZDY3Zjg7XG59XG5cbi5zZWxlY3RlZFVwcGVyQ29sIHtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiNWI1YjU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnNlbGVjdGVkIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzdkNjdmODtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzdkNjdmODtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IC00cHggN3B4ICNjMGI1ZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-renewal-status-update/esim-renewal-status-update.page.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-renewal-status-update/esim-renewal-status-update.page.ts ***!
  \*************************************************************************************************/
/*! exports provided: EsimRenewalStatusUpdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimRenewalStatusUpdatePage", function() { return EsimRenewalStatusUpdatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _add_esim_renewal_status_update_add_esim_renewal_status_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-esim-renewal-status-update/add-esim-renewal-status-update.component */ "./src/app/delar-application/esim-renewal-status-update/add-esim-renewal-status-update/add-esim-renewal-status-update.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/delar-application/esim-renewal-status-update/comment/comment.component.ts");
/* harmony import */ var _renewal_bulkstatus_renewal_bulkstatus_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./renewal-bulkstatus/renewal-bulkstatus.component */ "./src/app/delar-application/esim-renewal-status-update/renewal-bulkstatus/renewal-bulkstatus.component.ts");
/* harmony import */ var _renewal_history_details_renewal_history_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./renewal-history-details/renewal-history-details.component */ "./src/app/delar-application/esim-renewal-status-update/renewal-history-details/renewal-history-details.component.ts");
/* harmony import */ var _sim_update_sim_update_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sim-update/sim-update.component */ "./src/app/delar-application/esim-renewal-status-update/sim-update/sim-update.component.ts");














var EsimRenewalStatusUpdatePage = /** @class */ (function () {
    function EsimRenewalStatusUpdatePage(platform, formBuilder, modalController, ajaxService, commonService, ete) {
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
        this.showSerialNo = false;
        this.showInvoiceNumber = false;
        this.selectedRow = [];
        this.checkbutton = true;
        this.renewal = 1;
        this.companyId = localStorage.getItem("userName");
        this.data = "";
        this.arrow = false;
        this.a = false;
    }
    EsimRenewalStatusUpdatePage.prototype.scrollToTop = function () {
        this.content.scrollToTop(500);
    };
    EsimRenewalStatusUpdatePage.prototype.scrollToBottom = function () {
        this.content.scrollToBottom(500);
    };
    EsimRenewalStatusUpdatePage.prototype.logScrolling = function (ev) {
        if (ev.detail.scrollTop > 2) {
            this.arrow = true;
        }
        if (ev.detail.scrollTop < 2) {
            this.arrow = false;
        }
    };
    EsimRenewalStatusUpdatePage.prototype.ngOnInit = function () {
        this.createForm();
    };
    EsimRenewalStatusUpdatePage.prototype.createForm = function () {
        this.RenewalReportForm = this.formBuilder.group({
            RenewalRequestNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    EsimRenewalStatusUpdatePage.prototype.SearchData = function (d) {
        var _this = this;
        if (d == undefined) {
            this.renewal = 1;
        }
        else {
            this.renewal = d;
        }
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/esim/getDealerRenewalRequestAll?renewalno=" +
            this.renewal +
            "&companyid=" +
            localStorage.getItem("corpId") +
            "&renewalrequestno=" +
            this.RenewalReportForm.value.RenewalRequestNo;
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.commonService.dismissLoader();
            _this.tableData = res;
            // if (res.length == 0) {
            //   this.commonService.showConfirm("Renewal Report not available");
            //   this.show = false;
            // } else {
            //   this.details = res[0];
            //   setTimeout(() => {
            //   }, 3000);
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
                        datafield: "renewalrequestid",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 150,
                    },
                    {
                        text: "VLTD No",
                        datafield: "vltdsno",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 150,
                    },
                    {
                        text: "Invoice No",
                        datafield: "invoiceno",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 150,
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
                        width: 130,
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
                        text: "SIM 2",
                        datafield: "sim2",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 110,
                    },
                    {
                        text: "Plate No",
                        datafield: "plateno",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 100,
                    },
                    {
                        text: "Contact No",
                        datafield: "contactno",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 110,
                    },
                    {
                        text: "Validity Requested",
                        datafield: "validityperiod",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 140,
                    },
                    {
                        text: "Renewal Requested Date",
                        datafield: "renewalrequestdate",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 170,
                    },
                    {
                        text: "Renewal Requested by",
                        datafield: "renewalrequestby",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 150,
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
                        text: "Previous Card Activation Date",
                        datafield: "priviouscommercialactivationdate",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 150,
                    },
                    {
                        text: "Previous Card End Date",
                        datafield: "priviouscardenddate",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 150,
                    },
                    {
                        text: "Previous Card Status",
                        datafield: "priviouscardstatus",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 150,
                    },
                    {
                        text: "Card Activation Date",
                        datafield: "cardactivationdate",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 140,
                    },
                    {
                        text: "Card End Date",
                        datafield: "cardenddate",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 100,
                    },
                    {
                        text: "Card Status",
                        datafield: "cardstatus",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 125,
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
                        text: "Created by",
                        datafield: "createdby",
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
                            _this.checkstatus();
                        },
                    },
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
                    {
                        text: "",
                        datafield: "Simupdate",
                        columntype: "button",
                        cellsalign: "center",
                        align: "center",
                        width: 120,
                        cellsrenderer: function () {
                            return _this.myPlatform == "desktop"
                                ? "Sim Update"
                                : "<button>Sim Update</button>";
                        },
                        buttonclick: function (row) {
                            _this.SimModel(row);
                        },
                    },
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
        });
    };
    EsimRenewalStatusUpdatePage.prototype.checkstatus = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.selectedRow.sim1 == "") {
                    this.commonService.showConfirm("Update Sim No before updating Card Status");
                }
                else if (this.selectedRow.sim2 == "") {
                    this.commonService.showConfirm("Update Sim No before updating Card Status");
                }
                else {
                    this.viewModel();
                }
                return [2 /*return*/];
            });
        });
    };
    EsimRenewalStatusUpdatePage.prototype.viewModel = function (data) {
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
                                component: _add_esim_renewal_status_update_add_esim_renewal_status_update_component__WEBPACK_IMPORTED_MODULE_9__["AddEsimRenewalStatusUpdateComponent"],
                                cssClass: "statusform",
                                componentProps: {
                                    value: this.selectedRow,
                                    renewal: this.renewal,
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
    EsimRenewalStatusUpdatePage.prototype.CommentModel = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isModalOpened, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.getTop()];
                    case 1:
                        isModalOpened = _a.sent();
                        return [4 /*yield*/, this.modalController.create({
                                component: _comment_comment_component__WEBPACK_IMPORTED_MODULE_10__["CommentComponent"],
                                cssClass: "commentform",
                                componentProps: {
                                    value: this.selectedRow,
                                    renewal: this.renewal,
                                },
                            })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "Esim Renewal Comment Saved Successfully") {
                                _this.SearchData();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EsimRenewalStatusUpdatePage.prototype.SimModel = function (row) {
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
                                component: _sim_update_sim_update_component__WEBPACK_IMPORTED_MODULE_13__["SimUpdateComponent"],
                                cssClass: "simupdateform",
                                componentProps: {
                                    value: this.selectedRow,
                                    renewal: this.renewal,
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
    EsimRenewalStatusUpdatePage.prototype.openModel = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isModalOpened, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.getTop()];
                    case 1:
                        isModalOpened = _a.sent();
                        if (!!isModalOpened) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.modalController.create({
                                component: _renewal_history_details_renewal_history_details_component__WEBPACK_IMPORTED_MODULE_12__["RenewalHistoryDetailsComponent"],
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
    EsimRenewalStatusUpdatePage.prototype.bulkstatusModel = function (row) {
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
                                renewalno: this.renewal.toString(),
                            });
                        }
                        return [4 /*yield*/, this.modalController.getTop()];
                    case 1:
                        isModalOpened = _a.sent();
                        if (!!isModalOpened) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.modalController.create({
                                component: _renewal_bulkstatus_renewal_bulkstatus_component__WEBPACK_IMPORTED_MODULE_11__["RenewalBulkstatusComponent"],
                                cssClass: "statusform",
                                componentProps: {
                                    value: arr,
                                },
                            })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (d) {
                            if (d.data.data == "Esim Renewal Status Saved Successfully") {
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
    EsimRenewalStatusUpdatePage.prototype.myGridOnRowclick = function (event) {
        this.selectedRow = event.args.row.bounddata;
    };
    EsimRenewalStatusUpdatePage.prototype.myGridOnRowSelect = function (event) {
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
    EsimRenewalStatusUpdatePage.prototype.newfunc = function () {
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
            title: "Device Renewal Status Update",
            data: forExcel,
            headers: Header,
        };
        this.ete.exportExcel(reportData);
    };
    EsimRenewalStatusUpdatePage.prototype.ngAfterViewInit = function () {
        this.myGrid.horizontalscrollbarstep(["70"]);
        this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
    };
    EsimRenewalStatusUpdatePage.prototype.ionViewWillEnter = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.SearchData();
    };
    EsimRenewalStatusUpdatePage.ctorParameters = function () { return [
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
    ], EsimRenewalStatusUpdatePage.prototype, "selectComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EsimRenewalStatusUpdatePage.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EsimRenewalStatusUpdatePage.prototype, "content", void 0);
    EsimRenewalStatusUpdatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-esim-renewal-status-update",
            template: __webpack_require__(/*! raw-loader!./esim-renewal-status-update.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-renewal-status-update/esim-renewal-status-update.page.html"),
            styles: [__webpack_require__(/*! ./esim-renewal-status-update.page.scss */ "./src/app/delar-application/esim-renewal-status-update/esim-renewal-status-update.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"]])
    ], EsimRenewalStatusUpdatePage);
    return EsimRenewalStatusUpdatePage;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-renewal-status-update/renewal-bulkstatus/renewal-bulkstatus.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-renewal-status-update/renewal-bulkstatus/renewal-bulkstatus.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  background-color: #7c68f8;\n}\n\n.label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 25px;\n}\n\n.comment {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  height: 169px;\n  width: 100%;\n  padding: 15px;\n}\n\n.diable-style {\n  background: white;\n  line-height: 18px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.total-data {\n  margin-top: 2%;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #FFEBCD;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.file-input-container input[type=file] {\n  display: none;\n}\n\n.file {\n  margin-left: 8%;\n  border: 1px solid #3d6cec;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.documents {\n  margin: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1yZW5ld2FsLXN0YXR1cy11cGRhdGUvcmVuZXdhbC1idWxrc3RhdHVzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGVzaW0tcmVuZXdhbC1zdGF0dXMtdXBkYXRlXFxyZW5ld2FsLWJ1bGtzdGF0dXNcXHJlbmV3YWwtYnVsa3N0YXR1cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1yZW5ld2FsLXN0YXR1cy11cGRhdGUvcmVuZXdhbC1idWxrc3RhdHVzL3JlbmV3YWwtYnVsa3N0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FESUk7RUFFSSxhQUFBO0FDRlI7O0FETUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUNISjs7QURNQTtFQUNJO0lBQ0ksU0FBQTtFQ0hOOztFRE1FO0lBQ0ksVUFBQTtFQ0hOO0FBQ0Y7O0FETUE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FDSko7O0FET0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tcmVuZXdhbC1zdGF0dXMtdXBkYXRlL3JlbmV3YWwtYnVsa3N0YXR1cy9yZW5ld2FsLWJ1bGtzdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdjNjhmOFxyXG59XHJcblxyXG4ubGFiZWwtc3R5bGUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxufVxyXG5cclxuLmNvbW1lbnQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgICBoZWlnaHQ6IDE2OXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4XHJcbn1cclxuXHJcbi5kaWFibGUtc3R5bGUge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG5cclxuLmNvbnRlbnQtc3R5bGUge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxufVxyXG5cclxuLnRvdGFsLWRhdGEge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbi5jb2wtY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4jYWRkLWljb24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkZFQkNEO1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIC0tYmFja2dyb3VuZDogIzdjNjhmODtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcblxyXG59XHJcblxyXG4uc2VsZWN0YWJsZS1pbnB1dCB7XHJcbiAgICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uZmlsZS1pbnB1dC1jb250YWluZXIge1xyXG4gICAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmlsZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjEsIDEwOCwgMjM2KTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAuZm9ybS1maWVsZCB7XHJcbiAgICAgICAgem9vbTogODAlO1xyXG4gICAgfVxyXG5cclxuICAgICNzdWJtaXRidG4ge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbjogLTVweCA1cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4uZG9jdW1lbnRzIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsIi5oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YzY4Zjg7XG59XG5cbi5sYWJlbC1zdHlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG4uY29tbWVudCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGhlaWdodDogMTY5cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uZGlhYmxlLXN0eWxlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uY29udGVudC1zdHlsZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udG90YWwtZGF0YSB7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG4uY29sLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI2FkZC1pY29uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZFQkNEO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICAtLWJhY2tncm91bmQ6ICM3YzY4Zjg7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5maWxlLWlucHV0LWNvbnRhaW5lciBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZpbGUge1xuICBtYXJnaW4tbGVmdDogOCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZDZjZWM7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmRvY3VtZW50cyB7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-renewal-status-update/renewal-bulkstatus/renewal-bulkstatus.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-renewal-status-update/renewal-bulkstatus/renewal-bulkstatus.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: RenewalBulkstatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewalBulkstatusComponent", function() { return RenewalBulkstatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var RenewalBulkstatusComponent = /** @class */ (function () {
    function RenewalBulkstatusComponent(platform, formBuilder, modalController, ajaxService, alertController, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.alertController = alertController;
        this.commonService = commonService;
        this.button = false;
        this.today = new Date();
    }
    RenewalBulkstatusComponent.prototype.createForm = function () {
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
    RenewalBulkstatusComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    RenewalBulkstatusComponent.prototype.submit = function () {
        var _this = this;
        this.button = true;
        var data = [];
        this.value.map(function (d) {
            data.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, d, { cardactivationdate: _this.bulkStatusform.value.cardactivationdate, cardenddate: "", cardstatus: _this.bulkStatusform.value.cardstatus, comment: _this.bulkStatusform.value.comment }));
        });
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/saveEsimBulkRenewalStatus";
        this.ajaxService
            .ajaxPostWithBody(url, JSON.stringify(data))
            .subscribe(function (res) {
            if (res.message == "Esim Renewal Status Saved Successfully") {
                _this.modalController.dismiss({
                    data: "Esim Renewal Status Saved Successfully",
                });
                _this.commonService.showConfirm(res.message);
                _this.button = false;
            }
            else {
                _this.commonService.showConfirm(res.message);
                _this.modalController.dismiss();
                _this.button = false;
            }
        });
    };
    RenewalBulkstatusComponent.prototype.ngOnInit = function () {
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
        sevenDaysAgo.setDate(today.getDate() - 30);
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
    RenewalBulkstatusComponent.ctorParameters = function () { return [
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
    ], RenewalBulkstatusComponent.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RenewalBulkstatusComponent.prototype, "value", void 0);
    RenewalBulkstatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-renewal-bulkstatus",
            template: __webpack_require__(/*! raw-loader!./renewal-bulkstatus.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-renewal-status-update/renewal-bulkstatus/renewal-bulkstatus.component.html"),
            styles: [__webpack_require__(/*! ./renewal-bulkstatus.component.scss */ "./src/app/delar-application/esim-renewal-status-update/renewal-bulkstatus/renewal-bulkstatus.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], RenewalBulkstatusComponent);
    return RenewalBulkstatusComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-renewal-status-update/renewal-history-details/renewal-history-details.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-renewal-status-update/renewal-history-details/renewal-history-details.component.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -16px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 30px 11px;\n    padding-right: 20px;\n  }\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.dealer-data {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1yZW5ld2FsLXN0YXR1cy11cGRhdGUvcmVuZXdhbC1oaXN0b3J5LWRldGFpbHMvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcZXNpbS1yZW5ld2FsLXN0YXR1cy11cGRhdGVcXHJlbmV3YWwtaGlzdG9yeS1kZXRhaWxzXFxyZW5ld2FsLWhpc3RvcnktZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1yZW5ld2FsLXN0YXR1cy11cGRhdGUvcmVuZXdhbC1oaXN0b3J5LWRldGFpbHMvcmVuZXdhbC1oaXN0b3J5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7QUNBSjs7QURHQTtFQUNJO0lBQ0ksZ0JBQUE7RUNBTjs7RURHRTtJQUNJLFVBQUE7RUNBTjtBQUNGOztBREdBO0VBQ0k7SUFDSSxTQUFBO0VDRE47O0VESUU7SUFDSSxVQUFBO0VDRE47QUFDRjs7QURJQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VDRk47QUFDRjs7QURLQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSxtQkFBQTtFQ0hOO0FBQ0Y7O0FET0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0xKOztBRFFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0xKOztBRFFBO0VBQ0ksZUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1yZW5ld2FsLXN0YXR1cy11cGRhdGUvcmVuZXdhbC1oaXN0b3J5LWRldGFpbHMvcmVuZXdhbC1oaXN0b3J5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuXHJcbn1cclxuXHJcbi5zZWxlY3RhYmxlLWlucHV0IHtcclxuICAgIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5zdWJtaXRidG4ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNjI1MmVlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpIHtcclxuICAgIC5pbnB1dCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAjc3VibWl0YnRuIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAgIC5mb3JtLWZpZWxkIHtcclxuICAgICAgICB6b29tOiA4MCU7XHJcbiAgICB9XHJcblxyXG4gICAgI3N1Ym1pdGJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luOiAtMTZweCA1cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweClhbmQobWF4LXdpZHRoOjEwMjNweCkge1xyXG4gICAgLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCkge1xyXG4gICAgLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDMwcHggMTFweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmxhYmVsLWhlYWQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xyXG59XHJcblxyXG4uZGVhbGVyLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZGVhbGVyLWRhdGEge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59IiwiLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnN1Ym1pdGJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTE2cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogMzBweCAxMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbi5sYWJlbC1oZWFkIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcbn1cblxuLmRlYWxlci1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmRlYWxlci1kYXRhIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-renewal-status-update/renewal-history-details/renewal-history-details.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-renewal-status-update/renewal-history-details/renewal-history-details.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: RenewalHistoryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewalHistoryDetailsComponent", function() { return RenewalHistoryDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var RenewalHistoryDetailsComponent = /** @class */ (function () {
    function RenewalHistoryDetailsComponent(formBuilder, modalController, ajaxService, commonService) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.page = [];
    }
    RenewalHistoryDetailsComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    RenewalHistoryDetailsComponent.prototype.getdatas = function () {
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
                    text: "Card Renewal Date",
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
    RenewalHistoryDetailsComponent.prototype.ngOnInit = function () {
        this.getdatas();
    };
    RenewalHistoryDetailsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
    ], RenewalHistoryDetailsComponent.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RenewalHistoryDetailsComponent.prototype, "value", void 0);
    RenewalHistoryDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-renewal-history-details",
            template: __webpack_require__(/*! raw-loader!./renewal-history-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-renewal-status-update/renewal-history-details/renewal-history-details.component.html"),
            styles: [__webpack_require__(/*! ./renewal-history-details.component.scss */ "./src/app/delar-application/esim-renewal-status-update/renewal-history-details/renewal-history-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], RenewalHistoryDetailsComponent);
    return RenewalHistoryDetailsComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-renewal-status-update/sim-update/sim-update.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-renewal-status-update/sim-update/sim-update.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n.form-field {\n  margin: -5px;\n  border-radius: 7px;\n}\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.col-content {\n  text-align: center;\n  align-self: center;\n  font-size: 18px;\n}\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1yZW5ld2FsLXN0YXR1cy11cGRhdGUvc2ltLXVwZGF0ZS9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxlc2ltLXJlbmV3YWwtc3RhdHVzLXVwZGF0ZVxcc2ltLXVwZGF0ZVxcc2ltLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1yZW5ld2FsLXN0YXR1cy11cGRhdGUvc2ltLXVwZGF0ZS9zaW0tdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUNDRjtBQUNGO0FERUE7RUFDRTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0RGO0FESUE7RUFDRTtJQUNFLFNBQUE7RUNERjs7RURJQTtJQUNFLFVBQUE7RUNERjtBQUNGO0FESUE7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FDRkY7QURLQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRkY7QURLQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNGRjtBREtBO0VBQ0U7SUFDRSxnQkFBQTtFQ0ZGOztFREtBO0lBQ0UsVUFBQTtFQ0ZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLXJlbmV3YWwtc3RhdHVzLXVwZGF0ZS9zaW0tdXBkYXRlL3NpbS11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweCkgYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDhweCAxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogLTVweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZm9ybS1maWVsZCB7XHJcbiAgICB6b29tOiA4MCU7XHJcbiAgfVxyXG5cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVudC1zdHlsZSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2wtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgbWFyZ2luOiA3cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbn1cclxuIiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDhweCAxcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmNvbnRlbnQtc3R5bGUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBtYXJnaW46IDdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/esim-renewal-status-update/sim-update/sim-update.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-renewal-status-update/sim-update/sim-update.component.ts ***!
  \*************************************************************************************************/
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
            imeino: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sim1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sim2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    SimUpdateComponent.prototype.submitBtn = function () {
        var _this = this;
        // //mvt.apmkingstrack.com/fleettracking/esim/updatesimno?vltdsno=APM1K2I012200012317&imei=872345617823456&renewalno=1&oldsimno1=915752184840824&olasimno2=915754202253241&newsimno1=915752184840824&newsimno2=915754202253241changedby=apm-sa
        // https:
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/esim/updatesimno?vltdsno=" +
            this.simupdate.value.vltdsno +
            "&imei=" +
            this.value.imei +
            "&renewalno=" +
            this.renewal +
            "&oldsimno1=" +
            this.value.slotno +
            "&oldsimno2=" +
            this.value.totalbox +
            "&newsimno1=" +
            this.simupdate.value.sim1 +
            "&newsimno2=" +
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
                imeino: this.value.imei,
                sim1: this.value.slotno,
                sim2: this.value.totalbox,
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SimUpdateComponent.prototype, "renewal", void 0);
    SimUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sim-update",
            template: __webpack_require__(/*! raw-loader!./sim-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-renewal-status-update/sim-update/sim-update.component.html"),
            styles: [__webpack_require__(/*! ./sim-update.component.scss */ "./src/app/delar-application/esim-renewal-status-update/sim-update/sim-update.component.scss")]
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
//# sourceMappingURL=esim-renewal-status-update-esim-renewal-status-update-module-es5.js.map