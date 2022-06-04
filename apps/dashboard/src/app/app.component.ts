import { Component } from '@angular/core';
import { AuthFacade } from '@videogame-tracker/shared/util-auth';

@Component({
  selector: 'videogame-tracker-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // activeUser$ = this.authFacade.activeUser$;

  // constructor(private authFacade: AuthFacade) {}

  logout(): void {
    // this.authFacade.logout();
  }
}
