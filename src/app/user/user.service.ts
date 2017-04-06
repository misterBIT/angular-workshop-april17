import { Injectable } from '@angular/core';
import { IBasicUser, User } from './user.models';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  constructor(private router: Router) {
  }

  users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
  }

  isLoggedIn = false;

  login(userDetails: IBasicUser): Promise<any> {
    const foundUser = this.users.find(user => user.password === userDetails.password && user.username === userDetails.username);
    if (foundUser) {
      this.isLoggedIn = true;
      return this.router.navigate(['/pets']);
    } else {
      return Promise.reject('unknown username or password');
    }
  }

  logout() {
    this.isLoggedIn = false;
    return this.router.navigateByUrl('/login')
  }
}
