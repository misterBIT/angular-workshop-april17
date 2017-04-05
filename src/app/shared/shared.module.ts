import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LetterSelectorComponent } from './letter-selector.component';
import { IterateObjectPipe } from './iterate-object.pipe';
import { DoesNotEndWithCommaDirective } from './does-not-end-with-comma.directive';

@NgModule({
  providers: [],
  declarations: [IterateObjectPipe, LetterSelectorComponent, DoesNotEndWithCommaDirective],
  imports: [CommonModule],
  exports: [CommonModule, FormsModule, LetterSelectorComponent, IterateObjectPipe,DoesNotEndWithCommaDirective],
})
export class SharedModule {
}
