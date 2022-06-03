import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() loginEmitter = new EventEmitter<unknown>();

  login(): void {
    this.loginEmitter.emit();
  }
}
