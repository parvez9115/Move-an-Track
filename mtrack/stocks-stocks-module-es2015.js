(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stocks-stocks-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/stocks/companylist/companylist.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/stocks/companylist/companylist.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\r\n    <ion-buttons slot=\"start\" (click)=\"closeModal()\">\r\n      <ion-icon name=\"arrow-back\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title style=\"bottom: 16px; position: fixed\">Select Dealer</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-searchbar [(ngModel)]=\"terms\" placeholder=\"Search\"> </ion-searchbar>\r\n\r\n  <ion-virtual-scroll\r\n    [items]=\"companyList | searchDelar : terms\"\r\n    approxItemHeight=\"320px\"\r\n  >\r\n    <ion-list\r\n      *virtualItem=\"let companyList; let i = index\"\r\n      [id]=\"companyList\"\r\n      style=\"padding: 0px\"\r\n    >\r\n      <ion-item (click)=\"updateAnswer($event, i, companyList.id, companyList)\">\r\n        <ion-grid style=\"padding: 0px; margin: 0px\">\r\n          <ion-row style=\"padding: 0px; margin: 0px\">\r\n            <ion-col size=\"8\">{{ companyList.name }}</ion-col>\r\n            <ion-col size=\"3\"></ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-virtual-scroll>\r\n  <!-- <ion-row class=\"ion-text-center\"> \r\n  <ion-col size=\"12\" style=\"position: fixed;\r\n  bottom: 0px;\"><ion-button (click)=\"assign()\" >Submit</ion-button></ion-col>\r\n </ion-row> -->\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/stocks/stocks.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/stocks/stocks.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-header>\r\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n     <ion-title style=\"bottom: 16px;\r\n     position: fixed;\">Stocks</ion-title>\r\n  <!-- <ion-button  shape=\"round\" class=\"dealerHeader\" style=\"margin-left: 50%;\" (click)=\"openModel()\">\r\n       Assign  \r\n    \r\n      </ion-button> -->\r\n      </ion-toolbar>\r\n      <ion-row class=\"upperRow\">\r\n        <ion-col (click)=\"typeSelector('Assign')\" [ngClass]=\"{'selectedUpperCol': type =='Assign', 'upperCol': type !='Assign'}\" size=3.5>\r\n          <ion-label>Assign</ion-label>\r\n        </ion-col>\r\n        <ion-col (click)=\"typeSelector('Re-assign')\" [ngClass]=\"{'selectedUpperCol': type !='Assign', 'upperCol': type =='Assign'}\" size=3.5>\r\n          <ion-label>Re-assign</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-searchbar [(ngModel)]=\"terms\" placeholder=\"Search\">\r\n      </ion-searchbar>\r\n</ion-header>\r\n<ion-content>\r\n  \r\n  <!-- <ion-virtual-scroll [items]=\"showList  | searchDelar:terms\"  approxItemHeight=\"320px\">\r\n    <ion-list  *virtualItem=\"let showList;let i = index\"  [id]='showList.imei' style= 'padding:0px;' >\r\n     <ion-item>\r\n          <ion-grid style='padding:0px;margin: 0px;'>\r\n            <ion-row style='padding:0px;margin: 0px;'>\r\n            \r\n              <ion-col size='8'  >{{showList.imei}}</ion-col>\r\n              <ion-col size='3'></ion-col>\r\n            \r\n           </ion-row>\r\n          </ion-grid>\r\n          <ion-checkbox class=\"checkbox\" #checkboxes (ionChange)=\"updateAnswer($event,i, showList.imei, showList)\" slot=\"end\"></ion-checkbox>\r\n    </ion-item>\r\n    </ion-list>\r\n  </ion-virtual-scroll> -->\r\n  <ion-list style=\"padding: 0px;\" *ngFor=\"let showList of showList | searchDelar:terms\">\r\n    <ion-item style=\"padding: 0px;\">\r\n      <ion-grid style='padding:0px;margin: 0px;'>\r\n        <ion-row style='padding:0px;margin: 0px;'>\r\n          <ion-col style=\"padding: 0px;\" size='12'>{{showList.imei}}</ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-checkbox class=\"checkbox\" #checkboxes (ionChange)=\"updateAnswer($event,i, showList.imei, showList)\"\r\n        slot=\"end\"></ion-checkbox>\r\n    </ion-item>\r\n  </ion-list>\r\n  <!-- <ion-row class=\"ion-text-center\"> \r\n    \r\n  <ion-col size=\"12\" style=\"position: fixed;\r\n   bottom: 0px;\"><ion-button (click)=\"assign()\" >Submit</ion-button></ion-col>\r\n  </ion-row> -->\r\n  <ion-fab *ngIf=\"selectedArray.length != 0\" vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\r\n    <ion-fab-button style=\"--background: #0000000;\r\n    --box-shadow: #0000000; width: 100px; height: 100px;\">\r\n      <ion-icon (click)=\"openModel()\" style=\"font-size: 100px;     color: #7c68f8;\" [name]=\"icon\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/delar-application/stocks/companylist/companylist.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/delar-application/stocks/companylist/companylist.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox {\n  --background-checked: #7c68f8;\n  --border-color-checked: #7d7d7d;\n  --checkmark-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc3RvY2tzL2NvbXBhbnlsaXN0L0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXHN0b2Nrc1xcY29tcGFueWxpc3RcXGNvbXBhbnlsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9zdG9ja3MvY29tcGFueWxpc3QvY29tcGFueWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL3N0b2Nrcy9jb21wYW55bGlzdC9jb21wYW55bGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja2JveHtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjN2M2OGY4O1xyXG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogIzdkN2Q3ZDtcclxuICAgIC0tY2hlY2ttYXJrLWNvbG9yOiB3aGl0ZTtcclxufSIsIi5jaGVja2JveCB7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjN2M2OGY4O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjN2Q3ZDdkO1xuICAtLWNoZWNrbWFyay1jb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/stocks/companylist/companylist.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/delar-application/stocks/companylist/companylist.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CompanylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanylistComponent", function() { return CompanylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let CompanylistComponent = class CompanylistComponent {
    constructor(modalController, ajaxService, router, commonService, alertController) {
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.router = router;
        this.commonService = commonService;
        this.alertController = alertController;
        this.selectedArray = [];
        this.answer = [];
        this.assignedImei = [];
        this.showImeiList = [];
        this.companyID = "";
        this.show = false;
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    removeCheckedFromArray(checkbox) {
        return this.selectedArray.findIndex((category) => {
            return category === checkbox;
        });
    }
    updateAnswer(event, index, name, company) {
        this.companyID = name;
        this.assign(company.name);
    }
    assign(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let text = "Are you sure? You want to add this stock to this company " + name;
            const alert = yield this.alertController.create({
                header: "Assign Stock",
                backdropDismiss: false,
                message: text,
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: (data) => { },
                    },
                    {
                        text: "Confirm",
                        handler: (confirm) => {
                            const currentSuffix = localStorage.getItem("companySuffix");
                            var data = {
                                fromDelar: currentSuffix,
                                toDelar: this.companyID.toString() + "",
                                imeiNo: this.value2,
                            };
                            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/simcard/update/asset/manager";
                            this.ajaxService.ajaxPostMethod(url, data).subscribe((res) => {
                                var responseData = res;
                                if (responseData.message == "updated") {
                                    this.commonService.presentToast("Updated Successfully");
                                    this.modalController.dismiss();
                                }
                            });
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    ngOnInit() {
        this.companyList = this.value;
    }
};
CompanylistComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CompanylistComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CompanylistComponent.prototype, "value2", void 0);
CompanylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-companylist",
        template: __webpack_require__(/*! raw-loader!./companylist.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/stocks/companylist/companylist.component.html"),
        styles: [__webpack_require__(/*! ./companylist.component.scss */ "./src/app/delar-application/stocks/companylist/companylist.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], CompanylistComponent);



/***/ }),

/***/ "./src/app/delar-application/stocks/stocks-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/delar-application/stocks/stocks-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: StocksPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksPageRoutingModule", function() { return StocksPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _stocks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stocks.page */ "./src/app/delar-application/stocks/stocks.page.ts");




const routes = [
    {
        path: '',
        component: _stocks_page__WEBPACK_IMPORTED_MODULE_3__["StocksPage"]
    }
];
let StocksPageRoutingModule = class StocksPageRoutingModule {
};
StocksPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StocksPageRoutingModule);



/***/ }),

/***/ "./src/app/delar-application/stocks/stocks.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/delar-application/stocks/stocks.module.ts ***!
  \***********************************************************/
/*! exports provided: StocksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksPageModule", function() { return StocksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _companylist_companylist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./companylist/companylist.component */ "./src/app/delar-application/stocks/companylist/companylist.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stocks_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stocks-routing.module */ "./src/app/delar-application/stocks/stocks-routing.module.ts");
/* harmony import */ var _services_search_delar_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/search-delar.pipe */ "./src/app/services/search-delar.pipe.ts");
/* harmony import */ var _stocks_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stocks.page */ "./src/app/delar-application/stocks/stocks.page.ts");









let StocksPageModule = class StocksPageModule {
};
StocksPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _stocks_routing_module__WEBPACK_IMPORTED_MODULE_6__["StocksPageRoutingModule"]
        ],
        declarations: [
            _stocks_page__WEBPACK_IMPORTED_MODULE_8__["StocksPage"],
            _services_search_delar_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchDelarPipe"],
            _companylist_companylist_component__WEBPACK_IMPORTED_MODULE_4__["CompanylistComponent"]
        ],
        entryComponents: [_companylist_companylist_component__WEBPACK_IMPORTED_MODULE_4__["CompanylistComponent"]]
    })
], StocksPageModule);



/***/ }),

/***/ "./src/app/delar-application/stocks/stocks.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/delar-application/stocks/stocks.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upperCol {\n  text-align: center;\n  border-radius: 8px;\n  margin: 2px;\n  color: black;\n  font-family: sans-serif;\n  font-size: 13px;\n  text-transform: uppercase;\n}\n\n.upperRow {\n  background: #eeeeee;\n  padding: 4px;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.selectedUpperCol {\n  background: #ffffff;\n  text-align: center;\n  border-radius: 8px;\n  margin: 2px;\n  color: black;\n  font-family: sans-serif;\n  font-size: 13px;\n  text-transform: uppercase;\n  box-shadow: 0.2px 0.2px #888888;\n}\n\n.checkbox {\n  --background-checked: #7c68f8;\n  --border-color-checked: #7d7d7d;\n  --checkmark-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc3RvY2tzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXHN0b2Nrc1xcc3RvY2tzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc3RvY2tzL3N0b2Nrcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQ0E7RUFDSSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL3N0b2Nrcy9zdG9ja3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwcGVyQ29se1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi51cHBlclJvd3tcclxuICAgIGJhY2tncm91bmQ6ICNlZWVlZWU7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uc2VsZWN0ZWRVcHBlckNvbHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJveC1zaGFkb3c6IDAuMnB4IDAuMnB4Izg4ODg4ODtcclxufVxyXG5cclxuLmNoZWNrYm94e1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM3YzY4Zjg7XHJcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjN2Q3ZDdkO1xyXG4gICAgLS1jaGVja21hcmstY29sb3I6IHdoaXRlO1xyXG59IiwiLnVwcGVyQ29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi51cHBlclJvdyB7XG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gIHBhZGRpbmc6IDRweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zZWxlY3RlZFVwcGVyQ29sIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJveC1zaGFkb3c6IDAuMnB4IDAuMnB4ICM4ODg4ODg7XG59XG5cbi5jaGVja2JveCB7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjN2M2OGY4O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjN2Q3ZDdkO1xuICAtLWNoZWNrbWFyay1jb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/stocks/stocks.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/delar-application/stocks/stocks.page.ts ***!
  \*********************************************************/
/*! exports provided: StocksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksPage", function() { return StocksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _companylist_companylist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./companylist/companylist.component */ "./src/app/delar-application/stocks/companylist/companylist.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






// import { ANY_STATE } from '@angular/animation/src/dsl/animation_transition_expr';


let StocksPage = class StocksPage {
    constructor(modalController, ajaxService, router, commonService, alertController) {
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.router = router;
        this.commonService = commonService;
        this.alertController = alertController;
        this.answer = [];
        this.assignedImei = [];
        this.showImeiList = [];
        this.companyID = "";
        this.selectedArray = [];
        this.type = "Assign";
        this.icon = "cloud-upload";
    }
    updateAnswer(event, index, imei, imeiDetail) {
        if (event.currentTarget.checked == true) {
            if (this.type == "Assign")
                this.selectedArray.push(imei);
            else
                this.selectedArray.push(imeiDetail);
        }
        else {
            let index;
            if (this.type == "Assign")
                index = this.removeCheckedFromArray(imei);
            else
                index = this.removeCheckedFromArray(imeiDetail.imei);
            this.selectedArray.splice(index, 1);
        }
        console.log(this.selectedArray);
    }
    openModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.type == "Assign") {
                const modal = yield this.modalController.create({
                    component: _companylist_companylist_component__WEBPACK_IMPORTED_MODULE_6__["CompanylistComponent"],
                    componentProps: {
                        value: this.companyList,
                        value2: this.selectedArray,
                    },
                });
                modal.onDidDismiss().then(() => {
                    this.selectedArray = [];
                    this.typeSelector(this.type);
                    this.uncheckAll();
                });
                return yield modal.present();
            }
            else {
                let text = "Are you sure? You want to re-assign this stock to your company ";
                const alert = yield this.alertController.create({
                    header: "Assign Stock",
                    backdropDismiss: false,
                    message: text,
                    buttons: [
                        {
                            text: "Cancel",
                            role: "cancel",
                            handler: (data) => { },
                        },
                        {
                            text: "Confirm",
                            handler: (confirm) => {
                                for (let i = 0; i < this.selectedArray.length; i++) {
                                    const currentSuffix = localStorage.getItem("companySuffix");
                                    var data = {
                                        fromDelar: this.selectedArray[i].currentAgency,
                                        toDelar: this.selectedArray[i].previousAgency,
                                        imeiNo: [this.selectedArray[i].imei],
                                    };
                                    const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/simcard/update/asset/manager";
                                    this.ajaxService.ajaxPostMethod(url, data).subscribe((res) => {
                                        var responseData = res;
                                        if (responseData.message == "updated") {
                                            this.typeSelector(this.type);
                                            this.selectedArray = [];
                                            this.uncheckAll();
                                            this.commonService.presentToast("Updated Successfully");
                                        }
                                        else if (responseData.message == "Error") {
                                            this.commonService.presentToast("Reassign error");
                                        }
                                    });
                                }
                            },
                        },
                    ],
                });
                yield alert.present();
            }
        });
    }
    removeCheckedFromArray(checkbox) {
        return this.selectedArray.findIndex((category) => {
            return category === checkbox;
        });
    }
    //Empties array with checkedboxes
    emptyCheckedArray() {
        this.selectedArray = [];
    }
    getCheckedBoxes() {
        console.log(this.selectedArray);
    }
    assign() {
        if (this.companyID != "" && this.selectedArray.length > 0) {
            const currentSuffix = localStorage.getItem("companySuffix");
            var data = {
                formDelar: currentSuffix,
                toDelar: this.companyID + "",
                imeiNo: this.selectedArray,
            };
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/simcard/update/asset/manager";
            this.ajaxService.ajaxPostMethod(url, data).subscribe((res) => {
                var responseData = JSON.parse(res);
                if (responseData.message == "updated") {
                    this.router.navigateByUrl("/dashboard");
                    this.commonService.presentToast("Updated Successfully");
                }
            });
        }
        else {
            this.commonService.presentToast("Please Select the Company");
        }
    }
    getImeiList() {
        // const companySuffix = {suffix:''};
        // companySuffix.suffix = localStorage.getItem('companySuffix');
        // const url = serverUrl.web + '/api/vts/superadmin/device/' + JSON.stringify(companySuffix);
        // this.ajaxService.ajaxGet(url)
        // .subscribe(res => {
        //   this.showList = res;
        //   for(var i=0;i<this.showList.length;i++){
        //     this.showImeiList.push(this.showList[i].imei)
        //   }
        // });
        this.showList = JSON.parse(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["adminLocalStorage"].dealerLoginData).assets["Stocks"];
    }
    getDelar() {
        const suffix = localStorage.getItem("companySuffix");
        const companyUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/global/getdealerlist?suffix=" + suffix;
        this.ajaxService.ajaxGet(companyUrl).subscribe((res) => {
            this.companyList = res;
        });
    }
    ionViewWillEnter() {
        this.showList = [];
        this.companyList;
        this.companyID = "";
        this.selectedArray = [];
        this.getImeiList();
        this.getDelar();
        this.typeSelector(this.type);
    }
    typeSelector(data) {
        this.commonService.presentLoader();
        this.uncheckAll();
        this.type = data;
        this.icon = "cloud-upload";
        const companySuffix = { suffix: "21", mode: "stock" };
        if (this.type != "Assign") {
            companySuffix.mode = "revoke";
            this.icon = "cloud-download";
        }
        companySuffix.suffix = localStorage.getItem("companySuffix");
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/global/getImeiNoDetails";
        this.ajaxService.ajaxPostWithBody(url, companySuffix).subscribe((res) => {
            this.showList = res;
            this.commonService.dismissLoader();
        });
    }
    uncheckAll() {
        for (let i = 0; i < this.checkboxes.length; i++) {
            this.checkboxes["_results"][i].checked = false;
        }
    }
    ngOnInit() { }
};
StocksPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])("checkboxes"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], StocksPage.prototype, "checkboxes", void 0);
StocksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-stocks",
        template: __webpack_require__(/*! raw-loader!./stocks.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/stocks/stocks.page.html"),
        styles: [__webpack_require__(/*! ./stocks.page.scss */ "./src/app/delar-application/stocks/stocks.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        _services_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]])
], StocksPage);



/***/ }),

/***/ "./src/app/services/search-delar.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/services/search-delar.pipe.ts ***!
  \***********************************************/
/*! exports provided: SearchDelarPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDelarPipe", function() { return SearchDelarPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchDelarPipe = class SearchDelarPipe {
    transform(items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(it => {
            if (it.imei != null) {
                return it.imei.replace(/ /g, '').toLowerCase().includes(terms.replace(/ /g, ''));
            }
            else if (it.name) {
                return it.name.toLowerCase().includes(terms);
            }
            else
                return false;
        });
    }
};
SearchDelarPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'searchDelar'
    })
], SearchDelarPipe);



/***/ })

}]);
//# sourceMappingURL=stocks-stocks-module-es2015.js.map