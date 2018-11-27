import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'http://localhost:8080/Student_management/services/notification';
  constructor(
    private http: HttpClient
  ) { }

  getAllNotification(){
    return this.http.get(`${this.apiUrl}`);
  }

  getNotify(id){
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
