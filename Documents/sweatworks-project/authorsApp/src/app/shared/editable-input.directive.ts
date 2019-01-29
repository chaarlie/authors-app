import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { AuthorService } from '../component/authors/author.service';
import { Author } from '../component/authors/model/Author';
import { Publication } from '../component/publications/model/Publication';

@Directive({
  selector: '[appEditableInput]'
})
export class EditableInputDirective {

  constructor(private ref: ElementRef, private authorService: AuthorService) { }

  @Input() attributeName: string;
  @Input() author: Author;
  @Input() publicationOb: Publication;

  @HostListener('click') onclick() {
    this.ref.nativeElement.contentEditable = true;
  }

  @HostListener('blur') onBlur() {
    if( this.publicationOb && this.publicationOb.hasOwnProperty(this.attributeName) ) {
      this.authorService.getAll().subscribe((authors) => {
      let modifiedAuthor = authors.filter((a) => a.id == this.author.id );
      let { publications } = modifiedAuthor[0];
        
      for(let k in publications) {
        if(
          publications[k].title == this.publicationOb.title ||
          publications[k].date == this.publicationOb.date ||
          publications[k].body == this.publicationOb.body 
          ) {
            
            publications[k][this.attributeName] = this.ref.nativeElement.innerText;
  
            break;
        }
      }

      modifiedAuthor[0].publications = publications;
      this.authorService.update(modifiedAuthor[0]);
      });
    }

    if(this.author && this.author.hasOwnProperty(this.attributeName) ) {
      this.author[this.attributeName] = this.ref.nativeElement.childNodes[0].innerText;
      this.authorService.update(this.author);
    }
  }
}
