import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { ComponentsModule } from "../components/components.module";
import { IonicModule } from "@ionic/angular";
import { liveTrackPage } from "./live-track.page";
import { AkmessagesComponent } from "../components/akmessages/akmessages.component";
const routes: Routes = [{ path: "", component: AkmessagesComponent }];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    ReactiveFormsModule,
  ],
  declarations: [liveTrackPage, AkmessagesComponent],
})
export class liveTrackPageModule {}
