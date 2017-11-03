export class Product {
  public id: number;
  public name: string;
  public productType: number;
  public created_at: Date;
  public updated_at: Date;
  public properties: Object[]

  constructor(data: any) {
    if (data instanceof Object) {
      this.id = data.id;
      this.name = data.name;
      this.productType = data.product_id;
      this.created_at = new Date(data.created_at);
      this.updated_at = new Date(data.updated_at);
    }
  }

}
