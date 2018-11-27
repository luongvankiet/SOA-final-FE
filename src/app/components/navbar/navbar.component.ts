import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user;
  public isLoggedIn;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(status => { this.isLoggedIn = status});
    this.user = JSON.parse(sessionStorage.getItem('user'));
    if (this.user) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    this.updateNavbar();
  }
  updateNavbar() {
    this.authService.isLoggedIn$.subscribe(status => { this.isLoggedIn = status });
    this.authService.user$.subscribe(user => this.user = user);
  }
  logout(e: MouseEvent) {
    e.preventDefault();
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
