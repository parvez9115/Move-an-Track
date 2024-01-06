(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esim-manufacture-details-esim-manufacture-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-manufacture-details/esim-manufacture-details.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-manufacture-details/esim-manufacture-details.page.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-row>\n      <ion-col size=\"11\">\n        <ion-title>Esim Details</ion-title>\n      </ion-col>\n      <ion-col>\n        <ion-row style=\"margin: 0px; padding: 0; float: right\">\n          <ion-col style=\"margin-top: 0\" class=\"tooltip\">\n            <ion-fab-button\n              size=\"small\"\n              class=\"fab-btn\"\n              href=\"/assets/sensorise/Esimpurchase.xlsx\"\n              download=\"sample.xlsx\"\n            >\n              <div class=\"excel-wrapper\"></div>\n            </ion-fab-button>\n            <span class=\"tooltiptext\">Excel-Format</span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"wrapper-container\">\n    <ion-col size=\"12\">\n      <form [formGroup]=\"EsimdetailsForm\">\n        <ion-row class=\"form-field\">\n          <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n            <ion-label class=\"label-head\">Invoice Number:</ion-label>\n            <ionic-selectable\n              class=\"input selectable-input\"\n              formControlName=\"orderNo\"\n              placeholder=\"Select the Invoice No\"\n              [items]=\"invoice\"\n              [canSearch]=\"true\"\n              [hasVirtualScroll]=\"true\"\n              [disabledItems]=\"data\"\n            >\n            </ionic-selectable>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n            <ion-label class=\"label-head\">Quantity:</ion-label>\n            <ion-input\n              type=\"number\"\n              placeholder=\"Enter the Qty\"\n              formControlName=\"orderqty\"\n              class=\"input\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n            <ion-label class=\"label-heads\" style=\"padding: 0px 0px 0px 25px\"\n              >File Upload:</ion-label\n            >\n            <input\n              type=\"file\"\n              (change)=\"onFileChange($event)\"\n              formControlName=\"fileupload\"\n              class=\"fileinput\"\n            />\n          </ion-col>\n          <ion-col\n            size=\"12\"\n            size-lg=\"2.4\"\n            size-md=\"2.4\"\n            style=\"margin: 25px 0px 0px; text-align: end\"\n          >\n            <ion-button\n              class=\"submitbtn\"\n              (click)=\"SearchData()\"\n              [disabled]=\"!EsimdetailsForm.valid\"\n              >Submit</ion-button\n            >\n            <ion-button class=\"submitbtn\" (click)=\"clear()\">Clear</ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-col>\n  </ion-row>\n\n  <jqxGrid\n    #myGrid\n    (onRowselect)=\"myGridOnRowSelect($event)\"\n    [theme]=\"'material'\"\n    [width]=\"'99%'\"\n    [autoheight]=\"true\"\n    [source]=\"dataAdapter\"\n    [columns]=\"columns\"\n    [sortable]=\"true\"\n    [filterable]=\"true\"\n    [columns]=\"columns\"\n    [columnsresize]=\"true\"\n    [enabletooltips]=\"true\"\n    [pageable]=\"true\"\n    [showfilterrow]=\"true\"\n    style=\"\n      font-size: 16px;\n      text-align: center !important;\n      margin: auto;\n      cursor: pointer;\n    \"\n  >\n  </jqxGrid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/esim-manufacture-details/esim-manufacture-details.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/delar-application/esim-manufacture-details/esim-manufacture-details.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: EsimManufactureDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimManufactureDetailsPageModule", function() { return EsimManufactureDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _esim_manufacture_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esim-manufacture-details.page */ "./src/app/delar-application/esim-manufacture-details/esim-manufacture-details.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");









var routes = [
    {
        path: "",
        component: _esim_manufacture_details_page__WEBPACK_IMPORTED_MODULE_6__["EsimManufactureDetailsPage"],
    },
];
var EsimManufactureDetailsPageModule = /** @class */ (function () {
    function EsimManufactureDetailsPageModule() {
    }
    EsimManufactureDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            declarations: [_esim_manufacture_details_page__WEBPACK_IMPORTED_MODULE_6__["EsimManufactureDetailsPage"]],
        })
    ], EsimManufactureDetailsPageModule);
    return EsimManufactureDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-manufacture-details/esim-manufacture-details.page.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/delar-application/esim-manufacture-details/esim-manufacture-details.page.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.fileinput {\n  margin-top: 21px;\n  margin-left: 10%;\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.label-heads {\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.submitbtn {\n  --background:#6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -16px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 30px 11px;\n    padding-right: 20px;\n  }\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -4px;\n  right: -3px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -15px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1tYW51ZmFjdHVyZS1kZXRhaWxzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGVzaW0tbWFudWZhY3R1cmUtZGV0YWlsc1xcZXNpbS1tYW51ZmFjdHVyZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1tYW51ZmFjdHVyZS1kZXRhaWxzL2VzaW0tbWFudWZhY3R1cmUtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksb0JBQUE7QUNJSjs7QURGRTtFQUNJO0lBQ0EsZ0JBQUE7RUNLSjs7RURISTtJQUNJLFVBQUE7RUNNUjtBQUNGOztBREpFO0VBQ0k7SUFDQSxTQUFBO0VDTUo7O0VESkk7SUFDSSxVQUFBO0VDT1I7QUFDRjs7QURMRTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUNPTjs7QURMQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VDUU47QUFDRjs7QUROQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSxtQkFBQTtFQ1FOO0FBQ0Y7O0FETEE7O0VBRUkseUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ09KOztBRExFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1FKOztBRE5FO0VBQ0UsMkJBQUE7QUNTSjs7QURMRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNRSjs7QURMRTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDUUo7O0FETEU7RUFDRSxtQkFBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1tYW51ZmFjdHVyZS1kZXRhaWxzL2VzaW0tbWFudWZhY3R1cmUtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gICAgXHJcbn1cclxuLnNlbGVjdGFibGUtaW5wdXR7XHJcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmZpbGVpbnB1dHtcclxuICAgIG1hcmdpbi10b3A6IDIxcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgXHJcbn1cclxuLmxhYmVsLWhlYWR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XHJcbn1cclxuLmxhYmVsLWhlYWRze1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uc3VibWl0YnRue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiM2MjUyZWU7XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCl7XHJcbiAgICAgIC5pbnB1dHtcclxuICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgfVxyXG4gICAgICAjc3VibWl0YnRue1xyXG4gICAgICAgICAgd2lkdGg6MjAlO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAgIC5mb3JtLWZpZWxke1xyXG4gICAgICB6b29tOjgwJTtcclxuICAgICAgfVxyXG4gICAgICAjc3VibWl0YnRue1xyXG4gICAgICAgICAgd2lkdGg6ODAlO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIC5mb3JtLWZpZWxke1xyXG4gICAgICBtYXJnaW46IC0xNnB4IDVweCAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICB9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjMyMHB4KWFuZChtYXgtd2lkdGg6MTAyM3B4KXtcclxuICAgIC53cmFwcGVyLWNvbnRhaW5lcntcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MTAyNHB4KXtcclxuICAgIC53cmFwcGVyLWNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW46IDMwcHggMTFweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLnBkZi13cmFwcGVyLFxyXG4gIC5leGNlbC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9leGNlbE5ldy5zdmdcIikgbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5mYWItYnRuIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGF2ZW5kZXI7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC00cHg7XHJcbiAgICByaWdodDogLTNweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gIH1cclxuICAuZmFiLWJ0bjpob3ZlciB7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC50b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTgwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9IiwiLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmZpbGVpbnB1dCB7XG4gIG1hcmdpbi10b3A6IDIxcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5sYWJlbC1oZWFkIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcbn1cblxuLmxhYmVsLWhlYWRzIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3VibWl0YnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiM2MjUyZWU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC0xNnB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDMwcHggMTFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4ucGRmLXdyYXBwZXIsXG4uZXhjZWwtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9leGNlbE5ldy5zdmdcIikgbm8tcmVwZWF0O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uZmFiLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogbGF2ZW5kZXI7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIHJpZ2h0OiAtM3B4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uZmFiLWJ0bjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2I2YjZiNjtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/esim-manufacture-details/esim-manufacture-details.page.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/delar-application/esim-manufacture-details/esim-manufacture-details.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: EsimManufactureDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimManufactureDetailsPage", function() { return EsimManufactureDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_9__);










var EsimManufactureDetailsPage = /** @class */ (function () {
    function EsimManufactureDetailsPage(loadingController, ajaxService, router, alertController, commonService, formBuilder) {
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
    }
    EsimManufactureDetailsPage.prototype.getinvoicelist = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getPurchaseNo";
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            _this.invoice = res;
        });
    };
    EsimManufactureDetailsPage.prototype.onFileChange = function (ev) {
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
                workBook_1 = xlsx__WEBPACK_IMPORTED_MODULE_9__["read"](data, { type: "binary" });
                jsonData_1 = workBook_1.SheetNames.reduce(function (initial, name) {
                    var sheet = workBook_1.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].sheet_to_json(sheet);
                    return initial;
                }, {});
                var json = [];
                for (var i = 0; i < jsonData_1["Sheet1"].length; i++) {
                    var newData = {};
                    newData["iccidno1"] = jsonData_1["Sheet1"][i]["iccidno1"].toString();
                    newData["sim1"] = jsonData_1["Sheet1"][i]["sim1"].toString();
                    newData["provider1"] = jsonData_1["Sheet1"][i]["provider1"].toString();
                    newData["imsi1"] = jsonData_1["Sheet1"][i]["imsi1"].toString();
                    newData["iccidno2"] = jsonData_1["Sheet1"][i]["iccidno2"].toString();
                    newData["sim2"] = jsonData_1["Sheet1"][i]["sim2"].toString();
                    newData["provider2"] = jsonData_1["Sheet1"][i]["provider2"].toString();
                    newData["imsi2"] = jsonData_1["Sheet1"][i]["imsi2"].toString();
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
    EsimManufactureDetailsPage.prototype.SearchData = function () {
        var _this = this;
        if (this.dataString.length == 0) {
            this.commonService.showConfirm("check your excell file,don't enter blank spaces");
        }
        else {
            var excellKeys = Object.keys(this.dataString[0]);
            for (var i = 0; i < excellKeys.length; i++) {
                if (excellKeys[i] == "iccidno1" ||
                    excellKeys[i] == "sim1" ||
                    excellKeys[i] == "provider1" ||
                    excellKeys[i] == "imsi1" ||
                    excellKeys[i] == "iccidno2" ||
                    excellKeys[i] == "sim2" ||
                    excellKeys[i] == "provider2" ||
                    excellKeys[i] == "imsi2") {
                    console.log("present");
                    this.excellKeyValid = true;
                }
            }
            if (this.name == true && this.excellKeyValid == true) {
                this.imeiIssues = [];
                this.willDownload = true;
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
                    "/esim/saveEsimPurchase?companyid=" +
                    localStorage.getItem("corpId") +
                    "&branchid=" +
                    localStorage.getItem("corpId") +
                    "&orderno=" +
                    this.EsimdetailsForm.value.orderNo +
                    "&orderquantity=" +
                    this.EsimdetailsForm.value.orderqty;
                this.ajaxService
                    .ajaxPostWithBody(url, this.dataString)
                    .subscribe(function (res) {
                    if (res.message == "Purchase Saved Successfully") {
                        _this.commonService.showConfirm("Sim Detail Saved Successfully");
                        _this.clear();
                        _this.getdatas();
                    }
                    else {
                        _this.commonService.showConfirm(res.message);
                    }
                    _this.getinvoicelist();
                });
            }
        }
    };
    EsimManufactureDetailsPage.prototype.clear = function () {
        this.EsimdetailsForm.patchValue({
            orderNo: "",
            orderqty: "",
            fileupload: "",
        });
        this.invoice = "";
        this.getinvoicelist();
    };
    EsimManufactureDetailsPage.prototype.createForm = function () {
        this.EsimdetailsForm = this.formBuilder.group({
            orderNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            orderqty: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fileupload: [this.file, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    EsimManufactureDetailsPage.prototype.getdatas = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/esim/getEsimPurchaseAll?companyid=" +
            localStorage.getItem("corpId");
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.tableData = res;
            _this.renderer = function (row, column, value) {
                if (value == "" || null || undefined || value == ",") {
                    return "---";
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
                    text: "Service Provider",
                    datafield: "serviceprovider",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "Invoice No",
                    datafield: "orderno",
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
                    width: 200,
                },
                {
                    text: "SIM 1",
                    datafield: "sim1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "Provider 1",
                    datafield: "provider1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "IMSI 1",
                    datafield: "imsi1",
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
                    width: 200,
                },
                {
                    text: "SIM 2",
                    datafield: "sim2",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "Provider 2",
                    datafield: "provider2",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "IMSI 2",
                    datafield: "imsi2",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "Created by",
                    datafield: "createdby",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
            ];
        });
    };
    EsimManufactureDetailsPage.prototype.ngOnInit = function () {
        this.createForm();
    };
    EsimManufactureDetailsPage.prototype.ionViewWillEnter = function () {
        this.EsimdetailsForm.reset();
        this.getdatas();
        this.getinvoicelist();
    };
    EsimManufactureDetailsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridComponent"])
    ], EsimManufactureDetailsPage.prototype, "myGrid", void 0);
    EsimManufactureDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-esim-manufacture-details",
            template: __webpack_require__(/*! raw-loader!./esim-manufacture-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-manufacture-details/esim-manufacture-details.page.html"),
            styles: [__webpack_require__(/*! ./esim-manufacture-details.page.scss */ "./src/app/delar-application/esim-manufacture-details/esim-manufacture-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EsimManufactureDetailsPage);
    return EsimManufactureDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=esim-manufacture-details-esim-manufacture-details-module-es5.js.map