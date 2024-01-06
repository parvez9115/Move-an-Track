(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stock-assign-stock-assign-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/stock-assign/dealer-details/dealer-details.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/stock-assign/dealer-details/dealer-details.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"closeModal()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Select the Dealer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar style=\"margin: 4px\" [(ngModel)]=\"terms\" placeholder=\"Search\">\n  </ion-searchbar>\n  <ion-virtual-scroll\n    [items]=\"companyList | searchDealerStock : terms\"\n    approxItemHeight=\"320px\"\n  >\n    <ion-list\n      *virtualItem=\"let companyList; let i = index\"\n      [id]=\"companyList\"\n      style=\"padding: 0px\"\n    >\n      <ion-item (click)=\"updateAnswer($event, i, companyList.id, companyList)\">\n        <ion-grid style=\"padding: 0px; margin: 0px\">\n          <ion-row style=\"padding: 0px; margin: 0px\">\n            <ion-col size=\"8\">{{ companyList.name }}</ion-col>\n            <ion-col size=\"3\"></ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </ion-virtual-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/stock-assign/stock-assign.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/stock-assign/stock-assign.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Stock Assign</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"upperRow\">\n    <ion-col\n      (click)=\"typeSelector('Assign')\"\n      [ngClass]=\"{'selectedUpperCol': type =='Assign', 'upperCol': type !='Assign'}\"\n      size=\"5\"\n    >\n      <ion-label>Assign</ion-label>\n    </ion-col>\n    <ion-col\n      (click)=\"typeSelector('Re-assign')\"\n      [ngClass]=\"{'selectedUpperCol': type !='Assign', 'upperCol': type =='Assign'}\"\n      size=\"5\"\n    >\n      <ion-label>Re-assign</ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"padding: 5px\">\n    <ion-col size=\"12\">\n      <ion-label\n        ><span class=\"dealer-label\">Total Stocks :</span\n        ><span class=\"dealer-data\">{{showList?.length}}</span\n        ><span class=\"dealer-label\">Total Selected Row :</span\n        ><span class=\"dealer-data\">{{selectedRow?.length}}</span></ion-label\n      >\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin: 15px 0px 0px 0px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        [selectionmode]=\"'checkbox'\"\n        (onRowselect)=\"myGridOnRowSelect($event)\"\n        (onRowunselect)=\"myGridOnRowSelect($event)\"\n        [theme]=\"'material'\"\n        [width]=\"'99%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        [enablebrowserselection]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n  <ion-fab\n    *ngIf=\"showButton\"\n    vertical=\"bottom\"\n    horizontal=\"center\"\n    slot=\"fixed\"\n  >\n    <ion-fab-button\n      style=\"\n        --background: #0000000;\n        --box-shadow: #0000000;\n        width: 100px;\n        height: 100px;\n      \"\n    >\n      <ion-icon\n        (click)=\"openModel()\"\n        style=\"font-size: 100px; color: #7c68f8\"\n        [name]=\"icon\"\n      ></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/stock-assign/dealer-details/dealer-details.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/delar-application/stock-assign/dealer-details/dealer-details.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox {\n  --background-checked: #7c68f8;\n  --border-color-checked: #7d7d7d;\n  --checkmark-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc3RvY2stYXNzaWduL2RlYWxlci1kZXRhaWxzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXHN0b2NrLWFzc2lnblxcZGVhbGVyLWRldGFpbHNcXGRlYWxlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9zdG9jay1hc3NpZ24vZGVhbGVyLWRldGFpbHMvZGVhbGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL3N0b2NrLWFzc2lnbi9kZWFsZXItZGV0YWlscy9kZWFsZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja2JveCB7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzdjNjhmODtcclxuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICM3ZDdkN2Q7XHJcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogd2hpdGU7XHJcbn0iLCIuY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzdjNjhmODtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogIzdkN2Q3ZDtcbiAgLS1jaGVja21hcmstY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/stock-assign/dealer-details/dealer-details.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/delar-application/stock-assign/dealer-details/dealer-details.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DealerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerDetailsComponent", function() { return DealerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let DealerDetailsComponent = class DealerDetailsComponent {
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
                                    this.modalController.dismiss("Updated Successfully");
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
DealerDetailsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DealerDetailsComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DealerDetailsComponent.prototype, "value2", void 0);
DealerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dealer-details",
        template: __webpack_require__(/*! raw-loader!./dealer-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/stock-assign/dealer-details/dealer-details.component.html"),
        styles: [__webpack_require__(/*! ./dealer-details.component.scss */ "./src/app/delar-application/stock-assign/dealer-details/dealer-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], DealerDetailsComponent);



/***/ }),

/***/ "./src/app/delar-application/stock-assign/stock-assign.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/delar-application/stock-assign/stock-assign.module.ts ***!
  \***********************************************************************/
/*! exports provided: StockAssignPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockAssignPageModule", function() { return StockAssignPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stock_assign_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock-assign.page */ "./src/app/delar-application/stock-assign/stock-assign.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _dealer_details_dealer_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dealer-details/dealer-details.component */ "./src/app/delar-application/stock-assign/dealer-details/dealer-details.component.ts");
/* harmony import */ var src_app_services_search_dealer_pipe_stock_up__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/search-dealer-pipe-stock-up */ "./src/app/services/search-dealer-pipe-stock-up.ts");










const routes = [
    {
        path: "",
        component: _stock_assign_page__WEBPACK_IMPORTED_MODULE_6__["StockAssignPage"],
    },
    {
        path: "dealer-details",
        component: _dealer_details_dealer_details_component__WEBPACK_IMPORTED_MODULE_8__["DealerDetailsComponent"],
    },
];
let StockAssignPageModule = class StockAssignPageModule {
};
StockAssignPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [
            _stock_assign_page__WEBPACK_IMPORTED_MODULE_6__["StockAssignPage"],
            src_app_services_search_dealer_pipe_stock_up__WEBPACK_IMPORTED_MODULE_9__["SearchDealerStockPipe"],
            _dealer_details_dealer_details_component__WEBPACK_IMPORTED_MODULE_8__["DealerDetailsComponent"],
        ],
    })
], StockAssignPageModule);



/***/ }),

/***/ "./src/app/delar-application/stock-assign/stock-assign.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/delar-application/stock-assign/stock-assign.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upperCol {\n  text-align: center;\n  border-radius: 8px;\n  margin: 2px;\n  color: black;\n  font-family: sans-serif;\n  font-size: 13px;\n  text-transform: uppercase;\n}\n\n.upperRow {\n  background: #eeeeee;\n  padding: 15px;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.selectedUpperCol {\n  background: #ffffff;\n  text-align: center;\n  border-radius: 8px;\n  margin: 2px;\n  color: black;\n  font-family: sans-serif;\n  font-size: 13px;\n  text-transform: uppercase;\n  box-shadow: 0.2px 0.2px #888888;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.checkbox {\n  --background-checked: #7c68f8;\n  --border-color-checked: #7d7d7d;\n  --checkmark-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc3RvY2stYXNzaWduL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXHN0b2NrLWFzc2lnblxcc3RvY2stYXNzaWduLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc3RvY2stYXNzaWduL3N0b2NrLWFzc2lnbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL3N0b2NrLWFzc2lnbi9zdG9jay1hc3NpZ24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwcGVyQ29sIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4udXBwZXJSb3cge1xyXG4gICAgYmFja2dyb3VuZDogI2VlZWVlZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlbGVjdGVkVXBwZXJDb2wge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm94LXNoYWRvdzogMC4ycHggMC4ycHgjODg4ODg4O1xyXG59XHJcblxyXG4uZGVhbGVyLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uY2hlY2tib3gge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM3YzY4Zjg7XHJcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjN2Q3ZDdkO1xyXG4gICAgLS1jaGVja21hcmstY29sb3I6IHdoaXRlO1xyXG59IiwiLnVwcGVyQ29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi51cHBlclJvdyB7XG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2VsZWN0ZWRVcHBlckNvbCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3gtc2hhZG93OiAwLjJweCAwLjJweCAjODg4ODg4O1xufVxuXG4uZGVhbGVyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzdjNjhmODtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogIzdkN2Q3ZDtcbiAgLS1jaGVja21hcmstY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/stock-assign/stock-assign.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/delar-application/stock-assign/stock-assign.page.ts ***!
  \*********************************************************************/
/*! exports provided: StockAssignPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockAssignPage", function() { return StockAssignPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _dealer_details_dealer_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dealer-details/dealer-details.component */ "./src/app/delar-application/stock-assign/dealer-details/dealer-details.component.ts");








let StockAssignPage = class StockAssignPage {
    constructor(platform, modalController, alertController, commonService, ajaxService) {
        this.platform = platform;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.selectedRow = [];
        this.type = "Assign";
        this.icon = "cloud-upload";
        this.showList = [];
        this.showButton = false;
        this.page = [];
    }
    typeSelector(data) {
        this.commonService.presentLoader();
        this.type = data;
        this.icon = "cloud-upload";
        const companySuffix = { suffix: "", mode: "stock" };
        if (this.type != "Assign") {
            companySuffix.mode = "revoke";
            this.icon = "cloud-download";
        }
        companySuffix.suffix = localStorage.getItem("companySuffix");
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/global/getImeiNoDetail";
        this.ajaxService.ajaxPostWithBody(url, companySuffix).subscribe((res) => {
            this.showList = res;
            this.commonService.dismissLoader();
            this.getDatas();
            this.myGrid.clearselection();
        });
    }
    openModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.type == "Assign") {
                var arr = [];
                for (let i = 0; i < this.selectedRow.length; i++) {
                    arr.push(this.myGrid["attrSource"]["originaldata"][this.selectedRow[i]].imei);
                }
                const modal = yield this.modalController.create({
                    component: _dealer_details_dealer_details_component__WEBPACK_IMPORTED_MODULE_7__["DealerDetailsComponent"],
                    componentProps: {
                        value: this.companyList,
                        value2: arr,
                    },
                });
                modal.onDidDismiss().then((d) => {
                    if (d.data == "Updated Successfully") {
                        this.myGrid.clearselection();
                        this.typeSelector(this.type);
                    }
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
                                for (let i = 0; i < this.selectedRow.length; i++) {
                                    const currentSuffix = localStorage.getItem("companySuffix");
                                    var data = {
                                        fromDelar: this.myGrid["attrSource"]["originaldata"][this.selectedRow[i]].currentAgency,
                                        toDelar: this.myGrid["attrSource"]["originaldata"][this.selectedRow[i]].previousAgency,
                                        imeiNo: [
                                            this.myGrid["attrSource"]["originaldata"][this.selectedRow[i]].imei,
                                        ],
                                    };
                                    const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/simcard/update/asset/manager";
                                    this.ajaxService.ajaxPostMethod(url, data).subscribe((res) => {
                                        var responseData = res;
                                        if (responseData.message == "updated") {
                                            this.typeSelector(this.type);
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
    getDelar() {
        const suffix = localStorage.getItem("companySuffix");
        const companyUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/global/getdealerlist?suffix=" + suffix;
        this.ajaxService.ajaxGet(companyUrl).subscribe((res) => {
            this.companyList = res;
        });
    }
    getDatas() {
        this.renderer = (row, column, value) => {
            if (value == "" || null || undefined || value == ",") {
                return "--";
            }
            else {
                return ('<span style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                    value +
                    "</span>");
            }
        };
        this.source = { localdata: this.showList };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        if (this.type == "Assign") {
            this.columns = [
                {
                    text: "IMEI No",
                    datafield: "imei",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 240,
                },
                {
                    text: "SIM No",
                    datafield: "simno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 240,
                },
                {
                    text: "VLTD No",
                    datafield: "vltdsno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 240,
                },
                {
                    text: "Box No",
                    datafield: "serialno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 240,
                },
                {
                    text: "Slot No",
                    datafield: "slotno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 240,
                },
            ];
        }
        else {
            this.columns = [
                {
                    text: "IMEI No",
                    datafield: "imei",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 240,
                },
                {
                    text: "Dealer",
                    datafield: "dealer",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 240,
                },
                {
                    text: "SIM No",
                    datafield: "simno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 240,
                },
                {
                    text: "VLTD No",
                    datafield: "vltdsno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 240,
                },
                {
                    text: "Box No",
                    datafield: "serialno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 240,
                },
                {
                    text: "Slot No",
                    datafield: "slotno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 240,
                },
            ];
        }
    }
    myGridOnRowSelect(event) {
        this.selectedRow = this.myGrid.getselectedrowindexes();
        if (this.selectedRow.length > 0) {
            this.showButton = true;
        }
        else {
            this.showButton = false;
        }
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.showList = [];
        this.companyList;
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.getDelar();
        this.typeSelector(this.type);
    }
};
StockAssignPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
], StockAssignPage.prototype, "myGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])("checkboxes"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], StockAssignPage.prototype, "checkboxes", void 0);
StockAssignPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-stock-assign",
        template: __webpack_require__(/*! raw-loader!./stock-assign.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/stock-assign/stock-assign.page.html"),
        styles: [__webpack_require__(/*! ./stock-assign.page.scss */ "./src/app/delar-application/stock-assign/stock-assign.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"]])
], StockAssignPage);



/***/ }),

/***/ "./src/app/services/search-dealer-pipe-stock-up.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/search-dealer-pipe-stock-up.ts ***!
  \*********************************************************/
/*! exports provided: SearchDealerStockPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDealerStockPipe", function() { return SearchDealerStockPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchDealerStockPipe = class SearchDealerStockPipe {
    transform(items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter((it) => {
            if (it.imeiNo != null) {
                return it.imeiNo
                    .replace(/ /g, "")
                    .toLowerCase()
                    .includes(terms.replace(/ /g, ""));
            }
            else if (it.name) {
                return it.name.toLowerCase().includes(terms);
            }
            else
                return false;
        });
    }
};
SearchDealerStockPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "searchDealerStock",
    })
], SearchDealerStockPipe);



/***/ })

}]);
//# sourceMappingURL=stock-assign-stock-assign-module-es2015.js.map