import { BreakpointObserver } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StepperOrientation } from '@angular/material/stepper';
import {
  ConsoleFacade,
  Game,
  GameFacade,
} from '@videogame-tracker/videogame-tracker/domain';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'videogame-tracker-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit {
  // Limit dates for completion
  minDate = new Date();
  currentDate = new Date();

  // Max year validator
  maxYear = moment().add(28, 'y').get('year');

  // personalNotes max characters
  notesMaxLength = 120;

  // Steps forms
  gameTitleForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
  });
  gameYearForm = this.fb.group({
    year: ['', [Validators.required, Validators.min(1950)]],
  });
  gameConsoleForm = this.fb.group({
    console: ['', Validators.required],
  });
  gameCompletedForm = this.fb.group({
    completed: [{ value: null, disabled: true }, Validators.required],
  });
  gameDateOfCompletionForm = this.fb.group({
    // TODO: - Check validators and masks
    dateOfCompletion: [{ value: '', disabled: true }, Validators.required],
  });
  gamePersonalNotesForm = this.fb.group({
    personalNotes: [
      '',
      [Validators.required, Validators.maxLength(this.notesMaxLength)],
    ],
  });

  // UI control
  stepperOrientation: Observable<StepperOrientation>;

  // Fetch select options
  consoleList$ = this.consoleFacade.allConsole$;

  constructor(
    private gameFacade: GameFacade,
    private consoleFacade: ConsoleFacade,
    private fb: FormBuilder,
    breakpointObserver: BreakpointObserver,
    private location: Location
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

  onYearSubmit(): void {
    const year = Number(this.gameYearForm.controls['year'].value);
    this.setMinDateRange(year);
    this.updateDisabledCompleted(year);
  }

  // Set the minimum date to January 1st of game release year
  private setMinDateRange(gameReleaseYear: number): void {
    this.minDate = new Date(gameReleaseYear - 0, 0, 1);

    // FIXME: - Reverse flux test condition where completion date is invalid
    // after year change and fix by cleaning invalid completion date
  }

  private updateDisabledCompleted(year: number | undefined): void {
    const disabledCompleted = year ? year > moment().get('y') : false;

    if (disabledCompleted) {
      this.gameCompletedForm.controls['completed'].disable();
    } else {
      this.gameCompletedForm.controls['completed'].enable();
    }
  }

  updateDisabledCompletionDate(): void {
    const disabledCompletionDate =
      !this.gameCompletedForm.controls['completed'].value;

    if (disabledCompletionDate) {
      this.gameDateOfCompletionForm.controls['dateOfCompletion'].disable();
    } else {
      this.gameDateOfCompletionForm.controls['dateOfCompletion'].enable();
    }
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

  formatDate(date: Date): string {
    return moment(date).format('MM/DD/YYYY');
  }

  goBackBtn() {
    this.location.back();
  }
}
