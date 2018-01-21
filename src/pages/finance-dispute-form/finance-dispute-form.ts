import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FinanceDisputeFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'finance'
})
@Component({
  selector: 'page-finance-dispute-form',
  templateUrl: 'finance-dispute-form.html',
})
export class FinanceDisputeFormPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinanceDisputeFormPage');
  }

  public goToProrated() {
    this.navCtrl.push('prorated');
  }

}
