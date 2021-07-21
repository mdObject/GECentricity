import { TestBed } from '@angular/core/testing';

import { MdObjectServiceService } from './md-object-service.service';

describe('MdObjectServiceService', () => {
  let service: MdObjectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdObjectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
