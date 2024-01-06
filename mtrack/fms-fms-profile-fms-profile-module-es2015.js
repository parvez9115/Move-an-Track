(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fms-fms-profile-fms-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/fms/fms-profile/fms-profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fms/fms-profile/fms-profile.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" [ngClass]=\"{'companyHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\">\r\n    <ion-grid >\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row *ngIf=\"myPlatform != 'desktop'\">\r\n            <ion-col size=\"2\">\r\n                <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n           <ion-col size=\"8\">\r\n            <ion-label>Profile </ion-label>\r\n           </ion-col>  \r\n        </ion-row>\r\n          <ion-row *ngIf=\"myPlatform == 'desktop'\">\r\n            <ion-col size='2'>\r\n              <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <ion-label class=\"headercolour\"> Profile  </ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-img [src]=\"app.logo\"></ion-img>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>  \r\n</ion-header>\r\n<ion-content>\r\n<app-profile-fms></app-profile-fms>\r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/fms/fms-profile/fms-profile.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/fms/fms-profile/fms-profile.module.ts ***!
  \*******************************************************/
/*! exports provided: FmsProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FmsProfilePageModule", function() { return FmsProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fms_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fms-profile.page */ "./src/app/fms/fms-profile/fms-profile.page.ts");








const routes = [
    {
        path: '',
        component: _fms_profile_page__WEBPACK_IMPORTED_MODULE_7__["FmsProfilePage"]
    }
];
let FmsProfilePageModule = class FmsProfilePageModule {
};
FmsProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_fms_profile_page__WEBPACK_IMPORTED_MODULE_7__["FmsProfilePage"]]
    })
], FmsProfilePageModule);



/***/ }),

/***/ "./src/app/fms/fms-profile/fms-profile.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/fms/fms-profile/fms-profile.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 1023px) {\n  * .fleet_card {\n    display: none;\n  }\n}\n@media only screen and (min-width: 10px) and (max-width: 1023px) {\n  * .fleet_web {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm1zL2Ztcy1wcm9maWxlL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZm1zXFxmbXMtcHJvZmlsZVxcZm1zLXByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9mbXMvZm1zLXByb2ZpbGUvZm1zLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRVE7SUFDSSxhQUFBO0VDRGQ7QUFDRjtBREtJO0VBRVE7SUFDSSxjQUFBO0VDSmQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Ztcy9mbXMtcHJvZmlsZS9mbXMtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjNweCl7XHJcbiAgICAgICAgKntcclxuICAgICAgICAgICAgLmZsZWV0X2NhcmR7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MTBweCkgYW5kIChtYXgtd2lkdGg6MTAyM3B4KXtcclxuICAgICAgICAqe1xyXG4gICAgICAgICAgICAuZmxlZXRfd2Vie1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjNweCkge1xuICAqIC5mbGVldF9jYXJkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgKiAuZmxlZXRfd2ViIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/fms/fms-profile/fms-profile.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/fms/fms-profile/fms-profile.page.ts ***!
  \*****************************************************/
/*! exports provided: FmsProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FmsProfilePage", function() { return FmsProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let FmsProfilePage = class FmsProfilePage {
    constructor(platform) {
        this.platform = platform;
        this.app = { logo: 'logo.png' };
    }
    ngOnInit() {
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["app"].appName;
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
    }
};
FmsProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
FmsProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fms-profile',
        template: __webpack_require__(/*! raw-loader!./fms-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/fms/fms-profile/fms-profile.page.html"),
        styles: [__webpack_require__(/*! ./fms-profile.page.scss */ "./src/app/fms/fms-profile/fms-profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], FmsProfilePage);



/***/ })

}]);
//# sourceMappingURL=fms-fms-profile-fms-profile-module-es2015.js.map