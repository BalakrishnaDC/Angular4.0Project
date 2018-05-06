import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login-component',
  templateUrl: './user-login-component.component.html',
  /* using common css file istead of separate file*/
  styleUrls: ['../user-registration-component/user-registration-component.component.css']
})
export class UserLoginComponentComponent implements OnInit {
  form ;
  // variable declaration
  isHomePage: any;
  isRegistrationPage: any;
  isLoginPage: any;
  isHistory: any;
  signupName: any;
  constructor() { }

  // inatilization of varibales and form validataion
  ngOnInit() {
    this.isLoginPage = true;
    // validation of form
    this.form = new FormGroup ( {
      /* checking the field is empty or not */
      signupName: new FormControl('', Validators.required ),
      // validating the length of the password by calling custom method
      signupPassword: new FormControl('', this.validateLength ),
      }

    );

  }
 // password length validator
  validateLength(control) {
    if ( control.value.length < 8) {
        return {'signupName': true};
    }

  }
  // loading registration page component
  registrationFun() {
    this.isRegistrationPage = true;
    this.isLoginPage = false;
    this.isHomePage = false;
    this.isHistory = false;
  }

  // loading History page component
  historyFun() {
    this.isRegistrationPage = false;
    this.isLoginPage = false;
    this.isHomePage = false;
    this.isHistory = true;

  }
}
