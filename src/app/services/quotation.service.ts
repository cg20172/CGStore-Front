import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

import { User } from './../models/user';
import { Quotation } from './../models/quotation';
/**/


@Injectable()
export class QuotationService {

  private url: string = 'https://cgstore-back2017.herokuapp.com/';
  private urlMachienary: string = 'https://script.google.com/macros/s/AKfycbxTTi1hkoAUzJCADQcw4wRZnFBo8J0OqRIxfiC-iEgy6ymW1Ncw/exec';
  constructor(private http: HttpClient) { }

  public refreshQuotations(userId: number): Observable<any> {


    return  Observable.interval(10000)
          .flatMap(() => this.http.post(this.url + 'user_quote', { user_id: userId }, { observe: 'response' })
          .map((response) => {
            let quotations = [];
             _.forEach(response.body, (quote) => {
              let quotation = new Quotation(quote);
              quotation.originalData = quote;
              quotations.push(quotation);
              });
            return quotations;
        })
      .catch((error: any) => Observable.throw(error || 'ServerError'))
      );
  }
  public getQuotations(userId: number): Observable<any> {
    return this.http.post(this.url + 'user_quote', { user_id: userId }, { observe: 'response' })
          .map((response) => {
            let quotations = [];
            _.forEach(response.body, (quote) => {
              let quotation = new Quotation(quote);
              quotation.originalData = quote;
              quotations.push(quotation);
            });
            return quotations;
          })
          .catch((error: any) => Observable.throw(error || 'ServerError'));
  }

  public create(quotation: Quotation): Observable<any> {
    return this.http.post(this.url + 'new_quote', quotation.toJSON(), { observe: 'response' })
      .map((response) => {
        return response;
      })
      .catch((error: any) => Observable.throw(error || 'ServerError'));
  }

  public activeMachienaryScript(): Observable<any>{
    console.log("Activando maquinaria...");
    return this.http.get(this.urlMachienary, { observe: 'response', responseType: 'text' })
      .map((response) => {
        return response;
      })
      .catch((error: any) => Observable.throw(error || 'ServerError'));
  }
}
