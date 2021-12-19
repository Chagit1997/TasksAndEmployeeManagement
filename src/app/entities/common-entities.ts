export interface EmployeeDetails{
    EmployeeName: string;
    EmployeePicture: string;
}

export interface DepartmentDetails
{
    DepartmentID: number;
    DepartmentName: string;
    ParentID: number;
    children?: DepartmentDetails[];
}

export interface DepartmentFlatNode {
    expandable: boolean;
    name: string;
    level: number;
}

export interface MyTask{
    TaskNumber: number;
    TaskName: string;
    StatusID: number;
    EmployeeName: string;
    DepartmentID: number;
    DueDate: Date;
}

export interface TasksFilter
{
    EmployeeName: string;
    DepartmentId: number;
}
