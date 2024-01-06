(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/all-reports/trip-summary/map-modal/map-modal.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/all-reports/trip-summary/map-modal/map-modal.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-grid class=\"appHeaderTitle\">\r\n    <ion-row class=\"appHeaderTitle\">\r\n      <ion-col>\r\n        <ion-icon icon=\"md-arrow-back\" (click)='getBack()'></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"appHeaderTitle\">\r\n      <ion-col>\r\n        <ion-title style=\"padding:0px 12px;\">{{plateNo}}</ion-title>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-center\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div #mapElement class=\"map\"></div>\r\n  \r\n<div class=\"modal1 dragUp\"  >\r\n    <ion-row>\r\n        <ion-col class=\"addressStyling\" size=\"8\" offset=\"2\">\r\n        </ion-col>\r\n    </ion-row>  \r\n    <ion-grid class=\"grid\" padding>\r\n        <ion-row class=\"fromStyle\">\r\n            <ion-col class=\"ion-align-items-center ion-justify-content-center fromHeader\">\r\n                <ion-row class=\"ion-align-items-center ion-justify-content-center\">\r\n                    From Address\r\n                </ion-row>\r\n            </ion-col>\r\n            <ion-col class=\"ion-align-items-center ion-justify-content-center\">\r\n                <ion-row class=\"ion-align-items-center ion-justify-content-center value\">\r\n                    {{fromAddress}}\r\n                </ion-row>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <ion-grid class=\"grid\" padding>\r\n    <ion-row class=\"toStyle\">\r\n        <ion-col class=\"ion-align-items-center ion-justify-content-center toHeader\">\r\n            <ion-row class=\"ion-align-items-center ion-justify-content-center\">\r\n                To Address\r\n            </ion-row>\r\n        </ion-col>\r\n        <ion-col class=\"ion-align-items-center ion-justify-content-center\">\r\n            <ion-row class=\"ion-align-items-center ion-justify-content-center value\">\r\n                {{toAddress}}\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reports/reports.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reports/reports.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar mode=\"md\" class=\"appHeader\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row>\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-title>Reports</ion-title>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>  \r\n</ion-header>\r\n\r\n<ion-content>\r\n \r\n      <app-vts-reports [plateNo] = \"plateNo\"></app-vts-reports>\r\n\r\n</ion-content> -->\r\n\r\n<ion-header *ngIf=\"appName != 'FMS'\">\r\n    <ion-toolbar mode=\"md\" [ngClass]=\"{'appHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-row style=\"align-items: center;\" *ngIf=\"myPlatform != 'desktop'\">\r\n              <ion-menu-button></ion-menu-button>\r\n              <ion-label style=\"font-size: 20px;font-weight: bold;\"> Reports </ion-label>\r\n            </ion-row>\r\n            <!-- <ion-row *ngIf=\"myPlatform != 'desktop'\">\r\n              <ion-label> Reports </ion-label>\r\n            </ion-row> -->\r\n            <ion-row *ngIf=\"myPlatform == 'desktop'\">\r\n              <ion-col size='2'>\r\n                <ion-menu-button></ion-menu-button>\r\n              </ion-col>\r\n              <ion-col size=\"9\">\r\n                <ion-label class=\"headercolour\"> Reports </ion-label>\r\n              </ion-col>\r\n              <ion-col style=\"margin: 0;\r\n              padding: 0;\">\r\n                <ion-img style=\"height: 40px;\" [src]=\"app.logo\"></ion-img>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-toolbar>  \r\n  </ion-header>\r\n  <ion-header *ngIf=\"appName == 'FMS'\">\r\n    <ion-toolbar mode=\"md\" [ngClass]=\"{'companyHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\">\r\n      <ion-grid >\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-row *ngIf=\"myPlatform != 'desktop'\">\r\n              <ion-col size=\"2\">\r\n                  <ion-menu-button></ion-menu-button>\r\n              </ion-col>\r\n             <ion-col size=\"8\">\r\n              <ion-label>Reports </ion-label>\r\n             </ion-col>  \r\n          </ion-row>\r\n            <ion-row *ngIf=\"myPlatform == 'desktop'\">\r\n              <ion-col size='2'>\r\n                <ion-menu-button></ion-menu-button>\r\n              </ion-col>\r\n              <ion-col size=\"9\">\r\n                <ion-label class=\"headercolour\">Reports</ion-label>\r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-img [src]=\"app.logo\"></ion-img>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-toolbar>  \r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n \r\n    <app-vts-reports [plateNo] = \"plateNo\"></app-vts-reports>\r\n\r\n</ion-content> \r\n  \r\n"

/***/ }),

/***/ "./src/app/all-reports/trip-summary/map-modal/map-modal.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/all-reports/trip-summary/map-modal/map-modal.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  height: 100%;\n}\n\n.map {\n  height: 100%;\n}\n\n.modal1 {\n  background-color: #c3c3d4;\n  color: #202020;\n  z-index: 12;\n  position: fixed;\n  right: 0px;\n  width: 100%;\n  border-top-left-radius: 40px;\n  border-top-right-radius: 40px;\n}\n\n.addressStyling {\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.displayType {\n  display: grid;\n}\n\n.odometerStyle {\n  border: 1px solid #139be9;\n}\n\n.odometerHeader {\n  background-color: #139be9;\n  color: white;\n  font-weight: bold;\n}\n\n.odometerPartitionLine {\n  border-right: 1px solid #139be9;\n}\n\n.engineStyle {\n  border: 1px solid #0db0ab;\n}\n\n.engineHeader {\n  background-color: #0db0ab;\n  color: white;\n  font-weight: bold;\n}\n\n.enginePartitionLine {\n  border-right: 1px solid #0db0ab;\n}\n\n.speedStyle {\n  border: 1px solid #f8951d;\n}\n\n.speedHeader {\n  background-color: #f8951d;\n  color: white;\n  font-weight: bold;\n}\n\n.fromHeader {\n  background-color: #2ecc71;\n  color: white;\n  font-weight: bold;\n}\n\n.fromStyle {\n  border: 1px solid #2ecc71;\n}\n\n.toHeader {\n  background-color: #eb3636;\n  color: white;\n  font-weight: bold;\n}\n\n.toStyle {\n  border: 1px solid #eb3636;\n}\n\n.value {\n  font-size: 12px;\n  color: black;\n}\n\n.iconsRow {\n  padding-top: 10px;\n}\n\n.grid {\n  padding-top: 0px;\n  padding-bottom: 5px;\n}\n\n.colBorder {\n  border-bottom: 1px solid #32384b;\n  border-left: 1px solid #32384b;\n  border-top: 1px solid #32384b;\n}\n\n.endBorder {\n  border-right: 1px solid #32384b;\n}\n\n.dragDown {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  bottom: -280px;\n}\n\n.dragUp {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  bottom: 0px;\n}\n\n.timeStamp {\n  background: #32384b;\n  color: white;\n}\n\n.commontext {\n  font-size: 13px;\n  align-self: center;\n}\n\n.verticleAlign {\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsLXJlcG9ydHMvdHJpcC1zdW1tYXJ5L21hcC1tb2RhbC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGFsbC1yZXBvcnRzXFx0cmlwLXN1bW1hcnlcXG1hcC1tb2RhbFxcbWFwLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbGwtcmVwb3J0cy90cmlwLXN1bW1hcnkvbWFwLW1vZGFsL21hcC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7QUNFSjs7QURBQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBR0EsVUFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7QUNFSjs7QURBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDR0o7O0FEREE7RUFDSSwrQkFBQTtBQ0lKOztBREZBO0VBQ0kseUJBQUE7QUNLSjs7QURIQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDTUo7O0FESkE7RUFDSSwrQkFBQTtBQ09KOztBRExBO0VBQ0kseUJBQUE7QUNRSjs7QUROQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDU0o7O0FEUEE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ1VKOztBRFJBO0VBQ0kseUJBQUE7QUNXSjs7QURUQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDWUo7O0FEVkE7RUFDSSx5QkFBQTtBQ2FKOztBRFhBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNjSjs7QURaQTtFQUNJLGlCQUFBO0FDZUo7O0FEYkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDZ0JKOztBRGRBO0VBQ0ksZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0FDaUJKOztBRGZBO0VBQ0ksK0JBQUE7QUNrQko7O0FEaEJBO0VBQ0ksd0JBQUE7RUFBQSxnQkFBQTtFQUNBLGNBQUE7QUNtQko7O0FEakJBO0VBQ0ksd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFdBQUE7QUNvQko7O0FEbEJBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDcUJKOztBRG5CQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ3NCSjs7QURuQkE7RUFDSSxrQkFBQTtBQ3NCSiIsImZpbGUiOiJzcmMvYXBwL2FsbC1yZXBvcnRzL3RyaXAtc3VtbWFyeS9tYXAtbW9kYWwvbWFwLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcHtcclxuICAgIGhlaWdodDoxMDAlXHJcbn1cclxuLm1hcCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLm1vZGFsMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNjM2Q0O1xyXG4gICAgY29sb3I6IHJnYigzMiwgMzIsIDMyKTtcclxuICAgIHotaW5kZXg6IDEyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLy8gYm90dG9tOiAwcHg7XHJcbiAgICAvL3RvcDo5M3ZoO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAvLyB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNDBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0MHB4O1xyXG59XHJcbi5hZGRyZXNzU3R5bGluZ3tcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG59XHJcblxyXG4uZGlzcGxheVR5cGUge1xyXG4gICAgZGlzcGxheTogZ3JpZFxyXG59XHJcbi5vZG9tZXRlclN0eWxleyAgICBcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzEzOWJlOTsgIFxyXG59XHJcbi5vZG9tZXRlckhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzEzOWJlOTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm9kb21ldGVyUGFydGl0aW9uTGluZXtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMxMzliZTk7ICAgIFxyXG59XHJcbi5lbmdpbmVTdHlsZXsgICAgXHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICMwZGIwYWI7ICBcclxufVxyXG4uZW5naW5lSGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMGRiMGFiO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZW5naW5lUGFydGl0aW9uTGluZXtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwZGIwYWI7ICAgIFxyXG59XHJcbi5zcGVlZFN0eWxleyAgICBcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2Y4OTUxZDsgIFxyXG59XHJcbi5zcGVlZEhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2Y4OTUxZDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmZyb21IZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyZWNjNzE7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5mcm9tU3R5bGV7ICAgIFxyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMmVjYzcxOyAgXHJcbn1cclxuLnRvSGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWIzNjM2O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udG9TdHlsZXsgICAgXHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNlYjM2MzY7ICBcclxufVxyXG4udmFsdWV7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbi5pY29uc1Jvd3tcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi5ncmlke1xyXG4gICAgcGFkZGluZy10b3A6MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG4uY29sQm9yZGVye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMjM4NGI7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMjM4NGI7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzMyMzg0YjtcclxufVxyXG4uZW5kQm9yZGVye1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMyMzg0YjsgICAgXHJcbn1cclxuLmRyYWdEb3due1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGJvdHRvbTotMjgwcHg7XHJcbn1cclxuLmRyYWdVcHtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBib3R0b206MHB4O1xyXG59XHJcbi50aW1lU3RhbXB7XHJcbiAgICBiYWNrZ3JvdW5kOiMzMjM4NGI7XHJcbiAgICBjb2xvciA6IHdoaXRlO1xyXG59XHJcbi5jb21tb250ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4udmVydGljbGVBbGlnbntcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufSIsIi5tYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tb2RhbDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNjM2Q0O1xuICBjb2xvcjogIzIwMjAyMDtcbiAgei1pbmRleDogMTI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0MHB4O1xufVxuXG4uYWRkcmVzc1N0eWxpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kaXNwbGF5VHlwZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5vZG9tZXRlclN0eWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzEzOWJlOTtcbn1cblxuLm9kb21ldGVySGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzOWJlOTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9kb21ldGVyUGFydGl0aW9uTGluZSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMxMzliZTk7XG59XG5cbi5lbmdpbmVTdHlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZGIwYWI7XG59XG5cbi5lbmdpbmVIZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGRiMGFiO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZW5naW5lUGFydGl0aW9uTGluZSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwZGIwYWI7XG59XG5cbi5zcGVlZFN0eWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y4OTUxZDtcbn1cblxuLnNwZWVkSGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4OTUxZDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZyb21IZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjYzcxO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZnJvbVN0eWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJlY2M3MTtcbn1cblxuLnRvSGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViMzYzNjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRvU3R5bGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWIzNjM2O1xufVxuXG4udmFsdWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmljb25zUm93IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5ncmlkIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmNvbEJvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzIzODRiO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMjM4NGI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzIzODRiO1xufVxuXG4uZW5kQm9yZGVyIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMyMzg0Yjtcbn1cblxuLmRyYWdEb3duIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYm90dG9tOiAtMjgwcHg7XG59XG5cbi5kcmFnVXAge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBib3R0b206IDBweDtcbn1cblxuLnRpbWVTdGFtcCB7XG4gIGJhY2tncm91bmQ6ICMzMjM4NGI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbW1vbnRleHQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnZlcnRpY2xlQWxpZ24ge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/all-reports/trip-summary/map-modal/map-modal.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/all-reports/trip-summary/map-modal/map-modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: MapModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModalComponent", function() { return MapModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _services_auth_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth-map.service */ "./src/app/services/auth-map.service.ts");
/* harmony import */ var src_app_services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/openlayer-map.service */ "./src/app/services/openlayer-map.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var MapModalComponent = /** @class */ (function () {
    function MapModalComponent(modalController, mapService, ajaxService) {
        var _this = this;
        this.modalController = modalController;
        this.mapService = mapService;
        this.ajaxService = ajaxService;
        this.createMap = function () {
            if (localStorage.map === 'GoogleMap') {
                _this.map.updateSize();
                _this.map = _this.mapService.loadMap(_this.mapElement.nativeElement, { lat: 78.33251953124999, lng: 17.748686651728804 }, false, false);
            }
            else {
                _this.map = _this.mapService.loadMap(_this.mapElement.nativeElement, { lat: 69.53451763078357, lng: 89.6484375 }, false, false);
            }
            _this.mapService.setCenter(_this.map, { lat: 17.786351, lng: 78.090820 });
            _this.mapService.addMarker(_this.map, _this.sourceLocation, 'source', 'assets/vtstrackhisIcon/startFlag.png');
            _this.mapService.addMarker(_this.map, _this.destinationLocation, 'destination', 'assets/vtstrackhisIcon/endFlag.png');
            _this.mapService.fitBounds(_this.map, 1);
        };
        // if (localStorage.map == "GoogleMap") {
        //   this.mapService = new GoogleMapService();
        // }
        // else {
        this.mapService = new src_app_services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_5__["OpenlayerMapService"]();
        // }
    }
    MapModalComponent.prototype.getBack = function () {
        this.modalController.dismiss();
    };
    MapModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.createMap();
        }, 2000);
        this.getFromAddress(this.sourceLocation.lat, this.sourceLocation.lng);
        this.getToAddress(this.destinationLocation.lat, this.destinationLocation.lng);
    };
    MapModalComponent.prototype.getFromAddress = function (lat, lng) {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/login/company/latlngtoaddress/" + lat + "/" + lng + "/" + localStorage.corpId;
        this.ajaxService.ajaxGetObject(url)
            .subscribe(function (res) {
            _this.fromAddress = res;
            console.log(_this.fromAddress);
        });
    };
    MapModalComponent.prototype.getToAddress = function (lat, lng) {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/login/company/latlngtoaddress/" + lat + "/" + lng + "/" + localStorage.corpId;
        this.ajaxService.ajaxGetObject(url)
            .subscribe(function (res) {
            _this.toAddress = res;
            console.log(_this.toAddress);
        });
    };
    MapModalComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_auth_map_service__WEBPACK_IMPORTED_MODULE_4__["AuthMapService"] },
        { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MapModalComponent.prototype, "plateNo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapModalComponent.prototype, "sourceLocation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapModalComponent.prototype, "destinationLocation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElement', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapModalComponent.prototype, "mapElement", void 0);
    MapModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map-modal',
            template: __webpack_require__(/*! raw-loader!./map-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/all-reports/trip-summary/map-modal/map-modal.component.html"),
            styles: [__webpack_require__(/*! ./map-modal.component.scss */ "./src/app/all-reports/trip-summary/map-modal/map-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_auth_map_service__WEBPACK_IMPORTED_MODULE_4__["AuthMapService"],
            _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"]])
    ], MapModalComponent);
    return MapModalComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports.module.ts":
/*!*******************************************!*\
  !*** ./src/app/reports/reports.module.ts ***!
  \*******************************************/
/*! exports provided: ReportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPageModule", function() { return ReportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reports.page */ "./src/app/reports/reports.page.ts");
/* harmony import */ var _reports_form_reports_form_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reports-form/reports-form.page */ "./src/app/reports/reports-form/reports-form.page.ts");
/* harmony import */ var _all_reports_trip_summary_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../all-reports/trip-summary/map-modal/map-modal.component */ "./src/app/all-reports/trip-summary/map-modal/map-modal.component.ts");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");













var routes = [
    {
        path: '',
        component: _reports_page__WEBPACK_IMPORTED_MODULE_7__["ReportsPage"]
    }
];
var repModal = [
    {
        path: '',
        component: _reports_form_reports_form_page__WEBPACK_IMPORTED_MODULE_8__["ReportsFormPage"]
    },
    {
        path: 'tripSummaryReport',
        component: _all_reports_trip_summary_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_9__["MapModalComponent"]
    }
];
var ReportsPageModule = /** @class */ (function () {
    function ReportsPageModule() {
    }
    ReportsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(repModal),
                ionic_selectable__WEBPACK_IMPORTED_MODULE_6__["IonicSelectableModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlNativeDateTimeModule"],
                _shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_11__["SharedModModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"]
            ],
            declarations: [_all_reports_trip_summary_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_9__["MapModalComponent"], _reports_form_reports_form_page__WEBPACK_IMPORTED_MODULE_8__["ReportsFormPage"], _reports_page__WEBPACK_IMPORTED_MODULE_7__["ReportsPage"]]
        })
    ], ReportsPageModule);
    return ReportsPageModule;
}());



/***/ }),

/***/ "./src/app/reports/reports.page.scss":
/*!*******************************************!*\
  !*** ./src/app/reports/reports.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-padding,\n[padding] {\n  padding-left: unset;\n  padding-right: unset;\n  -webkit-padding-start: var(--ion-padding, 16px);\n  padding-inline-start: var(--ion-padding, 0px);\n  -webkit-padding-end: var(--ion-padding, -16px);\n  padding-inline-end: var(--ion-padding, 13px);\n  padding-bottom: 8px;\n}\n\n.iconSize {\n  width: 22px;\n  height: 22px;\n}\n\nion-card {\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\nion-card-content {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXHJlcG9ydHNcXHJlcG9ydHMucGFnZS5zY3NzIiwic3JjL2FwcC9yZXBvcnRzL3JlcG9ydHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsOENBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnRzL3JlcG9ydHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1wYWRkaW5nLFxyXG5bcGFkZGluZ10ge1xyXG4gIHBhZGRpbmctbGVmdDogdW5zZXQ7XHJcbiAgcGFkZGluZy1yaWdodDogdW5zZXQ7XHJcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAwcHgpO1xyXG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAtMTZweCk7XHJcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTNweCk7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweDtcclxufVxyXG5cclxuLmljb25TaXplIHtcclxuICB3aWR0aDogMjJweDtcclxuICBoZWlnaHQ6IDIycHg7XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbn1cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcbiIsIi5pb24tcGFkZGluZyxcbltwYWRkaW5nXSB7XG4gIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAwcHgpO1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgLTE2cHgpO1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxM3B4KTtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cblxuLmljb25TaXplIHtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/reports/reports.page.ts":
/*!*****************************************!*\
  !*** ./src/app/reports/reports.page.ts ***!
  \*****************************************/
/*! exports provided: ReportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPage", function() { return ReportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _reports_form_reports_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports-form/reports-form.page */ "./src/app/reports/reports-form/reports-form.page.ts");







var ReportsPage = /** @class */ (function () {
    function ReportsPage(ajaxService, modalController, activatedRoute, platform, menuController) {
        var _this = this;
        this.ajaxService = ajaxService;
        this.modalController = modalController;
        this.activatedRoute = activatedRoute;
        this.platform = platform;
        this.menuController = menuController;
        this.app = { logo: 'logo.png' };
        this.reportTypeItems = new Array();
        this.getAvailableReports = function () {
            var body = {
                "companyId": localStorage.corpId,
                "userId": localStorage.userName
            };
            // const url = serverUrl.web+"/api/vts/company/branch/mainMenu/"+JSON.stringify(body);
            // this.ajaxService.ajaxGetWithBody(url)
            // .subscribe(
            //   res =>{
            var reports = JSON.parse(localStorage.getItem('localData'))[1].mainmenu;
            var reportjson = {
                "Executive_Summary": "Executive summary report",
                "Driver_Behaviour": "Driver behaviour report",
                "Status_Summary": "Status summary report",
                "Over_Speed_Duration_Report": "Overspeed duration report",
                "Speed_Report": "Speed report",
                "Alert_Report": "Alert report",
                "Movement_Report": "Movement report",
                "Temprature_Report": "Temprature report",
                // "Alert_Report" : "Alert report",
                // "Vehicle_Summary_Report" : 'Summary Report',
                // "Vehicle_Movement_Report" : 'Movement Report',
                // "Vehicle_Speed_Report" : 'Speed Report',
                // "Vehicle_Stop_Report" : 'Stop Report',
                // "Vehicle_Idle_Report" : "Idle Report",
                // "Vehicle_Alerts_Report" : 'Alert Report',
                // "Digital_Input_Report" : 'Digital Input Report',
                // "Idle_Fuel_History_Report" : 'IDLEFUEL_HISTORY_REPORT',
                // "Maintenance_Report" : 'Maintenance Report',
                // "Temperature_Report" : 'TEMPERATURE_REPORT',
                // "Vehicle_Cumulative_Summary_Report" : "Cumulative Summary Report",
                // "Employee_Summary_Report" : 'EMPLOYEE_SUMMARY_REPORT',
                // "NO_Transmission_Report" : 'NO Transmission Report',
                "Vehicle_Summary_By_Day": 'Overall summary report',
                // "Vehicle_Status_Summary_Report" :
                // 'STATUS_SUMMARY_REPORT',
                // "Garbage_Collector_Report" : 'GARBAGE_COLLECTOR_REPORT',
                // "Mechanical_Sweeper_Report" : 'SWEEPER_REPORT',
                // "Asset_Event_Report" : "Asset Event Report",
                // "Tabuk_Municipality_Report" : 'Tabuk Municipality Report',
                // "Compactor_Report" : 'Compactor Report',
                // "Street_Sweeper_Report" : 'STREET_SWEEPER_REPORT',
                // "Monthly_Discount_Report" : 'Monthly Discount Report',
                // "Month_NO_Transmission_Report" : 'Monthly NO Transmission Report',
                // "Out_Zone_Report" : 'Out Zone Report',
                // "Fuel_Consumption_Report" : 'Fuel_Consumption_Report',
                // "Seat_Belt_Report" : 'Seat_Belt_Report',
                // "BT_Temperature_Report" : 'BT_TEMPERATURE_REPORT',
                // "Common_Report" : 'Common_Report',
                // "All_Company_Details" : 'All_Company_Details',
                // "Mokafha_Report" : 'Mokafha_Report',
                // "testing_Report" : 'testing_Report',
                // "service_maintenance_report" : 'SERVICE_MAINTENANCE_REPORT',
                // "Utilization_Report" : 'Utilization_Report',
                // "Assignment_Report" : 'Assignment_Report',
                // "Driver_Event_Report" : 'Driver_Event_Report',
                // "OBD_OVERALL_REPORT" : 'OBD_OVERALL_REPORT',
                // "OBD_Fuel_Report" : "OBD_Fuel_Report",
                // "Overspeed_Timing_Report" : "OVERSPEED_TIMING_REPORT",
                // "non_running_report" : 'NON_RUNNING_REPORT',
                "Trip_summary_report": "Trip summary report",
                "Vehicle_tripBy_summary": "Engine Hours summary report",
                "Ac_Report": 'AC report'
            };
            //  const loginMenu = res.replace("[",'').replace("]",'').replace(/'/g,'').split(",");
            for (var i = 0; i < reports.length; i++) {
                if (reportjson.hasOwnProperty(reports[i])) {
                    _this.reportTypeItems.push(reportjson[reports[i]]);
                }
            }
            // }
            // )
        };
    }
    ReportsPage.prototype.openForm = function (mode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var shownContent, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shownContent = {};
                        switch (mode) {
                            case "Overall summary report":
                                shownContent["plateNo"] = true;
                                shownContent["fromDate"] = true;
                                shownContent["toDate"] = true;
                                break;
                            case "Engine Hours summary report":
                                shownContent["plateNo"] = true;
                                shownContent["fromDate"] = true;
                                shownContent["fromTime"] = true;
                                shownContent["toDate"] = true;
                                shownContent["toTime"] = true;
                                break;
                            case "Trip summary report":
                                shownContent["plateNo"] = true;
                                shownContent["fromDate"] = true;
                                shownContent["fromTime"] = true;
                                shownContent["toDate"] = true;
                                shownContent["toTime"] = true;
                                break;
                            case "Executive summary report":
                                //sshownContent["plateNo"] = true;
                                shownContent["fromDate"] = true;
                                //shownContent["toDate"] = true;
                                break;
                            case "Driver behaviour report":
                                shownContent["fromDate"] = true;
                                shownContent["toDate"] = true;
                                break;
                            case "Status summary report":
                                shownContent["plateNo"] = true;
                                shownContent["fromDate"] = true;
                                shownContent["toDate"] = true;
                                break;
                            case "Alert report":
                                shownContent["fromDate"] = true;
                                break;
                            case "Overspeed duration report":
                                shownContent["plateNo"] = true;
                                shownContent["fromDate"] = true;
                                shownContent["toDate"] = true;
                                break;
                            case "Speed report":
                                shownContent["plateNo"] = true;
                                shownContent["fromDate"] = true;
                                shownContent["speed"] = true;
                                shownContent["condition"] = true;
                                break;
                            case "Movement report":
                                shownContent["plateNo"] = true;
                                shownContent["fromDate"] = true;
                                shownContent["timeExceed"] = true;
                                break;
                            case "Temprature report":
                                shownContent["plateNo"] = true;
                                shownContent["fromDate"] = true;
                                shownContent["fromTime"] = true;
                                shownContent["toDate"] = true;
                                shownContent["toTime"] = true;
                                shownContent["sensor"] = true;
                                shownContent["timeExceed"] = true;
                                shownContent["condition"] = true;
                                break;
                            case "Ac report":
                                shownContent["fromDate"] = true;
                                shownContent["toDate"] = true;
                                shownContent["plateNo"] = true;
                                break;
                        }
                        return [4 /*yield*/, this.modalController.create({
                                component: _reports_form_reports_form_page__WEBPACK_IMPORTED_MODULE_6__["ReportsFormPage"],
                                componentProps: {
                                    shownContent: shownContent,
                                    reportName: mode,
                                    plateNo: this.plateNo
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ReportsPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.subscription = this.platform.backButton.subscribe(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        if (this.menuController.isOpen()) {
                            this.menuController.close();
                        }
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ReportsPage.prototype.ionViewWillLeave = function () {
        this.subscription.unsubscribe();
    };
    ReportsPage.prototype.ngOnInit = function () {
        this.plateNo = this.activatedRoute.snapshot.paramMap.get("plateNo");
        // this.app["logo"] = localStorage.companyLogo;
        // this.app["logo"] = localStorage.companyLogo;	
        if (localStorage.getItem('fmslogin') == 'FMS') {
            this.app["logo"] = localStorage.getItem('fmslogo');
        }
        else {
            this.app["logo"] = localStorage.companyLogo;
        }
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["app"].appName;
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
        // this.getAvailableReports();
    };
    ReportsPage.ctorParameters = function () { return [
        { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    ReportsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! raw-loader!./reports.page.html */ "./node_modules/raw-loader/index.js!./src/app/reports/reports.page.html"),
            styles: [__webpack_require__(/*! ./reports.page.scss */ "./src/app/reports/reports.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], ReportsPage);
    return ReportsPage;
}());



/***/ })

}]);
//# sourceMappingURL=reports-reports-module-es5.js.map