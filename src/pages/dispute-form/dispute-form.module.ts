import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisputeFormPage } from './dispute-form';

@NgModule({
  declarations: [
    DisputeFormPage,
  ],
  imports: [
    IonicPageModule.forChild(DisputeFormPage),
  ],
})
export class DisputeFormPageModule {}
