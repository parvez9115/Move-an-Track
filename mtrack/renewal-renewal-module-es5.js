(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["renewal-renewal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/addrenewal/addrenewal.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/addrenewal/addrenewal.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <jqxGrid #myGrid (onRowselect)=\"myGridOnRowSelect($event)\" [theme]=\"'material'\" [width]=\"'99%'\"\r\n[showfilterrow]=\"true\" [autoheight]=\"true\" [source]=\"dataAdapter\" [columns]=\"columns\" [sortable]=\"true\"\r\n[filterable]=\"true\" [columns]=\"columns\" [columnsresize]=\"true\" [enabletooltips]=\"true\" [pageable]=\"true\"\r\n[selectionmode]=\"'singlerow'\" style=\"font-size: 10px !important\">\r\n</jqxGrid> -->\r\n\r\n<ion-header>\r\n    <ion-toolbar>\r\n      <ion-title>Renewal</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n  <ion-row>\r\n    <!-- <ion-col col-size-lg=\"6\" offset-lg=6><ion-input type=\"number\" placeholder='Enter the Imei'> </ion-input></ion-col> -->\r\n    <ion-col size-md=\"6\" offset-md=\"3\"><ion-input type=\"number\" placeholder='Enter the ICCID'> </ion-input></ion-col>\r\n  </ion-row>\r\n  <ion-col col-size=\"12\" class='ion-text-left'>Device Details</ion-col>\r\n  <ion-row>\r\n  \r\n    <ion-col size-md=\"4\" offset-md='1'><ion-input type=\"number\" placeholder='Imei No*'> </ion-input></ion-col>\r\n    <ion-col size-md=\"4\" offset-md='1'><ion-input type=\"number\" placeholder='Sr No*'> </ion-input></ion-col>\r\n    <!-- <ion-col col-size=\"4\"><ion-input type=\"number\" placeholder='Enter the Imei'> </ion-input></ion-col> -->\r\n  </ion-row>\r\n  <ion-row>  <ion-col col-size=\"12\" class='ion-text-left'>Vehicle Details</ion-col></ion-row>\r\n  <ion-row>\r\n  \r\n    <ion-col col-size=\"4\"><ion-input type=\"number\" placeholder='Engine No*'> </ion-input></ion-col>\r\n    <ion-col col-size=\"4\"><ion-input type=\"number\" placeholder='Chassis No*'> </ion-input></ion-col>\r\n    <ion-col col-size=\"4\"><ion-input type=\"number\" placeholder='ReG No*'> </ion-input></ion-col>\r\n  </ion-row>\r\n  <ion-row>  <ion-col col-size=\"12\" class='ion-text-left'>Customer Details</ion-col></ion-row>\r\n  <ion-row>\r\n  \r\n    <ion-col col-size=\"4\"><ion-input type=\"number\" placeholder='Name on Proof'> </ion-input></ion-col>\r\n    <ion-col col-size=\"4\"><ion-input type=\"number\" placeholder='RED Mobile Number'> </ion-input></ion-col>\r\n    <ion-col col-size=\"4\"><ion-input type=\"number\" placeholder='Address'> </ion-input></ion-col>\r\n  </ion-row>\r\n  <ion-row>  <ion-col col-size=\"12\" class='ion-text-left'>Proof of Address</ion-col></ion-row>\r\n  <ion-row>\r\n    <ion-col size-md=\"4\" offset-md=1>\r\n         <ion-select  placeholder='Name on Proof' style=\"background-color: #e8e8e8;\">\r\n              <ion-select-option  *ngFor=\"let comp_name of proofName\" [value]=\"comp_name\">\r\n                {{comp_name}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n</ion-col>\r\n    <ion-col size=\"4\" offset-md=1><ion-input type=\"number\" placeholder='Document No*'> </ion-input></ion-col>\r\n\r\n  </ion-row>\r\n  <ion-row>  <ion-col col-size=\"12\" class='ion-text-left'>Proof of Identity</ion-col></ion-row>\r\n  <ion-row>\r\n    <ion-col size-md=\"4\" offset-md=1>\r\n         <ion-select  placeholder='Name on Proof' style=\"background-color: #e8e8e8;\">\r\n              <ion-select-option  *ngFor=\"let comp_name of proofName\" [value]=\"comp_name\">\r\n                {{comp_name}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n</ion-col>\r\n    <ion-col size=\"4\" offset-md=1><ion-input type=\"number\" placeholder='Document No*'> </ion-input></ion-col>\r\n\r\n  </ion-row>\r\n  <ion-row><ion-col class='ion-text-center'><ion-button (click)=\"submit()\">Submit</ion-button></ion-col></ion-row>\r\n  <ion-row>\r\n  <!-- <jqxGrid #myGrid (onRowselect)=\"myGridOnRowSelect($event)\"  \r\n  [showfilterrow]=\"true\" [autoheight]=\"true\" [source]=\"dataAdapter\" [columns]=\"columns\" [sortable]=\"true\"\r\n  [filterable]=\"true\" [columns]=\"columns\" [columnsresize]=\"true\" [enabletooltips]=\"true\" [pageable]=\"true\"\r\n  [selectionmode]=\"'singlerow'\" style=\"font-size: 10px !important\"> -->\r\n  <!-- </jqxGrid> -->\r\n  </ion-row>\r\n  </ion-content>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/renewal/renewal.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/renewal/renewal.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Renewal</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row><ion-col class='ion-text-right'><ion-button (click)=\"openModel()\">Add<ion-icon name=\"add\" class=\"add-icon\"></ion-icon></ion-button></ion-col></ion-row>\r\n  <app-renewal-table  class=\"maintanence_table\"></app-renewal-table>\r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/delar-application/addrenewal/addrenewal.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/delar-application/addrenewal/addrenewal.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  border: 1px solid grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vYWRkcmVuZXdhbC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxhZGRyZW5ld2FsXFxhZGRyZW5ld2FsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9hZGRyZW5ld2FsL2FkZHJlbmV3YWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vYWRkcmVuZXdhbC9hZGRyZW5ld2FsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXlcclxufSIsImlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/addrenewal/addrenewal.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/delar-application/addrenewal/addrenewal.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddrenewalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddrenewalComponent", function() { return AddrenewalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddrenewalComponent = /** @class */ (function () {
    function AddrenewalComponent() {
        // source: { localdata: any; };
        // dataAdapter: any;
        // renderer: (row: number, column: any, value: string) => string;
        // @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;
        // head = ['Plate No', 'AlertType', 'E-Mail ID', 'Valid Till', 'Status'];
        // columns=[]
        // selectedRowIdx: any;
        // selectedRow;
        this.proofName = ['pan card'];
    }
    AddrenewalComponent.prototype.submit = function () {
    };
    AddrenewalComponent.prototype.ngOnInit = function () { };
    AddrenewalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addrenewal',
            template: __webpack_require__(/*! raw-loader!./addrenewal.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/addrenewal/addrenewal.component.html"),
            styles: [__webpack_require__(/*! ./addrenewal.component.scss */ "./src/app/delar-application/addrenewal/addrenewal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddrenewalComponent);
    return AddrenewalComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/renewal/renewal.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/delar-application/renewal/renewal.module.ts ***!
  \*************************************************************/
/*! exports provided: RenewalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewalPageModule", function() { return RenewalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _renewal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renewal.page */ "./src/app/delar-application/renewal/renewal.page.ts");
/* harmony import */ var _addrenewal_addrenewal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../addrenewal/addrenewal.component */ "./src/app/delar-application/addrenewal/addrenewal.component.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");









var routes = [
    {
        path: '',
        component: _renewal_page__WEBPACK_IMPORTED_MODULE_6__["RenewalPage"]
    }
];
var RenewalPageModule = /** @class */ (function () {
    function RenewalPageModule() {
    }
    RenewalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_renewal_page__WEBPACK_IMPORTED_MODULE_6__["RenewalPage"], _addrenewal_addrenewal_component__WEBPACK_IMPORTED_MODULE_7__["AddrenewalComponent"]],
            entryComponents: [_addrenewal_addrenewal_component__WEBPACK_IMPORTED_MODULE_7__["AddrenewalComponent"]]
        })
    ], RenewalPageModule);
    return RenewalPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/renewal/renewal.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/delar-application/renewal/renewal.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  border: 1px solid grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcmVuZXdhbC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxyZW5ld2FsXFxyZW5ld2FsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcmVuZXdhbC9yZW5ld2FsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9yZW5ld2FsL3JlbmV3YWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxufSIsImlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/renewal/renewal.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/delar-application/renewal/renewal.page.ts ***!
  \***********************************************************/
/*! exports provided: RenewalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewalPage", function() { return RenewalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var _addrenewal_addrenewal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../addrenewal/addrenewal.component */ "./src/app/delar-application/addrenewal/addrenewal.component.ts");





var RenewalPage = /** @class */ (function () {
    function RenewalPage(modalController) {
        this.modalController = modalController;
        this.head = ['Plate No', 'AlertType', 'E-Mail ID', 'Valid Till', 'Status'];
    }
    RenewalPage.prototype.openModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _addrenewal_addrenewal_component__WEBPACK_IMPORTED_MODULE_4__["AddrenewalComponent"],
                            cssClass: "custom-renewal",
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            // if (this.myPlatform == "desktop") {
                            //   this.myGrid.clearselection();
                            // }
                            // this.getDatas();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RenewalPage.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = event.args.row;
        //  event.isTrigger = false
        this.selectedRowIdx = event.args.rowindex;
    };
    RenewalPage.prototype.ngOnInit = function () {
    };
    RenewalPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myGrid', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
    ], RenewalPage.prototype, "myGrid", void 0);
    RenewalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-renewal',
            template: __webpack_require__(/*! raw-loader!./renewal.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/renewal/renewal.page.html"),
            styles: [__webpack_require__(/*! ./renewal.page.scss */ "./src/app/delar-application/renewal/renewal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], RenewalPage);
    return RenewalPage;
}());



/***/ }),

/***/ "./src/app/delar-application/subscription/renewal/renewal-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/delar-application/subscription/renewal/renewal-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: RenewalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewalPageRoutingModule", function() { return RenewalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _renewal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renewal.page */ "./src/app/delar-application/subscription/renewal/renewal.page.ts");




var routes = [
    {
        path: '',
        component: _renewal_page__WEBPACK_IMPORTED_MODULE_3__["RenewalPage"]
    }
];
var RenewalPageRoutingModule = /** @class */ (function () {
    function RenewalPageRoutingModule() {
    }
    RenewalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RenewalPageRoutingModule);
    return RenewalPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/delar-application/subscription/renewal/renewal.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/delar-application/subscription/renewal/renewal.module.ts ***!
  \**************************************************************************/
/*! exports provided: RenewalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewalPageModule", function() { return RenewalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _renewal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renewal-routing.module */ "./src/app/delar-application/subscription/renewal/renewal-routing.module.ts");
/* harmony import */ var _renewal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renewal.page */ "./src/app/delar-application/subscription/renewal/renewal.page.ts");







var RenewalPageModule = /** @class */ (function () {
    function RenewalPageModule() {
    }
    RenewalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _renewal_routing_module__WEBPACK_IMPORTED_MODULE_5__["RenewalPageRoutingModule"]
            ],
            declarations: [_renewal_page__WEBPACK_IMPORTED_MODULE_6__["RenewalPage"]]
        })
    ], RenewalPageModule);
    return RenewalPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=renewal-renewal-module-es5.js.map