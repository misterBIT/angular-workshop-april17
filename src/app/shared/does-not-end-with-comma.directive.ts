import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[doesNotEndWithComma]',
  providers: [{provide: NG_VALIDATORS, useExisting: DoesNotEndWithCommaDirective, multi: true}]
})
export class DoesNotEndWithCommaDirective implements Validator {
  static Validator: ValidatorFn = (c: AbstractControl): ValidationErrors | any => {
    return !c.value || (c.value[c.value.length - 1] !== ',') ? null : {commaEnd: true}
  }

  validate = DoesNotEndWithCommaDirective.Validator

  constructor() { // you can use the constructor for getting services etc..
  }

}
