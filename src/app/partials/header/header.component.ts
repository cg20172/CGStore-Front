import { Router } from '@angular/router';
import { Logger } from 'angular2-logger/core';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthService,
    private logger: Logger,
    private notificationsService: NotificationsService) { }

  ngOnInit() {
  }

  logoutUser() {
    this.authService.logOut()
      .subscribe((response) => {
        if (response.success === true) {
          const toast = this.notificationsService.success(
            'Sesión Cerrada',
            'La sesión ha sido cerrada correctamente'
          );
          this.router.navigateByUrl('/');
        }
      }, (error) => {
        const toast = this.notificationsService.error(
          'Error Cerrando Sesión',
          'No sé ha podido cerrar sesión'
        );
      })
  }

}
