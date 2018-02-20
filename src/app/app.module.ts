import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {router} from './app.routing';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { CanvasComponent } from './canvas/canvas.component';
import {SocketService} from './socket.service';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    router
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
