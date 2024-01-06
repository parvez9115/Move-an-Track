import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-confirm-popup",
  templateUrl: "./confirm-popup.component.html",
  styleUrls: ["./confirm-popup.component.scss"],
})
export class ConfirmPopupComponent implements OnInit {
  confirmform: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController
  ) {}

  createForm() {
    this.confirmform = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  clear() {
    this.confirmform.patchValue({
      username: "",
      password: "",
    });
  }

  cancel() {
    this.modalController.dismiss();
  }

  submit() {
    var data;
    data = {
      username: this.confirmform.value.username,
      password: this.confirmform.value.password,
    };
    this.modalController.dismiss({ value: data });
  }

  ngOnInit() {
    this.createForm();
    this.clear();
  }
}
