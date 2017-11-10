import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../services/auth.service';
import { QuoteService } from './../../services/quote.service';

import { NotificationsService } from 'angular2-notifications';

import { User } from './../../models/user';
import { Quotation } from './../../models/quotation';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private quotations: Quotation[];
  private dataUser: User;
  constructor(private authService: AuthService, private quoteService: QuoteService,
    private notificationsService: NotificationsService) { }

  ngOnInit() {
    const toast = this.notificationsService.info(
      'Cargando',
      'Cargando Cotizaciones...',
      { timeOut: 0 }
    );
    this.dataUser = this.authService.getUser();
    this.quoteService.getQuotes(this.dataUser.id)
      .subscribe((result) => {
        this.notificationsService.remove(toast.id);
        this.quotations = result;
      }, (error) => {
        const toast = this.notificationsService.error(
          'Error ' + error.status,
          error.statusText
        );
      }

      );
    console.log(this.dataUser);
    console.log(this.dataUser.lastName);
    console.log(this.dataUser.address);
  }

}
