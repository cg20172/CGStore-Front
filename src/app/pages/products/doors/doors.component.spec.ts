import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorsComponent } from './doors.component';

describe('DoorsComponent', () => {
  let component: DoorsComponent;
  let fixture: ComponentFixture<DoorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
