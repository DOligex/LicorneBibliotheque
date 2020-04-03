import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindPublicComponent } from './kind-public.component';

describe('KindPublicComponent', () => {
  let component: KindPublicComponent;
  let fixture: ComponentFixture<KindPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
