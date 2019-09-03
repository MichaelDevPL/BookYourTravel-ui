import { Injectable } from '@angular/core';
import { HttpCustomService } from 'src/app/util/http-custom.service';
import { Router } from '@angular/router';

import { AuthDataService } from './auth-data.service';
import { SharedService } from './shared.service';
import { JwtManager } from '../jwt/jwt-manager';
import { ObjectUtils } from 'src/app/util/object.utils';
import { LoginModel } from '../model/login.model';
import { LoggedUser } from '../model/logged-user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BasicUser } from '../model/basic-user.model';
import { User } from '../model/user.model';

@Injectable()
export class UserService {

    private readonly USERS_URL: string = '/users';

    constructor(private sharedService: SharedService,
        private http: HttpCustomService, private auth: AuthDataService,
        private router: Router) {
        this.fetchUserIfTokenExists();
    }

    public fetchUserIfTokenExists(): void {
        const loggedName = JwtManager.getNameFromToken();

        if (ObjectUtils.isDefined(loggedName)) {
            this.getByName(loggedName).subscribe((user: BasicUser) => this.sharedService.setLoggedUser(user));
        } else {
            this.router.navigate(['/home']);
        }
    }

    public singIn(loginModel: LoginModel): void {
        this.auth.signIn(loginModel)
            .pipe(map(user => Object.assign(new LoggedUser(), user)))
            .subscribe((loggedUser: LoggedUser) => {
                JwtManager.setToken(loggedUser.token);

                this.sharedService.setLoggedUser(Object.assign(new BasicUser(), loggedUser.user));
                this.router.navigate(['/home']);
            });
    }

    public singOut(userId: number): void {
        JwtManager.cleanTokenCache();
        this.sharedService.setLoggedUser(null);
        this.router.navigate(['/home']);
      }

    public getLoggedUser(): Observable<BasicUser> {
        return this.sharedService.getLoggedUser();
    }

    public getById(userId: any): Observable<BasicUser> {
        const url: string = this.USERS_URL + '/getById/' + userId;
        return this.http.get(url)
            .pipe(map(user => Object.assign(new BasicUser(), user)));
    }

    public getByName(userName: string): Observable<BasicUser> {
        const url: string = this.USERS_URL + '/getByName/' + userName;
        return this.http.get(url)
            .pipe(map(user => Object.assign(new BasicUser(), user)));
    }

    public createUser(user: User): void {
        const url: string = this.USERS_URL + '/create';
        this.http.post(url, user)
          .pipe(map(user => Object.assign(new BasicUser(), user)))
          .subscribe(user => {
            this.sharedService.setLoggedUser(user);
            this.router.navigate(['/login']);
          });
      }
}