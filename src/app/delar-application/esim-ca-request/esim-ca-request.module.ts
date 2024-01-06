import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { EsimCaRequestPage } from "./esim-ca-request.page";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";
import { ViewComponent } from "./view/view.component";

const routes: Routes = [
  {
    path: "",
    component: EsimCaRequestPage,
  },
  {
    path: "view",
    component: ViewComponent,
  },
];

@NgModule({
  imports: [
    SharedModModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EsimCaRequestPage, ViewComponent],
})
export class EsimCaRequestPageModule {}
