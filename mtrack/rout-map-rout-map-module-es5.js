(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rout-map-rout-map-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/parent-app/rout-map/rout-map.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/parent-app/rout-map/rout-map.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"header\">\r\n  <ion-toolbar class=\"parentAppcolor\">\r\n    <ion-row style=\"align-items: center\">\r\n      <ion-icon\r\n        (click)=\"locationBack()\"\r\n        class=\"icon-size\"\r\n        name=\"arrow-back\"\r\n      ></ion-icon>\r\n      <ion-label> Rout Map </ion-label>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card style=\"margin: 0px\" *ngFor=\"let data of routeDatas\">\r\n    <ion-row class=\"routBus\"> {{data.trip}} </ion-row>\r\n    <ion-row class=\"routBus\"> {{data.routeName}} </ion-row>\r\n    <div class=\"container\">\r\n      <ul>\r\n        <li>\r\n          <span>\r\n            <div\r\n              id=\"circle\"\r\n              [ngClass]='{\"passedCircle\": data.routesDatas[0].crossedStatus === \"crossed\", \"currentCircle\": data.routesDatas[0].crossedStatus === \"current\", \"nonPassedCircle\": data.routesDatas[0].crossedStatus === \"notcrossed\"}'\r\n            ></div>\r\n          </span>\r\n          <ion-row class=\"stoppingTest\">{{data.routesDatas[0].stop}}</ion-row>\r\n          <ion-row class=\"addressRow\">{{data.routesDatas[0].adderss}}</ion-row>\r\n          <ion-row style=\"border-bottom: 3px dotted #e8e8e8\">\r\n            <ion-col>\r\n              <ion-row>\r\n                <ion-col size=\"3\">\r\n                  <svg\r\n                    version=\"1.1\"\r\n                    width=\"24px\"\r\n                    fill=\"#ff9025\"\r\n                    id=\"Layer_1\"\r\n                    xmlns=\"http://www.w3.org/2000/svg\"\r\n                    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                    x=\"0px\"\r\n                    y=\"0px\"\r\n                    viewBox=\"0 0 512 512\"\r\n                    style=\"enable-background: new 0 0 512 512\"\r\n                    xml:space=\"preserve\"\r\n                  >\r\n                    <path\r\n                      d=\"M426.667,0c-47.052,0-85.333,38.281-85.333,85.333c0,40.814,60.469,123.419,74.637,142.22\r\n\t\t\t\tc-0.004,6.073,0,12.036-0.147,17.509c-0.156,5.885,4.49,10.792,10.385,10.948c0.094,0,0.188,0,0.292,0\r\n\t\t\t\tc5.75,0,10.5-4.594,10.656-10.385c0.147-5.616,0.143-11.746,0.147-17.992C451.378,208.961,512,126.195,512,85.333\r\n\t\t\t\tC512,38.281,473.719,0,426.667,0z M426.667,106.667c-11.76,0-21.333-9.573-21.333-21.333c0-11.76,9.573-21.333,21.333-21.333\r\n\t\t\t\tS448,73.573,448,85.333C448,97.094,438.427,106.667,426.667,106.667z\"\r\n                    />\r\n                    <path\r\n                      d=\"M326.5,307.427c-17.604,9.99-27.385,27.333-33.219,39.5c-2.552,5.313-0.313,11.688,5,14.229\r\n\t\t\t\tc1.49,0.719,3.063,1.052,4.604,1.052c3.979,0,7.792-2.229,9.625-6.052c7.406-15.448,14.969-24.75,24.531-30.188\r\n\t\t\t\tc5.115-2.906,6.917-9.417,4-14.542C338.146,306.302,331.656,304.5,326.5,307.427z\"\r\n                    />\r\n                    <path\r\n                      d=\"M229.427,462.281c-10.688,8.469-22.833,14.844-37.146,19.5c-5.604,1.823-8.667,7.844-6.844,13.448\r\n\t\t\t\tc1.469,4.5,5.646,7.365,10.146,7.365c1.094,0,2.208-0.167,3.302-0.521c16.531-5.375,31.26-13.135,43.792-23.063\r\n\t\t\t\tc4.615-3.667,5.396-10.375,1.74-14.99C240.729,459.417,234.031,458.594,229.427,462.281z\"\r\n                    />\r\n                    <path\r\n                      d=\"M289.573,384.438c-5.521-2.146-11.667,0.594-13.802,6.094c-4.781,12.354-10.76,26.76-18.823,39.958\r\n\t\t\t\tc-3.073,5.031-1.479,11.594,3.542,14.667c1.74,1.063,3.656,1.563,5.552,1.563c3.594,0,7.104-1.813,9.115-5.104\r\n\t\t\t\tc8.938-14.646,15.385-30.146,20.51-43.375C297.792,392.75,295.063,386.573,289.573,384.438z\"\r\n                    />\r\n                    <path\r\n                      d=\"M422.708,281.021c-4.844-3.281-11.5-2.021-14.813,2.854c-3.51,5.188-10.698,12.323-32.438,14.271\r\n\t\t\t\tc-5.865,0.531-10.198,5.708-9.667,11.583c0.5,5.542,5.156,9.708,10.615,9.708c0.323,0,0.646-0.01,0.969-0.042\r\n\t\t\t\tc23.094-2.073,38.854-9.781,48.188-23.563C428.865,290.958,427.583,284.323,422.708,281.021z\"\r\n                    />\r\n                    <path\r\n                      d=\"M153.275,490.805C186.932,454.913,256,372.341,256,298.667c0-71.771-56.229-128-128-128s-128,56.229-128,128\r\n\t\t\t\tc0,94.615,114.068,204.146,120.443,210.19c0,0,0.026,0.026,0.038,0.038c0.035,0.033,0.169,0.163,0.197,0.189\r\n\t\t\t\tc0.441,0.419,0.991,0.613,1.48,0.941c0.605,0.408,1.152,0.889,1.837,1.168C125.28,511.715,126.634,512,128,512\r\n\t\t\t\tc7.771,0,15.156-0.271,22.156-0.802c5.875-0.448,10.281-5.563,9.833-11.438C159.669,495.556,156.948,492.277,153.275,490.805z\r\n\t\t\t\t M128,362.667c-35.292,0-64-28.708-64-64c0-35.292,28.708-64,64-64s64,28.708,64,64C192,333.958,163.292,362.667,128,362.667z\"\r\n                    />\r\n                  </svg>\r\n                </ion-col>\r\n                <ion-col class=\"distanceTravelled\">\r\n                  {{data.routesDatas[0].distanceTravelled}} KM\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-row>\r\n                <ion-col size=\"3\">\r\n                  <ion-icon\r\n                    class=\"time-icon parentAppBackcolor\"\r\n                    name=\"time\"\r\n                  ></ion-icon>\r\n                </ion-col>\r\n                <ion-col class=\"distanceTravelled\">\r\n                  {{data.routesDatas[0].approximateReachTime}}\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/parent-app/rout-map/rout-map.module.ts":
/*!********************************************************!*\
  !*** ./src/app/parent-app/rout-map/rout-map.module.ts ***!
  \********************************************************/
/*! exports provided: RoutMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutMapPageModule", function() { return RoutMapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rout_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rout-map.page */ "./src/app/parent-app/rout-map/rout-map.page.ts");







var routes = [
    {
        path: '',
        component: _rout_map_page__WEBPACK_IMPORTED_MODULE_6__["RoutMapPage"]
    }
];
var RoutMapPageModule = /** @class */ (function () {
    function RoutMapPageModule() {
    }
    RoutMapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_rout_map_page__WEBPACK_IMPORTED_MODULE_6__["RoutMapPage"]]
        })
    ], RoutMapPageModule);
    return RoutMapPageModule;
}());



/***/ }),

/***/ "./src/app/parent-app/rout-map/rout-map.page.scss":
/*!********************************************************!*\
  !*** ./src/app/parent-app/rout-map/rout-map.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 0px;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n}\n\n#circle {\n  padding: 6px;\n  position: absolute;\n  display: inline-block;\n  content: \"\";\n  /* top: 13px; */\n  left: 1px;\n  border-radius: 50%;\n  border: 3px solid #dddddd;\n}\n\n.routBus {\n  font-weight: bold;\n  padding: 10px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 19px;\n  color: #000000;\n}\n\n.passedCircle {\n  background-color: #737373;\n}\n\n.nonPassedCircle {\n  background-color: #dddddd;\n}\n\n.stoppingTest {\n  font-family: cursive;\n  font-size: 25px;\n  color: black;\n}\n\n.distanceTravelled {\n  align-self: center;\n  font-size: 15px;\n  font-weight: bold;\n  color: black;\n  text-transform: uppercase;\n}\n\n.container li {\n  position: relative;\n  list-style: none;\n  padding: 0;\n}\n\n.container li:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #ddd;\n  width: 5px;\n  height: 100%;\n}\n\n.container li {\n  padding: 19px 12px 0px 25px;\n  position: relative;\n}\n\n.addressRow {\n  text-transform: uppercase;\n  font-size: 10px;\n  padding-top: 9px;\n}\n\n.selected div {\n  color: tomato;\n}\n\n.container li span {\n  position: absolute;\n  left: -8px;\n  font-size: 12px;\n  /* background-color: #fff; */\n  /* padding: 10px 0; */\n  top: 29px;\n  /* color: #aaa; */\n}\n\n.icon-size {\n  font-size: 18px;\n  padding: 9px;\n}\n\n.time-icon {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFyZW50LWFwcC9yb3V0LW1hcC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXHBhcmVudC1hcHBcXHJvdXQtbWFwXFxyb3V0LW1hcC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhcmVudC1hcHAvcm91dC1tYXAvcm91dC1tYXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBS0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUlBLHlCQUFBO0FDTEo7O0FET0E7RUFDUSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNKUjs7QURNQTtFQUNJLHlCQUFBO0FDSEo7O0FES0E7RUFDSSx5QkFBQTtBQ0ZKOztBRElBO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNFSjs7QURBQTtFQUdJLDJCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3BhcmVudC1hcHAvcm91dC1tYXAvcm91dC1tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4jY2lyY2xlIHtcclxuICAgIC8vICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgLy8gICB3aWR0aDogMjBweDtcclxuICAgIC8vICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgLyogdG9wOiAxM3B4OyAqL1xyXG4gICAgbGVmdDogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzFhYmE3ZTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM3MzczNzM7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2RkZGRkZDtcclxufVxyXG4ucm91dEJ1c3tcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4ucGFzc2VkQ2lyY2xle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzczNzM3MztcclxufVxyXG4ubm9uUGFzc2VkQ2lyY2xle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcclxufVxyXG4uc3RvcHBpbmdUZXN0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5kaXN0YW5jZVRyYXZlbGxlZCB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmNvbnRhaW5lciBsaSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uY29udGFpbmVyIGxpOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5jb250YWluZXIgbGkge1xyXG4gICAgLy8gcGFkZGluZzogMzBweCAzMHB4O1xyXG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTlweCAxMnB4IDBweCAyNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYWRkcmVzc1JvdyB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDlweDtcclxufVxyXG5cclxuLnNlbGVjdGVkIGRpdiB7XHJcbiAgICBjb2xvcjogdG9tYXRvO1xyXG59XHJcbi5jb250YWluZXIgbGkgc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtOHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgKi9cclxuICAgIC8qIHBhZGRpbmc6IDEwcHggMDsgKi9cclxuICAgIHRvcDogMjlweDtcclxuICAgIC8qIGNvbG9yOiAjYWFhOyAqL1xyXG59XHJcbi5pY29uLXNpemUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogOXB4O1xyXG59XHJcbi50aW1lLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi8vIC5oZWFkZXJfYm9yZGVyIHtcclxuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbi8vIH1cclxuXHJcbi8vICNyb3V0ZV9hcmVhIHtcclxuLy8gICAgIGNvbG9yOiAjN2I3YjdiO1xyXG4vLyB9XHJcbi8vIC5jaXJjbGUge1xyXG4vLyAgICAgYmFja2dyb3VuZDogcmdiKDI0NywgMjA2LCA3Myk7XHJcbi8vICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbi8vICAgICB3aWR0aDogMTNweDtcclxuLy8gICAgIGhlaWdodDogMTNweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gfVxyXG5cclxuLy8gLmxpbmUge1xyXG4vLyAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHJnYigyNDcsIDIwNiwgNzMpO1xyXG4vLyAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyAuY2lyY2xlMiB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ3LCAyMDYsIDczKTtcclxuLy8gICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuLy8gICAgIHdpZHRoOiAxM3B4O1xyXG4vLyAgICAgaGVpZ2h0OiAxM3B4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyB9XHJcbi8vIC5jb2xfbGluZSB7XHJcbi8vICAgICBtYXJnaW46IDBweDtcclxuLy8gICAgIHBhZGRpbmc6IDBweDtcclxuLy8gICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuLy8gfVxyXG4vLyAubGluZV9TdHJhaWdodF9sZWZ0IHtcclxuLy8gICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHJnYigyNDcsIDIwNiwgNzMpO1xyXG4vLyAgICAgaGVpZ2h0OiAyN3B4O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogLThweDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IC04cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5saW5lX1N0cmFpZ2h0X3JpZ2h0IHtcclxuLy8gICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHJnYigyNDcsIDIwNiwgNzMpO1xyXG4vLyAgICAgaGVpZ2h0OiAyN3B4O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogLThweDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IC04cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5pY29uX2hvbWUge1xyXG4vLyAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4vLyB9XHJcblxyXG4vLyAuYWN0aXZlIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IHJlZDtcclxuLy8gICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuLy8gICAgIHdpZHRoOiAxM3B4O1xyXG4vLyAgICAgaGVpZ2h0OiAxM3B4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyB9XHJcbiIsIi5jb250YWluZXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbiNjaXJjbGUge1xuICBwYWRkaW5nOiA2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb250ZW50OiBcIlwiO1xuICAvKiB0b3A6IDEzcHg7ICovXG4gIGxlZnQ6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZGRkZGRkO1xufVxuXG4ucm91dEJ1cyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnBhc3NlZENpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MzczNzM7XG59XG5cbi5ub25QYXNzZWRDaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xufVxuXG4uc3RvcHBpbmdUZXN0IHtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZGlzdGFuY2VUcmF2ZWxsZWQge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNvbnRhaW5lciBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNvbnRhaW5lciBsaTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyIGxpIHtcbiAgcGFkZGluZzogMTlweCAxMnB4IDBweCAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hZGRyZXNzUm93IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogOXB4O1xufVxuXG4uc2VsZWN0ZWQgZGl2IHtcbiAgY29sb3I6IHRvbWF0bztcbn1cblxuLmNvbnRhaW5lciBsaSBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmY7ICovXG4gIC8qIHBhZGRpbmc6IDEwcHggMDsgKi9cbiAgdG9wOiAyOXB4O1xuICAvKiBjb2xvcjogI2FhYTsgKi9cbn1cblxuLmljb24tc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogOXB4O1xufVxuXG4udGltZS1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/parent-app/rout-map/rout-map.page.ts":
/*!******************************************************!*\
  !*** ./src/app/parent-app/rout-map/rout-map.page.ts ***!
  \******************************************************/
/*! exports provided: RoutMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutMapPage", function() { return RoutMapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");







var RoutMapPage = /** @class */ (function () {
    // curret_location = "pattalam"
    // routeDatas=[];
    // routeDatas = [{"routesDatas":[{"stop":"MCC","distanceTravelled":"1700","approximateReachTime":"18min",
    // "crossedStatus":"crossed","adderss":"Panagal park"}],"routeName":"RouteMap-bu1"}]
    // routeDatas = [{"routeName":"RouteMap-bust11","routesDatas":[{"stop": "Panagal park", "adderss":"Nkm road chennai",  "distanceTravelled":"1700 M", "approximateReachTime":"18min", "crossedStatus":"crossed"},
    // {"stop": "Panagal park", "adderss":"Nkm road chennai",
    //  "distanceTravelled":"1700 M", "approximateReachTime":"18min", "crossedStatus":"crossed"}]}]
    function RoutMapPage(location, ajaxService, router, commonService) {
        this.location = location;
        this.ajaxService = ajaxService;
        this.router = router;
        this.commonService = commonService;
        this.routeDatas = [
            {
                routesDatas: [
                    {
                        stop: "MCC",
                        distanceTravelled: "00",
                        approximateReachTime: "1min",
                        crossedStatus: "cred",
                        adderss: "Panpark",
                    },
                ],
                routeName: "Rouap-bu1",
            },
        ];
    }
    RoutMapPage.prototype.locationBack = function () {
        this.router.navigateByUrl("student-dashboard");
    };
    RoutMapPage.prototype.getRoutesDatas = function () {
        var _this = this;
        this.commonService.presentLoader();
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
            "/parentapp/routeMap?parentId=" +
            localStorage.getItem("userName") +
            "&stin=" +
            localStorage.getItem("stin");
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.routeDatas = res;
            _this.commonService.dismissLoader();
        });
    };
    RoutMapPage.prototype.ngOnInit = function () {
        this.getRoutesDatas();
    };
    RoutMapPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
    RoutMapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-rout-map",
            template: __webpack_require__(/*! raw-loader!./rout-map.page.html */ "./node_modules/raw-loader/index.js!./src/app/parent-app/rout-map/rout-map.page.html"),
            styles: [__webpack_require__(/*! ./rout-map.page.scss */ "./src/app/parent-app/rout-map/rout-map.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], RoutMapPage);
    return RoutMapPage;
}());



/***/ })

}]);
//# sourceMappingURL=rout-map-rout-map-module-es5.js.map