(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esim-billing-generation-esim-billing-generation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-billing-generation/esim-billing-generation.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-billing-generation/esim-billing-generation.page.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-title>Billing Generation</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"wrapper-container\">\n      <ion-col size=\"12\">\n        <form [formGroup]=\"BillinggenForm\">\n          <ion-row class=\"form-field\">\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Sim Provider:</ion-label>\n              <ionic-selectable\n                class=\"input selectable-input\"\n                formControlName=\"provider\"\n                placeholder=\"Select the Sim Provider\"\n                [items]=\"Provider\"\n                (onChange)=\"getplanname($event)\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n                [disabledItems]=\"data\"\n              >\n              </ionic-selectable>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Plan Name:</ion-label>\n              <ion-input\n                type=\"text\"\n                *ngIf=\"!showplaname\"\n                placeholder=\"Select the Plan Name\"\n                formControlName=\"planname\"\n                class=\"input\"\n                disabled\n              ></ion-input>\n              <ionic-selectable\n                *ngIf=\"showplaname\"\n                class=\"input selectable-input\"\n                formControlName=\"planname\"\n                placeholder=\"Select the Plan Name\"\n                [items]=\"Planname\"\n                (onChange)=\"getaccountno($event)\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n                [disabledItems]=\"data\"\n              >\n              </ionic-selectable>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Account No:</ion-label>\n              <ion-input\n                type=\"text\"\n                *ngIf=\"!showaccountno\"\n                placeholder=\"Select the Account No\"\n                formControlName=\"accountno\"\n                class=\"input\"\n                disabled\n              ></ion-input>\n              <ionic-selectable\n                *ngIf=\"showaccountno\"\n                class=\"input selectable-input\"\n                formControlName=\"accountno\"\n                placeholder=\"Select the Account No\"\n                [items]=\"Accountno\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n                [disabledItems]=\"data\"\n              >\n              </ionic-selectable>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">From Date:</ion-label>\n              <ion-input\n                type=\"date\"\n                formControlName=\"fromdate\"\n                class=\"input\"\n              ></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">To Date:</ion-label>\n              <ion-input\n                type=\"date\"\n                formControlName=\"todate\"\n                class=\"input\"\n              ></ion-input>\n            </ion-col>\n\n            <ion-col style=\"margin: 27px 0px 0px; text-align: end\">\n              <ion-button\n                class=\"submitbtn\"\n                (click)=\"SearchData()\"\n                [disabled]=\"!BillinggenForm.valid\"\n                >Bill Generate</ion-button\n              >\n              <ion-button\n                class=\"submitbtn\"\n                [disabled]=\"!BillinggenForm.valid\"\n                (click)=\"clear()\"\n                >Clear</ion-button\n              >\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"show\">\n      <ion-col style=\"margin-right: 4%; margin-bottom: 9px; text-align: end\">\n        <ion-label class=\"dealer-label\"\n          >Total Amount : {{totalamount.totalbillamount}}\n        </ion-label>\n      </ion-col>\n    </ion-row>\n\n    <jqxGrid\n      *ngIf=\"show\"\n      #myGrid\n      [theme]=\"'material'\"\n      (onRowclick)=\"myGridOnRowSelect($event)\"\n      [width]=\"'99%'\"\n      [autoheight]=\"true\"\n      [source]=\"dataAdapter\"\n      [columns]=\"columns\"\n      [sortable]=\"true\"\n      [filterable]=\"true\"\n      [columnsresize]=\"true\"\n      [enablebrowserselection]=\"true\"\n      [enabletooltips]=\"true\"\n      [pagesizeoptions]=\"page\"\n      [pageable]=\"true\"\n      [showfilterrow]=\"true\"\n      style=\"\n        font-size: 16px;\n        text-align: center !important;\n        margin: auto;\n        cursor: pointer;\n      \"\n    >\n    </jqxGrid>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/esim-billing-generation/esim-billing-generation.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/delar-application/esim-billing-generation/esim-billing-generation.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: EsimBillingGenerationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimBillingGenerationPageModule", function() { return EsimBillingGenerationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _esim_billing_generation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esim-billing-generation.page */ "./src/app/delar-application/esim-billing-generation/esim-billing-generation.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");









const routes = [
    {
        path: "",
        component: _esim_billing_generation_page__WEBPACK_IMPORTED_MODULE_6__["EsimBillingGenerationPage"],
    },
];
let EsimBillingGenerationPageModule = class EsimBillingGenerationPageModule {
};
EsimBillingGenerationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_esim_billing_generation_page__WEBPACK_IMPORTED_MODULE_6__["EsimBillingGenerationPage"]],
    })
], EsimBillingGenerationPageModule);



/***/ }),

/***/ "./src/app/delar-application/esim-billing-generation/esim-billing-generation.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/delar-application/esim-billing-generation/esim-billing-generation.page.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.documents {\n  margin: 19px 10px 0px;\n  text-align: center;\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.myGrid {\n  max-height: auto;\n}\n\n.dealer-label {\n  font-size: 18px;\n  font-weight: 500;\n  color: white;\n  background-color: #6252ee;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1iaWxsaW5nLWdlbmVyYXRpb24vRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcZXNpbS1iaWxsaW5nLWdlbmVyYXRpb25cXGVzaW0tYmlsbGluZy1nZW5lcmF0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1iaWxsaW5nLWdlbmVyYXRpb24vZXNpbS1iaWxsaW5nLWdlbmVyYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxnQkFBQTtFQ0NGOztFREVBO0lBQ0UsVUFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLFNBQUE7RUNBRjs7RURHQTtJQUNFLFVBQUE7RUNBRjtBQUNGOztBREdBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUNERjtBQUNGOztBRElBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUNGRjtBQUNGOztBRElBO0VBQ0UsZ0JBQUE7QUNGRjs7QURJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tYmlsbGluZy1nZW5lcmF0aW9uL2VzaW0tYmlsbGluZy1nZW5lcmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgbWFyZ2luOiA3cHg7XHJcbn1cclxuXHJcbi5zZWxlY3RhYmxlLWlucHV0IHtcclxuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmRvY3VtZW50cyB7XHJcbiAgbWFyZ2luOiAxOXB4IDEwcHggMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxhYmVsLWhlYWQge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xyXG59XHJcblxyXG4uc3VibWl0QnRuIHtcclxuICBtYXJnaW46IDBweCAxNHB4IDBweCAwcHg7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIC0tY29sb3I6ICM3YzY4Zjg7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjN2M2OGY4O1xyXG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xyXG59XHJcblxyXG4uc3VibWl0YnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICM2MjUyZWU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZm9ybS1maWVsZCB7XHJcbiAgICB6b29tOiA4MCU7XHJcbiAgfVxyXG5cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweCkgYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDhweCAxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG4ubXlHcmlkIHtcclxuICBtYXgtaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5kZWFsZXItbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjI1MmVlO1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG4iLCIuaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIG1hcmdpbjogN3B4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmRvY3VtZW50cyB7XG4gIG1hcmdpbjogMTlweCAxMHB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGFiZWwtaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XG59XG5cbi5zdWJtaXRCdG4ge1xuICBtYXJnaW46IDBweCAxNHB4IDBweCAwcHg7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XG59XG5cbi5zdWJtaXRidG4ge1xuICAtLWJhY2tncm91bmQ6ICM2MjUyZWU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4ubXlHcmlkIHtcbiAgbWF4LWhlaWdodDogYXV0bztcbn1cblxuLmRlYWxlci1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjI1MmVlO1xuICBwYWRkaW5nOiA4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/esim-billing-generation/esim-billing-generation.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/delar-application/esim-billing-generation/esim-billing-generation.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: EsimBillingGenerationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimBillingGenerationPage", function() { return EsimBillingGenerationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








let EsimBillingGenerationPage = class EsimBillingGenerationPage {
    constructor(loadingController, ajaxService, formBuilder, commonService) {
        this.loadingController = loadingController;
        this.ajaxService = ajaxService;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.page = [];
        this.showplaname = false;
        this.showaccountno = false;
        this.show = false;
        this.getplanname = (event) => {
            if (event.value)
                this.BillinggenForm.value.provider = event.value;
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                "/esim/getProviderBillingPlan?provider=" +
                this.BillinggenForm.value.provider;
            this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
                this.Planname = res;
                if (this.Planname.length == 0) {
                    this.showplaname = false;
                }
                else {
                    this.reset();
                    this.showplaname = true;
                }
            });
        };
        this.getaccountno = (event) => {
            if (event.value)
                this.BillinggenForm.value.planname = event.value;
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                "/esim/getProviderAccountNo?provider=" +
                this.BillinggenForm.value.provider;
            this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
                this.Accountno = res;
                if (this.Accountno.length == 0) {
                    this.showaccountno = false;
                }
                else {
                    this.resets();
                    this.showaccountno = true;
                }
            });
        };
    }
    createForm() {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        var todaytime = now.getHours() + ":" + now.getMinutes();
        this.BillinggenForm = this.formBuilder.group({
            provider: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            planname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            accountno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fromdate: [today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            todate: [today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    clear() {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        var todaytime = now.getHours() + ":" + now.getMinutes();
        this.BillinggenForm.patchValue({
            provider: "",
            planname: "",
            accountno: "",
            fromdate: today,
            todate: today,
        });
        this.showplaname = false;
        this.showaccountno = false;
        this.show = false;
    }
    reset() {
        this.BillinggenForm.patchValue({
            planname: "",
        });
    }
    resets() {
        this.BillinggenForm.patchValue({
            accountno: "",
        });
    }
    getsimprovider() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/getEsimProvider";
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.Provider = res;
        });
    }
    gettotalamount() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/esim/getTotalBillAmount?provider=" +
            this.BillinggenForm.value.provider +
            "&planname=" +
            this.BillinggenForm.value.planname +
            "&accountno=" +
            this.BillinggenForm.value.accountno +
            "&fromdate=" +
            this.BillinggenForm.value.fromdate +
            "&todate=" +
            this.BillinggenForm.value.todate;
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.totalamount = res;
        });
    }
    SearchData() {
        this.page = [];
        this.commonService.presentLoader();
        var data;
        data = {
            provider: this.BillinggenForm.value.provider.toString(),
            planname: this.BillinggenForm.value.planname.toString(),
            accountno: this.BillinggenForm.value.accountno.toString(),
            fromdate: this.BillinggenForm.value.fromdate.toString(),
            todate: this.BillinggenForm.value.todate.toString(),
            createdby: localStorage.getItem("userName"),
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/getEsimBillingGeneration";
        this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
            this.tableData = res;
            this.gettotalamount();
            this.commonService.dismissLoader();
            this.show = true;
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
                    text: "Sim Provider",
                    datafield: "provider",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "Plan Name",
                    datafield: "planname",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "Account No",
                    datafield: "accountno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "Sim No",
                    datafield: "simno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "From Date",
                    datafield: "fromdate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "To Date",
                    datafield: "todate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "Amount",
                    datafield: "amount",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "Created by",
                    datafield: "createdby",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
            ];
        });
    }
    ngOnInit() {
        this.createForm();
    }
    ionViewWillEnter() {
        this.getsimprovider();
        this.clear();
    }
};
EsimBillingGenerationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_6__["jqxGridComponent"])
], EsimBillingGenerationPage.prototype, "myGrid", void 0);
EsimBillingGenerationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-esim-billing-generation",
        template: __webpack_require__(/*! raw-loader!./esim-billing-generation.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-billing-generation/esim-billing-generation.page.html"),
        styles: [__webpack_require__(/*! ./esim-billing-generation.page.scss */ "./src/app/delar-application/esim-billing-generation/esim-billing-generation.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], EsimBillingGenerationPage);



/***/ })

}]);
//# sourceMappingURL=esim-billing-generation-esim-billing-generation-module-es2015.js.map