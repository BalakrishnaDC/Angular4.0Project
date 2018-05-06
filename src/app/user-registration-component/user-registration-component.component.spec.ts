import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationComponentComponent } from './user-registration-component.component';

describe('UserRegistrationComponentComponent', () => {
  let component: UserRegistrationComponentComponent;
  let fixture: ComponentFixture<UserRegistrationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegistrationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
