import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { ActivityService } from 'src/app/services/activity.service';
import { SemesterService } from 'src/app/services/semester.service';

@Component({
  selector: 'app-body-activities',
  templateUrl: './body-activities.component.html',
  styleUrls: ['./body-activities.component.css']
})
export class BodyActivitiesComponent implements OnInit {
  public activities;
  public semester;
  public sem;
  constructor(
    private activityService: ActivityService,
    private sermesterService: SemesterService
  ) { }

  ngOnInit() {
    this.getAllAtivities();
    this.getAllSemester();
  }

  getAllAtivities() {
    this.activityService.getAllAtivities().subscribe(
      data => this.activities = data
    )
  }

  getAllSemester() {
    this.sermesterService.getAllSemester().subscribe(
      data => this.semester = data
    )
  }

  show(){
    console.log(this.sem);
  }
}
