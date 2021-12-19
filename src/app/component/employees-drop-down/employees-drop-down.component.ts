import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeeDetails } from 'src/app/entities/common-entities';
import { GetDataService } from 'src/app/services/get-data/get-data.service';


@Component({
  selector: 'employees-drop-down',
  templateUrl: './employees-drop-down.component.html',
  styleUrls: ['./employees-drop-down.component.scss']
})
export class EmployeesDropDownComponent implements OnInit {

  constructor(public getDataService: GetDataService) { }

  @Output() onEmployeeChanged = new EventEmitter<string>();
  employeeList: EmployeeDetails[] = [];;

  ngOnInit(): void {
    this.getDataService.getEmloyees().subscribe((employeeList: EmployeeDetails[]) => {
      this.employeeList = employeeList;
    });
  }

  employeeChanged(employeeName: any) {
    this.onEmployeeChanged.emit(employeeName);
  }

}
