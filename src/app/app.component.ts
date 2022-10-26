import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { landingCurtainLeaveLeft, landingCurtainLeaveRight } from './animator';
import { RDX_LANDING_IS_CURTAIN_FALSE, RDX_LANDING_IS_CURTAIN_FALSE_TRIGGER } from './redux/landing/actions';
import { getRdxLandingIsCurtain } from './redux/landing/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    landingCurtainLeaveLeft,
    landingCurtainLeaveRight
  ]
})
export class AppComponent {
  title = 'laschan';
  isCurtain: Observable<boolean>;
  constructor(
    private store: Store
  ) {
    this.isCurtain = this.store.select(getRdxLandingIsCurtain)
    this.store.dispatch({
      type: RDX_LANDING_IS_CURTAIN_FALSE_TRIGGER
    })
  }
}
