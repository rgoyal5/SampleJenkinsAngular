import { Injectable } from '@angular/core';
import { Employee } from '../model/Employee';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  employees: Employee[];
  constructor() {
    this.employees=[
      
        ];
   }

   getList(){
     return this.employees;
   }
   
   add(employee:Employee){
    this.employees.push(employee);
  }
 
};
