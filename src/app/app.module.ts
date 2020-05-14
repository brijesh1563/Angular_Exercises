import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BindComponent } from './bind/bind.component';
import { LoginComponent } from './login/login.component';
import { TableListComponent } from './table-list/table-list.component';
import { PipeExaComponent } from './pipe-exa/pipe-exa.component';
import { MypipePipe } from './mypipe.pipe';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BindComponent,
    LoginComponent,
    TableListComponent,
    PipeExaComponent,
    MypipePipe,
    EmployeeListComponent,
    EmployeeDetailComponent,
    routingComponent,
    SubjectListComponent,
    SubjectDetailComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
