import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {
  private apiUrl = "https://soa-final.herokuapp.com/services/semester";

  constructor(private http: HttpClient) { }
    
  getAllSemester(){
    return this.http.get(`${this.apiUrl}`);
  }
}
