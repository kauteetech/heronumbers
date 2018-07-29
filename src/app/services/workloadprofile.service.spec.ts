import { TestBed, inject } from '@angular/core/testing';

import { WorkloadprofileService } from './workloadprofile.service';

describe('WorkloadprofileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkloadprofileService]
    });
  });

  it('should be created', inject([WorkloadprofileService], (service: WorkloadprofileService) => {
    expect(service).toBeTruthy();
  }));
});
