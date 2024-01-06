(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stock-uploader-stock-uploader-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/stock-uploader/stock-uploader.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/stock-uploader/stock-uploader.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Stock Uploader</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"uploaderContent\">\r\n  <ion-row class=\"uploaderRow\">\r\n    <form [formGroup]=\"stockform\">\r\n      <ion-card class=\"cardCenter\">\r\n        <ion-card-content>\r\n          <ion-row style=\"padding: 0px\">\r\n            <ion-col\r\n              size=\"12\"\r\n              size-sm=\"12\"\r\n              size-lg=\"6\"\r\n              size-md=\"12\"\r\n              class=\"ion-text-center\"\r\n            >\r\n              <input\r\n                type=\"file\"\r\n                (change)=\"onFileChange($event)\"\r\n                formControlName=\"fileupload\"\r\n            /></ion-col>\r\n            <ion-col\r\n              size=\"12\"\r\n              size-sm=\"12\"\r\n              size-lg=\"6\"\r\n              size-md=\"12\"\r\n              class=\"ion-text-center\"\r\n              ><ion-button\r\n                (click)=\"sendToServer()\"\r\n                id=\"submitbtn\"\r\n                [disabled]=\"!stockform.valid\"\r\n                >Submit\r\n              </ion-button>\r\n              <ion-button\r\n                (click)=\"reset()\"\r\n                [disabled]=\"!stockform.valid\"\r\n                id=\"submitbtn\"\r\n                >Clear\r\n              </ion-button></ion-col\r\n            >\r\n          </ion-row>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </form>\r\n  </ion-row>\r\n  <jqxGrid\r\n    *ngIf=\"show\"\r\n    #myGrid\r\n    [editable]=\"false\"\r\n    [theme]=\"'material'\"\r\n    [width]=\"'99%'\"\r\n    [autoheight]=\"true\"\r\n    [source]=\"dataAdapter\"\r\n    [sortable]=\"true\"\r\n    [filterable]=\"true\"\r\n    [columns]=\"columns\"\r\n    [columnsresize]=\"true\"\r\n    [enabletooltips]=\"true\"\r\n    [pageable]=\"true\"\r\n    [showfilterrow]=\"true\"\r\n    style=\"\r\n      font-size: 16px;\r\n      text-align: center !important;\r\n      margin: 5px;\r\n      cursor: pointer;\r\n    \"\r\n  >\r\n    >\r\n  </jqxGrid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/delar-application/stock-uploader/stock-uploader-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/delar-application/stock-uploader/stock-uploader-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: StockUploaderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockUploaderPageRoutingModule", function() { return StockUploaderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _stock_uploader_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock-uploader.page */ "./src/app/delar-application/stock-uploader/stock-uploader.page.ts");




const routes = [
    {
        path: '',
        component: _stock_uploader_page__WEBPACK_IMPORTED_MODULE_3__["StockUploaderPage"]
    }
];
let StockUploaderPageRoutingModule = class StockUploaderPageRoutingModule {
};
StockUploaderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StockUploaderPageRoutingModule);



/***/ }),

/***/ "./src/app/delar-application/stock-uploader/stock-uploader.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/delar-application/stock-uploader/stock-uploader.module.ts ***!
  \***************************************************************************/
/*! exports provided: StockUploaderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockUploaderPageModule", function() { return StockUploaderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stock_uploader_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stock-uploader-routing.module */ "./src/app/delar-application/stock-uploader/stock-uploader-routing.module.ts");
/* harmony import */ var _shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _stock_uploader_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stock-uploader.page */ "./src/app/delar-application/stock-uploader/stock-uploader.page.ts");







// import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

let StockUploaderPageModule = class StockUploaderPageModule {
};
StockUploaderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_6__["SharedModModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_6__["SharedModModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            // jqxGridModule,
            _stock_uploader_routing_module__WEBPACK_IMPORTED_MODULE_5__["StockUploaderPageRoutingModule"],
        ],
        declarations: [_stock_uploader_page__WEBPACK_IMPORTED_MODULE_7__["StockUploaderPage"]],
    })
], StockUploaderPageModule);



/***/ }),

/***/ "./src/app/delar-application/stock-uploader/stock-uploader.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/delar-application/stock-uploader/stock-uploader.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  margin-top: 11px;\n  margin-left: 18%;\n}\n\n#myGrid {\n  border: 1px solid;\n}\n\n#submitbtn {\n  --background:#6252ee !important;\n}\n\n.cardCenter {\n  width: 70vw;\n  display: grid;\n  height: 20%;\n  place-content: center;\n}\n\n.uploaderRow {\n  padding: 8px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc3RvY2stdXBsb2FkZXIvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcc3RvY2stdXBsb2FkZXJcXHN0b2NrLXVwbG9hZGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc3RvY2stdXBsb2FkZXIvc3RvY2stdXBsb2FkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsaUJBQUE7QUNFRjs7QURBQTtFQUNFLCtCQUFBO0FDR0Y7O0FEREE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0lGOztBREZBO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9zdG9jay11cGxvYWRlci9zdG9jay11cGxvYWRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dHtcclxuICBtYXJnaW4tdG9wOjExcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE4JTtcclxufVxyXG4jbXlHcmlke1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59IFxyXG4jc3VibWl0YnRue1xyXG4gIC0tYmFja2dyb3VuZDojNjI1MmVlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmRDZW50ZXJ7XHJcbiAgd2lkdGg6IDcwdnc7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBoZWlnaHQ6IDIwJTtcclxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnVwbG9hZGVyUm93e1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59IiwiaW5wdXQge1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBtYXJnaW4tbGVmdDogMTglO1xufVxuXG4jbXlHcmlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG5cbiNzdWJtaXRidG4ge1xuICAtLWJhY2tncm91bmQ6IzYyNTJlZSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZENlbnRlciB7XG4gIHdpZHRoOiA3MHZ3O1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDIwJTtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xufVxuXG4udXBsb2FkZXJSb3cge1xuICBwYWRkaW5nOiA4cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/stock-uploader/stock-uploader.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/delar-application/stock-uploader/stock-uploader.page.ts ***!
  \*************************************************************************/
/*! exports provided: StockUploaderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockUploaderPage", function() { return StockUploaderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");










let StockUploaderPage = class StockUploaderPage {
    constructor(ajaxService, router, commonService, modalController, formBuilder) {
        this.ajaxService = ajaxService;
        this.router = router;
        this.commonService = commonService;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.name = false;
        this.willDownload = false;
        this.output = "";
        this.show = false;
        this.imeiIssues = [];
        this.excellKeyValid = false;
    }
    clear() {
        this.stockform.patchValue({
            fileupload: "",
        });
    }
    reset() {
        this.stockform.patchValue({
            fileupload: "",
        });
        this.show = false;
    }
    onFileChange(ev) {
        this.show = false;
        var fileName = ev.srcElement.files[0];
        this.name = fileName.name.includes(".xlsx");
        if (this.name == true) {
            this.show = false;
            this.dataString = [];
            let workBook = null;
            let jsonData = null;
            const reader = new FileReader();
            const file = ev.srcElement.files[0];
            reader.onload = (event) => {
                const data = reader.result;
                workBook = xlsx__WEBPACK_IMPORTED_MODULE_6__["read"](data, { type: "binary" });
                jsonData = workBook.SheetNames.reduce((initial, name) => {
                    const sheet = workBook.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].sheet_to_json(sheet);
                    return initial;
                }, {});
                let json = [];
                for (let i = 0; i < jsonData["Sheet1"].length; i++) {
                    jsonData["Sheet1"][i]["IMEI_NO"] =
                        jsonData["Sheet1"][i]["IMEI_NO"].toString();
                    jsonData["Sheet1"][i]["SIM_NO"] =
                        jsonData["Sheet1"][i]["SIM_NO"].toString();
                    jsonData["Sheet1"][i]["SIM_NO2"] =
                        jsonData["Sheet1"][i]["SIM_NO2"] + "";
                    jsonData["Sheet1"][i]["PROVIDER"] =
                        jsonData["Sheet1"][i]["PROVIDER"].toString();
                    jsonData["Sheet1"][i]["PROVIDER2"] =
                        jsonData["Sheet1"][i]["PROVIDER2"] + "";
                    jsonData["Sheet1"][i]["MANUFACTURE"] =
                        jsonData["Sheet1"][i]["MANUFACTURE"].toString();
                    jsonData["Sheet1"][i]["DEALER_ID"] =
                        jsonData["Sheet1"][i]["DEALER_ID"] + "";
                    json.push(jsonData["Sheet1"][i]);
                }
                this.dataString = json;
                this.output = this.dataString.slice(0, 300).concat("...");
                // this.sendToServer(dataString);
            };
            reader.readAsBinaryString(file);
        }
        else {
            this.commonService.showConfirm("Please insert only excel file (.xlsx)");
        }
    }
    sendToServer() {
        // checking excell keys is valid or not
        if (this.dataString.length == 0) {
            this.commonService.showConfirm("Check your excell file,don't enter blank spaces");
        }
        else {
            var excellKeys = Object.keys(this.dataString[0]);
            for (var i = 0; i < excellKeys.length; i++) {
                if (excellKeys[i] == "IMEI_NO" || excellKeys[i] == "MODEL") {
                    console.log("present");
                    this.excellKeyValid = true;
                }
            }
            if (this.name == true && this.excellKeyValid == true) {
                this.imeiIssues = [];
                this.willDownload = true;
                // let url ="http://localhost:8090/Web/api/vts/comp/inventory";
                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/global/comp/inventory";
                // const data = [];
                // data.push(this.dataString["Sheet1"]);
                this.ajaxService
                    .ajaxPostWithBody(url, this.dataString)
                    .subscribe((res) => {
                    console.log(res);
                    res == "[]"
                        ? this.commonService.showConfirm("Please insert a value excell file only")
                        : this.commonService.showConfirm("uploaded");
                    var resDatas = res;
                    for (var i = 0; i < resDatas.length; i++) {
                        var data = "";
                        data += Object.values(resDatas[i]);
                        if (data != "Device Persisted") {
                            this.imeiIssues.push({
                                imei: Object.keys(resDatas[i]),
                                issue: Object.values(resDatas[i]),
                            });
                        }
                    }
                    if (this.imeiIssues.length > 0) {
                        this.show = true;
                        this.source.localdata = this.imeiIssues;
                        // this.source.localdata = [{imei:"121212121212121",issue:"PROVIDER is Missing"}];
                        this.clear();
                        this.myGrid.updatebounddata();
                    }
                });
            }
            else {
                this.commonService.showConfirm("Please insert valid excel file (.xlsx)");
            }
        }
    }
    getDatas() {
        this.renderer = (row, column, value) => {
            if (value == "" || null || undefined || value == ",") {
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
            // { text: "IMEI", datafield: "imei", cellsrenderer: this.renderer },
            // {text :'Operator',datafield:'operatorName',cellsrenderer:this.renderer},
            // { text: "ISSUE", datafield: "issue", cellsrenderer: this.renderer },
            // {text :'Serial No',datafield:'serialNo',cellsrenderer:this.renderer},
            {
                text: "IMEI",
                datafield: "imei",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
            },
            {
                text: "ISSUE",
                datafield: "issue",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
            },
        ];
    }
    ionViewWillEnter() {
        this.getDatas();
        this.show = false;
        this.clear;
    }
    ngOnInit() {
        this.stockform = this.formBuilder.group({
            fileupload: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
        });
        this.getDatas();
    }
};
StockUploaderPage.ctorParameters = () => [
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__["jqxGridComponent"])
], StockUploaderPage.prototype, "myGrid", void 0);
StockUploaderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-stock-uploader",
        template: __webpack_require__(/*! raw-loader!./stock-uploader.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/stock-uploader/stock-uploader.page.html"),
        styles: [__webpack_require__(/*! ./stock-uploader.page.scss */ "./src/app/delar-application/stock-uploader/stock-uploader.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]])
], StockUploaderPage);



/***/ })

}]);
//# sourceMappingURL=stock-uploader-stock-uploader-module-es2015.js.map