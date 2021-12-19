import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DepartmentDetails, MyTask, TasksFilter } from 'src/app/entities/common-entities';
import { GetDataService } from '../get-data/get-data.service';

@Injectable({
  providedIn: 'root'
})
export class TasksDataService {

  private _tasksFilterSource = new Subject<TasksFilter>();
  tasksFilter$ = this._tasksFilterSource.asObservable();

  constructor(private getDataService: GetDataService) { }

  addFilter(employeeName: string, departmentName: string)
  {
    this.getDataService.getDepartments().subscribe((departments: DepartmentDetails[]) =>{
      var departmentId = 0;
      if(departmentName)
      {
        var matchDepartments = departments.filter(d => d.DepartmentName == departmentName);
        if(matchDepartments.length != 1)
        {
          throw new Error(`Department ${departmentName} not found`);
        }
        departmentId = matchDepartments[0].DepartmentID;
      }
      var filter: TasksFilter = {EmployeeName: employeeName, DepartmentId:departmentId };
      this._tasksFilterSource.next(filter);
    });
  }

}
