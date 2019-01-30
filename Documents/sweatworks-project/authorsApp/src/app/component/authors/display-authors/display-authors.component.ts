import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Author } from '../model/Author';
import { Publication } from '../../publications/model/Publication';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-display-authors',
  templateUrl: './display-authors.component.html',
  styleUrls: ['./display-authors.component.css']
})
export class DisplayAuthorsComponent implements OnInit {
  selectedAuthor: Author

  constructor( private authorService: AuthorService) { }

  authors: Array<Author>;
  publications: Array<Publication>;
  displayedColumns: string[] = ['select','date', 'title', 'body'];
  selection = new SelectionModel<Publication>(true, []);

  ngOnInit() {
    this.getAll();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.publications.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.publications.forEach(row => this.selection.select(row));
  }

  deletePublication() {
    if(this.selectedAuthor) {
      let i = this.selectedAuthor.publications.findIndex((p) => p.title == this.selection.selected[0].title)
      this.selectedAuthor.publications.splice(i, 1);

      this.authorService.update(this.selectedAuthor);
    }
  }

  showPublications(author) {
    this.selectedAuthor = author;
    this.publications = author.publications;
  }

  getAll() {
    this.authorService.getAll().subscribe((authors) => this.authors = authors);
  }
}
