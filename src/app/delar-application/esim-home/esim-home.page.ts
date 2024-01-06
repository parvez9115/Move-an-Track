import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController, IonContent, Platform } from "@ionic/angular";
import { DropDownListComponent } from "smart-webcomponents-angular/dropdownlist";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";

@Component({
  selector: "app-esim-home",
  templateUrl: "./esim-home.page.html",
  styleUrls: ["./esim-home.page.scss"],
})
export class EsimHomePage implements OnInit {
  @ViewChild("dropdownlistDealer", {
    read: DropDownListComponent,
    static: false,
  })
  dropdownlistDealer!: DropDownListComponent;
  makeFilter;
  showGrid = "1";
  tab = "renewal";
  data;
  myPlatform: any;
  dealer = "";
  companyData = "apm";
  companyId = localStorage.getItem("userName");
  arrow: boolean = false;

  constructor(
    private ajaxService: AjaxService,
    public platform: Platform,
    private router: Router,
    private alertController: AlertController,
    private commonService: CommonService
  ) {}

  @ViewChild(IonContent, { static: false }) content: any;

  scrollToTop() {
    this.content.scrollToTop(500);
  }

  scrollToBottom() {
    this.content.scrollToBottom(500);
  }

  logScrolling(ev) {
    if (ev.detail.scrollTop > 2) {
      this.arrow = true;
    }
    if (ev.detail.scrollTop < 2) {
      this.arrow = false;
    }
  }

  dropDownData() {
    let url =
      "https://mvt.apmkingstrack.com/fleettracking/global/getesimdealerlist";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.data = res;
      this.dropdownlistDealer.dataSource = res;
    });
  }
  ionViewWillEnter() {
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
    this.dropDownData();

    if (this.companyId == "apm-sa") {
      this.dealer = this.companyData;
    } else {
      this.dealer = this.companyId;
    }
  }
  ngOnInit(): void {}

  switchGrid(d) {
    this.dropDownData();
    this.showGrid = d;
  }
  switchtab(d) {
    this.tab = d;
  }
  handleChange(e) {
    this.dealer = e.value;
  }
  selectDealer(e) {
    this.dealer = this.dropdownlistDealer.value[0].value;
  }
}
