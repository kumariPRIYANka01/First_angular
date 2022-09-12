import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  public studentdata(){
    return this.http.get("https://es-school-service-dev-zm5xloquaa-em.a.run.app/public/getStudent");
  }
}
