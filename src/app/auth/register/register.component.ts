import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Logger } from 'angular2-logger/core';
import { NotificationsService } from 'angular2-notifications';

import { AuthService } from './../../services/auth.service';
import { UserRegister } from './../../models/user-register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  private registerForm: FormGroup;
  private savingUser: boolean = false;

  constructor(private router: Router,
    private authService: AuthService,
    private logger: Logger,
    private notificationsService: NotificationsService) { }

  ngOnInit() {
    let password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    let confirmPassword = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormControl('', []),
      phone: new FormControl('', []),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: password,
      confirmPassword: confirmPassword
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
            'El usuario ha sido creado correctamente');
        }
      }, (error) => {
        console.log(error);
      });
  }

  public goToLogin() {
    this.router.navigateByUrl('auth/login');
  }

  public goToContact() {
    this.router.navigateByUrl('contact');
  }

}
