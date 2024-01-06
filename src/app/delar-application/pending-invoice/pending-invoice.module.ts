import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { PendingInvoicePage } from "./pending-invoice.page";
import { ViewDetailsComponent } from "./view-details/view-details.component";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";
import { IonicSelectableModule } from "ionic-selectable";
import { ViewInvoiceComponent } from "./view-invoice/view-invoice.component";
import { ConfirmPopupComponent } from "./confirm-popup/confirm-popup.component";

const routes: Routes = [
  {
    path: "",
    component: PendingInvoicePage,
  },
  {
    path: "view-details",
    component: ViewDetailsComponent,
  },
  {
    path: "view-invoice",
    component: ViewInvoiceComponent,
  },
  {
    path: "confirm-popup",
    component: ConfirmPopupComponent,
  },
];

@NgModule({
  imports: [
    SharedModModule,
    ReactiveFormsModule,
    IonicSelectableModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PendingInvoicePage,
    ViewDetailsComponent,
    ViewInvoiceComponent,
    ConfirmPopupComponent,
  ],
})
export class PendingInvoicePageModule {}
