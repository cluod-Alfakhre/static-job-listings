import { Component, ViewEncapsulation } from '@angular/core';
import { MainService } from './main.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  title = 'static-job-listings';

  constructor(public mainService:MainService){}

  ngOnInit(){
   this.mainService.getEmployeesArray().subscribe((data:any)=>{
    this.mainService.employeesArray=data;
   })
  }
  
  
}
