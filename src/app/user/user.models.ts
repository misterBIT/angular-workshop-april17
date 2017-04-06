import { Validators } from '@angular/forms';
export interface IBasicUser {
  username: string;
  password: string
}
export class User implements IBasicUser {
  username: string;
  password: string
  firstName: string;
  address: {
    street: string
    city: string;
    zip: number;
  }

  constructor(opts = {}) {
    Object.assign(this, opts);
  }
}

export const UserValidation = {
  username: [Validators.required, Validators.minLength(3)],
  password: [Validators.required, Validators.minLength(4)],
  firstName: [],
  address: {
    city: [],
    street: [],
    zip: [Validators.pattern(/[0-9]{5,7}/)]
  }
}
