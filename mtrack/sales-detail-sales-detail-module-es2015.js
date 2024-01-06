(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sales-detail-sales-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/sales-detail/add-sale/add-sale.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/sales-detail/add-sale/add-sale.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"content-style label-style\">\r\n  <ion-row>\r\n  <ion-col>\r\n  <form [formGroup]=\"salesForm\">\r\n  <ion-row class=\"total-data\">\r\n  <ion-col>\r\n    <ion-row class=\"content-style\">\r\n      <ion-col size=\"4\" class=\"col-content\">\r\n      Invoice Number :\r\n      </ion-col>\r\n      <ion-col size=\"7\">\r\n      <ion-input class=\"label-style\"  formControlName=\"InvoiceNo\" placeholder=\"Enter Invoice Number\"></ion-input>\r\n      </ion-col>\r\n      </ion-row>\r\n  <ion-row class=\"content-style\">\r\n  <ion-col size=\"4\" class=\"col-content\">\r\n  Dealer Name :\r\n  </ion-col>\r\n  <ion-col size=\"7\">\r\n  <ionic-selectable class=\"label-style selectable-input\" formControlName=\"distributor\" placeholder=\"Select Dealer Name\"\r\n  [items]=\"Dealer\"  [canSearch]=\"true\" (onChange)=\"getdealerlist($event)\"\r\n [hasVirtualScroll]=\"true\" [disabledItems]=\"data\">\r\n</ionic-selectable>\r\n  </ion-col>\r\n  </ion-row>\r\n  \r\n  <ion-row class=\"content-style\">\r\n  <ion-col size=\"4\" class=\"col-content\">\r\n  Sales Date :\r\n  </ion-col>\r\n  <ion-col size=\"7\">\r\n  <ion-input class=\"label-style\" type=\"date\" [max]=\"maxDate\" formControlName=\"salesdate\" ></ion-input>\r\n  </ion-col>\r\n  </ion-row>\r\n   <ion-row class=\"content-style\">\r\n  <ion-col size=\"4\" class=\"col-content\">\r\n  Sales Quantity :\r\n  </ion-col>\r\n  <ion-col size=\"7\">\r\n  <ion-input class=\"label-style\" formControlName=\"salesqty\" placeholder=\"Enter the Sales Quantity\"></ion-input>\r\n  </ion-col>\r\n  </ion-row>\r\n  \r\n   <ion-row class=\"content-style\">\r\n  <ion-col size=\"4\" class=\"col-content\">\r\n  Serial Number :\r\n  </ion-col>\r\n  <ion-col size=\"6\">\r\n  <ion-input class=\"label-style\"  formControlName=\"SerialNo\" placeholder=\"Enter Serial Number\"></ion-input>\r\n  </ion-col>\r\n  <ion-col size=\"1\">\r\n    <ion-button (click)=\"click($event)\">+</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-col>\r\n  </ion-row>\r\n  </form>\r\n  \r\n  <ion-row class=\"content-style\">\r\n  <ion-col>\r\n        <jqxGrid *ngIf=\"isshow\" #myGrid [theme]=\"'material'\" [width]=\"'99%'\" [autoheight]=\"true\"\r\n     [showfilterrow]=\"false\" [rowsheight]=\"30\" [source]=\"dataAdapter\" [columns]=\"columns\" [showstatusbar]=\"true\"\r\n     [statusbarheight]=\"30\" [showaggregates]=\"true\" [sortable]=\"false\" [filterable]=\"false\" [columns]=\"columns\" [columnsresize]=\"true\" [enabletooltips]=\"true\"\r\n      [pageable]=\"false\" [selectionmode]=\"'singlerow'\" style=\"font-size: 10px;text-align: center !important\">\r\n    </jqxGrid>\r\n  </ion-col>\r\n  </ion-row>\r\n  \r\n  <ion-row class=\"content-style\">\r\n  <ion-col style=\"text-align: center !important;padding: 20px;\">\r\n  <ion-button class=\"button\" type=\"submit\" [disabled]=\"!salesForm.valid\"(click)=\"submitBtn()\">Submit</ion-button>\r\n  <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\">Cancel</ion-button>\r\n  </ion-col>\r\n  </ion-row>\r\n  \r\n  </ion-col>\r\n  </ion-row>\r\n  </ion-content>\r\n  \r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/sales-detail/sales-detail.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/sales-detail/sales-detail.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\r\n    <ion-row style=\"padding: 0px;\">\r\n      <ion-col size=\"10\">\r\n        <ion-title>Sale Details</ion-title>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-button class=\"submitBtn\" (click)=\"openModel()\">Add</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n</ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n  <ion-row style=\"margin: 15px 0px 0px 0px;\">\r\n    <ion-col size=12>\r\n  <jqxGrid \r\n  #myGrid\r\n   [theme]=\"'material'\"\r\n   (onRowselect)=\"myGridOnRowSelect($event)\"\r\n   [width]=\"'99%'\"\r\n   [autoheight]=\"true\"\r\n   [source]=\"dataAdapter\"\r\n   [columns]=\"columns\"\r\n   [sortable]=\"true\"\r\n   [filterable]=\"true\"\r\n   [columns]=\"columns\"\r\n   [columnsresize]=\"true\"\r\n   [enabletooltips]=\"true\" \r\n   [pageable]=\"true\"\r\n   [showfilterrow]=\"true\" \r\n   style=\"font-size:16px;text-align: center !important;margin:auto;cursor:pointer;\">\r\n  </jqxGrid>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-content>\r\n  \r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/sales-detail/view-serial-details/view-serial-details.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/sales-detail/view-serial-details/view-serial-details.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\r\n    <ion-row>\r\n      <ion-col size=\"2\">\r\n        <ion-icon class=\"iconSize25px\" (click)=\"cancelBtn()\" name=\"arrow-back\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col size=\"10\">\r\n        <ion-title>View Details</ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n</ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n  <ion-row>\r\n    <ion-col size=12>\r\n  <jqxGrid \r\n  #myGrid\r\n   [theme]=\"'material'\"\r\n   (onRowselect)=\"myGridOnRowSelect($event)\"\r\n   [width]=\"'99%'\"\r\n   [autoheight]=\"true\"\r\n   [source]=\"dataAdapter\"\r\n   [columns]=\"columns\"\r\n   [sortable]=\"true\"\r\n   [filterable]=\"true\"\r\n   [columns]=\"columns\"\r\n   [columnsresize]=\"true\"\r\n   [enabletooltips]=\"true\" \r\n   [pageable]=\"true\"\r\n   style=\"font-size:16px;text-align: center !important;margin:auto;cursor:pointer;\">\r\n  </jqxGrid>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/sales-detail/view-serialdetail/view-serialdetail.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/sales-detail/view-serialdetail/view-serialdetail.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\r\n    <ion-row>\r\n      <ion-col size=\"2\">\r\n        <ion-icon class=\"iconSize25px\" (click)=\"cancelBtn()\" name=\"arrow-back\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col size=\"10\">\r\n        <ion-title>View Details</ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n</ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n  <ion-row>\r\n    <ion-col size=12>\r\n  <jqxGrid \r\n  #myGrid\r\n   [theme]=\"'material'\"\r\n   (onRowselect)=\"myGridOnRowSelect($event)\"\r\n   [width]=\"'99%'\"\r\n   [autoheight]=\"true\"\r\n   [source]=\"dataAdapter\"\r\n   [columns]=\"columns\"\r\n   [sortable]=\"true\"\r\n   [filterable]=\"true\"\r\n   [columns]=\"columns\"\r\n   [columnsresize]=\"true\"\r\n   [enabletooltips]=\"true\" \r\n   [pageable]=\"true\"\r\n   style=\"font-size:16px;text-align: center !important;margin:auto;cursor:pointer;\">\r\n  </jqxGrid>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/delar-application/sales-detail/add-sale/add-sale.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/delar-application/sales-detail/add-sale/add-sale.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 18px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.total-data {\n  margin-top: 3%;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background:#FFEBCD;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n.selectable-input {\n  padding: 6px 11px 0px 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2FsZXMtZGV0YWlsL2FkZC1zYWxlL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXHNhbGVzLWRldGFpbFxcYWRkLXNhbGVcXGFkZC1zYWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9zYWxlcy1kZXRhaWwvYWRkLXNhbGUvYWRkLXNhbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNKLG1CQUFBO0VBQ0MsaUJBQUE7QUNDRDs7QURDQTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDSSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNLSjs7QURIQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQ01KOztBREpBO0VBQ0kseUJBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL3NhbGVzLWRldGFpbC9hZGQtc2FsZS9hZGQtc2FsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1zdHlsZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbmJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG4uY29udGVudC1zdHlsZXtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbn1cclxuLnRvdGFsLWRhdGEge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbn1cclxuLmNvbC1jb250ZW50e1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4jYWRkLWljb257XHJcbiAgICAtLWJhY2tncm91bmQ6I0ZGRUJDRDtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjN2M2OGY4O1xyXG59XHJcbi5zZWxlY3RhYmxlLWlucHV0e1xyXG4gICAgcGFkZGluZzogNnB4IDExcHggMHB4IDZweDtcclxufSIsIi5sYWJlbC1zdHlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uY29udGVudC1zdHlsZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udG90YWwtZGF0YSB7XG4gIG1hcmdpbi10b3A6IDMlO1xufVxuXG4uY29sLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI2FkZC1pY29uIHtcbiAgLS1iYWNrZ3JvdW5kOiNGRkVCQ0Q7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIC0tYmFja2dyb3VuZDogIzdjNjhmODtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA2cHggMTFweCAwcHggNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/sales-detail/add-sale/add-sale.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/delar-application/sales-detail/add-sale/add-sale.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddSaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSaleComponent", function() { return AddSaleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");









let AddSaleComponent = class AddSaleComponent {
    constructor(formBuilder, modalController, ajaxService, commonService) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.isshow = false;
        this.tableData = [];
        this.today = new Date();
        this.getdealerlist = (event) => {
            if (event.value)
                this.salesForm.value.distributor = event.value;
        };
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    submitBtn() {
        var data;
        data = {
            companyid: localStorage.getItem("corpId"),
            branchid: localStorage.getItem("corpId"),
            invoiceno: this.salesForm.value.InvoiceNo,
            saledistributor: this.salesForm.value.distributor,
            saledate: this.salesForm.value.salesdate,
            totalquantity: this.salesForm.value.salesqty,
            createdby: null,
            createddate: null,
            updatedby: "null",
            updateddate: null,
            salesdetail: this.tableData,
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/sensorise/saveSensoriseSales";
        this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
            if (res.message == "Sales Saved Successfully") {
                this.commonService.showConfirm("Sales Details Added Succesfully");
                this.modalController.dismiss();
            }
            else {
                this.commonService.showConfirm("Please Contact Support Team");
            }
        });
    }
    click(event) {
        if (this.salesForm.value.SerialNo == "") {
            this.commonService.showConfirm("Enter the Serial Number");
        }
        else {
            let show = true;
            if (this.myGrid)
                this.myGrid["attrSource"]["originaldata"].map((res) => {
                    if (res.serialno == this.salesForm.value.SerialNo)
                        show = false;
                });
            if (show) {
                {
                    const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
                        "/sensorise/getSensoriseSerialNoValidation?companyid=" +
                        localStorage.getItem("corpId") +
                        "&serialno=" +
                        this.salesForm.value.SerialNo;
                    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
                        if (res[0].message == "Invalid Serial No") {
                            this.commonService.showConfirm(res[0].message);
                        }
                        else if (res[0].message == "Serial No Already Exists") {
                            this.commonService.showConfirm(res[0].message);
                        }
                        else {
                            let detailValue = {
                                serialno: this.salesForm.value.SerialNo,
                            };
                            this.tableData.push(detailValue);
                            this.reset();
                            this.isshow = true;
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
                            this.columns = [
                                {
                                    text: "Serial Number",
                                    datafield: "serialno",
                                    cellsrenderer: this.renderer,
                                    cellsalign: "center",
                                    align: "center",
                                },
                                {
                                    text: "Delete",
                                    datafield: "Delete",
                                    columntype: "button",
                                    cellsalign: "center",
                                    align: "center",
                                    width: 200,
                                    cellsrenderer: () => {
                                        return "Delete";
                                    },
                                    buttonclick: (row) => {
                                        this.deleteAnalogRow(row);
                                    },
                                },
                            ];
                        }
                    });
                }
            }
            else {
                this.commonService.showConfirm("Serial No Already Assigned");
            }
        }
    }
    deleteAnalogRow(row) {
        this.tableData.splice(row, 1);
        this.source = { localdata: this.tableData };
        this.dataAdapter = new jqx.dataAdapter(this.source);
    }
    reset() {
        this.salesForm.patchValue({
            SerialNo: "",
        });
    }
    createForm() {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        this.salesForm = this.formBuilder.group({
            distributor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            salesdate: [today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            salesqty: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            InvoiceNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            SerialNo: [""],
        });
    }
    getDealer() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/sensorise/getDealer";
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.Dealer = res;
        });
    }
    ngOnInit() {
        this.maxDate = this.today.getFullYear() + "-";
        this.maxDate +=
            (this.today.getMonth() + 1 < 10
                ? "0" + (this.today.getMonth() + 1).toString()
                : (this.today.getMonth() + 1).toString()) + "-";
        this.maxDate +=
            this.today.getDate() < 10
                ? "0" + this.today.getDate().toString()
                : this.today.getDate().toString();
        this.getDealer();
        this.createForm();
    }
};
AddSaleComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("selectComponent", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableComponent"])
], AddSaleComponent.prototype, "selectComponent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__["jqxGridComponent"])
], AddSaleComponent.prototype, "myGrid", void 0);
AddSaleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-sale",
        template: __webpack_require__(/*! raw-loader!./add-sale.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/sales-detail/add-sale/add-sale.component.html"),
        styles: [__webpack_require__(/*! ./add-sale.component.scss */ "./src/app/delar-application/sales-detail/add-sale/add-sale.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], AddSaleComponent);



/***/ }),

/***/ "./src/app/delar-application/sales-detail/sales-detail.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/delar-application/sales-detail/sales-detail.module.ts ***!
  \***********************************************************************/
/*! exports provided: SalesDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesDetailPageModule", function() { return SalesDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _sales_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sales-detail.page */ "./src/app/delar-application/sales-detail/sales-detail.page.ts");
/* harmony import */ var _add_sale_add_sale_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-sale/add-sale.component */ "./src/app/delar-application/sales-detail/add-sale/add-sale.component.ts");
/* harmony import */ var _view_serialdetail_view_serialdetail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-serialdetail/view-serialdetail.component */ "./src/app/delar-application/sales-detail/view-serialdetail/view-serialdetail.component.ts");
/* harmony import */ var _view_serial_details_view_serial_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-serial-details/view-serial-details.component */ "./src/app/delar-application/sales-detail/view-serial-details/view-serial-details.component.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");













const routes = [
    {
        path: '',
        component: _sales_detail_page__WEBPACK_IMPORTED_MODULE_7__["SalesDetailPage"]
    },
    {
        path: 'sales-details',
        component: _add_sale_add_sale_component__WEBPACK_IMPORTED_MODULE_8__["AddSaleComponent"],
    },
    {
        path: 'view-serial-details',
        component: _view_serialdetail_view_serialdetail_component__WEBPACK_IMPORTED_MODULE_9__["ViewSerialdetailComponent"],
    },
    {
        path: 'view-serial-detail',
        component: _view_serial_details_view_serial_details_component__WEBPACK_IMPORTED_MODULE_10__["ViewSerialDetailsComponent"],
    }
];
let SalesDetailPageModule = class SalesDetailPageModule {
};
SalesDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            ionic_selectable__WEBPACK_IMPORTED_MODULE_11__["IonicSelectableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_6__["SharedModModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_sales_detail_page__WEBPACK_IMPORTED_MODULE_7__["SalesDetailPage"], _add_sale_add_sale_component__WEBPACK_IMPORTED_MODULE_8__["AddSaleComponent"], _view_serialdetail_view_serialdetail_component__WEBPACK_IMPORTED_MODULE_9__["ViewSerialdetailComponent"], _view_serial_details_view_serial_details_component__WEBPACK_IMPORTED_MODULE_10__["ViewSerialDetailsComponent"]]
    })
], SalesDetailPageModule);



/***/ }),

/***/ "./src/app/delar-application/sales-detail/sales-detail.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/delar-application/sales-detail/sales-detail.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-buttons {\n  padding: 10px 0;\n  width: 78px !important;\n}\n\n.submitBtn {\n  --background:white ;\n  color: #7c68f8;\n  width: 69px;\n  margin: 0px 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2FsZXMtZGV0YWlsL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXHNhbGVzLWRldGFpbFxcc2FsZXMtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2FsZXMtZGV0YWlsL3NhbGVzLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0Msc0JBQUE7QUNDTDs7QURDRztFQUNDLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2FsZXMtZGV0YWlsL3NhbGVzLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhci1idXR0b25zIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICB3aWR0aDogNzhweCAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIC5zdWJtaXRCdG4ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOndoaXRlIDtcclxuICAgIGNvbG9yOiAjN2M2OGY4O1xyXG4gICAgd2lkdGg6IDY5cHg7XHJcbiAgICBtYXJnaW46IDBweCAyOHB4O1xyXG4gICAgICAgIH1cclxuICAgXHJcbiAgICIsIi50b29sYmFyLWJ1dHRvbnMge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHdpZHRoOiA3OHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zdWJtaXRCdG4ge1xuICAtLWJhY2tncm91bmQ6d2hpdGUgO1xuICBjb2xvcjogIzdjNjhmODtcbiAgd2lkdGg6IDY5cHg7XG4gIG1hcmdpbjogMHB4IDI4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/sales-detail/sales-detail.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/delar-application/sales-detail/sales-detail.page.ts ***!
  \*********************************************************************/
/*! exports provided: SalesDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesDetailPage", function() { return SalesDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _add_sale_add_sale_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-sale/add-sale.component */ "./src/app/delar-application/sales-detail/add-sale/add-sale.component.ts");
/* harmony import */ var _view_serialdetail_view_serialdetail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-serialdetail/view-serialdetail.component */ "./src/app/delar-application/sales-detail/view-serialdetail/view-serialdetail.component.ts");









let SalesDetailPage = class SalesDetailPage {
    constructor(platform, modalController, alertController, commonService, ajaxService) {
        this.platform = platform;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.isDeleteShow = true;
    }
    getDatas() {
        if (this.myPlatform == 'desktop') {
            const companyDetail = {
                branchID: localStorage.getItem('corpId'),
                companyID: localStorage.getItem('corpId'),
                userId: localStorage.getItem('userName')
            };
        }
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + '/sensorise/getSensoriseSalesAll?companyid=' + localStorage.getItem('corpId');
        this.ajaxService.ajaxGet(url).subscribe(res => {
            var detail = res;
            this.tableData = res;
            this.renderer = (row, column, value) => {
                if (value == "" || null || undefined || value == ",") {
                    return "---";
                }
                else {
                    return '<span style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' + value + '</span>';
                }
            };
            this.source = { localdata: this.tableData };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            this.columns = [
                { text: 'Invoice Number', datafield: 'invoiceno', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center' },
                { text: 'Sales Distributor', datafield: 'saledistributor', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center' },
                { text: 'Sales Date', datafield: 'saledate', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center' },
                { text: 'Sales Quantity', datafield: 'totalquantity', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center' },
                { text: 'View Detail', datafield: 'View Detail', columntype: 'button', cellsalign: 'center', align: 'center',
                    cellsrenderer: () => {
                        return 'View Detail';
                    },
                    buttonclick: (row) => {
                        this.viewModel();
                    }
                }
            ];
        });
    }
    viewModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _view_serialdetail_view_serialdetail_component__WEBPACK_IMPORTED_MODULE_8__["ViewSerialdetailComponent"],
                cssClass: 'saleform',
                componentProps: {
                    value: this.selectedRow.invoiceno
                }
            });
            modal.onDidDismiss().then(() => {
            });
            return yield modal.present();
        });
    }
    openModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_sale_add_sale_component__WEBPACK_IMPORTED_MODULE_7__["AddSaleComponent"],
                cssClass: 'saleform',
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
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row;
    }
    ngOnInit() {
        this.getDatas();
    }
};
SalesDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myGrid', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
], SalesDetailPage.prototype, "myGrid", void 0);
SalesDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sales-detail',
        template: __webpack_require__(/*! raw-loader!./sales-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/sales-detail/sales-detail.page.html"),
        styles: [__webpack_require__(/*! ./sales-detail.page.scss */ "./src/app/delar-application/sales-detail/sales-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"]])
], SalesDetailPage);



/***/ }),

/***/ "./src/app/delar-application/sales-detail/view-serial-details/view-serial-details.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/delar-application/sales-detail/view-serial-details/view-serial-details.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".iconSize25px {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2FsZXMtZGV0YWlsL3ZpZXctc2VyaWFsLWRldGFpbHMvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcc2FsZXMtZGV0YWlsXFx2aWV3LXNlcmlhbC1kZXRhaWxzXFx2aWV3LXNlcmlhbC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9zYWxlcy1kZXRhaWwvdmlldy1zZXJpYWwtZGV0YWlscy92aWV3LXNlcmlhbC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2FsZXMtZGV0YWlsL3ZpZXctc2VyaWFsLWRldGFpbHMvdmlldy1zZXJpYWwtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uU2l6ZTI1cHh7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfSIsIi5pY29uU2l6ZTI1cHgge1xuICBmb250LXNpemU6IDI1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/sales-detail/view-serial-details/view-serial-details.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/delar-application/sales-detail/view-serial-details/view-serial-details.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ViewSerialDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSerialDetailsComponent", function() { return ViewSerialDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let ViewSerialDetailsComponent = class ViewSerialDetailsComponent {
    constructor(ajaxService, modalController) {
        this.ajaxService = ajaxService;
        this.modalController = modalController;
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    ngOnInit() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/sensorise/getSensoriseSerialNoImeiNo?companyid=' + localStorage.getItem('corpId') + '&serialno=' + this.value;
        this.ajaxService.ajaxGet(url).subscribe(res => {
            this.tableData = res;
            this.renderer = (row, column, value) => {
                if (value == "" || null || undefined || value == ",") {
                    return "---";
                }
                else {
                    return '<span style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' + value + '</span>';
                }
            };
            this.source = { localdata: this.tableData };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            this.columns = [
                { text: 'Iccid Number', datafield: 'iccidno', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center' },
                { text: 'Imei Number', datafield: 'imei', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center' },
            ];
        });
    }
};
ViewSerialDetailsComponent.ctorParameters = () => [
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myGrid', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
], ViewSerialDetailsComponent.prototype, "myGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ViewSerialDetailsComponent.prototype, "value", void 0);
ViewSerialDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-serial-details',
        template: __webpack_require__(/*! raw-loader!./view-serial-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/sales-detail/view-serial-details/view-serial-details.component.html"),
        styles: [__webpack_require__(/*! ./view-serial-details.component.scss */ "./src/app/delar-application/sales-detail/view-serial-details/view-serial-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ViewSerialDetailsComponent);



/***/ }),

/***/ "./src/app/delar-application/sales-detail/view-serialdetail/view-serialdetail.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/delar-application/sales-detail/view-serialdetail/view-serialdetail.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".iconSize25px {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2FsZXMtZGV0YWlsL3ZpZXctc2VyaWFsZGV0YWlsL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXHNhbGVzLWRldGFpbFxcdmlldy1zZXJpYWxkZXRhaWxcXHZpZXctc2VyaWFsZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9zYWxlcy1kZXRhaWwvdmlldy1zZXJpYWxkZXRhaWwvdmlldy1zZXJpYWxkZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9zYWxlcy1kZXRhaWwvdmlldy1zZXJpYWxkZXRhaWwvdmlldy1zZXJpYWxkZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvblNpemUyNXB4e1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH0iLCIuaWNvblNpemUyNXB4IHtcbiAgZm9udC1zaXplOiAyNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/sales-detail/view-serialdetail/view-serialdetail.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/delar-application/sales-detail/view-serialdetail/view-serialdetail.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ViewSerialdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSerialdetailComponent", function() { return ViewSerialdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _view_serial_details_view_serial_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view-serial-details/view-serial-details.component */ "./src/app/delar-application/sales-detail/view-serial-details/view-serial-details.component.ts");







let ViewSerialdetailComponent = class ViewSerialdetailComponent {
    constructor(ajaxService, modalController) {
        this.ajaxService = ajaxService;
        this.modalController = modalController;
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    ngOnInit() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/sensorise/getSensoriseSerialNoInvoiceNo?companyid=' + localStorage.getItem('corpId') + '&invoiceno=' + this.value;
        this.ajaxService.ajaxGet(url).subscribe(res => {
            this.tableData = res;
            this.renderer = (row, column, value) => {
                if (value == "" || null || undefined || value == ",") {
                    return "---";
                }
                else {
                    return '<span style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' + value + '</span>';
                }
            };
            this.source = { localdata: this.tableData };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            this.columns = [
                { text: 'Invoice Number', datafield: 'invoiceno', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center' },
                { text: 'Serial Number', datafield: 'serialno', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center' },
                { text: 'View Detail', datafield: 'View Detail', columntype: 'button', cellsalign: 'center', align: 'center',
                    cellsrenderer: () => {
                        return 'View Detail';
                    },
                    buttonclick: (row) => {
                        this.viewModel();
                    }
                }
            ];
        });
    }
    viewModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _view_serial_details_view_serial_details_component__WEBPACK_IMPORTED_MODULE_6__["ViewSerialDetailsComponent"],
                cssClass: 'saleform',
                componentProps: {
                    value: this.selectedRow.serialno
                }
            });
            modal.onDidDismiss().then(() => {
            });
            return yield modal.present();
        });
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row;
    }
};
ViewSerialdetailComponent.ctorParameters = () => [
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myGrid', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
], ViewSerialdetailComponent.prototype, "myGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ViewSerialdetailComponent.prototype, "value", void 0);
ViewSerialdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-serialdetail',
        template: __webpack_require__(/*! raw-loader!./view-serialdetail.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/sales-detail/view-serialdetail/view-serialdetail.component.html"),
        styles: [__webpack_require__(/*! ./view-serialdetail.component.scss */ "./src/app/delar-application/sales-detail/view-serialdetail/view-serialdetail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ViewSerialdetailComponent);



/***/ })

}]);
//# sourceMappingURL=sales-detail-sales-detail-module-es2015.js.map