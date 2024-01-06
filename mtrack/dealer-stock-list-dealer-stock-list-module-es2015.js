(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dealer-stock-list-dealer-stock-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/dealer-stock-list/dealer-stock-list.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/dealer-stock-list/dealer-stock-list.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Dealer Stock List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row style=\"padding: 10px\">\n      <ion-col size=\"12\">\n        <ion-label\n          ><span class=\"dealer-label\">Dealer Name :</span\n          ><span class=\"dealer-data\">{{noData.name}}</span\n          ><span class=\"dealer-label\">Total Device :</span\n          ><span class=\"dealer-data\">{{noData.total}}</span></ion-label\n        >\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <jqxGrid\n          #myGrid\n          [theme]=\"'material'\"\n          [width]=\"'99%'\"\n          [autoheight]=\"true\"\n          [source]=\"dataAdapter\"\n          [enablebrowserselection]=\"true\"\n          [pagesizeoptions]=\"page\"\n          [sortable]=\"true\"\n          [filterable]=\"true\"\n          [columns]=\"columns\"\n          [columnsresize]=\"true\"\n          [enabletooltips]=\"true\"\n          [pageable]=\"true\"\n          [showfilterrow]=\"true\"\n          style=\"\n            font-size: 16px;\n            text-align: center !important;\n            margin: auto;\n            cursor: pointer;\n          \"\n        >\n        </jqxGrid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/dealer-stock-list/dealer-stock-list.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/delar-application/dealer-stock-list/dealer-stock-list.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DealerStockListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerStockListPageModule", function() { return DealerStockListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dealer_stock_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dealer-stock-list.page */ "./src/app/delar-application/dealer-stock-list/dealer-stock-list.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");








const routes = [
    {
        path: "",
        component: _dealer_stock_list_page__WEBPACK_IMPORTED_MODULE_6__["DealerStockListPage"],
    },
];
let DealerStockListPageModule = class DealerStockListPageModule {
};
DealerStockListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_dealer_stock_list_page__WEBPACK_IMPORTED_MODULE_6__["DealerStockListPage"]],
    })
], DealerStockListPageModule);



/***/ }),

/***/ "./src/app/delar-application/dealer-stock-list/dealer-stock-list.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/delar-application/dealer-stock-list/dealer-stock-list.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGVhbGVyLXN0b2NrLWxpc3QvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcZGVhbGVyLXN0b2NrLWxpc3RcXGRlYWxlci1zdG9jay1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGVhbGVyLXN0b2NrLWxpc3QvZGVhbGVyLXN0b2NrLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGVhbGVyLXN0b2NrLWxpc3QvZGVhbGVyLXN0b2NrLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlYWxlci1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSIsIi5kZWFsZXItbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/dealer-stock-list/dealer-stock-list.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/delar-application/dealer-stock-list/dealer-stock-list.page.ts ***!
  \*******************************************************************************/
/*! exports provided: DealerStockListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerStockListPage", function() { return DealerStockListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let DealerStockListPage = class DealerStockListPage {
    constructor(platform, commonService, ajaxService) {
        this.platform = platform;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.page = [];
        this.tableData = [];
        this.noData = {};
    }
    getdata() {
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
        this.page = ["100", "200", "500", "1000"];
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.columns = [
            {
                text: "Dealer",
                datafield: "name",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 180,
            },
            {
                text: "Total Device",
                datafield: "total",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 180,
            },
            {
                text: "Stocks",
                datafield: "stocks",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 180,
            },
            {
                text: "Online",
                datafield: "online",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 180,
            },
            {
                text: "Offline",
                datafield: "offline",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 180,
            },
            {
                text: "Expiry",
                datafield: "expiry",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 180,
            },
        ];
    }
    fetchData() {
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/global/getDealerStockList?company=" +
            localStorage.getItem("corpId") +
            "&suffix=" +
            localStorage.companySuffix;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            if (res) {
                this.commonService.dismissLoader();
                this.getdata();
                res.map((d) => {
                    if (d.show == "Yes") {
                        this.tableData.push(d);
                    }
                    else if (d.show == "No") {
                        this.noData = d;
                    }
                });
            }
        });
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.fetchData();
    }
};
DealerStockListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
], DealerStockListPage.prototype, "myGrid", void 0);
DealerStockListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dealer-stock-list",
        template: __webpack_require__(/*! raw-loader!./dealer-stock-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/dealer-stock-list/dealer-stock-list.page.html"),
        styles: [__webpack_require__(/*! ./dealer-stock-list.page.scss */ "./src/app/delar-application/dealer-stock-list/dealer-stock-list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"]])
], DealerStockListPage);



/***/ })

}]);
//# sourceMappingURL=dealer-stock-list-dealer-stock-list-module-es2015.js.map