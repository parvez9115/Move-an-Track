(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nearby-stations-stations-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/nearby/stations/stations.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nearby/stations/stations.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar [ngClass]=\"{'appHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"locationBack()\"  class=\"icon-size\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align:left\">{{headerText}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-card *ngFor=\"let values of resultantNearByPlaceDetails\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle style=\"font-weight:bold;\">{{values.vicinity}}</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>{{values.name}}\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"2\">\r\n            <ion-img (click)=\"locationSelected(values.name,values.vicinity)\" src=\"assets/Armoron/direction.png\">\r\n            </ion-img>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-img (click)=\"contactSelected(values.place_id)\" src=\"assets/Armoron/contact.png\"></ion-img>\r\n          </ion-col>\r\n          <ion-col size=\"8\" style=\"text-align:right\">\r\n            <ion-img [src]=\"values.status\" style=\"width: 40%;margin-left: 44%;margin-bottom: -20px;margin-top: -16px;\">\r\n            </ion-img>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/nearby/stations/stations.module.ts":
/*!****************************************************!*\
  !*** ./src/app/nearby/stations/stations.module.ts ***!
  \****************************************************/
/*! exports provided: StationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationsPageModule", function() { return StationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stations.page */ "./src/app/nearby/stations/stations.page.ts");







const routes = [
    {
        path: '',
        component: _stations_page__WEBPACK_IMPORTED_MODULE_6__["StationsPage"]
    }
];
let StationsPageModule = class StationsPageModule {
};
StationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_stations_page__WEBPACK_IMPORTED_MODULE_6__["StationsPage"]]
    })
], StationsPageModule);



/***/ }),

/***/ "./src/app/nearby/stations/stations.page.scss":
/*!****************************************************!*\
  !*** ./src/app/nearby/stations/stations.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-size {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmVhcmJ5L3N0YXRpb25zL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcbmVhcmJ5XFxzdGF0aW9uc1xcc3RhdGlvbnMucGFnZS5zY3NzIiwic3JjL2FwcC9uZWFyYnkvc3RhdGlvbnMvc3RhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbmVhcmJ5L3N0YXRpb25zL3N0YXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLXNpemUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgLy9wYWRkaW5nOiA5cHg7XHJcbn0iLCIuaWNvbi1zaXplIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/nearby/stations/stations.page.ts":
/*!**************************************************!*\
  !*** ./src/app/nearby/stations/stations.page.ts ***!
  \**************************************************/
/*! exports provided: StationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationsPage", function() { return StationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let StationsPage = class StationsPage {
    constructor(commonService, ajaxService, activatedRoute, location) {
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.proxyCROS = "https://cors-anywhere.herokuapp.com/";
        this.isOnline = true;
        this.calcDist = function (destLat, destLng) {
            const radlat1 = Math.PI * this.lat / 180;
            const radlat2 = Math.PI * destLat / 180;
            const theta = this.lng - destLng;
            const radtheta = Math.PI * theta / 180;
            let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            dist = dist * 1.609344;
            return dist;
        };
        this.getPlaceDetails = (type) => {
            // const url = serverUrl.web + '/login/getPreferences?key=armoronNearByKey&companyId=""'
            // this.ajaxService.ajaxGetPerference(url)
            // .subscribe(res => {
            //     let headerType;
            //     if (type === "Fuel") {
            //       this.searchType = "gas_station";
            //       this.searchUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.lat + ',' + this.lng + '&radius=7000&type=' + this.searchType + '&key=' + res[0] + '&sensor=true';
            //       //   { Old Key : AIzaSyA7SR8EayaN2qjiaUZbH9hUBz1G1VZy3sk}
            //     } else if (type === "Vehicle Repair") {
            //       this.searchType = "car_repair";
            //       this.searchUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.lat + ',' + this.lng + '&radius=7000&type=' + this.searchType + '&keyword=Automobiles|Bikes|Mechanic&key=' + res[0] + '&sensor=true';
            //     } else if (type === "Police Station") {
            //       this.searchType = "police";
            //       this.searchUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.lat + ',' + this.lng + '&radius=7000&type=' + this.searchType + '&key=' + res[0] + '&sensor=true';
            //     }
            //     this.commonService.presentLoader();
            //  //  let senderData = this.proxyCROS + this.searchUrl;
            //     let senderData = this.searchUrl;
            //     this.ajaxService.ajaxGet(senderData)
            //       .subscribe(res => {
            //         this.commonService.dismissLoader();
            //         // this.commonService.presentToast(res)
            //         this.setResultantPlaceDetails(res);
            //       }, err => {
            //         console.log(err);
            //         this.commonService.dismissLoader();
            //         // this.commonService.presentToast(err)
            //       });
            //   });
            if (type === "Fuel") {
                this.searchType = "gas_station";
            }
            else if (type === "Vehicle Repair") {
                this.searchType = "car_repair";
            }
            else if (type === "Police Station") {
                this.searchType = "police";
            }
            var googleUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/login/nearby/' + this.lat + '/' + this.lng + '/' + this.searchType;
            this.commonService.presentLoader();
            this.ajaxService.ajaxGet(googleUrl).subscribe(res => {
                // console.log(res)
                this.commonService.dismissLoader();
                this.setResultantPlaceDetails(res);
            });
        };
        this.setResultantPlaceDetails = (res) => {
            //console.log(res);
            this.resultantNearByPlaceDetails = res;
            let resultedArray = [];
            if (res.status == 'OVER_QUERY_LIMIT' || res.status == "REQUEST_DENIED") {
                this.commonService.presentAlert('Alert', 'Something went wrong');
                this.headerText = this.nearbyType;
                this.key[this.nearbyType][0]['results'] = null;
                this.key[this.nearbyType][0]['status'] = null;
                this.key[this.nearbyType][0]['updater'] = false;
                localStorage.setItem(this.paramVin, JSON.stringify(this.key));
            }
            else {
                for (var x = 0; x < res.results.length; x++) {
                    res.results[x] = {
                        "geometry": res.results[x].geometry,
                        "name": res.results[x].name,
                        "place_id": res.results[x].place_id,
                        "vicinity": res.results[x].vicinity,
                        "opening_hours": res.results[x].opening_hours
                    };
                    // if(!res.results[x].hasOwnProperty('opening_hours')){
                    //   res.results[x].status = "assets/notava.png";
                    // }else{
                    //   switch(res.results[x].opening_hours.open_now){
                    //     case true:
                    //     res.results[x].status = "assets/open.png";
                    //     case false:
                    //     res.results[x].status = "assets/close.png";
                    //     default : 
                    //     res.results[x].status = "assets/notava.png";
                    //   }
                    if (res.results[x].hasOwnProperty("opening_hours") && res.results[x].opening_hours) {
                        if (Object.keys(res.results[x].opening_hours).length == 0) {
                            res.results[x].status = "assets/notava.png";
                        }
                        else if (res.results[x]['opening_hours']['open_now'] == true) {
                            res.results[x].status = "assets/open.png";
                        }
                        else {
                            res.results[x].status = "assets/close.png";
                        }
                    }
                    else {
                        res.results[x].status = "assets/notava.png";
                    }
                    //    } 
                }
                let response = {
                    "status": res.status,
                    "results": res.results
                };
                Object.assign(this.key[this.nearbyType][0], response);
                this.headerText = this.nearbyType;
                this.key[this.nearbyType][0]['updater'] = true;
                localStorage.setItem(this.paramVin, JSON.stringify(this.key));
            }
            this.resultantNearByPlaceDetails = res.results;
            this.commonService.dismissLoader();
        };
        this.checkStatus = function (obj) {
            let img;
            if (!obj.hasOwnProperty('opening_hours') || Object.keys(obj).length == 0) {
                img = "assets/notava.png";
            }
            else {
                if (obj.hasOwnProperty('opening_hours').open_now == true) {
                    img = "assets/open.png";
                }
                else {
                    img = "assets/close.png";
                }
            }
        };
        this.locationSelected = function (placeName, placeAddress) {
            const latlong = this.lat + ',' + this.lng;
            window.location.href = 'https://www.google.com/maps/dir/?api=1&origin=' + latlong + '&destination=' + placeName + ',' + placeAddress + '&travelmode=driving';
        };
        this.contactSelected = function (placeId) {
            this.commonService.presentLoader();
            // const url = "https://maps.googleapis.com/maps/api/place/details/json?key='" + "AIzaSyA1Imewe0nOi5KoTk9thUxblLdQ-JeB6VQ"+ "'&placeid='" + placeId;
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/login/placeid/' + placeId;
            this.ajaxService.ajaxGet(url)
                .subscribe(res => {
                this.commonService.dismissLoader();
                let phoneNumber = res.result.formatted_phone_number;
                if (res.status == 'OVER_QUERY_LIMIT' || phoneNumber == 'OVER_QUERY_LIMIT') {
                    this.commonService.presentAlert('Alert', 'Something went wrong');
                }
                if (phoneNumber === undefined) {
                    this.commonService.presentAlert('Alert', 'Sorry,Contact is Not Available');
                }
                else {
                    window.location.href = "tel:" + phoneNumber;
                }
            }, err => {
                console.log(err);
                this.commonService.dismissLoader();
            });
        };
    }
    locationBack() {
        this.location.back();
    }
    ngOnInit() {
        let selectedVin = JSON.parse(localStorage.getItem('selectedVin'));
        this.paramVin = selectedVin.vin;
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["app"].appName;
        this.lat = selectedVin.latitude;
        this.lng = selectedVin.longitude;
        this.nearbyType = this.activatedRoute.snapshot.paramMap.get('type');
        if (this.key == null) {
            this.key = {};
            this.key[this.nearbyType] = [{ "prevLatlng": this.lat + ',' + this.lng }];
            this.getPlaceDetails(this.nearbyType);
        }
        else if (this.key[this.nearbyType] == undefined || this.key[this.nearbyType][0]['results'] == null) {
            this.key[this.nearbyType] = [{ "prevLatlng": this.lat + ',' + this.lng }];
            this.getPlaceDetails(this.nearbyType);
        }
        else if (this.key !== null && this.key[this.nearbyType][0]['prevLatlng'] == this.lat + ',' + this.lng && this.key[this.nearbyType][0]['updater'] == true) {
            this.setResultantPlaceDetails(this.key[this.nearbyType][0]);
        }
        else {
            this.key[this.nearbyType][0].prevLatlng = this.lat + ',' + this.lng;
            this.getPlaceDetails(this.nearbyType);
        }
    }
};
StationsPage.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
];
StationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stations',
        template: __webpack_require__(/*! raw-loader!./stations.page.html */ "./node_modules/raw-loader/index.js!./src/app/nearby/stations/stations.page.html"),
        styles: [__webpack_require__(/*! ./stations.page.scss */ "./src/app/nearby/stations/stations.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
], StationsPage);



/***/ })

}]);
//# sourceMappingURL=nearby-stations-stations-module-es2015.js.map