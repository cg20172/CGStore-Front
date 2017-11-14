import { Router } from '@angular/router';
import { Logger } from 'angular2-logger/core';
import { Component, OnInit } from '@angular/core';
import { CustomValidators } from 'ng2-validation';
import { NotificationsService } from 'angular2-notifications';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from './../../services/auth.service';
import { UserRegister } from './../../models/user-register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public savingUser: boolean;

  constructor(private router: Router,
    private authService: AuthService,
    private logger: Logger,
    private notificationsService: NotificationsService) { }

  ngOnInit() {
    this.savingUser = false;

    let password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    let confirmPassword = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormControl('', []),
      phone: new FormControl('', []),
      document: new FormControl('', []),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: password,
      confirmPassword: confirmPassword,
      enterprise: new FormControl('', []),
      nit: new FormControl('', []),
      role: new FormControl('', [])
    });
  }

  public registerUser(form: FormGroup) {
    this.logger.info('Registering user:', form.value);
    this.savingUser = true;

    let registerData = new UserRegister(form.value);
    this.authService.register(registerData)
      .subscribe(
      (result) => {
        if (result.status === 'success') {
          this.savingUser = false;
          const toast = this.notificationsService.success(
            'Usuario Creado',
            'El usuario ha sido creado correctamente'
          );
          this.router.navigateByUrl('/');
        }
      }, (error) => {
        this.savingUser = false;

        if (error.status === 422) {
          let responseData = JSON.parse(error.error);
          if (responseData.errors.email) {
            const toast = this.notificationsService.error(
              'Error en Formulario',
              responseData.errors['full_messages'][0]
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

  public disabledForm(): boolean {
    return this.registerForm.invalid || this.savingUser;
  }

  public goToLogin() {
    this.router.navigateByUrl('auth/login');
  }

  public goToContact() {
    this.router.navigateByUrl('contact');
  }

}
