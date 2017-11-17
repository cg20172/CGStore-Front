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


  constructor() { 
      this.initSizeDoor();
  }

  ngOnInit() {
  	//console.log('componente inicializado...');
  }

  public initSizeDoor(): void {
    this.updateHeight(2500);
    this.updateWidth(2000);
  }

  public updateWidth(value): void{
  	//console.log("width: " + value );
    var width =  (value / this.sizefactor) - this.lonaWidth;
    if(this.lonaWidth + width >= 1000/this.sizefactor && this.lonaWidth + width <= 4500 / this.sizefactor){
      this.lonaWidth += width;
      this.topWidth += width;
      this.outlineRightX += (width / 2);
      this.outlineLeftX -= (width / 2);
      this.dividerWidth = this.lonaWidth;
    }
  }

  public updateHeight(value): void{
    //console.log("height: " + value );
    var height = (value / this.sizefactor) - this.lonaHeight;
    if(this.lonaHeight + height >= 1000/this.sizefactor && this.lonaHeight + height <= 4500 / this.sizefactor){
        var currentLonaHeight = this.lonaHeight;

        this.lonaHeight += height;
        this.outlineHeight += height;
        this.topY -= (height / 2);

        this.divider_1_Y =  this.divider_1_Y - (height/20);
        this.divider_2_Y =  this.divider_2_Y + (height/10);
        this.divider_3_Y =  this.divider_3_Y + (height/4.2);
      }
  }

  public updateLonaColor(value): void{
 
    //console.log("lona color: " + value );
    if(value >= 1 && value <= 11){
      this.lonaFill = this.colors[value - 1];
    }

  }

  public updateOutlineColor(value): void{
    //console.log("outline color: " + value );
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
{id: 3, name: "Color_Lona", typefeature: "integer", range: "1,11"}
3
:
{id: 4, name: "Color_Perfiles", typefeature: "integer", range: "1,11"}

*/
  public sizefactor = 5;  

  public lonaWidth =  4500 / this.sizefactor;
  public lonaHeight =  4500 / this.sizefactor;


  public outlineWidth = 100 / this.sizefactor;
  public outlineHeight = this.lonaHeight;


  public topWidth = this.lonaHeight + ((60 / this.sizefactor) * 2) + this.outlineWidth;
  public topHeight = 270 / this.sizefactor;


  public dividerWidth = this.lonaWidth;
  public dividerHeight = 5;




  public canvasWidth = this.topWidth;
  public canvasHeight = this.lonaHeight + this.topHeight;


  public topX =  this.canvasWidth / 2;
  public topY =   this.topHeight / 2;

  public lonaX =  this.canvasWidth  / 2 ;
  public lonaY =  (this.lonaHeight / 2 ) + (this.topHeight);

  public outlineLeftX = (this.canvasWidth / 2) - (this.topWidth / 2) + (60 / this.sizefactor);
  public outlineLeftY  = (this.outlineHeight / 2) + (this.topHeight);

  public outlineRightX = (this.canvasWidth / 2) + (this.topWidth / 2) - (60 / this.sizefactor);
  public outlineRightY  = (this.outlineHeight / 2) + (this.topHeight);

  public divider_1_X = this.lonaX;
  public divider_1_Y = this.lonaY - ((this.lonaY / 6));

  public divider_2_X = this.lonaX;
  public divider_2_Y = this.lonaY + ((this.lonaY / 7));

  public divider_3_X = this.lonaX;
  public divider_3_Y = this.lonaY + ((this.lonaY / 7) * 3);



  public strokeColor = 0x000000;
  public strokeWidth = 0.5;

  public pixelHitArea = hitAreas.PixelHitArea;

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
   public dividerFill = 0xffffff;






}
