import { Component } from '@angular/core';
import { PetService } from './pet.service';
import { PetModel, Size } from './pet.model';
import { FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
@Component({
  selector: 'pet-input',
  template: `
    <h4>Add Pet</h4>
    <form #petForm="ngForm" (ngSubmit)="addPet(petForm)">
      <input type="text" name="name" placeholder="Pet Name" ngModel/>
      <input type="text" name="food" placeholder="Favourite Food" ngModel/>
      <select [ngModel]="sizes[sizes.medium]" name="size">
        <option *ngFor="let size of sizes|iterateObject:true">{{sizes[size.key]}}
        </option>
      </select>
      <button type="submit">Add Pet</button>
    </form>
  `
})
export class PetInputComponent {
  sizes = Size;
  petService: PetService;

  constructor(petService: PetService) {
    this.petService = petService;
  }

  addPet(petForm: NgForm) {
    let petModel = new PetModel(petForm.value.name, true);
    Object.assign(petModel, {size: this.sizes[petForm.value.size], favouriteFoods: petForm.value.food.split(',')});
    this.petService.addPet(petModel);
    petForm.resetForm({size: this.sizes[this.sizes.medium]})
  }

}
