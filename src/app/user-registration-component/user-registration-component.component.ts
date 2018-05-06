import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-registration-component',
  templateUrl: './user-registration-component.component.html',
  /*useing custom css file*/
  styleUrls: ['./user-registration-component.component.css']
})
export class UserRegistrationComponentComponent implements OnInit {
  form;
  isHomePage: any;
  isRegistrationPage: any;
  isLoginPage: any;
  isHistory: any;
  constructor() { }
  /* intialization of variables*/
  ngOnInit() {
    this.isRegistrationPage = true;
    // form validation
    this.form = new FormGroup ( {
      signupName: new FormControl('', Validators.required ),
      signupEmail: new FormControl('', Validators.required),
      signupEmailagain: new FormControl('', Validators.required ),
      signupPassword: new FormControl('', Validators.required),
      signupPasswordagain: new FormControl('', Validators.required),
      }

    );
  }

 // calling login page
  logInFun() {
    this.isRegistrationPage = false;
    this.isLoginPage = true;
    this.isHomePage = false;
    this.isHistory = false;
  }
}
