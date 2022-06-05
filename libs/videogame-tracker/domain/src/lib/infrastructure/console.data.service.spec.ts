import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsoleEntity } from '../entities/console.models';

import { ConsoleDataService } from './console.data.service';

const mockConsoles: ConsoleEntity[] = [
  {
    id: 0,
    name: 'PS2',
  },
  {
    id: 1,
    name: 'PS4',
  },
  {
    id: 2,
    name: 'PS5',
  },
  {
    id: 3,
    name: 'XBOX ONE',
  },
  {
    id: 4,
    name: 'XBOX SERIES X',
  },
  {
    id: 5,
    name: 'NINTENDO SWITCH',
  },
];

describe('ConsoleDataService', () => {
  let consoleDataservice: ConsoleDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, BrowserAnimationsModule],
      providers: [ConsoleDataService],
    });
    consoleDataservice = TestBed.inject(ConsoleDataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(consoleDataservice).toBeTruthy();
  });

  it('should retrieve all data', waitForAsync(() => {
    consoleDataservice.load().subscribe((consoleList) => {
      expect(consoleList).toBeTruthy();
      expect(consoleList.length).toBe(6);
      expect(consoleList.find((console) => console.id === 5).name).toBe(
        'NINTENDO SWITCH'
      );
    });

    const req = httpTestingController.expectOne(
      'http://localhost:3001/consoles'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockConsoles);
  }));

  afterEach(() => {
    httpTestingController.verify();
  });
});
