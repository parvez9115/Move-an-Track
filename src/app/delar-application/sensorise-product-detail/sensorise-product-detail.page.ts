import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Platform } from "@ionic/angular";
import { jqxGridComponent } from "jqwidgets-ng/jqxgrid";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { ExportExcelService } from "src/app/services/export-excel.service";
import { serverUrl } from "src/environments/environment";

@Component({
  selector: "app-sensorise-product-detail",
  templateUrl: "./sensorise-product-detail.page.html",
  styleUrls: ["./sensorise-product-detail.page.scss"],
})
export class SensoriseProductDetailPage implements OnInit {
  productdetails: FormGroup;
  @ViewChild("myGrid", { static: false }) myGrid: jqxGridComponent;
  columns: any;
  source: { localdata: any };
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  myPlatform: any;
  selectedRow: any;
  tableData: any;
  button: boolean = false;
  hideSerialNo: boolean = false;
  books = [];
  selectedItem: any;
  editvalue: any;
  product: any;

  constructor(
    private commonService: CommonService,
    private formBuilder: FormBuilder,
    private ajaxService: AjaxService,
    private ete: ExportExcelService,
    public platform: Platform
  ) {}

  createForm() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    var todaytime = now.getHours() + ":" + now.getMinutes();
    this.productdetails = this.formBuilder.group({
      actionname: ["", Validators.required],
      productname: ["", Validators.required],
      zohoproductname: ["", Validators.required],
      price: ["", Validators.required],
      latefees: ["", Validators.required],
    });
  }

  clear() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    var todaytime = now.getHours() + ":" + now.getMinutes();
    this.hideSerialNo = false;
    this.productdetails.patchValue({
      actionname: "",
      productname: "",
      zohoproductname: "",
      price: "",
      latefees: "",
    });
  }

  add() {
    this.button = true;
    var data;
    data = {
      id: "",
      actionname: this.productdetails.value.actionname.toString(),
      productname: this.productdetails.value.productname.toString(),

      zohoproductid: this.selectedItem.itemid.toString(),
      zohoproductname: this.selectedItem.itemname.toString(),
      price: this.productdetails.value.price.toString(),
      latefees: this.productdetails.value.latefees.toString(),
      createdby: localStorage.getItem("userName"),
    };

    const url = serverUrl.web + "/sensorise/saveSensoriseProductDetails";
    this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
      if (res.message == "Sensorise Product Saved Successfully") {
        this.commonService.showConfirm(res.message);
        this.clear();
        this.button = false;
        this.getdatas();
      } else {
        this.commonService.showConfirm(res.message);
        this.button = false;
      }
    });
  }

  setValue() {
    this.button = false;
    this.hideSerialNo = true;
    this.commonService.presentLoader();
    const url = serverUrl.web + "/sensorise/getSensoriseProducts";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.editvalue = res;
      this.commonService.dismissLoader();
      this.productdetails.patchValue({
        actionname: this.selectedRow.actionname,
        productname: this.selectedRow.productname,
        price: this.selectedRow.price,
        latefees: this.selectedRow.latefees,
      });
      let data = this.editvalue.filter(
        (f) => f.itemname == this.selectedRow.zohoproductname
      );
      this.product = data[0];
    });
  }

  edit() {
    this.button = true;
    var data;
    data = {
      id: this.selectedRow.id.toString(),
      actionname: this.productdetails.value.actionname.toString(),
      productname: this.productdetails.value.productname.toString(),
      zohoproductid: this.product.itemid.toString(),
      zohoproductname: this.product.itemname.toString(),
      price: this.productdetails.value.price.toString(),
      latefees: this.productdetails.value.latefees.toString(),
      createdby: localStorage.getItem("userName"),
    };

    const url = serverUrl.web + "/sensorise/saveSensoriseProductDetails";
    this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
      if (res.message == "Sensorise Product Saved Successfully") {
        this.commonService.showConfirm(res.message);
        this.clear();
        this.button = false;
        this.getdatas();
      } else {
        this.commonService.showConfirm(res.message);
        this.button = false;
      }
    });
  }

  getdatas() {
    this.commonService.presentLoader();
    var url = serverUrl.web + "/sensorise/getSensoriseProductDetail";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.tableData = res;
      this.myGrid.clearselection();
      this.selectedRow = "";
      this.commonService.dismissLoader();

      this.renderer = (row: number, column: any, value: string) => {
        if (
          value === "" ||
          value === null ||
          value === undefined ||
          value === ","
        ) {
          return "---";
        } else {
          return (
            '<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
            value +
            "</span>"
          );
        }
      };

      this.source = { localdata: this.tableData };
      this.dataAdapter = new jqx.dataAdapter(this.source);
      this.columns = [
        {
          text: "Action",
          datafield: "actionname",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 200,
        },
        {
          text: "Product Name",
          datafield: "productname",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 400,
        },
        {
          text: "Zoho Product Name",
          datafield: "zohoproductname",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 400,
        },
        {
          text: "Product Price",
          datafield: "price",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 105,
        },
        {
          text: "Late Fees",
          datafield: "latefees",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 105,
        },

        {
          text: "Create Date",
          datafield: "createddate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 110,
        },
        {
          text: "Created by",
          datafield: "createdby",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 110,
        },
        {
          text: "",
          datafield: "Edit Detail",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 60,
          cellsrenderer: (): string => {
            return this.myPlatform == "desktop"
              ? "Edit"
              : "<button>Edit</button>";
          },
          buttonclick: (row): void => {
            this.setValue();
          },
        },
      ];
    });
  }

  getproductname() {
    const url = serverUrl.web + "/sensorise/getSensoriseProducts";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.books = res;
    });
  }

  selectvalue(ev) {
    this.selectedItem = ev.value;
    console.log(this.selectedItem);

    this.productdetails.patchValue({
      price: this.selectedItem.purchaserate,
    });
  }

  myGridOnRowSelect(event: any): void {
    this.selectedRow = event.args.row.bounddata;
  }
  ngAfterViewInit() {
    this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
  }

  ngOnInit() {
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
    this.createForm();
  }

  ionViewWillEnter() {
    this.getdatas();
    this.clear();
    this.getproductname();
  }
}
