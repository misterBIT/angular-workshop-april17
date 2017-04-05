import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[doesNotEndWithComma]',
  providers: [{provide: NG_VALIDATORS, useExisting: DoesNotEndWithCommaDirective, multi: true}]
})
export class DoesNotEndWithCommaDirective implements Validator {
  validate(c: AbstractControl): ValidationErrors | any {
    return !c.value || (c.value[c.value.length - 1] !== ',') ? null : {commaEnd: true}
  }

  constructor() { // you can use the constructor for getting services etc..
  }

}
