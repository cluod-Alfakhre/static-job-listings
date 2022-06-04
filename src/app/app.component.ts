import { Component, ViewEncapsulation } from '@angular/core';
import { MainService } from './main.service';
import { EmployeeModel } from './employee/models/employee.model';


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

   this.mainService.getEmployeesArray().subscribe((data:EmployeeModel[])=>{

    this.mainService.employeesArray=data;

    this.mainService.filterContent(this.mainService.filterKeys)

   })
   
  }
  
  
}
