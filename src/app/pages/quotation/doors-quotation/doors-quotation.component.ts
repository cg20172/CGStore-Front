import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { MatRadioModule } from '@angular/material';
import { ProductService } from './../../../services/product.service';

import { Product } from './../../../models/product';

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


}
