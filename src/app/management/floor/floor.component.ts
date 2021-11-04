import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WebsocketService } from '@core/services/websocket.service';
import { DoorData, WsMessage } from '@models/ws-message.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})

export class FloorComponent implements OnInit {

  floors: string[];
  selectedFloor = '1';
  floorAlerts$?: Observable<DoorData>;

  constructor(private _websocketService: WebsocketService) {
    this.floors = [
      '1', '2', ' 3', '4', '5', '6', '7', '8'
    ];
  }

  ngOnInit(): void {
    this.floorAlerts$ = (this._websocketService?.connection$ as Observable<any>).pipe(
      map((wsMessage: WsMessage) => wsMessage.data),
      map(data => {

        const obj: any = {};

        Object.keys(data).forEach(k => {
          obj[k] = data[k][0][1] === 'true';
        });

        console.log(obj);
        return obj as DoorData;
      })
    );
  }

}
