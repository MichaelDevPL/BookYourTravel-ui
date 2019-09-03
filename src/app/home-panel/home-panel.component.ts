import { Component, OnInit } from '@angular/core';

import { BookingTrainService } from '../shared/services/booking-train.service';
import { ConnectionTrain } from '../shared/model/connection-train.model';

@Component({
  selector: 'app-home-panel',
  templateUrl: './home-panel.component.html',
  styleUrls: ['./home-panel.component.scss']
})
export class HomePanelComponent implements OnInit {

  public searchConnection: ConnectionTrain = new ConnectionTrain();

  stations: String[] = [
    'Gdakowo',
    'Gdańsk Główny',
    'Gdańsk Lipce',
    'Gdańsk Oliwa',
    'Gdańsk Orunia',
    'Kraków Batowice',
    'Kraków Bieżanów',
    'Kraków Bieżanów Drożdżownia',
    'Kraków Bonarka',
    'Kraków Business Park',
    'Kraków Główny',
    'Kraków Lotnisko',
    'Kraków Łagiewniki',
    'Kraków Łobzów',
    'Kraków Młynówka',
    'Opole Główne',
    'Opole Gosławice',
    'Opole Groszowice',
    'Opole Grotowice',
    'Poznań Główny',
    'Poznań Górczyn',
    'Poznań Junikowo',
    'Poznań Karolin',
    'Rzeszów Osiedle',
    'Rzeszów Staroniwa',
    'Rzeszów Załęże',
    'Warszawa Aleje Jerozolimskie',
    'Warszawa Anin',
    'Warszawa Centralna',
    'Warszawa Choszczówka',
    'Warszawa Dawidy',
    'Warszawa Falenica',
    'Warszawa Gdańska',
    'Warszawa Gocławek',
    'Warszawa Gołąbki',
    'Warszawa Jeziorki',
  ]

  constructor(private bookingTrain: BookingTrainService) {
    this.searchConnection.depart_date = this.date();
    this.searchConnection.depart_time = this.time();
  }

  ngOnInit() {

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

  connectionSearching(){
    this.bookingTrain.getTrainSchedule(this.searchConnection);
  }
}
