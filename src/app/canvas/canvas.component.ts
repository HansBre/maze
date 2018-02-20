import { Component, OnInit,AfterViewInit,ViewChild,ElementRef,Input} from '@angular/core';
import {Observable} from 'rxjs';
import {SocketService} from '../socket.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  // a reference to the canvas element from our template

  centerY:number = 100;
  centerX:number = 100;

  constructor(private server:SocketService) { }

  ngOnInit() {
    let self = this;
    self.server.connect();
    self.server.initOutputStream().subscribe((msg:any)=>{
      msg = JSON.parse(msg);
      this.centerX = 100 +msg.beta*1.4;
      this.centerY = 100 +  msg.gamma*-1.4;
    });
  }
}