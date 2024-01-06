import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";

@Component({
  selector: "app-view-details",
  templateUrl: "./view-details.component.html",
  styleUrls: ["./view-details.component.scss"],
})
export class ViewDetailsComponent implements OnInit {
  tableData: any;
  page = [];
  dataAdapter: any;
  columns: any;
  selectedRow: any;
  show: boolean = false;
  @Input() value;
  @Input() pagetitle;
  source: { localdata: any };
  renderer: (row: number, column: any, value: string) => string;
  constructor(
    private ajaxService: AjaxService,
    private router: Router,
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private modalController: ModalController
  ) {}

  cancelBtn() {
    this.modalController.dismiss();
  }

  getdatas() {
    var url =
      serverUrl.web +
      "/esim/getesimInvoiceDetails?pagename=" +
      this.pagetitle +
      "&approvedid=" +
      this.value.approvedid;
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.tableData = res;
      this.page = ["100", "200", "500", "1000"];
      this.renderer = (row: number, column: any, value: string) => {
        if (value == "") {
          return (
            '<span style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
            0 +
            "</span>"
          );
        } else {
          return (
            '<span style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
            value +
            "</span>"
          );
        }
      };
      this.source = { localdata: this.tableData };
      this.dataAdapter = new jqx.dataAdapter(this.source);
      if (this.pagetitle == "Sales") {
        this.columns = [
          {
            text: "Service Provider",
            datafield: "serviceprovider",
            cellsrenderer: this.renderer,
            cellsalign: "center",
            align: "center",
            width: 110,
          },
          {
            text: "Product Id",
            datafield: "productid",
            cellsrenderer: this.renderer,
            cellsalign: "center",
            align: "center",
            width: 130,
          },
          {
            text: "Product Name",
            datafield: "productname",
            cellsrenderer: this.renderer,
            cellsalign: "center",
            align: "center",
            width: 280,
          },
          {
            text: "No of Units",
            datafield: "noofunits",
            cellsrenderer: this.renderer,
            cellsalign: "center",
            align: "center",
            width: 110,
          },
          {
            text: "Purchase Rate",
            datafield: "purchaserate",
            cellsrenderer: this.renderer,
            cellsalign: "center",
            align: "center",
            width: 120,
          },
          {
            text: "Rate",
            datafield: "rate",
            cellsrenderer: this.renderer,
            cellsalign: "center",
            align: "center",
            width: 120,
          },
        ];
      } else if (this.pagetitle == "Renewal") {
        this.columns = [
          {
            text: "Service Provider",
            datafield: "serviceprovider",
            cellsrenderer: this.renderer,
            cellsalign: "center",
            align: "center",
            width: 110,
          },
          {
            text: "IMEI",
            datafield: "imei",
            cellsrenderer: this.renderer,
            cellsalign: "center",
            align: "center",
            width: 110,
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
            text: "Product Id",
            datafield: "productid",
            cellsrenderer: this.renderer,
            cellsalign: "center",
            align: "center",
            width: 130,
          },
          {
            text: "Product Name",
            datafield: "productname",
            cellsrenderer: this.renderer,
            cellsalign: "center",
            align: "center",
            width: 280,
          },
          {
            text: "Purchase Rate",
            datafield: "purchaserate",
            cellsrenderer: this.renderer,
            cellsalign: "center",
            align: "center",
            width: 120,
          },
          {
            text: "Rate",
            datafield: "rate",
            cellsrenderer: this.renderer,
            cellsalign: "center",
            align: "center",
            width: 120,
          },
        ];
      } else {
        this.columns = [
          {
            text: "Service Provider",
            datafield: "serviceprovider",
            cellsrenderer: this.renderer,
            cellsalign: "center",
            align: "center",
            width: 110,
          },
          {
            text: "IMEI",
            datafield: "imei",
            cellsrenderer: this.renderer,
            cellsalign: "center",
            align: "center",
            width: 110,
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
            text: "Product Id",
            datafield: "productid",
            cellsrenderer: this.renderer,
            cellsalign: "center",
            align: "center",
            width: 130,
          },
          {
            text: "Product Name",
            datafield: "productname",
            cellsrenderer: this.renderer,
            cellsalign: "center",
            align: "center",
            width: 280,
          },
          {
            text: "Purchase Rate",
            datafield: "purchaserate",
            cellsrenderer: this.renderer,
            cellsalign: "center",
            align: "center",
            width: 120,
          },
          {
            text: "Rate",
            datafield: "rate",
            cellsrenderer: this.renderer,
            cellsalign: "center",
            align: "center",
            width: 120,
          },
        ];
      }
    });
  }

  myGridOnRowSelect(event: any): void {
    this.selectedRow = event.args.row;
    this.show = true;
  }

  ngOnInit() {
    this.getdatas();
  }
}
