import { TestBed } from '@angular/core/testing';

import { RedirectIfAuthenticatedService } from './redirect-if-authenticated.service';

describe('RedirectIfAuthenticatedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedirectIfAuthenticatedService = TestBed.get(RedirectIfAuthenticatedService);
    expect(service).toBeTruthy();
  });
});
