import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WebsocketService } from '@core/services/websocket.service';
import { DoorData, WsMessage } from '@models/ws-message.model';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectTelemetryData } from '@root-store/telemetry/telemetry.selectors';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})

export class FloorComponent implements OnInit {

  floors: string[];
  selectedFloor = '1';
  floorAlerts$?: Observable<DoorData | null>;

  constructor(private _store: Store) {
    this.floors = [
      '1', '2', ' 3', '4', '5', '6', '7', '8'
    ];
  }

  ngOnInit(): void {
    this.floorAlerts$ = this._store.select(selectTelemetryData);
  }

}
