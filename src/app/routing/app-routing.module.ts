import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePanelComponent } from '../home-panel/home-panel.component';
import { LoginPanelComponent } from '../login-panel/login-panel.component';
import { RegisterPanelComponent } from '../register-panel/register-panel.component';
import { TrainConnectionComponent } from '../train-connection/train-connection.component';
import { UserTicketBuyViewComponent } from '../user-ticked-buy-view/user-ticket-buy-view.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:HomePanelComponent},
  {path: 'login', component:LoginPanelComponent},
  {path: 'register', component:RegisterPanelComponent},
  {path: 'connection', component:TrainConnectionComponent},
  {path: 'boughtTicket', component:UserTicketBuyViewComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
