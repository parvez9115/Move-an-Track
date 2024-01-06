import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {
  AlertController,
  LoadingController,
  ModalController,
  Platform,
} from "@ionic/angular";
import { IonicSelectableComponent } from "ionic-selectable";
import { jqxGridComponent } from "jqwidgets-ng/jqxgrid";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";
import { PdfLogoService } from "src/app/services/pdf-logo.service";
import { ExportExcelService } from "src/app/services/export-excel.service";
import * as XLSX from "xlsx";
import { FileUploader } from "ng2-file-upload";
import { PasswordPopupComponent } from "./password-popup/password-popup.component";
import { CountriesService } from "src/app/services/countries.service";

@Component({
  selector: 'app-firmware-ais140-upload',
  templateUrl: './firmware-ais140-upload.page.html',
  styleUrls: ['./firmware-ais140-upload.page.scss'],
})
export class FirmwareAis140UploadPage implements OnInit {

  public uploader: FileUploader = new FileUploader({});
  firmware: FormGroup;
  service: any;
  backendserver: any;
  Dealer: any;
  name: boolean = false;
  willDownload = false;
  dataString: any;
  output = "";
  file;
  show: boolean = false;
  imeiIssues = [];
  excellKeyValid: boolean = false;
   button: boolean = false;
  data: any;
  selectedRow: any;
  state=[]
  cities=[]

  constructor(
     public platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private alertController: AlertController,
    private commonService: CommonService,
    private ajaxService: AjaxService,
    private pdfLogoService: PdfLogoService,
    private ete: ExportExcelService,
    private countries: CountriesService,
  ) { }


   clear() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
     this.firmware.patchValue({
      state: "",
      server:"",
      serviceprovider: "",
       fileupload: "",
      reason:""
    })
    this.button=false
  }

  createForm() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    var todaytime = now.getHours() + ":" + now.getMinutes();
    this.firmware = this.formBuilder.group({
      state: ["", Validators.required],
      server: ["", Validators.required],
      serviceprovider: ["", Validators.required],
      fileupload: ["",Validators.required],
      reason: ["", Validators.required],
    });
  }

  getState() {
    this.state = this.countries.region.India;
    this.cities = this.countries.states[this.firmware.value.state];
}

  async submit() {
    this.button = true;
    this.commonService.presentLoader();
     const file = this.uploader;
     var data;
    data = {
      state: this.firmware.value.state,
      serviceprovider: this.firmware.value.serviceprovider,
      backendserver: this.firmware.value.server,
      reason: this.firmware.value.reason,
      createdby: localStorage.getItem("userName"),
    };
    const testData: FormData = new FormData();

    if (file.queue.length != 0) {
      testData.append("firmwareuploaddocument", file.queue[0]._file);
      testData.append("data", JSON.stringify(data));
    } else {
      const api = await fetch(this.pdfLogoService.imgdata.no_img);
      const blob = await api.blob();
      const default_file = new File([blob], "File name", {
        type: "image/png",
      });
      testData.append("firmwareuploaddocument", default_file);
      testData.append("data", JSON.stringify(data));
    }
 const url = serverUrl.web + "/global/savetFirmwareUploadDetails";
    this.ajaxService.ajaxPostWithFile(url, testData).subscribe((res) => {
      this.commonService.dismissLoader();
      if (res.message == "Firmware Upload Successfully") {
        this.commonService.showConfirm(res.message)
        this.clear()
        this.button=false
      }
      else {
        this.commonService.showConfirm(res.message)
        this.button=false
      }
    });

 }
  
  async popup() {   
    const isModalOpened = await this.modalController.getTop();
    const modal = await this.modalController.create({
      component: PasswordPopupComponent,
      cssClass: "validityform",
      componentProps: {
        value:''
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data.data == "Password Correct..") {
       this.submit()
      }
    });
    return await modal.present();
  }

  
  download(){}
  history(){}

    myGridOnRowSelect(event: any): void {
    this.selectedRow = event.args.row.bounddata;
    this.show = true;
    }
  
  
  getserver() {
    var url = serverUrl.web + "/global/getfirmwarebackendserver";
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.backendserver = res;
    });
  }
  
    getserviceprovider() {
    var url = serverUrl.web + "/esim/getServiceProvider";
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.service = res;
    });
   }
  
  ngOnInit() {
    this.createForm()
    this.getserver()
    this.clear()
    this.getState()
    this.getserviceprovider()
  }

}
