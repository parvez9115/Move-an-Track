(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esim-dealer-detail-esim-dealer-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-dealer-detail/esim-dealer-detail.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-dealer-detail/esim-dealer-detail.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\" slot=\"start\">\n      <ion-icon routerLink=\"/tabs-login/esim-dashboard\" name=\"arrow-back\" style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"></ion-icon>\n    </ion-buttons>\n    <ion-row class=\"toolbar\">\n      <ion-title *ngIf=\"myPlatform != 'desktop'\">CA Request</ion-title>\n      <ion-title *ngIf=\"myPlatform == 'desktop'\">Request Details</ion-title>\n      <ion-col size=\"4\" *ngIf=\"myPlatform == 'desktop'\" style=\"text-align: right\">\n        <ion-button class=\"submitBtn\" size=\"small\" (click)=\"newfunc()\">Export</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <ion-grid>\n    <ion-row *ngIf=\"myPlatform == 'desktop'\" class=\"upperRow\">\n      <ion-col [ngClass]=\"{selectedUpperCol:'true'}\" routerLink=\"/tabs-login/esim-dealer-detail\"\n        routerLinkActive=\"selected\" size=\"1.9\">\n        <ion-label>Ca Request</ion-label>\n      </ion-col>\n      <ion-col [ngClass]=\"{selectedUpperCol:'true'}\" routerLink=\"/tabs-login/esim-renewal\" routerLinkActive=\"selected\"\n        size=\"1.9\">\n        <ion-label>Renewal Request</ion-label>\n      </ion-col>\n      <ion-col [ngClass]=\"{selectedUpperCol:'true'}\" routerLink=\"/tabs-login/device-topup-request-details\"\n        routerLinkActive=\"selected\" size=\"1.9\">\n        <ion-label>Topup Request</ion-label>\n      </ion-col>\n\n      <ion-col [ngClass]=\"{selectedUpperCol:'true'}\" routerLink=\"/tabs-login/device-extend-oneyear-request-details\"\n        routerLinkActive=\"selected\" size=\"1.9\">\n        <ion-label>Extend 1 Yr Request</ion-label>\n      </ion-col>\n      <ion-col [ngClass]=\"{selectedUpperCol:'true'}\" routerLink=\"/tabs-login/device-certificate-request\"\n        routerLinkActive=\"selected\" size=\"1.9\">\n        <ion-label>Certificate Request</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"wrapper-container\">\n      <ion-col size=\"12\">\n        <form [formGroup]=\"DealerForm\">\n          <ion-row class=\"form-field\">\n            <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\">\n              <ion-label class=\"label-head\">Invoice Number:</ion-label>\n              <ionic-selectable class=\"input selectable-input\" formControlName=\"InvoiceNo\"\n                placeholder=\"Select Invoice Number\" [items]=\"Invoice\" [canSearch]=\"true\"\n                (onChange)=\"getinvoicelist($event)\" [hasVirtualScroll]=\"true\" [disabledItems]=\"data\">\n              </ionic-selectable>\n            </ion-col>\n            <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\">\n              <ion-label class=\"label-head\">Box Number:</ion-label>\n              <ion-input type=\"text\" *ngIf=\"!showSerialNo\" placeholder=\"Select Box Number\" formControlName=\"SerialNo\"\n                class=\"input\" disabled></ion-input>\n              <ionic-selectable *ngIf=\"showSerialNo\" class=\"input selectable-input\" formControlName=\"SerialNo\"\n                placeholder=\"Select Box Number\" [disabled]=\"hideSerialNo\" [items]=\"SerialNo\" [canSearch]=\"true\"\n                (onChange)=\"getseriallist($event)\" [hasVirtualScroll]=\"true\" [disabledItems]=\"data\">\n              </ionic-selectable>\n            </ion-col>\n\n\n            <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\" style=\"margin: 25px 0px 0px; text-align: end\">\n              <ion-button class=\"submitbtn\" (click)=\"SearchData()\" [disabled]=\"!DealerForm.valid\">Search</ion-button>\n              <ion-button class=\"submitbtn\" (click)=\"clear(1)\">Clear</ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n\n        <ion-row>\n          <ion-col style=\"margin: 10px 0px 0px\">\n            <ion-label>\n              <span class=\"dealer-label\">Total Selected Row :</span>\n              <span class=\"dealer-data\">{{selectedRow?.length}}</span>\n            </ion-label>\n          </ion-col>\n\n          <ion-col style=\"margin: 10px 0px 0px; text-align: end\">\n            <ion-button class=\"submitbtn\" (click)=\"openModel()\" [disabled]=\"showButton\">Request for\n              Activation</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <jqxGrid #myGrid [selectionmode]=\"'checkbox'\" (onRowselect)=\"myGridOnRowSelect($event)\"\n      (onRowunselect)=\"myGridOnRowSelect($event)\" [enablebrowserselection]=\"true\" [theme]=\"'material'\" [width]=\"'99.5%'\"\n      [autoheight]=\"true\" [source]=\"dataAdapter\" [pagesizeoptions]=\"page\" [sortable]=\"true\" [filterable]=\"true\"\n      [columns]=\"columns\" [columnsresize]=\"true\" [enabletooltips]=\"true\" [showfilterrow]=\"true\" [pageable]=\"true\" style=\"\n        font-size: 16px;\n        text-align: center !important;\n        margin: auto;\n        cursor: pointer;\n      \">\n    </jqxGrid>\n  </ion-grid>\n\n  <ion-fab *ngIf=\"arrow\" style=\"margin-right: 1%; margin-bottom: 9%\" slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToTop()\">\n      <ion-icon class=\"icon\" name=\"arrow-up\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab *ngIf=\"arrow\" style=\"margin-right: 1%; margin-bottom: 5%\" slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToBottom()\">\n      <ion-icon class=\"icon\" name=\"arrow-down\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-dealer-detail/request-details/request-details.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-dealer-detail/request-details/request-details.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Plan Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"myPlatform != 'desktop'\" class=\"content-style label-style\">\n  <ion-grid>\n    <ion-row class=\"form-field\">\n      <ion-col\n        size=\"12\"\n        size-sm=\"12\"\n        size-md=\"10\"\n        offset-md=\"1\"\n        size-lg=\"12\"\n        offset-lg=\"0\"\n      >\n        <form [formGroup]=\"confirmForm\">\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">Select the Plan :</ion-label>\n              <ionic-selectable\n                class=\"label-style selectable-input\"\n                formControlName=\"validity\"\n                placeholder=\"Select the Plan Validity\"\n                [items]=\"valid\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n                [disabledItems]=\"data\"\n              >\n              </ionic-selectable>\n            </ion-col>\n          </ion-row>\n        </form>\n\n        <ion-row class=\"content-style\">\n          <ion-col style=\"text-align: center !important\">\n            <ion-button\n              class=\"button\"\n              type=\"submit\"\n              [disabled]=\"!confirmForm.valid\"\n              (click)=\"submitBtn()\"\n              >Submit\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf=\"myPlatform == 'desktop'\" class=\"content-style label-style\">\n  <ion-row>\n    <ion-col>\n      <form [formGroup]=\"confirmForm\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Select the Plan : </ion-col>\n              <ion-col size=\"7\">\n                <ionic-selectable\n                  class=\"label-style selectable-input\"\n                  formControlName=\"validity\"\n                  placeholder=\"Select the Plan Validity\"\n                  [items]=\"valid\"\n                  [canSearch]=\"true\"\n                  [hasVirtualScroll]=\"true\"\n                  [disabledItems]=\"data\"\n                >\n                </ionic-selectable>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 20px\">\n          <ion-button\n            class=\"button\"\n            type=\"submit\"\n            [disabled]=\"!confirmForm.valid || button\"\n            (click)=\"submitBtn()\"\n            >Submit\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/esim-dealer-detail/esim-dealer-detail.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/delar-application/esim-dealer-detail/esim-dealer-detail.module.ts ***!
  \***********************************************************************************/
/*! exports provided: EsimDealerDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimDealerDetailPageModule", function() { return EsimDealerDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _esim_dealer_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esim-dealer-detail.page */ "./src/app/delar-application/esim-dealer-detail/esim-dealer-detail.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var _request_details_request_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./request-details/request-details.component */ "./src/app/delar-application/esim-dealer-detail/request-details/request-details.component.ts");










const routes = [
    {
        path: "",
        component: _esim_dealer_detail_page__WEBPACK_IMPORTED_MODULE_6__["EsimDealerDetailPage"],
    },
    {
        path: "request-details",
        component: _request_details_request_details_component__WEBPACK_IMPORTED_MODULE_9__["RequestDetailsComponent"],
    },
];
let EsimDealerDetailPageModule = class EsimDealerDetailPageModule {
};
EsimDealerDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
        declarations: [_esim_dealer_detail_page__WEBPACK_IMPORTED_MODULE_6__["EsimDealerDetailPage"], _request_details_request_details_component__WEBPACK_IMPORTED_MODULE_9__["RequestDetailsComponent"]],
    })
], EsimDealerDetailPageModule);



/***/ }),

/***/ "./src/app/delar-application/esim-dealer-detail/esim-dealer-detail.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/delar-application/esim-dealer-detail/esim-dealer-detail.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fabbutton {\n  --background: whitesmoke;\n  --background-hover: grey;\n}\n\n.icon {\n  color: black;\n}\n\n.icon:hover {\n  color: white;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.dealer-data {\n  font-size: 14px;\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -11px;\n  right: -2px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -15px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.upperCol {\n  text-align: center;\n  border-radius: 8px;\n  margin: 2px;\n  color: black;\n  font-family: sans-serif;\n  font-size: 13px;\n  text-transform: uppercase;\n}\n\n.upperRow {\n  background: #eeeeee;\n  padding: 1px;\n  border-bottom: 2px solid #7d67f8;\n  height: 56px;\n}\n\n.selectedUpperCol {\n  background: #ebebeb;\n  text-align: center;\n  margin-right: 2px;\n  color: black;\n  font-family: sans-serif;\n  cursor: pointer;\n  font-size: 10px;\n  font-weight: bold;\n  text-transform: uppercase;\n  border-right: 1px solid #b5b5b5;\n  align-self: center;\n  padding-top: 8px;\n  margin-top: 15px;\n}\n\n.selected {\n  margin-top: 20px;\n  color: black;\n  background-color: #ffffff;\n  border-bottom: none;\n  border-top: 2px solid #7d67f8;\n  border-left: 2px solid #7d67f8;\n  border-right: 2px solid #7d67f8;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 11px;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1kZWFsZXItZGV0YWlsL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGVzaW0tZGVhbGVyLWRldGFpbFxcZXNpbS1kZWFsZXItZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1kZWFsZXItZGV0YWlsL2VzaW0tZGVhbGVyLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtFQUNBLHdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0FDR0Y7O0FEQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDR0Y7O0FEREE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNJRjs7QURGQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNLRjs7QURIQTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ01GOztBREpBO0VBQ0UscUJBQUE7QUNPRjs7QURMQTtFQUNFO0lBQ0UsZ0JBQUE7RUNRRjs7RUROQTtJQUNFLFVBQUE7RUNTRjtBQUNGOztBRFBBO0VBQ0U7SUFDRSxTQUFBO0VDU0Y7O0VEUEE7SUFDRSxVQUFBO0VDVUY7QUFDRjs7QURSQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUNVRjs7QURSQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VDV0Y7QUFDRjs7QURUQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDV0Y7QUFDRjs7QURUQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDV0Y7O0FEVEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDWUY7O0FEVkE7RUFDRSxlQUFBO0FDYUY7O0FEWEE7O0VBRUUseUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2NGOztBRFhBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2NGOztBRFhBO0VBQ0UsMkJBQUE7QUNjRjs7QURYQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNjRjs7QURYQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDY0Y7O0FEWEE7RUFDRSxtQkFBQTtBQ2NGOztBRFhBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNjRjs7QURYQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQ2NGOztBRFJBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNXRjs7QURQQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNVRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tZGVhbGVyLWRldGFpbC9lc2ltLWRlYWxlci1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhYmJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogZ3JleTtcclxufVxyXG4uaWNvbiB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5pY29uOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgbWFyZ2luOiA3cHg7XHJcbn1cclxuLnNlbGVjdGFibGUtaW5wdXQge1xyXG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5kZWFsZXItbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLnN1Ym1pdEJ0biB7XHJcbiAgbWFyZ2luOiAwcHggMTRweCAwcHggMHB4O1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAtLWNvbG9yOiAjN2M2OGY4O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcclxuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcclxufVxyXG4uc3VibWl0YnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICM2MjUyZWU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZm9ybS1maWVsZCB7XHJcbiAgICB6b29tOiA4MCU7XHJcbiAgfVxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuLmZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweCkgYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MTAyNHB4KSB7XHJcbiAgLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogOHB4IDFweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcbi5sYWJlbC1oZWFkIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcclxufVxyXG4uZGVhbGVyLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5kZWFsZXItZGF0YSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5wZGYtd3JhcHBlcixcclxuLmV4Y2VsLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9leGNlbE5ldy5zdmdcIikgbm8tcmVwZWF0O1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmZhYi1idG4ge1xyXG4gIC0tYmFja2dyb3VuZDogbGF2ZW5kZXI7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xMXB4O1xyXG4gIHJpZ2h0OiAtMnB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxufVxyXG5cclxuLmZhYi1idG46aG92ZXIge1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2I2YjZiNjtcclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLnVwcGVyQ29sIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnVwcGVyUm93IHtcclxuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xyXG4gIHBhZGRpbmc6IDFweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzdkNjdmODtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbn1cclxuXHJcbi8vIC5zZWxlY3RlZFVwcGVyQ29sIHsvLyAgIGJhY2tncm91bmQ6ICNmZmZmZmY7Ly8gICB0ZXh0LWFsaWduOiBjZW50ZXI7Ly8gICBib3JkZXItcmFkaXVzOiA4cHg7Ly8gICBtYXJnaW46IDEwcHg7Ly8gICBjb2xvcjogYmxhY2s7Ly8gICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsvLyAgIGN1cnNvcjogcG9pbnRlcjsvLyAgIGZvbnQtc2l6ZTogMTNweDsvLyAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7Ly8gICBhbGlnbi1zZWxmOiBjZW50ZXI7Ly8gfVxyXG4vLyAuc2VsZWN0ZWRVcHBlckNvbDpob3ZlciB7Ly8gICBjb2xvcjogcmdiKDAsIDAsIDApOy8vICAgYmFja2dyb3VuZC1jb2xvcjogI2EwOTVlNzsvLyB9XHJcbi8vIC5zZWxlY3RlZCB7Ly8gICBjb2xvcjogd2hpdGU7Ly8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IxZGZmOy8vIH1cclxuLnNlbGVjdGVkVXBwZXJDb2wge1xyXG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2I1YjViNTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4vLyAuc2VsZWN0ZWRVcHBlckNvbDpob3ZlciB7Ly8gICBjb2xvcjogcmdiKDAsIDAsIDApOy8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsvLyAgIGZvbnQtc2l6ZTogMTJweDsvLyAgIGZvbnQtd2VpZ2h0OiBib2xkOy8vICAgdHJhbnNpdGlvbjogMC4zczsvLyAgIHBhZGRpbmctdG9wOiA4cHg7Ly8gICBib3gtc2hhZG93OiAwcHggMnB4IDVweDsvLyAgIG1hcmdpbi10b3A6IDIwcHg7Ly8gfVxyXG4uc2VsZWN0ZWQge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgIzdkNjdmODtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM3ZDY3Zjg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzdkNjdmODtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMTFweDtcclxuICBib3gtc2hhZG93OiAwcHggLTRweCA3cHggI2MwYjVmZjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuIiwiLmZhYmJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBncmV5O1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmljb246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgbWFyZ2luOiA3cHg7XG59XG5cbi5zZWxlY3RhYmxlLWlucHV0IHtcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uZGVhbGVyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc3VibWl0QnRuIHtcbiAgbWFyZ2luOiAwcHggMTRweCAwcHggMHB4O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM3YzY4Zjg7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xufVxuXG4uc3VibWl0YnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNjI1MmVlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDhweCAxcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxufVxuLmxhYmVsLWhlYWQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xufVxuXG4uZGVhbGVyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZGVhbGVyLWRhdGEge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wZGYtd3JhcHBlcixcbi5leGNlbC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2V4Y2VsTmV3LnN2Z1wiKSBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5mYWItYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiBsYXZlbmRlcjtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTExcHg7XG4gIHJpZ2h0OiAtMnB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uZmFiLWJ0bjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2I2YjZiNjtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi51cHBlckNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udXBwZXJSb3cge1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICBwYWRkaW5nOiAxcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBoZWlnaHQ6IDU2cHg7XG59XG5cbi5zZWxlY3RlZFVwcGVyQ29sIHtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYjViNWI1O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5zZWxlY3RlZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzdkNjdmODtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzdkNjdmODtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTFweDtcbiAgYm94LXNoYWRvdzogMHB4IC00cHggN3B4ICNjMGI1ZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-dealer-detail/esim-dealer-detail.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/delar-application/esim-dealer-detail/esim-dealer-detail.page.ts ***!
  \*********************************************************************************/
/*! exports provided: EsimDealerDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimDealerDetailPage", function() { return EsimDealerDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _request_details_request_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./request-details/request-details.component */ "./src/app/delar-application/esim-dealer-detail/request-details/request-details.component.ts");










let EsimDealerDetailPage = class EsimDealerDetailPage {
    constructor(platform, formBuilder, modalController, ajaxService, alertController, commonService, ete) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.alertController = alertController;
        this.commonService = commonService;
        this.ete = ete;
        this.show = false;
        this.showbutton = false;
        this.hideSerialNo = false;
        this.showDealer = false;
        this.showInvoice = false;
        this.showSerialNo = false;
        this.showInvoiceNumber = false;
        this.companyId = localStorage.getItem("userName");
        this.selectedRow = [];
        this.showButton = true;
        this.arrow = false;
        this.getinvoicelist = (event) => {
            if (event.value)
                this.DealerForm.value.InvoiceNo = event.value;
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
                "/esim/getInvoiceSerial?companyid=apm&invoiceno=" +
                this.DealerForm.value.InvoiceNo;
            this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
                this.SerialNo = res;
                if (this.SerialNo.length == 0) {
                    this.showSerialNo = false;
                }
                else {
                    this.reset();
                    this.showSerialNo = true;
                }
            });
        };
        this.getseriallist = (event) => {
            if (event.value)
                this.DealerForm.value.SerialNo = event.value;
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
    clear(d) {
        this.DealerForm.patchValue({
            InvoiceNo: "",
            SerialNo: "",
        });
        this.hideSerialNo = true;
        this.show = false;
        this.showInvoice = false;
        this.showSerialNo = false;
        if (d == 1) {
            this.SearchData();
        }
    }
    reset() {
        this.DealerForm.patchValue({
            SerialNo: "",
        });
    }
    getdealerlist() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/esim/getDealerInvoice?companyid=apm&dealer=" +
            localStorage.getItem("userName");
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.Invoice = res;
        });
    }
    createForm() {
        this.DealerForm = this.formBuilder.group({
            InvoiceNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            SerialNo: [""],
        });
    }
    openModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let selectdata = this.myGrid.getselectedrowindexes();
            var arr = [];
            for (let i = 0; i < selectdata.length; i++) {
                arr.push({
                    carequestid: "",
                    iccidno1: this.myGrid["attrSource"]["originaldata"][selectdata[i]].iccidno1,
                    iccidno2: this.myGrid["attrSource"]["originaldata"][selectdata[i]].iccidno2,
                    vltdsno: this.myGrid["attrSource"]["originaldata"][selectdata[i]].vltdsno,
                    imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
                    carequestdate: this.myGrid["attrSource"]["originaldata"][selectdata[i]]
                        .carequestdate,
                    createdby: this.myGrid["attrSource"]["originaldata"][selectdata[i]].createdby,
                    createddate: null,
                    updatedby: this.myGrid["attrSource"]["originaldata"][selectdata[i]].createdby,
                    updateddate: null,
                });
            }
            const modal = yield this.modalController.create({
                component: _request_details_request_details_component__WEBPACK_IMPORTED_MODULE_9__["RequestDetailsComponent"],
                cssClass: "validityform",
                componentProps: {
                    value: arr,
                },
            });
            modal.onDidDismiss().then((data) => {
                if (data.data.data == "CA Request Saved Successfully") {
                    this.commonService.dismissLoader();
                    this.data = "CA Request Saved Successfully";
                    this.show = false;
                    this.clear();
                    this.SearchData();
                }
            });
            return yield modal.present();
        });
    }
    // const url =
    //   serverUrl.web + "/esim/saveEsimCARequest?companyid=apm&branchid=apm";
    // this.ajaxService.ajaxPostWithBody(url, arr).subscribe((res) => {
    //   if (res.message == "CA Request Saved Successfully") {
    //     this.commonService.showConfirm("CA Request Saved Successfully");
    //     this.modalController.dismiss();
    //     this.show = false;
    //     this.clear();
    //   } else {
    //     this.commonService.showConfirm("Please Select the Row for Request");
    //   }
    // });
    SearchData() {
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/esim/getDealerEsimSalesAll?companyid=apm&invoiceno=" +
            this.DealerForm.value.InvoiceNo.trim() +
            "&dealer=" +
            localStorage.getItem("userName") +
            "&serialno=" +
            this.DealerForm.value.SerialNo.trim();
        // "&iccidno=" +
        // this.DealerForm.value.iccidNumber +
        // "&imeino=" +
        // this.DealerForm.value.ImeiNumber;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.tableData = res;
            this.commonService.dismissLoader();
            if (res.length == 0) {
                this.commonService.showConfirm("CA Request not available");
                this.show = false;
            }
            else {
                this.details = res[0];
                if (this.data != undefined) {
                    this.commonService.showConfirm(this.data);
                    this.data = undefined;
                }
                this.show = true;
                this.renderer = (row, column, value) => {
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
                this.source = { localdata: this.tableData };
                this.dataAdapter = new jqx.dataAdapter(this.source);
                this.columns = [
                    {
                        text: "VLTD No",
                        datafield: "vltdsno",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 155,
                    },
                    {
                        text: "Box No",
                        datafield: "serialno",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 155,
                    },
                    {
                        text: "ICCID No 1",
                        datafield: "iccidno1",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 155,
                    },
                    {
                        text: "ICCID No 2",
                        datafield: "iccidno2",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 155,
                    },
                    {
                        text: "IMEI No",
                        datafield: "imei",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 155,
                    },
                    {
                        text: "SIM 1",
                        datafield: "sim1",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 110,
                    },
                    {
                        text: "SIM 2",
                        datafield: "sim2",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 110,
                    },
                    {
                        text: "Slot No",
                        datafield: "slotno",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 102,
                    },
                ];
                this.myGrid.clearselection();
            }
        });
    }
    myGridOnRowSelect(event) {
        this.selectedRow = this.myGrid.getselectedrowindexes();
        if (this.selectedRow.length > 0) {
            this.showButton = false;
        }
        else {
            this.showButton = true;
        }
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
            title: "Commercial Activation Request",
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
        this.commonService.dismissLoader();
        this.createForm();
    }
    ngAfterViewInit() {
        this.myGrid.horizontalscrollbarstep(["70"]);
        this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
    }
    ionViewWillEnter() {
        this.data = undefined;
        this.clear();
        this.getdealerlist();
        this.SearchData();
    }
};
EsimDealerDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("selectComponent", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic_selectable__WEBPACK_IMPORTED_MODULE_4__["IonicSelectableComponent"])
], EsimDealerDetailPage.prototype, "selectComponent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EsimDealerDetailPage.prototype, "myGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EsimDealerDetailPage.prototype, "content", void 0);
EsimDealerDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-esim-dealer-detail",
        template: __webpack_require__(/*! raw-loader!./esim-dealer-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-dealer-detail/esim-dealer-detail.page.html"),
        styles: [__webpack_require__(/*! ./esim-dealer-detail.page.scss */ "./src/app/delar-application/esim-dealer-detail/esim-dealer-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"]])
], EsimDealerDetailPage);



/***/ }),

/***/ "./src/app/delar-application/esim-dealer-detail/request-details/request-details.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-dealer-detail/request-details/request-details.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 14px;\n  margin: 7px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #FFEBCD;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 0px 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1kZWFsZXItZGV0YWlsL3JlcXVlc3QtZGV0YWlscy9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxlc2ltLWRlYWxlci1kZXRhaWxcXHJlcXVlc3QtZGV0YWlsc1xccmVxdWVzdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWRlYWxlci1kZXRhaWwvcmVxdWVzdC1kZXRhaWxzL3JlcXVlc3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQ0NKOztBRENBO0VBQ0k7SUFDSSxTQUFBO0VDRU47O0VEQ0U7SUFDSSxVQUFBO0VDRU47QUFDRjs7QURDQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWRlYWxlci1kZXRhaWwvcmVxdWVzdC1kZXRhaWxzL3JlcXVlc3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1zdHlsZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIG1hcmdpbjogN3B4O1xufVxuXG4uY29udGVudC1zdHlsZSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbn1cblxuLmNvbC1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbiNhZGQtaWNvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkZFQkNEO1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjN2M2OGY4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XG4gICAgLmZvcm0tZmllbGQge1xuICAgICAgICB6b29tOiA4MCU7XG4gICAgfVxuXG4gICAgI3N1Ym1pdGJ0biB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxufVxuXG4uZm9ybS1maWVsZCB7XG4gICAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLnNlbGVjdGFibGUtaW5wdXQge1xuICAgIHBhZGRpbmc6IDhweCAxMXB4IDBweCA2cHg7XG59IiwiLmxhYmVsLXN0eWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1hcmdpbjogN3B4O1xufVxuXG4uY29udGVudC1zdHlsZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29sLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI2FkZC1pY29uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZFQkNEO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICAtLWJhY2tncm91bmQ6ICM3YzY4Zjg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCAwcHggNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-dealer-detail/request-details/request-details.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-dealer-detail/request-details/request-details.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: RequestDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetailsComponent", function() { return RequestDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let RequestDetailsComponent = class RequestDetailsComponent {
    constructor(platform, formBuilder, modalController, ajaxService, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.valid = ["1 Year", "2 Year"];
        this.button = false;
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    createForm() {
        this.confirmForm = this.formBuilder.group({
            validity: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    submitBtn() {
        this.commonService.presentLoader();
        this.button = true;
        const arr = [];
        this.value.map((data) => {
            arr.push(Object.assign({}, data, { validityperiod: this.confirmForm.value.validity }));
        });
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/esim/saveEsimCARequest?companyid=apm&branchid=apm&dealerid=" +
            localStorage.getItem("userName");
        this.ajaxService.ajaxPostWithBody(url, arr).subscribe((res) => {
            if (res.message == "CA Request Saved Successfully") {
                this.modalController.dismiss({
                    data: "CA Request Saved Successfully",
                });
                this.button = true;
            }
            else {
                this.commonService.showConfirm(res.message);
                this.button = false;
            }
        });
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.createForm();
    }
};
RequestDetailsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RequestDetailsComponent.prototype, "value", void 0);
RequestDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-request-details",
        template: __webpack_require__(/*! raw-loader!./request-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-dealer-detail/request-details/request-details.component.html"),
        styles: [__webpack_require__(/*! ./request-details.component.scss */ "./src/app/delar-application/esim-dealer-detail/request-details/request-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], RequestDetailsComponent);



/***/ })

}]);
//# sourceMappingURL=esim-dealer-detail-esim-dealer-detail-module-es2015.js.map