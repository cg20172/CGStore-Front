import { TestBed, inject } from '@angular/core/testing';

import { MachineryService } from './machinery.service';

describe('MachineryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MachineryService]
    });
  });

  it('should be created', inject([MachineryService], (service: MachineryService) => {
    expect(service).toBeTruthy();
  }));
});
