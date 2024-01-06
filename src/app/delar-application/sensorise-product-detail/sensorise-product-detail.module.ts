import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { SensoriseProductDetailPage } from "./sensorise-product-detail.page";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";
import { IonicSelectableModule } from "ionic-selectable";

const routes: Routes = [
  {
    path: "",
    component: SensoriseProductDetailPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModModule,
    ReactiveFormsModule,
    IonicSelectableModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SensoriseProductDetailPage],
})
export class SensoriseProductDetailPageModule {}
