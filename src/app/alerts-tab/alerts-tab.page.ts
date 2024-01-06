import { Component } from "@angular/core";

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
import { Platform, MenuController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-alerts-tab",
  templateUrl: "./alerts-tab.page.html",
  styleUrls: ["./alerts-tab.page.scss"],
  animations: [
    trigger("inOutAnimation", [
      transition(":enter", [style({ opacity: 0.7 }), animate("0.7s ease-out")]),
    ]),
  ],
})
export class AlertsTabPage {
  app: any = { logo: "logo.png" };
  myPlatform: string;
  alertTypes = ["ENGINE ON"];
  name: string;
  constructor(
    private platform: Platform,
    private menuController: MenuController,
    public router: Router
  ) {}
  totalAlert: number = 0;
  showSearch: boolean = false;
  initialHeader: boolean = true;
  searchInput: string;
  subscription: any;

  searchActivity(task) {
    if (task == "open") {
      this.showSearch = true;
    } else {
      this.showSearch = false;
      this.searchInput = "";
    }
  }

  clickShowSearch() {
    this.showSearch = !this.showSearch;
  }

  locationBack() {
    this.router.navigateByUrl("student-dashboard");
  }

  scroll(event) {
    if (event.detail.scrollTop > 0) {
      this.initialHeader = false;
    } else {
      this.initialHeader = true;
    }
  }
  totalAlerts(event) {
    this.totalAlert = event;
  }
  async ionViewDidEnter() {
    this.app["logo"] = localStorage.companyLogo;
    this.name = localStorage.getItem("AppName");

    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
    this.subscription = this.platform.backButton.subscribe(async () => {
      if (this.menuController.isOpen()) {
        this.menuController.close();
      }
    });
  }
}
