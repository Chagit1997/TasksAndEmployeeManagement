import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatTreeModule} from '@angular/material/tree';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetDataService } from './services/get-data/get-data.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DepartmentsTreeComponent } from './component/departments-tree/departments-tree.component';
import { EmployeesDropDownComponent } from './component/employees-drop-down/employees-drop-down.component';
import { TasksTableComponent } from './component/tasks-table/tasks-table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MainFormComponent } from './component/main-form/main-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesDropDownComponent,
    DepartmentsTreeComponent,
    TasksTableComponent,
    MainFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    NgbModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
    GetDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
