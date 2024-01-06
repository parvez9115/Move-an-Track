(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["diagnosis-diagnosis-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/diagnosis/diagnosis.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/diagnosis/diagnosis.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class='header'>\r\n  <ion-toolbar>\r\n      <ion-grid>\r\n          <ion-row></ion-row>\r\n          <ion-row>\r\n              <ion-col size='2'>\r\n                  <ion-menu-button></ion-menu-button>\r\n              </ion-col>\r\n              <ion-col size='8.5' style='align-self: center;'>\r\n                  <ion-row>\r\n                      <ion-label> Diagnosis </ion-label>\r\n                  </ion-row>\r\n              </ion-col>\r\n              <ion-col size='1.5' style=\"padding: 0px;\">\r\n                      <ion-img [src]=\"app.logo\"></ion-img>\r\n              </ion-col>\r\n          </ion-row>\r\n      </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<app-vts-diagnosis></app-vts-diagnosis>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/diagnosis/vts-diagnosis/vts-diagnosis.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/diagnosis/vts-diagnosis/vts-diagnosis.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-row>\r\n  <ion-col size=\"6\">\r\n    <ion-card>\r\n      <ion-card-header>\r\n        \r\n        <ion-row style=\"margin-left: 20%;\r\n        margin-top: 3%;\">\r\n    <ion-col  size=\"6\" >   <ion-searchbar showCancelButton searchIcon=\"search\" animated cancel-button-icon (ionChange)=\"hide($event)\" (ionCancel)=\"hideSearch()\" style=\"width: 125%;margin-left: -57px;\"    [(ngModel)]=\"searchTerm\" placeholder=\"enter your imei\" ></ion-searchbar></ion-col>\r\n    <!-- <ion-col  size=\"6\" style=\"border: 1px solid grey;\"><ion-input placeholder=\"Enter the ImeiNo\" (ionChange)=\"hide()\" [(ngModel)]=\"imeiNo\"></ion-input></ion-col> -->\r\n      <ion-col size=\"4\" ><ion-button (click)=\"submit()\" [disabled]='show'>Submit</ion-button></ion-col>\r\n      </ion-row>\r\n\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        \r\n        <ion-row *ngFor='let imei of imei' style=\"margin-left: 20%;\r\n        margin-top: 3%;\" >\r\n          <ion-col size=\"12\" size-lg=\"6\" class='input-label' (click)=\"submit(imei)\">\r\n              <ion-label >{{imei}}</ion-label>\r\n          </ion-col>\r\n          \r\n        </ion-row>\r\n      </ion-card-content> \r\n    </ion-card>\r\n  </ion-col>\r\n  <ion-col size=\"6\">\r\n    <ion-card>\r\n      <ion-card-header>\r\n      <ion-card>\r\n        <ion-row style=\"margin-left: 20%;\r\n        margin-top: 3%;\"><ion-col size=\"12\">{{data.rawData}}</ion-col>\r\n        \r\n      </ion-row>\r\n    </ion-card>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-row *ngFor='let details of data.packetItems'>\r\n          <ion-col size=\"6\" size-lg=\"6\" class='input-label'>\r\n              <ion-label>{{details.packetName}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\" size-lg=\"6\" size-sm=\"12\" size-md=\"6\" size-sm=\"8\">\r\n            <ion-item class=\"input-item\" >\r\n            <ion-label  *ngIf='details.packetValue != \"yes\" && details.packetValue != \"no\"'>{{details.packetValue}}\r\n            </ion-label>\r\n          \r\n      <ion-label *ngIf=\"details.packetValue == 'yes'\"> <ion-icon name=\"checkmark-circle\" style=\"color:green\" ></ion-icon></ion-label>\r\n           \r\n        \r\n       <ion-label  *ngIf=\"details.packetValue == 'no'\"><ion-icon name=\"close-circle\" style=\"color:red\" ></ion-icon></ion-label>\r\n      \r\n        </ion-item>\r\n        </ion-col>\r\n        </ion-row>\r\n      </ion-card-content> \r\n    </ion-card>\r\n\r\n\r\n\r\n  </ion-col>\r\n</ion-row>\r\n"

/***/ }),

/***/ "./src/app/diagnosis/diagnosis.module.ts":
/*!***********************************************!*\
  !*** ./src/app/diagnosis/diagnosis.module.ts ***!
  \***********************************************/
/*! exports provided: DiagnosisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosisPageModule", function() { return DiagnosisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vts_diagnosis_vts_diagnosis_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vts-diagnosis/vts-diagnosis.component */ "./src/app/diagnosis/vts-diagnosis/vts-diagnosis.component.ts");
/* harmony import */ var _diagnosis_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./diagnosis.page */ "./src/app/diagnosis/diagnosis.page.ts");








const routes = [
    {
        path: '',
        component: _diagnosis_page__WEBPACK_IMPORTED_MODULE_7__["DiagnosisPage"]
    }
];
let DiagnosisPageModule = class DiagnosisPageModule {
};
DiagnosisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_diagnosis_page__WEBPACK_IMPORTED_MODULE_7__["DiagnosisPage"], _vts_diagnosis_vts_diagnosis_component__WEBPACK_IMPORTED_MODULE_6__["VtsDiagnosisComponent"]]
    })
], DiagnosisPageModule);



/***/ }),

/***/ "./src/app/diagnosis/diagnosis.page.scss":
/*!***********************************************!*\
  !*** ./src/app/diagnosis/diagnosis.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWdub3Npcy9kaWFnbm9zaXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/diagnosis/diagnosis.page.ts":
/*!*********************************************!*\
  !*** ./src/app/diagnosis/diagnosis.page.ts ***!
  \*********************************************/
/*! exports provided: DiagnosisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosisPage", function() { return DiagnosisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let DiagnosisPage = class DiagnosisPage {
    constructor(platform) {
        this.platform = platform;
        this.app = { logo: 'logo.png' };
    }
    ngOnInit() {
        this.app["logo"] = localStorage.companyLogo;
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
    }
};
DiagnosisPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
DiagnosisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-diagnosis',
        template: __webpack_require__(/*! raw-loader!./diagnosis.page.html */ "./node_modules/raw-loader/index.js!./src/app/diagnosis/diagnosis.page.html"),
        styles: [__webpack_require__(/*! ./diagnosis.page.scss */ "./src/app/diagnosis/diagnosis.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], DiagnosisPage);



/***/ }),

/***/ "./src/app/diagnosis/vts-diagnosis/vts-diagnosis.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/diagnosis/vts-diagnosis/vts-diagnosis.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-item {\n  border: 1px;\n  border-radius: 5px;\n  height: 40px;\n  line-height: 19px;\n}\n\n.input-label {\n  text-align: center;\n  font-size: 20px;\n  padding-top: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhZ25vc2lzL3Z0cy1kaWFnbm9zaXMvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkaWFnbm9zaXNcXHZ0cy1kaWFnbm9zaXNcXHZ0cy1kaWFnbm9zaXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RpYWdub3Npcy92dHMtZGlhZ25vc2lzL3Z0cy1kaWFnbm9zaXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQUEiLCJmaWxlIjoic3JjL2FwcC9kaWFnbm9zaXMvdnRzLWRpYWdub3Npcy92dHMtZGlhZ25vc2lzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWl0ZW17XHJcbiAgICAvLyBib3JkZXI6MXB4IHNvbGlkICNmM2UzZjY7XHJcbiAgICBib3JkZXI6MXB4ICA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIFxyXG59ICAgXHJcbi5pbnB1dC1sYWJlbHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5mb250LXNpemU6IDIwcHg7XHJcbnBhZGRpbmctdG9wOiAxNHB4O1xyXG59IiwiLmlucHV0LWl0ZW0ge1xuICBib3JkZXI6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuXG4uaW5wdXQtbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/diagnosis/vts-diagnosis/vts-diagnosis.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/diagnosis/vts-diagnosis/vts-diagnosis.component.ts ***!
  \********************************************************************/
/*! exports provided: VtsDiagnosisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VtsDiagnosisComponent", function() { return VtsDiagnosisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let VtsDiagnosisComponent = class VtsDiagnosisComponent {
    constructor(ajaxService, commonService) {
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.dat = "$,500,869247046192016,89910473121803851084,1,0,1,*";
        this.show = true;
        this.colors = ['sfas', 'asefas', 'sdf', 'safsafesa', 'asefaf'];
        // hide(){
        // }
        this.data = '';
        this.imei = ["866551036278671", "866551036278672", "866551036278673", "866551036278674"];
        // imei=[];
        this.isItemAvailable = false;
        this.items = [];
    }
    submit(imei) {
        this.imeiNo = imei;
        this.show = false;
        const body = {
            "imeiNo": this.imeiNo
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + '/simcard/get/Diagnosis';
        this.ajaxService.ajaxPostWithBody(url, body)
            .subscribe(res => {
            this.data = JSON.parse(res);
            //  this.showDatas = res.split(",");
            //  this.showDatas =["$", "500", "869247046192016", "89910473121803851084", "1", "0", "1", "*"]
            console.log(res);
            // if(this.data.ra)
        });
    }
    initializeItems() {
        this.imei;
    }
    hide(ev) {
        if (ev.target.value.length == 15) {
            this.show = false;
        }
        else {
            this.show = true;
            this.data = "";
        }
        this.initializeItems();
        // set val to the value of the searchbar
        const val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() !== '') {
            this.isItemAvailable = true;
            this.imei = this.imei.filter((item) => {
                return (item.indexOf(val) > -1);
            });
        }
        else {
            this.isItemAvailable = false;
            this.getImei();
        }
    }
    getImei() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + '/simcard/get/imei/list';
        this.ajaxService.ajaxGetWithString(url)
            .subscribe(res => {
            this.imei = JSON.parse(res);
            //  this.showDatas = res.split(",");
            //  this.showDatas =["$", "500", "869247046192016", "89910473121803851084", "1", "0", "1", "*"]
            console.log(res);
        });
    }
    ngOnInit() {
        this.getImei();
    }
};
VtsDiagnosisComponent.ctorParameters = () => [
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
VtsDiagnosisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vts-diagnosis',
        template: __webpack_require__(/*! raw-loader!./vts-diagnosis.component.html */ "./node_modules/raw-loader/index.js!./src/app/diagnosis/vts-diagnosis/vts-diagnosis.component.html"),
        styles: [__webpack_require__(/*! ./vts-diagnosis.component.scss */ "./src/app/diagnosis/vts-diagnosis/vts-diagnosis.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
], VtsDiagnosisComponent);



/***/ })

}]);
//# sourceMappingURL=diagnosis-diagnosis-module-es2015.js.map