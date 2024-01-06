import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertController, LoadingController, Platform } from "@ionic/angular";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { ExportExcelService } from "src/app/services/export-excel.service";
import { serverUrl } from "src/environments/environment";

@Component({
  selector: "app-zoho-books-customers",
  templateUrl: "./zoho-books-customers.page.html",
  styleUrls: ["./zoho-books-customers.page.scss"],
})
export class ZohoBooksCustomersPage implements OnInit {
  Esimzohocustomer: FormGroup;
  @ViewChild("myGrid", { static: false }) myGrid: any;
  columns: any;
  source: { localdata: any };
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  myPlatform: any;
  tableData: any;
  provider: any;
  books = [];
  result: any;
  selectedItem: any;
  companyId = localStorage.getItem("userName");
  selectedRow: any;
  hideSerialNo: boolean = false;
  dealer: any;
  product: any;

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
    this.Esimzohocustomer = this.formBuilder.group({
      dealername: ["", Validators.required],
      customername: ["", Validators.required],
    });
  }

  clear() {
    this.Esimzohocustomer.patchValue({
      dealername: "",
      customername: "",
    });
    this.hideSerialNo = false;
  }

  getdealer() {
    const url = serverUrl.web + "/esim/getDealer";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.dealer = res;
    });
  }

  getcustomer() {
    const url = serverUrl.web + "/esim/getZohoBooksCustomers";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.books = res;
    });
  }

  getdatas() {
    this.commonService.presentLoader();
    var url = serverUrl.web + "/esim/getZohoBooksCustomerDetails";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.commonService.dismissLoader();
      this.tableData = res;
      this.renderer = (row: number, column: any, value: string) => {
        if (value == "" || null || undefined || value == ",") {
          return "--";
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
          width: 240,
          editable: true,
        },
        {
          text: "Customer ID",
          datafield: "customerid",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 240,
        },
        {
          text: "Customer Name",
          datafield: "customername",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 240,
        },

        {
          text: "Created By",
          datafield: "createdby",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 240,
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
      title: "Zoho Customers",
      data: forExcel,
      headers: Header,
    };
    this.ete.exportExcel(reportData);
  }

  setValue() {
    this.hideSerialNo = true;
    this.Esimzohocustomer.patchValue({
      dealername: this.selectedRow.dealername,
      // productname: this.selectedRow.productname,
    });

    let data = this.books.filter(
      (f) => f.customername == this.selectedRow.customername
    );
    this.product = data[0];
  }

  selectvalue(ev) {
    this.selectedItem = ev.value;
    console.log(this.selectedItem);
  }

  submit() {
    var data;
    data = {
      id: "",
      dealername: this.Esimzohocustomer.value.dealername,
      customername: this.selectedItem.customername,
      customerid: this.selectedItem.customerId,
    };
    var url =
      serverUrl.web +
      "/esim/saveZohoBooksCustomers?createdby=" +
      localStorage.getItem("userName");
    this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
      if (res.message == "Zoho Book Customer Details Saved Successfully") {
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
      dealername: this.Esimzohocustomer.value.dealername,
      customername: this.product.customername,
      customerid: this.product.customerId,
    };
    var url =
      serverUrl.web +
      "/esim/saveZohoBooksCustomers?createdby=" +
      localStorage.getItem("userName");
    this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
      if (res.message == "Zoho Book Customer Details Saved Successfully") {
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

  ngOnInit() {
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
    this.createform();
    this.getdealer();
    this.getcustomer();
  }

  ionViewWillEnter() {
    this.clear();
    this.getdatas();
  }
}
