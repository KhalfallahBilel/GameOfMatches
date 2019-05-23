import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerComponent } from './player.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatchesService } from '../services/matches.service';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerComponent ],
      imports: [ReactiveFormsModule, FormsModule],
      providers:[MatchesService] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.pForm.valid).toBeFalsy();
  });

  it('name player 1 field validity', () => {
    let errors = {};
    let name = component.pForm.controls['nameP1']; 
    errors = name.errors || {};
    expect(name.valid).toBeFalsy(); 
    expect(errors['required']).toBeTruthy(); 
  });

  it('name player 2 field validity', () => {
    let errors = {};
    let name = component.pForm.controls['nameP2']; 
    errors = name.errors || {};
    expect(name.valid).toBeFalsy(); 
    expect(errors['required']).toBeTruthy(); 
  });

  it('submitting the players form', () => {
    expect(component.pForm.valid).toBeFalsy();
    component.pForm.controls['nameP1'].setValue("joueur P1");
    component.pForm.controls['nameP2'].setValue("joueur P2");
    expect(component.pForm.valid).toBeTruthy();
    component.submitPlayers();
    expect(component.submitted).toBeTruthy();
  });
});
