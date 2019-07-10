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
var rxjs_1 = require("rxjs");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/toPromise");
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
            .map(function (response) { return response.json(); }) //.map used to cast observable response to IEmployee type               
            .catch(this.handleError);
    };
    EmployeeService.prototype.handleError = function (error) {
        console.error(error);
        return rxjs_1.Observable.throw(error.json().error());
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeService);
exports.EmployeeService = EmployeeService;
/*
 * In Observable use .subscribe to get data
 *
 * In Promise use .then to get data
 *
 * /





//getEmployeeById(code: number): Promise<IEmployee> {
//    return this._http.get("http://localhost:62288/api/employee/" + code)
//        .map((response: Response) => <IEmployee>response.json())
//        .toPromise()
//        .catch(this.handlePromiseError);
    
        
//}

//handlePromiseError(error: Response) {
//    console.error(error);
//    throw(error);
//}




} 
//# sourceMappingURL=employee.service.js.map