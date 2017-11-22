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

export class ProfileComponent implements OnInit {

  private quotations: Quotation[];
  private user: User;
  private userForm: FormGroup;
  private selectedQuotation: Quotation;
  private displayQuotation: Object[];

  public modalRef: BsModalRef;
  constructor(private authService: AuthService,
    private quotationService: QuotationService,
    private notificationsService: NotificationsService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    const toast = this.notificationsService.info(
      'Cargando',
      'Cargando Cotizaciones...',
      { timeOut: 0 }
    );

    this.user = this.authService.getUser();
    console.log(this.user);

    this.quotationService.getQuotations(this.user.id)
      .subscribe((result) => {
        this.notificationsService.remove(toast.id);
        this.quotations = result;
      }, (error) => {
        const toast = this.notificationsService.error(
          'Error ' + error.status,
          error.statusText
        );
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
        key != 'familiaproducto'
      ) {
        compo.displayQuotation.push({ key: key, value: value });
      }
    });
  }
  public updateUser(userForm: FormGroup) {

  }

}
