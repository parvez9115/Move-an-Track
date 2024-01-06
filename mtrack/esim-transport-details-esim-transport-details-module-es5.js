(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esim-transport-details-esim-transport-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-transport-details/add-transport-details/add-transport-details.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-transport-details/add-transport-details/add-transport-details.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Add Transport Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"myPlatform != 'desktop'\" class=\"content-style label-style\">\n  <ion-grid>\n    <ion-row class=\"form-field\">\n      <ion-col\n        size=\"12\"\n        size-sm=\"12\"\n        size-md=\"10\"\n        offset-md=\"1\"\n        size-lg=\"12\"\n        offset-lg=\"0\"\n      >\n        <form [formGroup]=\"tansportForm\">\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">Dealer Name :</ion-label>\n              <ionic-selectable\n                class=\"label-style selectable-input\"\n                formControlName=\"dealer\"\n                placeholder=\"Select the Dealer Name\"\n                [items]=\"Dealer\"\n                (onChange)=\"getinvoicelist($event)\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n                [disabledItems]=\"data\"\n              >\n              </ionic-selectable>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">Invoice Number :</ion-label>\n              <ionic-selectable\n                class=\"label-style selectable-input\"\n                formControlName=\"invoiceno\"\n                placeholder=\"Select Invoice Number\"\n                (click)=\"invoicelist()\"\n                [items]=\"invoiceno\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n                [disabledItems]=\"data\"\n              >\n              </ionic-selectable>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">Transport Date :</ion-label>\n              <ion-input\n                class=\"label-style\"\n                type=\"date\"\n                [max]=\"maxDate\"\n                formControlName=\"transportdate\"\n              ></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\"> Tranpsort Amount :</ion-label>\n              <ion-input\n                class=\"label-style\"\n                type=\"number\"\n                formControlName=\"transportamount\"\n                placeholder=\"Enter the Transport Amount\"\n              ></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"10\">\n              <ion-label class=\"col-content\">File Upload :</ion-label>\n              <input\n                class=\"documents\"\n                type=\"file\"\n                formControlName=\"transportdocument\"\n                ng2FileSelect\n                [uploader]=\"uploader\"\n              />\n            </ion-col>\n          </ion-row>\n        </form>\n\n        <ion-row class=\"content-style\">\n          <ion-col style=\"text-align: center !important; padding: 20px\">\n            <ion-button\n              *ngIf=\"!hideSerialNo\"\n              class=\"button\"\n              type=\"submit\"\n              [disabled]=\"!tansportForm.valid\"\n              (click)=\"edit('submit')\"\n              >Submit\n            </ion-button>\n            <ion-button\n              *ngIf=\"hideSerialNo\"\n              class=\"button\"\n              type=\"submit\"\n              [disabled]=\"!tansportForm.valid\"\n              (click)=\"edit('edit')\"\n              >Update\n            </ion-button>\n            <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\"\n              >Cancel</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf=\"myPlatform == 'desktop'\" class=\"content-style label-style\">\n  <ion-grid>\n    <ion-row class=\"form-field\">\n      <ion-col>\n        <form [formGroup]=\"tansportForm\">\n          <ion-row class=\"total-data\">\n            <ion-col>\n              <ion-row class=\"content-style\">\n                <ion-col size=\"4\" class=\"col-content\">Dealer Name : </ion-col>\n                <ion-col size=\"7\">\n                  <ionic-selectable\n                    class=\"label-style selectable-input\"\n                    formControlName=\"dealer\"\n                    placeholder=\"Select the Dealer Name\"\n                    [items]=\"Dealer\"\n                    (onChange)=\"getinvoicelist($event)\"\n                    [canSearch]=\"true\"\n                    [hasVirtualScroll]=\"true\"\n                    [disabledItems]=\"data\"\n                  >\n                  </ionic-selectable>\n                </ion-col>\n              </ion-row>\n\n              <ion-row class=\"content-style\">\n                <ion-col size=\"4\" class=\"col-content\">Invoice No : </ion-col>\n                <ion-col size=\"7\">\n                  <ionic-selectable\n                    class=\"label-style selectable-input\"\n                    formControlName=\"invoiceno\"\n                    placeholder=\"Select Invoice Number\"\n                    (click)=\"invoicelist()\"\n                    [items]=\"invoiceno\"\n                    [canSearch]=\"true\"\n                    [hasVirtualScroll]=\"true\"\n                    [disabledItems]=\"data\"\n                  >\n                  </ionic-selectable>\n                </ion-col>\n              </ion-row>\n\n              <ion-row class=\"content-style\">\n                <ion-col size=\"4\" class=\"col-content\">Transport No : </ion-col>\n                <ion-col size=\"7\">\n                  <ion-input\n                    class=\"label-style\"\n                    type=\"text\"\n                    formControlName=\"transportno\"\n                    placeholder=\"Enter the Transport No\"\n                  ></ion-input>\n                </ion-col>\n              </ion-row>\n\n              <ion-row class=\"content-style\">\n                <ion-col size=\"4\" class=\"col-content\">Transport Date :</ion-col>\n                <ion-col size=\"7\">\n                  <ion-input\n                    class=\"label-style\"\n                    type=\"date\"\n                    [max]=\"maxDate\"\n                    formControlName=\"transportdate\"\n                  ></ion-input>\n                </ion-col>\n              </ion-row>\n\n              <ion-row class=\"content-style\">\n                <ion-col size=\"4\" class=\"col-content\">\n                  Tranpsort Amount :\n                </ion-col>\n                <ion-col size=\"7\">\n                  <ion-input\n                    class=\"label-style\"\n                    type=\"number\"\n                    formControlName=\"transportamount\"\n                    placeholder=\"Enter the Transport Amount\"\n                  ></ion-input>\n                </ion-col>\n              </ion-row>\n\n              <ion-row class=\"content-style\">\n                <ion-col size=\"4\" class=\"col-content\">File Upload :</ion-col>\n                <ion-col size=\"7\">\n                  <input\n                    class=\"documents\"\n                    type=\"file\"\n                    formControlName=\"transportdocument\"\n                    ng2FileSelect\n                    [uploader]=\"uploader\"\n                  />\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </form>\n\n        <ion-row class=\"content-style\">\n          <ion-col style=\"text-align: center !important; padding: 20px\">\n            <ion-button\n              *ngIf=\"!hideSerialNo\"\n              class=\"button\"\n              type=\"submit\"\n              [disabled]=\"!tansportForm.valid || button\"\n              (click)=\"edit('submit')\"\n              >Submit\n            </ion-button>\n            <ion-button\n              *ngIf=\"hideSerialNo\"\n              class=\"button\"\n              type=\"submit\"\n              [disabled]=\"!tansportForm.valid || button\"\n              (click)=\"edit('edit')\"\n              >Update\n            </ion-button>\n            <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\"\n              >Cancel</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-transport-details/esim-transport-details.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-transport-details/esim-transport-details.page.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons\n      *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\"\n      slot=\"start\"\n    >\n      <ion-icon\n        routerLink=\"/tabs-login/esim-dashboard\"\n        name=\"arrow-back\"\n        style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-row class=\"toolbar\">\n      <ion-title>Device Transport Details</ion-title>\n      <ion-col\n        *ngIf=\"myPlatform == 'desktop'\"\n        size=\"8\"\n        style=\"text-align: right\"\n      >\n        <ion-button class=\"submitBtn\" size=\"small\" (click)=\"viewModel('add')\"\n          >Add</ion-button\n        >\n        <ion-button class=\"submitBtn\" size=\"small\" (click)=\"newfunc()\"\n          >Export</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col\n      *ngIf=\"myPlatform != 'desktop'\"\n      size=\"12\"\n      style=\"text-align: right\"\n    >\n      <ion-button class=\"submitBtn\" size=\"small\" (click)=\"viewModel('add')\"\n        >Add</ion-button\n      >\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"margin: 15px 0px 0px 0px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        (onRowclick)=\"myGridOnRowSelect($event)\"\n        [theme]=\"'material'\"\n        [width]=\"'99%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [pagesizeoptions]=\"page\"\n        [enablebrowserselection]=\"true\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n\n  <ion-fab\n    *ngIf=\"arrow\"\n    style=\"margin-right: 1%; margin-bottom: 9%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToTop()\">\n      <ion-icon class=\"icon\" name=\"arrow-up\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab\n    *ngIf=\"arrow\"\n    style=\"margin-right: 1%; margin-bottom: 5%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToBottom()\">\n      <ion-icon class=\"icon\" name=\"arrow-down\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/esim-transport-details/add-transport-details/add-transport-details.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-transport-details/add-transport-details/add-transport-details.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  background-color: #7c68f8;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 18px;\n}\n\n.diable-style {\n  background: white;\n  line-height: 18px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.total-data {\n  margin-top: 2%;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #FFEBCD;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 0px 6px;\n}\n\n.file-input-container input[type=file] {\n  display: none;\n}\n\n.file {\n  margin-left: 8%;\n  border: 1px solid #3d6cec;\n}\n\n.documents {\n  margin: 10px 0px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS10cmFuc3BvcnQtZGV0YWlscy9hZGQtdHJhbnNwb3J0LWRldGFpbHMvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcZXNpbS10cmFuc3BvcnQtZGV0YWlsc1xcYWRkLXRyYW5zcG9ydC1kZXRhaWxzXFxhZGQtdHJhbnNwb3J0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tdHJhbnNwb3J0LWRldGFpbHMvYWRkLXRyYW5zcG9ydC1kZXRhaWxzL2FkZC10cmFuc3BvcnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENBO0VBQ0k7SUFDSSxTQUFBO0VDRU47O0VEQ0U7SUFDSSxVQUFBO0VDRU47QUFDRjs7QURDQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRENBO0VBQ0ksd0JBQUE7VUFBQSx1QkFBQTtBQ0VKOztBRENBO0VBQ0ksY0FBQTtBQ0VKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURDQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0VKOztBRENBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FDRUo7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FER0k7RUFFSSxhQUFBO0FDRFI7O0FES0E7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUNGSjs7QURLQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tdHJhbnNwb3J0LWRldGFpbHMvYWRkLXRyYW5zcG9ydC1kZXRhaWxzL2FkZC10cmFuc3BvcnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M2OGY4XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAuZm9ybS1maWVsZCB7XHJcbiAgICAgICAgem9vbTogODAlO1xyXG4gICAgfVxyXG5cclxuICAgICNzdWJtaXRidG4ge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbjogLTVweCA1cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcbi5sYWJlbC1zdHlsZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4uZGlhYmxlLXN0eWxlIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXN0eWxlIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbn1cclxuXHJcbi50b3RhbC1kYXRhIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG4uY29sLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuI2FkZC1pY29uIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZGRUJDRDtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM3YzY4Zjg7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG5cclxufVxyXG5cclxuLnNlbGVjdGFibGUtaW5wdXQge1xyXG4gICAgcGFkZGluZzogOHB4IDExcHggMHB4IDZweDtcclxufVxyXG5cclxuLmZpbGUtaW5wdXQtY29udGFpbmVyIHtcclxuICAgIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuXHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLmZpbGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDglO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYxLCAxMDgsIDIzNik7XHJcbn1cclxuXHJcbi5kb2N1bWVudHMge1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsIi5oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YzY4Zjg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmxhYmVsLXN0eWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5kaWFibGUtc3R5bGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5jb250ZW50LXN0eWxlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50b3RhbC1kYXRhIHtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5jb2wtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jYWRkLWljb24ge1xuICAtLWJhY2tncm91bmQ6ICNGRkVCQ0Q7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIC0tYmFja2dyb3VuZDogIzdjNjhmODtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDBweCA2cHg7XG59XG5cbi5maWxlLWlucHV0LWNvbnRhaW5lciBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZpbGUge1xuICBtYXJnaW4tbGVmdDogOCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZDZjZWM7XG59XG5cbi5kb2N1bWVudHMge1xuICBtYXJnaW46IDEwcHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/esim-transport-details/add-transport-details/add-transport-details.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-transport-details/add-transport-details/add-transport-details.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: AddTransportDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTransportDetailsComponent", function() { return AddTransportDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/pdf-logo.service */ "./src/app/services/pdf-logo.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");










var AddTransportDetailsComponent = /** @class */ (function () {
    function AddTransportDetailsComponent(platform, formBuilder, modalController, alertController, commonService, ajaxService, pdfLogoService) {
        var _this = this;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.pdfLogoService = pdfLogoService;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({});
        this.button = false;
        this.today = new Date();
        this.hideSerialNo = false;
        this.getinvoicelist = function (event) {
            if (event.value)
                _this.tansportForm.value.distributor = event.value;
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["serverUrl"].web +
                "/esim/getTransportDealerInvoice?companyid=" +
                localStorage.getItem("corpId") +
                "&dealer=" +
                _this.tansportForm.value.distributor;
            _this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
                _this.invoiceno = res;
            });
        };
    }
    AddTransportDetailsComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    AddTransportDetailsComponent.prototype.clear = function () {
        this.tansportForm.patchValue({
            invoiceno: "",
            transportno: "",
            transportamount: "",
            transportdocument: "",
        });
        this.uploader.queue.length = 0;
    };
    AddTransportDetailsComponent.prototype.edit = function (data) {
        var data, data;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var file, testData, api, blob, default_file, url, file, testData, api, blob, default_file, url;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data == "edit")) return [3 /*break*/, 5];
                        this.button = true;
                        file = this.uploader;
                        data = {
                            id: this.value.id.toString(),
                            dealer: this.tansportForm.value.dealer.toString(),
                            invoiceno: this.tansportForm.value.invoiceno.toString(),
                            transportno: this.tansportForm.value.transportno.toString(),
                            transportdate: this.tansportForm.value.transportdate + " " + "00:00:00",
                            transportamount: this.tansportForm.value.transportamount.toString(),
                            createdby: localStorage.getItem("userName"),
                        };
                        testData = new FormData();
                        if (!(file.queue.length != 0)) return [3 /*break*/, 1];
                        testData.append("TransportDocument", file.queue[0]._file);
                        testData.append("data", JSON.stringify(data));
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, fetch(this.pdfLogoService.imgdata.no_img)];
                    case 2:
                        api = _a.sent();
                        return [4 /*yield*/, api.blob()];
                    case 3:
                        blob = _a.sent();
                        default_file = new File([blob], "File name", {
                            type: "image/png",
                        });
                        testData.append("TransportDocument", default_file);
                        testData.append("data", JSON.stringify(data));
                        _a.label = 4;
                    case 4:
                        url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["serverUrl"].web + "/esim/saveEsimTrasnsportDetails";
                        this.ajaxService.ajaxPostWithFile(url, testData).subscribe(function (res) {
                            if (res.message == "Transport Detail Saved Successfully") {
                                _this.commonService.showConfirm(res.message);
                                _this.clear();
                                _this.modalController.dismiss({ data: "saved success" });
                                _this.value = {};
                                _this.button = false;
                            }
                            else if (res.message == "Transport Detail Not Saved Successfully") {
                                _this.commonService.showConfirm(res.message);
                                _this.clear();
                                _this.button = false;
                            }
                            else {
                                _this.commonService.showConfirm("Transport Detail already persiste");
                                _this.button = false;
                            }
                        });
                        this.hideSerialNo = false;
                        return [3 /*break*/, 10];
                    case 5:
                        this.button = true;
                        file = this.uploader;
                        data = {
                            id: "",
                            dealer: this.tansportForm.value.dealer.toString(),
                            invoiceno: this.tansportForm.value.invoiceno.toString(),
                            transportno: this.tansportForm.value.transportno.toString(),
                            transportdate: this.tansportForm.value.transportdate + " " + "00:00:00",
                            transportamount: this.tansportForm.value.transportamount.toString(),
                            createdby: localStorage.getItem("userName"),
                        };
                        testData = new FormData();
                        if (!(file.queue.length != 0)) return [3 /*break*/, 6];
                        testData.append("TransportDocument", file.queue[0]._file);
                        testData.append("data", JSON.stringify(data));
                        return [3 /*break*/, 9];
                    case 6: return [4 /*yield*/, fetch(this.pdfLogoService.imgdata.no_img)];
                    case 7:
                        api = _a.sent();
                        return [4 /*yield*/, api.blob()];
                    case 8:
                        blob = _a.sent();
                        default_file = new File([blob], "File name", {
                            type: "image/png",
                        });
                        testData.append("TransportDocument", default_file);
                        testData.append("data", JSON.stringify(data));
                        _a.label = 9;
                    case 9:
                        url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["serverUrl"].web + "/esim/saveEsimTrasnsportDetails";
                        this.ajaxService.ajaxPostWithFile(url, testData).subscribe(function (res) {
                            if (res.message == "Transport Detail Saved Successfully") {
                                _this.commonService.showConfirm(res.message);
                                _this.clear();
                                _this.modalController.dismiss({ data: "saved success" });
                                _this.button = false;
                            }
                            else if (res.message == "Transport Detail Not Saved Successfully") {
                                _this.commonService.showConfirm(res.message);
                                _this.clear();
                                _this.button = false;
                            }
                            else {
                                _this.commonService.showConfirm("Transport Detail already persiste");
                                _this.button = false;
                            }
                        });
                        this.hideSerialNo = false;
                        _a.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    AddTransportDetailsComponent.prototype.setValue = function () {
        var slicedDate = this.value.transportdate.slice(0, 10);
        this.hideSerialNo = true;
        this.tansportForm.patchValue({
            dealer: this.value.dealer,
            invoiceno: this.value.invoiceno,
            transportno: this.value.transportno,
            transportdate: slicedDate,
            transportamount: this.value.transportamount,
        });
    };
    AddTransportDetailsComponent.prototype.createForm = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        var todaytime = now.getHours() + ":" + now.getMinutes();
        this.tansportForm = this.formBuilder.group({
            dealer: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            invoiceno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            transportno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            transportdate: [today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            transportamount: [""],
            transportdocument: [""],
        });
    };
    AddTransportDetailsComponent.prototype.getDealer = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["serverUrl"].web + "/esim/getDealer";
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            _this.Dealer = res;
        });
    };
    AddTransportDetailsComponent.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.createForm();
        this.maxDate = this.today.getFullYear() + "-";
        this.maxDate +=
            (this.today.getMonth() + 1 < 10
                ? "0" + (this.today.getMonth() + 1).toString()
                : (this.today.getMonth() + 1).toString()) + "-";
        this.maxDate +=
            this.today.getDate() < 10
                ? "0" + this.today.getDate().toString()
                : this.today.getDate().toString();
        if (Object.keys(this.value).length != 0) {
            console.log(this.value);
            this.setValue();
        }
        else {
            this.clear();
            this.value = {};
        }
        this.getDealer();
    };
    AddTransportDetailsComponent.prototype.ngOnDestroy = function () {
        this.value = {};
    };
    AddTransportDetailsComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
        { type: src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_8__["PdfLogoService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddTransportDetailsComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("selectComponent", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic_selectable__WEBPACK_IMPORTED_MODULE_4__["IonicSelectableComponent"])
    ], AddTransportDetailsComponent.prototype, "selectComponent", void 0);
    AddTransportDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-add-transport-details",
            template: __webpack_require__(/*! raw-loader!./add-transport-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-transport-details/add-transport-details/add-transport-details.component.html"),
            styles: [__webpack_require__(/*! ./add-transport-details.component.scss */ "./src/app/delar-application/esim-transport-details/add-transport-details/add-transport-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
            src_app_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_8__["PdfLogoService"]])
    ], AddTransportDetailsComponent);
    return AddTransportDetailsComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-transport-details/esim-transport-details.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/delar-application/esim-transport-details/esim-transport-details.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: EsimTransportDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimTransportDetailsPageModule", function() { return EsimTransportDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _esim_transport_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esim-transport-details.page */ "./src/app/delar-application/esim-transport-details/esim-transport-details.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _add_transport_details_add_transport_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-transport-details/add-transport-details.component */ "./src/app/delar-application/esim-transport-details/add-transport-details/add-transport-details.component.ts");











var routes = [
    {
        path: "",
        component: _esim_transport_details_page__WEBPACK_IMPORTED_MODULE_6__["EsimTransportDetailsPage"],
    },
    {
        path: "add-transport-details",
        component: _add_transport_details_add_transport_details_component__WEBPACK_IMPORTED_MODULE_10__["AddTransportDetailsComponent"],
    },
];
var EsimTransportDetailsPageModule = /** @class */ (function () {
    function EsimTransportDetailsPageModule() {
    }
    EsimTransportDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__["FileUploadModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_esim_transport_details_page__WEBPACK_IMPORTED_MODULE_6__["EsimTransportDetailsPage"], _add_transport_details_add_transport_details_component__WEBPACK_IMPORTED_MODULE_10__["AddTransportDetailsComponent"]],
        })
    ], EsimTransportDetailsPageModule);
    return EsimTransportDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-transport-details/esim-transport-details.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/delar-application/esim-transport-details/esim-transport-details.page.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fabbutton {\n  --background: whitesmoke;\n  --background-hover: grey;\n}\n\n.icon {\n  color: black;\n}\n\n.icon:hover {\n  color: white;\n}\n\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -11px;\n  right: -2px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -15px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS10cmFuc3BvcnQtZGV0YWlscy9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxlc2ltLXRyYW5zcG9ydC1kZXRhaWxzXFxlc2ltLXRyYW5zcG9ydC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS10cmFuc3BvcnQtZGV0YWlscy9lc2ltLXRyYW5zcG9ydC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7QUNHRjs7QURBQTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ0dGOztBRERBOztFQUVFLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNJRjs7QUREQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNJRjs7QUREQTtFQUNFLDJCQUFBO0FDSUY7O0FEREE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDSUY7O0FEREE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0lGOztBRERBO0VBQ0UsbUJBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tdHJhbnNwb3J0LWRldGFpbHMvZXNpbS10cmFuc3BvcnQtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFiYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBncmV5O1xyXG59XHJcbi5pY29uIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmljb246aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnN1Ym1pdEJ0biB7XHJcbiAgbWFyZ2luOiAwcHggMTRweCAwcHggMHB4O1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAtLWNvbG9yOiAjN2M2OGY4O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcclxuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcclxufVxyXG4ucGRmLXdyYXBwZXIsXHJcbi5leGNlbC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZXhjZWxOZXcuc3ZnXCIpIG5vLXJlcGVhdDtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5mYWItYnRuIHtcclxuICAtLWJhY2tncm91bmQ6IGxhdmVuZGVyO1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTFweDtcclxuICByaWdodDogLTJweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5mYWItYnRuOmhvdmVyIHtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICBtYXJnaW4tbGVmdDogLTgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuIiwiLmZhYmJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBncmV5O1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmljb246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdWJtaXRCdG4ge1xuICBtYXJnaW46IDBweCAxNHB4IDBweCAwcHg7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICM3YzY4Zjg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XG59XG5cbi5wZGYtd3JhcHBlcixcbi5leGNlbC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2V4Y2VsTmV3LnN2Z1wiKSBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5mYWItYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiBsYXZlbmRlcjtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTExcHg7XG4gIHJpZ2h0OiAtMnB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uZmFiLWJ0bjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2I2YjZiNjtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/esim-transport-details/esim-transport-details.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/esim-transport-details/esim-transport-details.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: EsimTransportDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimTransportDetailsPage", function() { return EsimTransportDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _add_transport_details_add_transport_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-transport-details/add-transport-details.component */ "./src/app/delar-application/esim-transport-details/add-transport-details/add-transport-details.component.ts");









var EsimTransportDetailsPage = /** @class */ (function () {
    function EsimTransportDetailsPage(platform, modalController, alertController, commonService, ajaxService, ete) {
        this.platform = platform;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.ete = ete;
        this.companyId = localStorage.getItem("userName");
        this.page = [];
        this.arrow = false;
    }
    EsimTransportDetailsPage.prototype.scrollToTop = function () {
        this.content.scrollToTop(500);
    };
    EsimTransportDetailsPage.prototype.scrollToBottom = function () {
        this.content.scrollToBottom(500);
    };
    EsimTransportDetailsPage.prototype.logScrolling = function (ev) {
        if (ev.detail.scrollTop > 2) {
            this.arrow = true;
        }
        if (ev.detail.scrollTop < 2) {
            this.arrow = false;
        }
    };
    EsimTransportDetailsPage.prototype.getDatas = function (d) {
        var _this = this;
        this.page = [];
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/getAllEsimTrasnsportDetails";
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.tableData = res;
            _this.commonService.dismissLoader();
            _this.page = ["100", "200", "500", "1000"];
            _this.renderer = function (row, column, value) {
                if (value == "" || null || undefined || value == ",") {
                    return "--";
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
                    text: "Dealer",
                    datafield: "dealer",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 158,
                },
                {
                    text: "Invoice No",
                    datafield: "invoiceno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 160,
                },
                {
                    text: "Transport No",
                    datafield: "transportno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 160,
                },
                {
                    text: "Transport Date",
                    datafield: "transportdate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 158,
                },
                {
                    text: "Transport Amount",
                    datafield: "transportamount",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 160,
                },
                {
                    text: "Created by",
                    datafield: "createdby",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 158,
                },
                {
                    text: "",
                    datafield: "View Detail",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 123,
                    cellsrenderer: function () {
                        return _this.myPlatform == "desktop"
                            ? "Edit"
                            : "<button>Edit</button>";
                    },
                    buttonclick: function (row) {
                        _this.viewModel();
                    },
                },
                {
                    text: "",
                    datafield: "download",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 123,
                    cellsrenderer: function () {
                        return "Download";
                    },
                    buttonclick: function (row) {
                        _this.Download(row);
                    },
                },
            ];
        });
    };
    EsimTransportDetailsPage.prototype.Download = function (row) {
        if (this.selectedRow.uploaddocument != null) {
            var link = document.createElement("a");
            link.href = this.selectedRow.uploaddocument;
            link.target = "_blank";
            link.click();
        }
        else {
            this.commonService.showConfirm("Invoice Document Not Uploaded");
        }
    };
    EsimTransportDetailsPage.prototype.viewModel = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _add_transport_details_add_transport_details_component__WEBPACK_IMPORTED_MODULE_8__["AddTransportDetailsComponent"],
                            cssClass: "tranportform",
                            componentProps: {
                                value: data == "add" ? {} : this.selectedRow,
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        console.log(this.selectedRow);
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "saved success") {
                                _this.getDatas();
                                _this.myGrid.clearselection();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EsimTransportDetailsPage.prototype.myGridOnRowSelect = function (event) {
        console.log(event.args.row);
        this.selectedRow = event.args.row.bounddata;
        this.show = true;
    };
    EsimTransportDetailsPage.prototype.newfunc = function () {
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
            title: "Device Transport Details",
            data: forExcel,
            headers: Header,
        };
        this.ete.exportExcel(reportData);
    };
    EsimTransportDetailsPage.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
    };
    EsimTransportDetailsPage.prototype.ionViewWillEnter = function () {
        this.getDatas();
    };
    EsimTransportDetailsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExportExcelService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
    ], EsimTransportDetailsPage.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EsimTransportDetailsPage.prototype, "content", void 0);
    EsimTransportDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-esim-transport-details",
            template: __webpack_require__(/*! raw-loader!./esim-transport-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-transport-details/esim-transport-details.page.html"),
            styles: [__webpack_require__(/*! ./esim-transport-details.page.scss */ "./src/app/delar-application/esim-transport-details/esim-transport-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExportExcelService"]])
    ], EsimTransportDetailsPage);
    return EsimTransportDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=esim-transport-details-esim-transport-details-module-es5.js.map