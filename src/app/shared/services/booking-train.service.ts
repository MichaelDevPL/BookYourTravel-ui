import { Injectable } from '@angular/core';
import { DataConnection } from '../model/data-connection';

@Injectable({
  providedIn: 'root'
})
export class BookingTrainService {

  constructor() { }

  getTrainSchedule(dataConnect: DataConnection){
    //post these details to API server

    console.log(dataConnect);
  }
}
