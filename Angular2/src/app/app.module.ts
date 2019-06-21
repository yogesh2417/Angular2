import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {ListEmployeeComponent } from './employee/listEmployee.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ,EmployeeComponent,ListEmployeeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
