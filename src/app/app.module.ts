import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UserLoginComponentComponent } from './user-login-component/user-login-component.component';
import { UserDashboardComponentComponent } from './user-dashboard-component/user-dashboard-component.component';
import { UserRegistrationComponentComponent } from './user-registration-component/user-registration-component.component';
import { UserHistoryComponentComponent } from './user-history-component/user-history-component.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponentComponent,
    UserDashboardComponentComponent,
    UserRegistrationComponentComponent,
    UserHistoryComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
