(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["skt-tag-tag-table-tag-table-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/tag/tag-table/tag-table.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/tag/tag-table/tag-table.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <div class=\"tag-wrapper\">\r\n     <ion-row  class=\"header-section\">\r\n      <ion-col size=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"0\"> \r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-col>  \r\n      <ion-col size=\"10\" size-sm=\"10\" size-md=\"10\" size-lg=\"12\" id=\"btn-wrapper\">\r\n        Tag Details\r\n      </ion-col>\r\n    </ion-row>  \r\n   <ion-row>\r\n     <ion-col>\r\n       <ion-button color='primary' class=\"tag-btn\" (click)='openparentDetailModel()'>Add</ion-button>\r\n       <ion-button color='primary' class=\"tag-btn\" (click)='parentEditModel()'>Edit</ion-button>\r\n       <ion-button color='primary' class=\"tag-btn\"(click)='deletebtn()' >Delete</ion-button>\r\n     </ion-col>\r\n    </ion-row> \r\n  </div> \r\n  <div id=\"export-wrapper\">\r\n      <!-- <ion-img src=\"assets/student_Details/print.svg\"  class=\"toolbar-row\" (click)=\"btnOnClick()\"></ion-img> -->\r\n      <ion-img src=\"assets/student_Details/pdf.svg\" class=\"toolbar-row\" (click)=\"createPdf()\"></ion-img>\r\n      <ion-img src=\"assets/student_Details/excel.svg\" class=\"toolbar-row\"  (click)=\"exportToExcel()\"> </ion-img>\r\n        <!-- <ion-img src=\"assets/student_Details/refresher.svg\" class=\"toolbar-row\" (click)=\"refresher()\"></ion-img> -->\r\n    </div> \r\n </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n <div class=\"grid_Container\">\r\n  <jqxGrid\r\n  (onRowselect)=\"myGridOnRowSelect($event)\"\r\n  [pageable]=\"true\"\r\n  [selectionmode]=\"'singlerow'\"\r\n  [showfilterrow]=\"true\"\r\n  [filterable]=\"true\"\r\n  [sortable]=\"true\"\r\n  [width]=\"'100%'\"\r\n  [source]=\"dataAdapter\" \r\n  [columns]=\"columns\" \r\n  [autoheight]=\"true\"\r\n  #myGrid \r\n  [theme]=\"'material'\"\r\n  style=\"font-size:16px;text-align: center !important;\">\r\n  </jqxGrid>\r\n</div>\r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/skt/tag/tag-table/tag-table.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/skt/tag/tag-table/tag-table.module.ts ***!
  \*******************************************************/
/*! exports provided: TagTablePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagTablePageModule", function() { return TagTablePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tag_table_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tag-table.page */ "./src/app/skt/tag/tag-table/tag-table.page.ts");
/* harmony import */ var _sktcomponents_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sktcomponents.module */ "./src/app/skt/sktcomponents.module.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");









const routes = [
    {
        path: '',
        component: _tag_table_page__WEBPACK_IMPORTED_MODULE_6__["TagTablePage"]
    }
];
let TagTablePageModule = class TagTablePageModule {
};
TagTablePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _sktcomponents_module__WEBPACK_IMPORTED_MODULE_7__["SktComponentsModule"],
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__["SharedModModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_tag_table_page__WEBPACK_IMPORTED_MODULE_6__["TagTablePage"]]
    })
], TagTablePageModule);



/***/ }),

/***/ "./src/app/skt/tag/tag-table/tag-table.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/skt/tag/tag-table/tag-table.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tag-wrapper, .grid_Container {\n  border: 1px solid #c7c3c3;\n  margin: 5px 10px 0px;\n}\n\n.grid_Container {\n  margin: 0px 10px 0px;\n}\n\n.header-section {\n  background-color: #e8e8e8;\n  border: 1px solid #cac2c2;\n}\n\n#export-wrapper {\n  text-align: right;\n  background-color: #e8e8e8;\n  height: 42px;\n  border-top: 1px solid gainsboro;\n  margin: 0px 10px 0px;\n  border-left: 2px solid #c7c7c7;\n}\n\n#btn-wrapper {\n  text-align: center;\n  background-color: #e8e8e8;\n  height: 40px;\n  padding: 0px;\n  font-size: 20px;\n  border-bottom: 1px solid #cac2c2;\n  font-weight: 700;\n}\n\n.toolbar-row {\n  height: 40px;\n  width: 40px;\n  display: inline-block;\n  margin: 0px;\n  border: 1px solid #b9b7b7;\n  padding: 5px;\n}\n\n.toolbar-row:hover {\n  background-color: whitesmoke;\n}\n\n.tag-btn {\n  width: 80px;\n  height: 30px;\n  margin: 5px 10px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t0L3RhZy90YWctdGFibGUvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxza3RcXHRhZ1xcdGFnLXRhYmxlXFx0YWctdGFibGUucGFnZS5zY3NzIiwic3JjL2FwcC9za3QvdGFnL3RhZy10YWJsZS90YWctdGFibGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtBQ0NKOztBRENDO0VBQ0csb0JBQUE7QUNFSjs7QURBQztFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUNHSDs7QUREQztFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0FDSUg7O0FERkM7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQ0tIOztBREhDO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNNSDs7QURKQTtFQUNJLDRCQUFBO0FDT0o7O0FETEM7RUFDRyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvc2t0L3RhZy90YWctdGFibGUvdGFnLXRhYmxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWctd3JhcHBlciwuZ3JpZF9Db250YWluZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk5LCAxOTUsIDE5NSk7XHJcbiAgICBtYXJnaW46IDVweCAxMHB4IDBweDtcclxuIH1cclxuIC5ncmlkX0NvbnRhaW5lcntcclxuICAgIG1hcmdpbjogMHB4IDEwcHggMHB4OyAgXHJcbiB9XHJcbiAuaGVhZGVyLXNlY3Rpb257XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWMyYzI7XHJcbiB9XHJcbiAjZXhwb3J0LXdyYXBwZXJ7XHJcbiAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xyXG4gICBoZWlnaHQ6IDQycHg7XHJcbiAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBnYWluc2Jvcm87XHJcbiAgIG1hcmdpbjogMHB4IDEwcHggMHB4O1xyXG4gICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNjN2M3Yzc7XHJcbiB9XHJcbiAjYnRuLXdyYXBwZXJ7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcclxuICAgaGVpZ2h0OiA0MHB4O1xyXG4gICBwYWRkaW5nOiAwcHg7XHJcbiAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2NhYzJjMjtcclxuICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuIH1cclxuIC50b29sYmFyLXJvd3tcclxuICAgaGVpZ2h0OiA0MHB4O1xyXG4gICB3aWR0aDogNDBweDtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICBtYXJnaW46MHB4O1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCAjYjliN2I3O1xyXG4gICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLnRvb2xiYXItcm93OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4gLnRhZy1idG57XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiB9XHJcbiAiLCIudGFnLXdyYXBwZXIsIC5ncmlkX0NvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjN2MzYzM7XG4gIG1hcmdpbjogNXB4IDEwcHggMHB4O1xufVxuXG4uZ3JpZF9Db250YWluZXIge1xuICBtYXJnaW46IDBweCAxMHB4IDBweDtcbn1cblxuLmhlYWRlci1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhYzJjMjtcbn1cblxuI2V4cG9ydC13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGhlaWdodDogNDJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdhaW5zYm9ybztcbiAgbWFyZ2luOiAwcHggMTBweCAwcHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2M3YzdjNztcbn1cblxuI2J0bi13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NhYzJjMjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnRvb2xiYXItcm93IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I5YjdiNztcbiAgcGFkZGluZzogNXB4O1xufVxuXG4udG9vbGJhci1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4udGFnLWJ0biB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/skt/tag/tag-table/tag-table.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/skt/tag/tag-table/tag-table.page.ts ***!
  \*****************************************************/
/*! exports provided: TagTablePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagTablePage", function() { return TagTablePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tag_additional_tag_additional_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tag-additional/tag-additional.component */ "./src/app/skt/tag/tag-additional/tag-additional.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");










let TagTablePage = class TagTablePage {
    constructor(modalController, alertController, ajaxService, platform, commonService, ete) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.ajaxService = ajaxService;
        this.platform = platform;
        this.commonService = commonService;
        this.ete = ete;
        this.head = ["Tag Id", "tagType"];
        this.pdfdatas = [];
        this.exportTitle = "Tag-details report";
    }
    refresher() {
        this.commonService.presentToast("please wait");
        this.refreshData = "refresh";
        this.getDatas();
    }
    deletebtn() {
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
                                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
                                    "/tag/deletetag?tagId=" +
                                    this.selectedRow.tagId;
                                this.ajaxService.ajaxDeleteWithString(url).subscribe((res) => {
                                    if (res.message == "Deleted Successfully") {
                                        this.commonService.presentToast("Tag Details Deleted successfully");
                                        this.modalController.dismiss();
                                        this.myGrid.clearselection();
                                        this.getDatas();
                                        this.selectedRow = "";
                                    }
                                    else {
                                        this.commonService.showConfirm(res.message);
                                        // this.commonService.presentToast(
                                        //   "Please Contact Support Team"
                                        // );
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
    openparentDetailModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _tag_additional_tag_additional_component__WEBPACK_IMPORTED_MODULE_4__["TagAdditionalComponent"],
                cssClass: "my-custome-css",
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
    parentEditModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.selectedRow) {
                const modal = yield this.modalController.create({
                    component: _tag_additional_tag_additional_component__WEBPACK_IMPORTED_MODULE_4__["TagAdditionalComponent"],
                    cssClass: "my-custome-css",
                    componentProps: {
                        value: this.selectedRow,
                    },
                });
                modal.onDidDismiss().then(() => {
                    if (this.myPlatform == "desktop") {
                        this.myGrid.clearselection();
                        this.selectedRow = "";
                    }
                    this.getDatas();
                });
                return yield modal.present();
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
    createPdf() {
        this.commonService.createPdf(this.head, this.pdfdatas, this.exportTitle, this.myPlatform, "Tag-details report");
    }
    exportToExcel() {
        let reportData = {
            title: "Tag-details report",
            data: this.pdfdatas,
            headers: this.head,
        };
        this.ete.exportExcel(reportData);
    }
    getDatas() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
            "/tag/getTag?schoolId=" +
            localStorage.getItem("corpId") +
            "&branchId=" +
            localStorage.getItem("corpId");
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            var detail = res;
            this.pdfdatas = [];
            for (var i = 0; i < detail.length; i++) {
                this.pdfdatas.push([detail[i].tagId, detail[i].tagType]);
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
                    text: "Tag Id",
                    datafield: "tagId",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: "50%",
                },
                {
                    text: "Tag Type",
                    datafield: "tagType",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: "50%",
                },
            ];
        });
        this.myGrid.updatebounddata();
        this.myGrid.unselectrow;
        // if(this.refreshData == "refresh"){
        //   this.commonService.presentToast("refreshed Successfully");
        //   this.refreshData=''
        // }
    }
    ngAfterViewInit() {
        if (this.myPlatform == "desktop") {
            this.myGrid.showloadelement();
        }
        this.getDatas();
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
    }
    ionViewWillEnter() {
        this.getDatas();
    }
};
TagTablePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExportExcelService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])
], TagTablePage.prototype, "myGrid", void 0);
TagTablePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-tag-table",
        template: __webpack_require__(/*! raw-loader!./tag-table.page.html */ "./node_modules/raw-loader/index.js!./src/app/skt/tag/tag-table/tag-table.page.html"),
        styles: [__webpack_require__(/*! ./tag-table.page.scss */ "./src/app/skt/tag/tag-table/tag-table.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExportExcelService"]])
], TagTablePage);



/***/ })

}]);
//# sourceMappingURL=skt-tag-tag-table-tag-table-module-es2015.js.map