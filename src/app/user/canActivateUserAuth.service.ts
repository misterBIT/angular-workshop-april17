import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
@Injectable()
export class CanActivateUserAuth implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isAllowed = (this.userService.isLoggedIn);
    if (!isAllowed) {
      this.router.navigate(['/login']);
    }
    return isAllowed;
  }

  constructor(private userService: UserService, private router: Router) {
  }
}
