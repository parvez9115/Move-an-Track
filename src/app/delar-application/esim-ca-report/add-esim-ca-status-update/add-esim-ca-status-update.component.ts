import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, AbstractControl } from "@angular/forms";
import { formatDate } from "@angular/common";
import { AlertController, ModalController, Platform } from "@ionic/angular";
import { AjaxService } from "src/app/services/ajax.service";
import { serverUrl } from "src/environments/environment";
import { CommonService } from "src/app/services/common.service";

// Import the correct types
import { ValidatorFn, Validators } from "@angular/forms";

// Create a custom validator function for date comparisons
export function dateWithinLast7DaysValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const currentDate = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(currentDate.getDate() - 7);

    const selectedDate = new Date(control.value);

    if (selectedDate > currentDate || selectedDate < sevenDaysAgo) {
      return { dateWithinLast7Days: true };
    }

    return null;
  };
}

@Component({
  selector: "app-add-esim-ca-status-update",
  templateUrl: "./add-esim-ca-status-update.component.html",
  styleUrls: ["./add-esim-ca-status-update.component.scss"],
})
export class AddEsimCaStatusUpdateComponent implements OnInit {
  @Input() value: any;
  myPlatform: string;
  minDate: string;

  constructor(
    public platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private ajaxService: AjaxService,
    private alertController: AlertController,
    private commonService: CommonService
  ) {}

  maxDate;
  today = new Date();
  AddCaStatus: FormGroup;

  cancelBtn() {
    this.modalController.dismiss();
  }

  createForm() {
    var now = new Date();

    // Convert the current date to a string in 'yyyy-MM-dd' format
    var today = formatDate(now, "yyyy-MM-dd", "en-US");

    this.AddCaStatus = this.formBuilder.group({
      cardactivationdate: [
        today,
        [Validators.required, dateWithinLast7DaysValidator()],
      ],
      cardenddate: [today, [dateWithinLast7DaysValidator()]], // Optionally add the same validator here
      cardstatus: ["Active", Validators.required],
      comment: ["", Validators.required],
    });
  }

  edit() {
    var data = {
      iccidno: this.value.iccidno1,
      cardactivationdate: this.AddCaStatus.value.cardactivationdate,
      cardenddate: "",
      cardstatus: this.AddCaStatus.value.cardstatus,
      comment: this.AddCaStatus.value.comment,
      createdby: this.value.createdby,
    };
    const url = serverUrl.web + "/esim/saveEsimCAStatus";
    this.ajaxService
      .ajaxPostWithBody(url, JSON.stringify(data))
      .subscribe((res) => {
        if (res.message == "Esim CA Status Saved Successfully") {
          this.commonService.showConfirm(res.message);

          this.modalController.dismiss({ data: "saved success" });
        } else {
          this.commonService.showConfirm(res.message);
        }
      });
  }
  ngOnInit() {
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
    this.createForm();
    this.maxDate = this.today.getFullYear() + "-";
    this.maxDate +=
      (this.today.getMonth() + 1 < 10
        ? "0" + (this.today.getMonth() + 1).toString()
        : (this.today.getMonth() + 1).toString()) + "-";
    this.maxDate +=
      this.today.getDate() < 10
        ? "0" + this.today.getDate().toString()
        : this.today.getDate().toString();

    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 7);

    this.minDate = sevenDaysAgo.getFullYear() + "-";
    this.minDate +=
      (sevenDaysAgo.getMonth() + 1 < 10
        ? "0" + (sevenDaysAgo.getMonth() + 1).toString()
        : (sevenDaysAgo.getMonth() + 1).toString()) + "-";
    this.minDate +=
      sevenDaysAgo.getDate() < 10
        ? "0" + sevenDaysAgo.getDate().toString()
        : sevenDaysAgo.getDate().toString();

    if (Object.keys(this.value).length != 0) {
      console.log(
        this.value.cardactivationdate,
        this.value.cardenddate,
        this.value.cardstatus
      );
      this.AddCaStatus.patchValue({
        cardenddate: this.value.cardenddate,
        comment: this.value.purcomment,
      });
    }
  }
}
