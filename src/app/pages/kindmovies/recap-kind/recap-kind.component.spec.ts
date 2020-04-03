import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapKindComponent } from './recap-kind.component';

describe('RecapKindComponent', () => {
  let component: RecapKindComponent;
  let fixture: ComponentFixture<RecapKindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecapKindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapKindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
