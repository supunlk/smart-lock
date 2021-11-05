import { Action, createReducer, on } from '@ngrx/store';
import { DoorData } from '@models/ws-message.model';
import * as TelemetryActions from './telemetry.actions';


export const telemetryFeatureKey = 'telemetry';

export interface TelemetryState {
  telemetryData: DoorData | null;
  history: DoorData[];
}

export const initialState: TelemetryState = {
  telemetryData: null,
  history: []
};


export const telemetryReducer = createReducer(
  initialState,

  on(TelemetryActions.setTelemetryData,
    (state, {doorData}) => {
      return {
        ...state,
        history: [...state.history, doorData],
        telemetryData: doorData
      };
    }
  ),
);

