(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fms-fmsreports-fmsreports-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/fms/fmsreports/fmsreports.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fms/fmsreports/fmsreports.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" [ngClass]=\"{'appHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row style=\"align-items: center;\" *ngIf=\"myPlatform != 'desktop'\">\r\n            <ion-menu-button></ion-menu-button>\r\n            <ion-label> Reports </ion-label>\r\n          </ion-row>\r\n          <ion-row *ngIf=\"myPlatform == 'desktop'\">\r\n            <ion-col size='2'>\r\n              <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <ion-label> Reports </ion-label>\r\n            </ion-col>\r\n            <ion-col style=\"margin: 0;\r\n            padding: 0;\">\r\n              <ion-img style=\"height: 40px;\" [src]=\"app.logo\"></ion-img>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>  \r\n</ion-header>\r\n\r\n<ion-content>\r\n<app-fms-reports-form></app-fms-reports-form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/fms/fmsreports/fmsreports.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/fms/fmsreports/fmsreports.module.ts ***!
  \*****************************************************/
/*! exports provided: FmsreportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FmsreportsPageModule", function() { return FmsreportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fmsreports_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fmsreports.page */ "./src/app/fms/fmsreports/fmsreports.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _fmsreports_fmsreports_form_fmsreports_form_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fmsreports/fmsreports-form/fmsreports-form.page */ "./src/app/fms/fmsreports/fmsreports-form/fmsreports-form.page.ts");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");












var routes = [
    {
        path: '',
        component: _fmsreports_page__WEBPACK_IMPORTED_MODULE_1__["FmsreportsPage"]
    },
    {
        path: '',
        component: _fmsreports_fmsreports_form_fmsreports_form_page__WEBPACK_IMPORTED_MODULE_8__["FmsreportsFormPage"]
    },
];
var FmsreportsPageModule = /** @class */ (function () {
    function FmsreportsPageModule() {
    }
    FmsreportsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlNativeDateTimeModule"],
                _shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_10__["SharedModModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"]
            ],
            declarations: [_fmsreports_fmsreports_form_fmsreports_form_page__WEBPACK_IMPORTED_MODULE_8__["FmsreportsFormPage"], _fmsreports_page__WEBPACK_IMPORTED_MODULE_1__["FmsreportsPage"]]
        })
    ], FmsreportsPageModule);
    return FmsreportsPageModule;
}());



/***/ }),

/***/ "./src/app/fms/fmsreports/fmsreports.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/fms/fmsreports/fmsreports.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-padding,\n[padding] {\n  padding-left: unset;\n  padding-right: unset;\n  -webkit-padding-start: var(--ion-padding, 16px);\n  padding-inline-start: var(--ion-padding, 0px);\n  -webkit-padding-end: var(--ion-padding, -16px);\n  padding-inline-end: var(--ion-padding, 13px);\n  padding-bottom: 8px;\n}\n\n.iconSize {\n  width: 22px;\n  height: 22px;\n}\n\nion-card {\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\nion-card-content {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm1zL2Ztc3JlcG9ydHMvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxmbXNcXGZtc3JlcG9ydHNcXGZtc3JlcG9ydHMucGFnZS5zY3NzIiwic3JjL2FwcC9mbXMvZm1zcmVwb3J0cy9mbXNyZXBvcnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0NBQUE7RUFDQSw2Q0FBQTtFQUNBLDhDQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvZm1zL2Ztc3JlcG9ydHMvZm1zcmVwb3J0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLXBhZGRpbmcsXHJcbltwYWRkaW5nXSB7XHJcbiAgcGFkZGluZy1sZWZ0OiB1bnNldDtcclxuICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcclxuICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDBweCk7XHJcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIC0xNnB4KTtcclxuICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxM3B4KTtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4uaWNvblNpemUge1xyXG4gIHdpZHRoOiAyMnB4O1xyXG4gIGhlaWdodDogMjJweDtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDZweDtcclxufVxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuIiwiLmlvbi1wYWRkaW5nLFxuW3BhZGRpbmddIHtcbiAgcGFkZGluZy1sZWZ0OiB1bnNldDtcbiAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDBweCk7XG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAtMTZweCk7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDEzcHgpO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuXG4uaWNvblNpemUge1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/fms/fmsreports/fmsreports.page.ts":
/*!***************************************************!*\
  !*** ./src/app/fms/fmsreports/fmsreports.page.ts ***!
  \***************************************************/
/*! exports provided: FmsreportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FmsreportsPage", function() { return FmsreportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _fmsreports_fmsreports_form_fmsreports_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fmsreports/fmsreports-form/fmsreports-form.page */ "./src/app/fms/fmsreports/fmsreports-form/fmsreports-form.page.ts");







var FmsreportsPage = /** @class */ (function () {
    function FmsreportsPage(ajaxService, modalController, activatedRoute, platform, menuController) {
        var _this = this;
        this.ajaxService = ajaxService;
        this.modalController = modalController;
        this.activatedRoute = activatedRoute;
        this.platform = platform;
        this.menuController = menuController;
        this.app = { logo: 'logo.png' };
        this.reportTypeItems = new Array();
        this.getAvailableReports = function () {
            var body = {
                "companyId": localStorage.corpId,
                "userId": localStorage.userName
            };
            // const url = serverUrl.web+"/api/vts/company/branch/mainMenu/"+JSON.stringify(body);
            // this.ajaxService.ajaxGetWithBody(url)
            // .subscribe(
            //   res =>{
            var reports = JSON.parse(localStorage.getItem('localData'))[1].mainmenu;
            var reportjson = {
                "Executive_Summary": "Executive summary report",
                "Driver_Behaviour": "Driver behaviour report",
                "Status_Summary": "Status summary report",
                "Over_Speed_Duration_Report": "Overspeed duration report",
                "Speed_Report": "Speed report",
                "Alert_Report": "Alert report",
                "Movement_Report": "Movement report",
                "Temprature_Report": "Temprature report",
                // "Alert_Report" : "Alert report",
                // "Vehicle_Summary_Report" : 'Summary Report',
                // "Vehicle_Movement_Report" : 'Movement Report',
                // "Vehicle_Speed_Report" : 'Speed Report',
                // "Vehicle_Stop_Report" : 'Stop Report',
                // "Vehicle_Idle_Report" : "Idle Report",
                // "Vehicle_Alerts_Report" : 'Alert Report',
                // "Digital_Input_Report" : 'Digital Input Report',
                // "Idle_Fuel_History_Report" : 'IDLEFUEL_HISTORY_REPORT',
                // "Maintenance_Report" : 'Maintenance Report',
                // "Temperature_Report" : 'TEMPERATURE_REPORT',
                // "Vehicle_Cumulative_Summary_Report" : "Cumulative Summary Report",
                // "Employee_Summary_Report" : 'EMPLOYEE_SUMMARY_REPORT',
                // "NO_Transmission_Report" : 'NO Transmission Report',
                "Vehicle_Summary_By_Day": 'Overall summary report',
                // "Vehicle_Status_Summary_Report" :
                // 'STATUS_SUMMARY_REPORT',
                // "Garbage_Collector_Report" : 'GARBAGE_COLLECTOR_REPORT',
                // "Mechanical_Sweeper_Report" : 'SWEEPER_REPORT',
                // "Asset_Event_Report" : "Asset Event Report",
                // "Tabuk_Municipality_Report" : 'Tabuk Municipality Report',
                // "Compactor_Report" : 'Compactor Report',
                // "Street_Sweeper_Report" : 'STREET_SWEEPER_REPORT',
                // "Monthly_Discount_Report" : 'Monthly Discount Report',
                // "Month_NO_Transmission_Report" : 'Monthly NO Transmission Report',
                // "Out_Zone_Report" : 'Out Zone Report',
                // "Fuel_Consumption_Report" : 'Fuel_Consumption_Report',
                // "Seat_Belt_Report" : 'Seat_Belt_Report',
                // "BT_Temperature_Report" : 'BT_TEMPERATURE_REPORT',
                // "Common_Report" : 'Common_Report',
                // "All_Company_Details" : 'All_Company_Details',
                // "Mokafha_Report" : 'Mokafha_Report',
                // "testing_Report" : 'testing_Report',
                // "service_maintenance_report" : 'SERVICE_MAINTENANCE_REPORT',
                // "Utilization_Report" : 'Utilization_Report',
                // "Assignment_Report" : 'Assignment_Report',
                // "Driver_Event_Report" : 'Driver_Event_Report',
                // "OBD_OVERALL_REPORT" : 'OBD_OVERALL_REPORT',
                // "OBD_Fuel_Report" : "OBD_Fuel_Report",
                // "Overspeed_Timing_Report" : "OVERSPEED_TIMING_REPORT",
                // "non_running_report" : 'NON_RUNNING_REPORT',
                "Trip_summary_report": "Trip summary report",
                "Vehicle_tripBy_summary": "Engine Hours summary report",
                "Ac_Report": 'AC report'
            };
            //  const loginMenu = res.replace("[",'').replace("]",'').replace(/'/g,'').split(",");
            for (var i = 0; i < reports.length; i++) {
                if (reportjson.hasOwnProperty(reports[i])) {
                    _this.reportTypeItems.push(reportjson[reports[i]]);
                }
            }
            // }
            // )
        };
    }
    FmsreportsPage.prototype.openForm = function (mode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var shownContent, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shownContent = {};
                        switch (mode) {
                            case "Overall summary report":
                                shownContent["plateNo"] = true;
                                shownContent["fromDate"] = true;
                                shownContent["toDate"] = true;
                                break;
                            case "Engine Hours summary report":
                                shownContent["plateNo"] = true;
                                shownContent["fromDate"] = true;
                                shownContent["fromTime"] = true;
                                shownContent["toDate"] = true;
                                shownContent["toTime"] = true;
                                break;
                            case "Trip summary report":
                                shownContent["plateNo"] = true;
                                shownContent["fromDate"] = true;
                                shownContent["fromTime"] = true;
                                shownContent["toDate"] = true;
                                shownContent["toTime"] = true;
                                break;
                            case "Executive summary report":
                                //sshownContent["plateNo"] = true;
                                shownContent["fromDate"] = true;
                                //shownContent["toDate"] = true;
                                break;
                            case "Driver behaviour report":
                                shownContent["fromDate"] = true;
                                shownContent["toDate"] = true;
                                break;
                            case "Status summary report":
                                shownContent["plateNo"] = true;
                                shownContent["fromDate"] = true;
                                shownContent["toDate"] = true;
                                break;
                            case "Alert report":
                                shownContent["fromDate"] = true;
                                break;
                            case "Overspeed duration report":
                                shownContent["plateNo"] = true;
                                shownContent["fromDate"] = true;
                                shownContent["toDate"] = true;
                                break;
                            case "Speed report":
                                shownContent["plateNo"] = true;
                                shownContent["fromDate"] = true;
                                shownContent["speed"] = true;
                                shownContent["condition"] = true;
                                break;
                            case "Movement report":
                                shownContent["plateNo"] = true;
                                shownContent["fromDate"] = true;
                                shownContent["timeExceed"] = true;
                                break;
                            case "Temprature report":
                                shownContent["plateNo"] = true;
                                shownContent["fromDate"] = true;
                                shownContent["fromTime"] = true;
                                shownContent["toDate"] = true;
                                shownContent["toTime"] = true;
                                shownContent["sensor"] = true;
                                shownContent["timeExceed"] = true;
                                shownContent["condition"] = true;
                                break;
                            case "Ac report":
                                shownContent["fromDate"] = true;
                                shownContent["toDate"] = true;
                                shownContent["plateNo"] = true;
                                break;
                        }
                        return [4 /*yield*/, this.modalController.create({
                                component: _fmsreports_fmsreports_form_fmsreports_form_page__WEBPACK_IMPORTED_MODULE_6__["FmsreportsFormPage"],
                                componentProps: {
                                    shownContent: shownContent,
                                    reportName: mode,
                                    plateNo: this.plateNo
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FmsreportsPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.subscription = this.platform.backButton.subscribe(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        if (this.menuController.isOpen()) {
                            this.menuController.close();
                        }
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    FmsreportsPage.prototype.ionViewWillLeave = function () {
        this.subscription.unsubscribe();
    };
    FmsreportsPage.prototype.ngOnInit = function () {
        this.plateNo = this.activatedRoute.snapshot.paramMap.get("plateNo");
        // this.app["logo"] = localStorage.companyLogo;
        // this.app["logo"] = localStorage.companyLogo;	
        if (localStorage.getItem('fmslogin') == 'FMS') {
            this.app["logo"] = localStorage.getItem('fmslogo');
        }
        else {
            this.app["logo"] = localStorage.companyLogo;
        }
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["app"].appName;
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
        // this.getAvailableReports();
    };
    FmsreportsPage.ctorParameters = function () { return [
        { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    FmsreportsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fmsreports',
            template: __webpack_require__(/*! raw-loader!./fmsreports.page.html */ "./node_modules/raw-loader/index.js!./src/app/fms/fmsreports/fmsreports.page.html"),
            styles: [__webpack_require__(/*! ./fmsreports.page.scss */ "./src/app/fms/fmsreports/fmsreports.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], FmsreportsPage);
    return FmsreportsPage;
}());



/***/ })

}]);
//# sourceMappingURL=fms-fmsreports-fmsreports-module-es5.js.map