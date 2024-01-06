(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["third-party-vin-third-party-vin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/third-party-vin/third-party-vin.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/third-party-vin/third-party-vin.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar\r\n    [ngClass]=\"{'dealerHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\"\r\n    mode=\"md\"\r\n  >\r\n    <ion-buttons *ngIf=\"appName != 'Armoron'\" slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Third Party API</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"wrapper-container\">\r\n      <ion-col>\r\n        <form [formGroup]=\"thirdpartyform\">\r\n          <ion-row class=\"form-field\">\r\n            <ion-col size=\"6\" size-sm=\"6\" size-lg=\"6\" size-md=\"6\">\r\n              <ion-label class=\"label-head\">Third Party Server:</ion-label>\r\n              <ionic-selectable\r\n                class=\"input selectable-input\"\r\n                formControlName=\"serverlist\"\r\n                [items]=\"serverlist\"\r\n                [canSearch]=\"true\"\r\n                [hasVirtualScroll]=\"true\"\r\n                placeholder=\"Select the Server\"\r\n                closeButtonSlot=\"end\"\r\n              >\r\n              </ionic-selectable>\r\n            </ion-col>\r\n            <ion-col\r\n              size=\"6\"\r\n              size-sm=\"6\"\r\n              size-lg=\"6\"\r\n              size-md=\"6\"\r\n              style=\"text-align: center; margin-top: 25px\"\r\n            >\r\n              <ion-button\r\n                class=\"submitbtn\"\r\n                (click)=\"onSubmit()\"\r\n                [disabled]=\"!thirdpartyform.valid\"\r\n              >\r\n                Submit\r\n              </ion-button>\r\n              <ion-button\r\n                class=\"submitbtn\"\r\n                [disabled]=\"!thirdpartyform.valid\"\r\n                (click)=\"clear()\"\r\n                >Clear</ion-button\r\n              >\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n        <div>\r\n          <form [formGroup]=\"urlform\">\r\n            <ion-row class=\"form-field\">\r\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\r\n                <ion-label class=\"label-head\">URL:</ion-label>\r\n                <ion-input\r\n                  formControlName=\"thirdpartyurl\"\r\n                  class=\"input\"\r\n                  placeholder=\"URL link\"\r\n                ></ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\r\n                <ion-label class=\"label-head\">Imei No:</ion-label>\r\n                <ion-input\r\n                  formControlName=\"imeino\"\r\n                  type=\"number\"\r\n                  class=\"input\"\r\n                  placeholder=\"Enter the Imei No\"\r\n                ></ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row class=\"form-field\">\r\n              <ion-col style=\"margin: 10px 0px 0px; text-align: end\">\r\n                <ion-button\r\n                  class=\"submitbtn\"\r\n                  (click)=\"addModel()\"\r\n                  [disabled]=\"!urlform.valid\"\r\n                  >Add</ion-button\r\n                >\r\n                <ion-button\r\n                  class=\"submitbtn\"\r\n                  [disabled]=\"showButton\"\r\n                  (click)=\"deleteModel()\"\r\n                  >Delete</ion-button\r\n                >\r\n              </ion-col>\r\n            </ion-row>\r\n          </form>\r\n        </div>\r\n        <ion-row style=\"padding-top: 5px\">\r\n          <ion-col>\r\n            <jqxGrid\r\n              *ngIf=\"show\"\r\n              #myGrid\r\n              [selectionmode]=\"'checkbox'\"\r\n              (onRowselect)=\"myGridOnRowSelect($event)\"\r\n              (onRowunselect)=\"myGridOnRowSelect($event)\"\r\n              [enablebrowserselection]=\"true\"\r\n              [editable]=\"false\"\r\n              [theme]=\"'material'\"\r\n              [width]=\"'99%'\"\r\n              [autoheight]=\"true\"\r\n              [source]=\"dataAdapter\"\r\n              [pagesizeoptions]=\"page\"\r\n              [sortable]=\"true\"\r\n              [filterable]=\"true\"\r\n              [columns]=\"columns\"\r\n              [columnsresize]=\"true\"\r\n              [enabletooltips]=\"true\"\r\n              [pageable]=\"true\"\r\n              [showfilterrow]=\"true\"\r\n              style=\"\r\n                font-size: 16px;\r\n                text-align: center !important;\r\n                margin: 5px;\r\n                cursor: pointer;\r\n              \"\r\n            >\r\n            </jqxGrid> </ion-col\r\n        ></ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/delar-application/third-party-vin/third-party-vin.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/delar-application/third-party-vin/third-party-vin.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ThirdPartyVinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPartyVinPageModule", function() { return ThirdPartyVinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _third_party_vin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./third-party-vin.page */ "./src/app/delar-application/third-party-vin/third-party-vin.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");









const routes = [
    {
        path: '',
        component: _third_party_vin_page__WEBPACK_IMPORTED_MODULE_6__["ThirdPartyVinPage"]
    }
];
let ThirdPartyVinPageModule = class ThirdPartyVinPageModule {
};
ThirdPartyVinPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__["SharedModModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_third_party_vin_page__WEBPACK_IMPORTED_MODULE_6__["ThirdPartyVinPage"]]
    })
], ThirdPartyVinPageModule);



/***/ }),

/***/ "./src/app/delar-application/third-party-vin/third-party-vin.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/delar-application/third-party-vin/third-party-vin.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.label-heads {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px -10px 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 13px 1px;\n    padding-right: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vdGhpcmQtcGFydHktdmluL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXHRoaXJkLXBhcnR5LXZpblxcdGhpcmQtcGFydHktdmluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vdGhpcmQtcGFydHktdmluL3RoaXJkLXBhcnR5LXZpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0dGOztBRERBO0VBQ0UscUJBQUE7QUNJRjs7QURGQTtFQUNFO0lBQ0UsZ0JBQUE7RUNLRjs7RURIQTtJQUNFLFVBQUE7RUNNRjtBQUNGOztBREpBO0VBQ0U7SUFDRSxTQUFBO0VDTUY7O0VESkE7SUFDRSxVQUFBO0VDT0Y7QUFDRjs7QURMQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUNPRjs7QURMQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtFQ1FGO0FBQ0Y7O0FETkE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7RUNRRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vdGhpcmQtcGFydHktdmluL3RoaXJkLXBhcnR5LXZpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIG1hcmdpbjogN3B4O1xyXG59XHJcbi5zZWxlY3RhYmxlLWlucHV0IHtcclxuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmxhYmVsLWhlYWQge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xyXG59XHJcbi5sYWJlbC1oZWFkcyB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XHJcbn1cclxuLnN1Ym1pdGJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNjI1MmVlO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgem9vbTogODAlO1xyXG4gIH1cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG59XHJcbi5mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IC01cHggNXB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MzIwcHgpIGFuZChtYXgtd2lkdGg6MTAyM3B4KSB7XHJcbiAgLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbjogOHB4IC0xMHB4IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDoxMDI0cHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAxM3B4IDFweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcbiIsIi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgbWFyZ2luOiA3cHg7XG59XG5cbi5zZWxlY3RhYmxlLWlucHV0IHtcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubGFiZWwtaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XG59XG5cbi5sYWJlbC1oZWFkcyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XG59XG5cbi5zdWJtaXRidG4ge1xuICAtLWJhY2tncm91bmQ6ICM2MjUyZWU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IC0xMHB4IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDEzcHggMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/third-party-vin/third-party-vin.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/delar-application/third-party-vin/third-party-vin.page.ts ***!
  \***************************************************************************/
/*! exports provided: ThirdPartyVinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPartyVinPage", function() { return ThirdPartyVinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








let ThirdPartyVinPage = class ThirdPartyVinPage {
    constructor(ajaxService, platform, modalController, alertController, commonService, formBuilder) {
        this.ajaxService = ajaxService;
        this.platform = platform;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.selectedRow = [];
        this.show = false;
        this.showButton = true;
        this.page = [];
    }
    clear() {
        this.thirdpartyform.patchValue({
            serverlist: "",
        });
        this.urlform.patchValue({
            thirdpartyurl: "",
            imeino: "",
        });
        this.show = false;
        this.myGrid.clearselection();
    }
    getlist() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/global/getThirdparty";
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            console.log(res);
            this.serverlist = res;
        });
    }
    onSubmit() {
        this.show = false;
        this.commonService.presentLoader();
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/global/getThirdpartyVinsAndUrl?thirdpartyservers=" +
            this.thirdpartyform.value.serverlist;
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            console.log(res);
            this.apiurl = res;
            this.commonService.dismissLoader();
            this.show = true;
            this.urlform.patchValue({
                thirdpartyurl: this.apiurl.thirdpartyurl,
            });
            this.tableData = this.apiurl.thirdpartyvins;
            this.getdata();
        });
    }
    refresh() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/global/getThirdpartyVinsAndUrl?thirdpartyservers=" +
            this.selectedRow.thirdpartyserver;
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            console.log(res);
            this.apiurl = res;
            this.show = true;
            this.urlform.patchValue({
                thirdpartyurl: this.apiurl.thirdpartyurl,
            });
            this.tableData = this.apiurl.thirdpartyvins;
            this.getdata();
        });
    }
    add() {
        var data;
        data = {
            thirdpartyservers: this.thirdpartyform.value.serverlist,
            url: this.urlform.value.thirdpartyurl,
            imeino: this.urlform.value.imeino.toString(),
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/global/saveThirdpartyVins";
        this.ajaxService
            .ajaxPostWithString(url, JSON.stringify(data))
            .subscribe((res) => {
            if (JSON.parse(res).message == "third party vin saved successfully") {
                this.commonService.presentToast("Third Party Vin saved successfully");
                this.onSubmit();
                this.modalController.dismiss();
            }
            else {
                this.commonService.showConfirm(JSON.parse(res).message);
            }
        });
    }
    addModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: " Confirm",
                backdropDismiss: false,
                message: "Are you sure you want to save?",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: (data) => { },
                    },
                    {
                        text: "Ok",
                        handler: (data) => {
                            this.add();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    delete() {
        let selectdata = this.myGrid.getselectedrowindexes();
        let arr = [];
        for (let i = 0; i < selectdata.length; i++) {
            arr.push({
                thirdpartyservers: this.myGrid["attrSource"]["originaldata"][selectdata[i]]
                    .thirdpartyserver,
                vin: this.myGrid["attrSource"]["originaldata"][selectdata[i]].vin,
            });
        }
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/global/DeleteThirdpartyVins";
        this.ajaxService.ajaxPostWithString(url, arr).subscribe((response) => {
            let res = JSON.parse(response);
            if (res.message == "third party vins removed successfully") {
                this.commonService.showConfirm("Third Party Vins Removed Successfully");
                this.clear();
                // this.refresh();
                // this.myGrid.clearselection();
                // this.modalController.dismiss();
                // this.selectedRow = "";
            }
            else {
                this.commonService.showConfirm("Please Contact Support Team");
            }
        });
    }
    deleteModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.selectedRow) {
                const alert = yield this.alertController.create({
                    header: " Delete",
                    backdropDismiss: false,
                    message: "Are you sure you want to delete?",
                    buttons: [
                        {
                            text: "Cancel",
                            role: "cancel",
                            handler: (data) => { },
                        },
                        {
                            text: "Ok",
                            handler: (data) => {
                                this.delete();
                            },
                        },
                    ],
                });
                yield alert.present();
            }
            else {
                this.commonService.presentToast("Please select a row to Delete");
                return "";
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
    getdata() {
        this.renderer = (row, column, value) => {
            if (value == "" || null || undefined || value == ",") {
                return "---";
            }
            else {
                return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                    value +
                    "</span>");
            }
        };
        this.source = { localdata: this.tableData };
        this.page = ["10", "20", "50", "100"];
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.columns = [
            {
                text: "Imei Number",
                datafield: "imeino",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 130,
            },
            {
                text: "Vin",
                datafield: "vin",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 130,
            },
            {
                text: "Plate No",
                datafield: "plateno",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 130,
            },
            {
                text: "Data Received",
                datafield: "Data Received",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 180,
            },
            {
                text: "Data Send",
                datafield: "Data Sent",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 130,
            },
            {
                text: "Third Party Server",
                datafield: "thirdpartyserver",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 170,
            },
            {
                text: "Send Date",
                datafield: "updateddate",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 130,
            },
            {
                text: "Delete Status",
                datafield: "deletestatus",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 130,
            },
        ];
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["app"].appName;
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.thirdpartyform = this.formBuilder.group({
            serverlist: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.urlform = this.formBuilder.group({
            thirdpartyurl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            imeino: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.getlist();
        this.getdata();
    }
    ionViewWillEnter() {
        this.thirdpartyform.reset();
        this.urlform.reset();
        this.show = false;
    }
};
ThirdPartyVinPage.ctorParameters = () => [
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ThirdPartyVinPage.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("selectComponent", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic_selectable__WEBPACK_IMPORTED_MODULE_4__["IonicSelectableComponent"])
], ThirdPartyVinPage.prototype, "selectComponent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ThirdPartyVinPage.prototype, "myGrid", void 0);
ThirdPartyVinPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-third-party-vin",
        template: __webpack_require__(/*! raw-loader!./third-party-vin.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/third-party-vin/third-party-vin.page.html"),
        styles: [__webpack_require__(/*! ./third-party-vin.page.scss */ "./src/app/delar-application/third-party-vin/third-party-vin.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], ThirdPartyVinPage);



/***/ })

}]);
//# sourceMappingURL=third-party-vin-third-party-vin-module-es2015.js.map