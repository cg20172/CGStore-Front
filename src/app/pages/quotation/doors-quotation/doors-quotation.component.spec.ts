import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorsQuotationComponent } from './doors-quotation.component';

describe('DoorsQuotationComponent', () => {
  let component: DoorsQuotationComponent;
  let fixture: ComponentFixture<DoorsQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorsQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorsQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
