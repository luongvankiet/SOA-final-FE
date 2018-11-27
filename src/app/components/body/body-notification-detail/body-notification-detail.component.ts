import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-body-notification-detail',
  templateUrl: './body-notification-detail.component.html',
  styleUrls: ['./body-notification-detail.component.css']
})
export class BodyNotificationDetailComponent implements OnInit {
  public notify = [];
  public notifyObservable: Observable<any>;
  private paramID;
  constructor(
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.paramID = param.id;
      this.getNotify(this.paramID);
    });
  }

  getNotify(id) {
    this.notifyObservable = this.notificationService.getNotify(id);
    this.notificationService.getNotify(id).subscribe(data => this.handle(data)
    );
  }

  handle(data) {
    this.notify = data
  }
}
