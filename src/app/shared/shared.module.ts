import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LetterSelectorComponent } from './letter-selector.component';
import { IterateObjectPipe } from './iterate-object.pipe';

@NgModule({
  providers: [],
  declarations: [IterateObjectPipe, LetterSelectorComponent],
  imports: [CommonModule],
  exports: [CommonModule, FormsModule, LetterSelectorComponent, IterateObjectPipe],
})
export class SharedModule {
}
