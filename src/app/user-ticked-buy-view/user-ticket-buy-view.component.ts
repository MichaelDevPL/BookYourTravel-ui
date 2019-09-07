import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { BookingTrainService } from '../shared/services/booking-train.service';
import { Router } from '@angular/router';
import { TicketBoughtByUser } from '../shared/model/ticketBoughtByUser';
import { BasicUser } from '../shared/model/basic-user.model';
import { ObjectUtils } from '../util/object.utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-ticket-buy-view',
  templateUrl: './user-ticket-buy-view.component.html'
})
export class UserTicketBuyViewComponent implements OnInit {

  ticketsUser: Array<TicketBoughtByUser> = new Array<TicketBoughtByUser>();
  currentUser: BasicUser;

  constructor(public sharedService: SharedService, private trainService: BookingTrainService
    ,private router: Router) { 
      this.sharedService.getLoggedUser().subscribe(user => this.currentUser = user);
      this.sharedService.getAllBoughtTicket()
              .subscribe(tickets => this.ticketsUser = tickets);

      this.trainService.getAllBoughtTicket(this.currentUser.id);
    }

  ngOnInit() {
  }

  onDelete(ticket: TicketBoughtByUser) {
    this.trainService.deleteUserTicket(ticket);
  }
}
