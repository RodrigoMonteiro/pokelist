import { TestBed } from '@angular/core/testing';

import { UtilServiceService } from './Util.service';

describe('UtilServiceService', () => {
  let service: UtilServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
