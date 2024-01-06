(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-certificate-custom-certificate-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/custom-certificate/create-certificate/create-certificate.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/custom-certificate/create-certificate/create-certificate.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"dealerHeader\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-icon\r\n        routerLink=\"/tabs-login/custom-certificate\"\r\n        name=\"arrow-back\"\r\n        style=\"padding: 10px\"\r\n        slot=\"start\"\r\n      ></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title style=\"margin-left: 1%\">Certficate Creation</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"wrapper-container\">\r\n      <form [formGroup]=\"certificatedetails\">\r\n        <ion-row>\r\n          <ion-col size-sm=\"8\" size-md=\"8\" size-lg=\"6\" class=\"head\">\r\n            <label class=\"heading\">Vehicle Details</label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div>\r\n          <ion-row>\r\n            <ion-col\r\n              size=\"12\"\r\n              size-sm=\"12\"\r\n              size-md=\"6\"\r\n              size-lg=\"6\"\r\n              class=\"form_col\"\r\n            >\r\n              <label class=\"label-heading\">Vehicle Registration No:</label>\r\n              <ion-input\r\n                type=\"text\"\r\n                placeholder=\"Vehicle Registration No\"\r\n                formControlName=\"RegistraionNo\"\r\n              ></ion-input>\r\n            </ion-col>\r\n            <ion-col\r\n              size=\"12\"\r\n              size-sm=\"12\"\r\n              size-md=\"6\"\r\n              size-lg=\"6\"\r\n              class=\"form_col\"\r\n            >\r\n              <label class=\"label-heading\">RTO:</label>\r\n              <ion-input\r\n                type=\"text\"\r\n                placeholder=\"RTO\"\r\n                formControlName=\"RTO\"\r\n              ></ion-input>\r\n            </ion-col>\r\n            <ion-col\r\n              size=\"12\"\r\n              size-sm=\"12\"\r\n              size-md=\"6\"\r\n              size-lg=\"6\"\r\n              class=\"form_col\"\r\n            >\r\n              <label class=\"label-heading\">Chassis Number:</label>\r\n              <ion-input\r\n                type=\"text\"\r\n                placeholder=\"Chassis Number\"\r\n                formControlName=\"ChassisNo\"\r\n              ></ion-input>\r\n            </ion-col>\r\n            <ion-col\r\n              size=\"12\"\r\n              size-sm=\"12\"\r\n              size-md=\"6\"\r\n              size-lg=\"6\"\r\n              class=\"form_col\"\r\n            >\r\n              <label class=\"label-heading\">Engine Number:</label>\r\n              <ion-input\r\n                type=\"text\"\r\n                placeholder=\"Engine Number\"\r\n                formControlName=\"EngineNo\"\r\n              >\r\n              </ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\">\r\n              <ion-row>\r\n                <ion-col size-sm=\"8\" size-md=\"8\" size-lg=\"6\" class=\"head\">\r\n                  <label class=\"heading\">Vehicle Image</label>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row style=\"margin: 6px\">\r\n                <input\r\n                  type=\"file\"\r\n                  class=\"documents\"\r\n                  ng2FileSelect\r\n                  [uploader]=\"uploader\"\r\n                />\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\">\r\n              <ion-row>\r\n                <ion-col size-sm=\"8\" size-md=\"8\" size-lg=\"6\" class=\"head\">\r\n                  <label class=\"heading\">Device Image</label>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row style=\"margin: 6px\">\r\n                <input\r\n                  type=\"file\"\r\n                  class=\"documents\"\r\n                  ng2FileSelect\r\n                  [uploader]=\"uploader\"\r\n                />\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <ion-row>\r\n          <ion-col size-sm=\"8\" size-md=\"8\" size-lg=\"6\" class=\"head\">\r\n            <label class=\"heading\">Vehicle Owner Details</label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div>\r\n          <ion-row>\r\n            <ion-col\r\n              size=\"12\"\r\n              size-sm=\"12\"\r\n              size-md=\"6\"\r\n              size-lg=\"6\"\r\n              class=\"form_col\"\r\n            >\r\n              <label class=\"label-heading\">Vehicle Owner Name:</label>\r\n              <ion-input\r\n                type=\"text\"\r\n                placeholder=\"Vehicle Owner Name\"\r\n                formControlName=\"OwnerName\"\r\n              ></ion-input>\r\n            </ion-col>\r\n            <ion-col\r\n              size=\"12\"\r\n              size-sm=\"12\"\r\n              size-md=\"6\"\r\n              size-lg=\"6\"\r\n              class=\"form_col\"\r\n            >\r\n              <label class=\"label-heading\">Address:</label>\r\n              <ion-input\r\n                type=\"text\"\r\n                placeholder=\"Address\"\r\n                formControlName=\"OwnerAddress\"\r\n              ></ion-input>\r\n            </ion-col>\r\n            <ion-col\r\n              size=\"12\"\r\n              size-sm=\"12\"\r\n              size-md=\"6\"\r\n              size-lg=\"6\"\r\n              class=\"form_col\"\r\n            >\r\n              <label class=\"label-heading\">Phone Number:</label>\r\n              <ion-input\r\n                type=\"text\"\r\n                placeholder=\"Phone Number\"\r\n                formControlName=\"PhoneNo\"\r\n              ></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <ion-row>\r\n          <ion-col size-sm=\"8\" size-md=\"8\" size-lg=\"6\" class=\"head\">\r\n            <label class=\"heading\">VLTD Details</label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div>\r\n          <ion-row>\r\n            <ion-col\r\n              size=\"12\"\r\n              size-sm=\"12\"\r\n              size-md=\"6\"\r\n              size-lg=\"6\"\r\n              class=\"form_col\"\r\n            >\r\n              <label class=\"label-heading\">Imei Number:</label>\r\n              <ion-input\r\n                type=\"text\"\r\n                placeholder=\"Imei Number\"\r\n                (change)=\"tst()\"\r\n                formControlName=\"imeiNumber\"\r\n              ></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col\r\n              size=\"12\"\r\n              size-sm=\"12\"\r\n              size-md=\"6\"\r\n              size-lg=\"6\"\r\n              class=\"form_col\"\r\n            >\r\n              <label class=\"label-heading\">Renewal Date:</label>\r\n              <ion-input type=\"date\" formControlName=\"RenewalDate\"></ion-input>\r\n            </ion-col>\r\n\r\n            <ion-col\r\n              size=\"12\"\r\n              size-sm=\"12\"\r\n              size-md=\"6\"\r\n              size-lg=\"6\"\r\n              class=\"form_col\"\r\n            >\r\n              <label class=\"label-heading\">Panic Button Count:</label>\r\n              <ion-input\r\n                type=\"text\"\r\n                placeholder=\"Enter the Panic Button Count\"\r\n                formControlName=\"paniccount\"\r\n              ></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <ion-row>\r\n          <ion-col size-sm=\"8\" size-md=\"8\" size-lg=\"6\" class=\"head\">\r\n            <label class=\"heading\">Installation Details</label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div>\r\n          <ion-row>\r\n            <ion-col\r\n              size=\"12\"\r\n              size-sm=\"12\"\r\n              size-md=\"6\"\r\n              size-lg=\"6\"\r\n              class=\"form_col\"\r\n            >\r\n              <label class=\"label-heading\">Installation Name:</label>\r\n              <ion-input\r\n                type=\"textarea\"\r\n                placeholder=\"Installation Name\"\r\n                formControlName=\"InstallationName\"\r\n              ></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </form>\r\n      <ion-row style=\"padding: 0px\">\r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n          <ion-button\r\n            id=\"btn\"\r\n            [disabled]=\"!certificatedetails.valid\"\r\n            (click)=\"submit()\"\r\n            autocapitalize=\"characters\"\r\n            >Submit</ion-button\r\n          ></ion-col\r\n        ></ion-row\r\n      >\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/custom-certificate/custom-certificate.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/custom-certificate/custom-certificate.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"dealerHeader\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"2\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-col>\r\n        <ion-col size=\"7\" style=\"padding-top: 10px\">\r\n          <ion-label>Certification</ion-label>\r\n        </ion-col>\r\n        <ion-col style=\"text-align: right\" size=\"2\">\r\n          <ion-button routerLink=\"/tabs-login/custom-certificate/create-certificates\" class=\"addbutton\"\r\n            size=\"small\">+ADD</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <form [formGroup]=\"imeiSearch\">\r\n    <div class=\"padding25px\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-row class=\"paddingBottom10px\">\r\n            <ion-input type=\"text\" placeholder=\"Enter the Imei Number\" class=\"imeibox\"\r\n              formControlName=\"imeiNumber\"></ion-input>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col style=\"text-align: center\">\r\n          <ion-button class=\"buttonWidth\" [disabled]=\"!imeiSearch.valid\" (click)=\"submit()\">Submit</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </form>\r\n  <ion-row>\r\n    <ion-col size=\"12\" *ngIf=\"show == true\">\r\n      <ion-row style=\"margin: 0px; padding: 0; float: right\">\r\n        <ion-col class=\"ion-activatable download-buttons\" (click)=\"Edit()\">\r\n          <div class=\"edit-wrapper\">\r\n            <ion-icon name=\"create\" style=\"font-size: 20px\"></ion-icon>\r\n          </div>\r\n          <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n        </ion-col>\r\n        <ion-col class=\"ion-activatable download-buttons\" (click)=\"clickToDownload()\">\r\n          <div class=\"pdf-wrapper\"></div>\r\n          <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n        </ion-col>\r\n      </ion-row>\r\n      <div id=\"pdf5\">\r\n        <!-- <td>{{pdfDate}}</td> -->\r\n        <table border=\"1\" style=\"width: 100%; border: transparent\">\r\n          <tr>\r\n            <td style=\"width: 1in\">\r\n              <!-- <img src=\"http://kingstrackimages.s3.amazonaws.com/Company/logo_kingstrack.png\"> -->\r\n            </td>\r\n\r\n            <td>\r\n              <table border=\"1\" style=\"width: 100%; border: transparent\">\r\n                <tr>\r\n                  <td style=\"\r\n                      text-align: center;\r\n                      font-size: 15px;\r\n                      font-weight: bold;\r\n                    \">\r\n                    APM KINGSTRACK TECHNOLOGIES\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td *ngIf=\"renewalcount == 0\" style=\"text-align: center; font-size: 15px\">\r\n                    Online Vehicle Tracking Device Fitment Certificate\r\n                  </td>\r\n                  <td *ngIf=\"renewalcount != 0\" style=\"text-align: center; font-size: 15px\">\r\n                    Online Vehicle Tracking Device Renewal Certificate\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"text-align: center; font-size: 15px\">\r\n                    AIS-140 IRNSS\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </td>\r\n            <td style=\"width: 1in\"><img src=\"{{Apmlogo}}\" /></td>\r\n          </tr>\r\n        </table>\r\n        <table border=\"1\" style=\"width: 100%; border: transparent\">\r\n          <tr>\r\n            <td>\r\n              <table border=\"1\" style=\"width: 100%; border: transparent\">\r\n                <tr>\r\n                  <td style=\"text-align: start; font-size: 13px\">To:</td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"text-align: start; font-size: 13px\">\r\n                    The Regional Transport Officer\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </td>\r\n            <td>\r\n              <table border=\"1\" style=\"width: 100%; border: transparent\">\r\n                <tr>\r\n                  <td style=\"font-size: 13px; text-align: end\">\r\n                    Certificate No:<span style=\"\r\n                        font-weight: bold;\r\n                        font-size: 13px;\r\n                        text-transform: uppercase;\r\n                      \">\r\n                      {{TotalcertificateData.CertificateNo}}</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"font-size: 13px; text-align: end\">\r\n                    Certification Date:<span style=\"\r\n                        font-weight: bold;\r\n                        font-size: 13px;\r\n                        text-transform: uppercase;\r\n                      \">\r\n                      {{TotalcertificateData.Certficatevaliddate}}</span>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n        <table border=\"1\" style=\"width: 100%; border: transparent\">\r\n          <tr>\r\n            <td>\r\n              <table border=\"1\" style=\"width: 100%\">\r\n                <tr>\r\n                  <th style=\"text-align: start\" colspan=\"3\">\r\n                    Vehicle Details:-\r\n                  </th>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"font-size: 13px\">\r\n                    Registration No:<span style=\"\r\n                        font-weight: bold;\r\n                        font-size: 13px;\r\n                        text-transform: uppercase;\r\n                      \">\r\n                      {{TotalcertificateData.RegistraionNo}}</span>\r\n                  </td>\r\n                  <td style=\"font-size: 13px\">\r\n                    RTO:<span style=\"\r\n                        font-weight: bold;\r\n                        font-size: 13px;\r\n                        text-transform: uppercase;\r\n                      \">\r\n                      {{TotalcertificateData.RTO}}</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"font-size: 13px\">\r\n                    Chassis No:<span style=\"\r\n                        font-weight: bold;\r\n                        font-size: 13px;\r\n                        text-transform: uppercase;\r\n                      \">\r\n                      {{TotalcertificateData.ChassisNo}}</span>\r\n                  </td>\r\n                  <td style=\"font-size: 13px\" colspan=\"2\">\r\n                    Engine No:<span style=\"\r\n                        font-weight: bold;\r\n                        font-size: 13px;\r\n                        text-transform: uppercase;\r\n                      \">\r\n                      {{TotalcertificateData.EngineNo}}</span>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </td>\r\n            <td style=\"text-align: center\" colspan=\"1\">\r\n              <qr-code [value]=\"values\" [size]=\"width\" [level]=\"level\"></qr-code>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n        <table border=\"1\" style=\"width: 50%; margin: 5px 0px 10px 0px\">\r\n          <tr>\r\n            <th style=\"text-align: start\">Vehicle Owner Details:-</th>\r\n            <th style=\"text-align: start\">VLTD Certification Details:-</th>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"font-size: 13px\">\r\n              Name:<span style=\"\r\n                  font-weight: bold;\r\n                  font-size: 13px;\r\n                  text-transform: uppercase;\r\n                \">\r\n                {{TotalcertificateData.OwnerName}}</span>\r\n            </td>\r\n            <td style=\"font-size: 13px\">\r\n              VLTD Model No:<span style=\"\r\n                  font-weight: bold;\r\n                  font-size: 13px;\r\n                  text-transform: uppercase;\r\n                \">\r\n                {{TotalcertificateData.VltdModelNo}}</span>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"font-size: 13px\">\r\n              Phone:<span style=\"\r\n                  font-weight: bold;\r\n                  font-size: 13px;\r\n                  text-transform: uppercase;\r\n                \">\r\n                {{TotalcertificateData.PhoneNo}}</span>\r\n            </td>\r\n            <td style=\"font-size: 13px\">\r\n              CDAC Certficate No:<span style=\"\r\n                  font-weight: bold;\r\n                  font-size: 13px;\r\n                  text-transform: uppercase;\r\n                \">\r\n                {{TotalcertificateData.CDACNo}}</span>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"font-size: 13px\">\r\n              Address:<span style=\"\r\n                  font-weight: bold;\r\n                  font-size: 13px;\r\n                  text-transform: uppercase;\r\n                \">\r\n                {{TotalcertificateData.OwnerAddress}}</span>\r\n            </td>\r\n            <td style=\"font-size: 13px\">\r\n              Manufacturer:<span\r\n                style=\"\r\n                  font-weight: bold;\r\n                  font-size: 13px;\r\n                  text-transform: uppercase;\r\n                \">{{TotalcertificateData.IssuedName}},{{TotalcertificateData.IssuedAddress}},{{TotalcertificateData.IssuedCity}}{{TotalcertificateData.IssuedPincode}}.</span>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n        <table border=\"1\" style=\"width: 100%; margin: 5px 0px 10px 0px\">\r\n          <tr>\r\n            <th style=\"text-align: start\" colspan=\"3\">VLTD Details:-</th>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"font-size: 13px\">\r\n              IMEI Number:<span style=\"\r\n                  font-weight: bold;\r\n                  font-size: 13px;\r\n                  text-transform: uppercase;\r\n                \">\r\n                {{TotalcertificateData.imeiNumber}}</span>\r\n            </td>\r\n            <td style=\"font-size: 13px\">\r\n              VLTD Test Report:<span style=\"\r\n                  font-weight: bold;\r\n                  font-size: 13px;\r\n                  text-transform: uppercase;\r\n                \">\r\n                {{TotalcertificateData.Vltdtest}}</span>\r\n            </td>\r\n            <td *ngIf=\"panic != 0\" style=\"font-size: 13px\">\r\n              Panic Button Count:<span style=\"\r\n                  font-weight: bold;\r\n                  font-size: 13px;\r\n                  text-transform: uppercase;\r\n                \">\r\n                {{TotalcertificateData.paniccount}}</span>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"font-size: 13px\">\r\n              SIM Provider 1:<span style=\"\r\n                  font-weight: bold;\r\n                  font-size: 13px;\r\n                  text-transform: uppercase;\r\n                \">\r\n                {{TotalcertificateData.Sim1}}</span>\r\n            </td>\r\n            <td style=\"font-size: 13px\">\r\n              SIM Provider 2:<span style=\"\r\n                  font-weight: bold;\r\n                  font-size: 13px;\r\n                  text-transform: uppercase;\r\n                \">\r\n                {{TotalcertificateData.Sim2}}</span>\r\n            </td>\r\n            <td style=\"font-size: 13px\">\r\n              VLTD Valid Upto:<span style=\"\r\n                  font-weight: bold;\r\n                  font-size: 13px;\r\n                  text-transform: uppercase;\r\n                \">\r\n                {{TotalcertificateData.RenewalDate}}</span>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"font-size: 13px\" colspan=\"3\">\r\n              Certified By:<span style=\"\r\n                  font-weight: bold;\r\n                  font-size: 13px;\r\n                  text-transform: uppercase;\r\n                \">International Centre For Automative, Technology(ICAT) & Centre\r\n                for Development of Advanced Computing (C-DAC)</span>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n        <table border=\"1\" style=\"width: 100%; margin: 5px 0px 0px 0px\">\r\n          <tr>\r\n            <th style=\"text-align: start\">Installed By:</th>\r\n            <th style=\"text-align: start\">Certificate Issued By:</th>\r\n            <th style=\"text-align: start\">Vehicle Image:</th>\r\n            <th style=\"text-align: start\">Device Image:</th>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"font-size: 13px; text-transform: uppercase\">\r\n              {{TotalcertificateData.InstallationName}}\r\n            </td>\r\n            <td style=\"font-size: 13px; text-transform: uppercase\">\r\n              {{TotalcertificateData.IssuedName}}{{TotalcertificateData.IssuedAddress}},{{TotalcertificateData.IssuedCity}}{{TotalcertificateData.IssuedPincode}}.\r\n            </td>\r\n            <td style=\"width: 1.5in\" rowspan=\"3\">\r\n              <img style=\"width: 1.5in; height: 1in\" src=\"{{TotalcertificateData.vehicleimage}}\" />\r\n            </td>\r\n            <td style=\"width: 1.5in\" rowspan=\"3\">\r\n              <img style=\"width: 1.5in; height: 1in\" src=\"{{TotalcertificateData.cameraimage}}\" />\r\n            </td>\r\n          </tr>\r\n        </table>\r\n        <table border=\"1\" style=\"width: 100%; margin-top: 2px\">\r\n          <tr>\r\n            <td style=\"font-size: 13px\">\r\n              This is to certify that following vehicle has been installed and\r\n              activated with ICAT approved IRNSS<br />\r\n              Vehicle Location Tracking Device as per AIS-140 Standard, The\r\n              device warranty is void if device is<br />\r\n              tampered or the seal is Broken by unauthorized technicians or\r\n              individual\r\n            </td>\r\n            <td *ngIf=\"companyId != 'sabbtech-sa'\" style=\"font-size: 13px; text-align: end\">\r\n              <br />\r\n              <br />\r\n              <br />\r\n              <br />\r\n              <span>Dealer Signature</span>\r\n            </td>\r\n            <td *ngIf=\"companyId == 'sabbtech-sa'\" style=\"font-size: 13px; text-align: center\">\r\n              <img src=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/Company/APMSeal.png\" width=\"161px\"\r\n                height=\"149px\">\r\n              <div style=\"width: 100%; text-align: center;\">Signature</div>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/delar-application/custom-certificate/create-certificate/create-certificate.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/delar-application/custom-certificate/create-certificate/create-certificate.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  background: #e8e8e8;\n  text-align: initial;\n}\n\nion-icon {\n  color: #fafcff;\n  -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);\n          clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);\n  padding: 1px 3px;\n  vertical-align: bottom;\n}\n\n.sub {\n  margin-left: 27%;\n}\n\n.pro {\n  text-align: center;\n  margin-left: 50px;\n  font-size: 15px;\n  background-color: #3d6cec;\n  border-radius: 4px;\n}\n\n.lab {\n  font-family: sans-serif;\n}\n\n.cam {\n  border: 1px solid #3d6cec;\n  margin-left: 38%;\n}\n\n.text {\n  text-align: center;\n}\n\n.icon {\n  margin-left: 38%;\n}\n\n.drop-zone {\n  background-color: #f6f6f6;\n  border: dotted 3px #dedddd;\n  height: 30vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 20px 0;\n}\n\n.file-input-container input[type=file] {\n  display: none;\n}\n\n.first {\n  margin-left: 38%;\n  padding: 5px;\n}\n\n.nv-file-over {\n  border: dotted 3px red;\n}\n\n.heading {\n  text-align: center;\n  border-radius: 4px;\n  color: #6252ee;\n  font-weight: 500;\n  font-size: 20px;\n}\n\n.fileheading {\n  text-align: center;\n  border-radius: 4px;\n  font-weight: 500;\n  font-size: 20px;\n}\n\nion-progress-bar {\n  border-radius: 50px;\n  height: 7px;\n}\n\n.file {\n  margin-left: 8%;\n  border: 1px solid #3d6cec;\n}\n\n.down {\n  text-align: center;\n}\n\n.arrow {\n  position: absolute;\n  right: 0;\n}\n\n.wrapper-container {\n  text-align: center;\n}\n\nion-item {\n  --padding-end: 0;\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  background: #e8e8e8;\n  --background: #e8e8e8;\n  color: #7a7b7b;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n}\n\n.form_col {\n  line-height: 18px;\n  font-size: 16px;\n  text-align: start;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .wrapper-container {\n    zoom: 80%;\n  }\n\n  #btn {\n    width: 80%;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .wrapper-container {\n    zoom: 90%;\n    padding: 20px;\n  }\n\n  #btn {\n    width: 20%;\n  }\n}\n\n#btn {\n  --background: #6252ee;\n}\n\n.head {\n  text-align: initial;\n}\n\nion-input {\n  --padding-start: 17px;\n  height: 42px;\n  margin: 5px 0px 0px 0px;\n}\n\n.label-heading {\n  color: #000000;\n  font-weight: 500;\n  font-size: 18px;\n  padding: 5px;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  padding: 9px 8px 5px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vY3VzdG9tLWNlcnRpZmljYXRlL2NyZWF0ZS1jZXJ0aWZpY2F0ZS9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxjdXN0b20tY2VydGlmaWNhdGVcXGNyZWF0ZS1jZXJ0aWZpY2F0ZVxcY3JlYXRlLWNlcnRpZmljYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9jdXN0b20tY2VydGlmaWNhdGUvY3JlYXRlLWNlcnRpZmljYXRlL2NyZWF0ZS1jZXJ0aWZpY2F0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7RUFDQSw0REFBQTtVQUFBLG9EQUFBO0VBQ0EsZ0JBQUE7RUFFQSxzQkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBRUUsdUJBQUE7QUNHRjs7QUREQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUNJRjs7QURGQTtFQUNFLGtCQUFBO0FDS0Y7O0FESEE7RUFDRSxnQkFBQTtBQ01GOztBREhBO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGNBQUE7QUNNRjs7QURIRTtFQUNFLGFBQUE7QUNNSjs7QURNQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0hGOztBREtBO0VBQ0Usc0JBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRkY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQ0RGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO1VBQUEscUJBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRTtJQUNFLFNBQUE7RUNFRjs7RURBQTtJQUNFLFVBQUE7RUNHRjtBQUNGOztBRERBO0VBQ0U7SUFDRSxTQUFBO0lBQ0EsYUFBQTtFQ0dGOztFRERBO0lBQ0UsVUFBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRSxxQkFBQTtBQ0lGOztBREZBO0VBQ0UsbUJBQUE7QUNLRjs7QURIQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDTUY7O0FESkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ09GOztBRExBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNRRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2N1c3RvbS1jZXJ0aWZpY2F0ZS9jcmVhdGUtY2VydGlmaWNhdGUvY3JlYXRlLWNlcnRpZmljYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjMyLCAyMzIsIDIzMik7XHJcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcclxufVxyXG5pb24taWNvbiB7XHJcbiAgY29sb3I6ICNmYWZjZmY7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwJSAxMDAlKTtcclxuICBwYWRkaW5nOiAxcHggM3B4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICM2MjUyZWM7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxufVxyXG4uc3ViIHtcclxuICBtYXJnaW4tbGVmdDogMjclO1xyXG59XHJcbi5wcm8ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLCAxMDgsIDIzNik7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5sYWIge1xyXG4gIC8vICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcbi5jYW0ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MSwgMTA4LCAyMzYpO1xyXG4gIG1hcmdpbi1sZWZ0OiAzOCU7XHJcbn1cclxuLnRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaWNvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDM4JTtcclxufVxyXG4vLyBtdWx0aXBhcnQgZmlsZVxyXG4uZHJvcC16b25lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gIGJvcmRlcjogZG90dGVkIDNweCAjZGVkZGRkO1xyXG4gIGhlaWdodDogMzB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuLmZpbGUtaW5wdXQtY29udGFpbmVyIHtcclxuICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLy8gIGxhYmVsIHtcclxuICAvLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAvLyAgZm9udC1zaXplOiAxNXB4O1xyXG4gIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig2MSwgMTA4LCAyMzYpO1xyXG4gIC8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIC8vICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgLy8gIH1cclxufVxyXG4uZmlyc3Qge1xyXG4gIG1hcmdpbi1sZWZ0OiAzOCU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5udi1maWxlLW92ZXIge1xyXG4gIGJvcmRlcjogZG90dGVkIDNweCByZWQ7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAjNjI1MmVlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5maWxlaGVhZGluZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuaW9uLXByb2dyZXNzLWJhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBoZWlnaHQ6IDdweDtcclxufVxyXG5cclxuLmZpbGUge1xyXG4gIG1hcmdpbi1sZWZ0OiA4JTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjEsIDEwOCwgMjM2KTtcclxufVxyXG4uZG93biB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hcnJvdyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbi53cmFwcGVyLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAvL21hcmdpbjogMzBweCBhdXRvO1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gIGNvbG9yOiAjN2E3YjdiO1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufVxyXG4uZm9ybV9jb2wge1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MzIwcHgpIGFuZChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgem9vbTogODAlO1xyXG4gIH1cclxuICAjYnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgIHpvb206IDkwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gICNidG4ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbn1cclxuI2J0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNjI1MmVlO1xyXG59XHJcbi5oZWFkIHtcclxuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxN3B4O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBtYXJnaW46IDVweCAwcHggMHB4IDBweDtcclxufVxyXG4ubGFiZWwtaGVhZGluZyB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgcGFkZGluZzogOXB4IDhweCA1cHggMTBweDtcclxufVxyXG4iLCJpb24taW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiAjZmFmY2ZmO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAlLCAxMDAlIDEwMCUsIDAlIDEwMCUpO1xuICBwYWRkaW5nOiAxcHggM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuXG4uc3ViIHtcbiAgbWFyZ2luLWxlZnQ6IDI3JTtcbn1cblxuLnBybyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkNmNlYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ubGFiIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbi5jYW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2Q2Y2VjO1xuICBtYXJnaW4tbGVmdDogMzglO1xufVxuXG4udGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmljb24ge1xuICBtYXJnaW4tbGVmdDogMzglO1xufVxuXG4uZHJvcC16b25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgYm9yZGVyOiBkb3R0ZWQgM3B4ICNkZWRkZGQ7XG4gIGhlaWdodDogMzB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4uZmlsZS1pbnB1dC1jb250YWluZXIgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5maXJzdCB7XG4gIG1hcmdpbi1sZWZ0OiAzOCU7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLm52LWZpbGUtb3ZlciB7XG4gIGJvcmRlcjogZG90dGVkIDNweCByZWQ7XG59XG5cbi5oZWFkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjNjI1MmVlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5maWxlaGVhZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmlvbi1wcm9ncmVzcy1iYXIge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDdweDtcbn1cblxuLmZpbGUge1xuICBtYXJnaW4tbGVmdDogOCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZDZjZWM7XG59XG5cbi5kb3duIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufVxuXG4ud3JhcHBlci1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgLS1iYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBjb2xvcjogIzdhN2I3YjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuXG4uZm9ybV9jb2wge1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgem9vbTogODAlO1xuICB9XG5cbiAgI2J0biB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAud3JhcHBlci1jb250YWluZXIge1xuICAgIHpvb206IDkwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgI2J0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuI2J0biB7XG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZTtcbn1cblxuLmhlYWQge1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xufVxuXG5pb24taW5wdXQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE3cHg7XG4gIGhlaWdodDogNDJweDtcbiAgbWFyZ2luOiA1cHggMHB4IDBweCAwcHg7XG59XG5cbi5sYWJlbC1oZWFkaW5nIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIHBhZGRpbmc6IDlweCA4cHggNXB4IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/custom-certificate/create-certificate/create-certificate.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/delar-application/custom-certificate/create-certificate/create-certificate.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CreateCertificateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCertificateComponent", function() { return CreateCertificateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/pdf-logo.service */ "./src/app/services/pdf-logo.service.ts");










var CreateCertificateComponent = /** @class */ (function () {
    function CreateCertificateComponent(pdfLogoService, formBuilder, ajaxService, commonService, modalController, router, alertCtrl) {
        this.pdfLogoService = pdfLogoService;
        this.formBuilder = formBuilder;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.modalController = modalController;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.update = "";
        this.type = "text";
        this.type1 = "text";
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({});
    }
    CreateCertificateComponent.prototype.tst = function () {
        var _this = this;
        var url1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/global/getInventorydevice?imeiNo=" +
            this.certificatedetails.value.imeiNumber;
        this.ajaxService.ajaxGetJson(url1).subscribe(function (res) {
            console.log(res);
            _this.imeiDatas = res;
        });
    };
    CreateCertificateComponent.prototype.cancelBtn = function () {
        this.modalController.dismiss();
    };
    CreateCertificateComponent.prototype.submit = function () {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var ddd = String(today.getDate() - 1).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();
        var yyyyy = today.getFullYear() + 1;
        var curDate = dd + "-" + mm + "-" + yyyy;
        var OneyearDate = ddd + "-" + mm + "-" + yyyyy;
        if (this.certificatedetails.value.EngineNo == null ||
            this.certificatedetails.value.EngineNo == "") {
            this.certificatedetails.value.EngineNo = "N/A";
        }
        var certificatedate = new Date(this.certificatedetails.value.RenewalDate);
        this.method(certificatedate, today);
        this.showConfirm();
    };
    CreateCertificateComponent.prototype.method = function (date1, date2) {
        var diff = Math.floor(date1.getTime() - date2.getTime());
        var day = 1000 * 60 * 60 * 24;
        var days = Math.floor(diff / day);
        var months = Math.floor(days / 31);
        var years = Math.floor(months / 12);
        var message = days + " days ";
        message += months + " months ";
        message += years + " years \n";
        this.MessageAlert = message;
    };
    CreateCertificateComponent.prototype.showConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var confirm;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Are You Sure",
                            subHeader: "Certificate Valid Date is",
                            message: this.MessageAlert,
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                    handler: function () {
                                        _this.commonService.dismissLoader();
                                    },
                                },
                                {
                                    text: "Ok",
                                    handler: function (data) {
                                        _this.sendDatas();
                                    },
                                },
                            ],
                        })];
                    case 1:
                        confirm = _a.sent();
                        return [4 /*yield*/, confirm.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateCertificateComponent.prototype.sendDatas = function () {
        var _this = this;
        if (!this.value) {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, "0");
            var ddd = String(today.getDate() - 1).padStart(2, "0");
            var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
            var yyyy = today.getFullYear();
            var yyyyy = today.getFullYear() + 1;
            var curDate = dd + "-" + mm + "-" + yyyy;
            var OneyearDate = ddd + "-" + mm + "-" + yyyyy;
            var dateformat = this.certificatedetails.value.RenewalDate;
            var datas = {
                RegistraionNo: this.certificatedetails.value.RegistraionNo,
                RTO: this.certificatedetails.value.RTO,
                ChassisNo: this.certificatedetails.value.ChassisNo,
                EngineNo: this.certificatedetails.value.EngineNo,
                OwnerName: this.certificatedetails.value.OwnerName,
                OwnerAddress: this.certificatedetails.value.OwnerAddress,
                PhoneNo: this.certificatedetails.value.PhoneNo,
                RenewalDate: dateformat,
                paniccount: parseInt(this.certificatedetails.value.paniccount).toString(),
                CenterName: "APM KINGSTRACK TECHNOLOGIES,NO-813,5th floor Nizara Bonanza, opp. LIC Building, Anna Salai,Chennai-600002",
                VltdModelNo: "1819001A",
                Validitydate: OneyearDate,
                Certficatevaliddate: curDate,
                CDACNo: "CDAC-CR057",
                Vltdtest: "IRNSS CTOGO0273",
                imeiNumber: this.certificatedetails.value.imeiNumber,
                Sim1: this.imeiDatas.simCardNo,
                Sim2: this.imeiDatas.additionalSimcard1,
                Certifiedby: "International Centre For Automative, Technology(ICAT) & Centre for Development of Advanced Computing (C-DAC)",
                InstallationName: this.certificatedetails.value.InstallationName,
                IssuedName: "APM KINGSTRACK TECHNOLOGIES",
                IssuedAddress: "NO-813,5th floor Nizara Bonanza, opp. LIC Building",
                IssuedCity: "Anna Salai,Chennai",
                IssuedPincode: "600002",
                vehicleimage: this.certificatedetails.value.vehicleimage,
                cameraimage: this.certificatedetails.value.cameraimage,
                captureimage: this.certificatedetails.value.vehicleimage,
                CertificateNo: "APMKT" + this.certificatedetails.value.imeiNumber.slice(8),
                dealerId: localStorage.getItem("companySuffix"),
            };
            var url_1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/global/save/certificate";
            var file = this.uploader;
            var testData_1 = new FormData();
            if (file.queue.length != 0) {
                testData_1.append("vehicle", file.queue[0]._file);
                testData_1.append("capture", file.queue[0]._file);
                testData_1.append("camera", file.queue[1]._file);
                testData_1.append("data", JSON.stringify(datas));
                this.ajaxService.ajaxPutMethod(url_1, testData_1).subscribe(function (res) {
                    console.log(res);
                    res = JSON.parse(res);
                    if (res.message == "Success") {
                        _this.commonService.showConfirm("Certificate Added Sucessfully");
                        _this.router.navigateByUrl("/tabs-login/custom-certificate", {
                            state: { imeiNumber: _this.certificatedetails.value.imeiNumber },
                        });
                        _this.certificatedetails.reset();
                        _this.modalController.dismiss();
                        _this.commonService.dismissLoader();
                    }
                    else {
                        _this.commonService.showConfirm(res.message);
                        _this.commonService.dismissLoader();
                    }
                });
            }
            else {
                fetch(this.pdfLogoService.imgdata.no_img)
                    .then(function (res) { return res.blob(); })
                    .then(function (blob) {
                    var default_file = new File([blob], "File name", {
                        type: "image/png",
                    });
                    testData_1.append("vehicle", default_file);
                    testData_1.append("capture", default_file);
                    testData_1.append("camera", default_file);
                    testData_1.append("data", JSON.stringify(datas));
                    _this.ajaxService.ajaxPutMethod(url_1, testData_1).subscribe(function (res) {
                        console.log(res);
                        res = JSON.parse(res);
                        if (res.message == "Success") {
                            _this.commonService.showConfirm("Certificate Added Sucessfully");
                            _this.router.navigateByUrl("/tabs-login/custom-certificate", {
                                state: {
                                    imeiNumber: _this.certificatedetails.value.imeiNumber,
                                },
                            });
                            _this.certificatedetails.reset();
                            _this.modalController.dismiss();
                            _this.commonService.dismissLoader();
                        }
                        else {
                            _this.commonService.showConfirm(res.message);
                            _this.commonService.dismissLoader();
                        }
                    });
                });
            }
        }
        else {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, "0");
            var ddd = String(today.getDate() - 1).padStart(2, "0");
            var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
            var yyyy = today.getFullYear();
            var yyyyy = today.getFullYear() + 1;
            var curDate = dd + "-" + mm + "-" + yyyy;
            var OneyearDate = ddd + "-" + mm + "-" + yyyyy;
            var data = {
                RegistraionNo: this.certificatedetails.value.RegistraionNo,
                RTO: this.certificatedetails.value.RTO,
                ChassisNo: this.certificatedetails.value.ChassisNo,
                EngineNo: this.certificatedetails.value.EngineNo,
                OwnerName: this.certificatedetails.value.OwnerName,
                OwnerAddress: this.certificatedetails.value.OwnerAddress,
                PhoneNo: this.certificatedetails.value.PhoneNo,
                RenewalDate: this.certificatedetails.value.RenewalDate,
                paniccount: parseInt(this.certificatedetails.value.paniccount).toString(),
                CenterName: "APM KINGSTRACK TECHNOLOGIES,NO-813,5th floor Nizara Bonanza, opp. LIC Building, Anna Salai,Chennai-600002",
                VltdModelNo: "1819001A",
                Validitydate: OneyearDate,
                Certficatevaliddate: curDate,
                CDACNo: "CDAC-CR057",
                Vltdtest: "IRNSS CTOGO0273",
                imeiNumber: this.certificatedetails.value.imeiNumber,
                Sim1: this.imeiDatas.simCardNo,
                Sim2: this.imeiDatas.additionalSimcard1,
                Certifiedby: "International Centre For Automative, Technology(ICAT) & Centre for Development of Advanced Computing (C-DAC)",
                InstallationName: this.certificatedetails.value.InstallationName,
                IssuedName: "APM KINGSTRACK TECHNOLOGIES",
                IssuedAddress: "NO-813,5th floor Nizara Bonanza, opp. LIC Building",
                IssuedCity: "Anna Salai,Chennai",
                IssuedPincode: "600002",
                vehicleimage: this.certificatedetails.value.vehicleimage,
                cameraimage: this.certificatedetails.value.cameraimage,
                captureimage: this.certificatedetails.value.vehicleimage,
                CertificateNo: "APMKT" + this.certificatedetails.value.imeiNumber.slice(8),
                dealerId: localStorage.getItem("companySuffix"),
            };
            var url_2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/global/save/certificate";
            var file = this.uploader;
            var testData_2 = new FormData();
            if (file.queue.length != 0) {
                testData_2.append("vehicle", file.queue[0]._file);
                testData_2.append("capture", file.queue[0]._file);
                testData_2.append("camera", file.queue[1]._file);
                testData_2.append("data", JSON.stringify(data));
                this.ajaxService.ajaxPutMethod(url_2, testData_2).subscribe(function (res) {
                    console.log(res);
                    res = JSON.parse(res);
                    if (res.message == "Success") {
                        _this.commonService.showConfirm("Certificate Updated Sucessfully");
                        _this.router.navigateByUrl("/tabs-login/custom-certificate", {
                            state: { imeiNumber: _this.certificatedetails.value.imeiNumber },
                        });
                        _this.certificatedetails.reset();
                        _this.modalController.dismiss();
                        _this.commonService.dismissLoader();
                    }
                    else {
                        _this.commonService.showConfirm(res.message);
                        _this.commonService.dismissLoader();
                    }
                });
            }
            else {
                fetch(this.pdfLogoService.imgdata.no_img)
                    .then(function (res) { return res.blob(); })
                    .then(function (blob) {
                    var default_file = new File([blob], "File name", {
                        type: "image/png",
                    });
                    testData_2.append("vehicle", default_file);
                    testData_2.append("capture", default_file);
                    testData_2.append("camera", default_file);
                    testData_2.append("data", JSON.stringify(data));
                    _this.ajaxService.ajaxPutMethod(url_2, testData_2).subscribe(function (res) {
                        console.log(res);
                        res = JSON.parse(res);
                        if (res.message == "Success") {
                            _this.commonService.showConfirm("Certificate Updated Sucessfully");
                            _this.router.navigateByUrl("/tabs-login/custom-certificate", {
                                state: {
                                    imeiNumber: _this.certificatedetails.value.imeiNumber,
                                },
                            });
                            _this.certificatedetails.reset();
                            _this.modalController.dismiss();
                            _this.commonService.dismissLoader();
                        }
                        else {
                            _this.commonService.showConfirm("Please contact support team");
                            _this.commonService.dismissLoader();
                        }
                    });
                });
            }
        }
    };
    CreateCertificateComponent.prototype.createform = function () {
        this.certificatedetails = this.formBuilder.group({
            RegistraionNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            RTO: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // RegistraionDate:['',Validators.required],
            ChassisNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            EngineNo: [""],
            // Make:['',Validators.required],
            // Model:['',Validators.required],
            // Category:['',Validators.required],
            OwnerName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            OwnerAddress: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            PhoneNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // Emailid:['',Validators.required],
            // AadharNo:['',Validators.required],
            // PanNo:['',Validators.required],
            // VltdSerialNo:['',Validators.required],
            // DeviceManufactureYear:['',Validators.required],
            // IccidNo:['',Validators.required],
            // CertificateActivaton:['',Validators.required],
            // Certficatevaliddate:['',Validators.required],
            imeiNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            RenewalDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            paniccount: ["0"],
            // Sim1:['',Validators.required],
            // Sim2:['',Validators.required],
            InstallationName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // InstallationAddress:['',Validators.required],
            // City:['',Validators.required],
            // Pincode:['',Validators.required],
            // Cameraimei:[''],
            // Cameraserial:[''],
            vehicleimage: [""],
            cameraimage: [""],
        });
    };
    CreateCertificateComponent.prototype.editform = function () {
        var _this = this;
        if (this.value) {
            var url1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/global/getInventorydevice?imeiNo=" + this.value;
            this.ajaxService.ajaxGetJson(url1).subscribe(function (res) {
                console.log(res);
                _this.imeiDatas = res;
            });
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                "/global/get/certificate?imeiNo=" +
                this.value +
                "&dealerId=" +
                localStorage.getItem("companySuffix");
            this.ajaxService.ajaxGet(url).subscribe(function (res) {
                if (res.message == "Success") {
                    _this.certificatedata = JSON.parse(res.certificatedetails);
                    _this.certificatedetails.patchValue({
                        RegistraionNo: _this.certificatedata.RegistraionNo,
                        RTO: _this.certificatedata.RTO,
                        ChassisNo: _this.certificatedata.ChassisNo,
                        EngineNo: _this.certificatedata.EngineNo,
                        OwnerName: _this.certificatedata.OwnerName,
                        OwnerAddress: _this.certificatedata.OwnerAddress,
                        PhoneNo: _this.certificatedata.PhoneNo,
                        imeiNumber: _this.certificatedata.imeiNumber,
                        RenewalDate: _this.certificatedata.RenewalDate,
                        paniccount: _this.certificatedata.paniccount,
                        InstallationName: _this.certificatedata.InstallationName,
                        vehicleimage: _this.certificatedata.vehicleimage,
                        cameraimage: _this.certificatedata.cameraimage,
                    });
                }
                else {
                    _this.commonService.showConfirm(res.message);
                }
            });
        }
    };
    CreateCertificateComponent.prototype.ngOnInit = function () {
        this.logo =
            "https://kingstrackimages.s3.amazonaws.com/loginimages/track_apmkingstrack_com_background.jpg";
        this.createform();
        this.editform();
    };
    CreateCertificateComponent.ctorParameters = function () { return [
        { type: _services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_9__["PdfLogoService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateCertificateComponent.prototype, "value", void 0);
    CreateCertificateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-create-certificate",
            template: __webpack_require__(/*! raw-loader!./create-certificate.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/custom-certificate/create-certificate/create-certificate.component.html"),
            styles: [__webpack_require__(/*! ./create-certificate.component.scss */ "./src/app/delar-application/custom-certificate/create-certificate/create-certificate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_pdf_logo_service__WEBPACK_IMPORTED_MODULE_9__["PdfLogoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], CreateCertificateComponent);
    return CreateCertificateComponent;
}());



/***/ }),

/***/ "./src/app/delar-application/custom-certificate/custom-certificate.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/delar-application/custom-certificate/custom-certificate.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CustomCertificatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCertificatePageModule", function() { return CustomCertificatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_qrcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-qrcode */ "./node_modules/angular2-qrcode/lib/angular2-qrcode.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _custom_certificate_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-certificate.page */ "./src/app/delar-application/custom-certificate/custom-certificate.page.ts");
/* harmony import */ var _create_certificate_create_certificate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-certificate/create-certificate.component */ "./src/app/delar-application/custom-certificate/create-certificate/create-certificate.component.ts");









;


var routes = [
    {
        path: '',
        component: _custom_certificate_page__WEBPACK_IMPORTED_MODULE_8__["CustomCertificatePage"]
    }, {
        path: 'create-certificates',
        component: _create_certificate_create_certificate_component__WEBPACK_IMPORTED_MODULE_9__["CreateCertificateComponent"],
    }
];
var CustomCertificatePageModule = /** @class */ (function () {
    function CustomCertificatePageModule() {
    }
    CustomCertificatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular2_qrcode__WEBPACK_IMPORTED_MODULE_5__["QRCodeModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_custom_certificate_page__WEBPACK_IMPORTED_MODULE_8__["CustomCertificatePage"], _create_certificate_create_certificate_component__WEBPACK_IMPORTED_MODULE_9__["CreateCertificateComponent"]]
        })
    ], CustomCertificatePageModule);
    return CustomCertificatePageModule;
}());



/***/ }),

/***/ "./src/app/delar-application/custom-certificate/custom-certificate.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/delar-application/custom-certificate/custom-certificate.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonWidth {\n  width: 33%;\n  height: 30px;\n  --ion-color-primary: #7c68f8;\n}\n\n.paddingBottom10px {\n  padding-bottom: 4px;\n}\n\n.padding25px {\n  padding: 20px;\n}\n\n.imeibox {\n  background-color: #e8e8e8;\n  color: black;\n  width: 100%;\n}\n\n.savebutton {\n  width: 15%;\n  height: 30px;\n  --ion-color-primary: #7c68f8;\n}\n\n.pdf-wrapper {\n  background: url('pdf.svg') no-repeat;\n  width: 23px;\n  height: 24px;\n  float: right;\n}\n\n.edit-wrapper {\n  width: 23px;\n  height: 24px;\n  float: right;\n}\n\n.addbutton {\n  --ion-color-primary: #7c68f8;\n  --background: white;\n  --color: #7c68f8;\n  --background-hover: #7c68f8;\n  --color-hover: white;\n  margin: 13px 5px 0px 0px;\n}\n\n.notification {\n  background-color: #7c68f8;\n  font-size: 10px;\n  font-family: sans-serif;\n  margin-bottom: -4px;\n  margin-left: 4px;\n  border-radius: 100%;\n  padding: 4px;\n}\n\n.unnotification {\n  background-color: #a8a8a8;\n  font-size: 10px;\n  font-family: sans-serif;\n  margin-bottom: -4px;\n  margin-left: 4px;\n  border-radius: 50%;\n  padding: 4px;\n}\n\n.label-heading {\n  color: #000000;\n  font-weight: 500;\n  font-size: 16px;\n  padding: 5px;\n}\n\n.download-buttons {\n  margin: 0px 3px;\n  padding: 4px 6px;\n  background: #915a9a;\n  border-radius: 20px;\n  cursor: pointer;\n}\n\n.download-buttons:hover {\n  background-color: #efe2f1;\n}\n\n.manage-card {\n  background: #f6f6f6;\n  border-radius: 10px;\n  border-left: 3px solid #6c2a84;\n}\n\n.inner-card {\n  background: white;\n  border-radius: 10px;\n  box-shadow: none !important;\n  color: #2e2c2c;\n  font-weight: 500;\n}\n\n.plateNo {\n  font-size: 14px;\n  font-weight: bold;\n  color: #2e2c2c;\n}\n\n.data {\n  color: #bdbdbd;\n  font-weight: 500;\n  font-family: sans-serif;\n  font-size: 11px;\n}\n\n.add-icon {\n  font-size: 32px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vY3VzdG9tLWNlcnRpZmljYXRlL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGN1c3RvbS1jZXJ0aWZpY2F0ZVxcY3VzdG9tLWNlcnRpZmljYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vY3VzdG9tLWNlcnRpZmljYXRlL2N1c3RvbS1jZXJ0aWZpY2F0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxtQkFBQTtBQ0VKOztBRENFO0VBQ0UsYUFBQTtBQ0VKOztBREFFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0dKOztBRERFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQ0lKOztBREZFO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNLRjs7QURIQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ01GOztBREpBO0VBRUUsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0FDTUY7O0FESkE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNPRjs7QURIQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ01GOztBREhBO0VBRUksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNLSjs7QURIRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDTUo7O0FESkU7RUFDRSx5QkFBQTtBQ09KOztBREpFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDT0o7O0FETEU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNRSjs7QURORTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNTSjs7QURQRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ1VKOztBRFJFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNXSiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2N1c3RvbS1jZXJ0aWZpY2F0ZS9jdXN0b20tY2VydGlmaWNhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbldpZHRoIHtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjN2M2OGY4O1xyXG4gIH1cclxuICAucGFkZGluZ0JvdHRvbTEwcHgge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZGRpbmcyNXB4IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIC5pbWVpYm94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnNhdmVidXR0b24ge1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XHJcbiAgfVxyXG4gIC5wZGYtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3BkZi5zdmdcIikgbm8tcmVwZWF0O1xyXG4gIHdpZHRoOiAyM3B4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmVkaXQtd3JhcHBlcntcclxuICB3aWR0aDogMjNweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5hZGRidXR0b25cclxue1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAtLWNvbG9yOiAjN2M2OGY4O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzdjNjhmODtcclxuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcclxuICBtYXJnaW46IDEzcHggNXB4IDBweCAwcHg7XHJcbn1cclxuLm5vdGlmaWNhdGlvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M2OGY4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tYm90dG9tOiAtNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBwYWRkaW5nOiA0cHg7XHJcblxyXG59XHJcblxyXG4udW5ub3RpZmljYXRpb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4YThhODtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTRweDtcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiA0cHg7XHJcblxyXG59XHJcbi5sYWJlbC1oZWFkaW5nXHJcbiAge1xyXG4gICAgY29sb3I6IzAwMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4gIC5kb3dubG9hZC1idXR0b25zIHtcclxuICAgIG1hcmdpbjogMHB4IDNweDtcclxuICAgIHBhZGRpbmc6IDRweCA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTE1YTlhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmRvd25sb2FkLWJ1dHRvbnM6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZTJmMTtcclxuICB9XHJcblxyXG4gIC5tYW5hZ2UtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzZjMmE4NDtcclxuICB9XHJcbiAgLmlubmVyLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHJnYig0NiwgNDQsIDQ0KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5wbGF0ZU5vIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHJnYig0NiwgNDQsIDQ0KTtcclxuICB9XHJcbiAgLmRhdGEge1xyXG4gICAgY29sb3I6ICNiZGJkYmQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG4gIC5hZGQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSIsIi5idXR0b25XaWR0aCB7XG4gIHdpZHRoOiAzMyU7XG4gIGhlaWdodDogMzBweDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcbn1cblxuLnBhZGRpbmdCb3R0b20xMHB4IHtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cblxuLnBhZGRpbmcyNXB4IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmltZWlib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2F2ZWJ1dHRvbiB7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMzBweDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcbn1cblxuLnBkZi13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3BkZi5zdmdcIikgbm8tcmVwZWF0O1xuICB3aWR0aDogMjNweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5lZGl0LXdyYXBwZXIge1xuICB3aWR0aDogMjNweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5hZGRidXR0b24ge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjN2M2OGY4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM3YzY4Zjg7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xuICBtYXJnaW46IDEzcHggNXB4IDBweCAwcHg7XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M2OGY4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiAtNHB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi51bm5vdGlmaWNhdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhOGE4YTg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1ib3R0b206IC00cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4ubGFiZWwtaGVhZGluZyB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmRvd25sb2FkLWJ1dHRvbnMge1xuICBtYXJnaW46IDBweCAzcHg7XG4gIHBhZGRpbmc6IDRweCA2cHg7XG4gIGJhY2tncm91bmQ6ICM5MTVhOWE7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRvd25sb2FkLWJ1dHRvbnM6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlMmYxO1xufVxuXG4ubWFuYWdlLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM2YzJhODQ7XG59XG5cbi5pbm5lci1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6ICMyZTJjMmM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wbGF0ZU5vIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyZTJjMmM7XG59XG5cbi5kYXRhIHtcbiAgY29sb3I6ICNiZGJkYmQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5hZGQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/custom-certificate/custom-certificate.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/delar-application/custom-certificate/custom-certificate.page.ts ***!
  \*********************************************************************************/
/*! exports provided: CustomCertificatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCertificatePage", function() { return CustomCertificatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custom_certificate_create_certificate_create_certificate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../custom-certificate/create-certificate/create-certificate.component */ "./src/app/delar-application/custom-certificate/create-certificate/create-certificate.component.ts");









var CustomCertificatePage = /** @class */ (function () {
    function CustomCertificatePage(ajaxService, modalController, commonService, router, formBuilder, platform) {
        this.ajaxService = ajaxService;
        this.modalController = modalController;
        this.commonService = commonService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.show = false;
        this.companyId = localStorage.getItem("userName");
        this.Apmlogo = "data:image/png;base64,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";
    }
    CustomCertificatePage.prototype.clickToDownload = function () {
        // this.generatedcertificate();
        var printWindow = window.open("height=1000,width=900");
        printWindow.document.write("<html>");
        // printWindow.document.write('</body>')
        printWindow.document.write('<body style="background-image: url(https://kingstrackimages.s3.amazonaws.com/Company/apmlogo_watermarker.svg);background-repeat: no-repeat;background-size: 100% 100%;">');
        var divContents = document.getElementById("pdf5").innerHTML;
        printWindow.document.write(divContents);
        printWindow.document.write("</body></html>");
        printWindow.print();
        printWindow.document.close();
    };
    CustomCertificatePage.prototype.Edit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _custom_certificate_create_certificate_create_certificate_component__WEBPACK_IMPORTED_MODULE_8__["CreateCertificateComponent"],
                            cssClass: "",
                            componentProps: {
                                value: this.imeiSearch.value.imeiNumber,
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            _this.submit();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CustomCertificatePage.prototype.submit = function () {
        var _this = this;
        this.show = false;
        if (this.imeiSearch.value.imeiNumber) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"].web +
                "/global/get/certificate?imeiNo=" +
                this.imeiSearch.value.imeiNumber +
                "&dealerId=" +
                localStorage.getItem("companySuffix");
            this.ajaxService.ajaxGet(url).subscribe(function (res) {
                if (JSON.stringify(res) == "{}" || res.certificatedetails == "-") {
                    _this.commonService.showConfirm("Imei not available press add button to add a Certificate");
                    _this.show = false;
                }
                else if (res.message == "Success") {
                    _this.Certificate = res.certificatedetails;
                    _this.renewalcount = JSON.parse(res.renewalCount);
                    _this.panic = JSON.parse(res.panicCount);
                    _this.TotalcertificateData = JSON.parse(_this.Certificate);
                    var detailofqrcode = [];
                    detailofqrcode.push(_this.TotalcertificateData.CenterName, "Chassis:" + _this.TotalcertificateData.ChassisNo, "EngineNo:" + _this.TotalcertificateData.EngineNo, "Reg.No:" + _this.TotalcertificateData.RegistraionNo);
                    _this.data = detailofqrcode.toString();
                    _this.values = _this.data;
                    _this.show = true;
                }
                else {
                    _this.commonService.showConfirm(res.message);
                }
            });
        }
        else {
            this.commonService.showConfirm("please check the Imei number");
        }
    };
    CustomCertificatePage.prototype.getBack = function () {
        this.router.navigateByUrl("/tabs-login/new-dashboard");
    };
    CustomCertificatePage.prototype.clear = function () {
        this.imeiSearch.patchValue({
            imeiNumber: "",
        });
        this.show = false;
    };
    CustomCertificatePage.prototype.ionViewWillEnter = function () {
        if (history.state) {
            this.imeiSearch.patchValue(history.state);
        }
        this.clear();
    };
    CustomCertificatePage.prototype.ngOnInit = function () {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        var now = new Date();
        var time = new Date().toLocaleTimeString();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        this.pdfDate = today + " " + time;
        this.imeiSearch = this.formBuilder.group({
            imeiNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
    };
    CustomCertificatePage.ctorParameters = function () { return [
        { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("content", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CustomCertificatePage.prototype, "content", void 0);
    CustomCertificatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-custom-certificate",
            template: __webpack_require__(/*! raw-loader!./custom-certificate.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/custom-certificate/custom-certificate.page.html"),
            styles: [__webpack_require__(/*! ./custom-certificate.page.scss */ "./src/app/delar-application/custom-certificate/custom-certificate.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], CustomCertificatePage);
    return CustomCertificatePage;
}());



/***/ })

}]);
//# sourceMappingURL=custom-certificate-custom-certificate-module-es5.js.map