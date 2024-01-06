import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EsimDashboardsPage } from './esim-dashboards.page';
import { DealerComponentsModule } from '../dealer-component/dealer-component.module';

const routes: Routes = [
  {
    path: '',
    component: EsimDashboardsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    DealerComponentsModule
  ],
  declarations: [EsimDashboardsPage]
})
export class EsimDashboardsPageModule {}
