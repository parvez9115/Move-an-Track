(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-status-update-device-status-update-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-status-update/comment/comment.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-status-update/comment/comment.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"wrapper-container\">\n    <ion-col>\n      <form [formGroup]=\"commentForm\">\n        <ion-row class=\"form-field\">\n          <ion-col>\n            <ion-row>\n              <ion-col size=\"4\" style=\"align-self: center; text-align: center\">\n                <ion-label class=\"col-content\">Comment :</ion-label></ion-col\n              >\n              <ion-col size=\"8\">\n                <textarea\n                  class=\"comment\"\n                  type=\"text\"\n                  placeholder=\"Enter the Comments\"\n                  formControlName=\"comment\"\n                ></textarea>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col style=\"text-align: center; padding: 15px\">\n                <ion-button\n                  (click)=\"submitBtn('nexttab==6')\"\n                  [disabled]=\"!commentForm.valid\"\n                  >Submit</ion-button\n                >\n                <ion-button type=\"submit\" (click)=\"cancelBtn()\"\n                  >Cancel</ion-button\n                >\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"padding: 10px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        [enablebrowserselection]=\"true\"\n        [theme]=\"'material'\"\n        [width]=\"'99.5%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [pagesizeoptions]=\"page\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: left !important;\n          margin: auto;\n          cursor: pointer;\n          padding-left: 5px;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-status-update/device-status-update.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-status-update/device-status-update.page.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons *ngIf=\"myPlatform == 'desktop'\" slot=\"start\">\n      <ion-icon\n        routerLink=\"/tabs-login/esim-dashboard\"\n        name=\"arrow-back\"\n        style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Device Status Update</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row *ngIf=\"myPlatform != 'desktop'\" class=\"tabrow\">\n    <ion-col class=\"form-field\">\n      <ion-row class=\"form-field\">\n        <div class=\"wrap\">\n          <button\n            (click)=\"getdatas('6'); clear()\"\n            [ngClass]=\"{nexttab:true,select:tab == '6'}\"\n            size=\"2.5\"\n          >\n            CA\n          </button>\n        </div>\n        <div class=\"wrap\">\n          <button\n            (click)=\"getdatas('1');clear()\"\n            [ngClass]=\"{nexttab:true,select:tab=='1'}\"\n            size=\"2.5\"\n          >\n            Renewal 1\n          </button>\n        </div>\n        <div class=\"wrap\">\n          <button\n            (click)=\"getdatas('2');clear()\"\n            [ngClass]=\"{nexttab:true,select:tab=='2'}\"\n            size=\"2.5\"\n          >\n            Renewal 2\n          </button>\n        </div>\n\n        <div class=\"wrap\">\n          <button\n            (click)=\"getdatas('3');clear()\"\n            [ngClass]=\"{nexttab:true,select:tab=='3'}\"\n            size=\"2.5\"\n          >\n            Renewal 3\n          </button>\n        </div>\n\n        <div class=\"wrap\">\n          <button\n            (click)=\"getdatas('4');clear()\"\n            [ngClass]=\"{nexttab:true,select:tab=='4'}\"\n            size=\"2.5\"\n          >\n            Renewal 4\n          </button>\n        </div>\n\n        <div class=\"wrap\">\n          <button\n            (click)=\"getdatas('5');clear()\"\n            [ngClass]=\"{nexttab:true,select:tab=='5'}\"\n            size=\"2.5\"\n          >\n            Renewal 5\n          </button>\n        </div>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"myPlatform == 'desktop'\" class=\"tabrow\">\n    <ion-col>\n      <ion-row>\n        <div class=\"wrap\">\n          <button\n            (click)=\"getdatas('6'); clear()\"\n            [ngClass]=\"{nexttab:true,select:tab == '6'}\"\n          >\n            CA\n          </button>\n        </div>\n        <div class=\"wrap\">\n          <button\n            (click)=\"getdatas('1');clear()\"\n            [ngClass]=\"{nexttab:true,select:tab=='1'}\"\n          >\n            Renewal 1\n          </button>\n        </div>\n        <div class=\"wrap\">\n          <button\n            (click)=\"getdatas('2');clear()\"\n            [ngClass]=\"{nexttab:true,select:tab=='2'}\"\n          >\n            Renewal 2\n          </button>\n        </div>\n\n        <div class=\"wrap\">\n          <button\n            (click)=\"getdatas('3');clear()\"\n            [ngClass]=\"{nexttab:true,select:tab=='3'}\"\n          >\n            Renewal 3\n          </button>\n        </div>\n\n        <div class=\"wrap\">\n          <button\n            (click)=\"getdatas('4');clear()\"\n            [ngClass]=\"{nexttab:true,select:tab=='4'}\"\n          >\n            Renewal 4\n          </button>\n        </div>\n\n        <div class=\"wrap\">\n          <button\n            (click)=\"getdatas('5');clear()\"\n            [ngClass]=\"{nexttab:true,select:tab=='5'}\"\n          >\n            Renewal 5\n          </button>\n        </div>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <!-- mobile view start -->\n  <!-- ionic card -->\n  <ion-row *ngIf=\"myPlatform != 'desktop'\" class=\"form-field\">\n    <ion-col>\n      <form *ngIf=\"tab == 6\" [formGroup]=\"castatusform\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >CA Status Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btnmbl\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/CACardStatusUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">CA Status Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col style=\"margin-top: 5px\">\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event)\"\n                  formControlName=\"castatusupdate\"\n                />\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"text-align: center\">\n              <ion-col>\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer()\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!castatusform.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form *ngIf=\"tab == 1\" [formGroup]=\"renewalstatusupdateone\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >Renewal Status 1 Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btnmbl\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalCardStatusUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">Renewal Status Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col\n                size=\"12\"\n                size-sm=\"12\"\n                size-lg=\"6\"\n                style=\"margin-top: 5px\"\n                size-md=\"12\"\n              >\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event,'status update')\"\n                  formControlName=\"renewalstatusone\"\n                />\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"text-align: center\">\n              <ion-col>\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer('status update',1)\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!renewalstatusupdateone.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form *ngIf=\"tab == 2\" [formGroup]=\"renewalstatusupdatetwo\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >Renewal Status 2 Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btnmbl\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalCardStatusUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">Renewal Status Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col style=\"margin-top: 5px\">\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event,'status update')\"\n                  formControlName=\"renewalstatustwo\"\n                />\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"text-align: center\">\n              <ion-col>\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer('status update',2)\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!renewalstatusupdatetwo.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form *ngIf=\"tab == 3\" [formGroup]=\"renewalstatusupdatethree\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >Renewal Status 3 Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btnmbl\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalCardStatusUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">Renewal Status Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col style=\"margin-top: 5px\">\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event,'status update')\"\n                  formControlName=\"renewalstatusthree\"\n                />\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"text-align: center\">\n              <ion-col>\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer('status update',3)\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!renewalstatusupdatethree.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form *ngIf=\"tab == 4\" [formGroup]=\"renewalstatusupdatefour\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >Renewal Status 4 Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btnmbl\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalCardStatusUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">Renewal Status Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col style=\"margin-top: 5px\">\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event,'status update')\"\n                  formControlName=\"renewalstatusfour\"\n                />\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"text-align: center\">\n              <ion-col>\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer('status update',4)\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!renewalstatusupdatefour.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form *ngIf=\"tab == 5\" [formGroup]=\"renewalstatusupdatefive\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >Renewal Status 5 Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btnmbl\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalCardStatusUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">Renewal Status Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col style=\"margin-top: 5px\">\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event,'status update')\"\n                  formControlName=\"renewalstatusfive\"\n                />\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"text-align: center\">\n              <ion-col>\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer('status update',5)\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!renewalstatusupdatefive.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n    </ion-col>\n  </ion-row>\n  <!-- ionic card -->\n  <ion-row *ngIf=\"myPlatform != 'desktop'\" class=\"form-field\">\n    <ion-col>\n      <form *ngIf=\"tab == 6\" [formGroup]=\"cacommentform\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >CA Comment Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btnmbl\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/CACommentUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">CA comment Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col style=\"margin-top: 5px\">\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event,'ca')\"\n                  formControlName=\"cacommentupdate\"\n                />\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"text-align: center\">\n              <ion-col>\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer('ca')\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!cacommentform.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear1()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form *ngIf=\"tab == 1\" [formGroup]=\"renewalcommentupdateone\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >Renewal comment 1 Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btnmbl\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalCommentUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">Renewal comment Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col style=\"margin-top: 5px\">\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event,'comment update')\"\n                  formControlName=\"renewalcommentone\"\n                />\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"text-align: center\">\n              <ion-col>\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer('comment update',1)\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!renewalcommentupdateone.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear1()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form *ngIf=\"tab == 2\" [formGroup]=\"renewalcommentupdatetwo\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >Renewal comment 2 Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btnmbl\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalCommentUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">Renewal comment Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col style=\"margin-top: 5px\">\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event,'comment update')\"\n                  formControlName=\"renewalcommenttwo\"\n                />\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"text-align: center\">\n              <ion-col>\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer('comment update',2)\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!renewalcommentupdatetwo.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear1()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form *ngIf=\"tab == 3\" [formGroup]=\"renewalcommentupdatethree\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >Renewal comment 3 Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btnmbl\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalCommentUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">Renewal comment Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col style=\"margin-top: 5px\">\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event,'comment update')\"\n                  formControlName=\"renewalcommentthree\"\n                />\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"text-align: center\">\n              <ion-col>\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer('comment update',3)\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!renewalcommentupdatethree.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear1()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form *ngIf=\"tab == 4\" [formGroup]=\"renewalcommentupdatefour\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >Renewal comment 4 Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btnmbl\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalCommentUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">Renewal comment Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col style=\"margin-top: 5px\">\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event,'comment update')\"\n                  formControlName=\"renewalcommentfour\"\n                />\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"text-align: center\">\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer('comment update',4)\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!renewalcommentupdatefour.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear1()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form *ngIf=\"tab == 5\" [formGroup]=\"renewalcommentupdatefive\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >Renewal comment 5 Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btnmbl\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalCommentUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">Renewal comment Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col style=\"margin-top: 5px\">\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event,'comment update')\"\n                  formControlName=\"renewalcommentfive\"\n                />\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"text-align: center\">\n              <ion-col>\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer('comment update',5)\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!renewalcommentupdatefive.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear1()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n    </ion-col>\n  </ion-row>\n  <!-- ionic input -->\n  <ion-row class=\"form-field\" *ngIf=\"myPlatform != 'desktop'\">\n    <ion-col>\n      <form [formGroup]=\"statusform\">\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label\n                position=\"floating\"\n                style=\"color: blue; font-weight: lighter\"\n              >\n                IMEI Number :</ion-label\n              >\n              <ion-input type=\"number\" formControlName=\"imeino\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"text-align: center\">\n          <ion-col>\n            <ion-button\n              (click)=\"Submit()\"\n              id=\"submitbtn\"\n              size=\"small\"\n              [disabled]=\"!statusform.valid\"\n              >Submit</ion-button\n            >\n\n            <ion-button\n              type=\"reset\"\n              (click)=\"clear()\"\n              size=\"small\"\n              id=\"submitbtn\"\n              >Clear</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-col>\n  </ion-row>\n  <!-- mobile view end -->\n\n  <ion-row\n    *ngIf=\"myPlatform == 'desktop'\"\n    class=\"form-field\"\n    style=\"justify-content: end\"\n  >\n    <ion-col size=\"6\">\n      <form *ngIf=\"tab == 6\" [formGroup]=\"castatusform\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >CA Status Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\" style=\"margin-top: -10px\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btn\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/CACardStatusUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">CA Status Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col\n                size=\"12\"\n                size-sm=\"12\"\n                size-lg=\"6\"\n                style=\"margin-top: 5px\"\n                size-md=\"12\"\n              >\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event)\"\n                  formControlName=\"castatusupdate\"\n                />\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer()\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!castatusform.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form *ngIf=\"tab == 1\" [formGroup]=\"renewalstatusupdateone\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >Renewal Status 1 Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\" style=\"margin-top: -10px\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btn\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalCardStatusUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">Renewal Status Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col\n                size=\"12\"\n                size-sm=\"12\"\n                size-lg=\"6\"\n                style=\"margin-top: 5px\"\n                size-md=\"12\"\n              >\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event,'status update')\"\n                  formControlName=\"renewalstatusone\"\n                />\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer('status update',1)\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!renewalstatusupdateone.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form *ngIf=\"tab == 2\" [formGroup]=\"renewalstatusupdatetwo\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >Renewal Status 2 Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\" style=\"margin-top: -10px\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btn\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalCardStatusUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">Renewal Status Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col\n                size=\"12\"\n                size-sm=\"12\"\n                size-lg=\"6\"\n                style=\"margin-top: 5px\"\n                size-md=\"12\"\n              >\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event,'status update')\"\n                  formControlName=\"renewalstatustwo\"\n                />\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer('status update',2)\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!renewalstatusupdatetwo.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form *ngIf=\"tab == 3\" [formGroup]=\"renewalstatusupdatethree\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >Renewal Status 3 Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\" style=\"margin-top: -10px\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btn\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalCardStatusUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">Renewal Status Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col\n                size=\"12\"\n                size-sm=\"12\"\n                size-lg=\"6\"\n                style=\"margin-top: 5px\"\n                size-md=\"12\"\n              >\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event,'status update')\"\n                  formControlName=\"renewalstatusthree\"\n                />\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer('status update',3)\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!renewalstatusupdatethree.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form *ngIf=\"tab == 4\" [formGroup]=\"renewalstatusupdatefour\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >Renewal Status 4 Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\" style=\"margin-top: -10px\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btn\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalCardStatusUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">Renewal Status Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col\n                size=\"12\"\n                size-sm=\"12\"\n                size-lg=\"6\"\n                style=\"margin-top: 5px\"\n                size-md=\"12\"\n              >\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event,'status update')\"\n                  formControlName=\"renewalstatusfour\"\n                />\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer('status update',4)\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!renewalstatusupdatefour.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form *ngIf=\"tab == 5\" [formGroup]=\"renewalstatusupdatefive\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >Renewal Status 5 Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\" style=\"margin-top: -10px\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btn\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalCardStatusUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">Renewal Status Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col\n                size=\"12\"\n                size-sm=\"12\"\n                size-lg=\"6\"\n                style=\"margin-top: 5px\"\n                size-md=\"12\"\n              >\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event,'status update')\"\n                  formControlName=\"renewalstatusfive\"\n                />\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer('status update',5)\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!renewalstatusupdatefive.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n    </ion-col>\n\n    <ion-col size=\"6\">\n      <form *ngIf=\"tab == 6\" [formGroup]=\"cacommentform\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >CA Comment Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\" style=\"margin-top: -10px\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btn\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/CACommentUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">CA comment Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col\n                size=\"12\"\n                size-sm=\"12\"\n                size-lg=\"6\"\n                style=\"margin-top: 5px\"\n                size-md=\"12\"\n              >\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event,'ca')\"\n                  formControlName=\"cacommentupdate\"\n                />\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer('ca')\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!cacommentform.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear1()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form *ngIf=\"tab == 1\" [formGroup]=\"renewalcommentupdateone\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >Renewal comment 1 Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\" style=\"margin-top: -10px\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btn\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalCommentUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">Renewal comment Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col\n                size=\"12\"\n                size-sm=\"12\"\n                size-lg=\"6\"\n                style=\"margin-top: 5px\"\n                size-md=\"12\"\n              >\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event,'comment update')\"\n                  formControlName=\"renewalcommentone\"\n                />\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer('comment update',1)\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!renewalcommentupdateone.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear1()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form *ngIf=\"tab == 2\" [formGroup]=\"renewalcommentupdatetwo\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >Renewal comment 2 Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\" style=\"margin-top: -10px\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btn\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalCommentUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">Renewal comment Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col\n                size=\"12\"\n                size-sm=\"12\"\n                size-lg=\"6\"\n                style=\"margin-top: 5px\"\n                size-md=\"12\"\n              >\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event,'comment update')\"\n                  formControlName=\"renewalcommenttwo\"\n                />\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer('comment update',2)\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!renewalcommentupdatetwo.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear1()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form *ngIf=\"tab == 3\" [formGroup]=\"renewalcommentupdatethree\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >Renewal comment 3 Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\" style=\"margin-top: -10px\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btn\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalCommentUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">Renewal comment Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col\n                size=\"12\"\n                size-sm=\"12\"\n                size-lg=\"6\"\n                style=\"margin-top: 5px\"\n                size-md=\"12\"\n              >\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event,'comment update')\"\n                  formControlName=\"renewalcommentthree\"\n                />\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer('comment update',3)\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!renewalcommentupdatethree.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear1()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form *ngIf=\"tab == 4\" [formGroup]=\"renewalcommentupdatefour\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >Renewal comment 4 Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\" style=\"margin-top: -10px\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btn\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalCommentUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">Renewal comment Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col\n                size=\"12\"\n                size-sm=\"12\"\n                size-lg=\"6\"\n                style=\"margin-top: 5px\"\n                size-md=\"12\"\n              >\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event,'comment update')\"\n                  formControlName=\"renewalcommentfour\"\n                />\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer('comment update',4)\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!renewalcommentupdatefour.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear1()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form *ngIf=\"tab == 5\" [formGroup]=\"renewalcommentupdatefive\">\n        <ion-card class=\"cardCenter\">\n          <ion-card-content style=\"margin-top: -10px\">\n            <ion-row\n              ><ion-col size=\"10\"\n                ><ion-card-subtitle\n                  >Renewal comment 5 Update:</ion-card-subtitle\n                ></ion-col\n              >\n\n              <ion-col class=\"tooltipca\" size=\"2\" style=\"margin-top: -10px\">\n                <ion-fab-button\n                  size=\"small\"\n                  class=\"fab-btn\"\n                  href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/RenewalCommentUpdate.xlsx\"\n                  download=\"sample.xlsx\"\n                >\n                  <div class=\"excel-wrapper\"></div>\n                </ion-fab-button>\n                <span class=\"tooltipcatext\">Renewal comment Update</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col\n                size=\"12\"\n                size-sm=\"12\"\n                size-lg=\"6\"\n                style=\"margin-top: 5px\"\n                size-md=\"12\"\n              >\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event,'comment update')\"\n                  formControlName=\"renewalcommentfive\"\n                />\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\n                <ion-button\n                  size=\"small\"\n                  (click)=\"sendToServer('comment update',5)\"\n                  id=\"submitbtn\"\n                  [disabled]=\"!renewalcommentupdatefive.valid\"\n                  >Submit\n                </ion-button>\n                <ion-button\n                  type=\"reset\"\n                  (click)=\"cardclear1()\"\n                  size=\"small\"\n                  id=\"submitbtn\"\n                  >Clear\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </form>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"form-field\" *ngIf=\"myPlatform == 'desktop'\">\n    <ion-col size=\"7\" style=\"margin-top: 15px\">\n      <form [formGroup]=\"statusform\">\n        <ion-row style=\"text-align: center\">\n          <ion-col>\n            <ion-item>\n              <ion-label\n                position=\"floating\"\n                style=\"color: blue; font-weight: lighter\"\n              >\n                IMEI Number :</ion-label\n              >\n              <ion-input type=\"number\" formControlName=\"imeino\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col style=\"align-self: center\">\n            <ion-button\n              (click)=\"Submit()\"\n              id=\"submitbtn\"\n              size=\"small\"\n              [disabled]=\"!statusform.valid\"\n              >Submit</ion-button\n            >\n\n            <ion-button\n              type=\"reset\"\n              (click)=\"clear()\"\n              size=\"small\"\n              id=\"submitbtn\"\n              >Clear</ion-button\n            >\n          </ion-col></ion-row\n        >\n      </form>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"show\">\n    <ion-col>\n      <ion-row *ngIf=\"myPlatform != 'desktop'\">\n        <ion-col class=\"form-field\" style=\"text-align: center\"\n          ><ion-button *ngIf=\"tab != 6\" size=\"small\" (click)=\"Simupdate()\">\n            Sim Update</ion-button\n          ><ion-button size=\"small\" (click)=\"checkstatus()\">\n            Status Update</ion-button\n          ><ion-button size=\"small\" (click)=\"Comment()\"\n            >Comment</ion-button\n          ></ion-col\n        >\n      </ion-row>\n\n      <ion-row *ngIf=\"myPlatform == 'desktop'\">\n        <ion-col style=\"text-align: end\">\n          <ion-button size=\"small\" (click)=\"requestdateupdate()\">\n            Request Date Update</ion-button\n          >\n\n          <ion-button *ngIf=\"tab != 6\" size=\"small\" (click)=\"Simupdate()\">\n            Sim Update</ion-button\n          ><ion-button size=\"small\" (click)=\"checkstatus()\">\n            Status Update</ion-button\n          ><ion-button size=\"small\" (click)=\"Comment()\"\n            >Comment</ion-button\n          ></ion-col\n        >\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <jqxGrid\n            #myGrid\n            [theme]=\"'material'\"\n            (onRowclick)=\"myGridOnRowSelect($event)\"\n            [enablebrowserselection]=\"true\"\n            [pagesizeoptions]=\"page\"\n            [width]=\"'99.5%'\"\n            [autoheight]=\"true\"\n            [source]=\"dataAdapter\"\n            [columns]=\"columns\"\n            [filterable]=\"true\"\n            [sortable]=\"true\"\n            [columnsresize]=\"true\"\n            [enabletooltips]=\"true\"\n            [pageable]=\"true\"\n            style=\"\n              font-size: 16px;\n              text-align: center !important;\n              margin: auto;\n              cursor: pointer;\n            \"\n          >\n          </jqxGrid> </ion-col\n      ></ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-status-update/requestdate-update/requestdate-update.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-status-update/requestdate-update/requestdate-update.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Request Date Update</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"myPlatform == 'desktop'\" class=\"content-style label-style\">\n  <ion-row>\n    <ion-col>\n      <form [formGroup]=\"requestForm\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Request Date :</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"date\"\n                  [max]=\"maxDate\"\n                  formControlName=\"requestdate\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col style=\"text-align: center; padding: 20px\">\n      <ion-button class=\"button\" (click)=\"submitBtn()\"> Submit </ion-button>\n      <ion-button class=\"button\" (click)=\"cancelBtn()\">Cancel</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-status-update/sim-update/sim-update.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-status-update/sim-update/sim-update.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Sim Status Update</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"wrapper-container\">\n    <ion-col>\n      <form [formGroup]=\"simupdate\">\n        <ion-row class=\"form-field\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Vltd No : </ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  formControlName=\"vltdsno\"\n                  class=\"input\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Imei No : </ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  formControlName=\"imeino\"\n                  class=\"input\"\n                  disabled\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Sim 1 :</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  type=\"number\"\n                  formControlName=\"sim1\"\n                  placeholder=\"Enter the Sim No\"\n                  class=\"input\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Sim 2 :</ion-col>\n              <ion-col size=\"7\">\n                <ion-input\n                  type=\"number\"\n                  formControlName=\"sim2\"\n                  placeholder=\"Enter the Sim No\"\n                  class=\"input\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 20px\">\n          <ion-button\n            class=\"button\"\n            type=\"submit\"\n            [disabled]=\"!simupdate.valid || button\"\n            (click)=\"submitBtn()\"\n          >\n            Submit\n          </ion-button>\n          <ion-button class=\"button\" type=\"submit\" (click)=\"cancelBtn()\">\n            Cancel\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-status-update/status-update/status-update.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/device-status-update/status-update/status-update.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon (click)=\"cancelBtn()\" name=\"arrow-back\" style=\"padding: 10px\" slot=\"start\"></ion-icon>\n    </ion-buttons>\n    <ion-title>Device Status Update</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"myPlatform != 'desktop'\" class=\"content-style label-style\">\n  <ion-grid>\n    <ion-row class=\"form-field\">\n      <ion-col size=\"12\" size-sm=\"12\" size-md=\"10\" offset-md=\"1\" size-lg=\"12\" offset-lg=\"0\">\n        <form [formGroup]=\"AddCaStatus\">\n          <ion-row *ngIf=\"!show\">\n            <ion-col>\n              <ion-label class=\"col-content\">Card Start Date :</ion-label>\n              <ion-input class=\"label-style\" type=\"date\" [min]=\"minDate\" [max]=\"maxDate\"\n                formControlName=\"cardactivationdate\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"show\">\n            <ion-col>\n              <ion-label class=\"col-content\">Card Start Date :</ion-label>\n              <ion-input class=\"label-style\" type=\"date\" formControlName=\"cardactivationdate\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row style=\"display: none\">\n            <ion-col>\n              <ion-label class=\"col-content\">CA End Date :</ion-label>\n              <ion-input class=\"label-style\" type=\"date\" formControlName=\"cardenddate\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">Card Status :</ion-label>\n              <ion-input class=\"label-style\" type=\"text\" disabled placeholder=\"Enter the Card Status\"\n                formControlName=\"cardstatus\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">Comments :</ion-label>\n              <textarea class=\"comment\" type=\"text\" placeholder=\"Enter the Comments\"\n                formControlName=\"comment\"></textarea>\n            </ion-col>\n          </ion-row>\n        </form>\n\n        <ion-row class=\"content-style\">\n          <ion-col style=\"text-align: center !important; padding: 20px\">\n            <ion-button class=\"button\" type=\"submit\" [disabled]=\"!AddCaStatus.valid\"\n              (click)=\"Submit('nexttab==6')\">Submit\n            </ion-button>\n            <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\">Cancel</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf=\"myPlatform == 'desktop'\" class=\"content-style label-style\">\n  <ion-row>\n    <ion-col>\n      <form [formGroup]=\"AddCaStatus\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row *ngIf=\"!show\" class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Card Start Date :</ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" type=\"date\" [min]=\"minDate\" [max]=\"maxDate\"\n                  formControlName=\"cardactivationdate\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n\n            <ion-row *ngIf=\"show\" class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">CA Start Date :</ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" type=\"date\" formControlName=\"cardactivationdate\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row style=\"display: none\" class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\"> CA End Date : </ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" type=\"date\" formControlName=\"cardenddate\"></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\"> Card Status : </ion-col>\n              <ion-col size=\"7\">\n                <ion-input class=\"label-style\" type=\"text\" placeholder=\"Enter the Card Status\" disabled\n                  formControlName=\"cardstatus\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\"> Comments : </ion-col>\n              <ion-col size=\"7\">\n                <textarea class=\"comment\" type=\"text\" placeholder=\"Enter the Comments\"\n                  formControlName=\"comment\"></textarea>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important\">\n          <ion-button class=\"button\" type=\"submit\" [disabled]=\"!AddCaStatus.valid\" (click)=\"Submit('nexttab==6')\">Submit\n          </ion-button>\n          <ion-button class=\"button\" type=\"cancel\" (click)=\"cancelBtn()\">Cancel</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/delar-application/device-status-update/comment/comment.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/device-status-update/comment/comment.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n.form-field {\n  margin: -5px;\n  border-radius: 7px;\n}\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n.comment {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  height: 100px;\n  width: 100%;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLXN0YXR1cy11cGRhdGUvY29tbWVudC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxkZXZpY2Utc3RhdHVzLXVwZGF0ZVxcY29tbWVudFxcY29tbWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLXN0YXR1cy11cGRhdGUvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUNDRjtBQUNGO0FERUE7RUFDRTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0RGO0FESUE7RUFDRTtJQUNFLFNBQUE7RUNERjs7RURJQTtJQUNFLFVBQUE7RUNERjtBQUNGO0FER0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0RGO0FESUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9kZXZpY2Utc3RhdHVzLXVwZGF0ZS9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweCkgYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDhweCAxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogLTVweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZm9ybS1maWVsZCB7XHJcbiAgICB6b29tOiA4MCU7XHJcbiAgfVxyXG5cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcbi5jb2wtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uY29tbWVudCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTVweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uY29sLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNvbW1lbnQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/device-status-update/comment/comment.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/delar-application/device-status-update/comment/comment.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








let CommentComponent = class CommentComponent {
    constructor(platform, formBuilder, modalController, ajaxService, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.page = [];
    }
    createForm() {
        this.commentForm = this.formBuilder.group({
            comment: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    clear() {
        this.commentForm.patchValue({
            comment: "",
        });
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    submitBtn() {
        if (this.nexttab == 6) {
            var data = {
                iccidno: this.comment[0].iccidno1.toString(),
                comment: this.commentForm.value.comment.toString(),
                createdby: this.comment[0].createdby.toString(),
            };
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/saveEsimCAComment";
            this.ajaxService
                .ajaxPostWithString(url, JSON.stringify(data))
                .subscribe((res) => {
                if (JSON.parse(res).message == "Esim CA Comment Saved Successfully") {
                    this.commonService.showConfirm("Esim CA Comment Saved Successfully");
                    this.clear();
                    this.modalController.dismiss({
                        data: "Esim CA Comment Saved Successfully",
                    });
                }
                else {
                    this.commonService.showConfirm(JSON.parse(res).message);
                }
            });
        }
        else {
            let data = {
                renewalno: this.comment[0].renewalno.toString(),
                iccidno: this.comment[0].iccidno1.toString(),
                comment: this.commentForm.value.comment.toString(),
                createdby: this.comment[0].createdby.toString(),
            };
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/saveEsimRenewalComment";
            this.ajaxService
                .ajaxPostWithString(url, JSON.stringify(data))
                .subscribe((res) => {
                if (JSON.parse(res).message == "Esim Renewal Comment Saved Successfully") {
                    this.commonService.showConfirm("Esim Renewal Comment Saved Successfully");
                    this.clear();
                    this.modalController.dismiss({
                        data: "Esim Renewal Comment Saved Successfully",
                    });
                }
                else {
                    this.commonService.showConfirm(JSON.parse(res).message);
                }
            });
        }
    }
    getDatas() {
        this.page = [];
        if (this.comment[0].comment != "") {
            this.tableData = JSON.parse(this.comment[0].comment);
        }
        this.page = ["100", "200", "500", "1000"];
        this.renderer = (row, column, value) => {
            if (value == "" || null || undefined || value == ",") {
                return "--";
            }
            else {
                return ('<span style="line-height:32px;font-size:17px;color:darkblue;margin:auto;padding-left: 5px;">' +
                    value +
                    "</span>");
            }
        };
        this.source = { localdata: this.tableData };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.columns = [
            {
                text: "Comment",
                datafield: "comment",
                cellsrenderer: this.renderer,
                cellsalign: "left",
                align: "left",
                width: 460,
            },
        ];
    }
    ngOnInit() {
        this.createForm();
        this.getDatas();
    }
};
CommentComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
], CommentComponent.prototype, "myGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CommentComponent.prototype, "comment", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CommentComponent.prototype, "nexttab", void 0);
CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-comment",
        template: __webpack_require__(/*! raw-loader!./comment.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-status-update/comment/comment.component.html"),
        styles: [__webpack_require__(/*! ./comment.component.scss */ "./src/app/delar-application/device-status-update/comment/comment.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
], CommentComponent);



/***/ }),

/***/ "./src/app/delar-application/device-status-update/device-status-update.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/device-status-update/device-status-update.module.ts ***!
  \***************************************************************************************/
/*! exports provided: DeviceStatusUpdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceStatusUpdatePageModule", function() { return DeviceStatusUpdatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _device_status_update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-status-update.page */ "./src/app/delar-application/device-status-update/device-status-update.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _status_update_status_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./status-update/status-update.component */ "./src/app/delar-application/device-status-update/status-update/status-update.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/delar-application/device-status-update/comment/comment.component.ts");
/* harmony import */ var _sim_update_sim_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sim-update/sim-update.component */ "./src/app/delar-application/device-status-update/sim-update/sim-update.component.ts");
/* harmony import */ var _requestdate_update_requestdate_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./requestdate-update/requestdate-update.component */ "./src/app/delar-application/device-status-update/requestdate-update/requestdate-update.component.ts");












const routes = [
    {
        path: "",
        component: _device_status_update_page__WEBPACK_IMPORTED_MODULE_6__["DeviceStatusUpdatePage"],
    },
    {
        path: "status-update",
        component: _status_update_status_update_component__WEBPACK_IMPORTED_MODULE_8__["StatusUpdateComponent"],
    },
    {
        path: "comment",
        component: _comment_comment_component__WEBPACK_IMPORTED_MODULE_9__["CommentComponent"],
    },
    {
        path: "sim-update",
        component: _sim_update_sim_update_component__WEBPACK_IMPORTED_MODULE_10__["SimUpdateComponent"],
    },
    {
        path: "requestdate-update",
        component: _requestdate_update_requestdate_update_component__WEBPACK_IMPORTED_MODULE_11__["RequestdateUpdateComponent"],
    },
];
let DeviceStatusUpdatePageModule = class DeviceStatusUpdatePageModule {
};
DeviceStatusUpdatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [
            _device_status_update_page__WEBPACK_IMPORTED_MODULE_6__["DeviceStatusUpdatePage"],
            _status_update_status_update_component__WEBPACK_IMPORTED_MODULE_8__["StatusUpdateComponent"],
            _comment_comment_component__WEBPACK_IMPORTED_MODULE_9__["CommentComponent"],
            _sim_update_sim_update_component__WEBPACK_IMPORTED_MODULE_10__["SimUpdateComponent"],
            _requestdate_update_requestdate_update_component__WEBPACK_IMPORTED_MODULE_11__["RequestdateUpdateComponent"],
        ],
    })
], DeviceStatusUpdatePageModule);



/***/ }),

/***/ "./src/app/delar-application/device-status-update/device-status-update.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/device-status-update/device-status-update.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 40%;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 25%;\n  }\n}\n.form-field {\n  margin: 0px 5px 0px;\n  border-radius: 7px;\n}\n.wrap {\n  margin-left: 10px;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.nexttab {\n  height: 30px;\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  font-size: 10px;\n  letter-spacing: 2.5px;\n  color: #000;\n  background-color: #ebebeb;\n  border: none;\n  border-right: 1px solid #b5b5b5;\n  -webkit-transition: all 0.3s ease 0s;\n  transition: all 0.3s ease 0s;\n  cursor: pointer;\n  -webkit-transform: skew(-21deg);\n          transform: skew(-21deg);\n  margin-left: 2px;\n}\n.select {\n  font-size: 10px;\n  font-weight: bold;\n  padding: 10px;\n  box-shadow: 0px -4px 7px #c0b5ff;\n  background-color: #ffffff;\n  -webkit-transform: skew(-21deg);\n          transform: skew(-21deg);\n}\n.tabrow {\n  margin-left: 15px;\n  margin-top: 7px;\n  border-bottom: 2px solid #822ef5;\n  background: #ebebeb;\n}\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n.tooltipca .tooltipcatext {\n  visibility: hidden;\n  background-color: transparent;\n  color: black;\n  white-space: nowrap;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n  margin-left: -48px;\n  margin-top: -40px;\n}\n.tooltipca:hover .tooltipcatext {\n  visibility: visible;\n}\n.fab-btnmbl {\n  --background: lavender;\n  --box-shadow: none;\n  padding: 0px;\n  margin: 0px;\n  height: 30px;\n  width: 30px;\n}\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  padding: 0px;\n  margin: 0px;\n  height: 30px;\n  width: 30px;\n  margin-top: 10px;\n  margin-left: 33px;\n}\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLXN0YXR1cy11cGRhdGUvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcZGV2aWNlLXN0YXR1cy11cGRhdGVcXGRldmljZS1zdGF0dXMtdXBkYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLXN0YXR1cy11cGRhdGUvZGV2aWNlLXN0YXR1cy11cGRhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxnQkFBQTtFQ0NGOztFREVBO0lBQ0UsVUFBQTtFQ0NGO0FBQ0Y7QURFQTtFQUNFO0lBQ0UsU0FBQTtFQ0FGOztFREdBO0lBQ0UsVUFBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNERjtBRElBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNERjtBRElBO0VBQ0UsWUFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtBQ0RGO0FESUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUVBLCtCQUFBO1VBQUEsdUJBQUE7QUNGRjtBREtBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQ0ZGO0FES0E7O0VBRUUseUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZGO0FESUE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNERjtBRElBO0VBQ0UsbUJBQUE7QUNERjtBREdBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBRjtBREdBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUY7QURHQTtFQUNFLDJCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9kZXZpY2Utc3RhdHVzLXVwZGF0ZS9kZXZpY2Utc3RhdHVzLXVwZGF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmlucHV0IHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgfVxyXG5cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgem9vbTogODAlO1xyXG4gIH1cclxuXHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogMHB4IDVweCAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4ud3JhcCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm5leHR0YWIge1xyXG4gIGhlaWdodDogMzBweDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMi41cHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2I1YjViNTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNmb3JtOiBza2V3KC0yMWRlZyk7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG5cclxuLnNlbGVjdCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IC00cHggN3B4ICNjMGI1ZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoN3B4KTtcclxuICB0cmFuc2Zvcm06IHNrZXcoLTIxZGVnKTtcclxufVxyXG5cclxuLnRhYnJvdyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogN3B4O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODIyZWY1O1xyXG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbn1cclxuXHJcbi5wZGYtd3JhcHBlcixcclxuLmV4Y2VsLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9leGNlbE5ldy5zdmdcIikgbm8tcmVwZWF0O1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG4udG9vbHRpcGNhIC50b29sdGlwY2F0ZXh0IHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tbGVmdDogLTQ4cHg7XHJcbiAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbn1cclxuXHJcbi50b29sdGlwY2E6aG92ZXIgLnRvb2x0aXBjYXRleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuLmZhYi1idG5tYmwge1xyXG4gIC0tYmFja2dyb3VuZDogbGF2ZW5kZXI7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5mYWItYnRuIHtcclxuICAtLWJhY2tncm91bmQ6IGxhdmVuZGVyO1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMzcHg7XHJcbn1cclxuXHJcbi5mYWItYnRuOmhvdmVyIHtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XHJcbn1cclxuIiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogMHB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLndyYXAge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5leHR0YWIge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAyLjVweDtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2I1YjViNTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogc2tldygtMjFkZWcpO1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG4uc2VsZWN0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IC00cHggN3B4ICNjMGI1ZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRyYW5zZm9ybTogc2tldygtMjFkZWcpO1xufVxuXG4udGFicm93IHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4MjJlZjU7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG59XG5cbi5wZGYtd3JhcHBlcixcbi5leGNlbC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2V4Y2VsTmV3LnN2Z1wiKSBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi50b29sdGlwY2EgLnRvb2x0aXBjYXRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogYmxhY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogLTQ4cHg7XG4gIG1hcmdpbi10b3A6IC00MHB4O1xufVxuXG4udG9vbHRpcGNhOmhvdmVyIC50b29sdGlwY2F0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmZhYi1idG5tYmwge1xuICAtLWJhY2tncm91bmQ6IGxhdmVuZGVyO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5mYWItYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiBsYXZlbmRlcjtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMzNweDtcbn1cblxuLmZhYi1idG46aG92ZXIge1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/device-status-update/device-status-update.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/delar-application/device-status-update/device-status-update.page.ts ***!
  \*************************************************************************************/
/*! exports provided: DeviceStatusUpdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceStatusUpdatePage", function() { return DeviceStatusUpdatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/delar-application/device-status-update/comment/comment.component.ts");
/* harmony import */ var _status_update_status_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./status-update/status-update.component */ "./src/app/delar-application/device-status-update/status-update/status-update.component.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _sim_update_sim_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sim-update/sim-update.component */ "./src/app/delar-application/device-status-update/sim-update/sim-update.component.ts");
/* harmony import */ var _requestdate_update_requestdate_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./requestdate-update/requestdate-update.component */ "./src/app/delar-application/device-status-update/requestdate-update/requestdate-update.component.ts");












let DeviceStatusUpdatePage = class DeviceStatusUpdatePage {
    constructor(platform, formBuilder, ajaxService, commonService, modalController, alertController) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.modalController = modalController;
        this.alertController = alertController;
        this.page = [];
        this.showButton = true;
        this.data = "";
        this.name = false;
        this.willDownload = false;
        this.output = "";
        this.imeiIssues = [];
        this.show = false;
        this.status = "ca";
        this.tab = 6;
        this.excellKeyValidstatusupdate = false;
        this.excellKeyValidca = false;
    }
    clear() {
        this.statusform.patchValue({
            imeino: "",
        });
        this.show = false;
    }
    cardclear() {
        this.castatusform.patchValue({
            castatusupdate: "",
        });
        this.renewalstatusupdateone.patchValue({
            renewalstatusone: "",
        });
        this.renewalstatusupdatetwo.patchValue({
            renewalstatustwo: "",
        });
        this.renewalstatusupdatethree.patchValue({
            renewalstatusthree: "",
        });
        this.renewalstatusupdatefour.patchValue({
            renewalstatusfour: "",
        });
        this.renewalstatusupdatefive.patchValue({
            renewalstatusfive: "",
        });
    }
    cardclear1() {
        this.cacommentform.patchValue({
            cacommentupdate: "",
        });
        this.renewalcommentupdateone.patchValue({
            renewalcommentone: "",
        });
        this.renewalcommentupdatetwo.patchValue({
            renewalcommenttwo: "",
        });
        this.renewalcommentupdatethree.patchValue({
            renewalcommentthree: "",
        });
        this.renewalcommentupdatefour.patchValue({
            renewalcommentfour: "",
        });
        this.renewalcommentupdatefive.patchValue({
            renewalcommentfive: "",
        });
    }
    checkstatus() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.tableData[0].sim1 == "") {
                this.commonService.showConfirm("Update Sim No before updating Card Status");
            }
            else if (this.tableData[0].sim2 == "") {
                this.commonService.showConfirm("Update Sim No before updating Card Status");
            }
            else if (this.tableData[0].cardstatus != "") {
                this.deleteMode();
            }
            else {
                this.Statusupdate();
            }
        });
    }
    deleteMode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.tableData[0].cardstatus != "") {
                const alert = yield this.alertController.create({
                    header: "Update ",
                    backdropDismiss: false,
                    message: "Do you want to update IMEI Status?",
                    buttons: [
                        {
                            text: "Cancel",
                            role: "cancel",
                            handler: (data) => {
                                this.myGrid.clearselection();
                                this.selectedRow = "";
                            },
                        },
                        {
                            text: "yes",
                            handler: (data) => {
                                this.Statusupdate();
                            },
                        },
                    ],
                });
                yield alert.present();
            }
        });
    }
    Statusupdate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.tableData[0].cardactivationdate == "") {
                const isModalOpened = yield this.modalController.getTop();
                const modal = yield this.modalController.create({
                    component: _status_update_status_update_component__WEBPACK_IMPORTED_MODULE_8__["StatusUpdateComponent"],
                    cssClass: "statusform",
                    componentProps: {
                        statusupdate: this.tableData,
                        nexttab: this.tab,
                    },
                });
                modal.onDidDismiss().then((data) => {
                    this.myGrid.clearselection();
                    this.selectedRow = "";
                    if (data.data.data == "saved success") {
                        this.data = data.data.data;
                        this.Submit();
                    }
                });
                return yield modal.present();
            }
            else if (this.tableData[0].cardstatus != "") {
                const isModalOpened = yield this.modalController.getTop();
                const modal = yield this.modalController.create({
                    component: _status_update_status_update_component__WEBPACK_IMPORTED_MODULE_8__["StatusUpdateComponent"],
                    cssClass: "statusform",
                    componentProps: {
                        statusupdate: this.tableData,
                        nexttab: this.tab,
                    },
                });
                modal.onDidDismiss().then((data) => {
                    this.myGrid.clearselection();
                    this.selectedRow = "";
                    if (data.data.data == "saved success") {
                        this.data = data.data.data;
                        this.Submit();
                    }
                });
                return yield modal.present();
            }
            else {
                this.commonService.showConfirm("Already Activated This IMEI No");
            }
        });
    }
    requestdateupdate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const isModalOpened = yield this.modalController.getTop();
            const modal = yield this.modalController.create({
                component: _requestdate_update_requestdate_update_component__WEBPACK_IMPORTED_MODULE_11__["RequestdateUpdateComponent"],
                cssClass: "validityform",
                componentProps: {
                    value: this.tableData,
                    selected: this.tab,
                },
            });
            modal.onDidDismiss().then((data) => {
                this.myGrid.clearselection();
                this.selectedRow = "";
                if (data.data.data == "Successfully") {
                    this.data = data.data.data;
                    this.Submit();
                }
            });
            return yield modal.present();
        });
    }
    Simupdate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const isModalOpened = yield this.modalController.getTop();
            const modal = yield this.modalController.create({
                component: _sim_update_sim_update_component__WEBPACK_IMPORTED_MODULE_10__["SimUpdateComponent"],
                cssClass: "statusform",
                componentProps: {
                    renewal: this.tableData,
                },
            });
            modal.onDidDismiss().then((data) => {
                this.myGrid.clearselection();
                this.selectedRow = "";
                if (data.data.data == "Changed Successfully") {
                    this.data = data.data.data;
                    this.Submit();
                }
            });
            return yield modal.present();
        });
    }
    Comment(row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const isModalOpened = yield this.modalController.getTop();
            const modal = yield this.modalController.create({
                component: _comment_comment_component__WEBPACK_IMPORTED_MODULE_7__["CommentComponent"],
                cssClass: "commentform",
                componentProps: {
                    comment: this.tableData,
                    nexttab: this.tab,
                },
            });
            modal.onDidDismiss().then((data) => {
                this.myGrid.clearselection();
                this.selectedRow = "";
                if (data.data.data == "Esim CA Comment Saved Successfully") {
                    this.data = data.data.data;
                    this.Submit();
                }
                else {
                    if (data.data.data == "Esim Renewal Comment Saved Successfully") {
                        this.data = data.data.data;
                        this.Submit();
                    }
                }
            });
            return yield modal.present();
        });
    }
    onFileChange(ev, update) {
        if (update == "status update") {
            var fileName = ev.srcElement.files[0];
            this.name = fileName.name.includes(".xlsx");
            if (this.name == true) {
                this.dataString = [];
                let workBook = null;
                let jsonData = null;
                const reader = new FileReader();
                const file = ev.srcElement.files[0];
                reader.onload = (event) => {
                    const data = reader.result;
                    workBook = xlsx__WEBPACK_IMPORTED_MODULE_9__["read"](data, { type: "binary" });
                    jsonData = workBook.SheetNames.reduce((initial, name) => {
                        const sheet = workBook.Sheets[name];
                        initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].sheet_to_json(sheet);
                        return initial;
                    }, {});
                    let json = [];
                    for (let i = 0; i < jsonData["Sheet1"].length; i++) {
                        let xlsxData = {};
                        xlsxData["imeino"] = jsonData["Sheet1"][i]["imeino"].toString();
                        xlsxData["cardactivationdate"] =
                            jsonData["Sheet1"][i]["cardactivationdate"].toString();
                        if (jsonData["Sheet1"][i]["cardenddate"] != undefined) {
                            xlsxData["cardenddate"] =
                                jsonData["Sheet1"][i]["cardenddate"].toString();
                        }
                        xlsxData["cardstatus"] =
                            jsonData["Sheet1"][i]["cardstatus"].toString();
                        xlsxData["comment"] = jsonData["Sheet1"][i]["comment"].toString();
                        json.push(xlsxData);
                    }
                    this.dataStringstatusupdate = json;
                    this.output = this.dataString.slice(0, 300).concat("...");
                };
                reader.readAsBinaryString(file);
            }
            else {
                this.commonService.showConfirm("Please insert only excel file (.xlsx)");
            }
        }
        else if (update == "comment update") {
            var fileName = ev.srcElement.files[0];
            this.name = fileName.name.includes(".xlsx");
            if (this.name == true) {
                this.dataString = [];
                let workBook = null;
                let jsonData = null;
                const reader = new FileReader();
                const file = ev.srcElement.files[0];
                reader.onload = (event) => {
                    const data = reader.result;
                    workBook = xlsx__WEBPACK_IMPORTED_MODULE_9__["read"](data, { type: "binary" });
                    jsonData = workBook.SheetNames.reduce((initial, name) => {
                        const sheet = workBook.Sheets[name];
                        initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].sheet_to_json(sheet);
                        return initial;
                    }, {});
                    let json = [];
                    for (let i = 0; i < jsonData["Sheet1"].length; i++) {
                        let xlsxData = {};
                        xlsxData["imeino"] = jsonData["Sheet1"][i]["imeino"].toString();
                        xlsxData["comment"] = jsonData["Sheet1"][i]["comment"].toString();
                        json.push(xlsxData);
                    }
                    this.dataStringstatusupdate = json;
                    this.output = this.dataString.slice(0, 300).concat("...");
                };
                reader.readAsBinaryString(file);
            }
        }
        else if (update == "ca") {
            var fileName = ev.srcElement.files[0];
            this.name = fileName.name.includes(".xlsx");
            if (this.name == true) {
                this.dataString = [];
                let workBook = null;
                let jsonData = null;
                const reader = new FileReader();
                const file = ev.srcElement.files[0];
                reader.onload = (event) => {
                    const data = reader.result;
                    workBook = xlsx__WEBPACK_IMPORTED_MODULE_9__["read"](data, { type: "binary" });
                    jsonData = workBook.SheetNames.reduce((initial, name) => {
                        const sheet = workBook.Sheets[name];
                        initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].sheet_to_json(sheet);
                        return initial;
                    }, {});
                    let json = [];
                    for (let i = 0; i < jsonData["Sheet1"].length; i++) {
                        let xlsxData = {};
                        xlsxData["imeino"] = jsonData["Sheet1"][i]["imeino"].toString();
                        xlsxData["comment"] = jsonData["Sheet1"][i]["comment"].toString();
                        json.push(xlsxData);
                    }
                    this.dataStringstatusupdate = json;
                    this.output = this.dataString.slice(0, 300).concat("...");
                };
                reader.readAsBinaryString(file);
            }
        }
        else {
            var fileName = ev.srcElement.files[0];
            this.name = fileName.name.includes(".xlsx");
            if (this.name == true) {
                this.dataString = [];
                let workBook = null;
                let jsonData = null;
                const reader = new FileReader();
                const file = ev.srcElement.files[0];
                reader.onload = (event) => {
                    const data = reader.result;
                    workBook = xlsx__WEBPACK_IMPORTED_MODULE_9__["read"](data, { type: "binary" });
                    jsonData = workBook.SheetNames.reduce((initial, name) => {
                        const sheet = workBook.Sheets[name];
                        initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].sheet_to_json(sheet);
                        return initial;
                    }, {});
                    let json = [];
                    for (let i = 0; i < jsonData["Sheet1"].length; i++) {
                        let xlsxData = {};
                        xlsxData["imeino"] = jsonData["Sheet1"][i]["imeino"].toString();
                        xlsxData["cardactivationdate"] =
                            jsonData["Sheet1"][i]["cardactivationdate"].toString();
                        if (jsonData["Sheet1"][i]["cardenddate"] != undefined) {
                            xlsxData["cardenddate"] =
                                jsonData["Sheet1"][i]["cardenddate"].toString();
                        }
                        xlsxData["cardstatus"] =
                            jsonData["Sheet1"][i]["cardstatus"].toString();
                        xlsxData["comment"] = jsonData["Sheet1"][i]["comment"].toString();
                        json.push(xlsxData);
                    }
                    this.dataStringca = json;
                    this.output = this.dataString.slice(0, 300).concat("...");
                    // this.sendToServer(dataString);
                };
                reader.readAsBinaryString(file);
            }
            else {
                this.commonService.showConfirm("Please insert only excel file (.xlsx)");
            }
        }
    }
    sendToServer(data, renewals) {
        if (data == "status update") {
            if (this.dataStringstatusupdate.length == 0) {
                this.commonService.showConfirm("Check your excell file,don't enter blank spaces");
            }
            else {
                var excellKeys = Object.keys(this.dataStringstatusupdate[0]);
                for (var i = 0; i < excellKeys.length; i++) {
                    if (excellKeys[i] == "imeino" ||
                        excellKeys[i] == "cardactivationdate" ||
                        excellKeys[i] == "cardenddate" ||
                        excellKeys[i] == "cardstatus" ||
                        excellKeys[i] == "comment") {
                        console.log("present");
                        this.excellKeyValidstatusupdate = true;
                    }
                }
                if (this.name == true && this.excellKeyValidstatusupdate == true) {
                    this.imeiIssues = [];
                    this.willDownload = true;
                    this.commonService.presentLoader();
                    const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
                        "/esim/saveEsimRenewalStatusUpdate?renewalno=" +
                        renewals +
                        "&createdby=" +
                        localStorage.getItem("userName");
                    this.ajaxService
                        .ajaxPostWithBody(url, this.dataStringstatusupdate)
                        .subscribe((res) => {
                        this.commonService.dismissLoader();
                        if (res.message == "Esim Renewal Status Saved Successfully") {
                            this.commonService.showConfirm(res.message);
                            this.cardclear();
                        }
                        else {
                            this.commonService.showConfirm(res.message);
                        }
                    });
                }
                else {
                    this.commonService.showConfirm("Please insert valid excel file (.xlsx)");
                }
            }
        }
        else if (data == "comment update") {
            if (this.dataStringstatusupdate.length == 0) {
                this.commonService.showConfirm("Check your excell file,don't enter blank spaces");
            }
            else {
                var excellKeys = Object.keys(this.dataStringstatusupdate[0]);
                for (var i = 0; i < excellKeys.length; i++) {
                    if (excellKeys[i] == "imeino" || excellKeys[i] == "comment") {
                        console.log("present");
                        this.excellKeyValidstatusupdate = true;
                    }
                }
                if (this.name == true && this.excellKeyValidstatusupdate == true) {
                    this.imeiIssues = [];
                    this.willDownload = true;
                    this.commonService.presentLoader();
                    const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
                        "/esim/saveEsimBulkRenewalComment?createdby=" +
                        localStorage.getItem("userName") +
                        "&renewalno=" +
                        renewals;
                    this.ajaxService
                        .ajaxPostWithBody(url, this.dataStringstatusupdate)
                        .subscribe((res) => {
                        this.commonService.dismissLoader();
                        if (res.message == "Esim Renewal Comment Saved Successfully") {
                            this.commonService.showConfirm(res.message);
                            this.cardclear1();
                        }
                        else {
                            this.commonService.showConfirm(res.message);
                        }
                    });
                }
                else {
                    this.commonService.showConfirm("Please insert valid excel file (.xlsx)");
                }
            }
        }
        else if (data == "ca") {
            if (this.dataStringstatusupdate.length == 0) {
                this.commonService.showConfirm("Check your excell file,don't enter blank spaces");
            }
            else {
                var excellKeys = Object.keys(this.dataStringstatusupdate[0]);
                for (var i = 0; i < excellKeys.length; i++) {
                    if (excellKeys[i] == "imeino" || excellKeys[i] == "comment") {
                        console.log("present");
                        this.excellKeyValidstatusupdate = true;
                    }
                }
                if (this.name == true && this.excellKeyValidstatusupdate == true) {
                    this.imeiIssues = [];
                    this.willDownload = true;
                    this.commonService.presentLoader();
                    const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
                        "/esim/saveEsimBulkCAComment?createdby=" +
                        localStorage.getItem("userName");
                    this.ajaxService
                        .ajaxPostWithBody(url, this.dataStringstatusupdate)
                        .subscribe((res) => {
                        this.commonService.dismissLoader();
                        if (res.message == "Esim CA Comment Saved Successfully") {
                            this.commonService.showConfirm(res.message);
                            this.cardclear1();
                        }
                        else {
                            this.commonService.showConfirm(res.message);
                        }
                    });
                }
                else {
                    this.commonService.showConfirm("Please insert valid excel file (.xlsx)");
                }
            }
        }
        else {
            if (this.dataStringca.length == 0) {
                this.commonService.showConfirm("Check your excell file,don't enter blank spaces");
            }
            else {
                var excellKeys = Object.keys(this.dataStringca[0]);
                for (var i = 0; i < excellKeys.length; i++) {
                    if (excellKeys[i] == "imeino" ||
                        excellKeys[i] == "cardactivationdate" ||
                        excellKeys[i] == "cardenddate" ||
                        excellKeys[i] == "cardstatus" ||
                        excellKeys[i] == "comment") {
                        console.log("present");
                        this.excellKeyValidca = true;
                    }
                }
                if (this.name == true && this.excellKeyValidca == true) {
                    this.imeiIssues = [];
                    this.willDownload = true;
                    this.commonService.presentLoader();
                    const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
                        "/esim/saveEsimCAStatusUpdate?createdby=" +
                        localStorage.getItem("userName");
                    this.ajaxService
                        .ajaxPostWithBody(url, this.dataStringca)
                        .subscribe((res) => {
                        this.commonService.dismissLoader();
                        if (res.message == "Esim CA Status Saved Successfully") {
                            this.commonService.showConfirm(res.message);
                            this.cardclear();
                        }
                        else {
                            this.commonService.showConfirm(res.message);
                        }
                    });
                }
                else {
                    this.commonService.presentToast("Please insert valid excel file (.xlsx)");
                }
            }
        }
    }
    Submit() {
        if (this.tab == 6) {
            this.show = false;
            this.commonService.presentLoader();
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
                "/esim/getDealerCARequest?imeino=" +
                this.statusform.value.imeino;
            this.ajaxService.ajaxGet(url).subscribe((res) => {
                if (res[0].message == "") {
                    this.tableData = res;
                    this.commonService.dismissLoader();
                    this.show = true;
                    this.getdatas(this.tab);
                    localStorage.setItem("tab", "1");
                    console.log(this.myGrid);
                }
                else {
                    this.show = false;
                    this.commonService.dismissLoader();
                    this.commonService.showConfirm(res[0].message);
                }
            });
        }
        else {
            this.show = false;
            this.commonService.presentLoader();
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
                "/esim/getDealerRenewalRequest?imeino=" +
                this.statusform.value.imeino +
                "&renewalno=" +
                this.tab;
            this.ajaxService.ajaxGet(url).subscribe((res) => {
                if (res[0].message == "") {
                    this.tableData = res;
                    this.commonService.dismissLoader();
                    this.show = true;
                    this.getdatas(this.tab);
                    localStorage.setItem("tab", "2");
                    console.log(this.myGrid);
                }
                else {
                    this.show = false;
                    this.commonService.dismissLoader();
                    this.commonService.showConfirm(res[0].message);
                }
            });
        }
    }
    getdatas(d) {
        this.page = [];
        if (d == undefined) {
            this.tab = 1;
            localStorage.setItem("tab", "1");
        }
        else {
            this.tab = d;
            localStorage.setItem("tab", "2");
        }
        this.renderer = (row, column, value) => {
            if (value == "" || null || undefined || value == ",") {
                return "---";
            }
            else {
                return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                    value +
                    "</span>");
            }
        };
        this.source = { localdata: this.tableData };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.page = ["100", "200", "500", "1000"];
        this.columns = [
            {
                text: "VLTD No",
                datafield: "vltdsno",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 130,
                editable: true,
            },
            {
                text: "ICCID No 1",
                datafield: "iccidno1",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 140,
                editable: true,
            },
            {
                text: "ICCID No 2",
                datafield: "iccidno2",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 140,
                editable: true,
            },
            {
                text: "IMEI No",
                datafield: "imei",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 110,
                editable: true,
            },
            {
                text: "SIM 1",
                datafield: "sim1",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 100,
                editable: true,
            },
            {
                text: "SIM 2",
                datafield: "sim2",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 100,
                editable: true,
            },
            {
                text: "Slot No",
                datafield: "slotno",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 100,
            },
            {
                text: "Validity Requested",
                datafield: "validityperiod",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 155,
            },
            {
                text: "Card Activated Date",
                datafield: "cardactivationdate",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 150,
                editable: true,
            },
            {
                text: "Card End Date",
                datafield: "cardenddate",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 100,
                editable: true,
            },
            {
                text: "Card Status",
                datafield: "cardstatus",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 100,
                editable: true,
            },
            {
                text: "Comment",
                datafield: "purcomment",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 130,
                editable: true,
            },
        ];
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row.bounddata;
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.statusform = this.formBuilder.group({
            imeino: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.castatusform = this.formBuilder.group({
            castatusupdate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.cacommentform = this.formBuilder.group({
            cacommentupdate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.renewalcommentupdateone = this.formBuilder.group({
            renewalcommentone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.renewalcommentupdatetwo = this.formBuilder.group({
            renewalcommenttwo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.renewalcommentupdatethree = this.formBuilder.group({
            renewalcommentthree: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.renewalcommentupdatefour = this.formBuilder.group({
            renewalcommentfour: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.renewalcommentupdatefive = this.formBuilder.group({
            renewalcommentfive: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.renewalstatusupdateone = this.formBuilder.group({
            renewalstatusone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.renewalstatusupdatetwo = this.formBuilder.group({
            renewalstatustwo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.renewalstatusupdatethree = this.formBuilder.group({
            renewalstatusthree: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.renewalstatusupdatefour = this.formBuilder.group({
            renewalstatusfour: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.renewalstatusupdatefive = this.formBuilder.group({
            renewalstatusfive: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    ionViewWillEnter() { }
};
DeviceStatusUpdatePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DeviceStatusUpdatePage.prototype, "myGrid", void 0);
DeviceStatusUpdatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-device-status-update",
        template: __webpack_require__(/*! raw-loader!./device-status-update.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-status-update/device-status-update.page.html"),
        styles: [__webpack_require__(/*! ./device-status-update.page.scss */ "./src/app/delar-application/device-status-update/device-status-update.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], DeviceStatusUpdatePage);



/***/ }),

/***/ "./src/app/delar-application/device-status-update/requestdate-update/requestdate-update.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/delar-application/device-status-update/requestdate-update/requestdate-update.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  background-color: #7c68f8;\n}\n\n.label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 25px;\n}\n\n.comment {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  height: 169px;\n  width: 100%;\n  padding: 15px;\n}\n\n.diable-style {\n  background: white;\n  line-height: 18px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.total-data {\n  margin-top: 2%;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #ffebcd;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.file-input-container input[type=file] {\n  display: none;\n}\n\n.file {\n  margin-left: 8%;\n  border: 1px solid #3d6cec;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.documents {\n  margin: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLXN0YXR1cy11cGRhdGUvcmVxdWVzdGRhdGUtdXBkYXRlL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGRldmljZS1zdGF0dXMtdXBkYXRlXFxyZXF1ZXN0ZGF0ZS11cGRhdGVcXHJlcXVlc3RkYXRlLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLXN0YXR1cy11cGRhdGUvcmVxdWVzdGRhdGUtdXBkYXRlL3JlcXVlc3RkYXRlLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDRUY7O0FEQ0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FDRUY7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ0VGOztBREVFO0VBQ0UsYUFBQTtBQ0NKOztBREdBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FDQUY7O0FERUE7RUFDRTtJQUNFLFNBQUE7RUNDRjs7RURFQTtJQUNFLFVBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9kZXZpY2Utc3RhdHVzLXVwZGF0ZS9yZXF1ZXN0ZGF0ZS11cGRhdGUvcmVxdWVzdGRhdGUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M2OGY4O1xyXG59XHJcblxyXG4ubGFiZWwtc3R5bGUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxufVxyXG4uY29tbWVudCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIGhlaWdodDogMTY5cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmRpYWJsZS1zdHlsZSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXN0eWxlIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRvdGFsLWRhdGEge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG4uY29sLWNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuI2FkZC1pY29uIHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmViY2Q7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG59XHJcblxyXG4uc2VsZWN0YWJsZS1pbnB1dCB7XHJcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5maWxlLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5maWxlIHtcclxuICBtYXJnaW4tbGVmdDogOCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYxLCAxMDgsIDIzNik7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIHpvb206IDgwJTtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IC01cHggNXB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuLmRvY3VtZW50cyB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iLCIuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M2OGY4O1xufVxuXG4ubGFiZWwtc3R5bGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuLmNvbW1lbnQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBoZWlnaHQ6IDE2OXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmRpYWJsZS1zdHlsZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmNvbnRlbnQtc3R5bGUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRvdGFsLWRhdGEge1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLmNvbC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbiNhZGQtaWNvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZWJjZDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5maWxlLWlucHV0LWNvbnRhaW5lciBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZpbGUge1xuICBtYXJnaW4tbGVmdDogOCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZDZjZWM7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmRvY3VtZW50cyB7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/device-status-update/requestdate-update/requestdate-update.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/delar-application/device-status-update/requestdate-update/requestdate-update.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: RequestdateUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestdateUpdateComponent", function() { return RequestdateUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let RequestdateUpdateComponent = class RequestdateUpdateComponent {
    constructor(platform, formBuilder, modalController, ajaxService, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.today = new Date();
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    createForm() {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        this.requestForm = this.formBuilder.group({
            requestdate: [today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    submitBtn() {
        if (this.selected == 6) {
            var data;
            data = {
                imei: this.value[0].imei,
                requestdate: this.requestForm.value.requestdate,
                createdby: localStorage.getItem("userName"),
            };
            this.commonService.presentLoader();
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/esim/saveEsimCARequestDate";
            this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
                this.commonService.dismissLoader();
                if (res.message == "Esim CA Requested Date Saved Successfully") {
                    this.commonService.showConfirm(res.message);
                    this.modalController.dismiss({
                        data: "Successfully",
                    });
                }
                else {
                    this.commonService.showConfirm(res.message);
                }
            });
        }
        else {
            var data;
            data = {
                imei: this.value[0].imei,
                renewalno: this.selected,
                requestdate: this.requestForm.value.requestdate,
                createdby: localStorage.getItem("userName"),
            };
            this.commonService.presentLoader();
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/esim/saveEsimRenewalRequestDate";
            this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
                this.commonService.dismissLoader();
                if (res.message == "Esim Renewal Requested Date Saved Successfully") {
                    this.commonService.showConfirm(res.message);
                    this.modalController.dismiss({
                        data: "Successfully",
                    });
                }
                else {
                    this.commonService.showConfirm(res.message);
                }
            });
        }
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.maxDate = this.today.getFullYear() + "-";
        this.maxDate +=
            (this.today.getMonth() + 1 < 10
                ? "0" + (this.today.getMonth() + 1).toString()
                : (this.today.getMonth() + 1).toString()) + "-";
        this.maxDate +=
            this.today.getDate() < 10
                ? "0" + this.today.getDate().toString()
                : this.today.getDate().toString();
        this.createForm();
    }
};
RequestdateUpdateComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RequestdateUpdateComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RequestdateUpdateComponent.prototype, "selected", void 0);
RequestdateUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-requestdate-update",
        template: __webpack_require__(/*! raw-loader!./requestdate-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-status-update/requestdate-update/requestdate-update.component.html"),
        styles: [__webpack_require__(/*! ./requestdate-update.component.scss */ "./src/app/delar-application/device-status-update/requestdate-update/requestdate-update.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], RequestdateUpdateComponent);



/***/ }),

/***/ "./src/app/delar-application/device-status-update/sim-update/sim-update.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/delar-application/device-status-update/sim-update/sim-update.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n.form-field {\n  margin: -5px;\n  border-radius: 7px;\n}\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.col-content {\n  text-align: center;\n  align-self: center;\n  font-size: 18px;\n}\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLXN0YXR1cy11cGRhdGUvc2ltLXVwZGF0ZS9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxkZXZpY2Utc3RhdHVzLXVwZGF0ZVxcc2ltLXVwZGF0ZVxcc2ltLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLXN0YXR1cy11cGRhdGUvc2ltLXVwZGF0ZS9zaW0tdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUNDSjtBQUNGO0FERUU7RUFDRTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQ0FKO0FBQ0Y7QURHRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUU7RUFDRTtJQUNFLFNBQUE7RUNESjs7RURJRTtJQUNFLFVBQUE7RUNESjtBQUNGO0FESUU7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FDRko7QURLRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRko7QURLRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNGSjtBREtFO0VBQ0U7SUFDRSxnQkFBQTtFQ0ZKOztFREtFO0lBQ0UsVUFBQTtFQ0ZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9kZXZpY2Utc3RhdHVzLXVwZGF0ZS9zaW0tdXBkYXRlL3NpbS11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDozMjBweCkgYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAgIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDoxMDI0cHgpIHtcclxuICAgIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbjogOHB4IDFweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luOiAtNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuZm9ybS1maWVsZCB7XHJcbiAgICAgIHpvb206IDgwJTtcclxuICAgIH1cclxuICBcclxuICAgICNzdWJtaXRidG4ge1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY29udGVudC1zdHlsZSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNvbC1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgICBtYXJnaW46IDdweDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmlucHV0IHtcclxuICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIH1cclxuICBcclxuICAgICNzdWJtaXRidG4ge1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAiLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTVweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uY29udGVudC1zdHlsZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29sLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIG1hcmdpbjogN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/device-status-update/sim-update/sim-update.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/delar-application/device-status-update/sim-update/sim-update.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SimUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimUpdateComponent", function() { return SimUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let SimUpdateComponent = class SimUpdateComponent {
    constructor(platform, formBuilder, modalController, ajaxService, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
    }
    createForm() {
        this.simupdate = this.formBuilder.group({
            vltdsno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            imeino: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sim1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sim2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    submitBtn() {
        // //mvt.apmkingstrack.com/fleettracking/esim/updatesimno?vltdsno=APM1K2I012200012317&imei=872345617823456&renewalno=1&oldsimno1=915752184840824&olasimno2=915754202253241&newsimno1=915752184840824&newsimno2=915754202253241changedby=apm-sa
        // https:
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/esim/updatesimno?vltdsno=" +
            this.simupdate.value.vltdsno +
            "&imei=" +
            this.renewal[0].imei +
            "&renewalno=" +
            this.renewal[0].renewalno +
            "&oldsimno1=" +
            this.renewal[0].slotno +
            "&oldsimno2=" +
            this.renewal[0].totalbox +
            "&newsimno1=" +
            this.simupdate.value.sim1 +
            "&newsimno2=" +
            this.simupdate.value.sim2 +
            "&changedby=" +
            localStorage.getItem("userName");
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            if (res.message == "Changed Successfully") {
                this.commonService.showConfirm(res.message);
                this.modalController.dismiss({
                    data: "Changed Successfully",
                });
            }
            else {
                this.commonService.showConfirm(res.message);
            }
        });
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    ngOnInit() {
        this.createForm();
        if (Object.keys(this.renewal[0]).length != 0) {
            console.log(this.renewal[0].vltdsno, this.renewal[0].sim1, this.renewal[0].sim2);
            this.simupdate.patchValue({
                vltdsno: this.renewal[0].vltdsno,
                imeino: this.renewal[0].imei,
                sim1: this.renewal[0].slotno,
                sim2: this.renewal[0].totalbox,
            });
        }
    }
};
SimUpdateComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SimUpdateComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SimUpdateComponent.prototype, "renewal", void 0);
SimUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sim-update",
        template: __webpack_require__(/*! raw-loader!./sim-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-status-update/sim-update/sim-update.component.html"),
        styles: [__webpack_require__(/*! ./sim-update.component.scss */ "./src/app/delar-application/device-status-update/sim-update/sim-update.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], SimUpdateComponent);



/***/ }),

/***/ "./src/app/delar-application/device-status-update/status-update/status-update.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/delar-application/device-status-update/status-update/status-update.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  background-color: #7c68f8;\n}\n\n.label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 25px;\n}\n\n.comment {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  height: 169px;\n  width: 100%;\n  padding: 15px;\n}\n\n.diable-style {\n  background: white;\n  line-height: 18px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.total-data {\n  margin-top: 2%;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #ffebcd;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.file-input-container input[type=file] {\n  display: none;\n}\n\n.file {\n  margin-left: 8%;\n  border: 1px solid #3d6cec;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.documents {\n  margin: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLXN0YXR1cy11cGRhdGUvc3RhdHVzLXVwZGF0ZS9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxkZXZpY2Utc3RhdHVzLXVwZGF0ZVxcc3RhdHVzLXVwZGF0ZVxcc3RhdHVzLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGV2aWNlLXN0YXR1cy11cGRhdGUvc3RhdHVzLXVwZGF0ZS9zdGF0dXMtdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNFRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURDQTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNFRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQ0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDRUY7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FER0E7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURFQTtFQUNFO0lBQ0UsU0FBQTtFQ0NGOztFREVBO0lBQ0UsVUFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FERUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2RldmljZS1zdGF0dXMtdXBkYXRlL3N0YXR1cy11cGRhdGUvc3RhdHVzLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjNjhmODtcclxufVxyXG5cclxuLmxhYmVsLXN0eWxlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuLmNvbW1lbnQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBoZWlnaHQ6IDE2OXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5kaWFibGUtc3R5bGUge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4uY29udGVudC1zdHlsZSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b3RhbC1kYXRhIHtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxuLmNvbC1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbiNhZGQtaWNvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZlYmNkO1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxufVxyXG5cclxuLnNlbGVjdGFibGUtaW5wdXQge1xyXG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uZmlsZS1pbnB1dC1jb250YWluZXIge1xyXG4gIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uZmlsZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDglO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MSwgMTA4LCAyMzYpO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZm9ybS1maWVsZCB7XHJcbiAgICB6b29tOiA4MCU7XHJcbiAgfVxyXG5cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcbi5kb2N1bWVudHMge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjNjhmODtcbn1cblxuLmxhYmVsLXN0eWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG5cbi5jb21tZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgaGVpZ2h0OiAxNjlweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5kaWFibGUtc3R5bGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5jb250ZW50LXN0eWxlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50b3RhbC1kYXRhIHtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5jb2wtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jYWRkLWljb24ge1xuICAtLWJhY2tncm91bmQ6ICNmZmViY2Q7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG59XG5cbi5zZWxlY3RhYmxlLWlucHV0IHtcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uZmlsZS1pbnB1dC1jb250YWluZXIgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5maWxlIHtcbiAgbWFyZ2luLWxlZnQ6IDglO1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2Q2Y2VjO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5kb2N1bWVudHMge1xuICBtYXJnaW46IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/device-status-update/status-update/status-update.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/delar-application/device-status-update/status-update/status-update.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: StatusUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusUpdateComponent", function() { return StatusUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");







let StatusUpdateComponent = class StatusUpdateComponent {
    constructor(platform, formBuilder, modalController, ajaxService, alertController, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.alertController = alertController;
        this.commonService = commonService;
        this.show = true;
        this.today = new Date();
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    createForm() {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        var endDate = now.getFullYear() + 1 + "-" + month + "-" + day;
        this.AddCaStatus = this.formBuilder.group({
            cardactivationdate: [today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cardenddate: [endDate],
            cardstatus: ["Active", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            comment: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    Submit() {
        if (this.nexttab == 6) {
            var data = {
                iccidno: this.statusupdate[0].iccidno1,
                cardactivationdate: this.AddCaStatus.value.cardactivationdate,
                cardenddate: "",
                cardstatus: this.AddCaStatus.value.cardstatus,
                comment: this.AddCaStatus.value.comment,
                createdby: this.statusupdate[0].createdby,
            };
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/esim/saveEsimCAStatus";
            this.ajaxService
                .ajaxPostWithBody(url, JSON.stringify(data))
                .subscribe((res) => {
                if (res.message == "Esim CA Status Saved Successfully") {
                    this.commonService.showConfirm(res.message);
                    this.modalController.dismiss({ data: "saved success" });
                }
                else {
                    this.commonService.showConfirm(res.message);
                }
            });
        }
        else {
            let data = {
                renewalno: this.statusupdate[0].renewalno.toString(),
                iccidno: this.statusupdate[0].iccidno1,
                cardactivationdate: this.AddCaStatus.value.cardactivationdate,
                cardenddate: "",
                cardstatus: this.AddCaStatus.value.cardstatus,
                comment: this.AddCaStatus.value.comment,
                createdby: this.statusupdate[0].createdby,
            };
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/esim/saveEsimRenewalStatus";
            this.ajaxService
                .ajaxPostWithBody(url, JSON.stringify(data))
                .subscribe((res) => {
                if (res.message == "Esim Renewal Status Saved Successfully") {
                    this.commonService.showConfirm(res.message);
                    this.modalController.dismiss({ data: "saved success" });
                }
                else {
                    this.commonService.showConfirm(res.message);
                }
            });
        }
    }
    setValue() {
        if (this.statusupdate[0].cardactivationdate != "") {
            this.show = true;
            this.AddCaStatus.patchValue({
                cardactivationdate: this.statusupdate[0].cardactivationdate,
            });
        }
        else {
            this.show = false;
            cardactivationdate: this.today;
        }
    }
    ngOnInit() {
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
        const today = new Date();
        const sevenDaysAgo = new Date(today);
        this.tabData = localStorage.getItem("tab");
        if (this.tabData == "1") {
            console.log(this.tabData);
            sevenDaysAgo.setDate(today.getDate() - 7);
        }
        else {
            console.log(this.tabData);
            sevenDaysAgo.setDate(today.getDate() - 30);
        }
        this.minDate = sevenDaysAgo.getFullYear() + "-";
        this.minDate +=
            (sevenDaysAgo.getMonth() + 1 < 10
                ? "0" + (sevenDaysAgo.getMonth() + 1).toString()
                : (sevenDaysAgo.getMonth() + 1).toString()) + "-";
        this.minDate +=
            sevenDaysAgo.getDate() < 10
                ? "0" + sevenDaysAgo.getDate().toString()
                : sevenDaysAgo.getDate().toString();
        if (Object.keys(this.statusupdate[0]).length != 0) {
            console.log(this.statusupdate[0].cardactivationdate, this.statusupdate[0].cardenddate, this.statusupdate[0].cardstatus);
            this.AddCaStatus.patchValue({
                cardenddate: this.statusupdate[0].cardenddate,
                comment: this.statusupdate[0].purcomment,
            });
            this.setValue();
        }
    }
};
StatusUpdateComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StatusUpdateComponent.prototype, "statusupdate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StatusUpdateComponent.prototype, "nexttab", void 0);
StatusUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-status-update",
        template: __webpack_require__(/*! raw-loader!./status-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/device-status-update/status-update/status-update.component.html"),
        styles: [__webpack_require__(/*! ./status-update.component.scss */ "./src/app/delar-application/device-status-update/status-update/status-update.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
], StatusUpdateComponent);



/***/ })

}]);
//# sourceMappingURL=device-status-update-device-status-update-module-es2015.js.map