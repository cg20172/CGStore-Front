import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from './../../services/auth.service';
import { QuotationService } from './../../services/quotation.service';

import { User } from './../../models/user';
import { Quotation } from './../../models/quotation';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  public quotations: Quotation[];
  public user: User;
  public userForm: FormGroup;

  constructor(private authService: AuthService,
    private quotationService: QuotationService,
    private notificationsService: NotificationsService) { }

  ngOnInit() {
    const toast = this.notificationsService.info(
      'Cargando',
      'Cargando Cotizaciones...',
      { timeOut: 0 }
    );

    this.user = this.authService.getUser();
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

  public updateUser() {

  }

}
