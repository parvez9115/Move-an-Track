import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ModalController, Platform } from "@ionic/angular";
import { jqxGridComponent } from "jqwidgets-ng/jqxgrid";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";

@Component({
  selector: "app-add-bus-stop",
  templateUrl: "./add-bus-stop.component.html",
  styleUrls: ["./add-bus-stop.component.scss"],
})
export class AddBusStopComponent implements OnInit {
  @ViewChild("myGrid", { static: false }) myGrid: jqxGridComponent;
  selectedRow: any = [];
  source: any;
  renderer: any;
  dataAdapter: any;
  columns: any;
  @Input() value;
  companyDetail: { branchID: string; companyID: string; userId: string };
  tableData: any;
  myPlatform: string;
  result: any;

  constructor(
    private modalController: ModalController,
    public ajaxService: AjaxService,
    private platform: Platform,
    private commonService: CommonService
  ) {}

  cancelBtn() {
    this.modalController.dismiss();
  }

  getData() {
    const url =
      serverUrl.web +
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
      this.renderer = (row: number, column: any, value: string) => {
        if (value == "" || null || undefined) {
          return "----";
        } else {
          return (
            '<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto"  >' +
            value +
            "</span>"
          );
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

  myGridOnRowSelect(event: any): void {
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
      data.push({
        ...d,
        tripid: id,
        branchid: localStorage.getItem("corpId"),
        createdby: localStorage.getItem("corpId"),
        schoolid: localStorage.getItem("corpId"),
        routeid: this.value.tripId.toString(),
      });
    });

    const url = serverUrl.web + "/routetrip/addDriverBusstop";
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
}
