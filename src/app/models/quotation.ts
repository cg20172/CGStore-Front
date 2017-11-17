import { Product } from './product';
import { User } from './user';

export class Quotation {
  public id: number;
  public date: Date;
  public productId: number;
  public typeProduct: string;
  public quantity: number;
  public userId: number;
  public state: string;
  public user: User;
  public product: Product;
  public createdAt: Date;
  public updatedAt: Date;
  public originalData: Object;

  constructor(data: any, user: User = null, product: Product = null) {
    if (data instanceof Object) {
      if (data.pedidoid) {
        let date = data.fecha ? new Date(data.fecha) : null;
        this.id = data.pedidoid ? data.pedidoid : null;
        this.productId = data.productoid ? data.productoid : null;
        this.typeProduct = data.tipoproducto ? data.tipoproducto : null;
        this.state = data.estado ? data.estado : null;
        this.quantity = data.cantidad ? data.cantidad : null;
        this.date = data.fecha ? data.fecha : null;
      } else {
        let date = data.date ? new Date(data.date) : null;
        this.id = data.id ? data.id : null;
        this.productId = data.productId ? data.productId : null;
        this.quantity = data.quantity ? data.quantity : null;
        this.userId = data.userId ? data.userId : null;
        this.state = data.state ? data.state : "1";
        this.date = data.date ? new Date(data.fecha) : null;
        this.createdAt = data.createdAt ? new Date(data.createdAt) : null;
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : null;
      }
    }

    if (user) {
      this.user = user;
    }

    if (product) {
      this.product = product;
    }
  }

  public toJSON() {
    let strDate = null;
    let params = this.product ? this.product.getParamsJSON() : {};

    if (this.date) {
      let year = this.date.getFullYear();
      let month = this.date.getMonth() < 10 ? "0" + this.date.getMonth() : this.date.getMonth();
      let day = this.date.getDay() < 10 ? "0" + this.date.getDay() : this.date.getDay();
      strDate = "" + year + month + day;
    }

    return {
      user_id: this.user ? this.user.id : this.userId,
      //product_id: this.product ? this.product.id : this.productId,
      product_id: this.product.productType,
      date: strDate,
      params: params
    }
  }


}
