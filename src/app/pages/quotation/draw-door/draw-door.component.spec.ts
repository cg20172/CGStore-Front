import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawDoorComponent } from './draw-door.component';

describe('DrawDoorComponent', () => {
  let component: DrawDoorComponent;
  let fixture: ComponentFixture<DrawDoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawDoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
