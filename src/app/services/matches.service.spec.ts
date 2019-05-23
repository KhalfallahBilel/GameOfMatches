import { TestBed, inject } from '@angular/core/testing';

import { MatchesService } from './matches.service';
import { Player } from '../player';

describe('MatchesService', () => {
  let service: MatchesService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchesService]
    });
    service = new MatchesService();
  });

  it('should be created', inject([MatchesService], (service: MatchesService) => {
    expect(service).toBeTruthy();
  }));

  it('getPlayers should return empty value', () => {
    service.getPlayers().subscribe(value => {
      expect(value).toEqual([]);
    });
  });

  it('getPlayers should return 1 player and then empty value', () => {
    let player:Player = {name: "Name 1"};
    service.addPlayer(player);
    service.getPlayers().subscribe(value => {
      expect(value).toEqual([player]);
      expect(value[0].name).toEqual(player.name);
    });
    service.removeAllPlayers();
    service.getPlayers().subscribe(value => {
      expect(value).toEqual([]);
    });
  });

  it('getPlayers should return 2 players and then empty value', () => {
    let player:Player = {name: "Name 1"};
    let player2:Player = {name: "Name 2"};
    service.addPlayer(player);
    service.addPlayer(player2);
    service.getPlayers().subscribe(value => {
      expect(value.length).toBe(2);
      expect(value[1].name).toEqual(player2.name);
    });
    service.removeAllPlayers();
    service.getPlayers().subscribe(value => {
      expect(value).toEqual([]);
    });
  });
});
