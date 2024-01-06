(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["zoho-books-products-zoho-books-products-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/zoho-books-products/zoho-books-products.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/zoho-books-products/zoho-books-products.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons\n      *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\"\n      slot=\"start\"\n    >\n      <ion-icon\n        routerLink=\"/tabs-login/esim-dashboard\"\n        name=\"arrow-back\"\n        style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n\n    <ion-row>\n      <ion-title>Esim Zoho Book Products</ion-title>\n      <ion-col *ngIf=\"myPlatform == 'desktop'\">\n        <ion-row style=\"margin: 0px; padding: 0; float: right\">\n          <ion-col style=\"margin-top: 0\" class=\"tooltip\">\n            <ion-fab-button\n              size=\"small\"\n              class=\"fab-btn\"\n              href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/CustomerProductsPrice.xlsx\"\n              download=\"sample.xlsx\"\n            >\n              <div class=\"excel-wrapper\"></div>\n            </ion-fab-button>\n            <span class=\"tooltiptext\">Download</span>\n          </ion-col>\n          <ion-col style=\"margin-top: 0; text-align: right\">\n            <ion-button class=\"submitBtn\" size=\"small\" (click)=\"newfunc()\"\n              >Export</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <!-- <ion-row>\n      <ion-title>Esim Zoho Book Products</ion-title>\n      <ion-col\n        *ngIf=\"myPlatform == 'desktop'\"\n        size=\"4\"\n        style=\"text-align: right\"\n      >\n        <ion-button class=\"submitBtn\" size=\"small\" (click)=\"newfunc()\"\n          >Export</ion-button\n        >\n      </ion-col>\n    </ion-row> -->\n  </ion-toolbar></ion-header\n>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"wrapper-container\">\n      <ion-col size=\"12\">\n        <form [formGroup]=\"EsimzohobookForm\">\n          <ion-row class=\"form-field\">\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Dealer :</ion-label>\n              <ionic-selectable\n                class=\"input selectable-input\"\n                (onChange)=\"selectdealer($event)\"\n                formControlName=\"dealername\"\n                placeholder=\"Select the Dealer\"\n                [items]=\"dealer\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n              >\n              </ionic-selectable>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Service Provider :</ion-label>\n              <ionic-selectable\n                class=\"input selectable-input\"\n                formControlName=\"serviceprovider\"\n                placeholder=\"Select the Provider\"\n                [items]=\"provider\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n              >\n              </ionic-selectable>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Card Status :</ion-label>\n              <ionic-selectable\n                class=\"input selectable-input\"\n                formControlName=\"cardstatus\"\n                placeholder=\"Select the Card Status\"\n                [items]=\"status\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n                [disabledItems]=\"data\"\n              >\n              </ionic-selectable>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"3.9\" size-md=\"3.9\">\n              <ion-label class=\"label-head\">Product Name :</ion-label>\n              <ionic-selectable\n                (onChange)=\"selectvalue($event)\"\n                class=\"input selectable-input\"\n                [(ngModel)]=\"product\"\n                formControlName=\"productname\"\n                placeholder=\"Select the Product Name\"\n                [items]=\"books\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n                itemValueField=\"itemname\"\n                itemTextField=\"itemname\"\n              >\n              </ionic-selectable>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\">\n              <ion-label class=\"label-head\">Description :</ion-label>\n              <ion-input\n                type=\"text\"\n                placeholder=\"Product Description\"\n                formControlName=\"description\"\n                class=\"input\"\n              ></ion-input>\n            </ion-col>\n            <ion-col size=\"12\" size-lg=\"2.2\" size-md=\"2.2\">\n              <ion-label class=\"label-head\">Purchase Rate :</ion-label>\n              <ion-input\n                type=\"number\"\n                placeholder=\"Purchase Rate\"\n                formControlName=\"Purchaserate\"\n                class=\"input\"\n                disabled\n              ></ion-input>\n            </ion-col>\n            <ion-col size=\"12\" size-lg=\"2.2\" size-md=\"2.2\">\n              <ion-label class=\"label-head\">Rate :</ion-label>\n              <ion-input\n                type=\"number\"\n                placeholder=\"Rate\"\n                formControlName=\"rate\"\n                class=\"input\"\n              ></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Validity Period :</ion-label>\n              <ionic-selectable\n                class=\"input selectable-input\"\n                formControlName=\"validityperiod\"\n                placeholder=\"Select the Validity Period\"\n                [items]=\"Plans\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n              >\n              </ionic-selectable>\n            </ion-col>\n\n            <ion-col\n              size=\"12\"\n              size-lg=\"2\"\n              size-md=\"2\"\n              style=\"margin: 27px 0px 0px; text-align: end\"\n            >\n              <ion-button\n                *ngIf=\"!hideSerialNo\"\n                class=\"submitbtn\"\n                (click)=\"submit()\"\n                [disabled]=\"!EsimzohobookForm.valid\"\n                >Add</ion-button\n              >\n              <ion-button\n                *ngIf=\"hideSerialNo\"\n                class=\"submitbtn\"\n                (click)=\"edit()\"\n                [disabled]=\"!EsimzohobookForm.valid\"\n                >Save</ion-button\n              >\n              <ion-button class=\"submitbtn\" (click)=\"clear()\">Clear</ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <form [formGroup]=\"BulkEsimzohobookForm\">\n          <ion-row>\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">File Upload:</ion-label>\n              <input\n                type=\"file\"\n                (change)=\"onFileChange($event)\"\n                formControlName=\"fileupload\"\n                class=\"documents\"\n              />\n            </ion-col>\n            <ion-col\n              size=\"12\"\n              size-lg=\"2.4\"\n              size-md=\"2.4\"\n              style=\"margin: 25px 0px 0px; text-align: end\"\n            >\n              <ion-button\n                class=\"submitbtn\"\n                (click)=\"submitwithfile()\"\n                [disabled]=\"!BulkEsimzohobookForm.valid\"\n                >Submit</ion-button\n              >\n              <ion-button class=\"submitbtn\" (click)=\"fileclear()\"\n                >Clear</ion-button\n              >\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n\n    <ion-row\n      ><ion-col>\n        <jqxGrid\n          #myGrid\n          (onRowclick)=\"myGridOnRowSelect($event)\"\n          [theme]=\"'material'\"\n          [width]=\"'99%'\"\n          [autoheight]=\"true\"\n          [source]=\"dataAdapter\"\n          [columns]=\"columns\"\n          [sortable]=\"true\"\n          [filterable]=\"true\"\n          [columnsresize]=\"true\"\n          [enablebrowserselection]=\"true\"\n          [enabletooltips]=\"true\"\n          [pagesizeoptions]=\"page\"\n          [pageable]=\"true\"\n          [showfilterrow]=\"true\"\n          style=\"\n            font-size: 16px;\n            text-align: center !important;\n            margin: auto;\n            cursor: pointer;\n          \"\n        >\n        </jqxGrid> </ion-col\n    ></ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/zoho-books-products/zoho-books-products.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/delar-application/zoho-books-products/zoho-books-products.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ZohoBooksProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZohoBooksProductsPageModule", function() { return ZohoBooksProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _zoho_books_products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zoho-books-products.page */ "./src/app/delar-application/zoho-books-products/zoho-books-products.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");









const routes = [
    {
        path: "",
        component: _zoho_books_products_page__WEBPACK_IMPORTED_MODULE_6__["ZohoBooksProductsPage"],
    },
];
let ZohoBooksProductsPageModule = class ZohoBooksProductsPageModule {
};
ZohoBooksProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
        declarations: [_zoho_books_products_page__WEBPACK_IMPORTED_MODULE_6__["ZohoBooksProductsPage"]],
    })
], ZohoBooksProductsPageModule);



/***/ }),

/***/ "./src/app/delar-application/zoho-books-products/zoho-books-products.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/delar-application/zoho-books-products/zoho-books-products.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fabbutton {\n  --background: whitesmoke;\n  --background-hover: grey;\n}\n\n.icon {\n  color: black;\n}\n\n.icon:hover {\n  color: white;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.documents {\n  margin: 19px 10px 0px;\n  text-align: center;\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -3px;\n  right: -3px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -10px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.myGrid {\n  max-height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vem9oby1ib29rcy1wcm9kdWN0cy9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFx6b2hvLWJvb2tzLXByb2R1Y3RzXFx6b2hvLWJvb2tzLXByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vem9oby1ib29rcy1wcm9kdWN0cy96b2hvLWJvb2tzLXByb2R1Y3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7QUNHRjs7QURBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNHRjs7QUREQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ0lGOztBREZBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ0tGOztBREhBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNNRjs7QURIQTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ01GOztBREhBO0VBQ0UscUJBQUE7QUNNRjs7QURIQTtFQUNFO0lBQ0UsZ0JBQUE7RUNNRjs7RURKQTtJQUNFLFVBQUE7RUNPRjtBQUNGOztBREpBO0VBQ0U7SUFDRSxTQUFBO0VDTUY7O0VESkE7SUFDRSxVQUFBO0VDT0Y7QUFDRjs7QURKQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUNNRjs7QURIQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VDTUY7QUFDRjs7QURIQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDS0Y7QUFDRjs7QURGQTs7RUFFRSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSUY7O0FEREE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSUY7O0FEREE7RUFDRSwyQkFBQTtBQ0lGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ0lGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNJRjs7QUREQTtFQUNFLG1CQUFBO0FDSUY7O0FERkE7RUFDRSxnQkFBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vem9oby1ib29rcy1wcm9kdWN0cy96b2hvLWJvb2tzLXByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWJidXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6IGdyZXk7XHJcbn1cclxuLmljb24ge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uaWNvbjpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIG1hcmdpbjogN3B4O1xyXG59XHJcbi5zZWxlY3RhYmxlLWlucHV0IHtcclxuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uZG9jdW1lbnRzIHtcclxuICBtYXJnaW46IDE5cHggMTBweCAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sYWJlbC1oZWFkIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcclxufVxyXG5cclxuLnN1Ym1pdEJ0biB7XHJcbiAgbWFyZ2luOiAwcHggMTRweCAwcHggMHB4O1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAtLWNvbG9yOiAjN2M2OGY4O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcclxuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcclxufVxyXG5cclxuLnN1Ym1pdGJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNjI1MmVlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmlucHV0IHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgfVxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZm9ybS1maWVsZCB7XHJcbiAgICB6b29tOiA4MCU7XHJcbiAgfVxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IC01cHggNXB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjMyMHB4KSBhbmQobWF4LXdpZHRoOjEwMjNweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDhweCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MTAyNHB4KSB7XHJcbiAgLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogOHB4IDFweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucGRmLXdyYXBwZXIsXHJcbi5leGNlbC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZXhjZWxOZXcuc3ZnXCIpIG5vLXJlcGVhdDtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5mYWItYnRuIHtcclxuICAtLWJhY2tncm91bmQ6IGxhdmVuZGVyO1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtM3B4O1xyXG4gIHJpZ2h0OiAtM3B4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxufVxyXG5cclxuLmZhYi1idG46aG92ZXIge1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2I2YjZiNjtcclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG4ubXlHcmlkIHtcclxuICBtYXgtaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiIsIi5mYWJidXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogZ3JleTtcbn1cblxuLmljb24ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5pY29uOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIG1hcmdpbjogN3B4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmRvY3VtZW50cyB7XG4gIG1hcmdpbjogMTlweCAxMHB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGFiZWwtaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XG59XG5cbi5zdWJtaXRCdG4ge1xuICBtYXJnaW46IDBweCAxNHB4IDBweCAwcHg7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XG59XG5cbi5zdWJtaXRidG4ge1xuICAtLWJhY2tncm91bmQ6ICM2MjUyZWU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4ucGRmLXdyYXBwZXIsXG4uZXhjZWwtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9leGNlbE5ldy5zdmdcIikgbm8tcmVwZWF0O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uZmFiLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogbGF2ZW5kZXI7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0zcHg7XG4gIHJpZ2h0OiAtM3B4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uZmFiLWJ0bjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2I2YjZiNjtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5teUdyaWQge1xuICBtYXgtaGVpZ2h0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/zoho-books-products/zoho-books-products.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/delar-application/zoho-books-products/zoho-books-products.page.ts ***!
  \***********************************************************************************/
/*! exports provided: ZohoBooksProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZohoBooksProductsPage", function() { return ZohoBooksProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_9__);










let ZohoBooksProductsPage = class ZohoBooksProductsPage {
    constructor(loadingController, ajaxService, router, alertController, commonService, formBuilder, platform, ete) {
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
        this.name = false;
        this.willDownload = false;
        this.output = "";
        this.show = false;
        this.imeiIssues = [];
        this.excellKeyValid = false;
        this.Plans = [
            "1 Year",
            "2 Year",
            "3 Year",
            "1 Month",
            "2 Month",
            "3 Month",
            "4 Month",
            "5 Month",
            "6 Month",
            "7 Month",
            "8 Month",
            "9 Month",
            "10 Month",
            "11 Month",
        ];
    }
    createform() {
        this.EsimzohobookForm = this.formBuilder.group({
            serviceprovider: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cardstatus: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            productname: [{ value: "", disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dealername: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Purchaserate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [""],
            rate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            validityperiod: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.BulkEsimzohobookForm = this.formBuilder.group({
            fileupload: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.EsimzohobookForm.get("serviceprovider").valueChanges.subscribe((value) => {
            if (value) {
                this.EsimzohobookForm.get("productname").enable();
                this.getproductname(value);
            }
            else {
                this.EsimzohobookForm.get("productname").disable();
                this.books = [];
            }
        });
    }
    clear() {
        this.EsimzohobookForm.patchValue({
            serviceprovider: "",
            cardstatus: "",
            productname: "",
            dealername: "",
            Purchaserate: "",
            description: "",
            rate: "",
            validityperiod: "",
        });
        this.hideSerialNo = false;
    }
    fileclear() {
        this.BulkEsimzohobookForm.patchValue({
            fileupload: "",
        });
        this.selecteddealer = undefined;
    }
    getdealer() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getDealer";
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.dealer = res;
        });
    }
    getserviceprovider() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getServiceProvider";
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.provider = res;
        });
    }
    getcardstatus() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getEsimCardStatus";
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.status = res;
        });
    }
    getproductname(serviceProvider) {
        this.commonService.presentLoader();
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/esim/getZohoBooksProducts?serviceprovider=" +
            serviceProvider;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.books = res;
            this.commonService.dismissLoader();
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
                workBook = xlsx__WEBPACK_IMPORTED_MODULE_9__["read"](data, { type: "binary" });
                jsonData = workBook.SheetNames.reduce((initial, name) => {
                    const sheet = workBook.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].sheet_to_json(sheet);
                    return initial;
                }, {});
                let json = [];
                for (let i = 0; i < jsonData["Sheet1"].length; i++) {
                    let newData = {};
                    newData["serviceprovider"] =
                        jsonData["Sheet1"][i]["serviceprovider"].toString();
                    newData["cardstatus"] =
                        jsonData["Sheet1"][i]["cardstatus"].toString();
                    newData["productid"] = jsonData["Sheet1"][i]["productid"].toString();
                    newData["productname"] =
                        jsonData["Sheet1"][i]["productname"].toString();
                    newData["purchaserate"] =
                        jsonData["Sheet1"][i]["purchaserate"].toString();
                    newData["rate"] = jsonData["Sheet1"][i]["rate"].toString();
                    if (jsonData["Sheet1"][i]["description"] == undefined) {
                        newData["description"] = "";
                    }
                    else {
                        newData["description"] =
                            jsonData["Sheet1"][i]["description"].toString();
                    }
                    newData["validityperiod"] =
                        jsonData["Sheet1"][i]["validityperiod"].toString();
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
    selectdealer(ev) {
        this.selecteddealer = ev.value;
        console.log(this.selectedItem);
    }
    submitwithfile() {
        if (this.selecteddealer != undefined) {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
                "/esim/saveZohoBooksBulkProducts?createdby=" +
                localStorage.getItem("userName") +
                "&dealername=" +
                this.selecteddealer;
            this.ajaxService
                .ajaxPostWithBody(url, this.dataString)
                .subscribe((res) => {
                if (res.message == "Zoho Book Product Details Saved Successfully") {
                    this.commonService.showConfirm(res.message);
                    this.selecteddealer = undefined;
                    this.fileclear();
                    this.clear();
                    this.getdatas();
                }
                else {
                    this.commonService.showConfirm(res.message);
                    this.selecteddealer = undefined;
                }
            });
        }
        else {
            this.commonService.showConfirm("Please Select the Dealer");
        }
    }
    // checkprovider(ev) {
    //   this.selectedprovider = ev.value;
    //   console.log(this.selectedItem);
    //   this.getproductname();
    // }
    getdatas() {
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getZohoBooksProductsDetails";
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.commonService.dismissLoader();
            this.tableData = res;
            this.renderer = (row, column, value) => {
                if (value == "") {
                    return "--";
                }
                else if (value == "0.0") {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                        0.0 +
                        "</span>");
                }
                else {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                        value +
                        "</span>");
                }
            };
            this.source = { localdata: this.tableData };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            this.columns = [
                {
                    text: "Dealer Name",
                    datafield: "dealername",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                    editable: true,
                },
                {
                    text: "Service Provider",
                    datafield: "serviceprovider",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                    editable: true,
                },
                {
                    text: "Card Status",
                    datafield: "cardstatus",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "Product ID",
                    datafield: "productid",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
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
                    text: "Descripton",
                    datafield: "description",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "Purchase Rate",
                    datafield: "purchaserate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "Rate",
                    datafield: "rate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 90,
                },
                {
                    text: "Validity Period",
                    datafield: "validityperiod",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "Created By",
                    datafield: "createdby",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 90,
                },
                {
                    text: "",
                    datafield: "Edit Detail",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 80,
                    cellsrenderer: () => {
                        return this.myPlatform == "desktop"
                            ? "Edit"
                            : "<button>Edit</button>";
                    },
                    buttonclick: (row) => {
                        this.setValue();
                    },
                },
            ];
        });
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row.bounddata;
    }
    setValue() {
        this.hideSerialNo = true;
        this.commonService.presentLoader();
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/esim/getZohoBooksProducts?serviceprovider=" +
            this.selectedRow.serviceprovider;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.editvalue = res;
            this.commonService.dismissLoader();
            this.EsimzohobookForm.patchValue({
                serviceprovider: this.selectedRow.serviceprovider,
                cardstatus: this.selectedRow.cardstatus,
                dealername: this.selectedRow.dealername,
                description: this.selectedRow.description,
                Purchaserate: this.selectedRow.purchaserate,
                rate: this.selectedRow.rate,
                validityperiod: this.selectedRow.validityperiod,
            });
            let data = this.editvalue.filter((f) => f.itemname == this.selectedRow.productname);
            this.product = data[0];
        });
    }
    selectvalue(ev) {
        this.selectedItem = ev.value;
        console.log(this.selectedItem);
        // Set input field values based on the selected product
        this.EsimzohobookForm.patchValue({
            Purchaserate: this.selectedItem.purchaserate,
            rate: this.selectedItem.rate,
            description: this.selectedItem.description,
        });
    }
    submit() {
        var data;
        data = {
            id: "",
            dealername: this.EsimzohobookForm.value.dealername,
            serviceprovider: this.EsimzohobookForm.value.serviceprovider,
            cardstatus: this.EsimzohobookForm.value.cardstatus,
            productname: this.selectedItem.itemname,
            productid: this.selectedItem.itemid,
            description: this.EsimzohobookForm.value.description,
            purchaserate: this.EsimzohobookForm.value.Purchaserate.toString(),
            rate: this.EsimzohobookForm.value.rate.toString(),
            validityperiod: this.EsimzohobookForm.value.validityperiod,
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/esim/saveZohoBooksProducts?createdby=" +
            localStorage.getItem("userName");
        this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
            if (res.message == "Zoho Book Product Details Saved Successfully") {
                this.commonService.showConfirm(res.message);
                this.clear();
                this.getdatas();
            }
            else {
                this.commonService.showConfirm(res.message);
            }
        });
        this.myGrid.clearselection();
    }
    edit() {
        var data;
        data = {
            id: this.selectedRow.id.toString(),
            dealername: this.EsimzohobookForm.value.dealername,
            serviceprovider: this.EsimzohobookForm.value.serviceprovider,
            cardstatus: this.EsimzohobookForm.value.cardstatus,
            productname: this.product.itemname,
            productid: this.product.itemid,
            description: this.EsimzohobookForm.value.description,
            purchaserate: this.EsimzohobookForm.value.Purchaserate.toString(),
            rate: this.EsimzohobookForm.value.rate.toString(),
            validityperiod: this.EsimzohobookForm.value.validityperiod,
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/esim/saveZohoBooksProducts?createdby=" +
            localStorage.getItem("userName");
        this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
            if (res.message == "Zoho Book Product Details Saved Successfully") {
                this.commonService.showConfirm(res.message);
                this.clear();
                this.getdatas();
            }
            else {
                this.commonService.showConfirm(res.message);
            }
        });
        this.myGrid.clearselection();
        this.hideSerialNo = false;
    }
    ngAfterViewInit() {
        this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
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
            title: "Zoho Products",
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
        this.createform();
        this.getserviceprovider();
        this.getdealer();
        this.getcardstatus();
    }
    ionViewWillEnter() {
        this.clear();
        this.getdatas();
    }
};
ZohoBooksProductsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ZohoBooksProductsPage.prototype, "myGrid", void 0);
ZohoBooksProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-zoho-books-products",
        template: __webpack_require__(/*! raw-loader!./zoho-books-products.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/zoho-books-products/zoho-books-products.page.html"),
        styles: [__webpack_require__(/*! ./zoho-books-products.page.scss */ "./src/app/delar-application/zoho-books-products/zoho-books-products.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"]])
], ZohoBooksProductsPage);



/***/ })

}]);
//# sourceMappingURL=zoho-books-products-zoho-books-products-module-es2015.js.map