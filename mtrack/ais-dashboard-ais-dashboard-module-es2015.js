(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ais-dashboard-ais-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ais-dashboard/ais-dashboard.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ais-dashboard/ais-dashboard.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class='header'>\r\n  <ion-toolbar>\r\n      <ion-grid>\r\n          <ion-row></ion-row>\r\n          <ion-row>\r\n              <ion-col size='2'>\r\n                  <ion-menu-button></ion-menu-button>\r\n              </ion-col>\r\n              <ion-col size='8.5' style='align-self: center;'>\r\n                  <ion-row>\r\n                      <ion-label> Dashboard </ion-label>\r\n                  </ion-row>\r\n              </ion-col>\r\n              <!-- <ion-col size='1.5'>\r\n                      <ion-row><ion-icon style='font-size: 25px;' ios=\"md-search\" (click) ='searchStatus()' md=\"md-search\"></ion-icon></ion-row>\r\n                  </ion-col> -->\r\n              <ion-col size='1.5' style=\"padding: 0px;\">\r\n                  <ion-row (click)=\"bellRouter()\">\r\n                      <ion-col size='3' style=\"align-self: center;\">\r\n                          <ion-img src=\"assets/dashboard_background/bell.png\" style=\"width:22px; height:22px\">\r\n                          </ion-img>\r\n                          <ion-badge color=\"danger\" style=\"    position: absolute;font-size: 7px;\r\n                              font-size: 9px;\r\n                              top: 6px;\r\n                              left: 17px;\r\n                              padding: 2px;\r\n                              color: white;\r\n                              font-weight: bold;\">\r\n                              {{totalAlertCount}}\r\n                          </ion-badge>\r\n                      </ion-col>\r\n                      <ion-col *ngIf='myPlatform ==\"desktop\"' size='9'>\r\n                          <ion-img [src]=\"app.logo\"></ion-img>\r\n                      </ion-col>\r\n                  </ion-row>\r\n              </ion-col>\r\n          </ion-row>\r\n      </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- ********************************* Mobile View ****************************************************** -->\r\n  <div *ngIf=\"showDashbordChart.includes('Current Vehicle Status')\">\r\n      <ion-row style=\"margin-top: 7px;\">\r\n          <ion-col\r\n              [ngClass]='{\"displayOthers\": (myPlatform === \"desktop\" && showDashbordChart.includes(\"Current Vehicle Status\") === true), \"displayDesktop\":(myPlatform !== \"desktop\" && showDashbordChart.includes(\"Current Vehicle Status\") === true)}'\r\n              class=\"displayLine\" size=\"3\"> </ion-col>\r\n          <ion-col\r\n              [ngClass]='{\"displayOthers\": (myPlatform === \"desktop\" && showDashbordChart.includes(\"Current Vehicle Status\") === true), \"displayDesktop\":(myPlatform !== \"desktop\" && showDashbordChart.includes(\"Current Vehicle Status\") === true)}'\r\n              class=\"vehicleStatusHeading\" size=\"6\">Current Vehicle Status </ion-col>\r\n          <ion-col\r\n              [ngClass]='{\"displayOthers\": (myPlatform === \"desktop\" && showDashbordChart.includes(\"Current Vehicle Status\") === true), \"displayDesktop\":(myPlatform !== \"desktop\" && showDashbordChart.includes(\"Current Vehicle Status\") === true)}'\r\n              style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\" size=\"3\">\r\n          </ion-col>\r\n      </ion-row>\r\n  </div>\r\n  <ion-card\r\n      [ngClass]='{\"displayOthers\":( myPlatform === \"desktop\" || showDashbordChart.includes(\"Current Vehicle Status\")== false), \"displayDesktop\": (myPlatform !== \"desktop\"&& showDashbordChart.includes(\"Current Vehicle Status\") == true)}'>\r\n      <ion-card-content>\r\n          \r\n              <ion-row>\r\n                  <ion-segment scrollable style=\"width:100%\">\r\n                  <ion-col size=\"2.4\" *ngIf=\"!loginData.includes('DoorOpen')\">\r\n                      <ion-row style=\"font-size: xx-small; place-content: center;\">ALL</ion-row>\r\n                      <ion-row class=\"statusBar\" style=\"background-color:#989aa2 ;\"\r\n                          (click)=\"routerModal(vehicleCount.all, 'All')\">{{vehicleCount.all}}</ion-row>\r\n                  </ion-col>\r\n                  <ion-col size=\"2.4\" *ngIf=\"loginData.includes('Running')\">\r\n                      <ion-row style=\"font-size: xx-small; place-content: center;\">RUNNING</ion-row>\r\n                      <ion-row class=\"statusBar\" style=\"background-color:#1eb15d;\"\r\n                          (click)=\"routerModal(vehicleCount.running,'Running' )\">{{vehicleCount.running}}</ion-row>\r\n                  </ion-col>\r\n                  <ion-col *ngIf=\"loginData.includes('Good')\">\r\n                      <ion-row style=\"font-size: xx-small; place-content: center;\">GOOD</ion-row>\r\n                      <ion-row class=\"statusBar\" style=\"background-color:#1eb15d;\"\r\n                          (click)=\"routerModal(vehicleCount.good,'good' )\">{{vehicleCount.good}}</ion-row>\r\n                  </ion-col>\r\n                  <ion-col *ngIf=\"loginData.includes('DoorOpen')\">\r\n                      <ion-row style=\"font-size: xx-small; place-content: center;\">DOOROPEN</ion-row>\r\n                      <ion-row class=\"statusBar\" style=\"background-color:#FF851B ;\"\r\n                          (click)=\"routerModal(vehicleCount.dooropen,'DoorOpen' )\">{{vehicleCount.dooropen}}</ion-row>\r\n                  </ion-col>\r\n                  <ion-col size=\"2.4\" *ngIf=\"loginData.includes('Stop')\">\r\n                      <ion-row style=\"font-size: xx-small; place-content: center;\">STOP</ion-row>\r\n                      <ion-row class=\"statusBar\" style=\"background-color:#FF0000 ;\"\r\n                          (click)=\"routerModal(vehicleCount.stop,'Stop' )\">{{vehicleCount.stop}}</ion-row>\r\n                  </ion-col>\r\n                  <ion-col *ngIf=\"loginData.includes('HighTemp')\">\r\n                      <ion-row style=\"font-size: xx-small; place-content: center;\">HIGHTEMP</ion-row>\r\n                      <ion-row class=\"statusBar\" style=\"background-color:#FF0000 ;\"\r\n                          (click)=\"routerModal(vehicleCount.hightemp,'HighTemp' )\">{{vehicleCount.hightemp}}</ion-row>\r\n                  </ion-col>\r\n                  <ion-col size=\"2.4\" *ngIf=\"loginData.includes('Idle')\">\r\n                      <ion-row style=\"font-size: xx-small; place-content: center;\">IDLE</ion-row>\r\n                      <ion-row class=\"statusBar\" style=\"background-color:#1f5baa ;\"\r\n                          (click)=\"routerModal(vehicleCount.idle,'Idle')\">{{vehicleCount.idle}}</ion-row>\r\n                  </ion-col>\r\n                  <ion-col *ngIf=\"loginData.includes('Geofence')\">\r\n                      <ion-row style=\"font-size: xx-small; place-content: center;\">GEOFENCE</ion-row>\r\n                      <ion-row class=\"statusBar\" style=\"background-color:#1f5baa ;\"\r\n                          (click)=\"routerModal(vehicleCount.geofence,'Geofence')\">{{vehicleCount.geofence}}</ion-row>\r\n                  </ion-col>\r\n                  <ion-col *ngIf=\"loginData.includes('PowerFail')\">\r\n                      <ion-row style=\"font-size: xx-small; place-content: center;\">POWERFAIL</ion-row>\r\n                      <ion-row class=\"statusBar\" style=\"background-color:#724040 ;\"\r\n                          (click)=\"routerModal(vehicleCount.powerfail,'PowerFail')\">{{vehicleCount.powerfail}}\r\n                      </ion-row>\r\n                  </ion-col>\r\n                  <ion-col size=2.4 *ngIf=\"loginData.includes('No Transmission') && entryPoint =='VTS'\">\r\n                      <ion-row style=\"font-size: xx-small; place-content: center;\">NOTRANSMIT</ion-row>\r\n                      <ion-row class=\"statusBar\" style=\"background-color:#000000 ;\"\r\n                          (click)=\"routerModal(vehicleCount.noTransmit,'No Transmission')\">{{vehicleCount.noTransmit}}\r\n                      </ion-row>\r\n                  </ion-col>\r\n                  <ion-col *ngIf=\"loginData.includes('No Transmission') && entryPoint =='TTS'\">\r\n                      <ion-row style=\"font-size: xx-small; place-content: center;\">NOTRANSMIT</ion-row>\r\n                      <ion-row class=\"statusBar\" style=\"background-color:#000000 ;\"\r\n                          (click)=\"routerModal(vehicleCount.noTransmit,'No Transmission')\">{{vehicleCount.noTransmit}}\r\n                      </ion-row>\r\n                  </ion-col>\r\n                  <ion-col size=2.4 *ngIf=\"loginData.includes('Overspeed') && entryPoint =='VTS'\">\r\n                      <ion-row style=\"font-size: xx-small; place-content: center;\">Overspeed</ion-row>\r\n                      <ion-row class=\"statusBar\" style=\"background-color:#f28918;\"\r\n                          (click)=\"routerModal(vehicleCount.Towed,'Towed')\">{{vehicleCount.Overspeed}}\r\n                      </ion-row>\r\n                  </ion-col>\r\n                  <ion-col size=2.4 *ngIf=\"loginData.includes('Towed') && entryPoint =='VTS'\">\r\n                      <ion-row style=\"font-size: xx-small; place-content: center;\">TOWED</ion-row>\r\n                      <ion-row class=\"statusBar\" style=\"background-color:#c200b8;\"\r\n                          (click)=\"routerModal(vehicleCount.Towed,'Towed')\">{{vehicleCount.Towed}}\r\n                      </ion-row>\r\n                  </ion-col>\r\n                  <ion-col size=2.4 *ngIf=\"loginData.includes('Yet_to_transmit') && entryPoint =='VTS'\">\r\n                      <ion-row style=\"font-size: xx-small; place-content: center;\">YETTOTRANSMIT</ion-row>\r\n                      <ion-row class=\"statusBar\" style=\"background-color:#7d410f;\"\r\n                          (click)=\"routerModal(vehicleCount.Yet_to_transmit,'Yet_to_transmit')\">\r\n                          {{vehicleCount.Yet_to_transmit}}\r\n                      </ion-row>\r\n                  </ion-col>\r\n                  <ion-col size=2.4 *ngIf=\"loginData.includes('Online') && entryPoint =='VTS'\">\r\n                      <ion-row style=\"font-size: xx-small; place-content: center;\">ONLINE</ion-row>\r\n                      <ion-row class=\"statusBar\" style=\"background-color:#00E1BC;\"\r\n                          (click)=\"routerModal(vehicleCount.Online,'Online')\">{{vehicleCount.Online}}\r\n                      </ion-row>\r\n                  </ion-col>\r\n              </ion-segment>\r\n              </ion-row>\r\n      \r\n          <ion-row>\r\n              <ion-col size='12'>\r\n                  <div id=\"totalVehicleStatus\"\r\n                      style=\"text-align: -webkit-center;position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                  </div>\r\n              </ion-col>\r\n          </ion-row>\r\n      </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n  <div *ngIf='myPlatform != \"desktop\"'>\r\n      <!-- ********************* Unused Vehicles Summary   ************************** -->\r\n      <div>\r\n          <ion-row *ngIf='showDashbordChart.includes(\"Unused Vehicles Summary\") == true'\r\n              style=\"margin-top: 7px; padding-top: 15px;\">\r\n              <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                  size=\"2\"></ion-col>\r\n              <ion-col class=\"vehicleStatusHeading\" size=\"8\">Unused Vehicles Summary</ion-col>\r\n              <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                  size=\"2\"></ion-col>\r\n          </ion-row>\r\n          <ion-card *ngIf='showDashbordChart.includes(\"Unused Vehicles Summary\") == true'>\r\n              <ion-card-content style=\"padding : 0px\">\r\n                  <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\" \r\n                      (ionChange)=\"unUsedVehicleStatus($event)\">\r\n                      <ion-row>\r\n                          <ion-col size='4' *ngFor=\"let unUsedVehicleStatus of summaryStatusChanger\">\r\n                              <ion-row *ngIf='unUsedVehicleStatus.status != \"Current\"'>\r\n                                  <ion-col size='3'>\r\n                                      <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                          id='{{unUsedVehicleStatus.status}}' checked [ngClass]=\"{'checkboxIos': isIosPlatform == true}\"\r\n                                          value=\"{{unUsedVehicleStatus.status}}\"></ion-radio>\r\n                                  </ion-col>\r\n                                  <ion-col size='8'>\r\n                                      <ion-label style=\"font-size: 9px;\">{{unUsedVehicleStatus.status}}</ion-label>\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                          </ion-col>\r\n                      </ion-row>\r\n                  </ion-radio-group>\r\n                  <!-- <ion-row>\r\n                                  <ion-col size='12'>\r\n                                      <div id=\"unUsedVehicleStatus\" style=\"position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\"></div>\r\n                                  </ion-col>\r\n                              </ion-row> -->\r\n                  <ion-row>\r\n                      <ion-col size='12'>\r\n                          <div id=\"unUsedVehicleStatus\"\r\n                              style=\"position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                          </div>\r\n                      </ion-col>\r\n                  </ion-row>\r\n              </ion-card-content>\r\n          </ion-card>\r\n\r\n          <!-- ********************* Alert Count Summery Card   ************************** -->\r\n\r\n          <ion-row *ngIf='showDashbordChart.includes(\"Alert Count Summery\") == true'\r\n              style=\"margin-top: 7px; padding-top: 15px;\">\r\n              <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                  size=\"3\"></ion-col>\r\n              <ion-col class=\"vehicleStatusHeading\" size=\"6\">Alert Count Summary </ion-col>\r\n              <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                  size=\"3\"></ion-col>\r\n          </ion-row>\r\n          <ion-card *ngIf='showDashbordChart.includes(\"Alert Count Summery\") == true'>\r\n              <ion-card-content style=\"padding:0px\">\r\n                  <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\" \r\n                      (ionChange)=\"alertsAndCounts($event)\">\r\n                      <ion-row>\r\n                          <ion-col size='4' *ngFor=\"let alertsAndCounts of summaryStatusChanger\">\r\n                              <ion-row>\r\n                                  <ion-col size='3'>\r\n                                      <ion-radio color='danger' style=\"width: 12px; height: 12px;\" [ngClass]=\"{'checkboxIos': isIosPlatform == true}\"\r\n                                          id='{{alertsAndCounts.status}}' checked value=\"{{alertsAndCounts.status}}\">\r\n                                      </ion-radio>\r\n                                  </ion-col>\r\n                                  <ion-col size='8'>\r\n                                      <ion-label style=\"font-size: 9px;\">{{alertsAndCounts.status}}</ion-label>\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                          </ion-col>\r\n                      </ion-row>\r\n                  </ion-radio-group>\r\n                  <ion-row>\r\n                      <ion-col size='12'>\r\n                          <div id=\"alertCountSummery\"\r\n                              style=\"position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                          </div>\r\n                      </ion-col>\r\n                  </ion-row>\r\n              </ion-card-content>\r\n          </ion-card>\r\n\r\n          <!-- ********************* TOP 5 Door Open   ************************** -->\r\n          <ion-row *ngIf='showDashbordChart.includes(\"Top 5 Power Fail\") == true'\r\n              style=\"margin-top: 7px; padding-top: 15px;\">\r\n              <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                  size=\"3\"></ion-col>\r\n              <ion-col class=\"vehicleStatusHeading\" size=\"6\">Top 5 Power Fail</ion-col>\r\n              <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                  size=\"3\"></ion-col>\r\n          </ion-row>\r\n\r\n          <ion-card class=\"card\" *ngIf='showDashbordChart.includes(\"Top 5 Power Fail\") == true'>\r\n              <ion-card-content>\r\n                  <ion-radio-group class=\"radio\" allow-empty-selection=\"false\" name=\"radio-group\" \r\n                      (ionChange)=\"noOfPowerFail($event)\">\r\n                      <ion-row>\r\n                          <ion-col size='4' *ngFor=\"let noOfPowerFail of statusChanger\">\r\n                              <ion-row>\r\n                                  <ion-col size='3'>\r\n                                      <ion-radio color='danger' style=\"width: 12px; height: 12px;\" [ngClass]=\"{'checkboxIos': isIosPlatform == true}\"\r\n                                          id='{{noOfPowerFail.status}}' checked value=\"{{noOfPowerFail.status}}\">\r\n                                      </ion-radio>\r\n                                  </ion-col>\r\n                                  <ion-col size='8'>\r\n                                      <ion-label style=\"font-size: 9px;\">{{noOfPowerFail.status}}</ion-label>\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                          </ion-col>\r\n                      </ion-row>\r\n                  </ion-radio-group>\r\n\r\n                  <ion-row>\r\n                      <ion-col size='12'>\r\n                          <div id=\"noOfPowerFail\"\r\n                              style=\"position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                          </div>\r\n                      </ion-col>\r\n\r\n\r\n                  </ion-row>\r\n              </ion-card-content>\r\n          </ion-card>\r\n\r\n          <!-- ********************* TOP 5 Door Open   ************************** -->\r\n          <ion-row *ngIf='showDashbordChart.includes(\"Top 5 Door Open\") == true'\r\n              style=\"margin-top: 7px; padding-top: 15px;\">\r\n              <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                  size=\"3\"></ion-col>\r\n              <ion-col class=\"vehicleStatusHeading\" size=\"6\">Top 5 Door Open</ion-col>\r\n              <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                  size=\"3\"></ion-col>\r\n          </ion-row>\r\n          <ion-card class=\"card\" *ngIf='showDashbordChart.includes(\"Top 5 Door Open\") == true'>\r\n              <ion-card-content>\r\n                  <ion-radio-group class=\"radio\" allow-empty-selection=\"false\" name=\"radio-group\" \r\n                      (ionChange)=\"noOfDoorOpen($event)\">\r\n                      <ion-row>\r\n                          <ion-col size='4' *ngFor=\"let noOfDoorOpen of statusChanger\">\r\n                              <ion-row>\r\n                                  <ion-col size='3'>\r\n                                      <ion-radio color='danger' style=\"width: 12px; height: 12px;\" [ngClass]=\"{'checkboxIos': isIosPlatform == true}\"\r\n                                          id='{{noOfDoorOpen.status}}' checked value=\"{{noOfDoorOpen.status}}\">\r\n                                      </ion-radio>\r\n                                  </ion-col>\r\n                                  <ion-col size='8'>\r\n                                      <ion-label style=\"font-size: 9px;\">{{noOfDoorOpen.status}}</ion-label>\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                          </ion-col>\r\n                      </ion-row>\r\n                  </ion-radio-group>\r\n\r\n                  <ion-row>\r\n                      <ion-col size='12'>\r\n                          <div id=\"noOfDoorOpen\"\r\n                              style=\"position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                          </div>\r\n                      </ion-col>\r\n\r\n\r\n                  </ion-row>\r\n              </ion-card-content>\r\n          </ion-card>\r\n\r\n          <!-- ********************* Odometer Summery Card   ************************** -->\r\n          <ion-row *ngIf='showDashbordChart.includes(\"Odometer Summary\") == true'\r\n              style=\"margin-top: 7px; padding-top: 15px;\">\r\n              <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                  size=\"3\"></ion-col>\r\n              <ion-col class=\"vehicleStatusHeading\" size=\"6\">Odometer Summary</ion-col>\r\n              <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                  size=\"3\"></ion-col>\r\n          </ion-row>\r\n          <ion-card *ngIf='showDashbordChart.includes(\"Odometer Summary\") == true'>\r\n              <ion-card-content style=\"padding:0px\">\r\n                  <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\" (ionChange)=\"odometer($event)\" >\r\n                      <ion-row>\r\n                          <ion-col size='4' *ngFor=\"let odometer of summaryStatusChanger\">\r\n                              <ion-row *ngIf='odometer.status != \"Current\"'>\r\n                                  <ion-col size='3'>\r\n                                      <ion-radio color='danger' style=\"width: 12px; height: 12px;\" [ngClass]=\"{'checkboxIos': isIosPlatform == true}\"\r\n                                          id='{{odometer.status}}' checked value=\"{{odometer.status}}\"></ion-radio>\r\n                                  </ion-col>\r\n                                  <ion-col size='8'>\r\n                                      <ion-label style=\"font-size: 9px;\">{{odometer.status}}</ion-label>\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                          </ion-col>\r\n                      </ion-row>\r\n                  </ion-radio-group>\r\n                  <ion-row>\r\n                      <ion-col size='12'>\r\n                          <div id=\"odometerSummery\"\r\n                              style=\"position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                          </div>\r\n                      </ion-col>\r\n                  </ion-row>\r\n              </ion-card-content>\r\n          </ion-card>\r\n          <!-- ********************* Speedometer Summery Card   ************************** -->\r\n          <ion-row *ngIf='showDashbordChart.includes(\"Speedometer Summary\") == true'\r\n              style=\"margin-top: 7px; padding-top: 15px;\">\r\n              <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                  size=\"3\"></ion-col>\r\n              <ion-col class=\"vehicleStatusHeading\" size=\"6\">Speedometer Summary </ion-col>\r\n              <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                  size=\"3\"></ion-col>\r\n          </ion-row>\r\n          <ion-card *ngIf='showDashbordChart.includes(\"Speedometer Summary\") == true'>\r\n              <ion-card-content style=\"padding:0px\">\r\n                  <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\" (ionChange)=\"speedometer($event)\">\r\n                      <ion-row>\r\n                          <ion-col size='4' *ngFor=\"let speedometer of summaryStatusChanger\">\r\n                              <ion-row *ngIf='speedometer.status == \"Yesterday\"'>\r\n                                  <ion-col size='3'>\r\n                                      <ion-radio color='danger' style=\"width: 12px; height: 12px;\" [ngClass]=\"{'checkboxIos': isIosPlatform == true}\"\r\n                                          id='{{speedometer.status}}' checked value=\"{{speedometer.status}}\">\r\n                                      </ion-radio>\r\n                                  </ion-col>\r\n                                  <ion-col size='8'>\r\n                                      <ion-label style=\"font-size: 9px;\">{{speedometer.status}}</ion-label>\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                          </ion-col>\r\n                      </ion-row>\r\n                  </ion-radio-group>\r\n                  <ion-row>\r\n                      <ion-col size='12'>\r\n                          <div id=\"speedometerSummery\"></div>\r\n                      </ion-col>\r\n                  </ion-row>\r\n              </ion-card-content>\r\n          </ion-card>\r\n\r\n          <!-- ********************* Total Hrs Distribution Summary  ************************** -->\r\n          <ion-row *ngIf='showDashbordChart.includes(\"Distribution Summary\") == true'\r\n              style=\"margin-top: 7px; padding-top: 15px;\">\r\n              <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                  size=\"3\"></ion-col>\r\n              <ion-col class=\"vehicleStatusHeading\" size=\"6\">Distribution Summary</ion-col>\r\n              <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                  size=\"3\"></ion-col>\r\n          </ion-row>\r\n          <ion-card *ngIf='showDashbordChart.includes(\"Distribution Summary\") == true'>\r\n              <ion-card-content>\r\n                  <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n                      (ionChange)=\"totalHrsDistributionSummary($event)\">\r\n                      <ion-row>\r\n                          <ion-col size='4' *ngFor=\"let totalHrsDistribution of statusChanger\">\r\n                              <ion-row>\r\n                                  <ion-col size='3'>\r\n                                      <ion-radio color='danger' style=\"width: 12px; height: 12px;\" [ngClass]=\"{'checkboxIos': isIosPlatform == true}\"\r\n                                          id='{{totalHrsDistribution.status}}' checked\r\n                                          value=\"{{totalHrsDistribution.status}}\"></ion-radio>\r\n                                  </ion-col>\r\n                                  <ion-col size='8'>\r\n                                      <ion-label style=\"font-size: 9px;\">{{totalHrsDistribution.status}}</ion-label>\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                          </ion-col>\r\n                      </ion-row>\r\n                  </ion-radio-group>\r\n                  <ion-row>\r\n                      <ion-col size='12'>\r\n                          <div id=\"totalHrsDistributionChart\"\r\n                              style=\"position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                          </div>\r\n                      </ion-col>\r\n                  </ion-row>\r\n              </ion-card-content>\r\n          </ion-card>\r\n      </div>\r\n      <!-- ********************* Over Speed Alert Card    ************************** -->\r\n      <div>\r\n          <ion-row *ngIf='showDashbordChart.includes(\"Top 5 Overspeed Vehicles\") == true'\r\n              style=\"margin-top: 7px; padding-top: 15px;\">\r\n              <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                  size=\"2\"></ion-col>\r\n              <ion-col class=\"vehicleStatusHeading\" size=\"8\">Top 5 Overspeed Vehicles</ion-col>\r\n              <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                  size=\"2\"></ion-col>\r\n          </ion-row>\r\n          <ion-card *ngIf='showDashbordChart.includes(\"Top 5 Overspeed Vehicles\") == true'>\r\n              <ion-img src=\"/assets/dashboard_background/overspeedimg.png\"\r\n                  style=\"height: 75%;position: absolute;bottom: 0px;left: 120px;\"></ion-img>\r\n              <ion-card-content>\r\n                  <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\" \r\n                      (ionChange)=\"overspeedStatus($event)\">\r\n                      <ion-row>\r\n                          <ion-col size='4' *ngFor=\"let overSpeedStatus of statusChanger\">\r\n                              <ion-row>\r\n                                  <ion-col size='3'>\r\n                                      <ion-radio color='danger' style=\"width: 12px; height: 12px;\" [ngClass]=\"{'checkboxIos': isIosPlatform == true}\"\r\n                                          id='{{overSpeedStatus.status}}' checked value=\"{{overSpeedStatus.status}}\">\r\n                                      </ion-radio>\r\n                                  </ion-col>\r\n                                  <ion-col size='8'>\r\n                                      <ion-label style=\"font-size: 9px;\">{{overSpeedStatus.status}}</ion-label>\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                          </ion-col>\r\n                      </ion-row>\r\n                  </ion-radio-group>\r\n                  <ion-row>\r\n                      <ion-col size='12'>\r\n                          <div id=\"overspeedvehicles\"\r\n                              style=\"position: relative; overflow: hidden; max-width: 800px; width: 280;height: 200px;\">\r\n                          </div>\r\n                      </ion-col>\r\n                  </ion-row>\r\n              </ion-card-content>\r\n          </ion-card>\r\n\r\n          <!-- ********************* Un Used Assert Card    ************************** -->\r\n          <ion-row *ngIf='showDashbordChart.includes(\"Top 5 Unused Assets\") == true'\r\n              style=\"margin-top: 7px; padding-top: 15px;\">\r\n              <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                  size=\"3\"></ion-col>\r\n              <ion-col class=\"vehicleStatusHeading\" size=\"6\">Top 5 Unused Assets</ion-col>\r\n              <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                  size=\"3\"></ion-col>\r\n          </ion-row>\r\n          <ion-card *ngIf='showDashbordChart.includes(\"Top 5 Unused Assets\") == true'>\r\n              <ion-card-content>\r\n                  <ion-img src=\"/assets/dashboard_background/unusedassert.png\"\r\n                      style=\"height: 75%;position: absolute;bottom: 0px;left: 120px;\"></ion-img>\r\n                  <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\" \r\n                      (ionChange)=\"unUsedAssert($event)\">\r\n                      <ion-row>\r\n                          <ion-col size='4' *ngFor=\"let unUsedAssertStatus of statusChanger\">\r\n                              <ion-row>\r\n                                  <ion-col size='3'>\r\n                                      <ion-radio color='danger' style=\"width: 12px; height: 12px;\" [ngClass]=\"{'checkboxIos': isIosPlatform == true}\"\r\n                                          id='{{unUsedAssertStatus.status}}' checked\r\n                                          value=\"{{unUsedAssertStatus.status}}\"></ion-radio>\r\n                                  </ion-col>\r\n                                  <ion-col size='8'>\r\n                                      <ion-label style=\"font-size: 9px;\">{{unUsedAssertStatus.status}}</ion-label>\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                          </ion-col>\r\n                      </ion-row>\r\n                  </ion-radio-group>\r\n                  <ion-row>\r\n                      <ion-col size='12'>\r\n                          <div id=\"unUsedAssert\"\r\n                              style=\"position: relative; overflow: hidden; max-width: 800px; width: 280;height: 200px;\">\r\n                          </div>\r\n                      </ion-col>\r\n                  </ion-row>\r\n              </ion-card-content>\r\n          </ion-card>\r\n\r\n          <!-- ********************* Engine Hours Card    ************************** -->\r\n          <ion-row *ngIf='showDashbordChart.includes(\"Top 5 Engine Hours\") == true'\r\n              style=\"margin-top: 7px; padding-top: 15px;\">\r\n              <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                  size=\"3\"></ion-col>\r\n              <ion-col class=\"vehicleStatusHeading\" size=\"6\">Top 5 Engine Hours</ion-col>\r\n              <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                  size=\"3\"></ion-col>\r\n          </ion-row>\r\n          <ion-card *ngIf='showDashbordChart.includes(\"Top 5 Engine Hours\") == true'>\r\n              <ion-card-content>\r\n                  <ion-img src=\"/assets/dashboard_background/enginehrs.png\"\r\n                      style=\"height: 75%;position: absolute;bottom: 0px;left: 120px;\"></ion-img>\r\n                  <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"  (ionChange)=\"engineHours($event)\">\r\n                      <ion-row>\r\n                          <ion-col size='4' *ngFor=\"let engineHoursStatus of statusChanger\">\r\n                              <ion-row>\r\n                                  <ion-col size='3'>\r\n                                      <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                          id='{{engineHoursStatus.status}}' checked [ngClass]=\"{'checkboxIos': isIosPlatform == true}\"\r\n                                          value=\"{{engineHoursStatus.status}}\"></ion-radio>\r\n                                  </ion-col>\r\n                                  <ion-col size='8'>\r\n                                      <ion-label style=\"font-size: 9px;\">{{engineHoursStatus.status}}</ion-label>\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                          </ion-col>\r\n                      </ion-row>\r\n                  </ion-radio-group>\r\n                  <ion-row>\r\n                      <ion-col size='12'>\r\n                          <div id=\"engineHours\"\r\n                              style=\"position: relative; overflow: hidden; max-width: 800px; width: 280;height: 200px;\">\r\n                          </div>\r\n                      </ion-col>\r\n                  </ion-row>\r\n              </ion-card-content>\r\n          </ion-card>\r\n\r\n          <!-- ********************* Vehicles Odometer Card    ************************** -->\r\n          <ion-row *ngIf='showDashbordChart.includes(\"Top 5 Odometer Vehicles\") == true'\r\n              style=\"margin-top: 7px; padding-top: 15px;\">\r\n              <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                  size=\"2\"></ion-col>\r\n              <ion-col class=\"vehicleStatusHeading\" size=\"8\">Top 5 Odometer Vehicles</ion-col>\r\n              <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                  size=\"2\"></ion-col>\r\n          </ion-row>\r\n          <ion-card *ngIf='showDashbordChart.includes(\"Top 5 Odometer Vehicles\") == true'>\r\n              <ion-card-content>\r\n                  <ion-img src=\"/assets/dashboard_background/top5odometervehicles.png\"\r\n                      style=\"height: 75%;position: absolute;bottom: 0px;left: 120px;\"></ion-img>\r\n                  <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n                      (ionChange)=\"vehicleOdometer($event)\">\r\n                      <ion-row>\r\n                          <ion-col size='4' *ngFor=\"let vehicleOdometerStatus of statusChanger\">\r\n                              <ion-row>\r\n                                  <ion-col size='3'>\r\n                                      <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                          id='{{vehicleOdometerStatus.status}}' checked [ngClass]=\"{'checkboxIos': isIosPlatform == true}\"\r\n                                          value=\"{{vehicleOdometerStatus.status}}\"></ion-radio>\r\n                                  </ion-col>\r\n                                  <ion-col size='8'>\r\n                                      <ion-label style=\"font-size: 9px;\">{{vehicleOdometerStatus.status}}</ion-label>\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                          </ion-col>\r\n                      </ion-row>\r\n                  </ion-radio-group>\r\n                  <ion-row>\r\n                      <ion-col size='12'>\r\n                          <div id=\"vehicleOdometer\"\r\n                              style=\"position: relative; overflow: hidden; max-width: 800px; width: 280;height: 200px;\">\r\n                          </div>\r\n                      </ion-col>\r\n                  </ion-row>\r\n              </ion-card-content>\r\n          </ion-card>\r\n      </div>\r\n\r\n  </div>\r\n\r\n  <!-- ********************************* Desktop Web  View ****************************************************** -->\r\n  <ion-row style=\"padding: 2rem 0px 2rem 0px;\">\r\n      <ion-col size=\"6\"\r\n          [ngClass]='{\"displayDesktop\": (myPlatform === \"desktop\" && showDashbordChart.includes(\"Current Vehicle Status\") == true), \"displayOthers\":(myPlatform !== \"desktop\" && showDashbordChart.includes(\"Current Vehicle Status\") == true)}'>\r\n          <ion-card class=\"card\">\r\n              <ion-card-header style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n                  Current Vehicle Status</ion-card-header>\r\n              <ion-card-content>\r\n                  <ion-row>\r\n                      <ion-col size=\"7\">\r\n                          <div id=\"totalVehicleStatusDesktop\"\r\n                              style=\"text-align: -webkit-center;position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                          </div>\r\n                      </ion-col>\r\n                      <ion-col size=\"4\">\r\n                          <div style=\"font-size: 11px;\">\r\n                              <ion-row *ngIf=\"loginData.includes('Running')\">\r\n                                  <ion-col size=\"2\">\r\n                                      <div class=\"circle\" style=\"border-color:#1eb15d;\"></div>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"7\">\r\n                                      RUNNING\r\n                                  </ion-col>\r\n                                  <ion-col size=\"3\">\r\n                                      {{vehicleCount.running}}\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                              <ion-row *ngIf=\"loginData.includes('Good')\">\r\n                                  <ion-col size=\"2\">\r\n                                      <div class=\"circle\" style=\"border-color:#1eb15d;\"></div>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"7\">\r\n                                      GOOD\r\n                                  </ion-col>\r\n                                  <ion-col size=\"3\">\r\n                                      {{vehicleCount.good}}\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                              <ion-row *ngIf=\"loginData.includes('DoorOpen')\">\r\n                                  <ion-col size=\"2\">\r\n                                      <div class=\"circle\" style=\"border-color:#FF851B;\"></div>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"7\">\r\n                                      DOOROPEN\r\n                                  </ion-col>\r\n                                  <ion-col size=\"3\">\r\n                                      {{vehicleCount.dooropen}}\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                             \r\n                              <ion-row *ngIf=\"loginData.includes('Stop')\">\r\n                                  <ion-col size=\"2\">\r\n                                      <div class=\"circle\" style=\"border-color:#FF0000;\"></div>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"7\">\r\n                                      STOP\r\n                                  </ion-col>\r\n                                  <ion-col size=\"3\">\r\n                                      {{vehicleCount.stop}}\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                              <ion-row *ngIf=\"loginData.includes('HighTemp')\">\r\n                                  <ion-col size=\"2\">\r\n                                      <div class=\"circle\" style=\"border-color:#FF0000;\"></div>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"7\">\r\n                                      HIGHTEMP\r\n                                  </ion-col>\r\n                                  <ion-col size=\"3\">\r\n                                      {{vehicleCount.hightemp}}\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                              <ion-row *ngIf=\"loginData.includes('Idle')\">\r\n                                  <ion-col size=\"2\">\r\n                                      <div class=\"circle\" style=\"border-color:#1f5baa;\"></div>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"7\">\r\n                                      IDLE\r\n                                  </ion-col>\r\n                                  <ion-col size=\"3\">\r\n                                      {{vehicleCount.idle}}\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                              \r\n                              <ion-row *ngIf=\"loginData.includes('Geofence')\">\r\n                                  <ion-col size=\"2\">\r\n                                      <div class=\"circle\" style=\"border-color:#1f5baa;\"></div>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"7\">\r\n                                      GEOFENCE\r\n                                  </ion-col>\r\n                                  <ion-col size=\"3\">\r\n                                      {{vehicleCount.geofence}}\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                              <ion-row *ngIf=\"loginData.includes('PowerFail')\">\r\n                                  <ion-col size=\"2\">\r\n                                      <div class=\"circle\" style=\"border-color:#412525;\"></div>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"7\">\r\n                                      POWERFAIL\r\n                                  </ion-col>\r\n                                  <ion-col size=\"3\">\r\n                                      {{vehicleCount.powerfail}}\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                              <ion-row *ngIf=\"loginData.includes('No Transmission')\">\r\n                                  <ion-col size=\"2\">\r\n                                      <div class=\"circle\" style=\"border-color:#000000;\"></div>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"7\">\r\n                                      NOTRANSMIT\r\n                                  </ion-col>\r\n                                  <ion-col size=\"3\">\r\n                                      {{vehicleCount.noTransmit}}\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                              <ion-row *ngIf=\"loginData.includes('Overspeed')\">\r\n                                  <ion-col size=\"2\">\r\n                                      <div class=\"circle\" style=\"border-color:#FF851B;\"></div>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"7\">\r\n                                      OVERSPEED\r\n                                  </ion-col>\r\n                                  <ion-col size=\"3\">\r\n                                      {{vehicleCount.Overspeed}}\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                              <ion-row *ngIf=\"loginData.includes('Towed')\">\r\n                                  <ion-col size=\"2\">\r\n                                      <div class=\"circle\" style=\"border-color:#c200b8;\"></div>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"7\">\r\n                                      TOWED\r\n                                  </ion-col>\r\n                                  <ion-col size=\"3\">\r\n                                      {{vehicleCount.Towed}}\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                              <ion-row *ngIf=\"loginData.includes('Yet_to_transmit')\">\r\n                                  <ion-col size=\"2\">\r\n                                      <div class=\"circle\" style=\"border-color:#7d410f;\"></div>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"7\">\r\n                                      YET TO TRASMIT\r\n                                  </ion-col>\r\n                                  <ion-col size=\"3\">\r\n                                      {{vehicleCount.Yet_to_transmit}}\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                              <ion-row *ngIf=\"loginData.includes('Online')\">\r\n                                  <ion-col size=\"2\">\r\n                                      <div class=\"circle\" style=\"border-color:#00E1BC;\"></div>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"7\">\r\n                                      ONLINE\r\n                                  </ion-col>\r\n                                  <ion-col size=\"3\">\r\n                                      {{vehicleCount.Online}}\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                          </div>\r\n                      </ion-col>\r\n                  </ion-row>\r\n              </ion-card-content>\r\n          </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\"\r\n          [ngClass]='{\"displayDesktop\": (myPlatform === \"desktop\" && showDashbordChart.includes(\"Current Vehicle Status\") == true), \"displayOthers\":(myPlatform !== \"desktop\" && showDashbordChart.includes(\"Current Vehicle Status\") == true)}'>\r\n          <ion-card class=\"card\">\r\n              <ion-card-header style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n\r\n                 Panic Alert\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                  <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n                      (ionChange)=\"alertsAndCounts($event)\" style=\"display: none;\">\r\n                      <ion-row>\r\n                          <ion-col size='4' *ngFor=\"let alertsAndCounts of summaryStatusChanger\">\r\n                              <ion-row>\r\n                                  <ion-col size='3'>\r\n                                      <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                          id='{{alertsAndCounts.status}}' checked value=\"{{alertsAndCounts.status}}\">\r\n                                      </ion-radio>\r\n                                  </ion-col>\r\n                                  <ion-col size='8'>\r\n                                      <ion-label style=\"font-size: 9px;\">{{alertsAndCounts.status}}</ion-label>\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                          </ion-col>\r\n                      </ion-row>\r\n                  </ion-radio-group>\r\n                  <ion-row>\r\n                    <ion-col size='12' style=\"padding: 1.8rem 0px\">\r\n                          <div id=\"alertCountSummery\"\r\n                              style=\"position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                          </div>\r\n                      </ion-col>\r\n                      <!-- <ion-col size='12'>\r\n                        &napos;\r\n                    </ion-col> -->\r\n                  </ion-row>\r\n\r\n\r\n              </ion-card-content>\r\n          </ion-card>\r\n      </ion-col>\r\n  </ion-row>\r\n  <div *ngIf='myPlatform == \"desktop\"'>\r\n      <ion-row>\r\n\r\n          <ion-col size=\"6\" *ngIf='showDashbordChart.includes(\"Top 5 Power Fail\") == true'>\r\n              <ion-card class=\"card\">\r\n                  <ion-card-header\r\n                      style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n                      Top 5 Power Fail\r\n                  </ion-card-header>\r\n                  <ion-card-content>\r\n                      <ion-radio-group class=\"radio\" allow-empty-selection=\"false\" name=\"radio-group\"\r\n                          (ionChange)=\"noOfPowerFail($event)\">\r\n                          <ion-row>\r\n                              <ion-col size='4' *ngFor=\"let noOfPowerFail of statusChanger\">\r\n                                  <ion-row>\r\n                                      <ion-col size='3'>\r\n                                          <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                              id='{{noOfPowerFail.status}}' checked value=\"{{noOfPowerFail.status}}\">\r\n                                          </ion-radio>\r\n                                      </ion-col>\r\n                                      <ion-col size='8'>\r\n                                          <ion-label style=\"font-size: 9px;\">{{noOfPowerFail.status}}</ion-label>\r\n                                      </ion-col>\r\n                                  </ion-row>\r\n                              </ion-col>\r\n                          </ion-row>\r\n                      </ion-radio-group>\r\n\r\n                      <ion-row>\r\n                          <ion-col size='12'>\r\n                              <div id=\"noOfPowerFail\"\r\n                                  style=\"position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                              </div>\r\n                          </ion-col>\r\n                   </ion-row>\r\n                  </ion-card-content>\r\n              </ion-card>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"6\" *ngIf='showDashbordChart.includes(\"Top 5 Door Open\") == true'>\r\n              <ion-card class=\"card\">\r\n                  <ion-card-header\r\n                      style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n                      Top 5 Door Open\r\n                  </ion-card-header>\r\n                  <ion-card-content>\r\n                      <ion-radio-group class=\"radio\" allow-empty-selection=\"false\" name=\"radio-group\"\r\n                          (ionChange)=\"noOfDoorOpen($event)\">\r\n                          <ion-row>\r\n                              <ion-col size='4' *ngFor=\"let noOfDoorOpen of statusChanger\">\r\n                                  <ion-row>\r\n                                      <ion-col size='3'>\r\n                                          <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                              id='{{noOfDoorOpen.status}}' checked value=\"{{noOfDoorOpen.status}}\">\r\n                                          </ion-radio>\r\n                                      </ion-col>\r\n                                      <ion-col size='8'>\r\n                                          <ion-label style=\"font-size: 9px;\">{{noOfDoorOpen.status}}</ion-label>\r\n                                      </ion-col>\r\n                                  </ion-row>\r\n                              </ion-col>\r\n                          </ion-row>\r\n                      </ion-radio-group>\r\n\r\n                      <ion-row>\r\n                          <ion-col size='12'>\r\n                              <div id=\"noOfDoorOpen\"\r\n                                  style=\"position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                              </div>\r\n                          </ion-col>\r\n\r\n\r\n                      </ion-row>\r\n                  </ion-card-content>\r\n              </ion-card>\r\n\r\n          </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n\r\n          <ion-col size=\"4\" *ngIf='showDashbordChart.includes(\"Unused Vehicles Summary\") == true'>\r\n              <ion-card class=\"card\">\r\n                  <ion-card-header\r\n                      style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n                      Unused Vehicles Summary\r\n                  </ion-card-header>\r\n                  <ion-card-content>\r\n                      <ion-radio-group class=\"radio\" allow-empty-selection=\"false\" name=\"radio-group\"\r\n                          (ionChange)=\"unUsedVehicleStatus($event)\">\r\n                          <ion-row>\r\n                              <ion-col size='4' *ngFor=\"let unUsedVehicleStatus of summaryStatusChanger\">\r\n                                  <ion-row *ngIf='unUsedVehicleStatus.status != \"Current\"'>\r\n                                      <ion-col size='3'>\r\n                                          <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                              id='{{unUsedVehicleStatus.status}}' checked\r\n                                              value=\"{{unUsedVehicleStatus.status}}\"></ion-radio>\r\n                                      </ion-col>\r\n                                      <ion-col size='8'>\r\n                                          <ion-label style=\"font-size: 9px;\">{{unUsedVehicleStatus.status}}\r\n                                          </ion-label>\r\n                                      </ion-col>\r\n                                  </ion-row>\r\n                              </ion-col>\r\n                          </ion-row>\r\n                      </ion-radio-group>\r\n\r\n                      <ion-row>\r\n                          <ion-col size='12'>\r\n                              <div id=\"unUsedVehicleStatus\"\r\n                                  style=\"position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                              </div>\r\n                          </ion-col>\r\n\r\n\r\n                      </ion-row>\r\n                  </ion-card-content>\r\n              </ion-card>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n              <ion-card class=\"card\">\r\n                  <ion-card-header\r\n                      style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n                      Wire Cut\r\n                  </ion-card-header>\r\n                  <ion-card-content>\r\n                      <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n                          (ionChange)=\"odometer($event)\" style=\"display: none;\">\r\n                          <ion-row>\r\n                              <ion-col size='4' *ngFor=\"let odometer of summaryStatusChanger\">\r\n                                  <ion-row *ngIf='odometer.status != \"Current\"'>\r\n                                      <ion-col size='3'>\r\n                                          <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                              id='{{odometer.status}}' checked value=\"{{odometer.status}}\">\r\n                                          </ion-radio>\r\n                                      </ion-col>\r\n                                      <ion-col size='8'>\r\n                                          <ion-label style=\"font-size: 9px;\">{{odometer.status}}</ion-label>\r\n                                      </ion-col>\r\n                                  </ion-row>\r\n                              </ion-col>\r\n                          </ion-row>\r\n                      </ion-radio-group>\r\n                      <ion-row>\r\n                        <ion-col size='12' style=\"padding: 2rem 0px\">\r\n                              <div id=\"odometerSummery\"\r\n                                  style=\"position: relative; overflow: hidden; max-width: 800px; width: 400; height: 400;\">\r\n                              </div>\r\n                          </ion-col>\r\n                      </ion-row>\r\n                  </ion-card-content>\r\n              </ion-card>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n              <ion-card class=\"card\">\r\n                  <ion-card-header\r\n                      style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n                      Tilt Alert  \r\n                  </ion-card-header>\r\n                  <ion-card-content>\r\n                      <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n                          (ionChange)=\"speedometer($event)\" style=\"display: none;\">\r\n                          <ion-row>\r\n                              <ion-col size='4' *ngFor=\"let speedometer of summaryStatusChanger\">\r\n                                  <ion-row *ngIf='speedometer.status == \"Yesterday\"'>\r\n                                      <ion-col size='3'>\r\n                                          <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                              id='{{speedometer.status}}' checked value=\"{{speedometer.status}}\">\r\n                                          </ion-radio>\r\n                                      </ion-col>\r\n                                      <ion-col size='8'>\r\n                                          <ion-label style=\"font-size: 9px;\">{{speedometer.status}}</ion-label>\r\n                                      </ion-col>\r\n                                  </ion-row>\r\n                              </ion-col>\r\n                          </ion-row>\r\n                      </ion-radio-group>\r\n                      <ion-row >\r\n                          <ion-col size='12' style=\"padding: 2rem 0px\">\r\n                              <div id=\"speedometerSummery\"></div>\r\n                          </ion-col>\r\n                      </ion-row>\r\n\r\n                  </ion-card-content>\r\n              </ion-card>\r\n          </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n          <ion-col size=\"5\" *ngIf='showDashbordChart.includes(\"Distribution Summary\") == true'>\r\n              <ion-card class=\"card\" style=\"height: 508px;\">\r\n                  <ion-card-header\r\n                      style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n                      Distribution Summary\r\n                  </ion-card-header>\r\n                  <ion-card-content>\r\n                      <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n                          (ionChange)=\"totalHrsDistributionSummary($event)\">\r\n                          <ion-row>\r\n                              <ion-col size='4' *ngFor=\"let totalHrsDistribution of statusChanger\">\r\n                                  <ion-row>\r\n                                      <ion-col size='3'>\r\n                                          <ion-radio color='danger'\r\n                                              style=\"position: relative; overflow: hidden;width: 12px; height: 12px;\"\r\n                                              id='{{totalHrsDistribution.status}}' checked\r\n                                              value=\"{{totalHrsDistribution.status}}\"></ion-radio>\r\n                                      </ion-col>\r\n                                      <ion-col size='8'>\r\n                                          <ion-label style=\"font-size: 9px;\">{{totalHrsDistribution.status}}\r\n                                          </ion-label>\r\n                                      </ion-col>\r\n                                  </ion-row>\r\n                              </ion-col>\r\n                          </ion-row>\r\n                      </ion-radio-group>\r\n                      <ion-row style=\"padding-top: 73px;\">\r\n                          <ion-col size='12'>\r\n\r\n                              <div id=\"totalHrsDistributionChart\" style=\" max-width: 800px; width: 300;\"></div>\r\n\r\n                          </ion-col>\r\n                      </ion-row>\r\n                  </ion-card-content>\r\n              </ion-card>\r\n\r\n          </ion-col>\r\n\r\n\r\n\r\n          <ion-col size=\"7\" style=\"padding: 0px;\">\r\n              <ion-row>\r\n                  <ion-col size=\"6\" *ngIf='showDashbordChart.includes(\"Top 5 Overspeed Vehicles\") == true'>\r\n                      <ion-card class=\"card\">\r\n                          <ion-card-header\r\n                              style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n                              Top 5 Overspeed Vehicles\r\n                          </ion-card-header>\r\n                          <ion-img src=\"assets/dashboard_background/overspeedimg.png\"\r\n                              style=\"height: 75%;position: absolute;bottom: 0px;left: 120px;\"></ion-img>\r\n                          <ion-card-content>\r\n                              <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n                                  (ionChange)=\"overspeedStatus($event)\">\r\n                                  <ion-row>\r\n                                      <ion-col size='4' *ngFor=\"let overSpeedStatus of statusChanger\">\r\n                                          <ion-row>\r\n                                              <ion-col size='3'>\r\n                                                  <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                                      id='{{overSpeedStatus.status}}' checked\r\n                                                      value=\"{{overSpeedStatus.status}}\"></ion-radio>\r\n                                              </ion-col>\r\n                                              <ion-col size='8'>\r\n                                                  <ion-label style=\"font-size: 9px;\">{{overSpeedStatus.status}}\r\n                                                  </ion-label>\r\n                                              </ion-col>\r\n                                          </ion-row>\r\n                                      </ion-col>\r\n                                  </ion-row>\r\n                              </ion-radio-group>\r\n                              <ion-row>\r\n                                  <ion-col size='12'>\r\n                                      <div id=\"overspeedvehicles\"\r\n                                          style=\"position: relative; overflow: hidden; max-width: 800px; width: 280;\">\r\n                                      </div>\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                          </ion-card-content>\r\n                      </ion-card>\r\n                  </ion-col>\r\n                  <ion-col size=\"6\" *ngIf='showDashbordChart.includes(\"Top 5 Unused Assets\") == true'>\r\n                      <ion-card class=\"card\">\r\n                          <ion-card-header\r\n                              style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n                              Top 5 Unused Assets\r\n                          </ion-card-header>\r\n                          <ion-card-content>\r\n                              <ion-img src=\"assets/dashboard_background/unusedassert.png\"\r\n                                  style=\"height: 75%;position: absolute;bottom: 0px;left: 120px;\"></ion-img>\r\n                              <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n                                  (ionChange)=\"unUsedAssert($event)\">\r\n                                  <ion-row>\r\n                                      <ion-col size='4' *ngFor=\"let unUsedAssertStatus of statusChanger\">\r\n                                          <ion-row>\r\n                                              <ion-col size='3'>\r\n                                                  <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                                      id='{{unUsedAssertStatus.status}}' checked\r\n                                                      value=\"{{unUsedAssertStatus.status}}\"></ion-radio>\r\n                                              </ion-col>\r\n                                              <ion-col size='8'>\r\n                                                  <ion-label style=\"font-size: 9px;\">{{unUsedAssertStatus.status}}\r\n                                                  </ion-label>\r\n                                              </ion-col>\r\n                                          </ion-row>\r\n                                      </ion-col>\r\n                                  </ion-row>\r\n                              </ion-radio-group>\r\n                              <ion-row>\r\n                                  <ion-col size='12'>\r\n                                      <div id=\"unUsedAssert\"\r\n                                          style=\"position: relative; overflow: hidden; max-width: 800px; width: 280;\">\r\n                                      </div>\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                          </ion-card-content>\r\n                      </ion-card>\r\n                  </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                  <ion-col size=\"6\" *ngIf='showDashbordChart.includes(\"Top 5 Engine Hours\") == true'>\r\n                      <ion-card class=\"card\">\r\n                          <ion-card-header\r\n                              style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n                              Top 5 Engine Hours\r\n                          </ion-card-header>\r\n                          <ion-card-content>\r\n                              <ion-img src=\"assets/dashboard_background/enginehrs.png\"\r\n                                  style=\"height: 75%;position: absolute;bottom: 0px;left: 120px;\"></ion-img>\r\n                              <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n                                  (ionChange)=\"engineHours($event)\">\r\n                                  <ion-row>\r\n                                      <ion-col size='4' *ngFor=\"let engineHoursStatus of statusChanger\">\r\n                                          <ion-row>\r\n                                              <ion-col size='3'>\r\n                                                  <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                                      id='{{engineHoursStatus.status}}' checked\r\n                                                      value=\"{{engineHoursStatus.status}}\"></ion-radio>\r\n                                              </ion-col>\r\n                                              <ion-col size='8'>\r\n                                                  <ion-label style=\"font-size: 9px;\">{{engineHoursStatus.status}}\r\n                                                  </ion-label>\r\n                                              </ion-col>\r\n                                          </ion-row>\r\n                                      </ion-col>\r\n                                  </ion-row>\r\n                              </ion-radio-group>\r\n                              <ion-row>\r\n                                  <ion-col size='12'>\r\n                                      <div id=\"engineHours\"\r\n                                          style=\"position: relative; overflow: hidden; max-width: 800px; width: 280;\">\r\n                                      </div>\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                          </ion-card-content>\r\n                      </ion-card>\r\n                  </ion-col>\r\n                  <ion-col size=\"6\" *ngIf='showDashbordChart.includes(\"Top 5 Odometer Vehicles\") == true'>\r\n                      <ion-card class=\"card\">\r\n                          <ion-card-header\r\n                              style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n                              Top 5 Odometer Vehicles\r\n                          </ion-card-header>\r\n                          <ion-card-content>\r\n                              <ion-img src=\"assets/dashboard_background/top5odometervehicles.png\"\r\n                                  style=\"height: 75%;position: absolute;bottom: 0px;left: 120px;\"></ion-img>\r\n                              <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n                                  (ionChange)=\"vehicleOdometer($event)\">\r\n                                  <ion-row>\r\n                                      <ion-col size='4' *ngFor=\"let vehicleOdometerStatus of statusChanger\">\r\n                                          <ion-row>\r\n                                              <ion-col size='3'>\r\n                                                  <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                                      id='{{vehicleOdometerStatus.status}}' checked\r\n                                                      value=\"{{vehicleOdometerStatus.status}}\"></ion-radio>\r\n                                              </ion-col>\r\n                                              <ion-col size='8'>\r\n                                                  <ion-label style=\"font-size: 9px;\">{{vehicleOdometerStatus.status}}\r\n                                                  </ion-label>\r\n                                              </ion-col>\r\n                                          </ion-row>\r\n                                      </ion-col>\r\n                                  </ion-row>\r\n                              </ion-radio-group>\r\n                              <ion-row>\r\n                                  <ion-col size='12'>\r\n                                      <div id=\"vehicleOdometer\"\r\n                                          style=\"position: relative; overflow: hidden; max-width: 800px; width: 280;\">\r\n                                      </div>\r\n                                  </ion-col>\r\n                              </ion-row>\r\n                          </ion-card-content>\r\n                      </ion-card>\r\n                  </ion-col>\r\n              </ion-row>\r\n          </ion-col>\r\n      </ion-row>\r\n  </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ais-dashboard/table/table.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ais-dashboard/table/table.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  table works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/ais-dashboard/ais-dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/ais-dashboard/ais-dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: AisDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AisDashboardPageModule", function() { return AisDashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ais_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ais-dashboard.page */ "./src/app/ais-dashboard/ais-dashboard.page.ts");
/* harmony import */ var _ais_dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ais-dashboard/table/table.component */ "./src/app/ais-dashboard/table/table.component.ts");








const routes = [
    {
        path: '',
        component: _ais_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["AisDashboardPage"]
    }
];
let AisDashboardPageModule = class AisDashboardPageModule {
};
AisDashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        entryComponents: [_ais_dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_7__["TableComponent"]],
        declarations: [_ais_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["AisDashboardPage"], _ais_dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_7__["TableComponent"]],
    })
], AisDashboardPageModule);



/***/ }),

/***/ "./src/app/ais-dashboard/ais-dashboard.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/ais-dashboard/ais-dashboard.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-header {\n  background-color: #c1c1d2;\n  padding: 12px 0px;\n  font-size: 15px;\n}\n\nion-card-title {\n  color: white;\n  font-size: 100%;\n  font-weight: 700;\n}\n\nion-title {\n  padding: 0px 5%;\n}\n\n.vehStates::first-letter {\n  text-transform: capitalize;\n}\n\nion-card {\n  border-radius: 10px;\n  margin: 10px 16px;\n}\n\nion-card-content {\n  padding: 0px 16px;\n}\n\n.semiCircle {\n  background: #32384b;\n  width: 100%;\n  height: 50px;\n  border-radius: 50%/100%;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.alertsStyle {\n  color: white;\n  font-size: 20px;\n  display: grid;\n}\n\n.header-md:after {\n  left: 0;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: none;\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.statusBar {\n  padding: 2px;\n  border-radius: 5px;\n  font-weight: bold;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 15px;\n  color: white;\n  padding-top: 5px;\n  border-radius: 5px;\n  font-weight: bold;\n}\n\n.vehicleStatusHeading {\n  background-color: #e51e43;\n  color: white;\n  width: 60%;\n  text-align: center;\n  padding: 2px;\n  font-size: 15px;\n  font-weight: bold;\n  border-radius: 100px;\n}\n\n.circle {\n  background-color: #FFF;\n  border: 3px solid;\n  border-radius: 18px;\n  box-shadow: 0 0 2px #888;\n  height: 15px;\n  width: 15px;\n}\n\n.card {\n  margin: 0px;\n  padding: 0px;\n}\n\n.displayDesktop {\n  display: block;\n}\n\n.displayOthers {\n  display: none;\n}\n\n.displayLine {\n  border-top: 0.5px solid rgba(128, 128, 128, 0.5);\n  padding: 0px;\n  align-self: center;\n}\n\n.checkboxIos {\n  background-color: #e4e4e4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWlzLWRhc2hib2FyZC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGFpcy1kYXNoYm9hcmRcXGFpcy1kYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9haXMtZGFzaGJvYXJkL2Fpcy1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7QUNBSjs7QURJQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7QUNESjs7QURJQTtFQUNJLDBCQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDREo7O0FESUE7RUFDSSxPQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxlQUFBO0VBQWlCLFlBQUE7RUFDakIsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FESUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNESjs7QURHRTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0U7RUFFRSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQ0E7RUFDSSxnREFBQTtFQUNDLFlBQUE7RUFBWSxrQkFBQTtBQ0dqQjs7QURBQTtFQUNHLHlCQUFBO0FDR0giLCJmaWxlIjoic3JjL2FwcC9haXMtZGFzaGJvYXJkL2Fpcy1kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMWMxZDI7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG5cclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDBweCA1JTtcclxufVxyXG5cclxuLnZlaFN0YXRlczo6Zmlyc3QtbGV0dGVyIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMHB4IDE2cHg7XHJcbn1cclxuXHJcbi5zZW1pQ2lyY2xlIHtcclxuICAgIGJhY2tncm91bmQ6ICMzMjM4NGI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAvIDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5hbGVydHNTdHlsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG59XHJcblxyXG4uaGVhZGVyLW1kOmFmdGVye1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogLTVweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgMCB0b3AgLTJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gICAgY29udGVudDogXCJcIjtcclxufVxyXG5cclxuLnN0YXR1c0JhcntcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7IGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbi52ZWhpY2xlU3RhdHVzSGVhZGluZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTFlNDM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICB9IFxyXG4gIC5jaXJjbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAycHggIzg4ODtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gIH1cclxuLmNhcmR7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4gIC5kaXNwbGF5RGVza3RvcHtcclxuXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uZGlzcGxheU90aGVyc3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5kaXNwbGF5TGluZXtcclxuICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41KTtcclxuICAgICBwYWRkaW5nOjBweDthbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaGVja2JveElvc3tcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcclxufSIsImlvbi1jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWMxZDI7XG4gIHBhZGRpbmc6IDEycHggMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDBweCA1JTtcbn1cblxuLnZlaFN0YXRlczo6Zmlyc3QtbGV0dGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAxMHB4IDE2cHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHggMTZweDtcbn1cblxuLnNlbWlDaXJjbGUge1xuICBiYWNrZ3JvdW5kOiAjMzIzODRiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCUvMTAwJTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5hbGVydHNTdHlsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAgdG9wIC0ycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5zdGF0dXNCYXIge1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnZlaGljbGVTdGF0dXNIZWFkaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MWU0MztcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNjAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG5cbi5jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3JkZXI6IDNweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgYm94LXNoYWRvdzogMCAwIDJweCAjODg4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5kaXNwbGF5RGVza3RvcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGlzcGxheU90aGVycyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kaXNwbGF5TGluZSB7XG4gIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41KTtcbiAgcGFkZGluZzogMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5jaGVja2JveElvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/ais-dashboard/ais-dashboard.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/ais-dashboard/ais-dashboard.page.ts ***!
  \*****************************************************/
/*! exports provided: AisDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AisDashboardPage", function() { return AisDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/websocket.service */ "./src/app/services/websocket.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "./node_modules/@ionic-native/firebase-x/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ "./node_modules/@ionic-native/unique-device-id/ngx/index.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var highcharts_highcharts_3d_src__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! highcharts/highcharts-3d.src */ "./node_modules/highcharts/highcharts-3d.src.js");
/* harmony import */ var highcharts_highcharts_3d_src__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_3d_src__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/market/ngx */ "./node_modules/@ionic-native/market/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ais_dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../ais-dashboard/table/table.component */ "./src/app/ais-dashboard/table/table.component.ts");


















// import { DealerIntroSlideComponent } from "./dealer-intro-slide/dealer-intro-slide.component";



let AisDashboardPage = class AisDashboardPage {
    constructor(ajaxService, router, commonService, websocketService, modalController, firebaseX, device, authenticationService, udid, platform, statusBar, network, menuController, alertController, appVersion, market, locat) {
        this.ajaxService = ajaxService;
        this.router = router;
        this.commonService = commonService;
        this.websocketService = websocketService;
        this.modalController = modalController;
        this.firebaseX = firebaseX;
        this.device = device;
        this.authenticationService = authenticationService;
        this.udid = udid;
        this.platform = platform;
        this.statusBar = statusBar;
        this.network = network;
        this.menuController = menuController;
        this.alertController = alertController;
        this.appVersion = appVersion;
        this.market = market;
        this.locat = locat;
        this.totalAlertCount = 0;
        this.today = new Date();
        this.yesterday = new Date();
        this.week = new Date();
        this.month = new Date();
        this.statusChanger = [{ status: 'Yesterday', isChecked: true },
            { status: 'Last 7 Days', isChecked: false },
            { status: '1 Month', isChecked: false }
        ];
        this.summaryStatusChanger = [{ status: 'Current' }, { status: 'Yesterday' }, { status: "Last 7 Days" }
        ];
        this.vehicleCount = {};
        this.alertCount = 1;
        this.exitPopup = false;
        this.app = {};
        this.donutAndBar = {
            vehicleSummaries: 400,
            vehicleStatus: 200,
            vehicleSummary3d: 200,
            totalHrsDistributionChart: 340,
            totalVehicleCountHeigth: 240,
            totalVehicleCountWidth: 240
        };
        this.dashbordChart = ['Current Vehicle Status', 'Unused Vehicles Summary', 'Alert Count Summery', 'Odometer Summary', 'Speedometer Summary', 'Distribution Summary', 'Top 5 Overspeed Vehicles', 'Top 5 Unused Assets', 'Top 5 Engine Hours', 'Top 5 Odometer Vehicles', 'Top 5 Power Fail', 'Top 5 Door Open'];
        this.showDashbordChart = [];
        this.loginData = [];
        this.isIosPlatform = false;
        this.res = { "count": { "total": "100", "open": "20", "escalated": "10", "resolved": "70" },
            "data": { "total": [{ "alertid": "96596398588", "regno": "TN 22 BW 8905", "drivername": "Gokul", "driverno": "8736886876", "status": "open" },
                    { "alertid": "52887578738", "regno": "TN 22 BW 8905", "drivername": "Gokul", "driverno": "8736886876", "status": "open" }],
                "open": [{ "alertid": "96596398588", "regno": "TN 22 BW 8905", "drivername": "Gokul", "driverno": "8736886876", "status": "open" },
                    { "alertid": "52887578738", "regno": "TN 22 BW 8905", "drivername": "Gokul", "driverno": "8736886876", "status": "open" }],
                "escalated": [{ "alertid": "96596398588", "regno": "TN 22 BW 8905", "drivername": "Gokul", "driverno": "8736886876", "status": "open" },
                    { "alertid": "52887578738", "regno": "TN 22 BW 8905", "drivername": "Gokul", "driverno": "8736886876", "status": "open" }],
                "resolved": [{ "alertid": "96596398588", "regno": "TN 22 BW 8905", "drivername": "Gokul", "driverno": "8736886876", "status": "open" },
                    { "alertid": "52887578738", "regno": "TN 22 BW 8905", "drivername": "Gokul", "driverno": "8736886876", "status": "open" }] } };
        this.filterClick = (filter) => {
            this.commonService.presentLoader();
            localStorage.setItem("filterActive", filter);
            this.router.navigateByUrl("/tabs/gridview");
            this.commonService.dismissLoader();
        };
    }
    loadExternalScript() {
        return new Promise(resolve => {
            const scriptElement = document.createElement('script');
            scriptElement.src = "https://maps.googleapis.com/maps/api/js?key=" + this.applicationSettings.GoogleMapKey;
            scriptElement.className = "googleMap";
            scriptElement.id = this.applicationSettings.GoogleMapKey;
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        });
    }
    wsResponse(json) {
        var data = json.liveDatas;
        if (data) {
            //console.log("recived websocket data")
            if (json.statusCount == null) {
                this.updatedJsonData = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["storageVariable"].upDatedJsonData;
                if (this.updatedJsonData["liveDatas"][Object.keys(json['liveDatas'])[0]]) {
                    this.updatedJsonData["liveDatas"][Object.keys(json['liveDatas'])[0]] = Object.values(json['liveDatas'])[0];
                }
                else {
                    return;
                }
                json = this.updatedJsonData;
            }
            for (let i = 0; i < Object.keys(json.statusCount).length; i++) {
                json['statusCount'][Object.keys(json.statusCount)[i]] = 0;
            }
            let data = [];
            for (let i = 0; i < Object.keys(json.liveDatas).length; i++) {
                let currentCount = Object.values(json.liveDatas)[i];
                // if (currentCount.status == "Yet_to_transmit" || currentCount.status == "Yet to Transmit" || currentCount.status == "Online" || currentCount.status == null) {
                //   currentCount.status = "No Transmission"
                // } else if (currentCount.status == "Towed") {
                //   currentCount.status = "Running"
                // }
                // if (currentCount.status == "Overspeed") {
                //   data.push("Running");
                // } else {
                data.push(currentCount.status);
                // }
                Object.values(json.liveDatas)[i]["odometer"] = parseInt(Object.values(json.liveDatas)[i]["odometer"]) / 1000;
            }
            data.sort();
            let current = null;
            let cnt = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i] != current) {
                    if (cnt > 0) {
                        // //console.log(current + ' comes --> ' + cnt + ' times<br>');
                    }
                    current = data[i];
                    cnt = 1;
                }
                else {
                    cnt++;
                }
                json.statusCount[current] = cnt;
            }
            if (cnt > 0) {
                // //console.log(current + ' comes --> ' + cnt + ' times');
                json.statusCount[current] = cnt;
            }
            let updatedJson;
            if (localStorage.cacheAddress) {
                const cacheData = JSON.parse(localStorage.cacheAddress);
                let data = this.commonService.updateCacheAddress(cacheData, json.liveDatas);
                updatedJson = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["storageVariable"].dashboardData;
                updatedJson["liveDatas"] = data.liveDatas;
            }
            else {
                updatedJson = json;
            }
            // for(let i=0; i < Object.keys(json.liveDatas).length; i++){
            //   json.liveDatas[i]["odometer"] = parseInt(json.liveDatas[i]["odometer"])/1000
            // }
            json['statusCount']['Total'] = Object.keys(json.liveDatas).length;
            // localStorage.setItem('dashboardData', JSON.stringify(updatedJson));
            _environments_environment__WEBPACK_IMPORTED_MODULE_2__["storageVariable"].dashboardData = updatedJson;
            _environments_environment__WEBPACK_IMPORTED_MODULE_2__["storageVariable"].upDatedJsonData = json;
            // localStorage.setItem('upDatedJsonData', JSON.stringify(json));
            if (json['statusCount']) {
                json['statusCount']['Total'] = Object.keys(json.liveDatas).length;
                this.updateData(json['statusCount']);
            }
        }
        else {
            //console.log(json)
        }
    }
    wsOnError() {
        setTimeout(() => {
            this.websocketService.connectSocket(JSON.parse(localStorage.dashboardWebSocketData), "livetrack");
        }, 60000);
    }
    updateData(json) {
        let result = new Array();
        if (json["Total"]) {
            this.total = json["Total"];
            if (json["Total"] == undefined) {
                this.total = 0;
            }
        }
        for (let key of this.statusColor) {
            if (json.hasOwnProperty(Object.keys(key)[0])) {
                result.push({
                    type: Object.keys(key)[0],
                    count: json[Object.keys(key)[0]],
                    percentage: json[Object.keys(key)[0]] / this.total * 100,
                    color: Object.values(key)[0]
                });
            }
        }
        this.dashboard = result;
        localStorage.setItem("dataFilter", JSON.stringify({ dashboardFilter: result, total: this.total }));
        this.totalVehicleCount();
    }
    restartApp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Info',
                backdropDismiss: false,
                message: "Device notification enabled need to restart your application.",
                buttons: [
                    {
                        text: 'Restart',
                        handler: data => {
                            document.location.href = 'index.html';
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    pushNotificationConfig() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let pushDetails;
            this.platform.ready().then(res => {
                if (this.platform.is('ios')) {
                    this.firebaseX.grantPermission()
                        .then((success) => {
                        if (success) {
                        }
                    });
                }
                if (this.network.type !== "none") {
                    if (/(android)/i.test(navigator.userAgent)) {
                        this.firebaseX.getToken()
                            .then(token => {
                            //alert("token is "+ token);
                            //   alert("uuid is "+ this.device.uuid);
                            localStorage.setItem('imeiNo', this.device.uuid);
                            localStorage.setItem('deviceToken', token);
                            localStorage.setItem('notificationStatus', 'true');
                            pushDetails = {
                                "imeiNo": this.device.uuid,
                                "appName": _environments_environment__WEBPACK_IMPORTED_MODULE_2__["app"].appName,
                                "deviceToken": token,
                                "companyID": localStorage.getItem("corpId"),
                                "userId": localStorage.getItem("userName"),
                                "os": "ionic4",
                                "pushStatus": "true"
                            };
                            const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + "/alert/pushnotification";
                            this.ajaxService.ajaxPostWithBody(url, pushDetails)
                                .subscribe(res => {
                                localStorage.setItem('pushStatus', 'persisted');
                                //console.log('push presisted');
                                // this.restartApp();
                            });
                        })
                            .catch(error => {
                            //  alert("Token uuid as "+error);
                            this.commonService.presentToast("Something went wrong!!Push notification won't recieve");
                        });
                    }
                    else if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
                        this.firebaseX.getToken()
                            .then(token => {
                            //alert("token is "+ token);
                            this.udid.get()
                                .then((uuid) => {
                                // alert("uuid is "+ uuid);
                                localStorage.setItem('imeiNo', this.device.uuid);
                                localStorage.setItem('deviceToken', token);
                                localStorage.setItem('notificationStatus', 'true');
                                pushDetails = {
                                    "imeiNo": this.device.uuid,
                                    "appName": _environments_environment__WEBPACK_IMPORTED_MODULE_2__["app"].appName,
                                    "deviceToken": token,
                                    "companyID": localStorage.getItem("corpId"),
                                    "userId": localStorage.getItem("userName"),
                                    "os": "ionic4ios",
                                    "pushStatus": "true"
                                };
                                localStorage.setItem('device', 'ionic4ios');
                                //console.log(uuid);
                                //console.log(token);
                                const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + "/alert/pushnotification";
                                this.ajaxService.ajaxPostWithBody(url, pushDetails)
                                    .subscribe(res => {
                                    localStorage.setItem('pushStatus', 'persisted');
                                    //console.log('push presisted');
                                    // this.restartApp();
                                });
                            })
                                .catch((error) => {
                                //alert("Error uuid as "+error);
                                this.commonService.presentToast("Something went wrong!!Push notification won't recieve");
                            });
                        })
                            .catch(error => {
                            //  alert("Token uuid as "+error);
                            this.commonService.presentToast("Something went wrong!!Push notification won't recieve");
                        });
                    }
                    this.network.onDisconnect().subscribe(() => {
                        //console.log('network was disconnected :-(');
                        this.commonService.presentToast('Poor Network Connection');
                    });
                }
            });
        });
    }
    ionViewWillEnter() {
        localStorage.setItem('statusChanger', "All");
        this.menuController.enable(true);
        // this.alertCountHeader();
        this.websocketService.setProductService(this);
        if (!this.websocketService.isAlive('livetrack')) {
            this.websocketService.connectSocket(JSON.parse(localStorage.dashboardWebSocketData), "livetrack");
        }
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["storageVariable"].upDatedJsonData) {
            this.updateData(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["storageVariable"].upDatedJsonData['statusCount']);
        }
        this.totalVehicleCount();
        this.alertCountHeader();
        if (/(android|iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
            this.statusBar.show();
            if (localStorage.getItem("pushStatus") === null) {
                this.pushNotificationConfig();
            }
        }
        // if(!this.websocketService.isAlive('alertsmanagerendpoint')){
        //   let alertJson = {
        //     "oldVin": "",
        //     "newVin": localStorage.getItem('userName')
        //   }
        //   // this.websocketService.connectSocket(alertJson,"alert"); 
        // }
    }
    // routerModal(data){
    //   if(data.count > 0){
    //     this.router.navigateByUrl("tabs/gridview/"+data.type);
    //   }else{
    //     this.commonService.presentToast("You don't have any vehicles.");
    //   }
    // }
    routerModal(count, type) {
        if (count > 0) {
            this.router.navigateByUrl("tabs/gridview/" + type);
            localStorage.setItem('statusChanger', type);
        }
        else {
            this.commonService.presentToast("You don't have any vehicles.");
        }
    }
    // initForAlarmCheck(){
    //   this.platform.ready().then(res =>{
    //     if (Android.getEntryState()
    //     &&  /(android|iPhone|iPad|iPod)/i.test(navigator.userAgent) ) {
    //       Android.replaceAlarmState();
    //       let messageBody = Android
    //       .getMessageBody();
    //       let message = '';
    //       if (messageBody.indexOf("Engine Turned ON") != -1) {
    //         message = 'ENGINE ON';
    //         this.alarmPlateNo = messageBody.split(':')[2].replace('Time','');
    //         this.commonService.alarmPopup(this.alarmPlateNo,message);
    //       } else if (messageBody.indexOf("SOS") != -1) {
    //         message = 'SOS Alert';
    //         this.alarmPlateNo = messageBody.split(':')[2].replace('Time','');
    //         this.commonService.alarmPopup(this.alarmPlateNo,message);
    //       } else if ((messageBody.indexOf("AntiTheft") != -1) ){
    //         message = 'ANTI THEFT';
    //         this.alarmPlateNo = messageBody.split(':')[2].replace('Time','');
    //         this.commonService.alarmPopup(this.alarmPlateNo,message);
    //       } else if (messageBody.indexOf("PowerCut") != -1) {
    //         message = 'POWER CUT';
    //         this.alarmPlateNo = messageBody.split(':')[1].replace('Time','');
    //         this.commonService.alarmPopup(this.alarmPlateNo,message);
    //       }else if (messageBody.indexOf("Movement Detected!") != -1) {
    //         message = 'MOVEMENT DETECTED';
    //         this.alarmPlateNo = messageBody.split(':')[2].replace('Time','');
    //         this.commonService.alarmPopup(this.alarmPlateNo,message);
    //       }
    //     }
    //   });
    // }
    bellRouter() {
        this.router.navigateByUrl('/tabs/alerts/All');
    }
    alertConfiguration() {
        let url2 = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + '/device/bikeappalerts' + localStorage.corpId;
        this.ajaxService.ajaxGet(url2)
            .subscribe(Response => {
            //console.log(Response);
            var data = JSON.stringify(Response);
            localStorage.setItem('alertData', data);
        });
    }
    appUpdate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (/(android|iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
                if (localStorage.appSettings) {
                    //console.log(this.appVersion.getAppName())
                    let currentVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["app"].appVersion;
                    let appSettingsVersion = JSON.parse(localStorage.appSettings)['appComVersion'][_environments_environment__WEBPACK_IMPORTED_MODULE_2__["app"].appName];
                    if (appSettingsVersion > currentVersion) {
                        const alert = yield this.alertController.create({
                            header: 'Update Alert',
                            backdropDismiss: false,
                            message: "A new update is now available. Please update from the appstore or playstore.",
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: data => {
                                    }
                                },
                                {
                                    text: 'update',
                                    handler: data => {
                                        //console.log("update that")
                                        this.authenticationService.logout();
                                        this.router.navigateByUrl('login');
                                        this.market.open(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["app"].package);
                                    }
                                }]
                        });
                        yield alert.present();
                    }
                }
            }
        });
    }
    ngOnInit() {
        // this.openDelarIntroModal();
        this.appUpdate();
        this.websocketService.setProductService(this);
        let mainMenu = JSON.parse(localStorage.getItem("mainMenu"));
        for (var i = 0; i < this.dashbordChart.length; i++) {
            if (mainMenu.indexOf(this.dashbordChart[i]) != -1)
                this.showDashbordChart.push(this.dashbordChart[i]);
        }
        this.entryPoint = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["app"].entryPoint;
        this.app["logo"] = localStorage.companyLogo;
        // this.alertConfiguration();
        this.menuController.enable(true);
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
        if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
            this.isIosPlatform = true;
        }
        else {
            this.isIosPlatform = false;
        }
        if (this.myPlatform == "desktop") {
            this.donutAndBar = {
                vehicleSummaries: 160,
                vehicleStatus: 180,
                vehicleSummary3d: 160,
                totalHrsDistributionChart: 300,
                totalVehicleCountWidth: 200,
                totalVehicleCountHeigth: 200
            };
        }
        //this.initForAlarmCheck();
        //today date
        this.todayDate = this.today.getFullYear() + "-";
        this.todayDate += (this.today.getMonth() + 1 < 10 ? "0" + (this.today.getMonth() + 1).toString() : (this.today.getMonth() + 1).toString()) + "-";
        this.todayDate += this.today.getDate() < 10 ? "0" + this.today.getDate().toString() : this.today.getDate().toString();
        //yesterday date
        this.yesterday.setDate(this.yesterday.getDate() - 1);
        this.yesterdayDate = this.yesterday.getFullYear() + "-";
        this.yesterdayDate += (this.yesterday.getMonth() + 1 < 10 ? "0" + (this.yesterday.getMonth() + 1).toString() : (this.yesterday.getMonth() + 1).toString()) + "-";
        this.yesterdayDate += this.yesterday.getDate() < 10 ? "0" + this.yesterday.getDate().toString() : this.yesterday.getDate().toString();
        //week date 
        this.week.setDate(this.week.getDate() - 7);
        this.previousWeekDate = this.week.getFullYear() + "-";
        this.previousWeekDate += (this.week.getMonth() + 1 < 10 ? "0" + (this.week.getMonth() + 1).toString() : (this.week.getMonth() + 1).toString()) + "-";
        this.previousWeekDate += this.week.getDate() < 10 ? "0" + this.week.getDate().toString() : this.week.getDate().toString();
        //month date
        this.month.setMonth(this.month.getMonth() - 1);
        this.previousMonthDate = this.month.getFullYear() + "-";
        this.previousMonthDate += (this.month.getMonth() + 1 < 10 ? "0" + (this.month.getMonth() + 1).toString() : (this.month.getMonth() + 1).toString()) + "-";
        this.previousMonthDate += this.month.getDate() < 10 ? "0" + this.month.getDate().toString() : this.month.getDate().toString();
        /****************************End new Dashboard**************/
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["app"].entryPoint == 'TTS') {
            _environments_environment__WEBPACK_IMPORTED_MODULE_2__["app"].entryPoint = "unknown";
        }
        let body = {
            "username": localStorage.userName,
            "password": localStorage.password,
            "corpid": localStorage.corpId,
            "loginMode": "mobile",
            "entryPoint": _environments_environment__WEBPACK_IMPORTED_MODULE_2__["app"].entryPoint,
            "appsetting": "vts_mobile"
        };
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + "/login/company/login";
        this.ajaxService.ajaxPostMethod(url, body)
            .subscribe(res => {
            if (res != undefined) {
                if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["app"].entryPoint == 'unknown') {
                    _environments_environment__WEBPACK_IMPORTED_MODULE_2__["app"].entryPoint = res[1].entryPoint;
                    this.entryPoint = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["app"].entryPoint;
                }
                this.loginData = Object.keys(res[0]);
                localStorage.setItem('appSettings', res[1]["applicationSettings"]);
                localStorage.setItem("mapAllowed", res[1]["mapAllowed"]);
                localStorage.setItem('commandsData', res[1]["CommandsData"]);
                localStorage.setItem('loginData', JSON.stringify(res));
                localStorage.setItem('appSettings', res[1]["applicationSettings"]);
                //  localStorage.setItem('map', JSON.parse(res[1]["applicationSettings"]).mapview);
                localStorage.setItem('map', res[1]["mapview"]);
                localStorage.setItem('mainMenu', res[1]["mainmenu"]);
            }
            else {
                this.commonService.dismissLoader();
                var data = navigator.onLine;
                if (data == false) {
                    this.commonService.networkChecker();
                }
                else if (data == true) {
                    this.ajaxService.ajaxGetWithString(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + "/login/test")
                        .subscribe(res => {
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
        // let data = {
        //   "companyID": localStorage.corpId,
        //   "branchID": localStorage.corpId,
        //   "emailId": localStorage.userName,
        //   "Check": "false",
        //   "entryPoint": app.entryPoint,
        //   "dashboardMode": "mobile"
        // }
        // const url2 = serverUrl.web + "/api/vts/company/dashboarddata/" + JSON.stringify(data);
        // this.ajaxService.ajaxGet(url2)
        //   .subscribe(res => {
        //     if(res!=undefined){
        //       localStorage.setItem('dashboardData', JSON.stringify(res));
        //       localStorage.setItem('upDatedJsonData', JSON.stringify(res));
        //     }else{
        //       this.commonService.dismissLoader();
        //       var data = navigator.onLine;
        //     if(data == false){
        //      this.commonService.networkChecker()
        //     }else if(data == true){
        //       this.ajaxService.ajaxGetWithString(serverUrl.web + "/api/vts/test")
        //     .subscribe(res=>{
        //       if(res == '["Hi Web....!"]')
        //      //console.log("server run")
        //      else{
        //       this.commonService.dismissLoader();
        //       this.commonService.presentAlert("Server maintanance error", "Sorry for the inconvenience please try after some times");
        //      }
        //     })
        //     }
        //   }
        //   })
        this.applicationSettings = JSON.parse(localStorage.appSettings);
        const ele = document.querySelector(".googleMap");
        if (ele === null) {
            this.loadExternalScript().then(() => { console.warn("Init Map Loaded"); }).catch(() => { });
        }
        else if (ele.id !== this.applicationSettings.GoogleMapKey) {
            document.body.removeChild(ele);
            this.loadExternalScript().then(() => { console.warn("Map Key Changed"); }).catch(() => { });
        }
        let json = JSON.parse(localStorage.loginData);
        this.statusColor = this.applicationSettings.statusColor;
        if (json) {
            this.updateData(json[0]);
        }
        if (/(android|iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
            if (localStorage.getItem("pushStatus") === null) {
                this.pushNotificationConfig();
            }
        }
        // this.appUpdate();
        this.router.events.subscribe(event => {
            // if (event instanceof NavigationStart) {
            if (window.location.hash == "#/tabs/members/dashboard") {
                this.backButtonExit();
            }
            else if (window.location.hash == '#/tabs/gridview/All' || window.location.hash == '#/tabs/mapview/All' || window.location.hash == '#/tabs/alerts/null' || window.location.hash == '#/tabs/alerts/All') {
                this.backButtonExit();
            }
            else {
                if (this.subscription)
                    this.subscription.unsubscribe();
                document.removeEventListener('backbutton', function () {
                    //console.log("end")
                });
            }
            // if (window.location.hash == "#/geofence/All/null")
            //   this.subscription.unsubscribe();
            //   document.removeEventListener('backbutton', function(event){
            //     //console.log("end")
            //   })
            // if (window.location.hash == "#/reports/null")
            //   this.subscription.unsubscribe();
            //   document.removeEventListener('backbutton', function(event){
            //     //console.log("end")
            //   })
            // if (window.location.hash == "#/settings/All")
            //   this.subscription.unsubscribe();
            //   document.removeEventListener('backbutton', function(){
            //     //console.log("end")
            //   })
            // }
        });
    }
    /************************** New Dashboard Services*************************************/
    alertCountHeader() {
        let basicAlertsAndCount = { 'Overspeed': '', 'Idle': '', 'Stop': '', 'Engine On': '' };
        let reqJson = {
            "userId": localStorage.getItem('userName'),
            "fromDate": this.todayDate,
            "toDate": this.todayDate
        };
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + '/alert/alertcounts?userId=' + localStorage.getItem('userName') + '&fromDate=' + this.todayDate + '&toDate=' + this.todayDate;
        this.ajaxService.ajaxGet(url)
            .subscribe(res => {
            basicAlertsAndCount = res;
            this.totalAlertCount = 0;
            for (let i = 0; i < Object.keys(basicAlertsAndCount).length; i++) {
                this.totalAlertCount += parseInt(Object.values(basicAlertsAndCount)[i]);
            }
        });
    }
    backButtonExit() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {
            let thisKey = this;
            let alertController = this.alertController;
            let websocketService = this.websocketService;
            let locat = this.locat;
            document.addEventListener('backbutton', function (event) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (window.location.hash == "#/tabs/members/dashboard") {
                        event.preventDefault();
                        // event.stopImmediatePropagation()
                        // event.stopPropagation();
                        //console.log('hello');
                        if (thisKey.exitPopup === false) {
                            thisKey.exitPopup = true;
                            localStorage.setItem("exitPopup", "true");
                            const alert = yield thisKey.alertController.create({
                                header: 'Exit',
                                backdropDismiss: false,
                                message: "Are you sure? You want to exit!",
                                buttons: [{
                                        text: 'Cancel',
                                        role: 'cancel',
                                        handler: data => {
                                            thisKey.exitPopup = false;
                                            localStorage.setItem("exitPopup", "false");
                                        }
                                    },
                                    {
                                        text: 'Ok',
                                        handler: data => {
                                            navigator['app'].exitApp();
                                            // thisKey.websocketService.disConnectSocket("livetrack");
                                        }
                                    }]
                            });
                            yield alert.present();
                        }
                    }
                    else {
                        event.stopImmediatePropagation();
                        event.stopPropagation();
                        event.preventDefault();
                        thisKey.locat.back();
                    }
                });
            }, false);
        });
        // this.subscription = this.platform.backButton.subscribe(async () => {
        //   document.addEventListener('backbutton', function (event) {});
        //   event.preventDefault();
        //     event.stopPropagation();
        //   localStorage.setItem("exitPopup", "false")
        //   if (this.exitPopup === false) {
        //     this.exitPopup = true;
        //     localStorage.setItem("exitPopup", "true")
        //     const alert = await this.alertController.create({
        //       header: 'Are you sure?',
        //       backdropDismiss: false,
        //       message: "You want to exit!",
        //       buttons: [{
        //         text: 'Cancel',
        //         role: 'cancel',
        //         handler: data => {
        //           this.exitPopup = false;
        //           localStorage.setItem("exitPopup", "false");
        //         }
        //       },
        //       {
        //         text: 'Ok',
        //         handler: data => {
        //           if (window.location.pathname == "/tabs/members/dashboard")
        //             navigator['app'].exitApp();
        //         }
        //       }]
        //     });
        //     await alert.present();
        //   }
        //   if (this.menuController.isOpen()) {
        //     this.menuController.close()
        //   }
        // });
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.backButt onExit();
        });
    }
    ionViewWillLeave() {
        //console.log('leave')
        //  this.subscription.unsubscribe();
    }
    totalVehicleCount() {
        let router = this.router;
        let commonService = this.commonService;
        this.dashboard;
        let chartData = [];
        let colors = [];
        let name = [];
        let dataShow = [];
        for (let i = 0; i < this.dashboard.length; i++) {
            // if (this.dashboard[i].type === "Overspeed" || this.dashboard[i].type === "Yet_to_transmit" || this.dashboard[i].type === "Yet to Transmit" || this.dashboard[i].type === "Online" || this.dashboard[i].type === "Towed") {
            //   continue;
            // }
            // else {
            this.vehicleCount['all'] = this.total;
            // //console.log(this.dashboard[i].type +' '+ this.dashboard[i].count);
            chartData.push([this.dashboard[i].type, this.dashboard[i].count]);
            name.push(this.dashboard[i].type);
            ////console.log(chartData);
            let chartValue = [];
            chartValue.push(this.dashboard[i].type);
            chartValue.push(this.dashboard[i].count);
            dataShow.push(chartValue);
            if (this.dashboard[i].type === "Running") {
                this.vehicleCount['RUNNING'] = this.dashboard[i].count;
            }
            switch (this.dashboard[i].type) {
                case "Running":
                    this.vehicleCount['running'] = this.dashboard[i].count;
                    break;
                case "Idle":
                    this.vehicleCount['idle'] = this.dashboard[i].count;
                    break;
                case "Stop":
                    this.vehicleCount['stop'] = this.dashboard[i].count;
                    break;
                case "No Transmission":
                    this.vehicleCount['noTransmit'] = this.dashboard[i].count;
                    break;
                case "DoorOpen":
                    this.vehicleCount['dooropen'] = this.dashboard[i].count;
                    break;
                case "Geofence":
                    this.vehicleCount['geofence'] = this.dashboard[i].count;
                    break;
                case "HighTemp":
                    this.vehicleCount['hightemp'] = this.dashboard[i].count;
                    break;
                case "PowerFail":
                    this.vehicleCount['powerfail'] = this.dashboard[i].count;
                    break;
                case "Good":
                    this.vehicleCount['good'] = this.dashboard[i].count;
                    break;
                case "Overspeed":
                    this.vehicleCount['Overspeed'] = this.dashboard[i].count;
                    break;
                case "Towed":
                    this.vehicleCount['Towed'] = this.dashboard[i].count;
                    break;
                case "Online":
                    this.vehicleCount['Online'] = this.dashboard[i].count;
                    break;
                case "Yet_to_transmit":
                    this.vehicleCount['Yet_to_transmit'] = this.dashboard[i].count;
                    break;
            }
            // }
            // if (this.dashboard[i].color === "#00E1BC" || this.dashboard[i].color === "#c200b8" || this.dashboard[i].color === "#7d410f" || this.dashboard[i].color === "#f28918") {
            //   continue;
            // }
            // else {
            // //console.log( this.dashboard[i].color);
            colors.push(this.dashboard[i].color);
            ////console.log(colors);
            // }
        }
        this.total = this.total == undefined ? "0" : this.total;
        if (this.myPlatform == 'desktop') {
            highcharts__WEBPACK_IMPORTED_MODULE_12__["chart"]('totalVehicleStatusDesktop', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    width: this.donutAndBar.totalVehicleCountWidth,
                    height: this.donutAndBar.totalVehicleCountHeigth
                },
                colors: colors,
                tooltip: {
                    enabled: false
                },
                title: {
                    text: "<p  style='color: black;font-family:Impact; font-size: 15px; '>Total <br> </p>" + this.total,
                    floating: true,
                    y: 80,
                    style: {
                        fontSize: '25px',
                        fontFamily: "Impact",
                        color: "black"
                    }
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    pie: {
                        startAngle: 0,
                        endAngle: 360,
                        center: ['50%', '50%'],
                        size: '110%',
                        events: {
                            click: function (event) {
                                ////console.log(event.point.options);
                                const routingData = {
                                    type: event.point.options.name,
                                    count: event.point.options.y
                                };
                                if (routingData.count > 0) {
                                    router.navigateByUrl("tabs/gridview/" + routingData.type);
                                }
                                else {
                                    commonService.presentToast("You don't have any vehicles.");
                                }
                            },
                        }
                    },
                },
                series: [{
                        type: 'pie',
                        name: 'Vehicles',
                        innerSize: '50%',
                        animation: false,
                        dataLabels: {
                            enabled: false,
                            connectorWidth: 0,
                            connectorPadding: 10
                        },
                        data: chartData
                    }]
            });
        }
        else {
            highcharts__WEBPACK_IMPORTED_MODULE_12__["chart"]('totalVehicleStatus', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    width: 240,
                    height: 240
                },
                colors: colors,
                tooltip: {
                    enabled: false
                },
                title: {
                    text: "<p  style='color: black;font-family:Impact; font-size: 20px; '>Total <br> </p>" + this.total,
                    floating: true,
                    y: 100,
                    style: {
                        fontSize: '35px',
                        fontFamily: "Impact",
                        color: "black"
                    }
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    pie: {
                        startAngle: 0,
                        endAngle: 360,
                        center: ['50%', '50%'],
                        size: '110%',
                        events: {
                            click: function (event) {
                                ////console.log(event.point.options);
                                const routingData = {
                                    type: event.point.options.name,
                                    count: event.point.options.y
                                };
                                if (routingData.count > 0) {
                                    router.navigateByUrl("tabs/gridview/" + routingData.type);
                                }
                                else {
                                    commonService.presentToast("You don't have any vehicles.");
                                }
                            },
                        }
                    },
                },
                series: [{
                        type: 'pie',
                        name: 'Vehicles',
                        innerSize: '50%',
                        animation: false,
                        dataLabels: {
                            enabled: false,
                            connectorWidth: 0,
                            connectorPadding: 10
                        },
                        data: chartData
                    }]
            });
        }
    }
    totalHrsDistributionChart(chartData, text, colors) {
        highcharts_highcharts_3d_src__WEBPACK_IMPORTED_MODULE_13___default()(highcharts__WEBPACK_IMPORTED_MODULE_12__);
        highcharts__WEBPACK_IMPORTED_MODULE_12__["chart"]('totalHrsDistributionChart', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false,
                // width: 240,
                height: this.donutAndBar.totalHrsDistributionChart,
            },
            colors: colors,
            title: {
                text: text,
                floating: true,
                y: 110,
                style: {
                    fontSize: '20px',
                    fontFamily: "Impact",
                    color: "black"
                }
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    startAngle: 0,
                    endAngle: 360,
                    center: ['50%', '50%'],
                    size: '110%',
                }
            },
            legend: {
                //align: 'left',
                layout: 'horizontal',
            },
            series: [{
                    type: 'pie',
                    name: 'Percentage ',
                    innerSize: '40%',
                    dataLabels: {
                        enabled: false,
                        connectorWidth: 0,
                        connectorPadding: 10
                    },
                    data: chartData,
                    showInLegend: true,
                }]
        });
    }
    totalHrsDistributionSummary(data) {
        let commonService = this.commonService;
        let firstChartWord = "";
        let secondChartWord = "";
        let reqJson;
        let text = "";
        //let chartData=[['Running',10],['Idle',14],['Stop',65],['Overspeed',10],['No Transmission',6]];
        let chartData = [];
        let colors = ['#1eb15d', '#FF0000', '#1f5baa', '#000000', '#f28918'];
        if (data.detail.value === "Yesterday") {
            firstChartWord = "YESTERDAY";
            secondChartWord = "STATUS";
            reqJson = {
                "vin": "All",
                "companyId": localStorage.getItem('corpId'),
                "branchId": localStorage.getItem('corpId'),
                "currentDate": "No",
                "userId": localStorage.getItem('userName'),
                "fromDate": this.yesterdayDate,
                "toDate": this.yesterdayDate
            };
        }
        else if (data.detail.value === "Last 7 Days") {
            firstChartWord = "LAST";
            secondChartWord = "7 DAYS";
            reqJson = {
                "vin": "All",
                "companyId": localStorage.getItem('corpId'),
                "branchId": localStorage.getItem('corpId'),
                "currentDate": "No",
                "userId": localStorage.getItem('userName'),
                "fromDate": this.previousWeekDate,
                "toDate": this.todayDate
            };
        }
        else {
            firstChartWord = "LAST";
            secondChartWord = "1 MONTH";
            reqJson = {
                "vin": "All",
                "companyId": localStorage.getItem('corpId'),
                "branchId": localStorage.getItem('corpId'),
                "currentDate": "No",
                "userId": localStorage.getItem('userName'),
                "fromDate": this.previousMonthDate,
                "toDate": this.todayDate
            };
        }
        //  const url = 'http://localhost:8080/Web/api/vts/company/totalHrsDistribution/{"vin":"All","companyId":"jana","branchId":"art","userId":"art-ca","fromDate":"2015-08-09","toDate":"2015-08-10","currentDate":"NO"}';
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + "/report/totalHrsDistribution";
        this.ajaxService.ajaxPostMethod(url, reqJson)
            .subscribe(res => {
            // //console.log(res);
            for (let i = 0; i < Object.keys(res).length; i++) {
                let chartKey = [];
                let chartValue = [];
                chartKey.push(Object.keys(res)[i].toUpperCase());
                chartValue.push(Object.values(res)[i]);
                chartData.push([chartKey[0], parseFloat(chartValue[0])]);
            }
            // //console.log("distribution"+ chartData);
            text = "<div  style=';color: black;font-family: Impact; font-size: 15px;'>" + firstChartWord + "</div>" + "<br/>" + "<div>" + secondChartWord + "</div>";
            this.totalHrsDistributionChart(chartData, text, colors);
        });
    }
    vehicleStatus(statusType, categories, data, color, format) {
        let count = 0;
        highcharts__WEBPACK_IMPORTED_MODULE_12__["chart"](statusType, {
            chart: {
                backgroundColor: '#FFFFFF00',
                height: this.donutAndBar.vehicleStatus,
                type: 'bar',
                animation: true
            },
            title: {
                text: null
            },
            tooltip: {
                enabled: true
            },
            legend: {
                enabled: false
            },
            xAxis: {
                categories: categories,
                allowDecimals: false,
            },
            credits: {
                enabled: false
            },
            yAxis: {
                min: 0,
                allowDecimals: false,
                gridLineWidth: 0,
                title: {
                    text: '',
                    align: 'high'
                },
                labels: {
                    enabled: false //default is true
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                        format: '{y}' + format,
                        color: 'black',
                        borderWidth: 0,
                        style: {
                            textOutline: "none"
                        }
                    }
                }
            },
            series: [{
                    type: undefined,
                    name: format,
                    //name: null,
                    data: data,
                    color: color,
                    borderRadius: 3,
                    pointWidth: 30,
                }]
        });
    }
    overspeedStatus(data) {
        let overSpeedVehicleName = [];
        let overSpeedVehicleValue = [];
        let reqJson;
        let hoursOrDays = " kmph";
        let overSpeed = { 'TN 09 MK 8754': '', 'TN 09 MK 8654': '', 'TN 09 MK 8758': '', 'TN 09 MK 8750': '' };
        if (data.detail.value === "Yesterday") {
            hoursOrDays = " kmph";
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.yesterdayDate,
                "toDate": this.yesterdayDate,
                "mode": "overSpeed"
            };
        }
        else if (data.detail.value === "Last 7 Days") {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.previousWeekDate,
                "toDate": this.todayDate,
                "mode": "overSpeed"
            };
        }
        else {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.previousMonthDate,
                "toDate": this.todayDate,
                "mode": "overSpeed"
            };
        }
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + "/report/gettop5data";
        this.ajaxService.ajaxPostMethod(url, reqJson)
            .subscribe(res => {
            // //console.log(res);
            overSpeed = res;
            var sortable = [];
            for (let vehicle in overSpeed) {
                sortable.push([vehicle, overSpeed[vehicle]]);
            }
            sortable.sort(function (a, b) {
                return a[1] - b[1];
            });
            ////console.log(sortable);
            for (let i = sortable.length - 1; i >= 0; i--) {
                let value = sortable[i][1].split(":");
                overSpeedVehicleName.push(sortable[i][0]);
                if (hoursOrDays == " kmph") {
                    overSpeedVehicleValue.push(parseInt(value[0]));
                }
                else {
                    overSpeedVehicleValue.push(Math.round(parseInt(value[0]) / 24));
                }
            }
            // for(let i=0; i < Object.keys(overSpeed).length ;i++){
            //   overSpeedVehicleValue.push(parseInt(Object.values(overSpeed)[i]));
            //   overSpeedVehicleName.push(Object.keys(overSpeed)[i]);
            // }
            this.vehicleStatus("overspeedvehicles", overSpeedVehicleName, overSpeedVehicleValue, '#f58220', hoursOrDays);
        });
    }
    unUsedAssert(data) {
        let unUsedAssertName = [];
        let unUsedAssertValue = [];
        let reqJson;
        let hoursOrDays = " days";
        let unUsedAssert = { 'TN 09 MK 8754': '', 'TN 09 MK 8654': '', 'TN 09 MK 8758': '', 'TN 09 MK 8750': '' };
        if (data.detail.value === "Yesterday") {
            hoursOrDays = " hours";
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.yesterdayDate,
                "toDate": this.yesterdayDate,
                "mode": "unUsedAsset"
            };
        }
        else if (data.detail.value === "Last 7 Days") {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.previousWeekDate,
                "toDate": this.todayDate,
                "mode": "unUsedAsset"
            };
        }
        else {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.previousMonthDate,
                "toDate": this.todayDate,
                "mode": "unUsedAsset"
            };
        }
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + "/report/gettop5data";
        this.ajaxService.ajaxPostMethod(url, reqJson)
            .subscribe(res => {
            ////console.log(res);
            unUsedAssert = res;
            var sortable = [];
            for (let vehicle in unUsedAssert) {
                sortable.push([vehicle, unUsedAssert[vehicle]]);
            }
            sortable.sort(function (a, b) {
                return a[1] - b[1];
            });
            ////console.log(sortable);
            for (let i = sortable.length - 1; i >= 0; i--) {
                let value = sortable[i][1].split(":");
                unUsedAssertName.push(sortable[i][0]);
                if (hoursOrDays == " hours") {
                    unUsedAssertValue.push(parseInt(value[0]));
                }
                else {
                    // unUsedAssertValue.push(parseFloat((parseInt(value[0]) / 24).toFixed(1)));
                    unUsedAssertValue.push(parseFloat(value[0]));
                }
            }
            // for(let i=0; i < Object.keys(unUsedAssert).length ;i++){
            //   unUsedAssertValue.push(parseInt(Object.values(unUsedAssert)[i]));
            //   unUsedAssertName.push(Object.keys(unUsedAssert)[i]);
            // }
            //let pic = this.overspeedImage;
            this.vehicleStatus("unUsedAssert", unUsedAssertName, unUsedAssertValue, '#8e4eeb', hoursOrDays);
        });
    }
    engineHours(data) {
        let engineHoursName = [];
        let engineHoursValue = [];
        let reqJson;
        let hoursOrDays = " hours";
        let engineHours = { '05': '', '21': '', '60': '', '90': '' };
        if (data.detail.value === "Yesterday") {
            hoursOrDays = " hours";
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.yesterdayDate,
                "toDate": this.yesterdayDate,
                "mode": "engineHrs"
            };
        }
        else if (data.detail.value === "Last 7 Days") {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.previousWeekDate,
                "toDate": this.todayDate,
                "mode": "engineHrs"
            };
        }
        else {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.previousMonthDate,
                "toDate": this.todayDate,
                "mode": "engineHrs"
            };
            ////console.log("reqJson"+reqJson)
        }
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + "/report/gettop5data";
        this.ajaxService.ajaxPostMethod(url, reqJson)
            .subscribe(res => {
            // //console.log(res);
            engineHours = res;
            var sortable = [];
            for (let vehicle in engineHours) {
                sortable.push([vehicle, engineHours[vehicle]]);
            }
            sortable.sort(function (a, b) {
                return a[1] - b[1];
            });
            // //console.log(sortable);
            for (let i = sortable.length - 1; i >= 0; i--) {
                let value = sortable[i][1].split(":");
                engineHoursName.push(sortable[i][0]);
                if (hoursOrDays == " hours") {
                    engineHoursValue.push(parseFloat(value[0]));
                }
                else {
                    engineHoursValue.push(Math.round(parseInt(value[0]) / 24));
                }
            }
            this.vehicleStatus("engineHours", engineHoursName, engineHoursValue, '#1198aa', hoursOrDays);
        });
    }
    vehicleOdometer(data) {
        let vehicleOdometerName = [];
        let vehicleOdometerValue = [];
        let reqJson;
        let km = " km";
        let vehicleOdometer = { 'TN 09 MK 8754': '', 'TN 09 MK 8654': '', 'TN 09 MK 8758': '', 'TN 09 MK 8750': '' };
        if (data.detail.value === "Yesterday") {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.yesterdayDate,
                "toDate": this.yesterdayDate,
                "mode": "odometer"
            };
        }
        else if (data.detail.value === "Last 7 Days") {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.previousWeekDate,
                "toDate": this.todayDate,
                "mode": "odometer"
            };
        }
        else {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.previousMonthDate,
                "toDate": this.todayDate,
                "mode": "odometer"
            };
        }
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + "/report/gettop5data";
        this.ajaxService.ajaxPostMethod(url, reqJson)
            .subscribe(res => {
            ////console.log(res);
            vehicleOdometer = res;
            var sortable = [];
            for (let vehicle in vehicleOdometer) {
                sortable.push([vehicle, vehicleOdometer[vehicle]]);
            }
            sortable.sort(function (a, b) {
                return a[1] - b[1];
            });
            ////console.log(sortable);
            for (let i = sortable.length - 1; i >= 0; i--) {
                let value = sortable[i][1].split(":");
                vehicleOdometerName.push(sortable[i][0]);
                vehicleOdometerValue.push(parseInt(value[0]));
            }
            // for(let i=0; i < Object.keys(vehicleOdometer).length ;i++){
            //   vehicleOdometerValue.push(parseInt(Object.values(vehicleOdometer)[i]));
            //   vehicleOdometerName.push(Object.keys(vehicleOdometer)[i]);
            // }
            this.vehicleStatus("vehicleOdometer", vehicleOdometerName, vehicleOdometerValue, '#27aae2', km);
        });
    }
    vehicleSummaries(statusType, categories, data, color) {
        var res = this.res;
        let i = 0;
        let xText = "";
        let yText = "";
        let enabled = false;
        let value;
        let commonService = this.commonService;
        let router = this.router;
        var modal = this.modalController;
        var table = function (datas) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (datas != '') {
                    const pmodal = yield modal.create({
                        component: _ais_dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_19__["TableComponent"],
                        componentProps: {
                            value: datas
                        }
                    });
                    pmodal.onDidDismiss().then(() => {
                    });
                    return yield pmodal.present();
                    // this.router.na
                }
            });
        };
        if (statusType == "odometerSummery") {
            // xText = "Odometer (km)";
            // yText = "Vehicles";
            value = this.odometerData;
        }
        else if (statusType == "speedometerSummery") {
            // xText = "Speedometer (km/h)";
            // yText = "Vehicles";
        }
        else {
            enabled = true;
            xText = "";
            yText = "";
        }
        let labels123 = ['0', '54', '70', '80', '140', '180', '200', '240'];
        highcharts__WEBPACK_IMPORTED_MODULE_12__["chart"](statusType, {
            chart: {
                height: this.donutAndBar.vehicleSummaries,
                type: 'column',
                animation: true,
                alignTicks: true
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            tooltip: {
                enabled: enabled
            },
            title: {
                text: null
            },
            xAxis: {
                categories: categories,
                allowDecimals: false,
                labels: {
                    style: {
                        fontSize: '0.8em'
                    }
                },
                title: {
                    text: xText
                }
            },
            yAxis: {
                allowDecimals: false,
                title: {
                    text: yText,
                },
                gridLineWidth: 0,
                lineWidth: 0,
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true,
                        color: 'black',
                        borderWidth: 0,
                        style: {
                            textOutline: "none"
                        }
                    }
                }
            },
            series: [
                {
                    events: {
                        click: function (event) {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                var ev_name = event.point.options.name;
                                if (ev_name != undefined) {
                                    // res.data[data]
                                    table(res.data[ev_name]);
                                    // console.log(res.data[data])
                                }
                            });
                        },
                    },
                    type: undefined,
                    data: data,
                    name: 'Vehicles',
                    pointWidth: 30,
                    color: color,
                    dataLabels: {
                        enabled: true
                    },
                }
            ]
        });
    }
    table(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (data != '') {
                const modal = yield this.modalController.create({
                    component: _ais_dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_19__["TableComponent"],
                    componentProps: {
                        value: data
                    }
                });
                modal.onDidDismiss().then(() => {
                });
                return yield modal.present();
            }
        });
    }
    alertsAndCounts(data) {
        let alertsType = [];
        let basicAlertsAndCount = { 'Overspeed': '', 'Idle': '', 'Stop': '', 'Engine On': '' };
        let alertsCount = [];
        let reqJson;
        if (data.detail.value == "Current") {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.todayDate,
                "toDate": this.todayDate
            };
        }
        else if (data.detail.value == "Yesterday") {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.yesterdayDate,
                "toDate": this.yesterdayDate
            };
            ////console.log(reqJson);
        }
        else if (data.detail.value == "Last 7 Days") {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.previousWeekDate,
                "toDate": this.todayDate
            };
        }
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + '/alert/alertcounts?userId=' + localStorage.getItem('userName') + '&fromDate=' + this.todayDate + '&toDate=' + this.todayDate;
        this.ajaxService.ajaxGet(url)
            .subscribe(res => {
            // //console.log(res);
            basicAlertsAndCount = res;
            //this.totalAlertCount = 0;
            for (let i = 0; i < Object.keys(basicAlertsAndCount).length; i++) {
                alertsCount.push(parseInt(Object.values(basicAlertsAndCount)[i]));
                // if(data.detail.value == "Current"){
                //   this.totalAlertCount += parseInt(Object.values(basicAlertsAndCount)[i]);
                // }
                if (Object.keys(basicAlertsAndCount)[i] == "PreventiveMaintenance") {
                    alertsType.push("PM");
                }
                else {
                    alertsType.push((Object.keys(basicAlertsAndCount)[i]).toUpperCase());
                }
            }
            // this.vehicleSummaries('alertCountSummery', alertsType, alertsCount, "#f7b921");
        });
        var speedVehicle = ['Total Alert', 'Open', 'Resolved', 'Escalated'];
        var speedRatio = [['', 20], ['open', 9], ['escalated', 10], ['resolved', 20]];
        this.vehicleSummaries("alertCountSummery", speedVehicle, speedRatio, "#009933");
    }
    odometer(data) {
        let speedRatio = [];
        let odometer = {};
        let speedVehicle = [];
        let reqJson;
        if (data.detail.value == "Current") {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.todayDate,
                "toDate": this.todayDate,
                "mode": "odometerSummary"
            };
        }
        else if (data.detail.value == "Yesterday") {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.yesterdayDate,
                "toDate": this.yesterdayDate,
                "mode": "odometerSummary"
            };
            ////console.log(reqJson);
        }
        else if (data.detail.value == "Last 7 Days") {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.previousWeekDate,
                "toDate": this.todayDate,
                "mode": "odometerSummary"
            };
        }
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + "/report/ChartSummaryData";
        this.ajaxService.ajaxPostMethod(url, reqJson)
            .subscribe(res => {
            ////console.log(res);
            odometer = res;
            // Object.keys(res).sort().forEach(function(key) {
            //   odometer[key] = res[key];
            // });
            // //console.log(odometer);
            let sortKey = Object.keys(odometer);
            sortKey.sort(function (a, b) { return parseInt(a) - parseInt(b); });
            for (let i = 0; i < sortKey.length; i++) {
                speedRatio.push([(odometer[sortKey[i]].vehicle).toString(), parseInt(odometer[sortKey[i]].count)]);
                speedVehicle.push(sortKey[i].toUpperCase());
            }
            this.odometerData = Object.values(odometer);
        });
        speedVehicle = ['Total Alert', 'Open', 'Resolved', 'Escalated'];
        speedRatio = [['', 0], ['', 10000], ['', 100], ['', 1000]];
        this.vehicleSummaries("odometerSummery", speedVehicle, speedRatio, "#27aae2");
    }
    speedometer(data) {
        let speedRatio = [];
        let speedometer = {};
        let speedVehicle = [];
        let reqJson;
        if (data.detail.value == "Current") {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.todayDate,
                "toDate": this.todayDate,
                "mode": "speedometerSummary"
            };
        }
        else if (data.detail.value == "Yesterday") {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.yesterdayDate,
                "toDate": this.yesterdayDate,
                "mode": "speedometerSummary"
            };
            ////console.log(reqJson);
        }
        else if (data.detail.value == "Last 7 Days") {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.previousWeekDate,
                "toDate": this.todayDate,
                "mode": "speedometerSummary"
            };
        }
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + "/report/ChartSummaryData";
        this.ajaxService.ajaxPostMethod(url, reqJson)
            .subscribe(res => {
            ////console.log(res);
            speedometer = res;
            let colors = [];
            // Object.keys(res).sort().forEach(function(key) {
            //   speedometer[key] = res[key];
            // });
            // for(let i=0; i < Object.keys(speedometer).length ;i++){
            //   speedRatio.push([(Object.values(speedometer)[i].vehicle).toString(),parseInt(Object.values(speedometer)[i].count)]);
            //   colors.push(speedRatio[i] <= 50 ? "#009933" : speedRatio[i] <= 75 ? "#ffdd1f" : speedRatio[i] > 76? "#f58220": "#f58220");
            //   speedVehicle.push((Object.keys(speedometer)[i]).toUpperCase());
            // }
            ////console.log(colors)
            let sortKey = Object.keys(speedometer);
            sortKey.sort(function (a, b) { return parseInt(a) - parseInt(b); });
            for (let i = 0; i < sortKey.length; i++) {
                speedRatio.push([(speedometer[sortKey[i]].vehicle).toString(), parseInt(speedometer[sortKey[i]].count)]);
                speedVehicle.push(sortKey[i].toUpperCase());
            }
            let color = "#009933";
            speedVehicle = ['Total Alert', 'Open', 'Resolved', 'Escalated'];
            speedRatio = [['', 2], ['', 5], ['', 10], ['', 20]];
            this.vehicleSummaries("speedometerSummery", speedVehicle, speedRatio, color);
        });
    }
    unUsedVehicleStatus(data) {
        let speedRatio = [];
        let unUsedSummary = { "0-50": { "count": "String", "vehicle": "String" } };
        let speedVehicle = [];
        let reqJson;
        if (data.detail.value == "Current") {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.todayDate,
                "toDate": this.todayDate,
                "mode": "unUsedAssetSummary"
            };
        }
        else if (data.detail.value == "Yesterday") {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.yesterdayDate,
                "toDate": this.yesterdayDate,
                "mode": "unUsedAssetSummary"
            };
            ////console.log(reqJson);
        }
        else if (data.detail.value == "Last 7 Days") {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.previousWeekDate,
                "toDate": this.todayDate,
                "mode": "unUsedAssetSummary"
            };
        }
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + "/report/ChartSummaryData";
        this.ajaxService.ajaxPostMethod(url, reqJson)
            .subscribe(res => {
            unUsedSummary = res;
            let sortKey = Object.keys(unUsedSummary);
            sortKey.sort(function (a, b) { return parseInt(a) - parseInt(b); });
            for (let i = 0; i < sortKey.length; i++) {
                speedRatio.push([(unUsedSummary[sortKey[i]].vehicle).toString(), parseInt(unUsedSummary[sortKey[i]].count)]);
                speedVehicle.push(sortKey[i].toUpperCase());
            }
            // for(let i=0; i < Object.keys(unUsedSummary).length ;i++){
            //   speedRatio.push([(Object.values(unUsedSummary)[i].vehicle).toString(),parseInt(Object.values(unUsedSummary)[i].count)]);
            //   speedVehicle.push((Object.keys(unUsedSummary)[i]).toUpperCase());
            // }
            this.vehicleSummary3d('unUsedVehicleStatus', speedVehicle, speedRatio);
        });
    }
    noOfDoorOpen(data) {
        let deviceDoorOpenName = [];
        let deviceDoorOpenValue = [];
        let reqJson;
        let km = " Times";
        let DoorOpen = { 'TN 09 MK 8754': '', 'TN 09 MK 8654': '', 'TN 09 MK 8758': '', 'TN 09 MK 8750': '' };
        if (data.detail.value === "Yesterday") {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.yesterdayDate,
                "toDate": this.yesterdayDate,
                "mode": "doorCount"
            };
        }
        else if (data.detail.value === "Last 7 Days") {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.previousWeekDate,
                "toDate": this.todayDate,
                "mode": "doorCount"
            };
        }
        else {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.previousMonthDate,
                "toDate": this.todayDate,
                "mode": "doorCount"
            };
        }
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + "/report/gettop5data";
        this.ajaxService.ajaxPostMethod(url, reqJson)
            .subscribe(res => {
            ////console.log(res);
            DoorOpen = res;
            var sortable = [];
            for (let device in DoorOpen) {
                sortable.push([device, DoorOpen[device]]);
            }
            sortable.sort(function (a, b) {
                return a[1] - b[1];
            });
            ////console.log(sortable);
            for (let i = sortable.length - 1; i >= 0; i--) {
                let value = sortable[i][1].split(":");
                deviceDoorOpenName.push(sortable[i][0]);
                deviceDoorOpenValue.push(parseInt(value[0]));
            }
            // for(let i=0; i < Object.keys(vehicleOdometer).length ;i++){
            //   vehicleOdometerValue.push(parseInt(Object.values(vehicleOdometer)[i]));
            //   vehicleOdometerName.push(Object.keys(vehicleOdometer)[i]);
            // }
            this.vehicleStatus("noOfDoorOpen", deviceDoorOpenName, deviceDoorOpenValue, '#FF851B', km);
        });
    }
    noOfPowerFail(data) {
        let devicePowerFailName = [];
        let devicePowerFailValue = [];
        let reqJson;
        let km = " Times";
        let powerFail = { 'TN 09 MK 8754': '', 'TN 09 MK 8654': '', 'TN 09 MK 8758': '', 'TN 09 MK 8750': '' };
        if (data.detail.value === "Yesterday") {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.yesterdayDate,
                "toDate": this.yesterdayDate,
                "mode": "powerFail"
            };
        }
        else if (data.detail.value === "Last 7 Days") {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.previousWeekDate,
                "toDate": this.todayDate,
                "mode": "powerFail"
            };
        }
        else {
            reqJson = {
                "userId": localStorage.getItem('userName'),
                "fromDate": this.previousMonthDate,
                "toDate": this.todayDate,
                "mode": "powerFail"
            };
        }
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + "/report/gettop5data";
        this.ajaxService.ajaxPostMethod(url, reqJson)
            .subscribe(res => {
            ////console.log(res);
            powerFail = res;
            var sortable = [];
            for (let device in powerFail) {
                sortable.push([device, powerFail[device]]);
            }
            sortable.sort(function (a, b) {
                return a[1] - b[1];
            });
            ////console.log(sortable);
            for (let i = sortable.length - 1; i >= 0; i--) {
                let value = sortable[i][1].split(":");
                devicePowerFailName.push(sortable[i][0]);
                devicePowerFailValue.push(parseInt(value[0]));
            }
            // for(let i=0; i < Object.keys(vehicleOdometer).length ;i++){
            //   vehicleOdometerValue.push(parseInt(Object.values(vehicleOdometer)[i]));
            //   vehicleOdometerName.push(Object.keys(vehicleOdometer)[i]);
            // }
            this.vehicleStatus("noOfPowerFail", devicePowerFailName, devicePowerFailValue, '#412525', km);
        });
    }
    vehicleSummary3d(statusType, categories, data) {
        let router = this.router;
        let commonService = this.commonService;
        highcharts_highcharts_3d_src__WEBPACK_IMPORTED_MODULE_13___default()(highcharts__WEBPACK_IMPORTED_MODULE_12__);
        highcharts__WEBPACK_IMPORTED_MODULE_12__["chart"](statusType, {
            chart: {
                // width: 330,
                height: this.donutAndBar.vehicleSummary3d,
                type: 'column',
                animation: true,
                options3d: {
                    enabled: true,
                    alpha: 5,
                    beta: 15,
                    depth: 40,
                    viewDistance: 0,
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            tooltip: {
                enabled: false,
            },
            title: {
                text: null
            },
            xAxis: {
                gridLineWidth: 0,
                lineWidth: 0,
                categories: categories,
                title: {
                    text: 'Hours'
                }
            },
            colors: ['#00b359', '#ff3399', '#80aaff', '#ff751a', '#00b3b3'],
            yAxis: {
                title: {
                    text: "Vehicle Count",
                },
                gridLineWidth: 0,
                lineWidth: 0,
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true,
                        format: '{y}',
                        color: 'black',
                        borderWidth: 0,
                        style: {
                            textOutline: "none"
                        }
                    }
                }
            },
            series: [
                {
                    events: {
                        click: function (event) {
                            var data = event.point.options.name;
                            data = data.split(",");
                            const routingData = {
                                type: "Vin",
                                count: event.point.options.y,
                                data: data
                            };
                            if (routingData.count > 0) {
                                localStorage.setItem('vinGridViewData', JSON.stringify(routingData));
                                router.navigateByUrl("tabs/gridview/Vin");
                                //          //console.log(routingData);
                            }
                            else {
                                commonService.presentToast('There is no vehicle data to show');
                            }
                        },
                    },
                    type: undefined,
                    name: 'Vehicle Count',
                    data: data,
                    colorByPoint: true,
                    pointWidth: 30,
                }
            ]
        });
    }
};
AisDashboardPage.ctorParameters = () => [
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_9__["FirebaseX"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__["Device"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_18__["AuthenticationService"] },
    { type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_11__["UniqueDeviceID"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_17__["StatusBar"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_15__["AppVersion"] },
    { type: _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_16__["Market"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"] }
];
AisDashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ais-dashboard',
        template: __webpack_require__(/*! raw-loader!./ais-dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/ais-dashboard/ais-dashboard.page.html"),
        styles: [__webpack_require__(/*! ./ais-dashboard.page.scss */ "./src/app/ais-dashboard/ais-dashboard.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _services_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_9__["FirebaseX"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__["Device"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_18__["AuthenticationService"],
        _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_11__["UniqueDeviceID"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_17__["StatusBar"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
        _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_15__["AppVersion"],
        _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_16__["Market"],
        _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"]])
], AisDashboardPage);



/***/ }),

/***/ "./src/app/ais-dashboard/table/table.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/ais-dashboard/table/table.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fpcy1kYXNoYm9hcmQvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ais-dashboard/table/table.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ais-dashboard/table/table.component.ts ***!
  \********************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TableComponent = class TableComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.value);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TableComponent.prototype, "value", void 0);
TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table',
        template: __webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/index.js!./src/app/ais-dashboard/table/table.component.html"),
        styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/ais-dashboard/table/table.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TableComponent);



/***/ })

}]);
//# sourceMappingURL=ais-dashboard-ais-dashboard-module-es2015.js.map