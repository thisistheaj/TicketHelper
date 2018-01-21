import {Injectable} from '@angular/core';
import {DatabaseProvider} from "../database/database";

/*
  Generated class for the TicketsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TicketsProvider {

  constructor(public dbpvdr: DatabaseProvider) {
    console.log('Hello TicketsProvider Provider');
  }

  public addTicket(uid: string, lastName: string, ticketId: string) {
    return this.dbpvdr.getObject(uid + '/' + ticketId).set({
      lastName: lastName,
      ticketId: ticketId,
      uid: uid
    }).then(data => console.log('wooo', data));
  }

  public claimTicket(uid: string, lastName: string, ticketId: string) {
    console.log('claiming');
    return new Promise((resolve, reject) => {
      this.dbpvdr.getObject(ticketId).valueChanges().subscribe(data => {
        if (data) {
          resolve(data);
        }
        reject({message: 'No ticket found for this ID'});
      });
    })
  }

}
