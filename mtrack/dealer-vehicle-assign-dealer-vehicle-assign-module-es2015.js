(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dealer-vehicle-assign-dealer-vehicle-assign-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/dealer-vehicle-assign/dealer-vehicle-assign.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/dealer-vehicle-assign/dealer-vehicle-assign.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"bottom: 16px; position: fixed\"\r\n      >Dealer Vehicle Assign</ion-title\r\n    >\r\n    <!-- <ion-button  shape=\"round\" class=\"dealerHeader\" style=\"margin-left: 50%;\" (click)=\"openModel()\">\r\n       Assign  \r\n    \r\n      </ion-button> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content *ngIf=\"myPlatform != 'desktop'\">\r\n  <ion-grid>\r\n    <form [formGroup]=\"dealerForm\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ionic-selectable\r\n            class=\"input selectable-input\"\r\n            formControlName=\"salesDealer\"\r\n            placeholder=\"Select Dealer\"\r\n            [items]=\"SalesDealer\"\r\n            [canSearch]=\"true\"\r\n            (onChange)=\"getsalesDealer($event)\"\r\n            [hasVirtualScroll]=\"true\"\r\n            [disabledItems]=\"data\"\r\n          >\r\n          </ionic-selectable>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col style=\"text-align: center !important\">\r\n          <ion-button\r\n            class=\"submitbtn\"\r\n            [disabled]=\"!dealerForm.valid\"\r\n            (click)=\"Submit()\"\r\n            >Submit</ion-button\r\n          >\r\n          <ion-button\r\n            class=\"submitbtn\"\r\n            [disabled]=\"!dealerForm.valid\"\r\n            (click)=\"Clear()\"\r\n            >Clear</ion-button\r\n          >\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n    <ion-row class=\"upperRow\">\r\n      <ion-col\r\n        (click)=\"typeSelector('Re-assign')\"\r\n        [ngClass]=\"{'selectedUpperCol': type !='Assign', 'upperCol': type =='Assign'}\"\r\n        size=\"3.5\"\r\n      >\r\n        <ion-label>Un-assign</ion-label>\r\n      </ion-col>\r\n      <ion-col\r\n        (click)=\"typeSelector('Assign')\"\r\n        [ngClass]=\"{'selectedUpperCol': type =='Assign', 'upperCol': type !='Assign'}\"\r\n        size=\"3.5\"\r\n      >\r\n        <ion-label>Assign</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-searchbar [(ngModel)]=\"terms\" placeholder=\"Search\"> </ion-searchbar>\r\n    <!-- <ion-virtual-scroll [items]=\"showList  | searchDelar:terms\"  approxItemHeight=\"320px\">\r\n    <ion-list  *virtualItem=\"let showList;let i = index\"  [id]='showList.imei' style= 'padding:0px;' >\r\n     <ion-item>\r\n          <ion-grid style='padding:0px;margin: 0px;'>\r\n            <ion-row style='padding:0px;margin: 0px;'>\r\n            \r\n              <ion-col size='8'  >{{showList.imei}}</ion-col>\r\n              <ion-col size='3'></ion-col>\r\n            \r\n           </ion-row>\r\n          </ion-grid>\r\n          <ion-checkbox class=\"checkbox\" #checkboxes (ionChange)=\"updateAnswer($event,i, showList.imei, showList)\" slot=\"end\"></ion-checkbox>\r\n    </ion-item>\r\n    </ion-list>\r\n  </ion-virtual-scroll> -->\r\n    <ion-list\r\n      style=\"padding: 0px\"\r\n      *ngFor=\"let showList of showList | searchDealerAssign:terms\"\r\n    >\r\n      <ion-item style=\"padding: 0px\">\r\n        <ion-grid style=\"padding: 0px; margin: 0px; font-size: 12px\">\r\n          <ion-row style=\"padding: 0px; margin: 0px\">\r\n            <ion-col style=\"padding: 0px\" size=\"6\">{{showList.imei}}</ion-col>\r\n            <ion-col style=\"padding: 0px\" size=\"1\"></ion-col>\r\n            <ion-col style=\"padding: 0px\" size=\"5\"\r\n              >{{showList.plateno}}</ion-col\r\n            >\r\n          </ion-row>\r\n        </ion-grid>\r\n        <ion-checkbox\r\n          class=\"checkbox\"\r\n          #checkboxes\r\n          (ionChange)=\"updateAnswer($event,i, showList.imei, showList)\"\r\n          slot=\"end\"\r\n        ></ion-checkbox>\r\n      </ion-item>\r\n    </ion-list>\r\n    <!-- <ion-row class=\"ion-text-center\"> \r\n    \r\n  <ion-col size=\"12\" style=\"position: fixed;\r\n   bottom: 0px;\"><ion-button (click)=\"assign()\" >Submit</ion-button></ion-col>\r\n  </ion-row> -->\r\n    <ion-fab\r\n      *ngIf=\"selectedArray.length != 0\"\r\n      vertical=\"bottom\"\r\n      horizontal=\"center\"\r\n      slot=\"fixed\"\r\n    >\r\n      <ion-fab-button\r\n        style=\"\r\n          --background: #0000000;\r\n          --box-shadow: #0000000;\r\n          width: 100px;\r\n          height: 100px;\r\n        \"\r\n      >\r\n        <ion-button *ngIf=\"type == 'Assign'\" (click)=\"submit()\"\r\n          >UNASSIGN</ion-button\r\n        >\r\n        <ion-button *ngIf=\"type == 'Re-assign'\" (click)=\"submit()\"\r\n          >ASSIGN</ion-button\r\n        >\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"myPlatform == 'desktop'\">\r\n  <ion-grid>\r\n    <form [formGroup]=\"dealerForm\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ionic-selectable\r\n            class=\"input selectable-input\"\r\n            formControlName=\"salesDealer\"\r\n            placeholder=\"Select Dealer\"\r\n            [items]=\"SalesDealer\"\r\n            [canSearch]=\"true\"\r\n            (onChange)=\"getsalesDealer($event)\"\r\n            [hasVirtualScroll]=\"true\"\r\n            [disabledItems]=\"data\"\r\n          >\r\n          </ionic-selectable>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col style=\"text-align: center !important\">\r\n          <ion-button\r\n            class=\"submitbtn\"\r\n            [disabled]=\"!dealerForm.valid\"\r\n            (click)=\"Submit()\"\r\n            >Submit</ion-button\r\n          >\r\n          <ion-button\r\n            class=\"submitbtn\"\r\n            [disabled]=\"!dealerForm.valid\"\r\n            (click)=\"Clear()\"\r\n            >Clear</ion-button\r\n          >\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n    <ion-row class=\"upperRow\">\r\n      <ion-col\r\n        (click)=\"typeSelector('Re-assign')\"\r\n        [ngClass]=\"{'selectedUpperCol': type !='Assign', 'upperCol': type =='Assign'}\"\r\n        size=\"3.5\"\r\n      >\r\n        <ion-label>Un-assign</ion-label>\r\n      </ion-col>\r\n      <ion-col\r\n        (click)=\"typeSelector('Assign')\"\r\n        [ngClass]=\"{'selectedUpperCol': type =='Assign', 'upperCol': type !='Assign'}\"\r\n        size=\"3.5\"\r\n      >\r\n        <ion-label>Assign</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-searchbar [(ngModel)]=\"terms\" placeholder=\"Search\"> </ion-searchbar>\r\n    <!-- <ion-virtual-scroll [items]=\"showList  | searchDelar:terms\"  approxItemHeight=\"320px\">\r\n    <ion-list  *virtualItem=\"let showList;let i = index\"  [id]='showList.imei' style= 'padding:0px;' >\r\n     <ion-item>\r\n          <ion-grid style='padding:0px;margin: 0px;'>\r\n            <ion-row style='padding:0px;margin: 0px;'>\r\n            \r\n              <ion-col size='8'  >{{showList.imei}}</ion-col>\r\n              <ion-col size='3'></ion-col>\r\n            \r\n           </ion-row>\r\n          </ion-grid>\r\n          <ion-checkbox class=\"checkbox\" #checkboxes (ionChange)=\"updateAnswer($event,i, showList.imei, showList)\" slot=\"end\"></ion-checkbox>\r\n    </ion-item>\r\n    </ion-list>\r\n  </ion-virtual-scroll> -->\r\n    <ion-list\r\n      style=\"padding: 0px\"\r\n      *ngFor=\"let showList of showList | searchDealerAssign:terms\"\r\n    >\r\n      <ion-item style=\"padding: 0px\">\r\n        <ion-grid style=\"padding: 0px; margin: 0px\">\r\n          <ion-row style=\"padding: 0px; margin: 0px\">\r\n            <ion-col style=\"padding: 0px\" size=\"6\">{{showList.imei}}</ion-col>\r\n            <ion-col style=\"padding: 0px\" size=\"1\"></ion-col>\r\n            <ion-col style=\"padding: 0px\" size=\"5\"\r\n              >{{showList.plateno}}</ion-col\r\n            >\r\n          </ion-row>\r\n        </ion-grid>\r\n        <ion-checkbox\r\n          class=\"checkbox\"\r\n          #checkboxes\r\n          (ionChange)=\"updateAnswer($event,i, showList.imei, showList)\"\r\n          slot=\"end\"\r\n        ></ion-checkbox>\r\n      </ion-item>\r\n    </ion-list>\r\n    <!-- <ion-row class=\"ion-text-center\"> \r\n    \r\n  <ion-col size=\"12\" style=\"position: fixed;\r\n   bottom: 0px;\"><ion-button (click)=\"assign()\" >Submit</ion-button></ion-col>\r\n  </ion-row> -->\r\n    <ion-fab\r\n      *ngIf=\"selectedArray.length != 0\"\r\n      vertical=\"bottom\"\r\n      horizontal=\"center\"\r\n      slot=\"fixed\"\r\n    >\r\n      <ion-fab-button\r\n        style=\"\r\n          --background: #0000000;\r\n          --box-shadow: #0000000;\r\n          width: 100px;\r\n          height: 100px;\r\n        \"\r\n      >\r\n        <ion-button *ngIf=\"type == 'Assign'\" (click)=\"submit()\"\r\n          >UNASSIGN</ion-button\r\n        >\r\n        <ion-button *ngIf=\"type == 'Re-assign'\" (click)=\"submit()\"\r\n          >ASSIGN</ion-button\r\n        >\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/delar-application/dealer-vehicle-assign/dealer-vehicle-assign-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/delar-application/dealer-vehicle-assign/dealer-vehicle-assign-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: DealerAssignRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerAssignRouter", function() { return DealerAssignRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dealer_vehicle_assign_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dealer-vehicle-assign.page */ "./src/app/delar-application/dealer-vehicle-assign/dealer-vehicle-assign.page.ts");




const routes = [
    {
        path: '',
        component: _dealer_vehicle_assign_page__WEBPACK_IMPORTED_MODULE_3__["DealerVehicleAssignPage"]
    }
];
let DealerAssignRouter = class DealerAssignRouter {
};
DealerAssignRouter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DealerAssignRouter);



/***/ }),

/***/ "./src/app/delar-application/dealer-vehicle-assign/dealer-vehicle-assign.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/dealer-vehicle-assign/dealer-vehicle-assign.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: DealerVehicleAssignPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerVehicleAssignPageModule", function() { return DealerVehicleAssignPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_dealer_assign_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/dealer-assign-pipe */ "./src/app/services/dealer-assign-pipe.ts");
/* harmony import */ var _dealer_vehicle_assign_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dealer-vehicle-assign-routing.module */ "./src/app/delar-application/dealer-vehicle-assign/dealer-vehicle-assign-routing.module.ts");
/* harmony import */ var _dealer_vehicle_assign_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dealer-vehicle-assign.page */ "./src/app/delar-application/dealer-vehicle-assign/dealer-vehicle-assign.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");









let DealerVehicleAssignPageModule = class DealerVehicleAssignPageModule {
};
DealerVehicleAssignPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _dealer_vehicle_assign_routing_module__WEBPACK_IMPORTED_MODULE_6__["DealerAssignRouter"],
        ],
        declarations: [
            _dealer_vehicle_assign_page__WEBPACK_IMPORTED_MODULE_7__["DealerVehicleAssignPage"],
            _services_dealer_assign_pipe__WEBPACK_IMPORTED_MODULE_5__["SearchDealerAssignPipe"]
        ],
    })
], DealerVehicleAssignPageModule);



/***/ }),

/***/ "./src/app/delar-application/dealer-vehicle-assign/dealer-vehicle-assign.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/dealer-vehicle-assign/dealer-vehicle-assign.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upperCol {\n  text-align: center;\n  border-radius: 8px;\n  margin: 2px;\n  color: black;\n  font-family: sans-serif;\n  font-size: 13px;\n  text-transform: uppercase;\n}\n\n.upperRow {\n  background: #eeeeee;\n  padding: 4px;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.selectedUpperCol {\n  background: #ffffff;\n  text-align: center;\n  border-radius: 8px;\n  margin: 2px;\n  color: black;\n  font-family: sans-serif;\n  font-size: 13px;\n  text-transform: uppercase;\n  box-shadow: 0.2px 0.2px #888888;\n}\n\n.checkbox {\n  --background-checked: #7c68f8;\n  --border-color-checked: #7d7d7d;\n  --checkmark-color: white;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.submitbtn {\n  --background:#6252ee;\n  margin-top: 7px;\n}\n\n.input-label {\n  padding: 16px 0px;\n}\n\n.input-label {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGVhbGVyLXZlaGljbGUtYXNzaWduL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGRlYWxlci12ZWhpY2xlLWFzc2lnblxcZGVhbGVyLXZlaGljbGUtYXNzaWduLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGVhbGVyLXZlaGljbGUtYXNzaWduL2RlYWxlci12ZWhpY2xlLWFzc2lnbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQ0E7RUFDSSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7QUNFSjs7QURBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0dKOztBREFBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDR0o7O0FEREE7RUFDSSxvQkFBQTtFQUNFLGVBQUE7QUNJTjs7QURGRTtFQUNFLGlCQUFBO0FDS0o7O0FERkE7RUFDSSxlQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9kZWFsZXItdmVoaWNsZS1hc3NpZ24vZGVhbGVyLXZlaGljbGUtYXNzaWduLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cHBlckNvbHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4udXBwZXJSb3d7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnNlbGVjdGVkVXBwZXJDb2x7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3gtc2hhZG93OiAwLjJweCAwLjJweCAjODg4ODg4O1xyXG59XHJcblxyXG4uY2hlY2tib3h7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzdjNjhmODtcclxuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICM3ZDdkN2Q7XHJcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmlucHV0e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICAgIFxyXG59XHJcbi5zZWxlY3RhYmxlLWlucHV0e1xyXG4gICAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uc3VibWl0YnRue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiM2MjUyZWU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDdweDtcclxuICB9XHJcbiAgLmlucHV0LWxhYmVse1xyXG4gICAgcGFkZGluZzogMTZweCAwcHg7XHJcbiAgIFxyXG59XHJcbi5pbnB1dC1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG59IiwiLnVwcGVyQ29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi51cHBlclJvdyB7XG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gIHBhZGRpbmc6IDRweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zZWxlY3RlZFVwcGVyQ29sIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJveC1zaGFkb3c6IDAuMnB4IDAuMnB4ICM4ODg4ODg7XG59XG5cbi5jaGVja2JveCB7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjN2M2OGY4O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjN2Q3ZDdkO1xuICAtLWNoZWNrbWFyay1jb2xvcjogd2hpdGU7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5zdWJtaXRidG4ge1xuICAtLWJhY2tncm91bmQ6IzYyNTJlZTtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG4uaW5wdXQtbGFiZWwge1xuICBwYWRkaW5nOiAxNnB4IDBweDtcbn1cblxuLmlucHV0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/dealer-vehicle-assign/dealer-vehicle-assign.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/dealer-vehicle-assign/dealer-vehicle-assign.page.ts ***!
  \***************************************************************************************/
/*! exports provided: DealerVehicleAssignPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerVehicleAssignPage", function() { return DealerVehicleAssignPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






// import { ANY_STATE } from '@angular/animation/src/dsl/animation_transition_expr';


let DealerVehicleAssignPage = class DealerVehicleAssignPage {
    constructor(ajaxService, router, commonService, formBuilder, alertController, platform) {
        this.ajaxService = ajaxService;
        this.router = router;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.platform = platform;
        this.answer = [];
        this.assignedImei = [];
        this.showImeiList = [];
        this.companyID = "";
        this.selectedArray = [];
        this.type = "Re-assign";
        this.icon = "cloud-upload";
    }
    updateAnswer(event, index, imei, imeiDetail) {
        if (event.currentTarget.checked == true) {
            if (this.type == "Assign")
                this.selectedArray.push(imeiDetail);
            else
                this.selectedArray.push(imeiDetail);
        }
        else {
            let index;
            if (this.type == "Assign")
                index = this.removeCheckedFromArray(imei);
            else
                index = this.removeCheckedFromArray(imei);
            this.selectedArray.splice(index, 1);
        }
        console.log(this.selectedArray);
    }
    getsalesDealer() {
        this.showList = [];
        this.selectedArray = [];
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + `/login/getSubDealer?companyid=${localStorage.corpId}`;
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.SalesDealer = res;
        });
    }
    createForm() {
        this.dealerForm = this.formBuilder.group({
            salesDealer: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
    }
    removeCheckedFromArray(checkbox) {
        return this.selectedArray.findIndex((category) => {
            return category === checkbox;
        });
    }
    Clear() {
        if (this.dealerForm.value.salesDealer != "") {
            this.dealerForm.reset();
            this.typeSelector(this.type);
        }
        this.uncheckAll();
    }
    submit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.type == "Assign") {
                let text = "Are you sure? You want to unassign this stock to your company ";
                const alert = yield this.alertController.create({
                    header: "Unassign Dealer",
                    backdropDismiss: false,
                    message: text,
                    buttons: [
                        {
                            text: "Cancel",
                            role: "cancel",
                            handler: (data) => { },
                        },
                        {
                            text: "Confirm",
                            handler: (confirm) => {
                                var arr = [];
                                for (let i = 0; i < this.selectedArray.length; i++) {
                                    arr.push({
                                        vin: this.selectedArray[i].vin,
                                        companyId: "apm-ca",
                                        userId: localStorage.userName,
                                    });
                                }
                                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + `/login/DeleteDealerVehicles`;
                                this.ajaxService
                                    .ajaxPostWithString(url, JSON.stringify(arr))
                                    .subscribe((res) => {
                                    var responseData = JSON.parse(res);
                                    if (responseData.message ==
                                        "Dealer Vehicle UnAssigned Successfully") {
                                        this.typeSelector(this.type);
                                        this.selectedArray = [];
                                        this.uncheckAll();
                                        this.commonService.presentToast("Updated Successfully");
                                    }
                                    else {
                                        this.commonService.showConfirm(responseData.message);
                                    }
                                });
                            },
                        },
                    ],
                });
                yield alert.present();
            }
            else {
                let text = "Are you sure? You want to assign this stock to your company ";
                const alert = yield this.alertController.create({
                    header: "Assign Dealer",
                    backdropDismiss: false,
                    message: text,
                    buttons: [
                        {
                            text: "Cancel",
                            role: "cancel",
                            handler: (data) => { },
                        },
                        {
                            text: "Confirm",
                            handler: (confirm) => {
                                var arr = [];
                                for (let i = 0; i < this.selectedArray.length; i++) {
                                    arr.push({
                                        vin: this.selectedArray[i].vin,
                                        companyId: "apm-ca",
                                        userId: localStorage.userName,
                                    });
                                }
                                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + `/login/saveDealerVehicles`;
                                // let saveData=JSON.stringify({"vin":this.selectedArray[i].plateno,"userId":localStorage.userName,"companyId":this.selectedArray[i].companyid})
                                this.ajaxService
                                    .ajaxPostWithString(url, JSON.stringify(arr))
                                    .subscribe((res) => {
                                    var responseData = JSON.parse(res);
                                    if (responseData.message ==
                                        "Dealer Vehicle Assigned Successfully") {
                                        this.typeSelector(this.type);
                                        this.selectedArray = [];
                                        this.uncheckAll();
                                        this.commonService.presentToast("Updated Successfully");
                                    }
                                    else {
                                        this.commonService.showConfirm(responseData.message);
                                    }
                                });
                            },
                        },
                    ],
                });
                yield alert.present();
            }
        });
    }
    //Empties array with checkedboxes
    emptyCheckedArray() {
        this.selectedArray = [];
    }
    getCheckedBoxes() {
        console.log(this.selectedArray);
    }
    Submit() {
        this.typeSelector(this.type);
    }
    ionViewWillEnter() {
        this.showList = [];
        this.companyID = "";
        this.selectedArray = [];
        this.typeSelector(this.type);
    }
    typeSelector(data) {
        this.commonService.presentLoader();
        this.uncheckAll();
        this.type = data;
        this.icon = "cloud-upload";
        // https://mvt.apmkingstrack.com/fleettracking/login/getAssignedVehicles?companyid=apm&userid=apm-sa
        if (this.dealerForm.value.salesDealer == "" ||
            this.dealerForm.value.salesDealer == null) {
            if (data == "Assign") {
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
                    `/login/getAssignedVehicles?userid=${localStorage.userName}`;
            }
            else {
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
                    `/login/getUnassignedVehicles?companyid=${localStorage.corpId}&userid=${localStorage.userName}`;
            }
            this.ajaxService.ajaxGet(url).subscribe((res) => {
                if (res) {
                    this.commonService.dismissLoader();
                    this.showList = res;
                }
            });
        }
        else {
            if (data == "Assign") {
                var param = "getAssignedCompanyVehicles";
                var query = ``;
                //  https://mvt.apmkingstrack.com/fleettracking/login/getAssignedVehicles?companyid=apm&userid=apm-sa
            }
            else {
                var param = "getUnassignedCompanyVehicles";
                var query = `companyid=${localStorage.corpId}&`;
            }
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
                `/login/${param}?${query}userid=${localStorage.userName}&dealer=${this.dealerForm.value.salesDealer}`;
            this.ajaxService.ajaxGet(url).subscribe((res) => {
                if (res) {
                    this.commonService.dismissLoader();
                    this.showList = res;
                }
            });
        }
    }
    uncheckAll() {
        for (let i = 0; i < this.checkboxes.length; i++) {
            this.checkboxes["_results"][i].checked = false;
        }
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.createForm();
        this.getsalesDealer();
    }
};
DealerVehicleAssignPage.ctorParameters = () => [
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])("checkboxes"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], DealerVehicleAssignPage.prototype, "checkboxes", void 0);
DealerVehicleAssignPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dealer-vehicle-assign",
        template: __webpack_require__(/*! raw-loader!./dealer-vehicle-assign.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/dealer-vehicle-assign/dealer-vehicle-assign.page.html"),
        styles: [__webpack_require__(/*! ./dealer-vehicle-assign.page.scss */ "./src/app/delar-application/dealer-vehicle-assign/dealer-vehicle-assign.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]])
], DealerVehicleAssignPage);



/***/ }),

/***/ "./src/app/services/dealer-assign-pipe.ts":
/*!************************************************!*\
  !*** ./src/app/services/dealer-assign-pipe.ts ***!
  \************************************************/
/*! exports provided: SearchDealerAssignPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDealerAssignPipe", function() { return SearchDealerAssignPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchDealerAssignPipe = class SearchDealerAssignPipe {
    transform(items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(it => {
            if (it.imei != null) {
                return it.imei.replace(/ /g, '').toLowerCase().includes(terms.replace(/ /g, ''));
            }
            else if (it.name) {
                return it.name.toLowerCase().includes(terms);
            }
            else
                return false;
        });
    }
};
SearchDealerAssignPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'searchDealerAssign'
    })
], SearchDealerAssignPipe);



/***/ })

}]);
//# sourceMappingURL=dealer-vehicle-assign-dealer-vehicle-assign-module-es2015.js.map