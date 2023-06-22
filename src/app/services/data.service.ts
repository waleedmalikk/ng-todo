import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private closeCheckSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public closeCheck$ =  this.closeCheckSubject.asObservable();
  public API_URI = "http://localhost:3000/tasks/"; 
  constructor(public http: HttpClient) { }

  public toggleCloseCheck():void {
    this.closeCheckSubject.next(!this.closeCheckSubject.getValue());
  }

  getTasks():any{
    return this.http.get<any>(this.API_URI);   
  }

  submitTask(formdata: any): Observable<any> {
    return this.http.post<any>(this.API_URI, formdata);
  }

  deleteTask(uuid:any): Observable<any>{
    return this.http.delete<any>(this.API_URI+ uuid);
  }

  editReminder(uuid:any, body:any){
    return this.http.put<any>(this.API_URI+ uuid, body);
  }
}
