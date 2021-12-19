import { Injectable } from '@angular/core';
import { DepartmentDetails } from 'src/app/entities/common-entities';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor() { }

  createDepartmentsTree(treeData: DepartmentDetails[]) {
    var constructedTree: [] = [];
    for (var treeNode of treeData) {
      this.createTreeIner(constructedTree, treeNode, false)
    }
    return constructedTree;
  }
  
  createTreeIner(constructedTree: any, treeObj: DepartmentDetails, assigned: boolean) {
    if (treeObj.ParentID == 0) {
      treeObj.children = [];
      constructedTree.push(treeObj);
      return true;
    } 
    else 
    {
      if (treeObj.ParentID == constructedTree.DepartmentID) {
        treeObj.children = [];
        constructedTree.children.push(treeObj);
        return true;
      }
      else 
      {
        if (constructedTree.children != undefined) {
          for (var index = 0; index < constructedTree.children.length; index++) {
            var constructedObj = constructedTree.children[index];
            if (assigned == false) {
              assigned = this.createTreeIner(constructedObj, treeObj, assigned);
            }
          }
        } 
        else 
        {
          for (var index = 0; index < constructedTree.length; index++) {
            var constructedObj = constructedTree[index];
            if (assigned == false) {
              assigned = this.createTreeIner(constructedObj, treeObj, assigned);
            }
          }
        }
        return false;
      }
    }
  }

}
