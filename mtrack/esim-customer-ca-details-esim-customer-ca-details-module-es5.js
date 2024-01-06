(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esim-customer-ca-details-esim-customer-ca-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/assign-dealer/assign-dealer.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-customer-ca-details/assign-dealer/assign-dealer.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>IMEI No Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row style=\"padding: 10px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        [theme]=\"'material'\"\n        [width]=\"'99.5%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [enablebrowserselection]=\"true\"\n        [columns]=\"columns\"\n        [filterable]=\"true\"\n        [sortable]=\"true\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"center\">\n    <ion-fab-button\n      style=\"\n        --background: #0000000;\n        --box-shadow: #0000000;\n        width: 100px;\n        height: 100px;\n      \"\n    >\n      <ion-icon\n        (click)=\"openModel()\"\n        style=\"font-size: 100px; color: #7c68f8\"\n        [name]=\"icon\"\n      ></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/certificate-creation/certificate-creation.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-customer-ca-details/certificate-creation/certificate-creation.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Certificate Creation</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"wrapper-container\">\n      <ion-col>\n        <form [formGroup]=\"certificatedetails\">\n          <ion-row>\n            <ion-col>\n              <label>Plate No:</label>\n              <ion-input\n                class=\"input\"\n                type=\"text\"\n                formControlName=\"plateno\"\n                disabled\n              ></ion-input>\n            </ion-col>\n            <ion-col>\n              <label>Imei No:</label>\n              <ion-input\n                class=\"input\"\n                type=\"number\"\n                formControlName=\"imei\"\n                disabled\n              ></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <label>Engine No:</label>\n              <ion-input\n                type=\"text\"\n                class=\"input\"\n                placeholder=\"Enter The Engine No\"\n                formControlName=\"engineno\"\n                [disabled]=\"value.engineno == '' ? false : true\"\n              ></ion-input>\n            </ion-col>\n            <ion-col>\n              <label>Chassis No:</label>\n              <ion-input\n                type=\"text\"\n                class=\"input\"\n                placeholder=\"Enter The Chassis No\"\n                formControlName=\"chassisno\"\n                [disabled]=\"value.chassisno == '' ? false : true\"\n              ></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <label>Panic Button Count:</label>\n              <ion-input\n                type=\"text\"\n                class=\"input\"\n                placeholder=\"Enter Panic Button Count\"\n                formControlName=\"panicCount\"\n              ></ion-input>\n            </ion-col>\n            <ion-col size=\"6\">\n              <label>Service Engineer Name:</label>\n              <ion-input\n                type=\"text\"\n                class=\"input\"\n                placeholder=\"Enter Service Engineer Name\"\n                formControlName=\"service\"\n              ></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col style=\"text-align: center; padding: 15px\">\n              <ion-button\n                id=\"btn\"\n                [disabled]=\"!certificatedetails.valid\"\n                (click)=\"submit()\"\n                >Submit</ion-button\n              >\n              <ion-button id=\"btn\" (click)=\"cancelBtn()\">Cancel</ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n        <ion-row>\n          <ion-col size=\"12\">\n            <div id=\"pdf2\" hidden>\n              <!-- <td>{{pdfDate}}</td> -->\n              <table style=\"width: 100%; border: transparent\">\n                <tr>\n                  <td>\n                    <table style=\"width: 100%\">\n                      <tr>\n                        <th\n                          style=\"\n                            text-align: center;\n                            z-index: 1;\n                            position: relative;\n                            height: 70px;\n                          \"\n                          colspan=\"12\"\n                        >\n                          <img src=\"{{ Apmlogo }}\" style=\"height: 70px\" />\n                        </th>\n                      </tr>\n                      <tr>\n                        <td>\n                          <span style=\"font-size: 20px; font-weight: bold\"\n                            >APM KINGSTRACK TECHNOLOGIES</span\n                          ><br />No.813, 5th floor Nizara Bonanza,<br />\n                          Opp LIC Building, Anna Salai,<br />\n                          Chennai - 600002,Tamil Nadu.\n                        </td>\n                        <td>\n                          <qr-code\n                            [value]=\"values\"\n                            [size]=\"width\"\n                            [level]=\"level\"\n                          ></qr-code>\n                        </td>\n                      </tr>\n                    </table>\n                  </td>\n                </tr>\n              </table>\n              <table style=\"width: 100%; border: transparent\">\n                <tr>\n                  <td>\n                    <table style=\"width: 100%\">\n                      <tr>\n                        <td\n                          style=\"text-align: start; border-top: 2px solid\"\n                          colspan=\"12\"\n                        >\n                          <br />\n                        </td>\n                      </tr>\n                      <tr>\n                        <td\n                          style=\"text-align: start; text-align: justify\"\n                          colspan=\"12\"\n                        >\n                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This\n                          is to certify that the Electronic VTS device is fitted\n                          as per the details given below. it is checked, sealed\n                          and is functioning in all manners, Device will not\n                          function if tampered or not having proper GSM/GPS\n                          signals.<br />\n                        </td>\n                      </tr>\n                    </table>\n                  </td>\n                </tr>\n              </table>\n              <table style=\"width: 100%; border: transparent\">\n                <tr>\n                  <td>\n                    <table style=\"width: 100%\">\n                      <tr>\n                        <th\n                          style=\"text-align: start; border-bottom: 1px solid\"\n                          colspan=\"12\"\n                        >\n                          Vehicle Details:\n                        </th>\n                      </tr>\n                      <tr>\n                        <td\n                          style=\"font-size: 13px; width: 30%; padding-top: 2px\"\n                        >\n                          Registration No:<span\n                            style=\"\n                              font-weight: bold;\n                              font-size: 13px;\n                              text-transform: uppercase;\n                            \"\n                          >\n                            {{ TotalcertificateData.RegistraionNo }}</span\n                          >\n                        </td>\n                        <td\n                          style=\"font-size: 13px; width: 30%; padding-top: 2px\"\n                        >\n                          Chassis No:<span\n                            style=\"\n                              font-weight: bold;\n                              font-size: 13px;\n                              text-transform: uppercase;\n                            \"\n                          >\n                            {{ TotalcertificateData.ChassisNo }}</span\n                          >\n                        </td>\n                        <td\n                          style=\"font-size: 13px; width: 30%; padding-top: 2px\"\n                        >\n                          Engine No:<span\n                            style=\"\n                              font-weight: bold;\n                              font-size: 13px;\n                              text-transform: uppercase;\n                            \"\n                          >\n                            {{ TotalcertificateData.EngineNo }}</span\n                          >\n                        </td>\n                      </tr>\n                    </table>\n                  </td>\n                </tr>\n              </table>\n              <table style=\"width: 100%; border: transparent\">\n                <tr>\n                  <td>\n                    <table style=\"width: 100%\">\n                      <tr>\n                        <th\n                          style=\"text-align: start; border-bottom: 1px solid\"\n                          colspan=\"12\"\n                        >\n                          <b>Vehicle Owner Details:</b>\n                        </th>\n                      </tr>\n                      <tr>\n                        <td\n                          style=\"font-size: 13px; width: 30%; padding-top: 2px\"\n                        >\n                          Name:<span\n                            style=\"\n                              font-weight: bold;\n                              font-size: 13px;\n                              text-transform: uppercase;\n                            \"\n                          >\n                            {{ TotalcertificateData.OwnerName }}</span\n                          >\n                        </td>\n                        <td\n                          style=\"font-size: 13px; width: 30%; padding-top: 2px\"\n                        >\n                          Address:<span\n                            style=\"\n                              font-weight: bold;\n                              font-size: 13px;\n                              text-transform: uppercase;\n                            \"\n                          >\n                            {{ TotalcertificateData.OwnerAddress }}</span\n                          >\n                        </td>\n                        <td\n                          style=\"font-size: 13px; width: 30%; padding-top: 2px\"\n                        >\n                          Phone Number:<span\n                            style=\"\n                              font-weight: bold;\n                              font-size: 13px;\n                              text-transform: uppercase;\n                            \"\n                          >\n                            {{ TotalcertificateData.PhoneNo }}</span\n                          >\n                        </td>\n                      </tr>\n                    </table>\n                  </td>\n                </tr>\n              </table>\n              <table style=\"width: 100%; border: transparent\">\n                <tr>\n                  <td>\n                    <table style=\"width: 100%\">\n                      <tr>\n                        <th\n                          style=\"text-align: start; border-bottom: 1px solid\"\n                          colspan=\"12\"\n                        >\n                          Distributer Details:\n                        </th>\n                      </tr>\n                      <tr>\n                        <td\n                          style=\"font-size: 13px; width: 30%; padding-top: 2px\"\n                        >\n                          Distributer Name:<span\n                            style=\"\n                              font-weight: bold;\n                              font-size: 13px;\n                              text-transform: uppercase;\n                            \"\n                          >\n                            {{ TotalcertificateData.distributerName }}</span\n                          >\n                        </td>\n                        <td\n                          style=\"font-size: 13px; width: 30%; padding-top: 2px\"\n                        >\n                          Address:<span\n                            style=\"\n                              font-weight: bold;\n                              font-size: 13px;\n                              text-transform: uppercase;\n                            \"\n                          >\n                            {{ TotalcertificateData.distributerAddress }}</span\n                          >\n                        </td>\n                        <td\n                          style=\"font-size: 13px; width: 30%; padding-top: 2px\"\n                        >\n                          Phone Number:<span\n                            style=\"\n                              font-weight: bold;\n                              font-size: 13px;\n                              text-transform: uppercase;\n                            \"\n                          >\n                            {{ TotalcertificateData.distributerNo }}</span\n                          >\n                        </td>\n                      </tr>\n                    </table>\n                  </td>\n                </tr>\n              </table>\n              <table style=\"width: 100%; border: transparent\">\n                <tr>\n                  <td>\n                    <table style=\"width: 100%; justify-content: space-between\">\n                      <tr>\n                        <th\n                          style=\"text-align: start; border-bottom: 1px solid\"\n                          colspan=\"12\"\n                        >\n                          VLTD Details:\n                        </th>\n                      </tr>\n                      <tr>\n                        <td\n                          style=\"font-size: 13px; width: 30%; padding-top: 2px\"\n                        >\n                          Unique Identification No:<span\n                            style=\"\n                              font-weight: bold;\n                              font-size: 13px;\n                              text-transform: uppercase;\n                            \"\n                          >\n                            {{ TotalcertificateData.uniqueno }}</span\n                          >\n                        </td>\n                        <td\n                          style=\"font-size: 13px; width: 30%; padding-top: 2px\"\n                        >\n                          IMEI Number:<span\n                            style=\"\n                              font-weight: bold;\n                              font-size: 13px;\n                              text-transform: uppercase;\n                            \"\n                          >\n                            {{ TotalcertificateData.imeiNumber }}</span\n                          >\n                        </td>\n                        <td\n                          style=\"font-size: 13px; width: 30%; padding-top: 2px\"\n                        >\n                          ICCID:<span\n                            style=\"\n                              font-weight: bold;\n                              font-size: 13px;\n                              text-transform: uppercase;\n                            \"\n                          >\n                            {{ TotalcertificateData.ccid }}</span\n                          >\n                        </td>\n                      </tr>\n                      <tr>\n                        <td\n                          style=\"font-size: 13px; width: 30%; padding-top: 4px\"\n                        >\n                          Certificate No:<span\n                            style=\"\n                              font-weight: bold;\n                              font-size: 13px;\n                              text-transform: uppercase;\n                            \"\n                          >\n                            {{ TotalcertificateData.CertificateNo }}</span\n                          >\n                        </td>\n                        <td\n                          style=\"font-size: 13px; width: 30%; padding-top: 4px\"\n                        >\n                          VLTD Model:<span\n                            style=\"\n                              font-weight: bold;\n                              font-size: 13px;\n                              text-transform: uppercase;\n                            \"\n                          >\n                            {{ TotalcertificateData.VltdModelNo }}</span\n                          >\n                        </td>\n                        <td\n                          style=\"font-size: 13px; width: 30%; padding-top: 4px\"\n                        >\n                          TAC NO:<span\n                            style=\"\n                              font-weight: bold;\n                              font-size: 13px;\n                              text-transform: uppercase;\n                            \"\n                          >\n                            {{ TotalcertificateData.tagno }}</span\n                          >\n                        </td>\n                      </tr>\n                      <tr>\n                        <td\n                          style=\"font-size: 13px; width: 30%; padding-top: 4px\"\n                        >\n                          * Valid Upto:<span\n                            style=\"\n                              font-weight: bold;\n                              font-size: 13px;\n                              text-transform: uppercase;\n                            \"\n                          >\n                            {{ TotalcertificateData.validupto }}</span\n                          >\n                        </td>\n                        <td\n                          style=\"font-size: 13px; width: 30%; padding-top: 4px\"\n                        >\n                          Warranty Upto:<span\n                            style=\"\n                              font-weight: bold;\n                              font-size: 13px;\n                              text-transform: uppercase;\n                            \"\n                          >\n                            {{ TotalcertificateData.warrantyupto }}</span\n                          >\n                        </td>\n                        <td\n                          *ngIf=\"panic != 0\"\n                          style=\"font-size: 13px; width: 30%; padding-top: 4px\"\n                        >\n                          Panic Button Count:<span\n                            style=\"\n                              font-weight: bold;\n                              font-size: 13px;\n                              text-transform: uppercase;\n                            \"\n                          >\n                            {{ TotalcertificateData.paniccount }}</span\n                          >\n                        </td>\n                      </tr>\n                    </table>\n                  </td>\n                </tr>\n              </table>\n              <table style=\"width: 100%; border: transparent\">\n                <tr>\n                  <td>\n                    <table style=\"width: 100%\">\n                      <tr>\n                        <th\n                          style=\"text-align: start; border-bottom: 1px solid\"\n                          colspan=\"12\"\n                        >\n                          Service Engineer:\n                        </th>\n                      </tr>\n                      <tr>\n                        <td\n                          style=\"font-size: 13px; width: 30%; padding-top: 2px\"\n                        >\n                          Service Engineer Name :<span\n                            style=\"\n                              font-weight: bold;\n                              font-size: 13px;\n                              text-transform: uppercase;\n                            \"\n                          >\n                            {{ TotalcertificateData.InstallationName }}</span\n                          ><br />\n                        </td>\n                      </tr>\n                    </table>\n                  </td>\n                </tr>\n              </table>\n              <table style=\"width: 100%; border: transparent\">\n                <tr>\n                  <td>\n                    <table style=\"width: 100%\">\n                      <tr>\n                        <th style=\"text-align: center\" colspan=\"12\">\n                          PRODUCT SATISFACTION REPORT\n                        </th>\n                      </tr>\n                      <tr>\n                        <td style=\"font-size: 16px; text-align: justify\">\n                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This\n                          is to certify that following vehicle has been\n                          installed and activated with ICAT approved IRNSS\n                          Vehicle Location Tracking Device as per AIS-140\n                          Standard, The device warranty is void if device is\n                          tampered or the seal is Broken by unauthorized\n                          technicians or individual\n                        </td>\n                      </tr>\n                    </table>\n                  </td>\n                </tr>\n              </table>\n              <table style=\"width: 100%; border: transparent\">\n                <table style=\"width: 100%\">\n                  <tr>\n                    <th style=\"text-align: center\" colspan=\"12\">\n                      ACKNOWLEDGEMENT\n                    </th>\n                  </tr>\n                  <tr>\n                    <td style=\"font-size: 16px; text-align: justify\">\n                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is to\n                      acknowledge and confirm that we have got our vehicle\n                      installed with above vehicle location tracking unit. We\n                      have checked the performance of the vehicle after\n                      installation and we confirm VLD is functioning as per\n                      AIS-140 norms. We are satisfied with the performance of\n                      the device in all respects, we undertake not to raise any\n                      dispute or any legal claims against M/S APM kingstrack\n                      Technologies,In the event that the above mentioned\n                      function is found broken/torn/tampered/after expiry &\n                      warranty date\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <table\n                        *ngIf=\"companyId != 'sabbtech-sa'\"\n                        style=\"width: 100%; height: 110px\"\n                      >\n                        <td style=\"font-size: 13px; padding-left: 100px\">\n                          Dealer Seal & Signature\n                        </td>\n                        <td style=\"text-align: center; font-size: 13px\">\n                          Customer Signature\n                        </td>\n                      </table>\n                      <table\n                        *ngIf=\"companyId == 'sabbtech-sa'\"\n                        style=\"width: 100%\"\n                      >\n                        <td\n                          style=\"\n                            font-size: 13px;\n                            text-align: left;\n                            width: 50%;\n                            padding-left: 55px;\n                          \"\n                        >\n                          <img\n                            src=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/Company/APMSeal.png\"\n                            width=\"135px\"\n                            height=\"125px\"\n                          />\n                          <br />\n                          <div style=\"width: 135px; text-align: center\">\n                            Signature\n                          </div>\n                        </td>\n                        <td\n                          *ngIf=\"companyId != 'sabbtech-sa'\"\n                          style=\"\n                            font-size: 13px;\n                            vertical-align: bottom;\n                            width: 50%;\n                            text-align: right;\n                            padding-right: 55px;\n                          \"\n                        >\n                          Customer Signature\n                        </td>\n                        <td\n                          *ngIf=\"companyId == 'sabbtech-sa'\"\n                          style=\"\n                            font-size: 13px;\n                            vertical-align: bottom;\n                            width: 50%;\n                            text-align: right;\n                            padding-right: 55px;\n                          \"\n                        ></td>\n                      </table>\n                    </td>\n                  </tr>\n                </table>\n              </table>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/comment/comment.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-customer-ca-details/comment/comment.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row style=\"padding: 10px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        [enablebrowserselection]=\"true\"\n        [theme]=\"'material'\"\n        [width]=\"'99.5%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [pagesizeoptions]=\"page\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: left;\n          margin: auto;\n          cursor: pointer;\n          padding-left: 5px;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/company-creation/company-creation.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-customer-ca-details/company-creation/company-creation.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Company Vehicle Creation</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" class=\"wrapper-container\">\n        <form [formGroup]=\"addCompany\">\n          <ion-row class=\"content-style\">\n            <ion-col size=\"9\" class=\"col-content\">IMEI No :</ion-col>\n            <ion-col size=\"3\">\n              <ion-input\n                type=\"text\"\n                formControlName=\"imeiNo\"\n                disabled\n              ></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-row>\n                <ion-col size=\"12\" class=\"label-text\">Company info</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col>\n                  <ion-row\n                    class=\"form-field\"\n                    style=\"border: 2px solid #e5e5e5; border-radius: 10px\"\n                  >\n                    <ion-col size=\"7\" size-lg=\"5\" size-md=\"5\">\n                      <input\n                        class=\"input col\"\n                        type=\"search\"\n                        list=\"cars\"\n                        formControlName=\"companyId\"\n                        (keypress)=\"omit_special_char($event)\"\n                        (focusout)=\"checkCompany(event)\"\n                        placeholder=\"Select the Company Name\"\n                      />\n\n                      <datalist id=\"cars\">\n                        <option *ngFor=\"let names of companyId\">\n                          {{ names }}\n                        </option>\n                      </datalist>\n                    </ion-col>\n\n                    <ion-col\n                      size=\"3\"\n                      size-lg=\"3\"\n                      size-md=\"3\"\n                      style=\"text-align: end; padding: 15px\"\n                    >\n                      <ion-button class=\"submitbtn\" (click)=\"viewcompany()\"\n                        >+ Add Company</ion-button\n                      >\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf=\"companydetails\">\n            <ion-col>\n              <ion-row>\n                <ion-col class=\"label-text\">Company Details</ion-col>\n                <ion-col style=\"text-align: end\"\n                  ><span\n                    ><ion-icon\n                      title=\"Close\"\n                      class=\"dismiss\"\n                      name=\"close-circle-outline\"\n                      (click)=\"dismisscompany()\"\n                    ></ion-icon></span\n                ></ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col>\n                  <ion-row\n                    class=\"form-field\"\n                    style=\"border: 2px solid #e5e5e5; border-radius: 10px\"\n                  >\n                    <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n                      <ion-label class=\"label\">Company Name :</ion-label>\n                      <ion-input\n                        type=\"text\"\n                        formControlName=\"companyName\"\n                        placeholder=\"Company name\"\n                        class=\"input\"\n                      ></ion-input>\n                    </ion-col>\n\n                    <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n                      <ion-label class=\"label\">Email :</ion-label>\n                      <ion-input\n                        type=\"text\"\n                        formControlName=\"email\"\n                        placeholder=\"Enter the Email address\"\n                        class=\"input\"\n                      ></ion-input>\n                    </ion-col>\n\n                    <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n                      <ion-label class=\"label\">Contact No :</ion-label>\n                      <ion-input\n                        type=\"text\"\n                        formControlName=\"contactNo\"\n                        placeholder=\"Enter the Contact Number\"\n                        class=\"input\"\n                      ></ion-input>\n                    </ion-col>\n\n                    <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n                      <ion-label class=\"label\">Address :</ion-label>\n                      <ion-input\n                        type=\"text\"\n                        formControlName=\"address\"\n                        placeholder=\"Enter the Address\"\n                        class=\"input\"\n                      ></ion-input>\n                    </ion-col>\n\n                    <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n                      <ion-label class=\"label\">City :</ion-label>\n                      <ion-input\n                        type=\"text\"\n                        formControlName=\"city\"\n                        placeholder=\"Enter the City\"\n                        class=\"input\"\n                      ></ion-input>\n                    </ion-col>\n\n                    <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n                      <ion-label class=\"label\">Country :</ion-label>\n                      <ion-select\n                        class=\"input\"\n                        formControlName=\"country\"\n                        placeHolder=\"Country\"\n                      >\n                        <ion-select-option\n                          *ngFor=\"let country of country\"\n                          [value]=\"country\"\n                        >\n                          {{ country }}\n                        </ion-select-option>\n                      </ion-select>\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col style=\"text-align: center; padding: 15px\"\n                  ><ion-button\n                    [disabled]=\"!addCompany.valid\"\n                    (click)=\"onadd()\"\n                    id=\"btn\"\n                    >Submit</ion-button\n                  >\n                  <ion-button (click)=\"cancelBtn()\" id=\"btn\">Cancel</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-col></ion-row\n          >\n        </form>\n\n        <ion-row *ngIf=\"assests\">\n          <ion-col>\n            <form [formGroup]=\"vehicle\">\n              <ion-row>\n                <ion-col size=\"12\" class=\"label-text\">Assets</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col>\n                  <ion-row\n                    class=\"form-field\"\n                    style=\"border: 2px solid #e5e5e5; border-radius: 10px\"\n                  >\n                    <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n                      <ion-label class=\"label\">Plate No :</ion-label>\n                      <ion-input\n                        type=\"text\"\n                        formControlName=\"plateNo\"\n                        placeholder=\"Enter the Plate No\"\n                        class=\"input\"\n                      ></ion-input>\n                    </ion-col>\n\n                    <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n                      <ion-label class=\"label\">Assests :</ion-label>\n                      <ion-select\n                        class=\"input\"\n                        formControlName=\"assetCategory\"\n                        placeholder=\"Select the Asset category\"\n                      >\n                        <ion-select-option\n                          *ngFor=\"let Category of assertCategories\"\n                          [value]=\"Category\"\n                          >{{ Category }}</ion-select-option\n                        >\n                      </ion-select>\n                    </ion-col>\n\n                    <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n                      <ion-label class=\"label\">Engine No :</ion-label>\n                      <ion-input\n                        type=\"text\"\n                        formControlName=\"engineno\"\n                        placeholder=\"Enter the Engine No\"\n                        class=\"input\"\n                      ></ion-input>\n                    </ion-col>\n\n                    <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n                      <ion-label class=\"label\">Chassis No :</ion-label>\n                      <ion-input\n                        type=\"text\"\n                        formControlName=\"chassisno\"\n                        placeholder=\"Enter the Chassis No\"\n                        class=\"input\"\n                      ></ion-input>\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col style=\"text-align: center; padding: 15px\"\n                  ><ion-button\n                    [disabled]=\"!vehicle.valid || button\"\n                    (click)=\"onSubmit()\"\n                    id=\"btn\"\n                    >Submit</ion-button\n                  >\n                  <ion-button (click)=\"cancelBtn()\" id=\"btn\">Cancel</ion-button>\n                </ion-col>\n              </ion-row>\n            </form>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row></ion-grid\n  >\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/confirm-popup/confirm-popup.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-customer-ca-details/confirm-popup/confirm-popup.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row>\n  <ion-col>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Select the Option</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list>\n          <ion-radio-group>\n            <ion-item>\n              <ion-label>Company Vehicle Creation</ion-label>\n              <ion-radio\n                (click)=\"selectedValue = 1\"\n                slot=\"start\"\n                checked\n              ></ion-radio>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>End User Vehicle Creation</ion-label>\n              <ion-radio (click)=\"selectedValue = 2\" slot=\"start\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-list>\n      </ion-card-content>\n\n      <ion-row>\n        <ion-col style=\"text-align: center; padding: 15px\"\n          ><ion-button (click)=\"get()\" id=\"btn\">Submit</ion-button>\n          <ion-button (click)=\"cancelBtn()\" id=\"btn\">Cancel</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-col>\n</ion-row>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/customer-renewal-request/customer-renewal-request.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-customer-ca-details/customer-renewal-request/customer-renewal-request.component.html ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Renewal Request</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-style label-style\">\n  <ion-row>\n    <ion-col>\n      <form [formGroup]=\"requestForm\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">File Upload : </ion-col>\n\n              <ion-col size=\"7\">\n                <input\n                  type=\"file\"\n                  (change)=\"onFileChange($event)\"\n                  formControlName=\"document\"\n                  class=\"documents\"\n                />\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Select the Plan : </ion-col>\n              <ion-col size=\"7\">\n                <ionic-selectable\n                  class=\"label-style selectable-input\"\n                  formControlName=\"validity\"\n                  placeholder=\"Select the Plan Validity\"\n                  [items]=\"valid\"\n                  [canSearch]=\"true\"\n                  [hasVirtualScroll]=\"true\"\n                  [disabledItems]=\"data\"\n                >\n                </ionic-selectable>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 20px\">\n          <ion-button\n            class=\"button\"\n            type=\"submit\"\n            [disabled]=\"!requestForm.valid || button\"\n            (click)=\"submitBtn()\"\n            >Submit\n          </ion-button>\n          <ion-button type=\"submit\" (click)=\"cancelBtn()\">Cancel</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/dealer-details/dealer-details.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-customer-ca-details/dealer-details/dealer-details.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Dealer Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"form-field\">\n    <ion-col>\n      <form [formGroup]=\"dealerForm\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"3\" class=\"col-content\">IMEI No :</ion-col>\n              <ion-col size=\"4\">\n                <ion-input\n                  class=\"label-style\"\n                  type=\"text\"\n                  formControlName=\"imeino\"\n                  disabled\n                  placeholder=\"Enter the Imei No\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"form-field\">\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n            <ion-label class=\"label-head\">Dealer Details:</ion-label>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"padding: 5px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        [theme]=\"'material'\"\n        [width]=\"'99.5%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [pagesizeoptions]=\"page\"\n        [enablebrowserselection]=\"true\"\n        [columns]=\"columns\"\n        [filterable]=\"true\"\n        [sortable]=\"true\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"form-field\">\n    <ion-col>\n      <ion-row class=\"form-field\">\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n          <ion-label class=\"label-head\">Company Details:</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"padding: 5px\">\n        <ion-col size=\"12\">\n          <jqxGrid\n            #myGrid\n            [theme]=\"'material'\"\n            [width]=\"'99.5%'\"\n            [autoheight]=\"true\"\n            [source]=\"dataAdapter1\"\n            [enablebrowserselection]=\"true\"\n            [pagesizeoptions]=\"page\"\n            [columns]=\"columns1\"\n            [filterable]=\"true\"\n            [sortable]=\"true\"\n            [columnsresize]=\"true\"\n            [enabletooltips]=\"true\"\n            [pageable]=\"true\"\n            [showfilterrow]=\"true\"\n            style=\"\n              font-size: 16px;\n              text-align: center !important;\n              margin: auto;\n              cursor: pointer;\n            \"\n          >\n          </jqxGrid>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/dealerlist/dealerlist.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-customer-ca-details/dealerlist/dealerlist.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title style=\"bottom: 16px; position: fixed\">Select company</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar [(ngModel)]=\"terms\" placeholder=\"Search\"> </ion-searchbar>\n\n  <ion-virtual-scroll\n    [items]=\"companyList | assigndealer : terms\"\n    approxItemHeight=\"320px\"\n  >\n    <ion-list\n      *virtualItem=\"let companyList; let i = index\"\n      [id]=\"companyList\"\n      style=\"padding: 0px\"\n    >\n      <ion-item (click)=\"updateAnswer($event, i, companyList.id, companyList)\">\n        <ion-grid style=\"padding: 0px; margin: 0px\">\n          <ion-row style=\"padding: 0px; margin: 0px\">\n            <ion-col size=\"8\">{{ companyList.name }}</ion-col>\n            <ion-col size=\"3\"></ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </ion-virtual-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/end-user-creation/end-user-creation.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-customer-ca-details/end-user-creation/end-user-creation.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>End User Vehicle Creation</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" class=\"wrapper-container\">\n        <form [formGroup]=\"addCompany\">\n          <ion-row class=\"content-style\">\n            <ion-col size=\"9\" class=\"col-content\">IMEI No :</ion-col>\n            <ion-col size=\"3\">\n              <ion-input\n                type=\"text\"\n                formControlName=\"imeiNo\"\n                disabled\n              ></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-row>\n                <ion-col size=\"12\" class=\"label-text\">End User Details</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col>\n                  <ion-row\n                    class=\"form-field\"\n                    style=\"border: 2px solid #e5e5e5; border-radius: 10px\"\n                  >\n                    <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n                      <ion-label class=\"label\">Contact No :</ion-label>\n                      <ion-input\n                        type=\"text\"\n                        formControlName=\"contactNo\"\n                        placeholder=\"Enter the Contact No\"\n                        class=\"input\"\n                      ></ion-input>\n                    </ion-col>\n\n                    <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n                      <ion-label class=\"label\">Address :</ion-label>\n                      <ion-input\n                        type=\"text\"\n                        formControlName=\"address\"\n                        placeholder=\"Enter the Address\"\n                        class=\"input\"\n                      ></ion-input>\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n              </ion-row> </ion-col\n          ></ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-row>\n                <ion-col size=\"12\" class=\"label-text\">Assests Details</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col>\n                  <ion-row\n                    class=\"form-field\"\n                    style=\"border: 2px solid #e5e5e5; border-radius: 10px\"\n                  >\n                    <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n                      <ion-label class=\"label\">Plate No :</ion-label>\n                      <ion-input\n                        type=\"text\"\n                        formControlName=\"plateNo\"\n                        placeholder=\"Enter the Plate No\"\n                        class=\"input\"\n                      ></ion-input>\n                    </ion-col>\n\n                    <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n                      <ion-label class=\"label\">Assests :</ion-label>\n                      <ion-select\n                        class=\"input\"\n                        formControlName=\"assetCategory\"\n                        placeholder=\"Select the Asset category\"\n                      >\n                        <ion-select-option\n                          *ngFor=\"let Category of assertCategories\"\n                          [value]=\"Category\"\n                          >{{ Category }}</ion-select-option\n                        >\n                      </ion-select>\n                    </ion-col>\n\n                    <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n                      <ion-label class=\"label\">Engine No :</ion-label>\n                      <ion-input\n                        type=\"text\"\n                        formControlName=\"engineno\"\n                        placeholder=\"Enter the Engine No\"\n                        class=\"input\"\n                      ></ion-input>\n                    </ion-col>\n\n                    <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\">\n                      <ion-label class=\"label\">Chassis No :</ion-label>\n                      <ion-input\n                        type=\"text\"\n                        formControlName=\"chassisno\"\n                        placeholder=\"Enter the Chassis No\"\n                        class=\"input\"\n                      ></ion-input>\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col style=\"text-align: center; padding: 15px\"\n              ><ion-button\n                [disabled]=\"!addCompany.valid || button\"\n                (click)=\"onadd()\"\n                id=\"btn\"\n                >Submit</ion-button\n              >\n              <ion-button (click)=\"cancelBtn()\" id=\"btn\">Cancel</ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row></ion-grid\n  ></ion-content\n>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/esim-customer-ca-details.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-customer-ca-details/esim-customer-ca-details.page.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons\n      *ngIf=\"myPlatform == 'desktop'&&companyId == 'apm-sa'\"\n      slot=\"start\"\n    >\n      <ion-icon\n        routerLink=\"/tabs-login/esim-dashboard\"\n        name=\"arrow-back\"\n        style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-grid>\n      <ion-row class=\"toolbar\">\n        <ion-title>Customer CA Status</ion-title>\n        <ion-col *ngIf=\"myPlatform == 'desktop'\">\n          <ion-row style=\"margin: 0px; padding: 0; float: right\">\n            <ion-col>\n              <ion-button class=\"submitBtn\" size=\"small\" (click)=\"newfunc()\"\n                >Export</ion-button\n              >\n            </ion-col>\n            <ion-col style=\"margin-top: 0; margin-right: 25px\" class=\"tooltip\">\n              <ion-fab-button\n                size=\"small\"\n                class=\"fab-btn\"\n                href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/IMEIRenewalRequest.xlsx\"\n                download=\"sample.xlsx\"\n              >\n                <div class=\"excel-wrapper\"></div>\n              </ion-fab-button>\n              <span class=\"tooltiptext\">Renewal Request</span>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngIf=\"myPlatform != 'desktop'\">\n        <ion-row style=\"margin: 0px; padding: 0; float: right\">\n          <ion-col style=\"margin-top: 0; margin-right: 25px\" class=\"tooltip\">\n            <ion-fab-button\n              size=\"small\"\n              class=\"fab-btn\"\n              href=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/EsimExcelDowmload/IMEIRenewalRequest.xlsx\"\n              download=\"sample.xlsx\"\n            >\n              <div class=\"excel-wrapper\"></div>\n            </ion-fab-button>\n            <span class=\"tooltiptext\">Renewal Request</span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-row *ngIf=\"myPlatform != 'desktop'\">\n          <ion-col class=\"form-field\">\n            <ion-row style=\"text-align: end\">\n              <ion-col class=\"form-field\">\n                <ion-chip class=\"owl\" (click)=\"customFilter('yellow')\"\n                  >1 Week Left</ion-chip\n                >\n                <ion-chip class=\"days\" (click)=\"customFilter('orange')\"\n                  >15 Days Left</ion-chip\n                >\n                <ion-chip class=\"oml\" (click)=\"customFilter('blue')\"\n                  >One Month Left\n                </ion-chip>\n                <ion-chip class=\"exp\" (click)=\"customFilter('red')\"\n                  >Expired</ion-chip\n                >\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-button\n                  size=\"small\"\n                  class=\"submitbtn\"\n                  (click)=\"customerrenewalrequest()\"\n                  >Bulk Renewal</ion-button\n                >\n                <ion-button\n                  size=\"small\"\n                  class=\"submitbtn\"\n                  [disabled]=\"renewalbutton\"\n                  (click)=\"assigndealer()\"\n                  >Stock Assign</ion-button\n                >\n\n                <ion-button\n                  size=\"small\"\n                  class=\"submitbtn\"\n                  (click)=\"requestoneyearModel()\"\n                  [disabled]=\"renewalbutton\"\n                  >Request 1 Yr</ion-button\n                >\n                <ion-button\n                  size=\"small\"\n                  class=\"submitbtn\"\n                  (click)=\"TopupCheck()\"\n                  [disabled]=\"renewalbutton\"\n                  >Request Topup</ion-button\n                >\n                <ion-button\n                  size=\"small\"\n                  class=\"submitbtn\"\n                  (click)=\"requestMethod()\"\n                  [disabled]=\"renewalbutton\"\n                  >Request Renewal</ion-button\n                >\n              </ion-col></ion-row\n            >\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"myPlatform == 'desktop'\">\n          <ion-col>\n            <ion-row>\n              <ion-col style=\"margin: 10px 0px 0px\">\n                <ion-label>\n                  <span class=\"dealer-label\">Total Selected Row :</span>\n                  <span class=\"dealer-data\">{{selectedRow?.length}}</span>\n                </ion-label>\n              </ion-col>\n              <ion-col style=\"margin: 10px 0px 0px; text-align: end\">\n                <ion-chip class=\"owl\" (click)=\"customFilter('yellow')\"\n                  >1 Week Left</ion-chip\n                >\n                <ion-chip class=\"days\" (click)=\"customFilter('orange')\"\n                  >15 Days Left</ion-chip\n                >\n                <ion-chip class=\"oml\" (click)=\"customFilter('blue')\"\n                  >One Month Left\n                </ion-chip>\n                <ion-chip class=\"exp\" (click)=\"customFilter('red')\"\n                  >Expired</ion-chip\n                >\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col style=\"text-align: end\">\n                <ion-button class=\"submitbtn\" (click)=\"customerrenewalrequest()\"\n                  >Bulk Renewal</ion-button\n                >\n                <ion-button\n                  class=\"submitbtn\"\n                  [disabled]=\"renewalbutton\"\n                  (click)=\"assigndealer()\"\n                  >Stock Assign</ion-button\n                >\n\n                <ion-button\n                  class=\"submitbtn\"\n                  (click)=\"requestoneyearModel()\"\n                  [disabled]=\"renewalbutton\"\n                  >Request For 1 Yr</ion-button\n                >\n                <ion-button\n                  class=\"submitbtn\"\n                  (click)=\"TopupCheck()\"\n                  [disabled]=\"renewalbutton\"\n                  >Request For Topup</ion-button\n                >\n                <ion-button\n                  class=\"submitbtn\"\n                  (click)=\"requestMethod()\"\n                  [disabled]=\"renewalbutton\"\n                  >Request for Renewal</ion-button\n                >\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <div id=\"pdf3\" hidden>\n          <!-- <td>{{pdfDate}}</td> -->\n          <table style=\"width: 100%; border: transparent\">\n            <tr>\n              <td>\n                <table style=\"width: 100%\">\n                  <tr>\n                    <th\n                      style=\"\n                        text-align: center;\n                        z-index: 1;\n                        position: relative;\n                        height: 70px;\n                      \"\n                      colspan=\"12\"\n                    >\n                      <img src=\"{{ Apmlogo }}\" style=\"height: 70px\" />\n                    </th>\n                  </tr>\n                  <tr>\n                    <td>\n                      <span style=\"font-size: 20px; font-weight: bold\"\n                        >APM KINGSTRACK TECHNOLOGIES</span\n                      ><br />No.813, 5th floor Nizara Bonanza,<br />\n                      Opp LIC Building, Anna Salai,<br />\n                      Chennai - 600002,Tamil Nadu.\n                    </td>\n                    <td>\n                      <qr-code\n                        [value]=\"values\"\n                        [size]=\"width\"\n                        [level]=\"level\"\n                      ></qr-code>\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n          <table style=\"width: 100%; border: transparent\">\n            <tr>\n              <td>\n                <table style=\"width: 100%\">\n                  <tr>\n                    <td\n                      style=\"\n                        text-align: start;\n                        border-top: 2px solid;\n                        padding-top: 2px;\n                      \"\n                      colspan=\"12\"\n                    ></td>\n                  </tr>\n                  <tr>\n                    <td\n                      style=\"text-align: start; text-align: justify\"\n                      colspan=\"12\"\n                    >\n                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This is\n                      to certify that the Electronic VTS device is fitted as per\n                      the details given below. it is checked, sealed and is\n                      functioning in all manners, Device will not function if\n                      tampered or not having proper GSM/GPS signals.<br />\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n          <table style=\"width: 100%; border: transparent\">\n            <tr>\n              <td>\n                <table style=\"width: 100%\">\n                  <tr>\n                    <th\n                      style=\"text-align: start; border-bottom: 1px solid\"\n                      colspan=\"12\"\n                    >\n                      Vehicle Details:\n                    </th>\n                  </tr>\n                  <tr>\n                    <td style=\"font-size: 13px; width: 30%; padding-top: 2px\">\n                      Registration No:<span\n                        style=\"\n                          font-weight: bold;\n                          font-size: 13px;\n                          text-transform: uppercase;\n                        \"\n                      >\n                        {{ TotalcertificateData.RegistraionNo }}</span\n                      >\n                    </td>\n                    <td style=\"font-size: 13px; width: 30%; padding-top: 2px\">\n                      Chassis No:<span\n                        style=\"\n                          font-weight: bold;\n                          font-size: 13px;\n                          text-transform: uppercase;\n                        \"\n                      >\n                        {{ TotalcertificateData.ChassisNo }}</span\n                      >\n                    </td>\n                    <td style=\"font-size: 13px; width: 30%; padding-top: 2px\">\n                      Engine No:<span\n                        style=\"\n                          font-weight: bold;\n                          font-size: 13px;\n                          text-transform: uppercase;\n                        \"\n                      >\n                        {{ TotalcertificateData.EngineNo }}</span\n                      >\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n          <table style=\"width: 100%; border: transparent\">\n            <tr>\n              <td>\n                <table style=\"width: 100%\">\n                  <tr>\n                    <th\n                      style=\"text-align: start; border-bottom: 1px solid\"\n                      colspan=\"12\"\n                    >\n                      <b>Vehicle Owner Details:</b>\n                    </th>\n                  </tr>\n                  <tr>\n                    <td style=\"font-size: 13px; width: 30%; padding-top: 2px\">\n                      Name:<span\n                        style=\"\n                          font-weight: bold;\n                          font-size: 13px;\n                          text-transform: uppercase;\n                        \"\n                      >\n                        {{ TotalcertificateData.OwnerName }}</span\n                      >\n                    </td>\n                    <td style=\"font-size: 13px; width: 30%; padding-top: 2px\">\n                      Address:<span\n                        style=\"\n                          font-weight: bold;\n                          font-size: 13px;\n                          text-transform: uppercase;\n                        \"\n                      >\n                        {{ TotalcertificateData.OwnerAddress }}</span\n                      >\n                    </td>\n                    <td style=\"font-size: 13px; width: 30%; padding-top: 2px\">\n                      Phone Number:<span\n                        style=\"\n                          font-weight: bold;\n                          font-size: 13px;\n                          text-transform: uppercase;\n                        \"\n                      >\n                        {{ TotalcertificateData.PhoneNo }}</span\n                      >\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n          <table style=\"width: 100%; border: transparent\">\n            <tr>\n              <td>\n                <table style=\"width: 100%\">\n                  <tr>\n                    <th\n                      style=\"text-align: start; border-bottom: 1px solid\"\n                      colspan=\"12\"\n                    >\n                      Distributer Details:\n                    </th>\n                  </tr>\n                  <tr>\n                    <td style=\"font-size: 13px; width: 30%; padding-top: 2px\">\n                      Distributer Name:<span\n                        style=\"\n                          font-weight: bold;\n                          font-size: 13px;\n                          text-transform: uppercase;\n                        \"\n                      >\n                        {{ TotalcertificateData.distributerName }}</span\n                      >\n                    </td>\n                    <td style=\"font-size: 13px; width: 30%; padding-top: 2px\">\n                      Address:<span\n                        style=\"\n                          font-weight: bold;\n                          font-size: 13px;\n                          text-transform: uppercase;\n                        \"\n                      >\n                        {{ TotalcertificateData.distributerAddress }}</span\n                      >\n                    </td>\n                    <td style=\"font-size: 13px; width: 30%; padding-top: 2px\">\n                      Phone Number:<span\n                        style=\"\n                          font-weight: bold;\n                          font-size: 13px;\n                          text-transform: uppercase;\n                        \"\n                      >\n                        {{ TotalcertificateData.distributerNo }}</span\n                      >\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n          <table style=\"width: 100%; border: transparent\">\n            <tr>\n              <td>\n                <table style=\"width: 100%; justify-content: space-between\">\n                  <tr>\n                    <th\n                      style=\"text-align: start; border-bottom: 1px solid\"\n                      colspan=\"12\"\n                    >\n                      VLTD Details:\n                    </th>\n                  </tr>\n                  <tr>\n                    <td style=\"font-size: 13px; width: 30%; padding-top: 2px\">\n                      Unique Identification No:<span\n                        style=\"\n                          font-weight: bold;\n                          font-size: 13px;\n                          text-transform: uppercase;\n                        \"\n                      >\n                        {{ TotalcertificateData.uniqueno }}</span\n                      >\n                    </td>\n                    <td style=\"font-size: 13px; width: 30%; padding-top: 2px\">\n                      IMEI Number:<span\n                        style=\"\n                          font-weight: bold;\n                          font-size: 13px;\n                          text-transform: uppercase;\n                        \"\n                      >\n                        {{ TotalcertificateData.imeiNumber }}</span\n                      >\n                    </td>\n                    <td style=\"font-size: 13px; width: 30%; padding-top: 2px\">\n                      ICCID:<span\n                        style=\"\n                          font-weight: bold;\n                          font-size: 13px;\n                          text-transform: uppercase;\n                        \"\n                      >\n                        {{ TotalcertificateData.ccid }}</span\n                      >\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"font-size: 13px; width: 30%; padding-top: 4px\">\n                      Certificate No:<span\n                        style=\"\n                          font-weight: bold;\n                          font-size: 13px;\n                          text-transform: uppercase;\n                        \"\n                      >\n                        {{ TotalcertificateData.CertificateNo }}</span\n                      >\n                    </td>\n                    <td style=\"font-size: 13px; width: 30%; padding-top: 4px\">\n                      VLTD Model:<span\n                        style=\"\n                          font-weight: bold;\n                          font-size: 13px;\n                          text-transform: uppercase;\n                        \"\n                      >\n                        {{ TotalcertificateData.VltdModelNo }}</span\n                      >\n                    </td>\n                    <td style=\"font-size: 13px; width: 30%; padding-top: 4px\">\n                      TAC NO:<span\n                        style=\"\n                          font-weight: bold;\n                          font-size: 13px;\n                          text-transform: uppercase;\n                        \"\n                      >\n                        {{ TotalcertificateData.tagno }}</span\n                      >\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"font-size: 13px; width: 30%; padding-top: 4px\">\n                      * Valid Upto:<span\n                        style=\"\n                          font-weight: bold;\n                          font-size: 13px;\n                          text-transform: uppercase;\n                        \"\n                      >\n                        {{ TotalcertificateData.validupto }}</span\n                      >\n                    </td>\n                    <td style=\"font-size: 13px; width: 30%; padding-top: 4px\">\n                      Warranty Upto:<span\n                        style=\"\n                          font-weight: bold;\n                          font-size: 13px;\n                          text-transform: uppercase;\n                        \"\n                      >\n                        {{ TotalcertificateData.warrantyupto }}</span\n                      >\n                    </td>\n                    <td\n                      *ngIf=\"panic != 0\"\n                      style=\"font-size: 13px; width: 30%; padding-top: 4px\"\n                    >\n                      Panic Button Count:<span\n                        style=\"\n                          font-weight: bold;\n                          font-size: 13px;\n                          text-transform: uppercase;\n                        \"\n                      >\n                        {{ TotalcertificateData.paniccount }}</span\n                      >\n                    </td>\n                  </tr>\n                  <tr>\n                    <td\n                      *ngIf=\"(TotalcertificateData?.distributerName?.toUpperCase() === 'HARYANATEST') || (TotalcertificateData?.distributerName?.toUpperCase() === 'ASHOKA')\"\n                      style=\"font-size: 13px; width: 30%; padding-top: 2px\"\n                      colspan=\"1\"\n                    >\n                      Sim Number 1:<span\n                        style=\"\n                          font-weight: bold;\n                          font-size: 13px;\n                          text-transform: uppercase;\n                        \"\n                      >\n                        {{ TotalcertificateData.simno }}</span\n                      >\n                    </td>\n\n                    <td\n                      *ngIf=\"(TotalcertificateData?.distributerName?.toUpperCase() === 'HARYANATEST') || (TotalcertificateData?.distributerName?.toUpperCase() === 'ASHOKA')\"\n                      style=\"font-size: 13px; width: 30%; padding-top: 2px\"\n                      colspan=\"1\"\n                    >\n                      Sim Number 2:<span\n                        style=\"\n                          font-weight: bold;\n                          font-size: 13px;\n                          text-transform: uppercase;\n                        \"\n                      >\n                        {{ TotalcertificateData.simno1 }}</span\n                      >\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n          <table style=\"width: 100%; border: transparent\">\n            <tr>\n              <td>\n                <table style=\"width: 100%\">\n                  <tr>\n                    <th\n                      style=\"text-align: start; border-bottom: 1px solid\"\n                      colspan=\"12\"\n                    >\n                      Service Engineer:\n                    </th>\n                  </tr>\n                  <tr>\n                    <td style=\"font-size: 13px; width: 30%; padding-top: 2px\">\n                      Service Engineer Name :<span\n                        style=\"\n                          font-weight: bold;\n                          font-size: 13px;\n                          text-transform: uppercase;\n                        \"\n                      >\n                        {{ TotalcertificateData.InstallationName }}</span\n                      ><br />\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n          <table style=\"width: 100%; border: transparent\">\n            <tr>\n              <td>\n                <table style=\"width: 100%\">\n                  <tr>\n                    <th style=\"text-align: center\" colspan=\"12\">\n                      PRODUCT SATISFACTION REPORT\n                    </th>\n                  </tr>\n                  <tr>\n                    <td style=\"font-size: 16px; text-align: justify\">\n                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is to\n                      certify that following vehicle has been installed and\n                      activated with ICAT approved IRNSS Vehicle Location\n                      Tracking Device as per AIS-140 Standard, The device\n                      warranty is void if device is tampered or the seal is\n                      Broken by unauthorized technicians or individual\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n          <table style=\"width: 100%; border: transparent\">\n            <table style=\"width: 100%\">\n              <tr>\n                <th style=\"text-align: center\" colspan=\"12\">ACKNOWLEDGEMENT</th>\n              </tr>\n              <tr>\n                <td style=\"font-size: 16px; text-align: justify\">\n                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is to\n                  acknowledge and confirm that we have got our vehicle installed\n                  with above vehicle location tracking unit. We have checked the\n                  performance of the vehicle after installation and we confirm\n                  VLD is functioning as per AIS-140 norms. We are satisfied with\n                  the performance of the device in all respects, we undertake\n                  not to raise any dispute or any legal claims against M/S APM\n                  kingstrack Technologies,In the event that the above mentioned\n                  function is found broken/torn/tampered/after expiry & warranty\n                  date\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <table\n                    *ngIf=\"companyId != 'sabbtech-sa'\"\n                    style=\"width: 100%; height: 110px\"\n                  >\n                    <td style=\"font-size: 13px; padding-left: 100px\">\n                      Dealer Seal & Signature\n                    </td>\n                    <td style=\"text-align: center; font-size: 13px\">\n                      Customer Signature\n                    </td>\n                  </table>\n                  <table *ngIf=\"companyId == 'sabbtech-sa'\" style=\"width: 100%\">\n                    <td\n                      style=\"\n                        font-size: 13px;\n                        text-align: left;\n                        width: 50%;\n                        padding-left: 55px;\n                      \"\n                    >\n                      <img\n                        src=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/Company/APMSeal.png\"\n                        width=\"135px\"\n                        height=\"125px\"\n                      />\n                      <br />\n                      <div style=\"width: 135px; text-align: center\">\n                        Signature\n                      </div>\n                    </td>\n                    <td\n                      *ngIf=\"companyId != 'sabbtech-sa'\"\n                      style=\"\n                        font-size: 13px;\n                        vertical-align: bottom;\n                        width: 50%;\n                        text-align: right;\n                        padding-right: 55px;\n                      \"\n                    >\n                      Customer Signature\n                    </td>\n                    <td\n                      *ngIf=\"companyId == 'sabbtech-sa'\"\n                      style=\"\n                        font-size: 13px;\n                        vertical-align: bottom;\n                        width: 50%;\n                        text-align: right;\n                        padding-right: 55px;\n                      \"\n                    ></td>\n                  </table>\n                </td>\n              </tr>\n            </table>\n          </table>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"padding: 5px\">\n      <ion-col size=\"12\">\n        <jqxGrid\n          #myGrid\n          [selectionmode]=\"'checkbox'\"\n          (onRowclick)=\"myGridOnRowclick($event)\"\n          (onRowselect)=\"myGridOnRowSelect($event)\"\n          (onRowunselect)=\"myGridOnRowSelect($event)\"\n          [enablebrowserselection]=\"true\"\n          [theme]=\"'material'\"\n          [width]=\"'99.5%'\"\n          [autoheight]=\"true\"\n          [source]=\"dataAdapter\"\n          [columns]=\"columns\"\n          [filterable]=\"true\"\n          [sortable]=\"true\"\n          [columnsresize]=\"true\"\n          [enabletooltips]=\"true\"\n          [pageable]=\"true\"\n          [showfilterrow]=\"true\"\n          style=\"\n            font-size: 16px;\n            text-align: center !important;\n            margin: auto;\n            cursor: pointer;\n          \"\n        >\n        </jqxGrid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab\n    *ngIf=\"arrow\"\n    style=\"margin-right: 1%; margin-bottom: 9%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToTop()\">\n      <ion-icon class=\"icon\" name=\"arrow-up\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab\n    *ngIf=\"arrow\"\n    style=\"margin-right: 1%; margin-bottom: 5%\"\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n  >\n    <ion-fab-button class=\"fabbutton\" size=\"small\" (click)=\"scrollToBottom()\">\n      <ion-icon class=\"icon\" name=\"arrow-down\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/esim-topup-popup/esim-topup-popup.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-customer-ca-details/esim-topup-popup/esim-topup-popup.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon (click)=\"cancelBtn()\" name=\"arrow-back\" style=\"padding: 10px\" slot=\"start\"></ion-icon>\n    </ion-buttons>\n    <ion-title>Topup Request Validity</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"myPlatform != 'desktop'\" class=\"content-style label-style\">\n  <ion-grid>\n    <ion-row class=\"form-field\">\n      <ion-col size=\"12\" size-sm=\"12\" size-md=\"10\" offset-md=\"1\" size-lg=\"12\" offset-lg=\"0\">\n        <form [formGroup]=\"requestForm\">\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">Select the Plan :</ion-label>\n              <ionic-selectable class=\"label-style selectable-input\" formControlName=\"validity\"\n                placeholder=\"Select the Plan Validity\" [items]=\"valid\" [canSearch]=\"true\" [hasVirtualScroll]=\"true\"\n                [disabledItems]=\"data\">\n              </ionic-selectable>\n            </ion-col>\n          </ion-row>\n        </form>\n\n        <ion-row class=\"content-style\">\n          <ion-col style=\"text-align: center !important; padding: 20px\">\n            <ion-button class=\"button\" type=\"submit\" [disabled]=\"!requestForm.valid\" (click)=\"submitBtn()\">Submit\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf=\"myPlatform == 'desktop'\" class=\"content-style label-style\">\n  <ion-row>\n    <ion-col>\n      <form [formGroup]=\"requestForm\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Select the Plan : </ion-col>\n              <ion-col size=\"7\">\n                <ionic-selectable class=\"label-style selectable-input\" formControlName=\"validity\"\n                  placeholder=\"Select the Plan Validity\" [items]=\"valid\" [canSearch]=\"true\" [hasVirtualScroll]=\"true\"\n                  [disabledItems]=\"data\">\n                </ionic-selectable>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 20px\">\n          <ion-button class=\"button\" type=\"submit\" [disabled]=\"!requestForm.valid || button\" (click)=\"submitBtn()\">\n            Submit\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/generate-invoice/generate-invoice.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-customer-ca-details/generate-invoice/generate-invoice.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Invoice Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"generateForm\">\n    <ion-row style=\"margin-top: 5px\">\n      <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n        <ion-label class=\"dealer-label\">User ID :</ion-label>\n        <ion-input\n          placeholder=\"Enter the User Id\"\n          formControlName=\"userid\"\n          class=\"input\"\n        ></ion-input>\n      </ion-col>\n\n      <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n        <ion-label class=\"dealer-label\">Password :</ion-label>\n        <ion-input\n          type=\"password\"\n          placeholder=\"Enter the Password\"\n          formControlName=\"password\"\n          class=\"input\"\n        ></ion-input>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"3.5\" size-md=\"3.5\" style=\"margin-left: 10px\">\n        <ion-label>\n          <span class=\"dealer-label\">Dealer :</span>\n          <span class=\"dealer-data\">{{ head.dealerid }}</span>\n        </ion-label>\n      </ion-col>\n\n      <ion-col>\n        <ion-label>\n          <span class=\"dealer-label\">Invoice Date :</span>\n          <span class=\"dealer-data\">{{ currentdate }}</span>\n        </ion-label>\n      </ion-col>\n      <ion-col style=\"text-align: end !important\">\n        <ion-button\n          class=\"button\"\n          size=\"small\"\n          type=\"submit\"\n          (click)=\"confirmModel()\"\n          [disabled]=\"!generateForm.valid\"\n          >Submit\n        </ion-button>\n        <ion-button\n          class=\"button\"\n          size=\"small\"\n          type=\"cancel\"\n          (click)=\"cancelBtn()\"\n          >Cancel</ion-button\n        >\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"visible\">\n      <ion-col size=\"12\" size-lg=\"2.2\" size-md=\"2.2\" style=\"margin-left: 10px\">\n        <ion-label>\n          <span class=\"dealer-label\">IMEI No :</span>\n        </ion-label>\n        <ion-input formControlName=\"imei\" class=\"input\" disabled></ion-input>\n      </ion-col>\n\n      <ion-col size=\"12\" size-lg=\"4.5\" size-md=\"4.5\">\n        <ion-label>\n          <span class=\"dealer-label\">Product Name :</span>\n        </ion-label>\n        <ionic-selectable\n          class=\"input selectable-input\"\n          formControlName=\"productnamelist\"\n          [(ngModel)]=\"product\"\n          [items]=\"productnamelist\"\n          [canSearch]=\"true\"\n          [hasVirtualScroll]=\"true\"\n          itemValueField=\"itemname\"\n          itemTextField=\"itemname\"\n        >\n        </ionic-selectable>\n      </ion-col>\n      <ion-col\n        size=\"12\"\n        size-lg=\"2\"\n        size-md=\"2\"\n        style=\"text-align: end; margin-top: 27px\"\n      >\n        <ion-button size=\"small\" (click)=\"save()\">Save</ion-button>\n        <ion-button size=\"small\" (click)=\"dismiss()\">Clear</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n  <ion-row style=\"margin-top: 10px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        (onRowclick)=\"myGridOnRowSelect($event)\"\n        [theme]=\"'material'\"\n        [width]=\"'99%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [columns]=\"columns\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [enablebrowserselection]=\"true\"\n        [pagesizeoptions]=\"page\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [showfilterrow]=\"true\"\n        [pageable]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/request-page/request-page.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-customer-ca-details/request-page/request-page.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Renewal Request Validity</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"myPlatform != 'desktop'\" class=\"content-style label-style\">\n  <ion-grid>\n    <ion-row class=\"form-field\">\n      <ion-col\n        size=\"12\"\n        size-sm=\"12\"\n        size-md=\"10\"\n        offset-md=\"1\"\n        size-lg=\"12\"\n        offset-lg=\"0\"\n      >\n        <form [formGroup]=\"requestForm\">\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"col-content\">Select the Plan :</ion-label>\n              <ionic-selectable\n                class=\"label-style selectable-input\"\n                formControlName=\"validity\"\n                placeholder=\"Select the Plan Validity\"\n                [items]=\"valid\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n                [disabledItems]=\"data\"\n              >\n              </ionic-selectable>\n            </ion-col>\n          </ion-row>\n        </form>\n\n        <ion-row class=\"content-style\">\n          <ion-col style=\"text-align: center !important; padding: 20px\">\n            <ion-button\n              class=\"button\"\n              type=\"submit\"\n              [disabled]=\"!requestForm.valid\"\n              (click)=\"submitBtn()\"\n              >Submit\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf=\"myPlatform == 'desktop'\" class=\"content-style label-style\">\n  <ion-row>\n    <ion-col>\n      <form [formGroup]=\"requestForm\">\n        <ion-row class=\"total-data\">\n          <ion-col>\n            <ion-row class=\"content-style\">\n              <ion-col size=\"4\" class=\"col-content\">Select the Plan : </ion-col>\n              <ion-col size=\"7\">\n                <ionic-selectable\n                  class=\"label-style selectable-input\"\n                  formControlName=\"validity\"\n                  placeholder=\"Select the Plan Validity\"\n                  [items]=\"valid\"\n                  [canSearch]=\"true\"\n                  [hasVirtualScroll]=\"true\"\n                  [disabledItems]=\"data\"\n                >\n                </ionic-selectable>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </form>\n\n      <ion-row class=\"content-style\">\n        <ion-col style=\"text-align: center !important; padding: 20px\">\n          <ion-button\n            class=\"button\"\n            type=\"submit\"\n            [disabled]=\"!requestForm.valid || button\"\n            (click)=\"submitBtn()\"\n            >Submit\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/status-details/status-details.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/esim-customer-ca-details/status-details/status-details.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>History Status</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row style=\"padding: 10px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        [theme]=\"'material'\"\n        [width]=\"'99.5%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [enablebrowserselection]=\"true\"\n        [pagesizeoptions]=\"page\"\n        [columns]=\"columns\"\n        [filterable]=\"true\"\n        [sortable]=\"true\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/assign-dealer/assign-dealer.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/assign-dealer/assign-dealer.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upperRow {\n  background: #eeeeee;\n  padding: 4px;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.upperCol {\n  text-align: center;\n  border-radius: 8px;\n  margin: 2px;\n  color: black;\n  font-family: sans-serif;\n  font-size: 13px;\n  text-transform: uppercase;\n}\n\n.selectedUpperCol {\n  background: #ffffff;\n  text-align: center;\n  border-radius: 8px;\n  margin: 2px;\n  color: black;\n  font-family: sans-serif;\n  font-size: 13px;\n  text-transform: uppercase;\n  box-shadow: 0.2px 0.2px #888888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jdXN0b21lci1jYS1kZXRhaWxzL2Fzc2lnbi1kZWFsZXIvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcZXNpbS1jdXN0b21lci1jYS1kZXRhaWxzXFxhc3NpZ24tZGVhbGVyXFxhc3NpZ24tZGVhbGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWN1c3RvbWVyLWNhLWRldGFpbHMvYXNzaWduLWRlYWxlci9hc3NpZ24tZGVhbGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNFRjs7QURBQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jdXN0b21lci1jYS1kZXRhaWxzL2Fzc2lnbi1kZWFsZXIvYXNzaWduLWRlYWxlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cHBlclJvdyB7XHJcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnVwcGVyQ29sIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uc2VsZWN0ZWRVcHBlckNvbCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3gtc2hhZG93OiAwLjJweCAwLjJweCM4ODg4ODg7XHJcbn1cclxuIiwiLnVwcGVyUm93IHtcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcbiAgcGFkZGluZzogNHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnVwcGVyQ29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zZWxlY3RlZFVwcGVyQ29sIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJveC1zaGFkb3c6IDAuMnB4IDAuMnB4ICM4ODg4ODg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/assign-dealer/assign-dealer.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/assign-dealer/assign-dealer.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AssignDealerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignDealerComponent", function() { return AssignDealerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _dealerlist_dealerlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dealerlist/dealerlist.component */ "./src/app/delar-application/esim-customer-ca-details/dealerlist/dealerlist.component.ts");









var AssignDealerComponent = /** @class */ (function () {
    function AssignDealerComponent(platform, formBuilder, modalController, ajaxService, commonService, alertController) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.alertController = alertController;
        this.tableData = [];
        this.selectedArray = [];
        this.type = "Assign";
        this.icon = "cloud-upload";
        this.show = false;
        this.data = "";
    }
    AssignDealerComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    AssignDealerComponent.prototype.getdata = function () {
        var _this = this;
        var arr = [];
        this.value.map(function (data) {
            arr.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data));
        });
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/getAssignimei";
        this.ajaxService.ajaxPostWithBody(url, arr).subscribe(function (res) {
            _this.tableData = res;
            _this.renderer = function (row, column, value) {
                if (value == "" || null || undefined) {
                    return "--";
                }
                else {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                        value +
                        "</span>");
                }
            };
            _this.source = { localdata: _this.tableData };
            _this.dataAdapter = new jqx.dataAdapter(_this.source);
            _this.columns = [
                {
                    text: "IMEI No",
                    datafield: "imei",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 200,
                },
                {
                    text: "Assign Dealer",
                    datafield: "assigndealer",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 200,
                },
                {
                    text: "",
                    datafield: "status",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 130,
                    cellsrenderer: function () {
                        return _this.myPlatform == "desktop"
                            ? "Remove"
                            : "<button>Remove</button>";
                    },
                    buttonclick: function (row) {
                        _this.delete(row);
                    },
                },
            ];
        });
    };
    AssignDealerComponent.prototype.delete = function (row) {
        this.tableData.splice(row, 1);
        this.source = { localdata: this.tableData };
        this.dataAdapter = new jqx.dataAdapter(this.source);
    };
    AssignDealerComponent.prototype.getdealer = function () {
        var _this = this;
        var suffix = localStorage.getItem("companySuffix");
        var companyUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/global/getdealerlist?suffix=" + suffix;
        this.ajaxService.ajaxGet(companyUrl).subscribe(function (res) {
            _this.companyList = res;
        });
    };
    AssignDealerComponent.prototype.openModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.type == "Assign")) return [3 /*break*/, 3];
                        this.modalController.dismiss();
                        return [4 /*yield*/, this.modalController.create({
                                component: _dealerlist_dealerlist_component__WEBPACK_IMPORTED_MODULE_8__["DealerlistComponent"],
                                componentProps: {
                                    value: this.companyList,
                                    value2: this.tableData,
                                },
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "Stock Assigned Successfully") {
                                _this.modalController.dismiss();
                                _this.commonService.data(data.data.data);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AssignDealerComponent.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.getdata();
        this.getdealer();
    };
    AssignDealerComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
    ], AssignDealerComponent.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AssignDealerComponent.prototype, "value", void 0);
    AssignDealerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-assign-dealer",
            template: __webpack_require__(/*! raw-loader!./assign-dealer.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/assign-dealer/assign-dealer.component.html"),
            styles: [__webpack_require__(/*! ./assign-dealer.component.scss */ "./src/app/delar-application/esim-customer-ca-details/assign-dealer/assign-dealer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], AssignDealerComponent);
    return AssignDealerComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/certificate-creation/certificate-creation.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/certificate-creation/certificate-creation.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  margin-top: 7px;\n  background: #e8e8e8;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n\n  .label-text {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n#btn {\n  --background: #6252ee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jdXN0b21lci1jYS1kZXRhaWxzL2NlcnRpZmljYXRlLWNyZWF0aW9uL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGVzaW0tY3VzdG9tZXItY2EtZGV0YWlsc1xcY2VydGlmaWNhdGUtY3JlYXRpb25cXGNlcnRpZmljYXRlLWNyZWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWN1c3RvbWVyLWNhLWRldGFpbHMvY2VydGlmaWNhdGUtY3JlYXRpb24vY2VydGlmaWNhdGUtY3JlYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQ0VGOztFREFBO0lBQ0UsZUFBQTtFQ0dGO0FBQ0Y7O0FEREE7RUFDRTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQ0dGO0FBQ0Y7O0FEREE7RUFDRTtJQUNFLFNBQUE7RUNHRjs7RURBQTtJQUNFLFVBQUE7RUNHRjtBQUNGOztBREFBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tY3VzdG9tZXItY2EtZGV0YWlscy9jZXJ0aWZpY2F0ZS1jcmVhdGlvbi9jZXJ0aWZpY2F0ZS1jcmVhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDdweDtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjMyMHB4KSBhbmQobWF4LXdpZHRoOjEwMjNweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDhweCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAubGFiZWwtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDhweCAxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgem9vbTogODAlO1xyXG4gIH1cclxuXHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG4jYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICM2MjUyZWU7XHJcbn1cclxuIiwiLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAubGFiZWwtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbiNidG4ge1xuICAtLWJhY2tncm91bmQ6ICM2MjUyZWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/certificate-creation/certificate-creation.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/certificate-creation/certificate-creation.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: CertificateCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateCreationComponent", function() { return CertificateCreationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var CertificateCreationComponent = /** @class */ (function () {
    function CertificateCreationComponent(formBuilder, platform, modalController, document, ajaxService, commonService) {
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.modalController = modalController;
        this.document = document;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.show = false;
        this.companyId = localStorage.getItem("userName");
        this.TotalcertificateData = {};
        this.Apmlogo = "data:image/png;base64,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";
    }
    CertificateCreationComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    CertificateCreationComponent.prototype.clear = function () {
        this.certificatedetails.patchValue({
            plateno: "",
            imei: "",
            engineno: "",
            chassisno: "",
            service: "",
            panicCount: "0",
        });
    };
    CertificateCreationComponent.prototype.creatFrom = function () {
        this.certificatedetails = this.formBuilder.group({
            plateno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            imei: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            engineno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            chassisno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            service: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            panicCount: ["0"],
        });
    };
    CertificateCreationComponent.prototype.getdetails = function () {
        this.certificatedetails.patchValue({
            plateno: this.value.plateno,
            imei: this.value.imei,
            engineno: this.value.engineno,
            chassisno: this.value.chassisno,
        });
    };
    CertificateCreationComponent.prototype.submit = function () {
        var _this = this;
        var data = {
            imei: this.certificatedetails.value.imei,
            engineno: this.certificatedetails.value.engineno,
            chassisno: this.certificatedetails.value.chassisno,
            createdby: localStorage.getItem("userName"),
            serviceengineer: this.certificatedetails.value.service,
            panicCount: this.certificatedetails.value.panicCount == ""
                ? "0"
                : this.certificatedetails.value.panicCount,
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/global/saveCertificateDetails";
        this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
            if (res.message == "Certificate Saved Successfully") {
                _this.commonService.showConfirmcer(res.message);
                _this.TotalcertificateData = JSON.parse(res.certificatedetails);
                _this.panic = JSON.parse(_this.TotalcertificateData.paniccount);
                var detailofqrcode = [];
                detailofqrcode.push(_this.TotalcertificateData.CenterName, "Chassis:" + _this.TotalcertificateData.ChassisNo, "EngineNo:" + _this.TotalcertificateData.EngineNo, "Reg.No:" + _this.TotalcertificateData.RegistraionNo);
                _this.data = detailofqrcode.toString();
                _this.values = _this.data;
                _this.show = true;
                setTimeout(function () {
                    _this.clickToDownload();
                }, 1000);
                // this.modalController.dismiss({
                //   data: "Certificate Saved Successfully",
                // });
                // this.clear();
                // this.cancelBtn();
            }
            else {
                _this.commonService.showConfirm(res.message);
            }
        });
    };
    CertificateCreationComponent.prototype.clickToDownload = function () {
        // this.generatedcertificate();
        var printWindow = window.open("height=1000,width=900");
        printWindow.document.write("<html>");
        // printWindow.document.write("<body>");
        printWindow.document.write('<body style="background-image: url(https://kingstrackimages.s3.amazonaws.com/Company/apmlogo_watermarker.svg);background-repeat: no-repeat;background-size: 100% 85%;">');
        var divContents = document.getElementById("pdf2").innerHTML;
        printWindow.document.write(divContents);
        printWindow.document.write("</body></html>");
        printWindow.print();
        printWindow.document.close();
    };
    CertificateCreationComponent.prototype.ionViewWillEnter = function () {
        var style = this.document.createElement("style");
        style.innerHTML = "\n      @page {\n        size: auto;\n        margin: 0;\n        /* Reset print settings */\n        marks: none;\n        widows: 0;\n        orphans: 0;\n      }\n    ";
        this.document.head.appendChild(style);
    };
    CertificateCreationComponent.prototype.ngOnInit = function () {
        this.creatFrom();
        if (Object.keys(this.value).length != 0) {
            console.log(this.value);
            this.getdetails();
        }
        else {
            // this.clear();
            this.value = {};
        }
    };
    CertificateCreationComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CertificateCreationComponent.prototype, "value", void 0);
    CertificateCreationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-certificate-creation",
            template: __webpack_require__(/*! raw-loader!./certificate-creation.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/certificate-creation/certificate-creation.component.html"),
            styles: [__webpack_require__(/*! ./certificate-creation.component.scss */ "./src/app/delar-application/esim-customer-ca-details/certificate-creation/certificate-creation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            Document,
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], CertificateCreationComponent);
    return CertificateCreationComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/comment/comment.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/comment/comment.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tY3VzdG9tZXItY2EtZGV0YWlscy9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/comment/comment.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/comment/comment.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");







var CommentComponent = /** @class */ (function () {
    function CommentComponent(platform, formBuilder, modalController, ajaxService, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.page = [];
    }
    CommentComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    CommentComponent.prototype.getDatas = function () {
        this.page = [];
        if (this.value.comment != "") {
            this.tableData = JSON.parse(this.value.comment);
        }
        this.page = ["100", "200", "500", "1000"];
        this.renderer = function (row, column, value) {
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
                width: 500,
            },
        ];
    };
    CommentComponent.prototype.ngOnInit = function () {
        this.getDatas();
    };
    CommentComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
    ], CommentComponent.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommentComponent.prototype, "value", void 0);
    CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-comment",
            template: __webpack_require__(/*! raw-loader!./comment.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.scss */ "./src/app/delar-application/esim-customer-ca-details/comment/comment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/company-creation/company-creation.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/company-creation/company-creation.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-style {\n  -webkit-box-pack: right;\n          justify-content: right;\n}\n\n.col-content {\n  text-align: right;\n  align-self: center;\n  font-size: 18px;\n}\n\n.dismiss {\n  font-size: 22px;\n  cursor: pointer;\n}\n\n.dismiss:hover {\n  color: red;\n}\n\n.label {\n  text-align: right;\n  align-self: center;\n  font-size: 14px;\n  margin-left: 3px;\n  font-weight: 500;\n}\n\n.label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 18px;\n}\n\n.heading {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n#submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 40%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.col {\n  padding-left: 15px;\n  width: 100%;\n}\n\nion-button:hover {\n  --background-color: #6c2a84;\n}\n\n.label-text {\n  color: #6252ee;\n  font-size: 17px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n\n  .label-text {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jdXN0b21lci1jYS1kZXRhaWxzL2NvbXBhbnktY3JlYXRpb24vRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcZXNpbS1jdXN0b21lci1jYS1kZXRhaWxzXFxjb21wYW55LWNyZWF0aW9uXFxjb21wYW55LWNyZWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWN1c3RvbWVyLWNhLWRldGFpbHMvY29tcGFueS1jcmVhdGlvbi9jb21wYW55LWNyZWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7VUFBQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0FDR0Y7O0FEREE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNJRjs7QUREQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0lGOztBREZBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDS0Y7O0FERkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNLRjs7QURIQTtFQUNFLHFCQUFBO0FDTUY7O0FESkE7RUFDRTtJQUNFLGdCQUFBO0VDT0Y7O0VETEE7SUFDRSxVQUFBO0VDUUY7QUFDRjs7QUROQTtFQUNFO0lBQ0UsU0FBQTtFQ1FGOztFRE5BO0lBQ0UsVUFBQTtFQ1NGO0FBQ0Y7O0FEUEE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDU0Y7O0FETEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNRRjs7QUROQTtFQUNFLDJCQUFBO0FDU0Y7O0FETkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNTRjs7QUROQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VDU0Y7O0VEUEE7SUFDRSxlQUFBO0VDVUY7QUFDRjs7QURSQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDVUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tY3VzdG9tZXItY2EtZGV0YWlscy9jb21wYW55LWNyZWF0aW9uL2NvbXBhbnktY3JlYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1zdHlsZSB7XHJcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxufVxyXG5cclxuLmNvbC1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5kaXNtaXNzIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kaXNtaXNzOmhvdmVyIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbi5sYWJlbCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5sYWJlbC1zdHlsZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcbi5oZWFkaW5nIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxufVxyXG4jc3VibWl0YnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICM2MjUyZWU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZm9ybS1maWVsZCB7XHJcbiAgICB6b29tOiA4MCU7XHJcbiAgfVxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbn1cclxuLmZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIHBsYWNlLWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG4uY29sIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaW9uLWJ1dHRvbjpob3ZlciB7XHJcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjNmMyYTg0O1xyXG59XHJcblxyXG4ubGFiZWwtdGV4dCB7XHJcbiAgY29sb3I6ICM2MjUyZWU7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjMyMHB4KSBhbmQobWF4LXdpZHRoOjEwMjNweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDhweCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAubGFiZWwtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEwMjRweCkge1xyXG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDhweCAxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG4iLCIuY29udGVudC1zdHlsZSB7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG59XG5cbi5jb2wtY29udGVudCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmRpc21pc3Mge1xuICBmb250LXNpemU6IDIycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRpc21pc3M6aG92ZXIge1xuICBjb2xvcjogcmVkO1xufVxuXG4ubGFiZWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5sYWJlbC1zdHlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uaGVhZGluZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xufVxuXG4jc3VibWl0YnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNjI1MmVlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmNvbCB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1idXR0b246aG92ZXIge1xuICAtLWJhY2tncm91bmQtY29sb3I6ICM2YzJhODQ7XG59XG5cbi5sYWJlbC10ZXh0IHtcbiAgY29sb3I6ICM2MjUyZWU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAubGFiZWwtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/company-creation/company-creation.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/company-creation/company-creation.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: CompanyCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyCreationComponent", function() { return CompanyCreationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var CompanyCreationComponent = /** @class */ (function () {
    function CompanyCreationComponent(ajaxService, router, commonService, formBuilder, modalController, alertController) {
        this.ajaxService = ajaxService;
        this.router = router;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.alertController = alertController;
        this.isData = false;
        this.CompanyInput = false;
        this.assests = true;
        this.region = { India: "Asia/Kolkata", "Saudi Arabia": "Asia/Riyadh" };
        this.button = false;
        this.assertCategories = [
            "Car",
            "Bike",
            "Bus",
            "Truck",
            "Auto",
            "Fork Lifts",
            "Light Towers",
            "Welding Machines",
            "Deepsea Generator",
            "Compressors",
            "32kw CEM7 Generators",
            "Battery",
            "Bobcat",
            "Tanker",
            "Loader",
            "Dabbab",
            "Dumper",
            "Street Sweeper",
            "Towed Street Sweeper",
            "Compactor",
            "Double Cabin",
            "Hook Lift",
            "Crane",
            "Small Truck",
        ];
    }
    CompanyCreationComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    CompanyCreationComponent.prototype.viewcompany = function () {
        this.companydetails = true;
        this.assests = false;
    };
    CompanyCreationComponent.prototype.dismisscompany = function () {
        this.companydetails = false;
        this.reset();
        this.assests = true;
    };
    CompanyCreationComponent.prototype.omit_special_char = function (event) {
        var k;
        k = event.charCode; //         k = event.keyCode;  (Both can be used)
        return ((k > 64 && k < 91) ||
            (k > 96 && k < 123) ||
            k == 8 ||
            k == 32 ||
            (k >= 48 && k <= 57));
    };
    // createForm() {
    //   this.addCompany = this.formBuilder.group({
    //     companyId: ["", Validators.required],
    //     imeiNo: [""],
    //     companyName: ["", Validators.required],
    //     email: ["", Validators.required],
    //     contactNo: [""],
    //     address: ["", Validators.required],
    //     city: ["", Validators.required],
    //     country: ["", Validators.required],
    //   });
    //   this.vehicle = this.formBuilder.group({
    //     // companyId: ["", Validators.required],
    //     plateNo: ["", Validators.required],
    //     assetCategory: ["", Validators.required],
    //     engineno: "",
    //     chassisno: "",
    //   });
    // }
    CompanyCreationComponent.prototype.createForm = function () {
        this.addCompany = this.formBuilder.group({
            companyId: [""],
            imeiNo: [""],
            companyName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            contactNo: [""],
            address: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.vehicle = this.formBuilder.group({
            plateNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            assetCategory: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            engineno: "",
            chassisno: "",
        });
    };
    CompanyCreationComponent.prototype.reset = function () {
        this.addCompany.patchValue({
            companyId: "",
            companyName: "",
            email: "",
            contactNo: "",
            address: "",
            city: "",
            country: "",
        });
    };
    CompanyCreationComponent.prototype.clear = function () {
        this.vehicle.patchValue({
            imeiNo: "",
            plateNo: "",
            assetCategory: "",
            engineno: "",
            chassisno: "",
        });
    };
    CompanyCreationComponent.prototype.checkCompany = function () {
        var _this = this;
        if (this.addCompany.value.companyId.length != 0) {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                "/global/getDealerAddressInfo?companyid=" +
                this.addCompany.value.companyId +
                "&suffix=" +
                this.suffix;
            this.ajaxService.ajaxGet(url).subscribe(function (res) {
                if (Object.keys(res).length == 0) {
                    // this.commonService.showConfirm("Company Does Not Exits");
                    _this.addModel();
                }
            });
        }
    };
    CompanyCreationComponent.prototype.addModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Message",
                            backdropDismiss: false,
                            message: "Company Does Not Exits",
                            buttons: [
                                {
                                    text: "Ok",
                                    handler: function (data) {
                                        _this.reset();
                                    },
                                },
                            ],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CompanyCreationComponent.prototype.onadd = function () {
        var _this = this;
        if (this.addCompany.value.contactNo.toString().length != 10) {
            this.commonService.presentToast("Enter the 10 Digit Contact Number");
        }
        else if (this.addCompany.valid) {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                "/global/validate/contact?contactNo=" +
                this.addCompany.value.contactNo;
            this.ajaxService.ajaxGet(url).subscribe(function (res) {
                if (res.message == "Not Available") {
                    _this.addTheCompany();
                }
                else {
                    _this.commonService.showConfirm(res.message);
                }
            });
        }
        else {
            this.commonService.presentToast("Fill required field..");
        }
    };
    CompanyCreationComponent.prototype.addTheCompany = function () {
        var _this = this;
        this.button = true;
        var adminData;
        var addCompany;
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["app"].appName != "Armoron") {
            adminData = {
                loginId: this.addCompany.value.companyName,
                loginCompany: localStorage.getItem("companyId"),
            };
            var countryCode = this.countryCode[this.addCompany.value.country];
            console.log(countryCode);
            var region = this.region[this.addCompany.value.country];
            addCompany = {
                password: "12345",
                companyName: this.addCompany.value.companyName,
                address: this.addCompany.value.address,
                city: this.addCompany.value.city,
                region: region,
                countryCode: countryCode,
                companyAdminID: "",
                firstName: this.addCompany.value.companyName,
                contactNo: this.addCompany.value.contactNo,
                branchID: this.addCompany.value.loginId,
                emailId: this.addCompany.value.email,
                emailID: this.addCompany.value.email,
                companyID: this.addCompany.value.loginId,
            };
        }
        else {
            adminData = {
                loginId: this.addCompany.value.companyName,
                loginCompany: "apm",
            };
            var countryCode = this.countryCode[this.addCompany.value.country];
            console.log(countryCode);
            var region = this.region[this.addCompany.value.country];
            addCompany = {
                password: this.addCompany.value.contactNo,
                companyName: this.addCompany.value.contactNo,
                address: this.addCompany.value.address,
                city: this.addCompany.value.city,
                region: region,
                countryCode: countryCode,
                companyAdminID: "",
                firstName: this.addCompany.value.firstName,
                contactNo: this.addCompany.value.contactNo,
                branchID: this.addCompany.value.contactNo,
                emailId: this.addCompany.value.email,
                emailID: this.addCompany.value.email,
                companyID: this.addCompany.value.contactNo,
            };
        }
        var dataJson = JSON.stringify(addCompany);
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/user/provider/company?providerName=" +
            adminData.loginCompany +
            "&companyid=" +
            adminData.loginId;
        this.ajaxService.ajaxPostWithBody(url, dataJson).subscribe(function (res) {
            _this.isData = true;
            _this.CompanyInput = true;
            _this.datas = res.CompanyID;
            _this.newFleetCreation(res);
            _this.addCompany.patchValue({
                companyId: res.CompanyID,
            });
            _this.addCompany.controls["companyId"].disable();
        });
    };
    CompanyCreationComponent.prototype.newFleetCreation = function (res) {
        var _this = this;
        if (res) {
            if (res.Message === "Company added successfully.") {
                var datetoday = new Date();
                var expDate = datetoday.getFullYear() +
                    1 +
                    "-" +
                    (datetoday.getMonth() + 1) +
                    "-" +
                    (datetoday.getDate() - 1);
                var countryCode = this.countryCode[this.addCompany.value.country];
                var fleetData = void 0;
                if (src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["app"].appName != "Armoron") {
                    fleetData = {
                        userName: this.addCompany.value.companyName,
                        password: this.addCompany.value.contactNo,
                        firstName: this.addCompany.value.companyName,
                        categoryrole: "FleetManager",
                        userCity: this.addCompany.value.city,
                        contactNo: this.addCompany.value.contactNo,
                        useraddress1: this.addCompany.value.address,
                        useraddress2: " ",
                        userCountry: countryCode,
                        emailId: this.addCompany.value.email,
                        emailID: this.addCompany.value.email,
                        userExpiryDate: expDate,
                        companyId: this.addCompany.value.companyName,
                        branchID: this.addCompany.value.companyName,
                        applicationType: "false",
                    };
                }
                else {
                    fleetData = {
                        userName: this.addCompany.value.contactNo,
                        password: this.addCompany.value.contactNo,
                        firstName: this.addCompany.value.firstName,
                        categoryrole: "FleetManager",
                        userCity: this.addCompany.value.city,
                        contactNo: this.addCompany.value.contactNo,
                        useraddress1: this.addCompany.value.address,
                        useraddress2: " ",
                        userCountry: countryCode,
                        emailId: this.addCompany.value.email,
                        emailID: this.addCompany.value.email,
                        userExpiryDate: expDate,
                        companyId: this.addCompany.value.contactNo,
                        branchID: this.addCompany.value.contactNo,
                        applicationType: "false",
                    };
                }
                localStorage.setItem("fleetData", JSON.stringify(fleetData));
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/global/newFleetCreation";
                this.ajaxService.ajaxPostMethod(url, fleetData).subscribe(function (res) {
                    _this.newCompanyCreation(res);
                });
                console.log("this is call back end");
            }
            else if (res["Error Message"] === "Company already exist.") {
                this.commonService.presentToast("Company already exist.");
                this.button = false;
            }
            else {
                this.commonService.presentToast("sorry, not able process your request.");
            }
        }
    };
    CompanyCreationComponent.prototype.newCompanyCreation = function (data) {
        var _this = this;
        var fleetData = JSON.parse(localStorage.getItem("fleetData"));
        var userDetail;
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["app"].appName != "Armoron") {
            userDetail = {
                companyname: fleetData["firstName"],
                companyId: fleetData["userName"],
                userId: fleetData["userName"] + "-ca",
                fmid: fleetData["userName"],
                email: fleetData["emailId"],
                contact: fleetData["contactNo"],
                password: fleetData["password"],
                suffix: localStorage.getItem("companySuffix"),
            };
        }
        else {
            userDetail = {
                companyname: fleetData["firstName"],
                companyId: fleetData["userName"],
                userId: fleetData["userName"],
                fmid: fleetData["userName"],
                email: fleetData["emailId"],
                contact: fleetData["contactNo"],
                password: fleetData["password"],
                suffix: "21",
            };
        }
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/global/companyCreation";
        this.ajaxService.ajaxPostMethod(url, userDetail).subscribe(function (res) {
            _this.alterNewCompanySuccess(res);
        });
    };
    CompanyCreationComponent.prototype.alterNewCompanySuccess = function (res) {
        if (res.result == "updated successfully") {
            // const loginData = {
            //   userId: localStorage.getItem('userId'),
            //   password: localStorage.getItem('password')
            // };
            // const url = serverUrl.web + '/api/vts/superadmin/auth/' + JSON.stringify(loginData);
            // this.ajaxService.ajaxGetWithString(url)
            // .subscribe(res => {
            // localStorage.removeItem("dashboardData");
            // localStorage.setItem('dashboardData', JSON.stringify(res.CompanyDetials));
            this.commonService.showConfirm("Successfully Presisted");
            this.button = false;
            this.companydetails = false;
            this.assests = true;
            //   });
            // }else {
            //   this.commonService.presentToast('Presisted Failed...!');
        }
    };
    CompanyCreationComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.addCompany.controls.companyId.value == "") {
            this.commonService.showConfirm("Please Select the Company");
        }
        else {
            this.button = true;
            var data;
            data = {
                companyId: this.addCompany.controls.companyId.value,
                imeiNo: this.value.imei,
                icon: this.vehicle.value.assetCategory,
                plateNo: this.vehicle.value.plateNo,
                engineno: this.vehicle.value.engineno,
                chassisno: this.vehicle.value.chassisno,
            };
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/site/NewVehicleCreation";
            this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
                if (res.message == "Added Successfully") {
                    _this.modalController.dismiss({
                        data: "Successfully Presisted",
                    });
                    _this.button = false;
                }
                else {
                    _this.commonService.showConfirm(res.message);
                    _this.button = false;
                }
                // if (res.message == "Added Successfully") {
                //   this.modalController.dismiss({
                //     data: "Added Successfully",
                //   });
                //   this.clear();
                // } else {
                //   this.commonService.showConfirm(res.message);
                //   this.clear();
                // }
            });
        }
    };
    CompanyCreationComponent.prototype.getCompanyID = function () {
        var _this = this;
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/global/getdealercompanylist?suffix=" + this.suffix;
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.commonService.dismissLoader();
            _this.companyId = res;
        });
    };
    CompanyCreationComponent.prototype.getdetails = function () {
        this.addCompany.patchValue({
            imeiNo: this.value.imei,
        });
    };
    CompanyCreationComponent.prototype.getCountries = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/login/getPreferences?key=countries&companyId=" +
            this.companyDetail.companyID;
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            _this.country = res;
        });
    };
    CompanyCreationComponent.prototype.getCountryCode = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/login/getPreferences?key=countrycode&companyId=" +
            this.companyDetail.companyID;
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            _this.countryCode = res;
        });
    };
    CompanyCreationComponent.prototype.ngOnInit = function () {
        this.selectedCompany = localStorage.getItem("companyId");
        this.companyDetail = {
            companyID: localStorage.getItem("companyId"),
            userId: localStorage.getItem("userId"),
        };
        this.suffix = localStorage.getItem("companySuffix");
        this.createForm();
        this.getCompanyID();
        this.getdetails();
        this.getCountries();
        this.getCountryCode();
    };
    CompanyCreationComponent.ctorParameters = function () { return [
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CompanyCreationComponent.prototype, "value", void 0);
    CompanyCreationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-company-creation",
            template: __webpack_require__(/*! raw-loader!./company-creation.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/company-creation/company-creation.component.html"),
            styles: [__webpack_require__(/*! ./company-creation.component.scss */ "./src/app/delar-application/esim-customer-ca-details/company-creation/company-creation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], CompanyCreationComponent);
    return CompanyCreationComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/confirm-popup/confirm-popup.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/confirm-popup/confirm-popup.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tY3VzdG9tZXItY2EtZGV0YWlscy9jb25maXJtLXBvcHVwL2NvbmZpcm0tcG9wdXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/confirm-popup/confirm-popup.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/confirm-popup/confirm-popup.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ConfirmPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPopupComponent", function() { return ConfirmPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");







var ConfirmPopupComponent = /** @class */ (function () {
    function ConfirmPopupComponent(ajaxService, router, commonService, formBuilder, modalController) {
        this.ajaxService = ajaxService;
        this.router = router;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.selectedValue = 1;
    }
    ConfirmPopupComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    ConfirmPopupComponent.prototype.get = function (d) {
        this.modalController.dismiss({ data: this.selectedValue });
    };
    ConfirmPopupComponent.prototype.ngOnInit = function () { };
    ConfirmPopupComponent.ctorParameters = function () { return [
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    ConfirmPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-confirm-popup",
            template: __webpack_require__(/*! raw-loader!./confirm-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/confirm-popup/confirm-popup.component.html"),
            styles: [__webpack_require__(/*! ./confirm-popup.component.scss */ "./src/app/delar-application/esim-customer-ca-details/confirm-popup/confirm-popup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], ConfirmPopupComponent);
    return ConfirmPopupComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/customer-renewal-request/customer-renewal-request.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/customer-renewal-request/customer-renewal-request.component.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 14px;\n  margin: 7px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #ffebcd;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 0px 6px;\n}\n\n.file-input-container input[type=file] {\n  display: none;\n}\n\n.file {\n  margin-left: 8%;\n  border: 1px solid #3d6cec;\n}\n\n.documents {\n  margin: 10px 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jdXN0b21lci1jYS1kZXRhaWxzL2N1c3RvbWVyLXJlbmV3YWwtcmVxdWVzdC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxlc2ltLWN1c3RvbWVyLWNhLWRldGFpbHNcXGN1c3RvbWVyLXJlbmV3YWwtcmVxdWVzdFxcY3VzdG9tZXItcmVuZXdhbC1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWN1c3RvbWVyLWNhLWRldGFpbHMvY3VzdG9tZXItcmVuZXdhbC1yZXF1ZXN0L2N1c3RvbWVyLXJlbmV3YWwtcmVxdWVzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxTQUFBO0VDQ0Y7O0VERUE7SUFDRSxVQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0U7RUFDRSxhQUFBO0FDQUo7O0FESUE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tY3VzdG9tZXItY2EtZGV0YWlscy9jdXN0b21lci1yZW5ld2FsLXJlcXVlc3QvY3VzdG9tZXItcmVuZXdhbC1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsLXN0eWxlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgbWFyZ2luOiA3cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXN0eWxlIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbC1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbiNhZGQtaWNvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZlYmNkO1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjN2M2OGY4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgem9vbTogODAlO1xyXG4gIH1cclxuXHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuLnNlbGVjdGFibGUtaW5wdXQge1xyXG4gIHBhZGRpbmc6IDhweCAxMXB4IDBweCA2cHg7XHJcbn1cclxuLmZpbGUtaW5wdXQtY29udGFpbmVyIHtcclxuICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmZpbGUge1xyXG4gIG1hcmdpbi1sZWZ0OiA4JTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjEsIDEwOCwgMjM2KTtcclxufVxyXG5cclxuLmRvY3VtZW50cyB7XHJcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIi5sYWJlbC1zdHlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXJnaW46IDdweDtcbn1cblxuLmNvbnRlbnQtc3R5bGUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbiNhZGQtaWNvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZWJjZDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgLS1iYWNrZ3JvdW5kOiAjN2M2OGY4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5zZWxlY3RhYmxlLWlucHV0IHtcbiAgcGFkZGluZzogOHB4IDExcHggMHB4IDZweDtcbn1cblxuLmZpbGUtaW5wdXQtY29udGFpbmVyIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZmlsZSB7XG4gIG1hcmdpbi1sZWZ0OiA4JTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNkNmNlYztcbn1cblxuLmRvY3VtZW50cyB7XG4gIG1hcmdpbjogMTBweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/customer-renewal-request/customer-renewal-request.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/customer-renewal-request/customer-renewal-request.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: CustomerRenewalRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRenewalRequestComponent", function() { return CustomerRenewalRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_8__);









var CustomerRenewalRequestComponent = /** @class */ (function () {
    function CustomerRenewalRequestComponent(platform, formBuilder, modalController, ajaxService, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({});
        this.valid = ["1 Year", "2 Year", "3 Year", "4 Year", "5 Year"];
        this.button = false;
        this.name = false;
        this.willDownload = false;
        this.output = "";
        this.excellKeyValid = false;
        this.imeiIssues = [];
    }
    CustomerRenewalRequestComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    CustomerRenewalRequestComponent.prototype.createForm = function () {
        this.requestForm = this.formBuilder.group({
            document: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            validity: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    CustomerRenewalRequestComponent.prototype.clear = function () {
        this.requestForm.patchValue({
            document: "",
            validity: "",
        });
    };
    CustomerRenewalRequestComponent.prototype.reset = function () {
        this.requestForm.patchValue({
            document: "",
        });
    };
    CustomerRenewalRequestComponent.prototype.onFileChange = function (ev) {
        var _this = this;
        var fileName = ev.srcElement.files[0];
        this.name = fileName.name.includes(".xlsx");
        if (this.name == true) {
            this.dataString = [];
            var workBook_1 = null;
            var jsonData_1 = null;
            var reader_1 = new FileReader();
            var file = ev.srcElement.files[0];
            reader_1.onload = function (event) {
                var data = reader_1.result;
                workBook_1 = xlsx__WEBPACK_IMPORTED_MODULE_8__["read"](data, { type: "binary" });
                jsonData_1 = workBook_1.SheetNames.reduce(function (initial, name) {
                    var sheet = workBook_1.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].sheet_to_json(sheet);
                    return initial;
                }, {});
                var json = [];
                for (var i = 0; i < jsonData_1["Sheet1"].length; i++) {
                    var newData = {};
                    newData["imei"] = jsonData_1["Sheet1"][i]["imei"].toString();
                    json.push(newData);
                }
                _this.dataString = json;
                _this.output = _this.dataString.slice(0, 300).concat("...");
            };
            reader_1.readAsBinaryString(file);
        }
        else {
            this.commonService.showConfirm("Please insert only excel file (.xlsx)");
        }
    };
    CustomerRenewalRequestComponent.prototype.submitBtn = function () {
        var _this = this;
        if (this.dataString.length == 0) {
            this.commonService.showConfirm("Check your excell file,don't enter blank spaces");
        }
        else {
            var excellKeys = Object.keys(this.dataString[0]);
            for (var i = 0; i < excellKeys.length; i++) {
                if (excellKeys[i] == "imei") {
                    console.log("present");
                    this.excellKeyValid = true;
                }
            }
            if (this.name == true && this.excellKeyValid == true) {
                this.imeiIssues = [];
                this.willDownload = true;
                this.commonService.presentLoader();
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                    "/esim/saveEsimBulkRenewalRequest?companyid=apm&dealerid=" +
                    localStorage.getItem("userName") +
                    "&validityperiod=" +
                    this.requestForm.value.validity;
                this.ajaxService
                    .ajaxPostWithBody(url, this.dataString)
                    .subscribe(function (res) {
                    _this.commonService.dismissLoader();
                    if (res.message == "Renewal Request Saved Successfully") {
                        _this.modalController.dismiss({
                            data: "Renewal Request Saved Successfully",
                            imei: _this.dataString,
                        });
                    }
                    else {
                        _this.commonService.showConfirm(res.message);
                        _this.reset();
                    }
                });
            }
        }
    };
    CustomerRenewalRequestComponent.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.createForm();
    };
    CustomerRenewalRequestComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomerRenewalRequestComponent.prototype, "value", void 0);
    CustomerRenewalRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-customer-renewal-request",
            template: __webpack_require__(/*! raw-loader!./customer-renewal-request.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/customer-renewal-request/customer-renewal-request.component.html"),
            styles: [__webpack_require__(/*! ./customer-renewal-request.component.scss */ "./src/app/delar-application/esim-customer-ca-details/customer-renewal-request/customer-renewal-request.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], CustomerRenewalRequestComponent);
    return CustomerRenewalRequestComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/dealer-details/dealer-details.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/dealer-details/dealer-details.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  background-color: #7c68f8;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 18px;\n}\n\n.diable-style {\n  background: white;\n  line-height: 18px;\n}\n\n.content-style {\n  -webkit-box-pack: right;\n          justify-content: right;\n}\n\n.total-data {\n  margin-top: 1%;\n}\n\n.col-content {\n  text-align: right;\n  align-self: center;\n  font-size: 18px;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jdXN0b21lci1jYS1kZXRhaWxzL2RlYWxlci1kZXRhaWxzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGVzaW0tY3VzdG9tZXItY2EtZGV0YWlsc1xcZGVhbGVyLWRldGFpbHNcXGRlYWxlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWN1c3RvbWVyLWNhLWRldGFpbHMvZGVhbGVyLWRldGFpbHMvZGVhbGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksU0FBQTtFQ0NOOztFREVFO0lBQ0ksVUFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLHVCQUFBO1VBQUEsc0JBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQUo7O0FERUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWN1c3RvbWVyLWNhLWRldGFpbHMvZGVhbGVyLWRldGFpbHMvZGVhbGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdjNjhmOFxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAgIC5mb3JtLWZpZWxkIHtcclxuICAgICAgICB6b29tOiA4MCU7XHJcbiAgICB9XHJcblxyXG4gICAgI3N1Ym1pdGJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luOiAtNXB4IDVweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbi5sYWJlbC1zdHlsZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4uZGlhYmxlLXN0eWxlIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXN0eWxlIHtcclxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHRcclxufVxyXG5cclxuLnRvdGFsLWRhdGEge1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuXHJcbi5jb2wtY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcclxufVxyXG4ubGFiZWwtaGVhZCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XHJcbn1cclxuIiwiLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjNjhmODtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4ubGFiZWwtc3R5bGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmRpYWJsZS1zdHlsZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmNvbnRlbnQtc3R5bGUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xufVxuXG4udG90YWwtZGF0YSB7XG4gIG1hcmdpbi10b3A6IDElO1xufVxuXG4uY29sLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbn1cblxuLmxhYmVsLWhlYWQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/dealer-details/dealer-details.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/dealer-details/dealer-details.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: DealerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerDetailsComponent", function() { return DealerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var DealerDetailsComponent = /** @class */ (function () {
    function DealerDetailsComponent(formBuilder, modalController, ajaxService, commonService) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.tableData = [];
        this.tableData1 = [];
        this.page = [];
    }
    DealerDetailsComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    DealerDetailsComponent.prototype.createForm = function () {
        this.dealerForm = this.formBuilder.group({
            imeino: [""],
        });
    };
    DealerDetailsComponent.prototype.getdata = function () {
        this.page = ["100", "200", "500", "1000"];
        this.renderer = function (row, column, value) {
            if (value == "" || null || undefined) {
                return "--";
            }
            else {
                return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                    value +
                    "</span>");
            }
        };
        this.source = { localdata: this.tableData };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.columns = [
            {
                text: "ID",
                datafield: "id",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 150,
            },
            {
                text: "Dealer Name",
                datafield: "providerName",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 160,
            },
            {
                text: "Company ID",
                datafield: "companyId",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 160,
            },
            {
                text: "Contact No",
                datafield: "contactNo",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 160,
            },
            {
                text: "Email ID",
                datafield: "emailId",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 160,
            },
        ];
    };
    DealerDetailsComponent.prototype.getdatas = function () {
        this.renderer = function (row, column, value) {
            if (value == "" || null || undefined) {
                return "--";
            }
            else {
                return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                    value +
                    "</span>");
            }
        };
        this.source = { localdata: this.tableData1 };
        this.dataAdapter1 = new jqx.dataAdapter(this.source);
        this.columns1 = [
            {
                text: "Company ID",
                datafield: "companyId",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 200,
            },
            {
                text: "SIM 1",
                datafield: "sim1",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 200,
            },
            {
                text: "SIM 2",
                datafield: "sim2",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 200,
            },
            {
                text: "Plate No",
                datafield: "plateno",
                cellsrenderer: this.renderer,
                cellsalign: "center",
                align: "center",
                width: 200,
            },
        ];
    };
    DealerDetailsComponent.prototype.fetchData = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/esim/getIMEIDealerDetail?dealer=" +
            localStorage.getItem("userName") +
            "&imeino=" +
            this.value.imei;
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            if (res) {
                res.map(function (d) {
                    if (d.plateno != "") {
                        _this.tableData1.push(d);
                    }
                    else if (d.plateno == "") {
                        _this.tableData.push(d);
                    }
                });
                _this.getdata();
                _this.getdatas();
            }
        });
    };
    DealerDetailsComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.fetchData();
        if (this.value.imei) {
            this.dealerForm.patchValue({
                imeino: this.value.imei,
            });
        }
    };
    DealerDetailsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
    ], DealerDetailsComponent.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DealerDetailsComponent.prototype, "value", void 0);
    DealerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dealer-details",
            template: __webpack_require__(/*! raw-loader!./dealer-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/dealer-details/dealer-details.component.html"),
            styles: [__webpack_require__(/*! ./dealer-details.component.scss */ "./src/app/delar-application/esim-customer-ca-details/dealer-details/dealer-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], DealerDetailsComponent);
    return DealerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/dealerlist/dealerlist.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/dealerlist/dealerlist.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tY3VzdG9tZXItY2EtZGV0YWlscy9kZWFsZXJsaXN0L2RlYWxlcmxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/dealerlist/dealerlist.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/dealerlist/dealerlist.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DealerlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerlistComponent", function() { return DealerlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var DealerlistComponent = /** @class */ (function () {
    function DealerlistComponent(modalController, ajaxService, router, commonService, alertController) {
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.router = router;
        this.commonService = commonService;
        this.alertController = alertController;
        this.selectedArray = [];
        this.answer = [];
        this.assignedImei = [];
        this.showImeiList = [];
        this.companyID = "";
        this.show = false;
    }
    DealerlistComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    DealerlistComponent.prototype.removeCheckedFromArray = function (checkbox) {
        return this.selectedArray.findIndex(function (category) {
            return category === checkbox;
        });
    };
    DealerlistComponent.prototype.updateAnswer = function (event, index, name, company) {
        this.companyID = name;
        this.assign(company.name);
    };
    DealerlistComponent.prototype.assign = function (name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var imei, text, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        imei = [];
                        this.value2.map(function (d) { return imei.push(d.imei); });
                        text = "Are you sure? You want to add this stock to this company " + name;
                        return [4 /*yield*/, this.alertController.create({
                                header: "Assign Stock",
                                backdropDismiss: false,
                                message: text,
                                buttons: [
                                    {
                                        text: "Cancel",
                                        role: "cancel",
                                        handler: function (data) { },
                                    },
                                    {
                                        text: "Confirm",
                                        handler: function (confirm) {
                                            var currentSuffix = localStorage.getItem("companySuffix");
                                            var data = {
                                                fromDelar: currentSuffix,
                                                toDelar: _this.companyID.toString() + "",
                                                imeiNo: imei,
                                            };
                                            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web + "/simcard/update/asset/manager";
                                            _this.ajaxService.ajaxPostMethod(url, data).subscribe(function (res) {
                                                var responseData = res;
                                                if (responseData.message == "updated") {
                                                    _this.modalController.dismiss({
                                                        data: "Stock Assigned Successfully",
                                                    });
                                                }
                                            });
                                        },
                                    },
                                ],
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DealerlistComponent.prototype.ngOnInit = function () {
        this.companyList = this.value;
    };
    DealerlistComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DealerlistComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DealerlistComponent.prototype, "value2", void 0);
    DealerlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dealerlist",
            template: __webpack_require__(/*! raw-loader!./dealerlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/dealerlist/dealerlist.component.html"),
            styles: [__webpack_require__(/*! ./dealerlist.component.scss */ "./src/app/delar-application/esim-customer-ca-details/dealerlist/dealerlist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], DealerlistComponent);
    return DealerlistComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/end-user-creation/end-user-creation.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/end-user-creation/end-user-creation.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-style {\n  -webkit-box-pack: right;\n          justify-content: right;\n}\n\n.col-content {\n  text-align: right;\n  align-self: center;\n  font-size: 18px;\n}\n\n.label {\n  text-align: right;\n  align-self: center;\n  font-size: 14px;\n  margin-left: 3px;\n  font-weight: 500;\n}\n\n.label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 18px;\n}\n\n.heading {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n#submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 40%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px 5px;\n  border-radius: 7px;\n}\n\n.col {\n  padding-left: 15px;\n  width: 100%;\n}\n\nion-button:hover {\n  --background-color: #6c2a84;\n}\n\n.label-text {\n  color: #6252ee;\n  font-size: 17px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n\n  .label-text {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 8px 1px;\n    padding-right: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jdXN0b21lci1jYS1kZXRhaWxzL2VuZC11c2VyLWNyZWF0aW9uL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGVzaW0tY3VzdG9tZXItY2EtZGV0YWlsc1xcZW5kLXVzZXItY3JlYXRpb25cXGVuZC11c2VyLWNyZWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWN1c3RvbWVyLWNhLWRldGFpbHMvZW5kLXVzZXItY3JlYXRpb24vZW5kLXVzZXItY3JlYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtVQUFBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSxxQkFBQTtBQ0dGOztBRERBO0VBQ0U7SUFDRSxnQkFBQTtFQ0lGOztFREZBO0lBQ0UsVUFBQTtFQ0tGO0FBQ0Y7O0FESEE7RUFDRTtJQUNFLFNBQUE7RUNLRjs7RURIQTtJQUNFLFVBQUE7RUNNRjtBQUNGOztBREpBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtBQ01GOztBREZBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDS0Y7O0FESEE7RUFDRSwyQkFBQTtBQ01GOztBREhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDTUY7O0FESEE7RUFDRTtJQUNFLFlBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQ01GOztFREpBO0lBQ0UsZUFBQTtFQ09GO0FBQ0Y7O0FETEE7RUFDRTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQ09GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWN1c3RvbWVyLWNhLWRldGFpbHMvZW5kLXVzZXItY3JlYXRpb24vZW5kLXVzZXItY3JlYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1zdHlsZSB7XHJcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxufVxyXG5cclxuLmNvbC1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubGFiZWwtc3R5bGUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG4uaGVhZGluZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbn1cclxuI3N1Ym1pdGJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNjI1MmVlO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgem9vbTogODAlO1xyXG4gIH1cclxuICAjc3VibWl0YnRuIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG59XHJcbi5mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IC01cHggNXB4IDBweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gcGxhY2UtY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcbi5jb2wge1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5pb24tYnV0dG9uOmhvdmVyIHtcclxuICAtLWJhY2tncm91bmQtY29sb3I6ICM2YzJhODQ7XHJcbn1cclxuXHJcbi5sYWJlbC10ZXh0IHtcclxuICBjb2xvcjogIzYyNTJlZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MzIwcHgpIGFuZChtYXgtd2lkdGg6MTAyM3B4KSB7XHJcbiAgLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbjogOHB4IDAgMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5sYWJlbC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MTAyNHB4KSB7XHJcbiAgLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogOHB4IDFweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcbiIsIi5jb250ZW50LXN0eWxlIHtcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbn1cblxuLmNvbC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubGFiZWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5sYWJlbC1zdHlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uaGVhZGluZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xufVxuXG4jc3VibWl0YnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNjI1MmVlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAtNXB4IDVweCAwcHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5jb2wge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tYnV0dG9uOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjNmMyYTg0O1xufVxuXG4ubGFiZWwtdGV4dCB7XG4gIGNvbG9yOiAjNjI1MmVlO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmxhYmVsLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDhweCAxcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/end-user-creation/end-user-creation.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/end-user-creation/end-user-creation.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: EndUserCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndUserCreationComponent", function() { return EndUserCreationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var EndUserCreationComponent = /** @class */ (function () {
    function EndUserCreationComponent(ajaxService, router, commonService, formBuilder, modalController) {
        this.ajaxService = ajaxService;
        this.router = router;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.assertCategories = [
            "Car",
            "Bike",
            "Bus",
            "Truck",
            "Auto",
            "Fork Lifts",
            "Light Towers",
            "Welding Machines",
            "Deepsea Generator",
            "Compressors",
            "32kw CEM7 Generators",
            "Battery",
            "Bobcat",
            "Tanker",
            "Loader",
            "Dabbab",
            "Dumper",
            "Street Sweeper",
            "Towed Street Sweeper",
            "Compactor",
            "Double Cabin",
            "Hook Lift",
            "Crane",
            "Small Truck",
        ];
        this.button = false;
    }
    EndUserCreationComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    EndUserCreationComponent.prototype.createForm = function () {
        this.addCompany = this.formBuilder.group({
            imeiNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            contactNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            plateNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            assetCategory: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            engineno: [""],
            chassisno: [""],
        });
    };
    EndUserCreationComponent.prototype.clear = function () {
        this.addCompany.patchValue({
            imeiNo: "",
            contactNo: "",
            plateNo: "",
            address: "",
            assetCategory: "",
            engineno: "",
            chassisno: "",
        });
    };
    EndUserCreationComponent.prototype.getdetails = function () {
        this.addCompany.patchValue({
            imeiNo: this.value.imei,
        });
    };
    EndUserCreationComponent.prototype.onadd = function () {
        var _this = this;
        if (this.addCompany.value.contactNo.toString().length != 10) {
            this.commonService.presentToast("Enter the 10 Digit Contact Number");
        }
        else if (this.addCompany.valid) {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                "/global/validate/contact?contactNo=" +
                this.addCompany.value.contactNo;
            this.ajaxService.ajaxGet(url).subscribe(function (res) {
                if (res.message == "Not Available") {
                    _this.onSubmit();
                }
                else {
                    _this.commonService.showConfirm(res.message);
                }
            });
        }
        else {
            this.commonService.presentToast("Fill required field..");
        }
    };
    EndUserCreationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.button = true;
        var data;
        data = {
            companyId: this.addCompany.value.contactNo,
            contactNo: this.addCompany.value.contactNo,
            imeiNo: this.value.imei,
            icon: this.addCompany.value.assetCategory,
            plateNo: this.addCompany.value.plateNo,
            address: this.addCompany.value.address,
            engineno: this.addCompany.value.engineno,
            chassisno: this.addCompany.value.chassisno,
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/site/NewVehicleCreation";
        this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
            if (res.message == "Added Successfully") {
                _this.modalController.dismiss({
                    data: "Added Successfully",
                });
                _this.button = false;
            }
            else {
                _this.commonService.showConfirm(res.message);
                _this.button = false;
            }
        });
    };
    EndUserCreationComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.getdetails();
    };
    EndUserCreationComponent.ctorParameters = function () { return [
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EndUserCreationComponent.prototype, "value", void 0);
    EndUserCreationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-end-user-creation",
            template: __webpack_require__(/*! raw-loader!./end-user-creation.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/end-user-creation/end-user-creation.component.html"),
            styles: [__webpack_require__(/*! ./end-user-creation.component.scss */ "./src/app/delar-application/esim-customer-ca-details/end-user-creation/end-user-creation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], EndUserCreationComponent);
    return EndUserCreationComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/esim-customer-ca-details.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/esim-customer-ca-details.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: EsimCustomerCaDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimCustomerCaDetailsPageModule", function() { return EsimCustomerCaDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _esim_customer_ca_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esim-customer-ca-details.page */ "./src/app/delar-application/esim-customer-ca-details/esim-customer-ca-details.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _status_details_status_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./status-details/status-details.component */ "./src/app/delar-application/esim-customer-ca-details/status-details/status-details.component.ts");
/* harmony import */ var _dealer_details_dealer_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dealer-details/dealer-details.component */ "./src/app/delar-application/esim-customer-ca-details/dealer-details/dealer-details.component.ts");
/* harmony import */ var _request_page_request_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./request-page/request-page.component */ "./src/app/delar-application/esim-customer-ca-details/request-page/request-page.component.ts");
/* harmony import */ var _esim_topup_popup_esim_topup_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./esim-topup-popup/esim-topup-popup.component */ "./src/app/delar-application/esim-customer-ca-details/esim-topup-popup/esim-topup-popup.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/delar-application/esim-customer-ca-details/comment/comment.component.ts");
/* harmony import */ var _customer_renewal_request_customer_renewal_request_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customer-renewal-request/customer-renewal-request.component */ "./src/app/delar-application/esim-customer-ca-details/customer-renewal-request/customer-renewal-request.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _assign_dealer_assign_dealer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assign-dealer/assign-dealer.component */ "./src/app/delar-application/esim-customer-ca-details/assign-dealer/assign-dealer.component.ts");
/* harmony import */ var _dealerlist_dealerlist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dealerlist/dealerlist.component */ "./src/app/delar-application/esim-customer-ca-details/dealerlist/dealerlist.component.ts");
/* harmony import */ var src_app_services_assign_dealer_pipe_ca_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/services/assign-dealer-pipe-ca-page */ "./src/app/services/assign-dealer-pipe-ca-page.ts");
/* harmony import */ var _certificate_creation_certificate_creation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./certificate-creation/certificate-creation.component */ "./src/app/delar-application/esim-customer-ca-details/certificate-creation/certificate-creation.component.ts");
/* harmony import */ var _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./confirm-popup/confirm-popup.component */ "./src/app/delar-application/esim-customer-ca-details/confirm-popup/confirm-popup.component.ts");
/* harmony import */ var _company_creation_company_creation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./company-creation/company-creation.component */ "./src/app/delar-application/esim-customer-ca-details/company-creation/company-creation.component.ts");
/* harmony import */ var _end_user_creation_end_user_creation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./end-user-creation/end-user-creation.component */ "./src/app/delar-application/esim-customer-ca-details/end-user-creation/end-user-creation.component.ts");
/* harmony import */ var angular2_qrcode__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular2-qrcode */ "./node_modules/angular2-qrcode/lib/angular2-qrcode.js");
/* harmony import */ var _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./generate-invoice/generate-invoice.component */ "./src/app/delar-application/esim-customer-ca-details/generate-invoice/generate-invoice.component.ts");

























var routes = [
    {
        path: "",
        component: _esim_customer_ca_details_page__WEBPACK_IMPORTED_MODULE_6__["EsimCustomerCaDetailsPage"],
    },
    {
        path: "status-details",
        component: _status_details_status_details_component__WEBPACK_IMPORTED_MODULE_9__["StatusDetailsComponent"],
    },
    {
        path: "dealer-details",
        component: _dealer_details_dealer_details_component__WEBPACK_IMPORTED_MODULE_10__["DealerDetailsComponent"],
    },
    {
        path: "request-page",
        component: _request_page_request_page_component__WEBPACK_IMPORTED_MODULE_11__["RequestPageComponent"],
    },
    {
        path: "app-esim-topup-popup",
        component: _esim_topup_popup_esim_topup_popup_component__WEBPACK_IMPORTED_MODULE_12__["EsimTopupPopupComponent"],
    },
    {
        path: "comment",
        component: _comment_comment_component__WEBPACK_IMPORTED_MODULE_13__["CommentComponent"],
    },
    {
        path: "customer-renewal-request",
        component: _customer_renewal_request_customer_renewal_request_component__WEBPACK_IMPORTED_MODULE_14__["CustomerRenewalRequestComponent"],
    },
    {
        path: "assign-dealer",
        component: _assign_dealer_assign_dealer_component__WEBPACK_IMPORTED_MODULE_16__["AssignDealerComponent"],
    },
    {
        path: "dealerlist",
        component: _dealerlist_dealerlist_component__WEBPACK_IMPORTED_MODULE_17__["DealerlistComponent"],
    },
    {
        path: "certificate-creation",
        component: _certificate_creation_certificate_creation_component__WEBPACK_IMPORTED_MODULE_19__["CertificateCreationComponent"],
    },
    {
        path: "company-creation",
        component: _company_creation_company_creation_component__WEBPACK_IMPORTED_MODULE_21__["CompanyCreationComponent"],
    },
    {
        path: "confirm-popup",
        component: _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmPopupComponent"],
    },
    {
        path: "end-user-creation",
        component: _end_user_creation_end_user_creation_component__WEBPACK_IMPORTED_MODULE_22__["EndUserCreationComponent"],
    },
    {
        path: "generate-invoice",
        component: _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_24__["GenerateInvoiceComponent"],
    },
];
var EsimCustomerCaDetailsPageModule = /** @class */ (function () {
    function EsimCustomerCaDetailsPageModule() {
    }
    EsimCustomerCaDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_7__["SharedModModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"],
                angular2_qrcode__WEBPACK_IMPORTED_MODULE_23__["QRCodeModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_15__["FileUploadModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [
                _esim_customer_ca_details_page__WEBPACK_IMPORTED_MODULE_6__["EsimCustomerCaDetailsPage"],
                _status_details_status_details_component__WEBPACK_IMPORTED_MODULE_9__["StatusDetailsComponent"],
                src_app_services_assign_dealer_pipe_ca_page__WEBPACK_IMPORTED_MODULE_18__["AssigndealerPipe"],
                _dealer_details_dealer_details_component__WEBPACK_IMPORTED_MODULE_10__["DealerDetailsComponent"],
                _request_page_request_page_component__WEBPACK_IMPORTED_MODULE_11__["RequestPageComponent"],
                _esim_topup_popup_esim_topup_popup_component__WEBPACK_IMPORTED_MODULE_12__["EsimTopupPopupComponent"],
                _comment_comment_component__WEBPACK_IMPORTED_MODULE_13__["CommentComponent"],
                _customer_renewal_request_customer_renewal_request_component__WEBPACK_IMPORTED_MODULE_14__["CustomerRenewalRequestComponent"],
                _assign_dealer_assign_dealer_component__WEBPACK_IMPORTED_MODULE_16__["AssignDealerComponent"],
                _dealerlist_dealerlist_component__WEBPACK_IMPORTED_MODULE_17__["DealerlistComponent"],
                _certificate_creation_certificate_creation_component__WEBPACK_IMPORTED_MODULE_19__["CertificateCreationComponent"],
                _company_creation_company_creation_component__WEBPACK_IMPORTED_MODULE_21__["CompanyCreationComponent"],
                _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmPopupComponent"],
                _end_user_creation_end_user_creation_component__WEBPACK_IMPORTED_MODULE_22__["EndUserCreationComponent"],
                _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_24__["GenerateInvoiceComponent"],
            ],
        })
    ], EsimCustomerCaDetailsPageModule);
    return EsimCustomerCaDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/esim-customer-ca-details.page.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/esim-customer-ca-details.page.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fabbutton {\n  --background: whitesmoke;\n  --background-hover: grey;\n}\n\n.icon {\n  color: black;\n}\n\n.icon:hover {\n  color: white;\n}\n\n.submitBtn {\n  margin: 0px 14px 0px 0px;\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.pdf-wrapper,\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n  width: 18px;\n  height: 20px;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -11px;\n  right: -2px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -15px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.owl {\n  background-color: yellow;\n  --color: #14241d;\n  padding: 10px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.oml {\n  background-color: blue;\n  --color: white;\n  padding: 10px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.exp {\n  background-color: red;\n  --color: white;\n  padding: 10px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.days {\n  background-color: orange;\n  --color: #14241d;\n  padding: 10px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: 13px 5px 0px;\n  border-radius: 7px;\n}\n\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -1px;\n  right: -17px;\n  height: 30px;\n  width: 30px;\n}\n\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -15px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.tooltipRenewal {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltipRenewal .tooltiprenewaltext {\n  visibility: hidden;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -15px;\n  margin-left: -80px;\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n}\n\n.tooltipRenewal:hover .tooltiprenewaltext {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jdXN0b21lci1jYS1kZXRhaWxzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGVzaW0tY3VzdG9tZXItY2EtZGV0YWlsc1xcZXNpbS1jdXN0b21lci1jYS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jdXN0b21lci1jYS1kZXRhaWxzL2VzaW0tY3VzdG9tZXItY2EtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtFQUNBLHdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0FDR0Y7O0FEQUE7RUFDRSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUNHRjs7QUREQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNJRjs7QURGQTs7RUFFRSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDS0Y7O0FERkE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDS0Y7O0FERkE7RUFDRSwyQkFBQTtBQ0tGOztBREZBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ0tGOztBREZBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNLRjs7QURGQTtFQUNFLG1CQUFBO0FDS0Y7O0FESEE7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNNRjs7QURKQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDT0Y7O0FETEE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1FGOztBRE5BO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDU0Y7O0FEUEE7RUFDRTtJQUNFLFNBQUE7RUNVRjs7RURQQTtJQUNFLFVBQUE7RUNVRjtBQUNGOztBRFBBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQ1NGOztBRE5BO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1NGOztBRE5BO0VBQ0UsMkJBQUE7QUNTRjs7QURQQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNVRjs7QURQQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDVUY7O0FEUEE7RUFDRSxtQkFBQTtBQ1VGOztBRFBBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ1VGOztBRFBBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNVRjs7QURQQTtFQUNFLG1CQUFBO0FDVUYiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWN1c3RvbWVyLWNhLWRldGFpbHMvZXNpbS1jdXN0b21lci1jYS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWJidXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6IGdyZXk7XHJcbn1cclxuLmljb24ge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uaWNvbjpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc3VibWl0QnRuIHtcclxuICBtYXJnaW46IDBweCAxNHB4IDBweCAwcHg7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIC0tY29sb3I6ICM3YzY4Zjg7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjN2M2OGY4O1xyXG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xyXG59XHJcbi5kZWFsZXItbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLnBkZi13cmFwcGVyLFxyXG4uZXhjZWwtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2V4Y2VsTmV3LnN2Z1wiKSBuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZmFiLWJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsYXZlbmRlcjtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTExcHg7XHJcbiAgcmlnaHQ6IC0ycHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4uZmFiLWJ0bjpob3ZlciB7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjYjZiNmI2O1xyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC04MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcbi5vd2wge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICAtLWNvbG9yOiAjMTQyNDFkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ub21sIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZXhwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5kYXlzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgLS1jb2xvcjogIzE0MjQxZDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIHpvb206IDgwJTtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IDEzcHggNXB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbi5mYWItYnRuIHtcclxuICAtLWJhY2tncm91bmQ6IGxhdmVuZGVyO1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMXB4O1xyXG4gIHJpZ2h0OiAtMTdweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5mYWItYnRuOmhvdmVyIHtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XHJcbn1cclxuLnRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLnRvb2x0aXBSZW5ld2FsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udG9vbHRpcFJlbmV3YWwgLnRvb2x0aXByZW5ld2FsdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi50b29sdGlwUmVuZXdhbDpob3ZlciAudG9vbHRpcHJlbmV3YWx0ZXh0IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcbiIsIi5mYWJidXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogZ3JleTtcbn1cblxuLmljb24ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5pY29uOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3VibWl0QnRuIHtcbiAgbWFyZ2luOiAwcHggMTRweCAwcHggMHB4O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM3YzY4Zjg7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xufVxuXG4uZGVhbGVyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucGRmLXdyYXBwZXIsXG4uZXhjZWwtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9leGNlbE5ldy5zdmdcIikgbm8tcmVwZWF0O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uZmFiLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogbGF2ZW5kZXI7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMXB4O1xuICByaWdodDogLTJweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLmZhYi1idG46aG92ZXIge1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ub3dsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAtLWNvbG9yOiAjMTQyNDFkO1xuICBwYWRkaW5nOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub21sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5leHAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGF5cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgLS1jb2xvcjogIzE0MjQxZDtcbiAgcGFkZGluZzogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IDEzcHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4uZmFiLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogbGF2ZW5kZXI7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xcHg7XG4gIHJpZ2h0OiAtMTdweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLmZhYi1idG46aG92ZXIge1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiNmI2YjY7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4udG9vbHRpcFJlbmV3YWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvb2x0aXBSZW5ld2FsIC50b29sdGlwcmVuZXdhbHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC04MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRvb2x0aXBSZW5ld2FsOmhvdmVyIC50b29sdGlwcmVuZXdhbHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/esim-customer-ca-details.page.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/esim-customer-ca-details.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: EsimCustomerCaDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimCustomerCaDetailsPage", function() { return EsimCustomerCaDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _assign_dealer_assign_dealer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assign-dealer/assign-dealer.component */ "./src/app/delar-application/esim-customer-ca-details/assign-dealer/assign-dealer.component.ts");
/* harmony import */ var _certificate_creation_certificate_creation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./certificate-creation/certificate-creation.component */ "./src/app/delar-application/esim-customer-ca-details/certificate-creation/certificate-creation.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/delar-application/esim-customer-ca-details/comment/comment.component.ts");
/* harmony import */ var _company_creation_company_creation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./company-creation/company-creation.component */ "./src/app/delar-application/esim-customer-ca-details/company-creation/company-creation.component.ts");
/* harmony import */ var _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./confirm-popup/confirm-popup.component */ "./src/app/delar-application/esim-customer-ca-details/confirm-popup/confirm-popup.component.ts");
/* harmony import */ var _customer_renewal_request_customer_renewal_request_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customer-renewal-request/customer-renewal-request.component */ "./src/app/delar-application/esim-customer-ca-details/customer-renewal-request/customer-renewal-request.component.ts");
/* harmony import */ var _dealer_details_dealer_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dealer-details/dealer-details.component */ "./src/app/delar-application/esim-customer-ca-details/dealer-details/dealer-details.component.ts");
/* harmony import */ var _end_user_creation_end_user_creation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./end-user-creation/end-user-creation.component */ "./src/app/delar-application/esim-customer-ca-details/end-user-creation/end-user-creation.component.ts");
/* harmony import */ var _esim_topup_popup_esim_topup_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./esim-topup-popup/esim-topup-popup.component */ "./src/app/delar-application/esim-customer-ca-details/esim-topup-popup/esim-topup-popup.component.ts");
/* harmony import */ var _request_page_request_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./request-page/request-page.component */ "./src/app/delar-application/esim-customer-ca-details/request-page/request-page.component.ts");
/* harmony import */ var _status_details_status_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./status-details/status-details.component */ "./src/app/delar-application/esim-customer-ca-details/status-details/status-details.component.ts");
/* harmony import */ var _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./generate-invoice/generate-invoice.component */ "./src/app/delar-application/esim-customer-ca-details/generate-invoice/generate-invoice.component.ts");




















var EsimCustomerCaDetailsPage = /** @class */ (function () {
    function EsimCustomerCaDetailsPage(platform, formBuilder, modalController, ajaxService, commonService, ete, alertController) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.ete = ete;
        this.alertController = alertController;
        this.data = "";
        this.selectedRow = [];
        this.show = false;
        this.renewalbutton = true;
        this.companyId = localStorage.getItem("userName");
        this.TotalcertificateData = {};
        this.Apmlogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAABKCAYAAAD61ctwAAAKN2lDQ1BzUkdCIElFQzYxOTY2LTIuMQAAeJydlndUU9kWh8+9N71QkhCKlNBraFICSA29SJEuKjEJEErAkAAiNkRUcERRkaYIMijggKNDkbEiioUBUbHrBBlE1HFwFBuWSWStGd+8ee/Nm98f935rn73P3Wfvfda6AJD8gwXCTFgJgAyhWBTh58WIjYtnYAcBDPAAA2wA4HCzs0IW+EYCmQJ82IxsmRP4F726DiD5+yrTP4zBAP+flLlZIjEAUJiM5/L42VwZF8k4PVecJbdPyZi2NE3OMErOIlmCMlaTc/IsW3z2mWUPOfMyhDwZy3PO4mXw5Nwn4405Er6MkWAZF+cI+LkyviZjg3RJhkDGb+SxGXxONgAoktwu5nNTZGwtY5IoMoIt43kA4EjJX/DSL1jMzxPLD8XOzFouEiSniBkmXFOGjZMTi+HPz03ni8XMMA43jSPiMdiZGVkc4XIAZs/8WRR5bRmyIjvYODk4MG0tbb4o1H9d/JuS93aWXoR/7hlEH/jD9ld+mQ0AsKZltdn6h21pFQBd6wFQu/2HzWAvAIqyvnUOfXEeunxeUsTiLGcrq9zcXEsBn2spL+jv+p8Of0NffM9Svt3v5WF485M4knQxQ143bmZ6pkTEyM7icPkM5p+H+B8H/nUeFhH8JL6IL5RFRMumTCBMlrVbyBOIBZlChkD4n5r4D8P+pNm5lona+BHQllgCpSEaQH4eACgqESAJe2Qr0O99C8ZHA/nNi9GZmJ37z4L+fVe4TP7IFiR/jmNHRDK4ElHO7Jr8WgI0IABFQAPqQBvoAxPABLbAEbgAD+ADAkEoiARxYDHgghSQAUQgFxSAtaAYlIKtYCeoBnWgETSDNnAYdIFj4DQ4By6By2AE3AFSMA6egCnwCsxAEISFyBAVUod0IEPIHLKFWJAb5AMFQxFQHJQIJUNCSAIVQOugUqgcqobqoWboW+godBq6AA1Dt6BRaBL6FXoHIzAJpsFasBFsBbNgTzgIjoQXwcnwMjgfLoK3wJVwA3wQ7oRPw5fgEVgKP4GnEYAQETqiizARFsJGQpF4JAkRIauQEqQCaUDakB6kH7mKSJGnyFsUBkVFMVBMlAvKHxWF4qKWoVahNqOqUQdQnag+1FXUKGoK9RFNRmuizdHO6AB0LDoZnYsuRlegm9Ad6LPoEfQ4+hUGg6FjjDGOGH9MHCYVswKzGbMb0445hRnGjGGmsVisOtYc64oNxXKwYmwxtgp7EHsSewU7jn2DI+J0cLY4X1w8TogrxFXgWnAncFdwE7gZvBLeEO+MD8Xz8MvxZfhGfA9+CD+OnyEoE4wJroRIQiphLaGS0EY4S7hLeEEkEvWITsRwooC4hlhJPEQ8TxwlviVRSGYkNimBJCFtIe0nnSLdIr0gk8lGZA9yPFlM3kJuJp8h3ye/UaAqWCoEKPAUVivUKHQqXFF4pohXNFT0VFysmK9YoXhEcUjxqRJeyUiJrcRRWqVUo3RU6YbStDJV2UY5VDlDebNyi/IF5UcULMWI4kPhUYoo+yhnKGNUhKpPZVO51HXURupZ6jgNQzOmBdBSaaW0b2iDtCkVioqdSrRKnkqNynEVKR2hG9ED6On0Mvph+nX6O1UtVU9Vvuom1TbVK6qv1eaoeajx1UrU2tVG1N6pM9R91NPUt6l3qd/TQGmYaYRr5Grs0Tir8XQObY7LHO6ckjmH59zWhDXNNCM0V2ju0xzQnNbS1vLTytKq0jqj9VSbru2hnaq9Q/uE9qQOVcdNR6CzQ+ekzmOGCsOTkc6oZPQxpnQ1df11Jbr1uoO6M3rGelF6hXrtevf0Cfos/ST9Hfq9+lMGOgYhBgUGrQa3DfGGLMMUw12G/YavjYyNYow2GHUZPTJWMw4wzjduNb5rQjZxN1lm0mByzRRjyjJNM91tetkMNrM3SzGrMRsyh80dzAXmu82HLdAWThZCiwaLG0wS05OZw2xljlrSLYMtCy27LJ9ZGVjFW22z6rf6aG1vnW7daH3HhmITaFNo02Pzq62ZLde2xvbaXPJc37mr53bPfW5nbse322N3055qH2K/wb7X/oODo4PIoc1h0tHAMdGx1vEGi8YKY21mnXdCO3k5rXY65vTW2cFZ7HzY+RcXpkuaS4vLo3nG8/jzGueNueq5clzrXaVuDLdEt71uUnddd457g/sDD30PnkeTx4SnqWeq50HPZ17WXiKvDq/XbGf2SvYpb8Tbz7vEe9CH4hPlU+1z31fPN9m31XfKz95vhd8pf7R/kP82/xsBWgHcgOaAqUDHwJWBfUGkoAVB1UEPgs2CRcE9IXBIYMj2kLvzDecL53eFgtCA0O2h98KMw5aFfR+OCQ8Lrwl/GGETURDRv4C6YMmClgWvIr0iyyLvRJlESaJ6oxWjE6Kbo1/HeMeUx0hjrWJXxl6K04gTxHXHY+Oj45vipxf6LNy5cDzBPqE44foi40V5iy4s1licvvj4EsUlnCVHEtGJMYktie85oZwGzvTSgKW1S6e4bO4u7hOeB28Hb5Lvyi/nTyS5JpUnPUp2Td6ePJninlKR8lTAFlQLnqf6p9alvk4LTduf9ik9Jr09A5eRmHFUSBGmCfsytTPzMoezzLOKs6TLnJftXDYlChI1ZUPZi7K7xTTZz9SAxESyXjKa45ZTk/MmNzr3SJ5ynjBvYLnZ8k3LJ/J9879egVrBXdFboFuwtmB0pefK+lXQqqWrelfrry5aPb7Gb82BtYS1aWt/KLQuLC98uS5mXU+RVtGaorH1futbixWKRcU3NrhsqNuI2ijYOLhp7qaqTR9LeCUXS61LK0rfb+ZuvviVzVeVX33akrRlsMyhbM9WzFbh1uvb3LcdKFcuzy8f2x6yvXMHY0fJjpc7l+y8UGFXUbeLsEuyS1oZXNldZVC1tep9dUr1SI1XTXutZu2m2te7ebuv7PHY01anVVda926vYO/Ner/6zgajhop9mH05+x42Rjf2f836urlJo6m06cN+4X7pgYgDfc2Ozc0tmi1lrXCrpHXyYMLBy994f9Pdxmyrb6e3lx4ChySHHn+b+O31w0GHe4+wjrR9Z/hdbQe1o6QT6lzeOdWV0iXtjusePhp4tLfHpafje8vv9x/TPVZzXOV42QnCiaITn07mn5w+lXXq6enk02O9S3rvnIk9c60vvG/wbNDZ8+d8z53p9+w/ed71/LELzheOXmRd7LrkcKlzwH6g4wf7HzoGHQY7hxyHui87Xe4Znjd84or7ldNXva+euxZw7dLI/JHh61HXb95IuCG9ybv56Fb6ree3c27P3FlzF3235J7SvYr7mvcbfjT9sV3qID0+6j068GDBgztj3LEnP2X/9H686CH5YcWEzkTzI9tHxyZ9Jy8/Xvh4/EnWk5mnxT8r/1z7zOTZd794/DIwFTs1/lz0/NOvm1+ov9j/0u5l73TY9P1XGa9mXpe8UX9z4C3rbf+7mHcTM7nvse8rP5h+6PkY9PHup4xPn34D94Tz+49wZioAAAAJcEhZcwAALiMAAC4jAXilP3YAACAASURBVHic7V0HYBVV1j535rXkpQcCgUAKkKDSBEEREGRVRKwrKigLWHBd+9r9LQhW1q64urL2Lri6CKKgCAoWVBCpIZBQUoCEJKS/Nvf/zrySeSWNZW37PpjM3F7mnHvOuffOfSYpJUURRRStw/RLVyCKKH4LiDJKFFG0A1FGiSKKdiDKKFFE0Q5EGSWKKNqBKKNEEUU7EGWUKKJoB6KMEkUU7UCUUaKIoh2IMkoUUbQDUUaJIop2IMooUUTRDkQZ5WfGyq5d41LiE68P9RfSM6/f9u37IqX5KTf3UiFFeouZCtGkSc8O8ng+H1hYWO333tCn7zQi2SM0uqaJpQN3bF3jd89SFOXc3rm3SilVRaFmqlA18qj0/IB1Bfs70MTfJaKM8jMjJSHpj4LkvQEP4b1JUh24PRwpjarSlbgN9scNTaunFkzhom7TUbm3HrVp2999AZcLIY4PzU9RZQ5uAUY5Ny+nn6LIBwhZCFWSnpX+TGT2yIVwRRnll67A/xoUs5wqRMinDV6C/xO1wCjCwlGkMW7Ys9CfZRz+zN06uPeuvmu3L26pDog7xuhWzWKMMEsvcyhSZxAvw0jSyNXOlv2+EWWUnxGbBuT2UCx0oo+omwO8BN9/y9E5Rx+xrnBdaDrVEha3HteHyMMMj0Hw66UHCX8McQPuwYyieCWF8EqN7HVH9co8etOOXXpQjBwjTNIf5mMYr0TRtMPV+t82oozyM8IUo01hEhTNkqASV0pA/ZIKS5UwRmGJ0uzQ/+7PXVUwmR/WDlXMcdZeX+LxWAMDDuE/ChO96iN6r6QoBxN05ueYWBqNKK+yfXLRCdknMFP4JEo54nf2pzMrh7sXfpuIMsrPCGEWU/1MweqXlHQniNtrTwj9/4UrFeWW0ZrmDk4nSYTaJz4M/k5zFYzt/TXCj/XnC8TwH8WmMVuSwfZYiftEH1OMwd9XLzwxuz/UwVSftHEjbDWkz9l+O8XzX+iH3yKijPIzoWBMr2GKVfT1u0HYe9YtL3z+6LHZs+Ds7GOgLt1OzBxHIWqTao1o03jzHZd9hGpVzjXkC8hi/qtYfQziszek0FYoJmWiV3JoYziOOcYzRqjCr26tlaqsUXxqFzOLGlW9dPxHjLJZUSwJPQbkeaSSip5uktJdVVnyU+FgTYtagCFQrTSV7QQ/IE0WTdQ0T9H4nCUg/Km6p06vgtWvIEZRLBoFW/HUc+eZOWW428xWkUSGyQFmFCnlv/UyY7Qge4OEtpKZwufOLjoro6dqM4/xShjdNlkBAdRVMTXbKdpvTPVyCTEAVZ6MbhgOpxMtKcHzNtzXVhCt6iJl/aHke0iMsjtj6GDVbLs1qe+ICehgu6p6/SXkdNf4Ec6S7BM+93ianuq5e81Hh5L/7w2b+yuW2OysSbrDR++alIt0p1VbBNKdagg7a9fYlKTM5ZWB9RCCya4Ez5SpiNs14ApWy3a6GpwP8oNi9alePulQKTyFnUzKLjBBJksYhUxjySxHKT4bBv8gccQkrxQinXlUGaQF/uphlvIn3H6qFSLVTnQeWn8x3NO5izoTOTQhPkVPzruP6MOZUrZbXnaIUfLTjoyPS+j0pDnVOl3Eg3ftLrxoD/GMCUO6BUmHapH15nFKrWVcSe8TPtFq6i/psf+H0o6U83uDPa/HBPRMqu7wzVqJA7uW84NsqF2qJsWzBDb7wmwyNe483Of50/OsV5iNEu7GSCkXeNyO23ov3lvOXorNZ8SzVGDCd7B0kpAqNNXHCFcjLNXLSNJ90N20KtlmnSRMFJgl+61JFD/ipTyA23N8gVL7oRnXoMumwY13QRPuIlrvEeJ6VcoV7cmv3Yyyq9vxWXFpKR+rSc48JaWJlAQnCbt7u7C6F0hBP2E4aoQ6kSOcprNlvWmUVmMhUWkbJ2wx3xdnDjslY9eajYfW5N8+FIuYGrIOEkPpPcuLL8oiSxovfcjm96CH6+rXvOb03rQGZimVmtTtEimER1G0gwW7SwpHLw+eBNBtFP+6CBM8M4pNrmBG8c1wDTGsmfyQ98T+2oqbMnwSyJvu92CiQMow7f25SYgHIJzvRTdOgXsg7p+BWR6BdLm9LenSLkbZljG0U1yK9VM11dlLSWskpXNjrYjXrn86dufLM2dqWuWsvAQlToxKunHrY4j+WNWt2aeJBOcrkDadhBqTTmRZtqPHscN67fl2z2Fo928K2y7K6BRnUU8L8hRMphSnP0ZeUxm5Z0p6To/Xywp1L5YoFMQojq7zdn9jzLJbhLJVm9eI99sbvAfGZXGtsJrVsDUT6FgrOI0+U8Z2jK8sy29L82oVNil53WgqmONlNO9lPPfA/RZIl5yVQkweLVvWM9vFKHGxtr8rSS4vk6Q3HJQJ2tjU+4rWzvRn0ittFgo8v/zZ/nmd/7KhLnlO0UcH7sgZpZoaViI4TXqUrjEuyxuzFGUM+OpnH6QWLFig9unTJ95sNieYTKZYtxA2VdNiNUWJFR6PTVGUGBjAZlIUXrGwCClNcJvglnjm/VcVEN8HFLe74d13390xE6NDe8uOj6VJkCaWllbUdWe4GiVQV5YqPCNGqtmXJrDdpX1gSWS0NzRwSs/nSosqbuoOO0Vk+qWGziyCVuhFqxHq8xtAjRDJGHnOweMEXLHoo+1oxrcNRB/HSVlhjAt1azlsmKNhw7wD5x9wTRzpXdP6c0v5t8koxZkjhpnS6Dxd3UpxkJqiXZV0T9Faf3j1++MHmlM7XY3HbbGJiXfgfjv7p95fuPXAPTmTFIfjM9gtghzqqEu6j2R1Yf6hdARj5cqVps6dO3cis7krCD1NCJHGRUH9SAFBp5C+eCdS0Ekp6KQkuBNwxQ8YODCWDOSpNxoWLGjCSaq6E/F3IF0R8tgDY2+n1LRd4OeS8r17S0ePHh00yoBJOlRnxaIYDXXGFpD630LjYVS/G7dsf1zY7lPAwLNRDymswbNa7S7b5iEY5832Rp0vDyuMdoWmCTUQ1e1pcq3uSLt+bUiQsgq3FxUhXoLBx4upl7A7lueYhJjvwaBjkbLAH59tmLVCjB9I9DoP8rguZ0NfkTIifbbJKMImrhCxTq9NEu9amzJ715vaPd4wvEhRv3rqM8JqWeom942qQ1tbu/jMF+MnLNQrlHpP4eeVN2W/pdQ7L5QHLaTGCmaoiBXhvLZs2ZKOkbw3iDcLFe4J7x5gggw0AoozdUvv1o2ZgRWFg0iwg0cNPBeSppWBgnYhbRzu8SD4RPjz1R3XQPjtIO8UYQHCWJ0pdLvd2+fPn1/cEenQUey9uvsRqkUZGvDgqVuS76Q9VvxyaNzymzL6I/gGfzyg977ru/GGxtXCorGQ8QZ1gFFUXnZUZMDeoLoybx4mWoF8phmifp/60P7ajrTt1wrNe0bwCr5gk9wFYczazlQQ+rlghFtAV0/74w6W0gVmmTLIqwazevx0mRCLQYQNofm2yigLFEU9vu+IswgjE/HsVoyYxyOcP7xu9ZTpSlLiELLY+8f1emC7Y8v175sksZ1yhj8OlI4XkPZCPQ9VjCzqfXyX+iWv2M2a1g8SYQAYoR8a0mdrfn4fRI8P0IGXIurxdz3uX5GUG1A2G2UFmqp2wXtH+4iJaxCYhrdzpCK/jajcBjxvRn996vF4trbGDB2VDh2F2S7QD3JvwEPoU+gLI8UVZvlvRdCFxrjgKlYjVkMhPAAGD+QD6VDenvIVqzwABtnrZy6P3au1uVy0wmqhvYaozdP4QhzE30CYJpXfrJXis0mmQ6K8ii54Dc9P4Tkdqtf/+eMws1QLcSFUj2/hzOtCdAXuj4Xm1SqjDErtY9dIm6mS9P3zfOgPq1kwPsWc2X0OmS2PWMEk7OdSzfeqZtPG2iXnjo8f/94S9qs/8Y4iy3cr57lzMjI9MjXTc8qYAhgC8aR45x1DBsgiMMRKEPm3HkX5pry0dCNUrSzFbB4BJhimqCqL0/6KrpnQOhDPNxgl3tJcru/BEFsjMcR/mxlaQ+qcYlaxwtSsSOj0YMkX5LW3w/O5r+SUQyk/5b6SM43uJN+9ywOlO1sqK/mekmtxu/ZQyvslUSdEZ1YyQXQVE6UM2nnDNkkj6MdKtARxbgfNbIBkecsfniTlQditf1J4QCa6jDrKKFazvQfM2WPJJ/gbGuiFFH/hMZYHyO1qqKypfdDf43G5D29t+OayfyF03vaCzR9pZB5FWaPz1G2bBZU1kqjcT6JoN95Gf38R1SD4pbh/Br3y0359+hSuLyjoDo3hVFjTN6enp5+AEY7VLh7VvgUTMfPdUllZ+fVxxx3XaKzrL8kQUfwqIEE3p/2RaDIYgZXON6Bjv9RbSv7Oh2KkLKkX4qQYLzM8dUCIRalSBtRN0Nt3kDb/AJ1fxav7voXLAFplFGF2dCLNPoWaoOg4TOSR7mvg3Vjzz2OHKsmJMzw1pncT48WFjeuutzaYsge7ZOIQIfr3szcsVmOLl86oy5ig52NZt4o0WC2evVby5GbVemQ/5ub3YScs79evn2tjfv5Q6JIzthUUnIaG9AdzMF/WEK9eS/lBY2PjsoEDB1a3Vtco/rfhm9l6iS9Ih+GQDk/kEF0Poj8XRL+J49il3M9uUPOaZK/keNyYRxPRbNDfdISPgrP9jELkPCCbFJINZuIFRJvd3X3BBUrtKcP7PssfjQpNmySdzknSdJBstItsbjfJpkaSdfVkL3uNGlOHk2aGYlzuQh6xxHlZnntmcvb1Vy7etGlTL5PFcueW/PyLwBU5vgI9kDBLcL2wr7T0o9GjRzcdpn6M4n8IkA5frxRixEiiB0H0n0LtGgKJou8OAdPwivxDoLmLKIRRmJEQxsx2TFierRXYtGdHgTUjvkHU2GPJaiPF4hp+YnrWCVp10xDh0UhxOsmVnEpNacNIKiayVqwjS+UG0sAostZJsV++4HYmD/qXdsB6vlYDhqNacsy8M3Xbtm3LzBYLz1/7TZQ6SI4XcX8iLze3iD369ulzGLosiv9V+BYPbwbh8+LYI3gOTJRA9PytM4x2GPGJbJ8Y08G4eRZM8XRofq0ySm9NcxRn9lmsNVnOo2oTCWvSzR5bbDZ5qkhpdFJ95llUP/BSkj56r0s/jWLz3yP7l8+TVquQadPXJmXfj7081RbSmiBVslKaPMcc84qhCCcY5LmGhob7Bg0a1K6ZnCii6AjWE902iOhrNvahnuk0xjuIwUAvxGE8Ju9sVwAWKTcjLOyMgDbXUTzS85gqDpyn1fLanshVHBBmKXHUOO40ahh4cVj8hrxzvzEtX/m5Ulx2u1ZpI63aNESr5VnJA+S6YLrNEPVrMMklubm5W2/4oGT8v8pKJxvzKRK2q187NaWGn6d/UJuaZat7XAv5Gb1ah3jt8bPTl130WtFTQsrA9r1GTXz83vRsfXduzqxdtuOzPY8Y00EW/vTm1Kzn/e7xz+7onWoXgZNRkJV8Y1rWNS31yZRXdw7zoO5mhQZCAU3QJDVpGu0QQlvcu+eeN2aGLFIaMeHj7VZ7melyi4lOMQnBa0UWCWUVbduhKrTodOsPb02cODEwa3P8k/lZOcnmm1rKLxJcijb/nSm9eVcETXyh6B6bWXZqKa5EpRVJVVaTWN2j4JVPW1tX6v/E5pSBKbbZRj9FqotenZb5cVt1umTlLltdoZxhVuQfTIroLhRePRe1grR81azOf2lS1mLj0gPjjOcLLk+0qQP8blUxlb0ypef9fvf4uQWjUhPUC4LaI4XbbTfPfmdiBq+069O/IPx7YHtAE6P3/fHQwa+pXkYJA4b9sPa0yShl7765Pv3+v5WoP23ortUmwc6IIeeYCdR0yqTQqEzGD+0tLb0797El7tKhJzbKKs9s6eLJqWrSjuxL7pPG+mPOLSsr+6t/1dvpliNsdvVPQbmVO+/C35oLFmy29LImrbCoSj/jZHJ1o/uLJ/74wmePazMpf2/TVb4dSzrcHn02Q2eUaqq2bd1nvSqoI4RsGvLIls9/uOkIfWF0Z6WjZ3mdclVzuH4LY5SBc/YkW9T6f0gpJ0ZY+huM67xt+7vc9Nm6HZO+uL7XptD0gx7cOthsku9JcmeFdbRXL75gi9rv2iefyT/7y6vydJ26tMKT4XTKqyLEbxFg4nzcdEYpKG+8xKwqYUcWRcLG+At+XP741gtW/rXvtogRGmnG1n3OoLqYFGJCbpVRjn540x9NQn0GBNI1QjB/mTn12Ee3LD3jrT2TPpzco8ofUFjhPCfGrJ7qd6uKk9fRdEbJnbO5d7yivF/e6EltzkpqjR55xabbsiuNBdxH9BGIaaLRD5JjC4z+2Ej1dRB9FhPi1yqj5Ofnx6ekpn7ouvov3ZX7HyJRXEKu808n57QwJoFeJS+FffFaHmyLzZs39za9+fxE83sLyfz8PJJd0sn512t12pJeO+SvkCSBxAcb3E41hOzqnIo+ssU67fPrhdav3qkZwjyfvnjRy+Ok5h39tu5v4qGxubsg2PzPVWUVcmucoS+9sCE2f7Ohd17hAZfDrLS+TURMW2aPS+u8BC/72Nb6DABDNy1NuHPj4Jr7+gXO6RKXfRUflxzzb4x4GW2kHyqEeBl3fe2krM7tqmjs2OYBDMyBj5O2lztcov3L+YMQ9X0xduVAuTxcKhYecF4Uti1NyBH22zf3rH/wyN2RMrTduG4S3u2bou09BaeIsqZ3xUWZp0ifZCmqcDYpSnMyoU9M8d7qNQn2LuYPEMn4YjVIiWlNjxz9emjGvDMYqtfyuBB/cNy6SIsKMPyLQ/1aZBTeSDhg4EDebjIarEye44aRe+I5pCUnh0blXY5T++bmvs2OzQUFg0xm8yd4THOdeya5TzmRTN/9QMqu3eTJzlqzYf36m/JCDPVKNzmcjcFfZxe7bO4zXip6KNasnNlgCGtyy0ULL3nlLD+TMOodwSKbQhac6p0Rv/w+V1z7wxj51JAVTqdLOpWg9xi+7zAheXadwxPKJLzQygc7wDbUt0D4pVo3iMk5uE8PxIy1TKxzaEYmKSZNXolBsBz9exZe/22GsJPFX9b0kc8OK3C6nJrTI4xEyxVVKRieoDpLLdDgBldo31AJctiiG5aCWCXrb6g340g6wj6CfBIpUOiVPwwDtfSncCjkaGAdfFZogLhiVTpZYv5JwevKsEtpMXx4Onc8ebcn+XESXfUdL5LqX2g2usM20GpgYhMdFfcOBs6jDP5u5Pkn+fSQtyPUT0foxkjGYflwC0zyAG7j9NplQpWuqSXrjbeR87KLyTP82OZhV8qZfibZWFCQYyFahkddJ2bmML/4Cu57qOmFZ/lNzjbq335UuDXHQS1kwJEHL6ryKLdWeZrb4vZo7337l9fPNzKJjrY/amoB8il0/GA60t5KHARdtTqZTLarg5PK+bRv52T5jrc94prvppGivGxINVlct+Za+eSwGp9HbkgZjeR2rJfPjeCR+Btx3fe8RzgxEGrWdHtOzj3mO9K/cfTles13uSgnPygnTTtPPj30fYqE0A+vJH0knxxyeSC/69acQkL9JCRS97B8LHJGy50kLhbKrHvD3osthu0+u8HHQx7tZNT1Cz3VJSuTKCHuRzxmGurHtuq/vdlSeJH94+bC71SDDw8if5JPtMwkhwMRGQUq1xChKDca/VzTppBp2mVkvXs2yW7p5DlxNMkjj9iW6nAvcXTtmiNsNpOtoWER7SnupG7cTOrqr2Eyb9DTOh68l6SquveVln4Wadq3tElgQA+j/Yek4bMhGHofFFe/Gc4kDFtrGiQkoC10AA6gPx2TdAVG9rUUqvsZEWs/lZSgQ4MwLrru8jOJDpf6JiWou4LiOAxjQoypNOSt9yFbXKG4df0aMN0XZFVXksO10sBYkWHFpXbgw1RrSNxQWWkxH/BvJwrALYNsFFYbKdVu1LdrkM+XaM4EnzuTbj6TVcVgW8VqmhDkJrlEzhnyRcD14uhqcetaDEDq6OYoWllz+rA9/0fjGhaUpSYvkw8P+q8yCSNyjysKH/kZRF2yUyq5LryAzC+9SqK0jExv6HXLxVv9Xtx7H8+eSJsWKhYwhIwYTp6h+jFTrDdHnA0qbnQ1iXBCDS5fanlUf06ML59gWEMYwTg7xpqiOYxRmBgTfJFZZbi4VZESY+odlv7ho7fR416eFXetH0adLcPC0lli2aj0rvC6m94gexwPPpmGGFyx4b6Lj4pwiLs3/BvW+F3y/gGRDWqrla3aYD/ZyqFCVv2oVWPkkeKuDc96K05xFGMeF5LZCjmn//dBXt0SeA3CqOJ/iDHsY0irZkaQKq90BzOKTe0Vkve3FAI5ZzBPuiyKWPeYMPI0R4jF/f5KBP/DirCa+NSnUyNFdp9/Lpk+WaYzihH6zmYpwynNZiPXVVfojzAoE48//vjzXS7XxoqKiu3p6enNW5ltCjNaG1VVjqDu6jNk1Pv9CGOUtsK1mSQU/6osb18L06+DYFGTQvioXhqnMq3m8WjgPWHpJF1HPkaRjx5XKe7ceCzFqFwWz/BFmnFheXE+rvHivo0nyjv7/RBeF1ymkPaEj0+GHMNe8RG+KxySllCD56LwPNQZweXJd6hRW4W2eL/19+JMtK+L9E1giFmwJSxp1pACOnYCikVtdfzy4Upx/+bP5R1HLuhQ3h1EOMtq2umkKBGrJ81mcl5zJVlvv6tdmbum/4m0tM7etGCm2tras5KSklLT0tJ6OhyOjVardaceaDO31CE8zRtvcE8Tz+38XF6RFTyChDIChUgUJSTcLZeSqi5Amf4pw0GtNsSqVISoAJ3ErLWxcuZgL7O3pPqFrPv4iOgK8be1t5Kwn0w8syUE37NCUqLN6kO4nxxeF4s+JxuM1hilRbUzEk4ki8LrDYFd4uKRrYORxxBDnGraU7hUPnmqQzyyjQ3+k3z+ZvJ+pKafnyxnjnYjnA94MK7hGKWpN/+HtuaCCpunQCU55M19l+nPkRnFSd4XbGTCf4pHNq2TNx21oyON7QjC3rBqMp3S2te6rEZ5Rh5P6qqvWs1Y5mST+5ygXd50sLZ2WHJyMqsUFpPJpDqdTqvFYsmPbEPIuTD8XgRB87fhRvvgGfHC7jXy0p5bAj5hhBoiUsLCdUL7K+4sOUNnDcNhM30TwihmsibyTM8zusuq8outRxzW44eEJhcP58djMLg74BGTxKPyW/K6XrpRLeZuh+6tvEBeHdzfhAGh+XjL4tLbsDuC6x4a9xNI1LneiolkXDzq+Q1HnkB4XszanClnHun0lmeeEdJ2C/XJ/V7MLeS8Q9ZF5GWwbR8JSFur6SsQupEIzkLetwTyZtgtTyGOUf3bjMs7oxWjH0ZmLADptIkkoV0ImmPwTwTlvo1+HCmv7u1opTcOGUG92NTU1BMqUsTVSiOcV/1Zi13zvUc6nZF0Rm+c665mAz7Iz+V0ZlVVVeX6mKWvinAwS+QhTzpmy0t6l4uXimeDru8zhNjJJN4RTxQfK6/P8G61b0310qezQ3V6jeTlvYvF8ztngwja/l6ksvhL6pbFX0bmGHwfEfN22tGA+WSyFpIij0IxR4bYA95bw9v1lDSNF0WN61gsaqfrsa7uvU7M28V9crQhPGw6UwfbKKEHArc2yRneN7vl5TkBm0D8Y+d+UoTRtuhK3WJY718lnt0cRzb7hcEZ6CpjvxZKy6XnCnnnrddgt6m8wdDIKFnUzf6O+PuOO0kV5dBcpiNOqI3UPANnDWOUH+WMnA/FBQs+opOGcr4jDGHHoG3MPGG/PXM4EMQoZrO5t/R+RtsqRJcuTbF/POur+rfnnxQp3HPSWPIcFVkNrqyqOi3Wbi+DKGFnEpgly6QIxa21MCzu3jGHsnLOQKmGNQzRn5LlU3jw6s6WVlSvSOF+c0pUPgE9mj+JPYpaga5GvFR8ExjhPWp+czz6zoFsnNNyQs2XfqYmXtnzFk+IGkKniVeKj0NV80nIbNQxZI1CvhcxT+620MmJ1hglrG9CoMhv0IYQT8Hf7q8iW8IFaHNC6xmEgY16L6P8Ofvf9NJuJnwjM5yNOp3dQtpqcmrNP31hCWEUnyrLs43ixeLppBJPLRunn69Fn66Q0zI+6GCd20Sgh6qrqxPj4+PtrUX2A8wkkmbPXNO04sv+nr17uwQFwoDntZaWALUurrSs7ILMHj1ehfRiQ7oyO05NLKiJvD3KS6Q7p5EwrUOfGUZkcRk65XN0ypvtqXPEvGcMdolXdvH0JB9G16rZKC/OeB/McjMIhyVQa8fC8ca7zmG+9fW3kD2O1bKBBt88lJoXXrRcSVXiwfa14j+DnJF9EP3IO2ibB0ipeN+pErZ2AtvQEzJiKzfwvF9zWpoonttznbyiRxWrYHiejLf2PuKMptZRjbRnyxk9y9qI5y3mkoztqPct5Fd/veCtHy/inf4op2XubE8+7UWAUWJjY/WjoRQh3O1YrowhSISEW25YUn3jrdOlwWh1TT5fn0puDW6Xq+vuPXsuzOje/Q1FUQoz7GoCGKXFjYTy4qx88fKe29m0DA6guRhZ1mBkcVOwGAltQnDenua46NAV6HDe9mDclBlRvIFZHkV536E8tjf4xRuH4r0o9gHfgT++UVEJ1ENe2fcA1MXhkISwjQTbJmGGLWJtwDWPdhY9ywNEpDpEbI/SqpXiCYkf4fXKdajTyIBT0ED0CSScGBKUVpNvyoszgz6gQ3+8i/643ZDWDFnLtpo+Bc0MI+atPZksnS9FIC/ahkrvetT+PRKemXJ6KHHri2vN5QsR3O6Lez4LicUq2B8M5fNEyGsocywPhOFtPTQEXjRUoG4Y4WNhzB90ezyRNq+RaGwiUVFBorqaqj5eepxyoLJJ7ZZe7C4p9W5DiEcd7TAhPl9BEraBfqWmkIwLt5ddLlfGnpKSaelduuxd9oeUNatWrYoJPRrICDm9x5O4PdlCsK0Ff33EpMjz781xpmXwbM3U1uIE4l6SwWrFSSCQFFI9uaQpCaS591Lxqxtl887bU7wSMAAAC15JREFUJyKm9dpUvOPhATGvqCeZlF6kqFZya7WkOrfJ6b19nxr0bLn8y7K3tdWekLbltR2nx4ktBLVZDvpjY1vxfASrH28q/lHcnaxaJojeTh6tghpcm1sywFH381rN1ztpEHEpI3hnzH8OnVEOHjyYFBcXx0Zaqtli2e9wOMI6V9kBe3XvXhLFpUSNjeRobMq0NDaWmfvmlXj2l3eTLpeiDRpAVFVNgq+de0C+VpLduukSJpLNwpKlpLR0Zkpy8j3Dhg3j01bCNqP9WgEC4cVEw2mNHftmHwzMW1cibiT8PUP+OaMEt5Jfuh4dhc4okCZ+yaLE2mzFdbXhRzwJJ8/MgYFZQ8LNYzGngGHKyGp1mbKzipy1dTmenj2DlW23y7unU79rFLZVgnSbJelAZeXDJlWNy87Ovj8sQhRR/AqgMwikSYXH42Hxd8ButxdTeTmLtCCi9xzRl8TBgyS6dyNlfzm5qqqT7SazWzQ1OcSReflabKzHHReXqzOD1UIyKZG0LmkkU1J09as18HGmLrf7vvyCgiGOxsYrBgwY0KFfoT311FPTzGbzPR1rehS/Y5R/+OGHh/VYnoCNgpG9DIa1FdKl1mQ272O1KDSyTEzULy3He/Jnk9WqpMXFrdXKKzfaPR7LHo/r71JVYqTJdEgH2CLFObaYmBH5+flX5eXltXtLAup8EIz+zw4XGMXvEiaTydl2rA7m6X9obGwsgTTJwmOlzWYrqIvAKKGoczqPSUtM/EZNSuIZ78b48vIvD9bUHNJhbQakCUWZv62gYCGMtevAMDvbSrB48WKWhmvbihdFFIeKAKMkJCRUYlTmL8gqE+LiCmCnjGorMVSm2H3l5cO7pqWxqtSUlpb2fV19/RDk0/r8cPtwJhjmJKhjD9fX1v5t8ODBYefB+jFq1Kj45OTkoOlWyQee1derUCsDDF9XV7d3+fLlgRXvCRMmHLlkyZKtmm/PztChQ81du3btLYT3+Gq0YzeYsGbs2LE2i8WS/vHHHxfh2YQ8+yKvncirLrQu48ePT0F2tk8++STw40mnnXZa1kcffbQz0LAzz+yzcOHCAvjnNTU17UM+1f76oMxGlBW0nrVo0aItCMtEe0oRV//K7/TTT89taGgohNvN+aE+RfzcUln8fPLJJ3eJiYnR13hcLpd0OBy7IrXBX2fUrcIf3r9/f0u3bt06+ds1YsSIGN63hwG2Av3Rm+uIdnvQP3DGpePZifod4PTokx5IV8L97K8P6p/pdrsr0Kf1vrb32r17954NGzY4zzjjjBxh+EyX3yVUqSpOS749Xugnbf/+/QXfffedy9guX1g13tthnRgKWpJFxYsgtmyxsbH5uJehgi1Ou/rR1NjYy7dwyMSmpaakLIVx3sKUXRCQveTf2HNBcrS4P4fPX4qLjx+9devWC/v27RtxMQovLBd53YR68GydRXrPKX4OL4xX83k3Ln8YY4abD73Wt6HgZYyCyvYJCGI6nO+yX3p6Oq+PnIT0OwX/NISqMpMNx0s4As9PgiEngCHfQfimFStW3BapLrCVXuYyQDCDmHDZD325CC/5fRDIXb6G8xaSPOQ5GnW6HHFHQprPgOo7HOXykbJjcOcDBn7Ec+WYMWNmwP0q3stffG3hQ80/Qb14qwlPKS9EubyWUIqyPkTbFoKw7jCWxYSenZ29Ce5lvnom4uJ+Pye0DUifjHy+Rp34C1f9eNWsrKwM1GE9CPwsMMVy9MNRqMP16Iep8HsA10a47wTBz0ffv4bnXLTNgftDCFuJfr4MDFOAMvkooFPhPxfPvHjLX4iy+jwf9eODIgpQDq9r8QZSfQAB4fM+uFW4PvC1vxHx++J98ar/PdCArkW7/oB0W3x58UbEeXQYEcQoVqt1u9PpFChIZGVmPoqCk1pK2BISExN34HqmtThoVD2ufHRoEcpcH3r6RkcBouDt6JPxgnnVONlvyIE4j0U5izESP43ONOPlr/enQdvuxG0iXtiDuBb4pEoK4j+D9K/zyAhCOddQTCcw5DKEz+XwSPUAQRyDfPkb9S+Rln/V6WV/k3GNRH0eA5HdCGLy1/t5+A0AQS1EvvbKysqTVq9ezWst/0BbeLfA//naxm3hOp8J/yG++re2mXM44j2OUfUGf1mdO3fmEboe+U1myYX0XdHuxkiJEXYduuMuhN84bty4bgbpuAt+LyHvK8lLyGzbashvCmhmNdrPu7DXoYw3uQz4vQbm+BxtO4g8LwRjMOPPN5QzHnn18j0Hzfgg3mr4FUNSLvAPOAwwzWxIsf3o38kIzzbkxZspl0JKfmGU5ocLYbuHIfYLIHIdaBS/3CxUgEXaYftpGXRANa4dfNI8ytr6M/yu0CQQIn9jwdJRN/jxQkfghWeiHvwbK1aMdrzd/l1jInS4By+j0FDveJ860OLplQi/C9cOxK3D/Q4w2+u+lyzQ3rNAOO+ibF6xDjQahHA9yilCP4zzMUlr4C3r/q+0WtzEhbqfgwHobRDrc6hHWAej7SPhzyvxvLI5xhiGOvOa2hWIw9JvO94RS07/od270Y6b0I6PkP41fxpWT8HIl+LxdQwEp/v8NsPPgrgs2fgHenirUS9oLcbBh5nDrxqHLlp28X2aEUR7LIlQv+MQ9hOuOw1ByXBnoL5takGHgogfUmD03b1v374DKSkprB7w133dfdLlUH/6ktUsXpwpBUHswAi/FVLn5zpL+EUQ4wvo3E9Rh3Xs4SMCPv+YCe9tdrNUARGzNBiNuw1tZ8bgDX76lgs8F4FILkZ/LAQB9ANBzDJKQoyMg3iURhlf+rxKjFIF+nQjbLizUM67iBf4JTmfjVHPM3dtNQR5v4hyddULaVr8daiqqqoGlHU2l0Xe34jhAZBXx+1oG7dJQx0KkF/YifboJz6maYlvcyx/b3IdpMpDFu8mVp0BICVOwkD6KXnVIR3oi2qUV6sZRj6WHihnElTONagvx+8Jm7DSEP4GpM+XvvacH1KVWh5Uu3TpMg0M/xWX6/Pn3cx8Us29GBA2G+I3cHzcxyKvbJT5Weu92TG0+PE1KshG1tpdu3ZthoGbjheZjo5gUccdyCNrrM/oDTu+QHpPQWHjm0fIGvTdThBZaU1NzV6oAHVgksPZhgBQn6/YkDZ4fclH9bABj84+HfWfwqoERtsP0JHP+SOhY/fCIOyKtH9HnHNxMcHDdNL0DYBws230T7ysHRhxR4ABrkB+fI6X8QtEZrrL8eJ19Q4EuZB/qoKfkc/TP/zwgwd319ChQyeiP4O/GCR6AsQd+q38i9xnfgeqMw+j8T5D+KNgPv8Xg0/CcK71xeOytNCy2GhGO29AW3r64jGz3E0hgH/F3r17H4WRrE+eYADYAqbgc8F468yr7Adi34728V63wGcBINoDGGD/bswLfi/DT//8F215CjRkfPGv82SC38F9jzgHfHV4XvAPSGHg8YXF+u5PoZ11eJ8foi0e1GsMvN9EPLa7RvJ788WrosOMNk8pyMzMZFWjyHd9VVZWFsu7jKHvx6CCFv9F/Jsl3iP2Xaiog2fQMJLX8ye/PPIiPuvJh7v+QeCRK8T9tf/ZNwvykM/5XEg8ozts1y6In39YRycS3wzVQxHifGp0Y+Rnwtrme/6H359naXALIqiQ8v35vR7iDvqqE2nmRkrPdk9LZSHeq6HlRCj32RD3YoMzcIgD2sREHiD0ZcuWMZG/YEy7dOnSwDYdg0Tw1+Udoxv5BdbBUObLkepm7Eek/8jwvIK8v7L1X0OHfmee4fvWvcWpWiMw8tIv8NumUURx2NFhRokiiv9FRBkliijagSijRBFFOxBllCiiaAeijBJFFO1AlFGiiKIdiDJKFFG0A1FGiSKKdiDKKFFE0Q5EGSWKKNqBKKNEEUU78P9zEzCI72l9hAAAAABJRU5ErkJggg==";
        this.arrow = false;
        this.a = true;
    }
    EsimCustomerCaDetailsPage.prototype.ngOnInit = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        this.currentdate = today;
    };
    EsimCustomerCaDetailsPage.prototype.scrollToTop = function () {
        this.content.scrollToTop(500);
    };
    EsimCustomerCaDetailsPage.prototype.scrollToBottom = function () {
        this.content.scrollToBottom(500);
    };
    EsimCustomerCaDetailsPage.prototype.logScrolling = function (ev) {
        if (ev.detail.scrollTop > 2) {
            this.arrow = true;
        }
        if (ev.detail.scrollTop < 2) {
            this.arrow = false;
        }
    };
    EsimCustomerCaDetailsPage.prototype.assigndealer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var selectdata, arr, i, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectdata = this.myGrid.getselectedrowindexes();
                        arr = [];
                        for (i = 0; i < selectdata.length; i++) {
                            arr.push({
                                imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
                            });
                        }
                        return [4 /*yield*/, this.modalController.create({
                                component: _assign_dealer_assign_dealer_component__WEBPACK_IMPORTED_MODULE_8__["AssignDealerComponent"],
                                cssClass: "simupdateform",
                                componentProps: {
                                    value: arr,
                                },
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data == "Stock Assigned Successfully") {
                                _this.show = false;
                                _this.data = data.data.data;
                                _this.getdatas(1);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Bulk Renewal Request
    EsimCustomerCaDetailsPage.prototype.customerrenewalrequest = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _customer_renewal_request_customer_renewal_request_component__WEBPACK_IMPORTED_MODULE_13__["CustomerRenewalRequestComponent"],
                            cssClass: "renewalrequest",
                            componentProps: {},
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "Renewal Request Saved Successfully") {
                                _this.show = false;
                                _this.imei = data.data.imei;
                                _this.bulkconfirmModel();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EsimCustomerCaDetailsPage.prototype.bulkconfirmModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1, alert_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.companyId == "apm-sa")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: "Message",
                                backdropDismiss: false,
                                message: "Renewal Request Saved Successfully",
                                buttons: [
                                    {
                                        text: "Cancel",
                                        role: "cancel",
                                        handler: function (data) {
                                            _this.getdatas();
                                            _this.myGrid.clearselection();
                                            _this.selectedRow = "";
                                        },
                                    },
                                    {
                                        text: "Ok",
                                        handler: function (data) {
                                            _this.bukinvoicepop();
                                        },
                                    },
                                ],
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.alertController.create({
                            header: "Message",
                            backdropDismiss: false,
                            message: "Renewal Request Saved Successfully",
                            buttons: [
                                {
                                    text: "Ok",
                                    handler: function (data) {
                                        _this.getdatas();
                                        _this.myGrid.clearselection();
                                        _this.selectedRow = "";
                                    },
                                },
                            ],
                        })];
                    case 4:
                        alert_2 = _a.sent();
                        return [4 /*yield*/, alert_2.present()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    EsimCustomerCaDetailsPage.prototype.bukinvoicepop = function () {
        var _this = this;
        if (this.zohocount != 0) {
            var selectdata = this.imei;
            var arr = [];
            for (var i = 0; i < selectdata.length; i++) {
                arr.push({
                    imei: selectdata[i].imei,
                    renewalno: "1",
                });
            }
            var data;
            data = {
                headerid: "",
                dealerid: localStorage.getItem("companyId"),
                invoiceno: "",
                invoicedate: this.currentdate,
                invoiceamount: "",
                noofunits: selectdata.length,
                imeinos: arr,
                createdby: localStorage.getItem("userName"),
            };
            this.header = data;
            this.commonService.presentLoader();
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/getrenewalzohobookproductdetails";
            this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
                _this.commonService.dismissLoader();
                if (Array.isArray(res)) {
                    _this.invoicedata = res;
                    _this.bulkinvoice();
                }
                else if (res.message) {
                    _this.commonService.showConfirm(res.message);
                }
            });
        }
        else {
            this.getdatas();
            this.myGrid.clearselection();
            this.selectedRow = "";
        }
    };
    EsimCustomerCaDetailsPage.prototype.bulkinvoice = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_19__["GenerateInvoiceComponent"],
                            cssClass: "invoiceform",
                            componentProps: {
                                value: this.invoicedata,
                                head: this.header,
                                buttonname: "Renewal",
                            },
                            backdropDismiss: false,
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "Invoice Details Saved Successfully") {
                                _this.getdatas();
                                _this.commonService.showConfirm("Invoice Details Saved Successfully");
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // Extend For One Year
    EsimCustomerCaDetailsPage.prototype.requestoneyearModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Confirm",
                            backdropDismiss: false,
                            message: "Are you sure you want to Extend 1 Year ?",
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                    handler: function (data) { },
                                },
                                {
                                    text: "Ok",
                                    handler: function (data) {
                                        _this.requestForoneyeartop();
                                    },
                                },
                            ],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EsimCustomerCaDetailsPage.prototype.requestForoneyeartop = function () {
        var _this = this;
        this.commonService.presentLoader();
        var selectdata = this.myGrid.getselectedrowindexes();
        var arr = [];
        var isSameDealerId = true; // Assume all dealerids are the same initially
        if (selectdata.length > 1) {
            // Check dealerid equality only if there are multiple selected rows
            for (var i = 1; i < selectdata.length; i++) {
                if (this.myGrid["attrSource"]["originaldata"][selectdata[i]].dealerid !=
                    this.myGrid["attrSource"]["originaldata"][selectdata[0]].dealerid) {
                    isSameDealerId = false; // Not all dealerids are the same
                    break; // Exit the loop early as there's no need to check further
                }
            }
        }
        if (isSameDealerId && selectdata.length > 0) {
            // Continue and hit the API only when all dealerids are the same and at least one item is selected
            for (var i = 0; i < selectdata.length; i++) {
                arr.push({
                    extendoneyearrequestid: "",
                    iccidno1: this.myGrid["attrSource"]["originaldata"][selectdata[i]].iccidno1,
                    iccidno2: this.myGrid["attrSource"]["originaldata"][selectdata[i]].iccidno2,
                    vltdsno: this.myGrid["attrSource"]["originaldata"][selectdata[i]].vltdsno,
                    imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
                    extendoneyearrequestdate: "",
                    extendoneyearvalidity: "1 Year",
                    createdby: localStorage.getItem("userName"),
                    createddate: "",
                    updatedby: localStorage.getItem("userName"),
                    updateddate: "",
                });
            }
            this.commonService.dismissLoader();
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                "/esim/saveEsimExtendOneYearRequest?companyid=apm&dealerid=" +
                localStorage.getItem("userName");
            this.ajaxService.ajaxPostWithBody(url, arr).subscribe(function (res) {
                _this.commonService.dismissLoader();
                if (res.message == "Extend One Year Request Saved Successfully") {
                    _this.extendconfirmModel();
                }
                else {
                    _this.commonService.showConfirm(res.message);
                }
            });
        }
        else {
            this.commonService.dismissLoader();
            this.commonService.showConfirm("The Selected Imei has been different Dealer ID, Kindly Select the Same Dealer ID");
        }
    };
    EsimCustomerCaDetailsPage.prototype.extendconfirmModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_3, alert_4;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.companyId == "apm-sa")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: "Message",
                                backdropDismiss: false,
                                message: "Extend One Year Request Saved Successfully",
                                buttons: [
                                    {
                                        text: "Cancel",
                                        role: "cancel",
                                        handler: function (data) {
                                            _this.getdatas();
                                            _this.myGrid.clearselection();
                                            _this.selectedRow = "";
                                        },
                                    },
                                    {
                                        text: "Ok",
                                        handler: function (data) {
                                            _this.invoicepop();
                                        },
                                    },
                                ],
                            })];
                    case 1:
                        alert_3 = _a.sent();
                        return [4 /*yield*/, alert_3.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.alertController.create({
                            header: "Message",
                            backdropDismiss: false,
                            message: "Extend One Year Request Saved Successfully",
                            buttons: [
                                {
                                    text: "Ok",
                                    handler: function (data) {
                                        _this.getdatas();
                                        _this.myGrid.clearselection();
                                        _this.selectedRow = "";
                                    },
                                },
                            ],
                        })];
                    case 4:
                        alert_4 = _a.sent();
                        return [4 /*yield*/, alert_4.present()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    EsimCustomerCaDetailsPage.prototype.invoicepop = function () {
        var _this = this;
        if (this.zohocount != 0) {
            var selectdata = this.myGrid.getselectedrowindexes();
            var arr = [];
            for (var i = 0; i < selectdata.length; i++) {
                arr.push({
                    imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
                });
            }
            var data;
            data = {
                headerid: "",
                dealerid: this.myGrid["attrSource"]["originaldata"][selectdata[0]].dealerid,
                invoiceno: "",
                invoicedate: this.currentdate,
                invoiceamount: "",
                noofunits: selectdata.length,
                imeinos: arr,
                createdby: localStorage.getItem("userName"),
            };
            this.header = data;
            this.commonService.presentLoader();
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/getextendoneyearzohobookproductdetails";
            this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
                _this.commonService.dismissLoader();
                if (Array.isArray(res)) {
                    _this.invoicedata = res;
                    _this.invoice();
                }
                else if (res.message) {
                    _this.commonService.showConfirm(res.message);
                }
            });
        }
        else {
            this.getdatas();
            this.myGrid.clearselection();
            this.selectedRow = "";
        }
    };
    EsimCustomerCaDetailsPage.prototype.invoice = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_19__["GenerateInvoiceComponent"],
                            cssClass: "invoiceform",
                            componentProps: {
                                value: this.invoicedata,
                                head: this.header,
                                buttonname: "Extend",
                            },
                            backdropDismiss: false,
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "refresh") {
                                _this.getdatas();
                            }
                            else if (data.data.data == "Invoice Details Saved Successfully") {
                                _this.getdatas();
                                _this.commonService.showConfirm("Invoice Details Saved Successfully");
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // Topup Request
    EsimCustomerCaDetailsPage.prototype.TopupCheck = function () {
        var _this = this;
        var selectdata = this.myGrid.getselectedrowindexes();
        var arr = [];
        for (var i = 0; i < selectdata.length; i++) {
            arr.push({
                imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
            });
        }
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/saveEsimTopupCheck";
        this.ajaxService.ajaxPostWithBody(url, arr).subscribe(function (res) {
            if (res.message == "Success") {
                _this.requestForTopUp();
            }
            else {
                _this.commonService.showConfirm(res.message);
            }
        });
    };
    EsimCustomerCaDetailsPage.prototype.requestForTopUp = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var selectdata, arr, i, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectdata = this.myGrid.getselectedrowindexes();
                        arr = [];
                        for (i = 0; i < selectdata.length; i++) {
                            arr.push({
                                topuprequestid: "",
                                iccidno1: this.myGrid["attrSource"]["originaldata"][selectdata[i]].iccidno1,
                                iccidno2: this.myGrid["attrSource"]["originaldata"][selectdata[i]].iccidno2,
                                vltdsno: this.myGrid["attrSource"]["originaldata"][selectdata[i]].vltdsno,
                                imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
                                topuprequestdate: "",
                                createdby: localStorage.getItem("userName").toString(),
                                createddate: null,
                                updatedby: localStorage.getItem("userName").toString(),
                                updateddate: null,
                            });
                        }
                        return [4 /*yield*/, this.modalController.create({
                                component: _esim_topup_popup_esim_topup_popup_component__WEBPACK_IMPORTED_MODULE_16__["EsimTopupPopupComponent"],
                                cssClass: "validityform",
                                componentProps: {
                                    value: arr,
                                },
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "Topup Request Saved Successfully") {
                                _this.show = false;
                                _this.data = data.data.data;
                                _this.topupconfirmModel();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EsimCustomerCaDetailsPage.prototype.topupconfirmModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_5, alert_6;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.companyId == "apm-sa")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: "Message",
                                backdropDismiss: false,
                                message: "Topup Request Saved Successfully",
                                buttons: [
                                    {
                                        text: "Cancel",
                                        role: "cancel",
                                        handler: function (data) {
                                            _this.getdatas();
                                            _this.myGrid.clearselection();
                                            _this.selectedRow = "";
                                        },
                                    },
                                    {
                                        text: "Ok",
                                        handler: function (data) {
                                            _this.topupinvoicepop();
                                        },
                                    },
                                ],
                            })];
                    case 1:
                        alert_5 = _a.sent();
                        return [4 /*yield*/, alert_5.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.alertController.create({
                            header: "Message",
                            backdropDismiss: false,
                            message: "Topup Request Saved Successfully",
                            buttons: [
                                {
                                    text: "Ok",
                                    handler: function (data) {
                                        _this.getdatas();
                                        _this.myGrid.clearselection();
                                        _this.selectedRow = "";
                                    },
                                },
                            ],
                        })];
                    case 4:
                        alert_6 = _a.sent();
                        return [4 /*yield*/, alert_6.present()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    EsimCustomerCaDetailsPage.prototype.topupinvoicepop = function () {
        var _this = this;
        if (this.zohocount != 0) {
            var selectdata = this.myGrid.getselectedrowindexes();
            var arr = [];
            for (var i = 0; i < selectdata.length; i++) {
                arr.push({
                    imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
                });
            }
            var data;
            data = {
                headerid: "",
                dealerid: this.myGrid["attrSource"]["originaldata"][selectdata[0]].dealerid,
                invoiceno: "",
                invoicedate: this.currentdate,
                invoiceamount: "",
                noofunits: selectdata.length,
                imeinos: arr,
                createdby: localStorage.getItem("userName"),
            };
            this.header = data;
            this.commonService.presentLoader();
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/gettopupzohobookproductdetails";
            this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
                _this.commonService.dismissLoader();
                if (Array.isArray(res)) {
                    _this.invoicedata = res;
                    _this.topupinvoice();
                }
                else if (res.message) {
                    _this.commonService.showConfirm(res.message);
                }
            });
        }
        else {
            this.getdatas();
            this.myGrid.clearselection();
            this.selectedRow = "";
        }
    };
    EsimCustomerCaDetailsPage.prototype.topupinvoice = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_19__["GenerateInvoiceComponent"],
                            cssClass: "invoiceform",
                            componentProps: {
                                value: this.invoicedata,
                                head: this.header,
                                buttonname: "Topup",
                            },
                            backdropDismiss: false,
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "refresh") {
                                _this.getdatas();
                            }
                            else if (data.data.data == "Invoice Details Saved Successfully") {
                                _this.getdatas();
                                _this.commonService.showConfirm("Invoice Details Saved Successfully");
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // Renewal Request
    EsimCustomerCaDetailsPage.prototype.requestMethod = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var selectdata, arr, i, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectdata = this.myGrid.getselectedrowindexes();
                        arr = [];
                        for (i = 0; i < selectdata.length; i++) {
                            arr.push({
                                renewalrequestid: "",
                                iccidno1: this.myGrid["attrSource"]["originaldata"][selectdata[i]].iccidno1,
                                iccidno2: this.myGrid["attrSource"]["originaldata"][selectdata[i]].iccidno2,
                                vltdsno: this.myGrid["attrSource"]["originaldata"][selectdata[i]].vltdsno,
                                imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
                                renewalrequestdate: "",
                                createdby: this.myGrid["attrSource"]["originaldata"][selectdata[i]].createdby,
                                createddate: null,
                                updatedby: this.myGrid["attrSource"]["originaldata"][selectdata[i]].createdby,
                                updateddate: null,
                            });
                        }
                        return [4 /*yield*/, this.modalController.create({
                                component: _request_page_request_page_component__WEBPACK_IMPORTED_MODULE_17__["RequestPageComponent"],
                                cssClass: "validityform",
                                componentProps: {
                                    value: arr,
                                },
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "Renewal Request Saved Successfully") {
                                _this.show = false;
                                _this.renewalconfirmModel();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EsimCustomerCaDetailsPage.prototype.renewalconfirmModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_7, alert_8;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.companyId == "apm-sa")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: "Message",
                                backdropDismiss: false,
                                message: "Renewal Request Saved Successfully",
                                buttons: [
                                    {
                                        text: "Cancel",
                                        role: "cancel",
                                        handler: function (data) {
                                            _this.getdatas();
                                            _this.myGrid.clearselection();
                                            _this.selectedRow = "";
                                        },
                                    },
                                    {
                                        text: "Ok",
                                        handler: function (data) {
                                            _this.renewalinvoicepop();
                                        },
                                    },
                                ],
                            })];
                    case 1:
                        alert_7 = _a.sent();
                        return [4 /*yield*/, alert_7.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.alertController.create({
                            header: "Message",
                            backdropDismiss: false,
                            message: "Renewal Request Saved Successfully",
                            buttons: [
                                {
                                    text: "Ok",
                                    handler: function (data) {
                                        _this.getdatas();
                                        _this.myGrid.clearselection();
                                        _this.selectedRow = "";
                                    },
                                },
                            ],
                        })];
                    case 4:
                        alert_8 = _a.sent();
                        return [4 /*yield*/, alert_8.present()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    EsimCustomerCaDetailsPage.prototype.renewalinvoicepop = function () {
        var _this = this;
        if (this.zohocount != 0) {
            var selectdata = this.myGrid.getselectedrowindexes();
            var arr = [];
            for (var i = 0; i < selectdata.length; i++) {
                arr.push({
                    imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
                    renewalno: "1",
                });
            }
            var data;
            data = {
                headerid: "",
                dealerid: this.myGrid["attrSource"]["originaldata"][selectdata[0]].dealerid,
                invoiceno: "",
                invoicedate: this.currentdate,
                invoiceamount: "",
                noofunits: selectdata.length,
                imeinos: arr,
                createdby: localStorage.getItem("userName"),
            };
            this.header = data;
            this.commonService.presentLoader();
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/esim/getrenewalzohobookproductdetails";
            this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
                _this.commonService.dismissLoader();
                if (Array.isArray(res)) {
                    _this.invoicedata = res;
                    _this.renewalinvoice();
                }
                else if (res.message) {
                    _this.commonService.showConfirm(res.message);
                }
            });
        }
        else {
            this.getdatas();
            this.myGrid.clearselection();
            this.selectedRow = "";
        }
    };
    EsimCustomerCaDetailsPage.prototype.renewalinvoice = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_19__["GenerateInvoiceComponent"],
                            cssClass: "invoiceform",
                            componentProps: {
                                value: this.invoicedata,
                                head: this.header,
                                buttonname: "Renewal",
                            },
                            backdropDismiss: false,
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "refresh") {
                                _this.getdatas();
                            }
                            else if (data.data.data == "Invoice Details Saved Successfully") {
                                _this.getdatas();
                                _this.commonService.showConfirm("Invoice Details Saved Successfully");
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EsimCustomerCaDetailsPage.prototype.customFilter = function (c) {
        this.color = c;
        if (this.color != undefined) {
            this.getdatas();
        }
    };
    EsimCustomerCaDetailsPage.prototype.getdatas = function (d) {
        var _this = this;
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/esim/getDealerCAStatusAll?companyid=" +
            localStorage.getItem("corpId") +
            "&invoiceno=" +
            "&serialno=" +
            "&dealer=" +
            localStorage.getItem("userName");
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            if (d == 1) {
                _this.commonService.showConfirm(_this.data);
                _this.data = undefined;
            }
            if (_this.color != undefined) {
                var fData = res.filter(function (d) {
                    return d.rowcolor == _this.color;
                });
                _this.tableData = fData;
                _this.color = undefined;
            }
            else {
                _this.tableData = res;
            }
            _this.commonService.dismissLoader();
            _this.renderer = function (row, column, value) {
                var data = _this.myGrid.getrowdata(row);
                _this.rowColor = data.rowcolor;
                if (value == "" || null || undefined || value == ",") {
                    if (_this.rowColor == "orange") {
                        var val = "background-color : orange";
                        var col = "white;";
                    }
                    if (_this.rowColor == null) {
                        var col = "darkblue";
                    }
                    if (_this.rowColor == "yellow") {
                        var col = "darkblue;";
                        var val = "background-color : yellow";
                    }
                    if (_this.rowColor == "red") {
                        var col = "white;";
                        var val = "background-color : red";
                    }
                    if (_this.rowColor == "blue") {
                        var col = "white;";
                        var val = "background-color : blue";
                    }
                    return ('<div style="height:100%;font-size:11px;color:' +
                        col +
                        "margin:auto;" +
                        "padding:10px;" +
                        "" +
                        val +
                        '">' +
                        "--" +
                        "</div>");
                }
                else {
                    if (_this.rowColor == "orange") {
                        var col = "white;";
                        var val = "background-color : orange";
                    }
                    if (_this.rowColor == null) {
                        var col = "darkblue";
                    }
                    if (_this.rowColor == "yellow") {
                        var col = "darkblue;";
                        var val = "background-color : yellow";
                    }
                    if (_this.rowColor == "red") {
                        var col = "white;";
                        var val = "background-color : red";
                    }
                    if (_this.rowColor == "blue") {
                        var col = "white;";
                        var val = "background-color : blue";
                    }
                    return ('<div style="height:100%;font-size:11px;color:' +
                        col +
                        ";margin:auto;" +
                        "padding:10px;" +
                        "" +
                        val +
                        '">' +
                        value +
                        "</div>");
                }
            };
            //   if (value == "" || null || undefined) {
            //     return (
            //       '<span style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
            //       "--" +
            //       "</span>"
            //     );
            //   } else {
            //     return (
            //       '<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
            //       value +
            //       "</span>"
            //     );
            //   }
            // };
            _this.source = { localdata: _this.tableData };
            _this.dataAdapter = new jqx.dataAdapter(_this.source);
            _this.myGrid.horizontalscrollbarstep(["100"]);
            _this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
            _this.myGrid.clearselection();
            _this.columns = [
                {
                    text: "VLTD No",
                    datafield: "vltdsno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
                },
                {
                    text: "Box No",
                    datafield: "serialno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
                },
                {
                    text: "Invoice No",
                    datafield: "invoiceno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
                },
                {
                    text: "ICCID No 1",
                    datafield: "iccidno1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
                },
                {
                    text: "ICCID No 2",
                    datafield: "iccidno2",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
                },
                {
                    text: "IMEI No",
                    datafield: "imei",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
                },
                {
                    text: "SIM 1",
                    datafield: "sim1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "SIM 2",
                    datafield: "sim2",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "Plate No",
                    datafield: "plateno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 125,
                },
                {
                    text: "Contact No",
                    datafield: "contactno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 125,
                },
                {
                    text: "Slot No",
                    datafield: "slotno",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                },
                {
                    text: "Validity Requested",
                    datafield: "validityperiod",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 155,
                },
                {
                    text: "Card Requested Date",
                    datafield: "carequestdate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 155,
                },
                {
                    text: "Card Requested by",
                    datafield: "carequestby",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 155,
                },
                {
                    text: "Current Dealer",
                    datafield: "renewalmessage",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 155,
                },
                {
                    text: "Card Activated Date",
                    datafield: "cardactivationdate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 155,
                },
                {
                    text: "Card End Date",
                    datafield: "cardenddate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                },
                {
                    text: "Card Status",
                    datafield: "cardstatus",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 135,
                },
                {
                    text: "Comment",
                    datafield: "purcomment",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "Created by",
                    datafield: "createdby",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 135,
                },
                {
                    text: "",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                    cellsrenderer: function () {
                        return _this.myPlatform == "desktop"
                            ? "Vehicle"
                            : "<button>Vehicle</button>";
                    },
                    buttonclick: function (row) {
                        _this.checkvehicle();
                    },
                },
                {
                    text: "",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                    cellsrenderer: function () {
                        return _this.myPlatform == "desktop"
                            ? "Certificate"
                            : "<button>Certificate</button>";
                    },
                    buttonclick: function (row) {
                        _this.getmessage();
                    },
                },
                {
                    text: "",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                    cellsrenderer: function () {
                        return _this.myPlatform == "desktop"
                            ? "Comments"
                            : "<button>Comments</button>";
                    },
                    buttonclick: function (row) {
                        _this.CommentModel(row);
                    },
                },
                {
                    text: "",
                    datafield: "history",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                    cellsrenderer: function () {
                        return _this.myPlatform == "desktop"
                            ? "Status History"
                            : "<button>Status History</button>";
                    },
                    buttonclick: function (row) {
                        _this.viewModel(row);
                    },
                },
                {
                    text: "",
                    datafield: "status",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                    cellsrenderer: function () {
                        return _this.myPlatform == "desktop"
                            ? "Dealer Details"
                            : "<button>Dealer Details</button>";
                    },
                    buttonclick: function (row) {
                        _this.openModel(row);
                    },
                },
            ];
        });
    };
    EsimCustomerCaDetailsPage.prototype.getmessage = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/global/getCertificateDetails?imei=" +
            this.selectedRow.imei;
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            if (res.message == "Certificate Already generated") {
                _this.TotalcertificateData = JSON.parse(res.certificatedetails);
                _this.panic = _this.TotalcertificateData.paniccount;
                var detailofqrcode = [];
                detailofqrcode.push(_this.TotalcertificateData.CenterName, "Chassis:" + _this.TotalcertificateData.ChassisNo, "EngineNo:" + _this.TotalcertificateData.EngineNo, "Reg.No:" + _this.TotalcertificateData.RegistraionNo);
                _this.data = detailofqrcode.toString();
                _this.values = _this.data;
                _this.show = true;
                _this.certificateprintpage();
            }
            else if (res.message == "") {
                _this.result = res;
                _this.CertificateModel();
            }
            else {
                _this.commonService.showConfirm(res.message);
            }
        });
    };
    EsimCustomerCaDetailsPage.prototype.clickToDownload = function () {
        // this.generatedcertificate();
        var printWindow = window.open("height=1000,width=900");
        printWindow.document.write("<html>");
        // printWindow.document.write("<body>");
        printWindow.document.write('<body style="background-image: url(https://kingstrackimages.s3.amazonaws.com/Company/apmlogo_watermarker.svg);background-repeat: no-repeat;background-size: 100% 85%;">');
        var divContents = document.getElementById("pdf3").innerHTML;
        printWindow.document.write(divContents);
        printWindow.document.write("</body></html>");
        printWindow.print();
        printWindow.document.close();
    };
    EsimCustomerCaDetailsPage.prototype.certificateprintpage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Certificate",
                            message: "Certificate Already generated",
                            backdropDismiss: false,
                            buttons: [
                                {
                                    text: "Re-Print",
                                    handler: function (data) {
                                        _this.clickToDownload();
                                    },
                                },
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                    handler: function (data) { },
                                },
                            ],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EsimCustomerCaDetailsPage.prototype.CertificateModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isModalOpened, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.getTop()];
                    case 1:
                        isModalOpened = _a.sent();
                        return [4 /*yield*/, this.modalController.create({
                                component: _certificate_creation_certificate_creation_component__WEBPACK_IMPORTED_MODULE_9__["CertificateCreationComponent"],
                                cssClass: "certificateForm",
                                componentProps: {
                                    value: this.result,
                                },
                            })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "Certificate Saved Successfully") {
                                _this.show = false;
                                _this.data = data.data.data;
                                _this.getdatas(1);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EsimCustomerCaDetailsPage.prototype.checkvehicle = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/site/getvehiclevalidation?imei=" +
            this.selectedRow.imei;
        this.ajaxService.ajaxGetPerference(url).subscribe(function (res) {
            if (res.message == "success") {
                _this.confirm();
            }
            else {
                _this.commonService.showConfirm(res.message);
            }
        });
    };
    EsimCustomerCaDetailsPage.prototype.confirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isModalOpened, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.getTop()];
                    case 1:
                        isModalOpened = _a.sent();
                        return [4 /*yield*/, this.modalController.create({
                                component: _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmPopupComponent"],
                                cssClass: "vehiclecreation",
                                componentProps: {
                                    value: this.selectedRow,
                                },
                            })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == 1) {
                                _this.vehiclecreationModel();
                            }
                            else {
                                _this.enduserModel();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EsimCustomerCaDetailsPage.prototype.vehiclecreationModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isModalOpened, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.getTop()];
                    case 1:
                        isModalOpened = _a.sent();
                        return [4 /*yield*/, this.modalController.create({
                                component: _company_creation_company_creation_component__WEBPACK_IMPORTED_MODULE_11__["CompanyCreationComponent"],
                                cssClass: "viewserialfrom",
                                componentProps: {
                                    value: this.selectedRow,
                                },
                            })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "Successfully Presisted") {
                                _this.show = false;
                                _this.data = data.data.data;
                                _this.getdatas(1);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EsimCustomerCaDetailsPage.prototype.enduserModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isModalOpened, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.getTop()];
                    case 1:
                        isModalOpened = _a.sent();
                        return [4 /*yield*/, this.modalController.create({
                                component: _end_user_creation_end_user_creation_component__WEBPACK_IMPORTED_MODULE_15__["EndUserCreationComponent"],
                                cssClass: "viewserialfrom",
                                componentProps: {
                                    value: this.selectedRow,
                                },
                            })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.data == "Added Successfully") {
                                _this.show = false;
                                _this.data = data.data.data;
                                _this.getdatas(1);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EsimCustomerCaDetailsPage.prototype.viewModel = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isModalOpened, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.getTop()];
                    case 1:
                        isModalOpened = _a.sent();
                        return [4 /*yield*/, this.modalController.create({
                                component: _status_details_status_details_component__WEBPACK_IMPORTED_MODULE_18__["StatusDetailsComponent"],
                                cssClass: "viewserialfrom",
                                componentProps: {
                                    value: this.selectedRow,
                                },
                            })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            _this.selectedRow = undefined;
                        });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EsimCustomerCaDetailsPage.prototype.CommentModel = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isModalOpened, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.getTop()];
                    case 1:
                        isModalOpened = _a.sent();
                        return [4 /*yield*/, this.modalController.create({
                                component: _comment_comment_component__WEBPACK_IMPORTED_MODULE_10__["CommentComponent"],
                                cssClass: "simupdateform",
                                componentProps: {
                                    value: this.selectedRow,
                                },
                            })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () { });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EsimCustomerCaDetailsPage.prototype.openModel = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _dealer_details_dealer_details_component__WEBPACK_IMPORTED_MODULE_14__["DealerDetailsComponent"],
                            cssClass: "viewserialfrom",
                            componentProps: {
                                value: this.selectedRow,
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            _this.selectedRow = undefined;
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EsimCustomerCaDetailsPage.prototype.myGridOnRowclick = function (event) {
        this.selectedRow = event.args.row.bounddata;
    };
    EsimCustomerCaDetailsPage.prototype.myGridOnRowSelect = function (event) {
        console.log(event);
        this.selectedRow = this.myGrid.getselectedrowindexes();
        var current = this.myGrid.getselectedrowindex();
        if (current != -1) {
            var currentrow = this.myGrid.getrowdata(current);
            // console.log(currentrow, event);
            if (currentrow.cardstatus == "") {
                if (this.a == true) {
                    this.commonService.showConfirm("Sorry, this action (Renewal, Topup, Extend 1Yr) is only available after the ICCID has been activated. Please activate the ICCID first to proceed.");
                    this.a = false;
                }
                else {
                    this.a = true;
                }
                this.myGrid.unselectrow(current);
                return null;
            }
        }
        var h = document.getElementsByClassName("jqx-checkbox-default");
        h[0].style.display = "none";
        this.selectedRow = this.myGrid.getselectedrowindexes();
        // let current = this.myGrid.getselectedrowindex();
        // if (current != -1) {
        //   let currentrow = this.myGrid.getrowdata(current);
        //   // console.log(currentrow, event);
        //   if (currentrow.renewalmessage) {
        //     this.myGrid.unselectrow(current);
        //     this.commonService.showConfirm("Selected Data is Aleady Renewal");
        //     return null;
        //   }
        // }
        this.selectedRow = this.myGrid.getselectedrowindexes();
        if (this.selectedRow.length > 0) {
            this.renewalbutton = false;
        }
        else {
            this.renewalbutton = true;
        }
        if (event.type == "rowunselect")
            return null;
        // console.log(this.myGrid.getrowdata(this.selectedRow[]));
    };
    // myGridOnRowSelect(event: any) {
    //   let current = this.myGrid.getselectedrowindex();
    //   if (current != -1) {
    //     // let currentrow = this.myGrid.getrowdata(current);
    //     // console.log(currentrow, event);
    //     // if (currentrow.renewalmessage != '') {
    //     //   this.myGrid.unselectrow(current);
    //     //   this.commonService.showConfirm("Selected Data is Aleady Renewal");
    //     //   return null;
    //     // }
    //     let arr = ""
    //     let selectdata = this.myGrid.getselectedrowindexes();
    //     // var arr = [];
    //     for (let i = 0; i < selectdata.length; i++) {
    //       if (this.myGrid["attrSource"]["originaldata"][selectdata[i]].renewalmessage != '') {
    //         this.myGrid.unselectrow(selectdata[i])
    //         arr += this.myGrid["attrSource"]["originaldata"][selectdata[i]].iccidno1
    //       }
    //     }
    //     this.commonService.showConfirm(arr);
    //   }
    //   // console.log(this.myGrid.getrowdata(this.selectedRow[]));
    //   this.selectedRow = this.myGrid.getselectedrowindexes();
    //   if (this.selectedRow.length > 0) {
    //     this.renewalbutton = false;
    //   } else {
    //     this.renewalbutton = true;
    //   }
    //   if (event.type == "rowunselect") return null;
    // }
    EsimCustomerCaDetailsPage.prototype.newfunc = function () {
        var data = this.tableData;
        console.log(this.myGrid);
        var coloumnArray = [];
        this.myGrid.attrColumns.map(function (p) {
            coloumnArray.push(p.datafield);
        });
        for (var i = 0; i < data.length; i++) {
            var k = Object.keys(data[i]);
            for (var j = 0; j < k.length; j++) {
                if (coloumnArray.includes(k[j]) == false) {
                    delete data[i][k[j].toString()];
                }
            }
        }
        var forExcel = [];
        data.map(function (val) {
            var newArray = Object.values(val);
            forExcel.push(newArray);
        });
        var Header = Object.keys(data[0]);
        var reportData = {
            title: "Customer CA Details",
            data: forExcel,
            headers: Header,
        };
        this.ete.exportExcel(reportData);
    };
    EsimCustomerCaDetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.zohocount = localStorage.getItem("zohoInvoice");
        this.getdatas();
        var h = document.getElementsByClassName("jqx-checkbox-default");
        h[0].style.display = "none";
        this.selectedRow = this.myGrid.getselectedrowindexes();
        this.commonService.getData.subscribe(function (d) {
            _this.data = d;
            _this.getdatas(1);
        });
    };
    EsimCustomerCaDetailsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExportExcelService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EsimCustomerCaDetailsPage.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EsimCustomerCaDetailsPage.prototype, "content", void 0);
    EsimCustomerCaDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-esim-customer-ca-details",
            template: __webpack_require__(/*! raw-loader!./esim-customer-ca-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/esim-customer-ca-details.page.html"),
            styles: [__webpack_require__(/*! ./esim-customer-ca-details.page.scss */ "./src/app/delar-application/esim-customer-ca-details/esim-customer-ca-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            src_app_services_export_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExportExcelService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], EsimCustomerCaDetailsPage);
    return EsimCustomerCaDetailsPage;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/esim-topup-popup/esim-topup-popup.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/esim-topup-popup/esim-topup-popup.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 14px;\n  margin: 7px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #ffebcd;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 0px 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jdXN0b21lci1jYS1kZXRhaWxzL2VzaW0tdG9wdXAtcG9wdXAvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcZXNpbS1jdXN0b21lci1jYS1kZXRhaWxzXFxlc2ltLXRvcHVwLXBvcHVwXFxlc2ltLXRvcHVwLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWN1c3RvbWVyLWNhLWRldGFpbHMvZXNpbS10b3B1cC1wb3B1cC9lc2ltLXRvcHVwLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7VUFBQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLFNBQUE7RUNDTjs7RURFRTtJQUNJLFVBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2VzaW0tY3VzdG9tZXItY2EtZGV0YWlscy9lc2ltLXRvcHVwLXBvcHVwL2VzaW0tdG9wdXAtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwtc3R5bGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBtYXJnaW46IDdweDtcbn1cblxuLmNvbnRlbnQtc3R5bGUge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29sLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI2FkZC1pY29uIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmViY2Q7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICAtLWJhY2tncm91bmQ6ICM3YzY4Zjg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuZm9ybS1maWVsZCB7XG4gICAgICAgIHpvb206IDgwJTtcbiAgICB9XG5cbiAgICAjc3VibWl0YnRuIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG59XG5cbi5mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW46IC01cHggNXB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5zZWxlY3RhYmxlLWlucHV0IHtcbiAgICBwYWRkaW5nOiA4cHggMTFweCAwcHggNnB4O1xufSIsIi5sYWJlbC1zdHlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXJnaW46IDdweDtcbn1cblxuLmNvbnRlbnQtc3R5bGUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbiNhZGQtaWNvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZWJjZDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgLS1iYWNrZ3JvdW5kOiAjN2M2OGY4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5zZWxlY3RhYmxlLWlucHV0IHtcbiAgcGFkZGluZzogOHB4IDExcHggMHB4IDZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/esim-topup-popup/esim-topup-popup.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/esim-topup-popup/esim-topup-popup.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: EsimTopupPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsimTopupPopupComponent", function() { return EsimTopupPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var EsimTopupPopupComponent = /** @class */ (function () {
    function EsimTopupPopupComponent(platform, formBuilder, modalController, ajaxService, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.valid = [
            "1 Month",
            "2 Month",
            "3 Month",
            "4 Month",
            "5 Month",
            "6 Month",
            "7 Month",
            "8 Month",
            "9 Month",
            "10 Month",
            "11 Month",
        ];
        this.button = false;
    }
    EsimTopupPopupComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    EsimTopupPopupComponent.prototype.createForm = function () {
        this.requestForm = this.formBuilder.group({
            validity: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    EsimTopupPopupComponent.prototype.submitBtn = function () {
        var _this = this;
        this.button = true;
        var arr = [];
        this.value.map(function (data) {
            arr.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data, { topupvalidity: _this.requestForm.value.validity }));
        });
        this.modalController.dismiss({
            data: "Topup Request Saved Successfully",
        });
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/esim/saveEsimTopupRequest?companyid=apm&dealerid=" +
            localStorage.getItem("userName");
        this.ajaxService.ajaxPostWithBody(url, arr).subscribe(function (res) {
            if (res.message == "Topup Request Saved Successfully") {
                _this.button = false;
                _this.modalController.dismiss({
                    data: res.message,
                });
            }
            else {
                _this.commonService.showConfirm(res.message);
                _this.modalController.dismiss();
                _this.button = false;
            }
        });
    };
    EsimTopupPopupComponent.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.createForm();
    };
    EsimTopupPopupComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EsimTopupPopupComponent.prototype, "value", void 0);
    EsimTopupPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-esim-topup-popup",
            template: __webpack_require__(/*! raw-loader!./esim-topup-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/esim-topup-popup/esim-topup-popup.component.html"),
            styles: [__webpack_require__(/*! ./esim-topup-popup.component.scss */ "./src/app/delar-application/esim-customer-ca-details/esim-topup-popup/esim-topup-popup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], EsimTopupPopupComponent);
    return EsimTopupPopupComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/generate-invoice/generate-invoice.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/generate-invoice/generate-invoice.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  color: white;\n}\n\n.arrow-back {\n  color: white;\n}\n\n.dismiss {\n  font-size: 25px;\n  cursor: pointer;\n}\n\n.dismiss:hover {\n  color: red;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.imei-content {\n  text-align: right;\n  align-self: center;\n  font-size: 18px;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jdXN0b21lci1jYS1kZXRhaWxzL2dlbmVyYXRlLWludm9pY2UvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcZXNpbS1jdXN0b21lci1jYS1kZXRhaWxzXFxnZW5lcmF0ZS1pbnZvaWNlXFxnZW5lcmF0ZS1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWN1c3RvbWVyLWNhLWRldGFpbHMvZ2VuZXJhdGUtaW52b2ljZS9nZW5lcmF0ZS1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxVQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDS0Y7O0FESEE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ01GOztBREpBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ09GOztBRExBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDUUYiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWN1c3RvbWVyLWNhLWRldGFpbHMvZ2VuZXJhdGUtaW52b2ljZS9nZW5lcmF0ZS1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYXJyb3ctYmFjayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5kaXNtaXNzIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kaXNtaXNzOmhvdmVyIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbi5kZWFsZXItbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmltZWktY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIG1hcmdpbjogN3B4O1xyXG59XHJcbi5zZWxlY3RhYmxlLWlucHV0IHtcclxuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4iLCIuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hcnJvdy1iYWNrIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZGlzbWlzcyB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGlzbWlzczpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5kZWFsZXItbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5pbWVpLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgbWFyZ2luOiA3cHg7XG59XG5cbi5zZWxlY3RhYmxlLWlucHV0IHtcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/generate-invoice/generate-invoice.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/generate-invoice/generate-invoice.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: GenerateInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateInvoiceComponent", function() { return GenerateInvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var GenerateInvoiceComponent = /** @class */ (function () {
    function GenerateInvoiceComponent(ajaxService, modalController, platform, alertController, commonService, formBuilder) {
        this.ajaxService = ajaxService;
        this.modalController = modalController;
        this.platform = platform;
        this.alertController = alertController;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.page = [];
        this.visible = false;
    }
    GenerateInvoiceComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss({ data: "refresh" });
    };
    GenerateInvoiceComponent.prototype.createForm = function () {
        this.generateForm = this.formBuilder.group({
            userid: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            imei: [""],
            productnamelist: [""],
        });
    };
    GenerateInvoiceComponent.prototype.clear = function () {
        this.generateForm.patchValue({
            userid: "",
            password: "",
        });
    };
    GenerateInvoiceComponent.prototype.dismiss = function () {
        this.visible = false;
        this.generateForm.patchValue({
            imei: "",
            productnamelist: "",
        });
    };
    GenerateInvoiceComponent.prototype.getdatas = function () {
        var _this = this;
        this.tableData = this.value;
        this.renderer = function (row, column, value) {
            if (value == "") {
                return "--";
            }
            else if (value == "0") {
                return ('<span style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                    0 +
                    "</span>");
            }
            else {
                return ('<span style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                    value +
                    "</span>");
            }
        };
        this.source = { localdata: this.tableData };
        console.log(this.tableData);
        this.dataAdapter = new jqx.dataAdapter(this.source);
        if (this.buttonname == "Renewal") {
            this.columns = [
                {
                    text: "IMEI",
                    datafield: "imei",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "Service Provider",
                    datafield: "serviceprovider",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "Validity Period",
                    datafield: "validityperiod",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "Card Status",
                    datafield: "cardstatus",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 90,
                },
                {
                    text: "Product Name",
                    datafield: "productname",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 300,
                },
                {
                    text: "Purchase Rate",
                    datafield: "purchaserate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 105,
                },
                {
                    text: "Rate",
                    datafield: "rate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 50,
                },
                {
                    text: "",
                    datafield: "Edit",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 60,
                    cellsrenderer: function () {
                        return _this.myPlatform == "desktop"
                            ? "Edit"
                            : "<button>Edit</button>";
                    },
                    buttonclick: function (row) {
                        _this.setValue();
                    },
                },
                {
                    text: "",
                    datafield: "delete",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 60,
                    cellsrenderer: function () {
                        return _this.myPlatform == "desktop"
                            ? "Delete"
                            : "<button>Delete</button>";
                    },
                    buttonclick: function (row) {
                        _this.deleteModel(row);
                    },
                },
            ];
        }
        else {
            this.columns = [
                {
                    text: "IMEI",
                    datafield: "imei",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "Service Provider",
                    datafield: "serviceprovider",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "Validity Period",
                    datafield: "validityperiod",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "Product Name",
                    datafield: "productname",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 300,
                },
                {
                    text: "Purchase Rate",
                    datafield: "purchaserate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 105,
                },
                {
                    text: "Rate",
                    datafield: "rate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 50,
                },
                {
                    text: "",
                    datafield: "Edit",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 60,
                    cellsrenderer: function () {
                        return _this.myPlatform == "desktop"
                            ? "Edit"
                            : "<button>Edit</button>";
                    },
                    buttonclick: function (row) {
                        _this.setValue();
                    },
                },
                {
                    text: "",
                    datafield: "delete",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 60,
                    cellsrenderer: function () {
                        return _this.myPlatform == "desktop"
                            ? "Delete"
                            : "<button>Delete</button>";
                    },
                    buttonclick: function (row) {
                        _this.deleteModel(row);
                    },
                },
            ];
        }
    };
    GenerateInvoiceComponent.prototype.setValue = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/esim/getDealerProduct?dealername=" +
            this.head.dealerid +
            "&serviceprovider=" +
            this.selectedRow.serviceprovider;
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.productnamelist = res;
            _this.visible = true;
            _this.generateForm.patchValue({
                imei: _this.selectedRow.imei,
            });
            var data = _this.productnamelist.filter(function (f) { return f.itemname == _this.selectedRow.productname; });
            _this.product = data[0];
        });
    };
    GenerateInvoiceComponent.prototype.deleteModel = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.selectedRow) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: " Delete",
                                backdropDismiss: false,
                                message: "Are you sure you want to remove?",
                                buttons: [
                                    {
                                        text: "Cancel",
                                        role: "cancel",
                                        handler: function (data) {
                                            _this.myGrid.clearselection();
                                            _this.selectedRow = "";
                                        },
                                    },
                                    {
                                        text: "Ok",
                                        handler: function (data) {
                                            _this.deleteAnalogRow(row);
                                        },
                                    },
                                ],
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.commonService.showConfirm("Please select a row to remove");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GenerateInvoiceComponent.prototype.deleteAnalogRow = function (row) {
        this.tableData.splice(row, 1);
        this.myGrid.updatebounddata();
        this.myGrid.clearselection();
        this.selectedRow = "";
    };
    GenerateInvoiceComponent.prototype.myGridOnRowSelect = function (event) {
        this.selectedRow = event.args.row.bounddata;
    };
    GenerateInvoiceComponent.prototype.save = function () {
        var _this = this;
        var productValue = this.generateForm.get("productnamelist").value;
        var selectedIndex = this.tableData.findIndex(function (row) { return row.imei === _this.selectedRow.imei; });
        this.tableData[selectedIndex].validityperiod = productValue.validityperiod;
        this.tableData[selectedIndex].productid = productValue.itemid;
        this.tableData[selectedIndex].productname = productValue.itemname;
        this.tableData[selectedIndex].rate = productValue.rate;
        this.tableData[selectedIndex].purchaserate = productValue.purchaserate;
        this.tableData[selectedIndex].description = productValue.description;
        this.dismiss();
        this.myGrid.updatebounddata();
        console.log(this.tableData);
    };
    GenerateInvoiceComponent.prototype.submitBtn = function () {
        var _this = this;
        if (this.buttonname == "Extend") {
            var data = this.tableData;
            var arr = [];
            for (var i = 0; i < data.length; i++) {
                arr.push({
                    requestid: this.myGrid["attrSource"]["originaldata"][i].requestid,
                    serviceprovider: this.myGrid["attrSource"]["originaldata"][i].serviceprovider,
                    imei: this.myGrid["attrSource"]["originaldata"][i].imei,
                    cardstatus: this.myGrid["attrSource"]["originaldata"][i].cardstatus,
                    productid: this.myGrid["attrSource"]["originaldata"][i].productid,
                    productname: this.myGrid["attrSource"]["originaldata"][i].productname,
                    purchaserate: parseInt(this.myGrid["attrSource"]["originaldata"][i].purchaserate),
                    rate: parseInt(this.myGrid["attrSource"]["originaldata"][i].rate),
                    description: this.myGrid["attrSource"]["originaldata"][i].description,
                    validityperiod: this.myGrid["attrSource"]["originaldata"][i].validityperiod,
                    pagename: "Extend",
                });
            }
            this.commonService.presentLoader();
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
                "/esim/saveEsimInvoiceApproved?dealername=" +
                this.head.dealerid +
                "&username=" +
                this.generateForm.value.userid +
                "&password=" +
                this.generateForm.value.password;
            this.ajaxService.ajaxPostWithBody(url, arr).subscribe(function (res) {
                _this.commonService.dismissLoader();
                if (res.message == "Invoice Details Saved Successfully") {
                    _this.clear();
                    _this.modalController.dismiss({
                        data: "Invoice Details Saved Successfully",
                    });
                }
                else {
                    _this.commonService.showConfirm(res.message);
                }
            });
        }
        else if (this.buttonname == "Topup") {
            var data = this.tableData;
            var arr = [];
            for (var i = 0; i < data.length; i++) {
                arr.push({
                    requestid: this.myGrid["attrSource"]["originaldata"][i].requestid,
                    serviceprovider: this.myGrid["attrSource"]["originaldata"][i].serviceprovider,
                    imei: this.myGrid["attrSource"]["originaldata"][i].imei,
                    cardstatus: this.myGrid["attrSource"]["originaldata"][i].cardstatus,
                    productid: this.myGrid["attrSource"]["originaldata"][i].productid,
                    productname: this.myGrid["attrSource"]["originaldata"][i].productname,
                    purchaserate: parseInt(this.myGrid["attrSource"]["originaldata"][i].purchaserate),
                    rate: parseInt(this.myGrid["attrSource"]["originaldata"][i].rate),
                    description: this.myGrid["attrSource"]["originaldata"][i].description,
                    validityperiod: this.myGrid["attrSource"]["originaldata"][i].validityperiod,
                    pagename: "Topup",
                });
            }
            this.commonService.presentLoader();
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
                "/esim/saveEsimInvoiceApproved?dealername=" +
                this.head.dealerid +
                "&username=" +
                this.generateForm.value.userid +
                "&password=" +
                this.generateForm.value.password;
            this.ajaxService.ajaxPostWithBody(url, arr).subscribe(function (res) {
                _this.commonService.dismissLoader();
                if (res.message == "Invoice Details Saved Successfully") {
                    _this.clear();
                    _this.modalController.dismiss({
                        data: "Invoice Details Saved Successfully",
                    });
                }
                else {
                    _this.commonService.showConfirm(res.message);
                }
            });
        }
        else if (this.buttonname == "Renewal") {
            var data = this.tableData;
            var arr = [];
            for (var i = 0; i < data.length; i++) {
                arr.push({
                    requestid: this.myGrid["attrSource"]["originaldata"][i].requestid,
                    serviceprovider: this.myGrid["attrSource"]["originaldata"][i].serviceprovider,
                    imei: this.myGrid["attrSource"]["originaldata"][i].imei,
                    renewalno: this.myGrid["attrSource"]["originaldata"][i].renewalno,
                    cardstatus: this.myGrid["attrSource"]["originaldata"][i].cardstatus,
                    productid: this.myGrid["attrSource"]["originaldata"][i].productid,
                    productname: this.myGrid["attrSource"]["originaldata"][i].productname,
                    purchaserate: parseInt(this.myGrid["attrSource"]["originaldata"][i].purchaserate),
                    rate: parseInt(this.myGrid["attrSource"]["originaldata"][i].rate),
                    description: this.myGrid["attrSource"]["originaldata"][i].description,
                    validityperiod: this.myGrid["attrSource"]["originaldata"][i].validityperiod,
                    pagename: "Renewal",
                });
            }
            this.commonService.presentLoader();
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
                "/esim/saveEsimInvoiceApproved?dealername=" +
                this.head.dealerid +
                "&username=" +
                this.generateForm.value.userid +
                "&password=" +
                this.generateForm.value.password;
            this.ajaxService.ajaxPostWithBody(url, arr).subscribe(function (res) {
                _this.commonService.dismissLoader();
                if (res.message == "Invoice Details Saved Successfully") {
                    _this.clear();
                    _this.modalController.dismiss({
                        data: "Invoice Details Saved Successfully",
                    });
                }
                else {
                    _this.commonService.showConfirm(res.message);
                }
            });
        }
    };
    GenerateInvoiceComponent.prototype.confirmModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Confirm",
                            backdropDismiss: false,
                            message: "Are you sure want to Submit?",
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                    handler: function (data) { },
                                },
                                {
                                    text: "Ok",
                                    handler: function (data) {
                                        _this.submitBtn();
                                    },
                                },
                            ],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GenerateInvoiceComponent.prototype.ngAfterViewInit = function () {
        this.myGrid.horizontalscrollbarstep(["70"]);
        this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
    };
    GenerateInvoiceComponent.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        this.currentdate = today;
        this.createForm();
        this.getdatas();
    };
    GenerateInvoiceComponent.ctorParameters = function () { return [
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GenerateInvoiceComponent.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GenerateInvoiceComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GenerateInvoiceComponent.prototype, "buttonname", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GenerateInvoiceComponent.prototype, "head", void 0);
    GenerateInvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-generate-invoice",
            template: __webpack_require__(/*! raw-loader!./generate-invoice.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/generate-invoice/generate-invoice.component.html"),
            styles: [__webpack_require__(/*! ./generate-invoice.component.scss */ "./src/app/delar-application/esim-customer-ca-details/generate-invoice/generate-invoice.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], GenerateInvoiceComponent);
    return GenerateInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/request-page/request-page.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/request-page/request-page.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-style {\n  border: 1px solid #e5e5e5;\n  background: #e8e8e8;\n  line-height: 14px;\n  margin: 7px;\n}\n\n.content-style {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.col-content {\n  text-align: left;\n  align-self: center;\n  font-size: 18px;\n}\n\n#add-icon {\n  --background: #ffebcd;\n  --color: white;\n  font-size: 15px;\n  --border-radius: 5px;\n}\n\n.button {\n  margin-top: 2%;\n  --background: #7c68f8;\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -5px 5px 0px;\n  border-radius: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 0px 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jdXN0b21lci1jYS1kZXRhaWxzL3JlcXVlc3QtcGFnZS9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxlc2ltLWN1c3RvbWVyLWNhLWRldGFpbHNcXHJlcXVlc3QtcGFnZVxccmVxdWVzdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWN1c3RvbWVyLWNhLWRldGFpbHMvcmVxdWVzdC1wYWdlL3JlcXVlc3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxTQUFBO0VDQ0Y7O0VERUE7SUFDRSxVQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWN1c3RvbWVyLWNhLWRldGFpbHMvcmVxdWVzdC1wYWdlL3JlcXVlc3QtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1zdHlsZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIG1hcmdpbjogN3B4O1xyXG59XHJcblxyXG4uY29udGVudC1zdHlsZSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2wtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4jYWRkLWljb24ge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZWJjZDtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIC0tYmFja2dyb3VuZDogIzdjNjhmODtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIHpvb206IDgwJTtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IC01cHggNXB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbi5zZWxlY3RhYmxlLWlucHV0IHtcclxuICBwYWRkaW5nOiA4cHggMTFweCAwcHggNnB4O1xyXG59XHJcbiIsIi5sYWJlbC1zdHlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXJnaW46IDdweDtcbn1cblxuLmNvbnRlbnQtc3R5bGUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbiNhZGQtaWNvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZWJjZDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgLS1iYWNrZ3JvdW5kOiAjN2M2OGY4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICB6b29tOiA4MCU7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogLTVweCA1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5zZWxlY3RhYmxlLWlucHV0IHtcbiAgcGFkZGluZzogOHB4IDExcHggMHB4IDZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/request-page/request-page.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/request-page/request-page.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: RequestPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPageComponent", function() { return RequestPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var RequestPageComponent = /** @class */ (function () {
    function RequestPageComponent(platform, formBuilder, modalController, ajaxService, commonService) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.valid = [
            "1 Month",
            "2 Month",
            "3 Month",
            "4 Month",
            "5 Month",
            "6 Month",
            "7 Month",
            "8 Month",
            "9 Month",
            "10 Month",
            "11 Month",
            "1 Year",
            "2 Year",
        ];
        this.button = false;
    }
    RequestPageComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    RequestPageComponent.prototype.createForm = function () {
        this.requestForm = this.formBuilder.group({
            validity: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    RequestPageComponent.prototype.submitBtn = function () {
        var _this = this;
        this.button = true;
        var arr = [];
        this.value.map(function (data) {
            arr.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data, { validityperiod: _this.requestForm.value.validity }));
        });
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["serverUrl"].web +
            "/esim/saveEsimRenewalRequest?companyid=apm&branchid=apm&dealerid=" +
            localStorage.getItem("userName");
        this.ajaxService.ajaxPostWithBody(url, arr).subscribe(function (res) {
            // if (res) {
            //   res((d) => {
            //     if (d.res.message == "Aleady Renewal") {
            //       this.commonService.showConfirm(
            //         "Unselect the Already Renewaled Data"
            //       );
            //     } else if (d.res.message == "Renewal Request Saved Successfully") {
            //       this.commonService.showConfirm(
            //         "Renewal Request Saved Successfully"
            //       );
            //       this.modalController.dismiss({
            //         data: "Renewal Request Saved Successfully",
            //       });
            //     }
            //   });
            // }
            if (res.message == "Aleady Renewal") {
                _this.commonService.showConfirm("Unselect the Already Renewaled Data");
                _this.button = false;
            }
            else if (res.message == "Renewal Request Saved Successfully") {
                _this.button = false;
                _this.modalController.dismiss({
                    data: "Renewal Request Saved Successfully",
                });
            }
        });
    };
    RequestPageComponent.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.createForm();
    };
    RequestPageComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RequestPageComponent.prototype, "value", void 0);
    RequestPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-request-page",
            template: __webpack_require__(/*! raw-loader!./request-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/request-page/request-page.component.html"),
            styles: [__webpack_require__(/*! ./request-page.component.scss */ "./src/app/delar-application/esim-customer-ca-details/request-page/request-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], RequestPageComponent);
    return RequestPageComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/status-details/status-details.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/status-details/status-details.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n\n.submitbtn {\n  --background: #6252ee;\n}\n\n@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 80%;\n  }\n}\n\n.form-field {\n  margin: -16px 5px 0px;\n  border-radius: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 1023px) {\n  .wrapper-container {\n    border: none;\n    margin: 8px 0 0;\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .wrapper-container {\n    margin: 30px 11px;\n    padding-right: 20px;\n  }\n}\n\n.label-head {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0px 0px 0px 5px;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.dealer-data {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jdXN0b21lci1jYS1kZXRhaWxzL3N0YXR1cy1kZXRhaWxzL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGVzaW0tY3VzdG9tZXItY2EtZGV0YWlsc1xcc3RhdHVzLWRldGFpbHNcXHN0YXR1cy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9lc2ltLWN1c3RvbWVyLWNhLWRldGFpbHMvc3RhdHVzLWRldGFpbHMvc3RhdHVzLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7QUNBSjs7QURHQTtFQUNJO0lBQ0ksZ0JBQUE7RUNBTjs7RURHRTtJQUNJLFVBQUE7RUNBTjtBQUNGOztBREdBO0VBQ0k7SUFDSSxTQUFBO0VDRE47O0VESUU7SUFDSSxVQUFBO0VDRE47QUFDRjs7QURJQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VDRk47QUFDRjs7QURLQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSxtQkFBQTtFQ0hOO0FBQ0Y7O0FET0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0xKOztBRFFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0xKOztBRFFBO0VBQ0ksZUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZXNpbS1jdXN0b21lci1jYS1kZXRhaWxzL3N0YXR1cy1kZXRhaWxzL3N0YXR1cy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcblxyXG59XHJcblxyXG4uc2VsZWN0YWJsZS1pbnB1dCB7XHJcbiAgICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uc3VibWl0YnRuIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzYyNTJlZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgICAuaW5wdXQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3N1Ym1pdGJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAuZm9ybS1maWVsZCB7XHJcbiAgICAgICAgem9vbTogODAlO1xyXG4gICAgfVxyXG5cclxuICAgICNzdWJtaXRidG4ge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbjogLTE2cHggNXB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MzIwcHgpYW5kKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAgIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDAgMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDoxMDI0cHgpIHtcclxuICAgIC53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4IDExcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5sYWJlbC1oZWFkIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcclxufVxyXG5cclxuLmRlYWxlci1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmRlYWxlci1kYXRhIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufSIsIi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5zdWJtaXRidG4ge1xuICAtLWJhY2tncm91bmQ6ICM2MjUyZWU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IC0xNnB4IDVweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDMwcHggMTFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4ubGFiZWwtaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XG59XG5cbi5kZWFsZXItbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5kZWFsZXItZGF0YSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/esim-customer-ca-details/status-details/status-details.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/delar-application/esim-customer-ca-details/status-details/status-details.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: StatusDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusDetailsComponent", function() { return StatusDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm5/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var StatusDetailsComponent = /** @class */ (function () {
    function StatusDetailsComponent(formBuilder, modalController, ajaxService, commonService) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.page = [];
    }
    StatusDetailsComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    StatusDetailsComponent.prototype.getdatas = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/esim/getEsimCAStatusAll?companyid=" +
            localStorage.getItem("corpId") +
            "&iccidno=" +
            this.value.iccidno1;
        this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.tableData = res;
            _this.page = ["100", "200", "500", "1000"];
            _this.renderer = function (row, column, value) {
                if (value == "" || null || undefined) {
                    return "--";
                }
                else {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                        value +
                        "</span>");
                }
            };
            _this.source = { localdata: _this.tableData };
            _this.dataAdapter = new jqx.dataAdapter(_this.source);
            _this.columns = [
                {
                    text: "ICCID No 1",
                    datafield: "iccidno1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
                },
                {
                    text: "SIM 1",
                    datafield: "sim1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                },
                {
                    text: "Provider 1",
                    datafield: "provider1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "IMSI 1",
                    datafield: "imsi1",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "ICCID No 2",
                    datafield: "iccidno2",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
                },
                {
                    text: "SIM 2",
                    datafield: "sim2",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                },
                {
                    text: "Provider 2",
                    datafield: "provider2",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "IMSI 2",
                    datafield: "imsi2",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "Validity Requested",
                    datafield: "validityperiod",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "Card Activated Date",
                    datafield: "cardactivationdate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 155,
                },
                {
                    text: "Card End Date",
                    datafield: "cardenddate",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 140,
                },
                {
                    text: "Card Status",
                    datafield: "cardstatus",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                },
                {
                    text: "Comment",
                    datafield: "comment",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 95,
                },
                {
                    text: "Status",
                    datafield: "status",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                },
                {
                    text: "Created by",
                    datafield: "createdby",
                    cellsrenderer: _this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 100,
                },
            ];
        });
    };
    StatusDetailsComponent.prototype.ngOnInit = function () {
        this.getdatas();
    };
    StatusDetailsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
    ], StatusDetailsComponent.prototype, "myGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StatusDetailsComponent.prototype, "value", void 0);
    StatusDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-status-details",
            template: __webpack_require__(/*! raw-loader!./status-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/esim-customer-ca-details/status-details/status-details.component.html"),
            styles: [__webpack_require__(/*! ./status-details.component.scss */ "./src/app/delar-application/esim-customer-ca-details/status-details/status-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], StatusDetailsComponent);
    return StatusDetailsComponent;
}());



/***/ }),

/***/ "./src/app/services/assign-dealer-pipe-ca-page.ts":
/*!********************************************************!*\
  !*** ./src/app/services/assign-dealer-pipe-ca-page.ts ***!
  \********************************************************/
/*! exports provided: AssigndealerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssigndealerPipe", function() { return AssigndealerPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AssigndealerPipe = /** @class */ (function () {
    function AssigndealerPipe() {
    }
    AssigndealerPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            if (it.imeiNo != null) {
                return it.imeiNo
                    .replace(/ /g, "")
                    .toLowerCase()
                    .includes(terms.replace(/ /g, ""));
            }
            else if (it.name) {
                return it.name.toLowerCase().includes(terms);
            }
            else
                return false;
        });
    };
    AssigndealerPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "assigndealer",
        })
    ], AssigndealerPipe);
    return AssigndealerPipe;
}());



/***/ })

}]);
//# sourceMappingURL=esim-customer-ca-details-esim-customer-ca-details-module-es5.js.map