import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawLegoComponent } from './draw-lego.component';

describe('DrawLegoComponent', () => {
  let component: DrawLegoComponent;
  let fixture: ComponentFixture<DrawLegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawLegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawLegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
