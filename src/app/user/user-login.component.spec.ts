import { inject, TestBed } from '@angular/core/testing';
import { UserLoginComponent } from './user-login.component';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
describe('userLogin Component', () => {
  let isWorking = false
  let fixtureUserLoginComponent;
  const userServiceMock = {
    login: () => {
      return new Promise((resolve, reject) => {
        (isWorking) ? resolve() : reject()
      });
    }
  };
  const MockRouter = {
    navigate(){
    }
  }
  beforeEach(() => {
    spyOn(userServiceMock, 'login').and.callThrough();
    spyOn(MockRouter, 'navigate');
    TestBed.configureTestingModule({
      declarations: [UserLoginComponent],
      imports: [ReactiveFormsModule],
      providers: [{provide: UserService, useValue: userServiceMock},
        {provide: Router, useValue: MockRouter}]
    })
    return TestBed.compileComponents();
  })
  beforeEach(() => {
    fixtureUserLoginComponent = TestBed.createComponent(UserLoginComponent);
  })
  it('has submit button', inject([UserService], (userService) => {
    let button = fixtureUserLoginComponent.debugElement.query(By.css("button[type='submit']"))
    expect(button).toBeDefined();
  }))
  it('pressing submit sends data to userService', () => {
    let button = fixtureUserLoginComponent.debugElement.query(By.css("button[type='submit']"))
    button.nativeElement.click();
    expect(userServiceMock.login).toHaveBeenCalled();
  })
})
