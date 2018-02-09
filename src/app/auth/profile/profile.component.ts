import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from './../../services/auth.service';
import { QuotationService } from './../../services/quotation.service';

import { User } from './../../models/user';
import { Quotation } from './../../models/quotation';

import * as _ from 'lodash';

import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit  {
  


  private quotations: Quotation[];
  private user: User;
  private userForm: FormGroup;
  private selectedQuotation: Quotation;
  private displayQuotation: Object[];
  public modalRef: BsModalRef;
  private quotationSubscription;

  

  constructor(private authService: AuthService,
    private quotationService: QuotationService,
    private notificationsService: NotificationsService,
    private modalService: BsModalService
  ) { }
  ngOnDestroy() {
    this.quotationSubscription.unsubscribe();
  }

 private callRefreshQuotationService(toast){
   this.quotationSubscription = this.quotationService.refreshQuotations(this.user.id)
     .subscribe((result) => {
       //console.log("Refresh data...");
       //Only update view when its needed
       if(this.quotations){
           result = result.reverse();
           for (var i = 0, len = this.quotations.length; i < len; i++) { 
             if (this.quotations[i].id != result[i].id || this.quotations[i].state != result[i].state) {
               this.quotations = result;
               break;
             }       
         }
       }else{
         //when call first time
         this.quotations = result.reverse();
         this.notificationsService.remove(toast.id);
       }

     }, (error) => {
       // show error only first time, not when refresh data
       if(!this.quotations){
         const toast = this.notificationsService.error(
           'Error ' + error.status,
           (error.status == 0) ? 'Por favor revise su conexión a Internet' :  error.statusText
         );
       }
       //and try again the service 
       this.callRefreshQuotationService(toast);

     });
 }

  ngOnInit() {
    const toastLoading = this.notificationsService.info(
      'Cargando',
      'Cargando Cotizaciones...',
      { timeOut: 0 }
    );

 

    this.user = this.authService.getUser();
    console.log(this.user);


    this.quotationService.getQuotations(this.user.id)
          .subscribe((result) => {
            this.notificationsService.remove(toastLoading.id);
            this.quotations = result.reverse();
            // call refrehs method
            this.callRefreshQuotationService(toastLoading);
          }, (error) => {
            const toast = this.notificationsService.error(
              'Error ' + error.status,
              (error.status == 0) ? 'Por favor revise su conexión a Internet' :  error.statusText
            );
            // call refrehs method
            this.callRefreshQuotationService(toastLoading);
          });


    this.userForm = new FormGroup({
      firstName: new FormControl(this.user.firstName, [Validators.required]),
      lastName: new FormControl(this.user.lastName, [Validators.required]),
      document: new FormControl(this.user.document, [Validators.required]),
      email: new FormControl(this.user.email, [Validators.required]),
      phone: new FormControl(this.user.phone, [Validators.required]),
      address: new FormControl(this.user.address, [Validators.required]),
      enterprise: new FormControl(this.user.enterprise, [Validators.required]),
      nit: new FormControl(this.user.nit, [Validators.required]),
      role: new FormControl(this.user.role, [Validators.required]),
    });
  }


  public openModal(template: TemplateRef<any>, quotation: Quotation) {
    this.selectedQuotation = quotation;
    this.modalRef = this.modalService.show(template);
    this.displayQuotation = [];
    let compo = this;
    _.forEach(this.selectedQuotation.originalData, function(value, key) {
      if (
        key != 'tipoproducto' &&
        key != 'pedidoid' &&
        key != 'fecha' &&
        key != 'estado' &&
        key != 'cantidad' &&
        key != 'familiaproducto' &&
        key != 'Pieza_1' &&
        key != 'Pieza_2' &&
        key != 'Pieza_3' &&
        key != 'Pieza_4'
      ) {
        compo.displayQuotation.push({ key: compo.formatPropertyName(key), value: compo.formatValueName(value,key,compo.selectedQuotation.originalData['tipoproducto']) });
      }
    });
  }

  public updateUser(userForm: FormGroup) {

  }

  public formatPropertyName(name): String{

      if(name == 'Maquina_Reparar'){
          name = '¿Maquinaria nueva?'
      }else if (name == 'Maquina_Nueva'){
          name = '¿Necesita reparación?'
      }else if (name == 'Maquina_Estado'){
          name = '¿Maquinaria en buen estado?'
      }


    var re = /_/gi; 
    name = name.replace(re, " ");
    name = name.toLowerCase();
    name = name.charAt(0).toUpperCase() + name.substr(1);
    if( name.charAt(0) == "¿"){
        name =  '¿' + name.charAt(1).toUpperCase() + name.substr(2);
    }
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

  public formatValueName(value, property, typeOfProduct): String{
    if(typeOfProduct == 'Puerta rápida'){
      if(property == "Color_Lona" || property == "Color_Perfiles"){
        switch (value) {
          case "1":
            value = "Amarillo";
            break;
          case "2":
            value = "Azul"
            break;
          case "3":
            value = "Azul claro"
            break;
          case "4":
            value = "Blanco"
            break; 
          case "5":
            value = "Crema"
            break;
          case "6":
            value = "Gris"
            break; 
          case "7":
            value = "Naranja"
            break;
          case "8":
            value = "Negro"
            break;
          case "9":
            value = "Rojo"
            break;
          case "10":
            value = "Verde"
            break; 
          case "11":
            value = "Verde claro"
            break;
          case "1":
            value = "Amarillo"
            break; 
        }
      }else if (property != "Ancho" || property != "Alto" || property != "Cantidad_de_Mandos_a_distancia"){
          switch (value) {
          case "0":
              value = "No";
              break;
          case "1":
              value = "Si"
              break;
      }
    }

    }else if(typeOfProduct == 'Sellos' || typeOfProduct == 'Abrigos'){
      if(property == "Color"){
        switch (value) {
          case "1":
            value = "Amarillo";
            break;
          case "2":
            value = "Azul"
            break;
          case "3":
            value = "Azul claro"
            break;
          case "4":
            value = "Negro"
            break; 
        }
      }else if(property == "Exposicion_Aletas"){
        switch (value) {
          case "1":
            value = "10 cm";
            break;
          case "2":
            value = "15 cm"
            break;
          case "3":
            value = "20 cm"
            break;
        }
      }else if(property == "Tipo_de_Pared"){
        switch (value) {
          case "0":
            value = "Ormigón";
            break;
          case "1":
            value = "Panel Frigo"
            break;
        }
      }else if(property == "Dimensiones"){
        switch (value) {
          case "1":
            value = "3200 mm x 3200 mm";
            break;
          case "2":
            value = "3400 mm x 3200 mm"
            break;
          case "3":
            value = "3400 mm x 3400 mm"
            break;
        }
      }


   }else if(typeOfProduct == 'Maquinaria'){
       if(property == "Modelo_Maquina"){
         switch (value) {
           case "1":
             value = "Cargadora frontal";
             break;
           case "2":
             value = "Retroexcavadora"
             break;
           case "3":
             value = "Montacargas"
             break;
           case "4":
             value = "Camioneta"
             break; 
         }
    }else if(property == "Maquina_Documentacion"){
         
    }else{
       switch (value) {
          case "0":
              value = "No";
              break;
          case "1":
              value = "Si"
              break;
      }
    }

  }
    value += this.formatSuffix(property);
    return value;
  }  

  public formatSuffix(property):String{
    var suffix = '';
    if(property == 'Ancho' || property == 'Alto'){
        suffix  = ' mm';
    }else if(property == 'Inclinacion'){
      suffix  = '°';
    }
    return suffix ;
  }  

}
