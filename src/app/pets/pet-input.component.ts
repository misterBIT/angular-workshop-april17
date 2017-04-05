import { Component } from '@angular/core';
import { PetService } from './pet.service';
import { PetModel, Size } from './pet.model';
const addInitialModel = {name: '', favouriteFoods: '', size: Size.medium};
@Component({
  selector: 'pet-input',
  template: `
    <h4>Add Pet</h4>

    <input type="text" placeholder="Pet Name" [(ngModel)]="addModel.name"/>
    <input type="text" placeholder="Favourite Food" [(ngModel)]="addModel.favouriteFoods"/>
    <select ([ngModel])="addModel.size">
      <option *ngFor="let size of sizes|iterateObject:true">{{sizes[size.key]}}
      </option>
    </select>
    <button (click)="addPet()">Add Pet</button>
  `
})
export class PetInputComponent {
  sizes = Size;
  addModel = {...addInitialModel}
  petService: PetService;

  constructor(petService: PetService) {
    this.petService = petService;
  }

  addPet() {
    let petModel = new PetModel('');
    Object.assign(petModel, this.addModel);
    this.petService.addPet(petModel);
    this.addModel = {...addInitialModel};
  }

}
