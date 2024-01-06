(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fms-currency-settings-currency-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/fms/currency-settings/currency-settings.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fms/currency-settings/currency-settings.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" [ngClass]=\"{'companyHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\">\r\n    <ion-grid >\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row *ngIf=\"myPlatform != 'desktop'\">\r\n            <ion-col size=\"2\">\r\n                <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n           <ion-col size=\"8\">\r\n            <ion-label>Currency Settings </ion-label>\r\n           </ion-col>  \r\n        </ion-row>\r\n          <ion-row *ngIf=\"myPlatform == 'desktop'\">\r\n            <ion-col size='2'>\r\n              <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <ion-label class=\"headercolour\">Currency Settings</ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-img [src]=\"app.logo\"></ion-img>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>  \r\n</ion-header>\r\n<ion-content>\r\n<ion-row class=\"wrapper-container\">\r\n  <ion-col>\r\n    <form [formGroup]=\"currencylist\">\r\n      <ion-row>\r\n        <ion-col *ngIf=\"currencys\">\r\n          <ionic-selectable class=\"input selectable-input\" formControlName=\"currency\" placeholder=\"Select the Currency\"\r\n          [items]=\"currency\"  [canSearch]=\"true\" [hasVirtualScroll]=\"true\" [disabledItems]=\"data\"></ionic-selectable>\r\n        </ion-col>\r\n        <ion-col *ngIf=\"hideSerialNo\">\r\n          <ion-input type=\"text\" formControlName=\"currency\" [disabled]='hideSerialNo' value={{currencyvalue}} class=\"input selectable-input\"></ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n    <ion-row>\r\n      <ion-col style=\"text-align: center !important;padding: 20px;\">\r\n        <ion-button *ngIf=\"currencys\" class=\"submitbtn\" (click)=\"submitBtn()\"[disabled]=\"!currencylist.valid\">Submit</ion-button>\r\n        <ion-button *ngIf=\"hideSerialNo\" class=\"submitbtn\" (click)=\"submitBtn()\"disabled>Submit</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-col>\r\n</ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/fms/currency-settings/currency-settings.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/fms/currency-settings/currency-settings.module.ts ***!
  \*******************************************************************/
/*! exports provided: CurrencySettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencySettingsPageModule", function() { return CurrencySettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _currency_settings_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./currency-settings.page */ "./src/app/fms/currency-settings/currency-settings.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");










var routes = [
    {
        path: '',
        component: _currency_settings_page__WEBPACK_IMPORTED_MODULE_7__["CurrencySettingsPage"]
    }
];
var CurrencySettingsPageModule = /** @class */ (function () {
    function CurrencySettingsPageModule() {
    }
    CurrencySettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_5__["SharedModModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_currency_settings_page__WEBPACK_IMPORTED_MODULE_7__["CurrencySettingsPage"]]
        })
    ], CurrencySettingsPageModule);
    return CurrencySettingsPageModule;
}());



/***/ }),

/***/ "./src/app/fms/currency-settings/currency-settings.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/fms/currency-settings/currency-settings.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.submitbtn {\n  --background:#9c27b0;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -16px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 30px 11px;\n    padding-right: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm1zL2N1cnJlbmN5LXNldHRpbmdzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZm1zXFxjdXJyZW5jeS1zZXR0aW5nc1xcY3VycmVuY3ktc2V0dGluZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9mbXMvY3VycmVuY3ktc2V0dGluZ3MvY3VycmVuY3ktc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNBSjs7QURFQTtFQUNJLG9CQUFBO0FDQ0o7O0FEQ0U7RUFDSTtJQUNBLGdCQUFBO0VDRUo7O0VEQUk7SUFDSSxVQUFBO0VDR1I7QUFDRjs7QURERTtFQUNJO0lBQ0EsU0FBQTtFQ0dKOztFRERJO0lBQ0ksVUFBQTtFQ0lSO0FBQ0Y7O0FERkU7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FDSU47O0FERkE7RUFDSTtJQUNJLFlBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQ0tOO0FBQ0Y7O0FESEE7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsbUJBQUE7RUNLTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZm1zL2N1cnJlbmN5LXNldHRpbmdzL2N1cnJlbmN5LXNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaW5wdXR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gICAgXHJcbn1cclxuLnNlbGVjdGFibGUtaW5wdXR7XHJcbiAgICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5zdWJtaXRidG57XHJcbiAgICAtLWJhY2tncm91bmQ6IzljMjdiMDtcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KXtcclxuICAgICAgLmlucHV0e1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICAgICNzdWJtaXRidG57XHJcbiAgICAgICAgICB3aWR0aDoyMCU7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgICAgLmZvcm0tZmllbGR7XHJcbiAgICAgIHpvb206ODAlO1xyXG4gICAgICB9XHJcbiAgICAgICNzdWJtaXRidG57XHJcbiAgICAgICAgICB3aWR0aDo4MCU7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgLmZvcm0tZmllbGR7XHJcbiAgICAgIG1hcmdpbjogLTE2cHggNXB4IDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIH1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MzIwcHgpYW5kKG1heC13aWR0aDoxMDIzcHgpe1xyXG4gICAgLndyYXBwZXItY29udGFpbmVye1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDhweCAwIDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDoxMDI0cHgpe1xyXG4gICAgLndyYXBwZXItY29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbjogMzBweCAxMXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufSIsIi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5zdWJtaXRidG4ge1xuICAtLWJhY2tncm91bmQ6IzljMjdiMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTE2cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogMzBweCAxMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/fms/currency-settings/currency-settings.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/fms/currency-settings/currency-settings.page.ts ***!
  \*****************************************************************/
/*! exports provided: CurrencySettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencySettingsPage", function() { return CurrencySettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var CurrencySettingsPage = /** @class */ (function () {
    function CurrencySettingsPage(platform, formBuilder, modalController, ajaxService, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.hideSerialNo = false;
        this.currencys = true;
        this.app = { logo: 'logo.png' };
    }
    CurrencySettingsPage.prototype.getcurrency = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/currency/getFmsAllCurrency';
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(function (res) {
            _this.currency = res;
        });
    };
    CurrencySettingsPage.prototype.getcurrencydetails = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/currency/getFmsCurrencySettings?companyid=' + localStorage.getItem('corpId');
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(function (res) {
            if (res.message == "Invalid Data") {
                _this.currencys = true;
                _this.hideSerialNo = false;
            }
            else {
                _this.currencyvalue = res.currency;
                _this.currencys = false;
                _this.hideSerialNo = true;
            }
        });
    };
    CurrencySettingsPage.prototype.submitBtn = function () {
        var _this = this;
        var data;
        if (!this.value) {
            data = {
                "companyid": localStorage.getItem('corpId'),
                "branchid": localStorage.getItem('corpId'),
                "code": this.currencylist.value.currency,
                "createddate": new Date(),
                "createdby": localStorage.getItem('userName'),
                "updateddate": null,
                "updatedby": null
            };
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/currency/fmsSaveCurrencySettings';
            this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
                if (res.message == "Currency Saved Successfully") {
                    _this.commonService.presentToast('Currency Added Succesfully');
                    _this.modalController.dismiss();
                }
                else {
                    _this.commonService.presentToast('Please Contact Support Team');
                }
                _this.getcurrencydetails();
            });
        }
    };
    CurrencySettingsPage.prototype.createForm = function () {
        this.currencylist = this.formBuilder.group({
            currency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    CurrencySettingsPage.prototype.ngOnInit = function () {
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["app"].appName;
        // this.app["logo"] = localStorage.companyLogo;
        if (localStorage.getItem('fmslogin') == 'FMS') {
            this.app["logo"] = localStorage.getItem('fmslogo');
        }
        else {
            this.app["logo"] = localStorage.companyLogo;
        }
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
        this.getcurrencydetails();
        this.getcurrency();
        this.createForm();
    };
    CurrencySettingsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selectComponent', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic_selectable__WEBPACK_IMPORTED_MODULE_4__["IonicSelectableComponent"])
    ], CurrencySettingsPage.prototype, "selectComponent", void 0);
    CurrencySettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-currency-settings',
            template: __webpack_require__(/*! raw-loader!./currency-settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/fms/currency-settings/currency-settings.page.html"),
            styles: [__webpack_require__(/*! ./currency-settings.page.scss */ "./src/app/fms/currency-settings/currency-settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], CurrencySettingsPage);
    return CurrencySettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=fms-currency-settings-currency-settings-module-es5.js.map