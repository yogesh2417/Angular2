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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var ListEmployeeComponent = /** @class */ (function () {
    /* injected service from constructor but this is not the good approach.
     * If service calls http requests and takes time to fetch data then it will impact the loading time of the component.
     * To avoid this use ngOnInit hook to inject service. ngOnInit executes after constructor.
     * will inject service at ngOnInit hook in employeecontainer.component.ts
     */
    function ListEmployeeComponent(_employeeService) {
        var _this = this;
        this._employeeService = _employeeService;
        this._employeeService.getEmployees().subscribe(function (EmployeeData) { return _this.employees = EmployeeData; });
    }
    ListEmployeeComponent.prototype.getEmployee = function () {
        this.employees;
    };
    ListEmployeeComponent.prototype.trackByEmp = function (index, employee) {
        return employee.id;
    };
    ListEmployeeComponent = __decorate([
        core_1.Component({
            selector: 'list-employees',
            templateUrl: 'app/employee/listEmployee.component.html',
            styleUrls: ['app/employee/listEmployee.component.css'],
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], ListEmployeeComponent);
    return ListEmployeeComponent;
}());
exports.ListEmployeeComponent = ListEmployeeComponent;
//# sourceMappingURL=listEmployee.component.js.map