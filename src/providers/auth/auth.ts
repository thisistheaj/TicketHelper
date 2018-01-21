import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  public uid: string;

  constructor(public afAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  public loginAnonymously(): Promise<string> {
    return this.afAuth.auth.signInAnonymously().then(data => {
      this.uid = data.uid;
      return this.uid;
    })
  }

}
