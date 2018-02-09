import { Component, OnInit, Input,  } from '@angular/core';

import { BrowserModule }          from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { NgvasModule, tweens, hitAreas } from "ngvas";

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-draw-abrigo',
  templateUrl: './draw-abrigo.component.html',
  styleUrls: ['./draw-abrigo.component.css']
})

export class DrawAbrigoComponent implements OnInit {


  constructor() { 
      this.changeSize(1);
  }

  ngOnInit() {
  	//console.log('componente inicializado...');
  }

   public updateColor(value): void{
 
    //console.log("lona color: " + value );
    if(value >= 1 && value <= 4){
      this.outlineFill = this.colors[value - 1];
    }

  }
  
  private colors = [
                    0xFCAC2F,
                    0x37375B,
                    0x2B4F8D,
                    0x1D1B1E
  ];
  
   public sizefactor = 5;  

  public lonaWidth =  3400 / this.sizefactor;
  public lonaHeight =  3400 / this.sizefactor;


  public lonaFill = 0x666666;
  public outlineFill = this.colors[3];
  public dividerFill = 0xffffff;
    public aletaFill = 0xFCAC2F;


  public outlineWidth = 600 / this.sizefactor;
  public outlineHeight = (1000/this.sizefactor);


  public topWidth = this.lonaHeight + ((600 / this.sizefactor) * 2) + this.outlineWidth;
  public topHeight = 1000 / this.sizefactor;


  public centerOutlineWidth = (this.outlineWidth / 3) ;
  public centerOutlineHeight = this.outlineHeight;



  public canvasWidth = this.topWidth;
  public canvasHeight = this.lonaHeight + this.topHeight;


  public topX =  this.canvasWidth / 2;
  public topY =   this.topHeight / 2;

  public lonaX =  this.canvasWidth  / 2 ;
  public lonaY =  (this.lonaHeight / 2 ) + (this.topHeight);


  public outlineLeftX = (this.canvasWidth / 2) - (this.topWidth / 2) + (600 / this.sizefactor );
  public outlineLeftY  = (this.outlineHeight / 2) + (this.topHeight);

  public outlineRightX = (this.canvasWidth / 2) + (this.topWidth / 2) - (600 / this.sizefactor );
  public outlineRightY  = (this.outlineHeight / 2) + (this.topHeight);

  public centerOutlineLeftX = (this.canvasWidth / 2) - (this.topWidth / 2) + (this.outlineWidth / 2)  + (this.centerOutlineWidth / 2 ) -10;
  public centerOutlineLeftY = (this.outlineHeight / 2) + (this.topHeight) + (2400/this.sizefactor);

  public centerOutlineRightX = (this.canvasWidth / 2) + (this.topWidth / 2) - (this.outlineWidth / 2)  - (this.centerOutlineWidth / 2) + 10 ;
  public centerOutlineRightY = (this.outlineHeight / 2) + (this.topHeight) + (2400/this.sizefactor);




  public strokeColor = 0x000000;
  public strokeWidth = 1;

  public pixelHitArea = hitAreas.PixelHitArea;

    public changeSize (option): void {
      var width;
      var height;
      switch (option) {
        case 1:
         width = 3200 / this.sizefactor;
         height = 3200 / this.sizefactor;
         var extraSpace = 100/ this.sizefactor; 
         this.lonaWidth = width;
         this.lonaHeight = height;
         this.topWidth = width;

         this.outlineHeight = this.lonaHeight;


          this.topWidth = this.lonaWidth + ((600 / this.sizefactor) * 2) + this.outlineWidth;
          this.topHeight = 1000 / this.sizefactor; 


          this.topY =   this.topHeight / 2 + extraSpace;
          this.lonaY =  (this.lonaHeight / 2 ) + (this.topHeight) + extraSpace;

          this.outlineLeftX = (this.canvasWidth / 2) - (this.topWidth / 2) + (this.outlineWidth / 2) + 10;
          this.outlineLeftY  = (this.outlineHeight / 2) + (this.topHeight) + extraSpace;

          this.outlineRightX = (this.canvasWidth / 2) + (this.topWidth / 2) - (this.outlineWidth / 2) - 10;
          this.outlineRightY  = (this.outlineHeight / 2) + (this.topHeight) + extraSpace;

           this.centerOutlineLeftX = (this.canvasWidth / 2) - (this.topWidth / 2) + (this.outlineWidth / 2)  + (this.centerOutlineWidth / 2 ) -7 ;
            this.centerOutlineLeftY = (this.outlineHeight / 2) + (this.topHeight) + (1200/this.sizefactor);
            this.centerOutlineRightX = (this.canvasWidth / 2) + (this.topWidth / 2) - (this.outlineWidth / 2)  - (this.centerOutlineWidth / 2) +7;
            this.centerOutlineRightY = (this.outlineHeight / 2) + (this.topHeight) + (1200/this.sizefactor);


          break;
        case 2:
         width = 3200 / this.sizefactor;
         height = 3400 / this.sizefactor;
         var extraSpace = 100; 
         
         this.lonaWidth =  width;
         this.lonaHeight =  height;


         this.outlineWidth = 600 / this.sizefactor;
         this.outlineHeight = this.lonaHeight;


         this.topWidth = this.lonaWidth + ((600 / this.sizefactor) * 2) + this.outlineWidth;
         this.topHeight = 1000 / this.sizefactor;




         this.topX =  this.canvasWidth / 2;
         this.topY =   this.topHeight / 2;

         this.lonaX =  this.canvasWidth  / 2 ;
         this.lonaY =  (this.lonaHeight / 2 ) + (this.topHeight);

         this.outlineLeftX = (this.canvasWidth / 2) - (this.topWidth / 2) + (this.outlineWidth / 2) + 10;
         this.outlineLeftY  = (this.outlineHeight / 2) + (this.topHeight);

         this.outlineRightX = (this.canvasWidth / 2) + (this.topWidth / 2) - (this.outlineWidth / 2) - 10;
         this.outlineRightY  = (this.outlineHeight / 2) + (this.topHeight);

         this.centerOutlineLeftX = (this.canvasWidth / 2) - (this.topWidth / 2) + (this.outlineWidth / 2)  + (this.centerOutlineWidth / 2 ) -7 ;
          this.centerOutlineLeftY = (this.outlineHeight / 2) + (this.topHeight) + (1200/this.sizefactor);
          this.centerOutlineRightX = (this.canvasWidth / 2) + (this.topWidth / 2) - (this.outlineWidth / 2)  - (this.centerOutlineWidth / 2) +7;
          this.centerOutlineRightY = (this.outlineHeight / 2) + (this.topHeight) + (1200/this.sizefactor);

           break;
        case 3:
          width = 3400 / this.sizefactor;
         height = 3400 / this.sizefactor;
         var extraSpace = 0; 
         this.lonaWidth = width;
         this.lonaHeight = height;
         this.topWidth = width;

         this.outlineHeight = this.lonaHeight;


          this.topWidth = this.lonaWidth + ((600 / this.sizefactor) * 2) + this.outlineWidth;
          this.topHeight = 1000 / this.sizefactor; 


          this.topY =   this.topHeight / 2 + extraSpace;
          this.lonaY =  (this.lonaHeight / 2 ) + (this.topHeight) + extraSpace;

          this.outlineLeftX = (this.canvasWidth / 2) - (this.topWidth / 2) + (this.outlineWidth / 2) + 10;
          this.outlineLeftY  = (this.outlineHeight / 2) + (this.topHeight) + extraSpace;

          this.outlineRightX = (this.canvasWidth / 2) + (this.topWidth / 2) - (this.outlineWidth / 2) - 10;
          this.outlineRightY  = (this.outlineHeight / 2) + (this.topHeight) + extraSpace;

          this.centerOutlineLeftX = (this.canvasWidth / 2) - (this.topWidth / 2) + (this.outlineWidth / 2)  + (this.centerOutlineWidth / 2 ) -10;
          this.centerOutlineLeftY = (this.outlineHeight / 2) + (this.topHeight) + (1200/this.sizefactor);
          this.centerOutlineRightX = (this.canvasWidth / 2) + (this.topWidth / 2) - (this.outlineWidth / 2)  - (this.centerOutlineWidth / 2) + 10 ;
          this.centerOutlineRightY = (this.outlineHeight / 2) + (this.topHeight) + (1200/this.sizefactor);
        break;
        

      }
    }









}
