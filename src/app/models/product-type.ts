import { Product } from './product';

export class ProductType {

  public id: number;
  public name: string;
  public description: string;
  public created_at: Date;
  public updated_at: Date;

  public products: Product[];

  constructor(data: any) {
    if (data instanceof Object) {
      this.id = data.id;
      this.name = data.name;
      this.description = data.description;
      this.created_at = new Date(data.created_at);
      this.updated_at = new Date(data.updated_at);
    }
  }

}
