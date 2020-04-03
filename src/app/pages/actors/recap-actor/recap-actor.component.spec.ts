import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapActorComponent } from './recap-actor.component';

describe('RecapActorComponent', () => {
  let component: RecapActorComponent;
  let fixture: ComponentFixture<RecapActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecapActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
