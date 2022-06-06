import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [MatToolbarModule, MatIconModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event when logout matIcon inside btn is clicked', () => {
    const spyLogoutEmitter = jest.spyOn(component.logout, 'emit');
    const matIcon = fixture.debugElement.query(By.css('mat-icon'))
      .nativeElement as HTMLButtonElement;
    matIcon.click();

    expect(spyLogoutEmitter).toHaveBeenCalled();
    expect(spyLogoutEmitter).toHaveBeenCalledWith(null);
  });
});
