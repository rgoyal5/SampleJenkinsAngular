import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
const routesMap : Routes=[
  {path:'et',component:EmployeeTableComponent},
  {path:'ef',component:EmployeeFormComponent},
  {path:'ev/:id',component:EmployeeViewComponent},
  {path:'ee/:id',component:EmployeeFormComponent},

  ]
@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmployeeTableComponent,
    EmployeeViewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesMap),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
