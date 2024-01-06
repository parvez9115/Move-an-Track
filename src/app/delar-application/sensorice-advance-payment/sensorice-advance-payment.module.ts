import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SensoriceAdvancePaymentPage } from './sensorice-advance-payment.page';
import { SharedModModule } from 'src/app/shared-mod/shared-mod.module';
import { AddPopupComponent } from './add-popup/add-popup.component';

const routes: Routes = [
  {
    path: '',
    component: SensoriceAdvancePaymentPage
  },
  {
    path: 'add-popup',
    component: AddPopupComponent
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
  declarations: [SensoriceAdvancePaymentPage,AddPopupComponent]
})
export class SensoriceAdvancePaymentPageModule {}
