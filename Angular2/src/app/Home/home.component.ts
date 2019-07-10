import { Component } from '@angular/core';
import { UserPreferenceService } from '../employee/userPreferences.service';

@Component({
    template: `<h1>Home Component</h1>
               <br/>
                Color Preference : 
                <input type='text' [(ngModel)]='color' [style.background]='color'/>`
})

export class HomeComponent {
    constructor(private _userPreference: UserPreferenceService) { }

    get color():string {
        return this._userPreference.colorPreference;
    }

    set color(value:string) {
        this._userPreference.colorPreference = value;
    }
}