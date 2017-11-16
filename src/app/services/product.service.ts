import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logger } from 'angular2-logger/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

import { ProductType } from './../models/product-type';
import { ProductProperty } from './../models/product-property';
import { Product } from './../models/product';


@Injectable()
export class ProductService {
  private url: string = 'https://cgstore-back2017.herokuapp.com/consultproducts';

  constructor(private http: HttpClient,
    private logger: Logger) {
  }

  public getProductTypes(): Observable<any> {
    return this.http.post(this.url, { parametro1: 1 })
      .map((response) => {
        let productTypes = [];
        _.forEach(response, (productType) => {
          productTypes.push(new ProductType(productType));
        });

        return productTypes;
      })
      .catch((error: any) => Observable.throw(error || 'ServerError'));
  }

  public getProducts(productTypeId: number): Observable<any> {
    return this.http.post(this.url, { parametro1: 2, parametro2: productTypeId })
      .map((response) => {
        let products = [];
        _.forEach(response, (product) => {
          products.push(new Product(product));
        });
        return products;
      })
      .catch((error: any) => Observable.throw(error || 'ServerError'));
  }

  public getProductProperties(productId: number): Observable<any> {
    return this.http.post(this.url, { parametro1: 3, parametro2: productId })
      .map((response: Array<any>) => response.map((property) => {
        property = new ProductProperty(property);

        if (property.type === 'integer' || property.type == 'bool') {
          property.values = property.values.split(',').map((val) => parseInt(val));
        } else if (property.type === 'list') {
          let items = [];
          property.values.split(',').map((item) => {
            let data = item.split('-');
            //console.log(data.length);
            //console.log(data[0]);
            if(data.length == 2){
              data[0] = parseInt(data[0]);
              items.push({
                value: data[0],
                name: data[1]
              });
            }else if (data.length == 1){
               items.push({
                value: data[0],
                name: data[0]
              });
            }

          });

          property.values = items;
        }

        return property;
      }).sort((a, b) => a.type < b.type ? 1 : -1))
      .catch((error: any) => Observable.throw(error || 'ServerError'));;
  }

}
