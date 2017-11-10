export class Quotation {
  public pedidoid: number;
  public date: string;
  public productid: number;
  public quantity: number;
  public name: string;
  public document: string;
  public addres: string;
  public phone: string;
  public email: string;
  public enterprise: string;
  public nit: string;
  public role: string;

  constructor(data: any) {
    if (data instanceof Object) {
      this.pedidoid = data.pedidoid;
      this.date = data.fecha;
      this.productid = data.productoid;
      this.quantity = data.cantidad;


    }
  }




}
