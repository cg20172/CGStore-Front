export class ProductProperty {
  public id: number;
  public name: string;
  public type: string;
  public values: any = null;

  constructor(data: any) {
    if (data instanceof Object) {
      this.id = data.id;
      this.name = data.name;
      this.type = data.type;
      this.values = data.values;
    }
  }
}
