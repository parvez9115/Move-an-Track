(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["skt-classdetails-class-table-class-table-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/classdetails/class-table/class-table.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/classdetails/class-table/class-table.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <div class=\"class-wrapper\">\r\n     <ion-row  class=\"header-section\">\r\n      <ion-col size=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"0\"> \r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-col>  \r\n      <ion-col size=\"10\" size-sm=\"10\" size-md=\"10\" size-lg=\"12\" id=\"btn-wrapper\">\r\n        Class Details\r\n      </ion-col>\r\n    </ion-row>\r\n   <ion-row>\r\n    <ion-col>\r\n      <ion-button color='primary' class=\"class-btn\" (click)='openparentDetailModel()'>Add</ion-button>\r\n      <ion-button color='primary' class=\"class-btn\" (click)='parentEditModel()'>Edit</ion-button>\r\n      <ion-button color='primary' class=\"class-btn\" (click)='deletebtn()'>Delete</ion-button>\r\n    </ion-col>\r\n    </ion-row> \r\n  </div> \r\n  <div id=\"export-wrapper\">\r\n    <!-- <ion-img src=\"assets/student_Details/print.svg\"  class=\"toolbar-row\" (click)=\"btnOnClick()\"></ion-img> -->\r\n    <ion-img src=\"assets/student_Details/pdf.svg\" class=\"toolbar-row\" (click)=\"createPdf()\"></ion-img>\r\n    <ion-img src=\"assets/student_Details/excel.svg\" class=\"toolbar-row\"  (click)=\"exportToExcel()\"> </ion-img>\r\n          <!-- <ion-img src=\"assets/student_Details/refresher.svg\" class=\"toolbar-row\"></ion-img> -->\r\n    </div> \r\n   </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n <div class=\"grid_Container\">\r\n  <jqxGrid\r\n  (onRowselect)=\"myGridOnRowSelect($event)\"\r\n  [pageable]=\"true\"\r\n  [selectionmode]=\"'singlerow'\"\r\n  [showfilterrow]=\"true\"\r\n  [filterable]=\"true\"\r\n  [sortable]=\"true\"\r\n  [width]=\"'100%'\"\r\n  [source]=\"dataAdapter\" \r\n  [columns]=\"columns\" \r\n  [autoheight]=\"true\"\r\n  [theme]=\"'material'\"\r\n  #myGrid \r\n  style=\"font-size:16px;text-align: center !important;\">\r\n  </jqxGrid>\r\n</div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/skt/classdetails/class-table/class-table.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/skt/classdetails/class-table/class-table.module.ts ***!
  \********************************************************************/
/*! exports provided: ClassTablePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassTablePageModule", function() { return ClassTablePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _class_table_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./class-table.page */ "./src/app/skt/classdetails/class-table/class-table.page.ts");
/* harmony import */ var _sktcomponents_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sktcomponents.module */ "./src/app/skt/sktcomponents.module.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");









var routes = [
    {
        path: '',
        component: _class_table_page__WEBPACK_IMPORTED_MODULE_6__["ClassTablePage"]
    }
];
var ClassTablePageModule = /** @class */ (function () {
    function ClassTablePageModule() {
    }
    ClassTablePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _sktcomponents_module__WEBPACK_IMPORTED_MODULE_7__["SktComponentsModule"],
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__["SharedModModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _class_table_page__WEBPACK_IMPORTED_MODULE_6__["ClassTablePage"],
            ],
        })
    ], ClassTablePageModule);
    return ClassTablePageModule;
}());



/***/ }),

/***/ "./src/app/skt/classdetails/class-table/class-table.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/skt/classdetails/class-table/class-table.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".class-wrapper, .grid_Container {\n  border: 1px solid #c7c3c3;\n  margin: 5px 10px 0;\n}\n\n.grid_Container {\n  margin: 0px 10px 0px;\n}\n\n.header-section {\n  background-color: #e8e8e8;\n  border: 1px solid #cac2c2;\n}\n\n#export-wrapper {\n  text-align: right;\n  background-color: #e8e8e8;\n  height: 42px;\n  border-top: 1px solid gainsboro;\n  margin: 0px 10px 0px;\n  border-left: 2px solid #c7c7c7;\n}\n\n#btn-wrapper {\n  font-weight: 700;\n  text-align: center;\n  background-color: #e8e8e8;\n  height: 40px;\n  padding: 0px;\n  font-size: 20px;\n  border-bottom: 1px solid #cac2c2;\n}\n\n.toolbar-row {\n  height: 40px;\n  width: 40px;\n  display: inline-block;\n  margin: 0px;\n  border: 1px solid #b9b7b7;\n  padding: 5px;\n}\n\n.toolbar-row:hover {\n  background-color: whitesmoke;\n}\n\n.class-btn {\n  width: 80px;\n  height: 30px;\n  margin: 5px 10px;\n  font-size: 12px;\n}\n\n.mytable:hover {\n  background-color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t0L2NsYXNzZGV0YWlscy9jbGFzcy10YWJsZS9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXHNrdFxcY2xhc3NkZXRhaWxzXFxjbGFzcy10YWJsZVxcY2xhc3MtdGFibGUucGFnZS5zY3NzIiwic3JjL2FwcC9za3QvY2xhc3NkZXRhaWxzL2NsYXNzLXRhYmxlL2NsYXNzLXRhYmxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQztFQUNHLG9CQUFBO0FDRUo7O0FEQUM7RUFDQyx5QkFBQTtFQUNBLHlCQUFBO0FDR0Y7O0FEREM7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtBQ0lIOztBREZDO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUNLSDs7QURIQztFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDTUg7O0FESkE7RUFDSSw0QkFBQTtBQ09KOztBRExBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNRSjs7QUROQztFQUNFLHNCQUFBO0FDU0giLCJmaWxlIjoic3JjL2FwcC9za3QvY2xhc3NkZXRhaWxzL2NsYXNzLXRhYmxlL2NsYXNzLXRhYmxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGFzcy13cmFwcGVyLC5ncmlkX0NvbnRhaW5lcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTksIDE5NSwgMTk1KTtcclxuICAgIG1hcmdpbjogNXB4IDEwcHggMDtcclxuIH1cclxuIC5ncmlkX0NvbnRhaW5lcntcclxuICAgIG1hcmdpbjogMHB4IDEwcHggMHB4OyAgXHJcbiB9XHJcbiAuaGVhZGVyLXNlY3Rpb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjMmMyO1xyXG59XHJcbiAjZXhwb3J0LXdyYXBwZXJ7XHJcbiAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xyXG4gICBoZWlnaHQ6IDQycHg7XHJcbiAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBnYWluc2Jvcm87XHJcbiAgIG1hcmdpbjogMHB4IDEwcHggMHB4O1xyXG4gICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNjN2M3Yzc7XHJcbiB9XHJcbiAjYnRuLXdyYXBwZXJ7XHJcbiAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcclxuICAgaGVpZ2h0OiA0MHB4O1xyXG4gICBwYWRkaW5nOiAwcHg7XHJcbiAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2NhYzJjMjtcclxuICB9XHJcbiAudG9vbGJhci1yb3d7XHJcbiAgIGhlaWdodDogNDBweDtcclxuICAgd2lkdGg6IDQwcHg7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgbWFyZ2luOjBweDtcclxuICAgYm9yZGVyOiAxcHggc29saWQgI2I5YjdiNztcclxuICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi50b29sYmFyLXJvdzpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuLmNsYXNzLWJ0bntcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiA1cHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuIH1cclxuIC5teXRhYmxlOmhvdmVyIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuIH1cclxuICIsIi5jbGFzcy13cmFwcGVyLCAuZ3JpZF9Db250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzdjM2MzO1xuICBtYXJnaW46IDVweCAxMHB4IDA7XG59XG5cbi5ncmlkX0NvbnRhaW5lciB7XG4gIG1hcmdpbjogMHB4IDEwcHggMHB4O1xufVxuXG4uaGVhZGVyLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjMmMyO1xufVxuXG4jZXhwb3J0LXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgaGVpZ2h0OiA0MnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgZ2FpbnNib3JvO1xuICBtYXJnaW46IDBweCAxMHB4IDBweDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjYzdjN2M3O1xufVxuXG4jYnRuLXdyYXBwZXIge1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2FjMmMyO1xufVxuXG4udG9vbGJhci1yb3cge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjliN2I3O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi50b29sYmFyLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5jbGFzcy1idG4ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDVweCAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5teXRhYmxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/skt/classdetails/class-table/class-table.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/skt/classdetails/class-table/class-table.page.ts ***!
  \******************************************************************/
/*! exports provided: ClassTablePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassTablePage", function() { return ClassTablePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _class_additional_class_additional_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../class-additional/class-additional.component */ "./src/app/skt/classdetails/class-additional/class-additional.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");





//import { StudentClassAdditionalComponent } from '../../student/student-class-additional/student-class-additional.component';





var ClassTablePage = /** @class */ (function () {
    function ClassTablePage(modalController, ajaxService, commonService, platform, alertController, ete) {
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.platform = platform;
        this.alertController = alertController;
        this.ete = ete;
        this.head = ['Class Id', 'Section Id', 'Tutor', 'Class Description'];
        this.pdfdatas = [];
        this.exportTitle = "Class-details report";
    }
    ClassTablePage.prototype.deletebtn = function () {
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
                                            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/class/deleteClass?schoolId=' + localStorage.getItem('corpId') + '&branchId=' + localStorage.getItem('corpId') + '&sectionId=' + _this.selectedRow.sectionId + '&classId=' + _this.selectedRow.classId;
                                            _this.ajaxService.ajaxDeleteWithString(url).subscribe(function (res) {
                                                if (res.message == "Deleted Successfully") {
                                                    _this.commonService.presentToast('Class Details Deleted Sucessfully');
                                                    _this.modalController.dismiss();
                                                    _this.myGrid.clearselection();
                                                    _this.getDatas();
                                                    _this.selectedRow = "";
                                                }
                                                else {
                                                    _this.commonService.presentToast('Please Contact Support Team');
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
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ClassTablePage.prototype.btnOnClick = function () {
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
    ClassTablePage.prototype.openparentDetailModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _class_additional_class_additional_component__WEBPACK_IMPORTED_MODULE_4__["ClassAdditionalComponent"],
                            cssClass: 'my-class-css'
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
    ClassTablePage.prototype.parentEditModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.selectedRow) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.modalController.create({
                                component: _class_additional_class_additional_component__WEBPACK_IMPORTED_MODULE_4__["ClassAdditionalComponent"],
                                cssClass: 'my-class-css',
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
                        return [2 /*return*/, ""];
                }
            });
        });
    };
    ClassTablePage.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = event.args.row;
    };
    ClassTablePage.prototype.createPdf = function () {
        this.commonService.createPdf(this.head, this.pdfdatas, this.exportTitle, this.myPlatform, 'Class-details report');
    };
    ClassTablePage.prototype.exportToExcel = function () {
        var reportData = {
            title: 'Class-details report',
            data: this.pdfdatas,
            headers: this.head
        };
        this.ete.exportExcel(reportData);
    };
    ClassTablePage.prototype.getDatas = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/class/getClass?schoolId=' + localStorage.getItem('corpId') + '&branchId=' + localStorage.getItem('corpId');
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            var detail = res;
            _this.pdfdatas = [];
            for (var i = 0; i < detail.length; i++) {
                _this.pdfdatas.push([detail[i].classId, detail[i].sectionId, detail[i].tutor, detail[i].classDescription]);
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
                    { text: 'Class Id', datafield: 'classId', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center' },
                    { text: 'Section Id', datafield: 'sectionId', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center' },
                    { text: 'Tutor', datafield: 'tutor', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center' },
                    { text: 'Class Description', datafield: 'classDescription', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center' },
                ];
        });
        this.myGrid.updatebounddata();
        this.myGrid.unselectrow;
    };
    ClassTablePage.prototype.ngAfterViewInit = function () {
        if (this.myPlatform == 'desktop') {
            this.myGrid.showloadelement();
        }
        this.getDatas();
    };
    ClassTablePage.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
    };
    ClassTablePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExportExcelService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myGrid', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])
    ], ClassTablePage.prototype, "myGrid", void 0);
    ClassTablePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-class-table',
            template: __webpack_require__(/*! raw-loader!./class-table.page.html */ "./node_modules/raw-loader/index.js!./src/app/skt/classdetails/class-table/class-table.page.html"),
            styles: [__webpack_require__(/*! ./class-table.page.scss */ "./src/app/skt/classdetails/class-table/class-table.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExportExcelService"]])
    ], ClassTablePage);
    return ClassTablePage;
}());



/***/ })

}]);
//# sourceMappingURL=skt-classdetails-class-table-class-table-module-es5.js.map