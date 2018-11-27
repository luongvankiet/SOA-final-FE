import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private apiUrl = "http://localhost:8080/Student_management/services/activities";
  constructor(private http: HttpClient) { }
  getAllAtivities(){
    return this.http.get(`${this.apiUrl}`);
  }
}
