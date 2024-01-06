(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["skt-student-student-details-student-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/student/student-details/student-details.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/student/student-details/student-details.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <div class=\"student-wrapper\">\r\n   \r\n     <ion-row  class=\"header-section\">\r\n      <ion-col size=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"0\"> \r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-col>  \r\n      <ion-col size=\"10\" size-sm=\"10\" size-md=\"10\" size-lg=\"12\" id=\"btn-wrapper\">\r\n        Student Details\r\n      </ion-col>\r\n    </ion-row>\r\n   <ion-row>\r\n    <ion-col>\r\n      <ion-button color='primary' class=\"student-btn\" (click)='OpenModel()'>Add</ion-button>\r\n      <ion-button color='primary' class=\"student-btn\" (click)='EditModel()'>Edit</ion-button>\r\n      <ion-button color='primary' class=\"student-btn\"(click)='DeleteModel()'>Delete</ion-button>\r\n    </ion-col>\r\n    </ion-row> \r\n  </div> \r\n  <div id=\"export-wrapper\">\r\n    <!-- <ion-img src=\"assets/student_Details/print.svg\"  class=\"toolbar-row\" (click)=\"btnOnClick()\"></ion-img> -->\r\n    <ion-img src=\"assets/student_Details/pdf.svg\" class=\"toolbar-row\" (click)=\"createPdf()\"></ion-img>\r\n    <ion-img src=\"assets/student_Details/excel.svg\" class=\"toolbar-row\"  (click)=\"exportToExcel()\"> </ion-img>\r\n     <!-- <ion-img src=\"assets/student_Details/refresher.svg\" class=\"toolbar-row\" (click)=\"getDatas()\"></ion-img> -->\r\n    </div> \r\n   </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n   \r\n  <div class=\"grid_Container\">\r\n  <jqxGrid\r\n  [source]=\"dataAdapter\"\r\n  [autoheight]=\"true\" \r\n  [sortable]=\"true\" \r\n  [columns]=\"columns\" \r\n  [pageable]=\"true\" \r\n  [showfilterrow]=\"true\" \r\n  [filterable]=\"true\" \r\n  [width]=\"'100%'\"\r\n  [theme]=\"'material'\"\r\n  #myGrid \r\n  (onRowselect)=\"myGridOnRowSelect($event)\" \r\n\r\n  [selectionmode]=\"'singlerow'\"\r\n   style=\"font-size:16px;text-align: center !important;margin:auto;cursor:pointer;\">\r\n</jqxGrid>\r\n</div>\r\n</ion-content>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/skt/student/student-details/student-details.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/skt/student/student-details/student-details.module.ts ***!
  \***********************************************************************/
/*! exports provided: StudentDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailsPageModule", function() { return StudentDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _student_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-details.page */ "./src/app/skt/student/student-details/student-details.page.ts");
/* harmony import */ var _sktcomponents_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sktcomponents.module */ "./src/app/skt/sktcomponents.module.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");









const routes = [
    {
        path: '',
        component: _student_details_page__WEBPACK_IMPORTED_MODULE_6__["StudentDetailsPage"]
    }
];
let StudentDetailsPageModule = class StudentDetailsPageModule {
};
StudentDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__["SharedModModule"],
            _sktcomponents_module__WEBPACK_IMPORTED_MODULE_7__["SktComponentsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [
            _student_details_page__WEBPACK_IMPORTED_MODULE_6__["StudentDetailsPage"],
        ],
    })
], StudentDetailsPageModule);



/***/ }),

/***/ "./src/app/skt/student/student-details/student-details.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/skt/student/student-details/student-details.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".student-wrapper, .grid_Container {\n  border: 1px solid #c7c3c3;\n  margin: 5px 10px 0;\n}\n\n.grid_Container {\n  margin: 0px 10px 0px;\n}\n\n.header-section {\n  background-color: #e8e8e8;\n  border: 1px solid #cac2c2;\n}\n\n.student-btn {\n  width: 80px;\n  height: 30px;\n  margin: 5px 10px;\n  font-size: 12px;\n}\n\n#export-wrapper {\n  text-align: right;\n  background-color: #e8e8e8;\n  height: 42px;\n  border-top: 1px solid gainsboro;\n  margin: 0px 10px 0px;\n  border-left: 2px solid #c7c7c7;\n}\n\n#btn-wrapper {\n  text-align: center;\n  background-color: #e8e8e8;\n  height: 40px;\n  padding: 0px;\n  font-size: 20px;\n  border-bottom: 1px solid #cac2c2;\n  font-weight: 700;\n}\n\n.toolbar-row {\n  height: 40px;\n  width: 40px;\n  display: inline-block;\n  margin: 0px;\n  border: 1px solid #b9b7b7;\n  padding: 5px;\n}\n\n.toolbar-row:hover {\n  background-color: whitesmoke;\n}\n\n#myGrid:hover {\n  background: gray !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t0L3N0dWRlbnQvc3R1ZGVudC1kZXRhaWxzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcc2t0XFxzdHVkZW50XFxzdHVkZW50LWRldGFpbHNcXHN0dWRlbnQtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NrdC9zdHVkZW50L3N0dWRlbnQtZGV0YWlscy9zdHVkZW50LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENDO0VBQ0csb0JBQUE7QUNFSjs7QURBQztFQUNDLHlCQUFBO0VBQ0EseUJBQUE7QUNHRjs7QUREQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkM7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtBQ0tIOztBREhDO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUNNSDs7QURKQztFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDT0g7O0FETEE7RUFDSSw0QkFBQTtBQ1FKOztBRE5DO0VBQ0EsMkJBQUE7QUNTRCIsImZpbGUiOiJzcmMvYXBwL3NrdC9zdHVkZW50L3N0dWRlbnQtZGV0YWlscy9zdHVkZW50LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0dWRlbnQtd3JhcHBlciwuZ3JpZF9Db250YWluZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk5LCAxOTUsIDE5NSk7XHJcbiAgICBtYXJnaW46IDVweCAxMHB4IDA7XHJcbiB9XHJcbiAuZ3JpZF9Db250YWluZXJ7XHJcbiAgICBtYXJnaW46IDBweCAxMHB4IDBweDsgIFxyXG4gfVxyXG4gLmhlYWRlci1zZWN0aW9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhYzJjMjtcclxufVxyXG4uc3R1ZGVudC1idG57XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiB9XHJcbiAjZXhwb3J0LXdyYXBwZXJ7XHJcbiAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xyXG4gICBoZWlnaHQ6IDQycHg7XHJcbiAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBnYWluc2Jvcm87XHJcbiAgIG1hcmdpbjogMHB4IDEwcHggMHB4O1xyXG4gICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNjN2M3Yzc7XHJcbiB9XHJcbiAjYnRuLXdyYXBwZXJ7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcclxuICAgaGVpZ2h0OiA0MHB4O1xyXG4gICBwYWRkaW5nOiAwcHg7XHJcbiAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2NhYzJjMjtcclxuICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuIH1cclxuIC50b29sYmFyLXJvd3tcclxuICAgaGVpZ2h0OiA0MHB4O1xyXG4gICB3aWR0aDogNDBweDtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICBtYXJnaW46MHB4O1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCAjYjliN2I3O1xyXG4gICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLnRvb2xiYXItcm93OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4gI215R3JpZDpob3ZlcntcclxuIGJhY2tncm91bmQ6IGdyYXkgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gIiwiLnN0dWRlbnQtd3JhcHBlciwgLmdyaWRfQ29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M3YzNjMztcbiAgbWFyZ2luOiA1cHggMTBweCAwO1xufVxuXG4uZ3JpZF9Db250YWluZXIge1xuICBtYXJnaW46IDBweCAxMHB4IDBweDtcbn1cblxuLmhlYWRlci1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhYzJjMjtcbn1cblxuLnN0dWRlbnQtYnRuIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiA1cHggMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4jZXhwb3J0LXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgaGVpZ2h0OiA0MnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgZ2FpbnNib3JvO1xuICBtYXJnaW46IDBweCAxMHB4IDBweDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjYzdjN2M3O1xufVxuXG4jYnRuLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2FjMmMyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4udG9vbGJhci1yb3cge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjliN2I3O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi50b29sYmFyLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbiNteUdyaWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBncmF5ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/skt/student/student-details/student-details.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/skt/student/student-details/student-details.page.ts ***!
  \*********************************************************************/
/*! exports provided: StudentDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailsPage", function() { return StudentDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_skt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/skt.service */ "./src/app/services/skt.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../add-student/add-student.component */ "./src/app/skt/student/add-student/add-student.component.ts");
/* harmony import */ var _add_route_add_route_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../add-route/add-route.component */ "./src/app/skt/student/add-route/add-route.component.ts");
/* harmony import */ var _add_alerts_add_alerts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../add-alerts/add-alerts.component */ "./src/app/skt/student/add-alerts/add-alerts.component.ts");














let StudentDetailsPage = class StudentDetailsPage {
    constructor(modalController, sktService, ajaxService, commonService, alertController, platform, ete) {
        this.modalController = modalController;
        this.sktService = sktService;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.alertController = alertController;
        this.platform = platform;
        this.ete = ete;
        this.head = [
            "Roll No",
            "Student Name",
            "Tag Id",
            "Gender",
            "Parent Phone Number",
            "Class",
            "Section",
        ];
        this.pdfdatas = [];
        this.exportTitle = "Student-details report";
        this.obj = this.sktService.objeSkt;
        this.editrow = -1;
        this.source = {
            localdata: this.obj,
            datatype: "array",
        };
        this.dataAdapter = new jqx.dataAdapter(this.source);
    }
    generaterow() {
        let row = {};
        return row;
    }
    btnOnClick() {
        let gridContent = this.myGrid.exportdata("html");
        let newWindow = window.open("", "", "width=800, height=500"), document = newWindow.document.open(), pageContent = "<!DOCTYPE html>\n" +
            "<html>\n" +
            "<head>\n" +
            '<meta charset="utf-8" />\n' +
            "<title>Parent Details</title>\n" +
            "</head>\n" +
            "<body>\n" +
            gridContent +
            "\n</body>\n</html>";
        document.write(pageContent);
        document.close();
        newWindow.print();
    }
    DeleteModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.selectedRow) {
                const alert = yield this.alertController.create({
                    header: "Delete ",
                    backdropDismiss: false,
                    message: "Are you sure you want to delete?",
                    buttons: [
                        {
                            text: "Cancel",
                            role: "cancel",
                            handler: (data) => { },
                        },
                        {
                            text: "Ok",
                            handler: (data) => {
                                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                                    "/student/deletestudent?companyId=" +
                                    localStorage.getItem("corpId") +
                                    "&branchId=" +
                                    localStorage.getItem("corpId") +
                                    "&stin=" +
                                    this.selectedRow.stin;
                                this.ajaxService.ajaxDeleteWithString(url).subscribe((res) => {
                                    if (res.error.text == "Success") {
                                        this.commonService.presentToast("Student Details Deleted successfully");
                                        this.modalController.dismiss();
                                        this.getDatas();
                                        this.myGrid.clearselection();
                                        this.selectedRow = "";
                                    }
                                    else {
                                        this.commonService.presentToast("Please Contact Support Team");
                                    }
                                });
                            },
                        },
                    ],
                });
                yield alert.present();
            }
            else {
                this.commonService.presentToast("Please select a row to delete");
            }
        });
    }
    createPdf() {
        this.commonService.createPdf(this.head, this.pdfdatas, this.exportTitle, this.myPlatform, "Student-details report");
    }
    exportToExcel() {
        let reportData = {
            title: "Student-details report",
            data: this.pdfdatas,
            headers: this.head,
        };
        this.ete.exportExcel(reportData);
    }
    getDatas() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/student/getStudent?SchoolId=" +
            localStorage.getItem("corpId") +
            "&branchId=" +
            localStorage.getItem("corpId");
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            var detail = res;
            this.pdfdatas = [];
            for (var i = 0; i < detail.length; i++) {
                this.pdfdatas.push([
                    detail[i].rollNo,
                    detail[i].studentName,
                    detail[i].tagId,
                    detail[i].sex,
                    detail[i].contactNo,
                    detail[i].classId,
                    detail[i].sectionId,
                ]);
            }
            this.renderer = (row, column, value) => {
                if (value == "" || null || undefined) {
                    return "----";
                }
                else {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto"  >' +
                        value +
                        "</span>");
                }
            };
            this.source = {
                localdata: res,
            };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            this.columns = [
                {
                    text: "Roll No",
                    filtertype: "textbox",
                    datafield: "rollNo",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 135,
                },
                {
                    text: "Student Name",
                    filtertype: "textbox",
                    datafield: "studentName",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 200,
                },
                {
                    text: "Tag Id",
                    filtertype: "textbox",
                    datafield: "tagId",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "Gender",
                    filtertype: "textbox",
                    datafield: "sex",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 135,
                },
                {
                    text: "Parent Phone Number",
                    filtertype: "textbox",
                    datafield: "contactNo",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 165,
                },
                {
                    text: "Class",
                    filtertype: "textbox",
                    datafield: "classId",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 135,
                },
                {
                    text: "Section",
                    filtertype: "textbox",
                    datafield: "sectionId",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 135,
                },
            ];
        });
        this.myGrid.updatebounddata();
        this.myGrid.unselectrow;
    }
    ngAfterViewInit() {
        if (this.myPlatform == "desktop") {
            this.myGrid.showloadelement();
        }
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
    }
    editsettings() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Edit Mode",
                animated: true,
                cssClass: "toast-button",
                buttons: [
                    {
                        text: "Student info",
                        role: "ok",
                        cssClass: "alertButton",
                        handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            const modal = yield this.modalController.create({
                                component: _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_9__["AddStudentComponent"],
                                cssClass: "my-StudentDetailsPage",
                                componentProps: {
                                    value: this.selectedRow.stin,
                                },
                            });
                            modal.onDidDismiss().then(() => {
                                this.myGrid.clearselection();
                                this.selectedRow = "";
                                this.getDatas();
                            });
                            return yield modal.present();
                        }),
                    },
                    {
                        text: "Route info",
                        role: "ok",
                        cssClass: "alertButton",
                        handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            const modal = yield this.modalController.create({
                                component: _add_route_add_route_component__WEBPACK_IMPORTED_MODULE_10__["AddRouteComponent"],
                                cssClass: "RouteInfoPage",
                                componentProps: {
                                    mode: "edit",
                                    value: this.selectedRow.stin,
                                },
                            });
                            modal.onDidDismiss().then(() => {
                                this.myGrid.clearselection();
                                this.selectedRow = "";
                                this.getDatas();
                            });
                            return yield modal.present();
                        }),
                    },
                    {
                        text: "alert info",
                        role: "ok",
                        cssClass: "alertButton",
                        handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            const modal = yield this.modalController.create({
                                component: _add_alerts_add_alerts_component__WEBPACK_IMPORTED_MODULE_11__["AddAlertsComponent"],
                                cssClass: "",
                                componentProps: {
                                    value: this.selectedRow.stin,
                                },
                            });
                            modal.onDidDismiss().then(() => {
                                this.myGrid.clearselection();
                                this.selectedRow = "";
                                this.getDatas();
                            });
                            return yield modal.present();
                        }),
                    },
                ],
            });
            yield alert.present();
        });
    }
    OpenModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_9__["AddStudentComponent"],
                cssClass: "my-StudentDetailsPage",
                componentProps: {
                    mode: "add",
                },
            });
            modal.onDidDismiss().then(() => {
                if (this.myPlatform == "desktop") {
                    this.myGrid.clearselection();
                }
                this.getDatas();
            });
            return yield modal.present();
        });
    }
    EditModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.selectedRow) {
                this.editsettings();
            }
            else {
                this.commonService.presentToast("Please select a row to edit");
                return "";
            }
        });
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row;
    }
    ionViewWillEnter() {
        this.getDatas();
    }
};
StudentDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_skt_service__WEBPACK_IMPORTED_MODULE_4__["SktService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_8__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExportExcelService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StudentDetailsPage.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
], StudentDetailsPage.prototype, "myGrid", void 0);
StudentDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-student-details",
        template: __webpack_require__(/*! raw-loader!./student-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/skt/student/student-details/student-details.page.html"),
        styles: [__webpack_require__(/*! ./student-details.page.scss */ "./src/app/skt/student/student-details/student-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_skt_service__WEBPACK_IMPORTED_MODULE_4__["SktService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_8__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExportExcelService"]])
], StudentDetailsPage);



/***/ })

}]);
//# sourceMappingURL=skt-student-student-details-student-details-module-es2015.js.map