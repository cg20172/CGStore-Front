import { TestBed, inject } from '@angular/core/testing';

import { QuotationService } from './quotation.service';

describe('QuotationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuotationService]
    });
  });

  it('should be created', inject([QuotationService], (service: QuotationService) => {
    expect(service).toBeTruthy();
  }));
});
