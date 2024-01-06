(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manufacture-detail-manufacture-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/manufacture-detail/manufacture-detail.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/manufacture-detail/manufacture-detail.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\"  class=\"dealerHeader\">\r\n    <ion-row>\r\n      <ion-col size=\"11\">\r\n        <ion-title>Manufacture Details</ion-title>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-row style=\"margin:0px ;padding:0;float:right\">\r\n          <ion-col style=\"margin-top:0;\"  class=\"tooltip\">    \r\n            <ion-fab-button size=\"small\" class=\"fab-btn\" href=\"/assets/sensorise/Manufacturer.xlsx\" download=\"sample.xlsx\" >\r\n              <div class=\"excel-wrapper\"></div>\r\n            </ion-fab-button>\r\n            <span  class=\"tooltiptext\">Excel-Format</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n        </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-row class=\"wrapper-container\">\r\n      <ion-col size=\"12\" > \r\n        <form [formGroup]=\"ManufactureForm\">\r\n        <ion-row  class=\"form-field\">\r\n          <ion-col size='12' size-lg=\"2.4\"  size-md=\"2.4\">  \r\n            <ion-label class=\"label-head\">Purchase Order Number:</ion-label>\r\n          <ionic-selectable class=\"input selectable-input\" formControlName=\"PurchaseOrderNo\" placeholder=\"Purchase Order Number\"\r\n          [items]=\"PurchaseOrderNo\"  [canSearch]=\"true\" (onChange)=\"getpurchaseorderlist($event)\"\r\n         [hasVirtualScroll]=\"true\" [disabledItems]=\"data\">\r\n        </ionic-selectable>\r\n          </ion-col>\r\n          <ion-col size='12' size-lg=\"2.4\"  size-md=\"2.4\">  \r\n            <ion-label class=\"label-head\">MFG Quantity:</ion-label>\r\n            <ion-input type=\"number\" placeholder=\"MFG Quantity\" formControlName=\"mfgQty\" class=\"input\">\r\n            </ion-input>\r\n          </ion-col>\r\n          <ion-col size='12' size-lg=\"2.4\"  size-md=\"2.4\">  \r\n            <ion-label class=\"label-head\">MFG Date:</ion-label>\r\n            <ion-input type=\"date\" [max]=\"maxDate\" formControlName=\"mfgDate\" class=\"input\">\r\n            </ion-input>\r\n          </ion-col>\r\n          <ion-col size='12' size-lg=\"2.4\"  size-md=\"2.4\" > \r\n            <ion-label class=\"label-head\">MFG Unit:</ion-label> \r\n              <ionic-selectable class=\"input selectable-input\" formControlName=\"mfgunit\" placeholder=\"MFG Unit\"\r\n              [items]=\"MfgunitList\"  [canSearch]=\"true\" (onChange)=\"getmfgunit($event)\"\r\n             [hasVirtualScroll]=\"true\" [disabledItems]=\"data\">\r\n            </ionic-selectable>\r\n          </ion-col>\r\n          <ion-col size='12' size-lg=\"2.4\"  size-md=\"2.4\" >  \r\n            <ion-label class=\"label-heads\" style=\"padding: 0px 0px 0px 25px;\">File Upload:</ion-label>\r\n            <input type=\"file\" (change)=\"onFileChange($event)\" formControlName=\"fileupload\" class=\"fileinput\" />\r\n          </ion-col>\r\n        </ion-row>\r\n        </form>\r\n        <ion-row>\r\n          <ion-col size='12' size-lg=\"12\"  size-md=\"12\" style=\"margin: 10px 0px 0px;text-align: center;\">  \r\n  <ion-button class=\"submitbtn\" (click)=\"SearchData()\"[disabled]=\"!ManufactureForm.valid\">Submit</ion-button>\r\n  <ion-button class=\"submitbtn\"  (click)=\"clear()\">Clear</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n          </ion-col>\r\n</ion-row>\r\n\r\n<jqxGrid\r\n#myGrid\r\n[theme]=\"'material'\"\r\n[width]=\"'99%'\"\r\n[autoheight]=\"true\"\r\n[source]=\"dataAdapter\"\r\n[columns]=\"columns\"\r\n[sortable]=\"true\"\r\n[filterable]=\"true\"\r\n[columns]=\"columns\"\r\n[columnsresize]=\"true\"\r\n[enabletooltips]=\"true\" \r\n[pageable]=\"true\"\r\n[showfilterrow]=\"true\" \r\nstyle=\"font-size:16px;text-align: center !important;margin:auto;cursor:pointer;\">\r\n</jqxGrid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/delar-application/manufacture-detail/manufacture-detail.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/delar-application/manufacture-detail/manufacture-detail.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ManufactureDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufactureDetailPageModule", function() { return ManufactureDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _manufacture_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manufacture-detail.page */ "./src/app/delar-application/manufacture-detail/manufacture-detail.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");










var routes = [
    {
        path: '',
        component: _manufacture_detail_page__WEBPACK_IMPORTED_MODULE_7__["ManufactureDetailPage"]
    }
];
var ManufactureDetailPageModule = /** @class */ (function () {
    function ManufactureDetailPageModule() {
    }
    ManufactureDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"],
                _shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_5__["SharedModModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_manufacture_detail_page__WEBPACK_IMPORTED_MODULE_7__["ManufactureDetailPage"]]
        })
    ], ManufactureDetailPageModule);
    return ManufactureDetailPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/manufacture-detail/manufacture-detail.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/delar-application/manufacture-detail/manufacture-detail.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.fileinput {\n  margin-top: 21px;\n  margin-left: 10%;\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.label-heads {\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.submitbtn {\n  --background:#6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -16px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 30px 11px;\n    padding-right: 20px;\n  }\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -4px;\n  right: -3px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -15px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vbWFudWZhY3R1cmUtZGV0YWlsL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXG1hbnVmYWN0dXJlLWRldGFpbFxcbWFudWZhY3R1cmUtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vbWFudWZhY3R1cmUtZGV0YWlsL21hbnVmYWN0dXJlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksb0JBQUE7QUNJSjs7QURGRTtFQUNJO0lBQ0EsZ0JBQUE7RUNLSjs7RURISTtJQUNJLFVBQUE7RUNNUjtBQUNGOztBREpFO0VBQ0k7SUFDQSxTQUFBO0VDTUo7O0VESkk7SUFDSSxVQUFBO0VDT1I7QUFDRjs7QURMRTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUNPTjs7QURMQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VDUU47QUFDRjs7QUROQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSxtQkFBQTtFQ1FOO0FBQ0Y7O0FETEE7O0VBRUkseUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ09KOztBRExFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1FKOztBRE5FO0VBQ0UsMkJBQUE7QUNTSjs7QURMRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNRSjs7QURMRTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDUUo7O0FETEU7RUFDRSxtQkFBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vbWFudWZhY3R1cmUtZGV0YWlsL21hbnVmYWN0dXJlLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gICAgXHJcbn1cclxuLnNlbGVjdGFibGUtaW5wdXR7XHJcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmZpbGVpbnB1dHtcclxuICAgIG1hcmdpbi10b3A6IDIxcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgXHJcbn1cclxuLmxhYmVsLWhlYWR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XHJcbn1cclxuLmxhYmVsLWhlYWRze1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uc3VibWl0YnRue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiM2MjUyZWU7XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCl7XHJcbiAgICAgIC5pbnB1dHtcclxuICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgfVxyXG4gICAgICAjc3VibWl0YnRue1xyXG4gICAgICAgICAgd2lkdGg6MjAlO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAgIC5mb3JtLWZpZWxke1xyXG4gICAgICB6b29tOjgwJTtcclxuICAgICAgfVxyXG4gICAgICAjc3VibWl0YnRue1xyXG4gICAgICAgICAgd2lkdGg6ODAlO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIC5mb3JtLWZpZWxke1xyXG4gICAgICBtYXJnaW46IC0xNnB4IDVweCAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICB9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjMyMHB4KWFuZChtYXgtd2lkdGg6MTAyM3B4KXtcclxuICAgIC53cmFwcGVyLWNvbnRhaW5lcntcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MTAyNHB4KXtcclxuICAgIC53cmFwcGVyLWNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW46IDMwcHggMTFweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLnBkZi13cmFwcGVyLFxyXG4gIC5leGNlbC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9leGNlbE5ldy5zdmdcIikgbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5mYWItYnRuIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGF2ZW5kZXI7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC00cHg7XHJcbiAgICByaWdodDogLTNweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gIH1cclxuICAuZmFiLWJ0bjpob3ZlciB7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC50b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTgwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9IiwiLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmZpbGVpbnB1dCB7XG4gIG1hcmdpbi10b3A6IDIxcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5sYWJlbC1oZWFkIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcbn1cblxuLmxhYmVsLWhlYWRzIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3VibWl0YnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiM2MjUyZWU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC0xNnB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDMwcHggMTFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4ucGRmLXdyYXBwZXIsXG4uZXhjZWwtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9leGNlbE5ldy5zdmdcIikgbm8tcmVwZWF0O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uZmFiLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogbGF2ZW5kZXI7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIHJpZ2h0OiAtM3B4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uZmFiLWJ0bjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2I2YjZiNjtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/manufacture-detail/manufacture-detail.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/delar-application/manufacture-detail/manufacture-detail.page.ts ***!
  \*********************************************************************************/
/*! exports provided: ManufactureDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufactureDetailPage", function() { return ManufactureDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");











var ManufactureDetailPage = /** @class */ (function () {
    function ManufactureDetailPage(ajaxService, router, formBuilder, commonService, modalController) {
        var _this = this;
        this.ajaxService = ajaxService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.modalController = modalController;
        this.name = false;
        this.willDownload = false;
        this.output = "";
        this.show = false;
        this.imeiIssues = [];
        this.excellKeyValid = false;
        this.today = new Date();
        this.getpurchaseorderlist = function (event) {
            if (event.value)
                _this.ManufactureForm.value.PurchaseOrderNo = event.value;
        };
        this.getmfgunit = function (event) {
            if (event.value)
                _this.ManufactureForm.value.mfgunit = event.value;
        };
    }
    ManufactureDetailPage.prototype.onFileChange = function (ev) {
        var _this = this;
        var fileName = ev.srcElement.files[0];
        this.name = fileName.name.includes(".xlsx");
        if (this.name == true) {
            this.dataString = [];
            var workBook_1 = null;
            var jsonData_1 = null;
            var reader_1 = new FileReader();
            var file = ev.srcElement.files[0];
            reader_1.onload = function (event) {
                var data = reader_1.result;
                workBook_1 = xlsx__WEBPACK_IMPORTED_MODULE_6__["read"](data, { type: "binary" });
                jsonData_1 = workBook_1.SheetNames.reduce(function (initial, name) {
                    var sheet = workBook_1.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].sheet_to_json(sheet);
                    return initial;
                }, {});
                var json = [];
                for (var i = 0; i < jsonData_1["Sheet1"].length; i++) {
                    var newData = {};
                    newData["iccidno1"] = jsonData_1["Sheet1"][i]["iccidno"].toString();
                    newData["imei"] = jsonData_1["Sheet1"][i]["imei"] + "";
                    newData["createdby"] =
                        localStorage.getItem("userName").toString() + "";
                    newData["createddate"] = null;
                    newData["updatedby"] = null;
                    newData["updateddate"] = null;
                    json.push(newData);
                }
                _this.dataString = json;
                _this.output = _this.dataString.slice(0, 300).concat("...");
            };
            reader_1.readAsBinaryString(file);
        }
        else {
            this.commonService.showConfirm("please insert only excel file (.xlsx)");
        }
    };
    ManufactureDetailPage.prototype.clear = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        this.ManufactureForm.patchValue({
            PurchaseOrderNo: "",
            mfgDate: today,
            mfgQty: "",
            mfgunit: "",
            fileupload: "",
        });
    };
    ManufactureDetailPage.prototype.createForm = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        this.ManufactureForm = this.formBuilder.group({
            PurchaseOrderNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            mfgQty: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            mfgDate: [today, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            mfgunit: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            fileupload: [this.file, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
        });
    };
    ManufactureDetailPage.prototype.SearchData = function () {
        var _this = this;
        if (this.dataString.length == 0) {
            this.commonService.showConfirm("check your excell file,don't enter blank spaces");
        }
        else {
            var excellKeys = Object.keys(this.dataString[0]);
            for (var i = 0; i < excellKeys.length; i++) {
                if (excellKeys[i] == "iccidno1" || excellKeys[i] == "imei") {
                    console.log("present");
                    this.excellKeyValid = true;
                }
            }
            if (this.name == true && this.excellKeyValid == true) {
                this.imeiIssues = [];
                this.willDownload = true;
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
                    "/sensorise/saveSensoriseManufacture?companyid=" +
                    localStorage.getItem("corpId") +
                    "&branchid=" +
                    localStorage.getItem("corpId") +
                    "&orderno=" +
                    this.ManufactureForm.value.PurchaseOrderNo +
                    "&mfgquantity=" +
                    this.ManufactureForm.value.mfgQty +
                    "&mfgdate=" +
                    this.ManufactureForm.value.mfgDate +
                    "&mfgunit=" +
                    this.ManufactureForm.value.mfgunit.toUpperCase();
                this.ajaxService
                    .ajaxPostWithBody(url, this.dataString)
                    .subscribe(function (res) {
                    if (res.message == "Manufacture Saved Successfully") {
                        _this.commonService.showConfirm("Manufacture Saved Sucessfully");
                        _this.clear();
                        _this.getdatas();
                    }
                    else {
                        _this.commonService.showConfirm(res.message);
                    }
                });
            }
        }
    };
    ManufactureDetailPage.prototype.getdatas = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
            "/sensorise/getSensoriseManufactureAll?companyid=" +
            localStorage.getItem("corpId");
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.tableData = res;
            _this.renderer = function (row, column, value) {
                if (value == "" || null || undefined) {
                    return "-----";
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
                    text: "Purchase Order Number",
                    datafield: "orderno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 180,
                },
                {
                    text: "ICCID Number",
                    datafield: "iccidno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                },
                {
                    text: "IMEI Number",
                    datafield: "imei",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                },
                {
                    text: "VLTD No",
                    datafield: "vltdsno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 180,
                },
                {
                    text: "Mfg Slot",
                    datafield: "mfgslot",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                },
                {
                    text: "Mfg Quantity",
                    datafield: "mfgquantity",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                },
                {
                    text: "Mfg Date",
                    datafield: "mfgdate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                },
                {
                    text: "Mfg Unit",
                    datafield: "mfgunit",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                },
            ];
        });
    };
    ManufactureDetailPage.prototype.getPurchase = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
            "/sensorise/getPurchase?companyid=" +
            localStorage.getItem("corpId");
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            _this.PurchaseOrderNo = res;
        });
    };
    ManufactureDetailPage.prototype.getMfgunit = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/sensorise/getMFGUnit";
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            _this.MfgunitList = res;
        });
    };
    ManufactureDetailPage.prototype.ngOnInit = function () {
        this.maxDate = this.today.getFullYear() + "-";
        this.maxDate +=
            (this.today.getMonth() + 1 < 10
                ? "0" + (this.today.getMonth() + 1).toString()
                : (this.today.getMonth() + 1).toString()) + "-";
        this.maxDate +=
            this.today.getDate() < 10
                ? "0" + this.today.getDate().toString()
                : this.today.getDate().toString();
        this.getdatas();
        this.getPurchase();
        this.getMfgunit();
        this.createForm();
    };
    ManufactureDetailPage.ctorParameters = function () { return [
        { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("selectComponent", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic_selectable__WEBPACK_IMPORTED_MODULE_10__["IonicSelectableComponent"])
    ], ManufactureDetailPage.prototype, "selectComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__["jqxGridComponent"])
    ], ManufactureDetailPage.prototype, "myGrid", void 0);
    ManufactureDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-manufacture-detail",
            template: __webpack_require__(/*! raw-loader!./manufacture-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/manufacture-detail/manufacture-detail.page.html"),
            styles: [__webpack_require__(/*! ./manufacture-detail.page.scss */ "./src/app/delar-application/manufacture-detail/manufacture-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]])
    ], ManufactureDetailPage);
    return ManufactureDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=manufacture-detail-manufacture-detail-module-es5.js.map