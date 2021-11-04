import { Component, Input, OnInit } from '@angular/core';
import { DoorData } from '@models/ws-message.model';

@Component({
  selector: 'app-floor-plan',
  templateUrl: './floor-plan.component.html',
  styleUrls: ['./floor-plan.component.scss']
})
export class FloorPlanComponent implements OnInit {

  @Input() selectedFloor!: string;
  @Input() alertData!: DoorData | null;

  constructor() { }

  ngOnInit(): void {
  }

}
