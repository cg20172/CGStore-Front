import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logger } from 'angular2-logger/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Auth } from './../models/auth';
import { User } from './../models/user';
import { UserRegister } from './../models/user-register';

@Injectable()
export class AuthService {

  private url: string = 'https://herokucg2017.herokuapp.com/auth';
  private auth: Auth;

  constructor(private http: HttpClient,
    private logger: Logger) {

    let authData = JSON.parse(window.localStorage.getItem('auth'));
    if (authData) {
      this.auth = new Auth(authData.uid, authData.client, authData.token, new User(authData.user));
    }
  }

  public logIn(credentials: Object): Observable<any> {
    return this.http.post(this.url + '/sign_in', credentials, { observe: 'response' })
      .map((response) => {

        let uid = response.body['data'].uid;
        let client = response.headers.get('client');
        let token = response.headers.get('access-token');
        let user = new User(response.body['data']);

        this.auth = new Auth(uid, client, token, user);
        window.localStorage.setItem('auth', JSON.stringify(this.auth));

        return response.body;
      })
      .catch((error: any) => Observable.throw(error || 'ServerError'));
  }

  public logOut() {
    if (this.isAuth()) {
      let headers = new HttpHeaders(this.auth.getLogoutData());

      return this.http.delete(this.url + '/sign_out', { headers: headers, observe: 'response' })
        .map((response) => {

          if (response.status === 200 && response.body['success'] === true) {
            window.localStorage.removeItem('auth');
            this.auth = null;
          }

          return response.body;
        })
        .catch((error) => Observable.throw(error || 'ServerError'));
    }
  }

  public register(register: UserRegister): Observable<any> {
    return this.http.post(this.url, register.toJSON(), { observe: 'response' })
      .map((response) => {

        let uid = response.body['data'].uid;
        let client = response.headers.get('client');
        let token = response.headers.get('access-token');
        let user = new User(response.body['data']);

        this.auth = new Auth(uid, client, token, user);
        window.localStorage.setItem('auth', JSON.stringify(this.auth));

        return response.body;
      })
      .catch((error: any) => Observable.throw(error || 'ServerError'));
  }

  public isAuth() {
    return this.auth && this.auth.check();
  }

  public isGuest() {
    return !this.auth || (this.auth && !this.auth.check());
  }

  public getUser() {
    if (this.auth) {
      return this.auth.getUser();
    }

    return null;
  }

}
