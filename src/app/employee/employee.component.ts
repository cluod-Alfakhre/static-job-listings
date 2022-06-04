import { Component, OnInit,Input,ViewEncapsulation } from '@angular/core';
import { MainService } from '../main.service';
import { EmployeeModel } from './models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class EmployeeComponent implements OnInit {

  @Input() employee!:EmployeeModel;

  constructor(private mainService:MainService) { }

  ngOnInit(): void {
    
  }

 
  filterByKey(key:any){

    if(this.mainService.filterKeys.indexOf(key) == -1){//if the key was not exist before then add it

      this.mainService.filterKeys.push(key);

    }

    this.mainService.filterContent(this.mainService.filterKeys)//after adding a key invoke filter function

  }
}
