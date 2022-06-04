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

  constructor(private authFacade: AuthFacade) {
    this.authFacade.activeUser$
  }

  logout(): void {
    this.authFacade.logout();
  }
}
