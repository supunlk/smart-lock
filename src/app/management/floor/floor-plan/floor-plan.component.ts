import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-floor-plan',
  templateUrl: './floor-plan.component.html',
  styleUrls: ['./floor-plan.component.scss']
})
export class FloorPlanComponent implements OnInit {

  @Input() selectedFloor!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
