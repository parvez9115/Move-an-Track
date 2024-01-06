(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      PDF Download\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-input [(ngModel)]=\"downloadUrl\"></ion-input>\r\n  </ion-item>\r\n  <ion-button (click)=\"downloadFile()\" [disabled]=\"downloadUrl == ''\" expand=\"full\">\r\n    <ion-icon name=\"download\" slot=\"start\"></ion-icon> Download from url\r\n  </ion-button>\r\n\r\n  <ion-row>\r\n    <ion-col size=4>\r\n      <ion-button (click)=\"downloadFile(pdfUrl)\" expand=\"full\">\r\n        <ion-icon name=\"download\" slot=\"start\"></ion-icon> pdf\r\n      </ion-button>\r\n      <ion-button (click)=\"downloadFromHtml(pdfUrl)\" expand=\"full\">\r\n        <ion-icon name=\"download\" slot=\"start\"></ion-icon> PDF HTML\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row id=\"parentdiv\">\r\n    jkdscjd\r\n  </ion-row>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: File_Key, HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File_Key", function() { return File_Key; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");









var Filesystem = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Filesystem, Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Storage;
var File_Key = 'files';
var HomePage = /** @class */ (function () {
    function HomePage(fileOpener, ajaxServices, commonService) {
        this.fileOpener = fileOpener;
        this.ajaxServices = ajaxServices;
        this.commonService = commonService;
        this.myFiles = [];
        this.pdfUrl = "https://file-examples-com.github.io/uploads/2017/10/file-example_PDF_500_kB.pdf";
        this.loadFile();
    }
    HomePage.prototype.loadFile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var videoList;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Storage.get({
                            key: File_Key
                        })];
                    case 1:
                        videoList = _a.sent();
                        this.myFiles = JSON.parse(videoList.value) || [];
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getMimetype = function (name) {
        if (name.indexOf('pdf') >= 0) {
            return 'application/pdf';
        }
        else if (name.indexOf('png') >= 0) {
            return 'image/png';
        }
        else if (name.indexOf('mp4') >= 0) {
            return 'video/png';
        }
    };
    HomePage.prototype.downloadFile = function (url) {
        var _this = this;
        this.downloadUrl = url ? url : this.downloadUrl;
        this.ajaxServices.ajaxGetFile(this.downloadUrl)
            .subscribe(function (event) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var name_1, base64, savedFile, path, mimeType;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].DownloadProgress)) return [3 /*break*/, 1];
                        this.downloadprogress = Math.round((100 * event.loaded) / event.total);
                        return [3 /*break*/, 3];
                    case 1:
                        if (!(event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response)) return [3 /*break*/, 3];
                        this.downloadprogress = 0;
                        name_1 = url.substr(url.lastIndexOf('/') + 1);
                        base64 = "data:text/html;charset=UTF-8,<h4 style=%22color: %23000; %22>Hello world!</h4>";
                        return [4 /*yield*/, Filesystem.writeFile({
                                path: name_1,
                                data: base64,
                                directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["FilesystemDirectory"].Documents
                            })];
                    case 2:
                        savedFile = _a.sent();
                        console.log('Saved:' + savedFile.uri);
                        path = savedFile.uri;
                        mimeType = this.getMimetype(name_1);
                        this.fileOpener.open(path, mimeType)
                            .then(function () { return console.log('file open'); })
                            .catch(function (err) { return console.log('Error', err); });
                        this.myFiles.unshift(path);
                        Storage.set({
                            key: File_Key,
                            value: JSON.stringify(this.myFiles)
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    HomePage.prototype.downloadFromHtml = function () {
        // parentdiv is the html element which has to be converted to PDF
        html2canvas__WEBPACK_IMPORTED_MODULE_6___default()(document.getElementById("parentdiv")).then(function (canvas) {
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_5__["jsPDF"]('p', 'pt', [canvas.width, canvas.height]);
            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            pdf.addImage(imgData, 0, 0, canvas.width, canvas.height);
            pdf.save('converteddoc.pdf');
            // var doc = new jsPDF('p', 'mm', 'a4');
            // var specialElementHandlers = {
            //   '#editor': function (element, renderer) {
            //     return true;
            //   }
            // };
            //   var ffg = "<html><head><title>Report Downloading</title> <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'/></head><style>table {border-collapse: collapse;width: 100% ;font-size: 11px;}th {background-color: #CCCCCC }td {background-color: white;}th, td {text-align: left;padding: 8pxborder: 1px solid black;}tr:nth-child(even){background-color: #f2f2f2 !important}</style><body style='font-family: KacstOffice,tahoma,arial,verdana,sans-serif ;font-size: 11px  !important'><br/><br/><br/><table width='100%' border='1'><thead><tr><th>ع ع</th><th>بدأ</th><th>موقع البدأ</th><th>انتهي</th><th>موقع الانتهاء</th><th>مدة التشغيل</th> <th>مدة التوقف</th> <th>مدة عمل المحرك بدونحركة</th><th>مدة السحب</th><th>عداد المسافة</th><th>Maximum Speed</th><th>اسم السائق</th></tr></thead></table></body></html>"
            //   doc.text(30,30,"s")
            //   doc.save('sample-file.pdf');
            // }
        });
    };
    ;
    HomePage.ctorParameters = function () { return [
        { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__["FileOpener"] },
        { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_7__["AjaxService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__["FileOpener"],
            _services_ajax_service__WEBPACK_IMPORTED_MODULE_7__["AjaxService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map