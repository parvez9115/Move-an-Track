import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { SalesInvoiceDetailsPage } from "./sales-invoice-details.page";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";
import { IonicSelectableModule } from "ionic-selectable";
import { FileUploadModule } from "ng2-file-upload";
import { ReceivedDetailsComponent } from "./received-details/received-details.component";
import { ViewDetailsComponent } from "./view-details/view-details.component";
import { GenerateInvoiceComponent } from "./generate-invoice/generate-invoice.component";
import { EditGenerateInvoiceComponent } from "./edit-generate-invoice/edit-generate-invoice.component";

const routes: Routes = [
  {
    path: "",
    component: SalesInvoiceDetailsPage,
  },
  {
    path: "received-details",
    component: ReceivedDetailsComponent,
  },
  {
    path: "details",
    component: ViewDetailsComponent,
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
    IonicSelectableModule,
    FileUploadModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    SalesInvoiceDetailsPage,
    ReceivedDetailsComponent,
    ViewDetailsComponent,
    GenerateInvoiceComponent,
    EditGenerateInvoiceComponent,
  ],
})
export class SalesInvoiceDetailsPageModule {}
