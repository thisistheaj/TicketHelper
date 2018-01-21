import { Component } from '@angular/core';

import {ChoosePaymentPage} from "../choose-payment/choose-payment";
import {HistoryPage} from "../history/history";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ChoosePaymentPage;
  tab2Root = HistoryPage;
  // tab3Root = HistoryPage;

  constructor() {

  }
}
