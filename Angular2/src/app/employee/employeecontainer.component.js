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
var userPreferences_service_1 = require("./userPreferences.service");
var EmployeeContainerComponent = /** @class */ (function () {
    function EmployeeContainerComponent(_employeeService, _userPreference) {
        this._employeeService = _employeeService;
        this._userPreference = _userPreference;
        this.statusMessage = "Please wait.";
        this.selectedEmployeeCountRadioButton = 'All';
    }
    Object.defineProperty(EmployeeContainerComponent.prototype, "color", {
        get: function () {
            return this._userPreference.colorPreference;
        },
        set: function (value) {
            this._userPreference.colorPreference = value;
        },
        enumerable: true,
        configurable: true
    });
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
    EmployeeContainerComponent = __decorate([
        core_1.Component({
            selector: 'employee-container',
            templateUrl: 'app/employee/employeecontainer.component.html',
            styleUrls: ['app/employee/employeecontainer.component.css']
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, userPreferences_service_1.UserPreferenceService])
    ], EmployeeContainerComponent);
    return EmployeeContainerComponent;
}());
exports.EmployeeContainerComponent = EmployeeContainerComponent;
//# sourceMappingURL=employeecontainer.component.js.map