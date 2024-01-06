(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-company-add-company-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/dashboard/add-company/add-company.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/dashboard/add-company/add-company.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar\r\n    [ngClass]=\"{'dealerHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\"\r\n    mode=\"md\"\r\n  >\r\n    <ion-buttons *ngIf=\"appName != 'Armoron'\" slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-icon\r\n      (click)=\"backbutton()\"\r\n      style=\"padding: 10px 10px 0px 10px\"\r\n      *ngIf=\"appName == 'Armoron'\"\r\n      name=\"arrow-back\"\r\n    ></ion-icon>\r\n    <ion-title>Add Company</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row *ngIf=\"appName != 'Armoron'\">\r\n      <ion-col size=\"12\" class=\"form-field\">\r\n        <form class=\"formPadding\" [formGroup]=\"checkno\">\r\n          <ion-row style=\"justify-content: right\">\r\n            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"4\" size-md=\"12\">\r\n              <ion-input\r\n                class=\"heading\"\r\n                [ngClass]=\"{'armoron' : appName == 'Armoron', 'heading' : appName != 'Armoron'}\"\r\n                type=\"number\"\r\n                formControlName=\"phoneno\"\r\n                placeholder=\"Enter Mobile No\"\r\n              ></ion-input>\r\n            </ion-col>\r\n            <ion-col\r\n              size=\"12\"\r\n              size-sm=\"12\"\r\n              size-lg=\"2\"\r\n              size-md=\"12\"\r\n              style=\"text-align: center\"\r\n            >\r\n              <ion-button\r\n                (click)=\"check()\"\r\n                [disabled]=\"!checkno.valid\"\r\n                id=\"submitbtn\"\r\n              >\r\n                Check\r\n              </ion-button>\r\n              <ion-button\r\n                (click)=\"clear()\"\r\n                [disabled]=\"!checkno.valid\"\r\n                id=\"submitbtn\"\r\n              >\r\n                Clear\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n        <form class=\"formPadding\" [formGroup]=\"addCompany\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\r\n              <ion-input\r\n                class=\"heading\"\r\n                [ngClass]=\"{'armoron' : appName == 'Armoron', 'heading' : appName != 'Armoron'}\"\r\n                type=\"text\"\r\n                formControlName=\"companyName\"\r\n                placeholder=\"Company name\"\r\n              ></ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\r\n              <ion-input\r\n                class=\"heading\"\r\n                [ngClass]=\"{'armoron' : appName == 'Armoron', 'heading' : appName != 'Armoron'}\"\r\n                type=\"text\"\r\n                formControlName=\"loginId\"\r\n                placeholder=\"Login id\"\r\n              ></ion-input>\r\n            </ion-col>\r\n            <!------->\r\n            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\r\n              <ion-input\r\n                class=\"heading\"\r\n                [ngClass]=\"{'armoron' : appName == 'Armoron', 'heading' : appName != 'Armoron'}\"\r\n                type=\"text\"\r\n                formControlName=\"password\"\r\n                placeholder=\"Password\"\r\n              ></ion-input>\r\n            </ion-col>\r\n            <!------->\r\n            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\r\n              <ion-input\r\n                class=\"heading\"\r\n                [ngClass]=\"{'armoron' : appName == 'Armoron', 'heading' : appName != 'Armoron'}\"\r\n                type=\"text\"\r\n                formControlName=\"email\"\r\n                placeholder=\"Email id\"\r\n              ></ion-input>\r\n            </ion-col>\r\n            <!------->\r\n            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\r\n              <ion-input\r\n                class=\"heading\"\r\n                [ngClass]=\"{'armoron' : appName == 'Armoron', 'heading' : appName != 'Armoron'}\"\r\n                type=\"number\"\r\n                formControlName=\"contactNo\"\r\n                placeholder=\"Contact number\"\r\n              ></ion-input>\r\n            </ion-col>\r\n            <!------->\r\n            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\r\n              <ion-input\r\n                class=\"heading\"\r\n                [ngClass]=\"{'armoron' : appName == 'Armoron', 'heading' : appName != 'Armoron'}\"\r\n                type=\"text\"\r\n                formControlName=\"address\"\r\n                placeholder=\"Address\"\r\n              ></ion-input>\r\n            </ion-col>\r\n            <!------->\r\n            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\r\n              <ion-input\r\n                class=\"heading\"\r\n                [ngClass]=\"{'armoron' : appName == 'Armoron', 'heading' : appName != 'Armoron'}\"\r\n                type=\"text\"\r\n                formControlName=\"city\"\r\n                placeholder=\"City\"\r\n              ></ion-input>\r\n            </ion-col>\r\n            <!------->\r\n            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\r\n              <ion-select\r\n                class=\"heading\"\r\n                [ngClass]=\"{'armoron' : appName == 'Armoron', 'heading' : appName != 'Armoron'}\"\r\n                formControlName=\"country\"\r\n                placeHolder=\"Country\"\r\n              >\r\n                <ion-select-option\r\n                  *ngFor=\"let country of country\"\r\n                  [value]=\"country\"\r\n                >\r\n                  {{country}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n\r\n        <ion-col size=\"12\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" style=\"text-align: center\">\r\n              <ion-button\r\n                (click)=\"onSubmit()\"\r\n                [disabled]=\"!addCompany.valid\"\r\n                id=\"submitbtn\"\r\n              >\r\n                Add\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"appName == 'Armoron'\">\r\n      <form style=\"width: 100%\" [formGroup]=\"addCompany\">\r\n        <!-- <ion-list> -->\r\n        <!-- <ion-item>\r\n          <ion-label position=\"fixed\">First_name:</ion-label>\r\n          <ion-input formControlName=\"firstName\" type=\"text\" placeholder=\"First name\">\r\n          </ion-input>\r\n        </ion-item> -->\r\n        <!-- <ion-item>\r\n          <ion-label position=\"fixed\">Last_name:</ion-label>\r\n          <ion-input formControlName=\"lastname\" type=\"text\" placeholder=\"Last_name\">\r\n          </ion-input>\r\n        </ion-item> -->\r\n        <!-- <ion-item>\r\n          <ion-label position=\"fixed\">DOB:</ion-label>\r\n          <ion-input formControlName=\"date\" type=\"date\">\r\n          </ion-input>\r\n        </ion-item> -->\r\n        <!-- <ion-item>\r\n          <ion-label position=\"fixed\">Mobile:</ion-label>\r\n        \r\n          </ion-input>\r\n        </ion-item> -->\r\n        <!-- <ion-item>\r\n          <ion-label position=\"fixed\">Mobile:</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"email\" placeholder=\"Email id\">\r\n          </ion-input>\r\n        </ion-item> -->\r\n        <!-- <ion-item>\r\n          <ion-label>Gender</ion-label>\r\n          <ion-select formControlName=\"gender\">\r\n            <ion-select-option value=\"male\">Male</ion-select-option>\r\n            <ion-select-option value=\"female\">Female</ion-select-option>\r\n          </ion-select>\r\n        </ion-item> -->\r\n        <!-- <ion-item>\r\n          <ion-label>Address</ion-label>\r\n          <ion-textarea formControlName=\"address\" type=\"text\" placeholder=\"Address\"></ion-textarea>\r\n        </ion-item> -->\r\n        <!-- <ion-item>\r\n          <ion-label>Country</ion-label>\r\n          <ion-select formControlName=\"country\" placeHolder=\"Country\">\r\n            <ion-select-option *ngFor=\"let country of country\" [value]=\"country\">\r\n              {{country}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item> -->\r\n        <!-- </ion-list> -->\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-label style=\"color: #b1b1b1\" position=\"floating\"\r\n              >First name</ion-label\r\n            >\r\n            <ion-input type=\"text\" formControlName=\"firstName\"></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-label style=\"color: #b1b1b1\" position=\"floating\"\r\n              >Last name</ion-label\r\n            >\r\n            <ion-input type=\"text\" formControlName=\"lastname\"></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-label style=\"color: #b1b1b1\" position=\"stacked\"\r\n              >Date of birth</ion-label\r\n            >\r\n            <ion-input type=\"date\" formControlName=\"date\"></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-label style=\"color: #b1b1b1\" position=\"floating\"\r\n              >Mobile</ion-label\r\n            >\r\n            <ion-input\r\n              formControlName=\"contactNo\"\r\n              type=\"text\"\r\n              readonly\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-label style=\"color: #b1b1b1\" position=\"floating\"\r\n              >Email id</ion-label\r\n            >\r\n            <ion-input\r\n              type=\"text\"\r\n              formControlName=\"email\"\r\n              placeholder=\"Email id\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-label style=\"color: #b1b1b1\" position=\"floating\"\r\n              >Gender</ion-label\r\n            >\r\n            <ion-select formControlName=\"gender\">\r\n              <ion-select-option value=\"male\">Male</ion-select-option>\r\n              <ion-select-option value=\"female\">Female</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-label style=\"color: #b1b1b1\" position=\"floating\"\r\n              >Address</ion-label\r\n            >\r\n            <ion-textarea\r\n              formControlName=\"address\"\r\n              type=\"text\"\r\n              placeholder=\"Address\"\r\n            ></ion-textarea>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-label style=\"color: #b1b1b1\" position=\"floating\"\r\n              >City</ion-label\r\n            >\r\n            <ion-input\r\n              type=\"text\"\r\n              formControlName=\"city\"\r\n              placeholder=\"City\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-label style=\"color: #b1b1b1\" position=\"floating\"\r\n              >Country</ion-label\r\n            >\r\n            <ion-select formControlName=\"country\" placeHolder=\"Country\">\r\n              <ion-select-option\r\n                *ngFor=\"let country of country\"\r\n                [value]=\"country\"\r\n              >\r\n                {{country}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-row class=\"signin\">\r\n          <ion-col>\r\n            <ion-button\r\n              (click)=\"onSubmit()\"\r\n              [ngClass]=\"{'appBackground' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\"\r\n              shape=\"full\"\r\n              expand=\"block\"\r\n              >Submit</ion-button\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/delar-application/dashboard/add-company/add-company-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/dashboard/add-company/add-company-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AddCompanyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyPageRoutingModule", function() { return AddCompanyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_company_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-company.page */ "./src/app/delar-application/dashboard/add-company/add-company.page.ts");




const routes = [
    {
        path: "",
        component: _add_company_page__WEBPACK_IMPORTED_MODULE_3__["AddCompanyPage"],
    },
];
let AddCompanyPageRoutingModule = class AddCompanyPageRoutingModule {
};
AddCompanyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddCompanyPageRoutingModule);



/***/ }),

/***/ "./src/app/delar-application/dashboard/add-company/add-company.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/delar-application/dashboard/add-company/add-company.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AddCompanyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyPageModule", function() { return AddCompanyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_company_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-company-routing.module */ "./src/app/delar-application/dashboard/add-company/add-company-routing.module.ts");
/* harmony import */ var _add_company_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-company.page */ "./src/app/delar-application/dashboard/add-company/add-company.page.ts");







let AddCompanyPageModule = class AddCompanyPageModule {
};
AddCompanyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_company_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddCompanyPageRoutingModule"]
        ],
        declarations: [_add_company_page__WEBPACK_IMPORTED_MODULE_6__["AddCompanyPage"]]
    })
], AddCompanyPageModule);



/***/ }),

/***/ "./src/app/delar-application/dashboard/add-company/add-company.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/delar-application/dashboard/add-company/add-company.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin: 2px;\n}\n\n@media only screen and (min-width: 10px) and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n    margin: 5% auto 3px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .form-field {\n    margin: 3% auto 5px;\n    padding: 0px 20px;\n  }\n\n  #submitbtn {\n    width: 35%;\n  }\n}\n\n#submitbtn {\n  --background: #6252ee !important;\n}\n\n.heading {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGFzaGJvYXJkL2FkZC1jb21wYW55L0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGRhc2hib2FyZFxcYWRkLWNvbXBhbnlcXGFkZC1jb21wYW55LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGFzaGJvYXJkL2FkZC1jb21wYW55L2FkZC1jb21wYW55LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNORjs7QURRQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQ0xGOztBRFFBO0VBQ0U7SUFDRSxTQUFBO0lBQ0EsbUJBQUE7RUNMRjs7RURPQTtJQUNFLFVBQUE7RUNKRjtBQUNGOztBRE1BO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLGlCQUFBO0VDSkY7O0VET0E7SUFDRSxVQUFBO0VDSkY7QUFDRjs7QURNQTtFQUNFLGdDQUFBO0FDSkY7O0FET0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2Rhc2hib2FyZC9hZGQtY29tcGFueS9hZGQtY29tcGFueS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24taW5wdXQsaW9uLXNlbGVjdHtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbi8vICAgICBoZWlnaHQ6IDQycHg7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMThweDtcclxuLy8gICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbi8vIH1cclxuLmlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBtYXJnaW46IDdweDtcclxufVxyXG4uc2VsZWN0YWJsZS1pbnB1dCB7XHJcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcclxuICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MTBweCkgYW5kKG1heC13aWR0aDo3NjdweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIHpvb206IDgwJTtcclxuICAgIG1hcmdpbjogNSUgYXV0byAzcHg7XHJcbiAgfVxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbjogMyUgYXV0byA1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICB9XHJcbn1cclxuI3N1Ym1pdGJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNjI1MmVlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxufVxyXG4iLCIuaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIG1hcmdpbjogN3B4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XG4gIG1hcmdpbjogMnB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICAgIG1hcmdpbjogNSUgYXV0byAzcHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW46IDMlIGF1dG8gNXB4O1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDM1JTtcbiAgfVxufVxuI3N1Ym1pdGJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZSAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGluZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/dashboard/add-company/add-company.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/delar-application/dashboard/add-company/add-company.page.ts ***!
  \*****************************************************************************/
/*! exports provided: AddCompanyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyPage", function() { return AddCompanyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let AddCompanyPage = class AddCompanyPage {
    constructor(formBuilder, router, ajaxService, commonService, location) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.location = location;
        this.region = { India: "Asia/Kolkata", "Saudi Arabia": "Asia/Riyadh" };
        this.modelTypes = {
            "APMKT01 Basic": "KT-Mini",
            "APMKT01 Advance": "KT-Mini",
            "APMKT02 Basic": "TK003",
            "APMKT02 Advance": "TK003",
            "APMKT03 Basic": "KT-Mini",
            "APMKT03 Advance": "KT-Mini",
            APMKT04: "wetrack",
            APMKT05: "GT06N",
            APMKT06: "GT300",
            APMKT07: "JV200",
            APMKT08: "KT-Mini",
            APMKT09: "KT-Mini",
            APMKT10: "GT800",
            APMKT11: "GT06D",
            AIS1401A: "AIS1401A",
        };
        this.model = [];
        this.provider = [
            { sim: "Idea" },
            { sim: "Airtel" },
            { sim: "Vodafone" },
            { sim: "Bsnl" },
        ];
        this.manufacture = [
            { name: "APMKT", type: "Concox" },
            { name: "APMKT-AIS140", type: "APMKT" },
        ];
    }
    clear() {
        this.checkno.patchValue({
            phoneno: "",
        });
    }
    getBack() {
        this.router.navigateByUrl("/dashboard");
    }
    backbutton() {
        this.location.back();
    }
    check() {
        if (this.checkno.value.phoneno.toString().length != 10) {
            this.commonService.showConfirm("Enter the 10 Digit Contact Number");
        }
        else if (this.checkno.valid) {
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web +
                "/global/validate/contact?contactNo=" +
                this.checkno.value.phoneno;
            this.ajaxService.ajaxGet(url).subscribe((res) => {
                if (res.message == "Available") {
                    this.commonService.showConfirm("Available");
                    this.clear();
                }
                else {
                    this.commonService.showConfirm(res.message);
                    this.clear();
                }
            });
        }
    }
    onSubmit() {
        if (this.addCompany.value.contactNo.toString().length != 10) {
            this.commonService.presentToast("Enter the 10 Digit Contact Number");
        }
        else if (this.addCompany.value.password.toString().length <= 4) {
            this.commonService.presentToast("Please Enter 5 digit Password");
        }
        else if (this.addCompany.valid) {
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web +
                "/global/validate/contact?contactNo=" +
                this.addCompany.value.contactNo;
            this.ajaxService.ajaxGet(url).subscribe((res) => {
                if (res.message == "Not Available") {
                    this.addTheCompany();
                }
                else {
                    this.commonService.showConfirm(res.message);
                }
            });
        }
        else {
            this.commonService.presentToast("Fill required field..");
        }
    }
    addTheCompany() {
        let adminData;
        let addCompany;
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["app"].appName != "Armoron") {
            adminData = {
                loginId: this.addCompany.value.loginId,
                loginCompany: localStorage.getItem("companyId"),
            };
            const countryCode = this.countryCode[this.addCompany.value.country];
            console.log(countryCode);
            const region = this.region[this.addCompany.value.country];
            addCompany = {
                password: "12345",
                companyName: this.addCompany.value.companyName,
                address: this.addCompany.value.address,
                city: this.addCompany.value.city,
                region: region,
                countryCode: countryCode,
                companyAdminID: "",
                firstName: this.addCompany.value.companyName,
                contactNo: this.addCompany.value.contactNo,
                branchID: this.addCompany.value.loginId,
                emailId: this.addCompany.value.email,
                emailID: this.addCompany.value.email,
                companyID: this.addCompany.value.loginId,
            };
        }
        else {
            adminData = {
                loginId: this.addCompany.value.contactNo,
                loginCompany: "apm",
            };
            const countryCode = this.countryCode[this.addCompany.value.country];
            console.log(countryCode);
            const region = this.region[this.addCompany.value.country];
            addCompany = {
                password: this.addCompany.value.contactNo,
                companyName: this.addCompany.value.contactNo,
                address: this.addCompany.value.address,
                city: this.addCompany.value.city,
                region: region,
                countryCode: countryCode,
                companyAdminID: "",
                firstName: this.addCompany.value.firstName,
                contactNo: this.addCompany.value.contactNo,
                branchID: this.addCompany.value.contactNo,
                emailId: this.addCompany.value.email,
                emailID: this.addCompany.value.email,
                companyID: this.addCompany.value.contactNo,
            };
        }
        const dataJson = JSON.stringify(addCompany);
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web +
            "/user/provider/company?providerName=" +
            adminData.loginCompany +
            "&companyid=" +
            adminData.loginId;
        this.ajaxService.ajaxPostWithBody(url, dataJson).subscribe((res) => {
            this.newFleetCreation(res);
        });
    }
    newFleetCreation(res) {
        if (res) {
            if (res.Message === "Company added successfully.") {
                const datetoday = new Date();
                const expDate = datetoday.getFullYear() +
                    1 +
                    "-" +
                    (datetoday.getMonth() + 1) +
                    "-" +
                    (datetoday.getDate() - 1);
                const countryCode = this.countryCode[this.addCompany.value.country];
                let fleetData;
                if (src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["app"].appName != "Armoron") {
                    fleetData = {
                        userName: this.addCompany.value.loginId,
                        password: this.addCompany.value.password,
                        firstName: this.addCompany.value.companyName,
                        categoryrole: "FleetManager",
                        userCity: this.addCompany.value.city,
                        contactNo: this.addCompany.value.contactNo,
                        useraddress1: this.addCompany.value.address,
                        useraddress2: " ",
                        userCountry: countryCode,
                        emailId: this.addCompany.value.email,
                        emailID: this.addCompany.value.email,
                        userExpiryDate: expDate,
                        companyId: this.addCompany.value.loginId,
                        branchID: this.addCompany.value.loginId,
                        applicationType: "false",
                    };
                }
                else {
                    fleetData = {
                        userName: this.addCompany.value.contactNo,
                        password: this.addCompany.value.contactNo,
                        firstName: this.addCompany.value.firstName,
                        categoryrole: "FleetManager",
                        userCity: this.addCompany.value.city,
                        contactNo: this.addCompany.value.contactNo,
                        useraddress1: this.addCompany.value.address,
                        useraddress2: " ",
                        userCountry: countryCode,
                        emailId: this.addCompany.value.email,
                        emailID: this.addCompany.value.email,
                        userExpiryDate: expDate,
                        companyId: this.addCompany.value.contactNo,
                        branchID: this.addCompany.value.contactNo,
                        applicationType: "false",
                    };
                }
                localStorage.setItem("fleetData", JSON.stringify(fleetData));
                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + "/global/newFleetCreation";
                this.ajaxService.ajaxPostMethod(url, fleetData).subscribe((res) => {
                    this.newCompanyCreation(res);
                });
                console.log("this is call back end");
            }
            else if (res["Error Message"] === "Company already exist.") {
                this.commonService.presentToast("Company already exist.");
            }
            else {
                this.commonService.presentToast("sorry, not able process your request.");
            }
        }
    }
    newCompanyCreation(data) {
        const fleetData = JSON.parse(localStorage.getItem("fleetData"));
        let userDetail;
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["app"].appName != "Armoron") {
            userDetail = {
                companyname: fleetData["firstName"],
                companyId: fleetData["userName"],
                userId: fleetData["userName"] + "-ca",
                fmid: fleetData["userName"],
                email: fleetData["emailId"],
                contact: fleetData["contactNo"],
                password: fleetData["password"],
                suffix: localStorage.getItem("companySuffix"),
            };
        }
        else {
            userDetail = {
                companyname: fleetData["firstName"],
                companyId: fleetData["userName"],
                userId: fleetData["userName"],
                fmid: fleetData["userName"],
                email: fleetData["emailId"],
                contact: fleetData["contactNo"],
                password: fleetData["password"],
                suffix: "21",
            };
        }
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + "/global/companyCreation";
        this.ajaxService.ajaxPostMethod(url, userDetail).subscribe((res) => {
            this.alterNewCompanySuccess(res);
        });
    }
    alterNewCompanySuccess(res) {
        if (res.result == "updated successfully") {
            // const loginData = {
            //   userId: localStorage.getItem('userId'),
            //   password: localStorage.getItem('password')
            // };
            // const url = serverUrl.web + '/api/vts/superadmin/auth/' + JSON.stringify(loginData);
            // this.ajaxService.ajaxGetWithString(url)
            // .subscribe(res => {
            // localStorage.removeItem("dashboardData");
            // localStorage.setItem('dashboardData', JSON.stringify(res.CompanyDetials));
            this.location.back();
            this.commonService.presentToast("Successfully Presisted");
            this.addCompany.reset();
            //   });
            // }else {
            //   this.commonService.presentToast('Presisted Failed...!');
        }
    }
    getCountries() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web +
            "/login/getPreferences?key=countries&companyId=" +
            this.companyDetail.companyID;
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.country = res;
            console.log(res);
        });
    }
    getCountryCode() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web +
            "/login/getPreferences?key=countrycode&companyId=" +
            this.companyDetail.companyID;
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.countryCode = res;
            console.log(res);
        });
    }
    ngOnInit() {
        this.companyDetail = {
            companyID: localStorage.getItem("companyId"),
            userId: localStorage.getItem("userId"),
        };
        this.checkno = this.formBuilder.group({
            phoneno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.selectedData = "company";
        this.header = "Company";
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["app"].appName;
        this.getCountries();
        this.getCountryCode();
        if (this.appName != "Armoron") {
            this.addCompany = this.formBuilder.group({
                companyName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]],
                email: [""],
                password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                loginId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                address: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                contactNo: [""],
                region: [""],
                city: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                country: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
        }
        else {
            this.addCompany = this.formBuilder.group({
                firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                lastname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
                date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                address: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                region: [""],
                country: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                city: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                contactNo: [localStorage.getItem("PhoneNumber"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                gender: ["male", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
        }
    }
    ionViewWillEnter() {
        this.addCompany.reset();
        this.clear();
    }
};
AddCompanyPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }
];
AddCompanyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-company",
        template: __webpack_require__(/*! raw-loader!./add-company.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/dashboard/add-company/add-company.page.html"),
        styles: [__webpack_require__(/*! ./add-company.page.scss */ "./src/app/delar-application/dashboard/add-company/add-company.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]])
], AddCompanyPage);



/***/ })

}]);
//# sourceMappingURL=add-company-add-company-module-es2015.js.map