import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { SensoriseInvoiceDetailPage } from "./sensorise-invoice-detail.page";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";
import { FileUploadModule } from "ng2-file-upload";
import { IonicSelectableModule } from "ionic-selectable";

const routes: Routes = [
  {
    path: "",
    component: SensoriseInvoiceDetailPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModModule,
    IonicSelectableModule,
    FileUploadModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SensoriseInvoiceDetailPage],
})
export class SensoriseInvoiceDetailPageModule {}
