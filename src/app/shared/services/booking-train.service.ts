import { Injectable } from '@angular/core';

import { SearchConnection } from '../model/search-connection';

@Injectable({
  providedIn: 'root'
})
export class BookingTrainService {

  constructor() { }

  getTrainSchedule(searchConnection: SearchConnection){
    //post these details to API server
    console.log(searchConnection);
  }
}
