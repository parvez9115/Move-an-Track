import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { CertificateInvoiceDetailsPage } from "./certificate-invoice-details.page";
import { ReceivedDetailsComponent } from "./received-details/received-details.component";
import { ViewDetailsComponent } from "./view-details/view-details.component";
import { ViewImeiComponent } from "./view-imei/view-imei.component";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";
import { IonicSelectableModule } from "ionic-selectable";
import { FileUploadModule } from "ng2-file-upload";
import { GenerateInvoiceComponent } from "./generate-invoice/generate-invoice.component";
import { EditGenerateInvoiceComponent } from "./edit-generate-invoice/edit-generate-invoice.component";

const routes: Routes = [
  {
    path: "",
    component: CertificateInvoiceDetailsPage,
  },
  {
    path: "received-details",
    component: ReceivedDetailsComponent,
  },
  {
    path: "view-details",
    component: ViewDetailsComponent,
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
    CertificateInvoiceDetailsPage,
    ReceivedDetailsComponent,
    ViewDetailsComponent,
    ViewImeiComponent,
    GenerateInvoiceComponent,
    EditGenerateInvoiceComponent,
  ],
})
export class CertificateInvoiceDetailsPageModule {}
