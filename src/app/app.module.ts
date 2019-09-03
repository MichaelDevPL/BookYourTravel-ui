
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { JwtInterceptor } from './shared/jwt/jwt-interceptor.service';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPanelComponent } from './header-panel/header-panel.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { RegisterPanelComponent } from './register-panel/register-panel.component';
import { HomePanelComponent } from './home-panel/home-panel.component';
import { HttpCustomService } from './util/http-custom.service';
import { UserService } from './shared/services/user.service';
import { BookingTrainService } from './shared/services/booking-train.service';
import { AuthDataService } from './shared/services/auth-data.service';
import { SharedService } from './shared/services/shared.service';
import { TrainConnectionComponent } from './train-connection/train-connection.component';
import { ConnectionItemComponent } from './train-connection/connection-item/connection-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPanelComponent,
    LoginPanelComponent,
    RegisterPanelComponent,
    HomePanelComponent,
    TrainConnectionComponent,
    ConnectionItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpCustomService,
    UserService,
    SharedService,
    BookingTrainService,
    AuthDataService,
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
