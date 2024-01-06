import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { EsimBsnlCertificatePage } from "./esim-bsnl-certificate.page";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";
import { CertificateComponent } from "./certificate/certificate.component";
import { BsnlBulkComponent } from "./bsnl-bulk/bsnl-bulk.component";
import { IonicSelectableModule } from "ionic-selectable";
import { GenerateInvoiceComponent } from "./generate-invoice/generate-invoice.component";

const routes: Routes = [
  {
    path: "",
    component: EsimBsnlCertificatePage,
  },
  {
    path: "certificate",
    component: CertificateComponent,
  },
  {
    path: "bsnl-bulk",
    component: BsnlBulkComponent,
  },
  {
    path: "generate-invoice",
    component: GenerateInvoiceComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    SharedModModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    EsimBsnlCertificatePage,
    CertificateComponent,
    BsnlBulkComponent,
    GenerateInvoiceComponent,
  ],
})
export class EsimBsnlCertificatePageModule {}
