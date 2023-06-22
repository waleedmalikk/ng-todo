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
  constructor(public http: HttpClient) { }

  public toggleCloseCheck():void {
    this.closeCheckSubject.next(!this.closeCheckSubject.getValue());
  }

  getTasks():any{
    return this.http.get<any>("http://localhost:3000/tasks");   
  }

  submitTask(formdata: any): Observable<any> {
    return this.http.post<any>("http://localhost:3000/tasks", formdata);
  }

  deleteTask(uuid:any): Observable<any>{
    return this.http.delete<any>("http://localhost:3000/tasks/"+ uuid);
  }
}
