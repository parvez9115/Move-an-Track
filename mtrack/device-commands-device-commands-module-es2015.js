(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-commands-device-commands-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-commands/device-commands.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-commands/device-commands.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"dealerHeader\">\r\n    <ion-row>\r\n      <ion-icon class=\"iconSize25px\" (click)=\"getBack()\" name=\"arrow-back\"></ion-icon>\r\n      <ion-title>Device command</ion-title>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class='background'>\r\n  <!-- <div *ngIf = 'vehicleShow === \"apm\"'> -->\r\n  <form class='formPadding' [formGroup]=\"deviceCommand\">\r\n    <ion-item class=\"appLightBackground labelSpacing\">\r\n      <ion-label class='textcolor'>Company Name</ion-label>\r\n      <!-- <ion-select formControlName=\"companyId\" (ionChange)=\"getVehiclelist(companyList)\" placeHolder = 'Company list'>\r\n          <ion-select-option  *ngFor=\"let companyList of companyList\" [value]=\"companyList.companyName\">\r\n            {{companyList.companyName}}\r\n          </ion-select-option>\r\n        </ion-select> -->\r\n      <ionic-selectable class=\"maxWidth border-item select\" formControlName=\"companyId\" [items]=\"companyList\"\r\n        itemTextField=\"companyName\" [canSearch]=\"true\" (onChange)=\"getVehiclelist($event)\" [hasVirtualScroll]=\"true\"\r\n        placeholder=\"Company List\" closeButtonSlot=\"end\">\r\n        <ng-template ionicSelectableCloseButtonTemplate>\r\n          <ion-icon name=\"close-circle\"></ion-icon>\r\n        </ng-template>\r\n      </ionic-selectable>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"appLightBackground labelSpacing\">\r\n      <ion-label class='textcolor'>Vehicle list</ion-label>\r\n      <ion-select [disabled]=\"!getCompany\" (ionChange)=\"getCommands($event)\" formControlName=\"vehicle\"\r\n        placeHolder='Vehicle list'>\r\n        <ion-select-option *ngFor=\"let companyVehicle of companyVehicle\" [value]=\"companyVehicle\">\r\n          {{companyVehicle.imei}}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"appLightBackground labelSpacing\">\r\n      <ion-label class='textcolor'>Select command</ion-label>\r\n\r\n      <ion-select [disabled]=\"!getCompany\" (ionChange)=\"validateCommand()\" formControlName=\"commandsType\"\r\n        placeHolder='select command'>\r\n        <ion-select-option *ngFor=\"let commands of commands\" [value]=\"commands.type\">\r\n          {{commands.name}}\r\n        </ion-select-option>\r\n      </ion-select>\r\n\r\n      <!-- <select  [disabled] = \"!getCompany\" (ionChange)=\"validateCommand()\" class=\"input-item input-new\" formControlName=\"commandsType\" placeHolder = 'select command'>\r\n          <option value=\"\">Vehicle type </option>\r\n          <option *ngFor=\"let Vehicle of vehicleTypes\" [value]=\"Vehicle\">{{Vehicle}}</option>\r\n        </select> -->\r\n    </ion-item>\r\n\r\n    <ion-item class=\"appLightBackground labelSpacing\" *ngIf='showTextbox'>\r\n      <ion-textarea formControlName=\"commandBox\" placeholder=\"Enter command here\"></ion-textarea>\r\n    </ion-item>\r\n  </form>\r\n  <!-- <ion-row>\r\n      <ion-col size='6' >\r\n        <ion-row>\r\n          <ion-col size='3'></ion-col>\r\n          <ion-col size='2'>\r\n            <button style=\"padding-left: 25%;\" class=\" dealerHeader button\"  (click)=\"clearMsgBox()\">\r\n              <ion-icon  name=\"calendar-clear\" class=\"iconsize dealerHeader\"></ion-icon>\r\n            </button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      \r\n      <ion-col size='6' >\r\n        <ion-row>\r\n          <ion-col size='4'></ion-col>\r\n          <ion-col size='2'>\r\n            <button class=\" appHeader button\"(click)=\"sendCommand()\">\r\n             <ion-icon name=\"arrow-forward\"  class=\"iconsize dealerHeader\" ></ion-icon>\r\n            </button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row> -->\r\n  <!-- </div> -->\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-text-center\"> <ion-button id=\"btn\" (click)=\"sendCommand()\"\r\n        [disabled]=\"!deviceCommand.valid\">Submit</ion-button></ion-col></ion-row>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/delar-application/device-commands/device-commands-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/delar-application/device-commands/device-commands-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: DeviceCommandsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceCommandsPageRoutingModule", function() { return DeviceCommandsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _device_commands_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device-commands.page */ "./src/app/delar-application/device-commands/device-commands.page.ts");




const routes = [
    {
        path: '',
        component: _device_commands_page__WEBPACK_IMPORTED_MODULE_3__["DeviceCommandsPage"]
    }
];
let DeviceCommandsPageRoutingModule = class DeviceCommandsPageRoutingModule {
};
DeviceCommandsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeviceCommandsPageRoutingModule);



/***/ }),

/***/ "./src/app/delar-application/device-commands/device-commands.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/delar-application/device-commands/device-commands.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DeviceCommandsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceCommandsPageModule", function() { return DeviceCommandsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var _device_commands_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-commands-routing.module */ "./src/app/delar-application/device-commands/device-commands-routing.module.ts");
/* harmony import */ var _device_commands_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./device-commands.page */ "./src/app/delar-application/device-commands/device-commands.page.ts");








let DeviceCommandsPageModule = class DeviceCommandsPageModule {
};
DeviceCommandsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _device_commands_routing_module__WEBPACK_IMPORTED_MODULE_6__["DeviceCommandsPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableModule"]
        ],
        declarations: [_device_commands_page__WEBPACK_IMPORTED_MODULE_7__["DeviceCommandsPage"]]
    })
], DeviceCommandsPageModule);



/***/ }),

/***/ "./src/app/delar-application/device-commands/device-commands.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/delar-application/device-commands/device-commands.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".iconsize {\n  font-size: 30px;\n}\n\n.iconSize25px {\n  font-size: 25px;\n}\n\n#btn {\n  --background:#6252ee;\n}\n\n.maxWidth {\n  width: 100%;\n}\n\n.border-item {\n  height: 26px;\n  border-radius: 3px;\n  color: #989898;\n  background: white;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLWNvbW1hbmRzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGRldmljZS1jb21tYW5kc1xcZGV2aWNlLWNvbW1hbmRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLWNvbW1hbmRzL2RldmljZS1jb21tYW5kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDSSxlQUFBO0FDUEo7O0FEU0E7RUFDSSxlQUFBO0FDTko7O0FEUUE7RUFDSSxvQkFBQTtBQ0xKOztBRFFFO0VBQ0UsV0FBQTtBQ0xKOztBRE9BO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBRUEsZUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLWNvbW1hbmRzL2RldmljZS1jb21tYW5kcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuYnV0dG9uIHtcclxuLy8gICAgIGNvbG9yOiAjZmRlZWVmO1xyXG4vLyAgICAgaGVpZ2h0OiA1NnB4O1xyXG4vLyAgICAgd2lkdGg6IDU2cHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOjUwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3YzY4ZjggO1xyXG4vLyAgICAgcGFkZGluZy1ib3R0b206IHVuc2V0O1xyXG4vLyB9XHJcbi5pY29uc2l6ZSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLmljb25TaXplMjVweHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbiNidG57XHJcbiAgICAtLWJhY2tncm91bmQ6IzYyNTJlZTtcclxuICBcclxuICB9XHJcbiAgLm1heFdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5ib3JkZXItaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjNweDtcclxuICAgIGNvbG9yOiM5ODk4OTg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC8vIC0taWNvbi1jb2xvcjp3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuIFxyXG59XHJcblxyXG4iLCIuaWNvbnNpemUge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5pY29uU2l6ZTI1cHgge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbiNidG4ge1xuICAtLWJhY2tncm91bmQ6IzYyNTJlZTtcbn1cblxuLm1heFdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib3JkZXItaXRlbSB7XG4gIGhlaWdodDogMjZweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjb2xvcjogIzk4OTg5ODtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRleHQtYWxpZ246IGVuZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/device-commands/device-commands.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/delar-application/device-commands/device-commands.page.ts ***!
  \***************************************************************************/
/*! exports provided: DeviceCommandsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceCommandsPage", function() { return DeviceCommandsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");








let DeviceCommandsPage = class DeviceCommandsPage {
    constructor(formBuilder, ajaxService, commonService, router) {
        this.formBuilder = formBuilder;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.router = router;
        this.getCompany = false;
        this.commandValid = false;
        this.showTextbox = false;
    }
    getBack() {
        this.router.navigateByUrl('/tabs-login/new-dashboard');
    }
    onCompanyTrigger($event, companyList) {
        this.getCompany = true;
        const selectedCompany = this.deviceCommand.value.companyId;
        const userId = {
            companyid: selectedCompany.companyId
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web + '/api/vts/superadmin/company/assets/' + JSON.stringify(userId);
        this.ajaxService.ajaxGet(url)
            .subscribe(res => {
            this.companyVehicle = res;
        });
    }
    clearMsgBox() {
        if (this.deviceCommand.value.commandBox.length > 0) {
            this.deviceCommand = this.formBuilder.group({
                commandBox: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
            this.commonService.presentToast('Your command box is clear');
        }
        else {
            this.commonService.presentToast('Nothing to clear in command box');
        }
    }
    sendCommand() {
        var commandValue = '';
        if (this.deviceCommand.value.commandsType == "other") {
            commandValue = this.deviceCommand.value.commandBox;
        }
        else {
            commandValue = this.deviceCommand.value.commandsType;
        }
        if (commandValue != '') {
            const deviceConfig = {
                "imeiNo": this.deviceCommand.value.vehicle.imei,
                "manufacturer": this.deviceCommand.value.vehicle.devicetype,
                "command": commandValue,
                "pass": "1234",
                "model": this.deviceCommand.value.vehicle.model,
            };
            // const url = serverUrl.Admin + '/device/initial/smsCommands';
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].Admin + '/api/device/command';
            this.commonService.presentLoader();
            this.ajaxService.ajaxPostMethod(url, JSON.stringify(deviceConfig))
                .subscribe(res => {
                if (res.error.text == "pending" || "Sended") {
                    this.commonService.presentToast('Command sent');
                    this.deviceCommand.reset();
                    this.commonService.dismissLoader();
                }
                else {
                    this.commonService.presentToast('Command not worked!');
                    this.commonService.dismissLoader();
                }
            });
        }
        else {
            this.commonService.presentToast('Enter the Commands');
        }
    }
    getCompanyList() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web + '/global/getcompanylist?suffix=' + localStorage.companySuffix;
        this.ajaxService.ajaxGet(url)
            .subscribe(res => {
            this.companyList = res;
        });
    }
    getVehiclelist() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web + '/global/getlistofvehiclesinfo?companyId=' + this.deviceCommand.value.companyId.companyName;
        this.ajaxService.ajaxGet(url)
            .subscribe(res => {
            this.companyVehicle = res;
            if (res.length > 0) {
                this.getCompany = true;
            }
            else {
                this.commonService.presentToast('No vehicle in this company');
            }
        });
    }
    getCommands(commands) {
        //this.commands ={"Concox":[{"name":"SWITCHING Emergency","type":"SET EO"},{"name": "SWITCHING Emergency","type": "SET EO"}]}
        this.commands = this.commandsData[commands.detail.value.model];
        this.commandValid = true;
    }
    validateCommand() {
        if (this.deviceCommand.value.commandsType == "other") {
            this.showTextbox = true;
        }
        else {
            this.showTextbox = false;
        }
    }
    getDefaultcommands() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web + '/login/getPreferences?key=commands&companyId=' + this.companyDetail.companyID;
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(res => {
            this.commandsData = res;
        });
    }
    ngOnInit() {
        this.companyDetail = {
            companyID: localStorage.getItem('companyId'),
            userId: localStorage.getItem('userId')
        };
        this.getDefaultcommands();
        this.getCompanyList();
        this.companyList = JSON.parse(localStorage.getItem('dashboardData'));
        this.deviceCommand = this.formBuilder.group({
            companyId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vehicle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            commandsType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            commandBox: ['']
        });
    }
};
DeviceCommandsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selectComponent', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableComponent"])
], DeviceCommandsPage.prototype, "selectComponent", void 0);
DeviceCommandsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-device-commands',
        template: __webpack_require__(/*! raw-loader!./device-commands.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-commands/device-commands.page.html"),
        styles: [__webpack_require__(/*! ./device-commands.page.scss */ "./src/app/delar-application/device-commands/device-commands.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], DeviceCommandsPage);



/***/ })

}]);
//# sourceMappingURL=device-commands-device-commands-module-es2015.js.map