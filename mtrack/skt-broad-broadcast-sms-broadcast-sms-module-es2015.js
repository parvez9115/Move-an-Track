(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["skt-broad-broadcast-sms-broadcast-sms-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/broad/broadcast-sms/broadcast-sms.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/broad/broadcast-sms/broadcast-sms.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <div class=\"broadcast-wrapper\">\r\n     <ion-row  class=\"header-section\">\r\n      <ion-col size=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"0\"> \r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-col>  \r\n      <ion-col size=\"10\" size-sm=\"10\" size-md=\"10\" size-lg=\"12\" id=\"btn-wrapper\">\r\n        Broadcast Sms Report\r\n      </ion-col>\r\n    </ion-row>    \r\n  <ion-row id=\"form-container\">\r\n  <ion-col >\r\n    <ion-button class=\"btnsize\"   (click)=\"broadCast()\">Add New Broadcast</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  </div> \r\n  <div id=\"export-wrapper\">\r\n    <!-- <ion-img src=\"assets/student_Details/print.svg\"  class=\"toolbar-row\" (click)=\"btnOnClick()\"></ion-img> -->\r\n    <ion-img src=\"assets/student_Details/pdf.svg\" class=\"toolbar-row\" (click)=\"createPdf()\"></ion-img>\r\n    <ion-img src=\"assets/student_Details/excel.svg\" class=\"toolbar-row\"  (click)=\"exportToExcel()\"> </ion-img>\r\n       <!-- <ion-img src=\"assets/student_Details/refresher.svg\" class=\"toolbar-row\" (click)=\"refresh()\"></ion-img> -->\r\n    </div> \r\n   </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n <div class=\"grid_Container\">\r\n  <jqxGrid\r\n  (onRowselect)=\"myGridOnRowSelect($event)\"\r\n  [pageable]=\"true\"\r\n  [selectionmode]=\"'singlerow'\"\r\n  [showfilterrow]=\"true\"\r\n  [filterable]=\"true\"\r\n  [sortable]=\"true\"\r\n  [width]=\"'100%'\"\r\n  [source]=\"dataAdapter\" \r\n  [columns]=\"columns\" \r\n  [autoheight]=\"true\"\r\n  [theme]=\"'material'\"\r\n  [enabletooltips]=\"true\" \r\n  #myGrid \r\n  style=\"font-size:16px;text-align: center !important;\">\r\n  </jqxGrid>\r\n</div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/skt/broad/broadcast-sms/broadcast-sms.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/skt/broad/broadcast-sms/broadcast-sms.module.ts ***!
  \*****************************************************************/
/*! exports provided: BroadcastSmsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastSmsPageModule", function() { return BroadcastSmsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _broadcast_sms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./broadcast-sms.page */ "./src/app/skt/broad/broadcast-sms/broadcast-sms.page.ts");
/* harmony import */ var _sktcomponents_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sktcomponents.module */ "./src/app/skt/sktcomponents.module.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");









const routes = [
    {
        path: '',
        component: _broadcast_sms_page__WEBPACK_IMPORTED_MODULE_6__["BroadcastSmsPage"]
    }
];
let BroadcastSmsPageModule = class BroadcastSmsPageModule {
};
BroadcastSmsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
        declarations: [_broadcast_sms_page__WEBPACK_IMPORTED_MODULE_6__["BroadcastSmsPage"]]
    })
], BroadcastSmsPageModule);



/***/ }),

/***/ "./src/app/skt/broad/broadcast-sms/broadcast-sms.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/skt/broad/broadcast-sms/broadcast-sms.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".broadcast-wrapper, .grid_Container {\n  border: 1px solid #c7c3c3;\n  margin: 5px 10px 0;\n}\n\n.grid_Container {\n  margin: 0px 10px 0px;\n}\n\n.header-section {\n  background-color: #e8e8e8;\n  border: 1px solid #cac2c2;\n}\n\n#export-wrapper {\n  text-align: right;\n  background-color: #e8e8e8;\n  height: 42px;\n  border-top: 1px solid gainsboro;\n  margin: 0px 10px 0px;\n  border-left: 2px solid #c7c7c7;\n}\n\n#btn-wrapper {\n  font-weight: 700;\n  text-align: center;\n  background-color: #e8e8e8;\n  height: 40px;\n  padding: 0px;\n  font-size: 20px;\n  border-bottom: 1px solid #cac2c2;\n}\n\n.toolbar-row {\n  height: 40px;\n  width: 40px;\n  display: inline-block;\n  margin: 0px;\n  border: 1px solid #b9b7b7;\n  padding: 5px;\n}\n\n.toolbar-row:hover {\n  background-color: whitesmoke;\n}\n\n.mytable:hover {\n  background-color: blue;\n}\n\n.align-self {\n  align-self: center;\n}\n\n.datebox {\n  background: #f3f3f3;\n  color: #383838;\n  max-width: -webkit-fill-available;\n  height: 34px;\n  border: 1px solid lightgray;\n  outline: none;\n  text-align: center;\n  width: 100%;\n}\n\n.btnsize {\n  font-size: 13px;\n  --background:#388fff;\n  height: 32px;\n}\n\n#form-container {\n  font-size: 14px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t0L2Jyb2FkL2Jyb2FkY2FzdC1zbXMvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxza3RcXGJyb2FkXFxicm9hZGNhc3Qtc21zXFxicm9hZGNhc3Qtc21zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2t0L2Jyb2FkL2Jyb2FkY2FzdC1zbXMvYnJvYWRjYXN0LXNtcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0M7RUFDRyxvQkFBQTtBQ0VKOztBREFDO0VBQ0MseUJBQUE7RUFDQSx5QkFBQTtBQ0dGOztBRERDO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7QUNJSDs7QURGQztFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FDS0g7O0FESEM7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ01IOztBREpBO0VBQ0ksNEJBQUE7QUNPSjs7QURKQztFQUNFLHNCQUFBO0FDT0g7O0FESkM7RUFDQyxrQkFBQTtBQ09GOztBRExBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDUUY7O0FETkE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDU0Y7O0FETkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQ1NGIiwiZmlsZSI6InNyYy9hcHAvc2t0L2Jyb2FkL2Jyb2FkY2FzdC1zbXMvYnJvYWRjYXN0LXNtcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJvYWRjYXN0LXdyYXBwZXIsLmdyaWRfQ29udGFpbmVye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5OSwgMTk1LCAxOTUpO1xyXG4gICAgbWFyZ2luOiA1cHggMTBweCAwO1xyXG4gfVxyXG4gLmdyaWRfQ29udGFpbmVye1xyXG4gICAgbWFyZ2luOiAwcHggMTBweCAwcHg7ICBcclxuIH1cclxuIC5oZWFkZXItc2VjdGlvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWMyYzI7XHJcbn1cclxuICNleHBvcnQtd3JhcHBlcntcclxuICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XHJcbiAgIGhlaWdodDogNDJweDtcclxuICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdhaW5zYm9ybztcclxuICAgbWFyZ2luOiAwcHggMTBweCAwcHg7XHJcbiAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2M3YzdjNztcclxuIH1cclxuICNidG4td3JhcHBlcntcclxuICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xyXG4gICBoZWlnaHQ6IDQwcHg7XHJcbiAgIHBhZGRpbmc6IDBweDtcclxuICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2FjMmMyO1xyXG4gIH1cclxuIC50b29sYmFyLXJvd3tcclxuICAgaGVpZ2h0OiA0MHB4O1xyXG4gICB3aWR0aDogNDBweDtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICBtYXJnaW46MHB4O1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCAjYjliN2I3O1xyXG4gICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLnRvb2xiYXItcm93OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuIC5teXRhYmxlOmhvdmVyIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuIH1cclxuXHJcbiAuYWxpZ24tc2VsZntcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLmRhdGVib3h7XHJcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuICBjb2xvcjogIzM4MzgzODtcclxuICBtYXgtd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uYnRuc2l6ZXtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiMzODhmZmY7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIFxyXG59XHJcbiNmb3JtLWNvbnRhaW5lcntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufSIsIi5icm9hZGNhc3Qtd3JhcHBlciwgLmdyaWRfQ29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M3YzNjMztcbiAgbWFyZ2luOiA1cHggMTBweCAwO1xufVxuXG4uZ3JpZF9Db250YWluZXIge1xuICBtYXJnaW46IDBweCAxMHB4IDBweDtcbn1cblxuLmhlYWRlci1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhYzJjMjtcbn1cblxuI2V4cG9ydC13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGhlaWdodDogNDJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdhaW5zYm9ybztcbiAgbWFyZ2luOiAwcHggMTBweCAwcHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2M3YzdjNztcbn1cblxuI2J0bi13cmFwcGVyIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NhYzJjMjtcbn1cblxuLnRvb2xiYXItcm93IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I5YjdiNztcbiAgcGFkZGluZzogNXB4O1xufVxuXG4udG9vbGJhci1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4ubXl0YWJsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5hbGlnbi1zZWxmIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uZGF0ZWJveCB7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIGNvbG9yOiAjMzgzODM4O1xuICBtYXgtd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGhlaWdodDogMzRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnRuc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLS1iYWNrZ3JvdW5kOiMzODhmZmY7XG4gIGhlaWdodDogMzJweDtcbn1cblxuI2Zvcm0tY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/skt/broad/broadcast-sms/broadcast-sms.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/skt/broad/broadcast-sms/broadcast-sms.page.ts ***!
  \***************************************************************/
/*! exports provided: BroadcastSmsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastSmsPage", function() { return BroadcastSmsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var src_app_services_skt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/skt.service */ "./src/app/services/skt.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _broadcast_additional_broadcast_additional_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../broadcast-additional/broadcast-additional.component */ "./src/app/skt/broad/broadcast-additional/broadcast-additional.component.ts");











src_app_services_skt_service__WEBPACK_IMPORTED_MODULE_7__["SktService"];
let BroadcastSmsPage = class BroadcastSmsPage {
    constructor(modalController, formBuilder, ajaxService, ete, commonService, platform) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.ajaxService = ajaxService;
        this.ete = ete;
        this.commonService = commonService;
        this.platform = platform;
        this.pdfdata = [];
        this.head = ['Category', 'From Mobile', 'To Mobile', 'Message', 'Event Time', 'Server Time'];
    }
    btnOnClick() {
        let gridContent = this.myGrid.exportdata('html');
        let newWindow = window.open('', '', 'width=800, height=500'), document = newWindow.document.open(), pageContent = '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<meta charset="utf-8" />\n' +
            '<title>Broad cast sms report</title>\n' +
            '</head>\n' +
            '<body>\n' + gridContent + '\n</body>\n</html>';
        document.write(pageContent);
        document.close();
        newWindow.print();
    }
    ;
    createPdf() {
        this.commonService.createPdf(this.head, this.pdfdata, "Broadcast Sms Report", this.myPlatform, "Broadcast Sms Report");
    }
    exportToExcel() {
        let reportData = {
            title: 'Broadcast Sms Report',
            data: this.pdfdata,
            headers: this.head
        };
        this.ete.exportExcel(reportData);
    }
    broadCast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _broadcast_additional_broadcast_additional_component__WEBPACK_IMPORTED_MODULE_10__["BroadcastAdditionalComponent"],
                cssClass: 'broadcast-css'
            });
            modal.onDidDismiss().then(() => {
                this.myGrid.clearselection();
                this.getDatas();
            });
            return yield modal.present();
        });
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row;
    }
    ngAfterViewInit() {
        this.getDatas();
    }
    getDatas() {
        this.companyDetail = {
            branchID: localStorage.getItem('corpId'),
            companyID: localStorage.getItem('corpId'),
            userId: localStorage.getItem('userName')
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + `/report/getbrodcastSms?companyId=${this.companyDetail.companyID}&branchId=${this.companyDetail.branchID}`;
        this.ajaxService.ajaxGet(url).subscribe(res => {
            this.broadOdj = res;
            for (var i = 0; i < this.broadOdj.length; i++) {
                this.pdfdata.push([this.broadOdj[i].category, this.broadOdj[i].fromMobile, this.broadOdj[i].toMobile, this.broadOdj[i].msg, this.broadOdj[i].eventTimeStamp, this.broadOdj[i].serverTimeStamp]);
            }
            this.renderer = (row, column, value) => {
                if (value == "" || null || undefined || value == ",") {
                    return "---";
                }
                else {
                    return '<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' + value + '</span>';
                }
            };
            this.source = { localdata: this.broadOdj };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            this.columns = [
                { text: 'Category', datafield: 'category', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center' },
                { text: 'From Mobile', datafield: 'fromMobile', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center' },
                { text: 'To Mobile', datafield: 'toMobile', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center' },
                { text: 'Message', datafield: 'msg', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center' },
                { text: 'Event Time', datafield: 'eventTimeStamp', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center' },
                { text: 'Server Time', datafield: 'serverTimeStamp', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center' },
            ];
            this.myGrid.updatebounddata();
            this.myGrid.unselectrow;
        });
    }
    refresh() {
        this.getDatas();
        this.commonService.presentToast("Data refreshed successfully.");
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
        this.getDatas();
    }
};
BroadcastSmsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExportExcelService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myGrid', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
], BroadcastSmsPage.prototype, "myGrid", void 0);
BroadcastSmsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-broadcast-sms',
        template: __webpack_require__(/*! raw-loader!./broadcast-sms.page.html */ "./node_modules/raw-loader/index.js!./src/app/skt/broad/broadcast-sms/broadcast-sms.page.html"),
        styles: [__webpack_require__(/*! ./broadcast-sms.page.scss */ "./src/app/skt/broad/broadcast-sms/broadcast-sms.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExportExcelService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], BroadcastSmsPage);



/***/ })

}]);
//# sourceMappingURL=skt-broad-broadcast-sms-broadcast-sms-module-es2015.js.map