import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public user;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    this.authService.user$.subscribe(user => this.user = user);
  }

}
