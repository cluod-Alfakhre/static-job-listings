import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  
  employeesArray:any[]=[]

  filterKeys:any=[]

  filteredArray:any=[];

  employee:any;

  

  constructor(private http:HttpClient) { }

  

  getEmployee(id:number){
    return this.getEmployeesArray().pipe(
      map((employees:any) =>{
        return employees.filter((item:any)=>{
          return item.id == id;
        })[0]
      })
    )
  }
  getEmployeesArray() {
    return this.http.get('assets/data.json');
  }

  clearArray(){
    this.getEmployeesArray().subscribe((data:any)=>{
      this.employeesArray=data;
     })
     this.filterKeys=[]
  }

  filterContent(keysArray:[]){
   this.filteredArray = this.employeesArray.filter((item)=>{
     let arrFilterValues=[item.role, item.level, ...item.languages || [], ...item.tools || []];
      return keysArray.every(key=> arrFilterValues.includes(key))
   })
   this.employeesArray = this.filteredArray;
  }

  delete(index:number){
    this.filterKeys.splice(index,1);
    this.getEmployeesArray().subscribe((data:any)=>{
      this.employeesArray=data;
      this.filterContent(this.filterKeys);
    })
  }

}