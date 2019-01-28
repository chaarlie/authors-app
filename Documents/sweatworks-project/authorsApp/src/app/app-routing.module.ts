import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DisplayAuthorsComponent } from './component/authors/display-authors/display-authors.component';
import { CreateAuthorComponent } from './component/authors/create-author/create-author.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'display-authors',
    component: DisplayAuthorsComponent
  },
  {
    path: 'create-author',
    component: CreateAuthorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
