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

  constructor(private http: HttpClient) { }

  public getQuotations(userId: number): Observable<any> {
    return this.http.post(this.url + 'user_quote', { user_id: userId }, { observe: 'response' })
      .map((response) => {
        let quotations = [];
        _.forEach(response.body, (quote) => {
          quotations.push(new Quotation(quote));
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
}
