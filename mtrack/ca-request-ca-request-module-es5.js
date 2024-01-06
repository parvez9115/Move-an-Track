(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ca-request-ca-request-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/ca-request/ca-request.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/ca-request/ca-request.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>CA Request</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row class=\"wrapper-container\">\r\n    <ion-col size=\"12\">\r\n      <form [formGroup]=\"CaRequestForm\">\r\n        <ion-row class=\"form-field\">\r\n          <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\">\r\n            <ion-label class=\"label-head\">CA Request Number:</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              placeholder=\"CA Request Number\"\r\n              formControlName=\"carequestNo\"\r\n              class=\"input\"\r\n            >\r\n            </ion-input>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\">\r\n            <ion-label class=\"label-head\">SR Number:</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              placeholder=\"SR Number\"\r\n              formControlName=\"SrNo\"\r\n              class=\"input\"\r\n            >\r\n            </ion-input>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\">\r\n            <ion-label class=\"label-head\">SR Date:</ion-label>\r\n            <ion-input\r\n              type=\"date\"\r\n              placeholder=\"SR Date\"\r\n              [max]=\"maxDate\"\r\n              formControlName=\"SrDate\"\r\n              class=\"input\"\r\n            >\r\n            </ion-input>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\">\r\n            <ion-label class=\"label-head\">SR Status:</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              placeholder=\"SR Status\"\r\n              formControlName=\"Srstatus\"\r\n              class=\"input\"\r\n            >\r\n            </ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n      <ion-row>\r\n        <ion-col\r\n          size=\"12\"\r\n          size-lg=\"12\"\r\n          size-md=\"12\"\r\n          style=\"margin: 10px 0px 0px; text-align: center\"\r\n        >\r\n          <ion-button class=\"submitbtn\" (click)=\"submit()\">Submit</ion-button>\r\n          <ion-button class=\"submitbtn\" (click)=\"clear()\">Clear</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"padding: 10px\" *ngIf=\"show\">\r\n        <ion-col size=\"12\">\r\n          <jqxGrid\r\n            #myGrid\r\n            [theme]=\"'material'\"\r\n            (onRowselect)=\"myGridOnRowSelect($event)\"\r\n            [width]=\"'99.5%'\"\r\n            [autoheight]=\"true\"\r\n            [source]=\"dataAdapter\"\r\n            [columns]=\"columns\"\r\n            [sortable]=\"true\"\r\n            [filterable]=\"true\"\r\n            [columns]=\"columns\"\r\n            [columnsresize]=\"true\"\r\n            [enabletooltips]=\"true\"\r\n            [pageable]=\"true\"\r\n            [showfilterrow]=\"true\"\r\n            style=\"\r\n              font-size: 16px;\r\n              text-align: center !important;\r\n              margin: auto;\r\n              cursor: pointer;\r\n            \"\r\n          >\r\n          </jqxGrid>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"padding: 10px\" *ngIf=\"showsubmit\">\r\n        <ion-col size=\"12\">\r\n          <jqxGrid\r\n            #myGrid\r\n            [theme]=\"'material'\"\r\n            (onRowselect)=\"myGridOnRowSelect($event)\"\r\n            [width]=\"'99.5%'\"\r\n            [autoheight]=\"true\"\r\n            [source]=\"dataAdapter\"\r\n            [columns]=\"columns\"\r\n            [sortable]=\"true\"\r\n            [filterable]=\"true\"\r\n            [columns]=\"columns\"\r\n            [columnsresize]=\"true\"\r\n            [enabletooltips]=\"true\"\r\n            [pageable]=\"true\"\r\n            [showfilterrow]=\"true\"\r\n            style=\"\r\n              font-size: 16px;\r\n              text-align: center !important;\r\n              margin: auto;\r\n              cursor: pointer;\r\n            \"\r\n          >\r\n          </jqxGrid>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/delar-application/ca-request/ca-request.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/delar-application/ca-request/ca-request.module.ts ***!
  \*******************************************************************/
/*! exports provided: CARequestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARequestPageModule", function() { return CARequestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _ca_request_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ca-request.page */ "./src/app/delar-application/ca-request/ca-request.page.ts");









var routes = [
    {
        path: '',
        component: _ca_request_page__WEBPACK_IMPORTED_MODULE_7__["CARequestPage"]
    }
];
var CARequestPageModule = /** @class */ (function () {
    function CARequestPageModule() {
    }
    CARequestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_6__["SharedModModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ca_request_page__WEBPACK_IMPORTED_MODULE_7__["CARequestPage"]]
        })
    ], CARequestPageModule);
    return CARequestPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/ca-request/ca-request.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/delar-application/ca-request/ca-request.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.submitbtn {\n  --background:#6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -16px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 30px 11px;\n    padding-right: 20px;\n  }\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vY2EtcmVxdWVzdC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxjYS1yZXF1ZXN0XFxjYS1yZXF1ZXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vY2EtcmVxdWVzdC9jYS1yZXF1ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7QUNDSjs7QURDRTtFQUNJO0lBQ0EsZ0JBQUE7RUNFSjs7RURBSTtJQUNJLFVBQUE7RUNHUjtBQUNGOztBRERFO0VBQ0k7SUFDQSxTQUFBO0VDR0o7O0VEREk7SUFDSSxVQUFBO0VDSVI7QUFDRjs7QURGRTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUNJTjs7QURGQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VDS047QUFDRjs7QURIQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSxtQkFBQTtFQ0tOO0FBQ0Y7O0FERkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vY2EtcmVxdWVzdC9jYS1yZXF1ZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgICBcclxufVxyXG4uc3VibWl0YnRue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiM2MjUyZWU7XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCl7XHJcbiAgICAgIC5pbnB1dHtcclxuICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgfVxyXG4gICAgICAjc3VibWl0YnRue1xyXG4gICAgICAgICAgd2lkdGg6MjAlO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAgIC5mb3JtLWZpZWxke1xyXG4gICAgICB6b29tOjgwJTtcclxuICAgICAgfVxyXG4gICAgICAjc3VibWl0YnRue1xyXG4gICAgICAgICAgd2lkdGg6ODAlO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIC5mb3JtLWZpZWxke1xyXG4gICAgICBtYXJnaW46IC0xNnB4IDVweCAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICB9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjMyMHB4KWFuZChtYXgtd2lkdGg6MTAyM3B4KXtcclxuICAgIC53cmFwcGVyLWNvbnRhaW5lcntcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MTAyNHB4KXtcclxuICAgIC53cmFwcGVyLWNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW46IDMwcHggMTFweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLmxhYmVsLWhlYWR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XHJcbn0iLCIuaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG59XG5cbi5zdWJtaXRidG4ge1xuICAtLWJhY2tncm91bmQ6IzYyNTJlZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTE2cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogMzBweCAxMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbi5sYWJlbC1oZWFkIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/ca-request/ca-request.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/delar-application/ca-request/ca-request.page.ts ***!
  \*****************************************************************/
/*! exports provided: CARequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARequestPage", function() { return CARequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var CARequestPage = /** @class */ (function () {
    function CARequestPage(ajaxService, commonService, formBuilder, ete) {
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.ete = ete;
        this.slotno = ["10000"];
        this.show = false;
        this.showsubmit = true;
        this.today = new Date();
        this.head = ["ICCID"];
    }
    CARequestPage.prototype.clear = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        this.CaRequestForm.patchValue({
            carequestNo: "",
            SrNo: "",
            SrDate: "",
            Srstatus: "",
        });
        this.getdatas();
        this.show = false;
        this.showsubmit = true;
    };
    CARequestPage.prototype.submit = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/sensorise/getSensoriseCARequest?companyid=" +
            localStorage.getItem("corpId") +
            "&carequestno=" +
            this.CaRequestForm.value.carequestNo +
            "&srno=" +
            this.CaRequestForm.value.SrNo +
            "&srdate=" +
            this.CaRequestForm.value.SrDate +
            "&srstatus=" +
            this.CaRequestForm.value.Srstatus;
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.tableData = res;
            if (res.length == 0) {
                _this.commonService.showConfirm("SR status not available");
            }
            else {
                _this.show = true;
                _this.showsubmit = false;
                _this.renderer = function (row, column, value) {
                    if (value == "" || null || undefined) {
                        return "----";
                    }
                    else {
                        return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px;">' +
                            value +
                            "</span>");
                    }
                };
                _this.source = { localdata: _this.tableData };
                _this.dataAdapter = new jqx.dataAdapter(_this.source);
                _this.columns = [
                    {
                        text: "CA Request Number",
                        datafield: "carequestid",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                    },
                    {
                        text: "Distributor",
                        datafield: "distributor",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                    },
                    {
                        text: "Request Date",
                        datafield: "carequestdate",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                    },
                    {
                        text: "Request Quantity",
                        datafield: "carequestqty",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                    },
                    {
                        text: "SR Number",
                        datafield: "srno",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                    },
                    {
                        text: "SR Date",
                        datafield: "srdate",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                    },
                    {
                        text: "SR Status",
                        datafield: "srStatus",
                        cellsrenderer: _this.renderer,
                        cellsalign: "center",
                        align: "center",
                    },
                    {
                        text: "Download",
                        datafield: "Download",
                        columntype: "button",
                        cellsalign: "center",
                        align: "center",
                        cellsrenderer: function () {
                            return "Download";
                        },
                        buttonclick: function (row) {
                            _this.download();
                        },
                    },
                ];
            }
        });
    };
    CARequestPage.prototype.createForm = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        this.CaRequestForm = this.formBuilder.group({
            carequestNo: [""],
            SrNo: [""],
            SrDate: [""],
            Srstatus: [""],
        });
    };
    CARequestPage.prototype.getdatas = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/sensorise/getSensoriseCARequest?companyid=" +
            localStorage.getItem("corpId") +
            "&carequestno=&srno=&srdate=&srstatus";
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.tableData = res;
            _this.renderer = function (row, column, value) {
                if (value == "" || null || undefined) {
                    return "-----";
                }
                else {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                        value +
                        "</span>");
                }
            };
            _this.source = { localdata: _this.tableData };
            _this.dataAdapter = new jqx.dataAdapter(_this.source);
            _this.columns = [
                {
                    text: "CA Request Number",
                    datafield: "carequestid",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                },
                {
                    text: "Distributor",
                    datafield: "distributor",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                },
                {
                    text: "Request Date",
                    datafield: "carequestdate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                },
                {
                    text: "Request Quantity",
                    datafield: "carequestqty",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                },
                {
                    text: "SR Number",
                    datafield: "srno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                },
                {
                    text: "SR Date",
                    datafield: "srdate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                },
                {
                    text: "SR Status",
                    datafield: "srStatus",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                },
                {
                    text: "Download",
                    datafield: "Download",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    cellsrenderer: function () {
                        return "Download";
                    },
                    buttonclick: function (row) {
                        _this.download();
                    },
                },
            ];
        });
    };
    CARequestPage.prototype.download = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/sensorise/getSensoriseDownloadICCIDno?companyid=" +
            localStorage.getItem("corpId") +
            "&carequestid=" +
            this.selectedRow.carequestid;
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            _this.Download = res;
            _this.pdfdatas = [];
            for (var i = 0; i < _this.Download.length; i++) {
                _this.pdfdatas.push([_this.Download[i].iccidno]);
            }
            var reportData = {
                data: _this.pdfdatas,
                headers: _this.head,
            };
            _this.ete.generateExcel(reportData);
        });
    };
    CARequestPage.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = event.args.row;
    };
    CARequestPage.prototype.ngOnInit = function () {
        this.maxDate = this.today.getFullYear() + "-";
        this.maxDate +=
            (this.today.getMonth() + 1 < 10
                ? "0" + (this.today.getMonth() + 1).toString()
                : (this.today.getMonth() + 1).toString()) + "-";
        this.maxDate +=
            this.today.getDate() < 10
                ? "0" + this.today.getDate().toString()
                : this.today.getDate().toString();
        this.getdatas();
        this.createForm();
    };
    CARequestPage.ctorParameters = function () { return [
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExportExcelService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
    ], CARequestPage.prototype, "myGrid", void 0);
    CARequestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-ca-request",
            template: __webpack_require__(/*! raw-loader!./ca-request.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/ca-request/ca-request.page.html"),
            styles: [__webpack_require__(/*! ./ca-request.page.scss */ "./src/app/delar-application/ca-request/ca-request.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExportExcelService"]])
    ], CARequestPage);
    return CARequestPage;
}());



/***/ })

}]);
//# sourceMappingURL=ca-request-ca-request-module-es5.js.map