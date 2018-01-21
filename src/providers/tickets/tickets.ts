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

  public addTicket(lastName: string, amount: number) {
    const tid = this.uuidv4();
    return this.dbpvdr.getObject('tickets/' + tid).set({
      lastName: lastName,
      ticketId: tid,
      amount: amount
    });
  }

  public claimTicket(uid: string, lastName: string, ticketId: string) {
    console.log('claiming');
    return new Promise((resolve, reject) => {
      this.dbpvdr.getObject('tickets/' + ticketId).valueChanges().subscribe(data => {
        console.log('d',data);
        if (data) {
          resolve(data);
        }
        reject({message: 'No ticket found for this ID'});
      });
    })
  }

  public getTickets() {
    return this.dbpvdr.getList('tickets').valueChanges();
  }

  public uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }


}
