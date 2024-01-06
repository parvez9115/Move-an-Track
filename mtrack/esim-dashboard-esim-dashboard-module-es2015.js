(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esim-dashboard-esim-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-dashboard/esim-dashboard.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-dashboard/esim-dashboard.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-row class=\"toolbar\">\n      <ion-col size=\"8\">\n        <ion-title>Esim Menus</ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row *ngIf=\"myPlatform != 'desktop'\">\n      <ion-col\n        *ngFor=\"let p of menuObject\"\n        class=\"itemWeb\"\n        lines=\"none\"\n        (click)=\"logOutFunction(p)\"\n        [ngClass]=\"[\n                  p == selectedMenu\n                    ? isDealer == true\n                      ? 'activeDealer'\n                      : 'active'\n                    : ''\n                ]\"\n        class=\"grid-item\"\n        size=\"11\"\n      >\n        <ion-icon class=\"iconWebSize\" [name]=\"appIcon[p]\"></ion-icon>\n        <ion-label> {{ p }} </ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"myPlatform == 'desktop'\">\n      <ion-col\n        *ngFor=\"let p of menuObject\"\n        class=\"itemWeb\"\n        lines=\"none\"\n        (click)=\"logOutFunction(p)\"\n        [ngClass]=\"[\n                  p == selectedMenu\n                    ? isDealer == true\n                      ? 'activeDealer'\n                      : 'active'\n                    : ''\n                ]\"\n        class=\"grid-item\"\n        size=\"2.75\"\n        size-md=\"2.7\"\n        size-lg=\"2.75\"\n      >\n        <ion-icon class=\"iconWebSize\" [name]=\"appIcon[p]\"></ion-icon>\n        <ion-label> {{ p }} </ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/esim-dashboard/esim-dashboard.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/delar-application/esim-dashboard/esim-dashboard.module.ts ***!
  \***************************************************************************/
/*! exports provided: EsimDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimDashboardPageModule", function() { return EsimDashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _esim_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esim-dashboard.page */ "./src/app/delar-application/esim-dashboard/esim-dashboard.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");








const routes = [
    {
        path: "",
        component: _esim_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["EsimDashboardPage"],
    },
];
let EsimDashboardPageModule = class EsimDashboardPageModule {
};
EsimDashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_esim_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["EsimDashboardPage"]],
    })
], EsimDashboardPageModule);



/***/ }),

/***/ "./src/app/delar-application/esim-dashboard/esim-dashboard.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/delar-application/esim-dashboard/esim-dashboard.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-item {\n  background-color: #eeeeee;\n  border: solid 3px #d9d9d9;\n  text-align: center;\n  color: #737373;\n  font-size: 16px;\n  height: 100px;\n  margin: 10px;\n  width: 100px;\n  border-radius: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  cursor: pointer;\n}\n\n.grid-item:hover {\n  background-color: #ffffff;\n  border: solid 3px #7d67f8;\n  box-shadow: -5px 5px 10px #7d67f8;\n  color: #000000;\n}\n\n.nodata-wrapper {\n  height: 120vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.nodatahide {\n  display: none;\n}\n\n@media only screen and (min-width: 300px) and (max-width: 650px) {\n  .nodata-wrapper {\n    width: auto;\n    margin-top: 49%;\n    zoom: 33%;\n  }\n}\n\n@media only screen and (min-width: 651px) and (max-width: 1023px) {\n  .nodata-wrapper {\n    width: 49%;\n    margin: 12% auto;\n    zoom: 40%;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .nodata-wrapper {\n    width: 49%;\n    margin: 10% auto;\n    zoom: 50%;\n  }\n}\n\nion-icon {\n  color: #000000;\n}\n\n.companyName {\n  color: #74788b;\n}\n\n.name {\n  font-size: 35px;\n  color: black;\n  text-transform: uppercase;\n  font-style: italic;\n  font-weight: bold;\n}\n\n.nameWeb {\n  font-size: 15px;\n  color: #74788b;\n  text-transform: uppercase;\n  font-style: italic;\n  font-weight: bold;\n}\n\nion-img {\n  width: 100%;\n  height: 90%;\n}\n\n.header {\n  padding-right: 20px;\n  color: black;\n  text-transform: uppercase;\n  font-style: italic;\n  font-weight: bold;\n}\n\n.itemMob {\n  border-bottom: 1px solid white;\n  border-radius: 0px 20px 20px 0px;\n  font-size: 14px;\n}\n\n.itemWeb {\n  border-bottom: 1px solid white;\n  border-radius: 25px 25px 25px 25px;\n  font-size: 11px;\n}\n\nion-list {\n  --color: black;\n}\n\n.iconWebSize {\n  font-size: 40px;\n}\n\n.itemWeb:hover {\n  cursor: pointer;\n}\n\n.iconMobSize {\n  font-size: 25px;\n}\n\n.name {\n  font-size: 16px;\n  color: gray;\n  text-transform: uppercase;\n  font-style: italic;\n  font-weight: bold;\n}\n\n.active {\n  --background: #6c2a84;\n  --color: rgb(66, 9, 87);\n}\n\n.activeDealer {\n  --background: #7d67f8;\n  --color: white;\n}\n\n.header {\n  margin: auto;\n  font-size: 13px;\n  color: gray;\n  font-weight: bold;\n}\n\nion-img {\n  max-width: 100%;\n  max-height: 100%;\n  display: block;\n  margin: 0 auto;\n}\n\n@media only screen and (min-width: 1024px) {\n  .split-pane-md.split-pane-visible > .split-pane-side {\n    min-width: 0px;\n    --border: none;\n  }\n\n  .menuIcon,\n.menuIconbtn {\n    display: block;\n  }\n}\n\n@media only screen and (max-width: 900px) {\n  .menuIcon,\n.menuIconbtn {\n    display: none;\n  }\n}\n\n.menuIconbtn {\n  padding: 2px;\n  font-size: 22px;\n  color: black;\n  border-radius: 13px;\n}\n\n.menuIconbtn:hover {\n  background-color: #e2dcdc;\n  cursor: pointer;\n}\n\n.helloItem {\n  --max-width: 88px;\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  flex-basis: 88px;\n}\n\n.helloItem .menu-label,\n.helloItem .header,\n.helloItem .apmLogo {\n  display: none;\n}\n\n.helloItem.menu-mouse-over {\n  --max-width: 188px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 999;\n  width: 188px;\n  background: #fff;\n}\n\n.helloItem.menu-mouse-over .menu-label,\n.helloItem.menu-mouse-over .header,\n.helloItem.menu-mouse-over .apmLogo {\n  display: block;\n}\n\n.list {\n  height: 69%;\n  overflow-y: scroll;\n}\n\n.menu-m-left {\n  margin-left: 88px;\n}\n\n.mainMenus {\n  --max-width: 130px;\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  flex-basis: 130px;\n}\n\n::-webkit-scrollbar {\n  width: 3px;\n}\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #ffffff;\n}\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: #aaaaaa;\n}\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #ff1313;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1kYXNoYm9hcmQvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcZXNpbS1kYXNoYm9hcmRcXGVzaW0tZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1kYXNoYm9hcmQvZXNpbS1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUVBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREVBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREdBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0FDQUY7O0FER0E7RUFDRTtJQUNFLFdBQUE7SUFDQSxlQUFBO0lBQ0EsU0FBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtJQUNBLFNBQUE7RUNERjtBQUNGOztBRElBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSxTQUFBO0VDRkY7QUFDRjs7QURPQTtFQUNFLGNBQUE7QUNMRjs7QURRQTtFQUNFLGNBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0xGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNMRjs7QURRQTtFQUVFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ05GOztBRFNBO0VBQ0UsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUNORjs7QURTQTtFQUNFLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FDTkY7O0FEU0E7RUFDRSxjQUFBO0FDTkY7O0FEU0E7RUFDRSxlQUFBO0FDTkY7O0FEU0E7RUFDRSxlQUFBO0FDTkY7O0FEU0E7RUFDRSxlQUFBO0FDTkY7O0FEU0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ05GOztBRFNBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtBQ05GOztBRFNBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDTkY7O0FEU0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ05GOztBRFNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNORjs7QURTQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGNBQUE7RUNORjs7RURTQTs7SUFFRSxjQUFBO0VDTkY7QUFDRjs7QURTQTtFQUNFOztJQUVFLGFBQUE7RUNQRjtBQUNGOztBRFVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNSRjs7QURXQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ1JGOztBRFdBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxnQkFBQTtBQ1JGOztBRFVFOzs7RUFHRSxhQUFBO0FDUko7O0FEWUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNURjs7QURXRTs7O0VBR0UsY0FBQTtBQ1RKOztBRGFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDVkY7O0FEYUE7RUFDRSxpQkFBQTtBQ1ZGOztBRGFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxpQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsVUFBQTtBQ1ZGOztBRGFBLFVBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQ1ZGOztBRGFBLFdBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQ1ZGOztBRGFBLG9CQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUNWRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tZGFzaGJvYXJkL2VzaW0tZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWl0ZW0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgYm9yZGVyOiBzb2xpZCAzcHggI2Q5ZDlkOTtcclxuICAvLyAgIGJveC1zaGFkb3c6IC01cHggNXB4IDEwcHggIzczNzM3MyBpbnNldDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM3MzczNzM7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZ3JpZC1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogc29saWQgM3B4ICM3ZDY3Zjg7XHJcbiAgYm94LXNoYWRvdzogLTVweCA1cHggMTBweCAjN2Q2N2Y4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4vL2luaXRpYWwgbG9hZGVyIHN0YXJ0XHJcbi5ub2RhdGEtd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMjB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ub2RhdGFoaWRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMDBweCkgYW5kKG1heC13aWR0aDo2NTBweCkge1xyXG4gIC5ub2RhdGEtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDQ5JTtcclxuICAgIHpvb206IDMzJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjY1MXB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XHJcbiAgLm5vZGF0YS13cmFwcGVyIHtcclxuICAgIHdpZHRoOiA0OSU7XHJcbiAgICBtYXJnaW46IDEyJSBhdXRvO1xyXG4gICAgem9vbTogNDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MTAyNHB4KSB7XHJcbiAgLm5vZGF0YS13cmFwcGVyIHtcclxuICAgIHdpZHRoOiA0OSU7XHJcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xyXG4gICAgem9vbTogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gaW5pdGlhbCBsb2FkZXIgZW5kXHJcblxyXG5pb24taWNvbiB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5jb21wYW55TmFtZSB7XHJcbiAgY29sb3I6ICM3NDc4OGI7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm5hbWVXZWIge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzc0Nzg4YjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW9uLWltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAxMDBweDs7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaXRlbU1vYiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLml0ZW1XZWIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMjVweCAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIC0tY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uaWNvbldlYlNpemUge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuLml0ZW1XZWI6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmljb25Nb2JTaXplIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIC0tYmFja2dyb3VuZDogIzZjMmE4NDtcclxuICAtLWNvbG9yOiByZ2IoNjYsIDksIDg3KTtcclxufVxyXG5cclxuLmFjdGl2ZURlYWxlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjN2Q2N2Y4O1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pb24taW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAuc3BsaXQtcGFuZS1tZC5zcGxpdC1wYW5lLXZpc2libGUgPiAuc3BsaXQtcGFuZS1zaWRlIHtcclxuICAgIG1pbi13aWR0aDogMHB4O1xyXG4gICAgLS1ib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubWVudUljb24sXHJcbiAgLm1lbnVJY29uYnRuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gIC5tZW51SWNvbixcclxuICAubWVudUljb25idG4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5tZW51SWNvbmJ0biB7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcclxufVxyXG5cclxuLm1lbnVJY29uYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJkY2RjO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhlbGxvSXRlbSB7XHJcbiAgLS1tYXgtd2lkdGg6IDg4cHg7XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIGZsZXgtYmFzaXM6IDg4cHg7XHJcblxyXG4gIC5tZW51LWxhYmVsLFxyXG4gIC5oZWFkZXIsXHJcbiAgLmFwbUxvZ28ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5oZWxsb0l0ZW0ubWVudS1tb3VzZS1vdmVyIHtcclxuICAtLW1heC13aWR0aDogMTg4cHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICB3aWR0aDogMTg4cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbiAgLm1lbnUtbGFiZWwsXHJcbiAgLmhlYWRlcixcclxuICAuYXBtTG9nbyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICBoZWlnaHQ6IDY5JTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5tZW51LW0tbGVmdCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDg4cHg7XHJcbn1cclxuXHJcbi5tYWluTWVudXMge1xyXG4gIC0tbWF4LXdpZHRoOiAxMzBweDtcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgZmxleC1iYXNpczogMTMwcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTcwLCAxNzAsIDE3MCk7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxOSwgMTkpO1xyXG59XHJcbiIsIi5ncmlkLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICBib3JkZXI6IHNvbGlkIDNweCAjZDlkOWQ5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNzM3MzczO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZ3JpZC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiBzb2xpZCAzcHggIzdkNjdmODtcbiAgYm94LXNoYWRvdzogLTVweCA1cHggMTBweCAjN2Q2N2Y4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLm5vZGF0YS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMjB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ub2RhdGFoaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gIC5ub2RhdGEtd3JhcHBlciB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNDklO1xuICAgIHpvb206IDMzJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTFweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAubm9kYXRhLXdyYXBwZXIge1xuICAgIHdpZHRoOiA0OSU7XG4gICAgbWFyZ2luOiAxMiUgYXV0bztcbiAgICB6b29tOiA0MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5ub2RhdGEtd3JhcHBlciB7XG4gICAgd2lkdGg6IDQ5JTtcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xuICAgIHpvb206IDUwJTtcbiAgfVxufVxuaW9uLWljb24ge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmNvbXBhbnlOYW1lIHtcbiAgY29sb3I6ICM3NDc4OGI7XG59XG5cbi5uYW1lIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5uYW1lV2ViIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzc0Nzg4YjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwJTtcbn1cblxuLmhlYWRlciB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLml0ZW1Nb2Ige1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pdGVtV2ViIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMjVweCAyNXB4O1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbmlvbi1saXN0IHtcbiAgLS1jb2xvcjogYmxhY2s7XG59XG5cbi5pY29uV2ViU2l6ZSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLml0ZW1XZWI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uTW9iU2l6ZSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLm5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiBncmF5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWN0aXZlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNmMyYTg0O1xuICAtLWNvbG9yOiByZ2IoNjYsIDksIDg3KTtcbn1cblxuLmFjdGl2ZURlYWxlciB7XG4gIC0tYmFja2dyb3VuZDogIzdkNjdmODtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkZXIge1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24taW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5zcGxpdC1wYW5lLW1kLnNwbGl0LXBhbmUtdmlzaWJsZSA+IC5zcGxpdC1wYW5lLXNpZGUge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICAgIC0tYm9yZGVyOiBub25lO1xuICB9XG5cbiAgLm1lbnVJY29uLFxuLm1lbnVJY29uYnRuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAubWVudUljb24sXG4ubWVudUljb25idG4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5tZW51SWNvbmJ0biB7XG4gIHBhZGRpbmc6IDJweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG59XG5cbi5tZW51SWNvbmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmRjZGM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlbGxvSXRlbSB7XG4gIC0tbWF4LXdpZHRoOiA4OHB4O1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtYmFzaXM6IDg4cHg7XG59XG4uaGVsbG9JdGVtIC5tZW51LWxhYmVsLFxuLmhlbGxvSXRlbSAuaGVhZGVyLFxuLmhlbGxvSXRlbSAuYXBtTG9nbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oZWxsb0l0ZW0ubWVudS1tb3VzZS1vdmVyIHtcbiAgLS1tYXgtd2lkdGg6IDE4OHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogMTg4cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uaGVsbG9JdGVtLm1lbnUtbW91c2Utb3ZlciAubWVudS1sYWJlbCxcbi5oZWxsb0l0ZW0ubWVudS1tb3VzZS1vdmVyIC5oZWFkZXIsXG4uaGVsbG9JdGVtLm1lbnUtbW91c2Utb3ZlciAuYXBtTG9nbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubGlzdCB7XG4gIGhlaWdodDogNjklO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5tZW51LW0tbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiA4OHB4O1xufVxuXG4ubWFpbk1lbnVzIHtcbiAgLS1tYXgtd2lkdGg6IDEzMHB4O1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtYmFzaXM6IDEzMHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDNweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjYWFhYWFhO1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmYxMzEzO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-dashboard/esim-dashboard.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/delar-application/esim-dashboard/esim-dashboard.page.ts ***!
  \*************************************************************************/
/*! exports provided: EsimDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimDashboardPage", function() { return EsimDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let EsimDashboardPage = class EsimDashboardPage {
    constructor(router, platform) {
        this.router = router;
        this.platform = platform;
        this.appUrl = {
            Home: "tabs-login/new-dashboard",
            Company: "tabs-login/dashboard",
            "Vehicle creation": "tabs-login/vehicle-creation",
            "Vehicle Registration": "tabs-login/vehicle-registration",
            "Dealer creation": "tabs-login/add-delar",
            "Device activation": "tabs-login/device-activation",
            "Company creation": "tabs-login/dashboard/add-company",
            Stocks: "tabs-login/stocks",
            "Stock uploader": "tabs-login/stock-uploader",
            Detach: "tabs-login/check-imei",
            Subscription: "tabs-login/subscription",
            "Inventory Details": "tabs-login/inventory-details",
            "Add Third Party Vins": "tabs-login/third-party-vin",
            "IMEI Details": "tabs-login/imei-full-details",
            "RSU ICCID Detail": "tabs-login/rsu-iccid-details",
            "Dealer Stock List": "tabs-login/dealer-stock-list",
            "Log-out": "tabs-login/members/login",
            "Esim Dashbord": "tabs-login/esim-dashboards",
            "Monitoring Dashbord": "tabs-login/esim-home",
            "Esim Purchase Invoice Details": "tabs-login/esim-purchase-details",
            "Esim Detail": "tabs-login/esim-details",
            "Device Production": "tabs-login/esim-production-detail",
            "Device Sales Invoice Details": "tabs-login/esim-sales-invoice-details",
            "Product Delivery Details": "tabs-login/esim-sales-detail",
            "Device Transport Details": "tabs-login/esim-transport-details",
            "Commercial Activation Request": "tabs-login/esim-dealer-detail",
            "Renewal Request": "tabs-login/esim-renewal",
            "Device CA Request": "tabs-login/esim-ca-request",
            "Device Renewal Request": "tabs-login/esim-device-renewal-request",
            "Device CA Status Update": "tabs-login/esim-ca-report",
            "Device Renewal Status Update": "tabs-login/esim-renewal-status-update",
            "Customer CA Status": "tabs-login/esim-customer-ca-details",
            "Devices Detail Update": "tabs-login/esim-device-detail-update",
            "Device Return Details": "tabs-login/device-return-details",
            "Device Replace Details": "tabs-login/device-replace-details",
            "Device Status Update": "tabs-login/device-status-update",
            "Delear IMEI Check": "tabs-login/dealer-imeicheck-details",
            "Device Topup Invoice Details": "tabs-login/device-topup-invoice-details",
            "Topup Request": "tabs-login/device-topup-request-details",
            "Device Topup Request": "tabs-login/device-topup-request",
            "Device Topup Status Update": "tabs-login/device-topup-status-update",
            "Device Extend One Year Request": "tabs-login/device-extend-one-year-request",
            "Device Extend One Year Invoice Details": "tabs-login/device-extend-oneyear-invoice-details",
            "Extend One Year Request": "tabs-login/device-extend-oneyear-request-details",
            "Device Extend One Year Status Update": "tabs-login/device-extend-status-update",
            "Device Certificate Invoice Details": "tabs-login/device-certificate-invoice-details",
            "BSNL Certificate Request": "tabs-login/esim-bsnl-certificate",
            "Certificate Request": "tabs-login/device-certificate-request",
            "Dealer Hierarchy": "tabs-login/dealer-hierarchy",
            "Device Renewal Invoice Details": "tabs-login/device-renewal-invoice-details",
            "Device Activation History": "tabs-login/device-activation-history",
            "Certificate creation": "tabs-login/certificate",
            "Dealer Vehicle Assign": "tabs-login/dealer-vehicle-assign",
            "Esim Zoho Books Products": "tabs-login/zoho-books-products",
            "Esim Zoho Books Customers": "tabs-login/zoho-books-customers",
            "Esim Change Password": "tabs-login/esim-change-password",
            "Sim Provider Change": "tabs-login/sim-change-provider",
        };
        this.appIcon = {
            Home: "home",
            Company: "business",
            "Vehicle creation": "car",
            "Vehicle Registration": "clipboard",
            "Dealer creation": "people",
            "Device activation": "today",
            "Company creation": "logo-buffer",
            Stocks: "stats",
            "Stock uploader": "cloud-upload",
            "Dealer Stock List": "bookmarks",
            "Log-out": "log-out",
            Detach: "send",
            Subscription: "create",
            "Certificate creation": "ribbon",
            "Dealer Vehicle Assign": "shuffle",
            "Dealer List": "warning",
            "Sim Validity Detail": "cellular",
            "Inventory Details": "cube",
            "Add Third Party Vins": "exit",
            "IMEI Details": "mail-open",
            "RSU ICCID Detail": "stats",
            "Monitoring Dashbord": "home",
            "Esim Dashbord": "trending-up",
            "Esim Purchase Invoice Details": "appstore",
            "Esim Detail": "document",
            "Device Production": "cog",
            "Device Sales Invoice Details": "trending-up",
            "Product Delivery Details": "construct",
            "Device Transport Details": "airplane",
            "Commercial Activation Request": "people",
            "Device Renewal Invoice Details": "shuffle",
            "Renewal Request": "refresh",
            "Device CA Request": "mail-unread",
            "Device Renewal Request": "shuffle",
            "Device CA Status Update": "ios-clipboard",
            "Device Renewal Status Update": "create",
            "Customer CA Status": "contacts",
            "Device Return Details": "construct",
            "Device Replace Details": "repeat",
            "Device Status Update": "trending-up",
            "Devices Detail Update": "sync",
            "Delear IMEI Check": "cog",
            "Device Topup Invoice Details": "mail-open",
            "Topup Request": "refresh",
            "Device Topup Request": "people",
            "Device Topup Status Update": "people",
            "Device Extend One Year Invoice Details": "appstore",
            "Extend One Year Request": "shuffle",
            "Device Extend One Year Request": "ios-clipboard",
            "Device Extend One Year Status Update": "sync",
            "Device Certificate Invoice Details": "ribbon",
            "BSNL Certificate Request": "sync",
            "Certificate Request": "shuffle",
            "Device Activation History": "paper",
            "Dealer Hierarchy": "stats",
            "Esim Zoho Books Products": "book",
            "Esim Zoho Books Customers": "people",
            "Esim Change Password": "key",
            "Sim Provider Change": "albums",
        };
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.menuObject = JSON.parse(localStorage.getItem("esimdashboardmenu"));
    }
    logOutFunction(router) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.router.navigateByUrl(this.appUrl[router]);
        });
    }
};
EsimDashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
EsimDashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-esim-dashboard",
        template: __webpack_require__(/*! raw-loader!./esim-dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-dashboard/esim-dashboard.page.html"),
        styles: [__webpack_require__(/*! ./esim-dashboard.page.scss */ "./src/app/delar-application/esim-dashboard/esim-dashboard.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], EsimDashboardPage);



/***/ })

}]);
//# sourceMappingURL=esim-dashboard-esim-dashboard-module-es2015.js.map