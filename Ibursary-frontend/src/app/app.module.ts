import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';

import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
// import { MatDrawerModule} from '@angular/material/'
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { MainNavComponent } from './Shared/main-nav.component';
import { LoginComponent } from './Shared/Login/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './Shared/Register/register/register.component';
import { BursaryApplicationComponent } from './Components/Student/bursary-application/bursary-application.component';
import { StudentDashboardComponent } from './Components/Student/Dashboard/student-dashboard/student-dashboard.component';
import { DashboardComponent } from './Components/Admin/dashboard/dashboard.component';
import { ApplicationsComponent } from './Components/Admin/applications/applications.component';
import { ReportsComponent } from './Components/Admin/reports/reports.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    LoginComponent,
    RegisterComponent,
    BursaryApplicationComponent,
    StudentDashboardComponent,
    DashboardComponent,
    ApplicationsComponent,
    ReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatStepperModule,
    MatListModule,
    MatDividerModule,
    MatSidenavModule,
    NgxChartsModule
  ],
  exports: [
    FlexLayoutModule,
    MainNavComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
