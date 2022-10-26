import { createFeatureSelector, createSelector } from "@ngrx/store"
import { ILandingReducer } from "./reducer"

const getRdxLandingFeatureState = createFeatureSelector<ILandingReducer>('landingReducer');

export const getRdxLandingIsCurtain = createSelector(
  getRdxLandingFeatureState,
  state => state.isCurtain
)
