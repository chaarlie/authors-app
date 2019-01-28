import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Author } from '../model/Author';

@Component({
  selector: 'app-display-authors',
  templateUrl: './display-authors.component.html',
  styleUrls: ['./display-authors.component.css']
})
export class DisplayAuthorsComponent implements OnInit {

  constructor(private authorService: AuthorService) { }

  authors: Author[];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.authorService.getAll().subscribe((authors) => this.authors = authors);
  }
}
