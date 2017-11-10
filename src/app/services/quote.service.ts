import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

import { User } from './../models/user';
import { Quotation } from './../models/quotation';
/**/


@Injectable()
export class QuoteService {

  private url: string = 'https://cgstore-back2017.herokuapp.com/user_quote';

  constructor(private http: HttpClient) { }

  public getQuotes(userId: number): Observable<any> {
    return this.http.post(this.url, { user_id: userId }, { observe: 'response' })
      .map((response) => {
        let quotes = [];
        _.forEach(response, (quote) => {
          quotes.push(new Quotation(quote));
        });
        return quotes;
      })
      .catch((error: any) => Observable.throw(error || 'ServerError'));
  }
}
