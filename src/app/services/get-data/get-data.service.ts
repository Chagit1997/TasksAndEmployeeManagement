import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DepartmentDetails, EmployeeDetails, MyTask } from 'src/app/entities/common-entities';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {  
  
  employeeFileUrl = "./assets/Employees.json"
  tasksFileUrl = "assets/Tasks.json"
  departmentsFileUrl = "assets/Departments.json"

  constructor(private httpClient: HttpClient) { }

  getEmloyees()
  {
     return this.httpClient.get<EmployeeDetails[]>(this.employeeFileUrl);
  }

  getDepartments()
  {
     return this.httpClient.get<DepartmentDetails[]>(this.departmentsFileUrl);
  }

  getTasks()
  {
     return this.httpClient.get<MyTask[]>(this.tasksFileUrl);
  }

}
