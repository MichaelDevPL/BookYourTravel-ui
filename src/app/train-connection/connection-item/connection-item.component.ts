import { Component, OnInit, Input } from '@angular/core';
import { Travel } from 'src/app/shared/model/travel.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection-item',
  templateUrl: './connection-item.component.html',
  styleUrls: ['./connection-item.component.sass']
})
export class ConnectionItemComponent implements OnInit {

  @Input() connection: Travel;
  @Input() counter: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
