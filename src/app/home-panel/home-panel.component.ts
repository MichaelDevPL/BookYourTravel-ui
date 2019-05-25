import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-panel',
  templateUrl: './home-panel.component.html',
  styleUrls: ['./home-panel.component.scss']
})
export class HomePanelComponent implements OnInit {

  time: string;
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

  constructor() {
    this.setNow();
  }

  ngOnInit() {

  }
  setNow() {
    let now = new Date();
    let hours = ("0" + now.getHours()).slice(-2);
    let minutes = ("0" + now.getMinutes()).slice(-2);
    let str = hours + ':' + minutes;
    this.time = str;
  }

  public today = (function () {
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${now.getFullYear()}-${month}-${day}`;
  })();
}
