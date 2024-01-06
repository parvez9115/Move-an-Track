(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class='header'>\r\n    <ion-toolbar>\r\n        <ion-grid>\r\n            <ion-row></ion-row>\r\n\r\n            <ion-row *ngIf='myPlatform !=\"desktop\"'>\r\n                <ion-col size='2'>\r\n                    <ion-menu-button></ion-menu-button>\r\n                </ion-col>\r\n                <ion-col size='8.5' style='align-self: center;'>\r\n                    <ion-row>\r\n                        <ion-label style=\"font-size: 20px;font-weight: bold;\"> Dashboard </ion-label>\r\n                    </ion-row>\r\n                </ion-col>\r\n                <!-- <ion-col size='1.5'>\r\n                        <ion-row><ion-icon style='font-size: 25px;' ios=\"md-search\" (click) ='searchStatus()' md=\"md-search\"></ion-icon></ion-row>\r\n                    </ion-col> -->\r\n                <ion-col size='1.5' style=\"padding: 0px;\">\r\n                    <ion-row (click)=\"bellRouter()\">\r\n                        <ion-col size='3' style=\"align-self: center;\">\r\n                            <ion-img src=\"assets/dashboard_background/bell.png\" style=\"width:22px; height:22px\">\r\n                            </ion-img>\r\n                            <ion-badge color=\"danger\" style=\"    position: absolute;font-size: 7px;\r\n                                font-size: 9px;\r\n                                top: 6px;\r\n                                left: 17px;\r\n                                padding: 2px;\r\n                                color: white;\r\n                                font-weight: bold;\">\r\n                                {{totalAlertCount}}\r\n                            </ion-badge>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row *ngIf='myPlatform ==\"desktop\"'>\r\n                <ion-col size='2'>\r\n                    <ion-menu-button></ion-menu-button>\r\n                </ion-col>\r\n                <ion-col size='8.5' style='align-self: center;'>\r\n                    <ion-row>\r\n                        <ion-label class=\"headercolour\"> Dashboard </ion-label>\r\n                    </ion-row>\r\n                </ion-col>\r\n                <!-- <ion-col size='1.5'>\r\n                        <ion-row><ion-icon style='font-size: 25px;' ios=\"md-search\" (click) ='searchStatus()' md=\"md-search\"></ion-icon></ion-row>\r\n                    </ion-col> -->\r\n                <ion-col size='1.5' style=\"padding: 0px;\">\r\n                    <ion-row (click)=\"bellRouter()\">\r\n                        <ion-col size='3' style=\"align-self: center;\">\r\n                            <ion-img src=\"assets/dashboard_background/bell.png\" style=\"width:22px; height:22px\">\r\n                            </ion-img>\r\n                            <ion-badge color=\"danger\" style=\"    position: absolute;font-size: 7px;\r\n                                font-size: 9px;\r\n                                top: 6px;\r\n                                left: 17px;\r\n                                padding: 2px;\r\n                                color: white;\r\n                                font-weight: bold;\">\r\n                                {{totalAlertCount}}\r\n                            </ion-badge>\r\n                        </ion-col>\r\n                        <ion-col *ngIf='myPlatform ==\"desktop\"' size='9'>\r\n                            <ion-img [src]=\"app.logo\"></ion-img>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <!-- ********************************* Mobile View ****************************************************** -->\r\n    <div *ngIf=\"showDashbordChart.includes('Current Vehicle Status')\">\r\n        <ion-row style=\"margin-top: 7px;\">\r\n            <ion-col\r\n                [ngClass]='{\"displayOthers\": (myPlatform === \"desktop\" && showDashbordChart.includes(\"Current Vehicle Status\") === true), \"displayDesktop\":(myPlatform !== \"desktop\" && showDashbordChart.includes(\"Current Vehicle Status\") === true)}'\r\n                class=\"displayLine\" size=\"3\"> </ion-col>\r\n            <ion-col\r\n                [ngClass]='{\"displayOthers\": (myPlatform === \"desktop\" && showDashbordChart.includes(\"Current Vehicle Status\") === true), \"displayDesktop\":(myPlatform !== \"desktop\" && showDashbordChart.includes(\"Current Vehicle Status\") === true)}'\r\n                class=\"vehicleStatusHeading\" size=\"6\">Current Vehicle Status </ion-col>\r\n            <ion-col\r\n                [ngClass]='{\"displayOthers\": (myPlatform === \"desktop\" && showDashbordChart.includes(\"Current Vehicle Status\") === true), \"displayDesktop\":(myPlatform !== \"desktop\" && showDashbordChart.includes(\"Current Vehicle Status\") === true)}'\r\n                style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\" size=\"3\">\r\n            </ion-col>\r\n        </ion-row>\r\n    </div>\r\n    <ion-card\r\n        [ngClass]='{\"displayOthers\":( myPlatform === \"desktop\" || showDashbordChart.includes(\"Current Vehicle Status\")== false), \"displayDesktop\": (myPlatform !== \"desktop\"&& showDashbordChart.includes(\"Current Vehicle Status\") == true)}'>\r\n        <ion-card-content>\r\n            \r\n                <ion-row>\r\n                    <ion-segment scrollable style=\"width:100%\">\r\n                    <ion-col size=\"2.4\" *ngIf=\"!loginData.includes('DoorOpen')\">\r\n                        <ion-row style=\"font-size: xx-small; place-content: center;\">ALL</ion-row>\r\n                        <ion-row class=\"statusBar\" style=\"background-color:#989aa2 ;\"\r\n                            (click)=\"routerModal(vehicleCount.all, 'All')\">{{vehicleCount.all}}</ion-row>\r\n                    </ion-col>\r\n                    <ion-col size=\"2.4\" *ngIf=\"loginData.includes('Running')\">\r\n                        <ion-row style=\"font-size: xx-small; place-content: center;\">RUNNING</ion-row>\r\n                        <ion-row class=\"statusBar\" style=\"background-color:#1eb15d;\"\r\n                            (click)=\"routerModal(vehicleCount.running,'Running' )\">{{vehicleCount.running}}</ion-row>\r\n                    </ion-col>\r\n                    <ion-col *ngIf=\"loginData.includes('Good')\">\r\n                        <ion-row style=\"font-size: xx-small; place-content: center;\">GOOD</ion-row>\r\n                        <ion-row class=\"statusBar\" style=\"background-color:#1eb15d;\"\r\n                            (click)=\"routerModal(vehicleCount.good,'good' )\">{{vehicleCount.good}}</ion-row>\r\n                    </ion-col>\r\n                    <ion-col *ngIf=\"loginData.includes('DoorOpen')\">\r\n                        <ion-row style=\"font-size: xx-small; place-content: center;\">DOOROPEN</ion-row>\r\n                        <ion-row class=\"statusBar\" style=\"background-color:#FF851B ;\"\r\n                            (click)=\"routerModal(vehicleCount.dooropen,'DoorOpen' )\">{{vehicleCount.dooropen}}</ion-row>\r\n                    </ion-col>\r\n                    <ion-col size=\"2.4\" *ngIf=\"loginData.includes('Stop')\">\r\n                        <ion-row style=\"font-size: xx-small; place-content: center;\">STOP</ion-row>\r\n                        <ion-row class=\"statusBar\" style=\"background-color:#FF0000 ;\"\r\n                            (click)=\"routerModal(vehicleCount.stop,'Stop' )\">{{vehicleCount.stop}}</ion-row>\r\n                    </ion-col>\r\n                    <ion-col *ngIf=\"loginData.includes('HighTemp')\">\r\n                        <ion-row style=\"font-size: xx-small; place-content: center;\">HIGHTEMP</ion-row>\r\n                        <ion-row class=\"statusBar\" style=\"background-color:#FF0000 ;\"\r\n                            (click)=\"routerModal(vehicleCount.hightemp,'HighTemp' )\">{{vehicleCount.hightemp}}</ion-row>\r\n                    </ion-col>\r\n                    <ion-col size=\"2.4\" *ngIf=\"loginData.includes('Idle')\">\r\n                        <ion-row style=\"font-size: xx-small; place-content: center;\">IDLE</ion-row>\r\n                        <ion-row class=\"statusBar\" style=\"background-color:#1f5baa ;\"\r\n                            (click)=\"routerModal(vehicleCount.idle,'Idle')\">{{vehicleCount.idle}}</ion-row>\r\n                    </ion-col>\r\n                    <ion-col *ngIf=\"loginData.includes('Geofence')\">\r\n                        <ion-row style=\"font-size: xx-small; place-content: center;\">GEOFENCE</ion-row>\r\n                        <ion-row class=\"statusBar\" style=\"background-color:#1f5baa ;\"\r\n                            (click)=\"routerModal(vehicleCount.geofence,'Geofence')\">{{vehicleCount.geofence}}</ion-row>\r\n                    </ion-col>\r\n                    <ion-col *ngIf=\"loginData.includes('PowerFail')\">\r\n                        <ion-row style=\"font-size: xx-small; place-content: center;\">POWERFAIL</ion-row>\r\n                        <ion-row class=\"statusBar\" style=\"background-color:#724040 ;\"\r\n                            (click)=\"routerModal(vehicleCount.powerfail,'PowerFail')\">{{vehicleCount.powerfail}}\r\n                        </ion-row>\r\n                    </ion-col>\r\n                    <ion-col size=2.4 *ngIf=\"loginData.includes('No Transmission') && entryPoint =='vts' || 'VTS'\">\r\n                        <ion-row style=\"font-size: xx-small; place-content: center;\">NOTRANSMIT</ion-row>\r\n                        <ion-row class=\"statusBar\" style=\"background-color:#000000 ;\"\r\n                            (click)=\"routerModal(vehicleCount.noTransmit,'No Transmission')\">{{vehicleCount.noTransmit}}\r\n                        </ion-row>\r\n                    </ion-col>\r\n                    <!-- <ion-col *ngIf=\"loginData.includes('No Transmission') && entryPoint =='vts'\">\r\n                        <ion-row style=\"font-size: xx-small; place-content: center;\">NOTRANSMIT</ion-row>\r\n                        <ion-row class=\"statusBar\" style=\"background-color:#000000 ;\"\r\n                            (click)=\"routerModal(vehicleCount.noTransmit,'No Transmission')\">{{vehicleCount.noTransmit}}\r\n                        </ion-row>\r\n                    </ion-col> -->\r\n                    <ion-col size=2.4 *ngIf=\"loginData.includes('Overspeed') && entryPoint =='vts' || 'VTS'\">\r\n                        <ion-row style=\"font-size: xx-small; place-content: center;\">Overspeed</ion-row>\r\n                        <ion-row class=\"statusBar\" style=\"background-color:#f28918;\"\r\n                            (click)=\"routerModal(vehicleCount.Towed,'Towed')\">{{vehicleCount.Overspeed}}\r\n                        </ion-row>\r\n                    </ion-col>\r\n                    <ion-col size=2.4 *ngIf=\"loginData.includes('Towed') && entryPoint =='vts' || 'VTS'\">\r\n                        <ion-row style=\"font-size: xx-small; place-content: center;\">TOWED</ion-row>\r\n                        <ion-row class=\"statusBar\" style=\"background-color:#c200b8;\"\r\n                            (click)=\"routerModal(vehicleCount.Towed,'Towed')\">{{vehicleCount.Towed}}\r\n                        </ion-row>\r\n                    </ion-col>\r\n                    <ion-col size=2.4 *ngIf=\"loginData.includes('Yet_to_transmit') && entryPoint =='vts' || 'VTS'\">\r\n                        <ion-row style=\"font-size: xx-small; place-content: center;\">YETTOTRANSMIT</ion-row>\r\n                        <ion-row class=\"statusBar\" style=\"background-color:#7d410f;\"\r\n                            (click)=\"routerModal(vehicleCount.Yet_to_transmit,'Yet_to_transmit')\">\r\n                            {{vehicleCount.Yet_to_transmit}}\r\n                        </ion-row>\r\n                    </ion-col>\r\n                    <ion-col size=2.4 *ngIf=\"loginData.includes('Online') && entryPoint =='vts' || 'VTS'\">\r\n                        <ion-row style=\"font-size: xx-small; place-content: center;\">ONLINE</ion-row>\r\n                        <ion-row class=\"statusBar\" style=\"background-color:#00E1BC;\"\r\n                            (click)=\"routerModal(vehicleCount.Online,'Online')\">{{vehicleCount.Online}}\r\n                        </ion-row>\r\n                    </ion-col>\r\n                </ion-segment>\r\n                </ion-row>\r\n        \r\n            <ion-row>\r\n                <ion-col size='12'>\r\n                    <div id=\"totalVehicleStatus\"\r\n                        style=\"text-align: -webkit-center;position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-card-content>\r\n    </ion-card>\r\n\r\n\r\n    <div *ngIf='myPlatform != \"desktop\"'>\r\n        <div> \r\n            <!-- ********************* Alert Count Summery Card   ************************** -->\r\n            <ion-row *ngIf='showDashbordChart.includes(\"Alert Count Summery\") == true'\r\n                style=\"margin-top: 7px; padding-top: 15px;\">\r\n                <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                    size=\"3\"></ion-col>\r\n                <ion-col class=\"vehicleStatusHeading\" size=\"6\">Alert Count Summary </ion-col>\r\n                <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                    size=\"3\"></ion-col>\r\n            </ion-row>\r\n            <ion-card *ngIf='showDashbordChart.includes(\"Alert Count Summery\") == true'>\r\n                <ion-card-content style=\"padding:0px\">\r\n                    <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\" \r\n                        (ionChange)=\"alertsAndCounts($event)\">\r\n                        <ion-row>\r\n                            <ion-col size='4' *ngFor=\"let alertsAndCounts of summaryStatusChanger\">\r\n                                <ion-row>\r\n                                    <ion-col size='3'>\r\n                                        <ion-radio color='danger' style=\"width: 12px; height: 12px;\" [ngClass]=\"{'checkboxIos': isIosPlatform == true}\"\r\n                                            id='{{alertsAndCounts.status}}' checked value=\"{{alertsAndCounts.status}}\">\r\n                                        </ion-radio>\r\n                                    </ion-col>\r\n                                    <ion-col size='8'>\r\n                                        <ion-label style=\"font-size: 9px;\">{{alertsAndCounts.status}}</ion-label>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                    <ion-row>\r\n                        <ion-col size='12'>\r\n                            <div id=\"alertCountSummery\" *ngIf=\"alertChartdata\"\r\n                                style=\"position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                            </div>\r\n                            <ion-img src=\"assets/background_img/NoData.svg\" *ngIf=\"alertshowNodata\"\r\n                            style=\"height: 24.5vh;bottom: 0px;left: 120px;\"></ion-img>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-card-content>\r\n            </ion-card>\r\n             <!-- ********************* Unused Vehicles Summary   ************************** -->\r\n            <ion-row *ngIf='showDashbordChart.includes(\"Unused Vehicles Summary\") == true'\r\n                style=\"margin-top: 7px; padding-top: 15px;\">\r\n                <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                    size=\"2\"></ion-col>\r\n                <ion-col class=\"vehicleStatusHeading\" size=\"8\">Unused Vehicles Summary</ion-col>\r\n                <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                    size=\"2\"></ion-col>\r\n            </ion-row>\r\n            <ion-card *ngIf='showDashbordChart.includes(\"Unused Vehicles Summary\") == true'>\r\n                <ion-card-content style=\"padding : 0px\">\r\n                    <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\" \r\n                        (ionChange)=\"unUsedVehicleStatus($event)\">\r\n                        <ion-row style=\"margin-left: 20%;\">\r\n                            <ion-col size='4' *ngFor=\"let unUsedVehicleStatus of summaryStatus\">\r\n                                <ion-row *ngIf='unUsedVehicleStatus.status != \"Current\"'>\r\n                                    <ion-col size='3'>\r\n                                        <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                            id='{{unUsedVehicleStatus.status}}' checked [ngClass]=\"{'checkboxIos': isIosPlatform == true}\"\r\n                                            value=\"{{unUsedVehicleStatus.status}}\"></ion-radio>\r\n                                    </ion-col>\r\n                                    <ion-col size='9'>\r\n                                        <ion-label style=\"font-size: 9px;\">{{unUsedVehicleStatus.status}}</ion-label>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                    <!-- <ion-row>\r\n                                    <ion-col size='12'>\r\n                                        <div id=\"unUsedVehicleStatus\" style=\"position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\"></div>\r\n                                    </ion-col>\r\n                                </ion-row> -->\r\n                    <ion-row>\r\n                        <ion-col size='12'>\r\n                            <div id=\"unUsedVehicleStatus\"\r\n                                style=\"position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                            </div>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-card-content>\r\n            </ion-card>\r\n\r\n            <!-- ********************* TOP 5 Door Open   ************************** -->\r\n            <ion-row *ngIf='showDashbordChart.includes(\"Top 5 Power Fail\") == true'\r\n                style=\"margin-top: 7px; padding-top: 15px;\">\r\n                <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                    size=\"3\"></ion-col>\r\n                <ion-col class=\"vehicleStatusHeading\" size=\"6\">Top 5 Power Fail</ion-col>\r\n                <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                    size=\"3\"></ion-col>\r\n            </ion-row>\r\n\r\n            <ion-card class=\"card\" *ngIf='showDashbordChart.includes(\"Top 5 Power Fail\") == true'>\r\n                <ion-card-content>\r\n                    <ion-radio-group class=\"radio\" allow-empty-selection=\"false\" name=\"radio-group\" \r\n                        (ionChange)=\"noOfPowerFail($event)\">\r\n                        <ion-row>\r\n                            <ion-col size='4' *ngFor=\"let noOfPowerFail of statusChanger\">\r\n                                <ion-row>\r\n                                    <ion-col size='3'>\r\n                                        <ion-radio color='danger' style=\"width: 12px; height: 12px;\" [ngClass]=\"{'checkboxIos': isIosPlatform == true}\"\r\n                                            id='{{noOfPowerFail.status}}' checked value=\"{{noOfPowerFail.status}}\">\r\n                                        </ion-radio>\r\n                                    </ion-col>\r\n                                    <ion-col size='8'>\r\n                                        <ion-label style=\"font-size: 9px;\">{{noOfPowerFail.status}}</ion-label>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n\r\n                    <ion-row>\r\n                        <ion-col size='12'>\r\n                            <div id=\"noOfPowerFail\"\r\n                                style=\"position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                            </div>\r\n                        </ion-col>\r\n\r\n\r\n                    </ion-row>\r\n                </ion-card-content>\r\n            </ion-card>\r\n\r\n            <!-- ********************* TOP 5 Door Open   ************************** -->\r\n            <ion-row *ngIf='showDashbordChart.includes(\"Top 5 Door Open\") == true'\r\n                style=\"margin-top: 7px; padding-top: 15px;\">\r\n                <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                    size=\"3\"></ion-col>\r\n                <ion-col class=\"vehicleStatusHeading\" size=\"6\">Top 5 Door Open</ion-col>\r\n                <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                    size=\"3\"></ion-col>\r\n            </ion-row>\r\n            <ion-card class=\"card\" *ngIf='showDashbordChart.includes(\"Top 5 Door Open\") == true'>\r\n                <ion-card-content>\r\n                    <ion-radio-group class=\"radio\" allow-empty-selection=\"false\" name=\"radio-group\" \r\n                        (ionChange)=\"noOfDoorOpen($event)\">\r\n                        <ion-row>\r\n                            <ion-col size='4' *ngFor=\"let noOfDoorOpen of statusChanger\">\r\n                                <ion-row>\r\n                                    <ion-col size='3'>\r\n                                        <ion-radio color='danger' style=\"width: 12px; height: 12px;\" [ngClass]=\"{'checkboxIos': isIosPlatform == true}\"\r\n                                            id='{{noOfDoorOpen.status}}' checked value=\"{{noOfDoorOpen.status}}\">\r\n                                        </ion-radio>\r\n                                    </ion-col>\r\n                                    <ion-col size='8'>\r\n                                        <ion-label style=\"font-size: 9px;\">{{noOfDoorOpen.status}}</ion-label>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n\r\n                    <ion-row>\r\n                        <ion-col size='12'>\r\n                            <div id=\"noOfDoorOpen\"\r\n                                style=\"position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                            </div>\r\n                        </ion-col>\r\n\r\n\r\n                    </ion-row>\r\n                </ion-card-content>\r\n            </ion-card>\r\n\r\n            <!-- ********************* Odometer Summery Card   ************************** -->\r\n            <ion-row *ngIf='showDashbordChart.includes(\"Odometer Summary\") == true'\r\n                style=\"margin-top: 7px; padding-top: 15px;\">\r\n                <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                    size=\"3\"></ion-col>\r\n                <ion-col class=\"vehicleStatusHeading\" size=\"6\">Odometer Summary</ion-col>\r\n                <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                    size=\"3\"></ion-col>\r\n            </ion-row>\r\n            <ion-card *ngIf='showDashbordChart.includes(\"Odometer Summary\") == true'>\r\n                <ion-card-content style=\"padding:0px\">\r\n                    <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\" (ionChange)=\"odometer($event)\" >\r\n                        <ion-row style=\"margin-left: 20%;\">\r\n                            <ion-col size='4' *ngFor=\"let odometer of summaryStatus\">\r\n                                <ion-row *ngIf='odometer.status != \"Current\"'>\r\n                                    <ion-col size='3'>\r\n                                        <ion-radio color='danger' style=\"width: 12px; height: 12px;\" [ngClass]=\"{'checkboxIos': isIosPlatform == true}\"\r\n                                            id='{{odometer.status}}' checked value=\"{{odometer.status}}\"></ion-radio>\r\n                                    </ion-col>\r\n                                    <ion-col size='9'>\r\n                                        <ion-label style=\"font-size: 9px;\">{{odometer.status}}</ion-label>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                    <ion-row>\r\n                        <ion-col size='12'>\r\n                            <div id=\"odometerSummery\"\r\n                                style=\"position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                            </div>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-card-content>\r\n            </ion-card>\r\n            <!-- ********************* Speedometer Summery Card   ************************** -->\r\n            <ion-row *ngIf='showDashbordChart.includes(\"Speedometer Summary\") == true'\r\n                style=\"margin-top: 7px; padding-top: 15px;\">\r\n                <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                    size=\"3\"></ion-col>\r\n                <ion-col class=\"vehicleStatusHeading\" size=\"6\">Speedometer Summary </ion-col>\r\n                <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                    size=\"3\"></ion-col>\r\n            </ion-row>\r\n            <ion-card *ngIf='showDashbordChart.includes(\"Speedometer Summary\") == true'>\r\n                <ion-card-content style=\"padding:0px\">\r\n                    <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\" (ionChange)=\"speedometer($event)\">\r\n                        <ion-row>\r\n                            <ion-col size='4' *ngFor=\"let speedometer of summaryStatusChanger\">\r\n                                <ion-row *ngIf='speedometer.status == \"Yesterday\"'>\r\n                                    <ion-col size='3'>\r\n                                        <ion-radio color='danger' style=\"width: 12px; height: 12px;\" [ngClass]=\"{'checkboxIos': isIosPlatform == true}\"\r\n                                            id='{{speedometer.status}}' checked value=\"{{speedometer.status}}\">\r\n                                        </ion-radio>\r\n                                    </ion-col>\r\n                                    <ion-col size='8'>\r\n                                        <ion-label style=\"font-size: 9px;\">{{speedometer.status}}</ion-label>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                    <ion-row>\r\n                        <ion-col size='12'>\r\n                            <div id=\"speedometerSummery\" ></div>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-card-content>\r\n            </ion-card>\r\n\r\n            <!-- ********************* Total Hrs Distribution Summary  ************************** -->\r\n            <ion-row *ngIf='showDashbordChart.includes(\"Distribution Summary\") == true'\r\n                style=\"margin-top: 7px; padding-top: 15px;\">\r\n                <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                    size=\"3\"></ion-col>\r\n                <ion-col class=\"vehicleStatusHeading\" size=\"6\">Distribution Summary</ion-col>\r\n                <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                    size=\"3\"></ion-col>\r\n            </ion-row>\r\n            <ion-card *ngIf='showDashbordChart.includes(\"Distribution Summary\") == true'>\r\n                <ion-card-content>\r\n                    <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n                        (ionChange)=\"totalHrsDistributionSummary($event)\">\r\n                        <ion-row>\r\n                            <ion-col size='4' *ngFor=\"let totalHrsDistribution of statusChanger\">\r\n                                <ion-row>\r\n                                    <ion-col size='3'>\r\n                                        <ion-radio color='danger' style=\"width: 12px; height: 12px;\" [ngClass]=\"{'checkboxIos': isIosPlatform == true}\"\r\n                                            id='{{totalHrsDistribution.status}}' checked\r\n                                            value=\"{{totalHrsDistribution.status}}\"></ion-radio>\r\n                                    </ion-col>\r\n                                    <ion-col size='8'>\r\n                                        <ion-label style=\"font-size: 9px;\">{{totalHrsDistribution.status}}</ion-label>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                    <ion-row>\r\n                        <ion-col size='12'>\r\n                            <div id=\"totalHrsDistributionChart\"\r\n                                style=\"position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                            </div>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </div>\r\n        <!-- ********************* Over Speed Alert Card    ************************** -->\r\n        <div>\r\n            <ion-row *ngIf='showDashbordChart.includes(\"Top 5 Overspeed Vehicles\") == true'\r\n                style=\"margin-top: 7px; padding-top: 15px;\">\r\n                <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                    size=\"2\"></ion-col>\r\n                <ion-col class=\"vehicleStatusHeading\" size=\"8\">Top 5 Overspeed Vehicles</ion-col>\r\n                <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                    size=\"2\"></ion-col>\r\n            </ion-row>\r\n            <ion-card *ngIf='showDashbordChart.includes(\"Top 5 Overspeed Vehicles\") == true'>\r\n                <ion-img src=\"/assets/dashboard_background/overspeedimg.png\"\r\n                    style=\"height: 75%;position: absolute;bottom: 23px;left: 68px;\"></ion-img>\r\n                <ion-card-content>\r\n                    <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\" \r\n                        (ionChange)=\"overspeedStatus($event)\">\r\n                        <ion-row>\r\n                            <ion-col size='4' *ngFor=\"let overSpeedStatus of statusChanger\">\r\n                                <ion-row>\r\n                                    <ion-col size='3'>\r\n                                        <ion-radio color='danger' style=\"width: 12px; height: 12px;\" [ngClass]=\"{'checkboxIos': isIosPlatform == true}\"\r\n                                            id='{{overSpeedStatus.status}}' checked value=\"{{overSpeedStatus.status}}\">\r\n                                        </ion-radio>\r\n                                    </ion-col>\r\n                                    <ion-col size='8'>\r\n                                        <ion-label style=\"font-size: 9px;\">{{overSpeedStatus.status}}</ion-label>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                    <ion-row>\r\n                        <ion-col size='12'>\r\n                            <div id=\"overspeedvehicles\" *ngIf=\"Overspeedchartdata\"\r\n                                style=\"position: relative; overflow: hidden; max-width: 800px; width: 280;height: 200px;\">\r\n                            </div>\r\n                            <ion-img src=\"assets/background_img/NoData.svg\" *ngIf=\"OverspeedshowNodata\"\r\n                            style=\"height: 24.5vh;bottom: 0px;left: 120px;\"></ion-img>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-card-content>\r\n            </ion-card>\r\n\r\n            <!-- ********************* Un Used Assert Card    ************************** -->\r\n            <ion-row *ngIf='showDashbordChart.includes(\"Top 5 Unused Assets\") == true'\r\n                style=\"margin-top: 7px; padding-top: 15px;\">\r\n                <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                    size=\"3\"></ion-col>\r\n                <ion-col class=\"vehicleStatusHeading\" size=\"6\">Top 5 Unused Assets</ion-col>\r\n                <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                    size=\"3\"></ion-col>\r\n            </ion-row>\r\n            <ion-card *ngIf='showDashbordChart.includes(\"Top 5 Unused Assets\") == true'>\r\n                <ion-card-content>\r\n                    <ion-img src=\"/assets/dashboard_background/unusedassert.png\"\r\n                        style=\"height: 75%;position: absolute;bottom: 23px;left: 72px;\"></ion-img>\r\n                    <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\" \r\n                        (ionChange)=\"unUsedAssert($event)\">\r\n                        <ion-row>\r\n                            <ion-col size='4' *ngFor=\"let unUsedAssertStatus of statusChanger\">\r\n                                <ion-row>\r\n                                    <ion-col size='3'>\r\n                                        <ion-radio color='danger' style=\"width: 12px; height: 12px;\" [ngClass]=\"{'checkboxIos': isIosPlatform == true}\"\r\n                                            id='{{unUsedAssertStatus.status}}' checked\r\n                                            value=\"{{unUsedAssertStatus.status}}\"></ion-radio>\r\n                                    </ion-col>\r\n                                    <ion-col size='8'>\r\n                                        <ion-label style=\"font-size: 9px;\">{{unUsedAssertStatus.status}}</ion-label>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                    <ion-row>\r\n                        <ion-col size='12'>\r\n                            <div id=\"unUsedAssert\" *ngIf=\"unUsedAssertchartdata\"\r\n                                style=\"position: relative; overflow: hidden; max-width: 800px; width: 280;height: 200px;\">\r\n                            </div>\r\n                            <ion-img src=\"assets/background_img/NoData.svg\" *ngIf=\"unUsedAssertshowNodata\"\r\n                            style=\"height: 24.5vh;bottom: 0px;left: 120px;\"></ion-img>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-card-content>\r\n            </ion-card>\r\n\r\n            <!-- ********************* Engine Hours Card    ************************** -->\r\n            <ion-row *ngIf='showDashbordChart.includes(\"Top 5 Engine Hours\") == true'\r\n                style=\"margin-top: 7px; padding-top: 15px;\">\r\n                <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                    size=\"3\"></ion-col>\r\n                <ion-col class=\"vehicleStatusHeading\" size=\"6\">Top 5 Engine Hours</ion-col>\r\n                <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                    size=\"3\"></ion-col>\r\n            </ion-row>\r\n            <ion-card *ngIf='showDashbordChart.includes(\"Top 5 Engine Hours\") == true'>\r\n                <ion-card-content>\r\n                    <ion-img src=\"/assets/dashboard_background/enginehrs.png\"\r\n                        style=\"height: 75%;position: absolute;bottom: 23px;left: 39px;\"></ion-img>\r\n                    <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"  (ionChange)=\"engineHours($event)\">\r\n                        <ion-row>\r\n                            <ion-col size='4' *ngFor=\"let engineHoursStatus of statusChanger\">\r\n                                <ion-row>\r\n                                    <ion-col size='3'>\r\n                                        <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                            id='{{engineHoursStatus.status}}' checked [ngClass]=\"{'checkboxIos': isIosPlatform == true}\"\r\n                                            value=\"{{engineHoursStatus.status}}\"></ion-radio>\r\n                                    </ion-col>\r\n                                    <ion-col size='8'>\r\n                                        <ion-label style=\"font-size: 9px;\">{{engineHoursStatus.status}}</ion-label>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                    <ion-row>\r\n                        <ion-col size='12'>\r\n                            <div id=\"engineHours\" *ngIf=\"Top5Enginechartdata\"\r\n                                style=\"position: relative; overflow: hidden; max-width: 800px; width: 280;height: 200px;\">\r\n                            </div>\r\n                            <ion-img src=\"assets/background_img/NoData.svg\" *ngIf=\"Top5EngineshowNodata\"\r\n                            style=\"height: 24.5vh;bottom: 0px;left: 120px;\"></ion-img>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-card-content>\r\n            </ion-card>\r\n\r\n            <!-- ********************* Vehicles Odometer Card    ************************** -->\r\n            <ion-row *ngIf='showDashbordChart.includes(\"Top 5 Odometer Vehicles\") == true'\r\n                style=\"margin-top: 7px; padding-top: 15px;\">\r\n                <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                    size=\"2\"></ion-col>\r\n                <ion-col class=\"vehicleStatusHeading\" size=\"8\">Top 5 Odometer Vehicles</ion-col>\r\n                <ion-col style=\"border-top: 0.5px solid rgba(128, 128, 128, 0.5); padding:0px;align-self: center;\"\r\n                    size=\"2\"></ion-col>\r\n            </ion-row>\r\n            <ion-card *ngIf='showDashbordChart.includes(\"Top 5 Odometer Vehicles\") == true'>\r\n                <ion-card-content>\r\n                    <ion-img src=\"/assets/dashboard_background/top5odometervehicles.png\"\r\n                        style=\"height: 75%;position: absolute;bottom: 23px;left: 68px;\"></ion-img>\r\n                    <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n                        (ionChange)=\"vehicleOdometer($event)\">\r\n                        <ion-row>\r\n                            <ion-col size='4' *ngFor=\"let vehicleOdometerStatus of statusChanger\">\r\n                                <ion-row>\r\n                                    <ion-col size='3'>\r\n                                        <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                            id='{{vehicleOdometerStatus.status}}' checked [ngClass]=\"{'checkboxIos': isIosPlatform == true}\"\r\n                                            value=\"{{vehicleOdometerStatus.status}}\"></ion-radio>\r\n                                    </ion-col>\r\n                                    <ion-col size='8'>\r\n                                        <ion-label style=\"font-size: 9px;\">{{vehicleOdometerStatus.status}}</ion-label>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                    <ion-row>\r\n                        <ion-col size='12'>\r\n                            <div id=\"vehicleOdometer\" *ngIf=\"Top5odameterchartdata\"\r\n                                style=\"position: relative; overflow: hidden; max-width: 800px; width: 280;height: 200px;\">\r\n                            </div>\r\n                            <ion-img src=\"assets/background_img/NoData.svg\" *ngIf=\"Top5odametershowNodata\"\r\n                            style=\"height: 24.5vh;bottom: 0px;left: 120px;\"></ion-img>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <!-- ********************************* Desktop Web  View ****************************************************** -->\r\n    <ion-row>\r\n        <ion-col size=\"6\"\r\n            [ngClass]='{\"displayDesktop\": (myPlatform === \"desktop\" && showDashbordChart.includes(\"Current Vehicle Status\") == true), \"displayOthers\":(myPlatform !== \"desktop\" && showDashbordChart.includes(\"Current Vehicle Status\") == true)}'>\r\n            <ion-card class=\"card\">\r\n                <ion-card-header style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n                    Current Vehicle Status</ion-card-header>\r\n                <ion-card-content>\r\n                    <ion-row>\r\n                        <ion-col size=\"7\">\r\n                            <div id=\"totalVehicleStatusDesktop\"\r\n                                style=\"text-align: -webkit-center;position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                            </div>\r\n                        </ion-col>\r\n                        <ion-col size=\"4\">\r\n                            <div style=\"font-size: 11px;\">\r\n                                <ion-row *ngIf=\"loginData.includes('Running')\">\r\n                                    <ion-col size=\"2\">\r\n                                        <div class=\"circle\" style=\"border-color:#1eb15d;\"></div>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"7\">\r\n                                        RUNNING\r\n                                    </ion-col>\r\n                                    <ion-col size=\"3\">\r\n                                        {{vehicleCount.running}}\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row *ngIf=\"loginData.includes('Good')\">\r\n                                    <ion-col size=\"2\">\r\n                                        <div class=\"circle\" style=\"border-color:#1eb15d;\"></div>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"7\">\r\n                                        GOOD\r\n                                    </ion-col>\r\n                                    <ion-col size=\"3\">\r\n                                        {{vehicleCount.good}}\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row *ngIf=\"loginData.includes('DoorOpen')\">\r\n                                    <ion-col size=\"2\">\r\n                                        <div class=\"circle\" style=\"border-color:#FF851B;\"></div>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"7\">\r\n                                        DOOROPEN\r\n                                    </ion-col>\r\n                                    <ion-col size=\"3\">\r\n                                        {{vehicleCount.dooropen}}\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                               \r\n                                <ion-row *ngIf=\"loginData.includes('Stop')\">\r\n                                    <ion-col size=\"2\">\r\n                                        <div class=\"circle\" style=\"border-color:#FF0000;\"></div>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"7\">\r\n                                        STOP\r\n                                    </ion-col>\r\n                                    <ion-col size=\"3\">\r\n                                        {{vehicleCount.stop}}\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row *ngIf=\"loginData.includes('HighTemp')\">\r\n                                    <ion-col size=\"2\">\r\n                                        <div class=\"circle\" style=\"border-color:#FF0000;\"></div>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"7\">\r\n                                        HIGHTEMP\r\n                                    </ion-col>\r\n                                    <ion-col size=\"3\">\r\n                                        {{vehicleCount.hightemp}}\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row *ngIf=\"loginData.includes('Idle')\">\r\n                                    <ion-col size=\"2\">\r\n                                        <div class=\"circle\" style=\"border-color:#1f5baa;\"></div>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"7\">\r\n                                        IDLE\r\n                                    </ion-col>\r\n                                    <ion-col size=\"3\">\r\n                                        {{vehicleCount.idle}}\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                \r\n                                <ion-row *ngIf=\"loginData.includes('Geofence')\">\r\n                                    <ion-col size=\"2\">\r\n                                        <div class=\"circle\" style=\"border-color:#1f5baa;\"></div>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"7\">\r\n                                        GEOFENCE\r\n                                    </ion-col>\r\n                                    <ion-col size=\"3\">\r\n                                        {{vehicleCount.geofence}}\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row *ngIf=\"loginData.includes('PowerFail')\">\r\n                                    <ion-col size=\"2\">\r\n                                        <div class=\"circle\" style=\"border-color:#412525;\"></div>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"7\">\r\n                                        POWERFAIL\r\n                                    </ion-col>\r\n                                    <ion-col size=\"3\">\r\n                                        {{vehicleCount.powerfail}}\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row *ngIf=\"loginData.includes('No Transmission')\">\r\n                                    <ion-col size=\"2\">\r\n                                        <div class=\"circle\" style=\"border-color:#000000;\"></div>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"7\">\r\n                                        NOTRANSMIT\r\n                                    </ion-col>\r\n                                    <ion-col size=\"3\">\r\n                                        {{vehicleCount.noTransmit}}\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row *ngIf=\"loginData.includes('Overspeed')\">\r\n                                    <ion-col size=\"2\">\r\n                                        <div class=\"circle\" style=\"border-color:#FF851B;\"></div>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"7\">\r\n                                        OVERSPEED\r\n                                    </ion-col>\r\n                                    <ion-col size=\"3\">\r\n                                        {{vehicleCount.Overspeed}}\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row *ngIf=\"loginData.includes('Towed')\">\r\n                                    <ion-col size=\"2\">\r\n                                        <div class=\"circle\" style=\"border-color:#c200b8;\"></div>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"7\">\r\n                                        TOWED\r\n                                    </ion-col>\r\n                                    <ion-col size=\"3\">\r\n                                        {{vehicleCount.Towed}}\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row *ngIf=\"loginData.includes('Yet_to_transmit')\">\r\n                                    <ion-col size=\"2\">\r\n                                        <div class=\"circle\" style=\"border-color:#7d410f;\"></div>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"7\">\r\n                                        YET TO TRASMIT\r\n                                    </ion-col>\r\n                                    <ion-col size=\"3\">\r\n                                        {{vehicleCount.Yet_to_transmit}}\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row *ngIf=\"loginData.includes('Online')\">\r\n                                    <ion-col size=\"2\">\r\n                                        <div class=\"circle\" style=\"border-color:#00E1BC;\"></div>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"7\">\r\n                                        ONLINE\r\n                                    </ion-col>\r\n                                    <ion-col size=\"3\">\r\n                                        {{vehicleCount.Online}}\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </div>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\"\r\n            [ngClass]='{\"displayDesktop\": (myPlatform === \"desktop\" && showDashbordChart.includes(\"Current Vehicle Status\") == true), \"displayOthers\":(myPlatform !== \"desktop\" && showDashbordChart.includes(\"Current Vehicle Status\") == true)}'>\r\n            <ion-card class=\"card\" style=\"height: 100%;\">\r\n                <ion-card-header style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n\r\n                    Alert Count Summary\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                    <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n                        (ionChange)=\"alertsAndCounts($event)\">\r\n                        <ion-row>\r\n                            <ion-col size='4' *ngFor=\"let alertsAndCounts of summaryStatusChanger\">\r\n                                <ion-row>\r\n                                    <ion-col size='3'>\r\n                                        <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                            id='{{alertsAndCounts.status}}' checked value=\"{{alertsAndCounts.status}}\">\r\n                                        </ion-radio>\r\n                                    </ion-col>\r\n                                    <ion-col size='8' style=\"padding: 2px;\">\r\n                                        <ion-label style=\"font-size: 9px;\">{{alertsAndCounts.status}}</ion-label>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                    <ion-row>\r\n                        <ion-col size='12'>\r\n                            <div id=\"alertCountSummery\" *ngIf=\"alertChartdata\"\r\n                                style=\"position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                            </div>\r\n                            <ion-img src=\"assets/background_img/NoData.svg\" *ngIf=\"alertshowNodata\"\r\n                            style=\"height: 24.5vh;bottom: 0px;left: 120px;\"></ion-img>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-col>\r\n        \r\n    </ion-row>\r\n    <div *ngIf='myPlatform == \"desktop\"'>\r\n        <ion-row>\r\n\r\n            <ion-col size=\"6\" *ngIf='showDashbordChart.includes(\"Top 5 Power Fail\") == true'>\r\n                <ion-card class=\"card\">\r\n                    <ion-card-header\r\n                        style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n                        Top 5 Power Fail\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                        <ion-radio-group class=\"radio\" allow-empty-selection=\"false\" name=\"radio-group\"\r\n                            (ionChange)=\"noOfPowerFail($event)\">\r\n                            <ion-row>\r\n                                <ion-col size='4' *ngFor=\"let noOfPowerFail of statusChanger\">\r\n                                    <ion-row>\r\n                                        <ion-col size='3'>\r\n                                            <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                                id='{{noOfPowerFail.status}}' checked value=\"{{noOfPowerFail.status}}\">\r\n                                            </ion-radio>\r\n                                        </ion-col>\r\n                                        <ion-col size='8' style=\"padding: 2px;\">\r\n                                            <ion-label style=\"font-size: 9px;\">{{noOfPowerFail.status}}</ion-label>\r\n                                        </ion-col>\r\n                                    </ion-row>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                        </ion-radio-group>\r\n\r\n                        <ion-row>\r\n                            <ion-col size='12'>\r\n                                <div id=\"noOfPowerFail\"\r\n                                    style=\"position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                                </div>\r\n                            </ion-col>\r\n\r\n\r\n                        </ion-row>\r\n                    </ion-card-content>\r\n                </ion-card>\r\n\r\n            </ion-col>\r\n            <ion-col size=\"6\" *ngIf='showDashbordChart.includes(\"Top 5 Door Open\") == true'>\r\n                <ion-card class=\"card\">\r\n                    <ion-card-header\r\n                        style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n                        Top 5 Door Open\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                        <ion-radio-group class=\"radio\" allow-empty-selection=\"false\" name=\"radio-group\"\r\n                            (ionChange)=\"noOfDoorOpen($event)\">\r\n                            <ion-row>\r\n                                <ion-col size='4' *ngFor=\"let noOfDoorOpen of statusChanger\">\r\n                                    <ion-row>\r\n                                        <ion-col size='3'>\r\n                                            <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                                id='{{noOfDoorOpen.status}}' checked value=\"{{noOfDoorOpen.status}}\">\r\n                                            </ion-radio>\r\n                                        </ion-col>\r\n                                        <ion-col size='8' style=\"padding: 2px;\">\r\n                                            <ion-label style=\"font-size: 9px;\">{{noOfDoorOpen.status}}</ion-label>\r\n                                        </ion-col>\r\n                                    </ion-row>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                        </ion-radio-group>\r\n\r\n                        <ion-row>\r\n                            <ion-col size='12'>\r\n                                <div id=\"noOfDoorOpen\"\r\n                                    style=\"position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                                </div>\r\n                            </ion-col>\r\n\r\n\r\n                        </ion-row>\r\n                    </ion-card-content>\r\n                </ion-card>\r\n\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n\r\n            <ion-col size=\"4\" *ngIf='showDashbordChart.includes(\"Unused Vehicles Summary\") == true'>\r\n                <ion-card class=\"card\">\r\n                    <ion-card-header\r\n                        style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n                        Unused Vehicles Summary\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                        <ion-radio-group class=\"radio\" allow-empty-selection=\"false\" name=\"radio-group\"\r\n                            (ionChange)=\"unUsedVehicleStatus($event)\">\r\n                            <ion-row style=\"margin-left: 22%;\"> \r\n                                <ion-col size='4' *ngFor=\"let unUsedVehicleStatus of summaryStatus\">\r\n                                    <ion-row *ngIf='unUsedVehicleStatus.status != \"Current\"'>\r\n                                        <ion-col size='3'>\r\n                                            <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                                id='{{unUsedVehicleStatus.status}}' checked\r\n                                                value=\"{{unUsedVehicleStatus.status}}\"></ion-radio>\r\n                                        </ion-col>\r\n                                        <ion-col size='8' style=\"padding: 2px;\">\r\n                                            <ion-label style=\"font-size: 9px;\">{{unUsedVehicleStatus.status}}\r\n                                            </ion-label>\r\n                                        </ion-col>\r\n                                    </ion-row>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                        </ion-radio-group>\r\n\r\n                        <ion-row>\r\n                            <ion-col size='12'>\r\n                                <div id=\"unUsedVehicleStatus\"\r\n                                    style=\"position: relative; overflow: hidden; max-width: 800px; width: 300; height: 200;\">\r\n                                </div>\r\n                            </ion-col>\r\n\r\n\r\n                        </ion-row>\r\n                    </ion-card-content>\r\n                </ion-card>\r\n\r\n            </ion-col>\r\n            <ion-col size=\"4\" *ngIf='showDashbordChart.includes(\"Odometer Summary\") == true'>\r\n                <ion-card class=\"card\">\r\n                    <ion-card-header\r\n                        style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n                        Odometer Summary\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                        <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n                            (ionChange)=\"odometer($event)\">\r\n                            <ion-row style=\"margin-left: 22%;\">\r\n                                <ion-col size='4' *ngFor=\"let odometer of summaryStatus\">\r\n                                    <ion-row *ngIf='odometer.status != \"Current\"'>\r\n                                        <ion-col size='3'>\r\n                                            <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                                id='{{odometer.status}}' checked value=\"{{odometer.status}}\">\r\n                                            </ion-radio>\r\n                                        </ion-col>\r\n                                        <ion-col size='8' style=\"padding: 2px;\">\r\n                                            <ion-label style=\"font-size: 9px;\">{{odometer.status}}</ion-label>\r\n                                        </ion-col>\r\n                                    </ion-row>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                        </ion-radio-group>\r\n                        <ion-row>\r\n                            <ion-col size='12'>\r\n                                <div id=\"odometerSummery\" \r\n                                    style=\"position: relative; overflow: hidden; max-width: 800px; width: 400; height: 400;\">\r\n                                </div>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-card-content>\r\n                </ion-card>\r\n\r\n            </ion-col>\r\n            <ion-col size=\"4\" *ngIf='showDashbordChart.includes(\"Speedometer Summary\") == true'>\r\n                <ion-card class=\"card\">\r\n                    <ion-card-header\r\n                        style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n                        Speedometer Summary\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                        <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n                            (ionChange)=\"speedometer($event)\">\r\n                            <ion-row>\r\n                                <ion-col size='4' *ngFor=\"let speedometer of summaryStatusChanger\">\r\n                                    <ion-row *ngIf='speedometer.status == \"Yesterday\"'>\r\n                                        <ion-col size='3'>\r\n                                            <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                                id='{{speedometer.status}}' checked value=\"{{speedometer.status}}\">\r\n                                            </ion-radio>\r\n                                        </ion-col>\r\n                                        <ion-col size='8' style=\"padding: 2px;\">\r\n                                            <ion-label style=\"font-size: 9px;\">{{speedometer.status}}</ion-label>\r\n                                        </ion-col>\r\n                                    </ion-row>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                        </ion-radio-group>\r\n                        <ion-row>\r\n                            <ion-col size='12'>\r\n                                <div id=\"speedometerSummery\"></div>\r\n                            </ion-col>\r\n                        </ion-row>\r\n\r\n                    </ion-card-content>\r\n                </ion-card>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col size=\"5\" *ngIf='showDashbordChart.includes(\"Distribution Summary\") == true'>\r\n                <ion-card class=\"card\" style=\"height: 515px;\">\r\n                    <ion-card-header\r\n                        style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n                        Distribution Summary\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                        <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n                            (ionChange)=\"totalHrsDistributionSummary($event)\">\r\n                            <ion-row>\r\n                                <ion-col size='4' *ngFor=\"let totalHrsDistribution of statusChanger\">\r\n                                    <ion-row>\r\n                                        <ion-col size='3'>\r\n                                            <ion-radio color='danger'\r\n                                                style=\"position: relative; overflow: hidden;width: 12px; height: 12px;\"\r\n                                                id='{{totalHrsDistribution.status}}' checked\r\n                                                value=\"{{totalHrsDistribution.status}}\"></ion-radio>\r\n                                        </ion-col>\r\n                                        <ion-col size='8' style=\"padding: 2px;\">\r\n                                            <ion-label style=\"font-size: 9px;\">{{totalHrsDistribution.status}}\r\n                                            </ion-label>\r\n                                        </ion-col>\r\n                                    </ion-row>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                        </ion-radio-group>\r\n                        <ion-row style=\"padding-top: 73px;\">\r\n                            <ion-col size='12'>\r\n\r\n                                <div id=\"totalHrsDistributionChart\" style=\" max-width: 800px; width: 300;\"></div>\r\n\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-card-content>\r\n                </ion-card>\r\n\r\n            </ion-col>\r\n\r\n\r\n\r\n            <ion-col size=\"7\" style=\"padding: 0px;\">\r\n                <ion-row>\r\n                    <ion-col size=\"6\" *ngIf='showDashbordChart.includes(\"Top 5 Overspeed Vehicles\") == true'>\r\n                        <ion-card class=\"card\">\r\n                            <ion-card-header\r\n                                style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n                                Top 5 Overspeed Vehicles\r\n                            </ion-card-header>\r\n                            <ion-img src=\"assets/dashboard_background/overspeedimg.png\"\r\n                                style=\"height: 75%;position: absolute;bottom: 12px;left: 78px;\"></ion-img>\r\n                            <ion-card-content>\r\n                                <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n                                    (ionChange)=\"overspeedStatus($event)\">\r\n                                    <ion-row>\r\n                                        <ion-col size='4' *ngFor=\"let overSpeedStatus of statusChanger\">\r\n                                            <ion-row>\r\n                                                <ion-col size='3'>\r\n                                                    <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                                        id='{{overSpeedStatus.status}}' checked\r\n                                                        value=\"{{overSpeedStatus.status}}\"></ion-radio>\r\n                                                </ion-col>\r\n                                                <ion-col size='8' style=\"padding: 2px;\">\r\n                                                    <ion-label style=\"font-size: 9px;\">{{overSpeedStatus.status}}\r\n                                                    </ion-label>\r\n                                                </ion-col>\r\n                                            </ion-row>\r\n                                        </ion-col>\r\n                                    </ion-row>\r\n                                </ion-radio-group>\r\n                                <ion-row>\r\n                                    <ion-col size='12'>\r\n                                        <div id=\"overspeedvehicles\" *ngIf=\"Overspeedchartdata\"\r\n                                            style=\"position: relative; overflow: hidden; max-width: 800px; width: 280;\">\r\n                                        </div>\r\n                                        <ion-img src=\"assets/background_img/NoData.svg\" *ngIf=\"OverspeedshowNodata\"\r\n                                        style=\"height: 24.5vh;bottom: 0px;left: 120px;\"></ion-img>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-card-content>\r\n                        </ion-card>\r\n                    </ion-col>\r\n                    <ion-col size=\"6\" *ngIf='showDashbordChart.includes(\"Top 5 Unused Assets\") == true'>\r\n                        <ion-card class=\"card\">\r\n                            <ion-card-header\r\n                                style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n                                Top 5 Unused Assets\r\n                            </ion-card-header>\r\n                            <ion-card-content>\r\n                                <ion-img src=\"assets/dashboard_background/unusedassert.png\"\r\n                                    style=\"height: 75%;position: absolute;bottom: 12px;left: 78px;\"></ion-img>\r\n                                <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n                                    (ionChange)=\"unUsedAssert($event)\">\r\n                                    <ion-row>\r\n                                        <ion-col size='4' *ngFor=\"let unUsedAssertStatus of statusChanger\">\r\n                                            <ion-row>\r\n                                                <ion-col size='3'>\r\n                                                    <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                                        id='{{unUsedAssertStatus.status}}' checked\r\n                                                        value=\"{{unUsedAssertStatus.status}}\"></ion-radio>\r\n                                                </ion-col>\r\n                                                <ion-col size='8' style=\"padding: 2px;\">\r\n                                                    <ion-label style=\"font-size: 9px;\">{{unUsedAssertStatus.status}}\r\n                                                    </ion-label>\r\n                                                </ion-col>\r\n                                            </ion-row>\r\n                                        </ion-col>\r\n                                    </ion-row>\r\n                                </ion-radio-group>\r\n                                <ion-row>\r\n                                    <ion-col size='12'>\r\n                                        <div id=\"unUsedAssert\" *ngIf=\"unUsedAssertchartdata\"\r\n                                            style=\"position: relative; overflow: hidden; max-width: 800px; width: 280;\">\r\n                                        </div>\r\n                                        <ion-img src=\"assets/background_img/NoData.svg\" *ngIf=\"unUsedAssertshowNodata\"\r\n                                        style=\"height: 24.5vh;bottom: 0px;left: 120px;\"></ion-img>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-card-content>\r\n                        </ion-card>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"6\" *ngIf='showDashbordChart.includes(\"Top 5 Engine Hours\") == true'>\r\n                        <ion-card class=\"card\">\r\n                            <ion-card-header\r\n                                style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n                                Top 5 Engine Hours\r\n                            </ion-card-header>\r\n                            <ion-card-content>\r\n                                <ion-img src=\"assets/dashboard_background/enginehrs.png\"\r\n                                    style=\"height: 75%;position: absolute;bottom: 12px;left: 78px;\"></ion-img>\r\n                                <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n                                    (ionChange)=\"engineHours($event)\">\r\n                                    <ion-row>\r\n                                        <ion-col size='4' *ngFor=\"let engineHoursStatus of statusChanger\">\r\n                                            <ion-row>\r\n                                                <ion-col size='3'>\r\n                                                    <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                                        id='{{engineHoursStatus.status}}' checked\r\n                                                        value=\"{{engineHoursStatus.status}}\"></ion-radio>\r\n                                                </ion-col>\r\n                                                <ion-col size='8' style=\"padding: 2px;\">\r\n                                                    <ion-label style=\"font-size: 9px;\">{{engineHoursStatus.status}}\r\n                                                    </ion-label>\r\n                                                </ion-col>\r\n                                            </ion-row>\r\n                                        </ion-col>\r\n                                    </ion-row>\r\n                                </ion-radio-group>\r\n                                <ion-row>\r\n                                    <ion-col size='12'>\r\n                                        <div id=\"engineHours\" *ngIf=\"Top5Enginechartdata\"\r\n                                            style=\"position: relative; overflow: hidden; max-width: 800px; width: 280;\">\r\n                                        </div>\r\n                                        <ion-img src=\"assets/background_img/NoData.svg\" *ngIf=\"Top5EngineshowNodata\"\r\n                                        style=\"height: 24.5vh;bottom: 0px;left: 120px;\"></ion-img>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-card-content>\r\n                        </ion-card>\r\n                    </ion-col>\r\n                    <ion-col size=\"6\" *ngIf='showDashbordChart.includes(\"Top 5 Odometer Vehicles\") == true'>\r\n                        <ion-card class=\"card\">\r\n                            <ion-card-header\r\n                                style=\"text-align: center;background-color: #6C2A84;font-weight: bold;color: white;\">\r\n                                Top 5 Odometer Vehicles\r\n                            </ion-card-header>\r\n                            <ion-card-content>\r\n                                <ion-img src=\"assets/dashboard_background/top5odometervehicles.png\"\r\n                                    style=\"height: 75%;position: absolute;bottom: 12px;left: 78px;\"></ion-img>\r\n                                <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\"\r\n                                    (ionChange)=\"vehicleOdometer($event)\">\r\n                                    <ion-row>\r\n                                        <ion-col size='4' *ngFor=\"let vehicleOdometerStatus of statusChanger\">\r\n                                            <ion-row>\r\n                                                <ion-col size='3'>\r\n                                                    <ion-radio color='danger' style=\"width: 12px; height: 12px;\"\r\n                                                        id='{{vehicleOdometerStatus.status}}' checked\r\n                                                        value=\"{{vehicleOdometerStatus.status}}\"></ion-radio>\r\n                                                </ion-col>\r\n                                                <ion-col size='8' style=\"padding: 2px;\">\r\n                                                    <ion-label style=\"font-size: 9px;\">{{vehicleOdometerStatus.status}}\r\n                                                    </ion-label>\r\n                                                </ion-col>\r\n                                            </ion-row>\r\n                                        </ion-col>\r\n                                    </ion-row>\r\n                                </ion-radio-group>\r\n                                <ion-row>\r\n                                    <ion-col size='12'>\r\n                                        <div id=\"vehicleOdometer\" *ngIf=\"Top5odameterchartdata\"\r\n                                            style=\"position: relative; overflow: hidden; max-width: 800px; width: 280;\">\r\n                                        </div>\r\n                                        <ion-img src=\"assets/background_img/NoData.svg\" *ngIf=\"Top5odametershowNodata\"\r\n                                        style=\"height: 24.5vh;bottom: 0px;left: 120px;\"></ion-img>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-card-content>\r\n                        </ion-card>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-col>\r\n        </ion-row>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dealer-intro-slide/dealer-intro-slide.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dealer-intro-slide/dealer-intro-slide.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen class=\"ion-padding\" scroll-y=\"false\">\r\n  <ion-slides>\r\n\r\n    <ion-slide>\r\n      <div class=\"slide\">\r\n        <img  style=\"height:100%; width: 100%;\" [src]=\"logo\"/>\r\n        <h2>Welcome</h2>\r\n        <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.</p>\r\n        <h2>Get Into App!</h2>\r\n        <ion-button (click)=\"dismiss()\" fill=\"clear\">Move In <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></ion-button>\r\n     \r\n      </div>\r\n    </ion-slide>\r\n<!-- \r\n    <ion-slide>\r\n      <img src=\"./slide-2.png\"/>\r\n      <h2>What is Ionic?</h2>\r\n      <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <img src=\"./slide-3.png\"/>\r\n      <h2>What is Ionic Appflow?</h2>\r\n      <p><b>Ionic Appflow</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <img src=\"./slide-4.png\"/>\r\n      <h2>Get Into App!</h2>\r\n      <ion-button (click)=\"dismiss()\" fill=\"clear\">Move In <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></ion-button>\r\n    </ion-slide> -->\r\n\r\n  </ion-slides>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/dashboard/add-imei-company/add-imei-company.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/dashboard/add-imei-company/add-imei-company.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\r\n  <ion-toolbar mode=\"md\" class=\"appHeader\" >\r\n    <ion-grid style='padding: 0px;' class='background' >\r\n      <ion-row style='padding: 0px;' *ngIf = '!searchEnable'>\r\n        <ion-col size=\"1\" style='align-self: center;'>\r\n          <ion-icon (click)= 'getBack()' name=\"arrow-round-back\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"9\" style='padding: 0px;'>\r\n          <ion-title>Assign Imei</ion-title>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style='padding: 0px;align-self: center;'>\r\n          <ion-icon style='font-size: 25px;' ios=\"md-search\" (click) ='searchStatus()' md=\"md-search\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-row style='padding: 0px;' *ngIf = 'searchEnable' >\r\n      <ion-col style ='    align-self: center; text-align: center;' size='1'>\r\n        <ion-icon style='font-size: 25px;' ios=\"md-search\" (click) ='searchStatus()' ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col size='11'>\r\n        <ion-searchbar style=\"padding: 0px;\" class='buttonData' mode='ios' cancelButtonText=\"Custom Cancel\" [(ngModel)]=\"searchInput\"  animated></ion-searchbar>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n  <ion-virtual-scroll [items]=\"showList | searchDealer:searchInput\" approxItemHeight=\"320px\">\r\n    <ion-list *virtualItem=\"let showList\" [id]='showList.imei' style= 'padding:0px;' (click) = 'assignImeiToCompany(showList)'>\r\n      <ion-item-sliding>\r\n        <ion-item>\r\n          <ion-grid >\r\n            <ion-row style= 'padding:0px;'>\r\n              <ion-col size='2' style= 'text-align: center;'><ion-icon name=\"people\"></ion-icon></ion-col>\r\n              <ion-col size='9'>{{showList.companyName}}</ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n  </ion-virtual-scroll>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/dashboard/company-details/company-details.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/dashboard/company-details/company-details.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar\n    [ngClass]=\"{\n      dealerHeader: appName != 'Armoron',\n      'header-background-color': appName == 'Armoron'\n    }\"\n    mode=\"md\"\n  >\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Vehicle Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row style=\"padding: 10px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        [theme]=\"'material'\"\n        [width]=\"'99.5%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [pagesizeoptions]=\"page\"\n        [enablebrowserselection]=\"true\"\n        [columns]=\"columns\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/dashboard/create-company/create-company.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/dashboard/create-company/create-company.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar\n    [ngClass]=\"{\n      dealerHeader: appName != 'Armoron',\n      'header-background-color': appName == 'Armoron'\n    }\"\n    mode=\"md\"\n  >\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n\n    <!-- <ion-title *ngIf=\"value2 == 'add'\">Add Company</ion-title>\n    <ion-title *ngIf=\"value2 == 'new'\">Edit Company</ion-title> -->\n\n    <ion-title *ngIf=\"value2 == 'add'\">Add Company</ion-title>\n    <ion-title *ngIf=\"value2 == 'edit'\">Edit Company</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row *ngIf=\"appName != 'Armoron'\">\n      <ion-col size=\"12\" class=\"form-field\">\n        <form class=\"formPadding\" [formGroup]=\"checkno\">\n          <ion-row *ngIf=\"value2 == 'add'\" style=\"justify-content: right\">\n            <ion-col size=\"12\" size-lg=\"6\">\n              <ion-input\n                class=\"heading\"\n                [ngClass]=\"{\n                  armoron: appName == 'Armoron',\n                  heading: appName != 'Armoron'\n                }\"\n                type=\"number\"\n                formControlName=\"phoneno\"\n                placeholder=\"Enter Mobile No\"\n              ></ion-input>\n            </ion-col>\n            <ion-col size=\"12\" size-lg=\"6\" style=\"text-align: center\">\n              <ion-button\n                (click)=\"check()\"\n                [disabled]=\"!checkno.valid\"\n                id=\"submitbtn\"\n              >\n                Check\n              </ion-button>\n              <ion-button\n                (click)=\"clear()\"\n                [disabled]=\"!checkno.valid\"\n                id=\"submitbtn\"\n              >\n                Clear\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n        <form class=\"formPadding\" [formGroup]=\"addCompany\">\n          <ion-row>\n            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\n              <ion-input\n                class=\"heading\"\n                [ngClass]=\"{\n                  armoron: appName == 'Armoron',\n                  heading: appName != 'Armoron'\n                }\"\n                type=\"text\"\n                formControlName=\"companyName\"\n                placeholder=\"Company name\"\n                [disabled]=\"value2 == 'add' ? 'false' : 'true'\"\n              ></ion-input>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\n              <ion-input\n                class=\"heading\"\n                [ngClass]=\"{\n                  armoron: appName == 'Armoron',\n                  heading: appName != 'Armoron'\n                }\"\n                type=\"text\"\n                formControlName=\"loginId\"\n                placeholder=\"Login id\"\n                [disabled]=\"value2 == 'add' ? 'false' : 'true'\"\n              ></ion-input>\n            </ion-col>\n            <!------->\n            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\n              <ion-input\n                class=\"heading\"\n                [ngClass]=\"{\n                  armoron: appName == 'Armoron',\n                  heading: appName != 'Armoron'\n                }\"\n                type=\"text\"\n                formControlName=\"password\"\n                placeholder=\"Password\"\n                [disabled]=\"value2 == 'add' ? 'false' : 'true'\"\n              ></ion-input>\n            </ion-col>\n            <!------->\n            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\n              <ion-input\n                class=\"heading\"\n                [ngClass]=\"{\n                  armoron: appName == 'Armoron',\n                  heading: appName != 'Armoron'\n                }\"\n                type=\"text\"\n                formControlName=\"email\"\n                placeholder=\"Email id\"\n              ></ion-input>\n            </ion-col>\n            <!------->\n            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\n              <ion-input\n                class=\"heading\"\n                [ngClass]=\"{\n                  armoron: appName == 'Armoron',\n                  heading: appName != 'Armoron'\n                }\"\n                type=\"number\"\n                formControlName=\"contactNo\"\n                placeholder=\"Contact number\"\n              ></ion-input>\n            </ion-col>\n            <!------->\n            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\n              <ion-input\n                class=\"heading\"\n                [ngClass]=\"{\n                  armoron: appName == 'Armoron',\n                  heading: appName != 'Armoron'\n                }\"\n                type=\"text\"\n                formControlName=\"address\"\n                placeholder=\"Address\"\n              ></ion-input>\n            </ion-col>\n            <!------->\n            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" size-md=\"12\">\n              <ion-input\n                class=\"heading\"\n                [ngClass]=\"{\n                  armoron: appName == 'Armoron',\n                  heading: appName != 'Armoron'\n                }\"\n                type=\"text\"\n                formControlName=\"city\"\n                placeholder=\"City\"\n              ></ion-input>\n            </ion-col>\n            <!------->\n            <ion-col\n              *ngIf=\"value2 == 'add'\"\n              size=\"12\"\n              size-sm=\"12\"\n              size-lg=\"6\"\n              size-md=\"12\"\n            >\n              <ion-select\n                class=\"heading\"\n                [ngClass]=\"{\n                  armoron: appName == 'Armoron',\n                  heading: appName != 'Armoron'\n                }\"\n                formControlName=\"country\"\n                placeHolder=\"Country\"\n              >\n                <ion-select-option\n                  *ngFor=\"let country of country\"\n                  [value]=\"country\"\n                >\n                  {{ country }}\n                </ion-select-option>\n              </ion-select>\n            </ion-col>\n\n            <ion-col\n              *ngIf=\"value2 == 'edit'\"\n              size=\"12\"\n              size-sm=\"12\"\n              size-lg=\"6\"\n              size-md=\"12\"\n            >\n              <ionic-selectable\n                class=\"input selectable-input\"\n                formControlName=\"country\"\n                placeholder=\"Select the Country Name\"\n                [items]=\"country\"\n                [canSearch]=\"true\"\n                [hasVirtualScroll]=\"true\"\n              >\n              </ionic-selectable>\n            </ion-col>\n          </ion-row>\n        </form>\n\n        <ion-col size=\"12\">\n          <ion-row>\n            <ion-col\n              *ngIf=\"value2 == 'add'\"\n              size=\"12\"\n              style=\"text-align: center\"\n            >\n              <ion-button\n                (click)=\"onadd()\"\n                [disabled]=\"!addCompany.valid\"\n                id=\"submitbtn\"\n              >\n                Add\n              </ion-button>\n            </ion-col>\n\n            <ion-col\n              *ngIf=\"value2 == 'edit'\"\n              size=\"12\"\n              style=\"text-align: center\"\n            >\n              <ion-button\n                (click)=\"onedit()\"\n                [disabled]=\"!addCompany.valid\"\n                id=\"submitbtn\"\n              >\n                Edit\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"appName == 'Armoron'\">\n      <form style=\"width: 100%\" [formGroup]=\"addCompany\">\n        <!-- <ion-list> -->\n        <!-- <ion-item>\n          <ion-label position=\"fixed\">First_name:</ion-label>\n          <ion-input formControlName=\"firstName\" type=\"text\" placeholder=\"First name\">\n          </ion-input>\n        </ion-item> -->\n        <!-- <ion-item>\n          <ion-label position=\"fixed\">Last_name:</ion-label>\n          <ion-input formControlName=\"lastname\" type=\"text\" placeholder=\"Last_name\">\n          </ion-input>\n        </ion-item> -->\n        <!-- <ion-item>\n          <ion-label position=\"fixed\">DOB:</ion-label>\n          <ion-input formControlName=\"date\" type=\"date\">\n          </ion-input>\n        </ion-item> -->\n        <!-- <ion-item>\n          <ion-label position=\"fixed\">Mobile:</ion-label>\n        \n          </ion-input>\n        </ion-item> -->\n        <!-- <ion-item>\n          <ion-label position=\"fixed\">Mobile:</ion-label>\n          <ion-input type=\"text\" formControlName=\"email\" placeholder=\"Email id\">\n          </ion-input>\n        </ion-item> -->\n        <!-- <ion-item>\n          <ion-label>Gender</ion-label>\n          <ion-select formControlName=\"gender\">\n            <ion-select-option value=\"male\">Male</ion-select-option>\n            <ion-select-option value=\"female\">Female</ion-select-option>\n          </ion-select>\n        </ion-item> -->\n        <!-- <ion-item>\n          <ion-label>Address</ion-label>\n          <ion-textarea formControlName=\"address\" type=\"text\" placeholder=\"Address\"></ion-textarea>\n        </ion-item> -->\n        <!-- <ion-item>\n          <ion-label>Country</ion-label>\n          <ion-select formControlName=\"country\" placeHolder=\"Country\">\n            <ion-select-option *ngFor=\"let country of country\" [value]=\"country\">\n              {{country}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item> -->\n        <!-- </ion-list> -->\n        <ion-card>\n          <ion-item>\n            <ion-label style=\"color: #b1b1b1\" position=\"floating\"\n              >First name</ion-label\n            >\n            <ion-input type=\"text\" formControlName=\"firstName\"></ion-input>\n          </ion-item>\n        </ion-card>\n\n        <ion-card>\n          <ion-item>\n            <ion-label style=\"color: #b1b1b1\" position=\"floating\"\n              >Last name</ion-label\n            >\n            <ion-input type=\"text\" formControlName=\"lastname\"></ion-input>\n          </ion-item>\n        </ion-card>\n\n        <ion-card>\n          <ion-item>\n            <ion-label style=\"color: #b1b1b1\" position=\"stacked\"\n              >Date of birth</ion-label\n            >\n            <ion-input type=\"date\" formControlName=\"date\"></ion-input>\n          </ion-item>\n        </ion-card>\n        <ion-card>\n          <ion-item>\n            <ion-label style=\"color: #b1b1b1\" position=\"floating\"\n              >Mobile</ion-label\n            >\n            <ion-input\n              formControlName=\"contactNo\"\n              type=\"text\"\n              readonly\n            ></ion-input>\n          </ion-item>\n        </ion-card>\n\n        <ion-card>\n          <ion-item>\n            <ion-label style=\"color: #b1b1b1\" position=\"floating\"\n              >Email id</ion-label\n            >\n            <ion-input\n              type=\"text\"\n              formControlName=\"email\"\n              placeholder=\"Email id\"\n            ></ion-input>\n          </ion-item>\n        </ion-card>\n\n        <ion-card>\n          <ion-item>\n            <ion-label style=\"color: #b1b1b1\" position=\"floating\"\n              >Gender</ion-label\n            >\n            <ion-select formControlName=\"gender\">\n              <ion-select-option value=\"male\">Male</ion-select-option>\n              <ion-select-option value=\"female\">Female</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-card>\n\n        <ion-card>\n          <ion-item>\n            <ion-label style=\"color: #b1b1b1\" position=\"floating\"\n              >Address</ion-label\n            >\n            <ion-textarea\n              formControlName=\"address\"\n              type=\"text\"\n              placeholder=\"Address\"\n            ></ion-textarea>\n          </ion-item>\n        </ion-card>\n\n        <ion-card>\n          <ion-item>\n            <ion-label style=\"color: #b1b1b1\" position=\"floating\"\n              >City</ion-label\n            >\n            <ion-input\n              type=\"text\"\n              formControlName=\"city\"\n              placeholder=\"City\"\n            ></ion-input>\n          </ion-item>\n        </ion-card>\n        <ion-card>\n          <ion-item>\n            <ion-label style=\"color: #b1b1b1\" position=\"floating\"\n              >Country</ion-label\n            >\n            <ion-select formControlName=\"country\" placeHolder=\"Country\">\n              <ion-select-option\n                *ngFor=\"let country of country\"\n                [value]=\"country\"\n              >\n                {{ country }}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-card>\n\n        <ion-row class=\"signin\">\n          <ion-col>\n            <ion-button\n              (click)=\"onSubmit()\"\n              [ngClass]=\"{\n                appBackground: appName != 'Armoron',\n                'header-background-color': appName == 'Armoron'\n              }\"\n              shape=\"full\"\n              expand=\"block\"\n              >Submit</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/dashboard/dashboard.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/dashboard/dashboard.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar\r\n    [ngClass]=\"{'dealerHeader' : appName != 'Armoron' , 'header-background-color': appName == 'Armoron'}\"\r\n    mode=\"md\"\r\n  >\r\n    <ion-buttons *ngIf=\"appName != 'Armoron'\" slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Company</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col class=\"form-field\" style=\"align-self: center; padding: 10px\">\r\n      <ion-button\r\n        class=\"submitBtn\"\r\n        (click)=\"addModel('add')\"\r\n        shape=\"round\"\r\n        size=\"small\"\r\n      >\r\n        Add\r\n        <ion-icon name=\"add-circle\" class=\"toolbar-icon\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button\r\n        class=\"submitBtn\"\r\n        (click)=\"editModel('edit')\"\r\n        shape=\"round\"\r\n        size=\"small\"\r\n      >\r\n        Edit\r\n        <ion-icon name=\"add-circle\" class=\"toolbar-icon\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row style=\"padding: 5px\">\r\n    <ion-col size=\"12\">\r\n      <jqxGrid\r\n        #myGrid\r\n        (onRowclick)=\"myGridOnRowSelect($event)\"\r\n        [theme]=\"'material'\"\r\n        [width]=\"'99.5%'\"\r\n        [autoheight]=\"true\"\r\n        [source]=\"dataAdapter\"\r\n        [pagesizeoptions]=\"page\"\r\n        [enablebrowserselection]=\"true\"\r\n        [sortable]=\"true\"\r\n        [filterable]=\"true\"\r\n        [columns]=\"columns\"\r\n        [columnsresize]=\"true\"\r\n        [enabletooltips]=\"true\"\r\n        [pageable]=\"true\"\r\n        [showfilterrow]=\"true\"\r\n        style=\"\r\n          font-size: 16px;\r\n          text-align: center !important;\r\n          margin: auto;\r\n          cursor: pointer;\r\n        \"\r\n      >\r\n      </jqxGrid>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dealer_intro_slide_dealer_intro_slide_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dealer-intro-slide/dealer-intro-slide.component */ "./src/app/dashboard/dealer-intro-slide/dealer-intro-slide.component.ts");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");









const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_8__["DashboardPage"]
    }
];
let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_5__["NgCircleProgressModule"].forRoot({
                // set defaults here
                titleFontWeight: "700",
                radius: 50,
                space: -6,
                outerStrokeWidth: 6,
                innerStrokeWidth: 6,
                outerStrokeColor: "#c1c1d2",
                innerStrokeColor: "#c3c3d4",
                animationDuration: 600,
                animation: true,
                showUnits: false,
                showSubtitle: false,
                showBackground: false,
            }),
        ],
        entryComponents: [
            _dealer_intro_slide_dealer_intro_slide_component__WEBPACK_IMPORTED_MODULE_7__["DealerIntroSlideComponent"]
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_8__["DashboardPage"], _dealer_intro_slide_dealer_intro_slide_component__WEBPACK_IMPORTED_MODULE_7__["DealerIntroSlideComponent"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-header {\n  background-color: #c1c1d2;\n  padding: 4px 0px;\n  font-size: 12px;\n}\n\nion-card-title {\n  color: white;\n  font-size: 100%;\n  font-weight: 700;\n}\n\nion-title {\n  padding: 0px 5%;\n}\n\n.vehStates::first-letter {\n  text-transform: capitalize;\n}\n\nion-card {\n  border-radius: 10px;\n  margin: 10px 16px;\n}\n\nion-card-content {\n  padding: 0px 16px;\n}\n\n.semiCircle {\n  background: #32384b;\n  width: 100%;\n  height: 50px;\n  border-radius: 50%/100%;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.alertsStyle {\n  color: white;\n  font-size: 20px;\n  display: grid;\n}\n\n.header-md:after {\n  left: 0;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: none;\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.statusBar {\n  padding: 2px;\n  border-radius: 5px;\n  font-weight: bold;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 15px;\n  color: white;\n  padding-top: 5px;\n  border-radius: 5px;\n  font-weight: bold;\n}\n\n.vehicleStatusHeading {\n  background-color: #e51e43;\n  color: white;\n  width: 60%;\n  text-align: center;\n  padding: 2px;\n  font-size: 15px;\n  font-weight: bold;\n  border-radius: 100px;\n}\n\n.circle {\n  background-color: #FFF;\n  border: 3px solid;\n  border-radius: 18px;\n  box-shadow: 0 0 2px #888;\n  height: 15px;\n  width: 15px;\n}\n\n.card {\n  margin: 0px;\n  padding: 0px;\n}\n\n.displayDesktop {\n  display: block;\n}\n\n.displayOthers {\n  display: none;\n}\n\n.displayLine {\n  border-top: 0.5px solid rgba(128, 128, 128, 0.5);\n  padding: 0px;\n  align-self: center;\n}\n\n.checkboxIos {\n  background-color: #e4e4e4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxlQUFBO0FDQUo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FESUE7RUFDSSwwQkFBQTtBQ0RKOztBRElBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7QUNESjs7QURJQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElBO0VBQ0ksT0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUFpQixZQUFBO0VBQ2pCLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBRElBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDREo7O0FER0U7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENFO0VBRUUsY0FBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtBQ0VKOztBRENBO0VBQ0ksZ0RBQUE7RUFDQyxZQUFBO0VBQVksa0JBQUE7QUNHakI7O0FEQUE7RUFFUSx5QkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFkMjtcclxuICAgIHBhZGRpbmc6IDRweCAwcHg7XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAwcHggNSU7XHJcbn1cclxuXHJcbi52ZWhTdGF0ZXM6OmZpcnN0LWxldHRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMTBweCAxNnB4O1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDBweCAxNnB4O1xyXG59XHJcblxyXG4uc2VtaUNpcmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzIzODRiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgLyAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uYWxlcnRzU3R5bGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuLmhlYWRlci1tZDphZnRlcntcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC01cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAgdG9wIC0ycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuXHJcbi5zdGF0dXNCYXJ7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4OyBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4udmVoaWNsZVN0YXR1c0hlYWRpbmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUxZTQzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgfSBcclxuICAuY2lyY2xlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4ICM4ODg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICB9XHJcbi5jYXJke1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuICAuZGlzcGxheURlc2t0b3B7XHJcblxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmRpc3BsYXlPdGhlcnN7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZGlzcGxheUxpbmV7XHJcbiAgICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNSk7XHJcbiAgICAgcGFkZGluZzowcHg7YWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uY2hlY2tib3hJb3N7XHJcbiAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xyXG4gICAgXHJcbiAgICB9IiwiaW9uLWNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFkMjtcbiAgcGFkZGluZzogNHB4IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5pb24tdGl0bGUge1xuICBwYWRkaW5nOiAwcHggNSU7XG59XG5cbi52ZWhTdGF0ZXM6OmZpcnN0LWxldHRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAxNnB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4IDE2cHg7XG59XG5cbi5zZW1pQ2lyY2xlIHtcbiAgYmFja2dyb3VuZDogIzMyMzg0YjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlLzEwMCU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4uYWxlcnRzU3R5bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmhlYWRlci1tZDphZnRlciB7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAwIHRvcCAtMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4uc3RhdHVzQmFyIHtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi52ZWhpY2xlU3RhdHVzSGVhZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTFlNDM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDYwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG4uY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm9yZGVyOiAzcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggIzg4ODtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uZGlzcGxheURlc2t0b3Age1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRpc3BsYXlPdGhlcnMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZGlzcGxheUxpbmUge1xuICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNSk7XG4gIHBhZGRpbmc6IDBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uY2hlY2tib3hJb3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
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
/* harmony import */ var _dealer_intro_slide_dealer_intro_slide_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dealer-intro-slide/dealer-intro-slide.component */ "./src/app/dashboard/dealer-intro-slide/dealer-intro-slide.component.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");





















let DashboardPage = class DashboardPage {
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
        this.summaryStatus = [{ status: 'Yesterday' }, { status: "Last 7 Days" }];
        this.vehicleCount = {};
        this.alertCount = 1;
        this.exitPopup = false;
        this.app = {};
        this.donutAndBar = {
            vehicleSummaries: 200,
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
        this.alertshowNodata = false;
        this.alertChartdata = true;
        this.OverspeedshowNodata = false;
        this.Overspeedchartdata = true;
        this.unUsedAssertshowNodata = false;
        this.unUsedAssertchartdata = true;
        this.Top5EngineshowNodata = false;
        this.Top5Enginechartdata = true;
        this.Top5odametershowNodata = false;
        this.Top5odameterchartdata = true;
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
            for (const [key, value] of Object.entries(json.liveDatas)) {
                data.push(value["status"]);
                value["odometer"] = parseInt(value["odometer"]) / 1000;
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
    openDelarIntroModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (localStorage.delarIntro != "true") {
                const modal = yield this.modalController.create({
                    component: _dealer_intro_slide_dealer_intro_slide_component__WEBPACK_IMPORTED_MODULE_17__["DealerIntroSlideComponent"],
                    cssClass: 'custom-modalad'
                });
                return yield modal.present();
            }
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
                            }, 30000);
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
        // this.ngOnInit()
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
            if (overSpeedVehicleValue.length == 0 || Object.keys(res).length == 0) {
                this.OverspeedshowNodata = true;
                this.Overspeedchartdata = false;
            }
            else {
                this.OverspeedshowNodata = false;
                this.Overspeedchartdata = true;
                this.vehicleStatus("overspeedvehicles", overSpeedVehicleName, overSpeedVehicleValue, '#f58220', hoursOrDays);
            }
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
            if (unUsedAssertValue.length == 0 || Object.keys(res).length == 0) {
                this.unUsedAssertshowNodata = true;
                this.unUsedAssertchartdata = false;
            }
            else {
                this.unUsedAssertshowNodata = false;
                this.unUsedAssertchartdata = true;
                this.vehicleStatus("unUsedAssert", unUsedAssertName, unUsedAssertValue, '#8e4eeb', hoursOrDays);
            }
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
            if (engineHoursValue.length == 0 || Object.keys(res).length == 0) {
                this.Top5EngineshowNodata = true;
                this.Top5Enginechartdata = false;
            }
            else {
                this.Top5EngineshowNodata = false;
                this.Top5Enginechartdata = true;
                this.vehicleStatus("engineHours", engineHoursName, engineHoursValue, '#1198aa', hoursOrDays);
            }
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
            if (vehicleOdometerValue.length == 0 || Object.keys(res).length == 0) {
                this.Top5odametershowNodata = true;
                this.Top5odameterchartdata = false;
            }
            else {
                this.Top5odametershowNodata = false;
                this.Top5odameterchartdata = true;
                this.vehicleStatus("vehicleOdometer", vehicleOdometerName, vehicleOdometerValue, '#27aae2', km);
            }
        });
    }
    vehicleSummaries(statusType, categories, data, color) {
        let i = 0;
        let xText = "";
        let yText = "";
        let enabled = false;
        let value;
        let commonService = this.commonService;
        let router = this.router;
        if (statusType == "odometerSummery") {
            xText = "Odometer (km)";
            yText = "Vehicles";
            value = this.odometerData;
        }
        else if (statusType == "speedometerSummery") {
            xText = "Speedometer (km/h)";
            yText = "Vehicles";
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
                            var data = event.point.options.name;
                            if (data != undefined) {
                                data = data.split(",");
                                const routingData = {
                                    type: "Vin",
                                    count: event.point.options.y,
                                    data: data
                                };
                                if (routingData.count > 0) {
                                    localStorage.setItem('vinGridViewData', JSON.stringify(routingData));
                                    localStorage.setItem('statusChanger', "Vin");
                                    router.navigateByUrl("tabs/gridview/Vin");
                                    // //console.log(routingData);
                                }
                                else {
                                    commonService.presentToast('You don\'t have any vehicles.');
                                }
                            }
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
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].web + '/alert/alertcounts?userId=' + localStorage.getItem('userName') + '&fromDate=' + reqJson.fromDate + '&toDate=' + reqJson.toDate;
        this.ajaxService.ajaxGet(url)
            .subscribe(res => {
            if (Object.keys(res).length == 0) {
                this.alertshowNodata = true;
                this.alertChartdata = false;
            }
            else {
                this.alertshowNodata = false;
                this.alertChartdata = true;
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
                this.vehicleSummaries('alertCountSummery', alertsType, alertsCount, "#f7b921");
            }
        });
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
            // for(let i=0; i < Object.keys(odometer).length ;i++){
            //   speedRatio.push([(Object.values(odometer)[i].vehicle).toString() ,parseInt(Object.values(odometer)[i].count)]);
            //   speedVehicle.push((Object.keys(odometer)[i]).toUpperCase());
            // }
            this.odometerData = Object.values(odometer);
            speedVehicle = ['0-40', '40-80', '80-120', '120-160', '160-200', '200-240', '240-280', '280-320'];
            // speedRatio = [['', 0],['', 0] ,['', 0], ['', 0],['art745,art404', 2]]
            this.vehicleSummaries("odometerSummery", speedVehicle, speedRatio, "#27aae2");
        });
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
DashboardPage.ctorParameters = () => [
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_9__["FirebaseX"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__["Device"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_19__["AuthenticationService"] },
    { type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_11__["UniqueDeviceID"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_18__["StatusBar"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_15__["AppVersion"] },
    { type: _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_16__["Market"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"] }
];
DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dashboard",
        template: __webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.page.html"),
        styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/dashboard/dashboard.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _services_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_9__["FirebaseX"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__["Device"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_19__["AuthenticationService"],
        _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_11__["UniqueDeviceID"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_18__["StatusBar"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
        _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_15__["AppVersion"],
        _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_16__["Market"],
        _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"]])
], DashboardPage);



/***/ }),

/***/ "./src/app/dashboard/dealer-intro-slide/dealer-intro-slide.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/dealer-intro-slide/dealer-intro-slide.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slides {\n  height: 100%;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2RlYWxlci1pbnRyby1zbGlkZS9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGVhbGVyLWludHJvLXNsaWRlXFxkZWFsZXItaW50cm8tc2xpZGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kZWFsZXItaW50cm8tc2xpZGUvZGVhbGVyLWludHJvLXNsaWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBQ0NKOztBREVFO0VBQ0UscUNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kZWFsZXItaW50cm8tc2xpZGUvZGVhbGVyLWludHJvLXNsaWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuc3dpcGVyLXNsaWRlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLnN3aXBlci1zbGlkZSBoMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjhyZW07XHJcbiAgfVxyXG5cclxuICAuc3dpcGVyLXNsaWRlIGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MCU7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogNjBweCAwIDQwcHg7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcblxyXG4gIGIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgcGFkZGluZzogMCA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2MDY0NmIpO1xyXG4gIH1cclxuXHJcbiAgcCBiIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XHJcbiAgfSIsImlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN3aXBlci1zbGlkZSBoMiB7XG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcbn1cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG1heC13aWR0aDogODAlO1xuICBtYXJnaW46IDYwcHggMCA0MHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnAge1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XG59XG5cbnAgYiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/dealer-intro-slide/dealer-intro-slide.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/dealer-intro-slide/dealer-intro-slide.component.ts ***!
  \******************************************************************************/
/*! exports provided: DealerIntroSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerIntroSlideComponent", function() { return DealerIntroSlideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let DealerIntroSlideComponent = class DealerIntroSlideComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    dismiss() {
        localStorage.setItem('delarIntro', "true");
        this.modalController.dismiss();
    }
    ngOnInit() {
        this.logo = localStorage.companyLogo;
    }
};
DealerIntroSlideComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
DealerIntroSlideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dealer-intro-slide',
        template: __webpack_require__(/*! raw-loader!./dealer-intro-slide.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dealer-intro-slide/dealer-intro-slide.component.html"),
        styles: [__webpack_require__(/*! ./dealer-intro-slide.component.scss */ "./src/app/dashboard/dealer-intro-slide/dealer-intro-slide.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], DealerIntroSlideComponent);



/***/ }),

/***/ "./src/app/delar-application/dashboard/add-imei-company/add-imei-company.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/delar-application/dashboard/add-imei-company/add-imei-company.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2Rhc2hib2FyZC9hZGQtaW1laS1jb21wYW55L2FkZC1pbWVpLWNvbXBhbnkucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/delar-application/dashboard/add-imei-company/add-imei-company.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/delar-application/dashboard/add-imei-company/add-imei-company.page.ts ***!
  \***************************************************************************************/
/*! exports provided: AddImeiCompanyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddImeiCompanyPage", function() { return AddImeiCompanyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let AddImeiCompanyPage = class AddImeiCompanyPage {
    constructor(alertController, commonService, ajaxService, modalController, router) {
        this.alertController = alertController;
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.modalController = modalController;
        this.router = router;
        this.searchEnable = false;
    }
    assignImeiToCompany(company) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.imeiAssignCompany = {
                imeiNo: this.imeiDetails.imei,
                companyDetail: company.companyId
            };
            console.table(company);
            console.table(this.imeiDetails);
            const alert = yield this.alertController.create({
                header: 'Are you sure?',
                message: 'You want to assign ' + this.imeiAssignCompany.imeiNo + ' to this company ' + this.imeiAssignCompany.companyDetail,
                backdropDismiss: false,
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Ok',
                        handler: data => {
                            const arrayData = [];
                            const date = new Date();
                            let currentDate = date.getFullYear() + '-';
                            currentDate += (date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                            currentDate += date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
                            let expDate = date.getFullYear() + 1 + '-';
                            expDate += (date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                            expDate += date.getDate() < 10 ? '0' + (date.getDate() - 1) : date.getDate() - 1;
                            const assignImeiTocom = {
                                "manufacture": this.imeiDetails.manufacture,
                                "provider": this.imeiDetails.provider,
                                "imei": this.imeiDetails.imei,
                                "checked": this.imeiDetails.checked,
                                "simno": this.imeiDetails.simno,
                                "modal": this.imeiDetails.modal,
                                //"$$hashKey": "object:8022",
                                "companyId": company.companyId,
                                "userId": localStorage.getItem('userId'),
                                "DefaultWarnty": expDate,
                                "convertedDate": currentDate
                            };
                            arrayData.push(assignImeiTocom);
                            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + '/api/vts/superadmin/device';
                            this.ajaxService.ajaxPutMethod(url, arrayData)
                                .subscribe(res => {
                                console.log(res);
                                res = JSON.parse(res);
                                if (res.devicestatus === "persisted") {
                                    this.commonService.presentToast('Your Imei assign successfully');
                                    localStorage.setItem('selectedCompanyData', JSON.stringify(company));
                                    this.router.navigateByUrl('/company-vehicle');
                                    this.modalController.dismiss();
                                }
                                else {
                                    this.commonService.presentToast('There was a problem to assign this Imei');
                                }
                            });
                        }
                    }]
            });
            yield alert.present();
        });
    }
    getBack() {
        this.modalController.dismiss();
    }
    searchStatus() {
        this.searchEnable = !this.searchEnable;
    }
    ionViewWillEnter() {
        this.commonService.dismissLoader();
    }
    ngOnInit() {
        this.showList = JSON.parse(localStorage.getItem('dashboardData'));
    }
};
AddImeiCompanyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddImeiCompanyPage.prototype, "imeiDetails", void 0);
AddImeiCompanyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-imei-company',
        template: __webpack_require__(/*! raw-loader!./add-imei-company.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/dashboard/add-imei-company/add-imei-company.page.html"),
        styles: [__webpack_require__(/*! ./add-imei-company.page.scss */ "./src/app/delar-application/dashboard/add-imei-company/add-imei-company.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], AddImeiCompanyPage);



/***/ }),

/***/ "./src/app/delar-application/dashboard/company-details/company-details.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/delar-application/dashboard/company-details/company-details.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL2Rhc2hib2FyZC9jb21wYW55LWRldGFpbHMvY29tcGFueS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/delar-application/dashboard/company-details/company-details.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/delar-application/dashboard/company-details/company-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CompanyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailsComponent", function() { return CompanyDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let CompanyDetailsComponent = class CompanyDetailsComponent {
    constructor(ajaxService, modalController) {
        this.ajaxService = ajaxService;
        this.modalController = modalController;
        this.page = [];
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    getdata() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web + "/global/getlistofvehiclesinfo?companyId=" + this.value;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.tableData = res;
            this.page = ["100", "200", "500", "1000"];
            this.renderer = (row, column, value) => {
                if (value == "" || null || undefined) {
                    return "-";
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
                    text: "Plate No",
                    datafield: "plateNo",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 90,
                },
                {
                    text: "Imei No",
                    datafield: "imei",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
                {
                    text: "Sim No",
                    datafield: "sim",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "Purchase Date",
                    datafield: "dop",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 120,
                },
                {
                    text: "Expiry Date",
                    datafield: "warrantyExpiryDate",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 110,
                },
            ];
        });
    }
    ngOnInit() {
        this.getdata();
    }
};
CompanyDetailsComponent.ctorParameters = () => [
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
], CompanyDetailsComponent.prototype, "myGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CompanyDetailsComponent.prototype, "value", void 0);
CompanyDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-company-details",
        template: __webpack_require__(/*! raw-loader!./company-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/dashboard/company-details/company-details.component.html"),
        styles: [__webpack_require__(/*! ./company-details.component.scss */ "./src/app/delar-application/dashboard/company-details/company-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], CompanyDetailsComponent);



/***/ }),

/***/ "./src/app/delar-application/dashboard/create-company/create-company.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/delar-application/dashboard/create-company/create-company.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin: 2px;\n}\n\n@media only screen and (min-width: 10px) and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n    margin: 5% auto 3px;\n  }\n\n  #submitbtn {\n    width: 20%;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .form-field {\n    margin: 3% auto 5px;\n    padding: 0px 20px;\n  }\n\n  #submitbtn {\n    width: 35%;\n  }\n}\n\n#submitbtn {\n  --background: #6252ee !important;\n}\n\n.heading {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGFzaGJvYXJkL2NyZWF0ZS1jb21wYW55L0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGRhc2hib2FyZFxcY3JlYXRlLWNvbXBhbnlcXGNyZWF0ZS1jb21wYW55LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9kYXNoYm9hcmQvY3JlYXRlLWNvbXBhbnkvY3JlYXRlLWNvbXBhbnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDTkY7O0FEUUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNMRjs7QURRQTtFQUNFO0lBQ0UsU0FBQTtJQUNBLG1CQUFBO0VDTEY7O0VET0E7SUFDRSxVQUFBO0VDSkY7QUFDRjs7QURNQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxpQkFBQTtFQ0pGOztFRE9BO0lBQ0UsVUFBQTtFQ0pGO0FBQ0Y7O0FETUE7RUFDRSxnQ0FBQTtBQ0pGOztBRE9BO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9kYXNoYm9hcmQvY3JlYXRlLWNvbXBhbnkvY3JlYXRlLWNvbXBhbnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24taW5wdXQsaW9uLXNlbGVjdHtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbi8vICAgICBoZWlnaHQ6IDQycHg7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMThweDtcclxuLy8gICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbi8vIH1cclxuLmlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICBtYXJnaW46IDdweDtcclxufVxyXG4uc2VsZWN0YWJsZS1pbnB1dCB7XHJcbiAgcGFkZGluZzogOHB4IDExcHggNHB4IDhweDtcclxuICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6MTBweCkgYW5kKG1heC13aWR0aDo3NjdweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIHpvb206IDgwJTtcclxuICAgIG1hcmdpbjogNSUgYXV0byAzcHg7XHJcbiAgfVxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbjogMyUgYXV0byA1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICB9XHJcbn1cclxuI3N1Ym1pdGJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNjI1MmVlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcclxufVxyXG4iLCIuaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIG1hcmdpbjogN3B4O1xufVxuXG4uc2VsZWN0YWJsZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XG4gIG1hcmdpbjogMnB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgem9vbTogODAlO1xuICAgIG1hcmdpbjogNSUgYXV0byAzcHg7XG4gIH1cblxuICAjc3VibWl0YnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW46IDMlIGF1dG8gNXB4O1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICB9XG5cbiAgI3N1Ym1pdGJ0biB7XG4gICAgd2lkdGg6IDM1JTtcbiAgfVxufVxuI3N1Ym1pdGJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzYyNTJlZSAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGluZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/dashboard/create-company/create-company.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/delar-application/dashboard/create-company/create-company.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CreateCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompanyComponent", function() { return CreateCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









let CreateCompanyComponent = class CreateCompanyComponent {
    constructor(formBuilder, router, ajaxService, commonService, location, modalController) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.location = location;
        this.modalController = modalController;
        this.region = { India: "Asia/Kolkata", "Saudi Arabia": "Asia/Riyadh" };
        this.modelTypes = {
            "APMKT01 Basic": "KT-Mini",
            "APMKT01 Advance": "KT-Mini",
            "APMKT02 Basic": "TK003",
            "APMKT02 Advance": "TK003",
            "APMKT03 Basic": "KT-Mini",
            "APMKT03 Advance": "KT-Mini",
            APMKT04: "wetrack",
            APMKT05: "GT06N",
            APMKT06: "GT300",
            APMKT07: "JV200",
            APMKT08: "KT-Mini",
            APMKT09: "KT-Mini",
            APMKT10: "GT800",
            APMKT11: "GT06D",
            AIS1401A: "AIS1401A",
        };
        this.model = [];
        this.provider = [
            { sim: "Idea" },
            { sim: "Airtel" },
            { sim: "Vodafone" },
            { sim: "Bsnl" },
        ];
        this.manufacture = [
            { name: "APMKT", type: "Concox" },
            { name: "APMKT-AIS140", type: "APMKT" },
        ];
    }
    clear() {
        this.checkno.patchValue({
            phoneno: "",
        });
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    getBack() {
        this.router.navigateByUrl("/dashboard");
    }
    backbutton() {
        this.location.back();
    }
    setValue() {
        this.addCompany.patchValue({
            companyName: this.value.companyName,
            loginId: this.value.companyId,
            password: this.value.password,
            email: this.value.emailId,
            contactNo: this.value.contact,
            address: this.value.address,
            city: this.value.city,
            country: this.value.country,
        });
    }
    check() {
        if (this.checkno.value.phoneno.toString().length != 10) {
            this.commonService.showConfirm("Enter the 10 Digit Contact Number");
        }
        else if (this.checkno.valid) {
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web +
                "/global/validate/contact?contactNo=" +
                this.checkno.value.phoneno;
            this.ajaxService.ajaxGet(url).subscribe((res) => {
                if (res.message == "Available") {
                    this.commonService.showConfirm("Available");
                    this.clear();
                }
                else {
                    this.commonService.showConfirm(res.message);
                    this.clear();
                }
            });
        }
    }
    onadd() {
        if (this.addCompany.value.contactNo.toString().length != 10) {
            this.commonService.presentToast("Enter the 10 Digit Contact Number");
        }
        else if (this.addCompany.value.password.toString().length <= 4) {
            this.commonService.presentToast("Please Enter 5 digit Password");
        }
        else if (this.addCompany.valid) {
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web +
                "/global/validate/contact?contactNo=" +
                this.addCompany.value.contactNo;
            this.ajaxService.ajaxGet(url).subscribe((res) => {
                if (res.message == "Not Available") {
                    this.addTheCompany();
                }
                else {
                    this.commonService.showConfirm(res.message);
                }
            });
        }
        else {
            this.commonService.presentToast("Fill required field..");
        }
    }
    onedit() {
        if (this.addCompany.value.contactNo.toString().length != 10) {
            this.commonService.presentToast("Enter the 10 Digit Contact Number");
        }
        else if (this.addCompany.value.password.toString().length <= 4) {
            this.commonService.presentToast("Please Enter 5 digit Password");
        }
        let adminData;
        let addCompany;
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["app"].appName != "Armoron") {
            adminData = {
                loginId: this.addCompany.value.loginId,
                loginCompany: localStorage.getItem("companyId"),
            };
            const countryCode = this.countryCode[this.addCompany.value.country];
            console.log(countryCode);
            const region = this.region[this.addCompany.value.country];
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
                loginId: this.addCompany.value.contactNo,
                loginCompany: "apm",
            };
            const countryCode = this.countryCode[this.addCompany.value.country];
            console.log(countryCode);
            const region = this.region[this.addCompany.value.country];
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
        const dataJson = JSON.stringify(addCompany);
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web +
            "/user/provider/editcompany?providerName=" +
            adminData.loginCompany +
            "&companyid=" +
            adminData.loginId;
        this.ajaxService.ajaxPostWithBody(url, dataJson).subscribe((res) => {
            if (res.message == "updated successfully") {
                this.commonService.showConfirm("Updated Successfully");
                this.modalController.dismiss({
                    data: "updated successfully",
                });
            }
            else {
                this.commonService.showConfirm(res.message);
            }
        });
    }
    addTheCompany() {
        let adminData;
        let addCompany;
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["app"].appName != "Armoron") {
            adminData = {
                loginId: this.addCompany.value.loginId,
                loginCompany: localStorage.getItem("companyId"),
            };
            const countryCode = this.countryCode[this.addCompany.value.country];
            console.log(countryCode);
            const region = this.region[this.addCompany.value.country];
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
                loginId: this.addCompany.value.contactNo,
                loginCompany: "apm",
            };
            const countryCode = this.countryCode[this.addCompany.value.country];
            console.log(countryCode);
            const region = this.region[this.addCompany.value.country];
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
        const dataJson = JSON.stringify(addCompany);
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web +
            "/user/provider/company?providerName=" +
            adminData.loginCompany +
            "&companyid=" +
            adminData.loginId;
        this.ajaxService.ajaxPostWithBody(url, dataJson).subscribe((res) => {
            this.newFleetCreation(res);
        });
    }
    newFleetCreation(res) {
        if (res) {
            if (res.Message === "Company added successfully.") {
                const datetoday = new Date();
                const expDate = datetoday.getFullYear() +
                    1 +
                    "-" +
                    (datetoday.getMonth() + 1) +
                    "-" +
                    (datetoday.getDate() - 1);
                const countryCode = this.countryCode[this.addCompany.value.country];
                let fleetData;
                if (src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["app"].appName != "Armoron") {
                    fleetData = {
                        userName: this.addCompany.value.loginId,
                        password: this.addCompany.value.password,
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
                        companyId: this.addCompany.value.loginId,
                        branchID: this.addCompany.value.loginId,
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
                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + "/global/newFleetCreation";
                this.ajaxService.ajaxPostMethod(url, fleetData).subscribe((res) => {
                    this.newCompanyCreation(res);
                });
                console.log("this is call back end");
            }
            else {
                this.commonService.presentToast(res["Error Message"]);
            }
        }
    }
    newCompanyCreation(data) {
        const fleetData = JSON.parse(localStorage.getItem("fleetData"));
        let userDetail;
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["app"].appName != "Armoron") {
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
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web + "/global/companyCreation";
        this.ajaxService.ajaxPostMethod(url, userDetail).subscribe((res) => {
            this.alterNewCompanySuccess(res);
        });
    }
    alterNewCompanySuccess(res) {
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
            this.modalController.dismiss({
                data: "Successfully Presisted",
            });
            this.addCompany.reset();
            //   });
            // }else {
            //   this.commonService.presentToast('Presisted Failed...!');
        }
    }
    getCountries() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web +
            "/login/getPreferences?key=countries&companyId=" +
            this.companyDetail.companyID;
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.country = res;
        });
    }
    getCountryCode() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web +
            "/login/getPreferences?key=countrycode&companyId=" +
            this.companyDetail.companyID;
        this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
            this.countryCode = res;
        });
    }
    ngOnInit() {
        this.companyDetail = {
            companyID: localStorage.getItem("companyId"),
            userId: localStorage.getItem("userId"),
        };
        this.checkno = this.formBuilder.group({
            phoneno: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.selectedData = "company";
        this.header = "Company";
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["app"].appName;
        this.getCountries();
        this.getCountryCode();
        if (this.appName != "Armoron") {
            this.addCompany = this.formBuilder.group({
                companyName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]],
                email: [""],
                password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                loginId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                address: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                contactNo: [""],
                region: [""],
                city: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                country: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
        }
        else {
            this.addCompany = this.formBuilder.group({
                firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                lastname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
                date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                address: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                region: [""],
                country: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                city: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                contactNo: [localStorage.getItem("PhoneNumber"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                gender: ["male", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
        }
    }
    ionViewWillEnter() {
        this.addCompany.reset();
        this.clear();
        if (Object.keys(this.value).length != 0) {
            console.log(this.value);
            this.setValue();
        }
        else {
            this.clear();
            this.value = {};
        }
    }
};
CreateCompanyComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CreateCompanyComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CreateCompanyComponent.prototype, "value2", void 0);
CreateCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-create-company",
        template: __webpack_require__(/*! raw-loader!./create-company.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/dashboard/create-company/create-company.component.html"),
        styles: [__webpack_require__(/*! ./create-company.component.scss */ "./src/app/delar-application/dashboard/create-company/create-company.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]])
], CreateCompanyComponent);



/***/ }),

/***/ "./src/app/delar-application/dashboard/dashboard-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/delar-application/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/delar-application/dashboard/dashboard.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    },
    {
        path: 'add-company',
        loadChildren: () => __webpack_require__.e(/*! import() | add-company-add-company-module */ "add-company-add-company-module").then(__webpack_require__.bind(null, /*! ./add-company/add-company.module */ "./src/app/delar-application/dashboard/add-company/add-company.module.ts")).then(m => m.AddCompanyPageModule)
    },
    {
        path: 'add-imei-company',
        loadChildren: () => __webpack_require__.e(/*! import() | add-imei-company-add-imei-company-module */ "add-imei-company-add-imei-company-module").then(__webpack_require__.bind(null, /*! ./add-imei-company/add-imei-company.module */ "./src/app/delar-application/dashboard/add-imei-company/add-imei-company.module.ts")).then(m => m.AddImeiCompanyPageModule)
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/delar-application/dashboard/dashboard.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/delar-application/dashboard/dashboard.module.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_search_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/search-filter.service */ "./src/app/services/search-filter.service.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/delar-application/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/delar-application/dashboard/dashboard.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_imei_company_add_imei_company_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-imei-company/add-imei-company.page */ "./src/app/delar-application/dashboard/add-imei-company/add-imei-company.page.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var _company_details_company_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./company-details/company-details.component */ "./src/app/delar-application/dashboard/company-details/company-details.component.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var _create_company_create_company_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./create-company/create-company.component */ "./src/app/delar-application/dashboard/create-company/create-company.component.ts");




// import { PipesModule } from 'pipes-module';




// import { AddImeiCompanyPageModule } from './add-imei-company/add-imei-company.module';
// import { AddCompanyVehiclePage } from '../company-vehicle/add-company-vehicle/add-company-vehicle.page';






const addImeiCompanyPage = [
    {
        path: "",
        component: _add_imei_company_add_imei_company_page__WEBPACK_IMPORTED_MODULE_9__["AddImeiCompanyPage"],
    },
    {
        path: "company-details",
        component: _company_details_company_details_component__WEBPACK_IMPORTED_MODULE_11__["CompanyDetailsComponent"],
    },
    {
        path: "create-company",
        component: _create_company_create_company_component__WEBPACK_IMPORTED_MODULE_13__["CreateCompanyComponent"],
    },
];
let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_10__["SharedModModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_12__["IonicSelectableModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            // PipesModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardPageRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(addImeiCompanyPage),
        ],
        declarations: [
            _dashboard_page__WEBPACK_IMPORTED_MODULE_7__["DashboardPage"],
            _add_imei_company_add_imei_company_page__WEBPACK_IMPORTED_MODULE_9__["AddImeiCompanyPage"],
            _company_details_company_details_component__WEBPACK_IMPORTED_MODULE_11__["CompanyDetailsComponent"],
            _services_search_filter_service__WEBPACK_IMPORTED_MODULE_5__["SearchFilterService"],
            // AddCompanyPage,
            _create_company_create_company_component__WEBPACK_IMPORTED_MODULE_13__["CreateCompanyComponent"],
        ],
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/delar-application/dashboard/dashboard.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/delar-application/dashboard/dashboard.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 768px) {\n  .input {\n    margin-top: 12px;\n  }\n\n  #submitbtn {\n    width: 40%;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .form-field {\n    zoom: 80%;\n  }\n\n  #submitbtn {\n    width: 25%;\n  }\n}\n.form-field {\n  margin: 0px 5px 0px;\n  border-radius: 7px;\n}\n.toolbar-buttons {\n  padding: 10px 0;\n  width: 78px !important;\n}\n.companyName {\n  color: #545454;\n  font-family: sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.iconColor {\n  color: #7c68f8;\n  padding-right: 7px;\n}\n.centerAlign {\n  -webkit-box-align: center;\n          align-items: center;\n  font-family: sans-serif;\n  font-size: small;\n}\n.centerColNum {\n  align-self: center;\n  /* justify-items: center; */\n  font-size: x-large;\n  text-align: center;\n  border: 2px solid #7c68f8;\n  border-radius: 100px;\n  background: #f1f1f1;\n  color: black;\n}\n.iconSize25px {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGFzaGJvYXJkL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXGRhc2hib2FyZFxcZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUVBO0VBQ0U7SUFDRSxnQkFBQTtFQ2xFRjs7RURxRUE7SUFDRSxVQUFBO0VDbEVGO0FBQ0Y7QURxRUE7RUFDRTtJQUNFLFNBQUE7RUNuRUY7O0VEc0VBO0lBQ0UsVUFBQTtFQ25FRjtBQUNGO0FEc0VBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQ3BFRjtBRHVFQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQ3BFRjtBRHVFQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3BFRjtBRHdFQTtFQUNFLHlCQUFBO0FDckVGO0FEdUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDcEVGO0FEdUVBO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNwRUY7QURzRUE7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNuRUY7QURzRUE7RUFDRSxlQUFBO0FDbkVGIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqe1xyXG4vLyAgIG1hcmdpbjowcHg7XHJcbi8vICAgcGFkZGluZzogMDtcclxuLy8gfVxyXG4vLyAuY29tcGFueS1jYXJke1xyXG4vLyAgIG1hcmdpbjogNXB4O1xyXG4vLyAgIHBhZGRpbmc6IDA7XHJcbi8vICAgZm9udC1zaXplOiAxMXB4O1xyXG4vLyAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgZ3JheTtcclxuLy8gfVxyXG4vLyAuc2VsZWN0ZWRUYWJ7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlZWVmO1xyXG4vLyAgICAgY29sb3I6IGJsYWNrO1xyXG4vLyAgICAgYm9yZGVyOiBub25lO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgIH1cclxuLy8gICAudW5TZWxlY3RlZFRhYntcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3IgOiM5ZTFkMjU7XHJcbi8vICAgICBib3JkZXI6IG5vbmU7XHJcbi8vICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbi8vICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgfVxyXG4vLyAgIC5zZXQtc2l6ZXtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4vLyAgIH1cclxuLy8gICAuaWNvblNpemV7XHJcbi8vICAgICBmb250LXNpemU6IDIwcHg7XHJcbi8vICAgICBjb2xvcjogI2Q5MjMyZTtcclxuLy8gICB9XHJcblxyXG4vLyAgIC5oZWFkZXJsaXN0e1xyXG4vLyAgICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlIDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gICB9XHJcbi8vICAgLmljb24tY29se1xyXG4vLyAgICAgZGlzcGxheTogZ3JpZDtcclxuLy8gICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMwOWQ4YzU7XHJcbi8vICAgfVxyXG4vLyAgIC5zdWItcm93c3tcclxuLy8gICAgIG1hcmdpbjogMnB4IDBweCAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLmNvbXBhbnktaWNvbntcclxuLy8gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gICB9XHJcbi8vICAgLnVuZGVybGluZSB7XHJcbi8vICAgICBmb250LXNpemU6IDExcHg7XHJcbi8vICAgICBjb2xvcjojMDlkOGM1O1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLnVuZGVybGluZTpiZWZvcmUge1xyXG4vLyAgICAgbWFyZ2luOiBhdXRvO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgY29udGVudDogXCJcIjtcclxuLy8gICAgIGhlaWdodDogMnB4O1xyXG4vLyAgICAgYm90dG9tOiAxMXB4O1xyXG4vLyAgICAgd2lkdGg6IDEzcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiNmZmQzMWE7XHJcbi8vICAgICBsZWZ0OiAycHg7XHJcbi8vICAgfVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgI3N1Ym1pdGJ0biB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb3JtLWZpZWxkIHtcclxuICAgIHpvb206IDgwJTtcclxuICB9XHJcblxyXG4gICNzdWJtaXRidG4ge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IDBweCA1cHggMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuLnRvb2xiYXItYnV0dG9ucyB7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIHdpZHRoOiA3OHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb21wYW55TmFtZSB7XHJcbiAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udXBwZXJjYXNlIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5pY29uQ29sb3Ige1xyXG4gIGNvbG9yOiAjN2M2OGY4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcclxufVxyXG5cclxuLmNlbnRlckFsaWduIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuLmNlbnRlckNvbE51bSB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIC8qIGp1c3RpZnktaXRlbXM6IGNlbnRlcjsgKi9cclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM3YzY4Zjg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5pY29uU2l6ZTI1cHgge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tZmllbGQge1xuICAgIHpvb206IDgwJTtcbiAgfVxuXG4gICNzdWJtaXRidG4ge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbn1cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAwcHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4udG9vbGJhci1idXR0b25zIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICB3aWR0aDogNzhweCAhaW1wb3J0YW50O1xufVxuXG4uY29tcGFueU5hbWUge1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi51cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaWNvbkNvbG9yIHtcbiAgY29sb3I6ICM3YzY4Zjg7XG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcbn1cblxuLmNlbnRlckFsaWduIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi5jZW50ZXJDb2xOdW0ge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIC8qIGp1c3RpZnktaXRlbXM6IGNlbnRlcjsgKi9cbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM3YzY4Zjg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5pY29uU2l6ZTI1cHgge1xuICBmb250LXNpemU6IDI1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/dashboard/dashboard.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/delar-application/dashboard/dashboard.page.ts ***!
  \***************************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _company_details_company_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-details/company-details.component */ "./src/app/delar-application/dashboard/company-details/company-details.component.ts");
/* harmony import */ var _create_company_create_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-company/create-company.component */ "./src/app/delar-application/dashboard/create-company/create-company.component.ts");








let DashboardPage = class DashboardPage {
    constructor(ajaxService, platform, modalController, commonService) {
        this.ajaxService = ajaxService;
        this.platform = platform;
        this.modalController = modalController;
        this.commonService = commonService;
        this.page = [];
    }
    addModel(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const isModalOpened = yield this.modalController.getTop();
            if (!isModalOpened) {
                const modal = yield this.modalController.create({
                    component: _create_company_create_company_component__WEBPACK_IMPORTED_MODULE_7__["CreateCompanyComponent"],
                    cssClass: "addcompanyform",
                    componentProps: {
                        value2: data == "add" ? "add" : "edit",
                    },
                });
                modal.onDidDismiss().then((data) => {
                    if (data.data.data == "Successfully Presisted") {
                        this.getdata();
                    }
                });
                return yield modal.present();
            }
        });
    }
    editModel(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.selectedRow) {
                const modal = yield this.modalController.create({
                    component: _create_company_create_company_component__WEBPACK_IMPORTED_MODULE_7__["CreateCompanyComponent"],
                    cssClass: "editcompanyform",
                    componentProps: {
                        value: this.selectedRow,
                        value2: data == "add" ? "add" : "edit",
                    },
                });
                modal.onDidDismiss().then((data) => {
                    this.myGrid.clearselection();
                    this.selectedRow = "";
                    if (data.data.data == "updated successfully") {
                        this.getdata();
                    }
                });
                return yield modal.present();
            }
            else {
                this.commonService.presentToast("Please Select a row to edit");
                return "";
            }
        });
    }
    getdata() {
        this.commonService.presentLoader();
        this.page = [];
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].web +
            "/global/getcompanylist?suffix=" +
            localStorage.companySuffix;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.tableData = res;
            this.commonService.dismissLoader();
            this.page = ["100", "200", "500", "1000"];
            this.renderer = (row, column, value) => {
                if (value == "" || null || undefined) {
                    return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
                        "0" +
                        "</span>");
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
                    text: "Company Id",
                    datafield: "companyId",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 190,
                },
                {
                    text: "Company Name",
                    datafield: "companyName",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 190,
                },
                {
                    text: "Contact No",
                    datafield: "contact",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 190,
                },
                {
                    text: "Email Id",
                    datafield: "emailId",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 190,
                },
                {
                    text: "Vehicle Count",
                    datafield: "vehicle_Count",
                    cellsrenderer: this.renderer,
                    cellsalign: "center",
                    align: "center",
                    width: 190,
                },
                {
                    text: "Details",
                    columntype: "button",
                    cellsalign: "center",
                    align: "center",
                    width: 150,
                    cellsrenderer: () => {
                        return this.myPlatform == "desktop"
                            ? "View"
                            : "<button>View</button>";
                    },
                    buttonclick: (row) => {
                        this.viewModel(row);
                    },
                },
            ];
        });
    }
    viewModel(row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _company_details_company_details_component__WEBPACK_IMPORTED_MODULE_6__["CompanyDetailsComponent"],
                cssClass: "companyform",
                componentProps: {
                    value: this.selectedRow.companyId,
                },
            });
            modal.onDidDismiss().then(() => {
                this.selectedRow = undefined;
            });
            return yield modal.present();
        });
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row.bounddata;
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.getdata();
    }
};
DashboardPage.ctorParameters = () => [
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DashboardPage.prototype, "myGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DashboardPage.prototype, "value", void 0);
DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dashboard",
        template: __webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/dashboard/dashboard.page.html"),
        styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/delar-application/dashboard/dashboard.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
], DashboardPage);



/***/ }),

/***/ "./src/app/services/search-filter.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/search-filter.service.ts ***!
  \***************************************************/
/*! exports provided: SearchFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterService", function() { return SearchFilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let SearchFilterService = class SearchFilterService {
    constructor() { }
    transform(items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(showList => {
            if (showList != null) {
                if (showList.companyName) {
                    return showList.companyName.toLowerCase().includes(terms);
                }
                if (showList.plateno) {
                    return showList.plateno.toLowerCase().includes(terms);
                }
                if (showList.imei) {
                    return showList.imei.toLowerCase().includes(terms);
                }
            }
            else {
                return false;
            }
        });
    }
};
SearchFilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'searchDealer' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SearchFilterService);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map