import { TestBed, inject } from '@angular/core/testing';

import { HostconfigService } from './hostconfig.service';

describe('HostconfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HostconfigService]
    });
  });

  it('should be created', inject([HostconfigService], (service: HostconfigService) => {
    expect(service).toBeTruthy();
  }));
});
