import { Component } from '@angular/core';
import { AuthFacade } from '@videogame-tracker/shared/util-auth';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'videogame-tracker-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  activeUser$ = this.authFacade.activeUser$;
  isLoggedIn = false;

  constructor(private authFacade: AuthFacade) {
    this.authFacade.activeUser$.pipe(
      map((activeUser) => Boolean(activeUser)),
      tap((isLoggedIn) => this.isLoggedIn = isLoggedIn)
    );
  }

  logout(): void {
    this.authFacade.logout();
  }
}
