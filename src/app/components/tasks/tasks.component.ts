import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  public closedCheck:any;
  private subscription?: Subscription;
  tasks:any;
  constructor(private dataService:DataService){
  }

  ngOnInit(){
    this.subscription = this.dataService.closeCheck$.subscribe(value =>{
      this.closedCheck = value;
    })
    this.dataService.getTasks().subscribe((tasks: any)=>{
      this.tasks=tasks;
    })
  }
}
