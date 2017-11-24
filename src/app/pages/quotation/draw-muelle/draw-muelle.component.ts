import { Component, OnInit, Input,  } from '@angular/core';

import { BrowserModule }          from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { NgvasModule, tweens, hitAreas } from "ngvas";

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-draw-muelle',
  templateUrl: './draw-muelle.component.html',
  styleUrls: ['./draw-muelle.component.css']
})

export class DrawMuelleComponent implements OnInit {


  constructor() { 
      this.initSizeMuelle();
  }

  ngOnInit() {
  	//console.log('componente inicializado...');
  }

  public initSizeMuelle(): void {
    this.updateHeight(3000);
    this.updateWidth(2000);
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

  public lonaWidth =  3000 / this.sizefactor;
  public lonaHeight =  3000 / this.sizefactor +2;

  public lonaFill = 0xffffff;
  public aletaFill = 0xFCAC2F;
  public outlineFill = this.colors[2];
  public dividerFill = 0x000000;
  public textFill = 0x000000;

  public angleShapeFill = 0xff0000;

  public outlineWidth = 250 / this.sizefactor;
  public outlineHeight = this.lonaHeight;

  public centerOutlineWidth = (this.outlineWidth / 3) ;
  public centerOutlineHeight = this.outlineHeight;


  public topWidth = this.lonaWidth + ((200 / this.sizefactor) * 2) + this.outlineWidth;
  public topHeight = 270 / this.sizefactor;


  public dividerWidth = this.lonaWidth  + this.outlineWidth * 2;
  public dividerHeight = 1;




  public canvasWidth = this.topWidth;
  public canvasHeight = this.lonaHeight + this.topHeight;


  public topX =  this.canvasWidth / 2;
  public topY =   this.topHeight / 2;

  public lonaX =  this.canvasWidth  / 2 ;
  public lonaY =  (this.lonaHeight / 2 ) + (this.topHeight) + 1;

  public text1X = this.lonaX;
  public text1Y = this.lonaY;



  public outlineLeftX = (this.canvasWidth / 2) - (this.topWidth / 2) + (200 / this.sizefactor);
  public outlineLeftY  = (this.outlineHeight / 2) + (this.topHeight);

  public outlineRightX = (this.canvasWidth / 2) + (this.topWidth / 2) - (200 / this.sizefactor);
  public outlineRightY  = (this.outlineHeight / 2) + (this.topHeight);


  public centerOutlineLeftX = (this.canvasWidth / 2) - (this.topWidth / 2) + (200 / this.sizefactor) ;
  public centerOutlineLeftY = (this.outlineHeight / 2) + (this.topHeight);

  public centerOutlineRightX = (this.canvasWidth / 2) + (this.topWidth / 2) - (200 / this.sizefactor) ;
  public centerOutlineRightY = (this.outlineHeight / 2) + (this.topHeight);

  public angleShapeWidth = 25;
  public angleShapeHeight = 150;
  public angleShapeX = (this.canvasWidth / 2) ;
  public angleShapeY = this.topY + (this.topHeight/ 2) + (this.angleShapeHeight/2) + 20;
  public angleShapeRotation = 0;
  public angleShapeText = "0°";

  //public textAngleY = this.angleShapeY  + (this.angleShapeHeight / 2) + 35;
  public textAngleY = this.angleShapeY + 10 ;
  public textAngleX = this.angleShapeX + this.angleShapeWidth;
  //public textAngleX =   (this.canvasWidth / 2) - (this.angleShapeWidth / 2);
  

  public imageAngleWidth = 285 ;
  public imageAngleHeight = 145 ;


  public imageAngle_no_10_Y = this.angleShapeY + (this.angleShapeHeight / 2);
  public imageAngle_0_Y = this.imageAngle_no_10_Y + this.imageAngleHeight;
  public imageAngle_10_Y = this.imageAngle_0_Y+ this.imageAngleHeight;


  public imageAngle_0_X = (this.canvasWidth / 2) - (this.imageAngleWidth/2);
  public imageAngle_10_X = (this.canvasWidth / 2) - (this.imageAngleWidth/2);
  public imageAngle_no_10_X = (this.canvasWidth / 2) - (this.imageAngleWidth/2);
  public imageAngle_0_visibility = true;


  public extraLonaHeight = this.canvasHeight;
  public extraLonaWidth = this.canvasWidth - 2;  
  public extraLonaX = this.canvasWidth  / 2 ;;
  public extraLonaY = (this.canvasHeight / 2 ) + (this.topHeight) + this.lonaHeight ;

 
  public aleta10cm = (130/ this.sizefactor);
  public aleta15cm = (195/ this.sizefactor);
  public aleta20cm = (260/ this.sizefactor);
   public currentAletaHeight = this.aleta10cm;  
  public aletaSpace =   this.aleta10cm;
  public divider_0_X = this.lonaX;
  
  public divider_0_Y = (this.topY * 2) + this.aletaSpace;
   public divider_1_Y = this.divider_0_Y  + this.aletaSpace;
   public divider_2_Y = this.divider_1_Y  + this.aletaSpace;
   public divider_3_Y = this.divider_2_Y  + this.aletaSpace;
   public divider_4_Y = this.divider_3_Y  + this.aletaSpace;
   public divider_5_Y = this.divider_4_Y  + this.aletaSpace;
   public divider_6_Y = this.divider_5_Y  + this.aletaSpace;
   public divider_7_Y = this.divider_6_Y  + this.aletaSpace;
   public divider_8_Y = this.divider_7_Y  + this.aletaSpace;
   public divider_9_Y = this.divider_8_Y  + this.aletaSpace;
   public divider_10_Y = this.divider_9_Y  + this.aletaSpace;
   public divider_11_Y = this.divider_10_Y  + this.aletaSpace;
   public divider_12_Y = this.divider_11_Y  + this.aletaSpace;
   public divider_13_Y = this.divider_12_Y  + this.aletaSpace;
   public divider_14_Y = this.divider_13_Y  + this.aletaSpace;
   public divider_15_Y = this.divider_14_Y  + this.aletaSpace;
   public divider_16_Y = this.divider_15_Y  + this.aletaSpace;
   public divider_17_Y = this.divider_16_Y  + this.aletaSpace;
   public divider_18_Y = this.divider_17_Y  + this.aletaSpace;
   public divider_19_Y = this.divider_18_Y  + this.aletaSpace;
   public divider_20_Y = this.divider_19_Y  + this.aletaSpace;
   public divider_21_Y = this.divider_20_Y  + this.aletaSpace;


  public strokeColor = 0x000000;
  public strokeWidth = 1;

  public pixelHitArea = hitAreas.PixelHitArea;

    public changeAngleShapeRotation(value):void{
      var angle = value - this.angleShapeRotation;
      if(angle >= -30 && angle <= 30){
        this.angleShapeRotation += angle;
        this.angleShapeText = value+ "°";
      }

    }


    public changeAletaHeight(option):void{
      switch (option) {
        case 1:
              this.changeDividers_Y(this.aleta10cm - this.currentAletaHeight);
              this.currentAletaHeight = this.aleta10cm;
          break;
        case 2:
              this.changeDividers_Y(this.aleta15cm - this.currentAletaHeight);
              this.currentAletaHeight = this.aleta15cm;
          break;
        case 3:
              this.changeDividers_Y(this.aleta20cm - this.currentAletaHeight);
              this.currentAletaHeight = this.aleta20cm ;
          break;    
 
        
      }
    }
    public changeDividers_Y(extraHeight){
      console.log("cambiando tamaño");
        this.divider_0_Y += extraHeight; 
         this.divider_1_Y += extraHeight * 2; 
         this.divider_2_Y += extraHeight * 3; 
         this.divider_3_Y += extraHeight * 4; 
         this.divider_4_Y += extraHeight * 5; 
         this.divider_5_Y += extraHeight * 6; 
         this.divider_6_Y += extraHeight * 7; 
         this.divider_7_Y += extraHeight * 8; 
         this.divider_8_Y += extraHeight * 9; 
         this.divider_9_Y += extraHeight * 10; 
         this.divider_10_Y += extraHeight * 11;  
         this.divider_11_Y += extraHeight * 12;  
         this.divider_12_Y += extraHeight * 13;  
         this.divider_13_Y += extraHeight * 14;  
         this.divider_14_Y += extraHeight * 15;  
         this.divider_15_Y += extraHeight * 16;  
         this.divider_16_Y += extraHeight * 17;  
         this.divider_17_Y += extraHeight * 18;  
         this.divider_18_Y += extraHeight * 19;  
         this.divider_19_Y += extraHeight * 20;  
         this.divider_20_Y += extraHeight * 21;  
         this.divider_21_Y += extraHeight * 22;  
    }



    public updateWidth (value): void {
      //console.log("width: " + value );
      var width =  (value / this.sizefactor) - this.lonaWidth;
      if(this.lonaWidth + width >= 1000/this.sizefactor && this.lonaWidth + width <= 3000/this.sizefactor){
        this.lonaWidth += width;
        this.topWidth += width;
        this.outlineRightX += (width / 2);
        this.outlineLeftX -= (width / 2);
        this.centerOutlineLeftX -= (width / 2);
        this.centerOutlineRightX += (width / 2);
        this.dividerWidth = this.lonaWidth  + this.outlineWidth * 2;
        


        if(this.lonaWidth * this.sizefactor <= 1500){
            this.imageAngleWidth = 190 ;
            //decrement height equal to width
            this.imageAngleHeight = 97.5;

            this.imageAngle_no_10_Y = this.angleShapeY + (this.angleShapeHeight / 2);
            this.imageAngle_0_Y = this.imageAngle_no_10_Y + this.imageAngleHeight;
            this.imageAngle_10_Y = this.imageAngle_0_Y+ this.imageAngleHeight;

            this.imageAngle_0_X = (this.canvasWidth / 2) - (this.imageAngleWidth/2);
            this.imageAngle_10_X = (this.canvasWidth / 2) - (this.imageAngleWidth/2);
            this.imageAngle_no_10_X = (this.canvasWidth / 2) - (this.imageAngleWidth/2);  
        }else{
          this.updateHeight(this.lonaHeight*this.sizefactor);
        }  






      }
    }
    public updateHeight (value): void {
  
    var height = (value / this.sizefactor) - this.lonaHeight;
      if(this.lonaHeight + height >= 2000/this.sizefactor && this.lonaHeight + height <= 3000/this.sizefactor){
        var currentLonaHeight = this.lonaHeight;

        this.lonaHeight += height;
        this.outlineHeight += height;
        this.centerOutlineHeight += height;
        this.topY -= (height / 2);
        this.angleShapeY -= (height / 2);  
        this.textAngleY -= (height / 2);  

        this.divider_0_Y -=   (height / 2);
        this.divider_1_Y -= (height / 2);
        this.divider_2_Y -= (height / 2);
        this.divider_3_Y -= (height / 2);
        this.divider_4_Y -= (height / 2);
        this.divider_5_Y -= (height / 2);
        this.divider_6_Y -= (height / 2);
        this.divider_7_Y -= (height / 2);
        this.divider_8_Y -= (height / 2);
        this.divider_9_Y -= (height / 2);
        this.divider_10_Y -= (height / 2);
        this.divider_11_Y -= (height / 2);
        this.divider_12_Y -= (height / 2);
        this.divider_13_Y -= (height / 2);
        this.divider_14_Y -= (height / 2);
        this.divider_15_Y -= (height / 2);
        this.divider_16_Y -= (height / 2);
        this.divider_17_Y -= (height / 2);
        this.divider_18_Y -= (height / 2);
        this.divider_19_Y -= (height / 2);
        this.divider_20_Y -= (height / 2);
        this.divider_21_Y -= (height / 2);
        this.extraLonaY += (height /2);
         

        this.angleShapeHeight = value * 150 / 3000;
        this.angleShapeY = this.topY + (this.topHeight/ 2) + (this.angleShapeHeight/2) + 20;
        this.textAngleY = this.angleShapeY + 10 ;



        if(this.lonaWidth * this.sizefactor <= 1500){
            this.imageAngleWidth = 190 ;
            //decrement height equal to width
            this.imageAngleHeight = 97.5 ;
        } else{
            this.imageAngleWidth = (value*285/3000) ;
            //decrement height equal to width
            this.imageAngleHeight = 145 - ((285 - this.imageAngleWidth) /2) ;
        }    
        this.imageAngle_no_10_Y = this.angleShapeY + (this.angleShapeHeight / 2);
        this.imageAngle_0_Y = this.imageAngle_no_10_Y + this.imageAngleHeight;
        this.imageAngle_10_Y = this.imageAngle_0_Y+ this.imageAngleHeight;

        this.imageAngle_0_X = (this.canvasWidth / 2) - (this.imageAngleWidth/2);
        this.imageAngle_10_X = (this.canvasWidth / 2) - (this.imageAngleWidth/2);
        this.imageAngle_no_10_X = (this.canvasWidth / 2) - (this.imageAngleWidth/2);  



      }
    }









}
