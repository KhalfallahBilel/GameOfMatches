import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { PlayerComponent } from './player/player.component';
//Created At 22/05/2019 
//By KHALFALLAH Bilel
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
