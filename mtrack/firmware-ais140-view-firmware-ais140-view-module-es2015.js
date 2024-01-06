(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firmware-ais140-view-firmware-ais140-view-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/firmware-ais140-view/firmware-ais140-view.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/firmware-ais140-view/firmware-ais140-view.page.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-row class=\"toolbar\">\n      <ion-col size=\"8\">\n        <ion-title>Firmware AIS140 View</ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-row style=\"margin-top: 10px;\">\n  <ion-col>\n    <jqxGrid #myGrid [theme]=\"'material'\" (onRowclick)=\"myGridOnRowSelect($event)\" [width]=\"'99%'\" [autoheight]=\"true\"\n      [enablebrowserselection]=\"true\" [source]=\"dataAdapter\" [sortable]=\"true\" [filterable]=\"true\" [columns]=\"columns\"\n      [columnsresize]=\"true\" [enabletooltips]=\"true\" [pageable]=\"true\" [showfilterrow]=\"true\" style=\"\n            font-size: 16px;\n            text-align: center !important;\n            margin: auto;\n            cursor: pointer;\n          \">\n    </jqxGrid>\n  </ion-col>\n</ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/firmware-ais140-view/history/history.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/firmware-ais140-view/history/history.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>History</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row style=\"margin-top: 10px;\">\n    <ion-col>\n      <jqxGrid #myGrid [theme]=\"'material'\" (onRowclick)=\"myGridOnRowSelect($event)\" [width]=\"'99%'\" [autoheight]=\"true\"\n        [enablebrowserselection]=\"true\" [source]=\"dataAdapter\" [sortable]=\"true\" [filterable]=\"true\" [columns]=\"columns\"\n        [columnsresize]=\"true\" [enabletooltips]=\"true\" [pageable]=\"true\" [showfilterrow]=\"true\" style=\"\n            font-size: 16px;\n            text-align: center !important;\n            margin: auto;\n            cursor: pointer;\n          \">\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/delar-application/firmware-ais140-view/firmware-ais140-view.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/firmware-ais140-view/firmware-ais140-view.module.ts ***!
  \***************************************************************************************/
/*! exports provided: FirmwareAis140ViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmwareAis140ViewPageModule", function() { return FirmwareAis140ViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _firmware_ais140_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./firmware-ais140-view.page */ "./src/app/delar-application/firmware-ais140-view/firmware-ais140-view.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./history/history.component */ "./src/app/delar-application/firmware-ais140-view/history/history.component.ts");









const routes = [
    {
        path: '',
        component: _firmware_ais140_view_page__WEBPACK_IMPORTED_MODULE_6__["FirmwareAis140ViewPage"]
    },
    {
        path: 'history',
        component: _history_history_component__WEBPACK_IMPORTED_MODULE_8__["HistoryComponent"]
    }
];
let FirmwareAis140ViewPageModule = class FirmwareAis140ViewPageModule {
};
FirmwareAis140ViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_firmware_ais140_view_page__WEBPACK_IMPORTED_MODULE_6__["FirmwareAis140ViewPage"], _history_history_component__WEBPACK_IMPORTED_MODULE_8__["HistoryComponent"]]
    })
], FirmwareAis140ViewPageModule);



/***/ }),

/***/ "./src/app/delar-application/firmware-ais140-view/firmware-ais140-view.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/firmware-ais140-view/firmware-ais140-view.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2Zpcm13YXJlLWFpczE0MC12aWV3L2Zpcm13YXJlLWFpczE0MC12aWV3LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/delar-application/firmware-ais140-view/firmware-ais140-view.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/delar-application/firmware-ais140-view/firmware-ais140-view.page.ts ***!
  \*************************************************************************************/
/*! exports provided: FirmwareAis140ViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmwareAis140ViewPage", function() { return FirmwareAis140ViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history/history.component */ "./src/app/delar-application/firmware-ais140-view/history/history.component.ts");







let FirmwareAis140ViewPage = class FirmwareAis140ViewPage {
    constructor(commonService, ajaxService, platform, modalController) {
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.platform = platform;
        this.modalController = modalController;
    }
    getdatas() {
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/global/getMaxFirmwareUploadDetails";
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.tableData = res;
            this.commonService.dismissLoader();
            this.renderer = (row, column, value) => {
                if (value == "" || null || undefined) {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                        0 +
                        "</span>");
                }
                else {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                        value +
                        "</span>");
                }
            };
            this.source = { localdata: this.tableData };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            this.columns = [
                {
                    text: "Service Provider",
                    datafield: "serviceprovider",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: "15%",
                },
                {
                    text: "State",
                    datafield: "state",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: "15%",
                },
                {
                    text: "Backend Server",
                    datafield: "backendserver",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: "15%",
                },
                {
                    text: "Reason",
                    datafield: "reason",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: "15%",
                },
                {
                    text: "Created Date",
                    datafield: "createddate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: "15%",
                },
                {
                    text: "",
                    datafield: "download",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: "10%",
                    cellsrenderer: () => {
                        return this.myPlatform == "desktop"
                            ? "Download"
                            : "<button>Download</button>";
                    },
                    buttonclick: (row) => {
                        this.Download();
                    },
                },
                {
                    text: "",
                    datafield: "history",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: "10%",
                    cellsrenderer: () => {
                        return this.myPlatform == "desktop"
                            ? "History"
                            : "<button>History</button>";
                    },
                    buttonclick: (row) => {
                        this.history();
                    },
                },
            ];
        });
    }
    Download() {
        if (this.selectedRow.uploadfile != null) {
            const link = document.createElement("a");
            link.href = this.selectedRow.uploadfile;
            link.target = "_blank";
            link.click();
        }
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row.bounddata;
        this.show = true;
    }
    history() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _history_history_component__WEBPACK_IMPORTED_MODULE_6__["HistoryComponent"],
                cssClass: "viewform",
                componentProps: {
                    value: this.selectedRow,
                },
            });
            modal.onDidDismiss().then((data) => {
            });
            return yield modal.present();
        });
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
    }
    ionViewWillEnter() {
        this.getdatas();
    }
};
FirmwareAis140ViewPage.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FirmwareAis140ViewPage.prototype, "myGrid", void 0);
FirmwareAis140ViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-firmware-ais140-view',
        template: __webpack_require__(/*! raw-loader!./firmware-ais140-view.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/firmware-ais140-view/firmware-ais140-view.page.html"),
        styles: [__webpack_require__(/*! ./firmware-ais140-view.page.scss */ "./src/app/delar-application/firmware-ais140-view/firmware-ais140-view.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], FirmwareAis140ViewPage);



/***/ }),

/***/ "./src/app/delar-application/firmware-ais140-view/history/history.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/firmware-ais140-view/history/history.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2Zpcm13YXJlLWFpczE0MC12aWV3L2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/delar-application/firmware-ais140-view/history/history.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/delar-application/firmware-ais140-view/history/history.component.ts ***!
  \*************************************************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let HistoryComponent = class HistoryComponent {
    constructor(commonService, ajaxService, platform, modalController) {
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.platform = platform;
        this.modalController = modalController;
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    getdatas() {
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/global/getFirmwareUploadDetails?state=" + this.value.state;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.tableData = res;
            this.commonService.dismissLoader();
            this.renderer = (row, column, value) => {
                if (value == "" || null || undefined) {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                        0 +
                        "</span>");
                }
                else {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                        value +
                        "</span>");
                }
            };
            this.source = { localdata: this.tableData };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            this.columns = [
                {
                    text: "Service Provider",
                    datafield: "serviceprovider",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "State",
                    datafield: "state",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "Backend Server",
                    datafield: "backendserver",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "Reason",
                    datafield: "reason",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "Created Date",
                    datafield: "createddate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
            ];
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getdatas();
    }
};
HistoryComponent.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HistoryComponent.prototype, "myGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HistoryComponent.prototype, "value", void 0);
HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: __webpack_require__(/*! raw-loader!./history.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/firmware-ais140-view/history/history.component.html"),
        styles: [__webpack_require__(/*! ./history.component.scss */ "./src/app/delar-application/firmware-ais140-view/history/history.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], HistoryComponent);



/***/ })

}]);
//# sourceMappingURL=firmware-ais140-view-firmware-ais140-view-module-es2015.js.map