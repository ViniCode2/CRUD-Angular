import { TestBed } from '@angular/core/testing';

import { CitiesStatesService } from './cities-states.service';

describe('CitiesStatesService', () => {
  let service: CitiesStatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitiesStatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
