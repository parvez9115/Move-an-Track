import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { AssertListCardComponent } from './assert-list-card/assert-list-card.component'

import { ChartModule } from 'smart-webcomponents-angular/chart';
import { CheckBoxModule } from 'smart-webcomponents-angular/checkbox';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { DealerStackedChartComponent } from '../components/dealer-stacked-chart/dealer-stacked-chart.component';


const routes: Routes = [
  
];
@NgModule({
  declarations: [AssertListCardComponent,DealerStackedChartComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    RouterModule.forChild(routes),
    ChartModule, CheckBoxModule ,
    DropDownListModule 
  ],
  entryComponents:[],
  exports:[AssertListCardComponent,DropDownListModule,DealerStackedChartComponent],
})

export class DealerComponentsModule { }
