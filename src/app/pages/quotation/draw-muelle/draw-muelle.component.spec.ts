import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawMuelleComponent } from './draw-muelle.component';

describe('DrawMuelleComponent', () => {
  let component: DrawMuelleComponent;
  let fixture: ComponentFixture<DrawMuelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawMuelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawMuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
