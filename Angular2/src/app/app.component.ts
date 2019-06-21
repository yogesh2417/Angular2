import { Component } from "@angular/core"

@Component({
    selector: 'my-app',
    templateUrl:'app/app.component.html'
})

export class AppComponent{
    pageHeader: string = 'Employee Details';

    isDisabled: boolean = false;

    maliciousString: string = 'hello <script>alert(123);</script> world';

    firstName: string = 'jay';
    lastName: string = 'singh';

    getFullName(): string {
        return this.firstName + this.lastName;
    };

    isbold: boolean = true;
    fontsize: number = 20;

    Styles() {
        let style={
            'font-size.px': this.fontsize,
            'font-weight' : this.isbold ? 'bold' : 'normal',

        };
        return style;
    };

    onClick(): void {
        console.log("clicked");
    };

    name: string = "tom";
}