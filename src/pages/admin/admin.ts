import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TicketsProvider} from "../../providers/tickets/tickets";

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'admin'
})
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  public form: FormGroup;
  public tickets;

  constructor(public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder, public ticketPvdr: TicketsProvider) {
    this.form = fb.group({
      name: ['', Validators.required],
      amount: ['', Validators.required]
    })
  }

  ionViewDidLoad() {
    this.tickets = this.ticketPvdr.getTickets();
    console.log('ionViewDidLoad AdminPage');
  }

  public addTicket() {
    const name = this.form.get('name').value;
    const amount = this.form.get('amount').value;
    this.ticketPvdr.addTicket(name,amount)
      .catch(err => alert(err.message))
  }

}
