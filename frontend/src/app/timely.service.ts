import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Timely } from './timely';
import {addTimely}from './timely';

@Injectable({
  providedIn: 'root'
})
export class TimelyService {
  
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  

  public getTimely(): Observable<Timely[]> {
    return this.http.get<Timely[]>(`${this.apiServerUrl}/timely/all`); 
  }

  public addEmployee(timely: addTimely): Observable<Timely> {
    const headers = {'content-type':'application/json'}
    const body = JSON.stringify(timely)
    console.log(body)
    return this.http.post<Timely>(`${this.apiServerUrl}/timely/add`, body,{'headers':headers});
  }

  public deleteTimely(timelyId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/timely/delete/${timelyId}`);
  }
}
