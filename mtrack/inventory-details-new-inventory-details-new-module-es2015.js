(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory-details-new-inventory-details-new-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/inventory-details-new/inventory-details-new.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/inventory-details-new/inventory-details-new.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-row>\n      <ion-title>Inventory Details</ion-title>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row style=\"padding: 10px\">\n    <ion-col>\n      <jqxGrid\n        #myGrid\n        [theme]=\"'material'\"\n        (onRowclick)=\"myGridOnRowSelect($event)\"\n        [width]=\"'99.5%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [enablebrowserselection]=\"true\"\n        [sortable]=\"true\"\n        [columns]=\"columns\"\n        [columns]=\"columns\"\n        [filterable]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n        [columnsresize]=\"true\"\n      >\n      </jqxGrid> </ion-col\n  ></ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/inventory-details-new/inventory-details-new.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/inventory-details-new/inventory-details-new.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: InventoryDetailsNewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryDetailsNewPageModule", function() { return InventoryDetailsNewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inventory_details_new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inventory-details-new.page */ "./src/app/delar-application/inventory-details-new/inventory-details-new.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");








const routes = [
    {
        path: "",
        component: _inventory_details_new_page__WEBPACK_IMPORTED_MODULE_6__["InventoryDetailsNewPage"],
    },
];
let InventoryDetailsNewPageModule = class InventoryDetailsNewPageModule {
};
InventoryDetailsNewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_inventory_details_new_page__WEBPACK_IMPORTED_MODULE_6__["InventoryDetailsNewPage"]],
    })
], InventoryDetailsNewPageModule);



/***/ }),

/***/ "./src/app/delar-application/inventory-details-new/inventory-details-new.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/inventory-details-new/inventory-details-new.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2ludmVudG9yeS1kZXRhaWxzLW5ldy9pbnZlbnRvcnktZGV0YWlscy1uZXcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/delar-application/inventory-details-new/inventory-details-new.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/inventory-details-new/inventory-details-new.page.ts ***!
  \***************************************************************************************/
/*! exports provided: InventoryDetailsNewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryDetailsNewPage", function() { return InventoryDetailsNewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let InventoryDetailsNewPage = class InventoryDetailsNewPage {
    constructor(ajaxService, commonService, formBuilder, platform, alertController) {
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.alertController = alertController;
    }
    getdatas() {
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/sensorise/getIccidDetails?companyid=" +
            localStorage.getItem("corpId");
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.tableData = res;
            this.commonService.dismissLoader();
            this.renderer = (row, column, value) => {
                if (value == "" || null || undefined) {
                    return "---";
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
                    text: "Imei Number",
                    datafield: "imeino",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 180,
                },
                {
                    text: "Sim 1 Number",
                    datafield: "simcardno1",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 180,
                },
                {
                    text: "Sim 2 Number",
                    datafield: "simcardno2",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 180,
                },
                {
                    text: "Plate No",
                    datafield: "vehiclenumber",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 180,
                },
                {
                    text: "Created Date",
                    datafield: "createddate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 180,
                },
                {
                    text: "Dealer Name",
                    datafield: "providername",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 180,
                },
                {
                    text: "Download",
                    datafield: "Download",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                    cellsrenderer: () => {
                        return "Download";
                    },
                    buttonclick: (row) => {
                        // this.download();
                    },
                },
                {
                    text: "Remove",
                    datafield: "remove",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                    cellsrenderer: () => {
                        return this.myPlatform == "desktop"
                            ? "Remove"
                            : "<button>Remove</button>";
                    },
                    buttonclick: (row) => {
                        // this.deleteModel(row);
                    },
                },
            ];
        });
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
    }
    ngAfterViewInit() {
        this.myGrid.horizontalscrollbarstep(["70"]);
        this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
    }
    ionViewWillEnter() {
        this.getdatas();
    }
};
InventoryDetailsNewPage.ctorParameters = () => [
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InventoryDetailsNewPage.prototype, "myGrid", void 0);
InventoryDetailsNewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-inventory-details-new",
        template: __webpack_require__(/*! raw-loader!./inventory-details-new.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/inventory-details-new/inventory-details-new.page.html"),
        styles: [__webpack_require__(/*! ./inventory-details-new.page.scss */ "./src/app/delar-application/inventory-details-new/inventory-details-new.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], InventoryDetailsNewPage);



/***/ })

}]);
//# sourceMappingURL=inventory-details-new-inventory-details-new-module-es2015.js.map