import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TelemetryEffects } from './telemetry.effects';

describe('TelemetryEffects', () => {
  let actions$: Observable<any>;
  let effects: TelemetryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TelemetryEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TelemetryEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
