import { createFeatureSelector, createSelector } from '@ngrx/store';
import { telemetryFeatureKey, TelemetryState } from '@root-store/telemetry/telemetry.reducer';

export const selectTelemetryState = createFeatureSelector<TelemetryState>(telemetryFeatureKey);

export const selectTelemetryData = createSelector(
  selectTelemetryState,
  (telemetryState) => telemetryState.telemetryData
);
export const selectTelemetryHistory = createSelector(
  selectTelemetryState,
  (telemetryState) => telemetryState.history
);
