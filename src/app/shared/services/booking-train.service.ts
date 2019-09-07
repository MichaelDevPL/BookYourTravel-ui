import { Injectable } from '@angular/core';

import { ConnectionTrain } from '../model/connection-train.model';
import { HttpCustomService } from 'src/app/util/http-custom.service';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';
import { Travel } from '../model/travel.model';
import { TicketBuy } from '../model/ticketBuy';
import { TicketBoughtByUser } from '../model/ticketBoughtByUser';
import { BasicUser } from '../model/basic-user.model';
import { delay } from 'q';
import { ObjectUtils } from 'src/app/util/object.utils';

@Injectable({
  providedIn: 'root'
})
export class BookingTrainService {

  private readonly travelURL: String = '/travel'
  currentUser: BasicUser;

  constructor(private http: HttpCustomService,
    private router: Router,
    private sharedService: SharedService) {
      this.sharedService.getLoggedUser().subscribe(user => this.currentUser = user);
}

  getTrainSchedule(searchConnection: ConnectionTrain): void{
    //post these details to API server
    const url = this.travelURL + '/search'
    this.http.post(url, searchConnection)
      .subscribe((connections: Array<Travel>) => this.sharedService.setTravels(connections));
  }

  buyTicket(ticketData: TicketBuy){
    const url = this.travelURL + '/ticketBuy'
    this.http.post(url, ticketData)
      .subscribe(ticket => this.router.navigate(['/home']))

  }

  getAllBoughtTicket(id: number): void{
    const url = this.travelURL + '/boughtTicket/' +id;
    this.http.get(url)
              .subscribe((tickets: Array<TicketBoughtByUser>)=> this.sharedService.setTicket(tickets));
  }

  deleteUserTicket(ticket: TicketBoughtByUser){
    if(ObjectUtils.isDefined(ticket)){
      console.log('Test zadziałał');
    }
    const url = this.travelURL + '/delete/' + ticket.id;
    this.http.delete(url)
          .subscribe(() => this.getAllBoughtTicket(this.currentUser.id));
  }
}
