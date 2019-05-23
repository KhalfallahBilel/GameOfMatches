import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatchesService } from '../services/matches.service';
import { Player } from '../player';
import { namesCheck } from '../validator';
//Created At 22/05/2019 
//By KHALFALLAH Bilel


 
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  //Creation du formGroup
  pForm: FormGroup;
  //L'etat de l'enregistrement des joueurs
  submitted: boolean = false;

  //Injecter le service
  constructor(private matchesService: MatchesService,private fb:FormBuilder) { }

  //Initialiser l'application et la creation du formulaire 
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.pForm = this.fb.group({
      nameP1: new FormControl('',[Validators.required]),
      nameP2: new FormControl('',[Validators.required])
    },
    {validator:namesCheck('nameP1','nameP2')}
    );
  }

 

  //Enregistrer les deux joueurs en appelant le service injecter
  submitPlayers() {
    let player1: Player = {
      name: this.pForm.get("nameP1").value
    };
    let player2: Player = {
      name: this.pForm.get("nameP2").value
    }
    this.matchesService.matchesNumber = this.pForm.get("nbMatches");
    this.matchesService.addPlayer(player1);
    this.matchesService.addPlayer(player2);
    this.submitted = true;
    console.log(this.matchesService.listPlayer);
  }
}
