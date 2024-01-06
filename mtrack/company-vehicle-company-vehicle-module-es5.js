(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-vehicle-company-vehicle-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/company-vehicle/add-company-vehicle/add-company-vehicle.page.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/company-vehicle/add-company-vehicle/add-company-vehicle.page.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\r\n  <ion-toolbar mode=\"md\" class=\"appHeader\" >\r\n    <ion-grid class='background' >\r\n      <ion-row >\r\n        <ion-col size=\"1\" style='align-self: center;'>\r\n          <ion-icon (click)= 'getBack()' name=\"arrow-round-back\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col style='padding: 0px;'>\r\n          <ion-title>{{header}} Company Vehicle</ion-title>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class='background'>\r\n  <form class='formPadding' [formGroup]=\"companyVehicle\">\r\n    <ion-item>\r\n      <ion-icon slot=\"start\" name=\"car\"></ion-icon>\r\n      <ion-input formControlName=\"plateNo\" placeholder=\"Plate No\"></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"appLightBackground labelSpacing\">\r\n      <ion-icon slot=\"start\"  ios=\"ios-phone-portrait\" md=\"md-phone-portrait\"></ion-icon>\r\n      <ion-label class='textcolor'>Imei No</ion-label>\r\n      <ion-select formControlName=\"imeiNo\" placeHolder = 'Imei'>\r\n        <ion-select-option *ngFor=\"let unAssignImei of unAssignImei\" [value]=\"unAssignImei\">\r\n          {{unAssignImei}}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item class=\"appLightBackground labelSpacing\">\r\n      <ion-icon slot=\"start\"  name=\"cog\"></ion-icon>\r\n      <ion-label class='textcolor'>Assert Category</ion-label>\r\n      <ion-select [formControlName]=\"assert\" placeHolder = 'Assert Category'>\r\n        <ion-select-option *ngFor=\"let assertCategories of assertCategories\" [value]=\"assertCategories\">\r\n          {{assertCategories}}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item class=\"appLightBackground labelSpacing\">\r\n      <ion-icon  slot=\"start\"  ios=\"ios-body\" md=\"md-body\"></ion-icon>\r\n      <ion-label class='textcolor'>Fleet Manager</ion-label>\r\n      <ion-select multiple=\"true\" formControlName=\"fleetManager\" placeHolder = 'Fleet Manager'>\r\n        <ion-select-option *ngFor=\"let fleetManager of fleetManager\" [value]=\"fleetManager\">\r\n          {{fleetManager}}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </form> \r\n  <ion-col *ngIf = 'header != \"Edit\"'  size=\"6\" offset=\"4\">\r\n    <ion-button (click)=\"onSubmit()\" shape=\"round\">\r\n      <ion-icon name=\"add-circle-outline\"></ion-icon>Add\r\n    </ion-button>\r\n  </ion-col>\r\n  </ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/company-vehicle/company-vehicle.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/company-vehicle/company-vehicle.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header >\r\n  <ion-toolbar mode=\"md\" color=\"primary\" >\r\n    <ion-grid class='background' style='padding: 0px;'>\r\n      <ion-row style='padding: 0px;'>\r\n        <ion-col size=\"2\">\r\n         <ion-icon (click)='getBack()' name=\"arrow-back\" style=\"font-size: 20px;\r\n          padding: 10px;\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"7\" style='padding: 0px;align-self: center;'>\r\n          <ion-title style='padding: 0px;'>Company </ion-title>\r\n        </ion-col>\r\n        <ion-col size=\"3\" style='padding: 0px;align-self: center;'>\r\n          <ion-icon  *ngIf = '!searchEnable' style='font-size: 25px;' ios=\"md-search\" (click) ='searchStatus()' md=\"md-search\"></ion-icon>\r\n          <ion-icon *ngIf = 'searchEnable'  style='font-size: 25px;'  (click) ='searchStatus()'  name=\"close\"></ion-icon>\r\n        </ion-col>\r\n       </ion-row>\r\n       <ion-row>\r\n       \r\n       </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n  <ion-row color=\"primary\" style=\"    justify-content: center;\" *ngIf = 'searchEnable' >\r\n    <ion-col size='12'>\r\n      <ion-searchbar (ionChange)=\"pipeFilter(searchInput)\" style=\"padding: 0px;\" class='buttonData'  cancelButtonText=\"Custom Cancel\" [(ngModel)]=\"searchInput\"  animated></ion-searchbar>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-header> -->\r\n\r\n<ion-header>\r\n  <ion-toolbar class=\"dealerHeader\">\r\n    <ion-row>\r\n      <ion-icon class=\"iconSize25px\" (click)=\"getBack()\" name=\"arrow-back\"></ion-icon>\r\n      <ion-title >Company</ion-title>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n  <ion-searchbar (ionChange)=\"pipeFilter(searchInput)\" style=\"padding: 0px;\" class='buttonData'  cancelButtonText=\"Custom Cancel\" [(ngModel)]=\"searchInput\"  animated></ion-searchbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  \r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col size=12 size-sm=\"12\" size-lg=\"4\" size-md=\"6\" *ngFor=\"let companyVehicle of displayData\">\r\n      <ion-card style=\"border-left: 4px solid #7c68f8; margin: 0px;\">\r\n        <ion-card-content style=\"padding: 7px;\">\r\n      <app-assert-list-card [cardDetail]=\"companyVehicle\"></app-assert-list-card>\r\n      </ion-card-content>\r\n      </ion-card>\r\n      <!-- <ion-virtual-scroll [items]=\"companyVehicle\" approxItemHeight=\"320px\"> -->\r\n        <!-- <ion-card  [id]='companyVehicle.imei' class=\"card-wrapper\">\r\n          <ion-row>\r\n          <ion-col size=\"12\" class=\"header-company\">{{companyHeader}}</ion-col>\r\n         </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-row>\r\n              <ion-col>\r\n                   <ion-row>\r\n                     <ion-col size=\"2\" class=\"icon_col\">\r\n                      <ion-icon size=\"12\"  name=\"car\"></ion-icon>\r\n                     </ion-col>\r\n                    <ion-col size=\"10\" class=\"align-dataCol\">\r\n                   <ion-row>\r\n                  <ion-col size=\"12\">\r\n              {{companyVehicle.plateno}}\r\n            </ion-col>\r\n          </ion-row>\r\n        <ion-row>\r\n         <ion-col size=\"12\" class=\"underline\">\r\n            PlateNo\r\n              </ion-col>\r\n                </ion-row>\r\n                     </ion-col>\r\n                      </ion-row> \r\n                       <ion-row>\r\n                      <ion-col size=\"2\" class=\"icon_col\">\r\n                        <ion-icon name=\"phone-portrait\" class=\"common-icon\"></ion-icon>\r\n                      </ion-col>\r\n                    <ion-col size=\"10\"  class=\"align-dataCol\">\r\n                  <ion-row>\r\n                <ion-col size=\"12\">\r\n               {{companyVehicle.imei}}\r\n             </ion-col>\r\n            </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"underline\">\r\n              IMEI No\r\n               </ion-col>\r\n                 </ion-row>\r\n                   </ion-col>\r\n                     </ion-row>\r\n                     </ion-col>\r\n                   </ion-row>\r\n                 </ion-col>\r\n                 <ion-col  size=\"6\">\r\n \r\n              <ion-row>\r\n            <ion-col size=\"2\" class=\"icon_col\">\r\n              <ion-icon  size=\"12\"  size=\"12\"  name=\"card\"></ion-icon>\r\n            </ion-col>\r\n          <ion-col size=\"10\" class=\"align-dataCol\">\r\n        <ion-row>\r\n      <ion-col size=\"12\" >\r\n        {{companyVehicle.sim}}\r\n          </ion-col>\r\n            </ion-row>\r\n              <ion-row>\r\n               <ion-col size=\"12\" class=\"underline\">\r\n                Sim No\r\n                 </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n               </ion-row>\r\n         <ion-row>\r\n       <ion-col size=\"2\" class=\"icon_col\">\r\n        <ion-icon name=\"cog\" class=\"common-icon\"></ion-icon>\r\n       </ion-col>\r\n           <ion-col size=\"10\" class=\"align-dataCol\">\r\n             <ion-row>\r\n               <ion-col size=\"12\">\r\n                {{companyVehicle.devicetype}}\r\n                  </ion-col>\r\n                    </ion-row>\r\n                      <ion-row>\r\n                     <ion-col size=\"12\" class=\"underline\">\r\n                    Device Type\r\n                   </ion-col>\r\n                  </ion-row>\r\n                 \r\n              </ion-col>\r\n            </ion-row> \r\n        </ion-col>\r\n      \r\n    </ion-card>\r\n  </ion-virtual-scroll>  -->\r\n    </ion-col>\r\n    </ion-row>\r\n     </ion-grid>\r\n  </ion-content>\r\n"

/***/ }),

/***/ "./src/app/delar-application/company-vehicle/add-company-vehicle/add-company-vehicle.page.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/delar-application/company-vehicle/add-company-vehicle/add-company-vehicle.page.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2NvbXBhbnktdmVoaWNsZS9hZGQtY29tcGFueS12ZWhpY2xlL2FkZC1jb21wYW55LXZlaGljbGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/delar-application/company-vehicle/add-company-vehicle/add-company-vehicle.page.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/delar-application/company-vehicle/add-company-vehicle/add-company-vehicle.page.ts ***!
  \***************************************************************************************************/
/*! exports provided: AddCompanyVehiclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyVehiclePage", function() { return AddCompanyVehiclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var AddCompanyVehiclePage = /** @class */ (function () {
    function AddCompanyVehiclePage(formBuilder, modalController, ajaxService, commonService, router) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.router = router;
        this.assertCategories = ['FORKLIFTS', 'LIGHT TOWERS', 'WELDING MACHINES', 'DEEPSEA GENERATOR', 'COMPRESSORS',
            '32kw CEM7 GENERATORS', 'BUS', 'CAR', 'TRUCK', 'BIKE', 'AUTO', 'BATTERY', 'BOBCAT', 'TANKER', 'LOADER', 'DABBAB',
            'DUMPER', 'STREET SWEEPER', 'TOWED STREET SWEEPER', 'COMPACTOR', 'DOUBLE CABIN', 'HOOK LIFT', 'CRANE',
            'SMALL TRUCK'];
        this.fleetManager = [];
        this.unAssignImei = [];
    }
    AddCompanyVehiclePage.prototype.getBack = function () {
        this.modalController.dismiss();
    };
    AddCompanyVehiclePage.prototype.getFleetManager = function () {
        var _this = this;
        var companyDetail = {
            branchID: this.selectedCompany.companyId,
            companyID: this.selectedCompany.companyId,
            userId: this.selectedCompany.userId
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + '/api/vts/company/fleetmanager/' + JSON.stringify(companyDetail);
        this.ajaxService.ajaxGet(url)
            .subscribe(function (res) {
            _this.fleetManager = [];
            console.log(res);
            if (res.length > 0) {
                for (var i = 0; i < res.length; i++) {
                    _this.fleetManager.push(res[i].fleetManager);
                }
            }
            else {
                _this.fleetManager.push("No Fleet");
                _this.companyVehicle = _this.formBuilder.group({
                    fleetManager: [_this.fleetManager[0], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                });
            }
        });
    };
    AddCompanyVehiclePage.prototype.onSubmit = function () {
        this.generateVin();
    };
    AddCompanyVehiclePage.prototype.generateVin = function () {
        var _this = this;
        if (this.companyVehicle.value.imeiNo != "" || this.companyVehicle.value.imeiNo != " ") {
            var vehicleVin_1 = this.selectedCompany.companyId + (Math.floor(Math.random() * 900) + 100);
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + '/api/vts/company/assets/validate/vin/' + vehicleVin_1;
            this.ajaxService.ajaxGetWithErr(url)
                .subscribe(function (res) {
                if (res == "available") {
                    _this.generateVin();
                }
                else {
                    _this.selectedCompany["vin"] = vehicleVin_1;
                    _this.vehicleDetails();
                }
            });
        }
        else {
            this.commonService.presentToast('Assign Imei Properlly');
        }
    };
    AddCompanyVehiclePage.prototype.vehicleDetails = function () {
        var _this = this;
        var vehicleData = {
            "vin": this.selectedCompany.vin,
            "companyID": this.selectedCompany.companyId,
            "branchID": this.selectedCompany.companyId,
            "username": this.selectedCompany.companyId,
            "emailId": this.selectedCompany.companyId,
            "userEntry": "kingstrackalerts@gmail.com",
            "imeiNo": this.companyVehicle.value.imeiNo,
            "fleetUser": this.selectedCompany.userId + ',' + (this.companyVehicle.value.fleetManager).toString(),
            "group": "true",
            "plateNo": this.companyVehicle.value.plateNo,
            "odometer": "true",
            "type": "type",
            "model": "model",
            "dateofpurchase": "true",
            "insuranceExpiry": "true",
            "expectedvehiclemilage": "0",
            "contactNo": "true",
            "fuelTanklit": "true",
            "additionalWarranty": "true",
            "dateofreg": "true",
            "regexpiry": "true",
            "mileageInit": "true",
            "digitalInput1": "|",
            "digitalInput2": "|",
            "digitalInput3": "|",
            "digitalInput4": "|",
            "DigitalOutput": "|||",
            "analoginput1": "|||",
            "analoginput2": "|||",
            "analoginput3": "|||",
            "analoginput4": "|||",
            "onewiredinput": "|||",
            "actual1": "",
            "mv1": "",
            "actual2": "",
            "mv2": "",
            "actual3": "",
            "mv3": "",
            "actual4": "",
            "mv4": "",
            "assetCategory": this.companyVehicle.value.assert,
            "roadGeo": "true",
            "freeForm": "true",
            "prefRest": "true",
            "landMark": "true",
            "icon": this.companyVehicle.value.assert,
            "shift": "true",
            "showHierarchy": false,
            "PreventiveMaintenanceType": "kilometer"
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + '/api/vts/company/assets';
        this.ajaxService.ajaxPutMethod(url, JSON.stringify(vehicleData))
            .subscribe(function (res) {
            console.log(res);
            if (res === "persisted") {
                _this.commonService.presentToast('This Vehicle Presisted Successfully!');
                _this.router.navigateByUrl('/dashboard');
                _this.modalController.dismiss();
            }
        });
    };
    AddCompanyVehiclePage.prototype.getAssignedImei = function () {
        var _this = this;
        var assignedImei = { companyID: this.selectedCompany.companyId };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + '/api/vts/superadmin/company/unused/device/' + JSON.stringify(assignedImei);
        this.ajaxService.ajaxGet(url)
            .subscribe(function (res) {
            console.log(res);
            for (var i = 0; i < res.length; i++) {
                _this.unAssignImei.push(res[i].imeiNo);
            }
            ;
        });
    };
    AddCompanyVehiclePage.prototype.ngOnInit = function () {
        this.companyVehicle = this.formBuilder.group({
            plateNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            imeiNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            assert: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fleetManager: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.selectedCompany = JSON.parse(localStorage.getItem('selectedCompanyData'));
        this.getFleetManager();
        this.getAssignedImei();
        this.modelAction = this.action;
        this.modelIfEdit = this.editDetails;
        this.company = this.selectedCompany;
        this.header = this.modelAction === 'add' ? 'Add' : 'Edit';
    };
    AddCompanyVehiclePage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddCompanyVehiclePage.prototype, "action", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddCompanyVehiclePage.prototype, "editDetails", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddCompanyVehiclePage.prototype, "selectedCompany", void 0);
    AddCompanyVehiclePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-company-vehicle',
            template: __webpack_require__(/*! raw-loader!./add-company-vehicle.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/company-vehicle/add-company-vehicle/add-company-vehicle.page.html"),
            styles: [__webpack_require__(/*! ./add-company-vehicle.page.scss */ "./src/app/delar-application/company-vehicle/add-company-vehicle/add-company-vehicle.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AddCompanyVehiclePage);
    return AddCompanyVehiclePage;
}());



/***/ }),

/***/ "./src/app/delar-application/company-vehicle/company-vehicle-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/delar-application/company-vehicle/company-vehicle-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: CompanyVehiclePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyVehiclePageRoutingModule", function() { return CompanyVehiclePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_vehicle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-vehicle.page */ "./src/app/delar-application/company-vehicle/company-vehicle.page.ts");




var routes = [
    {
        path: '',
        component: _company_vehicle_page__WEBPACK_IMPORTED_MODULE_3__["CompanyVehiclePage"]
    }
];
var CompanyVehiclePageRoutingModule = /** @class */ (function () {
    function CompanyVehiclePageRoutingModule() {
    }
    CompanyVehiclePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CompanyVehiclePageRoutingModule);
    return CompanyVehiclePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/delar-application/company-vehicle/company-vehicle.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/delar-application/company-vehicle/company-vehicle.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CompanyVehiclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyVehiclePageModule", function() { return CompanyVehiclePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_company_vehicle_add_company_vehicle_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-company-vehicle/add-company-vehicle.page */ "./src/app/delar-application/company-vehicle/add-company-vehicle/add-company-vehicle.page.ts");
/* harmony import */ var _company_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-vehicle-routing.module */ "./src/app/delar-application/company-vehicle/company-vehicle-routing.module.ts");
/* harmony import */ var _company_vehicle_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company-vehicle.page */ "./src/app/delar-application/company-vehicle/company-vehicle.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dealer_component_dealer_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dealer-component/dealer-component.module */ "./src/app/delar-application/dealer-component/dealer-component.module.ts");










var addCompanyVehiclePage = [
    {
        path: '',
        component: _add_company_vehicle_add_company_vehicle_page__WEBPACK_IMPORTED_MODULE_5__["AddCompanyVehiclePage"]
    }
];
var CompanyVehiclePageModule = /** @class */ (function () {
    function CompanyVehiclePageModule() {
    }
    CompanyVehiclePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _dealer_component_dealer_component_module__WEBPACK_IMPORTED_MODULE_9__["DealerComponentsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _company_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_6__["CompanyVehiclePageRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(addCompanyVehiclePage)
            ],
            declarations: [_company_vehicle_page__WEBPACK_IMPORTED_MODULE_7__["CompanyVehiclePage"], _add_company_vehicle_add_company_vehicle_page__WEBPACK_IMPORTED_MODULE_5__["AddCompanyVehiclePage"]]
        })
    ], CompanyVehiclePageModule);
    return CompanyVehiclePageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/company-vehicle/company-vehicle.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/delar-application/company-vehicle/company-vehicle.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".iconSize25px {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vY29tcGFueS12ZWhpY2xlL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGNvbXBhbnktdmVoaWNsZVxcY29tcGFueS12ZWhpY2xlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vY29tcGFueS12ZWhpY2xlL2NvbXBhbnktdmVoaWNsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9jb21wYW55LXZlaGljbGUvY29tcGFueS12ZWhpY2xlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uU2l6ZTI1cHh7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG5cclxuLy8gKntcclxuLy8gICAgIG1hcmdpbjogMDtcclxuLy8gICAgIHBhZGRpbmc6IDAuN3B4O1xyXG4vLyB9XHJcbi8vIC5jYXJkLXdyYXBwZXJ7XHJcbi8vICAgICBmb250LXNpemU6IDEwcHg7XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIG1hcmdpbjo1cHggMTBweDtcclxuLy8gICAgIHBhZGRpbmc6IDFweCA1cHg7XHJcbiAgICBcclxuLy8gfVxyXG4vLyAuaXRlbS1uYXRpdmUge1xyXG4vLyAgICAgcGFkZGluZzowcHg7XHJcbi8vIH1cclxuLy8gLnN2Zy1zaXplMXtcclxuLy8gICAgIHdpZHRoOjIwcHg7XHJcbi8vIH1cclxuLy8gLnN2Zy1zaXplMntcclxuLy8gICAgIHdpZHRoOjE1cHg7XHJcbi8vIH1cclxuLy8gLmNvbXBhbnlOYW1le1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA5ZDhjNTtcclxuLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIHBhZGRpbmc6IDVweDtcclxuLy8gfVxyXG4vLyBpb24tdG9vbGJhcntcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDYxLCAxMDgsIDIzNik7IFxyXG4vLyB9XHJcbi8vIC5jb21tb24taWNvbntcclxuLy8gICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4vLyB9XHJcbi8vIC5pY29uX2NvbHtcclxuLy8gICAgIGNsaXAtcGF0aDogcG9seWdvbigzMCUgMCUsIDcwJSAwJSwgMTAwJSAzMCUsIDEwMCUgNzAlLCA3MCUgMTAwJSwgMzAlIDEwMCUsIDAlIDcwJSwgMCUgMzAlKTtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICAjMDlkOGM1O1xyXG4vLyAgICAgbWFyZ2luOjJweCAwcHg7XHJcbi8vICAgICBkaXNwbGF5OiBncmlkO1xyXG4vLyAgICAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4vLyB9XHJcbi8vIC5oZWFkZXItY29tcGFueXtcclxuLy8gICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgOTYlIDc0JSwgNCUgNzQlKTtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICAjMDlkOGM1O1xyXG4vLyAgICAgY29sb3I6ICNmNGY1Zjg7XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIHBhZGRpbmc6IDBweCAxMHB4IDhweDtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTFweDtcclxuLy8gfVxyXG4vLyAuYWxpZ24tZGF0YUNvbHtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4vLyB9XHJcbi8vIC51bmRlcmxpbmUge1xyXG4vLyAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4vLyAgICAgY29sb3I6ICMxZTIwMjM7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICB9ICAgXHJcbiAgXHJcbi8vICAgLnVuZGVybGluZTpiZWZvcmUge1xyXG4vLyAgICAgbWFyZ2luOiBhdXRvO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgY29udGVudDogXCJcIjtcclxuLy8gICAgIGhlaWdodDogMnB4O1xyXG4vLyAgICAgYm90dG9tOiAxMnB4O1xyXG4vLyAgICAgd2lkdGg6IDEzcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiNmZmQzMWE7XHJcbi8vICAgICBsZWZ0OiAycHg7XHJcbi8vICAgfVxyXG4iLCIuaWNvblNpemUyNXB4IHtcbiAgZm9udC1zaXplOiAyNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/company-vehicle/company-vehicle.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/delar-application/company-vehicle/company-vehicle.page.ts ***!
  \***************************************************************************/
/*! exports provided: CompanyVehiclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyVehiclePage", function() { return CompanyVehiclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _company_vehicle_add_company_vehicle_add_company_vehicle_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../company-vehicle/add-company-vehicle/add-company-vehicle.page */ "./src/app/delar-application/company-vehicle/add-company-vehicle/add-company-vehicle.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");








var CompanyVehiclePage = /** @class */ (function () {
    function CompanyVehiclePage(router, ajaxService, modalController, alertController, commonService) {
        this.router = router;
        this.ajaxService = ajaxService;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.companyVehicle = [];
    }
    CompanyVehiclePage.prototype.openFormModule = function (action, editDetails) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(action === 'add')) return [3 /*break*/, 3];
                        localStorage.setItem('companyVehicle', JSON.stringify(editDetails));
                        return [4 /*yield*/, this.modalController.create({
                                component: _company_vehicle_add_company_vehicle_add_company_vehicle_page__WEBPACK_IMPORTED_MODULE_5__["AddCompanyVehiclePage"],
                                componentProps: {
                                    'action': action,
                                    'editDetails': editDetails,
                                    'selectedCompany': this.selectedCompany
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [4 /*yield*/, this.alertController.create({
                            header: 'Are you sure?',
                            inputs: [{
                                    name: 'Password',
                                    type: 'password',
                                    placeholder: 'Enter the password'
                                }],
                            message: 'You want to Delete ' + editDetails.plateno,
                            backdropDismiss: false,
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Ok',
                                    handler: function (data) {
                                        if (data.Password === localStorage.getItem('password')) {
                                            var deleteImei = {
                                                "vin": editDetails.vin
                                            };
                                            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web + '/api/vts/superadmin/company/assets/deleted/' + JSON.stringify(deleteImei);
                                            _this.ajaxService.ajaxGet(url)
                                                .subscribe(function (res) {
                                                console.log('Delete Data' + res);
                                                if (res == 'no date') {
                                                    _this.commonService.presentToast('Vehicle data not available');
                                                }
                                                else if (res == "" || res == " ") {
                                                    _this.commonService.presentToast('Something went wrong');
                                                }
                                                else {
                                                    var url_1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web + '/api/vts/company/assets';
                                                    var deleteVehicleData = {
                                                        companyID: _this.selectedCompany.companyId,
                                                        branchID: _this.selectedCompany.companyId,
                                                        emailId: _this.selectedCompany.userId,
                                                        vin: editDetails.vin,
                                                        imeiNo: editDetails.imei
                                                    };
                                                    res.OperatorId == "null" ? deleteVehicleData['operatorId'] = "" : deleteVehicleData['operatorId'] = res.OperatorId;
                                                    res.effFrom == "null" ? deleteVehicleData['effFrom'] = "" : deleteVehicleData['effFrom'] = res.effFrom;
                                                    res.freeformid == "null" ? "" : deleteVehicleData['freeformid'] = res.freeformid;
                                                    res.geozones_id == "null" ? "" : deleteVehicleData['geozones_id'] = res.geozones_id;
                                                    res.landmark == "null" ? "" : deleteVehicleData['landmark'] = res.landmark;
                                                    res.routeid == "null" ? "" : deleteVehicleData['routeid'] = res.routeid;
                                                    _this.ajaxService.ajaxDeleteWithBody(url_1, deleteVehicleData)
                                                        .subscribe(function (res) {
                                                        console.log('deviceDelected' + res);
                                                        if (res.error.text === 'persisted') {
                                                            _this.commonService.presentToast('Your vehicle deleted successfully');
                                                            _this.ionViewWillEnter();
                                                        }
                                                        else {
                                                            _this.commonService.presentToast('Something wrong! Try again later...');
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                        else {
                                            _this.commonService.presentToast('Password does not match');
                                        }
                                    }
                                }]
                        })];
                    case 4:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CompanyVehiclePage.prototype.pipeFilter = function (search) {
        var loc;
        if (!this.companyVehicle)
            loc = [];
        if (!search)
            loc = this.companyVehicle;
        search = search.toLowerCase();
        loc = this.companyVehicle;
        var newloc = [];
        loc.filter(function (it) {
            if (it.plateno != null)
                if (it.plateno.replace(/ /g, '').toLowerCase().includes(search.replace(/ /g, ''))) {
                    newloc.push(it);
                }
        });
        this.displayData = newloc;
    };
    CompanyVehiclePage.prototype.getBack = function () {
        this.router.navigateByUrl('/dashboard');
    };
    CompanyVehiclePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.selectedCompany = JSON.parse(localStorage.getItem('selectedCompanyData'));
        this.companyHeader = this.selectedCompany.companyName;
        var userId = { companyid: this.selectedCompany.companyId };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web + '/global/getlistofvehiclesinfo?companyId=' + this.selectedCompany.companyId;
        this.ajaxService.ajaxGet(url)
            .subscribe(function (res) {
            console.log(res);
            _this.companyVehicle = (res);
            _this.displayData = _this.companyVehicle;
        });
    };
    CompanyVehiclePage.prototype.searchStatus = function () {
        this.searchEnable = !this.searchEnable;
        this.displayData = this.companyVehicle;
    };
    CompanyVehiclePage.prototype.ngOnInit = function () {
        this.selectedCompany = JSON.parse(localStorage.getItem('selectedCompanyData'));
        this.companyHeader = this.selectedCompany.companyName;
    };
    CompanyVehiclePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] }
    ]; };
    CompanyVehiclePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-vehicle',
            template: __webpack_require__(/*! raw-loader!./company-vehicle.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/company-vehicle/company-vehicle.page.html"),
            styles: [__webpack_require__(/*! ./company-vehicle.page.scss */ "./src/app/delar-application/company-vehicle/company-vehicle.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]])
    ], CompanyVehiclePage);
    return CompanyVehiclePage;
}());



/***/ })

}]);
//# sourceMappingURL=company-vehicle-company-vehicle-module-es5.js.map