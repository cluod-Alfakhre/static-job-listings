import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from './employee/models/employee.model';

@Injectable({
  providedIn: 'root'
})

export class MainService {
  
  employeesArray:EmployeeModel[]=[]//our main array will contain all the data

  filteredArray:EmployeeModel[]=[];
  
  filterKeys:string[]=[]//this array will contain the word you wanna search for


  constructor(private http:HttpClient) { }
  

  getEmployeesArray():Observable<any> {//making get request to get the data
    return this.http.get('assets/data.json');
  }

  clearArray():void {
    this.filteredArray=this.employeesArray;//set the filteredArray to the main full array
     this.filterKeys=[];//and clear the filter keys sol no filter is implemented
  }

  filterContent(keysArray:string[]):void {//keysArray is the skills you wanna search for

   this.filteredArray = this.employeesArray.filter((item)=>{//for all the employeesArray elements, 1- create a new array contains all the skills of that singl element (arrFilterValues)

     let arrFilterValues=[item.role, item.level, ...item.languages || [], ...item.tools || []];

      return keysArray.every(key=> arrFilterValues.includes(key))//now for every skill you wanna search for, look at the employee skills if it contains all the wanted words 

   })

  }

  delete(index:number):void {

    this.filterKeys.splice(index,1);//from the array that contains the wanted words delete that spesific index,
                                    //and notise the filteredArray not containing all the data cause of filtering

      this.filteredArray=this.employeesArray;//so we need to reasign it to our main array

      this.filterContent(this.filterKeys);//and re filter it again

  }

}