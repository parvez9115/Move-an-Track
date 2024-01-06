(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asset-info-asset-info-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/asset-info/asset-info.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/asset-info/asset-info.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"appHeader\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color:rgb(0, 0, 0)\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-grid class=\"appHeaderTitle\">\r\n    <ion-row>\r\n      <ion-title>Vehicle info</ion-title>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div style=\"height:40%\" #mapElement></div>\r\n  <app-vts-info></app-vts-info>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/asset-info/asset-info.module.ts":
/*!*************************************************!*\
  !*** ./src/app/asset-info/asset-info.module.ts ***!
  \*************************************************/
/*! exports provided: AssetInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetInfoPageModule", function() { return AssetInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _asset_info_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./asset-info.page */ "./src/app/asset-info/asset-info.page.ts");








const routes = [
    {
        path: '',
        component: _asset_info_page__WEBPACK_IMPORTED_MODULE_7__["AssetInfoPage"]
    }
];
let AssetInfoPageModule = class AssetInfoPageModule {
};
AssetInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
        ],
        declarations: [_asset_info_page__WEBPACK_IMPORTED_MODULE_7__["AssetInfoPage"],]
    })
], AssetInfoPageModule);



/***/ }),

/***/ "./src/app/asset-info/asset-info.page.scss":
/*!*************************************************!*\
  !*** ./src/app/asset-info/asset-info.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0LWluZm8vYXNzZXQtaW5mby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/asset-info/asset-info.page.ts":
/*!***********************************************!*\
  !*** ./src/app/asset-info/asset-info.page.ts ***!
  \***********************************************/
/*! exports provided: AssetInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetInfoPage", function() { return AssetInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_auth_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth-map.service */ "./src/app/services/auth-map.service.ts");
/* harmony import */ var _services_google_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/google-map.service */ "./src/app/services/google-map.service.ts");
/* harmony import */ var _services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/openlayer-map.service */ "./src/app/services/openlayer-map.service.ts");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/ajax.service */ "./src/app/services/ajax.service.ts");







let AssetInfoPage = class AssetInfoPage {
    constructor(mapService, GMap, olMap, ajaxService) {
        this.mapService = mapService;
        this.GMap = GMap;
        this.olMap = olMap;
        this.ajaxService = ajaxService;
        this.loadMap = () => {
            setTimeout(() => {
                if (localStorage.map === "Openlayer_OSM") {
                    this.map.updateSize();
                    this.map = this.mapService.loadMap(this.mapElement.nativeElement, { lat: -25.344, lng: 131.036 }, false, false);
                    this.mapService.setCenter(this.map, { lat: 17.786351, lng: 78.090820 });
                }
                else {
                    this.map = this.mapService.loadMap(this.mapElement.nativeElement, { lat: -25.344, lng: 131.036 }, false, false);
                    this.mapService.setCenter(this.map, { lat: 17.786351, lng: 78.090820 });
                    this.loadMarkers();
                }
            });
        };
        if (localStorage.map == "GoogleMap") {
            this.mapService = new _services_google_map_service__WEBPACK_IMPORTED_MODULE_4__["GoogleMapService"]();
        }
        else {
            this.mapService = new _services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_5__["OpenlayerMapService"]();
        }
    }
    ionViewWillEnter() {
        setTimeout(() => {
            this.map.setTarget(this.mapElement.nativeElement);
        }, 2000);
    }
    loadMarkers() {
        let latLng = {
            "lat": this.selectedVin.latitude,
            "lng": this.selectedVin.longitude
        };
        this.mapService.addMarker(this.map, latLng, "asset-info", "assets/vtsicon/" + this.selectedVin.icon + "/" + this.selectedVin.status + ".svg");
        // this.mapService.setCenter(this.map, latLng);
    }
    ngOnInit() {
        this.selectedVin = JSON.parse(localStorage.selectedVin);
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + "/site/mobilealerts?vin=" + JSON.parse(localStorage.selectedVin).vin;
        this.ajaxService.ajaxGet(url)
            .subscribe(res => {
            this.liveData = res;
            this.loadMap();
        });
    }
};
AssetInfoPage.ctorParameters = () => [
    { type: _services_auth_map_service__WEBPACK_IMPORTED_MODULE_3__["AuthMapService"] },
    { type: _services_google_map_service__WEBPACK_IMPORTED_MODULE_4__["GoogleMapService"] },
    { type: _services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_5__["OpenlayerMapService"] },
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElement', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AssetInfoPage.prototype, "mapElement", void 0);
AssetInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-asset-info',
        template: __webpack_require__(/*! raw-loader!./asset-info.page.html */ "./node_modules/raw-loader/index.js!./src/app/asset-info/asset-info.page.html"),
        styles: [__webpack_require__(/*! ./asset-info.page.scss */ "./src/app/asset-info/asset-info.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_map_service__WEBPACK_IMPORTED_MODULE_3__["AuthMapService"],
        _services_google_map_service__WEBPACK_IMPORTED_MODULE_4__["GoogleMapService"],
        _services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_5__["OpenlayerMapService"],
        _services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"]])
], AssetInfoPage);



/***/ })

}]);
//# sourceMappingURL=asset-info-asset-info-module-es2015.js.map