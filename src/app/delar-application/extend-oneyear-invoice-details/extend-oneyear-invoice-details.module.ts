import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ExtendOneyearInvoiceDetailsPage } from "./extend-oneyear-invoice-details.page";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";
import { IonicSelectableModule } from "ionic-selectable";
import { FileUploadModule } from "ng2-file-upload";
import { ReceivedExtendDetailsComponent } from "./received-extend-details/received-extend-details.component";
import { ViewExtendDetailsComponent } from "./view-extend-details/view-extend-details.component";
import { ViewImeiComponent } from "./view-imei/view-imei.component";
import { GenerateInvoiceComponent } from "./generate-invoice/generate-invoice.component";
import { EditGenerateInvoiceComponent } from "./edit-generate-invoice/edit-generate-invoice.component";

const routes: Routes = [
  {
    path: "",
    component: ExtendOneyearInvoiceDetailsPage,
  },
  {
    path: "received-extend-details",
    component: ReceivedExtendDetailsComponent,
  },
  {
    path: "view-extend-details",
    component: ViewExtendDetailsComponent,
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
    ExtendOneyearInvoiceDetailsPage,
    ReceivedExtendDetailsComponent,
    ViewExtendDetailsComponent,
    ViewImeiComponent,
    GenerateInvoiceComponent,
    EditGenerateInvoiceComponent,
  ],
})
export class ExtendOneyearInvoiceDetailsPageModule {}
