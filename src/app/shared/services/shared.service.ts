import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { BasicUser } from '../model/basic-user.model';
import { Travel } from '../model/travel.model';


@Injectable()
export class SharedService {
   private loggedUser = new BehaviorSubject<BasicUser>(null);
   private travels = new BehaviorSubject<Array<Travel>>(null);

   public setLoggedUser(user: BasicUser): void {
     this.loggedUser.next(user);
   }

   public setTravels(findTravels: Array<Travel>): void {
    this.travels.next(findTravels);
  }

  public getAllTravels(): Observable<Array<Travel>> {
    return this.travels;
  }

   public getLoggedUser(): Observable<BasicUser> {
     return this.loggedUser;
   }

}