export class UserRegister {
  private firstName: string;
  private lastName: string;
  private address: string;
  private phone: number;
  private email: string;
  private password: string;
  private confirmPassword: string;

  constructor(data: any) {
    if (data instanceof Object) {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.address = data.address;
      this.phone = parseInt(data.phone);
      this.email = data.email;
      this.password = data.password;
      this.confirmPassword = data.confirmPassword;
    }
  }

  toJSON() {
    return {
      firstname: this.firstName,
      lastname: this.lastName,
      address: this.address,
      phone: this.phone,
      email: this.email,
      password: this.password,
      password_confirmation: this.confirmPassword
    };
  }

}
