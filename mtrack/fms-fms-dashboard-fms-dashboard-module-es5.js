(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fms-fms-dashboard-fms-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/fms/fms-dashboard/fms-dashboard.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fms/fms-dashboard/fms-dashboard.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-header>\r\n  <ion-toolbar mode=\"md\" [ngClass]=\"{'companyHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n         <ion-row>\r\n            <ion-col size='2'>\r\n              <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <ion-label class=\"headercolour\">Dashboard</ion-label>\r\n            </ion-col>\r\n            <ion-col style=\"margin: 0;\r\n            padding: 0;\">\r\n              <ion-img style=\"height: 40px;\" [src]=\"app.logo\"></ion-img>\r\n            </ion-col>\r\n           </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>  \r\n</ion-header>\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col size=\"4\"\r\n        [ngClass]='{\"displayDesktop\": myPlatform === \"desktop\", \"displayOthers\":myPlatform !== \"desktop\"}'>\r\n        <ion-card class=\"card\" style=\"height: 100%;\">\r\n            <ion-card-header style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n               Top 5 Overall Expenses</ion-card-header>\r\n            <ion-card-content>\r\n              <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n              (ionChange)=\"overallCompanyExpense($event)\">\r\n              <ion-row>\r\n                  <ion-col size='4' *ngFor=\"let overallCompanyExpense of statusChanger\">\r\n                      <ion-row>\r\n                          <ion-col size='3'>\r\n                              <ion-radio color='danger'\r\n                                  style=\"position: relative; overflow: hidden;width: 12px; height: 12px;\"\r\n                                  id='{{overallCompanyExpense.status}}' checked\r\n                                  value=\"{{overallCompanyExpense.status}}\"></ion-radio>\r\n                          </ion-col>\r\n                          <ion-col size='8'>\r\n                              <ion-label style=\"font-size: 11px;\">{{overallCompanyExpense.status}}\r\n                              </ion-label>\r\n                          </ion-col>\r\n                      </ion-row>\r\n                  </ion-col>\r\n              </ion-row>\r\n          </ion-radio-group>\r\n                <ion-row>\r\n                    <ion-col size=\"12\">\r\n                        <div id=\"OverallExpense\"\r\n                            style=\"text-align: -webkit-center;position: relative; overflow: hidden; max-width: 800px;\">\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </ion-col>\r\n    <ion-col size=\"4\"\r\n    [ngClass]='{\"displayDesktop\": myPlatform === \"desktop\", \"displayOthers\":myPlatform !== \"desktop\"}'>\r\n    <ion-card class=\"card\" style=\"height: 100%;\">\r\n        <ion-card-header style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n          Top 5 Vehicle Expenses</ion-card-header>\r\n            <ion-card-content>\r\n              <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n              (ionChange)=\"vehicleexpense($event)\">\r\n              <ion-row>\r\n                  <ion-col size='4' *ngFor=\"let vehicleExpense of statusChanger\">\r\n                      <ion-row>\r\n                          <ion-col size='3'>\r\n                              <ion-radio color='danger'\r\n                                  style=\"position: relative; overflow: hidden;width: 12px; height: 12px;\"\r\n                                  id='{{vehicleExpense.status}}' checked\r\n                                  value=\"{{vehicleExpense.status}}\"></ion-radio>\r\n                          </ion-col>\r\n                          <ion-col size='8'>\r\n                              <ion-label style=\"font-size: 11px;\">{{vehicleExpense.status}}\r\n                              </ion-label>\r\n                          </ion-col>\r\n                      </ion-row>\r\n                  </ion-col>\r\n              </ion-row>\r\n          </ion-radio-group>\r\n                <ion-row>\r\n                    <ion-col size=\"12\">\r\n                        <div id=\"vehicleExpense\"\r\n                            style=\"text-align: -webkit-center;position: relative; overflow: hidden; max-width: 800px;\">\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-card-content>\r\n    </ion-card>\r\n</ion-col>\r\n<ion-col size=\"4\"\r\n[ngClass]='{\"displayDesktop\": myPlatform === \"desktop\", \"displayOthers\":myPlatform !== \"desktop\"}'>\r\n<ion-card class=\"card\" style=\"height: 100%;\">\r\n    <ion-card-header style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n      Top 5 Fuel Expenses</ion-card-header>\r\n        <ion-card-content>\r\n          <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n          (ionChange)=\"fuelexpense($event)\">\r\n          <ion-row>\r\n              <ion-col size='4' *ngFor=\"let fuelExpense of statusChanger\">\r\n                  <ion-row>\r\n                      <ion-col size='3'>\r\n                          <ion-radio color='danger'\r\n                              style=\"position: relative; overflow: hidden;width: 12px; height: 12px;\"\r\n                              id='{{fuelExpense.status}}' checked\r\n                              value=\"{{fuelExpense.status}}\"></ion-radio>\r\n                      </ion-col>\r\n                      <ion-col size='8'>\r\n                          <ion-label style=\"font-size: 11px;\">{{fuelExpense.status}}\r\n                          </ion-label>\r\n                      </ion-col>\r\n                  </ion-row>\r\n              </ion-col>\r\n          </ion-row>\r\n      </ion-radio-group>\r\n            <ion-row>\r\n                <ion-col size=\"12\">\r\n                    <div id=\"fuelExpense\"\r\n                        style=\"text-align: -webkit-center;position: relative; overflow: hidden; max-width: 800px;\">\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-card-content>\r\n</ion-card>\r\n</ion-col>\r\n<ion-col size=\"4\"\r\n[ngClass]='{\"displayDesktop\": myPlatform === \"desktop\", \"displayOthers\":myPlatform !== \"desktop\"}'>\r\n<ion-card class=\"card\" style=\"height: 100%;\">\r\n    <ion-card-header style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n      Top 5 Overall Incomes</ion-card-header>\r\n        <ion-card-content>\r\n          <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n          (ionChange)=\"overallCompanyIncome($event)\">\r\n          <ion-row>\r\n              <ion-col size='4' *ngFor=\"let overallCompanyIncome of statusChanger\">\r\n                  <ion-row>\r\n                      <ion-col size='3'>\r\n                          <ion-radio color='danger'\r\n                              style=\"position: relative; overflow: hidden;width: 12px; height: 12px;\"\r\n                              id='{{overallCompanyIncome.status}}' checked\r\n                              value=\"{{overallCompanyIncome.status}}\"></ion-radio>\r\n                      </ion-col>\r\n                      <ion-col size='8'>\r\n                          <ion-label style=\"font-size: 11px;\">{{overallCompanyIncome.status}}\r\n                          </ion-label>\r\n                      </ion-col>\r\n                  </ion-row>\r\n              </ion-col>\r\n          </ion-row>\r\n      </ion-radio-group>\r\n            <ion-row>\r\n                <ion-col size=\"12\">\r\n                    <div id=\"Overallincome\"\r\n                        style=\"text-align: -webkit-center;position: relative; overflow: hidden; max-width: 800px;\">\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-card-content>\r\n</ion-card>\r\n</ion-col>\r\n<ion-col size=\"4\"\r\n[ngClass]='{\"displayDesktop\": myPlatform === \"desktop\", \"displayOthers\":myPlatform !== \"desktop\"}'>\r\n<ion-card class=\"card\" style=\"height: 100%;\">\r\n    <ion-card-header style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n      Top 5 Vehicle Incomes</ion-card-header>\r\n        <ion-card-content>\r\n          <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n          (ionChange)=\"vehicleincome($event)\">\r\n          <ion-row>\r\n              <ion-col size='4' *ngFor=\"let vehicleIncome of statusChanger\">\r\n                  <ion-row>\r\n                      <ion-col size='3'>\r\n                          <ion-radio color='danger'\r\n                              style=\"position: relative; overflow: hidden;width: 12px; height: 12px;\"\r\n                              id='{{vehicleIncome.status}}' checked\r\n                              value=\"{{vehicleIncome.status}}\"></ion-radio>\r\n                      </ion-col>\r\n                      <ion-col size='8'>\r\n                          <ion-label style=\"font-size: 11px;\">{{vehicleIncome.status}}\r\n                          </ion-label>\r\n                      </ion-col>\r\n                  </ion-row>\r\n              </ion-col>\r\n          </ion-row>\r\n      </ion-radio-group>\r\n            <ion-row>\r\n                <ion-col size=\"12\">\r\n                    <div id=\"vehicleincome\"\r\n                        style=\"text-align: -webkit-center;position: relative; overflow: hidden; max-width: 800px;\">\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-card-content>\r\n</ion-card>\r\n</ion-col>\r\n<ion-col size=\"4\"\r\n[ngClass]='{\"displayDesktop\": myPlatform === \"desktop\", \"displayOthers\":myPlatform !== \"desktop\"}'>\r\n<ion-card class=\"card\" style=\"height: 100%;\">\r\n    <ion-card-header style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n      Top 5 Profitable Vehicles</ion-card-header>\r\n        <ion-card-content>\r\n          <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n          (ionChange)=\"profitablevehicle($event)\">\r\n          <ion-row>\r\n              <ion-col size='4' *ngFor=\"let profitableVehicle of statusChanger\">\r\n                  <ion-row>\r\n                      <ion-col size='3'>\r\n                          <ion-radio color='danger'\r\n                              style=\"position: relative; overflow: hidden;width: 12px; height: 12px;\"\r\n                              id='{{profitableVehicle.status}}' checked\r\n                              value=\"{{profitableVehicle.status}}\"></ion-radio>\r\n                      </ion-col>\r\n                      <ion-col size='8'>\r\n                          <ion-label style=\"font-size: 11px;\">{{profitableVehicle.status}}\r\n                          </ion-label>\r\n                      </ion-col>\r\n                  </ion-row>\r\n              </ion-col>\r\n          </ion-row>\r\n      </ion-radio-group>\r\n            <ion-row>\r\n                <ion-col size=\"12\">\r\n                    <div id=\"Profitablevehicle\"\r\n                        style=\"text-align: -webkit-center;position: relative; overflow: hidden; max-width: 800px;\">\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-card-content>\r\n</ion-card>\r\n</ion-col>\r\n<ion-col size=\"4\"\r\n[ngClass]='{\"displayDesktop\": myPlatform === \"desktop\", \"displayOthers\":myPlatform !== \"desktop\"}'>\r\n<ion-card class=\"card\" style=\"height: 100%;\">\r\n    <ion-card-header style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n      Top 5 Lossable Vehicles</ion-card-header>\r\n        <ion-card-content>\r\n          <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n          (ionChange)=\"lossablevehicle($event)\">\r\n          <ion-row>\r\n              <ion-col size='4' *ngFor=\"let LossableVehicle of statusChanger\">\r\n                  <ion-row>\r\n                      <ion-col size='3'>\r\n                          <ion-radio color='danger'\r\n                              style=\"position: relative; overflow: hidden;width: 12px; height: 12px;\"\r\n                              id='{{LossableVehicle.status}}' checked\r\n                              value=\"{{LossableVehicle.status}}\"></ion-radio>\r\n                      </ion-col>\r\n                      <ion-col size='8'>\r\n                          <ion-label style=\"font-size: 11px;\">{{LossableVehicle.status}}\r\n                          </ion-label>\r\n                      </ion-col>\r\n                  </ion-row>\r\n              </ion-col>\r\n          </ion-row>\r\n      </ion-radio-group>\r\n            <ion-row>\r\n                <ion-col size=\"12\">\r\n                    <div id=\"Lossable\"\r\n                        style=\"text-align: -webkit-center;position: relative; overflow: hidden; max-width: 800px;\">\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-card-content>\r\n</ion-card>\r\n</ion-col>\r\n<ion-col size=\"4\"\r\n[ngClass]='{\"displayDesktop\": myPlatform === \"desktop\", \"displayOthers\":myPlatform !== \"desktop\"}'>\r\n<ion-card class=\"card\" style=\"height: 100%;\"> \r\n<ion-card-header style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\nOverall Trip Chart</ion-card-header>\r\n<ion-card-content>\r\n  <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n  (ionChange)=\"overalltrip($event)\">\r\n  <ion-row>\r\n      <ion-col size='4' *ngFor=\"let overallTrip of statusChanger\">\r\n          <ion-row>\r\n              <ion-col size='3'>\r\n                  <ion-radio color='danger'\r\n                      style=\"position: relative; overflow: hidden;width: 12px; height: 12px;\"\r\n                      id='{{overallTrip.status}}' checked\r\n                      value=\"{{overallTrip.status}}\"></ion-radio>\r\n              </ion-col>\r\n              <ion-col size='8'>\r\n                  <ion-label style=\"font-size: 11px;\">{{overallTrip.status}}\r\n                  </ion-label>\r\n              </ion-col>\r\n          </ion-row>\r\n      </ion-col>\r\n  </ion-row>\r\n</ion-radio-group>\r\n    <ion-row>\r\n        <ion-col size=\"9\">\r\n            <div id=\"Overalltrip\"\r\n                style=\"text-align: -webkit-center;position: relative; overflow: hidden; max-width: 800px;\">\r\n            </div>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n            <div style=\"padding-top: 50px ; font-size: 11px;\"  *ngFor=\"let items of OverallTripCount\">\r\n                <ion-row>\r\n                    <ion-col size=\"1.5\">\r\n                        <div class=\"circle\" style=\"border-color:#e06b8f;\"></div>\r\n                    </ion-col>\r\n                    <ion-col size=\"10.5\" style=\"padding: 2px 0px 0px 0px;font-size: 12px;color: black;font-weight: 700;\">\r\n                       <ion-label style=\"padding: 0px 0px 0px 14px;font-weight:100;\"> OPEN </ion-label>{{items.open}}\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"1.5\">\r\n                        <div class=\"circle\" style=\"border-color:#7f82be;\"></div>\r\n                    </ion-col>\r\n                    <ion-col size=\"10.5\" style=\"padding: 2px 0px 0px 0px;font-size: 12px;color: black;font-weight: 700;\">\r\n                       <ion-label style=\"padding: 0px 0px 0px 14px;font-weight:100;\"> CLOSE </ion-label>{{items.close}}\r\n                    </ion-col>\r\n                </ion-row>\r\n            </div>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-card-content>\r\n</ion-card>\r\n</ion-col>\r\n<ion-col size=\"4\"\r\n[ngClass]='{\"displayDesktop\": myPlatform === \"desktop\", \"displayOthers\":myPlatform !== \"desktop\"}'>\r\n<ion-card class=\"card\" style=\"height: 100%;\">\r\n    <ion-card-header style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n        Overall Income and Expense</ion-card-header>\r\n        <ion-card-content>\r\n               <ion-row>\r\n                <ion-col size=\"12\">\r\n                  <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n                  (ionChange)=\"overallIncomeandExpense($event)\">\r\n                  <ion-row>\r\n                      <ion-col size='4' *ngFor=\"let overallIncomeandExpense of statusChanger\">\r\n                          <ion-row>\r\n                              <ion-col size='3'>\r\n                                  <ion-radio color='danger'\r\n                                      style=\"position: relative; overflow: hidden;width: 12px; height: 12px;\"\r\n                                      id='{{overallIncomeandExpense.status}}' checked\r\n                                      value=\"{{overallIncomeandExpense.status}}\"></ion-radio>\r\n                              </ion-col>\r\n                              <ion-col size='8'>\r\n                                  <ion-label style=\"font-size: 11px;\">{{overallIncomeandExpense.status}}\r\n                                  </ion-label>\r\n                              </ion-col>\r\n                          </ion-row>\r\n                      </ion-col>\r\n                  </ion-row>\r\n              </ion-radio-group>\r\n                 <ion-row class=\"incomeandexpense\"  *ngFor=\"let data of OverallIncomeandExpense\">\r\n                    <ion-col size=\"6\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\">\r\n                      <ion-card class=\"expense-border-model\"> \r\n                        <ion-row class=\"table-head\">Income</ion-row>\r\n                        <ion-row>\r\n                          <ion-col size=12>\r\n                           <ion-row style=\"place-content: center;\">\r\n                              <ion-row class=\"income-expense-label\">{{data.TotalIncome}}</ion-row>\r\n                           </ion-row>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                    <ion-col size=\"6\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\" >\r\n                      <ion-card class=\"expense-border-model\"> \r\n                        <ion-row class=\"table-head\">Expense</ion-row>\r\n                        <ion-row>\r\n                          <ion-col size=12>\r\n                           <ion-row style=\"place-content: center;\">\r\n                              <ion-row class=\"income-expense-label\">{{data.TotalExpense}}</ion-row>\r\n                           </ion-row>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"income-expense-col\"><ion-label class=\"expense-cost-label\">{{data.List}}:{{data.value}}</ion-label></ion-col>\r\n                   </ion-row>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-card-content>\r\n</ion-card>\r\n</ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/fms/fms-dashboard/fms-dashboard.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/fms/fms-dashboard/fms-dashboard.module.ts ***!
  \***********************************************************/
/*! exports provided: FmsDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FmsDashboardPageModule", function() { return FmsDashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fms_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fms-dashboard.page */ "./src/app/fms/fms-dashboard/fms-dashboard.page.ts");







var routes = [
    {
        path: '',
        component: _fms_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["FmsDashboardPage"]
    }
];
var FmsDashboardPageModule = /** @class */ (function () {
    function FmsDashboardPageModule() {
    }
    FmsDashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fms_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["FmsDashboardPage"]]
        })
    ], FmsDashboardPageModule);
    return FmsDashboardPageModule;
}());



/***/ }),

/***/ "./src/app/fms/fms-dashboard/fms-dashboard.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/fms/fms-dashboard/fms-dashboard.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-header {\n  background-color: #c1c1d2;\n  padding: 4px 0px;\n  font-size: 12px;\n}\n\nion-card-title {\n  color: white;\n  font-size: 100%;\n  font-weight: 700;\n}\n\nion-title {\n  padding: 0px 5%;\n}\n\n.vehStates::first-letter {\n  text-transform: capitalize;\n}\n\nion-card {\n  border-radius: 10px;\n  margin: 10px 16px;\n}\n\nion-card-content {\n  padding: 0px 16px;\n}\n\n.semiCircle {\n  background: #32384b;\n  width: 100%;\n  height: 50px;\n  border-radius: 50%/100%;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.alertsStyle {\n  color: white;\n  font-size: 20px;\n  display: grid;\n}\n\n.header-md:after {\n  left: 0;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: none;\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.statusBar {\n  padding: 2px;\n  border-radius: 5px;\n  font-weight: bold;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 15px;\n  color: white;\n  padding-top: 5px;\n  border-radius: 5px;\n  font-weight: bold;\n}\n\n.vehicleStatusHeading {\n  background-color: #e51e43;\n  color: white;\n  width: 60%;\n  text-align: center;\n  padding: 2px;\n  font-size: 15px;\n  font-weight: bold;\n  border-radius: 100px;\n}\n\n.circle {\n  background-color: #FFF;\n  border: 3px solid;\n  border-radius: 18px;\n  box-shadow: 0 0 2px #888;\n  height: 15px;\n  width: 15px;\n}\n\n.card {\n  margin: 0px;\n  padding: 0px;\n}\n\n.displayDesktop {\n  display: block;\n}\n\n.displayOthers {\n  display: none;\n}\n\n.displayLine {\n  border-top: 0.5px solid rgba(128, 128, 128, 0.5);\n  padding: 0px;\n  align-self: center;\n}\n\n.checkboxIos {\n  background-color: #e4e4e4;\n}\n\n.expense-border-model {\n  border-left: 2px solid lightgray;\n  border-right: 2px solid lightgray;\n  border-bottom: 2px solid lightgray;\n  height: 70%;\n}\n\n.table-head {\n  font-size: 21px;\n  place-content: center;\n  background: #6c2a84;\n  font-variant: all-petite-caps;\n  font-weight: 500;\n  color: white;\n}\n\n.income-expense-label {\n  font-size: 22px;\n  font-weight: bold;\n  padding: 5px 5px 10px 5px;\n  color: black;\n}\n\n.income-expense-total-col {\n  font-size: 15px;\n  color: black;\n  font-weight: 600;\n  text-align: start;\n}\n\n.income-expense-col {\n  text-align: center;\n  margin-top: 5%;\n}\n\n.expense-cost-label {\n  font-size: 20px;\n  font-weight: 500;\n  background: #6c2a84;\n  color: white;\n  padding: 0px 10px 0px 10px;\n}\n\n.incomeandexpense {\n  margin-top: 14%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm1zL2Ztcy1kYXNoYm9hcmQvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxmbXNcXGZtcy1kYXNoYm9hcmRcXGZtcy1kYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9mbXMvZm1zLWRhc2hib2FyZC9mbXMtZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxlQUFBO0FDQUo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FESUE7RUFDSSwwQkFBQTtBQ0RKOztBRElBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7QUNESjs7QURJQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElBO0VBQ0ksT0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUFpQixZQUFBO0VBQ2pCLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBRElBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDREo7O0FER0U7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENFO0VBRUUsY0FBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtBQ0VKOztBRENBO0VBQ0ksZ0RBQUE7RUFDQyxZQUFBO0VBQVksa0JBQUE7QUNHakI7O0FEQUE7RUFFUSx5QkFBQTtBQ0VSOztBREVJO0VBRUEsZ0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREVBO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0csZUFBQTtFQUNDLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL2Ztcy9mbXMtZGFzaGJvYXJkL2Ztcy1kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMWMxZDI7XHJcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgcGFkZGluZzogMHB4IDUlO1xyXG59XHJcblxyXG4udmVoU3RhdGVzOjpmaXJzdC1sZXR0ZXIge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggMTZweDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcclxufVxyXG5cclxuLnNlbWlDaXJjbGUge1xyXG4gICAgYmFja2dyb3VuZDogIzMyMzg0YjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlIC8gMTAwJTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG5cclxuLmFsZXJ0c1N0eWxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbn1cclxuXHJcbi5oZWFkZXItbWQ6YWZ0ZXJ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAtNXB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAwIHRvcCAtMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG59XHJcblxyXG4uc3RhdHVzQmFye1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDsgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5cclxuLnZlaGljbGVTdGF0dXNIZWFkaW5ne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1MWU0MztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIH0gXHJcbiAgLmNpcmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAjODg4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgfVxyXG4uY2FyZHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbiAgLmRpc3BsYXlEZXNrdG9we1xyXG5cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5kaXNwbGF5T3RoZXJze1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmRpc3BsYXlMaW5le1xyXG4gICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpO1xyXG4gICAgIHBhZGRpbmc6MHB4O2FsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmNoZWNrYm94SW9ze1xyXG4gICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5leHBlbnNlLWJvcmRlci1tb2RlbFxyXG57XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxufVxyXG4udGFibGUtaGVhZHtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICM2YzJhODQ7XHJcbiAgICBmb250LXZhcmlhbnQ6IGFsbC1wZXRpdGUtY2FwcztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmluY29tZS1leHBlbnNlLWxhYmVse1xyXG4gICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDVweCA1cHggMTBweCA1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmluY29tZS1leHBlbnNlLXRvdGFsLWNvbHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxufVxyXG4uaW5jb21lLWV4cGVuc2UtY29se1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDo1JTtcclxufVxyXG4uZXhwZW5zZS1jb3N0LWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJhY2tncm91bmQ6ICM2YzJhODQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcclxufVxyXG4uaW5jb21lYW5kZXhwZW5zZXtcclxuICAgIG1hcmdpbi10b3A6IDE0JTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgIiwiaW9uLWNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFkMjtcbiAgcGFkZGluZzogNHB4IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5pb24tdGl0bGUge1xuICBwYWRkaW5nOiAwcHggNSU7XG59XG5cbi52ZWhTdGF0ZXM6OmZpcnN0LWxldHRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAxNnB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4IDE2cHg7XG59XG5cbi5zZW1pQ2lyY2xlIHtcbiAgYmFja2dyb3VuZDogIzMyMzg0YjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlLzEwMCU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4uYWxlcnRzU3R5bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmhlYWRlci1tZDphZnRlciB7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAwIHRvcCAtMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4uc3RhdHVzQmFyIHtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi52ZWhpY2xlU3RhdHVzSGVhZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTFlNDM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDYwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG4uY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm9yZGVyOiAzcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggIzg4ODtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uZGlzcGxheURlc2t0b3Age1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRpc3BsYXlPdGhlcnMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZGlzcGxheUxpbmUge1xuICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNSk7XG4gIHBhZGRpbmc6IDBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uY2hlY2tib3hJb3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xufVxuXG4uZXhwZW5zZS1ib3JkZXItbW9kZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmF5O1xuICBoZWlnaHQ6IDcwJTtcbn1cblxuLnRhYmxlLWhlYWQge1xuICBmb250LXNpemU6IDIxcHg7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzZjMmE4NDtcbiAgZm9udC12YXJpYW50OiBhbGwtcGV0aXRlLWNhcHM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmluY29tZS1leHBlbnNlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogNXB4IDVweCAxMHB4IDVweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaW5jb21lLWV4cGVuc2UtdG90YWwtY29sIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4uaW5jb21lLWV4cGVuc2UtY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmV4cGVuc2UtY29zdC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZDogIzZjMmE4NDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbn1cblxuLmluY29tZWFuZGV4cGVuc2Uge1xuICBtYXJnaW4tdG9wOiAxNCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/fms/fms-dashboard/fms-dashboard.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/fms/fms-dashboard/fms-dashboard.page.ts ***!
  \*********************************************************/
/*! exports provided: FmsDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FmsDashboardPage", function() { return FmsDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var FmsDashboardPage = /** @class */ (function () {
    function FmsDashboardPage(platform, router, commonService, ajaxService) {
        this.platform = platform;
        this.router = router;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.app = { logo: 'logo.png' };
        this.vehicleCount = {};
        this.today = new Date();
        this.yesterday = new Date();
        this.week = new Date();
        this.month = new Date();
        this.statusChanger = [{ status: 'Yesterday', isChecked: true },
            { status: 'Last 7 Days', isChecked: false },
            { status: '1 Month', isChecked: false }
        ];
    }
    FmsDashboardPage.prototype.totalVehicleCount = function (status, color, chartData) {
        var router = this.router;
        var commonService = this.commonService;
        highcharts__WEBPACK_IMPORTED_MODULE_4__["chart"](status, {
            chart: {
                type: 'pie',
                width: 300,
                height: 300
            },
            colors: color,
            title: {
                text: '',
            },
            credits: {
                enabled: false
            },
            tooltip: {
                enabled: true,
                pointFormat: '{series.name}:<b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: false,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false,
                        format: '<b>{point.name} </b>{point.percentage:.1f}%'
                    },
                },
            },
            series: [{
                    type: 'pie',
                    animation: false,
                    // innerSize: '50%',
                    name: 'Percentage',
                    data: chartData,
                    showInLegend: true,
                }],
            legend: {
                layout: 'vertical',
                verticalAlign: 'bottom',
            },
        });
    };
    FmsDashboardPage.prototype.overallCompanyExpense = function (data) {
        var _this = this;
        if (data.detail.value === "Yesterday") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getFmsOverAllExpense?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.yesterdayDate + '&tdate=' + this.yesterdayDate;
        }
        else if (data.detail.value === "Last 7 Days") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getFmsOverAllExpense?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.previousWeekDate + '&tdate=' + this.todayDate;
        }
        else {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getFmsOverAllExpense?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.previousMonthDate + '&tdate=' + this.todayDate;
        }
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(function (res) {
            if (res == "No Data" || res == undefined) {
                _this.OverallExpense = { "color": ["#4652a2"], "type": [["No Data", 0]] };
            }
            else {
                _this.OverallExpense = res;
            }
            _this.totalVehicleCount("OverallExpense", _this.OverallExpense.color, _this.OverallExpense.type);
        });
    };
    FmsDashboardPage.prototype.vehicleexpense = function (data) {
        var _this = this;
        if (data.detail.value === "Yesterday") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getFmsVehicleExpense?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.yesterdayDate + '&tdate=' + this.yesterdayDate;
        }
        else if (data.detail.value === "Last 7 Days") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getFmsVehicleExpense?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.previousWeekDate + '&tdate=' + this.todayDate;
        }
        else {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getFmsVehicleExpense?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.previousMonthDate + '&tdate=' + this.todayDate;
        }
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(function (res) {
            if (res == "No Data" || res == undefined) {
                _this.vehicleExpense = { "color": ["#4652a2"], "type": [["No Data", 0]] };
            }
            else {
                _this.vehicleExpense = res;
            }
            _this.totalVehicleCount("vehicleExpense", _this.vehicleExpense.color, _this.vehicleExpense.type);
        });
    };
    FmsDashboardPage.prototype.fuelexpense = function (data) {
        var _this = this;
        if (data.detail.value === "Yesterday") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getFmsFuelExpense?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.yesterdayDate + '&tdate=' + this.yesterdayDate;
        }
        else if (data.detail.value === "Last 7 Days") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getFmsFuelExpense?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.previousWeekDate + '&tdate=' + this.todayDate;
        }
        else {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getFmsFuelExpense?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.previousMonthDate + '&tdate=' + this.todayDate;
        }
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(function (res) {
            if (res == "No Data" || res == undefined) {
                _this.fuelExpense = { "color": ["#4652a2"], "type": [["No Data", 0]] };
            }
            else {
                _this.fuelExpense = res;
            }
            _this.totalVehicleCount("fuelExpense", _this.fuelExpense.color, _this.fuelExpense.type);
        });
    };
    FmsDashboardPage.prototype.overallCompanyIncome = function (data) {
        var _this = this;
        if (data.detail.value === "Yesterday") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getFmsOverAllIncome?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.yesterdayDate + '&tdate=' + this.yesterdayDate;
        }
        else if (data.detail.value === "Last 7 Days") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getFmsOverAllIncome?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.previousWeekDate + '&tdate=' + this.todayDate;
        }
        else {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getFmsOverAllIncome?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.previousMonthDate + '&tdate=' + this.todayDate;
        }
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(function (res) {
            if (res == "No Data" || res == undefined) {
                _this.OverallIncome = { "color": ["#4652a2"], "type": [["No Data", 0]] };
            }
            else {
                _this.OverallIncome = res;
            }
            _this.totalVehicleCount("Overallincome", _this.OverallIncome.color, _this.OverallIncome.type);
        });
    };
    FmsDashboardPage.prototype.vehicleincome = function (data) {
        var _this = this;
        if (data.detail.value === "Yesterday") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getFmsVehicleIncome?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.yesterdayDate + '&tdate=' + this.yesterdayDate;
        }
        else if (data.detail.value === "Last 7 Days") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getFmsVehicleIncome?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.previousWeekDate + '&tdate=' + this.todayDate;
        }
        else {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getFmsVehicleIncome?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.previousMonthDate + '&tdate=' + this.todayDate;
        }
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(function (res) {
            if (res == "No Data" || res == undefined) {
                _this.vehicleIncome = { "color": ["#4652a2"], "type": [["No Data", 0]] };
            }
            else {
                _this.vehicleIncome = res;
            }
            _this.totalVehicleCount("vehicleincome", _this.vehicleIncome.color, _this.vehicleIncome.type);
        });
    };
    FmsDashboardPage.prototype.profitablevehicle = function (data) {
        var _this = this;
        if (data.detail.value === "Yesterday") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getFmsProfitVehicle?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.yesterdayDate + '&tdate=' + this.yesterdayDate;
        }
        else if (data.detail.value === "Last 7 Days") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getFmsProfitVehicle?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.previousWeekDate + '&tdate=' + this.todayDate;
        }
        else {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getFmsProfitVehicle?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.previousMonthDate + '&tdate=' + this.todayDate;
        }
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(function (res) {
            if (res == "No Data" || res == undefined) {
                _this.profitableVehicle = { "color": ["#4652a2"], "type": [["No Data", 0]] };
            }
            else {
                _this.profitableVehicle = res;
            }
            _this.totalVehicleCount("Profitablevehicle", _this.profitableVehicle.color, _this.profitableVehicle.type);
        });
    };
    FmsDashboardPage.prototype.lossablevehicle = function (data) {
        var _this = this;
        if (data.detail.value === "Yesterday") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getFmsLossVehicle?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.yesterdayDate + '&tdate=' + this.yesterdayDate;
        }
        else if (data.detail.value === "Last 7 Days") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getFmsLossVehicle?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.previousWeekDate + '&tdate=' + this.todayDate;
        }
        else {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getFmsLossVehicle?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.previousMonthDate + '&tdate=' + this.todayDate;
        }
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(function (res) {
            if (res == "No Data" || res == undefined) {
                _this.LossableVehicle = { "color": ["#4652a2"], "type": [["No Data", 0]] };
            }
            else {
                _this.LossableVehicle = res;
            }
            _this.totalVehicleCount("Lossable", _this.LossableVehicle.color, _this.LossableVehicle.type);
        });
    };
    FmsDashboardPage.prototype.overalltrip = function (data) {
        var _this = this;
        if (data.detail.value === "Yesterday") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getTripChart?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.yesterdayDate + '&tdate=' + this.yesterdayDate;
        }
        else if (data.detail.value === "Last 7 Days") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getTripChart?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.previousWeekDate + '&tdate=' + this.todayDate;
        }
        else {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getTripChart?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.previousMonthDate + '&tdate=' + this.todayDate;
        }
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(function (res) {
            if (res == "No Data" || res == undefined) {
                _this.OverallTrip = { "color": ["#e06b8f"], "count": [{ "close": 0, "open": 0 }], "type": [["No Data", 0]] };
                _this.OverallTripCount = _this.OverallTrip.count;
            }
            else {
                _this.OverallTrip = res;
                _this.OverallTripCount = res.count;
            }
            _this.totalVehicleCount("Overalltrip", _this.OverallTrip.color, _this.OverallTrip.type);
        });
    };
    FmsDashboardPage.prototype.overallIncomeandExpense = function (data) {
        var _this = this;
        if (data.detail.value === "Yesterday") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getOverAllIncomeAndExpense?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.yesterdayDate + '&tdate=' + this.yesterdayDate;
        }
        else if (data.detail.value === "Last 7 Days") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getOverAllIncomeAndExpense?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.previousWeekDate + '&tdate=' + this.todayDate;
        }
        else {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].fmsUrl + '/dashboard/getOverAllIncomeAndExpense?companyid=' + localStorage.getItem('corpId') + '&fdate=' + this.previousMonthDate + '&tdate=' + this.todayDate;
        }
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(function (res) {
            if (res == "No Data" || res == undefined) {
                _this.OverallIncomeandExpense = [{ "TotalExpenseCount": 0, "TotalExpense": 0, "TotalIncomeCount": 0, "List": "Loss", "TotalIncome": 0, "value": "0" }];
            }
            else {
                _this.OverallIncomeandExpense = res;
            }
        });
    };
    FmsDashboardPage.prototype.ngOnInit = function () {
        // this.app["logo"] = localStorage.companyLogo;
        if (localStorage.getItem('fmslogin') == 'FMS') {
            this.app["logo"] = localStorage.getItem('fmslogo');
        }
        else {
            this.app["logo"] = localStorage.companyLogo;
        }
        this.appName = this.app.appName;
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
        this.todayDate = this.today.getFullYear() + "-";
        this.todayDate += (this.today.getMonth() + 1 < 10 ? "0" + (this.today.getMonth() + 1).toString() : (this.today.getMonth() + 1).toString()) + "-";
        this.todayDate += this.today.getDate() < 10 ? "0" + this.today.getDate().toString() : this.today.getDate().toString();
        //yesterday date
        this.yesterday.setDate(this.yesterday.getDate() - 1);
        this.yesterdayDate = this.yesterday.getFullYear() + "-";
        this.yesterdayDate += (this.yesterday.getMonth() + 1 < 10 ? "0" + (this.yesterday.getMonth() + 1).toString() : (this.yesterday.getMonth() + 1).toString()) + "-";
        this.yesterdayDate += this.yesterday.getDate() < 10 ? "0" + this.yesterday.getDate().toString() : this.yesterday.getDate().toString();
        //week date 
        this.week.setDate(this.week.getDate() - 7);
        this.previousWeekDate = this.week.getFullYear() + "-";
        this.previousWeekDate += (this.week.getMonth() + 1 < 10 ? "0" + (this.week.getMonth() + 1).toString() : (this.week.getMonth() + 1).toString()) + "-";
        this.previousWeekDate += this.week.getDate() < 10 ? "0" + this.week.getDate().toString() : this.week.getDate().toString();
        //month date
        this.month.setMonth(this.month.getMonth() - 1);
        this.previousMonthDate = this.month.getFullYear() + "-";
        this.previousMonthDate += (this.month.getMonth() + 1 < 10 ? "0" + (this.month.getMonth() + 1).toString() : (this.month.getMonth() + 1).toString()) + "-";
        this.previousMonthDate += this.month.getDate() < 10 ? "0" + this.month.getDate().toString() : this.month.getDate().toString();
    };
    FmsDashboardPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FmsDashboardPage.prototype, "applicationname", void 0);
    FmsDashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fms-dashboard',
            template: __webpack_require__(/*! raw-loader!./fms-dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/fms/fms-dashboard/fms-dashboard.page.html"),
            styles: [__webpack_require__(/*! ./fms-dashboard.page.scss */ "./src/app/fms/fms-dashboard/fms-dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"]])
    ], FmsDashboardPage);
    return FmsDashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=fms-fms-dashboard-fms-dashboard-module-es5.js.map