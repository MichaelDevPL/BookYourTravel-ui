import { Injectable } from '@angular/core';
import { HttpCustomService } from 'src/app/util/http-custom.service';
import { LoginModel } from '../model/login.model';
import { Observable } from 'rxjs';
import { LoggedUser } from '../model/logged-user.model';

@Injectable()
export class AuthDataService {

    constructor(private http: HttpCustomService) {
    }

    public signIn(loginModel: LoginModel): Observable<LoggedUser> {
        console.log(loginModel)
        const url = '/auth/signin';
        return this.http.post(url, loginModel);
    }
}