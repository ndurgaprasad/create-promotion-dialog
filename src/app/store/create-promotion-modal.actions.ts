import { createAction, props } from '@ngrx/store';
import {Promotion} from "../model/promotion.model";

export const savePromotion = createAction(
  '[Modal] Save Promotion',
  props<{ promotion: Promotion }>()
);
