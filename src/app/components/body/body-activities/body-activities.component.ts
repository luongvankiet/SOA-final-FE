import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { ActivityService } from 'src/app/services/activity.service';
import { SemesterService } from 'src/app/services/semester.service';
import { TabsModule } from 'ngx-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { SnotifyService } from 'ng-snotify';
@Component({
  selector: 'app-body-activities',
  templateUrl: './body-activities.component.html',
  styleUrls: ['./body-activities.component.css']
})
export class BodyActivitiesComponent implements OnInit {
  public activities = [];
  public ac;
  public semester;
  public sem;
  public isLoading;
  public user;
  public noActivities = false;
  constructor(
    private activityService: ActivityService,
    private sermesterService: SemesterService,
    private authService: AuthService,
    private snotify: SnotifyService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.authService.user$.subscribe(user => this.user = user);
    this.getAllActivities();
    this.getAllSemester();
    this.getActivities();
  }

  getActivities() {
    this.activityService.showActivities().subscribe(data => this.ac = data);
  }

  getAllActivities() {
    this.isLoading = true;
    this.activityService.getAllActivities().subscribe(
      data => {
        this.handle(data);
        this.isLoading = false;
      }
    )
  }

  handle(data) {
    data.forEach(element => {
      let activities = {
        activities: null,
        isJoined: null
      };
      activities.activities = element;
      activities.isJoined = false;
      this.ac.forEach(ac => {
        if (ac.activityID == element.activityID && this.user.studentID == ac.studentID) {
          activities.isJoined = true;
        }
      });
      this.activities.push(activities);
    });
    console.log(this.activities);

  }

  getAllSemester() {
    this.sermesterService.getAllSemester().subscribe(
      data => this.semester = data
    )
  }

  show(semesterID) {
    if (semesterID != "undefined") {
      this.isLoading = true;
      this.activityService.getActivitiesBySemesterID(semesterID).subscribe(
        data => {
          this.handle(data);
          this.isLoading = false;
        }
      )
    } else {
      this.isLoading = true;
      this.activityService.getAllActivities().subscribe(
        data => {
          this.handle(data);
          this.isLoading = false;
        }
      )
    }
  }

  onJoin(ac, e: MouseEvent) {
    let activity = {
      activities: null,
      isJoined: null
    }
    e.preventDefault();
    ac.activites.numberOfJoin++;
    this.activityService.onJoin(this.user.studentID, ac).subscribe(
      data => this.snotify.success("Đăng kí thành công", { timeout: 5000 })
    )
    activity.activities = ac.activities;
    activity.isJoined = false;
    let itemIndex = this.activities.findIndex(item => item.activityID == ac.activityID);
    this.activities[itemIndex] = activity;
  }

  doNotThing(e: MouseEvent) {
    e.preventDefault();
  }
}
