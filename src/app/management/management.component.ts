import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '@core/services/websocket.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  constructor(private _websocketService: WebsocketService) {

  }

  ngOnInit(): void {
    (this._websocketService?.connection$ as Observable<any>).subscribe(v => console.log(v));
  }

}
