import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { DeviceExtendOneYearRequestPage } from "./device-extend-one-year-request.page";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";
import { ViewComponent } from "./view/view.component";

const routes: Routes = [
  {
    path: "",
    component: DeviceExtendOneYearRequestPage,
  },
  {
    path: "view",
    component: ViewComponent,
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
  declarations: [DeviceExtendOneYearRequestPage, ViewComponent],
})
export class DeviceExtendOneYearRequestPageModule {}
