import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: "employee-count",
    templateUrl: 'app/employee/employeecount.component.html',
    styleUrls: ['app/employee/employeecount.component.css']
})

export class EmployeeCountComponent {

    selectedRadioButtonValue: string = 'All';

    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    All: number;

    @Input()
    Male: number;

    @Input()
    Female: number;


    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
        
    }




}