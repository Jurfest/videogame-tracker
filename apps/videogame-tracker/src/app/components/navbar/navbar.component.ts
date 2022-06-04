import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'videogame-tracker-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() logout = new EventEmitter<null>();
}
