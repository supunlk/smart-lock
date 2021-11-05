import * as fromTelemetry from './telemetry.actions';

describe('loadTelemetrys', () => {
  it('should return an action', () => {
    expect(fromTelemetry.loadTelemetrys().type).toBe('[Telemetry] Load Telemetrys');
  });
});
