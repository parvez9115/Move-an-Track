import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { DeviceReplaceDetailsPage } from "./device-replace-details.page";
import { AddDeviceComponent } from "./add-device/add-device.component";
import { ReplaceComponent } from "./replace/replace.component";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";

const routes: Routes = [
  {
    path: "",
    component: DeviceReplaceDetailsPage,
  },
  {
    path: "add-device",
    component: AddDeviceComponent,
  },
  {
    path: "replace",
    component: ReplaceComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    DeviceReplaceDetailsPage,
    AddDeviceComponent,
    ReplaceComponent,
  ],
})
export class DeviceReplaceDetailsPageModule {}
