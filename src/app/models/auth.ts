import { User } from './user';

export class Auth {

  constructor(public uid: string,
    public client: string,
    public token: string,
    private user: User) { }

  public getUser() {
    return this.user;
  }

  public setUser(user: User) {
    this.user = user;
  }

  public check() {
    return this.uid && this.client && this.token && this.user;
  }

}
