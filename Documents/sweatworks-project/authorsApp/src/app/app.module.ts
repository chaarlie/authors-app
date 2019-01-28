import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatCardModule, MatButtonModule, MatToolbarModule,   MatSidenavModule, MatListModule, MatStepperModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { DisplayAuthorsComponent } from './component/authors/display-authors/display-authors.component';
import { CreateAuthorComponent } from './component/authors/create-author/create-author.component';
import { PublicationComponent } from './component/publications/publication/publication.component';
import { FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayAuthorsComponent,
    CreateAuthorComponent,
    PublicationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatStepperModule
  ],
  providers: [ FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
