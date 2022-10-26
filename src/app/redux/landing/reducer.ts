import { createReducer, on } from "@ngrx/store";
import { rdxLAndingIsCurtainFalse } from "./actions";

export interface ILandingReducer {
    isCurtain: boolean;
}
export const landingInitial: ILandingReducer = {
  isCurtain: true
}
export const landingReducer = createReducer(
  landingInitial,
  on(rdxLAndingIsCurtainFalse, (state: ILandingReducer) => {
    return {
      ...state,
      isCurtain: false
    }
  })
)
