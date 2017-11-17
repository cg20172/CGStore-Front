import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthService,
    private notificationsService: NotificationsService) { }

  ngOnInit() {
    let redirectMessage = this.authService.getRedirectMessage();
    if (redirectMessage == 'GUEST_REQUIRED') {
      const toast = this.notificationsService.warn(
        'No se puede acceder a la ruta',
        'Debe cerrar su cuenta primero'
      );
      this.authService.unsetRedirectMessage();
    }
  }

  public goToQuotation() {
    this.router.navigateByUrl('quotation');
  }

  public goToRegister() {
    this.router.navigateByUrl('auth/register');
  }

  public goToContact() {
    this.router.navigateByUrl('contact');
  }

}
