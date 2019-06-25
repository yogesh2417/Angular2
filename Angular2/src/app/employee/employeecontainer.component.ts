import { Component } from '@angular/core';

@Component({
    selector: 'employee-container',
    templateUrl: 'app/employee/employeecontainer.component.html',
    styleUrls: ['app/employee/employeecontainer.component.css']
})

export class EmployeeContainerComponent {
    employees: any[];

    constructor() {
        this.employees = [
            { id: 1, Name: 'a', Gender: 'Male' },
            { id: 2, Name: 'b', Gender: 'Female' },
            { id: 3, Name: 'c', Gender: 'Male' }, 
            { id: 4, Name: 'd', Gender: 'Female' },
            { id: 5, Name: 'e', Gender: 'Male' },
            { id: 6, Name: 'f', Gender: 'Male' },
        ];
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