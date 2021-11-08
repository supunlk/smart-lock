import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, filter, map, mergeMap, retry, switchMap } from 'rxjs/operators';
import { DoorData, WsMessage } from '@models/ws-message.model';
import { setTelemetryData } from '@root-store/telemetry/telemetry.actions';
import { WebsocketService } from '@core/services/websocket.service';
import { Store } from '@ngrx/store';
import { MqttService } from 'ngx-mqtt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _websocketService: WebsocketService,
              private _store: Store) {
  }

  ngOnInit(): void {
    this._websocketService.ready$.pipe(
      switchMap(() => (this._websocketService?.connection$ as Observable<any>).pipe(
        map((wsMessage: WsMessage) => wsMessage.data),
        map(data => {
          const obj: any = {};
          if (data) {

            Object.keys(data).forEach(k => {
              if (typeof data[k][0][0] === 'number') {
                obj.time = new Date(data[k][0][0]).toDateString();
              }
              obj[k] = data[k][0][1] === 'true';
            });
          }
          return obj;
        }),
        retry(3)
      ))
    ).subscribe(doorData => {
      this._store.dispatch(setTelemetryData({doorData}));
    });
  }

}
