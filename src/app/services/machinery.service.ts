import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

import { Machinery } from './../models/machinery';

@Injectable()
export class MachineryService {

  private url: string = 'https://cgstore-back2017.herokuapp.com/heavyequipments';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.post(this.url, { parametro1: 1 })
      .map((result) => {

        let listMachinery = [];
        _.forEach(result, (machinery) => {
          listMachinery.push(new Machinery(machinery));
        });

        return listMachinery;
      })
      .catch((error: any) => Observable.throw(error || 'ServerError'));
  }

}
