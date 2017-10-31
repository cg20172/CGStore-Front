import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import { ConnectionService } from '../../../services/connection.service';
import { Ficha1 } from '../../../models/ficha1'; 

import { ProductService } from './../../../services/product.service';

import { Product } from './../../../models/product';


@Component({
  selector: 'app-legos',
  templateUrl: './legos.component.html',
  styleUrls: ['./legos.component.css'],
encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,

})
export class LegosComponent implements OnInit {

private legos: Product[];
        
    
constructor( private productService : ProductService) {  }
    
      ngOnInit() {
          this.productService.getAllProducts()
        .subscribe((res)=>{
            
            this.legos = res.filter((elem) => elem.stock > 5 );
            console.log("Mi respuesta:",res);
            
            
        },(error)=>{
            console.log("Hay error",error);
        });
      }
}

export class SliderConfigurableExample {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 1;
}