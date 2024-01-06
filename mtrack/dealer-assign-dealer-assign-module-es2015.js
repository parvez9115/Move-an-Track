(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dealer-assign-dealer-assign-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/dealer-assign/dealer-assign.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/dealer-assign/dealer-assign.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Dealer Vehicle Assign</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"wrapper-container\">\n    <ion-col>\n      <form [formGroup]=\"assignForm\">\n        <ion-row class=\"form-field\">\n          <ion-col size=\"12\" size-lg=\"5\" size-md=\"5\">\n            <ion-label class=\"label-head\">Company:</ion-label>\n            <ion-input\n              type=\"text\"\n              formControlName=\"company\"\n              class=\"input\"\n              disabled\n              ><span style=\"padding: 10px; opacity: 0.5\"\n                >{{tableData?.company}}</span\n              ></ion-input\n            >\n          </ion-col>\n\n          <ion-col\n            size=\"12\"\n            size-lg=\"3\"\n            size-md=\"3\"\n            style=\"margin: 25px 0px 0px; text-align: end\"\n          >\n            <ion-button\n              class=\"submitbtn\"\n              (click)=\"saveModel()\"\n              [disabled]=\"button\"\n              >Assign</ion-button\n            >\n            <ion-button\n              class=\"submitbtn\"\n              (click)=\"removeModel()\"\n              [disabled]=\"button\"\n              >Remove</ion-button\n            >\n            <ion-button class=\"submitbtn\" (click)=\"clear()\">Clear</ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n      <ion-row>\n        <ion-col style=\"margin: 10px 0px 0px\">\n          <ion-label>\n            <span class=\"dealer-label\">Total Selected Row :</span>\n            <span class=\"dealer-data\">{{selectedRow?.length}}</span>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <jqxGrid\n    #myGrid\n    [selectionmode]=\"'checkbox'\"\n    (onRowclick)=\"myGridOnRowclick($event)\"\n    (onRowselect)=\"myGridOnRowSelect($event)\"\n    (onRowunselect)=\"myGridOnRowSelect($event)\"\n    [theme]=\"'material'\"\n    [width]=\"'99%'\"\n    [autoheight]=\"true\"\n    [source]=\"dataAdapter\"\n    [columns]=\"columns\"\n    [sortable]=\"true\"\n    [filterable]=\"true\"\n    [columnsresize]=\"true\"\n    [enablebrowserselection]=\"true\"\n    [enabletooltips]=\"true\"\n    [pageable]=\"true\"\n    [showfilterrow]=\"true\"\n    style=\"\n      font-size: 16px;\n      text-align: center !important;\n      margin: auto;\n      cursor: pointer;\n    \"\n  >\n  </jqxGrid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/dealer-assign/dealer-assign.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/delar-application/dealer-assign/dealer-assign.module.ts ***!
  \*************************************************************************/
/*! exports provided: DealerAssignPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerAssignPageModule", function() { return DealerAssignPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dealer_assign_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dealer-assign.page */ "./src/app/delar-application/dealer-assign/dealer-assign.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");








const routes = [
    {
        path: "",
        component: _dealer_assign_page__WEBPACK_IMPORTED_MODULE_6__["DealerAssignPage"],
    },
];
let DealerAssignPageModule = class DealerAssignPageModule {
};
DealerAssignPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_dealer_assign_page__WEBPACK_IMPORTED_MODULE_6__["DealerAssignPage"]],
    })
], DealerAssignPageModule);



/***/ }),

/***/ "./src/app/delar-application/dealer-assign/dealer-assign.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/delar-application/dealer-assign/dealer-assign.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGVhbGVyLWFzc2lnbi9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxkZWFsZXItYXNzaWduXFxkZWFsZXItYXNzaWduLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGVhbGVyLWFzc2lnbi9kZWFsZXItYXNzaWduLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VDQ0Y7QUFDRjtBREVBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUNBRjtBQUNGO0FERUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNFRjtBRENBO0VBQ0U7SUFDRSxnQkFBQTtFQ0VGOztFREFBO0lBQ0UsVUFBQTtFQ0dGO0FBQ0Y7QURBQTtFQUNFO0lBQ0UsU0FBQTtFQ0VGOztFREFBO0lBQ0UsVUFBQTtFQ0dGO0FBQ0Y7QUREQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNHRjtBRERBO0VBQ0Usd0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9kZWFsZXItYXNzaWduL2RlYWxlci1hc3NpZ24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MzIwcHgpIGFuZChtYXgtd2lkdGg6MTAyM3B4KSB7XHJcbiAgLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbjogOHB4IDAgMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDoxMDI0cHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiA4cHggMXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuLmZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG4ubGFiZWwtaGVhZCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XHJcbn1cclxuLmlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBtYXJnaW46IDdweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgem9vbTogODAlO1xyXG4gIH1cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcbi5kZWFsZXItbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLnN1Ym1pdEJ0biB7XHJcbiAgbWFyZ2luOiAwcHggMTRweCAwcHggMHB4O1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAtLWNvbG9yOiAjN2M2OGY4O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcclxuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcclxufVxyXG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5sYWJlbC1oZWFkIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBtYXJnaW46IDdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZGVhbGVyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc3VibWl0QnRuIHtcbiAgbWFyZ2luOiAwcHggMTRweCAwcHggMHB4O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM3YzY4Zjg7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/dealer-assign/dealer-assign.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/delar-application/dealer-assign/dealer-assign.page.ts ***!
  \***********************************************************************/
/*! exports provided: DealerAssignPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerAssignPage", function() { return DealerAssignPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








let DealerAssignPage = class DealerAssignPage {
    constructor(platform, formBuilder, modalController, alertController, commonService, ajaxService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.page = [];
        this.selectedRow = [];
        this.button = true;
    }
    createForm() {
        this.assignForm = this.formBuilder.group({
            company: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    clear() {
        this.assignForm.patchValue({
            company: "",
        });
        this.getdatas();
    }
    getdatas() {
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/global/getAssignVehicle?dealerid=" +
            localStorage.getItem("companySuffix");
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.commonService.dismissLoader();
            this.tableData = res;
            this.renderer = (row, column, value) => {
                if (value == "" || null || undefined) {
                    return "---";
                }
                else {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                        value +
                        "</span>");
                }
            };
            this.source = { localdata: this.tableData.vehicledetail };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            this.myGrid.clearselection();
            this.columns = [
                {
                    text: "Company Id",
                    datafield: "companyId",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 300,
                },
                {
                    text: "Plate No",
                    datafield: "plateNo",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 300,
                },
                {
                    text: "IMEI No",
                    datafield: "imeiNo",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 300,
                },
                {
                    text: "Status",
                    datafield: "status",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 270,
                },
            ];
        });
    }
    saveModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: " Confirm",
                backdropDismiss: false,
                message: "Are you sure you want to assign?",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: (data) => { },
                    },
                    {
                        text: "Ok",
                        handler: (data) => {
                            this.save();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    save() {
        let selectdata = this.myGrid.getselectedrowindexes();
        var arr = [];
        for (let i = 0; i < selectdata.length; i++) {
            arr.push(this.myGrid["attrSource"]["originaldata"][selectdata[i]].vin);
        }
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/global/saveAssignVehicle?companyid=" +
            this.tableData.company;
        this.ajaxService.ajaxPostWithBody(url, arr).subscribe((res) => {
            if (res.message == "Vehicle Assigned Successfully") {
                this.commonService.showConfirm(res.message);
                this.myGrid.clearselection();
                this.getdatas();
            }
            else {
                this.commonService.showConfirm(res.message);
            }
        });
    }
    removeModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: " Confirm",
                backdropDismiss: false,
                message: "Are you sure you want to remove?",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: (data) => { },
                    },
                    {
                        text: "Ok",
                        handler: (data) => {
                            this.remove();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    remove() {
        let selectdata = this.myGrid.getselectedrowindexes();
        var arr = [];
        for (let i = 0; i < selectdata.length; i++) {
            arr.push(this.myGrid["attrSource"]["originaldata"][selectdata[i]].vin);
        }
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/global/removeAssignedVehicle?companyid=" +
            this.tableData.company;
        this.ajaxService.ajaxDeleteWithBody(url, arr).subscribe((res) => {
            if (res.message == "Vehicle Removed Successfully") {
                this.commonService.showConfirm(res.message);
                this.myGrid.clearselection();
                this.getdatas();
            }
            else {
                this.commonService.showConfirm(res.message);
            }
        });
    }
    myGridOnRowclick(event) {
        this.selectedRow = event.args.row.bounddata;
    }
    myGridOnRowSelect(event) {
        this.selectedRow = this.myGrid.getselectedrowindexes();
        if (this.selectedRow.length > 0) {
            this.button = false;
        }
        else {
            this.button = true;
        }
        if (event.type == "rowunselect")
            return null;
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.createForm();
    }
    ngAfterViewInit() {
        this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
    }
    ionViewWillEnter() {
        this.getdatas();
    }
};
DealerAssignPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
], DealerAssignPage.prototype, "myGrid", void 0);
DealerAssignPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dealer-assign",
        template: __webpack_require__(/*! raw-loader!./dealer-assign.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/dealer-assign/dealer-assign.page.html"),
        styles: [__webpack_require__(/*! ./dealer-assign.page.scss */ "./src/app/delar-application/dealer-assign/dealer-assign.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"]])
], DealerAssignPage);



/***/ })

}]);
//# sourceMappingURL=dealer-assign-dealer-assign-module-es2015.js.map