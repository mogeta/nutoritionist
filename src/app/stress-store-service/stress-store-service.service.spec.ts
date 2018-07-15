import { TestBed, inject } from '@angular/core/testing';

import { StressStoreServiceService } from './stress-store-service.service';

describe('StressStoreServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StressStoreServiceService]
    });
  });

  it('should be created', inject([StressStoreServiceService], (service: StressStoreServiceService) => {
    expect(service).toBeTruthy();
  }));
});
