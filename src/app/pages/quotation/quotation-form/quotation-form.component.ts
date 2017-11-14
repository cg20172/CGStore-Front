import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Product } from './../../../models/product';
import { ProductProperty } from './../../../models/product-property';

@Component({
  selector: 'app-quotation-form',
  templateUrl: './quotation-form.component.html',
  styleUrls: ['./quotation-form.component.css']
})

export class QuotationFormComponent implements OnInit {

  @Input('product') product: Product;
  public quotationForm: FormGroup;
  public savingQuote: boolean;

  constructor() { }

  ngOnInit() {
    let controls = {};
    this.product.properties.forEach((property: ProductProperty) => {
      let control = null;
      let validations = [Validators.required];

      switch (property.type) {
        case 'integer':
          control = new FormControl('', validations);
          break;
        case 'list':
          control = new FormControl('', validations);
          break;
        case 'bool':
          control = new FormControl('', validations);
          break;
      }

      controls[property.name] = control;
    });

    this.quotationForm = new FormGroup(controls);
  }

  registerQuotation(quotationForm) {

  }

}
