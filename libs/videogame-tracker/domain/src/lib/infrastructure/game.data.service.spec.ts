import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Game } from '../entities/game';

import { GameDataService } from './game.data.service';

const mockGames: Game[] = [
  {
    title: 'Metal Gear Solid 2',
    year: '2001',
    console: 'PS2',
    completed: true,
    dateOfCompletion: '07/08/2021',
    personalNotes: 'I really liked this game. Kojima really nailed here.',
    id: 1,
  },
  {
    title: 'FIFA 22',
    year: '2021',
    console: 'XBOX ONE',
    completed: true,
    dateOfCompletion: '01/10/2021',
    personalNotes:
      'Very realistic and fun soccer game. Nice job from EA Sports.',
    id: 2,
  },
  {
    title: 'Mortal Kombat 11',
    year: '2019',
    console: 'PS4',
    completed: true,
    dateOfCompletion: '04/23/2019',
    personalNotes: 'As always, Raiden is the best character.',
    id: 3,
  },
];

describe('ConsoleDataService', () => {
  let gameDataService: GameDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, BrowserAnimationsModule],
      providers: [GameDataService],
    });
    gameDataService = TestBed.inject(GameDataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(gameDataService).toBeTruthy();
  });

  it('should retrieve all data', waitForAsync(() => {
    gameDataService.loadGames('').subscribe((gameList) => {
      expect(gameList).toBeTruthy();
      expect(gameList.length).toBe(3);
      expect(gameList.find((console) => console.id === 3).title).toBe(
        'Mortal Kombat 11'
      );
    });

    const req = httpTestingController.expectOne(
      'http://localhost:3001/games?_sort=year&_order=desc'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockGames);
  }));

  it('should create new game', waitForAsync(() => {
    const newGame = {
      ...mockGames.find((console) => console.id === 3),
      title: 'newGame',
      id: 4,
    };
    gameDataService.create(newGame).subscribe((game) => {
      expect(game).toBeTruthy();
      expect(game.id).toBe(4);
      expect(game.title).toEqual('newGame');
    });

    const req = httpTestingController.expectOne('http://localhost:3001/games');
    expect(req.request.method).toEqual('POST'); // PUT
    expect(req.request.body.title).toEqual(newGame.title);
    req.flush({ ...mockGames, ...newGame });
  }));

  afterEach(() => {
    httpTestingController.verify();
  });
});
