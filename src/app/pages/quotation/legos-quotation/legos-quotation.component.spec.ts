import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegosQuotationComponent } from './legos-quotation.component';

describe('LegosQuotationComponent', () => {
  let component: LegosQuotationComponent;
  let fixture: ComponentFixture<LegosQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegosQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegosQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
