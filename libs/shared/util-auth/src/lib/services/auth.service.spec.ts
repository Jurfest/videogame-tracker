import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AuthEntity } from '../+state/auth.models';

import { AuthService } from './auth.service';

const mockUser: AuthEntity = {
  id: '1',
  name: 'Bob',
};

const mockLogoutRes = { userId: '1' };

describe('AuthService', () => {
  let authService: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
    authService = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should get user data when name and password is correct', waitForAsync(() => {
    authService.fakeLogin('user', 'password').subscribe((userData) => {
      expect(userData).toBeTruthy();
      expect(userData.name).toBe('Bob');
    });

    const req = httpTestingController.expectOne(
      'http://localhost:3001/login?user=user&password=password'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockUser);
  }));

  it('should logout user', waitForAsync(() => {
    authService.fakeLogout('userId').subscribe((res) => {
      expect(res).toBeTruthy();
      expect(res.userId).toBe('1');
    });

    const req = httpTestingController.expectOne(
      'http://localhost:3001/revokeToken'
    );
    expect(req.request.method).toEqual('POST');
    req.flush(mockLogoutRes);
  }));

  afterEach(() => {
    httpTestingController.verify();
  });
});
