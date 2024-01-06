(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dealer-imeicheck-details-dealer-imeicheck-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/dealer-imeicheck-details/dealer-imeicheck-details.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/dealer-imeicheck-details/dealer-imeicheck-details.page.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Dealer IMEI Check</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"wrapper-container\">\n      <ion-col size=\"12\">\n        <form [formGroup]=\"imeicheckForm\">\n          <ion-row class=\"form-field\">\n            <ion-col size=\"12\" size-lg=\"6\" size-md=\"6\">\n              <ion-label class=\"label-head\">Select Dealer :</ion-label>\n              <ionic-selectable\n                class=\"input selectable-input\"\n                formControlName=\"dealer\"\n                placeholder=\"Select the Dealer\"\n                [items]=\"dealerlist\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n              >\n              </ionic-selectable>\n            </ion-col>\n\n            <ion-col\n              size=\"12\"\n              size-lg=\"3\"\n              size-md=\"3\"\n              style=\"margin: 25px 0px 0px; text-align: center\"\n            >\n              <ion-button\n                class=\"submitbtn\"\n                (click)=\"SearchData()\"\n                [disabled]=\"!imeicheckForm.valid\"\n                >Search</ion-button\n              >\n              <ion-button class=\"submitbtn\" (click)=\"clear()\">Clear</ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n\n        <ion-row style=\"padding: 10px\" *ngIf=\"show\">\n          <ion-col size=\"12\">\n            <jqxGrid\n              #myGrid\n              [theme]=\"'material'\"\n              [enablebrowserselection]=\"true\"\n              [pagesizeoptions]=\"page\"\n              [width]=\"'99.5%'\"\n              [autoheight]=\"true\"\n              [source]=\"dataAdapter\"\n              [columns]=\"columns\"\n              [filterable]=\"true\"\n              [sortable]=\"true\"\n              [columnsresize]=\"true\"\n              [enabletooltips]=\"true\"\n              [pageable]=\"true\"\n              [showfilterrow]=\"true\"\n              style=\"\n                font-size: 16px;\n                text-align: center !important;\n                margin: auto;\n                cursor: pointer;\n              \"\n              [columns]=\"columns\"\n            >\n            </jqxGrid>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/dealer-imeicheck-details/dealer-imeicheck-details.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/delar-application/dealer-imeicheck-details/dealer-imeicheck-details.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: DealerImeicheckDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerImeicheckDetailsPageModule", function() { return DealerImeicheckDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dealer_imeicheck_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dealer-imeicheck-details.page */ "./src/app/delar-application/dealer-imeicheck-details/dealer-imeicheck-details.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");









var routes = [
    {
        path: "",
        component: _dealer_imeicheck_details_page__WEBPACK_IMPORTED_MODULE_6__["DealerImeicheckDetailsPage"],
    },
];
var DealerImeicheckDetailsPageModule = /** @class */ (function () {
    function DealerImeicheckDetailsPageModule() {
    }
    DealerImeicheckDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_dealer_imeicheck_details_page__WEBPACK_IMPORTED_MODULE_6__["DealerImeicheckDetailsPage"]],
        })
    ], DealerImeicheckDetailsPageModule);
    return DealerImeicheckDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/dealer-imeicheck-details/dealer-imeicheck-details.page.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/delar-application/dealer-imeicheck-details/dealer-imeicheck-details.page.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n.form-field {\n  margin: -5px;\n  border-radius: 7px;\n}\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGVhbGVyLWltZWljaGVjay1kZXRhaWxzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGRlYWxlci1pbWVpY2hlY2stZGV0YWlsc1xcZGVhbGVyLWltZWljaGVjay1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGVhbGVyLWltZWljaGVjay1kZXRhaWxzL2RlYWxlci1pbWVpY2hlY2stZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQ0NGO0FBQ0Y7QURFQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDQUY7QUFDRjtBREdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDREY7QURJQTtFQUNFO0lBQ0UsU0FBQTtFQ0RGOztFRElBO0lBQ0UsVUFBQTtFQ0RGO0FBQ0Y7QURJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDRkY7QURLQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNGRjtBREtBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDRkY7QURLQTtFQUNFO0lBQ0UsZ0JBQUE7RUNGRjs7RURLQTtJQUNFLFVBQUE7RUNGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGVhbGVyLWltZWljaGVjay1kZXRhaWxzL2RlYWxlci1pbWVpY2hlY2stZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweCkgYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDhweCAxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogLTVweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZm9ybS1maWVsZCB7XHJcbiAgICB6b29tOiA4MCU7XHJcbiAgfVxyXG5cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4ubGFiZWwtaGVhZCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgbWFyZ2luOiA3cHg7XHJcbn1cclxuXHJcbi5zZWxlY3RhYmxlLWlucHV0IHtcclxuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxufVxyXG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTVweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4ubGFiZWwtaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgbWFyZ2luOiA3cHg7XG59XG5cbi5zZWxlY3RhYmxlLWlucHV0IHtcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/dealer-imeicheck-details/dealer-imeicheck-details.page.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/delar-application/dealer-imeicheck-details/dealer-imeicheck-details.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: DealerImeicheckDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerImeicheckDetailsPage", function() { return DealerImeicheckDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









var DealerImeicheckDetailsPage = /** @class */ (function () {
    function DealerImeicheckDetailsPage(platform, formBuilder, modalController, ajaxService, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.page = [];
        this.show = false;
    }
    DealerImeicheckDetailsPage.prototype.createForm = function () {
        this.imeicheckForm = this.formBuilder.group({
            dealer: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    DealerImeicheckDetailsPage.prototype.clear = function () {
        this.imeicheckForm.patchValue({
            dealer: "",
        });
        this.show = false;
    };
    DealerImeicheckDetailsPage.prototype.getdealer = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/global/getesimdealerlist";
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            _this.dealerlist = res;
        });
    };
    DealerImeicheckDetailsPage.prototype.SearchData = function () {
        var _this = this;
        this.show = true;
        this.page = [];
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/global/getimeinolist?dealername=" +
            this.imeicheckForm.value.dealer;
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            if (res.length == 0) {
                _this.show = false;
                _this.commonService.dismissLoader();
                _this.commonService.showConfirm("No record found");
            }
            else {
                _this.page = ["100", "200", "500", "1000"];
                _this.tableData = res;
                _this.commonService.dismissLoader();
                console.log(_this.myGrid);
                _this.renderer = function (row, column, value) {
                    if (value == "" || null || undefined || value == ",") {
                        return "---";
                    }
                    else {
                        return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                            value +
                            "</span>");
                    }
                };
                _this.source = { localdata: _this.tableData };
                _this.dataAdapter = new jqx.dataAdapter(_this.source);
                _this.columns = [
                    {
                        text: "IMEI No",
                        datafield: "imeiNo",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 200,
                        editable: true,
                    },
                    {
                        text: "SIM No",
                        datafield: "simcardNo",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 200,
                        editable: true,
                    },
                    {
                        text: "Manufacturer",
                        datafield: "deviceManufacturer",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 200,
                        editable: true,
                    },
                    {
                        text: "Device Model",
                        datafield: "deviceModel",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 200,
                        editable: true,
                    },
                    {
                        text: "Current Agency",
                        datafield: "currentAgency",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 200,
                        editable: true,
                    },
                ];
            }
        });
    };
    DealerImeicheckDetailsPage.prototype.ngOnInit = function () {
        this.createForm();
    };
    DealerImeicheckDetailsPage.prototype.ionViewWillEnter = function () {
        this.getdealer();
        this.clear();
    };
    DealerImeicheckDetailsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("selectComponent", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic_selectable__WEBPACK_IMPORTED_MODULE_4__["IonicSelectableComponent"])
    ], DealerImeicheckDetailsPage.prototype, "selectComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridComponent"])
    ], DealerImeicheckDetailsPage.prototype, "myGrid", void 0);
    DealerImeicheckDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dealer-imeicheck-details",
            template: __webpack_require__(/*! raw-loader!./dealer-imeicheck-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/dealer-imeicheck-details/dealer-imeicheck-details.page.html"),
            styles: [__webpack_require__(/*! ./dealer-imeicheck-details.page.scss */ "./src/app/delar-application/dealer-imeicheck-details/dealer-imeicheck-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]])
    ], DealerImeicheckDetailsPage);
    return DealerImeicheckDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=dealer-imeicheck-details-dealer-imeicheck-details-module-es5.js.map