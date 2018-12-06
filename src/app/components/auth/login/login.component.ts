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
  public isLoading;
  constructor(
    private authService: AuthService,
    private router: Router,
    private snotifyService: SnotifyService
  ) { }

  ngOnInit() {
  }

  login() {
    this.isLoading = true;
    let form = {
      username: null,
      password: null
    }
    form.username = this.form.username.toLowerCase();
    form.password = this.form.password;
    this.authService.login(form).subscribe(
      data => {
        this.handle(data);
        this.isLoading = false;
      },
      error => {
        this.snotifyService.error('Email or password doesn\'t exist. Please try again !', 'Error');
        this.isLoading = false;
      });
  }

  handle(data) {
    this.authService.handle(data);
    this.router.navigate(['/']);
  }
}
