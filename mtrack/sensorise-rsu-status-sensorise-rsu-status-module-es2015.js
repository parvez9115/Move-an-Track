(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sensorise-rsu-status-sensorise-rsu-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/sensorise-rsu-status/rsu-history/rsu-history.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/sensorise-rsu-status/rsu-history/rsu-history.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon (click)=\"cancelBtn()\" name=\"arrow-back\" style=\"padding: 10px\" slot=\"start\"></ion-icon>\n    </ion-buttons>\n    <ion-title>RSU History</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"wrapper-container\">\n    <ion-col size=\"12\">\n\n\n      <jqxGrid #myGrid [theme]=\"'material'\" [width]=\"'99%'\" [autoheight]=\"true\" [source]=\"dataAdapter\"\n        [pagesizeoptions]=\"page\" [enablebrowserselection]=\"true\" [columns]=\"columns\" [sortable]=\"true\"\n        [filterable]=\"true\" [columns]=\"columns\" [columnsresize]=\"true\" [enabletooltips]=\"true\" [pageable]=\"true\"\n        [showfilterrow]=\"true\" style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \">\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/sensorise-rsu-status/sensorise-rsu-status.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/sensorise-rsu-status/sensorise-rsu-status.page.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Sensorise RSU Detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-row>\n    <ion-col class=\"form-field\" style=\"text-align: right\">\n      <ion-button class=\"submitbtn\" (click)=\"export()\" [disabled]=\"showButton\"\n        >Export</ion-button\n      >\n    </ion-col></ion-row\n  > -->\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-row class=\"form-field\" style=\"justify-content: end;\">\n        <!-- <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\">\n            <ion-label class=\"label-head\">File Upload:</ion-label>\n            <input type=\"file\" (change)=\"onFileChange($event)\" formControlName=\"fileupload\" class=\"documents\" />\n          </ion-col> -->\n        <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\" style=\"margin: 25px 0px 0px; text-align: center\">\n          <ion-button class=\"submitbtn\" (click)=\"export()\" [disabled]=\"showButton\">Submit</ion-button>\n          <ion-button class=\"submitbtn\" (click)=\"clear()\">Clear</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin-top: 10px\">\n    <ion-col>\n      <jqxGrid #myGrid (onRowclick)=\"myGridOnRowclick($event)\" (onRowselect)=\"myGridOnRowSelect($event)\"\n        (onRowunselect)=\"myGridOnRowSelect($event)\" [selectionmode]=\"'checkbox'\" [theme]=\"'material'\" [width]=\"'99%'\"\n        [autoheight]=\"true\" [pagesizeoptions]=\"page\" [source]=\"dataAdapter\" [enablebrowserselection]=\"true\"\n        [columns]=\"columns\" [sortable]=\"true\" [filterable]=\"true\" [columns]=\"columns\" [columnsresize]=\"true\"\n        [enabletooltips]=\"true\" [pageable]=\"true\" [showfilterrow]=\"true\" style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \">\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/delar-application/sensorise-rsu-status/rsu-history/rsu-history.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/delar-application/sensorise-rsu-status/rsu-history/rsu-history.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL3NlbnNvcmlzZS1yc3Utc3RhdHVzL3JzdS1oaXN0b3J5L3JzdS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/delar-application/sensorise-rsu-status/rsu-history/rsu-history.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/delar-application/sensorise-rsu-status/rsu-history/rsu-history.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: RsuHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RsuHistoryComponent", function() { return RsuHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









let RsuHistoryComponent = class RsuHistoryComponent {
    constructor(ajaxService, router, formBuilder, commonService, modalController) {
        this.ajaxService = ajaxService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.modalController = modalController;
        this.show = false;
        this.page = [];
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    getdatas() {
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/sensorise/getSensoriseRSUHistory?iccidno=" +
            this.value.iccidno1;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.tableData = res;
            this.commonService.dismissLoader();
            this.page = ["100", "200", "500", "1000"];
            this.renderer = (row, column, value) => {
                if (value == "" || null || undefined) {
                    return "--";
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
                {
                    text: "VLTD No",
                    datafield: "vltd",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "ICCID NO",
                    datafield: "iccidno1",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 145,
                },
                {
                    text: "SIM 1",
                    datafield: "sim1",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "SIM 2",
                    datafield: "sim2",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "IMEI No",
                    datafield: "imei",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "Dealer",
                    datafield: "dealerid",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
            ];
        });
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row;
        this.show = true;
    }
    ngOnInit() {
        this.getdatas();
    }
};
RsuHistoryComponent.ctorParameters = () => [
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RsuHistoryComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridComponent"])
], RsuHistoryComponent.prototype, "myGrid", void 0);
RsuHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-rsu-history",
        template: __webpack_require__(/*! raw-loader!./rsu-history.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/sensorise-rsu-status/rsu-history/rsu-history.component.html"),
        styles: [__webpack_require__(/*! ./rsu-history.component.scss */ "./src/app/delar-application/sensorise-rsu-status/rsu-history/rsu-history.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], RsuHistoryComponent);



/***/ }),

/***/ "./src/app/delar-application/sensorise-rsu-status/sensorise-rsu-status.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/sensorise-rsu-status/sensorise-rsu-status.module.ts ***!
  \***************************************************************************************/
/*! exports provided: SensoriseRsuStatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensoriseRsuStatusPageModule", function() { return SensoriseRsuStatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sensorise_rsu_status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sensorise-rsu-status.page */ "./src/app/delar-application/sensorise-rsu-status/sensorise-rsu-status.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _rsu_history_rsu_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rsu-history/rsu-history.component */ "./src/app/delar-application/sensorise-rsu-status/rsu-history/rsu-history.component.ts");









const routes = [
    {
        path: "",
        component: _sensorise_rsu_status_page__WEBPACK_IMPORTED_MODULE_6__["SensoriseRsuStatusPage"],
    },
    {
        path: "rsu-history",
        component: _rsu_history_rsu_history_component__WEBPACK_IMPORTED_MODULE_8__["RsuHistoryComponent"],
    },
];
let SensoriseRsuStatusPageModule = class SensoriseRsuStatusPageModule {
};
SensoriseRsuStatusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_sensorise_rsu_status_page__WEBPACK_IMPORTED_MODULE_6__["SensoriseRsuStatusPage"], _rsu_history_rsu_history_component__WEBPACK_IMPORTED_MODULE_8__["RsuHistoryComponent"]],
    })
], SensoriseRsuStatusPageModule);



/***/ }),

/***/ "./src/app/delar-application/sensorise-rsu-status/sensorise-rsu-status.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/sensorise-rsu-status/sensorise-rsu-status.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n.form-field {\n  margin: 0px 5px 0px;\n  border-radius: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2Vuc29yaXNlLXJzdS1zdGF0dXMvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcc2Vuc29yaXNlLXJzdS1zdGF0dXNcXHNlbnNvcmlzZS1yc3Utc3RhdHVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2Vuc29yaXNlLXJzdS1zdGF0dXMvc2Vuc29yaXNlLXJzdS1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxnQkFBQTtFQ0NGOztFRENBO0lBQ0UsVUFBQTtFQ0VGO0FBQ0Y7QURDQTtFQUNFO0lBQ0UsU0FBQTtFQ0NGOztFRENBO0lBQ0UsVUFBQTtFQ0VGO0FBQ0Y7QURDQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL3NlbnNvcmlzZS1yc3Utc3RhdHVzL3NlbnNvcmlzZS1yc3Utc3RhdHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIHpvb206IDgwJTtcclxuICB9XHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogMHB4IDVweCAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcbiIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IDBweCA1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/sensorise-rsu-status/sensorise-rsu-status.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/delar-application/sensorise-rsu-status/sensorise-rsu-status.page.ts ***!
  \*************************************************************************************/
/*! exports provided: SensoriseRsuStatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensoriseRsuStatusPage", function() { return SensoriseRsuStatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _rsu_history_rsu_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rsu-history/rsu-history.component */ "./src/app/delar-application/sensorise-rsu-status/rsu-history/rsu-history.component.ts");









let SensoriseRsuStatusPage = class SensoriseRsuStatusPage {
    constructor(platform, modalController, alertController, commonService, ajaxService, ete) {
        this.platform = platform;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.ete = ete;
        this.page = [];
        this.showButton = true;
        this.head = ["iccid"];
    }
    export() {
        let selectdata = this.myGrid.getselectedrowindexes();
        var arr = [];
        for (let i = 0; i < selectdata.length; i++) {
            arr.push({
                iccid: this.myGrid["attrSource"]["originaldata"][selectdata[i]].iccidno1,
            });
        }
        this.commonService.presentLoader();
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/sensorise/saveSensoriseRSU?createdby=" +
            localStorage.getItem("corpId");
        this.ajaxService.ajaxPostWithString(url, arr).subscribe((response) => {
            this.commonService.dismissLoader();
            let res = JSON.parse(response);
            if (res.Message == "Renewal Saved Successfully") {
                this.commonService.showConfirm(res.Message);
                this.clear();
                this.getDatas();
            }
            else {
                this.commonService.showConfirm(res.Message);
            }
        });
        // this.Download = arr;
        // this.pdfdatas = [];
        // for (var i = 0; i < this.Download.length; i++) {
        //   this.pdfdatas.push([this.Download[i].iccidno1]);
        // }
        // let reportData = {
        //   data: this.pdfdatas,
        //   headers: this.head,
        // };
        // this.myGrid.clearselection();
        // this.ete.generateExcel(reportData);
    }
    clear() {
        this.myGrid.clearselection();
    }
    getDatas() {
        this.page = [];
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/sensorise/getSensoriseRSUStatus";
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            if (this.count != undefined) {
                var fData = res.filter((d) => {
                    return d.rowcolor == this.count;
                });
                this.tableData = fData;
                this.count = undefined;
            }
            else {
                this.tableData = res;
            }
            this.page = ["100", "200", "500", "1000"];
            this.tableData = res;
            this.commonService.dismissLoader();
            this.renderer = (row, column, value) => {
                if (value == "" || null || undefined || value == ",") {
                    return "---";
                }
                else {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                        value +
                        "</span>");
                }
            };
            this.source = { localdata: this.tableData };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            setTimeout(() => {
                this.myGrid.clearselection();
            }, 2500);
            this.columns = [
                {
                    text: "VLTD No",
                    datafield: "vltd",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 160,
                },
                {
                    text: "ICCID NO",
                    datafield: "iccidno1",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 160,
                },
                {
                    text: "SIM 1",
                    datafield: "sim1",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 160,
                },
                {
                    text: "SIM 2",
                    datafield: "sim2",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 160,
                },
                {
                    text: "IMEI No",
                    datafield: "imei",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 160,
                },
                {
                    text: "Dealer",
                    datafield: "dealerid",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 160,
                },
                {
                    text: "",
                    datafield: "detail",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                    cellsrenderer: () => {
                        return this.myPlatform == "desktop"
                            ? "RSU History"
                            : "<button>RSU Historys</button>";
                    },
                    buttonclick: (row) => {
                        this.rsuhistory();
                    },
                },
            ];
        });
    }
    myGridOnRowclick(event) {
        this.selectedRow = event.args.row.bounddata;
    }
    rsuhistory() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _rsu_history_rsu_history_component__WEBPACK_IMPORTED_MODULE_8__["RsuHistoryComponent"],
                cssClass: "viewform1",
                componentProps: {
                    value: this.selectedRow,
                },
            });
            modal.onDidDismiss().then(() => { });
            return yield modal.present();
        });
    }
    myGridOnRowSelect(event) {
        this.selectedRow = this.myGrid.getselectedrowindexes();
        if (this.selectedRow.length > 0) {
            this.showButton = false;
        }
        else {
            this.showButton = true;
        }
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
    }
    ionViewWillEnter() {
        this.getDatas();
        this.clear();
    }
};
SensoriseRsuStatusPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExportExcelService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
], SensoriseRsuStatusPage.prototype, "myGrid", void 0);
SensoriseRsuStatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sensorise-rsu-status",
        template: __webpack_require__(/*! raw-loader!./sensorise-rsu-status.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/sensorise-rsu-status/sensorise-rsu-status.page.html"),
        styles: [__webpack_require__(/*! ./sensorise-rsu-status.page.scss */ "./src/app/delar-application/sensorise-rsu-status/sensorise-rsu-status.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExportExcelService"]])
], SensoriseRsuStatusPage);



/***/ })

}]);
//# sourceMappingURL=sensorise-rsu-status-sensorise-rsu-status-module-es2015.js.map