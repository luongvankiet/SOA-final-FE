import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private apiUrl = "https://soa-final.herokuapp.com/services/activities";
  constructor(private http: HttpClient) { }
  getAllActivities(){
    return this.http.get(`${this.apiUrl}`);
  }
  getActivitiesBySemesterID(semesterID){
    return this.http.get(`${this.apiUrl}/semester/${semesterID}`);
  }
  onJoin(studentID, activity){
    return this.http.post(`${this.apiUrl}/student/${studentID}`, activity);
  }
  showActivities(){
    return this.http.get(`${this.apiUrl}/student`);
  }
}
