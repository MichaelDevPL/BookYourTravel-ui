import { Component, OnInit, Input } from '@angular/core';
import { Travel } from 'src/app/shared/model/travel.model';
import { Router } from '@angular/router';
import { TicketBuy } from 'src/app/shared/model/ticketBuy';
import { BasicUser } from 'src/app/shared/model/basic-user.model';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ObjectUtils } from 'src/app/util/object.utils';
import { BookingTrainService } from 'src/app/shared/services/booking-train.service';

@Component({
  selector: 'app-connection-item',
  templateUrl: './connection-item.component.html',
  styleUrls: ['./connection-item.component.scss']
})
export class ConnectionItemComponent implements OnInit {

  @Input() connection: Travel;
  @Input() counter: number;
  currentUser: BasicUser;

  selectedTypeSeat: String;
  ticket: TicketBuy = new TicketBuy();

  constructor(private router: Router, public sharedService: SharedService, public bookingTrainService: BookingTrainService) {
    this.sharedService.getLoggedUser().subscribe(user => this.currentUser = user);
  }

  ngOnInit() {
  }

  selectChangeHandler (event: any) {
    //update the ui
    this.selectedTypeSeat = event.target.value;
  }

  submit(){
    if(ObjectUtils.isDefined(this.currentUser) && ObjectUtils.isDefined(this.selectedTypeSeat)){
      this.ticket.date_of_purchase = this.date() + ' ' + this.time();
      this.ticket.trainConnection = this.connection.id;
      this.ticket.typeSeatPlace = this.selectedTypeSeat;
      this.ticket.userID = this.currentUser.id;
      console.log(this.ticket)
      this.bookingTrainService.buyTicket(this.ticket);

    }
  }

  public time() {
    let now = new Date();
    let hours = ("0" + now.getHours()).slice(-2);
    let minutes = ("0" + now.getMinutes()).slice(-2);
    return hours + ':' + minutes;
  }

  public date() {
    let now = new Date();
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let day = now.getDate().toString().padStart(2, '0');
    return `${now.getFullYear()}-${month}-${day}`;
  }

}
