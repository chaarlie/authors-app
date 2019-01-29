import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { AuthorService } from '../component/authors/author.service';
import { Author } from '../component/authors/model/Author';

@Directive({
  selector: '[appEditableInput]'
})
export class EditableInputDirective {

  constructor(private ref: ElementRef, private authorService: AuthorService) { }

  @Input() attributeName: string;
  @Input() author: Author;

  @HostListener('click') onclick() {
    this.ref.nativeElement.contentEditable = true;
  }

  @HostListener('blur') onBlur() {
    if(this.author.hasOwnProperty(this.attributeName)) {
      this.author[this.attributeName] = this.ref.nativeElement.innerHTML;
      this.authorService.update(this.author);
    }
  }
}
