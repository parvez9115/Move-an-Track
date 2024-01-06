(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esim-accounts-mapping-esim-accounts-mapping-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-accounts-mapping/esim-accounts-mapping.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-accounts-mapping/esim-accounts-mapping.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-title style=\"margin: 7px\">Accounts Mapping</ion-title>\n      </ion-col>\n      <ion-col>\n        <ion-row style=\"margin: 0px; padding: 0; float: right\">\n          <ion-col style=\"margin-top: 0\" class=\"tooltip\">\n            <ion-fab-button\n              size=\"small\"\n              class=\"fab-btn\"\n              href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/EsimSimNo.xlsx\"\n              download=\"sample.xlsx\"\n            >\n              <div class=\"excel-wrapper\"></div>\n            </ion-fab-button>\n            <span class=\"tooltiptext\">Excel-Format</span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"wrapper-container\">\n      <ion-col size=\"12\">\n        <form [formGroup]=\"accountmapForm\">\n          <ion-row class=\"form-field\">\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Sim Provider:</ion-label>\n              <ionic-selectable\n                class=\"input selectable-input\"\n                formControlName=\"provider\"\n                placeholder=\"Select the Sim Provider\"\n                [items]=\"Provider\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n                [disabledItems]=\"data\"\n              >\n              </ionic-selectable>\n            </ion-col>\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">Account No:</ion-label>\n              <ion-input\n                type=\"text\"\n                placeholder=\"Enter the Account No\"\n                formControlName=\"accountno\"\n                class=\"input\"\n              ></ion-input>\n            </ion-col>\n            <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n              <ion-label class=\"label-head\">File Upload:</ion-label>\n              <input\n                type=\"file\"\n                (change)=\"onFileChange($event)\"\n                formControlName=\"fileupload\"\n                class=\"documents\"\n              />\n            </ion-col>\n\n            <ion-col style=\"margin: 27px 0px 0px; text-align: end\">\n              <ion-button\n                class=\"submitbtn\"\n                (click)=\"SubmitData()\"\n                [disabled]=\"!accountmapForm.valid\"\n                >Submit</ion-button\n              >\n              <ion-button\n                class=\"submitbtn\"\n                [disabled]=\"!accountmapForm.valid\"\n                (click)=\"clear()\"\n                >Clear</ion-button\n              >\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n\n    <jqxGrid\n      #myGrid\n      [theme]=\"'material'\"\n      [width]=\"'99%'\"\n      [autoheight]=\"true\"\n      [source]=\"dataAdapter\"\n      [columns]=\"columns\"\n      [sortable]=\"true\"\n      [filterable]=\"true\"\n      [columnsresize]=\"true\"\n      [enablebrowserselection]=\"true\"\n      [enabletooltips]=\"true\"\n      [pagesizeoptions]=\"page\"\n      [pageable]=\"true\"\n      [showfilterrow]=\"true\"\n      style=\"\n        font-size: 16px;\n        text-align: center !important;\n        margin: auto;\n        cursor: pointer;\n      \"\n    >\n    </jqxGrid>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/esim-accounts-mapping/esim-accounts-mapping.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/esim-accounts-mapping/esim-accounts-mapping.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: EsimAccountsMappingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimAccountsMappingPageModule", function() { return EsimAccountsMappingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _esim_accounts_mapping_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esim-accounts-mapping.page */ "./src/app/delar-application/esim-accounts-mapping/esim-accounts-mapping.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");









const routes = [
    {
        path: "",
        component: _esim_accounts_mapping_page__WEBPACK_IMPORTED_MODULE_6__["EsimAccountsMappingPage"],
    },
];
let EsimAccountsMappingPageModule = class EsimAccountsMappingPageModule {
};
EsimAccountsMappingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_esim_accounts_mapping_page__WEBPACK_IMPORTED_MODULE_6__["EsimAccountsMappingPage"]],
    })
], EsimAccountsMappingPageModule);



/***/ }),

/***/ "./src/app/delar-application/esim-accounts-mapping/esim-accounts-mapping.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/esim-accounts-mapping/esim-accounts-mapping.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.documents {\n  margin: 19px 10px 0px;\n  text-align: center;\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -1px;\n  right: -3px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -10px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.myGrid {\n  max-height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1hY2NvdW50cy1tYXBwaW5nL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGVzaW0tYWNjb3VudHMtbWFwcGluZ1xcZXNpbS1hY2NvdW50cy1tYXBwaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1hY2NvdW50cy1tYXBwaW5nL2VzaW0tYWNjb3VudHMtbWFwcGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLGdCQUFBO0VDQ047O0VERUU7SUFDSSxVQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJO0lBQ0ksU0FBQTtFQ0FOOztFREdFO0lBQ0ksVUFBQTtFQ0FOO0FBQ0Y7O0FER0E7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSTtJQUNJLFlBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQ0ROO0FBQ0Y7O0FESUE7RUFDSTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtFQ0ZOO0FBQ0Y7O0FETUE7O0VBRUkseUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0pKOztBRE9BO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0pKOztBRE9BO0VBQ0ksMkJBQUE7QUNKSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDTEo7O0FEUUE7RUFDSSxtQkFBQTtBQ0xKOztBRFFBO0VBQ0ksZ0JBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tYWNjb3VudHMtbWFwcGluZy9lc2ltLWFjY291bnRzLW1hcHBpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgICBtYXJnaW46IDdweDtcclxufVxyXG5cclxuLnNlbGVjdGFibGUtaW5wdXQge1xyXG4gICAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmRvY3VtZW50cyB7XHJcbiAgICBtYXJnaW46IDE5cHggMTBweCAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sYWJlbC1oZWFkIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcclxufVxyXG5cclxuLnN1Ym1pdEJ0biB7XHJcbiAgICBtYXJnaW46IDBweCAxNHB4IDBweCAwcHg7XHJcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjN2M2OGY4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC0tY29sb3I6ICM3YzY4Zjg7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM3YzY4Zjg7XHJcbiAgICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcclxufVxyXG5cclxuLnN1Ym1pdGJ0biB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM2MjUyZWU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCkge1xyXG4gICAgLmlucHV0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgICNzdWJtaXRidG4ge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xyXG4gICAgLmZvcm0tZmllbGQge1xyXG4gICAgICAgIHpvb206IDgwJTtcclxuICAgIH1cclxuXHJcbiAgICAjc3VibWl0YnRuIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW46IC01cHggNXB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MzIwcHgpYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAgIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDAgMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDoxMDI0cHgpIHtcclxuICAgIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4ucGRmLXdyYXBwZXIsXHJcbi5leGNlbC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9leGNlbE5ldy5zdmdcIikgbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5mYWItYnRuIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGF2ZW5kZXI7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xcHg7XHJcbiAgICByaWdodDogLTNweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4uZmFiLWJ0bjpob3ZlciB7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XHJcbn1cclxuXHJcblxyXG4udG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC04MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5teUdyaWQge1xyXG4gICAgbWF4LWhlaWdodDogYXV0bztcclxufSIsIi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgbWFyZ2luOiA3cHg7XG59XG5cbi5zZWxlY3RhYmxlLWlucHV0IHtcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uZG9jdW1lbnRzIHtcbiAgbWFyZ2luOiAxOXB4IDEwcHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sYWJlbC1oZWFkIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcbn1cblxuLnN1Ym1pdEJ0biB7XG4gIG1hcmdpbjogMHB4IDE0cHggMHB4IDBweDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogIzdjNjhmODtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjN2M2OGY4O1xuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcbn1cblxuLnN1Ym1pdGJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiA4cHggMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbi5wZGYtd3JhcHBlcixcbi5leGNlbC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2V4Y2VsTmV3LnN2Z1wiKSBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5mYWItYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiBsYXZlbmRlcjtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTFweDtcbiAgcmlnaHQ6IC0zcHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5mYWItYnRuOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjYjZiNmI2O1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC04MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLm15R3JpZCB7XG4gIG1heC1oZWlnaHQ6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/esim-accounts-mapping/esim-accounts-mapping.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/esim-accounts-mapping/esim-accounts-mapping.page.ts ***!
  \***************************************************************************************/
/*! exports provided: EsimAccountsMappingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimAccountsMappingPage", function() { return EsimAccountsMappingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_9__);










let EsimAccountsMappingPage = class EsimAccountsMappingPage {
    constructor(loadingController, ajaxService, router, alertController, commonService, formBuilder) {
        this.loadingController = loadingController;
        this.ajaxService = ajaxService;
        this.router = router;
        this.alertController = alertController;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.name = false;
        this.willDownload = false;
        this.output = "";
        this.show = false;
        this.imeiIssues = [];
        this.excellKeyValid = false;
        this.today = new Date();
        this.page = [];
    }
    getsimprovider() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getEsimProvider";
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.Provider = res;
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
                    newData["simno"] = jsonData["Sheet1"][i]["simno"].toString();
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
    createForm() {
        this.accountmapForm = this.formBuilder.group({
            provider: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            accountno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fileupload: [this.file, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    clear() {
        this.accountmapForm.patchValue({
            provider: "",
            accountno: "",
            fileupload: "",
        });
    }
    SubmitData() {
        // this.commonService.presentLoader();
        if (this.dataString.length == 0) {
            this.commonService.showConfirm("Check your excell file,don't enter blank spaces");
        }
        else {
            var excellKeys = Object.keys(this.dataString[0]);
            for (var i = 0; i < excellKeys.length; i++) {
                if (excellKeys[i] == "simno") {
                    console.log("present");
                    this.excellKeyValid = true;
                }
            }
            if (this.name == true && this.excellKeyValid == true) {
                var data = [];
                this.willDownload = true;
                this.dataString.map((d) => {
                    data.push({
                        provider: this.accountmapForm.value.provider,
                        accountno: this.accountmapForm.value.accountno,
                        simno: d.simno,
                        createdby: localStorage.getItem("userName"),
                    });
                });
                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/saveEsimAccountMapping";
                this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
                    if (res) {
                        // this.commonService.dismissLoader();
                    }
                    if (res.message == "Esim Account Mapping Saved Successfully") {
                        this.commonService.showConfirm(res.message);
                        this.clear();
                        this.getdatas();
                    }
                    else {
                        this.commonService.showConfirm(res.message);
                        this.clear();
                    }
                });
            }
        }
    }
    getdatas() {
        this.page = [];
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getAllEsimAccountMapping";
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.tableData = res;
            this.commonService.dismissLoader();
            this.page = ["100", "200", "500", "1000"];
            this.renderer = (row, column, value) => {
                if (value == "" || null || undefined || value == ",") {
                    return "--";
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
                    text: "Sim Provider",
                    datafield: "provider",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 200,
                },
                {
                    text: "Account No",
                    datafield: "accountno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 200,
                },
                {
                    text: "ICCID No",
                    datafield: "iccidno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 200,
                },
                {
                    text: "SIM No",
                    datafield: "simno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 200,
                },
                {
                    text: "IMEI No",
                    datafield: "imeino",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 200,
                },
                {
                    text: "Created by",
                    datafield: "createdby",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 200,
                },
            ];
        });
    }
    ngOnInit() {
        this.createForm();
    }
    ionViewWillEnter() {
        this.getdatas();
        this.getsimprovider();
        this.clear();
    }
};
EsimAccountsMappingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridComponent"])
], EsimAccountsMappingPage.prototype, "myGrid", void 0);
EsimAccountsMappingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-esim-accounts-mapping",
        template: __webpack_require__(/*! raw-loader!./esim-accounts-mapping.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-accounts-mapping/esim-accounts-mapping.page.html"),
        styles: [__webpack_require__(/*! ./esim-accounts-mapping.page.scss */ "./src/app/delar-application/esim-accounts-mapping/esim-accounts-mapping.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], EsimAccountsMappingPage);



/***/ })

}]);
//# sourceMappingURL=esim-accounts-mapping-esim-accounts-mapping-module-es2015.js.map