import { Component } from '@angular/core';
import { AuthFacade } from '@videogame-tracker/shared/util-auth';

@Component({
  selector: 'login-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  authUser$ = this.authFacade.authUser$;

  constructor(private authFacade: AuthFacade) {
    this.authUser$.subscribe((res) => {
      console.log('res auth', res);
    });
  }

  login(): void {
    this.authFacade.login('user', 'password');
  }
}
