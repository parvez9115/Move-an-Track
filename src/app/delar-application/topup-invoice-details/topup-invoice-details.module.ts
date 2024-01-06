import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { TopupInvoiceDetailsPage } from "./topup-invoice-details.page";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";
import { IonicSelectableModule } from "ionic-selectable";
import { FileUploadModule } from "ng2-file-upload";
import { ReceivedTopupDetailsComponent } from "./received-topup-details/received-topup-details.component";
import { ViewTopupDetailsComponent } from "./view-topup-details/view-topup-details.component";
import { ViewImeiComponent } from "./view-imei/view-imei.component";
import { GenerateInvoiceComponent } from "./generate-invoice/generate-invoice.component";
import { EditGenerateInvoiceComponent } from "./edit-generate-invoice/edit-generate-invoice.component";

const routes: Routes = [
  {
    path: "",
    component: TopupInvoiceDetailsPage,
  },
  {
    path: "received-topup-details",
    component: ReceivedTopupDetailsComponent,
  },
  {
    path: "view-topup-details",
    component: ViewTopupDetailsComponent,
  },
  {
    path: "view-imei",
    component: ViewImeiComponent,
  },
  {
    path: "generate-invoice",
    component: GenerateInvoiceComponent,
  },
  {
    path: "edit-generate-invoice",
    component: EditGenerateInvoiceComponent,
  },
];

@NgModule({
  imports: [
    SharedModModule,
    ReactiveFormsModule,
    IonicSelectableModule,
    FileUploadModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    TopupInvoiceDetailsPage,
    ReceivedTopupDetailsComponent,
    ViewTopupDetailsComponent,
    ViewImeiComponent,
    GenerateInvoiceComponent,
    EditGenerateInvoiceComponent,
  ],
})
export class TopupInvoiceDetailsPageModule {}
