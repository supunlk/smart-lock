import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { DoorData } from '@models/ws-message.model';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.scss']
})
export class ActivityLogComponent implements OnInit {

  telemetryHistory$: Observable<DoorData[]>;

  constructor(public config: DynamicDialogConfig) {
    this.telemetryHistory$ = config.data.telemetryHistory$;
  }

  ngOnInit(): void {
  }

}
