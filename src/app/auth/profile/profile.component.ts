import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//import { DataSource } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './../../services/auth.service';
import { QuotationService } from './../../services/quotation.service';

import { User } from './../../models/user';
import { Quotation } from './../../models/quotation';



import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/of';




interface Info {
  date: Date;
  id: number;
  productId: number;
  quantity: number;
  state: string;
  typeProduct: string;
}

export class PetDataSource extends DataSource<Info> {

  constructor(private quotations: Info[]) {
    super();
  }

  connect(): Observable<Info[]> {
    return Observable.of(this.quotations);
  }
  disconnect() { }
}
export class ExampleDataSource extends DataSource<any> {
  constructor(private quotations: Element[]) {
    super();
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(this.quotations);
  }

  disconnect() { }
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent {


  displayedColumns = ['position', 'name', 'weight', 'symbol'];

  public quotations: Element[];
  dataSource = new ExampleDataSource(this.quotations);
  private user: User;
  private userForm: FormGroup;




  constructor(private authService: AuthService,
    private quotationService: QuotationService,
    private notificationsService: NotificationsService) { }

  ngOnInit() {


    //this.dataSource = new PetDataSource(this.quotations);

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
        this.dataSource = new ExampleDataSource(this.quotations);
        console.log(this.quotations);
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



}
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
