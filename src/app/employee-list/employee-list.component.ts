import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private _employeeservice: EmployeeService) { }

  ngOnInit(): void {
    this._employeeservice.getEmployees()
        .subscribe(data => this.details = data);
  }

  public details =  [];

}
