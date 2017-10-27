import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import { ConnectionService } from '../../../services/connection.service';
import { Ficha1 } from '../../../models/ficha1'; 



@Component({
  selector: 'app-legos',
  templateUrl: './legos.component.html',
  styleUrls: ['./legos.component.css'],
encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,

})
export class LegosComponent implements OnInit {

    
     ficha1 = new Ficha1 ('2');
        
    
constructor( private connServ : ConnectionService ) {  }
    
    test(){
        
         
        console.log("hola");
        let o: any;
        this.connServ.getRequest("quotes/2").subscribe( data=>{
            /*los datos solo se pueden manejar acá*/
            console.log(data);o = data;

            
            console.log(o.status);
        });
        
 
    }
    
      ngOnInit() {
          
      }
}

export class SliderConfigurableExample {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 1;
}