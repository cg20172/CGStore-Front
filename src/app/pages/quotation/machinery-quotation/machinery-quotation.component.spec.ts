import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryQuotationComponent } from './machinery-quotation.component';

describe('MachineryQuotationComponent', () => {
  let component: MachineryQuotationComponent;
  let fixture: ComponentFixture<MachineryQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
