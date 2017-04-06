import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { UserValidation } from './user.models';

@Component({
  selector: 'app-user-login',
  template: `
    <form (ngSubmit)=login() [formGroup]="loginForm">
      <div>
        <label>UserName :</label> <input md-input type="text" formControlName="username">
      </div>
      <div>
        <label>Password :</label> <input md-input type="text" formControlName="password">
      </div>
      <button type="submit">Login</button>
    </form>
    <br/>
    <button (click)="logout()">LOGOUT!</button>
  `,
  styles: []
})
export class UserLoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', UserValidation.username),
    password: new FormControl('', UserValidation.password)
  })

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.loginForm.value).then(() => {
      this.router.navigate(['/pets']);
    }).catch((err) => {
      alert(err);
    })
  }

  logout(){
    this.userService.logout()
  }
}
