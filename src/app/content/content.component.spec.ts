import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatchesService } from '../services/matches.service';
import { PlayerComponent } from '../player/player.component';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      imports: [ReactiveFormsModule, FormsModule], 
      declarations: [ ContentComponent,PlayerComponent ],
      providers:[MatchesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('submitting the nbMatches', () => {
    expect(component.nbMatches).toBeTruthy();
  });

  it('should create a new party', () => {
    expect(component.nbMatches).toEqual(4);
    expect(component.listPlayer.length).toBe(0);

    fixture.detectChanges();
  });
});
