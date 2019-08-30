import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ObjectUtils} from '../../util/object.utils';
import {JwtManager} from './jwt-manager';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const localtoken: string = JwtManager.getToken();

    if(ObjectUtils.isDefined(localtoken)) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${localtoken}`
        }
      });    }

    return next.handle(req);
  }
}