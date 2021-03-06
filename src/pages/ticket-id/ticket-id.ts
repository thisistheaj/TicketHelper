import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthProvider} from "../../providers/auth/auth";
import {TicketsProvider} from "../../providers/tickets/tickets";

/**
 * Generated class for the TicketIdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket-id',
  templateUrl: 'ticket-id.html',
})
export class TicketIdPage {

  public form: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fb: FormBuilder,
              public authPvdr: AuthProvider,
              public ticketPvdr: TicketsProvider) {
    this.form = fb.group({
      ticketId: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketIdPage');
  }

  public submitId() {
    const ticketId = this.form.get('ticketId').value;
    const lastName = this.form.get('lastName').value;
    if (this.form.valid) {
      this.authPvdr.loginAnonymously().then(uid => {
        this.ticketPvdr.claimTicket(uid, lastName, ticketId).then(data => {
            this.ticketPvdr.connecttoTicket(uid, lastName, ticketId).then(data => {
              this.navCtrl.push(TabsPage);
            });
          }).catch(err => alert(err.message));
      }).catch(err => alert(err.message));
    } else {
      alert('invalid field');
    }
  }

}
