export class User {
  public id: number;
  public provider: string;
  public firstName: string;
  public lastName: string;
  public document: string;
  public address: string;
  public phone: string;
  public email: string;
  public uid: string;
  public enterprise: string;
  public nit: string;
  public role: string;



  constructor(data: any) {
    if (data instanceof Object) {
      this.id = data.id;
      this.firstName = data.firstName || data.firstname;
      this.lastName = data.lastName || data.lastname;
      this.document = data.document;
      this.address = data.address;
      this.phone = data.phone;
      this.email = data.email;
      this.enterprise = data.enterprise;
      this.provider = data.provider;
      this.uid = data.uid;
      this.nit = data.nit;
      this.role = data.role;
    }
  }

  toJSON() {
    return {
      id: this.id,
      firstname: this.firstName,
      lastname: this.lastName,
      document: this.document,
      address: this.address,
      phone: this.phone,
      email: this.email,
      enterprise: this.enterprise,
      nit: this.nit,
      role: this.role,
      provider: this.provider,
      uid: this.uid
    }
  }
}
