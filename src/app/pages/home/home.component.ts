import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

      images :Image[] = [
        new Image('1','Primera Imagen', 'Descripcion Imagen Uno ','https://angular.io/assets/images/logos/angular/angular.svg','https://jaxenter.com/wp-content/uploads/2016/12/angular.png' ),
        new Image('1','Primera Imagen', 'Descripcion Imagen Uno ','https://angular.io/assets/images/logos/angular/angular.svg','https://jaxenter.com/wp-content/uploads/2016/12/angular.png' ),
        new Image('1','Primera Imagen', 'Descripcion Imagen Uno ','https://angular.io/assets/images/logos/angular/angular.svg','https://jaxenter.com/wp-content/uploads/2016/12/angular.png' ),
        new Image('1','Primera Imagen', 'Descripcion Imagen Uno ','https://angular.io/assets/images/logos/angular/angular.svg','https://jaxenter.com/wp-content/uploads/2016/12/angular.png' )

    ];
    
    
  constructor() { }

  ngOnInit() {
   

}

     

} 
    