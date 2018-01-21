import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ChoosePaymentPage} from "../pages/choose-payment/choose-payment";
import {HistoryPage} from "../pages/history/history";
import {TicketIdPage} from "../pages/ticket-id/ticket-id";
import {AngularFireModule} from "angularfire2";
import { AuthProvider } from '../providers/auth/auth';
import {AngularFireAuth, AngularFireAuthModule} from "angularfire2/auth";
import { DatabaseProvider } from '../providers/database/database';
import { TicketsProvider } from '../providers/tickets/tickets';

@NgModule({
  declarations: [
    MyApp,
    ChoosePaymentPage,
    HistoryPage,
    TabsPage,
    TicketIdPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBbL-igADrmju-2ZjUWvSY-724geRuNF6U",
      authDomain: "korus-website.firebaseapp.com",
      databaseURL: "https://korus-website.firebaseio.com",
      projectId: "korus-website",
      storageBucket: "korus-website.appspot.com",
      messagingSenderId: "10679451438"
    }),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChoosePaymentPage,
    HistoryPage,
    TabsPage,
    TicketIdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireAuth,
    DatabaseProvider,
    TicketsProvider
  ]
})
export class AppModule {
}
