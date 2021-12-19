import { Component, OnInit } from '@angular/core';
import { TasksDataService } from 'src/app/services/tasks-data/tasks-data.service';

@Component({
  selector: 'main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  constructor(private tasksDataService: TasksDataService) { }

  ngOnInit(): void {
  }

  tableTitle = "All tasks";
  employeeChanged(employeeName: string)
  {
    this.tasksDataService.addFilter(employeeName, "");
    this.tableTitle = employeeName;
  }

  departmentClicked(departmentName: string)
  {
    this.tasksDataService.addFilter("", departmentName);
    this.tableTitle = departmentName;
  }


}
