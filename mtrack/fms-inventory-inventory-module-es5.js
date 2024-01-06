(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fms-inventory-inventory-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/fms/inventory/inventory.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fms/inventory/inventory.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" [ngClass]=\"{'appHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n         <ion-row>\r\n            <ion-col size='2'>\r\n              <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <ion-label>Inventory Stock Uploader</ion-label>\r\n            </ion-col>\r\n           </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>  \r\n</ion-header>\r\n<ion-content>\r\n  <ion-row style=\"padding: 0px;\">\r\n    <ion-col size=\"12\" class=\"ion-text-center\">    <input type=\"file\" (change)=\"onFileChange($event)\" /></ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"padding: 0px;\">\r\n          <ion-col size=\"12\" class=\"ion-text-center\"><ion-button (click)=\"sendToServer()\" id=\"submitbtn\">Submit </ion-button></ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=12 style=\"padding: 0px;\">\r\n                <jqxGrid \r\n                (onRowselect)=\"myGridOnRowSelect($event)\" \r\n                [pageable]=\"true\"\r\n                [selectionmode]=\"'singlerow'\"\r\n                [showfilterrow]=\"true\" \r\n                [filterable]=\"true\"\r\n                [sortable]=\"true\" \r\n                [width]=\"'99.2%'\"\r\n                [source]=\"dataAdapter\" \r\n                [columns]=\"columns\" \r\n                [autoheight]=\"true\"\r\n                [theme]=\"'material'\" \r\n                [columnsresize]=\"true\" \r\n                [enabletooltips]=\"true\" \r\n                #myGrid \r\n                 style=\"font-size:10px;text-align: center !important\">\r\n                </jqxGrid>\r\n                </ion-col>\r\n                </ion-row>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/fms/inventory/inventory.module.ts":
/*!***************************************************!*\
  !*** ./src/app/fms/inventory/inventory.module.ts ***!
  \***************************************************/
/*! exports provided: InventoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryPageModule", function() { return InventoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _inventory_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inventory.page */ "./src/app/fms/inventory/inventory.page.ts");









var routes = [
    {
        path: '',
        component: _inventory_page__WEBPACK_IMPORTED_MODULE_8__["InventoryPage"]
    }
];
var InventoryPageModule = /** @class */ (function () {
    function InventoryPageModule() {
    }
    InventoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_inventory_page__WEBPACK_IMPORTED_MODULE_8__["InventoryPage"]]
        })
    ], InventoryPageModule);
    return InventoryPageModule;
}());



/***/ }),

/***/ "./src/app/fms/inventory/inventory.page.scss":
/*!***************************************************!*\
  !*** ./src/app/fms/inventory/inventory.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  margin-top: 11px;\n  margin-left: 18%;\n}\n\n#submitbtn {\n  --background:rebeccapurple !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm1zL2ludmVudG9yeS9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGZtc1xcaW52ZW50b3J5XFxpbnZlbnRvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9mbXMvaW52ZW50b3J5L2ludmVudG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDUSxxQ0FBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvZm1zL2ludmVudG9yeS9pbnZlbnRvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXR7XHJcbiAgICBtYXJnaW4tdG9wOjExcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTglO1xyXG59XHJcbiNzdWJtaXRidG57XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOnJlYmVjY2FwdXJwbGUgIWltcG9ydGFudDtcclxuICAgIH0iLCJpbnB1dCB7XG4gIG1hcmdpbi10b3A6IDExcHg7XG4gIG1hcmdpbi1sZWZ0OiAxOCU7XG59XG5cbiNzdWJtaXRidG4ge1xuICAtLWJhY2tncm91bmQ6cmViZWNjYXB1cnBsZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/fms/inventory/inventory.page.ts":
/*!*************************************************!*\
  !*** ./src/app/fms/inventory/inventory.page.ts ***!
  \*************************************************/
/*! exports provided: InventoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryPage", function() { return InventoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_6__);







var InventoryPage = /** @class */ (function () {
    function InventoryPage(commonService, ajaxService) {
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.name = false;
        this.willDownload = false;
        this.output = '';
        this.show = false;
        this.imeiIssues = [];
        this.excellKeyValid = false;
    }
    InventoryPage.prototype.onFileChange = function (ev) {
        var _this = this;
        var fileName = ev.srcElement.files[0];
        this.name = fileName.name.includes(".xlsx");
        if (this.name == true) {
            this.dataString = [];
            var workBook_1 = null;
            var jsonData_1 = null;
            var reader_1 = new FileReader();
            var file = ev.srcElement.files[0];
            reader_1.onload = function (event) {
                var data = reader_1.result;
                workBook_1 = xlsx__WEBPACK_IMPORTED_MODULE_6__["read"](data, { type: 'binary' });
                jsonData_1 = workBook_1.SheetNames.reduce(function (initial, name) {
                    var sheet = workBook_1.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].sheet_to_json(sheet);
                    return initial;
                }, {});
                var json = [];
                for (var i = 0; i < jsonData_1["Sheet1"].length; i++) {
                    if (jsonData_1["Sheet1"][i]["facode"] == undefined) {
                        jsonData_1["Sheet1"][i]["facode"] = "" + '';
                    }
                    if (jsonData_1["Sheet1"][i]["fgtype"] == undefined) {
                        jsonData_1["Sheet1"][i]["fgtype"] = "" + '';
                    }
                    jsonData_1["Sheet1"][i]["companyid"] = localStorage.getItem('corpId').toString();
                    jsonData_1["Sheet1"][i]["branchid"] = localStorage.getItem('corpId').toString();
                    jsonData_1["Sheet1"][i]["userid"] = "" + '';
                    jsonData_1["Sheet1"][i]["itemno"] = jsonData_1["Sheet1"][i]["itemno"] + '';
                    jsonData_1["Sheet1"][i]["description"] = jsonData_1["Sheet1"][i]["description"] + '';
                    jsonData_1["Sheet1"][i]["partno"] = jsonData_1["Sheet1"][i]["partno"] + '';
                    jsonData_1["Sheet1"][i]["type"] = jsonData_1["Sheet1"][i]["type"] + '';
                    jsonData_1["Sheet1"][i]["documentno"] = jsonData_1["Sheet1"][i]["documentno"] + '';
                    jsonData_1["Sheet1"][i]["locationcode"] = jsonData_1["Sheet1"][i]["locationcode"] + '';
                    jsonData_1["Sheet1"][i]["quantity"] = jsonData_1["Sheet1"][i]["quantity"] + '';
                    jsonData_1["Sheet1"][i]["actualamount"] = jsonData_1["Sheet1"][i]["actualamount"] + '';
                    jsonData_1["Sheet1"][i]["expectedamount"] = jsonData_1["Sheet1"][i]["expectedamount"] + '';
                    jsonData_1["Sheet1"][i]["facode"] = jsonData_1["Sheet1"][i]["facode"] + '';
                    jsonData_1["Sheet1"][i]["entrytype"] = jsonData_1["Sheet1"][i]["entrytype"] + '';
                    jsonData_1["Sheet1"][i]["companystructure"] = jsonData_1["Sheet1"][i]["companystructure"] + '';
                    jsonData_1["Sheet1"][i]["assettype"] = jsonData_1["Sheet1"][i]["assettype"] + '';
                    jsonData_1["Sheet1"][i]["assetdescrption"] = jsonData_1["Sheet1"][i]["assetdescrption"] + '';
                    jsonData_1["Sheet1"][i]["remarks"] = jsonData_1["Sheet1"][i]["remarks"] + '';
                    jsonData_1["Sheet1"][i]["fgtype"] = jsonData_1["Sheet1"][i]["fgtype"] + '';
                    jsonData_1["Sheet1"][i]["entryno"] = jsonData_1["Sheet1"][i]["entryno"] + '';
                    jsonData_1["Sheet1"][i]["month"] = jsonData_1["Sheet1"][i]["month"] + '';
                    jsonData_1["Sheet1"][i]["status"] = true;
                    jsonData_1["Sheet1"][i]["createdby"] = localStorage.getItem('userName').toString() + '';
                    json.push(jsonData_1["Sheet1"][i]);
                }
                _this.dataString = json;
                _this.output = _this.dataString.slice(0, 300).concat("...");
            };
            reader_1.readAsBinaryString(file);
        }
        else {
            this.commonService.presentToast("please insert only excel file (.xlsx)");
        }
    };
    InventoryPage.prototype.sendToServer = function () {
        var _this = this;
        if (this.dataString.length == 0) {
            this.commonService.presentToast("check your excell file,don't enter blank spaces");
        }
        else {
            var excellKeys = Object.keys(this.dataString[0]);
            for (var i = 0; i < excellKeys.length; i++) {
                if ((excellKeys[i] == "itemno") ||
                    (excellKeys[i] == "description") ||
                    (excellKeys[i] == "partno") ||
                    (excellKeys[i] == "type") ||
                    (excellKeys[i] == "documentno") ||
                    (excellKeys[i] == "locationcode") ||
                    (excellKeys[i] == "quantity") ||
                    (excellKeys[i] == "actualamount") ||
                    (excellKeys[i] == "expectedamount") ||
                    (excellKeys[i] == "facode") ||
                    (excellKeys[i] == "entrytype") ||
                    (excellKeys[i] == "companystructure") ||
                    (excellKeys[i] == "assettype") ||
                    (excellKeys[i] == "assetdescrption") ||
                    (excellKeys[i] == "remarks") ||
                    (excellKeys[i] == "fgtype") ||
                    (excellKeys[i] == "entryno") ||
                    (excellKeys[i] == "month")) {
                    console.log("present");
                    this.excellKeyValid = true;
                }
            }
            if (this.name == true && this.excellKeyValid == true) {
                this.imeiIssues = [];
                this.willDownload = true;
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/inventorymaster/fmsSaveInventoryMaster';
                this.ajaxService.ajaxPostWithBody(url, this.dataString)
                    .subscribe(function (res) {
                    console.log(res);
                    if (res.message == 'Inventory Updated Successfully') {
                        _this.commonService.presentToast('Inventory Upload Sucessfully');
                        _this.getDatas();
                    }
                    else {
                        _this.commonService.presentToast("please insert valid excel file (.xlsx)");
                    }
                });
            }
        }
    };
    InventoryPage.prototype.ngAfterViewInit = function () {
        this.myGrid.showloadelement();
        this.getDatas();
    };
    InventoryPage.prototype.getDatas = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].fmsUrl + '/inventorymaster/getFmsInventoryMasterAll?companyid=' + localStorage.getItem('corpId');
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            var detail = res;
            _this.tableData = res;
            _this.renderer = function (row, column, value) {
                if (value == "" || null || undefined || value == "," || value == "undefined") {
                    return "---";
                }
                else {
                    return '<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' + value + '</span>';
                }
            };
            _this.source = { localdata: _this.tableData };
            _this.dataAdapter = new jqx.dataAdapter(_this.source);
            _this.columns = [
                { text: 'Item No', datafield: 'itemno', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center', width: 150 },
                { text: 'Description', datafield: 'description', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center', width: 150 },
                { text: 'Part  No', datafield: 'partno', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center', width: 150 },
                { text: 'Type', datafield: 'type', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center', width: 150 },
                { text: 'Document No', datafield: 'documentno', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center', width: 150 },
                { text: 'Location', datafield: 'locationcode', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center', width: 150 },
                { text: 'Actual Amount', datafield: 'actualamount', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center', width: 150 },
                { text: 'Expected Amount', datafield: 'expectedamount', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center', width: 150 },
                { text: 'Quantity', datafield: 'quantity', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center', width: 150 },
                { text: 'Facode', datafield: 'facode', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center', width: 150 },
                { text: 'Entry Type', datafield: 'entrytype', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center', width: 150 },
                { text: 'Company Structure', datafield: 'companystructure', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center', width: 150 },
                { text: 'Assettype', datafield: 'assettype', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center', width: 150 },
                { text: 'Asset Description', datafield: 'assetdescrption', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center', width: 150 },
                { text: 'Remarks', datafield: 'remarks', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center', width: 250 },
                { text: 'Fgtype', datafield: 'fgtype', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center', width: 150 },
                { text: 'Entry No', datafield: 'entryno', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center', width: 150 },
                { text: 'Month', datafield: 'month', cellsrenderer: _this.renderer, cellsalign: 'center', align: 'center', width: 150 },
            ];
        });
    };
    InventoryPage.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = event.args.row;
    };
    InventoryPage.prototype.ngOnInit = function () {
        this.getDatas();
    };
    InventoryPage.ctorParameters = function () { return [
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myGrid', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])
    ], InventoryPage.prototype, "myGrid", void 0);
    InventoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__(/*! raw-loader!./inventory.page.html */ "./node_modules/raw-loader/index.js!./src/app/fms/inventory/inventory.page.html"),
            styles: [__webpack_require__(/*! ./inventory.page.scss */ "./src/app/fms/inventory/inventory.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"]])
    ], InventoryPage);
    return InventoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=fms-inventory-inventory-module-es5.js.map