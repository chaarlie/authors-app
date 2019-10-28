import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Author } from '../model/Author';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private authorService: AuthorService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      emailCtrl: ['', Validators.email]
    });

    this.thirdFormGroup = this._formBuilder.group({
      birthDateCtrl: ['', Validators.required]
    });
  }

  createAuthor() {
    let authorName = this.firstFormGroup.get('nameCtrl').value;
    let authorEmail = this.secondFormGroup.get('emailCtrl').value;
    let authorBIrthDate = this.thirdFormGroup.get('birthDateCtrl').value;

    let newAuthor = new Author(authorName, authorEmail, authorBIrthDate, []);
    this.authorService.create(newAuthor);
  }
}
