(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["production-details-production-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/production-details/add-production/add-production.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/production-details/add-production/add-production.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"content-style label-style\">\r\n  <ion-row>\r\n  <ion-col>\r\n  <form [formGroup]=\"productionForm\">\r\n  <ion-row class=\"total-data\">\r\n  <ion-col>\r\n  <ion-row class=\"content-style\">\r\n  <ion-col size=\"4\" class=\"col-content\">\r\n  Serial Number :\r\n  </ion-col>\r\n  <ion-col size=\"7\">\r\n  <ion-input class=\"diable-style\" type=\"text\" disabled formControlName=\"SerialNo\" value={{serial}} placeholder=\"Enter the SerialNo\"></ion-input>\r\n  </ion-col>\r\n  </ion-row>\r\n  \r\n  <ion-row class=\"content-style\">\r\n    <ion-col size=\"4\" class=\"col-content\">\r\n    Device Model :\r\n    </ion-col>\r\n    <ion-col size=\"7\">\r\n      <ionic-selectable class=\"input selectable-input\" formControlName=\"devicemodel\" placeholder=\"Select the Device Model\"\r\n      [items]=\"devicemodellist\"  [canSearch]=\"true\" (onChange)=\"getdevicemodellist($event)\"\r\n     [hasVirtualScroll]=\"true\" [disabledItems]=\"data\">\r\n    </ionic-selectable>\r\n    </ion-col>\r\n    </ion-row>\r\n\r\n  <ion-row class=\"content-style\">\r\n  <ion-col size=\"4\" class=\"col-content\">\r\n  Imei Number :\r\n  </ion-col>\r\n  <ion-col size=\"6\">\r\n  <ion-input class=\"label-style\" type=\"number\" formControlName=\"imeiNo\" placeholder=\"Enter Imei Number\"></ion-input>\r\n  </ion-col>\r\n  <ion-col size=\"1\">\r\n    <ion-button (click)=\"click($event)\">+</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"content-style\">\r\n  <ion-col size=\"4\" class=\"col-content\">\r\n  Quantity :\r\n  </ion-col>\r\n  <ion-col size=\"7\">\r\n  <ion-input class=\"diable-style\" type=\"number\" disabled [(ngModel)]=\"Qty\"  [ngModelOptions]=\"{standalone: true}\" placeholder=\"Quantity\"></ion-input>\r\n  </ion-col>\r\n  </ion-row>\r\n  </ion-col>\r\n  </ion-row>\r\n  </form>\r\n  \r\n  <ion-row class=\"content-style\">\r\n  <ion-col>\r\n        <jqxGrid *ngIf=\"isshow\" #myGrid [theme]=\"'material'\" [width]=\"'99%'\" [autoheight]=\"true\"\r\n     [showfilterrow]=\"false\" [rowsheight]=\"30\" [source]=\"dataAdapter\" [columns]=\"columns\" [showstatusbar]=\"true\"\r\n     [statusbarheight]=\"30\" [showaggregates]=\"true\" [sortable]=\"false\" [filterable]=\"false\" [columns]=\"columns\" [columnsresize]=\"true\" [enabletooltips]=\"true\"\r\n      [pageable]=\"false\" [selectionmode]=\"'singlerow'\" style=\"font-size: 10px;text-align: center !important\">\r\n    </jqxGrid>\r\n  </ion-col>\r\n  </ion-row>\r\n  \r\n  <ion-row class=\"content-style\">\r\n  <ion-col style=\"text-align: center !important;padding: 20px;\">\r\n  <ion-button class=\"button\" type=\"submit\" [disabled]=\"!productionForm.valid\"(click)=\"submitBtn()\">Submit</ion-button>\r\n  <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\">Cancel</ion-button>\r\n  </ion-col>\r\n  </ion-row>\r\n  \r\n  </ion-col>\r\n  </ion-row>\r\n  </ion-content>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/production-details/production-details.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/production-details/production-details.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\r\n    <ion-row style=\"padding: 0px;\">\r\n      <ion-col size=\"10\">\r\n        <ion-title>Production Details</ion-title>\r\n      </ion-col>\r\n  <ion-col size=\"2\">\r\n        <ion-button class=\"submitBtn\" (click)=\"openModel()\">Add</ion-button>\r\n  </ion-col>\r\n    </ion-row>\r\n</ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n  <ion-row style=\"margin: 15px 0px 0px 0px;\">\r\n    <ion-col size=12>\r\n  <jqxGrid \r\n  #myGrid\r\n   [theme]=\"'material'\"\r\n   (onRowselect)=\"myGridOnRowSelect($event)\"\r\n   [width]=\"'99%'\"\r\n   [autoheight]=\"true\"\r\n   [source]=\"dataAdapter\"\r\n   [columns]=\"columns\"\r\n   [sortable]=\"true\"\r\n   [filterable]=\"true\"\r\n   [columns]=\"columns\"\r\n   [columnsresize]=\"true\"\r\n   [enabletooltips]=\"true\" \r\n   [pageable]=\"true\"\r\n   [showfilterrow]=\"true\" \r\n   style=\"font-size:16px;text-align: center !important;margin:auto;cursor:pointer;\">\r\n  </jqxGrid>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/production-details/view-production/view-production.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/production-details/view-production/view-production.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\r\n    <ion-row>\r\n      <ion-col size=\"2\">\r\n        <ion-icon class=\"iconSize25px\" (click)=\"cancelBtn()\" name=\"arrow-back\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col size=\"10\">\r\n        <ion-title>View Details</ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n</ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n  <ion-row>\r\n    <ion-col size=12>\r\n  <jqxGrid \r\n  #myGrid\r\n   [theme]=\"'material'\"\r\n   [width]=\"'99%'\"\r\n   [autoheight]=\"true\"\r\n   [source]=\"dataAdapter\"\r\n   [columns]=\"columns\"\r\n   [sortable]=\"true\"\r\n   [filterable]=\"true\"\r\n   [columns]=\"columns\"\r\n   [columnsresize]=\"true\"\r\n   [enabletooltips]=\"true\" \r\n   [pageable]=\"true\"\r\n   style=\"font-size:16px;text-align: center !important;margin:auto;cursor:pointer;\">\r\n  </jqxGrid>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/delar-application/production-details/add-production/add-production.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/delar-application/production-details/add-production/add-production.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 18px;\n}\n\n.diable-style {\n  background: white;\n  line-height: 18px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.total-data {\n  margin-top: 3%;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background:#FFEBCD;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcHJvZHVjdGlvbi1kZXRhaWxzL2FkZC1wcm9kdWN0aW9uL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXHByb2R1Y3Rpb24tZGV0YWlsc1xcYWRkLXByb2R1Y3Rpb25cXGFkZC1wcm9kdWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9wcm9kdWN0aW9uLWRldGFpbHMvYWRkLXByb2R1Y3Rpb24vYWRkLXByb2R1Y3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNKLG1CQUFBO0VBQ0MsaUJBQUE7QUNDRDs7QURDQTtFQUNBLGlCQUFBO0VBQ0MsaUJBQUE7QUNFRDs7QURBQTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7QUNHSjs7QUREQTtFQUNJLGNBQUE7QUNJSjs7QURGQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDS0o7O0FESEE7RUFDSSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNNSjs7QURKQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQ09KOztBRExBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDUUo7O0FETEE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNRRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL3Byb2R1Y3Rpb24tZGV0YWlscy9hZGQtcHJvZHVjdGlvbi9hZGQtcHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1zdHlsZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbmJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG4uZGlhYmxlLXN0eWxle1xyXG5iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcbi5jb250ZW50LXN0eWxle1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxufVxyXG4udG90YWwtZGF0YSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxufVxyXG4uY29sLWNvbnRlbnR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbiNhZGQtaWNvbntcclxuICAgIC0tYmFja2dyb3VuZDojRkZFQkNEO1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM3YzY4Zjg7XHJcbn1cclxuLmlucHV0e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICAgIFxyXG59XHJcbi5zZWxlY3RhYmxlLWlucHV0e1xyXG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59IiwiLmxhYmVsLXN0eWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5kaWFibGUtc3R5bGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5jb250ZW50LXN0eWxlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50b3RhbC1kYXRhIHtcbiAgbWFyZ2luLXRvcDogMyU7XG59XG5cbi5jb2wtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jYWRkLWljb24ge1xuICAtLWJhY2tncm91bmQ6I0ZGRUJDRDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgLS1iYWNrZ3JvdW5kOiAjN2M2OGY4O1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG59XG5cbi5zZWxlY3RhYmxlLWlucHV0IHtcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/production-details/add-production/add-production.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/delar-application/production-details/add-production/add-production.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AddProductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductionComponent", function() { return AddProductionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");









let AddProductionComponent = class AddProductionComponent {
    constructor(formBuilder, modalController, ajaxService, commonService) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.isshow = false;
        this.tableData = [];
        this.getdevicemodellist = (event) => {
            if (event.value)
                this.productionForm.value.devicemodel = event.value;
        };
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    submitBtn() {
        var data;
        data = {
            "companyid": localStorage.getItem('corpId'),
            "branchid": localStorage.getItem('corpId'),
            "serialno": this.productionForm.value.SerialNo,
            "quantity": this.Qty,
            "createdby": localStorage.getItem('userName'),
            "createddate": null,
            "updatedby": localStorage.getItem('userName'),
            "salesdetail": this.tableData,
            "devicemodel": this.productionForm.value.devicemodel
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + '/sensorise/saveSensoriseProduction?companyid=' + localStorage.getItem('corpId') + '&branchid=' + localStorage.getItem('corpId');
        this.ajaxService.ajaxPostWithBody(url, data).subscribe(res => {
            if (res.message == "Production Saved Successfully") {
                this.commonService.showConfirm('Production Added Succesfully');
                this.modalController.dismiss();
            }
            else {
                this.commonService.showConfirm('Please Contact Support Team');
            }
        });
    }
    click() {
        if (this.productionForm.value.imeiNo == '') {
            this.commonService.showConfirm('Enter the Imei Number');
        }
        else {
            let show = true;
            if (this.myGrid)
                this.myGrid['attrSource']['originaldata'].map(res => {
                    if (res.imei == this.productionForm.value.imeiNo)
                        show = false;
                });
            if (show) {
                {
                    const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + '/sensorise/getSingleSensoriseManufactureByImei?companyid=' + localStorage.getItem('corpId') + '&imei=' + this.productionForm.value.imeiNo;
                    this.ajaxService.ajaxGetPerference(url)
                        .subscribe(res => {
                        this.imeidetail = res;
                        if (res.message == "Invalid IMEI") {
                            this.commonService.showConfirm(res.message);
                        }
                        else if (res.message == "IMEI Already Exists") {
                            this.commonService.showConfirm(res.message);
                        }
                        else {
                            var detailValue = {
                                imei: this.imeidetail.imei,
                                iccidno: this.imeidetail.iccidno,
                                vltdsno: this.imeidetail.vltdsno,
                            };
                            this.tableData.push(detailValue);
                            this.reset();
                            this.Qty = this.tableData.length;
                            this.isshow = true;
                            this.renderer = (row, column, value) => {
                                if (value == "" || null || undefined || value == ",") {
                                    return "---";
                                }
                                else {
                                    return '<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' + value + '</span>';
                                }
                            };
                            this.source = { localdata: this.tableData };
                            this.dataAdapter = new jqx.dataAdapter(this.source);
                            this.columns = [
                                { text: 'Imei Number', datafield: 'imei', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center' },
                                { text: 'Delete', datafield: 'Delete', columntype: 'button', cellsalign: 'center', align: 'center', width: 200,
                                    cellsrenderer: () => {
                                        return 'Delete';
                                    },
                                    buttonclick: (row) => {
                                        this.deleteAnalogRow(row);
                                    }
                                }
                            ];
                        }
                    });
                }
            }
            else {
                this.commonService.showConfirm("Imei No Already Assigned");
            }
        }
    }
    deleteAnalogRow(row) {
        this.tableData.splice(row, 1);
        this.source = { localdata: this.tableData };
        this.Qty = this.tableData.length;
        this.dataAdapter = new jqx.dataAdapter(this.source);
    }
    createForm() {
        this.productionForm = this.formBuilder.group({
            devicemodel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            SerialNo: [''],
            imeiNo: ['']
        });
    }
    reset() {
        this.productionForm.patchValue({
            SerialNo: this.serial,
            imeiNo: "",
        });
    }
    getModellist() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + '/sensorise/getModel';
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(res => {
            this.devicemodellist = res;
        });
    }
    ngOnInit() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + '/sensorise/generateSerialno?companyid=' + localStorage.getItem('corpId');
        this.ajaxService.ajaxGet(url).subscribe(res => {
            this.serial = res;
        });
        this.getModellist();
        this.createForm();
    }
};
AddProductionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myGrid', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__["jqxGridComponent"])
], AddProductionComponent.prototype, "myGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selectComponent', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableComponent"])
], AddProductionComponent.prototype, "selectComponent", void 0);
AddProductionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-production',
        template: __webpack_require__(/*! raw-loader!./add-production.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/production-details/add-production/add-production.component.html"),
        styles: [__webpack_require__(/*! ./add-production.component.scss */ "./src/app/delar-application/production-details/add-production/add-production.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], AddProductionComponent);



/***/ }),

/***/ "./src/app/delar-application/production-details/production-details.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/delar-application/production-details/production-details.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductionDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionDetailsPageModule", function() { return ProductionDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _production_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./production-details.page */ "./src/app/delar-application/production-details/production-details.page.ts");
/* harmony import */ var _add_production_add_production_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-production/add-production.component */ "./src/app/delar-application/production-details/add-production/add-production.component.ts");
/* harmony import */ var _view_production_view_production_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-production/view-production.component */ "./src/app/delar-application/production-details/view-production/view-production.component.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");












const routes = [
    {
        path: '',
        component: _production_details_page__WEBPACK_IMPORTED_MODULE_7__["ProductionDetailsPage"]
    },
    {
        path: 'add-production',
        component: _add_production_add_production_component__WEBPACK_IMPORTED_MODULE_8__["AddProductionComponent"]
    },
    {
        path: 'view-production',
        component: _view_production_view_production_component__WEBPACK_IMPORTED_MODULE_9__["ViewProductionComponent"]
    }
];
let ProductionDetailsPageModule = class ProductionDetailsPageModule {
};
ProductionDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            ionic_selectable__WEBPACK_IMPORTED_MODULE_10__["IonicSelectableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_6__["SharedModModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_production_details_page__WEBPACK_IMPORTED_MODULE_7__["ProductionDetailsPage"], _add_production_add_production_component__WEBPACK_IMPORTED_MODULE_8__["AddProductionComponent"], _view_production_view_production_component__WEBPACK_IMPORTED_MODULE_9__["ViewProductionComponent"]]
    })
], ProductionDetailsPageModule);



/***/ }),

/***/ "./src/app/delar-application/production-details/production-details.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/delar-application/production-details/production-details.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submitBtn {\n  --background:white ;\n  color: #7c68f8;\n  width: 69px;\n  margin: 0px 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcHJvZHVjdGlvbi1kZXRhaWxzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXHByb2R1Y3Rpb24tZGV0YWlsc1xccHJvZHVjdGlvbi1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcHJvZHVjdGlvbi1kZXRhaWxzL3Byb2R1Y3Rpb24tZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDQSIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL3Byb2R1Y3Rpb24tZGV0YWlscy9wcm9kdWN0aW9uLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Ym1pdEJ0biB7XHJcbi0tYmFja2dyb3VuZDp3aGl0ZSA7XHJcbmNvbG9yOiAjN2M2OGY4O1xyXG53aWR0aDogNjlweDtcclxubWFyZ2luOiAwcHggMjhweDtcclxuICAgIH0iLCIuc3VibWl0QnRuIHtcbiAgLS1iYWNrZ3JvdW5kOndoaXRlIDtcbiAgY29sb3I6ICM3YzY4Zjg7XG4gIHdpZHRoOiA2OXB4O1xuICBtYXJnaW46IDBweCAyOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/production-details/production-details.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/delar-application/production-details/production-details.page.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductionDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionDetailsPage", function() { return ProductionDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _add_production_add_production_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-production/add-production.component */ "./src/app/delar-application/production-details/add-production/add-production.component.ts");
/* harmony import */ var _view_production_view_production_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-production/view-production.component */ "./src/app/delar-application/production-details/view-production/view-production.component.ts");









let ProductionDetailsPage = class ProductionDetailsPage {
    constructor(platform, modalController, alertController, commonService, ajaxService) {
        this.platform = platform;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
    }
    getDatas() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/sensorise/getSensoriseProductionAll?companyid=" +
            localStorage.getItem("corpId");
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            var detail = res;
            this.tableData = res;
            this.renderer = (row, column, value) => {
                if (value == "" || null || undefined || value == ",") {
                    return "---";
                }
                else {
                    return ('<span style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
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
                    width: 300,
                },
                {
                    text: "Quantity",
                    datafield: "qty",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 400,
                },
                {
                    text: "Date",
                    datafield: "date",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                },
                {
                    text: "View Detail",
                    datafield: "View Detail",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 200,
                    cellsrenderer: () => {
                        return "View Detail";
                    },
                    buttonclick: (row) => {
                        this.viewModel();
                    },
                },
            ];
        });
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row;
    }
    viewModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _view_production_view_production_component__WEBPACK_IMPORTED_MODULE_8__["ViewProductionComponent"],
                cssClass: "saleform",
                componentProps: {
                    value: this.selectedRow.serialno,
                },
            });
            modal.onDidDismiss().then(() => { });
            return yield modal.present();
        });
    }
    openModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_production_add_production_component__WEBPACK_IMPORTED_MODULE_7__["AddProductionComponent"],
                cssClass: "saleform",
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
    ngOnInit() {
        this.getDatas();
    }
};
ProductionDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
], ProductionDetailsPage.prototype, "myGrid", void 0);
ProductionDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-production-details",
        template: __webpack_require__(/*! raw-loader!./production-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/production-details/production-details.page.html"),
        styles: [__webpack_require__(/*! ./production-details.page.scss */ "./src/app/delar-application/production-details/production-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"]])
], ProductionDetailsPage);



/***/ }),

/***/ "./src/app/delar-application/production-details/view-production/view-production.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/delar-application/production-details/view-production/view-production.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".iconSize25px {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcHJvZHVjdGlvbi1kZXRhaWxzL3ZpZXctcHJvZHVjdGlvbi9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxwcm9kdWN0aW9uLWRldGFpbHNcXHZpZXctcHJvZHVjdGlvblxcdmlldy1wcm9kdWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9wcm9kdWN0aW9uLWRldGFpbHMvdmlldy1wcm9kdWN0aW9uL3ZpZXctcHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL3Byb2R1Y3Rpb24tZGV0YWlscy92aWV3LXByb2R1Y3Rpb24vdmlldy1wcm9kdWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25TaXplMjVweHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9IiwiLmljb25TaXplMjVweCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/production-details/view-production/view-production.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/delar-application/production-details/view-production/view-production.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ViewProductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductionComponent", function() { return ViewProductionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let ViewProductionComponent = class ViewProductionComponent {
    constructor(ajaxService, modalController) {
        this.ajaxService = ajaxService;
        this.modalController = modalController;
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    ngOnInit() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/sensorise/getSensoriseProductionDetail?companyid=' + localStorage.getItem('corpId') + '&serialno=' + this.value;
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
                { text: 'Vltd SNo', datafield: 'vltdsno', cellsrenderer: this.renderer, cellsalign: 'center', align: 'center' },
            ];
        });
    }
};
ViewProductionComponent.ctorParameters = () => [
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myGrid', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
], ViewProductionComponent.prototype, "myGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ViewProductionComponent.prototype, "value", void 0);
ViewProductionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-production',
        template: __webpack_require__(/*! raw-loader!./view-production.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/production-details/view-production/view-production.component.html"),
        styles: [__webpack_require__(/*! ./view-production.component.scss */ "./src/app/delar-application/production-details/view-production/view-production.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ViewProductionComponent);



/***/ })

}]);
//# sourceMappingURL=production-details-production-details-module-es2015.js.map