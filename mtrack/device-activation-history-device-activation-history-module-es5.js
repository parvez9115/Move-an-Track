(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-activation-history-device-activation-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-activation-history/comment/comment.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-activation-history/comment/comment.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row style=\"padding: 10px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        [enablebrowserselection]=\"true\"\n        [theme]=\"'material'\"\n        [width]=\"'99.5%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [pagesizeoptions]=\"page\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: left;\n          margin: auto;\n          cursor: pointer;\n          padding-left: 5px;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-activation-history/device-activation-history.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-activation-history/device-activation-history.page.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\" slot=\"start\">\n      <ion-icon routerLink=\"/tabs-login/esim-dashboard\" name=\"arrow-back\" style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"></ion-icon>\n    </ion-buttons>\n    <ion-row>\n      <ion-title>Device Activation History</ion-title>\n      <ion-col *ngIf=\"myPlatform == 'desktop'\" size=\"4\" style=\"text-align: right\">\n        <ion-button class=\"submitBtn\" size=\"small\" (click)=\"newfunc()\">Export</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"wrapper-container\">\n      <ion-col size=\"12\">\n        <form [formGroup]=\"historyForm\">\n          <ion-row class=\"form-field\">\n            <ion-col size=\"12\" size-lg=\"6\" size-md=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\">IMEI Number :</ion-label>\n                <ion-input formControlName=\"imeino\" type=\"Number\"></ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\" style=\"margin: 25px 0px 0px; text-align: center\">\n              <ion-button class=\"submitbtn\" (click)=\"SearchData()\" [disabled]=\"!historyForm.valid\">Submit</ion-button>\n              <ion-button type=\"reset\" class=\"submitbtn\" (click)=\"clear()\">Clear</ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n        <ion-row style=\"padding: 10px\" *ngIf=\"show\">\n          <ion-col size=\"12\">\n            <jqxGrid #myGrid [theme]=\"'material'\" (onRowclick)=\"myGridOnRowclick($event)\"\n              [enablebrowserselection]=\"true\" [pagesizeoptions]=\"page\" [width]=\"'99.5%'\" [autoheight]=\"true\"\n              [source]=\"dataAdapter\" [columns]=\"columns\" [filterable]=\"true\" [sortable]=\"true\" [columnsresize]=\"true\"\n              [enabletooltips]=\"true\" [pageable]=\"true\" [showfilterrow]=\"true\" style=\"\n                font-size: 16px;\n                text-align: center !important;\n                margin: auto;\n                cursor: pointer;\n              \" [columns]=\"columns\">\n            </jqxGrid>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/delar-application/device-activation-history/comment/comment.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/delar-application/device-activation-history/comment/comment.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2RldmljZS1hY3RpdmF0aW9uLWhpc3RvcnkvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/delar-application/device-activation-history/comment/comment.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/delar-application/device-activation-history/comment/comment.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");







var CommentComponent = /** @class */ (function () {
    function CommentComponent(platform, formBuilder, modalController, ajaxService, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.page = [];
    }
    CommentComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    CommentComponent.prototype.getDatas = function () {
        this.page = [];
        if (this.value.comment != "") {
            this.tableData = JSON.parse(this.value.comment);
        }
        this.page = ["100", "200", "500", "1000"];
        this.renderer = function (row, column, value) {
            if (value == "" || null || undefined || value == ",") {
                return "--";
            }
            else {
                return ('<span style="line-height:32px;font-size:17px;color:darkblue;margin:auto;padding-left: 5px;">' +
                    value +
                    "</span>");
            }
        };
        this.source = { localdata: this.tableData };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.columns = [
            {
                text: "Comment",
                datafield: "comment",
                cellsrenderer: this.renderer,
                cellsalign: "left",
                align: "left",
                width: 500,
            },
        ];
    };
    CommentComponent.prototype.ngOnInit = function () {
        this.getDatas();
    };
    CommentComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
    ], CommentComponent.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommentComponent.prototype, "value", void 0);
    CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-comment",
            template: __webpack_require__(/*! raw-loader!./comment.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-activation-history/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.scss */ "./src/app/delar-application/device-activation-history/comment/comment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/device-activation-history/device-activation-history.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/delar-application/device-activation-history/device-activation-history.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: DeviceActivationHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceActivationHistoryPageModule", function() { return DeviceActivationHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _device_activation_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-activation-history.page */ "./src/app/delar-application/device-activation-history/device-activation-history.page.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/delar-application/device-activation-history/comment/comment.component.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");









var routes = [
    {
        path: "",
        component: _device_activation_history_page__WEBPACK_IMPORTED_MODULE_6__["DeviceActivationHistoryPage"],
    },
    {
        path: "comment",
        component: _comment_comment_component__WEBPACK_IMPORTED_MODULE_7__["CommentComponent"],
    },
];
var DeviceActivationHistoryPageModule = /** @class */ (function () {
    function DeviceActivationHistoryPageModule() {
    }
    DeviceActivationHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__["SharedModModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_device_activation_history_page__WEBPACK_IMPORTED_MODULE_6__["DeviceActivationHistoryPage"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_7__["CommentComponent"]],
        })
    ], DeviceActivationHistoryPageModule);
    return DeviceActivationHistoryPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/device-activation-history/device-activation-history.page.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/delar-application/device-activation-history/device-activation-history.page.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 10px) and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n    margin: 5% auto 3px;\n  }\n\n  #submitbtn {\n    width: 40%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .form-field {\n    margin: 3% auto 5px;\n    padding: 0px 20px;\n  }\n\n  #submitbtn {\n    width: 38%;\n  }\n}\n#submitbtn {\n  --background: #6252ee !important;\n}\n.submitBtn {\n  margin: 0px 40px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLWFjdGl2YXRpb24taGlzdG9yeS9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxkZXZpY2UtYWN0aXZhdGlvbi1oaXN0b3J5XFxkZXZpY2UtYWN0aXZhdGlvbi1oaXN0b3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLWFjdGl2YXRpb24taGlzdG9yeS9kZXZpY2UtYWN0aXZhdGlvbi1oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsU0FBQTtJQUNBLG1CQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxVQUFBO0VDRUY7QUFDRjtBREFBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLGlCQUFBO0VDRUY7O0VEQ0E7SUFDRSxVQUFBO0VDRUY7QUFDRjtBREFBO0VBQ0UsZ0NBQUE7QUNFRjtBREFBO0VBQ0Usd0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9kZXZpY2UtYWN0aXZhdGlvbi1oaXN0b3J5L2RldmljZS1hY3RpdmF0aW9uLWhpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MTBweCkgYW5kKG1heC13aWR0aDo3NjdweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIHpvb206IDgwJTtcclxuICAgIG1hcmdpbjogNSUgYXV0byAzcHg7XHJcbiAgfVxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbjogMyUgYXV0byA1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDM4JTtcclxuICB9XHJcbn1cclxuI3N1Ym1pdGJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNjI1MmVlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnN1Ym1pdEJ0biB7XHJcbiAgbWFyZ2luOiAwcHggNDBweCAwcHggMHB4O1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAtLWNvbG9yOiAjN2M2OGY4O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcclxuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcclxufVxyXG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICAgIG1hcmdpbjogNSUgYXV0byAzcHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW46IDMlIGF1dG8gNXB4O1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDM4JTtcbiAgfVxufVxuI3N1Ym1pdGJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZSAhaW1wb3J0YW50O1xufVxuXG4uc3VibWl0QnRuIHtcbiAgbWFyZ2luOiAwcHggNDBweCAwcHggMHB4O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM3YzY4Zjg7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/device-activation-history/device-activation-history.page.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/delar-application/device-activation-history/device-activation-history.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: DeviceActivationHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceActivationHistoryPage", function() { return DeviceActivationHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/delar-application/device-activation-history/comment/comment.component.ts");











var DeviceActivationHistoryPage = /** @class */ (function () {
    function DeviceActivationHistoryPage(platform, formBuilder, modalController, ajaxService, commonService, ete) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.ete = ete;
        this.page = [];
        this.show = false;
        this.companyId = localStorage.getItem("userName");
    }
    DeviceActivationHistoryPage.prototype.createForm = function () {
        this.historyForm = this.formBuilder.group({
            imeino: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    DeviceActivationHistoryPage.prototype.clear = function () {
        this.historyForm.patchValue({
            imeino: "",
        });
        this.show = false;
    };
    DeviceActivationHistoryPage.prototype.SearchData = function () {
        var _this = this;
        this.show = true;
        this.page = [];
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["serverUrl"].web +
            "/esim/getEsimActivationDetails?imei=" +
            this.historyForm.value.imeino;
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            if (res.length == 0) {
                _this.show = false;
                _this.commonService.dismissLoader();
                _this.commonService.showConfirm("Invalid IMEI Number");
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
                        text: "Request No",
                        datafield: "requestid",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 90,
                        editable: true,
                    },
                    {
                        text: "Request Date",
                        datafield: "requestdate",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 100,
                        editable: true,
                    },
                    {
                        text: "Request Dealer",
                        datafield: "requesteddealer",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 120,
                        editable: true,
                    },
                    {
                        text: "Current Dealer",
                        datafield: "branchid",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 120,
                        editable: true,
                    },
                    {
                        text: "Invoice No",
                        datafield: "invoiceno",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 110,
                        editable: true,
                    },
                    {
                        text: "VLTD No",
                        datafield: "vltdsno",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 130,
                        editable: true,
                    },
                    {
                        text: "ICCID No 1",
                        datafield: "iccidno1",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 140,
                        editable: true,
                    },
                    {
                        text: "ICCID No 2",
                        datafield: "iccidno2",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 140,
                        editable: true,
                    },
                    {
                        text: "IMEI No",
                        datafield: "imei",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 120,
                        editable: true,
                    },
                    {
                        text: "SIM 1",
                        datafield: "sim1",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 105,
                        editable: true,
                    },
                    {
                        text: "SIM 2",
                        datafield: "sim2",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 105,
                        editable: true,
                    },
                    {
                        text: "Card Activated Date",
                        datafield: "commercialactivationdate",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 150,
                        editable: true,
                    },
                    {
                        text: "Card End Date",
                        datafield: "cardenddate",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 100,
                        editable: true,
                    },
                    {
                        text: "Card Status",
                        datafield: "cardstatus",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 100,
                        editable: true,
                    },
                    {
                        text: "Comment",
                        datafield: "latestcomment",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 120,
                        editable: true,
                    },
                    {
                        text: "Validity Requested",
                        datafield: "validityperiod",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 150,
                        editable: true,
                    },
                    {
                        text: "Created by",
                        datafield: "createdby",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 100,
                        editable: true,
                    },
                    {
                        text: "",
                        datafield: "comments",
                        columntype: "button",
                        cellsalign: "center",
                        align: "center",
                        width: 90,
                        cellsrenderer: function () {
                            return _this.myPlatform == "desktop"
                                ? "Comments"
                                : "<button>Comments</button>";
                        },
                        buttonclick: function (row) {
                            _this.CommentModel(row);
                        },
                    },
                ];
            }
        });
    };
    DeviceActivationHistoryPage.prototype.CommentModel = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isModalOpened, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.getTop()];
                    case 1:
                        isModalOpened = _a.sent();
                        return [4 /*yield*/, this.modalController.create({
                                component: _comment_comment_component__WEBPACK_IMPORTED_MODULE_10__["CommentComponent"],
                                cssClass: "simupdateform",
                                componentProps: {
                                    value: this.selectedRow,
                                },
                            })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () { });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DeviceActivationHistoryPage.prototype.myGridOnRowclick = function (event) {
        this.selectedRow = event.args.row.bounddata;
    };
    DeviceActivationHistoryPage.prototype.newfunc = function () {
        var data = this.tableData;
        console.log(this.myGrid);
        var coloumnArray = [];
        this.myGrid.attrColumns.map(function (p) {
            coloumnArray.push(p.datafield);
        });
        for (var i = 0; i < data.length; i++) {
            var k = Object.keys(data[i]);
            for (var j = 0; j < k.length; j++) {
                if (coloumnArray.includes(k[j]) == false) {
                    delete data[i][k[j].toString()];
                }
            }
        }
        var forExcel = [];
        data.map(function (val) {
            var newArray = Object.values(val);
            forExcel.push(newArray);
        });
        var Header = Object.keys(data[0]);
        var reportData = {
            title: "Device Activation Hitory",
            data: forExcel,
            headers: Header,
        };
        this.ete.exportExcel(reportData);
    };
    DeviceActivationHistoryPage.prototype.ngOnInit = function () {
        this.createForm();
    };
    DeviceActivationHistoryPage.prototype.ionViewWillEnter = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.clear();
    };
    DeviceActivationHistoryPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
        { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExportExcelService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("selectComponent", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic_selectable__WEBPACK_IMPORTED_MODULE_4__["IonicSelectableComponent"])
    ], DeviceActivationHistoryPage.prototype, "selectComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridComponent"])
    ], DeviceActivationHistoryPage.prototype, "myGrid", void 0);
    DeviceActivationHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-device-activation-history",
            template: __webpack_require__(/*! raw-loader!./device-activation-history.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-activation-history/device-activation-history.page.html"),
            styles: [__webpack_require__(/*! ./device-activation-history.page.scss */ "./src/app/delar-application/device-activation-history/device-activation-history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExportExcelService"]])
    ], DeviceActivationHistoryPage);
    return DeviceActivationHistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=device-activation-history-device-activation-history-module-es5.js.map