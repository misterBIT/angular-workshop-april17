import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserRegistrationComponent } from './user-registration.component';
import { RouterModule, Routes } from '@angular/router';
const userRoutes: Routes = [
  {path: 'register', component: UserRegistrationComponent}
]
@NgModule({
  imports: [
    RouterModule.forChild(userRoutes),
    SharedModule
  ],
  declarations: [UserRegistrationComponent]
})
export class UserModule {
}
