import { Component, OnInit, ViewChild } from '@angular/core';
import { Logger } from 'angular2-logger/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';

import { ProductService } from './../../services/product.service';
import { AuthService } from './../../services/auth.service';
import { QuotationService } from './../../services/quotation.service';

import { ProductType } from './../../models/product-type';
import { Product } from './../../models/product';
import { ProductProperty } from './../../models/product-property';
import { Quotation } from './../../models/quotation';

import { DrawDoorComponent} from './draw-door/draw-door.component';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})

export class QuotationComponent implements OnInit {
  private productTypes: ProductType[] = [];
  private selectedProductType: ProductType = null;
  private selectedProduct: Product = null;
  private productQuantity: number = 1;

  private productForm: FormGroup;
  private quotationForm: FormGroup;

  private showProductForm: boolean;

  constructor(private logger: Logger,
    private notificationsService: NotificationsService,
    private authService: AuthService,
    private productService: ProductService,
    private quotationService: QuotationService,
    private router: Router) { }

  ngOnInit() {
    this.showProductForm = false;

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

    let user = this.authService.getUser();
    this.quotationForm = new FormGroup({
      firstName: new FormControl(user ? user.firstName : '', [Validators.required]),
      lastName: new FormControl(user ? user.lastName : '', [Validators.required]),
      address: new FormControl(user ? user.address : '', []),
      phone: new FormControl(user ? user.phone : '', []),
      document: new FormControl(user ? user.document : '', [Validators.required]),
      email: new FormControl(user ? user.email : '', [Validators.required, Validators.email]),
      enterprise: new FormControl(user ? user.enterprise : '', []),
      nit: new FormControl(user ? user.nit : '', []),
      role: new FormControl(user ? user.role : '', []),
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
    this.showProductForm = false;

    const toast = this.notificationsService.info(
      'Cargando',
      'Cargando información...',
      { timeOut: 0 }
    );

    this.productService.getProductProperties(product.id)
      .subscribe((result) => {
        this.notificationsService.remove(toast.id);
        product.properties = result;
        this.initProductForm(product);
        this.selectedProduct = product;
        this.showProductForm = true;
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

  private initProductForm(product) {
    let controls = {};
    product.properties.forEach((property: ProductProperty) => {
      let control = null;
      let validations = [];

      switch (property.type) {
        case 'integer':
          validations.push(Validators.required);
          control = new FormControl('', validations);
          break;
        case 'list':
          validations.push(Validators.required);
          control = new FormControl('', validations);
          break;
        case 'bool':
          control = new FormControl('', validations);
          break;
      }

      controls[property.name] = control;
    });

    this.productForm = new FormGroup(controls);
  }

  public saveQuotation(productForm, quotationForm) {
    let productData = productForm.value;
    let quotationData = quotationForm.value;

    _.forEach(productData, (value, property) => {
      let productProperty = this.selectedProduct.properties.find((prop) => prop.name === property);
      if (productProperty instanceof ProductProperty) {
        if(productProperty.type === 'list'){
          productProperty.value = productProperty.value.value;
        }
        else if(productProperty.type === 'bool'){
          if(value){
             productProperty.value = 1;
          }else {
             productProperty.value = 0;
          }
        }
        else{
          productProperty.value = value;
        }

      }
    });

    quotationData.quantity = this.productQuantity;
    quotationData.date = new Date();
    let quotation = new Quotation(quotationData, this.authService.getUser(), this.selectedProduct);

    this.quotationService.create(quotation)
      .subscribe((result) => {
        if (result.statusText === 'Created') {
          const toast = this.notificationsService.success(
            'Cotización Guardada',
            'La cotización ha sido guardada correctamente'
          );

          this.router.navigateByUrl('/auth/profile');
        }
      }, (error) => {
        const toast = this.notificationsService.error(
          'Error Guardando Cotización',
          'No se ha podido guardar la cotización'
        );
      });
  }




  @ViewChild(DrawDoorComponent)
     private drawDoorComponent: DrawDoorComponent;



  public updateDrawDoor(productName: any, propertyName : any) : void{
    if (productName == 'Puerta rápida'){
       var value = this.productForm.get(propertyName).value;
       switch (propertyName ) {
         case 'Ancho':
           this.drawDoorComponent.updateWidth(value);
           break;
         case 'Alto':
           this.drawDoorComponent.updateHeight(value);
           break;
         case 'Color_Lona':
           this.drawDoorComponent.updateLonaColor(value);
           break;
         case 'Color_Perfiles':
           this.drawDoorComponent.updateOutlineColor(value);
           break;
       }

    }

  }
}
