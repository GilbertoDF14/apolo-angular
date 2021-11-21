import { TestBed } from '@angular/core/testing';

import { ApoloService } from './apolo.service';

describe('ApoloService', () => {
  let service: ApoloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApoloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
