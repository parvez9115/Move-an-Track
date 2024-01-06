(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["skt-gate-gate-table-gate-table-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/gate/gate-table/gate-table.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/gate/gate-table/gate-table.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <div class=\"gate-wrapper\">\r\n     <ion-row  class=\"header-section\">\r\n      <ion-col size=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"0\"> \r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-col>  \r\n      <ion-col size=\"10\" size-sm=\"10\" size-md=\"10\" size-lg=\"12\" id=\"btn-wrapper\">\r\n        Gate Details\r\n      </ion-col>\r\n    </ion-row>  \r\n   <ion-row>\r\n     <ion-col>\r\n       <ion-button color='primary' class=\"parent-btn\" (click)='openparentDetailModel()'>Add</ion-button>\r\n       <ion-button color='primary' class=\"parent-btn\" (click)='parentEditModel()'>Edit</ion-button>\r\n       <ion-button color='primary' class=\"parent-btn\" (click)='deletebtn()' >Delete</ion-button>\r\n     </ion-col>\r\n    </ion-row> \r\n  </div> \r\n  <div id=\"export-wrapper\" >\r\n      <!-- <ion-img src=\"assets/student_Details/print.svg\"  class=\"toolbar-row\" (click)=\"btnOnClick()\"></ion-img> -->\r\n      <ion-img src=\"assets/student_Details/pdf.svg\" class=\"toolbar-row\" (click)=\"createPdf()\"></ion-img>\r\n      <ion-img src=\"assets/student_Details/excel.svg\" class=\"toolbar-row\"  (click)=\"exportToExcel()\"> </ion-img>\r\n        <!-- <ion-img src=\"assets/student_Details/refresher.svg\" class=\"toolbar-row\"></ion-img> -->\r\n    </div> \r\n</ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n <div class=\"grid_Container\">\r\n  <jqxGrid\r\n  (onRowselect)=\"myGridOnRowSelect($event)\"\r\n  [pageable]=\"true\"\r\n  [selectionmode]=\"'singlerow'\"\r\n  [showfilterrow]=\"true\"\r\n  [filterable]=\"true\"\r\n  [sortable]=\"true\"\r\n  [width]=\"'100%'\"\r\n  [source]=\"dataAdapter\" \r\n  [columns]=\"columns\" \r\n  [autoheight]=\"true\"\r\n  [theme]=\"'material'\"\r\n  #myGrid \r\n  style=\"font-size:16px;text-align: center !important;\">\r\n  </jqxGrid>\r\n</div>\r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/skt/gate/gate-table/gate-table.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/skt/gate/gate-table/gate-table.module.ts ***!
  \**********************************************************/
/*! exports provided: GateTablePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GateTablePageModule", function() { return GateTablePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gate_table_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gate-table.page */ "./src/app/skt/gate/gate-table/gate-table.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _sktcomponents_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../sktcomponents.module */ "./src/app/skt/sktcomponents.module.ts");









var routes = [
    {
        path: '',
        component: _gate_table_page__WEBPACK_IMPORTED_MODULE_6__["GateTablePage"]
    }
];
var GateTablePageModule = /** @class */ (function () {
    function GateTablePageModule() {
    }
    GateTablePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _sktcomponents_module__WEBPACK_IMPORTED_MODULE_8__["SktComponentsModule"]
            ],
            declarations: [_gate_table_page__WEBPACK_IMPORTED_MODULE_6__["GateTablePage"]]
        })
    ], GateTablePageModule);
    return GateTablePageModule;
}());



/***/ }),

/***/ "./src/app/skt/gate/gate-table/gate-table.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/skt/gate/gate-table/gate-table.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gate-wrapper, .grid_Container {\n  border: 1px solid #c7c3c3;\n  margin: 5px 10px 0;\n}\n\n.grid_Container {\n  margin: 0px 10px 0px;\n}\n\n.header-section {\n  background-color: #e8e8e8;\n  border: 1px solid #cac2c2;\n}\n\n#export-wrapper {\n  text-align: right;\n  background-color: #e8e8e8;\n  height: 42px;\n  border-top: 1px solid gainsboro;\n  margin: 0px 10px 0px;\n  border-left: 2px solid #c7c7c7;\n}\n\n#btn-wrapper {\n  text-align: center;\n  background-color: #e8e8e8;\n  height: 40px;\n  padding: 0px;\n  font-size: 20px;\n  border-bottom: 1px solid #cac2c2;\n  font-weight: 700;\n}\n\n.toolbar-row {\n  height: 40px;\n  width: 40px;\n  display: inline-block;\n  margin: 0px;\n  border: 1px solid #b9b7b7;\n  padding: 5px;\n}\n\n.toolbar-row:hover {\n  background-color: whitesmoke;\n}\n\n.parent-btn {\n  width: 80px;\n  height: 30px;\n  margin: 5px 10px;\n  font-size: 12px;\n}\n\n.mytable:hover {\n  background-color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t0L2dhdGUvZ2F0ZS10YWJsZS9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXHNrdFxcZ2F0ZVxcZ2F0ZS10YWJsZVxcZ2F0ZS10YWJsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3NrdC9nYXRlL2dhdGUtdGFibGUvZ2F0ZS10YWJsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0M7RUFDRyxvQkFBQTtBQ0VKOztBREFDO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQ0dIOztBRERDO0VBQ0csaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7QUNJSjs7QURGRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ01KOztBREpDO0VBQ0ksNEJBQUE7QUNPTDs7QURMQztFQUNHLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDUUo7O0FETkM7RUFDRSxzQkFBQTtBQ1NIIiwiZmlsZSI6InNyYy9hcHAvc2t0L2dhdGUvZ2F0ZS10YWJsZS9nYXRlLXRhYmxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYXRlLXdyYXBwZXIsLmdyaWRfQ29udGFpbmVye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5OSwgMTk1LCAxOTUpO1xyXG4gICAgbWFyZ2luOiA1cHggMTBweCAwO1xyXG4gfVxyXG4gLmdyaWRfQ29udGFpbmVye1xyXG4gICAgbWFyZ2luOiAwcHggMTBweCAwcHg7ICBcclxuIH1cclxuIC5oZWFkZXItc2VjdGlvbntcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcclxuICAgYm9yZGVyOiAxcHggc29saWQgI2NhYzJjMjtcclxuIH1cclxuICNleHBvcnQtd3JhcHBlcntcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBnYWluc2Jvcm87XHJcbiAgICBtYXJnaW46IDBweCAxMHB4IDBweDtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2M3YzdjNztcclxuICB9XHJcbiAgI2J0bi13cmFwcGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNjYWMyYzI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICAudG9vbGJhci1yb3d7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjliN2I3O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gfVxyXG4gLnRvb2xiYXItcm93OmhvdmVye1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiB9XHJcbiAucGFyZW50LWJ0bntcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiA1cHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuIH1cclxuIC5teXRhYmxlOmhvdmVyIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuIH1cclxuICIsIi5nYXRlLXdyYXBwZXIsIC5ncmlkX0NvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjN2MzYzM7XG4gIG1hcmdpbjogNXB4IDEwcHggMDtcbn1cblxuLmdyaWRfQ29udGFpbmVyIHtcbiAgbWFyZ2luOiAwcHggMTBweCAwcHg7XG59XG5cbi5oZWFkZXItc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWMyYzI7XG59XG5cbiNleHBvcnQtd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBnYWluc2Jvcm87XG4gIG1hcmdpbjogMHB4IDEwcHggMHB4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNjN2M3Yzc7XG59XG5cbiNidG4td3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYWMyYzI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi50b29sYmFyLXJvdyB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOWI3Yjc7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnRvb2xiYXItcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLnBhcmVudC1idG4ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDVweCAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5teXRhYmxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/skt/gate/gate-table/gate-table.page.ts":
/*!********************************************************!*\
  !*** ./src/app/skt/gate/gate-table/gate-table.page.ts ***!
  \********************************************************/
/*! exports provided: GateTablePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GateTablePage", function() { return GateTablePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var _gate_additional_gate_additional_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gate-additional/gate-additional.component */ "./src/app/skt/gate/gate-additional/gate-additional.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");










var GateTablePage = /** @class */ (function () {
    function GateTablePage(alertController, commonService, modalController, ajaxService, platform, ete) {
        this.alertController = alertController;
        this.commonService = commonService;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.platform = platform;
        this.ete = ete;
        this.head = ['Gate Name', 'Location', 'Description', 'Device IMEI'];
        this.pdfdatas = [];
        this.exportTitle = "Gate-details report";
    }
    GateTablePage.prototype.deletebtn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.selectedRow) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Delete ',
                                backdropDismiss: false,
                                message: "Are you sure you want to delete?",
                                buttons: [{
                                        text: 'Cancel',
                                        role: 'cancel',
                                        handler: function (data) {
                                        }
                                    },
                                    {
                                        text: 'Ok',
                                        handler: function (data) {
                                            var selectedrowindex = _this.myGrid.getselectedrowindex();
                                            var gateId = _this.myGrid.getrows()[selectedrowindex]["gateid"];
                                            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/gate/deleteGate?gateid=' + gateId;
                                            _this.ajaxService.ajaxDeleteWithString(url).subscribe(function (res) {
                                                if (res.statusText == "OK") {
                                                    _this.commonService.presentToast('Deleted Successfully');
                                                    _this.myGrid.clearselection();
                                                    _this.getDatas();
                                                }
                                            });
                                        }
                                    }]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.commonService.presentToast('Please select a row to delete');
                        return [2 /*return*/, ""];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GateTablePage.prototype.btnOnClick = function () {
        var gridContent = this.myGrid.exportdata('html');
        var newWindow = window.open('', '', 'width=800, height=500'), document = newWindow.document.open(), pageContent = '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<meta charset="utf-8" />\n' +
            '<title>Parent Details</title>\n' +
            '</head>\n' +
            '<body>\n' + gridContent + '\n</body>\n</html>';
        document.write(pageContent);
        document.close();
        newWindow.print();
    };
    ;
    GateTablePage.prototype.openparentDetailModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _gate_additional_gate_additional_component__WEBPACK_IMPORTED_MODULE_4__["GateAdditionalComponent"],
                            cssClass: 'gate_Details'
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            if (_this.myPlatform == "desktop") {
                                _this.myGrid.clearselection();
                            }
                            _this.getDatas();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GateTablePage.prototype.parentEditModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.selectedRow) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.modalController.create({
                                component: _gate_additional_gate_additional_component__WEBPACK_IMPORTED_MODULE_4__["GateAdditionalComponent"],
                                cssClass: 'gate_Details',
                                componentProps: {
                                    value: this.selectedRow
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            if (_this.myPlatform == "desktop") {
                                _this.myGrid.clearselection();
                                _this.selectedRow = "";
                            }
                            _this.getDatas();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        this.commonService.presentToast('Please select a row to edit');
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GateTablePage.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = event.args.row;
    };
    GateTablePage.prototype.ngAfterViewInit = function () {
        if (this.myPlatform == 'desktop') {
            this.myGrid.showloadelement();
        }
        this.getDatas();
    };
    GateTablePage.prototype.createPdf = function () {
        this.commonService.createPdf(this.head, this.pdfdatas, this.exportTitle, this.myPlatform, 'Gate-details report');
    };
    GateTablePage.prototype.exportToExcel = function () {
        var reportData = {
            title: 'Gate-details report',
            data: this.pdfdatas,
            headers: this.head
        };
        this.ete.exportExcel(reportData);
    };
    GateTablePage.prototype.getDatas = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/gate/getGate';
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            var detail = res;
            _this.pdfdatas = [];
            for (var i = 0; i < detail.length; i++) {
                _this.pdfdatas.push([detail[i].gateName, detail[i].location, detail[i].description, detail[i].deviceimei]);
            }
            _this.renderer = function (row, column, value) {
                if (value == "" || null || undefined) {
                    return "----";
                }
                else {
                    return '<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto"  >' + value + '</span>';
                }
            };
            _this.source =
                {
                    localdata: res,
                };
            _this.dataAdapter = new jqx.dataAdapter(_this.source);
            _this.columns =
                [
                    // { text: 'Gate Id',  datafield: 'gateid',cellsrenderer:this.renderer , cellsalign: 'center', align: 'center'},
                    { text: 'Gate Name', datafield: 'gateName', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center' },
                    { text: 'Location', datafield: 'location', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center' },
                    { text: 'Description', datafield: 'description', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center' },
                    { text: 'Device IMEI', datafield: 'deviceimei', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center' },
                ];
        });
        this.myGrid.updatebounddata();
        this.myGrid.unselectrow;
    };
    GateTablePage.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
    };
    GateTablePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExportExcelService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myGrid', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
    ], GateTablePage.prototype, "myGrid", void 0);
    GateTablePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gate-table',
            template: __webpack_require__(/*! raw-loader!./gate-table.page.html */ "./node_modules/raw-loader/index.js!./src/app/skt/gate/gate-table/gate-table.page.html"),
            styles: [__webpack_require__(/*! ./gate-table.page.scss */ "./src/app/skt/gate/gate-table/gate-table.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExportExcelService"]])
    ], GateTablePage);
    return GateTablePage;
}());



/***/ })

}]);
//# sourceMappingURL=skt-gate-gate-table-gate-table-module-es5.js.map