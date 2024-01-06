(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["warranty-expiry-warranty-expiry-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/warranty-expiry/warranty-expiry.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/warranty-expiry/warranty-expiry.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar\r\n    [ngClass]=\"{'dealerHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\"\r\n    mode=\"md\"\r\n  >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Sim Card Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"form-field\">\r\n      <ion-col>\r\n        <form [formGroup]=\"validityForm\">\r\n          <ion-row style=\"text-align: center\">\r\n            <ion-col size=\"12\" size-sm=\"6\" size-lg=\"6\" size-md=\"6\">\r\n              <ion-item>\r\n                <ion-label position=\"fixed\" style=\"color: Blue\"\r\n                  >Imei Number</ion-label\r\n                >\r\n                <ion-input\r\n                  [ngClass]=\"{'armoron' : appName == 'Armoron', 'heading' : appName != 'Armoron'}\"\r\n                  type=\"number\"\r\n                  formControlName=\"imeino\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"4\" size-lg=\"4\" size-md=\"4\">\r\n              <ion-button\r\n                (click)=\"onSubmit()\"\r\n                id=\"submitbtn\"\r\n                [disabled]=\"!validityForm.valid\"\r\n              >\r\n                Submit\r\n              </ion-button>\r\n              <ion-button\r\n                (click)=\"deleteMethod()\"\r\n                id=\"submitbtn\"\r\n                [disabled]=\"!validityForm.valid\"\r\n              >\r\n                Delete\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n        <div style=\"margin: 32px; border: 1px solid black\">\r\n          <ion-header>\r\n            <ion-toolbar>\r\n              <ion-title style=\"text-align: center; padding: 25px\"\r\n                >Sim Renewal Details</ion-title\r\n              >\r\n            </ion-toolbar>\r\n          </ion-header>\r\n          <form [formGroup]=\"UpdateForm\">\r\n            <ion-row>\r\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\r\n                <ion-item>\r\n                  <ion-label position=\"fixed\" style=\"color: Blue\"\r\n                    >Purchase On</ion-label\r\n                  >\r\n                  <ion-input\r\n                    [ngClass]=\"{'armoron' : appName == 'Armoron', 'heading' : appName != 'Armoron'}\"\r\n                    formControlName=\"dateofpurchase\"\r\n                    type=\"date\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\r\n                <ion-item>\r\n                  <ion-label position=\"fixed\" style=\"color: Blue\"\r\n                    >Expiring On</ion-label\r\n                  >\r\n                  <ion-input\r\n                    [ngClass]=\"{'armoron' : appName == 'Armoron', 'heading' : appName != 'Armoron'}\"\r\n                    formControlName=\"warrantyexpirydate\"\r\n                    type=\"date\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" style=\"color: Blue\"\r\n                    >Sim No 1</ion-label\r\n                  >\r\n                  <ion-input\r\n                    [ngClass]=\"{'armoron' : appName == 'Armoron', 'heading' : appName != 'Armoron'}\"\r\n                    formControlName=\"simcardno1\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" style=\"color: Blue\"\r\n                    >Sim No 2</ion-label\r\n                  >\r\n                  <ion-input\r\n                    [ngClass]=\"{'armoron' : appName == 'Armoron', 'heading' : appName != 'Armoron'}\"\r\n                    formControlName=\"simcardno2\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" style=\"color: Blue\"\r\n                    >Device Model</ion-label\r\n                  >\r\n                  <ion-input\r\n                    [ngClass]=\"{'armoron' : appName == 'Armoron', 'heading' : appName != 'Armoron'}\"\r\n                    formControlName=\"devicemodel\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" style=\"color: Blue\"\r\n                    >Agency Code</ion-label\r\n                  >\r\n                  <ion-input\r\n                    [ngClass]=\"{'armoron' : appName == 'Armoron', 'heading' : appName != 'Armoron'}\"\r\n                    formControlName=\"agency\"\r\n                    type=\"number\"\r\n                    disabled\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" style=\"color: Blue\"\r\n                    >Current Agency Code</ion-label\r\n                  >\r\n                  <ion-input\r\n                    [ngClass]=\"{'armoron' : appName == 'Armoron', 'heading' : appName != 'Armoron'}\"\r\n                    formControlName=\"currentagency\"\r\n                    type=\"number\"\r\n                    disabled\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" style=\"color: Blue\"\r\n                    >Previous Agency Code</ion-label\r\n                  >\r\n                  <ion-input\r\n                    [ngClass]=\"{'armoron' : appName == 'Armoron', 'heading' : appName != 'Armoron'}\"\r\n                    formControlName=\"previousagency\"\r\n                    type=\"number\"\r\n                    disabled\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n          </form>\r\n          <ion-row>\r\n            <ion-col style=\"text-align: center; padding: 32px\">\r\n              <ion-button (click)=\"save()\" [disabled]=\"!UpdateForm.valid\"\r\n                >Save</ion-button\r\n              >\r\n              <ion-button (click)=\"clear()\">Clear</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/delar-application/warranty-expiry/warranty-expiry.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/delar-application/warranty-expiry/warranty-expiry.module.ts ***!
  \*****************************************************************************/
/*! exports provided: WarrantyExpiryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarrantyExpiryPageModule", function() { return WarrantyExpiryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _warranty_expiry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./warranty-expiry.page */ "./src/app/delar-application/warranty-expiry/warranty-expiry.page.ts");







var routes = [
    {
        path: '',
        component: _warranty_expiry_page__WEBPACK_IMPORTED_MODULE_6__["WarrantyExpiryPage"]
    }
];
var WarrantyExpiryPageModule = /** @class */ (function () {
    function WarrantyExpiryPageModule() {
    }
    WarrantyExpiryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_warranty_expiry_page__WEBPACK_IMPORTED_MODULE_6__["WarrantyExpiryPage"]]
        })
    ], WarrantyExpiryPageModule);
    return WarrantyExpiryPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/warranty-expiry/warranty-expiry.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/delar-application/warranty-expiry/warranty-expiry.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-field {\n  padding-left: 9px;\n}\n\n@media only screen and (min-width: 10px) and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n    margin: 5% auto 3px;\n  }\n\n  #submitbtn {\n    width: 40%;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .form-field {\n    margin: 3% auto 5px;\n    padding: 0px 20px;\n  }\n\n  #submitbtn {\n    width: 38%;\n  }\n}\n\n#submitbtn {\n  --background: #6252ee !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vd2FycmFudHktZXhwaXJ5L0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXHdhcnJhbnR5LWV4cGlyeVxcd2FycmFudHktZXhwaXJ5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vd2FycmFudHktZXhwaXJ5L3dhcnJhbnR5LWV4cGlyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBRENBO0VBQ0U7SUFDRSxTQUFBO0lBQ0EsbUJBQUE7RUNFRjs7RURBQTtJQUNFLFVBQUE7RUNHRjtBQUNGOztBRERBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLGlCQUFBO0VDR0Y7O0VEQUE7SUFDRSxVQUFBO0VDR0Y7QUFDRjs7QUREQTtFQUNFLGdDQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi93YXJyYW50eS1leHBpcnkvd2FycmFudHktZXhwaXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWZpZWxkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDlweDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDoxMHB4KSBhbmQobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgem9vbTogODAlO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvIDNweDtcclxuICB9XHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luOiAzJSBhdXRvIDVweDtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gIH1cclxuXHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogMzglO1xyXG4gIH1cclxufVxyXG4jc3VibWl0YnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICM2MjUyZWUgIWltcG9ydGFudDtcclxufVxyXG4iLCIuZm9ybS1maWVsZCB7XG4gIHBhZGRpbmctbGVmdDogOXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICAgIG1hcmdpbjogNSUgYXV0byAzcHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW46IDMlIGF1dG8gNXB4O1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDM4JTtcbiAgfVxufVxuI3N1Ym1pdGJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/warranty-expiry/warranty-expiry.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/delar-application/warranty-expiry/warranty-expiry.page.ts ***!
  \***************************************************************************/
/*! exports provided: WarrantyExpiryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarrantyExpiryPage", function() { return WarrantyExpiryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var WarrantyExpiryPage = /** @class */ (function () {
    function WarrantyExpiryPage(platform, formBuilder, ajaxService, modalController, alertController, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.ajaxService = ajaxService;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.hideSerialNo = false;
    }
    WarrantyExpiryPage.prototype.clear = function () {
        this.validityForm.reset();
        this.UpdateForm.reset();
    };
    WarrantyExpiryPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.validityForm.value.imeino.toString().length != 15) {
            this.commonService.showConfirm("Enter the 15 Digit Imei Number");
            this.hideSerialNo = false;
        }
        else if (this.validityForm.valid) {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
                "/global/getWarrantyandSimcardno?imeino=" +
                this.validityForm.value.imeino;
            this.ajaxService.ajaxGet(url).subscribe(function (res) {
                console.log(res);
                if (res.message != "invalid imei no") {
                    _this.hideSerialNo = true;
                    _this.simdetails = res;
                    _this.UpdateForm.patchValue({
                        dateofpurchase: _this.simdetails.dateofpurchase.trim(),
                        warrantyexpirydate: _this.simdetails.warrantyexpirydate.trim(),
                        simcardno1: _this.simdetails.simcardno1.trim(),
                        simcardno2: _this.simdetails.simcardno2.trim(),
                        devicemodel: _this.simdetails.device_model.trim(),
                        agency: _this.simdetails.agency.trim(),
                        currentagency: _this.simdetails.current_agency.trim(),
                        previousagency: _this.simdetails.previous_agency.trim(),
                    });
                }
                else {
                    _this.hideSerialNo = false;
                    _this.commonService.showConfirm(res.message);
                }
            });
        }
        else {
            this.commonService.showConfirm("Enter the Imei Number");
            this.clear();
        }
    };
    WarrantyExpiryPage.prototype.save = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: " Confirm",
                            backdropDismiss: false,
                            message: "Are you sure you want to Save?",
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                    handler: function (data) { },
                                },
                                {
                                    text: "Ok",
                                    handler: function (data) {
                                        _this.saveMethod();
                                    },
                                },
                            ],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WarrantyExpiryPage.prototype.saveMethod = function () {
        var _this = this;
        this.commonService.presentLoader();
        var data;
        if (this.UpdateForm.value.simcardno2 == null ||
            this.UpdateForm.value.simcardno2 == undefined) {
            this.UpdateForm.value.simcardno2 = "";
        }
        data = {
            imeino: this.validityForm.value.imeino.toString(),
            warrantyexpirydate: this.UpdateForm.value.warrantyexpirydate,
            simcardno1: this.UpdateForm.value.simcardno1.toString(),
            simcardno2: this.UpdateForm.value.simcardno2.toString(),
            dateofpurchase: this.UpdateForm.value.dateofpurchase,
            device_model: this.UpdateForm.value.devicemodel,
            agency: this.UpdateForm.value.agency == null || ""
                ? ""
                : this.UpdateForm.value.agency.toString(),
            current_agency: this.UpdateForm.value.currentagency == null || ""
                ? ""
                : this.UpdateForm.value.currentagency.toString(),
            previous_agency: this.UpdateForm.value.previousagency == null || ""
                ? ""
                : this.UpdateForm.value.previousagency.toString(),
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/global/saveWarrantyandSimcardno";
        this.ajaxService
            .ajaxPostWithString(url, JSON.stringify(data))
            .subscribe(function (res) {
            _this.commonService.dismissLoader();
            if (JSON.parse(res).message == "Sim Detail Updated Successfully") {
                _this.commonService.showConfirm("Sim Detail Updated Successfully");
                _this.clear();
            }
            else {
                _this.commonService.showConfirm("Please Contact Support Team");
            }
        });
    };
    WarrantyExpiryPage.prototype.deleteMethod = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.validityForm.value.imeino.toString().length != 15)) return [3 /*break*/, 1];
                        this.commonService.showConfirm("Enter the 15 Digit Imei Number");
                        return [3 /*break*/, 4];
                    case 1:
                        if (!this.validityForm.valid) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.alertController.create({
                                header: " Confirm",
                                backdropDismiss: false,
                                message: "Are you sure you want to Delete?",
                                buttons: [
                                    {
                                        text: "Cancel",
                                        role: "cancel",
                                        handler: function (data) { },
                                    },
                                    {
                                        text: "Ok",
                                        handler: function (data) {
                                            _this.delete();
                                        },
                                    },
                                ],
                            })];
                    case 2:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    WarrantyExpiryPage.prototype.delete = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
            "/global/deleteImeinoFromInventory?imeino=" +
            this.validityForm.value.imeino;
        this.ajaxService.ajaxDeleteWithString(url).subscribe(function (res) {
            if (res.message == "IMEI No Deleted Successfully") {
                _this.commonService.showConfirm(res.message);
                _this.clear();
            }
            else {
                _this.commonService.showConfirm(res.message);
                _this.clear();
            }
        });
    };
    WarrantyExpiryPage.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.validityForm = this.formBuilder.group({
            imeino: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.UpdateForm = this.formBuilder.group({
            dateofpurchase: [""],
            warrantyexpirydate: [""],
            simcardno1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            simcardno2: [""],
            devicemodel: [""],
            agency: [""],
            currentagency: [""],
            previousagency: [""],
        });
    };
    WarrantyExpiryPage.prototype.ionViewWillEnter = function () {
        this.validityForm.reset();
        this.UpdateForm.reset();
    };
    WarrantyExpiryPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
    ]; };
    WarrantyExpiryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-warranty-expiry",
            template: __webpack_require__(/*! raw-loader!./warranty-expiry.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/warranty-expiry/warranty-expiry.page.html"),
            styles: [__webpack_require__(/*! ./warranty-expiry.page.scss */ "./src/app/delar-application/warranty-expiry/warranty-expiry.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], WarrantyExpiryPage);
    return WarrantyExpiryPage;
}());



/***/ })

}]);
//# sourceMappingURL=warranty-expiry-warranty-expiry-module-es5.js.map