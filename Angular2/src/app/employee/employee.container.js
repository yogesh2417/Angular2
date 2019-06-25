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
var EmployeeContainerComponent = /** @class */ (function () {
    function EmployeeContainerComponent() {
        this.employees = [
            { id: 1, Name: 'a', Gender: 'Male' },
            { id: 2, Name: 'b', Gender: 'Female' },
            { id: 3, Name: 'c', Gender: 'Male' },
            { id: 4, Name: 'd', Gender: 'Female' },
            { id: 5, Name: 'e', Gender: 'Male' },
        ];
    }
    EmployeeContainerComponent = __decorate([
        core_1.Component({
            selector: 'list-employees',
            templateUrl: 'app/employee/listEmployee.component.html',
            styleUrls: ['app/employee/listEmployee.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeContainerComponent);
    return EmployeeContainerComponent;
}());
exports.EmployeeContainerComponent = EmployeeContainerComponent;
//# sourceMappingURL=employee.container.js.map