import { Component, OnInit, Input,  } from '@angular/core';

import { BrowserModule }          from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { NgvasModule, tweens, hitAreas } from "ngvas";

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-draw-door',
  templateUrl: './draw-door.component.html',
  styleUrls: ['./draw-door.component.css']
})

export class DrawDoorComponent implements OnInit {

 dato = 1;


  constructor() { }

  ngOnInit() {
  	console.log('componente inicializado...');
  }

  public updateWidth(value): void{
  	console.log("width: " + value );
  }

  public updateHeight(value): void{
    console.log("height: " + value );
  }

  public updateLonaColor(value): void{
 
    console.log("lona color: " + value );
    if(value >= 1 && value <= 11){
      this.lonaFill = this.colors[value - 1];
    }

  }

  public updateOutlineColor(value): void{
    console.log("outline color: " + value );
    if(value >= 1 && value <= 11){
      this.outlineFill = this.colors[value - 1];
    }
  }

  /*

0
:
{id: 1, name: "Ancho", typefeature: "integer", range: "1000,4500"}
1
:
{id: 2, name: "Alto", typefeature: "integer", range: "1000,4500"}
2
:
{id: 3, name: "Color Lona", typefeature: "integer", range: "1,11"}
3
:
{id: 4, name: "Color Perfiles", typefeature: "integer", range: "1,11"}

*/
   private colors = [
                     0xFCAC2F,
                     0x37375B,
                     0x2B4F8D,
                     0xF0F7EF,
                     0xECD9BB,
                     0x86979E,
                     0xF2673C,
                     0x1D1B1E,
                     0xDC2F35,
                     0x1A2F28,
                     0x179785
   ];
   public outlineFill = this.colors[0];
   public lonaFill = this.colors[1];
   public borderFill = 0x009900;
   public squareTranslate: any = [250, 250];
   public squareSize = [100,100];
   public pixelHitArea = hitAreas.PixelHitArea;





}
