import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Logger } from 'angular2-logger/core';
import { NotificationsService } from 'angular2-notifications';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loggingIn: boolean;

  constructor(private router: Router,
    private authService: AuthService,
    private logger: Logger,
    private notificationsService: NotificationsService) { }

  ngOnInit() {
    this.loggingIn = false;

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  attemptLogin(form: FormGroup) {
    this.logger.info('Logging in user:', form.value);
    this.loggingIn = true;

    let credentials = form.value;
    this.authService.logIn(credentials)
      .subscribe((response) => {
        const toast = this.notificationsService.success(
          'Sesión Iniciada',
          'La sesión ha sido iniciada correctamente'
        );
        this.router.navigateByUrl('/');
      }, (error) => {
        this.loggingIn = false;

        if (error.status === 401) {
          let responseData = JSON.parse(error.error);
          if (responseData.errors) {
            const toast = this.notificationsService.error(
              'Error en Formulario',
              responseData.errors[0]
            );
          } else {
            const toast = this.notificationsService.error(
              'Error en Formulario',
              'Parece que han habido un error. Vuelva a intentarlo'
            );
          }
        } else {
          const toast = this.notificationsService.error(
            'Error ' + error.status,
            error.statusText
          );
        }
      });
  }

  disabledForm(): boolean {
    return this.loginForm.invalid || this.loggingIn;
  }

  goToRegister() {
    this.router.navigateByUrl('auth/register');
  }

}
