import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { ContentComponent } from './content/content.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule, 
        FormsModule
      ], 
      declarations: [
        AppComponent,
        PlayerComponent,
        ContentComponent
      ],
    }).compileComponents();
  }));
  

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


});
