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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let AddCompanyVehiclePage = class AddCompanyVehiclePage {
    constructor(formBuilder, modalController, ajaxService, commonService, router) {
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
    getBack() {
        this.modalController.dismiss();
    }
    getFleetManager() {
        const companyDetail = {
            branchID: this.selectedCompany.companyId,
            companyID: this.selectedCompany.companyId,
            userId: this.selectedCompany.userId
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + '/api/vts/company/fleetmanager/' + JSON.stringify(companyDetail);
        this.ajaxService.ajaxGet(url)
            .subscribe(res => {
            this.fleetManager = [];
            console.log(res);
            if (res.length > 0) {
                for (let i = 0; i < res.length; i++) {
                    this.fleetManager.push(res[i].fleetManager);
                }
            }
            else {
                this.fleetManager.push("No Fleet");
                this.companyVehicle = this.formBuilder.group({
                    fleetManager: [this.fleetManager[0], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                });
            }
        });
    }
    onSubmit() {
        this.generateVin();
    }
    generateVin() {
        if (this.companyVehicle.value.imeiNo != "" || this.companyVehicle.value.imeiNo != " ") {
            const vehicleVin = this.selectedCompany.companyId + (Math.floor(Math.random() * 900) + 100);
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + '/api/vts/company/assets/validate/vin/' + vehicleVin;
            this.ajaxService.ajaxGetWithErr(url)
                .subscribe(res => {
                if (res == "available") {
                    this.generateVin();
                }
                else {
                    this.selectedCompany["vin"] = vehicleVin;
                    this.vehicleDetails();
                }
            });
        }
        else {
            this.commonService.presentToast('Assign Imei Properlly');
        }
    }
    vehicleDetails() {
        const vehicleData = {
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
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + '/api/vts/company/assets';
        this.ajaxService.ajaxPutMethod(url, JSON.stringify(vehicleData))
            .subscribe(res => {
            console.log(res);
            if (res === "persisted") {
                this.commonService.presentToast('This Vehicle Presisted Successfully!');
                this.router.navigateByUrl('/dashboard');
                this.modalController.dismiss();
            }
        });
    }
    getAssignedImei() {
        const assignedImei = { companyID: this.selectedCompany.companyId };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + '/api/vts/superadmin/company/unused/device/' + JSON.stringify(assignedImei);
        this.ajaxService.ajaxGet(url)
            .subscribe(res => {
            console.log(res);
            for (let i = 0; i < res.length; i++) {
                this.unAssignImei.push(res[i].imeiNo);
            }
            ;
        });
    }
    ngOnInit() {
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
    }
};
AddCompanyVehiclePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _company_vehicle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-vehicle.page */ "./src/app/delar-application/company-vehicle/company-vehicle.page.ts");




const routes = [
    {
        path: '',
        component: _company_vehicle_page__WEBPACK_IMPORTED_MODULE_3__["CompanyVehiclePage"]
    }
];
let CompanyVehiclePageRoutingModule = class CompanyVehiclePageRoutingModule {
};
CompanyVehiclePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CompanyVehiclePageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_company_vehicle_add_company_vehicle_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-company-vehicle/add-company-vehicle.page */ "./src/app/delar-application/company-vehicle/add-company-vehicle/add-company-vehicle.page.ts");
/* harmony import */ var _company_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-vehicle-routing.module */ "./src/app/delar-application/company-vehicle/company-vehicle-routing.module.ts");
/* harmony import */ var _company_vehicle_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company-vehicle.page */ "./src/app/delar-application/company-vehicle/company-vehicle.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dealer_component_dealer_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dealer-component/dealer-component.module */ "./src/app/delar-application/dealer-component/dealer-component.module.ts");










const addCompanyVehiclePage = [
    {
        path: '',
        component: _add_company_vehicle_add_company_vehicle_page__WEBPACK_IMPORTED_MODULE_5__["AddCompanyVehiclePage"]
    }
];
let CompanyVehiclePageModule = class CompanyVehiclePageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _company_vehicle_add_company_vehicle_add_company_vehicle_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../company-vehicle/add-company-vehicle/add-company-vehicle.page */ "./src/app/delar-application/company-vehicle/add-company-vehicle/add-company-vehicle.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");








let CompanyVehiclePage = class CompanyVehiclePage {
    constructor(router, ajaxService, modalController, alertController, commonService) {
        this.router = router;
        this.ajaxService = ajaxService;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.companyVehicle = [];
    }
    openFormModule(action, editDetails) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (action === 'add') {
                localStorage.setItem('companyVehicle', JSON.stringify(editDetails));
                const modal = yield this.modalController.create({
                    component: _company_vehicle_add_company_vehicle_add_company_vehicle_page__WEBPACK_IMPORTED_MODULE_5__["AddCompanyVehiclePage"],
                    componentProps: {
                        'action': action,
                        'editDetails': editDetails,
                        'selectedCompany': this.selectedCompany
                    }
                });
                return yield modal.present();
            }
            else {
                const alert = yield this.alertController.create({
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
                            handler: data => {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'Ok',
                            handler: data => {
                                if (data.Password === localStorage.getItem('password')) {
                                    const deleteImei = {
                                        "vin": editDetails.vin
                                    };
                                    const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web + '/api/vts/superadmin/company/assets/deleted/' + JSON.stringify(deleteImei);
                                    this.ajaxService.ajaxGet(url)
                                        .subscribe(res => {
                                        console.log('Delete Data' + res);
                                        if (res == 'no date') {
                                            this.commonService.presentToast('Vehicle data not available');
                                        }
                                        else if (res == "" || res == " ") {
                                            this.commonService.presentToast('Something went wrong');
                                        }
                                        else {
                                            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web + '/api/vts/company/assets';
                                            const deleteVehicleData = {
                                                companyID: this.selectedCompany.companyId,
                                                branchID: this.selectedCompany.companyId,
                                                emailId: this.selectedCompany.userId,
                                                vin: editDetails.vin,
                                                imeiNo: editDetails.imei
                                            };
                                            res.OperatorId == "null" ? deleteVehicleData['operatorId'] = "" : deleteVehicleData['operatorId'] = res.OperatorId;
                                            res.effFrom == "null" ? deleteVehicleData['effFrom'] = "" : deleteVehicleData['effFrom'] = res.effFrom;
                                            res.freeformid == "null" ? "" : deleteVehicleData['freeformid'] = res.freeformid;
                                            res.geozones_id == "null" ? "" : deleteVehicleData['geozones_id'] = res.geozones_id;
                                            res.landmark == "null" ? "" : deleteVehicleData['landmark'] = res.landmark;
                                            res.routeid == "null" ? "" : deleteVehicleData['routeid'] = res.routeid;
                                            this.ajaxService.ajaxDeleteWithBody(url, deleteVehicleData)
                                                .subscribe(res => {
                                                console.log('deviceDelected' + res);
                                                if (res.error.text === 'persisted') {
                                                    this.commonService.presentToast('Your vehicle deleted successfully');
                                                    this.ionViewWillEnter();
                                                }
                                                else {
                                                    this.commonService.presentToast('Something wrong! Try again later...');
                                                }
                                            });
                                        }
                                    });
                                }
                                else {
                                    this.commonService.presentToast('Password does not match');
                                }
                            }
                        }]
                });
                yield alert.present();
            }
        });
    }
    pipeFilter(search) {
        var loc;
        if (!this.companyVehicle)
            loc = [];
        if (!search)
            loc = this.companyVehicle;
        search = search.toLowerCase();
        loc = this.companyVehicle;
        var newloc = [];
        loc.filter(it => {
            if (it.plateno != null)
                if (it.plateno.replace(/ /g, '').toLowerCase().includes(search.replace(/ /g, ''))) {
                    newloc.push(it);
                }
        });
        this.displayData = newloc;
    }
    getBack() {
        this.router.navigateByUrl('/dashboard');
    }
    ionViewWillEnter() {
        this.selectedCompany = JSON.parse(localStorage.getItem('selectedCompanyData'));
        this.companyHeader = this.selectedCompany.companyName;
        const userId = { companyid: this.selectedCompany.companyId };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web + '/global/getlistofvehiclesinfo?companyId=' + this.selectedCompany.companyId;
        this.ajaxService.ajaxGet(url)
            .subscribe(res => {
            console.log(res);
            this.companyVehicle = (res);
            this.displayData = this.companyVehicle;
        });
    }
    searchStatus() {
        this.searchEnable = !this.searchEnable;
        this.displayData = this.companyVehicle;
    }
    ngOnInit() {
        this.selectedCompany = JSON.parse(localStorage.getItem('selectedCompanyData'));
        this.companyHeader = this.selectedCompany.companyName;
    }
};
CompanyVehiclePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] }
];
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



/***/ })

}]);
//# sourceMappingURL=company-vehicle-company-vehicle-module-es2015.js.map