import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  ConsoleFacade,
  Game,
  GameFacade,
} from '@videogame-tracker/videogame-tracker/domain';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'videogame-tracker-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit {
  // Completion dates
  minDate = new Date();
  currentDate = new Date();

  // Year validator date
  maxYear = moment().add(28, 'y').get('year');

  // Steps forms
  gameTitleForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
  });
  // TODO: - Check validators and masks
  gameYearForm = this.fb.group({
    year: [
      '',
      [Validators.required, Validators.min(1950), Validators.max(this.maxYear)],
    ],
  });
  gameConsoleForm = this.fb.group({
    console: ['', Validators.required],
  });
  gameCompletedForm = this.fb.group({
    completed: ['', Validators.required],
  });
  gameDateOfCompletionForm = this.fb.group({
    dateOfCompletion: ['', Validators.required],
  });
  gamePersonalNotesForm = this.fb.group({
    personalNotes: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  consoleList$ = this.consoleFacade.allConsole$;

  constructor(
    private gameFacade: GameFacade,
    private consoleFacade: ConsoleFacade,
    private fb: FormBuilder,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 65.625rem)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
    this.loadAllConsoles();
  }

  private loadAllConsoles(): void {
    this.consoleFacade.loadConsoleList();
  }

  // Set the minimum date to January 1st of game release year
  setMinDateRange(): void {
    const gameReleaseYear = moment(
      this.gameYearForm.controls['year'].value
    ).get('year');
    this.minDate = new Date(gameReleaseYear - 0, 0, 1);

    // FIXME: - Reverse flux test condition where completion date is invalid
    // after year change and fix by cleaning invalid completion date
  }

  addNewGame(): void {
    const payload: Game = {
      title: this.gameTitleForm.controls['title'].value,
      year: this.gameYearForm.controls['year'].value,
      console: this.gameConsoleForm.controls['console'].value,
      completed: this.gameCompletedForm.controls['completed'].value,
      dateOfCompletion: this.formatDate(
        this.gameDateOfCompletionForm.controls['dateOfCompletion'].value
      ),
      personalNotes: this.gamePersonalNotesForm.controls['personalNotes'].value,
    };
    this.gameFacade.create(payload);
  }

  private formatDate(date: Date): string {
    return moment(date).format('MM/DD/YYYY');
  }

  // logMe() {
  //   console.log(this.gameYearForm.controls['year']);
  // };
}
