import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertController, LoadingController, Platform } from "@ionic/angular";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { ExportExcelService } from "src/app/services/export-excel.service";
import { serverUrl } from "src/environments/environment";
import { NgModel } from "@angular/forms"; // Import NgModel
import * as XLSX from "xlsx";

@Component({
  selector: "app-zoho-books-products",
  templateUrl: "./zoho-books-products.page.html",
  styleUrls: ["./zoho-books-products.page.scss"],
})
export class ZohoBooksProductsPage implements OnInit {
  EsimzohobookForm: FormGroup;
  BulkEsimzohobookForm: FormGroup;
  @ViewChild("myGrid", { static: false }) myGrid: any;
  columns: any;
  source: { localdata: any };
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  myPlatform: any;
  tableData: any;
  provider: any;
  status: any;
  books = [];
  result: any;
  selectedItem: any;
  companyId = localStorage.getItem("userName");
  selectedRow: any;
  product: any;
  hideSerialNo: boolean = false;
  dealer: any;
  selectedprovider: any;
  editvalue: any;
  name: boolean = false;
  willDownload = false;
  dataString: any;
  output = "";
  file;
  show: boolean = false;
  imeiIssues = [];
  excellKeyValid: boolean = false;
  selecteddealer: any;
  Plans = [
    "1 Year",
    "2 Year",
    "3 Year",
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

  constructor(
    public loadingController: LoadingController,
    private ajaxService: AjaxService,
    private router: Router,
    private alertController: AlertController,
    private commonService: CommonService,
    private formBuilder: FormBuilder,
    private platform: Platform,
    private ete: ExportExcelService
  ) {}

  createform() {
    this.EsimzohobookForm = this.formBuilder.group({
      serviceprovider: ["", Validators.required],
      cardstatus: ["", Validators.required],
      productname: [{ value: "", disabled: true }, Validators.required],
      dealername: ["", Validators.required],
      Purchaserate: ["", Validators.required],
      description: [""],
      rate: ["", Validators.required],
      validityperiod: ["", Validators.required],
    });
    this.BulkEsimzohobookForm = this.formBuilder.group({
      fileupload: ["", Validators.required],
    });
    this.EsimzohobookForm.get("serviceprovider").valueChanges.subscribe(
      (value) => {
        if (value) {
          this.EsimzohobookForm.get("productname").enable();
          this.getproductname(value);
        } else {
          this.EsimzohobookForm.get("productname").disable();
          this.books = [];
        }
      }
    );
  }

  clear() {
    this.EsimzohobookForm.patchValue({
      serviceprovider: "",
      cardstatus: "",
      productname: "",
      dealername: "",
      Purchaserate: "",
      description: "",
      rate: "",
      validityperiod: "",
    });
    this.hideSerialNo = false;
  }

  fileclear() {
    this.BulkEsimzohobookForm.patchValue({
      fileupload: "",
    });
    this.selecteddealer = undefined;
  }

  getdealer() {
    const url = serverUrl.web + "/esim/getDealer";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.dealer = res;
    });
  }

  getserviceprovider() {
    const url = serverUrl.web + "/esim/getServiceProvider";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.provider = res;
    });
  }

  getcardstatus() {
    const url = serverUrl.web + "/esim/getEsimCardStatus";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.status = res;
    });
  }

  getproductname(serviceProvider) {
    this.commonService.presentLoader();
    const url =
      serverUrl.web +
      "/esim/getZohoBooksProducts?serviceprovider=" +
      serviceProvider;
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.books = res;
      this.commonService.dismissLoader();
    });
  }

  onFileChange(ev) {
    var fileName = ev.srcElement.files[0];
    this.name = fileName.name.includes(".xlsx");
    if (this.name == true) {
      this.dataString = [];
      let workBook = null;
      let jsonData = null;
      const reader = new FileReader();
      const file = ev.srcElement.files[0];
      reader.onload = (event) => {
        const data = reader.result;
        workBook = XLSX.read(data, { type: "binary" });
        jsonData = workBook.SheetNames.reduce((initial, name) => {
          const sheet = workBook.Sheets[name];
          initial[name] = XLSX.utils.sheet_to_json(sheet);
          return initial;
        }, {});

        let json = [];
        for (let i = 0; i < jsonData["Sheet1"].length; i++) {
          let newData = {};
          newData["serviceprovider"] =
            jsonData["Sheet1"][i]["serviceprovider"].toString();
          newData["cardstatus"] =
            jsonData["Sheet1"][i]["cardstatus"].toString();
          newData["productid"] = jsonData["Sheet1"][i]["productid"].toString();
          newData["productname"] =
            jsonData["Sheet1"][i]["productname"].toString();
          newData["purchaserate"] =
            jsonData["Sheet1"][i]["purchaserate"].toString();
          newData["rate"] = jsonData["Sheet1"][i]["rate"].toString();
          if (jsonData["Sheet1"][i]["description"] == undefined) {
            newData["description"] = "";
          } else {
            newData["description"] =
              jsonData["Sheet1"][i]["description"].toString();
          }
          newData["validityperiod"] =
            jsonData["Sheet1"][i]["validityperiod"].toString();
          json.push(newData);
        }
        this.dataString = json;
        this.output = this.dataString.slice(0, 300).concat("...");
      };
      reader.readAsBinaryString(file);
    } else {
      this.commonService.showConfirm("Please insert only excel file (.xlsx)");
    }
  }

  selectdealer(ev) {
    this.selecteddealer = ev.value;
    console.log(this.selectedItem);
  }

  submitwithfile() {
    if (this.selecteddealer != undefined) {
      var url =
        serverUrl.web +
        "/esim/saveZohoBooksBulkProducts?createdby=" +
        localStorage.getItem("userName") +
        "&dealername=" +
        this.selecteddealer;
      this.ajaxService
        .ajaxPostWithBody(url, this.dataString)
        .subscribe((res) => {
          if (res.message == "Zoho Book Product Details Saved Successfully") {
            this.commonService.showConfirm(res.message);
            this.selecteddealer = undefined;
            this.fileclear();
            this.clear();
            this.getdatas();
          } else {
            this.commonService.showConfirm(res.message);
            this.selecteddealer = undefined;
          }
        });
    } else {
      this.commonService.showConfirm("Please Select the Dealer");
    }
  }

  // checkprovider(ev) {
  //   this.selectedprovider = ev.value;
  //   console.log(this.selectedItem);
  //   this.getproductname();
  // }

  getdatas() {
    this.commonService.presentLoader();
    var url = serverUrl.web + "/esim/getZohoBooksProductsDetails";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.commonService.dismissLoader();

      this.tableData = res;

      this.renderer = (row: number, column: any, value: string) => {
        if (value == "") {
          return "--";
        } else if (value == "0.0") {
          return (
            '<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
            0.0 +
            "</span>"
          );
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
          text: "Dealer Name",
          datafield: "dealername",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 130,
          editable: true,
        },
        {
          text: "Service Provider",
          datafield: "serviceprovider",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 130,
          editable: true,
        },
        {
          text: "Card Status",
          datafield: "cardstatus",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 130,
        },
        {
          text: "Product ID",
          datafield: "productid",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 140,
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
          text: "Descripton",
          datafield: "description",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 150,
        },
        {
          text: "Purchase Rate",
          datafield: "purchaserate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 110,
        },
        {
          text: "Rate",
          datafield: "rate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 90,
        },
        {
          text: "Validity Period",
          datafield: "validityperiod",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 120,
        },
        {
          text: "Created By",
          datafield: "createdby",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 90,
        },
        {
          text: "",
          datafield: "Edit Detail",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 80,
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

  myGridOnRowSelect(event: any): void {
    this.selectedRow = event.args.row.bounddata;
  }

  setValue() {
    this.hideSerialNo = true;
    this.commonService.presentLoader();
    const url =
      serverUrl.web +
      "/esim/getZohoBooksProducts?serviceprovider=" +
      this.selectedRow.serviceprovider;
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.editvalue = res;
      this.commonService.dismissLoader();

      this.EsimzohobookForm.patchValue({
        serviceprovider: this.selectedRow.serviceprovider,
        cardstatus: this.selectedRow.cardstatus,
        dealername: this.selectedRow.dealername,
        description: this.selectedRow.description,
        Purchaserate: this.selectedRow.purchaserate,
        rate: this.selectedRow.rate,
        validityperiod: this.selectedRow.validityperiod,
      });

      let data = this.editvalue.filter(
        (f) => f.itemname == this.selectedRow.productname
      );
      this.product = data[0];
    });
  }

  selectvalue(ev) {
    this.selectedItem = ev.value;
    console.log(this.selectedItem);

    // Set input field values based on the selected product
    this.EsimzohobookForm.patchValue({
      Purchaserate: this.selectedItem.purchaserate,
      rate: this.selectedItem.rate,
      description: this.selectedItem.description,
    });
  }

  submit() {
    var data;
    data = {
      id: "",
      dealername: this.EsimzohobookForm.value.dealername,
      serviceprovider: this.EsimzohobookForm.value.serviceprovider,
      cardstatus: this.EsimzohobookForm.value.cardstatus,
      productname: this.selectedItem.itemname,
      productid: this.selectedItem.itemid,
      description: this.EsimzohobookForm.value.description,
      purchaserate: this.EsimzohobookForm.value.Purchaserate.toString(), // Use uppercase 'P' for consistency
      rate: this.EsimzohobookForm.value.rate.toString(),
      validityperiod: this.EsimzohobookForm.value.validityperiod,
    };
    var url =
      serverUrl.web +
      "/esim/saveZohoBooksProducts?createdby=" +
      localStorage.getItem("userName");
    this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
      if (res.message == "Zoho Book Product Details Saved Successfully") {
        this.commonService.showConfirm(res.message);
        this.clear();
        this.getdatas();
      } else {
        this.commonService.showConfirm(res.message);
      }
    });
    this.myGrid.clearselection();
  }

  edit() {
    var data;
    data = {
      id: this.selectedRow.id.toString(),
      dealername: this.EsimzohobookForm.value.dealername,
      serviceprovider: this.EsimzohobookForm.value.serviceprovider,
      cardstatus: this.EsimzohobookForm.value.cardstatus,
      productname: this.product.itemname,
      productid: this.product.itemid,
      description: this.EsimzohobookForm.value.description,
      purchaserate: this.EsimzohobookForm.value.Purchaserate.toString(), // Use uppercase 'P' for consistency
      rate: this.EsimzohobookForm.value.rate.toString(),
      validityperiod: this.EsimzohobookForm.value.validityperiod,
    };
    var url =
      serverUrl.web +
      "/esim/saveZohoBooksProducts?createdby=" +
      localStorage.getItem("userName");
    this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
      if (res.message == "Zoho Book Product Details Saved Successfully") {
        this.commonService.showConfirm(res.message);
        this.clear();
        this.getdatas();
      } else {
        this.commonService.showConfirm(res.message);
      }
    });
    this.myGrid.clearselection();
    this.hideSerialNo = false;
  }
  ngAfterViewInit() {
    this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
  }
  newfunc() {
    let data = this.tableData;
    console.log(this.myGrid);

    let coloumnArray = [];

    this.myGrid.attrColumns.map((p) => {
      coloumnArray.push(p.datafield);
    });

    for (let i = 0; i < data.length; i++) {
      let k = Object.keys(data[i]);
      for (let j = 0; j < k.length; j++) {
        if (coloumnArray.includes(k[j]) == false) {
          delete data[i][k[j].toString()];
        }
      }
    }

    let forExcel = [];
    data.map((val) => {
      let newArray = Object.values(val);
      forExcel.push(newArray);
    });

    var Header = Object.keys(data[0]);

    let reportData = {
      title: "Zoho Products",
      data: forExcel,
      headers: Header,
    };
    this.ete.exportExcel(reportData);
  }

  ngOnInit() {
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
    this.createform();
    this.getserviceprovider();
    this.getdealer();
    this.getcardstatus();
  }

  ionViewWillEnter() {
    this.clear();
    this.getdatas();
  }
}
