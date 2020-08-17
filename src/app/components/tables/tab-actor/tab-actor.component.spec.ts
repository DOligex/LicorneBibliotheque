import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabActorComponent } from './tab-actor.component';

describe('TabActorComponent', () => {
  let component: TabActorComponent;
  let fixture: ComponentFixture<TabActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
