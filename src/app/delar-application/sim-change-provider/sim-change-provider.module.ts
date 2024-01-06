import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { SimChangeProviderPage } from "./sim-change-provider.page";

const routes: Routes = [
  {
    path: "",
    component: SimChangeProviderPage,
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
  declarations: [SimChangeProviderPage],
})
export class SimChangeProviderPageModule {}
