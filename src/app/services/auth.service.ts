import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://soa-final.herokuapp.com/services/auth';
  public user$ = new Subject<any>();
  public isLoggedIn$ = new Subject<any>();
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  userChange(value) {
    if (value == null) {
      localStorage.removeItem('user');
      this.user$.next(value);
    } else {
      localStorage.setItem('user', JSON.stringify(value));
      this.user$.next(value);
    }
  }

  statusChange(value) {
    this.isLoggedIn$.next(value);
  }

  login(form) {
    return this.http.post(`${this.apiUrl}/login`, form);
  }

  handle(user) {
    this.userChange(user);
    this.statusChange(true);
  }

  logout() {
    this.statusChange(false);
    this.userChange(null);
  }
}
