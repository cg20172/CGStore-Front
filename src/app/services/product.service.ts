import { Injectable } from '@angular/core';


import { Product } from './../models/product';




@Injectable()
export class ProductService {
      private url: string = 'https://herokucg2017.herokuapp.com/products';
    public product: Product;
    
constructor() { 
 
    
    

        let productData =
        JSON.parse(window.localStorage.getItem('products'));
      
           if(productData){
            this.product = new  Product(productData.id,productData.name,productData.description,productData.price,productData.stock);
        }
     
  }
    

   public getProduct(){
        return this.product;

    }


}