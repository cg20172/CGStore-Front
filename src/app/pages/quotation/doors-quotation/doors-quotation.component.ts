import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { MatRadioModule } from '@angular/material';
import { ProductService } from './../../../services/product.service';

import { Product } from './../../../models/product';

import { PuertaRapida } from './PuertaRapida.interface';

@Component({
  selector: 'app-doors-quotation',
  templateUrl: './doors-quotation.component.html',
  styleUrls: ['./doors-quotation.component.css']
})
export class DoorsQuotationComponent implements OnInit {


  constructor(private productService: ProductService) { }

  private selectedValue: Product;
  private doors: Product[];

  selectColor: string;



  listColor = [
    'azul',
    'rojo',
    '#00ffff',
    '#FF0000',
  ];

  rectW: number = 200;
  rectH: number = 300;
  rectColor: string = "#FF0000";


  context: CanvasRenderingContext2D;


  @ViewChild("myCanvas") myCanvas;



  ngOnInit() {

    this.productService.getAllProducts()
      .subscribe((res) => {
        this.doors = res;//.filter((elem) => elem.stock > 5);
        console.log("Mi respuesta:", res);
      }, (error) => {
        console.log("Hay error", error)
      });


  public puertaRapida: PuertaRapida;

  constructor() { }

  ngOnInit() {
    this.puertaRapida = {
      color: null,
      height: null,
      width: null

    }
  }

  step2: any = {
    showNext: true,
    showPrev: true
  };

  step3: any = {
    showSecret: false
  };

  data: any = {
    email: 'muk@gmail.com'
  };

  isCompleted: boolean = false;

  onStep1Next(event) {
    console.log('Step1 - Next');
  }

  onStep2Next(event) {
    console.log('Step2 - Next');
  }

  onStep3Next(event) {
    console.log('Step3 - Next');
  }

  onComplete(event) {
    this.isCompleted = true;

  }
  ngAfterViewInit() {

    let canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext("2d");

    this.tick();

  }

  tipeColor(nombre: String) {
    switch (nombre) {
      case "azul": {
        this.rectColor = "#00ffff";
        break;
      }
      case "rojo": {
        this.rectColor = "#FF0000";
        break;
      }

    }

  }

  tick() {

    requestAnimationFrame(() => {
      this.tick()

    });

    var ctx = this.context;
    ctx.clearRect(0, 0, 400, 400);
    ctx.fillStyle = this.rectColor;
    ctx.fillRect(10, 10, this.rectW, this.rectH);
  }


  onStepChanged(step) {
    console.log('Changed to ' + step.title);
  }



  public colors = [
    { value: 1, display: 'Blanco' },
    { value: 2, display: 'Negro' },
    { value: 3, display: 'Rojo' }
  ]

}
