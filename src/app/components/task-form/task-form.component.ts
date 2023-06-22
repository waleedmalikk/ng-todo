import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  formdata: any = {
    title: '',
    description: '',
    reminder: false
  }
  constructor(private dataService:DataService){}

  onSubmit(){
    if(this.formdata.title.length >0 && this.formdata.description.length>0){
      this.dataService.submitTask(this.formdata).subscribe((res)=>{
        window.location.reload();
      });
    }
  }
}
