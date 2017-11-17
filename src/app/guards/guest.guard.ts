import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class GuestGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuth()) {
      this.authService.setRedirectMessage('GUEST_REQUIRED');
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
