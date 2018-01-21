import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketIdPage } from './ticket-id';

@NgModule({
  declarations: [
    TicketIdPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketIdPage),
  ],
})
export class TicketIdPageModule {}
