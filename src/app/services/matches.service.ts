import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from '../player';
//Created At 22/05/2019 
//By KHALFALLAH Bilel
@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  //Initialiser une liste des joueurs de type Player
  listPlayer: Player[] = [];
  //Déclarer le nombre des allumettes
  matchesNumber : any;

  //Ajouter un joueurs methodes qui prend un player de type Playert en param
  addPlayer(player: Player) {
    this.listPlayer.push(player);
  }

  //Retourner un observable de tableau de tyupe player 
  getPlayers(): Observable<Player[]> {
    return of(this.listPlayer);
  }

  //Supprimer les joueurs enregistrer
  removeAllPlayers(): void {
    this.listPlayer = [];
    
  }

  //Ajouter le nombre des allumettes 
  addMatche(matches: number) {
    this.matchesNumber = matches;
  }
}
