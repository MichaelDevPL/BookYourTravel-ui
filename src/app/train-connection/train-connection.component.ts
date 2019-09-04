import { Component, OnInit } from '@angular/core';
import { Travel } from '../shared/model/travel.model';
import { BookingTrainService } from '../shared/services/booking-train.service';
import { SharedService } from '../shared/services/shared.service';
import { Router } from '@angular/router';
import { ObjectUtils } from '../util/object.utils';
import { BasicUser } from '../shared/model/basic-user.model';

@Component({
  selector: 'app-train-connection',
  templateUrl: './train-connection.component.html'
})
export class TrainConnectionComponent implements OnInit {

  connections: Array<Travel> = new Array<Travel>();

  constructor(public sharedService: SharedService, private trainService: BookingTrainService
        ,private router: Router) {
      this.sharedService.getAllTravels().subscribe(travels =>{
        this.connections = this.castToShowArray(travels);
      });
  }

  ngOnInit() {
  }

  castToShowArray(travels: Array<any>): Array<Travel> {
    if (ObjectUtils.isDefined(travels)) {
      return travels.map(x => Object.assign(new Travel(), x));
    }
    return new Array();
  }
}
