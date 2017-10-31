export class Product {

  public characteristics: Object[] = [];

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public stock: number,
    public created_at: Date,
    public updated_at: Date
  ) { }

  public getName() {
    return this.name;
  }

}
