import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayFormPage } from './pay-form';

@NgModule({
  declarations: [
    PayFormPage,
  ],
  imports: [
    IonicPageModule.forChild(PayFormPage),
  ],
})
export class PayFormPageModule {}
