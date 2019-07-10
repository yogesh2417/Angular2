import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ListEmployeeComponent } from './employee/listEmployee.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeContainerComponent } from './employee/employeecontainer.component';
import { EmployeeCountComponent } from './employee/employeecount.component';
import { SimpleComponent } from './Others/simple.component';
import { EmployeeService } from './employee/employee.service';
import { HomeComponent } from './Home/home.component';
import { PageNotFoundComponent } from './Others/pageNotFound.component';
import { UserPreferenceService} from './employee/userPreferences.service';

const appRoutes: Routes=[                                                    // these routes should be in specific order. more commonly used should be written on top.
    { path: 'home', component: HomeComponent },                              //Generic should come at the bottom otherwise it will always run for other components too.                   
    { path: 'employee', component: EmployeeContainerComponent },
    { path: 'employee/:id', component: EmployeeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:'**',component:PageNotFoundComponent}

];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes, {useHash:true}) ],
    declarations: [AppComponent, EmployeeComponent, ListEmployeeComponent, EmployeeTitlePipe, EmployeeContainerComponent, EmployeeCountComponent, SimpleComponent, HomeComponent,
                    PageNotFoundComponent],
    bootstrap: [AppComponent],
    providers:[EmployeeService,UserPreferenceService]

})
export class AppModule { }
