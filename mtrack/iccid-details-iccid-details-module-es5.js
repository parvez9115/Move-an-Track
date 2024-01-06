(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["iccid-details-iccid-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/iccid-details/iccid-details.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/iccid-details/iccid-details.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"dealerHeader\">\r\n     <ion-row>\r\n      <ion-icon class=\"iconSize25px\" (click)=\"closePage()\" name=\"arrow-back\"></ion-icon>\r\n      <ion-title>Iccid Details</ion-title>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"container\">\r\n    <ion-row class=\"wrapper-container\">\r\n      <ion-col>\r\n        <form [formGroup]=\"icciddetails\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-input class=\"input\" formControlName=\"iccidnumber\" placeholder=\"Enter the Iccid Number\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n        <ion-row>\r\n          <ion-col style=\"text-align: center !important;padding: 20px;\">\r\n            <ion-button style=\"width: 25%;\"class=\"submitbtn\" (click)=\"submitBtn()\"[disabled]=\"!icciddetails.valid\">Submit</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"show\">\r\n          <ion-col size=12 size-sm=\"12\" size-lg=\"4\" size-md=\"6\" style=\"margin: auto;\" >\r\n            <ion-card style=\"border-left: 4px solid #7c68f8; margin: 0px;\">\r\n              <ion-card-content>\r\n                <ion-row>\r\n                  <ion-col size=12>\r\n                    <ion-row>\r\n                      <ion-col size=12 class=\"ImeiStyle\">\r\n                      <span class=\"span_style\">Iccid Number:</span>{{reportData.iccid}}\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <!-- <ion-row>\r\n                      <ion-col size=12 class=\"ImeiStyle\">\r\n                        <span class=\"span_style\">Card Active Date:</span> {{reportData.cardactivedate}}\r\n                      </ion-col>\r\n                    </ion-row> -->\r\n                    <ion-row>\r\n                      <ion-col size=12 class=\"ImeiStyle\">\r\n                        <span class=\"span_style\">Card End Date:</span> {{reportData.cardenddate}}\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=12 class=\"ImeiStyle\">\r\n                        <span class=\"span_style\">Card Status:</span> {{reportData.cardstatus}}\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=12 class=\"ImeiStyle\">\r\n                        <span class=\"span_style\">Card State:</span> {{reportData.cardstate}}\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n          </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n    \r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/delar-application/iccid-details/iccid-details.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/delar-application/iccid-details/iccid-details.module.ts ***!
  \*************************************************************************/
/*! exports provided: IccidDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IccidDetailsPageModule", function() { return IccidDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _iccid_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iccid-details.page */ "./src/app/delar-application/iccid-details/iccid-details.page.ts");







var routes = [
    {
        path: '',
        component: _iccid_details_page__WEBPACK_IMPORTED_MODULE_6__["IccidDetailsPage"]
    }
];
var IccidDetailsPageModule = /** @class */ (function () {
    function IccidDetailsPageModule() {
    }
    IccidDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_iccid_details_page__WEBPACK_IMPORTED_MODULE_6__["IccidDetailsPage"]]
        })
    ], IccidDetailsPageModule);
    return IccidDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/iccid-details/iccid-details.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/delar-application/iccid-details/iccid-details.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".iconSize25px {\n  font-size: 25px;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.submitbtn {\n  --background:#7c68f8;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -16px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 30px 11px;\n    padding-right: 20px;\n  }\n}\n\n.ImeiStyle {\n  font-family: sans-serif;\n  font-size: 15px;\n  text-transform: uppercase;\n  padding: 0px;\n  align-self: center;\n  font-weight: 600;\n}\n\n.span_style {\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vaWNjaWQtZGV0YWlscy9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxpY2NpZC1kZXRhaWxzXFxpY2NpZC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vaWNjaWQtZGV0YWlscy9pY2NpZC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURDRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0VKOztBRENFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUU7RUFDRSxvQkFBQTtBQ0dKOztBRERFO0VBQ0k7SUFDQSxnQkFBQTtFQ0lKOztFREZJO0lBQ0ksVUFBQTtFQ0tSO0FBQ0Y7O0FESEU7RUFDSTtJQUNBLFNBQUE7RUNLSjs7RURISTtJQUNJLFVBQUE7RUNNUjtBQUNGOztBREpFO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQ01OOztBREpFO0VBQ0U7SUFDSSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUNPTjtBQUNGOztBRExFO0VBQ0U7SUFDSSxpQkFBQTtJQUNBLG1CQUFBO0VDT047QUFDRjs7QURKRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURKRTtFQUVFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2ljY2lkLWRldGFpbHMvaWNjaWQtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvblNpemUyNXB4IHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbiAgLmlucHV0e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICAgIFxyXG4gIH1cclxuICAuc2VsZWN0YWJsZS1pbnB1dHtcclxuICAgIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4gIC5zdWJtaXRidG57XHJcbiAgICAtLWJhY2tncm91bmQ6IzdjNjhmODtcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KXtcclxuICAgICAgLmlucHV0e1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICAgICNzdWJtaXRidG57XHJcbiAgICAgICAgICB3aWR0aDoyMCU7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgICAgLmZvcm0tZmllbGR7XHJcbiAgICAgIHpvb206ODAlO1xyXG4gICAgICB9XHJcbiAgICAgICNzdWJtaXRidG57XHJcbiAgICAgICAgICB3aWR0aDo4MCU7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgLmZvcm0tZmllbGR7XHJcbiAgICAgIG1hcmdpbjogLTE2cHggNXB4IDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweClhbmQobWF4LXdpZHRoOjEwMjNweCl7XHJcbiAgICAud3JhcHBlci1jb250YWluZXJ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDAgMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDoxMDI0cHgpe1xyXG4gICAgLndyYXBwZXItY29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbjogMzBweCAxMXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcbiAgLkltZWlTdHlsZSB7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICAuc3Bhbl9zdHlsZVxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH0iLCIuaWNvblNpemUyNXB4IHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG59XG5cbi5zZWxlY3RhYmxlLWlucHV0IHtcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uc3VibWl0YnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiM3YzY4Zjg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC0xNnB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDMwcHggMTFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4uSW1laVN0eWxlIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zcGFuX3N0eWxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/iccid-details/iccid-details.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/delar-application/iccid-details/iccid-details.page.ts ***!
  \***********************************************************************/
/*! exports provided: IccidDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IccidDetailsPage", function() { return IccidDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var IccidDetailsPage = /** @class */ (function () {
    function IccidDetailsPage(location, alertCtrl, formBuilder, ajaxService, loadingController, commonService) {
        this.location = location;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.ajaxService = ajaxService;
        this.loadingController = loadingController;
        this.commonService = commonService;
        this.show = false;
    }
    IccidDetailsPage.prototype.closePage = function () {
        this.location.back();
    };
    IccidDetailsPage.prototype.submitBtn = function () {
        var _this = this;
        this.show = false;
        if (this.icciddetails.value.iccidnumber.length != 20) {
            this.MessageAlert = "Please Check the Iccid Number";
            this.showConfirm();
            this.show = false;
        }
        else {
            this.show = false;
            var url = 'https://testing.apmkingstrack.com/fleettracking/sensorise/getSensoriseICCIDStatus?companyid=' + localStorage.getItem('corpId') + '&iccidno=' + this.icciddetails.value.iccidnumber;
            this.presentLoader();
            this.ajaxService.ajaxGet(url)
                .subscribe(function (res) {
                if (JSON.stringify(res) == '{}' || res == undefined) {
                    _this.show = false;
                    _this.MessageAlert = "Invalid Iccid Number";
                    _this.showConfirm();
                    // this.commonService.presentToast('Invalid Iccid Number')
                }
                else if (res.message == 'success') {
                    _this.reportData = res;
                    _this.show = true;
                }
                else {
                    _this.show = false;
                    _this.MessageAlert = res.message;
                    _this.showConfirm();
                }
                _this.commonService.dismissLoader();
            });
        }
    };
    IccidDetailsPage.prototype.createForm = function () {
        this.icciddetails = this.formBuilder.group({
            iccidnumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    IccidDetailsPage.prototype.showConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var confirm;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Alert!',
                            message: this.MessageAlert,
                            buttons: [
                                {
                                    text: 'Ok',
                                    handler: function (data) {
                                    }
                                }
                            ]
                        })];
                    case 1:
                        confirm = _a.sent();
                        return [4 /*yield*/, confirm.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    IccidDetailsPage.prototype.ionViewWillEnter = function () {
        this.reportData = '';
    };
    IccidDetailsPage.prototype.presentLoader = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        setTimeout(function () {
                            _this.dismissLoader();
                        }, 8000);
                        return [4 /*yield*/, this.loadingController.create({
                                spinner: "circles",
                                message: "Please Wait!",
                                translucent: false,
                                cssClass: 'custom-loader-class'
                            }).then(function (a) {
                                a.present().then(function () {
                                    console.log('presented');
                                    if (!_this.isLoading) {
                                        a.dismiss().then(function () { return console.log('abort presenting'); });
                                    }
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    IccidDetailsPage.prototype.dismissLoader = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = false;
                        return [4 /*yield*/, this.loadingController.dismiss().then(function () { return console.log('dismissed'); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    IccidDetailsPage.prototype.ngOnInit = function () {
        this.createForm();
    };
    IccidDetailsPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
    ]; };
    IccidDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-iccid-details',
            template: __webpack_require__(/*! raw-loader!./iccid-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/iccid-details/iccid-details.page.html"),
            styles: [__webpack_require__(/*! ./iccid-details.page.scss */ "./src/app/delar-application/iccid-details/iccid-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], IccidDetailsPage);
    return IccidDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=iccid-details-iccid-details-module-es5.js.map