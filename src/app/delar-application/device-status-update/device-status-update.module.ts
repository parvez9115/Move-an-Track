import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { DeviceStatusUpdatePage } from "./device-status-update.page";
import { SharedModModule } from "src/app/shared-mod/shared-mod.module";
import { StatusUpdateComponent } from "./status-update/status-update.component";
import { CommentComponent } from "./comment/comment.component";
import { SimUpdateComponent } from "./sim-update/sim-update.component";
import { RequestdateUpdateComponent } from "./requestdate-update/requestdate-update.component";

const routes: Routes = [
  {
    path: "",
    component: DeviceStatusUpdatePage,
  },
  {
    path: "status-update",
    component: StatusUpdateComponent,
  },
  {
    path: "comment",
    component: CommentComponent,
  },
  {
    path: "sim-update",
    component: SimUpdateComponent,
  },
  {
    path: "requestdate-update",
    component: RequestdateUpdateComponent,
  },
];

@NgModule({
  imports: [
    SharedModModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    DeviceStatusUpdatePage,
    StatusUpdateComponent,
    CommentComponent,
    SimUpdateComponent,
    RequestdateUpdateComponent,
  ],
})
export class DeviceStatusUpdatePageModule {}
