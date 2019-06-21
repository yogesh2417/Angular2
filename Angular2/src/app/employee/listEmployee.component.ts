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
        { id: 1, Name: 'a' },
        { id: 2, Name: 'b' },
        { id: 3, Name: 'c' },
        { id: 4, Name: 'd' },
        { id: 5, Name: 'e' },
    ];
    }

    getEmployee(): void {
        this.employees = [
            { id: 1, Name: 'a' },
            { id: 2, Name: 'b' },
            { id: 3, Name: 'c' },
            { id: 4, Name: 'd' },
            { id: 5, Name: 'e' },
            { id: 6, Name: 'f' },
        ];
    }

    trackByEmp(index: number, employee: any): string {
        return employee.id;
    }


    
}