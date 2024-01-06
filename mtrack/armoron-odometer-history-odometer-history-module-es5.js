(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["armoron-odometer-history-odometer-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/armoron/odometer-history/odometer-history.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/armoron/odometer-history/odometer-history.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"header\">\r\n    <ion-grid >\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row *ngIf=\"myPlatform != 'desktop'\">\r\n            <ion-col size=\"2\">\r\n               <ion-icon name=\"arrow-back\" (click)=\"closeModel()\" id=\"back_icon\"></ion-icon>\r\n            </ion-col>\r\n           <ion-col size=\"8\">\r\n            <ion-label class=\"label_head\">Odometer History</ion-label>\r\n           </ion-col>  \r\n        </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>  \r\n</ion-header>\r\n<ion-content>\r\n  <ion-row id=\"head_border\">\r\n    <ion-col size=6 class=\"label_head\">Date</ion-col>\r\n    <ion-col size=6 class=\"odometer_head label_head\">Odometer</ion-col>\r\n  </ion-row >\r\n\r\n  <ion-row class=\"date_data\" *ngFor='let items of details' >\r\n    <ion-col size=6 >{{items.date}}</ion-col>\r\n    <ion-col size=6 class=\"odometer_head\">{{items.odometer}} km</ion-col>\r\n  </ion-row>\r\n\r\n </ion-content>"

/***/ }),

/***/ "./src/app/armoron/odometer-history/odometer-history.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/armoron/odometer-history/odometer-history.module.ts ***!
  \*********************************************************************/
/*! exports provided: OdometerHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OdometerHistoryPageModule", function() { return OdometerHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _odometer_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./odometer-history.page */ "./src/app/armoron/odometer-history/odometer-history.page.ts");







var routes = [
    {
        path: '',
        component: _odometer_history_page__WEBPACK_IMPORTED_MODULE_6__["OdometerHistoryPage"]
    }
];
var OdometerHistoryPageModule = /** @class */ (function () {
    function OdometerHistoryPageModule() {
    }
    OdometerHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_odometer_history_page__WEBPACK_IMPORTED_MODULE_6__["OdometerHistoryPage"]]
        })
    ], OdometerHistoryPageModule);
    return OdometerHistoryPageModule;
}());



/***/ }),

/***/ "./src/app/armoron/odometer-history/odometer-history.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/armoron/odometer-history/odometer-history.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  --background:#f6b221;\n  --color:black;\n}\n\n#back_icon {\n  font-size: 22px;\n}\n\n.label_head {\n  font-weight: bold;\n}\n\n#head_border {\n  border: 1px solid;\n  margin: 5px 10px 0px 10px;\n}\n\n.odometer_head {\n  border-left: 2px solid;\n}\n\n.date_data {\n  border: 1px solid;\n  margin: 2px 10px 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJtb3Jvbi9vZG9tZXRlci1oaXN0b3J5L0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcYXJtb3Jvblxcb2RvbWV0ZXItaGlzdG9yeVxcb2RvbWV0ZXItaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL2FybW9yb24vb2RvbWV0ZXItaGlzdG9yeS9vZG9tZXRlci1oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9CQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREVBO0VBRUksZUFBQTtBQ0FKOztBREVBO0VBRUksaUJBQUE7QUNBSjs7QURFQTtFQUVJLGlCQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURFQTtFQUVJLHNCQUFBO0FDQUo7O0FERUE7RUFFSSxpQkFBQTtFQUNBLHlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hcm1vcm9uL29kb21ldGVyLWhpc3Rvcnkvb2RvbWV0ZXItaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDojZjZiMjIxO1xyXG4gICAgLS1jb2xvcjpibGFjaztcclxufVxyXG4jYmFja19pY29uXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4ubGFiZWxfaGVhZFxyXG57XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4jaGVhZF9ib3JkZXJcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW46IDVweCAxMHB4IDBweCAxMHB4O1xyXG59XHJcbi5vZG9tZXRlcl9oZWFkXHJcbntcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQ7XHJcbn1cclxuLmRhdGVfZGF0YVxyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIG1hcmdpbjogMnB4IDEwcHggMHB4IDEwcHg7XHJcbn0iLCIuaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiNmNmIyMjE7XG4gIC0tY29sb3I6YmxhY2s7XG59XG5cbiNiYWNrX2ljb24ge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5sYWJlbF9oZWFkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNoZWFkX2JvcmRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW46IDVweCAxMHB4IDBweCAxMHB4O1xufVxuXG4ub2RvbWV0ZXJfaGVhZCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQ7XG59XG5cbi5kYXRlX2RhdGEge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgbWFyZ2luOiAycHggMTBweCAwcHggMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/armoron/odometer-history/odometer-history.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/armoron/odometer-history/odometer-history.page.ts ***!
  \*******************************************************************/
/*! exports provided: OdometerHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OdometerHistoryPage", function() { return OdometerHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var OdometerHistoryPage = /** @class */ (function () {
    function OdometerHistoryPage(modalController, location, ajaxService) {
        this.modalController = modalController;
        this.location = location;
        this.ajaxService = ajaxService;
    }
    OdometerHistoryPage.prototype.closeModel = function () {
        this.location.back();
    };
    OdometerHistoryPage.prototype.ionViewWillEnter = function () {
        console.log('as');
    };
    OdometerHistoryPage.prototype.getDatas = function () {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/device/new/odometerdetails?vin=' + this.selectedVin;
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.details = res.odometer;
        });
    };
    OdometerHistoryPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.selectedVin = JSON.parse(localStorage.getItem('selectedVin')).vin;
            console.log(_this.selectedVin);
            _this.getDatas();
        }, 1000);
    };
    OdometerHistoryPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] }
    ]; };
    OdometerHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-odometer-history',
            template: __webpack_require__(/*! raw-loader!./odometer-history.page.html */ "./node_modules/raw-loader/index.js!./src/app/armoron/odometer-history/odometer-history.page.html"),
            styles: [__webpack_require__(/*! ./odometer-history.page.scss */ "./src/app/armoron/odometer-history/odometer-history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"]])
    ], OdometerHistoryPage);
    return OdometerHistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=armoron-odometer-history-odometer-history-module-es5.js.map