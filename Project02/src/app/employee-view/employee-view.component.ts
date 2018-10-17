import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../service/data-service.service';
import { Employee } from '../model/Employee';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  employee:Employee;
  constructor(private activateRoute: ActivatedRoute,
              private dService : DataServiceService) { }

  employeeId:number;
  ngOnInit() {
    
    }
  }

