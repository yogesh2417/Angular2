import {Component,OnInit} from "@angular/core"
import { EmployeeService } from "./employee.service";
import { IEmployee } from "./employee";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})


export class EmployeeComponent implements OnInit {
    //firstName: string = 'Tom';
    //lastName: string = 'Henks';
    //gender: string = 'Male';
    //age: number = 50;
    //showDetails: boolean = false;

    //toggleDetails(): void {
    //    this.showDetails = !this.showDetails;
    //}

    employee: IEmployee;  

    constructor(private _employeeService: EmployeeService, private _activatedRoute:ActivatedRoute) { }

    ngOnInit() {
        let id: number = this._activatedRoute.snapshot.params['id'];
        this._employeeService.getEmployeeById(id).subscribe(
            employeeData => this.employee = employeeData,
        );
    }

}