import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, UserValidation } from './user.models';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './registration-form.html',
  styleUrls: ['./registration-form.css'],
})
export class UserRegistrationComponent implements OnInit {
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
  }

  userForm: FormGroup = this.fb.group({
    username: ['', UserValidation.username],
    password: ['', UserValidation.password],
    firstName: ['', UserValidation.firstName],
    address: this.fb.group({
      city: ['', UserValidation.address.city],
      street: ['', UserValidation.address.street],
      zip: ['', UserValidation.address.zip],
    }),
    notRobot: ['', [Validators.required]]
  })

  ngOnInit() {
  }

  onSubmit() {
    if (this.userForm.valid) {
      let {username, password, address, firstName} = this.userForm.value;
      //I would really just send the details to the service for further processing... eg creating the user
      let newUser = new User({username, password, address, firstName});
      this.userService.addUser(newUser);
      this.router.navigate(['/login']);
    }
  }

}
