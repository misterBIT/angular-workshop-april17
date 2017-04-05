import { PetModel } from './pet.model';
export class PetService {

  public pets: PetModel[] = [
    new PetModel('Avsha'), new PetModel('Abulele'), new PetModel('AvAv'),
    new PetModel('Banian'), new PetModel('Baba'), new PetModel('Basta'),
    new PetModel('Craco'), new PetModel('Charli'), new PetModel('Chompi')];


  addPet(pet: PetModel) {
    this.pets = [...this.pets, pet];
    pet.id = this.pets.indexOf(pet);
    console.log('pet added', this.pets);
  }

  feed(pet: PetModel) {
    pet.feed();
    this.pets = [...this.pets];
  }

  toggleAwake(pet) {
    let newModel = new PetModel();
    Object.assign(newModel, pet, {awake: !pet.awake});
    this.pets = [...this.pets.slice(0, this.pets.indexOf(pet)), newModel, ...this.pets.slice(this.pets.indexOf(pet) + 1)];
  }
}
