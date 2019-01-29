import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Author } from '../model/Author';
import { Publication } from '../../publications/model/Publication';

@Component({
  selector: 'app-display-authors',
  templateUrl: './display-authors.component.html',
  styleUrls: ['./display-authors.component.css']
})
export class DisplayAuthorsComponent implements OnInit {

  constructor(private authorService: AuthorService) { }

  authors: Array<Author>;
  publications: Array<Publication>;
  displayedColumns: string[] = ['date', 'title', 'body'];

  ngOnInit() {
    this.getAll();
  }

  showPublications(author) {
    console.log(author)
    this.publications = author.publications;

  }

  getAll() {
    this.authorService.getAll().subscribe((authors) => this.authors = authors);
  }
}
