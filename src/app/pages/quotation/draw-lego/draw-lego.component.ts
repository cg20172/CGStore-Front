import { Component, OnInit, Input, Directive } from '@angular/core';

import { BrowserModule }          from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { NgvasModule, tweens, hitAreas } from "ngvas";

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-draw-lego',
  templateUrl: './draw-lego.component.html',
  styleUrls: ['./draw-lego.component.css']
})

@Directive({
  selector: 'img[default]',
  host: {
    '(error)':'setDefaultPic()',
    '[src]':'src'
   }
})

export class DrawLegoComponent implements OnInit {
  @Input() src:string;
  @Input() default:string;

  constructor() { 
      this.initSizeDoor();
  }

  ngOnInit() {
  	//console.log('componente inicializado...');
  }

  public initSizeDoor(): void {
  }


  private dirSrc = "assets/img/legos/";

  public imageWidth = 500;
  public imageHeight = 500;
  public imageX = 2;
  public imageY = 2; 

  public canvasWidth = this.imageWidth - this.imageX;
  public canvasHeight = this.imageHeight - this.imageY;
  public initialImage = this.dirSrc + "Ninguno.png";
  public notFoundSrc= this.dirSrc + "notFound.png";
  public initialVisibilityState = true;

  public cabina = this.initialVisibilityState;
  public cabinaSrc = this.initialImage;

  public accesorioDelantero = this.initialVisibilityState;
  public accesorioDelanteroSrc = this.initialImage;

  public accesorioTrasero = this.initialVisibilityState;
  public accesorioTraseroSrc = this.initialImage;

  public inferior = this.initialVisibilityState;
  public inferiorSrc = this.initialImage;


  public changeCabinaSrc(nameSrc){

    nameSrc = this.dirSrc + nameSrc + ".png";
    console.log("cabina: "+ nameSrc);
    this.cabinaSrc = nameSrc;
  }

  public changeAccesorioDelanteroSrc(nameSrc){

    nameSrc = this.dirSrc + nameSrc + ".png";
    console.log("delantero: " + nameSrc);
    this.accesorioDelanteroSrc = nameSrc;
  }

  public changeAccesorioTraseroSrc(nameSrc){

    nameSrc = this.dirSrc + nameSrc + ".png";
    console.log("trasero: " + nameSrc);
    this.accesorioTraseroSrc = nameSrc;
  }

  public changeInferiorSrc(nameSrc){

    nameSrc = this.dirSrc + nameSrc + ".png";
    console.log("inferior: " + nameSrc);
    this.inferiorSrc = nameSrc;
  }




  public setDefaultPic(image):void{
    switch (image) {
      case "cabina":
         this.cabinaSrc = this.notFoundSrc;
        break;
      case "accesorioDelantero":
        this.accesorioDelanteroSrc = this.notFoundSrc;
        break;
      case "accesorioTrasero":
        this.accesorioTraseroSrc = this.notFoundSrc;
        break;
      case "inferior":
        this.inferiorSrc = this.notFoundSrc;
        break;
  
    }
  }


}
