import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawAbrigoComponent } from './draw-abrigo.component';

describe('DrawAbrigoComponent', () => {
  let component: DrawAbrigoComponent;
  let fixture: ComponentFixture<DrawAbrigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawAbrigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawAbrigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
