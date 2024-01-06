(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dealer-hierarchy-dealer-hierarchy-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/dealer-hierarchy/dealer-hierarchy.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/dealer-hierarchy/dealer-hierarchy.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Dealer Hierarchy</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> \n  <jqxTreeGrid [pageable]=true [pageSizeOptions]=\"page\" [theme]=\"'material'\"  [filterable]=\"true\" [sortable]=\"true\" [height]=\"'auto'\" [width]=\"'100%'\"   [source]=\"dataAdapter\"  [columns]=\"columns\">\n  </jqxTreeGrid>\n</ion-content>\n  <!-- <jqxGrid *ngIf='show' #myGrid [selectionmode]=\"'checkbox'\" (onRowselect)=\"myGridOnRowSelect($event)\"\n    [theme]=\"'material'\" [width]=\"'99.5%'\" [autoheight]=\"true\" [source]=\"dataAdapter\" [columns]=\"columns\"\n    [sortable]=\"true\" [filterable]=\"true\" [columns]=\"columns\" [columnsresize]=\"true\" [enabletooltips]=\"true\"\n    [pageable]=\"true\" [showfilterrow]=\"true\"\n    style=\"font-size:16px;text-align: center !important;margin:auto;cursor:pointer\">\n  </jqxGrid> -->"

/***/ }),

/***/ "./src/app/delar-application/dealer-hierarchy/dealer-hierarchy.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/delar-application/dealer-hierarchy/dealer-hierarchy.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DealerHierarchyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerHierarchyPageModule", function() { return DealerHierarchyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dealer_hierarchy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dealer-hierarchy.page */ "./src/app/delar-application/dealer-hierarchy/dealer-hierarchy.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");








const routes = [
    {
        path: '',
        component: _dealer_hierarchy_page__WEBPACK_IMPORTED_MODULE_6__["DealerHierarchyPage"]
    }
];
let DealerHierarchyPageModule = class DealerHierarchyPageModule {
};
DealerHierarchyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_dealer_hierarchy_page__WEBPACK_IMPORTED_MODULE_6__["DealerHierarchyPage"]]
    })
], DealerHierarchyPageModule);



/***/ }),

/***/ "./src/app/delar-application/dealer-hierarchy/dealer-hierarchy.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/delar-application/dealer-hierarchy/dealer-hierarchy.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2RlYWxlci1oaWVyYXJjaHkvZGVhbGVyLWhpZXJhcmNoeS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/delar-application/dealer-hierarchy/dealer-hierarchy.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/delar-application/dealer-hierarchy/dealer-hierarchy.page.ts ***!
  \*****************************************************************************/
/*! exports provided: DealerHierarchyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerHierarchyPage", function() { return DealerHierarchyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jqwidgets_ng_jqxtreegrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jqwidgets-ng/jqxtreegrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxtreegrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");






let DealerHierarchyPage = class DealerHierarchyPage {
    constructor(ajaxService, commonService) {
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.page = [];
    }
    getData() {
        this.commonService.presentLoader();
        this.page = [];
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + '/global/getAllDealerSubDealer';
        this.ajaxService.ajaxGet(url).subscribe(res => {
            this.commonService.dismissLoader();
            this.page = ["1000"];
            this.source =
                {
                    dataFields: [
                        {
                            name: 'sno',
                            type: 'number'
                        },
                        {
                            name: 'dealername',
                            type: 'string'
                        }, {
                            name: 'companyId',
                            type: 'string'
                        }, {
                            name: 'contactNo',
                            type: 'string'
                        },
                        {
                            name: 'dateCreated',
                            type: 'string'
                        },
                        {
                            name: 'maindealer',
                            type: 'string'
                        }, {
                            name: 'emailAddress',
                            type: 'string'
                        },
                        {
                            name: 'subdealer',
                            type: 'array'
                        }, {
                            name: 'expanded'
                        }
                    ],
                    hierarchy: {
                        root: 'subdealer'
                    },
                    id: 'dealername',
                    localData: res
                };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            this.renderer = (row, column, value) => {
                console.log(row, '>>>', column, '>>>>>', value);
                if (value == "" || null || undefined) {
                    return "--";
                }
                else {
                    return '<span  style="font-family:VERDANA;line-height:32px;font-size:15px;color:darkblue;margin:auto;padding:0px 5px;text-align:center">' + value + '</span>';
                }
            };
            this.columns =
                [
                    {
                        text: 'S NO',
                        align: 'center',
                        dataField: 'sno',
                        cellsrenderer: this.renderer,
                        cellsalign: 'center',
                        width: 100
                    },
                    {
                        text: 'DEALER NAME',
                        align: 'center',
                        dataField: 'dealername',
                        cellsrenderer: this.renderer,
                        cellsalign: 'center',
                        width: 200
                    },
                    {
                        text: 'COMPANY ID',
                        align: 'center',
                        dataField: 'companyId',
                        cellsrenderer: this.renderer,
                        cellsalign: 'center',
                        width: 200
                    },
                    {
                        text: 'USER ID',
                        align: 'center',
                        dataField: 'emailAddress',
                        cellsrenderer: this.renderer,
                        cellsalign: 'center',
                        width: 200
                    },
                    {
                        text: 'CONTACT NO',
                        align: 'center',
                        dataField: 'contactNo',
                        cellsrenderer: this.renderer,
                        cellsalign: 'center',
                        width: 200
                    }, {
                        text: 'CREATED DATE',
                        align: 'center',
                        dataField: 'dateCreated',
                        cellsrenderer: this.renderer,
                        cellsalign: 'center',
                        width: 200
                    },
                    {
                        text: 'MAIN DEALER',
                        align: 'center',
                        dataField: 'maindealer',
                        cellsrenderer: this.renderer,
                        cellsalign: 'center',
                        width: 200
                    }
                ];
            this.ready = () => {
                this.treeGrid.expandRow(32);
            };
        });
        // var A = [{
        //                 "ID": 1,
        //                 "Employee_Name": "Amit",
        //                 "Company": "GeeksforGeeks",
        //                 "Designation": "Content Writer",
        //                 "expanded": true,
        //                 A1: [{
        //                     "ID": 2,
        //                     "Employee_Name": "Sumit",
        //                     "Company": "Amazon",
        //                     "Designation": "Software Engineer",
        //                 }, {
        //                     "ID": 3,
        //                     "Employee_Name": "Vivek",
        //                     "Company": "Apple",
        //                     "Designation": "Product Manager",
        //                     "expanded": true,
        //                     A1: [{
        //                         "ID": 4,
        //                         "Employee_Name": "Soni",
        //                         "Company": "Flipkart",
        //                         "Designation": "HR",
        //                     }]
        //                 }]
        //             }];
    }
    ngOnInit() {
        this.getData();
    }
};
DealerHierarchyPage.ctorParameters = () => [
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('treeGridReference', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxtreegrid__WEBPACK_IMPORTED_MODULE_2__["jqxTreeGridComponent"])
], DealerHierarchyPage.prototype, "treeGrid", void 0);
DealerHierarchyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dealer-hierarchy',
        template: __webpack_require__(/*! raw-loader!./dealer-hierarchy.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/dealer-hierarchy/dealer-hierarchy.page.html"),
        styles: [__webpack_require__(/*! ./dealer-hierarchy.page.scss */ "./src/app/delar-application/dealer-hierarchy/dealer-hierarchy.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"], src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], DealerHierarchyPage);



/***/ })

}]);
//# sourceMappingURL=dealer-hierarchy-dealer-hierarchy-module-es2015.js.map