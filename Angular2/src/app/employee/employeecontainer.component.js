"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var EmployeeContainerComponent = (function () {
    function EmployeeContainerComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.statusMessage = "Please wait.";
        this.selectedEmployeeCountRadioButton = 'All';
    }
    //here ngOnInit hook used to call service.
    EmployeeContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees().subscribe(function (EmployeeData) { return _this.employees = EmployeeData; });
    };
    EmployeeContainerComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    EmployeeContainerComponent.prototype.getTotalEmployeesCount = function () {
        return this.employees.length;
    };
    EmployeeContainerComponent.prototype.getTotalMaleEmployeesCount = function () {
        return this.employees.filter(function (x) { return x.Gender === 'Male'; }).length;
    };
    EmployeeContainerComponent.prototype.getTotalFemaleEmployeesCount = function () {
        return this.employees.filter(function (x) { return x.Gender === 'Female'; }).length;
    };
    return EmployeeContainerComponent;
}());
EmployeeContainerComponent = __decorate([
    core_1.Component({
        selector: 'employee-container',
        templateUrl: 'app/employee/employeecontainer.component.html',
        styleUrls: ['app/employee/employeecontainer.component.css']
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeContainerComponent);
exports.EmployeeContainerComponent = EmployeeContainerComponent;
//# sourceMappingURL=employeecontainer.component.js.map