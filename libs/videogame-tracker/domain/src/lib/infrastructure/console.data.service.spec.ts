import { TestBed } from '@angular/core/testing';

import { ConsoleDataService } from './console.data.service';

describe('Console.DataService', () => {
  let service: ConsoleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsoleDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
