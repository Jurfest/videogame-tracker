import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AuthFacade } from '../+state/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authFacade: AuthFacade,
    private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      // return true
    return this.authFacade.activeUser$.pipe(
      map((activeUser) => Boolean(activeUser)),
      tap((isLoggedIn) => {
        console.log('to logado?', isLoggedIn);

        if (!isLoggedIn) {
          this.router.navigateByUrl('login');
        }
      })
    );
  }
}
