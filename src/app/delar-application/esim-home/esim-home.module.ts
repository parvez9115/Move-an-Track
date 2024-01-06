import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { EsimHomePage } from "./esim-home.page";
import { DashboardgridComponent } from "../components/dashboardgrid/dashboardgrid.component";
import { TableModule } from "smart-webcomponents-angular/table";
import { IonicSelectableModule } from "ionic-selectable";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";
import { DealerComponentsModule } from "../dealer-component/dealer-component.module";
const routes: Routes = [
  {
    path: "",
    component: EsimHomePage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    DealerComponentsModule,
    IonicSelectableModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModModule,
  ],
  declarations: [EsimHomePage, DashboardgridComponent],
  entryComponents: [DashboardgridComponent],
})
export class EsimHomePageModule { }
