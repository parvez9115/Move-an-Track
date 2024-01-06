(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~renewal-renewal-module~sales-report-sales-report-module~subscription-subscription-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/subscription/renewal/renewal.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/subscription/renewal/renewal.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content >\r\n  <ion-row>\r\n    <ion-col size=\"2\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"getBack()\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"8\" style=\"font-size: 20px;background-color:#7c68f8;color:white\"> Subscription renewal</ion-col>\r\n  </ion-row>\r\n  <ion-grid>\r\n    <form class='formPadding' [formGroup]=\"subscription\">\r\n<ion-row>\r\n  <ion-col  class=\"wrapper-container\">\r\n   <ion-item>\r\n      <ion-icon name=\"phone-portrait\" class=\"renewal-icon\" slot=\"start\" ></ion-icon>\r\n      <ion-input formControlName=\"imeiNo\" type=\"number\" placeholder=\"IMEI No\" readonly></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"time\" class=\"renewal-icon\" slot=\"start\"></ion-icon>\r\n      <ion-input  id=\"today\" formControlName=\"todayDate\"   [type]=\"typeSetter\" (click)=\"focusType()\" ></ion-input>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col size=\"6\"  style=\"text-align: center;margin: auto;\">\r\n        <ion-button shape=\"round\" (click)=\"sendBtn()\">Submit</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-col>\r\n</ion-row>\r\n</form>\r\n\r\n\r\n  <!-- <ion-row>\r\n    <ion-col  class=\"wrapper-container\">\r\n     <ion-item>\r\n        <ion-icon name=\"phone-portrait\" class=\"renewal-icon\" slot=\"start\" ></ion-icon>\r\n        <ion-input  type=\"number\" placeholder=\"IMEI No\" ></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-icon name=\"time\" class=\"renewal-icon\" slot=\"start\"></ion-icon>\r\n        <ion-input  id=\"today\" type=\"date\"></ion-input>\r\n      </ion-item>\r\n      <ion-row>\r\n        <ion-col size=\"6\"  style=\"text-align: center;margin: auto;\">\r\n          <ion-button shape=\"round\" (click)=\"sendBtn()\">Submit</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row> -->\r\n\r\n</ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/delar-application/subscription/renewal/renewal.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/delar-application/subscription/renewal/renewal.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper-container {\n  border: 1px solid #f6f6f6;\n}\n\nion-item {\n  border: 1px solid #eaf5f4;\n  margin: 5px 0px;\n  border-radius: 5px;\n}\n\n.btn {\n  --background:#7c68f8;\n  width: 50%;\n}\n\nion-input {\n  --placeholder-color:darkgray;\n  color: gray;\n}\n\n.renewal-icon {\n  color: #7c68f8;\n  border-right: 1px solid #f6f6f6;\n  padding-right: 5px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 766px) {\n  .wrapper-container {\n    padding: 1em 5px;\n  }\n}\n\n@media only screen and (min-width: 767px) and (max-width: 1010px) {\n  .wrapper-container {\n    padding: 1em;\n  }\n}\n\n@media only screen and (min-width: 1011px) {\n  .wrapper-container {\n    padding: 2em 1em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc3Vic2NyaXB0aW9uL3JlbmV3YWwvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcc3Vic2NyaXB0aW9uXFxyZW5ld2FsXFxyZW5ld2FsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc3Vic2NyaXB0aW9uL3JlbmV3YWwvcmVuZXdhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNDLG9CQUFBO0VBQ0MsVUFBQTtBQ0VGOztBREFBO0VBQ0ksNEJBQUE7RUFDQSxXQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQ0lKOztBRERBO0VBQ0k7SUFDQyxnQkFBQTtFQ0lIO0FBQ0Y7O0FEREE7RUFDSTtJQUNDLFlBQUE7RUNHSDtBQUNGOztBREFBO0VBQ0k7SUFDQyxnQkFBQTtFQ0VIO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9zdWJzY3JpcHRpb24vcmVuZXdhbC9yZW5ld2FsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyLWNvbnRhaW5lcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgICAvLyBwYWRkaW5nOjNlbSA1ZW07XHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFmNWY0O1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5idG57XHJcbiAtLWJhY2tncm91bmQ6IzdjNjhmODtcclxuICB3aWR0aDo1MCU7XHJcbiAgfVxyXG5pb24taW5wdXR7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOmRhcmtncmF5O1xyXG4gICAgY29sb3I6Z3JheTtcclxufVxyXG4ucmVuZXdhbC1pY29ue1xyXG4gICAgY29sb3I6IzdjNjhmODtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjMyMHB4KWFuZChtYXgtd2lkdGg6NzY2cHgpe1xyXG4gICAgLndyYXBwZXItY29udGFpbmVye1xyXG4gICAgIHBhZGRpbmc6MWVtIDVweDtcclxuICAgIH0gXHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjc2N3B4KWFuZChtYXgtd2lkdGg6MTAxMHB4KXtcclxuICAgIC53cmFwcGVyLWNvbnRhaW5lcntcclxuICAgICBwYWRkaW5nOjFlbSA7XHJcbiAgICB9IFxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDoxMDExcHgpe1xyXG4gICAgLndyYXBwZXItY29udGFpbmVye1xyXG4gICAgIHBhZGRpbmc6MmVtIDFlbTtcclxuICAgIH0gXHJcblxyXG59IiwiLndyYXBwZXItY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y2ZjZmNjtcbn1cblxuaW9uLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWFmNWY0O1xuICBtYXJnaW46IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJ0biB7XG4gIC0tYmFja2dyb3VuZDojN2M2OGY4O1xuICB3aWR0aDogNTAlO1xufVxuXG5pb24taW5wdXQge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOmRhcmtncmF5O1xuICBjb2xvcjogZ3JheTtcbn1cblxuLnJlbmV3YWwtaWNvbiB7XG4gIGNvbG9yOiAjN2M2OGY4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjZmNmY2O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjZweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFlbSA1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIGFuZCAobWF4LXdpZHRoOiAxMDEwcHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAxMXB4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMmVtIDFlbTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/subscription/renewal/renewal.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/delar-application/subscription/renewal/renewal.page.ts ***!
  \************************************************************************/
/*! exports provided: RenewalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewalPage", function() { return RenewalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var RenewalPage = /** @class */ (function () {
    function RenewalPage(modalController, alertController, formBuilder, commonService, ajaxService) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.typeSetter = "text";
    }
    RenewalPage.prototype.getBack = function () {
        this.modalController.dismiss();
    };
    RenewalPage.prototype.focusType = function () {
        this.typeSetter = "Date";
    };
    RenewalPage.prototype.sendBtn = function () {
        var _this = this;
        console.log(this.subscription);
        if (this.subscription.status == "VALID") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + '/global/updateExpirydate';
            var data = {
                imeiNo: this.subscription.value.imeiNo,
                warrantyExpiryDate: this.subscription.value.todayDate
            };
            this.ajaxService.ajaxPostMethod(url, data).subscribe(function (res) {
                console.log(res);
                var respData = JSON.parse(res);
                if (respData.message == "Success") {
                    _this.modalController.dismiss();
                    _this.commonService.presentToast('Successfully Updated');
                }
                else {
                    _this.commonService.presentToast('Please tryagain');
                }
            });
        }
        else {
            this.commonService.presentToast('Please complete the form');
            console.log('Please complete the form');
        }
    };
    RenewalPage.prototype.subscriptionAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modalController.dismiss();
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Are you sure?',
                                backdropDismiss: false,
                                message: "You want to renew your subscription!",
                                buttons: [{
                                        text: 'No',
                                        role: 'cancel',
                                        handler: function (data) {
                                            localStorage.setItem("exitPopup", "false");
                                        },
                                    },
                                    {
                                        text: 'Yes',
                                    }]
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
    RenewalPage.prototype.ngOnInit = function () {
        this.field = document.querySelector('#today');
        this.date = new Date();
        // Set the date
        this.field.value = (this.date.getFullYear() + 1).toString() + '-' + (this.date.getMonth() + 1).toString().padStart(2, 0) +
            '-' + this.date.getDate().toString().padStart(2, 0);
        this.subscription = this.formBuilder.group({
            imeiNo: [this.value, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            todayDate: [this.field.value, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    RenewalPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RenewalPage.prototype, "value", void 0);
    RenewalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-renewal',
            template: __webpack_require__(/*! raw-loader!./renewal.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/subscription/renewal/renewal.page.html"),
            styles: [__webpack_require__(/*! ./renewal.page.scss */ "./src/app/delar-application/subscription/renewal/renewal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"]])
    ], RenewalPage);
    return RenewalPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~renewal-renewal-module~sales-report-sales-report-module~subscription-subscription-module-es5.js.map