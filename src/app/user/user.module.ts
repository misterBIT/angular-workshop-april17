import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserRegistrationComponent } from './user-registration.component';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './user.service';
import { UserLoginComponent } from './user-login.component';
import { CanActivateUserAuth } from './canActivateUserAuth.service';
const userRoutes: Routes = [
  {path: 'register', component: UserRegistrationComponent},
  {path: 'login', component: UserLoginComponent}
]
@NgModule({
  imports: [
    RouterModule.forChild(userRoutes),
    SharedModule
  ],
  providers: [UserService,CanActivateUserAuth],
  declarations: [UserRegistrationComponent, UserLoginComponent]
})
export class UserModule {
}
