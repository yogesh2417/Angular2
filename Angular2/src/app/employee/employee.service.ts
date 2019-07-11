import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';


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
            .map((response: Response) => <IEmployee>response.json())                          //.map used to cast observable response to IEmployee type               
            .catch(this.handleError);                     
    }

        handleError(error: Response) {
        console.error(error);
            return Observable.throw(error.json().error());
    } 

    /*
     * In Observable use .subscribe to get data 
     * 
     * In Promise use .then to get data
     */
     





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