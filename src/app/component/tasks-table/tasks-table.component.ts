import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MyTask, TasksFilter } from 'src/app/entities/common-entities';
import { GetDataService } from 'src/app/services/get-data/get-data.service';
import { TasksDataService } from 'src/app/services/tasks-data/tasks-data.service';

@Component({
  selector: 'tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.scss']
})
export class TasksTableComponent implements AfterViewInit {

  constructor(public getDataService: GetDataService, private tasksDataService: TasksDataService) { 

   }
  @Input()
  tableTitle!: string;

  displayedColumns: string[] = ['TaskNumber', 'TaskName', 'StatusID', 'EmployeeName', 'DepartmentID', 'DueDate'];
  dataSource = new MatTableDataSource<MyTask>();
  @ViewChild('paginator')  paginator!: MatPaginator;

  ngOnInit()
  {
    this.tasksDataService.tasksFilter$.subscribe((filter: TasksFilter) =>{
      this.getTasksData(filter);

    });
  }

  ngAfterViewInit() {
    var filter: TasksFilter = {EmployeeName: "", DepartmentId: 0};
    this.getTasksData(filter);
  }

  checkDate(date: any)
  {
    return new Date(date) < new Date()
  }

  getTasksData(filter: TasksFilter)
  {
    this.getDataService.getTasks().subscribe((tasks: MyTask[]) =>{
      if(filter)
      {
        if(filter.EmployeeName)
        {
          tasks = tasks.filter(t => t.EmployeeName == filter.EmployeeName);
        }
        else{
          if(filter.DepartmentId != 0)
          {
            tasks = tasks.filter(t => t.DepartmentID == filter.DepartmentId);
          }
        }
      }
      this.dataSource = new MatTableDataSource<MyTask>(tasks);
      this.dataSource.paginator = this.paginator;
    });
  }

}

