import { Component, OnInit } from '@angular/core';

import { ProductService } from './../../../services/product.service';

import { Product } from './../../../models/product';


@Component({
  selector: 'app-machinery-quotation',
  templateUrl: './machinery-quotation.component.html',
  styleUrls: ['./machinery-quotation.component.css']
})
export class MachineryQuotationComponent implements OnInit {

  private selectedValue: Product;
  private machines: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts()
      .subscribe((res) => {
        this.machines = res;//.filter((elem) => elem.stock > 5);
        console.log("Mi respuesta:", res);
      }, (error) => {
        console.log("Hay error", error)
      });
  }

  step2: any = {
    showNext: true,
    showPrev: true
  };

  step3: any = {
    showSecret: false
  };

  data: any = {
    email: 'muk@gmail.com'
  };

  isCompleted: boolean = false;

  onStep1Next(event) {
    console.log('Step1 - Next');
  }

  onStep2Next(event) {
    console.log('Step2 - Next');
  }

  onStep3Next(event) {
    console.log('Step3 - Next');
  }

  onComplete(event) {
    this.isCompleted = true;
  }

  onStepChanged(step) {
    console.log('Changed to ' + step.title);
  }

}
