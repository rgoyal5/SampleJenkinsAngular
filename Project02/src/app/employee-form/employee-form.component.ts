import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/Employee';
import { DataServiceService } from '../service/data-service.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee:Employee;
  isEdit:boolean;
  constructor(
    private inv:DataServiceService,
    private router:Router,
    private activatedRoute : ActivatedRoute,
  ) { }

  ngOnInit() {
   
    this.employee=new Employee();
  }


  save(){
      this.inv.add(this.employee);
    this.router.navigateByUrl("/et");
  }

  cancel(){
    this.router.navigateByUrl("/et");
  }


}

