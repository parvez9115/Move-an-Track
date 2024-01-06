(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ticket-ticket-conversation-ticket-conversation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ticket/image-conversation/image-conversation.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ticket/image-conversation/image-conversation.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ion-row  class=\"img_wrapper\">\r\n    <ion-col  size=\"12\" >\r\n      <ion-img src=\"imageData\"   \r\n       (click)=\"getBack()\"></ion-img>\r\n    </ion-col>\r\n  </ion-row> \r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ticket/ticket-conversation/ticket-conversation.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ticket/ticket-conversation/ticket-conversation.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-row *ngIf=\"messages\" class=\"main-wrapper\" >\r\n  <div class=\"ticket-id\" *ngIf=\"customerId\">Ticket ID : {{id}}</div>\r\n   <ion-col  *ngFor=\"let items of conversation;let i=index;\" size=\"12\" style=\"margin:1px 0px\">\r\n           <ion-row   *ngIf=\"items.body.length == items.body_text.length+11\" \r\n           [ngClass]=\"items.body_text ==  '.' ? 'imgBlock':'from-wrapper' \">\r\n             <ion-col size=12 class=\"wrapper-container\" >\r\n                {{items.body_text}}\r\n                 </ion-col>\r\n           </ion-row>\r\n       <ion-row  style=\"clear: both;overflow: hidden;\r\n           white-space: nowrap;\" *ngIf='items.attachments[0] != undefined'>   \r\n             <ion-col size=12 >\r\n              <img src= {{items.attachments[0].attachment_url}}  onerror=\"this.style.display='none'\"  \r\n              [ngClass]=\"items.attachments[0]['content_type'] !== 'application/octet-stream'   ? 'dataBlock':'imgBlock'\" class=\"thum_nail\"  (click)=\"enlargeImage(items.attachments[0].attachment_url)\"/>\r\n             </ion-col>\r\n             <ion-col size=\"12\" class=\"date_label\" [ngClass]=\"items.attachments[0]['content_type'] !== 'application/octet-stream'   ? 'dataBlock':'imgBlock'\"   >\r\n              <ion-row >\r\n                <ion-col  class=\"date_block\">{{ items.created_at | date:'medium' }}</ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n                </ion-row>\r\n                <ion-row *ngIf='items.attachments[0] != undefined ' >\r\n                  <ion-col size=12>\r\n                    <audio controls=\"\"   style=\"float:right;outline:none;\" [ngClass]=\"items.attachments[0]['content_type'] === 'application/octet-stream'   ? 'dataBlock':'imgBlock'\" >\r\n                      <source [src]=\"items.attachments[0].attachment_url\"     type=\"audio/wav\" >\r\n                        </audio>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"date_label\" *ngIf='items.attachments[0] != undefined ' [ngClass]=\"items.attachments[0]['content_type'] === 'application/octet-stream'   ? 'dataBlock':'imgBlock'\">\r\n                    <ion-row>\r\n                      <ion-col class=\"date_block\">{{ items.created_at | date:'medium' }}</ion-col>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                 </ion-row>\r\n          <div  style=\"margin: 0;\" *ngIf=\"items.body.length != items.body_text.length+11\" \r\n           [ngClass]=\"items.body_text == ''? 'display-wrapper':'to-wrapper'\">\r\n             <div class=\"wrapper-container\">\r\n               {{items.body_text}}\r\n          </div>\r\n       </div> \r\n       \r\n      \r\n     </ion-col>\r\n     <ion-row id=\"0\">\r\n     <ion-col  size=\"6\" size-sm=\"10\" size-lg=\"11\" size-md=\"11\">  \r\n      \r\n    <ion-item class=\"tickets-item\">\r\n         <ion-input type=\"text\" placeholder=\"Write your queries\" style=\"--padding-top:0;\r\n             font-size: 13px;\" [(ngModel)]='image'    (keyup)=\"enableSendbtn($event)\" ></ion-input>\r\n  \r\n        <ion-icon  id=\"yourBtn\"  (click)=\"getFile()\" name=\"attach\" class=\"attach-iconc\" (click)=\"enableSendbtn($event)\"></ion-icon>\r\n        <div style='height: 0px;width: 0px; overflow:hidden;outline: none;'>\r\n          <input id=\"upfile\" type=\"file\" value=\"upload\" [(ngModel)]='image'  ng2FileSelect  [uploader]=\"uploader\" (change)=\"subject($event)\" multiple  />\r\n        </div>\r\n       \r\n      </ion-item>\r\n      \r\n         </ion-col>\r\n        \r\n             <ion-col size-sm=\"2\" size-lg=\"1\" size-md=\"1\" class=\"send-col\">\r\n         <a >\r\n          <ion-icon name=\"mic\" class=\"send-icon\"  *ngIf=\"!recording && !sendbtn\"  (click)=\"initiateRecording()\" ></ion-icon> \r\n           <ion-icon name=\"mic-off\" class=\"send-icon\" *ngIf=\"recording && !sendbtn\"  (click)=\"stopRecording()\" ></ion-icon>\r\n          <ion-icon name=\"send\"   class=\"send-icon\" *ngIf=\"sendbtn\" (click)=\"sendReplyMsg();\"  ></ion-icon> \r\n          </a>\r\n          \r\n           </ion-col>\r\n         </ion-row> \r\n    </ion-row>\r\n \r\n\r\n"

/***/ }),

/***/ "./src/app/ticket/image-conversation/image-conversation.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/ticket/image-conversation/image-conversation.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img_wrapper {\n  margin: 24px 0px 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlja2V0L2ltYWdlLWNvbnZlcnNhdGlvbi9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXHRpY2tldFxcaW1hZ2UtY29udmVyc2F0aW9uXFxpbWFnZS1jb252ZXJzYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RpY2tldC9pbWFnZS1jb252ZXJzYXRpb24vaW1hZ2UtY29udmVyc2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RpY2tldC9pbWFnZS1jb252ZXJzYXRpb24vaW1hZ2UtY29udmVyc2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ193cmFwcGVye1xyXG4gICAgbWFyZ2luOiAyNHB4IDBweCAwcHggMHB4O1xyXG59IiwiLmltZ193cmFwcGVyIHtcbiAgbWFyZ2luOiAyNHB4IDBweCAwcHggMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/ticket/image-conversation/image-conversation.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ticket/image-conversation/image-conversation.component.ts ***!
  \***************************************************************************/
/*! exports provided: ImageConversationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageConversationComponent", function() { return ImageConversationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ImageConversationComponent = /** @class */ (function () {
    function ImageConversationComponent(modalController) {
        this.modalController = modalController;
    }
    ImageConversationComponent.prototype.getBack = function () {
        this.modalController.dismiss();
    };
    ImageConversationComponent.prototype.ngOnInit = function () {
        this.imageData = this.image;
        console.log(this.imageData, 'iam image popup');
    };
    ImageConversationComponent.prototype.ngOnChanges = function () {
        this.imageData = this.image;
        console.log(this.imageData, 'iam image popup');
    };
    ImageConversationComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImageConversationComponent.prototype, "image", void 0);
    ImageConversationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-conversation',
            template: __webpack_require__(/*! raw-loader!./image-conversation.component.html */ "./node_modules/raw-loader/index.js!./src/app/ticket/image-conversation/image-conversation.component.html"),
            styles: [__webpack_require__(/*! ./image-conversation.component.scss */ "./src/app/ticket/image-conversation/image-conversation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ImageConversationComponent);
    return ImageConversationComponent;
}());



/***/ }),

/***/ "./src/app/ticket/ticket-conversation/ticket-conversation.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ticket/ticket-conversation/ticket-conversation.module.ts ***!
  \**************************************************************************/
/*! exports provided: TicketConversationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketConversationPageModule", function() { return TicketConversationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ticket_conversation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticket-conversation.page */ "./src/app/ticket/ticket-conversation/ticket-conversation.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");









var routes = [
    {
        path: '',
        component: _ticket_conversation_page__WEBPACK_IMPORTED_MODULE_6__["TicketConversationPage"]
    }
];
var TicketConversationPageModule = /** @class */ (function () {
    function TicketConversationPageModule() {
    }
    TicketConversationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ticket_conversation_page__WEBPACK_IMPORTED_MODULE_6__["TicketConversationPage"]]
        })
    ], TicketConversationPageModule);
    return TicketConversationPageModule;
}());



/***/ }),

/***/ "./src/app/ticket/ticket-conversation/ticket-conversation.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/ticket/ticket-conversation/ticket-conversation.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0px;\n  padding: 1px;\n}\n* ion-card {\n  background: white;\n  cursor: pointer;\n}\n.mobileCard {\n  display: none;\n}\n.getConversationFail {\n  display: inline-block;\n}\n.border-pending {\n  border-left: 3px solid orange;\n}\n.border-closed {\n  border-left: 3px solid #008060;\n}\n.border-open {\n  border-left: 3px solid #0084ff;\n}\n.main-wrapper {\n  background: url('light_bg.png') repeat center center/cover;\n  height: 82vh;\n  overflow-y: scroll;\n}\n.to-wrapper {\n  background: url('leftSide_bg.jpg') no-repeat center center/cover;\n  height: auto;\n  padding: 5px;\n  border-radius: 5px;\n  float: left;\n  margin: 0;\n}\n.from-wrapper {\n  background: url('rightSide_bg.jpg') no-repeat center center/cover;\n  height: auto;\n  padding: 5px;\n  border-radius: 5px;\n  margin: 0px;\n  float: right;\n}\n.date_label {\n  float: right;\n  font-size: 10px;\n  text-align: right;\n  font-weight: bold;\n}\n.date_block {\n  color: #595959;\n}\n.dataBlock {\n  display: block !important;\n}\n.imgBlock {\n  display: none !important;\n}\n.ticket-title {\n  font-size: 18px;\n}\n.display-wrapper {\n  display: none;\n}\n.ticket-id {\n  border: 1px solid #e9e8e8;\n  border-radius: 0px 0px 5px 5px;\n  background: #9C27B0;\n  font-size: 15px;\n  height: 25px;\n  padding: 2px 8px;\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 1;\n  top: -5px;\n  margin: -5px auto 0;\n  color: white;\n}\n.tickets-item {\n  height: 40px;\n  border: 1px solid #e2e0e0;\n  border-radius: 20px;\n  position: fixed;\n  bottom: 6px;\n}\n.send-col {\n  width: 15%;\n  position: fixed;\n  bottom: 0px;\n  right: 0;\n}\n.send-icon {\n  font-size: 20px;\n  color: white;\n  background: #0ba08c;\n  border-radius: 16px;\n  padding: 7px;\n}\n.wrapper-container {\n  font-size: 12px;\n  padding: 0px 25px;\n}\n.contact-panal {\n  background-color: #f8f8fb;\n  height: 90vh;\n  overflow-y: scroll;\n}\n.contact-panal::-webkit-scrollbar {\n  width: 4px;\n}\n.contact-panal::-webkit-scrollbar-track {\n  background: #f6f6f6;\n}\n.contact-panal::-webkit-scrollbar-thumb {\n  background: #b6b5b5;\n}\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .second-col {\n    display: block;\n  }\n\n  .tickets-item {\n    width: 80%;\n    left: 11px;\n  }\n\n  .container {\n    height: 89vh;\n    overflow-y: hidden;\n  }\n\n  ion-card {\n    margin: 5px 10px;\n    padding-left: 7px;\n  }\n}\n@media only screen and (min-width: 767px) {\n  .main-wrapper::-webkit-scrollbar {\n    width: 10px;\n  }\n\n  .main-wrapper::-webkit-scrollbar-track {\n    background: #f6f6f6;\n  }\n\n  .main-wrapper::-webkit-scrollbar-thumb {\n    background: #afadad;\n  }\n\n  .main-wrapper::-webkit-scrollbar-thumb:hover {\n    background: #b6b5b5;\n  }\n}\n@media only screen and (min-width: 767px) and (max-width: 1022px) {\n  .tickets-item {\n    width: 350px;\n    position: fixed;\n    bottom: 7px;\n    right: 8%;\n  }\n\n  ion-card {\n    margin: 5px;\n    padding-left: 7px;\n  }\n}\n@media only screen and (min-width: 1023px) {\n  .tickets-item {\n    width: 500px;\n    position: fixed;\n    bottom: 6px;\n    right: 9%;\n  }\n\n  ion-card {\n    margin: 5px 0px;\n    padding-left: 7px;\n  }\n}\n@media only screen and (min-width: 1350px) {\n  .tickets-item {\n    right: 15%;\n  }\n\n  .container {\n    height: 91vh;\n    overflow-y: hidden;\n  }\n\n  ion-card {\n    margin: 5px 10px;\n    padding-left: 7px;\n  }\n\n  .send-icon {\n    position: relative;\n    right: 68%;\n    bottom: 5px;\n  }\n}\n.thum_nail {\n  float: right;\n  zoom: 10%;\n  border: 20px solid #d7fb9f;\n}\n.img_wrapper {\n  margin: 24px 0px 0px 0px;\n}\n#yourBtn {\n  position: relative;\n  font-size: 30px;\n  bottom: 5px;\n  padding: 0px 10px;\n  -webkit-transform: rotate(20deg);\n          transform: rotate(20deg);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlja2V0L3RpY2tldC1jb252ZXJzYXRpb24vRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFx0aWNrZXRcXHRpY2tldC1jb252ZXJzYXRpb25cXHRpY2tldC1jb252ZXJzYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC90aWNrZXQvdGlja2V0LWNvbnZlcnNhdGlvbi90aWNrZXQtY29udmVyc2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7QURBSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0VSO0FERUE7RUFDSSxhQUFBO0FDQ0o7QURDQTtFQUNFLHFCQUFBO0FDRUY7QURDQTtFQUNJLDZCQUFBO0FDRUo7QURDQTtFQUNJLDhCQUFBO0FDRUo7QURDQTtFQUNJLDhCQUFBO0FDRUo7QURDQTtFQUNJLDBEQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDQTtFQUNJLGdFQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDRUo7QURDQTtFQUNJLGlFQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRUo7QURBRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0dKO0FEREU7RUFDRSxjQUFBO0FDSUo7QUREQTtFQUNJLHlCQUFBO0FDSUo7QURGQTtFQUNJLHdCQUFBO0FDS0o7QURIQTtFQUNJLGVBQUE7QUNNSjtBREpBO0VBQ0ksYUFBQTtBQ09KO0FETEE7RUFDSSx5QkFBQTtFQUNBLDhCQUFBO0VBRUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0FDTUo7QURKQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNPSjtBRElBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQ0RKO0FER0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQUo7QURFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQ0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEQUE7RUFDSSxVQUFBO0FDR0o7QURBRTtFQUNFLG1CQUFBO0FDR0o7QURBRTtFQUNFLG1CQUFBO0FDR0o7QURHQTtFQUNJO0lBQ0MsY0FBQTtFQ0FIOztFREVFO0lBQ0ksVUFBQTtJQUNBLFVBQUE7RUNDTjs7RURJRTtJQUNJLFlBQUE7SUFDQSxrQkFBQTtFQ0ROOztFREdFO0lBQ0ksZ0JBQUE7SUFDQSxpQkFBQTtFQ0FOO0FBQ0Y7QURHRztFQUNDO0lBQ0ksV0FBQTtFQ0ROOztFREdJO0lBQ0UsbUJBQUE7RUNBTjs7RURHSTtJQUNFLG1CQUFBO0VDQU47O0VER0k7SUFDRSxtQkFBQTtFQ0FOO0FBQ0Y7QURJQTtFQUNJO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtFQ0ZGOztFRElFO0lBQ0ksV0FBQTtJQUNBLGlCQUFBO0VDRE47QUFDRjtBREdBO0VBQ0k7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0VDREY7O0VER0U7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUNBTjtBQUNGO0FERUE7RUFDSTtJQUNDLFVBQUE7RUNBSDs7RURFRTtJQUNJLFlBQUE7SUFDQSxrQkFBQTtFQ0NOOztFRENFO0lBQ0ksZ0JBQUE7SUFDQSxpQkFBQTtFQ0VOOztFREFFO0lBQ0ksa0JBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtFQ0dOO0FBQ0Y7QUREQTtFQUNJLFlBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7QUNHSjtBREFBO0VBQ0ksd0JBQUE7QUNHSjtBREFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBRUEsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLGVBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3RpY2tldC90aWNrZXQtY29udmVyc2F0aW9uL3RpY2tldC1jb252ZXJzYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgaW9uLWNhcmR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubW9iaWxlQ2FyZHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmdldENvbnZlcnNhdGlvbkZhaWx7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYm9yZGVyLXBlbmRpbmd7XHJcbiAgICBib3JkZXItbGVmdDozcHggc29saWQgb3JhbmdlO1xyXG4gICAgXHJcbn1cclxuLmJvcmRlci1jbG9zZWR7XHJcbiAgICBib3JkZXItbGVmdDozcHggc29saWQgcmdiKDAsIDEyOCwgOTYpO1xyXG4gICAgXHJcbn1cclxuLmJvcmRlci1vcGVue1xyXG4gICAgYm9yZGVyLWxlZnQ6M3B4IHNvbGlkIHJnYigwLCAxMzIsIDI1NSk7XHJcbiAgXHJcbn1cclxuLm1haW4td3JhcHBlcntcclxuICAgIGJhY2tncm91bmQ6dXJsKFwiLi4vLi4vLi4vYXNzZXRzL3RpY2tldHNfaW1nL2xpZ2h0X2JnLnBuZ1wiKXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbiAgIC8vIGhlaWdodDo5MHZoIG5vdjEyIGFzbWE7XHJcbiAgICBoZWlnaHQ6ODJ2aDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4udG8td3JhcHBlcntcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy90aWNrZXRzX2ltZy9sZWZ0U2lkZV9iZy5qcGdcIiluby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIFxyXG59XHJcbi5mcm9tLXdyYXBwZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvdGlja2V0c19pbWcvcmlnaHRTaWRlX2JnLmpwZ1wiKW5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMHB4IDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgLmRhdGVfbGFiZWx7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuZGF0ZV9ibG9ja3tcclxuICAgIGNvbG9yOiAjNTk1OTU5O1xyXG4gIH1cclxuXHJcbi5kYXRhQmxvY2t7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59XHJcbi5pbWdCbG9ja3tcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4udGlja2V0LXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5kaXNwbGF5LXdyYXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi50aWNrZXQtaWR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllOGU4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xyXG4gICAgLy9iYWNrZ3JvdW5kOiAjZDllY2YyO25vdjMwYXNtYVxyXG4gICAgYmFja2dyb3VuZDogIzlDMjdCMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGhlaWdodDoyNXB4O1xyXG4gICAgcGFkZGluZzogMnB4IDhweDtcclxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAtNXB4O1xyXG4gICAgbWFyZ2luOi01cHggYXV0byAwO1xyXG4gICAgLy9jb2xvcjogIzY5Njg2ODtub3YzMGFzbWFcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4udGlja2V0cy1pdGVte1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCByZ2IoMjI2LCAyMjQsIDIyNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNnB4O1xyXG4gICAgXHJcbn1cclxuLy8gLmF0dGFjaC1pY29uY3tcclxuLy8gICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMzBweDtcclxuLy8gICAgIGJvdHRvbTogMTBweDtcclxuLy8gICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4vLyAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTsgXHJcbi8vICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7ICBcclxuLy8gfVxyXG4uc2VuZC1jb2x7XHJcbiAgICB3aWR0aDoxNSU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcbi5zZW5kLWljb257XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGJhMDhjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIHBhZGRpbmc6IDdweDtcclxufVxyXG4ud3JhcHBlci1jb250YWluZXJ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMjVweDtcclxufVxyXG4uY29udGFjdC1wYW5hbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4ZmI7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuLmNvbnRhY3QtcGFuYWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOjRweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtcGFuYWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICAjZjZmNmY2O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1wYW5hbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIHJnYigxODIsIDE4MSwgMTgxKTtcclxuICB9XHJcbiAgXHJcblxyXG4gIFxyXG4gIFxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MzIwcHgpYW5kKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAuc2Vjb25kLWNvbHtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC50aWNrZXRzLWl0ZW17IFxyXG4gICAgICAgIHdpZHRoOjgwJTtcclxuICAgICAgICBsZWZ0OiAxMXB4OyBcclxuICAgIH1cclxuICAgIC8vIC5jb250YWN0LXBhbmFse1xyXG4gICAgLy8gICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAvLyB9XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIGhlaWdodDo4OXZoO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIGlvbi1jYXJke1xyXG4gICAgICAgIG1hcmdpbjo1cHggMTBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgIH1cclxufVxyXG5cclxuICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2N3B4KXtcclxuICAgIC5tYWluLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICB3aWR0aDoxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5tYWluLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAgI2Y2ZjZmNjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLm1haW4td3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICAjYWZhZGFkO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAubWFpbi13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDE4MiwgMTgxLCAxODEpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgXHJcbiAgIH1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2N3B4KWFuZCAobWF4LXdpZHRoOjEwMjJweCl7XHJcbiAgICAudGlja2V0cy1pdGVteyBcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogN3B4O1xyXG4gICAgcmlnaHQ6IDglO1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmR7XHJcbiAgICAgICAgbWFyZ2luOjVweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyM3B4KXtcclxuICAgIC50aWNrZXRzLWl0ZW17IFxyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiA2cHg7XHJcbiAgICByaWdodDogOSU7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZHtcclxuICAgICAgICBtYXJnaW46NXB4IDBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTM1MHB4KXtcclxuICAgIC50aWNrZXRzLWl0ZW17IFxyXG4gICAgIHJpZ2h0OiAxNSU7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIGhlaWdodDo5MXZoO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIGlvbi1jYXJke1xyXG4gICAgICAgIG1hcmdpbjo1cHggMTBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgIH1cclxuICAgIC5zZW5kLWljb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICByaWdodDogNjglO1xyXG4gICAgICAgIGJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG59XHJcbi50aHVtX25haWx7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB6b29tOjEwJTtcclxuICAgIGJvcmRlcjogMjBweCBzb2xpZCAjZDdmYjlmO1xyXG59XHJcblxyXG4uaW1nX3dyYXBwZXJ7XHJcbiAgICBtYXJnaW46IDI0cHggMHB4IDBweCAwcHg7XHJcbn1cclxuICBcclxuI3lvdXJCdG4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7IFxyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpOyAgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbiAiLCIqIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDFweDtcbn1cbiogaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9iaWxlQ2FyZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5nZXRDb252ZXJzYXRpb25GYWlsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYm9yZGVyLXBlbmRpbmcge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIG9yYW5nZTtcbn1cblxuLmJvcmRlci1jbG9zZWQge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwMDgwNjA7XG59XG5cbi5ib3JkZXItb3BlbiB7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzAwODRmZjtcbn1cblxuLm1haW4td3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy90aWNrZXRzX2ltZy9saWdodF9iZy5wbmdcIikgcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XG4gIGhlaWdodDogODJ2aDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4udG8td3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy90aWNrZXRzX2ltZy9sZWZ0U2lkZV9iZy5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDA7XG59XG5cbi5mcm9tLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvdGlja2V0c19pbWcvcmlnaHRTaWRlX2JnLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmRhdGVfbGFiZWwge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGF0ZV9ibG9jayB7XG4gIGNvbG9yOiAjNTk1OTU5O1xufVxuXG4uZGF0YUJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLmltZ0Jsb2NrIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4udGlja2V0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZGlzcGxheS13cmFwcGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRpY2tldC1pZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU4ZTg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZDogIzlDMjdCMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAtNXB4O1xuICBtYXJnaW46IC01cHggYXV0byAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aWNrZXRzLWl0ZW0ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA2cHg7XG59XG5cbi5zZW5kLWNvbCB7XG4gIHdpZHRoOiAxNSU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAwO1xufVxuXG4uc2VuZC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwYmEwOGM7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDdweDtcbn1cblxuLndyYXBwZXItY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAwcHggMjVweDtcbn1cblxuLmNvbnRhY3QtcGFuYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGZiO1xuICBoZWlnaHQ6IDkwdmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmNvbnRhY3QtcGFuYWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDRweDtcbn1cblxuLmNvbnRhY3QtcGFuYWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcbn1cblxuLmNvbnRhY3QtcGFuYWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2I2YjViNTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zZWNvbmQtY29sIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC50aWNrZXRzLWl0ZW0ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbGVmdDogMTFweDtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIGhlaWdodDogODl2aDtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIH1cblxuICBpb24tY2FyZCB7XG4gICAgbWFyZ2luOiA1cHggMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xuICAubWFpbi13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDEwcHg7XG4gIH1cblxuICAubWFpbi13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcbiAgfVxuXG4gIC5tYWluLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjYWZhZGFkO1xuICB9XG5cbiAgLm1haW4td3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNiNmI1YjU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIycHgpIHtcbiAgLnRpY2tldHMtaXRlbSB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDdweDtcbiAgICByaWdodDogOCU7XG4gIH1cblxuICBpb24tY2FyZCB7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyM3B4KSB7XG4gIC50aWNrZXRzLWl0ZW0ge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiA2cHg7XG4gICAgcmlnaHQ6IDklO1xuICB9XG5cbiAgaW9uLWNhcmQge1xuICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzUwcHgpIHtcbiAgLnRpY2tldHMtaXRlbSB7XG4gICAgcmlnaHQ6IDE1JTtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIGhlaWdodDogOTF2aDtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIH1cblxuICBpb24tY2FyZCB7XG4gICAgbWFyZ2luOiA1cHggMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgfVxuXG4gIC5zZW5kLWljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogNjglO1xuICAgIGJvdHRvbTogNXB4O1xuICB9XG59XG4udGh1bV9uYWlsIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB6b29tOiAxMCU7XG4gIGJvcmRlcjogMjBweCBzb2xpZCAjZDdmYjlmO1xufVxuXG4uaW1nX3dyYXBwZXIge1xuICBtYXJnaW46IDI0cHggMHB4IDBweCAwcHg7XG59XG5cbiN5b3VyQnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGJvdHRvbTogNXB4O1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/ticket/ticket-conversation/ticket-conversation.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/ticket/ticket-conversation/ticket-conversation.page.ts ***!
  \************************************************************************/
/*! exports provided: TicketConversationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketConversationPage", function() { return TicketConversationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _services_ticket_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/ticket-service.service */ "./src/app/services/ticket-service.service.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recordrtc */ "./node_modules/recordrtc/RecordRTC.js");
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(recordrtc__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _image_conversation_image_conversation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../image-conversation/image-conversation.component */ "./src/app/ticket/image-conversation/image-conversation.component.ts");












var TicketConversationPage = /** @class */ (function () {
    function TicketConversationPage(platform, location, TicketService, ajaxService, commonService, router, modalController) {
        this.platform = platform;
        this.location = location;
        this.TicketService = TicketService;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.router = router;
        this.modalController = modalController;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploader"]({});
        this.data = [];
        this.data1 = [];
        this.image = "";
        this.countCoversation = 2;
        this.fabButton = false;
        this.responceData = 0;
        this.messages = false;
        this.customerId = false;
        this.sendbtn = false;
        //New****
        this.title = 'micRecorder';
        this.recording = false;
    }
    TicketConversationPage.prototype.sanitize = function (url) {
        return this.domSanitizer.bypassSecurityTrustUrl(url);
    };
    TicketConversationPage.prototype.initiateRecording = function () {
        this.recording = true;
        var mediaConstraints = {
            audio: true
        };
        navigator.mediaDevices.getUserMedia(mediaConstraints).then(this.successCallback.bind(this), this.errorCallback.bind(this));
    };
    TicketConversationPage.prototype.successCallback = function (stream) {
        var options = {
            mimeType: "audio/wav",
        };
        var StereoAudioRecorder = recordrtc__WEBPACK_IMPORTED_MODULE_10__["StereoAudioRecorder"];
        this.record = new StereoAudioRecorder(stream, options);
        this.record.record();
    };
    TicketConversationPage.prototype.stopRecording = function () {
        this.recording = false;
        this.record.stop(this.processRecording.bind(this));
    };
    /**
    * processRecording Do what ever you want with blob
    * @param  {any} blob Blog
    */
    TicketConversationPage.prototype.processRecording = function (blob, fileName) {
        console.log(new File([blob], fileName, { lastModified: new Date().getTime(), type: blob.type }));
        this.audioUrl = new File([blob], fileName, { lastModified: new Date().getTime(), type: blob.type });
        this.sendAudioMsg();
    };
    TicketConversationPage.prototype.errorCallback = function (error) {
        this.error = 'Can not play audio in your browser';
        this.commonService.presentToast("Audio device not supported");
    };
    TicketConversationPage.prototype.sendAudioMsg = function () {
        var _this = this;
        var imgData = new FormData();
        imgData.append("attachments[]", this.audioUrl);
        imgData.append("body", ".");
        console.log(imgData);
        this.uploader.queue.length = 0;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].ticketUrl + "/api/v2/tickets/" + this.id + "/reply";
        this.TicketService.ticketPostImage(url, imgData)
            .subscribe(function (res) {
            console.log(res);
            if (res.ticket_id + '' == _this.id) {
                _this.commonService.presentToast('Sent successfully');
                _this.image = '';
            }
            else {
                _this.commonService.presentToast('Please try again');
            }
            _this.getChats(_this.id);
            _this.answer = '';
        });
    };
    TicketConversationPage.prototype.getBack = function () {
        this.location.back();
    };
    TicketConversationPage.prototype.sendReplyMsg = function () {
        var _this = this;
        this.sendbtn = false;
        if (this.uploader.queue.length == 0) {
            this.replyObj = { "body": this.image };
            if (this.image["body"] !== "") {
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].ticketUrl + "/api/v2/tickets/" + this.id + "/reply";
                this.TicketService.ticketPost(url, this.replyObj)
                    .subscribe(function (res) {
                    console.log(res);
                    if (res.ticket_id + '' == _this.id) {
                        _this.commonService.presentToast('Sent successfully');
                    }
                    else {
                        _this.commonService.presentToast('Please try again');
                    }
                    _this.getChats(_this.id);
                    _this.image = '';
                });
            }
        }
        else {
            var currentdate = new Date();
            var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth() + 1) + "/"
                + currentdate.getFullYear() + "  "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
            this.sendbtn = false;
            if (this.uploader.queue.length == 0) {
                this.commonService.presentToast("please insert one document ");
            }
            else {
                var file = this.uploader;
                var imgData = new FormData();
                // this.replyObj = { "attachments[]": imgData};
                for (var i = 0; i < file.queue.length; i++) {
                    imgData.append("attachments[]", file.queue[i]._file);
                }
                imgData.append("body", ".");
                //imgData.append('data',JSON.stringify(this.image));
                //const data=JSON.stringify(imgData)
                console.log(imgData);
                // this.replyObj = { "attachments[]": imgData};
                //if(this.answer["body"] !== ""){
                this.uploader.queue.length = 0;
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].ticketUrl + "/api/v2/tickets/" + this.id + "/reply";
                this.TicketService.ticketPostImage(url, imgData)
                    .subscribe(function (res) {
                    console.log(res);
                    if (res.ticket_id + '' == _this.id) {
                        _this.commonService.presentToast('Sent successfully');
                        _this.image = '';
                    }
                    else {
                        _this.commonService.presentToast('Please try again');
                    }
                    _this.getChats(_this.id);
                    _this.answer = '';
                });
                //}
            }
        }
    };
    TicketConversationPage.prototype.getFile = function () {
        document.getElementById("upfile").click();
    };
    TicketConversationPage.prototype.enableSendbtn = function (data) {
        if (data.target.value == '') {
            this.sendbtn = false;
        }
        else {
            this.sendbtn = true;
        }
    };
    TicketConversationPage.prototype.getChats = function (id) {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].ticketUrl + "/api/v2/tickets/" + id + "/conversations";
        this.TicketService.ticketGet(url)
            .subscribe(function (res) {
            console.log(res);
            _this.conversation = res;
            if (_this.conversation.length == 30) {
                _this.countCoversation = 2;
                _this.getMoreChats(id);
            }
        });
    };
    TicketConversationPage.prototype.enlargeImage = function (image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _image_conversation_image_conversation_component__WEBPACK_IMPORTED_MODULE_11__["ImageConversationComponent"],
                            componentProps: {
                                value: image,
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
    TicketConversationPage.prototype.getMoreChats = function (id) {
        var _this = this;
        this.commonService.presentLoader();
        var url1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].ticketUrl + "/api/v2/tickets/" + id + "/conversations?page=" + this.countCoversation;
        this.TicketService.ticketGet(url1).subscribe(function (res) {
            _this.countCoversation++;
            _this.conversation = _this.conversation.concat(res);
            _this.commonService.dismissLoader();
            if (res.length == 30) {
                _this.getMoreChats(id);
            }
        });
    };
    TicketConversationPage.prototype.subject = function (obj) {
        this.file = obj.target.value;
        this.fileName = this.file.split("\\");
        document.getElementById("yourBtn").innerHTML = this.fileName[this.fileName.length - 1];
        console.log(this.file);
        //document.myForm.submit();
        //event.preventDefault();
        console.log(this.uploader.queue[0].file.name);
    };
    TicketConversationPage.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
        //this.messages = true;
        this.sub = localStorage.getItem('subject');
        this.id = localStorage.getItem('coversationId');
        if (this.id.length >= 1) {
            this.getChats(this.id);
        }
    };
    TicketConversationPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _services_ticket_service_service__WEBPACK_IMPORTED_MODULE_7__["TicketServiceService"] },
        { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    TicketConversationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ticket-conversation',
            template: __webpack_require__(/*! raw-loader!./ticket-conversation.page.html */ "./node_modules/raw-loader/index.js!./src/app/ticket/ticket-conversation/ticket-conversation.page.html"),
            styles: [__webpack_require__(/*! ./ticket-conversation.page.scss */ "./src/app/ticket/ticket-conversation/ticket-conversation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _services_ticket_service_service__WEBPACK_IMPORTED_MODULE_7__["TicketServiceService"],
            _services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], TicketConversationPage);
    return TicketConversationPage;
}());



/***/ })

}]);
//# sourceMappingURL=ticket-ticket-conversation-ticket-conversation-module-es5.js.map