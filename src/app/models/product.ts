import { ProductProperty } from './product-property';
import * as _ from 'lodash';

export class Product {
  public id: number;
  public name: string;
  public productType: number;
  public created_at: Date;
  public updated_at: Date;
  public properties: ProductProperty[]

  constructor(data: any, properties: ProductProperty[] = null) {
    if (data instanceof Object) {
      this.id = data.id;
      this.name = data.name;
      this.productType = data.product_id;
      this.created_at = new Date(data.created_at);
      this.updated_at = new Date(data.updated_at);
    }

    if (properties !== null) {
      this.properties = properties;
    }
  }

  public getParamsJSON() {
    let params = {};

    _.forEach(this.properties, (property, name) => {
      params[property.id] = property.value;
    });

    return params;
  }
}
