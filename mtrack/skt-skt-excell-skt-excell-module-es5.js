(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["skt-skt-excell-skt-excell-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/skt-excell/skt-excell.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/skt-excell/skt-excell.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" style=\"--background: #cac2c2\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <ion-title>Students Uploader</ion-title>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"tooltip\">\r\n        <ion-fab-button size=\"small\" class=\"fab-btn\"\r\n          href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/StudentDetailUpload.xlsx\"\r\n          download=\"sample.xlsx\">\r\n          <div class=\"excel-wrapper\" title=\"Excel-Format\"></div>\r\n        </ion-fab-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"excelform\">\r\n    <ion-list>\r\n      <ion-radio-group [value]=\"radioSelection\" (ionChange)=\"selectPickDrop($event)\">\r\n        <ion-row>\r\n          <ion-col size=\"4\">\r\n            <ion-item style=\"--inner-border-width: 0; --min-height: 20px; padding: 0px\">\r\n              <ion-label>New Vehicle Student</ion-label>\r\n              <ion-radio value=\"New\" slot=\"start\" checked></ion-radio>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"4\">\r\n            <ion-item style=\"--inner-border-width: 0; --min-height: 20px; padding: 0px\">\r\n              <ion-label>Old Vehicle Student</ion-label>\r\n              <ion-radio value=\"Old\" slot=\"start\"></ion-radio>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"show\" style=\"padding: 10px\">\r\n          <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\r\n            <ion-label class=\"label-head\">Pickup Route:</ion-label>\r\n            <ionic-selectable class=\"input selectable-input\" placeholder=\"Select the Pickup Spot\"\r\n              formControlName=\"pickup\" [items]=\"Pickuplist\" [canSearch]=\"true\" [hasVirtualScroll]=\"true\">\r\n            </ionic-selectable>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\r\n            <ion-label class=\"label-head\">Drop Route:</ion-label>\r\n            <ionic-selectable class=\"input selectable-input\" placeholder=\"Select the Drop Spot\" formControlName=\"drop\"\r\n              [items]=\"Droplist\" [canSearch]=\"true\" [hasVirtualScroll]=\"true\">\r\n            </ionic-selectable>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\r\n            <input class=\"documents\" type=\"file\" (change)=\"onFileChange($event)\" formControlName=\"fileupload\" />\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\" style=\"margin: 17px 0px 0px; text-align: end\">\r\n            <ion-button (click)=\"sendToServer()\" [disabled]=\"fileuploads\" id=\"submitbtn\">Upload\r\n            </ion-button>\r\n            <ion-button (click)=\"clear()\" id=\"submitbtn\"> Clear</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-radio-group>\r\n    </ion-list>\r\n    <ion-row *ngIf=\"!show\" style=\"padding: 10px\">\r\n      <ion-col style=\"display: flex; justify-content: end\">\r\n        <input style=\"margin-top: 9px\" type=\"file\" (change)=\"onFileChange($event)\" formControlName=\"fileupload\" />\r\n      </ion-col>\r\n\r\n      <ion-col>\r\n        <ion-button (click)=\"sendToServer()\" [disabled]=\"fileuploads\" id=\"submitbtn\">Upload\r\n        </ion-button>\r\n        <ion-button (click)=\"clear()\" id=\"submitbtn\"> Clear</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/skt/skt-excell/skt-excell.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/skt/skt-excell/skt-excell.module.ts ***!
  \*****************************************************/
/*! exports provided: SktExcellPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SktExcellPageModule", function() { return SktExcellPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _skt_excell_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skt-excell.page */ "./src/app/skt/skt-excell/skt-excell.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");









var routes = [
    {
        path: "",
        component: _skt_excell_page__WEBPACK_IMPORTED_MODULE_6__["SktExcellPage"],
    },
];
var SktExcellPageModule = /** @class */ (function () {
    function SktExcellPageModule() {
    }
    SktExcellPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            declarations: [_skt_excell_page__WEBPACK_IMPORTED_MODULE_6__["SktExcellPage"]],
        })
    ], SktExcellPageModule);
    return SktExcellPageModule;
}());



/***/ }),

/***/ "./src/app/skt/skt-excell/skt-excell.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/skt/skt-excell/skt-excell.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -7px;\n  right: 10px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: black;\n  text-align: center;\n  border-radius: 6px;\n  position: absolute;\n  margin-left: 15px;\n  z-index: 1;\n  font-size: 14px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.documents {\n  margin: 30px 15px 0px;\n  text-align: center;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 40%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t0L3NrdC1leGNlbGwvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxza3RcXHNrdC1leGNlbGxcXHNrdC1leGNlbGwucGFnZS5zY3NzIiwic3JjL2FwcC9za3Qvc2t0LWV4Y2VsbC9za3QtZXhjZWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FEQ0E7O0VBRUUseUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0dGOztBRERBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDSUY7O0FERkE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDS0Y7O0FESEE7RUFDRTtJQUNFLFNBQUE7RUNNRjs7RURKQTtJQUNFLFVBQUE7RUNPRjtBQUNGOztBRExBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQ09GOztBRExBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUNRRjtBQUNGOztBRE5BO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUNRRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2t0L3NrdC1leGNlbGwvc2t0LWV4Y2VsbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFiLWJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsYXZlbmRlcjtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTdweDtcclxuICByaWdodDogMTBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5mYWItYnRuOmhvdmVyIHtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuLnBkZi13cmFwcGVyLFxyXG4uZXhjZWwtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2V4Y2VsTmV3LnN2Z1wiKSBuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgbWFyZ2luOiA3cHg7XHJcbn1cclxuLnNlbGVjdGFibGUtaW5wdXQge1xyXG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5kb2N1bWVudHMge1xyXG4gIG1hcmdpbjogMzBweCAxNXB4IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIHpvb206IDgwJTtcclxuICB9XHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxufVxyXG4uZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjMyMHB4KSBhbmQobWF4LXdpZHRoOjEwMjNweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDhweCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDoxMDI0cHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiA4cHggMXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuIiwiLmZhYi1idG4ge1xuICAtLWJhY2tncm91bmQ6IGxhdmVuZGVyO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtN3B4O1xuICByaWdodDogMTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLmZhYi1idG46aG92ZXIge1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnBkZi13cmFwcGVyLFxuLmV4Y2VsLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZXhjZWxOZXcuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBtYXJnaW46IDdweDtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5kb2N1bWVudHMge1xuICBtYXJnaW46IDMwcHggMTVweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/skt/skt-excell/skt-excell.page.ts":
/*!***************************************************!*\
  !*** ./src/app/skt/skt-excell/skt-excell.page.ts ***!
  \***************************************************/
/*! exports provided: SktExcellPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SktExcellPage", function() { return SktExcellPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_7__);








var SktExcellPage = /** @class */ (function () {
    function SktExcellPage(commonService, ajaxService, formBuilder, platform) {
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.radioSelection = "New";
        this.name = false;
        this.excellKeyValid = false;
        this.imeiIssues = [];
        this.fileuploads = true;
        this.willDownload = false;
        this.output = "";
        this.selectedValue = "New";
        this.show = false;
    }
    SktExcellPage.prototype.createForm = function () {
        this.excelform = this.formBuilder.group({
            pickup: [""],
            drop: [""],
            fileupload: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    SktExcellPage.prototype.clear = function () {
        this.excelform.patchValue({
            fileupload: "",
            pickup: "",
            drop: "",
        });
        this.fileuploads = true;
        this.radioSelection = "New";
        this.selectedValue = "New";
    };
    SktExcellPage.prototype.fileclear = function () {
        this.excelform.patchValue({
            fileupload: "",
        });
        this.fileuploads = true;
    };
    SktExcellPage.prototype.selectPickDrop = function (event) {
        this.selectedValue = event.detail.value;
        this.radioSelection = event.detail.value;
        if (this.radioSelection == "Old") {
            this.show = true;
            this.getpick();
            this.getdrop();
        }
        else if (this.radioSelection == "New") {
            this.show = false;
        }
    };
    // selectPickDrop(event) {
    //   if (this.selectedValue == "Old") {
    //     this.clear();
    //     this.show = true;
    //     this.getpick();
    //     this.getdrop();
    //   } else {
    //     this.show = false;
    //   }
    // }
    SktExcellPage.prototype.getpick = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/student/school/routename?schoolId=" +
            localStorage.getItem("userName") +
            "&branchId=" +
            localStorage.getItem("userName") +
            "&trip=PickUp";
        // this.selectedValue;
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            _this.Pickuplist = res;
        });
    };
    SktExcellPage.prototype.getdrop = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/student/school/routename?schoolId=" +
            localStorage.getItem("userName") +
            "&branchId=" +
            localStorage.getItem("userName") +
            "&trip=Drop";
        // this.selectedValue;
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            _this.Droplist = res;
        });
    };
    SktExcellPage.prototype.onFileChange = function (ev) {
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
                workBook_1 = xlsx__WEBPACK_IMPORTED_MODULE_7__["read"](data, { type: "binary" });
                jsonData_1 = workBook_1.SheetNames.reduce(function (initial, name) {
                    var sheet = workBook_1.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].sheet_to_json(sheet);
                    return initial;
                }, {});
                var json = [];
                console.log(Object.keys(jsonData_1)[0]);
                if (String(Object.keys(jsonData_1)[0]) == "Sheet1") {
                    for (var i = 0; i < jsonData_1["Sheet1"].length; i++) {
                        var newData = {};
                        newData["StudentName"] = String(jsonData_1["Sheet1"][i]["Student Name"] || "");
                        if (isNaN(jsonData_1["Sheet1"][i]["Roll No"]) &&
                            String(jsonData_1["Sheet1"][i]["Roll No"] || "") != "") {
                            _this.commonService.showConfirm("Roll Number Only Enter Numeric Value");
                            _this.clear();
                            break;
                        }
                        newData["RollNo"] = String(jsonData_1["Sheet1"][i]["Roll No"] || "");
                        newData["ParentName"] = String(jsonData_1["Sheet1"][i]["Parent Name"] || "");
                        newData["ParentMobileNumber"] = String(jsonData_1["Sheet1"][i]["Parent Mobile Number"] || "");
                        newData["ParentEmail"] = String(jsonData_1["Sheet1"][i]["Parent Email"] || "");
                        newData["Sex"] = String(jsonData_1["Sheet1"][i]["Sex"] || "");
                        newData["ClassId"] = String(jsonData_1["Sheet1"][i]["ClassId"] || "");
                        newData["SecId"] = String(jsonData_1["Sheet1"][i]["SecId"] || "");
                        newData["TagId"] = String(jsonData_1["Sheet1"][i]["TagId"] || "");
                        json.push(newData);
                    }
                    _this.fileuploads = false;
                    console.log(jsonData_1["Sheet1"].length);
                    _this.dataString = json;
                    _this.output = _this.dataString.slice(0, 300).concat("...");
                }
                else {
                    _this.commonService.showConfirm("Please Insert Valid Excel File (.xlsx)");
                    _this.clear();
                }
            };
            reader_1.readAsBinaryString(file);
        }
        else {
            this.commonService.showConfirm("Please insert only Valid excel file (.xlsx)");
        }
    };
    SktExcellPage.prototype.sendToServer = function () {
        var _this = this;
        if (this.selectedValue == "Old") {
            if (this.excelform.value.pickup.length == "" ||
                this.excelform.value.drop.length == "") {
                this.commonService.showConfirm("Please Selct the Pick Up and Drop Route");
            }
            else {
                if (this.dataString.length == 0) {
                    this.commonService.showConfirm("Check your excell file,don't enter blank spaces");
                    this.clear();
                }
                else {
                    var excellKeys = Object.keys(this.dataString[0]);
                    for (var i = 0; i < excellKeys.length; i++) {
                        if (excellKeys[i] == "Student Name" ||
                            excellKeys[i] == "Parent Name" ||
                            excellKeys[i] == "Parent Mobile Number" ||
                            excellKeys[i] == "Sex" ||
                            excellKeys[i] == "tagId" ||
                            excellKeys[i] == "Roll No" ||
                            excellKeys[i] == "Parent Email" ||
                            excellKeys[i] == "ClassId" ||
                            excellKeys[i] == "SecId") {
                            console.log("present");
                            this.excellKeyValid = true;
                        }
                    }
                    if (this.name == true && this.excellKeyValid == true) {
                        this.commonService.presentLoader();
                        this.imeiIssues = [];
                        this.willDownload = true;
                        var data = {
                            companyId: localStorage.getItem("corpId"),
                            branchId: localStorage.getItem("corpId"),
                            createdby: localStorage.getItem("userName"),
                            value: this.dataString,
                            PickUp: this.excelform.value.pickup,
                            Drop: this.excelform.value.drop,
                        };
                        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/student/upload/old/excel";
                        this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
                            _this.commonService.dismissLoader();
                            if (res.message == "Addded Successfully") {
                                _this.commonService.showConfirm(res.message);
                                _this.clear();
                            }
                            else {
                                _this.commonService.showConfirm(res.message);
                                _this.fileclear();
                            }
                        });
                    }
                }
            }
        }
        else {
            if (this.dataString.length == 0) {
                this.commonService.showConfirm("Check your excell file,don't enter blank spaces");
                this.clear();
            }
            else {
                var excellKeys = Object.keys(this.dataString[0]);
                for (var i = 0; i < excellKeys.length; i++) {
                    if (excellKeys[i] == "Student Name" ||
                        excellKeys[i] == "Parent Name" ||
                        excellKeys[i] == "Parent Mobile Number" ||
                        excellKeys[i] == "Sex" ||
                        excellKeys[i] == "tagId" ||
                        excellKeys[i] == "Roll No" ||
                        excellKeys[i] == "Parent Email" ||
                        excellKeys[i] == "ClassId" ||
                        excellKeys[i] == "SecId") {
                        console.log("present");
                        this.excellKeyValid = true;
                    }
                }
                if (this.name == true && this.excellKeyValid == true) {
                    this.commonService.presentLoader();
                    this.imeiIssues = [];
                    this.willDownload = true;
                    var data = {
                        companyId: localStorage.getItem("corpId"),
                        branchId: localStorage.getItem("corpId"),
                        createdby: localStorage.getItem("userName"),
                        value: this.dataString,
                    };
                    var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/student/upload/new/excel";
                    this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
                        _this.commonService.dismissLoader();
                        _this.clear();
                        _this.commonService.showConfirm(res.message);
                    });
                }
            }
        }
        // this.commonService.presentLoader();
        // let branchId = localStorage.getItem("corpId");
        // this.dataString.forEach((res) => {
        //   (res.parentName = res.parentName.toString()),
        //     (res.mobileNumber = res.mobileNumber.toString()),
        //     (res.tagId = res.tagId.toString()),
        //     (res.studentName = res.studentName.toString());
        // });
        // let data = {
        //   companyId: branchId,
        //   branchId: branchId,
        //   value: this.dataString,
        // };
        // const url = serverUrl.web + "/student/upload/excel";
        // this.ajaxService.ajaxPostMethod(url, data).subscribe((res) => {
        //   console.log(res);
        //   this.commonService.presentToast(res[res.length - 1]);
        //   this.commonService.dismissLoader();
        //   this.clear();
        // });
    };
    SktExcellPage.prototype.ngOnInit = function () {
        this.createForm();
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
    };
    SktExcellPage.prototype.ionViewWillEnter = function () {
        this.clear();
    };
    SktExcellPage.ctorParameters = function () { return [
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
    ]; };
    SktExcellPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-skt-excell",
            template: __webpack_require__(/*! raw-loader!./skt-excell.page.html */ "./node_modules/raw-loader/index.js!./src/app/skt/skt-excell/skt-excell.page.html"),
            styles: [__webpack_require__(/*! ./skt-excell.page.scss */ "./src/app/skt/skt-excell/skt-excell.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], SktExcellPage);
    return SktExcellPage;
}());



/***/ })

}]);
//# sourceMappingURL=skt-skt-excell-skt-excell-module-es5.js.map