(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["whitelisting-master-detail-whitelisting-master-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/whitelisting-master-detail/add-dealer-details/add-dealer-details.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/whitelisting-master-detail/add-dealer-details/add-dealer-details.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon (click)=\"cancelBtn()\" name=\"arrow-back\" style=\"padding: 10px\" slot=\"start\"></ion-icon>\n    </ion-buttons>\n    <ion-title>Add Process</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-style label-style\">\n  <ion-row class=\"form-field\">\n    <ion-col style=\"margin-top: 15px\">\n      <form [formGroup]=\"addForm\">\n        <ion-row>\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col>\n                <ion-label class=\"label-head\">Dealer:</ion-label>\n\n                <ionic-selectable class=\"input selectable-input\" placeholder=\"Select the Dealer\"\n                  formControlName=\"dealername\" [items]=\"dealerlist\" [canSearch]=\"true\" [hasVirtualScroll]=\"true\">\n                </ionic-selectable>\n              </ion-col>\n              <ion-col>\n                <ion-label class=\"label-head\">Group Id:</ion-label>\n                <ion-input placeholder=\"Enter the Group Id\" class=\"label-style\" type=\"number\" formControlName=\"grpid\">\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col>\n                <ion-label class=\"label-head\">IP’s/Domain/URL’s1:</ion-label>\n                <ion-input placeholder=\"\" class=\"label-style\" type=\"text\" formControlName=\"urls1\">\n                </ion-input>\n              </ion-col>\n              <ion-col>\n                <ion-label class=\"label-head\">IP’s/Domain/URL’s2:</ion-label>\n                <ion-input placeholder=\"\" class=\"label-style\" type=\"text\" formControlName=\"urls2\">\n                </ion-input>\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col>\n                <ion-label class=\"label-head\">IP’s/Domain/URL’s3:</ion-label>\n                <ion-input placeholder=\"\" class=\"label-style\" type=\"text\" formControlName=\"urls3\">\n                </ion-input>\n              </ion-col>\n              <ion-col>\n                <ion-label class=\"label-head\">IP’s/Domain/URL’s4:</ion-label>\n                <ion-input placeholder=\"\" class=\"label-style\" type=\"text\" formControlName=\"urls4\">\n                </ion-input>\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col>\n                <ion-label class=\"label-head\">Admin MSSIDN 1: AIRTEL:</ion-label>\n                <ion-input placeholder=\"\" class=\"label-style\" type=\"text\" formControlName=\"airtel1\">\n                </ion-input>\n              </ion-col>\n              <ion-col>\n                <ion-label class=\"label-head\">Admin MSSIDN 2: AIRTEL:</ion-label>\n                <ion-input placeholder=\"\" class=\"label-style\" type=\"text\" formControlName=\"airtel2\">\n                </ion-input>\n              </ion-col>\n\n            </ion-row>\n            <ion-row class=\"content-style\">\n              <ion-col>\n                <ion-label class=\"label-head\">Admin MSSIDN 3: AIRTEL:</ion-label>\n                <ion-input placeholder=\"\" class=\"label-style\" type=\"text\" formControlName=\"airtel3\">\n                </ion-input>\n              </ion-col>\n              <ion-col>\n                <ion-label class=\"label-head\">Admin MSSIDN 1: BSNL:</ion-label>\n                <ion-input placeholder=\"\" class=\"label-style\" type=\"text\" formControlName=\"bsnl1\">\n                </ion-input>\n              </ion-col>\n\n            </ion-row>\n            <ion-row class=\"content-style\">\n              <ion-col>\n                <ion-label class=\"label-head\">Admin MSSIDN 2: BSNL:</ion-label>\n                <ion-input placeholder=\"\" class=\"label-style\" type=\"text\" formControlName=\"bsnl2\">\n                </ion-input>\n              </ion-col>\n              <ion-col>\n                <ion-label class=\"label-head\">Admin MSSIDN 3: BSNL:</ion-label>\n                <ion-input placeholder=\"\" class=\"label-style\" type=\"text\" formControlName=\"bsnl3\">\n                </ion-input>\n              </ion-col>\n\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 10px\">\n          <ion-button *ngIf=\"!hideSerialNo\" class=\"button\" type=\"submit\" (click)=\"add()\"\n            [disabled]=\"!addForm.valid\">Submit\n          </ion-button>\n\n          <ion-button *ngIf=\"hideSerialNo\" class=\"button\" type=\"submit\" (click)=\"edit()\"\n            [disabled]=\"!addForm.valid\">Edit\n          </ion-button>\n\n          <ion-button class=\"button\" (click)=\"cancelBtn()\" type=\"cancel\">Cancel</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/whitelisting-master-detail/whitelisting-master-detail.page.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/whitelisting-master-detail/whitelisting-master-detail.page.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-row>\n      <ion-title>Whitelisting Master Detail</ion-title>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row *ngIf=\"myPlatform == 'desktop'\" class=\"tabrow\">\n    <ion-col>\n      <ion-row>\n        <div class=\"wrap\">\n          <button (click)=\"getdatas('Sensorise')\" [ngClass]=\"{nexttab:true,select:tab=='Sensorise'}\">\n            Sensorise\n          </button>\n        </div>\n        <div class=\"wrap\">\n          <button (click)=\"getdatas('Techno Jacks')\" [ngClass]=\"{nexttab:true,select:tab=='Techno Jacks'}\">\n            Techno Jacks\n          </button>\n        </div>\n        <div class=\"wrap\">\n          <button (click)=\"getdatas('Airtel M2M')\" [ngClass]=\"{nexttab:true,select:tab=='Airtel M2M'}\">\n            Airtel M2M\n          </button>\n        </div>\n        <div class=\"wrap\">\n          <button (click)=\"getdatas('Intalia')\" [ngClass]=\"{nexttab:true,select:tab=='Intalia'}\">\n            Intalia\n          </button>\n        </div>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"myPlatform == 'desktop'&& tab == 'Sensorise' \" class=\"form-field\">\n    <ion-col style=\"margin: 10px 0px 0px; text-align: end\">\n      <ion-button class=\"submitbtn\" (click)=\"addModel()\">Add</ion-button>\n      <ion-button (click)=\"editModel()\">Edit</ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin-top: 5px\" *ngIf=\"tab == 'Sensorise'\">\n    <ion-col>\n      <jqxGrid #myGrid [theme]=\"'material'\" (onRowclick)=\"myGridOnRowSelect($event)\" [width]=\"'99%'\" [autoheight]=\"true\"\n        [enablebrowserselection]=\"true\" [source]=\"dataAdapter\" [sortable]=\"true\" [filterable]=\"true\" [columns]=\"columns\"\n        [columnsresize]=\"true\" [enabletooltips]=\"true\" [pageable]=\"true\" [showfilterrow]=\"true\" style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \">\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/delar-application/whitelisting-master-detail/add-dealer-details/add-dealer-details.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/delar-application/whitelisting-master-detail/add-dealer-details/add-dealer-details.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  background-color: #7c68f8;\n}\n\n.label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 18px;\n}\n\n.diable-style {\n  background: white;\n  line-height: 18px;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #ffebcd;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vd2hpdGVsaXN0aW5nLW1hc3Rlci1kZXRhaWwvYWRkLWRlYWxlci1kZXRhaWxzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXHdoaXRlbGlzdGluZy1tYXN0ZXItZGV0YWlsXFxhZGQtZGVhbGVyLWRldGFpbHNcXGFkZC1kZWFsZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vd2hpdGVsaXN0aW5nLW1hc3Rlci1kZXRhaWwvYWRkLWRlYWxlci1kZXRhaWxzL2FkZC1kZWFsZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FETUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0hGOztBRE1BO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDSEY7O0FETUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNIRjs7QURNQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0U7SUFDRSxTQUFBO0VDSEY7O0VETUE7SUFDRSxVQUFBO0VDSEY7QUFDRjs7QURNQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURPQTtFQUNFLHlCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi93aGl0ZWxpc3RpbmctbWFzdGVyLWRldGFpbC9hZGQtZGVhbGVyLWRldGFpbHMvYWRkLWRlYWxlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M2OGY4O1xyXG59XHJcblxyXG4ubGFiZWwtc3R5bGUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG5cclxuLmRpYWJsZS1zdHlsZSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi8vIC5jb250ZW50LXN0eWxlIHtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLmNvbC1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbiNhZGQtaWNvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZlYmNkO1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjN2M2OGY4O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgem9vbTogODAlO1xyXG4gIH1cclxuXHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuLnNlbGVjdGFibGUtaW5wdXQge1xyXG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XHJcbn1cclxuIiwiLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjNjhmODtcbn1cblxuLmxhYmVsLXN0eWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5kaWFibGUtc3R5bGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5jb2wtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jYWRkLWljb24ge1xuICAtLWJhY2tncm91bmQ6ICNmZmViY2Q7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIC0tYmFja2dyb3VuZDogIzdjNjhmODtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5zZWxlY3RhYmxlLWlucHV0IHtcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/whitelisting-master-detail/add-dealer-details/add-dealer-details.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/delar-application/whitelisting-master-detail/add-dealer-details/add-dealer-details.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: AddDealerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDealerDetailsComponent", function() { return AddDealerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let AddDealerDetailsComponent = class AddDealerDetailsComponent {
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
    createForm() {
        this.addForm = this.formBuilder.group({
            dealername: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            grpid: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            urls1: [""],
            urls2: [""],
            urls3: [""],
            urls4: [""],
            airtel1: [""],
            airtel2: [""],
            airtel3: [""],
            bsnl1: [""],
            bsnl2: [""],
            bsnl3: [""],
        });
    }
    dealer() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/global/getesimdealerlist";
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.dealerlist = res;
        });
    }
    add() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var data;
            data = {
                dealer: this.addForm.value.dealername,
                "Group ID": this.addForm.value.grpid.toString(),
                "IP’s/Domain/URL’s1": this.addForm.value.urls1.toString(),
                "IP’s/Domain/URL’s2": this.addForm.value.urls2.toString(),
                "IP’s/Domain/URL’s3": this.addForm.value.urls3.toString(),
                "IP’s/Domain/URL’s4": this.addForm.value.urls4.toString(),
                "Admin MSSIDN 1: AIRTEL": this.addForm.value.airtel1.toString(),
                "Admin MSSIDN 2: AIRTEL": this.addForm.value.airtel2.toString(),
                "Admin MSSIDN 3: AIRTEL": this.addForm.value.airtel3.toString(),
                "Admin MSSIDN 1: BSNL": this.addForm.value.bsnl1.toString(),
                "Admin MSSIDN 2: BSNL": this.addForm.value.bsnl2.toString(),
                "Admin MSSIDN 3: BSNL": this.addForm.value.bsnl3.toString(),
                serviceprovider: this.param.toString(),
                id: "",
            };
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
                "/global/saveWhiteListingDetails?createdby=" +
                localStorage.getItem("userName");
            this.ajaxService.ajaxPostWithString(url, data).subscribe((res) => {
                res = JSON.parse(res);
                if (res.message == "White Listing Detail Added Successfully") {
                    this.commonService.showConfirm(res.message);
                    this.modalController.dismiss({
                        data: "White Listing Detail Added Successfully",
                    });
                }
                else {
                    this.commonService.showConfirm(res.message);
                }
            });
        });
    }
    edit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var data;
            data = {
                dealer: this.addForm.value.dealername,
                "Group ID": this.addForm.value.grpid.toString(),
                "IP’s/Domain/URL’s1": this.addForm.value.urls1.toString(),
                "IP’s/Domain/URL’s2": this.addForm.value.urls2.toString(),
                "IP’s/Domain/URL’s3": this.addForm.value.urls3.toString(),
                "IP’s/Domain/URL’s4": this.addForm.value.urls4.toString(),
                "Admin MSSIDN 1: AIRTEL": this.addForm.value.airtel1.toString(),
                "Admin MSSIDN 2: AIRTEL": this.addForm.value.airtel2.toString(),
                "Admin MSSIDN 3: AIRTEL": this.addForm.value.airtel3.toString(),
                "Admin MSSIDN 1: BSNL": this.addForm.value.bsnl1.toString(),
                "Admin MSSIDN 2: BSNL": this.addForm.value.bsnl2.toString(),
                "Admin MSSIDN 3: BSNL": this.addForm.value.bsnl3.toString(),
                serviceprovider: this.param,
                id: this.value2["id"],
            };
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
                "/global/saveWhiteListingDetails?createdby=" +
                localStorage.getItem("userName");
            this.ajaxService.ajaxPostWithString(url, data).subscribe((res) => {
                res = JSON.parse(res);
                if (res.message == "White Listing Detail Added Successfully") {
                    this.commonService.showConfirm(res.message);
                    this.modalController.dismiss({
                        data: "White Listing Detail Added Successfully",
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
        this.addForm.patchValue({
            dealername: this.value2["dealer"],
            grpid: this.value2["Group ID"],
            urls1: this.value2["IP’s/Domain/URL’s1"],
            urls2: this.value2["IP’s/Domain/URL’s2"],
            urls3: this.value2["IP’s/Domain/URL’s3"],
            urls4: this.value2["IP’s/Domain/URL’s4"],
            airtel1: this.value2["Admin MSSIDN 1: AIRTEL"],
            airtel2: this.value2["Admin MSSIDN 2: AIRTEL"],
            airtel3: this.value2["Admin MSSIDN 3: AIRTEL"],
            bsnl1: this.value2["Admin MSSIDN 1: BSNL"],
            bsnl2: this.value2["Admin MSSIDN 2: BSNL"],
            bsnl3: this.value2["Admin MSSIDN 3: BSNL"],
            serviceprovider: this.param,
            id: "",
        });
        console.log(this.value2["Group ID"]);
    }
    ngOnInit() {
        this.createForm();
        this.dealer();
        if (Object.keys(this.value2).length != 0) {
            console.log(this.value2);
            this.setValue();
        }
    }
};
AddDealerDetailsComponent.ctorParameters = () => [
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
], AddDealerDetailsComponent.prototype, "param", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddDealerDetailsComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddDealerDetailsComponent.prototype, "value2", void 0);
AddDealerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-dealer-details",
        template: __webpack_require__(/*! raw-loader!./add-dealer-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/whitelisting-master-detail/add-dealer-details/add-dealer-details.component.html"),
        styles: [__webpack_require__(/*! ./add-dealer-details.component.scss */ "./src/app/delar-application/whitelisting-master-detail/add-dealer-details/add-dealer-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], AddDealerDetailsComponent);



/***/ }),

/***/ "./src/app/delar-application/whitelisting-master-detail/whitelisting-master-detail.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/delar-application/whitelisting-master-detail/whitelisting-master-detail.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: WhitelistingMasterDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhitelistingMasterDetailPageModule", function() { return WhitelistingMasterDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _whitelisting_master_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./whitelisting-master-detail.page */ "./src/app/delar-application/whitelisting-master-detail/whitelisting-master-detail.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _add_dealer_details_add_dealer_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-dealer-details/add-dealer-details.component */ "./src/app/delar-application/whitelisting-master-detail/add-dealer-details/add-dealer-details.component.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");










const routes = [
    {
        path: "",
        component: _whitelisting_master_detail_page__WEBPACK_IMPORTED_MODULE_6__["WhitelistingMasterDetailPage"],
    },
    {
        path: "add-dealer-details",
        component: _add_dealer_details_add_dealer_details_component__WEBPACK_IMPORTED_MODULE_8__["AddDealerDetailsComponent"],
    },
];
let WhitelistingMasterDetailPageModule = class WhitelistingMasterDetailPageModule {
};
WhitelistingMasterDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_9__["IonicSelectableModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_whitelisting_master_detail_page__WEBPACK_IMPORTED_MODULE_6__["WhitelistingMasterDetailPage"], _add_dealer_details_add_dealer_details_component__WEBPACK_IMPORTED_MODULE_8__["AddDealerDetailsComponent"]],
    })
], WhitelistingMasterDetailPageModule);



/***/ }),

/***/ "./src/app/delar-application/whitelisting-master-detail/whitelisting-master-detail.page.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/delar-application/whitelisting-master-detail/whitelisting-master-detail.page.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: 0px 5px 0px;\n  border-radius: 7px;\n}\n\n.wrap {\n  margin-left: 10px;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.nexttab {\n  height: 30px;\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  font-size: 10px;\n  letter-spacing: 2.5px;\n  color: #000;\n  background-color: #ebebeb;\n  border: none;\n  border-right: 1px solid #b5b5b5;\n  -webkit-transition: all 0.3s ease 0s;\n  transition: all 0.3s ease 0s;\n  cursor: pointer;\n  -webkit-transform: skew(-21deg);\n          transform: skew(-21deg);\n  margin-left: 2px;\n}\n\n.select {\n  font-size: 10px;\n  font-weight: bold;\n  padding: 10px;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  background-color: #ffffff;\n  -webkit-transform: skew(-21deg);\n          transform: skew(-21deg);\n}\n\n.tabrow {\n  margin-left: 15px;\n  margin-top: 7px;\n  border-bottom: 2px solid #822ef5;\n  background: #ebebeb;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vd2hpdGVsaXN0aW5nLW1hc3Rlci1kZXRhaWwvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcd2hpdGVsaXN0aW5nLW1hc3Rlci1kZXRhaWxcXHdoaXRlbGlzdGluZy1tYXN0ZXItZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vd2hpdGVsaXN0aW5nLW1hc3Rlci1kZXRhaWwvd2hpdGVsaXN0aW5nLW1hc3Rlci1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGdCQUFBO0VDQ0Y7O0VERUE7SUFDRSxVQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFO0lBQ0UsU0FBQTtFQ0FGOztFREdBO0lBQ0UsVUFBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFFQSwrQkFBQTtVQUFBLHVCQUFBO0FDRkY7O0FES0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FDRkY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi93aGl0ZWxpc3RpbmctbWFzdGVyLWRldGFpbC93aGl0ZWxpc3RpbmctbWFzdGVyLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VibWl0QnRuIHtcclxuICBtYXJnaW46IDBweCAxNHB4IDBweCAwcHg7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIC0tY29sb3I6ICM3YzY4Zjg7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjN2M2OGY4O1xyXG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmlucHV0IHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgfVxyXG5cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgem9vbTogODAlO1xyXG4gIH1cclxuXHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogMHB4IDVweCAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4ud3JhcCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm5leHR0YWIge1xyXG4gIGhlaWdodDogMzBweDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMi41cHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2I1YjViNTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNmb3JtOiBza2V3KC0yMWRlZyk7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG5cclxuLnNlbGVjdCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IC00cHggN3B4ICNjMGI1ZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoN3B4KTtcclxuICB0cmFuc2Zvcm06IHNrZXcoLTIxZGVnKTtcclxufVxyXG5cclxuLnRhYnJvdyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogN3B4O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODIyZWY1O1xyXG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbn1cclxuLmRlYWxlci1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4iLCIuc3VibWl0QnRuIHtcbiAgbWFyZ2luOiAwcHggMTRweCAwcHggMHB4O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM3YzY4Zjg7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAwcHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4ud3JhcCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubmV4dHRhYiB7XG4gIGhlaWdodDogMzBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYjViNWI1O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNmb3JtOiBza2V3KC0yMWRlZyk7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG5cbi5zZWxlY3Qge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggLTRweCA3cHggI2MwYjVmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdHJhbnNmb3JtOiBza2V3KC0yMWRlZyk7XG59XG5cbi50YWJyb3cge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzgyMmVmNTtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbn1cblxuLmRlYWxlci1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/whitelisting-master-detail/whitelisting-master-detail.page.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/delar-application/whitelisting-master-detail/whitelisting-master-detail.page.ts ***!
  \*************************************************************************************************/
/*! exports provided: WhitelistingMasterDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhitelistingMasterDetailPage", function() { return WhitelistingMasterDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var _add_dealer_details_add_dealer_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-dealer-details/add-dealer-details.component */ "./src/app/delar-application/whitelisting-master-detail/add-dealer-details/add-dealer-details.component.ts");









let WhitelistingMasterDetailPage = class WhitelistingMasterDetailPage {
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
        this.tab = "Sensorise";
        this.balance = [];
    }
    getdatas(d) {
        if (d == undefined) {
            this.tab = "Sensorise";
        }
        else {
            this.tab = d;
        }
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/global/getWhiteListingDetails?serviceprovider=" +
            this.tab;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.tableData = res;
            this.commonService.dismissLoader();
            this.renderer = (row, column, value) => {
                if (value == "" || null || undefined) {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                        "--" +
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
                    text: "Dealer",
                    datafield: "dealer",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 85,
                },
                {
                    text: "Group ID",
                    datafield: "Group ID",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 85,
                },
                {
                    text: "IP’s/Domain/URL’s1",
                    datafield: "IP\u2019s/Domain/URL\u2019s1",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 155,
                },
                {
                    text: "IP’s/Domain/URL’s2",
                    datafield: "IP\u2019s/Domain/URL\u2019s2",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 155,
                },
                {
                    text: "IP’s/Domain/URL’s3",
                    datafield: "IP\u2019s/Domain/URL\u2019s3",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 155,
                },
                {
                    text: "IP’s/Domain/URL’s4",
                    datafield: "IP\u2019s/Domain/URL\u2019s4",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 155,
                },
                {
                    text: "Admin MSSIDN 1: AIRTEL",
                    datafield: "Admin MSSIDN 1: AIRTEL",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 175,
                },
                {
                    text: "Admin MSSIDN 2: AIRTEL",
                    datafield: "Admin MSSIDN 2: AIRTEL",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 175,
                },
                {
                    text: "Admin MSSIDN 3: AIRTEL",
                    datafield: "Admin MSSIDN 3: AIRTEL",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 175,
                },
                {
                    text: "Admin MSSIDN 1: BSNL",
                    datafield: "Admin MSSIDN 1: BSNL",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 175,
                },
                {
                    text: "Admin MSSIDN 2: BSNL",
                    datafield: "Admin MSSIDN 2: BSNL",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 175,
                },
                {
                    text: "Admin MSSIDN 3: BSNL",
                    datafield: "Admin MSSIDN 3: BSNL",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 175,
                },
            ];
        });
    }
    addModel(row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const isModalOpened = yield this.modalController.getTop();
            const modal = yield this.modalController.create({
                component: _add_dealer_details_add_dealer_details_component__WEBPACK_IMPORTED_MODULE_8__["AddDealerDetailsComponent"],
                cssClass: "tripform",
                componentProps: {
                    value: this.selectedRow,
                    param: this.tab,
                },
            });
            modal.onDidDismiss().then((data) => {
                if (data.data.data == "White Listing Detail Added Successfully") {
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
                    component: _add_dealer_details_add_dealer_details_component__WEBPACK_IMPORTED_MODULE_8__["AddDealerDetailsComponent"],
                    cssClass: "tripform",
                    componentProps: {
                        value2: this.selectedRow,
                        param: this.tab,
                    },
                });
                modal.onDidDismiss().then((data) => {
                    this.myGrid.clearselection();
                    this.selectedRow = "";
                    if (data.data.data == "White Listing Detail Added Successfully") {
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
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row.bounddata;
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
    }
    ionViewWillEnter() {
        this.getdatas();
    }
};
WhitelistingMasterDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], WhitelistingMasterDetailPage.prototype, "myGrid", void 0);
WhitelistingMasterDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-whitelisting-master-detail",
        template: __webpack_require__(/*! raw-loader!./whitelisting-master-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/whitelisting-master-detail/whitelisting-master-detail.page.html"),
        styles: [__webpack_require__(/*! ./whitelisting-master-detail.page.scss */ "./src/app/delar-application/whitelisting-master-detail/whitelisting-master-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"]])
], WhitelistingMasterDetailPage);



/***/ })

}]);
//# sourceMappingURL=whitelisting-master-detail-whitelisting-master-detail-module-es2015.js.map