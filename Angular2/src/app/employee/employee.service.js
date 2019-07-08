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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var EmployeeService = (function () {
    //getEmployees(): IEmployee[]{
    //    return[
    //        { id: 1, Name: 'a', Gender: 'Male' },
    //        { id: 2, Name: 'b', Gender: 'Female' },
    //        { id: 3, Name: 'c', Gender: 'Male' },
    //        { id: 4, Name: 'd', Gender: 'Female' },
    //        { id: 5, Name: 'e', Gender: 'Male' },
    //    ];
    //}
    function EmployeeService(_http) {
        this._http = _http;
    }
    EmployeeService.prototype.getEmployees = function () {
        return this._http.get("http://localhost:62288/api/employee")
            .map(function (response) { return response.json(); }); //map is used to cast Observable<Response> to Observable<IEmployee[]>
        //.catch(this.handleError);                     // exception handling.
    };
    EmployeeService.prototype.getEmployeeById = function (code) {
        return this._http.get("http://localhost:62288/api/employee/" + code)
            .map(function (response) { return response.json(); }); //map is used to cast Observable<Response> to Observable<IEmployee[]>
        //.catch(this.handleError);                     // exception handling.
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map