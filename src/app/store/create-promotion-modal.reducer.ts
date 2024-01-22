import { createReducer, on } from '@ngrx/store';
import * as modalActions from './create-promotion-modal.actions';
import {Promotion} from "../model/promotion.model";

export const initialState: Promotion = {
  name: '',
  startDate: new Date(),
  endDate: new Date(),
  event: ''
};

export const promotionReducer = createReducer(
  initialState,
  on(modalActions.savePromotion, (state, { promotion }) => ({ ...state, ...promotion }))
);

