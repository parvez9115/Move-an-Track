(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["managefleets-generalform-generalform-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/managefleets/generalform/generalform.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/managefleets/generalform/generalform.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-header>\r\n  <ion-toolbar mode=\"md\" [ngClass]=\"{'appHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\">\r\n    <ion-grid >\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row *ngIf=\"myPlatform != 'desktop'\">\r\n            <ion-col size=\"2\">\r\n                <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n           <ion-col size=\"8\">\r\n            <ion-label style=\"font-size: 20px;font-weight: bold;\">Manage </ion-label>\r\n           </ion-col>  \r\n        </ion-row>\r\n          <ion-row *ngIf=\"myPlatform == 'desktop'\">\r\n            <ion-col size='2'>\r\n              <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <ion-label class=\"headercolour\"> Manage  </ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-img [src]=\"app.logo\"></ion-img>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>  \r\n</ion-header>\r\n\r\n<ion-content>\r\n<!-- <app-fleet-form></app-fleet-form> -->\r\n\r\n  <app-manage-fleet-table> </app-manage-fleet-table>\r\n  \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/managefleets/generalform/generalform.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/managefleets/generalform/generalform.module.ts ***!
  \****************************************************************/
/*! exports provided: GeneralformPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralformPageModule", function() { return GeneralformPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _generalform_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generalform.page */ "./src/app/managefleets/generalform/generalform.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _generalform_page__WEBPACK_IMPORTED_MODULE_6__["GeneralformPage"]
    }
];
var GeneralformPageModule = /** @class */ (function () {
    function GeneralformPageModule() {
    }
    GeneralformPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_generalform_page__WEBPACK_IMPORTED_MODULE_6__["GeneralformPage"]]
        })
    ], GeneralformPageModule);
    return GeneralformPageModule;
}());



/***/ }),

/***/ "./src/app/managefleets/generalform/generalform.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/managefleets/generalform/generalform.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-background-color {\n  background: #F6b221;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlZmxlZXRzL2dlbmVyYWxmb3JtL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcbWFuYWdlZmxlZXRzXFxnZW5lcmFsZm9ybVxcZ2VuZXJhbGZvcm0ucGFnZS5zY3NzIiwic3JjL2FwcC9tYW5hZ2VmbGVldHMvZ2VuZXJhbGZvcm0vZ2VuZXJhbGZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZWZsZWV0cy9nZW5lcmFsZm9ybS9nZW5lcmFsZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJhY2tncm91bmQtY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZDogI0Y2YjIyMTtcclxuICB9IiwiLmhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogI0Y2YjIyMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/managefleets/generalform/generalform.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/managefleets/generalform/generalform.page.ts ***!
  \**************************************************************/
/*! exports provided: GeneralformPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralformPage", function() { return GeneralformPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var GeneralformPage = /** @class */ (function () {
    function GeneralformPage(platform) {
        this.platform = platform;
        this.app = { logo: 'logo.png' };
    }
    GeneralformPage.prototype.ngOnInit = function () {
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
    };
    GeneralformPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ]; };
    GeneralformPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generalform',
            template: __webpack_require__(/*! raw-loader!./generalform.page.html */ "./node_modules/raw-loader/index.js!./src/app/managefleets/generalform/generalform.page.html"),
            styles: [__webpack_require__(/*! ./generalform.page.scss */ "./src/app/managefleets/generalform/generalform.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], GeneralformPage);
    return GeneralformPage;
}());



/***/ })

}]);
//# sourceMappingURL=managefleets-generalform-generalform-module-es5.js.map