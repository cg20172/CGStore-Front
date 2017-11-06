import { Component, OnInit } from '@angular/core';
import { Logger } from 'angular2-logger/core';
import { NotificationsService } from 'angular2-notifications';

import { ProductService } from './../../services/product.service';

import { ProductType } from './../../models/product-type';
import { Product } from './../../models/product';
import { ProductProperty } from './../../models/product-property';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})

export class QuotationComponent implements OnInit {
  private productTypes: ProductType[] = [];
  private selectedProductType: ProductType = null;
  private selectedProduct: Product = null;
  private showProductProperties: boolean = false;

  constructor(private productService: ProductService,
    private logger: Logger,
    private notificationsService: NotificationsService) { }

  ngOnInit() {

    const toast = this.notificationsService.info(
      'Cargando',
      'Cargando información...',
      { timeOut: 0 }
    );

    this.productService.getProductTypes()
      .subscribe(
      (result) => {
        this.notificationsService.remove(toast.id);
        this.productTypes = result;
      }, (error) => {
        this.logger.debug('Error: ', error);
      });
  }

  public selectProductType(productType) {


    const toast = this.notificationsService.info(
      'Cargando',
      'Cargando información...',
      { timeOut: 0 }
    );

    this.productService.getProducts(productType.id)
      .subscribe((result) => {
        this.notificationsService.remove(toast.id);
        productType.products = result;
        this.selectedProduct = null;
        this.selectedProductType = productType;
      }, (error) => {
        if (error.status === 401) {
          let responseData = JSON.parse(error.error);
          if (responseData.errors) {
            const toast = this.notificationsService.error(
              'Error en Formulario',
              responseData.errors[0]
            );
          } else {
            const toast = this.notificationsService.error(
              'Error en Formulario',
              'Parece que han habido un error. Vuelva a intentarlo'
            );
          }
        } else {
          const toast = this.notificationsService.error(
            'Error ' + error.status,
            error.statusText
          );
        }
      });
  }

  public selectProduct(product) {
    product.properties = [];
    this.showProductProperties = false;

    const toast = this.notificationsService.info(
      'Cargando',
      'Cargando información...',
      { timeOut: 0 }
    );

    this.productService.getProductProperties(product.id)
      .subscribe((result) => {
        this.notificationsService.remove(toast.id);
        product.properties = result.sort((a, b) => a.type < b.type);
        this.showProductProperties = true;
        this.selectedProduct = product;
      }, (error) => {
        if (error.status === 401) {
          let responseData = JSON.parse(error.error);
          if (responseData.errors) {
            const toast = this.notificationsService.error(
              'Error en Formulario',
              responseData.errors[0]
            );
          } else {
            const toast = this.notificationsService.error(
              'Error en Formulario',
              'Parece que han habido un error. Vuelva a intentarlo'
            );
          }
        } else {
          const toast = this.notificationsService.error(
            'Error ' + error.status,
            error.statusText
          );
        }
      });
  }



}
