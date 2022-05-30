import { Component, OnInit } from '@angular/core';
import { GameFacade } from '@videogame-tracker/videogame-tracker/domain';

@Component({
  selector: 'videogame-tracker-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit {
  constructor(private gameFacade: GameFacade) {}

  ngOnInit(): void {
    //
    console.log('manage component');
  }
}
