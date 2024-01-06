(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sensorice-advance-payment-sensorice-advance-payment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/sensorice-advance-payment/add-popup/add-popup.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/sensorice-advance-payment/add-popup/add-popup.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Add Process</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-style label-style\">\n  <ion-row class=\"form-field\">\n    <ion-col style=\"margin-top: 15px\">\n      <form [formGroup]=\"addForm\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Date :</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"date\"\n                  formControlName=\"utrdate\"\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">UTR Number :</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  placeholder=\"Enter the Utr No\"\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"utrno\"\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Amt Recharged :</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  placeholder=\"Enter the Amt Recharged\"\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"recharged\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">UTR Remarks :</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  placeholder=\"Enter the Utr Remarks\"\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"remarks\"\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 10px\">\n          <ion-button\n            *ngIf=\"!hideSerialNo\"\n            class=\"button\"\n            type=\"submit\"\n            (click)=\"add()\"\n            [disabled]=\"!addForm.valid\"\n            >Submit\n          </ion-button>\n\n          <ion-button\n            *ngIf=\"hideSerialNo\"\n            class=\"button\"\n            type=\"submit\"\n            (click)=\"edit()\"\n            [disabled]=\"!addForm.valid\"\n            >Edit\n          </ion-button>\n\n          <ion-button class=\"button\" (click)=\"cancelBtn()\" type=\"cancel\"\n            >Cancel</ion-button\n          >\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/sensorice-advance-payment/sensorice-advance-payment.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/sensorice-advance-payment/sensorice-advance-payment.page.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Sensorise Advance Payment</ion-title>\n    <ion-button *ngIf=\"myPlatform == 'desktop'\" slot=\"end\" class=\"submitBtn\" size=\"small\"\n      (click)=\"newfunc()\">Export</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row *ngIf=\"myPlatform != 'desktop'\" class=\"tabrow\">\n    <ion-col class=\"form-field\">\n      <ion-row class=\"form-field\">\n        <div class=\"wrap\">\n          <button (click)=\"getdatas('newcardpurchase')\" [ngClass]=\"{nexttab:true,select:tab=='newcardpurchase'}\"\n            size=\"2.5\">\n            New Card Purchase\n          </button>\n        </div>\n        <div class=\"wrap\">\n          <button (click)=\"getdatas('ca')\" [ngClass]=\"{nexttab:true,select:tab=='ca'}\" size=\"2.5\">\n            CA\n          </button>\n        </div>\n        <div class=\"wrap\">\n          <button (click)=\"getdatas('topup')\" [ngClass]=\"{nexttab:true,select:tab=='topup'}\" size=\"2.5\">\n            Topup\n          </button>\n        </div>\n        <div class=\"wrap\">\n          <button (click)=\"getdatas('renewal')\" [ngClass]=\"{nexttab:true,select:tab=='renewal'}\" size=\"2.5\">\n            Renewal\n          </button>\n        </div>\n\n        <div class=\"wrap\">\n          <button (click)=\"getdatas('suspended')\" [ngClass]=\"{nexttab:true,select:tab=='suspended'}\" size=\"2.5\">\n            Suspended\n          </button>\n        </div>\n\n        <div class=\"wrap\">\n          <button (click)=\"getdatas('pd1sr')\" [ngClass]=\"{nexttab:true,select:tab=='pd1sr'}\" size=\"2.5\">\n            PD 1st SR\n          </button>\n        </div>\n\n        <div class=\"wrap\">\n          <button (click)=\"getdatas('pd2sr')\" [ngClass]=\"{nexttab:true,select:tab=='pd2sr'}\" size=\"2.5\">\n            PD 2st SR\n          </button>\n        </div>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"myPlatform == 'desktop'\" class=\"tabrow\">\n    <ion-col>\n      <ion-row>\n        <div class=\"wrap\">\n          <button (click)=\"getdatas('newcardpurchase')\" [ngClass]=\"{nexttab:true,select:tab=='newcardpurchase'}\">\n            New Card Purchase\n          </button>\n        </div>\n        <div class=\"wrap\">\n          <button (click)=\"getdatas('ca')\" [ngClass]=\"{nexttab:true,select:tab=='ca'}\">\n            CA\n          </button>\n        </div>\n        <div class=\"wrap\">\n          <button (click)=\"getdatas('topup')\" [ngClass]=\"{nexttab:true,select:tab=='topup'}\">\n            Topup\n          </button>\n        </div>\n        <div class=\"wrap\">\n          <button (click)=\"getdatas('renewal')\" [ngClass]=\"{nexttab:true,select:tab=='renewal'}\">\n            Renewal\n          </button>\n        </div>\n\n        <div class=\"wrap\">\n          <button (click)=\"getdatas('suspended')\" [ngClass]=\"{nexttab:true,select:tab=='suspended'}\">\n            Suspended\n          </button>\n        </div>\n\n        <div class=\"wrap\">\n          <button (click)=\"getdatas('pd1sr')\" [ngClass]=\"{nexttab:true,select:tab=='pd1sr'}\">\n            PD 1st SR\n          </button>\n        </div>\n\n        <div class=\"wrap\">\n          <button (click)=\"getdatas('pd2sr')\" [ngClass]=\"{nexttab:true,select:tab=='pd2sr'}\">\n            PD 2st SR\n          </button>\n        </div>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"myPlatform != 'desktop'\" class=\"form-field\">\n    <ion-col class=\"form-field\">\n      <ion-row>\n        <ion-col style=\"margin: 10px 0px 0px; text-align: end\">\n          <ion-button class=\"submitbtn\" (click)=\"addModel()\">Add</ion-button>\n          <ion-button (click)=\"editModel()\">Edit</ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col style=\"margin: 10px 0px 0px\">\n          <ion-label>\n            <span class=\"dealer-label\">Total Balance Amt :</span>\n            <span class=\"dealer-data\">{{balance.BalanceAmount}}</span>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"myPlatform == 'desktop'\" class=\"form-field\">\n    <ion-col style=\"margin: 25px 0px 0px\">\n      <ion-label>\n        <span class=\"dealer-label\">Total Balance Amt :</span>\n        <span class=\"dealer-data\">{{balance.BalanceAmount}}</span>\n      </ion-label>\n    </ion-col>\n    <ion-col style=\"margin: 10px 0px 0px; text-align: end\">\n      <ion-button class=\"submitbtn\" (click)=\"addModel()\">Add</ion-button>\n      <ion-button (click)=\"editModel()\">Edit</ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin-top: 5px\">\n    <ion-col>\n      <jqxGrid #myGrid [theme]=\"'material'\" (onRowclick)=\"myGridOnRowSelect($event)\" [width]=\"'99%'\" [autoheight]=\"true\"\n        [enablebrowserselection]=\"true\" [source]=\"dataAdapter\" [sortable]=\"true\" [filterable]=\"true\" [columns]=\"columns\"\n        [columnsresize]=\"true\" [enabletooltips]=\"true\" [pageable]=\"true\" [showfilterrow]=\"true\" style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \">\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/delar-application/sensorice-advance-payment/add-popup/add-popup.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/delar-application/sensorice-advance-payment/add-popup/add-popup.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  background-color: #7c68f8;\n}\n\n.label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 18px;\n}\n\n.diable-style {\n  background: white;\n  line-height: 18px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #FFEBCD;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2Vuc29yaWNlLWFkdmFuY2UtcGF5bWVudC9hZGQtcG9wdXAvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcc2Vuc29yaWNlLWFkdmFuY2UtcGF5bWVudFxcYWRkLXBvcHVwXFxhZGQtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL3NlbnNvcmljZS1hZHZhbmNlLXBheW1lbnQvYWRkLXBvcHVwL2FkZC1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREdBO0VBQ0k7SUFDSSxTQUFBO0VDQU47O0VER0U7SUFDSSxVQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2Vuc29yaWNlLWFkdmFuY2UtcGF5bWVudC9hZGQtcG9wdXAvYWRkLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3YzY4ZjhcclxufVxyXG5cclxuLmxhYmVsLXN0eWxlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5kaWFibGUtc3R5bGUge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG5cclxuLmNvbnRlbnQtc3R5bGUge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxufVxyXG5cclxuLmNvbC1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbiNhZGQtaWNvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRkVCQ0Q7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjN2M2OGY4O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xyXG4gICAgLmZvcm0tZmllbGQge1xyXG4gICAgICAgIHpvb206IDgwJTtcclxuICAgIH1cclxuXHJcbiAgICAjc3VibWl0YnRuIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW46IC01cHggNXB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuLnNlbGVjdGFibGUtaW5wdXQge1xyXG4gICAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufSIsIi5oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YzY4Zjg7XG59XG5cbi5sYWJlbC1zdHlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uZGlhYmxlLXN0eWxlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uY29udGVudC1zdHlsZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29sLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI2FkZC1pY29uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZFQkNEO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICAtLWJhY2tncm91bmQ6ICM3YzY4Zjg7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/sensorice-advance-payment/add-popup/add-popup.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/delar-application/sensorice-advance-payment/add-popup/add-popup.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AddPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPopupComponent", function() { return AddPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let AddPopupComponent = class AddPopupComponent {
    constructor(platform, formBuilder, modalController, ajaxService, commonService, alertController) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.alertController = alertController;
        this.hideSerialNo = false;
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    edit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var data;
            data = {
                utrdate: this.addForm.value.utrdate,
                utrno: this.addForm.value.utrno,
                id: this.value2.id.toString(),
                totalamount: this.addForm.value.recharged.toString(),
                utrpurpose: this.value2.utrpurpose,
                utrremarks: this.addForm.value.remarks,
                createdby: localStorage.getItem("userName"),
            };
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/sensorise/saveSensoriseAdvancePaymentDetails";
            this.ajaxService.ajaxPostWithString(url, data).subscribe((res) => {
                res = JSON.parse(res);
                if (res.message == "Updated Successfully") {
                    this.commonService.showConfirm(res.message);
                    this.modalController.dismiss({
                        data: "Updated Successfully",
                    });
                }
                else {
                    this.commonService.showConfirm(res.message);
                }
            });
        });
    }
    add() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var data;
            data = {
                utrdate: this.addForm.value.utrdate,
                utrno: this.addForm.value.utrno,
                id: "",
                totalamount: this.addForm.value.recharged.toString(),
                utrpurpose: this.param,
                utrremarks: this.addForm.value.remarks,
                createdby: localStorage.getItem("userName"),
            };
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/sensorise/saveSensoriseAdvancePaymentDetails";
            this.ajaxService.ajaxPostWithString(url, data).subscribe((res) => {
                res = JSON.parse(res);
                if (res.message == "Saved Successfully") {
                    this.commonService.showConfirm(res.message);
                    this.modalController.dismiss({
                        data: "Saved Successfully",
                    });
                }
                else {
                    this.commonService.showConfirm(res.message);
                }
            });
        });
    }
    setValue() {
        this.hideSerialNo = true;
        var slicedDate = this.value2.utrdate.slice(0, 10);
        this.addForm.patchValue({
            utrdate: slicedDate,
            utrno: this.value2.utrno,
            recharged: this.value2.totalamount,
            remarks: this.value2.utrremarks,
        });
    }
    ngOnInit() {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        var todaytime = now.getHours() + ":" + now.getMinutes();
        this.addForm = this.formBuilder.group({
            utrdate: [today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            utrno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            recharged: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            remarks: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        if (Object.keys(this.value2).length != 0) {
            console.log(this.value2);
            this.setValue();
        }
        else {
            // this.clear();
            this.value = {};
        }
    }
};
AddPopupComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddPopupComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddPopupComponent.prototype, "param", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddPopupComponent.prototype, "value2", void 0);
AddPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-popup",
        template: __webpack_require__(/*! raw-loader!./add-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/sensorice-advance-payment/add-popup/add-popup.component.html"),
        styles: [__webpack_require__(/*! ./add-popup.component.scss */ "./src/app/delar-application/sensorice-advance-payment/add-popup/add-popup.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], AddPopupComponent);



/***/ }),

/***/ "./src/app/delar-application/sensorice-advance-payment/sensorice-advance-payment.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/delar-application/sensorice-advance-payment/sensorice-advance-payment.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: SensoriceAdvancePaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensoriceAdvancePaymentPageModule", function() { return SensoriceAdvancePaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sensorice_advance_payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sensorice-advance-payment.page */ "./src/app/delar-application/sensorice-advance-payment/sensorice-advance-payment.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _add_popup_add_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-popup/add-popup.component */ "./src/app/delar-application/sensorice-advance-payment/add-popup/add-popup.component.ts");









const routes = [
    {
        path: '',
        component: _sensorice_advance_payment_page__WEBPACK_IMPORTED_MODULE_6__["SensoriceAdvancePaymentPage"]
    },
    {
        path: 'add-popup',
        component: _add_popup_add_popup_component__WEBPACK_IMPORTED_MODULE_8__["AddPopupComponent"]
    }
];
let SensoriceAdvancePaymentPageModule = class SensoriceAdvancePaymentPageModule {
};
SensoriceAdvancePaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_sensorice_advance_payment_page__WEBPACK_IMPORTED_MODULE_6__["SensoriceAdvancePaymentPage"], _add_popup_add_popup_component__WEBPACK_IMPORTED_MODULE_8__["AddPopupComponent"]]
    })
], SensoriceAdvancePaymentPageModule);



/***/ }),

/***/ "./src/app/delar-application/sensorice-advance-payment/sensorice-advance-payment.page.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/delar-application/sensorice-advance-payment/sensorice-advance-payment.page.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: 0px 5px 0px;\n  border-radius: 7px;\n}\n\n.wrap {\n  margin-left: 10px;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.nexttab {\n  height: 30px;\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  font-size: 10px;\n  letter-spacing: 2.5px;\n  color: #000;\n  background-color: #ebebeb;\n  border: none;\n  border-right: 1px solid #b5b5b5;\n  -webkit-transition: all 0.3s ease 0s;\n  transition: all 0.3s ease 0s;\n  cursor: pointer;\n  -webkit-transform: skew(-21deg);\n          transform: skew(-21deg);\n  margin-left: 2px;\n}\n\n.select {\n  font-size: 10px;\n  font-weight: bold;\n  padding: 10px;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  background-color: #ffffff;\n  -webkit-transform: skew(-21deg);\n          transform: skew(-21deg);\n}\n\n.tabrow {\n  margin-left: 15px;\n  margin-top: 7px;\n  border-bottom: 2px solid #822ef5;\n  background: #ebebeb;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2Vuc29yaWNlLWFkdmFuY2UtcGF5bWVudC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxzZW5zb3JpY2UtYWR2YW5jZS1wYXltZW50XFxzZW5zb3JpY2UtYWR2YW5jZS1wYXltZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2Vuc29yaWNlLWFkdmFuY2UtcGF5bWVudC9zZW5zb3JpY2UtYWR2YW5jZS1wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxnQkFBQTtFQ0NGOztFREVBO0lBQ0UsVUFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLFNBQUE7RUNBRjs7RURHQTtJQUNFLFVBQUE7RUNBRjtBQUNGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBRUEsK0JBQUE7VUFBQSx1QkFBQTtBQ0ZGOztBREtBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBRElBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc2Vuc29yaWNlLWFkdmFuY2UtcGF5bWVudC9zZW5zb3JpY2UtYWR2YW5jZS1wYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJtaXRCdG4ge1xyXG4gIG1hcmdpbjogMHB4IDE0cHggMHB4IDBweDtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjN2M2OGY4O1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgLS1jb2xvcjogIzdjNjhmODtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICM3YzY4Zjg7XHJcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZm9ybS1maWVsZCB7XHJcbiAgICB6b29tOiA4MCU7XHJcbiAgfVxyXG5cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOiAwcHggNXB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbi53cmFwIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubmV4dHRhYiB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAyLjVweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYjViNWI1O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2Zvcm06IHNrZXcoLTIxZGVnKTtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG59XHJcblxyXG4uc2VsZWN0IHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3gtc2hhZG93OiAwcHggLTRweCA3cHggI2MwYjVmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3cHgpO1xyXG4gIHRyYW5zZm9ybTogc2tldygtMjFkZWcpO1xyXG59XHJcblxyXG4udGFicm93IHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4MjJlZjU7XHJcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcclxufVxyXG4uZGVhbGVyLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiIsIi5zdWJtaXRCdG4ge1xuICBtYXJnaW46IDBweCAxNHB4IDBweCAwcHg7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IDBweCA1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi53cmFwIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5uZXh0dGFiIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMi41cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiNWI1YjU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHNrZXcoLTIxZGVnKTtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbn1cblxuLnNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAtNHB4IDdweCAjYzBiNWZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0cmFuc2Zvcm06IHNrZXcoLTIxZGVnKTtcbn1cblxuLnRhYnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODIyZWY1O1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xufVxuXG4uZGVhbGVyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/sensorice-advance-payment/sensorice-advance-payment.page.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/delar-application/sensorice-advance-payment/sensorice-advance-payment.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: SensoriceAdvancePaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensoriceAdvancePaymentPage", function() { return SensoriceAdvancePaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _add_popup_add_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-popup/add-popup.component */ "./src/app/delar-application/sensorice-advance-payment/add-popup/add-popup.component.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");









let SensoriceAdvancePaymentPage = class SensoriceAdvancePaymentPage {
    constructor(platform, formBuilder, modalController, alertController, commonService, ajaxService, ete) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.ete = ete;
        this.selectedRow = [];
        this.showButton = true;
        this.data = "";
        this.tab = "newcardpurchase";
        this.balance = [];
    }
    createForm() {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        var todaytime = now.getHours() + ":" + now.getMinutes();
        this.PurchaseForm = this.formBuilder.group({
            serviceprovider: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            invoicenumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            invoicedate: [today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            invoiceamount: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            totalquantity: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            invoicedocument: [""],
        });
    }
    addModel(row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const isModalOpened = yield this.modalController.getTop();
            const modal = yield this.modalController.create({
                component: _add_popup_add_popup_component__WEBPACK_IMPORTED_MODULE_7__["AddPopupComponent"],
                cssClass: "saleform",
                componentProps: {
                    value: this.selectedRow,
                    param: this.tab,
                },
            });
            modal.onDidDismiss().then((data) => {
                if (data.data.data == "Saved Successfully") {
                    this.data = data.data.data;
                    this.selectedRow = "";
                    this.getdatas(this.tab);
                }
            });
            return yield modal.present();
        });
    }
    editModel(row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.selectedRow != "") {
                const isModalOpened = yield this.modalController.getTop();
                const modal = yield this.modalController.create({
                    component: _add_popup_add_popup_component__WEBPACK_IMPORTED_MODULE_7__["AddPopupComponent"],
                    cssClass: "saleform",
                    componentProps: {
                        value2: this.selectedRow,
                    },
                });
                modal.onDidDismiss().then((data) => {
                    this.myGrid.clearselection();
                    this.selectedRow = "";
                    if (data.data.data == "Updated Successfully") {
                        this.data = data.data.data;
                        this.getdatas();
                    }
                });
                return yield modal.present();
            }
            else {
                this.commonService.presentToast("Please select a row to Edit");
                return "";
            }
        });
    }
    balanceamt() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/sensorise/getSensoriseAdvanceBalanceAmount?purpose=" +
            this.tab;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.balance = res;
            console.log(res);
        });
    }
    getdatas(d) {
        if (d == undefined) {
            this.tab = "newcardpurchase";
            this.balanceamt();
        }
        else {
            this.tab = d;
            this.balanceamt();
        }
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/sensorise/getSensoriseAdvancePaymentDetailsByPurpose?purpose=" +
            this.tab;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.tableData = res;
            this.commonService.dismissLoader();
            this.renderer = (row, column, value) => {
                if (value == "" || null || undefined) {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                        0 +
                        "</span>");
                }
                else {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                        value +
                        "</span>");
                }
            };
            this.source = { localdata: this.tableData };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            this.columns = [
                {
                    text: "Date",
                    datafield: "utrdate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 185,
                },
                {
                    text: "UTR Number",
                    datafield: "utrno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 185,
                },
                {
                    text: "Amt Recharged",
                    datafield: "totalamount",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 185,
                },
                {
                    text: "Used Amount",
                    datafield: "amountused",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 185,
                },
                {
                    text: "Balance Amount",
                    datafield: "balanceamount",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 185,
                },
                {
                    text: "UTR Remarks",
                    datafield: "utrremarks",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 185,
                },
            ];
        });
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row.bounddata;
    }
    newfunc() {
        let data = this.tableData;
        console.log(this.myGrid);
        let coloumnArray = [];
        this.myGrid.attrColumns.map((p) => {
            coloumnArray.push(p.datafield);
        });
        for (let i = 0; i < data.length; i++) {
            let k = Object.keys(data[i]);
            for (let j = 0; j < k.length; j++) {
                if (coloumnArray.includes(k[j]) == false) {
                    delete data[i][k[j].toString()];
                }
            }
        }
        let forExcel = [];
        data.map((val) => {
            let newArray = Object.values(val);
            forExcel.push(newArray);
        });
        var Header = Object.keys(data[0]);
        let reportData = {
            title: "Sensorise Advance Payment",
            data: forExcel,
            headers: Header,
        };
        this.ete.exportExcel(reportData);
    }
    ngAfterViewInit() {
        this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.createForm();
    }
    ionViewWillEnter() {
        this.getdatas();
    }
};
SensoriceAdvancePaymentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExportExcelService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SensoriceAdvancePaymentPage.prototype, "myGrid", void 0);
SensoriceAdvancePaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sensorice-advance-payment",
        template: __webpack_require__(/*! raw-loader!./sensorice-advance-payment.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/sensorice-advance-payment/sensorice-advance-payment.page.html"),
        styles: [__webpack_require__(/*! ./sensorice-advance-payment.page.scss */ "./src/app/delar-application/sensorice-advance-payment/sensorice-advance-payment.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExportExcelService"]])
], SensoriceAdvancePaymentPage);



/***/ })

}]);
//# sourceMappingURL=sensorice-advance-payment-sensorice-advance-payment-module-es2015.js.map