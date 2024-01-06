import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { BackendServerCredentialPage } from "./backend-server-credential.page";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";

const routes: Routes = [
  {
    path: "",
    component: BackendServerCredentialPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BackendServerCredentialPage],
})
export class BackendServerCredentialPageModule {}
