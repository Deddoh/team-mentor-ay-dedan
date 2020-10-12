import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './Shared/Login/login/login.component';
import { RegisterComponent } from './Shared/Register/register/register.component';
import { BursaryApplicationComponent } from './Components/Student/bursary-application/bursary-application.component';
import { StudentDashboardComponent } from './Components/Student/Dashboard/student-dashboard/student-dashboard.component';
import { DashboardComponent } from './Components/Admin/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path:'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'st-dashboard', component: StudentDashboardComponent},
  { path: 'bc-admin', component: DashboardComponent},
  {path: 'new-application', component: BursaryApplicationComponent},
  { path: '', component: HomeComponent},
  { path: '**', pathMatch: 'full', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatButtonModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
