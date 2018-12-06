import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { DatePipe } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public activities;
  constructor(
    private activityService: ActivityService,
  ) { }

  ngOnInit() {
    this.activityService.getAllActivities().subscribe(
      data => {
        this.activities = data;
        this.activities.forEach(element => {
          let datePipe = new DatePipe('en-US');
          let timeString = element.date.split(/-| /);

          // datePipe.transform(time, 'dd/MM/yyyy');
          let activityDate = new Date(timeString[3], timeString[2]-1, timeString[1]);
          let today = new Date("12/4/2018");
          console.log(timeString);
          console.log(activityDate);
          console.log(today);
          console.log(activityDate.getFullYear() == today.getFullYear() && activityDate.getMonth() == today.getMonth() && activityDate.getDay() - 1 == today.getDay());
        });
      });

      interval(5000).pipe(
        map((x) => { console.log("abc");
         })
      );
  }

}
