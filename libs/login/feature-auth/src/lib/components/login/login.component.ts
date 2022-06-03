import { Component } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
// import { AuthFacade } from '@videogame-tracker/shared/util-auth';

@Component({
  selector: 'login-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  hide = true;

  constructor(
    // private authFacade: AuthFacade,
     private fb: FormBuilder) {}

  login(): void {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    // this.authFacade.login(username, password);
  }
}
