(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["zoho-books-customers-zoho-books-customers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/zoho-books-customers/zoho-books-customers.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/zoho-books-customers/zoho-books-customers.page.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons\n      *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\"\n      slot=\"start\"\n    >\n      <ion-icon\n        routerLink=\"/tabs-login/esim-dashboard\"\n        name=\"arrow-back\"\n        style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-row>\n      <ion-title>Esim Zoho Book Customers</ion-title>\n      <ion-col\n        *ngIf=\"myPlatform == 'desktop'\"\n        size=\"4\"\n        style=\"text-align: right\"\n      >\n        <ion-button class=\"submitBtn\" size=\"small\" (click)=\"newfunc()\"\n          >Export</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"wrapper-container\">\n      <ion-col size=\"12\">\n        <form [formGroup]=\"Esimzohocustomer\">\n          <ion-row class=\"form-field\">\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Dealer :</ion-label>\n              <ionic-selectable\n                class=\"input selectable-input\"\n                formControlName=\"dealername\"\n                placeholder=\"Select the Dealer\"\n                [items]=\"dealer\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n              >\n              </ionic-selectable>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"3.9\" size-md=\"3.9\">\n              <ion-label class=\"label-head\">Zoho Customer :</ion-label>\n              <ionic-selectable\n                (onChange)=\"selectvalue($event)\"\n                class=\"input selectable-input\"\n                [(ngModel)]=\"product\"\n                formControlName=\"customername\"\n                placeholder=\"Select the Customer Name\"\n                [items]=\"books\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n                itemValueField=\"customername\"\n                itemTextField=\"customername\"\n              >\n              </ionic-selectable>\n            </ion-col>\n\n            <ion-col\n              size=\"12\"\n              size-lg=\"2.4\"\n              size-md=\"2.4\"\n              style=\"margin: 25px 0px 0px; text-align: end\"\n            >\n              <ion-button\n                *ngIf=\"!hideSerialNo\"\n                class=\"submitbtn\"\n                (click)=\"submit()\"\n                [disabled]=\"!Esimzohocustomer.valid\"\n                >Add</ion-button\n              >\n              <ion-button\n                *ngIf=\"hideSerialNo\"\n                class=\"submitbtn\"\n                (click)=\"edit()\"\n                [disabled]=\"!Esimzohocustomer.valid\"\n                >Save</ion-button\n              >\n              <ion-button class=\"submitbtn\" (click)=\"clear()\">Clear</ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n\n    <ion-row\n      ><ion-col>\n        <jqxGrid\n          #myGrid\n          (onRowclick)=\"myGridOnRowSelect($event)\"\n          [theme]=\"'material'\"\n          [width]=\"'99%'\"\n          [autoheight]=\"true\"\n          [source]=\"dataAdapter\"\n          [columns]=\"columns\"\n          [sortable]=\"true\"\n          [filterable]=\"true\"\n          [columnsresize]=\"true\"\n          [enablebrowserselection]=\"true\"\n          [enabletooltips]=\"true\"\n          [pagesizeoptions]=\"page\"\n          [pageable]=\"true\"\n          [showfilterrow]=\"true\"\n          style=\"\n            font-size: 16px;\n            text-align: center !important;\n            margin: auto;\n            cursor: pointer;\n          \"\n        >\n        </jqxGrid> </ion-col\n    ></ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/zoho-books-customers/zoho-books-customers.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/zoho-books-customers/zoho-books-customers.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ZohoBooksCustomersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZohoBooksCustomersPageModule", function() { return ZohoBooksCustomersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _zoho_books_customers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zoho-books-customers.page */ "./src/app/delar-application/zoho-books-customers/zoho-books-customers.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");









var routes = [
    {
        path: "",
        component: _zoho_books_customers_page__WEBPACK_IMPORTED_MODULE_6__["ZohoBooksCustomersPage"],
    },
];
var ZohoBooksCustomersPageModule = /** @class */ (function () {
    function ZohoBooksCustomersPageModule() {
    }
    ZohoBooksCustomersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            declarations: [_zoho_books_customers_page__WEBPACK_IMPORTED_MODULE_6__["ZohoBooksCustomersPage"]],
        })
    ], ZohoBooksCustomersPageModule);
    return ZohoBooksCustomersPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/zoho-books-customers/zoho-books-customers.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/zoho-books-customers/zoho-books-customers.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fabbutton {\n  --background: whitesmoke;\n  --background-hover: grey;\n}\n\n.icon {\n  color: black;\n}\n\n.icon:hover {\n  color: white;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.documents {\n  margin: 19px 10px 0px;\n  text-align: center;\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -1px;\n  right: -3px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -10px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.myGrid {\n  max-height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vem9oby1ib29rcy1jdXN0b21lcnMvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcem9oby1ib29rcy1jdXN0b21lcnNcXHpvaG8tYm9va3MtY3VzdG9tZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vem9oby1ib29rcy1jdXN0b21lcnMvem9oby1ib29rcy1jdXN0b21lcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSx3QkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtBQ0dGOztBREFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0dGOztBRERBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDSUY7O0FERkE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDS0Y7O0FESEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ01GOztBREhBO0VBQ0Usd0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FDTUY7O0FESEE7RUFDRSxxQkFBQTtBQ01GOztBREhBO0VBQ0U7SUFDRSxnQkFBQTtFQ01GOztFREpBO0lBQ0UsVUFBQTtFQ09GO0FBQ0Y7O0FESkE7RUFDRTtJQUNFLFNBQUE7RUNNRjs7RURKQTtJQUNFLFVBQUE7RUNPRjtBQUNGOztBREpBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQ01GOztBREhBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUNNRjtBQUNGOztBREhBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUNLRjtBQUNGOztBREZBOztFQUVFLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNJRjs7QUREQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNJRjs7QUREQTtFQUNFLDJCQUFBO0FDSUY7O0FEREE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDSUY7O0FEREE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0lGOztBRERBO0VBQ0UsbUJBQUE7QUNJRjs7QURGQTtFQUNFLGdCQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi96b2hvLWJvb2tzLWN1c3RvbWVycy96b2hvLWJvb2tzLWN1c3RvbWVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFiYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBncmV5O1xyXG59XHJcbi5pY29uIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmljb246aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBtYXJnaW46IDdweDtcclxufVxyXG4uc2VsZWN0YWJsZS1pbnB1dCB7XHJcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmRvY3VtZW50cyB7XHJcbiAgbWFyZ2luOiAxOXB4IDEwcHggMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubGFiZWwtaGVhZCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XHJcbn1cclxuXHJcbi5zdWJtaXRCdG4ge1xyXG4gIG1hcmdpbjogMHB4IDE0cHggMHB4IDBweDtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjN2M2OGY4O1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgLS1jb2xvcjogIzdjNjhmODtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICM3YzY4Zjg7XHJcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zdWJtaXRidG4ge1xyXG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgem9vbTogODAlO1xyXG4gIH1cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweCkgYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDhweCAxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBkZi13cmFwcGVyLFxyXG4uZXhjZWwtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2V4Y2VsTmV3LnN2Z1wiKSBuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZmFiLWJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsYXZlbmRlcjtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTFweDtcclxuICByaWdodDogLTNweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5mYWItYnRuOmhvdmVyIHtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICBtYXJnaW4tbGVmdDogLTgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuLm15R3JpZCB7XHJcbiAgbWF4LWhlaWdodDogYXV0bztcclxufVxyXG4iLCIuZmFiYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGdyZXk7XG59XG5cbi5pY29uIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaWNvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBtYXJnaW46IDdweDtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5kb2N1bWVudHMge1xuICBtYXJnaW46IDE5cHggMTBweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxhYmVsLWhlYWQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xufVxuXG4uc3VibWl0QnRuIHtcbiAgbWFyZ2luOiAwcHggMTRweCAwcHggMHB4O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM3YzY4Zjg7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xufVxuXG4uc3VibWl0YnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNjI1MmVlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDhweCAxcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxufVxuLnBkZi13cmFwcGVyLFxuLmV4Y2VsLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZXhjZWxOZXcuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmZhYi1idG4ge1xuICAtLWJhY2tncm91bmQ6IGxhdmVuZGVyO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMXB4O1xuICByaWdodDogLTNweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLmZhYi1idG46aG92ZXIge1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogLTgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ubXlHcmlkIHtcbiAgbWF4LWhlaWdodDogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/zoho-books-customers/zoho-books-customers.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/delar-application/zoho-books-customers/zoho-books-customers.page.ts ***!
  \*************************************************************************************/
/*! exports provided: ZohoBooksCustomersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZohoBooksCustomersPage", function() { return ZohoBooksCustomersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









var ZohoBooksCustomersPage = /** @class */ (function () {
    function ZohoBooksCustomersPage(loadingController, ajaxService, router, alertController, commonService, formBuilder, platform, ete) {
        this.loadingController = loadingController;
        this.ajaxService = ajaxService;
        this.router = router;
        this.alertController = alertController;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.ete = ete;
        this.books = [];
        this.companyId = localStorage.getItem("userName");
        this.hideSerialNo = false;
    }
    ZohoBooksCustomersPage.prototype.createform = function () {
        this.Esimzohocustomer = this.formBuilder.group({
            dealername: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customername: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    ZohoBooksCustomersPage.prototype.clear = function () {
        this.Esimzohocustomer.patchValue({
            dealername: "",
            customername: "",
        });
        this.hideSerialNo = false;
    };
    ZohoBooksCustomersPage.prototype.getdealer = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getDealer";
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.dealer = res;
        });
    };
    ZohoBooksCustomersPage.prototype.getcustomer = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getZohoBooksCustomers";
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.books = res;
        });
    };
    ZohoBooksCustomersPage.prototype.getdatas = function () {
        var _this = this;
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getZohoBooksCustomerDetails";
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.commonService.dismissLoader();
            _this.tableData = res;
            _this.renderer = function (row, column, value) {
                if (value == "" || null || undefined || value == ",") {
                    return "--";
                }
                else {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                        value +
                        "</span>");
                }
            };
            _this.source = { localdata: _this.tableData };
            _this.dataAdapter = new jqx.dataAdapter(_this.source);
            _this.columns = [
                {
                    text: "Dealer Name",
                    datafield: "dealername",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 240,
                    editable: true,
                },
                {
                    text: "Customer ID",
                    datafield: "customerid",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 240,
                },
                {
                    text: "Customer Name",
                    datafield: "customername",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 240,
                },
                {
                    text: "Created By",
                    datafield: "createdby",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 240,
                },
                {
                    text: "",
                    datafield: "Edit Detail",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 80,
                    cellsrenderer: function () {
                        return _this.myPlatform == "desktop"
                            ? "Edit"
                            : "<button>Edit</button>";
                    },
                    buttonclick: function (row) {
                        _this.setValue();
                    },
                },
            ];
        });
    };
    ZohoBooksCustomersPage.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = event.args.row.bounddata;
    };
    ZohoBooksCustomersPage.prototype.newfunc = function () {
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
            title: "Zoho Customers",
            data: forExcel,
            headers: Header,
        };
        this.ete.exportExcel(reportData);
    };
    ZohoBooksCustomersPage.prototype.setValue = function () {
        var _this = this;
        this.hideSerialNo = true;
        this.Esimzohocustomer.patchValue({
            dealername: this.selectedRow.dealername,
        });
        var data = this.books.filter(function (f) { return f.customername == _this.selectedRow.customername; });
        this.product = data[0];
    };
    ZohoBooksCustomersPage.prototype.selectvalue = function (ev) {
        this.selectedItem = ev.value;
        console.log(this.selectedItem);
    };
    ZohoBooksCustomersPage.prototype.submit = function () {
        var _this = this;
        var data;
        data = {
            id: "",
            dealername: this.Esimzohocustomer.value.dealername,
            customername: this.selectedItem.customername,
            customerid: this.selectedItem.customerId,
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/esim/saveZohoBooksCustomers?createdby=" +
            localStorage.getItem("userName");
        this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
            if (res.message == "Zoho Book Customer Details Saved Successfully") {
                _this.commonService.showConfirm(res.message);
                _this.clear();
                _this.getdatas();
            }
            else {
                _this.commonService.showConfirm(res.message);
            }
        });
        this.myGrid.clearselection();
    };
    ZohoBooksCustomersPage.prototype.edit = function () {
        var _this = this;
        var data;
        data = {
            id: this.selectedRow.id.toString(),
            dealername: this.Esimzohocustomer.value.dealername,
            customername: this.product.customername,
            customerid: this.product.customerId,
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/esim/saveZohoBooksCustomers?createdby=" +
            localStorage.getItem("userName");
        this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
            if (res.message == "Zoho Book Customer Details Saved Successfully") {
                _this.commonService.showConfirm(res.message);
                _this.clear();
                _this.getdatas();
            }
            else {
                _this.commonService.showConfirm(res.message);
            }
        });
        this.myGrid.clearselection();
        this.hideSerialNo = false;
    };
    ZohoBooksCustomersPage.prototype.ngAfterViewInit = function () {
        this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
    };
    ZohoBooksCustomersPage.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.createform();
        this.getdealer();
        this.getcustomer();
    };
    ZohoBooksCustomersPage.prototype.ionViewWillEnter = function () {
        this.clear();
        this.getdatas();
    };
    ZohoBooksCustomersPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ZohoBooksCustomersPage.prototype, "myGrid", void 0);
    ZohoBooksCustomersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-zoho-books-customers",
            template: __webpack_require__(/*! raw-loader!./zoho-books-customers.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/zoho-books-customers/zoho-books-customers.page.html"),
            styles: [__webpack_require__(/*! ./zoho-books-customers.page.scss */ "./src/app/delar-application/zoho-books-customers/zoho-books-customers.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"]])
    ], ZohoBooksCustomersPage);
    return ZohoBooksCustomersPage;
}());



/***/ })

}]);
//# sourceMappingURL=zoho-books-customers-zoho-books-customers-module-es5.js.map