import { Component } from '@angular/core';

@Component({
    selector: 'list-employees',
    templateUrl: 'app/employee/listEmployee.component.html',
    styleUrls: ['app/employee/listEmployee.component.css']
})

export class ListEmployeeComponent {
    employees: any[];

    constructor (){
    this.employees = [
        { id: 1, Name: 'a',Gender: 'Male' },
        { id: 2, Name: 'b',Gender: 'Female' },
        { id: 3, Name: 'c', Gender: 'Male' },
        { id: 4, Name: 'd', Gender: 'Female' },
        { id: 5, Name: 'e', Gender: 'Male' },
    ];
    }

    getEmployee(): void {
        this.employees = [
            { id: 1, Name: 'a', Gender: 'Male' },
            { id: 2, Name: 'b', Gender: 'Female' },
            { id: 3, Name: 'c', Gender: 'Male' },
            { id: 4, Name: 'd', Gender: 'Female' },
            { id: 5, Name: 'e', Gender: 'Male' },
            { id: 6, Name: 'f', Gender: 'Female' },
        ];
    }

    trackByEmp(index: number, employee: any): string {
        return employee.id;
    }


    
}