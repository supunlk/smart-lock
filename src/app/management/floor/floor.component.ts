import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})

export class FloorComponent implements OnInit {

  floors: string[];

  selectedFloor = '1';

  constructor() {
    this.floors = [
      '1', '2',' 3', '4', '5', '6', '7', '8'
    ];
  }

  ngOnInit(): void {
  }

}
