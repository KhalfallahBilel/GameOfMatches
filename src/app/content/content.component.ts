import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { MatchesService } from '../services/matches.service';
//Created At 22/05/2019 
//By KHALFALLAH Bilel

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  // liste des joueurs
  listPlayer: Player[];

  // nombre des allumettes
  nbMatches=4;

  // nombre des allumettes restantes
  matchesStays: number;

  // joueurs en cours
  currentPlayer: Player;
  
  // jeu commencé
  started: boolean ;

  title = 'Welcome to Game of Matches ';

  // liste des allumettes
  items: number[] = [];

  //Etat des joueurs
  player1:Boolean = true;
  player2:Boolean = false;

  //injecter le service
  constructor(private matchesService: MatchesService) {

  }

  //A l'initialisation des params
  ngOnInit() {
    this.started = false;
    this.currentPlayer = null;
    this.listPlayer = [];
    this.matchesService.getPlayers().subscribe(res => this.listPlayer = res);
  }

  vsComputer(){
    //TO DO
  }

  //Quand on clique sur play now 
  startGame() {
    this.started = true;
    // Voir si les parametres de jeu sont introduits
    if (this.listPlayer.length == 2 && this.nbMatches > 3 && this.nbMatches <= 100) {
      this.started = true;
      // Chois au hazard qui va commence r le jeu
      this.currentPlayer = this.listPlayer[Math.floor(Math.random() * 2)];
      // Afficher les allumettes selon le nombre introduit
      for (let i = 1; i <= this.nbMatches; i++) {
        this.items.push(i);
      }
      this.matchesStays=this.items.length;
      console.log(this.matchesStays);
    }
  }

  //Enlever les allumettes et basculer entre les joueurs
  removeMatches(numberMatches) {
    var nb=0;
    for (var i = 1; i <= numberMatches; i++) {
      this.items.pop();
      nb++;
      console.log(nb);
    }
    //nombre des couts restants
    this.matchesStays = this.matchesStays-nb;
    console.log(this.matchesStays);
    //En cas ou il ne reste plus des allumettes qui est le gagnat!
    if (this.items.length == 0) {
      console.log(this.currentPlayer.name+ 'is the winner');
    } 
    // changer le joueur en cours
    else {
      this.currentPlayer = this.listPlayer.filter((player) => player != this.currentPlayer)[0];
    }
  }

  //vider les parametres
  restartGame(): void {
    this.started = false;
    this.currentPlayer = null;
    this.items = [];
    this.matchesService.removeAllPlayers();
  }

  reset(){
    this.items = [];
    this.startGame();
  }
}
