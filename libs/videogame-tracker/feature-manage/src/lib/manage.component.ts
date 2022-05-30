import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Game, GameFacade } from '@videogame-tracker/videogame-tracker/domain';

@Component({
  selector: 'videogame-tracker-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit {
  gameForm: FormGroup;

  constructor(private gameFacade: GameFacade, private fb: FormBuilder) {
    this.gameForm = this.fb.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      console: ['', Validators.required],
      completed: [null, Validators.required],
      dateOfCompletion: ['', Validators.required],
      personalNotes: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log('manage component');
  }

  create(game: Game): void {
    this.gameFacade.create(game);
  }
}
