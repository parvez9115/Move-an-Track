(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-dashboard-assert-status-list-assert-status-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/new-dashboard/assert-status-list/assert-status-list.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/new-dashboard/assert-status-list/assert-status-list.page.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"dealerHeader\">\r\n    <ion-row>\r\n      <ion-col size=1>\r\n        <ion-icon class=\"iconSize25px\" (click)=\"closePage()\" name=\"arrow-back\"></ion-icon>\r\n      </ion-col>\r\n        <ion-col size=5 style=\"align-self: center;\">\r\n          <ion-title>Asset details</ion-title>\r\n        </ion-col>\r\n     <ion-col size=6>\r\n        <ion-searchbar (ionInput)=\"setFilteredLocations($event)\" animated></ion-searchbar>\r\n     </ion-col>\r\n   </ion-row>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-segment value=\"{{selectedTab}}\" scrollable (ionChange)=\"changeFilter($event)\">\r\n    <ion-segment-button *ngFor=\"let catagory of catagories\" value=\"{{catagory}}\">\r\n      <ion-label>{{catagory}}<ion-badge\r\n          [ngClass]='{\"notification\": selectedTab === catagory, \"unnotification\": selectedTab != catagory}'>{{countRowData[catagory]}}\r\n        </ion-badge>\r\n      </ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n  <ion-row>\r\n    <ion-col size=12 size-sm=\"12\" size-lg=\"4\" size-md=\"6\" *ngFor=\"let showList of displayData\">\r\n      <ion-card style=\"border-left: 4px solid #7c68f8; margin: 0px;\">\r\n        <ion-card-content style=\"padding: 7px;\">\r\n          <app-assert-list-card [cardDetail]=\"showList\"></app-assert-list-card>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/delar-application/new-dashboard/assert-status-list/assert-status-list.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/delar-application/new-dashboard/assert-status-list/assert-status-list.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: AssertStatusListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertStatusListPageModule", function() { return AssertStatusListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dealer_component_dealer_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dealer-component/dealer-component.module */ "./src/app/delar-application/dealer-component/dealer-component.module.ts");
/* harmony import */ var _assert_status_list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assert-status-list.page */ "./src/app/delar-application/new-dashboard/assert-status-list/assert-status-list.page.ts");








var routes = [
    {
        path: '',
        component: _assert_status_list_page__WEBPACK_IMPORTED_MODULE_7__["AssertStatusListPage"]
    }
];
var AssertStatusListPageModule = /** @class */ (function () {
    function AssertStatusListPageModule() {
    }
    AssertStatusListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _dealer_component_dealer_component_module__WEBPACK_IMPORTED_MODULE_6__["DealerComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_assert_status_list_page__WEBPACK_IMPORTED_MODULE_7__["AssertStatusListPage"]]
        })
    ], AssertStatusListPageModule);
    return AssertStatusListPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/new-dashboard/assert-status-list/assert-status-list.page.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/delar-application/new-dashboard/assert-status-list/assert-status-list.page.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-segment-button {\n  --color-checked: #7d67f8;\n}\n\n.iconSize25px {\n  font-size: 25px;\n}\n\n.notification {\n  background-color: #7c68f8;\n  font-size: 10px;\n  font-family: sans-serif;\n  margin-bottom: -4px;\n  margin-left: 4px;\n  border-radius: 100%;\n  padding: 4px;\n}\n\n.unnotification {\n  background-color: #a8a8a8;\n  font-size: 10px;\n  font-family: sans-serif;\n  margin-bottom: -4px;\n  margin-left: 4px;\n  border-radius: 50%;\n  padding: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vbmV3LWRhc2hib2FyZC9hc3NlcnQtc3RhdHVzLWxpc3QvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcbmV3LWRhc2hib2FyZFxcYXNzZXJ0LXN0YXR1cy1saXN0XFxhc3NlcnQtc3RhdHVzLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9uZXctZGFzaGJvYXJkL2Fzc2VydC1zdGF0dXMtbGlzdC9hc3NlcnQtc3RhdHVzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7QUNDSjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9uZXctZGFzaGJvYXJkL2Fzc2VydC1zdGF0dXMtbGlzdC9hc3NlcnQtc3RhdHVzLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIC0tY29sb3ItY2hlY2tlZDogIzdkNjdmODtcclxuICB9XHJcblxyXG4gIC5pY29uU2l6ZTI1cHh7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLm5vdGlmaWNhdGlvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M2OGY4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tYm90dG9tOiAtNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBwYWRkaW5nOiA0cHg7XHJcblxyXG59XHJcblxyXG4udW5ub3RpZmljYXRpb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4YThhODtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTRweDtcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiA0cHg7XHJcblxyXG59IiwiaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjN2Q2N2Y4O1xufVxuXG4uaWNvblNpemUyNXB4IHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjNjhmODtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWJvdHRvbTogLTRweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4udW5ub3RpZmljYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThhOGE4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiAtNHB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/new-dashboard/assert-status-list/assert-status-list.page.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/delar-application/new-dashboard/assert-status-list/assert-status-list.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: AssertStatusListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertStatusListPage", function() { return AssertStatusListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var AssertStatusListPage = /** @class */ (function () {
    function AssertStatusListPage(location, activatedRoute) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.catagories = ["All", "Online", "Offline", "Expiry"];
        this.count = 15;
        this.currentPage = 1;
        this.isValue = false;
    }
    AssertStatusListPage.prototype.changeFilter = function (data) {
        this.selectedTab = data.detail.value;
        // if(this.selectedTab == "All")
        // this.selectedTab = "Total"
        this.dasboardDetail = JSON.parse(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["adminLocalStorage"].dealerLoginData);
        this.showList = this.dasboardDetail.assets[this.selectedTab];
        // this.showList = [{"imeiNo": "876756454565768", "status":"Online", "warrantyExp":"27/02/45", "vin":"apm765", "timestamp":"27-09-2020 07:10:00 pm" ,"simNo": "9087657583787 / 4567655677655", "companyId": "apm", "companySuffix":"76876"}, {"imeiNo": "876756454565768", "status":"Offiline", "warrantyExp":"27/02/45", "vin":"apm765", "timestamp":"27-09-2020 07:10:00 pm" ,"simNo": "9087657583787 / 4567655677655", "companyId": "apm"}, {"imeiNo": "876756454565768", "status":"Online", "warrantyExp":"27/02/45", "vin":"apm765", "timestamp":"27-09-2020 07:10:00 pm" ,"simNo": "9087657583787 / 4567655677655", "companyId": "apm"},{"imeiNo": "876756454565768", "status":"Online", "warrantyExp":"27/02/45", "vin":"apm765", "timestamp":"27-09-2020 07:10:00 pm" ,"simNo": "9087657583787 / 4567655677655", "companyId": "apm"}]
        this.getAssertList();
    };
    AssertStatusListPage.prototype.closePage = function () {
        this.location.back();
    };
    AssertStatusListPage.prototype.setDisplayData = function () {
        if (this.showList.length > this.count) {
            this.displayData = this.showList.slice(0, this.count);
        }
        else {
            this.displayData = this.showList;
        }
    };
    AssertStatusListPage.prototype.getAssertList = function () {
        this.setDisplayData();
    };
    AssertStatusListPage.prototype.doInfinite = function (event) {
        var _this = this;
        if (this.isValue) {
            console.log("event trigger>>>>>>>");
            setTimeout(function () {
                var _a;
                console.log(_this.showList);
                (_a = _this.displayData).push.apply(_a, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.displayData.slice(_this.currentPage * _this.count, (_this.currentPage + 1) * _this.count)));
                _this.currentPage++;
                event.target.complete();
                if (_this.displayData.length == _this.displayData.length) {
                    event.target.disabled = true;
                    setTimeout(function () {
                        event.target.disabled = false;
                    }, 3000);
                }
            }, 500);
        }
        else {
            console.log("event trigger");
            setTimeout(function () {
                var _a;
                console.log(_this.showList);
                (_a = _this.displayData).push.apply(_a, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.showList.slice(_this.currentPage * _this.count, (_this.currentPage + 1) * _this.count)));
                _this.currentPage++;
                event.target.complete();
                if (_this.displayData.length == _this.showList.length) {
                    event.target.disabled = true;
                    setTimeout(function () {
                        event.target.disabled = false;
                    }, 3000);
                }
            }, 500);
        }
    };
    AssertStatusListPage.prototype.setFilteredLocations = function (ev) {
        if (ev.target.value.length > 0) {
            this.isValue = true;
            this.displayData = this.showList.filter(function (imei) {
                if (imei.imei != null)
                    return imei.imei.replace(/ /g, '').toLowerCase().includes(ev.target.value.replace(/ /g, ''));
                else
                    return false;
            });
            this.displayData = this.displayData.slice(0, this.count);
        }
        else {
            if (this.showList.length > this.count) {
                this.isValue = false;
                this.displayData = this.showList.slice(0, this.count);
            }
        }
    };
    AssertStatusListPage.prototype.ngOnInit = function () {
        this.selectedTab = this.activatedRoute.snapshot.paramMap.get("type");
        // if(this.selectedTab == "All")
        // this.selectedTab = "Total"
        this.dasboardDetail = JSON.parse(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["adminLocalStorage"].dealerLoginData);
        this.showList = this.dasboardDetail.assets[this.selectedTab];
        // this.showList = [{"imeiNo": "876756454565768", "status":"Online", "warrantyExp":"27/02/45", "vin":"apm765", "timestamp":"27-09-2020 07:10:00 pm" ,"simNo": "9087657583787 / 4567655677655", "companyId": "apm", "companySuffix":"76876"}, {"imeiNo": "876756454565768", "status":"Offiline", "warrantyExp":"27/02/45", "vin":"apm765", "timestamp":"27-09-2020 07:10:00 pm" ,"simNo": "9087657583787 / 4567655677655", "companyId": "apm"}, {"imeiNo": "876756454565768", "status":"Online", "warrantyExp":"27/02/45", "vin":"apm765", "timestamp":"27-09-2020 07:10:00 pm" ,"simNo": "9087657583787 / 4567655677655", "companyId": "apm"},{"imeiNo": "876756454565768", "status":"Online", "warrantyExp":"27/02/45", "vin":"apm765", "timestamp":"27-09-2020 07:10:00 pm" ,"simNo": "9087657583787 / 4567655677655", "companyId": "apm"}]
        this.getAssertList();
        this.countRowData = {
            All: this.dasboardDetail.assets["All"].length,
            Expiry: this.dasboardDetail.assets["Expiry"].length,
            Stocks: this.dasboardDetail.assets["Stocks"].length,
            Online: this.dasboardDetail.assets["Online"].length,
            Offline: this.dasboardDetail.assets["Offline"].length,
        };
    };
    AssertStatusListPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])
    ], AssertStatusListPage.prototype, "infiniteScroll", void 0);
    AssertStatusListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-assert-status-list',
            template: __webpack_require__(/*! raw-loader!./assert-status-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/new-dashboard/assert-status-list/assert-status-list.page.html"),
            styles: [__webpack_require__(/*! ./assert-status-list.page.scss */ "./src/app/delar-application/new-dashboard/assert-status-list/assert-status-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AssertStatusListPage);
    return AssertStatusListPage;
}());



/***/ })

}]);
//# sourceMappingURL=new-dashboard-assert-status-list-assert-status-list-module-es5.js.map