import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { EsimSalesDetailPage } from "./esim-sales-detail.page";
import { EsimViewSerialDeatilsComponent } from "./esim-view-serial-deatils/esim-view-serial-deatils.component";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";
import { IonicSelectableModule } from "ionic-selectable";
import { EsimAddSaleComponent } from "./esim-add-sale/esim-add-sale.component";
import { EsimPrintPopupComponent } from "./esim-print-popup/esim-print-popup.component";

const routes: Routes = [
  {
    path: "",
    component: EsimSalesDetailPage,
  },
  {
    path: "esim-sales-detail",
    component: EsimAddSaleComponent,
  },
  {
    path: "esim-view-serial-deatils",
    component: EsimViewSerialDeatilsComponent,
  },
  {
    path: "esim-print-popup",
    component: EsimPrintPopupComponent,
  },
];

@NgModule({
  imports: [
    IonicSelectableModule,
    SharedModModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    EsimSalesDetailPage,
    EsimAddSaleComponent,
    EsimViewSerialDeatilsComponent,
    EsimPrintPopupComponent,
  ],
})
export class EsimSalesDetailPageModule {}
