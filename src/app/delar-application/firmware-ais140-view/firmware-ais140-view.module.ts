import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FirmwareAis140ViewPage } from './firmware-ais140-view.page';
import { SharedModModule } from 'src/app/shared-mod/shared-mod.module';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {
    path: '',
    component: FirmwareAis140ViewPage
  },
  {
    path: 'history',
    component: HistoryComponent
  }
];

@NgModule({
  imports: [
    SharedModModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirmwareAis140ViewPage,HistoryComponent]
})
export class FirmwareAis140ViewPageModule {}
