import { TestBed } from '@angular/core/testing';

import { NascarDriverListService } from './nascar-driver-list.service';

describe('NascarDriverListService', () => {
  let service: NascarDriverListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NascarDriverListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
