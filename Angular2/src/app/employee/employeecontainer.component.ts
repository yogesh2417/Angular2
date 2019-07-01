import { Component , OnInit} from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService} from './employee.service';

@Component({
    selector: 'employee-container',
    templateUrl: 'app/employee/employeecontainer.component.html',
    styleUrls: ['app/employee/employeecontainer.component.css']
})

export class EmployeeContainerComponent {
    employees: IEmployee[];
    statusMessage: string = "Please wait.";

    constructor(private _employeeService:EmployeeService) {        
    }

    //here ngOnInit hook used to call service.

    ngOnInit() {
        this._employeeService.getEmployees().subscribe(
            EmployeeData => this.employees = EmployeeData,
            //(error) => {
            //    this.statusMessage = error
            //}
        );
    }

    selectedEmployeeCountRadioButton: string = 'All';

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }


    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(x=>x.Gender==='Male').length;
    }



    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(x=>x.Gender==='Female').length;
    }

}