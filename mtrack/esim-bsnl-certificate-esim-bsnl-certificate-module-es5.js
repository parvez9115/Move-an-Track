(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esim-bsnl-certificate-esim-bsnl-certificate-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-bsnl-certificate/bsnl-bulk/bsnl-bulk.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-bsnl-certificate/bsnl-bulk/bsnl-bulk.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>BSNL Certificate</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"myPlatform != 'desktop'\" class=\"content-style label-style\">\n  <ion-grid>\n    <ion-row class=\"form-field\">\n      <ion-col\n        size=\"12\"\n        size-sm=\"12\"\n        size-md=\"10\"\n        offset-md=\"1\"\n        size-lg=\"12\"\n        offset-lg=\"0\"\n      >\n        <form [formGroup]=\"requestForm\">\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">Select the Plan :</ion-label>\n              <ionic-selectable\n                class=\"label-style selectable-input\"\n                formControlName=\"validity\"\n                placeholder=\"Select the Plan Validity\"\n                [items]=\"valid\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n                [disabledItems]=\"data\"\n              >\n              </ionic-selectable>\n            </ion-col>\n          </ion-row>\n        </form>\n\n        <ion-row class=\"content-style\">\n          <ion-col style=\"text-align: center !important; padding: 20px\">\n            <ion-button\n              class=\"button\"\n              type=\"submit\"\n              [disabled]=\"!requestForm.valid\"\n              (click)=\"submitBtn()\"\n              >Submit\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf=\"myPlatform == 'desktop'\" class=\"content-style label-style\">\n  <ion-row>\n    <ion-col>\n      <form [formGroup]=\"requestForm\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Select the Plan : </ion-col>\n              <ion-col size=\"7\">\n                <ionic-selectable\n                  class=\"label-style selectable-input\"\n                  formControlName=\"validity\"\n                  placeholder=\"Select the Plan Validity\"\n                  [items]=\"valid\"\n                  [canSearch]=\"true\"\n                  [hasVirtualScroll]=\"true\"\n                  [disabledItems]=\"data\"\n                >\n                </ionic-selectable>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 20px\">\n          <ion-button\n            class=\"button\"\n            type=\"submit\"\n            [disabled]=\"!requestForm.valid || button\"\n            (click)=\"submitBtn()\"\n          >\n            Submit\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-bsnl-certificate/certificate/certificate.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-bsnl-certificate/certificate/certificate.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon (click)=\"cancelBtn()\" name=\"arrow-back\" style=\"padding: 10px\" slot=\"start\"></ion-icon>\n    </ion-buttons>\n    <ion-title>BSNL Certificate</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"myPlatform != 'desktop'\" class=\"content-style label-style\">\n  <ion-grid>\n    <ion-row class=\"form-field\">\n      <ion-col size=\"12\" size-sm=\"12\" size-md=\"10\" offset-md=\"1\" size-lg=\"12\" offset-lg=\"0\">\n        <form [formGroup]=\"requestForm\">\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">Select the Plan :</ion-label>\n              <ionic-selectable class=\"label-style selectable-input\" formControlName=\"validity\"\n                placeholder=\"Select the Plan Validity\" [items]=\"valid\" [canSearch]=\"true\" [hasVirtualScroll]=\"true\"\n                [disabledItems]=\"data\">\n              </ionic-selectable>\n            </ion-col>\n          </ion-row>\n        </form>\n\n        <ion-row class=\"content-style\">\n          <ion-col style=\"text-align: center !important; padding: 20px\">\n            <ion-button class=\"button\" type=\"submit\" [disabled]=\"!requestForm.valid\" (click)=\"submitBtn()\">Submit\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf=\"myPlatform == 'desktop'\" class=\"content-style label-style\">\n  <ion-row>\n    <ion-col>\n      <form [formGroup]=\"requestForm\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Select the Plan : </ion-col>\n              <ion-col size=\"7\">\n                <ionic-selectable class=\"label-style selectable-input\" formControlName=\"validity\"\n                  placeholder=\"Select the Plan Validity\" [items]=\"valid\" [canSearch]=\"true\" [hasVirtualScroll]=\"true\"\n                  [disabledItems]=\"data\">\n                </ionic-selectable>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 20px\">\n          <ion-button class=\"button\" type=\"submit\" [disabled]=\"!requestForm.valid || button\" (click)=\"submitBtn()\">\n            Submit\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-bsnl-certificate/esim-bsnl-certificate.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-bsnl-certificate/esim-bsnl-certificate.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons\n      *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\"\n      slot=\"start\"\n    >\n      <ion-icon\n        routerLink=\"/tabs-login/esim-dashboard\"\n        name=\"arrow-back\"\n        style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-row class=\"toolbar\">\n      <ion-title *ngIf=\"myPlatform != 'desktop'\">CA Status Update</ion-title>\n      <ion-title *ngIf=\"myPlatform == 'desktop'\"\n        >Device Status Update Details</ion-title\n      >\n      <ion-col\n        size=\"4\"\n        *ngIf=\"myPlatform == 'desktop'\"\n        style=\"text-align: right\"\n      >\n        <ion-button class=\"submitBtn\" size=\"small\" (click)=\"newfunc()\"\n          >Export</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <ion-grid>\n    <ion-row *ngIf=\"myPlatform == 'desktop'\" class=\"upperRow\">\n      <ion-col\n        [ngClass]=\"{ selectedUpperCol: 'true' }\"\n        routerLink=\"/tabs-login/esim-ca-report\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Ca Status Update</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{ selectedUpperCol: 'true' }\"\n        routerLink=\"/tabs-login/esim-renewal-status-update\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Renewal Status Update</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{ selectedUpperCol: 'true' }\"\n        routerLink=\"/tabs-login/device-topup-status-update\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Topup Status Update</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{ selectedUpperCol: 'true' }\"\n        routerLink=\"/tabs-login/device-extend-status-update\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>Extend 1 Yr Status Update</ion-label>\n      </ion-col>\n      <ion-col\n        [ngClass]=\"{ selectedUpperCol: 'true' }\"\n        routerLink=\"/tabs-login/esim-bsnl-certificate\"\n        routerLinkActive=\"selected\"\n        size=\"1.9\"\n      >\n        <ion-label>BSNL Certificate Request</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"wrapper-container\">\n      <ion-col size=\"12\">\n        <ion-row *ngIf=\"myPlatform != 'desktop'\">\n          <ion-col class=\"form-field\">\n            <ion-row>\n              <ion-col style=\"margin: 10px 0px 0px\">\n                <ion-label>\n                  <span class=\"dealer-label\">Total Selected Row :</span>\n                  <span class=\"dealer-data\">{{selectedRow?.length}}</span>\n                </ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col style=\"margin: 10px 0px 0px; text-align: end\">\n                <ion-button\n                  size=\"small\"\n                  class=\"submitbtn\"\n                  (click)=\"bulkcertificateModel()\"\n                  [disabled]=\"checkbutton\"\n                  >BSNL Certificate</ion-button\n                >\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"myPlatform == 'desktop'\">\n          <ion-col style=\"margin: 10px 0px 0px\">\n            <ion-label>\n              <span class=\"dealer-label\">Total Selected Row :</span>\n              <span class=\"dealer-data\">{{selectedRow?.length}}</span>\n            </ion-label>\n          </ion-col>\n          <ion-col style=\"margin: 10px 0px 0px; text-align: end\">\n            <ion-button\n              class=\"submitbtn\"\n              (click)=\"bulkcertificateModel()\"\n              [disabled]=\"checkbutton\"\n              >BSNL Certificate</ion-button\n            >\n          </ion-col>\n        </ion-row>\n\n        <jqxGrid\n          #myGrid\n          [selectionmode]=\"'checkbox'\"\n          (onRowclick)=\"myGridOnRowclick($event)\"\n          (onRowselect)=\"myGridOnRowSelect($event)\"\n          (onRowunselect)=\"myGridOnRowSelect($event)\"\n          [theme]=\"'material'\"\n          [pagesizeoptions]=\"page\"\n          [enablebrowserselection]=\"true\"\n          [width]=\"'99.5%'\"\n          [autoheight]=\"true\"\n          [source]=\"dataAdapter\"\n          [columns]=\"columns\"\n          [filterable]=\"true\"\n          [sortable]=\"true\"\n          [columnsresize]=\"true\"\n          [enabletooltips]=\"true\"\n          [pageable]=\"true\"\n          [showfilterrow]=\"true\"\n          style=\"\n            font-size: 16px;\n            text-align: center !important;\n            margin: auto;\n            cursor: pointer;\n          \"\n          [columns]=\"columns\"\n        >\n        </jqxGrid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-fab\n    *ngIf=\"myPlatform == 'desktop' && arrow\"\n    style=\"margin-right: 1%; margin-bottom: 9%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToTop()\">\n      <ion-icon class=\"icon\" name=\"arrow-up\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab\n    *ngIf=\"myPlatform == 'desktop' && arrow\"\n    style=\"margin-right: 1%; margin-bottom: 5%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToBottom()\">\n      <ion-icon class=\"icon\" name=\"arrow-down\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-bsnl-certificate/generate-invoice/generate-invoice.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-bsnl-certificate/generate-invoice/generate-invoice.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Invoice Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"generateForm\">\n    <ion-row style=\"margin-top: 5px\">\n      <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n        <ion-label class=\"dealer-label\">User ID :</ion-label>\n        <ion-input\n          placeholder=\"Enter the User Id\"\n          formControlName=\"userid\"\n          class=\"input\"\n        ></ion-input>\n      </ion-col>\n\n      <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n        <ion-label class=\"dealer-label\">Password :</ion-label>\n        <ion-input\n          type=\"password\"\n          placeholder=\"Enter the Password\"\n          formControlName=\"password\"\n          class=\"input\"\n        ></ion-input>\n      </ion-col>\n\n      <!-- <ion-col style=\"text-align: end; margin-right: 10px\"\n        ><span\n          ><ion-icon\n            class=\"dismiss\"\n            name=\"trash\"\n            (click)=\"deleteModel()\"\n          ></ion-icon\n        ></span>\n      </ion-col> -->\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"3.5\" size-md=\"3.5\" style=\"margin-left: 10px\">\n        <ion-label>\n          <span class=\"dealer-label\">Dealer :</span>\n          <span class=\"dealer-data\">{{ header }}</span>\n        </ion-label>\n      </ion-col>\n\n      <ion-col>\n        <ion-label>\n          <span class=\"dealer-label\">Invoice Date :</span>\n          <span class=\"dealer-data\">{{ currentdate }}</span>\n        </ion-label>\n      </ion-col>\n      <ion-col style=\"text-align: end !important\">\n        <ion-button\n          class=\"button\"\n          size=\"small\"\n          type=\"submit\"\n          (click)=\"confirmModel()\"\n          [disabled]=\"!generateForm.valid\"\n          >Submit\n        </ion-button>\n        <ion-button\n          class=\"button\"\n          size=\"small\"\n          type=\"cancel\"\n          (click)=\"cancelBtn()\"\n          >Cancel</ion-button\n        >\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"visible\">\n      <ion-col size=\"12\" size-lg=\"2.2\" size-md=\"2.2\" style=\"margin-left: 10px\">\n        <ion-label>\n          <span class=\"dealer-label\">IMEI No :</span>\n        </ion-label>\n        <ion-input formControlName=\"imei\" class=\"input\" disabled></ion-input>\n      </ion-col>\n\n      <ion-col size=\"12\" size-lg=\"4.5\" size-md=\"4.5\">\n        <ion-label>\n          <span class=\"dealer-label\">Product Name :</span>\n        </ion-label>\n        <ionic-selectable\n          class=\"input selectable-input\"\n          formControlName=\"productnamelist\"\n          [(ngModel)]=\"product\"\n          [items]=\"productnamelist\"\n          [canSearch]=\"true\"\n          [hasVirtualScroll]=\"true\"\n          itemValueField=\"itemname\"\n          itemTextField=\"itemname\"\n        >\n        </ionic-selectable>\n      </ion-col>\n      <ion-col\n        size=\"12\"\n        size-lg=\"2\"\n        size-md=\"2\"\n        style=\"text-align: end; margin-top: 27px\"\n      >\n        <ion-button size=\"small\" (click)=\"save()\">Save</ion-button>\n        <ion-button size=\"small\" (click)=\"dismiss()\">Clear</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n  <ion-row style=\"margin-top: 10px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        (onRowclick)=\"myGridOnRowSelect($event)\"\n        [theme]=\"'material'\"\n        [width]=\"'99%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [columns]=\"columns\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [enablebrowserselection]=\"true\"\n        [pagesizeoptions]=\"page\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [showfilterrow]=\"true\"\n        [pageable]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/esim-bsnl-certificate/bsnl-bulk/bsnl-bulk.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/delar-application/esim-bsnl-certificate/bsnl-bulk/bsnl-bulk.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 14px;\n  margin: 7px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #ffebcd;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 0px 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1ic25sLWNlcnRpZmljYXRlL2JzbmwtYnVsay9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxlc2ltLWJzbmwtY2VydGlmaWNhdGVcXGJzbmwtYnVsa1xcYnNubC1idWxrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWJzbmwtY2VydGlmaWNhdGUvYnNubC1idWxrL2JzbmwtYnVsay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVFO0VBQ0U7SUFDRSxTQUFBO0VDQ0o7O0VERUU7SUFDRSxVQUFBO0VDQ0o7QUFDRjs7QURFRTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHRTtFQUNFLHlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWJzbmwtY2VydGlmaWNhdGUvYnNubC1idWxrL2JzbmwtYnVsay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1zdHlsZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgbWFyZ2luOiA3cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250ZW50LXN0eWxlIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY29sLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgI2FkZC1pY29uIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZWJjZDtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM3YzY4Zjg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5mb3JtLWZpZWxkIHtcclxuICAgICAgem9vbTogODAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI3N1Ym1pdGJ0biB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbjogLTVweCA1cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIH1cclxuICBcclxuICAuc2VsZWN0YWJsZS1pbnB1dCB7XHJcbiAgICBwYWRkaW5nOiA4cHggMTFweCAwcHggNnB4O1xyXG4gIH1cclxuICAiLCIubGFiZWwtc3R5bGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgbWFyZ2luOiA3cHg7XG59XG5cbi5jb250ZW50LXN0eWxlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb2wtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jYWRkLWljb24ge1xuICAtLWJhY2tncm91bmQ6ICNmZmViY2Q7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIC0tYmFja2dyb3VuZDogIzdjNjhmODtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDBweCA2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/esim-bsnl-certificate/bsnl-bulk/bsnl-bulk.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/delar-application/esim-bsnl-certificate/bsnl-bulk/bsnl-bulk.component.ts ***!
  \******************************************************************************************/
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
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/esim/saveBulkBSNLCertificatedetails?dealerid=" +
            localStorage.getItem("userName");
        this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
            if (res.message == "Certificate Created Successfully") {
                _this.modalController.dismiss({
                    data: "Certificate Created Successfully",
                    value: data,
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
            template: __webpack_require__(/*! raw-loader!./bsnl-bulk.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-bsnl-certificate/bsnl-bulk/bsnl-bulk.component.html"),
            styles: [__webpack_require__(/*! ./bsnl-bulk.component.scss */ "./src/app/delar-application/esim-bsnl-certificate/bsnl-bulk/bsnl-bulk.component.scss")]
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

/***/ "./src/app/delar-application/esim-bsnl-certificate/certificate/certificate.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-bsnl-certificate/certificate/certificate.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 14px;\n  margin: 7px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #FFEBCD;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 0px 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1ic25sLWNlcnRpZmljYXRlL2NlcnRpZmljYXRlL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGVzaW0tYnNubC1jZXJ0aWZpY2F0ZVxcY2VydGlmaWNhdGVcXGNlcnRpZmljYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWJzbmwtY2VydGlmaWNhdGUvY2VydGlmaWNhdGUvY2VydGlmaWNhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksU0FBQTtFQ0NOOztFREVFO0lBQ0ksVUFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1ic25sLWNlcnRpZmljYXRlL2NlcnRpZmljYXRlL2NlcnRpZmljYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsLXN0eWxlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICBtYXJnaW46IDdweDtcclxufVxyXG5cclxuLmNvbnRlbnQtc3R5bGUge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxufVxyXG5cclxuLmNvbC1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbiNhZGQtaWNvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRkVCQ0Q7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjN2M2OGY4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAgIC5mb3JtLWZpZWxkIHtcclxuICAgICAgICB6b29tOiA4MCU7XHJcbiAgICB9XHJcblxyXG4gICAgI3N1Ym1pdGJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbi5zZWxlY3RhYmxlLWlucHV0IHtcclxuICAgIHBhZGRpbmc6IDhweCAxMXB4IDBweCA2cHg7XHJcbn0iLCIubGFiZWwtc3R5bGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgbWFyZ2luOiA3cHg7XG59XG5cbi5jb250ZW50LXN0eWxlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb2wtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jYWRkLWljb24ge1xuICAtLWJhY2tncm91bmQ6ICNGRkVCQ0Q7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIC0tYmFja2dyb3VuZDogIzdjNjhmODtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDBweCA2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/esim-bsnl-certificate/certificate/certificate.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/delar-application/esim-bsnl-certificate/certificate/certificate.component.ts ***!
  \**********************************************************************************************/
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
            dealerid: this.value.carequestby,
            imei: this.value.imei,
            vltdsno: this.value.vltdsno,
            validityperiod: this.requestForm.value.validity,
            createdby: localStorage.getItem("userName"),
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/esim/saveBSNLCertificatedetails?dealerid=" +
            localStorage.getItem("userName");
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
            selector: "app-certificate",
            template: __webpack_require__(/*! raw-loader!./certificate.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-bsnl-certificate/certificate/certificate.component.html"),
            styles: [__webpack_require__(/*! ./certificate.component.scss */ "./src/app/delar-application/esim-bsnl-certificate/certificate/certificate.component.scss")]
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

/***/ "./src/app/delar-application/esim-bsnl-certificate/esim-bsnl-certificate.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/esim-bsnl-certificate/esim-bsnl-certificate.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: EsimBsnlCertificatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimBsnlCertificatePageModule", function() { return EsimBsnlCertificatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _esim_bsnl_certificate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esim-bsnl-certificate.page */ "./src/app/delar-application/esim-bsnl-certificate/esim-bsnl-certificate.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./certificate/certificate.component */ "./src/app/delar-application/esim-bsnl-certificate/certificate/certificate.component.ts");
/* harmony import */ var _bsnl_bulk_bsnl_bulk_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bsnl-bulk/bsnl-bulk.component */ "./src/app/delar-application/esim-bsnl-certificate/bsnl-bulk/bsnl-bulk.component.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./generate-invoice/generate-invoice.component */ "./src/app/delar-application/esim-bsnl-certificate/generate-invoice/generate-invoice.component.ts");












var routes = [
    {
        path: "",
        component: _esim_bsnl_certificate_page__WEBPACK_IMPORTED_MODULE_6__["EsimBsnlCertificatePage"],
    },
    {
        path: "certificate",
        component: _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_8__["CertificateComponent"],
    },
    {
        path: "bsnl-bulk",
        component: _bsnl_bulk_bsnl_bulk_component__WEBPACK_IMPORTED_MODULE_9__["BsnlBulkComponent"],
    },
    {
        path: "generate-invoice",
        component: _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_11__["GenerateInvoiceComponent"],
    },
];
var EsimBsnlCertificatePageModule = /** @class */ (function () {
    function EsimBsnlCertificatePageModule() {
    }
    EsimBsnlCertificatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_10__["IonicSelectableModule"],
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [
                _esim_bsnl_certificate_page__WEBPACK_IMPORTED_MODULE_6__["EsimBsnlCertificatePage"],
                _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_8__["CertificateComponent"],
                _bsnl_bulk_bsnl_bulk_component__WEBPACK_IMPORTED_MODULE_9__["BsnlBulkComponent"],
                _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_11__["GenerateInvoiceComponent"],
            ],
        })
    ], EsimBsnlCertificatePageModule);
    return EsimBsnlCertificatePageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-bsnl-certificate/esim-bsnl-certificate.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/esim-bsnl-certificate/esim-bsnl-certificate.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fabbutton {\n  --background: whitesmoke;\n  --background-hover: grey;\n}\n\n.icon {\n  color: black;\n}\n\n.icon:hover {\n  color: white;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.dealer-data {\n  font-size: 14px;\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -11px;\n  right: -2px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -15px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.upperCol {\n  text-align: center;\n  border-radius: 8px;\n  margin: 2px;\n  color: black;\n  font-family: sans-serif;\n  font-size: 13px;\n  text-transform: uppercase;\n}\n\n.upperRow {\n  background: #eeeeee;\n  padding: 1px;\n  border-bottom: 2px solid #7d67f8;\n}\n\n.selectedUpperCol {\n  background: #ebebeb;\n  text-align: center;\n  margin-right: 2px;\n  color: black;\n  font-family: sans-serif;\n  cursor: pointer;\n  font-size: 10px;\n  font-weight: bold;\n  text-transform: uppercase;\n  border-right: 1px solid #b5b5b5;\n  align-self: center;\n  padding-top: 8px;\n  margin-top: 15px;\n}\n\n.selected {\n  margin-top: 20px;\n  color: black;\n  background-color: #ffffff;\n  border-bottom: none;\n  border-top: 2px solid #7d67f8;\n  border-left: 2px solid #7d67f8;\n  border-right: 2px solid #7d67f8;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 11px;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom: none;\n  position: relative;\n  top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1ic25sLWNlcnRpZmljYXRlL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGVzaW0tYnNubC1jZXJ0aWZpY2F0ZVxcZXNpbS1ic25sLWNlcnRpZmljYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1ic25sLWNlcnRpZmljYXRlL2VzaW0tYnNubC1jZXJ0aWZpY2F0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLHdCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxZQUFBO0FDRUo7O0FEQUU7RUFDRSxZQUFBO0FDR0o7O0FEQUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDR0o7O0FEREU7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNJSjs7QURGRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNLSjs7QURIRTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ01KOztBREpFO0VBQ0UscUJBQUE7QUNPSjs7QURMRTtFQUNFO0lBQ0UsZ0JBQUE7RUNRSjs7RURORTtJQUNFLFVBQUE7RUNTSjtBQUNGOztBRFBFO0VBQ0U7SUFDRSxTQUFBO0VDU0o7O0VEUEU7SUFDRSxVQUFBO0VDVUo7QUFDRjs7QURSRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ1VKOztBRFJFO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUNXSjtBQUNGOztBRFRFO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUNXSjtBQUNGOztBRFRFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNXSjs7QURURTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNZSjs7QURWRTtFQUNFLGVBQUE7QUNhSjs7QURYRTs7RUFFRSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDY0o7O0FEWEU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDY0o7O0FEWEU7RUFDRSwyQkFBQTtBQ2NKOztBRFhFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ2NKOztBRFhFO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNjSjs7QURYRTtFQUNFLG1CQUFBO0FDY0o7O0FEWEU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ2NKOztBRFhFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUNjSjs7QURaRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDZUo7O0FEWkU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDZUoiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWJzbmwtY2VydGlmaWNhdGUvZXNpbS1ic25sLWNlcnRpZmljYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWJidXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBncmV5O1xyXG4gIH1cclxuICAuaWNvbiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIC5pY29uOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgICBtYXJnaW46IDdweDtcclxuICB9XHJcbiAgLnNlbGVjdGFibGUtaW5wdXQge1xyXG4gICAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcbiAgLmRlYWxlci1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgLnN1Ym1pdEJ0biB7XHJcbiAgICBtYXJnaW46IDBweCAxNHB4IDBweCAwcHg7XHJcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjN2M2OGY4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC0tY29sb3I6ICM3YzY4Zjg7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM3YzY4Zjg7XHJcbiAgICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcclxuICB9XHJcbiAgLnN1Ym1pdGJ0biB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM2MjUyZWU7XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5pbnB1dCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB9XHJcbiAgICAjc3VibWl0YnRuIHtcclxuICAgICAgd2lkdGg6IDIwJTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmZvcm0tZmllbGQge1xyXG4gICAgICB6b29tOiA4MCU7XHJcbiAgICB9XHJcbiAgICAjc3VibWl0YnRuIHtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICB9XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luOiAtNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweCkgYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAgIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDoxMDI0cHgpIHtcclxuICAgIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbjogOHB4IDFweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmxhYmVsLWhlYWQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xyXG4gIH1cclxuICAuZGVhbGVyLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICAuZGVhbGVyLWRhdGEge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAucGRmLXdyYXBwZXIsXHJcbiAgLmV4Y2VsLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2V4Y2VsTmV3LnN2Z1wiKSBuby1yZXBlYXQ7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZhYi1idG4ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsYXZlbmRlcjtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTExcHg7XHJcbiAgICByaWdodDogLTJweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuZmFiLWJ0bjpob3ZlciB7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTgwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbiAgXHJcbiAgLnVwcGVyQ29sIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICBcclxuICAudXBwZXJSb3cge1xyXG4gICAgYmFja2dyb3VuZDogI2VlZWVlZTtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN2Q2N2Y4O1xyXG4gIH1cclxuICAuc2VsZWN0ZWRVcHBlckNvbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiNWI1YjU7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnNlbGVjdGVkIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjN2Q2N2Y4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjN2Q2N2Y4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzdkNjdmODtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMTFweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAtNHB4IDdweCAjYzBiNWZmO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogM3B4O1xyXG4gIH1cclxuICAiLCIuZmFiYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGdyZXk7XG59XG5cbi5pY29uIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaWNvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBtYXJnaW46IDdweDtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5kZWFsZXItbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zdWJtaXRCdG4ge1xuICBtYXJnaW46IDBweCAxNHB4IDBweCAwcHg7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XG59XG5cbi5zdWJtaXRidG4ge1xuICAtLWJhY2tncm91bmQ6ICM2MjUyZWU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDhweCAxcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxufVxuLmxhYmVsLWhlYWQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xufVxuXG4uZGVhbGVyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZGVhbGVyLWRhdGEge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wZGYtd3JhcHBlcixcbi5leGNlbC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2V4Y2VsTmV3LnN2Z1wiKSBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5mYWItYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiBsYXZlbmRlcjtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTExcHg7XG4gIHJpZ2h0OiAtMnB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uZmFiLWJ0bjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2I2YjZiNjtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi51cHBlckNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udXBwZXJSb3cge1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICBwYWRkaW5nOiAxcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN2Q2N2Y4O1xufVxuXG4uc2VsZWN0ZWRVcHBlckNvbCB7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2I1YjViNTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uc2VsZWN0ZWQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDExcHg7XG4gIGJveC1zaGFkb3c6IDBweCAtNHB4IDdweCAjYzBiNWZmO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/esim-bsnl-certificate/esim-bsnl-certificate.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/esim-bsnl-certificate/esim-bsnl-certificate.page.ts ***!
  \***************************************************************************************/
/*! exports provided: EsimBsnlCertificatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimBsnlCertificatePage", function() { return EsimBsnlCertificatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./certificate/certificate.component */ "./src/app/delar-application/esim-bsnl-certificate/certificate/certificate.component.ts");
/* harmony import */ var _bsnl_bulk_bsnl_bulk_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bsnl-bulk/bsnl-bulk.component */ "./src/app/delar-application/esim-bsnl-certificate/bsnl-bulk/bsnl-bulk.component.ts");
/* harmony import */ var _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./generate-invoice/generate-invoice.component */ "./src/app/delar-application/esim-bsnl-certificate/generate-invoice/generate-invoice.component.ts");












var EsimBsnlCertificatePage = /** @class */ (function () {
    function EsimBsnlCertificatePage(platform, formBuilder, modalController, ajaxService, commonService, ete, alertController) {
        var _this = this;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.ete = ete;
        this.alertController = alertController;
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
    }
    EsimBsnlCertificatePage.prototype.scrollToTop = function () {
        this.content.scrollToTop(500);
    };
    EsimBsnlCertificatePage.prototype.scrollToBottom = function () {
        this.content.scrollToBottom(500);
    };
    EsimBsnlCertificatePage.prototype.horiscroll = function () {
        this.myGrid;
        console.log(this.myGrid);
    };
    EsimBsnlCertificatePage.prototype.logScrolling = function (ev) {
        if (ev.detail.scrollTop > 2) {
            this.arrow = true;
        }
        if (ev.detail.scrollTop < 2) {
            this.arrow = false;
        }
    };
    EsimBsnlCertificatePage.prototype.ngOnInit = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        this.currentdate = today;
        this.createForm();
    };
    EsimBsnlCertificatePage.prototype.clear = function (d) {
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
    EsimBsnlCertificatePage.prototype.reset = function () {
        this.CAReportForm.patchValue({
            SerialNo: "",
        });
    };
    EsimBsnlCertificatePage.prototype.resets = function () {
        this.CAReportForm.patchValue({
            InvoiceNo: "",
        });
    };
    EsimBsnlCertificatePage.prototype.getcalist = function () {
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
    EsimBsnlCertificatePage.prototype.createForm = function () {
        this.CAReportForm = this.formBuilder.group({
            CaRequestNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            InvoiceNo: [""],
            SerialNo: [""],
        });
    };
    EsimBsnlCertificatePage.prototype.SearchData = function (d) {
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
                            text: "Request Date",
                            datafield: "carequestdate",
                            cellsrenderer: _this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 145,
                        },
                        {
                            text: "Request by",
                            datafield: "carequestby",
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
                            datafield: "certificate",
                            columntype: "button",
                            cellsalign: "center",
                            align: "center",
                            width: 120,
                            cellsrenderer: function () {
                                return _this.myPlatform == "desktop"
                                    ? "BSNL Certificate"
                                    : "<button>Certificate</button>";
                            },
                            buttonclick: function (row) {
                                _this.CertificateModel(row);
                            },
                        },
                    ];
                }
            }
        });
    };
    EsimBsnlCertificatePage.prototype.CertificateModel = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isModalOpened, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.getTop()];
                    case 1:
                        isModalOpened = _a.sent();
                        return [4 /*yield*/, this.modalController.create({
                                component: _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_9__["CertificateComponent"],
                                cssClass: "validityform",
                                componentProps: {
                                    value: this.selectedRow,
                                },
                            })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "Certificate Created Successfully") {
                                _this.confirmModel();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EsimBsnlCertificatePage.prototype.confirmModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1, alert_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.companyId == "apm-sa")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: "Message",
                                backdropDismiss: false,
                                message: "Certificate Created Successfully",
                                buttons: [
                                    {
                                        text: "Cancel",
                                        role: "cancel",
                                        handler: function (data) {
                                            _this.SearchData();
                                            _this.myGrid.clearselection();
                                            _this.selectedRow = "";
                                        },
                                    },
                                    {
                                        text: "Ok",
                                        handler: function (data) {
                                            _this.invoicepop();
                                        },
                                    },
                                ],
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.alertController.create({
                            header: "Message",
                            backdropDismiss: false,
                            message: "Certificate Created Successfully",
                            buttons: [
                                {
                                    text: "Ok",
                                    handler: function (data) {
                                        _this.SearchData();
                                        _this.myGrid.clearselection();
                                        _this.selectedRow = "";
                                    },
                                },
                            ],
                        })];
                    case 4:
                        alert_2 = _a.sent();
                        return [4 /*yield*/, alert_2.present()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    EsimBsnlCertificatePage.prototype.invoicepop = function () {
        var _this = this;
        if (this.zohocount != 0) {
            var arr = [];
            arr.push({
                imei: this.selectedRow.imei,
            });
            var data;
            data = {
                headerid: "",
                dealerid: this.selectedRow.carequestby,
                invoiceno: "",
                invoicedate: this.currentdate,
                invoiceamount: "",
                noofunits: "1",
                imeinos: arr,
                createdby: localStorage.getItem("userName"),
            };
            this.commonService.presentLoader();
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getcertificatezohobookproductdetails";
            this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
                _this.commonService.dismissLoader();
                if (Array.isArray(res)) {
                    _this.invoicedata = res;
                    _this.invoice();
                }
                else if (res.message) {
                    _this.commonService.showConfirm(res.message);
                }
            });
        }
        else {
            this.SearchData();
            this.myGrid.clearselection();
            this.selectedRow = "";
        }
    };
    EsimBsnlCertificatePage.prototype.invoice = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_11__["GenerateInvoiceComponent"],
                            cssClass: "invoiceform",
                            componentProps: {
                                value: this.invoicedata,
                                header: this.selectedRow.carequestby,
                            },
                            backdropDismiss: false,
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "refresh") {
                                _this.SearchData();
                            }
                            else if (data.data.data == "Invoice Details Saved Successfully") {
                                _this.SearchData();
                                _this.commonService.showConfirm("Invoice Details Saved Successfully");
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EsimBsnlCertificatePage.prototype.bulkcertificateModel = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var selectdata, arr, isSameDealerId, i, i, isModalOpened, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectdata = this.myGrid.getselectedrowindexes();
                        arr = [];
                        isSameDealerId = true;
                        if (selectdata.length > 1) {
                            for (i = 1; i < selectdata.length; i++) {
                                if (this.myGrid["attrSource"]["originaldata"][selectdata[i]]
                                    .carequestby !=
                                    this.myGrid["attrSource"]["originaldata"][selectdata[0]].carequestby) {
                                    isSameDealerId = false;
                                    break;
                                }
                            }
                        }
                        if (!(isSameDealerId && selectdata.length > 0)) return [3 /*break*/, 5];
                        for (i = 0; i < selectdata.length; i++) {
                            arr.push({
                                dealerid: this.myGrid["attrSource"]["originaldata"][selectdata[i]]
                                    .carequestby,
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
                                component: _bsnl_bulk_bsnl_bulk_component__WEBPACK_IMPORTED_MODULE_10__["BsnlBulkComponent"],
                                cssClass: "validityform",
                                componentProps: {
                                    value: arr,
                                },
                            })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (d) {
                            if (d.data.data == "Certificate Created Successfully") {
                                // this.SearchData(1);
                                // this.data = d.data.data;
                                _this.dealerid = d.data.value;
                                _this.bulkconfirmModel();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.commonService.dismissLoader();
                        this.commonService.showConfirm("The Selected Imei has been different Dealer ID, Kindly Select the Same Dealer ID");
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    EsimBsnlCertificatePage.prototype.bulkconfirmModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_3, alert_4;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.companyId == "apm-sa")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: "Message",
                                backdropDismiss: false,
                                message: "Certificate Created Successfully",
                                buttons: [
                                    {
                                        text: "Cancel",
                                        role: "cancel",
                                        handler: function (data) {
                                            _this.SearchData();
                                            _this.myGrid.clearselection();
                                            _this.selectedRow = "";
                                        },
                                    },
                                    {
                                        text: "Ok",
                                        handler: function (data) {
                                            _this.bulkinvoicepop();
                                        },
                                    },
                                ],
                            })];
                    case 1:
                        alert_3 = _a.sent();
                        return [4 /*yield*/, alert_3.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.alertController.create({
                            header: "Message",
                            backdropDismiss: false,
                            message: "Certificate Created Successfully",
                            buttons: [
                                {
                                    text: "Ok",
                                    handler: function (data) {
                                        _this.SearchData();
                                        _this.myGrid.clearselection();
                                        _this.selectedRow = "";
                                    },
                                },
                            ],
                        })];
                    case 4:
                        alert_4 = _a.sent();
                        return [4 /*yield*/, alert_4.present()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    EsimBsnlCertificatePage.prototype.bulkinvoicepop = function () {
        var _this = this;
        if (this.zohocount != 0) {
            var selectdata = this.myGrid.getselectedrowindexes();
            var arr = [];
            for (var i = 0; i < selectdata.length; i++) {
                arr.push({
                    imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
                });
            }
            var data;
            data = {
                headerid: "",
                dealerid: this.myGrid["attrSource"]["originaldata"][selectdata[0]].carequestby,
                invoiceno: "",
                invoicedate: this.currentdate,
                invoiceamount: "",
                noofunits: selectdata.length,
                imeinos: arr,
                createdby: localStorage.getItem("userName"),
            };
            this.headerdata = data;
            this.commonService.presentLoader();
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getcertificatezohobookproductdetails";
            this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
                _this.commonService.dismissLoader();
                if (Array.isArray(res)) {
                    _this.invoicedata = res;
                    _this.bulkinvoice();
                }
                else if (res.message) {
                    _this.commonService.showConfirm(res.message);
                }
            });
        }
        else {
            this.SearchData();
            this.myGrid.clearselection();
            this.selectedRow = "";
        }
    };
    EsimBsnlCertificatePage.prototype.bulkinvoice = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_11__["GenerateInvoiceComponent"],
                            cssClass: "invoiceform",
                            componentProps: {
                                value: this.invoicedata,
                                header: this.headerdata.dealerid,
                            },
                            backdropDismiss: false,
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "refresh") {
                                _this.SearchData();
                            }
                            else if (data.data.data == "Invoice Details Saved Successfully") {
                                _this.SearchData();
                                _this.commonService.showConfirm("Invoice Details Saved Successfully");
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EsimBsnlCertificatePage.prototype.myGridOnRowclick = function (event) {
        this.selectedRow = event.args.row.bounddata;
    };
    EsimBsnlCertificatePage.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = this.myGrid.getselectedrowindexes();
        if (this.selectedRow.length > 0) {
            this.checkbutton = false;
        }
        else {
            this.checkbutton = true;
        }
    };
    EsimBsnlCertificatePage.prototype.newfunc = function () {
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
    EsimBsnlCertificatePage.prototype.ngAfterViewInit = function () {
        this.myGrid.horizontalscrollbarstep(["70"]);
        this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
    };
    EsimBsnlCertificatePage.prototype.ionViewWillEnter = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.zohocount = localStorage.getItem("zohoInvoice");
        this.clear();
        this.getcalist();
        this.SearchData();
    };
    EsimBsnlCertificatePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
        { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("selectComponent", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic_selectable__WEBPACK_IMPORTED_MODULE_4__["IonicSelectableComponent"])
    ], EsimBsnlCertificatePage.prototype, "selectComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EsimBsnlCertificatePage.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EsimBsnlCertificatePage.prototype, "content", void 0);
    EsimBsnlCertificatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-esim-bsnl-certificate",
            template: __webpack_require__(/*! raw-loader!./esim-bsnl-certificate.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-bsnl-certificate/esim-bsnl-certificate.page.html"),
            styles: [__webpack_require__(/*! ./esim-bsnl-certificate.page.scss */ "./src/app/delar-application/esim-bsnl-certificate/esim-bsnl-certificate.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], EsimBsnlCertificatePage);
    return EsimBsnlCertificatePage;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-bsnl-certificate/generate-invoice/generate-invoice.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-bsnl-certificate/generate-invoice/generate-invoice.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  color: white;\n}\n\n.arrow-back {\n  color: white;\n}\n\n.dismiss {\n  font-size: 25px;\n  cursor: pointer;\n}\n\n.dismiss:hover {\n  color: red;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1ic25sLWNlcnRpZmljYXRlL2dlbmVyYXRlLWludm9pY2UvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcZXNpbS1ic25sLWNlcnRpZmljYXRlXFxnZW5lcmF0ZS1pbnZvaWNlXFxnZW5lcmF0ZS1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWJzbmwtY2VydGlmaWNhdGUvZ2VuZXJhdGUtaW52b2ljZS9nZW5lcmF0ZS1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxVQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDS0Y7O0FESEE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDTUY7O0FESkE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tYnNubC1jZXJ0aWZpY2F0ZS9nZW5lcmF0ZS1pbnZvaWNlL2dlbmVyYXRlLWludm9pY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5hcnJvdy1iYWNrIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmRpc21pc3Mge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRpc21pc3M6aG92ZXIge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLmRlYWxlci1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIG1hcmdpbjogN3B4O1xyXG59XHJcbi5zZWxlY3RhYmxlLWlucHV0IHtcclxuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4iLCIuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hcnJvdy1iYWNrIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZGlzbWlzcyB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGlzbWlzczpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5kZWFsZXItbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgbWFyZ2luOiA3cHg7XG59XG5cbi5zZWxlY3RhYmxlLWlucHV0IHtcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-bsnl-certificate/generate-invoice/generate-invoice.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-bsnl-certificate/generate-invoice/generate-invoice.component.ts ***!
  \********************************************************************************************************/
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
        this.modalController.dismiss({ data: "refresh" });
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
            imei: "",
            productnamelist: "",
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
            if (value == "" || null || undefined || value == ",") {
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
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.columns = [
            {
                text: "IMEI",
                datafield: "imei",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 130,
            },
            {
                text: "Service Provider",
                datafield: "serviceprovider",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 140,
            },
            {
                text: "Validity Period",
                datafield: "validityperiod",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 130,
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
                width: 115,
            },
            {
                text: "Rate",
                datafield: "rate",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 80,
            },
            // {
            //   text: "",
            //   datafield: "Edit",
            //   columntype: "button",
            //   cellsalign: "center",
            //   align: "center",
            //   width: 60,
            //   cellsrenderer: (): string => {
            //     return this.myPlatform == "desktop"
            //       ? "Edit"
            //       : "<button>Edit</button>";
            //   },
            //   buttonclick: (row): void => {
            //     this.setValue();
            //   },
            // },
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
            this.header +
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
    };
    GenerateInvoiceComponent.prototype.submitBtn = function () {
        // this.commonService.presentLoader();
        // const url =
        //   serverUrl.web +
        //   "/esim/saveZohoCertificateInvoiceHeader?dealerid=" +
        //   this.header.dealerid +
        //   "&invoicedate=" +
        //   this.header.invoicedate +
        //   "&noofunits=" +
        //   this.header.noofunits +
        //   "&createdby=" +
        //   localStorage.getItem("userName") +
        //   "&userid=" +
        //   this.generateForm.value.userid +
        //   "&password=" +
        //   this.generateForm.value.password;
        // this.ajaxService.ajaxPostWithBody(url, this.tableData).subscribe((res) => {
        //   this.commonService.dismissLoader();
        //   if (res.message == "Certificate Invoice Saved Successfully") {
        //     this.clear();
        //     this.modalController.dismiss({
        //       data: "Certificate Invoice Saved Successfully",
        //     });
        //   } else {
        //     this.commonService.showConfirm(res.message);
        //   }
        // });
        var _this = this;
        var data = this.tableData;
        var arr = [];
        for (var i = 0; i < data.length; i++) {
            arr.push({
                requestid: this.myGrid["attrSource"]["originaldata"][i].requestid,
                serviceprovider: this.myGrid["attrSource"]["originaldata"][i].serviceprovider,
                imei: this.myGrid["attrSource"]["originaldata"][i].imei,
                cardstatus: this.myGrid["attrSource"]["originaldata"][i].cardstatus,
                productid: this.myGrid["attrSource"]["originaldata"][i].productid,
                productname: this.myGrid["attrSource"]["originaldata"][i].productname,
                purchaserate: parseInt(this.myGrid["attrSource"]["originaldata"][i].purchaserate),
                rate: parseInt(this.myGrid["attrSource"]["originaldata"][i].rate),
                description: this.myGrid["attrSource"]["originaldata"][i].description,
                validityperiod: this.myGrid["attrSource"]["originaldata"][i].validityperiod,
                pagename: "BSNL Certificate",
            });
        }
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/esim/saveEsimInvoiceApproved?dealername=" +
            this.header +
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
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        this.currentdate = today;
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
    GenerateInvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-generate-invoice",
            template: __webpack_require__(/*! raw-loader!./generate-invoice.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-bsnl-certificate/generate-invoice/generate-invoice.component.html"),
            styles: [__webpack_require__(/*! ./generate-invoice.component.scss */ "./src/app/delar-application/esim-bsnl-certificate/generate-invoice/generate-invoice.component.scss")]
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



/***/ })

}]);
//# sourceMappingURL=esim-bsnl-certificate-esim-bsnl-certificate-module-es5.js.map