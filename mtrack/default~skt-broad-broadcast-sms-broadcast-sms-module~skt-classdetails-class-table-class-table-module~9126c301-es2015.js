(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~skt-broad-broadcast-sms-broadcast-sms-module~skt-classdetails-class-table-class-table-module~9126c301"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/broad/broadcast-additional/broadcast-additional.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/broad/broadcast-additional/broadcast-additional.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <ion-row>\r\n    <ion-col size=2 style=\"padding: 15px;\">\r\n      <ion-icon name=\"arrow-back\" style=\"font-size: 20px;\" (click)=\"closeModel()\">\r\n      </ion-icon>\r\n    </ion-col>\r\n    <ion-col size=10 id=\"toolbarHeader\">\r\n      <ion-label>Broadcast SMS</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-content>\r\n   <form [formGroup]=\"broadcastdetails\">\r\n  <ion-row id=\"broad-cast-wrapper\">\r\n    <ion-col size=12>\r\n      <ion-row>\r\n        <ion-col size=4>\r\n          <ion-label>Route Type:</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"8\">\r\n         \r\n        <ion-radio-group (ionChange)=\"onChangeHandler($event)\" value=\"Route\">\r\n          <ion-radio value=\"Route\" checked></ion-radio>\r\n            <ion-label class=\"radio-label\" >Route</ion-label>\r\n            <ion-radio value=\"All\" ></ion-radio>\r\n            <ion-label class=\"radio-label\">All</ion-label>\r\n          </ion-radio-group>\r\n       </ion-col>\r\n       </ion-row>\r\n      <ion-row>\r\n        <ion-col size=4 class=\"col-center\">\r\n          <ion-label>Route Name:</ion-label >\r\n        </ion-col>\r\n        <ion-col size=8 >\r\n          <select class=\"boxsize\" style=\"height: 40px;outline: none;\" formControlName=\"routename\">\r\n            <option value= \"\" disabled>Select Route Name</option>\r\n            <option *ngFor=\"let route of routetype\"  [disabled]=\"disable\">\r\n              {{route}}\r\n            </option>\r\n          </select>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=4 class=\"col-center\">\r\n          <ion-label>Trip Type:</ion-label>\r\n        </ion-col>\r\n        <ion-col size=8 >\r\n          <select class=\"boxsize\" style=\"height: 40px;outline: none;\" formControlName=\"triptype\">\r\n           <option *ngFor=\"let type of type\"  >\r\n              {{type}}\r\n            </option>\r\n          </select>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=4 style=\"line-height: 40px;\">\r\n          <ion-label>Message:</ion-label>\r\n        </ion-col>\r\n        <ion-col size=8>\r\n          <ion-textarea class=\"boxsize\" style=\"padding-left: 2px;\" formControlName=\"message\"></ion-textarea>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=6 style=\"text-align: end;\">\r\n          <ion-button style=\"height: 90%;\" shape=\"round\" (click)=\"onSubmit(broadcastdetails)\" [disabled]=\"!broadcastdetails.valid\">Submit</ion-button>\r\n        </ion-col>\r\n        <ion-col size=6>\r\n          <ion-button style=\"height: 90%;\" shape=\"round\" fill=\"outline\"  (click)=\"closeModel()\">Cancel</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n  </form>\r\n  </ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/classdetails/class-additional/class-additional.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/classdetails/class-additional/class-additional.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"1\"><ion-icon name=\"arrow-back\" style=\"float: right;color: gray;font-size: 25px; margin:0px auto;\" (click)=\"closeModal()\"></ion-icon></ion-col>\r\n      <ion-col size=\"11\"><ion-title  class=\"popup-head\">Class Details</ion-title></ion-col>\r\n    </ion-row> \r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n\r\n<div class=\"class-container\">\r\n  <form [formGroup]=\"classDetails\">\r\n<ion-row>\r\n    <ion-col size=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\"  style=\"margin:auto\">\r\n     <ion-list lines=\"none\" style=\"background:transparent;\">\r\n       <ion-item  class=\"stu-items\">\r\n        <ion-img src=\"assets/student_Details/classroom.svg\" slot=\"start\"  style=\"width: 35px;height: 26px;\" class=\"stu-icon\"></ion-img>\r\n         <ion-input placeholder=\"Enter Class Id  ( Mandatory )\" [disabled]=\"editTextbox\" class=\"stu-input\" formControlName='classId'></ion-input>\r\n       </ion-item>\r\n       <ion-item  class=\"stu-items\">\r\n        <ion-img src=\"assets/student_Details/classroom.svg\" slot=\"start\"  style=\"width: 35px;height: 26px;\" class=\"stu-icon\"></ion-img>\r\n          <ion-input placeholder=\"Enter Section Id  ( Mandatory )\" [disabled]=\"editTextbox\"  class=\"stu-input\" formControlName='sectionId'></ion-input>\r\n      </ion-item>\r\n      <ion-item  class=\"stu-items\">\r\n        <ion-img src=\"assets/student_Details/maths.svg\" slot=\"start\"  style=\"width: 35px;height: 26px;\" class=\"stu-icon\"></ion-img>\r\n         <ion-input placeholder=\"Enter Tutor\" class=\"stu-input\" formControlName='Tutor'></ion-input>\r\n     </ion-item>\r\n     <ion-item  class=\"stu-items\">\r\n      <ion-icon name=\"paper\" class=\"stu-icon\"></ion-icon>\r\n       <ion-input placeholder=\"Enter Class Description\" class=\"stu-input\" formControlName='classDescription'></ion-input>\r\n   </ion-item>\r\n     </ion-list>\r\n    </ion-col>\r\n    \r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col style=\"margin:auto;text-align: center;\">\r\n     <div >\r\n      <ion-button  shape=\"round\" color=\"primary\"  class=\"stu-btn\" (click)='onSubmit()' [disabled]=\"!classDetails.valid\">submit</ion-button>\r\n        <ion-button  type=\"reset\" fill=\"outline\" shape=\"round\" color=\"primary\"  class=\"stu-btn\" >clear</ion-button>\r\n    </div>\r\n  </ion-col>\r\n  </ion-row>\r\n</form>\r\n</div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/enable/enable-additional/enable-additional.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/enable/enable-additional/enable-additional.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"height: 100px;\">\r\n  <ion-toolbar class=\"toolbar-style\">\r\n    <ion-row>\r\n      <ion-col size=\"1\">\r\n        <ion-icon name=\"arrow-back\" style=\"float: right;font-size: 25px; margin:0px auto;\" (click)=\"closeModal()\">\r\n        </ion-icon>\r\n      </ion-col>\r\n      <ion-col size=\"11\" *ngIf=\"myPlatform == 'desktop'\">\r\n        <ion-title class=\"popup-head\">School Date</ion-title>\r\n      </ion-col>\r\n      <ion-col size=\"10\" *ngIf=\"myPlatform != 'desktop'\">\r\n        <ion-title class=\"popup-head\">School Date</ion-title>\r\n      </ion-col>\r\n      <ion-col size=\"1\" *ngIf=\"myPlatform != 'desktop'\">\r\n        <ion-icon *ngIf='value != undefined && isDeleteShow == true' name=\"trash\" style=\"font-size: 20px;\"\r\n          (click)=\"delete()\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<div class=\"enable-container\">\r\n  <form [formGroup]=\"enableLogin\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"margin:auto\">\r\n        <ion-list lines=\"none\" style=\"background:transparent;\">\r\n          <ion-row>\r\n            <ion-col size=\"4\" class=\"align-self\">\r\n              Type :\r\n            </ion-col>\r\n            <ion-col size=\"8\">\r\n              <select class=\"enable-input\" formControlName=\"type\">\r\n                <option value=\"\" disabled selected hidden class=\"option-head\"> Select any One Option</option>\r\n                <option *ngFor=\"let items of type2\" [value]=\"items\">{{items}}</option>\r\n              </select>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"4\" class=\"align-self\">From Date :</ion-col>\r\n            <ion-col size=\"8\">\r\n              <input type=\"date\" class=\"date-input\" formControlName=\"fromDate\" [max]=\"date\" displayFormat=\"MMM DD, YYYY\"\r\n                pickerFormat=\"MMM DD, YYYY\" />\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"4\" class=\"align-self\">To Date :</ion-col>\r\n            <ion-col size=\"8\">\r\n              <input type=\"date\" class=\"date-input\" formControlName=\"toDate\" [max]=\"date\" displayFormat=\"MMM DD, YYYY\"\r\n                pickerFormat=\"MMM DD, YYYY\" />\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"4\" class=\"align-self\">Reason :</ion-col>\r\n            <ion-col size=\"8\">\r\n              <ion-textarea style=\"border: 1px solid #e6e6e6;\r\n            background: white;\" maxLength=\"80\" placeholder=\"Enter the Reason\" formControlName=\"reason\"></ion-textarea>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col style=\"margin:auto;text-align: center;\">\r\n        <div>\r\n          <ion-button shape=\"round\" color=\"primary\" class=\"enable-btn\" (click)=\"onSubmit(enableLogin)\"\r\n            [disabled]=\"!enableLogin.valid\">submit</ion-button>\r\n          <ion-button type=\"reset\" fill=\"outline\" shape=\"round\" color=\"primary\" class=\"enable-btn\">clear</ion-button>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</div>\r\n<!----------SchoolEnable/disableDetailsEnd--------->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/gate/gate-additional/gate-additional.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/gate/gate-additional/gate-additional.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!---------- GateDetails ------------>\r\n<ion-header style=\"height: 100px;\">\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"1\"><ion-icon name=\"arrow-back\" style=\"float: right;color: gray;font-size: 25px; margin:0px auto;\" (click)=\"closeModal()\"></ion-icon></ion-col>\r\n      <ion-col size=\"11\"><ion-title  class=\"popup-head\">Gate Details</ion-title></ion-col>\r\n    </ion-row> \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<div class=\"gate-container\">\r\n  <form [formGroup]=\"gateLogin\">\r\n  <ion-row >\r\n    <ion-col size=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"margin:auto\">\r\n      <ion-list lines=\"none\" style=\"background:transparent;\">\r\n        <ion-item class=\"gate-items\">\r\n          <ion-img src=\"assets/student_Details/gate.svg\" class=\"stu-col1-img\"></ion-img>\r\n          <ion-input type=\"text\" placeholder=\"Gate Name  ( Mandatory )\" formControlName=\"gatename\"  class=\"gate-input\"></ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"gate-items\">\r\n         <ion-img src=\"assets/student_Details/iconmonstr-location-1.svg\" class=\"stu-col1-img\"></ion-img>\r\n          <ion-input type=\"text\" placeholder=\"Location  ( Mandatory )\" formControlName=\"location\" class=\"gate-input\" ></ion-input>\r\n        </ion-item>\r\n  \r\n        <ion-item class=\"gate-items\">\r\n          <ion-img src=\"assets/student_Details/edit-list.svg\" class=\"stu-col1-img\"></ion-img>\r\n          <ion-input type=\"text\" placeholder=\"Description\"   formControlName=\"description\" class=\"gate-input require\" ></ion-input>\r\n        </ion-item>\r\n        \r\n        <ion-item class=\"gate-items\">\r\n          <ion-img src=\"assets/student_Details/imei.svg\" class=\"stu-col1-img\"></ion-img>\r\n          <ion-input type=\"number\" placeholder=\"Device IMEI ( Mandatory )\" formControlName=\"deviceIMEI\"  class=\"gate-input\"></ion-input>\r\n        </ion-item>\r\n        </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n  \r\n<ion-row>\r\n  <ion-col style=\"margin:auto;text-align: center;\">\r\n    <div>\r\n      <ion-button  shape=\"round\" color=\"primary\" class=\"gate-btn\" (click)=\"onSubmit()\" [disabled]=\"!gateLogin.valid\">submit</ion-button>\r\n      <ion-button type=\"reset\" fill=\"outline\" shape=\"round\" color=\"primary\" class=\"gate-btn\">clear</ion-button>\r\n    </div>\r\n  </ion-col>\r\n</ion-row>\r\n</form>  \r\n</div>\r\n<!----------GateDetailsEnd--------->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/latlong/latlong.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/latlong/latlong.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"2\"\r\n        ><ion-icon\r\n          name=\"arrow-back\"\r\n          style=\"font-size: 25px\"\r\n          (click)=\"cancelBtn()\"\r\n        ></ion-icon\r\n      ></ion-col>\r\n      <ion-col size=\"7\"\r\n        ><ion-title style=\"text-align: center; margin: 10px 0px 0px 0px\"\r\n          >Location Picker</ion-title\r\n        ></ion-col\r\n      >\r\n      <ion-col size=\"2\"\r\n        ><ion-button style=\"text-align: center\" (click)=\"submit()\"\r\n          >Done</ion-button\r\n        >\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-col size=\"6\" style=\"position: absolute; z-index: 12; top: 9%\">\r\n    <ion-searchbar\r\n      showCancelButton=\"never\"\r\n      [(ngModel)]=\"address\"\r\n      (ionChange)=\"getAddressLatlng(address)\"\r\n      placeholder=\"Search\"\r\n    ></ion-searchbar>\r\n  </ion-col>\r\n  <div id=\"latlong\" style=\"height: 90%\" #mapElement></div>\r\n  <ion-row>\r\n    <ion-col size=\"6\">\r\n      <ion-row>\r\n        <ion-col size=\"8\"> Latitude </ion-col>\r\n        <ion-col size=\"4\">\r\n          {{ latitude }}\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-row>\r\n        <ion-col size=\"8\"> Longitude </ion-col>\r\n        <ion-col size=\"4\">\r\n          {{ longitude }}\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/parent/parent-additional/parent-additional.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/parent/parent-additional/parent-additional.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!----------ParentDetails------------>\r\n\r\n<ion-header style=\"height: 100px;\">\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"1\"><ion-icon name=\"arrow-back\" style=\"float: right;color: gray;font-size: 25px; margin:0px auto;\"\r\n          (click)=\"closeModal()\"></ion-icon></ion-col>\r\n      <ion-col size=\"11\"><ion-title class=\"popup-head\">Parent Details</ion-title></ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<div class=\"parent-container\">\r\n  <form [formGroup]=\"parentLogin\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"margin:auto\">\r\n        <ion-list lines=\"none\" style=\"background:transparent;\">\r\n          <ion-item class=\"parent-items\">\r\n            <ion-icon name=\"phone-portrait\" slot=\"start\" class=\"parent-icon\"></ion-icon>\r\n            <ion-input type=\"number\" placeholder=\"Contact No  ( Mandatory )\" formControlName=\"contactno\"\r\n              class=\"parent-input\"></ion-input>\r\n          </ion-item>\r\n          <!-- <ion-item class=\"parent-items\" style=\"--background:#d2d2d2\" [disabled]=\"true\">\r\n          <ion-img src=\"assets/student_Details/parents.svg\" class=\"stu-col1-img\" ></ion-img>\r\n          <ion-input type=\"text\" placeholder=\"Parent\"   class=\"parent-input\"  ></ion-input>\r\n        </ion-item>\r\n   -->\r\n          <ion-item class=\"parent-items\">\r\n            <ion-img src=\"assets/student_Details/parent.svg\" class=\"stu-col1-img\"></ion-img>\r\n            <ion-input type=\"text\" placeholder=\"Enter First Name  ( Mandatory )\" formControlName=\"parentName\" required\r\n              class=\"parent-input\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"parent-items\">\r\n            <ion-icon name=\"contacts\" slot=\"start\" class=\"parent-icon\"></ion-icon>\r\n            <ion-input type=\"text\" placeholder=\"Enter Last Name  ( Mandatory )\" formControlName=\"lastName\" required\r\n              class=\"parent-input\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"parent-items\">\r\n            <ion-icon name=\"mail\" class=\"parent-icon\"></ion-icon>\r\n            <ion-input type=\"email\" placeholder=\"Enter Email Id \" class=\"parent-input\"\r\n              formControlName=\"emailaddress\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"parent-items\">\r\n            <ion-icon name=\"paper\" class=\"parent-icon\"></ion-icon>\r\n            <ion-input type=\"text\" placeholder=\"Enter Address\" class=\"parent-input\"\r\n              formControlName=\"address\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"parent-items\">\r\n            <ion-icon name=\"map\" slot=\"start\" class=\"parent-icon\"></ion-icon>\r\n            <ion-input type=\"text\" placeholder=\"Enter City\" formControlName=\"city\" class=\"parent-input\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"parent-items\">\r\n            <ion-img src=\"assets/student_Details/enterstate.svg\" class=\"stu-col1-img\"></ion-img>\r\n            <ion-input type=\"text\" placeholder=\"Enter State\" formControlName=\"state\" class=\"parent-input\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"parent-items\">\r\n            <ion-icon name=\"pin\" slot=\"start\" class=\"parent-icon\"></ion-icon>\r\n            <ion-input type=\"number\" placeholder=\"Enter Pincode\" formControlName=\"pincode\"\r\n              class=\"parent-input\"></ion-input>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col style=\"margin:auto;text-align: center;\">\r\n        <div>\r\n          <ion-button shape=\"round\" color=\"primary\" class=\"parent-btn\" (click)=\"onSubmit(parentLogin)\"\r\n            [disabled]=\"!parentLogin.valid\">submit</ion-button>\r\n          <ion-button type=\"reset\" fill=\"outline\" shape=\"round\" color=\"primary\" class=\"parent-btn\">clear</ion-button>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</div>\r\n<!----------ParentDetailsEnd--------->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/route/add-bus-stop/add-bus-stop.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/route/add-bus-stop/add-bus-stop.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Bus Stop Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row\n    ><ion-col\n      ><jqxGrid\n        [pageable]=\"true\"\n        [selectionmode]=\"'singlerow'\"\n        [filterable]=\"true\"\n        [showfilterrow]=\"true\"\n        [sortable]=\"true\"\n        [width]=\"'100%'\"\n        [source]=\"dataAdapter\"\n        [columns]=\"columns\"\n        [autoheight]=\"true\"\n        [theme]=\"'material'\"\n        #myGrid\n        style=\"font-size: 16px; text-align: center !important\"\n      >\n      </jqxGrid></ion-col\n  ></ion-row>\n\n  <ion-row>\n    <ion-col style=\"text-align: center\">\n      <ion-button\n        color=\"primary\"\n        size=\"small\"\n        class=\"table-btn\"\n        (click)=\"submit()\"\n        >Submit</ion-button\n      >\n      <ion-button\n        color=\"primary\"\n        size=\"small\"\n        class=\"table-btn\"\n        (click)=\"cancelBtn()\"\n        >Cancel</ion-button\n      >\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/route/bus-stop/bus-stop.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/route/bus-stop/bus-stop.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!------Bus-stop-details Start-------->\r\n\r\n<ion-header style=\"zoom: 75%\">\r\n  <ion-toolbar>\r\n    <ion-row id=\"toolbar-header\">\r\n      <ion-col size=\"1\"\r\n        ><ion-icon\r\n          name=\"arrow-back\"\r\n          style=\"\r\n            border-radius: 50%;\r\n            float: none;\r\n            color: gray;\r\n            font-size: 38px;\r\n            margin: 0px auto;\r\n            margin-left: 5px;\r\n            background: white;\r\n            background-color: white;\r\n            line-height: 32px;\r\n            margin-top: 11px;\r\n          \"\r\n          (click)=\"getBack()\"\r\n        ></ion-icon\r\n      ></ion-col>\r\n      <ion-col size=\"10\">\r\n        <ion-title style=\"text-align: center\">\r\n          <h1\r\n            style=\"\r\n              color: #3880ff;\r\n              font-size: 30px;\r\n              font-weight: 600;\r\n              margin: 10px auto;\r\n            \"\r\n          >\r\n            Bus Stop Details\r\n          </h1>\r\n          <h1>{{ value.routeName }}</h1>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"bus-container\">\r\n    <ion-row>\r\n      <ion-col\r\n        size=\"12\"\r\n        size-sm=\"12\"\r\n        size-md=\"12\"\r\n        size-lg=\"7.9\"\r\n        id=\"set-map-col\"\r\n      >\r\n        <ion-row>\r\n          <ion-col size=\"12\"\r\n            ><ion-title\r\n              style=\"margin-left: -22px; margin-top: -5px\"\r\n              class=\"popup-head\"\r\n              >{{ value.trip }} Stop History</ion-title\r\n            ></ion-col\r\n          >\r\n        </ion-row>\r\n        <ion-col\r\n          *ngIf=\"myPlatform == 'desktop'\"\r\n          size=\"3\"\r\n          style=\"position: absolute; z-index: 12; top: 7%; right: 1%\"\r\n        >\r\n          <ion-searchbar\r\n            *ngIf=\"search\"\r\n            showCancelButton=\"never\"\r\n            [(ngModel)]=\"plateNo\"\r\n            (ionChange)=\"searchVehicle(plateNo)\"\r\n            placeholder=\"Search\"\r\n          ></ion-searchbar>\r\n        </ion-col>\r\n        <div\r\n          class=\"map bus-stop\"\r\n          style=\"height: 70vh !important\"\r\n          #mapElement\r\n        ></div>\r\n      </ion-col>\r\n      <ion-col\r\n        size=\"12\"\r\n        size-sm=\"12\"\r\n        size-md=\"12\"\r\n        size-lg=\"4\"\r\n        style=\"background: #eef7f9\"\r\n      >\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-title\r\n              style=\"margin-left: -22px; margin-top: -5px\"\r\n              class=\"popup-head\"\r\n              >{{ value.trip }} Stop</ion-title\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row\r\n          style=\"border: 1px solid #dedede\"\r\n          *ngIf=\"myPlatform == 'desktop'\"\r\n        >\r\n          <ion-col size=\"8\">\r\n            <ion-button\r\n              color=\"primary\"\r\n              size=\"small\"\r\n              class=\"table-btn\"\r\n              (click)=\"add()\"\r\n              >Add</ion-button\r\n            >\r\n            <ion-button\r\n              color=\"primary\"\r\n              size=\"small\"\r\n              class=\"table-btn\"\r\n              (click)=\"editMode()\"\r\n              >Edit</ion-button\r\n            >\r\n            <ion-button\r\n              color=\"primary\"\r\n              size=\"small\"\r\n              class=\"table-btn\"\r\n              (click)=\"deleteMode()\"\r\n              >Delete</ion-button\r\n            >\r\n          </ion-col>\r\n          <ion-col size=\"4\" style=\"text-align: end; display: none\">\r\n            <ion-button\r\n              color=\"primary\"\r\n              size=\"small\"\r\n              class=\"table-btns\"\r\n              (click)=\"addbusstop()\"\r\n              >Add Bus Stops</ion-button\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"grid_Container\">\r\n          <jqxGrid\r\n            (onRowselect)=\"myGridOnRowSelect($event)\"\r\n            [pageable]=\"true\"\r\n            [selectionmode]=\"'singlerow'\"\r\n            [filterable]=\"true\"\r\n            [showfilterrow]=\"true\"\r\n            [sortable]=\"true\"\r\n            [width]=\"'100%'\"\r\n            [source]=\"dataAdapter\"\r\n            [columns]=\"columns\"\r\n            [autoheight]=\"true\"\r\n            [theme]=\"'material'\"\r\n            #myGrid\r\n            style=\"font-size: 16px; text-align: center !important\"\r\n          >\r\n          </jqxGrid>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n<!----------Bus-stop-details End------------>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/route/route-addtional/route-addtional.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/route/route-addtional/route-addtional.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!----------Route-Additional Start------------>\r\n\r\n<ion-header style=\"height: 100px\">\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"1\"\r\n        ><ion-icon\r\n          name=\"arrow-back\"\r\n          style=\"float: right; color: gray; font-size: 25px; margin: 0px auto\"\r\n          (click)=\"closeModal()\"\r\n        ></ion-icon\r\n      ></ion-col>\r\n      <ion-col size=\"11\"\r\n        ><ion-title class=\"popup-head\">Stop Details</ion-title></ion-col\r\n      >\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<div class=\"route-container\">\r\n  <form [formGroup]=\"stopDetails\">\r\n    <ion-row>\r\n      <ion-col\r\n        size=\"12\"\r\n        size-sm=\"12\"\r\n        size-md=\"12\"\r\n        size-lg=\"12\"\r\n        style=\"margin: auto\"\r\n      >\r\n        <ion-list lines=\"none\" style=\"background: transparent\">\r\n          <ion-item class=\"route-items\">\r\n            <ion-icon\r\n              name=\"bus\"\r\n              style=\"color: #3880ff\"\r\n              class=\"route-icon\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"text\"\r\n              class=\"box\"\r\n              placeholder=\"Enter Bus Stop Name\"\r\n              formControlName=\"busStop\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"route-items\">\r\n            <ion-icon\r\n              name=\"map\"\r\n              style=\"color: #3880ff\"\r\n              class=\"route-icon\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"text\"\r\n              class=\"box\"\r\n              placeholder=\"Select Your Location\"\r\n              formControlName=\"latlng\"\r\n            ></ion-input>\r\n            <ion-img\r\n              (click)=\"mapLocation()\"\r\n              class=\"location\"\r\n              src=\"assets/student_Details/location.svg\"\r\n            ></ion-img>\r\n          </ion-item>\r\n          <ion-item class=\"route-items\">\r\n            <ion-icon\r\n              name=\"clock\"\r\n              style=\"color: #3880ff\"\r\n              class=\"route-icon\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"time\"\r\n              placeholder=\"Arrival Time\"\r\n              class=\"route-input\"\r\n              formControlName=\"arrivalTime\"\r\n              style=\"color: #555757\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-list>\r\n        <div style=\"margin: auto; text-align: center\">\r\n          <ion-button\r\n            type=\"submit\"\r\n            shape=\"round\"\r\n            color=\"primary\"\r\n            class=\"route-btn\"\r\n            (click)=\"submit()\"\r\n            [disabled]=\"!stopDetails.valid\"\r\n            >submit</ion-button\r\n          >\r\n          <ion-button\r\n            type=\"reset\"\r\n            fill=\"outline\"\r\n            shape=\"round\"\r\n            color=\"primary\"\r\n            class=\"route-btn\"\r\n            >clear</ion-button\r\n          >\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</div>\r\n<!----------Route-AdditionalEnd--------->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/route/route-common/route-common.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/route/route-common/route-common.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\r\n  <ion-toolbar  *ngIf=\"myPlatform =='desktop'\" >\r\n    <div class=\"route-wrapper\">\r\n      <ion-row  class=\"header-section\" *ngIf=\"myPlatform =='desktop'\">\r\n        <!--------New*********--below-------->\r\n        <ion-col size=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"0\" \r\n         *ngIf=\"page == 'Route n Trip'\"> \r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-col>  \r\n          <ion-col size=\"1\" *ngIf=\"page == 'Student details'\">\r\n            <ion-icon name=\"arrow-back\" id =\"arrow-icon\"  (click)=\"getBack()\"></ion-icon>\r\n         </ion-col>\r\n        <ion-col  size-sm=\"10\" size-md=\"10\" size-lg=\"10\" id=\"btn-wrapper\" \r\n        *ngIf=\"page == 'Student details'\" class=\"header-row\">\r\n          Route & Trip\r\n        </ion-col>\r\n        <ion-col  size-sm=\"10\" size-md=\"10\" size-lg=\"12\" id=\"btn-wrapper\" \r\n        *ngIf=\"page == 'Route n Trip'\" >\r\n          Route & Trip\r\n        </ion-col>\r\n          <!--------New*********-above--------->\r\n      </ion-row>    \r\n       <ion-row style=\"border: 1px solid #cac2c2;\" *ngIf=\"myPlatform =='desktop'\" >\r\n         <ion-col>\r\n           <ion-button color='primary' class=\"route-btn\" (click)='openRouteModel()'>Add</ion-button>\r\n           <ion-button color='primary' class=\"route-btn\" (click)='editRouteModel()'>Edit</ion-button>\r\n           <ion-button color='primary' class=\"route-btn\"(click)='deletebtn()' >Delete</ion-button>\r\n         </ion-col>\r\n        </ion-row> \r\n      </div>\r\n      \r\n      <div id=\"export-wrapper\" >\r\n          <ion-img src=\"assets/student_Details/pdf.svg\" class=\"toolbar-row\"(click)=\"createPdf()\"></ion-img>\r\n            <ion-img src=\"assets/student_Details/excel.svg\" class=\"toolbar-row\" (click)=\"exportToExcel()\"></ion-img>\r\n        </div> \r\n      </ion-toolbar>\r\n    <ion-toolbar *ngIf=\"myPlatform !=='desktop'\" color=\"primary\">\r\n      <div >\r\n        <ion-row   >\r\n          <ion-col size=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"0\"> \r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-col>  \r\n          <ion-col size=\"10\" size-sm=\"10\" size-md=\"10\" size-lg=\"12\" >\r\n            Route & Trip\r\n          </ion-col>\r\n        </ion-row>  \r\n      </div>\r\n    </ion-toolbar>\r\n    \r\n   </ion-header>\r\n    <ion-content  *ngIf=\"myPlatform =='desktop'\" style=\"height: 70vh;\"> \r\n  <div class=\"grid_Container\">\r\n  <jqxGrid\r\n  (onRowselect)=\"myGridOnRowSelect($event)\"\r\n  [pageable]=\"true\"\r\n  [selectionmode]=\"'singlerow'\"\r\n  [showfilterrow]=\"true\"\r\n  [filterable]=\"true\"\r\n  [sortable]=\"true\"\r\n  [width]=\"'100%'\"\r\n  [source]=\"dataAdapter\" \r\n  [columns]=\"columns\" \r\n  [autoheight]=\"true\"\r\n  [theme]=\"'material'\"\r\n  #myGrid \r\n  style=\"font-size:16px;text-align: center !important;\">\r\n  </jqxGrid>\r\n</div>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"myPlatform !=='desktop'\" style=\"height: 92vh;\">\r\n<!----------**************************MobileView********************************----->\r\n<ion-row>\r\n  <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"4\" *ngFor=\"let items of obj\">\r\n    <ion-card style=\"background: #e6e6e6;\" >\r\n      <ion-card-content class=\"route-card-container\">\r\n        <ion-row>\r\n          <ion-col size=\"1.5\">\r\n            <ion-fab-button class=\"fab-col-btn\" (click)=\"openBusStopModel()\">\r\n              <ion-icon name=\"map\" style=\"font-size: 14px;\"></ion-icon>\r\n            </ion-fab-button>\r\n          </ion-col>\r\n          <ion-col size=\"1.5\">\r\n            <ion-fab-button class=\"fab-col-btn\" >\r\n              <ion-icon name=\"trash\" style=\"font-size: 13px;\"></ion-icon>\r\n            </ion-fab-button>\r\n          </ion-col>\r\n          <ion-col size=\"1.5\">\r\n            <ion-fab-button class=\"fab-col-btn\" (click)=\"editRouteModel(items)\">\r\n              <ion-icon name=\"create\" style=\"font-size: 15px;\"></ion-icon> \r\n             </ion-fab-button>   \r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-card  id=\"inner-route-card\">\r\n          <ion-row style=\"background-color: #e6e6e6;border-radius: 5px;\">\r\n            <ion-col size=\"6\" style=\"color: #3880ff;\" class=\"tripName\">\r\n              {{items.tripName}} {{items.type}}\r\n               </ion-col>\r\n            <ion-col size=\"6\" class=\"tripName\">\r\n              {{items.tripId}}\r\n            </ion-col>\r\n           </ion-row>\r\n         <ion-row>\r\n            <ion-col class=\"time-header\">\r\n               <ion-icon name=\"clock\" class=\"clock-icon\"></ion-icon>Start Time\r\n             </ion-col>\r\n            <ion-col class=\"time-header\">\r\n             <ion-icon name=\"clock\" class=\"clock-icon\"></ion-icon>End Time\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-row>\r\n                <ion-col class=\"time\">\r\n                 {{items.tripStartTime}}\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col class=\"time\">\r\n               {{items.tripEndTime}}\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-col>\r\n</ion-row>\r\n<ion-fab-button id=\"add-fab-btn\" (click)=\"openRouteModel()\">\r\n  <ion-icon name=\"add\" ></ion-icon>\r\n</ion-fab-button>\r\n</ion-content>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/route/route-form/route-form.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/route/route-form/route-form.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!----------Route form start------------>\r\n<ion-header style=\"height: 100px;\">\r\n  <ion-toolbar>\r\n    <ion-row style=\"padding:0 0 0 10px\">\r\n      <ion-col size=\"1\">\r\n        <ion-icon name=\"arrow-back\" style=\"float: right;color: gray;font-size: 25px; margin:0px auto;\"\r\n          (click)=\"closeModal()\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col size=\"11\">\r\n        <ion-title class=\"popup-head\">Route and Trip Details</ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<div class=\"routeTripcontainer\">\r\n  <form [formGroup]=\"routeTripLogin\">\r\n    <div class=\"select-container\">\r\n      <ion-list style=\"background-color: transparent; padding: 0px;\">\r\n        <ion-radio-group [value]=\"radioSelection\" (ionChange)=\"selectPickDrop($event)\">\r\n          <ion-row>\r\n            <ion-col size=\"4\">\r\n              <ion-item\r\n                style=\"--inner-border-width: 0; --min-height: 20px; --background: var(--ion-item-background,var(--ion-background-color,#f3f3f3)); padding: 0px;\">\r\n                <ion-radio style=\"margin-inline-end: 10px\" class=\"route-input\" value=\"PickUp\"></ion-radio>\r\n                <ion-label style=\"padding-left: 5px;\" class=\"label-column\">Pickup</ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n              <ion-item\r\n                style=\"--inner-border-width: 0; --min-height: 20px; --background: var(--ion-item-background,var(--ion-background-color,#f3f3f3)); padding: 0px;\">\r\n                <ion-radio style=\"margin-inline-end: 10px\" class=\"route-input\" value=\"Drop\"></ion-radio>\r\n                <ion-label style=\"padding-left: 5px;\" class=\"label-column\">Drop</ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-radio-group>\r\n      </ion-list>\r\n      <ion-row *ngIf=\"show\">\r\n        <ion-col size=\"4\" class=\"label-column\">\r\n          Route Name :\r\n        </ion-col>\r\n        <ion-col size=\"8\">\r\n          <ion-item class=\"route-items\" style=\"background: transparent;\">\r\n            <ion-input type=\"text\" placeholder=\"Enter Route Name\" class=\"route-input\" formControlName=\"routeName\">\r\n            </ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"8\">\r\n          <select class=\"select-routeinfo stu-input route-info stu-select-box text-select-box\"\r\n            formControlName=\"routeName\">\r\n            <option value=\"\" disabled selected hidden class=\"option-head\">Select route name</option>\r\n            <option *ngFor=\"let routes of  routetype\" [value]=\"routes\">{{routes}}</option>\r\n          </select>\r\n        </ion-col> -->\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"4\" class=\"label-column\">\r\n          Vehicle Name :\r\n        </ion-col>\r\n        <ion-col size=\"8\">\r\n          <select class=\"stu-input select-routeinfo route-info stu-select-box text-select-box\"\r\n            formControlName=\"plateNo\">\r\n            <option value=\"\" selected class=\"option-head\">Select plate number</option>\r\n            <option *ngFor=\"let vehicles of vehicletype\" [value]=\"vehicles\">{{vehicles}}</option>\r\n          </select>\r\n        </ion-col>\r\n      </ion-row>\r\n      <!-- <ion-row>\r\n        <ion-col size=\"4\" class=\"label-column\">\r\n          Trip Type :\r\n        </ion-col>\r\n        <ion-col size=\"8\">\r\n          <select class=\"stu-input select-routeinfo route-info stu-select-box text-select-box\" formControlName=\"type\">\r\n            <option value=\"\" disabled selected hidden class=\"option-head\">Select trip type</option>\r\n            <option *ngFor=\"let trips of type\" [value]=\"trips\">{{trips}}</option>\r\n          </select>\r\n        </ion-col>\r\n      </ion-row> -->\r\n      <ion-row>\r\n        <ion-col size=\"4\" class=\"label-column\">\r\n          Trip Name :\r\n        </ion-col>\r\n        <ion-col size=\"8\">\r\n          <ion-item class=\"route-items\" style=\"background: transparent;\">\r\n            <ion-input type=\"text\" placeholder=\"Enter Trip Name\" class=\"route-input\" formControlName=\"tripName\">\r\n            </ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"4\" class=\"label-column\">\r\n          Start Time :\r\n        </ion-col>\r\n        <ion-col size=\"8\">\r\n          <ion-item class=\"route-items\" style=\"background: transparent;\">\r\n            <ion-input type=\"time\" class=\"route-input \" formControlName=\"tripStarttime\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"4\" class=\"label-column\">\r\n          End Time :\r\n        </ion-col>\r\n        <ion-col size=\"8\">\r\n          <ion-item class=\"route-items\" style=\"background: transparent;\">\r\n            <ion-input type=\"time\" class=\"route-input \" formControlName=\"tripEndtime\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <ion-row>\r\n      <ion-col style=\"margin: auto;text-align: center;\">\r\n        <ion-button shape=\"round\" color=\"primary\" class=\"routeTripbtn\" (click)=\"onSubmit()\"\r\n          [disabled]=\"!routeTripLogin.valid\">Submit</ion-button>\r\n        <ion-button *ngIf=\"addshow\" fill=\"outline\" shape=\"round\" color=\"primary\" (click)=\"clear()\"\r\n          class=\"routeTripbtn\">Clear</ion-button>\r\n        <ion-button *ngIf=\"show\" fill=\"outline\" shape=\"round\" color=\"primary\" (click)=\"close()\"\r\n          class=\"routeTripbtn\">Close</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</div>\r\n<!----------routeFormEnd--------->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/student/add-alerts/add-alerts.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/student/add-alerts/add-alerts.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row style=\"overflow: auto;\">\r\n  <ion-col>\r\n    <ion-row>\r\n      <ion-col size=\"1\">\r\n        <ion-icon name=\"arrow-back\" (click)=\"getBack()\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col  class=\"deatils-header\">Alert Info</ion-col>\r\n    </ion-row>\r\n    <form  [formGroup]=\"studentDetails\">\r\n    <div class=\"box-column3\">\r\n      <ion-row>\r\n        <ion-col size=12 class=\"stu-name\">\r\n         {{alertinfo?.studentinfo.studentName1}}\r\n        </ion-col>\r\n      </ion-row>\r\n      <div class=\"alert-option\">\r\n        <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\" value=\"none\" formControlName=\"alertoption\">\r\n        <span  class=\"forward-text\"><ion-label> ALERT OPTION :</ion-label></span>\r\n        <span  class=\"forward-text\" *ngFor=\"let items of alertOption\">\r\n          <ion-radio class=\"alert-forward\"  value=\"{{items.type}}\" [checked]=\"items.name == 'none'? true :false\"></ion-radio>\r\n          <ion-label>{{items.name}}</ion-label>\r\n      </span>\r\n    </ion-radio-group>\r\n</div>\r\n      <div class=\"alert-info\">\r\n        <ion-row *ngFor=\"let alert of alerts\" class=\"alert-row\">\r\n          <ion-col size=\"1\">\r\n            <ion-checkbox class=\"alert-checkbox\" [(ngModel)]=\"alert.ischecked\" [ngModelOptions]=\"{standalone: true}\" (click)=\"selectData(alerts,alert)\"  >\r\n            </ion-checkbox>\r\n          </ion-col>\r\n          <ion-col size=\"11\" class=\"ion-text-justify\">\r\n           {{alert.value}}\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </div>\r\n    </form>\r\n    <ion-row>\r\n      <ion-col class=\"ion-text-center\">\r\n        <ion-button shape=\"round\"  (click)=\"submit()\" style=\"font-size: 11px;height: 32px;\">Submit</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n  \r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/student/add-route/add-route.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/student/add-route/add-route.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-row>\r\n    <ion-col size=\"1\">\r\n      <ion-icon name=\"arrow-back\" style=\"font-size: xx-large\" (click)=\"closeModal()\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"11\" *ngIf=\"myPlatform == 'desktop'\" class=\"route-header\">Route\r\n      Info</ion-col>\r\n    <ion-col size=\"11\" *ngIf=\"myPlatform != 'desktop'\" class=\"route-header\">Route Info</ion-col>\r\n  </ion-row>\r\n</ion-header>\r\n<ion-row>\r\n  <ion-col size=\"1\">\r\n  </ion-col>\r\n  <ion-col size=\"11\" style=\"margin-top: -5px;\" class=\"stu-name\">\r\n    {{ routeinfo?.studentinfo.studentName1 }}\r\n  </ion-col>\r\n</ion-row>\r\n<ion-row class=\"container\">\r\n  <ion-col size=\"12\">\r\n    <div class=\"wrapper-container\">\r\n      <form [formGroup]=\"studentDetails\" id=\"route-info\">\r\n        <div class=\"box-column\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\">\r\n              <ion-searchbar style=\"position: absolute; display: none; z-index: 12; top: 5%; width: 70%\"\r\n                showCancelButton=\"never\" [(ngModel)]=\"address\" [ngModelOptions]=\"{ standalone: true }\"\r\n                (ionChange)=\"getAddressLatlng(address)\" placeholder=\"Search\"></ion-searchbar>\r\n              <div class=\"map studentroute\" style=\"height: 73vh !important\" #mapElement></div>\r\n              <ion-row>\r\n                <!-- <ion-col size=\"8\">\r\n                  <ion-range min=\"50\" style=\"padding: 0px\" max=\"10000\" color=\"secondary\" [(ngModel)]=\"range\"\r\n                    [ngModelOptions]=\"{ standalone: true }\" (ionChange)=\"setRange(range)\">\r\n                    <ion-icon size=\"small\" slot=\"start\" name=\"remove-circle-outline\"></ion-icon>\r\n                  </ion-range>\r\n                </ion-col> -->\r\n                <!-- <ion-col size=\"1\"></ion-col> -->\r\n                <!-- <p style=\"text-align: center\">{{ range }} m</p> -->\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\">\r\n              <ion-card style=\"padding: 9px\">\r\n                <ion-card-subtitle class=\"card\">\r\n                  <ion-row>\r\n                    <ion-col style=\"padding: 0px; padding-left: 10px; padding-top: 5px;\" size=\"11\">Pickup Trip</ion-col>\r\n                    <ion-col style=\"padding: 0px;\" size=\"1\"><ion-img src=\"assets/student_Details/delete..svg\"\r\n                        class=\"delete-svg\" style=\"margin-left: -2px;\" title=\"Pickup Trip Delete\"\r\n                        (click)=\"deletePickup()\"></ion-img></ion-col>\r\n                  </ion-row>\r\n                </ion-card-subtitle>\r\n                <ion-row style=\"margin-top: 5px;\" class=\"stu-items stu-select-box\">\r\n                  <ion-col size=\"2\">\r\n                    <ion-img src=\"assets/student_Details/route1.svg\" class=\"stu-svg\"></ion-img>\r\n                  </ion-col>\r\n                  <ion-col size=\"10\">\r\n                    <select class=\"stu-input select-input route-info\" formControlName=\"pickuptrip\"\r\n                      (change)=\"getpickuproute($event)\">\r\n                      <option value=\"\" disabled selected hidden class=\"option-head\">\r\n                        Select Pickup Vehicle\r\n                      </option>\r\n                      <option *ngFor=\"let pickuptrip of pickuptrip\" [value]=\"pickuptrip\">\r\n                        {{ pickuptrip }}\r\n                      </option>\r\n                    </select>\r\n                    <!-- <select  class=\"stu-input select-input route-info\" formControlName=\"pickuproute\" (change)=\"getpickuptrip($event)\">\r\n  <option value=\"\" disabled selected hidden class=\"option-head\" >Select Pickup Route</option>\r\n  <option *ngFor=\"let pickuproute of pickuproute\" [value]=\"pickuproute\">{{pickuproute}}</option>\r\n  </select> -->\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"stu-items stu-select-box\">\r\n                  <ion-col size=\"2\">\r\n                    <ion-img src=\"assets/student_Details/bus- dropstop-svg.svg\" class=\"stu-svg\"></ion-img>\r\n                  </ion-col>\r\n                  <ion-col size=\"10\">\r\n                    <!-- <select  class=\"stu-input select-input route-info\" formControlName=\"pickuptrip\" (change)=\"getpickupstop($event)\">\r\n  <option value=\"\" disabled selected hidden class=\"option-head\" >Select Pickup Trip</option>\r\n  <option *ngFor=\"let pickuptrip of pickuptrip\" [value]=\"pickuptrip\">{{pickuptrip}}</option>\r\n  </select> -->\r\n                    <select class=\"stu-input select-input route-info\" formControlName=\"pickuproute\"\r\n                      (change)=\"getpickupstop($event)\">\r\n                      <option value=\"\" disabled selected hidden class=\"option-head\">\r\n                        Select Pickup Route\r\n                      </option>\r\n                      <option *ngFor=\"let pickuproute of pickuproute\" [value]=\"pickuproute\">\r\n                        {{ pickuproute }}\r\n                      </option>\r\n                    </select>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"stu-items stu-select-box\">\r\n                  <ion-col size=\"2\">\r\n                    <ion-img src=\"assets/student_Details/Bus_stop.svg\" class=\"stu-svg\"></ion-img>\r\n                  </ion-col>\r\n                  <ion-col size=\"10\">\r\n                    <select class=\"stu-input select-input route-info\" formControlName=\"pickupstop\"\r\n                      (change)=\"selectpickupstop()\">\r\n                      <option value=\"\" disabled selected hidden class=\"option-head\">\r\n                        Select Pickup Stop\r\n                      </option>\r\n                      <option *ngFor=\"let pickupstop of pickupstop | keyvalue\" [value]=\"pickupstop.key\">\r\n                        {{ pickupstop.value }}\r\n                      </option>\r\n                    </select>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-card>\r\n              <ion-card style=\"padding: 9px\">\r\n                <ion-card-subtitle class=\"card\"> <ion-row>\r\n                    <ion-col style=\"padding: 0px; padding-left: 10px; padding-top: 5px;\" size=\"11\">Drop Trip</ion-col>\r\n                    <ion-col style=\"padding: 0px;\" size=\"1\"><ion-img src=\"assets/student_Details/delete..svg\"\r\n                        class=\"delete-svg\" style=\"margin-left: -2px;\" title=\"Drop Trip Delete\"\r\n                        (click)=\"deleteDrop()\"></ion-img></ion-col>\r\n                  </ion-row></ion-card-subtitle>\r\n                <ion-row style=\"margin-top: 5px;\" class=\"stu-items stu-select-box\">\r\n                  <ion-col size=\"2\">\r\n                    <ion-img src=\"assets/student_Details/droproute1.svg\" class=\"stu-svg\"></ion-img>\r\n                  </ion-col>\r\n                  <ion-col size=\"10\">\r\n                    <select class=\"stu-input select-input route-info\" formControlName=\"droptrip\"\r\n                      (change)=\"getdroproute($event)\">\r\n                      <option value=\"\" disabled selected hidden class=\"option-head\">\r\n                        Select Drop Vehicle\r\n                      </option>\r\n                      <option *ngFor=\"let droptrip of droptrip\" [value]=\"droptrip\">\r\n                        {{ droptrip }}\r\n                      </option>\r\n                    </select>\r\n                    <!-- <select  class=\"stu-input select-input route-info\" formControlName=\"droproute\" (change)=\"getdroptrip($event)\">\r\n  <option value=\"\" disabled selected hidden class=\"option-head\" >Select Drop Route</option>\r\n  <option *ngFor=\"let droproute of droproute\" [value]=\"droproute\">{{droproute}}</option>\r\n  </select> -->\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"stu-items stu-select-box\">\r\n                  <ion-col size=\"2\">\r\n                    <ion-img src=\"assets/student_Details/drop route.svg\" class=\"stu-svg\"></ion-img>\r\n                  </ion-col>\r\n                  <ion-col size=\"10\">\r\n                    <!-- <select  class=\"stu-input select-input route-info\" formControlName=\"droptrip\" (change)=\"getdropstop($event)\">\r\n  <option value=\"\" disabled selected hidden class=\"option-head\" >Select Drop Trip</option>\r\n  <option *ngFor=\"let droptrip of droptrip\" [value]=\"droptrip\">{{droptrip}}</option>\r\n  </select> -->\r\n                    <select class=\"stu-input select-input route-info\" formControlName=\"droproute\"\r\n                      (change)=\"getdropstop($event)\">\r\n                      <option value=\"\" disabled selected hidden class=\"option-head\">\r\n                        Select Drop Route\r\n                      </option>\r\n                      <option *ngFor=\"let droproute of droproute\" [value]=\"droproute\">\r\n                        {{ droproute }}\r\n                      </option>\r\n                    </select>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"stu-items stu-select-box\">\r\n                  <ion-col size=\"2\">\r\n                    <ion-img src=\"assets/student_Details/pickup-route.svg\" class=\"stu-svg\"></ion-img>\r\n                  </ion-col>\r\n                  <ion-col size=\"10\">\r\n                    <select class=\"stu-input select-input route-info\" formControlName=\"dropstop\"\r\n                      (change)=\"selectDropstop()\">\r\n                      <option value=\"\" disabled selected hidden class=\"option-head\">\r\n                        Select Drop Stop\r\n                      </option>\r\n                      <option *ngFor=\"let dropstop of dropstop | keyvalue\" [value]=\"dropstop.key\">\r\n                        {{ dropstop.value }}\r\n                      </option>\r\n                    </select>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </form>\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-button style=\"text-align: center\" shape=\"round\" (click)=\"submit()\"\r\n            [disabled]=\"!studentDetails.valid\">Submit</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-col>\r\n</ion-row>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/student/add-student/add-student.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/student/add-student/add-student.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-row>\r\n    <ion-col size=\"1\">\r\n      <ion-icon name=\"arrow-back\" style=\"font-size: xx-large;\" (click)=\"closeModal()\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col class=\"deatils-header\">Student Info</ion-col>\r\n  </ion-row>\r\n</ion-header>\r\n<ion-row class=\"container\">\r\n  <ion-col size=\"12\">\r\n    <div class=\"wrapper-container \">\r\n      <form [formGroup]=\"studentDetails\" id=\"student-info\">\r\n        <div class=\"box-column\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\">\r\n              <ion-item class=\"stu-items\" style=\"background: transparent;\">\r\n                <ion-img src=\"assets/student_Details/demo.svg\" class=\"stu-col1-img\"></ion-img>\r\n                <ion-input type=\"text\" placeholder=\"Enter Student Name\" class=\"stu-input\"\r\n                  formControlName=\"firstname\"></ion-input>\r\n              </ion-item>\r\n              <ion-item class=\"stu-items\" style=\"background: transparent;\">\r\n                <ion-img src=\"assets/student_Details/rollnumber.svg\" class=\"stu-col1-img\"></ion-img>\r\n                <ion-input type=\"number\" placeholder=\"Enter Roll Number\" class=\"stu-input\"\r\n                  formControlName=\"rollno\"></ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item title=\"Date Of Birth\" class=\"stu-items\" style=\"background: transparent;\">\r\n                <ion-icon name=\"calendar\" class=\"stu-icon\"></ion-icon>\r\n                <ion-input type=\"date\" class=\"stu-input\" title=\"Date Of Birth\" formControlName=\"dob\"></ion-input>\r\n              </ion-item>\r\n\r\n              <!-----Select Parent--------->\r\n              <ion-row style=\"margin-top:0;\" class=\"parent\">\r\n                <ion-col size=\"11.6\" class=\"stu-items stu-select-box option-body\">\r\n                  <select class=\"stu-input select-input\" formControlName=\"parentName\">\r\n                    <option value=\"\" selected class=\"option-head\">Select Parent Phone Number</option>\r\n                    <option *ngFor=\"let parentDetailsList of parentDetailsList\" [value]=\"parentDetailsList\">\r\n                      {{parentDetailsList}}</option>\r\n                  </select>\r\n                </ion-col>\r\n              </ion-row>\r\n              <!------Select Tag Id------------>\r\n              <ion-row style=\"margin-top:0;\" class=\"tag\" *ngIf=\"!editTextbox\">\r\n                <ion-col size=\"11.6\" class=\"stu-items stu-select-box option-body\">\r\n                  <select class=\"stu-input select-input\" formControlName=\"tagId\">\r\n                    <option value=\"\" selected class=\"option-head\">Select Tag Id</option>\r\n                    <option *ngFor=\"let selecttagid of selecttagid\" [value]=\"selecttagid\">{{selecttagid}}</option>\r\n                  </select>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-item class=\"stu-items\" style=\"background: transparent;\" *ngIf=\"editTextbox\">\r\n                <ion-img src=\"assets/student_Details/demo2.svg\" class=\"stu-col1-img\"></ion-img>\r\n                <ion-input [disabled]=\"editTextbox\" type=\"text\" placeholder=\"{{editTagId}}\" class=\"stu-input\"\r\n                  formControlName=\"tagId\"></ion-input>\r\n              </ion-item>\r\n              <ion-row style=\"margin-top:0;\" class=\"classid\">\r\n                <ion-col size=\"11.6\" class=\"stu-items stu-select-box\">\r\n                  <ion-icon name=\"contacts\" slot=\"start\" class=\"stu-icon\"></ion-icon>\r\n                  <select class=\"stu-input select-input\" formControlName=\"classId\" (change)=\"getsectionId($event)\">\r\n                    <option value=\"\" disabled selected hidden class=\"option-head\">Select Class Id</option>\r\n                    <option [disabled]=\"controlEnabled\" *ngFor=\"let classid of classid\" value={{classid}}>{{classid}}\r\n                    </option>\r\n                  </select>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col size-sm=\"12\" size-md=\"6\" size-lg=\"6\">\r\n              <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\" value=\"Male\" formControlName=\"gender\"\r\n                (ionChange)=\" genderSelection($event)\">\r\n                <ion-item class=\"stu-items\" style=\"--padding-bottom:10px;margin-bottom: 10px;height: 40px;\">\r\n                  <ion-img src=\"assets/student_Details/gender.svg\" class=\"stu-col1-img\"></ion-img>\r\n                  <ion-radio class=\"radioBtn\" value=\"Male\" checked></ion-radio>\r\n                  <ion-label class=\"radio-text\">Male</ion-label>\r\n                  <ion-radio class=\"radioBtn\" value=\"Female\"></ion-radio>\r\n                  <ion-label class=\"radio-text\">Female</ion-label>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n              <ion-item class=\"stu-items\" style=\"background: transparent;\">\r\n                <ion-icon name=\"paper\" slot=\"start\" class=\"stu-icon\"></ion-icon>\r\n                <ion-input type=\"text\" placeholder=\"Enter Your Street/Area\" class=\"stu-input\"\r\n                  formControlName=\"address\"></ion-input>\r\n              </ion-item>\r\n              <ion-item class=\"stu-items\" style=\"background: transparent;\">\r\n                <ion-img src=\"assets/student_Details/enterstate.svg\" slot=\"start\" class=\"stu-col1-img\"></ion-img>\r\n                <ion-input type=\"text\" placeholder=\"Enter Your District\" class=\"stu-input\"\r\n                  formControlName=\"district\"></ion-input>\r\n              </ion-item>\r\n              <ion-item class=\"stu-items\" style=\"background: transparent;\">\r\n                <ion-icon name=\"map\" slot=\"start\" class=\"stu-icon\"></ion-icon>\r\n                <ion-input type=\"text\" placeholder=\"Enter Your State\" class=\"stu-input\"\r\n                  formControlName=\"state\"></ion-input>\r\n              </ion-item>\r\n              <ion-item class=\"stu-items\" style=\"background: transparent;\">\r\n                <ion-icon name=\"pin\" slot=\"start\" class=\"stu-icon\"></ion-icon>\r\n                <ion-input type=\"number\" placeholder=\"Enter Your Pincode\" class=\"stu-input\"\r\n                  formControlName=\"pincode\"></ion-input>\r\n              </ion-item>\r\n              <ion-row style=\"margin-top:0px;\" class=\"sectionId\">\r\n                <ion-col size=\"11.6\" class=\"stu-items stu-select-box\">\r\n                  <select class=\"stu-input select-input\" formControlName=\"sectionId\">\r\n                    <option value=\"\" disabled selected hidden class=\"option-head\">Select section Id</option>\r\n                    <option [disabled]=\"controlEnabled\" *ngFor=\"let sectionIds of sectionIds\" [value]=\"sectionIds\">\r\n                      {{sectionIds}}</option>\r\n                  </select>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </form>\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-button style=\"text-align: center;\" shape=\"round\" (click)=\"submit()\"\r\n            [disabled]=\"!studentDetails.valid\">Submit</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </div>\r\n  </ion-col>\r\n</ion-row>\r\n\r\n<!-- </ion-content> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/student/student-addtional/student-addtional.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/student/student-addtional/student-addtional.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n   <ion-header >  \r\n    <ion-toolbar  id=\"toolbar-fix\">\r\n          <ion-row style=\"background: #f2f2f2;margin: 10px 1% 1px;border: 1px solid #f1f3f5;\">\r\n            <ion-col size=\"1\"><ion-icon name=\"arrow-back\" style=\"   border-radius: 50%;\r\n              float: right;color: gray;font-size: 38px;margin: 0px auto; background: white;\r\n              background-color: white;line-height: 32px;\r\n              margin-top: 11px;\" (click)=\"closeModal()\"></ion-icon></ion-col>\r\n            <ion-col size=\"10\">\r\n              <ion-title style=\"text-align: center;\" >\r\n              <h1 class=\"popup-head\">\r\n                Student Details</h1> \r\n              </ion-title>\r\n            </ion-col>\r\n          </ion-row>    \r\n    </ion-toolbar>\r\n  </ion-header>\r\n \r\n  <ion-content id=\"content-fix\">\r\n  <div class=\"wrapper-container\">\r\n    <form  [formGroup]=\"studentDetails\">\r\n    <fieldset style=\"border:none; border-radius: 5px;box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.19)\">\r\n      <ion-row>\r\n        <ion-col size-lg=\"12\" size-sm=\"12\" size-md=\"12\" style=\"margin:auto;text-align:center\">\r\n          <ion-row>\r\n            <!------StudentInfo-Col1------->\r\n       <ion-col size=\"12\" size-sm=\"12\" size-lg=\"4\" size-md=\"6\" class=\"ion-text-start\">\r\n              <div class=\"deatils-header\">Student Info</div>\r\n              <div class=\"box-column\">\r\n                <ion-list lines=\"none\" style=\"background: transparent;margin-top: 0px;padding-top: 0px;\">\r\n\r\n                  <ion-item class=\"stu-items\" style=\"background: transparent;\">\r\n                    <ion-img src=\"assets/student_Details/rollnumber.svg\" class=\"stu-col1-img\"></ion-img>\r\n                    <ion-input type=\"number\" placeholder=\"Enter Roll Number\" class=\"stu-input\" formControlName=\"rollno\"></ion-input>\r\n                  </ion-item>\r\n\r\n                  <ion-item class=\"stu-items\" style=\"background: transparent;\">\r\n                    <ion-img src=\"assets/student_Details/student.svg\" class=\"stu-col1-img\"></ion-img>\r\n                    <ion-input type=\"text\" placeholder=\"Enter Student Name\" class=\"stu-input\" formControlName=\"firstname\"></ion-input>\r\n                  </ion-item>\r\n\r\n                  <ion-item class=\"stu-items\" style=\"background: transparent;\">\r\n                    <ion-icon name=\"phone-portrait\" slot=\"start\" class=\"stu-icon\"></ion-icon>\r\n                    <ion-input type=\"number\" placeholder=\"Enter Phone Number\" class=\"stu-input\" formControlName=\"contactno\"></ion-input>\r\n                  </ion-item>\r\n                  \r\n                  <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\" value=\"Male\"  formControlName=\"gender\"  (ionChange)=\" genderSelection($event)\" >\r\n                  <ion-item style=\"background: transparent;--padding-bottom:10px;\" class=\"stu-items\">\r\n                    <ion-radio class=\"radioBtn\" value=\"Male\" checked></ion-radio>\r\n                    <ion-label slot=\"start\" style=\"font-size: 22px;margin: 0px;padding: 0px ;\r\n                     color: #b8b8b8;\">Gender</ion-label>\r\n                    <ion-img src=\"assets/student_Details/male.svg \" class=\"genderImg\"></ion-img>\r\n                    <ion-radio class=\"radioBtn\" value=\"Female\"></ion-radio>\r\n                    <ion-img src=\"assets/student_Details/female-avatar.svg\" class=\"genderImg\"></ion-img>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n                </ion-list>\r\n\r\n                <!-----Select Parent--------->\r\n                <ion-row style=\"margin-top:-8px;\">\r\n                  <ion-col size=\"9.5\" class=\"stu-items stu-select-box option-body\">\r\n                    \r\n                      <select  class=\"stu-input select-input\" formControlName=\"parentName\" >\r\n                      <option value=\"\"  selected    class=\"option-head\">Select Parent Name</option>\r\n                      <option  *ngFor=\"let parentDetailsList of parentDetailsList\" [value]=\"parentDetailsList\" >{{parentDetailsList}}</option>\r\n                    </select>\r\n                  </ion-col>\r\n                  <ion-col size=\"2\">\r\n                    <ion-button class=\"student-toggleBtn\" (click)=\"openDetailsModel('parentDetails')\"> +\r\n                    </ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <!------Select Tag Id------------>\r\n                <ion-row style=\"margin-top:0;\">\r\n                  <ion-col size=\"9.5\" class=\"stu-items stu-select-box option-body\"   >\r\n                    <select class=\"stu-input select-input\" formControlName=\"tagId\" >\r\n                      <option  value=\"\"  selected  class=\"option-head\" >Select Tag Id</option>\r\n                      <option  [disabled]=\"controlEnabled\"  *ngFor=\"let selecttagid of selecttagid\" [value]=\"selecttagid\" >{{selecttagid}}</option>\r\n                    </select> \r\n\r\n                  </ion-col>\r\n                  <ion-col size=\"2\">\r\n                    <ion-button class=\"student-toggleBtn\" (click)=\"openDetailsModel('tagDetails')\"> +</ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row style=\"margin-top:0;\">\r\n                  <ion-col size=\"9.5\" class=\"stu-items stu-select-box\">\r\n                    <ion-icon name=\"contacts\" slot=\"start\" class=\"stu-icon\"></ion-icon>\r\n               \r\n                    <select  class=\"stu-input select-input\" formControlName=\"classId\">\r\n                      <option value=\"\" disabled selected hidden  class=\"option-head\">Select Class Id</option>\r\n                      <option  [disabled]=\"controlEnabled\" *ngFor=\"let classid of classid\" value={{classid}}>{{classid}}</option>\r\n                    </select>\r\n                 \r\n                  </ion-col>\r\n                  <ion-col size=\"2\">\r\n                    <ion-button class=\"student-toggleBtn\" (click)=\"openDetailsModel('classDetails')\"> +\r\n                    </ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row style=\"margin-top:0px;\">\r\n                  <ion-col  size=\"11.5\" class=\"stu-items stu-select-box\" style=\"margin-bottom: 5px;\" >\r\n                    <select  class=\"stu-input select-input\" formControlName=\"sectionId\">\r\n                    <option value=\"\" disabled selected hidden class=\"option-head\" >Select section Id</option>\r\n                    <option  [disabled]=\"controlEnabled\" *ngFor=\"let sectionIds of sectionIds\" [value]=\"sectionIds\">{{sectionIds}}</option>\r\n                  </select>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-col>\r\n            <!------RouteInfo-Col2---------->\r\n           <ion-col size=\"12\" size-sm=\"12\" size-lg=\"4\" size-md=\"6\">\r\n              <div class=\"deatils-header\">Route Info \r\n                <ion-button class=\"student-toggleBtn\" style=\"margin: 0px;\r\n                padding-right: 20px;\"  (click)=\"openDetailsModel('routeandTrip')\"> +\r\n              </ion-button>\r\n            </div>\r\n              <div class=\"box-column\" style=\"padding: 30px 0px;\">\r\n\r\n                <ion-row class=\"stu-select-box text-select-box\">\r\n                  <ion-col size=\"1.7\">\r\n                    <ion-img src=\"assets/student_Details/route1.svg\" class=\"stu-svg\"></ion-img>\r\n                  </ion-col>\r\n                  <ion-col size=\"9.3\">\r\n                    <select  class=\"select-routeinfo stu-input route-info\" formControlName=\"pickuproute\" >\r\n                      <option value=\"\" disabled selected hidden  class=\"option-head\"  >Select Pickup Route</option>\r\n                      <option *ngFor=\"let pickuproute of pickuproute\" [value]=\"pickuproute\">{{pickuproute}}</option>\r\n                    </select>\r\n                  </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row class=\"stu-select-box text-select-box\">\r\n                  <ion-col size=\"1.7\">\r\n                    <ion-img src=\"assets/student_Details/bus- dropstop-svg.svg\" class=\"stu-svg\"></ion-img>\r\n                  </ion-col>\r\n                  <ion-col size=\"9.3\">\r\n                    <select  class=\"stu-input select-routeinfo route-info\"  formControlName=\"pickuptrip\">\r\n                      <option value=\"\" disabled selected hidden class=\"option-head\"  >Select Pickup Trip</option>\r\n                      <option *ngFor=\"let pickuptrip of pickuptrip\" [value]=\"pickuptrip\">{{pickuptrip}}</option>\r\n                    </select>\r\n                  </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row class=\"stu-select-box text-select-box\">\r\n                  <ion-col size=\"1.7\">\r\n                    <ion-img src=\"assets/student_Details/Bus_stop.svg\" class=\"stu-svg\"></ion-img>\r\n                  </ion-col>\r\n                  <ion-col size=\"9.3\">\r\n                    <select  class=\"stu-input select-routeinfo route-info\" formControlName=\"pickupstop\">\r\n                      <option value=\"\" disabled selected hidden class=\"option-head\">Select Pickup Stop</option>\r\n                      <option *ngFor=\"let pickupstop of pickupstop\" [value]=\"pickupstop.stopPointId\">{{pickupstop.stopName}}</option>\r\n                    </select>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"stu-select-box text-select-box\">\r\n                  <ion-col size=\"1.7\">\r\n                    <ion-img src=\"assets/student_Details/droproute1.svg\" class=\"stu-svg\">\r\n                    </ion-img>\r\n                  </ion-col>\r\n                  <ion-col size=\"9.3\">\r\n                    <select  class=\"select-routeinfo stu-input route-info\" formControlName=\"droproute\"   >\r\n                      <option value=\"\" disabled selected hidden  class=\"option-head\" >Select Drop Route</option>\r\n                      <option *ngFor=\"let droproute of droproute\" [value]=\"droproute\">{{droproute}}</option>\r\n                    </select>\r\n                  </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row class=\"stu-select-box text-select-box\">\r\n                  <ion-col size=\"1.7\">\r\n                    <ion-img src=\"assets/student_Details/drop route.svg\" class=\"stu-svg\">\r\n                    </ion-img>\r\n                  </ion-col>\r\n                  <ion-col size=\"9.3\">\r\n                    \r\n                    <select  class=\"stu-input select-routeinfo route-info\" formControlName=\"droptrip\" >\r\n                      <option value=\"\" disabled selected hidden class=\"option-head\"  >Select Drop Trip</option>\r\n                      <option *ngFor=\"let droptrip of droptrip\" [value]=\"droptrip\">{{droptrip}}</option>\r\n                    </select>\r\n                  </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row class=\"stu-select-box text-select-box\">\r\n                  <ion-col size=\"1.7\">\r\n                    <ion-img src=\"assets/student_Details/pickup-route.svg\" class=\"stu-svg\"></ion-img>\r\n                  </ion-col>\r\n                  <ion-col size=\"9.3\">\r\n                    <select  class=\"stu-input select-routeinfo route-info\" formControlName=\"dropstop\" >\r\n                      <option value=\"\" disabled selected hidden class=\"option-head\" >Select Drop Stop</option>\r\n                      <option *ngFor=\"let dropstop of dropstop\" [value]=\"dropstop.stopPointId\">{{dropstop.stopName}}</option>\r\n                    </select>\r\n                  </ion-col> \r\n                </ion-row>\r\n\r\n                <ion-row class=\"stu-select-box text-select-box\" style=\"margin-bottom: 5px;\">\r\n                  <ion-col size=\"1.7\">\r\n                    <ion-icon name=\"notifications\" class=\"stu-svg\" style=\"padding: 0px;margin-right: 63px;\"></ion-icon>\r\n                  </ion-col>\r\n                  <ion-col size=\"9.3\">\r\n                    <select  class=\"select-routeinfo stu-input route-info\"  formControlName=\"alertoption\" >\r\n                      <option value=\"\" disabled selected hidden  class=\"option-head\" >Select Alert Option</option>\r\n                      <option *ngFor=\"let alerts of alertOption;let i = index\" [value]=\"alerts.type\">{{alerts.name}}</option>\r\n                    </select>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-col>\r\n\r\n\r\n            <!------AlertInfo-Col3---------->\r\n        <ion-col size=\"12\" size-sm=\"12\" size-lg=\"4\" size-md=\"12\">\r\n              <div class=\"deatils-header\">Alert Info</div>\r\n              <div class=\"box-column3\">\r\n                <div class=\"alert-info\">\r\n                  <ion-row  *ngFor=\"let alert of alertchecks\">\r\n                    <ion-col size=\"1\">\r\n                      <ion-checkbox class=\"alert-checkbox\" (click)=\"selectData(alert)\" [value]=\"alert.isChecked\"></ion-checkbox>\r\n                    </ion-col>\r\n                    <ion-col size=\"11\" class=\"ion-text-start\">\r\n                   {{alert.alertname}}\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n                \r\n                <div class=\"deatils-header\">Geo Zone Info</div>\r\n               <span>\r\n                  <ion-searchbar style=\"width: 80%;z-index: 12;position: absolute;bottom: 45%;\r\n                background: transparent;\">\r\n                </ion-searchbar>\r\n              </span>\r\n              <!-- <span>\r\n                <select  class=\"shapes-item\" >\r\n                  <option value=\"Circle\">&#9679;</option>\r\n                  <option value=\"Rectangle\" >&#x25AC;</option>\r\n                </select>\r\n              </span> -->\r\n                <div class=\"geozone-info  map studentPage\" style=\"margin-bottom: 0;background: #f3f3f3;\" #mapElement></div>\r\n                </div>\r\n              \r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-button shape=\"round\" color=\"primary\" (click)=\"submit()\" class=\"main-container-btn\" [disabled]=\"!studentDetails.valid\">submit</ion-button>\r\n          <ion-button type=\"reset\" fill=\"outline\" shape=\"round\" color=\"primary\" class=\"main-container-btn\">clear</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </fieldset>\r\n  </form>\r\n  </div> \r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/student/student-class-additional/student-class-additional.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/student/student-class-additional/student-class-additional.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-class-additional [value]=\"data\"></app-class-additional>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skt/tag/tag-additional/tag-additional.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skt/tag/tag-additional/tag-additional.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!----------Tag Details------------>\r\n<ion-header style=\"height: 100px;\">\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"1\"><ion-icon name=\"arrow-back\" style=\"float: right;color: gray;font-size: 25px; margin:0px auto;\" (click)=\"closeModal()\"></ion-icon></ion-col>\r\n      <ion-col size=\"11\"><ion-title  class=\"popup-head\">Tag Details</ion-title></ion-col>\r\n    </ion-row> \r\n  </ion-toolbar>\r\n</ion-header>\r\n<div class='tag-container'>\r\n  <form [formGroup]=\"tagLogin\">\r\n<ion-row> \r\n  <ion-col size=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"margin:auto\">\r\n    <ion-list lines=\"none\" style=\"background: transparent;\">\r\n    <ion-item class=\"tag-items\">\r\n        <ion-img src=\"assets/student_Details/identity-128.svg\" slot=\"start\" style=\"width: 35px;height: 27px;\"\r\n          class=\"tag-icon\"></ion-img>\r\n        <ion-input [disabled]=\"editTextbox\" type=\"text\" placeholder=\"{{editTagId}}\" class=\"tag-input\"  formControlName=\"tagId\"></ion-input>\r\n     </ion-item>\r\n      <ion-item class=\"tag-items\">\r\n        <ion-img src=\"assets/student_Details/tagid1.svg\" slot=\"start\" style=\"width: 35px;height: 27px;\"\r\n          class=\"tag-icon\"></ion-img>\r\n        <select class=\"box\" formControlName=\"tagType\">\r\n          <option value=\"\" disabled selected hidden class=\"option-head\">Select Tag Type</option>\r\n          <option  *ngFor=\"let tags of tagTypes\" [value]=\"tags\">{{tags}}</option>\r\n        </select>\r\n     \r\n      </ion-item>\r\n    </ion-list>\r\n \r\n  </ion-col>\r\n</ion-row>\r\n<ion-row>\r\n  <ion-col style=\"margin:auto;text-align: center;\">\r\n    <div>\r\n      <ion-button shape=\"round\" color=\"primary\" class=\"tag-btn\" (click)=\"submitBtn()\" [disabled]=\"!tagLogin.valid\">submit</ion-button>\r\n      <ion-button type=\"reset\" fill=\"outline\" shape=\"round\" color=\"primary\" class=\"tag-btn\">clear</ion-button>\r\n    </div>\r\n  </ion-col>\r\n</ion-row>\r\n </form>\r\n</div>\r\n<!----------TagDetailsEnd------------>\r\n"

/***/ }),

/***/ "./src/app/services/skt.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/skt.service.ts ***!
  \*****************************************/
/*! exports provided: SktService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SktService", function() { return SktService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SktService = class SktService {
    constructor() {
        this.parentDetailsListSkt = [
            "test3 test3",
            "testparent",
            "test2 test2",
            "PARENT80 PARENT80",
            "SYED YOUSUF",
            "ISMAIL KHAN S",
            "PARENT80 PARENT80",
            "parents37 parents37",
            "TAJAMMUL HUSSAIN A",
            "part 15 part15",
            "ABDULLAH M",
            "THAJUDEEN ABUL HASSAN",
            "PARENT 56 PARENT56",
            "SYED I HUSSAIN",
            "SHEERIN RIZWANA VASILA",
            "PARENY678 LTD",
            "MOHAMMED ABDUL KASIM A",
            "PARENTS 43 PARENTS 43",
            "KALEEM BASHA",
            "SADIQ AHAMED",
            "SADIQ",
            "PARENT60 PARENT60",
            "PARENTS27 PARENTS27",
            "MOHD QUASIM",
            "parent7845828138 LTD",
            "SIRAJUDDIN Y",
            "IBRAHIM SAHIB P",
            "SHEIK ABDULLA A",
            "JAVEED BASHA K",
            "MOHAMMED ABDUR RAHMAN",
            "KAMARUDDIN M A H",
            "VASU J",
            "ANEES BASHA G",
            "SYED MOHAMED MOULANA J",
            "SALEEM S",
            "sameeha father b",
            "PARENTS30 PARENTS30",
            "PARENT67 PARENT67",
            "RIYAZ AHMAD",
            "PARENT80 PARENT80",
            "UMAR KATHAP",
            "PARENT17 PARENT17",
            "SHANAWAZ A",
            "SIRAJUDDIN",
            "NIL NIL",
            "KHAJA KAREEMULLAH N",
            "SEENI MOHAMED SATHATH M",
            "PARENT 41 PARENT 41",
            "PARENT51 PARENT51",
            "AKBAR SALIM H A",
            "SYED MASOOD M",
            "parent 36 parent36",
            "PARENTS5 PARENT5",
            "THASIN BASHA D",
            "ANWAR SATHIK S",
            "SIKKANDAR M",
            "SULTAN M J S",
            "MOHAMED HANIFA L",
            "MOHAMED ISMAIL",
            "SHAMS TABREZ R",
            "MOHAMMED SAMIULLAH",
            "ABDULLA M",
            "FAIZ MOHAMED KHAN",
            "ABDUL RAZAK M A K",
            "SYED AHAMED TAMEEM K",
            "VASEEM AHMED A",
            "KHADER MOHIDEEN N",
            "SYED HASSAIN",
            "KAREEM K H",
            "PART 40 PART40",
            "parent4 parent4",
            "KALVATH ABDUL KHADER M S",
            "SHAIK MOHAMMED YOUSUFF",
            "ABDUL SAMADU M",
            "SULAIMAN BASHA A",
            "MD FARHAN BADSHA SAYEED",
            "MOHAMMAD EHSAN",
            "MAHFUZUR RAHMAN",
            "QAMRUL ISLAM",
            "DAWOOD",
            "Unity Hussian",
            "MOHAMED ROBIK",
            "NADEEM ABDULLAH W",
            "MUNEER AHAMED G",
            "ABDULLAH",
            "ANWAR SADAT A P M",
            "MOHAMMAD SHABBIR ALAM",
            "SADIQ AHMED V S",
            "SHABEEK RAHUMAN A V",
            "MOHAMMED NAZEER HUSSAIN A K",
            "PARVEZ NASEER G M",
            "ABDUL RASHEED S",
            "AHAMED SHERIFF A",
            "MOHAMED HABIBULLAH S",
            "PARVEZ NASEER G M",
            "KHAJA MOHIDEEN M A",
            "MOHAMED ANWAR M I",
            "MUHAMMED ASLAM SHARIEF",
            "RAFFIC HUSSAIN M",
            "DR FATHIMA BANU",
            "MUJAHIDUL ISLAM",
            "MOHAMED IRSHADH S PARENT",
            "MOHAMED RAFIQ P",
            "PARENT68 PARENT68",
            "NAZIR AHAMED A",
            "MOHAMMED IBRAHIM.A",
            "MOHAMED ISMAIL",
            "THOULATTHULLA G M",
            "SYED ABDUL REHAMAN ZUBAIR",
            "JEYAKHAN A M",
            "ASAN MYDEEN R",
            "PARENT 38 PARENT 38",
            "SHEIK MUJBOOR RAHMAN",
            "KADHAR BASHA S K",
            "HAFEEZUR RAHMAN A B",
            "K THAMEEM ANSARI",
            "MUSHTAQ PASHA S J S",
            "MOHIDEEN ABDUL KHADER A R",
            "AL ALAHAPPHAN",
            "JEYA KHAN A M",
            "MOHAMED ILYAS K",
            "NAJEEB AHMED",
            "MOHAMED ALI M",
            "MOHIDEEN BOOSARI N M",
            "KHALEELUR RAHMAN M",
            "BASHIR AHMED M",
            "NAVASKHAN SAMSURALI",
            "SYED NASEER AHMED",
            "MUSHTAQ PASHA S.J.S",
            "ABUL HASAN SHADULY M",
            "SHIHABUDHEEN MALIYEKKAZ DR",
            "MOHAMMED NAZEER HUSSAIN",
            "FARHANA SHIREEN A PARENT",
            "MUHAMMED MUBEEN A",
            "PARENT55 PARENT55",
            "SHAFFI AHMED M",
            "PARENT PARENT",
            "VINAYAGAMOORTHY M",
            "ABDUL TAHIRUR RAHMAN",
            "SYED FAKHIR MOHIUDEEN",
            "NISAR AHMED A",
            "ABDUR RAHMAN R",
            "NAZIR AHAMED A",
            "janarthana kumar",
            "RASOOL MOHIDEEN S A",
            "SYED RAHMATHULLA R",
            "MERCURY CAR RENTALS LTD",
            "TAMIMOUL ANSARI S",
            "AHAMED HUSSAIN M D",
            "MUJEE UR REHEMAN B",
            "MOHAMAD JAKIR HUSSAIN S",
            "SYED ABDUL KHADER I",
            "MUJEE UR REHEMAN B",
            "ABUBAKKAR T",
            "IRSHAD SHARIFF",
            "SHEIK MOHAMMED J",
            "AMEERDEEN Y",
            "SYED MOHAMED BUHARI S S",
            "MOHAMMAD ABID ALI",
            "ASKAR ALI KHAN H",
            "AYUB KHAN A",
            "MOHIDEEN NATHHAR",
            "NOOR MOHAMED",
            "PARENT58 PARENT58",
            "KADAR MOHIDEEN",
            "BAHRUDEEN Z",
            "abdul",
            "MOHAMMED ASLAM I",
            "ABDUL KAREEM K K",
            "Kader Mohideen M",
            "MUHAMMAD MOHIDEEN MARICAR",
            "NOOR MOHAMED",
            "HUSNE MUBARAK A",
            "MADHEENA",
            "RAHIM SHARIFF D",
            "MOOSAL KALIM M A",
            "VASU J",
            "BADHURDEEN B A",
            "THALIF ALI A",
            "SHAIK ISMAIL",
            "ZULFIQARALI KAMAL",
            "AHAMED MANJUR MOHAMED IBRAHIM",
            "PARENT 40 PARENT40",
            "PARENTS 85 PARENTS 85",
            "SADIQ ALI K",
            "PARENT26 PARENT26",
            "nil nil",
            "FAQRUDIN M",
            "ABDUL HUQ RAMEEZ",
            "SYED ALI I",
            "HAFEEZ A H",
            "PARENT34 PARENT34",
            "NAZEERULLAH A",
            "ABDUL SHAHID",
            "SHAMSUDDEEN K P",
            "JAMALUDEEN N",
            "PARENT8 PARENT8",
            "parent2 parent2",
            "ASHIK ALI J",
            "MOHAMMED RAFI S",
            "AHMED IBRAHIM BILAL T",
            "SEENI IBRAM SHA",
            "RAFI MOHAMED",
            "SAFIYUR RAHMAN",
            "PARENT77 PARENT77",
            "ASAN MOHIDEEN Y",
            "SUHAIL K",
            "ABDUL HAKEEM K",
            "AHMED MUDASSAR ALI",
            "ABDUL SAHIB K",
            "ABOOBUCKER JALALUDEEN R",
            "MOHAMMED THAMEEM ANSARI M",
            "PARENT 85 PARENT 85",
            "NIJAMUDEEN",
            "SHAMSUDDIN K F",
            "BAIJUL MILLA Y",
            "SYED HABBAS H",
            "SHAMEEM B M",
            "ANWARDEEN H",
            "MOHAMED EBRAHIM A",
            "JAFARULLA KHAN M S A",
            "MOHAMED JAHAN G",
            "SHEIK MUJEEPUR RAHMAN S",
            "MANOHAR M",
            "PARENT36 PARENT36",
            "IMTHIAZ M K",
            "UBAIDULLAH S",
            "JAFFER ALI S",
            "A MOHAMMED IBRAHIM",
            "PARENT21 PARENT21",
            "MOHAMED IBRAHIM S M",
            "KADHAR MASTHAN K M",
            "SOUKATHALI",
            "ABDUL HAMEED N",
            "PART56 PART56",
            "AHAMED ALI S",
            "SHAIK MOHAMED YOUSUF M S",
            "RAFIQ AHMED S",
            "ZIAULLAH R",
            "MUHAMMAD YUSUF",
            "ABDUL RAVOOF R",
            "YASSER AURAFATH R R",
            "BAHRUDEEN",
            "ZACKIR HUSSAI K",
            "MOHAMED ASAD",
            "KAMALUDEEN",
            "ISMAIL KHAN S",
            "PARENT68 PARENT68",
            "GHOUSE BASHA",
            "MOHAMED ZAHURUDDIN S",
            "JAFFAR ALI A",
            "NAINAR FIRTHOUSE ALI",
            "SHANAWAZ A",
            "SYED NAINA MOHAMED",
            "SYED IBRAHIM",
            "MOHAMMED FAISAL ZULFUQUAR",
            "SAMSUDIN J",
            "ANSARI A Y",
            "MOHAMMAD KHASIM G",
            "NADUVILOTHI SARIN",
            "AHMED BASHA A",
            "MOHAMED SHERIF S",
            "JAFEER MEERAN B",
            "KISAR MOHAMED K",
            "MUHAMADU KAMALUDEEN A",
            "MOHAMED YUSUF A",
            "ASHOK M",
            "IRFAN BUHARI C M",
            "YAASEEN MASVOOD",
            "parent009 LTD",
            "PARENT 44 PARENT44",
            "JAKIR HUSSAIN",
            "SAMIULLAH KHAN",
            "MEERA MOHIDEEN H",
            "KADER MYDEEN",
            "PARENT33 PARENT33",
            "NIZAMDEEN",
            "MOHAMED JAMAL",
            "GHOUSE AHMED K",
            "ABDULLAH M",
            "FARHAN K",
            "MOHAMED NOORUL AMEEN S",
            "ABDUL MUBARAK S",
            "MOHAMMAD RAFFIK RAJA M A",
            "PARENT 47 PARENT47",
            "MOHAMMED GHOUSE",
            "BEER A P",
            "ALIAKBAR",
            "ABDUL RAHIM P A",
            "PARENT54 PARENT54",
            "Nisar Ahmed Shariff Nisar Ahmed Shariff",
            "PS12 PS12",
            "SHAIK KADIR ABDUL",
            "ASHFAQ AHAMED R",
            "MOHAMED MOHIDEEN",
            "PARENT65 PARENT65",
            "AFZAL KHAN K",
            "M N SHEIK UDUMAN",
            "AHAMED BASHEER K K",
            "MOHIDEEN GANI A",
            "ABDUL KADHER",
            "FAROOK N",
            "PARENT11 LTD",
            "JAVID KHAN N",
            "parent567 LTD",
            "SHAHUL HAMEED SHAJAHAN",
            "USNE MUBARAK A",
            "MANSOOR ALI R",
            "SHABEEK RAHMAN A V",
            "ABDUL RAJAK M G",
            "PARENT 79 PARENT 79",
            "KADER MUHIDEEN",
            "MOHAMED ABDUL CADER",
            "MOHAMED IRSHAD",
            "SHAHUL HAMEED M",
            "PARENT58 PARENT58",
            "DR.M.MOHAMMED SALAMULLAH",
            "IRSHAD KHALEEL",
            "OMAR SHERIFF A",
            "SHAHUL HAMED B",
            "PARENT 59 PARENT59",
            "RAYEES T K",
            "GHOUSE MOHAMED M H",
            "MOHAMMED NIVAS T",
            "SHEIK ABUBAKKER SIDDIG S",
            "FAYAZ AHAMED K",
            "PARENT22 PARENT22",
            "PARENT 50 PARENT 50",
            "MOHAMMED ABDUL AZEEM",
            "ABDUL KHADER SULAIMAN",
            "ZULFIQARALI K B",
            "MOHAMED ARIF PASHA A",
            "ABDULLAH BILAL",
            "AJMEER KHAN K",
            "MOHAMED ARIF PASHA A",
            "PARENTS24 PARENTS24",
            "RYAS AHAMED A M",
            "THAMEEMUL ANSARI M Y",
            "MOHAMED SHAHUL HAMEED",
            "SYED ALI S",
            "SHOUJIK MOHAMED",
            "PARENTS 38 PARENTS 38",
            "MOHAMMAD NIYAZ M",
            "SHAHUL HAMEED S",
            "MIRNA SAINAF PARENT",
            "SIRAJUDEEN J",
            "SYED LIYAKATH ALI",
            "SHAHUL HAMEED H",
            "ABDUL MAJEED A",
            "PARENT 72 PARENT72",
            "SAIFULLAH",
            "FAROOK MEERAN M",
            "PARENTS16 PARENTS16",
            "MOHAMED SHAHUL HAMEED SHERIFF S K",
            "MOHAMMED HASSAN MARICAR",
            "SHANNAWAZ A",
            "MOHAMED IQBAL H",
            "MOHAMED IQBAL",
            "BALAMURUGAN",
            "MOHAMED ALI",
            "SADAKUTHULLAH S",
            "PARENT57 PARENT57",
            "NOOR MOHAMED A",
            "MUHAMED RIYAZ M",
            "parents17 parents17",
            "MUBARAQ ALI k",
            "SYED SAIT",
            "MOHAMED RAFI K M",
            "parent567 LTD",
            "MOHAIDEEN ABDUL KHADER",
            "NAVASKHAN SAMSUR ALI",
            "PARENT57 PARENT57",
            "parent20 parent20",
            "MD IMTIAZ AHMAD KHAN",
            "MOHAMED ZACKRIA M",
            "partent24 parent24",
            "BAABJAN B",
            "MOHAMMED SAMIYULLAH R",
            "NIL NIL",
            "RIYAZ AHAMED F",
            "MOHAMED SABIK",
            "ANWAR SADATH",
            "PARENT 46 PARENT 46",
            "MOHAMED ARSHADU ALI M S",
            "MOHAMMED IMRAN PATEL",
            "MOHAMED ABDUL HAKEEM S",
            "RIYAZ AHAMED P",
            "SYED LIYAKATH ALI",
            "MOHAMED SEHU OLI",
            "parent9994161939 LTD",
        ];
        this.selecttagidSkt = [
            '8220000002', '8220000003', '8220000004', '8220000005', '8220000006',
            '8220000007', '8220000008', '8220000009', '8220000010', '8220000012', '8220000014', '8220000018', '8220000047',
            '8220000080', '8220000088', '8220000092', '8220000097', '8220000098', '8220000103', '8220000107', '8220000108',
            '8220000109', '8220000110', '8220000112', '8220000114', '8220000126', '8220000133', '8220000136', '8220000140',
            '8220000141', '8220000143', '8220000144', '8220000147', '8220000148', '8220000149', '8220000156', '8220000168',
            '8220000169', '8220000174', '8220000176', '8220000185', '8220000191', '8220000194', '8220000195', '8220000196',
            '8220000197', '8220000201', '8220000209', '8220000210', '8220000211', '8220000212', '8220000215', '8220000223',
            '8220000224', '8220000225', '8220000226', '8220000232', '8220000233', '8220000244', '8220000247', '8220000248',
            '8220000252', '8220000253', '8220000254', '8220000259', '8220000261', '8220000262', '8220000263', '8220000265',
            '8220000266', '8220000267', '8220000270', '8220000275', '8220000279', '8220000280', '8220000281', '8220000282',
            '8220000287', '8220000289', '8220000290', '8220000291', '8220000292', '8220000293', '8220000294', '8220000295',
            '8220000296', '8220000297', '8220000298', '8220000299', '8220000301', '8220000302', '8220000303', '8220000304',
            '8220000305', '8220000309', '8220000320', '8220000322', '8220000327', '8220000328', '8220000334', '8220000335',
            '8220000337', '8220000338', '8220000339', '8220000340', '8220000342', '8220000343', '8220000344', '8220000347',
            '8220000348', '8220000349', '8220000350', '8220000352', '8220000354', '8220000355', '8220000356', '8220000357',
            '8220000358', '8220000359', '8220000360', '8220000364', '8220000369', '8220000372', '8220000374', '8220000381',
            '8220000385', '8220000386', '8220000387', '8220000388', '8220000392', '8220000393', '8220000395', '8220000396',
            '8220000397', '8220000398', '8220000399', '8220000400', '8220000401', '8220000402', '8220000403', '8220000404',
            '8220000405', '8220000406', '8220000407', '8220000408', '8220000413', '8220000422', '8220000423', '8220000424',
            '8220000426', '8220000427', '8220000432', '8220000439', '8220000440', '8220000529', '8220003029', '8220004529',
            '8220006729', '8220007829', '8220008007', '8220067823', '8220087829', '8220467823', '8220603029', '8440000543',
            '8440000564', '8440000586', '8440000590', '8440000593', '8440000595', '8440000596', '8440000611', '8440000643'
        ];
        this.classidSkt = [
            'I', 'II', 'III', 'IV', 'IX', 'LKG', 'STD I', 'STD II', 'STD III', 'STD IV', 'STD IX', 'STD V', 'STD VI', 'STD VII', 'STD VIII',
            'STD X', 'STD XI-GROUP1', 'STD XI-GROUP2', 'STD XI-GROUP3', 'STD XI-GROUP4', 'STD XI-GROUP5', 'STD XII-GROUP1', 'STD XII-GROUP2',
            'STD XII-GROUP3', 'STD XII-GROUP4', 'STD XII-GROUP5', 'UKG', 'V', 'VI', 'VII', 'VIII', 'X', 'XI-1', 'XI-2', 'XI-3', 'XI-4',
            'XI-5', 'XII-1', 'XII-2', 'XII-5',
        ];
        this.pickuprouteSkt = [
            'BUS-B', 'BUS-C', 'BUS-D', 'BUS-E', 'BUS-F', 'BUS-H', 'BUS-I', 'BUS-K', 'BUS-N', 'BUS-R', 'BUS-S', 'undefined', 'BUS-V'
        ];
        this.alertoptionSkt = [
            'Sms', 'Mail', 'Both', 'None'
        ];
        this.mapoptionSkt = [
            'Circle', 'Rectangle', 'FreeForm'
        ];
        this.droprouteSkt = [
            'BUS-B', 'BUS-C', 'BUS-D', 'BUS-DG', 'BUS-E', 'BUS-F', 'BUS-H', 'BUS-I', 'BUS-K', 'BUS-N', 'BUS-R', 'BUS-S', 'undefined', 'BUS-V'
        ];
        this.objSkt = [
            {
                'userId': '9442972366',
                'roll': 'parent',
                'parentName': 'Rahamathulla',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'emailaddress': 'rahamath43@gmail.com',
                'contactno': '9442972366',
            },
            {
                'userId': '8122991988',
                'roll': 'parent',
                'parentName': 'Azeem',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'emailaddress': 'azeembasha@gmail.com',
                'contactno': '8122991988'
            },
            {
                'userId': '9500243158',
                'roll': 'parent',
                'parentName': 'Riyaz',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'emailaddress': 'riyaz@gmail.com',
                'contactno': '9500243158'
            },
            {
                'userId': '9500243158',
                'roll': 'parent',
                'parentName': 'Riyaz',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'emailaddress': 'riyaz@gmail.com',
                'contactno': '9500243158'
            },
            {
                'userId': '9500243158',
                'roll': 'parent',
                'parentName': 'Riyaz',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'emailaddress': 'riyaz@gmail.com',
                'contactno': '9500243158'
            },
            {
                'userId': '9500243158',
                'roll': 'parent',
                'parentName': 'Riyaz',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'emailaddress': 'riyaz@gmail.com',
                'contactno': '9500243158'
            },
            {
                'userId': '9500243158',
                'roll': 'parent',
                'parentName': 'Riyaz',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'emailaddress': 'riyaz@gmail.com',
                'contactno': '9500243158'
            },
            {
                'userId': '9500243158',
                'roll': 'parent',
                'parentName': 'Riyaz',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'emailaddress': 'riyaz@gmail.com',
                'contactno': '9500243158'
            },
            {
                'userId': '9500243158',
                'roll': 'parent',
                'parentName': 'Riyaz',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'emailaddress': 'riyaz@gmail.com',
                'contactno': '9500243158'
            },
            {
                'userId': '9500243158',
                'roll': 'parent',
                'parentName': 'Riyaz',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'emailaddress': 'riyaz@gmail.com',
                'contactno': '9500243158'
            },
            {
                'userId': '9500243158',
                'roll': 'parent',
                'parentName': 'Riyaz',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'emailaddress': 'riyaz@gmail.com',
                'contactno': '9500243158'
            },
            {
                'userId': '9500243158',
                'roll': 'parent',
                'parentName': 'Riyaz',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'emailaddress': 'riyaz@gmail.com',
                'contactno': '9500243158'
            },
            {
                'userId': '9500243158',
                'roll': 'parent',
                'parentName': 'Riyaz',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'emailaddress': 'riyaz@gmail.com',
                'contactno': '9500243158'
            },
            {
                'userId': '9500243158',
                'roll': 'parent',
                'parentName': 'Riyaz',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'emailaddress': 'riyaz@gmail.com',
                'contactno': '9500243158'
            },
            {
                'userId': '9500243158',
                'roll': 'parent',
                'parentName': 'Riyaz',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'emailaddress': 'riyaz@gmail.com',
                'contactno': '9500243158'
            },
            {
                'userId': '9500243158',
                'roll': 'parent',
                'parentName': 'Riyaz',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'emailaddress': 'riyaz@gmail.com',
                'contactno': '9500243158'
            },
            {
                'userId': '9500243158',
                'roll': 'parent',
                'parentName': 'Riyaz',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'emailaddress': 'riyaz@gmail.com',
                'contactno': '9500243158'
            },
        ];
        this.objeSkt = [
            {
                'rollno': '001',
                'firstname': 'Mubeen',
                'lastname': "",
                'tagid': '8222310045',
                'gender': 'female',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'class': 'IX',
                'section': 'BOY',
                'contactno': '8122991988'
            },
            {
                'rollno': '002',
                'firstname': 'Rahamathulla',
                'lastname': "",
                'tagid': '8222310045',
                'gender': 'Male',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'class': 'X',
                'section': 'GA',
                'contactno': '8122991988'
            },
            {
                'rollno': '003',
                'firstname': 'Malar',
                'lastname': "",
                'tagid': '8222310045',
                'gender': 'Male',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'class': 'X',
                'section': 'GA',
                'contactno': '8122991988'
            },
            {
                'rollno': '004',
                'firstname': 'Rahamath',
                'lastname': "",
                'tagid': '8222310045',
                'gender': 'Male',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'class': 'X',
                'section': 'GA',
                'contactno': '8122991988'
            },
            {
                'rollno': '005',
                'firstname': 'Rahamath',
                'lastname': "",
                'tagid': '8222310045',
                'gender': 'Male',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'class': 'X',
                'section': 'GA',
                'contactno': '8122991988'
            },
            {
                'rollno': '006',
                'firstname': 'Rahamath',
                'lastname': "",
                'tagid': '8222310045',
                'gender': 'Male',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'class': 'X',
                'section': 'GA',
                'contactno': '8122991988'
            },
            {
                'rollno': '007',
                'firstname': 'Rahamath',
                'lastname': "",
                'tagid': '8222310045',
                'gender': 'Male',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'class': 'X',
                'section': 'GA',
                'contactno': '8122991988'
            },
            {
                'rollno': '008',
                'firstname': 'Rahamath',
                'lastname': "",
                'tagid': '8222310045',
                'gender': 'Male',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'class': 'X',
                'section': 'GA',
                'contactno': '8122991988'
            },
            {
                'rollno': '009',
                'firstname': 'Rahamath',
                'lastname': "",
                'tagid': '8222310045',
                'gender': 'Male',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'class': 'X',
                'section': 'GA',
                'contactno': '8122991988'
            },
            {
                'rollno': '0010',
                'firstname': 'Rahamath',
                'lastname': "",
                'tagid': '8222310045',
                'gender': 'Male',
                'address': 'Flat No.8,Azhagarperumal kovil street,Choolaimedu',
                'class': 'X',
                'section': 'GA',
                'contactno': '8122991988'
            },
        ];
        this.objtag = [
            {
                'tagId': '80009000124',
                'tagType': 'Passive',
                'associateStu': 'AAminaFathima',
                'class': 'STD XI-GROUP1',
                'section': 'A'
            },
            {
                'tagId': '9800090001',
                'tagType': 'Passive',
                'associateStu': 'Sameena',
                'class': 'STD X',
                'section': 'B'
            },
            {
                'tagId': '8000900012',
                'tagType': 'Passive',
                'associateStu': 'Farhana',
                'class': 'STD VI',
                'section': 'B'
            },
        ];
        this.gateSkt = [
            {
                'gateId': '1231',
                'gatename': 'Tamarai',
                'location': '324/2222,Poongodai Nagar,Chennai',
                'description': 'is assignable to parameter of type ',
                'deviceIMEI': '5434567823'
            },
            {
                'gateId': '1231',
                'gatename': 'Tamarai',
                'location': '324/2222,Poongodai Nagar,Chennai',
                'description': 'is assignable to parameter of type ',
                'deviceIMEI': '5434567823'
            },
            {
                'gateId': '1231',
                'gatename': 'Tamarai',
                'location': '324/2222,Poongodai Nagar,Chennai',
                'description': 'is  assignable to parameter of type ',
                'deviceIMEI': '5434567823'
            }
        ];
        this.schoolEnable = [
            {
                'id': '564367',
                'fromDate': '2021-03-22',
                'toDate': '2021-05-02',
                'type': 'Enable',
                'reason': 'gfdgsdhhs',
                'single': "true",
                'multiple': "false"
            },
            {
                'id': '564367',
                'fromDate': '2021-03-22',
                'toDate': '2021-05-02',
                'type': 'Enable',
                'reason': 'gfdgsdhhs',
                'single': "true",
                'multiple': "false"
            },
            {
                'id': '564367',
                'fromDate': '2021-03-22',
                'toDate': '2021-05-02',
                'type': 'Enable',
                'reason': 'gfdgsdhhs',
                'single': "true",
                'multiple': "false"
            }, {
                'id': '564367',
                'fromDate': '2021-03-22',
                'toDate': '2021-05-02',
                'type': 'Enable',
                'reason': 'gfdgsdhhs',
                'single': "true",
                'multiple': "false"
            }, {
                'id': '564367',
                'fromDate': '2021-03-22',
                'toDate': '2021-05-02',
                'type': 'Enable',
                'reason': 'gfdgsdhhs',
                'single': "true",
                'multiple': "false"
            },
        ];
        this.routeName = ["BUS-B", "BUS-C", "BUS-D", "BUS-DG", "BUS-E", "BUS-F", "BUS-H", "BUS-I", "BUS-K", "BUS-N", "BUS-R", "BUS-S", "undefined", "BUS-V"];
        this.vehicleNumber = ["TN 07 BH 4603-spare", "TN 22 AV 7123"];
        this.trip = ["Pickup", "Drop", "Wokeup"];
        this.data = [
            {
                'tripName': 'Morning',
                'tripId': '2312',
                'tripStartTime': '07:00:00',
                'tripEndTime': '05:00:00',
                'type': 'Pickup',
            },
            {
                'tripName': 'Afternoon',
                'tripId': '2312',
                'tripStartTime': '06:00:00',
                'tripEndTime': '05:00:00',
                'type': 'Pickup',
            },
            {
                'tripName': 'Evening',
                'tripId': '2312',
                'tripStartTime': '05:00:00',
                'tripEndTime': '05:00:00',
                'type': 'Pickup',
            },
            {
                'tripName': 'Morning',
                'tripId': '2312',
                'tripStartTime': '05:00:00',
                'tripEndTime': '05:00:00',
                'type': 'Pickup',
            },
            {
                'tripName': 'Morning',
                'tripId': '2312',
                'tripStartTime': '05:00:00',
                'tripEndTime': '05:00:00',
                'type': 'Pickup',
            },
            {
                'tripName': 'Morning',
                'tripId': '2312',
                'tripStartTime': '05:00:00',
                'tripEndTime': '05:00:00',
                'type': 'Pickup',
            },
            {
                'tripName': 'Morning',
                'tripId': '2312',
                'tripStartTime': '05:00:00',
                'tripEndTime': '05:00:00',
                'type': 'Pickup',
            },
            {
                'tripName': 'Morning',
                'tripId': '2312',
                'tripStartTime': '05:00:00',
                'tripEndTime': '05:00:00',
                'type': 'Pickup',
            },
            {
                'tripName': 'Morning',
                'tripId': '2312',
                'tripStartTime': '05:00:00',
                'tripEndTime': '05:00:00',
                'type': 'Pickup',
            },
            {
                'tripName': 'Morning',
                'tripId': '2312',
                'tripStartTime': '05:00:00',
                'tripEndTime': '05:00:00',
                'type': 'Pickup',
            },
        ];
        this.broadOdj = [
            {
                'id': '12345',
                'companyid': '456754',
                'branchid': '5456666',
                'userid': '53453453',
                'category': 'gdhdfh',
                'misc': 'gjhgfjf',
                'fmobile': 'hfhdfhhgf',
                'tmobile': 'gjgjgjg',
                'msg': 'uygcvj',
                'msgtype': 'nbbvnvbm',
                'etime': 'ghgfjgfj',
                'stime': 'bvncvncv'
            },
            {
                'id': '12345',
                'companyid': '456754',
                'branchid': '5456666',
                'userid': '53453453',
                'category': 'gdhdfh',
                'misc': 'gjhgfjf',
                'fmobile': 'hfhdfhhgf',
                'tmobile': 'gjgjgjg',
                'msg': 'uygcvj',
                'msgtype': 'nbbvnvbm',
                'etime': 'ghgfjgfj',
                'stime': 'bvncvncv'
            },
            {
                'id': '12345',
                'companyid': '456754',
                'branchid': '5456666',
                'userid': '53453453',
                'category': 'gdhdfh',
                'misc': 'gjhgfjf',
                'fmobile': 'hfhdfhhgf',
                'tmobile': 'gjgjgjg',
                'msg': 'uygcvj',
                'msgtype': 'nbbvnvbm',
                'etime': 'ghgfjgfj',
                'stime': 'bvncvncv'
            },
        ];
        //                 <ion-row>
        //                   <ion-col>Route name</ion-col>
        //                   <ion-col> AH1</ion-col>
        this.students = [
            {
                'studentName': 'Javid Khan',
                'section': 'A',
                'standard': 'III',
                'driverName': 'Abdullah',
                'driverContact': 8122991988,
                'attenderName': 'Riyaz',
                'attenderContact': 9840158425,
                'plateNumber': 'TN 24 03214',
                'boardingStatus': 'Stared at Home',
                'routeName': 'AH1'
            },
            {
                'studentName': 'Imran',
                'section': 'C',
                'standard': 'IX',
                'driverName': 'Abdullah',
                'driverContact': 8122991988,
                'attenderName': 'Riyaz',
                'attenderContact': 9840158425,
                'plateNumber': 'TN 24 03214',
                'boardingStatus': 'Reached school',
                'routeName': 'NH40'
            },
            {
                'studentName': 'Jailani Yasar M',
                'section': 'A',
                'standard': 'X',
                'driverName': 'Abdullah',
                'driverContact': 8122991988,
                'attenderName': 'Riyaz',
                'attenderContact': 9840158425,
                'plateNumber': 'TN 24 03214',
                'boardingStatus': 'On board',
                'routeName': 'NH7'
            },
            {
                'studentName': 'Gokul',
                'section': 'A',
                'standard': 'XI',
                'driverName': 'Abdullah',
                'driverContact': 8122991988,
                'attenderName': 'Riyaz',
                'attenderContact': 9840158425,
                'plateNumber': 'TN 24 03214',
                'boardingStatus': 'Reached school',
                'routeName': 'AH2'
            },
            {
                'studentName': 'Javid Khan',
                'section': 'A',
                'standard': 'III',
                'driverName': 'Abdullah',
                'driverContact': 8122991988,
                'attenderName': 'Riyaz',
                'attenderContact': 9840158425,
                'plateNumber': 'TN 24 03214',
                'boardingStatus': 'Stared at Home',
                'routeName': 'AH3'
            },
            {
                'studentName': 'Imran',
                'section': 'C',
                'standard': 'IX',
                'driverName': 'Abdullah',
                'driverContact': 8122991988,
                'attenderName': 'Riyaz',
                'attenderContact': 9840158425,
                'plateNumber': 'TN 24 03214',
                'boardingStatus': 'Reached school',
                'routeName': 'AH1'
            },
            {
                'studentName': 'Jailani Yasar M',
                'section': 'A',
                'standard': 'X',
                'driverName': 'Abdullah',
                'driverContact': 8122991988,
                'attenderName': 'Riyaz',
                'attenderContact': 9840158425,
                'plateNumber': 'TN 24 03214',
                'boardingStatus': 'Stared at Home',
                'routeName': 'AH1'
            },
            {
                'studentName': 'Gokul',
                'section': 'A',
                'standard': 'XI',
                'driverName': 'Abdullah',
                'driverContact': 8122991988,
                'attenderName': 'Riyaz',
                'attenderContact': 9840158425,
                'plateNumber': 'TN 24 03214',
                'boardingStatus': 'Reached school',
                'routeName': 'AH1'
            },
            {
                'studentName': 'Imran',
                'section': 'C',
                'standard': 'IX',
                'driverName': 'Abdullah',
                'driverContact': 8122991988,
                'attenderName': 'Riyaz',
                'attenderContact': 9840158425,
                'plateNumber': 'TN 24 03214',
                'boardingStatus': 'On board',
                'routeName': 'AH1'
            },
            {
                'studentName': 'Jailani Yasar M',
                'section': 'A',
                'standard': 'X',
                'driverName': 'Abdullah',
                'driverContact': 8122991988,
                'attenderName': 'Riyaz',
                'attenderContact': 9840158425,
                'plateNumber': 'TN 24 03214',
                'boardingStatus': 'Stared at Home',
                'routeName': 'AH1'
            },
            {
                'studentName': 'Gokul',
                'section': 'A',
                'standard': 'XI',
                'driverName': 'Abdullah',
                'driverContact': 8122991988,
                'attenderName': 'Riyaz',
                'attenderContact': 9840158425,
                'plateNumber': 'TN 24 03214',
                'boardingStatus': 'On board',
                'routeName': 'AH1'
            },
        ];
    }
};
SktService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SktService);



/***/ }),

/***/ "./src/app/skt/broad/broadcast-additional/broadcast-additional.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/skt/broad/broadcast-additional/broadcast-additional.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submitBtn:hover {\n  background-color: #c4c3c5;\n}\n\n#broad-cast-wrapper {\n  margin: 10px;\n  background: #f3f3f3;\n  margin: 0px 15px 22px;\n  padding: 10px;\n  font-size: 14px;\n}\n\n#toolbarHeader {\n  font-size: 18px;\n  color: #388fff;\n  font-weight: bold;\n  padding: 15px;\n}\n\n.radio-label {\n  vertical-align: top;\n  padding: 10px;\n}\n\n.col-center {\n  align-self: center;\n}\n\n.boxsize {\n  border: 1px solid lightgrey;\n  background: white;\n  width: 100%;\n  font-size: 13px;\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t0L2Jyb2FkL2Jyb2FkY2FzdC1hZGRpdGlvbmFsL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcc2t0XFxicm9hZFxcYnJvYWRjYXN0LWFkZGl0aW9uYWxcXGJyb2FkY2FzdC1hZGRpdGlvbmFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9za3QvYnJvYWQvYnJvYWRjYXN0LWFkZGl0aW9uYWwvYnJvYWRjYXN0LWFkZGl0aW9uYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0VGOztBREFBO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNHRDs7QUREQTtFQUNDLG1CQUFBO0VBQ0EsYUFBQTtBQ0lEOztBREZBO0VBQ0Msa0JBQUE7QUNLRDs7QURIQTtFQUNDLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTUQiLCJmaWxlIjoic3JjL2FwcC9za3QvYnJvYWQvYnJvYWRjYXN0LWFkZGl0aW9uYWwvYnJvYWRjYXN0LWFkZGl0aW9uYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VibWl0QnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCAxOTUsIDE5Nyk7XHJcbn1cclxuI2Jyb2FkLWNhc3Qtd3JhcHBlcntcclxuICBtYXJnaW46MTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG4gIG1hcmdpbjogMHB4IDE1cHggMjJweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4jdG9vbGJhckhlYWRlcntcclxuIGZvbnQtc2l6ZTogMThweDtcclxuIGNvbG9yOiAjMzg4ZmZmOyBcclxuIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gcGFkZGluZzogMTVweDtcclxufVxyXG4ucmFkaW8tbGFiZWx7XHJcbiB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gcGFkZGluZzogMTBweDtcclxufVxyXG4uY29sLWNlbnRlcntcclxuIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4uYm94c2l6ZXtcclxuIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gd2lkdGg6IDEwMCU7XHJcbiBmb250LXNpemU6IDEzcHg7XHJcbiBwYWRkaW5nLWxlZnQ6IDVweDtcclxufSIsIi5zdWJtaXRCdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjM2M1O1xufVxuXG4jYnJvYWQtY2FzdC13cmFwcGVyIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICBtYXJnaW46IDBweCAxNXB4IDIycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuI3Rvb2xiYXJIZWFkZXIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMzg4ZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLnJhZGlvLWxhYmVsIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmNvbC1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5ib3hzaXplIHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/skt/broad/broadcast-additional/broadcast-additional.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/skt/broad/broadcast-additional/broadcast-additional.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BroadcastAdditionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastAdditionalComponent", function() { return BroadcastAdditionalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let BroadcastAdditionalComponent = class BroadcastAdditionalComponent {
    constructor(modalController, formBuilder, commonService, ajaxService) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.disable = false;
        this.trip = ["Pickup Trip", "Drop Trip", "Both"];
        this.routename = ["Vadapalani", "CMBT", "Arumbaakam", "Maduravayol"];
    }
    onChangeHandler(event) {
        if (event.detail.value === "Route") {
            this.disable = false;
        }
        else if (event.detail.value === "All") {
            this.disable = true;
        }
    }
    closeModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    createform() {
        this.broadcastdetails = this.formBuilder.group({
            routename: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            triptype: ['']
        });
    }
    getTriptype() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + `/student/getPreferences?key=Triptype&companyId=${this.companyDetail.companyID}`;
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(res => {
            this.type = res;
        });
    }
    getRoutename() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + `/routetrip/getRoutename?compId=${this.companyDetail.companyID}&branchId=${this.companyDetail.branchID}`;
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(res => {
            this.routetype = res;
        });
    }
    refresh() {
    }
    onSubmit(event) {
        var details = {
            "companyId": this.companyDetail.companyID,
            "branchId": this.companyDetail.branchID,
            "SKTSMSGadget": "",
            "Route Alert": "",
            "SKT Alert": "",
            "routeName": this.broadcastdetails.value.routename,
            "message": this.broadcastdetails.value.message,
            "tripType": this.broadcastdetails.value.triptype,
            "toMobile": "9688712724"
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/report/broadcastsms";
        this.ajaxService.ajaxPostWithString(url, details).subscribe(res => {
            if (res === "Success") {
                this.commonService.presentToast('Data added succesfully');
                this.broadcastdetails.reset();
                this.modalController.dismiss();
            }
            else {
                this.commonService.presentToast('Contact support team.');
            }
        });
    }
    ngOnInit() {
        this.companyDetail = {
            branchID: localStorage.getItem('corpId'),
            companyID: localStorage.getItem('corpId'),
            userId: localStorage.getItem('userName')
        };
        this.createform();
        this.getTriptype();
        this.getRoutename();
        this.data = this.value;
        if (this.value) {
            this.broadcastdetails.patchValue({
                routetype: this.data.routetype,
                routename: this.data.routename,
                triptype: this.data.triptype,
                message: this.data.message
            });
        }
    }
};
BroadcastAdditionalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BroadcastAdditionalComponent.prototype, "value", void 0);
BroadcastAdditionalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-broadcast-additional',
        template: __webpack_require__(/*! raw-loader!./broadcast-additional.component.html */ "./node_modules/raw-loader/index.js!./src/app/skt/broad/broadcast-additional/broadcast-additional.component.html"),
        styles: [__webpack_require__(/*! ./broadcast-additional.component.scss */ "./src/app/skt/broad/broadcast-additional/broadcast-additional.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"]])
], BroadcastAdditionalComponent);



/***/ }),

/***/ "./src/app/skt/classdetails/class-additional/class-additional.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/skt/classdetails/class-additional/class-additional.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".class-container {\n  width: 95%;\n  height: 90%;\n  margin: -20px auto 32px;\n  padding: 10px;\n  background-color: #f3f3f3;\n}\n\n.stu-items {\n  margin: 13px 6px 0px;\n  padding: 0px;\n  border: 1px solid #cfe8ec;\n  border-radius: 20px;\n  height: 33px;\n  background-color: #fcfcfc;\n}\n\n.stu-input {\n  font-size: 13px;\n  --placeholder-color: rgb(117, 118, 119);\n  --padding-bottom: 25px;\n}\n\n.stu-icon {\n  font-size: 25px;\n  border-right: 1px solid #efedeb;\n  padding-right: 10px;\n  margin: 0px 5px 17px;\n  color: #3880ff;\n}\n\n.stu-btn {\n  height: 30px;\n  font-size: small;\n  margin: auto;\n  padding: 2px;\n  text-align: center;\n}\n\n.popup-head {\n  color: #3880ff;\n  margin-left: -15px;\n  text-align: -webkit-center;\n  padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t0L2NsYXNzZGV0YWlscy9jbGFzcy1hZGRpdGlvbmFsL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcc2t0XFxjbGFzc2RldGFpbHNcXGNsYXNzLWFkZGl0aW9uYWxcXGNsYXNzLWFkZGl0aW9uYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NrdC9jbGFzc2RldGFpbHMvY2xhc3MtYWRkaXRpb25hbC9jbGFzcy1hZGRpdGlvbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURHQTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9za3QvY2xhc3NkZXRhaWxzL2NsYXNzLWFkZGl0aW9uYWwvY2xhc3MtYWRkaXRpb25hbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGFzcy1jb250YWluZXIge1xyXG4gICAgd2lkdGggICAgICAgICAgIDogOTUlO1xyXG4gICAgaGVpZ2h0ICAgICAgICAgIDogOTAlO1xyXG4gICAgbWFyZ2luICAgICAgICAgIDogLTIwcHggYXV0byAzMnB4O1xyXG4gICAgcGFkZGluZyAgICAgICAgIDogMTBweCA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG59XHJcblxyXG4uc3R1LWl0ZW1zIHtcclxuICAgIG1hcmdpbiAgICAgICAgICA6IDEzcHggNnB4IDBweDtcclxuICAgIHBhZGRpbmcgICAgICAgICA6IDBweDtcclxuICAgIGJvcmRlciAgICAgICAgICA6IDFweCBzb2xpZCAjY2ZlOGVjO1xyXG4gICAgYm9yZGVyLXJhZGl1cyAgIDogMjBweDtcclxuICAgIGhlaWdodCAgICAgICAgICA6IDMzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xyXG59XHJcblxyXG4uc3R1LWlucHV0IHtcclxuICAgIGZvbnQtc2l6ZSAgICAgICAgICA6IDEzcHg7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2IoMTE3LCAxMTgsIDExOSk7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tICAgOiAyNXB4O1xyXG5cclxufVxyXG5cclxuLnN0dS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZSAgICA6IDI1cHg7XHJcbiAgICBib3JkZXItcmlnaHQgOiAxcHggc29saWQgI2VmZWRlYjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4gICAgICAgOiAwcHggNXB4IDE3cHg7XHJcbiAgICBjb2xvciAgICAgICAgOiAjMzg4MGZmO1xyXG59XHJcblxyXG4uc3R1LWJ0biB7XHJcbiAgICBoZWlnaHQgICAgOiAzMHB4O1xyXG4gICAgZm9udC1zaXplIDogc21hbGw7XHJcbiAgICBtYXJnaW4gICAgOiBhdXRvO1xyXG4gICAgcGFkZGluZyAgIDogMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wb3B1cC1oZWFkIHtcclxuICAgIGNvbG9yOiAjMzg4MGZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufSIsIi5jbGFzcy1jb250YWluZXIge1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDkwJTtcbiAgbWFyZ2luOiAtMjBweCBhdXRvIDMycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG59XG5cbi5zdHUtaXRlbXMge1xuICBtYXJnaW46IDEzcHggNnB4IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2ZlOGVjO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBoZWlnaHQ6IDMzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG59XG5cbi5zdHUtaW5wdXQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYigxMTcsIDExOCwgMTE5KTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cblxuLnN0dS1pY29uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWZlZGViO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW46IDBweCA1cHggMTdweDtcbiAgY29sb3I6ICMzODgwZmY7XG59XG5cbi5zdHUtYnRuIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IHNtYWxsO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucG9wdXAtaGVhZCB7XG4gIGNvbG9yOiAjMzg4MGZmO1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/skt/classdetails/class-additional/class-additional.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/skt/classdetails/class-additional/class-additional.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ClassAdditionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassAdditionalComponent", function() { return ClassAdditionalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");







let ClassAdditionalComponent = class ClassAdditionalComponent {
    constructor(modalController, formBuilder, commonService, ajaxService) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.editTextbox = false;
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    createForm() {
        this.classDetails = this.formBuilder.group({
            classId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sectionId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Tutor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            classDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    onSubmit(ev) {
        const data = {
            "companyId": localStorage.getItem('corpId'),
            "branchId": localStorage.getItem('corpId'),
            "userName": localStorage.getItem('userName'),
            "classId": this.classDetails.value.classId,
            "sectionId": this.classDetails.value.sectionId,
            "tutor": this.classDetails.value.Tutor,
            "classDescription": this.classDetails.value.classDescription
        };
        if (this.update != 'available') {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/class/addClass';
        }
        else {
            url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/class/updateClass';
        }
        this.ajaxService.ajaxPostMethod(url, data).subscribe(res => {
            if (res.message == "Added Successfully") {
                this.commonService.presentToast('Class Details Added Successfully');
                this.modalController.dismiss();
            }
            else if (res.message == "Updated Successfully") {
                this.modalController.dismiss();
                this.commonService.presentToast('Class Details Updated Successfully');
            }
            else {
                this.commonService.presentToast('Please Contact Support team');
            }
        });
    }
    ngOnInit() {
        this.data = this.value;
        this.createForm();
        if (this.value) {
            this.update = "available";
            this.editTextbox = true;
            this.classDetails.patchValue({
                classId: this.data.classId,
                sectionId: this.data.sectionId,
                Tutor: this.data.tutor,
                classDescription: this.data.classDescription
            });
        }
    }
};
ClassAdditionalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ClassAdditionalComponent.prototype, "value", void 0);
ClassAdditionalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-class-additional',
        template: __webpack_require__(/*! raw-loader!./class-additional.component.html */ "./node_modules/raw-loader/index.js!./src/app/skt/classdetails/class-additional/class-additional.component.html"),
        styles: [__webpack_require__(/*! ./class-additional.component.scss */ "./src/app/skt/classdetails/class-additional/class-additional.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"]])
], ClassAdditionalComponent);



/***/ }),

/***/ "./src/app/skt/enable/enable-additional/enable-additional.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/skt/enable/enable-additional/enable-additional.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".enable-items {\n  margin: 5px 6px 0px;\n  padding: 0px;\n  border: 1px solid #cfe8ec;\n  border-radius: 18px;\n  height: 35px;\n  background-color: #fcfcfc;\n}\n\n.enable-container {\n  width: 96%;\n  height: 100%;\n  margin: -20px auto 32px;\n  padding: 0px auto;\n  background-color: #f3f3f3;\n  font-size: 14px;\n}\n\n.enable-btn {\n  height: 30px;\n  font-size: small;\n  width: 100px;\n  margin: auto;\n  padding: 2px;\n  text-align: center;\n}\n\n.popup-head {\n  color: #3880ff;\n  margin-left: -15px;\n  text-align: -webkit-center;\n  padding-left: 0px;\n}\n\n.enable-input {\n  padding: 6.5px 7px;\n  vertical-align: text-top;\n  font-size: 13px;\n  text-transform: uppercase;\n  outline: none;\n  border: none;\n  width: 100%;\n}\n\n.radio-label {\n  padding: 10px;\n  vertical-align: top;\n}\n\n.date-input {\n  border: none;\n  outline: none;\n  width: 100%;\n  padding: 5px 0 5px 10px;\n}\n\n.toolbar-style {\n  padding: 0 10px;\n  color: #3880ff;\n}\n\n.align-self {\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t0L2VuYWJsZS9lbmFibGUtYWRkaXRpb25hbC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXHNrdFxcZW5hYmxlXFxlbmFibGUtYWRkaXRpb25hbFxcZW5hYmxlLWFkZGl0aW9uYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NrdC9lbmFibGUvZW5hYmxlLWFkZGl0aW9uYWwvZW5hYmxlLWFkZGl0aW9uYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSUo7O0FERkU7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNLTjs7QURIRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDTUo7O0FESkU7RUFFRSxlQUFBO0VBQ0EsY0FBQTtBQ01KOztBREhFO0VBRUksa0JBQUE7QUNLTiIsImZpbGUiOiJzcmMvYXBwL3NrdC9lbmFibGUvZW5hYmxlLWFkZGl0aW9uYWwvZW5hYmxlLWFkZGl0aW9uYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW5hYmxlLWl0ZW1zIHtcclxuICAgIG1hcmdpbiAgICAgICAgICA6IDVweCA2cHggMHB4O1xyXG4gICAgcGFkZGluZyAgICAgICAgIDogMHB4O1xyXG4gICAgYm9yZGVyICAgICAgICAgIDogMXB4IHNvbGlkICNjZmU4ZWM7XHJcbiAgICBib3JkZXItcmFkaXVzICAgOiAxOHB4O1xyXG4gICAgaGVpZ2h0ICAgICAgICAgIDogMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XHJcbn1cclxuLmVuYWJsZS1jb250YWluZXIge1xyXG4gICAgd2lkdGggICAgICAgICAgIDogOTYlO1xyXG4gICAgaGVpZ2h0ICAgICAgICAgIDogMTAwJTtcclxuICAgIG1hcmdpbiAgICAgICAgICA6IC0yMHB4IGF1dG8gMzJweDtcclxuICAgIHBhZGRpbmcgICAgICAgICA6IDBweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxuICAgIGZvbnQtc2l6ZSAgICAgICA6IDE0cHg7XHJcbn1cclxuLmVuYWJsZS1idG4ge1xyXG4gICAgaGVpZ2h0ICAgIDogMzBweDtcclxuICAgIGZvbnQtc2l6ZSA6IHNtYWxsO1xyXG4gICAgd2lkdGggICAgIDogMTAwcHg7XHJcbiAgICBtYXJnaW4gICAgOiBhdXRvO1xyXG4gICAgcGFkZGluZyAgIDogMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucG9wdXAtaGVhZCB7XHJcbiAgICBjb2xvcjogIzM4ODBmZjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuLmVuYWJsZS1pbnB1dHtcclxuICAgIHBhZGRpbmc6IDYuNXB4IDdweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5yYWRpby1sYWJlbHtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICB9XHJcbiAgLmRhdGUtaW5wdXR7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHggMCA1cHggMTBweDtcclxuICB9XHJcbiAgLnRvb2xiYXItc3R5bGVcclxuICB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBjb2xvcjogIzM4ODBmZjtcclxuXHJcbiAgfVxyXG4gIC5hbGlnbi1zZWxmXHJcbiAge1xyXG4gICAgICBhbGlnbi1zZWxmOmNlbnRlcjtcclxuICB9IiwiLmVuYWJsZS1pdGVtcyB7XG4gIG1hcmdpbjogNXB4IDZweCAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmZThlYztcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xufVxuXG4uZW5hYmxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA5NiU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAtMjBweCBhdXRvIDMycHg7XG4gIHBhZGRpbmc6IDBweCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5lbmFibGUtYnRuIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IHNtYWxsO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wb3B1cC1oZWFkIHtcbiAgY29sb3I6ICMzODgwZmY7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4uZW5hYmxlLWlucHV0IHtcbiAgcGFkZGluZzogNi41cHggN3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJhZGlvLWxhYmVsIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmRhdGUtaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggMCA1cHggMTBweDtcbn1cblxuLnRvb2xiYXItc3R5bGUge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGNvbG9yOiAjMzg4MGZmO1xufVxuXG4uYWxpZ24tc2VsZiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/skt/enable/enable-additional/enable-additional.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/skt/enable/enable-additional/enable-additional.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EnableAdditionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableAdditionalComponent", function() { return EnableAdditionalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









let EnableAdditionalComponent = class EnableAdditionalComponent {
    constructor(modalController, alertController, formBuilder, ajaxService, http, commonService, platform) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.ajaxService = ajaxService;
        this.http = http;
        this.commonService = commonService;
        this.platform = platform;
        this.multiple = false;
        this.isDeleteShow = true;
        this.type2 = ["Notification Send", "Notification Not Send"];
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    createForm() {
        this.enableLogin = this.formBuilder.group({
            type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fromDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            toDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reason: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    editForm() {
        if (this.value) {
            if (this.value.submit == "available") {
                this.serviceName = "available";
                this.enableLogin.patchValue({
                    type: this.value.type,
                    fromDate: this.value.fromDate,
                    toDate: this.value.toDate,
                    reason: this.value.reason,
                });
            }
        }
    }
    onSubmit(type) {
        const companyDetail = {
            branchID: localStorage.getItem("corpId"),
            companyID: localStorage.getItem("corpId"),
            userId: localStorage.getItem("userName"),
        };
        if (this.serviceName != "available") {
            const data = {
                companyId: companyDetail.companyID,
                branchId: companyDetail.branchID,
                schoolDateType: this.enableLogin.value.type,
                schoolDateReason: this.enableLogin.value.reason.toString(),
                fromDate: this.enableLogin.value.fromDate,
                toDate: this.enableLogin.value.toDate,
                mode: "New",
            };
            Object.keys(data).forEach((key) => (data[key] == null || data[key] == "") && delete data[key]);
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/schoolEnableDisable/addschooldisabledate";
            this.ajaxService.ajaxPostWithString(url, data).subscribe((res) => {
                if (res === "Success") {
                    this.commonService.presentToast("Added succesfully");
                    this.enableLogin.reset();
                    this.modalController.dismiss();
                }
            });
        }
        else if (this.serviceName == "available") {
            const data = {
                id: this.value.id,
                fromDate: this.enableLogin.value.fromDate,
                toDate: this.enableLogin.value.toDate,
                type: this.enableLogin.value.type,
                reason: this.enableLogin.value.reason,
            };
            Object.keys(data).forEach((key) => (data[key] == null || data[key] == "") && delete data[key]);
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/schoolEnableDisable/updateschooldisabledate";
            this.ajaxService.ajaxPostWithString(url, data).subscribe((res) => {
                if (JSON.parse(res).message === "Updated Successfully") {
                    this.modalController.dismiss();
                    this.commonService.presentToast("Updated Successfully");
                }
            });
        }
    }
    delete() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.value) {
                const alert = yield this.alertController.create({
                    header: "Delete",
                    backdropDismiss: false,
                    message: "Are you sure you want to delete!",
                    buttons: [
                        {
                            text: "Cancel",
                            role: "cancel",
                            handler: (data) => { },
                        },
                        {
                            text: "Ok",
                            handler: (data) => {
                                var details = {
                                    companyId: localStorage.getItem("corpId"),
                                    branchId: localStorage.getItem("corpId"),
                                };
                                const deleteData = {
                                    tagID: this.value.operatorID,
                                    compnyID: this.companyDetail.companyID,
                                    branchID: this.companyDetail.branchID,
                                    companyNme: this.companyDetail.userId,
                                };
                                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                                    "/schoolEnableDisable/deleteschooldisabledate?id=" +
                                    this.value.id;
                                this.ajaxService
                                    .ajaxDeleteWithBody(url, details)
                                    .subscribe((res) => {
                                    if (res.statusText == "OK") {
                                        this.commonService.presentToast("Deleted successfully");
                                        this.enableLogin.reset();
                                        this.modalController.dismiss();
                                    }
                                    else {
                                        this.commonService.presentToast("Try again");
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
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.companyDetail = {
            branchID: localStorage.getItem("corpId"),
            companyID: localStorage.getItem("corpId"),
            userId: localStorage.getItem("userName"),
        };
        this.createForm();
        this.editForm();
        var date = new Date();
        var month = ("0" + (1 + date.getMonth())).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);
        var year = date.getFullYear();
        var currentDate = [year + "-" + month + "-" + day];
    }
};
EnableAdditionalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EnableAdditionalComponent.prototype, "value", void 0);
EnableAdditionalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-enable-additional",
        template: __webpack_require__(/*! raw-loader!./enable-additional.component.html */ "./node_modules/raw-loader/index.js!./src/app/skt/enable/enable-additional/enable-additional.component.html"),
        styles: [__webpack_require__(/*! ./enable-additional.component.scss */ "./src/app/skt/enable/enable-additional/enable-additional.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], EnableAdditionalComponent);



/***/ }),

/***/ "./src/app/skt/gate/gate-additional/gate-additional.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/skt/gate/gate-additional/gate-additional.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gate-items {\n  margin: 5px 6px 0px;\n  padding: 0px;\n  border: 1px solid #cfe8ec;\n  border-radius: 18px;\n  height: 35px;\n  background-color: #fcfcfc;\n}\n\n.gate-container {\n  width: 95%;\n  height: 80%;\n  margin: -20px auto 32px;\n  padding: 0px auto;\n  background-color: #f3f3f3;\n}\n\n.gate-input {\n  font-size: 13px;\n  --placeholder-color: rgb(117, 118, 119);\n  --padding-bottom: 25px;\n  border: none;\n  outline: none;\n}\n\n.stu-col1-img {\n  padding: 0px 15px 5px 0px;\n  height: 23px;\n  width: 42px;\n  margin: 5px 5px 14px 0px;\n  border-right: 1px solid #efedeb;\n  color: #3880ff;\n}\n\n.gate-icon {\n  font-size: 25px;\n  border-right: 1px solid #efedeb;\n  padding-right: 10px;\n  margin: 0px 5px 17px;\n  color: #3880ff;\n}\n\n.gate-btn {\n  height: 30px;\n  font-size: small;\n  width: 100px;\n  margin: auto;\n  padding: 2px;\n  text-align: center;\n}\n\n.popup-head {\n  color: #3880ff;\n  margin-left: -15px;\n  text-align: -webkit-center;\n  padding-left: 0px;\n}\n\n.required-container {\n  font-size: 11px;\n  padding: 0px 0px 0 30px;\n  line-height: 0;\n  height: 0px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t0L2dhdGUvZ2F0ZS1hZGRpdGlvbmFsL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcc2t0XFxnYXRlXFxnYXRlLWFkZGl0aW9uYWxcXGdhdGUtYWRkaXRpb25hbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2t0L2dhdGUvZ2F0ZS1hZGRpdGlvbmFsL2dhdGUtYWRkaXRpb25hbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNESjs7QURJQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDREo7O0FES0E7RUFDSSxlQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRko7O0FES0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDRko7O0FES0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBRElBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9za3QvZ2F0ZS9nYXRlLWFkZGl0aW9uYWwvZ2F0ZS1hZGRpdGlvbmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uZ2F0ZS1pdGVtcyB7XHJcbiAgICBtYXJnaW4gICAgICAgICAgOiA1cHggNnB4IDBweDtcclxuICAgIHBhZGRpbmcgICAgICAgICA6IDBweDtcclxuICAgIGJvcmRlciAgICAgICAgICA6IDFweCBzb2xpZCAjY2ZlOGVjO1xyXG4gICAgYm9yZGVyLXJhZGl1cyAgIDogMThweDtcclxuICAgIGhlaWdodCAgICAgICAgICA6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xyXG59XHJcblxyXG4uZ2F0ZS1jb250YWluZXIge1xyXG4gICAgd2lkdGggICAgICAgICAgIDogOTUlO1xyXG4gICAgaGVpZ2h0ICAgICAgICAgIDogODAlO1xyXG4gICAgbWFyZ2luICAgICAgICAgIDogLTIwcHggYXV0byAzMnB4O1xyXG4gICAgcGFkZGluZyAgICAgICAgIDogMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG5cclxufVxyXG5cclxuLmdhdGUtaW5wdXQge1xyXG4gICAgZm9udC1zaXplICAgICAgICAgIDogMTNweDtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYigxMTcsIDExOCwgMTE5KTtcclxuICAgIC0tcGFkZGluZy1ib3R0b20gICA6IDI1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbn1cclxuXHJcbi5zdHUtY29sMS1pbWcge1xyXG4gICAgcGFkZGluZyAgICAgOiAwcHggMTVweCA1cHggMHB4O1xyXG4gICAgaGVpZ2h0ICAgICAgOiAyM3B4O1xyXG4gICAgd2lkdGggICAgICAgOiA0MnB4O1xyXG4gICAgbWFyZ2luICAgICAgOiA1cHggNXB4IDE0cHggMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VmZWRlYjtcclxuICAgIGNvbG9yICAgICAgICA6ICMzODgwZmY7XHJcbn1cclxuXHJcbi5nYXRlLWljb24ge1xyXG4gICAgZm9udC1zaXplICAgIDogMjVweDtcclxuICAgIGJvcmRlci1yaWdodCA6IDFweCBzb2xpZCAjZWZlZGViO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbiAgICAgICA6IDBweCA1cHggMTdweDtcclxuICAgIGNvbG9yICAgICAgICA6ICMzODgwZmY7XHJcbn1cclxuXHJcbi5nYXRlLWJ0biB7XHJcbiAgICBoZWlnaHQgICAgOiAzMHB4O1xyXG4gICAgZm9udC1zaXplIDogc21hbGw7XHJcbiAgICB3aWR0aCAgICAgOiAxMDBweDtcclxuICAgIG1hcmdpbiAgICA6IGF1dG87XHJcbiAgICBwYWRkaW5nICAgOiAycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wb3B1cC1oZWFkIHtcclxuICAgIGNvbG9yOiAjMzg4MGZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG4ucmVxdWlyZWQtY29udGFpbmVye1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAwIDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxufSIsIi5nYXRlLWl0ZW1zIHtcbiAgbWFyZ2luOiA1cHggNnB4IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2ZlOGVjO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG59XG5cbi5nYXRlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA5NSU7XG4gIGhlaWdodDogODAlO1xuICBtYXJnaW46IC0yMHB4IGF1dG8gMzJweDtcbiAgcGFkZGluZzogMHB4IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG59XG5cbi5nYXRlLWlucHV0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2IoMTE3LCAxMTgsIDExOSk7XG4gIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnN0dS1jb2wxLWltZyB7XG4gIHBhZGRpbmc6IDBweCAxNXB4IDVweCAwcHg7XG4gIGhlaWdodDogMjNweDtcbiAgd2lkdGg6IDQycHg7XG4gIG1hcmdpbjogNXB4IDVweCAxNHB4IDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VmZWRlYjtcbiAgY29sb3I6ICMzODgwZmY7XG59XG5cbi5nYXRlLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZmVkZWI7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbjogMHB4IDVweCAxN3B4O1xuICBjb2xvcjogIzM4ODBmZjtcbn1cblxuLmdhdGUtYnRuIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IHNtYWxsO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wb3B1cC1oZWFkIHtcbiAgY29sb3I6ICMzODgwZmY7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4ucmVxdWlyZWQtY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiAwcHggMHB4IDAgMzBweDtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIGhlaWdodDogMHB4O1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/skt/gate/gate-additional/gate-additional.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/skt/gate/gate-additional/gate-additional.component.ts ***!
  \***********************************************************************/
/*! exports provided: GateAdditionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GateAdditionalComponent", function() { return GateAdditionalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let GateAdditionalComponent = class GateAdditionalComponent {
    constructor(modalController, formBuilder, commonService, ajaxService) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.customData = false;
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    createForm() {
        this.gateLogin = this.formBuilder.group({
            gatename: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['',],
            deviceIMEI: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    required() {
        this.customData = !this.customData;
    }
    onSubmit() {
        const data = {
            "companyId": localStorage.getItem('corpId'),
            "branchId": localStorage.getItem('corpId'),
            "gateName": this.gateLogin.value.gatename,
            "location": this.gateLogin.value.location,
            "description": this.gateLogin.value.description,
            "deviceimei": this.gateLogin.value.deviceIMEI
        };
        if (this.update != 'available') {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + '/gate/addGate';
        }
        else {
            url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + '/gate/updateGate';
            data["gateid"] = this.value.gateid;
        }
        this.ajaxService.ajaxPostMethod(url, data).subscribe(res => {
            if (res.message == "Added Successfully") {
                this.commonService.presentToast('Added Successfully');
                this.modalController.dismiss();
            }
            else if (res.message == "Updated Successfully") {
                this.modalController.dismiss();
                this.commonService.presentToast('Updated Successfully');
            }
            else {
                this.commonService.presentToast('Contact Support team');
            }
        });
    }
    ngOnInit() {
        this.createForm();
        this.gateData = this.value;
        if (this.value) {
            this.update = "available";
            this.gateLogin.patchValue({
                gatename: this.gateData.gateName,
                location: this.gateData.location,
                description: this.gateData.description,
                deviceIMEI: this.gateData.deviceimei,
            });
        }
    }
};
GateAdditionalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GateAdditionalComponent.prototype, "value", void 0);
GateAdditionalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gate-additional',
        template: __webpack_require__(/*! raw-loader!./gate-additional.component.html */ "./node_modules/raw-loader/index.js!./src/app/skt/gate/gate-additional/gate-additional.component.html"),
        styles: [__webpack_require__(/*! ./gate-additional.component.scss */ "./src/app/skt/gate/gate-additional/gate-additional.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"]])
], GateAdditionalComponent);



/***/ }),

/***/ "./src/app/skt/latlong/latlong.component.scss":
/*!****************************************************!*\
  !*** ./src/app/skt/latlong/latlong.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NrdC9sYXRsb25nL2xhdGxvbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/skt/latlong/latlong.component.ts":
/*!**************************************************!*\
  !*** ./src/app/skt/latlong/latlong.component.ts ***!
  \**************************************************/
/*! exports provided: LatlongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatlongComponent", function() { return LatlongComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth-map.service */ "./src/app/services/auth-map.service.ts");
/* harmony import */ var src_app_services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/openlayer-map.service */ "./src/app/services/openlayer-map.service.ts");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");









let LatlongComponent = class LatlongComponent {
    constructor(mapService, geolocation, modelController, ajaxService, commonService) {
        this.mapService = mapService;
        this.geolocation = geolocation;
        this.modelController = modelController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.mapService = new src_app_services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_4__["OpenlayerMapService"]();
    }
    getAddressLatlng(address) {
        if (address != "") {
            let data = parseFloat(address.split(",")[0]);
            if (data.toString() != "NaN") {
                if (address.split(",")[1]) {
                    this.mapService.setCenter(this.map, {
                        lat: parseFloat(address.split(",")[0]),
                        lng: parseFloat(address.split(",")[1]),
                    });
                }
            }
            else if (data.toString() == "NaN") {
                this.ajaxService
                    .ajaxGet("https://nominatim.openstreetmap.org/?format=json&addressdetails=1&q=" +
                    address +
                    "&format=json&limit=1")
                    .subscribe((res) => {
                    if (res.length > 0) {
                        let latLng = { lat: res[0].lat, lng: res[0].lon };
                        this.mapService.setCenter(this.map, {
                            lat: parseFloat(res[0].lat),
                            lng: parseFloat(res[0].lon),
                        });
                    }
                    else
                        this.commonService.presentToast("Can't able to get your location");
                });
            }
        }
    }
    submit() {
        this.modelController.dismiss();
    }
    // getBack() {
    //   const geoBounds = this.mapService.circleGeoZone();
    //   localStorage.setItem("latLongPickerGeoFence", geoBounds)
    //   this.modelController.dismiss();
    // }
    cancelBtn() {
        this.modelController.dismiss();
    }
    createMap() {
        this.map = this.mapService.loadMap(this.mapElement.nativeElement, { lat: 11.127123, lng: 78.656891 }, false, false);
        this.mapService.setCenter(this.map, { lat: 17.786351, lng: 78.09082 });
        this.onClickLocationGetter();
        if (this.currentLocation == "") {
            this.geolocation
                .getCurrentPosition()
                .then((resp) => {
                this.mapService.setCenter(this.map, {
                    lat: parseInt(resp.coords.latitude.toFixed(2)),
                    lng: parseInt(resp.coords.longitude.toFixed(2)),
                });
                this.latitude = resp.coords.latitude.toFixed(2);
                this.longitude = resp.coords.longitude.toFixed(2);
                this.mapService.addMarker(this.map, { lat: resp.coords.latitude, lng: resp.coords.longitude }, "LatLngPicker", "assets/vtstrackhisIcon/Idle.png");
                this.mapService.createCircle(this.map, { lat: resp.coords.latitude, lng: resp.coords.longitude }, 500, "Preferred");
                this.mapService.fitBounds(this.map, 2);
            })
                .catch((error) => { });
        }
        else {
            this.latitude = parseFloat(this.currentLocation.split(",")[0]).toFixed(2);
            this.longitude = parseFloat(this.currentLocation.split(",")[1]).toFixed(2);
            this.mapService.addMarker(this.map, {
                lat: parseFloat(this.currentLocation.split(",")[0]),
                lng: parseFloat(this.currentLocation.split(",")[1]),
            }, "LatLngPicker", "assets/vtstrackhisIcon/Idle.png");
        }
    }
    onClickLocationGetter() {
        this.map.on("click", (evt) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.mapService.clearLayers(this.map, [1, 2]);
            const coordinates = evt.coordinate;
            let latLng = Object(ol_proj__WEBPACK_IMPORTED_MODULE_5__["toLonLat"])([coordinates[0], coordinates[1]]);
            this.latitude = latLng[1].toFixed(2);
            this.longitude = latLng[0].toFixed(2);
            latLng = { lat: latLng[1], lng: latLng[0] };
            localStorage.setItem("mapLocationPicker", latLng.lat + "," + latLng.lng);
            this.mapService.addMarker(this.map, latLng, "updateZone", "assets/vtstrackhisIcon/Idle.png");
            this.mapService.createCircle(this.map, latLng, 500, "Preferred");
            const geoBounds = this.mapService.circleGeoZone();
            localStorage.setItem("latLongPickerGeoFence", geoBounds);
        }));
    }
    ngOnInit() {
        setTimeout(() => {
            this.createMap();
        }, 2000);
    }
};
LatlongComponent.ctorParameters = () => [
    { type: src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_3__["AuthMapService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_7__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LatlongComponent.prototype, "currentLocation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapElement", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LatlongComponent.prototype, "mapElement", void 0);
LatlongComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-latlong",
        template: __webpack_require__(/*! raw-loader!./latlong.component.html */ "./node_modules/raw-loader/index.js!./src/app/skt/latlong/latlong.component.html"),
        styles: [__webpack_require__(/*! ./latlong.component.scss */ "./src/app/skt/latlong/latlong.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_3__["AuthMapService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_7__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
], LatlongComponent);



/***/ }),

/***/ "./src/app/skt/parent/parent-additional/parent-additional.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/skt/parent/parent-additional/parent-additional.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent-items {\n  margin: 5px 6px 0px;\n  padding: 0px;\n  border: 1px solid #cfe8ec;\n  border-radius: 18px;\n  height: 35px;\n  background-color: #fcfcfc;\n}\n\n.parent-container {\n  width: 95%;\n  height: 80%;\n  margin: -20px auto 32px;\n  padding: 0px auto;\n  background-color: #f3f3f3;\n}\n\n.parent-input {\n  font-size: 13px;\n  --placeholder-color: rgb(117, 118, 119);\n  --padding-bottom: 25px;\n}\n\n.stu-col1-img {\n  padding: 0px 15px 5px 0px;\n  height: 30px;\n  width: 42px;\n  margin: 5px 5px 14px 0px;\n  border-right: 1px solid #efedeb;\n}\n\n.parent-icon {\n  font-size: 25px;\n  border-right: 1px solid #efedeb;\n  padding-right: 10px;\n  margin: 0px 5px 17px;\n  color: #3880ff;\n}\n\n.parent-btn {\n  height: 30px;\n  font-size: small;\n  width: 100px;\n  margin: auto;\n  padding: 2px;\n  text-align: center;\n}\n\n.popup-head {\n  color: #3880ff;\n  margin-left: -15px;\n  text-align: -webkit-center;\n  padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t0L3BhcmVudC9wYXJlbnQtYWRkaXRpb25hbC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXHNrdFxccGFyZW50XFxwYXJlbnQtYWRkaXRpb25hbFxccGFyZW50LWFkZGl0aW9uYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NrdC9wYXJlbnQvcGFyZW50LWFkZGl0aW9uYWwvcGFyZW50LWFkZGl0aW9uYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREdBO0VBQ0ksZUFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3NrdC9wYXJlbnQvcGFyZW50LWFkZGl0aW9uYWwvcGFyZW50LWFkZGl0aW9uYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyZW50LWl0ZW1zIHtcclxuICAgIG1hcmdpbiAgICAgICAgICA6IDVweCA2cHggMHB4O1xyXG4gICAgcGFkZGluZyAgICAgICAgIDogMHB4O1xyXG4gICAgYm9yZGVyICAgICAgICAgIDogMXB4IHNvbGlkICNjZmU4ZWM7XHJcbiAgICBib3JkZXItcmFkaXVzICAgOiAxOHB4O1xyXG4gICAgaGVpZ2h0ICAgICAgICAgIDogMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XHJcbn1cclxuXHJcbi5wYXJlbnQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoICAgICAgICAgICA6IDk1JTtcclxuICAgIGhlaWdodCAgICAgICAgICA6IDgwJTtcclxuICAgIG1hcmdpbiAgICAgICAgICA6IC0yMHB4IGF1dG8gMzJweDtcclxuICAgIHBhZGRpbmcgICAgICAgICA6IDBweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxuXHJcbn1cclxuXHJcbi5wYXJlbnQtaW5wdXQge1xyXG4gICAgZm9udC1zaXplICAgICAgICAgIDogMTNweDtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYigxMTcsIDExOCwgMTE5KTtcclxuICAgIC0tcGFkZGluZy1ib3R0b20gICA6IDI1cHg7XHJcbn1cclxuXHJcbi5zdHUtY29sMS1pbWcge1xyXG4gICAgcGFkZGluZyAgICAgOiAwcHggMTVweCA1cHggMHB4O1xyXG4gICAgaGVpZ2h0ICAgICAgOiAzMHB4O1xyXG4gICAgd2lkdGggICAgICAgOiA0MnB4O1xyXG4gICAgbWFyZ2luICAgICAgOiA1cHggNXB4IDE0cHggMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VmZWRlYjtcclxufVxyXG5cclxuLnBhcmVudC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZSAgICA6IDI1cHg7XHJcbiAgICBib3JkZXItcmlnaHQgOiAxcHggc29saWQgI2VmZWRlYjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4gICAgICAgOiAwcHggNXB4IDE3cHg7XHJcbiAgICBjb2xvciAgICAgICAgOiAjMzg4MGZmO1xyXG59XHJcblxyXG4ucGFyZW50LWJ0biB7XHJcbiAgICBoZWlnaHQgICAgOiAzMHB4O1xyXG4gICAgZm9udC1zaXplIDogc21hbGw7XHJcbiAgICB3aWR0aCAgICAgOiAxMDBweDtcclxuICAgIG1hcmdpbiAgICA6IGF1dG87XHJcbiAgICBwYWRkaW5nICAgOiAycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wb3B1cC1oZWFkIHtcclxuICAgIGNvbG9yOiAjMzg4MGZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG4iLCIucGFyZW50LWl0ZW1zIHtcbiAgbWFyZ2luOiA1cHggNnB4IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2ZlOGVjO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG59XG5cbi5wYXJlbnQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA4MCU7XG4gIG1hcmdpbjogLTIwcHggYXV0byAzMnB4O1xuICBwYWRkaW5nOiAwcHggYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbn1cblxuLnBhcmVudC1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiKDExNywgMTE4LCAxMTkpO1xuICAtLXBhZGRpbmctYm90dG9tOiAyNXB4O1xufVxuXG4uc3R1LWNvbDEtaW1nIHtcbiAgcGFkZGluZzogMHB4IDE1cHggNXB4IDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogNDJweDtcbiAgbWFyZ2luOiA1cHggNXB4IDE0cHggMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWZlZGViO1xufVxuXG4ucGFyZW50LWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZmVkZWI7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbjogMHB4IDVweCAxN3B4O1xuICBjb2xvcjogIzM4ODBmZjtcbn1cblxuLnBhcmVudC1idG4ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBvcHVwLWhlYWQge1xuICBjb2xvcjogIzM4ODBmZjtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/skt/parent/parent-additional/parent-additional.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/skt/parent/parent-additional/parent-additional.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ParentAdditionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentAdditionalComponent", function() { return ParentAdditionalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let ParentAdditionalComponent = class ParentAdditionalComponent {
    constructor(modalController, formBuilder, ajaxService, commonService) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    createForm() {
        this.parentLogin = this.formBuilder.group({
            contactno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // roll: ['', Validators.required ],
            parentName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            emailaddress: [""],
            address: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: [""],
            state: [""],
            pincode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    onSubmit(ev) {
        if (this.update != "available") {
            this.addDatas = {
                parentContactNo: this.parentLogin.value.contactno.toString(),
                parentFname: this.parentLogin.value.parentName,
                parentLname: this.parentLogin.value.lastName,
                mode: "New",
                parentEmail: this.parentLogin.value.emailaddress,
                parentAddress: this.parentLogin.value.address,
                parentCity: this.parentLogin.value.city,
                parentState: this.parentLogin.value.state,
                pinCode: this.parentLogin.value.pincode + "",
                parentAddressId: "",
                role: "parent",
                companyId: localStorage.getItem("corpId"),
                branchId: localStorage.getItem("corpId"),
                userImage: "",
                oldEmailAddress: "",
            };
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/parent/addparent";
        }
        else {
            this.addDatas = {
                emailAddress: this.value.emailAddress,
                companyId: localStorage.getItem("corpId"),
                firstName: this.parentLogin.value.parentName,
                lastName: this.parentLogin.value.lastName,
                addressLine1: this.parentLogin.value.address,
                fax: this.parentLogin.value.emailaddress,
                contactNo: this.parentLogin.value.contactno.toString(),
                branchId: localStorage.getItem("corpId"),
            };
            url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/parent/updateparent";
        }
        this.ajaxService.ajaxPostMethod(url, this.addDatas).subscribe((res) => {
            if (res.message == "Added Successfully") {
                this.commonService.showConfirm("Parent Details Added Successfully");
                this.modalController.dismiss();
            }
            else if (res.message == "Updated Successfully") {
                this.commonService.showConfirm("Parent Details Updated Successfully");
                this.modalController.dismiss();
            }
            else {
                this.commonService.showConfirm(res.message);
            }
        });
    }
    ngOnInit() {
        this.companyDetail = {
            branchID: localStorage.getItem("corpId"),
            companyID: localStorage.getItem("corpId"),
            userId: localStorage.getItem("userName"),
        };
        this.createForm();
        this.parentData = this.value;
        if (this.value) {
            this.update = "available";
            this.parentLogin.patchValue({
                contactno: this.parentData.contactNo,
                // roll:this.parentData.roll ,
                parentName: this.parentData.parentFsName,
                lastName: this.parentData.parentLsName,
                emailaddress: this.parentData.fax,
                address: this.parentData.address,
                city: this.parentData.city,
                state: this.parentData.state,
                pincode: this.parentData.pin,
            });
        }
    }
};
ParentAdditionalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ParentAdditionalComponent.prototype, "value", void 0);
ParentAdditionalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-parent-additional",
        template: __webpack_require__(/*! raw-loader!./parent-additional.component.html */ "./node_modules/raw-loader/index.js!./src/app/skt/parent/parent-additional/parent-additional.component.html"),
        styles: [__webpack_require__(/*! ./parent-additional.component.scss */ "./src/app/skt/parent/parent-additional/parent-additional.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], ParentAdditionalComponent);



/***/ }),

/***/ "./src/app/skt/route/add-bus-stop/add-bus-stop.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/skt/route/add-bus-stop/add-bus-stop.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NrdC9yb3V0ZS9hZGQtYnVzLXN0b3AvYWRkLWJ1cy1zdG9wLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/skt/route/add-bus-stop/add-bus-stop.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/skt/route/add-bus-stop/add-bus-stop.component.ts ***!
  \******************************************************************/
/*! exports provided: AddBusStopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBusStopComponent", function() { return AddBusStopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let AddBusStopComponent = class AddBusStopComponent {
    constructor(modalController, ajaxService, platform, commonService) {
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.platform = platform;
        this.commonService = commonService;
        this.selectedRow = [];
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    getData() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/routetrip/getDriverBusstop?schoolId=" +
            this.companyDetail.companyID +
            "&branchId=" +
            this.companyDetail.companyID +
            "&plateno=" +
            this.value.plateNo +
            "&trip=" +
            this.value.trip;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.tableData = res;
            this.renderer = (row, column, value) => {
                if (value == "" || null || undefined) {
                    return "----";
                }
                else {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto"  >' +
                        value +
                        "</span>");
                }
            };
            this.source = { localdata: this.tableData };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            this.columns = [
                {
                    text: "Bus Stop",
                    datafield: "stopname",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: "12%",
                },
                {
                    text: "Arrival Time",
                    datafield: "arrivaltime",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: "14%",
                },
                {
                    text: "Lat,Lng",
                    datafield: "latlng",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: "30%",
                },
                {
                    text: "Address",
                    datafield: "address",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: "43%",
                },
            ];
        });
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row;
    }
    submit() {
        let data = [];
        this.tableData.map((d) => {
            const { id } = d;
            delete d["trip"];
            delete d["createdby"];
            delete d["updateddate"];
            delete d["uid"];
            delete d["companyid"];
            delete d["updatedby"];
            delete d["stopno"];
            delete d["mobileno"];
            delete d["plateno"];
            delete d["status"];
            delete d["address"];
            delete d["createddate"];
            delete d["id"];
            data.push(Object.assign({}, d, { tripid: id, branchid: localStorage.getItem("corpId"), createdby: localStorage.getItem("corpId"), schoolid: localStorage.getItem("corpId"), routeid: this.value.tripId.toString() }));
        });
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/routetrip/addDriverBusstop";
        this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
            this.result = res;
            if (res.message == "Added Successfully") {
                this.commonService.showConfirm(res.message);
                this.cancelBtn();
            }
        });
    }
    ngOnInit() {
        this.companyDetail = {
            branchID: localStorage.getItem("corpId"),
            companyID: localStorage.getItem("corpId"),
            userId: localStorage.getItem("userName"),
        };
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.getData();
    }
};
AddBusStopComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
], AddBusStopComponent.prototype, "myGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddBusStopComponent.prototype, "value", void 0);
AddBusStopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-bus-stop",
        template: __webpack_require__(/*! raw-loader!./add-bus-stop.component.html */ "./node_modules/raw-loader/index.js!./src/app/skt/route/add-bus-stop/add-bus-stop.component.html"),
        styles: [__webpack_require__(/*! ./add-bus-stop.component.scss */ "./src/app/skt/route/add-bus-stop/add-bus-stop.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], AddBusStopComponent);



/***/ }),

/***/ "./src/app/skt/route/bus-stop/bus-stop.component.scss":
/*!************************************************************!*\
  !*** ./src/app/skt/route/bus-stop/bus-stop.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bus-container {\n  margin: 5px 14px;\n}\n\n.bus-stop-input {\n  font-size: 13px;\n  --placeholder-color: rgb(117, 118, 119);\n  --padding-bottom: 25px;\n}\n\n.bus-stop-btn {\n  height: 30px;\n  font-size: small;\n  width: 100px;\n  margin: auto;\n  padding: 2px;\n  text-align: center;\n}\n\n.popup-head {\n  color: black;\n  margin-left: 30px;\n}\n\n.bus-form {\n  font-size: 14px;\n  font-weight: 500;\n  color: #676666;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-content: space-around;\n  text-align: center;\n}\n\n.bus-stop-label {\n  padding: 8px;\n}\n\n.bus-input {\n  border: 1px solid #d2d1d1;\n  outline: none;\n}\n\n.bus-btn {\n  width: 80px;\n  height: 30px;\n  padding-right: 5px;\n}\n\n#set-map-col {\n  background: #eef7f9;\n}\n\n@media (min-width: 1024px) {\n  #set-map-col {\n    margin-right: 7px;\n  }\n}\n\n#toolbar-header {\n  background: #f2f2f2;\n  border: 1px solid #f1f3f5;\n}\n\n@media (min-width: 319px) and (max-width: 767px) {\n  #toolbar-header {\n    margin: 10px 3.2% 1px;\n  }\n}\n\n@media (min-width: 768px) {\n  #toolbar-header {\n    margin: 10px 1.2% 6px;\n  }\n}\n\n.table-btn {\n  width: 60px;\n  font-size: 11px;\n}\n\n.table-btns {\n  width: 100px;\n  font-size: 11px;\n}\n\n#map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t0L3JvdXRlL2J1cy1zdG9wL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcc2t0XFxyb3V0ZVxcYnVzLXN0b3BcXGJ1cy1zdG9wLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9za3Qvcm91dGUvYnVzLXN0b3AvYnVzLXN0b3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtBQ0dGOztBRERBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FDSUY7O0FERkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDS0Y7O0FESEE7RUFDRSxtQkFBQTtBQ01GOztBREpBO0VBQ0U7SUFDRSxpQkFBQTtFQ09GO0FBQ0Y7O0FETEE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FDT0Y7O0FETEE7RUFDRTtJQUNFLHFCQUFBO0VDUUY7QUFDRjs7QUROQTtFQUNFO0lBQ0UscUJBQUE7RUNRRjtBQUNGOztBRE5BO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNRRjs7QUROQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDU0Y7O0FEUEE7RUFDRSxZQUFBO0FDVUYiLCJmaWxlIjoic3JjL2FwcC9za3Qvcm91dGUvYnVzLXN0b3AvYnVzLXN0b3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVzLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiA1cHggMTRweDtcclxufVxyXG5cclxuLmJ1cy1zdG9wLWlucHV0IHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiKDExNywgMTE4LCAxMTkpO1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5idXMtc3RvcC1idG4ge1xyXG4gIGhlaWdodDogMzBweDtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBvcHVwLWhlYWQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4uYnVzLWZvcm0ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjNjc2NjY2O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJ1cy1zdG9wLWxhYmVsIHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuLmJ1cy1pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDFkMTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5idXMtYnRuIHtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcbiNzZXQtbWFwLWNvbCB7XHJcbiAgYmFja2dyb3VuZDogI2VlZjdmOTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgI3NldC1tYXAtY29sIHtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gIH1cclxufVxyXG4jdG9vbGJhci1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjNmNTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzE5cHgpIGFuZChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAjdG9vbGJhci1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAxMHB4IDMuMiUgMXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAjdG9vbGJhci1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAxMHB4IDEuMiUgNnB4O1xyXG4gIH1cclxufVxyXG4udGFibGUtYnRuIHtcclxuICB3aWR0aDogNjBweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuLnRhYmxlLWJ0bnMge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuI21hcCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiIsIi5idXMtY29udGFpbmVyIHtcbiAgbWFyZ2luOiA1cHggMTRweDtcbn1cblxuLmJ1cy1zdG9wLWlucHV0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2IoMTE3LCAxMTgsIDExOSk7XG4gIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG5cbi5idXMtc3RvcC1idG4ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBvcHVwLWhlYWQge1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uYnVzLWZvcm0ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNjc2NjY2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnVzLXN0b3AtbGFiZWwge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5idXMtaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMWQxO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYnVzLWJ0biB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuI3NldC1tYXAtY29sIHtcbiAgYmFja2dyb3VuZDogI2VlZjdmOTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAjc2V0LW1hcC1jb2wge1xuICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICB9XG59XG4jdG9vbGJhci1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmM2Y1O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzE5cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAjdG9vbGJhci1oZWFkZXIge1xuICAgIG1hcmdpbjogMTBweCAzLjIlIDFweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICN0b29sYmFyLWhlYWRlciB7XG4gICAgbWFyZ2luOiAxMHB4IDEuMiUgNnB4O1xuICB9XG59XG4udGFibGUtYnRuIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnRhYmxlLWJ0bnMge1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuI21hcCB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/skt/route/bus-stop/bus-stop.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/skt/route/bus-stop/bus-stop.component.ts ***!
  \**********************************************************/
/*! exports provided: BusStopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusStopComponent", function() { return BusStopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth-map.service */ "./src/app/services/auth-map.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_google_map_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/google-map.service */ "./src/app/services/google-map.service.ts");
/* harmony import */ var src_app_services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/openlayer-map.service */ "./src/app/services/openlayer-map.service.ts");
/* harmony import */ var src_app_services_skt_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/skt.service */ "./src/app/services/skt.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _route_addtional_route_addtional_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../route-addtional/route-addtional.component */ "./src/app/skt/route/route-addtional/route-addtional.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @syncfusion/ej2-base */ "./node_modules/@syncfusion/ej2-base/dist/es6/ej2-base.es2015.js");
/* harmony import */ var _add_bus_stop_add_bus_stop_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../add-bus-stop/add-bus-stop.component */ "./src/app/skt/route/add-bus-stop/add-bus-stop.component.ts");

















Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_14__["enableRipple"])(true);
let BusStopComponent = class BusStopComponent {
    constructor(modalController, sktService, formBuilder, commonService, platform, alertController, mapService, activatedRoute, ajaxService) {
        this.modalController = modalController;
        this.sktService = sktService;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.platform = platform;
        this.alertController = alertController;
        this.mapService = mapService;
        this.activatedRoute = activatedRoute;
        this.ajaxService = ajaxService;
        this.layerModal = false;
        this.icon = "assets/vtsicon/";
        this.iconHeader = "search";
        this.search = false;
        this.fabButton = false;
        this.vehicleModel = {
            BIKE: "M1012.86 1394.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm195.16 -440.19c0,5.53 -2.73,15.07 -6.02,19.5 -21.01,28.31 -59.59,11.69 -61.75,-14.22 3.69,1.95 22.84,10.26 26.4,10.56l11.44 -28.17 -28.17 -11.44c9.51,-14.19 46.22,-15.78 56.06,12.61 0.83,2.37 2.04,8.44 2.04,11.16zm30.81 -2.63l0 7c-0.66,12 -4.67,23.9 -12.44,34.24 -1.53,2.04 -1.98,2.45 -3.6,4.32l-11.99 10.9c-26.93,19.95 -65.2,12.72 -86.61,-11.37 -9.98,-11.22 -20.43,-38.55 -14.76,-50.39 -5.52,-2.65 -11.34,-5.58 -17.6,-7.03 -2.75,4.11 -11.51,11.96 -15.62,16.06 -7.32,7.33 -10.87,13.86 -19.58,13.86 -2.85,0 -30.18,-19.32 -34.08,-22.25 -5.5,-4.13 -11.05,-7.54 -16.8,-11.37l-25.08 -17.18c-8.49,-6.35 -16.75,-11.52 -27.71,-14.53 -17.02,-4.67 -28.07,-5.97 -50.37,-5.97 2.8,4.19 7.84,7.9 12.13,10.76 12.93,8.64 29.98,14.73 45.86,14.41 8.15,-0.17 3.56,-1.47 20.73,11.43 3.03,2.28 5.21,3.68 8.18,5.89 2.55,1.92 6.42,3.55 7.28,6.81l-78.33 0 0 8.8c0,52.54 -62.88,81.58 -103.24,51.31 -14.98,-11.23 -27.03,-28.95 -27.03,-48.67 0,-26.19 3.41,-20.76 6.16,-32.57l-5.28 -0.88c-1.67,-7.17 1.46,-10.72 8.57,-17.83 12.44,-12.43 28.55,-20.9 48.64,-20.9l20.25 0.89c-2.57,-2.24 -4.73,-4.27 -7.27,-6.83 -2.8,-2.83 -4.13,-3.67 -7.03,-6.15 -8.69,-7.48 -3.15,-11.92 -6.83,-19.6l14.08 0c8.65,-16.35 -1.83,-30.47 -9.68,-32.56 -0.67,2.51 -1.15,2.69 -2.63,4.4 0,-10.75 5.49,-21.74 9.03,-29.68 9.23,-20.66 26.96,-37.77 46.71,-48.37 2.71,-1.45 9.96,-5.57 12.91,-5.57 3.81,0 8.8,2.16 8.8,7.04 0,6.13 -13.18,23.49 -14.08,34.34 4.14,-0.35 7.68,-1.76 12.32,-1.76 9.38,0 13.14,16.72 -12.32,16.72 0.33,3.99 2.24,4.74 5.47,5.96 9.71,3.67 16.19,0.06 26.91,-2.62l34.85 -7.42c29.02,-4.72 56.03,9.11 69.2,34 16.35,-1.36 31.46,-7.9 43.64,-17.09 3.58,-2.7 6.82,-7.56 11.81,-7.56l34.32 0c9.69,0 15.95,0.89 25.53,0.89 17.32,-0.01 28.83,-3.79 33.35,7.14 4.2,10.13 6.89,13.39 -3.43,19.26l-2.63 1.76c6.66,0 13.2,-0.26 13.2,6.16 0,4.79 -4.22,6.67 -8.8,7.05 0.85,3.2 0.75,1.9 2.81,4.22 1.47,1.65 1.7,2.23 3.15,3.89l9.69 11.44c3.6,4.14 13.48,12.43 6.82,17.87 -3.32,2.7 -8.07,0.76 -10.31,-2.05l-17.22 -20.64c-1.82,-2.05 -2.54,-3.19 -4.39,-5.28 -7.37,-8.27 -4.85,-9.45 -12.56,-9.45 -4.86,0 -11.72,26.51 -15.32,30.43 -2.8,3.04 -27.12,11.73 -31.96,13.83 -3.82,1.63 -6.94,2.71 -10.7,4.27 -3.09,1.26 -7.12,3.45 -10.67,4.27l0 10.57c2.89,0.67 6.31,2.39 8.82,3.5 2.38,1.04 6.37,2.98 8.78,3.54 3.97,-14.9 58.34,-49.72 98.37,-9.46 11.89,11.97 18.71,27.73 19.58,43.8zm-397.85 -1.78l28.16 13.2 12.33 -26.4c6.59,4.83 6.42,18.68 4.62,26.63 -0.98,4.37 -1.58,4.63 -3.42,8.02 -10.65,19.71 -39.85,25.14 -57.28,2.96 -6.95,-8.84 -8.24,-24.29 -3.04,-34.23 2.11,-4.06 4.25,-7.14 7.38,-10.23 6.24,-6.12 14.19,-8.94 25.34,-9.87 -0.88,3.76 -5.23,11.33 -7.05,14.96 -2.45,4.88 -4.51,10.18 -7.04,14.96zm262.3 -67.77l0 -7.92 35.19 -16.73c2.02,-0.91 3.62,-1.81 5.88,-2.93l6.6 -2.49 -1.66 3.02c-1.63,3.37 -3.38,9.09 -5.21,10.64l-26.6 11.26c-3.57,1.42 -10.09,4.81 -14.2,5.15zm-124.73 -249.29c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
            AUTO: "M1012.86 1394.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm-130.92 -618.95c-4.98,7.59 -19.8,38.59 -23.37,50.15 -1.67,5.4 -3.96,14 -3.96,21.03 -2.51,5.85 -0.61,25.66 0.34,32.26 2.69,18.62 9.99,34.38 18.58,50.32 2.16,4 3.82,6.82 5.95,11.08 2.11,4.21 3.86,7.96 5.94,11.89 -1.76,2.63 -10.13,11.39 -12.97,12.15 -1.35,-5.03 -5.38,-6.15 -7.92,-9.9 -2.81,-4.13 1.06,-6.15 -2.71,-15.94 -7.43,-19.35 -25.46,-16.27 -38.82,-16.31 -7.19,-0.02 -12.45,-1.46 -12.99,5.66 -0.39,5.19 -0.1,13.3 -0.03,18.72 0.11,8.17 3.55,7.28 11.4,7.22 -1.77,2.44 -9.17,5.58 -12.99,13.78 -1.53,3.28 -2.17,6.48 -2.41,9.95l0 14.39 25.94 -0.11c-2.19,3.56 -4.2,4.95 -5.79,9.71 -1.29,3.84 -2.23,9.64 -1.79,13.32 1.25,10.44 4.91,15.94 10.37,21.67 5.99,3.7 12.6,8.66 22.01,7.78 8.73,-0.82 14.87,-3.08 21.18,-8.83 8.76,-7.96 11.56,-23.05 7.54,-33.83 -1.99,-5.37 -3.17,-5.74 -5.69,-9.81 4.75,0.23 6.03,0.15 9.73,-0.72 0,-5.58 -4.6,-9.76 -8.92,-16.21l11.17 -10.71c7.17,12.89 13.45,22.18 29.33,26.15 12.61,3.16 89.35,1.59 108.66,1.59 17.24,0 38.36,1.09 55.12,-0.16 0,8.8 -0.65,15.93 4.69,19.79 4.8,3.47 15.1,2.25 22.96,2.25 -0.08,4.37 2.15,10.03 3.83,13.11 2.57,4.71 4.79,6 7.66,9.6 9.22,7.58 22.6,10.44 35.19,4.6 5.99,-2.78 8.73,-5.27 12.62,-10.07 3.07,-3.79 6.36,-10.62 6.24,-17.24l20.75 0c18.7,0 21.83,1.22 22.25,-3.73l0 -15.74c-0.54,-4.34 -3.57,-3.22 -17.83,-3.23 5.33,-4.62 5.72,-5.49 5.67,-15.39l0 -149.18c-3.47,-159.14 -86.22,-97.26 -265.08,-97.26 -7.28,0 -17.94,-1.34 -22.91,1.61 -4.88,0.47 -12.9,5.41 -16.14,7.98 -3.91,3.11 -9.2,9.48 -11.21,14.27 -2.05,2.86 -3.75,7.42 -5.84,10.83 -1.87,3.09 -4.41,7.93 -5.75,11.51zm186.94 131.32c-3.81,0 -6.5,-0.44 -9.19,0.8 -2.17,1 -4.12,2.89 -5.36,5.17 -2.08,3.83 -3.05,12.91 -1.56,18.36 1.5,2.62 2.48,2.46 6.08,2.49 2.68,0.03 5.47,-0.06 8.15,-0.06 5.61,0 11.54,0.48 17.04,-0.3 0,35.69 2.69,31.98 -11.36,31.92l-32.46 0.03c-5.62,0.04 -5.61,-0.27 -8.88,-2.46l0 -65.66c-3.64,-2.45 -3.15,-2.44 -9.22,-2.44l0.3 -98.9 42.68 15.08c15.15,4.51 20.39,12.05 19.01,27.58l0.22 67.59 -13.87 0.16c-2.1,0.46 -0.63,-0.1 -1.58,0.64zm127.62 84.52l-0.03 0 0.01 0 0.02 0zm-214.36 -84.52c-9.82,0 -19.64,0.02 -29.47,-0.02 -5.61,-0.03 -7.98,0.82 -10.74,3.84 -3.19,3.48 -3,5.9 -3,12.16l0 9.97c4.84,1.13 8.24,0.45 13.72,1.03 3.31,-2.32 43.62,-0.7 47.35,-0.7 -0.01,7.36 1.92,26.91 -1.9,31.37 -2.62,1.12 -6.18,0.72 -9.4,0.72l0 -31.59 -36.05 0.2 0.06 31.39c-9.19,0.02 -18.4,-0.06 -27.59,0.02 -11.81,0.12 -9.7,-1.94 -9.7,-18.66 0,-55.08 0.86,-113.49 -0.04,-167.8 17.85,0 35.75,-0.15 53.58,-0.04 5.59,0.04 34.97,10.36 40.49,13 0,14.17 -0.98,96.44 0.47,102.96 -10.49,0 -10.45,0.78 -10.13,11.35l-16.06 0.16c-2.11,0.46 -0.64,-0.1 -1.59,0.64zm-3.59 -274.03c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
            BOBCAT: "M303.39 269.89l149.29 53.73c11.81,10.17 -3.56,12.67 11.24,28.75 6.94,7.55 13.51,11.34 16.56,23.43 4.41,17.49 -0.53,18.92 7.47,35.58 30.63,7.14 79.07,-9.22 113.81,-9.22 -13.89,-20.74 -19.77,-5.62 -38.43,-16.94l-67.94 -61.25c-7.7,-21.6 17.45,-12.44 -62.45,-39.06 -14.18,-4.71 -27.45,-10.17 -43.06,-15.37l-86.49 -30.41 0 30.76zm119.93 -269.89c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-89.19 139.71l3.08 0c11.15,0 12.06,16.63 12.31,27.68l-27.69 0c0.91,-10.85 1.21,-27.68 12.3,-27.68zm58.45 0l39.99 0c0.31,13.87 3.48,16.24 6.15,27.68l-39.99 0c-0.45,-5.52 -4.48,-23.95 -6.15,-27.68zm-36.91 0l24.61 0c3.21,6.69 5.93,17.69 6.15,27.68l-24.6 0c-0.65,-7.65 -3.53,-22.2 -6.16,-27.68zm-18.46 -30.77c2.11,9.05 3.08,9.39 3.08,21.54l-12.31 0c6.92,-14.42 -2.72,-12.78 9.23,-21.54zm49.22 0l36.91 0c1.7,7.33 3.24,15.47 6.15,21.54l-39.98 0c-0.24,-10.49 -1.86,-12.05 -3.08,-21.54zm-36.91 0l24.61 0c2.11,9.05 3.07,9.39 3.07,21.54l-24.6 0c-0.23,-10.49 -1.87,-12.05 -3.08,-21.54zm-46.14 61.52c11.04,5.3 18.02,8.38 33.95,9.11 34.7,1.58 4.24,10.23 30.65,12.42l0 -12.3 21.53 0c7.94,16.53 -1.28,23.09 18.46,27.69 -0.65,-7.65 -3.53,-22.19 -6.16,-27.69l39.99 0c9.32,40.04 7.26,48.69 30.75,49.22l-27.27 -99.13c-12.32,-48.89 56.49,-42.37 -117.3,-42.37 -17.4,0 -11.22,55.18 -24.6,83.05zm218.39 61.53c0,9.85 -2.78,11.68 -6.62,17.98 -3.64,5.95 -5.63,9.94 -8.75,15.86 9.69,6.48 62.5,58.43 67.67,58.43 16.34,0 10.04,-7.58 25.55,5.06 12.94,10.54 11.36,7.54 11.36,28.77 28.52,0 20.11,1.68 36.91,3.09 12,-51.52 2.68,-23.53 2.04,-55.72 -0.11,-5.54 7.78,-28.12 -18.18,-48.11 -7.18,-5.53 -18.2,-6.91 -30,-6.91 0,-11.49 1.81,-39.99 -15.38,-39.99 -13.3,0 -12.4,6.15 -21.53,6.15 -17.95,0 -26.51,-5.77 -43.07,-6.15l0 21.54zm-93.67 81.46c10.75,0 19.46,8.7 19.46,19.45 0,10.74 -8.71,19.45 -19.46,19.45 -10.73,0 -19.44,-8.71 -19.44,-19.45 0,-10.75 8.71,-19.45 19.44,-19.45zm0 -26c-25.09,0 -45.44,20.35 -45.44,45.45 0,25.1 20.35,45.45 45.44,45.45 25.11,0 45.46,-20.35 45.46,-45.45 0,-25.1 -20.35,-45.45 -45.46,-45.45zm-136.81 26c10.73,0 19.44,8.7 19.44,19.45 0,10.74 -8.71,19.45 -19.44,19.45 -10.74,0 -19.45,-8.71 -19.45,-19.45 0,-10.75 8.71,-19.45 19.45,-19.45zm-49.44 -139.91l9.24 0 0 9.23 -9.24 0 0 -9.23zm-49.21 123.05c19.17,12.83 12.71,18.75 46.14,21.53 5.44,-23.37 26.92,-39.36 55.38,-39.99l0 -107.67c-23.88,-5.56 -38.14,-18.45 -67.68,-18.45 0,11.28 -2.13,25.86 -3.44,39.62 -4.63,48.47 -20.51,-13.91 -30.4,104.96zm98.65 -9.14c-25.1,0 -45.46,20.35 -45.46,45.45 0,25.1 20.36,45.45 45.46,45.45 25.1,0 45.45,-20.35 45.45,-45.45 0,-25.1 -20.35,-45.45 -45.45,-45.45zm12.09 -6.25c43.87,10.22 39.99,46.2 39.99,70.74l33.83 0c-5.67,-24.36 -4.34,-46.39 20.1,-62.95 23.68,-16.05 27.12,-7.79 53.72,-7.79 -1.26,-15.19 -2.44,-11.7 -31.16,-21.12 -19.98,-6.54 -104.31,-39.39 -116.48,-40.39l0 61.51z",
            BUS: "M1012.86 1394.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm63.41 -409.51c0,-6.2 -0.22,-7.7 2.56,-13.73l3.75 -5.56c9.77,-10.77 24.55,-11.59 35.92,-2 17.22,14.53 6.13,44.56 -16.63,44.56 -13.79,0 -25.6,-11.98 -25.6,-23.27zm-171.51 100.04l-4.67 0c-5.77,-0.43 -11.37,-2.5 -15.6,-6.75 -8.25,-8.26 -5.98,-23.7 -5.98,-38.23 -14.51,0 -27.97,3.19 -30.71,-12.71 -0.61,-3.45 -1.12,-7.82 -1.11,-11.32 0.02,-4.95 -0.55,-6.98 -0.75,-10.86 -1.49,-28.31 -2.32,-66.82 -2.33,-95.4 0,-8.63 0.79,-14.44 0.77,-23.27 0,-8.01 0,-16.03 0,-24.04 -4.68,-2.48 -7.32,-4.05 -10.06,-8.54 -4.75,-7.78 -3.11,-32.99 -3.11,-44.19 0,-26.23 16.99,-20.6 18.47,-27.28l2.91 -23.46c3.34,-19.91 5.15,-39.89 21.57,-49.77 24.79,-14.9 81.02,-21.25 121.45,-21.25l3.02 0 9.49 0 0.8 0c12.1,0.03 26.68,0.17 34.73,0.81 2.96,0.25 3.24,0.75 7,0.76l29.19 2.63c9.24,1.28 18.47,2.63 27.27,4.52 16.04,3.44 32.77,7.35 46.42,16.4 17.52,11.62 19.66,43.42 22.34,63.74 0.1,0.79 0.29,2.55 0.41,3.46 0.17,1.12 0.16,0.98 0.38,1.94l0.42 1.13c1.49,2.88 3.38,1.67 7.74,3.9 2.19,1.13 4.34,2.81 5.94,4.93 7.29,9.76 4.94,31.53 4.94,47.02 0,10.45 -3.86,20.9 -13.96,23.25l0 120.98c0,8.66 -0.82,15.52 -0.77,23.27 0.02,6.74 0.64,17.72 -0.06,23.99 -1.24,11.08 -16.66,9.36 -25.54,9.36l0 24.81c0,27.19 -48.85,26.28 -48.85,0.79l0 -25.6 -179.16 0 0 27.92c0,9.12 -10.94,16.21 -22.6,17.06zm-6.09 -100.04l0 -3.88c0,-17.85 23.28,-33.39 42.23,-17.41 17.5,14.75 5.91,44.56 -16.63,44.56 -13.79,0 -25.6,-11.98 -25.6,-23.27zm233.43 -89.19l-241.95 0 0 -127.95 244.28 0 0 125.62c0,1.79 -0.54,2.33 -2.33,2.33zm-210.16 -170.61l180.7 0 0 26.37 -180.7 0 0 -26.37zm56.61 -92.35c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
            CAR: "M1012.86 1394.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm-41.63 -541.9c0,-16.27 29.79,-12.43 34.38,-8.45 5.14,4.45 5.14,12.44 0,16.89 -5.18,4.47 -25.16,4.47 -30.34,0 -1.69,-1.47 -4.04,-5.83 -4.04,-8.44zm165.21 76.84c0,-18.58 23.93,-31.38 39.18,-16.12 21.22,21.21 -11.03,53.45 -32.25,32.24 -3.11,-3.11 -6.93,-10.35 -6.93,-16.12zm-26.89 -2.88l0 5.76c0,23.93 23.13,47.06 47.06,47.06 10.43,0 15.35,-0.3 24.98,-4.79 14.26,-6.66 27.85,-24.87 27.85,-41.31 0,-16.72 -2.45,-26.96 -14.64,-39.15 -3.95,-3.94 -8.05,-7.43 -13.21,-9.84 -13.42,-6.26 -31.09,-6.8 -44.22,-0.03 -14.12,7.29 -27.82,23.83 -27.82,42.3zm-249.74 2.88c0,-18.58 23.93,-31.38 39.18,-16.12 21.21,21.21 -11.03,53.45 -32.24,32.24 -3.12,-3.11 -6.94,-10.35 -6.94,-16.12zm-26.9 -2.88l0 5.76c0,23.93 23.14,47.06 47.07,47.06 16.34,0 26.54,-2.99 38.18,-14.64 33.9,-33.9 4.36,-85.25 -31.45,-85.25 -16.84,0 -26.87,2.37 -39.15,14.64 -7.22,7.23 -14.65,18.38 -14.65,32.43zm134.48 -118.15c0,-46.73 -7.38,-39.38 65.32,-39.38 7.87,0 18.69,10.6 24.74,15.59l34.43 27.05c5.18,4.93 0.72,10.19 -2.5,10.19l-108.54 0c-8.41,0 -13.45,-5.05 -13.45,-13.45zm-40.35 13.45l-47.06 0c-7.07,0 -9.67,-5.85 -2.64,-13.22l26.51 -31.11c7.7,-9.66 11.2,-8.5 23.19,-8.5 17.49,0 13.46,18.83 13.46,39.38 0,8.4 -5.04,13.45 -13.46,13.45zm-155.6 30.74l0 48.98c0,19.73 19.66,39.38 39.38,39.38l11.53 0c0,-10.09 -3.48,-19.88 4.79,-36.51 3.27,-6.59 7,-13.29 12.22,-18.51 3.96,-3.97 13.02,-10.2 18.36,-12.38 20.82,-8.51 41.73,-7.06 60.14,5.52 2.29,1.57 2.36,1.9 4.26,3.41l11.11 11.96c6.06,8.85 11.11,23.22 11.11,34.99 0,4.81 -0.96,5.91 -0.96,11.52l155.6 0c0,-10.09 -3.47,-19.88 4.79,-36.51 10.83,-21.8 29.55,-36.49 55.72,-36.49 15.4,0 28.32,5.85 39.26,14.53 13.51,10.71 22.22,29.3 22.22,46.95 0,4.81 -0.96,5.91 -0.96,11.52 20.72,0 35.54,-15.16 35.54,-32.65l0 -38.43c0,-11.84 -8.19,-21.91 -15.52,-26.74 -7.63,-5 -22.61,-7.01 -33.47,-8.79 -6.4,-1.06 -67.08,-11.17 -71.52,-13.97l-69.27 -57.52c-8.48,-6.67 -16.82,-14 -29.22,-14l-119.11 0c-8.24,0 -17.56,4.54 -22.33,8.4 -6.36,5.15 -13.51,13.95 -18.83,20.55l-25.34 29.41c-18.16,20.39 -3.36,13.6 -47.84,14.6 -16.47,0.36 -31.66,16.88 -31.66,30.78zm207.11 -219.76c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
            CRANE: "M349.18 465.04l42.28 0 0 11.8 -42.28 0 0 -11.8zm74.14 -465.04c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-204.95 182.34c0,33.42 -6.47,27.54 67.86,27.54 14.68,0 11.81,-13.83 11.81,-28.51 0,-6.9 -5.68,-10.83 -12.79,-10.83l-54.09 0c-7.93,0 -12.79,3.74 -12.79,11.8zm173.08 180.97l0 27.53 -34.4 0c2.76,-2.4 4.98,-4.38 7.99,-6.75 3.05,-2.42 5.62,-4.74 8.59,-7.16l13.12 -10.47c2.59,-2.31 1.14,-2.2 4.7,-3.15zm-42.28 13.77l0 -30.48 37.39 0c-1.65,2.45 -1.67,2.21 -3.93,3.93 -2,1.53 -2.84,2.48 -4.79,4.06 -3.25,2.66 -6.05,4.63 -9.25,7.48 -2.44,2.18 -16.49,14.23 -19.42,15.01zm42.28 -73.77l0 28.53 -34.4 0 34.4 -28.53zm-42.28 14.75l0 -31.47 38.37 0 -38.37 31.47zm42.28 -73.75l0 27.53 -34.4 0c4.55,-3.97 30.36,-26.45 34.4,-27.53zm-42.28 13.77l0 -30.49 37.39 0 -8.72 8c-3.77,3.07 -25.21,21.57 -28.67,22.49zm249.82 -91.47l8.84 0 0 51.14 -8.84 0 0 -51.14zm-207.54 17.7l0 28.53 -34.4 0c1.65,-2.47 1.65,-2.22 3.91,-3.96 7.97,-6.11 23.35,-19.78 30.49,-24.57zm-42.28 14.74l0 -32.44 39.34 0c-1.36,2.05 -6.88,6.34 -9.41,8.3 -8,6.25 -22.61,19.26 -29.93,24.14zm21.64 -123.91l18.69 66.88 -38.35 0c1.28,-5.52 17.67,-64.01 19.66,-66.88zm-38.35 66.88l-81.63 0c3.07,-4.58 68.43,-55.54 78.9,-64.69l26.27 -18.98c-0.8,1.95 -0.31,0.69 -0.95,2.99l-22.59 80.68zm50.16 -91.47l25.15 11.24c40.01,16.62 87.14,39.31 127.99,56.91l48.49 21.35c1.64,0.83 1.71,0.91 2.93,1.97l-178.99 0 -12.68 -45.35c-2.28,-7.86 -4.26,-14.86 -6.56,-22.94 -1.23,-4.31 -2.18,-7.75 -3.27,-11.49 -1.09,-3.76 -2.57,-7.77 -3.06,-11.69zm-164.25 99.34c0,6.64 -1.75,16.72 7.88,16.72l103.25 0 0 250.79 -45.22 0c-2.01,0 -5.05,2.55 -5.92,3.93 -1.69,2.65 -7.3,35.41 7.87,35.41l168.19 0c11.82,0 9.83,-15.61 9.83,-25.57 0,-7.47 -2.56,-13.77 -9.83,-13.77l-43.29 0 0 -250.79 179.99 0 0 50.16c0,6.04 -6.88,-2.57 -6.88,20.66 0,6.25 2.37,15.34 4.3,20.28 1.58,4.04 2.84,4.41 4.34,7.45 2.1,4.28 1.02,5.56 7.09,5.7l0.98 9.82c7.7,1.81 12.78,3.61 12.78,11.82 0,6.85 -3.49,11.47 -10.27,10.33 -11.56,-1.93 -5.9,-10.33 -12.34,-10.33 -9.16,0 0.01,17.7 10.82,17.7 5.91,0 11.19,0.6 15.8,-5.83 5.42,-7.55 4.96,-17.56 -1.29,-24.42 -4.63,-5.09 -8.43,-1.48 -8.62,-9.09 8.08,-0.18 3.21,-1.99 8.1,-7.65 7.87,-9.06 6.66,-22.88 6.66,-35.62 0,-4.71 -3.13,-7.86 -6.88,-8.86l0 -52.12c3,0 4.49,0.33 6.91,-1.94 2.5,-2.36 4.98,-20.25 -3.21,-22.42 -10.25,-2.71 0.64,5.07 -26.04,-6.42 -10.65,-4.58 -20.42,-8.88 -30.75,-13.49l-60.58 -26.97c-23.75,-9.85 -51.54,-23.55 -75.58,-33.57l-30.73 -13.54c-3.54,-1.67 -12.57,-6.27 -16.06,-6.56 -0.62,-7.48 -12.33,-15.56 -18.81,-1.09 -2.27,5.07 -22.44,19.77 -26.74,23.41 -3.23,2.74 -6.04,4.75 -9.3,7.41l-64.46 52.58c-6.17,5.22 -12.77,9.56 -18.57,14.87 -5.26,4.82 -4.58,2.98 -13.65,3.07 -6.07,0.08 -9.77,2.01 -9.77,7.94z",
            FOCKLIFTS: "M638.29 388.46c0,3.16 -2.56,5.73 -5.72,5.73l-82.05 0c-3.17,0 -5.73,-2.57 -5.73,-5.73l0 -82.04c0,-3.16 2.56,-5.73 5.73,-5.73l82.05 0c3.16,0 5.72,2.57 5.72,5.73l0 82.04zm-214.97 -388.46c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm46.05 274.06c-24.9,-40.69 -90.36,-149.72 -91.02,-150.8 -3.33,-5.58 -9.44,-9.05 -15.94,-9.05l-106.04 0c-10.23,0 -18.56,8.33 -18.56,18.56l0 102.19 -29.84 0c-7.07,0 -12.83,5.75 -12.83,12.82l0 118.38c0,7.07 5.76,12.83 12.83,12.83l13.43 0c1.75,0 3.16,-1.41 3.16,-3.15 0,-24.36 19.81,-44.17 44.16,-44.17 24.35,0 44.16,19.81 44.16,44.17 0,0.83 0.33,1.63 0.93,2.22 0.59,0.59 1.38,0.93 2.22,0.93l35.41 0c1.74,0 3.15,-1.41 3.15,-3.15 0,-24.36 19.81,-44.17 44.16,-44.17 24.35,0 44.16,19.81 44.16,44.17 0,1.74 1.41,3.15 3.15,3.15l9.61 0c9.19,0 16.66,-7.48 16.66,-16.66l0 -79.89c0,-3.27 -1.53,-6.04 -2.96,-8.38zm-105.36 -0.2l0 -17.26c0,-2.97 -2.41,-5.37 -5.37,-5.37l-30.42 0 0 -50.81c0,-2.97 -2.41,-5.37 -5.38,-5.37l-17 0c-2.97,0 -5.37,2.4 -5.37,5.37l0 73.44 -25.52 0 -0.01 -122.51 76.93 0 73.21 122.51 -61.07 0 0 0zm-67.67 101.97c0,-15.25 -12.36,-27.62 -27.62,-27.62 -15.25,0 -27.62,12.37 -27.62,27.62 0,15.26 12.37,27.63 27.62,27.63 15.26,0 27.62,-12.37 27.62,-27.63zm130.02 0c0,-15.25 -12.36,-27.62 -27.61,-27.62 -15.26,0 -27.62,12.37 -27.62,27.62 0,15.26 12.36,27.63 27.62,27.63 15.25,0 27.61,-12.37 27.61,-27.63zm199.89 1.87l-111.52 0c-6.64,0 -12.03,-5.39 -12.03,-12.04l0 -258.39c0,-6.65 5.39,-12.04 12.03,-12.04 6.65,0 12.04,5.39 12.04,12.04l0 246.35 99.48 0c6.65,0 12.04,5.4 12.04,12.04 -0.01,6.65 -5.39,12.04 -12.04,12.04zm12.03 -165.63c0,3.16 -2.56,5.72 -5.72,5.72l-82.05 0c-3.17,0 -5.73,-2.56 -5.73,-5.72l0 -82.05c0,-3.17 2.56,-5.73 5.73,-5.73l82.05 0c3.16,0 5.72,2.56 5.72,5.73l0 82.05z",
            LOADER: "M301.98 146.22c-11.14,1.99 -19.4,9.58 -22.69,18.71 -3.18,8.84 -1.77,66.71 -1.8,80.4 -0.07,25.86 12.66,29.05 32.67,49.55 9.54,9.76 11.57,11.7 29.45,11.66 13.7,-0.03 27.4,-0.01 41.1,-0.01 13.47,0 26.99,0.57 35.19,-6.85l9.8 -10.27c10.24,-10.24 25.62,-19.98 19.79,-40.36 -1.97,-6.88 -34.7,-70.51 -40.72,-82.59 -4.9,-9.84 -9.5,-17.04 -21.23,-19.83 -5.81,-1.39 -74.97,-1.6 -81.56,-0.41zm121.34 -146.22c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-203 349.85c7.42,-65.86 102.19,-105.8 155.64,-39.56 13.64,16.9 20.53,40.57 17.29,68.33l31.75 0c-2.03,-15.95 -1.65,-28.33 3.28,-42.85 5.9,-17.32 10.7,-19.72 17.66,-30.62 -15.26,-1.36 -20.61,-4.85 -28.25,-12.85 -7.34,-7.65 -9.95,-19.05 -8.06,-32.13 -17.2,2.16 -79.16,3.99 -93.19,-1.81 -11.63,-4.78 -29.04,-24.36 -39.29,-34.69 -7.67,-7.73 -7.31,-10.1 -10.62,-13.69 -26.6,4.93 -58.29,21.05 -61.81,46.62 -1.81,13.32 -0.33,38.91 -0.32,53.51 0.01,16.76 -0.05,28.38 15.92,39.74zm290.72 -151.53c-39.47,6.48 -31.11,5.25 -61.22,34.76 -5.32,5.21 -20.55,18.83 -23.67,24.75 -7.48,14.14 1.16,27.58 11.99,31.41 16.01,5.65 25.81,-8.69 32.03,-14.8 8.35,-8.22 16.09,-15.74 24.42,-23.99 8.34,-8.25 9.66,-5.9 26.13,-9.41 6.26,-1.33 5.39,-2 8.86,1.45 23.36,23.16 44.94,19.22 76.74,19.22 15.03,0 33.9,3.07 36.3,-12.12 1.23,-7.73 -3.28,-13.14 -7.83,-15.48 -7.2,-3.69 -12.97,-0.2 -18.02,-6.59 -3.08,-3.92 -28.02,-55.3 -32.51,-64.3 -6.09,-12.19 -9.24,-24.2 -26.86,-15.31 -16.92,8.55 -31.01,15.78 -40.26,31.92 -4.03,7.03 -3.73,10.74 -6.1,18.49zm-8.63 93.24c-37.61,4.78 -69.01,38.32 -63.55,81.95 4.63,37.07 38.96,68.35 81.96,62.95 36.73,-4.6 68.66,-39.03 62.99,-81.73 -4.93,-37.04 -38.45,-68.63 -81.4,-63.17zm3.02 44.04c-39.2,9.21 -24.61,65.02 12.42,56.84 13.85,-3.06 25.88,-17.44 21.85,-34.97 -3.1,-13.57 -17.22,-25.87 -34.27,-21.87zm-207.63 -44.04c-37.45,4.77 -69.05,38.34 -63.58,81.73 4.7,37.23 38.83,68.59 82,63.17 36.98,-4.64 68.39,-38.91 62.98,-81.73 -4.66,-37.01 -38.69,-68.6 -81.4,-63.17zm3.03 44.04c-14.31,3.37 -26.82,16.35 -22.56,35 8.48,37.13 65.56,24.73 56.89,-13.19 -3.1,-13.53 -17.2,-25.83 -34.33,-21.81zm5.9 -197.2l-0.02 50.24 105.93 -0.07 -36.16 -72.97 -69.74 -0.04 -0.01 22.84z",
            "SMALL TRUCK": "M1235.06 1548.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm2.54 -613.73c0,-15.21 1.35,-17.34 16.73,-17.34 48.51,0 40.51,-3.21 56.17,23.1l13.29 24.37c1.32,9.35 0.48,4.03 -2.5,6.34 -4.88,5.04 -39.28,2.42 -49.26,2.44 -35.58,0.05 -34.43,6.21 -34.43,-38.91zm246.86 106.36c-4.4,-3.41 -6.98,-2.33 -13.7,-2.1l-1.92 -45.1c-1.84,-21.6 -20.83,-24.8 -44.15,-24.7 -22.05,0.09 -44.1,-0.09 -66.15,0.07 -9.91,-11.39 -23.07,-35.25 -32.26,-49 -24.39,-36.52 -14.51,-30.07 -89.65,-30.64 -55.88,-0.43 -27.47,32.38 -35.87,84.15l-198.64 -0.13c0,25.8 -3.2,86.87 3.21,105.71 10.12,2.86 20.16,2.06 32.19,2.06 6.88,-2.07 2.84,-9.63 10.56,-23.21 33.05,-58.07 121.59,-39.12 128.38,22.96l144.92 0.02c2.83,-32.66 32.9,-57.38 67.91,-57.51 19.34,-0.07 34.6,7.27 46.13,17.54 16.6,14.79 13.55,15.42 22.46,39.11 8.24,1.21 15.97,0.25 22.88,-1.43 5.3,-12.46 3.78,-21.74 3.7,-37.8zm-101.23 34.94c20.55,-9.23 31.88,23.84 10.54,31.4 -20.12,7.14 -32.96,-21.33 -10.54,-31.4zm-44.54 24.63c10.03,61.01 109.84,51.72 99.57,-17.63 -3.69,-24.85 -29.33,-47.24 -59.3,-41.32 -24.65,4.87 -45.44,27.45 -40.27,58.95zm-235.06 -25.2c20.61,-6.79 31.45,25.04 11.32,31.95 -21.16,7.28 -34.04,-24.48 -11.32,-31.95zm-45.14 20.76c2.24,26.69 23.98,47.35 53.63,45.65 65.73,-3.76 60.77,-106.85 -8.06,-100.95 -26.65,2.29 -48.06,25.64 -45.57,55.3zm142.26 -309.42c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
            TANKER: "M1012.86 1394.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm147.88 -437.47c29.14,0 31.78,43.53 -0.93,43.53 -26.22,0 -26.38,-43.53 0.93,-43.53zm-280.56 -118.51l22.23 0 0 -23.15 -22.23 0 0 23.15zm0 -37.04l22.23 0 0 -23.15 -22.23 0 0 23.15zm0 74.07l22.23 0 0 -23.15 -22.23 0 0 23.15zm66.67 -120.37c0,5.05 1.08,7.78 7.41,9.26l0 13.89 -37.04 0 0 133.33 -14.81 0 0 -22.22 -22.23 0 0 22.22 -14.81 0 0 -133.33c-26.81,0 -38.33,3.91 -54.88,21.04 -38.19,39.56 -17.52,128.03 44.7,128.03l161.1 0c10.42,0 19.66,-2.8 26.68,-6.66 14.04,-7.69 25.05,-20.28 31.15,-35.53 11.11,-27.84 7.19,-60.02 -10.98,-83.35 -8.08,-10.38 -24.21,-22.6 -42.22,-22.6l0 -14.82c11.08,-2.58 9.84,-15.74 -2.77,-15.74l-61.11 0c-4.45,0 -10.19,2.54 -10.19,6.48zm13.89 201.85c29.14,0 31.78,43.53 -0.93,43.53 -26.22,0 -26.37,-43.53 0.93,-43.53zm-88.89 0c13.67,0 22.54,10.06 22.8,21.41 0.68,29.45 -44.42,29.45 -43.74,0 0.24,-10.87 9.5,-21.41 20.94,-21.41zm275 -99.07l0 -56.48c13.02,0 14.03,4.22 19.83,11.65l42.21 54.09 -52.83 0.06c-6.81,-0.11 -9.21,-2.65 -9.21,-9.32zm-51.85 -65.74l0 119.44c-23.76,0 -18.36,-1.56 -23.85,4.85 -5.03,5.86 -11.15,10.69 -17.76,14.66 -7.31,4.38 -20.81,10.12 -32.47,10.12l-170.36 0c-18.98,0 -36.16,-10.66 -48.4,-22.9 -2.04,-2.05 -3.54,-4.5 -5.3,-5.8 -2.48,0.65 -5.56,2.6 -5.56,5.55l0 54.64c0,3.37 4.51,6.47 8.33,6.47l36.11 0c0,6.75 1.07,10.37 3.37,15.15 12.26,25.43 43.03,27.88 59.86,11.06 6.62,-6.63 10.84,-16.15 10.84,-26.21l14.82 0c0,38 52.75,52.43 70.7,15.15 2.31,-4.78 3.37,-8.4 3.37,-15.15l125.93 0c0,38 52.74,52.43 70.7,15.15 2.31,-4.78 3.37,-8.4 3.37,-15.15l17.59 0c10.08,0 19.45,-9.36 19.45,-19.44l0 -75.93c0,-9.9 -10.71,-20.79 -17.2,-29.09l-46.18 -59.39c-5.91,-6.45 -16.27,-9.66 -26.43,-9.66l-40.74 0c-4.46,0 -10.19,2.54 -10.19,6.48zm-116.45 -159.38c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
            TRUCK: "M1012.86 1394.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm-195.33 -646.31l0 181.15c0,3.84 1.92,5.76 5.76,5.76l205.03 0c3.39,0 4.95,-4.53 4.95,-8.24l0 -175.37c0,-10.47 -7.12,-19.76 -17.3,-19.76l-180.33 0c-5.79,0 -9.41,1.78 -12.57,4.71 -2.68,2.47 -5.54,6.88 -5.54,11.75zm-14.83 229.62c0.67,3.72 2.41,5.88 6.59,5.88l65.05 0c3.6,0 1.69,-5.52 7.4,-16.49 1.44,-2.79 3.15,-5.06 4.94,-7.41 1.94,-2.57 4.07,-4.03 5.77,-6.57l-82.4 -0.07c-3.31,0.06 -2.64,-0.36 -4.73,1.03 -0.98,0.66 -2.62,2.46 -2.62,3.98l0 19.65zm317.84 31.4c-23.7,0 -24.85,-37.06 0.82,-37.06 23.19,0 23.71,37.06 -0.82,37.06zm-0.83 18.94c29.23,0 45.73,-28.23 35.67,-52.15 -9.43,-22.44 -40.22,-32.45 -61.8,-11.06 -6.24,6.18 -10.47,15.09 -10.34,26.03 0.24,20.2 16.49,37.18 36.47,37.18zm-194.32 -18.94c-24.89,0 -25.24,-37.06 0,-37.06 23.5,0 23.47,37.06 0,37.06zm-37.87 -23.06c0,8.37 -0.44,13.77 3.84,21.7 11.77,21.86 39.92,25.96 55.65,13.09 20.98,-17.13 20.58,-43.51 0.44,-60.14 -13.5,-11.15 -35.61,-10.06 -48.63,2.89 -5.35,5.34 -11.3,14.83 -11.3,22.46zm270.08 -130.93l-73.28 0c-3.01,0 -6.59,-2.27 -6.59,-4.94l0 -41.97c0,-4.91 3.33,-6.59 8.23,-6.59l40.34 0c8.57,0 13.61,11.74 20.93,21.88 3.2,4.42 16.96,22.97 16.96,25.87 0,3.22 -3.07,5.75 -6.59,5.75zm66.69 102.94l0 19.04c-0.83,8.51 -5.29,6.49 -25.53,6.49 -9.87,0 -19.76,0 -29.64,0 -0.97,-11.72 -7.51,-21.04 -15.01,-28.62 -17.86,-18.06 -49.1,-17.83 -67.13,-0.02 -8.61,8.51 -11.85,15.05 -15.01,28.64l-98.81 0c0,-14.31 -10.91,-23.39 -15.65,-30.47l92.22 0 0 -171.26c0,-7.44 5.74,-13.18 13.18,-13.18l55.15 0c14.62,0 25.82,6.27 33.91,13.03 1.65,1.38 3.72,4.28 5.28,6.26 1.95,2.48 3.02,4.06 4.8,6.73 8.53,12.89 32.92,47.57 37,56.02 2.39,4.98 4.65,11.43 4.65,18.4l0 84c7.43,0 20.59,-1.97 20.59,4.94zm-245.74 -325.32c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
            COMPRESSORS: "M365.57 176.98c0,-7.96 -6.47,-14.44 -14.44,-14.44 -7.98,0 -14.44,6.48 -14.44,14.44 0,7.98 6.46,14.45 14.44,14.45 7.97,0 14.44,-6.47 14.44,-14.45zm57.75 -176.98c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm195.98 215.08c-1.74,-10.43 -10.74,-18.09 -21.32,-18.11l-349.32 0c-10.56,0.02 -19.56,7.65 -21.32,18.06 -4.02,25.07 -6.09,50.41 -6.19,75.81 0.1,25.38 2.17,50.71 6.19,75.76 1.74,10.43 10.74,18.09 21.32,18.1l23.39 0c3.68,-40.93 37.98,-72.29 79.07,-72.29 41.1,0 75.39,31.36 79.06,72.29l50.9 0 0 -7.22c0,-3.98 3.23,-7.22 7.22,-7.22 3.99,0 7.22,3.24 7.22,7.22l0 50.54 57.77 0 0 -50.54c0,-3.98 3.23,-7.22 7.21,-7.22 4,0 7.23,3.24 7.23,7.22l0 7.22 30.25 0c10.56,-0.01 19.56,-7.64 21.32,-18.05 4.02,-25.07 6.08,-50.43 6.19,-75.82 -0.1,-25.37 -2.17,-50.7 -6.19,-75.75zm-318.72 17.99l-21.67 0c-3.99,0 -7.22,-3.23 -7.22,-7.21 0,-3.99 3.23,-7.23 7.22,-7.23l21.67 0c3.98,0 7.21,3.24 7.21,7.23 0,3.98 -3.23,7.21 -7.21,7.21zm267.15 0l-238.28 0c-3.98,0 -7.21,-3.23 -7.21,-7.21 0,-3.99 3.23,-7.23 7.21,-7.23l238.28 0c3.99,0 7.22,3.24 7.22,7.23 0,3.98 -3.23,7.21 -7.22,7.21zm-216.61 93.87c-26.29,0 -49.99,15.83 -60.04,40.12 -10.05,24.29 -4.5,52.23 14.09,70.82 18.58,18.58 46.54,24.15 70.82,14.08 24.29,-10.05 40.11,-33.75 40.11,-60.04 -0.04,-35.88 -29.11,-64.95 -64.98,-64.98zm0 101.08c-19.94,0 -36.1,-16.16 -36.1,-36.1 0,-19.94 16.16,-36.11 36.1,-36.11 19.93,0 36.1,16.17 36.1,36.1 -0.02,19.95 -16.17,36.09 -36.1,36.11zm144.4 21.66c0,4 3.23,7.23 7.23,7.23l43.31 0c4,0 7.23,-3.23 7.23,-7.23l0 -7.21 -57.77 0 0 7.21zm-122.74 -57.76c0,-11.96 -9.7,-21.65 -21.66,-21.65 -11.96,0 -21.66,9.69 -21.66,21.65 0,11.97 9.7,21.66 21.66,21.66 11.96,0 21.66,-9.69 21.66,-21.66zm-100.72 -267.15l-14.81 0 0 57.76 48.38 0c-19.15,-13.37 -31.43,-34.51 -33.57,-57.76zm223.46 57.76c35.89,0 64.98,-29.09 64.98,-64.99 0,-35.89 -29.09,-64.98 -64.98,-64.98 -35.89,0 -64.98,29.09 -64.98,64.98 0.04,35.88 29.11,64.96 64.98,64.99zm41.51 -79.33c1.89,-0.32 3.83,0.13 5.39,1.23 1.57,1.12 2.62,2.8 2.94,4.69 0.47,2.78 0.7,5.6 0.7,8.42 0,3.99 -3.23,7.22 -7.21,7.22 -4,0 -7.23,-3.23 -7.23,-7.22 0,-2.02 -0.16,-4.02 -0.49,-6.01 -0.67,-3.93 1.97,-7.65 5.9,-8.33zm-7.53 -19.64c2.83,2.82 2.83,7.38 0,10.21l-14.48 14.5c1.42,2.89 2.15,6.05 2.17,9.27 0,11.97 -9.71,21.67 -21.67,21.67 -11.96,0 -21.66,-9.7 -21.66,-21.67 0,-11.96 9.7,-21.65 21.66,-21.65 3.22,0.01 6.4,0.75 9.28,2.16l14.51 -14.5c2.81,-2.82 7.38,-2.82 10.19,0.01zm-84.52 33.98c0.01,-14.86 6.56,-28.98 17.92,-38.58 11.37,-9.6 26.38,-13.7 41.05,-11.24 3.63,0.68 6.18,4.01 5.87,7.7 -0.32,3.7 -3.37,6.56 -7.07,6.62 -0.41,0 -0.81,-0.03 -1.22,-0.09 -10.47,-1.76 -21.19,1.19 -29.31,8.04 -8.1,6.86 -12.79,16.93 -12.8,27.55 0,4 -3.23,7.23 -7.22,7.23 -3.99,0 -7.22,-3.23 -7.22,-7.23zm96.06 64.99l48.35 0 0 -57.76 -14.81 0c-2.13,23.25 -14.4,44.38 -33.54,57.76zm-40.47 -70.04l-0.05 -0.08c-2.86,-2.79 -7.43,-2.75 -10.25,0.1 -2.81,2.84 -2.8,7.43 0.03,10.25 2.83,2.83 7.41,2.84 10.25,0.04 2.85,-2.82 2.9,-7.4 0.1,-10.26l-0.08 -0.05zm-103.92 70.04l53.38 0c-11.59,-8.13 -20.82,-19.21 -26.71,-32.08 -5.88,12.87 -15.1,23.94 -26.67,32.08zm-45.53 0c35.89,0 64.98,-29.09 64.98,-64.99 0,-35.89 -29.09,-64.98 -64.98,-64.98 -35.89,0 -64.98,29.09 -64.98,64.98 0.03,35.88 29.11,64.96 64.98,64.99zm-49.77 -61.71l0 -0.02c-0.87,-1.71 -1.01,-3.69 -0.41,-5.52 0.6,-1.82 1.9,-3.32 3.61,-4.19 6.18,-2.75 12.9,-4.07 19.67,-3.86 0.97,-2.49 2.28,-4.84 3.9,-6.97 -2.85,-2.79 -6.22,-5 -9.93,-6.49 -3.79,-1.27 -5.83,-5.36 -4.57,-9.15 1.27,-3.79 5.36,-5.84 9.15,-4.57 6.3,2.41 11.98,6.22 16.6,11.12 2.45,-1.06 5.03,-1.78 7.67,-2.12 -0.04,-3.99 -0.85,-7.94 -2.42,-11.62 -1.74,-3.56 -0.29,-7.86 3.26,-9.64 3.55,-1.77 7.86,-0.35 9.66,3.19 2.77,6.17 4.09,12.9 3.87,19.67 2.48,0.97 4.83,2.27 6.95,3.88 2.83,-2.77 5.04,-6.11 6.49,-9.8 0.79,-2.46 2.82,-4.31 5.34,-4.86 2.52,-0.55 5.15,0.29 6.89,2.2 1.73,1.9 2.32,4.58 1.54,7.05 -2.36,6.36 -6.18,12.06 -11.18,16.66 1.08,2.45 1.81,5.05 2.17,7.7 3.99,0 7.94,-0.82 11.61,-2.39 3.55,-1.8 7.91,-0.36 9.7,3.2 1.8,3.57 0.36,7.92 -3.2,9.71 -5.72,2.59 -11.92,3.94 -18.19,3.95 -0.48,0 -1,-0.06 -1.5,-0.07 -0.96,2.49 -2.27,4.82 -3.89,6.94 2.85,2.8 6.22,5 9.94,6.5 3.34,1.14 5.38,4.53 4.8,8.01 -0.58,3.5 -3.6,6.05 -7.13,6.05 -0.77,0 -1.54,-0.13 -2.26,-0.37 -6.3,-2.41 -11.98,-6.21 -16.61,-11.11 -2.44,1.06 -5.01,1.76 -7.66,2.11 0.03,4 0.84,7.96 2.42,11.65 1.73,3.56 0.28,7.86 -3.27,9.64 -3.54,1.77 -7.86,0.35 -9.66,-3.19 -2.76,-6.18 -4.08,-12.9 -3.86,-19.67 -2.49,-0.97 -4.84,-2.28 -6.97,-3.89 -2.8,2.84 -5.01,6.22 -6.5,9.93 -1.27,3.79 -5.36,5.83 -9.15,4.56 -3.79,-1.26 -5.83,-5.36 -4.56,-9.15 2.41,-6.29 6.21,-11.97 11.11,-16.6 -1.06,-2.44 -1.77,-5.02 -2.12,-7.66 -3.98,0.01 -7.93,0.83 -11.6,2.4 -1.72,0.85 -3.69,1 -5.52,0.4 -1.82,-0.6 -3.32,-1.9 -4.19,-3.61z",
            BATTERY: "M1012.86 1394.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm-184.36 -579.92l370 0 0 -53.48 -370 0 0 53.48zm303.51 -67.95c0,1.67 0.51,2.18 2.18,2.18l36.11 0c1.67,0 2.18,-0.51 2.18,-2.18l0 -18.04 -40.47 0 0 18.04zm-92.5 0c0,1.67 0.5,2.18 2.16,2.18l36.14 0c1.67,0 2.17,-0.51 2.17,-2.18l0 -18.04 -40.47 0 0 18.04zm-92.49 0c0,1.67 0.5,2.18 2.17,2.18l36.14 0c1.66,0 2.16,-0.51 2.16,-2.18l0 -18.04 -40.47 0 0 18.04zm-92.5 0c0,1.67 0.51,2.18 2.18,2.18l36.11 0c1.67,0 2.18,-0.51 2.18,-2.18l0 -18.04 -40.47 0 0 18.04zm183.81 158.61c8.41,0 33.79,-1.77 37.78,3 5.09,6.1 -0.95,12.25 -5.32,18.81l-53.56 80.34c-2.67,3.99 -5.95,11.35 -11.71,11.35 -4.2,0 -7.98,-3.77 -7.98,-7.98 0,-2.09 13.23,-54.76 14.19,-56.76 -18.33,0 -38.14,4.45 -38.14,-8.85 0,-3.58 12.77,-24.11 15.92,-29.31l34.02 -58.22c1.93,-3.47 6.48,-12.05 8.74,-14.3 5.13,-5.1 13.16,-1.51 13.16,4.28 0,5.87 -6.03,55.4 -7.1,57.64zm-211.93 -78.93l0 206.62c0,2.04 0.62,2.65 2.66,2.65l368.88 0c2.04,0 2.66,-0.61 2.66,-2.65l0 -206.62c0,-2.03 -0.62,-2.65 -2.66,-2.65l-368.88 0c-2.04,0 -2.66,0.62 -2.66,2.65zm168.47 111.73c12.82,0 34.59,-2.79 34.59,7.11 0,6.76 -4.28,14.21 -4.42,21.27 2.45,-1.81 12.59,-18.01 15.24,-21.99 2.64,-3.96 4.75,-7.13 7.45,-11.18 2.06,-3.09 6.62,-8.93 7.44,-12.05 -6.49,0 -13,-0.04 -19.51,0 -14.6,0.11 -14.6,-2.02 -12.24,-21.12 0.38,-3.22 1.53,-9.16 1.62,-12.58 -2.71,1.98 -26.59,43.8 -30.17,50.54zm-16.32 -305.2c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
            "WELDING MACHINES": "M336.41 377.24l-12.79 0c-16.05,0 -29.47,13.47 -31.99,27.51 -2.29,12.78 2.55,49.66 -2.19,57.3 -4.36,7.03 -13.98,7.07 -18.7,0.44 -3.59,-5.04 -2.11,-19.69 -2.11,-28.02 0,-19.84 0,-39.67 0,-59.49 5.82,-0.49 12.44,-7.03 15.62,-10.76 3.64,-4.29 6.98,-11.64 6.98,-19.37l0 -57.99 -67.78 0 0 57.99c0,15.1 13.58,29.37 22.6,30.13 0,10.85 -0.99,83.57 0.88,90.24 4.12,14.86 17.06,23.88 30.63,24.98l5.54 0c7.41,-0.6 14.69,-3.65 20.49,-9.48 6.8,-6.85 10.28,-13.13 10.24,-25.91 -0.05,-11.3 0,-22.6 0,-33.9 -0.01,-20.56 2.54,-21.09 22.58,-21.09l0 67.78 22.6 0 0 22.6 67.78 0 0 -22.6 90.38 0 0 22.6 67.78 0 0 -22.6 24.1 0 0 -248.52 -272.64 0 0 158.16zm86.91 -377.24c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-84.66 67.76c-12.04,0 -24.1,0.03 -36.15,0 -12.31,-0.05 -20.82,3.05 -28.58,7.55 -15,8.68 -27.89,27.41 -27.89,45.16l0 39.17 -22.6 0 0 45.18 67.78 0 0 -45.18 -22.6 0c0,-16.21 -2.21,-41.3 5.11,-52.9 3.11,-4.93 8.65,-10.4 14.25,-12.86 11.98,-5.27 36.33,-3.54 50.68,-3.54 0.8,9.45 16.07,22.6 29.39,22.6 13.65,0 17.1,-3.34 30.02,-7.63l61.32 -21.52c3.05,-1.21 9.32,-3.71 12.58,-3.98 -2.08,-2.85 -19.26,-7.61 -23.78,-9.36l-49.56 -17.47c-8.46,-2.79 -18.01,-7.15 -27.68,-7.82l-4.84 0c-5.65,0.42 -11.28,2.39 -16.69,6.99 -3.73,3.17 -10.27,9.79 -10.76,15.61zm65.53 259.82c0,18.92 22.59,14.43 22.59,3.01 0,-18.92 -22.59,-14.42 -22.59,-3.01zm0 -77.57l90.37 0 0 -22.59 -90.37 0 0 22.59z",
            "TOWED STREET SWEEPER": "M237.28 439.23c24.7,2.37 82.42,39.97 109.99,32.9 27.29,-7.02 17.01,-4.11 41.77,1.32 -7.49,-25.63 -13.6,-19.39 -7.6,-54.95l-12.15 -7.35c7.84,-20.91 19.55,-50.13 39.12,-51.2 -9.44,10.26 -32.47,31.5 -29.95,49.44l22.82 3.75c14.56,-20.24 11.72,-38.99 40.28,-47.53 38.59,-11.53 50.64,24.62 57.76,31.32 30.03,-13.15 -6.26,-17.58 50.91,-29.84 8.26,-1.76 24.69,-3.8 34.55,-7.81l6.65 -5.18c0.35,-0.35 0.75,-0.97 1.12,-1.32 6.73,-6.53 12.79,-7.9 20.3,-2.74l-13.11 2.64c-6.38,0.48 -4.28,1.91 -5.23,9.38 -10.05,1.06 -5.15,0.13 -8.85,3.63 -12.38,-0.8 -40.53,6 -52.92,10.33 -24.43,8.55 -1.33,12.61 -33.56,27.06l3.51 24.64c7.32,-1.41 5.67,-3.08 11.81,-4.18 18.97,-3.45 9.02,6.37 32.74,-10.25l2.75 -2.57c9.22,-6.69 -7.89,3.5 3.22,-2.11 10.08,5.06 6.68,5.95 16,12.24 14.2,-5.29 26.92,-15.05 31.99,-29.84 31.21,3.13 28.84,-13.56 9.16,-22.47l2.15 -6.08 2.36 -2.37c5.52,-13.47 -9.36,-8.99 4.76,-17.74 -9.65,-2.49 -6.48,-0.23 -10.32,-9.39 -2.18,-5.23 -3.3,-10.61 -4.39,-15.85l-73.99 12.77c-7.94,-14.78 -3.82,-18.22 -26.62,-18.12 -19.29,0.1 -54.28,10.29 -69.53,20.19 -10.28,6.68 -17.01,15.05 -25.46,20.16l-0.34 -82.61c-8.78,2.98 -87.74,41.59 -92.91,51.58 -21.4,41.35 -16.52,111.38 -17.83,119.42 -2.78,17 3.99,-11.49 -1.16,4.2l-1.95 3.78c-6.81,-33.38 2.66,-102.88 16.47,-129.03 -11.3,-1.85 -75.82,2.37 -83.15,6.43 -8.68,5.92 -13.81,34.44 -15.11,44.95 -0.58,0.76 -3.8,0.44 -5.43,13.26l2.36 33.48c0.1,-0.39 0.79,1.51 1.49,1.99 1.55,3.63 -6.56,6.02 5.73,2.28l0.83 -0.05 -0.48 0.24c-0.74,0.34 -1.69,1.02 -2.35,1.39 -0.81,0.46 -1.91,2.93 -2.54,2.22 -0.72,-0.81 -1.83,1.7 -2.66,2.65 19,4.67 7.41,6.59 26.99,10.94zm186.04 -439.23c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm143.38 186.47l0.49 -7.19c-5.4,0.92 -5.45,-0.34 -3.81,7.05l-10.07 -0.95 -0.77 12.72 23.83 0.82 0.35 -12.75 -10.02 0.3zm-42.8 -84.05l8.19 -1.56 -0.92 6.76 -16.76 57.87c-27.88,-1.33 -40.14,-5.95 -67.87,1.11 -18.83,4.79 -39.71,11.14 -58.33,14.26 2.31,-12.32 7.12,-35.97 13.63,-44.02 5.89,-6.12 107.87,-32.42 122.06,-34.42zm-2.25 289.07l1.75 -0.02c-15.88,-0.22 -3.72,2.01 -22.06,-0.81l-4.59 22.21c14.14,-4.58 5.12,-5.48 5.12,-5.48 2.23,11.58 8.51,8.37 17.64,7.24l0.7 -0.41 3.41 1.44 -1.97 -24.17zm16.84 23.31c4.36,1.44 0.94,0.64 1.84,-1.68l1.85 1.13 8.86 -1.17c2.23,-4.39 4.36,-0.29 0.21,-7.49 -0.53,-5.23 0.81,-4.79 -2.17,-5.25l0.63 2.82 -1.15 -5.14 0.72 -1.84 5.96 14.95 4.94 -2.57c6.04,-0.09 9.07,-1.38 14.68,-6.31l-5.49 -11.39c3.68,3.79 5.14,5.75 10.14,10.66 -0.16,-18.16 -21.91,-20.5 -14.51,-24.89 6.8,7.67 10.19,10.9 19.04,15.65 -5.77,-15.51 -17.59,-15.58 -17.42,-18.21l3.33 -2.05c2.97,3.36 5.05,5.15 8.84,8.21 5.52,4.46 5.66,4.56 10.13,4.67 -2.94,-10.5 -15.05,-10.79 -16.14,-18.03l-10.41 9.89c-6.24,2.64 -9.69,5.43 -16.36,6.79l2.95 -2.81c0.21,-1.05 0.95,-1.46 1.69,-1.87 5.97,-5.48 5.93,-3.75 9.93,-11.53l-0.09 -5.32 -1.57 -3.75c-3.93,0.6 -3.11,1.63 -3.37,-1.91l-3.92 0.79 -4.05 0.84c-0.02,3.97 0.77,2.4 -4.17,3.02 -16.43,20.69 -39.93,-5.18 -39.79,22.54 10.06,5.52 25.33,1.48 36.71,0.01 9.14,-0.2 3.36,-1.24 6.78,3.79 -9.67,-1.39 -4.26,-1.45 -6.04,2.08l-0.59 -0.59 -6.67 2.19 -4.47 -0.01 -0.39 -0.48 -7.3 0.95 16.84 23.31zm-10.62 0.63l3.36 -0.2 1.88 -0.31 5.38 -0.12 -10.62 0.63zm18.96 -24.14l0.75 0.74 0.08 2 -0.83 -2.74zm0 0l0.83 2.74 -0.83 -2.74zm2.88 11.88l1.33 9.91 -1.33 -9.91zm-326.9 -41.06c-3.06,1.36 -2.65,0.9 -1.54,0.09l1.54 -0.09zm236.28 -1.63c2.64,6.18 6.67,15.39 1.75,23.69 -3.07,5.18 -10.99,8.32 -17.52,4.13 -10.03,-6.45 -11.04,-34.23 15.77,-27.82zm-22.96 42.07c33.94,2.88 42.5,-53.32 6.83,-60.2 -13.28,19.39 -17.33,33.33 -6.83,60.2zm-201.67 -143.87c25.91,0.09 74.05,-1.23 94.85,-13.24 12.65,-7.3 23.3,-11.79 35.36,-18.46 8.87,-4.91 28.16,-13.19 34.79,-20.22 -22.07,0.17 -73.83,9.04 -92.25,16.46 -13.88,5.58 -65.06,28.69 -72.75,35.46zm378.38 31.92c3.48,5.6 2.4,1.03 2.02,10.05l-2.36 2.37 0.34 -12.42zm-278.34 -78.72c27.22,-3.07 47.81,-10.5 79.93,-10.9l0.02 78.85c28.92,-17.44 29.07,-22.33 75.69,-32.55l-8.32 -73.62c-29.44,-4.56 -130.01,25.12 -147.32,38.22zm110.35 124.12c39.7,-17.59 50.65,62 15.59,77.31 -37.54,16.38 -51.82,-61.27 -15.59,-77.31zm-58.02 22.99c-13.43,73.59 52.86,89.53 86.72,72.28 39.2,-19.95 27.85,-108.89 -5.43,-119.3 -37.27,-11.64 -52.97,24.18 -62.25,49.06l-19.04 -2.04zm143.11 -184.76l65.91 -0.33c2.41,11.99 6.79,58.38 4.84,68.46 -14.81,2.63 -51.18,9.76 -63.79,8.51 -2.99,-23.09 -10.37,-53.89 -6.96,-76.64zm13.43 -72.63c30.94,0.85 42.42,8.14 42.56,8.16l9.66 46.89 -64.77 -0.39 12.55 -54.66zm-152.3 31.04c-5.56,46.99 -5.01,24.94 -10.34,55.25 29.69,-4.63 76.39,-25.29 105.4,-18.83l9.81 76.53c21.38,5.57 30.07,-3.81 37.24,18.59 14.05,-1.34 66.96,-10.21 76.42,-15.35 1.74,-23.47 -2.46,-58.79 -6.26,-82.03l-12.53 -54.04c-3.25,-18.67 1.93,-2.03 3.01,-17.44 -15.12,-6.83 -36.05,-8.1 -55.04,-9.49 -43.25,-3.17 -19.53,6.83 -48.42,14.36 -18.58,4.84 -33.85,9.87 -50.81,15.52 -29.21,9.72 -32.89,6.59 -48.48,16.93z",
            COMPACTOR: "M316.51 237.37c-8.45,4.69 -42.76,20.05 -50.36,20.61 0.79,-28.98 4.05,-45.36 -6.16,-66.5 -4.32,-8.96 -4.47,-13.54 -14.96,-8.26 -5.87,11.55 6.33,15.87 6.8,33.43 0.39,15.03 -0.07,30.96 -0.06,46.12 -5.15,10.84 -27.59,7.33 -38.66,28.74 -9.35,18.09 -7.08,39.31 -6.95,61.65 6.41,-3.6 8.55,-7.28 17.12,-12.04 47.22,-26.3 105.28,-3.62 118.87,52.86l3.36 10.5c0.2,0.42 0.52,1.16 0.86,1.7l79.08 -0.04c-10.38,-39.79 -13.17,-63.01 5.42,-100.49 12.81,-25.82 37.82,-51.12 64.7,-60.13 -0.39,-0.4 -1.12,-1.46 -1.32,-1.07 -0.01,0.01 -7.29,-2.32 -9,-15.51 -15.08,-116.42 1.25,-111.86 -75.37,-111.86 -35.12,0.01 -75.2,-9.38 -81.85,24.48 -5.84,29.7 -6.03,65.03 -11.52,95.81zm106.81 -237.37c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-171.07 288.03c-88.74,16.21 -61.8,144.23 23.72,127.71 82.37,-15.91 59.99,-143.02 -23.72,-127.71zm274.54 -96.12c-18.16,3.4 -26.73,6.03 -41,15.09 -103.03,65.37 -42.77,231.82 83.3,207.98 54.21,-10.25 103.54,-64.86 89.19,-133.69 -11.33,-54.27 -63.65,-102.09 -131.49,-89.38zm-90.57 -15.54l34.08 -0.22c1.07,-13.24 -4.72,-46.17 -6.58,-61.53 -3.45,-28.45 2.38,-42.11 -27.23,-42.48l-0.27 104.23zm-153.97 48.33c-2.59,8.86 -3.14,23.39 1.21,30.76 12.4,2.17 12.83,-5.86 12.51,-17.15 -0.34,-12.05 -2.32,-15.51 -13.72,-13.61zm-25.81 -0.04c-9.58,4.74 -7.9,41.9 7.49,30.31 3.97,-2.99 6.72,-37.31 -7.49,-30.31zm151.95 95.38c4.04,-15.91 -5.58,-14.46 -20.37,-14.31 -9.15,0.1 -29.46,-3.29 -35.44,2.91 -18.08,18.73 48.42,12.66 55.81,11.4zm-76.42 -144.02l88 0.23 0.84 -104.05c-83.32,0.24 -75.86,-8.71 -81.15,34.71 -2.33,19.14 -8.21,52.05 -7.69,69.11z",
            GENERATOR: "M206 206.15l0 226.74c0.01,3.48 3.48,6.3 7.77,6.31l7.76 0 0 -239.34 -7.76 0c-4.29,0 -7.76,2.83 -7.77,6.29zm217.32 -206.15c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm139.71 341.96c-8.57,0 -15.52,-5.64 -15.52,-12.59l0 -18.9c0,-6.95 6.95,-12.58 15.52,-12.59l0 -75.58c-8.57,-0.01 -15.52,-5.64 -15.52,-12.6l0 -18.89c0,-6.96 6.95,-12.59 15.52,-12.6l0 -12.6 -131.94 0 0 188.95 131.94 0 0 -12.6 0 0zm-38.81 0l-69.85 0c-4.29,0 -7.76,-2.81 -7.76,-6.29 0,-3.49 3.47,-6.3 7.76,-6.3l69.85 0c4.28,0 7.76,2.81 7.76,6.3 0,3.48 -3.48,6.29 -7.76,6.29zm0 -25.19l-69.85 0c-4.29,0 -7.76,-2.82 -7.76,-6.29 0,-3.48 3.47,-6.31 7.76,-6.31l69.85 0c4.28,0 7.76,2.83 7.76,6.31 0,3.47 -3.48,6.29 -7.76,6.29zm0 -25.18l-69.85 0c-4.29,0 -7.76,-2.83 -7.76,-6.31 0,-3.48 3.47,-6.3 7.76,-6.3l69.85 0c4.28,0 7.76,2.82 7.76,6.3 0,3.48 -3.48,6.31 -7.76,6.31zm-186.28 -62.99l38.81 0c4.29,0 7.76,-2.82 7.76,-6.3l0 -25.19c0,-3.48 -3.47,-6.3 -7.76,-6.3l-38.81 0c-4.28,0 -7.76,2.82 -7.76,6.3l0 25.19c0,3.48 3.48,6.3 7.76,6.3zm294.94 -88.18l-7.76 0 0 239.34 7.76 0c4.29,-0.01 7.76,-2.83 7.77,-6.31l0 -226.74c-0.01,-3.46 -3.48,-6.29 -7.77,-6.29zm-395.84 239.34l372.56 0 0 -239.34 -372.56 0 0 239.34zm15.52 -69.28c0.01,-6.96 6.96,-12.59 15.53,-12.6l0 -75.58c-8.57,-0.01 -15.52,-5.64 -15.53,-12.6l0 -18.89c0.01,-6.96 6.96,-12.59 15.53,-12.6l0 -18.89c0,-1.67 0.82,-3.28 2.27,-4.45 1.45,-1.19 3.43,-1.85 5.49,-1.85l294.94 0c2.06,0 4.04,0.66 5.49,1.85 1.45,1.17 2.27,2.78 2.27,4.45l0 18.89c8.57,0.01 15.52,5.64 15.53,12.6l0 18.89c-0.01,6.96 -6.96,12.59 -15.53,12.6l0 75.58c8.57,0.01 15.52,5.64 15.53,12.6l0 18.89c-0.01,6.95 -6.96,12.59 -15.53,12.59l0 18.9c0,1.67 -0.82,3.27 -2.27,4.46 -1.45,1.18 -3.43,1.84 -5.49,1.84l-294.94 0c-2.06,0 -4.04,-0.66 -5.49,-1.84 -1.45,-1.19 -2.27,-2.79 -2.27,-4.46l0 -18.9c-8.57,0 -15.52,-5.64 -15.53,-12.59l0 -18.89zm15.53 18.89l15.52 0 0 -18.89 -15.52 0 0 18.89zm31.04 -138.56l0 18.89c0,6.96 -6.95,12.59 -15.52,12.6l0 75.58c8.57,0.01 15.52,5.64 15.52,12.6l0 18.89c0,6.95 -6.95,12.59 -15.52,12.59l0 12.6 131.94 0 0 -188.95 -131.94 0 0 12.6c8.57,0.01 15.52,5.64 15.52,12.6zm15.53 6.3c0.01,-10.43 10.42,-18.89 23.28,-18.9l38.81 0c12.86,0.01 23.27,8.47 23.28,18.9l0 25.19c-0.01,10.43 -10.42,18.88 -23.28,18.89l-38.81 0c-12.86,-0.01 -23.27,-8.46 -23.28,-18.89l0 -25.19zm-46.57 12.59l15.52 0 0 -18.89 -15.52 0 0 18.89zm77.96 -107.06l20.57 0c-3.74,-8.05 -5.57,-16.6 -5.39,-25.21 -0.18,-8.59 1.65,-17.13 5.39,-25.18l-20.92 0c-1.89,0.8 -7.76,9.57 -7.76,25.18 0,15.46 5.73,24.19 8.11,25.21zm46.22 25.19l46.57 0 0 -12.6 -46.57 0 0 12.6zm-7.4 -25.19l43.84 0c-3.73,-8.05 -5.56,-16.6 -5.39,-25.21 -0.17,-8.59 1.66,-17.13 5.39,-25.18l-44.2 0c-1.89,0.8 -7.76,9.57 -7.76,25.18 0,15.46 5.73,24.19 8.12,25.21zm178.16 107.06l15.52 0 0 -18.89 -15.52 0 0 18.89zm-116.07 -107.06l20.56 0c-3.73,-8.05 -5.56,-16.6 -5.39,-25.21 -0.17,-8.59 1.66,-17.13 5.39,-25.18l-20.91 0c-1.9,0.8 -7.77,9.57 -7.77,25.18 0,15.46 5.74,24.19 8.12,25.21zm38.44 -0.18c3.77,-3.89 6.05,-8.59 6.58,-13.51 0.09,-0.22 0.19,-0.45 0.31,-0.66 0.25,-0.79 0.72,-1.52 1.37,-2.14 0.6,-0.64 1.37,-1.16 2.23,-1.53 0.88,-0.41 1.85,-0.66 2.86,-0.74 0.28,-0.06 0.58,-0.11 0.87,-0.14l51.7 0c4.42,-1.4 8.38,-3.66 11.49,-6.58 2.21,-1.82 4.15,-3.84 5.79,-6.02l-68.98 0c-0.3,-0.04 -0.61,-0.08 -0.9,-0.15 -0.49,-0.03 -0.98,-0.12 -1.44,-0.24 -0.49,-0.12 -0.96,-0.29 -1.4,-0.5 -0.42,-0.18 -0.81,-0.4 -1.17,-0.64 -0.38,-0.26 -0.74,-0.55 -1.04,-0.87 -0.65,-0.63 -1.12,-1.36 -1.37,-2.15 -0.12,-0.22 -0.23,-0.43 -0.32,-0.65 -0.53,-4.93 -2.81,-9.62 -6.57,-13.52 -2.56,1.67 -7.75,10.31 -7.75,25.01 0,14.73 5.19,23.36 7.74,25.03zm-233.62 302.48l335.31 0c1.2,-4.57 3.65,-8.88 7.17,-12.59l-349.64 0c3.52,3.71 5.98,8.02 7.16,12.59zm311.25 -75.57l15.52 0 0 -18.89 -15.52 0 0 18.89z",
            "HOOK LIFT": "M1012.86 1394.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm181.73 -343.53l0 -25.98c0,-17.67 -10.33,-27.99 -27.98,-27.99l-175.92 0c-23.74,0 -35.99,11.25 -35.99,27.99l0 33.73c0,17.5 11.75,26.23 35.99,26.23l175.92 0c17.65,0 27.98,-11.74 27.98,-33.98zm-383.82 -21.99l-8 0 0 15.99 127.94 0 0 -15.99 -15.99 0 0 -15.99 0 -7.99 15.99 0 0 -16 -127.94 0 0 16 16 0 0 23.98 -8 0zm247.89 -215.9l0 8 0 68.54 0 0 0 0.01 10.19 27.41 -17.15 0 -167.27 -233.05 -36.86 22.22 11.17 19.58 0 103.29 -11.79 0 7.92 55.97 3.48 0 0.39 0 0 16.92c-7.19,3.26 -15.19,10.29 -15.19,22.9 0,8.46 3.31,14.65 8.14,18.77l-43.37 37.36 12.25 0 38.41 -33.09c3.47,1.36 7.19,2.11 10.88,2.11 3.69,0 7.36,-0.98 10.67,-2.77l41.64 33.75 12.48 0 0.09 -0.11 -47.9 -38.82c3.24,-3.91 5.39,-9.15 5.39,-15.86 0,-4.42 -3.58,-8 -7.99,-8 -4.41,0 -7.99,3.58 -7.99,8 0,2.87 -0.78,4.67 -1.79,5.82l-2.19 -1.77c-1.5,-1.21 -3.67,-1.19 -5.13,0.09l-3 2.57c-2.59,-1.19 -4.59,-3.54 -4.59,-8.04 0,-7.24 7.16,-8.99 8.52,-9.25 3.85,-0.66 6.67,-3.99 6.67,-7.89l0 -22.69 5.61 0 3.26 0 11.2 -55.97 -8.07 0 -4 0 0 -58.04 95.95 184.67 0 1.27 0 2.4 0 5.64 31.99 0 0 15.98 111.94 0 8 0 0 -15.98 39.98 0 7.99 0 0 -151.94 -119.93 0zm-69.17 41.59l0.09 0.13 -32.63 21.23 16.78 -43.04 15.76 21.68zm-114.75 -25.59l-4 0 -4 0 0 -88.2 8 15.08 0 73.12zm6.95 -81.52l-13.79 -26.21 21.51 -14.14 -7.72 40.35zm18.72 -24.02l15.34 26.61 -24.76 15.95 9.42 -42.56zm2.46 57.85l23.31 -15.18 -9.12 41.54 -14.19 -26.36zm33.18 -1.63l17.19 25.09 -25.85 16.56 8.66 -41.65zm-2.66 60.76l28.9 -19.79 -16.46 44.06 -12.44 -24.27zm42.77 76.03l-13.93 -24.59 34.6 -24.7 -20.67 49.29zm10.86 17.48l23.65 -50.98 19.25 26.24 -42.9 24.74zm159.59 -40.98l-55.97 0 0 -47.98 55.97 0 0 47.98zm15.99 159.92l-175.91 0 0 -23.99 175.91 0 0 23.99zm-184.05 -420.13c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
            PICKUP: "M1012.86 1394.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm-103.57 -663.24c-16.03,-0.08 -34.37,-1.58 -47.54,4.99 -10.42,5.19 -20.37,16.76 -20.35,32.55 0.02,17.59 0,35.21 0,52.8 0,17.28 -0.63,35.82 0.06,52.94 -13.16,0.62 -25.07,-1.43 -34.28,5.95 -10.48,8.41 -7.86,19.83 -7.92,32.62 -0.13,26.98 -0.26,54.24 0.02,81.22l9.46 0.01c-2.69,-21.08 12.13,-39.27 33.15,-39.33 19.68,-0.06 37.35,18.06 33.3,39.29l115.07 0.04c-2.47,-8.66 -3.92,-13.75 -1.62,-23.5 0.88,-3.8 2.06,-6.71 3.73,-9.98 6.08,-11.95 18.7,-21.01 33.18,-22.52 5.48,-0.57 8.16,0.4 13.13,0.79l0.01 -10.5 17.82 -0.05 0.16 20.72c4.45,4.2 4.94,3.35 9.4,9.54 7.98,11.06 9.05,25.73 2.83,38.21 -1.19,2.4 -2.65,4.21 -3.68,6.26l162.78 0.04 -0.05 -3.32 -139.61 -11.86 -0.22 -236.09c-14.03,-0.74 -29.9,-0.04 -44.1,-0.06 -3.72,0 -6.78,-0.13 -8.7,2.26 -2.13,2.64 -1.07,6.08 0.9,7.74 3.23,2.73 15.81,0.53 20.94,1.47l0.01 133.53 -25.03 0.05c-1.09,-1.37 -33.13,-94.78 -34.82,-99.48 -3.53,-9.86 -13.96,-42.77 -18.08,-49.28 -4.01,-6.35 -10.34,-11.5 -19.16,-14.54 -10.97,-3.77 -20.87,-0.51 -31.56,-2.11 0.04,-3.77 0.52,-8.23 -1.16,-11.32 -1.35,-2.46 -4.4,-4.74 -8.12,-4.82 -4.04,-0.08 -7.05,2.4 -8.36,4.57 -2.37,3.97 -1.03,6.47 -1.59,11.17zm-72.08 228.62c-16.82,2.98 -27,18.7 -24.13,33.54 2.79,14.39 15.95,26.99 33.4,24.19 14.39,-2.31 27.13,-16.19 24.33,-33.64 -2.29,-14.24 -16.32,-27.15 -33.6,-24.09zm189.27 -17.05c-19.4,1.9 -35.94,19.2 -33.72,41.16 1.95,19.22 19.36,35.73 41.18,33.79 19.57,-1.74 36.11,-19.4 33.74,-41.45 -2.08,-19.24 -19.39,-35.64 -41.2,-33.5zm-166.45 -71.18l144.7 0.13c-0.18,-1.86 -5.07,-14.95 -6.03,-17.75l-19.06 -54.55c-2.31,-6.66 -10.57,-31.4 -13.04,-35.62 -8.82,-15.09 -19.17,-15.16 -34.05,-15.16 -9.09,0 -41.82,-0.53 -48.25,0.51 -13.25,2.16 -21.8,11.68 -24.07,25 -0.82,4.82 -0.27,63.13 -0.27,73.18 0,7.35 -0.57,17.23 0.07,24.26zm118.52 -238.81c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
            "STREET SWEEPER": "M1012.86 1394.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm164.17 -564.97c-10.54,-2.46 -10.85,-12.91 0,-12.91 3.76,0 8.22,5.53 1.46,11.75 -0.18,0.16 -0.58,0.47 -0.73,0.59 -0.14,0.13 -0.5,0.37 -0.73,0.57zm-49.04 138.06c28.58,0 28.94,43.87 1.29,43.87 -20.79,0 -29.07,-23.01 -17,-36.36 2.79,-3.09 10.45,-7.51 15.71,-7.51zm-49.03 21.93c0,19.55 12.83,37.08 25.86,43.83 23.6,12.22 55.83,4.72 69.23,-24.87 1.76,-3.9 4.37,-15.1 4.11,-20.07 -1.51,-27.78 -22,-47.92 -52.74,-47.92 -25.04,0 -46.46,23.39 -46.46,49.03zm-99.35 -21.93c28.89,0 28.72,43.87 1.29,43.87 -25.13,0 -30.22,-32.84 -10.36,-41.34 1.08,-0.46 7.79,-2.53 9.07,-2.53zm-49.03 21.93c0,26.98 22.43,49.04 45.16,49.04 16.74,0 27.47,-1.26 40.99,-15.79 7.45,-8 13.63,-23.51 13.04,-34.36 -1.02,-18.84 -11.17,-34.29 -28,-42.98 -30.8,-15.89 -71.19,6.57 -71.19,44.09zm27.09 -67.09l0 11.61c10.88,-0.24 27.15,-8.06 49.51,3.4 6.41,3.28 10.57,6.93 15.35,11.73 16.44,16.49 18.98,36.4 13.85,58.41 6.31,0 13.96,1.27 17.71,0.95 5.18,-0.43 11.12,-0.95 18.42,-0.95 -3.24,-6.73 -2.58,-15.43 -2.58,-23.22 0,-23.04 20.35,-46.13 43.87,-51.61l0 -65.8 -77.92 27.88c-13.57,4.75 -25.15,9.15 -39.02,13.88 -12.87,4.37 -26.18,10.69 -39.19,13.72zm112.26 -140.64c4.43,0 10.14,-0.36 14.35,-0.16 7.17,0.34 5.69,0.9 6.94,7.25 1.53,7.78 3.87,16.2 4.51,23.88l-33.54 0c2.63,-5.49 6.04,-23.68 7.74,-30.97zm-58.07 30.97l-42.57 0c0.12,-5.31 4.09,-18.52 5.81,-25.16 0.92,-3.57 0.43,-5.81 4.51,-5.81l38.71 0c-0.22,9.84 -5.67,21.49 -6.46,30.97zm40.01 0l-28.39 0c0.81,-9.69 5.61,-20.85 6.45,-30.97l28.39 0c-0.83,9.93 -6.21,20.17 -6.45,30.97zm25.8 -65.81l5.16 0c1.86,7.95 3.31,16.56 5.16,24.51l-15.48 0c0.7,-8.35 4.97,-15.91 5.16,-24.51zm-16.77 24.51l-28.39 0c1.27,-2.63 2.4,-9.52 3.35,-13.43 3.26,-13.57 -2.32,-11.08 30.2,-11.08 -0.13,5.88 -3.75,18.46 -5.16,24.51zm-40 0l-41.29 0c1.29,-5.56 4.44,-20.32 6.45,-24.51l41.29 0c-3.04,6.34 -3.3,17.94 -6.45,24.51zm-60.65 -43.86c-5.45,23.4 11.11,14.07 2.04,45.9 -1.55,5.44 -2.55,9.7 -4.16,15.19l-23.68 89.87c7.94,-0.66 10.12,-4.5 18.06,-5.16 1.98,-8.5 4.41,-16.16 6.45,-24.52 1.86,-7.55 5.82,-18.18 6.46,-25.8l43.87 0c-1.7,7.29 -5.11,25.48 -7.75,30.96 13.54,-0.3 13.38,-4.69 17.02,-21.69 2.42,-11.34 -3.58,-9.27 29.44,-9.27 0,7.67 -2.43,9.71 -2.59,16.77 11.51,-5.52 13.85,-1.15 14.2,-16.77 23.34,0 31.86,2.35 52.9,-7.75l-13 -69.57c-1.23,-6.13 -2.18,-19.45 -8.93,-19.45 -16.93,0 -122.73,-1.66 -130.33,1.29zm-50.31 172.89l0 19.36c-7.95,0.17 -13.17,9.31 -23.77,17.52l-55.41 49.15c-5.25,3.3 -10.88,0.42 -20.18,0.42 -2.62,0 -14.02,9.43 -15.48,11.61l107.26 14c22.96,0.72 17.47,-27.47 20.97,-39.31 4.76,-16.08 14.01,-25.61 26.6,-34.04l0 -23.22 40.79 -14.69c14.33,-5.01 26.72,-9.83 40.99,-14.5l40.97 -14.52c6.65,-2.4 12.97,-4.47 19.93,-7.16 7.16,-2.77 13.75,-5.46 21.19,-7.2l0 -32.25c-6.48,0.54 -90.2,31.22 -103.39,35.96 -17.19,6.18 -33.93,12.6 -51.29,18.38l-44.7 15.95c-2.92,1.34 -4.48,0.78 -4.48,4.54zm215.48 -85.16l0 116.13 9.02 0c23.19,0 45.92,22.36 50.32,41.29 5.53,-0.12 21.81,-3.7 27.05,-5.21 4.64,-1.34 5.42,-3.31 8.77,-6.72 13.42,-13.69 12.71,-6.09 8.95,-34.13l-4.94 -44.08c-0.78,-6.78 -1.08,-7.42 -5.25,-11.53 -3.01,-2.95 -14.41,-13.48 -15.87,-16.39 -1.62,-3.23 -6.49,-51.45 -7.09,-58.71 -24.79,0 -15.69,0.35 -37.58,7.58l-33.38 11.77zm-146.87 -182.49c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
            REFRIGERATOR: "M1012.86 1394.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm-117.39 -693.94l0 342.36c0,10.8 7.93,20.09 18.42,20.09l5.87 0c0,27.95 -3.52,23.43 39.33,23.43 10.83,0 8.37,-16.57 8.37,-23.43l92.08 0c0,27.73 -2.33,23.43 41.01,23.43 9.17,0 6.69,-18.05 6.69,-23.43l5.87 0c10.49,0 18.42,-9.29 18.42,-20.09l0 -340.69c0,-11.24 -6.33,-20.92 -16.74,-20.92l-202.58 0c-9.66,0 -16.74,9.29 -16.74,19.25zm27.62 141.18l194.77 0c9.06,0 9.06,-12.56 0,-12.56l-193.1 0c-12.1,0 -9.91,12.56 -1.67,12.56zm5.03 -102.68l0 25.96c0,9.04 12.56,9.04 12.56,0l0 -24.28c0,-12.1 -12.56,-9.9 -12.56,-1.68zm0 166.58l0 46.87c0,9.06 12.56,9.06 12.56,0l0 -46.87c0,-9.06 -12.56,-9.06 -12.56,0zm50.43 -272.8c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
        };
        this.color = {
            Idle: "#1f5baa",
            Running: "#1eb15d",
            Stop: "#FF0000",
            Yet_to_transmit: "#7d410f",
            "No Transmission": "#000000",
            Online: "#00E1BC",
            Overspeed: "#f28918",
            DoorOpen: "#FF851B",
            HighTemp: "#FF0000",
            PowerFail: "#412525",
            Geofence: "#1f5baa",
            Good: "#1eb15d",
        };
        this.markerInfo = {
            show: false,
            plateNo: "",
            assetAddress: "",
            status: "",
            timeStamp: "",
        };
        this.route = this.sktService.routeName;
        this.vehicle = this.sktService.vehicleNumber;
        this.trip = this.sktService.trip;
        this.loadMap = () => {
            setTimeout(() => {
                if (localStorage.map === "GoogleMap") {
                    this.map = this.mapService.loadMap(this.mapElement.nativeElement, { lat: 17.786351, lng: 78.09082 }, true, this.popUp);
                }
                else {
                    this.map = this.mapService.loadMap(this.mapElement.nativeElement, { lat: 17.786351, lng: 78.09082 }, true, this.popUp);
                    this.mapService.setCenter(this.map, { lat: 17.786351, lng: 78.09082 });
                }
                this.mapService.setCenter(this.map, { lat: 17.786351, lng: 78.09082 });
            });
        };
        this.getLiveTrackIcon = (color, path, plateNo) => {
            if (path == undefined || path == null) {
                path = this.vehicleModel["CAR"];
            }
            const svg = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve"  width="8.4666mm" height="8.4666mm" version="1.1" viewBox="0 0 846.66 846.66"  xmlns:xlink="http://www.w3.org/1999/xlink"> <path class="fil0" d="' +
                path +
                '" fill="' +
                color +
                '"/>  ' +
                '     <path fill="' +
                color +
                '"   d="M25.68 -0.01l1276.56 0c14.17,0.02 25.66,17.72 25.66,39.58l0 212.39c0,21.84 -11.49,39.54 -25.66,39.54l-1276.56 0.02c-14.17,-0.02 -25.66,-17.72 -25.66,-39.58l-0.01 -212.39c0.01,-21.84 11.5,-39.54 25.67,-39.54l0 -0.02z"/>  ' +
                '     <g transform="matrix(0.999986 0 0 0.999986 1.97989 -371.852)">  ' +
                '      <text style="font-weight:bold;font-size:176.39px;font-family:Arial" x="46.16" y="577.45"  fill="white">TEXT12345678</text>  ' +
                "     </g>  </svg>";
            const svgNew = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="12mm" height="12mm" version="1.1" viewBox="0 0 736.58 888.98" xmlns:xlink="http://www.w3.org/1999/xlink" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" >' +
                '<path fill="red"  d="M39.74 21.16l657.1 0c9.65,0.01 17.47,12.46 17.47,27.83l0 126.12c0,15.36 -7.82,27.81 -17.47,27.81l-657.1 0.01c-9.65,-0.01 -17.47,-12.46 -17.47,-27.83l-0.01 -126.12c0.01,-15.36 7.83,-27.81 17.48,-27.81l0 -0.01z"/>' +
                '<path fill="red" d="' +
                "M367.8 867.82c6.15,-4.18 17.64,-19.55 24.19,-26.79 3.49,-3.85 5.18,-5.77 8.39,-9.56 10.66,-12.57 20.92,-25.45 31.62,-38.43 21.35,-25.92 39.99,-51.48 60.71,-79.27 35.58,-47.69 82.08,-122.39 102.01,-177 15.4,-42.18 17.68,-73.63 7.29,-119.92 -22.43,-99.94 -115.44,-185.04 -234.1,-184.91 -44.74,0.05 -77.49,10.98 -111.5,27.52 -14.7,7.15 -31.34,19.22 -41.97,28.05 -37.13,30.84 -68.1,77.46 -79.93,129.09 -10.22,44.58 -8.08,78.82 7.08,119.66 25.95,69.9 85.42,158.5 131.33,216.69 5.19,6.58 10.1,12.92 15.28,19.72 24.3,31.88 53.26,64.85 79.6,95.15zm-151.52 -501.33l0 140.51c0,2.98 1.49,4.47 4.47,4.47l159.04 0c2.63,0 3.84,-3.51 3.84,-6.39l0 -136.03c0,-8.12 -5.52,-15.33 -13.42,-15.33l-139.88 0c-4.49,0 -7.3,1.38 -9.75,3.65 -2.08,1.92 -4.3,5.34 -4.3,9.12zm-11.5 178.11c0.52,2.89 1.87,4.56 5.11,4.56l50.46 0c2.79,0 1.31,-4.28 5.74,-12.79 1.12,-2.16 2.44,-3.92 3.83,-5.75 1.51,-1.99 3.16,-3.12 4.48,-5.09l-63.92 -0.06c-2.57,0.05 -2.05,-0.28 -3.67,0.8 -0.76,0.51 -2.03,1.91 -2.03,3.09l0 15.24zm246.54 24.36c-18.38,0 -19.27,-28.75 0.64,-28.75 17.99,0 18.39,28.75 -0.64,28.75zm-0.64 14.69c22.67,0 35.47,-21.9 27.67,-40.45 -7.32,-17.41 -31.2,-25.17 -47.94,-8.58 -4.84,4.79 -8.12,11.7 -8.02,20.19 0.19,15.67 12.79,28.84 28.29,28.84zm-150.73 -14.69c-19.31,0 -19.58,-28.75 0,-28.75 18.23,0 18.2,28.75 0,28.75zm-29.38 -17.89c0,6.49 -0.34,10.68 2.98,16.83 9.13,16.96 30.97,20.14 43.17,10.16 16.27,-13.29 15.96,-33.75 0.34,-46.65 -10.47,-8.65 -27.62,-7.81 -37.72,2.24 -4.15,4.14 -8.77,11.5 -8.77,17.42zm209.5 -101.56l-56.84 0c-2.34,0 -5.11,-1.76 -5.11,-3.83l0 -32.56c0,-3.81 2.58,-5.11 6.38,-5.11l31.29 0c6.65,0 10.56,9.11 16.24,16.97 2.48,3.43 13.15,17.82 13.15,20.07 0,2.5 -2.38,4.46 -5.11,4.46zm51.73 79.85l0 14.77c-0.64,6.6 -4.1,5.03 -19.8,5.03 -7.66,0 -15.33,0 -22.99,0 -0.76,-9.09 -5.83,-16.32 -11.65,-22.2 -13.85,-14.01 -38.08,-13.83 -52.07,-0.01 -6.68,6.6 -9.19,11.67 -11.64,22.21l-76.65 0c0,-11.1 -8.46,-18.14 -12.14,-23.63l71.54 0 0 -132.85c0,-5.77 4.45,-10.22 10.22,-10.22l42.78 0c11.34,0 20.03,4.86 26.3,10.11 1.28,1.07 2.89,3.32 4.1,4.85 1.51,1.93 2.34,3.15 3.72,5.22 6.62,10 25.54,36.9 28.7,43.46 1.86,3.86 3.61,8.86 3.61,14.27l0 65.16c5.76,0 15.97,-1.53 15.97,3.83zm-190.62 -252.35c-102.36,13.78 -189.37,107.21 -173.75,227.67 13.21,101.98 107.94,189.12 227.19,173.89 102.16,-13.05 190.55,-108.24 174.45,-228.04 -13.73,-102.15 -108.02,-189.65 -227.89,-173.52z" +
                '"/> <text style="font-weight:bold;font-size:105.83px;font-family:Arial" fill="#FEFEFE" x="66.89" y="150.15"  >' +
                "TNYHTRERTFHG" +
                "</text></svg>";
            const svgnew2 = ' <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="12mm" height="12mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 1065.5 1091.48"  ' +
                '    xmlns:xlink="http://www.w3.org/1999/xlink">  ' +
                '     <path style="width:500px; heigth:00px" fill="' +
                color +
                '"  d="M532.12 1091.49c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm-195.33 -646.31l0 181.15c0,3.84 1.92,5.76 5.76,5.76l205.03 0c3.39,0 4.95,-4.53 4.95,-8.24l0 -175.37c0,-10.47 -7.12,-19.76 -17.3,-19.76l-180.33 0c-5.79,0 -9.41,1.78 -12.57,4.71 -2.68,2.47 -5.54,6.88 -5.54,11.75zm-14.83 229.62c0.67,3.72 2.41,5.88 6.59,5.88l65.05 0c3.6,0 1.69,-5.52 7.4,-16.49 1.44,-2.79 3.15,-5.06 4.94,-7.41 1.94,-2.57 4.07,-4.03 5.77,-6.57l-82.4 -0.07c-3.31,0.06 -2.64,-0.36 -4.73,1.03 -0.98,0.66 -2.62,2.46 -2.62,3.98l0 19.65zm317.84 31.4c-23.7,0 -24.85,-37.06 0.82,-37.06 23.19,0 23.71,37.06 -0.82,37.06zm-0.83 18.94c29.23,0 45.73,-28.23 35.67,-52.15 -9.43,-22.44 -40.22,-32.45 -61.8,-11.06 -6.24,6.18 -10.47,15.09 -10.34,26.03 0.24,20.2 16.49,37.18 36.47,37.18zm-194.32 -18.94c-24.89,0 -25.24,-37.06 0,-37.06 23.5,0 23.47,37.06 0,37.06zm-37.87 -23.06c0,8.37 -0.44,13.77 3.84,21.7 11.77,21.86 39.92,25.96 55.65,13.09 20.98,-17.13 20.58,-43.51 0.44,-60.14 -13.5,-11.15 -35.61,-10.06 -48.63,2.89 -5.35,5.34 -11.3,14.83 -11.3,22.46zm270.08 -130.93l-73.28 0c-3.01,0 -6.59,-2.27 -6.59,-4.94l0 -41.97c0,-4.91 3.33,-6.59 8.23,-6.59l40.34 0c8.57,0 13.61,11.74 20.93,21.88 3.2,4.42 16.96,22.97 16.96,25.87 0,3.22 -3.07,5.75 -6.59,5.75zm66.69 102.94l0 19.04c-0.83,8.51 -5.29,6.49 -25.53,6.49 -9.87,0 -19.76,0 -29.64,0 -0.97,-11.72 -7.51,-21.04 -15.01,-28.62 -17.86,-18.06 -49.1,-17.83 -67.13,-0.02 -8.61,8.51 -11.85,15.05 -15.01,28.64l-98.81 0c0,-14.31 -10.91,-23.39 -15.65,-30.47l92.22 0 0 -171.26c0,-7.44 5.74,-13.18 13.18,-13.18l55.15 0c14.62,0 25.82,6.27 33.91,13.03 1.65,1.38 3.72,4.28 5.28,6.26 1.95,2.48 3.02,4.06 4.8,6.73 8.53,12.89 32.92,47.57 37,56.02 2.39,4.98 4.65,11.43 4.65,18.4l0 84c7.43,0 20.59,-1.97 20.59,4.94zm-245.74 -325.32c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z"/>  ' +
                '     <path fill="' +
                color +
                '"  d="M22.54 -0.01l1020.43 0c12.44,0.01 22.52,16.06 22.52,35.88l0 162.59c0,19.8 -10.08,35.85 -22.52,35.85l-1020.43 0.01c-12.44,-0.01 -22.52,-16.06 -22.52,-35.87l-0.01 -162.6c0.01,-19.8 10.09,-35.85 22.53,-35.85l0 -0.01z"/>  ' +
                '     <g transform="matrix(0.999986 0 0 0.999986 -476.263 -380.348)">  ' +
                '      <text style="font-weight:bold;font-size:160px;font-family:Arial; text-align:center;align-items: center;" x="532.75" y="545.74" fill="white">' +
                plateNo +
                "</text>  " +
                "    </g>  " +
                "   </svg>  ";
            const svg1 = '   <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="24.714mm" height="15.481mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"  ' +
                '   viewBox="0 0 2471.4 1548.1"  ' +
                '    xmlns:xlink="http://www.w3.org/1999/xlink">  ' +
                '     <path fill="' +
                color +
                '"  d="' +
                path +
                '"/>  ' +
                '     <path fill="' +
                color +
                '"  d="M47.78 0.01l2375.87 0c26.38,0.02 47.76,27.23 47.76,60.82l0 493.09c0,33.57 -21.38,60.78 -47.76,60.78l-2375.87 0.02c-26.39,-0.02 -47.76,-27.23 -47.76,-60.82l-0.03 -493.09c0.03,-33.57 21.4,-60.78 47.79,-60.78l0 -0.02z"/>  ' +
                '     <g transform="matrix(0.999986 0 0 0.999986 9.42214 -382.593)">  ' +
                '      <text style="font-weight:bold;font-size:300px;font-family:\'Arial\'" x="133.12" y="774.05" fill="white" >' +
                plateNo +
                "</text>  " +
                "     </g>  " +
                "   </svg>  ";
            const src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg1);
            return src;
        };
        if (localStorage.map == "GoogleMap") {
            this.mapService = new src_app_services_google_map_service__WEBPACK_IMPORTED_MODULE_8__["GoogleMapService"]();
        }
        else {
            this.mapService = new src_app_services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_9__["OpenlayerMapService"]();
        }
    }
    getBack() {
        this.modalController.dismiss();
    }
    btnOnClick() {
        let gridContent = this.myGrid.exportdata("html");
        let newWindow = window.open("", "", "width=800, height=500"), document = newWindow.document.open(), pageContent = "<!DOCTYPE html>\n" +
            "<html>\n" +
            "<head>\n" +
            '<meta charset="utf-8" />\n' +
            "<title>Parent Details</title>\n" +
            "</head>\n" +
            "<body>\n" +
            gridContent +
            "\n</body>\n</html>";
        document.write(pageContent);
        document.close();
        newWindow.print();
    }
    add() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _route_addtional_route_addtional_component__WEBPACK_IMPORTED_MODULE_12__["RouteAddtionalComponent"],
                cssClass: "my-custome-css",
                componentProps: {
                    value: this.value.tripId,
                },
            });
            modal.onDidDismiss().then(() => {
                this.getData();
                this._routeDismiss = true;
            });
            return yield modal.present();
        });
    }
    editMode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.selectedRow) {
                this.loadMark();
                this.selectedRow["submit"] = "available";
                const modal = yield this.modalController.create({
                    component: _route_addtional_route_addtional_component__WEBPACK_IMPORTED_MODULE_12__["RouteAddtionalComponent"],
                    cssClass: "my-custome-css",
                    componentProps: {
                        value: this.selectedRow,
                    },
                });
                modal.onDidDismiss().then(() => {
                    this.getData();
                    this.myGrid.clearselection();
                    this.selectedRow = "";
                });
                return yield modal.present();
            }
            else {
                this.commonService.presentToast("Please select a row to edit");
                return "";
            }
        });
    }
    deleteMode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.selectedRow) {
                const alert = yield this.alertController.create({
                    header: "Delete ",
                    backdropDismiss: false,
                    message: "Are you sure you want to delete?",
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
                            text: "Ok",
                            handler: (data) => {
                                var details = {
                                    companyId: this.companyDetail.companyID,
                                    branchId: this.companyDetail.branchID,
                                };
                                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["serverUrl"].web +
                                    "/routetrip/deleteBusstop?stopPointId=" +
                                    this.selectedRow.stopPointId;
                                this.ajaxService
                                    .ajaxDeleteWithBody(url, details)
                                    .subscribe((res) => {
                                    if (res.error.text == "success") {
                                        this.commonService.presentToast("Bus Stop Details Deleted successfully");
                                        this.modalController.dismiss();
                                        this.myGrid.clearselection();
                                        this.getData();
                                    }
                                    else {
                                        this.commonService.presentToast("Please Contact Support Team");
                                    }
                                });
                            },
                        },
                    ],
                });
                yield alert.present();
            }
            else {
                this.commonService.presentToast("Please select a row to delete");
                return "";
            }
        });
    }
    addbusstop() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_bus_stop_add_bus_stop_component__WEBPACK_IMPORTED_MODULE_15__["AddBusStopComponent"],
                cssClass: "viewserialfrom",
                componentProps: {
                    value: this.value,
                },
            });
            modal.onDidDismiss().then(() => {
                this.getData();
                this.myGrid.clearselection();
                this.selectedRow = "";
            });
            return yield modal.present();
        });
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row;
        this.loadMark();
    }
    getData() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["serverUrl"].web +
            `/routetrip/getBusstop?schoolId=${this.companyDetail.companyID}&branchId=${this.companyDetail.branchID}&tripId=${this.value.tripId}`;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.obj = res;
            if (this._routeDismiss)
                this.loadMark();
            else
                this.loadMap();
            this.source = {
                localdata: this.obj,
                datatype: "array",
            };
            this.renderer = (row, column, value) => {
                if (value == "" || null || undefined) {
                    return "----";
                }
                else {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto"  >' +
                        value +
                        "</span>");
                }
            };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            this.columns = [
                {
                    text: "Arrival Time",
                    datafield: "arrivalTime",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: "50%",
                },
                {
                    text: "Bus Stop",
                    datafield: "stopName",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: "50%",
                },
            ];
        });
    }
    ngAfterViewInit() {
        if (this.myPlatform == "desktop") {
            this.myPlatform = "desktop";
            this.myGrid.updatebounddata();
        }
        this.getData();
    }
    ionViewWillEnter() {
        this.commonService.presentLoader();
        this.search = true;
        if (localStorage.map != "GoogleMap") {
            this.fabButton = true;
        }
        this.popUp = (res) => {
            this.searchInput = res.plateNo;
            this.clickMarker = res.data;
            this.markerInfo.show = true;
            this.markerInfo["status"] = res.status;
            this.markerInfo["plateNo"] = res.plateNo;
            this.markerInfo["timeStamp"] = res.timeStamp;
        };
        setTimeout(() => {
            if (this.map.setTarget)
                this.map.setTarget(this.mapElement.nativeElement);
            this.loadMark();
        }, 2000);
        this.commonService.dismissLoader();
    }
    createLine(map, lineStringArray) {
        this.mapService.createLine(map, lineStringArray);
    }
    loadMark() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["serverUrl"].web +
            `/routetrip/getBusstop?schoolId=${this.companyDetail.companyID}&branchId=${this.companyDetail.branchID}&tripId=${this.value.tripId}`;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.obj = res;
            this.status == "ad";
            this.mapService.clearClusteringMarkers(this.map, [1]);
            let googleMapLatLng = [];
            let googleMapMarkerObj = [];
            if (this.status != "Vin") {
                for (let i = 0; i < this.obj; i++) {
                    this.obj.push({
                        stopPointId: this.obj[i].stopPointId,
                        arrivalTime: this.obj[i].arrivalTime,
                        stopName: this.obj[i].stopName,
                        latlng: this.obj[i].latlng,
                    });
                }
                this.obj.forEach((element, index) => {
                    if (element.status !== "Yet_to_transmit") {
                        let latLng = {
                            lat: JSON.parse(element.latlng.split(",")[0]),
                            lng: JSON.parse(element.latlng.split(",")[1].trim(" ")),
                        };
                        const obj = {};
                        obj["img"] = this.getLiveTrackIcon(this.color[this.selectedRow["latlng"] == element.latlng
                            ? "Stop"
                            : "Running"], this.vehicleModel["BUS"], element.stopName);
                        obj["plateNo"] = element.stopName;
                        obj["status"] = "stop";
                        obj["timeStamp"] = "";
                        obj["lat"] = JSON.parse(element.latlng.split(",")[0]);
                        obj["lng"] = JSON.parse(element.latlng.split(",")[1].trim(" "));
                        obj["data"] = "element";
                        if (index != 0) {
                            let prevLatLng = {
                                lat: JSON.parse(this.obj[index - 1].latlng.split(",")[0]),
                                lng: JSON.parse(this.obj[index - 1].latlng.split(",")[1].trim(" ")),
                            };
                            var lineArray = [prevLatLng, latLng];
                        }
                        this.liveTrackModel = this.getLiveTrackIcon(this.color["Running"], this.vehicleModel["GENERATOR"], element.stopName);
                        // this.mapService.addMarker(
                        //   this.map,
                        //   latLng,
                        //   "livetrack",
                        //   this.liveTrackModel
                        // );
                        if (localStorage.map == "GoogleMap") {
                            googleMapLatLng.push(latLng);
                            googleMapMarkerObj.push(obj);
                        }
                        else {
                            this.mapService.addClusteringMarkers(this.map, latLng, obj);
                        }
                    }
                });
                if (localStorage.map == "GoogleMap") {
                    this.mapService.addClusteringMarkers(this.map, googleMapLatLng, googleMapMarkerObj);
                }
            }
            else if (this.status == "Vin") {
                let element = JSON.parse(localStorage.gridData);
                for (let i = 0; i < element.length; i++) {
                    if (element[i].status !== "Yet_to_transmit") {
                        let latLng = {
                            lat: element[i].latitude,
                            lng: element[i].longitude,
                        };
                        const obj = {};
                        obj["img"] = this.getLiveTrackIcon(this.color[element[i].status], this.vehicleModel[element[i].icon], element.plateNo);
                        obj["plateNo"] = element[i].plateNo;
                        obj["status"] = element[i].status;
                        obj["timeStamp"] = element[i].timeStamp;
                        obj["lat"] = element[i].latitude;
                        obj["lng"] = element[i].longitude;
                        obj["data"] = element;
                        if (localStorage.map == "GoogleMap") {
                            googleMapLatLng.push(latLng);
                            googleMapMarkerObj.push(obj);
                        }
                        else {
                            this.mapService.addClusteringMarkers(this.map, latLng, obj);
                        }
                    }
                }
                if (localStorage.map == "GoogleMap") {
                    this.mapService.addClusteringMarkers(this.map, googleMapLatLng, googleMapMarkerObj);
                }
            }
            this.mapService.fitBoundsForCluster(this.map);
            this.commonService.dismissLoader();
        });
    }
    loadMarker() {
        var myLatlng;
        this.obj.forEach((element) => {
            this.liveTrackModel = this.getLiveTrackIcon(this.color["Running"], this.vehicleModel["BUS"], element.stopName);
            const obj = {};
            obj["img"] = this.getLiveTrackIcon(this.color["Running"], this.vehicleModel["BUS"], element.stopName);
            obj["plateNo"] = element.stopName;
            obj["status"] = "stop";
            obj["timeStamp"] = "";
            obj["lat"] = JSON.parse(element.latlng.split(",")[0]);
            obj["lng"] = JSON.parse(element.latlng.split(",")[1].trim(" "));
            obj["data"] = "element";
            myLatlng = {
                lat: JSON.parse(element.latlng.split(",")[0]),
                lng: JSON.parse(element.latlng.split(",")[1].trim(" ")),
            };
            this.mapService.addClusteringMarkers(this.map, myLatlng, obj);
        });
        this.mapService.setCenter(this.map, myLatlng);
        this.commonService.dismissLoader();
    }
    loadMarkers() {
        let googleMapLatLng = [];
        let googleMapMarkerObj = [];
        if (this.status != "Vin") {
            Object.values(this.obj).forEach((element) => {
                if (element.status == this.status || this.status == "All") {
                    if (element.status !== "Yet_to_transmit") {
                        let latLng = {
                            lat: this.obj[0].latlng.split(",")[0],
                            lng: this.obj[0].latlng.split(",")[1],
                        };
                        const obj = {};
                        obj["img"] =
                            "data:image/svg+xml;charset=utf-8,%20%20%20%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xml%3Aspace%3D%22preserve%22%20width%3D%2224.714mm%22%20height%3D%2215.481mm%22%20version%3D%221.1%22%20style%3D%22shape-rendering%3AgeometricPrecision%3B%20text-rendering%3AgeometricPrecision%3B%20image-rendering%3AoptimizeQuality%3B%20fill-rule%3Aevenodd%3B%20clip-rule%3Aevenodd%22%20%20%20%20%20viewBox%3D%220%200%202471.4%201548.1%22%20%20%20%20%20%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23000000%22%20%20d%3D%22M1012.86%201394.09c7.93%2C-5.39%2022.74%2C-25.21%2031.19%2C-34.54%204.5%2C-4.96%206.68%2C-7.44%2010.81%2C-12.32%2013.75%2C-16.21%2026.97%2C-32.81%2040.77%2C-49.55%2027.52%2C-33.41%2051.55%2C-66.36%2078.26%2C-102.19%2045.87%2C-61.48%20105.82%2C-157.78%20131.51%2C-228.19%2019.86%2C-54.37%2022.8%2C-94.92%209.4%2C-154.59%20-28.91%2C-128.85%20-148.82%2C-238.55%20-301.79%2C-238.39%20-57.68%2C0.07%20-99.9%2C14.16%20-143.75%2C35.48%20-18.95%2C9.22%20-40.4%2C24.78%20-54.11%2C36.16%20-47.86%2C39.76%20-87.79%2C99.86%20-103.04%2C166.42%20-13.17%2C57.47%20-10.42%2C101.62%209.13%2C154.27%2033.45%2C90.11%20110.12%2C204.33%20169.31%2C279.35%206.69%2C8.48%2013.02%2C16.66%2019.69%2C25.42%2031.33%2C41.1%2068.67%2C83.6%20102.62%2C122.67zm-41.63%20-541.9c0%2C-16.27%2029.79%2C-12.43%2034.38%2C-8.45%205.14%2C4.45%205.14%2C12.44%200%2C16.89%20-5.18%2C4.47%20-25.16%2C4.47%20-30.34%2C0%20-1.69%2C-1.47%20-4.04%2C-5.83%20-4.04%2C-8.44zm165.21%2076.84c0%2C-18.58%2023.93%2C-31.38%2039.18%2C-16.12%2021.22%2C21.21%20-11.03%2C53.45%20-32.25%2C32.24%20-3.11%2C-3.11%20-6.93%2C-10.35%20-6.93%2C-16.12zm-26.89%20-2.88l0%205.76c0%2C23.93%2023.13%2C47.06%2047.06%2C47.06%2010.43%2C0%2015.35%2C-0.3%2024.98%2C-4.79%2014.26%2C-6.66%2027.85%2C-24.87%2027.85%2C-41.31%200%2C-16.72%20-2.45%2C-26.96%20-14.64%2C-39.15%20-3.95%2C-3.94%20-8.05%2C-7.43%20-13.21%2C-9.84%20-13.42%2C-6.26%20-31.09%2C-6.8%20-44.22%2C-0.03%20-14.12%2C7.29%20-27.82%2C23.83%20-27.82%2C42.3zm-249.74%202.88c0%2C-18.58%2023.93%2C-31.38%2039.18%2C-16.12%2021.21%2C21.21%20-11.03%2C53.45%20-32.24%2C32.24%20-3.12%2C-3.11%20-6.94%2C-10.35%20-6.94%2C-16.12zm-26.9%20-2.88l0%205.76c0%2C23.93%2023.14%2C47.06%2047.07%2C47.06%2016.34%2C0%2026.54%2C-2.99%2038.18%2C-14.64%2033.9%2C-33.9%204.36%2C-85.25%20-31.45%2C-85.25%20-16.84%2C0%20-26.87%2C2.37%20-39.15%2C14.64%20-7.22%2C7.23%20-14.65%2C18.38%20-14.65%2C32.43zm134.48%20-118.15c0%2C-46.73%20-7.38%2C-39.38%2065.32%2C-39.38%207.87%2C0%2018.69%2C10.6%2024.74%2C15.59l34.43%2027.05c5.18%2C4.93%200.72%2C10.19%20-2.5%2C10.19l-108.54%200c-8.41%2C0%20-13.45%2C-5.05%20-13.45%2C-13.45zm-40.35%2013.45l-47.06%200c-7.07%2C0%20-9.67%2C-5.85%20-2.64%2C-13.22l26.51%20-31.11c7.7%2C-9.66%2011.2%2C-8.5%2023.19%2C-8.5%2017.49%2C0%2013.46%2C18.83%2013.46%2C39.38%200%2C8.4%20-5.04%2C13.45%20-13.46%2C13.45zm-155.6%2030.74l0%2048.98c0%2C19.73%2019.66%2C39.38%2039.38%2C39.38l11.53%200c0%2C-10.09%20-3.48%2C-19.88%204.79%2C-36.51%203.27%2C-6.59%207%2C-13.29%2012.22%2C-18.51%203.96%2C-3.97%2013.02%2C-10.2%2018.36%2C-12.38%2020.82%2C-8.51%2041.73%2C-7.06%2060.14%2C5.52%202.29%2C1.57%202.36%2C1.9%204.26%2C3.41l11.11%2011.96c6.06%2C8.85%2011.11%2C23.22%2011.11%2C34.99%200%2C4.81%20-0.96%2C5.91%20-0.96%2C11.52l155.6%200c0%2C-10.09%20-3.47%2C-19.88%204.79%2C-36.51%2010.83%2C-21.8%2029.55%2C-36.49%2055.72%2C-36.49%2015.4%2C0%2028.32%2C5.85%2039.26%2C14.53%2013.51%2C10.71%2022.22%2C29.3%2022.22%2C46.95%200%2C4.81%20-0.96%2C5.91%20-0.96%2C11.52%2020.72%2C0%2035.54%2C-15.16%2035.54%2C-32.65l0%20-38.43c0%2C-11.84%20-8.19%2C-21.91%20-15.52%2C-26.74%20-7.63%2C-5%20-22.61%2C-7.01%20-33.47%2C-8.79%20-6.4%2C-1.06%20-67.08%2C-11.17%20-71.52%2C-13.97l-69.27%20-57.52c-8.48%2C-6.67%20-16.82%2C-14%20-29.22%2C-14l-119.11%200c-8.24%2C0%20-17.56%2C4.54%20-22.33%2C8.4%20-6.36%2C5.15%20-13.51%2C13.95%20-18.83%2C20.55l-25.34%2029.41c-18.16%2C20.39%20-3.36%2C13.6%20-47.84%2C14.6%20-16.47%2C0.36%20-31.66%2C16.88%20-31.66%2C30.78zm207.11%20-219.76c-131.97%2C17.76%20-244.14%2C138.21%20-224%2C293.5%2017.03%2C131.47%20139.15%2C243.81%20292.89%2C224.18%20131.7%2C-16.82%20245.65%2C-139.54%20224.9%2C-293.98%20-17.7%2C-131.69%20-139.26%2C-244.5%20-293.79%2C-223.7z%22%2F%3E%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23000000%22%20%20d%3D%22M47.78%200.01l2375.87%200c26.38%2C0.02%2047.76%2C27.23%2047.76%2C60.82l0%20493.09c0%2C33.57%20-21.38%2C60.78%20-47.76%2C60.78l-2375.87%200.02c-26.39%2C-0.02%20-47.76%2C-27.23%20-47.76%2C-60.82l-0.03%20-493.09c0.03%2C-33.57%2021.4%2C-60.78%2047.79%2C-60.78l0%20-0.02z%22%2F%3E%20%20%20%20%20%20%20%3Cg%20transform%3D%22matrix(0.999986%200%200%200.999986%209.42214%20-382.593)%22%3E%20%20%20%20%20%20%20%20%3Ctext%20style%3D%22font-weight%3Abold%3Bfont-size%3A300px%3Bfont-family%3A'Arial'%22%20x%3D%22133.12%22%20y%3D%22774.05%22%20fill%3D%22white%22%20%3EARMORONCANTRACK%3C%2Ftext%3E%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%3C%2Fsvg%3E%20%20";
                        obj["plateNo"] = "element.latitude";
                        obj["status"] = "element.latitude";
                        obj["timeStamp"] = "element.latitude";
                        obj["lat"] = "element.latitude";
                        obj["lng"] = "element.longitude";
                        obj["data"] = "element.latitude";
                        if (localStorage.map == "GoogleMap") {
                            googleMapLatLng.push(latLng);
                            googleMapMarkerObj.push(obj);
                        }
                        else {
                            this.mapService.addClusteringMarkers(this.map, latLng, obj);
                        }
                    }
                }
            });
            if (localStorage.map == "GoogleMap") {
                this.mapService.addClusteringMarkers(this.map, googleMapLatLng, googleMapMarkerObj);
            }
        }
        else if (this.status == "Vin") {
            let element = JSON.parse(localStorage.gridData);
            for (let i = 0; i < element.length; i++) {
                if (element[i].status !== "Yet_to_transmit") {
                    let latLng = {
                        lat: element[i].latitude,
                        lng: element[i].longitude,
                    };
                    const obj = {};
                    obj["img"] = this.getLiveTrackIcon(this.color[element[i].status], this.vehicleModel[element[i].icon], element.plateNo);
                    obj["plateNo"] = element[i].plateNo;
                    obj["status"] = element[i].status;
                    obj["timeStamp"] = element[i].timeStamp;
                    obj["lat"] = element[i].latitude;
                    obj["lng"] = element[i].longitude;
                    obj["data"] = element;
                    if (localStorage.map == "GoogleMap") {
                        googleMapLatLng.push(latLng);
                        googleMapMarkerObj.push(obj);
                    }
                    else {
                        this.mapService.addClusteringMarkers(this.map, latLng, obj);
                    }
                }
            }
            if (localStorage.map == "GoogleMap") {
                this.mapService.addClusteringMarkers(this.map, googleMapLatLng, googleMapMarkerObj);
            }
        }
        this.mapService.fitBoundsForCluster(this.map);
        this.commonService.dismissLoader();
    }
    closeInfo() {
        this.markerInfo.show = false;
    }
    ngOnInit() {
        this.companyDetail = {
            branchID: localStorage.getItem("corpId"),
            companyID: localStorage.getItem("corpId"),
            userId: localStorage.getItem("userName"),
        };
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
            this.isIosPlatform = true;
        }
        else {
            this.isIosPlatform = false;
        }
    }
    ngOnChanges() {
        this.getData();
    }
};
BusStopComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_skt_service__WEBPACK_IMPORTED_MODULE_10__["SktService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_6__["AuthMapService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
], BusStopComponent.prototype, "myGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BusStopComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapElement", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BusStopComponent.prototype, "mapElement", void 0);
BusStopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-bus-stop",
        template: __webpack_require__(/*! raw-loader!./bus-stop.component.html */ "./node_modules/raw-loader/index.js!./src/app/skt/route/bus-stop/bus-stop.component.html"),
        styles: [__webpack_require__(/*! ./bus-stop.component.scss */ "./src/app/skt/route/bus-stop/bus-stop.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_skt_service__WEBPACK_IMPORTED_MODULE_10__["SktService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_6__["AuthMapService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"]])
], BusStopComponent);



/***/ }),

/***/ "./src/app/skt/route/route-addtional/route-addtional.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/skt/route/route-addtional/route-addtional.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".route-items {\n  margin: 5px 6px 0px;\n  padding: 0px;\n  border: 1px solid #cfe8ec;\n  border-radius: 18px;\n  height: 35px;\n  background-color: #fcfcfc;\n}\n\n.route-container {\n  width: 95%;\n  height: 80%;\n  margin: -20px auto 32px;\n  padding: 0px auto;\n  background-color: #f3f3f3;\n}\n\n.route-input {\n  font-size: 13px;\n  --placeholder-color: rgb(117, 118, 119);\n  --padding-bottom: 25px;\n}\n\n.route-icon {\n  padding: 0px 10px 0px 0px;\n  width: 34px;\n  margin: 5px 15px 23px 8px;\n  border-right: 1px solid lightgrey;\n}\n\n.route-btn {\n  height: 30px;\n  font-size: small;\n  width: 100px;\n  margin: auto;\n  padding: 2px;\n  text-align: center;\n}\n\n.popup-head {\n  color: #3880ff;\n  margin-left: 30px;\n}\n\n.option-head {\n  background-color: darkgray;\n}\n\n.box {\n  outline: none;\n  margin-top: -15px;\n  width: 100%;\n  border: 1px solid white;\n  color: #555757;\n  font-size: 15px;\n}\n\n#map-icon {\n  font-size: 21px;\n  position: absolute;\n  right: 21px;\n  bottom: 12px;\n  color: #3880ff;\n}\n\n.location {\n  padding: 0px 4px 0px 0px;\n  height: 24px;\n  width: 35px;\n  margin: 0px 1px 16px 8px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t0L3JvdXRlL3JvdXRlLWFkZHRpb25hbC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXHNrdFxccm91dGVcXHJvdXRlLWFkZHRpb25hbFxccm91dGUtYWRkdGlvbmFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9za3Qvcm91dGUvcm91dGUtYWRkdGlvbmFsL3JvdXRlLWFkZHRpb25hbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsMEJBQUE7QUNFRjs7QURBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNJRjs7QURGQTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL3NrdC9yb3V0ZS9yb3V0ZS1hZGR0aW9uYWwvcm91dGUtYWRkdGlvbmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdXRlLWl0ZW1zIHtcclxuICBtYXJnaW46IDVweCA2cHggMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2ZlOGVjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XHJcbn1cclxuXHJcbi5yb3V0ZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgbWFyZ2luOiAtMjBweCBhdXRvIDMycHg7XHJcbiAgcGFkZGluZzogMHB4IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxufVxyXG5cclxuLnJvdXRlLWlucHV0IHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiKDExNywgMTE4LCAxMTkpO1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5yb3V0ZS1pY29uIHtcclxuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMHB4O1xyXG4gIHdpZHRoOiAzNHB4O1xyXG4gIG1hcmdpbjogNXB4IDE1cHggMjNweCA4cHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgbGlnaHRncmV5O1xyXG59XHJcblxyXG4ucm91dGUtYnRuIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wb3B1cC1oZWFkIHtcclxuICBjb2xvcjogIzM4ODBmZjtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4ub3B0aW9uLWhlYWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xyXG59XHJcbi5ib3gge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgY29sb3I6ICM1NTU3NTc7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbiNtYXAtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMjFweDtcclxuICBib3R0b206IDEycHg7XHJcbiAgY29sb3I6ICMzODgwZmY7XHJcbn1cclxuLmxvY2F0aW9uIHtcclxuICBwYWRkaW5nOiAwcHggNHB4IDBweCAwcHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIG1hcmdpbjogMHB4IDFweCAxNnB4IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiLnJvdXRlLWl0ZW1zIHtcbiAgbWFyZ2luOiA1cHggNnB4IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2ZlOGVjO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG59XG5cbi5yb3V0ZS1jb250YWluZXIge1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDgwJTtcbiAgbWFyZ2luOiAtMjBweCBhdXRvIDMycHg7XG4gIHBhZGRpbmc6IDBweCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xufVxuXG4ucm91dGUtaW5wdXQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYigxMTcsIDExOCwgMTE5KTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cblxuLnJvdXRlLWljb24ge1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMHB4O1xuICB3aWR0aDogMzRweDtcbiAgbWFyZ2luOiA1cHggMTVweCAyM3B4IDhweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgbGlnaHRncmV5O1xufVxuXG4ucm91dGUtYnRuIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IHNtYWxsO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wb3B1cC1oZWFkIHtcbiAgY29sb3I6ICMzODgwZmY7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4ub3B0aW9uLWhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcbn1cblxuLmJveCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGNvbG9yOiAjNTU1NzU3O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbiNtYXAtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjFweDtcbiAgYm90dG9tOiAxMnB4O1xuICBjb2xvcjogIzM4ODBmZjtcbn1cblxuLmxvY2F0aW9uIHtcbiAgcGFkZGluZzogMHB4IDRweCAwcHggMHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBtYXJnaW46IDBweCAxcHggMTZweCA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/skt/route/route-addtional/route-addtional.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/skt/route/route-addtional/route-addtional.component.ts ***!
  \************************************************************************/
/*! exports provided: RouteAddtionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteAddtionalComponent", function() { return RouteAddtionalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _latlong_latlong_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../latlong/latlong.component */ "./src/app/skt/latlong/latlong.component.ts");
/* harmony import */ var src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth-map.service */ "./src/app/services/auth-map.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_google_map_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/google-map.service */ "./src/app/services/google-map.service.ts");
/* harmony import */ var src_app_services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/openlayer-map.service */ "./src/app/services/openlayer-map.service.ts");












let RouteAddtionalComponent = class RouteAddtionalComponent {
    constructor(modalController, formBuilder, ajaxService, commonService, geolocation, mapService) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.geolocation = geolocation;
        this.mapService = mapService;
        this.layerModal = false;
        this.icon = "assets/vtsicon/";
        this.iconHeader = "search";
        this.search = false;
        this.fabButton = false;
        this.vehicleModel = {
            BIKE: "M1012.86 1394.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm195.16 -440.19c0,5.53 -2.73,15.07 -6.02,19.5 -21.01,28.31 -59.59,11.69 -61.75,-14.22 3.69,1.95 22.84,10.26 26.4,10.56l11.44 -28.17 -28.17 -11.44c9.51,-14.19 46.22,-15.78 56.06,12.61 0.83,2.37 2.04,8.44 2.04,11.16zm30.81 -2.63l0 7c-0.66,12 -4.67,23.9 -12.44,34.24 -1.53,2.04 -1.98,2.45 -3.6,4.32l-11.99 10.9c-26.93,19.95 -65.2,12.72 -86.61,-11.37 -9.98,-11.22 -20.43,-38.55 -14.76,-50.39 -5.52,-2.65 -11.34,-5.58 -17.6,-7.03 -2.75,4.11 -11.51,11.96 -15.62,16.06 -7.32,7.33 -10.87,13.86 -19.58,13.86 -2.85,0 -30.18,-19.32 -34.08,-22.25 -5.5,-4.13 -11.05,-7.54 -16.8,-11.37l-25.08 -17.18c-8.49,-6.35 -16.75,-11.52 -27.71,-14.53 -17.02,-4.67 -28.07,-5.97 -50.37,-5.97 2.8,4.19 7.84,7.9 12.13,10.76 12.93,8.64 29.98,14.73 45.86,14.41 8.15,-0.17 3.56,-1.47 20.73,11.43 3.03,2.28 5.21,3.68 8.18,5.89 2.55,1.92 6.42,3.55 7.28,6.81l-78.33 0 0 8.8c0,52.54 -62.88,81.58 -103.24,51.31 -14.98,-11.23 -27.03,-28.95 -27.03,-48.67 0,-26.19 3.41,-20.76 6.16,-32.57l-5.28 -0.88c-1.67,-7.17 1.46,-10.72 8.57,-17.83 12.44,-12.43 28.55,-20.9 48.64,-20.9l20.25 0.89c-2.57,-2.24 -4.73,-4.27 -7.27,-6.83 -2.8,-2.83 -4.13,-3.67 -7.03,-6.15 -8.69,-7.48 -3.15,-11.92 -6.83,-19.6l14.08 0c8.65,-16.35 -1.83,-30.47 -9.68,-32.56 -0.67,2.51 -1.15,2.69 -2.63,4.4 0,-10.75 5.49,-21.74 9.03,-29.68 9.23,-20.66 26.96,-37.77 46.71,-48.37 2.71,-1.45 9.96,-5.57 12.91,-5.57 3.81,0 8.8,2.16 8.8,7.04 0,6.13 -13.18,23.49 -14.08,34.34 4.14,-0.35 7.68,-1.76 12.32,-1.76 9.38,0 13.14,16.72 -12.32,16.72 0.33,3.99 2.24,4.74 5.47,5.96 9.71,3.67 16.19,0.06 26.91,-2.62l34.85 -7.42c29.02,-4.72 56.03,9.11 69.2,34 16.35,-1.36 31.46,-7.9 43.64,-17.09 3.58,-2.7 6.82,-7.56 11.81,-7.56l34.32 0c9.69,0 15.95,0.89 25.53,0.89 17.32,-0.01 28.83,-3.79 33.35,7.14 4.2,10.13 6.89,13.39 -3.43,19.26l-2.63 1.76c6.66,0 13.2,-0.26 13.2,6.16 0,4.79 -4.22,6.67 -8.8,7.05 0.85,3.2 0.75,1.9 2.81,4.22 1.47,1.65 1.7,2.23 3.15,3.89l9.69 11.44c3.6,4.14 13.48,12.43 6.82,17.87 -3.32,2.7 -8.07,0.76 -10.31,-2.05l-17.22 -20.64c-1.82,-2.05 -2.54,-3.19 -4.39,-5.28 -7.37,-8.27 -4.85,-9.45 -12.56,-9.45 -4.86,0 -11.72,26.51 -15.32,30.43 -2.8,3.04 -27.12,11.73 -31.96,13.83 -3.82,1.63 -6.94,2.71 -10.7,4.27 -3.09,1.26 -7.12,3.45 -10.67,4.27l0 10.57c2.89,0.67 6.31,2.39 8.82,3.5 2.38,1.04 6.37,2.98 8.78,3.54 3.97,-14.9 58.34,-49.72 98.37,-9.46 11.89,11.97 18.71,27.73 19.58,43.8zm-397.85 -1.78l28.16 13.2 12.33 -26.4c6.59,4.83 6.42,18.68 4.62,26.63 -0.98,4.37 -1.58,4.63 -3.42,8.02 -10.65,19.71 -39.85,25.14 -57.28,2.96 -6.95,-8.84 -8.24,-24.29 -3.04,-34.23 2.11,-4.06 4.25,-7.14 7.38,-10.23 6.24,-6.12 14.19,-8.94 25.34,-9.87 -0.88,3.76 -5.23,11.33 -7.05,14.96 -2.45,4.88 -4.51,10.18 -7.04,14.96zm262.3 -67.77l0 -7.92 35.19 -16.73c2.02,-0.91 3.62,-1.81 5.88,-2.93l6.6 -2.49 -1.66 3.02c-1.63,3.37 -3.38,9.09 -5.21,10.64l-26.6 11.26c-3.57,1.42 -10.09,4.81 -14.2,5.15zm-124.73 -249.29c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
            AUTO: "M1012.86 1394.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm-130.92 -618.95c-4.98,7.59 -19.8,38.59 -23.37,50.15 -1.67,5.4 -3.96,14 -3.96,21.03 -2.51,5.85 -0.61,25.66 0.34,32.26 2.69,18.62 9.99,34.38 18.58,50.32 2.16,4 3.82,6.82 5.95,11.08 2.11,4.21 3.86,7.96 5.94,11.89 -1.76,2.63 -10.13,11.39 -12.97,12.15 -1.35,-5.03 -5.38,-6.15 -7.92,-9.9 -2.81,-4.13 1.06,-6.15 -2.71,-15.94 -7.43,-19.35 -25.46,-16.27 -38.82,-16.31 -7.19,-0.02 -12.45,-1.46 -12.99,5.66 -0.39,5.19 -0.1,13.3 -0.03,18.72 0.11,8.17 3.55,7.28 11.4,7.22 -1.77,2.44 -9.17,5.58 -12.99,13.78 -1.53,3.28 -2.17,6.48 -2.41,9.95l0 14.39 25.94 -0.11c-2.19,3.56 -4.2,4.95 -5.79,9.71 -1.29,3.84 -2.23,9.64 -1.79,13.32 1.25,10.44 4.91,15.94 10.37,21.67 5.99,3.7 12.6,8.66 22.01,7.78 8.73,-0.82 14.87,-3.08 21.18,-8.83 8.76,-7.96 11.56,-23.05 7.54,-33.83 -1.99,-5.37 -3.17,-5.74 -5.69,-9.81 4.75,0.23 6.03,0.15 9.73,-0.72 0,-5.58 -4.6,-9.76 -8.92,-16.21l11.17 -10.71c7.17,12.89 13.45,22.18 29.33,26.15 12.61,3.16 89.35,1.59 108.66,1.59 17.24,0 38.36,1.09 55.12,-0.16 0,8.8 -0.65,15.93 4.69,19.79 4.8,3.47 15.1,2.25 22.96,2.25 -0.08,4.37 2.15,10.03 3.83,13.11 2.57,4.71 4.79,6 7.66,9.6 9.22,7.58 22.6,10.44 35.19,4.6 5.99,-2.78 8.73,-5.27 12.62,-10.07 3.07,-3.79 6.36,-10.62 6.24,-17.24l20.75 0c18.7,0 21.83,1.22 22.25,-3.73l0 -15.74c-0.54,-4.34 -3.57,-3.22 -17.83,-3.23 5.33,-4.62 5.72,-5.49 5.67,-15.39l0 -149.18c-3.47,-159.14 -86.22,-97.26 -265.08,-97.26 -7.28,0 -17.94,-1.34 -22.91,1.61 -4.88,0.47 -12.9,5.41 -16.14,7.98 -3.91,3.11 -9.2,9.48 -11.21,14.27 -2.05,2.86 -3.75,7.42 -5.84,10.83 -1.87,3.09 -4.41,7.93 -5.75,11.51zm186.94 131.32c-3.81,0 -6.5,-0.44 -9.19,0.8 -2.17,1 -4.12,2.89 -5.36,5.17 -2.08,3.83 -3.05,12.91 -1.56,18.36 1.5,2.62 2.48,2.46 6.08,2.49 2.68,0.03 5.47,-0.06 8.15,-0.06 5.61,0 11.54,0.48 17.04,-0.3 0,35.69 2.69,31.98 -11.36,31.92l-32.46 0.03c-5.62,0.04 -5.61,-0.27 -8.88,-2.46l0 -65.66c-3.64,-2.45 -3.15,-2.44 -9.22,-2.44l0.3 -98.9 42.68 15.08c15.15,4.51 20.39,12.05 19.01,27.58l0.22 67.59 -13.87 0.16c-2.1,0.46 -0.63,-0.1 -1.58,0.64zm127.62 84.52l-0.03 0 0.01 0 0.02 0zm-214.36 -84.52c-9.82,0 -19.64,0.02 -29.47,-0.02 -5.61,-0.03 -7.98,0.82 -10.74,3.84 -3.19,3.48 -3,5.9 -3,12.16l0 9.97c4.84,1.13 8.24,0.45 13.72,1.03 3.31,-2.32 43.62,-0.7 47.35,-0.7 -0.01,7.36 1.92,26.91 -1.9,31.37 -2.62,1.12 -6.18,0.72 -9.4,0.72l0 -31.59 -36.05 0.2 0.06 31.39c-9.19,0.02 -18.4,-0.06 -27.59,0.02 -11.81,0.12 -9.7,-1.94 -9.7,-18.66 0,-55.08 0.86,-113.49 -0.04,-167.8 17.85,0 35.75,-0.15 53.58,-0.04 5.59,0.04 34.97,10.36 40.49,13 0,14.17 -0.98,96.44 0.47,102.96 -10.49,0 -10.45,0.78 -10.13,11.35l-16.06 0.16c-2.11,0.46 -0.64,-0.1 -1.59,0.64zm-3.59 -274.03c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
            BOBCAT: "M303.39 269.89l149.29 53.73c11.81,10.17 -3.56,12.67 11.24,28.75 6.94,7.55 13.51,11.34 16.56,23.43 4.41,17.49 -0.53,18.92 7.47,35.58 30.63,7.14 79.07,-9.22 113.81,-9.22 -13.89,-20.74 -19.77,-5.62 -38.43,-16.94l-67.94 -61.25c-7.7,-21.6 17.45,-12.44 -62.45,-39.06 -14.18,-4.71 -27.45,-10.17 -43.06,-15.37l-86.49 -30.41 0 30.76zm119.93 -269.89c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-89.19 139.71l3.08 0c11.15,0 12.06,16.63 12.31,27.68l-27.69 0c0.91,-10.85 1.21,-27.68 12.3,-27.68zm58.45 0l39.99 0c0.31,13.87 3.48,16.24 6.15,27.68l-39.99 0c-0.45,-5.52 -4.48,-23.95 -6.15,-27.68zm-36.91 0l24.61 0c3.21,6.69 5.93,17.69 6.15,27.68l-24.6 0c-0.65,-7.65 -3.53,-22.2 -6.16,-27.68zm-18.46 -30.77c2.11,9.05 3.08,9.39 3.08,21.54l-12.31 0c6.92,-14.42 -2.72,-12.78 9.23,-21.54zm49.22 0l36.91 0c1.7,7.33 3.24,15.47 6.15,21.54l-39.98 0c-0.24,-10.49 -1.86,-12.05 -3.08,-21.54zm-36.91 0l24.61 0c2.11,9.05 3.07,9.39 3.07,21.54l-24.6 0c-0.23,-10.49 -1.87,-12.05 -3.08,-21.54zm-46.14 61.52c11.04,5.3 18.02,8.38 33.95,9.11 34.7,1.58 4.24,10.23 30.65,12.42l0 -12.3 21.53 0c7.94,16.53 -1.28,23.09 18.46,27.69 -0.65,-7.65 -3.53,-22.19 -6.16,-27.69l39.99 0c9.32,40.04 7.26,48.69 30.75,49.22l-27.27 -99.13c-12.32,-48.89 56.49,-42.37 -117.3,-42.37 -17.4,0 -11.22,55.18 -24.6,83.05zm218.39 61.53c0,9.85 -2.78,11.68 -6.62,17.98 -3.64,5.95 -5.63,9.94 -8.75,15.86 9.69,6.48 62.5,58.43 67.67,58.43 16.34,0 10.04,-7.58 25.55,5.06 12.94,10.54 11.36,7.54 11.36,28.77 28.52,0 20.11,1.68 36.91,3.09 12,-51.52 2.68,-23.53 2.04,-55.72 -0.11,-5.54 7.78,-28.12 -18.18,-48.11 -7.18,-5.53 -18.2,-6.91 -30,-6.91 0,-11.49 1.81,-39.99 -15.38,-39.99 -13.3,0 -12.4,6.15 -21.53,6.15 -17.95,0 -26.51,-5.77 -43.07,-6.15l0 21.54zm-93.67 81.46c10.75,0 19.46,8.7 19.46,19.45 0,10.74 -8.71,19.45 -19.46,19.45 -10.73,0 -19.44,-8.71 -19.44,-19.45 0,-10.75 8.71,-19.45 19.44,-19.45zm0 -26c-25.09,0 -45.44,20.35 -45.44,45.45 0,25.1 20.35,45.45 45.44,45.45 25.11,0 45.46,-20.35 45.46,-45.45 0,-25.1 -20.35,-45.45 -45.46,-45.45zm-136.81 26c10.73,0 19.44,8.7 19.44,19.45 0,10.74 -8.71,19.45 -19.44,19.45 -10.74,0 -19.45,-8.71 -19.45,-19.45 0,-10.75 8.71,-19.45 19.45,-19.45zm-49.44 -139.91l9.24 0 0 9.23 -9.24 0 0 -9.23zm-49.21 123.05c19.17,12.83 12.71,18.75 46.14,21.53 5.44,-23.37 26.92,-39.36 55.38,-39.99l0 -107.67c-23.88,-5.56 -38.14,-18.45 -67.68,-18.45 0,11.28 -2.13,25.86 -3.44,39.62 -4.63,48.47 -20.51,-13.91 -30.4,104.96zm98.65 -9.14c-25.1,0 -45.46,20.35 -45.46,45.45 0,25.1 20.36,45.45 45.46,45.45 25.1,0 45.45,-20.35 45.45,-45.45 0,-25.1 -20.35,-45.45 -45.45,-45.45zm12.09 -6.25c43.87,10.22 39.99,46.2 39.99,70.74l33.83 0c-5.67,-24.36 -4.34,-46.39 20.1,-62.95 23.68,-16.05 27.12,-7.79 53.72,-7.79 -1.26,-15.19 -2.44,-11.7 -31.16,-21.12 -19.98,-6.54 -104.31,-39.39 -116.48,-40.39l0 61.51z",
            BUS: "M1012.86 1394.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm63.41 -409.51c0,-6.2 -0.22,-7.7 2.56,-13.73l3.75 -5.56c9.77,-10.77 24.55,-11.59 35.92,-2 17.22,14.53 6.13,44.56 -16.63,44.56 -13.79,0 -25.6,-11.98 -25.6,-23.27zm-171.51 100.04l-4.67 0c-5.77,-0.43 -11.37,-2.5 -15.6,-6.75 -8.25,-8.26 -5.98,-23.7 -5.98,-38.23 -14.51,0 -27.97,3.19 -30.71,-12.71 -0.61,-3.45 -1.12,-7.82 -1.11,-11.32 0.02,-4.95 -0.55,-6.98 -0.75,-10.86 -1.49,-28.31 -2.32,-66.82 -2.33,-95.4 0,-8.63 0.79,-14.44 0.77,-23.27 0,-8.01 0,-16.03 0,-24.04 -4.68,-2.48 -7.32,-4.05 -10.06,-8.54 -4.75,-7.78 -3.11,-32.99 -3.11,-44.19 0,-26.23 16.99,-20.6 18.47,-27.28l2.91 -23.46c3.34,-19.91 5.15,-39.89 21.57,-49.77 24.79,-14.9 81.02,-21.25 121.45,-21.25l3.02 0 9.49 0 0.8 0c12.1,0.03 26.68,0.17 34.73,0.81 2.96,0.25 3.24,0.75 7,0.76l29.19 2.63c9.24,1.28 18.47,2.63 27.27,4.52 16.04,3.44 32.77,7.35 46.42,16.4 17.52,11.62 19.66,43.42 22.34,63.74 0.1,0.79 0.29,2.55 0.41,3.46 0.17,1.12 0.16,0.98 0.38,1.94l0.42 1.13c1.49,2.88 3.38,1.67 7.74,3.9 2.19,1.13 4.34,2.81 5.94,4.93 7.29,9.76 4.94,31.53 4.94,47.02 0,10.45 -3.86,20.9 -13.96,23.25l0 120.98c0,8.66 -0.82,15.52 -0.77,23.27 0.02,6.74 0.64,17.72 -0.06,23.99 -1.24,11.08 -16.66,9.36 -25.54,9.36l0 24.81c0,27.19 -48.85,26.28 -48.85,0.79l0 -25.6 -179.16 0 0 27.92c0,9.12 -10.94,16.21 -22.6,17.06zm-6.09 -100.04l0 -3.88c0,-17.85 23.28,-33.39 42.23,-17.41 17.5,14.75 5.91,44.56 -16.63,44.56 -13.79,0 -25.6,-11.98 -25.6,-23.27zm233.43 -89.19l-241.95 0 0 -127.95 244.28 0 0 125.62c0,1.79 -0.54,2.33 -2.33,2.33zm-210.16 -170.61l180.7 0 0 26.37 -180.7 0 0 -26.37zm56.61 -92.35c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
            CAR: "M1012.86 1394.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm-41.63 -541.9c0,-16.27 29.79,-12.43 34.38,-8.45 5.14,4.45 5.14,12.44 0,16.89 -5.18,4.47 -25.16,4.47 -30.34,0 -1.69,-1.47 -4.04,-5.83 -4.04,-8.44zm165.21 76.84c0,-18.58 23.93,-31.38 39.18,-16.12 21.22,21.21 -11.03,53.45 -32.25,32.24 -3.11,-3.11 -6.93,-10.35 -6.93,-16.12zm-26.89 -2.88l0 5.76c0,23.93 23.13,47.06 47.06,47.06 10.43,0 15.35,-0.3 24.98,-4.79 14.26,-6.66 27.85,-24.87 27.85,-41.31 0,-16.72 -2.45,-26.96 -14.64,-39.15 -3.95,-3.94 -8.05,-7.43 -13.21,-9.84 -13.42,-6.26 -31.09,-6.8 -44.22,-0.03 -14.12,7.29 -27.82,23.83 -27.82,42.3zm-249.74 2.88c0,-18.58 23.93,-31.38 39.18,-16.12 21.21,21.21 -11.03,53.45 -32.24,32.24 -3.12,-3.11 -6.94,-10.35 -6.94,-16.12zm-26.9 -2.88l0 5.76c0,23.93 23.14,47.06 47.07,47.06 16.34,0 26.54,-2.99 38.18,-14.64 33.9,-33.9 4.36,-85.25 -31.45,-85.25 -16.84,0 -26.87,2.37 -39.15,14.64 -7.22,7.23 -14.65,18.38 -14.65,32.43zm134.48 -118.15c0,-46.73 -7.38,-39.38 65.32,-39.38 7.87,0 18.69,10.6 24.74,15.59l34.43 27.05c5.18,4.93 0.72,10.19 -2.5,10.19l-108.54 0c-8.41,0 -13.45,-5.05 -13.45,-13.45zm-40.35 13.45l-47.06 0c-7.07,0 -9.67,-5.85 -2.64,-13.22l26.51 -31.11c7.7,-9.66 11.2,-8.5 23.19,-8.5 17.49,0 13.46,18.83 13.46,39.38 0,8.4 -5.04,13.45 -13.46,13.45zm-155.6 30.74l0 48.98c0,19.73 19.66,39.38 39.38,39.38l11.53 0c0,-10.09 -3.48,-19.88 4.79,-36.51 3.27,-6.59 7,-13.29 12.22,-18.51 3.96,-3.97 13.02,-10.2 18.36,-12.38 20.82,-8.51 41.73,-7.06 60.14,5.52 2.29,1.57 2.36,1.9 4.26,3.41l11.11 11.96c6.06,8.85 11.11,23.22 11.11,34.99 0,4.81 -0.96,5.91 -0.96,11.52l155.6 0c0,-10.09 -3.47,-19.88 4.79,-36.51 10.83,-21.8 29.55,-36.49 55.72,-36.49 15.4,0 28.32,5.85 39.26,14.53 13.51,10.71 22.22,29.3 22.22,46.95 0,4.81 -0.96,5.91 -0.96,11.52 20.72,0 35.54,-15.16 35.54,-32.65l0 -38.43c0,-11.84 -8.19,-21.91 -15.52,-26.74 -7.63,-5 -22.61,-7.01 -33.47,-8.79 -6.4,-1.06 -67.08,-11.17 -71.52,-13.97l-69.27 -57.52c-8.48,-6.67 -16.82,-14 -29.22,-14l-119.11 0c-8.24,0 -17.56,4.54 -22.33,8.4 -6.36,5.15 -13.51,13.95 -18.83,20.55l-25.34 29.41c-18.16,20.39 -3.36,13.6 -47.84,14.6 -16.47,0.36 -31.66,16.88 -31.66,30.78zm207.11 -219.76c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
            CRANE: "M349.18 465.04l42.28 0 0 11.8 -42.28 0 0 -11.8zm74.14 -465.04c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-204.95 182.34c0,33.42 -6.47,27.54 67.86,27.54 14.68,0 11.81,-13.83 11.81,-28.51 0,-6.9 -5.68,-10.83 -12.79,-10.83l-54.09 0c-7.93,0 -12.79,3.74 -12.79,11.8zm173.08 180.97l0 27.53 -34.4 0c2.76,-2.4 4.98,-4.38 7.99,-6.75 3.05,-2.42 5.62,-4.74 8.59,-7.16l13.12 -10.47c2.59,-2.31 1.14,-2.2 4.7,-3.15zm-42.28 13.77l0 -30.48 37.39 0c-1.65,2.45 -1.67,2.21 -3.93,3.93 -2,1.53 -2.84,2.48 -4.79,4.06 -3.25,2.66 -6.05,4.63 -9.25,7.48 -2.44,2.18 -16.49,14.23 -19.42,15.01zm42.28 -73.77l0 28.53 -34.4 0 34.4 -28.53zm-42.28 14.75l0 -31.47 38.37 0 -38.37 31.47zm42.28 -73.75l0 27.53 -34.4 0c4.55,-3.97 30.36,-26.45 34.4,-27.53zm-42.28 13.77l0 -30.49 37.39 0 -8.72 8c-3.77,3.07 -25.21,21.57 -28.67,22.49zm249.82 -91.47l8.84 0 0 51.14 -8.84 0 0 -51.14zm-207.54 17.7l0 28.53 -34.4 0c1.65,-2.47 1.65,-2.22 3.91,-3.96 7.97,-6.11 23.35,-19.78 30.49,-24.57zm-42.28 14.74l0 -32.44 39.34 0c-1.36,2.05 -6.88,6.34 -9.41,8.3 -8,6.25 -22.61,19.26 -29.93,24.14zm21.64 -123.91l18.69 66.88 -38.35 0c1.28,-5.52 17.67,-64.01 19.66,-66.88zm-38.35 66.88l-81.63 0c3.07,-4.58 68.43,-55.54 78.9,-64.69l26.27 -18.98c-0.8,1.95 -0.31,0.69 -0.95,2.99l-22.59 80.68zm50.16 -91.47l25.15 11.24c40.01,16.62 87.14,39.31 127.99,56.91l48.49 21.35c1.64,0.83 1.71,0.91 2.93,1.97l-178.99 0 -12.68 -45.35c-2.28,-7.86 -4.26,-14.86 -6.56,-22.94 -1.23,-4.31 -2.18,-7.75 -3.27,-11.49 -1.09,-3.76 -2.57,-7.77 -3.06,-11.69zm-164.25 99.34c0,6.64 -1.75,16.72 7.88,16.72l103.25 0 0 250.79 -45.22 0c-2.01,0 -5.05,2.55 -5.92,3.93 -1.69,2.65 -7.3,35.41 7.87,35.41l168.19 0c11.82,0 9.83,-15.61 9.83,-25.57 0,-7.47 -2.56,-13.77 -9.83,-13.77l-43.29 0 0 -250.79 179.99 0 0 50.16c0,6.04 -6.88,-2.57 -6.88,20.66 0,6.25 2.37,15.34 4.3,20.28 1.58,4.04 2.84,4.41 4.34,7.45 2.1,4.28 1.02,5.56 7.09,5.7l0.98 9.82c7.7,1.81 12.78,3.61 12.78,11.82 0,6.85 -3.49,11.47 -10.27,10.33 -11.56,-1.93 -5.9,-10.33 -12.34,-10.33 -9.16,0 0.01,17.7 10.82,17.7 5.91,0 11.19,0.6 15.8,-5.83 5.42,-7.55 4.96,-17.56 -1.29,-24.42 -4.63,-5.09 -8.43,-1.48 -8.62,-9.09 8.08,-0.18 3.21,-1.99 8.1,-7.65 7.87,-9.06 6.66,-22.88 6.66,-35.62 0,-4.71 -3.13,-7.86 -6.88,-8.86l0 -52.12c3,0 4.49,0.33 6.91,-1.94 2.5,-2.36 4.98,-20.25 -3.21,-22.42 -10.25,-2.71 0.64,5.07 -26.04,-6.42 -10.65,-4.58 -20.42,-8.88 -30.75,-13.49l-60.58 -26.97c-23.75,-9.85 -51.54,-23.55 -75.58,-33.57l-30.73 -13.54c-3.54,-1.67 -12.57,-6.27 -16.06,-6.56 -0.62,-7.48 -12.33,-15.56 -18.81,-1.09 -2.27,5.07 -22.44,19.77 -26.74,23.41 -3.23,2.74 -6.04,4.75 -9.3,7.41l-64.46 52.58c-6.17,5.22 -12.77,9.56 -18.57,14.87 -5.26,4.82 -4.58,2.98 -13.65,3.07 -6.07,0.08 -9.77,2.01 -9.77,7.94z",
            FOCKLIFTS: "M638.29 388.46c0,3.16 -2.56,5.73 -5.72,5.73l-82.05 0c-3.17,0 -5.73,-2.57 -5.73,-5.73l0 -82.04c0,-3.16 2.56,-5.73 5.73,-5.73l82.05 0c3.16,0 5.72,2.57 5.72,5.73l0 82.04zm-214.97 -388.46c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm46.05 274.06c-24.9,-40.69 -90.36,-149.72 -91.02,-150.8 -3.33,-5.58 -9.44,-9.05 -15.94,-9.05l-106.04 0c-10.23,0 -18.56,8.33 -18.56,18.56l0 102.19 -29.84 0c-7.07,0 -12.83,5.75 -12.83,12.82l0 118.38c0,7.07 5.76,12.83 12.83,12.83l13.43 0c1.75,0 3.16,-1.41 3.16,-3.15 0,-24.36 19.81,-44.17 44.16,-44.17 24.35,0 44.16,19.81 44.16,44.17 0,0.83 0.33,1.63 0.93,2.22 0.59,0.59 1.38,0.93 2.22,0.93l35.41 0c1.74,0 3.15,-1.41 3.15,-3.15 0,-24.36 19.81,-44.17 44.16,-44.17 24.35,0 44.16,19.81 44.16,44.17 0,1.74 1.41,3.15 3.15,3.15l9.61 0c9.19,0 16.66,-7.48 16.66,-16.66l0 -79.89c0,-3.27 -1.53,-6.04 -2.96,-8.38zm-105.36 -0.2l0 -17.26c0,-2.97 -2.41,-5.37 -5.37,-5.37l-30.42 0 0 -50.81c0,-2.97 -2.41,-5.37 -5.38,-5.37l-17 0c-2.97,0 -5.37,2.4 -5.37,5.37l0 73.44 -25.52 0 -0.01 -122.51 76.93 0 73.21 122.51 -61.07 0 0 0zm-67.67 101.97c0,-15.25 -12.36,-27.62 -27.62,-27.62 -15.25,0 -27.62,12.37 -27.62,27.62 0,15.26 12.37,27.63 27.62,27.63 15.26,0 27.62,-12.37 27.62,-27.63zm130.02 0c0,-15.25 -12.36,-27.62 -27.61,-27.62 -15.26,0 -27.62,12.37 -27.62,27.62 0,15.26 12.36,27.63 27.62,27.63 15.25,0 27.61,-12.37 27.61,-27.63zm199.89 1.87l-111.52 0c-6.64,0 -12.03,-5.39 -12.03,-12.04l0 -258.39c0,-6.65 5.39,-12.04 12.03,-12.04 6.65,0 12.04,5.39 12.04,12.04l0 246.35 99.48 0c6.65,0 12.04,5.4 12.04,12.04 -0.01,6.65 -5.39,12.04 -12.04,12.04zm12.03 -165.63c0,3.16 -2.56,5.72 -5.72,5.72l-82.05 0c-3.17,0 -5.73,-2.56 -5.73,-5.72l0 -82.05c0,-3.17 2.56,-5.73 5.73,-5.73l82.05 0c3.16,0 5.72,2.56 5.72,5.73l0 82.05z",
            LOADER: "M301.98 146.22c-11.14,1.99 -19.4,9.58 -22.69,18.71 -3.18,8.84 -1.77,66.71 -1.8,80.4 -0.07,25.86 12.66,29.05 32.67,49.55 9.54,9.76 11.57,11.7 29.45,11.66 13.7,-0.03 27.4,-0.01 41.1,-0.01 13.47,0 26.99,0.57 35.19,-6.85l9.8 -10.27c10.24,-10.24 25.62,-19.98 19.79,-40.36 -1.97,-6.88 -34.7,-70.51 -40.72,-82.59 -4.9,-9.84 -9.5,-17.04 -21.23,-19.83 -5.81,-1.39 -74.97,-1.6 -81.56,-0.41zm121.34 -146.22c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-203 349.85c7.42,-65.86 102.19,-105.8 155.64,-39.56 13.64,16.9 20.53,40.57 17.29,68.33l31.75 0c-2.03,-15.95 -1.65,-28.33 3.28,-42.85 5.9,-17.32 10.7,-19.72 17.66,-30.62 -15.26,-1.36 -20.61,-4.85 -28.25,-12.85 -7.34,-7.65 -9.95,-19.05 -8.06,-32.13 -17.2,2.16 -79.16,3.99 -93.19,-1.81 -11.63,-4.78 -29.04,-24.36 -39.29,-34.69 -7.67,-7.73 -7.31,-10.1 -10.62,-13.69 -26.6,4.93 -58.29,21.05 -61.81,46.62 -1.81,13.32 -0.33,38.91 -0.32,53.51 0.01,16.76 -0.05,28.38 15.92,39.74zm290.72 -151.53c-39.47,6.48 -31.11,5.25 -61.22,34.76 -5.32,5.21 -20.55,18.83 -23.67,24.75 -7.48,14.14 1.16,27.58 11.99,31.41 16.01,5.65 25.81,-8.69 32.03,-14.8 8.35,-8.22 16.09,-15.74 24.42,-23.99 8.34,-8.25 9.66,-5.9 26.13,-9.41 6.26,-1.33 5.39,-2 8.86,1.45 23.36,23.16 44.94,19.22 76.74,19.22 15.03,0 33.9,3.07 36.3,-12.12 1.23,-7.73 -3.28,-13.14 -7.83,-15.48 -7.2,-3.69 -12.97,-0.2 -18.02,-6.59 -3.08,-3.92 -28.02,-55.3 -32.51,-64.3 -6.09,-12.19 -9.24,-24.2 -26.86,-15.31 -16.92,8.55 -31.01,15.78 -40.26,31.92 -4.03,7.03 -3.73,10.74 -6.1,18.49zm-8.63 93.24c-37.61,4.78 -69.01,38.32 -63.55,81.95 4.63,37.07 38.96,68.35 81.96,62.95 36.73,-4.6 68.66,-39.03 62.99,-81.73 -4.93,-37.04 -38.45,-68.63 -81.4,-63.17zm3.02 44.04c-39.2,9.21 -24.61,65.02 12.42,56.84 13.85,-3.06 25.88,-17.44 21.85,-34.97 -3.1,-13.57 -17.22,-25.87 -34.27,-21.87zm-207.63 -44.04c-37.45,4.77 -69.05,38.34 -63.58,81.73 4.7,37.23 38.83,68.59 82,63.17 36.98,-4.64 68.39,-38.91 62.98,-81.73 -4.66,-37.01 -38.69,-68.6 -81.4,-63.17zm3.03 44.04c-14.31,3.37 -26.82,16.35 -22.56,35 8.48,37.13 65.56,24.73 56.89,-13.19 -3.1,-13.53 -17.2,-25.83 -34.33,-21.81zm5.9 -197.2l-0.02 50.24 105.93 -0.07 -36.16 -72.97 -69.74 -0.04 -0.01 22.84z",
            "SMALL TRUCK": "M1235.06 1548.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm2.54 -613.73c0,-15.21 1.35,-17.34 16.73,-17.34 48.51,0 40.51,-3.21 56.17,23.1l13.29 24.37c1.32,9.35 0.48,4.03 -2.5,6.34 -4.88,5.04 -39.28,2.42 -49.26,2.44 -35.58,0.05 -34.43,6.21 -34.43,-38.91zm246.86 106.36c-4.4,-3.41 -6.98,-2.33 -13.7,-2.1l-1.92 -45.1c-1.84,-21.6 -20.83,-24.8 -44.15,-24.7 -22.05,0.09 -44.1,-0.09 -66.15,0.07 -9.91,-11.39 -23.07,-35.25 -32.26,-49 -24.39,-36.52 -14.51,-30.07 -89.65,-30.64 -55.88,-0.43 -27.47,32.38 -35.87,84.15l-198.64 -0.13c0,25.8 -3.2,86.87 3.21,105.71 10.12,2.86 20.16,2.06 32.19,2.06 6.88,-2.07 2.84,-9.63 10.56,-23.21 33.05,-58.07 121.59,-39.12 128.38,22.96l144.92 0.02c2.83,-32.66 32.9,-57.38 67.91,-57.51 19.34,-0.07 34.6,7.27 46.13,17.54 16.6,14.79 13.55,15.42 22.46,39.11 8.24,1.21 15.97,0.25 22.88,-1.43 5.3,-12.46 3.78,-21.74 3.7,-37.8zm-101.23 34.94c20.55,-9.23 31.88,23.84 10.54,31.4 -20.12,7.14 -32.96,-21.33 -10.54,-31.4zm-44.54 24.63c10.03,61.01 109.84,51.72 99.57,-17.63 -3.69,-24.85 -29.33,-47.24 -59.3,-41.32 -24.65,4.87 -45.44,27.45 -40.27,58.95zm-235.06 -25.2c20.61,-6.79 31.45,25.04 11.32,31.95 -21.16,7.28 -34.04,-24.48 -11.32,-31.95zm-45.14 20.76c2.24,26.69 23.98,47.35 53.63,45.65 65.73,-3.76 60.77,-106.85 -8.06,-100.95 -26.65,2.29 -48.06,25.64 -45.57,55.3zm142.26 -309.42c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
            TANKER: "M1012.86 1394.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm147.88 -437.47c29.14,0 31.78,43.53 -0.93,43.53 -26.22,0 -26.38,-43.53 0.93,-43.53zm-280.56 -118.51l22.23 0 0 -23.15 -22.23 0 0 23.15zm0 -37.04l22.23 0 0 -23.15 -22.23 0 0 23.15zm0 74.07l22.23 0 0 -23.15 -22.23 0 0 23.15zm66.67 -120.37c0,5.05 1.08,7.78 7.41,9.26l0 13.89 -37.04 0 0 133.33 -14.81 0 0 -22.22 -22.23 0 0 22.22 -14.81 0 0 -133.33c-26.81,0 -38.33,3.91 -54.88,21.04 -38.19,39.56 -17.52,128.03 44.7,128.03l161.1 0c10.42,0 19.66,-2.8 26.68,-6.66 14.04,-7.69 25.05,-20.28 31.15,-35.53 11.11,-27.84 7.19,-60.02 -10.98,-83.35 -8.08,-10.38 -24.21,-22.6 -42.22,-22.6l0 -14.82c11.08,-2.58 9.84,-15.74 -2.77,-15.74l-61.11 0c-4.45,0 -10.19,2.54 -10.19,6.48zm13.89 201.85c29.14,0 31.78,43.53 -0.93,43.53 -26.22,0 -26.37,-43.53 0.93,-43.53zm-88.89 0c13.67,0 22.54,10.06 22.8,21.41 0.68,29.45 -44.42,29.45 -43.74,0 0.24,-10.87 9.5,-21.41 20.94,-21.41zm275 -99.07l0 -56.48c13.02,0 14.03,4.22 19.83,11.65l42.21 54.09 -52.83 0.06c-6.81,-0.11 -9.21,-2.65 -9.21,-9.32zm-51.85 -65.74l0 119.44c-23.76,0 -18.36,-1.56 -23.85,4.85 -5.03,5.86 -11.15,10.69 -17.76,14.66 -7.31,4.38 -20.81,10.12 -32.47,10.12l-170.36 0c-18.98,0 -36.16,-10.66 -48.4,-22.9 -2.04,-2.05 -3.54,-4.5 -5.3,-5.8 -2.48,0.65 -5.56,2.6 -5.56,5.55l0 54.64c0,3.37 4.51,6.47 8.33,6.47l36.11 0c0,6.75 1.07,10.37 3.37,15.15 12.26,25.43 43.03,27.88 59.86,11.06 6.62,-6.63 10.84,-16.15 10.84,-26.21l14.82 0c0,38 52.75,52.43 70.7,15.15 2.31,-4.78 3.37,-8.4 3.37,-15.15l125.93 0c0,38 52.74,52.43 70.7,15.15 2.31,-4.78 3.37,-8.4 3.37,-15.15l17.59 0c10.08,0 19.45,-9.36 19.45,-19.44l0 -75.93c0,-9.9 -10.71,-20.79 -17.2,-29.09l-46.18 -59.39c-5.91,-6.45 -16.27,-9.66 -26.43,-9.66l-40.74 0c-4.46,0 -10.19,2.54 -10.19,6.48zm-116.45 -159.38c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
            TRUCK: "M1012.86 1394.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm-195.33 -646.31l0 181.15c0,3.84 1.92,5.76 5.76,5.76l205.03 0c3.39,0 4.95,-4.53 4.95,-8.24l0 -175.37c0,-10.47 -7.12,-19.76 -17.3,-19.76l-180.33 0c-5.79,0 -9.41,1.78 -12.57,4.71 -2.68,2.47 -5.54,6.88 -5.54,11.75zm-14.83 229.62c0.67,3.72 2.41,5.88 6.59,5.88l65.05 0c3.6,0 1.69,-5.52 7.4,-16.49 1.44,-2.79 3.15,-5.06 4.94,-7.41 1.94,-2.57 4.07,-4.03 5.77,-6.57l-82.4 -0.07c-3.31,0.06 -2.64,-0.36 -4.73,1.03 -0.98,0.66 -2.62,2.46 -2.62,3.98l0 19.65zm317.84 31.4c-23.7,0 -24.85,-37.06 0.82,-37.06 23.19,0 23.71,37.06 -0.82,37.06zm-0.83 18.94c29.23,0 45.73,-28.23 35.67,-52.15 -9.43,-22.44 -40.22,-32.45 -61.8,-11.06 -6.24,6.18 -10.47,15.09 -10.34,26.03 0.24,20.2 16.49,37.18 36.47,37.18zm-194.32 -18.94c-24.89,0 -25.24,-37.06 0,-37.06 23.5,0 23.47,37.06 0,37.06zm-37.87 -23.06c0,8.37 -0.44,13.77 3.84,21.7 11.77,21.86 39.92,25.96 55.65,13.09 20.98,-17.13 20.58,-43.51 0.44,-60.14 -13.5,-11.15 -35.61,-10.06 -48.63,2.89 -5.35,5.34 -11.3,14.83 -11.3,22.46zm270.08 -130.93l-73.28 0c-3.01,0 -6.59,-2.27 -6.59,-4.94l0 -41.97c0,-4.91 3.33,-6.59 8.23,-6.59l40.34 0c8.57,0 13.61,11.74 20.93,21.88 3.2,4.42 16.96,22.97 16.96,25.87 0,3.22 -3.07,5.75 -6.59,5.75zm66.69 102.94l0 19.04c-0.83,8.51 -5.29,6.49 -25.53,6.49 -9.87,0 -19.76,0 -29.64,0 -0.97,-11.72 -7.51,-21.04 -15.01,-28.62 -17.86,-18.06 -49.1,-17.83 -67.13,-0.02 -8.61,8.51 -11.85,15.05 -15.01,28.64l-98.81 0c0,-14.31 -10.91,-23.39 -15.65,-30.47l92.22 0 0 -171.26c0,-7.44 5.74,-13.18 13.18,-13.18l55.15 0c14.62,0 25.82,6.27 33.91,13.03 1.65,1.38 3.72,4.28 5.28,6.26 1.95,2.48 3.02,4.06 4.8,6.73 8.53,12.89 32.92,47.57 37,56.02 2.39,4.98 4.65,11.43 4.65,18.4l0 84c7.43,0 20.59,-1.97 20.59,4.94zm-245.74 -325.32c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
            COMPRESSORS: "M365.57 176.98c0,-7.96 -6.47,-14.44 -14.44,-14.44 -7.98,0 -14.44,6.48 -14.44,14.44 0,7.98 6.46,14.45 14.44,14.45 7.97,0 14.44,-6.47 14.44,-14.45zm57.75 -176.98c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm195.98 215.08c-1.74,-10.43 -10.74,-18.09 -21.32,-18.11l-349.32 0c-10.56,0.02 -19.56,7.65 -21.32,18.06 -4.02,25.07 -6.09,50.41 -6.19,75.81 0.1,25.38 2.17,50.71 6.19,75.76 1.74,10.43 10.74,18.09 21.32,18.1l23.39 0c3.68,-40.93 37.98,-72.29 79.07,-72.29 41.1,0 75.39,31.36 79.06,72.29l50.9 0 0 -7.22c0,-3.98 3.23,-7.22 7.22,-7.22 3.99,0 7.22,3.24 7.22,7.22l0 50.54 57.77 0 0 -50.54c0,-3.98 3.23,-7.22 7.21,-7.22 4,0 7.23,3.24 7.23,7.22l0 7.22 30.25 0c10.56,-0.01 19.56,-7.64 21.32,-18.05 4.02,-25.07 6.08,-50.43 6.19,-75.82 -0.1,-25.37 -2.17,-50.7 -6.19,-75.75zm-318.72 17.99l-21.67 0c-3.99,0 -7.22,-3.23 -7.22,-7.21 0,-3.99 3.23,-7.23 7.22,-7.23l21.67 0c3.98,0 7.21,3.24 7.21,7.23 0,3.98 -3.23,7.21 -7.21,7.21zm267.15 0l-238.28 0c-3.98,0 -7.21,-3.23 -7.21,-7.21 0,-3.99 3.23,-7.23 7.21,-7.23l238.28 0c3.99,0 7.22,3.24 7.22,7.23 0,3.98 -3.23,7.21 -7.22,7.21zm-216.61 93.87c-26.29,0 -49.99,15.83 -60.04,40.12 -10.05,24.29 -4.5,52.23 14.09,70.82 18.58,18.58 46.54,24.15 70.82,14.08 24.29,-10.05 40.11,-33.75 40.11,-60.04 -0.04,-35.88 -29.11,-64.95 -64.98,-64.98zm0 101.08c-19.94,0 -36.1,-16.16 -36.1,-36.1 0,-19.94 16.16,-36.11 36.1,-36.11 19.93,0 36.1,16.17 36.1,36.1 -0.02,19.95 -16.17,36.09 -36.1,36.11zm144.4 21.66c0,4 3.23,7.23 7.23,7.23l43.31 0c4,0 7.23,-3.23 7.23,-7.23l0 -7.21 -57.77 0 0 7.21zm-122.74 -57.76c0,-11.96 -9.7,-21.65 -21.66,-21.65 -11.96,0 -21.66,9.69 -21.66,21.65 0,11.97 9.7,21.66 21.66,21.66 11.96,0 21.66,-9.69 21.66,-21.66zm-100.72 -267.15l-14.81 0 0 57.76 48.38 0c-19.15,-13.37 -31.43,-34.51 -33.57,-57.76zm223.46 57.76c35.89,0 64.98,-29.09 64.98,-64.99 0,-35.89 -29.09,-64.98 -64.98,-64.98 -35.89,0 -64.98,29.09 -64.98,64.98 0.04,35.88 29.11,64.96 64.98,64.99zm41.51 -79.33c1.89,-0.32 3.83,0.13 5.39,1.23 1.57,1.12 2.62,2.8 2.94,4.69 0.47,2.78 0.7,5.6 0.7,8.42 0,3.99 -3.23,7.22 -7.21,7.22 -4,0 -7.23,-3.23 -7.23,-7.22 0,-2.02 -0.16,-4.02 -0.49,-6.01 -0.67,-3.93 1.97,-7.65 5.9,-8.33zm-7.53 -19.64c2.83,2.82 2.83,7.38 0,10.21l-14.48 14.5c1.42,2.89 2.15,6.05 2.17,9.27 0,11.97 -9.71,21.67 -21.67,21.67 -11.96,0 -21.66,-9.7 -21.66,-21.67 0,-11.96 9.7,-21.65 21.66,-21.65 3.22,0.01 6.4,0.75 9.28,2.16l14.51 -14.5c2.81,-2.82 7.38,-2.82 10.19,0.01zm-84.52 33.98c0.01,-14.86 6.56,-28.98 17.92,-38.58 11.37,-9.6 26.38,-13.7 41.05,-11.24 3.63,0.68 6.18,4.01 5.87,7.7 -0.32,3.7 -3.37,6.56 -7.07,6.62 -0.41,0 -0.81,-0.03 -1.22,-0.09 -10.47,-1.76 -21.19,1.19 -29.31,8.04 -8.1,6.86 -12.79,16.93 -12.8,27.55 0,4 -3.23,7.23 -7.22,7.23 -3.99,0 -7.22,-3.23 -7.22,-7.23zm96.06 64.99l48.35 0 0 -57.76 -14.81 0c-2.13,23.25 -14.4,44.38 -33.54,57.76zm-40.47 -70.04l-0.05 -0.08c-2.86,-2.79 -7.43,-2.75 -10.25,0.1 -2.81,2.84 -2.8,7.43 0.03,10.25 2.83,2.83 7.41,2.84 10.25,0.04 2.85,-2.82 2.9,-7.4 0.1,-10.26l-0.08 -0.05zm-103.92 70.04l53.38 0c-11.59,-8.13 -20.82,-19.21 -26.71,-32.08 -5.88,12.87 -15.1,23.94 -26.67,32.08zm-45.53 0c35.89,0 64.98,-29.09 64.98,-64.99 0,-35.89 -29.09,-64.98 -64.98,-64.98 -35.89,0 -64.98,29.09 -64.98,64.98 0.03,35.88 29.11,64.96 64.98,64.99zm-49.77 -61.71l0 -0.02c-0.87,-1.71 -1.01,-3.69 -0.41,-5.52 0.6,-1.82 1.9,-3.32 3.61,-4.19 6.18,-2.75 12.9,-4.07 19.67,-3.86 0.97,-2.49 2.28,-4.84 3.9,-6.97 -2.85,-2.79 -6.22,-5 -9.93,-6.49 -3.79,-1.27 -5.83,-5.36 -4.57,-9.15 1.27,-3.79 5.36,-5.84 9.15,-4.57 6.3,2.41 11.98,6.22 16.6,11.12 2.45,-1.06 5.03,-1.78 7.67,-2.12 -0.04,-3.99 -0.85,-7.94 -2.42,-11.62 -1.74,-3.56 -0.29,-7.86 3.26,-9.64 3.55,-1.77 7.86,-0.35 9.66,3.19 2.77,6.17 4.09,12.9 3.87,19.67 2.48,0.97 4.83,2.27 6.95,3.88 2.83,-2.77 5.04,-6.11 6.49,-9.8 0.79,-2.46 2.82,-4.31 5.34,-4.86 2.52,-0.55 5.15,0.29 6.89,2.2 1.73,1.9 2.32,4.58 1.54,7.05 -2.36,6.36 -6.18,12.06 -11.18,16.66 1.08,2.45 1.81,5.05 2.17,7.7 3.99,0 7.94,-0.82 11.61,-2.39 3.55,-1.8 7.91,-0.36 9.7,3.2 1.8,3.57 0.36,7.92 -3.2,9.71 -5.72,2.59 -11.92,3.94 -18.19,3.95 -0.48,0 -1,-0.06 -1.5,-0.07 -0.96,2.49 -2.27,4.82 -3.89,6.94 2.85,2.8 6.22,5 9.94,6.5 3.34,1.14 5.38,4.53 4.8,8.01 -0.58,3.5 -3.6,6.05 -7.13,6.05 -0.77,0 -1.54,-0.13 -2.26,-0.37 -6.3,-2.41 -11.98,-6.21 -16.61,-11.11 -2.44,1.06 -5.01,1.76 -7.66,2.11 0.03,4 0.84,7.96 2.42,11.65 1.73,3.56 0.28,7.86 -3.27,9.64 -3.54,1.77 -7.86,0.35 -9.66,-3.19 -2.76,-6.18 -4.08,-12.9 -3.86,-19.67 -2.49,-0.97 -4.84,-2.28 -6.97,-3.89 -2.8,2.84 -5.01,6.22 -6.5,9.93 -1.27,3.79 -5.36,5.83 -9.15,4.56 -3.79,-1.26 -5.83,-5.36 -4.56,-9.15 2.41,-6.29 6.21,-11.97 11.11,-16.6 -1.06,-2.44 -1.77,-5.02 -2.12,-7.66 -3.98,0.01 -7.93,0.83 -11.6,2.4 -1.72,0.85 -3.69,1 -5.52,0.4 -1.82,-0.6 -3.32,-1.9 -4.19,-3.61z",
            BATTERY: "M1012.86 1394.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm-184.36 -579.92l370 0 0 -53.48 -370 0 0 53.48zm303.51 -67.95c0,1.67 0.51,2.18 2.18,2.18l36.11 0c1.67,0 2.18,-0.51 2.18,-2.18l0 -18.04 -40.47 0 0 18.04zm-92.5 0c0,1.67 0.5,2.18 2.16,2.18l36.14 0c1.67,0 2.17,-0.51 2.17,-2.18l0 -18.04 -40.47 0 0 18.04zm-92.49 0c0,1.67 0.5,2.18 2.17,2.18l36.14 0c1.66,0 2.16,-0.51 2.16,-2.18l0 -18.04 -40.47 0 0 18.04zm-92.5 0c0,1.67 0.51,2.18 2.18,2.18l36.11 0c1.67,0 2.18,-0.51 2.18,-2.18l0 -18.04 -40.47 0 0 18.04zm183.81 158.61c8.41,0 33.79,-1.77 37.78,3 5.09,6.1 -0.95,12.25 -5.32,18.81l-53.56 80.34c-2.67,3.99 -5.95,11.35 -11.71,11.35 -4.2,0 -7.98,-3.77 -7.98,-7.98 0,-2.09 13.23,-54.76 14.19,-56.76 -18.33,0 -38.14,4.45 -38.14,-8.85 0,-3.58 12.77,-24.11 15.92,-29.31l34.02 -58.22c1.93,-3.47 6.48,-12.05 8.74,-14.3 5.13,-5.1 13.16,-1.51 13.16,4.28 0,5.87 -6.03,55.4 -7.1,57.64zm-211.93 -78.93l0 206.62c0,2.04 0.62,2.65 2.66,2.65l368.88 0c2.04,0 2.66,-0.61 2.66,-2.65l0 -206.62c0,-2.03 -0.62,-2.65 -2.66,-2.65l-368.88 0c-2.04,0 -2.66,0.62 -2.66,2.65zm168.47 111.73c12.82,0 34.59,-2.79 34.59,7.11 0,6.76 -4.28,14.21 -4.42,21.27 2.45,-1.81 12.59,-18.01 15.24,-21.99 2.64,-3.96 4.75,-7.13 7.45,-11.18 2.06,-3.09 6.62,-8.93 7.44,-12.05 -6.49,0 -13,-0.04 -19.51,0 -14.6,0.11 -14.6,-2.02 -12.24,-21.12 0.38,-3.22 1.53,-9.16 1.62,-12.58 -2.71,1.98 -26.59,43.8 -30.17,50.54zm-16.32 -305.2c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
            "WELDING MACHINES": "M336.41 377.24l-12.79 0c-16.05,0 -29.47,13.47 -31.99,27.51 -2.29,12.78 2.55,49.66 -2.19,57.3 -4.36,7.03 -13.98,7.07 -18.7,0.44 -3.59,-5.04 -2.11,-19.69 -2.11,-28.02 0,-19.84 0,-39.67 0,-59.49 5.82,-0.49 12.44,-7.03 15.62,-10.76 3.64,-4.29 6.98,-11.64 6.98,-19.37l0 -57.99 -67.78 0 0 57.99c0,15.1 13.58,29.37 22.6,30.13 0,10.85 -0.99,83.57 0.88,90.24 4.12,14.86 17.06,23.88 30.63,24.98l5.54 0c7.41,-0.6 14.69,-3.65 20.49,-9.48 6.8,-6.85 10.28,-13.13 10.24,-25.91 -0.05,-11.3 0,-22.6 0,-33.9 -0.01,-20.56 2.54,-21.09 22.58,-21.09l0 67.78 22.6 0 0 22.6 67.78 0 0 -22.6 90.38 0 0 22.6 67.78 0 0 -22.6 24.1 0 0 -248.52 -272.64 0 0 158.16zm86.91 -377.24c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-84.66 67.76c-12.04,0 -24.1,0.03 -36.15,0 -12.31,-0.05 -20.82,3.05 -28.58,7.55 -15,8.68 -27.89,27.41 -27.89,45.16l0 39.17 -22.6 0 0 45.18 67.78 0 0 -45.18 -22.6 0c0,-16.21 -2.21,-41.3 5.11,-52.9 3.11,-4.93 8.65,-10.4 14.25,-12.86 11.98,-5.27 36.33,-3.54 50.68,-3.54 0.8,9.45 16.07,22.6 29.39,22.6 13.65,0 17.1,-3.34 30.02,-7.63l61.32 -21.52c3.05,-1.21 9.32,-3.71 12.58,-3.98 -2.08,-2.85 -19.26,-7.61 -23.78,-9.36l-49.56 -17.47c-8.46,-2.79 -18.01,-7.15 -27.68,-7.82l-4.84 0c-5.65,0.42 -11.28,2.39 -16.69,6.99 -3.73,3.17 -10.27,9.79 -10.76,15.61zm65.53 259.82c0,18.92 22.59,14.43 22.59,3.01 0,-18.92 -22.59,-14.42 -22.59,-3.01zm0 -77.57l90.37 0 0 -22.59 -90.37 0 0 22.59z",
            "TOWED STREET SWEEPER": "M237.28 439.23c24.7,2.37 82.42,39.97 109.99,32.9 27.29,-7.02 17.01,-4.11 41.77,1.32 -7.49,-25.63 -13.6,-19.39 -7.6,-54.95l-12.15 -7.35c7.84,-20.91 19.55,-50.13 39.12,-51.2 -9.44,10.26 -32.47,31.5 -29.95,49.44l22.82 3.75c14.56,-20.24 11.72,-38.99 40.28,-47.53 38.59,-11.53 50.64,24.62 57.76,31.32 30.03,-13.15 -6.26,-17.58 50.91,-29.84 8.26,-1.76 24.69,-3.8 34.55,-7.81l6.65 -5.18c0.35,-0.35 0.75,-0.97 1.12,-1.32 6.73,-6.53 12.79,-7.9 20.3,-2.74l-13.11 2.64c-6.38,0.48 -4.28,1.91 -5.23,9.38 -10.05,1.06 -5.15,0.13 -8.85,3.63 -12.38,-0.8 -40.53,6 -52.92,10.33 -24.43,8.55 -1.33,12.61 -33.56,27.06l3.51 24.64c7.32,-1.41 5.67,-3.08 11.81,-4.18 18.97,-3.45 9.02,6.37 32.74,-10.25l2.75 -2.57c9.22,-6.69 -7.89,3.5 3.22,-2.11 10.08,5.06 6.68,5.95 16,12.24 14.2,-5.29 26.92,-15.05 31.99,-29.84 31.21,3.13 28.84,-13.56 9.16,-22.47l2.15 -6.08 2.36 -2.37c5.52,-13.47 -9.36,-8.99 4.76,-17.74 -9.65,-2.49 -6.48,-0.23 -10.32,-9.39 -2.18,-5.23 -3.3,-10.61 -4.39,-15.85l-73.99 12.77c-7.94,-14.78 -3.82,-18.22 -26.62,-18.12 -19.29,0.1 -54.28,10.29 -69.53,20.19 -10.28,6.68 -17.01,15.05 -25.46,20.16l-0.34 -82.61c-8.78,2.98 -87.74,41.59 -92.91,51.58 -21.4,41.35 -16.52,111.38 -17.83,119.42 -2.78,17 3.99,-11.49 -1.16,4.2l-1.95 3.78c-6.81,-33.38 2.66,-102.88 16.47,-129.03 -11.3,-1.85 -75.82,2.37 -83.15,6.43 -8.68,5.92 -13.81,34.44 -15.11,44.95 -0.58,0.76 -3.8,0.44 -5.43,13.26l2.36 33.48c0.1,-0.39 0.79,1.51 1.49,1.99 1.55,3.63 -6.56,6.02 5.73,2.28l0.83 -0.05 -0.48 0.24c-0.74,0.34 -1.69,1.02 -2.35,1.39 -0.81,0.46 -1.91,2.93 -2.54,2.22 -0.72,-0.81 -1.83,1.7 -2.66,2.65 19,4.67 7.41,6.59 26.99,10.94zm186.04 -439.23c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm143.38 186.47l0.49 -7.19c-5.4,0.92 -5.45,-0.34 -3.81,7.05l-10.07 -0.95 -0.77 12.72 23.83 0.82 0.35 -12.75 -10.02 0.3zm-42.8 -84.05l8.19 -1.56 -0.92 6.76 -16.76 57.87c-27.88,-1.33 -40.14,-5.95 -67.87,1.11 -18.83,4.79 -39.71,11.14 -58.33,14.26 2.31,-12.32 7.12,-35.97 13.63,-44.02 5.89,-6.12 107.87,-32.42 122.06,-34.42zm-2.25 289.07l1.75 -0.02c-15.88,-0.22 -3.72,2.01 -22.06,-0.81l-4.59 22.21c14.14,-4.58 5.12,-5.48 5.12,-5.48 2.23,11.58 8.51,8.37 17.64,7.24l0.7 -0.41 3.41 1.44 -1.97 -24.17zm16.84 23.31c4.36,1.44 0.94,0.64 1.84,-1.68l1.85 1.13 8.86 -1.17c2.23,-4.39 4.36,-0.29 0.21,-7.49 -0.53,-5.23 0.81,-4.79 -2.17,-5.25l0.63 2.82 -1.15 -5.14 0.72 -1.84 5.96 14.95 4.94 -2.57c6.04,-0.09 9.07,-1.38 14.68,-6.31l-5.49 -11.39c3.68,3.79 5.14,5.75 10.14,10.66 -0.16,-18.16 -21.91,-20.5 -14.51,-24.89 6.8,7.67 10.19,10.9 19.04,15.65 -5.77,-15.51 -17.59,-15.58 -17.42,-18.21l3.33 -2.05c2.97,3.36 5.05,5.15 8.84,8.21 5.52,4.46 5.66,4.56 10.13,4.67 -2.94,-10.5 -15.05,-10.79 -16.14,-18.03l-10.41 9.89c-6.24,2.64 -9.69,5.43 -16.36,6.79l2.95 -2.81c0.21,-1.05 0.95,-1.46 1.69,-1.87 5.97,-5.48 5.93,-3.75 9.93,-11.53l-0.09 -5.32 -1.57 -3.75c-3.93,0.6 -3.11,1.63 -3.37,-1.91l-3.92 0.79 -4.05 0.84c-0.02,3.97 0.77,2.4 -4.17,3.02 -16.43,20.69 -39.93,-5.18 -39.79,22.54 10.06,5.52 25.33,1.48 36.71,0.01 9.14,-0.2 3.36,-1.24 6.78,3.79 -9.67,-1.39 -4.26,-1.45 -6.04,2.08l-0.59 -0.59 -6.67 2.19 -4.47 -0.01 -0.39 -0.48 -7.3 0.95 16.84 23.31zm-10.62 0.63l3.36 -0.2 1.88 -0.31 5.38 -0.12 -10.62 0.63zm18.96 -24.14l0.75 0.74 0.08 2 -0.83 -2.74zm0 0l0.83 2.74 -0.83 -2.74zm2.88 11.88l1.33 9.91 -1.33 -9.91zm-326.9 -41.06c-3.06,1.36 -2.65,0.9 -1.54,0.09l1.54 -0.09zm236.28 -1.63c2.64,6.18 6.67,15.39 1.75,23.69 -3.07,5.18 -10.99,8.32 -17.52,4.13 -10.03,-6.45 -11.04,-34.23 15.77,-27.82zm-22.96 42.07c33.94,2.88 42.5,-53.32 6.83,-60.2 -13.28,19.39 -17.33,33.33 -6.83,60.2zm-201.67 -143.87c25.91,0.09 74.05,-1.23 94.85,-13.24 12.65,-7.3 23.3,-11.79 35.36,-18.46 8.87,-4.91 28.16,-13.19 34.79,-20.22 -22.07,0.17 -73.83,9.04 -92.25,16.46 -13.88,5.58 -65.06,28.69 -72.75,35.46zm378.38 31.92c3.48,5.6 2.4,1.03 2.02,10.05l-2.36 2.37 0.34 -12.42zm-278.34 -78.72c27.22,-3.07 47.81,-10.5 79.93,-10.9l0.02 78.85c28.92,-17.44 29.07,-22.33 75.69,-32.55l-8.32 -73.62c-29.44,-4.56 -130.01,25.12 -147.32,38.22zm110.35 124.12c39.7,-17.59 50.65,62 15.59,77.31 -37.54,16.38 -51.82,-61.27 -15.59,-77.31zm-58.02 22.99c-13.43,73.59 52.86,89.53 86.72,72.28 39.2,-19.95 27.85,-108.89 -5.43,-119.3 -37.27,-11.64 -52.97,24.18 -62.25,49.06l-19.04 -2.04zm143.11 -184.76l65.91 -0.33c2.41,11.99 6.79,58.38 4.84,68.46 -14.81,2.63 -51.18,9.76 -63.79,8.51 -2.99,-23.09 -10.37,-53.89 -6.96,-76.64zm13.43 -72.63c30.94,0.85 42.42,8.14 42.56,8.16l9.66 46.89 -64.77 -0.39 12.55 -54.66zm-152.3 31.04c-5.56,46.99 -5.01,24.94 -10.34,55.25 29.69,-4.63 76.39,-25.29 105.4,-18.83l9.81 76.53c21.38,5.57 30.07,-3.81 37.24,18.59 14.05,-1.34 66.96,-10.21 76.42,-15.35 1.74,-23.47 -2.46,-58.79 -6.26,-82.03l-12.53 -54.04c-3.25,-18.67 1.93,-2.03 3.01,-17.44 -15.12,-6.83 -36.05,-8.1 -55.04,-9.49 -43.25,-3.17 -19.53,6.83 -48.42,14.36 -18.58,4.84 -33.85,9.87 -50.81,15.52 -29.21,9.72 -32.89,6.59 -48.48,16.93z",
            COMPACTOR: "M316.51 237.37c-8.45,4.69 -42.76,20.05 -50.36,20.61 0.79,-28.98 4.05,-45.36 -6.16,-66.5 -4.32,-8.96 -4.47,-13.54 -14.96,-8.26 -5.87,11.55 6.33,15.87 6.8,33.43 0.39,15.03 -0.07,30.96 -0.06,46.12 -5.15,10.84 -27.59,7.33 -38.66,28.74 -9.35,18.09 -7.08,39.31 -6.95,61.65 6.41,-3.6 8.55,-7.28 17.12,-12.04 47.22,-26.3 105.28,-3.62 118.87,52.86l3.36 10.5c0.2,0.42 0.52,1.16 0.86,1.7l79.08 -0.04c-10.38,-39.79 -13.17,-63.01 5.42,-100.49 12.81,-25.82 37.82,-51.12 64.7,-60.13 -0.39,-0.4 -1.12,-1.46 -1.32,-1.07 -0.01,0.01 -7.29,-2.32 -9,-15.51 -15.08,-116.42 1.25,-111.86 -75.37,-111.86 -35.12,0.01 -75.2,-9.38 -81.85,24.48 -5.84,29.7 -6.03,65.03 -11.52,95.81zm106.81 -237.37c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-171.07 288.03c-88.74,16.21 -61.8,144.23 23.72,127.71 82.37,-15.91 59.99,-143.02 -23.72,-127.71zm274.54 -96.12c-18.16,3.4 -26.73,6.03 -41,15.09 -103.03,65.37 -42.77,231.82 83.3,207.98 54.21,-10.25 103.54,-64.86 89.19,-133.69 -11.33,-54.27 -63.65,-102.09 -131.49,-89.38zm-90.57 -15.54l34.08 -0.22c1.07,-13.24 -4.72,-46.17 -6.58,-61.53 -3.45,-28.45 2.38,-42.11 -27.23,-42.48l-0.27 104.23zm-153.97 48.33c-2.59,8.86 -3.14,23.39 1.21,30.76 12.4,2.17 12.83,-5.86 12.51,-17.15 -0.34,-12.05 -2.32,-15.51 -13.72,-13.61zm-25.81 -0.04c-9.58,4.74 -7.9,41.9 7.49,30.31 3.97,-2.99 6.72,-37.31 -7.49,-30.31zm151.95 95.38c4.04,-15.91 -5.58,-14.46 -20.37,-14.31 -9.15,0.1 -29.46,-3.29 -35.44,2.91 -18.08,18.73 48.42,12.66 55.81,11.4zm-76.42 -144.02l88 0.23 0.84 -104.05c-83.32,0.24 -75.86,-8.71 -81.15,34.71 -2.33,19.14 -8.21,52.05 -7.69,69.11z",
            GENERATOR: "M206 206.15l0 226.74c0.01,3.48 3.48,6.3 7.77,6.31l7.76 0 0 -239.34 -7.76 0c-4.29,0 -7.76,2.83 -7.77,6.29zm217.32 -206.15c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm139.71 341.96c-8.57,0 -15.52,-5.64 -15.52,-12.59l0 -18.9c0,-6.95 6.95,-12.58 15.52,-12.59l0 -75.58c-8.57,-0.01 -15.52,-5.64 -15.52,-12.6l0 -18.89c0,-6.96 6.95,-12.59 15.52,-12.6l0 -12.6 -131.94 0 0 188.95 131.94 0 0 -12.6 0 0zm-38.81 0l-69.85 0c-4.29,0 -7.76,-2.81 -7.76,-6.29 0,-3.49 3.47,-6.3 7.76,-6.3l69.85 0c4.28,0 7.76,2.81 7.76,6.3 0,3.48 -3.48,6.29 -7.76,6.29zm0 -25.19l-69.85 0c-4.29,0 -7.76,-2.82 -7.76,-6.29 0,-3.48 3.47,-6.31 7.76,-6.31l69.85 0c4.28,0 7.76,2.83 7.76,6.31 0,3.47 -3.48,6.29 -7.76,6.29zm0 -25.18l-69.85 0c-4.29,0 -7.76,-2.83 -7.76,-6.31 0,-3.48 3.47,-6.3 7.76,-6.3l69.85 0c4.28,0 7.76,2.82 7.76,6.3 0,3.48 -3.48,6.31 -7.76,6.31zm-186.28 -62.99l38.81 0c4.29,0 7.76,-2.82 7.76,-6.3l0 -25.19c0,-3.48 -3.47,-6.3 -7.76,-6.3l-38.81 0c-4.28,0 -7.76,2.82 -7.76,6.3l0 25.19c0,3.48 3.48,6.3 7.76,6.3zm294.94 -88.18l-7.76 0 0 239.34 7.76 0c4.29,-0.01 7.76,-2.83 7.77,-6.31l0 -226.74c-0.01,-3.46 -3.48,-6.29 -7.77,-6.29zm-395.84 239.34l372.56 0 0 -239.34 -372.56 0 0 239.34zm15.52 -69.28c0.01,-6.96 6.96,-12.59 15.53,-12.6l0 -75.58c-8.57,-0.01 -15.52,-5.64 -15.53,-12.6l0 -18.89c0.01,-6.96 6.96,-12.59 15.53,-12.6l0 -18.89c0,-1.67 0.82,-3.28 2.27,-4.45 1.45,-1.19 3.43,-1.85 5.49,-1.85l294.94 0c2.06,0 4.04,0.66 5.49,1.85 1.45,1.17 2.27,2.78 2.27,4.45l0 18.89c8.57,0.01 15.52,5.64 15.53,12.6l0 18.89c-0.01,6.96 -6.96,12.59 -15.53,12.6l0 75.58c8.57,0.01 15.52,5.64 15.53,12.6l0 18.89c-0.01,6.95 -6.96,12.59 -15.53,12.59l0 18.9c0,1.67 -0.82,3.27 -2.27,4.46 -1.45,1.18 -3.43,1.84 -5.49,1.84l-294.94 0c-2.06,0 -4.04,-0.66 -5.49,-1.84 -1.45,-1.19 -2.27,-2.79 -2.27,-4.46l0 -18.9c-8.57,0 -15.52,-5.64 -15.53,-12.59l0 -18.89zm15.53 18.89l15.52 0 0 -18.89 -15.52 0 0 18.89zm31.04 -138.56l0 18.89c0,6.96 -6.95,12.59 -15.52,12.6l0 75.58c8.57,0.01 15.52,5.64 15.52,12.6l0 18.89c0,6.95 -6.95,12.59 -15.52,12.59l0 12.6 131.94 0 0 -188.95 -131.94 0 0 12.6c8.57,0.01 15.52,5.64 15.52,12.6zm15.53 6.3c0.01,-10.43 10.42,-18.89 23.28,-18.9l38.81 0c12.86,0.01 23.27,8.47 23.28,18.9l0 25.19c-0.01,10.43 -10.42,18.88 -23.28,18.89l-38.81 0c-12.86,-0.01 -23.27,-8.46 -23.28,-18.89l0 -25.19zm-46.57 12.59l15.52 0 0 -18.89 -15.52 0 0 18.89zm77.96 -107.06l20.57 0c-3.74,-8.05 -5.57,-16.6 -5.39,-25.21 -0.18,-8.59 1.65,-17.13 5.39,-25.18l-20.92 0c-1.89,0.8 -7.76,9.57 -7.76,25.18 0,15.46 5.73,24.19 8.11,25.21zm46.22 25.19l46.57 0 0 -12.6 -46.57 0 0 12.6zm-7.4 -25.19l43.84 0c-3.73,-8.05 -5.56,-16.6 -5.39,-25.21 -0.17,-8.59 1.66,-17.13 5.39,-25.18l-44.2 0c-1.89,0.8 -7.76,9.57 -7.76,25.18 0,15.46 5.73,24.19 8.12,25.21zm178.16 107.06l15.52 0 0 -18.89 -15.52 0 0 18.89zm-116.07 -107.06l20.56 0c-3.73,-8.05 -5.56,-16.6 -5.39,-25.21 -0.17,-8.59 1.66,-17.13 5.39,-25.18l-20.91 0c-1.9,0.8 -7.77,9.57 -7.77,25.18 0,15.46 5.74,24.19 8.12,25.21zm38.44 -0.18c3.77,-3.89 6.05,-8.59 6.58,-13.51 0.09,-0.22 0.19,-0.45 0.31,-0.66 0.25,-0.79 0.72,-1.52 1.37,-2.14 0.6,-0.64 1.37,-1.16 2.23,-1.53 0.88,-0.41 1.85,-0.66 2.86,-0.74 0.28,-0.06 0.58,-0.11 0.87,-0.14l51.7 0c4.42,-1.4 8.38,-3.66 11.49,-6.58 2.21,-1.82 4.15,-3.84 5.79,-6.02l-68.98 0c-0.3,-0.04 -0.61,-0.08 -0.9,-0.15 -0.49,-0.03 -0.98,-0.12 -1.44,-0.24 -0.49,-0.12 -0.96,-0.29 -1.4,-0.5 -0.42,-0.18 -0.81,-0.4 -1.17,-0.64 -0.38,-0.26 -0.74,-0.55 -1.04,-0.87 -0.65,-0.63 -1.12,-1.36 -1.37,-2.15 -0.12,-0.22 -0.23,-0.43 -0.32,-0.65 -0.53,-4.93 -2.81,-9.62 -6.57,-13.52 -2.56,1.67 -7.75,10.31 -7.75,25.01 0,14.73 5.19,23.36 7.74,25.03zm-233.62 302.48l335.31 0c1.2,-4.57 3.65,-8.88 7.17,-12.59l-349.64 0c3.52,3.71 5.98,8.02 7.16,12.59zm311.25 -75.57l15.52 0 0 -18.89 -15.52 0 0 18.89z",
            "HOOK LIFT": "M1012.86 1394.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm181.73 -343.53l0 -25.98c0,-17.67 -10.33,-27.99 -27.98,-27.99l-175.92 0c-23.74,0 -35.99,11.25 -35.99,27.99l0 33.73c0,17.5 11.75,26.23 35.99,26.23l175.92 0c17.65,0 27.98,-11.74 27.98,-33.98zm-383.82 -21.99l-8 0 0 15.99 127.94 0 0 -15.99 -15.99 0 0 -15.99 0 -7.99 15.99 0 0 -16 -127.94 0 0 16 16 0 0 23.98 -8 0zm247.89 -215.9l0 8 0 68.54 0 0 0 0.01 10.19 27.41 -17.15 0 -167.27 -233.05 -36.86 22.22 11.17 19.58 0 103.29 -11.79 0 7.92 55.97 3.48 0 0.39 0 0 16.92c-7.19,3.26 -15.19,10.29 -15.19,22.9 0,8.46 3.31,14.65 8.14,18.77l-43.37 37.36 12.25 0 38.41 -33.09c3.47,1.36 7.19,2.11 10.88,2.11 3.69,0 7.36,-0.98 10.67,-2.77l41.64 33.75 12.48 0 0.09 -0.11 -47.9 -38.82c3.24,-3.91 5.39,-9.15 5.39,-15.86 0,-4.42 -3.58,-8 -7.99,-8 -4.41,0 -7.99,3.58 -7.99,8 0,2.87 -0.78,4.67 -1.79,5.82l-2.19 -1.77c-1.5,-1.21 -3.67,-1.19 -5.13,0.09l-3 2.57c-2.59,-1.19 -4.59,-3.54 -4.59,-8.04 0,-7.24 7.16,-8.99 8.52,-9.25 3.85,-0.66 6.67,-3.99 6.67,-7.89l0 -22.69 5.61 0 3.26 0 11.2 -55.97 -8.07 0 -4 0 0 -58.04 95.95 184.67 0 1.27 0 2.4 0 5.64 31.99 0 0 15.98 111.94 0 8 0 0 -15.98 39.98 0 7.99 0 0 -151.94 -119.93 0zm-69.17 41.59l0.09 0.13 -32.63 21.23 16.78 -43.04 15.76 21.68zm-114.75 -25.59l-4 0 -4 0 0 -88.2 8 15.08 0 73.12zm6.95 -81.52l-13.79 -26.21 21.51 -14.14 -7.72 40.35zm18.72 -24.02l15.34 26.61 -24.76 15.95 9.42 -42.56zm2.46 57.85l23.31 -15.18 -9.12 41.54 -14.19 -26.36zm33.18 -1.63l17.19 25.09 -25.85 16.56 8.66 -41.65zm-2.66 60.76l28.9 -19.79 -16.46 44.06 -12.44 -24.27zm42.77 76.03l-13.93 -24.59 34.6 -24.7 -20.67 49.29zm10.86 17.48l23.65 -50.98 19.25 26.24 -42.9 24.74zm159.59 -40.98l-55.97 0 0 -47.98 55.97 0 0 47.98zm15.99 159.92l-175.91 0 0 -23.99 175.91 0 0 23.99zm-184.05 -420.13c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
            PICKUP: "M1012.86 1394.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm-103.57 -663.24c-16.03,-0.08 -34.37,-1.58 -47.54,4.99 -10.42,5.19 -20.37,16.76 -20.35,32.55 0.02,17.59 0,35.21 0,52.8 0,17.28 -0.63,35.82 0.06,52.94 -13.16,0.62 -25.07,-1.43 -34.28,5.95 -10.48,8.41 -7.86,19.83 -7.92,32.62 -0.13,26.98 -0.26,54.24 0.02,81.22l9.46 0.01c-2.69,-21.08 12.13,-39.27 33.15,-39.33 19.68,-0.06 37.35,18.06 33.3,39.29l115.07 0.04c-2.47,-8.66 -3.92,-13.75 -1.62,-23.5 0.88,-3.8 2.06,-6.71 3.73,-9.98 6.08,-11.95 18.7,-21.01 33.18,-22.52 5.48,-0.57 8.16,0.4 13.13,0.79l0.01 -10.5 17.82 -0.05 0.16 20.72c4.45,4.2 4.94,3.35 9.4,9.54 7.98,11.06 9.05,25.73 2.83,38.21 -1.19,2.4 -2.65,4.21 -3.68,6.26l162.78 0.04 -0.05 -3.32 -139.61 -11.86 -0.22 -236.09c-14.03,-0.74 -29.9,-0.04 -44.1,-0.06 -3.72,0 -6.78,-0.13 -8.7,2.26 -2.13,2.64 -1.07,6.08 0.9,7.74 3.23,2.73 15.81,0.53 20.94,1.47l0.01 133.53 -25.03 0.05c-1.09,-1.37 -33.13,-94.78 -34.82,-99.48 -3.53,-9.86 -13.96,-42.77 -18.08,-49.28 -4.01,-6.35 -10.34,-11.5 -19.16,-14.54 -10.97,-3.77 -20.87,-0.51 -31.56,-2.11 0.04,-3.77 0.52,-8.23 -1.16,-11.32 -1.35,-2.46 -4.4,-4.74 -8.12,-4.82 -4.04,-0.08 -7.05,2.4 -8.36,4.57 -2.37,3.97 -1.03,6.47 -1.59,11.17zm-72.08 228.62c-16.82,2.98 -27,18.7 -24.13,33.54 2.79,14.39 15.95,26.99 33.4,24.19 14.39,-2.31 27.13,-16.19 24.33,-33.64 -2.29,-14.24 -16.32,-27.15 -33.6,-24.09zm189.27 -17.05c-19.4,1.9 -35.94,19.2 -33.72,41.16 1.95,19.22 19.36,35.73 41.18,33.79 19.57,-1.74 36.11,-19.4 33.74,-41.45 -2.08,-19.24 -19.39,-35.64 -41.2,-33.5zm-166.45 -71.18l144.7 0.13c-0.18,-1.86 -5.07,-14.95 -6.03,-17.75l-19.06 -54.55c-2.31,-6.66 -10.57,-31.4 -13.04,-35.62 -8.82,-15.09 -19.17,-15.16 -34.05,-15.16 -9.09,0 -41.82,-0.53 -48.25,0.51 -13.25,2.16 -21.8,11.68 -24.07,25 -0.82,4.82 -0.27,63.13 -0.27,73.18 0,7.35 -0.57,17.23 0.07,24.26zm118.52 -238.81c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
            "STREET SWEEPER": "M1012.86 1394.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm164.17 -564.97c-10.54,-2.46 -10.85,-12.91 0,-12.91 3.76,0 8.22,5.53 1.46,11.75 -0.18,0.16 -0.58,0.47 -0.73,0.59 -0.14,0.13 -0.5,0.37 -0.73,0.57zm-49.04 138.06c28.58,0 28.94,43.87 1.29,43.87 -20.79,0 -29.07,-23.01 -17,-36.36 2.79,-3.09 10.45,-7.51 15.71,-7.51zm-49.03 21.93c0,19.55 12.83,37.08 25.86,43.83 23.6,12.22 55.83,4.72 69.23,-24.87 1.76,-3.9 4.37,-15.1 4.11,-20.07 -1.51,-27.78 -22,-47.92 -52.74,-47.92 -25.04,0 -46.46,23.39 -46.46,49.03zm-99.35 -21.93c28.89,0 28.72,43.87 1.29,43.87 -25.13,0 -30.22,-32.84 -10.36,-41.34 1.08,-0.46 7.79,-2.53 9.07,-2.53zm-49.03 21.93c0,26.98 22.43,49.04 45.16,49.04 16.74,0 27.47,-1.26 40.99,-15.79 7.45,-8 13.63,-23.51 13.04,-34.36 -1.02,-18.84 -11.17,-34.29 -28,-42.98 -30.8,-15.89 -71.19,6.57 -71.19,44.09zm27.09 -67.09l0 11.61c10.88,-0.24 27.15,-8.06 49.51,3.4 6.41,3.28 10.57,6.93 15.35,11.73 16.44,16.49 18.98,36.4 13.85,58.41 6.31,0 13.96,1.27 17.71,0.95 5.18,-0.43 11.12,-0.95 18.42,-0.95 -3.24,-6.73 -2.58,-15.43 -2.58,-23.22 0,-23.04 20.35,-46.13 43.87,-51.61l0 -65.8 -77.92 27.88c-13.57,4.75 -25.15,9.15 -39.02,13.88 -12.87,4.37 -26.18,10.69 -39.19,13.72zm112.26 -140.64c4.43,0 10.14,-0.36 14.35,-0.16 7.17,0.34 5.69,0.9 6.94,7.25 1.53,7.78 3.87,16.2 4.51,23.88l-33.54 0c2.63,-5.49 6.04,-23.68 7.74,-30.97zm-58.07 30.97l-42.57 0c0.12,-5.31 4.09,-18.52 5.81,-25.16 0.92,-3.57 0.43,-5.81 4.51,-5.81l38.71 0c-0.22,9.84 -5.67,21.49 -6.46,30.97zm40.01 0l-28.39 0c0.81,-9.69 5.61,-20.85 6.45,-30.97l28.39 0c-0.83,9.93 -6.21,20.17 -6.45,30.97zm25.8 -65.81l5.16 0c1.86,7.95 3.31,16.56 5.16,24.51l-15.48 0c0.7,-8.35 4.97,-15.91 5.16,-24.51zm-16.77 24.51l-28.39 0c1.27,-2.63 2.4,-9.52 3.35,-13.43 3.26,-13.57 -2.32,-11.08 30.2,-11.08 -0.13,5.88 -3.75,18.46 -5.16,24.51zm-40 0l-41.29 0c1.29,-5.56 4.44,-20.32 6.45,-24.51l41.29 0c-3.04,6.34 -3.3,17.94 -6.45,24.51zm-60.65 -43.86c-5.45,23.4 11.11,14.07 2.04,45.9 -1.55,5.44 -2.55,9.7 -4.16,15.19l-23.68 89.87c7.94,-0.66 10.12,-4.5 18.06,-5.16 1.98,-8.5 4.41,-16.16 6.45,-24.52 1.86,-7.55 5.82,-18.18 6.46,-25.8l43.87 0c-1.7,7.29 -5.11,25.48 -7.75,30.96 13.54,-0.3 13.38,-4.69 17.02,-21.69 2.42,-11.34 -3.58,-9.27 29.44,-9.27 0,7.67 -2.43,9.71 -2.59,16.77 11.51,-5.52 13.85,-1.15 14.2,-16.77 23.34,0 31.86,2.35 52.9,-7.75l-13 -69.57c-1.23,-6.13 -2.18,-19.45 -8.93,-19.45 -16.93,0 -122.73,-1.66 -130.33,1.29zm-50.31 172.89l0 19.36c-7.95,0.17 -13.17,9.31 -23.77,17.52l-55.41 49.15c-5.25,3.3 -10.88,0.42 -20.18,0.42 -2.62,0 -14.02,9.43 -15.48,11.61l107.26 14c22.96,0.72 17.47,-27.47 20.97,-39.31 4.76,-16.08 14.01,-25.61 26.6,-34.04l0 -23.22 40.79 -14.69c14.33,-5.01 26.72,-9.83 40.99,-14.5l40.97 -14.52c6.65,-2.4 12.97,-4.47 19.93,-7.16 7.16,-2.77 13.75,-5.46 21.19,-7.2l0 -32.25c-6.48,0.54 -90.2,31.22 -103.39,35.96 -17.19,6.18 -33.93,12.6 -51.29,18.38l-44.7 15.95c-2.92,1.34 -4.48,0.78 -4.48,4.54zm215.48 -85.16l0 116.13 9.02 0c23.19,0 45.92,22.36 50.32,41.29 5.53,-0.12 21.81,-3.7 27.05,-5.21 4.64,-1.34 5.42,-3.31 8.77,-6.72 13.42,-13.69 12.71,-6.09 8.95,-34.13l-4.94 -44.08c-0.78,-6.78 -1.08,-7.42 -5.25,-11.53 -3.01,-2.95 -14.41,-13.48 -15.87,-16.39 -1.62,-3.23 -6.49,-51.45 -7.09,-58.71 -24.79,0 -15.69,0.35 -37.58,7.58l-33.38 11.77zm-146.87 -182.49c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
            REFRIGERATOR: "M1012.86 1394.09c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm-117.39 -693.94l0 342.36c0,10.8 7.93,20.09 18.42,20.09l5.87 0c0,27.95 -3.52,23.43 39.33,23.43 10.83,0 8.37,-16.57 8.37,-23.43l92.08 0c0,27.73 -2.33,23.43 41.01,23.43 9.17,0 6.69,-18.05 6.69,-23.43l5.87 0c10.49,0 18.42,-9.29 18.42,-20.09l0 -340.69c0,-11.24 -6.33,-20.92 -16.74,-20.92l-202.58 0c-9.66,0 -16.74,9.29 -16.74,19.25zm27.62 141.18l194.77 0c9.06,0 9.06,-12.56 0,-12.56l-193.1 0c-12.1,0 -9.91,12.56 -1.67,12.56zm5.03 -102.68l0 25.96c0,9.04 12.56,9.04 12.56,0l0 -24.28c0,-12.1 -12.56,-9.9 -12.56,-1.68zm0 166.58l0 46.87c0,9.06 12.56,9.06 12.56,0l0 -46.87c0,-9.06 -12.56,-9.06 -12.56,0zm50.43 -272.8c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z",
        };
        this.color = {
            Idle: "#1f5baa",
            Running: "#1eb15d",
            Stop: "#FF0000",
            Yet_to_transmit: "#7d410f",
            "No Transmission": "#000000",
            Online: "#00E1BC",
            Overspeed: "#f28918",
            DoorOpen: "#FF851B",
            HighTemp: "#FF0000",
            PowerFail: "#412525",
            Geofence: "#1f5baa",
            Good: "#1eb15d",
        };
        this.markerInfo = {
            show: false,
            plateNo: "",
            assetAddress: "",
            status: "",
            timeStamp: "",
        };
        this.loadMap = () => {
            setTimeout(() => {
                if (localStorage.map === "GoogleMap") {
                    this.map = this.mapService.loadMap(this.mapElement.nativeElement, { lat: 17.786351, lng: 78.09082 }, true, this.popUp);
                }
                else {
                    this.map = this.mapService.loadMap(this.mapElement.nativeElement, { lat: 17.786351, lng: 78.09082 }, true, this.popUp);
                    this.mapService.setCenter(this.map, { lat: 17.786351, lng: 78.09082 });
                }
                this.mapService.setCenter(this.map, { lat: 17.786351, lng: 78.09082 });
            });
        };
        this.getLiveTrackIcon = (color, path, plateNo) => {
            if (path == undefined || path == null) {
                path = this.vehicleModel["CAR"];
            }
            const svg = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve"  width="8.4666mm" height="8.4666mm" version="1.1" viewBox="0 0 846.66 846.66"  xmlns:xlink="http://www.w3.org/1999/xlink"> <path class="fil0" d="' +
                path +
                '" fill="' +
                color +
                '"/>  ' +
                '     <path fill="' +
                color +
                '"   d="M25.68 -0.01l1276.56 0c14.17,0.02 25.66,17.72 25.66,39.58l0 212.39c0,21.84 -11.49,39.54 -25.66,39.54l-1276.56 0.02c-14.17,-0.02 -25.66,-17.72 -25.66,-39.58l-0.01 -212.39c0.01,-21.84 11.5,-39.54 25.67,-39.54l0 -0.02z"/>  ' +
                '     <g transform="matrix(0.999986 0 0 0.999986 1.97989 -371.852)">  ' +
                '      <text style="font-weight:bold;font-size:176.39px;font-family:Arial" x="46.16" y="577.45"  fill="white">TEXT12345678</text>  ' +
                "     </g>  </svg>";
            const svgNew = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="12mm" height="12mm" version="1.1" viewBox="0 0 736.58 888.98" xmlns:xlink="http://www.w3.org/1999/xlink" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" >' +
                '<path fill="red"  d="M39.74 21.16l657.1 0c9.65,0.01 17.47,12.46 17.47,27.83l0 126.12c0,15.36 -7.82,27.81 -17.47,27.81l-657.1 0.01c-9.65,-0.01 -17.47,-12.46 -17.47,-27.83l-0.01 -126.12c0.01,-15.36 7.83,-27.81 17.48,-27.81l0 -0.01z"/>' +
                '<path fill="red" d="' +
                "M367.8 867.82c6.15,-4.18 17.64,-19.55 24.19,-26.79 3.49,-3.85 5.18,-5.77 8.39,-9.56 10.66,-12.57 20.92,-25.45 31.62,-38.43 21.35,-25.92 39.99,-51.48 60.71,-79.27 35.58,-47.69 82.08,-122.39 102.01,-177 15.4,-42.18 17.68,-73.63 7.29,-119.92 -22.43,-99.94 -115.44,-185.04 -234.1,-184.91 -44.74,0.05 -77.49,10.98 -111.5,27.52 -14.7,7.15 -31.34,19.22 -41.97,28.05 -37.13,30.84 -68.1,77.46 -79.93,129.09 -10.22,44.58 -8.08,78.82 7.08,119.66 25.95,69.9 85.42,158.5 131.33,216.69 5.19,6.58 10.1,12.92 15.28,19.72 24.3,31.88 53.26,64.85 79.6,95.15zm-151.52 -501.33l0 140.51c0,2.98 1.49,4.47 4.47,4.47l159.04 0c2.63,0 3.84,-3.51 3.84,-6.39l0 -136.03c0,-8.12 -5.52,-15.33 -13.42,-15.33l-139.88 0c-4.49,0 -7.3,1.38 -9.75,3.65 -2.08,1.92 -4.3,5.34 -4.3,9.12zm-11.5 178.11c0.52,2.89 1.87,4.56 5.11,4.56l50.46 0c2.79,0 1.31,-4.28 5.74,-12.79 1.12,-2.16 2.44,-3.92 3.83,-5.75 1.51,-1.99 3.16,-3.12 4.48,-5.09l-63.92 -0.06c-2.57,0.05 -2.05,-0.28 -3.67,0.8 -0.76,0.51 -2.03,1.91 -2.03,3.09l0 15.24zm246.54 24.36c-18.38,0 -19.27,-28.75 0.64,-28.75 17.99,0 18.39,28.75 -0.64,28.75zm-0.64 14.69c22.67,0 35.47,-21.9 27.67,-40.45 -7.32,-17.41 -31.2,-25.17 -47.94,-8.58 -4.84,4.79 -8.12,11.7 -8.02,20.19 0.19,15.67 12.79,28.84 28.29,28.84zm-150.73 -14.69c-19.31,0 -19.58,-28.75 0,-28.75 18.23,0 18.2,28.75 0,28.75zm-29.38 -17.89c0,6.49 -0.34,10.68 2.98,16.83 9.13,16.96 30.97,20.14 43.17,10.16 16.27,-13.29 15.96,-33.75 0.34,-46.65 -10.47,-8.65 -27.62,-7.81 -37.72,2.24 -4.15,4.14 -8.77,11.5 -8.77,17.42zm209.5 -101.56l-56.84 0c-2.34,0 -5.11,-1.76 -5.11,-3.83l0 -32.56c0,-3.81 2.58,-5.11 6.38,-5.11l31.29 0c6.65,0 10.56,9.11 16.24,16.97 2.48,3.43 13.15,17.82 13.15,20.07 0,2.5 -2.38,4.46 -5.11,4.46zm51.73 79.85l0 14.77c-0.64,6.6 -4.1,5.03 -19.8,5.03 -7.66,0 -15.33,0 -22.99,0 -0.76,-9.09 -5.83,-16.32 -11.65,-22.2 -13.85,-14.01 -38.08,-13.83 -52.07,-0.01 -6.68,6.6 -9.19,11.67 -11.64,22.21l-76.65 0c0,-11.1 -8.46,-18.14 -12.14,-23.63l71.54 0 0 -132.85c0,-5.77 4.45,-10.22 10.22,-10.22l42.78 0c11.34,0 20.03,4.86 26.3,10.11 1.28,1.07 2.89,3.32 4.1,4.85 1.51,1.93 2.34,3.15 3.72,5.22 6.62,10 25.54,36.9 28.7,43.46 1.86,3.86 3.61,8.86 3.61,14.27l0 65.16c5.76,0 15.97,-1.53 15.97,3.83zm-190.62 -252.35c-102.36,13.78 -189.37,107.21 -173.75,227.67 13.21,101.98 107.94,189.12 227.19,173.89 102.16,-13.05 190.55,-108.24 174.45,-228.04 -13.73,-102.15 -108.02,-189.65 -227.89,-173.52z" +
                '"/> <text style="font-weight:bold;font-size:105.83px;font-family:Arial" fill="#FEFEFE" x="66.89" y="150.15"  >' +
                "TNYHTRERTFHG" +
                "</text></svg>";
            const svgnew2 = ' <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="12mm" height="12mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 1065.5 1091.48"  ' +
                '    xmlns:xlink="http://www.w3.org/1999/xlink">  ' +
                '     <path style="width:500px; heigth:00px" fill="' +
                color +
                '"  d="M532.12 1091.49c7.93,-5.39 22.74,-25.21 31.19,-34.54 4.5,-4.96 6.68,-7.44 10.81,-12.32 13.75,-16.21 26.97,-32.81 40.77,-49.55 27.52,-33.41 51.55,-66.36 78.26,-102.19 45.87,-61.48 105.82,-157.78 131.51,-228.19 19.86,-54.37 22.8,-94.92 9.4,-154.59 -28.91,-128.85 -148.82,-238.55 -301.79,-238.39 -57.68,0.07 -99.9,14.16 -143.75,35.48 -18.95,9.22 -40.4,24.78 -54.11,36.16 -47.86,39.76 -87.79,99.86 -103.04,166.42 -13.17,57.47 -10.42,101.62 9.13,154.27 33.45,90.11 110.12,204.33 169.31,279.35 6.69,8.48 13.02,16.66 19.69,25.42 31.33,41.1 68.67,83.6 102.62,122.67zm-195.33 -646.31l0 181.15c0,3.84 1.92,5.76 5.76,5.76l205.03 0c3.39,0 4.95,-4.53 4.95,-8.24l0 -175.37c0,-10.47 -7.12,-19.76 -17.3,-19.76l-180.33 0c-5.79,0 -9.41,1.78 -12.57,4.71 -2.68,2.47 -5.54,6.88 -5.54,11.75zm-14.83 229.62c0.67,3.72 2.41,5.88 6.59,5.88l65.05 0c3.6,0 1.69,-5.52 7.4,-16.49 1.44,-2.79 3.15,-5.06 4.94,-7.41 1.94,-2.57 4.07,-4.03 5.77,-6.57l-82.4 -0.07c-3.31,0.06 -2.64,-0.36 -4.73,1.03 -0.98,0.66 -2.62,2.46 -2.62,3.98l0 19.65zm317.84 31.4c-23.7,0 -24.85,-37.06 0.82,-37.06 23.19,0 23.71,37.06 -0.82,37.06zm-0.83 18.94c29.23,0 45.73,-28.23 35.67,-52.15 -9.43,-22.44 -40.22,-32.45 -61.8,-11.06 -6.24,6.18 -10.47,15.09 -10.34,26.03 0.24,20.2 16.49,37.18 36.47,37.18zm-194.32 -18.94c-24.89,0 -25.24,-37.06 0,-37.06 23.5,0 23.47,37.06 0,37.06zm-37.87 -23.06c0,8.37 -0.44,13.77 3.84,21.7 11.77,21.86 39.92,25.96 55.65,13.09 20.98,-17.13 20.58,-43.51 0.44,-60.14 -13.5,-11.15 -35.61,-10.06 -48.63,2.89 -5.35,5.34 -11.3,14.83 -11.3,22.46zm270.08 -130.93l-73.28 0c-3.01,0 -6.59,-2.27 -6.59,-4.94l0 -41.97c0,-4.91 3.33,-6.59 8.23,-6.59l40.34 0c8.57,0 13.61,11.74 20.93,21.88 3.2,4.42 16.96,22.97 16.96,25.87 0,3.22 -3.07,5.75 -6.59,5.75zm66.69 102.94l0 19.04c-0.83,8.51 -5.29,6.49 -25.53,6.49 -9.87,0 -19.76,0 -29.64,0 -0.97,-11.72 -7.51,-21.04 -15.01,-28.62 -17.86,-18.06 -49.1,-17.83 -67.13,-0.02 -8.61,8.51 -11.85,15.05 -15.01,28.64l-98.81 0c0,-14.31 -10.91,-23.39 -15.65,-30.47l92.22 0 0 -171.26c0,-7.44 5.74,-13.18 13.18,-13.18l55.15 0c14.62,0 25.82,6.27 33.91,13.03 1.65,1.38 3.72,4.28 5.28,6.26 1.95,2.48 3.02,4.06 4.8,6.73 8.53,12.89 32.92,47.57 37,56.02 2.39,4.98 4.65,11.43 4.65,18.4l0 84c7.43,0 20.59,-1.97 20.59,4.94zm-245.74 -325.32c-131.97,17.76 -244.14,138.21 -224,293.5 17.03,131.47 139.15,243.81 292.89,224.18 131.7,-16.82 245.65,-139.54 224.9,-293.98 -17.7,-131.69 -139.26,-244.5 -293.79,-223.7z"/>  ' +
                '     <path fill="' +
                color +
                '"  d="M22.54 -0.01l1020.43 0c12.44,0.01 22.52,16.06 22.52,35.88l0 162.59c0,19.8 -10.08,35.85 -22.52,35.85l-1020.43 0.01c-12.44,-0.01 -22.52,-16.06 -22.52,-35.87l-0.01 -162.6c0.01,-19.8 10.09,-35.85 22.53,-35.85l0 -0.01z"/>  ' +
                '     <g transform="matrix(0.999986 0 0 0.999986 -476.263 -380.348)">  ' +
                '      <text style="font-weight:bold;font-size:160px;font-family:Arial; text-align:center;align-items: center;" x="532.75" y="545.74" fill="white">' +
                plateNo +
                "</text>  " +
                "    </g>  " +
                "   </svg>  ";
            const svg1 = '   <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="24.714mm" height="15.481mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"  ' +
                '   viewBox="0 0 2471.4 1548.1"  ' +
                '    xmlns:xlink="http://www.w3.org/1999/xlink">  ' +
                '     <path fill="' +
                color +
                '"  d="' +
                path +
                '"/>  ' +
                '     <path fill="' +
                color +
                '"  d="M47.78 0.01l2375.87 0c26.38,0.02 47.76,27.23 47.76,60.82l0 493.09c0,33.57 -21.38,60.78 -47.76,60.78l-2375.87 0.02c-26.39,-0.02 -47.76,-27.23 -47.76,-60.82l-0.03 -493.09c0.03,-33.57 21.4,-60.78 47.79,-60.78l0 -0.02z"/>  ' +
                '     <g transform="matrix(0.999986 0 0 0.999986 9.42214 -382.593)">  ' +
                '      <text style="font-weight:bold;font-size:300px;font-family:\'Arial\'" x="133.12" y="774.05" fill="white" >' +
                plateNo +
                "</text>  " +
                "     </g>  " +
                "   </svg>  ";
            const src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg1);
            return src;
        };
        if (localStorage.map == "GoogleMap") {
            this.mapService = new src_app_services_google_map_service__WEBPACK_IMPORTED_MODULE_10__["GoogleMapService"]();
        }
        else {
            this.mapService = new src_app_services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_11__["OpenlayerMapService"]();
        }
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    loadMark() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
            `/routetrip/getBusstop?schoolId=${this.companyDetail.companyID}&branchId=${this.companyDetail.branchID}&tripId=${this.value}`;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.obj = res;
            this.status == "ad";
            this.mapService.clearClusteringMarkers(this.map, [1]);
            let liveData = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["storageVariable"].dashboardData.liveDatas;
            let googleMapLatLng = [];
            let googleMapMarkerObj = [];
            if (this.status != "Vin") {
                for (let i = 0; i < this.obj; i++) {
                    this.obj.push({
                        stopPointId: this.obj[i].stopPointId,
                        arrivalTime: this.obj[i].arrivalTime,
                        stopName: this.obj[i].stopName,
                        latlng: this.obj[i].latlng,
                    });
                }
                this.obj.forEach((element, index) => {
                    if (element.status !== "Yet_to_transmit") {
                        let latLng = {
                            lat: JSON.parse(element.latlng.split(",")[0]),
                            lng: JSON.parse(element.latlng.split(",")[1].trim(" ")),
                        };
                        const obj = {};
                        obj["img"] = this.getLiveTrackIcon(this.color["Running"], this.vehicleModel["BUS"], element.stopName);
                        obj["plateNo"] = element.stopName;
                        obj["status"] = "stop";
                        obj["timeStamp"] = "";
                        obj["lat"] = JSON.parse(element.latlng.split(",")[0]);
                        obj["lng"] = JSON.parse(element.latlng.split(",")[1].trim(" "));
                        obj["data"] = "element";
                        if (index != 0) {
                            let prevLatLng = {
                                lat: JSON.parse(this.obj[index - 1].latlng.split(",")[0]),
                                lng: JSON.parse(this.obj[index - 1].latlng.split(",")[1].trim(" ")),
                            };
                            var lineArray = [prevLatLng, latLng];
                        }
                        this.liveTrackModel = this.getLiveTrackIcon(this.color["Running"], this.vehicleModel["GENERATOR"], element.stopName);
                        this.mapService.addMarker(this.map, latLng, "livetrack", this.liveTrackModel);
                        if (localStorage.map == "GoogleMap") {
                            googleMapLatLng.push(latLng);
                            googleMapMarkerObj.push(obj);
                        }
                        else {
                            this.mapService.addClusteringMarkers(this.map, latLng, obj);
                        }
                    }
                });
                if (localStorage.map == "GoogleMap") {
                    this.mapService.addClusteringMarkers(this.map, googleMapLatLng, googleMapMarkerObj);
                }
            }
            else if (this.status == "Vin") {
                let element = JSON.parse(localStorage.gridData);
                for (let i = 0; i < element.length; i++) {
                    if (element[i].status !== "Yet_to_transmit") {
                        let latLng = {
                            lat: element[i].latitude,
                            lng: element[i].longitude,
                        };
                        const obj = {};
                        obj["img"] = this.getLiveTrackIcon(this.color[element[i].status], this.vehicleModel[element[i].icon], element.plateNo);
                        obj["plateNo"] = element[i].plateNo;
                        obj["status"] = element[i].status;
                        obj["timeStamp"] = element[i].timeStamp;
                        obj["lat"] = element[i].latitude;
                        obj["lng"] = element[i].longitude;
                        obj["data"] = element;
                        if (localStorage.map == "GoogleMap") {
                            googleMapLatLng.push(latLng);
                            googleMapMarkerObj.push(obj);
                        }
                        else {
                            this.mapService.addClusteringMarkers(this.map, latLng, obj);
                        }
                    }
                }
                if (localStorage.map == "GoogleMap") {
                    this.mapService.addClusteringMarkers(this.map, googleMapLatLng, googleMapMarkerObj);
                }
            }
            this.mapService.fitBoundsForCluster(this.map);
            this.commonService.dismissLoader();
        });
    }
    submit() {
        if (this.serviceName != "available") {
            var data = {
                stopName: this.stopDetails.value.busStop,
                arrivalTime: this.stopDetails.value.arrivalTime,
                orderNo: "1",
                latlng: this.geoFenceForRef,
                lastUpdBy: this.companyDetail.userId,
                schoolId: this.companyDetail.companyID,
                branchId: this.companyDetail.branchID,
            };
            Object.keys(data).forEach((key) => (data[key] == null || data[key] == "") && delete data[key]);
            data["tripId"] = this.value;
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/routetrip/addBusstop";
            this.ajaxService.ajaxPostMethod(url, data).subscribe((res) => {
                if (res.message == "Added Successfully") {
                    this.commonService.presentToast("Bus Stop Details Added successfully.");
                    this.modalController.dismiss();
                    this.loadMark();
                    this.getLiveTrackIcon;
                }
                else {
                    this.commonService.presentToast("Please check the values.");
                }
            });
        }
        else if (this.serviceName == "available") {
            var datas = {
                stopPointId: this.value.stopPointId,
                stopName: this.stopDetails.value.busStop,
                arrivalTime: this.stopDetails.value.arrivalTime,
                orderNo: "1",
                latlng: this.stopDetails.value.latlng,
                lastUpdBy: this.companyDetail.userId,
                schoolId: this.companyDetail.companyID,
                branchId: this.companyDetail.branchID,
            };
            Object.keys(datas).forEach((key) => (datas[key] == null || datas[key] == "") && delete datas[key]);
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/routetrip/updateBusstop";
            this.ajaxService.ajaxPostMethod(url, datas).subscribe((res) => {
                if (res.message == "Updated Successfully") {
                    this.commonService.presentToast("Bus Stop Details Updated Successfully.");
                    this.stopDetails.reset();
                    this.modalController.dismiss();
                }
                else {
                    this.commonService.presentToast("Try again later.");
                }
            });
        }
    }
    createForm() {
        this.stopDetails = this.formBuilder.group({
            busStop: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            latlng: [""],
            arrivalTime: ["00:00:00", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    editForm() {
        if (this.value) {
            if (this.value.submit == "available") {
                this.serviceName = "available";
                this.stopDetails.patchValue({
                    busStop: this.value.stopName,
                    arrivalTime: this.value.arrivalTime,
                    latlng: this.value.editlatlng,
                });
            }
        }
    }
    currentLocation(mode) {
        this.geolocation
            .getCurrentPosition()
            .then((resp) => {
            this.stopDetails.patchValue({
                latlng: resp.coords.latitude + "," + resp.coords.longitude,
            });
        })
            .catch((error) => { });
    }
    mapLocation(mode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _latlong_latlong_component__WEBPACK_IMPORTED_MODULE_7__["LatlongComponent"],
                componentProps: {
                    currentLocation: this.stopDetails.value.latlng != undefined ||
                        (this.stopDetails.value.latlng != undefined) != null
                        ? this.stopDetails.value.latlng != undefined
                        : "",
                },
            });
            modal.onDidDismiss().then(() => this.mapReturnFunction(mode));
            return yield modal.present();
        });
    }
    mapReturnFunction(mode) {
        this.stopDetails.patchValue({
            latlng: localStorage.getItem("mapLocationPicker"),
        });
        this.geoFenceForRef = localStorage.latLongPickerGeoFence;
    }
    ngOnInit() {
        this.companyDetail = {
            branchID: localStorage.getItem("corpId"),
            companyID: localStorage.getItem("corpId"),
            userId: localStorage.getItem("userName"),
        };
        this.createForm();
        this.editForm();
    }
};
RouteAddtionalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"] },
    { type: src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_8__["AuthMapService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RouteAddtionalComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapElement", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RouteAddtionalComponent.prototype, "mapElement", void 0);
RouteAddtionalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-route-addtional",
        template: __webpack_require__(/*! raw-loader!./route-addtional.component.html */ "./node_modules/raw-loader/index.js!./src/app/skt/route/route-addtional/route-addtional.component.html"),
        styles: [__webpack_require__(/*! ./route-addtional.component.scss */ "./src/app/skt/route/route-addtional/route-addtional.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"],
        src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_8__["AuthMapService"]])
], RouteAddtionalComponent);



/***/ }),

/***/ "./src/app/skt/route/route-common/route-common.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/skt/route/route-common/route-common.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".route-wrapper {\n  padding: 5px 10px 0;\n}\n\n.grid_Container {\n  margin: 0px 10px 0px;\n  padding: 0;\n}\n\n.header-section {\n  background-color: #e8e8e8;\n  border: 1px solid #cac2c2;\n}\n\n#export-wrapper {\n  text-align: right;\n  background-color: #e8e8e8;\n  height: 42px;\n  border-top: 1px solid gainsboro;\n  margin: 0px 10px 0px;\n  border-left: 2px solid #c7c7c7;\n}\n\n#btn-wrapper {\n  text-align: center;\n  padding: 0px;\n  font-size: 20px;\n  font-weight: 700;\n  height: 40px;\n}\n\n.toolbar-row {\n  height: 40px;\n  width: 40px;\n  display: inline-block;\n  margin: 0px;\n  border: 1px solid #b9b7b7;\n  padding: 5px;\n}\n\n.toolbar-row:hover {\n  background-color: whitesmoke;\n}\n\n.route-btn {\n  width: 80px;\n  height: 30px;\n  margin: 5px 10px;\n  font-size: 12px;\n}\n\n.route-card-container {\n  padding: 10px;\n  text-align: center;\n  color: gray;\n}\n\n.route-card-container * {\n  padding: 1px;\n  font-size: 11px;\n}\n\n.clock-icon {\n  margin-right: 5px;\n  vertical-align: middle;\n}\n\n#inner-route-card {\n  background: white;\n  margin: 0px;\n  padding: 3px;\n  box-sizing: none;\n  box-shadow: none;\n}\n\n.time {\n  padding-left: 14px !important;\n  line-height: 6px;\n}\n\n.tripName {\n  font-size: 15px !important;\n  padding: 5px 0 !important;\n}\n\n.time-header {\n  font-family: ui-monospace;\n}\n\n.fab-col-btn {\n  height: 30px;\n  width: 30px;\n}\n\n#add-fab-btn {\n  position: fixed;\n  bottom: 56px;\n  right: 0;\n  width: 50px;\n  height: 50px;\n}\n\n#arrow-icon {\n  font-size: x-large;\n}\n\n.header-row {\n  padding-top: 9px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t0L3JvdXRlL3JvdXRlLWNvbW1vbi9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXHNrdFxccm91dGVcXHJvdXRlLWNvbW1vblxccm91dGUtY29tbW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9za3Qvcm91dGUvcm91dGUtY29tbW9uL3JvdXRlLWNvbW1vbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLG1CQUFBO0FDQ0w7O0FEQ0U7RUFDRyxvQkFBQTtFQUNBLFVBQUE7QUNFTDs7QURBRTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUNHSjs7QURERTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0FDSUo7O0FERkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDS0o7O0FESEU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ01KOztBREpDO0VBQ0MsNEJBQUE7QUNPRjs7QURMQztFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDUUg7O0FESkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDT0Y7O0FETkU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ1FKOztBRExBO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtBQ1FGOztBRE5BO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNTRjs7QURQQTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7QUNVRjs7QURQQTtFQUNFLDBCQUFBO0VBQ0EseUJBQUE7QUNVRjs7QURSQTtFQUNFLHlCQUFBO0FDV0Y7O0FEVEE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ1lGOztBRFRBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNZRjs7QURUQTtFQUNFLGtCQUFBO0FDWUY7O0FEVEE7RUFDRSwyQkFBQTtBQ1lGIiwiZmlsZSI6InNyYy9hcHAvc2t0L3JvdXRlL3JvdXRlLWNvbW1vbi9yb3V0ZS1jb21tb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm91dGUtd3JhcHBlcntcclxuICAgICBwYWRkaW5nOjVweCAxMHB4IDA7XHJcbiAgfVxyXG4gIC5ncmlkX0NvbnRhaW5lcntcclxuICAgICBtYXJnaW46IDBweCAxMHB4IDBweDsgXHJcbiAgICAgcGFkZGluZzogMDsgXHJcbiAgfVxyXG4gIC5oZWFkZXItc2VjdGlvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjMmMyO1xyXG4gIH1cclxuICAjZXhwb3J0LXdyYXBwZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ2FpbnNib3JvO1xyXG4gICAgbWFyZ2luOiAwcHggMTBweCAwcHg7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNjN2M3Yzc7XHJcbiAgfVxyXG4gICNidG4td3JhcHBlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG4gIC50b29sYmFyLXJvd3tcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiOWI3Yjc7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiB9XHJcbiAudG9vbGJhci1yb3c6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4gLnJvdXRlLWJ0bntcclxuICAgd2lkdGg6IDgwcHg7XHJcbiAgIGhlaWdodDogMzBweDtcclxuICAgbWFyZ2luOiA1cHggMTBweDtcclxuICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4vL01vYmlsZSBWaWV3XHJcbi5yb3V0ZS1jYXJkLWNvbnRhaW5lcntcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjpncmF5O1xyXG4gICp7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG59XHJcbi5jbG9jay1pY29ue1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuI2lubmVyLXJvdXRlLWNhcmR7XHJcbiAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAzcHg7IFxyXG4gIGJveC1zaXppbmc6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4udGltZXtcclxuICBwYWRkaW5nLWxlZnQ6IDE0cHggIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogNnB4O1xyXG4gIFxyXG59XHJcbi50cmlwTmFtZXtcclxuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA1cHggMCAhaW1wb3J0YW50O1xyXG59XHJcbi50aW1lLWhlYWRlcntcclxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlO1xyXG59XHJcbi5mYWItY29sLWJ0bntcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6MzBweDtcclxuICBcclxufVxyXG4jYWRkLWZhYi1idG57XHJcbiAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgYm90dG9tOjU2cHg7XHJcbiAgcmlnaHQ6MDtcclxuICB3aWR0aDo1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuI2Fycm93LWljb257XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4uaGVhZGVyLXJvd3tcclxuICBwYWRkaW5nLXRvcDogOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLnJvdXRlLXdyYXBwZXIge1xuICBwYWRkaW5nOiA1cHggMTBweCAwO1xufVxuXG4uZ3JpZF9Db250YWluZXIge1xuICBtYXJnaW46IDBweCAxMHB4IDBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmhlYWRlci1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhYzJjMjtcbn1cblxuI2V4cG9ydC13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGhlaWdodDogNDJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdhaW5zYm9ybztcbiAgbWFyZ2luOiAwcHggMTBweCAwcHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2M3YzdjNztcbn1cblxuI2J0bi13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4udG9vbGJhci1yb3cge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjliN2I3O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi50b29sYmFyLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5yb3V0ZS1idG4ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDVweCAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5yb3V0ZS1jYXJkLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGdyYXk7XG59XG4ucm91dGUtY2FyZC1jb250YWluZXIgKiB7XG4gIHBhZGRpbmc6IDFweDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uY2xvY2staWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4jaW5uZXItcm91dGUtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogM3B4O1xuICBib3gtc2l6aW5nOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4udGltZSB7XG4gIHBhZGRpbmctbGVmdDogMTRweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogNnB4O1xufVxuXG4udHJpcE5hbWUge1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4IDAgIWltcG9ydGFudDtcbn1cblxuLnRpbWUtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZTtcbn1cblxuLmZhYi1jb2wtYnRuIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuI2FkZC1mYWItYnRuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDU2cHg7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4jYXJyb3ctaWNvbiB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cblxuLmhlYWRlci1yb3cge1xuICBwYWRkaW5nLXRvcDogOXB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/skt/route/route-common/route-common.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/skt/route/route-common/route-common.component.ts ***!
  \******************************************************************/
/*! exports provided: RouteCommonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteCommonComponent", function() { return RouteCommonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var _bus_stop_bus_stop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bus-stop/bus-stop.component */ "./src/app/skt/route/bus-stop/bus-stop.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _route_form_route_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../route-form/route-form.component */ "./src/app/skt/route/route-form/route-form.component.ts");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _route_addtional_route_addtional_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../route-addtional/route-addtional.component */ "./src/app/skt/route/route-addtional/route-addtional.component.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");












let RouteCommonComponent = class RouteCommonComponent {
    constructor(modalController, formBuilder, platform, commonService, ajaxService, alertController, ete) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.alertController = alertController;
        this.ete = ete;
        this.head = [
            "Route Name",
            "Plate No",
            "Trip",
            "Trip Name",
            "Trip Start Time",
            "Trip End Time",
        ];
        this.pdfdatas = [];
        this.exportTitle = "Route & Trip report";
        this.obj = [];
    }
    deletebtn() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.selectedRow) {
                const alert = yield this.alertController.create({
                    header: "Delete ",
                    backdropDismiss: false,
                    message: "Are you sure you want to delete?",
                    buttons: [
                        {
                            text: "Cancel",
                            role: "cancel",
                            handler: (data) => { },
                        },
                        {
                            text: "Ok",
                            handler: (data) => {
                                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
                                    "/routetrip/deleteRoute?tripid=" +
                                    this.selectedRow.tripId;
                                this.ajaxService.ajaxDeleteWithString(url).subscribe((res) => {
                                    if (res.statusText == "OK") {
                                        this.commonService.presentToast("Deleted successfully");
                                        this.myGrid.clearselection();
                                        this.getData();
                                        this.selectedRow = "";
                                    }
                                    else {
                                        this.commonService.presentToast("Try again");
                                    }
                                });
                            },
                        },
                    ],
                });
                yield alert.present();
            }
            else {
                this.commonService.presentToast("Please select a row to delete");
            }
        });
    }
    //   btnOnClick() {
    //     let gridContent = this.myGrid.exportdata('html');
    //     let newWindow = window.open('', '', 'width=800, height=500'),
    //         document = newWindow.document.open(),
    //         pageContent =
    //             '<!DOCTYPE html>\n' +
    //             '<html>\n' +
    //             '<head>\n' +
    //             '<meta charset="utf-8" />\n' +
    //             '<title>Parent Details</title>\n' +
    //             '</head>\n' +
    //             '<body>\n' + gridContent + '\n</body>\n</html>';
    //     document.write(pageContent);
    //     document.close();
    //     newWindow.print();
    // };
    openBusStopModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _bus_stop_bus_stop_component__WEBPACK_IMPORTED_MODULE_4__["BusStopComponent"],
                cssClass: "bus-route-css",
                componentProps: {
                    value: this.selectedRow,
                },
            });
            return yield modal.present();
        });
    }
    routeAdditionalModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _route_addtional_route_addtional_component__WEBPACK_IMPORTED_MODULE_10__["RouteAddtionalComponent"],
                cssClass: "route-css",
                componentProps: {
                    value: this.selectedRow,
                },
            });
            return yield modal.present();
        });
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row;
    }
    editRouteModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.selectedRow) {
                this.selectedRow["submit"] = "available";
                const modal = yield this.modalController.create({
                    component: _route_form_route_form_component__WEBPACK_IMPORTED_MODULE_6__["RouteFormComponent"],
                    cssClass: "custom-modal",
                    componentProps: {
                        value: this.selectedRow,
                    },
                });
                modal.onDidDismiss().then(() => {
                    this.myGrid.clearselection();
                    this.selectedRow = "";
                    this.getData();
                });
                return yield modal.present();
            }
            else {
                this.commonService.presentToast("Please select a row to edit");
                return "";
            }
        });
    }
    openRouteModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _route_form_route_form_component__WEBPACK_IMPORTED_MODULE_6__["RouteFormComponent"],
                cssClass: "custom-modal",
            });
            modal.onDidDismiss().then(() => {
                this.myGrid.clearselection();
                this.selectedRow = "";
                this.getData();
            });
            return yield modal.present();
        });
    }
    createPdf() {
        this.commonService.createPdf(this.head, this.pdfdatas, this.exportTitle, this.myPlatform, "Route & Trip report");
    }
    exportToExcel() {
        let reportData = {
            title: "Route & Trip report",
            data: this.pdfdatas,
            headers: this.head,
        };
        this.ete.exportExcel(reportData);
    }
    getData() {
        const companyDetail = {
            branchID: localStorage.getItem("corpId"),
            companyID: localStorage.getItem("corpId"),
            userId: localStorage.getItem("userName"),
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            `/routetrip/getRoute?companyId=${companyDetail.companyID}&branchId=${companyDetail.branchID}`;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.obj = res;
            var detail = res;
            this.pdfdatas = [];
            for (var i = 0; i < detail.length; i++) {
                this.pdfdatas.push([
                    detail[i].routeName,
                    detail[i].plateNo,
                    detail[i].trip,
                    detail[i].tripName,
                    detail[i].tripStarttime,
                    detail[i].tripEndtime,
                ]);
            }
            this.renderer = (row, column, value) => {
                if (value == "" || null || undefined) {
                    return "---";
                }
                else {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto"  >' +
                        value +
                        "</span>");
                }
            };
            this.source = { localdata: this.obj };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            this.columns = [
                {
                    text: "Route Name",
                    datafield: "routeName",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: "14%",
                },
                {
                    text: "Plate No",
                    datafield: "plateNo",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: "14%",
                },
                {
                    text: "Trip",
                    datafield: "trip",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: "14%",
                },
                {
                    text: "Trip Name",
                    datafield: "tripName",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: "14%",
                },
                //  { text: 'Route Type',datafield:'routetype',cellsrenderer:this.renderer,cellsalign: 'center', align: 'center'},
                {
                    text: "Trip Start Time",
                    datafield: "showtripStarttime",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: "14%",
                },
                {
                    text: "Trip End Time",
                    datafield: "showtripEndtime",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: "14%",
                },
                {
                    text: "Action",
                    datafield: "action",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: "16%",
                    cellsrenderer: () => {
                        return "Show Bus Stop";
                    },
                    buttonclick: (row) => {
                        this.openBusStopModel();
                    },
                },
            ];
        });
    }
    ngAfterViewInit() {
        this.getData();
        this.myGrid.showloadelement();
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.page = localStorage.getItem("pageSelector");
        this.getData();
    }
    getBack() {
        this.modalController.dismiss();
    }
};
RouteCommonComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_7__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_11__["ExportExcelService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
], RouteCommonComponent.prototype, "myGrid", void 0);
RouteCommonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-route-common",
        template: __webpack_require__(/*! raw-loader!./route-common.component.html */ "./node_modules/raw-loader/index.js!./src/app/skt/route/route-common/route-common.component.html"),
        styles: [__webpack_require__(/*! ./route-common.component.scss */ "./src/app/skt/route/route-common/route-common.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_7__["AjaxService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_11__["ExportExcelService"]])
], RouteCommonComponent);



/***/ }),

/***/ "./src/app/skt/route/route-form/route-form.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/skt/route/route-form/route-form.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* main .scroll-y {\n  overflow-y: none !important;\n}\n* .scroll-y {\n  overflow-y: none !important;\n}\n.routeTripcontainer {\n  width: 95%;\n  height: 80%;\n  margin: -20px auto 32px;\n  padding: 7px 0;\n  background-color: #f3f3f3;\n}\n.routeTripbtn {\n  height: 30px;\n  font-size: small;\n  width: 100px;\n  margin: 10px auto 0;\n  padding: 2px;\n  text-align: center;\n}\n.popup-head {\n  color: #3880ff;\n  margin-left: -15px;\n  text-align: -webkit-center;\n  padding-left: 0px;\n}\n.checkbox-inline {\n  position: relative;\n  padding-left: 15px;\n  margin-bottom: 0;\n  font-weight: 400;\n  font-size: 11px;\n  vertical-align: middle;\n  cursor: pointer;\n  display: inline-block !important;\n  margin-left: 23px !important;\n}\n.day-input {\n  position: absolute;\n  margin-left: -20px;\n}\n.checkbox-list {\n  font-size: 13px;\n  background-color: white;\n  margin: 0px;\n  border: 1px solid #cfe8ec;\n  border-radius: 5px;\n}\n#checkbox-icon {\n  font-size: 22px;\n  margin: 0px 22px 0 0px;\n  vertical-align: middle;\n  color: #3880ff;\n  border-right: 1px solid #efedeb;\n  padding: 2px 8px;\n}\n.set-size {\n  padding: 0 44px 0 0 !important;\n}\n.label-column {\n  margin: auto;\n  padding-left: 15px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6b6969;\n}\n.select-container {\n  font-size: 12px;\n}\n.stu-icon,\n.stu-svg {\n  font-size: 32px;\n  border-right: 1px solid #efedeb;\n  padding-right: 10px;\n  margin: 0px 15px 5px 0px;\n  color: #3880ff;\n}\n.stu-svg {\n  padding: 0px 10px 0px 0px;\n  height: 23px;\n  width: 42px;\n  margin: 5px 15px 7px 8px;\n}\nselect.stu-input {\n  outline: none;\n}\n.select-input,\n.select-routeinfo {\n  border: 0;\n  margin: 15px;\n  width: 90%;\n  color: #555757;\n  background: none;\n}\n.select-routeinfo {\n  width: 100%;\n}\nselect.option-body:hover {\n  outline: none;\n}\n.option-head {\n  background-color: darkgray;\n}\n.route-info {\n  margin: 0px;\n}\noption:focus {\n  outline: none;\n}\n.stu-select-box {\n  border: 1px solid #cfe8ec;\n  height: 48px;\n  border-radius: 7px;\n  background: white;\n}\n.text-select-box {\n  height: 40px;\n  padding: 0 12px;\n}\n.route-items {\n  padding: 0px;\n  border: 1px solid #cfe8ec;\n  border-radius: 7px;\n  height: 40px;\n  background-color: #fcfcfc;\n}\n.route-input {\n  --placeholder-color: rgb(117, 118, 119);\n  --padding-top: 0;\n  font-size: 12px;\n}\n.stu-col1-img {\n  padding: 0px 15px 0px 0px;\n  height: 30px;\n  width: 42px;\n  margin: 5px 15px 7px 0px;\n  border-right: 1px solid #efedeb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t0L3JvdXRlL3JvdXRlLWZvcm0vRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxza3RcXHJvdXRlXFxyb3V0ZS1mb3JtXFxyb3V0ZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9za3Qvcm91dGUvcm91dGUtZm9ybS9yb3V0ZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsMkJBQUE7QUNBSjtBREVFO0VBQ0UsMkJBQUE7QUNBSjtBREdBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0FGO0FER0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREdBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQ0FGO0FERUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0FDQ0Y7QURDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNFRjtBREFBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNHRjtBRERBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQ0lGO0FERkE7RUFDRSw4QkFBQTtBQ0tGO0FESEE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDTUY7QURIQTtFQUNFLGVBQUE7QUNNRjtBREpBOztFQUVFLGVBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDT0Y7QURKQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBQ09GO0FETEE7RUFDRSxhQUFBO0FDUUY7QUROQTs7RUFFRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNTRjtBRFBBO0VBQ0UsV0FBQTtBQ1VGO0FEUkE7RUFDRSxhQUFBO0FDV0Y7QURUQTtFQUNFLDBCQUFBO0FDWUY7QURWQTtFQUNFLFdBQUE7QUNhRjtBRFhBO0VBQ0UsYUFBQTtBQ2NGO0FEWkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDZUY7QURaQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDZUY7QURaQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDZUY7QURiQTtFQUNFLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDZ0JGO0FEZEE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQkFBQTtBQ2lCRiIsImZpbGUiOiJzcmMvYXBwL3NrdC9yb3V0ZS9yb3V0ZS1mb3JtL3JvdXRlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBtYWluIC5zY3JvbGwteSB7XHJcbiAgICBvdmVyZmxvdy15OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zY3JvbGwteSB7XHJcbiAgICBvdmVyZmxvdy15OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5yb3V0ZVRyaXBjb250YWluZXIge1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgbWFyZ2luOiAtMjBweCBhdXRvIDMycHg7XHJcbiAgcGFkZGluZzogN3B4IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxufVxyXG5cclxuLnJvdXRlVHJpcGJ0biB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvIDA7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBvcHVwLWhlYWQge1xyXG4gIGNvbG9yOiAjMzg4MGZmO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG4uY2hlY2tib3gtaW5saW5lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDIzcHggIWltcG9ydGFudDtcclxufVxyXG4uZGF5LWlucHV0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG59XHJcbi5jaGVja2JveC1saXN0IHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmZThlYztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuI2NoZWNrYm94LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBtYXJnaW46IDBweCAyMnB4IDAgMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY29sb3I6ICMzODgwZmY7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VmZWRlYjtcclxuICBwYWRkaW5nOiAycHggOHB4O1xyXG59XHJcbi5zZXQtc2l6ZSB7XHJcbiAgcGFkZGluZzogMCA0NHB4IDAgMCAhaW1wb3J0YW50O1xyXG59XHJcbi5sYWJlbC1jb2x1bW4ge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM2YjY5Njk7XHJcbn1cclxuXHJcbi5zZWxlY3QtY29udGFpbmVyIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnN0dS1pY29uLFxyXG4uc3R1LXN2ZyB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZmVkZWI7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBtYXJnaW46IDBweCAxNXB4IDVweCAwcHg7XHJcbiAgY29sb3I6ICMzODgwZmY7XHJcbn1cclxuXHJcbi5zdHUtc3ZnIHtcclxuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMHB4O1xyXG4gIGhlaWdodDogMjNweDtcclxuICB3aWR0aDogNDJweDtcclxuICBtYXJnaW46IDVweCAxNXB4IDdweCA4cHg7XHJcbn1cclxuc2VsZWN0LnN0dS1pbnB1dCB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uc2VsZWN0LWlucHV0LFxyXG4uc2VsZWN0LXJvdXRlaW5mbyB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG1hcmdpbjogMTVweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGNvbG9yOiByZ2IoODUsIDg3LCA4Nyk7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4uc2VsZWN0LXJvdXRlaW5mbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuc2VsZWN0Lm9wdGlvbi1ib2R5OmhvdmVyIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5vcHRpb24taGVhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XHJcbn1cclxuLnJvdXRlLWluZm8ge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbm9wdGlvbjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uc3R1LXNlbGVjdC1ib3gge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmU4ZWM7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLnRleHQtc2VsZWN0LWJveCB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmc6IDAgMTJweDtcclxufVxyXG5cclxuLnJvdXRlLWl0ZW1zIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmZThlYztcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XHJcbn1cclxuLnJvdXRlLWlucHV0IHtcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2IoMTE3LCAxMTgsIDExOSk7XHJcbiAgLS1wYWRkaW5nLXRvcDogMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnN0dS1jb2wxLWltZyB7XHJcbiAgcGFkZGluZzogMHB4IDE1cHggMHB4IDBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgbWFyZ2luOiA1cHggMTVweCA3cHggMHB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZmVkZWI7XHJcbn1cclxuIiwiKiBtYWluIC5zY3JvbGwteSB7XG4gIG92ZXJmbG93LXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbiogLnNjcm9sbC15IHtcbiAgb3ZlcmZsb3cteTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucm91dGVUcmlwY29udGFpbmVyIHtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA4MCU7XG4gIG1hcmdpbjogLTIwcHggYXV0byAzMnB4O1xuICBwYWRkaW5nOiA3cHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbn1cblxuLnJvdXRlVHJpcGJ0biB7XG4gIGhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDEwcHggYXV0byAwO1xuICBwYWRkaW5nOiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBvcHVwLWhlYWQge1xuICBjb2xvcjogIzM4ODBmZjtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5jaGVja2JveC1pbmxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMjNweCAhaW1wb3J0YW50O1xufVxuXG4uZGF5LWlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG59XG5cbi5jaGVja2JveC1saXN0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmU4ZWM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI2NoZWNrYm94LWljb24ge1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbjogMHB4IDIycHggMCAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjMzg4MGZmO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWZlZGViO1xuICBwYWRkaW5nOiAycHggOHB4O1xufVxuXG4uc2V0LXNpemUge1xuICBwYWRkaW5nOiAwIDQ0cHggMCAwICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbC1jb2x1bW4ge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzZiNjk2OTtcbn1cblxuLnNlbGVjdC1jb250YWluZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5zdHUtaWNvbixcbi5zdHUtc3ZnIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWZlZGViO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW46IDBweCAxNXB4IDVweCAwcHg7XG4gIGNvbG9yOiAjMzg4MGZmO1xufVxuXG4uc3R1LXN2ZyB7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAwcHg7XG4gIGhlaWdodDogMjNweDtcbiAgd2lkdGg6IDQycHg7XG4gIG1hcmdpbjogNXB4IDE1cHggN3B4IDhweDtcbn1cblxuc2VsZWN0LnN0dS1pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zZWxlY3QtaW5wdXQsXG4uc2VsZWN0LXJvdXRlaW5mbyB7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAxNXB4O1xuICB3aWR0aDogOTAlO1xuICBjb2xvcjogIzU1NTc1NztcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLnNlbGVjdC1yb3V0ZWluZm8ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuc2VsZWN0Lm9wdGlvbi1ib2R5OmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm9wdGlvbi1oZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XG59XG5cbi5yb3V0ZS1pbmZvIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbm9wdGlvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zdHUtc2VsZWN0LWJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmU4ZWM7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnRleHQtc2VsZWN0LWJveCB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMCAxMnB4O1xufVxuXG4ucm91dGUtaXRlbXMge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmU4ZWM7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xufVxuXG4ucm91dGUtaW5wdXQge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2IoMTE3LCAxMTgsIDExOSk7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnN0dS1jb2wxLWltZyB7XG4gIHBhZGRpbmc6IDBweCAxNXB4IDBweCAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDQycHg7XG4gIG1hcmdpbjogNXB4IDE1cHggN3B4IDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VmZWRlYjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/skt/route/route-form/route-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/skt/route/route-form/route-form.component.ts ***!
  \**************************************************************/
/*! exports provided: RouteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteFormComponent", function() { return RouteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_skt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/skt.service */ "./src/app/services/skt.service.ts");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");









let RouteFormComponent = class RouteFormComponent {
    constructor(modalController, formBuilder, http, sktService, ajaxService, commonService) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.http = http;
        this.sktService = sktService;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.radioSelection = "PickUp";
        this.show = false;
        this.selectedValue = "PickUp";
        this.addshow = true;
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    clearModel() {
        this.radioSelection = "PickUp";
        this.selectedValue = "PickUp";
    }
    close() {
        this.modalController.dismiss();
    }
    clear() {
        this.routeTripLogin.patchValue({
            routeName: "",
            plateNo: "",
            trip: "",
            tripName: "",
            tripStarttime: "",
            tripEndtime: "",
        });
        this.clearModel();
    }
    createForm() {
        this.routeTripLogin = this.formBuilder.group({
            routeName: [""],
            plateNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            trip: [""],
            tripName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tripStarttime: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tripEndtime: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    editForm() {
        if (this.value) {
            this.addshow = false;
            if (this.value.submit == "available") {
                this.serviceName = "available";
                this.show = true;
                localStorage.setItem("PlateNo", this.value.plateNo.toString());
                localStorage.setItem("Action", "Edit");
                localStorage.setItem("trip", this.value.trip);
                this.getVehiclename(this.value.trip);
                this.routeTripLogin.patchValue({
                    routeName: this.value.routeName,
                    plateNo: this.value.plateNo,
                    trip: this.value.trip,
                    tripName: this.value.tripName,
                    tripStarttime: this.value.tripStarttime,
                    tripEndtime: this.value.tripEndtime,
                });
            }
            this.radioSelection = this.value.trip;
            this.selectedValue = this.value.trip;
        }
        else {
            localStorage.setItem("PlateNo", "");
            localStorage.setItem("Action", "Add");
            localStorage.setItem("trip", "PickUp");
            this.getVehiclename("PickUp");
        }
    }
    getVehiclename(tripId) {
        let PlateNo = "";
        let Action = localStorage.getItem("Action").toString();
        if (Action == "Edit") {
            PlateNo = localStorage.getItem("PlateNo").toString();
            if (PlateNo.trim() == "-") {
                PlateNo = "";
            }
            let trips = localStorage.getItem("trip").toString();
            if (tripId != trips) {
                PlateNo = "";
            }
        }
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            `/routetrip/getVehiclename?trip=${tripId}&plateno=${PlateNo}&compId=${this.companyDetail.companyID}&branchId=${this.companyDetail.branchID}`;
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.vehicletype = res;
        });
    }
    onSubmit() {
        if (this.serviceName != "available") {
            var data = {
                schoolId: this.companyDetail.companyID,
                branchId: this.companyDetail.branchID,
                emailId: this.companyDetail.userId,
                plateNo: this.routeTripLogin.value.plateNo,
                name: this.selectedValue,
                tripName: this.routeTripLogin.value.tripName.trim(),
                tripStarttime: this.routeTripLogin.value.tripStarttime,
                tripEndtime: this.routeTripLogin.value.tripEndtime,
                lastUpdBy: this.companyDetail.companyID,
            };
            Object.keys(data).forEach((key) => (data[key] == null || data[key] == "") && delete data[key]);
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/routetrip/addroute";
            this.ajaxService.ajaxPostWithString(url, data).subscribe((res) => {
                if (JSON.parse(res).message == "Added Successfully") {
                    this.commonService.presentToast("Added successfully");
                    this.routeTripLogin.reset();
                    this.modalController.dismiss();
                }
                else {
                    this.commonService.presentToastwithmoretime(JSON.parse(res).message);
                }
            });
        }
        else if (this.serviceName == "available") {
            if (this.routeTripLogin.value.routeName.trim().length == 0) {
                this.commonService.showConfirm("Please Enter Route Name");
            }
            else {
                var details = {
                    tripId: this.value.tripId,
                    schoolId: this.companyDetail.companyID,
                    branchId: this.companyDetail.branchID,
                    routeName: this.routeTripLogin.value.routeName.trim(),
                    routetype: this.value.routeName.trim(),
                    plateNo: this.routeTripLogin.value.plateNo,
                    name: this.selectedValue,
                    tripName: this.routeTripLogin.value.tripName.trim(),
                    tripStarttime: this.routeTripLogin.value.tripStarttime,
                    tripEndtime: this.routeTripLogin.value.tripEndtime,
                    lastUpdBy: this.companyDetail.userId,
                };
                Object.keys(details).forEach((key) => (details[key] == null || details[key] == "") && delete details[key]);
                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/routetrip/updateroute";
                this.ajaxService.ajaxPostWithString(url, details).subscribe((res) => {
                    if (JSON.parse(res).message == "Updated Successfully") {
                        this.commonService.presentToast("Updated succesfully");
                        this.routeTripLogin.reset();
                        this.modalController.dismiss();
                    }
                    else {
                        this.commonService.presentToastwithmoretime(JSON.parse(res).message);
                    }
                });
            }
        }
    }
    selectPickDrop(event) {
        this.selectedValue = event.detail.value;
        this.radioSelection = event.detail.value;
        let Action = localStorage.getItem("Action").toString();
        if (Action == "Add") {
            localStorage.setItem("PlateNo", "");
            this.routeTripLogin.patchValue({
                plateNo: "",
            });
        }
        this.getVehiclename(event.detail.value);
    }
    ngOnInit() {
        this.companyDetail = {
            branchID: localStorage.getItem("corpId"),
            companyID: localStorage.getItem("corpId"),
            userId: localStorage.getItem("userName"),
        };
        this.createForm();
        this.editForm();
    }
};
RouteFormComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"] },
    { type: src_app_services_skt_service__WEBPACK_IMPORTED_MODULE_5__["SktService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RouteFormComponent.prototype, "value", void 0);
RouteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-route-form",
        template: __webpack_require__(/*! raw-loader!./route-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/skt/route/route-form/route-form.component.html"),
        styles: [__webpack_require__(/*! ./route-form.component.scss */ "./src/app/skt/route/route-form/route-form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        src_app_services_skt_service__WEBPACK_IMPORTED_MODULE_5__["SktService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
], RouteFormComponent);



/***/ }),

/***/ "./src/app/skt/sktcomponents.module.ts":
/*!*********************************************!*\
  !*** ./src/app/skt/sktcomponents.module.ts ***!
  \*********************************************/
/*! exports provided: SktComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SktComponentsModule", function() { return SktComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _classdetails_class_additional_class_additional_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classdetails/class-additional/class-additional.component */ "./src/app/skt/classdetails/class-additional/class-additional.component.ts");
/* harmony import */ var _shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _student_student_addtional_student_addtional_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./student/student-addtional/student-addtional.component */ "./src/app/skt/student/student-addtional/student-addtional.component.ts");
/* harmony import */ var _student_student_class_additional_student_class_additional_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student/student-class-additional/student-class-additional.component */ "./src/app/skt/student/student-class-additional/student-class-additional.component.ts");
/* harmony import */ var _parent_parent_additional_parent_additional_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parent/parent-additional/parent-additional.component */ "./src/app/skt/parent/parent-additional/parent-additional.component.ts");
/* harmony import */ var _tag_tag_additional_tag_additional_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tag/tag-additional/tag-additional.component */ "./src/app/skt/tag/tag-additional/tag-additional.component.ts");
/* harmony import */ var _gate_gate_additional_gate_additional_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gate/gate-additional/gate-additional.component */ "./src/app/skt/gate/gate-additional/gate-additional.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _enable_enable_additional_enable_additional_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./enable/enable-additional/enable-additional.component */ "./src/app/skt/enable/enable-additional/enable-additional.component.ts");
/* harmony import */ var _route_route_addtional_route_addtional_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./route/route-addtional/route-addtional.component */ "./src/app/skt/route/route-addtional/route-addtional.component.ts");
/* harmony import */ var _route_bus_stop_bus_stop_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./route/bus-stop/bus-stop.component */ "./src/app/skt/route/bus-stop/bus-stop.component.ts");
/* harmony import */ var _broad_broadcast_additional_broadcast_additional_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./broad/broadcast-additional/broadcast-additional.component */ "./src/app/skt/broad/broadcast-additional/broadcast-additional.component.ts");
/* harmony import */ var _route_route_common_route_common_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./route/route-common/route-common.component */ "./src/app/skt/route/route-common/route-common.component.ts");
/* harmony import */ var _route_route_form_route_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./route/route-form/route-form.component */ "./src/app/skt/route/route-form/route-form.component.ts");
/* harmony import */ var _student_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./student/add-student/add-student.component */ "./src/app/skt/student/add-student/add-student.component.ts");
/* harmony import */ var _student_add_route_add_route_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./student/add-route/add-route.component */ "./src/app/skt/student/add-route/add-route.component.ts");
/* harmony import */ var _student_add_alerts_add_alerts_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./student/add-alerts/add-alerts.component */ "./src/app/skt/student/add-alerts/add-alerts.component.ts");
/* harmony import */ var _latlong_latlong_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./latlong/latlong.component */ "./src/app/skt/latlong/latlong.component.ts");
/* harmony import */ var _route_add_bus_stop_add_bus_stop_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./route/add-bus-stop/add-bus-stop.component */ "./src/app/skt/route/add-bus-stop/add-bus-stop.component.ts");
























let SktComponentsModule = class SktComponentsModule {
};
SktComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _classdetails_class_additional_class_additional_component__WEBPACK_IMPORTED_MODULE_5__["ClassAdditionalComponent"],
            _student_student_addtional_student_addtional_component__WEBPACK_IMPORTED_MODULE_7__["StudentAddtionalComponent"],
            _student_add_route_add_route_component__WEBPACK_IMPORTED_MODULE_20__["AddRouteComponent"],
            _student_student_class_additional_student_class_additional_component__WEBPACK_IMPORTED_MODULE_8__["StudentClassAdditionalComponent"],
            _parent_parent_additional_parent_additional_component__WEBPACK_IMPORTED_MODULE_9__["ParentAdditionalComponent"],
            _tag_tag_additional_tag_additional_component__WEBPACK_IMPORTED_MODULE_10__["TagAdditionalComponent"],
            _gate_gate_additional_gate_additional_component__WEBPACK_IMPORTED_MODULE_11__["GateAdditionalComponent"],
            _enable_enable_additional_enable_additional_component__WEBPACK_IMPORTED_MODULE_13__["EnableAdditionalComponent"],
            _route_route_addtional_route_addtional_component__WEBPACK_IMPORTED_MODULE_14__["RouteAddtionalComponent"],
            _route_bus_stop_bus_stop_component__WEBPACK_IMPORTED_MODULE_15__["BusStopComponent"],
            _route_add_bus_stop_add_bus_stop_component__WEBPACK_IMPORTED_MODULE_23__["AddBusStopComponent"],
            _student_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_19__["AddStudentComponent"],
            _student_add_alerts_add_alerts_component__WEBPACK_IMPORTED_MODULE_21__["AddAlertsComponent"],
            _broad_broadcast_additional_broadcast_additional_component__WEBPACK_IMPORTED_MODULE_16__["BroadcastAdditionalComponent"],
            _route_route_common_route_common_component__WEBPACK_IMPORTED_MODULE_17__["RouteCommonComponent"],
            _route_route_form_route_form_component__WEBPACK_IMPORTED_MODULE_18__["RouteFormComponent"],
            _latlong_latlong_component__WEBPACK_IMPORTED_MODULE_22__["LatlongComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_6__["SharedModModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        ],
        entryComponents: [
            _classdetails_class_additional_class_additional_component__WEBPACK_IMPORTED_MODULE_5__["ClassAdditionalComponent"],
            _student_student_addtional_student_addtional_component__WEBPACK_IMPORTED_MODULE_7__["StudentAddtionalComponent"],
            _student_student_class_additional_student_class_additional_component__WEBPACK_IMPORTED_MODULE_8__["StudentClassAdditionalComponent"],
            _parent_parent_additional_parent_additional_component__WEBPACK_IMPORTED_MODULE_9__["ParentAdditionalComponent"],
            _tag_tag_additional_tag_additional_component__WEBPACK_IMPORTED_MODULE_10__["TagAdditionalComponent"],
            _gate_gate_additional_gate_additional_component__WEBPACK_IMPORTED_MODULE_11__["GateAdditionalComponent"],
            _student_add_route_add_route_component__WEBPACK_IMPORTED_MODULE_20__["AddRouteComponent"],
            _student_add_alerts_add_alerts_component__WEBPACK_IMPORTED_MODULE_21__["AddAlertsComponent"],
            _enable_enable_additional_enable_additional_component__WEBPACK_IMPORTED_MODULE_13__["EnableAdditionalComponent"],
            _route_route_addtional_route_addtional_component__WEBPACK_IMPORTED_MODULE_14__["RouteAddtionalComponent"],
            _student_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_19__["AddStudentComponent"],
            _route_bus_stop_bus_stop_component__WEBPACK_IMPORTED_MODULE_15__["BusStopComponent"],
            _route_add_bus_stop_add_bus_stop_component__WEBPACK_IMPORTED_MODULE_23__["AddBusStopComponent"],
            _broad_broadcast_additional_broadcast_additional_component__WEBPACK_IMPORTED_MODULE_16__["BroadcastAdditionalComponent"],
            _route_route_common_route_common_component__WEBPACK_IMPORTED_MODULE_17__["RouteCommonComponent"],
            _route_route_form_route_form_component__WEBPACK_IMPORTED_MODULE_18__["RouteFormComponent"],
            _latlong_latlong_component__WEBPACK_IMPORTED_MODULE_22__["LatlongComponent"],
        ],
        exports: [
            _classdetails_class_additional_class_additional_component__WEBPACK_IMPORTED_MODULE_5__["ClassAdditionalComponent"],
            _student_student_addtional_student_addtional_component__WEBPACK_IMPORTED_MODULE_7__["StudentAddtionalComponent"],
            _student_student_class_additional_student_class_additional_component__WEBPACK_IMPORTED_MODULE_8__["StudentClassAdditionalComponent"],
            _parent_parent_additional_parent_additional_component__WEBPACK_IMPORTED_MODULE_9__["ParentAdditionalComponent"],
            _tag_tag_additional_tag_additional_component__WEBPACK_IMPORTED_MODULE_10__["TagAdditionalComponent"],
            _student_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_19__["AddStudentComponent"],
            _student_add_route_add_route_component__WEBPACK_IMPORTED_MODULE_20__["AddRouteComponent"],
            _student_add_alerts_add_alerts_component__WEBPACK_IMPORTED_MODULE_21__["AddAlertsComponent"],
            _gate_gate_additional_gate_additional_component__WEBPACK_IMPORTED_MODULE_11__["GateAdditionalComponent"],
            _route_route_addtional_route_addtional_component__WEBPACK_IMPORTED_MODULE_14__["RouteAddtionalComponent"],
            _route_bus_stop_bus_stop_component__WEBPACK_IMPORTED_MODULE_15__["BusStopComponent"],
            _route_add_bus_stop_add_bus_stop_component__WEBPACK_IMPORTED_MODULE_23__["AddBusStopComponent"],
            _broad_broadcast_additional_broadcast_additional_component__WEBPACK_IMPORTED_MODULE_16__["BroadcastAdditionalComponent"],
            _route_route_common_route_common_component__WEBPACK_IMPORTED_MODULE_17__["RouteCommonComponent"],
            _route_route_form_route_form_component__WEBPACK_IMPORTED_MODULE_18__["RouteFormComponent"],
            _latlong_latlong_component__WEBPACK_IMPORTED_MODULE_22__["LatlongComponent"],
        ],
    })
], SktComponentsModule);



/***/ }),

/***/ "./src/app/skt/student/add-alerts/add-alerts.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/skt/student/add-alerts/add-alerts.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".deatils-header {\n  -webkit-transform: none !important;\n          transform: none !important;\n  text-align: center;\n  color: #3880ff;\n  font-size: 20px;\n  font-weight: 500;\n  padding-right: 50px;\n}\n\n.box-column3 {\n  border-radius: 5px;\n  padding: 1px;\n  background: white;\n}\n\n.alert-info {\n  font-size: 1.8vh;\n  background: #fdf9f0;\n}\n\n.alert-info ion-row:nth-child(even) {\n  background: #f5f5f5;\n}\n\n.alert-checkbox {\n  height: 14px;\n  width: 14px;\n  vertical-align: middle;\n}\n\n.alert-row {\n  border: 2px solid white;\n}\n\n.alert-row:hover, .alert-info ion-row:nth-child(even):hover {\n  background: #eeedee;\n}\n\n.alert-forward {\n  margin: -5px 10px;\n}\n\n.forward-text {\n  font-size: 13px;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: 500;\n  color: gray;\n  text-transform: uppercase;\n}\n\n.alert-option {\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n#student-name {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.stu-name {\n  text-align: center;\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.scroll {\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t0L3N0dWRlbnQvYWRkLWFsZXJ0cy9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXHNrdFxcc3R1ZGVudFxcYWRkLWFsZXJ0c1xcYWRkLWFsZXJ0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2t0L3N0dWRlbnQvYWRkLWFsZXJ0cy9hZGQtYWxlcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0csZ0JBQUE7RUFDQSxtQkFBQTtBQ0dIOztBRERBO0VBQ0ksbUJBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNLSjs7QURIQTtFQUNJLHVCQUFBO0FDTUo7O0FESEk7RUFDRyxtQkFBQTtBQ01QOztBREhBO0VBQ0ksaUJBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNPSjs7QURMQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNRSjs7QUROQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ1NKOztBRFBBO0VBRUksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNTSjs7QURORTtFQUNFLGtCQUFBO0FDU0oiLCJmaWxlIjoic3JjL2FwcC9za3Qvc3R1ZGVudC9hZGQtYWxlcnRzL2FkZC1hbGVydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVhdGlscy1oZWFkZXIge1xyXG4gICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzM4ODBmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcbi5ib3gtY29sdW1uMyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nICAgICAgOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4uYWxlcnQtaW5mbyB7XHJcbiAgIGZvbnQtc2l6ZTogMS44dmg7XHJcbiAgIGJhY2tncm91bmQ6ICNmZGY5ZjA7XHJcbn1cclxuLmFsZXJ0LWluZm8gaW9uLXJvdzpudGgtY2hpbGQoZXZlbil7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1OyBcclxufVxyXG4uYWxlcnQtY2hlY2tib3gge1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgd2lkdGggOiAxNHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uYWxlcnQtcm93e1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4uYWxlcnQtcm93LC5hbGVydC1pbmZvIGlvbi1yb3c6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgIGJhY2tncm91bmQ6ICNlZWVkZWU7XHJcbiAgICB9XHJcbn1cclxuLmFsZXJ0LWZvcndhcmR7XHJcbiAgICBtYXJnaW46IC01cHggMTBweDtcclxufVxyXG4uZm9yd2FyZC10ZXh0eyBcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5hbGVydC1vcHRpb257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuI3N0dWRlbnQtbmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7IFxyXG59XHJcbi5zdHUtbmFtZVxyXG4gIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7IFxyXG4gICAgXHJcbiAgfVxyXG4gIC5zY3JvbGx7XHJcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxufSIsIi5kZWF0aWxzLWhlYWRlciB7XG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzg4MGZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG5cbi5ib3gtY29sdW1uMyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmFsZXJ0LWluZm8ge1xuICBmb250LXNpemU6IDEuOHZoO1xuICBiYWNrZ3JvdW5kOiAjZmRmOWYwO1xufVxuXG4uYWxlcnQtaW5mbyBpb24tcm93Om50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbi5hbGVydC1jaGVja2JveCB7XG4gIGhlaWdodDogMTRweDtcbiAgd2lkdGg6IDE0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5hbGVydC1yb3cge1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmFsZXJ0LXJvdzpob3ZlciwgLmFsZXJ0LWluZm8gaW9uLXJvdzpudGgtY2hpbGQoZXZlbik6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWVlZGVlO1xufVxuXG4uYWxlcnQtZm9yd2FyZCB7XG4gIG1hcmdpbjogLTVweCAxMHB4O1xufVxuXG4uZm9yd2FyZC10ZXh0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBncmF5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYWxlcnQtb3B0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbiNzdHVkZW50LW5hbWUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zdHUtbmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc2Nyb2xsIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/skt/student/add-alerts/add-alerts.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/skt/student/add-alerts/add-alerts.component.ts ***!
  \****************************************************************/
/*! exports provided: AddAlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAlertsComponent", function() { return AddAlertsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");







let AddAlertsComponent = class AddAlertsComponent {
    constructor(modalController, ajaxService, formBuilder, commonService) {
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.update = '';
        this.selectedArray = [];
    }
    createForm() {
        this.studentDetails = this.formBuilder.group({
            alertoption: ['']
        });
    }
    submit() {
        var values = [];
        for (var i = 0; i < this.selectedArray.length; i++) {
            if (this.selectedArray[i].ischecked == true) {
                values.push(this.selectedArray[i].key);
            }
            else {
            }
        }
        ;
        const data = {
            "schoolId": localStorage.getItem('corpId'),
            "branchId": localStorage.getItem('corpId'),
            "stin": this.value,
            "alertMode": this.studentDetails.value.alertoption,
            "alertList": values,
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + "/student/config/studentalert";
        this.ajaxService.ajaxPostMethod(url, data).subscribe(res => {
            if (res.message == "success") {
                this.commonService.presentToast('Student Details Alert Info Updated Sucessfully');
                this.modalController.dismiss();
            }
            else {
                this.commonService.presentToast('Please contact support team');
            }
        });
    }
    getBack() {
        this.modalController.dismiss();
    }
    getAlert() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + '/student/getPreferences?key=Sktalert&companyId=demo';
        this.ajaxService.ajaxGetPerference(url).subscribe(res => {
            this.alertOption = res;
        });
    }
    getAlerttype() {
        const urls = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + '/report/getAlerttype';
        this.ajaxService.ajaxGet(urls).subscribe(res => {
            this.alerts = res;
        });
        this.alerts;
    }
    selectData(a_alerts, s_alert) {
        if (s_alert.ischecked == false) {
            this.selectedArray.push(s_alert);
        }
        else {
            let newArray = this.selectedArray.filter(function (el) {
                return el.id !== s_alert.key;
            });
            this.selectedArray = newArray;
        }
    }
    editmethod() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + '/student/get/studentdetails?stin=' + this.value;
        this.ajaxService.ajaxGetObject(url).subscribe(res => {
            this.alertinfo = JSON.parse(res);
            this.studentDetails.patchValue({
                alertoption: this.alertinfo.alertinfo.alertmode.toString(),
            });
            this.alertinfo.alertinfo.alerts;
            this.alerts;
            for (var i = 0; i < this.alerts.length; i++) {
                for (var j = 0; j < this.alertinfo.alertinfo.alerts.length; j++) {
                    if (this.alerts[i].key == this.alertinfo.alertinfo.alerts[j]) {
                        this.alerts[i].ischecked = true;
                        this.selectedArray.push(this.alerts[i]);
                    }
                    else {
                    }
                }
            }
        });
    }
    ngOnInit() {
        ;
        this.createForm();
        if (this.value) {
            this.getAlert();
            this.getAlerttype();
            this.alerts;
            this.editmethod();
        }
        ;
    }
};
AddAlertsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddAlertsComponent.prototype, "value", void 0);
AddAlertsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-alerts',
        template: __webpack_require__(/*! raw-loader!./add-alerts.component.html */ "./node_modules/raw-loader/index.js!./src/app/skt/student/add-alerts/add-alerts.component.html"),
        styles: [__webpack_require__(/*! ./add-alerts.component.scss */ "./src/app/skt/student/add-alerts/add-alerts.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
], AddAlertsComponent);



/***/ }),

/***/ "./src/app/skt/student/add-route/add-route.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/skt/student/add-route/add-route.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper-container {\n  border-radius: 5px;\n  margin: 3px auto;\n  width: 100%;\n}\n\n.route-header {\n  -webkit-transform: none !important;\n          transform: none !important;\n  text-align: center;\n  color: #3880ff;\n  font-size: 24px;\n  font-weight: 500;\n  padding-right: 30px;\n  padding: 3px;\n}\n\n.container {\n  height: 100%;\n  overflow-y: scroll;\n}\n\n#route-info {\n  background: #f2f2f2;\n  border-radius: 3px;\n}\n\n.box-column,\n.box-column3 {\n  border-radius: 5px;\n  padding: 1px;\n}\n\n.box-column3 {\n  background: white;\n}\n\n.text-select-box {\n  height: 45px;\n  text-align: left;\n  margin: 10px;\n}\n\n.stu-select-box-col {\n  margin: 16px 0px 0px 5px;\n  padding: 0px;\n}\n\n.stu-select-box,\n.select-box2 {\n  height: 45px;\n  background: white;\n}\n\n.select-input,\n.select-routeinfo {\n  border: 0;\n  margin: 15px;\n  width: 95%;\n  color: #555757;\n}\n\n.select-routeinfo {\n  width: 100%;\n}\n\nselect.stu-input {\n  outline: none;\n  background: none;\n}\n\n.stu-input {\n  --placeholder-color: black;\n  font-size: 13px;\n  --padding-top: 0px;\n  --padding-bottom: 2px;\n}\n\n.route-info {\n  margin: 10px;\n}\n\n.option-head {\n  background-color: darkgray;\n}\n\n.stu-items {\n  margin: 10px 6px 0px;\n  padding: 0px;\n  height: 45px;\n  background-color: #fcfcfc;\n}\n\n.delete-svg {\n  padding: 0px 10px 0px 0px;\n  height: 15px;\n  width: 35px;\n  margin: 0px 15px 7px 8px;\n  cursor: pointer;\n}\n\n.delete-svg:hover {\n  color: red;\n}\n\n.stu-svg {\n  font-size: 32px;\n  border-right: 1px solid #efedeb;\n  padding-right: 10px;\n  margin: 0px 15px 5px 0px;\n  color: #3880ff;\n}\n\n.stu-svg {\n  padding: 0px 10px 0px 0px;\n  height: 30px;\n  width: 42px;\n  margin: 5px 15px 7px 8px;\n}\n\n.geozone-info {\n  height: 273px !important;\n  width: 100%;\n}\n\n#map {\n  height: 100%;\n}\n\n.stu-name {\n  text-align: center;\n  font-size: 15px;\n  font-weight: 500;\n  padding: 2px;\n}\n\n.route-toggleBtn {\n  --border-radius: 50%;\n  padding: 1px;\n  margin-top: -5px;\n}\n\n.card {\n  color: #3880ff;\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t0L3N0dWRlbnQvYWRkLXJvdXRlL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcc2t0XFxzdHVkZW50XFxhZGQtcm91dGVcXGFkZC1yb3V0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2t0L3N0dWRlbnQvYWRkLXJvdXRlL2FkZC1yb3V0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QUREQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QURGQTs7RUFFRSxrQkFBQTtFQUNBLFlBQUE7QUNLRjs7QURGQTtFQUNFLGlCQUFBO0FDS0Y7O0FESEE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDTUY7O0FESEE7RUFDRSx3QkFBQTtFQUNBLFlBQUE7QUNNRjs7QURKQTs7RUFHRSxZQUFBO0VBRUEsaUJBQUE7QUNLRjs7QURIQTs7RUFFRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDTUY7O0FESkE7RUFDRSxXQUFBO0FDT0Y7O0FETEE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNRRjs7QUROQTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNTRjs7QURQQTtFQUNFLFlBQUE7QUNVRjs7QURSQTtFQUNFLDBCQUFBO0FDV0Y7O0FEVEE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNZRjs7QURWQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUNhRjs7QURWQTtFQUNFLFVBQUE7QUNhRjs7QURWQTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDYUY7O0FEVkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUNhRjs7QURYQTtFQUVFLHdCQUFBO0VBQ0EsV0FBQTtBQ2FGOztBRFhBO0VBQ0UsWUFBQTtBQ2NGOztBRFpBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDZUY7O0FEYkE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2dCRjs7QURkQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FDaUJGIiwiZmlsZSI6InNyYy9hcHAvc2t0L3N0dWRlbnQvYWRkLXJvdXRlL2FkZC1yb3V0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogM3B4IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnJvdXRlLWhlYWRlciB7XHJcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMzg4MGZmO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgcGFkZGluZzogM3B4O1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuI3JvdXRlLWluZm8ge1xyXG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5ib3gtY29sdW1uLFxyXG4uYm94LWNvbHVtbjMge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5ib3gtY29sdW1uMyB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuLnRleHQtc2VsZWN0LWJveCB7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uc3R1LXNlbGVjdC1ib3gtY29sIHtcclxuICBtYXJnaW46IDE2cHggMHB4IDBweCA1cHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5zdHUtc2VsZWN0LWJveCxcclxuLnNlbGVjdC1ib3gyIHtcclxuICAvLyBib3JkZXIgICAgICAgOiAxcHggc29saWQgI2NmZThlYztcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5zZWxlY3QtaW5wdXQsXHJcbi5zZWxlY3Qtcm91dGVpbmZvIHtcclxuICBib3JkZXI6IDA7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgY29sb3I6IHJnYig4NSwgODcsIDg3KTtcclxufVxyXG4uc2VsZWN0LXJvdXRlaW5mbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuc2VsZWN0LnN0dS1pbnB1dCB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbi5zdHUtaW5wdXQge1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMnB4O1xyXG59XHJcbi5yb3V0ZS1pbmZvIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLm9wdGlvbi1oZWFkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcclxufVxyXG4uc3R1LWl0ZW1zIHtcclxuICBtYXJnaW46IDEwcHggNnB4IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XHJcbn1cclxuLmRlbGV0ZS1zdmcge1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAwcHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIG1hcmdpbjogMHB4IDE1cHggN3B4IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kZWxldGUtc3ZnOmhvdmVyIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uc3R1LXN2ZyB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZmVkZWI7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBtYXJnaW46IDBweCAxNXB4IDVweCAwcHg7XHJcbiAgY29sb3I6ICMzODgwZmY7XHJcbn1cclxuXHJcbi5zdHUtc3ZnIHtcclxuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogNDJweDtcclxuICBtYXJnaW46IDVweCAxNXB4IDdweCA4cHg7XHJcbn1cclxuLmdlb3pvbmUtaW5mbyB7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgcmdiKDI0NywgMjQ3LCAyNDcpO1xyXG4gIGhlaWdodDogMjczcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4jbWFwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnN0dS1uYW1lIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcbi5yb3V0ZS10b2dnbGVCdG4ge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBhZGRpbmc6IDFweDtcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcbi5jYXJkIHtcclxuICBjb2xvcjogIzM4ODBmZjtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuIiwiLndyYXBwZXItY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDNweCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJvdXRlLWhlYWRlciB7XG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzg4MGZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4jcm91dGUtaW5mbyB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmJveC1jb2x1bW4sXG4uYm94LWNvbHVtbjMge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxuLmJveC1jb2x1bW4zIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi50ZXh0LXNlbGVjdC1ib3gge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLnN0dS1zZWxlY3QtYm94LWNvbCB7XG4gIG1hcmdpbjogMTZweCAwcHggMHB4IDVweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uc3R1LXNlbGVjdC1ib3gsXG4uc2VsZWN0LWJveDIge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uc2VsZWN0LWlucHV0LFxuLnNlbGVjdC1yb3V0ZWluZm8ge1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogMTVweDtcbiAgd2lkdGg6IDk1JTtcbiAgY29sb3I6ICM1NTU3NTc7XG59XG5cbi5zZWxlY3Qtcm91dGVpbmZvIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnNlbGVjdC5zdHUtaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uc3R1LWlucHV0IHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAycHg7XG59XG5cbi5yb3V0ZS1pbmZvIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ub3B0aW9uLWhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcbn1cblxuLnN0dS1pdGVtcyB7XG4gIG1hcmdpbjogMTBweCA2cHggMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcbn1cblxuLmRlbGV0ZS1zdmcge1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMHB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBtYXJnaW46IDBweCAxNXB4IDdweCA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRlbGV0ZS1zdmc6aG92ZXIge1xuICBjb2xvcjogcmVkO1xufVxuXG4uc3R1LXN2ZyB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VmZWRlYjtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbWFyZ2luOiAwcHggMTVweCA1cHggMHB4O1xuICBjb2xvcjogIzM4ODBmZjtcbn1cblxuLnN0dS1zdmcge1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA0MnB4O1xuICBtYXJnaW46IDVweCAxNXB4IDdweCA4cHg7XG59XG5cbi5nZW96b25lLWluZm8ge1xuICBoZWlnaHQ6IDI3M3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jbWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3R1LW5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4ucm91dGUtdG9nZ2xlQnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDFweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLmNhcmQge1xuICBjb2xvcjogIzM4ODBmZjtcbiAgcGFkZGluZzogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/skt/student/add-route/add-route.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/skt/student/add-route/add-route.component.ts ***!
  \**************************************************************/
/*! exports provided: AddRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRouteComponent", function() { return AddRouteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
/* harmony import */ var src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth-map.service */ "./src/app/services/auth-map.service.ts");
/* harmony import */ var src_app_services_google_map_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/google-map.service */ "./src/app/services/google-map.service.ts");
/* harmony import */ var src_app_services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/openlayer-map.service */ "./src/app/services/openlayer-map.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");











let AddRouteComponent = class AddRouteComponent {
    constructor(modalController, formBuilder, mapService, nav, gMapService, olMapService, menuController, platform, alertController, commonService, ajaxService) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.mapService = mapService;
        this.nav = nav;
        this.gMapService = gMapService;
        this.olMapService = olMapService;
        this.menuController = menuController;
        this.platform = platform;
        this.alertController = alertController;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.range = 500;
        this.update = "";
        this.selectValue = "";
        this.click = 1;
        this.editselectbox = false;
        this.calculateRadius = function (south, west, north, east) {
            const R = 6378.137;
            const dLat = ((north - south) * Math.PI) / 180;
            const dLon = ((east - west) * Math.PI) / 180;
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos((south * Math.PI) / 180) *
                    Math.cos((north * Math.PI) / 180) *
                    Math.sin(dLon / 2) *
                    Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const d = R * c;
            return Math.round(d * 1000);
        };
        this.mapService = new src_app_services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_8__["OpenlayerMapService"]();
    }
    ionViewWillEnter() {
        this.subscription = this.platform.backButton.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.menuController.isOpen()) {
                this.menuController.close();
            }
        }));
    }
    closeModel() {
        this.modalController.dismiss();
    }
    ionViewWillLeave() {
        this.subscription.unsubscribe();
    }
    createMap(mode) {
        this.map = this.mapService.loadMap(this.mapElement.nativeElement, { lat: 13.065274398613948, lng: 80.26600974342504 }, false, false);
        this.mapService.setCenter(this.map, {
            lat: 13.065274398613948,
            lng: 80.26600974342504,
        });
        let latLng;
        if (mode === "edit") {
            let Stop = this.studentDetails.value.dropstop;
            if (Stop == "") {
                Stop = this.studentDetails.value.pickupstop;
            }
            if (Stop != "") {
                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + "/student/getstudent/geofence?routeid=" + Stop;
                this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
                    this.result = res.latlng;
                    const detailsString = this.result;
                    const getLatLng = detailsString.split("|");
                    const southwest = getLatLng[0].split(",");
                    const northeast = getLatLng[1].split(",");
                    const south = parseFloat(southwest[0].split(",")[0]);
                    const west = parseFloat(southwest[1].split(",")[0]);
                    const north = parseFloat(northeast[0].split(",")[0]);
                    const east = parseFloat(northeast[1].split(",")[0]);
                    latLng = { lat: south, lng: west };
                    this.range = this.calculateRadius(north, east, south, west);
                    this.mapService.addMarker(this.map, latLng, "studentroute", "assets/vtstrackhisIcon/Idle.png");
                    this.mapService.createCircle(this.map, latLng, this.range, "");
                    this.mapService.fitBounds(this.map, 2);
                });
            }
        }
    }
    setRange(range) {
        this.range = range;
        this.mapService.setCircleRadius(this.range);
    }
    getpickuptrip() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web +
            "/student/route/details?schoolId=" +
            localStorage.getItem("corpId") +
            "&branchId=" +
            localStorage.getItem("corpId");
        this.ajaxService.ajaxGetObject(url).subscribe((res) => {
            this.tripdetails = JSON.parse(res);
            console.log(this.tripdetails);
            this.pickuptrip = Object.keys(this.tripdetails["PickUp"]);
        });
    }
    getpickuproute(ev) {
        this.studentDetails.patchValue({
            pickuproute: "",
        });
        this.pickuproute = Object.keys(this.tripdetails["PickUp"][ev.target.value]);
        this.sel_pickuptrip = ev.target.value;
    }
    getpickupstop(ev) {
        this.studentDetails.patchValue({
            pickupstop: "",
        });
        this.pickupstop =
            this.tripdetails["PickUp"][this.sel_pickuptrip][ev.target.value];
    }
    selectpickupstop() {
        this.mapService.clearLayers(this.map, [1, 2]);
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web +
            "/student/getstudent/geofence?routeid=" +
            this.studentDetails.value.pickupstop;
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.result = res.latlng;
            this.mapService.setCenter(this.map, { lat: 13.029373, lng: 80.271928 });
            let latLng;
            const detailsStrings = this.result;
            const getLatLng = detailsStrings.split("|");
            const southwest = getLatLng[0].split(",");
            const northeast = getLatLng[1].split(",");
            const south = parseFloat(southwest[0].split(",")[0]);
            const west = parseFloat(southwest[1].split(",")[0]);
            const north = parseFloat(northeast[0].split(",")[0]);
            const east = parseFloat(northeast[1].split(",")[0]);
            latLng = { lat: south, lng: west };
            this.range = this.calculateRadius(north, east, south, west);
            this.mapService.addMarker(this.map, latLng, "studentroute", "assets/vtstrackhisIcon/Idle.png");
            this.mapService.createCircle(this.map, latLng, this.range, "");
        });
    }
    selectDropstop() {
        this.mapService.clearLayers(this.map, [1, 2]);
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web +
            "/student/getstudent/geofence?routeid=" +
            this.studentDetails.value.dropstop;
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.result = res.latlng;
            this.mapService.setCenter(this.map, { lat: 13.029373, lng: 80.271928 });
            let latLng;
            const detailsString1 = this.result;
            const getLatLng = detailsString1.split("|");
            const southwest = getLatLng[0].split(",");
            const northeast = getLatLng[1].split(",");
            const south = parseFloat(southwest[0].split(",")[0]);
            const west = parseFloat(southwest[1].split(",")[0]);
            const north = parseFloat(northeast[0].split(",")[0]);
            const east = parseFloat(northeast[1].split(",")[0]);
            latLng = { lat: south, lng: west };
            this.range = this.calculateRadius(north, east, south, west);
            this.mapService.addMarker(this.map, latLng, "studentroute", "assets/vtstrackhisIcon/Idle.png");
            this.mapService.createCircle(this.map, latLng, this.range, "");
            this.mapService.fitBounds(this.map, 2);
        });
    }
    getdroptrip() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web +
            "/student/route/details?schoolId=" +
            localStorage.getItem("corpId") +
            "&branchId=" +
            localStorage.getItem("corpId");
        this.ajaxService.ajaxGetObject(url).subscribe((res) => {
            this.tripdetails = JSON.parse(res);
            this.droptrip = Object.keys(this.tripdetails["Drop"]);
        });
    }
    getdroproute(ev) {
        this.studentDetails.patchValue({
            droproute: "",
        });
        this.droproute = Object.keys(this.tripdetails["Drop"][ev.target.value]);
        this.sel_droptrip = ev.target.value;
    }
    getdropstop(ev) {
        this.studentDetails.patchValue({
            dropstop: "",
        });
        this.dropstop =
            this.tripdetails["Drop"][this.sel_droptrip][ev.target.value];
    }
    getAddressLatlng(address) {
        if (address != "") {
            let data = parseFloat(address.split(",")[0]);
            if (data.toString() != "NaN") {
                if (address.split(",")[1]) {
                    this.mapService.setCenter(this.map, {
                        lat: parseFloat(address.split(",")[0]),
                        lng: parseFloat(address.split(",")[1]),
                    });
                }
            }
            else if (data.toString() == "NaN") {
                this.ajaxService
                    .ajaxGet("https://nominatim.openstreetmap.org/?format=json&addressdetails=1&q=" +
                    address +
                    "&format=json&limit=1")
                    .subscribe((res) => {
                    if (res.length > 0) {
                        let latLng = { lat: res[0].lat, lng: res[0].lon };
                        this.mapService.setCenter(this.map, {
                            lat: parseFloat(res[0].lat),
                            lng: parseFloat(res[0].lon),
                        });
                    }
                    else {
                        this.commonService.presentToast("Can't able to get your location");
                    }
                });
            }
        }
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    deletePickup() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Confirm",
                backdropDismiss: false,
                message: "Are you sure you want to Delete PickUp?",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: (data) => { },
                    },
                    {
                        text: "Ok",
                        handler: (data) => {
                            this.deletepickup();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    deletepickup() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web +
            "/student/delete/studenttrip?stin=" +
            this.value.toString() +
            "&tripid=" +
            this.routeinfo.routeinfo.dropStop.toString() +
            "&trip=PickUp";
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.done = res;
            if (res.message == "Successfully Deleted") {
                this.studentDetails.patchValue({
                    pickuptrip: "",
                    pickuproute: "",
                    pickupstop: "",
                });
                this.commonService.showConfirm("PickUp " + res.message.toString());
            }
        });
    }
    deleteDrop() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Confirm",
                backdropDismiss: false,
                message: "Are you sure you want to Delete Drop?",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: (data) => { },
                    },
                    {
                        text: "Ok",
                        handler: (data) => {
                            this.deletedrop();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    deletedrop() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web +
            "/student/delete/studenttrip?stin=" +
            this.value.toString() +
            "&tripid=" +
            this.routeinfo.routeinfo.dropStop.toString() +
            "&trip=Drop";
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.done = res;
            if (res.message == "Successfully Deleted") {
                this.studentDetails.patchValue({
                    droptrip: "",
                    droproute: "",
                    dropstop: "",
                });
                this.commonService.showConfirm("Drop " + res.message.toString());
            }
        });
    }
    submit() {
        if (this.studentDetails.value.pickuptrip == "" &&
            this.studentDetails.value.droptrip == "") {
            this.commonService.showConfirm("Please Select Pickup or Drop Vehicle");
        }
        else if (this.studentDetails.value.pickuptrip != "" &&
            this.studentDetails.value.pickuproute == "") {
            this.commonService.showConfirm("Please Select Pickup Route");
        }
        else if (this.studentDetails.value.pickuptrip != "" &&
            this.studentDetails.value.pickupstop == "") {
            this.commonService.showConfirm("Please Select Pickup Stop");
        }
        else {
            let validation = true;
            if (this.studentDetails.value.droptrip != "") {
                if (this.studentDetails.value.droproute == "") {
                    this.commonService.showConfirm("Please Select Drop Route");
                    validation = false;
                }
                else if (this.studentDetails.value.dropstop == "") {
                    this.commonService.showConfirm("Please Select Drop Stop");
                    validation = false;
                }
            }
            if (validation == true) {
                var data = {
                    stin: this.value.toString(),
                    pickupId: this.studentDetails.value.pickupstop.toString(),
                    dropIp: this.studentDetails.value.dropstop.toString(),
                    geoloc: "",
                };
                if (this.update == "available") {
                    var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + "/student/config/studentroute";
                }
                this.ajaxService.ajaxPostMethod(url, data).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (res.message == "success") {
                        this.commonService.presentToast("Student Details Route Info Updated sucessfully");
                        this.studentDetails.reset();
                        this.modalController.dismiss();
                    }
                    else {
                        this.commonService.presentToast("Please contact support team");
                    }
                }));
            }
        }
    }
    editmethod() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + "/student/get/studentdetails?stin=" + this.value;
        this.ajaxService.ajaxGetObject(url).subscribe((res) => {
            this.routeinfo = JSON.parse(res);
            this.update = "available";
            if (this.tripdetails["PickUp"].hasOwnProperty(this.routeinfo.routeinfo.pickupTrip)) {
                this.pickuproute = Object.keys(this.tripdetails["PickUp"][this.routeinfo.routeinfo.pickupTrip]);
                this.pickupstop =
                    this.tripdetails["PickUp"][this.routeinfo.routeinfo.pickupTrip][this.routeinfo.routeinfo.pickupRoute];
            }
            if (this.tripdetails["Drop"].hasOwnProperty(this.routeinfo.routeinfo.dropTrip)) {
                this.droproute = Object.keys(this.tripdetails["Drop"][this.routeinfo.routeinfo.dropTrip]);
                this.dropstop =
                    this.tripdetails["Drop"][this.routeinfo.routeinfo.dropTrip][this.routeinfo.routeinfo.dropRoute];
            }
            this.studentDetails.patchValue({
                pickuptrip: this.routeinfo.routeinfo.pickupTrip,
                pickuproute: this.routeinfo.routeinfo.pickupRoute,
                pickupstop: this.routeinfo.routeinfo.pickupStop,
                droptrip: this.routeinfo.routeinfo.dropTrip,
                droproute: this.routeinfo.routeinfo.dropRoute,
                dropstop: this.routeinfo.routeinfo.dropStop,
            });
            this.sel_pickuptrip = this.routeinfo.routeinfo.pickupTrip;
            this.sel_droptrip = this.routeinfo.routeinfo.dropTrip;
        });
    }
    createForm() {
        this.studentDetails = this.formBuilder.group({
            pickuproute: [""],
            pickuptrip: [""],
            pickupstop: [""],
            droproute: [""],
            droptrip: [""],
            dropstop: [""],
        });
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.createForm();
        this.getpickuptrip();
        this.getdroptrip();
        this.editmethod();
        this.type = this.mode;
        setTimeout(() => {
            this.createMap(this.type);
        }, 2000);
    }
    onClickLocationGetter() {
        this.map.on("click", (evt) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.mapService.clearLayers(this.map, [1, 2]);
            const coordinates = evt.coordinate;
            let latLng = Object(ol_proj__WEBPACK_IMPORTED_MODULE_5__["toLonLat"])([coordinates[0], coordinates[1]]);
            latLng = { lat: latLng[1], lng: latLng[0] };
            if (this.click > 1) {
                this.mapService.clearLayers(this.map, [1, 2]);
            }
            this.mapService.addMarker(this.map, latLng, "", "assets/vtstrackhisIcon/Idle.png");
            this.mapService.createCircle(this.map, latLng, this.range, "");
            this.click++;
        }));
    }
};
AddRouteComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_6__["AuthMapService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: src_app_services_google_map_service__WEBPACK_IMPORTED_MODULE_7__["GoogleMapService"] },
    { type: src_app_services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_8__["OpenlayerMapService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_10__["AjaxService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AddRouteComponent.prototype, "mode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapElement", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddRouteComponent.prototype, "mapElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddRouteComponent.prototype, "value", void 0);
AddRouteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-route",
        template: __webpack_require__(/*! raw-loader!./add-route.component.html */ "./node_modules/raw-loader/index.js!./src/app/skt/student/add-route/add-route.component.html"),
        styles: [__webpack_require__(/*! ./add-route.component.scss */ "./src/app/skt/student/add-route/add-route.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_6__["AuthMapService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"],
        src_app_services_google_map_service__WEBPACK_IMPORTED_MODULE_7__["GoogleMapService"],
        src_app_services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_8__["OpenlayerMapService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_10__["AjaxService"]])
], AddRouteComponent);



/***/ }),

/***/ "./src/app/skt/student/add-student/add-student.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/skt/student/add-student/add-student.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.wrapper-container {\n  border-radius: 5px;\n  margin: 3px auto;\n  width: 100%;\n}\n@media (min-width: 767px) {\n  .wrapper-container {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n    position: absolute;\n    top: -10px;\n  }\n}\n.sectionId, .parent, .tag, .classid {\n  position: relative;\n}\n.sectionId:after, .parent:after, .tag:after, .classid:after {\n  content: \"\";\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n  text-decoration: inherit;\n  color: #3880ff;\n  font-size: 28px;\n  padding-right: 0.6em;\n  position: absolute;\n  top: 19px;\n  left: 21px;\n  border-right: 1px solid #f0efee;\n}\n.parent:after {\n  content: \"\";\n}\n.tag:after {\n  content: \"\";\n  padding-right: 0.3em;\n  font-size: 26px;\n  top: 24px;\n}\n.classid:after {\n  content: \"\";\n  font-size: 26px;\n  top: 21px;\n}\n.radio-text {\n  margin: 0px;\n  padding: 7px;\n}\n.container {\n  height: 100%;\n  overflow-y: scroll;\n}\n.deatils-header {\n  -webkit-transform: none !important;\n          transform: none !important;\n  text-align: center;\n  color: #3880ff;\n  font-size: 24px;\n  font-weight: 500;\n  padding-right: 65px;\n}\n.stu-items {\n  margin: 10px 6px 0px;\n  padding: 0px;\n  height: 45px;\n  background-color: #fcfcfc;\n}\n#student-info {\n  background: #f2f2f2;\n  border-radius: 3px;\n}\n.stu-input {\n  --placeholder-color: black;\n  font-size: 13px;\n  --padding-top:0px;\n  --padding-bottom:2px;\n}\n.textcolor {\n  font-size: 10px;\n  color: #757677;\n}\n.stu-icon,\n.stu-svg {\n  font-size: 32px;\n  border-right: 1px solid #efedeb;\n  padding-right: 10px;\n  margin: 0px 15px 5px 0px;\n  color: #3880ff;\n}\n.stu-svg {\n  padding: 0px 10px 0px 0px;\n  height: 30px;\n  width: 42px;\n  margin: 5px 15px 7px 8px;\n}\n.stu-select-box,\n.select-box2 {\n  height: 45px;\n  background: white;\n}\n.text-select-box {\n  height: 48px;\n  text-align: left;\n  margin: 10px;\n}\n.stu-select-box-col {\n  margin: 16px 0px 0px 5px;\n  padding: 0px;\n}\n.student-toggleBtn {\n  float: right;\n  --border-radius: 50%;\n  padding: 0px;\n  margin: 5px 0px;\n}\n.box-column,\n.box-column3 {\n  border-radius: 5px;\n  padding: 1px;\n}\n.box-column3 {\n  background: white;\n}\n.stu-col1-img {\n  padding: 0px 15px 0px 0px;\n  height: 30px;\n  width: 42px;\n  margin: 5px 15px 7px 0px;\n  border-right: 1px solid #efedeb;\n}\n.main-container-btn {\n  height: 50px;\n  width: 200px;\n  margin: 10px auto 0px;\n  padding: 0px 15px 0px 0px;\n}\n.radioBtn {\n  margin: 0px auto;\n}\n.genderImg {\n  width: 32px;\n}\n.container::-webkit-scrollbar {\n  width: 2px;\n}\n/* Track */\n.container::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n/* Handle */\n.container::-webkit-scrollbar-thumb {\n  background: lightgray;\n}\n/* Handle on hover */\n.container::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n.drop-selection {\n  margin-bottom: 8px;\n}\nselect.stu-input {\n  outline: none;\n  background: none;\n}\n.select-input, .select-routeinfo {\n  border: 0;\n  padding: 15px 15px 15px 68px;\n  width: 98%;\n  color: #555757;\n}\n.select-routeinfo {\n  width: 100%;\n}\nselect.option-body:hover {\n  outline: none;\n}\n.option-head {\n  background-color: darkgray;\n}\n.route-info {\n  margin: 10px;\n}\noption:focus {\n  outline: none;\n}\n.geozone-info {\n  border: 1px solid #f7f7f7;\n  height: 273px !important;\n  width: 100%;\n}\n.popup-head {\n  color: #3880ff;\n  margin-left: 30px;\n  font-size: 28px !important;\n  font-weight: 600;\n  margin: 10px auto 10px;\n}\n.shapes-item {\n  color: #928d8b;\n  z-index: 12;\n  margin: auto;\n  position: absolute;\n  bottom: 45%;\n  right: 10px;\n  font-size: 31px;\n  border: 1px solid #cfe8ec;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t0L3N0dWRlbnQvYWRkLXN0dWRlbnQvYWRkLXN0dWRlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NrdC9zdHVkZW50L2FkZC1zdHVkZW50L0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcc2t0XFxzdHVkZW50XFxhZGQtc3R1ZGVudFxcYWRkLXN0dWRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QURFSjtBQ0FBO0VBQ0E7SUFDSSw2QkFBQTtZQUFBLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0VER0Y7QUFDRjtBQ0RBO0VBQ0ksa0JBQUE7QURHSjtBQ0FJO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtBREdKO0FDQUE7RUFDSSxZQUFBO0FER0o7QUNEQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FESUo7QUNGQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBREtKO0FDSEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBRE1KO0FDSEE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QURNSjtBQ0hBO0VBQ0ksa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FETUo7QUNKQTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBRE9KO0FDSEE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FETUo7QUNKQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QURPSjtBQ0pBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QURPSjtBQ0pBOztFQUVJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FET0o7QUNKQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBRE9KO0FDSkE7O0VBR0ksWUFBQTtFQUVBLGlCQUFBO0FES0o7QUNEQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QURJSjtBQ0RBO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0FESUo7QUNEQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FESUo7QUNEQTs7RUFFSSxrQkFBQTtFQUNBLFlBQUE7QURJSjtBQ0FBO0VBQ0ksaUJBQUE7QURHSjtBQ0FBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsK0JBQUE7QURHSjtBQ0NBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FERUo7QUNBQTtFQUNJLGdCQUFBO0FER0o7QUNEQTtFQUNJLFdBQUE7QURJSjtBQ0FBO0VBQ0ksVUFBQTtBREdKO0FDQUUsVUFBQTtBQUNBO0VBQ0UsbUJBQUE7QURHSjtBQ0FFLFdBQUE7QUFDQTtFQUNFLHFCQUFBO0FER0o7QUNBRSxvQkFBQTtBQUNBO0VBQ0UsZ0JBQUE7QURHSjtBQ0FBO0VBQ0ksa0JBQUE7QURHSjtBQ0RBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FESUo7QUNGQTtFQUNJLFNBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FES0o7QUNIQTtFQUNJLFdBQUE7QURNSjtBQ0pBO0VBQ0ksYUFBQTtBRE9KO0FDTEE7RUFDSSwwQkFBQTtBRFFKO0FDTkE7RUFDSSxZQUFBO0FEU0o7QUNQQTtFQUNJLGFBQUE7QURVSjtBQ1JBO0VBQ0kseUJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7QURXSjtBQ1RBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FEWUo7QUNUQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FEWUoiLCJmaWxlIjoic3JjL2FwcC9za3Qvc3R1ZGVudC9hZGQtc3R1ZGVudC9hZGQtc3R1ZGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi53cmFwcGVyLWNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAzcHggYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTBweDtcbiAgfVxufVxuLnNlY3Rpb25JZCwgLnBhcmVudCwgLnRhZywgLmNsYXNzaWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zZWN0aW9uSWQ6YWZ0ZXIsIC5wYXJlbnQ6YWZ0ZXIsIC50YWc6YWZ0ZXIsIC5jbGFzc2lkOmFmdGVyIHtcbiAgY29udGVudDogXCLvgKJcIjtcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgY29sb3I6ICMzODgwZmY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgcGFkZGluZy1yaWdodDogMC42ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOXB4O1xuICBsZWZ0OiAyMXB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjBlZmVlO1xufVxuXG4ucGFyZW50OmFmdGVyIHtcbiAgY29udGVudDogXCLvgIdcIjtcbn1cblxuLnRhZzphZnRlciB7XG4gIGNvbnRlbnQ6IFwi74KdXCI7XG4gIHBhZGRpbmctcmlnaHQ6IDAuM2VtO1xuICBmb250LXNpemU6IDI2cHg7XG4gIHRvcDogMjRweDtcbn1cblxuLmNsYXNzaWQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIu+Dt1wiO1xuICBmb250LXNpemU6IDI2cHg7XG4gIHRvcDogMjFweDtcbn1cblxuLnJhZGlvLXRleHQge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogN3B4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5kZWF0aWxzLWhlYWRlciB7XG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzg4MGZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctcmlnaHQ6IDY1cHg7XG59XG5cbi5zdHUtaXRlbXMge1xuICBtYXJnaW46IDEwcHggNnB4IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG59XG5cbiNzdHVkZW50LWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5zdHUtaW5wdXQge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtLXBhZGRpbmctdG9wOjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbToycHg7XG59XG5cbi50ZXh0Y29sb3Ige1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjNzU3Njc3O1xufVxuXG4uc3R1LWljb24sXG4uc3R1LXN2ZyB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VmZWRlYjtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbWFyZ2luOiAwcHggMTVweCA1cHggMHB4O1xuICBjb2xvcjogIzM4ODBmZjtcbn1cblxuLnN0dS1zdmcge1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA0MnB4O1xuICBtYXJnaW46IDVweCAxNXB4IDdweCA4cHg7XG59XG5cbi5zdHUtc2VsZWN0LWJveCxcbi5zZWxlY3QtYm94MiB7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi50ZXh0LXNlbGVjdC1ib3gge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLnN0dS1zZWxlY3QtYm94LWNvbCB7XG4gIG1hcmdpbjogMTZweCAwcHggMHB4IDVweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uc3R1ZGVudC10b2dnbGVCdG4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLmJveC1jb2x1bW4sXG4uYm94LWNvbHVtbjMge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxuLmJveC1jb2x1bW4zIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5zdHUtY29sMS1pbWcge1xuICBwYWRkaW5nOiAwcHggMTVweCAwcHggMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA0MnB4O1xuICBtYXJnaW46IDVweCAxNXB4IDdweCAwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZmVkZWI7XG59XG5cbi5tYWluLWNvbnRhaW5lci1idG4ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMHB4O1xuICBwYWRkaW5nOiAwcHggMTVweCAwcHggMHB4O1xufVxuXG4ucmFkaW9CdG4ge1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4uZ2VuZGVySW1nIHtcbiAgd2lkdGg6IDMycHg7XG59XG5cbi5jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDJweDtcbn1cblxuLyogVHJhY2sgKi9cbi5jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLyogSGFuZGxlICovXG4uY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG4uY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1NTU7XG59XG5cbi5kcm9wLXNlbGVjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuc2VsZWN0LnN0dS1pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5zZWxlY3QtaW5wdXQsIC5zZWxlY3Qtcm91dGVpbmZvIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA2OHB4O1xuICB3aWR0aDogOTglO1xuICBjb2xvcjogIzU1NTc1Nztcbn1cblxuLnNlbGVjdC1yb3V0ZWluZm8ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuc2VsZWN0Lm9wdGlvbi1ib2R5OmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm9wdGlvbi1oZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XG59XG5cbi5yb3V0ZS1pbmZvIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5vcHRpb246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZ2Vvem9uZS1pbmZvIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZjdmNztcbiAgaGVpZ2h0OiAyNzNweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBvcHVwLWhlYWQge1xuICBjb2xvcjogIzM4ODBmZjtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDEwcHggYXV0byAxMHB4O1xufVxuXG4uc2hhcGVzLWl0ZW0ge1xuICBjb2xvcjogIzkyOGQ4YjtcbiAgei1pbmRleDogMTI7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDQ1JTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzFweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmZThlYztcbiAgb3V0bGluZTogbm9uZTtcbn0iLCIud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luICAgICAgIDogM3B4IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5AbWVkaWEobWluLXdpZHRoOjc2N3B4KXtcclxuLndyYXBwZXItY29udGFpbmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTBweDtcclxufVxyXG59XHJcbi5zZWN0aW9uSWQsLnBhcmVudCwudGFnLC5jbGFzc2lke1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zZWN0aW9uSWQsLnBhcmVudCwudGFnLC5jbGFzc2lke1xyXG4gICAgJjphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwiXFxmMDIyXCI7XHJcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xyXG4gICAgY29sb3I6ICMzODgwZmY7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjZlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTlweDtcclxuICAgIGxlZnQ6IDIxcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjBlZmVlO1xyXG4gICAgfVxyXG59XHJcbi5wYXJlbnQ6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiBcIlxcZjAwN1wiO1xyXG59XHJcbi50YWc6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiBcIlxcZjA5ZFwiO1xyXG4gICAgcGFkZGluZy1yaWdodDogMC4zZW07XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICB0b3A6IDI0cHg7XHJcbn1cclxuLmNsYXNzaWQ6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiBcIlxcZjBmN1wiO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgdG9wOiAyMXB4O1xyXG59XHJcbi5yYWRpby10ZXh0e1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiA3cHggO1xyXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5kZWF0aWxzLWhlYWRlciB7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMzg4MGZmO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDY1cHg7XHJcbn1cclxuLnN0dS1pdGVtcyB7XHJcbiAgICBtYXJnaW4gICAgICAgICAgOiAxMHB4IDZweCAwcHg7XHJcbiAgICBwYWRkaW5nICAgICAgICAgOiAwcHg7ICAgXHJcbiAgICBoZWlnaHQgICAgICAgICAgOiA0NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcclxuICAgIFxyXG5cclxufVxyXG4jc3R1ZGVudC1pbmZve1xyXG4gICAgYmFja2dyb3VuZCAgIDogI2YyZjJmMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4uc3R1LWlucHV0IHtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDowcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOjJweDtcclxufVxyXG5cclxuLnRleHRjb2xvciB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvciAgICA6IHJnYigxMTcsIDExOCwgMTE5KVxyXG59XHJcblxyXG4uc3R1LWljb24sXHJcbi5zdHUtc3ZnIHtcclxuICAgIGZvbnQtc2l6ZSAgICA6IDMycHg7XHJcbiAgICBib3JkZXItcmlnaHQgOiAxcHggc29saWQgI2VmZWRlYjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4gICAgICAgOiAwcHggMTVweCA1cHggMHB4O1xyXG4gICAgY29sb3IgICAgICAgIDogIzM4ODBmZjtcclxufVxyXG5cclxuLnN0dS1zdmcge1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDBweDtcclxuICAgIGhlaWdodCA6IDMwcHg7XHJcbiAgICB3aWR0aCAgOiA0MnB4O1xyXG4gICAgbWFyZ2luIDogNXB4IDE1cHggN3B4IDhweDtcclxufVxyXG5cclxuLnN0dS1zZWxlY3QtYm94LFxyXG4uc2VsZWN0LWJveDIge1xyXG4gICAgLy9ib3JkZXIgICAgICAgOiAxcHggc29saWQgI2NmZThlYztcclxuICAgIGhlaWdodCAgICAgICA6IDQ1cHg7XHJcbiAgICAvL2JvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGJhY2tncm91bmQgICA6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuLnRleHQtc2VsZWN0LWJveCB7XHJcbiAgICBoZWlnaHQgICAgOiA0OHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbiAgICA6IDEwcHg7XHJcbn1cclxuXHJcbi5zdHUtc2VsZWN0LWJveC1jb2wge1xyXG4gICAgbWFyZ2luIDogMTZweCAwcHggMHB4IDVweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnN0dWRlbnQtdG9nZ2xlQnRuIHtcclxuICAgIGZsb2F0ICAgICAgICAgIDogcmlnaHQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmcgICAgICAgIDogMHB4O1xyXG4gICAgbWFyZ2luICAgICAgICAgOiA1cHggMHB4O1xyXG59XHJcblxyXG4uYm94LWNvbHVtbixcclxuLmJveC1jb2x1bW4zIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmcgICAgICA6IDFweDtcclxuICAgIFxyXG59XHJcblxyXG4uYm94LWNvbHVtbjMge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5zdHUtY29sMS1pbWcge1xyXG4gICAgcGFkZGluZyAgICAgOiAwcHggMTVweCAwcHggMHB4O1xyXG4gICAgaGVpZ2h0ICAgICAgOiAzMHB4O1xyXG4gICAgd2lkdGggICAgICAgOiA0MnB4O1xyXG4gICAgbWFyZ2luICAgICAgOiA1cHggMTVweCA3cHggMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VmZWRlYjtcclxufVxyXG5cclxuXHJcbi5tYWluLWNvbnRhaW5lci1idG4ge1xyXG4gICAgaGVpZ2h0IDogNTBweDtcclxuICAgIHdpZHRoICA6IDIwMHB4O1xyXG4gICAgbWFyZ2luIDogMTBweCBhdXRvIDBweDtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4IDBweCAwcHg7XHJcbn1cclxuLnJhZGlvQnRuIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLmdlbmRlckltZyB7XHJcbiAgICB3aWR0aDogMzJweDtcclxufVxyXG5cclxuXHJcbi5jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRyYWNrICovXHJcbiAgLmNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTsgXHJcbiAgfVxyXG4gICBcclxuICAvKiBIYW5kbGUgKi9cclxuICAuY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOmxpZ2h0Z3JheTsgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4gIC5jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM1NTU7IFxyXG4gIH1cclxuXHJcbi5kcm9wLXNlbGVjdGlvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuc2VsZWN0LnN0dS1pbnB1dCB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4uc2VsZWN0LWlucHV0LC5zZWxlY3Qtcm91dGVpbmZve1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNjhweDtcclxuICAgIHdpZHRoIDo5OCU7XHJcbiAgICBjb2xvciA6cmdiKDg1LCA4NywgODcpO1xyXG59XHJcbi5zZWxlY3Qtcm91dGVpbmZve1xyXG4gICAgd2lkdGg6MTAwJVxyXG59XHJcbnNlbGVjdC5vcHRpb24tYm9keTpob3ZlcntcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLm9wdGlvbi1oZWFke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XHJcbn1cclxuLnJvdXRlLWluZm97XHJcbiAgICBtYXJnaW46MTBweDtcclxufVxyXG5vcHRpb246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5nZW96b25lLWluZm97XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjQ3LCAyNDcsIDI0Nyk7XHJcbiAgICBoZWlnaHQ6MjczcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoIDoxMDAlO1xyXG59XHJcbi5wb3B1cC1oZWFkIHtcclxuICAgIGNvbG9yICAgICAgOiAjMzg4MGZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBmb250LXNpemUgIDogMjhweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbiAgICAgOiAxMHB4IGF1dG8gMTBweDtcclxufVxyXG5cclxuLnNoYXBlcy1pdGVte1xyXG4gICAgY29sb3I6ICM5MjhkOGI7XHJcbiAgICB6LWluZGV4OiAxMjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNDUlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDMxcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2ZlOGVjO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/skt/student/add-student/add-student.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/skt/student/add-student/add-student.component.ts ***!
  \******************************************************************/
/*! exports provided: AddStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudentComponent", function() { return AddStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth-map.service */ "./src/app/services/auth-map.service.ts");
/* harmony import */ var src_app_services_google_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/google-map.service */ "./src/app/services/google-map.service.ts");
/* harmony import */ var src_app_services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/openlayer-map.service */ "./src/app/services/openlayer-map.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");










let AddStudentComponent = class AddStudentComponent {
    constructor(modalController, formBuilder, mapService, ajaxService, commonService, alertController) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.mapService = mapService;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.alertController = alertController;
        this.type = "text";
        this.update = "";
        this.parentDetails = false;
        this.tagdetails = false;
        this.classDetails = false;
        this.controlEnabled = false;
        this.editTagId = "select tagId";
        this.editTextbox = false;
        this.editselectbox = false;
        this.selectedArray = [];
        this.field = {};
        if (localStorage.map == "GoogleMap") {
            this.mapService = new src_app_services_google_map_service__WEBPACK_IMPORTED_MODULE_5__["GoogleMapService"]();
        }
        else {
            this.mapService = new src_app_services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_6__["OpenlayerMapService"]();
        }
    }
    editmethod() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/student/get/studentdetails?stin=" + this.value;
        this.ajaxService.ajaxGetObject(url).subscribe((res) => {
            this.studentinfo = JSON.parse(res);
            this.update = "available";
            this.editTextbox = true;
            this.sectionIds =
                this.classsectionid[this.studentinfo.studentinfo.classId];
            this.studentDetails.patchValue({
                rollno: this.studentinfo.studentinfo.rollNo,
                firstname: this.studentinfo.studentinfo.studentName1,
                gender: this.studentinfo.studentinfo.sex,
                parentName: this.studentinfo.studentinfo.parentId,
                sectionId: this.studentinfo.studentinfo.sectionId,
                classId: this.studentinfo.studentinfo.classId,
                tagId: this.studentinfo.studentinfo.tagId,
                // lastname:this.studentinfo.studentinfo.studentName2,
                dob: this.studentinfo.studentinfo.dob,
                address: this.studentinfo.studentinfo.address,
                state: this.studentinfo.studentinfo.state,
                district: this.studentinfo.studentinfo.district,
                pincode: this.studentinfo.studentinfo.pincode,
            });
        });
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    createForm() {
        this.studentDetails = this.formBuilder.group({
            rollno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ["Male", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            parentName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sectionId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            classId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tagId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // lastname:['',Validators.required],
            dob: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            district: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pincode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    submit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var datas = {
                rollNo: this.studentDetails.value.rollno.toString(),
                studentName1: this.studentDetails.value.firstname.toString(),
                studentName2: "--".toString(),
                sex: this.studentDetails.value.gender.toString(),
                classId: this.studentDetails.value.classId.toString(),
                sectionId: this.studentDetails.value.sectionId.toString(),
                tagId: this.studentDetails.value.tagId.toString(),
                parentId: this.studentDetails.value.parentName.toString(),
                schoolId: localStorage.getItem("corpId"),
                updateBy: localStorage.getItem("corpId"),
                branchId: localStorage.getItem("corpId"),
                dob: this.studentDetails.value.dob.toString(),
                address: this.studentDetails.value.address.toString(),
                district: this.studentDetails.value.state.toString(),
                state: this.studentDetails.value.district.toString(),
                pincode: this.studentDetails.value.pincode.toString(),
            };
            if (this.update != "available") {
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/student/add/studentdetails";
                datas["messageAlert"] = 1;
            }
            else {
                url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/student/update/studentdetails";
                datas["stin"] = this.value;
            }
            this.ajaxService.ajaxPostMethod(url, datas).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (res.message == "success") {
                    this.commonService.presentToast("Student Details Added Sucessfully");
                    this.studentDetails.reset();
                    this.modalController.dismiss();
                }
                else if (res.message == "Updated") {
                    this.commonService.presentToast("Student Details Updated sucessfully");
                    this.studentDetails.reset();
                    this.modalController.dismiss();
                }
                else {
                    this.commonService.presentToast("Please contact support team");
                }
            }));
        });
    }
    genderSelection(ev) {
        if (ev.target.value === "Male") {
            this.gender = true;
        }
        else if (ev.target.value === "Female") {
            this.gender = false;
        }
    }
    getdetails() {
        const companyDatas = {
            schoolId: localStorage.getItem("corpId"),
            branchId: localStorage.getItem("corpId"),
        };
        const data = [
            {
                sectionIds: "/student/SectionIds?schoolId=" +
                    companyDatas.schoolId +
                    "&branchId=" +
                    companyDatas.branchId,
            },
            {
                pickupStop: "/student/stop?schoolId=" +
                    companyDatas.schoolId +
                    "&branchId=" +
                    companyDatas.branchId,
            },
            {
                pickupRoute: "/student/route?schoolId=" +
                    companyDatas.schoolId +
                    "&branchId=" +
                    companyDatas.branchId,
            },
            { tagId: "/tag/tagId" },
            {
                pickuptrip: "/student/getPreferences?key=trip&companyId=" + companyDatas.branchId,
            },
            {
                alertOption: "/student/getPreferences?key=Sktalert&companyId=demo" +
                    companyDatas.branchId,
            },
        ];
        data.forEach((element) => {
            if (Object.keys(element)[0] !== "tagId") {
                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + Object.values(element);
                this.ajaxService.ajaxGet(url).subscribe((res) => {
                    if (Object.keys(element)[0] == "pickupRoute") {
                        this.pickuproute = this.droproute = res;
                    }
                    else if (Object.keys(element)[0] == "pickuptrip") {
                        this.pickuptrip = this.droptrip = res;
                    }
                    else if (Object.keys(element)[0] == "pickupStop") {
                        this.pickupstop = this.dropstop = res;
                    }
                    else if (Object.keys(element)[0] == "tagId") {
                    }
                });
            }
            else {
                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                    "/tag/tagId?schoolId=" +
                    localStorage.getItem("corpId") +
                    "&branchId=" +
                    localStorage.getItem("corpId");
                this.ajaxService.ajaxGetObject(url).subscribe((res) => {
                    this.selecttagid = JSON.parse(res);
                });
            }
        });
    }
    getAlerts() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/student/getPreferences?key=Sktalert&companyId=demo";
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.alertOption = res;
        });
    }
    getclassIds() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/student/classIds?schoolId=" +
            localStorage.getItem("corpId") +
            "&branchId=" +
            localStorage.getItem("corpId");
        this.ajaxService.ajaxGetObject(url).subscribe((res) => {
            this.classsectionid = JSON.parse(res);
            this.classid = Object.keys(this.classsectionid);
        });
    }
    parentNames() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/student/getParentname?companyId=" +
            localStorage.getItem("corpId");
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.parentDetailsList = res;
        });
    }
    getsectionId(ev) {
        this.studentDetails.patchValue({
            sectionId: "",
        });
        this.sectionIds = this.classsectionid[ev.target.value];
    }
    ngOnInit() {
        this.parentNames();
        this.getAlerts();
        this.getdetails();
        this.getclassIds();
        this.studentData = this.studentinfo;
        this.createForm();
        if (this.value) {
            this.editmethod();
        }
    }
};
AddStudentComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_4__["AuthMapService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_8__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapElement", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddStudentComponent.prototype, "mapElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddStudentComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddStudentComponent.prototype, "value", void 0);
AddStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-student",
        template: __webpack_require__(/*! raw-loader!./add-student.component.html */ "./node_modules/raw-loader/index.js!./src/app/skt/student/add-student/add-student.component.html"),
        styles: [__webpack_require__(/*! ./add-student.component.scss */ "./src/app/skt/student/add-student/add-student.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_4__["AuthMapService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_8__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], AddStudentComponent);



/***/ }),

/***/ "./src/app/skt/student/student-addtional/student-addtional.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/skt/student/student-addtional/student-addtional.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper-container {\n  border-radius: 5px;\n  margin: 10px;\n}\n\n.wrapper-container-settings {\n  display: none;\n}\n\n.student-container {\n  padding: 5px;\n  margin: auto;\n}\n\n.deatils-header {\n  text-align: center;\n  color: #3880ff;\n  font-size: 24px;\n  margin: 0px 0px 9px;\n  letter-spacing: 1px;\n}\n\n.stu-items {\n  margin: 10px 6px 0px;\n  padding: 0px;\n  border: 1px solid #cfe8ec;\n  border-radius: 7px;\n  height: 48px;\n  background-color: #fcfcfc;\n}\n\n.stu-input {\n  --placeholder-color: rgb(117, 118, 119);\n}\n\n.textcolor {\n  font-size: 10px;\n  color: #757677;\n}\n\n.stu-icon,\n.stu-svg {\n  font-size: 32px;\n  border-right: 1px solid #efedeb;\n  padding-right: 10px;\n  margin: 0px 15px 5px 0px;\n  color: #3880ff;\n}\n\n.stu-svg {\n  padding: 0px 10px 0px 0px;\n  height: 30px;\n  width: 42px;\n  margin: 5px 15px 7px 8px;\n}\n\n.stu-select-box,\n.select-box2 {\n  border: 1px solid #cfe8ec;\n  height: 48px;\n  border-radius: 7px;\n  background: white;\n}\n\n.text-select-box {\n  height: 48px;\n  text-align: left;\n  margin: 10px;\n}\n\n.stu-select-box-col {\n  margin: 16px 0px 0px 5px;\n  padding: 0px;\n}\n\n.student-toggleBtn {\n  float: right;\n  --border-radius: 50%;\n  padding: 0px;\n  margin: 5px 0px;\n}\n\n.box-column,\n.box-column3 {\n  border: 1px solid #d8dede;\n  border-radius: 5px;\n  padding: 1px;\n  background: #f2f2f2;\n}\n\n.box-column3 {\n  background: white;\n}\n\n.stu-col1-img {\n  padding: 0px 15px 0px 0px;\n  height: 30px;\n  width: 42px;\n  margin: 5px 15px 7px 0px;\n  border-right: 1px solid #efedeb;\n}\n\n.box-column:hover {\n  box-shadow: 8px 7px 5px #dbddde;\n}\n\n.main-container-btn {\n  height: 50px;\n  width: 200px;\n  margin: 10px auto 0px;\n  padding: 0px 15px 0px 0px;\n}\n\n.radioBtn {\n  margin: 0px auto;\n}\n\n.genderImg {\n  width: 32px;\n}\n\n.alert-checkbox {\n  height: 20px;\n  width: 20px;\n}\n\n.alert-info {\n  height: 148px;\n  overflow-y: scroll;\n  margin-top: 10px;\n  font-size: 13px;\n}\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n.drop-selection {\n  margin-bottom: 8px;\n}\n\nselect.stu-input {\n  outline: none;\n  background: none;\n}\n\n.select-input, .select-routeinfo {\n  border: 0;\n  margin: 15px;\n  width: 90%;\n  color: #555757;\n}\n\n.select-routeinfo {\n  width: 100%;\n}\n\nselect.option-body:hover {\n  outline: none;\n}\n\n.option-head {\n  background-color: darkgray;\n}\n\n.route-info {\n  margin: 10px;\n}\n\noption:focus {\n  outline: none;\n}\n\n.geozone-info {\n  border: 1px solid #f7f7f7;\n  height: 273px !important;\n  width: 100%;\n}\n\n.popup-head {\n  color: #3880ff;\n  margin-left: 30px;\n  font-size: 28px !important;\n  font-weight: 600;\n  margin: 10px auto 10px;\n}\n\n.shapes-item {\n  color: #928d8b;\n  z-index: 12;\n  margin: auto;\n  position: absolute;\n  bottom: 45%;\n  right: 10px;\n  font-size: 31px;\n  border: 1px solid #cfe8ec;\n  outline: none;\n}\n\n#toolbar-fix {\n  zoom: 75%;\n}\n\n#content-fix {\n  zoom: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t0L3N0dWRlbnQvc3R1ZGVudC1hZGR0aW9uYWwvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxza3RcXHN0dWRlbnRcXHN0dWRlbnQtYWRkdGlvbmFsXFxzdHVkZW50LWFkZHRpb25hbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2t0L3N0dWRlbnQvc3R1ZGVudC1hZGR0aW9uYWwvc3R1ZGVudC1hZGR0aW9uYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0dKOztBRERBO0VBQ0ksdUNBQUE7QUNJSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDSUo7O0FEREE7O0VBRUksZUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUNJSjs7QUREQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBQ0lKOztBRERBOztFQUVJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNJSjs7QURBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNHSjs7QURBQTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtBQ0dKOztBREFBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNHSjs7QURBQTs7RUFFSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEQUE7RUFDSSxpQkFBQTtBQ0dKOztBREFBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsK0JBQUE7QUNHSjs7QURBQTtFQUNJLCtCQUFBO0FDR0o7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ01KOztBREpBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDT0o7O0FESkE7RUFDSSxXQUFBO0FDT0o7O0FESkUsVUFBQTs7QUFDQTtFQUNFLG1CQUFBO0FDT0o7O0FESkUsV0FBQTs7QUFDQTtFQUNFLGdCQUFBO0FDT0o7O0FESkUsb0JBQUE7O0FBQ0E7RUFDRSxnQkFBQTtBQ09KOztBREpBO0VBQ0ksa0JBQUE7QUNPSjs7QURMQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ1FKOztBRE5BO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ1NKOztBRFBBO0VBQ0ksV0FBQTtBQ1VKOztBRFJBO0VBQ0ksYUFBQTtBQ1dKOztBRFRBO0VBQ0ksMEJBQUE7QUNZSjs7QURWQTtFQUNJLFlBQUE7QUNhSjs7QURYQTtFQUNJLGFBQUE7QUNjSjs7QURaQTtFQUNJLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FDZUo7O0FEYkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNnQko7O0FEYkE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ2dCSjs7QURiQTtFQUNHLFNBQUE7QUNnQkg7O0FEZEE7RUFDSSxTQUFBO0FDaUJKIiwiZmlsZSI6InNyYy9hcHAvc2t0L3N0dWRlbnQvc3R1ZGVudC1hZGR0aW9uYWwvc3R1ZGVudC1hZGR0aW9uYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luICAgICAgIDogMTBweDtcclxufVxyXG5cclxuLndyYXBwZXItY29udGFpbmVyLXNldHRpbmdzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zdHVkZW50LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4gOiBhdXRvO1xyXG59XHJcbi5kZWF0aWxzLWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduICAgIDogY2VudGVyO1xyXG4gICAgY29sb3IgICAgICAgICA6ICMzODgwZmY7XHJcbiAgICBmb250LXNpemUgICAgIDogMjRweDtcclxuICAgIG1hcmdpbiAgICAgICAgOiAwcHggMHB4IDlweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuLnN0dS1pdGVtcyB7XHJcbiAgICBtYXJnaW4gICAgICAgICAgOiAxMHB4IDZweCAwcHg7XHJcbiAgICBwYWRkaW5nICAgICAgICAgOiAwcHg7XHJcbiAgICBib3JkZXIgICAgICAgICAgOiAxcHggc29saWQgI2NmZThlYztcclxuICAgIGJvcmRlci1yYWRpdXMgICA6IDdweDtcclxuICAgIGhlaWdodCAgICAgICAgICA6IDQ4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xyXG59XHJcbi5zdHUtaW5wdXQge1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiKDExNywgMTE4LCAxMTkpO1xyXG59XHJcblxyXG4udGV4dGNvbG9yIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yICAgIDogcmdiKDExNywgMTE4LCAxMTkpXHJcbn1cclxuXHJcbi5zdHUtaWNvbixcclxuLnN0dS1zdmcge1xyXG4gICAgZm9udC1zaXplICAgIDogMzJweDtcclxuICAgIGJvcmRlci1yaWdodCA6IDFweCBzb2xpZCAjZWZlZGViO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbiAgICAgICA6IDBweCAxNXB4IDVweCAwcHg7XHJcbiAgICBjb2xvciAgICAgICAgOiAjMzg4MGZmO1xyXG59XHJcblxyXG4uc3R1LXN2ZyB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMHB4O1xyXG4gICAgaGVpZ2h0IDogMzBweDtcclxuICAgIHdpZHRoICA6IDQycHg7XHJcbiAgICBtYXJnaW4gOiA1cHggMTVweCA3cHggOHB4O1xyXG59XHJcblxyXG4uc3R1LXNlbGVjdC1ib3gsXHJcbi5zZWxlY3QtYm94MiB7XHJcbiAgICBib3JkZXIgICAgICAgOiAxcHggc29saWQgI2NmZThlYztcclxuICAgIGhlaWdodCAgICAgICA6IDQ4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kICAgOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi50ZXh0LXNlbGVjdC1ib3gge1xyXG4gICAgaGVpZ2h0ICAgIDogNDhweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4gICAgOiAxMHB4O1xyXG59XHJcblxyXG4uc3R1LXNlbGVjdC1ib3gtY29sIHtcclxuICAgIG1hcmdpbiA6IDE2cHggMHB4IDBweCA1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5zdHVkZW50LXRvZ2dsZUJ0biB7XHJcbiAgICBmbG9hdCAgICAgICAgICA6IHJpZ2h0O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nICAgICAgICA6IDBweDtcclxuICAgIG1hcmdpbiAgICAgICAgIDogNXB4IDBweDtcclxufVxyXG5cclxuLmJveC1jb2x1bW4sXHJcbi5ib3gtY29sdW1uMyB7XHJcbiAgICBib3JkZXIgICAgICAgOiAxcHggc29saWQgcmdiKDIxNiwgMjIyLCAyMjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZyAgICAgIDogMXB4O1xyXG4gICAgYmFja2dyb3VuZCAgIDogI2YyZjJmMjtcclxufVxyXG5cclxuLmJveC1jb2x1bW4zIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uc3R1LWNvbDEtaW1nIHtcclxuICAgIHBhZGRpbmcgICAgIDogMHB4IDE1cHggMHB4IDBweDtcclxuICAgIGhlaWdodCAgICAgIDogMzBweDtcclxuICAgIHdpZHRoICAgICAgIDogNDJweDtcclxuICAgIG1hcmdpbiAgICAgIDogNXB4IDE1cHggN3B4IDBweDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZmVkZWI7XHJcbn1cclxuXHJcbi5ib3gtY29sdW1uOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDhweCA3cHggNXB4ICNkYmRkZGU7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lci1idG4ge1xyXG4gICAgaGVpZ2h0IDogNTBweDtcclxuICAgIHdpZHRoICA6IDIwMHB4O1xyXG4gICAgbWFyZ2luIDogMTBweCBhdXRvIDBweDtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4IDBweCAwcHg7XHJcbn1cclxuLnJhZGlvQnRuIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLmdlbmRlckltZyB7XHJcbiAgICB3aWR0aDogMzJweDtcclxufVxyXG4uYWxlcnQtY2hlY2tib3gge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGggOiAyMHB4O1xyXG59XHJcbi5hbGVydC1pbmZvIHtcclxuICAgIGhlaWdodCAgICA6IDE0OHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZSA6IDEzcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRyYWNrICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcclxuICB9XHJcbiAgIFxyXG4gIC8qIEhhbmRsZSAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODsgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzU1NTsgXHJcbiAgfVxyXG5cclxuLmRyb3Atc2VsZWN0aW9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5zZWxlY3Quc3R1LWlucHV0IHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbi5zZWxlY3QtaW5wdXQsLnNlbGVjdC1yb3V0ZWluZm97XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW46MTVweDtcclxuICAgIHdpZHRoIDo5MCU7XHJcbiAgICBjb2xvciA6cmdiKDg1LCA4NywgODcpO1xyXG59XHJcbi5zZWxlY3Qtcm91dGVpbmZve1xyXG4gICAgd2lkdGg6MTAwJVxyXG59XHJcbnNlbGVjdC5vcHRpb24tYm9keTpob3ZlcntcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLm9wdGlvbi1oZWFke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XHJcbn1cclxuLnJvdXRlLWluZm97XHJcbiAgICBtYXJnaW46MTBweDtcclxufVxyXG5vcHRpb246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5nZW96b25lLWluZm97XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjQ3LCAyNDcsIDI0Nyk7XHJcbiAgICBoZWlnaHQ6MjczcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoIDoxMDAlO1xyXG59XHJcbi5wb3B1cC1oZWFkIHtcclxuICAgIGNvbG9yICAgICAgOiAjMzg4MGZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBmb250LXNpemUgIDogMjhweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbiAgICAgOiAxMHB4IGF1dG8gMTBweDtcclxufVxyXG5cclxuLnNoYXBlcy1pdGVte1xyXG4gICAgY29sb3I6ICM5MjhkOGI7XHJcbiAgICB6LWluZGV4OiAxMjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNDUlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDMxcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2ZlOGVjO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI3Rvb2xiYXItZml4e1xyXG4gICB6b29tOjc1JVxyXG59XHJcbiNjb250ZW50LWZpeHtcclxuICAgIHpvb206ODAlIFxyXG59IiwiLndyYXBwZXItY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi53cmFwcGVyLWNvbnRhaW5lci1zZXR0aW5ncyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zdHVkZW50LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZGVhdGlscy1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzg4MGZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbjogMHB4IDBweCA5cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5zdHUtaXRlbXMge1xuICBtYXJnaW46IDEwcHggNnB4IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2ZlOGVjO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcbn1cblxuLnN0dS1pbnB1dCB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYigxMTcsIDExOCwgMTE5KTtcbn1cblxuLnRleHRjb2xvciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM3NTc2Nzc7XG59XG5cbi5zdHUtaWNvbixcbi5zdHUtc3ZnIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWZlZGViO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW46IDBweCAxNXB4IDVweCAwcHg7XG4gIGNvbG9yOiAjMzg4MGZmO1xufVxuXG4uc3R1LXN2ZyB7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDQycHg7XG4gIG1hcmdpbjogNXB4IDE1cHggN3B4IDhweDtcbn1cblxuLnN0dS1zZWxlY3QtYm94LFxuLnNlbGVjdC1ib3gyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmZThlYztcbiAgaGVpZ2h0OiA0OHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4udGV4dC1zZWxlY3QtYm94IHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5zdHUtc2VsZWN0LWJveC1jb2wge1xuICBtYXJnaW46IDE2cHggMHB4IDBweCA1cHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnN0dWRlbnQtdG9nZ2xlQnRuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDVweCAwcHg7XG59XG5cbi5ib3gtY29sdW1uLFxuLmJveC1jb2x1bW4zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGVkZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxcHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG5cbi5ib3gtY29sdW1uMyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uc3R1LWNvbDEtaW1nIHtcbiAgcGFkZGluZzogMHB4IDE1cHggMHB4IDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogNDJweDtcbiAgbWFyZ2luOiA1cHggMTVweCA3cHggMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWZlZGViO1xufVxuXG4uYm94LWNvbHVtbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDhweCA3cHggNXB4ICNkYmRkZGU7XG59XG5cbi5tYWluLWNvbnRhaW5lci1idG4ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMHB4O1xuICBwYWRkaW5nOiAwcHggMTVweCAwcHggMHB4O1xufVxuXG4ucmFkaW9CdG4ge1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4uZ2VuZGVySW1nIHtcbiAgd2lkdGg6IDMycHg7XG59XG5cbi5hbGVydC1jaGVja2JveCB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5hbGVydC1pbmZvIHtcbiAgaGVpZ2h0OiAxNDhweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xufVxuXG4uZHJvcC1zZWxlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbnNlbGVjdC5zdHUtaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uc2VsZWN0LWlucHV0LCAuc2VsZWN0LXJvdXRlaW5mbyB7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAxNXB4O1xuICB3aWR0aDogOTAlO1xuICBjb2xvcjogIzU1NTc1Nztcbn1cblxuLnNlbGVjdC1yb3V0ZWluZm8ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuc2VsZWN0Lm9wdGlvbi1ib2R5OmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm9wdGlvbi1oZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XG59XG5cbi5yb3V0ZS1pbmZvIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5vcHRpb246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZ2Vvem9uZS1pbmZvIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZjdmNztcbiAgaGVpZ2h0OiAyNzNweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBvcHVwLWhlYWQge1xuICBjb2xvcjogIzM4ODBmZjtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDEwcHggYXV0byAxMHB4O1xufVxuXG4uc2hhcGVzLWl0ZW0ge1xuICBjb2xvcjogIzkyOGQ4YjtcbiAgei1pbmRleDogMTI7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDQ1JTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzFweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmZThlYztcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuI3Rvb2xiYXItZml4IHtcbiAgem9vbTogNzUlO1xufVxuXG4jY29udGVudC1maXgge1xuICB6b29tOiA4MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/skt/student/student-addtional/student-addtional.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/skt/student/student-addtional/student-addtional.component.ts ***!
  \******************************************************************************/
/*! exports provided: StudentAddtionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAddtionalComponent", function() { return StudentAddtionalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _classdetails_class_additional_class_additional_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classdetails/class-additional/class-additional.component */ "./src/app/skt/classdetails/class-additional/class-additional.component.ts");
/* harmony import */ var _parent_parent_additional_parent_additional_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../parent/parent-additional/parent-additional.component */ "./src/app/skt/parent/parent-additional/parent-additional.component.ts");
/* harmony import */ var _route_route_common_route_common_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../route/route-common/route-common.component */ "./src/app/skt/route/route-common/route-common.component.ts");
/* harmony import */ var _tag_tag_additional_tag_additional_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tag/tag-additional/tag-additional.component */ "./src/app/skt/tag/tag-additional/tag-additional.component.ts");
/* harmony import */ var src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth-map.service */ "./src/app/services/auth-map.service.ts");
/* harmony import */ var src_app_services_google_map_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/google-map.service */ "./src/app/services/google-map.service.ts");
/* harmony import */ var src_app_services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/openlayer-map.service */ "./src/app/services/openlayer-map.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");














let StudentAddtionalComponent = class StudentAddtionalComponent {
    constructor(modalController, formBuilder, mapService, ajaxService, commonService) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.mapService = mapService;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.update = '';
        this.parentDetails = false;
        this.tagdetails = false;
        this.classDetails = false;
        this.controlEnabled = false;
        this.selectedArray = [];
        this.field = {};
        this.loadMap = () => {
            setTimeout(() => {
                if (localStorage.map === "GoogleMap") {
                    this.map = this.mapService.loadMap(this.mapElement.nativeElement, { lat: 17.786351, lng: 78.090820 }, true, this.popUp);
                }
                else {
                    this.map = this.mapService.loadMap(this.mapElement.nativeElement, { lat: 17.786351, lng: 78.090820 }, true, this.popUp);
                    this.mapService.setCenter(this.map, { lat: 17.786351, lng: 78.090820 });
                }
                this.mapService.setCenter(this.map, { lat: 17.786351, lng: 78.090820 });
            });
        };
        if (localStorage.map == "GoogleMap") {
            this.mapService = new src_app_services_google_map_service__WEBPACK_IMPORTED_MODULE_9__["GoogleMapService"]();
        }
        else {
            this.mapService = new src_app_services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_10__["OpenlayerMapService"]();
        }
    }
    openDetailsModel(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (data == "classDetails") {
                const modal = yield this.modalController.create({
                    component: _classdetails_class_additional_class_additional_component__WEBPACK_IMPORTED_MODULE_4__["ClassAdditionalComponent"],
                    cssClass: 'my-class-css'
                });
                return yield modal.present();
            }
            else if (data == "parentDetails") {
                const modal = yield this.modalController.create({
                    component: _parent_parent_additional_parent_additional_component__WEBPACK_IMPORTED_MODULE_5__["ParentAdditionalComponent"],
                    cssClass: 'my-parent-css'
                });
                return yield modal.present();
            }
            else if (data == "tagDetails") {
                const modal = yield this.modalController.create({
                    component: _tag_tag_additional_tag_additional_component__WEBPACK_IMPORTED_MODULE_7__["TagAdditionalComponent"],
                    cssClass: 'my-custome-css'
                });
                return yield modal.present();
            }
            else if (data == "routeandTrip") {
                const modal = yield this.modalController.create({
                    component: _route_route_common_route_common_component__WEBPACK_IMPORTED_MODULE_6__["RouteCommonComponent"],
                    cssClass: 'student-routeandTrip'
                });
                return yield modal.present();
            }
        });
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    selectDetails(data, value) {
        if (data == "parentDetails") {
            this.parentDetails = value;
        }
        else if (data == "tagdetails") {
            this.tagdetails = value;
        }
        else if (data == "classDetails") {
            this.classDetails = value;
        }
        else {
            this.parentDetails = false;
            this.tagdetails = false;
            this.classDetails = false;
        }
    }
    closeCircle(data, value) {
        if (data == "parentDetails") {
            this.parentDetails = value;
        }
        else if (data == "tagdetails") {
            this.tagdetails = value;
        }
        else if (data == "classDetails") {
            this.classDetails = value;
        }
        else {
            this.parentDetails = true;
            this.tagdetails = true;
            this.classDetails = true;
        }
    }
    submit() {
        var datas = {
            "rollNo": this.studentDetails.value.rollno + '',
            "mode": "NEW",
            "studentName": this.studentDetails.value.firstname,
            "sex": this.studentDetails.value.gender,
            "classId": this.studentDetails.value.classId,
            "sectionId": this.studentDetails.value.sectionId,
            "tagId": this.studentDetails.value.tagId,
            "latlng": "",
            "shape": "",
            "contactNo": this.studentDetails.value.contactno + '',
            "schoolId": localStorage.getItem('corpId'),
            "companyId": localStorage.getItem('corpId'),
            "branchId": localStorage.getItem('corpId'),
            "userImage": "",
            "alerttype": "",
            "messageAlert": parseInt(this.studentDetails.value.alertoption),
            "parentName": this.studentDetails.value.parentName,
            "pickupRoute": this.studentDetails.value.pickuproute,
            "pickupTrip": this.studentDetails.value.pickuptrip,
            "pickupStop": this.studentDetails.value.pickupstop,
            "dropRoute": this.studentDetails.value.droproute,
            "dropTrip": this.studentDetails.value.droptrip,
            "dropStop": this.studentDetails.value.dropstop,
        };
        if (this.update != 'available') {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["serverUrl"].web + '/student/addStudent';
        }
        else {
            url = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["serverUrl"].web + '/student/updateStudent';
            datas["stin"] = this.value.stin;
            datas["mode"] = "";
        }
        this.ajaxService.ajaxPostMethod(url, datas).subscribe(res => {
            console.log(res);
            if (res.message == "Added Successfully") {
                this.commonService.presentToast('Added Successfully');
                this.modalController.dismiss();
            }
            else if (res.message == "Updated Successfully") {
                this.modalController.dismiss();
                this.commonService.presentToast('Updated Successfully');
            }
            else {
                this.commonService.presentToast('Contact Support team');
            }
        });
    }
    genderSelection(ev) {
        console.log(ev, ev.target.value, "My event");
        if (ev.target.value === "Male") {
            this.gender = true;
        }
        else if (ev.target.value === "Female") {
            this.gender = false;
        }
    }
    createForm() {
        this.studentDetails = this.formBuilder.group({
            rollno: ['',],
            firstname: ['',],
            contactno: ['',],
            gender: ['Male',],
            parentName: ['',],
            sectionId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            classId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tagId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pickuproute: ['',],
            pickuptrip: ['',],
            pickupstop: ['',],
            droproute: ['',],
            droptrip: ['',],
            dropstop: ['',],
            alertoption: ['',],
        });
    }
    ionViewWillEnter() {
        setTimeout(() => {
            if (this.map.setTarget)
                this.map.setTarget(this.mapElement.nativeElement);
            // this.loadMarkers();
        }, 2000);
    }
    getdetails() {
        const companyDatas = {
            schoolId: localStorage.getItem('corpId'),
            branchId: localStorage.getItem('corpId')
        };
        const data = [{ "classId": '/student/classIds?schoolId=' + companyDatas.schoolId + '&branchId=' + companyDatas.branchId },
            { "sectionIds": '/student/SectionIds?schoolId=' + companyDatas.schoolId + '&branchId=' + companyDatas.branchId },
            { "pickupStop": '/student/stop?schoolId=' + companyDatas.schoolId + '&branchId=' + companyDatas.branchId },
            { "pickupRoute": '/student/route?schoolId=' + companyDatas.schoolId + '&branchId=' + companyDatas.branchId },
            { "tagId": '/tag/tagId' }, { "pickuptrip": '/student/getPreferences?key=trip&companyId=' + companyDatas.branchId },
            { "alertOption": '/student/getPreferences?key=Sktalert&companyId=demo' + companyDatas.branchId },
        ];
        // const classId = serverUrl.web + '/student/classIds';
        // const sectionId = serverUrl.web + '/student/SectionIds';
        data.forEach(element => {
            if (Object.keys(element)[0] !== "tagId") {
                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["serverUrl"].web + Object.values(element);
                this.ajaxService.ajaxGet(url).subscribe(res => {
                    if (Object.keys(element)[0] == "classId") {
                        this.classid = res;
                    }
                    else if (Object.keys(element)[0] == "sectionIds") {
                        this.sectionIds = res;
                    }
                    else if (Object.keys(element)[0] == "pickupRoute") {
                        this.pickuproute = this.droproute = res;
                    }
                    else if (Object.keys(element)[0] == "pickuptrip") {
                        this.pickuptrip = this.droptrip = res;
                        //  }else if(Object.keys(element)[0] == "alertOption"){
                        //    this.alertOption = res;
                        //  this.alertOption =[{name:"sms",type:0},{name:"mail",type:1}]
                    }
                    else if (Object.keys(element)[0] == "pickupStop") {
                        this.pickupstop = this.dropstop = res;
                    }
                    else if (Object.keys(element)[0] == "tagId") {
                        // this.pickuproute , this.droproute=res;
                        // this.selecttagid = res;
                        // console.log(res)
                    }
                });
            }
            else {
                // const url=serverUrl.web + '/tag/tagId';
                // this.ajaxService.ajaxPostWithBody(url, companyDatas).subscribe(res=>{
                //   console.log(res)
                //   this.selecttagid = res;
                // })
                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["serverUrl"].web + '/tag/tagId?schoolId=' + localStorage.getItem('corpId') + '&branchId=' + localStorage.getItem('corpId');
                this.ajaxService.ajaxGetObject(url).subscribe(res => {
                    this.selecttagid = JSON.parse(res);
                });
            }
            // console.log(res)
            // this.tagIds = res;
        });
        // })
    }
    getAlerts() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["serverUrl"].web + '/student/getPreferences?key=Sktalert&companyId=demo';
        this.ajaxService.ajaxGetPerference(url).subscribe(res => {
            this.alertOption = res;
        });
    }
    parentNames() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["serverUrl"].web + '/student/getParentname?companyId=' + localStorage.getItem('corpId');
        this.ajaxService.ajaxGet(url).subscribe(res => {
            this.parentDetailsList = res;
        });
    }
    // yasir code for alerts
    selectData(alertchecks) {
        if (alertchecks.isChecked == false) {
            this.selectedArray.push(alertchecks);
        }
        else {
            let newArray = this.selectedArray.filter(function (el) {
                return el.id !== alertchecks.id;
            });
            this.selectedArray = newArray;
        }
        console.log(this.selectedArray);
    }
    submitData() {
        var postDatas = [];
        for (var i = 0; i < this.selectedArray.length; i++) {
            // postDatas += this.sampleData[i].name+','
            postDatas.push(this.selectedArray[i].alertname);
        }
    }
    //
    ngOnInit() {
        this.parentNames();
        this.getAlerts();
        this.getdetails();
        this.loadMap();
        this.studentData = this.value;
        this.createForm();
        //yasir
        this.alertchecks = [
            { alertname: "Dear parentname, Greetings! studentname was absent today.", id: 1, isChecked: false },
            { alertname: "Dear Parent, Your ward studentname school bus is about to arrive at your bus stop in few minutes.", id: 2, isChecked: true },
            { alertname: "Dear Parent, Your ward studentname school bus has reached busstopname at eventtime.", id: 3, isChecked: false },
            { alertname: "Dear parent, Your ward studentname school bus has started from busstopname at eventtime.", id: 4, isChecked: false },
            { alertname: "Dear Parent, Your ward studentname school bus is started from school.", id: 5, isChecked: false },
            { alertname: "Dear parentname, Greetings! studentname has crossed busstopname on eventtime.", id: 6, isChecked: false },
            { alertname: "Dear parentname! Greetings studentname has been dropped at busstopname bus stop on eventtime.", id: 7, isChecked: false },
            { alertname: "Dear parentname! Greetings studentname has reached the busstopname on eventtime.", id: 8, isChecked: false },
            { alertname: "Dear parentname, Greetings! studentname has boarded the bus from busstopname on eventtime.", id: 9, isChecked: false },
            { alertname: "Dear parentname, Greetings! studentname has left the bus from busstopname  on eventtime.", id: 10, isChecked: false },
            { alertname: "Dear parentname! Greetings studentname has boarded the bus from busstopname bus stop on eventtime.", id: 11, isChecked: false },
            { alertname: "Dear parentname! Greetings studentname has started from busstopname on eventtime.", id: 12, isChecked: false }
        ];
        this.field = { dataSource: this.alertchecks, id: 'id', text: 'alertname' };
        for (var i = 0; i < this.alertchecks.length; i++) {
            if (this.alertchecks[i].isChecked == true) {
                this.selectedArray.push(this.alertchecks[i]);
                console.log(this.alertchecks[i]);
            }
        }
        if (this.value) {
            this.update = "available";
            this.controlEnabled = true;
            this.studentDetails.patchValue({
                rollno: this.studentData.rollNo,
                firstname: this.studentData.studentName,
                contactno: this.studentData.contactNo,
                gender: this.studentData.sex,
                parentName: this.studentData.parentName,
                sectionId: this.studentData.sectionId,
                classId: this.studentData.classId,
                tagId: this.studentData.tagId,
                pickuproute: this.studentData.pickupRoute,
                pickuptrip: this.studentData.pickupTrip,
                pickupstop: this.studentData.pickupStop,
                droproute: this.studentData.dropRoute,
                droptrip: this.studentData.dropTrip,
                dropstop: this.studentData.dropStop,
                alertoption: this.studentData.messageAlert,
            });
        }
        // branchId: "demo"
        // classId: "I"
        // contactNo: "12313213"
        // dropRoute: ""
        // dropStop: ""
        // dropTrip: ""
        // latlng: "-"
        // messageAlert: 1
        // parentName: ""
        // pickupRoute: ""
        // pickupStop: ""
        // pickupTrip: ""
        // rollNo: 1232
        // schoolId: "demo"
        // sectionId: "B"
        // sex: "Male"
        // studentName: "asda"
        // tagId: "0002164852"
    }
};
StudentAddtionalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_8__["AuthMapService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_12__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_13__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElement', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StudentAddtionalComponent.prototype, "mapElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StudentAddtionalComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StudentAddtionalComponent.prototype, "value", void 0);
StudentAddtionalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student-addtional',
        template: __webpack_require__(/*! raw-loader!./student-addtional.component.html */ "./node_modules/raw-loader/index.js!./src/app/skt/student/student-addtional/student-addtional.component.html"),
        styles: [__webpack_require__(/*! ./student-addtional.component.scss */ "./src/app/skt/student/student-addtional/student-addtional.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_8__["AuthMapService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_12__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_13__["CommonService"]])
], StudentAddtionalComponent);



/***/ }),

/***/ "./src/app/skt/student/student-class-additional/student-class-additional.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/skt/student/student-class-additional/student-class-additional.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NrdC9zdHVkZW50L3N0dWRlbnQtY2xhc3MtYWRkaXRpb25hbC9zdHVkZW50LWNsYXNzLWFkZGl0aW9uYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/skt/student/student-class-additional/student-class-additional.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/skt/student/student-class-additional/student-class-additional.component.ts ***!
  \********************************************************************************************/
/*! exports provided: StudentClassAdditionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentClassAdditionalComponent", function() { return StudentClassAdditionalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StudentClassAdditionalComponent = class StudentClassAdditionalComponent {
    constructor() { }
    ngOnInit() { }
};
StudentClassAdditionalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student-class-additional',
        template: __webpack_require__(/*! raw-loader!./student-class-additional.component.html */ "./node_modules/raw-loader/index.js!./src/app/skt/student/student-class-additional/student-class-additional.component.html"),
        styles: [__webpack_require__(/*! ./student-class-additional.component.scss */ "./src/app/skt/student/student-class-additional/student-class-additional.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StudentClassAdditionalComponent);



/***/ }),

/***/ "./src/app/skt/tag/tag-additional/tag-additional.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/skt/tag/tag-additional/tag-additional.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tag-container {\n  width: 95%;\n  height: 80%;\n  margin: 0px auto 80px;\n  padding: 0px auto;\n  background-color: #f3f3f3;\n}\n\n.tag-items {\n  margin: 5px 6px 0px;\n  padding: 0px;\n  border: 1px solid #cfe8ec;\n  border-radius: 20px;\n  height: 40px;\n  background-color: #fcfcfc;\n}\n\n.tag-input {\n  font-size: 13px;\n  --placeholder-color: rgb(117, 118, 119);\n  --padding-bottom:24px;\n}\n\n.tag-icon {\n  font-size: 25px;\n  border-right: 1px solid #efedeb;\n  padding-right: 10px;\n  margin: 0px 5px 17px;\n  color: #3880ff;\n}\n\n.tag-btn {\n  height: 30px;\n  font-size: small;\n  margin: auto;\n  padding: 2px;\n  text-align: center;\n}\n\n.option-head {\n  background-color: darkgray;\n}\n\n.box {\n  outline: none;\n  margin-top: -15px;\n  width: 100%;\n  border: 1px solid white;\n  color: #555757;\n  font-size: 13px;\n}\n\n.popup-head {\n  color: #3880ff;\n  margin-left: -15px;\n  text-align: -webkit-center;\n  padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t0L3RhZy90YWctYWRkaXRpb25hbC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXHNrdFxcdGFnXFx0YWctYWRkaXRpb25hbFxcdGFnLWFkZGl0aW9uYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NrdC90YWcvdGFnLWFkZGl0aW9uYWwvdGFnLWFkZGl0aW9uYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLHVDQUFBO0VBQ0EscUJBQUE7QUNFSjs7QURHQTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDQUo7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSwwQkFBQTtBQ0FKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3NrdC90YWcvdGFnLWFkZGl0aW9uYWwvdGFnLWFkZGl0aW9uYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFnLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aCAgICAgICAgICAgOiA5NSU7XHJcbiAgICBoZWlnaHQgICAgICAgICAgOiA4MCU7XHJcbiAgICBtYXJnaW4gICAgICAgICAgOiAwcHggYXV0byA4MHB4O1xyXG4gICAgcGFkZGluZyAgICAgICAgIDogMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG59XHJcblxyXG4udGFnLWl0ZW1ze1xyXG4gICAgbWFyZ2luOiA1cHggNnB4IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZmU4ZWM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcclxufVxyXG4udGFnLWlucHV0e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiKDExNywgMTE4LCAxMTkpO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbToyNHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi50YWctaWNvbntcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgI2VmZWRlYjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW46IDBweCA1cHggMTdweDtcclxuICAgIGNvbG9yOiMzODgwZmY7XHJcbn1cclxuLnRhZy1idG57XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzoycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ub3B0aW9uLWhlYWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcclxufVxyXG4uYm94e1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGNvbG9yOiAjNTU1NzU3O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5wb3B1cC1oZWFkIHtcclxuICAgIGNvbG9yOiAjMzg4MGZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufSIsIi50YWctY29udGFpbmVyIHtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA4MCU7XG4gIG1hcmdpbjogMHB4IGF1dG8gODBweDtcbiAgcGFkZGluZzogMHB4IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG59XG5cbi50YWctaXRlbXMge1xuICBtYXJnaW46IDVweCA2cHggMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmU4ZWM7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcbn1cblxuLnRhZy1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiKDExNywgMTE4LCAxMTkpO1xuICAtLXBhZGRpbmctYm90dG9tOjI0cHg7XG59XG5cbi50YWctaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VmZWRlYjtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbWFyZ2luOiAwcHggNXB4IDE3cHg7XG4gIGNvbG9yOiAjMzg4MGZmO1xufVxuXG4udGFnLWJ0biB7XG4gIGhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm9wdGlvbi1oZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XG59XG5cbi5ib3gge1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogIzU1NTc1NztcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucG9wdXAtaGVhZCB7XG4gIGNvbG9yOiAjMzg4MGZmO1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/skt/tag/tag-additional/tag-additional.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/skt/tag/tag-additional/tag-additional.component.ts ***!
  \********************************************************************/
/*! exports provided: TagAdditionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagAdditionalComponent", function() { return TagAdditionalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"];
let TagAdditionalComponent = class TagAdditionalComponent {
    constructor(modalController, formBuilder, ajaxService, commonService) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.editTagId = "Enter the TagId";
        this.editTextbox = false;
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    createForm() {
        this.tagLogin = this.formBuilder.group({
            tagId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tagType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    getTagTypes() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + `/login/getPreferences?key=Tagtype&companyId=${this.companyDetail.companyID}`;
        this.ajaxService.ajaxGetPerference(url)
            .subscribe(res => {
            this.tagTypes = res;
        });
    }
    ngOnInit() {
        this.companyDetail = {
            branchID: localStorage.getItem('corpId'),
            companyID: localStorage.getItem('corpId'),
            userId: localStorage.getItem('userName')
        };
        this.createForm();
        this.getTagTypes();
        this.data = this.value;
        if (this.value) {
            this.update = "available";
            this.editTextbox = true;
            this.tagLogin.patchValue({
                tagId: this.data.tagId,
                tagType: this.data.tagType
            });
        }
    }
    submitBtn() {
        const data = {
            "tagId": this.tagLogin.value.tagId,
            "schoolId": localStorage.getItem('corpId'),
            "branchId": localStorage.getItem('corpId'),
            "tagType": this.tagLogin.value.tagType,
            "lastupdatedBy": localStorage.getItem('userName'),
            "lastUpdatedDate": ""
        };
        if (this.update != 'available') {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + '/tag/addtag';
        }
        else {
            url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + '/tag/updateTag';
        }
        this.ajaxService.ajaxPostMethod(url, data).subscribe(res => {
            if (res.message == "Added Successfully") {
                this.commonService.presentToast('Tag Details Added Successfully');
                this.modalController.dismiss();
            }
            else if (res.message == "Updated Successfully") {
                this.modalController.dismiss();
                this.commonService.presentToast('Tag Details Updated Successfully');
            }
            else {
                this.commonService.presentToast('Contact Support team');
            }
        });
    }
};
TagAdditionalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TagAdditionalComponent.prototype, "value", void 0);
TagAdditionalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tag-additional',
        template: __webpack_require__(/*! raw-loader!./tag-additional.component.html */ "./node_modules/raw-loader/index.js!./src/app/skt/tag/tag-additional/tag-additional.component.html"),
        styles: [__webpack_require__(/*! ./tag-additional.component.scss */ "./src/app/skt/tag/tag-additional/tag-additional.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
], TagAdditionalComponent);



/***/ })

}]);
//# sourceMappingURL=default~skt-broad-broadcast-sms-broadcast-sms-module~skt-classdetails-class-table-class-table-module~9126c301-es2015.js.map