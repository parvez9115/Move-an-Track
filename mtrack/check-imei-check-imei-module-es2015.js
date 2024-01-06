(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["check-imei-check-imei-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/check-imei/check-imei.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/check-imei/check-imei.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"dealerHeader\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-row>\r\n      <ion-title>Detach</ion-title>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-grid>\r\n    <div class=\"padding25px\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" id=\"radio-wrapper\">\r\n          <ion-radio-group\r\n            allow-empty-selection=\"false\"\r\n            name=\"radio-group\"\r\n            value=\"Imei Number\"\r\n            (ionChange)=\"getImeiMobileNumber($event)\"\r\n          >\r\n            <ion-col size=\"12\" *ngFor=\"let items of imeiMobileSearch\">\r\n              <ion-col size=\"4\">\r\n                <ion-radio id=\"radio-btn\" checked [value]=\"items\"></ion-radio>\r\n              </ion-col>\r\n              <ion-col size=\"8\">\r\n                <ion-label>{{items}}</ion-label>\r\n              </ion-col>\r\n            </ion-col>\r\n          </ion-radio-group>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <form [formGroup]=\"numberSearch\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" *ngIf=\"hide_mob\">\r\n            <ion-row class=\"paddingBottom10px\">\r\n              <ion-input\r\n                type=\"tel\"\r\n                [maxlength]=\"maxNum\"\r\n                class=\"imeibox\"\r\n                [placeholder]=\"holder\"\r\n                formControlName=\"commonNumber\"\r\n              ></ion-input>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"form-field\">\r\n          <ion-col size=\"12\" *ngIf=\"show_select\">\r\n            <!-- <ion-select formControlName=\"commonNumber\"  placeHolder = 'select company' style=\"background-color: #e8e8e8;\">\r\n              <ion-select-option  *ngFor=\"let comp_name of companyName\" [value]=\"comp_name\">\r\n                {{comp_name}}\r\n              </ion-select-option>\r\n            </ion-select> -->\r\n            <input\r\n              list=\"num\"\r\n              class=\"input col\"\r\n              formControlName=\"commonNumber\"\r\n              placeholder=\"Search Company\"\r\n              style=\"padding: 0px\"\r\n            />\r\n            <!-- <input class=\"input col\" type=\"number\" list=\"num\"  formControlName=\"imeiNo\" placeholder=\"Imei No\" /> -->\r\n            <datalist id=\"num\">\r\n              <option *ngFor=\"let numbers of companyName\">{{numbers}}</option>\r\n            </datalist>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col style=\"text-align: center; margin: 10px\">\r\n            <!-- <ion-button class=\"buttonWidth\" (click)='submit()' [disabled]=\"!numberSearch.valid\">Submit</ion-button> -->\r\n            <ion-button\r\n              class=\"buttonWidth\"\r\n              (click)=\"submit()\"\r\n              [disabled]=\"!numberSearch.valid\"\r\n              >Submit</ion-button\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n    </div>\r\n    <ion-row *ngIf=\"reportData\">\r\n      <ion-col\r\n        size=\"12\"\r\n        size-sm=\"12\"\r\n        size-lg=\"4\"\r\n        size-md=\"6\"\r\n        *ngFor=\"let ImeiDetail of reportData\"\r\n        style=\"margin: auto\"\r\n      >\r\n        <ion-card\r\n          style=\"border-left: 4px solid #7c68f8; margin: 0px\"\r\n          (click)='delete_imei(ImeiDetail,\"imei\")'\r\n        >\r\n          <ion-card-content>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-row>\r\n                  <ion-col size=\"8\" class=\"ImeiStyle\">\r\n                    {{ImeiDetail.plateNo}}\r\n                  </ion-col>\r\n                  <ion-col size=\"4\">\r\n                    <ion-row\r\n                      style=\"\r\n                        font-size: 11px;\r\n                        margin: 0px 0px 5px 0px;\r\n                        justify-content: center;\r\n                        font-weight: 600;\r\n                      \"\r\n                      >Warranty Expiry</ion-row\r\n                    >\r\n                    <ion-row class=\"ImeiStyle Expirystyle\"\r\n                      >{{ImeiDetail.warrantyExpiryDate}}</ion-row\r\n                    >\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"12\" class=\"ImeiNo\">\r\n                    {{ImeiDetail.imei}}\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"12\" class=\"ImeiStyle\">\r\n                    <ion-icon class=\"iconColor\" name=\"call\"></ion-icon>\r\n                    {{ImeiDetail.simcardNo}}\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"12\" class=\"ImeiStyle\">\r\n                    <ion-icon class=\"iconColor\" name=\"business\"></ion-icon>\r\n                    {{ImeiDetail.companyId}} ({{ImeiDetail.currentAgency}})\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row class=\"timestampRow\">\r\n              <ion-col size=\"12\" class=\"ImeiStyle timestampCol\">\r\n                <ion-label\r\n                  style=\"\r\n                    font-size: 11px;\r\n                    margin: 0px 0px 5px 0px;\r\n                    justify-content: center;\r\n                    font-weight: 600;\r\n                    text-transform: initial;\r\n                  \"\r\n                  >Date of Purchase:</ion-label\r\n                >\r\n                {{ImeiDetail.dop}}\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"mobileNumber\">\r\n      <ion-col\r\n        size=\"12\"\r\n        size-sm=\"12\"\r\n        size-lg=\"4\"\r\n        size-md=\"6\"\r\n        style=\"margin: auto\"\r\n      >\r\n        <ion-card style=\"border-left: 4px solid #7c68f8; margin: 0px\">\r\n          <ion-card-content>\r\n            <ion-row>\r\n              <ion-col size=\"9\">\r\n                <ion-row class=\"companyName uppercase\">\r\n                  {{mobileNumber.companyName}}\r\n                </ion-row>\r\n                <ion-row class=\"centerAlign\">\r\n                  <ion-icon class=\"iconColor\" name=\"call\"></ion-icon>\r\n                  <label> {{mobileNumber.contact}}</label>\r\n                </ion-row>\r\n                <ion-row class=\"centerAlign\">\r\n                  <ion-icon class=\"iconColor\" name=\"mail\"></ion-icon>\r\n                  <label> {{mobileNumber.emailId}}</label>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"3\" class=\"centerColNum\">\r\n                <ion-label> {{mobileNumber.vehicle_Count}} </ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"showCompany\">\r\n      <ion-col\r\n        size=\"12\"\r\n        size-sm=\"12\"\r\n        size-lg=\"4\"\r\n        size-md=\"6\"\r\n        style=\"margin: auto\"\r\n        *ngFor=\"let showList of showList\"\r\n      >\r\n        <ion-card\r\n          style=\"border-left: 4px solid #7c68f8; margin: 0px\"\r\n          (click)='delete_imei(showList,\"comp\")'\r\n        >\r\n          <ion-card-content>\r\n            <ion-row>\r\n              <ion-col size=\"9\">\r\n                <ion-row class=\"companyName uppercase\">\r\n                  {{showList.companyName}}\r\n                </ion-row>\r\n                <ion-row class=\"centerAlign\">\r\n                  <ion-icon class=\"iconColor\" name=\"call\"></ion-icon>\r\n                  <label> {{showList.contact}}</label>\r\n                </ion-row>\r\n                <ion-row class=\"centerAlign\">\r\n                  <ion-icon class=\"iconColor\" name=\"mail\"></ion-icon>\r\n                  <label> {{showList.emailId}}</label>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"3\" class=\"centerColNum\">\r\n                <ion-label> {{showList.vehicle_Count}} </ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/delar-application/check-imei/check-imei.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/delar-application/check-imei/check-imei.module.ts ***!
  \*******************************************************************/
/*! exports provided: CheckImeiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckImeiPageModule", function() { return CheckImeiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _check_imei_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./check-imei.page */ "./src/app/delar-application/check-imei/check-imei.page.ts");







const routes = [
    {
        path: '',
        component: _check_imei_page__WEBPACK_IMPORTED_MODULE_6__["CheckImeiPage"]
    }
];
let CheckImeiPageModule = class CheckImeiPageModule {
};
CheckImeiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_check_imei_page__WEBPACK_IMPORTED_MODULE_6__["CheckImeiPage"]]
    })
], CheckImeiPageModule);



/***/ }),

/***/ "./src/app/delar-application/check-imei/check-imei.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/delar-application/check-imei/check-imei.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".iconSize25px {\n  font-size: 25px;\n}\n\n.image-size {\n  height: 35px;\n  width: 35px;\n  cursor: pointer;\n  display: inline-block;\n  margin: 5px;\n}\n\n.download-wrapper {\n  padding: 6px;\n  background: #eaeaea;\n}\n\n.download-wrapper:hover {\n  background-color: #f6f6f6;\n}\n\n.subscription-title {\n  font-size: 20px;\n}\n\n.reportInfo {\n  color: #000000;\n  font-size: 14px;\n  font-family: sans-serif;\n}\n\n.paddingBottom10px {\n  padding-bottom: 4px;\n}\n\n.padding25px {\n  padding: 20px;\n}\n\n.buttonWidth {\n  width: 33%;\n  height: 30px;\n  --ion-color-primary: #7c68f8;\n}\n\n.imeibox {\n  background-color: #e8e8e8;\n  color: #676464;\n  width: 100%;\n}\n\n.padding0px {\n  padding: 0px;\n}\n\n.ImeiStyle {\n  font-family: sans-serif;\n  font-size: 11px;\n  text-transform: uppercase;\n  padding: 0px;\n  align-self: center;\n}\n\n.ImeiNo {\n  font-family: sans-serif;\n  font-size: x-large;\n  font-weight: bold;\n  color: #3c3c3c;\n  padding: 0px;\n}\n\n.Expirystyle {\n  padding: 3px;\n  background: #dadada;\n  color: #3c3c3c;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border-radius: 29px;\n}\n\n.timestampRow {\n  text-align: center;\n  border-top: 1px solid #dadada;\n}\n\n.timestampCol {\n  padding: 6px;\n}\n\n.textCenter {\n  text-align: center;\n}\n\n.iconColor {\n  color: #7c68f8;\n  padding-right: 7px;\n}\n\n#radio-wrapper {\n  padding: 10px;\n  text-align: center;\n}\n\n#radio-btn {\n  vertical-align: middle;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  text-align: center;\n}\n\n.col {\n  margin-top: 12px;\n  padding-left: 15px;\n  width: 100%;\n}\n\n.form-field {\n  margin: -16px 5px 0px;\n  border-radius: 7px;\n}\n\n.companyName {\n  color: #545454;\n  font-family: sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.uppercase {\n  text-transform: uppercase;\n}\n\n.iconColor {\n  color: #7c68f8;\n  padding-right: 7px;\n}\n\n.centerAlign {\n  -webkit-box-align: center;\n          align-items: center;\n  font-family: sans-serif;\n  font-size: small;\n}\n\n.centerColNum {\n  align-self: center;\n  font-size: x-large;\n  text-align: center;\n  border: 2px solid #7c68f8;\n  border-radius: 100px;\n  background: #f1f1f1;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vY2hlY2staW1laS9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxjaGVjay1pbWVpXFxjaGVjay1pbWVpLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vY2hlY2staW1laS9jaGVjay1pbWVpLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBRUEsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSx5QkFBQTtBQ0dGOztBRERBO0VBQ0UsZUFBQTtBQ0lGOztBREZBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0tGOztBREZBO0VBQ0UsbUJBQUE7QUNLRjs7QURGQTtFQUNFLGFBQUE7QUNLRjs7QURGQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUNLRjs7QURGQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNLRjs7QURIQTtFQUNFLFlBQUE7QUNNRjs7QURIQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTUY7O0FESEE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ01GOztBREhBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNELHdCQUFBO1VBQUEsdUJBQUE7RUFDQyxtQkFBQTtBQ01GOztBREhBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtBQ01GOztBREhBO0VBQ0UsWUFBQTtBQ01GOztBREhBO0VBQ0Usa0JBQUE7QUNNRjs7QURIQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ01GOztBREhBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDTUY7O0FESkE7RUFDRSxzQkFBQTtBQ09GOztBREpBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNPRjs7QURKQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDT0Y7O0FESEE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDTUY7O0FEQUE7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QURBQTtFQUNFLHlCQUFBO0FDR0Y7O0FEREE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QUREQTtFQUNFLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDSUY7O0FERkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9jaGVjay1pbWVpL2NoZWNrLWltZWkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25TaXplMjVweCB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi5pbWFnZS1zaXplIHtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgd2lkdGg6IDM1cHg7XHJcblxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLmRvd25sb2FkLXdyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xyXG59XHJcbi5kb3dubG9hZC13cmFwcGVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG59XHJcbi5zdWJzY3JpcHRpb24tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ucmVwb3J0SW5mbyB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ucGFkZGluZ0JvdHRvbTEwcHgge1xyXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nMjVweCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmJ1dHRvbldpZHRoIHtcclxuICB3aWR0aDogMzMlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjN2M2OGY4O1xyXG59XHJcblxyXG4uaW1laWJveCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcclxuICBjb2xvcjogIzY3NjQ2NDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ucGFkZGluZzBweCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uSW1laVN0eWxlIHtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uSW1laU5vIHtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMzYzNjM2M7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uRXhwaXJ5c3R5bGUge1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBiYWNrZ3JvdW5kOiAjZGFkYWRhO1xyXG4gIGNvbG9yOiAjM2MzYzNjO1xyXG4ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjlweDtcclxufVxyXG5cclxuLnRpbWVzdGFtcFJvdyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGFkYWRhO1xyXG59XHJcblxyXG4udGltZXN0YW1wQ29sIHtcclxuICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuXHJcbi50ZXh0Q2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pY29uQ29sb3Ige1xyXG4gIGNvbG9yOiAjN2M2OGY4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcclxufVxyXG5cclxuI3JhZGlvLXdyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNyYWRpby1idG4ge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5pbnB1dHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbn1cclxuLmNvbHtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5mb3JtLWZpZWxke1xyXG4gIG1hcmdpbjogLTE2cHggNXB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgLy8gZGlzcGxheTogZmxleDtcclxuICAvLyBwbGFjZS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi8vTW9iaWxlIGNhcmRcclxuLmNvbXBhbnlOYW1lIHtcclxuICBjb2xvcjogIzU0NTQ1NDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi51cHBlcmNhc2Uge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmljb25Db2xvciB7XHJcbiAgY29sb3I6ICM3YzY4Zjg7XHJcbiAgcGFkZGluZy1yaWdodDogN3B4O1xyXG59XHJcblxyXG4uY2VudGVyQWxpZ24ge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG4uY2VudGVyQ29sTnVte1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM3YzY4Zjg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn0iLCIuaWNvblNpemUyNXB4IHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaW1hZ2Utc2l6ZSB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDVweDtcbn1cblxuLmRvd25sb2FkLXdyYXBwZXIge1xuICBwYWRkaW5nOiA2cHg7XG4gIGJhY2tncm91bmQ6ICNlYWVhZWE7XG59XG5cbi5kb3dubG9hZC13cmFwcGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbn1cblxuLnN1YnNjcmlwdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnJlcG9ydEluZm8ge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLnBhZGRpbmdCb3R0b20xMHB4IHtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cblxuLnBhZGRpbmcyNXB4IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmJ1dHRvbldpZHRoIHtcbiAgd2lkdGg6IDMzJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjN2M2OGY4O1xufVxuXG4uaW1laWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGNvbG9yOiAjNjc2NDY0O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBhZGRpbmcwcHgge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5JbWVpU3R5bGUge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLkltZWlObyB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzNjM2MzYztcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uRXhwaXJ5c3R5bGUge1xuICBwYWRkaW5nOiAzcHg7XG4gIGJhY2tncm91bmQ6ICNkYWRhZGE7XG4gIGNvbG9yOiAjM2MzYzNjO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjlweDtcbn1cblxuLnRpbWVzdGFtcFJvdyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkYWRhZGE7XG59XG5cbi50aW1lc3RhbXBDb2wge1xuICBwYWRkaW5nOiA2cHg7XG59XG5cbi50ZXh0Q2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbkNvbG9yIHtcbiAgY29sb3I6ICM3YzY4Zjg7XG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcbn1cblxuI3JhZGlvLXdyYXBwZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNyYWRpby1idG4ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtMTZweCA1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5jb21wYW55TmFtZSB7XG4gIGNvbG9yOiAjNTQ1NDU0O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnVwcGVyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5pY29uQ29sb3Ige1xuICBjb2xvcjogIzdjNjhmODtcbiAgcGFkZGluZy1yaWdodDogN3B4O1xufVxuXG4uY2VudGVyQWxpZ24ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLmNlbnRlckNvbE51bSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM3YzY4Zjg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBjb2xvcjogYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/check-imei/check-imei.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/delar-application/check-imei/check-imei.page.ts ***!
  \*****************************************************************/
/*! exports provided: CheckImeiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckImeiPage", function() { return CheckImeiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let CheckImeiPage = class CheckImeiPage {
    constructor(alertController, commonService, ajaxService, location, platform, formBuilder) {
        this.alertController = alertController;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.location = location;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.imeiMobileSearch = ["Imei Number", "Mobile Number", "Company"];
        this.selectedComp = "";
        this.holder = "Enter the Imei Number ";
        this.maxNum = 15;
        this.disabled = true;
        this.companyName = [];
        this.hide_mob = true;
        this.show_select = false;
        this.showCompany = false;
        this.displayCount = 30;
        this.currentPage = 1;
    }
    closePage() {
        this.location.back();
    }
    delete_imei(ImeiDetail, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Delete vehicle",
                backdropDismiss: false,
                inputs: [
                    {
                        name: "Password",
                        type: "text",
                        placeholder: "Enter dealer password",
                    },
                ],
                message: "vehicle will be deleted",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: (data) => { },
                    },
                    {
                        text: "ok",
                        handler: (data) => {
                            if (data.Password.toLowerCase() == localStorage.password.toLowerCase()) {
                                this.commonService.presentLoader();
                                if (type == "imei") {
                                    const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
                                        "/global/delete/imei?imeiNo=" +
                                        ImeiDetail.imei;
                                    this.ajaxService.ajaxDeleteWithString(url).subscribe((res) => {
                                        console.log(res);
                                        if (res.message == "success") {
                                            this.reportData = "";
                                            this.commonService.presentToast("Successfully deleted");
                                            this.commonService.dismissLoader();
                                        }
                                        else {
                                            this.commonService.presentToast("contact support team");
                                            this.commonService.dismissLoader();
                                        }
                                    });
                                }
                                else if (type == "comp") {
                                    const url2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
                                        "/global/delete/company?companyId=" +
                                        ImeiDetail.companyId;
                                    this.ajaxService.ajaxDeleteWithString(url2).subscribe((res) => {
                                        if (res.error.text == "deleted") {
                                            this.getCompanyID();
                                            this.showCompany = false;
                                            this.commonService.presentToast("Deleted Successfully");
                                            this.commonService.dismissLoader();
                                        }
                                        else {
                                            this.commonService.presentToast("Contact support team");
                                            this.commonService.dismissLoader();
                                        }
                                        this.numberSearch.reset();
                                    });
                                }
                            }
                            else {
                                this.commonService.presentToast("dealer password is wrong");
                            }
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    submit() {
        if (this.numberSearch.value.commonNumber.length == 15) {
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
                "/global/searchimei?imeiNo=" +
                this.numberSearch.value.commonNumber;
            this.ajaxService.ajaxGet(url).subscribe((res) => {
                this.reportData = res;
                this.numberSearch.reset();
                if (res.length == 0) {
                    this.commonService.presentToast("Imei not available");
                }
            });
        }
        else if (this.numberSearch.value.commonNumber.length == 10 &&
            this.type == "mobile") {
            this.commonService.presentLoader();
            const url2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
                "/global/searchcontact?contactNo=" +
                this.numberSearch.value.commonNumber;
            this.ajaxService.ajaxGet(url2).subscribe((res) => {
                if (res.contact == "-" || Object.keys(res).length == 0) {
                    this.commonService.presentToast("Mobile number not available");
                    this.mobileNumber = "";
                    this.commonService.dismissLoader();
                }
                else {
                    this.mobileNumber = res;
                    this.commonService.dismissLoader();
                }
                this.numberSearch.reset();
            });
        }
        else if (this.show_select) {
            const url2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
                "/global/searchCompany?companyId=" +
                this.numberSearch.value.commonNumber;
            this.ajaxService.ajaxGet(url2).subscribe((res) => {
                if (res) {
                    this.showList = res;
                    this.showCompany = true;
                }
                else {
                    this.commonService.presentToast("Company not available");
                }
                this.numberSearch.reset();
            });
        }
        else {
            this.commonService.presentToast("please check the number");
        }
    }
    deleteCompany(comp) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Delete company",
                backdropDismiss: false,
                inputs: [
                    {
                        name: "Password",
                        type: "text",
                        placeholder: "Enter dealer password",
                    },
                ],
                message: "company will be deleted",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: (data) => { },
                    },
                    {
                        text: "ok",
                        handler: (data) => {
                            if (data.Password.toLowerCase() == localStorage.password.toLowerCase()) {
                                const url2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
                                    "/global/delete/company?companyId=" +
                                    comp.companyId;
                                this.ajaxService.ajaxDeleteWithString(url2).subscribe((res) => {
                                    if (res.error.text == "deleted") {
                                        this.getCompanyID();
                                        this.showCompany = false;
                                        this.commonService.presentToast("Deleted Successfully");
                                    }
                                    else {
                                        this.commonService.presentToast("Contact support team");
                                    }
                                    this.numberSearch.reset();
                                });
                            }
                            else {
                                this.commonService.presentToast("dealer password is wrong");
                            }
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    doInfinite(event) {
        //console.log("event trigger")
        setTimeout(() => {
            //console.log(this.commonData)
            this.displayData.push(...this.commonData.slice(this.currentPage * this.displayCount, (this.currentPage + 1) * this.displayCount));
            this.currentPage++;
            event.target.complete();
            if (this.displayData.length == this.commonData.length) {
                event.target.disabled = true;
            }
            //console.log("DISPLAY DATA----------------------\n", this.displayData)
        }, 500);
    }
    setDisplayData() {
        if (this.commonData.length > this.displayCount) {
            this.displayData = this.commonData.slice(0, this.displayCount);
            //console.log();
        }
        else {
            this.displayData = this.commonData;
        }
    }
    getCompanyID() {
        this.commonService.presentLoader();
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
            "/global/getdealercompanylist?suffix=" +
            localStorage.getItem("companySuffix");
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.commonData = res;
            this.companyName = res;
            this.commonService.dismissLoader();
            this.setDisplayData();
        });
    }
    getImeiMobileNumber(data) {
        this.mobileNumber = false;
        this.showCompany = false;
        this.reportData = "";
        this.hide_mob = true;
        this.show_select = false;
        this.numberSearch.reset();
        if (data.target.value == "Imei Number") {
            this.holder = "Enter the Imei Number ";
            this.maxNum = 15;
            this.mobileNumber = "";
        }
        else if (data.target.value == "Mobile Number") {
            this.type = "mobile";
            this.holder = "Enter the Mobile Number ";
            this.maxNum = 10;
            this.reportData = "";
        }
        else {
            this.type = "";
            this.maxNum = 0;
            this.hide_mob = false;
            this.show_select = true;
        }
    }
    ionViewWillEnter() {
        this.mobileNumber = "";
        this.reportData = "";
    }
    ngOnInit() {
        this.getCompanyID();
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.numberSearch = this.formBuilder.group({
            commonNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
    }
};
CheckImeiPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
];
CheckImeiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-check-imei",
        template: __webpack_require__(/*! raw-loader!./check-imei.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/check-imei/check-imei.page.html"),
        styles: [__webpack_require__(/*! ./check-imei.page.scss */ "./src/app/delar-application/check-imei/check-imei.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
], CheckImeiPage);



/***/ })

}]);
//# sourceMappingURL=check-imei-check-imei-module-es2015.js.map