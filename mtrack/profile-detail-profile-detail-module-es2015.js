(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-detail-profile-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/profile-detail/profile-detail.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/profile-detail/profile-detail.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ion-row class=\"backgroundGrd\" style=\"height: 35%\">\r\n    <ion-row>\r\n      <ion-icon\r\n        class=\"iconSize25px\"\r\n        (click)=\"closePage()\"\r\n        name=\"arrow-back\"\r\n      ></ion-icon>\r\n    </ion-row>\r\n  </ion-row>\r\n  <ion-row class=\"iconPlace\">\r\n    <ion-icon\r\n      class=\"iconStyle\"\r\n      style=\"font-size: 120px\"\r\n      name=\"contact\"\r\n    ></ion-icon>\r\n  </ion-row>\r\n  <ion-row class=\"rowCenter\">\r\n    <ion-card class=\"card\">\r\n      <ion-card-content class=\"cardContent\">\r\n        <ion-row style=\"border-bottom: 2px solid #d9d9d9\" class=\"rowCenter\">\r\n          <ion-label\r\n            style=\"padding: 19px\"\r\n            class=\"userFontName dealerfont capitial\"\r\n          >\r\n            {{detail.firstName}} {{detail.lastName}}</ion-label\r\n          >\r\n        </ion-row>\r\n        <ion-row class=\"rowPadding\">\r\n          <ion-col size=\"1\">\r\n            <ion-icon class=\"detailIcon\" name=\"phone-portrait\"></ion-icon>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-label class=\"label\"> {{detail.contactNo}} </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"rowPadding\">\r\n          <ion-col size=\"1\">\r\n            <ion-icon class=\"detailIcon\" name=\"mail\"></ion-icon>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-label class=\"label\"> {{detail.fax}} </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"rowPadding\">\r\n          <ion-col size=\"1\">\r\n            <ion-icon class=\"detailIcon\" name=\"compass\"></ion-icon>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-label class=\"label\">\r\n              {{detail.addressLine1}}, {{detail.addressLine2}},\r\n              {{detail.addressCity}}, {{detail.countryCode}}\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-row>\r\n  <ion-row class=\"bottomButton\">\r\n    <ion-button [routerLink]=\"['/manage-fleet/Profile']\" class=\"buttonWidth\">\r\n      Edit profile\r\n    </ion-button>\r\n  </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/delar-application/profile-detail/profile-detail.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/delar-application/profile-detail/profile-detail.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProfileDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailPageModule", function() { return ProfileDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-detail.page */ "./src/app/delar-application/profile-detail/profile-detail.page.ts");







const routes = [
    {
        path: '',
        component: _profile_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProfileDetailPage"]
    }
];
let ProfileDetailPageModule = class ProfileDetailPageModule {
};
ProfileDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_profile_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProfileDetailPage"]]
    })
], ProfileDetailPageModule);



/***/ }),

/***/ "./src/app/delar-application/profile-detail/profile-detail.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/delar-application/profile-detail/profile-detail.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".iconSize {\n  font-size: 140px;\n}\n\n.rowCenter {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.padding15px {\n  padding: 15px;\n}\n\n.iconSize25px {\n  font-size: 25px;\n  margin: 20px;\n}\n\n.userFontName {\n  font-size: large;\n  font-weight: bolder;\n  font-family: sans-serif;\n  font-style: italic;\n}\n\n.capitial {\n  text-transform: uppercase;\n}\n\n.backgroundGrd {\n  background-color: #7c68f8;\n  color: white;\n  border-bottom-right-radius: 43px;\n}\n\n.card {\n  width: 90%;\n  margin: -49px;\n  background: white;\n  border-radius: 33px;\n  height: 64vh;\n}\n\n.cardContent {\n  margin: 0px;\n  padding-top: 15%;\n}\n\n.iconStyle {\n  background-color: #fdfdff;\n  border-radius: 100%;\n}\n\n.iconPlace {\n  position: absolute;\n  z-index: 13;\n  left: 50%;\n  top: 25%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.detailIcon {\n  font-size: 22px;\n  color: black;\n}\n\n.rowPadding {\n  padding: 8px;\n}\n\n.label {\n  font-size: 15px;\n  font-family: sans-serif;\n  color: black;\n  margin-left: 5px;\n}\n\n.buttonWidth {\n  width: 100%;\n  height: 30px;\n  --ion-color-primary: #7c68f8;\n}\n\n.bottomButton {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcHJvZmlsZS1kZXRhaWwvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxccHJvZmlsZS1kZXRhaWxcXHByb2ZpbGUtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcHJvZmlsZS1kZXRhaWwvcHJvZmlsZS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURDRTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNFRjs7QURBRTtFQUNJLGFBQUE7QUNHTjs7QURERTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDSU47O0FEREU7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0lOOztBREZJO0VBQ0UseUJBQUE7QUNLTjs7QURGSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDS047O0FERkk7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDS047O0FERkk7RUFDRSxXQUFBO0VBR0EsZ0JBQUE7QUNHTjs7QURERTtFQUNDLHlCQUFBO0VBQ0EsbUJBQUE7QUNJSDs7QURBSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ0VOOztBREVJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNDTjs7QURFSTtFQUNFLFlBQUE7QUNDTjs7QURFSTtFQUNFLGVBQUE7RUFHQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0ROOztBRElJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQ0ROOztBRElJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9wcm9maWxlLWRldGFpbC9wcm9maWxlLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvblNpemV7XHJcbiAgZm9udC1zaXplOiAxNDBweDtcclxuICB9XHJcbiAgLnJvd0NlbnRlcntcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLnBhZGRpbmcxNXB4e1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICAuaWNvblNpemUyNXB4e1xyXG4gICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIG1hcmdpbjogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnVzZXJGb250TmFtZXtcclxuICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIH1cclxuICAgIC5jYXBpdGlhbHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuICBcclxuICAgIC5iYWNrZ3JvdW5kR3Jke1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M2OGY4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0M3B4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNhcmR7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIG1hcmdpbjogLTQ5cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzM3B4O1xyXG4gICAgICBoZWlnaHQ6IDY0dmg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY2FyZENvbnRlbnR7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAvLyBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZy10b3A6IDE1JTtcclxuICAgIH1cclxuICAuaWNvblN0eWxle1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZmO1xyXG4gICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIFxyXG4gICBcclxuICB9XHJcbiAgICAuaWNvblBsYWNle1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IDEzO1xyXG4gICAgXHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdG9wOjI1JTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRldGFpbEljb257XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnJvd1BhZGRpbmd7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgIH1cclxuICBcclxuICAgIC5sYWJlbHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAvLyBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYnV0dG9uV2lkdGh7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYm90dG9tQnV0dG9ue1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH0iLCIuaWNvblNpemUge1xuICBmb250LXNpemU6IDE0MHB4O1xufVxuXG4ucm93Q2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wYWRkaW5nMTVweCB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5pY29uU2l6ZTI1cHgge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLnVzZXJGb250TmFtZSB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5jYXBpdGlhbCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5iYWNrZ3JvdW5kR3JkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjNjhmODtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNDNweDtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IC00OXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMzNweDtcbiAgaGVpZ2h0OiA2NHZoO1xufVxuXG4uY2FyZENvbnRlbnQge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy10b3A6IDE1JTtcbn1cblxuLmljb25TdHlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi5pY29uUGxhY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEzO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmRldGFpbEljb24ge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnJvd1BhZGRpbmcge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmJ1dHRvbldpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzBweDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcbn1cblxuLmJvdHRvbUJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/profile-detail/profile-detail.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/delar-application/profile-detail/profile-detail.page.ts ***!
  \*************************************************************************/
/*! exports provided: ProfileDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailPage", function() { return ProfileDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");






let ProfileDetailPage = class ProfileDetailPage {
    constructor(router, location, ajaxService) {
        this.router = router;
        this.location = location;
        this.ajaxService = ajaxService;
        this.detail = { firstName: "", lastName: "" };
    }
    closePage() {
        this.location.back();
    }
    getProfile() {
        let jsonData = {
            "companyId": this.companyDetail.companyID,
            "userName": this.companyDetail.userId
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + '/user/getUserDetails';
        this.ajaxService.ajaxPostWithBody(url, jsonData).subscribe(res => {
            console.log(res);
            this.detail = res;
        });
    }
    ionViewWillEnter() {
        this.getProfile();
    }
    ngOnInit() {
        this.companyDetail = {
            branchID: localStorage.getItem('corpId'),
            companyID: localStorage.getItem('corpId'),
            userId: localStorage.getItem('userName')
        };
    }
};
ProfileDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] }
];
ProfileDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-detail',
        template: __webpack_require__(/*! raw-loader!./profile-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/profile-detail/profile-detail.page.html"),
        styles: [__webpack_require__(/*! ./profile-detail.page.scss */ "./src/app/delar-application/profile-detail/profile-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"]])
], ProfileDetailPage);



/***/ })

}]);
//# sourceMappingURL=profile-detail-profile-detail-module-es2015.js.map