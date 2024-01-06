(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory-details-inventory-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/inventory-details/inventory-details.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/inventory-details/inventory-details.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"dealerHeader\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-row>\r\n      <ion-title>Inventory Details</ion-title>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row style=\"padding: 10px\">\r\n    <ion-col size=\"12\">\r\n      <!-- <ion-row>\r\n        <ion-col size='12' size-lg=\"12\"  size-md=\"12\" style=\"margin: 10px 0px 0px;text-align: end;\">  \r\n<ion-button class=\"submitbtn\" (click)=\"openModel($event)\"[disabled]=\"showButton\"><ion-icon name=\"add-circle\" style=\"line-height:32px;font-size:15px;margin:auto;padding:0px 5px\"></ion-icon>Slot</ion-button>\r\n<ion-button class=\"submitbtn\"(click)=\"openModel($event)\"[disabled]=\"showButton\" ><ion-icon name=\"add-circle\" style=\"line-height:32px;font-size:15px;margin:auto;padding:0px 5px\"></ion-icon>Esim Provider</ion-button>\r\n<ion-button class=\"submitbtn\"(click)=\"openModel($event)\" [disabled]=\"showButton\"><ion-icon name=\"add-circle\" style=\"line-height:32px;font-size:15px;margin:auto;padding:0px 5px\"></ion-icon>Expiry Date</ion-button>\r\n        </ion-col>\r\n      </ion-row> -->\r\n\r\n      <ion-row>\r\n        <ion-col style=\"text-align: end;\">\r\n          <ion-button (click)=\"AddTrack()\" [disabled]=\"checkbutton\">Add Track</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <jqxGrid #myGrid [selectionmode]=\"'checkbox'\" (onRowclick)=\"myGridOnRowclick($event)\"\r\n            (onRowselect)=\"myGridOnRowSelect($event)\" (onRowunselect)=\"myGridOnRowSelect($event)\" [theme]=\"'material'\"\r\n            [pagesizeoptions]=\"page\" [enablebrowserselection]=\"true\" [width]=\"'99.5%'\" [autoheight]=\"true\"\r\n            [source]=\"dataAdapter\" [columns]=\"columns\" [filterable]=\"true\" [sortable]=\"true\" [columnsresize]=\"true\"\r\n            [enabletooltips]=\"true\" [pageable]=\"true\" [showfilterrow]=\"true\" style=\"\r\n              font-size: 16px;\r\n              text-align: center !important;\r\n              margin: auto;\r\n              cursor: pointer;\r\n            \">\r\n          </jqxGrid>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n<!-- [selectionmode]=\"'checkbox'\" \r\n          (onRowselect)=\"myGridOnRowSelect($event)\"\r\n          (onRowunselect)=\"myGridOnRowSelect($event)\" -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/inventory-details/inventory-popup/inventory-popup.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/inventory-details/inventory-popup/inventory-popup.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"content-style label-style\">\r\n  <ion-row>\r\n  <ion-col>\r\n  <form [formGroup]=\"InventoryForm\">\r\n  <ion-row class=\"total-data\">\r\n  <ion-col>\r\n  <ion-row class=\"content-style\"  *ngIf=\"slotNumber\">\r\n  <ion-col size=\"4\" class=\"col-content\">\r\n  Slot Number :\r\n  </ion-col>\r\n  <ion-col size=\"7\">\r\n  <ion-input class=\"diable-style\" type=\"number\"  formControlName=\"SlotNumber\"  placeholder=\"Enter the Slot Number\"></ion-input>\r\n  </ion-col>\r\n  </ion-row>\r\n  \r\n  <ion-row class=\"content-style\" *ngIf=\"EsimProvider\">\r\n    <ion-col size=\"4\" class=\"col-content\">\r\n    Esim Provider :\r\n    </ion-col>\r\n    <ion-col size=\"7\">\r\n      <ion-input class=\"diable-style\" type=\"text\"  formControlName=\"EsimProvider\"  placeholder=\"Enter the EsimProvider\"></ion-input>\r\n    </ion-col>\r\n    </ion-row>\r\n\r\n  <ion-row class=\"content-style\" *ngIf=\"ExpiryDate\">\r\n  <ion-col size=\"4\" class=\"col-content\">\r\n  Expiry Date :\r\n  </ion-col>\r\n  <ion-col size=\"7\">\r\n  <ion-input class=\"label-style\" type=\"date\" formControlName=\"Expirydate\"></ion-input>\r\n  </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"content-style\" *ngIf=\"Comments\">\r\n  <ion-col size=\"4\" class=\"col-content\">\r\n  Comments :\r\n  </ion-col>\r\n  <ion-col size=\"7\">\r\n  <ion-input class=\"diable-style\" type=\"number\" formControlName=\"Comments\"  placeholder=\"Enter the Comments\"></ion-input>\r\n  </ion-col>\r\n  </ion-row>\r\n  </ion-col>\r\n  </ion-row>\r\n  </form>\r\n  <ion-row class=\"content-style\">\r\n  <ion-col style=\"text-align: center !important;padding: 20px;\">\r\n  <ion-button class=\"button\" type=\"submit\" [disabled]=\"!InventoryForm.valid\"(click)=\"submitBtn()\">Submit</ion-button>\r\n  <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\">Cancel</ion-button>\r\n  </ion-col>\r\n  </ion-row>\r\n  \r\n  </ion-col>\r\n  </ion-row>\r\n  </ion-content>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/inventory-details/view-comments/view-comments.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/inventory-details/view-comments/view-comments.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  view-comments works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/delar-application/inventory-details/inventory-details.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/delar-application/inventory-details/inventory-details.module.ts ***!
  \*********************************************************************************/
/*! exports provided: InventoryDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryDetailsPageModule", function() { return InventoryDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inventory_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inventory-details.page */ "./src/app/delar-application/inventory-details/inventory-details.page.ts");
/* harmony import */ var _inventory_popup_inventory_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inventory-popup/inventory-popup.component */ "./src/app/delar-application/inventory-details/inventory-popup/inventory-popup.component.ts");
/* harmony import */ var _view_comments_view_comments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-comments/view-comments.component */ "./src/app/delar-application/inventory-details/view-comments/view-comments.component.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");











var routes = [
    {
        path: '',
        component: _inventory_details_page__WEBPACK_IMPORTED_MODULE_7__["InventoryDetailsPage"]
    },
    {
        path: 'InventoryPopupComponent',
        component: _inventory_popup_inventory_popup_component__WEBPACK_IMPORTED_MODULE_8__["InventoryPopupComponent"]
    },
    {
        path: 'viewInventoryPopupComponent',
        component: _view_comments_view_comments_component__WEBPACK_IMPORTED_MODULE_9__["ViewCommentsComponent"]
    },
];
var InventoryDetailsPageModule = /** @class */ (function () {
    function InventoryDetailsPageModule() {
    }
    InventoryDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ionic_selectable__WEBPACK_IMPORTED_MODULE_10__["IonicSelectableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_5__["SharedModModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_inventory_details_page__WEBPACK_IMPORTED_MODULE_7__["InventoryDetailsPage"], _inventory_popup_inventory_popup_component__WEBPACK_IMPORTED_MODULE_8__["InventoryPopupComponent"], _view_comments_view_comments_component__WEBPACK_IMPORTED_MODULE_9__["ViewCommentsComponent"]]
        })
    ], InventoryDetailsPageModule);
    return InventoryDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/inventory-details/inventory-details.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/delar-application/inventory-details/inventory-details.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".iconSize25px {\n  font-size: 25px;\n}\n\n.submitbtn {\n  --background:#7c68f8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vaW52ZW50b3J5LWRldGFpbHMvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcaW52ZW50b3J5LWRldGFpbHNcXGludmVudG9yeS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vaW52ZW50b3J5LWRldGFpbHMvaW52ZW50b3J5LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENFO0VBQ0Usb0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2ludmVudG9yeS1kZXRhaWxzL2ludmVudG9yeS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uU2l6ZTI1cHgge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuICAuc3VibWl0YnRue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiM3YzY4Zjg7XHJcbiAgfSIsIi5pY29uU2l6ZTI1cHgge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5zdWJtaXRidG4ge1xuICAtLWJhY2tncm91bmQ6IzdjNjhmODtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/inventory-details/inventory-details.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/delar-application/inventory-details/inventory-details.page.ts ***!
  \*******************************************************************************/
/*! exports provided: InventoryDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryDetailsPage", function() { return InventoryDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _inventory_popup_inventory_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inventory-popup/inventory-popup.component */ "./src/app/delar-application/inventory-details/inventory-popup/inventory-popup.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_comments_view_comments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-comments/view-comments.component */ "./src/app/delar-application/inventory-details/view-comments/view-comments.component.ts");










var InventoryDetailsPage = /** @class */ (function () {
    function InventoryDetailsPage(location, ajaxService, platform, modalController, commonService, alertController) {
        this.location = location;
        this.ajaxService = ajaxService;
        this.platform = platform;
        this.modalController = modalController;
        this.commonService = commonService;
        this.alertController = alertController;
        this.showButton = true;
        this.checkbutton = true;
    }
    InventoryDetailsPage.prototype.closePage = function () {
        this.location.back();
    };
    InventoryDetailsPage.prototype.openModel = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _inventory_popup_inventory_popup_component__WEBPACK_IMPORTED_MODULE_7__["InventoryPopupComponent"],
                            cssClass: "addexpenseform",
                            componentProps: {
                                value: this.selectedRow,
                                mode: event.target.textContent,
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            _this.getdatas();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InventoryDetailsPage.prototype.viewModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _view_comments_view_comments_component__WEBPACK_IMPORTED_MODULE_9__["ViewCommentsComponent"],
                            cssClass: "saleform",
                            componentProps: {
                                value: this.selectedRow,
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () { });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InventoryDetailsPage.prototype.addComments = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _inventory_popup_inventory_popup_component__WEBPACK_IMPORTED_MODULE_7__["InventoryPopupComponent"],
                            cssClass: "addexpenseform",
                            componentProps: {
                                value: this.selectedRow,
                                mode: "comments",
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            _this.getdatas();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InventoryDetailsPage.prototype.getdatas = function () {
        var _this = this;
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/sensorise/getIccidDetails?companyid=" +
            localStorage.getItem("corpId");
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.tableData = res;
            _this.myGrid.clearselection();
            _this.commonService.dismissLoader();
            _this.renderer = function (row, column, value) {
                if (value == "" || null || undefined) {
                    return "---";
                }
                else {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                        value +
                        "</span>");
                }
            };
            _this.source = { localdata: _this.tableData };
            _this.dataAdapter = new jqx.dataAdapter(_this.source);
            _this.columns = [
                {
                    text: "Company Id",
                    datafield: "companyid",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "Imei Number",
                    datafield: "imeino",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "Sim 1 Number",
                    datafield: "simcardno1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "Sim 2 Number",
                    datafield: "simcardno2",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "Plate No",
                    datafield: "vehiclenumber",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "Created Date",
                    datafield: "createddate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 95,
                },
                {
                    text: "Track Now Link",
                    datafield: "linkApi",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 375,
                },
                // {
                //   text: "",
                //   datafield: "addtracknow",
                //   columntype: "button",
                //   cellsalign: "center",
                //   align: "center",
                //   width: 112,
                //   cellsrenderer: (): string => {
                //     return this.myPlatform == "desktop"
                //       ? "Add Track Now"
                //       : "<button><span style='font-size: 11px;'>Add Track Now</span></button>";
                //   },
                //   buttonclick: (row): void => {
                //     this.AddTrack();
                //   },
                // },
                {
                    text: "",
                    datafield: "tracknow",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 86,
                    cellsrenderer: function () {
                        return _this.myPlatform == "desktop"
                            ? "Track Now"
                            : "<button><span style='font-size: 11px;'>Track Now</span></button>";
                    },
                    buttonclick: function (row) {
                        _this.track();
                    },
                },
            ];
        });
    };
    InventoryDetailsPage.prototype.AddTrack = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.selectedRow) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: "Add Track Now",
                                backdropDismiss: false,
                                message: "Are you sure you want to Add Track Now?",
                                buttons: [
                                    {
                                        text: "Cancel",
                                        role: "cancel",
                                        handler: function (data) { },
                                    },
                                    {
                                        text: "Ok",
                                        handler: function (data) {
                                            _this.Addtracknow();
                                        },
                                    },
                                ],
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    InventoryDetailsPage.prototype.Addtracknow = function () {
        var _this = this;
        var selectdata = this.myGrid.getselectedrowindexes();
        var arr = [];
        for (var i = 0; i < selectdata.length; i++) {
            arr.push({
                imeiNo: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imeino,
                companyId: this.myGrid["attrSource"]["originaldata"][selectdata[i]].companyid,
                userId: this.myGrid["attrSource"]["originaldata"][selectdata[i]].userid,
            });
        }
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/tracknow/generateBulkTrackNow";
        this.ajaxService.ajaxPostWithBody(url, arr).subscribe(function (res) {
            if (res.message == "error") {
                _this.commonService.showConfirm("error");
            }
            else if (res.message == "Invalid IMEI") {
                _this.commonService.showConfirm("Invalid IMEI");
            }
            else if (res.message == "Already Assined this IMEI") {
                _this.commonService.showConfirm("Already Assined this IMEI");
            }
            else {
                _this.commonService.showConfirm("Successfully Add Track Now.");
                _this.getdatas();
            }
        });
    };
    InventoryDetailsPage.prototype.track = function () {
        window.open(this.selectedRow.linkApi, "_blank");
    };
    InventoryDetailsPage.prototype.myGridOnRowclick = function (event) {
        this.selectedRow = event.args.row.bounddata;
    };
    InventoryDetailsPage.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = this.myGrid.getselectedrowindexes();
        if (this.selectedRow.length > 0) {
            this.checkbutton = false;
        }
        else {
            this.checkbutton = true;
        }
    };
    InventoryDetailsPage.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
    };
    InventoryDetailsPage.prototype.ngAfterViewInit = function () {
        this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
    };
    InventoryDetailsPage.prototype.ionViewWillEnter = function () {
        this.getdatas();
    };
    InventoryDetailsPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
    ], InventoryDetailsPage.prototype, "myGrid", void 0);
    InventoryDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-inventory-details",
            template: __webpack_require__(/*! raw-loader!./inventory-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/inventory-details/inventory-details.page.html"),
            styles: [__webpack_require__(/*! ./inventory-details.page.scss */ "./src/app/delar-application/inventory-details/inventory-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]])
    ], InventoryDetailsPage);
    return InventoryDetailsPage;
}());



/***/ }),

/***/ "./src/app/delar-application/inventory-details/inventory-popup/inventory-popup.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/delar-application/inventory-details/inventory-popup/inventory-popup.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 18px;\n}\n\n.diable-style {\n  background: #e0e0e0;\n  line-height: 18px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.total-data {\n  margin-top: 3%;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background:#FFEBCD;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vaW52ZW50b3J5LWRldGFpbHMvaW52ZW50b3J5LXBvcHVwL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGludmVudG9yeS1kZXRhaWxzXFxpbnZlbnRvcnktcG9wdXBcXGludmVudG9yeS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vaW52ZW50b3J5LWRldGFpbHMvaW52ZW50b3J5LXBvcHVwL2ludmVudG9yeS1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0osbUJBQUE7RUFDQyxpQkFBQTtBQ0NEOztBRENBO0VBQ0EsbUJBQUE7RUFDQyxpQkFBQTtBQ0VEOztBREFBO0VBQ0ksd0JBQUE7VUFBQSx1QkFBQTtBQ0dKOztBRERBO0VBQ0ksY0FBQTtBQ0lKOztBREZBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNLSjs7QURIQTtFQUNJLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ01KOztBREpBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FDT0o7O0FETEE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNRSjs7QURMQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ1FGIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vaW52ZW50b3J5LWRldGFpbHMvaW52ZW50b3J5LXBvcHVwL2ludmVudG9yeS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1zdHlsZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbmJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG4uZGlhYmxlLXN0eWxle1xyXG5iYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG4gbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuLmNvbnRlbnQtc3R5bGV7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG59XHJcbi50b3RhbC1kYXRhIHtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcbi5jb2wtY29udGVudHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuI2FkZC1pY29ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGRkVCQ0Q7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5idXR0b257XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIC0tYmFja2dyb3VuZDogIzdjNjhmODtcclxufVxyXG4uaW5wdXR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gICAgXHJcbn1cclxuLnNlbGVjdGFibGUtaW5wdXR7XHJcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn0iLCIubGFiZWwtc3R5bGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmRpYWJsZS1zdHlsZSB7XG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uY29udGVudC1zdHlsZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udG90YWwtZGF0YSB7XG4gIG1hcmdpbi10b3A6IDMlO1xufVxuXG4uY29sLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI2FkZC1pY29uIHtcbiAgLS1iYWNrZ3JvdW5kOiNGRkVCQ0Q7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIC0tYmFja2dyb3VuZDogIzdjNjhmODtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/inventory-details/inventory-popup/inventory-popup.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/delar-application/inventory-details/inventory-popup/inventory-popup.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: InventoryPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryPopupComponent", function() { return InventoryPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");






var InventoryPopupComponent = /** @class */ (function () {
    function InventoryPopupComponent(formBuilder, modalController, ajaxService, commonService) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.slotNumber = false;
        this.EsimProvider = false;
        this.ExpiryDate = false;
        this.Comments = false;
        this.tableData = [];
    }
    InventoryPopupComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    InventoryPopupComponent.prototype.submitBtn = function () {
    };
    InventoryPopupComponent.prototype.SlotNumberForm = function () {
        this.InventoryForm = this.formBuilder.group({
            SlotNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            EsimProvider: [''],
            Expirydate: [''],
            Comments: ['']
        });
    };
    InventoryPopupComponent.prototype.EsimProviderForm = function () {
        this.InventoryForm = this.formBuilder.group({
            SlotNumber: ['',],
            EsimProvider: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Expirydate: [''],
            Comments: ['']
        });
    };
    InventoryPopupComponent.prototype.ExpirydateForm = function () {
        this.InventoryForm = this.formBuilder.group({
            SlotNumber: ['',],
            EsimProvider: [''],
            Expirydate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Comments: ['']
        });
    };
    InventoryPopupComponent.prototype.CommentsForm = function () {
        this.InventoryForm = this.formBuilder.group({
            SlotNumber: ['',],
            EsimProvider: [''],
            Expirydate: [''],
            Comments: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    InventoryPopupComponent.prototype.ngOnInit = function () {
        if (this.value) {
            if (this.mode == "Slot") {
                this.SlotNumberForm();
                this.slotNumber = true;
                this.EsimProvider = false;
                this.ExpiryDate = false;
                this.Comments = false;
                this.InventoryForm.patchValue({
                    SlotNumber: this.value.SlotNumber,
                    EsimProvider: this.value.EsimProvider,
                    ExpiryDate: this.value.ExpiryDate,
                    Comments: this.value.Comments,
                });
            }
            else if (this.mode == "Esim Provider") {
                this.EsimProviderForm();
                this.slotNumber = false;
                this.EsimProvider = true;
                this.ExpiryDate = false;
                this.Comments = false;
                this.InventoryForm.patchValue({
                    SlotNumber: this.value.SlotNumber,
                    EsimProvider: this.value.EsimProvider,
                    ExpiryDate: this.value.ExpiryDate,
                    Comments: this.value.Comments,
                });
            }
            else if (this.mode == "Expiry Date") {
                this.ExpirydateForm();
                this.slotNumber = false;
                this.EsimProvider = false;
                this.ExpiryDate = true;
                this.Comments = false;
                this.InventoryForm.patchValue({
                    SlotNumber: this.value.SlotNumber,
                    EsimProvider: this.value.EsimProvider,
                    ExpiryDate: this.value.ExpiryDate,
                    Comments: this.value.Comments,
                });
            }
            else {
                this.CommentsForm();
                this.slotNumber = false;
                this.EsimProvider = false;
                this.ExpiryDate = false;
                this.Comments = true;
                this.InventoryForm.patchValue({
                    SlotNumber: this.value.SlotNumber,
                    EsimProvider: this.value.EsimProvider,
                    ExpiryDate: this.value.ExpiryDate,
                    Comments: this.value.Comments,
                });
            }
        }
    };
    InventoryPopupComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InventoryPopupComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InventoryPopupComponent.prototype, "mode", void 0);
    InventoryPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventory-popup',
            template: __webpack_require__(/*! raw-loader!./inventory-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/inventory-details/inventory-popup/inventory-popup.component.html"),
            styles: [__webpack_require__(/*! ./inventory-popup.component.scss */ "./src/app/delar-application/inventory-details/inventory-popup/inventory-popup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], InventoryPopupComponent);
    return InventoryPopupComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/inventory-details/view-comments/view-comments.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/delar-application/inventory-details/view-comments/view-comments.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2ludmVudG9yeS1kZXRhaWxzL3ZpZXctY29tbWVudHMvdmlldy1jb21tZW50cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/delar-application/inventory-details/view-comments/view-comments.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/delar-application/inventory-details/view-comments/view-comments.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ViewCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCommentsComponent", function() { return ViewCommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ViewCommentsComponent = /** @class */ (function () {
    function ViewCommentsComponent() {
    }
    ViewCommentsComponent.prototype.ngOnInit = function () { };
    ViewCommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-comments',
            template: __webpack_require__(/*! raw-loader!./view-comments.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/inventory-details/view-comments/view-comments.component.html"),
            styles: [__webpack_require__(/*! ./view-comments.component.scss */ "./src/app/delar-application/inventory-details/view-comments/view-comments.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ViewCommentsComponent);
    return ViewCommentsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=inventory-details-inventory-details-module-es5.js.map