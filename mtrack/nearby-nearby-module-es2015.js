(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nearby-nearby-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/nearby/nearby.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nearby/nearby.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar mode=\"md\" class=\"appHeader\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-menu-button ></ion-menu-button>\r\n                 <ion-title >Near by</ion-title>   \r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <app-vts-nearby *ngIf=\"appName != 'Armoron'\"></app-vts-nearby>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/nearby/nearby.module.ts":
/*!*****************************************!*\
  !*** ./src/app/nearby/nearby.module.ts ***!
  \*****************************************/
/*! exports provided: NearbyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearbyPageModule", function() { return NearbyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nearby_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nearby.page */ "./src/app/nearby/nearby.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _nearby_page__WEBPACK_IMPORTED_MODULE_6__["NearbyPage"]
    }
];
const VtsNearBy = [
    {
        path: '',
        component: _nearby_page__WEBPACK_IMPORTED_MODULE_6__["NearbyPage"]
    }
];
let NearbyPageModule = class NearbyPageModule {
};
NearbyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(VtsNearBy)
        ],
        declarations: [_nearby_page__WEBPACK_IMPORTED_MODULE_6__["NearbyPage"]]
    })
], NearbyPageModule);



/***/ }),

/***/ "./src/app/nearby/nearby.page.scss":
/*!*****************************************!*\
  !*** ./src/app/nearby/nearby.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25lYXJieS9uZWFyYnkucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/nearby/nearby.page.ts":
/*!***************************************!*\
  !*** ./src/app/nearby/nearby.page.ts ***!
  \***************************************/
/*! exports provided: NearbyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearbyPage", function() { return NearbyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let NearbyPage = class NearbyPage {
    constructor(platform, menuController) {
        this.platform = platform;
        this.menuController = menuController;
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.subscription = this.platform.backButton.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (this.menuController.isOpen()) {
                    this.menuController.close();
                }
            }));
        });
    }
    ionViewWillLeave() {
        this.subscription.unsubscribe();
    }
    ngOnInit() {
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["app"].appName;
    }
};
NearbyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
NearbyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nearby',
        template: __webpack_require__(/*! raw-loader!./nearby.page.html */ "./node_modules/raw-loader/index.js!./src/app/nearby/nearby.page.html"),
        styles: [__webpack_require__(/*! ./nearby.page.scss */ "./src/app/nearby/nearby.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], NearbyPage);



/***/ })

}]);
//# sourceMappingURL=nearby-nearby-module-es2015.js.map