import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import 'rxjs/add/operator/map';

@Injectable()
export class WebSocketService {

    constructor(private socket: Socket) {
    }

    sendMessage(msg: any) {
        this.socket.emit("my_event", msg);
    }

    getMessage() {
        return this.socket
            .fromEvent("my_response");
            // .map(data => data['data']);
    }

    getProgress() {
        return this.socket
            .fromEvent("progress");
            // .map(data => data['data']);
    }


    close() {
        this.socket.disconnect();
    }
}
