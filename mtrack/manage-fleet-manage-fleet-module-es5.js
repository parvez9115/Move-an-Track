(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-fleet-manage-fleet-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/manage-fleet/manage-fleet.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manage-fleet/manage-fleet.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-header class='header'>\r\n  <ion-toolbar [ngClass]=\"{'appHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\">\r\n      <ion-grid>\r\n          <ion-row *ngIf=\"!showSearch && myPlatform !='desktop'\"  style=\"align-items: center;\">\r\n              <ion-col size='2'>\r\n                  <ion-menu-button></ion-menu-button>\r\n              </ion-col>\r\n              <ion-col size='8.5' style='align-self: center;'>\r\n                      <ion-label style=\"font-size: 20px;font-weight: bold;\"> {{paramMap}}</ion-label>\r\n              </ion-col>\r\n              <ion-col size='1.5' style=\"padding: 0px;\">\r\n                  <ion-row >\r\n                      <ion-col size='3' style=\"align-self: center;\"> \r\n                        \r\n                      </ion-col>\r\n                      \r\n                  </ion-row>\r\n              </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row *ngIf=\"!showSearch && myPlatform =='desktop'\"  style=\"align-items: center;\">\r\n            <ion-col size='2'>\r\n                <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n            <ion-col size='8.5' style='align-self: center;'>\r\n                    <ion-label class=\"headercolour\"> {{paramMap}}</ion-label>\r\n            </ion-col>\r\n            <ion-col size='1.5' style=\"padding: 0px;\">\r\n                <ion-row >\r\n                    <ion-col size='3' style=\"align-self: center;\"> \r\n                      \r\n                    </ion-col>\r\n                    \r\n                   <ion-col *ngIf='myPlatform ==\"desktop\"' size='9'>\r\n                    <ion-img [src]=\"app.logo\"></ion-img>\r\n                   </ion-col>\r\n                </ion-row>\r\n            </ion-col>\r\n        </ion-row>\r\n         \r\n      </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n<app-operator *ngIf =\"paramMap =='Operator'\"></app-operator>\r\n<app-profile  *ngIf =\"paramMap =='Profile'\"></app-profile>\r\n <app-users  *ngIf =\" paramMap =='Users'\"></app-users>\r\n  <!-- <app-user-card  *ngIf =\" paramMap =='Users' && myPlatform !='desktop'\"></app-user-card> -->\r\n   <!-- <app-operator-card *ngIf =\"paramMap =='Operator' && myPlatform !='desktop'\"></app-operator-card> -->\r\n   \r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/manage-fleet/manage-fleet.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/manage-fleet/manage-fleet.module.ts ***!
  \*****************************************************/
/*! exports provided: ManageFleetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageFleetPageModule", function() { return ManageFleetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _manage_fleet_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manage-fleet.page */ "./src/app/manage-fleet/manage-fleet.page.ts");







// import {SharedModModule} from '../shared-mod/shared-mod.module'

var routes = [
    {
        path: '',
        component: _manage_fleet_page__WEBPACK_IMPORTED_MODULE_7__["ManageFleetPage"]
    }
];
var ManageFleetPageModule = /** @class */ (function () {
    function ManageFleetPageModule() {
    }
    ManageFleetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                // ComponentsModule,
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_manage_fleet_page__WEBPACK_IMPORTED_MODULE_7__["ManageFleetPage"]]
        })
    ], ManageFleetPageModule);
    return ManageFleetPageModule;
}());



/***/ }),

/***/ "./src/app/manage-fleet/manage-fleet.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/manage-fleet/manage-fleet.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 1023px) {\n  * .fleet_card {\n    display: none;\n  }\n}\n@media only screen and (min-width: 10px) and (max-width: 1023px) {\n  * .fleet_web {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLWZsZWV0L0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcbWFuYWdlLWZsZWV0XFxtYW5hZ2UtZmxlZXQucGFnZS5zY3NzIiwic3JjL2FwcC9tYW5hZ2UtZmxlZXQvbWFuYWdlLWZsZWV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUVRO0lBQ0ksYUFBQTtFQ0RkO0FBQ0Y7QURLSTtFQUVRO0lBQ0ksY0FBQTtFQ0pkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2UtZmxlZXQvbWFuYWdlLWZsZWV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MTAyM3B4KXtcclxuICAgICAgICAqe1xyXG4gICAgICAgICAgICAuZmxlZXRfY2FyZHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDoxMHB4KSBhbmQgKG1heC13aWR0aDoxMDIzcHgpe1xyXG4gICAgICAgICp7XHJcbiAgICAgICAgICAgIC5mbGVldF93ZWJ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjNweCkge1xuICAqIC5mbGVldF9jYXJkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgKiAuZmxlZXRfd2ViIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/manage-fleet/manage-fleet.page.ts":
/*!***************************************************!*\
  !*** ./src/app/manage-fleet/manage-fleet.page.ts ***!
  \***************************************************/
/*! exports provided: ManageFleetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageFleetPage", function() { return ManageFleetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var ManageFleetPage = /** @class */ (function () {
    function ManageFleetPage(router, route, platform) {
        this.router = router;
        this.route = route;
        this.platform = platform;
        this.app = { logo: 'logo.png' };
    }
    ManageFleetPage.prototype.ngOnInit = function () {
        this.paramMap = this.route.snapshot.paramMap.get('pagecomp');
        // this.app["logo"] = localStorage.companyLogo;
        // this.app["logo"] = localStorage.companyLogo;	
        if (localStorage.getItem('fmslogin') == 'FMS') {
            this.app["logo"] = localStorage.getItem('fmslogo');
        }
        else {
            this.app["logo"] = localStorage.companyLogo;
        }
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["app"].appName;
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
    };
    ManageFleetPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
    ]; };
    ManageFleetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-fleet',
            template: __webpack_require__(/*! raw-loader!./manage-fleet.page.html */ "./node_modules/raw-loader/index.js!./src/app/manage-fleet/manage-fleet.page.html"),
            styles: [__webpack_require__(/*! ./manage-fleet.page.scss */ "./src/app/manage-fleet/manage-fleet.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], ManageFleetPage);
    return ManageFleetPage;
}());



/***/ })

}]);
//# sourceMappingURL=manage-fleet-manage-fleet-module-es5.js.map