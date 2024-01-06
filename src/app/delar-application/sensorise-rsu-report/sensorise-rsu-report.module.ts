import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { SensoriseRsuReportPage } from "./sensorise-rsu-report.page";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";

const routes: Routes = [
  {
    path: "",
    component: SensoriseRsuReportPage,
  },
];

@NgModule({
  imports: [
    SharedModModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SensoriseRsuReportPage],
})
export class SensoriseRsuReportPageModule {}
