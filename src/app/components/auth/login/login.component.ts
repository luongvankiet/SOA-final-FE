import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form = {
    username: null,
    password: null
  }
  constructor(
    private authService: AuthService,
    private router: Router,
    private snotifyService: SnotifyService
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.form).subscribe(
      data => {
        this.handle(data);
      },
      error => {
        this.snotifyService.error('Email or password doesn\'t exist. Please try again !', 'Error');
      });
  }

  handle(data) {
    this.authService.handle(data);
    this.router.navigate(['/']);
  }
}
