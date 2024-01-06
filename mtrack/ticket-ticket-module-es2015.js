(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ticket-ticket-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ticket/ticket.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ticket/ticket.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" class=\"appHeader\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row *ngIf=\"myPlatform != 'desktop'\" >\r\n              <ion-col size=\"2\">\r\n                <!-- <ion-icon name=\"arrow-back\"  (click)=\"getBack()\"></ion-icon> -->\r\n                <ion-menu-button></ion-menu-button>\r\n              </ion-col>\r\n             <ion-col size=\"8\">\r\n              <ion-title style=\"font-size: 20px;font-weight: bold;\">Tickets </ion-title>\r\n             </ion-col>\r\n             <ion-col size=\"2\">\r\n               <!-- <ion-icon name=\"add-circle\" class=\"add-icon\" (click)=\"openModel()\"></ion-icon> -->\r\n             </ion-col>\r\n          </ion-row>\r\n         \r\n         \r\n          <ion-row *ngIf=\"myPlatform == 'desktop'\">\r\n            <ion-col size='2'>\r\n              <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <ion-label class=\"headercolour\"> Tickets </ion-label>\r\n            </ion-col>\r\n          \r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>  \r\n</ion-header>\r\n\r\n<ion-content>\r\n<app-ticket-card ></app-ticket-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/ticket/ticket.module.ts":
/*!*****************************************!*\
  !*** ./src/app/ticket/ticket.module.ts ***!
  \*****************************************/
/*! exports provided: TicketPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketPageModule", function() { return TicketPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ticket_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ticket.page */ "./src/app/ticket/ticket.page.ts");








const routes = [
    {
        path: '',
        component: _ticket_page__WEBPACK_IMPORTED_MODULE_7__["TicketPage"]
    }
];
let TicketPageModule = class TicketPageModule {
};
TicketPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        // entryComponents:[ConversationTabPage],
        declarations: [_ticket_page__WEBPACK_IMPORTED_MODULE_7__["TicketPage"]]
    })
], TicketPageModule);



/***/ }),

/***/ "./src/app/ticket/ticket.page.scss":
/*!*****************************************!*\
  !*** ./src/app/ticket/ticket.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-icon {\n  color: white;\n  background: gray;\n  padding: 5px;\n  font-size: 16px;\n  border-radius: 15px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlja2V0L0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcdGlja2V0XFx0aWNrZXQucGFnZS5zY3NzIiwic3JjL2FwcC90aWNrZXQvdGlja2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90aWNrZXQvdGlja2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtaWNvbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59IiwiLmFkZC1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBncmF5O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/ticket/ticket.page.ts":
/*!***************************************!*\
  !*** ./src/app/ticket/ticket.page.ts ***!
  \***************************************/
/*! exports provided: TicketPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketPage", function() { return TicketPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let TicketPage = class TicketPage {
    constructor(platform, modalController, location) {
        this.platform = platform;
        this.modalController = modalController;
        this.location = location;
    }
    getBack() {
        this.location.back();
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
        this.sub = localStorage.getItem('subject');
    }
};
TicketPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
TicketPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ticket',
        template: __webpack_require__(/*! raw-loader!./ticket.page.html */ "./node_modules/raw-loader/index.js!./src/app/ticket/ticket.page.html"),
        styles: [__webpack_require__(/*! ./ticket.page.scss */ "./src/app/ticket/ticket.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
], TicketPage);



/***/ })

}]);
//# sourceMappingURL=ticket-ticket-module-es2015.js.map