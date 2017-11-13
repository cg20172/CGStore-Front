import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draw-door',
  templateUrl: './draw-door.component.html',
  styleUrls: ['./draw-door.component.css']
})
export class DrawDoorComponent implements OnInit {

  dato = "Componente draw-door";	
  constructor() { }

  ngOnInit() {
  	console.log('componente inicializado...');
  }

}
