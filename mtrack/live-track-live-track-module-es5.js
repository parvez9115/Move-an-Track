(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["live-track-live-track-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/akmessages/akmessages.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/akmessages/akmessages.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n  <img\n    [src]=\"\n      message == 'No Data Found' ||\n      message == 'Link Not Available' ||\n      message == 'No Vehicle is Available'\n        ? '../../../assets/background_img/caution-svgrepo-com.svg'\n        : '../../../assets/background_img/broken-link-chain-svgrepo-com 2.svg'\n    \"\n  />\n  <p>{{ message }}</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/live-track/live-track.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/live-track/live-track.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button\r\n        icon=\"arrow-back\"\r\n        style=\"color: rgb(0, 0, 0)\"\r\n      ></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"appHeader\"> Livetrack </ion-title>\r\n  </ion-toolbar>\r\n  <script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyAwNE2J8f2FWG2grjrxUzCa6GAUPoNbgso\"></script>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- <app-vtslivetrack [LiveChange]=\"Data\" ></app-vtslivetrack> -->\r\n  <form [formGroup]=\"LiveForm\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"3\">\r\n        <ion-input placeholder=\"TRIP ID\" formControlName=\"tripId\"> </ion-input>\r\n      </ion-col>\r\n      <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"3\">\r\n        <ion-input placeholder=\"PLATE NUMBER\" formControlName=\"plateno\">\r\n        </ion-input>\r\n      </ion-col>\r\n      <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"3\">\r\n        <ion-input formControlName=\"tripstartdate\" type=\"date\"> </ion-input>\r\n      </ion-col>\r\n      <ion-col\r\n        style=\"text-align: center\"\r\n        size=\"12\"\r\n        size-sm=\"12\"\r\n        size-md=\"6\"\r\n        size-lg=\"3\"\r\n      >\r\n        <ion-button (click)=\"onSubmit()\" [disabled]=\"!LiveForm.valid\">\r\n          Submit\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/components/akmessages/akmessages.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/akmessages/akmessages.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  font-family: \"Roboto\";\n  font-size: xx-large;\n}\n\nimg {\n  height: 20%;\n}\n\np {\n  color: #0495aa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ha21lc3NhZ2VzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWttZXNzYWdlc1xcYWttZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ha21lc3NhZ2VzL2FrbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEQUE7RUFDSSxjQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FrbWVzc2FnZXMvYWttZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ3tcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5pbWd7XG4gICAgaGVpZ2h0OiAyMCU7XG59XG5we1xuICAgIGNvbG9yOiAjMDQ5NWFhO1xufSIsIi5iZyB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAyMCU7XG59XG5cbnAge1xuICBjb2xvcjogIzA0OTVhYTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/akmessages/akmessages.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/akmessages/akmessages.component.ts ***!
  \***************************************************************/
/*! exports provided: AkmessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AkmessagesComponent", function() { return AkmessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AkmessagesComponent = /** @class */ (function () {
    function AkmessagesComponent() {
        this.message = localStorage.inItPage;
    }
    AkmessagesComponent.prototype.ngOnInit = function () {
    };
    AkmessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-akmessages',
            template: __webpack_require__(/*! raw-loader!./akmessages.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/akmessages/akmessages.component.html"),
            styles: [__webpack_require__(/*! ./akmessages.component.scss */ "./src/app/components/akmessages/akmessages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AkmessagesComponent);
    return AkmessagesComponent;
}());



/***/ }),

/***/ "./src/app/live-track/live-track.module.ts":
/*!*************************************************!*\
  !*** ./src/app/live-track/live-track.module.ts ***!
  \*************************************************/
/*! exports provided: liveTrackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveTrackPageModule", function() { return liveTrackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _live_track_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./live-track.page */ "./src/app/live-track/live-track.page.ts");
/* harmony import */ var _components_akmessages_akmessages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/akmessages/akmessages.component */ "./src/app/components/akmessages/akmessages.component.ts");









var routes = [{ path: "", component: _components_akmessages_akmessages_component__WEBPACK_IMPORTED_MODULE_8__["AkmessagesComponent"] }];
var liveTrackPageModule = /** @class */ (function () {
    function liveTrackPageModule() {
    }
    liveTrackPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            declarations: [_live_track_page__WEBPACK_IMPORTED_MODULE_7__["liveTrackPage"], _components_akmessages_akmessages_component__WEBPACK_IMPORTED_MODULE_8__["AkmessagesComponent"]],
        })
    ], liveTrackPageModule);
    return liveTrackPageModule;
}());



/***/ }),

/***/ "./src/app/live-track/live-track.page.scss":
/*!*************************************************!*\
  !*** ./src/app/live-track/live-track.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input, ion-select {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGl2ZS10cmFjay9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGxpdmUtdHJhY2tcXGxpdmUtdHJhY2sucGFnZS5zY3NzIiwic3JjL2FwcC9saXZlLXRyYWNrL2xpdmUtdHJhY2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9saXZlLXRyYWNrL2xpdmUtdHJhY2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0LGlvbi1zZWxlY3R7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG59XHJcblxyXG4iLCJpb24taW5wdXQsIGlvbi1zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG59Il19 */"

/***/ }),

/***/ "./src/app/live-track/live-track.page.ts":
/*!***********************************************!*\
  !*** ./src/app/live-track/live-track.page.ts ***!
  \***********************************************/
/*! exports provided: liveTrackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveTrackPage", function() { return liveTrackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");






var liveTrackPage = /** @class */ (function () {
    function liveTrackPage(formBuilder, ajaxService, router, commonService) {
        this.formBuilder = formBuilder;
        this.ajaxService = ajaxService;
        this.router = router;
        this.commonService = commonService;
    }
    liveTrackPage.prototype.ngOnInit = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        this.LiveForm = this.formBuilder.group({
            tripId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            plateno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tripstartdate: [today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    liveTrackPage.prototype.onSubmit = function () {
        var _this = this;
        var url = "https://mvt.apmkingstrack.com/fleettracking/tracknow/verify";
        var data = JSON.stringify({
            tripid: this.LiveForm.value.tripId,
            plateno: this.LiveForm.value.plateno,
            tripstartdate: this.LiveForm.value.tripstartdate,
        });
        this.ajaxService.ajaxPostWithString(url, data).subscribe(function (response) {
            _this.Data = JSON.parse(response);
            if (_this.Data.message == "Link Not Available") {
                _this.commonService.presentToast("No vehicle found");
            }
            else {
                localStorage.setItem("appSettings", JSON.stringify("SelectedVin"));
                localStorage.setItem("inItPage", "livetrackVerify");
                localStorage.setItem("selectedVin", JSON.stringify(_this.Data));
                localStorage.setItem("userName", _this.Data.userName);
                localStorage.setItem("corpId", _this.Data.userName);
                localStorage.setItem("staticIOData", JSON.stringify(_this.Data.staticIODatas));
                setTimeout(function () {
                    _this.router.navigateByUrl("/livetrack/" + JSON.parse(localStorage.selectedVin).plateNo);
                }, 1000);
            }
        });
    };
    liveTrackPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
    ]; };
    liveTrackPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-live-track",
            template: __webpack_require__(/*! raw-loader!./live-track.page.html */ "./node_modules/raw-loader/index.js!./src/app/live-track/live-track.page.html"),
            styles: [__webpack_require__(/*! ./live-track.page.scss */ "./src/app/live-track/live-track.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], liveTrackPage);
    return liveTrackPage;
}());



/***/ })

}]);
//# sourceMappingURL=live-track-live-track-module-es5.js.map