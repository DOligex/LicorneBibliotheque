import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapKindPublicComponent } from './recap-kind-public.component';

describe('RecapKindPublicComponent', () => {
  let component: RecapKindPublicComponent;
  let fixture: ComponentFixture<RecapKindPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecapKindPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapKindPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
