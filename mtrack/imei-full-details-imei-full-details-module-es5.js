(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["imei-full-details-imei-full-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/imei-full-details/imei-full-details.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/imei-full-details/imei-full-details.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-title>IMEI Details </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"form-field\">\n    <ion-col>\n      <form [formGroup]=\"imeidetailsForm\">\n        <ion-row style=\"text-align: center\">\n          <ion-col size=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\n            <ion-item>\n              <ion-label\n                position=\"floating\"\n                style=\"color: blue; font-weight: lighter\"\n              >\n                IMEI No or ICCID No :</ion-label\n              >\n              <ion-input formControlName=\"imeino\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-sm=\"4\" size-lg=\"4\" size-md=\"4\">\n            <ion-button\n              (click)=\"submit()\"\n              id=\"submitbtn\"\n              [disabled]=\"!imeidetailsForm.valid\"\n              >Submit</ion-button\n            >\n            <ion-button\n              (click)=\"clear()\"\n              type=\"reset\"\n              id=\"submitbtn\"\n              [disabled]=\"!imeidetailsForm.valid\"\n              >Clear</ion-button\n            >\n          </ion-col></ion-row\n        >\n        <div *ngIf=\"myPlatform == 'desktop'&&show\" class=\"form-fields\">\n          <!-- 1 -->\n          <ion-row>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>IMEI No </ion-label>\n            </ion-col>\n            <ion-col size=\"3\">: {{imeidetails.imeiNo}} </ion-col>\n            <ion-col size=\"1\"></ion-col>\n\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Make </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.manufacturer}}</ion-col>\n            <ion-col size=\"1\"></ion-col>\n\n            <!-- <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Date of Purchase </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.dateOfPurchase}} </ion-col> -->\n          </ion-row>\n\n          <!-- 2 -->\n          <ion-row>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>ICCID 1 </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.iccidNo1}}</ion-col>\n            <ion-col size=\"1\"></ion-col>\n\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Model </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.model}}</ion-col>\n            <ion-col size=\"1\"></ion-col>\n\n            <!-- <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Warrenty Expiry Date</ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.warrentyExpiryDate}}</ion-col> -->\n          </ion-row>\n\n          <!-- 3 -->\n\n          <ion-row>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>ICCID 2 </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.iccidNo2}}</ion-col>\n            <ion-col size=\"1\"></ion-col>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Card Activation Date </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.activationDate}}</ion-col>\n          </ion-row>\n\n          <!-- 4 -->\n\n          <ion-row>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Sim 1 </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.simNo1}}</ion-col>\n            <ion-col size=\"1\"></ion-col>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Card End Date </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.cardEndDate}}</ion-col>\n          </ion-row>\n\n          <!-- 5 -->\n          <ion-row>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Sim 2 </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.simNo2}}</ion-col>\n            <ion-col size=\"1\"></ion-col>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Card Status </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.cardStatus}}</ion-col>\n          </ion-row>\n\n          <!-- 6 -->\n          <ion-row>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>IMSI 1 </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.imsiNo1}}</ion-col>\n            <ion-col size=\"1\"></ion-col>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Created Date </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.createdDate}}</ion-col>\n            <!-- <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Comment </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.comment}}</ion-col> -->\n          </ion-row>\n\n          <!-- 7 -->\n\n          <ion-row>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>IMSI 2 </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.imsiNo2}}</ion-col>\n            <ion-col size=\"1\"></ion-col>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Company Name </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.companyName}}</ion-col>\n          </ion-row>\n          <!-- 8 -->\n\n          <ion-row>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Provider 1 </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.provider1}}</ion-col>\n            <ion-col size=\"1\"></ion-col>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Driver Name </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.driverName}}</ion-col>\n          </ion-row>\n          <!-- 9 -->\n\n          <ion-row>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Provider 2 </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.provider2}}</ion-col>\n            <ion-col size=\"1\"></ion-col>\n\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Driver Contact No </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.driverNumber}}</ion-col>\n          </ion-row>\n\n          <!-- 10 -->\n\n          <ion-row>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>VLTD No </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.vltdsNo}}</ion-col>\n            <ion-col size=\"1\"></ion-col>\n\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Current Speed </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.speed}}</ion-col>\n          </ion-row>\n\n          <!-- 11 -->\n\n          <ion-row>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Box No </ion-label>\n            </ion-col>\n            <ion-col size=\"3\">: {{imeidetails.serialNo}}</ion-col>\n            <ion-col size=\"1\"></ion-col>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Today Odometer </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.todayOdometer}}</ion-col>\n          </ion-row>\n\n          <!-- 12 -->\n\n          <ion-row>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Slot No </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.slotNo}}</ion-col>\n            <ion-col size=\"1\"></ion-col>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Status </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.status}}</ion-col>\n          </ion-row>\n\n          <!-- 13 -->\n\n          <ion-row>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Plate No </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.plateNo}}</ion-col>\n            <ion-col size=\"1\"></ion-col>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Raw Data Date & Time </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.eventTime}}</ion-col>\n          </ion-row>\n\n          <!-- 14 -->\n\n          <ion-row>\n            <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Dealer Name </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.providerName}}</ion-col>\n            <!-- <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Make </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.manufacturer}}</ion-col>\n            <ion-col size=\"1\"></ion-col> -->\n            <ion-col size=\"1\"></ion-col>\n            <!-- <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Created Date </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.createdDate}}</ion-col> -->\n          </ion-row>\n\n          <!-- 15 -->\n\n          <ion-row>\n            <!-- <ion-col size=\"2\" style=\"align-self: center\">\n              <ion-label>Model </ion-label> </ion-col\n            ><ion-col size=\"3\">: {{imeidetails.model}}</ion-col>\n            <ion-col size=\"1\"></ion-col> -->\n          </ion-row>\n        </div>\n        <div *ngIf=\"myPlatform != 'desktop'&&show\" class=\"form-fields\">\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>IMEI No </ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.imeiNo}} </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>ICCID 1</ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.iccidNo1}} </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>ICCID 2 </ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.iccidNo2}} </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>Sim 1</ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.simNo1}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>Sim 2 </ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.simNo2}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>IMSI 1</ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.imsiNo1}} </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>IMSI 2</ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.imsiNo2}} </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>Provider 1 </ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.provider1}} </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>Provider 2</ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.provider2}} </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>VLTD No </ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.vltdsNo}} </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>Box No</ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.serialNo}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>Slot No</ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.slotNo}} </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>Plate No </ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.plateNo}} </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>Dealer Name</ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.providerName}} </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>Make </ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.manufacturer}} </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>Model </ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.model}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>Card Activation Date</ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.activationDate}} </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>Card End Date</ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.cardEndDate}} </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>Card Status </ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.cardStatus}} </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>Created Date </ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.createdDate}} </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>Company Name </ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.companyName}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>Driver Name </ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.driverName}} </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>Driver Contact No</ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.driverNumber}} </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>Current Speed</ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.speed}} </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>Today Odometer </ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.todayOdometer}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>Status </ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.status}} </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" style=\"align-self: center\">\n              <ion-label>Raw Data Date & Time </ion-label>\n            </ion-col>\n            <ion-col size=\"7\">: {{imeidetails.eventTime}} </ion-col>\n          </ion-row>\n        </div>\n      </form>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"padding: 10px\" *ngIf=\"show\">\n    <ion-row>\n      <ion-col>\n        <h6>Device Status History :</h6>\n      </ion-col>\n    </ion-row>\n\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        [theme]=\"'material'\"\n        (onRowclick)=\"myGridOnRowclick($event)\"\n        [enablebrowserselection]=\"true\"\n        [pagesizeoptions]=\"page\"\n        [width]=\"'99.5%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [columns]=\"columns\"\n        [filterable]=\"true\"\n        [sortable]=\"true\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n        [columns]=\"columns\"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/imei-full-details/imei-full-details.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/delar-application/imei-full-details/imei-full-details.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ImeiFullDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImeiFullDetailsPageModule", function() { return ImeiFullDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _imei_full_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imei-full-details.page */ "./src/app/delar-application/imei-full-details/imei-full-details.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");








var routes = [
    {
        path: "",
        component: _imei_full_details_page__WEBPACK_IMPORTED_MODULE_6__["ImeiFullDetailsPage"],
    },
];
var ImeiFullDetailsPageModule = /** @class */ (function () {
    function ImeiFullDetailsPageModule() {
    }
    ImeiFullDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_imei_full_details_page__WEBPACK_IMPORTED_MODULE_6__["ImeiFullDetailsPage"]],
        })
    ], ImeiFullDetailsPageModule);
    return ImeiFullDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/imei-full-details/imei-full-details.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/delar-application/imei-full-details/imei-full-details.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-field {\n  padding-left: 5px;\n}\n\n@media only screen and (min-width: 10px) and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n    margin: 5% auto 3px;\n  }\n\n  #submitbtn {\n    width: 40%;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .form-field {\n    margin: 3% auto 5px;\n    padding: 0px 20px;\n  }\n\n  #submitbtn {\n    width: 38%;\n  }\n}\n\n#submitbtn {\n  --background: #6252ee !important;\n}\n\n.form-fields {\n  padding: 15px;\n}\n\nion-label {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vaW1laS1mdWxsLWRldGFpbHMvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcaW1laS1mdWxsLWRldGFpbHNcXGltZWktZnVsbC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vaW1laS1mdWxsLWRldGFpbHMvaW1laS1mdWxsLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURDQTtFQUNFO0lBQ0UsU0FBQTtJQUNBLG1CQUFBO0VDRUY7O0VEQUE7SUFDRSxVQUFBO0VDR0Y7QUFDRjs7QUREQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxpQkFBQTtFQ0dGOztFREFBO0lBQ0UsVUFBQTtFQ0dGO0FBQ0Y7O0FEREE7RUFDRSxnQ0FBQTtBQ0dGOztBRERBO0VBQ0UsYUFBQTtBQ0lGOztBRERBO0VBQ0UsaUJBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2ltZWktZnVsbC1kZXRhaWxzL2ltZWktZnVsbC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWZpZWxkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDoxMHB4KSBhbmQobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgem9vbTogODAlO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvIDNweDtcclxuICB9XHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luOiAzJSBhdXRvIDVweDtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gIH1cclxuXHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogMzglO1xyXG4gIH1cclxufVxyXG4jc3VibWl0YnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICM2MjUyZWUgIWltcG9ydGFudDtcclxufVxyXG4uZm9ybS1maWVsZHMge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIiwiLmZvcm0tZmllbGQge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgICBtYXJnaW46IDUlIGF1dG8gM3B4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgbWFyZ2luOiAzJSBhdXRvIDVweDtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiAzOCU7XG4gIH1cbn1cbiNzdWJtaXRidG4ge1xuICAtLWJhY2tncm91bmQ6ICM2MjUyZWUgIWltcG9ydGFudDtcbn1cblxuLmZvcm0tZmllbGRzIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/imei-full-details/imei-full-details.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/delar-application/imei-full-details/imei-full-details.page.ts ***!
  \*******************************************************************************/
/*! exports provided: ImeiFullDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImeiFullDetailsPage", function() { return ImeiFullDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var ImeiFullDetailsPage = /** @class */ (function () {
    function ImeiFullDetailsPage(platform, formBuilder, ajaxService, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.show = false;
    }
    ImeiFullDetailsPage.prototype.submit = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/global/getAllImeiNoDetails?imeiNo=" +
            this.imeidetailsForm.value.imeino +
            "&dealer=" +
            localStorage.getItem("userId");
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            if (res.message == "No Record Found.") {
                _this.show = false;
                _this.commonService.dismissLoader();
                _this.commonService.showConfirm("No Record Found.");
            }
            else {
                _this.imeidetails = res;
                _this.SearchData();
            }
        });
    };
    ImeiFullDetailsPage.prototype.SearchData = function () {
        var _this = this;
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/esim/getEsimActivationDetails?imei=" +
            this.imeidetailsForm.value.imeino;
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.tableData = res;
            _this.commonService.dismissLoader();
            _this.show = true;
            console.log(_this.myGrid);
            _this.renderer = function (row, column, value) {
                if (value == "" || null || undefined || value == ",") {
                    return "---";
                }
                else {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                        value +
                        "</span>");
                }
            };
            _this.source = { localdata: _this.tableData };
            _this.dataAdapter = new jqx.dataAdapter(_this.source);
            _this.columns = [
                {
                    text: "Request No",
                    datafield: "requestid",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 90,
                    editable: true,
                },
                {
                    text: "Request Date",
                    datafield: "requestdate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                    editable: true,
                },
                {
                    text: "Request Dealer",
                    datafield: "requesteddealer",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                    editable: true,
                },
                {
                    text: "Invoice No",
                    datafield: "invoiceno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                    editable: true,
                },
                {
                    text: "IMEI No",
                    datafield: "imei",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
                    editable: true,
                },
                {
                    text: "Card Activated Date",
                    datafield: "commercialactivationdate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                    editable: true,
                },
                {
                    text: "Card End Date",
                    datafield: "cardenddate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                    editable: true,
                },
                {
                    text: "Card Status",
                    datafield: "cardstatus",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                    editable: true,
                },
                {
                    text: "Comment",
                    datafield: "latestcomment",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                    editable: true,
                },
            ];
        });
    };
    ImeiFullDetailsPage.prototype.clear = function () {
        this.imeidetailsForm.patchValue({
            imeino: "",
        });
        this.show = false;
    };
    // ngAfterViewInit() {
    //   this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
    // }
    ImeiFullDetailsPage.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.imeidetailsForm = this.formBuilder.group({
            imeino: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    ImeiFullDetailsPage.prototype.ionViewWillEnter = function () {
        this.imeidetailsForm.reset();
        this.clear();
    };
    ImeiFullDetailsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
    ], ImeiFullDetailsPage.prototype, "myGrid", void 0);
    ImeiFullDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-imei-full-details",
            template: __webpack_require__(/*! raw-loader!./imei-full-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/imei-full-details/imei-full-details.page.html"),
            styles: [__webpack_require__(/*! ./imei-full-details.page.scss */ "./src/app/delar-application/imei-full-details/imei-full-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], ImeiFullDetailsPage);
    return ImeiFullDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=imei-full-details-imei-full-details-module-es5.js.map