import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RollEmComponent } from './components/roll-em/roll-em.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { DicePickerComponent } from './components/dice-picker/dice-picker.component';

@NgModule({
  declarations: [AppComponent, RollEmComponent, ScoreboardComponent, DicePickerComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
