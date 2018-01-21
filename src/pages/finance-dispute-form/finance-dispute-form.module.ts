import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinanceDisputeFormPage } from './finance-dispute-form';

@NgModule({
  declarations: [
    FinanceDisputeFormPage,
  ],
  imports: [
    IonicPageModule.forChild(FinanceDisputeFormPage),
  ],
})
export class FinanceDisputeFormPageModule {}
