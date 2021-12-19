import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data/get-data.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { DepartmentDetails, DepartmentFlatNode } from 'src/app/entities/common-entities';
import { DepartmentsService } from 'src/app/services/departments/departments.service';


@Component({
  selector: 'departments-tree',
  templateUrl: './departments-tree.component.html',
  styleUrls: ['./departments-tree.component.scss']
})
export class DepartmentsTreeComponent implements OnInit {

  constructor(private getDataService: GetDataService, private departmentsService: DepartmentsService) { }

  @Output() onDepartmentClicked = new EventEmitter<string>();

  private _transformer = (node: any, level: number) => {
    return {
     expandable: !!node.children && node.children.length > 0,
     name: node.DepartmentName,
     level: level
    };
  }

  treeControl = new FlatTreeControl<DepartmentFlatNode>(node => node.level, node => node.expandable);
  treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  hasChild = (_: number, node: DepartmentFlatNode) => node.expandable;

  ngOnInit() {
    this.getDataService.getDepartments().subscribe((treeData: DepartmentDetails[]) =>{
      this.dataSource.data = this.departmentsService.createDepartmentsTree(treeData);
    });
  }

  departmentClicked(departmentName: string)
  {
     this.onDepartmentClicked.emit(departmentName);
  }

}