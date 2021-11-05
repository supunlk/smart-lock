import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { RegisterDeviceComponent } from './register-device/register-device.component';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';
import { DoorData, WsMessage } from '@models/ws-message.model';
import { map } from 'rxjs/operators';
import { WebsocketService } from '@core/services/websocket.service';
import { Store } from '@ngrx/store';
import { selectTelemetryData, selectTelemetryHistory } from '@root-store/telemetry/telemetry.selectors';
import { ActivityLogComponent } from '@shared/room/activity-log/activity-log.component';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
  providers: [ConfirmationService, DialogService]
})
export class RoomComponent implements OnInit {

  roomNo!: string | null;
  floorAlerts$?: Observable<DoorData | null>;
  telemetryHistory$!: Observable<DoorData[]>;

  constructor(private _route: ActivatedRoute,
              private _confirmationService: ConfirmationService,
              private _dialogService: DialogService,
              private _store: Store
  ) {
  }

  ngOnInit(): void {
    this.roomNo = this._route.snapshot.paramMap.get('roomId');
    this.floorAlerts$ = this._store.select(selectTelemetryData);
    this.telemetryHistory$ = this._store.select(selectTelemetryHistory);
  }

  onRegisterDevice(): void {
    this._dialogService.open(RegisterDeviceComponent, {
      width: '500px',
      header: 'Register a device'
    });
  }

  onActivityLog(): void {
    this._dialogService.open(ActivityLogComponent, {
      width: '500px',
      header: 'Register a device',
      data: {
        telemetryHistory$: this.telemetryHistory$
      }
    });
  }

  onDeleteDevice(): void {
    this._confirmationService.confirm({
      message: 'Are you sure that you want to delete this device?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonStyleClass: 'btn btn-outline-secondary',
      acceptButtonStyleClass: 'btn btn-danger',
      accept: () => {
        // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
      },
      reject: () => {
        // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
    });
  }

}
