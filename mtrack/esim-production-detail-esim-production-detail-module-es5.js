(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esim-production-detail-esim-production-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-production-detail/esim-add-production/esim-add-production.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-production-detail/esim-add-production/esim-add-production.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"myPlatform != 'desktop'\">\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Add Production Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"myPlatform != 'desktop'\" class=\"content-style label-style\">\n  <ion-grid>\n    <ion-row class=\"form-field\">\n      <ion-col\n        size=\"12\"\n        size-sm=\"12\"\n        size-md=\"10\"\n        offset-md=\"1\"\n        size-lg=\"12\"\n        offset-lg=\"0\"\n      >\n        <form [formGroup]=\"productionForm\">\n          <div class=\"wrapper-form\">\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Box Number :</ion-label>\n                <ion-input\n                  class=\"diable-style\"\n                  type=\"text\"\n                  disabled\n                  formControlName=\"SerialNo\"\n                  value=\"{{ serial }}\"\n                  placeholder=\"Enter the SerialNo\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Device Model :</ion-label>\n                <ionic-selectable\n                  class=\"input selectable-input\"\n                  formControlName=\"devicemodel\"\n                  placeholder=\"Select the Device Model\"\n                  [items]=\"devicemodellist\"\n                  [canSearch]=\"true\"\n                  (onChange)=\"getdevicemodellist($event)\"\n                  [hasVirtualScroll]=\"true\"\n                  [disabledItems]=\"data\"\n                >\n                </ionic-selectable>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">ICCID Number :</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  formControlName=\"iccidno\"\n                  placeholder=\"Enter the ICCID Number\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">VLTD Number :</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  formControlName=\"vltdsno\"\n                  placeholder=\"Enter the VLTD No\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"10\">\n                <ion-label class=\"col-content\">IMEI Number :</ion-label>\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"imeiNo\"\n                  placeholder=\"Enter the IMEI Number\"\n                ></ion-input>\n              </ion-col>\n              <ion-col size=\"1\" style=\"margin-top: 20px\">\n                <ion-button (click)=\"click($event)\">+</ion-button>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">File Upload:</ion-label>\n                <input\n                  type=\"file\"\n                  class=\"documents\"\n                  (change)=\"onFileChange($event)\"\n                  formControlName=\"fileupload\"\n                  ng2FileSelect\n                  [uploader]=\"uploader\"\n                />\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"col-content\">Quantity :</ion-label>\n                <ion-input\n                  class=\"diable-style\"\n                  type=\"number\"\n                  disabled\n                  [(ngModel)]=\"Qty\"\n                  [ngModelOptions]=\"{ standalone: true }\"\n                  placeholder=\"Quantity\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n          </div>\n        </form>\n\n        <ion-row class=\"content-style\">\n          <ion-col>\n            <jqxGrid\n              *ngIf=\"isshow\"\n              #myGrid\n              [theme]=\"'material'\"\n              [width]=\"'99%'\"\n              [autoheight]=\"true\"\n              [showfilterrow]=\"false\"\n              [rowsheight]=\"30\"\n              [source]=\"dataAdapter\"\n              [columns]=\"columns\"\n              [showstatusbar]=\"true\"\n              [statusbarheight]=\"30\"\n              [showaggregates]=\"true\"\n              [sortable]=\"false\"\n              [filterable]=\"false\"\n              [columns]=\"columns\"\n              [columnsresize]=\"true\"\n              [enabletooltips]=\"true\"\n              [pageable]=\"false\"\n              [selectionmode]=\"'singlerow'\"\n              style=\"font-size: 10px; text-align: center !important\"\n            >\n            </jqxGrid>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"content-style\">\n          <ion-col style=\"text-align: center !important; padding: 0px\">\n            <ion-button\n              *ngIf=\"enableSubmit\"\n              class=\"button\"\n              type=\"submit\"\n              [disabled]=\"!productionForm.valid || button\"\n              (click)=\"submitBtn()\"\n              >Submit</ion-button\n            >\n\n            <ion-button\n              *ngIf=\"enableFileSubmit\"\n              class=\"button\"\n              type=\"submit\"\n              (click)=\"submitWithExcel()\"\n              >Upload</ion-button\n            >\n            <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\"\n              >Cancel</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf=\"myPlatform == 'desktop'\" class=\"content-style label-style\">\n  <ion-row class=\"form-field\">\n    <ion-col>\n      <form [formGroup]=\"productionForm\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Box Number :</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"diable-style\"\n                  type=\"text\"\n                  disabled\n                  formControlName=\"SerialNo\"\n                  value=\"{{ serial }}\"\n                  placeholder=\"Enter the SerialNo\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Device Model :</ion-col>\n              <ion-col size=\"7\">\n                <ionic-selectable\n                  class=\"input selectable-input\"\n                  formControlName=\"devicemodel\"\n                  placeholder=\"Select the Device Model\"\n                  [items]=\"devicemodellist\"\n                  [canSearch]=\"true\"\n                  (onChange)=\"getdevicemodellist($event)\"\n                  [hasVirtualScroll]=\"true\"\n                  [disabledItems]=\"data\"\n                >\n                </ionic-selectable>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">ICCID Number :</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  formControlName=\"iccidno\"\n                  placeholder=\"Enter the ICCID Number\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">VLTD No :</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  formControlName=\"vltdsno\"\n                  placeholder=\"Enter the VLTD No\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">IMEI Number : </ion-col>\n              <ion-col size=\"6\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"number\"\n                  formControlName=\"imeiNo\"\n                  placeholder=\"Enter the IMEI Number\"\n                ></ion-input>\n              </ion-col>\n              <ion-col size=\"1\">\n                <ion-button (click)=\"click($event)\">+</ion-button>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">File Upload:</ion-col>\n              <ion-col size=\"7\">\n                <input\n                  type=\"file\"\n                  class=\"documents\"\n                  (change)=\"onFileChange($event)\"\n                  formControlName=\"fileupload\"\n                  ng2FileSelect\n                  [uploader]=\"uploader\"\n                />\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Quantity :</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"diable-style\"\n                  type=\"number\"\n                  disabled\n                  [(ngModel)]=\"Qty\"\n                  [ngModelOptions]=\"{ standalone: true }\"\n                  placeholder=\"Quantity\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col>\n          <jqxGrid\n            *ngIf=\"isshow\"\n            #myGrid\n            [theme]=\"'material'\"\n            [width]=\"'99%'\"\n            [autoheight]=\"true\"\n            [showfilterrow]=\"false\"\n            [rowsheight]=\"30\"\n            [source]=\"dataAdapter\"\n            [columns]=\"columns\"\n            [showstatusbar]=\"true\"\n            [statusbarheight]=\"30\"\n            [showaggregates]=\"true\"\n            [sortable]=\"false\"\n            [filterable]=\"false\"\n            [columns]=\"columns\"\n            [columnsresize]=\"true\"\n            [enabletooltips]=\"true\"\n            [pageable]=\"false\"\n            [selectionmode]=\"'singlerow'\"\n            style=\"font-size: 10px; text-align: center !important\"\n          >\n          </jqxGrid>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 0px\">\n          <ion-button\n            *ngIf=\"enableSubmit\"\n            class=\"button\"\n            type=\"submit\"\n            [disabled]=\"!productionForm.valid\"\n            (click)=\"submitBtn()\"\n            >Submit</ion-button\n          >\n\n          <ion-button\n            *ngIf=\"enableFileSubmit\"\n            class=\"button\"\n            type=\"submit\"\n            [disabled]=\"button\"\n            (click)=\"submitWithExcel()\"\n            >Upload</ion-button\n          >\n          <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\"\n            >Cancel</ion-button\n          >\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-production-detail/esim-production-detail.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-production-detail/esim-production-detail.page.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons\n      *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\"\n      slot=\"start\"\n    >\n      <ion-icon\n        routerLink=\"/tabs-login/esim-dashboard\"\n        name=\"arrow-back\"\n        style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-grid>\n      <ion-row class=\"toolbar\">\n        <ion-title>Device Production</ion-title>\n        <ion-col\n          *ngIf=\"myPlatform == 'desktop'\"\n          size=\"8\"\n          style=\"text-align: right\"\n        >\n          <ion-row style=\"margin: 0px; padding: 0; float: right\">\n            <ion-col style=\"margin-top: 8px\" class=\"tooltip\">\n              <ion-fab-button\n                size=\"small\"\n                class=\"fab-btn\"\n                href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/DeviceProduction.xlsx\"\n                download=\"sample.xlsx\"\n              >\n                <div class=\"excel-wrapper\"></div>\n              </ion-fab-button>\n              <span class=\"tooltiptext\">Excel-Format</span>\n            </ion-col>\n            <ion-col>\n              <ion-button (click)=\"openModel()\" class=\"submitBtn\" size=\"small\"\n                >ADD</ion-button\n              >\n            </ion-col>\n            <ion-col>\n              <ion-button class=\"submitBtn\" size=\"small\" (click)=\"newfunc()\"\n                >Export</ion-button\n              >\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <ion-row *ngIf=\"myPlatform != 'desktop'\">\n    <ion-col style=\"text-align: right\">\n      <ion-row style=\"margin: 0px; padding: 0; float: right\">\n        <ion-col style=\"margin-top: 8px\" class=\"tooltip\">\n          <ion-fab-button\n            size=\"small\"\n            class=\"fab-btn\"\n            href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/DeviceProduction.xlsx\"\n            download=\"sample.xlsx\"\n          >\n            <div class=\"excel-wrapper\"></div>\n          </ion-fab-button>\n          <span class=\"tooltiptext\">Excel-Format</span>\n        </ion-col>\n        <ion-col>\n          <ion-button (click)=\"openModel()\" class=\"submitBtn\" size=\"small\"\n            >ADD</ion-button\n          >\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"margin: 15px 0px 0px 0px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        [theme]=\"'material'\"\n        (onRowclick)=\"myGridOnRowSelect($event)\"\n        [width]=\"'99%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [columns]=\"columns\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [enablebrowserselection]=\"true\"\n        [pagesizeoptions]=\"page\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n\n  <ion-fab\n    *ngIf=\"arrow\"\n    style=\"margin-right: 1%; margin-bottom: 9%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToTop()\">\n      <ion-icon class=\"icon\" name=\"arrow-up\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab\n    *ngIf=\"arrow\"\n    style=\"margin-right: 1%; margin-bottom: 5%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToBottom()\">\n      <ion-icon class=\"icon\" name=\"arrow-down\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-production-detail/esim-view-production/esim-view-production.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-production-detail/esim-view-production/esim-view-production.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>View Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        [theme]=\"'material'\"\n        [width]=\"'99%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [columns]=\"columns\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [enablebrowserselection]=\"true\"\n        [pagesizeoptions]=\"page\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [showfilterrow]=\"true\"\n        [pageable]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/esim-production-detail/esim-add-production/esim-add-production.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-production-detail/esim-add-production/esim-add-production.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 18px;\n}\n\n.diable-style {\n  background: white;\n  line-height: 18px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.total-data {\n  margin-top: 3%;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background:#FFEBCD;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.file {\n  margin-left: 8%;\n  border: 1px solid #3d6cec;\n}\n\n.file-input-container input[type=file] {\n  display: none;\n}\n\n.documents {\n  margin: 10px 0px;\n  text-align: center;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1wcm9kdWN0aW9uLWRldGFpbC9lc2ltLWFkZC1wcm9kdWN0aW9uL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGVzaW0tcHJvZHVjdGlvbi1kZXRhaWxcXGVzaW0tYWRkLXByb2R1Y3Rpb25cXGVzaW0tYWRkLXByb2R1Y3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tcHJvZHVjdGlvbi1kZXRhaWwvZXNpbS1hZGQtcHJvZHVjdGlvbi9lc2ltLWFkZC1wcm9kdWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDSixtQkFBQTtFQUNDLGlCQUFBO0FDQ0Q7O0FEQ0E7RUFDQSxpQkFBQTtFQUNDLGlCQUFBO0FDRUQ7O0FEQUE7RUFDSSx3QkFBQTtVQUFBLHVCQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0FDSUo7O0FERkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0tKOztBREhBO0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDTUo7O0FESkE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNPSjs7QURMQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ1FKOztBRExBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDUUY7O0FETkE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUNTSjs7QUROSTtFQUVJLGFBQUE7QUNRUjs7QURMQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNRSjs7QUROQTtFQUNJO0lBQ0ksU0FBQTtFQ1NOOztFRE5FO0lBQ0ksVUFBQTtFQ1NOO0FBQ0Y7O0FETkE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FDUUoiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLXByb2R1Y3Rpb24tZGV0YWlsL2VzaW0tYWRkLXByb2R1Y3Rpb24vZXNpbS1hZGQtcHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1zdHlsZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbmJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG4uZGlhYmxlLXN0eWxle1xyXG5iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcbi5jb250ZW50LXN0eWxle1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxufVxyXG4udG90YWwtZGF0YSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxufVxyXG4uY29sLWNvbnRlbnR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbiNhZGQtaWNvbntcclxuICAgIC0tYmFja2dyb3VuZDojRkZFQkNEO1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM3YzY4Zjg7XHJcbn1cclxuLmlucHV0e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICAgIFxyXG59XHJcbi5zZWxlY3RhYmxlLWlucHV0e1xyXG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5maWxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MSwgMTA4LCAyMzYpO1xyXG59XHJcbi5maWxlLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuLmRvY3VtZW50cyB7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xyXG4gICAgLmZvcm0tZmllbGQge1xyXG4gICAgICAgIHpvb206IDgwJTtcclxuICAgIH1cclxuXHJcbiAgICAjc3VibWl0YnRuIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW46IC01cHggNXB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxufSIsIi5sYWJlbC1zdHlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uZGlhYmxlLXN0eWxlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uY29udGVudC1zdHlsZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udG90YWwtZGF0YSB7XG4gIG1hcmdpbi10b3A6IDMlO1xufVxuXG4uY29sLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI2FkZC1pY29uIHtcbiAgLS1iYWNrZ3JvdW5kOiNGRkVCQ0Q7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIC0tYmFja2dyb3VuZDogIzdjNjhmODtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmZpbGUge1xuICBtYXJnaW4tbGVmdDogOCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZDZjZWM7XG59XG5cbi5maWxlLWlucHV0LWNvbnRhaW5lciBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRvY3VtZW50cyB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-production-detail/esim-add-production/esim-add-production.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-production-detail/esim-add-production/esim-add-production.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: EsimAddProductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimAddProductionComponent", function() { return EsimAddProductionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");











var EsimAddProductionComponent = /** @class */ (function () {
    function EsimAddProductionComponent(platform, formBuilder, modalController, ajaxService, commonService) {
        var _this = this;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploader"]({});
        this.isshow = false;
        this.tableData = [];
        this.dataString = [];
        this.enableFileSubmit = false;
        this.enableSubmit = true;
        this.button = false;
        this.getdevicemodellist = function (event) {
            if (event.value)
                _this.productionForm.value.devicemodel = event.value;
        };
    }
    EsimAddProductionComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    EsimAddProductionComponent.prototype.onFileChange = function (ev) {
        var _this = this;
        var fileName = ev.srcElement.files[0];
        this.name = fileName.name.includes(".xlsx");
        if (this.name == true) {
            this.enableFileSubmit = true;
            this.enableSubmit = false;
            this.dataString = [];
            var workBook_1 = null;
            var jsonData_1 = null;
            var reader_1 = new FileReader();
            var file = ev.srcElement.files[0];
            reader_1.onload = function (event) {
                var data = reader_1.result;
                workBook_1 = xlsx__WEBPACK_IMPORTED_MODULE_9__["read"](data, { type: "binary" });
                jsonData_1 = workBook_1.SheetNames.reduce(function (initial, name) {
                    var sheet = workBook_1.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].sheet_to_json(sheet);
                    return initial;
                }, {});
                var json = [];
                for (var i = 0; i < jsonData_1["Sheet1"].length; i++) {
                    var newData = {};
                    newData["iccidno"] = jsonData_1["Sheet1"][i]["iccidno"].toString();
                    newData["imei"] = jsonData_1["Sheet1"][i]["imei"].toString();
                    newData["vltdsno"] = jsonData_1["Sheet1"][i]["vltdsno"].toString();
                    json.push(newData);
                }
                _this.dataString = json;
                _this.output = _this.dataString.slice(0, 300).concat("...");
            };
            reader_1.readAsBinaryString(file);
        }
        else {
            this.commonService.showConfirm("Please insert only excel file (.xlsx)");
            this.enableFileSubmit = false;
            this.enableSubmit = true;
        }
    };
    EsimAddProductionComponent.prototype.submitWithExcel = function () {
        var _this = this;
        if (this.dataString.length == 0 ||
            this.productionForm.value.devicemodel == "") {
            if (this.dataString.length == 0) {
                this.commonService.showConfirm("check your excell file,don't enter blank spaces");
            }
            else {
                this.commonService.showConfirm("Please select the device model");
            }
        }
        else {
            this.button = true;
            var excellKeys = Object.keys(this.dataString[0]);
            for (var i = 0; i < excellKeys.length; i++) {
                if (excellKeys[i] == "iccidno" || excellKeys[i] == "imei") {
                    console.log("present");
                    this.excellKeyValid = true;
                }
            }
            if (this.name == true && this.excellKeyValid == true) {
                this.commonService.presentLoader();
                this.imeiIssues = [];
                var data;
                data = {
                    companyid: localStorage.getItem("corpId"),
                    branchid: localStorage.getItem("corpId"),
                    serialno: this.productionForm.value.SerialNo,
                    quantity: this.Qty,
                    createdby: localStorage.getItem("userName"),
                    salesdetail: this.dataString,
                    devicemodel: this.productionForm.value.devicemodel,
                };
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
                    "/esim/saveEsimBulkProduction?companyid=" +
                    localStorage.getItem("corpId") +
                    "&branchid=" +
                    localStorage.getItem("corpId");
                this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
                    if (res) {
                        _this.commonService.dismissLoader();
                    }
                    if (res.message == "Production Saved Successfully") {
                        _this.commonService.showConfirm("Box Detail Added Succesfully");
                        _this.modalController.dismiss({
                            data: "Box Detail Added Succesfully",
                        });
                        _this.reset();
                        _this.button = false;
                    }
                    else {
                        _this.commonService.showConfirm(res.message);
                        _this.button = false;
                    }
                });
            }
        }
    };
    EsimAddProductionComponent.prototype.submitBtn = function () {
        var _this = this;
        this.button = true;
        var data;
        data = {
            companyid: localStorage.getItem("corpId"),
            branchid: localStorage.getItem("corpId"),
            serialno: this.productionForm.value.SerialNo,
            quantity: this.Qty,
            createdby: localStorage.getItem("userName"),
            salesdetail: this.tableData,
            devicemodel: this.productionForm.value.devicemodel,
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/esim/saveEsimProduction?companyid=" +
            localStorage.getItem("corpId") +
            "&branchid=" +
            localStorage.getItem("corpId");
        this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
            if (res.message == "Production Saved Successfully") {
                _this.commonService.showConfirm("Box Detail Added Succesfully");
                _this.modalController.dismiss({ data: "Box Detail Added Succesfully" });
                _this.reset();
                _this.button = false;
            }
            else {
                _this.button = false;
                _this.commonService.showConfirm(res.message);
            }
        });
    };
    EsimAddProductionComponent.prototype.click = function () {
        var _this = this;
        if (this.productionForm.value.iccidno == "") {
            this.commonService.showConfirm("Enter the Iccid Number");
        }
        else if (this.productionForm.value.imeiNo == "") {
            this.commonService.showConfirm("Enter the Imei Number");
        }
        else if (this.productionForm.value.vltdsno == "") {
            this.commonService.showConfirm("Enter the VLTD No");
        }
        else if (this.productionForm.value.imeiNo.toString().length > 15 ||
            this.productionForm.value.imeiNo.toString().length < 15) {
            this.commonService.showConfirm("Imei No length should be 15 digits");
        }
        else {
            var show_1 = true;
            if (this.myGrid)
                this.myGrid["attrSource"]["originaldata"].map(function (res) {
                    if (res.iccidno1 == _this.productionForm.value.iccidno) {
                        _this.commonService.showConfirm("Iccidno No Already Assigned");
                        show_1 = false;
                    }
                    else if (res.vltdsno == _this.productionForm.value.vltdsno) {
                        _this.commonService.showConfirm("VLTD No Already Assigned");
                        show_1 = false;
                    }
                    else if (res.imei == _this.productionForm.value.imeiNo) {
                        _this.commonService.showConfirm("Imei No Already Assigned");
                        show_1 = false;
                    }
                });
            if (show_1) {
                {
                    var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
                        "/esim/getSingleEsimManufactureByImei?companyid=" +
                        localStorage.getItem("corpId") +
                        "&iccidno=" +
                        this.productionForm.value.iccidno +
                        "&imei=" +
                        this.productionForm.value.imeiNo +
                        "&vltdsno=" +
                        this.productionForm.value.vltdsno;
                    this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
                        _this.imeidetail = res;
                        if (res.message == "Invalid ICCID") {
                            _this.commonService.showConfirm(res.message);
                        }
                        else if (res.message == "ICCID Already Exists") {
                            _this.commonService.showConfirm(res.message);
                        }
                        else if (res.message == "Invalid VLTD No") {
                            _this.commonService.showConfirm(res.message);
                        }
                        else if (res.message == "VLTD No Already Exists") {
                            _this.commonService.showConfirm(res.message);
                        }
                        else if (res.message == "Invalid IMEI") {
                            _this.commonService.showConfirm(res.message);
                        }
                        else if (res.message == "IMEI Already Exists") {
                            _this.commonService.showConfirm(res.message);
                        }
                        else {
                            var detailValue = {
                                imei: _this.imeidetail.imei,
                                iccidno: _this.imeidetail.iccidno,
                                iccidno1: _this.imeidetail.iccidno1,
                                iccidno2: _this.imeidetail.iccidno2,
                                vltdsno: _this.imeidetail.vltdsno,
                            };
                            _this.tableData.push(detailValue);
                            _this.reset();
                            _this.Qty = _this.tableData.length;
                            _this.isshow = true;
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
                                    text: "Iccid Number",
                                    datafield: "iccidno1",
                                    cellsrenderer: _this.renderer,
                                    cellsalign: "center",
                                    align: "center",
                                    width: 120,
                                },
                                {
                                    text: "Imei Number",
                                    datafield: "imei",
                                    cellsrenderer: _this.renderer,
                                    cellsalign: "center",
                                    align: "center",
                                    width: 120,
                                },
                                {
                                    text: "VLTD No",
                                    datafield: "vltdsno",
                                    cellsrenderer: _this.renderer,
                                    cellsalign: "center",
                                    align: "center",
                                    width: 120,
                                },
                                {
                                    text: "Delete",
                                    datafield: "Delete",
                                    columntype: "button",
                                    cellsalign: "center",
                                    align: "center",
                                    width: 90,
                                    cellsrenderer: function () {
                                        return "Delete";
                                    },
                                    buttonclick: function (row) {
                                        _this.deleteAnalogRow(row);
                                    },
                                },
                            ];
                        }
                    });
                }
            }
        }
    };
    EsimAddProductionComponent.prototype.deleteAnalogRow = function (row) {
        this.tableData.splice(row, 1);
        this.source = { localdata: this.tableData };
        this.Qty = this.tableData.length;
        this.dataAdapter = new jqx.dataAdapter(this.source);
    };
    EsimAddProductionComponent.prototype.createForm = function () {
        this.productionForm = this.formBuilder.group({
            devicemodel: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            SerialNo: [""],
            iccidno: [""],
            imeiNo: [""],
            vltdsno: [""],
            fileupload: [""],
        });
    };
    EsimAddProductionComponent.prototype.reset = function () {
        this.productionForm.patchValue({
            SerialNo: this.serial,
            iccidno: "",
            imeiNo: "",
            vltdsno: "",
            fileupload: "",
        });
    };
    EsimAddProductionComponent.prototype.getModellist = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/esim/getModel";
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            _this.devicemodellist = res;
            console.log(_this.devicemodellist);
        });
    };
    EsimAddProductionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/esim/generateSerialno?companyid=" +
            localStorage.getItem("corpId");
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.serial = res;
        });
        this.getModellist();
        this.createForm();
    };
    EsimAddProductionComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridComponent"])
    ], EsimAddProductionComponent.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("selectComponent", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic_selectable__WEBPACK_IMPORTED_MODULE_4__["IonicSelectableComponent"])
    ], EsimAddProductionComponent.prototype, "selectComponent", void 0);
    EsimAddProductionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-esim-add-production",
            template: __webpack_require__(/*! raw-loader!./esim-add-production.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-production-detail/esim-add-production/esim-add-production.component.html"),
            styles: [__webpack_require__(/*! ./esim-add-production.component.scss */ "./src/app/delar-application/esim-production-detail/esim-add-production/esim-add-production.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]])
    ], EsimAddProductionComponent);
    return EsimAddProductionComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-production-detail/esim-production-detail.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/delar-application/esim-production-detail/esim-production-detail.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: EsimProductionDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimProductionDetailPageModule", function() { return EsimProductionDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _esim_production_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esim-production-detail.page */ "./src/app/delar-application/esim-production-detail/esim-production-detail.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _esim_view_production_esim_view_production_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./esim-view-production/esim-view-production.component */ "./src/app/delar-application/esim-production-detail/esim-view-production/esim-view-production.component.ts");
/* harmony import */ var _esim_add_production_esim_add_production_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./esim-add-production/esim-add-production.component */ "./src/app/delar-application/esim-production-detail/esim-add-production/esim-add-production.component.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");












var routes = [
    {
        path: "",
        component: _esim_production_detail_page__WEBPACK_IMPORTED_MODULE_6__["EsimProductionDetailPage"],
    },
    {
        path: "esim-add-production",
        component: _esim_add_production_esim_add_production_component__WEBPACK_IMPORTED_MODULE_9__["EsimAddProductionComponent"],
    },
    {
        path: "esim-view-production",
        component: _esim_view_production_esim_view_production_component__WEBPACK_IMPORTED_MODULE_8__["EsimViewProductionComponent"],
    },
];
var EsimProductionDetailPageModule = /** @class */ (function () {
    function EsimProductionDetailPageModule() {
    }
    EsimProductionDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ionic_selectable__WEBPACK_IMPORTED_MODULE_10__["IonicSelectableModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileUploadModule"],
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [
                _esim_production_detail_page__WEBPACK_IMPORTED_MODULE_6__["EsimProductionDetailPage"],
                _esim_add_production_esim_add_production_component__WEBPACK_IMPORTED_MODULE_9__["EsimAddProductionComponent"],
                _esim_view_production_esim_view_production_component__WEBPACK_IMPORTED_MODULE_8__["EsimViewProductionComponent"],
            ],
        })
    ], EsimProductionDetailPageModule);
    return EsimProductionDetailPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-production-detail/esim-production-detail.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/delar-application/esim-production-detail/esim-production-detail.page.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fabbutton {\n  --background: whitesmoke;\n  --background-hover: grey;\n}\n\n.icon {\n  color: black;\n}\n\n.icon:hover {\n  color: white;\n}\n\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -11px;\n  right: -2px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -15px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1wcm9kdWN0aW9uLWRldGFpbC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxlc2ltLXByb2R1Y3Rpb24tZGV0YWlsXFxlc2ltLXByb2R1Y3Rpb24tZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1wcm9kdWN0aW9uLWRldGFpbC9lc2ltLXByb2R1Y3Rpb24tZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7QUNHRjs7QURBQTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ0dGOztBRERBOztFQUVFLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNJRjs7QURGQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNLRjs7QURIQTtFQUNFLDJCQUFBO0FDTUY7O0FESEE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDTUY7O0FESEE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ01GOztBREhBO0VBQ0UsbUJBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tcHJvZHVjdGlvbi1kZXRhaWwvZXNpbS1wcm9kdWN0aW9uLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFiYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBncmV5O1xyXG59XHJcbi5pY29uIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmljb246aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnN1Ym1pdEJ0biB7XHJcbiAgbWFyZ2luOiAwcHggMTRweCAwcHggMHB4O1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAtLWNvbG9yOiAjN2M2OGY4O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcclxuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcclxufVxyXG4ucGRmLXdyYXBwZXIsXHJcbi5leGNlbC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZXhjZWxOZXcuc3ZnXCIpIG5vLXJlcGVhdDtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuLmZhYi1idG4ge1xyXG4gIC0tYmFja2dyb3VuZDogbGF2ZW5kZXI7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xMXB4O1xyXG4gIHJpZ2h0OiAtMnB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxufVxyXG4uZmFiLWJ0bjpob3ZlciB7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjYjZiNmI2O1xyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC04MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcbiIsIi5mYWJidXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogZ3JleTtcbn1cblxuLmljb24ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5pY29uOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3VibWl0QnRuIHtcbiAgbWFyZ2luOiAwcHggMTRweCAwcHggMHB4O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM3YzY4Zjg7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xufVxuXG4ucGRmLXdyYXBwZXIsXG4uZXhjZWwtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9leGNlbE5ldy5zdmdcIikgbm8tcmVwZWF0O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uZmFiLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogbGF2ZW5kZXI7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMXB4O1xuICByaWdodDogLTJweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLmZhYi1idG46aG92ZXIge1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-production-detail/esim-production-detail.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/esim-production-detail/esim-production-detail.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: EsimProductionDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimProductionDetailPage", function() { return EsimProductionDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _esim_add_production_esim_add_production_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./esim-add-production/esim-add-production.component */ "./src/app/delar-application/esim-production-detail/esim-add-production/esim-add-production.component.ts");
/* harmony import */ var _esim_view_production_esim_view_production_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./esim-view-production/esim-view-production.component */ "./src/app/delar-application/esim-production-detail/esim-view-production/esim-view-production.component.ts");









var EsimProductionDetailPage = /** @class */ (function () {
    function EsimProductionDetailPage(platform, modalController, alertController, commonService, ajaxService, ete) {
        this.platform = platform;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.ete = ete;
        this.page = [];
        this.companyId = localStorage.getItem("userName");
        this.arrow = false;
    }
    EsimProductionDetailPage.prototype.scrollToTop = function () {
        this.content.scrollToTop(500);
    };
    EsimProductionDetailPage.prototype.scrollToBottom = function () {
        this.content.scrollToBottom(500);
    };
    EsimProductionDetailPage.prototype.logScrolling = function (ev) {
        if (ev.detail.scrollTop > 2) {
            this.arrow = true;
        }
        if (ev.detail.scrollTop < 2) {
            this.arrow = false;
        }
    };
    EsimProductionDetailPage.prototype.getDatas = function () {
        var _this = this;
        this.page = [];
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/esim/getEsimProductionAll?companyid=" +
            localStorage.getItem("corpId");
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            var detail = res;
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
                    text: "Box Number",
                    datafield: "serialno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 230,
                },
                {
                    text: "Quantity",
                    datafield: "qty",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 180,
                },
                {
                    text: "Date",
                    datafield: "date",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 230,
                },
                {
                    text: "Created by",
                    datafield: "createdby",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 230,
                },
                {
                    text: "View Detail",
                    datafield: "View Detail",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 140,
                    cellsrenderer: function () {
                        return _this.myPlatform == "desktop"
                            ? "View Details"
                            : "<button>View Details</button>";
                    },
                    buttonclick: function (row) {
                        _this.viewModel(row);
                    },
                },
                {
                    text: "Remove",
                    datafield: "remove",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                    cellsrenderer: function () {
                        return _this.myPlatform == "desktop"
                            ? "Remove"
                            : "<button>Remove</button>";
                    },
                    buttonclick: function (row) {
                        _this.deleteModel(row);
                    },
                },
            ];
        });
    };
    EsimProductionDetailPage.prototype.deleteModel = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.selectedRow) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: " Delete",
                                backdropDismiss: false,
                                message: "Are you sure you want to remove?",
                                buttons: [
                                    {
                                        text: "Cancel",
                                        role: "cancel",
                                        handler: function (data) { },
                                    },
                                    {
                                        text: "Ok",
                                        handler: function (data) {
                                            _this.delete();
                                        },
                                    },
                                ],
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EsimProductionDetailPage.prototype.delete = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/esim/getEsimProductionRemove?boxno=" +
            this.selectedRow.serialno;
        this.ajaxService.ajaxDeleteWithString(url).subscribe(function (res) {
            if (res.message == "Box Removed Successfully") {
                _this.commonService.showConfirm(res.message);
                _this.getDatas();
            }
            else {
                _this.commonService.showConfirm(res.message);
            }
        });
    };
    EsimProductionDetailPage.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = event.args.row.bounddata;
    };
    EsimProductionDetailPage.prototype.viewModel = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _esim_view_production_esim_view_production_component__WEBPACK_IMPORTED_MODULE_8__["EsimViewProductionComponent"],
                            cssClass: "viewform",
                            componentProps: {
                                value: this.selectedRow.serialno,
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            _this.selectedRow = undefined;
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EsimProductionDetailPage.prototype.openModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _esim_add_production_esim_add_production_component__WEBPACK_IMPORTED_MODULE_7__["EsimAddProductionComponent"],
                            cssClass: "tranportform",
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            console.log(data.data.data);
                            if (data.data.data == "Box Detail Added Succesfully") {
                                _this.getDatas();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EsimProductionDetailPage.prototype.newfunc = function () {
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
            title: "Esim Production Details",
            data: forExcel,
            headers: Header,
        };
        this.ete.exportExcel(reportData);
    };
    EsimProductionDetailPage.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
    };
    EsimProductionDetailPage.prototype.ngAfterViewInit = function () {
        this.myGrid.horizontalscrollbarstep(["70"]);
        this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
    };
    EsimProductionDetailPage.prototype.ionViewWillEnter = function () {
        this.getDatas();
    };
    EsimProductionDetailPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"] },
        { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExportExcelService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EsimProductionDetailPage.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EsimProductionDetailPage.prototype, "content", void 0);
    EsimProductionDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-esim-production-detail",
            template: __webpack_require__(/*! raw-loader!./esim-production-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-production-detail/esim-production-detail.page.html"),
            styles: [__webpack_require__(/*! ./esim-production-detail.page.scss */ "./src/app/delar-application/esim-production-detail/esim-production-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"],
            src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExportExcelService"]])
    ], EsimProductionDetailPage);
    return EsimProductionDetailPage;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-production-detail/esim-view-production/esim-view-production.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-production-detail/esim-view-production/esim-view-production.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  color: white;\n}\n\n.arrow-back {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1wcm9kdWN0aW9uLWRldGFpbC9lc2ltLXZpZXctcHJvZHVjdGlvbi9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxlc2ltLXByb2R1Y3Rpb24tZGV0YWlsXFxlc2ltLXZpZXctcHJvZHVjdGlvblxcZXNpbS12aWV3LXByb2R1Y3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tcHJvZHVjdGlvbi1kZXRhaWwvZXNpbS12aWV3LXByb2R1Y3Rpb24vZXNpbS12aWV3LXByb2R1Y3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0FOOztBREVJO0VBQ0UsWUFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1wcm9kdWN0aW9uLWRldGFpbC9lc2ltLXZpZXctcHJvZHVjdGlvbi9lc2ltLXZpZXctcHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmFycm93LWJhY2t7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH0iLCIuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hcnJvdy1iYWNrIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-production-detail/esim-view-production/esim-view-production.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-production-detail/esim-view-production/esim-view-production.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: EsimViewProductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimViewProductionComponent", function() { return EsimViewProductionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var EsimViewProductionComponent = /** @class */ (function () {
    function EsimViewProductionComponent(ajaxService, modalController) {
        this.ajaxService = ajaxService;
        this.modalController = modalController;
        this.page = [];
    }
    EsimViewProductionComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    EsimViewProductionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
            "/esim/getEsimProductionDetail?companyid=" +
            localStorage.getItem("corpId") +
            "&serialno=" +
            this.value;
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.tableData = res;
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
                    text: "ICCID No",
                    datafield: "iccidno1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 170,
                },
                {
                    text: "SIM No",
                    datafield: "simno1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 170,
                },
                {
                    text: "IMEI No",
                    datafield: "imei",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 170,
                },
                {
                    text: "VLTD No",
                    datafield: "vltdsno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 170,
                },
            ];
        });
    };
    EsimViewProductionComponent.ctorParameters = function () { return [
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
    ], EsimViewProductionComponent.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EsimViewProductionComponent.prototype, "value", void 0);
    EsimViewProductionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-esim-view-production",
            template: __webpack_require__(/*! raw-loader!./esim-view-production.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-production-detail/esim-view-production/esim-view-production.component.html"),
            styles: [__webpack_require__(/*! ./esim-view-production.component.scss */ "./src/app/delar-application/esim-production-detail/esim-view-production/esim-view-production.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], EsimViewProductionComponent);
    return EsimViewProductionComponent;
}());



/***/ })

}]);
//# sourceMappingURL=esim-production-detail-esim-production-detail-module-es5.js.map