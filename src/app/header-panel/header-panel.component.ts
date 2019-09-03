import { Component, OnInit } from '@angular/core';
import { BasicUser } from '../shared/model/basic-user.model';
import { UserService } from '../shared/services/user.service';
import { ObjectUtils } from '../util/object.utils';

@Component({
  selector: 'app-header-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.scss']
})
export class HeaderPanelComponent implements OnInit {

  public loggedUser: BasicUser;

  constructor(public userService: UserService) { this.subscribe() }

  ngOnInit() {
  }

  public isLoggedPanelVisible(): boolean {
    return !ObjectUtils.isDefined(this.loggedUser);
  }

  private subscribe(): void {
    this.userService.getLoggedUser()
      .subscribe(user => this.loggedUser = user);
  }
}
