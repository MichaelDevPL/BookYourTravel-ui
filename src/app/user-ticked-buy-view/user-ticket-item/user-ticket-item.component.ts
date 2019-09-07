import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TicketBoughtByUser } from 'src/app/shared/model/ticketBoughtByUser';
import { ObjectUtils } from 'src/app/util/object.utils';

@Component({
  selector: 'app-user-ticket-item',
  templateUrl: './user-ticket-item.component.html',
  styleUrls: ['./user-ticket-item.component.scss']
})
export class UserTicketItemComponent implements OnInit {

  @Input() ticket: TicketBoughtByUser;
  @Input() counter: number;

  @Output() delete = new EventEmitter<TicketBoughtByUser>();

  constructor() { }

  ngOnInit() {
  }

  cancel(){
    this.delete.emit(this.ticket);
  }

}
