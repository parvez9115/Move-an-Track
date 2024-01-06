import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertController, ModalController, Platform } from "@ionic/angular";
import { jqxGridComponent } from "jqwidgets-ng/jqxgrid";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";

@Component({
  selector: "app-edit-generate-invoice",
  templateUrl: "./edit-generate-invoice.component.html",
  styleUrls: ["./edit-generate-invoice.component.scss"],
})
export class EditGenerateInvoiceComponent implements OnInit {
  generateForm: FormGroup;
  @ViewChild("myGrid", { static: false }) myGrid: any;
  @Input() value;
  @Input() header;
  source: { localdata: any };
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  columns: any;
  myPlatform: any;
  selectedRow: any;
  tableData: any;
  page = [];
  savedata: any;

  constructor(
    private ajaxService: AjaxService,
    private modalController: ModalController,
    public platform: Platform,
    private alertController: AlertController,
    private commonService: CommonService,
    private formBuilder: FormBuilder
  ) {}

  cancelBtn() {
    this.modalController.dismiss();
  }

  createForm() {
    this.generateForm = this.formBuilder.group({
      userid: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  clear() {
    this.generateForm.patchValue({
      userid: "",
      password: "",
    });
  }

  getdatas() {
    this.tableData = this.value;
    this.page = ["100", "200", "500", "1000"];
    this.renderer = (row: number, column: any, value: string) => {
      if (value == "" || null || undefined || value == ",") {
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
    this.columns = [
      {
        text: "Service Provider",
        datafield: "serviceprovider",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 120,
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
        text: "Purchase Rate",
        datafield: "purchaserate",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 105,
      },
      {
        text: "Rate",
        datafield: "rate",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 80,
      },
      {
        text: "No of Units",
        datafield: "noofunits",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 100,
      },
      {
        text: "Total Rate",
        datafield: "totalrate",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 100,
      },
    ];
  }

  async deleteModel(row) {
    if (this.selectedRow) {
      const alert = await this.alertController.create({
        header: " Delete",
        backdropDismiss: false,
        message: "Are you sure you want to remove?",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            handler: (data) => {
              this.myGrid.clearselection();
              this.selectedRow = "";
            },
          },
          {
            text: "Ok",
            handler: (data) => {
              this.deleteAnalogRow(row);
            },
          },
        ],
      });
      await alert.present();
    } else {
      this.commonService.showConfirm("Please select a row to remove");
    }
  }

  deleteAnalogRow(row: any) {
    this.tableData.splice(row, 1);
    this.source = { localdata: this.tableData };
    console.log(this.source);
    this.dataAdapter = new jqx.dataAdapter(this.source);
    this.myGrid.updatebounddata();
    this.myGrid.clearselection();
    this.selectedRow = "";
  }

  myGridOnRowSelect(event: any): void {
    this.selectedRow = event.args.row;
  }

  // submitBtn() {
  //   this.commonService.presentLoader();
  //   const url =
  //     serverUrl.web +
  //     "/esim/saveZohoSalesInvoiceHeader?dealerid=" +
  //     this.header.dealerid +
  //     "&invoicedate=" +
  //     this.header.invoicedate +
  //     "&noofunits=" +
  //     this.header.noofunits +
  //     "&createdby=" +
  //     localStorage.getItem("userName") +
  //     "&userid=" +
  //     this.generateForm.value.userid +
  //     "&password=" +
  //     this.generateForm.value.password;
  //   this.ajaxService.ajaxPostWithBody(url, this.tableData).subscribe((res) => {
  //     this.commonService.dismissLoader();
  //     if (res.message == "Sales Invoice Saved Successfully") {
  //       this.clear();
  //       this.modalController.dismiss({
  //         data: "Sales Invoice Saved Successfully",
  //       });
  //     } else {
  //       this.commonService.showConfirm(res.message);
  //     }
  //   });
  // }

  submitBtn() {
    let data = this.tableData;
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      arr.push({
        serviceprovider:
          this.myGrid["attrSource"]["originaldata"][i].serviceprovider,
        cardstatus: this.myGrid["attrSource"]["originaldata"][i].cardstatus,
        productid: this.myGrid["attrSource"]["originaldata"][i].productid,
        productname: this.myGrid["attrSource"]["originaldata"][i].productname,
        purchaserate: parseInt(
          this.myGrid["attrSource"]["originaldata"][i].purchaserate
        ),
        rate: parseInt(this.myGrid["attrSource"]["originaldata"][i].rate),
        noofunits: parseInt(
          this.myGrid["attrSource"]["originaldata"][i].noofunits
        ),
        description: this.myGrid["attrSource"]["originaldata"][i].description,
        pagename: "Sales",
      });
    }

    this.commonService.presentLoader();
    const url =
      serverUrl.web +
      "/esim/saveZohoSalesInvoiceHeader?dealerid=" +
      this.header.dealerid +
      "&headerid=" +
      this.header.headerid +
      "&invoicedate=" +
      this.header.invoicedate +
      "&createdby=" +
      localStorage.getItem("userName") +
      "&userid=" +
      this.generateForm.value.userid +
      "&password=" +
      this.generateForm.value.password;
    this.ajaxService.ajaxPostWithBody(url, arr).subscribe((res) => {
      this.commonService.dismissLoader();
      if (res.message == "Invoice Details Saved Successfully") {
        this.clear();
        this.modalController.dismiss({
          data: "Invoice Details Saved Successfully",
        });
      } else {
        this.commonService.showConfirm(res.message);
      }
    });
  }

  async confirmModel() {
    const alert = await this.alertController.create({
      header: "Confirm",
      backdropDismiss: false,
      message: "Are you sure want to Submit?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: (data) => {},
        },
        {
          text: "Ok",
          handler: (data) => {
            this.submitBtn();
          },
        },
      ],
    });
    await alert.present();
  }

  ngAfterViewInit() {
    this.myGrid.horizontalscrollbarstep(["70"]);
    this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
  }

  ngOnInit() {
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
    this.createForm();
    this.getdatas();
  }
}
