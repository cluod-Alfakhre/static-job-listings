import { Component, OnInit,Input,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class EmployeeComponent implements OnInit {

  @Input() employee:any;

  constructor(private router:Router,private mainService:MainService) { }

  ngOnInit(): void {
    
  }

 
  addqueryString(theQuery:any){
    if(this.mainService.filterKeys.indexOf(theQuery) == -1){
      this.mainService.filterKeys.push(theQuery);
    }
    this.mainService.filterContent(this.mainService.filterKeys)
    console.log(this.mainService.filteredArray)

  }
}
