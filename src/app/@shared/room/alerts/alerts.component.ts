import { Component, Input, OnInit } from '@angular/core';
import { DoorData } from '@models/ws-message.model';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  @Input() doorData!: DoorData;
  @Input() showTime?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
