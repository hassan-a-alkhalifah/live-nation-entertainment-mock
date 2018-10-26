import { TestBed, inject } from '@angular/core/testing';

import { StatsBannerService } from './stats-banner.service';

describe('StatsBannerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatsBannerService]
    });
  });

  it('should be created', inject([StatsBannerService], (service: StatsBannerService) => {
    expect(service).toBeTruthy();
  }));
});
