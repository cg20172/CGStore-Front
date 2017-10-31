import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { MatRadioModule } from '@angular/material';
import { Logger } from 'angular2-logger/core';
import { NotificationsService } from 'angular2-notifications';
import * as _ from 'lodash';

import { ProductService } from './../../../services/product.service';
import { Product } from './../../../models/product';

@Component({
  selector: 'app-doors-quotation',
  templateUrl: './doors-quotation.component.html',
  styleUrls: ['./doors-quotation.component.css']
})
export class DoorsQuotationComponent implements OnInit {


  constructor(private productService: ProductService,
    private logger: Logger,
    private notificationsService: NotificationsService) { }

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
        this.doors = res.filter((elem) => [1, 2].includes(elem.id));

        _.forEach(this.doors, (door) => {
          if (door.name.toLowerCase() === 'puerta rapida') {
            door.characteristics = [
              { name: 'ancho', type: 'text', value: 0 },
              { name: 'alto', type: 'text', value: 0 },
              { name: 'color_lona', type: 'text', value: 0 },
              { name: 'color_perfiles', type: 'text', value: 0 },
              { name: 'interruptor', type: 'text', value: 0 },
              { name: 'lazo', type: 'text', value: 0 },
              { name: 'luces', type: 'text', value: 0 },
              { name: 'senal', type: 'text', value: 0 },
              { name: 'mando', type: 'text', value: 0 },
              { name: 'numero_mandos', type: 'text', value: 0 }
            ];
          }
        });
      }, (error) => {
        console.log(error);
        const toast = this.notificationsService.error(
          'Error ' + error.status,
          error.statusText
        );
      });
  }
}
