import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  AlertController,
  IonContent,
  ModalController,
  Platform,
} from "@ionic/angular";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";

@Component({
  selector: "app-backend-server-credential",
  templateUrl: "./backend-server-credential.page.html",
  styleUrls: ["./backend-server-credential.page.scss"],
})
export class BackendServerCredentialPage implements OnInit {
  arrow: boolean = false;
  backendForm: FormGroup;
  button: boolean = false;
  @ViewChild("myGrid", { static: false }) myGrid: any;
  tableData: any;
  selectedRow: any;
  source: { localdata: any };
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  hideSerialNo: boolean = false;
  columns: (
    | {
        text: string;
        datafield: string;
        cellsrenderer: (row: number, column: any, value: string) => string;
        cellsalign: string;
        align: string;
        width: number;
        columntype?: undefined;
        buttonclick?: undefined;
      }
    | {
        text: string;
        datafield: string;
        columntype: string;
        cellsalign: string;
        align: string;
        width: number;
        cellsrenderer: () => string;
        buttonclick: (row: any) => void;
      }
  )[];
  myPlatform: any;
  show: boolean = false;

  constructor(
    public platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private alertController: AlertController,
    private commonService: CommonService,
    private ajaxService: AjaxService
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
  clear() {
    this.backendForm.patchValue({
      companyname: "",
      urllink: "",
      userid: "",
      Password: "",
    });
    this.hideSerialNo = false;
  }
  createForm() {
    this.backendForm = this.formBuilder.group({
      companyname: ["", Validators.required],
      urllink: ["", Validators.required],
      userid: ["", Validators.required],
      Password: ["", Validators.required],
    });
  }

  async add() {
    this.button = true;
    this.commonService.presentLoader();
    var data;
    data = {
      id: "",
      name: this.backendForm.value.companyname.toString(),
      url: this.backendForm.value.urllink.toString(),
      userid: this.backendForm.value.userid.toString(),
      password: this.backendForm.value.Password.toString(),
    };

    const url =
      serverUrl.web +
      "/global/savebackendservercredintials?createdby=" +
      localStorage.getItem("userName");
    this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
      this.commonService.dismissLoader();
      if (
        res.message == "Backend Server Credintial Details Saved Successfully"
      ) {
        this.commonService.showConfirm(res.message);
        this.clear();
        this.tableData = res;
        this.button = false;
        this.myGrid.clearselection();
        this.getdatas();
      } else {
        this.button = false;
        this.commonService.showConfirm(res.message);
      }
    });
  }

  async edit() {
    this.button = true;
    var data;
    data = {
      id: this.selectedRow.id.toString(),
      name: this.backendForm.value.companyname.toString(),
      url: this.backendForm.value.urllink.toString(),
      userid: this.backendForm.value.userid.toString(),
      password: this.backendForm.value.Password.toString(),
      createdby: localStorage.getItem("userName"),
    };

    this.commonService.presentLoader();

    const url =
      serverUrl.web +
      "/global/savebackendservercredintials?createdby=" +
      localStorage.getItem("userName");
    this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
      this.commonService.dismissLoader();
      if (
        res.message == "Backend Server Credintial Details Saved Successfully"
      ) {
        this.commonService.showConfirm(res.message);
        this.clear();
        this.tableData = res;
        this.getdatas();
        this.myGrid.clearselection();
      } else {
        this.commonService.showConfirm(res.message);
      }
      this.hideSerialNo = false;
    });
  }

  setValue() {
    this.button = false;
    this.hideSerialNo = true;
    this.backendForm.patchValue({
      companyname: this.selectedRow.name,
      urllink: this.selectedRow.url,
      userid: this.selectedRow.userid,
      Password: this.selectedRow.password,
    });
  }

  getdatas() {
    this.commonService.presentLoader();
    var url = serverUrl.web + "/global/getbackendservercredintials";
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      this.tableData = res;
      this.commonService.dismissLoader();
      this.renderer = (row: number, column: any, value: string) => {
        if (value == "" || null || undefined) {
          return (
            '<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
            0 +
            "</span>"
          );
        } else {
          return (
            '<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
            value +
            "</span>"
          );
        }
      };
      this.source = { localdata: this.tableData };
      this.dataAdapter = new jqx.dataAdapter(this.source);
      this.columns = [
        {
          text: "Name",
          datafield: "name",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 120,
        },
        {
          text: "URL",
          datafield: "url",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 400,
        },
        {
          text: "User ID",
          datafield: "userid",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 120,
        },
        {
          text: "Password",
          datafield: "password",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 120,
        },

        {
          text: "Created by",
          datafield: "createdby",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 100,
        },

        {
          text: "",
          datafield: "Edit Detail",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 52,
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
    this.show = true;
  }
  ngAfterViewInit() {
    this.myGrid.horizontalscrollbarstep(["70"]);
    this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
  }
  ionViewWillEnter() {
    this.clear();
    this.getdatas();
  }

  ngOnInit() {
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
    this.createForm();
  }
}
