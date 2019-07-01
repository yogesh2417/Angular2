import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ListEmployeeComponent } from './employee/listEmployee.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeContainerComponent } from './employee/employeecontainer.component';
import { EmployeeCountComponent } from './employee/employeecount.component';
import { SimpleComponent } from './Others/simple.component';
import { EmployeeService } from './employee/employee.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent ,EmployeeComponent,ListEmployeeComponent,EmployeeTitlePipe,EmployeeContainerComponent,EmployeeCountComponent,SimpleComponent],
    bootstrap: [AppComponent],
    providers:[EmployeeService]

})
export class AppModule { }
