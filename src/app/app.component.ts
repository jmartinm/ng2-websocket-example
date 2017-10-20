import { Component, ChangeDetectorRef } from '@angular/core';
import { WebSocketService } from './websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tasks = {};

  constructor(private socket: WebSocketService, private cd: ChangeDetectorRef) {
    socket.getMessage().subscribe(
      (msg) => {
        console.log(msg['data']);
        console.log(msg['count']);
      }
    );

    socket.getProgress().subscribe(
      (msg) => {
        console.log(msg);
        this.tasks[msg['id']] = msg['progress'];
        this.tasks = Object.assign({}, this.tasks);
        // this.cd.markForCheck(); // marks path
      }
    );

  }

  sendMessage() {
    const msg = {
      data: 'Hello from client'
    };
    console.log("Sending ", msg);
    this.socket.sendMessage(msg);
  }

}
