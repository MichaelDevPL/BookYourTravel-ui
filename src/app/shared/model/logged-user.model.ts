import {JwtToken} from '../jwt/jwt-token.model';

import { User } from './user.model';

export class LoggedUser {
  public user: User;
  public token: JwtToken;
}