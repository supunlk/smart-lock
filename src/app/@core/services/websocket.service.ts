import { Injectable } from '@angular/core';
import { SL_TOKEN } from '@models/local-storage.model';
import { environment } from '@env/environment';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  connection$?: WebSocketSubject<any>;
  ready$ = new Subject();
  private RETRY_SECONDS = 10;

  constructor() {
  }


  connect(): void {
    this.connection$ = webSocket(this._wsUrl());
    this.ready$.next();
  }

  send(data: any): void {
    if (this.connection$) {
      this.connection$.next(data);
    } else {
      console.error('Did not send data, open a connection first');
    }
  }

  subscribeToDevice(deviceId: string): void {
    this.send({
      tsSubCmds: [
        {
          entityType: 'DEVICE',
          entityId: deviceId,
          scope: 'LATEST_TELEMETRY'
        }
      ],
      historyCmds: [],
      attrSubCmds: []
    });
  }

  closeConnection(): void {
    if (this.connection$) {
      this.connection$.complete();
    }
  }

  private _wsUrl(): string {
    const token = localStorage.getItem(SL_TOKEN);
    return `${environment.wsEndpoint}?token=${token}`;
  }
}
