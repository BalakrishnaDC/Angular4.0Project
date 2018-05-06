import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-history-component',
  templateUrl: './user-history-component.component.html'
  /* removed unused css file*/
})
export class UserHistoryComponentComponent implements OnInit {

  form;
  isHistory: any;
  pageName: any;
  data: any = {};
  posts: any = {} ;
  postsObj: any = {} ;
  isParticpt: any;
  addMnth: any;
  data1: any;
  monthList: any = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
  challanCINList = [{'id': 'Sachin', 'desc': 'Thendulkar', 'code': 'AA'}, {'id': 'Rain', 'desc': 'Suresh', 'code': 'BB'}, {'id': 'Raydu', 'desc': 'Ambati', 'code': 'CC'}];
  // passing http object as a paramter to intialize the object
  constructor(private http: Http) { }

  ngOnInit() {
    // binding the value to the html file
    this.pageName = 'Participants List';
    this.isHistory = true;
    this.isParticpt = false;
    this.addMnth = false;
    this.data1 = 'Select month by clicking the ADD Month button';
    // calling the JSON url
    this.http.get( 'https://jsonplaceholder.typicode.com/posts')
      .subscribe( data => {
          this.data = data;
        // checking the response in console
           console.log('posts', this.data);
        },
        error => console.log( error )
      );
    // disabling the form and simple validation
    this.form = new FormGroup ( {
       // adding validation to each field and we can add more validation to each field by separating coma
        signupName: new FormControl('', Validators.required ),
        signupEmail: new FormControl('', Validators.required),
        signupEmailagain: new FormControl('', Validators.required ),
      }

    );

    }
    // adding participent to the avialable list
  addParticipent(user) {
    // assigning the form values to a object
    this.postsObj.id = user.signupName;
    this.postsObj.desc = user.signupEmail;
    this.postsObj.code = user.signupEmailagain;
    // adding object to a list
    this.challanCINList.push(this.postsObj);
    // disabling the form
    this.isParticpt = false;
  }
  openFormAddParticipent() {
    this.isParticpt = true;
  }

  openMnth() {
    this.addMnth = true;
  }
  // two way binding of dropdown value
  mnthSelection(event: any) {
    this.data1 = event.target.value;
  }
  // clearing all the forms
  clearAllForm() {
    this.addMnth = false;
    this.isParticpt = false;
  }
}
