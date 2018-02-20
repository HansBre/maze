import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class SocketService {
  socket:WebSocket;
  subject = new Subject();
  streamOpen = false;
  constructor() {
    
   }

   initOutputStream(){
    return this.subject;
   }

   connect(){
    let self = this;
    this.subject = new Subject();
    this.socket = new WebSocket("ws://192.168.1.144:3001");
    this.socket.addEventListener("open",()=>{
      console.log("Socket connection established");
      window.addEventListener('deviceorientation', function(event) {
        let msg = {alpha:event.alpha,beta:event.beta,gamma:event.gamma};
        self.socket.send(JSON.stringify(msg));
      });
    });
    this.socket.addEventListener("message",(msg)=>{
      msg = msg.data;
      self.subject.next(msg);
    });
   }
}
