import {JwtToken} from './jwt-token.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import {ObjectUtils} from '../../util/object.utils';

export class JwtManager {

  constructor(public jwtHelper: JwtHelperService){}

  public static getToken(): string {
    return localStorage.getItem('jwtToken');
  }

  public static setToken(jwtToken: JwtToken): void {
    localStorage.setItem('jwtToken', jwtToken.token);
  }

  public static getNameFromToken(): string {
    const helper = new JwtHelperService();
    const token = JwtManager.getToken()
    if(ObjectUtils.isDefined(token)){
      return helper.decodeToken(JwtManager.getToken()).sub;
    }
    return null;
  }

  public static cleanTokenCache() {
    localStorage.removeItem('jwtToken');
  }
}