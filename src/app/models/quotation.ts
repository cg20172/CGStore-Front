export class Quotation {
  public pedidoid: number;
  public fecha: string;
  public productid: number;
  public cantidad: number;
  public nombre: string;
  public cedula: string;
  public direccion: string;
  public telefono: string;
  public email: string;
  public empresa: string;
  public nit: string;
  public cargo: string;
  public tipoproducto: string;
  public familiaproducto: string;
  public Ancho: string;
  public Alto: string;
  public Exposición_Aletas: string;

  constructor(data: any) {
    if (data instanceof Object) {
      this.pedidoid = data.pedidoid;
      this.fecha = data.fecha;
      this.productid = data.productid;
      this.cantidad = data.cantidad;
    }
  }




}
