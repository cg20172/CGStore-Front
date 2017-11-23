import { Component, OnInit, ViewChild } from '@angular/core';
import { Logger } from 'angular2-logger/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { OSM_TILE_LAYER_URL } from '@yaga/leaflet-ng2';
import * as _ from 'lodash';

import { AuthService } from './../../services/auth.service';
import { MachineryService } from './../../services/machinery.service';
import { ProductService } from './../../services/product.service';
import { QuotationService } from './../../services/quotation.service';

import { ProductType } from './../../models/product-type';
import { Product } from './../../models/product';
import { ProductProperty } from './../../models/product-property';
import { Quotation } from './../../models/quotation';
import { Machinery } from './../../models/machinery';

import { DrawDoorComponent } from './draw-door/draw-door.component';
import { DrawLegoComponent } from './draw-lego/draw-lego.component';
import { DrawMuelleComponent } from './draw-muelle/draw-muelle.component';
import { DrawAbrigoComponent } from './draw-abrigo/draw-abrigo.component';

import { CustomValidators } from 'ng2-validation';
import { UserRegister } from './../../models/user-register';


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

  private tileLayerUrl: string = OSM_TILE_LAYER_URL;
  private lat: number = 4.6260243;
  private lng: number = -74.1624076;
  private zoom: number = 11;

  private showAllMachinery: boolean;
  private allMachinery: Machinery[];
  private machinerySearch: Machinery;
  private selectedMachine: Machinery;

  private user = null;
  private savingUser: boolean;

  constructor(private logger: Logger,
    private notificationsService: NotificationsService,
    private authService: AuthService,
    private productService: ProductService,
    private quotationService: QuotationService,
    private machineryService: MachineryService,
    private router: Router) { }

  ngOnInit() {
    this.allMachinery = null;
    this.machinerySearch = null;
    this.selectedMachine = null;
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

    this.user = this.authService.getUser();
    if (this.user) {
      this.quotationForm = new FormGroup({
        firstName: new FormControl(this.user ? this.user.firstName : '', [Validators.required]),
        lastName: new FormControl(this.user ? this.user.lastName : '', [Validators.required]),
        address: new FormControl(this.user ? this.user.address : '', []),
        phone: new FormControl(this.user ? this.user.phone : '', []),
        document: new FormControl(this.user ? this.user.document : '', [Validators.required]),
        email: new FormControl(this.user ? this.user.email : '', [Validators.required, Validators.email]),
        enterprise: new FormControl(this.user ? this.user.enterprise : '', []),
        nit: new FormControl(this.user ? this.user.nit : '', []),
        role: new FormControl(this.user ? this.user.role : '', []),
      });

      //register:
    } else {

      this.savingUser = false;
      let password = new FormControl('', [Validators.required, Validators.minLength(8)]);
      let confirmPassword = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);

      this.quotationForm = new FormGroup({
        firstName: new FormControl(this.user ? this.user.firstName : '', [Validators.required]),
        lastName: new FormControl(this.user ? this.user.lastName : '', [Validators.required]),
        address: new FormControl(this.user ? this.user.address : '', []),
        phone: new FormControl(this.user ? this.user.phone : '', []),
        document: new FormControl(this.user ? this.user.document : '', [Validators.required]),
        email: new FormControl(this.user ? this.user.email : '', [Validators.required, Validators.email]),
        enterprise: new FormControl(this.user ? this.user.enterprise : '', []),
        nit: new FormControl(this.user ? this.user.nit : '', []),
        role: new FormControl(this.user ? this.user.role : '', []),
        password: password,
        confirmPassword: confirmPassword,
      });
    }
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

        if (product.name === 'Maquinaria') {
          this.machinerySearch = new Machinery(null);
          this.showAllMachinery = true;
          this.selectedMachine = null;

          this.machineryService.getAll()
            .subscribe((result) => {
              this.allMachinery = result;
            });
        }

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
        case 'float':
        case 'string':
          validations.push(Validators.required);
          validations.push(Validators.min(property.values[0]));
          validations.push(Validators.max(property.values[1]));
          control = new FormControl('', validations);
          // set the medium value option for default
          // control.setValue(Math.floor(((property.values[1] - property.values[0])/2) + property.values[0]));
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
    this.makeQuotation(productForm, quotationForm);
  }

  @ViewChild(DrawDoorComponent)
  private drawDoorComponent: DrawDoorComponent;
  @ViewChild(DrawLegoComponent)
  private drawLegoComponent: DrawLegoComponent;
   @ViewChild(DrawMuelleComponent)
  private drawMuelleComponent: DrawMuelleComponent;
   @ViewChild(DrawAbrigoComponent)
  private drawAbrigoComponent: DrawAbrigoComponent;

  public updateDraw(productName: any, propertyName: any): void {
    if (productName == 'Puerta rápida') {
      var value = this.productForm.get(propertyName).value;
      switch (propertyName) {
        case 'Ancho':
          this.drawDoorComponent.updateWidth(value);
          break;
        case 'Alto':
          this.drawDoorComponent.updateHeight(value);
          break;
        case 'Color_Lona':
          this.drawDoorComponent.updateLonaColor(value.value);
          break;
        case 'Color_Perfiles':
          this.drawDoorComponent.updateOutlineColor(value.value);
          break;
      }
    }else if(productName == 'Sellos'){
      var value = this.productForm.get(propertyName).value;
      switch (propertyName) {
        case 'Ancho':
          this.drawMuelleComponent.updateWidth(value);
          break;
        case 'Alto':
          this.drawMuelleComponent.updateHeight(value);
          break;
        case 'Color':
          this.drawMuelleComponent.updateColor(value.value);
          break;
        case 'Exposicion_Aletas':
            this.drawMuelleComponent.changeAletaHeight(value.value);
          break;
        case 'Inclinacion':
          this.drawMuelleComponent.changeAngleShapeRotation(value);
          break;

      }
    }else if(productName == 'Abrigos'){
      var value = this.productForm.get(propertyName).value;
        switch (propertyName) {
        case 'Dimensiones':
          this.drawAbrigoComponent.changeSize(value.value);
          break;
        case 'Color':
          this.drawAbrigoComponent.updateColor(value.value);
          break;
      }
    } else if (this.selectedProductType.name == 'Lego') {
      var value = this.productForm.get(propertyName).value.value;
      switch (propertyName) {
        case 'Cabina':
          this.drawLegoComponent.changeCabinaSrc(value);
          break;
        case 'Accesorio_Delantero':
          this.drawLegoComponent.changeAccesorioDelanteroSrc(value);
          break;
        case 'Accesorio_Trasero':
          this.drawLegoComponent.changeAccesorioTraseroSrc(value);
          break;
        case 'Inferior':
          this.drawLegoComponent.changeInferiorSrc(value);
          break;
      }
    }

  }

  public formatPropertyName(name): String{
    var re = /_/gi; 
    name = name.replace(re, " ");
    name = name.toLowerCase();
    name = name.charAt(0).toUpperCase() + name.substr(1);

    var words =   name.split(" ");

    for (var i = 0; i < words.length ; i++) {
      if(words[i].length >= 4){
        switch (words[i].substr(words[i].length - 4 )) {

            case "cion":
              words[i] = words[i].substr(0, words[i].length - 4 ) + "ción";
              break;
        
            case "sion":
              words[i] = words[i].substr(0, words[i].length - 4 ) + "sión";
              break;
        }
      }
    }
    name = "";  
    for (var i = 0; i < words.length ; i++) {
        name += words[i];
        if(i < words.length -1){
          name +=  " ";
        }
    }

   
    return name;
  }
  public formatSuffixForm(property):String{
    var suffix = '';
    if(property.name == 'Ancho' || property.name == 'Alto'){
        suffix  = ' cm';
    }else if(property.name == 'Inclinacion'){
      suffix  = '°';
    }
    return suffix ;
  }  
  public formatPlaceHolderForm(property):String{
    var name = '';
    var type = this.formatSuffixForm(property);
    name += this.formatPropertyName(property.name) + ' (' + property.values[0] +  type +' a ' + property.values[1] + type +')';
    return name;  
  }

  public makeQuotation(productForm, quotationForm) {
    let productData = productForm.value;
    let quotationData = quotationForm.value;

    _.forEach(productData, (value, property) => {
      let productProperty = this.selectedProduct.properties.find((prop) => prop.name === property);
      if (productProperty instanceof ProductProperty) {
        if (productProperty.type === 'list') {
          productProperty.value = productProperty.value.value;
        }
        else if (productProperty.type === 'bool' && this.selectedProduct.name != 'Maquinaria') {
             if (value) {
             productProperty.value = 1;
           } else {
             productProperty.value = 0;
           }
        }
        else if (productProperty.name == 'Exposicion_Aletas'){
          switch (value){
            case '1':
              productProperty.value = 1;
             break;
             case '2':
              productProperty.value = 2;
             break;
             case '3':
              productProperty.value = 3;
             break;
          }
        }
        else {
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
          if (quotation.user) {
            this.router.navigateByUrl('/auth/profile');
          } else {
            this.router.navigateByUrl('');
          }
        }
      }, (error) => {
        const toast = this.notificationsService.error(
          'Error Guardando Cotización',
          'No se ha podido guardar la cotización'
        );
      });
  }

  public filterMachinery(): Machinery[] {
    if (!this.allMachinery) {
      return [];
    }

    if (this.showAllMachinery) {
      return this.allMachinery;
    } else {
      return this.allMachinery.filter((machinery) => {
        let valid = true;
        if (this.machinerySearch.isModelEnabled) {
          valid = valid && machinery.model == this.machinerySearch.model;
        }

        if (this.machinerySearch.isNewEnabled) {
          valid = valid && machinery.isNew == this.machinerySearch.isNew;
        }

        if (this.machinerySearch.isStateEnabled) {
          valid = valid && machinery.state == this.machinerySearch.state;
        }

        if (this.machinerySearch.isRepairableEnabled) {
          valid = valid && machinery.repairable == this.machinerySearch.repairable;
        }

        if (this.machinerySearch.isDocumentationEnabled) {
          valid = valid && machinery.documentation == this.machinerySearch.documentation;
        }

        return valid;
      });
    }
  }

  public selectMachinery(machine) {
    this.selectedMachine = machine;
    _.forEach(machine.originalData, (value, key) => {
      this.productForm.controls[key].setValue(value);
    });
    console.log(this.productForm);
  }

  public registerUser(productForm, quotationForm) {
    this.logger.info('Registering user:', quotationForm.value);
    this.savingUser = true;

    let registerData = new UserRegister(quotationForm.value);
    this.authService.register(registerData)
      .subscribe(
      (result) => {
        if (result.status === 'success') {
          this.savingUser = false;
          const toast = this.notificationsService.success(
            'Usuario Creado',
            'El usuario ha sido creado correctamente'
          );


          this.makeQuotation(productForm, quotationForm);


        }
      }, (error) => {
        this.savingUser = false;

        if (error.status === 422) {
          let responseData = JSON.parse(error.error);
          if (responseData.errors.email) {
            const toast = this.notificationsService.error(
              'Error en Formulario',
              responseData.errors['full_messages'][0]
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
