import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { RenewalInvoiceDetailsPage } from "./renewal-invoice-details.page";
import { IonicSelectableModule } from "ionic-selectable";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";
import { FileUploadModule } from "ng2-file-upload";
import { ViewImeiComponent } from "./view-imei/view-imei.component";
import { ReceivedDetailsComponent } from "./received-details/received-details.component";
import { ViewDetailsComponent } from "./view-details/view-details.component";
import { GenerateInvoiceComponent } from "./generate-invoice/generate-invoice.component";
import { EditGenerateInvoiceComponent } from "./edit-generate-invoice/edit-generate-invoice.component";

const routes: Routes = [
  {
    path: "",
    component: RenewalInvoiceDetailsPage,
  },
  {
    path: "view-details",
    component: ViewDetailsComponent,
  },
  {
    path: "recived-details",
    component: ReceivedDetailsComponent,
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
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    SharedModModule,
    FileUploadModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    RenewalInvoiceDetailsPage,
    ViewImeiComponent,
    ReceivedDetailsComponent,
    ViewDetailsComponent,
    GenerateInvoiceComponent,
    EditGenerateInvoiceComponent,
  ],
})
export class RenewalInvoiceDetailsPageModule {}
