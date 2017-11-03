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
      .map((response) => {
        console.log(response);
        let productProperties = [];
        _.forEach(response, (productProperty) => {
          productProperties.push(new ProductProperty(productProperty));
        });

        return productProperties;
      })
      .catch((error: any) => Observable.throw(error || 'ServerError'));;
  }

}
