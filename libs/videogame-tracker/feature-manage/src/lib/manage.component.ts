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

@Component({
  selector: 'videogame-tracker-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit {
  gameTitleForm = this.fb.group({
    title: ['', Validators.required],
  });
  gameYearForm = this.fb.group({
    year: ['', Validators.required],
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
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
    this.loadAllConsoles();
  }

  private loadAllConsoles(): void {
    this.consoleFacade.loadConsoleList();
  }

  addNewGame(): void {
    const payload: Game = {
      title: this.gameTitleForm.controls['title'].value,
      year: this.gameYearForm.controls['year'].value,
      console: this.gameConsoleForm.controls['console'].value,
      completed: true, //this.gameCompletedForm.controls['completed'].value,
      dateOfCompletion:
        this.gameDateOfCompletionForm.controls['dateOfCompletion'].value,
      personalNotes: this.gamePersonalNotesForm.controls['personalNotes'].value,
    };
    this.gameFacade.create(payload);
  }
}
