import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ListEmployeeComponent } from './employee/listEmployee.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeContainerComponent } from './employee/employeecontainer.component';
import { EmployeeCountComponent } from './employee/employeecount.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ,EmployeeComponent,ListEmployeeComponent,EmployeeTitlePipe,EmployeeContainerComponent,EmployeeCountComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
