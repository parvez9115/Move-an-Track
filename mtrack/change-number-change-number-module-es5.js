(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-number-change-number-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/change-number/change-number.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/change-number/change-number.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar class=\"appHeaderColor\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n        <ion-title style=\"text-align: center;\">Change Number</ion-title>\r\n        /\r\n      </ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n<ion-row >\r\n  <ion-header>\r\n      <ion-toolbar class=\"header-background-color\">\r\n          <ion-buttons slot=\"start\">\r\n              <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n          <ion-title>\r\n              <ion-title >Change Number</ion-title>\r\n          </ion-title>\r\n          <!-- <ion-button slot=\"secondary\" color=\"dark\" size=\"small\" (click)=\"openModalAddAsset()\">+ Add</ion-button> -->\r\n      </ion-toolbar>\r\n  </ion-header>\r\n</ion-row>\r\n<ion-content padding>\r\n  <ion-grid>\r\n  <ion-row style=\"text-align: center;\">\r\n\t\t<ion-col size=\"5\" style=\"text-align: center;\">\r\n\t\t\t<ion-icon style=\"font-size: 75px; color: #f6b221;\" name=\"phone-portrait\"></ion-icon> \r\n\t\t\t</ion-col>\r\n\t\t\t<ion-icon style=\"font-size: 60px;align-self: center; color: #57534d;\" name=\"return-right\" ></ion-icon>\r\n\t\t<ion-col size=\"4\" style=\"text-align: center;\">\r\n      \r\n\t\t\t<ion-icon style=\"font-size: 75px; color: #f6b221;\" name=\"phone-portrait\"></ion-icon>\r\n      </ion-col>\r\n\t</ion-row>\r\n\t<!-- <p style=\"margin-left: 5%;\">{{'Changing your phone number will migrate your account into new number.' | translate}}</p> -->\r\n\t<!-- <p style=\"margin-left: 5%;\">{{'Before proceeding, please confirm that your new number is active.' | translate}}</p> -->\r\n\t<p style=\"margin-left: 5%;\">Changing your phone number will migrate your account into new number.</p>\r\n\t<p style=\"margin-left: 5%;\">Before proceeding, please confirm that your new number is active.</p>\r\n\r\n\t<label class=\"item item-input\">\r\n\t\t<!-- <p>{{'Please enter your old number' | translate}}</p> -->\r\n    <p>Please enter your old number</p>\r\n\t</label> <label class=\"item item-input\"> \r\n\t\t<ion-input type=\"number\"\r\n\t\tplaceholder=\"Old Number\" id=\"oldCompanyNo\"\r\n\t\tstyle=\"border-bottom: 1px solid black;\" #oldCompanyNo>\r\n\t</ion-input>\r\n\t</label> <label class=\"item item-input\"> \r\n\t\t<!-- <p>{{'Please enter your new number' | translate}}</p> -->\r\n    <p>Please enter your new number</p>\r\n\t</label> <label class=\"item item-input\"> <ion-input type=\"number\"\r\n\t\tplaceholder=\"New Number\" id=\"newCompanyNo\"\r\n\t\tstyle=\"border-bottom: 1px solid black;\" #newCompanyNo>\r\n\t</ion-input></label>\r\n\t<ion-button class=\"appBackground\" shape=\"full\" expand=\"block\"\r\n    (click)=\"changeNumber(oldCompanyNo,newCompanyNo)\" >Done\r\n  </ion-button>\r\n</ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/change-number/change-number.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/change-number/change-number.module.ts ***!
  \*******************************************************/
/*! exports provided: ChangeNumberPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeNumberPageModule", function() { return ChangeNumberPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _change_number_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-number.page */ "./src/app/change-number/change-number.page.ts");







var routes = [
    {
        path: '',
        component: _change_number_page__WEBPACK_IMPORTED_MODULE_6__["ChangeNumberPage"]
    }
];
var ChangeNumberPageModule = /** @class */ (function () {
    function ChangeNumberPageModule() {
    }
    ChangeNumberPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_change_number_page__WEBPACK_IMPORTED_MODULE_6__["ChangeNumberPage"]]
        })
    ], ChangeNumberPageModule);
    return ChangeNumberPageModule;
}());



/***/ }),

/***/ "./src/app/change-number/change-number.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/change-number/change-number.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-background-color {\n  --background: #F6b221;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLW51bWJlci9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGNoYW5nZS1udW1iZXJcXGNoYW5nZS1udW1iZXIucGFnZS5zY3NzIiwic3JjL2FwcC9jaGFuZ2UtbnVtYmVyL2NoYW5nZS1udW1iZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1udW1iZXIvY2hhbmdlLW51bWJlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJhY2tncm91bmQtY29sb3Ige1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRjZiMjIxO1xyXG59IiwiLmhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjZiMjIxO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/change-number/change-number.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/change-number/change-number.page.ts ***!
  \*****************************************************/
/*! exports provided: ChangeNumberPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeNumberPage", function() { return ChangeNumberPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ChangeNumberPage = /** @class */ (function () {
    function ChangeNumberPage(commonService, alertController, ajaxService, router) {
        this.commonService = commonService;
        this.alertController = alertController;
        this.ajaxService = ajaxService;
        this.router = router;
    }
    ChangeNumberPage.prototype.changeNumber = function (oldCompanyNo, newCompanyNo) {
        var companyId = localStorage.getItem('userName');
        var changedNumber = localStorage.getItem('changedNumber');
        var oldPhoneNo = oldCompanyNo.value;
        var newPhoneNo = newCompanyNo.value;
        if (oldPhoneNo === '' || oldPhoneNo === undefined) {
            this.commonService.presentAlert('Phone_Number', 'Please enter old phone number');
        }
        else if (newPhoneNo === '') {
            this.commonService.presentAlert('Phone_Number', 'Please enter new phone number');
        }
        else if (changedNumber !== null && changedNumber !== oldPhoneNo) {
            this.commonService.presentAlert('Phone_Number', 'Please enter valid old phone number');
        }
        else if (changedNumber == null && companyId !== oldPhoneNo) {
            this.commonService.presentAlert('Phone_Number', 'Please enter valid old phone number');
        }
        else if (newPhoneNo === oldPhoneNo) {
            this.commonService.presentAlert('Phone_Number', 'Old phone number should not be same as new phone number');
        }
        else {
            this.presentAlertConfirm({
                companyId: companyId,
                changedNo: newPhoneNo,
            });
        }
    };
    ChangeNumberPage.prototype.presentAlertConfirm = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Are you sure? you want to change your number?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.commonService.presentLoader();
                                        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + '/login/changeNo?corpId=' + data.companyId + '&contactNo=' + data.changedNo;
                                        _this.ajaxService.ajaxGetWithString(url)
                                            .subscribe(function (res) {
                                            _this.commonService.dismissLoader();
                                            if (res === 'Updated Successfully') {
                                                localStorage.clear();
                                                //  this.authenticationService.logout();
                                                _this.router.navigateByUrl('tabs-login');
                                                _this.commonService.presentAlert('Success', 'Your Number is updated successfully and you can login with your new number.');
                                            }
                                            else if (res === 'Already Exist') {
                                                _this.commonService.presentAlert('Failure', 'It seems you have already used this number as a new number.');
                                            }
                                            else {
                                                _this.commonService.presentAlert('Error', 'Try again after sometime');
                                            }
                                        }, function (err) {
                                            _this.commonService.presentAlert('Error', 'Try again after sometime');
                                            _this.commonService.dismissLoader();
                                        });
                                    }
                                }
                            ]
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
    ChangeNumberPage.prototype.ngOnInit = function () {
    };
    ChangeNumberPage.ctorParameters = function () { return [
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    ChangeNumberPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-number',
            template: __webpack_require__(/*! raw-loader!./change-number.page.html */ "./node_modules/raw-loader/index.js!./src/app/change-number/change-number.page.html"),
            styles: [__webpack_require__(/*! ./change-number.page.scss */ "./src/app/change-number/change-number.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ChangeNumberPage);
    return ChangeNumberPage;
}());



/***/ })

}]);
//# sourceMappingURL=change-number-change-number-module-es5.js.map