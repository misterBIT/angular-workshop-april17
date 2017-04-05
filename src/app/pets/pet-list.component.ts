import { Component } from '@angular/core';
import { PetService } from './pet.service';
import { animate, state, style, keyframes, transition, trigger } from '@angular/animations';

@Component({
  selector: 'pet-list',
  styles: [`
    pet-renderer{
      display: block;
    }
    section {
      min-height: 400px;
    }

    li {
      list-style: none;
      display: inline-block;
      margin: 10px;
      padding: 5px;
      text-align: center;
      border: 1px solid #aaa;
      border-radius: 4px;
    }`],
  template: `
    <section>
      <h2>Pet List</h2>
      <letter-selector [letter]="letter" (select)="letter = $event"></letter-selector>
      <ul>
        <li @flyInOut *ngFor="let currPet of petService.pets | petSearch:letter ;trackBy:identity">
          <pet-renderer [@petBounce]="currPet.awake.toString()" (feed)="petService.feed(currPet)" (awakeChange)="petService.toggleAwake(currPet)"
                        [pet]="currPet"></pet-renderer>
        </li>
      </ul>
    </section>
    <pet-input></pet-input>
  `,
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate(100, style({transform: 'translateX(0)'}))
      ]),
      transition(':leave', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])]),
    trigger('petBounce', [
      state('true', style({transform: 'rotate(0)', opacity: 1})),
      state('false', style({transform: 'rotate(0)', opacity: 0.5})),
      transition('true <=> false', [
        animate(200, keyframes([
          style({transform: 'rotate(0)'}),
          style({transform: 'rotate(10deg)'}),
          style({transform: 'rotate(0)'}),
          style({transform: 'rotate(-10deg)'}),
          style({transform: 'rotate(0deg)'})
        ]))
      ])
    ])]
})
export class PetListComponent {
  letter = 'A';

  identity(currPet, index) {
    return currPet ? currPet.id : undefined;
  }

  constructor(private petService: PetService) {
  }

}
