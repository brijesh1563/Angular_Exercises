import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { ContactComponent } from './contact/contact.component'
import { SubjectListComponent } from './subject-list/subject-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component'



const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch:'full'},
  {path: 'department', component: DepartmentListComponent},
  // {path: 'department/:id', component: SubjectDetailComponent},
  {path: 'contact', component: ContactComponent},
  // {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [DepartmentListComponent, ContactComponent, SubjectDetailComponent, PageNotFoundComponent]
