import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createAction } from '@ngrx/store';
import { delay, map, switchMap } from 'rxjs';
import { rdxLandingIsCurtainFalseTrigger, RDX_LANDING_IS_CURTAIN_FALSE } from './actions';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(
    private actions: Actions
  ) { }

  isCurtainFalseTriggr = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingIsCurtainFalseTrigger),
      delay(1500),
      map(ac => {
        return {
          type: RDX_LANDING_IS_CURTAIN_FALSE
        }
      })
    )
  })
}
