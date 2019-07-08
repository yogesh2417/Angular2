"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employee/employee.component");
var listEmployee_component_1 = require("./employee/listEmployee.component");
var employeeTitle_pipe_1 = require("./employee/employeeTitle.pipe");
var employeecontainer_component_1 = require("./employee/employeecontainer.component");
var employeecount_component_1 = require("./employee/employeecount.component");
var simple_component_1 = require("./Others/simple.component");
var employee_service_1 = require("./employee/employee.service");
var home_component_1 = require("./Home/home.component");
var pageNotFound_component_1 = require("./Others/pageNotFound.component");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'employee', component: employeecontainer_component_1.EmployeeContainerComponent },
    { path: 'employee/:id', component: employee_component_1.EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes, { useHash: true })],
        declarations: [app_component_1.AppComponent, employee_component_1.EmployeeComponent, listEmployee_component_1.ListEmployeeComponent, employeeTitle_pipe_1.EmployeeTitlePipe, employeecontainer_component_1.EmployeeContainerComponent, employeecount_component_1.EmployeeCountComponent, simple_component_1.SimpleComponent, home_component_1.HomeComponent,
            pageNotFound_component_1.PageNotFoundComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [employee_service_1.EmployeeService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map