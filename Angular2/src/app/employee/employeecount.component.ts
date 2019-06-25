import { Component,Input } from '@angular/core';

@Component({
    selector: "employee-count",
    templateUrl: 'app/employee/employeecount.component.html',
    styleUrls: ['app/employee/employeecount.component.css']
})

export class EmployeeCountComponent {
    @Input()
    All: number;

    @Input()
    Male: number;

    @Input()
    Female: number;
}