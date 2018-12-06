import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { Observable } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { ActivityService } from 'src/app/services/activity.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-body-notification-detail',
  templateUrl: './body-notification-detail.component.html',
  styleUrls: ['./body-notification-detail.component.css']
})
export class BodyNotificationDetailComponent implements OnInit {
  public notify = [];
  public notifyObservable: Observable<any>;
  private paramID;
  public isLoading = true;
  public user;
  public studentActivity;
  public joined;
  modalRef: BsModalRef;
  constructor(
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private notificationService: NotificationService,
    private authService: AuthService,
    private activityService: ActivityService,
    private snotify: SnotifyService
  ) { }

  ngOnInit() {
    this.getAllActivities();
    this.user = JSON.parse(localStorage.getItem("user"));
    this.authService.user$.subscribe(user => this.user = user);
  }

  getAllActivities() {
    this.activityService.showActivities().subscribe(
      data => {
        this.studentActivity = data;
        this.route.params.subscribe(param => {
          this.paramID = param.id;
          this.getNotify(this.paramID);
        });
      })
  }

  getNotify(id) {
    this.notifyObservable = this.notificationService.getNotify(id);
    this.notificationService.getNotify(id).subscribe(data => this.handle(data)
    );
  }

  handle(data) {
    this.joined = false;
    this.isLoading = false;
    this.notify = data
    this.notify.forEach(element => {
      this.studentActivity.forEach(e => {
        if (element.activity.activityID == e.activityID && this.user.studentID == e.studentID) {
          this.joined = true;
        }
      });
    });
  }

  openModal(template: TemplateRef<any>, e: MouseEvent) {
    e.preventDefault();
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  submitJoin(user, activity) {
    activity.numberOfJoin++;
    this.activityService.onJoin(user.studentID, activity).subscribe(
      data => this.snotify.success("Đăng kí thành công", {timeout: 5000})
    )
  }
}
