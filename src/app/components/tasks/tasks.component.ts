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
  tasks:any=[
    {
      title:"Doctor's Appointment",
      description:"4:00PM on 12th July, 2023",
      reminder:true
    },
    {
      title:"Shopping",
      description:"5:00PM on 1st July, 2023",
      reminder:false
    },
    {
      title:"Interview",
      description:"7:00PM on 14th October, 2023",
      reminder:true
    }
  ]
  constructor(private dataService:DataService){
  }

  ngOnInit(){
    this.subscription = this.dataService.closeCheck$.subscribe(value =>{
      this.closedCheck = value;
    })
  }
}
