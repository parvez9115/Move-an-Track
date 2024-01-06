(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esim-home-esim-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/components/dashboardgrid/dashboardgrid.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/components/dashboardgrid/dashboardgrid.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"popHeader != undefined\">\r\n  <ion-toolbar class=\"dealerHeader\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-icon\r\n        (click)=\"cancel()\"\r\n        name=\"arrow-back\"\r\n        style=\"padding: 10px; cursor: pointer\"\r\n        slot=\"start\"\r\n      ></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Comments</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-row *ngIf=\"popHeader == undefined\" style=\"padding: 10px\">\r\n  <ion-col>\r\n    <jqxGrid\r\n      #myGrid\r\n      [theme]=\"'material'\"\r\n      [width]=\"'99%'\"\r\n      [autoheight]=\"true\"\r\n      [source]=\"dataAdapter\"\r\n      [columns]=\"columns\"\r\n      [sortable]=\"true\"\r\n      [filterable]=\"true\"\r\n      [columnsresize]=\"true\"\r\n      [enablebrowserselection]=\"true\"\r\n      [enabletooltips]=\"true\"\r\n      [pageable]=\"true\"\r\n      [pagesizeoptions]=\"page\"\r\n      [showfilterrow]=\"true\"\r\n      (onRowclick)=\"myGridOnRowclick($event)\"\r\n      style=\"\r\n        font-size: 16px;\r\n        text-align: center !important;\r\n        margin: auto;\r\n        cursor: pointer;\r\n      \"\r\n    >\r\n    </jqxGrid>\r\n  </ion-col>\r\n</ion-row>\r\n\r\n<!-- <div class=\"isempty\" *ngIf=\"endis == true\">\r\n  <img src=\"../../../../assets/3582365.jpg\" />\r\n  <div class=\"empty-state__message\">No Data Found</div>\r\n</div> -->\r\n\r\n<ion-content *ngIf=\"popHeader != undefined\">\r\n  <ion-row style=\"padding: 10px\">\r\n    <ion-col>\r\n      <jqxGrid\r\n        #myGrid\r\n        [theme]=\"'material'\"\r\n        [width]=\"'99%'\"\r\n        [autoheight]=\"true\"\r\n        [source]=\"dataAdapter\"\r\n        [columns]=\"columns\"\r\n        [sortable]=\"true\"\r\n        [filterable]=\"true\"\r\n        [columnsresize]=\"true\"\r\n        [enablebrowserselection]=\"true\"\r\n        [enabletooltips]=\"true\"\r\n        [pageable]=\"true\"\r\n        [pagesizeoptions]=\"page\"\r\n        [showfilterrow]=\"true\"\r\n        (onRowclick)=\"myGridOnRowclick($event)\"\r\n        style=\"\r\n          font-size: 16px;\r\n          text-align: center !important;\r\n          margin: auto;\r\n          cursor: pointer;\r\n        \"\r\n      >\r\n      </jqxGrid>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- <div class=\"isempty\" *ngIf=\"endis == true\">\r\n    <img src=\"../../../../assets/3582365.jpg\" />\r\n    <div class=\"empty-state__message\">No Data Found</div>\r\n  </div> -->\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-home/esim-home.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-home/esim-home.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"dealerHeader\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons\r\n      *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\"\r\n      slot=\"start\"\r\n    >\r\n      <ion-icon\r\n        routerLink=\"/tabs-login/esim-dashboard\"\r\n        name=\"arrow-back\"\r\n        style=\"padding: 10px; cursor: pointer\"\r\n        slot=\"start\"\r\n      ></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Monitoring Dashboard</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\r\n  <ion-row *ngIf=\"myPlatform != 'desktop'\">\r\n    <ion-col class=\"form-field\">\r\n      <ion-row class=\"form-field\">\r\n        <ion-col>\r\n          <ion-row class=\"tabrow\">\r\n            <ion-col>\r\n              <ion-row>\r\n                <div class=\"wrap\">\r\n                  <button\r\n                    (click)=\"switchGrid(1)\"\r\n                    [ngClass]=\"{nexttab:true,select:showGrid==1}\"\r\n                    size=\"2.5\"\r\n                  >\r\n                    CA\r\n                  </button>\r\n                </div>\r\n                <div class=\"wrap\">\r\n                  <button\r\n                    (click)=\"switchGrid(2)\"\r\n                    [ngClass]=\"{nexttab:true,select:showGrid==2}\"\r\n                    size=\"2.5\"\r\n                  >\r\n                    Renewal\r\n                  </button>\r\n                </div>\r\n                <div class=\"wrap\">\r\n                  <button\r\n                    (click)=\"switchGrid(3)\"\r\n                    [ngClass]=\"{nexttab:true,select:showGrid==3}\"\r\n                    size=\"2.5\"\r\n                  >\r\n                    Extend 1 Year\r\n                  </button>\r\n                </div>\r\n                <div class=\"wrap\">\r\n                  <button\r\n                    (click)=\"switchGrid(4)\"\r\n                    [ngClass]=\"{nexttab:true,select:showGrid==4}\"\r\n                    size=\"2.5\"\r\n                  >\r\n                    Topup\r\n                  </button>\r\n                </div>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row></ion-col\r\n        ></ion-row\r\n      ></ion-col\r\n    ></ion-row\r\n  >\r\n\r\n  <ion-row *ngIf=\"myPlatform == 'desktop'\" class=\"tabrow\">\r\n    <ion-col>\r\n      <ion-row>\r\n        <div class=\"wrap\">\r\n          <button\r\n            (click)=\"switchGrid(1)\"\r\n            [ngClass]=\"{nexttab:true,select:showGrid==1}\"\r\n          >\r\n            Pending CA\r\n          </button>\r\n        </div>\r\n        <div class=\"wrap\">\r\n          <button\r\n            (click)=\"switchGrid(2)\"\r\n            [ngClass]=\"{nexttab:true,select:showGrid==2}\"\r\n          >\r\n            Pending Renewal\r\n          </button>\r\n        </div>\r\n        <div class=\"wrap\">\r\n          <button\r\n            (click)=\"switchGrid(3)\"\r\n            [ngClass]=\"{nexttab:true,select:showGrid==3}\"\r\n          >\r\n            Pending Extend 1 Year\r\n          </button>\r\n        </div>\r\n        <div class=\"wrap\">\r\n          <button\r\n            (click)=\"switchGrid(4)\"\r\n            [ngClass]=\"{nexttab:true,select:showGrid==4}\"\r\n          >\r\n            Pending Topup\r\n          </button>\r\n        </div>\r\n        <div *ngIf=\"companyId=='apm-sa'\" class=\"wrap\">\r\n          <button\r\n            (click)=\"switchGrid(5)\"\r\n            [ngClass]=\"{nexttab:true,select:showGrid==5}\"\r\n          >\r\n            Invoice Summary\r\n          </button>\r\n        </div>\r\n        <div *ngIf=\"companyId=='apm-sa'\" class=\"wrap\">\r\n          <button\r\n            (click)=\"switchGrid(6)\"\r\n            [ngClass]=\"{nexttab:true,select:showGrid==6}\"\r\n          >\r\n            Monthly Invoice Summary\r\n          </button>\r\n        </div>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row *ngIf=\"myPlatform == 'desktop' && showGrid == 6\" class=\"upperRow\">\r\n    <ion-col\r\n      [ngClass]=\"{selectedUpperCol:true,selected:tab=='renewal'}\"\r\n      (click)=\"switchtab('renewal')\"\r\n      size=\"1.9\"\r\n    >\r\n      <ion-label>Renewal</ion-label>\r\n    </ion-col>\r\n    <ion-col\r\n      [ngClass]=\"{selectedUpperCol:true,selected:tab=='topup'}\"\r\n      (click)=\"switchtab('topup')\"\r\n      size=\"1.9\"\r\n    >\r\n      <ion-label>Topup</ion-label>\r\n    </ion-col>\r\n    <ion-col\r\n      [ngClass]=\"{selectedUpperCol:true,selected:tab=='extend'}\"\r\n      (click)=\"switchtab('extend')\"\r\n      size=\"1.9\"\r\n    >\r\n      <ion-label>Extend One Year</ion-label>\r\n    </ion-col>\r\n    <ion-col\r\n      [ngClass]=\"{selectedUpperCol:true,selected:tab=='bsnl'}\"\r\n      (click)=\"switchtab('bsnl')\"\r\n      size=\"1.9\"\r\n    >\r\n      <ion-label>BSNL Certificate</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row *ngIf=\"companyId == 'apm-sa' && showGrid <= 4\" class=\"tabrows\">\r\n    <ion-col\r\n      style=\"margin-left: 18px; margin-top: 8px\"\r\n      size=\"6\"\r\n      size-lg=\"3\"\r\n      size-md=\"3\"\r\n    >\r\n      <smart-drop-down-list\r\n        (change)=\"selectDealer($event)\"\r\n        class=\"drop-down-list-modes-demo\"\r\n        [placeholder]=\"'apm'\"\r\n        [filterable]=\"true\"\r\n        [dropDownPosition]=\"'bottom'\"\r\n        #dropdownlistDealer\r\n      >\r\n      </smart-drop-down-list>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row *ngIf=\"showGrid == 1\" style=\"margin-top: -10px\">\r\n    <ion-col size=\"12\">\r\n      <!-- <ion-card id=\"1\"> -->\r\n      <app-dashboardgrid [dealer]=\"dealer\" [grid]=\"1\"> </app-dashboardgrid>\r\n      <!-- </ion-card> -->\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"showGrid == 2\">\r\n    <ion-col size=\"12\">\r\n      <!-- <ion-card id=\"1\"> -->\r\n      <app-dashboardgrid [dealer]=\"dealer\" [grid]=\"2\"> </app-dashboardgrid>\r\n      <!-- </ion-card> -->\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row *ngIf=\"showGrid == 3\">\r\n    <ion-col size=\"12\">\r\n      <!-- <ion-card id=\"1\"> -->\r\n      <app-dashboardgrid [dealer]=\"dealer\" [grid]=\"3\"> </app-dashboardgrid>\r\n      <!-- </ion-card> -->\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"showGrid == 4\">\r\n    <ion-col size=\"12\">\r\n      <!-- <ion-card id=\"1\"> -->\r\n      <app-dashboardgrid [dealer]=\"dealer\" [grid]=\"4\"> </app-dashboardgrid>\r\n      <!-- </ion-card> -->\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"showGrid == 5\">\r\n    <ion-col size=\"12\">\r\n      <!-- <ion-card id=\"1\"> -->\r\n      <app-dashboardgrid [dealer]=\"dealer\" [grid]=\"5\"> </app-dashboardgrid>\r\n      <!-- </ion-card> -->\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"showGrid == 6\">\r\n    <ion-col size=\"12\">\r\n      <!-- <ion-card id=\"1\"> -->\r\n      <app-dashboardgrid [dealer]=\"dealer\" [tab]=\"tab\"> </app-dashboardgrid>\r\n      <!-- </ion-card> -->\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"space\"> </ion-row>\r\n\r\n  <ion-fab\r\n    *ngIf=\"arrow\"\r\n    style=\"margin-right: 1%; margin-bottom: 9%\"\r\n    slot=\"fixed\"\r\n    vertical=\"bottom\"\r\n    horizontal=\"end\"\r\n  >\r\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToTop()\">\r\n      <ion-icon class=\"icon\" name=\"arrow-up\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-fab\r\n    *ngIf=\"arrow\"\r\n    style=\"margin-right: 1%; margin-bottom: 5%\"\r\n    slot=\"fixed\"\r\n    vertical=\"bottom\"\r\n    horizontal=\"end\"\r\n  >\r\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToBottom()\">\r\n      <ion-icon class=\"icon\" name=\"arrow-down\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/delar-application/components/dashboardgrid/dashboardgrid.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/components/dashboardgrid/dashboardgrid.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".smart-table {\n  width: auto;\n  margin: 8px;\n  height: 400px;\n}\n\n.empty {\n  width: auto;\n  margin: 8px;\n  height: 400px;\n}\n\n.scroll {\n  overflow-y: scroll;\n}\n\nimg {\n  height: 75%;\n  width: auto;\n}\n\n.empty-state__message {\n  color: #38a169;\n  font-size: 24px;\n  font-weight: 500;\n  margin-top: 0.85rem;\n}\n\n.isempty {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: auto;\n  height: 350px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.selected {\n  background-color: #0ab683;\n  color: aliceblue;\n}\n\nion-chip {\n  float: right;\n  color: #0ab683;\n  border-radius: 5px;\n  height: 25px;\n}\n\nion-row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n          justify-content: end;\n  margin-top: 5px;\n}\n\nspan[data-toggle=popover] {\n  cursor: pointer;\n  outline: none;\n}\n\n.card {\n  background-color: white;\n  height: 450px;\n}\n\n/* fallback */\n\n@font-face {\n  font-family: \"Material Icons\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v52/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format(\"woff2\");\n}\n\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n}\n\n.show {\n  display: block;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: auto;\n  margin: 8px;\n  height: 400px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.hide {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vY29tcG9uZW50cy9kYXNoYm9hcmRncmlkL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGNvbXBvbmVudHNcXGRhc2hib2FyZGdyaWRcXGRhc2hib2FyZGdyaWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2NvbXBvbmVudHMvZGFzaGJvYXJkZ3JpZC9kYXNoYm9hcmRncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0FDR0Y7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ0dGOztBRERBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSUY7O0FEREE7RUFDRSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSUY7O0FEREE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FDSUY7O0FEREE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0lGOztBRERBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHFCQUFBO1VBQUEsb0JBQUE7RUFDQSxlQUFBO0FDSUY7O0FEREE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQ0lGOztBRERBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0FDSUY7O0FEREEsYUFBQTs7QUFDQTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBHQUFBO0FDSUY7O0FEQUE7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNFRjs7QURBQTtFQUNFLGFBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2NvbXBvbmVudHMvZGFzaGJvYXJkZ3JpZC9kYXNoYm9hcmRncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNtYXJ0LXRhYmxlIHtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW46IDhweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcbi5lbXB0eSB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG4uc2Nyb2xsIHtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgaGVpZ2h0OiA3NSU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuLmVtcHR5LXN0YXRlX19tZXNzYWdlIHtcclxuICBjb2xvcjogIzM4YTE2OTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tdG9wOiAwLjg1cmVtO1xyXG59XHJcblxyXG4uaXNlbXB0eSB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGFiNjgzO1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbmlvbi1jaGlwIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6ICMwYWI2ODM7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuaW9uLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuc3BhbltkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxufVxyXG5cclxuLyogZmFsbGJhY2sgKi9cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbWF0ZXJpYWxpY29ucy92NTIvZmxVaFJxNnR6WmNsUUVKLVZkZy1JdWlhRHNOYy53b2ZmMilcclxuICAgIGZvcm1hdChcIndvZmYyXCIpO1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd29yZC13cmFwOiBub3JtYWw7XHJcbiAgZGlyZWN0aW9uOiBsdHI7XHJcbn1cclxuXHJcbi5zaG93IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbjogOHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5oaWRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiIsIi5zbWFydC10YWJsZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDhweDtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLmVtcHR5IHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogOHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4uc2Nyb2xsIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDc1JTtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5lbXB0eS1zdGF0ZV9fbWVzc2FnZSB7XG4gIGNvbG9yOiAjMzhhMTY5O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDAuODVyZW07XG59XG5cbi5pc2VtcHR5IHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMzUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGFiNjgzO1xuICBjb2xvcjogYWxpY2VibHVlO1xufVxuXG5pb24tY2hpcCB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICMwYWI2ODM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG5pb24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuc3BhbltkYXRhLXRvZ2dsZT1wb3BvdmVyXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA0NTBweDtcbn1cblxuLyogZmFsbGJhY2sgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tYXRlcmlhbGljb25zL3Y1Mi9mbFVoUnE2dHpaY2xRRUotVmRnLUl1aWFEc05jLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuXG4uc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiA4cHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/components/dashboardgrid/dashboardgrid.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/components/dashboardgrid/dashboardgrid.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DashboardgridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardgridComponent", function() { return DashboardgridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");

var DashboardgridComponent_1;







let DashboardgridComponent = DashboardgridComponent_1 = class DashboardgridComponent {
    constructor(loadingCtrl, platform, formBuilder, modalController, alertController, commonService, ajaxService) {
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.page = [];
        this.endis = true;
    }
    cancel() {
        this.modalController.dismiss();
    }
    openModel(row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: DashboardgridComponent_1,
                cssClass: "dashboardgrid",
                componentProps: {
                    value: this.selectedRow.comment,
                    popHeader: "enable",
                },
            });
            modal.onDidDismiss().then((data) => {
                if (data.data.data == "Extend One Year Status Updated Successfully") {
                    // this.getdatas();
                }
            });
            return yield modal.present();
        });
    }
    showLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: "Please wait...",
                duration: 20000,
            });
            loading.present();
        });
    }
    ngAfterViewChecked() {
        if (this.endis == false) {
        }
        // afterViewInit code.
        this.init();
    }
    enablebanner(d) {
        console.log(d);
        if (d == 0) {
            this.endis = true;
        }
        else {
            this.endis = false;
        }
    }
    init() { }
    pendingCADashboard() {
        this.endis = false;
        this.page = [];
        this.showLoading();
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/esim/getDealerCAStatusPending?companyid=apm&invoiceno=&serialno=&dealer=" +
            this.dealer;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.page = ["100", "200", "500", "1000"];
            this.enablebanner(res.length);
            this.loadingCtrl.dismiss();
            this.source = { localdata: res };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            this.columns = [
                {
                    text: "IMEI No",
                    datafield: "imei",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                    editable: true,
                },
                {
                    text: "ICCID No",
                    datafield: "iccidno1",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 160,
                },
                {
                    text: "CA Requested Date",
                    datafield: "carequestdate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 160,
                },
                {
                    text: "Slot No",
                    datafield: "slotno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
                },
                {
                    text: "Box Number",
                    datafield: "serialno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 160,
                },
                {
                    text: "Comments",
                    datafield: "purcomment",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 160,
                },
                {
                    text: "",
                    datafield: "comment",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                    cellsrenderer: () => {
                        return this.myPlatform == "desktop"
                            ? "Comments"
                            : "<button>Comments</button>";
                    },
                    buttonclick: (row) => {
                        this.openModel();
                    },
                },
            ];
        });
        this.renderer = (row, column, value) => {
            if (value == "" || null || undefined) {
                return "--";
            }
            else {
                return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                    value +
                    "</span>");
            }
        };
        // let url = 'https://mvt.apmkingstrack.com/fleettracking/esim/getDealerRenewalPending?companyid=apm&dealer=apm-sa'
        // this.ajaxService.ajaxGet(url).subscribe(res => {
        //   this.data.push(res)
        // })
    }
    pendingRenewalDashboard() {
        this.page = [];
        this.renderer = (row, column, value) => {
            if (value == "" || null || undefined) {
                return "--";
            }
            else {
                return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                    value +
                    "</span>");
            }
        };
        this.showLoading();
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/esim/getDealerRenewalPending?companyid=apm&dealer=" +
            this.dealer;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.page = ["100", "200", "500", "1000"];
            this.loadingCtrl.dismiss();
            this.enablebanner(res.length);
            this.source = { localdata: res };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            this.columns = [
                {
                    text: "IMEI No",
                    datafield: "imei",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                    editable: true,
                },
                {
                    text: "ICCID No",
                    datafield: "iccidno1",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 145,
                },
                {
                    text: "Renewal Requested Date",
                    datafield: "renewalrequestdate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 170,
                },
                {
                    text: "Previous Card Status",
                    datafield: "priviouscardstatus",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "Contact Number",
                    datafield: "contactno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                },
                {
                    text: "Stage",
                    datafield: "renewalno",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 90,
                },
                {
                    text: "Comments",
                    datafield: "purcomment",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "",
                    datafield: "comment",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                    cellsrenderer: () => {
                        return this.myPlatform == "desktop"
                            ? "Comments"
                            : "<button>Comments</button>";
                    },
                    buttonclick: (row) => {
                        this.openModel();
                    },
                },
            ];
        });
    }
    pendingExtra1YearDashboard() {
        this.page = [];
        this.showLoading();
        this.renderer = (row, column, value) => {
            if (value == "" || null || undefined) {
                return "--";
            }
            else {
                return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                    value +
                    "</span>");
            }
        };
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/esim/getDealerExtendOneYearPending?companyid=apm&dealer=" +
            this.dealer;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.page = ["100", "200", "500", "1000"];
            this.loadingCtrl.dismiss();
            this.enablebanner(res.length);
            this.source = { localdata: res };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            this.columns = [
                {
                    text: "Imei No",
                    datafield: "imei",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 350,
                    editable: true,
                },
                {
                    text: "ICCID No",
                    datafield: "iccidno1",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 350,
                },
                {
                    text: "Requested Date",
                    datafield: "renewalrequestdate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 350,
                },
            ];
        });
        // let url = 'https://mvt.apmkingstrack.com/fleettracking/esim/getDealerExtendOneYearPending?companyid=apm&dealer=apm-sa'
        // this.ajaxService.ajaxGet(url).subscribe(res => {
        //   this.data.push(res)
        // })
    }
    pendingTopupDashboard() {
        this.page = [];
        this.renderer = (row, column, value) => {
            if (value == "" || null || undefined) {
                return "--";
            }
            else {
                return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                    value +
                    "</span>");
            }
        };
        this.showLoading();
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/esim/getDealerTopupPending?companyid=apm&dealer=" +
            this.dealer;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.page = ["100", "200", "500", "1000"];
            this.loadingCtrl.dismiss();
            this.enablebanner(res.length);
            this.source = { localdata: res };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            this.columns = [
                {
                    text: "Imei No",
                    datafield: "imei",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 350,
                    editable: true,
                },
                {
                    text: "ICCID No",
                    datafield: "iccidno1",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 350,
                },
                {
                    text: "Topup Requested Date",
                    datafield: "renewalrequestdate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 350,
                },
            ];
        });
        // let url = 'https://mvt.apmkingstrack.com/fleettracking/esim/getDealerTopupPending?companyid=apm&dealer=apm-sa'
        // this.ajaxService.ajaxGet(url).subscribe(res => {
        //   this.data.push(res)
        // })
    }
    pendinginvoicesummary() {
        this.page = [];
        this.renderer = (row, column, value) => {
            if (value == "" || null || undefined) {
                return "--";
            }
            else {
                return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                    value +
                    "</span>");
            }
        };
        this.showLoading();
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/getDealerInvoiceSummary";
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.page = ["100", "200", "500", "1000"];
            this.loadingCtrl.dismiss();
            this.enablebanner(res.length);
            this.source = { localdata: res };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            this.columns = [
                {
                    text: "Dealer Name",
                    datafield: "dealername",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                    editable: true,
                },
                {
                    text: "Renewal 1",
                    datafield: "renewal1",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                },
                {
                    text: "Renewal 2",
                    datafield: "renewal2",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                },
                {
                    text: "Renewal 3",
                    datafield: "renewal3",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                },
                {
                    text: "Renewal 4",
                    datafield: "renewal4",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                },
                {
                    text: "Renewal 5",
                    datafield: "renewal5",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                },
                {
                    text: "Topup",
                    datafield: "topup",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                },
                {
                    text: "Extend One Year",
                    datafield: "extendoneyear",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "BSNL Certificate",
                    datafield: "bsnlcertificate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
                },
            ];
        });
    }
    pendingmonltyrenewalsummary() {
        this.page = [];
        this.renderer = (row, column, value) => {
            if (value == "" || null || undefined) {
                return "--";
            }
            else {
                return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                    value +
                    "</span>");
            }
        };
        this.showLoading();
        this.columns = [
            {
                text: "Dealer Name",
                datafield: "dealername",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 110,
                editable: true,
            },
        ];
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/getDealerInvoiceRenewalMonthSummary";
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            var columngroups = [];
            if (Object.keys(res).length > 0) {
                res.month.map((m) => {
                    columngroups.push({
                        text: m,
                        align: "center",
                        name: m,
                    });
                });
                this.myGrid.columngroups(columngroups);
                var arr = Object.keys(res.data[0]);
                arr = arr.filter((n) => {
                    return n != "dealername";
                });
                console.log(arr);
                arr.map((filterData, i) => {
                    if (filterData.includes("request")) {
                        this.columns.push({
                            text: "Request",
                            datafield: filterData,
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            columngroup: filterData.split("request")[0],
                            width: 110,
                            editable: true,
                        });
                    }
                    else {
                        this.columns.push({
                            text: "Invoice",
                            datafield: filterData,
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            columngroup: filterData.split("invoice")[0],
                            align: "center",
                            width: 110,
                            editable: true,
                        });
                    }
                });
                this.page = ["100", "200", "500", "1000"];
                this.loadingCtrl.dismiss();
                this.enablebanner(res.length);
                this.source = { localdata: res.data };
                this.dataAdapter = new jqx.dataAdapter(this.source);
            }
        });
    }
    pendingmonltytopupsummary() {
        this.page = [];
        this.renderer = (row, column, value) => {
            if (value == "" || null || undefined) {
                return "--";
            }
            else {
                return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                    value +
                    "</span>");
            }
        };
        this.showLoading();
        this.columns = [
            {
                text: "Dealer Name",
                datafield: "dealername",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 110,
                editable: true,
            },
        ];
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/getDealerInvoiceTopupMonthSummary";
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            var columngroups = [];
            if (Object.keys(res).length > 0) {
                res.month.map((m) => {
                    columngroups.push({
                        text: m,
                        align: "center",
                        name: m,
                    });
                });
                this.myGrid.columngroups(columngroups);
                var arr = Object.keys(res.data[0]);
                arr = arr.filter((n) => {
                    return n != "dealername";
                });
                console.log(arr);
                arr.map((filterData, i) => {
                    if (filterData.includes("request")) {
                        this.columns.push({
                            text: "Request",
                            datafield: filterData,
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            columngroup: filterData.split("request")[0],
                            width: 110,
                            editable: true,
                        });
                    }
                    else {
                        this.columns.push({
                            text: "Invoice",
                            datafield: filterData,
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            columngroup: filterData.split("invoice")[0],
                            align: "center",
                            width: 110,
                            editable: true,
                        });
                    }
                });
                this.page = ["100", "200", "500", "1000"];
                this.loadingCtrl.dismiss();
                this.enablebanner(res.length);
                this.source = { localdata: res.data };
                this.dataAdapter = new jqx.dataAdapter(this.source);
            }
        });
    }
    pendingmonltyextendsummary() {
        this.page = [];
        this.renderer = (row, column, value) => {
            if (value == "" || null || undefined) {
                return "--";
            }
            else {
                return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                    value +
                    "</span>");
            }
        };
        this.showLoading();
        this.columns = [
            {
                text: "Dealer Name",
                datafield: "dealername",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 110,
                editable: true,
            },
        ];
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/getDealerInvoiceExtendMonthSummary";
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            var columngroups = [];
            if (Object.keys(res).length > 0) {
                res.month.map((m) => {
                    columngroups.push({
                        text: m,
                        align: "center",
                        name: m,
                    });
                });
                this.myGrid.columngroups(columngroups);
                var arr = Object.keys(res.data[0]);
                arr = arr.filter((n) => {
                    return n != "dealername";
                });
                console.log(arr);
                arr.map((filterData, i) => {
                    if (filterData.includes("request")) {
                        this.columns.push({
                            text: "Request",
                            datafield: filterData,
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            columngroup: filterData.split("request")[0],
                            width: 110,
                            editable: true,
                        });
                    }
                    else {
                        this.columns.push({
                            text: "Invoice",
                            datafield: filterData,
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            columngroup: filterData.split("invoice")[0],
                            align: "center",
                            width: 110,
                            editable: true,
                        });
                    }
                });
                this.page = ["100", "200", "500", "1000"];
                this.loadingCtrl.dismiss();
                this.enablebanner(res.length);
                this.source = { localdata: res.data };
                this.dataAdapter = new jqx.dataAdapter(this.source);
            }
        });
    }
    pendingmonltybsnlsummary() {
        this.page = [];
        this.renderer = (row, column, value) => {
            if (value == "" || null || undefined) {
                return "--";
            }
            else {
                return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                    value +
                    "</span>");
            }
        };
        this.showLoading();
        this.columns = [
            {
                text: "Dealer Name",
                datafield: "dealername",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 110,
                editable: true,
            },
        ];
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/getDealerInvoiceBSNLMonthSummary";
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            var columngroups = [];
            if (Object.keys(res).length > 0) {
                res.month.map((m) => {
                    columngroups.push({
                        text: m,
                        align: "center",
                        name: m,
                    });
                });
                this.myGrid.columngroups(columngroups);
                var arr = Object.keys(res.data[0]);
                arr = arr.filter((n) => {
                    return n != "dealername";
                });
                console.log(arr);
                arr.map((filterData, i) => {
                    if (filterData.includes("request")) {
                        this.columns.push({
                            text: "Request",
                            datafield: filterData,
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            columngroup: filterData.split("request")[0],
                            width: 110,
                            editable: true,
                        });
                    }
                    else {
                        this.columns.push({
                            text: "Invoice",
                            datafield: filterData,
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            columngroup: filterData.split("invoice")[0],
                            align: "center",
                            width: 110,
                            editable: true,
                        });
                    }
                });
                this.page = ["100", "200", "500", "1000"];
                this.loadingCtrl.dismiss();
                this.enablebanner(res.length);
                this.source = { localdata: res.data };
                this.dataAdapter = new jqx.dataAdapter(this.source);
            }
        });
    }
    // pendingBSNLCertificateDashboard() {
    //   this.showLoading();
    //   this.columns = [
    //     {
    //       label: "IMEI No",
    //       dataField: "imei",
    //       dataType: "string",
    //       width: 30,
    //     },
    //     {
    //       label: "ICCID No",
    //       dataField: "iccidno1",
    //       dataType: "string",
    //       width: 30,
    //     },
    //     {
    //       label: "Requested Date",
    //       dataField: "renewalrequestdate",
    //       dataType: "string",
    //       width: 30,
    //     },
    //   ];
    //   let url =
    //     serverUrl.web +
    //     "/esim/getDealerCertificatePending?companyid=apm&dealer=" +
    //     this.dealer;
    //   this.ajaxService.ajaxGet(url).subscribe((res) => {
    //     this.loadingCtrl.dismiss();
    //     this.enablebanner(res.length);
    //     this.dataSource = new window.Smart.DataAdapter({
    //       dataSource: res,
    //       dataFields: [
    //         "imei: string",
    //         "iccidno1: string",
    //         "renewalrequestdate: string",
    //       ],
    //     });
    //   });
    //   // let url = 'https://mvt.apmkingstrack.com/fleettracking/esim/getDealerCertificatePending?companyid=apm&dealer=apm-sa'
    //   // this.ajaxService.ajaxGet(url).subscribe(res => {
    //   //   this.data.push(res)
    //   // })
    // }
    commentsData() {
        this.endis = false;
        this.source = { localdata: JSON.parse(this.value) };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.columns = [
            {
                text: "Comments",
                datafield: "comment",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 460,
            },
        ];
        this.page = ["100", "200", "500", "1000"];
    }
    ngOnChanges(changes) {
        if (this.dealer != "") {
            if (this.grid == 1) {
                this.pendingCADashboard();
            }
            else if (this.grid == 2) {
                this.pendingRenewalDashboard();
            }
            else if (this.grid == 3) {
                this.pendingExtra1YearDashboard();
            }
            else if (this.grid == 4) {
                this.pendingTopupDashboard();
            }
            else if (this.grid == 5) {
                this.pendinginvoicesummary();
            }
            else if (this.tab == "renewal") {
                this.pendingmonltyrenewalsummary();
            }
            else if (this.tab == "topup") {
                this.pendingmonltytopupsummary();
            }
            else if (this.tab == "extend") {
                this.pendingmonltyextendsummary();
            }
            else if (this.tab == "bsnl") {
                this.pendingmonltybsnlsummary();
            }
            // } else if (this.grid == 5) {
            //   this.pendingBSNLCertificateDashboard();
            // }
        }
    }
    myGridOnRowclick(event) {
        this.selectedRow = event.args.row.bounddata;
    }
    ngOnInit() {
        console.log(this.value);
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        if (this.value != undefined) {
            this.commentsData();
        }
    }
    ionViewWillEnter() { }
};
DashboardgridComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DashboardgridComponent.prototype, "grid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DashboardgridComponent.prototype, "tab", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], DashboardgridComponent.prototype, "dealer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DashboardgridComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DashboardgridComponent.prototype, "popHeader", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
], DashboardgridComponent.prototype, "myGrid", void 0);
DashboardgridComponent = DashboardgridComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dashboardgrid",
        template: __webpack_require__(/*! raw-loader!./dashboardgrid.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/components/dashboardgrid/dashboardgrid.component.html"),
        styles: [__webpack_require__(/*! ./dashboardgrid.component.scss */ "./src/app/delar-application/components/dashboardgrid/dashboardgrid.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"]])
], DashboardgridComponent);



/***/ }),

/***/ "./src/app/delar-application/esim-home/esim-home.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/delar-application/esim-home/esim-home.module.ts ***!
  \*****************************************************************/
/*! exports provided: EsimHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimHomePageModule", function() { return EsimHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _esim_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esim-home.page */ "./src/app/delar-application/esim-home/esim-home.page.ts");
/* harmony import */ var _components_dashboardgrid_dashboardgrid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/dashboardgrid/dashboardgrid.component */ "./src/app/delar-application/components/dashboardgrid/dashboardgrid.component.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _dealer_component_dealer_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dealer-component/dealer-component.module */ "./src/app/delar-application/dealer-component/dealer-component.module.ts");











const routes = [
    {
        path: "",
        component: _esim_home_page__WEBPACK_IMPORTED_MODULE_6__["EsimHomePage"],
    },
];
let EsimHomePageModule = class EsimHomePageModule {
};
EsimHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _dealer_component_dealer_component_module__WEBPACK_IMPORTED_MODULE_10__["DealerComponentsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_9__["SharedModModule"],
        ],
        declarations: [_esim_home_page__WEBPACK_IMPORTED_MODULE_6__["EsimHomePage"], _components_dashboardgrid_dashboardgrid_component__WEBPACK_IMPORTED_MODULE_7__["DashboardgridComponent"]],
        entryComponents: [_components_dashboardgrid_dashboardgrid_component__WEBPACK_IMPORTED_MODULE_7__["DashboardgridComponent"]],
    })
], EsimHomePageModule);



/***/ }),

/***/ "./src/app/delar-application/esim-home/esim-home.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/delar-application/esim-home/esim-home.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fabbutton {\n  --background: whitesmoke;\n  --background-hover: grey;\n}\n\n.icon {\n  color: black;\n}\n\n.icon:hover {\n  color: white;\n}\n\n.wrap {\n  margin-left: 10px;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.input {\n  border: 2px solid #a76cf8;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.show {\n  display: block;\n}\n\n.hide {\n  display: none;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 10px;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(20%, #fff), color-stop(50%, #f6f6f6), color-stop(52%, #eee), to(#f4f4f4)) !important;\n  background: linear-gradient(#fff 20%, #f6f6f6 50%, #eee 52%, #f4f4f4 100%) !important;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: inline-block;\n  border-radius: 5px;\n  position: relative;\n  color: #505079;\n}\n\n.nexttab {\n  height: 30px;\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  font-size: 10px;\n  letter-spacing: 2.5px;\n  color: #000;\n  background-color: #ebebeb;\n  border: none;\n  border-right: 1px solid #b5b5b5;\n  -webkit-transition: all 0.3s ease 0s;\n  transition: all 0.3s ease 0s;\n  cursor: pointer;\n  -webkit-transform: skew(-21deg);\n          transform: skew(-21deg);\n  margin-left: 2px;\n}\n\n.select {\n  font-size: 10px;\n  font-weight: bold;\n  padding: 10px;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  background-color: #ffffff;\n  -webkit-transform: skew(-21deg);\n          transform: skew(-21deg);\n}\n\n.tabrow {\n  margin-left: 15px;\n  margin-top: 7px;\n  border-bottom: 2px solid #822ef5;\n  background: #ebebeb;\n}\n\n.tabrows {\n  margin-left: 3px;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: 0px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n.upperRow {\n  margin-left: 15px;\n  background: #eeeeee;\n  padding: 1px;\n  border-bottom: 2px solid #7d67f8;\n  height: 56px;\n}\n\n.selectedUpperCol {\n  background: #ebebeb;\n  text-align: center;\n  margin-right: 2px;\n  color: black;\n  font-family: sans-serif;\n  cursor: pointer;\n  font-size: 10px;\n  font-weight: bold;\n  text-transform: uppercase;\n  border-right: 1px solid #b5b5b5;\n  align-self: center;\n  padding-top: 8px;\n  margin-top: 15px;\n}\n\n.selected {\n  margin-top: 20px;\n  color: black;\n  background-color: #ffffff;\n  border-bottom: none;\n  border-top: 2px solid #7d67f8;\n  border-left: 2px solid #7d67f8;\n  border-right: 2px solid #7d67f8;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 11px;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1ob21lL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGVzaW0taG9tZVxcZXNpbS1ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1ob21lL2VzaW0taG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtFQUNBLHdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0FDR0Y7O0FEREE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0lGOztBRERBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0lGOztBREZBO0VBQ0UsY0FBQTtBQ0tGOztBREhBO0VBQ0UsYUFBQTtBQ01GOztBREpBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJKQUFBO0VBQUEscUZBQUE7RUFNQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNFRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBRUEsK0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURDQTtFQUNFO0lBQ0UsZ0JBQUE7RUNFRjs7RURDQTtJQUNFLFVBQUE7RUNFRjtBQUNGOztBRENBO0VBQ0U7SUFDRSxTQUFBO0VDQ0Y7O0VERUE7SUFDRSxVQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDREY7QUFDRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDREY7O0FER0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1ob21lL2VzaW0taG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFiYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBncmV5O1xyXG59XHJcbi5pY29uIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmljb246aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ud3JhcCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjYTc2Y2Y4O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBtYXJnaW46IDdweDtcclxufVxyXG4uc2hvdyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNlbGVjdGFibGUtaW5wdXQge1xyXG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAjZmZmIDIwJSxcclxuICAgICNmNmY2ZjYgNTAlLFxyXG4gICAgI2VlZSA1MiUsXHJcbiAgICAjZjRmNGY0IDEwMCVcclxuICApICFpbXBvcnRhbnQ7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICM1MDUwNzk7XHJcbn1cclxuXHJcbi5uZXh0dGFiIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiNWI1YjU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zZm9ybTogc2tldygtMjFkZWcpO1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuXHJcbi5zZWxlY3Qge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAtNHB4IDdweCAjYzBiNWZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDdweCk7XHJcbiAgdHJhbnNmb3JtOiBza2V3KC0yMWRlZyk7XHJcbn1cclxuXHJcbi50YWJyb3cge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDdweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzgyMmVmNTtcclxuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xyXG59XHJcbi50YWJyb3dzIHtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmlucHV0IHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgfVxyXG5cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgem9vbTogODAlO1xyXG4gIH1cclxuXHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogMHB4IDVweCAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweCkgYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDhweCAxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG4udXBwZXJSb3cge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XHJcbiAgcGFkZGluZzogMXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN2Q2N2Y4O1xyXG4gIGhlaWdodDogNTZweDtcclxufVxyXG4uc2VsZWN0ZWRVcHBlckNvbCB7XHJcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYjViNWI1O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi8vIC5zZWxlY3RlZFVwcGVyQ29sOmhvdmVyIHsvLyAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7Ly8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOy8vICAgZm9udC1zaXplOiAxMnB4Oy8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7Ly8gICB0cmFuc2l0aW9uOiAwLjNzOy8vICAgcGFkZGluZy10b3A6IDhweDsvLyAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4Oy8vICAgbWFyZ2luLXRvcDogMjBweDsvLyB9XHJcbi5zZWxlY3RlZCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjN2Q2N2Y4O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzdkNjdmODtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjN2Q2N2Y4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAxMXB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAtNHB4IDdweCAjYzBiNWZmO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG4iLCIuZmFiYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGdyZXk7XG59XG5cbi5pY29uIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaWNvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLndyYXAge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAycHggc29saWQgI2E3NmNmODtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBtYXJnaW46IDdweDtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZmIDIwJSwgI2Y2ZjZmNiA1MCUsICNlZWUgNTIlLCAjZjRmNGY0IDEwMCUpICFpbXBvcnRhbnQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzUwNTA3OTtcbn1cblxuLm5leHR0YWIge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAyLjVweDtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2I1YjViNTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogc2tldygtMjFkZWcpO1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG4uc2VsZWN0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IC00cHggN3B4ICNjMGI1ZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRyYW5zZm9ybTogc2tldygtMjFkZWcpO1xufVxuXG4udGFicm93IHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4MjJlZjU7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG59XG5cbi50YWJyb3dzIHtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogMHB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDhweCAxcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxufVxuLnVwcGVyUm93IHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gIHBhZGRpbmc6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3ZDY3Zjg7XG4gIGhlaWdodDogNTZweDtcbn1cblxuLnNlbGVjdGVkVXBwZXJDb2wge1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiNWI1YjU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnNlbGVjdGVkIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzdkNjdmODtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjN2Q2N2Y4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMXB4O1xuICBib3gtc2hhZG93OiAwcHggLTRweCA3cHggI2MwYjVmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/esim-home/esim-home.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/delar-application/esim-home/esim-home.page.ts ***!
  \***************************************************************/
/*! exports provided: EsimHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimHomePage", function() { return EsimHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var smart_webcomponents_angular_dropdownlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! smart-webcomponents-angular/dropdownlist */ "./node_modules/smart-webcomponents-angular/fesm2015/smart-webcomponents-angular-dropdownlist.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");







let EsimHomePage = class EsimHomePage {
    constructor(ajaxService, platform, router, alertController, commonService) {
        this.ajaxService = ajaxService;
        this.platform = platform;
        this.router = router;
        this.alertController = alertController;
        this.commonService = commonService;
        this.showGrid = "1";
        this.tab = "renewal";
        this.dealer = "";
        this.companyData = "apm";
        this.companyId = localStorage.getItem("userName");
        this.arrow = false;
    }
    scrollToTop() {
        this.content.scrollToTop(500);
    }
    scrollToBottom() {
        this.content.scrollToBottom(500);
    }
    logScrolling(ev) {
        if (ev.detail.scrollTop > 2) {
            this.arrow = true;
        }
        if (ev.detail.scrollTop < 2) {
            this.arrow = false;
        }
    }
    dropDownData() {
        let url = "https://mvt.apmkingstrack.com/fleettracking/global/getesimdealerlist";
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.data = res;
            this.dropdownlistDealer.dataSource = res;
        });
    }
    ionViewWillEnter() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.dropDownData();
        if (this.companyId == "apm-sa") {
            this.dealer = this.companyData;
        }
        else {
            this.dealer = this.companyId;
        }
    }
    ngOnInit() { }
    switchGrid(d) {
        this.dropDownData();
        this.showGrid = d;
    }
    switchtab(d) {
        this.tab = d;
    }
    handleChange(e) {
        this.dealer = e.value;
    }
    selectDealer(e) {
        this.dealer = this.dropdownlistDealer.value[0].value;
    }
};
EsimHomePage.ctorParameters = () => [
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("dropdownlistDealer", {
        read: smart_webcomponents_angular_dropdownlist__WEBPACK_IMPORTED_MODULE_4__["DropDownListComponent"],
        static: false,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", smart_webcomponents_angular_dropdownlist__WEBPACK_IMPORTED_MODULE_4__["DropDownListComponent"])
], EsimHomePage.prototype, "dropdownlistDealer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EsimHomePage.prototype, "content", void 0);
EsimHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-esim-home",
        template: __webpack_require__(/*! raw-loader!./esim-home.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-home/esim-home.page.html"),
        styles: [__webpack_require__(/*! ./esim-home.page.scss */ "./src/app/delar-application/esim-home/esim-home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
], EsimHomePage);



/***/ })

}]);
//# sourceMappingURL=esim-home-esim-home-module-es2015.js.map