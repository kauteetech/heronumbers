import { TestBed, inject } from '@angular/core/testing';

import { ReadynodeService } from './readynode.service';

describe('ReadynodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadynodeService]
    });
  });

  it('should be created', inject([ReadynodeService], (service: ReadynodeService) => {
    expect(service).toBeTruthy();
  }));
});
