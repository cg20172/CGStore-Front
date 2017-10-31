import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logger } from 'angular2-logger/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

import { Product } from './../models/product';


@Injectable()
export class ProductService {
  private url: string = 'https://herokucg2017.herokuapp.com/products';

    public products: Product[];
    
constructor(private http: HttpClient,
    private logger: Logger){ 

}   
    

    public getAllProducts():Observable<any>{


            return this.http.get(this.url)
            .map((response) => {
                console.log(response);
                
                if (!this.products) {
                    this.products = [];
                
                _.forEach(response, (element) => {
                    let product = new Product(element['id'],element['name'], element['description'],element['price'],element['stock'],element['created_at'],element['updated_at']);
                    this.products.push(product);
                });
                }

                return this.products;
                
            })
            .catch((error: any) => Observable.throw(error || 'ServerError'));

    }


}