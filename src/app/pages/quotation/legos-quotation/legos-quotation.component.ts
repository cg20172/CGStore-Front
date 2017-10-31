import { Component, OnInit } from '@angular/core';

import { ProductService } from './../../../services/product.service';

import { Product } from './../../../models/product';



@Component({
  selector: 'app-legos-quotation',
  templateUrl: './legos-quotation.component.html',
  styleUrls: ['./legos-quotation.component.css']
})
export class LegosQuotationComponent implements OnInit {

  private selectedValue: Product;
  private legos: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts()
      .subscribe((res) => {
        this.legos = res;//.filter((elem) => elem.stock > 5);
        console.log("Mi respuesta:", res);
      }, (error) => {
        console.log("Hay error", error)
      });
  }
}
