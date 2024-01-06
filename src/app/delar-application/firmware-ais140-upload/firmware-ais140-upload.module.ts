import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FirmwareAis140UploadPage } from './firmware-ais140-upload.page';
import { SharedModModule } from 'src/app/shared-mod/shared-mod.module';
import { IonicSelectableModule } from 'ionic-selectable';
import { PasswordPopupComponent } from './password-popup/password-popup.component';
import { FileUploadModule } from 'ng2-file-upload';


const routes: Routes = [
  {
    path: '',
    component: FirmwareAis140UploadPage
  },
  {
    path: 'password-popup',
    component: PasswordPopupComponent
  }
];

@NgModule({
  imports: [
    SharedModModule,
    FileUploadModule,
    ReactiveFormsModule,
    IonicSelectableModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirmwareAis140UploadPage, PasswordPopupComponent]
})
export class FirmwareAis140UploadPageModule {}
