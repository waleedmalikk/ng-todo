import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private closeCheckSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public closeCheck$ =  this.closeCheckSubject.asObservable();
  constructor() { }

  public toggleCloseCheck():void {
    this.closeCheckSubject.next(!this.closeCheckSubject.getValue());
  }
}
