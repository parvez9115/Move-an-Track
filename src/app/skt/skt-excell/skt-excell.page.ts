import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Platform } from "@ionic/angular";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";
import * as XLSX from "xlsx";
@Component({
  selector: "app-skt-excell",
  templateUrl: "./skt-excell.page.html",
  styleUrls: ["./skt-excell.page.scss"],
})
export class SktExcellPage implements OnInit {
  radioSelection = "New";
  excelform: FormGroup;
  name: boolean = false;
  dataString: any;
  excellKeyValid: boolean = false;
  imeiIssues = [];
  fileuploads: boolean = true;
  willDownload = false;
  output = "";
  myPlatform: string;
  Pickuplist: any;
  Droplist: any;
  selectedValue = "New";
  show: boolean = false;
  constructor(
    private commonService: CommonService,
    public ajaxService: AjaxService,
    private formBuilder: FormBuilder,
    private platform: Platform
  ) {}

  createForm() {
    this.excelform = this.formBuilder.group({
      pickup: [""],
      drop: [""],
      fileupload: ["", Validators.required],
    });
  }

  clear() {
    this.excelform.patchValue({
      fileupload: "",
      pickup: "",
      drop: "",
    });
    this.fileuploads = true;
    this.radioSelection = "New";
    this.selectedValue = "New";
  }
  fileclear() {
    this.excelform.patchValue({
      fileupload: "",
    });
    this.fileuploads = true;
  }

  selectPickDrop(event) {
    this.selectedValue = event.detail.value;
    this.radioSelection = event.detail.value;
    if (this.radioSelection == "Old") {
      this.show = true;
      this.getpick();
      this.getdrop();
    } else if (this.radioSelection == "New") {
      this.show = false;
    }
  }

  // selectPickDrop(event) {
  //   if (this.selectedValue == "Old") {
  //     this.clear();
  //     this.show = true;
  //     this.getpick();
  //     this.getdrop();
  //   } else {
  //     this.show = false;
  //   }
  // }
  getpick() {
    const url =
      serverUrl.web +
      "/student/school/routename?schoolId=" +
      localStorage.getItem("userName") +
      "&branchId=" +
      localStorage.getItem("userName") +
      "&trip=PickUp";
    // this.selectedValue;
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.Pickuplist = res;
    });
  }

  getdrop() {
    const url =
      serverUrl.web +
      "/student/school/routename?schoolId=" +
      localStorage.getItem("userName") +
      "&branchId=" +
      localStorage.getItem("userName") +
      "&trip=Drop";
    // this.selectedValue;
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      this.Droplist = res;
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

        console.log(Object.keys(jsonData)[0]);
        if (String(Object.keys(jsonData)[0]) == "Sheet1") {
          for (let i = 0; i < jsonData["Sheet1"].length; i++) {
            let newData = {};
            newData["StudentName"] = String(
              jsonData["Sheet1"][i]["Student Name"] || ""
            );
            if (
              isNaN(jsonData["Sheet1"][i]["Roll No"]) &&
              String(jsonData["Sheet1"][i]["Roll No"] || "") != ""
            ) {
              this.commonService.showConfirm(
                "Roll Number Only Enter Numeric Value"
              );
              this.clear();
              break;
            }
            newData["RollNo"] = String(jsonData["Sheet1"][i]["Roll No"] || "");

            newData["ParentName"] = String(
              jsonData["Sheet1"][i]["Parent Name"] || ""
            );

            newData["ParentMobileNumber"] = String(
              jsonData["Sheet1"][i]["Parent Mobile Number"] || ""
            );

            newData["ParentEmail"] = String(
              jsonData["Sheet1"][i]["Parent Email"] || ""
            );

            newData["Sex"] = String(jsonData["Sheet1"][i]["Sex"] || "");

            newData["ClassId"] = String(jsonData["Sheet1"][i]["ClassId"] || "");

            newData["SecId"] = String(jsonData["Sheet1"][i]["SecId"] || "");

            newData["TagId"] = String(jsonData["Sheet1"][i]["TagId"] || "");

            json.push(newData);
          }

          this.fileuploads = false;
          console.log(jsonData["Sheet1"].length);
          this.dataString = json;
          this.output = this.dataString.slice(0, 300).concat("...");
        } else {
          this.commonService.showConfirm(
            "Please Insert Valid Excel File (.xlsx)"
          );
          this.clear();
        }
      };
      reader.readAsBinaryString(file);
    } else {
      this.commonService.showConfirm(
        "Please insert only Valid excel file (.xlsx)"
      );
    }
  }

  sendToServer() {
    if (this.selectedValue == "Old") {
      if (
        this.excelform.value.pickup.length == "" ||
        this.excelform.value.drop.length == ""
      ) {
        this.commonService.showConfirm(
          "Please Selct the Pick Up and Drop Route"
        );
      } else {
        if (this.dataString.length == 0) {
          this.commonService.showConfirm(
            "Check your excell file,don't enter blank spaces"
          );
          this.clear();
        } else {
          var excellKeys = Object.keys(this.dataString[0]);
          for (var i = 0; i < excellKeys.length; i++) {
            if (
              excellKeys[i] == "Student Name" ||
              excellKeys[i] == "Parent Name" ||
              excellKeys[i] == "Parent Mobile Number" ||
              excellKeys[i] == "Sex" ||
              excellKeys[i] == "tagId" ||
              excellKeys[i] == "Roll No" ||
              excellKeys[i] == "Parent Email" ||
              excellKeys[i] == "ClassId" ||
              excellKeys[i] == "SecId"
            ) {
              console.log("present");
              this.excellKeyValid = true;
            }
          }

          if (this.name == true && this.excellKeyValid == true) {
            this.commonService.presentLoader();
            this.imeiIssues = [];
            this.willDownload = true;
            let data = {
              companyId: localStorage.getItem("corpId"),
              branchId: localStorage.getItem("corpId"),
              createdby: localStorage.getItem("userName"),
              value: this.dataString,
              PickUp: this.excelform.value.pickup,
              Drop: this.excelform.value.drop,
            };
            const url = serverUrl.web + "/student/upload/old/excel";
            this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
              this.commonService.dismissLoader();
              if (res.message == "Addded Successfully") {
                this.commonService.showConfirm(res.message);
                this.clear();
              } else {
                this.commonService.showConfirm(res.message);
                this.fileclear();
              }
            });
          }
        }
      }
    } else {
      if (this.dataString.length == 0) {
        this.commonService.showConfirm(
          "Check your excell file,don't enter blank spaces"
        );
        this.clear();
      } else {
        var excellKeys = Object.keys(this.dataString[0]);
        for (var i = 0; i < excellKeys.length; i++) {
          if (
            excellKeys[i] == "Student Name" ||
            excellKeys[i] == "Parent Name" ||
            excellKeys[i] == "Parent Mobile Number" ||
            excellKeys[i] == "Sex" ||
            excellKeys[i] == "tagId" ||
            excellKeys[i] == "Roll No" ||
            excellKeys[i] == "Parent Email" ||
            excellKeys[i] == "ClassId" ||
            excellKeys[i] == "SecId"
          ) {
            console.log("present");
            this.excellKeyValid = true;
          }
        }

        if (this.name == true && this.excellKeyValid == true) {
          this.commonService.presentLoader();
          this.imeiIssues = [];
          this.willDownload = true;
          let data = {
            companyId: localStorage.getItem("corpId"),
            branchId: localStorage.getItem("corpId"),
            createdby: localStorage.getItem("userName"),
            value: this.dataString,
          };
          const url = serverUrl.web + "/student/upload/new/excel";
          this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
            this.commonService.dismissLoader();
            this.clear();
            this.commonService.showConfirm(res.message);
          });
        }
      }
    }

    // this.commonService.presentLoader();
    // let branchId = localStorage.getItem("corpId");
    // this.dataString.forEach((res) => {
    //   (res.parentName = res.parentName.toString()),
    //     (res.mobileNumber = res.mobileNumber.toString()),
    //     (res.tagId = res.tagId.toString()),
    //     (res.studentName = res.studentName.toString());
    // });
    // let data = {
    //   companyId: branchId,
    //   branchId: branchId,
    //   value: this.dataString,
    // };
    // const url = serverUrl.web + "/student/upload/excel";
    // this.ajaxService.ajaxPostMethod(url, data).subscribe((res) => {
    //   console.log(res);
    //   this.commonService.presentToast(res[res.length - 1]);
    //   this.commonService.dismissLoader();
    //   this.clear();
    // });
  }

  ngOnInit() {
    this.createForm();
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
  }
  ionViewWillEnter() {
    this.clear();
  }
}
