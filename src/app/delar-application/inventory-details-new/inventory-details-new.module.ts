import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { InventoryDetailsNewPage } from "./inventory-details-new.page";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";

const routes: Routes = [
  {
    path: "",
    component: InventoryDetailsNewPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [InventoryDetailsNewPage],
})
export class InventoryDetailsNewPageModule {}
