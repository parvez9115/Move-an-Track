import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { SensoriseRsuStatusPage } from "./sensorise-rsu-status.page";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";
import { RsuHistoryComponent } from "./rsu-history/rsu-history.component";

const routes: Routes = [
  {
    path: "",
    component: SensoriseRsuStatusPage,
  },
  {
    path: "rsu-history",
    component: RsuHistoryComponent,
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
  declarations: [SensoriseRsuStatusPage, RsuHistoryComponent],
})
export class SensoriseRsuStatusPageModule {}
