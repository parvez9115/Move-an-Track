(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/login/forgotpassdealer/forgotpassdealer.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/login/forgotpassdealer/forgotpassdealer.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"appLightBackground\">\r\n  \r\n  <ion-row class=\"margin\"> \r\n    <ion-row>\r\n      <ion-icon  name=\"arrow-back\" (click)=\"getBack()\"></ion-icon>\r\n  </ion-row>\r\n    <ion-col size=\"4\" offset=\"4\">\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\r\n      id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\">\r\n      <path [attr.fill]=\"color[appName]\"\r\n      d=\"M127.937,326c11.046,0,20,8.954,20,20l0,0c0,11.046-8.954,20-20,20s-20-8.954-20-20l0,0  C107.937,334.954,116.891,326,127.937,326z M182.937,346L182.937,346c0,11.046,8.954,20,20,20s20-8.954,20-20l0,0  c0-11.046-8.954-20-20-20S182.937,334.954,182.937,346z M257.937,346L257.937,346c0,11.046,8.954,20,20,20s20-8.954,20-20l0,0  c0-11.046-8.954-20-20-20S257.937,334.954,257.937,346z M364.937,492c0,11.046-8.954,20-20,20h-249c-44.112,0-80-35.888-80-80V268  c0-44.112,35.888-80,80-80H119.9v-70.534C119.9,52.695,173.732,0,239.9,0s120,52.695,120,117.466V188h24.037  c8.334,0,15.551,0.907,22.064,2.773c10.618,3.043,16.76,14.117,13.718,24.735c-3.043,10.618-14.117,16.76-24.735,13.718  c-2.88-0.825-6.493-1.227-11.047-1.227h-288c-22.056,0-40,17.944-40,40v164c0,22.056,17.944,40,40,40h249  C355.983,472,364.937,480.954,364.937,492z M159.9,188h160v-70.534c0-42.715-35.888-77.466-80-77.466s-80,34.751-80,77.466V188z   M424.937,472L424.937,472c-11.046,0-20,8.954-20,20s8.954,20,20,20l0,0c11.046,0,20-8.954,20-20S435.983,472,424.937,472z   M496.046,331.21c-0.438-38.789-32.13-70.21-71.021-70.21C385.863,261,354,292.862,354,332.025c0,11.046,8.954,20,20,20  s20-8.954,20-20C394,314.918,407.918,301,425.026,301s31.025,13.918,31.025,31.025c0,0.182,0.002,0.363,0.007,0.543  c-0.206,12.247-7.563,23.211-18.864,28.035c-19.541,8.345-32.168,27.618-32.168,49.101V427c0,11.046,8.954,20,20,20s20-8.954,20-20  v-17.296c0-5.438,3.092-10.271,7.875-12.313c26.227-11.196,43.169-36.855,43.162-65.37  C496.063,331.749,496.057,331.479,496.046,331.21z\">\r\n    </path>\r\n  </svg>\r\n</ion-col>\r\n</ion-row>\r\n<form [formGroup]=\"forgetPass\">\r\n  <ion-list>\r\n    <!-- <ion-item class=\"appLightBackground labelSpacing\">\r\n      <ion-icon slot=\"start\" name=\"contacts\"></ion-icon>\r\n      <ion-input formControlName=\"compId\" placeholder=\"Company id\"></ion-input>\r\n    </ion-item> -->\r\n    <ion-item class=\"appLightBackground labelSpacing\">\r\n      <ion-icon slot=\"start\" name=\"person\"></ion-icon>\r\n      <ion-input formControlName=\"compName\" placeholder=\"User name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"appLightBackground labelSpacing\">\r\n      <ion-icon slot=\"start\" name=\"keypad\"></ion-icon>\r\n      <ion-input formControlName=\"mobileNo\" placeholder=\"Mobile no\"></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"appLightBackground labelSpacing\">\r\n      <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\r\n      <ion-input formControlName=\"emailId\" placeholder=\"Email id (Optional)\"></ion-input>\r\n    </ion-item>\r\n   \r\n  </ion-list>\r\n  <ion-row>\r\n    <ion-col size=\"6\" offset=\"3\">\r\n      <ion-button (click)=\"submitPass()\"\r\n      [class]=\"appName\" shape=\"round\" expand=\"block\"\r\n      [disabled]=\"!forgetPass.valid\">Submit</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</form>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/login/login.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content\r\n  style=\"background-color: #fffdfd\"\r\n  [ngClass]=\"{'appLightBackground': appName === 'Moveandtrack', 'appImageBackground': appName=== 'GE', 'appDarkBackground': appName === 'Tracalogic', 'appLightBackground': appName === 'upcot'}\"\r\n>\r\n  <div\r\n    *ngIf='myPlatform != \"desktop\"'\r\n    class=\"moveAndTrackSpacing\"\r\n    style=\"background-color: #fffdfd\"\r\n  >\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col\r\n          size=\"8\"\r\n          offset=\"2\"\r\n          class=\"ion-align-items-center ion-justify-content-center\"\r\n        >\r\n          <ion-row class=\"ion-align-items-center ion-justify-content-center\">\r\n            <ion-img style=\"width: 70%\" [src]=\"logo\"></ion-img>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <form [formGroup]=\"login\">\r\n      <ion-item\r\n        [ngClass]=\"{'appLightBackground': appName === 'Moveandtrack', 'appImageBackground': appName=== 'GE', 'appDarkBackground': appName === 'Tracalogic', 'appLightBackground': appName === 'upcot'}\"\r\n        class=\"labelSpacing\"\r\n      >\r\n        <ion-icon slot=\"start\" name=\"person\"></ion-icon>\r\n        <ion-input\r\n          formControlName=\"userName\"\r\n          placeholder=\"Username\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item\r\n        [ngClass]=\"{'appLightBackground': appName === 'Moveandtrack', 'appImageBackground': appName=== 'GE', 'appDarkBackground': appName === 'Tracalogic', 'appLightBackground': appName === 'upcot'}\"\r\n        class=\"labelSpacing\"\r\n      >\r\n        <ion-icon slot=\"start\" name=\"key\"></ion-icon>\r\n        <ion-input\r\n          formControlName=\"password\"\r\n          placeholder=\"Password\"\r\n          (keyup.enter)=\"submitLogin()\"\r\n          [type]=\"password_type\"\r\n        >\r\n        </ion-input>\r\n        <ion-icon\r\n          slot=\"end\"\r\n          [name]=\"eye_icon\"\r\n          (click)=\"showHidePass()\"\r\n        ></ion-icon>\r\n      </ion-item>\r\n    </form>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"6\" offset=\"3\">\r\n        <ion-button\r\n          color=\"primary\"\r\n          (click)=\"submitLogin()\"\r\n          shape=\"round\"\r\n          expand=\"block\"\r\n          [disabled]=\"!login.valid\"\r\n        >\r\n          <ion-icon name=\"log-in\" class=\"iconSize\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n  <div\r\n    style=\"padding-top: 7%\"\r\n    *ngIf='myPlatform == \"desktop\"'\r\n    [ngClass]=\"{'container-wrapper': appName === 'Move and track', 'fms-container-wrapper': appName === 'FMS'}\"\r\n    class=\"container-wrapper\"\r\n  >\r\n    <div\r\n      style=\"\r\n        position: absolute;\r\n        z-index: 14;\r\n        bottom: 0px;\r\n        right: 0px;\r\n        background: white;\r\n        cursor: pointer;\r\n        padding: 11px;\r\n      \"\r\n      class=\"forgot\"\r\n    >\r\n      <span style=\"color: red\" (click)=\"changeModule('user')\">\r\n        I'm a User\r\n      </span>\r\n      | <span (click)=\"changeModule('dealer')\"> I'm a Dealer </span>\r\n    </div>\r\n    <div\r\n      class=\"moveAndTrackSpacing ion-align-items-center ion-justify-content-center\"\r\n      size-md=\"6 \"\r\n      size-lg=\"6\"\r\n      size-xs=\"12\"\r\n    >\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col\r\n            size=\"8\"\r\n            offset=\"2\"\r\n            class=\"ion-align-items-center ion-justify-content-center\"\r\n          >\r\n            <ion-row class=\"ion-align-items-center ion-justify-content-center\">\r\n              <ion-img style=\"width: 70%\" [src]=\"logo\"></ion-img>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <form [formGroup]=\"login\">\r\n        <ion-item\r\n          [ngClass]=\"{'appLightBackground': appName === 'Moveandtrack', 'appImageBackground': appName=== 'GE', 'appDarkBackground': appName === 'Tracalogic'}\"\r\n          class=\"labelSpacing label-shape\"\r\n        >\r\n          <ion-img\r\n            src=\"assets/company.svg\"\r\n            slot=\"end\"\r\n            class=\"svg_img\"\r\n          ></ion-img>\r\n          <ion-input\r\n            formControlName=\"userName\"\r\n            placeholder=\"User Name\"\r\n            class=\"web-input\"\r\n          ></ion-input>\r\n        </ion-item>\r\n        <ion-item\r\n          [ngClass]=\"{'appLightBackground': appName === 'Moveandtrack', 'appImageBackground': appName=== 'GE', 'appDarkBackground': appName === 'Tracalogic'}\"\r\n          class=\"labelSpacing label-shape\"\r\n        >\r\n          <ion-input\r\n            formControlName=\"password\"\r\n            placeholder=\"Password\"\r\n            (keyup.enter)=\"submitLogin()\"\r\n            [type]=\"password_type\"\r\n            class=\"web-input\"\r\n          >\r\n          </ion-input>\r\n          <ion-icon\r\n            slot=\"end\"\r\n            [name]=\"eye_icon\"\r\n            (click)=\"showHidePass()\"\r\n          ></ion-icon>\r\n        </ion-item>\r\n      </form>\r\n      <ion-row style=\"padding: 0px 0 0 20px\">\r\n        <ion-col style=\"padding: 0\">\r\n          <ion-button\r\n            [class]=\"appName\"\r\n            (click)=\"submitLogin()\"\r\n            [disabled]=\"!login.valid\"\r\n            style=\"font-size: 13px; height: 31px\"\r\n          >\r\n            Login\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-item lines=\"none\" id=\"remember-item\">\r\n            <!-- <ion-checkbox  [(ngModel)]=\"isChecked\" slot=\"start\" style=\"margin:21px 5px;\"></ion-checkbox>\r\n              <ion-label>Remember Me</ion-label> -->\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col (click)=\"openFpassModal()\" class=\"forgotNew\"\r\n          >Forgot Password?</ion-col\r\n        >\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/forgotpass-modal/forgotpass-modal.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/forgotpass-modal/forgotpass-modal.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar class=\"appHeader\">\r\n    <ion-grid >\r\n      <ion-row>\r\n        <ion-col size=\"2\">\r\n          <ion-icon slot=\"start\" name=\"arrow-back\" (click)=\"getBack()\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row >\r\n        <ion-col>\r\n          <ion-title class=\"appHeader\">\r\n            Forgot Password\r\n          </ion-title>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content class=\"appLightBackground\">\r\n  \r\n  <ion-row class=\"margin\"> \r\n    <ion-row>\r\n      <ion-icon  name=\"arrow-back\" (click)=\"getBack()\"></ion-icon>\r\n  </ion-row>\r\n    <ion-col size=\"4\" offset=\"4\">\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\r\n      id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\">\r\n      <path [attr.fill]=\"color[appName]\"\r\n      d=\"M127.937,326c11.046,0,20,8.954,20,20l0,0c0,11.046-8.954,20-20,20s-20-8.954-20-20l0,0  C107.937,334.954,116.891,326,127.937,326z M182.937,346L182.937,346c0,11.046,8.954,20,20,20s20-8.954,20-20l0,0  c0-11.046-8.954-20-20-20S182.937,334.954,182.937,346z M257.937,346L257.937,346c0,11.046,8.954,20,20,20s20-8.954,20-20l0,0  c0-11.046-8.954-20-20-20S257.937,334.954,257.937,346z M364.937,492c0,11.046-8.954,20-20,20h-249c-44.112,0-80-35.888-80-80V268  c0-44.112,35.888-80,80-80H119.9v-70.534C119.9,52.695,173.732,0,239.9,0s120,52.695,120,117.466V188h24.037  c8.334,0,15.551,0.907,22.064,2.773c10.618,3.043,16.76,14.117,13.718,24.735c-3.043,10.618-14.117,16.76-24.735,13.718  c-2.88-0.825-6.493-1.227-11.047-1.227h-288c-22.056,0-40,17.944-40,40v164c0,22.056,17.944,40,40,40h249  C355.983,472,364.937,480.954,364.937,492z M159.9,188h160v-70.534c0-42.715-35.888-77.466-80-77.466s-80,34.751-80,77.466V188z   M424.937,472L424.937,472c-11.046,0-20,8.954-20,20s8.954,20,20,20l0,0c11.046,0,20-8.954,20-20S435.983,472,424.937,472z   M496.046,331.21c-0.438-38.789-32.13-70.21-71.021-70.21C385.863,261,354,292.862,354,332.025c0,11.046,8.954,20,20,20  s20-8.954,20-20C394,314.918,407.918,301,425.026,301s31.025,13.918,31.025,31.025c0,0.182,0.002,0.363,0.007,0.543  c-0.206,12.247-7.563,23.211-18.864,28.035c-19.541,8.345-32.168,27.618-32.168,49.101V427c0,11.046,8.954,20,20,20s20-8.954,20-20  v-17.296c0-5.438,3.092-10.271,7.875-12.313c26.227-11.196,43.169-36.855,43.162-65.37  C496.063,331.749,496.057,331.479,496.046,331.21z\">\r\n    </path>\r\n  </svg>\r\n</ion-col>\r\n</ion-row>\r\n<form [formGroup]=\"forgetPass\">\r\n  <ion-list>\r\n    <ion-item class=\"appLightBackground labelSpacing\">\r\n      <ion-icon slot=\"start\" name=\"contacts\"></ion-icon>\r\n      <ion-input formControlName=\"compId\" placeholder=\"Company id\"></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"appLightBackground labelSpacing\">\r\n      <ion-icon slot=\"start\" name=\"person\"></ion-icon>\r\n      <ion-input formControlName=\"compName\" placeholder=\"User name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"appLightBackground labelSpacing\">\r\n      <ion-icon slot=\"start\" name=\"keypad\"></ion-icon>\r\n      <ion-input formControlName=\"mobileNo\" placeholder=\"Mobile no\"></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"appLightBackground labelSpacing\">\r\n      <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\r\n      <ion-input formControlName=\"emailId\" placeholder=\"Email id (Optional)\"></ion-input>\r\n    </ion-item>\r\n   \r\n  </ion-list>\r\n  <ion-row>\r\n    <ion-col size=\"6\" offset=\"3\">\r\n      <ion-button (click)=\"submitPass()\"\r\n      [class]=\"appName\" shape=\"round\" expand=\"block\"\r\n      [disabled]=\"!forgetPass.valid\">Submit</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</form>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content\r\n  [ngClass]=\"{'background':appName =='Armoron','appLightBackground': appName === 'Moveandtrack', 'appImageBackground': appName=== 'GE', 'appDarkBackground': appName === 'Tracalogic', 'appLightBackground': appName === 'upcot'}\">\r\n  <div *ngIf='myPlatform != \"desktop\" && appName != \"Armoron\" && appName != \"ParentApp\"' class=\"moveAndTrackSpacing\"\r\n    style=\"background-color: #fffdfd\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"8\" offset=\"2\" class=\"ion-align-items-center ion-justify-content-center\">\r\n          <ion-row class=\"ion-align-items-center ion-justify-content-center\">\r\n            <ion-img style=\"width: 70%\" [src]=\"logo\"></ion-img>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <form [formGroup]=\"login\">\r\n      <ion-item\r\n        [ngClass]=\"{'appLightBackground': appName === 'Moveandtrack', 'appImageBackground': appName=== 'GE', 'appDarkBackground': appName === 'Tracalogic', 'appLightBackground': appName === 'upcot'}\"\r\n        class=\"labelSpacing\">\r\n        <ion-icon slot=\"start\" name=\"contacts\"></ion-icon>\r\n        <ion-input formControlName=\"compId\" placeholder=\"Company id\"></ion-input>\r\n      </ion-item>\r\n      <ion-item\r\n        [ngClass]=\"{'appLightBackground': appName === 'Moveandtrack', 'appImageBackground': appName=== 'GE', 'appDarkBackground': appName === 'Tracalogic', 'appLightBackground': appName === 'upcot'}\"\r\n        class=\"labelSpacing\">\r\n        <ion-icon slot=\"start\" name=\"person\"></ion-icon>\r\n        <ion-input formControlName=\"compName\" placeholder=\"User name\"></ion-input>\r\n      </ion-item>\r\n      <ion-item\r\n        [ngClass]=\"{'appLightBackground': appName === 'Moveandtrack', 'appImageBackground': appName=== 'GE', 'appDarkBackground': appName === 'Tracalogic', 'appLightBackground': appName === 'upcot'}\"\r\n        class=\"labelSpacing\">\r\n        <ion-icon slot=\"start\" name=\"key\"></ion-icon>\r\n        <ion-input formControlName=\"password\" placeholder=\"Password\" (keyup.enter)=\"submitLogin()\"\r\n          [type]=\"password_type\">\r\n        </ion-input>\r\n        <ion-icon slot=\"end\" [name]=\"eye_icon\" (click)=\"showHidePass()\"></ion-icon>\r\n      </ion-item>\r\n    </form>\r\n    <ion-grid class=\"appLightBackground\">\r\n      <ion-row>\r\n        <ion-col offset=\"7\" size=\"5\" class=\"forgotPass\" [class]=\"appName\">\r\n          <ion-label class=\"forgotPass\" (click)=\"openFpassModal()\">Forgot Password?</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row></ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"6\" offset=\"3\">\r\n        <ion-button [class]=\"appName\" (click)=\"submitLogin()\" shape=\"round\" expand=\"block\" [disabled]=\"!login.valid\">\r\n          <ion-icon name=\"log-in\" class=\"iconSize\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"showDemoUrl\">\r\n      <ion-col size=\"8\" offset=\"6\" style=\"\r\n          text-decoration: underline;\r\n          padding-top: 3rem;\r\n          font-size: 14px;\r\n          color: #ed1a24;\r\n        \" (click)=\"change_demo()\">\r\n        {{serverName}}\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n  <div\r\n    *ngIf='myPlatform == \"desktop\" && appName != \"Remoncloud\" && appName != \"fms\"  && appName != \"Armoron\" && appName != \"GE\"  && entryPoint !=\"TTS\" && appName != \"ParentApp\"'\r\n    [ngClass]=\"{'container-wrapper': appName === 'Moveandtrack', 'fms-container-wrapper': appName === 'FMS'}\"\r\n    class=\"labelSpacing label-shape\" class=\"container-wrapper\">\r\n    <div style=\"\r\n        position: absolute;\r\n        z-index: 14;\r\n        bottom: 0px;\r\n        right: 29px;\r\n        padding: 11px;\r\n        font-size: 12px;\r\n        cursor: pointer;\r\n        background: white;\r\n      \" class=\"forgot\">\r\n      <span (click)=\"changeModule('user')\"> I'm a User </span> |\r\n      <span style=\"color: red\" (click)=\"changeModule('dealer')\">\r\n        I'm a Dealer\r\n      </span>\r\n    </div>\r\n    <div class=\"moveAndTrackSpacing ion-align-items-center ion-justify-content-center\" size-md=\"6 \" size-lg=\"6\"\r\n      size-xs=\"12\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"8\" offset=\"2\" class=\"ion-align-items-center ion-justify-content-center\">\r\n            <ion-row class=\"ion-align-items-center ion-justify-content-center\">\r\n              <ion-img style=\"width: 70%\" [src]=\"logo\"></ion-img>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <form [formGroup]=\"login\">\r\n        <ion-item\r\n          [ngClass]=\"{'appLightBackground': appName === 'Moveandtrack', 'appImageBackground': appName=== 'GE', 'appDarkBackground': appName === 'Tracalogic'}\"\r\n          class=\"labelSpacing label-shape\">\r\n          <ion-img src=\"assets/company.svg\" slot=\"end\" class=\"svg_img\"></ion-img>\r\n          <ion-input formControlName=\"compId\" placeholder=\"Company id\" class=\"web-input\"></ion-input>\r\n        </ion-item>\r\n        <ion-item\r\n          [ngClass]=\"{'appLightBackground': appName === 'Moveandtrack', 'appImageBackground': appName=== 'GE', 'appDarkBackground': appName === 'Tracalogic'}\"\r\n          class=\"labelSpacing label-shape\">\r\n          <ion-icon slot=\"end\" name=\"contacts\"></ion-icon>\r\n          <ion-input formControlName=\"compName\" placeholder=\"User name\" class=\"web-input\"></ion-input>\r\n        </ion-item>\r\n        <ion-item\r\n          [ngClass]=\"{'appLightBackground': appName === 'Moveandtrack', 'appImageBackground': appName=== 'GE', 'appDarkBackground': appName === 'Tracalogic'}\"\r\n          class=\"labelSpacing label-shape\">\r\n          <ion-input formControlName=\"password\" placeholder=\"Password\" (keyup.enter)=\"submitLogin()\"\r\n            [type]=\"password_type\" class=\"web-input\">\r\n          </ion-input>\r\n          <ion-icon slot=\"end\" [name]=\"eye_icon\" (click)=\"showHidePass()\"></ion-icon>\r\n        </ion-item>\r\n      </form>\r\n\r\n      <ion-row style=\"padding: 0px 0 0 20px\">\r\n        <ion-col style=\"padding: 0\">\r\n          <ion-button [class]=\"appName\" (click)=\"submitLogin()\" [disabled]=\"!login.valid\"\r\n            style=\"font-size: 13px; height: 31px\">\r\n            Login\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-item lines=\"none\" id=\"remember-item\">\r\n            <ion-checkbox [(ngModel)]=\"isChecked\" slot=\"start\" style=\"margin: 21px 5px\"></ion-checkbox>\r\n            <ion-label>Remember Me</ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col (click)=\"openFpassModal()\" class=\"forgotNew\">Forgot Password?</ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n\r\n  <div [style.background]=\"'url('+ bgImage+')'\" [style.background-repeat]=\"'no-repeat'\"\r\n    [style.background-size]=\"'cover'\" class=\"container\"\r\n    *ngIf='myPlatform == \"desktop\"  && (appName === \"GE\" || appName == \"Remoncloud\" || appName == \"fms\") && appName != \"ParentApp\"'>\r\n    <!-- <ion-grid style=\"position: fixed; width: 20%;\">\r\n        <ion-row>\r\n            <ion-col style=\"padding: 0px;\" size=\"12\" >\r\n                <ion-row>\r\n                    <ion-img style=\"width:100%;\" [src]=\"logo\"></ion-img>\r\n                </ion-row>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid> -->\r\n    <div class=\"moveAndTrackSpacingNew ion-align-items-center ion-justify-content-center\" size-md=\"6 \" size-lg=\"6\"\r\n      size-xs=\"12\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"8\" offset=\"2\" class=\"ion-align-items-center ion-justify-content-center\">\r\n            <ion-row class=\"ion-align-items-center ion-justify-content-center\">\r\n              <ion-img style=\"width: 70%\" [src]=\"logo\"></ion-img>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <form [formGroup]=\"login\">\r\n        <ion-item\r\n          [ngClass]=\"{'appLightBackground': appName === 'Moveandtrack', 'appImageBackground': appName=== 'GE', 'appDarkBackground': appName === 'Tracalogic'}\"\r\n          class=\"labelSpacing\">\r\n          <ion-icon slot=\"start\" name=\"contacts\"></ion-icon>\r\n          <ion-input formControlName=\"compId\" placeholder=\"CompanyID\"></ion-input>\r\n        </ion-item>\r\n        <ion-item\r\n          [ngClass]=\"{'appLightBackground': appName === 'Moveandtrack', 'appImageBackground': appName=== 'GE', 'appDarkBackground': appName === 'Tracalogic'}\"\r\n          class=\"labelSpacing\">\r\n          <ion-icon slot=\"start\" name=\"person\"></ion-icon>\r\n          <ion-input formControlName=\"compName\" placeholder=\"Username\"></ion-input>\r\n        </ion-item>\r\n        <ion-item\r\n          [ngClass]=\"{'appLightBackground': appName === 'Moveandtrack', 'appImageBackground': appName=== 'GE', 'appDarkBackground': appName === 'Tracalogic'}\"\r\n          class=\"labelSpacing\">\r\n          <ion-icon slot=\"start\" name=\"key\"></ion-icon>\r\n          <ion-input formControlName=\"password\" placeholder=\"Password\" (keyup.enter)=\"submitLogin()\"\r\n            [type]=\"password_type\">\r\n          </ion-input>\r\n          <ion-icon slot=\"end\" [name]=\"eye_icon\" (click)=\"showHidePass()\"></ion-icon>\r\n        </ion-item>\r\n      </form>\r\n      <ion-grid class=\"appLightBackground\">\r\n        <ion-row>\r\n          <ion-col offset=\"5\" size=\"7\" [class]=\"appName\">\r\n            <ion-label (click)=\"openFpassModal()\" class=\"forgotPass\">Forgot Password?</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row></ion-row>\r\n      </ion-grid>\r\n      <ion-item style=\"--background: transparent\" class=\"appLightBackground noBorder\">\r\n        <ion-checkbox class=\"check\" [(ngModel)]=\"isChecked\" slot=\"start\"></ion-checkbox>\r\n        <ion-label>Remember Me</ion-label>\r\n      </ion-item>\r\n      <ion-row>\r\n        <ion-col size=\"6\" offset=\"3\">\r\n          <ion-button [class]=\"appName\" (click)=\"submitLogin()\" shape=\"round\" expand=\"block\" [disabled]=\"!login.valid\">\r\n            <ion-icon name=\"log-in\" class=\"iconSize\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf='myPlatform != \"desktop\" && appName === \"Armoron\" && appName != \"ParentApp\"'>\r\n    <div class=\"row row-center\">\r\n      <div class=\"col text-center\" align-title=\"center\">\r\n        <ion-img src=\"assets/Armoron/APM KT LOGO.png\" alt=\"\" style=\"\r\n            width: 100%;\r\n            height: 74px;\r\n            margin-top: 82px;\r\n            margin-bottom: 12px;\r\n            background-repeat: no-repeat;\r\n            background-size: cover;\r\n          \">\r\n        </ion-img>\r\n      </div>\r\n    </div>\r\n\r\n    <ion-grid style=\"font-size: 12px\">\r\n      <ion-row class=\"rowstyle\" style=\"font-size: 10px\">\r\n        <ion-col size=\"1.3\" id=\"countryIcon\" class=\"iconShift\">\r\n          <div style=\"padding-top: 15px; text-align: right\">\r\n            <ion-icon name=\"globe\" style=\"color: #ba7203\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"5.7\" style=\"color: #ba7203\">\r\n          <div style=\"padding-top: 15px\">Country</div>\r\n        </ion-col>\r\n        <ion-col size=\"5\" style=\"color: #ba7203\">\r\n          <ion-select selectedText=\"India\" [interfaceOptions]=\"customPopoverOptions\" (change)=\"countryChanged\">\r\n            <ion-select-option *ngFor=\"let y of countryList\">{{y}}</ion-select-option>\r\n          </ion-select>\r\n          <!-- <div style=\"padding-top: 10px;text-align: right;\">\r\n                    <select style=\"background-color: transparent;border:none;\"><option selected>India</option><option>Srilanka</option></select>\r\n                </div> -->\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"rowstyle\" style=\"font-size: 10px\">\r\n        <ion-col size=\"1.3\" id=\"languageIcon\" class=\"iconShift\">\r\n          <div style=\"padding-top: 3px; text-align: right\">\r\n            <ion-icon name=\"chatboxes\" style=\"color: #ba7203\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"5.7\" style=\"color: #ba7203\">\r\n          <ion-label style=\"padding-top: 3px\">Language</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"5\" style=\"color: #ba7203\">\r\n          <!-- <div style=\"padding-top: 3px;text-align: right;\"> -->\r\n          <ion-select [(ngModel)]=\"armoronApp.selectedlanguage\" (ngModelChange)=\"langChged($event)\"\r\n            selectedText=\"{{armoronApp.selectedlanguage}}\" [interfaceOptions]=\"customPopoverOptions\">\r\n            <ion-select-option *ngFor=\"let x of languageOptions\">{{x}}</ion-select-option>\r\n          </ion-select>\r\n          <!-- <ion-select-option *ngFor=\"let x of languageOptions\" >{{x}}</ion-select-option> -->\r\n          <!-- <select style=\"background-color: transparent;border:none;\"><option selected>ENGLISH</option><option>ARABIC</option></select> -->\r\n          <!-- </div> -->\r\n        </ion-col>\r\n      </ion-row>\r\n      <form [formGroup]=\"login\">\r\n        <ion-row>\r\n          <ion-col size=\"2\">\r\n            <div style=\"\r\n                padding-top: 22px;\r\n                padding-bottom: unset;\r\n                text-align: right;\r\n              \">\r\n              <ion-icon name=\"phone-portrait\" style=\"color: whitesmoke\" class=\"iconsize\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"1.3\" ngDefaultControl class=\"contryCodeStyle\">\r\n            <div style=\"border-right: 1px solid whitesmoke\">\r\n              <ion-label ngDefaultControl>{{armoronApp.countryCode}}</ion-label>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"5.7\" style=\"\r\n              border-bottom: 1px solid whitesmoke;\r\n              padding-top: 22px;\r\n              padding-bottom: unset;\r\n            \">\r\n            <div>\r\n              <ion-input type=\"text\" placeholder=\"Phone number\" style=\"color: white\"\r\n                formControlName=\"compName\"></ion-input>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"2\" offset=\"1\" style=\"color: #ba7203; position: relative; padding-top: 1px\">\r\n            <button class=\"buttonArmoron\" style=\"\r\n                border-radius: 50px;\r\n                background-color: #6abd51;\r\n                position: relative;\r\n                top: 24px;\r\n              \" (click)=\"generateOTP()\">\r\n              <ion-icon name=\"send\" class=\"iconsize\"></ion-icon>\r\n            </button>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row style=\"margin-top: 32px\">\r\n          <ion-col size=\"2\">\r\n            <div style=\"\r\n                padding-bottom: unset;\r\n                text-align: right;\r\n                padding-top: 10px;\r\n              \">\r\n              <ion-icon name=\"mail\" style=\"color: whitesmoke\" class=\"iconsize\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"7\" style=\"padding-bottom: unset\">\r\n            <div>\r\n              <ion-input type=\"text\" placeholder=\"OTP\" formControlName=\"password\"\r\n                style=\"color: white; border-bottom: 1px solid whitesmoke\"></ion-input>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"2\" offset=\"1\" style=\"color: #ba7203\">\r\n            <button class=\"buttonArmoron\" style=\"\r\n                border-radius: 50px;\r\n                background-color: #6abd51;\r\n                padding-bottom: unset;\r\n              \" (click)=\"verifyOTPMethod(login.value.password, login.value.compName)\">\r\n              <ion-icon name=\"checkmark\" class=\"iconsize\"></ion-icon>\r\n            </button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n    </ion-grid>\r\n  </div>\r\n\r\n  <div *ngIf='myPlatform != \"desktop\" && appName != \"Armoron\" && appName === \"ParentApp\"'>\r\n    <app-student-login [data]=\"check\"></app-student-login>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/parent-app/student-login/student-login.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/parent-app/student-login/student-login.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid>\r\n  <ion-row>\r\n    <ion-col\r\n      size=\"8\"\r\n      offset=\"2\"\r\n      class=\"ion-align-items-center ion-justify-content-center\"\r\n    >\r\n      <ion-row class=\"ion-align-items-center ion-justify-content-center\">\r\n        <!-- <ion-img style=\"width:70%;margin-top: 25%;\" [src]=\"logo\"></ion-img> -->\r\n        <ion-img\r\n          class=\"parentAppLogo\"\r\n          src=\"assets/loginLogo/ParentApp.jpeg\"\r\n        ></ion-img>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n\r\n<form [formGroup]=\"login\">\r\n  <ion-card>\r\n    <ion-item>\r\n      <ion-icon\r\n        class=\"placeholder-label parentAppBackcolor\"\r\n        slot=\"start\"\r\n        name=\"phone-portrait\"\r\n      ></ion-icon>\r\n      <ion-label style=\"color: #b1b1b1\" position=\"stacked\">MOBILE NO</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"mobileNo\"></ion-input>\r\n    </ion-item>\r\n  </ion-card>\r\n  <ion-card *ngIf=\"button == 'Verify'\">\r\n    <ion-item>\r\n      <ion-icon\r\n        class=\"placeholder-label parentAppBackcolor\"\r\n        slot=\"start\"\r\n        name=\"key\"\r\n      ></ion-icon>\r\n      <ion-label style=\"color: #b1b1b1\" position=\"stacked\">OTP</ion-label>\r\n      <ion-input formControlName=\"otp\"></ion-input>\r\n    </ion-item>\r\n  </ion-card>\r\n  <ion-row\r\n    *ngIf=\"button == 'Verify'\"\r\n    class=\"resend-otp parentAppBackcolor\"\r\n    (click)=\"sendOtp()\"\r\n  >\r\n    Resend OTP?\r\n  </ion-row>\r\n</form>\r\n<ion-row style=\"justify-content: center\">\r\n  <ion-button class=\"parentAppcolor\" shape=\"round\" (click)=\"loginSubmit()\">{{\r\n    button\r\n  }}</ion-button>\r\n</ion-row>\r\n<!-- <ion-row id=\"divOuter\">\r\n  <ion-col id=\"divInner\">\r\n     <ion-input formControlName=\"otp\" id=\"partitioned\" type=\"text\" maxlength=\"4\"\r\n          oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\"\r\n          onKeyPress=\"if(this.value.length==) return false;\"></ion-input>\r\n  </ion-col>\r\n</ion-row> -->\r\n"

/***/ }),

/***/ "./src/app/delar-application/login/forgotpassdealer/forgotpassdealer.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/delar-application/login/forgotpassdealer/forgotpassdealer.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".labelSpacing {\n  margin-bottom: 3%;\n  margin-left: 6%;\n  width: 85%;\n}\n\n.margin {\n  margin-top: 3%;\n}\n\n.Tracalogic {\n  --background:rgb(255, 174, 0);\n}\n\n.Moveandtrack {\n  --background:rgb(237, 27, 36);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vbG9naW4vZm9yZ290cGFzc2RlYWxlci9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxsb2dpblxcZm9yZ290cGFzc2RlYWxlclxcZm9yZ290cGFzc2RlYWxlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vbG9naW4vZm9yZ290cGFzc2RlYWxlci9mb3Jnb3RwYXNzZGVhbGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtBQ0VKOztBREFBO0VBQ0ksNkJBQUE7QUNHSjs7QUREQTtFQUNJLDZCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9sb2dpbi9mb3Jnb3RwYXNzZGVhbGVyL2ZvcmdvdHBhc3NkZWFsZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWxTcGFjaW5ne1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICBtYXJnaW4tbGVmdDogNiU7XHJcbiAgICB3aWR0aDogODUlO1xyXG59XHJcbi5tYXJnaW57XHJcbiAgICBtYXJnaW4tdG9wOiAzJVxyXG59XHJcbi5UcmFjYWxvZ2lje1xyXG4gICAgLS1iYWNrZ3JvdW5kOnJnYigyNTUsIDE3NCwgMCk7XHJcbn1cclxuLk1vdmVhbmR0cmFja3tcclxuICAgIC0tYmFja2dyb3VuZDpyZ2IoMjM3LCAyNywgMzYpO1xyXG59IiwiLmxhYmVsU3BhY2luZyB7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xuICBtYXJnaW4tbGVmdDogNiU7XG4gIHdpZHRoOiA4NSU7XG59XG5cbi5tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAzJTtcbn1cblxuLlRyYWNhbG9naWMge1xuICAtLWJhY2tncm91bmQ6cmdiKDI1NSwgMTc0LCAwKTtcbn1cblxuLk1vdmVhbmR0cmFjayB7XG4gIC0tYmFja2dyb3VuZDpyZ2IoMjM3LCAyNywgMzYpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/login/forgotpassdealer/forgotpassdealer.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/delar-application/login/forgotpassdealer/forgotpassdealer.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ForgotpassdealerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassdealerComponent", function() { return ForgotpassdealerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");







let ForgotpassdealerComponent = class ForgotpassdealerComponent {
    constructor(formBuilder, modalController, ajaxService, commonService) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.color = {
            "Tracalogic": 'rgb(255, 174, 0)',
            "Moveandtrack": 'rgb(237, 27, 36)'
        };
        this.showorhideInput = true;
    }
    getBack() {
        this.modalController.dismiss();
    }
    submitPass() {
        let body = {
            "username": this.forgetPass.value.compName,
            "corpid": this.forgetPass.value.compName,
            "emailId": this.forgetPass.value.emailId,
            "mobileNo": this.forgetPass.value.mobileNo
        };
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + "/login/company/branch/dealer/forgetpassword";
        this.ajaxService.ajaxPostWithString(url, body)
            .subscribe(res => {
            console.log(res);
            if (res) {
                this.commonService.presentToast(res);
                this.modalController.dismiss();
            }
            else {
                this.commonService.presentToast("contact support team");
            }
        });
    }
    ngOnInit() {
        this.appName = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["app"].appName.replace(/ /g, "");
        this.forgetPass = this.formBuilder.group({
            emailId: [''],
            mobileNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            compName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
};
ForgotpassdealerComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
];
ForgotpassdealerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpassdealer',
        template: __webpack_require__(/*! raw-loader!./forgotpassdealer.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/login/forgotpassdealer/forgotpassdealer.component.html"),
        styles: [__webpack_require__(/*! ./forgotpassdealer.component.scss */ "./src/app/delar-application/login/forgotpassdealer/forgotpassdealer.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
], ForgotpassdealerComponent);



/***/ }),

/***/ "./src/app/delar-application/login/login-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/delar-application/login/login-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/delar-application/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/delar-application/login/login.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/delar-application/login/login.module.ts ***!
  \*********************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/delar-application/login/login-routing.module.ts");
/* harmony import */ var _login_forgotpassdealer_forgotpassdealer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/forgotpassdealer/forgotpassdealer.component */ "./src/app/delar-application/login/forgotpassdealer/forgotpassdealer.component.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login.page */ "./src/app/delar-application/login/login.page.ts");









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["IonicStorageModule"].forRoot()
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_8__["LoginPage"], _login_forgotpassdealer_forgotpassdealer_component__WEBPACK_IMPORTED_MODULE_7__["ForgotpassdealerComponent"]],
        entryComponents: [_login_forgotpassdealer_forgotpassdealer_component__WEBPACK_IMPORTED_MODULE_7__["ForgotpassdealerComponent"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/delar-application/login/login.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/delar-application/login/login.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input .native-input {\n  border-radius: 25px;\n}\n\n.Tracalogic {\n  --background:rgb(255, 174, 0);\n}\n\n.Moveandtrack {\n  --background:rgb(237, 27, 36);\n}\n\n.GE {\n  --background:rgb(255, 174, 0);\n}\n\n.Upcot-mvt {\n  --background:rgb(237, 27, 36);\n}\n\n.Remoncloud {\n  --background:rgb(237, 27, 36);\n}\n\n.moveAndTrackSpacing {\n  margin-top: 12%;\n}\n\n.labelSpacing {\n  margin: 2% auto;\n  width: 77%;\n}\n\n.check {\n  width: 12px;\n  height: 12px;\n  margin-right: 10px;\n}\n\n.backgroundCol {\n  background: #32384b;\n}\n\n.noWhiteSpace {\n  padding: 0px;\n}\n\n.iconSize {\n  width: 50px;\n  height: 35px;\n}\n\n.appDarkBackground {\n  background: #32384b;\n}\n\n.label-shape {\n  background-color: none;\n  height: 36px;\n}\n\n.label-shape-box {\n  background-color: none;\n  height: 40px;\n  margin-bottom: 3%;\n}\n\n.input-spacing {\n  top: 5vh;\n  right: 2vh;\n}\n\n.input-spacing {\n  float: right;\n}\n\n.web-input {\n  --padding-top: 0px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: system-ui;\n}\n\nion-icon {\n  margin-top: 0px !important;\n}\n\nion-input .native-input {\n  border-radius: 25px;\n}\n\n.Tracalogic {\n  --background:rgb(255, 174, 0);\n}\n\n.Moveandtrack {\n  --background:rgb(237, 27, 36);\n}\n\n.GE {\n  --background:rgb(255, 174, 0);\n}\n\n.moveAndTrackSpacing {\n  opacity: 0.9;\n  width: 300px;\n  margin: auto;\n  border-radius: 5px;\n}\n\n@media only screen and (max-width: 550px) {\n  .moveAndTrackSpacing {\n    position: relative;\n    top: 50px;\n  }\n}\n\n@media only screen and (min-width: 551px) {\n  .moveAndTrackSpacing {\n    width: 360px;\n  }\n\n  .moveAndTrackSpacingNew {\n    width: 360px;\n  }\n}\n\n@media only screen and (min-width: 999px) {\n  .moveAndTrackSpacing {\n    position: fixed !important;\n    float: right;\n    right: -4.5%;\n    -webkit-transform: scale(0.8) !important;\n            transform: scale(0.8) !important;\n    background: #f1f1f170;\n  }\n}\n\n@media only screen and (min-width: 1100px) {\n  .moveAndTrackSpacing {\n    position: fixed !important;\n    right: -3% !important;\n    -webkit-transform: scale(0.9) !important;\n            transform: scale(0.9) !important;\n    background: #f1f1f170;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  .moveAndTrackSpacing {\n    position: fixed !important;\n    right: -2% !important;\n    -webkit-transform: scale(0.9) !important;\n            transform: scale(0.9) !important;\n    background: #f1f1f170;\n  }\n}\n\n@media only screen and (min-width: 1300px) {\n  .moveAndTrackSpacing {\n    position: fixed !important;\n    right: 0% !important;\n    -webkit-transform: scale(0.9) !important;\n            transform: scale(0.9) !important;\n    background: #f1f1f170;\n  }\n}\n\n.container {\n  margin: 0px;\n  height: 100vh;\n  display: block;\n}\n\n.text-box-spacing {\n  height: 60px;\n}\n\n.labelSpacing-web {\n  margin-bottom: 3%;\n}\n\n.left-side-form-grp {\n  width: 20%;\n  position: fixed;\n  top: 10vh;\n  right: 2vh;\n}\n\n.container-wrapper {\n  margin: 0px;\n  height: 100vh;\n  display: block;\n  background: url('mvtlogin.jpg') center center/cover no-repeat fixed;\n  background-size: 100% 99%;\n}\n\n.fms-container-wrapper {\n  margin: 0px;\n  height: 100vh;\n  display: block;\n  background: url(\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/Company/fmslogin.gif\") center center/cover no-repeat fixed;\n  background-size: 100% 99%;\n}\n\n.labelSpacing {\n  margin-bottom: 3%;\n  margin-left: 6%;\n  width: 85%;\n}\n\n.forgotPass {\n  font-size: 13px;\n}\n\n.forgot {\n  font-size: 12px;\n  background: white;\n  padding: 11px;\n  margin: 10px 26px 0 24px;\n  float: right;\n  border-radius: 5px;\n  background: white;\n  padding: 11px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.forgotNew {\n  font-size: 12px;\n  line-height: 31px;\n  color: red;\n  padding-right: 24px;\n  cursor: pointer;\n}\n\n.svg_img {\n  width: 20px;\n  padding: 0px 0px 6px;\n}\n\n.check {\n  width: 12px;\n  height: 12px;\n  margin-right: 10px;\n}\n\n.backgroundCol {\n  background: #32384b;\n}\n\n.noWhiteSpace {\n  padding: 0px;\n}\n\n.iconSize {\n  width: 50px;\n  height: 35px;\n}\n\n.appDarkBackground {\n  background: #32384b;\n}\n\n#remember-item {\n  --background: transparent;\n  margin: -15px 0 0 0px;\n  position: absolute;\n  right: -12px;\n  font-size: 12px;\n  padding: 0 !important;\n  width: 148px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vbG9naW4vRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksbUJBQUE7QUNEUjs7QURJQTtFQUNJLDZCQUFBO0FDREo7O0FER0E7RUFDSSw2QkFBQTtBQ0FKOztBREVBO0VBQ0ksNkJBQUE7QUNDSjs7QURDQTtFQUNJLDZCQUFBO0FDRUo7O0FEQUE7RUFDSSw2QkFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtBQ0lKOztBREZBO0VBRUksZUFBQTtFQUNBLFVBQUE7QUNJSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURBQTtFQUNJLG1CQUFBO0FDR0o7O0FEQUE7RUFDSSxZQUFBO0FDR0o7O0FEQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0dKOztBREFBO0VBQ0ksbUJBQUE7QUNHSjs7QURJQTtFQUdJLHNCQUFBO0VBQ0EsWUFBQTtBQ0hKOztBREtBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURJQTtFQUNJLFFBQUE7RUFDQSxVQUFBO0FDREo7O0FER0E7RUFDSSxZQUFBO0FDQUo7O0FERUE7RUFFSSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDREo7O0FESUE7RUFDSSwwQkFBQTtBQ0RKOztBRElJO0VBQ0ksbUJBQUE7QUNEUjs7QURJQTtFQUNJLDZCQUFBO0FDREo7O0FER0E7RUFDSSw2QkFBQTtBQ0FKOztBREVBO0VBQ0ksNkJBQUE7QUNDSjs7QURHQTtFQUVJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDREo7O0FES0E7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsU0FBQTtFQ0ZOO0FBQ0Y7O0FES0U7RUFDRTtJQUNLLFlBQUE7RUNIUDs7RURLRTtJQUNJLFlBQUE7RUNGTjtBQUNGOztBREtFO0VBRUU7SUFDSSwwQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0Esd0NBQUE7WUFBQSxnQ0FBQTtJQUNBLHFCQUFBO0VDSk47QUFDRjs7QURTRTtFQUNFO0lBQ0ksMEJBQUE7SUFDQSxxQkFBQTtJQUNBLHdDQUFBO1lBQUEsZ0NBQUE7SUFDQSxxQkFBQTtFQ1BOO0FBQ0Y7O0FEU0k7RUFDSTtJQUNJLDBCQUFBO0lBQ0EscUJBQUE7SUFDQSx3Q0FBQTtZQUFBLGdDQUFBO0lBQ0EscUJBQUE7RUNQVjtBQUNGOztBRFVBO0VBQ0k7SUFDSSwwQkFBQTtJQUNBLG9CQUFBO0lBQ0Esd0NBQUE7WUFBQSxnQ0FBQTtJQUNBLHFCQUFBO0VDUk47QUFDRjs7QURjQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ1pKOztBRGNBO0VBQ0EsWUFBQTtBQ1hBOztBRGNBO0VBQ0ksaUJBQUE7QUNYSjs7QURjQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNYSjs7QURhQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLG1FQUFBO0VBQ0EseUJBQUE7QUNYSjs7QURhQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG9JQUFBO0VBQ0EseUJBQUE7QUNWSjs7QURZQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNUSjs7QURZQTtFQUNJLGVBQUE7QUNUSjs7QURXQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ1JKOztBRFdBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ1JKOztBRFVBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0FDUEo7O0FEU0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTko7O0FEU0E7RUFDSSxtQkFBQTtBQ05KOztBRFNBO0VBQ0ksWUFBQTtBQ05KOztBRFNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNOSjs7QURTQTtFQUNJLG1CQUFBO0FDTko7O0FEU0E7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1pbnB1dCB7XHJcbiAgICAubmF0aXZlLWlucHV0IHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4XHJcbiAgICB9XHJcbn1cclxuLlRyYWNhbG9naWN7XHJcbiAgICAtLWJhY2tncm91bmQ6cmdiKDI1NSwgMTc0LCAwKTtcclxufVxyXG4uTW92ZWFuZHRyYWNre1xyXG4gICAgLS1iYWNrZ3JvdW5kOnJnYigyMzcsIDI3LCAzNik7XHJcbn1cclxuLkdFe1xyXG4gICAgLS1iYWNrZ3JvdW5kOnJnYigyNTUsIDE3NCwgMCk7XHJcbn1cclxuLlVwY290LW12dHtcclxuICAgIC0tYmFja2dyb3VuZDpyZ2IoMjM3LCAyNywgMzYpO1xyXG59XHJcbi5SZW1vbmNsb3Vke1xyXG4gICAgLS1iYWNrZ3JvdW5kOnJnYigyMzcsIDI3LCAzNik7XHJcbn1cclxuLm1vdmVBbmRUcmFja1NwYWNpbmd7XHJcbiAgICBtYXJnaW4tdG9wOiAxMiU7XHJcbn1cclxuLmxhYmVsU3BhY2luZ3tcclxuICAgIC8vTmV3LS0tXHJcbiAgICBtYXJnaW46IDIlIGF1dG87XHJcbiAgICB3aWR0aDogNzclO1xyXG59XHJcblxyXG5cclxuLmNoZWNrIHtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kQ29se1xyXG4gICAgYmFja2dyb3VuZDojMzIzODRiO1xyXG59XHJcblxyXG4ubm9XaGl0ZVNwYWNle1xyXG4gICAgcGFkZGluZzowcHg7XHJcbn1cclxuXHJcbi5pY29uU2l6ZXtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG4uYXBwRGFya0JhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kOiMzMjM4NGI7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vd2ViLy8vLy8vLy8vLy8vLy8vLy8vL0BhdC1yb290XHJcbi5sYWJlbC1zaGFwZXtcclxuICAgIFxyXG4gICAgLy9OZXd3LS0tLVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxuICAgIGhlaWdodDogMzZweDtcclxufVxyXG4ubGFiZWwtc2hhcGUtYm94e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcbi5pbnB1dC1zcGFjaW5ne1xyXG4gICAgdG9wOiA1dmg7XHJcbiAgICByaWdodDogMnZoO1xyXG59XHJcbi5pbnB1dC1zcGFjaW5ne1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi53ZWItaW5wdXR7XHJcbiAgICAvL05ld1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgLy8tLS0tLVxyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XHJcbn1cclxuLy9OZXctLS1cclxuaW9uLWljb257XHJcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5pb24taW5wdXQge1xyXG4gICAgLm5hdGl2ZS1pbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweFxyXG4gICAgfVxyXG59XHJcbi5UcmFjYWxvZ2lje1xyXG4gICAgLS1iYWNrZ3JvdW5kOnJnYigyNTUsIDE3NCwgMCk7XHJcbn1cclxuLk1vdmVhbmR0cmFja3tcclxuICAgIC0tYmFja2dyb3VuZDpyZ2IoMjM3LCAyNywgMzYpO1xyXG59XHJcbi5HRXtcclxuICAgIC0tYmFja2dyb3VuZDpyZ2IoMjU1LCAxNzQsIDApO1xyXG59XHJcblxyXG5cclxuLm1vdmVBbmRUcmFja1NwYWNpbmd7XHJcbiAgICAvL05ld3ctLS1cclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIFxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSAge1xyXG4gICAgLm1vdmVBbmRUcmFja1NwYWNpbmcge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjU1MXB4KXtcclxuICAgIC5tb3ZlQW5kVHJhY2tTcGFjaW5nIHtcclxuICAgICAgICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgfSBcclxuICAgIC5tb3ZlQW5kVHJhY2tTcGFjaW5nTmV3IHtcclxuICAgICAgICB3aWR0aDogMzYwcHg7XHJcbiAgIH0gXHJcbiBcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTlweCkge1xyXG4gICAgXHJcbiAgICAubW92ZUFuZFRyYWNrU3BhY2luZyB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHJpZ2h0OiAtNC41JSA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTcwO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTAwcHgpIHtcclxuICAgIC5tb3ZlQW5kVHJhY2tTcGFjaW5nIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgICAgICByaWdodDogLTMlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTcwO1xyXG4gICAgfVxyXG59XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgIC5tb3ZlQW5kVHJhY2tTcGFjaW5nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtMiUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE3MDtcclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzAwcHgpIHtcclxuICAgIC5tb3ZlQW5kVHJhY2tTcGFjaW5nIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgICAgICByaWdodDogMCUgIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxNzA7XHJcbiAgICAgICAgXHJcbn1cclxufVxyXG4gIFxyXG5cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4udGV4dC1ib3gtc3BhY2luZ3tcclxuaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4ubGFiZWxTcGFjaW5nLXdlYiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG5cclxuLmxlZnQtc2lkZS1mb3JtLWdycHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDEwdmg7XHJcbiAgICByaWdodDogMnZoO1xyXG59XHJcbi5jb250YWluZXItd3JhcHBlcntcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLy9OZXdcclxuICAgIGJhY2tncm91bmQ6dXJsKFwiLi4vLi4vLi4vYXNzZXRzL2xvZ2luTG9nby9tdnRsb2dpbi5qcGdcIikgY2VudGVyIGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdCBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSA5OSU7XHJcbn1cclxuLmZtcy1jb250YWluZXItd3JhcHBlcntcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9raW5nc3RyYWNraW1hZ2VzLnMzLmFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb20vQ29tcGFueS9mbXNsb2dpbi5naWZcIikgY2VudGVyIGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdCBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSA5OSU7ICBcclxufVxyXG4ubGFiZWxTcGFjaW5ne1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICBtYXJnaW4tbGVmdDogNiU7XHJcbiAgICB3aWR0aDogODUlO1xyXG59XHJcblxyXG4uZm9yZ290UGFzcyB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmZvcmdvdHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDsgXHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICBtYXJnaW46IDEwcHggMjZweCAwIDI0cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuLy9OZXdcclxuLmZvcmdvdE5ld3tcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnN2Z19pbWd7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggNnB4O1xyXG59XHJcbi5jaGVjayB7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweFxyXG59XHJcblxyXG4uYmFja2dyb3VuZENvbHtcclxuICAgIGJhY2tncm91bmQ6IzMyMzg0YjtcclxufVxyXG5cclxuLm5vV2hpdGVTcGFjZXtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG59XHJcblxyXG4uaWNvblNpemV7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLmFwcERhcmtCYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZDojMzIzODRiO1xyXG59XHJcbi8vTmV3d1xyXG4jcmVtZW1iZXItaXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW46IC0xNXB4IDAgMCAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTEycHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTQ4cHg7XHJcbn1cclxuXHJcbiIsImlvbi1pbnB1dCAubmF0aXZlLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLlRyYWNhbG9naWMge1xuICAtLWJhY2tncm91bmQ6cmdiKDI1NSwgMTc0LCAwKTtcbn1cblxuLk1vdmVhbmR0cmFjayB7XG4gIC0tYmFja2dyb3VuZDpyZ2IoMjM3LCAyNywgMzYpO1xufVxuXG4uR0Uge1xuICAtLWJhY2tncm91bmQ6cmdiKDI1NSwgMTc0LCAwKTtcbn1cblxuLlVwY290LW12dCB7XG4gIC0tYmFja2dyb3VuZDpyZ2IoMjM3LCAyNywgMzYpO1xufVxuXG4uUmVtb25jbG91ZCB7XG4gIC0tYmFja2dyb3VuZDpyZ2IoMjM3LCAyNywgMzYpO1xufVxuXG4ubW92ZUFuZFRyYWNrU3BhY2luZyB7XG4gIG1hcmdpbi10b3A6IDEyJTtcbn1cblxuLmxhYmVsU3BhY2luZyB7XG4gIG1hcmdpbjogMiUgYXV0bztcbiAgd2lkdGg6IDc3JTtcbn1cblxuLmNoZWNrIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYmFja2dyb3VuZENvbCB7XG4gIGJhY2tncm91bmQ6ICMzMjM4NGI7XG59XG5cbi5ub1doaXRlU3BhY2Uge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5pY29uU2l6ZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5hcHBEYXJrQmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICMzMjM4NGI7XG59XG5cbi5sYWJlbC1zaGFwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gIGhlaWdodDogMzZweDtcbn1cblxuLmxhYmVsLXNoYXBlLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG5cbi5pbnB1dC1zcGFjaW5nIHtcbiAgdG9wOiA1dmg7XG4gIHJpZ2h0OiAydmg7XG59XG5cbi5pbnB1dC1zcGFjaW5nIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ud2ViLWlucHV0IHtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG59XG5cbmlvbi1pY29uIHtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCAubmF0aXZlLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLlRyYWNhbG9naWMge1xuICAtLWJhY2tncm91bmQ6cmdiKDI1NSwgMTc0LCAwKTtcbn1cblxuLk1vdmVhbmR0cmFjayB7XG4gIC0tYmFja2dyb3VuZDpyZ2IoMjM3LCAyNywgMzYpO1xufVxuXG4uR0Uge1xuICAtLWJhY2tncm91bmQ6cmdiKDI1NSwgMTc0LCAwKTtcbn1cblxuLm1vdmVBbmRUcmFja1NwYWNpbmcge1xuICBvcGFjaXR5OiAwLjk7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgLm1vdmVBbmRUcmFja1NwYWNpbmcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTUxcHgpIHtcbiAgLm1vdmVBbmRUcmFja1NwYWNpbmcge1xuICAgIHdpZHRoOiAzNjBweDtcbiAgfVxuXG4gIC5tb3ZlQW5kVHJhY2tTcGFjaW5nTmV3IHtcbiAgICB3aWR0aDogMzYwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTk5cHgpIHtcbiAgLm1vdmVBbmRUcmFja1NwYWNpbmcge1xuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICByaWdodDogLTQuNSU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTcwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExMDBweCkge1xuICAubW92ZUFuZFRyYWNrU3BhY2luZyB7XG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IC0zJSAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE3MDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLm1vdmVBbmRUcmFja1NwYWNpbmcge1xuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiAtMiUgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxNzA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTMwMHB4KSB7XG4gIC5tb3ZlQW5kVHJhY2tTcGFjaW5nIHtcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgICByaWdodDogMCUgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxNzA7XG4gIH1cbn1cbi5jb250YWluZXIge1xuICBtYXJnaW46IDBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50ZXh0LWJveC1zcGFjaW5nIHtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ubGFiZWxTcGFjaW5nLXdlYiB7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufVxuXG4ubGVmdC1zaWRlLWZvcm0tZ3JwIHtcbiAgd2lkdGg6IDIwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwdmg7XG4gIHJpZ2h0OiAydmg7XG59XG5cbi5jb250YWluZXItd3JhcHBlciB7XG4gIG1hcmdpbjogMHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2xvZ2luTG9nby9tdnRsb2dpbi5qcGdcIikgY2VudGVyIGNlbnRlci9jb3ZlciBuby1yZXBlYXQgZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSA5OSU7XG59XG5cbi5mbXMtY29udGFpbmVyLXdyYXBwZXIge1xuICBtYXJnaW46IDBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8va2luZ3N0cmFja2ltYWdlcy5zMy5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tL0NvbXBhbnkvZm1zbG9naW4uZ2lmXCIpIGNlbnRlciBjZW50ZXIvY292ZXIgbm8tcmVwZWF0IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgOTklO1xufVxuXG4ubGFiZWxTcGFjaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG4gIG1hcmdpbi1sZWZ0OiA2JTtcbiAgd2lkdGg6IDg1JTtcbn1cblxuLmZvcmdvdFBhc3Mge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5mb3Jnb3Qge1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxMXB4O1xuICBtYXJnaW46IDEwcHggMjZweCAwIDI0cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMTFweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uZm9yZ290TmV3IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMzFweDtcbiAgY29sb3I6IHJlZDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3ZnX2ltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBwYWRkaW5nOiAwcHggMHB4IDZweDtcbn1cblxuLmNoZWNrIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYmFja2dyb3VuZENvbCB7XG4gIGJhY2tncm91bmQ6ICMzMjM4NGI7XG59XG5cbi5ub1doaXRlU3BhY2Uge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5pY29uU2l6ZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5hcHBEYXJrQmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICMzMjM4NGI7XG59XG5cbiNyZW1lbWJlci1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAtMTVweCAwIDAgMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxNDhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/login/login.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/delar-application/login/login.page.ts ***!
  \*******************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _login_forgotpassdealer_forgotpassdealer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../login/forgotpassdealer/forgotpassdealer.component */ "./src/app/delar-application/login/forgotpassdealer/forgotpassdealer.component.ts");









let LoginPage = class LoginPage {
    constructor(router, platform, formBuilder, alertController, menuController, ajaxService, modalController, commonService) {
        this.router = router;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.menuController = menuController;
        this.ajaxService = ajaxService;
        this.modalController = modalController;
        this.commonService = commonService;
        this.logo = "assets/APM KT LOGO.png";
        this.eye_icon = "eye-off";
        this.password_type = "password";
        this.showHidePass = () => {
            this.password_type = this.password_type === "text" ? "password" : "text";
            this.eye_icon = this.eye_icon === "eye" ? "eye-off" : "eye";
        };
    }
    changeModule(data) {
        if (data == "user") {
            this.router.navigateByUrl("tabs-login/members/login");
        }
        else {
            this.router.navigateByUrl("tabs-login/dealarlogin/login");
        }
    }
    ionViewWillEnter() {
        this.yudsegment = "sample1";
        localStorage.clear();
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.logo = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["app"].loginImgUrl;
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["app"].appName;
        localStorage.clear();
        this.menuController.enable(false);
        this.login = this.formBuilder.group({
            userName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    openFpassModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _login_forgotpassdealer_forgotpassdealer_component__WEBPACK_IMPORTED_MODULE_8__["ForgotpassdealerComponent"],
                cssClass: "custome_fleet",
            });
            return yield modal.present();
        });
    }
    submitLogin() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.commonService.presentLoader();
            this.loginCrd = {
                userId: this.login.value.userName,
                password: this.login.value.password,
                version: "v2",
            };
            // tslint:disable-next-line: max-line-length
            if (this.loginCrd.userId == null ||
                this.loginCrd.userId === "" ||
                (this.loginCrd.userId === undefined && this.loginCrd.password == null) ||
                this.loginCrd.password === undefined) {
                // this.commonService.dismissLoader();
                this.commonService.presentToast("User id and password is empty");
            }
            else {
                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/global/checkAuthenticateDealer";
                this.ajaxService.ajaxPostWithBody(url, this.loginCrd).subscribe((res) => {
                    if (res !== undefined) {
                        if (res.message == "Invalid User") {
                            if (this.commonService.isLoading)
                                this.commonService.dismissLoader();
                            this.commonService.presentToast("Invalid User name and password");
                        }
                        else {
                            console.log(res);
                            this.commonService.updateLogo(res);
                            // localStorage.setItem('dealerLoginData', JSON.stringify(res));
                            src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["adminLocalStorage"].dealerLoginData = JSON.stringify(res);
                            localStorage.setItem("companyId", res.companyId);
                            localStorage.setItem("companySuffix", res.companySuffix);
                            localStorage.setItem("corpId", res.companyId);
                            localStorage.setItem("userName", res.userId);
                            localStorage.setItem("userId", res.userId);
                            localStorage.setItem("password", res.password);
                            // localStorage.setItem('mainMenu', res.mainMenu);
                            localStorage.setItem("mainMenu", res.mainmenu);
                            localStorage.setItem("esimdashboardmenu", res.esimdashboardmenu);
                            localStorage.setItem("esimremovemenu", res.esimremovemenu);
                            localStorage.setItem("zohoInvoice", res.zohoInvoice);
                            // if(this.myPlatform == "desktop")
                            // this.router.navigateByUrl('/dashboard');
                            // else
                            if (this.loginCrd.userId.toLowerCase() === "psdn-sa") {
                                this.router.navigateByUrl("/tabs-login/esim-dealer-detail");
                                this.menuController.enable(true);
                            }
                            else {
                                // Your existing logic for other users
                                this.router.navigateByUrl("/tabs-login/new-dashboard");
                            }
                            //this.authService.login();
                        }
                    }
                    else if (res.message == "Invalid User") {
                        if (this.commonService.isLoading)
                            this.commonService.dismissLoader();
                        this.commonService.presentToast("Invalid User name and password");
                    }
                    else if (res.error) {
                        if (this.commonService.isLoading)
                            this.commonService.dismissLoader();
                        const error = res.error;
                        if (error.text === "Invalid") {
                            this.commonService.presentToast("Invalid User name and password");
                        }
                        else if (error.text === "Update") {
                            this.commonService.presentToast("Get Lastest Application");
                        }
                        else if (error.text === "Error") {
                            this.commonService.presentToast("Something Wrong Please Contact Support Team");
                        }
                        else {
                            this.commonService.presentToast("Please check your internet connection!");
                        }
                    }
                });
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/delar-application/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
], LoginPage);



/***/ }),

/***/ "./src/app/login/forgotpass-modal/forgotpass-modal.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/login/forgotpass-modal/forgotpass-modal.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".labelSpacing {\n  margin-bottom: 3%;\n  margin-left: 6%;\n  width: 85%;\n}\n\n.margin {\n  margin-top: 3%;\n}\n\n.Tracalogic {\n  --background:rgb(255, 174, 0);\n}\n\n.Moveandtrack {\n  --background:rgb(237, 27, 36);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vZm9yZ290cGFzcy1tb2RhbC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGxvZ2luXFxmb3Jnb3RwYXNzLW1vZGFsXFxmb3Jnb3RwYXNzLW1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vZm9yZ290cGFzcy1tb2RhbC9mb3Jnb3RwYXNzLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURBQTtFQUNJLDZCQUFBO0FDR0o7O0FEREE7RUFDSSw2QkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vZm9yZ290cGFzcy1tb2RhbC9mb3Jnb3RwYXNzLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbFNwYWNpbmd7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA2JTtcclxuICAgIHdpZHRoOiA4NSU7XHJcbn1cclxuLm1hcmdpbntcclxuICAgIG1hcmdpbi10b3A6IDMlXHJcbn1cclxuLlRyYWNhbG9naWN7XHJcbiAgICAtLWJhY2tncm91bmQ6cmdiKDI1NSwgMTc0LCAwKTtcclxufVxyXG4uTW92ZWFuZHRyYWNre1xyXG4gICAgLS1iYWNrZ3JvdW5kOnJnYigyMzcsIDI3LCAzNik7XHJcbn0iLCIubGFiZWxTcGFjaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG4gIG1hcmdpbi1sZWZ0OiA2JTtcbiAgd2lkdGg6IDg1JTtcbn1cblxuLm1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDMlO1xufVxuXG4uVHJhY2Fsb2dpYyB7XG4gIC0tYmFja2dyb3VuZDpyZ2IoMjU1LCAxNzQsIDApO1xufVxuXG4uTW92ZWFuZHRyYWNrIHtcbiAgLS1iYWNrZ3JvdW5kOnJnYigyMzcsIDI3LCAzNik7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/forgotpass-modal/forgotpass-modal.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/login/forgotpass-modal/forgotpass-modal.page.ts ***!
  \*****************************************************************/
/*! exports provided: ForgotpassModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassModalPage", function() { return ForgotpassModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");







let ForgotpassModalPage = class ForgotpassModalPage {
    constructor(formBuilder, modalController, ajaxService, commonService) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.color = {
            "Tracalogic": 'rgb(255, 174, 0)',
            "Moveandtrack": 'rgb(237, 27, 36)'
        };
        this.showorhideInput = true;
    }
    getBack() {
        this.modalController.dismiss();
    }
    submitPass() {
        let body = {
            "username": this.forgetPass.value.compName,
            "corpid": this.forgetPass.value.compId,
            "emailId": this.forgetPass.value.emailId,
            "mobileNo": this.forgetPass.value.mobileNo
        };
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + "/login/company/branch/user/forgetpassword";
        this.ajaxService.ajaxPostWithString(url, body)
            .subscribe(res => {
            console.log(res);
            if (res) {
                this.commonService.presentToast(res);
                this.modalController.dismiss();
            }
            else {
                this.commonService.presentToast("contact support team");
            }
        });
    }
    ngOnInit() {
        this.appName = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["app"].appName.replace(/ /g, "");
        this.forgetPass = this.formBuilder.group({
            emailId: [''],
            mobileNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            compName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            compId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
};
ForgotpassModalPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
];
ForgotpassModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpass-modal',
        template: __webpack_require__(/*! raw-loader!./forgotpass-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/forgotpass-modal/forgotpass-modal.page.html"),
        styles: [__webpack_require__(/*! ./forgotpass-modal.page.scss */ "./src/app/login/forgotpass-modal/forgotpass-modal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
], ForgotpassModalPage);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule, ForgotpassModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassModalPageModule", function() { return ForgotpassModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_forgotpass_modal_forgotpass_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/forgotpass-modal/forgotpass-modal.page */ "./src/app/login/forgotpass-modal/forgotpass-modal.page.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _parent_app_student_login_student_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../parent-app/student-login/student-login.component */ "./src/app/parent-app/student-login/student-login.component.ts");









const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]
    }
];
const fPassModal = [
    {
        path: '',
        component: _login_forgotpass_modal_forgotpass_modal_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpassModalPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(fPassModal)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"], _login_forgotpass_modal_forgotpass_modal_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpassModalPage"], _parent_app_student_login_student_login_component__WEBPACK_IMPORTED_MODULE_8__["StudentLoginComponent"]],
        entryComponents: []
    })
], LoginPageModule);

class ForgotpassModalPageModule {
}


/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input .native-input {\n  border-radius: 25px;\n}\n\n.Tracalogic {\n  --background: rgb(255, 174, 0);\n}\n\n.Moveandtrack {\n  --background: rgb(237, 27, 36);\n}\n\n.GE {\n  --background: rgb(255, 174, 0);\n}\n\n.Upcot-mvt {\n  --background: rgb(237, 27, 36);\n}\n\n.Remoncloud {\n  --background: rgb(237, 27, 36);\n}\n\n.moveAndTrackSpacing {\n  margin-top: 12%;\n}\n\n.labelSpacing {\n  margin-bottom: 2%;\n  margin-left: 6%;\n  width: 85%;\n}\n\n.check {\n  width: 12px;\n  height: 12px;\n  margin-right: 10px;\n}\n\n.backgroundCol {\n  background: #32384b;\n}\n\n.noWhiteSpace {\n  padding: 0px;\n}\n\n.iconSize {\n  width: 50px;\n  height: 35px;\n}\n\n.appDarkBackground {\n  background: #32384b;\n}\n\n.label-shape {\n  background-color: none;\n  height: 40px;\n}\n\n.label-shape-box {\n  background-color: none;\n  height: 40px;\n  margin-bottom: 3%;\n}\n\n.input-spacing {\n  top: 5vh;\n  right: 2vh;\n}\n\n.input-spacing {\n  float: right;\n}\n\n.web-input {\n  --padding-top: 4px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: system-ui;\n}\n\nion-input .native-input {\n  border-radius: 25px;\n}\n\n.Tracalogic {\n  --background: rgb(255, 174, 0);\n}\n\n.Moveandtrack {\n  --background: rgb(237, 27, 36);\n}\n\n.GE {\n  --background: rgb(255, 174, 0);\n}\n\n.moveAndTrackSpacing {\n  opacity: 0.9;\n  width: 300px;\n  margin: auto;\n  position: relative;\n  top: 50px;\n  border-radius: 5px;\n}\n\n@media only screen and (max-width: 550px) {\n  .moveAndTrackSpacing {\n    top: 50px;\n  }\n}\n\n@media only screen and (min-width: 551px) {\n  .moveAndTrackSpacing {\n    width: 360px;\n  }\n\n  .moveAndTrackSpacingNew {\n    width: 360px;\n  }\n}\n\n@media only screen and (min-width: 999px) {\n  .moveAndTrackSpacing {\n    position: fixed !important;\n    float: right;\n    right: -4.5%;\n    -webkit-transform: scale(0.8) !important;\n            transform: scale(0.8) !important;\n  }\n\n  .moveAndTrackSpacingNew {\n    position: absolute;\n    right: 8px;\n    top: 4vh;\n    background: #f1f1f170;\n  }\n}\n\n@media only screen and (min-width: 1100px) {\n  .moveAndTrackSpacing {\n    position: fixed !important;\n    right: -3% !important;\n    -webkit-transform: scale(0.9) !important;\n            transform: scale(0.9) !important;\n    background: #f1f1f170;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  .moveAndTrackSpacing {\n    position: fixed !important;\n    right: -2% !important;\n    -webkit-transform: scale(0.9) !important;\n            transform: scale(0.9) !important;\n    background: #f1f1f170;\n  }\n}\n\n@media only screen and (min-width: 1300px) {\n  .moveAndTrackSpacing {\n    position: fixed !important;\n    right: 0% !important;\n    -webkit-transform: scale(0.9) !important;\n            transform: scale(0.9) !important;\n    background: #f1f1f170;\n  }\n}\n\n.forgotNew {\n  font-size: 12px;\n  line-height: 31px;\n  color: red;\n  padding-right: 24px;\n  cursor: pointer;\n}\n\n#remember-item {\n  --background: transparent;\n  margin: -15px 0 0 0px;\n  position: absolute;\n  right: -12px;\n  font-size: 12px;\n  padding: 0 !important;\n  width: 148px;\n}\n\n.container {\n  margin: 0px;\n  height: 100vh;\n  display: block;\n}\n\n.text-box-spacing {\n  height: 60px;\n}\n\n.labelSpacing-web {\n  margin-bottom: 3%;\n}\n\n.left-side-form-grp {\n  width: 20%;\n  /* height: 6%; */\n  /* float: right; */\n  position: fixed;\n  top: 10vh;\n  right: 2vh;\n}\n\n.container-wrapper {\n  margin: 0px;\n  height: 100vh;\n  display: block;\n  background: url('mvtlogin.jpg') center center/cover no-repeat fixed;\n  background-size: 100% 99%;\n}\n\n.fms-container-wrapper {\n  margin: 0px;\n  height: 100vh;\n  display: block;\n  background: url(\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/Company/fmslogin.gif\") center center/cover no-repeat fixed;\n  background-size: 100% 99%;\n}\n\n.labelSpacing {\n  margin-bottom: 3%;\n  margin-left: 6%;\n  width: 85%;\n}\n\n.forgotPass {\n  font-size: 13px;\n}\n\n.forgot {\n  font-size: 11px;\n}\n\n.svg_img {\n  width: 20px;\n  padding: 0px 0px 6px;\n}\n\n.check {\n  width: 12px;\n  height: 12px;\n  margin-right: 10px;\n}\n\n.backgroundCol {\n  background: #32384b;\n}\n\n.noWhiteSpace {\n  padding: 0px;\n}\n\n.iconSize {\n  width: 50px;\n  height: 35px;\n}\n\n.appDarkBackground {\n  background: #32384b;\n}\n\n.background {\n  --background: url('background.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.buttonArmoron {\n  color: blanchedalmond;\n  height: 56px;\n  width: 56px;\n}\n\n.iconsize {\n  font-size: 30px;\n}\n\n.rowstyle {\n  border-bottom: 1px solid #ba7203;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  font-size: 14px;\n}\n\n#languageIcon,\n#countryIcon {\n  font-size: 20px;\n}\n\n.contryCodeStyle {\n  color: whitesmoke;\n  border-bottom: 1px solid whitesmoke;\n  padding-top: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtBQ0FKOztBREdBO0VBQ0UsOEJBQUE7QUNBRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw4QkFBQTtBQ0VGOztBREFBO0VBQ0UsOEJBQUE7QUNHRjs7QUREQTtFQUNFLDhCQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDTUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNFRjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FESUE7RUFFRSxzQkFBQTtFQUNBLFlBQUE7QUNGRjs7QURLQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0FDSEY7O0FES0E7RUFDRSxRQUFBO0VBQ0EsVUFBQTtBQ0ZGOztBRElBO0VBQ0UsWUFBQTtBQ0RGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0FGOztBREdFO0VBQ0UsbUJBQUE7QUNBSjs7QURHQTtFQUNFLDhCQUFBO0FDQUY7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBRENBO0VBQ0UsOEJBQUE7QUNFRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRTtJQUVFLFNBQUE7RUNFRjtBQUNGOztBREFBO0VBQ0U7SUFDRSxZQUFBO0VDRUY7O0VEQUE7SUFDRSxZQUFBO0VDR0Y7QUFDRjs7QURBQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLHdDQUFBO1lBQUEsZ0NBQUE7RUNFRjs7RURBQTtJQUNFLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFFBQUE7SUFDQSxxQkFBQTtFQ0dGO0FBQ0Y7O0FEREE7RUFDRTtJQUNFLDBCQUFBO0lBQ0EscUJBQUE7SUFDQSx3Q0FBQTtZQUFBLGdDQUFBO0lBQ0EscUJBQUE7RUNHRjtBQUNGOztBRERBO0VBQ0U7SUFDRSwwQkFBQTtJQUNBLHFCQUFBO0lBQ0Esd0NBQUE7WUFBQSxnQ0FBQTtJQUNBLHFCQUFBO0VDR0Y7QUFDRjs7QUREQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxvQkFBQTtJQUNBLHdDQUFBO1lBQUEsZ0NBQUE7SUFDQSxxQkFBQTtFQ0dGO0FBQ0Y7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0dGOztBREFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDR0Y7O0FEREE7RUFDRSxZQUFBO0FDSUY7O0FEREE7RUFDRSxpQkFBQTtBQ0lGOztBRERBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNJRjs7QURGQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1FQUFBO0VBRUEseUJBQUE7QUNJRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG9JQUFBO0VBRUEseUJBQUE7QUNHRjs7QURBQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7QUNHRjs7QUREQTtFQUNFLGVBQUE7QUNJRjs7QURGQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtBQ0tGOztBREhBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ01GOztBREhBO0VBQ0UsbUJBQUE7QUNNRjs7QURIQTtFQUNFLFlBQUE7QUNNRjs7QURIQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDTUY7O0FESEE7RUFDRSxtQkFBQTtBQ01GOztBRERBO0VBQ0UsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDSUY7O0FEREE7RUFDRSxrQkFBQTtBQ0lGOztBRERBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0lGOztBRERBO0VBQ0UsZUFBQTtBQ0lGOztBRERBO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0lGOztBRERBOztFQUVFLGVBQUE7QUNJRjs7QURGQTtFQUNFLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQkFBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0IHtcclxuICAubmF0aXZlLWlucHV0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgfVxyXG59XHJcbi5UcmFjYWxvZ2ljIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDE3NCwgMCk7XHJcbn1cclxuLk1vdmVhbmR0cmFjayB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjM3LCAyNywgMzYpO1xyXG59XHJcbi5HRSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAxNzQsIDApO1xyXG59XHJcbi5VcGNvdC1tdnQge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDIzNywgMjcsIDM2KTtcclxufVxyXG4uUmVtb25jbG91ZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjM3LCAyNywgMzYpO1xyXG59XHJcbi5tb3ZlQW5kVHJhY2tTcGFjaW5nIHtcclxuICBtYXJnaW4tdG9wOiAxMiU7XHJcbn1cclxuLmxhYmVsU3BhY2luZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgbWFyZ2luLWxlZnQ6IDYlO1xyXG4gIHdpZHRoOiA4NSU7XHJcbn1cclxuLy8gLmZvcmdvdFBhc3Mge1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4vLyB9XHJcblxyXG4uY2hlY2sge1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMTJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kQ29sIHtcclxuICBiYWNrZ3JvdW5kOiAjMzIzODRiO1xyXG59XHJcblxyXG4ubm9XaGl0ZVNwYWNlIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5pY29uU2l6ZSB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcbi8vIC5hcHBJbWFnZUJhY2tncm91bmR7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmFja2dyb3VuZ0ltYWdlL0RlZmF1bHQtUG9ydHJhaXRAfmlwYWRwcm8ucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuLy8gfVxyXG4uYXBwRGFya0JhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6ICMzMjM4NGI7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vd2ViLy8vLy8vLy8vLy8vLy8vLy8vL0BhdC1yb290XHJcbi5sYWJlbC1zaGFwZSB7XHJcbiAgLy9ib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIC8vd2lkdGg6IDQyMHB4O1xyXG59XHJcbi5sYWJlbC1zaGFwZS1ib3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIC8vIHdpZHRoOjIwJTtcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG4uaW5wdXQtc3BhY2luZyB7XHJcbiAgdG9wOiA1dmg7XHJcbiAgcmlnaHQ6IDJ2aDtcclxufVxyXG4uaW5wdXQtc3BhY2luZyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi53ZWItaW5wdXQge1xyXG4gIC0tcGFkZGluZy10b3A6IDRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgLm5hdGl2ZS1pbnB1dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIH1cclxufVxyXG4uVHJhY2Fsb2dpYyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAxNzQsIDApO1xyXG59XHJcbi5Nb3ZlYW5kdHJhY2sge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDIzNywgMjcsIDM2KTtcclxufVxyXG4uR0Uge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMTc0LCAwKTtcclxufVxyXG5cclxuLm1vdmVBbmRUcmFja1NwYWNpbmcge1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAubW92ZUFuZFRyYWNrU3BhY2luZyB7XHJcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgIHRvcDogNTBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NTFweCkge1xyXG4gIC5tb3ZlQW5kVHJhY2tTcGFjaW5nIHtcclxuICAgIHdpZHRoOiAzNjBweDtcclxuICB9XHJcbiAgLm1vdmVBbmRUcmFja1NwYWNpbmdOZXcge1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTlweCkge1xyXG4gIC5tb3ZlQW5kVHJhY2tTcGFjaW5nIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcmlnaHQ6IC00LjUlO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5tb3ZlQW5kVHJhY2tTcGFjaW5nTmV3IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA4cHg7XHJcbiAgICB0b3A6IDR2aDtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE3MDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTAwcHgpIHtcclxuICAubW92ZUFuZFRyYWNrU3BhY2luZyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAtMyUgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTcwO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5tb3ZlQW5kVHJhY2tTcGFjaW5nIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IC0yJSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxNzA7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTMwMHB4KSB7XHJcbiAgLm1vdmVBbmRUcmFja1NwYWNpbmcge1xyXG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogMCUgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTcwO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcmdvdE5ldyB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgcGFkZGluZy1yaWdodDogMjRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI3JlbWVtYmVyLWl0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luOiAtMTVweCAwIDAgMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTEycHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTQ4cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnRleHQtYm94LXNwYWNpbmcge1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLmxhYmVsU3BhY2luZy13ZWIge1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcblxyXG4ubGVmdC1zaWRlLWZvcm0tZ3JwIHtcclxuICB3aWR0aDogMjAlO1xyXG4gIC8qIGhlaWdodDogNiU7ICovXHJcbiAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDEwdmg7XHJcbiAgcmlnaHQ6IDJ2aDtcclxufVxyXG4uY29udGFpbmVyLXdyYXBwZXIge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2xvZ2luTG9nby9tdnRsb2dpbi5qcGdcIikgY2VudGVyIGNlbnRlciAvIGNvdmVyXHJcbiAgICBuby1yZXBlYXQgZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDk5JTtcclxuICAvL2JhY2tncm91bmQ6IHVybChcImh0dHBzOi8va2luZ3N0cmFja2ltYWdlcy5zMy5hbWF6b25hd3MuY29tL2xvZ2luaW1hZ2VzL3RyYWNrX2FwbWtpbmdzdHJhY2tfY29tX2JhY2tncm91bmQuanBnXCIpIGNlbnRlciBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQgZml4ZWQ7XHJcbn1cclxuLmZtcy1jb250YWluZXItd3JhcHBlciB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2tpbmdzdHJhY2tpbWFnZXMuczMuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbS9Db21wYW55L2Ztc2xvZ2luLmdpZlwiKVxyXG4gICAgY2VudGVyIGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdCBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgOTklO1xyXG4gIC8vYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9raW5nc3RyYWNraW1hZ2VzLnMzLmFtYXpvbmF3cy5jb20vbG9naW5pbWFnZXMvdHJhY2tfYXBta2luZ3N0cmFja19jb21fYmFja2dyb3VuZC5qcGdcIikgY2VudGVyIGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdCBmaXhlZDtcclxufVxyXG4ubGFiZWxTcGFjaW5nIHtcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICBtYXJnaW4tbGVmdDogNiU7XHJcbiAgd2lkdGg6IDg1JTtcclxufVxyXG5cclxuLmZvcmdvdFBhc3Mge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4uZm9yZ290IHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuLnN2Z19pbWcge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDBweCAwcHggNnB4O1xyXG59XHJcbi5jaGVjayB7XHJcbiAgd2lkdGg6IDEycHg7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmJhY2tncm91bmRDb2wge1xyXG4gIGJhY2tncm91bmQ6ICMzMjM4NGI7XHJcbn1cclxuXHJcbi5ub1doaXRlU3BhY2Uge1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmljb25TaXplIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5hcHBEYXJrQmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZDogIzMyMzg0YjtcclxufVxyXG5cclxuLy8vL0FybW9yb25cclxuXHJcbi5iYWNrZ3JvdW5kIHtcclxuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9Bcm1vcm9uL2JhY2tncm91bmQuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b25Bcm1vcm9uIHtcclxuICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIHdpZHRoOiA1NnB4O1xyXG59XHJcblxyXG4uaWNvbnNpemUge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLnJvd3N0eWxlIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JhNzIwMztcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4jbGFuZ3VhZ2VJY29uLFxyXG4jY291bnRyeUljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uY29udHJ5Q29kZVN0eWxlIHtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVzbW9rZTtcclxuICBwYWRkaW5nLXRvcDogMzJweDtcclxufVxyXG4iLCJpb24taW5wdXQgLm5hdGl2ZS1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5UcmFjYWxvZ2ljIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAxNzQsIDApO1xufVxuXG4uTW92ZWFuZHRyYWNrIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjM3LCAyNywgMzYpO1xufVxuXG4uR0Uge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDE3NCwgMCk7XG59XG5cbi5VcGNvdC1tdnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigyMzcsIDI3LCAzNik7XG59XG5cbi5SZW1vbmNsb3VkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjM3LCAyNywgMzYpO1xufVxuXG4ubW92ZUFuZFRyYWNrU3BhY2luZyB7XG4gIG1hcmdpbi10b3A6IDEyJTtcbn1cblxuLmxhYmVsU3BhY2luZyB7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xuICBtYXJnaW4tbGVmdDogNiU7XG4gIHdpZHRoOiA4NSU7XG59XG5cbi5jaGVjayB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmJhY2tncm91bmRDb2wge1xuICBiYWNrZ3JvdW5kOiAjMzIzODRiO1xufVxuXG4ubm9XaGl0ZVNwYWNlIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uaWNvblNpemUge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uYXBwRGFya0JhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjMzIzODRiO1xufVxuXG4ubGFiZWwtc2hhcGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5sYWJlbC1zaGFwZS1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufVxuXG4uaW5wdXQtc3BhY2luZyB7XG4gIHRvcDogNXZoO1xuICByaWdodDogMnZoO1xufVxuXG4uaW5wdXQtc3BhY2luZyB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLndlYi1pbnB1dCB7XG4gIC0tcGFkZGluZy10b3A6IDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xufVxuXG5pb24taW5wdXQgLm5hdGl2ZS1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5UcmFjYWxvZ2ljIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAxNzQsIDApO1xufVxuXG4uTW92ZWFuZHRyYWNrIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjM3LCAyNywgMzYpO1xufVxuXG4uR0Uge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDE3NCwgMCk7XG59XG5cbi5tb3ZlQW5kVHJhY2tTcGFjaW5nIHtcbiAgb3BhY2l0eTogMC45O1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xuICAubW92ZUFuZFRyYWNrU3BhY2luZyB7XG4gICAgdG9wOiA1MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU1MXB4KSB7XG4gIC5tb3ZlQW5kVHJhY2tTcGFjaW5nIHtcbiAgICB3aWR0aDogMzYwcHg7XG4gIH1cblxuICAubW92ZUFuZFRyYWNrU3BhY2luZ05ldyB7XG4gICAgd2lkdGg6IDM2MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5OXB4KSB7XG4gIC5tb3ZlQW5kVHJhY2tTcGFjaW5nIHtcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcmlnaHQ6IC00LjUlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1vdmVBbmRUcmFja1NwYWNpbmdOZXcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogOHB4O1xuICAgIHRvcDogNHZoO1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE3MDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTAwcHgpIHtcbiAgLm1vdmVBbmRUcmFja1NwYWNpbmcge1xuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiAtMyUgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxNzA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5tb3ZlQW5kVHJhY2tTcGFjaW5nIHtcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgICByaWdodDogLTIlICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTcwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzMDBweCkge1xuICAubW92ZUFuZFRyYWNrU3BhY2luZyB7XG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDAlICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTcwO1xuICB9XG59XG4uZm9yZ290TmV3IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMzFweDtcbiAgY29sb3I6IHJlZDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jcmVtZW1iZXItaXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogLTE1cHggMCAwIDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTEycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTQ4cHg7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50ZXh0LWJveC1zcGFjaW5nIHtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ubGFiZWxTcGFjaW5nLXdlYiB7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufVxuXG4ubGVmdC1zaWRlLWZvcm0tZ3JwIHtcbiAgd2lkdGg6IDIwJTtcbiAgLyogaGVpZ2h0OiA2JTsgKi9cbiAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTB2aDtcbiAgcmlnaHQ6IDJ2aDtcbn1cblxuLmNvbnRhaW5lci13cmFwcGVyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvbG9naW5Mb2dvL212dGxvZ2luLmpwZ1wiKSBjZW50ZXIgY2VudGVyL2NvdmVyIG5vLXJlcGVhdCBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDk5JTtcbn1cblxuLmZtcy1jb250YWluZXItd3JhcHBlciB7XG4gIG1hcmdpbjogMHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9raW5nc3RyYWNraW1hZ2VzLnMzLmFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb20vQ29tcGFueS9mbXNsb2dpbi5naWZcIikgY2VudGVyIGNlbnRlci9jb3ZlciBuby1yZXBlYXQgZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSA5OSU7XG59XG5cbi5sYWJlbFNwYWNpbmcge1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgbWFyZ2luLWxlZnQ6IDYlO1xuICB3aWR0aDogODUlO1xufVxuXG4uZm9yZ290UGFzcyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmZvcmdvdCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnN2Z19pbWcge1xuICB3aWR0aDogMjBweDtcbiAgcGFkZGluZzogMHB4IDBweCA2cHg7XG59XG5cbi5jaGVjayB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmJhY2tncm91bmRDb2wge1xuICBiYWNrZ3JvdW5kOiAjMzIzODRiO1xufVxuXG4ubm9XaGl0ZVNwYWNlIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uaWNvblNpemUge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uYXBwRGFya0JhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjMzIzODRiO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL0FybW9yb24vYmFja2dyb3VuZC5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ1dHRvbkFybW9yb24ge1xuICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XG4gIGhlaWdodDogNTZweDtcbiAgd2lkdGg6IDU2cHg7XG59XG5cbi5pY29uc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnJvd3N0eWxlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiYTcyMDM7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuI2xhbmd1YWdlSWNvbixcbiNjb3VudHJ5SWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNvbnRyeUNvZGVTdHlsZSB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbiAgcGFkZGluZy10b3A6IDMycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_forgotpass_modal_forgotpass_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/forgotpass-modal/forgotpass-modal.page */ "./src/app/login/forgotpass-modal/forgotpass-modal.page.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/websocket.service */ "./src/app/services/websocket.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");














let LoginPage = class LoginPage {
    constructor(formBuilder, ajaxService, platform, router, modalController, commonService, websocketService, menuController, alertController, authService) {
        this.formBuilder = formBuilder;
        this.ajaxService = ajaxService;
        this.platform = platform;
        this.router = router;
        this.modalController = modalController;
        this.commonService = commonService;
        this.websocketService = websocketService;
        this.menuController = menuController;
        this.alertController = alertController;
        this.authService = authService;
        this.isChecked = false;
        this.eye_icon = "eye-off";
        this.password_type = "password";
        this.exitPopup = false;
        this.serverName = "Click here for Demo!";
        this.check = "asda";
        this.armoronApp = {
            countryCode: "+91",
            selectedlanguage: "English",
            country: "India",
        };
        this.languageOptions = [];
        this.showHidePass = () => {
            this.password_type = this.password_type === "text" ? "password" : "text";
            this.eye_icon = this.eye_icon === "eye" ? "eye-off" : "eye";
        };
        this.submitLogin = () => {
            const login_datas = {
                compName: this.login.value.compName.toLowerCase(),
                password: this.login.value.password.toLowerCase(),
                compId: this.login.value.compId.toLowerCase(),
            };
            this.login.patchValue(login_datas);
            // if (app.entryPoint == 'TTS') {
            _environments_environment__WEBPACK_IMPORTED_MODULE_3__["app"].entryPoint = "unknown";
            // }
            this.commonService.presentLoader();
            let body = {
                username: this.login.value.compName,
                password: this.login.value.password,
                corpid: this.login.value.compId,
                loginMode: "mobile",
                entryPoint: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["app"].entryPoint,
                appsetting: "vts_mobile",
            };
            let url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web + "/login/company/login";
            this.ajaxService.ajaxPostMethod(url, body).subscribe((res) => {
                console.log(res);
                if (res != undefined) {
                    if (res.length > 1) {
                        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["app"].entryPoint == "unknown") {
                            _environments_environment__WEBPACK_IMPORTED_MODULE_3__["app"].entryPoint = res[1].entryPoint;
                        }
                        if (this.isChecked) {
                            document.cookie =
                                "rememberme=yes;domain=" + window.location.hostname + ";path=/";
                            let remValue = {
                                compName: this.login.value.compName,
                                password: this.login.value.password,
                                corpid: this.login.value.compId,
                                checked: this.isChecked,
                            };
                            sessionStorage.setItem("rememberMe", JSON.stringify(remValue));
                        }
                        else {
                            document.cookie =
                                "rememberme=no;domain=" + window.location.hostname + ";path=/";
                            if (localStorage.rememberMe) {
                                localStorage.removeItem("rememberMe");
                            }
                        }
                        let dashboardInput = {
                            companyID: this.login.value.compId,
                            branchID: this.login.value.compId,
                            emailId: this.login.value.compName,
                            Check: false,
                            entryPoint: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["app"].entryPoint,
                            pollingDuration: JSON.parse(res[1]["applicationSettings"])
                                .pollingDuration,
                            mode: "dashboardData",
                            dashboardVin: "",
                            defaultInterval: res[1]["applicationSettings"].liveTrackingDelay,
                            make: "",
                            model: "",
                            delay: res[1]["applicationSettings"].liveTrackingDelay,
                            ImeiNo: "",
                        };
                        const messagingServiceData = {
                            companyId: this.login.value.compId,
                            logo: res[1]["logo"],
                            entryPoint: res[1].entryPoint,
                        };
                        this.commonService.updateLogo(messagingServiceData);
                        this.websocketService.connectSocket(dashboardInput, "livetrack");
                        // || "https://track.remon.in"
                        if (window.location.origin == "https://track.remon.in") {
                            localStorage.setItem("companyLogo", "http://kingstrackimages.s3.amazonaws.com/Company/Elint.png");
                        }
                        else if (window.location.origin == "http://ilocate.in") {
                            localStorage.setItem("companyLogo", "https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/Company/ilocate.jpg");
                        }
                        else if (window.location.origin == "https://neo.fleetpolice.com") {
                            localStorage.setItem("companyLogo", "https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/Company/dfadf.jpg");
                        }
                        else if (window.location.origin == "https://tracol.apmkingstrack.com") {
                            localStorage.setItem("companyLogo", "https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/Company/tracole.jpg");
                        }
                        else if (window.location.origin == "https://goodgps.apmkingstrack.com") {
                            localStorage.setItem("companyLogo", "https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/Company/goodgps.jpg");
                        }
                        else {
                            localStorage.setItem("companyLogo", res[1]["logo"]);
                        }
                        // localStorage.setItem('device','ionic4ios')
                        localStorage.setItem("mapAllowed", res[1]["mapAllowed"]);
                        localStorage.setItem("mainMenu", res[1]["mainmenu"]);
                        localStorage.setItem("dashboardWebSocketData", JSON.stringify(dashboardInput));
                        localStorage.setItem("loginData", JSON.stringify(res));
                        localStorage.setItem("staticIOData", JSON.stringify(res[0]["staticIODatas"]));
                        localStorage.setItem("appSettings", res[1]["applicationSettings"]);
                        // localStorage.setItem('map', JSON.parse(res[1]["applicationSettings"]).mapview);
                        localStorage.setItem("map", res[1]["mapview"]);
                        localStorage.setItem("corpId", this.login.value.compId);
                        localStorage.setItem("userName", this.login.value.compName);
                        localStorage.setItem("password", this.login.value.password);
                        localStorage.setItem("commandsData", res[1]["CommandsData"]);
                        // this.router.navigateByUrl("/dashboard");
                        if (this.myPlatform != "desktop" && _environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web.includes("mvt")) {
                            localStorage.setItem("inItPage", res[1]["initialPage"]);
                            sessionStorage.setItem("login", "true");
                            localStorage.setItem("login", "true");
                            this.authService.login();
                            this.commonService.dismissLoader();
                        }
                        else {
                            localStorage.setItem("inItPage", res[1]["initialPage"]);
                            if (res[1]["initialPage"] == "dashboard" ||
                                res[1]["initialPage"] == undefined) {
                                this.router.navigateByUrl("/tabs/members/dashboard");
                            }
                            else if (res[1]["initialPage"] == "gridView" ||
                                res[1]["initialPage"] == "gridview") {
                                this.router.navigateByUrl("tabs/gridview/All");
                            }
                            else if (res[1]["initialPage"].toString().toUpperCase() == "FMSDASHBOARD") {
                                localStorage.setItem("fmslogin", _environments_environment__WEBPACK_IMPORTED_MODULE_3__["app"].appName);
                                this.router.navigateByUrl("fms-dashboard");
                                localStorage.setItem("fmscurrency", res[1]["currency"]);
                                this.menuController.enable(true);
                            }
                            else if (res[1]["initialPage"].toString().toUpperCase() == "JOBCARD") {
                                this.router.navigateByUrl("job-card-details");
                                this.menuController.enable(true);
                            }
                            else {
                                this.router.navigateByUrl("ais-dashboard");
                            }
                            sessionStorage.setItem("login", "false");
                            localStorage.setItem("login", "false");
                            this.commonService.dismissLoader();
                        }
                        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web +
                            "/login/getPreferences?key=pdfDownloadLogo&companyId=" +
                            this.login.value.compId;
                        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
                            localStorage.setItem("pdfDownloadLogo", res);
                        });
                    }
                    else {
                        sessionStorage.setItem("login", "false");
                        localStorage.setItem("login", "false");
                        this.commonService.dismissLoader();
                        this.commonService.presentToast("Invalid credential");
                    }
                }
                else {
                    this.commonService.dismissLoader();
                    var data = navigator.onLine;
                    if (data == false) {
                        this.commonService.networkChecker();
                    }
                    else if (data == true) {
                        this.ajaxService
                            .ajaxGetWithString(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web + "/login/test")
                            .subscribe((res) => {
                            if (res == '["Hi Web....!"]')
                                console.log("server run");
                            else {
                                this.commonService.dismissLoader();
                                setTimeout(() => {
                                    this.commonService.presentAlert("Server maintanance error", "Sorry for the inconvenience please try after some times");
                                }, 10000);
                            }
                        });
                    }
                }
            });
        };
        this.generateOTP = (cntrl) => {
            this.generatedOTP = Math.floor(Math.random() * 9000) + 1000;
            if (/(android|iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
                if (this.login.value.compName === "9600696008" ||
                    this.login.value.compName === "7010017783") {
                    this.verifyOTPMethod(this.generatedOTP, this.login.value.compName);
                }
                else {
                    this.sendOTP();
                    //  this.verifyOTPMethod(this.generatedOTP, this.login.value.compName);
                }
            }
            else {
                this.verifyOTPMethod(this.generatedOTP, this.login.value.compName);
            }
        };
        this.sendOTP = () => {
            this.platform.ready().then(() => {
                this.commonService.presentLoader();
                const messageData = this.OTPmessage + encodeURIComponent(this.generatedOTP);
                let smsAPI = localStorage.getItem("SMSAPI");
                smsAPI = smsAPI
                    .replace("smsAPIMobileNumber", encodeURIComponent(this.login.value.compName))
                    .replace("smsAPIMessageContent", messageData);
                this.ajaxService.ajaxGet(smsAPI).subscribe((res) => {
                    console.log(res);
                    this.commonService.presentToast("Enter your Otp");
                    this.commonService.dismissLoader();
                }, (err) => {
                    console.log(err);
                    this.commonService.dismissLoader();
                });
            });
            //   this.platform.ready().then(() => {
            //     this.commonService.presentLoader();
            //   const url = serverUrl.web +'/parentapp/otp?message=your otp is '+this.generatedOTP+'&contact='+this.login.value.compName
            //   this.ajaxService.ajaxGet(url)
            //   .subscribe(res => {
            //     console.log(res);
            //     this.commonService.presentToast('Enter your Otp');
            //     this.commonService.dismissLoader();
            //   }, err => {
            //     console.log(err);
            //     this.commonService.dismissLoader();
            //   });
            // });
        };
        this.verifyOTPMethod = (userotp, phoneNum) => {
            if (phoneNum === undefined || phoneNum === "") {
                this.commonService.presentAlert("Phone_Number", "Please enter valid phone number");
            }
            else if (phoneNum !== undefined || phoneNum !== "") {
                if (userotp === "" || userotp === undefined) {
                    this.commonService.presentAlert("OTP", "Please enter the OTP");
                }
                else if (this.generatedOTP == userotp &&
                    this.generatedOTP !== "" &&
                    this.entryPoint !== undefined) {
                    this.commonService.presentLoader();
                    if (phoneNum.charAt(0) === "0") {
                        phoneNum = phoneNum.substr(1);
                    }
                    //  this.armoronLogin();
                    const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web + "/login/checkcompany/" + this.login.value.compName;
                    //const url = this._global.getUrlValue() + '/api/company/checkCompany/' + phoneNum;
                    this.ajaxService.ajaxGetWithBody(url).subscribe((res) => {
                        if (res == "Unchanged") {
                            this.armoronLogin(res);
                            // this.commonService.presentToast('contact support team');
                        }
                        else {
                            //  this.generateOTP('cnrl');
                            this.newCompName = this.login.value.compName;
                            this.login.patchValue({
                                compName: res,
                            });
                            this.armoronLogin(res);
                        }
                        console.log(res);
                        // this.identifyCompany(res);
                    }, (err) => {
                        console.log(err);
                        this.commonService.dismissLoader();
                    });
                }
                else {
                    this.commonService.presentAlert("OTP", "Invalid OTP");
                }
            }
        };
        this.identifyCompany = (data) => {
            if (data.indexOf("Error") !== -1 || data !== null || data !== "null") {
                const dataConverted = Number(data);
                if (isNaN(dataConverted) === false) {
                    // localStorage.setItem('changedNumber', this.login.compName.toString());
                    // localStorage.setItem('PhoneNumber', data);
                    this.login.compName = data;
                }
                const credentials = {
                    companyName: this.login.compName.toString(),
                    password: this.login.password.toString(),
                    entryPoint: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["app"].entryPoint,
                };
                const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web + "/login/checkcompany/" + this.login.value.compName;
                // const url = this._global.getUrlValue() + '/api/company/user';
                this.ajaxService.ajaxGetWithString(url).subscribe((res) => {
                    if (res == "Unchanged") {
                        this.commonService.presentToast("contact support team");
                    }
                    else {
                        this.generateOTP("cnrl");
                    }
                    console.log(res);
                    this.generateOTP("cnrl");
                }, (err) => {
                    console.log(err);
                    this.commonService.dismissLoader();
                });
            }
            else {
                this.commonService.presentAlert("Error", "Try again after sometime.");
                this.commonService.dismissLoader();
            }
        };
        this.armoronLogin = (data) => {
            let body = {
                username: this.login.value.compName,
                password: this.login.value.compName,
                corpid: this.login.value.compName,
                loginMode: "mobile",
                entryPoint: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["app"].entryPoint,
                appsetting: "vts_mobile",
            };
            let url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web + "/login/company/login";
            this.ajaxService.ajaxPostMethod(url, body).subscribe((res) => {
                if (res.length > 1) {
                    localStorage.setItem("inItPage", res[1]["initialPage"]);
                    sessionStorage.setItem("login", "true");
                    localStorage.setItem("login", "true");
                    this.authService.login();
                    let dashboardInput = {
                        companyID: this.login.value.compName,
                        branchID: this.login.value.compName,
                        emailId: this.login.value.compName,
                        Check: false,
                        entryPoint: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["app"].entryPoint,
                        pollingDuration: JSON.parse(res[1]["applicationSettings"])
                            .pollingDuration,
                        mode: "dashboardData",
                        dashboardVin: "",
                        defaultInterval: res[1]["applicationSettings"].liveTrackingDelay,
                        make: "",
                        model: "",
                        delay: res[1]["applicationSettings"].liveTrackingDelay,
                        ImeiNo: "",
                    };
                    const messagingServiceData = {
                        companyId: this.login.value.compName,
                        logo: res[1]["logo"],
                        entryPoint: res[1].entryPoint,
                    };
                    if (data != "Unchanged") {
                        messagingServiceData["companyId"] = this.newCompName;
                    }
                    this.commonService.updateLogo(messagingServiceData);
                    this.websocketService.connectSocket(dashboardInput, "livetrack");
                    // || "https://track.remon.in"
                    if (window.location.origin == "https://track.remon.in") {
                        localStorage.setItem("companyLogo", "http://kingstrackimages.s3.amazonaws.com/Company/Elint.png");
                    }
                    else if (window.location.origin == "http://ilocate.in") {
                        localStorage.setItem("companyLogo", "https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/Company/ilocate.jpg");
                    }
                    else {
                        localStorage.setItem("companyLogo", res[1]["logo"]);
                    }
                    localStorage.setItem("mapAllowed", res[1]["mapAllowed"]);
                    localStorage.setItem("mainMenu", res[1]["mainmenu"]);
                    localStorage.setItem("dashboardWebSocketData", JSON.stringify(dashboardInput));
                    localStorage.setItem("loginData", JSON.stringify(res));
                    localStorage.setItem("staticIOData", JSON.stringify(res[0]["staticIODatas"]));
                    localStorage.setItem("appSettings", res[1]["applicationSettings"]);
                    //     localStorage.setItem('map', JSON.parse(res[1]["applicationSettings"]).mapview);
                    localStorage.setItem("map", res[1]["mapview"]);
                    localStorage.setItem("corpId", this.login.value.compName);
                    localStorage.setItem("userName", this.login.value.compName);
                    localStorage.setItem("password", this.login.value.compName);
                    localStorage.setItem("commandsData", res[1]["CommandsData"]);
                }
                else {
                    localStorage.setItem("PhoneNumber", this.login.value.compName);
                    this.router.navigateByUrl("/tabs-login/dashboard/add-company");
                }
                this.commonService.dismissLoader();
            });
        };
        this.verifyLogin = (data) => {
            if (data === null) {
                this.commonService.presentAlert("Error", "Try again after sometime.");
                this.commonService.dismissLoader();
            }
            else {
                // $ionicHistory.nextViewOptions({
                //    disableAnimate: true,
                //    disableBack: true
                // });
                // localStorage.setItem('PhoneNumber', this.user.phoneNumber);
                // this.getAlertConfigurationData();
                // this.getCommandsData();
            }
        };
        this.getAlertConfigurationData = () => {
            // this.commonService.getAlertsConfig()
            //   .subscribe(res => {
            //     localStorage.setItem('alertsData', JSON.stringify(res));
            //   }, err => {
            //     console.log(err);
            //     this.commonService.dismiss();
            //   });
        };
        this.getCommandsData = () => {
            // this.commonService.getCommonApplicationSettingsData('CommandsData', 'obj')
            //   .subscribe(res => {
            //     localStorage.setItem('commandsData', JSON.stringify(res));
            //     this.getPersonalTrackerCommandsData();
            //   }, err => {
            //     console.log(err);
            //     this.commonService.dismiss();
            //   });
        };
    }
    changeModule(data) {
        if (data == "user") {
            this.router.navigateByUrl("tabs-login/members/login");
            document.location.href = "index.html";
        }
        else {
            this.router.navigateByUrl("tabs-login/dealarlogin/login");
        }
    }
    change_demo() {
        if (this.serverName.includes("Live")) {
            this.serverName = "Click here for Demo!";
            this.logo = "../assets/loginLogo/moveandtrack.png";
            window.location.reload();
        }
        else {
            localStorage.clear();
            this.serverName = "Go Back to Live!";
            this.logo = "../assets/loginLogo/demo-logo.png";
            let urlValue = "http://" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["host"].demo + ":8081/fleettracking";
            //urlValue = "http://"+host.localIp;
            let cacheURL = "http://" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["host"].demo + ":8091/Admin";
            let webSocketUrl = "ws://" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["host"].demo + ":8091";
            //webSocketUrl = host.localIp;
            let adminSocketUrl = "ws://" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["host"].demo + ":8091";
            _environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].Admin,
                _environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web,
                _environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].adminSocket,
                (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].Admin = undefined);
            _environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web = urlValue;
            _environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].websocket = webSocketUrl;
            _environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].adminSocket = adminSocketUrl;
            _environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].Admin = cacheURL;
        }
    }
    openFpassModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _login_forgotpass_modal_forgotpass_modal_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpassModalPage"],
                cssClass: "custome_fleet",
            });
            return yield modal.present();
        });
    }
    ionViewWillEnter() {
        this.menuController.enable(false);
        if (this.commonService.isLoading)
            this.commonService.dismissLoader();
        this.backButtonExit();
        if (this.websocketService.isAlive("livetrack")) {
            this.websocketService.disConnectSocket("livetrack");
        }
    }
    backButtonExit() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        // this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {
        let thisKey = this;
        let alertController = this.alertController;
        let websocketService = this.websocketService;
        document.addEventListener("backbutton", function (event) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (window.location.hash == "#/tabs-login" ||
                    window.location.hash == "#/tabs-login/members/login") {
                    event.preventDefault();
                    // event.stopImmediatePropagation()
                    // event.stopPropagation();
                    console.log("hello");
                    if (thisKey.exitPopup === false) {
                        thisKey.exitPopup = true;
                        localStorage.setItem("exitPopup", "true");
                        const alert = yield thisKey.alertController.create({
                            header: "Exit",
                            backdropDismiss: false,
                            message: "Are you sure? You want to exit!",
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                    handler: (data) => {
                                        thisKey.exitPopup = false;
                                        localStorage.setItem("exitPopup", "false");
                                    },
                                },
                                {
                                    text: "Ok",
                                    handler: (data) => {
                                        navigator["app"].exitApp();
                                        // thisKey.websocketService.disConnectSocket("livetrack");
                                    },
                                },
                            ],
                        });
                        yield alert.present();
                    }
                }
                else {
                    if (this.subscription)
                        this.subscription.unsubscribe();
                }
            });
        }, false);
    }
    backButton() {
        this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {
            document.addEventListener("backbutton", function (event) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    event.preventDefault();
                    if (localStorage.getItem("exitPopup") == "false" ||
                        localStorage.getItem("exitPopup") == null) {
                        localStorage.setItem("exitPopup", "true");
                        const alert = yield this.alertController.create({
                            header: "Are you sure?",
                            backdropDismiss: false,
                            message: "You want to exit!",
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                    handler: (data) => {
                                        localStorage.setItem("exitPopup", "false");
                                    },
                                },
                                {
                                    text: "Ok",
                                    handler: (data) => {
                                        navigator["app"].exitApp();
                                    },
                                },
                            ],
                        });
                        yield alert.present();
                    }
                });
            });
        });
    }
    demo() {
        // this.appName = 'demo'
        _environments_environment__WEBPACK_IMPORTED_MODULE_3__["app"].entryPoint = "unknown";
        // this.title.setTitle("MVT Tracking");
        // this.document.getElementById('appFavicon').setAttribute('href', 'assets/icon/mvt.png');
        _environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].Admin = "http://192.168.1.13:8082/Admin";
        _environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web = "http://192.168.1.13:8082/fleettracking";
        _environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].adminSocket = "ws://192.168.1.13";
        _environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].websocket = "ws://192.168.1.13";
        this.logo = "../assets/Armoron/apmlogo.png";
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { });
    }
    ionViewWillLeave() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
    ngOnInit() {
        if (window.location.origin == "https://neo.fleetpolice.com" ||
            _environments_environment__WEBPACK_IMPORTED_MODULE_3__["app"].appName == "fleetPolice") {
            this.showDemoUrl = false;
        }
        else {
            this.showDemoUrl = true;
        }
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["app"].appName == "Armoron") {
            const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web +
                '/login/getPreferences?key=CountrySettings&companyId=""';
            this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
                this.countryList = Object.keys(res);
                this.countryList = Object.keys(res);
                const smsAPI = res[this.armoronApp.country]["smsAPI"];
                this.OTPmessage = res[this.armoronApp.country]["OTPmessage"];
                this.armoronApp.countryCode =
                    res[this.armoronApp.country]["countryCode"];
                this.entryPoint = res[this.armoronApp.country]["entryPoint"];
                localStorage.setItem("entryPoint", this.entryPoint);
                for (const x in res[this.armoronApp.country]["languages"]) {
                    this.languageOptions.push(decodeURI(res[this.armoronApp.country]["languages"][x]));
                    this.armoronApp.selectedlanguage = decodeURI(res[this.armoronApp.country]["defaultLanguage"]);
                    // this.translateLangService.setLanguage(this.app.selectedlanguage);
                }
                localStorage.setItem("SMSAPI", smsAPI);
                console.log(res);
            });
        }
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        if (this.myPlatform != "desktop") {
            localStorage.clear();
        }
        else {
            const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web +
                '/login/getPreferences?key=TrackVersion_mvt&companyId=""';
            this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
                console.log(res);
                if (res) {
                    if (localStorage.TrackVersionMvt < res[0] ||
                        localStorage.TrackVersionMvt == null ||
                        localStorage.TrackVersionMvt == undefined) {
                        localStorage.setItem("TrackVersionMvt", res[0]);
                        window.location.reload();
                    }
                    else {
                        localStorage.clear();
                        localStorage.setItem("TrackVersionMvt", res[0]);
                    }
                }
            });
        }
        this.bgImage = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["app"].bgImage;
        this.menuController.enable(false);
        this.appName = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["app"].appName.replace(/ /g, "");
        this.logo = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["app"].loginImgUrl;
        this.login = this.formBuilder.group({
            compName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            compId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        if (sessionStorage.rememberMe) {
            let details = JSON.parse(sessionStorage.rememberMe);
            this.login.patchValue({
                compName: details["compName"],
                password: details["password"],
                compId: details["corpid"],
                isChecked: details["checked"],
            });
            this.isChecked = details["checked"];
            // this.submitLogin();
        }
        this.router.events.subscribe(() => {
            // if (window.location.hash == "#/tabs-login/members/login")
            // if (this.subscription)
            // this.subscription.unsubscribe();
        });
        this.entryPoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["app"].entryPoint;
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_8__["WebsocketService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _services_websocket_service__WEBPACK_IMPORTED_MODULE_8__["WebsocketService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"]])
], LoginPage);



/***/ }),

/***/ "./src/app/parent-app/student-login/student-login.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/parent-app/student-login/student-login.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#partitioned {\n  padding-left: 15px;\n  letter-spacing: 42px;\n  border: 0;\n  background-image: -webkit-gradient(linear, right top, left top, color-stop(70%, #e90000), color-stop(0%, rgba(255, 255, 255, 0)));\n  background-image: linear-gradient(to left, #e90000 70%, rgba(255, 255, 255, 0) 0%);\n  background-position: bottom;\n  background-size: 50px 1px;\n  background-repeat: repeat-x;\n  background-position-x: 35px;\n  width: 220px;\n  min-width: 220px;\n}\n\n.background-gradient {\n  background-image: -webkit-gradient(linear, left bottom, right top, from(#f51e2e), to(#fd6035));\n  background-image: linear-gradient(to top right, #f51e2e, #fd6035);\n  width: 100%;\n  height: 100%;\n  position: fixed;\n}\n\n#divInner {\n  left: 0;\n  position: -webkit-sticky;\n  position: sticky;\n}\n\n#divOuter {\n  width: 190px;\n  overflow: hidden;\n}\n\n.item-interactive.ion-valid {\n  --highlight-background: none;\n}\n\n.placeholder-label {\n  font-size: 25px;\n  align-self: center;\n}\n\n.resend-otp {\n  font-size: 14px;\n  font-weight: bold;\n  padding: 0px 11px 7px 3px;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.parentAppLogo {\n  margin-top: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFyZW50LWFwcC9zdHVkZW50LWxvZ2luL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxccGFyZW50LWFwcFxcc3R1ZGVudC1sb2dpblxcc3R1ZGVudC1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFyZW50LWFwcC9zdHVkZW50LWxvZ2luL3N0dWRlbnQtbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGlJQUFBO0VBQUEsa0ZBQUE7RUFLQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0hGOztBRE1BO0VBQ0UsOEZBQUE7RUFBQSxpRUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0hGOztBRE1BO0VBQ0UsT0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNIRjs7QURNQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0hGOztBRE1BO0VBQ0UsNEJBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDSEY7O0FES0E7RUFFRSxlQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYXJlbnQtYXBwL3N0dWRlbnQtbG9naW4vc3R1ZGVudC1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYXJ0aXRpb25lZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiA0MnB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBsZWZ0LFxyXG4gICAgcmdiKDIzMywgMCwgMCkgNzAlLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJVxyXG4gICk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNTBweCAxcHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMzVweDtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgbWluLXdpZHRoOiAyMjBweDtcclxufVxyXG5cclxuLmJhY2tncm91bmQtZ3JhZGllbnQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICNmNTFlMmUsICNmZDYwMzUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbiNkaXZJbm5lciB7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG59XHJcblxyXG4jZGl2T3V0ZXIge1xyXG4gIHdpZHRoOiAxOTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaXRlbS1pbnRlcmFjdGl2ZS5pb24tdmFsaWQge1xyXG4gIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5wbGFjZWhvbGRlci1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLnJlc2VuZC1vdHAge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAwcHggMTFweCA3cHggM3B4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuLnBhcmVudEFwcExvZ28ge1xyXG4gIC8vIHdpZHRoOjcwJTtcclxuICBtYXJnaW4tdG9wOiAyNSU7XHJcbn1cclxuIiwiI3BhcnRpdGlvbmVkIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogNDJweDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2U5MDAwMCA3MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gIGJhY2tncm91bmQtc2l6ZTogNTBweCAxcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAzNXB4O1xuICB3aWR0aDogMjIwcHg7XG4gIG1pbi13aWR0aDogMjIwcHg7XG59XG5cbi5iYWNrZ3JvdW5kLWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgI2Y1MWUyZSwgI2ZkNjAzNSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuI2RpdklubmVyIHtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IHN0aWNreTtcbn1cblxuI2Rpdk91dGVyIHtcbiAgd2lkdGg6IDE5MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaXRlbS1pbnRlcmFjdGl2ZS5pb24tdmFsaWQge1xuICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG4ucGxhY2Vob2xkZXItbGFiZWwge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnJlc2VuZC1vdHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwcHggMTFweCA3cHggM3B4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4ucGFyZW50QXBwTG9nbyB7XG4gIG1hcmdpbi10b3A6IDI1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/parent-app/student-login/student-login.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/parent-app/student-login/student-login.component.ts ***!
  \*********************************************************************/
/*! exports provided: StudentLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentLoginComponent", function() { return StudentLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "./node_modules/@ionic-native/firebase-x/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ "./node_modules/@ionic-native/unique-device-id/ngx/index.js");













let StudentLoginComponent = class StudentLoginComponent {
    constructor(formBuilder, ajaxService, platform, router, device, udid, modalController, commonService, menuController, alertController, authService, firebaseX, network) {
        this.formBuilder = formBuilder;
        this.ajaxService = ajaxService;
        this.platform = platform;
        this.router = router;
        this.device = device;
        this.udid = udid;
        this.modalController = modalController;
        this.commonService = commonService;
        this.menuController = menuController;
        this.alertController = alertController;
        this.authService = authService;
        this.firebaseX = firebaseX;
        this.network = network;
        this.button = "Send OTP";
        this.loginOtp = "";
        this.appName = "";
        this.generateOTP = (cntrl) => {
            this.generatedOTP = Math.floor(Math.random() * 9000) + 1000;
            if (/(android|iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
                if (this.login.value.mobileNo === "9600696008" ||
                    this.login.value.mobileNo === "9962139968") {
                    this.button = "Verify";
                }
                else {
                    this.sendOtp();
                    //this.verifyOTPMethod(this.generatedOTP, this.login.value.compName);
                }
            }
            else {
                this.commonService.presentToast("Contact support team");
            }
        };
    }
    generateOtp() {
        if (this.login.value.mobileNo == 9002080435) {
            this.loginOtp = 12345;
        }
        else {
            this.loginOtp = Math.floor(Math.random() * 9000) + 1000;
        }
    }
    getLoginData() {
        this.router.navigateByUrl("student-dashboard");
    }
    verifyPhoneNo() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/parentapp/checkUser?parentId=" +
            this.login.value.mobileNo;
        this.ajaxService.ajaxGetWithString(url).subscribe((res) => {
            console.log(res);
            if (res == "Not Available") {
                this.commonService.presentToast("Enter a Valid PhoneNumber");
            }
            else {
                this.button = "Verify";
                this.sendOtp();
            }
        });
    }
    sendOtp() {
        this.generateOtp();
        localStorage.setItem("userName", JSON.stringify(this.login.value.mobileNo));
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
            "/parentapp/otp?message=your otp is " +
            this.loginOtp +
            "&contact=" +
            this.login.value.mobileNo;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            if (res.message == "sent") {
                this.commonService.presentToast("Your OTP is " + this.loginOtp);
                this.button = "Verify";
            }
            else {
                this.commonService.presentToast("Enter a valid phonenumber to login");
            }
        });
    }
    checkUser() {
        if (this.login.value.mobileNo != null &&
            this.login.value.mobileNo.toString().length == 10) {
            const url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web +
                "/parentapp/checkUser?parentId=" +
                this.login.value.mobileNo;
            this.ajaxService.ajaxGetWithString(url).subscribe((res) => {
                console.log(res);
                if (JSON.parse(res).message == "Available") {
                    this.sendOtp();
                }
                else {
                    this.commonService.presentToast("Enter a Valid PhoneNumber");
                }
            });
        }
        else {
            this.commonService.presentToast("Enter 10 digits PhoneNumber");
        }
    }
    sideMenus() {
        // this.authService.login();
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/parentapp/login?parentId=" + this.login.value.mobileNo;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            console.log(res);
            this.commonService.updateLogo(res);
            localStorage.setItem("mainMenu", res[0].mainmenu);
            localStorage.setItem("companyLogo", res[0].logo);
            localStorage.setItem("corpId", res[0].companyId);
            localStorage.setItem("AppName", "Parent App");
            this.pushNotificationConfig();
            // localStorage.setItem('dashboardWebSocketData', JSON.stringify(dashboardInput));
            const messagingServiceData = {
                companyId: res[0].companyId,
                logo: res[0].logo,
                entryPoint: res[0].entryPoint,
            };
            this.commonService.updateLogo(messagingServiceData);
        });
    }
    // localStorage.setItem('companyLogo', res[1]["logo"])
    // localStorage.setItem("mapAllowed", res[1]["mapAllowed"])
    // localStorage.setItem('mainMenu', res[1]["mainmenu"]);
    loginSubmit() {
        // this.generateOtp();
        if (this.button == "Send OTP") {
            // this.verifyPhoneNo();
            // this.button = "Verify"
            // this.sendOtp()
            this.checkUser();
        }
        else if (this.button == "Verify") {
            // this.loginOtp =  this.login.value.otp
            if (this.loginOtp == this.login.value.otp) {
                // localStorage.setItem('corpId', this.login.value.mobileNo)
                this.sideMenus();
                this.login.reset();
                localStorage.setItem("login", "true");
                this.loginOtp = "";
                this.button = "Send OTP";
                this.router.navigateByUrl("student-dashboard");
            }
            else {
                this.commonService.presentToast("Otp is wrong, try again");
            }
        }
    }
    pushNotificationConfig() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let pushDetails;
            this.platform.ready().then((res) => {
                if (this.platform.is("ios")) {
                    this.firebaseX.grantPermission().then((success) => {
                        if (success) {
                        }
                    });
                }
                if (this.network.type !== "none") {
                    if (/(android)/i.test(navigator.userAgent)) {
                        this.firebaseX
                            .getToken()
                            .then((token) => {
                            //alert("token is "+ token);
                            //   alert("uuid is "+ this.device.uuid);
                            localStorage.setItem("imeiNo", this.device.uuid);
                            localStorage.setItem("deviceToken", token);
                            localStorage.setItem("notificationStatus", "true");
                            pushDetails = {
                                imeiNo: this.device.uuid,
                                appName: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["app"].appName,
                                deviceToken: token,
                                companyID: localStorage.getItem("corpId"),
                                userId: localStorage.getItem("userName"),
                                os: "ionic4",
                                pushStatus: "true",
                            };
                            const url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/alert/pushnotification";
                            this.ajaxService
                                .ajaxPostWithBody(url, pushDetails)
                                .subscribe((res) => {
                                localStorage.setItem("pushStatus", "persisted");
                                //console.log('push presisted');
                                // this.restartApp();
                            });
                        })
                            .catch((error) => {
                            //  alert("Token uuid as "+error);
                            this.commonService.presentToast("Something went wrong!!Push notification won't recieve");
                        });
                    }
                    else if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
                        this.firebaseX
                            .getToken()
                            .then((token) => {
                            //alert("token is "+ token);
                            this.udid
                                .get()
                                .then((uuid) => {
                                // alert("uuid is "+ uuid);
                                localStorage.setItem("imeiNo", this.device.uuid);
                                localStorage.setItem("deviceToken", token);
                                localStorage.setItem("notificationStatus", "true");
                                pushDetails = {
                                    imeiNo: this.device.uuid,
                                    appName: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["app"].appName,
                                    deviceToken: token,
                                    companyID: localStorage.getItem("corpId"),
                                    userId: localStorage.getItem("userName"),
                                    os: "ionic4ios",
                                    pushStatus: "true",
                                };
                                localStorage.setItem("device", "ionic4ios");
                                //console.log(uuid);
                                //console.log(token);
                                const url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["serverUrl"].web + "/alert/pushnotification";
                                this.ajaxService
                                    .ajaxPostWithBody(url, pushDetails)
                                    .subscribe((res) => {
                                    localStorage.setItem("pushStatus", "persisted");
                                    //console.log('push presisted');
                                    // this.restartApp();
                                });
                            })
                                .catch((error) => {
                                //alert("Error uuid as "+error);
                                this.commonService.presentToast("Something went wrong!!Push notification won't recieve");
                            });
                        })
                            .catch((error) => {
                            //  alert("Token uuid as "+error);
                            this.commonService.presentToast("Something went wrong!!Push notification won't recieve");
                        });
                    }
                    this.network.onDisconnect().subscribe(() => {
                        //console.log('network was disconnected :-(');
                        this.commonService.presentToast("Poor Network Connection");
                    });
                }
            });
        });
    }
    ngOnInit() {
        localStorage.clear();
        this.appName = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["app"].appName;
        this.logo = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["app"].loginImgUrl;
        this.loginOtp = "";
        this.login = this.formBuilder.group({
            mobileNo: [""],
            otp: [""],
        });
        this.login.reset();
    }
};
StudentLoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__["Device"] },
    { type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_12__["UniqueDeviceID"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_9__["FirebaseX"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StudentLoginComponent.prototype, "data", void 0);
StudentLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-student-login",
        template: __webpack_require__(/*! raw-loader!./student-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/parent-app/student-login/student-login.component.html"),
        styles: [__webpack_require__(/*! ./student-login.component.scss */ "./src/app/parent-app/student-login/student-login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__["Device"],
        _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_12__["UniqueDeviceID"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
        _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_9__["FirebaseX"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"]])
], StudentLoginComponent);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map