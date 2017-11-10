export class UserRegister {
  private firstName: string;
  private lastName: string;
  private address: string;
  private phone: string;
  private document: string;
  private email: string;
  private password: string;
  private confirmPassword: string;
  private enterprise: string;
  private nit: string;
  private role: string;

  constructor(data: any) {
    if (data instanceof Object) {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.address = data.address;
      this.phone = data.phone;
      this.document = data.document;
      this.email = data.email;
      this.password = data.password;
      this.confirmPassword = data.confirmPassword;
      this.enterprise = data.enterprise;

      if (data.enterprise) {
        this.nit = data.nit;
        this.role = data.role;
      }
    }
  }

  toJSON() {
    return {
      firstname: this.firstName,
      lastname: this.lastName,
      address: this.address,
      phone: this.phone,
      document: this.document,
      email: this.email,
      password: this.password,
      password_confirmation: this.confirmPassword,
      enterprise: this.enterprise,
      nit: this.nit,
      role: this.role
    };
  }

}
