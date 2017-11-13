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

  public updateWidth(width): void{
  	this.dato += width;
  	//console.log(this.width);
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

     public squareFill = 0x666666;
  public otherFill = 0xa12aaa;
  public borderFill = 0x009900;
   public squareTranslate: any = [250, 250];
   public squareSize = [100,100];
   public pixelHitArea = hitAreas.PixelHitArea;



   public onClick (e: MouseEvent): void {
     console.log(e);
     this.squareSize = [200,200];
     this.squareTranslate = [[0, -100], 500, tweens.easings.easeOutCircular, () => this.squareTranslate = [[0, 100], 800, tweens.easings.easeOutBounce]];
   }

   public onMouseEnter (e: MouseEvent): void {
     this.squareFill = 0x666666;
   }

   public onMouseLeave (e: MouseEvent): void {
     this.squareFill = 0x009900;
   }
  


}
