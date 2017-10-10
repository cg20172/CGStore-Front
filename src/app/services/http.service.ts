import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
/*Importamos el operador de la promesa*/
@Injectable()
export class HttpService {

  constructor(private http: Http) {}
    
getRequest(url: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let requestOptions = new RequestOptions({ headers: headers });
        
        return this.http.get(url, requestOptions)
            .catch(error => {
                return Observable.throw(error);
            });
        
    }

}
