import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import * as firebase from 'firebase';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TicketsProvider} from "../../providers/tickets/tickets";

/**
 * Generated class for the DisputeFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'dispute'
})
@Component({
  selector: 'page-dispute-form',
  templateUrl: 'dispute-form.html',
})
export class DisputeFormPage {

  public imageUrl = '';
  public form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public ticketsPvdr: TicketsProvider) {
    this.form = fb.group({
      description: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength((360))])],
      date: ['', Validators.required]
    })
  }

  public fileChanged(event) {
    console.log('file changed: ', event);
    let file = event.target.files[0];
    // this.db.object('file').set(file.name)
    //   .then(data => console.log('success: ',data), err => console.error(err))
    firebase.storage().ref('files/' + file.name)
      .put(event.target.files[0])
      .then(data => this.imageUrl = data.downloadURL, err => console.error(err))
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DisputeFormPage');
  }

  public handleSubmit() {
    const description = this.form.get('description').value;
    const date = this.form.get('date').value;
    this.ticketsPvdr.submitDispute(description, date, this.imageUrl).then(data => {
      this.form.get('description').reset();
      this.form.get('date').reset();
      alert('request submitted');
    })
  }

}
