import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Logger } from 'angular2-logger/core';

import { Auth } from './../models/auth';
import { User } from './../models/user';
import { UserRegister } from './../models/user-register';

@Injectable()
export class AuthService {

  private url: string = 'https://herokucg2017.herokuapp.com/auth';
  private auth: Auth;

  constructor(private http: HttpClient,
    private logger: Logger) { }

  public logIn(loginData: any) {

  }

  public logOut() {

  }

  public isAuth() {
    return this.auth.check();
  }

  public register(register: UserRegister): Observable<any> {
    return this.http.post(this.url, register.toJSON(), { observe: 'response' })
      .map((response) => {

        let uid = response.body['data'].uid;
        let client = response.headers.get('client');
        let token = response.headers.get('access-token');
        let user = new User(response.body['data']);

        this.auth = new Auth(uid, client, token, user);

        return response.body;
      })
      .catch((error: any) => Observable.throw(error || 'Server Error'));
  }

  public getUser() {
    if (this.auth) {
      return this.auth.getUser();
    }

    return null;
  }

}
