import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../../services/connection.service';
@Component({
  selector: 'app-legos',
  templateUrl: './legos.component.html',
  styleUrls: ['./legos.component.css'],

})
export class LegosComponent implements OnInit {

constructor( private connServ : ConnectionService ) { }
    
      ngOnInit() {

         

      }
    
    test(){
        console.log("hola");
        let o: any;
        this.connServ.getRequest("quotes/2").subscribe( data=>{
            /*los datos solo se pueden manejar acá*/
            console.log(data);o = data;
            console.log(o.status);
        });
        
 
    }
    



}

