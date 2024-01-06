(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["skt-excel-validation-excel-validation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/excel-validation/excel-validation.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/excel-validation/excel-validation.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"header_border\" style=\"    text-align: center;\">\r\n    <ion-title>Validation Of Excel Sheet</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  \r\n\r\n<ion-row >\r\n<ion-col size=\"12\"  size-xxl=\"10\"  size-xl=\"10.5\" class=\"ion-text-center\">\r\n  <input type=\"file\" (change)=\"onFileChange($event)\" /></ion-col>\r\n</ion-row>\r\n    \r\n<ion-row >\r\n<ion-col size=\"12\" size-xxl=\"10\"  size-xl=\"11\" class=\"ion-text-center\" >\r\n  <ion-button (click)=\"sendToServer()\" class=\"btn\" [disabled]=\"valid\">Submit </ion-button></ion-col>\r\n</ion-row>\r\n    \r\n  </ion-content>\r\n"

/***/ }),

/***/ "./src/app/skt/excel-validation/excel-validation.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/skt/excel-validation/excel-validation.module.ts ***!
  \*****************************************************************/
/*! exports provided: ExcelValidationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelValidationPageModule", function() { return ExcelValidationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _excel_validation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./excel-validation.page */ "./src/app/skt/excel-validation/excel-validation.page.ts");







var routes = [
    {
        path: '',
        component: _excel_validation_page__WEBPACK_IMPORTED_MODULE_6__["ExcelValidationPage"]
    }
];
var ExcelValidationPageModule = /** @class */ (function () {
    function ExcelValidationPageModule() {
    }
    ExcelValidationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_excel_validation_page__WEBPACK_IMPORTED_MODULE_6__["ExcelValidationPage"]]
        })
    ], ExcelValidationPageModule);
    return ExcelValidationPageModule;
}());



/***/ }),

/***/ "./src/app/skt/excel-validation/excel-validation.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/skt/excel-validation/excel-validation.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  --background:#1aba7e;\n}\n\n.header_border {\n  --background:#1aba7e;\n  --color:white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t0L2V4Y2VsLXZhbGlkYXRpb24vRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxza3RcXGV4Y2VsLXZhbGlkYXRpb25cXGV4Y2VsLXZhbGlkYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9za3QvZXhjZWwtdmFsaWRhdGlvbi9leGNlbC12YWxpZGF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FDQ0Y7O0FEQ0E7RUFDSSxvQkFBQTtFQUNBLGFBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3NrdC9leGNlbC12YWxpZGF0aW9uL2V4Y2VsLXZhbGlkYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bntcclxuICAtLWJhY2tncm91bmQ6IzFhYmE3ZTs7XHJcbn1cclxuLmhlYWRlcl9ib3JkZXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6IzFhYmE3ZTs7XHJcbiAgICAtLWNvbG9yOndoaXRlO1xyXG4gIH0iLCIuYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiMxYWJhN2U7XG59XG5cbi5oZWFkZXJfYm9yZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiMxYWJhN2U7XG4gIC0tY29sb3I6d2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/skt/excel-validation/excel-validation.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/skt/excel-validation/excel-validation.page.ts ***!
  \***************************************************************/
/*! exports provided: ExcelValidationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelValidationPage", function() { return ExcelValidationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_5__);






var ExcelValidationPage = /** @class */ (function () {
    function ExcelValidationPage(ajaxService, router, commonService) {
        this.ajaxService = ajaxService;
        this.router = router;
        this.commonService = commonService;
        this.name = false;
        this.willDownload = false;
        this.output = '';
        this.show = false;
        this.imeiIssues = [];
        this.excellKeyValid = false;
    }
    ExcelValidationPage.prototype.onFileChange = function (ev) {
        var _this = this;
        this.show = false;
        var fileName = ev.srcElement.files[0];
        this.name = fileName.name.includes(".xlsx");
        if (this.name == true) {
            this.show = false;
            this.dataString = [];
            var workBook_1 = null;
            var jsonData_1 = null;
            var reader_1 = new FileReader();
            var file = ev.srcElement.files[0];
            reader_1.onload = function (event) {
                var data = reader_1.result;
                workBook_1 = xlsx__WEBPACK_IMPORTED_MODULE_5__["read"](data, { type: 'binary' });
                jsonData_1 = workBook_1.SheetNames.reduce(function (initial, name) {
                    var sheet = workBook_1.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].sheet_to_json(sheet);
                    return initial;
                }, {});
                var json = [];
                for (var i = 0; i < jsonData_1["Sheet1"].length; i++) {
                    jsonData_1["Sheet1"][i]["StudentName"] = jsonData_1["Sheet1"][i]["StudentName"].toString();
                    jsonData_1["Sheet1"][i]["RollNo"] = jsonData_1["Sheet1"][i]["RollNo"].toString();
                    jsonData_1["Sheet1"][i]["ParentName"] = jsonData_1["Sheet1"][i]["ParentName"] + '';
                    jsonData_1["Sheet1"][i]["ParentMobileNumber"] = jsonData_1["Sheet1"][i]["ParentMobileNumber"].toString();
                    jsonData_1["Sheet1"][i]["parentEmail"] = jsonData_1["Sheet1"][i]["parentEmail"] + '';
                    jsonData_1["Sheet1"][i]["Address"] = jsonData_1["Sheet1"][i]["Address"].toString();
                    jsonData_1["Sheet1"][i]["City"] = jsonData_1["Sheet1"][i]["City"] + '';
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
    ExcelValidationPage.prototype.sendToServer = function () {
        if (this.dataString.length == 0) {
            this.commonService.presentToast("check your excell file,don't enter blank spaces");
        }
    };
    ExcelValidationPage.prototype.ngOnInit = function () {
    };
    ExcelValidationPage.ctorParameters = function () { return [
        { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
    ]; };
    ExcelValidationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-excel-validation',
            template: __webpack_require__(/*! raw-loader!./excel-validation.page.html */ "./node_modules/raw-loader/index.js!./src/app/skt/excel-validation/excel-validation.page.html"),
            styles: [__webpack_require__(/*! ./excel-validation.page.scss */ "./src/app/skt/excel-validation/excel-validation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], ExcelValidationPage);
    return ExcelValidationPage;
}());



/***/ })

}]);
//# sourceMappingURL=skt-excel-validation-excel-validation-module-es5.js.map