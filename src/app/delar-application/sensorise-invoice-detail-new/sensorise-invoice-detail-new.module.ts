import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { SensoriseInvoiceDetailNewPage } from "./sensorise-invoice-detail-new.page";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";
import { IonicSelectableModule } from "ionic-selectable";
import { ConfirmPopupComponent } from "./confirm-popup/confirm-popup.component";

const routes: Routes = [
  {
    path: "",
    component: SensoriseInvoiceDetailNewPage,
  },
  {
    path: "confirm-popup",
    component: ConfirmPopupComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModModule,
    IonicSelectableModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SensoriseInvoiceDetailNewPage, ConfirmPopupComponent],
})
export class SensoriseInvoiceDetailNewPageModule {}
