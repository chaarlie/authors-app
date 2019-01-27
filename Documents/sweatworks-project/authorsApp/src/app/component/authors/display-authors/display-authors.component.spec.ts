import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAuthorsComponent } from './display-authors.component';

describe('DisplayAuthorsComponent', () => {
  let component: DisplayAuthorsComponent;
  let fixture: ComponentFixture<DisplayAuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
