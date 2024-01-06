(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["geofence-geofence-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/geofence/geofence.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/geofence/geofence.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ion-content>\r\n    <app-vts-geofence></app-vts-geofence>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/geofence/geofence.module.ts":
/*!*********************************************!*\
  !*** ./src/app/geofence/geofence.module.ts ***!
  \*********************************************/
/*! exports provided: GeofencePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeofencePageModule", function() { return GeofencePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_geofence_geofence_model_geofence_model_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/geofence/geofence-model/geofence-model.page */ "./src/app/geofence/geofence-model/geofence-model.page.ts");
/* harmony import */ var _app_geofence_geofence_list_model_geofence_list_model_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/geofence/geofence-list-model/geofence-list-model.page */ "./src/app/geofence/geofence-list-model/geofence-list-model.page.ts");
/* harmony import */ var _geofence_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./geofence.page */ "./src/app/geofence/geofence.page.ts");










var geofencemodelpage = [
    {
        path: '',
        component: _app_geofence_geofence_model_geofence_model_page__WEBPACK_IMPORTED_MODULE_7__["GeofenceModelPage"]
    },
];
var geofencelistmodelpage = [
    {
        path: '',
        component: _app_geofence_geofence_list_model_geofence_list_model_page__WEBPACK_IMPORTED_MODULE_8__["GeofenceListModelPage"]
    },
];
var routes = [
    {
        path: '',
        component: _geofence_page__WEBPACK_IMPORTED_MODULE_9__["GeofencePage"]
    }
];
var GeofencePageModule = /** @class */ (function () {
    function GeofencePageModule() {
    }
    GeofencePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(geofencemodelpage),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(geofencelistmodelpage)
            ],
            declarations: [_geofence_page__WEBPACK_IMPORTED_MODULE_9__["GeofencePage"], _app_geofence_geofence_model_geofence_model_page__WEBPACK_IMPORTED_MODULE_7__["GeofenceModelPage"], _app_geofence_geofence_list_model_geofence_list_model_page__WEBPACK_IMPORTED_MODULE_8__["GeofenceListModelPage"]]
        })
    ], GeofencePageModule);
    return GeofencePageModule;
}());



/***/ }),

/***/ "./src/app/geofence/geofence.page.scss":
/*!*********************************************!*\
  !*** ./src/app/geofence/geofence.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addButton {\n  background-color: #737b92;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VvZmVuY2UvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxnZW9mZW5jZVxcZ2VvZmVuY2UucGFnZS5zY3NzIiwic3JjL2FwcC9nZW9mZW5jZS9nZW9mZW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSx5QkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvZ2VvZmVuY2UvZ2VvZmVuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZEJ1dHRvbntcclxuICAgIC8vIHBhZGRpbmctbGVmdDogNzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MzdiOTI7XHJcbiAgICBcclxufSIsIi5hZGRCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM3YjkyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/geofence/geofence.page.ts":
/*!*******************************************!*\
  !*** ./src/app/geofence/geofence.page.ts ***!
  \*******************************************/
/*! exports provided: GeofencePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeofencePage", function() { return GeofencePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var GeofencePage = /** @class */ (function () {
    function GeofencePage(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    GeofencePage.prototype.ngOnInit = function () {
        this.filterValue = this.activatedRoute.snapshot.paramMap.get("type");
    };
    GeofencePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    GeofencePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-geofence',
            template: __webpack_require__(/*! raw-loader!./geofence.page.html */ "./node_modules/raw-loader/index.js!./src/app/geofence/geofence.page.html"),
            styles: [__webpack_require__(/*! ./geofence.page.scss */ "./src/app/geofence/geofence.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], GeofencePage);
    return GeofencePage;
}());



/***/ })

}]);
//# sourceMappingURL=geofence-geofence-module-es5.js.map