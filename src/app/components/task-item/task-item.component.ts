import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task:any;
  crossIcon= faClose;


  constructor(private dataService: DataService ){}

  deleteTask(task: any){
    this.dataService.deleteTask(task.uuid).subscribe((res)=>{
      window.location.reload();
    })
  }
  
}
