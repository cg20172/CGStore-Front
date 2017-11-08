import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationFormComponent } from './quotation-form.component';

describe('QuotationFormComponent', () => {
  let component: QuotationFormComponent;
  let fixture: ComponentFixture<QuotationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
