(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trackhistory-trackhistory-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/trackhistory/trackhistory.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/trackhistory/trackhistory.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar [ngClass]=\"{'appHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button icon=\"arrow-back\" style=\"color:rgb(0, 0, 0)\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <!-- <ion-grid class=\"appHeaderTitle\">\r\n    <ion-row>\r\n      <ion-title>{{headerText}}</ion-title>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-vts-trackhistory></app-vts-trackhistory>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/trackhistory/trackhistory.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/trackhistory/trackhistory.module.ts ***!
  \*****************************************************/
/*! exports provided: TrackhistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackhistoryPageModule", function() { return TrackhistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _trackhistory_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trackhistory.page */ "./src/app/trackhistory/trackhistory.page.ts");








var routes = [
    {
        path: '',
        component: _trackhistory_page__WEBPACK_IMPORTED_MODULE_7__["TrackhistoryPage"]
    }
];
var TrackhistoryPageModule = /** @class */ (function () {
    function TrackhistoryPageModule() {
    }
    TrackhistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ],
            declarations: [_trackhistory_page__WEBPACK_IMPORTED_MODULE_7__["TrackhistoryPage"]]
        })
    ], TrackhistoryPageModule);
    return TrackhistoryPageModule;
}());



/***/ }),

/***/ "./src/app/trackhistory/trackhistory.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/trackhistory/trackhistory.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".range-slider {\n  position: absolute;\n  width: 53%;\n  top: 0px;\n  height: var(--height);\n  /* contain: size layout style; */\n  cursor: -webkit-grab;\n  cursor: grab;\n  touch-action: pan-x;\n  -webkit-box-flex: 4;\n          flex: 4 1 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhY2toaXN0b3J5L0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcdHJhY2toaXN0b3J5XFx0cmFja2hpc3RvcnkucGFnZS5zY3NzIiwic3JjL2FwcC90cmFja2hpc3RvcnkvdHJhY2toaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFBQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RyYWNraGlzdG9yeS90cmFja2hpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhbmdlLXNsaWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTMlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCk7XHJcbiAgICAvKiBjb250YWluOiBzaXplIGxheW91dCBzdHlsZTsgKi9cclxuICAgIGN1cnNvcjogZ3JhYjtcclxuICAgIHRvdWNoLWFjdGlvbjogcGFuLXg7XHJcbiAgICBmbGV4OiA0IDEgMCU7XHJcbn0iLCIucmFuZ2Utc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTMlO1xuICB0b3A6IDBweDtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xuICAvKiBjb250YWluOiBzaXplIGxheW91dCBzdHlsZTsgKi9cbiAgY3Vyc29yOiBncmFiO1xuICB0b3VjaC1hY3Rpb246IHBhbi14O1xuICBmbGV4OiA0IDEgMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/trackhistory/trackhistory.page.ts":
/*!***************************************************!*\
  !*** ./src/app/trackhistory/trackhistory.page.ts ***!
  \***************************************************/
/*! exports provided: TrackhistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackhistoryPage", function() { return TrackhistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



var TrackhistoryPage = /** @class */ (function () {
    function TrackhistoryPage() {
    }
    TrackhistoryPage.prototype.ngOnInit = function () {
        this.headerText = JSON.parse(localStorage.selectedVin).plateNo;
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["app"].appName;
    };
    TrackhistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trackhistory',
            template: __webpack_require__(/*! raw-loader!./trackhistory.page.html */ "./node_modules/raw-loader/index.js!./src/app/trackhistory/trackhistory.page.html"),
            styles: [__webpack_require__(/*! ./trackhistory.page.scss */ "./src/app/trackhistory/trackhistory.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TrackhistoryPage);
    return TrackhistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=trackhistory-trackhistory-module-es5.js.map