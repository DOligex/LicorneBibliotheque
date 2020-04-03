import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapMovieComponent } from './recap-movie.component';

describe('RecapMovieComponent', () => {
  let component: RecapMovieComponent;
  let fixture: ComponentFixture<RecapMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecapMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
