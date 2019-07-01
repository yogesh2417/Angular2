import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './employee';

@Component({
    selector: 'list-employees',
    templateUrl: 'app/employee/listEmployee.component.html',
    styleUrls: ['app/employee/listEmployee.component.css'],
})

export class ListEmployeeComponent {
    employees: IEmployee[];

    /* injected service from constructor but this is not the good approach.
     * If service calls http requests and takes time to fetch data then it will impact the loading time of the component. 
     * To avoid this use ngOnInit hook to inject service. ngOnInit executes after constructor.
     * will inject service at ngOnInit hook in employeecontainer.component.ts
     */

    constructor(private _employeeService:EmployeeService){    
        this._employeeService.getEmployees().subscribe(EmployeeData => this.employees = EmployeeData);
    }

    getEmployee(): void {
        this.employees;
    }

    trackByEmp(index: number, employee: any): string {
        return employee.id;
    }


    
}