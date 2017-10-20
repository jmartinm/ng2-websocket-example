import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

import { AppComponent } from './app.component';
import { KeysPipe } from './app.pipes';
import { WebSocketService } from './websocket.service';

const config: SocketIoConfig = { url: 'http://localhost:5000/multieditor', options: {rememberTrasnport: false} };

@NgModule({
  declarations: [
    AppComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
