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
var router_1 = require("@angular/router");
var EmployeeComponent = (function () {
    function EmployeeComponent(_employeeService, _activatedRoute) {
        this._employeeService = _employeeService;
        this._activatedRoute = _activatedRoute;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._activatedRoute.snapshot.params['id'];
        this._employeeService.getEmployeeById(id).subscribe(function (employeeData) { return _this.employee = employeeData; });
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        selector: 'my-employee',
        templateUrl: 'app/employee/employee.component.html',
        styleUrls: ['app/employee/employee.component.css']
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService, router_1.ActivatedRoute])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map