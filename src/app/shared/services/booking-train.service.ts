import { Injectable } from '@angular/core';

import { ConnectionTrain } from '../model/connection-train.model';
import { HttpCustomService } from 'src/app/util/http-custom.service';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';
import { Travel } from '../model/travel.model';
import { TicketBuy } from '../model/ticketBuy';

@Injectable({
  providedIn: 'root'
})
export class BookingTrainService {

  private readonly travelURL: String = '/travel'

  constructor(private http: HttpCustomService,
    private router: Router,
    private sharedService: SharedService) {
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
}
