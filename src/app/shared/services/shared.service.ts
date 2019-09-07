import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { BasicUser } from '../model/basic-user.model';
import { Travel } from '../model/travel.model';
import { TicketBoughtByUser } from '../model/ticketBoughtByUser';


@Injectable()
export class SharedService {
   private loggedUser = new BehaviorSubject<BasicUser>(null);
   private travels = new BehaviorSubject<Array<Travel>>(null);
   private boughtTicket = new BehaviorSubject<Array<TicketBoughtByUser>>(null);

   public setTicket(ticket :Array<TicketBoughtByUser>): void{
     this.boughtTicket.next(ticket);
   }

   public setLoggedUser(user: BasicUser): void {
     this.loggedUser.next(user);
   }

   public setTravels(findTravels: Array<Travel>): void {
    this.travels.next(findTravels);
  }

  public getAllTravels(): Observable<Array<Travel>> {
    return this.travels;
  }

  public getAllBoughtTicket(): Observable<Array<TicketBoughtByUser>>{
    return this.boughtTicket.asObservable();
  }

  public getLoggedUser(): Observable<BasicUser> {
     return this.loggedUser;
   }

}