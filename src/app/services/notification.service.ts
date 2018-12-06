import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'https://soa-final.herokuapp.com/services/notification';
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
