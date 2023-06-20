import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor (private router:Router, private dataService: DataService){
  }

  title:string = "Task Tracker";
  homeCheck:any;
  closeCheck:any;
  subscription?: Subscription;
  
  ngOnInit(){
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        this.homeCheck=this.router.url.includes("/home")
      }
    })
    this.subscription = this.dataService.closeCheck$.subscribe(value=>{
      this.closeCheck = value;
    })
  }

  closed(){
    this.dataService.toggleCloseCheck();
  }
}