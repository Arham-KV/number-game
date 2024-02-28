import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { GameOddComponent } from './game-odd/game-odd.component';
import { GameEvenComponent } from './game-even/game-even.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    GameOddComponent,
    GameEvenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
