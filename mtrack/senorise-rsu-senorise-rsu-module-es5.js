(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["senorise-rsu-senorise-rsu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/senorise-rsu/add-sensorise/add-sensorise.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/senorise-rsu/add-sensorise/add-sensorise.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <form [formGroup]=\"sensoriseForm\">\r\n    <ion-row class=\"total-data\">\r\n    <ion-col>\r\n    <ion-row class=\"content-style\">\r\n    <ion-col size=\"4\" class=\"col-content\">\r\n      Customer ID :\r\n    </ion-col>\r\n    <ion-col size=\"7\">\r\n    <ion-input class=\"label-style\" formControlName=\"Customerid\" placeholder=\"Enter the Customerid\"></ion-input>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row class=\"content-style\">\r\n    <ion-col size=\"4\" class=\"col-content\">\r\n      Crypotologic :\r\n    </ion-col>\r\n    <ion-col size=\"7\">\r\n    <ion-input class=\"label-style\"  formControlName=\"Crypotologic\" placeholder=\"Enter the Crypotologic\"></ion-input>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row class=\"content-style\">\r\n    <ion-col size=\"4\" class=\"col-content\">\r\n      Token Validity :\r\n    </ion-col>\r\n    <ion-col size=\"7\">\r\n    <ion-input class=\"label-style\" formControlName=\"Tokenvalidity\" placeholder=\"Enter the Tokenvalidity\"></ion-input>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row class=\"content-style\">\r\n    <ion-col size=\"4\" class=\"col-content\">\r\n      Token Transaction :\r\n    </ion-col>\r\n    <ion-col size=\"7\">\r\n    <ion-input class=\"label-style\" formControlName=\"Tokentransaction\" placeholder=\"Enter the Token Transaction\"></ion-input>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row class=\"content-style\">\r\n    <ion-col size=\"4\" class=\"col-content\">\r\n      Action :\r\n    </ion-col>\r\n    <ion-col size=\"7\">\r\n    <ion-input class=\"label-style\" formControlName=\"Action\" placeholder=\"Enter Action\"></ion-input>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row class=\"content-style\">\r\n    <ion-col size=\"4\" class=\"col-content\">\r\n      UTR No :\r\n    </ion-col>\r\n    <ion-col size=\"7\">\r\n    <ion-input class=\"label-style\"  formControlName=\"Utrno\" placeholder=\"Enter UTR No\"></ion-input>\r\n    </ion-col>\r\n    </ion-row>\r\n    <ion-row style=\"padding: 0px;\">\r\n      <ion-col size=\"12\" class=\"file\">\r\n      <input type=\"file\"  (change)=\"onFileChange($event)\" />\r\n      </ion-col> \r\n      </ion-row> \r\n    </ion-col>\r\n    </ion-row>\r\n    </form>\r\n\r\n    <ion-row class=\"content-style\">\r\n      <ion-col style=\"text-align: center !important;padding: 20px;\">\r\n      <ion-button class=\"button\" type=\"submit\" (click)=\"submitBtn()\">Submit</ion-button>\r\n      <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\">Cancel</ion-button>\r\n      </ion-col>\r\n      </ion-row>\r\n  </ion-content>\r\n  \r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/senorise-rsu/details/details.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/senorise-rsu/details/details.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>View Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"wrapper-container\">\n    <ion-col size=\"12\">\n      <!-- <form [formGroup]=\"detailForm\">\n        <ion-row class=\"form-field\">\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n            <ion-label class=\"label-head\">Service Provider:</ion-label>\n            <ion-input\n              type=\"text\"\n              placeholder=\"Service Provider\"\n              formControlName=\"serviceprovider\"\n              class=\"input\"\n            ></ion-input>\n          </ion-col>\n\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n            <ion-label class=\"label-head\">Invoice Number:</ion-label>\n            <ion-input\n              type=\"text\"\n              placeholder=\"Invoice No\"\n              formControlName=\"invoiceno\"\n              class=\"input\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n            <ion-label class=\"label-head\">Invoice Amount:</ion-label>\n            <ion-input\n              type=\"number\"\n              placeholder=\"Invoice Amount\"\n              formControlName=\"invoiceamount\"\n              class=\"input\"\n            ></ion-input>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-col>\n  </ion-row> -->\n\n      <jqxGrid\n        #myGrid\n        [theme]=\"'material'\"\n        [width]=\"'99%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [pagesizeoptions]=\"page\"\n        [enablebrowserselection]=\"true\"\n        [columns]=\"columns\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/senorise-rsu/senorise-rsu.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/senorise-rsu/senorise-rsu.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-row>\r\n      <ion-title>Sensorise RSU</ion-title>\r\n      <!-- <ion-col *ngIf=\"myPlatform == 'desktop'\">\r\n        <ion-row style=\"margin: 0px; padding: 0; float: right\">\r\n          <ion-col style=\"margin-top: 0\" class=\"tooltip\">\r\n            <ion-fab-button size=\"small\" class=\"fab-btn\"\r\n              href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/SensoriseExcelDowmload/SensoriseRSU.xlsx\"\r\n              download=\"sample.xlsx\">\r\n              <div class=\"excel-wrapper\"></div>\r\n            </ion-fab-button>\r\n            <span class=\"tooltiptext\">Excel-Format</span>\r\n          </ion-col>\r\n          <ion-col style=\"margin-top: 0; text-align: right\">\r\n            <ion-button class=\"submitBtn\" size=\"small\" (click)=\"newfunc()\">Export</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col> -->\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- <ion-row class=\"wrapper-container\">\r\n    <ion-col size=\"12\">\r\n      <form [formGroup]=\"rsuform\">\r\n        <ion-row class=\"form-field\">\r\n          <ion-col size=\"12\" size-lg=\"3\" size-md=\"3\">\r\n            <ion-label class=\"label-head\">File Upload:</ion-label>\r\n            <input type=\"file\" (change)=\"onFileChange($event)\" formControlName=\"fileupload\" class=\"documents\" />\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\" style=\"margin: 25px 0px 0px; text-align: center\">\r\n            <ion-button class=\"submitbtn\" (click)=\"Submit()\" [disabled]=\"!rsuform.valid\">Submit</ion-button>\r\n            <ion-button class=\"submitbtn\" (click)=\"clear()\">Clear</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n    </ion-col>\r\n  </ion-row> -->\r\n\r\n  <ion-row\r\n    ><ion-col\r\n      class=\"form-field\"\r\n      size=\"11.5\"\r\n      style=\"margin-top: 10px; text-align: end\">\r\n      <ion-button class=\"submitbtn\" (click)=\"refresh()\">Refresh</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row style=\"margin-top: 5px\">\r\n    <ion-col size=\"12\">\r\n      <jqxGrid\r\n        #myGrid\r\n        (onRowclick)=\"myGridOnRowSelect($event)\"\r\n        [theme]=\"'material'\"\r\n        [width]=\"'99%'\"\r\n        [autoheight]=\"true\"\r\n        [source]=\"dataAdapter\"\r\n        [columns]=\"columns\"\r\n        [sortable]=\"true\"\r\n        [filterable]=\"true\"\r\n        [columnsresize]=\"true\"\r\n        [enablebrowserselection]=\"true\"\r\n        [enabletooltips]=\"true\"\r\n        [pagesizeoptions]=\"page\"\r\n        [pageable]=\"true\"\r\n        [showfilterrow]=\"true\"\r\n        style=\"\r\n          font-size: 16px;\r\n          text-align: center !important;\r\n          margin: auto;\r\n          cursor: pointer;\r\n        \">\r\n      </jqxGrid>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/senorise-rsu/sensorise-list/sensorise-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/senorise-rsu/sensorise-list/sensorise-list.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-header class='header'>\r\n  <ion-row><ion-col size='11'>Completed List</ion-col> \r\n\r\n    <ion-col size='1' (click)='closeModal()'><ion-icon  name=\"close-circle-outline\"></ion-icon></ion-col> \r\n  </ion-row>  \r\n</ion-header>\r\n<ion-content>\r\n  <ion-card class='expiry' *ngFor=\"let items of completeddatas\">\r\n <ion-row>\r\n  <ion-col size=\"12\" size-lg=\"12\"  size-md=\"7\" style=\"padding-top: 0px;\"><ion-icon name=\"checkmark-circle\"  style=\"padding-right:5px;color:green;padding-top: 5px;font-size: 10px;\"></ion-icon>{{items}}</ion-col>\r\n  </ion-row>\r\n  </ion-card>\r\n\r\n</ion-content>  "

/***/ }),

/***/ "./src/app/delar-application/senorise-rsu/add-sensorise/add-sensorise.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/delar-application/senorise-rsu/add-sensorise/add-sensorise.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 18px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.total-data {\n  margin-top: 3%;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background:#FFEBCD;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n.file {\n  margin-left: 20%;\n}\n\ninput {\n  margin-top: 11px;\n  margin-left: 18%;\n}\n\n#myGrid {\n  border: 1px solid;\n}\n\n#submitbtn {\n  --background:#7c68f8 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2Vub3Jpc2UtcnN1L2FkZC1zZW5zb3Jpc2UvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcc2Vub3Jpc2UtcnN1XFxhZGQtc2Vuc29yaXNlXFxhZGQtc2Vuc29yaXNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9zZW5vcmlzZS1yc3UvYWRkLXNlbnNvcmlzZS9hZGQtc2Vuc29yaXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDSixtQkFBQTtFQUNDLGlCQUFBO0FDQ0Q7O0FEQ0E7RUFDSSx3QkFBQTtVQUFBLHVCQUFBO0FDRUo7O0FEQUE7RUFDSSxjQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0lKOztBREZBO0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDS0o7O0FESEE7RUFDQyxjQUFBO0VBQ0EscUJBQUE7QUNNRDs7QURKQTtFQUNDLGdCQUFBO0FDT0Q7O0FETEE7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0FDUUQ7O0FETkE7RUFFQyxpQkFBQTtBQ1FEOztBRE5BO0VBQ0EsK0JBQUE7QUNTQSIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL3Nlbm9yaXNlLXJzdS9hZGQtc2Vuc29yaXNlL2FkZC1zZW5zb3Jpc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwtc3R5bGV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG5iYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuLmNvbnRlbnQtc3R5bGV7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG59XHJcbi50b3RhbC1kYXRhIHtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcbi5jb2wtY29udGVudHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuI2FkZC1pY29ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGRkVCQ0Q7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5idXR0b257XHJcbiBtYXJnaW4tdG9wOiAyJTtcclxuIC0tYmFja2dyb3VuZDogIzdjNjhmODtcclxufVxyXG4uZmlsZXtcclxuIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbn1cclxuaW5wdXR7XHJcbiBtYXJnaW4tdG9wOjExcHg7XHJcbiBtYXJnaW4tbGVmdDogMTglO1xyXG59XHJcbiNteUdyaWQgXHJcbntcclxuIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcbiNzdWJtaXRidG57XHJcbi0tYmFja2dyb3VuZDojN2M2OGY4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiIsIi5sYWJlbC1zdHlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uY29udGVudC1zdHlsZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udG90YWwtZGF0YSB7XG4gIG1hcmdpbi10b3A6IDMlO1xufVxuXG4uY29sLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI2FkZC1pY29uIHtcbiAgLS1iYWNrZ3JvdW5kOiNGRkVCQ0Q7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIC0tYmFja2dyb3VuZDogIzdjNjhmODtcbn1cblxuLmZpbGUge1xuICBtYXJnaW4tbGVmdDogMjAlO1xufVxuXG5pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDExcHg7XG4gIG1hcmdpbi1sZWZ0OiAxOCU7XG59XG5cbiNteUdyaWQge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuI3N1Ym1pdGJ0biB7XG4gIC0tYmFja2dyb3VuZDojN2M2OGY4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/senorise-rsu/add-sensorise/add-sensorise.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/senorise-rsu/add-sensorise/add-sensorise.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddSensoriseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSensoriseComponent", function() { return AddSensoriseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sensorise_list_sensorise_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sensorise-list/sensorise-list.component */ "./src/app/delar-application/senorise-rsu/sensorise-list/sensorise-list.component.ts");









var AddSensoriseComponent = /** @class */ (function () {
    function AddSensoriseComponent(formBuilder, modalController, ajaxService, commonService) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.name = false;
        this.willDownload = false;
        this.output = '';
        this.show = false;
        this.imeiIssues = [];
        this.excellKeyValid = false;
    }
    AddSensoriseComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    AddSensoriseComponent.prototype.onFileChange = function (ev) {
        var _this = this;
        var fileName = ev.srcElement.files[0];
        this.name = fileName.name.includes(".xlsx");
        if (this.name == true) {
            this.dataString = [];
            var workBook_1 = null;
            var jsonData_1 = null;
            var reader_1 = new FileReader();
            var file = ev.srcElement.files[0];
            reader_1.onload = function (event) {
                var data = reader_1.result;
                workBook_1 = xlsx__WEBPACK_IMPORTED_MODULE_7__["read"](data, { type: 'binary' });
                jsonData_1 = workBook_1.SheetNames.reduce(function (initial, name) {
                    var sheet = workBook_1.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].sheet_to_json(sheet);
                    return initial;
                }, {});
                var json = [];
                for (var i = 0; i < jsonData_1["Sheet1"].length; i++) {
                    jsonData_1["Sheet1"][i]["iccid"] = jsonData_1["Sheet1"][i]["iccid"].toString();
                    json.push(jsonData_1["Sheet1"][i]);
                }
                _this.dataString = json;
                _this.output = _this.dataString.slice(0, 300).concat("...");
            };
            reader_1.readAsBinaryString(file);
        }
        else {
            this.commonService.presentToast("please insert only excel file (.xlsx)");
        }
    };
    AddSensoriseComponent.prototype.getsensorise = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + '/sensorise/getSensoriseRSUSettings';
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(function (res) {
            _this.sensorise = res;
            _this.sensoriseForm.patchValue({
                Customerid: _this.sensorise.customerid,
                Crypotologic: _this.sensorise.cryptologic,
                Tokenvalidity: _this.sensorise.tokenvalidity,
                Tokentransaction: _this.sensorise.tokentransactions,
                Action: _this.sensorise.action,
                Utrno: _this.sensorise.utrno
            });
        });
    };
    AddSensoriseComponent.prototype.submitBtn = function () {
        var _this = this;
        if (this.dataString.length == 0) {
            this.commonService.presentToast("check your excell file,don't enter blank spaces");
        }
        else {
            var excellKeys = Object.keys(this.dataString[0]);
            for (var i = 0; i < excellKeys.length; i++) {
                if ((excellKeys[i] == "iccid")) {
                    console.log("present");
                    this.excellKeyValid = true;
                }
            }
            if (this.name == true && this.excellKeyValid == true) {
                this.imeiIssues = [];
                this.willDownload = true;
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + '/sensorise/SensoriseRSU?companyid=' + localStorage.getItem('corpId') + '&branchid=' + localStorage.getItem('corpId') + '&createdby=' + localStorage.getItem('corpId') + '&customerid=' + this.sensoriseForm.value.Customerid + '&cryptologic=' + this.sensoriseForm.value.Crypotologic + '&tokenValidity=' + this.sensoriseForm.value.Tokenvalidity + '&tokenTransactions=' + this.sensoriseForm.value.Tokentransaction + '&action=' + this.sensoriseForm.value.Action + '&utrno=' + this.sensoriseForm.value.Utrno;
                this.ajaxService.ajaxPostWithBody(url, this.dataString).subscribe(function (res) {
                    if (res.Message == "Sensorise Renewal Saved Successfully") {
                        _this.commonService.presentToast('Sensorise Renewal Saved Successfully');
                        _this.modalController.dismiss();
                        _this.icciddata = res.Completed;
                        _this.openSensoriseList();
                    }
                    else {
                        _this.commonService.presentToast('Please Contact Support Team');
                    }
                });
            }
        }
    };
    AddSensoriseComponent.prototype.openSensoriseList = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _sensorise_list_sensorise_list_component__WEBPACK_IMPORTED_MODULE_8__["SensoriseListComponent"],
                            cssClass: 'custom-modaladv',
                            componentProps: {
                                value: this.icciddata,
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AddSensoriseComponent.prototype.createForm = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + (month) + "-" + (day) + 'T'
            + now.getHours() + ":"
            + now.getMinutes();
        this.sensoriseForm = this.formBuilder.group({
            Customerid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Crypotologic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Tokenvalidity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Tokentransaction: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Action: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Utrno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    AddSensoriseComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.getsensorise();
    };
    AddSensoriseComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
    ]; };
    AddSensoriseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-sensorise',
            template: __webpack_require__(/*! raw-loader!./add-sensorise.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/senorise-rsu/add-sensorise/add-sensorise.component.html"),
            styles: [__webpack_require__(/*! ./add-sensorise.component.scss */ "./src/app/delar-application/senorise-rsu/add-sensorise/add-sensorise.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], AddSensoriseComponent);
    return AddSensoriseComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/senorise-rsu/details/details.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/delar-application/senorise-rsu/details/details.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.fileinput {\n  margin-top: 21px;\n  margin-left: 10%;\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.label-heads {\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -3px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 10px 11px;\n    padding-right: 20px;\n  }\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -4px;\n  right: -3px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -15px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2Vub3Jpc2UtcnN1L2RldGFpbHMvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcc2Vub3Jpc2UtcnN1XFxkZXRhaWxzXFxkZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9zZW5vcmlzZS1yc3UvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGdCQUFBO0VDQ0Y7O0VERUE7SUFDRSxVQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFO0lBQ0UsU0FBQTtFQ0FGOztFREdBO0lBQ0UsVUFBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQ0RGO0FBQ0Y7O0FESUE7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsbUJBQUE7RUNGRjtBQUNGOztBREtBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0hGOztBRE1BO0VBQ0UsMkJBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDSEY7O0FETUE7RUFDRSxtQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2Vub3Jpc2UtcnN1L2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbn1cclxuXHJcbi5zZWxlY3RhYmxlLWlucHV0IHtcclxuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmZpbGVpbnB1dCB7XHJcbiAgbWFyZ2luLXRvcDogMjFweDtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcblxyXG4ubGFiZWwtaGVhZCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XHJcbn1cclxuXHJcbi5sYWJlbC1oZWFkcyB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5zdWJtaXRidG4ge1xyXG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIHpvb206IDgwJTtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IC0zcHggNXB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjMyMHB4KSBhbmQobWF4LXdpZHRoOjEwMjNweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDhweCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MTAyNHB4KSB7XHJcbiAgLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMTBweCAxMXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5mYWItYnRuIHtcclxuICAtLWJhY2tncm91bmQ6IGxhdmVuZGVyO1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNHB4O1xyXG4gIHJpZ2h0OiAtM3B4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxufVxyXG5cclxuLmZhYi1idG46aG92ZXIge1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2I2YjZiNjtcclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG4iLCIuaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG59XG5cbi5zZWxlY3RhYmxlLWlucHV0IHtcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uZmlsZWlucHV0IHtcbiAgbWFyZ2luLXRvcDogMjFweDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmxhYmVsLWhlYWQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xufVxuXG4ubGFiZWwtaGVhZHMge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zdWJtaXRidG4ge1xuICAtLWJhY2tncm91bmQ6ICM2MjUyZWU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC0zcHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogMTBweCAxMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbi5mYWItYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiBsYXZlbmRlcjtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTRweDtcbiAgcmlnaHQ6IC0zcHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5mYWItYnRuOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjYjZiNmI2O1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC04MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/senorise-rsu/details/details.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/delar-application/senorise-rsu/details/details.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(ajaxService, router, formBuilder, commonService, modalController) {
        this.ajaxService = ajaxService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.modalController = modalController;
        this.show = false;
        this.page = [];
    }
    DetailsComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    DetailsComponent.prototype.getdatas = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/sensorise/getSensoriseRSU?rsuid=" + this.value;
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.tableData = res;
            _this.page = ["100", "200", "500", "1000"];
            _this.renderer = function (row, column, value) {
                if (value == "" || null || undefined) {
                    return "--";
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
                    text: "VLTD No",
                    datafield: "vltd",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "ICCID NO",
                    datafield: "iccidno1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
                },
                {
                    text: "SIM 1",
                    datafield: "sim1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "SIM 2",
                    datafield: "sim2",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "IMEI No",
                    datafield: "imei",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "Dealer",
                    datafield: "dealerid",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 70,
                },
                {
                    text: "SR NO",
                    datafield: "srno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "SR Date",
                    datafield: "srdate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "SR Status",
                    datafield: "srstatus",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 90,
                },
            ];
        });
    };
    DetailsComponent.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = event.args.row;
        this.show = true;
    };
    DetailsComponent.prototype.ngOnInit = function () {
        this.getdatas();
    };
    DetailsComponent.ctorParameters = function () { return [
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailsComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("selectComponent", { static: false }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridComponent"])
    ], DetailsComponent.prototype, "myGrid", void 0);
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-details",
            template: __webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/senorise-rsu/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/delar-application/senorise-rsu/details/details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/senorise-rsu/senorise-rsu.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/delar-application/senorise-rsu/senorise-rsu.module.ts ***!
  \***********************************************************************/
/*! exports provided: SenoriseRSUPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenoriseRSUPageModule", function() { return SenoriseRSUPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _senorise_rsu_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./senorise-rsu.page */ "./src/app/delar-application/senorise-rsu/senorise-rsu.page.ts");
/* harmony import */ var _add_sensorise_add_sensorise_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-sensorise/add-sensorise.component */ "./src/app/delar-application/senorise-rsu/add-sensorise/add-sensorise.component.ts");
/* harmony import */ var _sensorise_list_sensorise_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sensorise-list/sensorise-list.component */ "./src/app/delar-application/senorise-rsu/sensorise-list/sensorise-list.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./details/details.component */ "./src/app/delar-application/senorise-rsu/details/details.component.ts");












var routes = [
    {
        path: "",
        component: _senorise_rsu_page__WEBPACK_IMPORTED_MODULE_7__["SenoriseRSUPage"],
    },
    {
        path: "sensorise-renewal",
        component: _add_sensorise_add_sensorise_component__WEBPACK_IMPORTED_MODULE_8__["AddSensoriseComponent"],
    },
    {
        path: "sensorise-list",
        component: _sensorise_list_sensorise_list_component__WEBPACK_IMPORTED_MODULE_9__["SensoriseListComponent"],
    },
    {
        path: "details",
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"],
    },
];
var SenoriseRSUPageModule = /** @class */ (function () {
    function SenoriseRSUPageModule() {
    }
    SenoriseRSUPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_6__["SharedModModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [
                _senorise_rsu_page__WEBPACK_IMPORTED_MODULE_7__["SenoriseRSUPage"],
                _add_sensorise_add_sensorise_component__WEBPACK_IMPORTED_MODULE_8__["AddSensoriseComponent"],
                _sensorise_list_sensorise_list_component__WEBPACK_IMPORTED_MODULE_9__["SensoriseListComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"],
            ],
        })
    ], SenoriseRSUPageModule);
    return SenoriseRSUPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/senorise-rsu/senorise-rsu.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/delar-application/senorise-rsu/senorise-rsu.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-buttons {\n  padding: 10px 0;\n  width: 78px !important;\n}\n\n.submitBtn {\n  --background: white;\n  color: #7c68f8;\n  width: 69px;\n  margin: 0px 28px;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.documents {\n  margin: 19px 10px 0px;\n  text-align: center;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -3px;\n  right: -27px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -10px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.myGrid {\n  max-height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2Vub3Jpc2UtcnN1L0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXHNlbm9yaXNlLXJzdVxcc2Vub3Jpc2UtcnN1LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2Vub3Jpc2UtcnN1L3Nlbm9yaXNlLXJzdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxTQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxVQUFBO0VDRUY7QUFDRjs7QURDQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDQUY7QUFDRjs7QURFQTs7RUFFRSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSwyQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FERUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2Vub3Jpc2UtcnN1L3Nlbm9yaXNlLXJzdS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhci1idXR0b25zIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgd2lkdGg6IDc4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1Ym1pdEJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogIzdjNjhmODtcclxuICB3aWR0aDogNjlweDtcclxuICBtYXJnaW46IDBweCAyOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgem9vbTogODAlO1xyXG4gIH1cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4uZG9jdW1lbnRzIHtcclxuICBtYXJnaW46IDE5cHggMTBweCAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweCkgYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDhweCAxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG4ucGRmLXdyYXBwZXIsXHJcbi5leGNlbC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZXhjZWxOZXcuc3ZnXCIpIG5vLXJlcGVhdDtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5mYWItYnRuIHtcclxuICAtLWJhY2tncm91bmQ6IGxhdmVuZGVyO1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtM3B4O1xyXG4gIHJpZ2h0OiAtMjdweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5mYWItYnRuOmhvdmVyIHtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICBtYXJnaW4tbGVmdDogLTgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuLm15R3JpZCB7XHJcbiAgbWF4LWhlaWdodDogYXV0bztcclxufVxyXG4iLCIudG9vbGJhci1idXR0b25zIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICB3aWR0aDogNzhweCAhaW1wb3J0YW50O1xufVxuXG4uc3VibWl0QnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICM3YzY4Zjg7XG4gIHdpZHRoOiA2OXB4O1xuICBtYXJnaW46IDBweCAyOHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5kb2N1bWVudHMge1xuICBtYXJnaW46IDE5cHggMTBweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDhweCAxcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxufVxuLnBkZi13cmFwcGVyLFxuLmV4Y2VsLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZXhjZWxOZXcuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmZhYi1idG4ge1xuICAtLWJhY2tncm91bmQ6IGxhdmVuZGVyO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtM3B4O1xuICByaWdodDogLTI3cHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5mYWItYnRuOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjYjZiNmI2O1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC04MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLm15R3JpZCB7XG4gIG1heC1oZWlnaHQ6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/senorise-rsu/senorise-rsu.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/delar-application/senorise-rsu/senorise-rsu.page.ts ***!
  \*********************************************************************/
/*! exports provided: SenoriseRSUPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenoriseRSUPage", function() { return SenoriseRSUPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./details/details.component */ "./src/app/delar-application/senorise-rsu/details/details.component.ts");











var SenoriseRSUPage = /** @class */ (function () {
    function SenoriseRSUPage(platform, modalController, alertController, commonService, ajaxService, ete, formBuilder) {
        this.platform = platform;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.ete = ete;
        this.formBuilder = formBuilder;
        this.isDeleteShow = true;
        this.name = false;
        this.willDownload = false;
        this.output = "";
        this.excellKeyValid = false;
        this.show = false;
        this.imeiIssues = [];
        this.page = [];
        this.head = [
            "VLTD No",
            "Iccid No",
            "SIM 1",
            "SIM 2",
            "IMEI",
            "Dealer",
            "SR No",
            "SR Date",
            "SR Status",
        ];
    }
    SenoriseRSUPage.prototype.createForm = function () {
        this.rsuform = this.formBuilder.group({
            fileupload: [this.file, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
        });
    };
    SenoriseRSUPage.prototype.clear = function () {
        this.rsuform.patchValue({
            fileupload: "",
        });
    };
    SenoriseRSUPage.prototype.refresh = function () {
        var _this = this;
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/sensorise/getSensoriseRSURefresh";
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            _this.commonService.dismissLoader();
            if (res.Message == "SR Status Updated Successfully") {
                _this.commonService.showConfirm(res.Message);
            }
        });
    };
    SenoriseRSUPage.prototype.onFileChange = function (ev) {
        var _this = this;
        var fileName = ev.srcElement.files[0];
        this.name = fileName.name.includes(".xlsx");
        if (this.name == true) {
            this.dataString = [];
            var workBook_1 = null;
            var jsonData_1 = null;
            var reader_1 = new FileReader();
            var file = ev.srcElement.files[0];
            reader_1.onload = function (event) {
                var data = reader_1.result;
                workBook_1 = xlsx__WEBPACK_IMPORTED_MODULE_7__["read"](data, { type: "binary" });
                jsonData_1 = workBook_1.SheetNames.reduce(function (initial, name) {
                    var sheet = workBook_1.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].sheet_to_json(sheet);
                    return initial;
                }, {});
                var json = [];
                for (var i = 0; i < jsonData_1["Sheet1"].length; i++) {
                    var newData = {};
                    newData["iccid"] = jsonData_1["Sheet1"][i]["iccid"].toString();
                    json.push(newData);
                }
                _this.dataString = json;
                _this.output = _this.dataString.slice(0, 300).concat("...");
            };
            reader_1.readAsBinaryString(file);
        }
        else {
            this.commonService.showConfirm("Please insert only excel file (.xlsx)");
            this.clear();
        }
    };
    SenoriseRSUPage.prototype.Submit = function () {
        var _this = this;
        if (this.dataString.length == 0) {
            this.commonService.showConfirm("Check your excell file,don't enter blank spaces");
        }
        else {
            var excellKeys = Object.keys(this.dataString[0]);
            for (var i = 0; i < excellKeys.length; i++) {
                if (excellKeys[i] == "iccid") {
                    console.log("present");
                    this.excellKeyValid = true;
                }
            }
            if (this.name == true && this.excellKeyValid == true) {
                this.button = true;
                this.imeiIssues = [];
                this.willDownload = true;
                this.commonService.presentLoader();
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
                    "/sensorise/saveSensoriseRSU?createdby=" +
                    localStorage.getItem("corpId");
                this.ajaxService
                    .ajaxPostWithBody(url, this.dataString)
                    .subscribe(function (res) {
                    _this.commonService.dismissLoader();
                    if (res.Message == "Renewal Saved Successfully") {
                        _this.commonService.showConfirm(res.Message);
                        _this.clear();
                        _this.getDatas();
                    }
                    else {
                        _this.commonService.showConfirm(res.Message);
                    }
                });
            }
        }
    };
    SenoriseRSUPage.prototype.getDatas = function () {
        var _this = this;
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/sensorise/getSensoriseRSUSummary";
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.tableData = res;
            _this.commonService.dismissLoader();
            _this.page = ["100", "200", "500", "1000"];
            _this.renderer = function (row, column, value) {
                if (value == "" || null || undefined || value == ",") {
                    return "---";
                }
                else {
                    return ('<span style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                        value +
                        "</span>");
                }
            };
            _this.source = { localdata: _this.tableData };
            _this.dataAdapter = new jqx.dataAdapter(_this.source);
            _this.columns = [
                {
                    text: "RSU Number",
                    datafield: "rsuid",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 200,
                },
                {
                    text: "RSU Date",
                    datafield: "rsudate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 200,
                },
                {
                    text: "No of Units",
                    datafield: "noofunits",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 200,
                },
                {
                    text: "Created by",
                    datafield: "createdby",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 200,
                },
                {
                    text: "",
                    datafield: "detail",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                    cellsrenderer: function () {
                        return _this.myPlatform == "desktop"
                            ? "View Details"
                            : "<button>Details</button>";
                    },
                    buttonclick: function (row) {
                        _this.detailspop(row);
                    },
                },
                {
                    text: "",
                    datafield: "Download",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 110,
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
    SenoriseRSUPage.prototype.detailspop = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"],
                            cssClass: "rsufrom",
                            componentProps: {
                                value: this.selectedRow.rsuid,
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () { });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SenoriseRSUPage.prototype.download = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/sensorise/getSensoriseRSU?rsuid=" +
            this.selectedRow.rsuid;
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            _this.Download = res;
            _this.pdfdatas = [];
            for (var i = 0; i < _this.Download.length; i++) {
                _this.pdfdatas.push([
                    _this.Download[i].vltd,
                    _this.Download[i].iccidno1,
                    _this.Download[i].sim1,
                    _this.Download[i].sim2,
                    _this.Download[i].imei,
                    _this.Download[i].dealerid,
                    _this.Download[i].srno,
                    _this.Download[i].srdate,
                    _this.Download[i].srstatus,
                ]);
            }
            var reportData = {
                data: _this.pdfdatas,
                headers: _this.head,
            };
            _this.ete.generateExcel(reportData);
        });
    };
    SenoriseRSUPage.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = event.args.row.bounddata;
    };
    SenoriseRSUPage.prototype.newfunc = function () {
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
            title: "Sensorise RSU",
            data: forExcel,
            headers: Header,
        };
        this.ete.exportExcel(reportData);
    };
    SenoriseRSUPage.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.createForm();
    };
    SenoriseRSUPage.prototype.ionViewWillEnter = function () {
        this.clear();
        this.getDatas();
    };
    SenoriseRSUPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExportExcelService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
    ], SenoriseRSUPage.prototype, "myGrid", void 0);
    SenoriseRSUPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-senorise-rsu",
            template: __webpack_require__(/*! raw-loader!./senorise-rsu.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/senorise-rsu/senorise-rsu.page.html"),
            styles: [__webpack_require__(/*! ./senorise-rsu.page.scss */ "./src/app/delar-application/senorise-rsu/senorise-rsu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExportExcelService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]])
    ], SenoriseRSUPage);
    return SenoriseRSUPage;
}());



/***/ }),

/***/ "./src/app/delar-application/senorise-rsu/sensorise-list/sensorise-list.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/delar-application/senorise-rsu/sensorise-list/sensorise-list.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 23px;\n  background: #7c68f8;\n  color: white;\n  text-align: center;\n}\n\n.expiry {\n  text-align: left;\n  font-size: 13px;\n  border: 1px solid #7c68f8;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2Vub3Jpc2UtcnN1L3NlbnNvcmlzZS1saXN0L0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXHNlbm9yaXNlLXJzdVxcc2Vuc29yaXNlLWxpc3RcXHNlbnNvcmlzZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9zZW5vcmlzZS1yc3Uvc2Vuc29yaXNlLWxpc3Qvc2Vuc29yaXNlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL3Nlbm9yaXNlLXJzdS9zZW5zb3Jpc2UtbGlzdC9zZW5zb3Jpc2UtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAgIzdjNjhmODtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4gICAgLmV4cGlyeXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAgIzdjNjhmODtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9IiwiLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgYmFja2dyb3VuZDogIzdjNjhmODtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5leHBpcnkge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3YzY4Zjg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/senorise-rsu/sensorise-list/sensorise-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/delar-application/senorise-rsu/sensorise-list/sensorise-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SensoriseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensoriseListComponent", function() { return SensoriseListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SensoriseListComponent = /** @class */ (function () {
    function SensoriseListComponent(modalController) {
        this.modalController = modalController;
    }
    SensoriseListComponent.prototype.closeModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.modalController.dismiss();
                return [2 /*return*/];
            });
        });
    };
    SensoriseListComponent.prototype.ngOnInit = function () {
        this.completeddatas = this.value;
    };
    SensoriseListComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SensoriseListComponent.prototype, "value", void 0);
    SensoriseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sensorise-list',
            template: __webpack_require__(/*! raw-loader!./sensorise-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/senorise-rsu/sensorise-list/sensorise-list.component.html"),
            styles: [__webpack_require__(/*! ./sensorise-list.component.scss */ "./src/app/delar-application/senorise-rsu/sensorise-list/sensorise-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], SensoriseListComponent);
    return SensoriseListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=senorise-rsu-senorise-rsu-module-es5.js.map