import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class EmployeeService {
    //getEmployees(): IEmployee[]{
    //    return[
    //        { id: 1, Name: 'a', Gender: 'Male' },
    //        { id: 2, Name: 'b', Gender: 'Female' },
    //        { id: 3, Name: 'c', Gender: 'Male' },
    //        { id: 4, Name: 'd', Gender: 'Female' },
    //        { id: 5, Name: 'e', Gender: 'Male' },
    //    ];
    //}

    constructor(private _http: Http) {

    }

    getEmployees(): Observable<IEmployee[]> {
        return this._http.get("http://localhost:62288/api/employee")
            .map((response: Response) => <IEmployee[]>response.json()) //map is used to cast Observable<Response> to Observable<IEmployee[]>
            //.catch(this.handleError);                     // exception handling.
    }

    getEmployeeById(code:number): Observable<IEmployee> {
        return this._http.get("http://localhost:62288/api/employee/" + code)
            .map((response: Response) => <IEmployee>response.json()) //map is used to cast Observable<Response> to Observable<IEmployee[]>
        //.catch(this.handleError);                     // exception handling.
    }


    //private handleError(error: Response) {
    //    console.error(error);
    //    return Observable.throw(error.json().error());
    //} 

}