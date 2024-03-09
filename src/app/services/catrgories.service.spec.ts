import { TestBed } from '@angular/core/testing';

import { CatrgoriesService } from './catrgories.service';

describe('CatrgoriesService', () => {
  let service: CatrgoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatrgoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
