import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapCountryComponent } from './recap-country.component';

describe('RecapCountryComponent', () => {
  let component: RecapCountryComponent;
  let fixture: ComponentFixture<RecapCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecapCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
