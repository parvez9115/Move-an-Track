(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firmware-ais140-upload-firmware-ais140-upload-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/firmware-ais140-upload/firmware-ais140-upload.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/firmware-ais140-upload/firmware-ais140-upload.page.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-row class=\"toolbar\">\n      <ion-col size=\"8\">\n        <ion-title>Firmware AIS140 Upload</ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row\n    class=\"wrapper-container\"\n    style=\"\n      width: fit-content;\n      margin-top: 5%;\n      margin-left: 25%;\n      margin-right: 25%;\n    \"\n  >\n    <ion-col>\n      <form [formGroup]=\"firmware\">\n        <ion-row>\n          <ion-col style=\"border: 2px solid #777777; width: 50%\">\n            <ion-row\n              class=\"form-field\"\n              style=\"justify-content: center; margin-top: 5%; display: flex\"\n            >\n              <ion-col>\n                <ion-label class=\"label-head\">State :</ion-label>\n                <ionic-selectable\n                  class=\"input selectable-input\"\n                  formControlName=\"state\"\n                  placeholder=\"Select the State\"\n                  [items]=\"state\"\n                  [canSearch]=\"true\"\n                  [hasVirtualScroll]=\"true\"\n                >\n                </ionic-selectable>\n              </ion-col>\n\n              <ion-col>\n                <ion-label class=\"label-head\">Service Provider :</ion-label>\n                <ionic-selectable\n                  class=\"input selectable-input\"\n                  formControlName=\"serviceprovider\"\n                  placeholder=\"Select the Provider\"\n                  [items]=\"service\"\n                  [canSearch]=\"true\"\n                  [hasVirtualScroll]=\"true\"\n                  [disabledItems]=\"data\"\n                >\n                </ionic-selectable>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"form-field\" style=\"justify-content: center\">\n              <ion-col>\n                <ion-label class=\"label-head\">Back End Server :</ion-label>\n                <ionic-selectable\n                  class=\"input selectable-input\"\n                  formControlName=\"server\"\n                  placeholder=\"Select the Server\"\n                  [items]=\"backendserver\"\n                  [canSearch]=\"true\"\n                  [hasVirtualScroll]=\"true\"\n                  [disabledItems]=\"data\"\n                >\n                </ionic-selectable>\n              </ion-col>\n\n              <ion-col style=\"width: 30px\">\n                <ion-label class=\"label-head\">File Upload:</ion-label>\n                <input\n                  type=\"file\"\n                  formControlName=\"fileupload\"\n                  class=\"documents\"\n                  ng2FileSelect\n                  [uploader]=\"uploader\"\n                />\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"form-field\" style=\"justify-content: center\">\n              <ion-col style=\"display: grid\">\n                <ion-label class=\"label-head\" style=\"padding: 5px\"\n                  >Reason :</ion-label\n                >\n                <textarea\n                  class=\"reason\"\n                  type=\"text\"\n                  placeholder=\"Enter the Reason\"\n                  formControlName=\"reason\"\n                ></textarea>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col style=\"text-align: center\">\n                <ion-button\n                  class=\"submitbtn\"\n                  (click)=\"popup()\"\n                  [disabled]=\"!firmware.valid || button\"\n                  >Submit</ion-button\n                >\n                <ion-button class=\"submitbtn\" (click)=\"clear()\"\n                  >Clear</ion-button\n                >\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/firmware-ais140-upload/password-popup/password-popup.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/firmware-ais140-upload/password-popup/password-popup.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-row class=\"toolbar\">\n      <ion-col size=\"8\">\n        <ion-title>Password</ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"wrapper-container\">\n    <ion-col size=\"12\">\n      <form [formGroup]=\"passwordform\">\n        <ion-row class=\"content-style\">\n          <ion-col size=\"4\" class=\"col-content\">Password : </ion-col>\n          <ion-col size=\"7\">\n            <ion-input type=\"password\" class=\"input\" placeholder=\"Enter the Password\"\n              formControlName=\"password\"></ion-input>\n\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col style=\"text-align: center\">\n            <ion-button class=\"submitbtn\" (click)=\"submit()\"\n              [disabled]=\"!passwordform.valid || button\">Submit</ion-button>\n            <ion-button class=\"submitbtn\" (click)=\"cancelBtn()\">Cancel</ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/delar-application/firmware-ais140-upload/firmware-ais140-upload.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/delar-application/firmware-ais140-upload/firmware-ais140-upload.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: FirmwareAis140UploadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmwareAis140UploadPageModule", function() { return FirmwareAis140UploadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _firmware_ais140_upload_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./firmware-ais140-upload.page */ "./src/app/delar-application/firmware-ais140-upload/firmware-ais140-upload.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _password_popup_password_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./password-popup/password-popup.component */ "./src/app/delar-application/firmware-ais140-upload/password-popup/password-popup.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");











var routes = [
    {
        path: '',
        component: _firmware_ais140_upload_page__WEBPACK_IMPORTED_MODULE_6__["FirmwareAis140UploadPage"]
    },
    {
        path: 'password-popup',
        component: _password_popup_password_popup_component__WEBPACK_IMPORTED_MODULE_9__["PasswordPopupComponent"]
    }
];
var FirmwareAis140UploadPageModule = /** @class */ (function () {
    function FirmwareAis140UploadPageModule() {
    }
    FirmwareAis140UploadPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_firmware_ais140_upload_page__WEBPACK_IMPORTED_MODULE_6__["FirmwareAis140UploadPage"], _password_popup_password_popup_component__WEBPACK_IMPORTED_MODULE_9__["PasswordPopupComponent"]]
        })
    ], FirmwareAis140UploadPageModule);
    return FirmwareAis140UploadPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/firmware-ais140-upload/firmware-ais140-upload.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/delar-application/firmware-ais140-upload/firmware-ais140-upload.page.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.dealer-data {\n  font-size: 14px;\n}\n\n.documents {\n  padding-top: 10px;\n}\n\n.documents {\n  margin: 10px 10px 0px;\n  text-align: center;\n}\n\n.reason {\n  border: 2px solid #777777;\n  background: #e8e8e8;\n  height: 150px;\n  width: 510px;\n  border-radius: 7px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZmlybXdhcmUtYWlzMTQwLXVwbG9hZC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxmaXJtd2FyZS1haXMxNDAtdXBsb2FkXFxmaXJtd2FyZS1haXMxNDAtdXBsb2FkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZmlybXdhcmUtYWlzMTQwLXVwbG9hZC9maXJtd2FyZS1haXMxNDAtdXBsb2FkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxnQkFBQTtFQ0NGOztFREVBO0lBQ0UsVUFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLFNBQUE7RUNBRjs7RURHQTtJQUNFLFVBQUE7RUNBRjtBQUNGOztBREdBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUNERjtBQUNGOztBRElBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUNGRjtBQUNGOztBREtBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7QUNIRjs7QURNQTtFQUNFLGlCQUFBO0FDSEY7O0FETUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FES0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2Zpcm13YXJlLWFpczE0MC11cGxvYWQvZmlybXdhcmUtYWlzMTQwLXVwbG9hZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIG1hcmdpbjogN3B4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnN1Ym1pdEJ0biB7XG4gIG1hcmdpbjogMHB4IDE0cHggMHB4IDBweDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogIzdjNjhmODtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjN2M2OGY4O1xuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcbn1cblxuLnN1Ym1pdGJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cblxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweCkgYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MTAyNHB4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiA4cHggMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cblxuLmxhYmVsLWhlYWQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xufVxuXG4uZGVhbGVyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZGVhbGVyLWRhdGEge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kb2N1bWVudHMge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmRvY3VtZW50cyB7XG4gIG1hcmdpbjogMTBweCAxMHB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJlYXNvbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM3Nzc3Nzc7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiA1MTBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuIiwiLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBtYXJnaW46IDdweDtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5zdWJtaXRCdG4ge1xuICBtYXJnaW46IDBweCAxNHB4IDBweCAwcHg7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XG59XG5cbi5zdWJtaXRidG4ge1xuICAtLWJhY2tncm91bmQ6ICM2MjUyZWU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4ubGFiZWwtaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XG59XG5cbi5kZWFsZXItbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5kZWFsZXItZGF0YSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRvY3VtZW50cyB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uZG9jdW1lbnRzIHtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWFzb24ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjNzc3Nzc3O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogNTEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/firmware-ais140-upload/firmware-ais140-upload.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/firmware-ais140-upload/firmware-ais140-upload.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: FirmwareAis140UploadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmwareAis140UploadPage", function() { return FirmwareAis140UploadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/pdf-logo.service */ "./src/app/services/pdf-logo.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _password_popup_password_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./password-popup/password-popup.component */ "./src/app/delar-application/firmware-ais140-upload/password-popup/password-popup.component.ts");
/* harmony import */ var src_app_services_countries_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/countries.service */ "./src/app/services/countries.service.ts");












var FirmwareAis140UploadPage = /** @class */ (function () {
    function FirmwareAis140UploadPage(platform, formBuilder, modalController, alertController, commonService, ajaxService, pdfLogoService, ete, countries) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.pdfLogoService = pdfLogoService;
        this.ete = ete;
        this.countries = countries;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__["FileUploader"]({});
        this.name = false;
        this.willDownload = false;
        this.output = "";
        this.show = false;
        this.imeiIssues = [];
        this.excellKeyValid = false;
        this.button = false;
        this.state = [];
        this.cities = [];
    }
    FirmwareAis140UploadPage.prototype.clear = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        this.firmware.patchValue({
            state: "",
            server: "",
            serviceprovider: "",
            fileupload: "",
            reason: ""
        });
        this.button = false;
    };
    FirmwareAis140UploadPage.prototype.createForm = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        var todaytime = now.getHours() + ":" + now.getMinutes();
        this.firmware = this.formBuilder.group({
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            server: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            serviceprovider: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fileupload: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            reason: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    FirmwareAis140UploadPage.prototype.getState = function () {
        this.state = this.countries.region.India;
        this.cities = this.countries.states[this.firmware.value.state];
    };
    FirmwareAis140UploadPage.prototype.submit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var file, data, testData, api, blob, default_file, url;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.button = true;
                        this.commonService.presentLoader();
                        file = this.uploader;
                        data = {
                            state: this.firmware.value.state,
                            serviceprovider: this.firmware.value.serviceprovider,
                            backendserver: this.firmware.value.server,
                            reason: this.firmware.value.reason,
                            createdby: localStorage.getItem("userName"),
                        };
                        testData = new FormData();
                        if (!(file.queue.length != 0)) return [3 /*break*/, 1];
                        testData.append("firmwareuploaddocument", file.queue[0]._file);
                        testData.append("data", JSON.stringify(data));
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, fetch(this.pdfLogoService.imgdata.no_img)];
                    case 2:
                        api = _a.sent();
                        return [4 /*yield*/, api.blob()];
                    case 3:
                        blob = _a.sent();
                        default_file = new File([blob], "File name", {
                            type: "image/png",
                        });
                        testData.append("firmwareuploaddocument", default_file);
                        testData.append("data", JSON.stringify(data));
                        _a.label = 4;
                    case 4:
                        url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/global/savetFirmwareUploadDetails";
                        this.ajaxService.ajaxPostWithFile(url, testData).subscribe(function (res) {
                            _this.commonService.dismissLoader();
                            if (res.message == "Firmware Upload Successfully") {
                                _this.commonService.showConfirm(res.message);
                                _this.clear();
                                _this.button = false;
                            }
                            else {
                                _this.commonService.showConfirm(res.message);
                                _this.button = false;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    FirmwareAis140UploadPage.prototype.popup = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isModalOpened, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.getTop()];
                    case 1:
                        isModalOpened = _a.sent();
                        return [4 /*yield*/, this.modalController.create({
                                component: _password_popup_password_popup_component__WEBPACK_IMPORTED_MODULE_10__["PasswordPopupComponent"],
                                cssClass: "validityform",
                                componentProps: {
                                    value: ''
                                },
                            })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "Password Correct..") {
                                _this.submit();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FirmwareAis140UploadPage.prototype.download = function () { };
    FirmwareAis140UploadPage.prototype.history = function () { };
    FirmwareAis140UploadPage.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = event.args.row.bounddata;
        this.show = true;
    };
    FirmwareAis140UploadPage.prototype.getserver = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/global/getfirmwarebackendserver";
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            _this.backendserver = res;
        });
    };
    FirmwareAis140UploadPage.prototype.getserviceprovider = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/esim/getServiceProvider";
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            _this.service = res;
        });
    };
    FirmwareAis140UploadPage.prototype.ngOnInit = function () {
        this.createForm();
        this.getserver();
        this.clear();
        this.getState();
        this.getserviceprovider();
    };
    FirmwareAis140UploadPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_7__["PdfLogoService"] },
        { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExportExcelService"] },
        { type: src_app_services_countries_service__WEBPACK_IMPORTED_MODULE_11__["CountriesService"] }
    ]; };
    FirmwareAis140UploadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-firmware-ais140-upload',
            template: __webpack_require__(/*! raw-loader!./firmware-ais140-upload.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/firmware-ais140-upload/firmware-ais140-upload.page.html"),
            styles: [__webpack_require__(/*! ./firmware-ais140-upload.page.scss */ "./src/app/delar-application/firmware-ais140-upload/firmware-ais140-upload.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_7__["PdfLogoService"],
            src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExportExcelService"],
            src_app_services_countries_service__WEBPACK_IMPORTED_MODULE_11__["CountriesService"]])
    ], FirmwareAis140UploadPage);
    return FirmwareAis140UploadPage;
}());



/***/ }),

/***/ "./src/app/delar-application/firmware-ais140-upload/password-popup/password-popup.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/delar-application/firmware-ais140-upload/password-popup/password-popup.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n.submitbtn {\n  --background: #6252ee;\n}\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZmlybXdhcmUtYWlzMTQwLXVwbG9hZC9wYXNzd29yZC1wb3B1cC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxmaXJtd2FyZS1haXMxNDAtdXBsb2FkXFxwYXNzd29yZC1wb3B1cFxccGFzc3dvcmQtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2Zpcm13YXJlLWFpczE0MC11cGxvYWQvcGFzc3dvcmQtcG9wdXAvcGFzc3dvcmQtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQ0NGO0FBQ0Y7QURFQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDQUY7QUFDRjtBREVBO0VBQ0U7SUFDRSxnQkFBQTtFQ0FGOztFREdBO0lBQ0UsVUFBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFO0lBQ0UsU0FBQTtFQ0RGOztFRElBO0lBQ0UsVUFBQTtFQ0RGO0FBQ0Y7QURJQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUNGRjtBRElBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNERjtBREdBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0FGO0FERUE7RUFDRSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUNDRjtBREVBO0VBQ0UscUJBQUE7QUNDRjtBREVBO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQ0NGO0FERUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZmlybXdhcmUtYWlzMTQwLXVwbG9hZC9wYXNzd29yZC1wb3B1cC9wYXNzd29yZC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjMyMHB4KSBhbmQobWF4LXdpZHRoOjEwMjNweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDoxMDI0cHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDhweCAxcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cblxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLmxhYmVsLWhlYWQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xufVxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBtYXJnaW46IDdweDtcbn1cbi5zdWJtaXRCdG4ge1xuICBtYXJnaW46IDBweCAxNHB4IDBweCAwcHg7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XG59XG5cbi5zdWJtaXRidG4ge1xuICAtLWJhY2tncm91bmQ6ICM2MjUyZWU7XG59XG5cbi5jb250ZW50LXN0eWxlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb2wtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuIiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDhweCAxcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5sYWJlbC1oZWFkIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBtYXJnaW46IDdweDtcbn1cblxuLnN1Ym1pdEJ0biB7XG4gIG1hcmdpbjogMHB4IDE0cHggMHB4IDBweDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogIzdjNjhmODtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjN2M2OGY4O1xuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcbn1cblxuLnN1Ym1pdGJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZTtcbn1cblxuLmNvbnRlbnQtc3R5bGUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/firmware-ais140-upload/password-popup/password-popup.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/delar-application/firmware-ais140-upload/password-popup/password-popup.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PasswordPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPopupComponent", function() { return PasswordPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var PasswordPopupComponent = /** @class */ (function () {
    function PasswordPopupComponent(platform, formBuilder, modalController, alertController, commonService, ajaxService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
    }
    PasswordPopupComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    PasswordPopupComponent.prototype.createForm = function () {
        this.passwordform = this.formBuilder.group({
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    PasswordPopupComponent.prototype.clear = function () {
        this.passwordform.patchValue({
            password: "",
        });
    };
    PasswordPopupComponent.prototype.submit = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/global/getFirmwareUploadpassword?password=" + this.passwordform.value.password;
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            if (res.message == "Password Correct..") {
                _this.modalController.dismiss({
                    data: "Password Correct..",
                });
            }
            else {
                _this.commonService.showConfirm(res.message);
                _this.clear();
            }
        });
    };
    PasswordPopupComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    PasswordPopupComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] }
    ]; };
    PasswordPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-password-popup',
            template: __webpack_require__(/*! raw-loader!./password-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/firmware-ais140-upload/password-popup/password-popup.component.html"),
            styles: [__webpack_require__(/*! ./password-popup.component.scss */ "./src/app/delar-application/firmware-ais140-upload/password-popup/password-popup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"]])
    ], PasswordPopupComponent);
    return PasswordPopupComponent;
}());



/***/ })

}]);
//# sourceMappingURL=firmware-ais140-upload-firmware-ais140-upload-module-es5.js.map