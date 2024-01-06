import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { MissingSummaryReportPage } from "./missing-summary-report.page";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";

const routes: Routes = [
  {
    path: "",
    component: MissingSummaryReportPage,
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
  declarations: [MissingSummaryReportPage],
})
export class MissingSummaryReportPageModule {}
