import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';
import { Observable } from 'rxjs';
import { DoorData } from '@models/ws-message.model';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  constructor(private _api: ApiService) {
  }

  publishAttribute(data: DoorData): Observable<any> {
    return this._api.post('plugins/telemetry/DEVICE/dd4fc580-319a-11ec-949f-efa3b63d6be3/SHARED_SCOPE', {...data});
  }
}
