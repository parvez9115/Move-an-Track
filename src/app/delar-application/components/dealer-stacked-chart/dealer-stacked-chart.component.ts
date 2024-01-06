import {
  Component,
  ViewChild,
  OnInit,
  AfterViewInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
} from "@angular/core";
import { ChartComponent } from "smart-webcomponents-angular/chart";
import { AjaxService } from "src/app/services/ajax.service";

import { EventEmitter } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-dealer-stacked-chart",
  templateUrl: "./dealer-stacked-chart.component.html",
  styleUrls: ["./dealer-stacked-chart.component.scss"],
})
export class DealerStackedChartComponent
  implements AfterViewInit, OnInit, OnChanges
{
  constructor(
    private ajaxService: AjaxService,
    private loadingCtrl: LoadingController,
    private http: HttpClient
  ) {}
  endis = true;
  endisMapped = true;
  private httpRequest: Subscription;
  @Input() dealerName: String;
  loader = false;
  @Input() header: String;
  @Input() fromDate: String;
  @Input() toDate: String;

  @Input() days: String;

  @Input() barName: String;
  @Output() endisMappedDevice = new EventEmitter();
  @Output() deviceTotalActivatedCount = new EventEmitter();
  @Output() deviceTotalPurchaseCount = new EventEmitter();
  animationDuration = 500;
  data = [];
  sensoriseData = [];
  @ViewChild("chart", { read: ChartComponent, static: false })
  chart: ChartComponent;

  sampleData = [];
  caption: any = "";
  description = "";
  showLegend = false;
  padding = { left: 5, top: 5, right: 5, bottom: 5 };
  titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };
  dataSource = this.sampleData;
  xAxis = {};
  colorScheme = "";
  seriesGroups = [];
  async showLoading() {
    let a = false;
    if (a == false) {
      a = true;
      const loading = await this.loadingCtrl.create({
        message: "Please wait...",
        duration: 4000,
      });

      loading.present();
    }
  }

  ngOnInit(): void {}
  getMappedDevice() {
    this.endis = true;
    this.endisMapped = true;
    this.loader = true;
    if (this.httpRequest) {
      this.httpRequest.unsubscribe();
    }
    this.httpRequest = this.http
      .get(
        `https://mvt.apmkingstrack.com/fleettracking/esim/getDeviceMappeddetail?serviceprovider=${this.header}&days=${this.days}&fromdate=${this.fromDate}&todate=${this.toDate}`
      )
      .subscribe((res: any) => {
        if (Object.keys(res).length == 0) {
          this.endis = false;
          this.endisMapped = false;
          this.chart.dataSource = [];
        } else {
          this.endis = true;
          this.endisMapped = true;
          this.chart.dataSource = res["data"];
        }
        this.loader = false;
        this.colorScheme = "scheme32";

        this.chart.xAxis = {
          position: "bottom",
          dataField: "status",
          gridLines: { visible: false },
        };
        this.chart.xAxis.textRotationAngle = 300;

        this.chart.seriesGroups = [
          {
            type: "column",
            columnsGapPercent: 30,
            columnsMaxWidth: 45,

            valueAxis: {
              title: { text: "Device Count" },
            },
            series: [
              {
                dataField: "count1",
                displayText: "Count",
                labels: {
                  visible: true,
                  verticalAlignment: "top",
                  offset: { x: 0, y: -20 },
                  formatFunction: function (value: any) {
                    return value;
                  },
                },
              },
            ],
          },
        ];
      });
  }
  getDeviceRenewal() {
    this.loader = true;
    if (localStorage.userId == "apm-sa") {
      var url = `https://mvt.apmkingstrack.com/fleettracking/esim/getDeviceRenewal?dealerid=${this.dealerName}&days=${this.days}&fromdate=${this.fromDate}&todate=${this.toDate}`;
    } else {
      var url = `https://mvt.apmkingstrack.com/fleettracking/esim/getDealerDeviceRenewal?dealerid=${localStorage.userId}&days=${this.days}&fromdate=${this.fromDate}&todate=${this.toDate}`;
    }
    this.ajaxService.ajaxGet(url).subscribe((data) => {
      this.loader = false;
      this.colorScheme = "scheme02";
      this.showLegend = true;
      this.chart.xAxis = {
        displayText: "date",
        position: "bottom",
        dataField: "date",
        gridLines: { visible: false },
      };
      this.chart.xAxis.textRotationAngle = 280;
      this.chart.seriesGroups = [
        {
          type: "column",
          columnsGapPercent: 30,
          columnsMaxWidth: 45,
          valueAxis: {
            title: { text: "Device Count" },
          },
          series: [
            {
              dataField: "totalrenewalcount",
              displayText: "Total Renewal Count",
              labels: {
                visible: true,
                verticalAlignment: "top",
                offset: { x: 0, y: -20 },
                formatFunction: function (value: any) {
                  return value;
                },
              },
            },
            {
              dataField: "totalrenewalactivecount",
              displayText: "Total Renewal Active Count",
              labels: {
                visible: true,
                verticalAlignment: "top",
                offset: { x: 0, y: -20 },
                formatFunction: function (value: any) {
                  return value;
                },
              },
            },
          ],
        },
      ];

      this.endisMappedDevice.emit(data);
      this.chart.dataSource = data.data;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (this.barName == "Device Sales") {
      if (this.dealerName == "All") {
        this.dealerName = "";
      }

      this.getDeviceSales();
    } else if (this.barName == "Device Mapped Details") {
      this.getMappedDevice();
    } else if (this.barName == "Device Purchased") {
      this.devicePurchased();
    } else if (this.barName == "Device Renewal") {
      if (this.dealerName == "All") {
        this.dealerName = "";
      }
      this.getDeviceRenewal();
    } else {
      this.getSensoriseData();
    }
  }

  devicePurchased() {
    this.loader = true;
    let url = `https://mvt.apmkingstrack.com/fleettracking/esim/getDevicePurchased?dealerid=${localStorage.userId}&days=${this.days}&fromdate=${this.fromDate}&todate=${this.toDate}`;
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.loader = false;
      this.colorScheme = "scheme05";
      this.showLegend = true;

      this.chart.xAxis = {
        position: "bottom",

        dataField: "date",
        gridLines: { visible: false },
      };
      this.chart.xAxis.textRotationAngle = 280;
      this.chart.seriesGroups = [
        {
          type: "column",
          columnsGapPercent: 30,
          columnsMaxWidth: 45,
          valueAxis: {
            title: { text: "Device Count" },
          },
          series: [
            {
              dataField: "purchased",
              displayText: "Purchased",
              labels: {
                visible: true,
                verticalAlignment: "top",
                offset: { x: 0, y: -20 },
                formatFunction: function (value: any) {
                  return value;
                },
              },
            },
            {
              dataField: "Active",
              displayText: "Active",
              labels: {
                visible: true,
                verticalAlignment: "top",
                offset: { x: 0, y: -20 },
                formatFunction: function (value: any) {
                  return value;
                },
              },
            },
          ],
        },
      ];
      console.log([res]);

      this.chart.seriesGroups[0].valueAxis.minValue = 0;

      this.chart.dataSource = res.data;
      this.deviceTotalPurchaseCount.emit(res);
    });
  }

  ngAfterViewInit(): void {
    // afterViewInit code.
    this.init();
    this.caption = this.barName;
    // console.log(this.data)
    // this.chart.dataSource=this.data
  }

  init(): void {
    const that = this;
    setTimeout(() => {
      if (that.chart.seriesGroups && that.chart.seriesGroups[0]) {
        // that.chart.seriesGroups[0].useGradientColors = true
      }
    }, 1000);
  }
  getDeviceSales() {
    this.loader = true;

    let url = `https://mvt.apmkingstrack.com/fleettracking/esim/getDealerDeviceSales?dealerid=${this.dealerName}&days=${this.days}&fromdate=${this.fromDate}&todate=${this.toDate}`;
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.loader = false;

      this.colorScheme = "scheme27";
      this.showLegend = true;
      this.chart.xAxis = {
        position: "bottom",
        dataField: "date",
        gridLines: { visible: false },
      };
      this.chart.xAxis.textRotationAngle = 280;
      this.chart.seriesGroups = [
        {
          type: "column",

          valueAxis: {
            title: { text: "Device Count" },
          },
          series: [
            {
              dataField: "sales",
              displayText: "Sales",
              labels: {
                visible: true,
                verticalAlignment: "top",
                offset: { x: 0, y: -20 },
              },
              formatFunction: function (value: any) {
                return value;
              },
            },
            {
              dataField: "Active",
              displayText: "Active",
              labels: {
                visible: true,
                verticalAlignment: "top",
                offset: { x: 0, y: -20 },
              },
              formatFunction: function (value: any) {
                return value;
              },
            },
          ],
        },
      ];
      this.chart.seriesGroups[0].valueAxis.minValue = 0;
      this.chart.dataSource = res.data;
      this.deviceTotalActivatedCount.emit(res);
      this.chart.dataSource = res.data;
    });
  }

  getSensoriseData() {
    this.endis = true;
    this.endisMapped = true;
    this.loader = true;
    let url = `https://mvt.apmkingstrack.com/fleettracking/esim/getSimPurchasedCount?serviceprovider=${this.header}&days=${this.days}&fromdate=${this.fromDate}&todate=${this.toDate}`;
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      if (res.length == 0) {
        this.endis = false;
        this.endisMapped = false;
      } else {
        this.endis = true;
        this.endisMapped = true;
        this.sensoriseData = res;
      }
      this.loader = false;
      this.colorScheme = "scheme01";
      this.chart.dataSource = res;

      this.chart.xAxis = {
        position: "bottom",
        dataField: "status",
        gridLines: { visible: false },
      };
      this.chart.xAxis.textRotationAngle = 300;
      this.chart.seriesGroups = [
        {
          type: "column",
          columnsGapPercent: 30,
          columnsMaxWidth: 40,
          valueAxis: {
            title: { text: "Device Count" },
          },
          series: [
            {
              dataField: "count1",
              displayText: "Count",
              labels: {
                visible: true,
                verticalAlignment: "top",
                offset: { x: 0, y: -20 },
              },
              formatFunction: function (value: any) {
                return value;
              },
            },
          ],
        },
      ];
    });
  }
}
