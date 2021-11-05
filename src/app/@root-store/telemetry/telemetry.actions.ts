import { createAction, props } from '@ngrx/store';
import { DoorData } from '@models/ws-message.model';

export const setTelemetryData = createAction(
  '[Telemetry] Set Telemetry Data',
  props<{doorData: DoorData}>()
);




