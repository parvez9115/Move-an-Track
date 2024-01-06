import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertController, ModalController, Platform } from "@ionic/angular";
import { jqxGridComponent } from "jqwidgets-ng/jqxgrid";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";

@Component({
  selector: "app-generate-invoice",
  templateUrl: "./generate-invoice.component.html",
  styleUrls: ["./generate-invoice.component.scss"],
})
export class GenerateInvoiceComponent implements OnInit {
  generateForm: FormGroup;
  @ViewChild("myGrid", { static: false }) myGrid: any;
  @Input() value;
  @Input() head;
  source: { localdata: any };
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  columns: any;
  myPlatform: any;
  selectedRow: any;
  tableData: any;
  page = [];
  savedata: any;
  imei: any;
  visible: boolean = false;
  productnamelist: any;
  product: any;
  currentdate: string;

  constructor(
    private ajaxService: AjaxService,
    private modalController: ModalController,
    public platform: Platform,
    private alertController: AlertController,
    private commonService: CommonService,
    private formBuilder: FormBuilder
  ) {}

  cancelBtn() {
    this.modalController.dismiss({ data: "refresh" });
  }

  createForm() {
    this.generateForm = this.formBuilder.group({
      userid: ["", Validators.required],
      password: ["", Validators.required],
      imei: [""],
      productnamelist: [""],
    });
  }

  clear() {
    this.generateForm.patchValue({
      userid: "",
      password: "",
    });
  }

  dismiss() {
    this.visible = false;
    this.generateForm.patchValue({
      imei: "",
      productnamelist: "",
    });
  }

  getdatas() {
    this.tableData = this.value;
    this.renderer = (row: number, column: any, value: string) => {
      if (value == "") {
        return "--";
      } else if (value == "0") {
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
    console.log(this.tableData);
    this.dataAdapter = new jqx.dataAdapter(this.source);
    this.columns = [
      {
        text: "IMEI",
        datafield: "imei",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 110,
      },
      {
        text: "Service Provider",
        datafield: "serviceprovider",
        cellsrenderer: this.renderer,
        cellsalign: "center",
        align: "center",
        width: 120,
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
        width: 50,
      },
      {
        text: "",
        datafield: "Edit",
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
      {
        text: "",
        datafield: "delete",
        columntype: "button",
        cellsalign: "center",
        align: "center",
        width: 60,
        cellsrenderer: (): string => {
          return this.myPlatform == "desktop"
            ? "Delete"
            : "<button>Delete</button>";
        },
        buttonclick: (row): void => {
          this.deleteModel(row);
        },
      },
    ];
  }

  setValue() {
    const url =
      serverUrl.web +
      "/esim/getDealerProduct?dealername=" +
      this.head.dealerid +
      "&serviceprovider=" +
      this.selectedRow.serviceprovider;
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.productnamelist = res;
      this.visible = true;
      this.generateForm.patchValue({
        imei: this.selectedRow.imei,
      });

      let data = this.productnamelist.filter(
        (f) => f.itemname == this.selectedRow.productname
      );
      this.product = data[0];
    });
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
    this.myGrid.updatebounddata();
    this.myGrid.clearselection();
    this.selectedRow = "";
  }

  myGridOnRowSelect(event: any): void {
    this.selectedRow = event.args.row.bounddata;
  }

  save() {
    const productValue = this.generateForm.get("productnamelist").value;
    const selectedIndex = this.tableData.findIndex(
      (row) => row.imei === this.selectedRow.imei
    );
    this.tableData[selectedIndex].validityperiod = productValue.validityperiod;
    this.tableData[selectedIndex].productid = productValue.itemid;
    this.tableData[selectedIndex].productname = productValue.itemname;
    this.tableData[selectedIndex].rate = productValue.rate;
    this.tableData[selectedIndex].purchaserate = productValue.purchaserate;
    this.tableData[selectedIndex].description = productValue.description;
    this.dismiss();
    this.myGrid.updatebounddata();
    console.log(this.tableData);
  }

  submitBtn() {
    let data = this.tableData;
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      arr.push({
        requestid: this.myGrid["attrSource"]["originaldata"][i].requestid,
        serviceprovider:
          this.myGrid["attrSource"]["originaldata"][i].serviceprovider,
        imei: this.myGrid["attrSource"]["originaldata"][i].imei,
        renewalno: this.myGrid["attrSource"]["originaldata"][i].renewalno,
        cardstatus: this.myGrid["attrSource"]["originaldata"][i].cardstatus,
        productid: this.myGrid["attrSource"]["originaldata"][i].productid,
        productname: this.myGrid["attrSource"]["originaldata"][i].productname,
        purchaserate: parseInt(
          this.myGrid["attrSource"]["originaldata"][i].purchaserate
        ),
        rate: parseInt(this.myGrid["attrSource"]["originaldata"][i].rate),
        description: this.myGrid["attrSource"]["originaldata"][i].description,
        validityperiod:
          this.myGrid["attrSource"]["originaldata"][i].validityperiod,
        pagename: "Renewal",
      });
    }
    this.commonService.presentLoader();
    const url =
      serverUrl.web +
      "/esim/saveEsimInvoiceApproved?dealername=" +
      this.head.dealerid +
      "&username=" +
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
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    this.currentdate = today;
    this.createForm();
    this.getdatas();
  }
}
