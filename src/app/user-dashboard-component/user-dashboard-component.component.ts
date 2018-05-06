import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UserLoginComponentComponent } from '../user-login-component/user-login-component.component';
import { UserRegistrationComponentComponent } from '../user-registration-component/user-registration-component.component';


@Component({
  selector: 'app-user-dashboard-component',
  templateUrl: './user-dashboard-component.component.html'
  /* removed unused property like css file*/
})
export class UserDashboardComponentComponent implements OnInit {

  // variable declarations
  isHomePage: any;
  isRegistrationPage: any;
  isLoginPage: any;
  pageName: any;
  isHistory: any;
  constructor() { }

  // initialization of variables for loading
  ngOnInit() {
    this.isHomePage = true;
    // binding the varibale in html file
    this.pageName = 'BIG-BOSS';
  }

  // enabling the registration page
  registrationFun() {
    this.isRegistrationPage = true;
    this.isLoginPage = false;
    this.isHomePage = false;
    this.isHistory = false;
  }

  // enabling the log-in page
  logInFun() {
    this.isRegistrationPage = false;
    this.isLoginPage = true;
    this.isHomePage = false;
    this.isHistory = false;
  }

  // enabling the home page
  homeFun() {
    this.isRegistrationPage = false;
    this.isLoginPage = false;
    this.isHomePage = true;
    this.isHistory = false;
  }
  // calling pop-up alert if you are clicked on HISTORY link without login
  historyWarning() {
    alert('Opps!! You need to SignIn to View Big-Boss History');
  }

}
