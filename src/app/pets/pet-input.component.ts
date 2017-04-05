import { Component } from '@angular/core';
import { PetService } from './pet.service';
import { PetModel, Size } from './pet.model';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { DoesNotEndWithCommaDirective } from '../shared/does-not-end-with-comma.directive';
@Component({
  selector: 'pet-input',
  styles: [`
    label {
      min-width: 100px;
      display: inline-block;
    }

    input {
      margin-bottom: 10px;
    }

    .validation {
      color: red;
    }

    .submitBtn {
      margin-top: 20px;
      border: 1px solid #ffad41;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
      font-size: 12px;
      font-family: arial, helvetica, sans-serif;
      padding: 10px 10px 10px;
      text-decoration: none;
      display: inline-block;
      text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.3);
      font-weight: bold;
      color: #FFFFFF;
      background-color: #ffc579;
      background-image: -webkit-gradient(linear, left top, left bottom, from(#ffc579), to(#fb9d23));
      background-image: -webkit-linear-gradient(top, #ffc579, #fb9d23);
      background-image: -moz-linear-gradient(top, #ffc579, #fb9d23);
      background-image: -ms-linear-gradient(top, #ffc579, #fb9d23);
      background-image: -o-linear-gradient(top, #ffc579, #fb9d23);
      background-image: linear-gradient(to bottom, #ffc579, #fb9d23);
      filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr=#ffc579, endColorstr=#fb9d23);
    }

    .submitBtn:hover {
      border: 1px solid #ff9913;
      background-color: #ffaf46;
      background-image: -webkit-gradient(linear, left top, left bottom, from(#ffaf46), to(#e78404));
      background-image: -webkit-linear-gradient(top, #ffaf46, #e78404);
      background-image: -moz-linear-gradient(top, #ffaf46, #e78404);
      background-image: -ms-linear-gradient(top, #ffafdisabled46, #e78404);
      background-image: -o-linear-gradient(top, #ffaf46, #e78404);
      background-image: linear-gradient(to bottom, #ffaf46, #e78404);
      filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr=#ffaf46, endColorstr=#e78404);
    }

    .submitBtn:disabled {
      background: grey none;
      border: none;
    }

    select {
      height: 24px;
      background: lightgoldenrodyellow;
      color: brown;
      border-radius: 3px;
    }
  `
  ],
  template: `
    <h4>Add Pet</h4>
    <form [formGroup]="petForm" (ngSubmit)="addPet()">
      <div class="form-control">
        <label for="name">Name:</label>
        <input type="text" formControlName="name" placeholder="Pet Name"/>
        <div class="validation" *ngIf="petForm.get('name').touched && petForm.controls.name.invalid">
          <span *ngIf="petForm.hasError('required','name')">Name is required</span>
          <span *ngIf="petForm.hasError('minlength','name')">Name must be longer than 2 letters</span>
        </div>
      </div>

      <div class="form-control">
        <label for="food">Favorite food:</label>
        <input type="text" #food="ngForm" [formControl]="petForm.controls.food" placeholder="Comma Separated"/>
        <div class="validation">
          <span *ngIf="food.hasError('commaEnd')">The input must not end with a comma</span>
        </div>
      </div>

      <div class="form-control">
        <label for="size">Size:</label>
        <select formControlName="size">
          <option [ngValue]=size.key *ngFor="let size of sizes|iterateObject:true">{{size.value}}
          </option>
        </select>
      </div>
      <button class="submitBtn" [disabled]="petForm.invalid" type="submit">Add Pet</button>
    </form>
    <!--<pre>-->
    <!--{{petForm.value | json}}-->
    <!--</pre>-->
  `
})
export class PetInputComponent {
  petForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      food: new FormControl('', [DoesNotEndWithCommaDirective.Validator]),
      size: new FormControl(Size.medium.toString())
    }
  )
  sizes = Size;
  petService: PetService;

  constructor(petService: PetService) {
    this.petService = petService;
  }

  addPet() {
    let petModel = new PetModel(this.petForm.value.name, true);
    Object.assign(petModel, {size: this.sizes[this.petForm.value.size], favouriteFoods: this.petForm.value.food.split(',')});
    this.petService.addPet(petModel);
    this.petForm.reset({size: this.sizes[this.sizes.medium]})
  }

}
