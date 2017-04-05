import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LetterSelectorComponent } from './letter-selector.component';
import { IterateObjectPipe } from './iterate-object.pipe';
import { DoesNotEndWithCommaDirective } from './does-not-end-with-comma.directive';
import { TagInputModule } from 'ng2-tag-input';
@NgModule({
  providers: [],
  declarations: [IterateObjectPipe, LetterSelectorComponent, DoesNotEndWithCommaDirective],
  imports: [CommonModule],
  exports: [CommonModule,TagInputModule, ReactiveFormsModule, FormsModule, LetterSelectorComponent, IterateObjectPipe, DoesNotEndWithCommaDirective],
})
export class SharedModule {
}
