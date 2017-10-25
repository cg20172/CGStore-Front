import { Injectable } from '@angular/core';
import { Http ,RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConnectionService {
    
CGStore = "https://herokucg2017.herokuapp.com/";

constructor( public http : Http ) { }
    getRequest(path: string) {
        console.log("haciendoPeticion");
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let requestOptions = new RequestOptions({ headers: headers });

            return this.http.get(this.CGStore + path, requestOptions).map( rest => rest.json() );
            

    }


}
