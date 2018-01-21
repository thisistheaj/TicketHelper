import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from "angularfire2/database";

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  private BASE_PATH = 'TicketHelper/V1/';
  constructor(public afDb: AngularFireDatabase) {
    console.log('Hello DatabaseProvider Provider');
  }

  public getObject(path:string): AngularFireObject<any> {
    return this.afDb.object(this.BASE_PATH + path);
  }

  public getList(path:string): AngularFireList<any> {
    return this.afDb.list(this.BASE_PATH + path);
  }

}
