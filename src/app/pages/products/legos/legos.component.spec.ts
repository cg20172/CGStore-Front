import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegosComponent } from './legos.component';

describe('LegosComponent', () => {
  let component: LegosComponent;
  let fixture: ComponentFixture<LegosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
