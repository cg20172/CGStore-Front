import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private notificationOptions: Object;

  constructor() {
    this.notificationOptions = {
      position: ['top', 'right'],
      clickToClose: true,
      timeOut: 3000,
      animate: 'fromRight'
    };
  }
}
