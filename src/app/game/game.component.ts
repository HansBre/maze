import { Component, OnInit } from '@angular/core';
import {SocketService} from '../socket.service';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  centerY:number = 100;
  centerX:number = 100;

  constructor(private server:SocketService) { }

  ngOnInit() {
  }
}
