import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
  constructor(private http: HttpClient) {}

  getTasks(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    const options = {
      headers: headers
  }
    return this.http.get('http://localhost:3001/tasks', options);
  }

  addTask(form: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    const options = {
      headers: headers
    };

    return this.http.post('http://localhost:3001/tasks', JSON.stringify(form), options);
  }
}
