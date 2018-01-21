import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProratedPage } from './prorated';

@NgModule({
  declarations: [
    ProratedPage,
  ],
  imports: [
    IonicPageModule.forChild(ProratedPage),
  ],
})
export class ProratedPageModule {}
