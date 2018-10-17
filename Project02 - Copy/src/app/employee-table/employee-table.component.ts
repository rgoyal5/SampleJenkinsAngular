import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/Employee';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  employees:Employee[];
  constructor(private inv:DataServiceService) { }

  ngOnInit() {
    this.employees=this.inv.getList();
  }
}
