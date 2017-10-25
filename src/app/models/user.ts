export class User {
  public id: number;
  public email: string;
  public provider: string;
  public uid: string;
  public firstName: string;
  public lastName: string;
  public address: string;
  public phone: string;

  constructor(data: any) {
    if (data instanceof Object) {
      this.id = data.id;
      this.email = data.email;
      this.provider = data.provider;
      this.uid = data.uid;
      this.firstName = data.firstName || data.firstname;
      this.lastName = data.lastName || data.lastname;
      this.address = data.address;
      this.phone = data.phone;
    }
  }

  toJSON() {
    return {
      id: this.id,
      email: this.email,
      provider: this.provider,
      uid: this.uid,
      firstname: this.firstName,
      lastname: this.lastName,
      address: this.address,
      phone: this.phone
    }
  }
}
