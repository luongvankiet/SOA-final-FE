import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-notification',
  templateUrl: './body-notification.component.html',
  styleUrls: ['./body-notification.component.css']
})
export class BodyNotificationComponent implements OnInit {
  public notifyObservable: Observable<any>;
  public notification;
  constructor(
    private notifyServices: NotificationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllNotification();
  }

  getAllNotification() {
    this.notifyObservable = this.notifyServices.getAllNotification();
    this.notifyObservable
      .subscribe(arg => {
        this.notification = arg;
      });
  }
  
  notifyDetail(item, e: MouseEvent) {
    e.preventDefault();
    this.router.navigate([`tb/${item}`]);
  }
}
