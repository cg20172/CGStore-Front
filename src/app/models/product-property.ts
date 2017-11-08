export class ProductProperty {
  public id: number;
  public name: string;
  public value: any = null;
  public type: string;
  public values: any;

  constructor(data: any) {
    if (data instanceof Object) {
      this.id = data.id;
      this.name = data.name;
      this.type = data.typefeature;
      this.values = data.range;
    }
  }
}
