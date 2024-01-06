import { Component, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { WhitelistingMasterDetailPage } from "./whitelisting-master-detail.page";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";
import { AddDealerDetailsComponent } from "./add-dealer-details/add-dealer-details.component";
import { IonicSelectableModule } from "ionic-selectable";

const routes: Routes = [
  {
    path: "",
    component: WhitelistingMasterDetailPage,
  },
  {
    path: "add-dealer-details",
    component: AddDealerDetailsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModModule,
    IonicSelectableModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [WhitelistingMasterDetailPage, AddDealerDetailsComponent],
})
export class WhitelistingMasterDetailPageModule {}
