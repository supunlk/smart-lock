import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '@core/services/websocket.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

}
