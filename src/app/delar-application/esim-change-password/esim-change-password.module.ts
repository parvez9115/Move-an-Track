import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { EsimChangePasswordPage } from "./esim-change-password.page";

const routes: Routes = [
  {
    path: "",
    component: EsimChangePasswordPage,
  },
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EsimChangePasswordPage],
})
export class EsimChangePasswordPageModule {}
