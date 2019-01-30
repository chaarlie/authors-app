import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayAuthorsComponent } from './component/authors/display-authors/display-authors.component';
import { CreateAuthorComponent } from './component/authors/create-author/create-author.component';


const routes: Routes = [

  {
    path: 'display-authors',
    component: DisplayAuthorsComponent
  },
  {
    path: 'create-author',
    component: CreateAuthorComponent
  },
  {
    path: '**',
    redirectTo: 'display-authors'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
