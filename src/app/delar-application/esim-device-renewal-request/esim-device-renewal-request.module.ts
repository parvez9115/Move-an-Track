import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { EsimDeviceRenewalRequestPage } from "./esim-device-renewal-request.page";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";
import { ViewComponent } from "./view/view.component";

const routes: Routes = [
  {
    path: "",
    component: EsimDeviceRenewalRequestPage,
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
  declarations: [EsimDeviceRenewalRequestPage, ViewComponent],
})
export class EsimDeviceRenewalRequestPageModule {}
