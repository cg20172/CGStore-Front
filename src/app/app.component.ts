import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  private notificationOptions: Object;

  constructor(private router: Router) {
    this.notificationOptions = {
      position: ['top', 'right'],
      clickToClose: true,
      timeOut: 3000,
      animate: 'fromRight'
    };
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }

      window.scrollTo(0, 0);
    });
  }
}
