import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PetModel } from './pet.model';
@Component({
  encapsulation: ViewEncapsulation.Emulated, // switch to .Native and.None to see the difference
  selector: 'pet-renderer',
  styles: [`
    img {
      max-height: 100px;
    }

    .awake {
      color: #ff9e3f;
    }`
  ],
  template: `
    <div class="pet-renderer">
      <span [class.awake]="pet.awake" class="petName">{{pet.name}}</span>
      <input type="checkbox" [(ngModel)]="pet.awake">
      <img [src]="pet.imgUrl"/>
    </div>`
})
export class PetRendererComponent {
  @Input() pet: PetModel;


}