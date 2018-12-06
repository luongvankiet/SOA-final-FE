import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  private user;
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.authService.user$.subscribe(user => this.user = user);
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (this.user) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
