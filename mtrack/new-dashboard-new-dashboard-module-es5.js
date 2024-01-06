(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-dashboard-new-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/new-dashboard/new-dashboard.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/new-dashboard/new-dashboard.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" class=\"appheader\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-row>\r\n      <ion-col class=\"verticalCenter\" size=\"3\">\r\n        <ion-icon\r\n          class=\"iconXXXlarge\"\r\n          (click)=\"openProfile()\"\r\n          name=\"contact\"\r\n        ></ion-icon>\r\n      </ion-col>\r\n      <ion-col class=\"userStyle\">\r\n        <ion-label>{{companyName}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"box\">\r\n    <ion-row>\r\n      <ion-col *ngFor=\"let count of countRow\">\r\n        <ion-card (click)=\"openAssertModal(count)\" class=\"ion-card\">\r\n          <ion-card-content class=\"fixline\">\r\n            <ion-row class=\"countSize rowCenter dealerfont\">\r\n              {{countRowData[count]}}\r\n            </ion-row>\r\n            <ion-row class=\"rowCenter dealerfont capitial bold\">\r\n              {{count}}\r\n            </ion-row>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-row>\r\n    <ion-col\r\n      size=\"6\"\r\n      size-sm=\"6\"\r\n      size-lg=\"3\"\r\n      size-md=\"4\"\r\n      *ngFor=\"let dashboardCard of \r\n      dashboardColData\"\r\n    >\r\n      <ion-card\r\n        [routerLink]=\"[dashboardRouter[dashboardCard]]\"\r\n        style=\"border-radius: 25px\"\r\n        class=\"ionCard borderAndRadius\"\r\n      >\r\n        <ion-card-content>\r\n          <ion-row class=\"rowCenter\">\r\n            <ion-icon\r\n              style=\"font-size: 60px\"\r\n              [name]=\"dashboardColSvg[dashboardCard]\"\r\n            ></ion-icon>\r\n          </ion-row>\r\n          <ion-row class=\"rowCenter\"> {{dashboardCard}} </ion-row>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/delar-application/new-dashboard/new-dashboard.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/delar-application/new-dashboard/new-dashboard.module.ts ***!
  \*************************************************************************/
/*! exports provided: NewDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDashboardPageModule", function() { return NewDashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/fesm5/ng-circle-progress.js");
/* harmony import */ var _new_dashboard_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-dashboard.page */ "./src/app/delar-application/new-dashboard/new-dashboard.page.ts");
/* harmony import */ var _dealer_component_dealer_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dealer-component/dealer-component.module */ "./src/app/delar-application/dealer-component/dealer-component.module.ts");








// import { AssertStatusListPage } from './assert-status-list/assert-status-list.page'

// const assertModal: Routes = [
//   {
//     path: '',
//     component:  AssertStatusListPage
//   },
// ];
var NewDashboardPageModule = /** @class */ (function () {
    function NewDashboardPageModule() {
    }
    NewDashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _dealer_component_dealer_component_module__WEBPACK_IMPORTED_MODULE_8__["DealerComponentsModule"],
                ng_circle_progress__WEBPACK_IMPORTED_MODULE_6__["NgCircleProgressModule"].forRoot({
                    // set defaults here
                    "radius": 60,
                    "space": -10,
                    "outerStrokeGradient": true,
                    "outerStrokeWidth": 10,
                    "outerStrokeColor": "#4882c2",
                    "outerStrokeGradientStopColor": "#53a9ff",
                    "innerStrokeColor": "#e7e8ea",
                    "innerStrokeWidth": 10,
                    "animateTitle": false,
                    "animationDuration": 1000,
                    "showInnerStroke": true,
                    "showUnits": false,
                    "showBackground": false,
                    "clockwise": false,
                    "startFromZero": false
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _new_dashboard_page__WEBPACK_IMPORTED_MODULE_7__["NewDashboardPage"]
                    }
                ]),
            ],
            declarations: [_new_dashboard_page__WEBPACK_IMPORTED_MODULE_7__["NewDashboardPage"]]
        })
    ], NewDashboardPageModule);
    return NewDashboardPageModule;
}());

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';
// import { NewDashboardPageRoutingModule } from './new-dashboard-routing.module';
// import { NewDashboardPage } from './new-dashboard.page';
// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     IonicModule,
//     NewDashboardPageRoutingModule
//   ],
//   declarations: [NewDashboardPage]
// })
// export class NewDashboardPageModule {}


/***/ }),

/***/ "./src/app/delar-application/new-dashboard/new-dashboard.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/delar-application/new-dashboard/new-dashboard.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".boxx {\n  background-color: #f0f4fd;\n}\n\n.in-card {\n  border-radius: 40px;\n}\n\nion-avatar {\n  border-radius: 40%;\n}\n\n.box {\n  background: #6a52ee;\n  border-radius: 15px 15px 0px 0px;\n}\n\n.ion-card {\n  text-align: bottom;\n  background: #7d67f8;\n  border-radius: 15px 15px 15px 15px;\n}\n\n.fixline {\n  height: 70px;\n  font-size: smaller;\n  color: white;\n  padding: 12px;\n  text-align: center;\n}\n\n.boxs {\n  background: #ffffff;\n  border-radius: 15px 15px 0px 0px;\n  position: relative;\n  margin-top: -10px;\n}\n\n.ion-cards {\n  background: rgba(255, 255, 255, 0.137);\n  border-radius: 80px 80px 80px 80px;\n  margin-left: 20px;\n}\n\n.fixlines {\n  height: 70px;\n  font-size: smaller;\n  color: white;\n  padding: 12px;\n  text-align: center;\n}\n\n.userStyle {\n  align-self: center;\n  font-family: sans-serif;\n  text-transform: uppercase;\n  font-size: large;\n  font-weight: bold;\n}\n\n.iconXXXlarge {\n  font-size: xxx-large;\n}\n\n.verticalCenter {\n  text-align: center;\n  align-self: center;\n  font-family: sans-serif;\n  text-transform: uppercase;\n  font-size: large;\n  font-weight: bold;\n}\n\n.countSize {\n  font-size: large;\n  font-weight: bolder;\n  font-family: sans-serif;\n}\n\n.rowCenter {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.capitial {\n  text-transform: uppercase;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.borderAndRadius {\n  border-radius: 25px;\n  border: 2px solid #73737345;\n}\n\n.ionCard {\n  --background: var(--ion-item-background, transparent);\n  --color: var(--ion-color-step-550, #737373);\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border-radius: 4px;\n  font-size: 14px;\n  box-shadow: 0 3px 1px -2px white, 0 2px 2px 0 #fffdfd, 0 1px 5px 0 white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vbmV3LWRhc2hib2FyZC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxuZXctZGFzaGJvYXJkXFxuZXctZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vbmV3LWRhc2hib2FyZC9uZXctZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QkE7RUFDRSx5QkFBQTtBQ3RCRjs7QUR3QkE7RUFDRSxtQkFBQTtBQ3JCRjs7QUR3QkE7RUFDRSxrQkFBQTtBQ3JCRjs7QUR3QkE7RUFDRSxtQkFBQTtFQUNBLGdDQUFBO0FDckJGOztBRHVCQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQ3BCRjs7QURzQkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDbkJGOztBRHFCQTtFQUNFLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDbEJGOztBRG9CQTtFQUNFLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtBQ2pCRjs7QURvQkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDakJGOztBRG9CQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNqQkY7O0FEb0JBO0VBQ0Usb0JBQUE7QUNqQkY7O0FEb0JBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDakJGOztBRG9CQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2pCRjs7QURvQkE7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FDakJGOztBRG9CQTtFQUNFLHlCQUFBO0FDakJGOztBRG1CQTtFQUNFLGlCQUFBO0FDaEJGOztBRG1CQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUNoQkY7O0FEbUJBO0VBQ0UscURBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBR0Esd0VBQUE7QUNqQkYiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9uZXctZGFzaGJvYXJkL25ldy1kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWNhcmQtY29udGVudCB7XHJcbi8vICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4vLyAgICAgd2lkdGg6MTAwcHg7XHJcbi8vICAgfVxyXG4vLyAgIGlvbi1jYXJkLXRpdGxle1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgZm9udC1zaXplOjEycHg7XHJcbi8vICAgICBmb250LXdlaWdodDpib2xkO1xyXG4vLyAgIH1cclxuLy8gICAuY2lyY2xle1xyXG4vLyAgICAgd2lkdGg6IDEwMHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAxMDBweDtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxuLy8gICB9XHJcbi8vICAgaW9uLWNhcmR7XHJcbi8vICAgICB3aWR0aDogMTIwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDEyMnB4O1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuLy8gICB9XHJcbi8vICAgaW9uLWNhcmQtaGVhZGVye1xyXG4vLyAgICAgcGFkZGluZzogMS41cHg7XHJcbi8vICAgfVxyXG4uYm94eCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjRmZDtcclxufVxyXG4uaW4tY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxufVxyXG5cclxuaW9uLWF2YXRhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNDAlO1xyXG59XHJcblxyXG4uYm94IHtcclxuICBiYWNrZ3JvdW5kOiAjNmE1MmVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwcHggMHB4O1xyXG59XHJcbi5pb24tY2FyZCB7XHJcbiAgdGV4dC1hbGlnbjogYm90dG9tO1xyXG4gIGJhY2tncm91bmQ6ICM3ZDY3Zjg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMTVweDtcclxufVxyXG4uZml4bGluZSB7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJveHMge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDBweCAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcbi5pb24tY2FyZHMge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMzcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDgwcHggODBweCA4MHB4IDgwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5maXhsaW5lcyB7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi51c2VyU3R5bGUge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pY29uWFhYbGFyZ2Uge1xyXG4gIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xyXG59XHJcblxyXG4udmVydGljYWxDZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY291bnRTaXplIHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5yb3dDZW50ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2FwaXRpYWwge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmJvbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYm9yZGVyQW5kUmFkaXVzIHtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM3MzczNzM0NTtcclxufVxyXG5cclxuLmlvbkNhcmQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdHJhbnNwYXJlbnQpO1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwgIzczNzM3Myk7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiKDI1NSwgMjU1LCAyNTUpLFxyXG4gICAgMCAycHggMnB4IDAgcmdiKDI1NSwgMjU1LCAyNTUpLCAwIDFweCA1cHggMCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgyNTUsIDI1NSwgMjU1KSxcclxuICAgIDAgMnB4IDJweCAwIHJnYmEoMjU1LCAyNTMsIDI1MyksIDAgMXB4IDVweCAwIHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG4iLCIuYm94eCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY0ZmQ7XG59XG5cbi5pbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIGJvcmRlci1yYWRpdXM6IDQwJTtcbn1cblxuLmJveCB7XG4gIGJhY2tncm91bmQ6ICM2YTUyZWU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwcHggMHB4O1xufVxuXG4uaW9uLWNhcmQge1xuICB0ZXh0LWFsaWduOiBib3R0b207XG4gIGJhY2tncm91bmQ6ICM3ZDY3Zjg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDE1cHg7XG59XG5cbi5maXhsaW5lIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICBmb250LXNpemU6IHNtYWxsZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm94cyB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwcHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG4uaW9uLWNhcmRzIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzNyk7XG4gIGJvcmRlci1yYWRpdXM6IDgwcHggODBweCA4MHB4IDgwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uZml4bGluZXMge1xuICBoZWlnaHQ6IDcwcHg7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51c2VyU3R5bGUge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmljb25YWFhsYXJnZSB7XG4gIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xufVxuXG4udmVydGljYWxDZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY291bnRTaXplIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbi5yb3dDZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhcGl0aWFsIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJvcmRlckFuZFJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM3MzczNzM0NTtcbn1cblxuLmlvbkNhcmQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHRyYW5zcGFyZW50KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCAjNzM3MzczKTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggd2hpdGUsIDAgMnB4IDJweCAwIHdoaXRlLCAwIDFweCA1cHggMCB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggd2hpdGUsIDAgMnB4IDJweCAwICNmZmZkZmQsIDAgMXB4IDVweCAwIHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/new-dashboard/new-dashboard.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/delar-application/new-dashboard/new-dashboard.page.ts ***!
  \***********************************************************************/
/*! exports provided: NewDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDashboardPage", function() { return NewDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var NewDashboardPage = /** @class */ (function () {
    function NewDashboardPage(router, commonService, menuController, platform) {
        this.router = router;
        this.commonService = commonService;
        this.menuController = menuController;
        this.platform = platform;
        this.dashboardColData = [
            "Company",
            "Subscription",
            "Sales report",
            "Company creation",
            "Dealer creation",
            "Vehicle creation",
            "Device activation",
        ];
        this.countRow = ["Total", "Stocks", "Expiry"];
        this.dashboardColSvg = {
            Company: "business",
            Subscription: "list-box",
            "Sales report": "logo-buffer",
            "Company creation": "albums",
            "Dealer creation": "people",
            "Vehicle creation": "car",
            "Device activation": "card",
            "Esim Menus": "folder",
        };
        this.dashboardRouter = {
            Company: "/tabs-login/dashboard",
            Subscription: "/tabs-login/subscription",
            "Sales report": "/tabs-login/sales-report",
            "Company creation": "/tabs-login/dashboard/add-company",
            "Dealer creation": "/tabs-login/add-delar",
            "Vehicle creation": "/tabs-login/vehicle-creation",
            "Device activation": "/tabs-login/device-activation",
            "Esim Menus": "/tabs-login/esim-dashboard",
        };
        this.countRowData = {
            Total: 0,
            Expiry: 0,
            Stocks: 0,
        };
    }
    NewDashboardPage.prototype.openProfile = function () {
        this.router.navigateByUrl("profile-detail");
    };
    NewDashboardPage.prototype.openAssertModal = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data == "Total")
                    data = "All";
                if (data != "Stocks")
                    this.router.navigateByUrl("/assert-status-list/" + data);
                else
                    this.router.navigateByUrl("/stocks");
                return [2 /*return*/];
            });
        });
    };
    NewDashboardPage.prototype.ngOnInit = function () {
        localStorage.getItem("userName") == "apm-sa" &&
            this.dashboardColData.push("Esim Menus");
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.menuController.enable(true);
        this.commonService.dismissLoader();
        // localStorage.setItem("dealerLoginData", JSON.stringify({"companyId":"jana","password":"12345","mainmenu":"[\"Company\",\"CompanyCreation\",\"VehicleCreation\",\"DealerCreation\",\"DeviceActivation\",\"StockUploader\",\"Command\",\"Stocks\",\"Profile\",\"Log-out\"]","assets":{"Stocks":[{"additional_simcard1":"---","serverTimeStamp":"---","companyId":"---","simcardNo":"6565","imeiNo":"654655","warrantyExpiryDate":"---","plateNo":"---","icon":"---","vin":"---","currentAgency":"414"}],"All":[{"additional_simcard1":"---","serverTimeStamp":"---","companyId":"vechicletesting","simcardNo":"103103103103103","imeiNo":"103103103103103","warrantyExpiryDate":"2021-10-04","plateNo":"12458","icon":"COMPRESSORS","vin":"jana545","currentAgency":"414"},{"additional_simcard1":"---","serverTimeStamp":"---","companyId":"testingapm","simcardNo":"104104104104104","imeiNo":"104104104104104","warrantyExpiryDate":"2019-01-16","plateNo":"45854","icon":"DEEPSEA GENERATOR","vin":"jana566","currentAgency":"414"},{"additional_simcard1":"---","serverTimeStamp":"2020-11-10 13:04:40.0","companyId":"entry","simcardNo":"107107107107107","imeiNo":"107107107107107","warrantyExpiryDate":"2021-10-04","plateNo":"1445","icon":"REFRIGERATOR","vin":"jana809","currentAgency":"414"},{"additional_simcard1":"---","serverTimeStamp":"---","companyId":"entry","simcardNo":"108108108108108","imeiNo":"108108108108108","warrantyExpiryDate":"2021-10-04","plateNo":"---","icon":"---","vin":"---","currentAgency":"414"},{"additional_simcard1":"---","serverTimeStamp":"2020-11-05 16:00:48.0","companyId":"entry","simcardNo":"109109109109109","imeiNo":"109109109109109","warrantyExpiryDate":"2021-10-04","plateNo":"4550","icon":"COMPRESSORS","vin":"jana572","currentAgency":"414"},{"additional_simcard1":"---","serverTimeStamp":"---","companyId":"---","simcardNo":"6565","imeiNo":"654655","warrantyExpiryDate":"---","plateNo":"---","icon":"---","vin":"---","currentAgency":"414"},{"additional_simcard1":"","serverTimeStamp":"2020-12-26 15:55:39.0","companyId":"cdac","simcardNo":"10789698761","imeiNo":"861551046267076","warrantyExpiryDate":"2021-12-23","plateNo":"861551046267076","icon":"CAR","vin":"cdac901","currentAgency":"414"}],"Offline":[{"additional_simcard1":"---","serverTimeStamp":"---","companyId":"vechicletesting","simcardNo":"103103103103103","imeiNo":"103103103103103","warrantyExpiryDate":"2021-10-04","plateNo":"12458","icon":"COMPRESSORS","vin":"jana545","currentAgency":"414"},{"additional_simcard1":"---","serverTimeStamp":"---","companyId":"testingapm","simcardNo":"104104104104104","imeiNo":"104104104104104","warrantyExpiryDate":"2019-01-16","plateNo":"45854","icon":"DEEPSEA GENERATOR","vin":"jana566","currentAgency":"414"},{"additional_simcard1":"---","serverTimeStamp":"2020-11-10 13:04:40.0","companyId":"entry","simcardNo":"107107107107107","imeiNo":"107107107107107","warrantyExpiryDate":"2021-10-04","plateNo":"1445","icon":"REFRIGERATOR","vin":"jana809","currentAgency":"414"},{"additional_simcard1":"---","serverTimeStamp":"2020-11-05 16:00:48.0","companyId":"entry","simcardNo":"109109109109109","imeiNo":"109109109109109","warrantyExpiryDate":"2021-10-04","plateNo":"4550","icon":"COMPRESSORS","vin":"jana572","currentAgency":"414"}],"Online":[{"additional_simcard1":"","serverTimeStamp":"2020-12-26 15:55:39.0","companyId":"cdac","simcardNo":"10789698761","imeiNo":"861551046267076","warrantyExpiryDate":"2021-12-23","plateNo":"861551046267076","icon":"CAR","vin":"cdac901","currentAgency":"414"}],"Expiry":[{"additional_simcard1":"---","serverTimeStamp":"---","companyId":"testingapm","simcardNo":"104104104104104","imeiNo":"104104104104104","warrantyExpiryDate":"2019-01-16","plateNo":"45854","icon":"DEEPSEA GENERATOR","vin":"jana566","currentAgency":"414"}]},"companySuffix":"414","companyName":"JANA","logo":"http://kingstrackimages.s3.amazonaws.com/Company/m021.png","username":"janakumar"}))
        this.dasboardDetail = JSON.parse(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["adminLocalStorage"].dealerLoginData);
        this.companyName = this.dasboardDetail.companyName;
        this.countRowData = {
            Total: this.dasboardDetail.assets["All"].length,
            Expiry: this.dasboardDetail.assets["Expiry"].length,
            Stocks: this.dasboardDetail.assets["Stocks"].length,
        };
        if (this.myPlatform == "desktop") {
            this.countRow = ["Total", "Online", "Offline", "Stocks", "Expiry"];
            this.countRowData["Online"] = this.dasboardDetail.assets["Online"].length;
            this.countRowData["Offline"] =
                this.dasboardDetail.assets["Offline"].length;
        }
    };
    NewDashboardPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
    ]; };
    NewDashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-new-dashboard",
            template: __webpack_require__(/*! raw-loader!./new-dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/new-dashboard/new-dashboard.page.html"),
            styles: [__webpack_require__(/*! ./new-dashboard.page.scss */ "./src/app/delar-application/new-dashboard/new-dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], NewDashboardPage);
    return NewDashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=new-dashboard-new-dashboard-module-es5.js.map