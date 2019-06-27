import { Component,Input,OnChanges,SimpleChanges } from '@angular/core';

@Component({
    selector: 'simple',
    template:'You have entered : {{simpleInput}}'
})

export class SimpleComponent implements OnChanges {
    @Input() simpleInput: string;

    ngOnChanges(changes: SimpleChanges) {
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let previous = JSON.stringify(change.previousValue);
            let current = JSON.stringify(change.currentValue);
            //console.log("Previous Value : " + previous + "Current Value : " + current);
            console.log(`${propertyName}: Previous Value = ${previous} , Current Value =${current} `);
        }
    }
}